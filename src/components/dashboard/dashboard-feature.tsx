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
    "2RdvsF4x8BT2CujQPPkfGCcNUPLaB5Ss4wvRprf4RPZo9qsvzy8v3GUkxyd7FJDgiHSNMpUELFZteyFFeEhq7c3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PNJUKvds8ipncsJC9UzmYhgxPWVAp97qwtZhGtCycG95Sn55neRLoNS22WyfcWWB3zQyKzMbLTeYpG7izDmtJ11",
  "key1": "5H9oJAHLbZ8aaoKiCnEfRFXKZWwau8iaJFMjrka9Hnu1GRqeRBpCewrLnBwWJ9SGHvq5uv8QRa6gYTZmh2hMdZnb",
  "key2": "64wVjT3xG337tdAuX8ULmYjMxEg39xpj6M7WstvZvPVjgrpcTqPRAVRyJkbDL97WXMdr1i2MX7zeLRBtu26zE9aE",
  "key3": "5woK8bpMATd1E1cNEnDxF4Kcs7LFJXHQS3ZdxtxXuS4Hjk2srLf7uLFUpdndadPy65LgoQ8zLJLVAmBU46eiaQQL",
  "key4": "4QknKuPPBnqMczT3jmD6MvQKLxB4gARcb8bJQGVjUdoEH48PLSG51QM2tk5eRuSBULANs87jgDFycHfJeMrAToYt",
  "key5": "243tBsaVnxsKWd1PAYUzxf2cAecJg78d71yMfLgwQaUsndHZBCrrRLPQVMENQc1ifVmwxkjeRUeqiKWYC1QgRah7",
  "key6": "5QC5YYDiyrCpRzXJeaQ4HEeomVqnL4argE3bVTCnwsLRc7M8Wu5fHGo8VXcqJ8T1n5MV4ZPDUVxGfiKjhZzmMDSz",
  "key7": "5q5Xj6mjNk8Uk7ZC9KqmUrUzv6qXTvGvkuG15jyopZhhvepyfHxgTLgaRybvufjPtXGdUGxLp2EKu2aN71zWwFzy",
  "key8": "2h4dMSahJawqPc7axWjf9Yykm4j6m1w3g7Ed7Es7PtXNoCaSixT6Gt7dhnGENXvczoETYMEd2jbfiLkHnu72R6Cp",
  "key9": "3KDr5NrU6QXymx4tWvHfTnkTVeY1aCmLTYjaKGFDj7MhJdcUDWrH69gs4soo4oeh1zDGMGdhkRJMJRAqenFpRArB",
  "key10": "3GcE9Wk2ygVz88Fg9sj9twTdd9t17hfjUmeqSJpAcBABztonJKGaqTUj5EMpzpvdqjZN5VURiPJ3HiWs3D5LdDQz",
  "key11": "3ZkirJeT9rmh5xL7btKZCDc1ZUAZkyWgut8XNNVsfrt3sX7Devs1yNa6oTN3mjtURpG2uSdcmnvhpmZdMV2oQtHo",
  "key12": "2bHuxxtGHgJgk6GQQawTjbuwskAniELZV9fw2zSqrAZ1ZhaVhtsaHrSmazD4HrrX4DBts3pxXBbSVH6YvQbXghry",
  "key13": "nGWDUUigJ12SpBkhbuJvs5GAcXs34iXSRTJuCZnJfARmZZtgnmfS6XTM5biRRH7pUZu6Ey9v7ZkuEgaEgaDqFCH",
  "key14": "65jXPp7A4hGy57EAgz2P5sUvMNU5Rfqdxa5iVMStbmH3DWhrLbQ3pzBwGRZrEZtebqE2MHXJsgwpdF19yKwHuyVJ",
  "key15": "4Fhjf15jSCePySfbrQoZZvtNpcYhs6LAvMDgzyYZPFxBjYQuSq7ZZiW4gUq4T9Q3PjKcDTvZN4K6p5EnrQ2VSwAX",
  "key16": "2MZANSscDEVVRHLYQz7szfXRk929ZHDdQEGnqqXDpgJ785BKBMJv9qSCHKAJGc2JT5wEERJUujzHep9BQCbJ8xQN",
  "key17": "ujYVNRJ81dyNExvANAr73qbEGARiGKQsFyhLnnRS6ofvfP7bkwqFS1QyGwiSptK8LHzBKWWeNWT8ywKARKKaRRe",
  "key18": "25ZwraZGPGhkXbDpwSxQr3rqNKtrE7RM4dzUoVezKt9H19M3mfoAJVXVmzMhuNnNhAFWJ3HLeLh8CSfycqfaSn7m",
  "key19": "4Nbw71aKw4kfc4aweY8rAuEWzg5YkoW5mocoLm62R7ELQZ8bVudyqtvrFE6AVLvs9sWvyReSASj2C5u8Gm6x3Xxj",
  "key20": "2BSsRchrhWUmvhpDoFf5Lv7qYdEpNa2nCr1SLSsA9NV4yRKpYdnbct9NackFke4Aoe6STU59xm5HHQFBbnNpp7QC",
  "key21": "N3DiRTsq2SEtj4MhpecQKHtgXhLhPAsDQFgQTwFjmxCF8FK2YScihJTdzG1e7P8CQqyCL5CkVVGiz7coBoFqrjp",
  "key22": "KUJ2g2bwMU9rhvj9hfFbGdGj647HBhmn2VbtY6X5nMHccideEuVEDtUuJ3qyGddwb4akrPkfNA755F72PnHhJ7T",
  "key23": "4SkL2FkzJypU57dbGdLPtWAuKLMFRS1Lt8FGoMuZEAhzBGKu4VGHQ93jYTSYL4TeuCyhvvoL6QoQyBZNMVgKzcvd",
  "key24": "qBqBzMCrUYsRxjj1mzRxufJBVvgsdewc84CTnmqCeHFnpBNxieENGKyyW9S2tEjzqt2iwFY9x6d4uQzyTrWtGms"
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
