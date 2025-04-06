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
    "5EW57eGuFRi8HfoHHUzp1oHQr4dxzNSzsH5SZJJT2YkvvKt8Tj2HPXDepQKzVew5nfmiApehtcERoMxmQfeX8Nxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R3fSdYbDMWy5bHUdRbddaZwzL3p7jXVNCTa5q9wcvq8SDYLf6Pajs8zvkXyhugDzkTkMtyvz9gENB9M5jZWXxUL",
  "key1": "3aD9mVd7HJ2DX1hAjDpfdDf2C7iqxEDVXTZNmAArWYZzJghL2CN63KZoiCGfZ4hmzcVYoSLr4KnfQrS39mZuKZ5G",
  "key2": "3jFQ9LYYneg83rBotheqpjVnHJ3WPKbBWwFmLqr27FfLYR9CXqxMnYuou94enSHcu6U2uJqkNvLjWh69qJUyP3y1",
  "key3": "2qCbZEZLj9Ebi12zpNBjvRT11SqRuc53qrmFVVJhbi1i4SiN5QR9Nh2aKn826aK4cMjgTuqZS77JnXGQJEd6q8h8",
  "key4": "2ZpLmMiwArV8o6oap1LKP28dpYEYdLjRy6ed5fhkc759vUjtS1FDoP3gqasVyfWqfoFHuXm8ExFr1KfdzrcZUDRa",
  "key5": "2fzF4VsXqAZTTz36aaqT75rRsCrNFkGUiQbfcwomUrLiSMCgGZM6ZhxKgqt9rk6PditpE14kvqNrP4aJQhZYFDTP",
  "key6": "8rukvqHX9A5kxRA4qjoQvRqEKLBSBUkXdm869RErFjWgNankP1Jgiy5QEPPmcR8w24TfrTQAqek9h9aiEag4TQB",
  "key7": "2GFhrjtjb6s3sWSrbPZMwUNF4KMN9LgLhuhSqm9hDbiWKRNaobEch1rTKbF7PP2dLQ5Xbm1Ghh5h1JNZSjaRE7Gy",
  "key8": "4vwxaGgQoLhpFvpDEaVvSvnWL8wT2B9cbnoaksy2JAWHNfddHNK14Z1nCd9WUKr5ivpzpdehWQjtENKnnoGFhhwo",
  "key9": "uTtZ7rHj6KrfxNrCM7Fq2FegwU5gMbDSrteaz6jAry9GQAZ4GXxgdbP1d14yvXamp77nDWXZNJEEfFvyeH7UV5Q",
  "key10": "2viorfFYHE2gyFFQMgz8zFkfzb1gWdpHb3XUxvkdy4KNssGYu1wvviEwTGjThzeiSAcc2eo8ZoUE1ZcafYDqmWE3",
  "key11": "4v5uy25HcgJBzEgTC3qvmZ8vd3X3uxhRs5yBxzXxE13iXKRzpCSyow3c6zPVBojoY5jq9vVsTgPiqPoBhrPr8GAU",
  "key12": "2CGNHm8X2J8iQuc2CXknUrzeVYWbFQWEnVPEVcfUE4rarrF1c9XDC6vwshXy9Cx6neqDNNfw6usZfRSLjcTubixe",
  "key13": "dzPUmFKEmsw3ZAyKfYoeNMrCxmV7CXHJyrd2rjBt6WVicfC1cL5AKuAfgE7vvmBVUiLA6BtxqG6RGcnGb6zMdYp",
  "key14": "21xNRDT75YipvvB1twq6JDT6rRhggaWuPPy9ytArTFJSsCxM1TzmpZ2jZS7bRrxZcDmhdQsAhHPabCrARABAf8eR",
  "key15": "4doBZbYSAL2ZzJUi5EjvQ8N1su4sp556SCDkqAh37SktDV5Bojp3L7hqpvdEuQmK8GC8mzMF4BeRuCNQvY2TVyJt",
  "key16": "2KxqZD4WNEmMrQag789UMdmi7PkDhMfGYke8v2AbcDNA5fH54f4m27RkkBapZCeyKp3wtH9c3K5mCNgeqoXbtAkH",
  "key17": "3yjvbegw3Fe1xzUT24ywnZTHTw5uQPZHsVqwVs5qBh15SChMUvSsyz46TsE5u5w5hxXXjsLgKG4EvfJbSTFakgY4",
  "key18": "36Lcxh9jYqDQLn8QAp7ZYjboM6w1QN6CoY1XaK81BFir1psjhpAjath5mJV2WyFgr1oKa2rmzfRY4qwX9RDcmkgD",
  "key19": "231GcrT5kReREjos7rv33z8qHMEmyDwz48EXdRmDqd2f8VacZGv4mLSRcAh9gqVx4GKuoJ728rJ5xoT5KZmXknGm",
  "key20": "3qxRjQdNWPfc8MRQi6YUG9vxYeLjjM5S36KVyeBwkTUbMG5VYMPJm33Rj1DG5SyuaJuergshchfW9iLDDcwG2QdL",
  "key21": "4mb1uRZzjWQTaWGvG2GTpHHEjeeik7JXDhTHuiQmv5919U8sWPv2cn3oVeP6rFXWquY8LGjKC6xWyBRkFpVpsULG",
  "key22": "kWamzpxnZTnG2mVFE1QMtkG3RQFPkfTCyzv51zjd7TWB4GJ5p2G1HUjgBHUrurbQzKJQVhK9GJGfHfWXYvKWUTe",
  "key23": "4upffkwAeDoGik8557auigTXmy2waoRuhb3XYYRdXfq4EXU3fHrVLrRsHLiue2pnjw45hfaivGXhyJ6oEKuueU99",
  "key24": "P4GoMhaAXR3Yes79bTFuYvJpijQBMWYtdQ75dSsCGXG4C58dMrwD7jKc3zHgzJJxC3exzzLLE4VCUtfstXicPhz",
  "key25": "5pFpL8dMvQNCvxsrRRYiW6gP9zk7cKcs3eMucF6bQAbkp4C9Yhr3ykAu5VYZw17GbJn3ywQ4PG4zZsMz6twwRhmy",
  "key26": "LTbWxXeYiotqX31hiAcc3HNQaXiHYS2N5Cs4mWwM77NcboyRSgt22nUcL6HKchFqLocqyrWFYmxAuRLzkceyPaJ",
  "key27": "fePsLg9kCjs6h6KdNvxxGQNyjApcTpgp8bE4FzMKbacqNR4DY4SrzJSuiLJVX7xTQbFyY8E5Taq1sGF5S9MCbRK",
  "key28": "55NdXGuKewUu3i7CHEp29vCjMoi9UQYY8GDngLAJV7d2rmR4jKyyQh4rAXedJgziwA39ADoUm6FpS67w1KzgHy6N",
  "key29": "ie1wBrCs2sqoKdYDvr6gnh6As6rSSwcRE3vNfzoM2LWfZu7yeBK5mfP7sE788j4S7dKb9jWqrWqT1pQdnLtmrAD",
  "key30": "4RCM4doKDHYHK57yA6C2qxREbMbEzPDhPFxzycR6pM7mitwQAvC38N3c5G7vzN1tdE7WVF5SATxGJimBMmoSew82",
  "key31": "2bL37kmJyCpqMgMinae4AprM2CP1XiJrc6GGko3E3e1T9BXYnXTMNzNbFDCZhAon3hX19F8az8GiwK5X9ULbEh9h",
  "key32": "2SijZ7dEBF227968o9RKMJvwpcGjyPGX3WN31jeMYCYmpiiNX4rkXdvjHX9iGPkLKaHMG6ZvYo7kuAnbR8FsnBgF",
  "key33": "5crz4CNcmV9V9dY53NftaYfZAnJg93oSFGRUj1TKaPtKdWTnaxQWT12ox1m2vomJrUUzDR4ZcP51Gqw22sxHVCkr",
  "key34": "5VFcRB3CsRyweErPY2uHx9RK1MWdrudPPWknyp34BYLosxTtKfYuqc2C7MmgcDsxdwke9nFiEmx4rPpMxZ4y6uoA",
  "key35": "2SW4NkwuxYAWpoqiUCpcsEUAK2mhSCWEH9VtxWP4vKxS53TtWktQ5LZuoPWGYLn4KWTccKn73p4N4kzDDnUa3P3u",
  "key36": "N7L13zpfsWNCsoveJoXWMExf8KSP2zg2LLdBrK6Tn56jgsdHVHYE8mAPRhFJgPGr53KpaqPueqmd8aAajDww4Sk",
  "key37": "2Wc1UDUfphpiKkQ6KZ8YriBVeCQYbJJez1jtSwGne9qjJkcSax4YksXrjijVHfGJu29naN4h1nfx98tQXBg6nCCZ",
  "key38": "23Xbu7AXv7zpUZzLE1urSq2ZX5bGnBCUrco6HL1GxwwpGrHHkNcfwRkJi5BgexEz9NRJWDVEMraE8REPUoyBndFE",
  "key39": "26WFcAU48Encud5yPTcvscjpM1zVnc91U3S2GC6UF1x9abtbRoTniGQV3hJ8ENSgJj3xDZYBWbz31zt7BKYQeYfQ",
  "key40": "2Ayp7rVLZgSjreCURaR1TvSjX6yUTVtzULbpT13kkpsdD9CvjgbY78CtXqSEuXAVdKpzHkcpSDatSR1kY7YZDpMi",
  "key41": "2oKkA74sNM8ahudEhEnZAM4qqKa2axoDHNMxWiPxJMNoWLJwhfHHyvVonpyS5y3tZ9YyykZgSupB5DQpLBgJ5JCg",
  "key42": "5LbrTWKaXk1nfbYuBRgAyKkcHgEgmJhFBYMSFrTK74gcT4qJbiUo584fBUrmZWEsTsVeTXiGkiTcjAWEUCSBdQuy",
  "key43": "53xiZA98vfwz1Lb4z3mcH6Esm9DwTMfQmM6H522eC3iDcw47zWmP56guJCPvTFef8DbP2NEkC8YzDe1YkR3tWNWT",
  "key44": "51BnQYDqyAA44DNwJDFiBfAUReNqRyENybGgCdY9sHm99it96vmFkvGqphYNUc6HEWeTbQQEpDLR2Do53LG4uJy9",
  "key45": "orJ2bQsEVuhAW4gwwt9FuDZ4MkfMGHpJrBAwCK4bXnEDdN6PrqnCi3mrFRhwTJAMMieWh82Fqj95ok8ZXHqvNNV",
  "key46": "o7fZJZcK1GE9jiphVMPAWFbBQpyYqN3GHbowBp84d1n1ptfMeeYEEzcvWzLLXnD4xjsj24gPQgAL8ZnCFGaewqw",
  "key47": "44kG9c95DKencfcpRAAV1Z3ZwgedTisireh1jNtyibZsL7Dp96Qxzxi8rLYNQ8LcGzJxZMEMTaPTzUTeV17LF3Jb",
  "key48": "2b7qMKFgiQKNqJgw644rwYz1DpKMtwczWLSwdGc2jj6itDq2QMJYTEMekLD8pjiixpRpkfvGoqehDgrcad7JgDix",
  "key49": "5aEGpWBqBMukf49LvYSovJqfVPgw1MCodweETdi9Re4bGewknpXbz5kUqkUM9aubz4VHbVbpavVHnFTvvYPNdyGC"
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
