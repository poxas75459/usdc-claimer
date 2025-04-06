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
    "LGw5PCJsgd9faotiuwS7AasowtPZJFUz7Xoo1wLhcUU1WxWcaV2NMeEyuz4jkFxFpmu12xWzdorNd7jA4eDLmuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MA7qkegzp7jNypF4FMeE6kVE3ahHBjcD9LZxQ8XNXEgTySs6v3DD697oGMY2mQTmAP4zeYdafNCgysgbMM5Ffu3",
  "key1": "2MQaunCCpwiLoprudmEHpXcHxNSCRjjMQtEtq5ejbzyJpCoWgRCPSxi7tGLFyyceNswDzg55egPMXEdoEh7fE6EU",
  "key2": "4a3Vwog6oiufaMF6G8uzPC22qdF2xmsxdZ6bbqL9nkVDhsuRC4C4iSzXj4K91g3sQ749RDSsgQpkm6DpfRu2muFH",
  "key3": "3ugEPUtaCgAV5yKaSrFemuhq9AbXpfmRJJAXkuwYSEP9BUQ9aFTvxqGcGCg9KPnupqxWfkwxMBPQL4Gy4JvfaQve",
  "key4": "3HGUJwquJHYCFpWj31ViX9uQeccyKr5NVyMkEQjbrvZuaaGVNza4zXDC9XVDiSFyWTa1KUBAPG5sucdBbBGBJTBK",
  "key5": "nHP6EbUYsySLy92wNfPdz5J8jRbbQRxfBhQAaDJwr6j2NgooEzNSLkfCrG485AMQxjZfR2JkfuEEUyoq4k1A3Th",
  "key6": "5H6Xo9exbvTv1rhUkgEzxFrgkoxcRL1k8Jn3FphHS6TgZu6jemWjEgSFXwr5tPbxxLD76jgWj6qSp7nxFmx6JtHg",
  "key7": "3AETUz2N8cdxX5YbHa4YjoRwhqj7oKRcN7NFskPszbVGtwdhWZ7ZpU6uJA3AHyPG3M2vM4SU53o8FKd2dZbU9cLW",
  "key8": "33Q5RRyxt12t8ktuDHSrhdTr5UBXe3DShu3Ujd4Y7Aa8eUW1sRi81HiGCjd1ocjXskQxG8yCnQi3JqfUNjH7mktV",
  "key9": "kWvWGUSJsUJC7v7G2ecwQCTtREvXph4dhNbHPpeM7X4rPQkb5x98F9yoiU6ikbrNPyPvwHucRMmZYC6SZjF9kXa",
  "key10": "jbpAy2VfzvzA8aaisAftTieJLyveiTM2ZMLA3PeVP4y1mn7ADkZd2kHtRecucPp7oV4NSJhxkBogYxNfMAeGqgS",
  "key11": "38NwrGMm6PF1bLUtcqS37jeDHUydxav1PMfwsUN2srToW2Axjt6GrocSxUeXkTWa2a84fChF3jY9AzuT2RGYaUD9",
  "key12": "Lg1HRDHXisyRXKBzmLqb9eFqp86bnWPmds7QjFUXou33bzoqesG3AUZ3vT72cRmdp83cLnwMo8ZkSKzUj3UddDF",
  "key13": "S6sM2cnHR8NotASKBRYKvv5rqf5ePNQbiPjTi9y4ccYKEEkxPXvBJR3RZAfnt7mt3qdxwNq574nqH7mZyEf5D5Q",
  "key14": "2VB9cSXaza2YQF3gDf3eqBf29Sb5NvjwBfY8skShbyT5V5k5vvyXetgtfd6vD4vjXt8DgEWwjDMcUGPiK6obHzFn",
  "key15": "9sAepaqxLWwAzYXSqA9qQ5TkvyTeebNTbLpzdyxuS1Ay6qrfxHp6NKPB8oxJrTYwv4L4t4xPJg6gg3NsciNuj4J",
  "key16": "tvsYoA25fub662s6Qd7VxHka729rcLz5am4xsaZhfuE6zjSKKEryjnVRgU6Aedg2g1UMAxqQ5Hgv2pEhvzaiZe2",
  "key17": "654gY5NFkKc5kofD9VwCFhPE1Qy1nihPXEGbadUYuXGRbyex2ZFoXd5m9vp3N4cjp4G4PCjDGsoH1QjXT9Lwwwiy",
  "key18": "5kMedSHQif9dXkSg4pYRN7WWpwL5BCwVMFDGHoGoGgPWm1LiVKTBUvTi9WKpGAA7D8ocNCm8YSxBX6GxDTxFfYkT",
  "key19": "4oaRuSWzAeN5HMbzuvUBJsaNPDwpueAfRw173i7B73Wxfm6TNZKVRvhB768Ymwg6o4LEexEhtJpep5F2LaqAf1mr",
  "key20": "2fhd2EczMQTfvsXwsUcnZhpJJA6j81fRCGx6jrS4Mz47hCR336ec6yExvviYmZjn3CekL2RZrcFPRXby99mY5MLv",
  "key21": "kFqWXHNV2XmVvwH9hMyWitBjhZkKgvnBTsGPbbgfUqBcYvQiTuAcTDpZibStzZLXU1eT58fSebjmraXtghicgTi",
  "key22": "5DyaXy66z7fjNiNwtpVh8ZDcR2ac4vF1nk1ae6bMgmg8516dBMEfuYE7H37dMQC5maSAYvTE59dBJy3nmgv7jjf5",
  "key23": "46hCHwKogV8KWDfEMtGMgbUnJS2keUKxY7Vf2KnB2HnJvpXPcUXAhPaLKgwuUPw5y6vDuq4R7KbbBS2dBA1Darbd",
  "key24": "3vZ7F991G1LfaafjYFijBmwEtis6K8UrXJTebG9v464XdbpmjaAaWarxcpmnxTpDJviV3zRXxHJHH2m9LBx7Xt1c",
  "key25": "4xWAdG6uNBPReHomQN3psfknuhN6XWbN6hJYDDPgMX2nKJXsPwAPdaP8D8pZFd3oACuuRmX8iuszrqSqaasZXffp",
  "key26": "5vF7XW5nnMPNvkgd83i64kkq5vXhzNatGHQeFi8ch1UpXBuxvq7QZouUzw1kyiBZoPmNEbLC6gD6oUUG5xLXG4tM",
  "key27": "3XKDWZCCDVVmhV3Kx4SRR7RBUp1kZKS6majkTA5ovczKjvLTvLkPmDsKxDJ3EHmrBo6XgFbuXdKZ2Gmxjt3az4ai",
  "key28": "5kajUNMJeCEYSgoy4EYgC2Ktao8obyTCExDMwsZ3RKcRMpST5bafoFEinwc9Yc2fdi6B1s1cd1G4f4wszcn45qhX",
  "key29": "4PdrNQM2hAo2azhoMjgd2YNR2U4ZFFVkaVHXBub89RFqVbxSpx8cCJfPcKFzWMBySWN1TEyrJHoWyWcrSit1f9NZ",
  "key30": "3TtyxxBb2oF5vpoc5a3GfaaEmDW2YRqpa9WsKi8h8jRVshLbiaNHU7J2dV8TGcF7ha4LtdAWh3FnjqeH8v3AkQC",
  "key31": "WghNMov8cFn8w3mrH9j5wi8VcdzggCNSHxGUQVxm9wKGnQhWngUnhRpa76mahMbJhEd1ipwsMPXp5jWfW2TTmhy",
  "key32": "4XGz7Fh99RPf7Wu7L8EE92ZvMRcjwoKeFFpsCuh8tow7Xyp8a69XEwu57XLhZ5G2B8o8uVDYX4koMmkVpsy1ckta",
  "key33": "AcoW95aELHxXCFedNTCWVyf8AX9fyA79oY7WR1KU2qVAjL1KaxHGsfwoAfhLH5Eqzwviucrs6Tst2rZNtS6brZC",
  "key34": "33s39bchDdAuU2JXngsqerjKWP5kWA1XsarHXEMeKuKbHKXNJh8VqjJqhEHh1RpC4o2n3DJ4y3Ac76XSGYD6Wci",
  "key35": "5hmg4mcGQ69rAb38w9G3ifAMsTgvAJi2pJpRuPQvBt16hbSzQgP6FRqAz6CH49MQPsDFVs49VQBCmU3Xpbu5teBm",
  "key36": "edamcBHdPxuBaKbEhPf4qLJ6h95LhhGFkXK3onmqn8MNEUzFPPfj2MYZkoa7yzREGLYoeJoFENDhbaN72EAKFUP",
  "key37": "635jJa4ariCLAKpTshyncv2crRSaxrKARyQ6mqMkazjdujCXaVjoHKCgYHeD7Y45ydVzoT9YGi7jTpNtRYZa1wVU",
  "key38": "4WRX2st28HDquwYyzhvhWYGKypGioLrR482sW7z6e9tXgb8X8U5wUWRp32VEqXLP71V7M4KZinNEgFMnPUpbWxNs",
  "key39": "49VzV6DiVHoJtuk5dUPGoho4rQXMDtTFXtV957iwzRfGQDRqKg1Qoot5LPDgp6vtbBuRKhuH4CRdu8Vyj3Gn4sCb"
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
