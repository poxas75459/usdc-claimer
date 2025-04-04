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
    "3G2qLpoqoUBkhXRKHMut8djfQRJnZEB5fjR11ZfRcXtoH19nwfTxmswW7kxkA1vMPkWaNWF6dL8W7iqid41wzdn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "358MdmH2xUfV1RfhyYaFYTJ74EGu4jygo7CTMEQVK4Bvrc8JbGes2C4K4KaVDeQA7Y4n7EcLDTX6D2cLzjcKAEjA",
  "key1": "2FmRCHdbDL56zn7cjGKwyGwbT5MvCytz8KBE5hSaQs9Q5vdXhxB8w6JUQJvweEVvSmjR5SUZGqdMG6kuvGdqbTv9",
  "key2": "2ErgdH4QMWekzfVrB8gsm1D5uKJdH4QJ6Cy2uQnkXXwsETJDof93gUaK8LVj9TYzFBiSH3UNFvmaLVFCURRiqDAT",
  "key3": "3RWJVjyuM6eTwBJsavck2qaQLUWt91zhP6Fs1BW5jtL6RH2tPn5z83JiqrfKr7xHXxsfkm6pdBrCWGdKusdXXwQP",
  "key4": "X8Ln2G9AyBeJtykbnWigRvLDWRvLYBfVRvGypmEoxjCGnDTUbcQZGQEhsNHbNExFCTxmomNrvv4hvhTKhoDK7ky",
  "key5": "5N4qFdUTL4HPA3ziv8i5d9jn4C6k8TVapzRzPKENn5S8d5QHfvxTXpwuqRiwrDtinkkEN5Uh9iXm7zsvbxK27ahT",
  "key6": "3TXVQTHHBEDaJNeGtVX16PKDXVgbWhbLRHvdSfZJjsHUP5KJCRpEMKiKtj1xZ3ph6gL1hj11d95f1NKJgkX97Jpi",
  "key7": "3mUeSzB7tz4sBCUQbA3AMA8N8wJn1bCshjaTX4D28T4xewb7HCqJyUjqEqpvKtcJTwvzEzEd3JQBARPLssiK2SDp",
  "key8": "61NYomuNFmgfVnqM36cN99v1ByzCFBn4NBJhJvwstt25x1QENjwfqT9iBzXoA1ZFqsMpJPxZiSVdK29z9m4NRtzj",
  "key9": "2P9JvEEbnRvY8zVLhkVSCZoDa37cLj97CWZsj67tpTU8xsa4nda99avToS7GDFSZwHyqebpgnTxfM4kgLPbd2y9v",
  "key10": "VdaE35apRqscHwCgu5UzmxrRfZjTTynE25Ft2fXPyQvSaH1PewzrN9zC8qq3jnALx5C4BbCdFP13Jt8aC28kCjB",
  "key11": "5Kb2bNpyZKV8kcrveFMg1KcGsHADhpRuwJu2Bqs8jgsSx4QWcs55MYu13zQxrXRep6TSBpPyPQk412SXS4vMo9Mj",
  "key12": "5DjRQ6GgXeguxVDmQ6XheeyxYtqHwpLUB4mEyaBJaPsD3PEiio3uAsw2pXvmpX9kueqgst6r6TLkiAgAs8HY4NQm",
  "key13": "2jPTeA9xCeH7uc6PyuLUqER42qK3dSHhCRFVWpaVAS2dLmsiX2UgiBsJcPCTBhPxEHWLPfHxnfFzJZ3jVJAjt4ym",
  "key14": "5ifb8NubrwQYVkzbrQoppoD79JifufvFSoYX3yaChRiKfN3jLTRxsHDrw3x3dqqKNz6jgDGoPZm4P3VY4WZM7vRh",
  "key15": "2EpNphnrGppsoyk3Yg9Z1buBo6UwAyTSCfCEtYXZbSwGVz6rTDHPnpVTRXUc3BEN88h72KMtQUkVtVmD1y6SPiVC",
  "key16": "TKYV8mokde9cEtWju7w2ExmoWjPE3LCTUiYuzYWx7YLcH6C5hYqSHVXtBc5eR5CcFd8Ly3hWRrx8kuuTMdWaEHj",
  "key17": "5X2yZEBACdMXvR7wW2qPmsWjgRs1LF3835X6NjjdYa2zTxvS6db6MrZoNJrF3KXFQ8XwutFSQRgoSZGrNGxyi1Bv",
  "key18": "3yEPQUuGMD8Fpa1BGD1TbiAadBZgBhd5e7M6ZAUYfXLf6jbwwuKfGnVPF3EgwwG8b9QXM9LZb2shWjaYK4KEh38W",
  "key19": "36jFzLSPayypZJ747WcoezhF1NnFUZ2edN2SBbFLnLog4KvZnefrrVmEMtYPJbXJgyZRTxwzwB2zf8PeGUkferzr",
  "key20": "4tC3uD1MDP9QgBVJxDydB5TJHwBCuoMJfyKxX8NBuPinML3vgqS3ByD8oU348mTDjjmwesweCmY8svJ29oBzaopZ",
  "key21": "4xbqjanaiphgNRZZX9FXL6zMQrLkqqxk64FyoLdYR7NfFhGFvSYW9YXx5w4vZhWRiy51r7jkSbmPwbrQzAH7NFXJ",
  "key22": "VarqD7rf2gkW5tvKB9JZXH85wTD4npGJ4o7EffsWehqTrAPnQq7oiiQdfDApYhA9ex3R88RQBfwNdVbiGEE8dFQ",
  "key23": "64uiyCcucLnCZ3933cNHn9FWt7egtbTV2V3iCNfMcrhX6YaVXvfYDGdpnPvUuRe9bxs2GWU3dpf4bvUMkjh28fyE",
  "key24": "2rVaZzFovN1ZPwZRjcbsY8FNbtteyowBmJhdzVhTzMnKdDkNENUtTSzfVvFCn9zvoMARqTtQdyNhAgKQ1JZKN2L",
  "key25": "2cQpmq98Q2jZkwKJq5kozqM3VuYFiTvCQP6LVSjj7FfZnLenFaRgbL3cXYXbS5UusC4TZSKGDNZjVTVraGkjTJh9",
  "key26": "32BRXMAg3FZtqmzc7pJjuD9vewS8biEhLQRekSXbgf86uxtbYzYfsmRT9EF5zMHhE6grrBiVPfpDaKkjzn52yxo8",
  "key27": "52Wt6t121S2VohpEM8JSyFLUmScm1JNjLasKsjrzQL5JNeZDBpBP4YLkPYam33ELiFgFrBRdsa9DnERynx4qbKeM",
  "key28": "Mp59nfeaiSgvfW2kHFeYSQJAKhFw1VwHeSxqSBnHev38yJgqZBu5X7yca8QAR3sSzWZ8YpdoBHSMLsoCuTFcgWr",
  "key29": "5zX72NmyNE6eBG3sinnpr5VQSm4rHK8BYzKXHNRx63v1LbJhEux8JdTPtSXTe9LdjzuvhCHtyR5uwWtzoSoEPNoF",
  "key30": "53FbMKUwxF6edexKP3XSAgxJ3iZkHM6XD21uJV9JnFXnC94ZPq5Dz5pT559DRTGrwsafZTsXWCqy5HBjFBYsWJMj",
  "key31": "5sxWEKRMmLkknHbHWTBMo7aMrFfzcaeu1CqVTJ7V1ShWmxXkCNWVbfhNFCoM9y1LTVwCWkJ8MzJFSMLB14iMVR6U",
  "key32": "4tPx8LChNHQakBT1zL7teDxjvJTA7TjDXgBZi3fcDizwsqMtaiwreFRyFTYNJYfvCdyxfPjG2v15pQZ9v2trfmbF",
  "key33": "2MJg4jq2VsQYjz74TA5z9NLXMCy8X2pdmdntCh4DLEadeoigceGrvGeWsM7PCeSLzBMVWqP14H2sZrgSWPsyMKHK",
  "key34": "4k2hkJTPXqxpZxGzqYkpzLFYQL89enYYwA2Dbzm47v43PpBLcVzpoVSZRDRg5BtkX3YpMcRzvmMFwQnRaPAKLpSo",
  "key35": "2U2muRjE646STXQ8ega7nLTLDjtBvmktg6RCZMi9b8vWYUsq8tcm8rUSUPucUrwyvzopFE6gKt2BsoDjExypvcWi",
  "key36": "4TJQkZK8jB3BWsnb53NaCzP3qS5azwcrmFuZofPV96ADbn9z6zvxi7usUp5ntey4g1aSQqy4ZKywctfgypw3iojP",
  "key37": "sRo6SjP8rTyjxTddMuSsfTU39jqrJNyFXrcZFgUETcZfPzFMzdopSxLjJQibj94HxEEjajBS2mXC7bDPZc3T8Xh",
  "key38": "4obFD2zb8qUvWewPqCfopmdSpKrFXT3W4Zy66y72nVNmo2s566dQ1TtqgwofP7c2xT3LwQckxr6E4FGa98SMffM6",
  "key39": "5VfnsKie3a7u1y5j9wGhDLFEvUmoesXhXbay1zu8ft7iGUCWrovPt8d5civargUKgAdgapLYMeyBJEVje4CmYBJp",
  "key40": "5pHSPGduakqgsHE5HXhzv79MQZ789zRLV2QNqMbhLo9pGJkxGTwH6K7XdQq1qR5auGYrfAwtYidXzRVu1faaxRev",
  "key41": "3XyWFXHnpepFyKeHrAMQE1cSv7H7uPm3gVa4CEK7Nwy1X3rjeJwRMTJCWJdzDwmQJkDfgxWemxguysS9dDN7vXuK",
  "key42": "4Zx9jDBELAM3rrPp62XEW74FwxBgcaiyvnXF8umJAZ3bWLeSbXJf45ZMMywqc7KYPJ4ihvoEa1swaTXQAYby814C"
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
