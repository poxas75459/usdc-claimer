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
    "4ZTDxu2CB6JyZnLgxh8quTqWnjWukF3Sa2UoeuwJi69ZzzziTmSfMstAAe2HMFWLh8ZJPDC3b9gX3NMpy3Y1T3rQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KziKWHidXzq3Zj3UsYT8Dic9HJU5NYhfrE6Xe57dC2Gz3wTbeYV3w3mR8NZZkutZuKf6M7dxgH5AQ6N6Jz3Vh3A",
  "key1": "5rT9HjbcoQzwZRXxeLeQTY8nGU9j94oXPZDNAoS71mWABGThc2fDBGVPovx9SSrRhkP3d1RT578FhLpKFB8WgcD7",
  "key2": "5aquYSVZ3n6BD723mffX3z75cyK67SdqjPCwYxMUDZAd8mbPDQaAGrp7vm45fKQMhWsrZjW7QsrK5hkhkBWUJtqU",
  "key3": "4edeLj1r5uuaZVQhmgh7cBk6ks6W6FQCw2YV8naBxNJk9AEQs3XT5XYp9XKJwpRsVN5DZaLaS19gPzBFDyDVq9N5",
  "key4": "4N86S2HRLTj8rLnq22Dy5BPy3582PTXDoCHBQ6voEC6sbTt7LZyssDcwuktjJzHB8S8xnzsANB1dY24ebpRKGGC4",
  "key5": "2KvBK6tbv9jvi6Bt33KyTzUm6sisgKaQhP7xRNsAVoVt9M9TJPeW5kV5izrYReihr2i3a3cMcGtaWi2en3fym3GA",
  "key6": "4VywWmN5zrsyJdVcfYMbLTHq39UMHwEhuyUvD3ix2Ysbu93ZbCw7GVFQn8TqHFq9iKKuejoHqkx11begDSJib6Hy",
  "key7": "21E9huDjEjjSCTzigwXcEjSWwo8bLtyn2nbVBo92n8AhppSqrW9B4p5nzHNUe4SXzNnjxTHfiP5VqjauwAYSWSMw",
  "key8": "31xUmJfxc7K1vTs4FQmLooQeKUBPnrxbvVFzqa4zkJNUueGPXm9oywkKbygBCfv8PadyyrHSMWVEBBSsYLEvSWNJ",
  "key9": "4szPcfY7SxQE3jRuQ7LCpL71fFQ3jwW32TAFXqtxo1awtwYWMMuu4Hyq5G69ZhWi27hKga9gZtTXKYWd6eFetEHB",
  "key10": "4LsXt7HHnfnUMEb7Pn23agjfLEciaWyQ43HX7MHyLrcW2xHc8rrkBCTSEa1rVar3PcpB8zUKmQKwyAVXDUW54VzP",
  "key11": "27kKEcXsSWLjQ8dMD5W2xyGcKNF489VwD5NetExeeCsHKHemxA4Yq7g47NsQFcbxGsLqCDd3DaQrTUej2TT4yWFr",
  "key12": "QtyQCp8YU9Limg1dvdDNiwToQcLQ9Kb6j4aTo1UWhxWW1apAFQHkyG6iicinJa4NUUqQ5N78XBp1E3DJJy5e7qu",
  "key13": "3fQG5RDPztRNZ7A5eumNF1C1QZxa8K3w5aqxxJ9AekLhx1zf2MXU6riaQaVyNLyEZjmbnoV9wJwCAnmNSSApeCD7",
  "key14": "dvYojDQRnYdeTk767fcyDMRSXEwrZ7Pm1tT4fuoUrt3p23Qhm3MNRzX7YM2sh3UZ2G5rrnM6NW3L9VmmW7BN59B",
  "key15": "52pcZRXiKvQtwwergzKG1eEXVegwD8J7dD7Jihoxa9wp1StA3zwhaeaZQTunMU9PgXBUiZrh4tnqKWdzrXVp33js",
  "key16": "3KNfkSaZ39yuZYk1EbGmg1BmnYVs4sufS7122FRf6HvTjh2s7pk3ujiQTvKqNHG1HxTddTYZhZSafdHAZm5dSk6",
  "key17": "gDGF4zihaYFq2ndqeaWitFJ3FoimZhZVt1TvSmKMS13cy6PQPWTnPyjgf3jUcuC19cyuBSsRMcx5sn1FFDScgf2",
  "key18": "3ZvmTBbbbUgg9trJMgRzvJ8cmdd7AoGqi933msVxyGMvyoDWxqiP2Zf66JnnEogECWaLopoCYKnKp2bphfDuemmt",
  "key19": "2mhkb1yo3rfd6BK2VKtnNjfRnUBEgUHDEeV3pGLFT8nXQDrFtJGpf8rU8BeheXXnRQaK7qxfTf6yWCbNfbY22nk",
  "key20": "3UtKkiPCB2Tsiq7P8NpsgHg9nC3fiPaL16AJHrF7yeTp8bcUDCi2Njk6Jeu2CDZS7c4zcPqcf2pvHJkBQCHWBgC",
  "key21": "66oaHuWojQvei9Xr3RFYPCn454t5mXjZUPiMawwtjtySoAXbA6vSn9P4PdVnoKDj6W8KtseAcRTbcgv7ZXfw6iGR",
  "key22": "3mSZEnZ9pnCtyBbWHKpWeYU9nUbtaSukhuVzXGiSmQPyLmfg4ytj2M2rjat2t1G4wB29xzaZQN5DSoPngbWonZqS",
  "key23": "2uha8pkDnbdqUeJGYq7KU6sv8ih6vbXKJYLcDfQNkprfJWZBeCdyvVCiwAF3pAiRWM4MHXZGCCzxT4udqz5UfdZS",
  "key24": "5wa2odzQLEQzXC173tYFZeLukEREtKiM6cThAVc32yjNd5SAH3EY313qdQSRxTCEWXM59hymryDtMsvCEVjxrsU2",
  "key25": "ZrKGzyBddfkrbhZPNb5vWFp9qwHMbdMXFRhoaY79i1AiMVTp8yfR2XcV6FkkFdVPyJqBmynnXbnVYrMCvqeVDes",
  "key26": "5onrgL9NKtQZXtiQKyoBeD6wjikxdsyaSRxBuiMchJr6tqthj3bGibkHH51AqmmkF5jqSnXvPz5zy4SiXRhG9CZ1",
  "key27": "2EsL9o7qnvvXjxpgYmQH2Gchd43ZTHdHUcVor1hhPy1kpd6AFgjcVMxQbNayjhpRUatD8TN3iBJG8PtPdT1pzYfQ",
  "key28": "4F4X4BamYyGyShK7pYCf5qHvZtuSz3iGnuBnkkHakiQ39ZotyTmKnHRnrdobN1pRUTce2XdFNUZfwMia4vqLjkTw",
  "key29": "2G82Wvfe71yHqZQhJsreN2B4eyLb1eZkXyxfZx7y83kCwwmvRb96eEfvGYWDfymJ1Bn7vzHAMvM5eNWfxvu7pej2",
  "key30": "jHFrNrQZuajVAy4Q6u3yJbdKbU3A6Rk1G4PC2morV3hHNZXBZH8QQVW5K4JegFXiZrmXHzSjXNLiofCxNLSWT47",
  "key31": "5Z56KTMEVKwV88ZE2mqBLoY3Apfv6V8eB73B1QpjmBVykm5QoPaLXajEbBgCXFKkVumQHCMLVUaNW2KYH4WrTumS",
  "key32": "fCsYS6RUS56WgcEVCVMQPnZqSTRYJSLM8qE2RWNxcufki14A1mt3NesFfy8nMJxTwrNEWm38QqSF4dLSUnfyF2b",
  "key33": "5wcRkMAzuqrVnmNX1Zc2UWeBtsfh4R1upZgoHoAdf2h6Qx9ebTmqTkzsMU5DaigYsbPD3zuLPcho3SDabVT1Czhw",
  "key34": "4wFjE7j7xE7N49pSdUyiariZ2owbQ23AzuEd34S6FAaGfRfuk1PZTCphaZ5AkU5w7iFZa2ND6KvUssHyxFaY7rn2"
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
