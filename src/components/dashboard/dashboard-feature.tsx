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
    "3Sr7GgBYS2CJKw9KTVJaBAbEtS2mxwEniQ8G3C3FV7YAUjgoDcCW5jq9WnWDVh5PMzP5Vug9cGBxky4U5DrXibn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LKRvKT761ajCYhNdQvZ5fZqJjaBZt1fcPCeTHTuRyfs9H3JziSqh4epBsH3ZcQvbVbcPkUBCo44HPZMxmVWFcXJ",
  "key1": "1AEaUNt4iRtFeMaCVTfhBxPEGZNDbw5X4Ktts8H22TSTFPojuwQkjeXZ4dNBabFEFMV1ncpEddLuox5eatBuwqJ",
  "key2": "xAvvCTicoMntZoscFof3EwWEPqQd6iJaW1Y6t4dspzAXrp2acafUP8UsiffRnen4r5bhUW1PYgsz83r2sCMeVLu",
  "key3": "4k9VZuoncZ8MaqEgTT5Wk52aYakrxnJcp45Zrn1boYEam11XGnyNkcZYUKCMPoXHncpdYHFWjRi6fT5Dg4DxBAmB",
  "key4": "2eqWucsexkgZZA7tzcDNhMEJWFBMN5d34gHFeAUC8LkzCzKg58su311arZtGnUiWT4tYC4isY1VDP11eK9kcQSN3",
  "key5": "3GncrnTqQzxrQ8gnoyWKueUtMo6YAAXqGBaRhbQjLwYQxi99yi4SuRPNqjYU92nGJXzUnLkPGG8h4u1kAt7tW8NQ",
  "key6": "rwBYiXqWTAfgtQC4fv1LFD3tDshaJJffXwyzJqYBfKcHF9vaRKCmYYfUitFmyfYBvXXwpghJxSz6D3nT9C78NEk",
  "key7": "46imCM5kyo4udyvVthgVfcz1dEyADYbjdqCAx3CHUzg9ujz159msN6CKp1fDqTg3vok7ruWgEqW57kpu89EaFCFs",
  "key8": "4WNYUqa2kxZS2J9b7g6SB3YvYo1uYyt5af1EMZj76pXL4obquU8nHtRKX45jrx4BrgfgtVCN3xCbkuzovg6DGLF9",
  "key9": "2KRN6yrEiTFBm1gXbjtP6oACsb1AHTNRiX9zpRbfw7u3PB1YFNgehkaHFTAaqMmpNBtnQqm5VBNcTKYtvuXcUmZk",
  "key10": "2d7UuMn2DxbNSsDi5hp9xSCftcpj5DBSc479QEjvYJzp6WoniC2UVRUmkdz9LsKTkHyGrvtRZpv7t47QJbmYSkPG",
  "key11": "2gC7okvYydi41sX94qKMqWrNA89MSqxgz1ze4j1ub2UfFtsqLQjZPb4TGZ4sdLBmT6WimYTnRW1zBN4HYyqeNDeH",
  "key12": "5svR2amotKnidaWVXmqd9EXQTmuMURzA3D5er7yrDjTaLTHHwVkyBiM3ZBtfrpM46rJxdGYrKNNe7FvRiohNrhPs",
  "key13": "55PBJZ5mvggAmY7k5K6uwtRxaBBJ1zsMLRwSCH691ZRmZTXNRdBwhzEhVsKbTFwTvaihc9HdCBJDv93ghTwqnN2X",
  "key14": "55ZwWMmBGKGUWK8Aj9ysVTUHDGCmZP6SMJLEnDKFy2yeNxUJHnmo9nBs2u8xCCsAuknkMaAqY3JFNEo6FVZeHU9K",
  "key15": "5QDcUG9GZM12mCNU4rGb15aq7STjBoe56STC5kS3kEHqKYJcdFwYJvyG1BWDRKejoPB18sFDiZovi76xGhkxwYnR",
  "key16": "3B3c58eDyQBxz8XNepiWh9VUfnC7EDj65vtFhSYbJFLBvsXTW92YnwWgX64gkHaGgnmSo9Fhi1dWmeChn8iXjAUr",
  "key17": "2NPki52jjiWHgrzPENSbMJhdk5R5zv5U4aFojEyrm1VNcEDcjjqcrPpGyn6pTeaFhpH3fWHyiq9i8ScZ4Zx1iTVs",
  "key18": "5rj2PoDv5pPMBZJNGR8cXALDwZ4r8gSQZiwNHC5tveQTjFKkUahSC5wmcBdYN5CLCKP3PCGSZR7uBZMg48X9FGmy",
  "key19": "2BBwdqNLUwsiDpqSX6iykQNhedBe12ygjhFaShFw6gmXb5cXHEwHMxAKgu3VJaiPsBussyoQzLuW1zCXtWPxM85Z",
  "key20": "4tS2EHua2Gmwpqr8XWcTAv6vzTM6jYMq8Y48JL2ZvgsKKLY9sbit64HQbFGUBZ9nhS5GZiVcsJP7ag4uAjwqaH3R",
  "key21": "47mT1ELnyeJYtssm5egHNhVwxo5yrd7CH6bPDYEx9PJfaa9qE4hkKrRNyPhXo79n98CT2aSZigAnoGa6spuZTrkD",
  "key22": "3xeq6FZXNGPwco5bNEDzFQudRTcTBc8194tWhVqAYkPdn6vkTmq3JnsdB3LsjbKpYmYXv8Q9d3Y59YdcGnSAT6KS",
  "key23": "27JfV5BizWg2sc2PYqeRLBB2XY9qEWEPkT7wFLhRx8mcnXVLHGCR2NGvp5LcstZaNnSKeo8YCZpcTW7mjTQyMUc1",
  "key24": "5AGgUh4eiLueSF5LCvoQvYRov1W7W82jYsijRhV5gxf5b5c2NKGW7GXiVDhFWBCVx1ZuL3d2T3N1etLxeJJawub",
  "key25": "54eUCNd6ZhvxzvdhPKBMAXye61qpaBsKDx5ifur8VwYV1AASNpthDzps1yjdStS48reiH6dySVbTZL1rzV92MLeP",
  "key26": "5nAsQZa7D8sWuAhXGUHGGjWNVFxuBZ1a1ZsmGGHWsXUxM3kED6uPAecbx9R5RAJaW2p3e9nP1ScCQbB3S16CGrBm",
  "key27": "26oZQmPBHvRDjaaSMNNnFESLqwLiZW4dRiMu1KKhZknKqBbi1m3tZNAGrRsnYctckDDKvkr5jquKbtgWR9XQH5JW",
  "key28": "2pmFCZGPY3z4wPT1s9XcSwsni4sGin75cWWdfh4ALQoS2FxVaWUQFZ9vZu6hysRjZuu1H7wzuocBAr8Yq7sJzBkR",
  "key29": "5D77c3Wapk5MpLcUUpSsAc7Y4Mt9sSGp6bnDp3rewuwK7LywM3SVR9yPcrvh54MXYmLPpLx2hsKzXPTWKW5hzKPp",
  "key30": "RHPaMts7tyFiAjrqzJAF4c6wn4VzhSEwmN7m35rPQJaGbPwjYvgWTaLUJhC3awiH9UNsaHhJE4AUVsY5yN1daBf",
  "key31": "3pLUNeC75iwJrcVWaTbuPC5zpnfYNAq66W8bubjKD1o3jZXvdM2bT7vQnzN8eKeXuo8kodcheTJpMhnT13t2soAD",
  "key32": "4FWChzeN2wEEr27YrWFWF8WzfZdUhRWHBXhr8gdDSShYC2zrjdPamuQQnzX7dr2Huga2hpim7YGjnzrtAARsVteA",
  "key33": "2nA6oRQ3MAArdPoFG7q25J7UPs2Epg8kp9PhVipHyLZwzUTYTZytrBJzZJsABrwDzZohABfxnpbECWXD8Qho4J52",
  "key34": "45qQDfjYmAnvnwTZ2W7PAPaHcUxLZnkyYcaMMwgxZKQb3a3tib4M2vdomMEcu2TK1t1NEE1gdQiaQq4eK8mwP2J2",
  "key35": "4mZiuH7MBbVdVBAo82bKP5CgSFpDtiX123aPfY6sJCVgzkvpeYbCnugtyqucS4DPE8SGz7ew9hCuregUjiNDD1KB",
  "key36": "5f1S8FrZyy98MmaZvphCboEudr5RvSPaJAN3wd82EXeHaeakFuybxxjPgk4zkxw4FkE5sjzcEKpjpSterS81QVi6",
  "key37": "5V7zCyuQ8TPpMSRD4AM6Gr82mtzrHDXVtJHvRQzhjGVUoXts35uhXFX9fUJzi8LgWdBMaJ1R4sMTwty33B2PChn1",
  "key38": "4KCvt2BDCLSM3uDZydx4xJi22pjbSsS64ccJYtUDwuxSoV98ywSVYYBEffas3FQEgQxc8rFRDnNvaBWgQteN7H1b",
  "key39": "3sBLVDYidppQcJRH3TcLcLGp39mjidwC4yBPc22rZvdqmSH4VsjJSEKeyagXM16XCUMtHScwirWnKxVkWQAVLm9a",
  "key40": "2MHWKu5K4SFgokA1R8TEmBjyFAMMg1pmAztYNXnKkwMFdrPmLqBPBsXvLzY5ZDvXfJB6EVbyn5gzvmoUc9ATyiDd",
  "key41": "zgZwCHBxRnNMT2rYxsHfRdD3yEz52xZCP25Sn2jnA7RL6yjJ6Qk7ZR5153914qFhSRWBoateft89sM4k3QFFf6A",
  "key42": "aFALKJmk2dMnVdynF9UEmv3UhoBafM6qpQvtSKWWyArx3vhZ8rbhZhQqx4ZS9bkguMNmmfbfuLSTpYbeY5kzANa",
  "key43": "5gkth4a84NwbqKpduKkavoJ8wEZJh1jUXXGxTG1t4RLtH7ZprQbvuEytPY2HFEmSFS9NLWwZrbMwr9KTmBzA5vLf",
  "key44": "2qAEJ7fCqaX9Ehc5ytK8f85Rd21C93CtfmkJfbXoKkBpWYeftrYuPfXmFXAfGURUwe2ifp23FZLKgQuEeHa589g5",
  "key45": "5sMkpmgvXyhJZPASGqkpfhhkJkQCQocUmwyPkVuggCd2WEEcjJLUxXrFupaNB1rGiduUw9vdAgsXjw2pt13KonHY",
  "key46": "36WQxhkCLZnvdjXzmLBVg3hDTzZsjYYGX5pUS2J7ZrgmpkwjJdZ7jXDuMehqM3XBLrcNevBhsa5U2ckfhgNt99AK",
  "key47": "5NBS9MoA1dcKABEjG96gvHgkN4sCsDc13EJJ8SRrRurHxFYFYh67uxdzKwSRX7Xvcg5oqJZiUgFu8bCfzcNS6Rh2",
  "key48": "43ddeocZGjeKf7TLkfw2fth57X3BGUPDLyYad2Vrs4aCn4X7yXHjNWTGSJ12LJqaLaHBrbqT2bGh6C3ow1h1GNha",
  "key49": "2dhuvA3zJH4Cn4wvahkFj2S5G6cq8cGVkNDYitvvP94aeHAtWTzweTBCPBahDui93fGK7bdRCobVvAJV5wXWKmEv"
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
