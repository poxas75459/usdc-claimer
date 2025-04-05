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
    "5tvK38v9TrEfaCE3q2q3wWNGZRztYFV5rYt4rx9qDP7ddiNaRu2EBnKySnQYSsjnRNvPgSan5DR3hMGstNwQYjDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A75rXXGJBsBpPvKu1ha2f71zS8u3tTwsd7mJzCHRmZXkeGBFsdvePVPTkrhgFUfnXQ2RjMrgEWQjewY2XuDDazZ",
  "key1": "5m2bZiQpDDxeRYZ1QbQu1qDdTVbwGZsJr1nKq1b3HPPADpa27HZuDLaFs8CptqKh6uMBx5GfjWJ7SQonKwUQ2cco",
  "key2": "5kwypZvTaaVWLCvTCFm9ZA3JC8FUYKUboo2yDSjT3dDWokbpz4jzXStYvauMgoACNEwggkYuMP8b6xqzrGmVqiU3",
  "key3": "4fcD71yaw1EXwAdLsEdcwaCQr93kqZbohvbDphtJk6LYSigBtPXPykDxMp5uwxZG5EyfC5cuw9BuGcQPJ2mP1ma8",
  "key4": "5U46xGmjSc7XwaiiZrDh6hCGCmF5MpF51mjszXe6qoPXoNvgAREcShUN5Xn493DYLi5XLE4YvAmGZvdepQncrAP1",
  "key5": "5gvsHZ6oWYTcSshNrMFZLoy29D7z8BB75a21NmhnWVw8WiCptgEMjuxMD4RakVuSSM5zjJxYzf5wM5koNfXGvyF6",
  "key6": "4hBTmozaU877b9LAhn9Fb1qakHrAJA5thBBciLBzPEFpMiNPrkUU1qK4XjJGsctkae3zRcEiJ5MQ4GZ1Ksmc2bNi",
  "key7": "5pjt1Y3KTWxkFVXRFEQ9fg1kiB1Wn9ZZkcaCgeU1SiuHAX5pf5QD3vfSvybTwfqQrYM6Sx8XJyaqLX2qk1vWqRGW",
  "key8": "5FBo6DxuQb4yG6VyLtZpknDu2nSWmT12u5a5GtvkAJzKB7YUDaE9u5gHx6p26qU5tMmUXDpDov6BDGViak8RUDj7",
  "key9": "3FRS6LXfk4Q4X6bjGjtZ98wf22ahpsFDVwktCuzffGvbDMx5iTakwWtuixNzwrwsn6LUztfxfDVwoaqJcJQT8xxa",
  "key10": "2EzuqeHJxWN75mmt6q3iAzWHMhYXob2bW1wWxFbQGyVjFM4FpdjHRLy6oBK28kqhuBGZFcViSrkiFw9oTJUoZqPV",
  "key11": "2fUW4RkXuQGnPvaSVh4yPko1qVQRK7wiLUqxRFifq8ZeYSAXkdX9Ctpo69VcJtBgDHugT3ACBKnx4ui8wakHqXK9",
  "key12": "5X4WcytuVaCBq4Xmw9iePo9Z48HEtZeWibS34yksLsHekBku4R1aJCNHsGWiHfGLgfaq32oGjw4P1xHZLrzS7FX",
  "key13": "67VKUNhVeQEoPR8KvqFCdVDh9GipELmfcTBaTUHUKT96mbgDqndxnMQey9JhJ5t8gDsDi5vX5v9sNAgmL51ZE7ex",
  "key14": "5zSwoVSePhpLHcaeZpigKHspFGFcVkuJgmjeLC7ydy9BKRSLEdFCGo4fgzUFChgJzGFdbzpUGn8WDuvZ9K9dunqT",
  "key15": "5McFLLzjZpkERqbPscosnMdAvSPH3oMXN2btMAWES2JTtvnUMpxEp6mgGqu7HrbETL1ZhtesWDPHxd7Y6BLYxZ1s",
  "key16": "2NsfSH1VDMtRTqE6TDmci4M93MopSVVE3EJJRVqhAhtRdDcHhNZ74iKgwPmgPqY22x8HuoUH77VcoUW1bP8UZ2aQ",
  "key17": "2dPc4XddSW7RzfcTdzjUnD5ChMux3hCqGvZygC1Ke8hzf5GuB58inbp3QkcU3jLnmSAQ2Yquk3XWR3kxRVR13yAU",
  "key18": "3MmgSXUJyMEWJQEbcgdr1aFYbbWqiCg69NW4FE2JnqvpftBeMqKtpihsRX1uiyg7ofrvhs4jP6eVS7MRFKHUUCPC",
  "key19": "2giBznXyXDcLKfALC9ayo18fwVfcDem5RS2xczWezazVYjafS9rfrZJNEjFtJCec7q9uErWJ7NvFpViuk44C6fDG",
  "key20": "24ix38wrRXqeJugm4bZPwojZz5HXMfwkDPCdatwLYWatYGKjWkaz5SZVYmjvUvteeiLah3WMgD7qy6wFEiiNJCkP",
  "key21": "3pWFJC3qm64w38DHdXoiLX86c71PV2dJczqa1z81nVmQP9EtKdAKgmgdTxw6LdnDwm4uEZQPkycDMzWzGzr4FbYa",
  "key22": "4Jm6oGNydHHwNzsBeEokHtJpPBDpQN4ACiFbAG4cGumi44UpN8VZWjmHYSGyzzjVXWY3WanHiiPRX698TJXqrSLC",
  "key23": "5KX5cagzVtAFPat88qYQSVuxUHRXjNGauEyyap5Wv9hAbcQ9hVewudfTVrAe4W3kMzq9w9bnP3iNVxLGaaxMC6qC",
  "key24": "mmCDRm2Q359QEiJ69vKVZiuq3sGjuzsJ7L3DkUJJzyefs9Dbx9tnQARdXJ6G9S2kutcSYyPyxg7BaxnisTaRvq1",
  "key25": "59yrbbVAEwkvnrTL2H6SvZyGwG6BdDcFbY5ZX6iqFQVh2JBdLru1dT9JDTwGgFSDzwzAnbKNrQtUHVgdqhPLFgge",
  "key26": "48jANhSv75c2JGD6rkzfsYcgT6NDZ2VyPASJ7yvseaUaZGokeojRj9ebkGog1nU2oSpxvgZJXVCRTBoaDySs89Zn",
  "key27": "38xa5hBTmJ8AmXVTRwyqeE3yMzSVDmB8QHbupdgiHahYPJnD3Cdh2r32uKEB6UCzDdNFajhqetVGpUcfSTJMnfkg",
  "key28": "2eXzQrBFhkfHNsgSEdFbeb7iMA8gMQKcmMwzAgfUy2Bgv48QgtxEDHE13DyGemAckt4RhrDffS7YeqHJfrXBjGzz",
  "key29": "WkGtw8cBRRRYTrtCc52KxaTmnNvKGu8zMXWeiWWffcvqd4DWB3b8eLDiMiH3LZNWtCVVMPFEuNwRgD1FTf9NPVh",
  "key30": "5nM2sKnM65UNXcafmZshwJVpsA7mT9itW9jPaepck2hVmYkRzuKK9cRbi7HBsPBtu6JvAshe6DRSLWv31dEpEVCZ",
  "key31": "VgE3MPNMet7WrZehDndPfSx2xYPqXoiVDsTLsqur267C8P6mMd97KhpkSxrcuRuWKmoawnC76Br9Fae4f8ogNQV",
  "key32": "3nhhpLWPTQnBaLckTbfuprWcchMJ6TB1ebE6bPYHT8cdmiGpC1xa9wJsg9VMM89ztHfk7RBLt9X2ApWhoo81caNG",
  "key33": "YVJP19FTNvA57vAk6JkWdniy5MmYtt16kYPA6D5VAmWa5y48dHxxiSvNGB5Erp7oKoPvQtDV5CBnBzacRKdFHxf",
  "key34": "5q2S94GKKDccucfxHvTEdaoYeRFGBER1GXZdAUUXrK7kT5u8okwP8QK6jids4MUAW4DgeEa6TT5VDCXZFgFF1xQw",
  "key35": "2eVnCB61UdXdGYiBKQBTpwhsraeHTk7ZjQCfLT9QKEVvU3gHqXfdutQYtvLWwuCvryZm3rUdBfR6UUytuLeocKAZ"
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
