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
    "5Hjn3fKAK8TixpvqDSsJLLjkVyhQHSATU5C6bGCeFJZZtYkGgLrqfq3hrsvsCjc2BzfQV9FjqjhszRyELcAYASmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E8BNEYGAosRVzG1Fs83CdZtFWzXxS9Rf2VWfGzrgDwYdrjd8utdVtZWJLXBjw83dnhEysaFpm4DbbrXkHvQ1VDC",
  "key1": "4o22JmSzVzcPcEke11HRMTsJnm6jgMcBPewPLx82rnhwZETvdsHS11fKfQcEh3EXpjvVdquGvi7H9KXJNZ6HRnsR",
  "key2": "3Lr5fq9CoNAvahvEmzg3JoXBugiGBU4Bi7jKt3qsB3kiYoNbdZg4RKdBK6NFiHRvCZ12LbLtgi9iK2QP52h53rfY",
  "key3": "27nLoXkiTNxghqhZkMT82zaXcVXtUU1c3krEpZDTJFgQ1NFnwZpskteMR6nuPbmWy6GoAsA6h4FFhmcWDW144YnR",
  "key4": "4KyKKM1TmhspaeofcrSacsZqMybQKHaUKnX4Hp5MsXNTTHVoBDBH2Ahw1Cmqsa7PXz26jXAeHUM7aPQ2G6bNBcs6",
  "key5": "C2Gf3SkH6nvTsy3sckCpeC3xcNKNgic52WTj767m6SCfN6DK26RvoXacNeax8PBKSLWs5RPPnFHcS2kjVgv3cub",
  "key6": "4T6pajsM5quL3879X9kLGbzAnLJjcSzQnFiLy7bKi1BSBsJLYCMapxbrRK3dFaW1seijTpSrycvkfHcJDoPaY5kE",
  "key7": "5xcLu21JY7dJFQ7UccszTmdcrcrtPBwqytPTGiCbnnLpKKxLAArWNz2kfcTwmd5RvuyboKuewwH5QmjXpxKDduMa",
  "key8": "3vkH9Cr7Rmqtd47ueadh6RyzGrEuibF9qwnmhMo458Boh2myF4FX1Yo5DYKZ28NQKgn5yCqkjPMMozARoMLR9Tj3",
  "key9": "2bcnSNegK8cj9bB79ghzKRF3Sjroowfp1WMVzBYHZHtE78eue62NKNekzmAnoMxQF3J6tppiVFndLU4yMenWgiWK",
  "key10": "3LZB3eYUFEf94obNsMzQ1mqaMNe2CcdEjUA98Hvb9abB25rStXNnGKiiHVvAdQWAodHarrRSuMp6ZRPowFo755Bz",
  "key11": "351XvtJhuDBvqD34mE7PTMHTHqhVHx5auwbRaZjWgaqR3V4j99UmtvEsmE1JaGmPFweR6anYE19RCtGG87MuqKFS",
  "key12": "2sWaTzcZ9p7MbTMsY3H98gcopaqe2hvw9iMMtZEPuxN7qb89jK5NjzJr9Tirw3PmEaCtLtfYzy39HRm2CH7i1XgG",
  "key13": "5btdFwu6XWbuVixXqvYW5aDLzKficsESeUUtWQyU3CeVW2cRmc34G9tRQj2JGfXyjg2Y25B8mkx4fGUW7J9nycXC",
  "key14": "55ygdjwjBDKgJymSnrBoXBsfrahve9kTGYKnWtxKX63in5nQbWyAhJGHV32LtW4U5XL17ZXHGbL6KYCkhamFFHRq",
  "key15": "52MFQTuM7LsbnmrLABzBrpQEqLFSE5K3aPqteAp13UMwZUma35vkSiiHXEWHF8j6gvBF76EUqenWEtiyWoqZ2cfG",
  "key16": "47zzPiUeeMmgcV9fgVL68usfeBNtarS8frpzayta6iBD4yKWSALhDsdo86GCJ21dCX9ckPkiih3GKhzTvUb5zB6d",
  "key17": "31TXSrwjyKvpoTQGCtqZ1CT9S4EcvHdmXaL5jSm6y3cDSAmuyK2r9itEZ4DeK4fVLD4sKhjhSdRRPpAKsTQTCTna",
  "key18": "2KN8sva71gQxpGSDN6av2b2JWF5RDp5ThXa8Mf894KiSrsqhKFfCNyyrWsbt619GDujRaAd4whwiPriAimHukz4y",
  "key19": "2mV4haZxtUWjGHtxEjMytrzwKSge2qaND8Py99XELXzNRHsAwQ7hRh1DQsLPbhXUSc6caVcSTPBjE46GFCVWnHDR",
  "key20": "3xpgK14HziMHd75rimyUPNvuKBBdg89cRfERvFHMj9BH2WFzfWy2fcb4GqJ3efv8bM3XLEeRjMYxo1WJejfNBBqf",
  "key21": "KbqcGCL2YBjEGyH9XA4HLXLsKdBShpBzEqb1o4gEm4aLZYituF6d4kKc8KHno2D2Pebbc385cXugGB69RzYsmFy",
  "key22": "3jpSF8MDcEWgUxq7JhKmxKde3SZozJdWxTLdxfJ9AYFfkWAJ8R9g5HDcLmCD9xAfp42nDov9ECfDKydxE6vkBr9u",
  "key23": "4CQGZeXQXqh65L3oG9NWMJxQuxWNdCoqWosxzU42ftrWDbYzujMsoSw1suZ2k6EJzWczhWQFLG7xMxUKea9EPjWU",
  "key24": "62VKX7GQDAeDDdA9wcUoTntrz894kzWGfe31hvqnF8Cdk44LPhyCkTvBr18eF5axxrTPzAH8ZzXFh9XUSRBFBn3d",
  "key25": "57cqppB19hY1mLrEFBJDoCyTMBPv7UmFDmAvSDrnBtJLVUiowvaW5HM5ryfPuVRbHNGnAAesL5fhmbVsPUapKuC2",
  "key26": "4mUoFk6iQ5Tb48a5a8iUb5RkWkdN3JgdU45WeHtR1xqNiZgXaEQxGrVRJUpbqMXre3jDtqymUbvpadoZsgL4waKL",
  "key27": "3uCT7RQDuwrKNsGeNwQm2xkuVcv7gfN2zH3VSsgRYjH1yT1b9bM1u7nzca5N3xfmJMiF4UrHqtDyk8qPcK1GZNnu",
  "key28": "W9dZh7ZjnTUrsPhhgZqaPn9cCdQJweBTmcmLTUNfTiKdhM7SPXe4Xd4GoVdCRHKuhKvadmDmMCETQe3dBBsDBAd",
  "key29": "67oQznVtNGxE1GWhhBRLP8bbaZyucDv8FH2ZNG3DKQ26AZVkgiMhjc2gFKdVKXqqmc5GbsBK4csk8UxDJtFveZDQ",
  "key30": "5mbtmUnqAnJU8wwDemjuZCq3r5wEWDm1xue3XYxxDBBYcbh6td21ig5ZbuCfY3aSsJ5Ecz5c3wD46F6GZrNScqMn",
  "key31": "tnt67spPu9n8wbabxnPSAHC4Vd1aa6aKQR1QywGnwdH3tNHQ7xFESZ6SdJK8qzTe2qGYbmVD19fx7uWUSfqvh2h",
  "key32": "YS3MwBxpURP28VfK2bSX3SSVLKeqpJDwquih7VPz9xXGg38rRxDC4zSy1KfaV9RT1QCaGHtDZYVtfNYYycgHzqQ",
  "key33": "5Vz77tVvusR2Kz2oE6ADpy86oao4txCdRHiYqX2Tu3v7AvyFzmAUGc5qg3TggphX4uXdexhLwHPbiLHZeY7Gm9Cq",
  "key34": "5gAFXFShbYbSqQ6hwG43k24d4RrbnMz4PvMAEQx1EQQoR8JskMQynasFqmmLD4A74JiYMZTmmU1gtQ7cUGKKzEiQ",
  "key35": "3tmto6D39hBqEDRoR81sLb1sq3QVVDXjbmyVyAkUvAxdhfppeEzrMMqPhFF6XgD7SEhFe4CnSbUMkxVgPwd5Xa4F"
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
