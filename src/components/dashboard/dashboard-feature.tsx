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
    "2du76NJAQVHFqQcaBiNUQ8qzo8tx7cxdcxSBw4TfLeYfaaFgguCqYfYkfdgnVkmEh3EXdfFZmfvj3DHheAVVGykY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uyWM7Hr8JhXhMufvqFa2j7SY6GNfX6hRosWmbtvN64knnb9S2WL4TpLpStdbaMSBZ6H18uwz2KSzNDKJu84awW2",
  "key1": "4fReEmF61WndW3eMjtRBXtPATgG5c4QTvD8sAfSFFwP2ke62AS5bmnNztBmcNtfLVmCYpbk5oQ7UsMzRqn648b1E",
  "key2": "36yP6BxP7mjqMb1mQE6G1jqzUqEm9ckrRjpdpyyUF5gmLedEzb2WKsuxpsJWNfR6J59ENRNKM6H6xbxJ4DuiZV8D",
  "key3": "4hkgDxLFKCBjTPEjfozLGcWruQkn2Tesp6mKp8qjSgLYBU6Q7phdZnhDbAHPTWmLQ18zMFFzndetURrGieEiLm1V",
  "key4": "2urDcfu5WgXks5f6S5fm9byYag1ZdcdfYt9domxf5PYFeFbWc5yb8ZqwRsPZe7g8sUKeqD8DaRdpgNRiXojj4Aob",
  "key5": "3B4fPkh5BEmF2njqnG2AGXXpKP9NRwfUsQhuaVHNKMK29injr9z6EPaAwtBgaGvssmgepKqkKpf8sFDXeiPxozjk",
  "key6": "2ThzSjuBK84wydqtRPzDQb98EbBA2qD1NgoUQmF8iCURw9TUBzZw76wuzBknVUndXDzietMLY5EcVywTCPryPmSF",
  "key7": "4zRY8mZq995Gzu39ZPVasrFwUeCoJDHUL2VxmYzNPDMRb9Hi9SB7ZuZB28WyVsLWeuwvYGJGTpW4WfSby79PMP1U",
  "key8": "3Px5tjKUGCAGVsyXnNywZrikJT3QcFb9D7eRLKsLEVaZX5qN7fbe49Rgu6dyeCNjy7wy2f6UrEXwxF1PgmRkC7vt",
  "key9": "4USikcCYBNHvqsAwZ3CG9vkpQV6bFQ6YBuSULP4erWVwzg5zP78DpTWSgT2DJcyRWZcJq5Ew3XaQXBBGaFYLpV21",
  "key10": "4aQ8zp5qMrHsB1fUENcVzVpFwYBQBVcnTpD4aa16mFat6WVakhR1rz1GjcXPMKXaA1onJCnpksEzyak76nQRvsAv",
  "key11": "4Y8XnGrNXzy17H9epUxA6oKyKVqeAv3v7ZRYhpqVkX67tFCPnKbNdriAWt3N1qvQ2XEenJ8huUj2BcnTbBBDrWfo",
  "key12": "2LZFe9kVT9DCYFB7Zpp2bWCuFfLEA7MTj25dP37S9h6ijQoxf9vcx7U4FQgafy44BHvcVknjBFV6nbeXC8UepeZ2",
  "key13": "52Uosc3SGSWmfyygjpTo35wL5fZNp8G7W5hbRjkk5mbAV3oYxcCZrWAi7tL7TEtxLhfgVxr3PPHbcA8unyQEeWtr",
  "key14": "4pi7e8BSbxk12K9ktRsZHzFqu5TgFnnQ2TRUWJfLbH1QoeLrMtu9EWR2UxMKpGDgyVa2B6iVK3Ur3hChD5X4akqZ",
  "key15": "ZJzVRDXQB9TzREHQL5LUv8A9cMGuGV8iYqdwdtW6kZrWfczG8bZJJ2NnkCBQCt7iszJmKv2uHzvdFTf7G1moZSm",
  "key16": "2bnJ4bx4JHDnattBauStv5rFYEpLnBL74uNQwsi27TPfHwnr1SbESL7pApjU6zZ4X1kxbkCwC4JLit8i4i4g6HFD",
  "key17": "YpkkAdCZVjyveEjE95JKuAe9Zfzb1m57XGdTWswhG2w74XKM43VjZGwsx6CHEJHjSmDvbNVQpnxMao87XfVb5wx",
  "key18": "QQsGvEFBLL8shymH4qjS3uAVYA4pE8VnC42YAeLNVKakBwa5N21HBAANbtxU8bj3BGKM8a6QRWfCNC1n3dSCrcJ",
  "key19": "3z9kE3MYdVMcnhGMz7DAsa8hN53bqwGS2JLKdQDRdkpj4pv7JKrMT8pzE8SAvnQAoG6p2wuYpZB199BKw7ZcNojV",
  "key20": "5mMQD5R2Yo3mbtrowFnLDcfUgsdwsQqkyVT2Un4kmNi1iSVgk2byUixtQqxsYP81nzn1AGHMc8S4vNGt9dTqJ76B",
  "key21": "U4eVxPAV7TDmvKh2dXoHLWMSw6VumcEQbBpTU9Jm2CGrufUR5DPoz4u5TtiG6bLSfSRXqAk824v3XZyNdGAn6Je",
  "key22": "5uUDwYYLicJoN44FNWqrYF4iuhq1ecYEwrLdTGDWwkdugGjoRPCXfG8bEgLe9UjUTe2z2kBT8L7vNKWroN66jNEE",
  "key23": "5fcPFvsvVfVU9nGhKSAFoSP4SQdmkrNHmveWkacaeeXY8WJu8WJYKEwwxhL1Fg7oknpgWAAHRh8MeYkd3UEUg6sF",
  "key24": "gq6wJtP7wJVAvSmmtd2ZCaVfWzVpJgacmEggFKUwpz1uoyg3LJnyCaaCwTMdhtgqCRpPhfmYPGF3W661zk7MSJX",
  "key25": "43uHt7DG9vesKU4szY19MLyR6BiJc1ejqyp6yf5J21Vi5eeNNz29mxY2GJBFQyzsDgGMoGKU2YMWzYBn6u9vNbut",
  "key26": "5AiVzpYDCTcA2KYgXHPgEhfsqeebY3w7xYsbbMBWiadzFKbjji73G2qjTPKQyQqTSDe8twRU4JMRu1kVffCk8ZmT",
  "key27": "2Y7isX36MPJCFoqUyvfJmkeQiSieatPYXLDD6YLQUsQ4DADYAynViqZQQM7naXbronA5kruqUAgjZqhNpr3GPuGA"
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
