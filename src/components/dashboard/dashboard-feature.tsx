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
    "mzXHtr9qibRXqTCoSnZ3tDFRiTfRzp4dq3ZugAr2oJL2LoazUotng2XbS4fBQUwQonKnmeeM77TCsqJvKkannjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y2uWBX446diXtsJCWrbDX5RGbig6TS3roiLZ5ry2CESddgQgswY78DYAYrdc8auKionv6weG67cjmqK8NhVTYKj",
  "key1": "54mFCSfVL7if3M7Prd36GBoYMStF4NQR9MWFR6EHZwBi5ehdUGYQCrdefhb9jFfvzz2v4adKhN4TQ6vwfk5cNZve",
  "key2": "3RLVTJMHf7pR6eSJvrd45DK1bwyRhvh8bw2ztxkcVWHRGPHDRtKdSbtUAFfpa9w3vZSG6NWCnFB8XCWa3abmA2Wm",
  "key3": "3aUZLChJELbAPKUMPJtVrsr8Hi3eytPqaqxP5m4oJt7n2nb3zimqepjwMFX5eabjmAvo7mcPY2QEQmacdxAQaBaS",
  "key4": "2N7kx5jE3qDuGJzk1r28ofa3apY25jQbjB8dq5LsXcHQWxiiJgCaQakXBwXW5dLfeiTs4HYuna4EXF2z64m6P6Q8",
  "key5": "2awCQ4Qcog98ggKibuJK3os9iz2GccJC4xiFrKxa8Q7u2PRLHC6LWzHdu8AT9qLxcpdwaqXpyCUxCRKnKdBxsPEh",
  "key6": "2Y5JbaZba8fdaoQUk1kdEKG317mQ9sEZNnxRojthuZk91BT5HSpLjZY2nzu5kS6uot5rxLiUJMFNkQvvbz3cqQcW",
  "key7": "5t2t3oYhsQzeKFUE4r8Ef1CthnbZnAzxD3xjUb6oNZbPszRHWn8zHu5eKbY7zn7ngsGB1CJ94iJxLn3bket8k8iF",
  "key8": "5KudTxJdpKGUyeqv7AXAzBfNz9D4G7fezZZ3ivTJvB7kZzrDs8qogEYreUmjR5HFaRGtEd9HZACdhmKCXecM17uV",
  "key9": "5nPTQWkgZPbpKLv33dCZNFv6HD9qRW9HMjPNs2x2MFvSgUhyQrxW1FxVFqhwZgf8k5G47ePRatZZYSmebUFPg8d4",
  "key10": "5JiZ7acAg5CPeSLJYuPF65ZWE8jC5NminU7iSjgMbCkiXStccWLZE4HUd55uh1Wk9LJ1KgSkkc9pTDpGCRoiHDWq",
  "key11": "66RWoex9FtatpMN4jUGE8AGYWe4gp4sxEzmVydZhjjkEa4dCnbNu42eejRe7ywXYYy3fVr3Utp3zvcpFnpvbkisY",
  "key12": "VCPpLhanoDNxFsNGowgnLgapk5omwfLttg1sMDiBPgN89FTpLJwEvwVsbzH4JBJcp65sywh4us4uxBuVvgnNuEw",
  "key13": "3t6pZ4CT4YhJFzgoABEuHdMR3wZweU1xvqgjB8HmBUZG38K1g4YHDmvgBCivoeXYFyrWfMNHYdfPYH5MgxMH2Nb8",
  "key14": "45WatKKffeMk3a15UV3h3ppyruotRwMYSw7mYeADzL18SFpyZXKp8x8E1toCm3X9C1KHNDJQdzH6XKGi7ErP2VR6",
  "key15": "4kevWoUn4Z3S4oCoYQ7kJGftsQQqeEvQi5aoNxfEanKbNARq7Dg4F9yBXnYJDhhrREKG5SGwABLiaH8QfayUeubQ",
  "key16": "2APwYzMCEPyupBLxCshHvsHfCaYnJMfi1yYZyqNNsR71p756jf8mcSqBNmvJGVP3TvHPPw43kVuV5hxopgsiB6UL",
  "key17": "2zeMhpS9zsvmdSraVYk1m7inp39JCqspryxpriZqweH2VSSwBUwcpuctE4LhibjM7hM7U8ipmpS2jm5f2QWKJUe3",
  "key18": "2iKRFm1nGcLg9CxzchyyHysHvJEnATUwJe94JxMzASxmgfyrkcKgRQYff6LBwSt7RT7Ujy7nwr3gWdVe1Lfn3wut",
  "key19": "54CQU2UUtyhh7VSQCAz7eiDiZTNpBLEoaKxj5DBYFzwzJK9GRtePK9EJP1T9gju6mZ4y3EngtCvW3oS9xRswvULu",
  "key20": "386RR8LNcu4sFCvf4gVo1NnLymkbCWPAMpivv7JyvsAm51P3tnaEw9rYo7wwWCdYcXMz7YKZUwvc1B6eJL22jC27",
  "key21": "5DWCeh1JvFjgfKjiYdo4ov31jtDLWL7T8GJTRe3QNLaHJJukjwwQzeKWxSaWYF8xjJKRkBuevDEbLHfMcV4ARPF2",
  "key22": "3z51zfCxwyTMkooUaYJLJL8CXWZT7rLt53WEuCFRTyF6cdRb5L2xdJb9EqTa9yLTwCNPmzQntgEki8YnuEiqxK1c",
  "key23": "2VDaMw2k8tzcRVcad6R9DGjXhQg87dMHsnd5zTfaMHUMYm3JUUaFEZXg1MzgLcSoyvZn2zbNegd7vR6iL8davnDw",
  "key24": "5QphKeCYasqCfWeZz4njwqxSDyXQNPMQUt4j1Cnor3hAxPWHw2Dupjr2HrU5QMsHFAXJUax1M2umgHq1cPsfXXLZ",
  "key25": "5conZKkJnSo41GaLt9cPjpNEa4BV19TkmBg8L2rr3HxTPz7cXMHdBLvD4kK5Na11G6KgyCSy1mqPxukfk7yGV6hw",
  "key26": "oUtESwusXaupwQGMCKh1Hiq5w78q8dzB4UnkkgypMruWqiBMmDCF1QBhiRktBuo5tSchAt7t6va1vVEE67rvxRJ",
  "key27": "rE1kYwCLvKZPFYNHQJfXYzFCJj22DtouChAbXWrtzJsmR2VkGyMK58Ptfi9VDxijgyyxvYgPorPa7rG7fCw6uNr",
  "key28": "4avLp99ASdgYn6u5ZLLStCfhuiEQUADEov8NCmMraQWckEXT7AfWL7RVWhGoXxKRpfBPxYQFymE9362To9wBi9Vs",
  "key29": "2fx1ZpgEfyNQszutR1v5ZgURKsMsqKWTV111f6ZNKYBg9MRT1jssB4hw7DNsKw3c6vfNZMJ4iFpja6MTUbxEw2zr",
  "key30": "3N7zMzWGw16n83cXXJ6zhNrnNL4rVgMs2vuA1jn9B7PDg7q8NKJdrpqJqsGgUd3L74S2vZm7mztio3rWTA4CzCkj",
  "key31": "3SgnDdpJnkwAn7U4PBbEAwx4irbrBFMdtnhQMW5J2w3HA1T8q4tT1SB336vkxrf6okJNNmeoeF7qA5yj3U7KCkzL",
  "key32": "t47EuPsKG3xxt3y8aWxsW6LRw7bdmJr13ALzK4jvfLLGQdRi3hxTp63zK5NxiHsrqivbV2oirwntqTjmPGm1Mzx",
  "key33": "4qMipRoQVo9i5yhGF9LVLovKK9e5UWV7MCdGE1D7ACuXujcwg7u6QZbjuzJydQZKnAT7vCrRfvjkqWz8tk51GjFA",
  "key34": "5hU5UeAWdd1ZepwzyMMDuymbabXU9AuofNAiP2WYJubCRZe8JUBizK5xabjQjhtboXjJviT9Lm6oGTQBKvEJrUY8",
  "key35": "2r3J2GGZtKbLFDgDUUGWUw5TSiFULzmKh75cLw8PZGXibbZ94FZxAvaHtWXhNwYqPxTpdvjTTQDS4YT3PSSMEcPH",
  "key36": "vdibHHS4TeXeNfew7bocKFicGqZHCSGqtLvf49W6Vh7tWdL8kCfaSVgHX52nWMt6Wpt47JfvpDN6S8cUJFTx3F5",
  "key37": "3yhkwgoo46DxyENhvaq7zBSVLGz3y7BueHx6YNqhrUpkNPeP3nvx5pfwBcHta29nyt3CSM6wS2d861gQMQwb5rxe",
  "key38": "3mLXMuYnWecQX7qU18ySGdgCXNZLAFD6n6ZBrrCa81DcmzqpUpinJCHva4NtxEgCL67Upk6NRcbg65PqwuEt31Sb",
  "key39": "53Hkzh3P3aiNvxZnWiRWB7Fk3coc2sGvqUnFpGo1cutqHppa7f2BDUNbtEz4DBvzeHUVPyGhHFSttDqeFfSREubu",
  "key40": "5uG2MT5rBnytwHiJzrkaZdWV6JWhwVwKQCipd3efZ2q1i2LphgJxr6s5A3vBc4eSq8XFCW3so3MmrQCr9oxNF8br",
  "key41": "33P2AW8vbnL51pi6ULCVDDjTCUuAaw3MCxw4oxRk8DYPJbBdXXyi5WTRHG1iiCZp8VvKCNj1L6ZUy3jafsDLFGCP",
  "key42": "5jsPhxBYrmCEPrNaGacJbpkLSohUuRSFAPPfB3XAPmXXUPSA5pCNtn8G3h2KWZQVEte3L53C5J3dCR35sNsL8RGp",
  "key43": "5kLWHzzy8iJ9ZA4FZ877z6XsKX6mck9eWk657t6Q6xsebR4mrssuCUJp4T8AuubtTiNgmjDoJdxN9TxQwsqx7u1U"
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
