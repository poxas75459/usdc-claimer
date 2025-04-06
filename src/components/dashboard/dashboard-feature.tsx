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
    "5PSnhwFSNH3StqWzgsr2rXmzsCepq3SEipsbKiJ2TnfM54zXBvmEVT74cmUVVn2GyejCT5kLR12N7bqsDrqmBnrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z6swdzygqdDTFEadPLCyTaGJEdRKmzLtCdfFyjCdb4kf4dvJh1VUF4SWxegKM57Lf2GLtL1fTZbQb9XoM1gHAUx",
  "key1": "zSYke6wknjtAvv5PR5nd7xXqGYVWxm785Jn2oUFeCzUAtFsW13umSvSfNQL37unLnfmjFfU3cY1PFWiw3Zu39Xt",
  "key2": "uYgQrAqbEUggwMkJWM8dYQmL8ZuMQfpwr6g8Qq4mpyBu1DXxd82RvyfEzArFgypcfXRN5vEE2zQWHUQkgcbz55P",
  "key3": "5ohhE4qnaYSmMdHS9UkgHTDUhEEmzZxZjRjdwFAbVr3A6YpURyNMCxA57s95Gpf4k6dEQAavmFGz2mH1vzviRbJK",
  "key4": "24u93Xp95WtV7pwSQnUGZ3R1RPHRaPsNsvu4vdgKy7xii49n6C9trHqPmrESmLd5w92bbNtGcPFFqvKmNvREVE6U",
  "key5": "5hu9L9A1RVsWtdh9oNaF1dBrTeFEsDVsLYvSHszMyBEhDVYQLim5L233TdC6Ex5MfJGN6PFChAZJMofzJSBqF3nw",
  "key6": "7aEor5DYstnpsdSTTxKsw6Y1oi5LZh9feZcsUaTE2nFmJFh7EiAMGy2gSsL7CUN5xWYmE2RFwCssuPLfemeaVK8",
  "key7": "3Fw3T2PsLjLgfnitqzJghR933NrszNauPhqKV6r53jjZhwbiP8jBRheGksC8e6jzA26NzXezCxN85czaEzxn5Egq",
  "key8": "Vcs2iWkniRsHFojeGuRnhy6oCUBU7EfD6kQar4g1U1oChhAqqgrAeig9wE1Ta83negLgjfDe187qTnpgq32Rohe",
  "key9": "2P5qx8rjSZaf4Vmmn5CL5cbDvKp5htH8YPPEYZFiVvY5QQBsmvQHb4Q6YPzT7Dx7YvD4okLzY4aSFWJ7UnWzEUXo",
  "key10": "3hxYWH3WK9TLdqkoZfQafNh3tjtndojfdhn3dDtLuCuqi5g5zgpg9oRgufjkvcTTKtHQdW2eg7J46PBRpuD6e8qH",
  "key11": "c57uzaVdDfhdWvVPVRFbSkq6F5Dikcb6TJDRNGW9ZYduWdYTVtgkBf21kiNQc1NDt55gVf9WHUadjwqUw9CKcMr",
  "key12": "2yiLBdLgJBErRaD8xXMZaWfrRzQxtfSEPKU1keF8bJWE3ngA1VKwWNk6cLudj9fonxJHHJaZbT2TmnZUh4MpPhsv",
  "key13": "YshagTaFTCUDVtadwAhPawkwaiU7HpCFNsi5QgsEtVXc3X94DyivLjTq6HPbh14eQ9ZehshajfcMSyA1ErH3j9w",
  "key14": "51hqNkMoXcJYLcSdvm1bRYjpvYvDwCji5xDDNoBbaNdbCUUUs2HkgybExic2wUmk2vrYJXqssndorTS6y76iKBDQ",
  "key15": "23xENDgKyNhNBR11sJ21aciv5cvoVHHyEm8YyodD914aXWVEoeMMtcVe2yAQCGXsJNiaP7jvdMo4MFfnTk9rNEf1",
  "key16": "61BWbZiPKCheJWes2Sqnqb8sjdQDRDQwBFwz325sjuS7CiVgAtEkrUKmwJcUsgAn5SkqcNsRRxSfGvfJe7zzS5wB",
  "key17": "5rkToiww8PJmyamKcm8dog9sY4T2U6AmV1SsahHfAtJhA7AUWA8fqs1dnqEyqJbSa9b3HW5ZUZVsnFNDoXJL9eHt",
  "key18": "2E58WxxfWTQb2RWW7DEvQ4RFR9MX8sdQqV4LUbjQP6srVYr16tcGuHNAtpocRdz4V2YvkeXL3S3khJuRvLvNdmtc",
  "key19": "LEntSJxA8c3YQm6pNZE8CkEwBBB3Cq4GavFdcnXSVPnBhn1Udu9QY3tdkf1C51ShUe9fxPwiGN999p519Hkmq3m",
  "key20": "36obC4RHJchqin7BvWvpg69ryNkEwA1X4e6vhDuJNEoFAKz8QW6McdKDfNaAUENTwqXdLn3h4DTrZk3Eph1xPrP9",
  "key21": "2zRidtjbgSzHW9oRWYoseSnmFAUCyzgBV8BZ3bsn12zBPfBMc4t5o8AR4Y4K38SaSWrkLZeBHAKiNffqzoaywUd5",
  "key22": "3M1bGDmjr3AeErH3ChSXtbmKaDATheA8RdTPTPpY8auwMkbEa2Z5e9rUFRKhRm7Z11p3iKTwaMp7GhQfivFweagL",
  "key23": "3bR1cQu2XeYEE73oDS8h11hsfGiHGiMxHfZCQ15c9zriR3qGkrJqTqGQWWmmUgP5awPGLVFa87gxu3c7UTCTweKz",
  "key24": "2XFEaUnRM66t2SSU7Wu9xRwbEFwJVc5AQdy1RRDKAedmuukcZHNgVFSxUuDoCZRAnNHvu11TcdNGVe9KHeG5qFA5",
  "key25": "5sdVHPUUbgs9VdVKi2s3adtd39tVUG9UVWBUnKRaDtWzxrzY9pMwJyBpi5yX1TMatiUTd3AMnP5WCqzjgfgCME3k",
  "key26": "5VLQEqGik8G5tXu6XbtipdPR11g6Ex8SndjkNHkD7v9Ns621QdJBAZSzefgMUWHgEGxyLMcRwkX1px3maoDSBYid",
  "key27": "ndrHeJnM5ZUF4QvMwnPM7fX14X7w3ZEJzrc2xfR5QEzSaJC19VN9MVNiMKFNcSzM4EYzfDKEhRARSdNd6cQ5f3a",
  "key28": "67JiUZkot7feXZrh7stppjgkn9wP2EC9d3mrPKupTS8cdNyGYSd7mcs8bYVQB8DJ73WrPGkhkP7qimDF59mWLga3",
  "key29": "2mPQ9nbhvi71Ut3wQ44Hjdwj7TEwHadNE4Esj1NcrHgv1w1adMa5o5CFd9vQhWn2PfLgv7Hz8wYGzMhJfPt3EpJS",
  "key30": "2d2LLrRL6FZEF7NnYkF3vxk9GwSZsXPz6L7YzASi6rEJhkpHKERfJhVmVMgPpyVyduvKkFPekUzmPqoov1V1CK2s",
  "key31": "5ykgLx587jjJLWrmaSaCgSvbnog8WaSErp79NQzZLHrAVUdtUJ6kKigBnheKcazo8hxEyFmxxt3H2hfUwEbVjQJf",
  "key32": "2k3U9NRw38rffzJypVRM76SypqkewBX6Zisab4fMvSRzeFn4424mFy81fMypLbDo8dFFbrvNZFw9AJVd7JrUSa63",
  "key33": "22oA1jZpKgPcn19m1QmyoFGEoj22LV3MSgCbTdTAo7bjAPjq54r9x1wWHZdAG36j33QJDDVcQXepczFD1n7j1GB3",
  "key34": "4TL8TTohMTjsGqM2T78YD3jGEtp1cecbpQU583r33X5TMvDcSHmap3WzbDfGstsCxBsHnrSazotQhWdegvWsDrWy",
  "key35": "VoVVTfvcv5dqvngKyy3rfw6ZRdm4KwcUj6mggiuLyb9SsJLXiUUuq6r1sWMEEJdELVNjTWqcjcdaPd899Z5tnBp",
  "key36": "3KDwJxTJbo36TKczoNdg2csrYSdZcBy8fdZyEztEWnwCrNRLZpVgY5EJTxeq2oV4GYrkLrkZRqrVP33RHjSedyQ3",
  "key37": "4GnCkY92xP6X1HmtcwXkydaX3PUMrDoZNziDtKDwyq6VW7VcVC492zbDMkbj7m6NGAsNcJeujxuWCnu788n6f3FY",
  "key38": "2xuD8jfMiZaycNxjt7x2MeCxTy2SHgryxT4dasqRcNrpT8StmoYrTSa68iNxM6dBsTTyjLt2gEcjnSjjq5v1K9BU",
  "key39": "48nLKY8VuSTaR4kJkYaqjkyo9eWqG1C2YfnEXa7xQmAuvt6s6unwukKH1tfh4VkXgsnpdqtCciTUd2L75tgAJidS",
  "key40": "3uU5Y9h66ZeyVhaQ3TKh7CHSpGioJQsVNwgeVTAChTSPzgDZHV9qwLBfpNZE1SVGzKx5NQSjx7KocjjxXaskAvkt",
  "key41": "61igFovrhLbvgK6fnAEPWMwgzYgMCpBGdtGW3yDoFkXdtEe453HpTgXjuBPGoJz7rJ7VWwSuCbeABvRHDhEc1BGS",
  "key42": "4n1M4XddJFD9M2UAXKhugYkNtfc6VC6NM4Cc3eiwQYrddKRtb8fSvkEnUta6cNjTbzgdowuPQ3n8xiUyjLrTAJYm",
  "key43": "3haXQjNPH6s6ZsJeNg5f8sw1wLoCSrb5dEwwsMNA6HCk2nePyf4NtahcWbUoEoA3t1UZZn7heh7Drgx5WGqZcyyy",
  "key44": "528aPknVYciQfcwUHfLj984btpScZkNAjhPyLTv7S2bZq6Zm6x4mAR2CCh2mvAJAVDUEjND2QVh5H7kGzZUtEHKv",
  "key45": "3t5449s33ozmbSsqoqAApneomTQ62Cr1LHEoKwEnb5tqPSvhE8EbWhnMABEtJxgRUZiFC42HzLaTxv9wEgqJyU6K",
  "key46": "58unLE7rpLbq7fNKapv6T9G6DLAGxqwEQBFN4yoRk6ovF7UE4vJjSdVv9VMHhrvqtxWQWhj5wh1Lz8BChPGkghR9",
  "key47": "4LPpRwzqZGL5n1oxSS3vkRdvP8SrzySsP874185fDQtELNqmBrEuRanShas2QsSXiSpJ8ntB14RDPoZK4woxBwfH",
  "key48": "4vwszcjypAt4MQXuinkySZnhghGWNWpNxVUE7tH8RisrNiNURjFBzyyTQL62GewSpLirZ2NDJAdV2cwuhhFWNUJM"
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
