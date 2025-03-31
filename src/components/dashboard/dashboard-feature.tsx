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
    "2dVxJDuSWF8HZRjnsDUi2pKkT7FqHzHm24KtyvA2ng2MDqVG5xx1ToaNnKywLEZ12xvA3kvJbKGTFr2iNuZALrVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o9ofvZjgurgg1fTwust5fHsyJVcbVJNbkSRAcPX3csHbcnv5EAyndRCDMdEQykLe83nNKm3bYFLKXiji9pze6T8",
  "key1": "4gotDgwgazgXLNofxmsT8hvsm5DGyCbvmtS3ovHS64Sjg237YmNdeUecaSvMMiEACMAsauHoVRF7ngqCTAkRgq8C",
  "key2": "WtbuontnKsWnLDnM53XRpwa8FSuE3X7hWJqikBYLVn683mn3CAtkrHUUtizFuz42qekqJktJUBp2zve1rKPnTY5",
  "key3": "2rQwq8oEDRP9nMBACSuDP73w9YKGMVLk1bKQBoFJZB6QmiLfbDdyNmqk75NXTCoWD6j8K7VwfeTjedjXHvLhtbSR",
  "key4": "26hLU75ppw2LWwPkM8xHfp3mht99m4vNQRa6TJare1PCvosK1Y8x7qgb4e4VRFnJMFfy6EMmeawFeDj1mcrmRxiL",
  "key5": "5CYzb15R7xMDg6DvjTYe9myuTfjoawEsxcSoL4UeW4kHtt1gZPKAu6JLtFxBZ9ky7dNCtLaYFptJCpx8KQJxnMAm",
  "key6": "RF6bHYpwFcypMaeNPAFMvdPrWF3SXH11D1SjXqHnUWpYyht9dDsYevPYG49mx1c3sLsAXqAj4MPHXX2EFrwdHMA",
  "key7": "3wYwGYMzRGCD64ijfp3bu49xLLnxD2szyNJKqXbE1G5p3qHhBa4N7TDDNRqbD6n8hTrUV7wqdSZMrJ38th5HmnGt",
  "key8": "z6MkXuoqs16U34e5tTzdqh84CJZD3D1LMnFupgyZRckjv9etAY7GoksqTModqybRVxArw9YWht1wBVdErwW7dyi",
  "key9": "5gzu5dUKfcfwJKid6sZix8GmKh4QqhAeMASMG3Um8nQvXVqdGti1MEuJ6PYLmeeHSJCMPP51AVhFo7m24Eb8tBdw",
  "key10": "3UfxgQVvv9nueDEsW9RKgi9kc6Yox9b4qXkRDbFoxBB1Cd5TdUVyNQamjVL3zrnRXcvhGoRxnU3PwvHa4cucAcRP",
  "key11": "5ZJMG7joV71PYBdrKRRem2LpxiaJWU6GqgLEmUa8v9AYeLZRKTYi7z3XssXe2GSRJsQ8CsPcUXByzVo2emj1Ss2V",
  "key12": "65owCMKLMKgayFXFYnFz8D4ZSE5JAC4kCeRVFTTirDZJRdscKC5y8scCC6bDicfSUdz4emrgbbwhbUXfshgrgMmy",
  "key13": "2oksNP7MsgMjqRzAHUJd4xb4wop4z8CdQ5UYrUzujbUsUBFDaduK5qWtd7QQM6k9a7XxfvDjCNp9GyHQZoxxjZcj",
  "key14": "23zWu41wJoQnfHxx66HMV3k4fvZJZ2TQq6p1FyMv29VSyoBAsjKkGwuNVnL1JWEnvwATNDGU6EXdQJ8cWXmoJ2HW",
  "key15": "5yTvuLc4yHLSmrEhMJ3cgYhERE2p683q4T3GkkzUfUP23SPo1a894Q7bzyGkA4sFzjPXs4oP5Xzrdo85yZvmUteD",
  "key16": "apTGkPqcEH6Lq4Ck1YYCGXmSViHzgaUjVhq5EDN2gAD86pkobuNAMXekpKemwjf5GrRQR6nyb4UtR9NADCSQCPw",
  "key17": "2iJJGsJMW4oBHvu1weQ8tJZvTFLN7uxcCvLS7BkavSqEGJhLUa4czgqjemHen5CcYmW9udfHvSqT5hoSUU1AZ9ze",
  "key18": "241mQf7RQNj83sKvS2Ss8iGXD2vqxJYfJQLK8z7cCmaboYUnjkeqPUvzUL9DoXnpomRQTqJNqcytZ9ubvG1eLPme",
  "key19": "2pZvzhriujSpaoNh52kneQ1ZEbiWAXRVR1tj5X81aGc6yhgFwoWJye7xwDpUqC5DUNwEAi9rv26R38uLH7VFdFwP",
  "key20": "2VcvuF82BqySj5qbuYqRzySyxPtYQPpvVNaHeGGZkGdrhw2YmZuu7rcPGGjbvQHzqrUsSuM5oqE2gh5xvsaTP4CK",
  "key21": "649fwwFVLGCVeZSq6xeDS5V87YHdxcqeoG92mf2Uooz2kkqxtQbBLfdvgvLjEJRdnJKyRPBBBp1GtY3HS9npg1a6",
  "key22": "5o5GBpGs7dhdYnUHqhtX2ATgHCMaxFAB68hPkZY91XYoyi1tN8h8EombXT6G5bpFdLRPvBPGDx4BDPQCvSs8kuCC",
  "key23": "4py3X2UsJB3b76HMWWXvNeUkKY6kcsyUUBCwJyzhLyi5oQcsLDMhDjZ8vmjGyRN8Y2gbvPtf4LMyfn5NpguicboP",
  "key24": "3GAfuLhNEkbruCtZa2yHrNzxujbEUszZbsKWqTqgtdnEpe4ksXumhMMCH83mBcs4mrqbWSFZEfEH5Gvh5jFcAUpn",
  "key25": "dHqLxQQ7SBSN8pcWGFq6vQHQBPXwbUBHYszE1DSsymCgUp58ynd6Pc3Bv4861T6Sn9idKkVD5FaoNr7JY9M4huy",
  "key26": "3QAWdnN4D5PyHZA81qRh9WBcE7sqjW96btnTJ24Sxe3QaVuDzEeN6sSAJjQRGvBq535LQ8umWUYrqyv5zR6pk5g1",
  "key27": "3nJfMekV3UwhiBg8M3jdp7rGe2vDKS4CfNfc6K1Rti539ArRCeSH29PDCxRi1HFEtWPYavxz11bVGYK36YaauAMW",
  "key28": "5Dy36payNuh9dsVZAUT2Ex6SGDZ3oJizm9q6q3zK7aBAawjdhF8stCwV9RRtML9aqieVJS3LejZSkHDkxJbhKkK3",
  "key29": "qcSS8Y65edVS7iqZtoxZ3V4Q97dZ97VJ67cNcFDMFiP4mdVq3kQ7UGRgFh1P2YL3eeuCY3vGoqURhDNh5nU9mTm",
  "key30": "5eWPvQqfPN3mBBx663JqmvdbZrMH9phRwrCYkPQAQYRZNUJtqck8QXQypTqr68kppMu11Yi18fu4VNuTXdu5zn1Y",
  "key31": "26TMHE8QFSyXYDcHcZ8wSpuXvG8WFhoSLNYgM9PD5AqqxPMQ6naMThGUi8HdvgFJw5SwVnHqjGito281YrrA32XR",
  "key32": "22WN14iDQma7wiDdQmnpKj6ZhePbabcFKpuiE35d3ZRiEZeXsbKJqtuXq5RZq1KWGknCSUFxj8ExpwbNZ9BgEdyT"
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
