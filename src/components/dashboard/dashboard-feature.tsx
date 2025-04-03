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
    "5L7R2Y2QyGcitrLjoWmdQq3vmfPksy5iG5iR6AH9uqRNVjcPnnXyUEvCazvpsSxtoBYWDTp7roKdtEJ2MAqvkGeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nuk9caPSFYveJ5i67T2aJDvMgRxbYiMLugXpsFxjomZ6qwgyjxcLxdTE2AQE8kPnhvxn4HynHnHwGyjpjFYjWjf",
  "key1": "muEzyueihmM1n5mgaEFGBU7h5rAaShczjeYnKJQN2G9kLEscawQroieaqwhTwiK8VKiw9WSntGmV8czc86bw1Ha",
  "key2": "5wNxxfzFQU5xVV4EGkvBevAyWDVmAPfUcS2yjapnJTc3xK9gNCnXkSe92v1rs5EVZba1um7yKKnbiWL2ggD3jF5j",
  "key3": "3hFhcS8t6EYJGhXqbKSg91rq7j41j47eFEvnQUAENTw2mYwr1mXHVzqaC8JK3FabYjN7SBULXfj8ZKSNsmkRpeLm",
  "key4": "299zHb5E49dUxidutFw5qTyu2y869zcFHGKh4jzayVSjMwtaKBSGBPgQ7v2ubW9d8YPRe5cxx4Ld4KdA3F1k1Ljp",
  "key5": "4LSSkAb47tdmG2FbnfGzm6GqVhZD85qwptkkUnB1ynv3sVVDTw4DDKiqHcbrsEg4UtPxjvQM39RGqgUfXPqgJKXn",
  "key6": "4jAjX2xgDBC2Nkq7DyRKbeMt7677toiZfN85EmKWY1vRnsdERdfvtaA8zMCLf8gaJTqSfsBQTEnmPH8MzJnPXSS4",
  "key7": "2AWra5BUty3dp4MqEMinuMwNGmgkSYXwRm7Wr56mLwoffaS18PYSZ3zMD1oRAwpqy71CNzkYK4fgmqE1RXRoEa5F",
  "key8": "2qp1WGCqEUXLVNTqJDCz2Si3GHMJL8KpFmEc1sMXH8XtKKQuhnHra3esV4crQPWaE32jikDryPk37nvCngsPbHZ4",
  "key9": "325w5i7BwJL8kquc5B69QgoNMjcdJRreaKeFmFmmUyzNhETaGTD4rpPZ9xgKXt9pccVkN2tj1P4PctwvKvi4Pw7o",
  "key10": "5YfLbR3TF6huGczBU4K3cMsXRNDQrBsmmsKuajF4dU2JFoK3jvYw8Xe4nbKSXVBTgcad2FaqhdGb1byg2LuTNUMv",
  "key11": "XiNUWfBe8ersfGkwj8PnTPYzGaLxJNs6wvQTPS6auT3FctidaLVEANdqHT2ouUy5qVL6FB7upC3PdPNa3PBuodq",
  "key12": "46JktgKXzsRdXqSRr5XZKZf1dKkaB7t739jfULzsfic3UfLCLynQiC2Mdno5DvL6Qe48guaxfL369aUDTuzVxegV",
  "key13": "5NEufimDcJSUAuEXW5iEkvcavDgKwnpbPt9z6PcTLiw72Td8A4SAgHz4mZYDYcKzkeE5wgACdJniUMBYvRMysTDQ",
  "key14": "2HtxeFHpwErPQ8s95rMAj5BhEhg6zwUSAwLSKtpvvvZj4a5ZA17QFrWmuT3Jw9NY41qip84eaaCLTFq1NiXYD8a5",
  "key15": "5idyrr3mGTw7oNRiTsKmwYWmG2C8q1Ku5v1AK6aQo7ZvBtRGbvx4vcZXnuQYd591suXaGmGTHxvGm1HV8sCDbXoY",
  "key16": "4njpYubkVPkeWuKnR1U6KB7BUcCBC6YAEQxAEQwtBzazt2whmH3fyXxS9ka3vDi6sGBi8pKEaVJ1DYMNu6T3NFeP",
  "key17": "59ryh8Sfoh2SHUAKiYPYQMYFA3QBu2wuS8up41MWio9xkmFWR4kS8YFR6bK8fAZareZvAPvAfvGZ67QueAVXDJPV",
  "key18": "4PSs9NjvENTmo39cRUZDVKwPPUMuVKfxYffCHXTfeJDeRFSXnqrRByeefQ3PCAKYGTJWe1TQS2pGt3FJ7raFgMTd",
  "key19": "5eDdS3B5nZVAdB4ArNZJKuC2q4AA2pSasvYPZF94x4rHKvs8Lr7dYC4zsFbopvEMkiE9g4NtBsvFFeZSZbojYHKy",
  "key20": "2duBaCGXTQsCsue2WahApKpheXKbPGdJ9BYW6gkUQiBgmRvvKKaGjzWVdmA6SyjbgxHzoLqc1EKLM97924J8akRp",
  "key21": "3HVAcqT2SG9RPzLRudQvBL396n14q9Db7dCY6YXvFCKbiE4BGSXDxErwFUWisaTQ2dty8UuHcgSZNDPVmt4GFBkS",
  "key22": "3YrLr9YKPSMmkonMMm1tn5VMWLqiz3C9tnfUmEd7mRrD9yEV7dgWGYTEMTwU7xFRzw3DL7Atip6AyWjRzZTJJ1rz",
  "key23": "4Lr415KWRriCApBbNJFK2xQWazsDemYgJzvK2tY1zw6a27bLtkWXUF1XL3aBV3t9PvH7YPGfHSBxoZVMNTa92HQe",
  "key24": "3rYCm5ZESQdrpk3JMisuhCRZaitZzHXQwX6xCwuUi8MonocsMdUfnBfyo4DBwJXTVTZavavBKfTReUxbjKkD9HLw",
  "key25": "2LBG2VrmunmDNcRGqse347qudqSksRYzUTeKni28JLp9MFUBdRNft5rJQoD5kLh9DcAG1NSxK9XkqaYGdnBNhcUJ",
  "key26": "2VmFqA32BZbQkwC48mkaVCwwJ1EP5N7FTEcmqRDc2jFLa8VgGqYkdekE9ZPsRPwpAnqRFedVNautUyuVTGryvNCd",
  "key27": "5NKmCPmvsBw8hxdgbAwnvYtNYX9euxz6eCeMMGzRpncDNZ9gFBMxXZ6M8vWF3MxAtNe3FJSi8x45roKVvVHWQiw2",
  "key28": "np2hPwKeoKJQwLAaoChLyRyC1ZLJ5BsS7BHshVu34CB8odagiLt3dJWTdzfhEDAK6EhXKtf4nVPtLZw6VTSseyX",
  "key29": "3yyz6jBLUCpBRiDo9U7d4FJK9aGYRiHhPCvGRVU1FZc9zC5DmyUA1H4vKSd9eCR3V9iCv52DuNMhX34hm8R4Hc5t"
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
