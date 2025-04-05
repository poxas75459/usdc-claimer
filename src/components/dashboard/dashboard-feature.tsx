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
    "4srfjZDeZST86HDYVYXsaUM28EEoAXKb9wQoXX9UjtXZsf6hPTy1YK3pAYfHqXepdz8JtoMHGpEEhyu6Sieq3dea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rd7wJyJoC6MuPQwUXzShDQrLXs6K2zsrPT9tvWKxWQjrodUcoZQ6DY97eQkC2QApDEeo2i5Kv2bojdKF1HMv9Ew",
  "key1": "3HqyFnPYA8mXRguSRCsC9Uxw7R4oLhPp3PeNC8pQbxokT62hXC5VRcxraPqUaiGvgBpPhfadqH5PXNj8Ut66egw5",
  "key2": "HKYzEFeoTYZaANFkXyRULpqXS7FuqX9521GbVFFjER6EUhJDv3PAmhxqru53ha1jxd4RFAicNgHP4ftETh8vSAU",
  "key3": "3YRbAsURjunnRT7j3QX9sSpmhv6MB6Yiw5nfbLFuXPmRHem13q2K1EDgfzaWNpVUPwWWHLvt63EVsJDYgB6LBeYb",
  "key4": "24U2bKeyrDco1sBxkEzGcnKWsopkxWFvAMkETqSZhTqk1oVCDDt8zodLUyrAPTn8dYtQamTnk5npYFm4rJWLfixp",
  "key5": "4LRuUFzebtck1iGuKGyitR5xi1Mk6DQUVMLmTF7j4SUMHEMabsnSAJRf4bXzKE37J9hUHaKFddzuCAp8uVYaBiqP",
  "key6": "3CHruwyW2TwkEn1kCheUwrivm7J7xn39JFqHcbCeWAoihoxwkpnhZaiv8UK4sL4TQGgwzSnXWoZjNpDzecYA8Ni2",
  "key7": "4CbuCWS55vevybgoHbTVd3FGGZRvrtGt3be7be3ENc8vvTzyvpXehwrhMLm9PGXfeswR1fEP4U3uvYKQEwcUwDt4",
  "key8": "4VsNk4ek8bZqx2jdWmav8TVVmQsD3rcrrpvKwrmwraf8kJuDdwGJ3D1QpvDZiPGf93wmrvbuUZf85RdRPSCrN2Qu",
  "key9": "29w1SsvyowMQm4CFdSAvtrPUv6bnx9Q4Sc174F1EzteouMKTnp1DTSWa5Z3B9GPqRjY5ocFTGcp4rmaTmbSXvRpm",
  "key10": "jD8uutWfX7MN7Stuqm3nzPdc8zcZspZXcLkmvB1fP1w1kByG4aKbpqdkE91XRnkQyRyZA8KFCWNJHJs5fwiEdat",
  "key11": "2SW5jxXuGx57n38eVERXAdKMJzK9EawTPjG4ensVRdt58TZprMrtPpRMnQgh3KLv2PuoBPNcCQJqNgEkUfjnBLnA",
  "key12": "5acgn3LBEijPX78dJMJ55chvidZ5oz4h1X8ePt8VoLXQSRNwqZXXH3jbBeuBYyP5KgNuxQeGdx8cJmPocASExDC",
  "key13": "4FFVqYa7yKSJSphiswcFBFVt4gAGD9DDAc6xaFgvYZW437XNwvGFsQdFM5kVf4SFHVquaB33sn3cvdfvW7miskPJ",
  "key14": "3dB3R7rembnk25C6RimqoFVERShXyTfyMiUups7RkSBS2JYwRY8BAHc7KXbQjeRFo18HcmxnshZPq1PtgMtZd465",
  "key15": "4o4yLG6NtCDTVXyDXxHUB18FFahwMm4oH2U3TrSQZXFVWZpFernU5oxbf6WBvKDKQK6uwzr2GgGdfCeYWJDop3KV",
  "key16": "4qKzKEyV7vQhQJB6bzjYDxc7xWF8zeQtfh1XC4GpRZBGK8Sgnqsu7kLGqWsVa8gJfevLMYvVBW2Gr2UGfqY29jqD",
  "key17": "RNoVJmJPw5KpxMvJ1bRXnL6a5kjz8hqA8z8x99nBtKdAgzwqxVy6ivwaEPws522GKQ2uw5PqwQRRmJCNo8zPWhP",
  "key18": "38HXvqpLdtp2oGZkdYKqevYjozy81a8ELsYPkYYj9iyA2yejRZp214nKV5XXfioUBmuZkg6nMExCxzkwGa2wrfWC",
  "key19": "247JFxzscJuZbX87spb3bzABRJ176zv6qUn6cgv2q931t5saWmWqny9ueo6f6VTvx77XEckX1YjgBHMFKV7aC744",
  "key20": "3DzgESzPQp8L9tat53zen7iryJbAVNzYaACY2oqkQiS1r1T3BudjrgnBCKoPDcjrhzihoaB9yHFYZnNhHtpu2eZE",
  "key21": "GEsX5sNvhPC6jxjQyEMRYMnxrJXCu79m8gmoy2qrTm4GxqYKCxU53kbZ2Jt8AiXwWKpbs8bfNtZ1qm5Eh9zRV9H",
  "key22": "52fbdXyXjU3GKoyLuR25XpCXrWibk2EVRrWx5dRN29VsXMh5W9dV7P7gmLnvoCJiKA6fDbtvMtKxeB9q8nER3Yis",
  "key23": "3aSCGTXSBVCHyemwn6QnbSM9B4k71p8FTSpe8YD3enAJziQCZLMCsFNeFUkFgUcB8H9WPcmhAhxrxk1CsyaG9z6z",
  "key24": "CmznwGLVM6rBnaBFUcidhtiXS2YGv8RfAjooyUdhq9empW2J2mfvBxc6esWhA7HQReffGanAxHUQvhg1nQhKMaz",
  "key25": "r7xSrajefXHyBHT6rDuKhQWo59iQgTg8H3e7EjHsi2i8UkdUMVHMNnYxp54tMZzQBiMrK74tmB5me9PoapJBPuh",
  "key26": "2ie8hmvJhTxDPVqHNdBckqZscm8dmaCd9iL9szJeg89tuHUorjjKs1YgtbhKhL2XX6iZBF3RG89nyEcPjofVCJyn",
  "key27": "TcaoWkY3DDv7VF71pNV85mkenifPrDMqbNVgMMqoou4GyAudWMirBogmW9wppyz8q5DBF8cineXsRc6QyCepoMV",
  "key28": "2HAPn1e59FwMicu4wjqrkaLo9JATuU6qx2UAMeK5uKVZAHom9JviBDzJYduEapPV2yctu9Bi9cM1Yhrjtu24iKaQ",
  "key29": "41FK6wwurmqYTN8oRJKLgNMJVYHgtcDQELVTpCHuQAFERjAXHBkpL176grByxsoFYfBjgGgiDRGKYSy99Pg1KHi5",
  "key30": "wwaPTGngB1j7UyFYN1rPoDvtJJ5PACazyt2HhWzVyzm7499rJt7Jxd4N4pVCXeDieeQoXtsqemtkynpXsV2zdJh",
  "key31": "FHckvt9fZRAHj2ZQXxfErKr1ziLDKT2SDgMF3KJ71Mtyj71VfQDJGfdgkex4f6a4EsfxvrtNykuvLkurneT4tE5"
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
