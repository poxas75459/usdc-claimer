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
    "4FrsxHa3gc1dTQ65ucjMUUrGwGHynGmN8RYpCngnj2n7aLd9B5UC1kJRvKPBFebdRjceWaqYMeLRvWfgQg4LNg6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HdXJHdCcp2pFhL9xwLgmxM65JBahB1DFWh2XAmPwqZYrcxdGSg239dh2yjneU6JeMGbmQ987DTiJkCoexryFG5B",
  "key1": "4PZ3puzxy8NsBtfJeD1uZMpAnn6xt5R4xwMjGDjnobWUaZENTN5MnRmjGSNrf86m6s59Rk5EfcgswrfaD37EDdPC",
  "key2": "4ptV1XA11r7xLC7VZ8i19EWxFJmH4DofYxQoJw2azeajNiGVgLJTtrPBwDH3oWLTSoEaBufmnW9CUiYzxnmTSVcm",
  "key3": "3BckFRL9BeEwCc7Ap6t6cf1GBgXMwjg1DHfCX6SDZy7XeMwLMPRUPqXAZTJgeNhE73wt4Bp4bLRmU3QhHCUjxH8",
  "key4": "5vFiKWeWn9PBdnmoNf17AD4t5YeuRAoopKKDtFT1Gk4neWyeXV9TBR2NCVKuQstHuQovbwRbXXSi9gB6NEKWTnvw",
  "key5": "4SBrQeFcR2Z1BcMqA5j3EdUXdMHuxGqjxbHsMi5NgVXdP6CHrK7nRhcoyvTGfw9ZhHSyDaNZju93rHdbdWLxw54P",
  "key6": "2q8DVaYoAyBvadrivFJEXzQpgxK7ujPB5VngbweQNSTRSiRSJQ2L8guNTCavcCwSzBvjH3rwMA2A6QyKDiYc3NH4",
  "key7": "ph7cY732reQa8SqgKLGwMpsvhGmzLZanA6wEQMFEfBDhNJekMJStm61M2fhSdAsfRdKjF5v53CRLS7xx62ZwuoB",
  "key8": "aGDf8UHXSptZ8HWfktDdsMNx3t4F1stHuLuAfVVR7befWBTmSmfoGRV9mpqG9wwHgxQU8aRNBsNYLc9NwvS9tY7",
  "key9": "2obyxrAHjbp1CR4zThkCsYg3NWRZXtv644YxRsu4PtbNKpbwvWBCPoVSNVEE4AvLVaf9Ry1ERuCSWTsXeRsPRXCL",
  "key10": "5gDfPHFRFr1wFwftDdCmadPytzUS5TPm1U9875D6y5VUj4ryFiMdHdrfTFopwBVU15D8vtKeZHVTbh5YDurSzyhm",
  "key11": "3gC9NU6AcZVQiWgFS4VcP4R4VDn3iiKZiqzpB9nLjjYFaRsFB4mqWxJbowvh5rXGKiwgZXnxTnKCFcTJzRJAam4c",
  "key12": "4xTks1dwVY1BH1ht8WQhqzRccLDh7BvFqh4XMh4XxgSi8Qzu7HmNppciiHnPWt8HiRzG6FXrus6z5AkPfe1EqcSf",
  "key13": "3fQPBDFB6HrWdQcexLSjGpd5pRh2bXZDuJ65Befm2Cjz9nafMy8CdDgqWMr5i1nrjUtw7ajtMorqm2vZ3GxQFAFG",
  "key14": "i1NiHSfKWARY5g2tov1GWxMUARNxLHg4k2i1AmidZeyUuCPppDqtTjon7WskPGt4Bk42LA59JeAyuQui2hwQwNs",
  "key15": "21WTicDFbEZjw2RWBmsbGSn4vLTAEQfi7YLvGuiQopiCRZKSR15ZPJSckBxpsr3kCCgXRRDgvkKCTKZtgvHCZJhJ",
  "key16": "5cBFnB4JU8K2tfP6RAnuwirbMdXkKxmFKRhYEREPYpFUee68xU2kuz4XYNjBVLdAcphewc4taPjPMpWderfDWxVa",
  "key17": "3YPYgxCsJuuJFXchgK9K5749LDMGTmPuXtN4fTPz148MHW5nuzbehDP5j83JPSN4765wgRF7RVfkoQcrz3zvdAs7",
  "key18": "LAGEgCZ7vg5FY58amGUMtTwt8DhnZSb9YAW19MLC5f8SawTC7yswNqWTw7o2vmkKfarmKwbdLKGmbb9sE1BvLj1",
  "key19": "38WVJdoAYxkcnaCo3Qg73RKe9jTGepPJz39X6TeaW2ysaBQjujdV5Ka4dhSRiS9q336idcKKds3Shy4FbG25y9mx",
  "key20": "XXxbXaYBFm7CnXVkpYPkVBUQoNAE2NNJeNd1ALUEbukso8U1gKu2xLgXdTYScZrxwdbyNDAjt2BsJoAtXC5KBMa",
  "key21": "2KQBPdRd9ECqYUFEHYXHV53YyUej947jLiGAU7GUS2hGN4Rsvt7kKqPnMh8RYmCnmniLRfs7wCyE5x1KuDPKs64G",
  "key22": "CLmR2uy93ekXZyLaAJfA3qWQRWdbLcUrQDQEJ44JZqt6HTgNv7pHz6Bpxj63gd1cyrYpwC9TfuJxhCxwMtNToQy",
  "key23": "PTjR9HEntYRxn7G8Ldn6SsKFLV73AFLTFD5ZGg9H79wG2Fimv4T2qEvdFTd2rAXvraCJ4NjNgveGRn1YThpMHQ4",
  "key24": "5gLWyHaft3r6vcPnc4As4Ktdsb8NbgvUMi58igewEELn3jFj5W5Q3TkWrhQpeqVfYzYTWQ6aKKZXVpGcMEaGy57Y",
  "key25": "5rTRmrfkUdg24XXrBrzgQp5k11dxfYqmKwAcGnCzyMcgbHipM318UmVyYeQKmZKP33vdE1SR6xcFJreQhFLZEntN",
  "key26": "3c8cqpa2MaL8c6zhC4ALnbMAQd76asGUJBJSvBJTkaopuTf122i8gdERdUkUawd18EwnAmCSs6JQ2HB3ihu9kChB",
  "key27": "3ZqaHcCjeVMXm3SsRYyVnqoXW5EdfBzTXiaiEQZXBbPqkbt45H8RB9mLKsg4fXpsPnzUMfzb5fPTfRbpNKU5sxLJ",
  "key28": "5ahZfytBmN67bgGHdzWyUbpkVc6sLPnPDjvt4GA8w4d7BQX2EmNsBdqPuoC1nwKU5WwYqwYxhJDdZTPQ6Mkt4Nat",
  "key29": "3UjFMF35V1wMExVNdhQY1uL3nRFdjy9QufZJJJpjyDx953YfE4rFmGfmqiJRk2Ci7eq3YCptT77yBAV525HDt6pL",
  "key30": "2mSteDWSgRyjFKKGt4ULH4fVLZD3GoWtsqmtVBEzPpWn7x8Qx1JP5h5aQqb2G6Su5gyTCmTFUBHXXNsB8etbVFi6",
  "key31": "4GZZY3Nrr2N9eMDTt8XjHKXsmp3aGevxVgJj9AikX5WnHMZeEBYpweCPC4Equ6jvLAuWJmsVbBrghj2yxa2H6uDn",
  "key32": "5ki3mD6CY3aweEC7urCd45e7MgmMkZYWdHLM8oucHpgmP9LsTD1pZFSWj1yGCr3hY2DWBhwNSAYQ6S4sSF1e8thp",
  "key33": "DLGX7JRpgPZXhA3TLThBA1rTpCAcbtPUbaNjhfgZCnb3mnnuU3EHr5iHBgPoy1zSVRM82HQTzpzPSGESUngnWyh",
  "key34": "3bHHQKo1xRU7bts8qHK78a11BVx6XqFMnKMhuqj8AfykQaJ87RCKz7BHdiyv1Yr3RE2PwS65551qKSy7pK2KSdkb",
  "key35": "61Mxfwc7g2MJSqPeefSfP5FJrdigPT1DGPzj2PfRw1JHjiY9Ufi2JmzqjxFc3N2hvYdK5txU1M9nEoNXTpzsuN8k",
  "key36": "2sL9ZS5UHfEc85Y1q7XTvMwkYrqmxqJ73gbkMHVaWxrsf6w4UyywyJeQ2fGwiNX5QgerqguSD2DNDcfkNHWjCgnB",
  "key37": "49v6eSKP8yk43CFGrmBWqTzNYfeF8KwmGfFsNgJHWiWPEu5qepkVxup9XwWBYMrUT3b9fWC4E5ngAdiLd8UGWoFi",
  "key38": "4yNZzdmMHpAHyDA7sKb4NDzAV4VwfFTgPbWkRxFQBr7kAqMnthuNtwFZrbsWnN7hxjGwH3QnG1cSHUyTp75jbjWQ",
  "key39": "4WMrdS7aWjntd857a5CM21Q2qhhdwK4h4sSo1DRfNzbku7yRpV2SjBd5VpG5gCbWFp4vsT7TRstK87vzWZBMM9KY",
  "key40": "52CNDoiPAggJP3dwL3dp6B2wj99ckDpaW8LD7EDhxdPTkx72VGz6rKQRTLzRzqD96PbvRkSWc2h97T9e7NEnBJ78",
  "key41": "36sEvwVRMrsWuBY8AkPBGjeVufcLvf5NWg2P8fQpDmDJMxq8zGScHymMdfQFuNv9cfPVzsLtRxkLoJXvZQED2S5W",
  "key42": "4tvgSybyJ9FgXYGgeBUyoVJbEQ7UxNfQqT8TrXgYTkeKL5hF14CjKtfe3kVqhhhr1vWRkP8EijkDuptiDpbMVcvZ",
  "key43": "4uW55ZJ3RCo5qQNeALHXemeTippYJfpu89SX1cSD6bMVuC72bPSRzXMfs5MZU3KwbzWsWKyQvFCxeEdaXyz54wSN",
  "key44": "4PpNxuY6L6uJNAxPSxWiXp4LymoJhMazKXpdWEYqWTQMLZCCJ4oFyG83uHJzxcUibcwjtQCwy5wcYZ6QJXv6JALz",
  "key45": "2y4Mpoa5r9UKxaZZb3VbHa8mfUUDitV1sjWuHXi3rVG3C2mxzfQoKQyvmamcd4eekAGfmCAotpwAt5tNgkYLWaCk",
  "key46": "oHRb5v8nuBQJNDs2FwYVU3vdqNoentR3tiYsbvaSmFHTxNzfyJYj2osz9ddwQeGS53cgE787yDhRDLKML7P53qH",
  "key47": "2StsRspBph2beaYQngF7uokoMaHE5xPHF1tjjeSjUg6M2L37g5iQjZV9rE4mS1d7iUBroJ1vHBBnFR64cRY72gFd",
  "key48": "DR1XHeEehwUTnSY5WeAQthUrSJYpCYiR6jH8pwRtyvfcVNUwn4DAE3s85JTQwtxSvTW1DnoBftWgeQDxurrGG7Q"
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
