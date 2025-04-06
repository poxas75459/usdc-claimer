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
    "2suCEKmkyH6ZC7to7n2W71czDDzLyfK9rLnkVjGAwmkr6AwEiw2pcvSvcyhg88gCWinXQFf8fH6uyAXutDo7yu4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FqL3koqrqG7h4StXtYQU7s3AXAqC4YeiyVx8bsbTeWfzYSTwFy5jk8eEjMCLvCCxd3DBg1unCU7Vs5EXsbgZTqn",
  "key1": "4ch1LVTdBzYTv3zgfbjzj1t8VjqVWuQj64zemmzzE9TXJdwZx9bWYZXP448HnkLRP2unUpm8wMG6eyw4J97pHXMo",
  "key2": "b7MFLzpeZoTcKLAa4TaZuh7Q65un6NRs81GprMF792ZYmSPXtsW5MK3PqS18JJ8hUk76QC5EvP6niFBwid1nuk5",
  "key3": "2G7F8vjWt3EsyyYx24vjHrnrNxMJJSFzYQrd3phpL4RNRqTaTCoqfRv9S7FhnXD5kkab2pmECzs9yg1peyCUHYNS",
  "key4": "iGpqyUFABYt95a1uCGNYgojEEaJSXYNFq7D6Ghx2GV3eyQVSLau2Vmbaz1ufJKocfwUwqNvkMufzn7NpjfXQgER",
  "key5": "5hshihicJ6quSD58ms7L9YVUzHisuTm7GwaNWJ94hAAXgzvRDeZddmZ6JnLo25T82kj8tqk9oF9to4sKRCfNjQs1",
  "key6": "qyzG1HuLwEJY2P7RtcuQGft2r4sTseDzKZAmbgKeydvAqxhyQhd27vVfiCsjjqY2fcBAny65mZ84z4bzuxZdQ8F",
  "key7": "26qQNc9WK6Wc95BtiakqJzKKdvMr2d4enzBmVSi6wTnipZbM3tfDe85ahxCTXqWKFH75YERgje9S4FcRftf3bVa2",
  "key8": "JhowpYsuDN7Ekxnn41C2tBqd92pKX7NqPJKebBZ8qZnGwbTaxruyPae88a4BewNbV92D6nLsaoFZhH3Xo62Jqgz",
  "key9": "61xin89vKEQUhFKq5wNSUPxS2pEisq8YBqFfsA6vJMNEved4VKK5MJMVKp3sDCbJbtpoKgXTLTtobtfGzpixTmLy",
  "key10": "2dKfBitJUxBs7Nf3tguT2Nq1N2KWk9PHPg1tGExyjeuGhUP8GxwkKP5Wy2PdJSM9yyP429B3YCrKiTi7vkmzwnrg",
  "key11": "41DHxAoWyJ3R7FqJqHPZ6phgfnz3FcM6kcBawwpDvW9Gdrpz6aC1jPWi4umRotBniJZe6zYNWYJYnQWEd3e4jWRo",
  "key12": "3z4MSbFDSGKgZB4vURHt1K9JTvCuaBbsdXDLfa8AJ9B3HhzbM5CmJSaQChBs9QX2bieLfPmEgv1nVcqa5RdqLkS8",
  "key13": "4n1nkyMBjxkV8JowKKLZDSzeRkmMcyktwYNfDQGDLD3mdujukVhyzKRWTUKPraRqGQtFbyP7wkSaGskkv9sBQcdZ",
  "key14": "2eY7e4qUicBxru1Ue35LusSstaC7Ncmx9U1gQXJWPypj9iRMRy2VgeyhVfYD2wugjrZi6vqvT4JxnwwLUKS4PdEi",
  "key15": "ryCLLrRVGGu4N5AY8CSqkyJoFrNew54fpJHjzkD1fqzEzCSXNaCL5c5dHFAQxZsfttaLaYq5HQEoXX3Zu8ozWLm",
  "key16": "4TWLNyKszxYj63S7p6sKnrnodZT4cxaiwu7CLTEnsmqNBzbak6xXs8FkY5EknmZJizXHx3ghaKh2RoABuCxyzEvi",
  "key17": "4CmsgihTu81w7wA1D9hWPAbMzbuV1JhY2fRLTBwhcXRCXbwmBX9Q6TfqPn8ooZqncaavsjToKr2XXQaZQNSFiUde",
  "key18": "4NWpSopUUi4ck2Srb5VZjpzjRZexyr9KhJKiformcUjw18sAwJcBvshp6id4BVZFZDVkFAsaAJWaFqDuMETBxf1S",
  "key19": "62UJLwhSGpDr85xFCbUg2uTKS68K5zwLB2ecZtvFrewB7ukmiZ3Vb3UTviVDeUzqV2wdCt7AyS586Dr84ib9FjdS",
  "key20": "dqpRrYdas7Hup25aaeKbGw7Sy3avCkJ1QVv5N6Jt18AJYPRBza3PWUHugVoRsNKMC2aZVHQ67Ub4WvJNYMRNyBw",
  "key21": "2wVjYBqaDFuZeFQB5FeJBmVK2TzeNzHcK3V9tHXoYonBARnNRDYLD2pALLhZomWk6WTm4wdtL6F5vYurfrFFAe9G",
  "key22": "42AieNUTQ1aiEEo98vMoEdB9gcpB3Ct7QXRAtWcKzDCErtiBcQcDXRpkDrsWjNzwwip38XsvJkKpp2KzG9XNVECd",
  "key23": "4Lp5cv7HL1A5U2r7Pc7t8XYn9JBMjjAeJ3PunvYmAswr73q33p4jhNfmSEzdPUL9yQZrjYe63ewjng64wX9qTvB1",
  "key24": "3SfRmLyHvgi2sX8JHetyr4XBfGBb6BqFymWD53dYRQjBJf7pgpySdrPdtewCczutbegXMyENg4NyCUtzngJ6nkhB",
  "key25": "4i2htaoT4rTtxi3BVATcptSbf9HxbQrwUWmvv6ZfrEJSoHFzE8Ku2yewdrpdu3CyhFz1sbRyfDJirEDKGRH3Vjkk",
  "key26": "4LPae4JggHs2RKtk9abxgoujgwm5asW9bA35ojw9Zjirxis5DhX7WkVuKo5mwVDrgJou98yQoNtDkkwA9mZMdHDK",
  "key27": "RGvRihvUJoTu2osoHzFYd8fGFLvxkidqgREhdUcTCMLReXwxwqUenbxgCcuQUAi1tsGycJ2AHyav1i7FWtfUBTT",
  "key28": "3DjRzp1Zn1Kexse25Lghh8Ji4c8fXLMkp16ATKqBVBng1df8TUK98uRgHQbnPTV8JUpjK8v3oYDsARvjmLqLAkV7",
  "key29": "4u7Cbr1dx2rcqZy7mR4uYbiTtAWqxWu9iCzrgJBQGKF91js56fiK79pKqD6Az3ZC6JKiCBiP9PyxhzyLJ8HuRcv8",
  "key30": "3AQn1vJvRtSEvqRB81PPXFZdiaw5RAMgsYgmc5GCBNVUhBXQMtKQsdDVbr37h1Medzwj6aT6dPzm15qjiKszfeRn",
  "key31": "4AFXc4wpznA9mY8sLbupoJY4pLGP5TuR6CCNxEPNzVVZswQ7cgPDmXKHermJRKB8SHfw5ZXsQjmyeE5gmNCSoPp2",
  "key32": "5wcFsHKLessXAXGLyEngE62pkxT4ENrSwib8jAF4SQMyKEY4e4u6zxhSRQ87LCb4sRxZj7wc77uRgxFt9CKAX5Qj",
  "key33": "5KuWDQxypxDNPCP3dDoKovyChj96s6eHPPiesLy6ZiFBfeyg79ahrvW4jTtFUzLSCdexGuYofJBLyQbxgJwLtUyd",
  "key34": "3xLLhj4pVsJGzhxcydwerVogPodXBXJr5EgjDAYVCDz61ZN82bvHpyRw6n93ZWdBWXAEYo5xUFx8W9U2XKS9rNbq",
  "key35": "2vudhzAqQPa8mDegL3cP9ANyLxsiYa4w4XsGEDjE1qSaAfSWcHr2ERAnkdQDm3Jcg2hsjWkvyVJ5yT4au6tgHGzV",
  "key36": "5cLwSP8yYquYsTdrGwCSh6Y1CszQXCyvP4jJieMgEpK1Y5Ty2wwCoKJec1dNufLzepLU5hba3seMkKHH8p2zxdFS",
  "key37": "292Bu4hfKFadzFjr2tPZ4WG8uD87YHoXbhTpcbWiEh8crV3kMEBaiFgNWMz2yDco7uiwAQfVT486dzCTuZVHAxPr",
  "key38": "4anZYmmAFFBmgAukrGSrg8xmDaubWQJAb48iJWSN3RHcnf5kKT4Pqwytxa8RUwjKe7gYRGqatiGzRboyDHvNyJaj",
  "key39": "445iZ6W7PmCmC5Udw5NeJDWEeXbM4NGUYv9s7e3gdkWkhbTK4cqA6bsyGrA1QcNBCYzRo4CtpxCdWqvjjzCCJVh4",
  "key40": "VsQMYDcmaLVQpSiZcVazbXaULqTnPwVypeMzCMQDpFF2hCAMzpBiBaAF8DEA7KvfbZXEQ8npaQDhqcQEP3LTbz7",
  "key41": "3odKtoyS17MvQNsDae1LHZfu8u9k27ShZbNcS2XX71sidyqUMpQSJRFDRCJ6LdKzWmLauVz4cCDsV157AXgDkY1J",
  "key42": "64mTrw5yHCkmu3vVsBFwSL3GmzawakDjz8VT6faePN4gWJbiff4j2G1JSudZ1PaEqSMQVQq4r3nXpGKfnvwaSdZm"
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
