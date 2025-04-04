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
    "5i4oaCHhhCFPQDs6d2WFnxu775QPY5JnJsENxkg2vwU8vh6HV4RnQSxEmUmKc75eu5fkoHAg8QY1o4ejemnZ6bS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49mU8jkHP26LsPqUKAUjmSzZog5A7ZECX7uXJRhEwRpAh75itc96iSXE6hLg7ZyKeaKjErQvmd4yRJV3Mb25FxVa",
  "key1": "pu3TrdvkxJVkkNQdyFE1umHhNWajdEYdrXHBEuNMAgm1MWqCJEg6iHg8w1jB4uBQcEcBcMypJ2ujctqsSkreJGa",
  "key2": "G74ffiP4n8vgFncDo99j2ohBCh5fV4BwMPTh6iWU31WMMdVVY9Vb9Zw3PLApMhbNGEuVP1P7anYJjghWJt2ePNL",
  "key3": "4RCHNCdc6YnWNiHDuffK7yGXLEbmkvHEK7qz55kcVSBbtZgqfj5KoFcHJV3uRE6nDQNTHPgefoFsdsR2y9nZyTgh",
  "key4": "2Aht7kkHPfSxMjQ1bPo5Hh75GmFGiVbR6TLrUonm571tnU6TtgJahHe95JppGAwUffmuh6SqUpGr6NSuLwNs5Kin",
  "key5": "4ZpHDU3RL1jgA6xnUsm1tgrZ27yZZHAxMDb5Qb1LudkFtrZaPt1iUCfqi1mN5njpEYwDXFtgFD5pDSe1KMjaAQmq",
  "key6": "UjF1SsiX2jV4CBMEJM1dh8bCwjrfJXcnWomz23fNGbhYj8cCRHfdWUJWJTJPLHhcnuEofps6PpwbP1zmjJHPmhC",
  "key7": "619jPBMrNHiZTeHbE2Q6kiKqDouJbpMUadgosDzF5ZPNRMNfghhbN8n9tmLMhAgoKgjQb3SHUzWmhSMjvXxtiZ9R",
  "key8": "3EdCdh9oz2ZVQKT6B4pVKH5mQh5c5XYSB8VNxG1HHojqE1QSVYbJQP3Lgvhaj4ZV6wvDK1ieHjqgmrf33XzCV1tn",
  "key9": "3Gf63SB1cnKSENDVP26croRjR5V553aB6XjXwwe4jP7Cade9UGooNYtGzm9QYaAc36dMr7TMtD4eKwKBAxg2ctNP",
  "key10": "53PsfWAG9giV5mANfDx8hfKNAokj2dBPXW1Dbf3EdbaHiQMHG28XGJkVPXDTvXR2PVbTiwwYRQU9o6DqAwJ6ovus",
  "key11": "36R8dKeRRdANMFehjgVTEZFmdfGGq6oidmhLYSAYVxgiHbsGMiEdkVGT4H89orMkhyDmLw5xEJ3SJFBNhfAjmkGq",
  "key12": "547doSpbNPRKaEr1naZxSd8KP5PW1m7QkDf92xmf4LCCqZyWvWzb5ppSREceusdqsE4KpVscnpre358WdbXc5bNY",
  "key13": "WqkhXFaJ6R3ZnEkH544W3wiwkPDLK7rXc3gN5jJJJ17iMLhVakC4LYFNHQ9zhkePzKNRbGVmpUYPpSiNPwtvzou",
  "key14": "4EzHUsoSkbB9pZCBDSBvLQViAoNAbdT8sHqmUe3K8puRy6ADiNk1TzLkxWXkv6VDwMnd6m2eVpVWhcrBPHGfgcQB",
  "key15": "57eior9XyuuawKFsLeddeY5hVB1kRpekNaTqmdfRacei7SJMpvEKcVZRbCdkBLKQVmKqVYB3wEqkH2JJmSHh4uux",
  "key16": "2XuNzZ4sxDeckvHyrRrR9N7Ut2S4VgidkrYdhvh8hhfeMYSE5VZWMAAT8Aou9VXCCRGebQfDn1z4oGgBYe7oKb14",
  "key17": "2p2aaZpe7NBk3Hctxpe3EJzt2cenDeDnUaQGMPGiJYpFoQDJ84meBVRRi4quu4mFC8DbGJ2QV598ZNgah6DRwzBz",
  "key18": "54iRkQdkWxuWFPyJiEsY3P36QN4nwC4zriE46AiRbCos4AcQFRaVwLn7qiTHeBTfSQ5PDHGFvjuaPF3VpS8v4syF",
  "key19": "42kp8yAPK9B3nnYT7DrGt1ukmnLRUvM9WjwFMzCrUBNF7ciLVJxVivCRhM8W7UbP6LSBfoATkYfwcW9dG1HmAATS",
  "key20": "RYrZvtmYMF1vwHNgQsF8a64jJA8jHmyGiDxdcWvmWwznaFfVQrBiVxq9dXVHZMw1EvpZ4evLTur1oViWojb9nCK",
  "key21": "49yY9KTfNTLmbr8GBxGHuT43go6jhAx4aV3kwR68j6CcKgt9T6gHwmtfJwZTNLC53djJa2YewPW7wc5R7vLt1R7G",
  "key22": "LscBpC7NkQnbt6E629baXPGmoMXSvpkjdWdg3GgyeW6MLWLGh2VZuYEAWrXJGgz3TwGW16tV9fdiDsUo62JtPfC",
  "key23": "2Ytfn1T7PdJMoXrzHqSYyr5sv7fgChziWABLT85FHosbkF1GJazraVoo2CATxTm4XivKctkARFHei7oNs9SbMyk9",
  "key24": "4xgBcyfbHUTrxBiQevi8LwviP8CRyQrNpGWSL7DdzXcvKWiPebERLK3CQDQZsCSGnB8uErPQz3niFi68iynuPARq",
  "key25": "8o9uFH5n872wqFqgGy4PssFX4fDrYBEkLo6q5hJEYXi3PYyLqtXhMdPUL4KdQVcERPKLgZBVkM7m3CnPAQN1pbp",
  "key26": "4AJfFDvAtCC1scmWq29PUgH1T4V7vovLQZWJzHv9yH5a86SguFGAGAGHrnpogcWzhRArpTYy7R8nmZxS8WUMF4Ek",
  "key27": "3adWy8QmpfmZuJnEDRdKRcJQinRgLvhbTYjzoN8SFAsDThTir9ECuTLesC3ngdbK6dBKKE8C6o6FGw6iM9amPJFY",
  "key28": "owDiazrfGgeGh44WZXud3CBt7W5P1b8YeryetWHbQTp2soSSzPWmSsDiMeZHPBNhVjvn3Z2BEGgXpyf7YFkRVEc",
  "key29": "5cSyoxjNkM15J3pZWu514dqa71XSZBZf699VrqCrvMiA4QN3MbguGsMJa7k2yPuPGmv6bspaci5Q7wfTatPKmXWY",
  "key30": "5iVG8qJdrdjYcfBYtt1s4HJiV7E2mMmCTZxP8jBKKcBKmqbPSdguzAi2pmyAzzae4aNyrjfvz43YCgdnwAoem3mv",
  "key31": "2fn8Mqyd2LEFpBFjxK2FNVDM1aBdVKq69xemLd7wZX8cdVqietqHoXveSaYB1cgi5zP1gJAK3vRbfJE7eBjEMsYH",
  "key32": "4X8Skh3aKzujHgXSb3MhNAgpZ6K2NtZYZLwzn6gf2PNUusEi5kiV2wWxNWJLyab3TR4wuve4nyooqhRkeGsVZGdX",
  "key33": "4Ki9wpk9CXdbQ2rvD4GSz5Vec781pydJVp3Ci7dsG6wKNSu22715JuNNzi2sVVs2pFWAf6R6tczE2z43XTSXG9VN",
  "key34": "2uGpPjG12vm6JYKMDXUpbiNxLdi5RF2Zj5dX8nuAwYLxnTBMRunYYmufWWxyDSVE59rG9RDDLwLpoBNhPaBggMBm",
  "key35": "3W12BqXGxyu17NDCwwj7NATjH6qy55HJsELppHp3SLLt8efgJxmwWEHnLM1RRC6BxEthadio53mt7DnVXT9NtfaM",
  "key36": "2jXBiMJyHqx5dWHbYspyWrGvE7hykxbT8ipv9KNnJeNh4XaNhuSuea6BERTaCioPtfUtUwKGmDdtC794Tr2h1VGC",
  "key37": "5K2Eqfgo8DAzsSmdWxd1GtmgJjBhGU6RsamiXUEe3HcsX84XHPAHqYjkqxP9WoBsijneG3U6wzZXBPuXakWsYoUy",
  "key38": "4y5qqCQD5MMKohBx8ZGaa5VDwRsTbZfZXPVyd7q6pjjxr4LvYwW1RBdqy8phbKvo6E5oLJmMjdMNkpjSzcmQrAPF",
  "key39": "3hByj7EctwDDU2RHozuPFZrrGtuNH1WCXXUs77kjBL3WeKZFsDWt3GDRvzcARidrKTB4gP35XVuD2L1rJ7HmatsQ"
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
