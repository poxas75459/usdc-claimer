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
    "mMt7rHW6UpZUcb3HEaTDgCPVikLUmPUKCVUsksXVGeuq7VNwDpf7zXXKYSNMFFEtgQdHPasNbNngyyLJyUgj2mY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iTkLKsZuVKiA3j5Tfkz4TUpAbPQU5oPUVzZQf4pmcg9ZjrY5HrBkj8NYY4tEpFPqJEafbqD3tvnMT6YkUYR46LY",
  "key1": "24Vzq31NCYGx8q54TtwpCZaiuRQwsbNsxuAnfyzqrdzo771H3zYFiMcCvKvPsHKvPjw1JBLDanj5TCRGRYwpSELt",
  "key2": "KcbJStQpMB9MxbRZc8V97YVbVi2az96UX3Dwym6GwGF1B3a266i7DhLzZgfERJq5tXtYLqc5WFPDYdMfZaUmAL5",
  "key3": "3jfxUm4mo8H62QEAqyyPTmgsXXMLe8q98UcAser5j16coRGFcdnKVsb3rqQsYYU2C55f2JKVP3xerXoHmDqo8KRM",
  "key4": "2XmNbR7j4a4DdPA58S1WYg6F539byY7M7Y3csPuAVMjtF7mfMV5bQGW11M9YKatP2M5x5Pbmr7rSpEXi4kc7Jr1u",
  "key5": "2fPrJdFsjVeag4XkZE3sVc6ws7tvL3A6K7Hs5ZksJVzhTXWTETKmPNeGP96HNRPpvhLnoHRTcrrPwhHsU9MSSqDR",
  "key6": "3uVPHQfP3zMjnCBKwHau1RKJQJiMJeB1SNP1gou8JFoLKP9TvaT1URD38YZgWvEpyYm4dzW1vNkbagbmKcvjNBSY",
  "key7": "2kdv3YjiBv2ZHxGkWSa6WqjM7gdhbiLER1ZL5gBi4sTgdSjjM6wMVGGy1SycBiKC2T5jNSjZbqzXsneBcdCcarDX",
  "key8": "23xJRRnPYaiCLeMaihcLLM36XPEextEKY5ER1YaX81NGBCDJH1hubnjBTvbMF5Uz74BUUYHT5JeoQV2WfkBM2GFe",
  "key9": "3duLDnWbkjUM6Jb3Gi2QvKVGuDonZwjMLjD6wFQQyk4S6QZvbyWkmU8n63DabQULxt7qvcdDE6mtNgVdZBi7vayD",
  "key10": "3c7Qwq7H7S3ipaPA3kVkUuzRoHgbffGWYNVxQ7tZSuaJBdxy5qcwAx3X1c3XjNfeSGttCmZUwiepfqdC4HVwv79v",
  "key11": "3CYixzDTw3oMvWSV3MVuyFHkGgW9MvFCwxYButiHjSq5TVxrhoJnYkxCELjC89eR4M2H7qtSFMjS3eeLggD96Z6e",
  "key12": "3iEochtTF8TDcRYLSL2tLcRFsGVeFXzDbA5kUgLPjw1xrsm6WLwQuqC2LqXe7JigGhnBe2nVzWRkriyY7kX8kNjW",
  "key13": "4ZL5Wkr4w6VSHWy2Kq2So2bbMG6ZvU2sp5WyLWYt1xfZix2GdKLSBHv3wFAEY4ju95Zf3oNhzpuWJQDkqBkqrVJU",
  "key14": "2mSQf9m5ecx874oXuEtg9faPjiQpo3qrr7JByvQ6MyYmxKDTdkmF8gVRFNHcnS8j1pf6YhKGty5wEArugo3ks6ju",
  "key15": "4CYXLJrw32a7bWGtDkc5mXSBiKNmKoPjXJdBtrZaSZybztmCszeNDq5Q8xyG5J7aAQUSAHaDyAx1NwRptqUwoT3H",
  "key16": "59pgyBnz94euyzRoiqPoAwJc7c6kKWghojh9Ae2KpU8YeqvNRoRYGXq93UiuJ2B6avhGUvG3e7g2CmzJQfw8VwTK",
  "key17": "2nFnszm4jeM8sJCxQfxnp5FaYWt67yRmZAnzms8yx3aZUjz4WC2UW6r8UWwky3te6xPDLTC4sU9ZAUUnvTRKPtx5",
  "key18": "3e8DN8tB5ivmoDx9ZcnHnsfncnG4iEmfZXznzavTXDaHu5YpPM82xZ7Kpp5R5yTetrkMuSx1N339pxJvDvExgAS5",
  "key19": "3kx5WskwE7WoNoxazYD7Bf9oTDmeoYNpDqSkajiERXLCnfKbhGn3qbZbtvPotFXPNxzA1YTNg5NFg8oCs2FMJoPT",
  "key20": "5NbZ1oR6b6hCGrSHiiRWDG9J9FMPq42n5tmkrC7QHBNTix8AuGKgdoqTGH2CjQ27Rox5Cj2CeavX3Puta6EQuSWq",
  "key21": "5rqRsMLgPbtZY8U4Nsi5Gk9LvpqywsAkRFLTQiX8JAmQCQ7iFDJuf54oYX2esLN5RgACbvZKDYT33V1Hb74qLCzj",
  "key22": "2F3gxTF1FNnvdKNByk9SpRv3LnLv34nMjiBYu11QhB41mQwnL35BJZ4G4hFhXEaicBAsZdQsFGwo7omhhBgse8SW",
  "key23": "4kX9qzhgrRoUiWPVi7iaSaPpTDfV7sUxcZ44iFRUigepw5gb3Aop4JwFekxW6DMvQeWB8wJg9uXieEkje5UJztjW",
  "key24": "5R63XxhLTRWYFMstuPUz2gbtg6Msw6bYcNd6hQTBMH9Eqop5xpdR5qKMJ6kFz3F73z7N9pgSkAbanzPSvPkhyyvd",
  "key25": "58vqeZw6s1mXwGZSoBVZqpYAQmoM62K7EnctzafSk7HrM4vSD8B79pgma8UwkJVh9Ks6aPXDE3vgFxo4fBCMtq3g",
  "key26": "wrEQWVY4NVNz9N5ggDfaK6ytNGA65qTjjHuANhgjg5fKiZ2BAfB3mLt5Eckd5qWYG64taBZeMceyRwWQFWbmftT",
  "key27": "4eTViezhha5Eha8AfjrygibmXThrVzm526jb72JzmDUrtsHkaQSaNpE64PEB4VBEnrDYeo7Pi8Rb8yo6btSvLUpo",
  "key28": "3XDNJ8SVAKYucKjiXNG9JvxCyGoQCWKP2Yjt5iGr1fAh4ZvADkf63MHQB7W4mGpU3uvj2dL2WBozyUJ6VCJGNXD5",
  "key29": "3sgGjJUqZD7DLVviFAeEoo6Am4SqWbuwtcFAfKVcYFctSmiYHvjgLfyw2TEnjpaPbP3LhzkxsoUcEVHXT5KW6tru",
  "key30": "zjDKKnkPqcfGuWVxWR1cS71mbRtgtZu32PQZHpSgyqR6XbavicPxE5c165wWvqj5GJvff9rkJuSH11qczcEh8x6",
  "key31": "2M81oM6CrX6BYG1Q6jJpCHGngt3H6MWdqB9vLQ5RWqvXzZgiQ2TKMHP7iNem2vSV2BREfgU8sdg4N4yaFBRA2bC2",
  "key32": "2eMzKhkMg8tXHTAyvWJnWAtRYvTqjFfD61a39mgQapFkzbuQiaeWhpXZ2BDUkedphXZKPidJ2KcPEivEyBHkNCqZ",
  "key33": "5qw5qazTP2NE1zicXRmcyiZHsJP1e6LfSK4akvm7mxUNnsSgouDCvuGBdAzjh2FPqHqzpbUHNty17MFbQ9jCPhVo",
  "key34": "QNAPJyNmJGZdfUWPw1jeGBBTr4ojty1orPrPuLDsZjZJ4QWJ1qZFtnWwsSRg547Pcyfro6fZUo3ya78AecGHfWW",
  "key35": "2LxwoV9V3vTYaDFAQoih7V8zi3qZzXoHX1u5X4v17N6ibrQUiLPerzwRLZZP8p92k5HyyvNgpQnC9DHqkXBG2Aqc",
  "key36": "3VrBoAAE3dGoZU4z85RFymCu3ZayWZW78AB5NUn8PeCfGzu1c5wJJm3sdgQTR9cFD1MBPrdy8cHbsUHaEgmLQBPt",
  "key37": "5aJdhKQDL3xbp5payLUv2ZSrBw7pnNWwDADB8NkkCjiCxgnAtkNCx2t5j74ghTJezJqVAFMrbjivFo87mz3UwLzw",
  "key38": "3sBiGr3Eep29UinywQk2MQcNCoijXVyw3nZBvVDGbhH3ZmX65itt2dBJDmMTQuNn41wDgGCpKfNLAb7TJ5TxnLX6",
  "key39": "5Q6enixpGoQqe8TY5meLCqVTDQKnXrrd6MwUCj7WcxPV8veppvRnNRnmQ9nrwosZRfmXzguL2GJkvve8BEFo6ira",
  "key40": "2ahNQAi9a9M4eju2UaUM6npqw3gZ2JkYdyDrrtUBgEwJGJ1ZBnph3xbsYSt8aFY2shWvu58jPKJenW8Tmra1UpwX",
  "key41": "94wyQEwagWuCZPNigKTzBSuK3FMcb7CALQv7pLMkPpcJggfajQT2dssmzhzP3fEZUnDrRb41s7LuTxHFUzP62G6",
  "key42": "5znFA5VdHFBG8ucwonGdTRVxestbkLDkp1M8sF7VknW7xVvNLuxHacdQc25hAoxhp2dFnEwCJPeUxb87CFT26phn"
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
