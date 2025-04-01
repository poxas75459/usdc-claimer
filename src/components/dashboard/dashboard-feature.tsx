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
    "5cfTdNZyavvqCBJzfbmg6LN1zDyt6u8GxiSbjpMFAVe3fDiLedwiW6a9kkRAh1AyNiHxTGDUEo8W5AHo9dQ6eJfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yn1Cm2ahkJ6DvxpYfTHiVX4HTn7Yr5B9gZtEfnneFrxG5W2jdnPs8un6PdJ6xxGmrKmKaRVk4zdYsnnFUSFGi5P",
  "key1": "42wagRCyssuRe86gARziTY2XxvkSmNaFjpSAskz62Dv4afAm1NxJXQ9QHbKbA7zVzKj8obLbybjbHbtYUFsWFc3Y",
  "key2": "24GKZ9hyEeFq4HJsqWEyL9Y4X7ciuhrKGfANGfbgGRGgK25p1keXVo1BH9ArKNfzXKWBV7uutAJzJmJJP5P2q5dW",
  "key3": "4qa43FHGac1NEXKtpy8wKxaDqxA32pj8oYrxRBUNoNL5D3nGstHAC5zFr9xbYbAe8qMiRzUbW4YqSqD5auDF7EEz",
  "key4": "25XEqvHVcrQ73Zw3Bw4Suj5zvFLm5DN9pgeEjW6wTZj8LDvDJXWcdLW1D3ggPPj2NSraQXWV9zXuqnpTsi5vAJ63",
  "key5": "4djab3sWzwd9C7HV5C9WAxXmRr1pdZLCBhtusBjg7a12TdKnijMGj7wPRyqtUGCvJCHzNKzFWz5FWszg29NhUozs",
  "key6": "tDh3gd6aFTMLTQRBgEpjucW6BJ7XV9FA19KMmB74ujFPWC9pdvaaBdgHj8gS2qUXeHuM6pmQcEqAQayUpyv895U",
  "key7": "EKxYuYUkqK3TS96FtbUg9MpUGkUMAssinvTJ3W9DmUbxv9pwCLDKyZuR5qZovvjBZU9i2PLEn3iP9dsB5Xhmfuy",
  "key8": "22ouL7z75X9ELKT9mks35Lk8RnShp2n3L3WSxEeay1276soqvPosK938SWfXeBVSjC8zuhN7G8YpZPww21HBVb7u",
  "key9": "2YuXkVNRZTKrC5HC2j7GidWK3nxmzhyDChsQsgLJuyUm9cqqhV7AJwBJLNzBhZTCZbB6nf1hvYpbuHgqBLywhRL",
  "key10": "29n5hZC3pdt9uEqP1CYyCMn3S6A3XG5E25Rw4K9Pb3GsXDh8nDbrCZ6fbpTXpkGwLzH7xQzzXU6UTBXhpFHyfELx",
  "key11": "8DsGGNkcH7JxF81g89KN2r6egGa6DZtJLBpe8q4BuEkYoD2we5JKe3i4wc7MJyZ7Kdtt5yBVvWiSL6X9eGGpiet",
  "key12": "5afooLN3dhx2KxTjotZRFAKgrE69QpYCzBnEDWDgS4o7fyLGhBCQPJginwwpbV9u4VK4s8k45YWdTmKwNnaPa6Vh",
  "key13": "3SEPydgWE9uXigeVwf3TtagacyW4xBwSjwPgqpjKVyykjvBtjYAZP6aYngd8X5DWifQD1yzg38ommEXqRNLYrBot",
  "key14": "2irMwj9uGYJPjwYELtEEMak1XBi97g6E6X2TywMmQE1JdgbU17Has6KBSBZjVzdB3K68SGxMaPr1JZPRzxsurt2g",
  "key15": "2baHFq3wYdCvKodJSMA9kwKABiJGJJVELN7RcTFrkwjFGSkxuDPrcvBnZEs2rR73Rgb7Wjy51FhRTEkma21M2Qqc",
  "key16": "3owNytKtjyrww2W2aYmpQMe7KwmZKY57dDbtVCDsteFYgGetUW2XaoZSn2bkNwFig6nLtJmstQ16SZDg6E84ANTB",
  "key17": "3UyR4MkC1i45jPyHjuq5LcX3agsppQurwF5MDP3VoFwPKedNdZKjzFhAHke4XdeCFcjRFbCFchX5YrJwegGbAS4f",
  "key18": "5fnx67MjVSxKgHUp6PQkxvwvpAUAo1KKqqiP6yV2eS98s6hNEyQGmiPBZ2mXhBawaiih2DdxdRr4Kx65wdn1hDLC",
  "key19": "2y6cXFGnkgkQCJzuwT1pQK1kexDkG4fJNyQ1FDjWRpVLXiPGaprk4mKzQ1SRCtX9qdV64soKCvHVukUvSYGGS6rM",
  "key20": "5fPdeRqEcyDfBxJLWwGJVVGgjhdX2dMiHzmkYqhUSaFLyYND3vVd4QxQuJfVZQGvtyTcQUa4zM79QtgGHnxtk6BQ",
  "key21": "3FQ3QERscReoo1QPt9WSpSBeEjCWbPVCGe72wGhekrJ3EfiDDLS6JYAt8bWSxrhFCvHnvcro9HuqxyFqa7TECa6i",
  "key22": "63868V2nzGmkLymojH83pQJ62ZHhWzNo8LznfwCRsY9Gijm2KUXkhAqvH54ahkPhYnXWhwqmzZQgMcxozFAFwCL",
  "key23": "WNLrp6H73tgo5v9u1Ltfb8cTG6mVZwVDTTu1sjaTz9UJviDWokBwBLskXCVmZBPtTjmrbxJLUPPSGBAKxfkhX5U",
  "key24": "UUJdBNVXKRskXd7gNibM9CkVJUdu2zdpbbXRaRsXpSDSgmXkeiEe74wKfSXzqtWZQGuqt7DowLwBArdbY8vg1k1",
  "key25": "33788LY2ADtEysRoF7FPHGxwEiptofVrmwWs8WZVFWXp5EAptHw7ceRsaLLn5Y6fVYH5bVTtrywhfZ9LDKkpgPMP",
  "key26": "4xXYsZJoNQVbiaGsFywNXubeaZLozYFgVeDQD2xov2Pdithptsp1MZ8vgt5tf8UavVVkAp6k2ebMwSd3YCLH6429",
  "key27": "5QPvTCNYdKart2nd6iL7LjGFfS2tCNkBA81H57y8gWAhtimiPDBcVu6DgQpMD85a7VrKy1fEh6PC7xH3vJxWRYeZ",
  "key28": "2QDhmhNdTkQAZWrB8Tisy2r4AnNbXhPGEaMbhtYFaDrrYv3xB2J529VzM4dBobDAmBcvAgbpyPyfkiq3kbdmNYMx",
  "key29": "5xvcJfdmiUfcRZn8fQM1gz26UN8LdYhigFbTZEnEjSkudx9FLdrgugkeYbFN2cfBf2iAFwcZFHBeYzUbALtC45Lx",
  "key30": "5WmGWvQqBifxtLSG1aYxDVbY8mJgvNdbZmCVtq5M5rsLxSqHKE3wEXu1DFdjyEtCYk9XSzrZiBvJpbRcsvWbMToo",
  "key31": "3R8SgTr5ShHsDV135mWHd5HAoTwdJGZQF4iScoLYySgtMkXkngrsbLVtyxv5SCRr5FQmnHtqaQw1EJA6vRTr5HPQ",
  "key32": "2WsSFB4eJNLMcYdrTSFRoa4mZQqVkop4j7tBSs4iy2QkBckeYw92DCBhQEhJyRXRngtknNZQ9t1LCDz6sMJaVLXD",
  "key33": "3xnRNoUjQoKigtSAVQMmjcV2TSMNBh5RaeSX1bkUj2Zfq71DCbVsdks4iEYmbrv6J1zUjZjJZHQTWJYkxQBa1nj5",
  "key34": "38jQ6EWtNBj7zUG1QzLWpNWo2JPKWuYL9XToyWQCo9B1kKTJr7eJQ6cvWMP2SwVzcBBiLCnrsmiASRLpkda2EebH",
  "key35": "3L9rUHVxqUCEzjahBLgr61PE36eHxVUuPwLa2Mag2TL69TGx51ZxTVqzhzUbDjAYDpJ3sk62nLX5qDunmTapoa8p",
  "key36": "2AuHJxiXWGohVDkHSVtjeqwnP7mf62Qv815ZS27KD1xiPiw9w1StjWFqkdN4i8Nwy8456M5nP16Eg3RXqw3cYa7x",
  "key37": "5Ap2gMqm9CJfTdDEbXRGugt5F5spkh6uDW32XRmrXMbRaabpAt6aD8q1xFaMoibMFxFT9SWym4F3vf3G9ioi9jii",
  "key38": "5KdttbGEnEEyFwnpbYh4xze2FhsDxbTvHh58uDP6ECRTewrtDSautciAMzGQfHvb1RzBiCL8DyFySWyYm8zzA2ov",
  "key39": "5TDNyvJL3HskvLJcHnfUeEupfRxsjBEhJYPuoo9EUoRceiZqBJtE5wxT4MAYjPxke7sRALTwSAVF9nFUzTKhU8kU",
  "key40": "AJKhWGgZXJ7EngHK5hJRLZdtWG5gKdPxzg9EbmKfWmBX5b3esyXP8osCJ8DQkFmVD2bxKMsuDhqMyLiU2RnTin3",
  "key41": "2K2ocxsrMLYzAgVP1cunAxyeTg3CWukY12oWeZ6JPxGQRsakjFNANxB886RXHtkZ5cF8U5tZWNjgFQAvEewGVQAc"
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
