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
    "C1iiRGNR888pN6dPSNaeH2naPmuhKNc6xvgbyBnASRwJHp19YSXAEsp3dzW7cVBWKRet27RL5pYNXg9fsg1WGJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52vhAHa6eTAbUXYTEX3iXo4PWWt6vrG4opS76C2PiWnSPRz9fjygosf5Dv6MMFxxhGF7QBZHChy9yrk3jHtuRnF8",
  "key1": "3zowmNqvFX7aMpmAWHoS1ChgGXTfGywDomztqjt6TEr1DEaQX6J3z5seBBquidQeY84QcXaJpZERQfF2KmkgLXD7",
  "key2": "3hV9HweigHCr4e5ypkFgNUeki9xwSqbFzaEAfve62Mn7944b1U3NEcPtY88wVZE3KwAVoFcQub3iD4WLgQdq2N6c",
  "key3": "3KbLZrzCLrdi3CSyyBd1aT7TubLYgcSKdnqnUnDJejftcG8B8tFhQ4z2fhBi6RqeV4TbPrfCHvmSk34y8uCjxjiA",
  "key4": "5VVLwZB7efMRVFDSWkgNGAPzXUDf4DthzV8Uq5QandYBTdkrhBfj7XcbfVX4w4JTZJ1pphL6A9NDpUnyjmaTYHzX",
  "key5": "2jesQd7Szm6RNEW7nMHLiqPg1RnKGbsdomCc5wRbQuLCwusUckomnuvbUvJdTpqurCfCT9YCpqKcTMLEUy4mpB6z",
  "key6": "WjvLjboZgjpaGnXByvVgTKmnZDgBr4xjn8G2XPvqHfjhfSaSFqtTrmd52zHgV3BiR6MHEkWHqattnavjEygEezH",
  "key7": "5MogZWVZU5wVQoQcZtzHcfBG85UCbkT75DHGsQv8vVpPwsnY5zHdmYM2MuhRDYmeXCtzhG4G21cTjTQRGiJi2fyS",
  "key8": "YJu1fdoLfy7G1962iqwGZbP8aZucwyJ5VAgz5rbN1HhanLTM4Eugr7BF6CxdjgeFZCE6k28XFLw7mv8J8vvJX36",
  "key9": "JBtaMzNZKRtXhqze5mhdeYERunwS85EZ9qz2gaGkzP6qEyMsfYcE7on5j2oHpRLtmimVj3LBPPu3e3dyn1CA3Yz",
  "key10": "5CTbdJnjXL7cHfA5iMZWjqqV6uDgAqZXuayibK1zZKcyhNLxLXWjrBaiFrmnNockwt8QxiGcU9QvypH8F22sGCqS",
  "key11": "4k3CYSc56nhWhUvYgVXhkNAVQfk5ELnbvvpdoRAHCKxsa3VbxMFtY2RhTTPByQFaey18H1Nhem57R1MFPEJyL2Mj",
  "key12": "5f3AqoNc3kKrhbYPrMzwwKAkBSjoy893DWyAFiZJbNhXmgFPXq5PwCRgdB8T4QVLng63uuzJbaaiXDzdi8rPuMx1",
  "key13": "3vHJGidBaLSC2JhLdPga9Jh4A4zsywkk7XrEccaKkmXTrdk4KrrU67G5CSwUN6cdbYenFR4bSfWuGis4BG7atyZ3",
  "key14": "421n5FwHAyFu9kPDZSqneoGfEHcwpbFJG7Ud5VTb7itc1NuNwYww8VgD9FVen6yeMEDsJpju7TSW9Lk5w5JqYXfJ",
  "key15": "4EyqnUQSp7HAD1PM5M9cM9YdL5c1zvBjVC6PiWkntnRN9ZUXi45EQhAPc5SHFKvWzHKd3EJp3qQRKB9dWkYL9UPY",
  "key16": "DxKgyxLvJtdWhsnXXgNTGU4Xaau2zhVif8Uac8VKGsAX2cMKXu8dk6CiijSUr4n38C3nSXuTZDkS4xjemQxpF3Z",
  "key17": "2t4Brv6GX5NoUeYpVmgzkFR44uEYkHJPd8wQKdRKDAfPLsLFM6yna2x6pjoZ9unzckkmjQvzioV49cBD5GYbB4AW",
  "key18": "4vM89X1iSeHSU9p8pVsZ6uKJAnTWuQKH9x9wdV8XsCvJF3j1RX8f7X7zwDKowLpNuEA3ZHNkSLc8hQ816SFKn4wu",
  "key19": "4EjMrpt7Mex5y21cCoeAnGvJzJoFn8xduBFta4HZbdrFJ32ko8nsaWGyc8DAx4VN3dV9guqogAobt43Hqrh8CTZn",
  "key20": "3KkWcXRvC4za4sRx61VhnFK2CSzM1Ud9z2aB948CZuYAbXMQ5tSvyRCPrW51Y1HtQkjDbAPvd9Fu14Cjz1SkwsRf",
  "key21": "2YKq3bh1yi1Ab1nYUESad49J3DGQdsCYV8bCDXstjip4EYEdw6TsDt78cWBnvzSMKvcZkkR8mHQgh1rZa9nABeud",
  "key22": "5sUg3D7oiS9QaJiVXbSbUUdWYnkuVmkBz1epBmwyRS9UWMbsqFmYQfC5VFedV6EmxyVDXTrRqdsTCL3x7TDqA9nz",
  "key23": "2VcN5vCPiaRW57e6nRiVtWuS9oWUAabN5thi9yNsDxTZxsiaG3VqNFxA7dTAuJ3jWdQizhnmBbA2PW21H98EGgmY",
  "key24": "46BDXHCouTZaWEQb5ccB3FfvqiT4jxAQ6q1Bt5RKifWAsSxqq6ejmqbuTC33zqkvisjVvJttCLBKihyTfhjsC6Gp",
  "key25": "5DyZadcVgnimxiKQdYeKYghfeQrRsC8Q2x4KrVGQsSiudLV7CDXxpfXfHPw9dQNxA1PhzuBdN4JwE9kYtS3w2Fdo",
  "key26": "5quW4dgsjDSmpyRq5EedaszFAn4dWf82R9nmbzSF9Z5qgbMbAnA4iHSoB7a4WEZvqZwuR3yP8qWgBwc1aJCpFNN5",
  "key27": "ABjuymJwL5x95bJXvG71hhttC4F7Ef3Kje2YzKvRdb376YLShJmX5nraZ3KCwstRQcLK5jVQBCKMoqYaqwrwo5T",
  "key28": "ZsSVd1pxz36BkgwQXDGFaf6YivF9mYuR48XvXKBusPqG4T7xoJHdV52V66caXqQ5U3tLmfgqHp9nQrhE9GNnxqL",
  "key29": "9PtJ3DqB2Egc5cvpj5TUnxwo1acbYMTaYMVc53UzADDj6PYRDNee17syciWR9HtnNGztXmaYkCgrirW94ziL5nW",
  "key30": "3FhNVf56kQCQrnXeDf23zKpJCVeV6mesXc3nASVhxco14JpVLwagFvkJnxcqbvLkm8n9ML2Yzq28zABzB2nX9Sas",
  "key31": "62muQMpK6o6U5oYDxyp45NkjHeUjAgrebYMUqJaQSxT93ZpFaNUJ8FMYu4BhMBUctXhWiat4Px8nsfA4z7zVya2t",
  "key32": "5amyrTGvaLyPDUeHtPZXk9KTd6hFBFbBQCZynixLsh6CCFBMdNPbvtiSLJiZBpeN44TmfZ2SZGT8L7dkUxj74pbE",
  "key33": "2QgAqgZAmuggAou8fCXSmHeKJaTijCTMHrtEx2Z3zeMuo2WD4t59SvLuRwBz7rXBb8YYQGy3cVbRUbT3JAvmkvgd",
  "key34": "5FsfneGkWuh5ZZrcHQWXjuSHmpkAAD1Wbr7TYnyJdRRAAP7WmNXLZRMNu6mYu6pjjDHsWgGERWg9Z3wgyyNTyfq8",
  "key35": "3rAdsjrL34xer8Gcaw4wTYo8fj95WXHSCwjmHN6NT2gisLfbh6fuAWFnNCLxEzRHFbeCiwj3ZnZjtpPVfKiqwc8y",
  "key36": "wxCsCguaQeyVtXv92CGYg5xjHHn3hBxn2Vp5Q5GTgFbSu1RNRMEix6ZgDT4YVzqHhex3P8nSDf6NkuYz7C7N2VW",
  "key37": "432gdri86RxoeNCGB32VeGuxJ2SBBrUGwCRSz3DKMKqCezFqqW34avJETJnzptxq3ga1EDv473WzwFvAJbYKRiF9",
  "key38": "4dwnNXbTja1UZyXscPVMR7MBZTMGgyCpA3AYz3BwK6wL2cDCBBBjS3iVB7dTGpG41hFMuEPvMqm57QhLQcrmovjo",
  "key39": "53DUcX1joVvSwfejfZgSB68hUhupyXGJsSmdv7WF1N3gbQfqvCC5f8HxP72x3JwWV9z7beLupNFupkpTKMci15Gm"
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
