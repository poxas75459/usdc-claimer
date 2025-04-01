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
    "6581HKTvsvL9MiVs8gmVgwiuMQpW34tQ6Kt6ssgXzneTVc3yuEp1y3HuxBbHRW1kxT8zoM9hEKmk9nWrmqyib7N6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CAsqV4yCCnwdQvqbEcdLrCFbSxPxWYeXRf6y7cLRvt8KzQapxchS3NqgahWyJW8nrKxtuqmRXf7wYGhmkTgNe6R",
  "key1": "ak3FC8A5iGLnzHo1t3FthVMsj5cgcLbPEozPV4NFi7HtLX36R9A6eYuHBHpxRDkDrf2Q9XouhjWZ4XfRSoc3GW7",
  "key2": "YCbUTerQieQKhyikSCTEDFYXmvhqPd6RdidA26YDZw8jik5G7h2g23B8vJA4JttpBeRDnAz87LmXrXYSbPkFy7b",
  "key3": "3P98YsWowuJSvzJNF5WBsj8Y7RSYhPm58c48MYfrjFZ2sGSs2XbjP86mnvDWd6hpPRtSorNMjgAoNGadX6fyYBUb",
  "key4": "4giHy7NU8d5JrYyrmQPHe5qGbBuHqwnso5s14epStSY5sWS3CKxgn7RV6o4sx3A9Z73ez1haN9W8qqa9mJbamuEn",
  "key5": "5d3pzUYJ8CHJQpYC4Vv7qgs4MnaEGMkNwHbAahZUFsLVeiPuREE1usnDzHrAWoa3WhB9TxvuZhjT37p8svNdjpW4",
  "key6": "b24vPd4wnv3LvMRJjg4Y1DdTeTMxQWqHcHaar9Q5XsB8uxecKaTVSxDsLtASEtD5TTcLa3jB1mnvTizmAKx7mxS",
  "key7": "2soFS1EZ8tZYzCkQTeeUvpM925buWU1p11EuuTN3WWVk3PGyGTK6kUTgNh82a9UxoUk29ZcRAX4fmpp8c11MzYA6",
  "key8": "vxTCo2b4mtXPRN1Sep5UrT8hNVKSyudYidRfH3Afijg5W7w2WE2Wus1Fnopbm9AEb2X8R7wwYcUe28Fx49LrnFq",
  "key9": "2TQSBtrs5WKze5yLygs3avEDCm6yBgCDoHZPnYLyRsLSpYWAF4xVo6BoNtur8qpjvNuaYZ8XHtfJ6N8D46ZJFM25",
  "key10": "ySC1fUaYNFH91kTnuVV8zVBERVyDjAsXgvbfm4qJYGjJQfeHm2vrYUPccwoDExfrz6jbZS9bVikHb9U2Sh7napb",
  "key11": "4V1CPxyiERcf1KY9hdfDZPeDMrhPRFiTzgz3GDcep2dbkDbsNnr4gYZpZqG93fyfRvrFunQX2L935Q9VKfy3YQuh",
  "key12": "4imUKzmGYh3GW7PBqne2goAfyuCatssWBNQuPvFoNrt7vSxSjjZhxuz8Lch5uo5Uq1dmY5Kowf58oayAyoQhwfi8",
  "key13": "5djwWKZpbr3s434c98SAdRe5ZHneEj7LQcgdhVK8iCYk9nr41VczBjcfgUXXP8Sw7SNMNdHy5xyy4LfgfyhF9UXT",
  "key14": "5dky6Y8meyUHmAuSzUaaEx2dp9HJPogZWJ3LqcUe422L3Vn2mLZFXVEzAAp8oqJDohREnM8ANwXjgeSwp88ScjxZ",
  "key15": "5TPeX7gXM9WGzjvc69Mgq8Hav9pwEd6YnLGtvz8hVSLxKSvq1Tbtpfvc9wGV7THeSySBvn4kUsWBnhtYo8jw7grY",
  "key16": "5HR7i8KT3aZC2ktj4rUD23JVELSYAbFmNNZvrHBsum3QLBvSZCTEHALVJXZ539UEQws3xbgYQ3JboY8i4gcWNoot",
  "key17": "5nN7FNsYAp5FwscZ3RwFoQ3H2LRjXGF7QFyY1ogpgZJrWBnf3rD5MFVBe2GdLNRmbWMD4hG61G6244LP4CQCuPSP",
  "key18": "6m2pWyo2bwHE7PzoVm4VYSRQexkWfRLKjdRm9Z1BV2hwKE53RxgeX3qwbCw3o1W3ZXRU2L68bgx5MkfxBtGM8JR",
  "key19": "4KNcF15SFAurNrxvtjjvnxWeLyG2SGizjB6tX5K6webXXLS75jiuYS9t64DWLCCjsWJfjjFtHkqbcKv2bg5TVSpB",
  "key20": "ok1x9i8t2m3QyLbTmfGLBafqEiyQrLYbBvcPwb8jKgiNSKT1xBBcxHsxTovEC9v1kYVCDNxNjvhpjfTt1tNwgAL",
  "key21": "4JdppwGUh9oMpgbLqxRsicPeDvKQyDws2znRB8iEJ3qNBjcfB2CPQ3mBz1wtBPJbQdYnTKxRuTiuqHYGyiYjGLoL",
  "key22": "5DhWQXCu42VYEFHbGcKEijYmS1HYZUeBK2AgtyhqCTLAHuKxv9JhZafwRD4hM28ua23jAVfaz7DDjeCnKwo3pNUa",
  "key23": "5TF5pYYxJH9zzZtYKnxDVanPjqv4aqJtewie5wtiP2Z5pkDFMNUdKNXW1piyPm9RpSTpLZUopVdDXGzzWUny1GLT",
  "key24": "2WbA67GSwPaG4rP9wpyGrXBAJwCbXZEYAcbPSaW9yW5yoJSXtq1MmECWxWan2YHKUSuQ7wSXoaY5BruKZ4URRV95",
  "key25": "2RfZRfiTfRSkBJGbEv2hd1xqTWRjLKazLo3cJ59fJmSbSwBZq6p79UATHjdRvhGR2RoriNhFwGDd2RKodzqb7G82",
  "key26": "5E4PsmykwL9XquchnLuHFqNVrkAVkHfWYWeECTRuUDQF4NqZ8iZiqnR5ajxiPGF264Pj19vBDUaKuheJae4DTHC9",
  "key27": "Zs5EnnnpWdQ8nU6FC8Ki6ZRuQBjtzt8PKGv3purD1D7gchXBjWonjDxYoq9uvZp9p1nXP178D8sPLS3aRsFZ4bc",
  "key28": "FvBk1fDmiNRxJxKVHZaQWHvCaLMXRk3QaPXJLkhjY17RREfFXEEPtMceeuyEuaEfqxHxMSpEgHjVCfhVHLoe9i5"
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
