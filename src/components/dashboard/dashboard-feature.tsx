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
    "4dsjSTtfd8by2DAP7nfBZRMKz4Aes8jftHTzg9BbJ63bWxGqmJPRSdvf7jCSTTyenNqqvprrVkvNqn5E48wupyPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PpzQMDEBY9ifn7HTVS9119enP3yqJ5kkZcVwMpkq8cuEtFAp17UrxetPfubT8QVJm8UFe3xZd7EJvjc35uKiE5U",
  "key1": "4VXTWckxxKGj7c5SXQjnmpSGaKT9Hspvd3v33xPSFZEwv2sEWhdybGqAQjG8AuZRen2QAt8rZKLugRfCb6DLhcdo",
  "key2": "2NdjohgR3mbEPZ2PKKicg66inFkfjmbjiAwcXj7N8PB6ZUYeLbMBNjkrtcLvHoCdZ8mYprG1DKqoqEwAeHRorm2L",
  "key3": "3hTBTS5SNhMDu5Ar2U3UKGPVFUL5xsg58Et1NCzzWUZo7Beox2FJ2GrhM1o8Kyaoh4Fz1GKNzQKsEnsiNigCj73Y",
  "key4": "3yZpQirAa4J6ARot12Q7zj5sFyQPvyCiPgpwCsJ1fncXrhKwBbXKtFxtXFfbBqbAtXRqs8MATKBr2s1fnU1GykCV",
  "key5": "42Qab9PisjVGBCVhgGXA5K1BMGqB8U6M2BUTDkt8NEKYTYrfdBvoJrcM6P9kGg2GoBeR1jkkbXPwWaCiu6G7izDX",
  "key6": "41GNJmfzBxjmFvJ9BbhMC5sDDWv6zhUa33HKbSvuJJLQEALei2TCLWfXjRrWK8uzweU86nM7Aev8fuNSeA95Kyqg",
  "key7": "eVZadMb5bACsVqWNYJS87c2m9SZePg5ePtUgXmatSBPzAb7sdtjXNkPqwu9Y7FtZoYHtdvUz3XWhBiQSidMAs9U",
  "key8": "qkpeRKra9WQwp3S21JV47RyxAEbyEssXMpScqRqUrpSeqz2B7paKLkQ8xT25VD24aYWuk4SmvACeU1gjRvNNAH5",
  "key9": "3fYMP2M6E8Gzb4i8ZA5cVmb5e19xaLyKtaoQmc1tt13cz23WY1AcVkXSj4RptyaWytBugXyexa68tqUJ5DCjvkbz",
  "key10": "TUdLnpG3KHgGjt4pRerD7yaoRrvWi4Jb154ZdaRmF9DiRQF38uwNVnDT2Az2uqeVZEnmPF79XjaS5p7qjabbqNc",
  "key11": "3aVN1YF54KYqDWsTMb44MbBafnSbUPKz2aiJAxudk2BQfrurEKBVyC5v3SA1QCzopehhEcepUNebpzphxXgMTNgp",
  "key12": "63o6Ptmy2nihcLVp7n2cFGrg3XW5vTejwVAFa7jCA7CMpAA3sjtLgHS5THkyVuvacdgYs3NBo67NoWQB9nbp5sD3",
  "key13": "DTNgw6jyEQ2k5m2xE54U9Rs1Vxb9y4xRTQfwUSQQG6NieuF1VfUTsTqdgkK1uZ8RnNnHLpSqQuF5df7S8ufAuG2",
  "key14": "DoyFgb72Ed6dTpDiUStsrBNZKU9P8VkPQ3TwDsVSWCu3KynropBvbUHXm7nazLTWEtDWEGEyCN6mqiGp2Ps5cMK",
  "key15": "2B34By3vndV5X5WjSkN97WJWiSeKg52mzv3chdqqEUxiaQg6yTSu5rasAPLSPvDx18hgEahSRo7WtHRz3bFGcgVD",
  "key16": "bHfL3U4PQtorPYN4d4h1ffL3LWHSasAVzqwKCZqG36jX1nT2d4nifJHiLUWaZTkfCrcfRPJGzc6jYbho2x2bKhJ",
  "key17": "4Bnzpq37zpqeVHj3bebYu7JSXuT3fy6hMZFEhLj2TAJpWRJNXx7uEeSYHCXkEkjzNJuFkXKHkcDEW9UdHha8n5j9",
  "key18": "43YcrBZjeh7WwNdQs5xMUw4cqaMnjANSSX33CDKFhirbVAaD9qrqpDmz1cQtR3nNMSMaA6g4EuJq3MzfEUmd9m1T",
  "key19": "53BB1pAkszWr8LA1Zu7knqGzLuZDiuesbPR6dNT4V4ckBxbPAAM9sDGZzHbebPhEXH3TkqQn9wBtsBsVGa5YVot6",
  "key20": "8eKZdaaBXtfqGAu2TtKSFCauyvieS6AHCnqKMoAot41CK4EFyd4wj4UmCTGQPPWSKxoCShefU8wSZyp98S5MiVk",
  "key21": "5WbSfMn9mMeXbcQY1ZbpkdTBUppbxAhX8viXJa3ptmwZsayYHSvZDqQPwU7dGfbTefhXvS33kskUMdViH5uiHo1S",
  "key22": "48dLk2NPBaVcAwftnUC3uUkeisu3Twa4UNjAMu5yFfpyGycCkoHHZ96JzbnTDrJG29c98xVv6fv99A9rQFGoMjWM",
  "key23": "m4VJEa1f2SH4SoVNo2SXGGS51HhWJ57LkmccMjXx4hNiqsvvLLJS73FW8sdAnh1GuiSSyxWnwJpyTNsoK3mJkdX",
  "key24": "5QrSh13Jiz5GNTxeiufw48Anbs1ErxvewkBjw45RNfS3RZvAaBPawFqJMBhPBvCuACendXPp7mTNPn5jorNaD3SC",
  "key25": "4WdEmMNkNUczF5cwBTKrGNAYKAcxGUUc178gg2J7SFaU9Xew6BTwePqiugYi1wmmWYb2BfAEDQ75PYti3cKmyQhq"
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
