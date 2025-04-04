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
    "2zehGTqMGmhS3vYmau6dSsvyHi5VMxcGPWbSKZQDRpngj5Dpe9Lv2e1G4uKEWHBrzYCQvzt8rk7XtgeYoHkHvPof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p4P6aw3hMJtjfdgWfFPxm6W8bVo6vkQFeVTsyXgEzaf3epfz4ezFEHk2EzXAYK1wz3enjoTsSCb8s2H4oWqmRAJ",
  "key1": "2BeLWLmfKohPvZz14V72JYLND5Vqeky8uonXtp4qs7e271SobtiR75uxi2miPZsE35dksti1txaPNQVRtJNGpT97",
  "key2": "48BP4wJpFMWH5oQHRrZ1qs4yuk7C1kmGNBSpc2vvRu7moGyVAGRujAh6zpchqZ6mMiPV3JzkqVAJkSYscFeLV5rj",
  "key3": "3DfM1QBtHcKJSWHRY8Z3sLiRwpgEvkwdw22dZB2VvQoDZRP3qybWCBYAUNtVV9keXhKdnCTB2jyH435MrFpkdsL7",
  "key4": "5qdVhubqxwnoejLrtDLDmu7pmji32pckdcZ7niUPz9oTs48SyK84NcHp9qcGeBUmsLjjJWLSi7GeTUQu77ihiSvp",
  "key5": "XLT8w5zNCoNAQfGyA4nZose4oSpZxCJsHWHACv7SDmMLPfduVpovTnUpNSZJzbqTDNbmR6mQgpj5jjBbkFzxkGZ",
  "key6": "67LebBncFfD78bfDsLShGAq5tu641adZcHmbfnrKuzBV5Za9irvhPXD5L8GTAxLn7P1aj7CjNh4BgateXmNgkN7H",
  "key7": "4tczEJKCxF3kYQVAkGAgb8DN5i6rsr6g3xfgG9QLv6Cn9mQprDuDUXdeZ1B8ATMgpNw5gioyFtwjMpotu4VempJR",
  "key8": "kb7QUe8RsjafF6ghQTpLuzdDNESX4s7V35LJFtvzhshPfnRALUu9YVvT8MgC4mUD6Wvh6Fobz7vs6FwSVT1CaxW",
  "key9": "4X2NYoVzLRXwg67C3uV9LL735d1f31AGNkCAPPgxZvbcKqZeAXPEAa26YJNypRiZw8pnCawouaMH1qHtAE3E6u3F",
  "key10": "5Lz7MyZmdRCQgSvM2FRpPSDxDwsdapEzfdq5UGf7XFBnDakYCfTNbHENquVxfUVHvmepYwLCTdCDevnNNB3MT8s7",
  "key11": "4UJvEf3grAmg2K7LdzGNi2hZAi3pP1pmptpMNvsC58JnBFHpBQQbryccb7xnapBV9yYrcrn6FnnXXvT27bXa6QNr",
  "key12": "RyQi2NisK4u4HMtk2SYPx49A8hSjT2och9MnXLbk7hUgs21TN5oLH3tQSiyCUdaMTd5e2iUyzLkDEy3cie3S3A5",
  "key13": "3NuzR6ayLUwwoJJ7etieuerpCtCCuRrXmV4UZzwU7mQNiqRDgaYnfwJPVvb1aQBrDUdCoEJpiqGnKiX2KtHxafgf",
  "key14": "4kiGPDVg1DkPML61oBcKRTK5EzD2GL5t2AMmzYW6QvRdXZmp4z5XZM7uzAAfJPk1jYppk6JKQsW7JDyMK2dm26A8",
  "key15": "3uoQNkyK6j6eZGJSLduwrASs9mGQCz8i9wfVVCBvfThHcZ8m6cpSE8DYknynKfSuE8y1YPEetCwGJuS72QCoLU4j",
  "key16": "2CB1Lx7BFHnozebB35G7AF5La513ddPgVAjBb54BzsVmfaUdtwhpcwV9BJXTKWZ6P6JPSSaYacsCCchyTaGAE58t",
  "key17": "3mYfwZYuTWHX7Mb3s4D94Gsru5yweMQ1k4BHGSwCgiEKJB3K8EoENZ3xHUEX9rGbAfyYf1Y9n7ynYLcLTvU8sJ87",
  "key18": "5BXbjgC2ZEKMyR6nTQWSxCBRjojxA3TyzFaBYSdPjKeFjVfRGChDX6eCu86QWpnNei64g9hMDkiGeStGjG8RCfNq",
  "key19": "2rKuyL1sDHg5g6m37wvRPei7nnozo9jXLCj34CpEs7wrFBh7JNTPa3hjnzJdZ5c9LdWHSqLaGhQVdXZLyks3kVZN",
  "key20": "4DKo2qigr2jqGRoCMuRTjSJkJgmqs6gp8ZWrJsB3kLb6KoGfbZWS9Qq9crjHFtZK8amY28LkMuQMvo3HAWjaH4Aw",
  "key21": "ow6Fr4cQXad8kDFQjE91zaczG97ByecNaz1PmzYoSYWn3kZt7RmPLaHy3g4Mfi1F6aZqu8KBSHaqqyyQZFFJJnu",
  "key22": "5MLAtZDvaP1nLwEApRDAhtzM3Lw8m8mYiPZ4w3cYsHJhvq8AKsyUU4KTy5XvB7XuEoKSTwnKL7CGNxMC9CH9bRTC",
  "key23": "5G5NYAE9sYzYXtTw8DFyQciT5qrtHqQNgeMby43TocHLZr6qfB6PwXV5yfXceEFgG1aY7RPqcmvBehYGQtnrwwrx",
  "key24": "5TfhTppSidfNYg2EoidJBaJh7Jd9FMMq3bT6R5x9HqGUSNXz5m6TNgjxPgFuxWDB7kTE95mbUNnr2BJcd1CCF4vv",
  "key25": "2mvA23Pq2E24BYKKih3rRr6Q92T8qdth5RdKR2SXH8JJfvTzFi2m1ovrix6P3prPELAcsc7gAmYRRa7Rj78wkcWW",
  "key26": "47WCUR7V6YkYFoo9MYUiwUzGnS6LNWVadgQhrGox8BrWu1vRFYWnd877XoSqVX4ayvRQ1PMEwPj3cm7PTVbei1e3"
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
