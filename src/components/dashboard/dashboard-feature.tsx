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
    "4AZmgEWEen8gFjSoqRd6V9YzCgMAFetkEPWwwLQdhiSeBwjCBxS37ryDpoRbbARNVvfXJbaKMrvx6kaYjQUdqQZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bW2RFJDsg1Mae2p3vrJ9soseMNqgLinhoUgBTYEgeEZmaUUw5dHizvzSXJh9DgSquGPPJGFL6E2pXYQz9zapm8E",
  "key1": "4zsoNhwrsmtcaKvGtDmefURKaG9jLnUhnfnjxMwj1ug3E1ckiqrRyUfZctKBJSKN92ULEEH4vcHyNPGpfnuMYhSH",
  "key2": "2JTaPs2Qx4CwdMUXhygFbbKmMBi3fKHFat6nXBtKC3DgshcGYBHJkMrLwhQy4e9DGgoQxkMJHRCJwdWcEzeMhxGA",
  "key3": "G5Bby3k2aZ3Zm9qiuTZ4x6aaNQW2rVvm1dWdtHYw9r1XGMYjeeXqZovQ2vcsfaZygLNTwSK2Qu1M3wCeiCJXEmP",
  "key4": "53SefPN2gpEdR3KzcCV9Ranmvx6Dw4fKaH371ptMFGBdt9wnJ9JVXz2rW2VWwwfEjBz4DoMoHPmq3ryMcyirFdiV",
  "key5": "YQo3zD1YSQjEnzzLpX2jJucamgZxGf8Kc5n7gNoWHjsCzqnVH7PM3JoMhUB1aHLxGu6xaT8nSUf4uYCfH1tdVVF",
  "key6": "4J7CmqMinPpxy3BnhaSMThCZGxqF7TRformPDZKoWr41L2R71FgeVdS5xWyaYUiSjMxG1c6cKMi2pTx5xHdXm89y",
  "key7": "3UanqRr1tfJd757jGSGvi4dG6WSUQH9E7xu3kB5NGkRefSRCfAp4bwB64MF8QgCmY9PVh2daKPKr4kKmczAgKiSW",
  "key8": "1Y3Kkk4w9VuLHHJzBht5VbuPW7fCjA9pzpB7awKWQdtL1iRNPfKxiKGrmpEADZZGrLUMmshXzNy4zSfez5ViJhb",
  "key9": "3gJMX9BdLrGxPfdLU4WT2xkQp9pbfhqMbsHVUv2tT4mWK7pDwavVdPJmp53ag9GmPGXFQRRtKtwjUt4QtaiK56c5",
  "key10": "51XY1qW2QwZ6ViK7zDyTokgRDe342opL8GFjQtyoPiLw7JtP3tdYp3g9PZaXCvPpziMkFxKqBuTzDCmsC7WaUM3w",
  "key11": "5dUiaMFTab7KfagNCZECCk1xCNyB1A35adsn5Vht9HyA5pg3e3kg9GD2H5evHi1uimtptWAdeRC5YNg69Xk7M1ux",
  "key12": "5YHYxUv4pzMZ6LSBhPcWWM9r74nsTc2c1vErQFEmFYYyaYSa4UVZjpiMCgnZoXCH7gDhBAuLrg9VQubrMVD51jc2",
  "key13": "q2j2HJUCmw7MvNCrG5kU3Yfj6QAbKZM1b57KEPKGAEMd1iWwzwT9559UHskyW9tiqawPCnmV1WA2c1mSwWSiKsT",
  "key14": "3tmFHidAza8r6gtqDHskv5zxRcRsQ6LMqbs1tUH4ZKC5raizEcxQC3xVAnXmFP2vSRrd5NG6Ao8BWb7J4fVLYCAd",
  "key15": "hxDD776h3wGGTSJezVRyzuyfB5H6wEPQXmXZaQ8r8J7oUSEmr9JCNDqJmsophSrHuadQBn1VMmxP6TPwkxAkx6p",
  "key16": "3hDybKvLh2QQv3P6kRD4Rzb9sEZCwAvmDMsThqUQbNiovZQvyW2R6tDjDMfQpY2v9Rjp6dYNtozL5Gtk1ak7rrGc",
  "key17": "ApQvmFUYxce6ADN2QGMMywDch7gnkoTuYX6ZhjU3rD6hBHJ21Vi31qGWce77eu6pRQcKw81Nofyo4Xdpx7ZTsGe",
  "key18": "5khWX2Nnc59zs9eJ14A8dVMKLZ6zQBNoaDQLcvLwbtF3x1tBFNUMbPjcfwnrkL6dFVi9VkAFadRXxiK4a3jyfGXC",
  "key19": "5FY2MZwkGkctfuarVxvJQC1c2Xh9cSqg11zXXtVQTvWoJYrjMfcV5Gtum9x8tSGqzG6ojL17nAu3d8zXqtUGxQFY",
  "key20": "3vqFUEUabgqTsCJHejciQ3Ro59W6P5QeV969SVfYkNn1wn1QfnmbnQ7162aVx2HtJowRd6fJVRq5FjpjJv3guqps",
  "key21": "5EieJARHU8UPjWrBPWiKaBeR2JgbykYZ1YJSUE3PxcdCk5nTirXWCeh8RVN41YWaLXke52d1NkJQa66ENgaQ3sr4",
  "key22": "jfmzzBhiRMySAjaWdVf8wRntqCw8a3ywkCgEjBCeUYXzg8b483HNJEz6YB7oLtoUkVEkSxBvov6H5WNj8k1kj8D",
  "key23": "3rmcxq12fcnqEE6krUbR1ffUVkt8GmqvbyNzYEr4eQy1TvAUjxaPr4C2vHCWty9tsSD1euMahfKkiD5Miin1kUpC",
  "key24": "24UV9Hff3MhziYE1r3NLVQJgrW6UVBX8Xj75Pb5FJQzafUrekbeZcXFLfqtrJjhKaoE8ytwL1Q4L8XYy7ArvCee3",
  "key25": "LTsHDa7qtQ7kvbPAf7259isYpzbMQrBLzz4EexPv4YmKinff3WSLjrJy9N3MSBYMrgFerGc71pNPCWpGfPLAzcv",
  "key26": "5PcbWYaFhYzaFkQMm2SvUeJZUCMc2y8CP9UcbaXbZ12w9emxkVbcfNTkVTd89DKrM9PGWUqHc7zPSFdniYSrLoWm"
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
