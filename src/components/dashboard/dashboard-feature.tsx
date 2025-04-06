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
    "2NxVK6GBHGtK8uZ1shikgTYA31RCDttQvArh2ZF2udAXncX7QRcgKPt4KEjAHTPvLEszTDRZmGJEYMLLS5FAxfMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gSQHNC14t7Mw5jAZkJY9knMC731bEwUGsBsWuKnrGdqCbvcRbs8sCsqUQktxSzSpwydf4L3JNpVQ1PNz3JsoNtn",
  "key1": "2zrDT2rGrDTFEheHLAyoTVHtvNtSyH4oSPQAJGNVvfJFB9J6HdTXyAAQQWjxmk4yvKBXEww7tyNbrxikJDyRMewK",
  "key2": "3d7d3tRVp8C3sDH4sPorMeZDoXQeV42N7sGtDW6eKoHUn4NdoJe87QZSooMh5yj6FAY6L3chgo5V9jQWBUdQKvWv",
  "key3": "5g84y4ajVT4zLXSBEApCxcSV95LL8LLMt79sUWgHoXXXrQTCmWEnfcEHVrW8qsndhUhcYAMKgHX135D9HMH6h8tb",
  "key4": "4WzdUDXczSp1MqGU3e8AFBHYrzECtKwkUtV7z3d7XZ4pQAmWfRAmM82LPKNSMwGamko82n2zf7GjNLqhu6PZRKin",
  "key5": "3ZwhJAvJU4EDUUW1125XwUJ2XSYoX48wZT8ZDW9psjjujxfLJcMgtAziZpgL4n3ofudEH89kBLq2dQqjXfQJrhpP",
  "key6": "3TDmSup8nuqjLeEaejWi7cY5Gp6Ja2njMTSnZTNC2hTwxauyBo4TDMcPdpiDxBL8PfMcpLQGM3LP6SyGFT6sU9b",
  "key7": "2944QXQWkBbN5W4b7YEqeRQ3JTXQwi4cmvtQqGSMCgCg7t2gd83MMcPtZHg8sZAV6esdM1DBWLLbfFFbwduJK354",
  "key8": "3Tgow2LHnqo9XHkLcqnSumgwuQC5Z1tQQrfuvgyBCy1rJjdv7ShWCKN69mernX3DzXsc5voe4uZ3wgF2r3mcKFsx",
  "key9": "29zg9q4V9uuYsunTF3fpCuAvRVexPWs9GhMmE34hrDEDBwsUBz9tNDJWr9e8bwdX36oQyKHKJUMVx7jjHZUVjPnb",
  "key10": "2bPxDwHPD8ZbzEqqwTTM3c1PC6qCDSh6hi4CFhLL2jcqHLPokQp3mMDsL8d6KS3HJJiYN5dfzNR4UHmXdZdeUF6Z",
  "key11": "Pm9iojsQEhs5h5LHx5pySFUrBC9YKnW6He7H867gbV2p6wAcEGHaNJHnVFgRLqFbfxptfq9BzDon1qWbfiuBnjz",
  "key12": "4ioLJi399A4boNqAVu625PTA9BxLDDr3btCKQ7GS9HvdMaBrCjYYKBjBpygoftdv442N25CoHjZA5ji5YaRmHFth",
  "key13": "7WsZBef82v97SRKiAxPVYNfCVQyLfBA4XEmTDzJMG3GAqnAbtDgeMVFviuUXABZHhGH8rTuRviv9buLH8VFNZRD",
  "key14": "2it8AJRv9WAj2t9TYTzjZDyWFAbNGX9r7cxwh3r48iuURuzYGrwieMpNLP41NU8PtzakcHkDYmGWp8aGTaKBjydH",
  "key15": "358LnXXmWekh99oZUgRr2xLTyKPFDb7GYhvRuxJL8Le6hXkmLP1YPtnJcPy2uhERfkDzFiFVm4jsEhrX88fAZ7c4",
  "key16": "2KkKwEJX1XTB3uPn7XApy5aNycJcnReTJSW6EjF1gX5ctkjtx7CdP5v1QjZaZHQnPSxsa2MPcdJqYZrBBuBT71sa",
  "key17": "64kro78QQXfB7zxy9fHgrLHZMwdHU1S57xptfudV2cVb4uARLEYJWWBVzqhpHtqmidkNMynNCkEKN6CZUhrSRv8m",
  "key18": "3WjkR1ZisTiCMKajmjUmjTrkWDpzM19Hq99YCkwwHdRrYaEHffR6izKKbnBJC1gitsLL7V5FYkCMRDs59bMXiXuP",
  "key19": "8phRwn71dRJRhuTWyiZ6JFSxSQJzaBb5DkXoWePWUoMdH7qdcooTFSqZLxjVF1FPZW1xwUoxqP5UuSjiuBXyWP6",
  "key20": "4gWNai272MCMPr3yu8pipZovG5izedHmhsN7eF5vUuF9hbdiswr1dnKuZfuxg1ovxkJZWQZgVwfnNSTQGdVAP8wd",
  "key21": "5ntUmYyRVX6oqyCU7bh4JHp1neiWNNXVXmnrbHzUa2k6Q6EoKf1egb5VQBTaeAwXNx7PHyg84SFGtABisV1d56Rw",
  "key22": "4RaaLzNkTfpURmu1EZYp6aWG9mydsvo5LA6zoHtBMwEPVyPUGgB8NACPfEnuwt9De3k15QPcbvNJczxkxBem1NRP",
  "key23": "2CbwbY2giebzZ4M7wDtMaseMtFiPGGBrgHZgW69dj5yjb8sxFHo1ba9ggRkTwhq7ZCi9ZU8ubPAL8UhQVQxMea89",
  "key24": "4fxQHpjDATwsYbYXS671mWUZLcqkH9MkTL6g7ud3yqPyjKmtKQDNxQPkgjYr5zd9tFZpS2HjzKJSfyD55CJcuoUy",
  "key25": "5nSbZ6VSajpZMJYzVFnjBKKEPgqYSe57XU94yUZKVPMfEzAGRcc8FdfSUeXVkSf22uGVpzKAfPKypid7fXmNZdVn",
  "key26": "4i25f1fWxroLDo1J4tt34v3sTBjDUhLTBmbXqutP44QpwX4pXH58cXjVV813t8kajDpPKnPLXXjC4kXN4in81BXA",
  "key27": "3pgjokgm9WVAN775kRwVr7ri4a7FkXQxDaKQUJHofJeMtS2g9RHYa3MR4nPe7j2rJHFYnzGL4nqKxK9jhRF3jgLo",
  "key28": "3duCvDJBsTu2WM29yYoCaroeX2pjCWL1tXm81DDpMRdcY3gDx6kRyiT7PVPx7riGoMtXn9kuU3E9stcjXr19qN4V",
  "key29": "3hQwKguS3DceJufd4ikk9G2ZfcZKiCpwEXocL83bZ4zLUUEstD1YzP3vfSvrsF6oYZQZKWpAmZjRZZ85fpBP6sMj",
  "key30": "45qaMS3PAAZfvb6qJT8r3Dsqp48TLoddv4JVp6sroNTjC9X93iAwierpRQ9NFqCkU1whqosrXSJgwUq6oWAxVyrX",
  "key31": "3U6oZUEZSWNXjeaGFQrTvt89dHBMbo8QaGivBSq8JJQojtrnxiSXBDP3TnxVV33u1x1x5E3yVhGrhvctL2KCtWNj",
  "key32": "3AZfBTXF1yvkkGX1mCc8PDPmAHtNXkZmYwHx7mUhNwXf83mdNnJeYUJ7ppJa6r6ZPnBjuoyu6TaW4KDpatcDVPZX",
  "key33": "5AKs6UVHUGsdtDe2ZGcqG3eziY6oe3mQtyrXcyYXcoN62P9N43nesYA1iBZtMZf7FM4Ji9zTGMuvEWp6W8orCuQM",
  "key34": "2D37ZnpGnAZxB44wCxx38o1Y2CdbxbwamfRHMqv1kDgy2Umv7hv2bTM58iXBDFrKSgQnaJyqpUn51sKhaBhaUnmg",
  "key35": "4K8UK4W4rnYZvbUP6KZh4eU6QkuAdzjdfUux3yX8Uqh3kD1viVYDGtaLtNGgphcGfuacBGGF1yKzU51Ri8zcXGwW",
  "key36": "5XHSV4ZzMwaF21AndeyFGH3sM3aQA8ttRJgR5sq1CPpwHYjp4QRLUuj3ScWtZPg7uHQmmgkdpaGUrp5YEFzix8Fc",
  "key37": "35rLoCv9PeGACNqN3tp1RZWdk9Uquzun8DyyXFJDj6M5Ly4nfo2ho5tUKg18esayJXt2y2WKcfEfH9JKn8YyAdnj",
  "key38": "4Ywx1HTYf3Tt1jGkP4h48HL454Yot59oYvoERAvzuya1t6jj8voUS2tosqyj8hrMrtYH2wNoKJ5RBpfuUpqsQkga",
  "key39": "kx1i1dAmKCUiA2NJ3LcfJtjLfbptCzEtyNqmbXszLyM2vTY9msL1cLJRD3VihGm9UJtRjSLXxEP289YNaiZEMJ4",
  "key40": "5CstodPBeDPrdDUJMJpp5jwT3g4Wy1XhKdg1vhcZRbFpXgXQVPNRZKBzVTu6485Zagh9NgcVgrUk79Zxur6waqQd",
  "key41": "2csbauHs3RxwQqSsfY1jhsxGC2fSRTUkmQnb52ud6SKwR6G3NK5dLpZ5JcnDStLPknWaW5TVBQSPfLe4dEF7XTM7",
  "key42": "2TCWM3imntGUmXys4F9eu2i2XbQEXQ99NCvutTUzqegpUX42cJ8Y6K5m3KKQL3nL58sprxWWKSnTGTpzuyajxpUy",
  "key43": "3ikxTh1rs8D4iaAbnkNUZT4rpFZ7qFrdA6CDK8UN2EufubWWsM4VKb4pBL2b7JcJo8QQnizBf4dpsDSWtZ7aPXQM",
  "key44": "3JB8EfEDa73kQ4ge6Kyvr8nhpoRMchUBUJ5Ns1B6SbGn9STK25FaTFJiaX3rWP346C12GiQXfP9sciPcWfSkpj9H",
  "key45": "37gX7kKgRbMeecTLihKRmQ7UwUAbUansoxCtrCwt1VZPy6ch2s55Wu7kZD2NBUaTh7gLFzEgnUZSYF4heN3SybH3"
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
