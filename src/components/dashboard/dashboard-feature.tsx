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
    "4B5GZmABik4tucv22VDnfHTbQbnad581bhuu5GL9hA9jiNDvRtord3xmMEn9pB6n9ThSYZHzxUtfKCNXzQcvMZs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EPcteuBGZCEbmeQpYpKmpCntmppeYFSmw9RrPcFgDKE2UfFLXC51j43VFRxzmi6bP7nGPjZHaaMBA4Hw31oNCx3",
  "key1": "4yzFBuShTKCoCWbNiBip8E4gT4YGWoVMGraFediojPrxkQk21YfjJzTiTTwxE4D4TnKXiTVx43rZD8yV7EZ9cHzW",
  "key2": "55yUxGSJM1prgdapmLYU2HAGkG1vWqd95K4LgYyT9CLV7sgGopNJ2W9JGJpUnTJ7p581UYJiMdradp9maepSQu5P",
  "key3": "5XRpuwzXNBer72TaSckyxMMoz5N1Jmznj9A3gNnWuNFvuLWzMyTBnpTfLGtw79Bbn8MnrmdujdNkR2u8JX1Q7n2K",
  "key4": "2ujx2Qba1wTFw2pfx96Y2Xo6ddATopZ9S8Vu4bDcj52JuxNtzMuBVJa2To3w5nW1y6N3UEFf8qpSDSGsu3Kqhmpk",
  "key5": "4paTt4VdmomJjS9fx6MbNED9jNGJos5dSo4XcvQ24omJoaiz9KX1Ngk1JaEHkNfGYpiRmRkk4bfa6bnf25XjDhx8",
  "key6": "2R1gnsvCAPSzkTP1dVK7NjJXvCQtERDaaUHQUoE8PT95WdNrn86dNwSL9Htwm62eihAFgghTSG19yQ3yfo165MJi",
  "key7": "gNyn2nvkk6uzqfP15esNMt6GGdZLnmUQ6gadYYfQmAhqnGytrv1sQs8ZZkNh1jJbdvsk1CqtxruZcdbXQWhsWUc",
  "key8": "2WBBXDpv1MoyiGVtLtm4CEt13sFCVyf5v5eN5KD23ADNzEMWhAMmZyhAtf5ee6pqFSSeRTN53d69ZRTNrAYQgtUm",
  "key9": "4k25QHfHaJCifvfiyhEsyaji441b4ixH8ydGkDYdtc3tQoHdRZJ2NNbXD5M83coydDNLTb8tR2nHfxbGH1j1iMNP",
  "key10": "mGmbYoBXSY4RxBNmebYyH43iTPyL939sb5CbhsXCuUzgxbVC7Sv2MMH3dAbVth4chZ4Xi4WDcPda6HJV7aEZMSp",
  "key11": "65pWCCEuCcFzkZTvTjuzm28NtEsZgxxHoed2BxQUNEPkvC6RpaQcffA2TfpSbV6Qup7TRCWaTn4diHuGACrX1qTE",
  "key12": "4ZTLx5SJ2V3eiH62iY6yCjHK3TVvPsDK8pTs3txfCyx7FRtSJKJxAwY2S81t6SZTcaShcwZ1TwrSe8BJCvLcLahg",
  "key13": "5xFE9PkHznsYfHsfykb6R6sE7VcvmGyd2LsUVDufSB5f3AKzzTNwmGCSEe3iirzH5q25UTdvQWbx7CzqLnSVzrs5",
  "key14": "23cY2kvvvspRcrKagKbKmex5tqbL227h4wEex2uF7yFxoqeq1xpTkxFunuJYdKsoeirwpxPN92Ffn89THuiZPsHV",
  "key15": "E37ey4MKYXJexaP79Dpz6jSNy3R6gZ1nNCDA6c3hLU4CnjFtAmjf5k65EAa7tTTwLSyijdvyWVzJBsjNnRcY3Ez",
  "key16": "379LAZiaZmxWt8jztwWLT2RkZDdzjkg4A6dJMd5M7whYoeAPS7SWLRvBGkEp4Pv4qkwYzoLrhTRHdZG5YS3PhZbP",
  "key17": "2LHNEsLqZHaFKqnPzUid2YbRNHeTFGYY7Hf1EbScX52a6sPkDtSsEQAogjRTnatoPV5hQf2cz2jWPjPUb74xWA29",
  "key18": "2UfCDE6bKWMzbsvvELdyUzYPnqjdahmhJDqFNMYGSJokEnibo8vu14S1wr9VKxxNoVbdEN6KJfQniPFZ7LV4QJV9",
  "key19": "2FLC5GNATNxkzRTwtkqBVTU1eVa7u67Bc2njw3428KzdvCCv7YKN75RUiqUuPMviRCmGCBMPZFv1LpPp7BUr1Wnb",
  "key20": "5oJ87XZQBsnUcHf98ipkZqXnkhuxGyBtRi9dc91VXha65ZVvTHLogG31dB3sj7zksh9J7xC9K8sT9KZg4tpGVRZL",
  "key21": "2reXwkQgis19CQ9QFhC1yEc2jEeiZgPdKAepu1TxZAad5jpaZxCE2poYh7yEkb3FRw2KuHncRQ8Enq8G8yanW7rS",
  "key22": "5sCRL15tfivLG1EgYfoCZnFG52A9zXzAc9UQbnPGCHVKAej1sY9ghBgvana6z2qV52EPunQFGbvjhcuBvr1p3gLi",
  "key23": "2PXnLg3wGbhce5Z1QUSqeXBUKb3U2Qg7DcqUFT9immtRqHasPuZzSXRBPDsUBjRKwMyJM9AP35evtVjmmquNRFkE",
  "key24": "2Hw4YpSK59RLXPCGcp7vvjhVNiucigCmAtX3bv3VMTEPvV19DaJNBWXPHKkeAxti2rWQ6k1iVT3pqYbhXDvS6xU",
  "key25": "cKh4eEhyg9amaqMcHh5z3caGL5XG2q73HMYLdqSaiLoo2Ed59x1vCAsyMUeemNFpamXoVn5E5qmqs9BBKm6ixyK",
  "key26": "5tjQXhFDYwMrD6NLNhVmfRtcHaEu7TV1AndsTStnNyfAMuSERGn7ua2bGZPCLgk2MBiu19cfQqNKPyyz12ovBQsL",
  "key27": "4bhTxxwhXF5TATSFkrzme4nx9e4Y9rViNTJHD792Xfjmmmf7NQ4djjNrgQpZCjqZUuMR1PhK9iFYAUTogWKBtAen",
  "key28": "c4FiRHsRsxDTQxM4oLMdePAorW1RZGGCW25jcxgNyHs1b3C3n4uMpK1M6HRQGjLSDCj17UkFfX5rFAj5mSL3hjM",
  "key29": "2zQEFJC27LfHqzLi2Ceg3VL18bRPaRzqBvXtmaytsXkV4QoaYNbpdp1QiunKxaWzHZyrTTvgZYitF2Rj9kafRAuV",
  "key30": "5dcHScoFhs1CowguAcNAfi4FTRtMtzRjjRvPQCRiCUWfvkuiwMfSbC4FWe3ZmzLX19zh6vck8C5mEjm42s2r7wJN",
  "key31": "4aUTvrASb5z5UGPRB27MJfziNrHe4aqDfeBQKttkeCsEk2tSijzBeUp2ZRLihwgJdM48r7GTHokvkWbweL3UUfk4",
  "key32": "2GNLCTqb9W7FzJADxwT1r2hHhXV4L5mjSJz4VoTxWyFaX3NTcHgNxkzSZf7AY7xiPzX8UMrn6o4SgTZ7LG3obDL7",
  "key33": "2Njw64NsBYAs9gvuTUM3cePXhAn72L9GEmS9d4Wz4Rsnfe2oc7r9GJfKfA4CYhmmrEn7BYcU7nCx1MFq9gNWjSYK",
  "key34": "jkHpckyXfX3tYiwN3PeftKJPmSV8MYbiZ2dHGpZz1twgsvUuUgcqko6jCEkFn69nt5RtRfkZDfCM4wGGvZMU4f7",
  "key35": "4YZmyX2UmsuaMSdGdhKmrK7dLD6SJXwLPvCjCYozJWuqxZx5XEnPKGCtFyv9QtfoKSEbSMAWAuvQfzAxuhrx5vY",
  "key36": "5SppNrRLFBpC1DgMaX116Jg9sb8bYVGNPZEfELbqnGUv5vSuTxdr6tfowAoLohZwR8MUbzAMfm1UU6hkVkwNdvZc",
  "key37": "2TyDbrx1dVCTSdQmQsPxsMyUG27tpypvHn7LNoG2ZPpzkaepo7GLmvrLx7BSsDbmtpNWUXvrjScKPenzMANavFiU",
  "key38": "4iz9Ua2Z2GZQUsvz8NeRy5WMjCHbXktn4X2fZRNtMnT77sPiYyRtoVbwaDbXgnc6nfuWzZpKJQ2BhB7LNjxwtzFf",
  "key39": "5CbHRNifnZsyTSJuaBRNd66qDnC3MfQPKcVNNqVjWgVtF9WXMAAJLogoDcDLWvSgT9ehMLprsjcnsLFz3X7dqB9G",
  "key40": "rbiCFDqYpwaVtVBUuUN94swBjooi5q4vTajvP6Mq3ruJAdagGMLsrPqjFdjdzF6Mb1t8rPaJFaF3PzpyvZNo1ac",
  "key41": "5iq9Vm1Avze91qoiusTFS2puoFVHvMkixdcP9upbhcWWB56JXRmTUg3rs2sT1Z2FrJTEwUrWKEkNs6d6jrZn8wmn",
  "key42": "5Ep9wg3AsuWr9TZ8kooiRqWsU3hYmwXn97mwyFSpjTCVKHda1AkgST3USffEzt5hPVQM7BvMPQ2LWCHFCk5bgTWp",
  "key43": "VQm5EqcmhxVJqKsigR2GbzQnUu3PNVyT4x12tdTBQrNYCeg7G5JtXh5bAF1782tjfyyGmSoJgorBpcQQAqtYzBS",
  "key44": "5MQNbv5xCG7sCKLGXZaR5jLC7ZEfzyEtvpMAz5RqXgxSpmV9Z7F6BCaHWxig5vu7UTkmUh8BCsFnMAJ8LDtkRi5G",
  "key45": "5Xdy9poTXdPtYHd2rbyxsavNHv62ENGkWozCJ36CUtVA7GBVVRHgScxu64bTaoYnDzS7tEN2CsqVjYmPRb89F6ce",
  "key46": "EyDzKZzF8hFRMTx9AfvaffuPQuw5BPZePrKsJp5zqAKeZNr4UvBiddUd9Qar5Cb5RYWpZ9v9Le8sdZMa6CU8xcu",
  "key47": "2eVLXigyNxzwDs7KK9VLPHajR9BweYEaxJvRQRgRKjKquvLkdaHXMSpWYqd5kahxr4fwKEmWDt9V6WdqAw5UVJnr",
  "key48": "5JMdbsHBVutU36aQa2MTMFyMUftqPvHDh7tbPgTsS8DdS3FRcHYTEMLZXrqmqq2i535WLacZ36wzjffJXQT4vuzN",
  "key49": "3sng3ZW6V5dFaGrg9LrydQyYfc2XXitcFzcyH4EoWEnLU3Dwr7HeWjpuGZgZdHkrkfPCBP4N7nD7EStNqihQTTyQ"
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
