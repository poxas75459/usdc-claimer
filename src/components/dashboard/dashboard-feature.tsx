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
    "C44yJHFrMaS1AxxN6tWeeajy31XcHzZW9XdD37Bdv6UX93aiB3uk9wM4zSGAWfE5qZPsysFPVfPppw9ay3y8A4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SvygvykZvUTxoDrwkoosv5J695EgZ5bSKJyucaTK1RymncgBPr3voPTzopDwGs8y8oz4FfgEj4dck2M4GZ6poSP",
  "key1": "2p3ZYPFAuGMKKsvSATYupFYnndFra8TG7MxP6XsGxdQCRWrZGJhgXV1SZBm5XjtzVBWo64S1mUtbr1mq3pvSYBtv",
  "key2": "3CkWsfdDcAvrMyF6mxxZHiKdy9GkMEsjKQ4UyuJy2RabdJfbyWiVFCd524Btdr2JbZqL61suNKpANQuyzQQ3pEqo",
  "key3": "3Ws5UMV2wNajTLRp8JnW9GPypneVkMPHjiU2yAv7i3nGpyV6uEZuanC757sLSC9gEYahZmy7CNDFCk1kHtAotSHp",
  "key4": "2pyv6PSWFbyHfEfh4b87kPzH5hPYkAnkJavwCCDbftdMovf2nXpsETKW8GpCDjMR4iXuYsXg8kSyFmknPesjBnZi",
  "key5": "3LeiajCmPszAsgrmEobvLCiWSkJ8mAvnDbsohGTmCYRkLPKEoybrEZh9fjYuPDLR4W9aPHvUx4GRgWqqbTCGtjFt",
  "key6": "2AiJ8zFEPmFczDmnujMHYaKAgxyXEggZF5YdoD5cn4PpLbdqtAFew8LHXmUfTq4pKEF2nkPvPJEPHi5Rbw44pbok",
  "key7": "28YvTEJWsLVp3w2D68obmnyaUz38STiLPPanzTR4bVbvoG1YRwi9pA31hEmr8AnKsSHEyq7RgnHkALncCWCtA7Ej",
  "key8": "55eVaJCPZu3mwQYDiRcoyery11EJwjz1SdXnZdztRrCNYVqS8Ne9uZSpv9i22LwSiXcC5CKLjstSf2Qn47R6dD8J",
  "key9": "awhu8ndEsBCksiASPxQFTkXXRvpkRneJB4uNbENMx7vC3rXYquT6oDfZe6eM7aCPJedowZq9ezEviTYHrnUUC57",
  "key10": "PCSkrroEAkhLPcAU5PqXHj6aZPuoPTWc3jCgESrTSafqHAVzTHhQsLv7J7Cr6vUUSPP5AD4LU5eTXr6HP1VHYtS",
  "key11": "29c8Yx826qKLaQE6viPX4KJgg9nuMuKLSU6AeANULhPKEcFpTa4CTXHJCVwzYf9j7TQSmpLfHjxturi9YE5N8UNJ",
  "key12": "81w8PCEZVSwC83TGgjXp1DFxmvM9UwoGN9q8798bug6mm1KN7NCuypyXSefHSPAas5Bo9XLKk5TPF2BGBRtGjvC",
  "key13": "2RcjZ3VCacsgvPWUKkXXDF3iFrSSNf2Qy5StCCFu1Zp16SvpJ4dRLYxURaNZDG1zet1PizkyRQasonMpqkh9uRbm",
  "key14": "2ZRYMT9QTjfRY24jEjqshL4oGTBSFkDbfXu94pTFmHx7MrwP8H8Sh5MH4ZXhZZz1LHsKRSa2VabW523NfwZgdgij",
  "key15": "514qNM2JvaaSASwoebLD4njTRzDC6GGW85w6kMAgx2Gxy6RQ7kU5gYi34YbXR5wnvVUom1ngWdmSnR6wm7zbHgoz",
  "key16": "4BxZshcqe9sPaEEieTuf7SyxtwMitKD1ethAm9B8sADGHgihK3BU1y9jhy9GwNj63W3HjZoDXxtiyAdzQVDjqPR4",
  "key17": "2Q41Y8GQYeye5cFWV8EJ9pj1p54hRydB2Kupyt1DCWEgKj5XhxTdc28y2SJdxb9BPRK7kp5NhjtRT9WfcL5kcgD2",
  "key18": "5wEqgJoyUQUKYCsmA61BmEEBzLE4MxkaSBfEBip2JQ3gtWxiz5mH7srXMAvybKkMk5SciRp8yJ2kVehRiteCFxrB",
  "key19": "oo4nvWNNqwE6dZmnVp4c7X22DYCKXHcokYxX8YTSKkAWzab9UBCyax8SA5c2W3VzXFzFQGfw9f4WFUNYebwzDr4",
  "key20": "5AfBYZ3Hxrrv94SLGMsc2CnbzGrcJ42PLPNP6Me85M1j6rzz383YLmBe9uFtqHwtd4eMzqgJvN44MfJrjZUmXvVw",
  "key21": "2V3XdYNS2moqemub3LpHcnAqwYALtYX2hgoC5TXUphcDTcDq6om75WE75CDsfG569DGacsN6BBanBkdXGVtbuYf9",
  "key22": "3e6o2HwnvxVgxVXTQVxRUHvKnnr9HpwQXdit8GJwVAHHCzQXx8xfBDa3zNVtW4M62VPGdsSrV4yMtnrMaKoFqYLw",
  "key23": "2S4g7tu8uRAixTZbqANKuZ56xvLBRabYPshT4BbV62VSpNR2X7dTxgi2MnshQV2JQDRggBjMWjA7YEoNvR4HaZUv",
  "key24": "2RE1CkZ2zDVBYBss6cfnxqH1PMqSy2EPCkNDdq1c7emiGV4PCQeDs949WqiCE4J9xLvFEqPRccxKG4Ka3DSZHurX",
  "key25": "2HH2QY4kGgHvR47eKHiHuUwkP357ad5t1z5wjTDfss7w2QhKtWKz4QWfq4jRKApnajrAkQkvke59gUxq2V5swJN7",
  "key26": "2QzpAK8yQTaZmQze4gAy5Kyr6CUg46Z6sZuwYYn7H6BfodgAQqeSZweKaeTGegv6VBtcvghcnpRSUwG9orqsHUT3",
  "key27": "4qQzPXSuxDdnqit64hwkKU9RHdySqHHV4RrdgqTD2iDMHadyDjKPWfy1F9afXPV5G9Z4buuA4dakzR8x9vFitq8",
  "key28": "5GgudjSMSMP97iUTbBHjWrbZTBmxCvgMmAf6Rdc7CeJrzuXUpYS3tGeSfzCgb1nFfAXr3R88exhpQxX8h1UWgYP",
  "key29": "4QjRoHNHT6t9ucX9RC1thnu4evqz7VNY8d2fwjRgBkV4aBxnAayV2AvuG4XMZ1GszBwZjDJxniKyj3DYvKjm43RH",
  "key30": "2UUinpMTYLd5Um941i8a5fuvjdakfGS37Kg1JXkbHKDsrT4n2rDvBz7wARH82iHa4LhdtAS9KMWt9Q1L2MpUJHSC",
  "key31": "4gAhNfgBhtkcNJcJWAGz2Ea7rhxFWrKxcRJLf3ZMcUtUMX4v8rYZbeJeLiznXiWTYDGH6LpExVemvMgBAvtGwnjV",
  "key32": "2V4fuM7iVGY3vz9AYiww2ozdt8dB7hZjKifJBRsC4UBDvJqxfAJa7LSNPZVAwBeTgdt4mGJgEYk2ajdCK6ofFbGe",
  "key33": "4yytNemhV8UXPBfRktd1aDk7ZhzPsQrCcwZxsY1g2guofp96i9XWCWyXmg2Bnv7fpJZbR7UQcpa6KAjV1P7PMM2P",
  "key34": "4EcSwdQSuBnUNYvWnTgWdVFbz136aY34JjYZD4GV43GvDusiVL9CZby2gshyFPkF7NfEszqunEMk5BSAcBkVFyjs",
  "key35": "64RGBj3PeLmnGyRegimKBFH3dxoZcjVLdjj1SnD1jvjndjJVHkuaJg77rKmw1BazdSaYRoip2uY7CYwwDk3z6jhe",
  "key36": "4jwWY2CFsHv161SiF11FM2jv537C8BnwhvCuQn1dhBTZ42ufn3PGHPsqi7LVSVbZpH9x6G1CZS3KLP7skh5v5mbo",
  "key37": "5EJWu1toDaCe9TZM3AydnXqNQaN9JwKWemNrg7DwHgCPfeWuy3nYd2J9prSgXpNDuNtedEg7JkDxxyYUxEmJN2Rc",
  "key38": "3NEa7oZY1MGMuTdDVfrTrbKAhj4qiAxk1ZXqLeCgC5g8ZPH8nkw4Bp5SVNAKg35kj88vhMcZ3HYzsoeNKmrFPNA9",
  "key39": "4ayFF6tHKXJKD3nBo66PerDJV1VaQQiUR4Y4nBASic74dv6wfbYgAU1uuCVnG2kesNCLXm2hQA6Bb5PGS1nCERd7",
  "key40": "2P4sZYfZjiJtujY2T4YjnqpXjxDaCToKNeiJ8LDA9aQCVSbqWYsBcvhUZ7KrugEa24BK5sCrtsn4cMeSeoU2hJEF",
  "key41": "4CV9wTa6d4RWmpZBgQUbc5mHLVXw1p2iBLmtsMa6v9aNMp4YkJUQuDByo2ox5RvK2oAmZmSWTzBtqX6TXvRAz6D",
  "key42": "2GRHDyRadvsHu83eTTeoDr96VwscFbXqs4aLT3EvcT3h3t4PMQBdEtperUAi4PmKrQ9Zwn2uKgPnmeJP5aXooqWK"
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
