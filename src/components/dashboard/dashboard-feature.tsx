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
    "35FoAraepnZjuS8o6UTLVXgZX7BKaYUc8tJ2zrYWnvKiWWkqaVt8k3dEaUVdVHmrXiejZyETc487eJrLZGq7VETA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yYTSykhsUfaHQKkUSoWDjaYddH1yfzhZNND5gNeaseMznqwZGFFLGrBzouavPfAZGm9AHcnKhMJ6iAApqbFa8kW",
  "key1": "4s5ToTFWEdoqLRrcWcoByYGBL2Scx52AggjdXiSVnngtBDzpoPi7sPDFRjo5uiFXwQwc6K2rELjLjGfcjYC6h7Um",
  "key2": "5KTv5egjXhXZx5mMsdV4B2QtK95sTgxdotx7ffrptZocpWTkXZ5TgFPg3PneGMBwajHy5vVqNkCghFzWM26QPoSu",
  "key3": "4iLET1Gboii473jYyqxBoNca2q9oNQr8xtQSScMBw4LcgLfFmizrgbbgkyu2USkFbk7FHpN1RzWjdtkHiaLoMAmk",
  "key4": "3u2i5TZ9csQ8oSxpvq1i5wPiVAic5RpyaK9yo8CT6tR8EH4NK7mWUjk8MeAaexGbuK5dWn1WSiYGJt9DwXTC71tx",
  "key5": "DWh84XhSEuNYravQ42FQBXuftJKTjAPfMvWj84CiRqQgTDeGpZDoGLPStPNkixCsKCFQhntebDgTw3tR8GoMxZU",
  "key6": "3gxe2guCVsbUtY6pkxFBQw3aoXhhcbwWcS7Tnm9gqvfiz4aYM57Fjdc59TstkSaud7jA2sLnF85U8j4cS3okoQMC",
  "key7": "3EMG58QNLKJu3hjsKMpZqMkz13SDeGpBFa573CjcpgDSewfYdfUYhsb8V38UmfVBWWLA2TW4DtfqTdivJYaRb7V6",
  "key8": "P4iLUj881fYrstRDks9REy1zo6oCiSQkPqwRmVRVUTGMCUn1ZsXFaohCKNtfyHxJrXdNs9NbZg7VoeJtratTTwb",
  "key9": "3PoJdYdnESvgJtLi5tHyPmvxnnUfK7cqaMygwoPEE2kKyYKwwiokzeFHYJbzyuzdqT35QoYyKteexLekv7iJhmPb",
  "key10": "4M1uJBKwC9MfwD4t84oAz5UWE3W3Njwzgq5UZM7txzBk463VMdAXQXDbkKewL9mvhvutDMBumL9DpqXg4pxwieSh",
  "key11": "3AuweT3jpP6r6gdbTC6xtFQNzbQ9zKwEprDoS3d8HLWKPM5i8GcvGznPiXNG4u8mLL83Znui7NQEhPNBgDLUHibe",
  "key12": "3Tk9UHPbUQTp5cYtPmjUQfikRX1bv2epbrF25rpS21bde4VytwNAvdo8p3fi2zL8tq2AzEeGhqsoChzdRRLkigMm",
  "key13": "4KJBqCHaLtsiXeRa1vuDkcMGdNdYGmiDFf84kjrXJxJx8JsfWRsTccWXzUuSjEcxuvcE9mqFUowNdx6ceaK7zcN4",
  "key14": "2c9g4qNHv2ie4wefzarveegru8TzCEw3NYSuR11wxwtvmydfsRSEiWJ44RFLctycQ2QAnQWjaSo7j5CzW1W3btzT",
  "key15": "2YTbiSepM3CnKKLyqQgpoD2ALuTbkgz8owBPgYP3nndUQ9EjfVHBf1qfDNRNn566G1WE1GPR5ihriyLUJs7LMCph",
  "key16": "4Et7K6Y6dPVVPMim5TpNGeXScuFCS14wU5iy2VBw4Ecz2TKnjJfb4BfkZABVEKELxvTaU5MRFQjnzEVUbS59tfbx",
  "key17": "3wQ5vtqq58fXVSAWGpJdgKHs7TUwV4hetLtMMA7rA1ukesUiNWhFQA2EAr4t3yaNWDH9sZ31zqbBvcJFtJfZ7skK",
  "key18": "3KBubhVwakYPhmjuUQ88m4VaUifhFNo8UGksTC9Ejwr4CZMdKQAZFnJkyAyGCJ6EiqPX84w8FJhF1vnKvPuwm9Hr",
  "key19": "5Hnpxc4BJUwKRkPLJYv2i522kk2Mh9bBAt3ACcxDMhEZxV1Nk22W7ha3upuizSLYNHy24eucWerbzX771JTcyUiH",
  "key20": "dVQB3R3zFobW4YwKQn6s9vRkNJ6ENzxavStcWKwyZT3mmdMEFSFfyBCXrqze1oFr6WmAn1Wf23f8Vn2dnqvRytj",
  "key21": "3HWRpuUiEVBkMwYyhmU2ZmSgeFCRmBCGgzcvuUFPwFwcWsF5V2MTidDypPnjEG5g5bAia55Zm1YHLDeqEGcAs8pY",
  "key22": "2rxwguutRBGkuSyU4uuoBJXLHzPnZkgPLhwUp824Qrq7se3AkVnAjJhHTv5ST3YTWSAYbCeHxpCzKKn6jh85JkPE",
  "key23": "225chqyKCmAFCpvgXjVjgdrNjGZ8D3TGqSKoELQkgxz4ZvnffRzwk6QqsMFCPCbieVDoFbvPkRZrpMd2qwarBfVP",
  "key24": "3ZQNW3PfFVHkohyc1zFzd4SKbAB41WYG6WV5ATqbJywPi38v1dNgKCArGS3G2SVZGFCQvCk82cNQqHzdkqHkCr78",
  "key25": "4BqqbCzrzZenKFwbKBZx3LhnCqYt4EEgK5wUzhLuPtPnRFeoYMFC5vMErJYtdsZ5mM7Y9jb974qAFz63yrAMnM1B",
  "key26": "xMmLShmtvJqQJxEUYUmCtB97FcPmiwBRJtNcnCMZqRbFAkikNDSBwxEBpxTWQZHvRQWkZcgZZcs3f5TCdvyRGLV",
  "key27": "5NxC6PBxEnfc4Qb5Qdog5385K2LvH6C28KyuLkvmxEfSztuvscrB51G32M5nx1yH5sBbXEaAm9sbAwhrPDAUEYTp"
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
