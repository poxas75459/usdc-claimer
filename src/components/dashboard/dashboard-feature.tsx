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
    "5dLKuzepABi2U7yfBtWosM2xuWSzxHKT8Tfjh7B8WMdUGeCPpv299mnShUM2gy7pwtCmb2Y2GFrtShUQkx6zV2zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mKMCU5dZVFC4WCrw3wsVZsBBYGsGnF4KbnfWyeC2BmojgX6s9P8BQfEdMSrLk98ckoesQ2LwZrZe6RouWkUH9Xk",
  "key1": "5qTvSxHPkNaxYtvFQc3N4NgPRxrbwGhsL7cJR6P5RyDp1a9iFW8EdTE471KLqiQ4BpYkpQD7Ha92CgJ9wea8CtAF",
  "key2": "4JTE8rbtwhBmLPfhAy1EkGD4gq4y35V7mdK2ta9J8jnjRv1haFrD9fzy78zKpB17txEfkERFzDFpFPb1QXLEnRSi",
  "key3": "kfzne2zzWqH1jkqkQLR33dRxDYxazrnE1u1Tj4MHVG7kFRxpWsmZkVMkMPCHss5rYuTBD1NAGd7gw8TiA6TRGoL",
  "key4": "4kDHGTcEzPeGtqPJeQYDL1AKNxAP6GRfbwxe89psCaM3ga7cigJ8WdjgRiZzSqkTcYtScGKrRo7GRePMXKxUkACB",
  "key5": "4EWPVGpsaeqPjLuxEXwzmLsBJX1XLqBw53P3jep56SHPpLmC5vaVKJGn7UxA4SJn4pKPZsSW3uS3FT8jxhk8kNyP",
  "key6": "Bb8AFxyxzy7SE3QyDSHHr5B7N3TTFu86AKLkpTY1TZNFVhWLta5P8TjnMF7RFcLv7t1LQkiPBXrTFARhmGDEZD1",
  "key7": "3DgMtLBKATLHpjHYBuR3rAgne7QTDAF2uFDb4XLXmAp7cvDj9m1fdt5JHXwDaWJanXGPgNwPuqZsU4xgSgFvAN23",
  "key8": "5fYXBFufiMV8Sqb2Nqg9RDJygjDfh32AL6WDtBZ53Yphr1doE34dkB5ZdrQptx4cZbcW6Cn8Pn53nh6qLpuejaHF",
  "key9": "3EWc1mBvVPhcHYjGL84a4iKLF2D6N3aNuuYXsmzKg7PpqkvQsocL4UcFg6y7wJqT48giLJY6bNHbg87yU9nXeR5u",
  "key10": "57zcUBhHo6U2iHRc5ndtfpUJ3WTiwy8VtV4XbrfejZDFkuZizmCiKGhmNDXKNHvjjwxg5ZzCNDusbdWBTdh3hrpf",
  "key11": "bt7m6R9wpss796AfiJ4caV5WvJNmrELte388PTP7eHwgoNfJ7MrwiHdFaJwtmrzx7Lao66WAySn8JmdRDDKYQeP",
  "key12": "4kmNiSKjzopkVTC9s9VmPqdK2ErpxnXLeLiXLJnybgnDLKkdd98s8ofQ6AQsQkgU5xhQ8bxtEms2UFXDCFxQ7ft3",
  "key13": "23tUGXPcJww6w4SN5EL7A8UyNBZWVwb4HAymJmXy9zzWMoQzkAbuRRowH74BwXaApqfoDyBdp566qVQ7NXaN1aXa",
  "key14": "2Ei7UnnU9tabiYt7o9e88TjWdsmAu3EGQR1bCVDM4RCMZDeQjvFvSvHisUd53N7zpjEcqw8HtFHEKLGVvrcUTRgy",
  "key15": "28EdjQwWj8iTdA5E5BC23muqpTBfDQ8RfvW7Vk2GAGNfvgUi8QvytF2LrZYfbmgBTmstZo2MyqeGLiuUzQou7W7q",
  "key16": "3W37h3bRWK5mxdctuQNoxecLbrBjd1oQ141PJ6WiywezpBkDAuCiujLtUMHfVnBTe7iGVFe47LfWCZmx8PGwMosG",
  "key17": "4eZgeG4dzQKLktL2i9HHdpJdR2aPTFbww9urVV2MZNKPncZ1MqD2ipVWuw3WzVePrfAcNJE2AbBztwUnK6BJidK5",
  "key18": "5H9nXDwbCGsjyys8C8L28qnTB7pFSZfGuivNB5xSpxF31zP4HaKbeGxxxnzwR26cP7BwkRQVNuEqxCrcFyP9EKzC",
  "key19": "2ANdHDzqTNDGuYqN2fbMLGGtF1pdMYoywnPjHMa4JxnWAnrUWMVrKBSWsH6id5UypgiV3jZgh326j9RkxFZY4C4L",
  "key20": "28GaNrMwt4YZDprriRRytD418xUiTVDvVPSmT34SeJT2HNTVmDLFCYiFcayJqxd2ks5XH71cTiDB9cwD9mY1Aiig",
  "key21": "o61tsVEnzFqn7dg9KqGQH36qgfBLKguM9gwgVvF7njH3dh6boDwFfykzuZajtVbZCd92CsZv6SWTwthSHkHYsED",
  "key22": "5kETGNVL3G4ZsiU8RaLG9XYm77ugjbqXHJSbaCsCy3FbVnnvSJbniyjckFenQ8WZJAt99fFvcMFXACoJi2gu6f8i",
  "key23": "53Q6eKas8cPAUsTt9N5eHkxGC7mngJ1GiiYXy6YcyHsGvGcMBknRw4VhxUehpsEYFpw7Agg87JHe5v3Kx83hbUi2",
  "key24": "3kGszAavHkyhsJtwDGxT8jUAg7FZuEfk2Ue6MLWENqEUgrWwbr5RQQiCfsqfDBVzjwpt8TCGq7rpZZ4C7cTBPEBq",
  "key25": "232DrMBext6q4z5q3nCqvWYZk6et9mCEb1tmJCrFrtBJtXtorLEkyae9SLaDqPCoJzjHWqKBkATxu2mLSmZhMFBe",
  "key26": "4sMM6SoT4ds9k83yMv4QxT6rjZFWB9hNkaXYjKFYdewaPJRobnNW278z7ML4oj3PrWpjBSfdsFTeCLK7x5U4Pruf",
  "key27": "21RhawcTowQk42CV7bwJRS4iHckxSuPycMsLDGshBB8bzTd6XQvp6MfmDdo7jYdT9hyZV1NjYcT8pdw5sBFZbwU2",
  "key28": "2x7TwbyT5pE5frzkshqR6VaUfiKyETt2JjvJZ5VZtf1aRjHM8NTsJ1aFpNJ6VqvuVPZAfKpevbQTbBFSVWGLyNnT"
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
