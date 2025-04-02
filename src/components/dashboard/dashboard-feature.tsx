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
    "56AejtgMSwrLf6Y8XkkzPFmqPZpfujsdzBnBZhhQkSiyymDj7ZMQwYrEuFtoRE2bn5crdgQks6nxwg9dWQ94ZNot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EaFYVQ2xg4LiyaV4eD1hSehpHT1dNNAmCCK6BP8cm9VghLaGg3PAi12367HetbhjKjWs53kqBbe9bmzscXSTFHH",
  "key1": "2CB7J67Wj3AW3AzC6Ey9tR9Nequ7LRpTG8PeqDKJHNgjG7379JAqN8qBhmpSNdM7mBEDzpfBZgtPw1cHoeXmWpwS",
  "key2": "55hcYtHKRfJDLxi8NzBdDbbrxW7o2xo5szxJ7u2JUJvaWiRQXTu87f2k9nnkSsnBThcSg8YMPUA5847vctEov36q",
  "key3": "4JK4L233h4rmhowAj8bxuQmCdQEqev8ntibzJydKMV6zyCtC8ebyvXeF1RqEWniPSJuVz95mm3SZHyV1HvSPruZo",
  "key4": "22sL6aFaUdaQjeB4CvWXbyE4QqqdGySE9xciKjmwQAti2Jvvkhqpfy59SkofpJJSYSowiv8VbyBRSLsEPKU3K9FX",
  "key5": "4MeJBvuj8ApdUgRERzLUWF4TwxXBtGBqWCUcwbZP1TWowuo2Nv46L2QnDPkGo4dTPHzGE9CPwRxmYW3t1ip1jDYx",
  "key6": "GmCqmLPG2VcqZq6zw47BLxdu74kkcZqJP1xKexFV6akJfTs37q73ZRavXYgztJFyAvxvveLgWX6jasYgxcqwdJC",
  "key7": "5sXkvF8FAgML9hQW5p2m8hTrytc7zwAggruiHEo45Zgtdm7eycNGyudu9Fdh4FEf7QDvEbAjTJSexipgHXyD4U4p",
  "key8": "5aBFygHs6NyEYTFkUhwRssjCgn4KY8CGxFHr5Rr87tERhH7QLu3FKRiE2s8aevAgNdwBFG6KHQ3sustp4XjrFsTY",
  "key9": "8MLvVyuUGhmyBNinQGuw1iQasbp4JGGBEP3QhztPfnme9SyTyxbQysjSk7L3EQvuEhe59Po8fH3YkR1pXKdjoFH",
  "key10": "5wCkd4DJ17F3ScrU3CqLvZpBfAj7oF7rwGAVGQvRJPQU8qLbHLdPCHYWiFcNrzni2Kmtj43D5dvMKYaNKNBSK6cm",
  "key11": "3pGVGtZhTsjf9GKvtG9aYZoBdLvvgheVHX8GPuavazGH82F9MuGP4zjSZ1MA3oohQgXtfJjdchwZEM85ifHiAN3e",
  "key12": "DuqvHP8yHtLbNW9Y5VPWAbi3banS82YtzAP5TjsTYE2yD6gkLZ3W3cBWUvSE9RxFHSXsP3kEnAwnhXKdoMfQitB",
  "key13": "3MM4kSeS8aYy5gcDmbWBiUefV2syZyamxdzWca1Drbnd3kToGx4toEYE6keWtF5NDoS17eFCXPNN1LwRrBipYxtX",
  "key14": "wQG1LzZ2sRB1DgJ9zqkc1FBpzfoh6gY6yDm4uVd1gDHNJMSWfLiruDpi3igrzriin7WLo6x8Zf5oapxRxe39qfB",
  "key15": "5FJmm14SaBSzFT9EutmDN3f8eNXmMoBFzG43pD4B9EAEhBRYzm4pzzFAwE3rX3cAxpcgUxt6gcuAfi1apZiMA678",
  "key16": "4kvyPj28JWqafuq96kHsYA5wEkQBi42pjZK5phvEc2YWkRBV5v1fCHJL3bTb7dK1chN5SUx1KSBcH3nzAS5zCwUA",
  "key17": "m8uUD1oxQJ7sKwrMueFry4TSWo9MTF2G3rZzwx5zwCKDexvks7FaQAtpmwxw8mpQBP43foWtEnu3rBEwjahCcbg",
  "key18": "21w24Lq5qSvTGfYPz4Ajzq9smETAudsVxHwaL65wjR1iJ5X1d4HfGQamCNeA1Nb9DaQ4DiGpeF9N587jABEX3duU",
  "key19": "54TxR7Eymo2mUXffpi6WV2HgXQFNKHdnNuiaHwnbZXWKNqjUrWUJXdXJs2t2iutNJFs4V3oRZ1auvNLHcr1Pp3LD",
  "key20": "5r7ZDMHfQRgS7WuLk34kgWxZHv5LXNa7Ps4DtkBBV2KLnnMLnUE7njq4QxWHughycGQ7Gn5etUDcDxtF3f3KbbUG",
  "key21": "3wgXnfxchDc7GqeRjoxZQz5k8GvWQ1JC9CWc89VkGao76vuD9SRExHB967TRtQk9Yx59MRwWL7d1KACGVuo3abFL",
  "key22": "2Ec5ENnnwh2mnz4LVXzFfoRsjRryffrT4FNS45YMzcqmEUQH6rihst7qamZt7YDn9bE7jgfRBdXfvcKcrYHSXNRr",
  "key23": "4nxD7AN5R8eWpHKthskCyhn4975gJzse7iBKATqfRWZm1Uodr4zf1KdfDrA319G6azKLPh9Y1rtWFWR7XffTCJ4h",
  "key24": "2H5pyVsLPZ7FoauJMU6MtzuuMDFQbeapzgXcuZjH6EPrEsrJ7kFrW2LPwxbqYUDu5SsGrCwivq8SMB7pZTqUMPUG",
  "key25": "2PsrzRnTc1TQ5v6JMvVdGGMEDdqercXgUYopcvkGk1hK1FqkSS7uDJAPhiuH8NnXyajpZ34o2QPsyzQybvRoMumq",
  "key26": "4GidQpDRVBjcFs7MjU85dVYtpWEqntuk8BCp4NmWVfPZ36BSsBBXaLmX6H44GcSXHfdTXq6KDqEXUei1d6mQYjNu",
  "key27": "KVircTtRujb22zUoV9vsYUsuUoneSckoQM5nEQuGJhPztWKxnJpesmn8LMsFySzcy9ZqouFjoYuZay9MBY2zgy3",
  "key28": "4ANTkPF6NkfqEPvd4pyRahDskB2kNCoUuQDEgiPNiCCreogh4Wn5PeZVE8zoXZLBMgQGZH42hZRTz6JTXzPwpGBj",
  "key29": "55fRKrv7NDGBWyPBP6Mqziex9ZoBPQjT4YtjSuh4tqa1W2veT1fdAefoa711ofiecnSBxtkks95NifVuVyMBY2xZ",
  "key30": "irK6sqD4jZyLfgMuMJh8yfAMgPSi1QkcwCRoPq1BKDMqxR6WQHX9U7VgS817RJH4zxLxBfSzfd77cihKqWbjxnA",
  "key31": "5ZYvdcvvDCwYa4XGoPM8ehHcZasnafuWyPk67S2gt2BpHVhakcHGvzuR1KYsRWNuqrywFWzsToofke137odKiuHe",
  "key32": "4EuPCWZ8gi9j2pJ6muTUoX7PNmwgc77u4yV9pT7LJtpsNqJxNJhkt6meEAmHHxzCKVBwcDPpDQ99nyq1JEchhWgw",
  "key33": "4b8uf35Akc7rZxPuatNdnnzP8eozWV9pSbM2NjBQrNKR7tihhRHsmXqAcNTCwm3Eu1CY8Q2yQimZgq493B6b64CX",
  "key34": "5ZComtGNJEHAyGtsf3nPqDkcCi3THPR8WPhgeCEYkAiU4HaDEQiVEaUiQ7pchZJExbDz7CDWAtTLzpiA9NYGK5YN",
  "key35": "3o3aPHNZh2Wn39KyFQqRQDSwKPuMoWYtymFj1Gz9zbQwfFyhLp8fWFSP9gRDBpfpMZVTPmXt6Q9g8zdxb9dLpSvt",
  "key36": "5zevzweCCQ5eEBz1JHDWnYFV2uNWkmApYJsDfCAo668jAphtvSLTTRG2DCu8L9sY7wyZ5hPwxuhf4NP8J86ky1Rc",
  "key37": "2YnmFFTtFSmHfUFSbVKFNGHQHcFkZdEJxi7uStmrw65pSxYDBwwuCL7X5QM9zgSyWJDnRKsdrzdTuroMonxMFnkx",
  "key38": "PbKDaNbU2jsEXMkyk5mkqfxMy5d9v2bmhbJq2AGWJ31mafPtTbv5n7sV5VUYro2a63EASZSMdYXAQm7hjQW4ikG",
  "key39": "3dn78NjYhMeDt8c14aoSoPLnm5whgZzxooYRchqsQnhKGavhDZm9mjmfudFpg479wLGX8cER7bLb336pFWygj1Je",
  "key40": "UpGyR72kaWaLv3yF6YMWqjUJx5tNTxo4yb3SrLSHgJtmBCLwZdapZxzacnsMLpuVaiM5e7oJCzyYyUFEE18QSA4",
  "key41": "DMxdiYAgLUEYsPAMoP7kVjmH5EVeKUiZ1dSkrkLJA4WGT3254A1GHmn5fBrGQkUmu425GqzsPvpYHV897Gxhddq",
  "key42": "4LQWt4rHjfWv2GsF4c2KNm15CCtoSYLh33umVC3H8YXHx8wXS3dXjXtrvKQUv4SaTMdBxXXsNM2RteAprFAWtyR6",
  "key43": "2idaG3oX5tSSfKBAVa7S8XrciDKa7rJDhoUWzriyQmbYRCqFovQ3qUnF97BapKuwPzdX1cAoqKWSQeRNSXH1WtH3",
  "key44": "4cJcj6cRxd9MsogFtVnXoT9FCKZeWA3hrpPFzLg3CMyS8DmU1PWUVX3v4FiR4zFGGDS5wyk56nrNtVUX31biKGL5",
  "key45": "3mbemHBGDGTryMXrDAd8J7GED6z9yRsam9aRqT9n9h8uUmnfe1xG3yhCMJgpkssfg1GF7aTCWs4AtB1cWxRzseDw",
  "key46": "3p9VTfP1WP7TPpPS7GzhgCq8eprR1UR65PnkvUzux3XGkBoMK5t8BXjV5B7BkAJsNz7mtC6LWR75onX1KmNRmxtK",
  "key47": "5YCiL3nYjkHJPtZ44K7EHD4b7FuqiPQ6voFiU21TF1izrttcybxAhBg9RG7sVmhMPCJb5rjhmhKuYqrv7iUvitEF"
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
