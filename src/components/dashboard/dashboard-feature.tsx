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
    "2peQYUJawf4Ub2CAxbrXAnK6A1UUtwgAPZE54CN8nv8wQY77fkktLRJMr6N8TP9rpfhWjbjD6pDJUkn3RHPMsnKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GbbCnSwGE65dpZuyhgUojUPTSF29gykccFomEfiKMWyWdWWLfDYPGrW4un4Nn3es67urmtMtQhTdrcfgvhwocLf",
  "key1": "TB45dEDHwKdTxCsBFkNBaKMPe4X2edzFttstvrixrL3Qg3ysMVJ84Vs5ZTrGAN1AYfBDpwD6BENGu8v351rT6LL",
  "key2": "5vDqM44oQwMzFKTAcSraWg26usxifuHknqDtPxgFdiZ9xnr3ax1Mf3h4QCsQWe2FSvu5P6vsMXf47q1sM46dH54k",
  "key3": "4T4XhgHXMGYpji1VHC7ZQv3ohXQc9HV8t8K53DipJTD4PX8YCBCWqL7Kc2CB8CFbUunmqYmfTqT3BmgeM7mDJqzK",
  "key4": "2EbsD31jUjDZuqoAN7i7o8PGvKNnWheVBTMBQho2T5gcm3pPP9TcSm3JKvyxUoPFuE1Lfjefb8kSN5bhtzeqr8AS",
  "key5": "3vCu7Swnwb8tL7hTGemiSZu4e5h5mVR4PXPdJYwdsvaq6KJNQstAndkKmcW5hmtzPRe2zKfuVAJAviTzyjhY1hqg",
  "key6": "ULQDi2jbPMY7Xw53YzruEZoERC2iM6Zw7zerwVTewymh82Yzoz47JMhtjKtKJNnAn9dmTCznTKSB8sdT8KBTHc2",
  "key7": "5TqbsVbvsxj77nJzmgbbkE4UGZSoQ4GJ9LQH6SqaJXpxixantgVB6fjHZCuwZBmaNqZavWX1FfrgNyjNEKdUu9iq",
  "key8": "4ecSbsyUEnY22q9vdFCYUopybRR2F7CVeHu2A37yCHmmScnuU5dFMX5WZvKSd3ugeSonrZ3DYKAQN1xUKrks2uSC",
  "key9": "hpewn3RFbvu35Wdbupc28HMFhgSWfyp5dTJH4XprBMBuUVmeiN8aKNgMWkHtsMMys8BD7EsAzTfHEZMLCEpQfQZ",
  "key10": "4JkYKkpnqPGAE8cQ5c79jUmYd4RNLMpzVPyPcXVVfLpaaTd25LsEboCW9sV7kB16aboo2BU7nTbZRn9n1g7dPNQN",
  "key11": "RGgbidQj6FzMneNKSQR4Zh86umR3CvTwWQX6iNEYSLoayRrRDEMrEC7nrrRLuJZn1TH3XQDAseXGbDWmujkGhgZ",
  "key12": "5S616dDCgE1y7Qdmmt9fVEvfRw88fkidfmQGLEukcFcrfo6iJV7Fx3uMUoh3vkuqWjAMn5GVj9mhg4fV9BiVVL4d",
  "key13": "343Z2xJTEU44QXRbirv5pXHTeLQjZepaqQ9i1cwWsW9UNyBfHyp8T119ULTphAxmFb8kuMRxaEAn2rDMDUQRbXfE",
  "key14": "CBt9gsTAbw6z2w9G1xRQ1jEbbqg5waoic1sjixvq9YqZK66WNK4VEA4sV1BA1mrsrcLYGQX6c2oVotQYyjHP6dQ",
  "key15": "61C2nfiXqjTUhsrPfZXbaDR3Vtx1ynn4qZJKMqT5fPnqGFeBf1j4BnfPYBGLYdc7yjTt3CfDEJ1sQkyk6drSY1wg",
  "key16": "ZCybsxXRJKvX6ZVCFRivrvo6e3eYpE3o9hCWNiVDY5ZQXSghWcy2fp48uLgG5QEG8FNMKCiNRNCCH1nRFHtTN4e",
  "key17": "9TRqEDyhBCVtGhP2m7qgCARPgMgdamW6PkZJxSyugaL8nyNZvssToN1msTEv4vZVfHfZXCtEmgjfH9oyUrwvukb",
  "key18": "5siEYCMjFi47cH9aZckbs8FC5u8yw8aQu8rEKxBpYAh4q2fuxxQDbGaNG6hwUHzexG3qGeKMSPecSZmc44vX5xAt",
  "key19": "3RpMTRknqtehMnQqJopi89Z34LTdfvqJusg4r795XU76frX7fHHdE8EhdWWV1JSX8d4tK6TedeAUposr5kFcb8oK",
  "key20": "3sqkz8FaARoDqRuf9Q59UgvRfpFXJDoCdMxciucJVAGSPX6vh5zuZMa2t4ZQFGEr9nwozgRSbWytuFzNk27U1EzW",
  "key21": "3Vant8mNsnp4tzQtmTmaFN4uNMeuNaycFYU1xBXZyEpnCKmXN7hFHhum48WymWg6WwcFFBDdRhLdQGCMCZ5NmKY7",
  "key22": "5oWnU8E3FgqrFgv4RqutQPaKa2x6r5gn1xA8cX13FFB8dFj6z2EeoxzoFn7wGrfSUCsrFhXCcst1WExw7zNTCnzx",
  "key23": "5KxfASGmVx1R1pHFzotFYUnzXNLqnKjTH7mNV5jGPrZgQ1VEfabsbTFu9RV5FFvGM7uTdH3xJemcm1MoVLdZz1pv",
  "key24": "3zqhELRZKbX2WRkfxtCNS6UtSvBiXrMfCsjusSnBve2CqF5LuqrrHLXvFUZ9KeGZ78QxBTVbud1dt5HGWzUMnqN7",
  "key25": "3oKtfaCbcG2N3H8EJdjiaFS6tEkbGsYoJxswjJGF9HQLZy3orxjx2GRESpqe4d6kkFzN9hqi7ocBmnKc3hTgw4t6",
  "key26": "EeksBZv3BCtS6zapyJtqtpzT7F3pR81EM4rSiLpCYvk3MNDoWHH82uaGCFQ7JLUBq5iQLVUCAiuJptfVTVk6PNH",
  "key27": "47hz2ZAACCd7gTC3TGdBXpNWu9qcCGoKHoHCjNSzcSKi4hQsWpz9q9afsx6tWbQeMGWvkgmq4gBzCXzt6N9rquzP",
  "key28": "3sXPShgEk2opNKVCVBafh6JPbtBowqN7oQXep21sDPh2bYHxAEfV2xDp2rQy6FgwKBgtw6eTfdELzBhN9NG8C57a",
  "key29": "MmUTfWDjbuu4PP1uTAQTmzRVdLNaBLiL4y5y1VRkVcsjYZ5nZ91LqPJDLKTm7J4axZXZwAHjbXiDUwFe7YuhSG2",
  "key30": "32Z6ALFhgzJ6yxkUxUQm2z3yeiBRaCGXPnekaW2Y5zXLzmpTp5i3WzA8xKepiBYu72ymPFfffXSVQ77YKihxnNF4",
  "key31": "5S6ZXVYN8KPf469Hucn8zhpz5xLoKeHUaV1bEkNoFH8UBTTyZumzy81RGEC9MoYZHwFhcsjs3eywPMKPrJu4WwtZ",
  "key32": "4mZ1f5EroC6XPjFthg1bZQfkzcW6tS16KLct2813vshvD89NHwFg8QKAJuM9NAMFN6kkhJBtwoQtyJeqoCoEuHuU",
  "key33": "31aSfXRSCeCYttMty5dW7AGhY78NdFeCwNgPGMTVMwg2cd84CMLeUHkQ8n9pVow1XpsDdbvBqsJv1R2AgNzou95Q",
  "key34": "2V3jvyhvRbtrDaimq73nw9BcoRGF64wHNwcXhjTi4vNLXa3Yv6f8tCyvhQGYa3hvHj54gSnGTw8KBAr632g7znJP",
  "key35": "TLBczwdHs6pHquxkz2zU8TrSVaFiZ5aWVDkfBtUvgKfHbNZ5okPAvG6wqcLnfzhHZAXpEZTkJJW4HbPLQ9xQnDj",
  "key36": "4XM8ggRfqyP32K9ybikHXp3Ar4UrHNtYSC7bai4nmbLTUE8y2r9XGeT3ZfjXDXwefLZRVR6qNez1GSeEpmRfCBmj"
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
