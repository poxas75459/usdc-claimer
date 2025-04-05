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
    "5i7sBRdZyc55zC6f2wWhPCdE7HSznoHaq5d98RAicD9ZWmGLDtkeGWzePYGLi12B9cTNTsvvVw8jRtyKFLqbkwyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yQWBbGCpkVDFUx128QxJuBy9AciWqGV2jm4vb7u96vaQdLqxEb15sioVCPAqSQt7xJbK5DP6NotijV4GmhsQ5g8",
  "key1": "3kz7ttAX26pZ45ZyPJPPGMmTDKN1M3RyrKVfXWtKSF2Fz2Cg3CPABqoDkJmyd8LbByVuXctonsojmB5EAMAmNVuP",
  "key2": "2r3k1ksUGQpxYRDX8m6uQjoWb3pKdx4HgZCbSWapmZhUB6A1HcbhxydTaFkNULjnzFHVkjsbaowYasXEHv31fdPK",
  "key3": "3D3yAoyhfhXbbtdfMMpK4B7wMGB7UCQRhuUnvHY4HHYhZKf1K7xjZxfmuBn6rWNCpwkMjRaq5jz3A3U8Mucb22s5",
  "key4": "5NidziVNMrdsxpEMgBgisXTuRVpy8wcPWLtEXhDBCcBdk4edhX6eDLgmsAy9mn6cG7wzXsUqYvuqvGvUSDYEtxWH",
  "key5": "22o8aSpZiMXeS9Xm3AW4BFu8H2y7iAFZzxkrLQMZbeKTbUm9JpHhTKXYnDrUHV6ZNrPDBrATaNiUyHVXB4Ypri1q",
  "key6": "5nGEyFQ4hYppztkRxqHPk3CTLAG1M9iyFDHqCoUoWqzJNEnnsNjroUwX9ANk9N8ZwexjHHmS9K7sDcu31wfBgyA9",
  "key7": "5amTxCRsdoqEd1T3pY4vD4n7rNgsGLPJttGUaDZ6XhQJ9duYfNYewrPM6EYMuNzJZ9kaM1x75vJbSXifXmPdcy5L",
  "key8": "5KR6xiGSEQXxZYR933soJFH9eaGfu9XkbjffJnq95Ure6BkGNtwJq8zg9MvqBQ6sEE5Ffa57ASm6kiwmq8wyVpoh",
  "key9": "5WSdwuw3cZ6qv57dvS5wmCWTZGZT36FGhC1cKRP9z46daLHgknYpPoaLHTc8f5rpFGNudPPvytAjpVCtsYYRDEdB",
  "key10": "3EpDyPP6bMYrrQN7V8uBguUKWsBqkiPdrDtsioy3282DKYuytGrvjdX52HWnAF3fDp8RX8ZhGswHpBKFisr8Lp8t",
  "key11": "57GL6rGmSq7ZPEbKsJukdkB8L76rpNkLYmKEpGBgweeAUEWyjjqE1W456HNhj2RRM4MmxAevHrkEATJ6GBG7BkTz",
  "key12": "zLXRFSVVqsMsT7z7F5gDqSwysraDj3YYWRSPpv1NBL6aja76E1EHfqzUAtnBg18nsCaDemmVQ3rxq3ZCmi2ne6t",
  "key13": "3tUB8m9KYaD1obYEYZpXyY6bkt3dkC7gEKDUkTq5uxDCLA8qFGP95AC8RURrRQ7u2t514kt85FQLB2UjBHYhFa3p",
  "key14": "3qso3Y4ay1AbHtBAH8Spvd6Vc3hBotLrFyMLUzBj3MRkhQW9UjacB8KCfACuotWy8ts3suFoXeVGUeLts6C3X914",
  "key15": "48YKfgEHnWdgaUXjBBoLkxmsiqw7MefCFwtPmr6XbQvx4Ds7To9ihuMqQ1SqNzxTg7Kytz9j8MPfoKyKUt95CabN",
  "key16": "sThQKTb3bUmhhofw8Kz2feoBsprHWzUBMtpGjDQnS7L4ic5hzcR9NGftjyQSSjLLzKR3R88HaG3jFwacbc7PHLq",
  "key17": "35YVtaZMn7RaN6CDFMs5vbBJWkdVmfhGbVVBm1FnKMra5jbxzw82D6vUfGCLiZ6cAnyHqGjFmoerP5VEybqWDAFT",
  "key18": "3BzMNApboyzFPXoM21uijfH8SrrvZNEiBXjAu1t88aV5RCFK1cgerVsqcKeugCmu5eRqm82zekGGz6TtmwcbB1sa",
  "key19": "4R48ZBUGN7Jsv3LgoZrDZek1tqhdmNDhbmrogtFAubR7UCzhobC6SqrqVnj5ShAabQZTurNV6kkNmdzddPZ5VaT6",
  "key20": "4ht5nCQwTG9G1mXNgvwAQwZbu2rXMkATzJfvfeQG8Wz6p4uz3YPstxMJ4f1oj1CbmNxwGntrcn33nSdAgm5pGXvW",
  "key21": "5KP9ND72rFw4p7P5Ur3zTbnkCcQJoyxu5Ya7aRMyPEGt87g2MwETFU1ebDn8quJ9ZTH3hhsJXD6LcCLiiH2zcoCs",
  "key22": "3T6jFAeNXAkm7oRe8KVpADawbYkotyWEAuFrLvTVKHXRKf6FWUFHwZw1SHiTc9h1ziWq51qneR7utFQLsLWwp1uJ",
  "key23": "28NtRhrDq6hvPKZUcm2YVB4shZdi1Hg1Ae8VBVLDHsAosg8x2EXmbbmpNUfERtrQjkd7sidQeneRGNEVxwcxRanU",
  "key24": "2j3XypyrcedTDbxFz4b6oJHMeg3psWVQRGC7fqLdXzL6XKiouqGemj2ovKvmiqUVro8fHb3SK1Ghi4BSTP32mFVM",
  "key25": "5uY3X84S51dEFePz9mXoUhhLkHyn1woLP3hDdczKN81JeNJQJdKUAkLzAPWZZuLUn6UkMn7PnE6pYCJAMV5ioG21",
  "key26": "5z1zBSCvqc3m2n1ZdWQsNzDHKAKhECa1JTzwmrii9CoXR9EhLKNaxWG2FkmJ1hDkW6ZBfj1DgZGxhUydhMMLLG4E",
  "key27": "3T2976bYXz6wYwyaF3z8w1ZdgpzGVFTcQUNJy2CSU5yS5XLTvp9AaftsrL9WfXLTcVbNuMkABpzQACjDuRghDA6j",
  "key28": "54HQ3aWmAVPSbutHf2Dbk45EzciGSsjvH254SrDWhAv8kmPnc8xRSpvyuMbCudQT6nRCqdytbSMPjwtHyD9mcwdT",
  "key29": "5dwe4TJ1uGgmLVXUy5ScQcfyKbhxB8BrzPAM6FJBcjFyWLpJNbChmaSsxem9GxXuVqAf1mpNqzSAh2YWArhfi1z9",
  "key30": "LDCrX43nesBsX2SLYXWW5WtzTqXhtfhW72WHTn1Z3sejVLS136TgJ3kTpoYfwxM2sgWx8qmDX1w5erj38Dwpka6",
  "key31": "4PkACU4rmo4rsLj1mauLQvDxstC51m9ndHCrLsDYFfXkXKzS9wRstHPZvyn7QtbzmaaoCx2FtWhvXLiztns6MeYw",
  "key32": "4cvSX5jtnRQN1iKTvtVjVqM1gwhAsRAi3o6H1QKSFpnHKqsH3GSgNGrPo5Gg3T1HmQFHVqGddGfXUNLPTo1xfqFG",
  "key33": "2kAbYgYyHsfo65zKFmLnbu41tK9pUGPAv26EQ4odARLMQxSYStzTKE8uKj3dxoxtRd9Ei2gJwxLYjj2Xvqb1Bz8i",
  "key34": "5kk4H6BUMmZSaU1ANzxfWCiq2LuAHE4PVAPMNMcqf5vtTCBAdy8xrbBwt4Hikp2wtujEZg7crPoZDBSZvxkCQsBi",
  "key35": "54rspStSuYYJ9kBRW2PH9ZeDzXWcVCEjPd84scCezoRzR5syN2TtAjgKegBcRAza4qd9SSNXMo4HRiwpq531PxtK",
  "key36": "6r3P4gnx6r17pZSbYPzyPPnKjHSLWtrSAyw8ijDLVAU7pdMzJWFodHyPZUyR8LMx7ojBzhXPhfARfxkxSeiddPv",
  "key37": "2FXCkjvGFFwkdvBCsJNaTzuZEHaizCwmVQhPfQ4DTiMEbej7aHsvu7knaZR9wWjRqgZEspaUeDH3nSmXdTiVc3db",
  "key38": "5SagxFgasZsutSZHCPVVnhkhaqumEAxTD4eDFe8rxGXBRYor5MXtFq7JeoUEzJFncnUcP2XDqe5iYd46r8X2MB8",
  "key39": "4cqTPWLv4KRBZiuRPdfHCMZxqpyrj872X5zoU7XP9Vc1R2XAC5MYJTCazCD4J4FNKA5A3KMfvesfsZwiLRsqBF8M",
  "key40": "63Hnx9gferXerELHzJAGPTQSSx85uZvLZ31ns2ZkMC9JuyQGc8bFzofwi1f4krJEEmVc3hzsxvAHqCTevGYDQPc5",
  "key41": "5sgPpMFHvDurzn2wwn1qVDwapubvCKPa31mLiL88N3thCtyrZd495e38g2odHHpAkmsmhxg2VrhDkX5tAvrwick7",
  "key42": "2eov3azPmNN1NtHeAndm3TbZYyrCuLA68aXEUo4ptf2Xji9SFs4sRJDaHeL8vqzLq75PLBmmKF4ytcNBTh8ADUqV",
  "key43": "5E3dLS9bA9aD6uuCjSAUkKQJVsMEgU9VwGtgZ9Pfw79xaSYkwdn53reSHsLCG9Xo6dhARGow6J9ttqRK5kFrwhDF",
  "key44": "4XEUBRgb38S755Kid1T6kWH4kLCXpPYHpqaX9AT7aNw28Cnqomtrmt7J3SBEtggbHQN8cB72w6BSCj14mq9Ee3yZ",
  "key45": "616iBzgYBzwNLhH8XSviqF6TyJ77kKRQnAePeysQNi8et3ETipvFF63VjkqP9REdxAG9pTsUzCUUk6mtVMG2wD7Z",
  "key46": "3ccZikcyVXi4kcHkLHjb3Xn991tkPCeQAFgvkv7JRisxEXCR3eHUUJjRy4V4ZbecM2SEnWjXiKRckSxuukiG4r8p",
  "key47": "4kMxaSAKKbiQLYMJuppMnFkP9kUUVU1GgDDxGcnBmJioHp2Fm2UjsTYrQMG6faSA1Sv4XomTjHJC5sX354otj1ED"
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
