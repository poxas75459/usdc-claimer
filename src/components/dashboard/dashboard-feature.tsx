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
    "5rKUVzQCfNJCQ9B3AXgVBh3RSFVVdAZkVfEt4okbfFEeEZ1va8n2iE5jupaHFS5DXS3eQQamajpXyhGcjtM5c1QD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kQhBvLfmsSaG3wB6eDE6KCo3mMxFCAPq52D1CmvtPF7hYAHmAgkCAb15ivda2Pi6KvgitKAXrpNxm4HH7Xrjfah",
  "key1": "38oMYMqUdhSdshgGGaZT2PhQjrAt6MKUXHXD9DL9JteXSK2qkZUE6C7JGnG7MvfroQsYazo5PweZPoHWbJNkPTmz",
  "key2": "4sECirBncmWWLDuQV4AM4E1ZSQkqzAVjK7kFo3jySJdfFwXQhMGRcFFs7ryydMhGZQRct1KZsakcMBHd9dA9SRBh",
  "key3": "8izRVRQefXUorcyTugChbKi64BpjRk1H9Dh8v3vtydfkquAZUZ3ZzieeWwAC92U7DnDPRcUjTEmw5qc812VPyXn",
  "key4": "2TbWMrkfSDvnADXF6kLnWqFeAz4B7HdpFtfZrVcHdXA9xPT5ritgRo2DT7YWbQ1ZUkEqbSNuMzGgnwBwqUyJmEQe",
  "key5": "3w8t4DDmqVHiYdfj5mxjzv6bx5YrcmgzGom3UqMkXLP2LTCZHd9wRfBXiKw57SQrNcMn6H9A7PXtHQcZnNKWwSnF",
  "key6": "rMpiohDqPDDmCWZmjf9sNLQfT5xyvRLzSwP9GHKK8gnmPJKxkxhwSnxZnWEUJxMm69YAeY5FUKBz4xSqgywgLmk",
  "key7": "5J1Ajyoyat5TSMbxg4jZKmHNTwxTmwLsoQYsK7Mdqe9Rk3LzAaQrtfamMLAyNV6tU8jrrT8qXhdwen1a9JjSWYnt",
  "key8": "3s5c2fgqzL59ahFn4RwKDTe7n3r2gqnqwwsbpXW9nrJ6UggjB35Eaa9p2QFWzezgdRNkeKLu5tm2s9G9ugaeP383",
  "key9": "5jQ2fhB7maivnvWmyY3pZbVScbUrdj1wf3ddNUGdn7y1bBPN625fmNfuZbiKGAdnwLBGy6kFKSLrHx5mq8djxV6t",
  "key10": "3NohRME4gq6y6CuUpZDxhUCVAX6fAhnteeVtm4AjwVpBNJk1HvZs3ApGgjNi66ehjZRWkmhfCf1hCPHMoU9SqmMA",
  "key11": "4piFEXyuuVS4MeDVhLBjAPFs3NH6UqdPMASoFrSphwAW2v9GcHp6oAMvhhqcjkUB1daqUbits3uEGUA5JH9Lxtnn",
  "key12": "5rhBCjKCDVDY4bb4ZuMiGAJ1WXghVf2B1TyTurREmaR53v79rBSWz5WLNhrsqWW913NcNrwD1ZAzjMHwwWCK9JND",
  "key13": "5wi1mHmCGXcZuGKtAWWcVxA43HeN4qw5MsjHiRoQRC2v2T4z195HEA7PtqwPhZ4b5D6zxqrZqb9c92BWyNQ8bXBc",
  "key14": "2dtSusetcBM4AbZTxMKh17g9jtuHJqeStcYMsHEWYsWTYMSt47jeMAJzduRjWEgQVqvYtLg4f5EmquDiH1MD8tTK",
  "key15": "3oUPRHaxy3EEwfJU739p7JSc7M3NfJuBYhnzGSMa7z2DUrtgizBS6zT381WravxtWubTRNo4y9Vbn1hrmBZqjNj7",
  "key16": "4VGrxGyLL7y1wjB4b5sfzc1zBqs9JiqRKDt7vd6yvnkYwRaKovmyT9CxW537cM43sLVGAahuaLvkX8mE2U43mdMt",
  "key17": "62FcJpvvk2DMP8hofTbkNJJshwWZvLWd1NDBhZth2cGa3zuctXLMCnM6bK45Vf1LR9Fi3ntfr6uEXbxdjBzmg5VT",
  "key18": "3i87UBQ9n1FV7hMYVCPW6WB8xT9QyD1G8QtmSqcfXiyR8m1ZuKuhAEXqXYKu5mCBUeGBwVUeD4PqauCRAuvkhLeV",
  "key19": "3KYjzd47W7WsAwwMwsk8A85E3iU4rDLgams6N636XiVCcdd6f7ZNuJcTBjPABTW7hm867WfYJRjV6bxuFBXemYiR",
  "key20": "3mg5zrsYLFYbidL2WpDjMB57nF93L46q5126CZeMar4WYSAfVdkJyg1MZhF1kHtBxyYYapHZST7dN8nehHY7d945",
  "key21": "2iYFanv5Eu4zwKtHYoxRQkPr2V6aEXX8iAXHBFhChAZGyUaCwpa1PNKqysK265PhucSGANHLSCSnHyeQmAJvJ45s",
  "key22": "zSiJHqRMzGHnirszK3Gg5AFQHHKdRDBEq2r93yayQ4Es46QKXdntvT5s96pNSGXGdU7Wc8xUskbBWcs8B56Eome",
  "key23": "Y5LwCthoFTESQuyus6bfQ6mDSKrHBmnK74juzG682RKZtyJbJiRdUWwCe6qCpL1tEgVqcDaF28d87aN3MkuMZQr",
  "key24": "5RfyYdyLJbS62SjuFLUUv1pYs2vaSS7QYn6NwpYFdXdzstMWfAg2Gdbq4ZHANyz2X6eh9MDAMj6sxF7hzJcShcAE",
  "key25": "2KqjPqNme2A7vi8J2RYjREmmMy39YhDC2HqfXF4bUhsjU4q4gLLid2pwCajiEFWuQbwV4R36B7fGGtA3ruFRtQux",
  "key26": "5uSgJfBS8kiRqNsU9HgA3SVeYC5nfb8ncrpCAi49TRZcH7uzzgq3dZBqN1JpzSGhoNA9k8xRsxSoLc1BAN8nQkyk",
  "key27": "3wgsgNqKwyxZ5iXpQuF9FM4Lovd77LGVgT422XyUcGCMfo7vWyMFN5K5NJ7vHkSvwudTLyHV55HbPaAjDo1fuYKX",
  "key28": "25B8aXQdPkRiuAwKA3hx9iSEXJGsGRj8H9jkAR9mEZ1SpjRjeELuBZaSMBJVgNFtmEiDngqYAPiDin9qgsbQxRSx",
  "key29": "3K1oujBSvG9avB97Z4is8ipYtQ2JN5UxtPBbWTXn6D889XHwHdpPQQ6Mb2mHkNLT6tp4UZgdm9opvxYTVnj1geeK",
  "key30": "yQpoLtC1nwLDbu87QCLFVwD4uiV3LCBPNkFnf9ieuVDwPjrzrE6E12NBfuUvVvc5MgurbVSFsMWEsGerNvaJUk9",
  "key31": "JGXWjWfpShPiWsYAumJxdKxfPSruxB2MhB8sjAsbNQv1yNBdVgp7uFAtqA4F8kaztExQ6JKkr7wPn9LenrPAKe6",
  "key32": "XUkA9y6h3cUTvxUoBwtsNuFv5tvkVZGMTm6f97cSevZN91oi1wR79XCBrd1hpjXLHMAS8X7rHufqAgW9BuTDMMu",
  "key33": "5S1frpeY23Y6oqCy7UvYuSfcHudWb8BSA7qgbfWZ3iN9mv2Mr7ZZg7o5y3ZbyUb2UJSvsYKcaTubJMZoraNvPzws",
  "key34": "3YK7YLcMY37GoaoDrPD4RsVK26jQY5d1TsvNH8GTR2nkogVVBG98nWfr5yfVYr66x3abjZdysBk4PmoMuFJygspu",
  "key35": "5jWohPTyy7mNx4CchFX6ZRjqdMLz5yRgMaqKMF1vs2F9RBEJymZowqoCvzu5u8izeycVzHBKS5PDFvbPa1KW7oeL",
  "key36": "4pR4fWcortfdXK7GM3v5NwCDHYBBYEuzdPWvC7iEhw3ddFLqkwphsZL5AMDFYuB9t5c9Xi6oyLDnQz4eDph81Nzj",
  "key37": "3xGwTHPqNgw5euZa39f4wAL2pUexCQJVXeX9KUGmpx8LvAKiX3wxp8Lw58sHE7wRyguceSZGXxMB15z6eBHFiKXZ",
  "key38": "YFUmjcy485FbHLqvGk8d6gdxXU9GDvYAUF67ernLxDw64RpByHeyroZkXZSBF1Jd1U9DNn9h15vADpsMdQbtBJV",
  "key39": "2JokVDsNujkcKTspMQTpNP7ScVNTNQUn4p61ENcWZKX5xHBSNhb8Sr2aS1fk1edMnAzXM43nBigG2D25fKWMXiL8",
  "key40": "5pDA5SX4QcbM5NJJiWww9LsjG76urd9iFVSfHy7rQcL1yFM3uNNsNFhNBbbg9dKFXFnEzP3rxdwjjQwF45NArr4v",
  "key41": "2p4sedXmP9BGwqrFL8rfFa89aHMgRwQyPswE8LBSFm4qQY9hMXqojwGCCeumYJwH9sgtb6FDG1iPoDoQtHUTXCzR",
  "key42": "5Uujgd1vQUQtikNwAZ3ZPcCzTcH3amBmGCRkeJB9RnVRgNTc1zhmrXJdBkBNEa5ZJtdNsFk4ZCUVDba1GZ57Qg7T",
  "key43": "5NJFKCX2uQXmM4Py9sUzsK74Ljd9tcgBvAPa2ma74suBEhypAWPSpK39Ws1p5yRM2SuZU1LQHCZTm2GsR1diw1DB",
  "key44": "5jZPchSeY5DyJq95u8z2XCGEtUQxjAYavwXevQLrRhcEebFEyHMK8e5jK1xYzqTH3wZz57W1QwREBzCxNZfhwT3x"
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
