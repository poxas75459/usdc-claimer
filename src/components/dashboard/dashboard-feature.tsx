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
    "GsYfaDUuPtvv2inTSMuHiqqZogBNx3CTfkuV38WagrQps5hCbdihC4mqttfELz9AX6B6pcmPo3jecgPi5dgTFR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CvZLrajo9uYqkiMNYeCWXxepwCea4nbWigzGFTuTNiMZJ8CWsDTyZ7ipt9qJwZW7DgWvCFWKChGushybjEM7v4r",
  "key1": "5BgCWjaH7n9raDwtUMWThjVkUWBqJ8UdFZxW9muVMtnxuzoctjorNpJdmz2xpuZwFEb58zH2QybgmRUQTxdEamuL",
  "key2": "5BH58uCQ8grWjVJN8HsAXMNi6s9BFZkk2t8P4Z7kT5hHGxBvppXgLi6tid7NdQDnbB75zLtkZFjdJsMkrSBY6vxd",
  "key3": "4esiC2Q48uUmtvCxussZDLkbUuSL1AXRXE1mNJL5XExscVJrD8CQXk3CH2F2haPB29x45jvH8qmhsmM2TnSdzKBW",
  "key4": "3yuLnrjvdHfC42LFdHWWvzEGiTwdqBn9QsW5JD6T7VifeEkkmyp8XzJSRvyo7swq5YMbaXzCejyAnmFm11KvgGmR",
  "key5": "5zxjxWNdXNGrxLaCkCbCwjSEg5cU1TVECZXWsyUaN7pbWU5irmRgNiLRTUsh3rD9Bc8xu6gEcij8docAHJqxvrbP",
  "key6": "522WmgB88LV9E1Q1kUuUYFRWMm7yCuKvH9Qv88swNVyUE3AXEt4ZKnBWANUk1FjPi5a9w1isU3xLbsNo4EU6zr2A",
  "key7": "4KBv5hePxrXbLefgjsVq19gjR3pagwv6LQn3vmyd85jbqiCMdvZBTBMBbetPxaGDWrJJr9je2zfyUwqyCxB8KSpf",
  "key8": "5mGXFpxzYU23KmUKSTqy6EWmX3ccvhyMdKECGiDRP4RHPstmbmNsN1VdZTkZDMcpF3b2NQBsYwhFZzej8EnVSeoo",
  "key9": "5mWTCMWpxx8KGbmN3jZUNwpmty5LMduZ9WP8z9Y2yGyR9PqjZaqt9gEyQFPZarHnEoP4Sv8YzeaMwa4bthjaAmMB",
  "key10": "5wqe8LaVdq3CmxMRJeMdqSjFmcjKCZobDQS6LtviMWGUkhxMTezJGbkykTeq636qu6JJdya1MaNui9oYVBJUwrgY",
  "key11": "YUdZuxrUgvfUci7Q6nuBiQ3myt15Aqn6UH1otThSfT1XLxoUUSLYMdMU6y34LcFsoMyD8YcyNWrGg83BpgvSiux",
  "key12": "5M3sNFGDJLoSpK6TDzbPqxuC7SC81GPYKCGyK5DWNhRFNthy8RYQkgRyfMtayrwk6ZdqxQtczi6kkaa2p4HVSV7W",
  "key13": "4WQjg8wq73qcpai3ek2WNbdtNkBUhYjCNwWSbVVysMKXHNhPDZL2gzX3H4RBygscf4tSQktW7Z5eY1eVpGBDPHZv",
  "key14": "5XWvMfVD1KeeHFh5NRCyAVihmR9bfa4Qk8VPESh245edBDtfri1djVm9yivFLx9V65YQCXKtAi9SEL3Hf4gpdR1C",
  "key15": "QHFMHPDW9VAJAba2tuaurcWZf15SmRDBS9VvvWxJTRw3PzBTczuAKT4sMVztwpznZSyC2YPrU2KefPzzDNyjMs3",
  "key16": "3QVuNs4ufGNyu8VuW66UGcVg3DNZGDs3GevJgpJHMmrgQ6hExiZhFaVMWd4MQTqYGENhAU7Yrf5zFaXukVxW7hV8",
  "key17": "2WJYQJMdKChCwtjY8wWsYH9h6XsJy1eZ1opy7y6sdW7NnFBP5fTsqqnpiUzL3BAnr3ZVYDJgYRUatrkFT6TZoAyh",
  "key18": "1cfpYDSLbCoySHgeMFnyEweHX6yiXorZ2eUexLUWqMKnziXxkK8fFzQh9E4GgpNtNb45LGWm2f9UtEni5FWkMvJ",
  "key19": "4GYR5MNppZwReCLmasT5No4LCyujuEFaphLuz48XAVuFZV67QqQeDMHkxd5Bw7SeGoFDp8ApY8wgztWfE9zBA3Z6",
  "key20": "cdDz6QNAcShiZrGiQoJsqmZMDDkpncd27hxexgayJ9bBcMHXY2ADjXNWFXLLaTL9HTW6bA849C1vbGD3x1EMCof",
  "key21": "jNfM3QXuedgwjmExGwbeWLKEChg7Q4HSEWAi1JRVa3MZRYY5yn1foAb2yAvcy93vQGTrkCWGbE5n9tumpMaZqji",
  "key22": "4JbZKA4MQDCLud7cjXrpNLAM8mGkFuuVni17xqMKdm9hW2P46D6sjnriTqzAw9XpLxmztKDhJretdtfuYFiodh1Q",
  "key23": "2YSMP7FaRjoDFahtcMVx9mPVTfsQLgEvBv1qRgfJEBS8wDMP2NUcg7uP9iwpHzDSbnvcHzSfRraEvPpY3XMsJy6V",
  "key24": "51KSSVyJjBe6uLbdcDRe78VzP8zsFdmAB4YBpZisWkGKhDPpsHuqDisBHMcDYwCQb4Z84iEvRJnEP98vCBVRra4B",
  "key25": "DGRW9VsHssn5VHFk8SxYoAF2WKYye95R9sv4L8Q9NMtEGpesh7ZGRPycCD8auhx2bcjwZW86zXbghavEKCkfvh9",
  "key26": "2xeGt1vXhoxtdAGJPzHBp9gJNXeBDixSDLxArzNhLKp6dX9yCViHnxRrLcYv9FERm415oiEGfcZXWqYVkQ6Gzu3j",
  "key27": "2LCpDL3aXQPX3sw2z2CEp3bNPrN6rDXGBhTtgr7hi4ECj3KdnshosHTJpnkHuT9kSCqfrdZb21tn8QPzn7GZ4eSd"
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
