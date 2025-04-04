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
    "nWfwFRxVBbxkPip6FxWwxwcAa2Uv2H2MJtPxAuXkSEJ6d3B3nfYLUt9gDToaRRgKEJbnDzyJitPhvQ2RbfH31u9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s3AmuqeQWzxGNhaAU5Z15PDAGtxUqtXBCfgcuS4K8uWdLd1YWX27wgHnUxrec7g4ECdqvgAz4XMMjzbEampMinn",
  "key1": "4TKikZf3QggimsXsPxGzdGdfPoAquxrKi2X98rY5u5k4XPQ2fvRf5cBQeYBn7PoArLWSMy93jFpL7QPTvjsdLxTw",
  "key2": "4nfR324n3D5WpCuadoiKyg33rXQkk4cQXd8f4r3WwKpSfom5Bd8nfzkrmUoQcpM57jZ7EDvzkPdhMzVokiXfHRou",
  "key3": "2kNMKazMF6cXCD33uQvpViob7u4jB5sf2VruDuxmq5cgT7SJVoEFHnpFcNAP5U1CiAQUbKYaixEH6S25J35cBMxM",
  "key4": "2nqgWKdWJeqkaDQHWLeNApz4WsF25Anho4cFaXrXFkRBwSFEEjXhSbsN5iF6FCJA79WNEGh38peMu27pz5fS7B7v",
  "key5": "5xrzUoz7x4Pnk4PDSirPJn3aM7kg2Escq6SN3sxrh9JgRKLGRzLiN4Lh8iM2Nq2iafmZwM78yPMUZCvutfDnLiUM",
  "key6": "2vP2ESCigwZmBTEgBW5DJBaYoopsd3CGMQFNocHm5z342rbwDYBZUYLRfP3CrXh4mUkHekAYXk5Cnw8LAEAz3mdx",
  "key7": "3pUazxS1nwaHrwJcTwPiSvoaoWutbwYXz7gXbm7Qc4LfYaPMTFgvVuZwXC5Bg1HALxmNugZWmnZfLaXfh67cqnN5",
  "key8": "3auTNpWp41hJGLpnZrpHuS5Eg42HHci8mXMYbtmDjg9kZXvCac3xodVH9nM26LdspoyemKBn1h6yjkw1JqHeRPu8",
  "key9": "2z9fkdXydNWQMtFXb8eJkxdJz8Key6jgBskTc5EZBspVC9ohAjX6JXs4C1iSgmFsZJczWQTHPxrzqSNRddATYiph",
  "key10": "3C5fKTh1khLCNWwaJZeZou43WDUe7iwdz4UumQJUHx9iNmn9VTywfBQQKNvoppiyr2jJDANEBS1DAf3XBqbnchAB",
  "key11": "56AT9jCdQXZK3sDsC2fTdNerK1RtiS5hg5eVrR3ZCKwSrhBPVSovbAoVzPEo4okHXs8TpHQmV83YcGnqUjXF3JwA",
  "key12": "3wodZUohnSza6eiRFCSGMgMJLwSrZae7Zr7E9xGfUqUQZF3shm22WUrdginKovzdTGCrUVuoKSoebAfihEzEGtFo",
  "key13": "2iy74eiod6hR1K8bytgLwVTaoGbSR8GVRN5cqPmu4n7Xhyf2ZZceS3bPhe9xyQvuqoRSAU3EkdkFwB83nmhQqqHB",
  "key14": "3ZFUHej3pmAfna8j8HcP5nLiFzpf8V9izXpP1CbAk3HubjDvHmQQK7o9y1vut6tFL25aK44Hjqq5e1EcKzpsMTHH",
  "key15": "3FntsTYiYbU9vTAZm85QQb8ZDoot2y3QvQK4jFHrGeZuPJRoWddJxeKSCeDr3Xn8GN6oVWuw8YSVAY9iDzHa6Bv1",
  "key16": "5XbE6ZkAeRXFrXh8tSvQccnksTpkN59Tv3PSBotRAeivkEn8yvTvVb3o8sSCaVSGRfNKpE9hGX8KBGJ1C8N1jhqZ",
  "key17": "5eDo6sBMHmBYhebcbtK1yiLZftKjH4Zk3QVCQMKgDVhKRSpZY4pKmtjAsisXSP2p9vFkX8uQKUAq4G2kbasRd9Rn",
  "key18": "5Lh3CbJGfRpcwWpjf1wNDZvRKCQqDmhr9G1SX8pXJE5XYDE97XuyQFKS11FAUtTcv3nYU7Ec9p3HaFX9fs6Yzznx",
  "key19": "2j3PCihCVXaoBVGK7VYD9qMvWr5o2teXnMxhRkUjc4XvxFgJZEGc8vsoNNRKbJKfK87JYCJWSYQrQBF7JEA3P3dU",
  "key20": "4dmJau1enrMVMzkRRCqkWQ7j4Pib25RCmVPEHog8ikyE5hzXxL2vFRa65855CPwa2PPEt4mxWnLsEgmmrudimotn",
  "key21": "3MK3o79sWMypNbzrJz6KheWbZLtrSpVY5HwwbJdw2gaszGmktU6U1SEDj887a95i98m5j42LsBfvsdLprNyPrbfH",
  "key22": "2iVSgVVAGnYjF2TsoKAEz4jakXUDfLtyAqJRWEcYWnrKfoZUwkJW72wDPdQie7HX9DGUb7tbmhcYPCdyiboX4zDR",
  "key23": "5gSmGPARCrSwhfkkSEtRBzfpSni2RnP5vP6cKZ26b9HiQp9KSX8LjNpR9n4AaymHgiAYwUpErz45b3zuwBnM89u1",
  "key24": "hvH5a1WJmebU6CYJ2dmSB46rSrp1m7Z7CLTxNcZTfa3SwMzroxim3o61msUAwWWYQL83fCNvaD3AX7JbqN5cyVV",
  "key25": "3EkGc7DGQnpoQT6wALJU6mnRrULJiu6gY1TZHnAieuGdN21mCAA1QKvN8gbxN5egFEqUaGKtoxyz3kvNJag753JE"
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
