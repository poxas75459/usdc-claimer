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
    "BUkWArspyvhePnurvr7suEnGYGuAmKN1iXoDLMQMQuQcAKwm5v2Nu4TeENAm15V6KXbsuLx48gV8o8AmkmiMK9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aFsR1R5ywjKQi6ZKK3BSs4is7YwGwhB3NdTW2Yf5R2F8h2VrQizNaUugi3s6JKMEUFUcxUqEBDWW3xsEwzNbuEY",
  "key1": "2qayyQBgfAnds9enFJnTkgNdCZavwXnhfE9xZM94yWzWBiBzkd4hWLajo5LLFa4kxTBEtrhHh8YBKhT6kXmhALHx",
  "key2": "2cgSydAekTG3G9YbS62GzaRy13kgNYwrR1GJPyw5oeVubmguPWZzanuupFK6pCGughxGpsZD7dNLmADnE1hDZQps",
  "key3": "3Lvs9FvqAnHqrKUZQJu9xS5JUxHDAfrmy6txdgEsmi1dh2fUkFY6ZYFCG5GmBJBXfx7twG1x8ATmV8xBzW4TbQ2j",
  "key4": "2UgXoNQq5nGuSzsnNhWiasVmu7rd1C2xCiiiWKj8FKKRwDHzv7e88QgMTNzNzwqoTgdfcaMpHTJQF1TXEit4KJjG",
  "key5": "WcL36XJEGiyMjz6R72jYXs8ukYFwr2qqLCqBcbfsjvyeAAn8qC82nbzPqhV6Byr5raJb74ExtE6nhsmcB7CQMrC",
  "key6": "2b8PaRVmWHzy8hVfJfkfzxCXaqcefVzaigCQgQo3bi5Rc8UB23FWrumh7Nt7R25hdXiCPnqwxnmqvL4DfDnBAer6",
  "key7": "4Qt3YEiznG3P6RyKkhF33wC3jnvchwXKBjfwnTJ54dw59xM6MtSMfFDyRQHPc4dWcumkqenx437a7yvCB9nzvDx2",
  "key8": "q2kzDGaLEnWd1ZMSVL3Lo3Svv2hvrJ6Ma2L1a77747wcVmtEySDtJpbRJza719NixBQfTKxGho5pVAVHpSZGovk",
  "key9": "5Ud8rmy3MNJSpLnxnAyZYTm4uEUvdh62orwsrHRmofR1L1xQe1TeAaXsPbVi8Rf7tjn38NzvpVYhK16DWLGnsqPs",
  "key10": "5cST8TwZkvRy1hnMhq6fp6Vx3m2nxqgx4oor8oVa5dRfHk37E4YxHCr9FC8VT2toqAht635F7SAUsFFFXcoviNyg",
  "key11": "eS5pRTE7RKzn449z7kD1jj3rjK27dG3ucJqSx1S1He36EW1EKBE4qN3xkMr4KEzDFHpyWgmSrTww9VrG78JKkRo",
  "key12": "2cYU477nFsFw17gJDXFyRrJcbeNrodrzLm1Bpf39YfWG6HyNzYw2pKRUHZ1HVLMxnCeQJreszd7c1X6CoXa8SLMB",
  "key13": "5uWsfPw8xtPbuyKtmGHRfdYRwsRakgHSSJ41UQTbnb8ph3WBsbuKDm1vQ4sSqGYBezV9uLtY4XTv17pQAbFgHYgt",
  "key14": "2EH5LSqhzFHQEXLMivfXJX1rrcAYx8fD6wxFNjcE7YzRc3bcQAZSbFfmHvucnpsQYMY11iKJEKMZcVBRvAEM95Ur",
  "key15": "67gnT5wTTzn6sXdB1PcPJSicxc9yoDdgaRKaKvQTui1iWraLswusFPJTGgrw77Hhvme252415WrtmTYxEht1AFrF",
  "key16": "4HWsC2Svy5c6uxgw6t1ktgy7qR35f1mUfX3EYaEa8NwRkYqiMCZ2tgCixZpKWQafV6iHncZNsZf7KSmrUmEHYFtk",
  "key17": "5VdQ2QAaY2p3wDY8rVQGjpcftpETsUiRAxMhWeVQqF6CNNXBoE9cbRzCRTTJovFFyaLJmrPiR7tSjajf1QhGUfoz",
  "key18": "56ooGRt29ACC9GJ4EuxqkARnFxL3Mt9FU8PJ4ES3vomt3i7TWUhTuALc63szg2SssDb9eiALNJhHBQbeYAt2mupg",
  "key19": "Xr2di64ygoHBq3MPoaUoRKKo9KXi4SY5g95mEwJdTDBD4QUgqxA4pYiNDegkoJqDLJprW83Nydu7xwjUfCL3cvE",
  "key20": "2B1VTzHyWMrHruxg6G9CKabcnDHDq15ziDYABniMpYRyW3xcZkpPxaknxfjUosuCYeBoBf9oy9TJRtMuRSCp36zu",
  "key21": "qtyfAihgD1BJ9F9tYJoQX3a7APmkq6b5k28nLirRKPHKxt799s8zPDpRGaNKE6Y5TX2fFdYc4pJjASqnmfeQ1T8",
  "key22": "2i1SD2cJEZ23YTSQ5qgQPmSjjBatqr5wYXfpoDao2fTjAjQPzqdn4aXgXeWjHzA4TT9amifqPHQ135cFCE32LCDC",
  "key23": "5ghECVrEAZsJmh36KcskUv3JUHmsnjx7LBA6r9gEhQKzTmmeZEc1PB5tZsUUR7S6j9gyJYRUb1Q4dq9eM9DgdGYL",
  "key24": "3rJodiWJrB4rH6qHDtpJ5cXfrAGgJyuhRVYq4JoMnKSc32hCATt7dGehN3SX4wUGpBsdLpLcbfmuqze3KtkncTy9",
  "key25": "5N3JFExVohUpXaQjY74pyVRAx2Y6FDeyhNe64CZezswBhrE8ZoZGrTg4cFyU4sk2LqLTcgSFeWSkHAeGz9r4ZMa9",
  "key26": "4RFDh68p7krqhbGBDXqQoTbkAGWSeFJ5GRQKLiAGaYPzfbcRLZ2zQEQfd8vLhPJy8ujCxuG7EAP7mgVVQ7TC4HR1",
  "key27": "2E4z5mm4CYDqLZ7BbEHvh2BuJXb8gLBRmRNMEWeDrjRcr73UJNN8LmcSqcfPsmwzehrD4QBXXw73JEhxUXahMeoR",
  "key28": "3DpUYUfySsNj2FQbZXt8aedrPj8JhPxWgrYW3kmwqUFrSXZkJy54dQGWz8QiByETokHYpFqX8ywbihahxbiRwWNF",
  "key29": "5TP4MRzK51DGSVwGusA7Tute7jUKxgz3N8MHqFupMXjacYm1WSa1z777mLF2AxNZKCFGrM1qccbvWr1HcuPCSk27",
  "key30": "5orpDEpKaRMcroLmr7iLEgqTFdFPnUxjjHQ8pq3MPJtHEFQc5uEhJBKWUCX6vE6CtXfQUDiARWNPiGDp6EDrtj8Z",
  "key31": "3kQLiBuDnJe9HUjRCkumhcxryELBiEJW3WHFkwCHcBHFZSYHLPy1oVmDXXcDpkWJw8yQf5geyVT27KYgMyQAmJPa",
  "key32": "5pcX4rJKm2nNut6nwAemTorEELGKR7ZdWB7gtNMFSm8pvsAciq8t3UDN8vpinmEDQgDsAV7jSoctUWtVZ7tr2jTz",
  "key33": "5AinDGzMjsMNYjPBWY8MVEqGuUaaf7mfHmU7vt6Ypst1SXR8bkrKx1uJHZMZRcL8GTnG9MMNLXn4nsNqLAqpBkMu",
  "key34": "2u1yUBSaQoXxwruh2iEAbDGwuBJ7Ko285Nw9oZeVaR5UeszMjVtYUVdgDbUo2bwKYJQFUEY3iH7LaDya9kDTGgDe",
  "key35": "4YGpcm2YeUXqp8e3157ET6E3y6C39UYnWXemx6RJrepu9YNv6YhU1wFwi3dp6cPXrBXjoSHC1wPbPA23y4859Qi4",
  "key36": "2DBHU4vTG4GF6CZ5aouwUBbQFYgzjdWJMkGoeAT8GMJKEHBUDzR5w3fxUW481gSKBkJsvqKBYSd5W5VSfdVGAuxQ",
  "key37": "Vyu2ccMDkwM8jYq8fpC8AMkzphoWZVufQWAn5L9RZbzFgpuwRyFe4HKdQTA48LfzAdQibRWNbm75wPEGSCqje2G",
  "key38": "2k2tM5mQsRuLX9BkzVadDKRzVVrD3ixYDby1Fue631BkEHrktiHPK3buxWBXvnWjNkRJ3BybnN75ceFX4T9LGp88",
  "key39": "5jQxDYdxs3xwZCk3B9J9sdexM4yDUaBwfJ3WkJood3uRh6UgRJgy2VXhs9D5dXAP7BxhAdFvu48NLXxjR7GWH49Z",
  "key40": "5isfaiG4P8zEBgTqWBv4H1zoXuZpZcHgiPg5ddychv5U8KJpHry3KstqHGuxkymdUmUwyv6EcmGjp7GDS3rGuRKV",
  "key41": "5dMGZ9grcfuVGrYBVFy7fxw2AKT1fewRREpcPhGqBk6Wv6dieT1pCqj8cgPCKEQXn5QZKhPtv5VSD2EHzKiUUHYC"
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
