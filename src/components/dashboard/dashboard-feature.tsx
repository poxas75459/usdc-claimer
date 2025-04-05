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
    "5dCtUCkXVE4zzG2tm8USwNNaAmE4kh4yA2JGcFnQVkeHhKiz6rfEwkmKoQoY9hcBhyMFQkDxyCjYzBHZqhA6SHvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45KAmkKYy5FNFYYL3fgH9yLjjiFLQa25wZwp7E3XwXyT7Jzg5HrrU1uKR5BvBrSVXDeY5PjuPsQ3pTNWAxmjatVj",
  "key1": "4ffCct48ZDasnzHc7M7bwKBVM4FAbeq7t7cC2ZRsHBfQCTr95JjEW8XSXdhsXzgecr3E12FJkNGEwgbWE8zgkLQo",
  "key2": "3sZqTKNZDgkvnoUSUjcy7sdNyLFEHmXviHdFEStUfWZpRybXx4PwatbNHkXtf7hSGWwT8ag28m2PyfAjVDuWPicb",
  "key3": "5G7kzzQ5Ftx5mq5GZpQ71uFc6Uv9VpqTsdZNv8PJmJ53WurAqhjKFiQpZcsau7tMhfJxer3kvDte1hQSJduNGaA4",
  "key4": "4xuivrRXibciyrhYvAQx4oKyPHEpMNGYydbuFFb823hnzKeqgtXjEZkNNfrp72bgPAwz3exg7cmSoR2wofYNRFMh",
  "key5": "2LFPkpYS5eXwpn6zsY5TCNS8fkoxehERrnyz373JQoVogL7Hgkf49iuc95UqhpadT2UJy3RZsJzcw7G4cdwUgYch",
  "key6": "5S9kXnzcqususP6NL2XR3pPCPCGAa6F6w8WQeB5XNfKRQcmMuNtzNyW9QhhQbmmUq2kpyfBp9KTWXowthxEzqBSM",
  "key7": "2zigj5dnQmgKUd1eCoadxfqmxwAZPE7bSyfkPmhzZhwtqqMiFUXtkfUazjaPuxqk48XEmQ1uicVV6qfS4AGgL7ZW",
  "key8": "4fPrapM9FuvPpfE98RnhrFqxb3cj23gxyJzzNeKCz5PhjiurynH4kApD4zquqLSkemJS5FQ7GawrKCDafUN82Xc2",
  "key9": "28rmsfWMHPAPCi2j8RdSBjBF6vdobE2JCgGonUNAKPRBaZdXoLgSeg8AzqHvtCiefkjykGLrmFKM6D9wUriWhGtV",
  "key10": "29vWm63UVGVLxaReHVvXyd4xUXivdkw3Am1LkTw3SiSUozqNoVuNHgB2qMo3fc6VwovAJKKiMFEyAb93u6H1C9uG",
  "key11": "5mgyViHkdRucZYW6uyGNdu1mgQP7hJH1HcdbM9vXCEGaGUsf7ASEegqocYgXjPKUmDEV8SFudD2TuraAaXqr4v95",
  "key12": "2Sea3zWfwsLPnD1nDLVRAmfJxYPmyeT2PpwHw1pV4YMGY7Le9ET8S6ffU3aC9igs1DiFjThNVL1dpkV1UHCqfrcL",
  "key13": "2C1LjXDYJ1Jv9eZoazmobPdHyYoBHioPhn3GfbqmoCu6Q17wAdW9T1hbXYVkXhsfTN6hUtVWaas26T9UrsJqAgo6",
  "key14": "R6pMmkdjRQeeLd4EVHptSdScXE5Ry4uNRp83DHa39ZLgDLUXXaw6V9YG8i2ACfBXbAtZejvJuuXxAxkXRpVZvan",
  "key15": "MGSCigcMwbEX7xBCfNythi8kqqN987mYsRBeik3eBBoi1SjnLUymj4fsuLAADrbLkt6p8JniHVL8P8rG7RKJRDF",
  "key16": "3X9WiuRzbpB3axE6Q8nfVmL9Cvzg5yKWu4Kbmtkbyc2NEjt6tDPyHfuw2eXTfEfaHMFrdxoHQWU6CvKDCnfDbwEd",
  "key17": "3ixKA19HXnhnC9n3FMKAyPjytC2U36wsY91kTeHym9CFzc5qtzFB92LNfJEWz4rM2ZGfrNVDw1KFXHwY4MUneW9N",
  "key18": "4Cwq9hEscFWho6SpMvdoyp7aKawa4bfkzA8GfjFAdZLTZ3gLHGrxrCxqF71eLjrwvZzFNwJh23Nxkz2zz6Kt1TCL",
  "key19": "5uzZjeYrdPjiz2Mjr89AX2Pb7KVSyXKeUBRGZdS5W969XRj8dHFj25VcRCdD3vLYTM1CpXpYmanQw9oaBkTFD44y",
  "key20": "518NQnpMrtD1NuE1a5PMYGaTETztPB1Z4QCR7567pU6vJKPu9U5aHmVFHJWVu3t4v23BBd76ForarwjjiB9sk1ah",
  "key21": "24GHPq64Zb5jMXZU2xJzLZ25PF6CZ6b87F7Fe6t6HfMTUEdFTFMTPRmvzJGcuy4jqsEmUKnTcu954ay3wKH35NWS",
  "key22": "47JkgU4CnSU5kN167VG7E8RBjqrB2cQssWjMb66h7P9m9fT4WLiyVERSrC1D4YbfksdgUWhornnyMkF4iKTHhhwD",
  "key23": "4HN6dhQAtzNAsjACkcXKD6tYBa4uF4yazQ3E8kYkpK1AyzUNgt7uiCBqMsfUoyUa6YcaWs8rcFGhzgUvDatpHoTh",
  "key24": "53QZ3BRN21QyLDCQqwnPx7mo7aVgy8Z8yR5j3fE1Boi5zQrr6j2ki1F9CCDayjbbULtYYnGimypjjCFBk7W5SkoM",
  "key25": "2apvYdcc9hZo6Ac6ZSG2ytiQarn227E4M5jBEvC2MW7jBhsQXYrXGxPHPVcAMi6bDn2MdTN8BTpgHiV8AzpZvvb5",
  "key26": "ywAFaSC9MvkRmD9zdY4UsxPLgV1ywa8bXWDze7RXQc9FYHunHF8oS3Btz3kTeco9SQm1JrsypqbK9epfiELuKdi",
  "key27": "gZ6mrxs2aLuKv32V3QAE74TBpVg85s6bgaDQh8AE7ed6uUugtgrBip2PQXFThRWM795Bodrw4FJvHJqvuLvmRdK",
  "key28": "zMvX1X8dDqoWn7PdL33kDZXnTgwbfeV1AXJs7JnWSvSNHeViuHRWuBsE5DFhUZjAstUXH1qujFaEMMrRtWGRiBw"
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
