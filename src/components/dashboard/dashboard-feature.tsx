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
    "3j77tP3fCZhWsD9ZfexzfJ6HXQaWgHPBsAoWvEjHEx79Yn4d2uqDRNFCxnHMTDgJUrwBZr7PwJpq73RtzqeNn1w8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PixL7wPYX2RrhDXYoRphbLU9B4FtwMvchNRgTzcsFdMExWg8zX6gwHh2jDwBSsGtSf63dFmEsk52hwLDPNLeyAv",
  "key1": "3z4QEzoGYkowahz9o7EjHCBRFV7vvfct4jdr1jjhhx3xcrC1uijhbZwwqJtVjnTE8B91LUYBJyHFwsbRsBuWWJTi",
  "key2": "sVfWShE45wZ4YpKak3mXFEXFsZaAVWGyrwr1B71mEDTCVXgv3vmBV4pJ59eqTP2THMHw4uqvMXPfN5A6ZYXMZnF",
  "key3": "7e5azw8ajZJNvTTve1iJuaTNhpu16KoynKGogcYzcZL1vpYkm4bVH4E5CUMjn8eBBFEx8onpFs2sx9rWMnUyBov",
  "key4": "4FcMiUKmfLAK6rEWLShGnSC18yHoRt9y1PB8GDy5jPp9EzqhTCBtmNnnPXUnvjDasufzMZXZYj18LEecBzGwsmts",
  "key5": "4QTuXwJy5KTdwnQBMuys7QBvfuVxuXpozeEpPnVCQSkdTuTVZh4pN3N9HQFjWAuLizVAC5w1bHYud5Ea3rxiMuA3",
  "key6": "5aTHAejoMJXoS5H8XnSRMV6VSoxvsupAabh314tawCKDZaxqwzbGNActroq6r8Q9tb9kv6uhkd14RXCKBGkrRe1z",
  "key7": "2EgUrDnpuwienux3abEoYMsFURHgjGXLeE8rUDTxVeGFse4hkRGFRE4x855jVwhvFzXCjDkx6EfSYGH7okcP4LkV",
  "key8": "5FfJUUAGvZuBLfS6kCp45kgpaenC3PyUrDcuYaxmRhmnnPUS2YmP3mBx5LwxwvCppzhjmvoxAuq6tXRfze3zKJMf",
  "key9": "2EyTa9E2mMPQEbpD8Pn4omrM2DXqtH3EDcbJnXG4iz9EEVw24BRSEuGDyXzXwn1YF8cSH6pHB5Wkc5dLCuN6kcKp",
  "key10": "5mZ8Yg292HRsWRxaKwfoEZp36ezRMF1NVwEj31UZHdd5PsBTBfngSML2JEVj71fmdrJVjq77Cvmsw2uczSSP85xn",
  "key11": "5QtGPu12m6tRYk8YUXfiPqWuE9ANybN6UYRKN1hgKL9bh7tvWKvHu4qbi5uKwLdLW1Q8mZui4dgaGwEYESDpp7Nw",
  "key12": "42FjFp8GEuxN3EoPeFeDu2sEzpQPpKSq4VKzuww37MhCj1t93CFZNqqr5EzcZfYPPgzx98wX6Qs4gFYEjdoqKBH3",
  "key13": "5L3QqZUmWWobqu1MpxgdXnWKY7P55GLcTGTxciYyKsMcjAosAiQBc1rpAte1zJFoNRqLEsKWUCdrMUB22aMdKydg",
  "key14": "j7zcE2qMCJMCiXBtNF4ow62MjfQ7FhZtuDNULHUg3zjFPAk6dqZcjHCmjcgGZnzTjDiPT2nvjC6gFodqiWsKQ8r",
  "key15": "59qMDhWJByvLLNhVh2MvBiStEi2JcY9UP8CXZVSVX9nJmstoWvZZShVtnvg9T8wxFqiUF1mj2LyfMejuKJLkWRAt",
  "key16": "FsYFaWGRDLW3M2Wk3VStGEaeqPM4NQ4WS9FFn5FVzmgEFWDEb6c4HDKHuRH4Vm7Ni7FiRSWwxrxzkhCujB6fLVa",
  "key17": "2ehWWBmVN7S4EQNPEJLm6q34G7QWPVZn1NEhf7VvAuwW6XCGJBVPk5yxfpaW8JQ52SLJEevdEcfMfnChxAT6Bnz4",
  "key18": "FGaZqzYzRyaAVfmaxAFvL6HdV9UxwMtTRK3DWzNMWC7ZyvseWs4yx2HYho8crtaYtSViHu34LKDXYJntN2L8nTC",
  "key19": "3CHsWtew7Hq1qRgtqqMLNgqfvaVCpV9HB7PkshReh7ozFppcFnFJEbynSkPECKLrukbFJgPgf3fP8d6z5YqcJWgn",
  "key20": "5VfYFVNPYWuAmb6gxAGbNgKTa7CquTD6Wcrp2Dr6vbU9gTun5XzRrcKtoCCnDYt5eouiKmCntTkjw7crKL1QLbBw",
  "key21": "3ZGAw2vr8aMxD1oSWtD4WgiZYJmLCef2v3po9dCr6gHYdyuzCFxst4Fh6MGyA3maW3SrPkZiqM3c4oamcrymwkYq",
  "key22": "5t5NwjsQCsnQLPEiaNqgMptFneNncZ5xWc5ovi3mGLHcN4jt2BYBjz9EN3njpzQnYQ5n6MDCNikzraT8yn1v1yRS",
  "key23": "2K17Xvgqj4dV7pi192tADKtYoU8VjANMoTLypPSt26TUMSnwi7pHNiESn22f5nos31D4CLFTmW6qNSmCDxfKRmhw",
  "key24": "4PbPpdS91Y51CH9NYdhEZ2ZPjZneh8y5Arn9A3pMcyDk9iEq2hrBj91czFTgrspXvrRao2Ff6GHAc9WmXyu578jw",
  "key25": "2fbaBDaaLiK2hgjmrjmfWC2AFvbNfrh1XpesLDZviNE9jY5qmfyLRwB2HbhdSvtdyoj5CLHJ31y7wezYakC2NVrA",
  "key26": "3zSKYXkLKBcwJGbh1Xo2Ms9jc2KX2LS9NYAAGKiJqQnP8nCGEGVwbCzEcEhRxEzPSdJvh3Xx7PtCEyknsXz4EJj2",
  "key27": "63USvQ2fvr2qURRgoGjyABEfVLrLiVjyad9zpprqPvKxnLtPfJQqYkwzx1HhSzhn8fvaf9C1BpMgrmHkQEkhPD9D",
  "key28": "ATCphTdio6rzcJXcn4oXjBRkRfRYW7ppbCkDXrFGqQ8hc2KTH66zfXyEz2n36Z82Z4vkFYumZZNU5XhNZbW7LYL",
  "key29": "5mpteARHpax1VPtv8HkZG2Ruag72kVThiW8kVJwUbHcwTwzX3fV1hZEKsg1bvH2HucV7pSY3mcSvnbRLNL6kt4yc",
  "key30": "3rusrwQ49Qehvdr9U7RCTTMTc8LRazRHpEge1zyUxd64YuNBRrNqeqBgHx26rzeW3Z4WTRVcFRfytkv5vJtmL6XW",
  "key31": "3igpcEK9raBDXhuTLYt14W1EfombojbJsGf3S4QFPzJBpmzaffJ8WGxQX9vxjuUMcGwYy1gTA1vD6s6U9nZNDuHm",
  "key32": "5D77iXvujEBDStP4iUGxFkPRnXBbTpvY1Np9h2MNgAPn2xnNpNe9pXNGhXgV8oPDT1xyMm56e9eUzoVvNpVA8ggV",
  "key33": "2oXRLzKaWkA1BYEsGKdv5SdFW1tTzHASgQFoATS38i35Jp5z2THCws4rLZN3ZXQjD9JPXVUQZhcdBVbFC3KHdf4f",
  "key34": "5K8DqEtCitgC5qX1TsXrUR2LEckkZe58gvpXfeFdv63gMzvTAF3ENw4RbZAguc3ZGTbLv7MgFJTyTWoyZV14CKwP",
  "key35": "4Dwo6sSM2NucDxe1segVV4L3H2bV4oN3njbTBLDK6DcrkEbMoG4tBHcifb4DiNVSBEtrYmMMUqAzm2CxU2vQhw8n",
  "key36": "t9GSBQWEx4E7F6KYz9V5YLNa7whFJGruDdkR3gv7VaRzp5wAvqEgBgHkF1TH95XS3Zc5CgP9mh66DF43Ri4gewd",
  "key37": "3fVnx9ZxK4AR7Vt2fGP7852GiapjvaAZwqCVReyjWQFTqVHPbzrK1qNfL1o2nxcpRe8dzXZ5ooucAD6KR73uctfb"
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
