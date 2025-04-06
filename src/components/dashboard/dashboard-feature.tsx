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
    "2PG4PmDcFt2Dh4ft31M5Y5MpX7WY81zegQtMxQfKp7DfmsGKUmGviehsZqN5WVH2RBaUGU9M74mKTEPhcvefAKMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35U3PHCJY8SsdqHqQwpeE3i6nAKho3i2E64F8DABaHaSM2tAjNa4xCJUCupnLuFKR4hD4xm31qVYKhJcVRaPmyPW",
  "key1": "3rWK6gn8uVjTywsMG5pXTd9mociv9yGnekm6jM2F4De95J57xLDbZNFqpgK2vY15Jsymx3tHtWjTWTCr8WEfb5eq",
  "key2": "3xBngB46HvqPaNjYiteAts3UivK5GD8bckfWPARTiQQob16oBqspaAkC9akBXdm9DCZsYNfpPsjajxJjc3UfSSVv",
  "key3": "4ULjEgA4Sw6oRxZmforAdSQk3hHQAV4kLfbxCCbhEecqVmyDMSn9e9kEKeATKA1NDowYshdiNwZ1JBKYaKbfB5EW",
  "key4": "3o9AtKTYSuDvXejYkTFFJhtEpb4598GfteApPAkS9LkRDutaECA82GzdFxSmsX32E8KnF6kqq722NpN62W8BWp6x",
  "key5": "254vPy6FErH8ma2k1qLsdwKPm5jyAh5ebxLXxAuZD2TXEtVvPr5n35AKHJk1weEimTqeZJXqmWwkuKA6b5bYYkca",
  "key6": "WqcX7F61etgBgHXAcePPMAZiPrmuwkwHhoUGScfyWpPLZ1g4PvQxogDTUKXfTsTcrpLFhzmwfELQWpibHQdzDaY",
  "key7": "6nKVMQfZ3KLC8QGN6ZXkMSYFEW842C2K7hV4skgWyKLekw27GFXXETDAkwMqXTwW1Uvuj3YpcdYMe15k5UBDZvZ",
  "key8": "32SUDtUPgSxgAaaof3tyYfZcfU56mWiQaiqvwh2aN2ehtK6vidpGapX52ztrmU7Cn36yw7gwaHEf7bm4dKQRbg3v",
  "key9": "5tqnECrVbNU7B6vwjw7HVVdaK7skYCFNwkf14UUBqpRhfj4VSfFGwpXox6FAJo4nvu2Wr6BwJkGVDmupDJiz44en",
  "key10": "pYkoqEvHGwyhibqrBZBU3GtpStAy4ryhAezZ5FdAE7vGasDfJJCNc4b2K7FWMGfBidigGH114zYJvaaVXLQsNUG",
  "key11": "5V3KY5rSgNYUyosumMwBekWdiMZEmi8AJ1kd9tkXJ5Pex6aKzvfg7dSX6g1Kh9fRzBrLtGLNEGLioQp2GbuHQnBm",
  "key12": "5pgytke4Rs1dZ7JsZevhd4SmRhiq8avi5Suh2sZC6amz3b14VKTbyJ5Cg7NzZEsCpeynkJyYu1ph1HyHuumop5Nf",
  "key13": "1wu4NyxULaN1pSbPA6HobTnRsdEF5GCEfDKr24SoX1qnFHtw86zfHK4PSgr6DMnhj9CKXQ4yLpPcw3J4dSzemrT",
  "key14": "5wH9GojJ7eN2vBR5bZupMccM4Ku5NsdQdmYmR8dsZ4tzhLYd1BNBV5vRKLS3J4tTHkK5ZoHe7cDmr41TWjuhSfHk",
  "key15": "32XAEwMhEK7mbMCKgWCmxJaPr6gEtV3xnFk6VpVYKt36riybJPAWeTC7Fs2onbZUHGiRWkQFX7m3JP4vM4iAr4V5",
  "key16": "3mTaBmwHoynx2eTG5iYfnD1ctusWvrqkR6kewsgSM46qYUQJiGSocHcYTpfZbcooV74eTf1U4gxbBiuqhnCbP9cn",
  "key17": "3fydbYt7ekGt1H2pwmdrHecBG4Ymc64AfivjLrFaZBy1fjpJACGsxQGiuuFYjfx32yJqJu611CwLNaGCkXVnAWMY",
  "key18": "3LmmWfknjQdXGqiKT59F5QtMtX4z336jmfv8TJHrXhuts36CqoupRLoDBiftjLUzHFhzQYZCukow7zWYpi2DrP1v",
  "key19": "35iAqv23xTCSuYzeBii79W3eZVJhDoQZbgvmgmKUjBD4yZ8FjWK3vTMsJJyf7j6kSZpda1EDEHeXyYsCqggdHCK2",
  "key20": "3fzfVksfpwBFe626w5S8CSKpQy1sR4JBA9NEqiucTcLXXTXWSRGV8C3qS5zxCg1K2gKqJVY3uX31D8sQLR2MYM2Y",
  "key21": "khD2A2ZiHQ9wfeUvL5PARrybY6k3dedRkuGdG3VAW4fmxxakkPdsPaBdLT9xEBBYtuoujc5yU1sJyq4QnFc86Xp",
  "key22": "2JB3heH82jWnAvgdrnwswsitkWnXVhz3Lnka2K3qbSmfoC11fVJyDCtrnTipKyGDSwQBn8uBDKXfxjy3wrynDt7L",
  "key23": "4juykrUqaxVpY4tpmz65xy5cgdBuohz1DGj38Uydiw3LFgrtmRZPeU4DodNozyrynuCfAhSGakmxcSdWkhQY2M8L",
  "key24": "2GJcZpVKuqCnpxdgNpNNxMbVk1EVcNcLGDGcTCCAb6vgtsmw16Dm6GeqerEtWo2DUfwePhf9MXMxyxXFxX1U6YdQ"
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
