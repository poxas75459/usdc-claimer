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
    "3A6zHsuMNovZnUcjzdRiz8igQEJ9FPyasVhmMWKqUif6RwAGvVuhsVeCGg7oJMeMq1C7Kbnhuh2GUqAesHU1hUQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SyW3oMAoSBESw11Y5SrzEi4qvK9sGNDebDPsPBmAgjbn49r2KbL9LL4S4EurtQWnqNivLTBSRvDYL17JCnu5ahT",
  "key1": "3jfyDXMzkc6n8SP9kHKkvzRHRLVrZoc1vMHtNSg2kWV2MDbgEDgDMKDmmLmVCFb2PrcvLNq2NgpTpdYEgMK1geRP",
  "key2": "2gfzDexGmY5GrB1Do3FyyUpoMdB5uQ4ugUG5vpWz3bYBJ4dS9UanhPuL1dK1FvJcvbV6YMCkYw7G8gU2FeDbXudP",
  "key3": "eBQ4zEtbaDZ6LG6t9DmSrJsv8TjY7xjKrV5afytWSRLctmZTHcGhx3kCkmejMaXAcEm1oEp6tAfJ2Vm8VpVY4S1",
  "key4": "4Nn5VNGwiv3BpWgvUHHt6ZNbNSVKhkggTXhg61CjHWQXGi1aP5Co1Mmm61KPLybgQvE4v6BY1v1LVA1yG5VPqqzB",
  "key5": "52E91VTv9ngcWpFzfuUpftQ3MkRkLdzSqb9L5Ej8HeSzibGWMLPC3xzXzzriUvMBCduGJkvJNVrWiMa4rpcccvX7",
  "key6": "4FednpJqBHhUop3so3YFdDHvLPzWNCsxzsDnHxAmjiTztYKwKQd8e3XQMVxziXe16aF4j2kKxphSSyWscegbvu1Y",
  "key7": "3wDGrkAm3LejWTxmC88ftLh1oBZdG2yyvE3xJuZg3ifKtWEoLAukxBe5FtHPYtZnHxHXvoCpXQe1HdjSMvaM1ouv",
  "key8": "86ys6eF7JmD5z39Xwr1XQzgSx4rRCxAbDB3emdPZb4d7VVgsGRG4tx84p8CELWcSdWECvqBietc6GZimuXas5JZ",
  "key9": "3Vm3cz5bazeYPJTZhRuBp4vLvspodN53zkHD1gwxN9S5ZVKbxHVFzzhFkJ5NDE9UwBgFf1x7Njfsg3pU6k12FCXb",
  "key10": "3pc3FRAxoJugb5FAsqdupsjge8zb1Y22fsNw7TBpAQGVNCUoxMpauuTf2qva5S1Hsgc4WUb2DzGWVKKWpa1jK6S2",
  "key11": "5NKmZUrNiHXKNQ5DRrY9Lf9fES6iUmpTGAWTwfoaomJ8V77HedWo15txjrCcNLRWaVviV7BtuH8XSvS4G4QAJyuw",
  "key12": "5hHCXmy7QYWhSi6gSitxUyPxEYjcyPeQ4qW7FKFyMHwNh65HWHGBkNb3TYj7q1gy2hMLHCWZMdJ7aH8smtUXBLxy",
  "key13": "3pK2sexaHdhQvxWn4hbphUNfbn1xwDGmPiPgm39kDHro7Lp1NXVCnurrwKv1YdHSmVxDXHvb5vEfufMEH2DFJ8s7",
  "key14": "5MzCkGQ54gj2gAW2Gbitf44yWnkt9eyBAqAGHCropQA2WsDQZzDf6bNar1QQpuie78BkwGQFJ11eZRb8aE8JCsyw",
  "key15": "4uH4J6znS8ZUEV1yH9dC7Qee6PukuYYd1A22b81RjHUXo1VUHdB6zErPfLev6F7VPKJzbMJ1DmW5JHmNyGQh8u8G",
  "key16": "44rpZYo6yYPxrjg8tL432zmepMiPQkYEU1pTKSnzFfd2Ke3NLmdHoYTBofFGg2RsbJdd88Exrws3ujMjZcAaYaUt",
  "key17": "5Kkk9o9hrLBzh19hDV5UAFUtre1Zx6spsAGJF7WUW4GzaiejorfnaHZsDWFL6voX1dfkhkTdYNK2SxBTaJKo28v5",
  "key18": "2UPwZgiRPZeYGV3KvVNutJBDAH625PrbsvEuFujMqibxaEppv635826jtR3XqduJ7F1YX1rwtBxtreKmSaux68Ne",
  "key19": "5LYnym2FVJ1ZdiQBUf2ZdmdAuoKvFnrvV1E5uCcPZg6weDtLx47aPyV24cW3BMpPRbQchFR47WrU1h8PnYeqPjrr",
  "key20": "5eDWQi1oiRNKuVe8oPdYaF676tTbbGaSVLR9fX7pNGi4Nc2DaiooWEeCqLAsoX6iWjr2bHooHTpeFeK7zV8JZKBk",
  "key21": "2t1gbUygtEJ17y4z97Mijj2NgSGxTaipuDGrC7uyYw85ZFBkxWpPTCSxAwX6w3SNas6Vcf19L6dBKqk4WNRqaLTh",
  "key22": "5NpwPZEouPEm8CzE3SMDaGuDRKsYyhYivsv6Q3zehEaew1wHrsE456MAaPawRuaq57DC8tC6bhjmV3DmBsTepxEx",
  "key23": "66P3UL4vRx38pUHh9DeMjasnz8jwnsydBCXq9uGhFJ9UhFra9T67Tu8b9n54jTcZsx2mTurnngkCsHsR6AdVf4n7",
  "key24": "2jVvnbr2m8uVJiFAGwKnJAaL7DTUNAzdY1gfZeGvP8VPvLQLiw8RQ5FQ1fCbbPtsKHWP23aEtcEYs8xEvUrV48qM",
  "key25": "SqkFLTZcP3T24pFTJNAyke5Gd8peEUCQ4fQau7TSsn9FMaUe4B4nG1iGZGr7tnzt5F5LQmifhNrj6KaMR7bayqV",
  "key26": "2MuARbqj6BUBEQdsiKXyWVfH1q8EvCwRrr7Xfd4FHkCFtnSFZxsQnWVp9vGs6D5qN5a6MD2cyTXh49Vjs3ygNXTK",
  "key27": "3mdz31mZNFeuhGkbRcC1CHapD9QUwHrrPMMG2sZtnpPBu6eMXDvdL1PdcKWsTyZqjgWLzSjvAn4sR7VAhpN7DZ3z",
  "key28": "5zkUgkpGdkrnKdqjYvKV37nGp9bRHuNSygdoKzVgayaUjyndSeb3dBtTDV3trBxdRxZin8F9NVGBFjCaH5uwKvKj",
  "key29": "4kaCy18fH5uSVCL31wfbbwZqFX2Uqn4iMiJfb8nXgCYSiocdd7Zz26NcSSXgFxMTcBChpdWYdseXmtD7rSQrFd5Z",
  "key30": "4YTpqeKCQobakjv4zMhHHVRupyDa7SVdyqoBMcobh1fqdL7pr3gBNDowirHKBrHQ5QUWGzaitp4KwZsioykzM65m",
  "key31": "5zL3mfzdjsv88Wi79Cr7Ccv4vTBvn5fvmS1ixRA4sMW2i7XkJZ5kh1Z8zfkxqiFLD63P2eqWEsnS5rFssoFmeznS",
  "key32": "5uugKgCnnH2frJFNsBKpeTnrfYgTuX4gSZgFqTotFZasy94DN3Qevq4CCUAutDhxoKUdyPP25das7zf6oTL5GKZp",
  "key33": "47bBUkqh5x6Luwg6SHVGCHv6DktbmwCaQ875sx1uYBb1BVMxqC87eiaWJjtCPbtuHjQLG443owpkPBsKAHjHmd6N",
  "key34": "29kBEtbXkerwn3wVEv1ecoGW2MsZhHp39FqZF8yDf21sjNxCot9AT1sz5NXzNcBVAjzNm36pA8uoBRk8PcRzHzGD",
  "key35": "3T48T3sBx3eAMCgV9ebdJBWTmu4QMTRwPydrbtNWLn7qURi24d95vrwN1akaBTcbJqkTLAtF554ykksJ8wnAgJzp",
  "key36": "4p3JaVxumS299f2soUvtaKq5pfoKxMdsVpArwbBoQC7U3NDGFwRN9UHWNNa8Sfs9YzaZXbpQjZJL4gh3n25QdhTL",
  "key37": "4FCK38HtdRBRvHNJsMRkpXhRfH7tcqg2KgimGykpr7jRjnHxVv94rQKW4Auas8JrHfu9tLMQsJ12gHuQMtQow1Lj",
  "key38": "4VTfJdxv34QxabWEy4MPmVhJZnWs5m9pAu3dkQwiLS9JWJW7AL2qG3oXtchTyhk2i1n27djXJ662XhmvDyAerb9j",
  "key39": "HowKeQqxs5WEQ7LuQ7DVhHrLuisvDqEJbrnVMxNKkMeDDhssbihBVYpZkR5K5DqXyYz9MfzfNuywC39fsrRt1HU",
  "key40": "2inS9q59jn6ydVcZPd7yXD1M7CAcAD25HPbfohTV5yfz5MWztbgq2jdECKoEwgg5EFaV2LREFArwLkW1qAABHwQ9",
  "key41": "5NCmJc8hzEd5MnPu59CjpRA34Gr1GoU6P6LQ2dUiLjoDeS4d9bJyV1xBQPj1uoB5ZRRoZbVELsKEkVWAYxjzHQ8D",
  "key42": "4eWqDs1Vq2r8WkZgXTfPmeejCKvDxzhCH2gYtJet3T4Vaiyeo8iSNvARKfAgvb8djtM9y582YD6Nsfc3J6TFtsvg",
  "key43": "5ykeyAzxeUEgQj92fUApQCJzcVh7xtpADnBXQpxBhPSScerJW5RzNmkNMFCYXwQjmDraLZ2AXcknvpaytbEGiyY6",
  "key44": "3NQqLTPksALVSntjwNzeB3viTaWYSbRjC4DWkFqjPRiHD8NQFomihQwYnrnpsT5AcPYMu24jnKH8Bb8sPiaFSyTJ",
  "key45": "3RHxHHjrbdV5UDna4gAEX6VPNF9pahBrdghwm7m3Cay6zZPQkMCoZbF916VwhDMwMKBiZ7GBkVUgEGYsrgeoWWpE"
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
