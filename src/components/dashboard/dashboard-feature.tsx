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
    "5RGDfGoAvqJBi8imxzQFJugCALWps9LQP1yPHWReziJp8KKi6vkbxxbgw5kQAeF8qNrLR6YqEeWrwdspe1giHGLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zH3JE8PpNcNVBgVJUQmr7Q4PS6kZkwpdeqNs9WMCAEEnvYknbNFywKSzYb9mbcXw8ULT1i1E22CCAQGxsCKt5m5",
  "key1": "5nL5s1Ce7DMyLh4wHzwVkyAXhvKJY8nPE37juer3ozsWtovQHpbmAkAGffzeWnKjseBm2EGLj9KHGHiDkTyUzK8F",
  "key2": "DoQ9io9wmWUGjNzKmZDdJRq17Eb38bJEFj8TdqaYg4cFER6iC2J8YpaP5e7jgBDywhxf6FNEfGLXgURFRAswxe4",
  "key3": "8wJR53ZD2XA4AHkdnB6GqpZaAmtQuPpWf5YKKArzibETnVpJgCCqy8EkZPbg2vW7aURqjet6r39NbmTxu1JBL5Q",
  "key4": "214vKzzUjZ67VZLyDhh3karHPSBXrTorrW7x2yRnTQbkgrVxV1hySzE5Nt5WabMW7N6Mzu6tW3p57S28Q3qNSNbq",
  "key5": "3umEoDGJvpRiiURvr5bZDSiPwUjiwYL7PMnT72wMLNZ6WkGmGc7m1yBk2PUDJ1JeKe5rYpfXtcnUBfb85SDboynn",
  "key6": "33KaAXhABkn4yVRDtYEZHvGsXUmR7LoFM2zUMySP6w2GmwBUueF27toYWr5g82xjMdBgCbdApZZSfdh8X2nsUgrD",
  "key7": "2BC1zwoi8SdnQPJ9MBmUbrS7ymJbTfLSvF2qYiPcNWnJvZhiGkGKTLv9i4pZZe2iEWYaxyoAzuZiwgDGSAh7t2d4",
  "key8": "4418Sv4TT9zZAZBF3HcNdKsJdXdynSbYuVyo7qUpZCTKHvjAWAnuhJ1ZiLQJXfVcUhaoUYjLrc39nC8cET6aTRat",
  "key9": "46e6EXvK5AiBojYJ3nUug825n5ZURPrxrEmaKeRyseeiALxh8xDSDFenKqP2ZB23e3MA3iGSBqUQFtRNDxN7Mzc9",
  "key10": "55B4UvFk3FQMb4HwKR8e75TUh9hi6xJX3PeCFptcZCCCyDBvf7jnryTKrpMaf8SmGb6WPq6191yKmkFuRBsAW7aE",
  "key11": "8FD3cAH2HptBz9Vmmph7HrhZjKRoMZAGc5EfDvhSuAu6miT2Tnz6L8Vi5aVk8WKhDbkwSEt6auxcGvYdHVC5hmR",
  "key12": "GxY7XoNgMnHePCBDcJwn3FJoGoNCQBMvtGEfxnYBVdKQ3ZuhKySqrj3AMT5hun9YEpHuVXBjPgkgzfnsZERpuQM",
  "key13": "3TDNnNqcPFaWDragQUwSbGs9xSfD27kBBVoEhgJ13ux8m7Qy7qRPafT5fToRcihPevZAQ5ckqnSpVZQN8NTXEWFR",
  "key14": "5TgPG9oeKShjKSChC9Z3GB869UiRU7RTNuzHQEz8ZFUTUKxa4yfTdhUpBDhNwNPZMz3PiZ1FEt9XnVQ5JVZEHVgq",
  "key15": "4qojMPNmHR9KWGRdA5ev8neAg5m5yhWYiSKXVgJT3QqTej6GH5qqBtmPJEYgvRqRFSehEWvsUwpFfphcKatFTt4X",
  "key16": "5qZyALqvZptWY46fmJXtTv9ab22HGnGM78ej8s2srps8JRtfonL9EVDWSrku1da88KT9C1mvfHU8Sz5WC2TVwM5M",
  "key17": "4khRqtQ9v64PQbQvULfgYYC43LY5iNAJzDBgqdEv2rvcUvHJdwMc1JE74MBRzh4HMMsn4MRwr2xodJL5dwmqwdKH",
  "key18": "3SSxY65N8Q1dTGftsHsN4Rr7JfS9M2tHJaAarNgWdzsQRXTk3DctctjFoEe2V7EWhWR4mrUS7P4yGoX62BNoLemy",
  "key19": "5hwHajcPLDgMnfCNKyuN4GhS5vKGmaWSAuUL3AwuLEwCyUgqEZuGVxkM1fZC4tr4Pe3qGKhgBHhsSaKeJTw9xHze",
  "key20": "4VWnbqKUBnMyi2pVYFady4NqYXyztgqMcB2krkoNZbi9YPGd9eagn8cMFejBiMZ6aGxmiPp9REUZr1BM9uNKuviz",
  "key21": "4vzPGPnUAb2dePHAtFBt9UCZCJjL3G6XEmhvT6cLrWGT6jkQFN5Bn3FmCrcC1WoqUEWpTBN2MM9WwcMLftwV9NTi",
  "key22": "baiX3FzQ71siAQbfhoq5Qbpzg5HbvkRkvc4DuQrWMR3n71Waj8bUTWtD17f3Vrzuy8mayrpGmYqQyeihBptEPAG",
  "key23": "38ZDcdzgAJGpAFDxbWcfCUxnDtFwXBBtQZCUx8Dgc7rdFUF6DXKWpBDLcy4SPyT8Tt9CyCQLLeE6Ed984j6zt6Fj",
  "key24": "5Z2ynK6TmLHcghGc7JA5MhfUHL7UiTkWHt6u4FKaYNJZAzLHZgDYp6mCFcCbfZEHjMAVj5pLRu26uB2xPjVVbNkj",
  "key25": "kcNgScU9sVWwWk2FYCfr1W9mJrDrzSsJ3Tif4d515cp1H28SU99nbtsC3igpcVNEhzgPsytuj6hrepq5aN96hpj",
  "key26": "2YANuA2bBrVeKdZ2sv5eDvH9kcC8LVvdcrvPnUaCkqT6v5kzMUcrzG5dpF3CD8WTqLdrZkMPP2UmdQdYK2Uw4BHE",
  "key27": "495bzdUc2LuRvYRhHjakLK2Eyi9AX1iDwd4AsR4K4RPrFrXKtZ59sMLnsyyG6bGjF11izQXZWd5N3etXuampph9D",
  "key28": "to5WBLhEZ8xm364wg7wo8VhikVBXUdpa7e4b29QsybfqQvcx4tUwK7iE1cC4DHACRztLmqh64Rbpk5aEPDErLL6",
  "key29": "3MiG6A528AhE2GLfoLm4QJ1WLNotBZEKQHi5FSe9hfQ91xBfKytbFp26RskVAvZBBdmfs8bhPok4b6FXduxuJWQH",
  "key30": "4RgCtNZ9ATfn5rnaVgqbEU5ugzAqDtkaq4zZjgsVC5oSLifambmc8eEYraCLYQyzqh6EgdaRwkDuTDxAXEmhcYvx",
  "key31": "wFHpuJBWxtSQG7zq2E7UzPgzWk3iN91YNRWgaDWF49dYg5QnRpPBuBz7ZP6pmkUHerNqsY6Ajd7GZ1USxzTFNJa",
  "key32": "4J9C2ZhFoXQbC8BDcoqreKNDCwQtQesoDkZ28FHQxqxyct8GkViqK1xcvWfP6JyYcKNmympJVR7YmUG2ZDvkanV4",
  "key33": "25jhp71o9tv9LB6bbcrNFJQryZWJwunS5ixkrE1pp8nBTCvgPLdXNjwJE69MEdKFFSwTSQy58jqoY3Tc4wR1neZd",
  "key34": "4tAZZGGeVC3Ph4oRHgX8cf1EU7qmUqBwhnkpDUuWXS9arDSc2DziHXiB4qfqJSzQ8wSMW4KUcojNpkvHnCbTAJSt",
  "key35": "4BfcjXJLDBLGjfwkaqNUVnHKqwfiNrPvFkjTqZhM1dTsU3y4M54CkRAgkRapJJ7ykZ7YHkNrWG5RE4R15x85YtiP",
  "key36": "RyDZdza4tNhxBGsU3MWZtYRaSai9v2Z3gM4bs7yUwxUWaTGZbLAeuMW4nTJmqHWGT4CqeZRPudakgAafYMJ7BH6",
  "key37": "37FT6dT2awqKrBNAmyqnaHBCANUkis89M6VvQfJ2pRBH2x5fot7nvdgUCh8KDoqMdSo8Md3eNVzcmZLYXHHkEtJx",
  "key38": "3AujLEs7BhGoEt3cbYCpDv4YUsm3cr3g9Z2jj7wZZ9wCMedPUE7vaKTjxw9kggPt7Ao7sFrc3RgENzsLpfJ7jM6H",
  "key39": "2NudW3b2D628mKLFqjky4GPvmo4hD9k6YjdipQPQKNZw1J4RJMRdY6gk8sdMcv2SiWFJoFZowT7tQMes5Bma6jmk",
  "key40": "5nA7Vo8du9k3cNg4yx8vXXx9JGKio4P8CXnY9EQRnnYM6u1XS3uCTbk3draohsfN97LEMchahwRisjX4gFWcU13",
  "key41": "465SMyTGaHCGDx8gmom3Zs7rDoCTZzKrUYEZUSUDn2M2yUBa5VeMw2YKDxgcXyED7zKkdzmg51fvmkWqQpTVnhQ4",
  "key42": "5sNrchrSgL22JiFmC29Mq9eWxreKMicPgNYfeTgPHEZt6XtYp2jhSpEY5EpVccJicDA8B1qdVwmbeThmnyDsfemP",
  "key43": "3oqB2pmibJEbstrcWkhHUDj4MkN1tL1K8xha8DVyW4bbEmavHG1fArW3deWwmcU91zDCsw852RdH25NL4VYb7bBP",
  "key44": "3QZLybZmay3jdLCubNvBS4SHGjmT4Dt7Tp9hegJ3qKPhvBL2sDmqmCcnPaDYiHU5w5QGXf22bWpk6qHvzJTAms6h",
  "key45": "5zacUXATk5bb3zLcZ5wSkZAh29MBgCUPCphgrGbufK9he9gAfqAxPgMXQB4sCupmM1iy2X13RKFFrPZSmEn77a6G"
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
