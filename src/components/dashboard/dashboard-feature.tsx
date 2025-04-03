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
    "4G4FGmB1RdVYuf2g5NtwjudzqFyXYro5atD3NP7wAgXXHLZuHhdmkFZaBM188wsDFFpxuYwpnCoWLNmdQjZKZLea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mU5kVqb5eAm5h56r3E3DSBkkYbMktpRui7djJ8wCF7rd96gMpq2gKKDp13qBZueqNEt38gvaZRJmtgi9v45Hozy",
  "key1": "ARtEnfSeBjXK9UDqhsMxfrKRzTxtkfXgF2PVk7waSPSThxogHmBGqYHzYGquRbFL3DxZSJenvmzQkH9sdEhoa8Q",
  "key2": "4TTt9fgw6exNWF6SxfJt9Mp5keqhs4WYqd9duTCYAHcwbbPLCEYs1dwAinWJTEZhXJSLZyYpGNxK16KYkVKeUCVw",
  "key3": "oLhEX35rYoAYdTKEGUS11DaiSTyizhAvqUPnoRMmwJJzvcFnizwNDxHMjoyy4NgehbneZx5kqH7rvriWKK38ECe",
  "key4": "9dANmfv7M9eV25BfKAMKLWcoCGffuRZXAaKJd7C37xbfsiFzY7HGkXK74M7o6gFD8C6QFT7CcK69NtXUzouvprM",
  "key5": "463YbkPAMYvt9nNowJ9WshXu7eiji7F6BL3PPNiaC1kpriC5hTTvQ1xLYj2aKrzjQKxzViNP2bhbec1bFqUC4c1g",
  "key6": "3p4VfDhUK54A49X4BZpwYC3sMSV7k5HLzCdMB8Lj8F1yDXTKzboUhN3GN42LX8SKyo6714JK4dcdUDttrbWtdgAP",
  "key7": "aMwri16uhmXshnWhAfoML5GP9ZLeevi11TQqeqrj5uKEyYM6C18pWV8rkure3NzfWypkVDLArYNYZ7QMq1U7h7M",
  "key8": "4oWLDaMNkGtyS1xTD5MepnTmnD7ANToGSvhHxk5UgncboKowFmMuWohbiBMiEtnUhn8gYx5EwE76cbYrvqqcpVeB",
  "key9": "oEap2oW4pB6KdAYuc2tcgwkAJHLPFndsiWDmgqVxKWoNoouXxLHvNq7fUjkDYqfvne9Sb3ENHLuafiJNsUDhKCb",
  "key10": "4WWJsHMwrvCNeNmFpGJYR2d2DgNerqn8RSLZeq2u5VutoaiLWQwLaCCpCDWcmKM7eqaPESNRqFFdsvfaMZy8R6EX",
  "key11": "VMw7ko2GXBUd9jXCq8vrDw1LE2EDsSoTvBGJRndFd5igajm6bVahQLMwWgRQuQG9EiGzCJWta2FeY1NvniSnHyh",
  "key12": "W1x8rwvBDR8AdVneTGVB2SveeDEHjbus5WgThCCSFLXw6Y8kTvwKN41HAFLHmo1Bk7EqdVvxeSa1oQTqqsdtdaH",
  "key13": "165Gs14rQoVnxXESrrwqNexHatUg3hnnczJTKxCiyEhL827cD4jhZ99w7mQ5E3PMNvPxHahhaRFaJop3bVkJNGQ",
  "key14": "3LwZ7VAcgHWcfTRWv6LP4EnpGy5suKatoV9jGmcYaS5Vwxg3tyhTedhwCSs21j8MMMBGKCRuuDRzJfLi7gTBNR3Q",
  "key15": "2Zd1gbtT9Ljk6jF6KtdrzvtYG9bkmB394Zi39cG8Nj4861SeyzJ8NfXsxp9TJw41HDwQkyAp4wVjzZwBuyBEjLLt",
  "key16": "5PZejBX9at4Muw2nfQCXQjGkUW9R9aSkG7eixs3u1qd8b1zmU8V1SHYB919w3rmaPuFxTRXEyJgTBg7NupYe987h",
  "key17": "3NV1BcqgVtcNBAan7FET9XtyxLGyCaxxPQwNhE8JJv8DA6Sb2Jre25YZ6dzZc3CepBCanzHyicesP5ohu4TBZHjS",
  "key18": "5a7vXGXwN2zo98crz5fRT7rdSJAK5MYGJj75TB2fTFiEWDUSHPa5d6i9b7CX9DrCmiRNrqJVSxzeGddLysFBaBG5",
  "key19": "Gu7eYCeewspGATBqpFCK7YPHyJaAdraJV4nF8JgCWmRzQCRpYh3PZBpFpeLi2c6E4gxNax4ptMaY2BmHK8e9Liv",
  "key20": "5oXj1r8ZJAeCi4yaYf1NFQW4JqNT9XmLrtcNjzEkKdEf4eTRRB8BPPxNr3qEwe5DMaZkESxQr9Y6dCjDTorDCp6o",
  "key21": "5ej67cLuEoyRWRLUe5eQrNhWKjS2C75bw5e3gEysRYaAtJhB3x4vFqYSDjeJhD5yTWYGWoyaSHiGhNAEmSevM6K1",
  "key22": "5yTwWe4YGFvShW81STK5Cgo8orHK8eoz27vuQUdPBjJ1MXWnRVyaFesZBoH7YDR82iWisT2VmYYd3LFNNwrd5DvG",
  "key23": "4jTdDN2JFGJH9WMZpyW3vMSeLkWvuhFD8bPfJFWBZEkuEmc4co4478xZtk6zhaJe3by9Kep7kc4Y64TXWdZeVC6P",
  "key24": "3zzRBhiCsgRrbiLbsE3m43ttETxMVKiJ3u4LYBnY4FbhXmgnZpFpku1cZAvwrjvgEn8wtKAdzQWfjbmQT9B3Kiz4",
  "key25": "3Kpe9Uh2S8DFXiQV9bi2fezfPeuiNzcvGzJauRWBL1k1JgMgNYP9ExDABzqkeGnEthhj1ntbmsSusRQqog4Qnx6u",
  "key26": "4YE5Dsj4Nk3tcfcEVJ3FGpsDuvMyUwLV6viYEVk6Mr89S81RYhirgDvYsiDSfzGzghpuNNskBJHeBceKZFnvud85",
  "key27": "4eCM19YTu6rA9ttGdaRn7NqDf2aa8BQr4QUUnrgH9ATg95rfnaS78exww5C5mqvsu6t7Nf6Ctw6EfnUWBTGQ4EDb",
  "key28": "5uUA5hTRny5SCYpCcAzc3624dDaHJCGoiEALBNChLvHR3zKused5csj3zS2BDDjWyF2Bsz2eB5bnn9m5GWvUG9Gt",
  "key29": "2kE5EkzaFUFeuHwkj5asvxSPt8NAZoXN9dfrcMZgDr6Ytm4En738BgRqV3okAcFQnkhtCPDbkso9pK8kzLfbwM8w",
  "key30": "5C11xbHVUnopyF6cvcg3upHG32bC5auc5o9gREQ4GYKFoCiT72ncNoE1fHvt8BBj7HqrUvPaj7NurNoS3vATsTxC",
  "key31": "XrZKVxUayVF155jQka6XNZXxCA5RE5ARfrYWxm1FTdaP1vEadyxfbdBy1T5AZuDwZczXKC19wf6VWan6KPsbmhx",
  "key32": "5MvatbWCoLYHK8A6nmxqSYyrh5YoaEfcxebnKDGCrpM2TvBJnvv8VBjD3Gmh1zHmHXeVGgzYXzxE2vEWcTX62yr2",
  "key33": "4eJRDHqzP9hDZwEYpCGyMNomNAPBfWnVsjpam5XiqNbwd6GvTurGuqb6iN8r2HYSsUDavhtzpPbbRUzvt2ucUF92",
  "key34": "2WyMxyoo5GK6hQ5hf9oiyn1cM3g3e13YVaYMgQEXuX1JF4oLozXHt99kfaDynsP4UaBEope2kDZkXiiJrwwjDgcE",
  "key35": "5Sd7pp8iMjHJGocgxzCtuYV5PUKcAZKfUC4mveb9kjBofey4do64XAbo8uj6iYdqasBZGaBDuES9rv6jQhRfK4D",
  "key36": "3VaHJicaAmbPdk8tdJCNmaxMnpaP58weNhUSBMU743FVaHZnS4hjdKEbogVAhU8bVYiWSesu5UwCvbqkRDAV59aw",
  "key37": "3w28YDUTuLXwT77AZEceZXVkDcRbC6w4xFzwCXwD1L1LypEYQrcvjqBD6rBGYptEiPTsLASYSH8CpAJK3RySUvZX",
  "key38": "45ysEGKP6ij3UWXLjPiCMQak8Er71c8W7SPZxTFqcmY2NvTp14axXe2oY5VnyD7tct9tUyBomjPEhpRwZT1YxSrG",
  "key39": "bfZimYvLvLYdeauDQ1ZEDLV4dubDhcGA2sJJTJ1rQ5u5VPTGD12wx4BzFdzekNGcjokYPb7CpNH6At9Kujq5CFu",
  "key40": "27pNKWM44mUSGJg2J1MAC8jgZix7d9HNYz4J7pZN2wPvGRWz9WGsnGB5aNzhvwniuUGFVPs277ZUe1P7QyR13oRV",
  "key41": "4vg7g3F6NMFSbkx9Hp8bdk84Fy2qkMpSdBo2iKB2uQXYSfVpVBQdhyz7GZynsxRmbXPrKEb7NesUC157Fjd53ng2",
  "key42": "Z5eQ45Zcev64FhRCiEwSjPGkmr8yUdjuyjMRLsaNs5ZxWzRGsmBRxbxfjyzEr4dMr73ukkLKovTRmSfmBPy4ZrR",
  "key43": "5VxnnVNxFEkM7ys1732rRFgnkiehSTNTUiN6ba2JuRFbKRabzjUDJRZ9cpnVHQGCJL2eZ3VT8hkApmfi1k6n3bhA",
  "key44": "4ZjbWbhCxDjVu7Hvr5wgrjWSFcyWJ1pLJ6mqXRLKGRjN4pkwy8GFVusQwFMjYbohyQrxhK1kQ243XvGozNrGz1FT"
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
