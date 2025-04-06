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
    "4iGjBTVWYo9VG6fp636fKpL31rWqzT24chK6vZRYpMtsJzCFrwa7JLspud5gLyYPpah45VB4BEtXwX5PvsdDrk87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AFSVJ6YjsNvxq6ZGnXhmi5dBTTbGwrJoZobtnRZM66Vfvi13D8eKKxb5Zzd6tHbhtg2U1D7Pra1eDo573EneUSN",
  "key1": "3PPig3wV7Ct65zhx2QDAZ8iYC9bW3sVD8d5giXriqnYxnn5uUZbkKdKKACEG4EHYEJqGko2Bf5cEAbBgM8d4VbZB",
  "key2": "d36Tod4eMsBcqMRmcc9qraqynkHnbkSPL9Qotmbtkb33TpWGeUEMTFoiafF7Ca41nRf4FYNvfNQFKZEcEYrhdHW",
  "key3": "5zpyCfvcKiaNAwcvK72oFBuSSqXSUHbiGnv5iGoKShCgGpHLVWjds1nXvYePZcB3jcpL5Khjn1ZxGYRQtdHt6JGS",
  "key4": "46Acqs6SsqKt6uYmq5hSunNSUY5nw46jkCdVtTESZKbPBwTwVC9sXHXFKwWDZmpeZ98LDVvxgzHq5oxCR5Dna4JE",
  "key5": "4uhdtzuepT9b6VVWyK43WgELra1hb2wKxZ9HzPqeMDmfRje2MEk9yLGsEX3XQ24JUqnewdcuRNX9pmmjMBjiymjv",
  "key6": "CeEoXswjhwZwP8m1LPw1egpcG6XZ2fNG5zA1HqoYqRD2wgyBJxud72UdzXQusNBPwJ3QzNs1zDehpehpL6utMbe",
  "key7": "35Kzc6i6GAijU287P8wBw3KR7x1cv3QvLwLoAryHxZ27ecqJC1dGrrqq9CXLYoirUfWn9gdxwmwgSWVRpGA2NrVG",
  "key8": "JScKbkFXAFtkFMQfqKKPvAjm8PE6vMPRqePAgwdEorV7rSuEMBiqhG3g7uVNXAFani1k24FwVSnajjZgjn7tSxq",
  "key9": "vxDqjg7sUTuqqmZvdQ2qSCKbQ8qwhc4UgfpJ7hgSZfuthJxsEGF2c7xmNop8RM4gWGewAcYBuhhvJjHhJTkGmpX",
  "key10": "PzhyvDr7EVaVWspYhpz4F8XR9NVbZzDBquZ5KFyy1XEBa7NdzwdeqPe2Lh32432bf68mNd6epbDx4NuPg5QL4Mb",
  "key11": "3P6BZcdZkXd9jH97fW667QuWjUyJjT5hpSh8KgB78TpLRxenYswgqxTqyGpPXeHsA667JXRx51V1bKAMyKv1u16Q",
  "key12": "4uRk5AqoZgAjZv8VxQB1tBkiKU9oWmiuBmuRJo1arXvUfuwXUVUHKMx5hUuQ6SNGg2957ZzstAx7Uv4JCrpHEgZn",
  "key13": "3hog3nfsy7ndncPH9HWiy6HwTNfrS1bJNj8hV2BG3y4cL3QertCPvi7Np5LNDJ8woQTH41id9mSMXBKrDxAeqowR",
  "key14": "5qGSMsCVj2VJfCiLvAqD2YZ6eg2Vi1g3BgeAZPzZ9eaFeAJhmTd2kzYxzuCrXQ6EE6YA5PyqJ1m7sM8sCcCyTg5t",
  "key15": "4KDZa17x7uBgbjBXQ82GEof1gShCHv5kSUhyvszp6sMnjkHfbEe3kZ4YStwQstMGSxv4pyGwRgCCrVHGPs5Udr9W",
  "key16": "5JrrVFxAKWZ17fvjyiFg8Up8DmWgUyPZbysLYd6NAKGpgLStUt9Kb49B6Dp4Rn9BUnLFnmyxgN3s5opGNEZK5Str",
  "key17": "5P8hqDtU1pxzVqhZxoqDoj87dCvEh5D5ENwVSf1BLomXKLwVknV1Be3jrZS63cukNj2fKonAJ7LzQGvezf6A9PBB",
  "key18": "5rLg6Qwn3sA9Xaxxc1ACwBjQqi5ZABacDqX8nthxkQUQhUN76kJeYi9Xcgayttcqi8TQU1m1E4asB71mbzNKo63t",
  "key19": "21TZ8QZ4JPqfxGgHG5gRmxLNKPKKTsv9JWmVPmimUvECFTeFehjYukCNH9NRGyFdFKsrShYMMyFAGGeMayUkuS2F",
  "key20": "2mtncGV3WEQNYCGA6BUX9FCy3DGFV7mpJFF7m7ZweWgpiGjySRANp3dNTRNyXRRhHrDNCaChgfBX8nLhjGwWJKhm",
  "key21": "iWWwv9fnSHJZjU7vedGA7uc3iPMkFjQzSZ8K552CT2EWKZjWWNduj86a1GsMw77HK2ECnFFZwPyUJByg8Ytpcxz",
  "key22": "5ZZ6VavFx4dsPZLNM8STDtXft8MsjnPRxM3PLvZrPvPXuRbS2uXLav8jDNUFhFJ9Yb7D78dk79bB8ZnyU8uhmhRu",
  "key23": "2KWEC4q2WXdnATDMKYbspe3AGuXMwbNftSbg3HFWEkc5xJ6wMZWcFUoLAMwkwRuJJbvTSjknGHGmQkXw74vEiWcD",
  "key24": "2qVo2VXyLwj2H9bqPRq63Mh6uT5Vkcm3UvJw2hRqsuicViBmesL33ACFFDXiLabdoi1zPUVSQSjj3jPed5ytNcS",
  "key25": "25u8U9huUsKDSrgqr8z7bwMWA7oaWkJBSqE3DUvFwVYhDCgxAmzDtinWmhJdVQByopvTDpf7De3TmzDkXLjuEuLH",
  "key26": "4AfFSvoZQP1WQdPT2X5nJ3Hj3DsLdU5E9r1RPCPDB45oxdXu267m285qxtmQ45fWXPW4F6SN3vvgvPxBmDCQbdu4",
  "key27": "5E5FutdXpyP5siB36mfEuLh1A6x9xU46bZLpURwADzNd3J4wxnE2ttfrgoCuZYyyUCfBdwjwKckgPbWcQtES8t4t",
  "key28": "5WSyZvhnZx8uidtryP1J3ccGUDeBgQEs7P9XeVspdWNAzvCp2NJu6rBqhYCuDxeLXiJ5T1PXTRixnbSdxRNx8vAa",
  "key29": "5iv31FBBj72NYhiP77DT5sg4tq7Spv1xcYMAXYAj9mG6BhQ6XMjSNx36if8yUXZkTEKo9yauWCGoEeEAjFcGkzsD",
  "key30": "2ErfrNhTycT6KQ1WYMEGei81izenTxHV1Rar9iMGfq6AcPAE8WRSTdfjN45hXvJQoArGkPTnTmcjWQNvTrfNYk8r",
  "key31": "41AQdhxtKPqcM5LomGwfbSNPhvaFzLfSDqug5sT9sogcxXRtiygxtAxrboRs9Rpse1SSsCDgnh96aCFYSra5uqQN",
  "key32": "2aCvneywZmgbja3tzdDWrjpvfj8ThexGvYoNkau9xsFo7XyojCGaJL2aJ2RtwYqSpbjiUthLyb8pvh4xUnHFj4Ug",
  "key33": "4HSvMuJcNz59mDQpXGoDNDjAbjRrJ48HLFJdLryz2argQ2211j29F6B9pYdoz4EFY4dUTBdqovGFUwQsLg2vLcv2",
  "key34": "2ESaYydQSQzU9i918tQurs21rQ84FL9DLhMVCuvUy6pdqAqUQtAo5U7GrgKgmTrfCRFGEoW9rMJ1KKZeKqcmiH1P",
  "key35": "2zzt1CfCHmN55LRiRo51T7jugEH1waedAXwYx2eXvLPYqnPUXTvqjyXjcfGVKqBVFRRxvCGyYwRM8sJsigv9jqpm",
  "key36": "35Zt8p7x7H8TzBDUQQuofYiDtoypDp3XjaUj355aws4FSid7WXTaS5CZhcENXWkLgccwtrXVmwxJKRmJh7oeM599",
  "key37": "3bzEw4jkrjPJjvLQ5E2x8K7YohhjoCdreGN2714tYixwC56j8SZpfpiz4eE3perU5tW2E9vFsfmRM5AsZ7px39dW",
  "key38": "LGbd3joSRG7A9e61bt44g2XZVxRXejYYt1ZBepvoBSFuPP97jH5cTmKQDnZGL8f75dGJhJcrwg9vc72dAvR12y1",
  "key39": "4xCj4juMNug5P1nbhV2JxUfhCd1RrQJBVCXpE2NbBtBu1S6xnJizJ5Tou6FVpDGuPm7yTwa18aMT5KVeV4GREgo7",
  "key40": "2c9cVe2RDovzBciyW84oSmHFW3pRYXscoQVh6jQWJ1Wvx2M2hjiCyugcgXezLu1HX8aXUjnVjJmjMNtaBzedM879",
  "key41": "3rKHSEEE7163sKyGVqVibZpw3vNfswGZEiDxYkKuFMmKCqYUYYvwRpURGFRsKPTJCmXENC4WJ6boah75ZD5CawDP",
  "key42": "5YpZy3CiBUqEw5Fko5vB3Mwgrxnx7i3XwXtyE7YqJA4og1ebVspYjREAmAzAccr3mLpRvheFfqXXcaXEt23kaqQ8",
  "key43": "3twqZRTBUy2pwri7jFPr9ZWR318iCogYSWQWPtr2rVazBeCRPDFD13CoRsTTCv8NkD4T8KAbUh2qg9TfsngKuWRC",
  "key44": "43kqHs1AQ8BjS23Ztku4GRajSv9cEm5ibCyh1bsy5C7R8iNPduqnmzU8h6puB9Xiyi7UWdRTsJ5WfCxTDEgQaywJ",
  "key45": "4JjM3Xowebk2sYnZanaatCkRoD7zenH98CNQf3dW4pieUMpcrQnsEjN3fmoLHG4K5HHCoUXbd273nMedSJgm38N",
  "key46": "2zoEQVKWStQjLb2qH6YVuHRzF2T2CHE9fD1mmWcbaRuvkK5RFjmTNTnUMpGnoytVE57ix9KQDpYV9BzjwYGnLBPJ",
  "key47": "469kfQR2XPBTUZ41cXzcnkKYGDGe1p9pVBb9mLgUqZFt5vsLDkkhioYdbq6qBP7bUCYXMu6Z75XMSYyWfqZnkqVq",
  "key48": "5sH17CcENuVManwvczYzR1MtB53PgWE8X8ADdvoTfbQRdczHHzABBtsJ6YnK9ryusxQEUXXodFqXLfc1gtqY2Kmr",
  "key49": "VaScrX7vkpr1DyjALibaE5q4zd941zuuwpcLy4Re6yy5oVnWYuiiQt9Czy4yziSRheSiMXR79KfBv5cyeQqLvwQ"
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
