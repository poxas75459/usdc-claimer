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
    "4bR8nEvP4zMcLUmtyRiwfmpTrwDNNRY1ukLBZpaMLwpCRptMNQ5CHVaUsubnfebkq3PGhjQithbVBwFAQ9qgAgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LZBbmKMtyaezsd8VJA5JUdLdFMoJXfWJpZgkT4uetXnkJEEYgnehPwytWTVEsdWzuivvGvAQ7ckHM7TVnr8ATRb",
  "key1": "3Y9VMZoDpcyxjFpRLeRp2vqd7mgWRL1pw6qufnmCq9imMbAmcKNaBKVsMny5aBfehVtjRAM6mT25qxEDca3mbMDd",
  "key2": "4rxGtEkfgozJ6cigUkv1dYyxstNRXNeAYMvcfPGMigN8tzDjKbLkG6XSxcxvPcmgk7fVqis82qx55akXrNeQakJF",
  "key3": "3BoxxLx9mzEza61nxJ7EJq17f9NdeX27dNmGX5BQCgYDk5WYY2rZPXF3bT1oBGf5yyxrt2yVUXR3cZQ81wb27DaC",
  "key4": "3DLi2JHaKxPqMuyTsA8rk91Pug7arUBSzEa1B44gBFUijCFgPr9Zz29xNk54oX4mVqK5fVp99wYRqcDuWCWJPWvY",
  "key5": "iHQQ2mA7ygJnfMcPdLyWG8gZBgZGmKctYh6sPLgyaB2omGuGadB7QEngA6jCa9v18vkhFHEygVU9CLW7UeoUvzy",
  "key6": "YTi435qfHFe1hBD4FR9LhByBCPAJ1HQ6tzThViSngKLDQH3rJUDaAHyi2NJnSnGLpP27vw5k4MtjNqtL6ELhhmk",
  "key7": "4aKfsENaD62xEdwvgsjKiE1kgictaiipMxqzB7jy5aGoAhj86McviMaWubC8mXryQbyv6auMFMApt7Az1bNYR9hw",
  "key8": "3p5UJRWarHeUJVERfKsbCqWWTKAuq4hP6XkERi1Tp5bj9R6xBGrRVPqGEs6JGFwipCrH5FhgXHCJyonKUQWoTb8J",
  "key9": "5vj6JgsXuneoohC2twmTS5xzXVtH2sRYKWLBU4KeoFGK2VZUMfyyCHWq4ufAr5wevkhwodKwSnMsUmraTBgbFrSj",
  "key10": "3VJaY14mvUwnJt7MfzSYA6VaWhMx6Zdc8q6PsQ81SH7u5M29VXuBKKaGegUMX4E3gQ971RyVv44iSPedE97BZZ3W",
  "key11": "4w8zQfj1GQLRGwfKD2sT2CvpiqBsj3hFipSfmaJ7Xg7dGAMMPPB7DTZK33FutfiqMscciQqbR6C6ByGrBJP88pFy",
  "key12": "4PkuRbu3ng1e4myBXV3UH1fvevMCmdyqwBuoTaVAUqTqivpJ2BZHdXuswTNtkr8CEBRfDP64RzC6A3wtTBubEeWj",
  "key13": "4EhVbaPhJT5CqWgjvxnkK698uXjsF1VaCcYJYPqUrmiR2kC5NUfCw4k6gKuCLxSwBPgjkyvQ4bRJVYxw7bd3y9Tg",
  "key14": "3HPzg3tkjaAZFwSDbgE9nhzkqnC8z3m5Mn1aruwaqyqoah5UNHuTBu4poA1FFKop2cca1vV9LL9imtM3hjgy4pa6",
  "key15": "5xBiS6Q6REN8opx7cW1TMXpRd5kUPK6fsGfsCa3TzXWhnJZ2HV4ZvPnwDEnNrwPnzZanHQZrcgysEd7eae8NiGrJ",
  "key16": "4Gpf7W8JRZvuSMQ6zc1w91r1997pL4Ch2HsXvWNvs8wh4wSuRpe7nDmYgHtR1CUEMV9FHJNsA9UfWd4aQTjDB3Cx",
  "key17": "54w96vbyVui2Z48ixrS2oBArJYPViVS6cW2oz79ssSxYMfmi86EJ17aAn8ThLdHNQ6SYDbUnPoXbHC7ap9XCNsRT",
  "key18": "29jAQokXxPW6C3NHkoyeSZYuMJGxBnWh5tT7zZJaEKqVawpgRACSz8Fj2bV8wZd8jGQTZse9TWJBm4Euy2VeQfVQ",
  "key19": "nFbvNmUxVxxNvmUqHoNfNAirM8eVUKeDMpBU4gdTqpvHaYq9ugKX3SacZ4PDXqvCCk1YM72uPfPWiy1N1VkqhDd",
  "key20": "3xQ69oVPkevnmmhvMAifFkZp2oPZ51WfsSY3R3wCW8H6LCJk2NsXiNsV5AK8Z5BzUTt6gFwDgKQdjCqBJNPiY5ww",
  "key21": "2TG3DkPjxu1DHJjPC89pEa6mH7nXYgQsW4CC3zLqnT8jqcHdcgo5UCgGnyL9PCX4mPfVVa5CPN9zr56ZDqZ6mpnx",
  "key22": "APkKiTTu5KNnEsGWVKr7jDE4nfervtv5uHnFvcABFXVt8GueyaMqFsKoEKnn8DAN8p5cBNZT9obntxE6ixZfuLu",
  "key23": "23u4kNXyQFfvGJG8TF6cVw7K8LvqajSRw7ViW8iCmEEiNWubVQgtXovJdqy83Sh1SPC5GRaTDZWN3KWcEVuoUXHN",
  "key24": "VZeTZUgDf1qwgqJu8UBfs8XryJrDwxHAAd3XFB536kqFeTfrK3SEfzvc3TeekDYRoS669UaDAMy1ybpcwqiqFSt",
  "key25": "3zDrfSa8gyAF85a55Vk7JQnaFgBz67jnD1DDAA9hu6GL1CgYc7cN2LNvaULMTYjG6nCV6pjfHKwmdPkJ4KDHLyor",
  "key26": "54tNLarR8TJo35fjsGF5on18m77sMeVhcSXsW7fJUGsv3PbjFc2pM6wDTKd2zQTKxTxZ7SxGfEgTp28AKYybYMda",
  "key27": "4hftG8Ebf6E2ATyNxHvqoRA4GixsKFtoxPw2CZ8fPHYF5CNFwvspMCYns6ZXm5A6jiskhnryTe6uxD7tknszF26q",
  "key28": "3zvMSX8dwYdYej8wnJHzUJBkWUZ5RyYD59xdFtGvEhQpk8emXiDhHx3NFCUKJ2dz7y2gFHgs2w7s4ZEKPXq5Uimc",
  "key29": "WwZ5ndJBcqcbFiHQu9b5TaFmTifceLazfjRnGdeJwRDkVmpdkMhaDLDPVuGrcd13LTaFTXjUixGDLDTxAqbostv",
  "key30": "3wXGgA3x35E8Z9xZzng9Xm3D5TeeM6TUCGxviaLNpXK8jHoo9dLH4NaGGQfPSvFFFdgGxYXJFAXn6vz6QkmcY65o"
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
