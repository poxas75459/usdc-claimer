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
    "3Jynjm47Pta5vfKCzJoxgvhWGXXfQtHbqUCyBfSqes3ZnaEMgjo6seL3CkjVLcEYaD4gDVD2pEPQ5AMJLmhCYBni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQJ5YuoYYYS1McsjkeFan2n6ykSFu9G8St2VRaiyhfTgo4KieupWDypA5MUpBM5bU2AbYh6kNPyvqJLfzrvvt1A",
  "key1": "2jSNaH3F9tuMkcFMUgPTieMcR4QbbQRBpSdyR25fxAzyrEBDiuoXWRJpajhuMKHaWmXoAFNzVyK9LV3xfrixTMbi",
  "key2": "4Jqtvyz2e5RQupdUCHcXqgQZpFgp4Pzjj92Jnqw1LRXLTAsVu6a3MdWcVrsH8E7nfuurbcfB1m25DZoi5EXichMp",
  "key3": "3B5HiaqzvK4UKiND5LJzjQm8bcEY3mYRVPazdrVDgkpkXavZYdjQ3DsGYerVZqSvJSTtWsDhKoM3LDvzipJBfzyy",
  "key4": "57kHtpKXnzwxzmKswF99GvdyvZnKXhMMmLjRqdWbVr3cLASVxY5cWqGtEyUcTkgEaFUSSuV4YzRhmszQ7FGAgtfe",
  "key5": "3wqpGdDyqnvuN5ARS7Zk4z4amdePXVtiup86JPQuYbQPh7EXPz4HtKbbNNzvmfcJmH9FL4Mj6yLntekY3swpXKQt",
  "key6": "2RRRvtRCgdP24xiC1CVLJryhCsDxmvUsqVHykzyWQpfJTsdpX8Nm7Tqd4sGPEMptFZRqezQ3ftJHbNuuJ7GCPaNA",
  "key7": "4cxAznjFUrnHbLfRrVBnsigxS9cDmtq76NfoLs99cpQAAfPqAKKhaF4oenrZjehRgWJYycSXv7KqgbBfBzeLXqme",
  "key8": "4jr71eor7BMN6vhuaqtCbuPc4dCrR8yR8Q5hEMJrpGoHghmVDvQ7Pk6uKSB8XB9T3jDQU4Whpoj4LX9fXZP3pV6r",
  "key9": "5SXJPUL3mndp8e7m59wpjce5vnUy8osFEV9TBkpy38TH7QJx9zc7U25uBgN28z7CRvDsdywSbbcGpVwSk4X9bZtM",
  "key10": "2KsSbhciAMiza34N5KXXizg8FM3Jc7DNu9yvgRR9W2EWawF8i7JpyvtBvTduLLw2uXP6dpWH6c3KqQSXeuDRJN7r",
  "key11": "3pEQ1AgCunXc9kKYKGfq8SnfFEXLFzPw4E9QHTCpBiVHqunbCDFiuXVmhiNGn4Vgt2qojdQsKyHghWamgFbguqjm",
  "key12": "4KpA2btFpSfHsbvK4SZPsZhXKcpFqHKt7q5TSCn8PW7jBhAAW6kKGbZ1bm4jH3RLZxDgWDBsywHZA4Q7uXyMWV8n",
  "key13": "TY9qyTYzi4Rs1fEYk18aEZVDhJ5PAijfqHkogKQ3Eyc5WS1RX8NZ9oAzJsks8ikkphkbpCKSp3Uf6Haj2dcHhax",
  "key14": "5yFMDn3Svob5DhH2juMm9RAJN3utmXRrBQAwE8ojmibKygxXLoBWAnFYphf6RzEba27Re6gzxCUY21dwGnJ1vnf3",
  "key15": "4AiV381Cevg81oNa7exBB8X5vyzTBFUmh8sdE9wPQQHjnQM9ygwjDv8XW4NttJGozxTxtJiELDvCd5qQKPedHjxt",
  "key16": "hUc52qCFGc9eBFXcQzRANSNcfPy7NQbjDfL6xNVDPFv33erYznxpgNtakUfBZcXzWCRXtqZ3JmbrGHj94f8jofn",
  "key17": "3YFufm5gWrrDfv4NEYA3sETuzwg5xvWXKKHLY5KEoizraQ8gC6aKCoKLgdk2g2oFXqqHfWG5ojb1aJ9B2o24hGpe",
  "key18": "38rN12Cbsg526oBUvoLt6m5ELW2Ak6KhFNwpC7XnZ57cGSUNuQBSe6cUAsczXcQ61TvNMM14DvqyKSos7Y5qFVq7",
  "key19": "LaucimSguUuf3RkmPdMo1q1dURkDYu75vtWvTEx8iHDe8FZhVb3nHRAkP1gWucVogeivWo8kzrQJuJPH9Z3GKYw",
  "key20": "5YZ4jQhHgsGpoNPc3pnEpDWDCPahBuZTstLd4oNPtHBnisKtgjZqSytrkzFe9AMEinmYNUXrekTZa19n1fdktUBt",
  "key21": "3f2tb2yoM4LfKR8K1gaZS3dH4ZFki9j13zxNuS4o9SnJdV4yhwYNSKNHM16w2b11vpuLURmSZ8YQxWBeuhm89dqJ",
  "key22": "CNudDou2K4yMtf43Y8weZq8bTrrkWxXmLomBXPpKq86JaRdcJ9uRixAm4F6DR7WkDBJprKc7zsKmvsfEU9BDaGt",
  "key23": "3Ngyd7h8X6jWABSKv9htv4g63QE5ZQRcqKFeT91qkVCxSZJXEavvQrMgKPE4E85n7fWkvUBDWYMMg12r5qfVKcRV",
  "key24": "4dhkaxEHxYFhzapWEp5eGmYh9kCPGuHA2qUovN7qk29vTotfbm9BujAhuCwvigahNqLUBGavpvurAHAFbeZnAXaC",
  "key25": "vGkSC6uLxKjR6ej2A8mNqkUss8ef466ZNfEib6Sne8BFNLNxwN6vEBByptaAw3zS9GFEo66qwfZbWH4iZELGD6U",
  "key26": "SeibxoEfd7ohdqZEZLe1aauWy8tpcxh55P1ENH6X4LVqVj7RfUpVSVeHWPwRBXJLXX7QJwRUvSYwhTzyvoUhmF2",
  "key27": "324ayh8c5Fah5p2cWMyhmQCHjmsn3vBgDFcyq3ZG66ReH9yJyReMiHp1Sy6X1G4wxUsFyqcc67NTwH4JXaDDk9mP",
  "key28": "3bDu4XRkk8rLbKBjWk9KUM7RWG5ntNhBEsv1ck4hxsdHP1e9dsRguRnFB7cgfQgMCaKW68ropWmMo4ynJFkUnPvs",
  "key29": "H1At1vkDe7zrrinadTbivg5VoPtvNbkuMTxgaaQYgrSDMCCh7EyKibhUABsS6nzC3nvuRf272QKUAcLPvVD45JZ",
  "key30": "5E7Be78tNy7xbDWVDr7vD187fyjCVVQ6KQVEzNWYF3D9avMXXper5WQz7yyy4J3Zn4NB3dVguQumktgHYBzkfz8V",
  "key31": "ua6orSmdU51p23bk84DnTW5QDuvAvFbDCH5j2DAPPrjyB5sistGNqt1K5Xu5iG6LFrtcvDB5HSATZeowLmK3oGw",
  "key32": "f1XYJNnhwWEWyn1EQkgGrJN5mHEVuZ6zkKXZFXWP2ruQLgPpW6mtoS6tdbVLetRd373RRLbEhx2mpyQAL3j2e6N",
  "key33": "7iXxC7wgMTYJchfTu93P8dc4kZBbjqkJqZ8X4HMyYS8sYBo8P39Skvj2CgFptWPHL3Q4RTkjX2Y1xLbtchMPPpG",
  "key34": "371JfqtqTeyE3r54sLRem5Mnes2NMT6DYHMRZwzjFLPzZUuYo7KhiwwkVW6t2XukdxH6wnnKcGHXpZuWJGSkWJ2k",
  "key35": "5bhp9tB9bgxyD81fpdtQnrsGaKabSZMVuBhKU6SVQwNdUiTZzbEmxsqRZyibRK8pWFqUta6EzByo5MgSXgusq7e2",
  "key36": "qcSkpTrs9Ru4iEvToxRNQsVAsHfASDK1hnquvpJEVkMQQw89hn1FWtYw9ZEYpahvg8j3umeViBrFCipYPrNdjut",
  "key37": "3FdTMvbdxpNxu1Az1ByjQFER4DC88yK7sgBGFFjioGaRtrhVVcPJNZNB9CT3qeNasDftSuAvFxvJ9CAAS8wkyZid",
  "key38": "8kivKLqcXnfZK9tVB1JZ9CzkZHYf2XP59NjhUmtRVn76fZMHcZ3tz23gyhp5AnREaQnhXQcsjmnmXQR7Nr6Cw8V",
  "key39": "5jpPs9vozZpAT38beqs5tseR9auz6FPzA2T8i4QXqWduMqHjSR57d3yGkEKZHvAwQtWSEtaPfcm47ntdjgta2Ac8",
  "key40": "3odqi4QzyVvhSZ7mxjjBNBzj5NkwL6NqRAyyKU3XiwiCR7UTp6X1cfYWvuuY3X7UgKgQ9pRfTrCqiMbpB1pK77qX",
  "key41": "43kAc6zsLcv5nELrNQEvMh81D3YScEvtxDG5pYdFfP7FVoPSfXBnXc1hstAevcNxUJZRdAKe7yniaZhSqTqGGWBS",
  "key42": "5VVbQsazd15DVgCSJ7Ypdn4LgrsD7sYVCsQAztvfWSdTw5SYBBHHkDsitGFs2wsixhhBpCGEpsmX3rPmh36saDTq",
  "key43": "TjaiwaNC7TSheeqTaFJUU5hdQp5GyeTRHxpaXjTzMSvKHontdnEqZsFj1snsWufqU26H3n7DUNDSKLVS2NdcM8w",
  "key44": "4MsQDa5w42qibKWuBp2mo3fZ3yhoZUmdU5GZr7MfGSodEpJeHsqW6cEBv4oaSw6RyeDFv4QwBnrX1V6qJt4jywye",
  "key45": "3rfofdK6BfthRLuNC79ErfABuMHRa2Z9cny7rjMdggmrkUYp7xZqoKCuYyiqzeTtdr2qQ2UjzginZtLSaMn7fe7b",
  "key46": "2jS4Jwj9HFQ7ukUgpa91LQzkbmNS9bR9drAT6btye2DSNneBDk5XJwvwephVVxjv9M95PseSZSDfXqhaS9cfKaDj"
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
