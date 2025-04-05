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
    "5jag2TARhG5ECCFmxDAgiWmXj5wtY3n7DHzm7RMS549YiN7eJoFHh7VxTPnCaeoDTVSMQxmwfVbMsSnNom1pGT8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gAD3WzvaZSLGAwZLJG9e4REJpC7NEuTERFkAcLPNyJX2d2rRuc4B1hNjrweZ5MTf3guFKHVJWPn6tWkd3GMTM5J",
  "key1": "2F85h5UAsxp6CWY7bbHy32n31P4jhUbnQYHRbZRD98crCFYfVdMXiZ4BjweYRqZu29u3aAy4imKcdAVkNvztVv2n",
  "key2": "2D9xtgJ4rV2jtKWPSLz1masEabFXnpQgnAvcGfirNVnXXhCeLKVXbaihgDYSTyKkAniCij8vMGUVEVLk7BKwSrSF",
  "key3": "67XTcyDQekKuvC32PVw92EBnbAbzSwqjhp9yh7btJQTk2HjPZbyzqbTCBPmj9weEAgF6B3wobD2Ktm4kv9hyAdmb",
  "key4": "5d23g8xnAq8XaU8oB8gKLdCsXwBtyjgBig6HitT4ai7yqMiabjPD1HXUymrq5WMauBRmeyKPwpfyTBzs73hN1AKJ",
  "key5": "2ooT6kux793ovMD859hiynpDPx1hzLQAskEwQEV7xm6maf2uau6zqT126r8aQGS1onzFTN4MuQHR6ZtzgvWV86dC",
  "key6": "XuPDVdEk9TEWmxvb3gq4bGiNKjZ7qAz2MpVwo71wZPdcYUq9qG2frHrxYNe9ciCQEmiPJZb2zJo4Qbafsu8eX66",
  "key7": "ggBdmoordtMMYWquifGxVR3vNRTWWYkjS7ugeBESAVHFVAVh72wbbFE1tru2w3CfyMXVSty23FaEurRBk2pWkTt",
  "key8": "4CbWAxx4N1DTam5qm4iYyrVAhmrxpZT34UKMvCQXBFxP8BFbM7J1R2JUwN1eLthWn6DbTQPRxodaHREJ9uoVRXBn",
  "key9": "2rLMAkkFMFPjXsPuGMebxZZ59pYaVx6v6wHfFSGZ8JzycCAfQjGtmZM19vkbZczMf4BazN98c4w9G1kHFbMjWzTm",
  "key10": "mzuDwEqoTwt2S8jJAhcVdoHwMWfskU5dqhGWP4dHLESeDsaKpdxNLQr7Lt4AZV3Fij7qGV8qWRZBsQk1Ry9XkrR",
  "key11": "6WZReNuSJdGLAA5qw8BPb7kp6knLn3d4ihvCV9QUwMTVNLZ8rTRRfmD4bCaA9i9R5CPg5fWAwgmDfqJ9v2M2NYT",
  "key12": "5Q5rt71BbDN7Qs8a6WqVKow27S5nd7puyG4Fn223pCmm8Eb2fK519rP8k8qwqy9tTb8GN9PEWofa3YAmLVn9mEDN",
  "key13": "3s3JwcvDEV6gu8pdV8tapuVniN4ejRd3Gico458jTzwKAo9chfk8Tk4XN9zhMEVY4kCoNnKawsaAhnfiDKExBHXD",
  "key14": "3VVq28trQdPCqyN7Sg6BRFewsDK3YMcQKdKgnX8aof8uAV5isDwqpBjy9yq32JVy9qSG84jiZPALZSoJ2r3MfDh8",
  "key15": "44aoQgCmQFFmgHKinSZdeumzdUUuLcfohjY3H3EMkuTfJQxRktjxhMiANGR8LhEayydQJBcFVNp6h7XtAYLatT4Q",
  "key16": "42nNBmB8pdEeAssrrGbDPNLUJXkrVLaF8qx17b9QHL1PnHwFWNEozhSg7afwDYZti1gAL16C1SGKHbVAHWGtwbkp",
  "key17": "2deRjTASq9xrJk51vd3FUa64yMgpfdxb8HCha66y693oBZhoYgcameQaDPzTm8aLGYwhpufYamm5mXB1SP9vZm6x",
  "key18": "35aUJEnvzGsKxJ7NTQQkN314BZxzL1cZeTfwvER6w3Q2XgA382MZBXw2zUGb4FNz6asNfgi9A1dmWm7SJJUyyFz7",
  "key19": "2BevsDXp9Xyv1SRnoC8Rm7NGrfv1Eb5BoszbR7bA5qwrsborYwd7vta4LEWL4r4iinQGc3JAYgudTD7K7Pp8VRiX",
  "key20": "2CdknjjnLUA8ayRj593hN9YxgpCr6bXou7haHTQNrGAZ756dedRmMdqGXsMEFQuiehyod4MWFqE62t7WdFXhJWNp",
  "key21": "3d41ZvoCGatqp8MGHqRTQ7gPTcf3njnHvTAoBEZkDvDLFuNNfQfxAGBBEYuB8FQMhCqAwTP8eCKe5L6u4aGnf58H",
  "key22": "TsGuXqaXEsPHXnQpUBCWwUHgs5eLFNrA93FS4QgZ6c3KnsUKKtgX8bMztmSor4jW6wBHqTbhpFuRfFq2hobK9L7",
  "key23": "MczwFNcbgb6LkkNqLYZibEeZii3i1LBVv5Ba76DJEQWQUVRgb2kv48DpibNLf3ikWBm8KLvXzXpfZej6kDzaQu7",
  "key24": "5DYMQjvVToDfG7Y9GMXxYEAfit6iseBG2Fe5J4CNiNCzhTbsxeMMeH3JYR7tQrZuK8Z5BBaP5DZCJTRiGjFimAtC",
  "key25": "3VaBFZPTU5AJoJpBviTpdo6sEu2Uqpp5EtvpSjGnoDoyPb4EjtGgk9roYoquoBRhwHcCGmbRU2NQphEMCkHfR3Dk",
  "key26": "3r9MiUmxVkkvGir5ahMUNpeF7y9uN6Zw9ho8mRHBwUAh67SUBLxiHqKhSTqvDYgEndNnfzZevQvwUeWEkkJZCPgw",
  "key27": "2omyKLyEv9kGS1ZYMFjN9PpcTgS7ZxTMogN6KaXYqurHWbV8uBePnCVAE4iHM5mHi4RmrHR1fuw44yAj3ixLtYFF",
  "key28": "5hpggQCd3dwUPzSr2qMv2dfP6KZf2wT9jLbs145VvHTM3DAq2esk29Aq7aq1EWmiu6j32cLu2He3jmQyaSPS5ysU",
  "key29": "4jJgLjxdAtpe6XobTUf1DHrQjWhox4FBBnumrqiUhHhwPBM5pagzg2RBH4VvZsjP2zSEHTH5BczxoVKiBckDQBgT",
  "key30": "2WYMFNDXAi8bNKdGaGsBxfANzfWwDoB4XMYno8yMjhJ7VP9qmicLvsofFT8CKeSUcuTyyp9s7jonD5YisAA52C1P",
  "key31": "2kTzbW6dwcsghGtgV381eGyW12KLYXy18iqiBJSTj4wEuGLZw95DMqphH4ecPF4jrYtjLX66i3YLZNSTvMbGAcar",
  "key32": "5hxZjANW5yYn7UxnjbPKiKVdjAJNFsXzHPVW5nW4CDmyzkt6mkbTqhDEapBJKq7fNGLsDbcrZdrfKHbr5juajGye",
  "key33": "2gqpVBqDNFWTPXHWp89xrF6eXUMw5qre6QCsVoc7zRMLwmz38K8GDKdFBBR3gHRSfsKLZXQ1MNoqt5uyu6x8nX5",
  "key34": "BFzWjFw9DNsS8mb11aTdUgoZBrgz7n7L6DqmA2YD9TAaniLZk4u2PMbXF9DcXLrWpLbmSfsW5kjktabsbMY6Kyh",
  "key35": "4qnEFfnmQMETRqnq2dCNhXuhvWKzQPgsMkoAqugcvdoDtgR51PNYXD8D4WoUCpfb4z9jgifX7QuzF9EH17ot1d5e",
  "key36": "3Fv8AEnC9UggyNXBT52Jb6dU1J22ndzD7SiXwy1hfV7FwZU3phxirMLukH3Y7tFfN1inHzA4KyW5BzDG9vJJCWQu",
  "key37": "PNXbuD3sbLCEn4SDEHoP7bH63Vmcxp7jPoJYDXBTGSNeG7bcbFgs9SBDUwytu1uBwKm7otcYStLwbMYfpUmwkno",
  "key38": "4a1bt9RN5uNNVqbrjR2td6TFAEALvnWUJcv1DM9R3EUJ1CQCFR43nBKMsLLHBbzry27EFiCwUqs6wu3RuDueebgG",
  "key39": "9H72ApU9gUz3nHdwNZZP8TbmYQEmVFMRmz2jA4gKrvjFJ7B49Zja7gh1aFvM4wTT4VDgQSns3H7sVvwxbCqWdTx",
  "key40": "64Jntos4nEViFKgsyuQZ5jck8YK9JYZ7hEN6yg2YZxH1oG8eRuCVzSWKdsuJiZrLxkAQeadQ3axsUdZXWPov2z1j",
  "key41": "4KzcshWPePnJeSGCV5egzEcNgPanVYkHc9RJ11zKyoP3vyjHRUAVxPwF8w1wsmDPgVvAyx4cuShFirjzmDyrTifK",
  "key42": "4KCqyjixz8bbAjvKa7ed68wAXmVGcc3DNMxDeqUWhmaKnLiyo7m7VJbqtZwrZYJ4NJh9DNpS48wdGodiet9eQ2J9",
  "key43": "5izi7dZa6oqS7m4roj6QWmpPFXDQPz3NXdGMUbTP14usoxAkXLDx9HxzARiQFNAef7AeKmRQtLNMaax2iovYDWoW"
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
