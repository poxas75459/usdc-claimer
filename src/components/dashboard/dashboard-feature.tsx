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
    "3hf21NG59B4KtZubaEay3jRMyEo5fu1cN4vTctWZuDCyVCRjWVGnWyURV9GCRbZjjwSm5mPv9nvEJuuL3s7JCUvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExoVUs5985Wyzi3u9814hJJvYBvntrG7GWTxZcGDizfqpzow4F3KWBUiUcasn2uZVD3nFyzXrAEE76mP5A8Pwtv",
  "key1": "2JPd7sNWei5HK9LgKVPBoon46CQ51HbYPw82xH216GDGuyzziWc2sGX6qg3ACJMn1kLj3c21RyVrCpSSzGnHkQxa",
  "key2": "4i1wC7FquYTNT6jweByydDvSLLtk3TTruocKbrdFoZvezdgfbMo6fuyQbftuYBXL1LSiN3dCJhD5X91tLo5CFgTs",
  "key3": "2MR3uuz7gwsMzTXWHf6FTMbBtngq86yKu2bMNbWQx61Byzz5dW7bTuLtAkXFWfUUhE3epchwc9eNmTxkw9R4vWyn",
  "key4": "4yQCX6yNx4uyU617eQtgUzcWLuw9YoRf5hgyUnn6U1v8Pwf715J3p9jzeseKhzyFWSqAYqU7CeGXgurdNSSu1AN4",
  "key5": "4J2bEpHPfHyME3yVSCBpJBsmrmn8LNPp3SQhfWr5RFt2M3gpBK1oALFomD7DD7Va1a7BAdvptBnvfa6o4Stx5Ev3",
  "key6": "pw6jntnvn4fREeaXrYwPChpdoz8bBaU71Z6DnzbVhBLdZFzxw4zhQ8uVBeZ1UNCHeumRrBjZGRwwqwdKgMoR6r3",
  "key7": "BjyXmexi52A8foNvntceb6P53b1oPGTwYzGoze1X6rBannCAU1Nx8scVTkQnxfrATytG6G2UkWBK5gi5gjCDxfs",
  "key8": "4ACCJVTJGiUhKwZrSaoWukbUM3NPrBLXzRPhcMkcwUCnMzCSs8A6mZ3yC2jwDWEGZ18BHJxzfw974yDbD1x9TCVZ",
  "key9": "52zCBpmFTsCC9aXHtsPqsB8uohALPpmnZAfwHbApXJes19bo12kWtrmYT6qpfnzyKBk1wwD3CFHx6xZm5Nv5pAy7",
  "key10": "23h2NmJU96aQnKhXwbg7PZSDW1WJBa8pLTFms3fLhLKirgfP8UvvknhkPS1Bh9CfwR717fohWdtCcQcRBBxLp1sn",
  "key11": "3SUbSfRWWr5EHQCzT63FgTjh4sWBdgm6BhmNqxgzkRxuXU2SimQaFRUiDdXYfcYyFr5SngwURtvofT8YevYHUGpK",
  "key12": "2JphsLj8q16TUvRBW7TdWT1gVAgZ2yuH75g7fCzj1uogkSaLjLKCcoxjrNsPSnYuJidyRPjopgieMFTt8rJarQ2T",
  "key13": "44qjzYNEzDCsSNVjTyLsttLsgNFCK8yDSP9fsQrS8MrWc578Lw1iPffpuPZmVE55Xp14eJnta8e9N63yoMEr1LHX",
  "key14": "42U71v8sHks2b1g9MtCMfb3vxXDRFc4NuaaLroW4tCthaGPw6sDriBY6FZ7qLtAoEoRnaXGwaNDE6uQ9WTHNHPkT",
  "key15": "4ZZf2BKeYsPW4fDtP7gzhDt62hNCFYt7cmHra8ep9Q15QdmvYhnEehMDjPav3okC2PRp7LuNjnqHetteFT45RXvG",
  "key16": "5iUcRtuhVYEGU7w6mL52nx9PgGf7VeVJENxQJktVbcH6m3Po2GM4DNUKVEzeTEtBx7AZwUEhYwJhBtDLYUPzzyL",
  "key17": "3joF12jBJRJQAkGtn4ZFknMXq7MCGS7JwYTezqpqzput8mYqZsCszzafTAhEmwxBFWrtcaZ3ddo5QqMbDHsbqswv",
  "key18": "4wh8KF9DSY8cCUYE3PJ6HWPR5R4VcL9fJgPSdTVkVU5gRQpcW7WDXYuaFY6FvMZK1EiyjuKwWS179oUx3jYZGJLb",
  "key19": "4UfDUqEpM53LLPZP8nr47kDeS7HwE6AHb2aq77PDQRUZnQeSW8wstw3CN43kJSv1LVSaNiVJvLe5wsT7YWkeGxNC",
  "key20": "5wton2kWgzGnX1KTr5WysRYKDpAwad34LtBjp9X7u24Q6rdraPwXQZ1RFEv4SXS1QTVjqs6uc8JP7DawQMirk2S",
  "key21": "C83Kk6FEanz1w6Gd3554Ne11qTUAzG6fwdjc3rZegnWbk7WLJhL7iaHkdMV1yR3w1owovjau4Ecu1NMncDKEB9h",
  "key22": "X5j9Zb5NjBLxRszPpjf4JYbkz6m11dKpbzReS1HA1KX9HTsMShKBC5FFyftUhxZ4LgVbdyWmU6UZnuaEjk9MUHL",
  "key23": "5g9RL3YM66A65711cE5FKS22RamPghTt79zPxh8bQmT1CrtEGDVFPkXprQ8QHpz2wMxBzAGeZvVMAjyy1V9xsCWL",
  "key24": "eJ7ipBFtZNdppmWpNiPZuijRqUuohfVUX9kTUmm3sUYbXktxu753jz1VDthHDwr3bjDrDUDQAHBTPJVp4uhPQCz",
  "key25": "4mjW4wtz4vQm4zvn76SxNytNDHP3QJzD4B55GqKaAEh7rM4XM1Q3eMnGXk4vdS1MRivHS3w1SiDVmWReUECFuNs6",
  "key26": "86PyKqJoVee1xLooBikx75DZmTjuwYxboUzJ6knBnnRuhQEJHNy5AmvB4nXbhFDyL4CPTNrJPVje1cakuuk9awj",
  "key27": "2xNPbYAdmgB8sAyRfzysTgg8CpPVVoWyJYzS14sHNkzTMrtuKB73pS4c2UgE1vuG17bXtaN1mLexYwYKiWNNeGeP",
  "key28": "53P3F3krKc1jKjA6EEpdAcwSLxWdF3HXyH48gQa5CywS8zj87nsL6tR2DykiLjYQ23WdEnzrpf6ZcwXs9PuAMtLm",
  "key29": "x3jPq9H55rCz1Z34EAU65B8zHP38ieUF5CmHpCb7p35kQsXiUHUzcNFreztV9cMYQtGTNNV3ETfeBdD7WL1oNqY",
  "key30": "2xZaPAAH4L2wt3MJs4YHWTk4faoKADDniLCXGjhSiV6wR6QeqJhZ8HwYr4kBdJCnRy4h24fWtNQugJ6R12ft89D5",
  "key31": "62GvYGBaNd2FYbBQFFUnMYxFDwexXxcBHNeDy23Hi4PfL1BLMamCitNmug4N3soi5QUXjf2d4YFUiKeMbfo2x7ds",
  "key32": "3JUvGXKwHQoUvTAEC8arYUpqTUY8GR1QMgYR8brTy2Yw3eJngj7ZddHUVWDi18BnSceahhiAt5UcgaAcwWGDqn5U",
  "key33": "34THrGrGf8dscZUVqcsgM8yYrixkeFF1fGLXgjVRnQZMYGWwhXvrfubBCP9TwaA3VFWqJMnznNxhBVVUBsBAU9L4",
  "key34": "Bie9S7gaTZPHUB11dVSRMLu7Z7dsRvxEkqPR9XvT6JVN14GbHGHYyRF98qcP4SJLhNCA4noxrX3qibbb4wqkghv",
  "key35": "4mGSSgZ8Cp3fcbZBvZiWtumKGeGyfrJx4cTiut1Q2bhEjDpjuo2Wix5cTaZPDNzUnoKNqTVNTEKALGqphh5uaGjx",
  "key36": "35D29riHc3sGJU1XuY8kp9Sp3t2TPw4VBrVux7zGy2GviFkXVCzaRGG4krw89E4wsm8TFYsQqBvbjSwkrANqGqJ3",
  "key37": "2byBX85oPxnzZbE5DtyfBKwjRErowCQ9XdaPgj3E1CCBcDKUD7WXzSKLA9b8EMZKVDnrZpuWRbPc2eUPGB93CCPJ",
  "key38": "4qVJfrau2Pgmaivp22n4KwhBfVP48g1DYNpspNw6yE9fo8m8CR4uLA4m8LYtFKYMKsB6wTM8WQzDjEWmGaRmHdJd",
  "key39": "3KBE5ibb86wVbtXg72NDRKejpd7jjKbziaJeVEVjr9fJA5N17aLAwzjuh1ABpzbJLxBn5wp3GagnX4KB99HAcNyE",
  "key40": "2VHT4GnaFooU6xny2faDE9u8KaBMGMJNQavDdJcCShf7XuKoJSnwPeDkMF7pyYT75YE9uUmHjHamwmQkgzJuAcG4",
  "key41": "3dq1yP6cY98agKM8J2KZQqMM2C1YCJgG1c3x5o47aKWn4ra35X43o7seKivNBFYdjNw18HKJq3JBve4GBgq8hcKv",
  "key42": "2aauro8ByhJWV41SAQTEXzKjjcu61R757V1mrNM64V5vZX61W6kwX9rGjGBBtm1yV6h2Rs9WxAgWC1JWoMu57caF",
  "key43": "2QhKYbEUr116fshegeWXGd9cN7EbxMiRqo2TuY72JhqcCSsLn2VxkVYKFARt8WZGsWrpVibwUbCg4zY4e4dJkPr7",
  "key44": "3264cBwQQFgoRRZPFG2i7r6xn4gLPoydY9wy1vrV2TdXpwzwmTEwdECjUQtpm78TirnVNG5joXmuq2unsVgHxQ76",
  "key45": "44wLjFsZBUgSL5P6o8KcLHR9fEUrVzDW8td3EnYZKwYzE3ELNwX5NEwAN9ZsZbzNsxAERqdX9aMjbfKKEF8jEYjh",
  "key46": "4B9qAeEfUmJ1QhdBbTRu2pPte2ZuwjHSSP54ScfFdjTJWSf6WChKU2it5fJ94zUbu91mERaFUPgDWUpitBoAMXDT",
  "key47": "4Pt1NzdaHbrAUJRHPgr8c3qpUPsybuH95jmp9ME9AXbuESwtvLuBwmopMnhUvFhEWjy7gihPgpqCBcFxYi8qrvtM",
  "key48": "Fo1W6tqsyGFUBWVDbff3GRVznHYaQLtExRnfY8YTzmqwqMiQ7YnhPQW6WZNtapYkLwZHcgCqjdozup85i6N2Y1r"
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
