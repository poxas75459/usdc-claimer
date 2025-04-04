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
    "4g2TUQy6d82Bp5QzFx5oaSmVjuW7VTteFPEokBoUk74j8qzcouWgebmjKUkGqQNVhKoKN4HKCfrVw6TASZwk64gJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xqAkytMWx2E2drZQXkWFFWZ57CY24FUmduXkYtPAwjuan8B2Sem7N17jEw31QUuSWR8n1GXHqpZgNjRCZo6bsGc",
  "key1": "oLpH3L4YGP2jrvgFUp4pNPVwpNwXe8FsTy5M9wnfm2zhnrJ949HNRsPuuwviw3n1eJqTzSKs5ovXqo6xdMYgunM",
  "key2": "5vzH1iiGAwdeJWkS4W2Qk6jgB2DMAZ3MWDpEVnVYG7wMP2nkQDCtigSkQMjc3f4DT4g2pZ1rJ1JvSgxDZiWQvzHv",
  "key3": "43cBD2oyTm4NdCauf9obVQaqwtP8VpAkqHXMnJKAeu4smySZ5FGr2rjjG9B8nAQAbmHQE36nSotUU2ymjtaz6pkQ",
  "key4": "7SAuaruuy8GujRiUHAhRj1oeR2apTBAXpXtFbaFytMUV9DyuQd2s5RgDuyymMD4VscnQ1mXYjRdyAsSpCyyt9rK",
  "key5": "3gZg5XX4HPzZ1ayu2DqmYWpAjQUGdKKzSinBsRSYtPLEENAXUntHJCgPDJznVQgQKBWvLLsLRGJF1xE7dGCe6UNL",
  "key6": "2jQg8SL5jU7WaKoz8QrFpjkgitzR6pP6j22NuRctR6ZdraBAFF3oQZsdVXLFUmzgSmwjynJqxg4bFRuCH5vortqK",
  "key7": "4RMAQ8NDEz4NjQ1ESvJBQwpcGTeRtPPyDaorjVjKoDoP9UM5Wd2rqZKyTptX6i2KhQbESgZvnzgADhtznBoxg21H",
  "key8": "HsqNyJUSS3iAY9pBtsW4XniyQH8A3zvkmiCjEggBqDWMRtZpCskHxiTMtxW4Li2utsUnXKToq4aLQLiU9CmQcwg",
  "key9": "5tWXN4fxvYpw9vq9pm4hjGwnFBAqdFwPAgDqLNPJ5nPJjw7VvqmAundkf1SJLbbbX18v5qumNEwuVpur85aCEtAz",
  "key10": "5yXAH6gab1svNSPrFyRDCF4mvYeXe8jT4huqdDJtQ9Wb5j3enKCVQijGa3hrp4zDHFxPb6kajGrKZv6n5RRMGtMz",
  "key11": "5UEe5U4Jite12JrkfrNALx6mYcwHjugK2PQbWuhtbb4Yx2HNRu7MF1UtG9cw3SmFtwt1cefkxg7Td1yViceYxS9Z",
  "key12": "33eUdbEXPzbMwdNyJsPpThJ1AoLhTh57oaeMxGhUVRjzLdHmu9G6Zyyag8m6Ks5aCbfgadWGLfRsd51F15XjyU4B",
  "key13": "4YKM4j6ZR1g8WKn2ZimkxxvszqPiffjxLXcRpD2HLgtmXjFVtSimyp3VavM2RhepDCpjmaqTYUhbE9oy5a2J8794",
  "key14": "4rePSUMG3GcwkaCfVqga91YXco5StAbW5amYuEN5vgREHxsvdnSKe8cCPaGpYpAF5MSnASsKW8do55ZxSJDgiH3A",
  "key15": "4oZ5A3RChZhDfKt5w3ZYriiRQWpEUViVaMvcxcy4NmqJQnixQ7W31qDtPYcxuitheEWKPoZncjUsESm57kVrj3cx",
  "key16": "2hjL8sqfSTzsVY78NAVqgbSAVicsv2ec9bGL8BDhrEcV7dVXPqr2PQfWLWMtPpvwPHoKTGbFMf6yBPcSibyYEAuQ",
  "key17": "5NwvmKuHb3PzQBTZA46xBftQaa22idBFpBTT89Q9SHu3bzq5W3t2DiJesiX2f5JB9NgcJEXGQCQQT1DNZyq8sfe5",
  "key18": "5ogUr6ApGL8UAApDKW9RRb1mmGvLpSzzmRroYxST6jfdYAwGfirqjxwp2kNsYU23pdnGPNd3mGisDtJKxjsZr5kY",
  "key19": "2yzUNrzSH5tA4qiGd8RCzdkt4SA62PsUYUdEambmVCNrpfL8gBH67tjSzgu9DaqtonanYyAezJfnZsmh1n5oV6MB",
  "key20": "5JwkwL4c776P6xvibU8BF69z7GPx11QjXCfJeDu5opf5Yyat5c9JHRwuaGHzsEVveZCaeycFKnqLvJd3PEFMrMCH",
  "key21": "5aEL6TgojhJqmwL7rMHaH5j9LTdcSoWUhjSZ7uswA2zWYC7jrHacBBg28L9f728AruBjV85zW6TtfzagLQViKxv8",
  "key22": "41ZAc59mkbVqxeudsaF4pQR8VH2Mc236PCA3D8pk4LLgBUVEADZMkoGnyixKRZ4uGw4ytbt18xqjj8hfmH1YmXfe",
  "key23": "uEMCNHwHbHHQbsRRGYWaGFPSTr2NjBNz7FbiVvHtypqdfwAZ5kTyf9nT1okLhW78bHkKTnaozFCk3h5bMWeWrV2",
  "key24": "64nmwrGD862cZhrYzzbJCx55whgHwk7K3WSzWhmVW5Mt5AH1vDQfxWcwKshEmCuQfQxwXvbkU2sdHC3P7ABPgtpD"
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
