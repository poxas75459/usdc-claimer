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
    "hc2B9pkDBjHLsnk36nfRMb7cVkpLp17NiPYy1wbD597hwWPyxQxMXnMNN6Yq62Ggzxj4RrukVL8cNgfTXfd5rco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WxwrDgrhpQW91gzfWDGCd1WXA1BjtZf95kns2fd82w4LHGThXxCSmtmFmkkdLajBfqGqXnb4bJ7MWHw3tddyhq2",
  "key1": "5GZHMh1AmqbXykmhcBuj9eEpUXvuaMWvyprZQxge41JyNan8zX8bqjVi4NRC7opKi1hwf6Lzb6ZU74Vwgrm2CRE7",
  "key2": "3Wc93YyAChgkZjm5byLf8m4TbxrfQC8eqdL3nKrZsc4MVSMmTTm5nXettfcqguT84Ls3YZyxVtH5snk1h2LDoT1a",
  "key3": "2tGb25zuM39XF5zGmaNZ7HyEsSzMRZM3Jkrc1yJwqckVQF1xvS3Xq327EE4QN5hdk585hW2bBtZtgCCwvX7AcX8A",
  "key4": "2guGW9WE9VNKqMMtufL2gRMxc99yUa9TcbQ1DunwHSN2DykuGGytPR5RD3t1o9sW4EEXbmjqpr8q6Zcn87HjMJs3",
  "key5": "2YhxAt253Yai2V4pucDMDhy1anfyjUB4LxrebHFYV9L9RJS2DDuAQsmxp4P7adoFkrjFSKAFfDUNrx6PJtc9BcaX",
  "key6": "Vt5LTvnPoyP6ACSLZ4Gir7dhkFA26bfNVfVv2bmL5Hdvux2p8y7FXmN3Ebyt5u5qReNkVgg1XDdBETGouXx2xbw",
  "key7": "2HWihdFx8vmVWXYTVh1uuoRCSfe3Wh7PDtQJnQZyVEBhyqwgY2ZQQwWYd2aj961QbN25bSb7mo7HCzjKZo6atAoo",
  "key8": "5jYSaoqFyMHYpeZLyciZJhXQo2yn3CcYRHEgsYkHfW7z63kVhQAQQik56RYpz7PUf4eesaqBMtKhG9GzMoYEBAYu",
  "key9": "3NEn7bW67GJisDGwpYpA424pqxPVR7FbshWac2RXvAhbs97bMrdNDY1YLbr15MyoqnFqdyc5NRgHFjEH2sbKyBZq",
  "key10": "4dxG4GAbdYCraB4zfbsvWWbEGsSyhZodDm49fNMYbngEg3i21djy78RfpfyD7zcQMkdM4msyhHD47bKruY3RJ2sY",
  "key11": "43KQs9dhNCFAhtukfF2Mv3E8S2xBHodgBv72h8WXe2Ckp1QXK2iBq9d3KPPALcxQR45Zh3orwnnjVLKiTwzpBp3U",
  "key12": "n8QfzXJ86pqNBtJ5xRuKLcB28rpXT9kZV4fw9tv6C6vKeifWMJ9aRzmYjjcRWb2qtU5XAiWif2GSbKs5r6f8N8p",
  "key13": "4FA4yVdnyZjeBUy8n7WkEY2JSrsip6KXL1JsthQqgw7A8fgEnmW1UEhzBctNGyZHPeTpQB8Ftx6FucynyFAs8CMo",
  "key14": "4ADmwUdbgD2JSgkMZHbUQPXU1REot5uop8fGCiYU8dKrr5ZYQ4Lm7UXWhcB6ETsXubc61iXFWd74xVbukgP7pwpB",
  "key15": "2R9ANGv1w171UyLB9xCi41H6CezbUBfJLCNa4ovksoZZQhS7HAV5e4DtQSSUQphCmZBo7UYU6wQLK4DsdY2winno",
  "key16": "2SdwMok9ga4B4TcoTvCjJfPhca57erxaKgWgPdYaHfNPrCxhrXFLQjH2xXVboMGoSg3VXwsKP1L4Dq3pxVjJjgME",
  "key17": "yQwsFowK93h757zHVtTEEKYmUcyyhmvnw17EFGX33rR1RG3UJhhXV2L3CKqTp4mrk9dGBASyfhtfyxXGQQAtkHC",
  "key18": "47fJQu3SajdgqxNJu7J1Cc2SENYF4F76ApZVtCw4xRsBof9oDamgCQ1ZRgwwWHsLfUWghDnu6QvdVZEgexEhkQGh",
  "key19": "36jtBiP6Ff3vX1E8AKjfqj2UTTnFm8g3fS3cMMhXqtETCz2jaKSM5iyqWv7a1hxH5cP4bBKNr8qB6KRpcDoA6yq",
  "key20": "4gKucZ1JrcYbt822gnwJdb59VRz1WDTxjigL6WcwoJhabm8yrwQ8fEgd59EmXTwR6b41VgjAGVRmac2btCmAMJGz",
  "key21": "2H5rtqncpBF8DHxAkMbWsjxoN4U4vWxyLk3XzwaZhg3rDUFGh9zMWHyuErgo3vhnZpWdwtHY3hTWHTQBeepShVLy",
  "key22": "3mQUrV8kVtXfhpUNEghuaK8fGmAqHDqwBpRTkndiTNgSFFojJjMdXJbeFtAivzJSWBs4bo6HX6NLWKARgSUtnd1",
  "key23": "3qaQ7FS1AJxqhZQ5pxkfbFn6nLaCBtQQAzHum41ETVjBwhcg8t1JJBYq5Gz4wi6xfDGvrWcvZPVh64B7wM8NgY44",
  "key24": "4MrUNHw776RZC4H42XPaDR56PV9rcW78aAjvoYaNf9zbG5CPdy1qh4aiosmTj2NodB9pRbQ8spUSUz8CZHswQnnM",
  "key25": "2hyC9w4mFngFcAejw5XDyy2tcnXj8EVhqQo21qoiFjCbMXGnxfFmdX8SZwekX8GEBUM5pbciwiAeCoVZnAnjqtUG",
  "key26": "4Emg1SLDaFeFQ2m2cd59snt4vXM1QYPfywHV7d1xD5suDE3VGQGPAc7PVugHqpRx77SXriq1BS3kwGHuhCwqKHEq",
  "key27": "3GcTC39eAPCs25FSkpNXKL1DN5VQyzaDipZoy1a8PKpE4ZMhSBGABUtpTciFnAjXV54LdpzsJqYu9jhHinsdxX63",
  "key28": "5WcvCAtDrfMPcJrW5FFFFiDWxGrCprDf7Cq8LkDd9uF7GMBmASpH74KnL572xzXoLL4gv4V34AQSUhLtuUEjqBFZ",
  "key29": "NoA5z6MY4VgcYoScuSkjhbUbbxEPYsA8BwnK9E6uZAE51E1c4BVjkJfK37yet6adJa7EMbUH7bcDBjVqCMQwye1",
  "key30": "xRHwQB5aNKoyNLfsXicKZuqs9seNYaV9jcxr9FKMJYevw9UC1kMAqj2MZzv1sQHUjh9Y8xop32WoGCPU4M2PvL4",
  "key31": "488U9wNKRugGu9hS5xwyUrrtqBn5kuSedQA7b5Q9Uqhv1Rhr1gkzcuuPJAqMmBPsMTn58z5j2GwYBF8KJBQzVMxk",
  "key32": "AdkS7CADzibpAMGWdL4h2H9pifqrcSb22W5kCcaqnsvrv2sektiMvPJiGvj551dJEiT5EzuX9MC6GSWgDpPrSFE",
  "key33": "5r6Cnn8HZK1ovck6fkEGLnhDjPAhmicja9chJTcNyfCMwR41dLZYrMPVGin76jintGvWNTLZb6FbzaQWSQT5vEaA",
  "key34": "2y7Kmh6mERn243Qmi6kEJPcXRbBUiTH6fp5FumGFs2k2cbY2bMx1EhHtYFtm4s7DatjPwKiAjBbLEyXq733E9g8u",
  "key35": "37VYpcetSLxLzu94oMHycmMjwJ9BGoY9WGe4GFsTx9LYZsUBnj5swTpe8e5NffsA7zaDg7w3S8ZFgCb9sLD2p2XJ",
  "key36": "GXrBaNHQwC25oZw9FQmffBqP83r8iuhWGMFYqtzkvMqUShV2b3hBnD7yU9fo7XLjfHnstzzeJrCUiqseSg3P3yH",
  "key37": "35dLDgkwJDhvyBqSrkrjJtAXaThWAiSdkn5VH7LFefVK5w3LaGdcEv46Q9WdfpNDGhPdYnoX789qusWCSDi6jZpH",
  "key38": "4GXXkkMdR3dQ7EZ7XxKZupJaopEygK4z85s32hGqiYp52EU1Q1ZWdEafhowzr6oLqNH8oQUppSqeE8RQUGSodpDf",
  "key39": "4qEBg6AuKKqhedEXuU6BPzuZFUQZZHPurer7mn1JHRQ8x7BYnPN5JjfkgoKDSfneXrb6sCJhHGwCSo5CCH9fkB2P",
  "key40": "4zMkcTJHf7J6ZNVaCV3NibCbk6RudoDZ2sUhiDFjSveEQjvt9PNiW5egEKUGf8WjH8HvTqHK932EaFPU1QD7nc4D",
  "key41": "3Kh3hVbYDJrZRJcSPbcLzW72M58Q3x7EL1hw8qgwdBbcJ9dVy2wQUrNnqaXnQKNvnibMEuDmf1XyBF7dKZZgSGDH",
  "key42": "bjPDtdWeyZYZEVzkJufx8eKkeouHn1JNrYZJb9iDVx8tgBTwJTUgf5BiGLgbY5Hmw1msB3yQ62qXZos4mTqKSsr",
  "key43": "2fpmmD9xiHN7fwmnYjSQXU8c1fmYjvhjMMQtXAcRkknNRrMJpZiZ7jsokbkRm1prmJUip3JTJoH1yMMQQU36dBW4",
  "key44": "5gafoe6zrfKSEEpB2yMQjzvr1W5QaKemfJUxTe7gjkyrvUCBdFYZ3Mn54DFJBSRNaoiCaZyHMGnpQAcP7SaQJ7f6",
  "key45": "34W3jNem34MkXgsk82eUEXpGaje4HEPZtjRMjghWQKhqEMyZ8Ev5Vc9SvouFyBm5mhUzjMLqGrGmCAbsHvYYtMFK"
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
