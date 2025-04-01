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
    "ET91LwhGrB6qbKnQ3Q5RjSHgXAuc7cHUiR3eikoqpkJrV3pRmEYUPCS1Pt6KN34M8HTZfYHPeSiwRrnPKK7g27Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WaTjBTo6cYRvp9XNGqddn5htyUFdHtko3oc4jEKMcrxVsFKuofCyut5YjTL11grBkz2reCJXEnf3Aws4xwL2ca9",
  "key1": "5tdJYHMfipRXcoJy6HaMidF6SRtFufya7o42U2MWL5ifYGfiJyQQv9eJCSUsVKkRFBEsMF4whXsgtHk5SrdxLWaa",
  "key2": "3F1m1J9PB8NFZTtQR8DqgRDHTo8N8g6yRzuypKsosyHPDcRvdn9hpNrqR3nza7N6hwaBPDCbVEax7Vu79kQYAjgx",
  "key3": "4gLwy3QdygdEuG2wYHZzwWHBz35X8mNC7vxkrzhWNxDJVH7QsBqXo9wZu7YbS9m6cce5XyHJjyAFhtQViaLMRYQt",
  "key4": "4fWvPmsAXbxsekJEi5pZ2D1P4jYUM6xibJqWfUC38wAaZ888V24LjkyJDqJo8YUxU1FCvjcUAyJStrMwFvxdsKBq",
  "key5": "4uL61aAM5A2hz923QZxvWVXJhgyeixf1M7Q1YecwRZNkbgStHX1RdogE6NH52z2jcr65U9jLbQQzAZDmmvAeR6Eg",
  "key6": "5C6zxgyVKqk4vezY5CTem6RYN3AHL2xb1ezUoujoqLUEKvKAQcFQMuKJgsdDqxeurnbGutVqfQ8sidYj6pX6jHsD",
  "key7": "2wEanXgkfixeqC7WjjLAqqY9oddLtvuAYCLEarqtJkSxtWSMxspwZFLJLifs5JRFCMBb1bob3SGTTbZG9gwuKsTj",
  "key8": "TYCDVXtC9HoVoaMDmdEY3rf5N56PciVaowSUKSexH8YJmkDN7opwijLuNK34xLNkpFWvMs6BJYcZB3vmdbSc5Zh",
  "key9": "3ita7rN9gReoEdnL8dFN4gh84a5jrgegaWbKaPp58y6dkuh7WkvrsBW36HFehZd35FBXCJFodPZ7CEXukbFjPNoB",
  "key10": "4PeTRyR3HtuwGB8BLgBBc6hLmv7qc9rTjGSZ7dkeQgD5zgvFdPd6cEaiT9GvrdHYeGK86UJkTurNKcF4q21yy3qc",
  "key11": "5juGaZqowhdLxvt5e7g2KoY22HYUf89vME7YTStXLLtrz3ADVFYzJ6dP1m2AuzATBCbPkWeknHb71VYKLhRR2D13",
  "key12": "XcSPJKaHDoKPXyKWmz9B8JRhyMfzmswkKYqTVGQPz9Tqn3ZomsGJ7rhr5MJ5DwSQMwjvhhgqMncaVAjmQcaxvgJ",
  "key13": "5kShYzFe7qVjwb44W8Yw4GV3gxjJyaD7c8yPSB8rx1brMSMXVSTm7UPPwAqFda1sUcyk2q75kJHpWjLfwWapFSds",
  "key14": "dwSCT6FrvmmWB4T4B5m7BdzBixsyi8CiyrG5Jr6icynTmWLTF3967nLkXmiC5TUBpYRP1Wi4453iAiSibxdoNFg",
  "key15": "3HfMH27svAWWWGYD3ki1in14iA6jyhaGg1MZ8HnvyewrDXyeuffqvXnuZKHBmKSEFyGfKSrVgQ5FbxkTkjwuFigL",
  "key16": "4DzsVwCnen1txFpfpdpfuWhqJ5Y5Jcmg2yj6EnAUoDmoNQqMdD26f311RBVMJFedudUYmmhBM9fz9QMDMaEwVEh3",
  "key17": "52DWpUTm187DZtGorpitJd8rEUpCVrPFkCXs4HzC8ZnHTdePVT6jYr1RLpEULyMa4WB6kBQBqzb8fMBBSoTFj3kz",
  "key18": "5gsXenQ1efGFEMHA9U2vKQLU3NrMk4reMuNswuSDRzv3wCVMPUspUFSm4djLSVsii72WoVDzGtjXJMnttmKm399a",
  "key19": "2buJteCGTJiwNnpbxwQ6vYL4y39HLPzDVs7r66yhSpZudqEM6FzrEbvzxYw7Cv3PCFA7WYWVe7vH83zFjAxWW8T8",
  "key20": "4sNHQwy357ohywrhfVsk32okT3AVDmuHctkLa4TkXxGYEG2rgaZ6CcMzj8NhLYJZP41mPE1VQczSxHLKCvxT5UDF",
  "key21": "5vXLY3yA9JgnUsnR7gaLoxSMDRxMe2rnD7wNkV6ArvZMkBVsZ8K51XgpJDybn6f4NyvtScPsDaYQVmyBJ2fyrLDo",
  "key22": "4cfhuGDm1fEZjKyEs3zeGg2zwaMzuk5VmpAe1h9XmY1bM6bskZ7pu36CB9Q1L3nfnnSEeT4tuFWv1Crz2TZL7vAv",
  "key23": "55Rr46LJpjD9Z5JuGFHHprGtQEGAyQVdazYSj2VTg3hCjCJE5YkudWpiWbPbPka2i6xAMk92BYKczPhKxfyDuvBs",
  "key24": "2VPy888wTkmfHFW3hz5jw5vBppP9kJjygonpPQQGXNXupA8vUT3AMC2XSkubXAjEFxSwpw1uQ4f2NaVveaTdJ371",
  "key25": "4SjvrDwDjrt21UPoELFjtZdCJcdTfGVXNFAjYkw6hH6Fi86vr1QitaeeGkpUBqT91fh75Wq1UjEis72kRaEc18cK",
  "key26": "5G4KmjWixbzjns5iXDZnWJwWWQyHZfDDq5RHDFCkzSLQzE1o62ssfqn3L6mf9cTTHsVH9wSQqxEXWNDQ3baNfitv",
  "key27": "3cY88cWGzQtJfroLetQ1DP4B1i1vZ4VCv3DawpHjb9z9R5GWWuJX12xV3JaLFF12ZVSsjQgAyRt1KuBGJUqsSuHV",
  "key28": "pCEejEjfjNud8eGVhjWMGCoxMZEWJQU34QhA41GKLCSuyLiSN9vuMBw8f385UizQrcjQXQGR3vhuDSHz4GUYKcs",
  "key29": "5JavHG6jvryvRAr4DL3kpk8zwn9pgjMGuCxiFFgPT3G2UZ8n43T1aV4spep6UF4FbPegwfJ12Gr9uxtfY9ZfXmH4",
  "key30": "42RoZas1heCnjb33wpQeCDoForg5DtgzpYv8nMxvALN44aFSic82XMjUuu9MJVNgCnrViKyWwLEjB4BJ5ziyxGCi",
  "key31": "3PDeJ1QbagmMzgXD3tqfuXcTaTagGLWyxrF5xwXs1fkjZHxbWKrzFej1gyx6iYhNVuqT3PVMnJvqxitUEzRs6PSt",
  "key32": "34Q8VJspYng2vDZKUJWhCPesPuP8ammNv16b3izsNkaZ252rc82NGMbUpASsq1hJQmnD9unpj9SP45aoZVf4fjSU",
  "key33": "ijRySqC3CLoKxp1ystmDx3P3HHVJ1qDPAp6VKH6wwmhG47mL1wJVjcQbYccb8vT2LtytUUADSMrXatGXG4ER2Du"
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
