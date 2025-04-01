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
    "4udTg3a5tvCP3gH2QxCvcTaPahJCAhnK8fBC6XyCVteRcKXDzHhd1BGjgUMRns7eiupyKhk8f1R4iNRkXKJEzkGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RLEuLpWcux45qzrjmmca9ad4RDYpvDMV7rHY7uFARwB8hxNrdphFFQXwAHGokoaDpuawKeG9cbpS8PMKt7fPRnp",
  "key1": "2Rp1HxcM7T5kVkMUa6H2PJ2HsHbBhsokvGefZxr2FRTbKpnKsnJkCvtUULpLuYoYHCHkchasHJYucEcfFfKssWn2",
  "key2": "44P1VeGsxSyBZKFab7s8QATNqeFopKNAQmoV2M3u71gHJgvgq1n8WZ3TiNcDwsnFJZHUdSyjQuxNNdb959Atg5GF",
  "key3": "2RgTS7ML73CTzzoKZ7RcXz72sGahqq2fYT8RQ4fqYAx5RsNBsfMjo59u67GcTKMYbvY1Dub2k6cVdwMsVU7MAPvw",
  "key4": "39uojwWRrGM4a16CRLJGmta3s5UmPkCKQanw3N3qMertxMRZ72pL2uVWVHooj4HTuJXbxQzwiKoHQJrwhvbgGjPb",
  "key5": "atsjaNGpR1y1obUbEnAfBiNfjtYRtyUHr4NH27JGZKtCEVU8n8DpjsdyRL6SCr8eiRvZvbZqUVriz7J7Zajy17j",
  "key6": "2uqti7Tdr3kSJmA2ZxBQ58wJJgB6SHQQSmcHMRXmcPByinZzt5qqfaFWm8FQ9F2gPv2nLWJewu79fd7dFeS22nFn",
  "key7": "33rBC64brVPFzcbAe6n633Wv6Fwe4ZkitLM8kAagdpUZFZBwxiJ1fEDeG5o9GwAgarzaYEVTqALaAhguYkacyLS7",
  "key8": "Rze7rdFtnyfsnNofjXH6JMU6XBoKhHGkBVREsjVwB59QTCRaW2L2RtcUmfk5WSvoXSRqPYRVJYv3egBsJyiR2wW",
  "key9": "2U3wBKYk8hg4cQvUjjQrBXs3L9DN9fmQctXLKGhBbhKVEznBnWZ3K6emg427SVGLurqDaHn2JfzirJhg9L4cXshX",
  "key10": "2RLGo54jrRdNawRmquBM4xx52Xt4qmdmsPjZ678NVcuxoQKSdA2F8QPrAxpCW7qm6GhaY6ofr7wyzHiTYMfY3pS9",
  "key11": "3UYcppzpxEnJ7v1xMUShezcXqhJxQF1YUPcnXc42ELhSuk8EdJ1qiakddENiq9MnARMjsfsrU1HLNfmfTzq1HKFp",
  "key12": "2Vdi6sqtmUhNgLBtg2Mhxd4iNch7LAD2u9W3DTojoNc2cnMtFWtZr1AJ2DZEF1aQUYhMzpVh7thMFzW5ZHKDMVEh",
  "key13": "5WjUBPYixEtdQdtydqyb7wE4knq33aTXxqSUwKBN1fAURgZFFAj2U3pHvs9bP1Zdo3PMAK5gUnyGSe2M7s9zWTN7",
  "key14": "3m9urMCgKwkMxXmF9MzToLP9ZqNmsKrLK6xHx3UhLu8KD8DvjKFvHKxHorQ4YJ1HSVLZQofG9jSF2jjCMRKSZAN1",
  "key15": "58FX6qocbqi7frzvhSnmYtzq5tsLw4DeVVHUJiSoYyLREh3f5S4g6usWwfjMPEVak91tYiimWRNBHqp5qdZe2TX4",
  "key16": "2ssuurFwMNJoHzH8sQCNmGKMyPJZ8FkoZziUSEE2B51fHnUxkw9zJHkRDwH5CsSeDdR6jz2B3JxNEw1tMAjtZTkC",
  "key17": "2sSrjUAWqpjkZgXD2rK1r3VxfPmY1BFAZ9EaTX514oQrQnUAYGekj8CVq9xyKKNfiqUJerJKnzdNCMGN83enCMPM",
  "key18": "42HZKS8TMdcWhZ78U8g1BKAJawT4ywCRYZHedadCionPQVjUHUkrAu9ukUYHmf9E75JnKh7jiSfnbT8nnh2LAZTu",
  "key19": "56n8HouWw5GonHM8PFr7WGVf9FQrGyhkrQXYrUJLuhvsVyuePvWHJKeoVWhGii6VUSbKcJwvtv1TLAc5uuoaHKEy",
  "key20": "4rniVZYzNZAop5WnAUcyuyefjX8ekiYDR4tp35GVheK4TbisT3r6AHcHBnj3e1W39aie2eC1AEvtHTgEWJh7D1w2",
  "key21": "LwMPNoRNroKFo5tUHL251vwvKxbyZZ1EcXrg57uBT7H9k6WwUNv2eEA7tEAyqjadHCnXZS9CaE3HGiGKbCPTTLx",
  "key22": "59SbZ5DfKTKr9aFCU4AA9ptTtbZ5yu9gwyL8Hi1i6vCT9u6b4WYLiGwL116u9DK291DfvNtrZHvaBP2k1BJw6xiT",
  "key23": "4P9wNDBxb7TVp8kkMP3zNGjnCEdHktS95nSbD8YyAweqfjzLfwFr8cVqGiQucW67hFXLoWoiLB8DJi5KAQBSJUkZ",
  "key24": "5VR31Gus66ZqXsZj8xwzjUeLbn8boZgjeX9hryQGAVsuMAHs7Qvedz7FGJA6QndChVT8n9iq8Kr2fUdnTTRqPcei",
  "key25": "221FHGiZkDBSzDuvwvtbQgJRKUD2U55ujxYkX9gWM731yCaSXfXuetvbbQUCLq2LxMS2Qai8vzhbND9v8YCnBs4u",
  "key26": "37TjDupRUVXdjXGrTFKhiExseLbzzYvxMNtJeHvXso3zhjh6KN79iHW66Js3pUyudbiS7h5sTTK3buwXWNV4wY1x",
  "key27": "5srZYWYhb1Q1CpTeEqAKNFFT7dSQYBKMFW2eCZnmjhm5F9E6mRxAAgvWjVoGuRHmBW5qQ3kiqimSYHjqaiuRBubh",
  "key28": "5En3QYhrYzhBx1sjB4o47Z4dbEo6bVqsZVCM8teAbTcZcUvLMD8iTfsxqXAEG5Sddfd47vUB6XupVDFwyiXZYemS",
  "key29": "2Yd2Nb8Sa8jRi3kp5XPdvbk9mqGDg2srxrWU6HkVrgHYturQjWy2TRFmjns3adqJaboN3DYYcrrJZKwYPdKrQ8VL",
  "key30": "4BpDgyQTFWxnHERQPythTHNFJkSPLeVDUrwQBCfWHmNuKJiRREYoS7jhMkyLZJrXgWKhGe1DzqVQx97Wk8BYXptR",
  "key31": "3MNZLGCepDbqXdUsDKZNKuZZi5xpNVfowPsh8Bu1QdwW6iyuPbfy9vC28HcYkqJdBjVRgZYZn4pT7PNJnnqQUhHi",
  "key32": "hdNxbL7zhL65wXWVPDqymyrbQuTS5dvDNMaGRhxjqFA3HtjiG5fXStwKXzYkoE7YrFLY7AUefe3MyUjLxetz2AH",
  "key33": "5swgvK2zQRQJWd8fSrqNfrwuy4op35aFdy3Kr6oxx7ehe9c8cz4ZDDhoGYUHGB5mh1DSM1Ms9iMMLMhB1zmaMf7Y",
  "key34": "5HXHeWHWCP3rSdAp8kFfzvdaVTqC8m9Gr5ddqVZMk8PB5gRS9mFz1Pq91Q6uKWEZ7ZomfmNaBcXriZawYNjCmFXr",
  "key35": "5H83kDJ9Bum8u17e9T5h2C5x5YdWo7Eu2dMauWrvR8dbMYmAWc156hQXAc673oQKqFgvtA7EaPuPPBARq4wateCM",
  "key36": "5LRqPg1q7y8P5PsdTZxarhHeUXvDtpMKWufxKC3s6Awm2BsRZ1wCq2qExCZfzfb7Hig2NLRbyDYbDmeN5ApmrnAN",
  "key37": "2gQQTGPpEznuPXkX4wgTDYjBKyoDzcH4Mmgqtiv9vVWgQXsGuaDvnSFApCujnDVnD3gMGA1GQag28beh7CiqmiKh"
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
