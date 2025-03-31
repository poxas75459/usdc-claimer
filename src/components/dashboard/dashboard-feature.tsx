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
    "2cNfRZ7144X7iZqyZx4ojzUoQg9dS7to4WrgQz8gTm9EZyLMVmpYVvMaLBTSc2jJnVmD6gzfYDFkjuxpk8wvNJ1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gqDUNpbXnnB5ogE9uYQLSqUy5prjB35fhnzHmhqCiaF8G1twcWz4dJS7TsUAr1UGcK5WAPXEi3B6myD8X6BhEm5",
  "key1": "5bZGghFUYa16D7EoxuTW7f7PeRigJxVpbNbskxzfkSCpcj3ZxsvcWoYF3dTKyZC8mkqPLtwVmFnk6jE9oofgEhnC",
  "key2": "5FvkKE9e7puDLqq5b5Sb5wzC17o5WjqdDUn71tGan8VMpfudm4ynjMbvgZ5FJwxBoVa25sz5xNU3AG4kuWHrcwjb",
  "key3": "2mRuLE3GWDKLSvUHiEFwUha1iRuEWfRnDDS2b6UNC4M24RaU8CbfrNxt9QVJML3AjZiLoC9958H7o2i2QcjXiQ8X",
  "key4": "5KmdxUWnH9RkDdg4HjDvRBBdCxQ1cnggJBw4fL6phdBHaJV97FAD1Li6bRLKU5irUTTQCDKaAcJ5e8zEJyMqwNRx",
  "key5": "NoC5JZ3bVQwWFpGgomk7mLiemvZhe57o1E2GiEETYmUF6oJK96HCdmNapGN4rNcP2Evcr8zcetD9ifYQXZQ15w2",
  "key6": "2RxneYeH25aXAcrSVoKpWfg4wszVW5kj5f86o4LQJbxLrEpyRhJUfrDMimkFhtkF8fuPZbeazfnz9TjUze7CyQet",
  "key7": "HiN4cDq9349SYTYs6PjfgP8mLJbWvPhZ9XZukPrNBUv6CtJ7TdJLpyjt6cTkQbd5GbbHyV9cEvoGmqznWqwDofe",
  "key8": "4Ler6aJPW92ZVkbWEhfGgHuNeLG4X9pGXuFCddPQ9yEmbRxvq1BWWua9QUdmazhhEfeZWfRSdGVhv8zuHaqCJT2q",
  "key9": "3J2rnmRRs2Z36gnkUzXozzQBhnKbKRRJmnXtS9AgFFimaNqgV4Bx8qKEfxLY5GvwbKR4g3ZQxQBnyme55ZfQTz4E",
  "key10": "dWwR4MTw9PN3Gj1dvLBCPgPKmSwdT1tFA2GxQfz5PogKjD71tNi4UsbrwJcRevXZo1xpYti1TUa3JTar4ZDsMty",
  "key11": "237zhTYDWkLUwCHQe6eBbPtpBdWwC1W1vfL587dQmN6y8k2ajgVCXRrZPGkHGPjyXHE4ACcuC7C5nizdZrHNBoBW",
  "key12": "nPbbPmcGp5mCdiFmFZ83KmgTGrViW4m5xvZx9UeVsY83sXEoBo4hZs2RCRUNxxMW6HZLviYdHE3gbomeMSotWTX",
  "key13": "5RniuKvBjmir25aWFwRbVFqWRr3eMVpjBSKmCFMCEDjECdT54CQmbTDGRaCujsrHFfTtaHa6p5DaDWvjKCJMJrnF",
  "key14": "35o7VZwo3BEjd2QePEe5gFYyAgXKNKSSuha9AGkS9zMrhPsrs8Gh1urc51MykJqu4TuvMdyepJVvNcZ9tLX4b8Ky",
  "key15": "3g1n6RPWQDnsB9derKWTGiPGyfvtaseKiEofqS8hxLuC8cmqcgHBoubkSc9a2T9z28VUBGH4gdPEjNq8nsdJySBp",
  "key16": "5V6Xgpviw8z1CgqXXWZVCKTRcz7d6KbcFedgMhHdiP7iVBxK1oukxd9uWxG31P5vFjco4RSNE1EbSX6SXnbXcZs1",
  "key17": "3AjTbCwJWr6sTztKgFkh5oVaYhT3quxoVRkLU3AJHqRqPbiY2suF7DrhLGoLxFBGbRHMKKHM7gH5X29Ep7YQ7VWA",
  "key18": "64utzKz7Tv3RzgfdSzaLgoTJFm1JgYZbdPUp2Ysmh51pTkiVgnapK1ieMuLhgxHDrN3MjVXRKUwyBRECpM9qCfbp",
  "key19": "5UhY1UnRjAuMeioBarsKWvypD51rLwV5uRQMWhnmHPqTPCsM4iN63YBGKjSRUw4KSqJ4CJEaCYk9zHQjUefUnqGe",
  "key20": "35Kv4PFc45BphDv5eZJXKrcwqCoJLC76bJLw6fpRduFqN9ptVZ1PPgf9KPc1644ecsTRP4wS76Ddt7MLHtTy5myZ",
  "key21": "2ULNQpErK3SHp6WXXUUXTKj4VTeAWupUZ8wv99PCdHaKfiW8Nz18SD8zASrKFbjVcNqRujVWir4gbbJQSWbYoxsM",
  "key22": "KjHhx8LQ2M4vKcC7niE3zbcdpw5GKs8zvqiYZrA2DfNkBDNFLkfjS34eR9tcivr7d3Q8in9BgNLuTsaPg7iYJZ2",
  "key23": "2Qo8vPtbQtpphDBMAop2dFgw3NpS5xKvReeXMXxwuAvYkLjfuq23baLxopGAR5Dz13A21vEbBY3nR1AkhRzLMpND",
  "key24": "3dsBuxVrRSU69xKQxbb8BEN3MicVeps69qEKK4qo3VoFVxm1n2suodJ2tQ9MenDePshAkX92GiLMu4aRrVCQMs2K",
  "key25": "5dr8noVEyWphpvewkfUcWbVPvPUXZG9EPAajQokaWUh8CuQqHWv5gx5YT2eofcfsUEExSsi3pAuViEpbavZdTU4i",
  "key26": "2Bn4CbRf2fhit9KFjGMXE4RR5yEzL63PBU3UU8FeQH84DEqBQ1vneLQjEbyAdYSHhXU4JZBUudMV57k9Ymz7WR9c",
  "key27": "2ybTiRSEzcKgESAirGJRWd6BfwPc7kcyERbCeKY64dLmQtUXJtFGLGxSXdnT2i8kCeRVuMb1sQxbgYE6WS46Nifx",
  "key28": "2inip9bCBvWA5qXK3U78jYuHsCiq3VfvRpNpUkxfYCNZgdghrJoRrpvchfZtKi4CC9GHz8NERGi2pSV2RhTQVtRs",
  "key29": "35vpfwQfjhNbFNQTb4TLkfDnTUBq1htwLx3c2QBi2RdExLXtYfQUZ4AUtqBRLMMjjeuuS9Pm4pyhAocSbjaN1cvZ",
  "key30": "bDWQJHKpJRf2deGYJfxXWMYM4UwodTFWVzR1YgGfNDSLyf2tuudRAana91S1TZLxx5tgHDi7bDqZdnxbtqayESq"
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
