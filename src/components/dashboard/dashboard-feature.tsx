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
    "4Z3qjiLFzzs7Q9vABSLeLDL9GaPysKHxAKBQRRpERUvXToVgiR7aZ16HbQz8zwyqB3qcL1rm8AgVh6oxxSTJu1XL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pGJt2tMLcdWKpK77GzYtCSeNTjzddQxqbMk4QHM2CkEcgXQbrSUhSnijDHKtwRsvXvwyAcocFbqdR6Fi57ZtpR5",
  "key1": "qAkKorybrJ4EawkscQRchLA6tFAzQKsy2fgr7kHfzi5c6UeAJMm9BtrBzq4NDKZX8CGVL4xF5Ea6nmtPttpuTZJ",
  "key2": "uJKdrSekPViUWcghBYqoxhA5nNeqbTEW4gYofE4uQU6hNUrxV1gP95gWCKUQELd9rSL3vEtV9mCv9jY9AXAQtAa",
  "key3": "3essrfJbV4Nnx8FizKt9aZqwVAECf3rhi9Mme3SKdxrT6SJNiz5BFqeCZ1XyvhPpQT5r6bf9fKcM4G6aryxZqSeA",
  "key4": "51WPejfabDbeNDdvQ3Z5RdmCjUfVwLjr2mePjMPFbgMq3qkASE3CZAm1Lz1eVtweyahEWJ2gWiX33DEQkXSPTZuE",
  "key5": "4RFSJxpiJDnXaNydSy1R4FjGoPn5C3Vf1ZJwgSxCeRWFYLrhmeGR9QBYz3yu2LUBVv7PsXdU3g8U498Y6TFPV6cc",
  "key6": "36PyWwRPuTjQyFZkPm9hijiaAeqFYHv1C8cFxNBk8BwpP5aJSxsJi3gfYoBMT66MfoSUvriQkZVFTzqZnZSVgZQy",
  "key7": "3NvQwGLVHYtQedfmuY6MfyZRb4WwdVKX4aYem6rGBd9kHmTXFGoq8d2P5GuYwtVpMHcmgpgdDpbX9sugr4c6RBgd",
  "key8": "YBT5TkQ4FHgcNU8gADKQ3JNGUBKb1qgLH2xkn9X1UojmBMTEY3yKUd5ZjMVdK8eawk8UXdxNME66e21skcGE8ZH",
  "key9": "2CXnLtptHotfig6DbvH4Rq8A5qXKYXDesWPSekfxxcUedRAVYaa8EBdCdKYXA5eTxLsd4LvurW6ybvh4HifNZqRX",
  "key10": "3bs5qMK6iPbJoDox1uC5Rkwx4QGnkKbsVZdigWxBha1sSJPa3nKhKiAEPo92kFr7KEbUiLEzAt4B27MTwaGzwvYe",
  "key11": "6tPsG1WSP2Lgaancf5ppARErocNhqT55WySYFhbvyeQ9X2f8s4Zxig6USNNXQZH3CMWQxFYLNJWhzr648q6Pikx",
  "key12": "2gFPcXkwfwoiLCpxhRsJuA2D74XosbTBcsDFQSP6pQWWoiLEmt79rdCsKodPzZoJVZjinN9kzBe1iYAG7uSxiRhP",
  "key13": "t5yShq8knBFd1azy9hqgkDppfa2w3dKHrG3QJ6CK8j15kpbiXV6tcnPUpHTVQsyhL1ypp4RBZj94qBEYmZTNz6e",
  "key14": "34dbFpYcTBKqsxJVmRLQaQYxRLYgptQpckDsM3iVqBd9kMoPMtGqGwMXG8sAVjZvexd46UNQ3PvQwn6oT9wK5vPq",
  "key15": "5kkvo52WztRGXbg8zDv6HYfxDFMXBRGWkQt1UdjEAMiWq1AUPnQcwXhEVUN7MxAArLmjNkqGLkketjF6aLyN1vFE",
  "key16": "4SNpb2uoH6q7xYrjnZBZ7oyCvLH7pTKN2vwpwQ5hppPK5BwLt6raCS7jxDZspeA4Ha8p32VBZckWcYo1dEH3JYgw",
  "key17": "GDCsfgwjPewAigS3MRMAZ9aTSBkYoQvUmCfyetzGQJsrqPqbiTobiHnxpH9JAU1Ru14jRMyakBSbGuvwSSn6xXX",
  "key18": "SLmuYo7kpxgbr3zVzUFYW9t24fzZy6mBs6YdsjaDUGv3fNqAjRcpGcbkPJkai6yqaPKn5dK87XjbUupqewFW96n",
  "key19": "3fLGYijuSua3QGZD6XeQP2d7yGDW73c3Bc75cyhuAtCfwgJxFnACEzrwwiwvrxhEXtULz7uag3cQh5E8JSoRUcRc",
  "key20": "yJqBU48YnR8jbJAA8SHqemVxjFjASH2Xzgt2TXKzWz9oTktSSC7FNMBwXQz4s5cdETq2fJH2BWSxvCha53WHAuG",
  "key21": "7NkE2sK4HwFXMLAn8ntUGJGSR1fyNqodyQPNXsvmU7PDu4uAdb2pkEa3QMGE229gA3vraxGxVLYgc2gnhJx1tTs",
  "key22": "TMMZYZyTHeUGcp4JcKGWBGqBYDWtuhhKRwcCFaHgWZ1dzX3HUsmpmVSZiP4PeRJt8siFGhr5rbUdWWVwb2Ca6CZ",
  "key23": "34Npqer1LwoYixkeniCSMxQTArkmeaVXsNnFmWaLgoCPov1cAnnJaW41zXhYjKFBVsx7SV9tKFpk458sNYR9bp45",
  "key24": "3YLNnHp7ULxV4MmuipBruXQ4fXTZT2GQz3kpK9PtJbFprsmuwe6q9XZpwAcfDcDUu5ST9D2TdhzZYREnMx9x3cP8",
  "key25": "ppG8dfYRGQNcVKFkYTAae88tV8gq4KtRutRqUMzz3N6W7nTeSrB7AXKEScrcMw3EvfVsdH5Pwjc7AURu8htGeUd",
  "key26": "4N6nuna4VMRt54T6gAp4AM1R3ofLirg3uGChff4Wnuwgw7yjhkzgDdZ1DwyqoJPbsfdAMjtv3VTnr9sUXKZhjSyc",
  "key27": "gDKb4QtpAPXaxjhxMGQRkHdyTFCtZdgy6egY8P39PVACtcFbWrPkjGrazn1q8JYNrgQK3APZpzvK6BUXgtohMFv",
  "key28": "4njMuL1M1faS1kkGySL6YWuwfQXw4tqdGdQioWkdWWSgLngzwSCYDh9HfNFAuyyqpXQtyPRGtDK7jveCxEGRQr2j",
  "key29": "HsvZNJieM2hF8Un3bpCXMBDSKZssEZmxs7Y5x9j42XR3ZAHnhtXdgmqr3SXwKTqpD9o9X7TNAD2nwHQGznjPqis"
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
