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
    "5YcLYHwPkWyLbJkHK6B6rN5FEYJLne54qLFaTCBMqXkYeqLNvEZ33mCLfqbesE9RDDDCCZTzGe86T9EKJWjuKBTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qgrYCDC3jgmWwUvySNAN757uzhCE53PdYUkJcBQZYHc8iWB51g25DFVVaRc33zSCBQ8aXW8es9gMRYFHz5Vvw52",
  "key1": "5rTmBYwizciSKDtuPHK9UMZ1RQc2rx8AmaEK1LFqNCys5jUN3FL3YUKkwhz6rzmv9ExibF5swWTeDg99VBhc6qzK",
  "key2": "3upXinSfQQCfG8mVFXDw5Au1hNtZYXNij5ZDN9ngVHkBdW55XGJvZWxQNQKv6NbUF3QeomvgRiquwtwQWBQMwua6",
  "key3": "5Eu9QVz3n66HyZrf8yVb6nB9UF3oeDfYBY89341DrqZVnDdHEHQS9x8QuWm11YyJfkXvBZJEwqw3EWhsGkT7QjJu",
  "key4": "3bZURcTqK5Wfs6SY2pmwnEgp8ofw4YkQf6iGqngwwrgSk4P6a6wvrDZhCNLASK4dLmhpWG6C3joC7TmvBL2BvEUW",
  "key5": "GQAbxGyn1VeBq2NKiDecysNanVwx1NT4AbXbNzLL1CyPBRmwvEBtNzzzrb5MCTARdDcCRB58Su5hJG6LVBNSiF9",
  "key6": "5Gx9bvg1pJ9mU23CJMgw5q3UA6EAPGiwRaeUQ6wGTJu5ZV4okqWhern9r4xmJhxHXzj8h9tcnx9LsEWTdchCVd14",
  "key7": "5THASSTgYBTBKNQAHcMNzvKAdnw6vPZQnrLmVGz44gTUspPDnkmZSbJk2eFoM1zkxq6uxevs1eNj3wUYTyiiQM2e",
  "key8": "5QbRGj9DWf3MUxnBA9tDzojoRBs4eb65MvrCYzpkBveJjmeUfZoBPVbkYP8cW5fWMR4JJQBpJRqj9ENAfmDbJnob",
  "key9": "52wM1hfjHW76GRcvd694Sw6oEvnZCWAFdHTpGz2WjbfgYG9UwFw737WUjy4zeakyAhAv2cZDJuDpcEdG9zkG4aYL",
  "key10": "3Q3WbHxTQVikKpqMAM1jMhCxp7DVY5D79CANzMXXwBjFcZsQqckRPuwRdiiv9A4jjiTvzQGphK717R3JMTukBFaA",
  "key11": "3adbjsGELFA4C47aKEwdkw3baG7mDA3o4k55TFtHi6UsbqmW34aHLJZWhoWSLRZeHbrH9CJntouBgRdqzJvcAUMk",
  "key12": "2iegexjcJ3aLMapQ7faq7Jthyu1us9EJ9N7QjTNiCGbpxZhmLy6b6hGHr6U3eD2J4ecWqhjZ34aLVVRJzMWuDL7X",
  "key13": "LXHwxu3crYqSYXpyNrfEVoEWHMQtvTZYCVe4itCCNnkdppNjKLQvzJcv2buVpKqD9v8CGVBKbqhXsxcZUaGHz9H",
  "key14": "hNHpUdzsyzcFvkQHcQjKnLcKszLHbB4gaAXR21Fn12pSvrKMPfXeozvV57jcengxhnLXfdZhQ73n1yff44Vw94j",
  "key15": "2nD98QpppX97dJFDHQYzNYcFPshYqadThRoUUREXDmU16o11JFH2FonYJiSYenkW3iJASB4vktau8pAp7CeGynrw",
  "key16": "3kKuK7r6jE9qwzexQd7PUWPVTmMHPKQHcp8tyrDUt15a3GrPP2AgCRSx2RLi6zx9LbbmbwUvXYZt3Ck1Wmrgy4yj",
  "key17": "5F4wYsbgBAjCxunXWiWhpLp5Msqb3sKnJDfEZ5kJWgR4Kua92ogR9XKCroEWNdgKA3wjCpWrUk44XPxXfR757CV8",
  "key18": "4GqhGKg1eMM1BG13hXaWQ6SDGBxDJ475wv4UYeQgYHqv4kJf5Zmj4GVo4BQgQPS4cfvhWJ4PSx5LohVxq5czkszK",
  "key19": "3EuB9jCcFDDr3LjbGpU2NMxF2JyaLYhAs1jtjahh2TuFYpCreoYvqxc4S3pe4ukAQRcHAXXx26kKUZaudxBhh93J",
  "key20": "3PyWfPotXBa64MwvPknuih2xaknw9LXECooZKMTRZC3QXSGCpUZREdUjZHLSqyAhhP6wf8xt2519qoQiGUEAcSo2",
  "key21": "y5mH7H3SLP1XaUVaNsMGTXfmkknvNyGitRKS82R81dUGKJGKyfm8RhxunUHYuefyAajmzaV7wBSr9PLkq9cHfsf",
  "key22": "E4CS9xVgWcV7GGbJANBXPpjcRTPGkMwcSrsf16RdbbDVSUz8gDx7BW7xSX4sCrgMFVNUFxteQiRmge8MUrXPtpm",
  "key23": "FWyQY4NmjdWamuHfecdnVGX4fg94kUjrgznjc2BQNtBP9fFvnH2JN2NThpMRNvqYG3mgBSERJ59UxuDg9da1k78",
  "key24": "2HL3nXyi2YnCWPEm4vMGHRjkn4wdzhe2zwogh24Y9QD2nZU6f35Hh3bLTuDRNBqiEUfiKzppwiWN1HwA5gHSAtNK",
  "key25": "47nncKPwNgKBQcngwsAx1CWD8kbKkdLXSSKYnAcErKA1vpjiXFStXy1MqDXNbaYHZQaTN91gmGa7DYCF5BSQCyp7",
  "key26": "2jnb8rfQyQ6FxPvUmxNC6HDsEaS82MnnuXSLNaVa3EdvxkLgwhi8NwbcNApaALRLDBsfSjTUWAAi4xoxVeB4SkeL",
  "key27": "4azLsegCJ16nyMV6Ttd2kqAJS5uBwoKVCeGG2DquWnvD6UzmJxHFPLksRcbqymfWuLsCDapAiJFmieT772U6RiP9",
  "key28": "Exudt88W8JgsXZ8wcn77tsvXq36nmRuAaXNDbc664z18MbNnJVpD4Gdhi8U9UAiaTureQQ6DKym3wQTMBKbZY13",
  "key29": "3M9Fbr7z4Ehbh2E631aH5yD7oSTJUoJPRD6YTLLV5MLhixaJybuNQbPRMfCtSCCf6SkVSxr6BbFxjSxMs2e8Knov",
  "key30": "51JDJzD1sw31KP5WbBCLWJARUoLYF8REnLoq9TjmDqUeKuG9ax7ozYN3WqcPPTSV5xLgPny8YQ8r97qCDWWrZej9",
  "key31": "RNRm2PvsZrs5AV5b96nxM7kvdA115DguKeH3aX7gpLRkvtcvajdNo8QAgJNiFdpTQahPqMc8FNJPUejwJB4zMXS",
  "key32": "67TvQXPnjH4ABiBT38jsh4zEHNkhDcosp86e3B5uCSg3QdVJvBbVV8u22FoRntLVDVGzRJXacpSpw1naDejwK2VX",
  "key33": "2gQwHDN5sA3RzuC841vYyVSgRQuDERqEHrrAz934oWgYXbh9ue9CjuC4X2zSJwLaUg1WibRe1GpyNa5wHdvT4Pxp",
  "key34": "2BpKJMrT1hg8yX6jLrnqitoR8QuZZn737fJbn2di1icXo4Yhmxu9AtuyT4ieuckMLNV3YCLNJVeVcABaZuz5jWmu",
  "key35": "3PHpX1pZrdJkCozAZ9zVaRuMXTCmSV4YPxs3aLeje2BtigC8BvxLA512R3xRjcCFdhx5sHT7Ln3NTPNXy24EQo4d",
  "key36": "3otS2jDdiN96CUKHTJbYKRRasGn5CyG9hQWvGpSf11sobBXGbXbmKTgenusp6vMxih9hUoUgPrRXThsphRDy6hw5",
  "key37": "3xaf2h5iUaEY2zTzZmQUouVWxoLSdPYc2HyYp2JG2rBPZUjTLP7HrXN4yXeGxq7tRqfgq9y7BLbVwK1bYWHjL9KS",
  "key38": "4WLmKpc1Vwj3F7o23YENTYsSL9rw9sPVW8aCKrLqG5EhWvAxeJd8zmrKaTJYHZfmgGnQWMmscK492GQuqix7dMze",
  "key39": "2NtKokezVCGS8uSKxg9KMowBNkezRgdWkApaVgxyJCyKNWtwXq3B55EbGSJZy7oByb58M8ysFkgLLQjTnp453TyT",
  "key40": "4sseUE2yjnuPEaqTuP852YueWrmw9F9jKVYsPcPAwJCzWKQ7BTDSYdpvqDhwzpCCRDmgWnMUo4xdxLAWiR5RsNzD",
  "key41": "3W4PV3PLyF1KaNopyqQ9Goq9dy47trG8p18VMDMqXfq8EDoMv22uzmx9uEabexfh39b655f1P7NuDm6mhyMqGNY8",
  "key42": "44tpdvGkEmKw53qDRv2tszTfCrjdxPJn66zER7nT6GcdkzSG3taFLfD4TjoSnsjkcjpDJanEy6xmuUDVJhLeAcTH",
  "key43": "32uob9sWnJ63Cfr3xKfg4njZE9woA1iRv9kCXySz4j1MQkGiTEZZtAif7pHqVN3syLCe4soRjewqmNbDWiWMgKEp"
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
