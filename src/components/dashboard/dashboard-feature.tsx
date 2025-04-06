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
    "5rvpngXVK8oXZzmxy8NV1ZcrZDPYGjgMDFfPkeZV1rzssdUMnMEG7S5qzXf41CLujyEYWbnWPxzouJAizTxn8R6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mhhMZbUEobKj8mmJf9WtBPQHiamb8jt9ewjPdEN6KAA7CrBa9g5hsd11aQJmXNSEZV4SxAqhnuuLW2kvxhdHv2s",
  "key1": "2qVgdedarunsCMGJJwYdccoFgSuVegMxF9FdMHByb8xwg5AKGGy23kSkeANbLbDgCvkAxiXSLCRLkdD57gtN4Fo1",
  "key2": "3qh9vHdWVaysQbybf6HQbda8aFU4VjKGFcEkzZpRpfdGC5t2q4ZK1CwpgCt6v7SmzGe8bZQjaCg9dmazLfAs9L3u",
  "key3": "598f98TcN8GsiRbYu3Tsx2S8JcjrW8AQubwh6uBPBkjtF2qMT7qoQXdK2A6qSPiKmkbqXuzqxdV1PLjSatSGXkyR",
  "key4": "4C6juqDAEbNDExBp1o5FJD5xCcp52C9f2C6BDp5XAkSoekJ5BzpEpVvy9ezc9Dm12x9Lgx4ejVyiscSg5wnPPfDG",
  "key5": "2L9k5Puy8j8tJrT8usBQ81V4Y57gjtbLcXt65XgZzmEUKQ5S7s3b2qd52bAGXGWAezyfWWFQRrUkfDdUCizxcWDD",
  "key6": "3qtYsYr7VysM1pb8gZduRPph4tfDwNbKVkoBe5A9hNmBbC2gPdYZTsQUSYRoSkCMbbSvHv52rCA43bCuwZT3TWzJ",
  "key7": "3cS99So6xiLy9yPd9YZxuBRzDiBTQ6EduouHgd8BUDuw7F7NsiBLwDXNTQhmmqjm4xRo5thbTNLNiE4YHRk4mK8j",
  "key8": "4qVEcNBKenoaqwWdf3Xqwyw5xfMapUMafkTswYgxVTL6Edgk3nfJYvEn73iYDJXujq84y11AynALa67LaMPHsQ7i",
  "key9": "51AAtWLHcFwPP77Swzm1b1JALv1NLLhqazQwNFddzhWpSpH1DV2GSza4d8xTx5jvvgssZyyxF1jXNi1ykuAY1bc1",
  "key10": "3te3fKbT7ML8Vxqj6EJZRRj5TS7KtJSKF9Dbq1ghN6v2VBked6gR5ADvy9V8YFd1JzdatqLHLNy7t1ssS1rLSoY4",
  "key11": "GD9vpzFGMotSxJvMon4zcExRyfxfJGvifBYueZbGVxLsyx1rttnd5jKtCrHo8FYX2wJfNGX7wwahESevmfPmW4c",
  "key12": "3Bgiiy8Qe2mZvT4AhhxurGDRqMMm1BpanZ7oUc9dcmnLAMyr4z3uvLSHM2KmMjqFMKqGSUd84gHV8KULWktRBNVG",
  "key13": "NpchMHBi7RfyK1JtWJoJQmtPowmD5xMnmksWVxRwGjHH3zT9PxxyJhq5PKniNi7Sq1BPsBRKjQZp7NKDJpAMpiU",
  "key14": "2J3QqXQahQChUWpixyENmZ6cqB5E6XQtdFa997Emn2DRAt4SFckQMDvtED8gqQiLrho2FfGmniRkybQeGWD1PU3E",
  "key15": "2NZ7RK5rcPz3Dexy1dGwmZkGdnAT85vXhgHNTiUh6VTSLtqQ7T6Uee6V4LfEzkXZ51JKvMs3ynpMj2y7WyeyqnhG",
  "key16": "3sCiYW4mPxW7o6W6xQMQumQEMD2FmWWP3NuZG7Bicyh5bUPnzbPPdLCVcM2NwnfhqLn6KhtDynvJMCFHtU26srE1",
  "key17": "rueCZGVeShPS7C9i2M79SqWDAqcYKS8DN8ZWQSxV1PKtGupsfsmK4GFNxjr6Srw5b2PAj4jSw52Z69F1g9oT5wf",
  "key18": "5wzwwzfxAGqDFHfwQT5wbjG2mSuDxD6WfbrnHVaqtMGBkZyTmWXLXRwMxYRezbM3oWvdhJFcac6YLhTjwEVbJyAm",
  "key19": "4k3AUebaEdE8jya2ygmQBoRGJgF646WwKcDkS4jsMZ3gthWTA9ruQccDFPJSaKDkemvpUw2K7EZiaNWcDHNXw21b",
  "key20": "5yJk8mRUZsGx4pZsfofnwVuDZE6iDG3hjgyYWFXUQqJKiS2ExUHBpCAFPS93fMKYhHxg7XhpL3GYLHwERpqmUfpm",
  "key21": "3RhdC4WjUupnzXM6JgnksAwDq22KdyrcULkHSJ6kH7xtZJtR7n3M7JMQaFAYekxazg8m6NWCUdVue93AMWYL8bzD",
  "key22": "3vwbWMtWcXEqzVC7jk1pZnUKy84iUi9PeFNCtUZCPAwnG2pgoKSMYXsKDKDhde2TpEVjWvQAupDqwp5vPkT2fWgh",
  "key23": "yPrNrxXQCnsm4Lapag1yK8FbjF57XtmpJm5Dqi8hn5CjotcfbXNV9LDyT3fXy3PZZsoocmFetFtURLMhWcYSuvq",
  "key24": "38TaJoT8WbsexLZf1xQkBKHUpGGZxgmQuPm16LVx1ZtEKwc3a8LSJrmrEpvcdBJ3c8Ab761jZ27T9cUDj7QU4734",
  "key25": "4uqtxbJX39tqdx53iSu3GvHbRsvv76ZqcBzbZX13KgrTQDvhv7Q9sm11xYuYTgGzm2LcRFtHpLawrN5gV4PBYRqr",
  "key26": "5FHGUSyDAjwDAXPFy8WUA4zsHvNZA9qWhXCaUE5H3uPmbfsDR8PqBoNZXbAPpJz745g7qF3cxEpiVpdUQMi8KMHn",
  "key27": "5BFDbGv9XA5ExD2abuZsWJBqvJWy5JmH5hqssbCgSzbEbBrTskS2he9htZc74hpVuszHaKmQ54wNVH4AjvapLVB1",
  "key28": "5xPdBjUf5Ktj6tD5LmFU3GKbMGdSrZq4K6cNdhFhuZRuDvVEb3KjFH5jSwncULaSAUsNiexS1SGYEbCoRU1Q7DYa",
  "key29": "2wj3q94uru1CbZ2irbvmC2rsVQCDFaaDjnF39JszG3XGjbE9gewYuxr4haqpGFXhEBZJKA7mMTM64WBUFsdrD3yY",
  "key30": "tFHN4pQW2RN2Czhk73YCUzF5ki45m1SwqCUt11NHyLcRHKNVcquQny1hxEG9T3FB8crsxzh76ntSL7RN5NHUmVY",
  "key31": "2e7eb843ssbYRwt4Fi35274yx15HzTfqDH5Js8MaLfjiTkAyesSWpuHF9HmbVu3idsJ4P6svZNC7pHbXr1fYrG7P",
  "key32": "3sgXSid22gHKHQ6MbZkP7VkDpctBp2c36w1cWnMYDfcVZGbCWciuJ3auETYyr6TaahU3upuEccgbHuM2PiBo1kYV",
  "key33": "2XnJaQzmmcmC3A88P2i1Q5cHNJBYGfXsFKw4U6VG2wXXVpzdxxcPBGUgcXCSWodsRXz1AEACXTRkqMFNZrQN315T",
  "key34": "2RwqPJzVGoM2XVV5rPRXsfC514NboJSpww1UoFnK3tnkp3ENdQY9s2D9yS5GeRm2jAo56qoax1ACwiMHPgB5Y8u5",
  "key35": "4VKKj3gaMgfQ21q8b6bWyUy33h1c5QVNBuRw79YAbeXUYAmCS8dT3f9HcDF5wRdNE7YxW8KBimH6u9e4hkswWV8f",
  "key36": "5pY9sWGUiqgjLEBWLnexRfzqeP71ufwXJhwpf6gjQZbaAbcEBgTLxpcKchoMYBLPWAmG5PcrS7cjXwvVuk8fBNP4",
  "key37": "2QAXu1PYhSimgWUAjnZQs7fFJmFrsPSFf7FXKusUGghMpDrPUCVi17dr3i6m5kLLczSmWz3XW1yhrhjc2R5wLSzs",
  "key38": "48i3KiDRuNE2hJxGBEnRotTkwQdYwKfVqE5H8YA8WmmV3SZrqvHFM4ccBa5seUFWeyEx7nn9G6KFwamKqwzocN5Q",
  "key39": "4ip9iNKD8oPkHDHoXdxoSim6q6FEoXd2GyZUXgVnQxoAQyhbW9Dgun55d2eEn9JgxPGqTDwpTd2EPy5sDLmZiLeW",
  "key40": "3xgty6vDueDr6hnWLxsRCyj56wCvAAaFRRE3YxyF2Q6hy81RRmjm9Zn2rsuy3VNk8UBgvyMdqNjR9jbZsGEDKv7x",
  "key41": "25HguxjtW7U3KJ6bmmcT8ZR6wHifyjphRUKougnBVALNBhbrDjnszuYUQcEU31udHGDXUD5Pv9Mw43rdY3y8GZJK",
  "key42": "rME3TGSBuiE4CTDrjZPGVKCNbsUzmcXPZrhWezYFaTppGuCs8QoP9MpzjwGF8wtxPGBvE7A8fjuKvpgAKvMJJpV",
  "key43": "4vCU3w1mxFRpLGCSUsf5EwaxRpk94DZhstS16sRTPfBHsDLqcKAF534anLm9x4qmoBdscbSrzzSWcTj6ZRQokK1u",
  "key44": "fCxcqqRuxJoRW8CDNXCTAN6yQauSsPZFjiuJ1z2qZGpTmCQhCbrbh3f8Ya7Zv6pz27QPT5JRY1eCFRdmYT9ythu",
  "key45": "4GLgMBJPVeVy3EST987HB7QFniQ5BKHbSmJTmdwWQymfqVy4otpK4RHxjTipasQezuWtebfkifs7u1CUHRiza4BC",
  "key46": "5sEd9D5CjmMjEw8LL3FrNnYeFfJHArTkzWGnJErCHGxeLPNVyuD31u9S4JKrV23NLBZfS9twSZPZV8ZkN6w4QRmH"
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
