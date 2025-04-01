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
    "4rmZqqqXnQmgxFE1aR1wSCrL5NSxNFmd9qYEUSDP7Haafm6BFb8iS1GA5pu9iME6FMPRFZyNLZZQPPgRyWZa2x67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VjqL5fEf7tnDTBPRRn223xxMzZNbnTCd7Q1zSndf71FtbSjSjZmTerCirLswrY7eCcz5MzH24eTgfhGXuxV5N67",
  "key1": "fNFLWBZPbDm4uGQMbbPtBsHuXJHjXfvGHQTgSeXtLcKAxLr6kageGMhNA35MqN5Z1MTuKZiULt1YNRQxzdVrGKw",
  "key2": "4szCMmjM9fa93kfLaU6fzi1feys8ifnmTtFRTzE9gzyuygUxH56ssd3iJ5rXAJESYrys21i2KC7w7ASpfxAH3MgH",
  "key3": "2hzhWBHMVCsS3J7U28TeGsNTZf7uCcMy3KKzpqJL7WKpzcYDrxqDLhqJJbnSd6VvLJDq5W3Ye36XGHMEWuUnAxVm",
  "key4": "3XiXurNMviuzYn8w5fqcWSLBjqm1QbeDUELUNo3oHMAVx8Qvwwfgu5CpViUqS4MPwBbQ8MseDhKVsK5oUhpBbeuo",
  "key5": "3irwC6AZAbRj8Cf928AqfbxF7gEzP9kmdemPTaqUErmRA1mcGZ8v5PpJHmfdPUh3AVjHndAzE61ce8zNCQRNqmVA",
  "key6": "2GTQp4NSbg6LwNYhdX7KM2vV78sdW22R34G6dERX8mRvQqaAWqsfubtqVUyGWaPuJtkuyzTpF5Pi1AiqbsfxPZMY",
  "key7": "VjQvExvmurpdBsc3i43VG9YztnYmkpqhvrU221D5yowhx132AUkFrs3vFMGoZDRwost33KZnxhJRcXrrfSq3j96",
  "key8": "61ayh4F9r4n1L1RRhZBsb9u5sDdZ4by54ov1cZWMVWRjuzRuugCJT5frQdshk8xXv1ZVNPcjyiDc7VS858q3zz96",
  "key9": "W8wbnP8cGiMbFNusvuDMX7UzJczUgU5J8NhBL3jRb6TTo5BHhnx1xQSk3tzJvDa4DV4mrZRwTn9hf72BQQJFJUd",
  "key10": "664F6Q6ersgsKEzFYWF45F5jypvaXQcrWTEMx5HfTtm3kxWXvm1Sh6kh55wg5rHAG749eeeKBV4nmq5XTDrauNuD",
  "key11": "4R2cwEEgpm7wwAykDSwEG8AcE6Zpx8LHeqk6kATuLP44rEozokusG36Sxubto14GjH2Vh9VUip1bH5KGjVPz8FBW",
  "key12": "49pMdtfvFw5R13o9tXSBTDvoQ6akYuvYi8NJDYVn42A6y349CnzA9KJnjX4tSeHvYzXYjzQMKAN8X2yfHWid5Beh",
  "key13": "2KcmLgoppki2cFYjWbasPEckPM7r9M4R1xWAntSknWpFjLhTjuuSv4rygphyK7XiKacEqe1JsMWroHKrFBYnmths",
  "key14": "4kTPi7KmQMj2DtPFD3a3EQkni9NKvZDer5i1GYf1FH7jFi5SuPgXKhBmvvjyCQSKXrQoHTTo2GdzkMoMpeSnu3Z7",
  "key15": "2TP8QxKZCNNjgpL7rnEfYzCmbLj41yS24VC6RiPpw5pAffe4wg2HGq4tXGpzMrMXoDCV71EMWso7U7R9j5vmEeWc",
  "key16": "5pJGP1QfYGJ69d64SEhu2VfRp86WyyRnsQ3CwoB3tegipXjD3qzeGDeUde9AtC4sHq32EJounZQQTTpDgbRjgR4X",
  "key17": "6wUuz8apHYqihskK8fMRZnnwjwT4AzKu1DfkpRh4KmEUtGaciL2cVvX48M475wqxHQZDEfFobniE9Ewu8fGATWk",
  "key18": "98EjovxASX1FP7LykcDPLVu9uT8Yq5erm38DVTbx8YLpBDb9aPGG7q92bJcqH74ou1SSrhk4FwjMSLUkbjDqFmy",
  "key19": "4rZXKUW5mphacuNQN1WvehXXZh64S19gziFQnLNxUo4WAi6w1Er2dV6ke1Wp4hE6d7fPNSX84akwJwrEDBTzceZt",
  "key20": "34LiQDfMutVuLhVPQbftwojrYPNRPNnAE1ZQ2vQWHN6H3xc5mLL6zFBjhfgQsNbd7a4P25WnuJNk4V6MUMaKErFW",
  "key21": "5Ka7o298yjxpZUabojCKtEREzVCLdLmLoq53FDsVyuf2Jgov9onaaHZ3ax26ms6XeiWzjeoZTrNVuMX9ge2jJXZs",
  "key22": "rtZe9oZiuPgDjZqg6rfcYnMvkixQH6CkvN2SXqxaKWf6LTvZcZZ7XUQSpqEjvZbj4sM8i2sdcW1r1KsDZggVf62",
  "key23": "5WCb5m62R3UASWrQuDhswiYgXLNCzjSNjupjf2kf7sQUhNnhpA8a85BJu4d5atunfBmyMnxCjSthSdcfhy5aqPro",
  "key24": "c6A7QfZQGDpYvS7M42HC6ebfmfnixVDuMA8crTT16CxjhPJzvG61yyRSGh79LRjqwdpDTuwRNC1FLzqJWYAApDx",
  "key25": "4FT3uacWnrd3XffEWyYNqBaq5ZxuQ3L3E3eGF2wiLFkd2UBMDwyWB9feCCBN5NfWBgSYSa78ajpLizJipSrXQz3t",
  "key26": "5MetRYSKHY2aMs3ECDMoiFEz7aVzhDWMfyFLxDTaP6Ci65BdFC1XF2zDpJ4XRh3BVfTMCVppwf3hazcukSY58hf8",
  "key27": "3Wk5cGH4ZMBVYEVGpgit3ubEt5mNwze6xuCnX59bpya8sKbG5vsfD37ikgmgMMNXDVWyxeipVDVDDyBm59841toZ",
  "key28": "5Re2gtnroSyKJRvuhjoxAGYFhqKpDrVTEt3CAUDczMiDwQVmtHqbYmHnuQvdoZxjgX2Auoh4WiHspUWFSY7kTjDu",
  "key29": "2Zb5UsxDo3Tog4H7eAv7d4CxJEUcmXaiwEUUqkkGSH1sB2sJ7KYRaNh3rXrZJzq9fuWxgyQ9zw9wBff99Pryr1gx",
  "key30": "2BTCRRNsgnFrc3Gc9EHaojZjHPGrHEXGDo9WqHwX68APBcSNTQ5jXkeifVf3JKHwU9qbbwcYWgWkEUQJwtBLhH4V",
  "key31": "2EQJmnJnXXJc4batmQG1dtHcLRyArtBK9ZpVyHxaTeT1GXh9GZSh5jGVniCbC1KuWjKbLo3nDLVVzrFowufyKpzE",
  "key32": "oQQbxMANKatMppS3sNgcBdMUGUAiV1CMS2oDmCUbE7URjgAe4iZ5ZxtarpEwpPtuhZr5XWNw9DaHavkxvEptfLk",
  "key33": "5fDDMgAxNRu9ocDDCp5uhbXL5JHu8KtN8BwPaKd72jBa7Gop6RxLAkwuhjsKXyjfyZuKftsusRTMgvhasRiyjK1Z",
  "key34": "3VWx1XKgScnVkTuegEECAeN7Ms4bBSP6TR9oLyqqoUjAyW6aUQmMocftXJopRbzJDrXd9vstD3qRRBNaqrbRwtpx",
  "key35": "5dHuSNvQqPmkpLHoAP1kHphnwrut29AkBzkfSsVrnaeuqRxmZhazf1mzejR3RDHnkoiconLgUMUThQV8xCS6fnG1"
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
