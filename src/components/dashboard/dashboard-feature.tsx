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
    "2VLB8zjmr7fSizygoWxc6Br4fYNk7yuy638bd4GYyrqxPj5m7UJrHiGuevZ2BrgywKJh7s7ekgcqvUaDsMKKkMjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sJA5AMbrmMRYV2AvFsLXrzgEdmSRXjDF6rFD6iJChA76jKfg8DQE8eeduRPKa7WC9QvykK6qdaVeD8xgWJF7iE2",
  "key1": "3f4SYigtzM5vXdqkwpxkbPJCQpBEhTrH6bDoGszuVqVxv6Z5svRdmiqYwLLPGaDHpFEFDc6fYEgXuC4F46VvcLxT",
  "key2": "5NY9hetUpuazbX6BWyWFfNX4WGL91g95qhaYuFRGLEYJqiHhtbWg3mk7fNHpbqF4LMkdYdNzXtRzXMPSgJqi4ULD",
  "key3": "22Dd4Ek4cUS7bw7YrC9JaNwoLjdPgR6rk5ChoGPQibDnknFxRvVdv2BhZyLnaCCzRXPMokZrXJC8juYrKUvkF7P7",
  "key4": "E91HWhcqFusdLANbbjr6aAUYWYtyWPCt1qhjuNQr2LUTaVP68pSBVtgLrAEYCPesYCo1wRfbvJDAqpgaTc49Fow",
  "key5": "4tsVY4FkWm9u6UpzgUtFtKeGSSEpGh5XoKi1uyTQ1fQzrwp64f5H5xcbpYPHESb25A9jrE89MdPAEDGqXNHJuxw",
  "key6": "5SPoNhoL53AsohTsVHAkDDaPsKES3KHpLJoRChYRTfStE7jSVkVX7qwhRoQpqAUWAxDcEfeCwnStv1AdFj9FQhkT",
  "key7": "m2sL6buhkt65eSRGSjHbLfYaNnDtnUs5AvDHGqcV6tPjUfuHqhSqgzWeRh3e2fQbGNudzSSS9qBt97X45jT3PHN",
  "key8": "4DgZHjjMXiRD75EQjRW1Waq79ZT7tW3a2szpbLfwZ7sfXGikmJAuPrLvM7CtK321fJUvTKKpGXtJPNTeEzMA8oYU",
  "key9": "4qPd29xQfPTAp6kugaq9xLAgU6ToacLPBBFWKNHA1DJL2dqFDm12KmMLfhZGyKkTTpX1JRhGRckgEqzDfbdF3A24",
  "key10": "4Kn1BgG35RPcqtWp2ghFteqr4EaC6UcBr5HaHbEv7MeKAodgmXCcZKev3hXLw5xXJd2y1tU7NZ4GhRt4BiDEt3iv",
  "key11": "53sJV8LducAQ6WWp1o63A6VyjkKedEyciyGonTpM86BgCPajcbRN4mCr47MhuTgQMhCfgsLux9g9d32fDhWAV8TT",
  "key12": "ton3Cx7ruaTHp5eaDQvzJTN6SMADyK9w37RnsjUJq7wHC8XA4vJAtawdPzgrjSQJhuCNGoorcWnkQLjm6ch7ytx",
  "key13": "uni7stE9xqXkE3wMdWJgNHDt6sKf5zDHKzkUBXYNNG5Z5vWyNswZpKDaBozaJ7m6JPxZP479CXaxiLNkTXpgzVv",
  "key14": "5HoahZHWwvCnXGsjQo4HiPCNVcp4HE3rmErK4EyZZBybwKu9uQpU5X4cE6cDT9y26TCuxsrQxZB6qXHW7Lqth4dP",
  "key15": "34ZqQv5d3bsSNWnsgDuF7KoVVr4JdyTCZJHoty2BexHDtoDbnZHDpxW66WzKbU9WqhLTaSdjRewAon5MoucJYZ7D",
  "key16": "2kEjfgxtoPRgXBvqUtd5nTMKu9Xab2JgvUi5KHcYoP16wiTRna43FUtBqiYYL7KkEj5dRDQwS3iQkHWLq6V4vXwo",
  "key17": "57DWC23RrxCXeytPzNtXzEuXxWMB9XKZtqE82PoLYj35eixB5YLRKJyNA4pfU3R1ntGbVmSw9wMUz5uJz8b4xrw5",
  "key18": "PiEgShriLb9Njfrns2J4PEQDmW9Min2KHhmr6DK1bMHUKDvjCXKLpgSRy7FGCsVWUdmQht47LskaWBsYfwHuhZy",
  "key19": "4AeoDrYVJ5yBoVdX5hC1UJ44vgRxMrzUEYTMZ47D13CX9EfsHfp1qszBvuFC65WCE74Ax9J4N5qXkeu8s5Ak7Z2X",
  "key20": "4jZBZEf2JEhsvAsRz7efFfYEMyCTXJDDAfH6Rkuh8AN2ktBMTv2HHJwQW7wBXxMTe5edaWEkqtxNfdDSZAJc1kvU",
  "key21": "3Ky8ksdzWrDhmY9jnkKCFDd6N87EnoUsfoZChzeLPmW5E66NRj46aaoMjx6UzirPUBWuWhgeKad5n6JUg7eAtpo5",
  "key22": "GoqP84kcGZrXZTQndNQP1i5yMeBW2F585HgFEAqassG8PH5qbDeGL74nFwHMKVDKFaGQRJMnFVW1za5r3bPXoiC",
  "key23": "5f3TiMxRj4QbxWfN8ohRsDQZbMtmRAHrCyZ4qfhN4oPMPFjkknEADchkkqL76R9xGr6YqsMbeUVczKQv9N3qcC2B",
  "key24": "41rrx9cD1Za1MRdAyU6nUijT7Et3HzEjowwTuKadrbTZqSoUL3Bj9YmS32LdM4MS14MPwkAcr2HjiKfmi9Y8t2Lo",
  "key25": "N6RqERukATLXdtZEJ2r1SwPUJtn6RmpdpWvuPvgNhA7SHk4FVX2uZdgp45aPRvs7aU4jhegS3qGR49tGB6Axyeq",
  "key26": "4VPj4kng4a5DXEEj1AvjsLnsNbxRPQP21JFnn9tYZt54gRQuowakyvYELtNQCQBacmmATbxkmmPeRWL5py6dfZQA"
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
