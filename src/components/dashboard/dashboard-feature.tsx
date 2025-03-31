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
    "55Nb552ix8xJAooLXAufcU4QJovnAoqVLZ9ftp5frPGvwZFXGqE4NX5eDyhgcXsquCPk9S6RgPL2r9reD8Pup4Np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z5pR1dQXsAvD3yg85fS2PgLD78WxDTk8SQEBLty4aUDCGWz2S8bZL84hyF4VEoucUU7ujaapWHYn7LpgVBuJi2X",
  "key1": "qKxYvQHheWmL53mfRtGp34QLJ78NPHggCkWS1j1QLeQKD6eiYFnAaaZhG4ismj7CKctZv5QGLdBqBaNwhQ9sGMf",
  "key2": "4YsD6ZZSbwwzGP3pESs28m1KNvwtaC42ynhdbYFR3Dyr126sbhouaVEEBnJJyJA7j7shesoXT6j9gyunoLg5Xcuu",
  "key3": "3J2umxdHDWjdGA2qbGPHHseSTZo5vfZzfoxAixitLY1QgX56QCgAXks4D7GD5AuBN3GFcxF7WA9sMs1YTTkPZ6c",
  "key4": "5ZyubPFkGUToLoraguzqgTJB9LE27ZoBkMatqFB2hwbxb2qGBAACnSXsqbjWjBHvbdgtvUSg7smapicDKan9drxj",
  "key5": "2LX9rn6o6WR2UnbQYiBXjLuM5MVdTPntc48xmUXF5LWLFVGo8ACs9v3ofU6xpEtY8mAhadWj6Px7Q9sH5TQaTioP",
  "key6": "2D9wuDjoH5xxevmT2HQ8jrqrr22ofrUgzJCcdp3biNwcjCkvChgKJNmt6Zef1NQQLJYpGG6G77uvGfCk3sfnYBCc",
  "key7": "3N95Bi1x1hoVrerZuNo1XDUtcmseJsxUhjzfxrMHd3xGSUFpb8sM4ZnYTZLWjfuwr39sP6Ch5VwdxZkmcDyy93dt",
  "key8": "5asN8fs9tTAqp37PG5T6MJZPbQLNHEeEAUY6fAcb3rvyUE2NhMsWBp8SENT9gQ9RR6v4mDVRC5VZhvKmne5XhMq5",
  "key9": "4iyMMdzyW1b6QhzccXKPh4noqgPmuoqMbmYAAs4CvDjp75m2hSiwZrbRdmXzduuTARPUt8PcyGdHwq8vgKcgrJgH",
  "key10": "74t6Z8JdLjj1JMSqP7AFyz3KGx8GFj3kMCGkFwwWnat9a2LimGSKtD8zdQZEyZ4fLYmxGAACFwYHS5egKVk8F3m",
  "key11": "2YXRf7nLEceUN9Fx5BgGvk9EgnDAM4EBKbm5AFL7xGeWKGy2xDTd6oascaPf8W32iT5ssYt637PRz8SDjnPfqv9B",
  "key12": "3W3R7y9Bb8kF8TJ5zjhkjo4E6a7DV7kbCw4bzC97L4yRYMSrWryg9hZnnSWGS8kbkZE57LdadrRnvNDDrYQPh6FQ",
  "key13": "3PWwP7zREUj5rSfGXaSe6XKbjYHCQgC59Hrv2E6R6EXAsUXjLhVdBNwjAKhufMA2GvPudhDH2gBWGx98x2pZAooV",
  "key14": "2wRDsWB93BHd5cEEMgoyyWz9ctuccKAzr7asck8Ns3L49fULAQEvKcvCAXxTU1Ygom7BLyesAZbxozcuqcT3nf46",
  "key15": "3FNCkoheD8SbKefzdzgPuG3k2mCfe512qgSNx8qtpgKuU4ZkRQTby2f5SyCyERCHfoJEXZPk9uDZ5oGJGdCq8pwm",
  "key16": "5F2ocVEMa7VEctsWeHcCmGUpAUqDFtnbca7DbMWRthFwjCJgDDVvEnfz1Mwpzs6mWk9ASTZtsdKWS6XPzeTjp4MA",
  "key17": "3LgbqaT4jaDMDSUg6JiHsxiaq5HBQTUswvgD7XvYRG6vZv8sWkeMcgwsXfBo7xhuBBa2NRTqTJCnDyvcLBdSpzHD",
  "key18": "Vye58FNtobKUTZ5MVR6sxigH9bWQnUb8KQFEX31ovpSYGTzxXsJ8T8dHqNHDK1USBX4pFDgmPSQ9UkC1ZQVDFr3",
  "key19": "3e3EBXCWnN2EENNkdki4Uf2ZXqdgaUagJs7E4W7zaLNZSsHhcrmUZug4ENDHsb28kfXm5cNJRTvj8CnBRo3RzDd7",
  "key20": "38KfK5HiM51ntnJHRCVyuirVWGAADa4WTKRQ1nmBxdhsNvVYgEm4Zh6JXGFMpVUE14sy9NgVhfSyT6EonRGLQjXL",
  "key21": "2fxPFW3rk4vpwiW3YtRn3kShx94XiBsETMLUb4UmZM534q6ooMB2TVRT256VZ3338WSTwqfBHynBb2qMcP24Whxy",
  "key22": "36uPRvFhjme3MHLeChHZxdKSgjDaB4EKZ6hQqtoaHJLRfchUikMrmkkTBRFTaLpyEEaV94xEs6dafGawtB3uQn9A",
  "key23": "4tboYdo56whUBDXCsMNBfQQKfZHad12iyXdN6CoG69jiYbqmfLdSNZtPmGLnzuXfLnJ93BHLFn4pMpqyLhMma77f",
  "key24": "39vrK9UZut5Nh5ZEPWVge3Gjm29AV8Jnm1awnbQpaxf9rCJdgmMCTVXEG2r299hkfUcnVTN9qkKiGX16PaM788aP"
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
