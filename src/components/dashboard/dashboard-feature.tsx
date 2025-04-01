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
    "2b4u9FYfTuPTXt8ZL6fDgfwVQoUM9wxq1EYmCxYLbyxRLTFc7nQ54c1C838R3HcG6A3iNtzTQe8un7Bwi85WWip3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jeBBBVphcazEgG7gHusTPT1CVxX7CE8tWUg7WuWeunB9rBQnScYy2NoAqqUwpMStZjSMka1Yi9XUDs5KAKj6dY8",
  "key1": "4YfYKiXJKpPmguWWFwvY79uLZpnkCdW799sN3kbnqri9nQZGEPYoJ7K4zBc4GKVnq3s1b6LUdQn3ziYBYZxR8Aex",
  "key2": "3BEXAWyDecq3oqgLyby1oAMkPikqj6rxsLhiKtGmGiHLWnw1Q3kDW3bevVjWgaYQWABEfebdxMPtuiQ1ozqrsacS",
  "key3": "2B6hXWBAsMGbyGvGawRwEY7V8ryUimhACM89SjtyjuuEWyEVSGr2rcBPj3RU9J6D8C96yqa8cLrv1zmeyKtrH7q5",
  "key4": "2mAGqoTpbTyapXuuZp3tdBF4MP37UD4Af3DoQornYETtTRYNucRcgh4TPqGL9vH4RVC5KvAQftiHjnB9s8i1SvxQ",
  "key5": "3X4FphYg5VW1jChn5BBJk4cf9eRPx8akazrEUKqQsCvesh8icd4k3n6VnT96piZUR1YBjVTVvZ3ALTeL97RPQSmr",
  "key6": "3Ma8rSKpnf58fzRymxrAT69z6FdP2T4Uh9rE7Y7WJk89Q4aFqQou1QoVHx4wSoUMKXeLkCoXUrLppXgedsZzpM3g",
  "key7": "5pD3ihNgTTQ2gZDeLQPxVA4QMGovPcq2rEF11THXU3UNf6NW8yCf66fShSG6sqC6Nr8FB11RXaZRH1BBEKT6vYsC",
  "key8": "3U5zwSPyXKPcqFXabezr1iKdXR1DKH7W66Zb9pqqFidQC9oMrevpujKQsXEbXVJAsCTug425YveURMambFjSHoyF",
  "key9": "66ALVSBMHXZZzP59Zvu58rgyef8A4ssFbUyyvUEgF8mhR8B8X1LyK2gMGnGGvKLrYzmdZTPdL87sxyf8YrMABnhS",
  "key10": "njYzmdbZZTjMzpmvn9Hv1bR9jaZyPBkaP7v77pkoMt8jkgLg5PjYc7wew8G5GoovCVSkzkvc3PycCFH1iBrw3UL",
  "key11": "3Fjk5NWx2Asp3QLJCzvaF5RwyxfTETm819jh9CtxLeNoxrqnmgp8wGt5yhptjmeTLGobo5PS3v5ApFu6paAi2ppG",
  "key12": "42u8mdzSTBT8tR2ZsA7J6osnedwP1WcaxJ2bL816XYrPLByoLoQLim6i8mdDhfExPjZWcctq2ANacG8HDxhRgkSo",
  "key13": "4e7KHKZEXejC7gc1gvLJA8yv5j9xxpTwj5vzTj3cz84Ze4ozM94HJtSPPFcVh9RiGBMAS39216P9pqFLjdtx9Ypf",
  "key14": "3Z6WkJTAdPu1Bh4BJzZaD5yHhVvtmHg6i6hNAsNh9pQEre2mCXrsvqRdWnfqA9g5CDfvnGXzVPAJPuXEFZXCggbZ",
  "key15": "5M9WxsHBZNkQ1RbBvkNDpo5dvHh6ue9QZAgMgV7PHyFxnNYcMKeRZD3wm92Qps9iSNxftGfqRwqmTNat8Bzkx7M4",
  "key16": "5LqXqVLNkji4MnePDV3PyThV9yrgYtq5GDxQ7GcBboYdtw998NeDrRw9Eruc5gDhu75Lt2TVHsBK3HRvekikLULF",
  "key17": "4BmqJryhmjDFsegijv7PRru2hstT4ssbFhRntHMVFkGm89CHhDzQv2qJLar9mQ7cHm3ZuaxTDNkBgqGh2AogcMhN",
  "key18": "3xVRpVEjDXYGmeo9R2BGeSHYtEEyYoZJnoWunhRkgAz7Httit6NFEQvHY1YZ8rbQjAYckrwXeYDzvNTd2AMLwZY",
  "key19": "5zgLoHbshDt81orsXzZestumPxZpjVST7C9MEtuPht9GAzAyJcGVTdk6521ZZfD5yXDxmK189qygbypQJuhbw8jz",
  "key20": "5HdmCYCKPrQY8iZjFsVfkGNhv3CqapKmpajTYjosH9MZEKjCoxnPYyzGsaVMnjcF8LZp3UMXJ89nU66Rzs4pGAHz",
  "key21": "4r57DJdwycvdfGVZ3d5UNiXxMteoYphWJN5HTrrAFM42W2fgUvJNFqDhw1qGNNYErjoVxvuyfgk2bqrAKRbWx2xw",
  "key22": "2uZgeJqxjB6CLfRjNCZrEHnyzYNsyXKvf2H8zrohVxe6NGMd1dTdimV8Lz18rQeqZwRSwFLEnrptCZHKXwqECgt4",
  "key23": "mV4xissb2mVFZrfUnVJLoVD7w51cY7MneNeBGZhkDK4mTK3LgH6WRQ6dtKqYifcXce8RSRxdMdbjVv9WNmkKRb1",
  "key24": "63aBB3LeGh2xHQ9D9us25SpeqYcGH57vYJ2QnL9tRn5VrdBh3eSe5E8bJYcVHFbFRNNinftJanvewaZAkH2AWVjw",
  "key25": "PAoXtesAkK48WF2QJjMvTAWqLd79K18YkLXVq6zt5D6xDxjtAHe9sZChsLneR93C5kM4xgrs2rM2Vm574Aahd33",
  "key26": "3rsZkSMH9vCziSCGwfGqRYjxZDwZFZaa1ndefVTGL42bGaYvheDiyDu51XGmWR4QusRxkkoNKs2XA38ud9csmiEQ",
  "key27": "3ZQ8w7JeouzNb92aLL72gFpk2LD79zEtHKfQ11MVqZ87w4wYA1akGJySi6Hhq5daje2WRgi7HNDLNewDbWrmz9XD",
  "key28": "3C4KnazRmGvq5x4TVJasJbnPDUESGqRucfDJLhH4BFZMnGNNCCJjfLKX1BcboXuNXU7VV8UCZUoviJHv5EA3gz3Z",
  "key29": "ktqKiocaDHbQbF142gt5FgRK48fWpq85x66TEwQrDqHtrND9UcTuafRTcddKx7khLz4LRQYkkixSSJsT5YBnU5t",
  "key30": "etziZrkGpRn3c3v77CeeEjknxykp63A6Cza5ZPhbeqqyokeyPZBmtVbRMBf3tiZW9rRUBk1AG2vcYzZGrjva8ZW",
  "key31": "HxWxUv5pDKQBLeYcp9RtwkP4M1XPGQFQTexTzUwweiSbxkCXZ4jUbkZsHoHYCroQVqmCSJJ64Tb9ciCZ3U3ondm",
  "key32": "wSw8jBwvqSTbtdstpXVAg4V8sEDr1nYzeWtg4Zr8ssJb8aH4QCTHm57oRkiqBTjRdSfkEXw56u5noSME4KQXTnz"
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
