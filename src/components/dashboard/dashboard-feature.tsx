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
    "3HyuSBLTiP1oAwnadhpwGReyKXRcja2KgTksZmUNXK5EpwKXz21tezDSKCMxnV7CyTzHUpnhkcpeRk9wYkhxGGuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35xSzq8ZzyNnQtxivP62x17ezSFqAjtNrG4rgk3wK9Y47BXgoCsxfhaqwmzkmJMZXWHH4MydJojh4ox4StxssGx6",
  "key1": "5Qt6j9nEAaWAM2J34aYoMLWiGqHhj5vncKnvDF8Pm2c9NwzFdxqJgHrmzmrSeSSfuQwGTi4eo5iVrxQsC97xrvdv",
  "key2": "3xP1Pd1R3NMfEvAs9ubrJJXZASkRnUwM61N8hL5b8NtDDiEWrrgDRUZLypHtaBoQLCut8mR3mogZ8STuRP5Myhss",
  "key3": "2m51XZ1WdjjkzmPQrX7S6vZRFt5mgubtW7GCtw9xfVkfmpPkremu5T6GMDTyggQQh6nJDtyNtCA3Tpq53dmGbi4p",
  "key4": "2TTmTmTdKEZZi1xprewsAd3yUdpt4KH4bvh8DhY8iLdh6sf1aVYRHY7QuDqtoK1trCLW76qFRxY6p1d1kLCFZuHK",
  "key5": "4FZmqKL5oWU63c4opc4cPkJoqYn4y4VrNs3gwop4Ddk6jsCfzzYLbxZbRNffeoCc8xHwsfnckwgGi2W9ZTfKzmW9",
  "key6": "2encSSYCcabfdi1AMreKNVEVmFc8R2XGVLYzY8RTWzxhWmr7ydKrYjh4K84nPusHTRx5igDXj89Z8N2BdmLWvd5d",
  "key7": "2jBG3bHXTg73G3jCiqC75DMcdqtf168VxSXabysYD1GkbcZjGUpwbKdU5kwhzZ91a6WEwMatYyxzkTbhi1V7xGrT",
  "key8": "53XRAqEzVFm8saZ1awGjpqceJ73wgPHg2362Xm1rfFybHR4d2Reowx17mjs7tGBkvGYoQ5c7eWfhF6a6B4ociC3x",
  "key9": "3k9sRV2pRqi8Lj14eYGfGF65aZ4diycDYQQDtykK6MvrxzzDbDG8dDh5kkNEEVhAcLbkeBi9WzuR2GUkHWLqhBmL",
  "key10": "5P1s32LSUi1oRHkndZb5BcYVdmNYpXRZMLPFWQ6iog1HeBuCxwYVUkZdxSifD9WrtWXZWMqVooKXUZMwrrFc7aJ2",
  "key11": "Ydi3QDshQBWJr1GfChEMVZEGWnZXQom9yCPAAGKxssPyQwn93y56mha1PkKzUtnCcNcSbYYasJcMRqmzP7x31A8",
  "key12": "5ySzzbm7xAgTMNc4CJ6VnR9PcssgL9WiB9qBs6n2SfMb7aZQB3vXShus1PAC18j6sdcXBoRkTEEBZun82TxKey3A",
  "key13": "NLjrCKLpcxrBRopwKNmWPdjAUPcoNUgo61kR5g3JFukiqA7aT745nueDSrebJbeqCDR7Frd1AikELkiCGnBQTS4",
  "key14": "2VbuC8KNc5kDhvtedQ8qqak918r8fwjsa1iuPVP44jYHC4Yv117fSXRR8GAFnDo4bYfMg9y2WJ7N3q7V4BBjXAML",
  "key15": "46GM2YiMZ8uQrAet1y26NoUEa9yDyuqh8HMtBYo2se5oX4czegWwnrWLSHQtrQQJYff8msmjGTcSWu1VNqC4oczi",
  "key16": "4YvB6xPBUNPDVcE5u7fcU2byhcPTBriSMHQf2kCn2ot3nBDAKA9Nnf95zEcdyBZSK59ApCeM881ieNid2ewvbJRA",
  "key17": "5zbtzV4bZRMA3wNswiodEMSQLj1n6xoabAmiib5ks7Xkcd7GW8feEdSS9iNMoRC352gyWzeEG2RNWkEVZot4cXQd",
  "key18": "22aPWBU6tvyLLg8fysxorn9RwiXDrbBFwW7jU8k3p7vnFjMQx35g8pU6ANGNEQKD6HopDVXXtSrN9tWFR9xS777P",
  "key19": "3SbD3Fsii6xfYyk5GNk1B2Qsqp1MdfmNvcjtnvpiyBcnK5gioWj4rSD61o5F6Chn82PHv8fo9XGhDxzxxCdhN7WZ",
  "key20": "3oV1tjHY9AL7r1FVBfpjCReJFJdsf1jpJDBydbm4WD5sNiRSNCmhbFKU2H5gNJvtsYG5A1uhshHY1UiFjBX4YpyQ",
  "key21": "5WpiW6rv4zcvKq9scz1SS396WtutWNFCo1rkzzaq3KMaiDNt9MCDAVxxYN8ni4PABBjiLJrykDTpJSS6dWyEyUZe",
  "key22": "4NzVgkDwwT1gi6fFU7D3xRLUDkoNUrJuFehNx9T293YoYdPsjNHRE6UEhJJ67cAUjEqJx8Ppn83wyacBumr8qu11",
  "key23": "zkWodmywnPRzJAjCwbokyCQJKnCwvs2oNtj2QuJeSGSoUfDf2YC9UdKTHyhQK1qLfN2qzSrK9rEVqQErqGY8zrB",
  "key24": "f39fd9dFULKAXNRwY8WB71eFjFJrpdQ6nUuRYJmAJU6aCQUbNTnAqn3VwyQvLTBoFCLJp2v5eN5TFWQ6cPK8bQG",
  "key25": "5THEjYTC8hm77CGoX5vPaGpVTGpRtXDdeUw7y31kMKqRrEZW9jFjxYTxaWundVstatgWAu4qVyu7ibD7T8dKxbDg",
  "key26": "CTg4D7M69k5AcmKrLrwF1xq9Vf9yndPGHMQerpFjwzV4hKPrJijGv1nC7G6Au2rKGN1MYTCUoC44M6ZncgDPL1a",
  "key27": "4iNhMZoLVyssxAvrWAyexEitdg282PaeFHgDbXEN2SjQMpt7M4h2TjrLrkswQaoJzwRSkeLT3uZitde3PbJRBuwk",
  "key28": "4B7fqaCCA1TSbfqDf4eta5Zoo3QWbaGzkFrCJB1B4qYTFgyNShLdbGKFCac7eV5cnZ92EQFqNnRmtHJRiix7Z8dv",
  "key29": "5MqpoAXttcDEEv359cGDeuc76t745bYjJRfGcwycwZq9vYR1Tj2aitCSBCpXayLvPAcGU9y19fziHTqUjmbaxoxW",
  "key30": "5LoDJKRah3sGZksSjoU6GLNb9s58quQeQ6njXLdPZPrgRtePZtK4v2PhjNJu2xGy9Bx619o4pnY3mMNS9mQVs63H",
  "key31": "63F5ah2g9v8mwvFur9osFWd6C55aDHKnDqq5Jy3V3qqKiiqgSB9GGqrL4pV9Lu5vZ38hMRhBVE8uU63JHY9qnr7u",
  "key32": "3ZDeDoyDhcMB3JdSP99i3fBPa6jDbJzVPyCiUQm1AQBNM7oGB4xVB6JsCvWRNtH45u9V1coJKH9Ac6KAd4d7JxVS",
  "key33": "5wpofLPfSKXBeR9RBJ8Kmp8xH8Xth2dXojmkjt4g1kn9DDEK82FnYbSN6C7LpZiuieDFMo5qxyFy6MRVZLz1xKMg",
  "key34": "3GqVey21d4pjMjwACxpXSbFvcdxX6ugTrhJHv3u77mptyS1HQWbqPFh3DW6fdhYWuWQD1g13cRRZWFXyZQtsKEhy",
  "key35": "4rpAfjoWJDtbiNJX9a195Uk7VTXibiDJweePihfMuwDvtG8LT32q5qvKdzWfYVmpnDUSjL929w3W1Zr8Ssb2f9S8",
  "key36": "58W97sshtvKHzqnLSLer9AvrdbTqgPYcopCy5MJpaCyRb4wyypBSQPAF6abEiStb4oQ22pxLst8n3127EPx2coUi",
  "key37": "5Gn2SrAWCCioFmXFjShJhnQRKwehoQ1Xha3fRT9PPBdcwFfAm4aSS6p11JQnmSS1zrfgXCQtQf4LfThA4KbAGY4Q",
  "key38": "4c3j6SnAwjFRKFzaZjCWgNNLCvxX4Th3PkaNktVEvZyYnWHQioG2MnNpDNjhJkAZ2BFtgBVyBGMZNK3QZhu2tYrN",
  "key39": "2xTZMUfHJdL8Mauu7iQw7jBvGGdA2SU5a5FpRoqujgCy2FF77yAA4FCEGYBuTpxBt1X9qaVfE4FZfT7yaYxj8Bu8",
  "key40": "387wJBrt8i3fZQJAdvtb52fS7AURQW7oiWdEerEHGyQakzRXiEAuZGjj67bRyQDojfWTCnJgqi987qETdqF5NLWz"
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
