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
    "3PkUHHtEnYGK7JHqZDqqxi4ohpTLbFeXJSaXoHkK4ZhPGffPz6igwHGmD5jNJcBAMSGTXTsdtR72o7AG4BgFcL5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dARC8m2UdLXe9kkpaWXrmBsGiYpkDQroBDK3arZ8iKzxfc35yo5pUgSXwfwTccG1iuAjgSBPfpah6GXudoaoK7U",
  "key1": "3wTjYuZttDSHnCYqBpBS9kd8HAcYgDomn7AMxqGdyA4Pd3iSCH5mXm4GLxjhGSKfjFcSTJnuT67xx179pkP5xEF4",
  "key2": "an5UXWLncdcJRavPzwE8LnPdmxfPTGYHGRUh3PjrHLajZeQ51VfezG88z6jqUJ4KktpwiAMd2ydDjPHxgTrX7Uq",
  "key3": "3N5X1JhaLhrVS1MqwacdQmGNU5ZqvfTfWWhZwbJxBzMmDhSPh5TKqncNnt2uvo5PKuctyLE3JT4XjdHzzLB9fUqk",
  "key4": "suW8JBBL2NUBCYfSkZeXT6c4oXG1PBYw6pGUtEDrQdxVmPvMyLTatonStTzC5LVBCpbCH2PjVy5Z6Tuoi2GNazP",
  "key5": "28kknr8CmNqrqJ8sdAjay73Nin6XFFXHD9f3oaFWZ2NvdMK1NHQSiebrdLMzgaGh1whi3TWBtAt7KkXBeNfgBcuc",
  "key6": "JU9XdKJLVkfTbxE6BbY9wbCLyD8heP9VjyBNEM3d1DetaBVdtSAEFBF8PBSXbq3XhGkD3YvMR8fKH4tU2uBi7xj",
  "key7": "2bF76ggfyF8qD8EQci7QkiY9KPxvp1vcLAgxGtPobfzChGyVkC15jP22sNdPyFPBihz1GcKhDeaD5CNpVrSdwoAG",
  "key8": "31sn63Q9KtnAjKk1kKefBeGdvjpXiNn8Ex2k54NYuaoup2GkFNURXtmsgjBbq7NNr3Rprz9xRH6QEH9mbiwNbErn",
  "key9": "4KaUHYrJkUsLgbGcFv1HHgH8YrZX52uc65VmmdDvnEarHwvqVn5CR6uhhWJqxfGbRzxZ6rygdenHn5jWxP16d5Nn",
  "key10": "2z2YYnpkfCF1w1Cv1ooW1UncRiiT56ZQnx8LzseyWEW8TGv4dLPCb3Q88evmEFzTLEkgWTiuSAAc2WYUZNGTKXGg",
  "key11": "3BN4bVQwWo16JcAy2emzDQC7Xx1tzvJP9bfF3NfcMwgHoW31S4K8LNRTSygzn9dk5HY95dqmfgJFgy3q1EiBjY79",
  "key12": "bJtaNkb2AP3hH9dwhNmtJgadwSqrxNfP8bpR2WPuQUW6RT7LfEdaqSAXRLyjyR7QPp1BMAFoN5Dnc1csiGXXUPS",
  "key13": "4fTU7Xo4i9oChmGpzj19ZGpNafL8LdjvRBC26u2QTU3foUAeyGH4QC9RtdFQxjYCh2f1v77wMRQRxFPDHFEgGjUr",
  "key14": "5zXypA1a2vFDRLH46szzQZdfkSZn95Y3wd4UCrvT4vcntiKdnieu9ZH7axKbGyYWtMYkRtWM64sFh7B2hZXhtV2i",
  "key15": "4ZpcKLHqCJy4kzvzNJ6Quz4J5et4346k6XLBat19i8y58NCMx1qJ7Zccmz5Ac9ThPsqwYXknYokjYiab7swGm7jm",
  "key16": "2Jbh4Rje39UKN63zRAinr66X8nG646NutQgscna3L2rYbmghxmyZQYB1Wopq51WewsZsbcafmAjiDarrFs1pc8TT",
  "key17": "2SQ4wmmHriXiSr5N7R1cZXZzCQK2ALAJvPdJUeKykZsRu3KUJjLjpiJ2TFJH2a5BM74FiYtguoKybTkToFPCnWve",
  "key18": "8rKqSzCWdSeTSAtG5NhaC5mhsu2Mq2UjHTv9pEmpmsrwZDB8HS4cydp1XhNpaXtKAnp12J1XXgbbBRdsUVs5RqU",
  "key19": "1EHxAkrUiSVStMTUKson13oMhFdN9FhZ63VaLZZtpMfhLP4L4UgexpZPHgrmpDyZBMyE6wAwsnEoGaJcdmCdae3",
  "key20": "459qcWYLdQByXXiXACiBXs2t7tFBpEHHAjbCbVFJtjQeZ2exuJGQRSwrYcyXJVDYMEGTS5XbsPNRmJcLTerjkEKZ",
  "key21": "2qWXrsUTG3GjgsFG2p9kVSjPszwFbSWLUGbvihdvKRpWNzX9SKgBmwLANXWj1tPaAHqtqbwwcYiTR97ua3wumeYy",
  "key22": "5rCWWHjwAPtaCkKbijKJsPkkKGKhY4zjRVbsbgtQeMHyc6bCjKrNUgc8tYssV3LR574m1AcjfhkmWjABnWuBwB4D",
  "key23": "6DTeBYsPKCBEtbBmsJiZYiPzx21Tk2BcE7XooK8LAAxvpJojFUbC9t2PGH14qpPdmKJVzEUHLaPKtkL3M7U3rR7",
  "key24": "3bU4zqb9DhLKFDtgZndjCrAyWu1p8Hein4HP87BXYTsQacEYXY3DHYZupMqG2kvbs6sb2BUvVz7TcjeGX5UQK1xq"
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
