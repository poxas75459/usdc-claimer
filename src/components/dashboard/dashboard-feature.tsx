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
    "5QZ7Y25rUaYxcGDw3wuQvtERua76WsHyStapMjwnD6u4eihErY9kYvaBSKRSGJStB9rvhRZADDJrSmpGE5N19USt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SRFFTdJDvgKhPNkyXVh4QbBCjbZhh99iBbjtQ22xKUCHKezFRpN8ALnK9pggEEEmVf8vV7n4WGLMTDmJuBFkTKf",
  "key1": "3h74MVvmHKu7kfjmsY6qjWMwd12RDxocEPqGVkcCFbq8qZ6v9Fobx5Lb2VLKE6SeMKzbuJ8uCNfybiAVbNs8Dz9v",
  "key2": "4BLsKeTDAAqSk8M3JWDL22GH7YBC3MdPZbXBAZCxBut4sCKFUZMMq63F2PoWksMyJeDEBpN1MBMVdWESzKiWfx14",
  "key3": "45YDcdKFNFpVM7eBh4hk8F4WwKTaGMPva7qTdpTBGVYF4Km3wjgAA2ztss1aLH5cMauzpiqBzq1YLMFQ7RLMXaP3",
  "key4": "3QZnJgxwQDWPoJxrXQcdH7B5egQxzxfd2EwE3d5HyHMAqD4s5QVtnTKS9qTbRACnSgwGeZF9ukff2gQRjFnL5kpM",
  "key5": "5E9zQWeFLAvniXzGvkUb4ZRsB1T9WDy7hyBG8zWS7as8QmeSgxMRTmkgfXuWNry7aNdxJcZ5DJTQ84L9hMoPA6NJ",
  "key6": "DzzbdnJ9Zg31QheiqKdwa5VrWVKFL81CbcjRqYZkp1xasQjd44dZJRpTf7sZsxt7ytJ4h2Cm6sRymaWWAZ3J4un",
  "key7": "3pP1ujHiMMyQaat8G98gC4nyHfPRib3tQQfMVzBTY2aWbJPz1YKyDHZrYZaMcDvQpLoezpqSr92jBNWasqSHJbc7",
  "key8": "2UB8LTjoEMphhStLMSPfzqgZYqZhD5Bc9jUxy4Mvm8ng2HUk6Hh7dGhknGppikHsdZoxoGian1xEM3M4SrXLjKjf",
  "key9": "Cx2ECaqUPkuKD6CVM4LSkqFqE2BcqaxWRR7KKUhN7BJttsiiHJi82KdUNJXqsh5ptqT3ivkmmgeHQJpK8LtUahg",
  "key10": "637ir7PZfPVpADG3FzJR3t8nZaPDLUXuRHzHscbyptEgbgjYcZxRGrXMFqC9h7nYrwr7Psc2CWDHRPF2ruKaeDNS",
  "key11": "5HwDZE79qjnN2nvjjCaN7kDBSnqJ6fUcS6G8hHJ3T5Zq3SxNDAppGhcdgatva3UvhFxmLFiGmv8s9CRCCB3i2izx",
  "key12": "5aMDyAiS22XQPygMTEWfzjCqbSLfqEH3XskkbDjHnXk5NaNy19cHWDDxvErTN4mxX1RZvFLmPzv1EBNQzZdyB6i2",
  "key13": "361N5M8zSy4GBSh9xvb7RNfNtEm3Ddso4drxTADdwk11EXi8AY8FHDSkCv9Ek14Gnh42PPxoY7V7q4X77fV61PZA",
  "key14": "5DoKJZthWT1oL3pFkqW8gRaeXiBr3i9TYux6xiCSQzYzheRw5Bdj6Me7aBkfrkGeBjkHE6ptYVDGtM1v6QMUJNn7",
  "key15": "4pyqRFgZKU9Whq1WZ2z9bc3XZdHUokopW9k7KjBMTHc7UNkSe168yZQSVFzUrTAunZjoJB6Q6auvrSLAz3sLqxdU",
  "key16": "4uvaEeHpexJCkAxjCMXeM6oVK9WXdEorPcjc1wqsrzynmvQLQp4jiHPRPb6bMMX4DZrLTvQCwL2JBAT6uMxLbSyT",
  "key17": "3iS1unBSWmRrtgok1NeBsMzfyGTgSiQNXggwxPSNm5tiFBRmmfm7iVSMEmsJwQZGYsBbzGSk1gE9GCmcBoDSLSwj",
  "key18": "5binjW3jvieLqey9rTNtAmLiDLkEeC7zwKdqmpuF7v35nU85n4ahzXGJaRZgW5NpV5wYgxszym1MxH1EjS9f1SXy",
  "key19": "3Zi4jnNkG7hnuUVa5p2dT4bchrsp8asXAuVZG6q8WdxH7vGK1YdjRqjnNwnsKiy5d8iiNRmwB4AqVEBKRYaYyoSx",
  "key20": "NGsNs6VekQWfzpQhtHJS2GeQDxPBwJTCb3TD51nL5VTJ9QWq46Nj6bBVfk3pTGG6VX5GikBJAaxMCaDmgQcdHT6",
  "key21": "n9KWomGcyzgHABXnVk7HBXsoqDbn71faAr6332rn8zkK8ZiPnPXuKRj9ffA93DbX2rTQsEcRysrNqz5chb46hPz",
  "key22": "R75rcNjTKEkD8QSpD3yWssVM9EfyZMbqSK7qBB8S51RHUGuRv1VbcxvGGv455F6R5HtYDmUpB6FGb2z8NcVc4NG",
  "key23": "2iGWXci3L3bEA9XV8rFoNWzWBndBavmS3faukkkWLgR1G2VZpW5j9AHGnVBSGfr1G3mD1AJjB3kc2gMJYUmR6fyB",
  "key24": "5kB5MYTWPrEjoyci5v5GiGytUndRJcJjopsYpY4qyCinozdQsfqEFtR8v8wpsqS8EC65GahNWpuqqdShfaQyWHxf",
  "key25": "5xbFW6oWmXxn2kNPTYhVWdEqEhM9NAUDyn3TjMNZgzSzUqtG5vrPfP7sdVbpdXqPaQ6xKwC28sVjvg7mC2hS8Pi7",
  "key26": "3zBv2PJFiLVkX9fsdcQqngNYvrwfgUudxDCS7sqKpECBZBtr1n3fktWQPRfAiW3f5rqPJqBqjRQftgKyBDVyj3VZ",
  "key27": "4LHo21dbixZNmaphMxQTBnjoiz1GzD1SiWLacZkCJnYpbwcea8FE8r8CLe4v38T5GubpY4oaiYuivYTrHhCRfNkA",
  "key28": "2HHh6jkva4xfxzogP118VEmKPyQqmZUJ8yTQwSu2vV2FZhkUC6AnK7p8GVbSNWrTezDbdo4DJtTmV1DuxY6bi7Y4",
  "key29": "3zaVL7ytvPHPT8FJ4z4WxpL7K5cUF93zQMgt3UwombYUqAWTQ2LTrJoi1NdZKqw8sYRh66mWiikz1sfwvAJnMZoQ",
  "key30": "5wHWDbwENHGL1kcLdgfu8iaS8vybQBkDeJPjZxGybUdbaLKEPPAjqpfBMwpkiL9u7y39Tt9ScTQ8ZfahdyCTUXrC",
  "key31": "bqnAkV7UmoNbeCpLZERoDxScaSjWwhz8gwu8Hna28mYMzzWxytLLLxYXHrxezpG4aniswtNGqwSxcE8TC3YmuC3",
  "key32": "44u8gx5GY7wqCkR9Gnk9aRDQotBDUaEeZADcTNpTGHLwyX7UVCfsukBfD5iyoKB4WCJkmM9VbdHHDaZSnZwLSasq",
  "key33": "4jpSCAJJ75aRXfjjjDphQxMYYjQLtKD2Jnn95RcyrjGokocQjRFMHLoZhuxSUH1FjyxzbgLbkeHFn2ML9AVH2u52",
  "key34": "fn4cr7geAU4iibRrMAoHcTVRSsTNnd9U9kBBooagGTJVLnss2z7ZDTw43gTUQgx5Fjd8X9sHbogBub12LrFJoZn",
  "key35": "2GuYFaLTqxHtSz3m1sv2oCugjiWTWCLkzqmhnV7Nm7wLmtEW4UHJRCST8sJVfC51oXN6e2xMJashgutdZf8RUS7n",
  "key36": "5vciSFEh6dBq7PBjUJ4zJ8hbcSYg7FpwFzu47s4RJxwMpzfHbgsP55eKq4rsg89EEW3CvY8DQ7Vo4vMAzXoC94fw",
  "key37": "5vHZfhHoGMXTMCBGxBEMgSTQLLkzURHPKdy4YFiVbv5tdi86akFCwQuvW57C5q9xMMAvo5uL2aC4QNN5bAwkEujK",
  "key38": "573fSYm9FKUDwfe9XGsFSnBXqbiinjf5WikHsx7xt3UQAZh788k99fQ1QjVBPcVng7ftPfPEVBUCKHLXFJuPTiEh",
  "key39": "ZtZAUwT168wajWHuVyV42qf4QD2qeqXBvF83XPRJJANAiLsEepa7UBRj1E8bXVP2miPYaCUfhzwek474tcLGdGC",
  "key40": "49AAEVpAXwt4Jez9e7s7nrsyEndq4uF7UNt1giBnLFT2Xees2ZgrLrHAsBWhombr5zK5EGYr4MLpWqJ5yBw8L8Hd",
  "key41": "2eST9foLxWNSrDR32HaDcNW4obUs7Atx2n3VPw4SuCWe7jxr2VZzo4nnJR7QLJDfJfVzFCdZniEFQdAYFFV7MUNA",
  "key42": "2ZibAJd5SXkoGDpUwkXEZxTF5FZZiXTv8byiyQLaEYyFAZ5ZcnFG65BPaFP7soKGozFmQiC45td4BiKsLAQLvpyy"
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
