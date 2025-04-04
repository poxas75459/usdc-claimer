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
    "ZWaaMiBBy1RVpsNDDSzzaEbT9gEU6YNs5MSdGx6sqZamYixAMQy44f9YRmig4PDEdTzvgKzBc3oCjXAynvF5Fbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pH8C6ogkv1FLSLf3rdh59xzSymmYDGZZAedb3iGXWyMoa1MhTrLfv66m3NdZZmwHBfkHBJRu3HbDj36fbtCr3Go",
  "key1": "2ppnpVepA3xS56GwdS62ESqGEbAX8Era9pmT5GWGdV1Kvdaq17ZpofXrmUmvAvJMBmwK56jvHriVaje77yWWyWm",
  "key2": "DyFdiymUzC1iJNUApkD7s1BaXUkEArRJvLpbEcvZj7Y5kfbHAkWR5KaciKdFeJ9BJ8JWMo99KWWxJUAFAiYXRkq",
  "key3": "5zmKZure5ZiLZ989pegZ6RuTCLojMjUkcJ8AqVhKZGcj78CtsgeAfgSwupBVkfvCUNMBFRAKudGdAvZGGJDxP4tA",
  "key4": "5V4eU7KqHanma4RwY4vJNRYVaStN285AKLvkvvB2FbyGG6TzFtXqZzAzpVyP1wtBXBEPF1WP4Yh15N7JxzEmwRrz",
  "key5": "x3WhL5hB21Qty2Knnn89tFDxTm5kcLY5QdrivbuigH1sanmD9jerUkUd9Y2QetaotiG9jU45LmdRsuz9f7cPqgW",
  "key6": "31wsnMBTxEBcFCs6qKR7G2rjLTRLz2BZTxDMp54uspcsKTrsBdgANAbji1LkE5wA8pQMiwoFRGziPgVawQodtiy9",
  "key7": "29r1utFwcaVBL6NBHGPpXWtP9spLYW76SgoC7KZWjvNJMKB652xVF2VxqB3QR2HkftyNZQ4UyFezeXxwuqWSs7vu",
  "key8": "2REX465DqjkfyB9K7JJw4tdy44RDu4RtczUJ4v3Am3UpxPXKEcoGVX1M78HJdGmh6inm9HnmJdKfB4ZNgd6jf8HN",
  "key9": "Siyo1z7u2Y4j79hgXqmH7q2P4dJeM2B8zKYobEegyJy66WMkYNia9U3zn5seHkszAMHwJzx7Y1NFg1jmYq86sjE",
  "key10": "5bgzHiTt2C7sCLagMt1KoJahy8nKC5r2ixAqLEFKJL214JAQaF3mVSBMa5WPEEVZQf3Ykce69kBSczQroT3Kattn",
  "key11": "2raomvXHCmd3BWzJMTu7DjYtACRryJ7GfoUDWuqqDFZs382SWaDfQjKdsry16DKcuXPyrcDfAap8jKvebKgFyCxi",
  "key12": "5PJGGZFiJvQdvrVX7zat9QBnLKLb4wDQsRAw9hN7NpryeZGfzPVz2sZeiFxAYMca9zLLbSkfNvav5gRSnADu8HHF",
  "key13": "2wP3UEiN4nFHkhmv4UR76Z6kqmKLJDMxJNCR7BoenY3RGcHmMe3xtwgHTfXXGTaqNx5zMfxnbtSaMuc8g44LLaAQ",
  "key14": "3nWS1vQsGEP4JPikdhAJSf5GAau5cxi4ZvKHGD4GGRoYcgzs2BQ7oSNwzhfFk2wdkWyKyf8MmYizRsz6QYQ8P2fj",
  "key15": "2J5NGrB7cdWvfLN47oqvXw3wpYr8oCAxWDLzccP3Ht5PvW4DpFngs69XYheEMWrbUm4CQfq8CMp5sizstpXFQFEz",
  "key16": "TNheScnWBLcfCU6nydMn1iQVutBgbttdiQqfpW1is4wNnx29Gnc1eWy6wbxfsHk8U4fHgc4SpU1dYmjKyaoY8Jm",
  "key17": "4F7mtJ6yHXD8jEPY6jaoNvPqJALcRSYDwAoFmT23hfJbJH6fQAUeEa7QkgRtZBbKMEZ3MzyXXeo8t6gf6N4VgF3h",
  "key18": "28P5Ufg7FvTKiUACwmLeVwnLptESJ3tb1AzgnxF2LGssReUsBrCSSpuv5hkFuLD7ijGyx6J4cggofuGkTm9J1quj",
  "key19": "4iV4M4ZZ8nbwUNGbYUHvx9fXkUf9Q678KFbJry9t9ZdUkHkhftagN1fuM2yEK3gMqiYR5f6MLiF5VH1ttoYify1s",
  "key20": "3DUqMPprAUqQXABzdhWgqGbGQoYRbYSCnxCr9An2AiAgmRfNCAExyaZ2eZmj1S2Tfn3a6JCpXWqZMdpvpCyWCAvt",
  "key21": "51j2yCfXKr2KGcQJXfkkDZP5CCzfv1PkFpneyKeL8T9VUNmbw1cG2XkS3eUkM81tk98yA8MGXNXnSnmNWogYh6gs",
  "key22": "3cqj71j8fijNZe3W4uhuekjeicNUBpheLN5Hw2MXE79Ar85RTibM641XhehzoHJ88GBQ3wCaZJ7ifvACF2pRiYjs",
  "key23": "5yXEAdc9TBwGvmBdH3Q2gJbzy9GW1xXYea6ikz6ZixY2h27ogWvCgANGwaQKaus7uHNb39MMZ7SyB6ShsYVrYTcP",
  "key24": "hk8LAzgn6HFtTvejEcypezCCqL3EJESEyXc2kNmp1NGC2HtCRamNQAuLeVNoBJp274kpjsnsnrKptqQWpsxpbQm",
  "key25": "545rURw4aeQ1cbrep1AGg2ZX9GJbCRdDZdvbXFPoEQMu7C7qbhDHKgTyYjgfq2BuDb6xt1m7cA15pZUkAwSwfVxL",
  "key26": "3vWnVcc1o27rsvTbFohkzUWvcCZFZuNr1ftgj9SWb9fVcriqf4woNxF4kmwfJgA1CuozsVaWBHwfWcWMuKuMMmuq",
  "key27": "5hTC11mjybtB7ZDNNvdpJTtMzyS6ZKCCSbeHLB1zu1A2wVCp4A1LEP4cHAwdb4KHKCPZ39PZ8CetAPeo2icXxTax",
  "key28": "2yHDQhFeQP9SLW13Heo3fsSE6Uj9VeRNDyBH698sCJ9NuueshAYygmDASMUu4BrKt8tc34De7D5ftUA1wd4E6yDG",
  "key29": "64iZyZ327Xvvvw8F9edxbUSfnzKExDgZcbbxRnUb3Nebr1pjuQjWBYXrnqbUKw5x5DafZnmvPC9P6noNsHiQmfow",
  "key30": "5w5edhAPaZqf3F5ck6y9H6A8W5VuUVrPgwSUYTKv1Wc4tTj1NxutHRZgfSqqFPUxPdUK4mUUVmUsxRd8Vbvs54z6",
  "key31": "5xVZkFsyiMZB5n1EzTDKqvZ4k5ZWMZUcCeadtk8oqmDdWP7JBy2bMGqaBnY2kfjGg62dD3HCPND9zrHxMDufmazU",
  "key32": "5ZxHPiydUpUK8cjBgtruAip7SbaH9mGYz62oDRfjfQgaE6wi33AW178ef25QMCWMHe212MFR8tpGzD29WwQjB41N",
  "key33": "9iW78Pii2TfL7VCxopqVaUw2nDwW3BJ8Z1LpLo9y6NmWEaxrHvaYGRyNcRAVwja1aK1ZCc8SCtmQyb44yUPkTAJ"
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
