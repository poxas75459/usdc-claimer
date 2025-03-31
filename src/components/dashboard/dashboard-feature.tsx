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
    "4Xgm1JRyW4NbY3V1DLzu7HMMXb7YukXsPdjXaTvSS82VSeHF49XM6PAw8GKmMvRNCg8wYbGvjYipsPXfXdqz1C2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DyjZmx3w87YT28X67rX3rQagvJ4obeVCsFprHx3vakVsFzEW9H2SXnLa2ZjJMqqkH2zEgatp462U6UKBosnTiS8",
  "key1": "3xVBnCp7HbvzKJWCmBQMShJz8GXotfwP1JXdDogS7obDcAaed6asi5KWsbSxuTBikG8C9w4fe1BHRSrLSegZMGFg",
  "key2": "43cLvM4cPZPSSw2m4YQpCHuN2zipaBt4KSTKjp2wdUzAq86zVoquSvjadmvY9FH4aHrufpyZiZTfY5N47XQEWhoG",
  "key3": "5xjJLP6tyfKFSsrYppaEcEQWCiitm1ipvPkTWkuBZNFuG4phXMV3VMQVJCRmzFmcp5yuY463MgZTef5jVGBZw2HS",
  "key4": "3BzsuxfAhgdzJqfNSr98NAy6DdkeTbb5tVTJyFLodyRwNUXx48281bRm48a49hrJfNdj3RfUHZgaTUH4UgQoMXw6",
  "key5": "5kSeSbgYTervy4vKdSndXuiMJyAC3Wi84TJWXAhKDrAxXyPW6kr2Nir19VncyBZN4AXNjA3vNFqYGTymKaotLTkb",
  "key6": "55Ud6GPqeptXZrQSTqomdjchnEdF9GBhQmGjkivXsjovBxnN9DVvmtxTBEsgWUndY2tJWXCETHDo5rddou8JHu5U",
  "key7": "WFR26cDKN1KV4S9ZteqJTpRJ52LxYWwDrVvVLGuyv2Q7LR5Yq7VbRLiDQAXUFxjGy5AHcCa5zBBeDu2gHeYYisT",
  "key8": "2BTeUZp7mkJBSvBo4qYRVPA7Zo557TFvx2P4cfnY7DAt9P9GhQgb49JFZEYJY347koVFTANqjzQGivdzEeJpPZkG",
  "key9": "21MQGKcZzfT3DtveQbGB4zb1M42NiVxRsLRU56nqWTvckvE64udN6NXsxAiAovV1RhttCcZ223FxjCR6WX9ZFwGs",
  "key10": "2xvvQAUXNLW12WM415Zm647D3G5jZ2szFnLTUWVVe5CXjj8KDcn2PgDzRSvu3KtJd9jzNxryfeGzoc8Fh9HnJxLC",
  "key11": "2cMrX1i95NVctiHzQtiABVSPrLnUe2MVTbuygEUR3mhFxDLYYeyZ8kn3VNyGsgETQc4AmxUSLaDWSqmhnWVphout",
  "key12": "5NABERS5ZejJAHJF73Z4iT4ZacyptcEwxg5uSzuRZsi7HRP2Ub145dywZYHfXUAtosqRmBRUSStHHoyxexSV3Let",
  "key13": "AFArniNZx5c1EJifxrJiLNg8WZdP2eQuYqw8oCwh7GgGbjcjSC3uUq8mzx37yeiPf5aUgoasW8DFqneEYvQ6Qbu",
  "key14": "5cpAZSoQRqBxnxk5UNQeJ8KvLgYCmctuECYHFwSHv8wNWR9CDQX6iZVhGXywHcvDFNeypVLF2mETdwuhCrQoJNgM",
  "key15": "3vyUS2qpwNM8DLRLKbP5sAPFnF2ZFtryHqTd5b8qh6QecTUhaKw2EBoj95nVRYuef5zDLBewYZq5LGcfB7KnVjb2",
  "key16": "dVDhZFwxRZuPFUCY9gRT8QNa5VdQuXo4my3RVQY8r7uBq7Jn7KakzqyM371jzEsJM6jReiZdq6AxnktzsCAXLjS",
  "key17": "3b62LBP4dwJtCpS2cptTUUenvX1GmTkNYAgKfcWLgNQMMLrUgHN7o6u3Zq9cMHayJ9uK2zkqc9b1zCN2ratZ5fgn",
  "key18": "4RgGoX8rpq4YojKLL3BXC8yRh35W4ebcxA9gMh35u5LDEbkNwn98dvKYoEdgP8YGfFMYe5SBrtbu4G9QnunxSkse",
  "key19": "35w4LL68mw6Mk8N4XSdDckv4XNspZ9xe2q778nQV35vEuquPbnZrMavBsqtp5F8E9Udz5zE9MmDXZi7hP82B2YWB",
  "key20": "EEh4mWg2ZwDnR4WPiq2MQf9QbPDDpncSX1PkHhE1AW26hGZQHbogLDULbuP6HL3pNU8h2hAac9TcJjED857ar7y",
  "key21": "4LtkDP98Vb8fUf73dSvE3KA5EkLorHQcVYquegPmV3drE9N1Gd66xwJ4erYKyVCFZaaZXo8EQ59E75tkyyxkCMxx",
  "key22": "54oZVKzaXQgVCvziQiJ5cYmNRmkxKfiE2BcVVpZNn7KPrVWrCTYakimjzJ67MeoWQPRZhVugBgm6EBAfPyAZzVSd",
  "key23": "73KMT7wZSXRqUApKukkht1FmFU7M9dVZfDppvVWH1QaUvgXGaYCqjdnohAVLWtgx3i7NEGWDYPCdJrdj5wFAbYL",
  "key24": "5yCxuqkWeXjY7KuCoj3WQdXfy6YaT9r6cYqSPd7zV4PSZSbUTqrNLAwL8dq6RuB4oQQ8ULEFd3ACUqGzXtC37rww",
  "key25": "48vfZgmHvk68of9SBjoGT5t4L7fd4VaCjLzjarMfy8NyZynt3pT6k5LkTTAfK18UrDhBxmyipG7fwboE4uqUobv9",
  "key26": "27pULKB4NQNSdmkTYta5jPFEsrX7J9GJcEd6VrCe5MGDVwcah3e1Dh3zjJWAGQEr1PqawC13GFqabKJXwhyNoXFt",
  "key27": "3XDa7yn1bfJ6D7GfDGBKF4ZAqGuYyjNh4basDPRsyJeJRYWaqrM3xf5vbtNJKMVmsUow5mJ57vK1YEzdKZh3sdTf"
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
