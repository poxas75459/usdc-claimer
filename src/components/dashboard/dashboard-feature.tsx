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
    "EojzwFxG42rPkuzR8yKDo9TNyS2FuXNzs44KrNnhyMBfiTjPGEwNqZud3FXGYmP4QnPdbVqpoXPisjuo4Mmdd6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YYB79DWAAvf92xHP7Q2MN755MwZQkm8x9J8jA2tpMrPktJrwuZXUrfdq5742VqqtUVJZwSM6ipf5538SVsndRoJ",
  "key1": "4kr2aNHo2KpH3crbbjLvFvnjKKuPsJAtaCdZzMeCqVti1jT6GG8p54ZfPrXHKppfXB479DDg2QFvWosDPH8aJFRD",
  "key2": "5McNWwzgY5TkyvJ78vXBiH1PaRRQJ8cwBovqJ1bndVbAGJa2LaN8gETRdph7HUjfpHZ8xZ3EFck6kuin5dnRBVu6",
  "key3": "5TVyFedqbC1E42TtL5ff6anhhfQv4uDKqK3dVkXmec33YDxPcuzLEKjFX93WvBHh2ZeSy2WbVzASMTefZNL8zCYA",
  "key4": "5jP9t3MSGLPnF6dfjXnbNJY3uLExiNaMH13cHpYY9NqnLdkcSg9hFNXH7wJyQUi3vCFYacfUhR4xjo4ZvG9d84vV",
  "key5": "3DAGfcLMokiEZvrbmZF2qvpsR5EY8LzR7bTX2WHpGRwmQHV5zkHymYernxkJhLsRJwQAej8ZZYWsZ9Rxrrzj3JY",
  "key6": "2WLKWo5D6qtDND1PaMNEJAQGsQEwRrXtVjy6YW7nuSBsxmzzcjQK3DUBPjmpkhjdWhuhMzxuGaEDBYEnG9u1dcYL",
  "key7": "41wfvNgZyseuo8PGGrFgFtSB4WULzG6FAXZSUYcFaSAjVxzgMAJawptdkQqpfgi9RMSxXX3owz1mRxumJ6eyQujD",
  "key8": "xNoinyc4Yeg7J9XhgsxPQxZUv9GHr5GMA2tQ6kskEsXsTgjmB4niXczChYifhDZtq7FVp59Dwpf5DSwy36zXRkc",
  "key9": "4r8eij52HLUZrUtRoYjsJNec1QoXBPgZpEtubGKTLxoe9tBmSB2jebzwEp35HzodtZuFJuTqjLUY5WWJGhNSKye3",
  "key10": "5Q1cPXMFRN46eHFBhdSStp1gnCvJh7wCbdXCXwpjj7bhd8TG53RijZZPZ1RyQPPEkZaSeRvS5equGFP4fWgT6614",
  "key11": "5fYCjie99WQKEtbXRcDJfqPpa9654NR9kWp5m4E7gtckxucyYsCBpQschtzxWeJrE78deJLy88uDvT8vsHhb4wYr",
  "key12": "3Vvch8dz4zcetE9VTLpDzDKxFofoQbjYJUwE17PdTCR9GeB2pgxXHFnYBPAgDyy5pJEaiUMz9jqBpswMJJnvfNkx",
  "key13": "4DtLdS8mEE3JctnRqocKmmrNbgLZcMgRLv6WhQafh2HtsuLhRAHYBJMvjvjTw5SM9qzY2oW8jgQEwJCPyMAuRoQ",
  "key14": "2AZ6JPJxyyYggnKsgEnu92zVYMNauY5sXhF7C2ENKaX3AKKCZBiRtojbGsTEtjYxVAe2m1scKw7m4MHJsbwF4PJc",
  "key15": "2tnGAJjF2DtAU7fQGJXQ27Mbm5m2EYEYDgiXuk3t9ArSnpzRjd1GbJ9Pv5WLCb46zLaxQMbHoYoGEL1fnwKertBC",
  "key16": "2DxZHDUPc6Y3QUTf2BBa15N7V2kLooZwY1qbKBqmZ4UzVhjJHynjJ6oL85ExBJWZNpDKaoxXQoWsfnm6heJVtFiL",
  "key17": "5y5JJnVocHoybDxkeQdAiNHw1D1k26xgETDJ4sV7KqFjxAw8JP3n3MoTyF9QhkyWPZxTu4PUgfwp2LK8N5E1EkNP",
  "key18": "5NPuSBtSTuLA8oDxuVcQc13bw8SzsWJa1PikSztiDTpr6SCfajBzHBif8NMVLtgg7LFTdssw2Q1mTahXhAMwy8wr",
  "key19": "VhV6eHUybwxg8KaLg7zr939Qpc6Bpp32CJXmPLX2jNkjAap1paW3BsSBBdfdaQ7ai5TRcscHe7VpnuWbzMrpGGZ",
  "key20": "5KJFKDFyMvCDgupjoSUGwwTGyuheYg1mHe3oQkaa4CfVtUHPgFB6KMuW9oafecXQTLuDoViAzVoKShwbuj7yBLff",
  "key21": "awjRSE9r8RDYUXRYsLcnf75mscac9W5gFSJ1RzSRf1ycFBndL6wH96nJf9HPuwqirkqDZUYPn5Ftp3gGZprPvbE",
  "key22": "2YmW7r1NSNFhUhC7K37zhrsyViPtHKfF94J92n9QyzyL9Kpa88KtMj83bk18bK6osCdrrjHbmfmYFgh4g5y9PWWn",
  "key23": "3MgeZyQCqyajq3BKQJn5iyk74yycsjHtx1popqBt1ejcygrhpwWSaxJd2PmjxkUkVpnS5fyGW6JPgXNZ9BiPaNhs",
  "key24": "57ZnoSaqWb3grj65BpTkSUnruZ6fLwh98kKZ7PxjE9a7W2AvH2Qgh9HMn22LMrW4KhuJoxsiAmLF53tgfaHFB1qt",
  "key25": "3MeSiiAzxp8qhTdSEVGm9Y1LDM3CEHs4MV8mfKxsFLafVrt4DLhyhrLNipeVghsoKMxgwS6djQxqhqHw4XDTD8Cr",
  "key26": "4SgZZaiHYurrFyooyvajeTZD7uj8VsTyTH1vuZDBJeTJ7MizsacYe24214GgcXo2r9TFrdLyFEcHMoJcZPR7SQL7",
  "key27": "2VpqybVrWxAnjD4qifpwNWPpUFCd213u7bpqGdQ4rouiGxkjw4bgiB7YNFizhjZdKZHvnmhomYAieYPiJ16VmrkF",
  "key28": "523dFXnSs5rLWChZjkLkjYcu6UMfpoN8DbJVAXh6Reu4X5smwXJffdmux5faf9NN3KF4H5jC2TqQvBwFBTojjSGB",
  "key29": "5KKjZxNcu3geAHRWunhY52Ap6LnWfRUrMvCUmCy49EEuiqzdLbTRHrevcsN6kgwyhuVup6AskMSL2oP3V4GUFUvR",
  "key30": "5uRkW4uyEVTzKhP28PKZrBYk16pDEBgqVg9hUPL6xL4Fmdp8YzqAEKE4VG4112qq53fCo7NZ1Qey9gJQpMS1yGJV",
  "key31": "2daYZBukibkTxekBrnHxGwfAdyr2ECZNK8gZQKPtaAGCL9gkEdRfc7hte1Fe39WG2ZbdWTsWq21JTcCgcz4jxuWN",
  "key32": "3sTaBpXNnCzcwbMNHy4HnRYHwr5yP3Ctg2vZzR7WSZj2YUnSBPGVDgmoWeUyJoKhH5aTaxmTUaBRq4AZV3GDFaDS",
  "key33": "37xA4T2C2FVMpP9n5DaMjYhmM2PHqzCbp1favM3LhWidWtLyjMkifv6Yh5kMst9tCLRafFSbJH4MG28DHeJLPwd4",
  "key34": "43hbywkqvDMJuL1c5ufJ59DjQxUFnomurBFAB9n2XxLfspNuYoWUShrk5TS9wUyxHqRjApveJRAnZx5R9NeWHXko",
  "key35": "41nYma93BgxTwkw2hBhRMbUjGQfh15jXJ7fhopDAQfMoGsoxXQ75Ct8e7DC2duMTbBbtG7uGU2omf6F9tiktudyV",
  "key36": "32yGEwFPGzRE1AyLMCCsrHVLP1P65zuSj9Ut9E9LAcdAvu1d1beSmNxBXugdJVorJ4iRFgpr23ofi1mLiarnZEQr",
  "key37": "2HYKjceVitr9rWrfsjKvrGhK28ksHY3pSBpkSxtPs4ura5xgMNDA5EF7K7fiTW2Jr8hYniv5cjDg5mFtHfvZsYaq",
  "key38": "5JeSMfrLEwRkkEaJbP55skz2zT6Lw9wUDvcU8Y7EYBmmxyc6Q6etiGfSGRF7VnRzw4hFxo37DXcLEDowBdUzhFSs"
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
