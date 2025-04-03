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
    "2Wf4D3NJXaj4BGLukPRdBQ5Dk2FMZSS7SoYCeod9DMW3rfgGLyKhoPHcRj4LHFQ8L268hp5mwzn7jPaPa8BQkTez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rMYHGT3U481d7hJsVLywJh4BqzMtiXG7WPBsbaR3ACEnvHFmzQDcUPeateYQkd8BzaiSXQcvBoPQ7Msb7KEPFfa",
  "key1": "9dvjeatV5bu3RYouHUzSAYRYipPKbxkijDvT3T7WLo6Xbs666PxQYkDS9ggBWb6wyFSvA61YXGHai5AmaqKDTxQ",
  "key2": "3Y44gqgvfYWh3SSENYm8J6M7dKa4HWwZVSMXe1xhDLLWpxrvX2Kss37E5ppLjLzX4aBkUvHSYpukqQyWSk8e63fe",
  "key3": "26Pmkpc6bR8m2UBnTJ8BXBtTZXxZexLLCcPNcQgxdDwurXsHxZs82iD9obbcnsozxL8QVPqTgWPE33NFdKE4AhTh",
  "key4": "TDzxxf4KiXNRBsrDe4T7JNA9VXN77iNS4ky7wzqwdhxRMtYAvTvPjNvKuo6XQ3ToodTMQfzwdTcNxccWmkdqKMG",
  "key5": "3TXphwq1BVG3iT77w2uspRAqQra4ukVPRc5ZUsnq1zQRSjYmU2xgQgdQWLy64EsSR9gpmGB4dufujnYQeHXo15dq",
  "key6": "65BGGvdyPXYvh4XmWXj61cX85Qn72kD3sYHCGBwHs7jBjskvcTXbjuBw5gqXQyZgsrmgsswKTRFfc2oVjrpKaWDv",
  "key7": "3TWvWhgDE9f7DCv8xtD2wjuTo49nYLxRWDdSNh7CfAtuofYn43PLPssurcsTBX3v52kjHFrUS6AvinYQDdVv4unE",
  "key8": "3FP7nDaEXPbRYcW34bbeLxFMifjVR4NUCVLSJXa7BjfjGinY4eLRbx5RKn7VjHETr28gNcUZFxpdNrnruKC65baj",
  "key9": "4eAMXtBvYNFbzK96CDKqnrNHUrjBPfpDCqHqtKCE7RSVA6dLUXC3vwWKDAzBK4FVJLi2W4BE37LV16g4bpqkKmRT",
  "key10": "3FKA1TiFx6KT7TgWeJabqMk1hjuJx86LxSKdRj5Aw83i1Yk3HuEdXAWZfDi8KwdVwNXDidK9fZW8jGoqTmfSDFh3",
  "key11": "5MDacJvMF9CdBRymD5YiDN3vXYjeaHUZnmEnBTderw6FFWFpayMxQyEBUF965W2TFXYWWfQkv3KT36kTLN4iNGyf",
  "key12": "5XV2yJBQcYBCP1ti2CyzmzDWD4i2x5SPzntkjyBNJmZowgBMHct1859xKx3DZTDTEa3Z7FvSbDtRH6gfaHiw4srY",
  "key13": "YNVj7Aj6U2q5EhVcJrSUb66QBnivVb4gg56dHv1WnGuk5ZXYjNrktxmbHRrvFckSG6NoaixKiuME74qSXFchfJi",
  "key14": "bDLhBbVRxRzWz5EWa1S1R2AKz3BjtL2mSrTZPDYqvLapJLhijKRxyca5XBuaKFcxRUcs6ns9oL4UH2uvkauYuNP",
  "key15": "3RnXYASd94isLgL5oF4ge7UiKEUKXaDotBL6FTTfZh1mp3GKGJuJXVT7tHvhsAsLLEtvMjvr4oUi2onNueXoJEoY",
  "key16": "5b5v8nRPAP27Pz6pbjDQPoPiZBcJV3EPAqN3155DviGLzBPruwFiidRsRnSg5UnKD9akYVpS18hwHRLnLXAe9bzk",
  "key17": "SjKdxc6Ni2GvRV1Bk8vFKqbskiBLW9mamMCUFEoaF889qvLfuFbVh6icHQKNQNJE4V8mco5BF6uUXhLM869RQFY",
  "key18": "3c9KsBcQzguGUd6oFgZedMkExsyUr6r8yBWyXnHVG4LpsgAJiSJZn6MbZb9Hf3ySWX8dfWrnhHQbx7GzzmowHk4u",
  "key19": "tNoNaPD4o2yLTnfgziPfFck3v2osoURoCJukQGu9gwjL8fwGZmBhvR2R6jeUfmRA8d2K8CDiSmgqZEJnkrCmZQN",
  "key20": "37TEhUnQYG5W8VRggUybQnrpdPN8FzCadBggvRc2F12wGRGbsEqHW1MzVWbDfNEciDdG5xXobNrtVCFmPjn8uEQK",
  "key21": "2WjaYQzugU89RcZENwkbP2N8CSWEj9J1jAAvf23C3cCYzNzoLv99XmjHKbm3H9iH2Hf9HVnwAt4eEAHkK7yXZ7oS",
  "key22": "42LgTKSwoYS1PAZ6pZftiGdaR6NUkjyontjEUUnGvUBdFFYXtiygGQ7iju7rA1Y1JySHHidUUiX6p2CgRkQrtfVU",
  "key23": "ogywjjbP5wVDUrv14XMwFKga7XN9K1pPhFTHBSGyFAQ4T9hW1NJmKeKbRqzWAJoL1YQtiSX51k7MXzmoqr5CKxM",
  "key24": "3ZWg8fU8J58h4UTmUqnyNNeP7bH4oqvmfSuVTVSncQiFZ9mrNm364YyMhjhsGCkm48LrtWCFAo4PDGzH8AdJB3bU",
  "key25": "3c1pfQX98TKBgBsiEC97fkNhAGwWRFMEAiVgYodzMjv2tpa6ynb29Gu5wFfv7UmN61DQ3rzQR7CdnqtnoiP7cGyj",
  "key26": "ktpKKyfht1iN6N57bjkPien7STHr14GJ9LfXQok7JoDoUXPntVWfFPGV6ZCaQphN6EvPA5eJnSmy2qTdSVgNFGX",
  "key27": "354b6ZMiwJSP3DW1XuotyEj2wj2EoqxKC71aPEwVqZo5FJUhSCuuQ7azsXfcd9wTRPsHWkJ1LQCeSUDFJWPH54UX",
  "key28": "2ZimYCmcuiMpUKTt3AkgwSgma3fMD289zYSiBRhjjvRrhMhJ77Q4W6kqxJMeSLxHPYACjXAXQuyKGa8DhhzZj91Q",
  "key29": "YDgyehhVeWWJT3GgTxYwtGTMjtPdAPaxWG7mzjLEbtpggytSjUvVqVPXC9QcDjWfHoLRa5zfJr4MJtLmcJs6iL6",
  "key30": "128SGHVUDsYiNfFj95pgRWXvgtAZV1ed2n6hwLbwh8SNtBz6aNBSWapEgpTT9Rx87fqyJWjH9Y7YvpsuJehTjuFp",
  "key31": "28gRaSynHurR6MCG8xukLw95q14xG42CsVgAXWQ7vMKpWoApVZdapbfQVuXbK6UipcfD4ASrUSAZH5wVFrdP9iFE",
  "key32": "3Gx8ZLN3LgQ3c2kshwceRo32sNcKEwQGVSzkTB16dagpFC58GkQxAQMpGKco1UqQdyV1Th7b5kgZJsQNg2mGsJr3",
  "key33": "4m3LqU37mQPXEisHyf1A5SXxMguEdKjZAamwm67K8jR6t8i7c9setE9HhazPhQjq1zpkukm675ppszGvW1McGK1j",
  "key34": "k9YoR4g7wfJX4wMdHzw3y8grdVnhwxA1hhYDB1u3pNgAjLrt1Er7VWJ1Xzy2A7vg9Zt3rZubrWnAFqj5mSmMG1V",
  "key35": "Q3JVgDhxnMRZwMh2DoMsEMoCSRVdyzZuw9wR7KAS5KdFaWYMR9XgGeaKufe3U13s9vC6skgeXPyMwK4XaTroo1j",
  "key36": "2SRMHkn59GAFE9EJEbeVjBb5WvSbYhxmHjpPBBCJBmao4eVCPXSuUkN4z1iqN9uLaHBc17DHaSJ7dodpeUx4yeSu",
  "key37": "ivWRrbv2NnbsLEeXtT6WoY4MBA6zGP1FGKhttDUvx3N7L1u9BWUdq9VPvNNnSbkfKTHmiKW3rYPdnB6DsDwjXd4"
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
