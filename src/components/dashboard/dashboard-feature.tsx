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
    "25Pd1PyTcM4GMqgwQuLe4LUgwBwY4DkTf67z9GfBLoUEsZ2E3G73anf448NXNWe2v2fLDDSSdVR8jv4ZS1XviAwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32qB4NNEteYztqT8uaiPQzMRf9VyxPTuaVfJsVC17QTshPcubmf3XD2BxD9YMWbcJS6e1JDEXhHwHhhBozQjresv",
  "key1": "4DFF5yJBep1LLZUut1ooTbUCoz5ZuTy4csb19KFsLYXHaQq8i6AFehkCM4VmNPYsUrvpSevQ8AZP4wQSAQK3udim",
  "key2": "K5vvM4UJHFuuKydVgxCGMqhasfBgodb9ZZeKHj1YY8ET3iNiCjw2PRL56HL6DF3VxGNa3jPmjrubEgERGreZyjz",
  "key3": "47jHVenhShHk5FsgJLEidULwHywbYndj7GX6GzbF1dbU6Ug1nPP9iHPpJrAdB63vKsNKERmcsnRGcc3GodnwXN1W",
  "key4": "4GRpju6gNmCRbpqnBSovfsgoGve6ZgJekYgqK4nfY42Bi9F1JBpY5AWwU9qByWhBRBbRRdZPjq1dcSjTkJQj4Q86",
  "key5": "4P6LzrgGoG67CyfoESecEgG4UETUWxMNceng395ojq2KCFeVZvJVix9YdxhjnsRwmhEDFsGCHDNWzV7oWsPG1dzD",
  "key6": "3CjmYYNjRvBdfvE97noKRStTQ8HSK1fPWpBjvYuFDZT6TC5ogRebBG6RnVZGxMicD6wa2TuBLp6MXrfWzELZJFED",
  "key7": "QJW1K5cuxQZ7HdiPcGvnG61SX8zSLT8QFgUNknHAt7fNF5Y79mSiedy9sDea7J5yAAEwuLEvZS4adpJSp7HQAiG",
  "key8": "5rXryV4ro7xcpYycfCm8CkFnt9wuExCLGU1ySHzD85N2ZNTW7azyPyZTubovJW9nVNAf196uadCb1cdAWdwz6igh",
  "key9": "3yMqFrmTwdZXN6eXHdJNteKR5GUuvi5DaetLYQFdDrorUuyvDBHhVpuYseNUuH9Zc3TEZRiKD2f53wK1SYvfTini",
  "key10": "qsS2Gjc9bFixYRKtTKdSgWyAa2Yw2pWvTkSRdm9Ko772Pm4UjZKRAUqNjgBg3cdpV3LZ8W3VEBwgkLRy5pKPAn7",
  "key11": "34ysGVpemLZZ2A12cm2Qeo7tvmUeXCwaADJqBqDuA7voJuV4q9BiQoMnRUywGoxxZgo8fp3n1TszPFuD41yvfmqz",
  "key12": "3ZFrZN3qQXhGjKdxeeQjsNhcneRRPvxm6e5hZxMAzR56SRGHfi7zHbtFoDyJBjQF6HnWAPfD1rxrwAQM4AE9oxov",
  "key13": "1k1NrT7WX7QXJcvpuEBJzz2vWbqTRczg2BjhMr7ftRKMf2JqmQyEpSKHPeWK2MPq27bwdM19CTVoAom3UKEEF48",
  "key14": "5WY8ojDAqHPchyQaiAn2y8Jw47rY8w3R3zhSL1JiLBeAg8Remst2fz7JTMU8CNXXwTuz6wwATWygYwTaH6h7YKHS",
  "key15": "5oGi7GvuBnN978DBvj2uFHQ2x5YpuU6uzdYRLNXcis2VAKzyAn93c9Px4CTcHvTG7CEzozQu2k2zUy7TmoHEM2Em",
  "key16": "jYjUxE4BK8ViTTrswHaUSJBJD6G1ZnqNB6zaZqA9P4BwoSTKyux3pBZy7cLrkJYRdQH8ztswE2d6wHv8VZMajnv",
  "key17": "5wAeT8HCcF71RwDR9KML7mmKcsBjeEvG2M6vJGQVz26t2a1RTze9QKqY5KwUhn3Va6SnxsfdYMa7pBaW4M9uk5QA",
  "key18": "ZdiZGbZZfeXPmgXrNsyk95zxE5zYdzFenasc4mih4UJZMDiTQ4zmfjP2U8FHDAs7akAdTNnrKGGkPEgbnf8XsyG",
  "key19": "3LVTYrSzb66WcQU27AcZnBH3nyFmh4UMr1fZUVQ2ggNEHGpqdVCN58n3xDnkX8KJNah5h2FUTf5B2pRmgATVoSvr",
  "key20": "5MFV2jo5TFTvzLo1izMV9F8UMAVvkNRZAg4LzSkD8H31ZEieoaVbQkrcWWDuhEhYn6W5qD4gZKu53vN9jsPnShkg",
  "key21": "5dpkspPqZJZC4ABKDvvjouSrgoSpb929icQcyEttRWubtYNVtFVpaFb8mHLEknWssYwa3Uk7WTwrSxzcqDK54LWw",
  "key22": "GJEAYrccbJ3vxFeHax77RBuDgBmyKpLN8ccP8bBWK4VhygXbWx5W96tK5mT4pUENQ9jnbUa2RAe4fisKdTpeVv2",
  "key23": "5NycMPFLjPnHFcCqBZtFnnYk98EDeA77s6f16NahoG4K93tvav9CuJ2N8QWZ34ztQFWEpvWHMZ382tC9wzQPcTAP",
  "key24": "wEYx79c67DG8PjochcKh2sHvymVmN3vt7jWFkSX12kgeZxhztWwztt3FFjxjPorePiy8WrfvUer5oanXc9cxRbz",
  "key25": "2tass5HBzF2iiZUpGEbASsw31CmUHp4uiTux4WTJ3pF3PKMB7YtyqtyVWisW7fswobmtkBZk4qWwbp2dhFMb64c2",
  "key26": "u4g6H2h1bgN7nigQhEKT8bExD5irD3ztwvFdH6VTjw83eDsUs1K2hAErDDtbU8nwVFfEzy7ECy8uoQjXq8PDZku",
  "key27": "9HazUbSwtfUbHNJEEigToyxsXQNPV7DfgVARmhGvVgt5Vz5pxtKPeSm6CHhA5yDqgiuR6SLyqJSsZyxg1RKMXct",
  "key28": "4XZcuiJ5xTFe4Ft4YHvVHgCE8pjAz6UTjKETvP5PG5bdZWgcQR1ZsE3zpxYXj54pd4x69UkLGFEiBDrQ4nrENyBi",
  "key29": "53v9nk1viRNQbpzvfGJRaXTumyXnvMFAL4oWqcZtEYnCShGDymuFhQ24bSifrUkXGRnYqeBwseCjAXyGebyvjsou",
  "key30": "22cxujYswRy8QtnQA4JhzMeDoSx75845e7KgX2mSAG6ejXBTH4obySEF2YFTZsKNE8cMcJeU86e8UXeFPcb5L1jU",
  "key31": "2DjA14Etf5LnvREvKQCmRs4JZfTs2N3CDZJC8ssXPVhTbC4UMwR1EyaQhojtTxN9wQJe8HDTkoa4yq5hXZCnkJKD",
  "key32": "uXKtgZnjpD9WvpmrJQukhpVjSZbyQZC3G6zznJoAvTd5hUdd4GnPbRoi8stBSyVAR9rHgSuj3N68WcmFzREEkRk",
  "key33": "2QiJe3PfYR1AC8MBBvLFBNNXbAmiTfSKjsUJJXdsCuawF1E1yd7jnBx8TDa79C3pXm7Xm8vyXJj1xkpDNDa91wat",
  "key34": "zikyhpDznynbuXDp9QQy7sGYuPgkSeH6euEhGKSTwHBHznCdiLhEu7gFTQgoCCGsFeXJjXJ4jhfFmSjfKEuX7Up",
  "key35": "3HLRHxFQ1cVguALb6uAE8b4ZFmh7NkTibcfUkhSPd9KwhGp6bejtJosQhappJP51ph7DD6szWeXekUZQehFRnAJj",
  "key36": "26RzvcFmuTdQGvCqnoeE5Rdf9fCGUisnaD7PQ5CQyuSxo3Vz2yh9h6zPBJEDxLkMEcx8dYs63Bk9X8bNBzZAcPyZ",
  "key37": "2c6V1Hq4pk5xBhZ8CZBcq9KR44aJhwUnh1DQ7DnY84xj6Z8YUqMDfzYTupVdiDQEMRRrS88gb2idaNDKYSo6ZAhp",
  "key38": "2Mgq4fWwsmnopXwCiHMsNesKjBsCrH6x9bZBDRvDvMF4TVpzU8EjyaF4QuAYAofyUoMn42uHrecKjoqmBi4toP8",
  "key39": "5Ga3iNusMWCEhgvr1VQwKt1QUKumddEpoQ1X5yMAdUMs3G4YudPd1pHFZiUxEF7M5jdwce7ADgQyoha8yBYL2AuA",
  "key40": "2BhzZ7Lh5FHHAv4QxxiVfQf1qUPdxngwHBRsd47ZFCHA1L6aK8vWgiwKz4kNVK9dCkxhFo4zPGqGVZTq9qN9AGz4",
  "key41": "4isyHjNHFeu5LqxzYjefMsTYWdu79FBujDuYmmdcis7gJQYSuggnLA1FfN8Rn3aJjMnfzmakAGy4wyhKx6QqGMMQ",
  "key42": "4bJHp9R7dKU9gADeNYrkWGEEY2out5gbTFZGMtdUDtbXPs2yEtWiv2bm2GbTR3H3qeYkteR5GaxjiLNLGpxDJVoZ",
  "key43": "64EriaQAgnCFQdDzaqG19vCRBQQ2cCRJMT4vnfP1Pir1dtqX7oatayxtQoafizMBgjJhQnj9fs3j4oJrNC6hZZVL",
  "key44": "bxQnVbLszVrfo4WK1hnNdxncun56u5dCLkJMoHtPGMa71Vn8LbQAkQz7PJs4Qe9ToyEPHNAW6Bbj5qS1M6v1av2",
  "key45": "3DunPBhKS4dhQ3DBdmXwV68YMfc5iqcnw5CRN1jfF4ewhP379NnKooi4eW7XsmXat6Aso6gm95NMT3nAoS4eudxG",
  "key46": "3Dq1R3nKpEGgjF9yVdpQPLowfNz7hesGriLoJnGWQ6SaMEmii5mXdwvJowXTXhtebtm4NYRsGnehqERZhuodZKGD"
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
