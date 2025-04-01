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
    "3BYVLk4HAqfVofRZ7zZpxLK9KYimL5n7iBf5JtXQKTMK5qrLTmXevFkEtFr7tCKEqDFJ7N9ot2R4v4N9ggT6ibYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58xo6LhGoaYzaFj8Hpk1aecUV3mdf4AuYPJuyZqSBD2QLEQ7sYJV5ZmtGj1GPnPG6Kpf16tH7DkPVoT9uv9L1bM6",
  "key1": "5HZF8JssyKPVF87AsNkUaQ7b4k8rCdU1MXBR72At1zWfgWMHaA91VRcKo1uZn3xNfGoWB5JCy3HDCG4UvxqgXb4t",
  "key2": "5n6H4yBNJUAF2GScFFhgVdcgd3NSt6YRFDKo8n9J12yjrGf4qLcJGCXYX3eLSx8Nxjq24R4x5fjjjtYCuSiCEaAQ",
  "key3": "27WUzhgohfWx7stZBGfARzqymsdzz4u1KeTTspJtpJXJrZ2Euksi4j6MzQ3G9aHMRnKiMtmoXJwDiQce69rEaW25",
  "key4": "674Bn1rVXYr7KPyyo65KCJegsFkjXXcW2KtmnbtPDJzQrygDXp1DoyK2V9j1SVKqCuJDiJXTa92FbJ1puFRJ69wc",
  "key5": "2Np2pk5XQNHfQyK933gmnKXCmFq4y18xKsvqbV665rdPEEGwzWHd46nQRdtUWB1VDMRbrNUy3VTigUfQK5b4Q4zw",
  "key6": "2JXepWFuAj12GeALLmAT8ZQo8vhZ1VQxyqcMmruUrP4LjPbncaPS4Eb5NjXdP51cnk3zEueoBkfSAmzTueUJVm2u",
  "key7": "4j4cbJXYoKUemvTGk7LGTpbwyPgUYNPo2mmVoLWq6VWHR39xm6N9riLN5sJgtqUK7RGRCN86bVT9Eo5ptSanDNzM",
  "key8": "5esvKSBzNg1vRukXdjrqHfSK5d3k1qvrKbhhGXM7F5SjnYqtZy8ptob22cc4C4pX3vzCtB75k11SH8gTCbE37E8H",
  "key9": "3N4sH9vJvgP1XxTZqYPaAD18RsApmuarBHVT1CJtteX4bqpac6wQNRWHYqg5pTbYzKfe3LV45bCufRdyhnH4iZyP",
  "key10": "4HB5Z6oJAgDA7dmRRp9QGop6htSmVBwSUhZYbFx9b99NEMHNpANhjdLDDuCXbq88FPB3DFKdFW1VR69CjX7L1vmi",
  "key11": "46eXNaNoY7XBwVfTa8gL4XFSaydmuCtVcUPHgjUKxM3bbsu1HnygcwSuJ1fENhYKAzW2r2nN5iV4RkPXWQ4t1egM",
  "key12": "2pSaCsKLUV3RoLAAiRwXRywuPeN1M7PHBYY8pHrqGHgT8fbD4Qptms7CPd4gre6inoZRo69LcKnJ1teEMWXtDEJ2",
  "key13": "4PMd3mULWDZTQT6eFEeC7C9XJHw33D5L52ASQT5V78LJTURWpf1mFxE99ujU9Vwgs2w7swzTkQLmaWe6FNNEXSs3",
  "key14": "cTZLRJjJdCTQi5hF8zFWcifcJHBSohpwSqGTwEAAmmfGFaACBoYTpCsSCCZFNFrzRBtWcDLVYSgTKN3JCU293zA",
  "key15": "2eKYYciKgyX4P551D7FnkrRWbaVKj9P2pj9uP2hijs96sGtiq3L7fLPgD9XvydgMi9AEi7d4ieS3YYkFjSmuVkb1",
  "key16": "4eoeD7MvLHVgoBDe7jSL94fuYTDuHDF9J1fcTvMJMX2h1GBz4F5sm9UmRka7ozxPNUFF7nV9izxR7cX64egH6Fso",
  "key17": "5Ztj7chrH1YAegHc3keXugnKj5XaKR1HMjD5t2biwkZJtBB7vBdeYE5avN4QaLFYY15y3CxpHGdYtqynrMxHGatR",
  "key18": "4EQTH8x6wYHjaHQgQXg8trUgrJZThp7JMN9oB3iBRNoWYJm2HJQpU8kss9sFSDxKEX4eoLPh4qnMLLNcYDPVC9B2",
  "key19": "hTNhq31LyzFGj5EGzMxKMcsiKQLkWhXX3vKRaVn3DhVdaBWJ6rbFW43nJHbNo1HuguTmL55WLCZ6w59A8m6PPsk",
  "key20": "4kH3MK6DPVfKHLMrhMRtq6QgeZ8gRVu1Ewbf8LUhuJEHURVPNWPLuTVeUKHgzdrgycSHPRJ2MRgB27X61LebpQKF",
  "key21": "2UkW1jHSU1Jp4DSV7siZAQ69kVtvxZuzMANC9AqRiuS1NUzE35ZVZ5Gn1BkFwTBir2VJ4Uj4tkPFw6qeBtTvQZEj",
  "key22": "4PrrYLafk55ffQyDUYzVgVNU7wtE6JQftJBoKgq7LYcqws9vZmsF98M5DGkpdqaA8mb3WfhkzXe6eyYuZ8mRUehw",
  "key23": "4N7MUprwduYueSeB5ZEcwq73h9d7PipvpBWKGVr7PBYFZdNWzbkR7FtC6JxaiVF6dTZnQFTMMSAabcdyzygf1VyR",
  "key24": "5zzs41ejY87CJCbXzu7tps2AsMa5TinnGwq1T1KxfE9gtvZugfrkMKBUjEJmCJf1Udo7HR9NASYHUPASFXjdyBLN",
  "key25": "fugpmth5c1T5gnEQxcNacQKgZJhRLj67TkTubEy4MTDer9xhZQXyve29rYMy56XyKmJytSuAKoyoHqcB8arzxax",
  "key26": "5W7Bb33xjF49MbWmMqvsB4obNW42RXX5wnAdsZatwAToRu2DhwS2Ccg1iod26wNTeJGzFshVRxKH7Kbt3bRyvEpF",
  "key27": "SkMH7L8enuXtsVRWq8ZqN2BUAt6rRLb3KvHL94BdNNEZ6XwXcBfbsDJecQdkJUBBzFXdHNtvFgoJDgeB742e27w"
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
