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
    "5j7sZz6TsSD8WNvWPQ7Jm32WYjxhmB9vqNxeegWRQ47911DUUbKBeb4SdygxYP3CTZHbgi2gMwF7uSAKTrBGCQWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2baeECqcrZxJAPdHQ1c5dVPRiuf7Ce9oB678BGUH35Z4Cb9jPRWenf9pt3piTVwddno8ogQ2ZQYADe377MPqrGDE",
  "key1": "4EMM6UpSwm7eKaNaqdcpaxfRnmhwXvE4kzhjV8xWm1PgYSZEXaYNwgKk4kTGDFpFmt2uCs3w4KJcFjCHt9C7s65r",
  "key2": "55FPVao8FTLW6eem7GRpocDoFz3AQEV3Pdgkz7t9S4Z4eWgZu4rNRuZaEPAyVn3vhBF9GpkYRm3hfj2jRynDU2p7",
  "key3": "2LHCUjVx7Ff5Ndiiga3kP7xz2NwbYNSeGG4fvJYnpJotZBnXfoJCEKXxYWv7MdgL341DBy2uS3sR6GZY3Cnomqsr",
  "key4": "2WyntZaHMtMRGq6FvoB1NRuVKQF5EPMzZMhQPM4dQuRcs82QJsSajmvTk9vW56VaAZd27xuJBhpuoAsvse3BaHbs",
  "key5": "2zYtea381XQYXrKm6P6pGpGt8sePtevARLoYMi39FQK3aBPhBFPpQKWM1p8M9Le3e9jgHQQyQspyqKkCDJf4JS9h",
  "key6": "2LHVwFYYj4AxzFGpWHKZruJ5kbpaJJpnLa82Ryj2MeRBM58TbE9fj9sifo2D91HGDpR2wLEHWu84ekGRijspSwqN",
  "key7": "2bSH2t4wyRkS5vDTiN2pJTnPiqY11L2ey2dk1hjFWQ7TupavaskruFZ5HBWjDu5GEpLW7yq5WWEWRTUkpF56tGr9",
  "key8": "2qk3K3AFL8Xp5Y4Z3uEQsiBq3V8UWNkqEVuQBG5D2f8kQTxttaGmuAbPaQoYQ3Zn3V4f22G1T73RRXkqPPtftbPJ",
  "key9": "3FrT98QqXabt6SqPjn3jzq4J9NDXQ2m6UpauwkGeQk26F6FZQYhoHELfhKAABNo5ijvBD9G7hwpdbRFRUJ11eFKQ",
  "key10": "3i1C9H5zMP7gPz4oMtFRHx5MLhMwNL2czWbzVaeKXfzo35Md4R2RFUSP4BCGRgNeYa4vo2PAbAa5pPSL6BWrv3w3",
  "key11": "54y6U5enkGiARDZsDxLriH91dkCVA5Cz2E2KRKyeqEdXwiw2t9NcFUmxez4JV4KGMRJpbaWnL79QTsc85ayCdJWS",
  "key12": "4nFbWcYquVZ7o6EvEpCN68mq2w1aSYjKp8zLNxMMUe62TFEs5ANzvSkiRTEiYYUfnnJqDfd1cijR2Ut8PC6Ng9h4",
  "key13": "5Dt1v2ZSeBe3WY6yTykgc3aSFPkeg8VcFpfMeLWjJaSGK4GoFmYzoFop2rxM7wns5KjyQ13SbdvmyXaKbz9x56T9",
  "key14": "sRAw1iG8exPcdDmJKYEXMvbsoxgrdBKKKgmkd5ykPo85DgJDEGYp5tZKnAh5M8ubxg76SDZoUEAzrW76rfCV2kR",
  "key15": "yfg6deXscTeCuxRpUXps5CXBmKcJxRSKeSeS4ZDBJFzCxR3nZqq3h9sa7m3xLsEoR2BPWpWD2cbkK8dhTps9ByV",
  "key16": "2CSHJPcc8MKvBvfuGKGbpFUfnXmvXnDuLrNhM22uRqzuqZvJbkDBUFtbah6PVpkLRY9bteK242bLJwWmVDw1uHXw",
  "key17": "5BMvAzW3MpWfsg1ntUdp9UXz5JqupGmnjg6z5W24PCCeAdMFMvtBSwNCtuLum2tTjHrQDH9jprZfvyK3Tpqzc76W",
  "key18": "4EA9bLgNfTkzLy2Sck3wZnwNYNFMkMEFsqtSMVyiuggaQJi1S84Rb7yc1pX5TNDM2n6F4qJkNk3WdCRrNQYSCXVU",
  "key19": "4vqZ5rv6WAMDuaQLtcDweSem8YW7pBf5cRvnofCwQz4gabUZiVqSUTy4yFxZNbiAyxPYtKkPdMbEWM9iCh2MoWES",
  "key20": "5bZeYGmhiPfohjJxhtDCNQbJKi81cJQ3iTAr8cZ7E8qMy4tCpV3reDaN35KSWTxmPkVpx2o9KEyjEFHC6dJiW1rB",
  "key21": "3yCkg5iDJXWeg9HbTNypg9w6Zkv21mwu5Nk1z1STcGZPuYt61qFzNRr5xXFytdbQx6MzajVGLZCwYg4uR5Tqzuc2",
  "key22": "XC8Gy2L3x4DdZ99cJHt6KZpe2PGaTBP3XMQfmXTCr3o2ZcReNnW1eMtKmu4pXo9BB1J7L7sqC1oAfjMT8cCSs1E",
  "key23": "54w5o3Ayt2o6fjmsuGKJXjiiDBuYr1Rjc9oGuCm2CyxhBxCJD77WNyJuBx3Thn9BbmkPZSKUMsaDzgmQinuk7u9V",
  "key24": "65msFWKNgE7LkUYmd5sAjFcxG5KMDNr6Pp1UiPdxdvBbbcZgPsxk3KhP5X5B3wf1yU2GeVGZ42xorGioAghM4mKk",
  "key25": "dJhvFkskwq7Zp3UW9yw9oKyvMqwiUhTwt5nHBCmLHdccjxwYKtJdk2AuHeSp7UKfiyW7ccUpivAQLN6auqjUnEe",
  "key26": "5SLJncJFVG2V7oiyxpRjPhk718siDr9yA3FhsuhKj1UjezHJfnhwkm6fSTFTnQBxDDsqB3BxPuh6N398wDrDKzKh",
  "key27": "5dKVTs5bTaVosWbEDqB4QmtWBX6pEXNVbMaGBbsRztHQU4emGc8Vo3NMAU73ChUrAaD5tbczQ3vcJeZDpf9TE32Q",
  "key28": "EWTnuSGqREUrPBxDtXWJuB1E4fTSTDNZyCoqMQXvW3yJ7h8unzm5kfdc9wdHX8EChki9UxEofr3eCWfvKFwDxyp",
  "key29": "42wNtxdj6tXCq3q5ULT6nZF8RTN4pFRc4RWRryUekkPeAqnkEqymETE56uAKcSwyLdBeQrFutg3KJCnggq9HudUG",
  "key30": "2KQTgRhRnLbr2wWoHrSYnnFSiyuuezmg1XNdBMCugMU8krvtJssgc24UMRarXwqFWagXnTq4ko9DjUxNXBg8BrF",
  "key31": "4MMG5JukdChA7aFJGDK938TdNE8cmKkQExoc7Ui88dA9CgKf2DtTXDwkQccUctDG3UhdL5zZQDsA8LevH1aidU4t",
  "key32": "5spmcLxuQAcU3N5uVJUZVP675Fq25wAGNxiybzwcbEZZExkpW22EDQYLLMRReQDWr1MQyhziunGjg9BBpAf7ixSW",
  "key33": "54aodw39hwxhqTz4tJPwKdjc7bccvSSZEBWZvm2teKFhLbcRhYmpNJmEwwc4rQrrCHQJ8TAGpXnyzShoj1YEUva",
  "key34": "4qQYPKjroUoHyc9mjczdhtJXaBL6QvAFdx7EABJXbAoLixJUKXSLrmAYVfLjuW4TAMH8VHJY41SFtYErtbN3sJL3",
  "key35": "4BgfYirn8wkf9GcPVEGYrfUCTXp3s5KLobKzZWkDUL3zF4YEm8K6qNEbAyfq9J2RjCThs6ZgfUBtThGWYcocF3Mo",
  "key36": "2vtVYSzimf9h3fcTgEWxtBb7544B9PMW9G3gBYqVGibJmmb5gdacqmNYo9hiS5Gg9nVUakS3Rr1mKZbCRUxcG4g6",
  "key37": "46sBhRL7z6Pa2NiDAHKbdufLYfGSv7y5K4uY3arqtw4rDVuvUsUJG9MS84RdJHNAiqFz7Tj7CX2QeTUgzhSAuekH",
  "key38": "2GRM6PdmmS6T54oK1tRECWza4Hgunp4a8dMgKNKJ317ikApEXZa61XxuFAWNPrAL8ibjwD9inodpL1d8ajy8PXHA",
  "key39": "43AG2aFadvRbSYXUoVvpHDb1N27Lc4PJUfeS7coZfG3NwqjBfAtcNDkJbAurSEFgFfo1FsDzisxPgfqywAGTER4",
  "key40": "26p9c6FwwZ578BEA8MDuT8vUrgZjTySTj9rcCHvKiSKDHf9eFXY1yxGAqX9vCfiWNqFyfSUJF1ij8emTtgAhtirm",
  "key41": "xSbZfVcWjaBMcuV3LViVV9cvodQia6drZDy7Uh8RwY4mqEqdaThp5eyLMZiVn7vDX22wkgWyuCshDkmJEHuqgqr",
  "key42": "2NYis97vfWTjjZ7WRrLUYvwZAHp3JRDeRwTktWdeJpPPxRGtgYpDBuRns5iteeSLFVcHi8K267rqWPjAqtzCcM5A",
  "key43": "5xeNPGaxefnxY4fsGXGVhoUX9WKmvyfTVeEtpD5zM5DSHp7KjHEjZ5ttw6xxNjihXYcrjaoeiBAAjZB3wnrywdWd",
  "key44": "5TN1XBhfHhC1LYybqoeWvn3ufWzNNkpgRUp2zkNkm7zdKRHhy11NsNUQGHJLJ6sVfbrx6Yz6Lgj6qdV3ZnFyDQnj"
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
