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
    "VNBD8fZKvHpTr5BB1rYf6pmiqyUNqbvpdJy8o8FJvPBXJUN8x57ZwsyQR9k1dCU8BnyUBbax9FH2CgC9moSj7Mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SVmsTNN3UqswopvXCf7zoPJbseCJqSurFkiWd1kahwUxbYwrzTcE1Z6TQAtfbYCMJA941rBfHkcSxeLtqsHU7Rg",
  "key1": "5Sw5vLw6TdqHxTQgz95wnuZg2QPxBfcbHnGBiZxVouF9XsafATV2b7H3S3d2irtmFLftVoZvLFQd85vLTxBJ6ADr",
  "key2": "2KUS1gs1BHCAnFiipNubkfrCgN82MpKofFRsAhP1GuMNjrJDPsJUykCEJCF4mqVDRWBeo3WFr41MEro6EKDpnm59",
  "key3": "5PDdHK4WW24VZz2X3iUzhEbXbovGYHF99ryXzhNGNxR7urZYKLY2MqccEW69Fa7MyMeYu728GQTWiRxDjWakzc3q",
  "key4": "3h93X7fRc7qT8eK6Prw6wS2EGGjd9xN8afs3KmTrZYFCSBEDJKyzoExXYw9NNJt8r3FwNKYbLQKyRnuGo4N5QEit",
  "key5": "3CDtGnNAJtFxx3GmErQC1iimSizZUG53LQFZBhpqsYYFAwooiTrFv7M9HhNYuf2REjxwJs7CbjKZvwd4hxsru1v5",
  "key6": "qhTyK8qaBZqRLwsykxetpJuphBUcg1YPrx2o7HbBw46YwG7ghCpmJx6Q5uHNMuUoKTvXVCXvPDdDqrqrea9eX1n",
  "key7": "4RLoJxGsc6fFVLB9FWSwmzqj5kxXPJFVYEFxUpnJcprbz16kU1VWShSqGrdzNCT6we4ib6QV9cFhiscDvqxf5K26",
  "key8": "noFVDX451UKWZtQ644Mk2vujZSSzVa7LXPgfZ1ZPbwdT41H9LjWi1WQhCVu17ZUNxWnvHSjnYsAFzCAjgWmmphQ",
  "key9": "27r2QPadKKCczHHV4zzDQm49adt3dyvUS5eQtWqpQjfKCxuiFguMwDNob9SfgyP28nJr4zPQnxJs6sojj2sG4vTp",
  "key10": "3kovecdbrewtqRCeVViLVxU5U3yCHChpQhsVHorwBKnyrVzMoT8MN9AvpTrk985qwSomqtUjTdCAsqW9CCzqyw5u",
  "key11": "3WVGgAFgHXbzhzLnTYhDZc5N5Y4SGJ3dfJ3Pi22Z5QzJH9KGTGLVMFCznJWnDWY17D6AfX9Q7ucNbkbQ4nEWr2JJ",
  "key12": "2g4cmx4sxXNWK2Rfp68w9aWZE63BTPqzsLCjGFtKxNVScwsSaNtKwftVahmKNGZqBbTfYoAJ96nCUsnGbqGkRxRP",
  "key13": "x9CVT9juAzxejh4azxggCfzLX21JdHFQr3xTa53FpuWPa4tTVTX1KJfcsvLAby1faR45FvJJam1YAuHBsbdsxJT",
  "key14": "5yr8ksMQZXdj9igwZLNovCvpiTd9kwG6GHvhTAK8UxR7YKS3JeYGJX2YX4vWnsXUZizQs4c3G6MDCLBZgEZqkLYg",
  "key15": "2po1qFJrCiNjSupFgspBynq67CZp2UPc2VA1RMKN9mg2Jpu944F3Pk2d8hXoK5CtvcojdMsfufiF3ZUAN5KQfC5H",
  "key16": "2p219J2DpYZbg5ANEcwt3vGWAidoA1btsN8KsrdgDSg5ZQ6nZ7LdMM8rkk3tANTnt818PWC2wNnBCZ6Dfn6r31sW",
  "key17": "2k9G6571zbuVephFwdr4nLSjJZBHzcj6rSNpgKmwG5qvEYx1YAwcpgu3fhEhExL2BGde5CyUDLLo5BU2uThXYpbt",
  "key18": "3pJiDu8p7zDvgm91P7uzqPpmgvZtuwXzqGW7GVFPQ4BDdyYMBCnYrZDLGcySEnqFj22pvyKiMHcFTDF6tStELYL3",
  "key19": "Bstdm9aDdGkzMgBQFw6jXVXv9Je5HcUV6bUiTDqNA1DUECQ967L1xL1FKgLGfioHbraJcqFLJf7j3WWf9gYzrmf",
  "key20": "5JTFVojC4XEtgNLZvruANRw2fTsZMhayubbUcH4EpzYCKEf8shGxHU3dnyfAA8T9tkbS1h3muuHHXcSsmHf1ENS3",
  "key21": "2jvn2DeRUuxY8FqpouKQ2fwT6SC7gnU5ESPeXRiiEmELbfz7qkMJHPrcWgU7vEMD1bCKgEcJuut6uwjRhNEjngW9",
  "key22": "gjp5SjMUJVhuvfiYHCZuAWqqj5QYvzGVS467CFwymNryfyWKj1qGWjddTbQBkqECLZTEy9W23PpVLyKTy38LdJs",
  "key23": "ArMoNAjRGj9HhSVWJRTpnXT3QZFFg5LP29enguCbqrvv16HZkLX6Jq7CmxFhCKBPeBpXW7kQdy2aWz62ShG658K",
  "key24": "2RXNM9Q4UW3i5VgAzvNAP8JYgyH8WLaASMLWkmJZq5z8VgSrswfZpAupg9zRT8hPABLNSkXhhtXHFup4AsCsUyK2",
  "key25": "ko9EAgctMdDBaY9DiMM2eUr9SuscUF2N8DNqPVJqh5M3C6m6anYKqWsJS9iaNLsm5CVLwTrY3MAbvVJSuUN4isM",
  "key26": "QWmK74QxfJUYNk8o8D2egJKnTYrVZw8roPSgaBfMTB7wqRVLSpcBzngNTN8nJUomFDmU9Pjf3yfitmKTXLW38rL",
  "key27": "4AqrLk5sdMUHQBoUVutUAtDekzLwqrA6G7bssfQrUTyPz89jgZ2APCAtUWUmpYmDfkq2MmkXeRiGXxh3hPxNbpoF",
  "key28": "4LegXMJmrNjt6AT8HCKrQogx8wCDNKdfiHw5EebqqMACfFZwBGSzZbjYwe7E9yKtgk9hjmJD6omscja8a8eaKrmY",
  "key29": "hSLexNgcZNkotW7N2VfwhfbacMjSfAb9f975TeWHnsJScy6NFJeM7jWyGRjSs3q3f78SCrYk7t1v55dtwfpii5x",
  "key30": "3PfMDxLjbTnLzm9Q7YKnchL1LWyiY62wYfKo27qYctALErjhkq4wvBEJzGasEXv7SB7bpfGttahWSmFSkT5KPNR8",
  "key31": "51EdYK54fpjFJArVXDUeKqFBCLVCRHNc2tpKxB6UjrYXtHAKtUqFdjXGrADqifjJcZpu7BtYC1YKnvMRo7pVpby1",
  "key32": "5hGkUNk6YxS5Mt4nYAPKG9oQbZH7YWRyYAuRHG55A4vr2MLkxYtw3FjLRpBgcGxg97zG5CNF5bodDioQ2bgAH1wV",
  "key33": "vXhpgLgCBCj8DKvwgaUEqrn72vEoxK2DFbtWm2ZMvTusZgZbpPqbDJ2ko5dBJZ52gjwsQk7uesFgeaYTTMhzqT4",
  "key34": "4kewy4caCdf7XcNcfXuAWo1qLgJCvS561bPfpAax3fcnL4637ryqzmigAJTnA38RuCG5weakS2hH4DgQQj6Gvq3z"
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
