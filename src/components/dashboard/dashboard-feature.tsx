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
    "3yytiFreDSDZbcXbRNvuXxaCFEkuDTDsuWLaShQKLCQG5tfAvdZXjKYfZdsRAbv3AtpDechydczf4jwUWyHho6Ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GCAbtWxsVig5dvJXiX7e3H42KWefEaRxsqaFZLDDpt9C9QrjhrUTqJGmGtF5MLxMHpvZUs4izmt83rhj3be9xfn",
  "key1": "4AZxABZgbbL39ZdaKYBn69MH2DPjqf7jh8AkDHKpQZcNvyXQ1kH7XVGSwHNJ8ahuP7FupFj7n7PiotSph1pJn6Px",
  "key2": "3jiRZLYS67VbqcTLiSa4FtZgsQmnteGQ6LoTKzk1YADhYDZeGyHsGq49LNwgYmS6TtQDhPG8WKfVRaTp4Y58RAQY",
  "key3": "53VtMebvXhLUuwpdMJZrZpQ1kJof1EpWBPgSfgcEXjPBYsSEP4bgYcmxHzYGJhnsWGbwKWBcTbxzFFTUdy3DNxgv",
  "key4": "613tDvYvFXsbWKo9DwZkfprZ3AEWjscHVRgs3Q2FL7NLoCRDmfTTWSC7piTbThtjepo6WMvW1G5paMCp7d16LGsW",
  "key5": "AUjA4V3JJpaYa96S6hMJtjsvxbVuCpZ2Rh3jG8mudysr8AkLMe1gbpytHjZQx7H68gz5o8qUU4cPjpYNZXYSRS3",
  "key6": "UZDHRafa44T86zvyHBB4p81LHiNp7EuwsNRYLMRpVc5jL4ov8wRQaDK3cF6RQbKbfaahcVAsMZwpLughYyFuWny",
  "key7": "m4qowP3wtrfSw32HMnFCZpuG4kxqfYNM5E2i9i8mY29SvKwAAaWF747YuSSNLnLhHf6T3Ennz9A3HN7V2xc9Knv",
  "key8": "3DbJBiCTR9c5apGdvfEy9f5m3cHZGYYtCbz6A9DR5wSx1dgoxLNVMGwiGti8baf6f4FuZ29XEPnbQKyydbFdcSSi",
  "key9": "5SedqnajT3jg8k1DZag4JLrnFFjP3TyUEMtLNjhGtiVXaxv1YYiDbgNfTeKKUCfTTw4g3bar7w8eprvm3tizvbAH",
  "key10": "2HWWBpjL5C4otgTm5MQbrCpbfsUjYeVtcz8WZSrmqWVHR6FKX9HJ43kiZ4SrLrTjZ6rkakPfgT7qCBsvEdt6H41C",
  "key11": "24hmst8JLeDH6eoJ9MR5ZQm7x53uAAiUKyUprqtmsDVu7JxoctBvGC1X3bm4Juvs8ZTES14KZBziiawfog9uxWpV",
  "key12": "67EmpNQ1eJzN5GbRkPknqVLCWHLnhp3ZTZ4XExgEBD9yeDQ8iFDwEistHpf2UXYFKm6DrkSHrLcaA5bbEgMfM5Dr",
  "key13": "3keRzxyfgPEtJ3yzDUjc19H9Rx2i4NuMxBaLVCAat8mSYCN5RgwAvuifzCah9PrKq7BMXqbQR44wodxeZZDDreaN",
  "key14": "3UQq1Pq986WqpAgag3zo3tBtUFkvzsZE2TGEiBE1eg9REkJF6iubwxPGucVLbd1PF5qh3wyyzPgP6tznwTUBUbXG",
  "key15": "2Shp2ycVY8Z1zgpBcy1gEePTR7ULxvSn7ZUNbR4oTULHg7Qvrsgpz4rYh7oovBsth1JFXLmqoUJn7E4Mgun2QYF",
  "key16": "26GjkJiDULxzGPz7B6qAV3H3CYPyRFcxLeK9WY1sTNphE5xrCcMQwkUrnMzhLi15jLTB326hLjwedKfgu9bYXR6k",
  "key17": "3FpR6rFRaqR9FRf5y7Msv1Wm4Ehy8WoeRTRRC7fyDFAzPMk59CgR5y7yrD61aHxTAqm9shRgX1tbKBLGzpTf7gZb",
  "key18": "5vN6KjL9ZcDrPUb33MTvLFTCqajmqxVdVTzvDzAzofZYEHBzw6AVegGHvUorKvHLqq1mfJJsxXBEMjVsV6S36FWt",
  "key19": "2zvJuxNqRJn7EzNksfFs29Djeo9Ct3jN2yqW3exEv8GnYG9iC5fBnJ9sJv65W2omMZZYJUBbk9xXmd4npC7Z47MW",
  "key20": "4ES6ymrNXbCvegxM6GSsBJ9VnrKkg9Yj6sskDVbb9zBpgW7BhhbVDkkMUyNz7HD8CWEtsYro7Q8EsDmyeXEJ1ZzG",
  "key21": "5KcBCEWYE3ufnftRuYAQNwWijx6X4qRbLVZbQvpci7MhErPCUuh5E39zywv1kxqcvkacLKTp7WtuoHD1Tv7kNCv",
  "key22": "36nKDGM13hrRgZvD5ijFwJyHvxWnvSHQkg3NnbvThVaiYafwFRHZnVNdhvL7PPF3LQEjMsyK53XkReifhq5pUmRW",
  "key23": "5b6RR79vptDD3xncRUeLN4G3YxnP3zMwxJn5VYr8LCtitfTSfcZRo1TCmsybwjDvaQPmHnQXXNhhZEDcdJrfNkQR",
  "key24": "2iaG3vfA8BYRVZ3hEYp85R4jAboFTEU1RME9Hdo7Di11u7VUQSBT4zfvaoHouvSJrirUrNRW8zuedHtFFnFffN8a",
  "key25": "3o59tRqkkdtB7rmL8WnggoEVLxZ6kZMpbHNd9MPieKMvV8YbWHShcmdGcY6CA19BkMEbw47AACXL3v4jRuXZAQcK",
  "key26": "2AFvAAkTKr5945VkTp8rxDo8oi5kycoNgjmh2S1wG1MBy91JMoxNUpj3GicRm5hnt2Jaa1hUegLaU9geg36QkXxM",
  "key27": "4PsjzdtG2e9DpxAaiHY69uTQse4sjehWzaqWgeTGresRp95unLAvttdhH8XQiUpccijtVGsxsZ8iwZgorCcGbX9j",
  "key28": "2dtymUNtTfxo2S5VCdxfVYfDrsMyKHLmjwTLWQChS4RTVnpw2sanhpZqPMBkN7d1cXJ6J6Yn9BxsUxxxjfWG2pD9",
  "key29": "2GZbGHiEr8dwuQ9pF9DsTk9gNXEY5AAmtnE7e94e59Dd8zCBGda2QKkEheY7o85RiExd73rKCpZcPTuumFKHqdv6",
  "key30": "3y8ACnxSBYMbwgoqk9Axgs5jDJD8DXmUvEedkkE52j9gr9bt9wT4nGopY6ZoJL1p3ZqWqR9QYTm77vV1gNEgPSBy",
  "key31": "4kKhcTguNPjYvMSyDKEACkYNBHzDRuSd7Y4YoriskpKWsUf3hxEjm6DoDn6trL1Y4NZPqxMQqjeP4xbbsj9kbdR9",
  "key32": "54um6aJAFbEsJfZWNzkMcuhFMZNTAntgg5T7JyTJdbkcs7uraCPmXbVM32t66mkAvvEt8fmrkkGoMZSLSCq8F79j",
  "key33": "3HFBqndqeMaxE6DkKXj6QY27RJiinMEqfjGeDknqxWXEuxfbtrPfDw9gesmMnm8Mw3VUWEXj8EeCdTYfNEXeNdTM",
  "key34": "2v1CazUG82XqarCCwBpCRvZ6AwAWiA7Bfw2vvxmB2tXje64nL186Qa4byXox6KydNTF68DFM9oxm3JUgPR3KjPkx",
  "key35": "4UiGcaWjRsGzCH1RvbHj2wujFc6APvvTfD12ZVAZ8hWgd2x6rDbqHWCCt5Qekg5QXvsK7mgV5TY9Kp4REyjQ91eP",
  "key36": "49AFRxhbdFkvsk54znobGM1Qo86Gjxiiir5JsDoKdYkKjeZtmzgH1F2ZpA8s9G4Fw28mJBHC9xCTUVjhSa3QpJAj",
  "key37": "2ENYqnqn528PcpjFVYj643vZVqFVuXJuB9JhUvsWVnL5CS6XZm4jKpNDHPwU1Tnvg4syHLGX5bS4hphCChtq5AV3",
  "key38": "4XZPPauDCXPSg8RVmSZRuEFeDENUUmZj3mvPVDd2Be4ZKWEVkmqxExV3Y8dr3TCygyJQeWk66B1kC42t4HDKePN1",
  "key39": "4TkqfYPMBtyt9Y16bDvDXYAR7yAqe2jCtsk8fGGFfqxdbMzpS3GLAKq2MvvXu9bA8Y91Rjk7mj2GbDZt1SqNn5Uq",
  "key40": "2sydQ3atqd8gnavHT2A9EpHdNW9B7JNSK9KVhJpvy3zaxqkP8G2VoUEy6SwUSPRvYBWVbrdtYuFHmfSjcjivyk76",
  "key41": "bFqDg9gTP4LrR4p4e4tsKapJrjhar7LeqJMZ1kwmdyRaFdoZm9cvrkueZTcyQnU3AFyyKrRVViibDaqtb2EGsAF",
  "key42": "55sBGKhMC4Kyo2j3KwfofMiuvaYoZeLFTzfndYftUh1boT3wJwavNXEdt9aHy2Nj2AYQT97x6inw422z6uVHoGUL",
  "key43": "3oowuixKJttSkBSh2oJyTJwFf44AmPTYVxBFDJqNABq6VVXFs84fJ1QFG4fPRpLnAFmERwk81rTUXGsWZ3DjRbom",
  "key44": "67LdBwuxQP59yHL469vBSur5xtaHko6uPRqd44p7vMwRsM1yejfNAcSnFXAGommP1Qjb9kyD5xdfqzPvkJqw1sYH",
  "key45": "4dLUi4dELLi6ESJqRp8p1U4xaryTcoch9UqYQRZJ63JT35ihQriCAch2apThAyhsmjL6oKy9TT5UAmhRvnhF6T7o"
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
