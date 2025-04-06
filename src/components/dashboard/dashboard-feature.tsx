/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "28WHBU2x69BZaBcu7J3iUTXmDNT9uN2C3ZQCyFeZxS9ABjged8iiVan4DkYoD6SNQ3eyK8BsZyJSZ417wYKsFgDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ca5mpiiFtrsQm7Sf52bagt6EEBp47wiXgDS6Fr8mh2RusRcXRdHskfAN4xtJt9TQFEzsttshHruoPs9nzcBwAaq",
  "key1": "CcQWoaxZgYhjVuWqsJ3YihEovhnFksvLHY64jidqzGur5uKcvxabc27veNNnR9xpcmUTMwYuv9cDFRc5H4Wif4C",
  "key2": "37RyArCcySJUWEKj4CUFkhvFUe4iePQB5DmRwBfw2aYrPifCuUzRkdHGnzu1D5R4rodXXwBac2V52smWvo7Q6tWr",
  "key3": "QAXx9hUppQHy6vi4Zi8TCAMVipNZn1APcLPT2gR4F1pgvbyCU33i9oGSsqzB9q3t8riDYmKDapDdZ17W7ExBLWw",
  "key4": "4izNiZmsNAc7VUUmyx8Yix7B1zCNZo6WgM1nM7ErThHjaX6VWbdmQP52NThLQhuj9MuSLZeXNpc6hFigHCkvaLyn",
  "key5": "3UscmLc7Q9Ri4K9jrHSY6BHTaXfgrVZoYgfHWeihmvuz6ojpzcD3CL8Kt9xBz3ncaqUqxvuqo673jqw1Yykv2yJX",
  "key6": "3Fztxuwu3LzicYe8jGh8HVxJK9sr12vyvDc4e5vHdyXRLFZN11sUfDfKmpurGpvKGVhg6XMC3ts4f7hXsrEibo1e",
  "key7": "2fRSLDL7tVnJBNsNJmQUqW4K1UtxkRKvxFuEkmfYMPHEnzgXbgV9MHEAKaiuWxizqavnZZ1SaKsmjANYR7rkvM1u",
  "key8": "XZQwx9qsqjxsdsThbeqDwtLFXoBRVqJfNeoCqS5VEwr6N35uA4WdCmE51k7Xb9Hq4Z7gKBzcuRyRMrKugoZex2f",
  "key9": "34hX1wgGxxBGLjPvz8rrWR99fT25mVLcR8SxgVuSijm97hL118juJfETLHVkvs5nuyjBemAWp5ikpAfAyLmVpyAo",
  "key10": "3qs9vFDdUfpJ6qDtyPLBL7ZVnkxJRze3cyeb7d838jgNJd3pYJuwbjwJcjdrkfU4q6bCNvNyGsQkGdr8wpbaLiNZ",
  "key11": "4FoRiAhX1ozyXjgh6ZiM7Rj6g4QunfXFHj7kma3nSzSvCE95VppPQkQvBLeBx1yHUjwXnV8sJBVrVEawArmynwoV",
  "key12": "42fASW6jg1LL6jSAL8myDhcrFNGh2doyAUJSpSt2dFpPZK9s89fVBiRHAYhmRG4CkNT8dKfpA33iwrRzRGJyZBqh",
  "key13": "59rt8wwer2LzXD6ymygQtC9ajHaqaiATgAfHZauk8jeVEbdSpyregqmv46uLA5NHf6w43e31v3Yvka81gEhXBabg",
  "key14": "5XYNXFdubkv19q8kYbbQW6W6iWncazueqhpr5zcoqxbscd95hqJvf4VPcdgjWaK23amoT8tC6Kf9cgAthctpj8Wq",
  "key15": "5bZFY3Dj9ti1GvgeD4H8iYYeVeuGoxsAYwthn8utZnVegqbCa4hvxsatHq9ENmjGj8JveAkdWRUGpcZscf6j2DBo",
  "key16": "4VTtx7AJUxNuEjpEV6bdkpc5scPqoh9zzwdhmSEyhbifeNge5k9F2sa7qLZ3dFcPYa3aGxdx2sDF6MFT14hs8CJn",
  "key17": "4mCztzf3urWQxd8YA5orjs7K73sBEDRsuYgXiQKHf2ZcXuczKc2NQvotJjFwaScQVprXueZhnHZ7KTxQBT9kaCvq",
  "key18": "3RhM1HMRn3vE7V9bpKgQWich3m9HtiTq4puPVY1VuVTuXY22msPLPXaN8h66PFT4nEBZBTh4hK72F6mBpqvXxi8b",
  "key19": "YiX7iVm1fR47uNkLj8KV28yZwwQiKyVsgG5ur5tQHfAmSo51HP67L3g1QBhERgBnbGbGM5ZHBFknJRPdanQD4Vw",
  "key20": "3rW66yhhdPPNe5TtaqY1Q8UNSfD5rcQaQH8y7UQqdQC5xqdm8mcECyf64ebgH7PVaW4S9YYRMcvsYUYngT3yZgRp",
  "key21": "3NWGgVUCLnJ7mKPVuDxEUpuQHd4YhRVoxXJVvDnEqaQUsH3Yrkp7SiBLkiWNgea9ThdLB7Fgrd9pde6A18b13KhQ",
  "key22": "4ZtDBgPJLmbkzARPUicGRLFrheuXniryz6zSXKcpn5JGktgCbosHWXfveLR7E5HfnjjTkRkxKJD9Z4QsjJQ53Gv1",
  "key23": "38FB6fAHFznD7QQGSYqKm2VhdM5TU6cKAoq4kC56jKVFwuiqohM59CpCQW6HFj5p6deaG2pU1bve8Vuy4qGonh93",
  "key24": "4pJ1B3g6r4xUjZuu5mxdeYF4jJH5mskymPjEFCd6Z3hCZDTEcgbpjx4iM7WGKYay2iR5yhS6U47iwH5nMpEgn9Qn",
  "key25": "3Arg7mcgNRDndxbTF454nJ67PwNyHM1Rzo3y2WWqeGHit6GEiyCd6r2o1kawRx7WZ33d5tzEtmS64vaVhr9CPyoE",
  "key26": "4KzdTHrJakLxen65AGoHHU97NtGgkUKe2m87gYGVJWD8FeWW9y21CuBHSzh9o7NfruCkJrKswPQNcsbw8ThstT6Z",
  "key27": "22euycXAq6Pz7cRuSHUAZtf68uSJVGcdw8V3SG3dhmMbKayextzQJEHSZWe76oZpWQ4u73ynuc6MMi3ZFngfQch2",
  "key28": "3424EvasHZuaq6r7DUFdYTGFcHXP9ZbA5tCRht4QaY64JUMy6z4UFcSbgBvGMdEGmuXUpjGeQkESLrGNbUqmKbP2",
  "key29": "5eXVqrmFxTXRq7rNPcHYfM1aQ3YwJur2qg9VzXCCZ1dNcp1V4GVE6LDSLPAVttodGXKWqbHS9X1dFzb6GV1a4ZX7",
  "key30": "3o5hbcJPwdUFMzJR2Z4ypVyydgkQEqLiTUzVHbvLuRJT7znj4DGo4A3HwtXJAcMqmaPPuqdMx3QAamNoBu69NDFa",
  "key31": "5UMGD1VWhFCZkE9jCGSu3LpEzZbhfZ1GhRY1vSL52xXL72MLZzeZn3Ja7KgBi9KvnQ5qNSEtBRBcHgwdyt3Ltbnj",
  "key32": "2eEshr3XwySg8gAks4yDYfExDUbWiW15FYQLbAFrtU25UDuMaNPY9vFsYivexAftS5GysMpGvY7eA3fBJJEZ1ia2",
  "key33": "51Ccb45xMTBQ69SdBuD8kTXcppmo8Qoq4D2XQhVAUXnNCim7LzdXCgtifAu3eQAE26ryFSzb5EsXibMupFbFDE2q",
  "key34": "3SZAzhuYN4We2qYe6fic8jRLNLMs6LrSh9zGAgPURvTBKuHdmyckZdDWz4Enq2B3Tra89jc1YrKU8dZ5XQwo2pPB",
  "key35": "2mydkiCHf15fRuGr7jsV7GvE3dcwTbhDv2WUiLRLVY9FgApQR6n7GmCbfuaReJQ2FoD4ytfZJaYNiD9JRx11XJsg",
  "key36": "QcpiG2vueqDi9XGJsR5bAHxBJNbpNR1NjvVKTKemim9aKqXSzNTnt5bFtQihhAU4FpJ7F7EECJbui6fwz59CWfL",
  "key37": "2E2yYbthANrKtXTCBp7MXCJSgMtRtk5WoTN5vkTNDpzmG32bnwRjtzFXGaUNdDukqubXHdbxNrRsusSqba6LLVGE",
  "key38": "3BeriiXNRAcix9qGwBFKH6TzUKkdUfPfqo4h3uTzoaEJ3RffKbDZMNU5BiCdQNCf6njfxE3gAJbnneJ9K9kJeTha",
  "key39": "4WBUYSp84DFxDMwrmj61kJuN4LWEUsZcJYr6obAenP1buwvbARt2LRb6BxXjn4Ky7pjrea4RZbpZzXQkJXR3HBzX"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
