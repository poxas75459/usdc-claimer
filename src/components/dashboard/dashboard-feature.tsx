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
    "32v8mgBYuX1cnF9Ex2yeh6Gvoh3R6ssaNLLMqwQutUBB75YjNdyQuMCH2sLGqao4NsarvVJEYf5oLyw1r2oUHY5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JEHWBNyFpxW6nVqLeRULBjWWoCHc4SrzCxbL3zU4DS3pjU2u6YGCCbtTWWZXmXtRshmZCD1YPJ9VpcV2HzwuhPq",
  "key1": "4tSHQgQT5B8x5eL2JhxydqTQ6QKG6QLFNFWXmgW862SXjJkcmC7dCBYzNZ8CqTRaNTkgC6ktocEz8Y2BRT9X2r4D",
  "key2": "4xH1Q5eukQ3AVLnpEFq8SWbGiECyMgRRj4ZoWKgadR93WAT2WYE9zaTL6jjovJQzCTofYwEKN3RNxsPSnZBc9xpV",
  "key3": "46WEgVusa58mvcg6F3kHtsdkJ8Rpvmju9RbRaYfiaArQe3UKVzmLkGbqzxQPAv91vSjiTYPNN6jiihohfn5VUJnX",
  "key4": "5RAVFYKZwMSMRwuvjJZ491i6WN7PXZ1PD2US9sarBLvgMin5jgaUvEjiEtQWJ7ry1Rrgoks5g1HiVvpkuNm94eRH",
  "key5": "RL9cZbUiW64vBHXJvZmxPE8vqZ3eSF4q4Ui6qiSiSnfVzbRsxBjeV5z236nYn5fsSgyMAPzMKk5w3QaRCtJXd7F",
  "key6": "5oR6LDBVWMhVC7fmYM8HNTUVPjXeE3tR8UDXmU27qwoBUT1QhjvcDWHxbu8ooPDtbPACWzLDRgVjFVomLJjtndeJ",
  "key7": "5vFPXGtvex9hN9kNdQbpjmFpX8sFg9VT8CPSQvQEPgCEyVo8gPqp4AveGrSnQwDziq3hF4uoUo6A5pd4R8r2xMV3",
  "key8": "65kDBQk3LVssAvPA2nMqsgVX4QzuDpHTNQAutJReM2jwhEXqg7ju76idSKsMs8XyguYh2Qu361inPc9DFgjpWwuP",
  "key9": "32Fo8Q8L6Xyv344BRJBvvcv9u1khV2EXoFBQuC1ru9P5fb4hMTaBgKBvRTxqMPUSLr7qN46eeJXqtwndaBYT4EF9",
  "key10": "4muv2NgmGqdMYW5SoGKZaC2MiZPJjEe3mixzodBUAnBp6tx9tJB9tyr5WS7MVaDzYDTmaQRMt3JjYCXnRTLx4GXJ",
  "key11": "4Nb56B8vc5PiQyrxiRDkKonFbvEwfEM5J2M12TvxzetsRzrPCSNYiAiRHmWCTE5YzU6EeEHQzwG5eqpwATcon46v",
  "key12": "5xxqEjwpxFzq6ty6DXZTw9T67M7vdmcxjHdg8WsmwiZcgAq7pJ25S15FDVapBZpwfe1JVYNV7S2it91h9dEUo625",
  "key13": "5VcYXp9ZhykbZH591aKMYgKCKK1rLyTbQ4bvAsTjmCDiSykpCDRSrcpPy6NY16fz5qCmF4PUeuhpYpwzVCiJXhHK",
  "key14": "5u4FFCcCWoZ9xu5WFCPdX5VRTvAFteBWu5R6QdeYHGCxJwMjFNQ547BfTDoKbLJey4dbTsPvX96XVzfdAPmtbwnn",
  "key15": "Wvm6o9aZgVLBt5qjM9cYP5eKGBKX1XHhcNyGc8Qn7RjuLmT2JMr2DwQEcnBwXdVKoMigV4oh9bpXi3JMzXF4wrw",
  "key16": "6381YX4jEUo2pqgFD3CUSQvtV1kVmmFBY4VuexUM6BsCBo6Q1ak2SCUJMosi6X6tNEUvTDufK1bG1AFZFsdw41Uh",
  "key17": "2qb81GanHuazhBsV3KsK45Yca4mST4K6tcLDhz6D47cC9wefUW2tfR5EfNkZSUujodkGcxxrLpq1YSe8xZ1NeSfb",
  "key18": "5BTC7N8J31re4JGc52gieNd4qpTgHJNPX51QWeZP572mnztKwANCmduZnRcAizNxX5TR6GRAEMYUYs96us7AEguj",
  "key19": "kE4fK1tdNgndoEnqyzwPHLLj8CTRP6G68sPaG5qC9APjVAifhdg4JGN6QGFWFddwFixP4ScwAB5niin1TFzb6ea",
  "key20": "2S2xw8WFwZ9CHbis7md7ynM1VNwJ4nhsh6SWUytYnFvoGWWuync1zjCrNnQ1dDNrX4GDfSLfJdU9S2DgipHfFnKJ",
  "key21": "s1dYDHUuepaZyyq6q1J84vPHw8C5ZGR7xYRbCekDEvJLiWUAaKFth1cXCj3VzohHCAQdtsaSB9c8qaaoKGZ5G5f",
  "key22": "3DA5hPX51tsLuwdVvVW6HfUxieNaeQFTEyPEchoRhLhKwwnsiBNC3BKVfi6rtEdGj5QxoVKVhGpAGybxBamnbas6",
  "key23": "ifpE62CnhDLmZCDS8EgaEctWZ668CPtZvrKMeNFyVdxw8tWkdevLtiDXdLox36s2XyJe3jpWGLAFc7z71qext3s",
  "key24": "4CmdxnbzXshtZ3qXtNho13bwumSWepgHVxcEyakV9HN38Bjj7ETYcWJc1u1kTq4PuSPpHjdjE7JGmdeTPrqeSjqb",
  "key25": "4Xiezez29TBiCVjS5j9veLWDNJ4zHHAh5wvotYAHQVEPZrsi9FTLbXBeGr8B5vveU664AZMjfofkPjUWibpwYDD5",
  "key26": "5dZ49LDf9Rt4UtyDANqfSZZd1DrUAaa8be4ZmTpM1eSrjgp8dnvpkpyv4F4oXpJmgZmVwzzX536LVnpUZn2owitf",
  "key27": "2u19uYENSAJamtjJxyd7CD8taU1svH5MtUdaXtTQVSK2YutBbuJyHfhALYm9CcVqSXnd9Y9tynLavYe47CxaM1xV",
  "key28": "1LDMRPcUVE4U9xxh47tAhRt8DcwaSEmwRZ7SUS47dsc3aPpSAr2Cf65wuWrTW3kFhFUEZzHN2ZqJhdjxZv4sS6d",
  "key29": "3YDD6gEwKaJrsHBaRNhRkGZmVU6jNrGSUPxPjveFLmBCD2hb2h2qVge8DXA4RwrKGCG5tuQhpAFarNJLgnu6FoGF",
  "key30": "3coEU7FWz6Trf7phvMCDAjpNzNBPugGTeRgw67VaEhuJHm2wW3PFqonzqEkgRG8bC4hznVd7MHt57bRRHhqduiBQ",
  "key31": "4AYJ32fTkexRr93PdwaRjGLivF1uDnEmhzqsPnVziHwXGQKjm9VupN61Zni1nKfuy5LDwjAjGVYNuUsFfwTmZpM2",
  "key32": "WVB7GipY7xce5VFeU9w4kx2VeihjNvBcffostLFcsdDqUp83fRfYVGBDX6H78wjJbhhpptQW4XYJr6Cp9gHMhr9",
  "key33": "3cyFCuu7GPKhTEuBJ3dsFvFvUF48xkMaC41QK9Xiwy93UrYMFsbzaJV9VjDgebrYkNQePBLwPx4Kfxcm1YbfWAGv",
  "key34": "2GEaGjrqNM67Vy8WHHnshEUWWpcrnpXuLhoxhfT11JUkEivETqnvdvUNJ96ygqLV1SWk1PxaDfCmq9SpxRhb1uZu",
  "key35": "3jYr1tUpXR7GbeQQekW6vDdmsk24kJWr3JoUPLcM5rVyDA5puEqWCeMtBc89MFZeYQ4GfHj6wUyMr9ygLUafJBxm",
  "key36": "527grgo66NngqxmYji2hBwW8KhPgHccWgGUocb9n1MJR9eLJ7FE4aYCKg2Z6SD2cfwPVqZYZ4YkwUjUCFzZaF7uA",
  "key37": "2C3MScEK2RFmvK7mUJWKKVsbdbBVzRUDwePcdJqN3ZxBaygTryfVFe8jS5ZU46YTaGhGwui7WLcXprarHZrycfex",
  "key38": "57d93bqxgSUPi4GCrFyKk1AfyxFoCuECJg7SXyvapALNXoPdQ3nm78AJiYscCVyUkBeN87K5Mv1f6x2LJExZh9m"
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
