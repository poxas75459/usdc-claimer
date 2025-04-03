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
    "4p18mBXhC4Gn6Jf3uK2uVQLa4ownfw2T6cRm2QNaJQun6JnWec2caV8nMBYw8L4ngHkuJWdUmE3rYgm1DZVxbiUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aDJEWEJLqHC3ZKDjmSw3tubcV6Zy3PgyjreCb1afLuaJ7NXEAfzvayGZmERpVHAapvELpnyFXXgJxaca1njDG3g",
  "key1": "5qXgtYYQL5YGYQt24q3BAPZDLoECRYw9NbkRXh3tBrsAgCFQmyHopdwuog1ErvD2kskq1VKwkBjvV8v9WMqJAZDT",
  "key2": "emPAF8bcWaMEMEz99vfgRJetBG5vJpqHwKGHC6bPAMNQy6Ragq7gUgettAiGo7f5YDBaqZqcbAFSW7S8b3adBLD",
  "key3": "5JsQZ68EnrG6AwjoMQwZ8xjbEueJuBEuYUhyJGY47BXh68dypSE2Lu58Z6htRd8mRb9YDN9dvmCkfikUNzDJGwqP",
  "key4": "48mVGpn51etfkNfAhj8T8HPkxaygt3qaNEqeBcS5d4Pimp3n5m6i9R1AzQVDDkLoxTeyhZZrvwwySXoPnpMEQD2w",
  "key5": "3MdzPJjBWkRhRH5RJpKeSZ33H7J1nQLxJYBZBjuZWZ1K1bfnBBqRmvaJzq3xV5TuzveKKbn5AggtQMmedsQyfj1v",
  "key6": "gNQWfWK7NSb89fDopi5Qu8k1ovXLdfuQshWuDxND8WGLhfmqDcFPoEk2auaP3XmJoAcvDUJocuohtc4nHMBzFZB",
  "key7": "3zDAyAyfsMi7FLTN49SFiwf5nbstGo45MNv2hzEzi5Kwwiur8qkFgSEyrUcrrkfCP9cgbt6zpjXATEUz2GqAHSUE",
  "key8": "2a7QSHka5eDKebHzdKCLLcbrqoFeEpDdoMUPcdRdx3EuFZuhzA4E3peJcPWEgSaeQZgzJTSHDWyyfoFuJEhGGS17",
  "key9": "4s9E2K4A1NxaUt3nrTFJ4mrBSpBdHGhoBZWjkR5kmbSxGjeyaXSk3UAgLaPa8wW5ScaLdMqVkSvPmN4iX4LFC1xk",
  "key10": "4PKfVCPgtUhDgQLLzBtNQu94NtvaXez42HwQjbtAaNtB9ZAFCG5VKiwapsckoaWvB8PRYFDaKpNjroND2zx2G9Tu",
  "key11": "3GwcBLRRfWvmE56PR1fZDgZJM9DPEBa2VJ7Bs4gu1SwfPhbrB7CRY1baUrQFAT6HEN5d3hSpCftyzKLVUYHX6pny",
  "key12": "38b5PwAZSBE46shfrk76nsSnWdAZsULp8VjdvVyToFkE6fp5BEfaN5kUmijRmBe6mRCc4h6LD3pqgxUHgkJ3PnCW",
  "key13": "5fuKGFK1aSkLGhrfM8zEvrgm2UyDtStx92U9RuBpwtX3sRVgo3sBu5kRfoAFoQFGxaY38caSts9Y7R1UghBJtrCS",
  "key14": "5WJLuM92MEE7Jc1BHF64FcEPxVvNgQszp8evHgZD3bFPWpndx7upFSjNQegJLky1CVYXMnmASs1hck5WNWodGGmf",
  "key15": "5pHVRsd9ER1kjbGM9zNuxxvtAZNDh91EK7MMY6iSeb5TMXJQvQ3UzYFVnfaoChkJy8yhCJqyyUUno5gTpSBnLcC9",
  "key16": "59bNSfNKGo7m79YnEKWm3nod21G7SPzgmDjkCX1fyWpTy7aHGYndZj5PV6hQR43vVeyF8JPDK7PVGEs7yW5boxnV",
  "key17": "3SbeQ2fNyAhHPHttcPvmDm1djWHD4DgNsHqz2zmenYHDpqguD4wMxSzm8yzFByyoJVccPduT2K9zfSZFutH8LfbM",
  "key18": "2cDhj97LRyHGuGKYNwc7UV8Lzk2NVNxnSTBGEZwXzyp8sNvkkM7MtDzR7ujdMV2wucCNLzJUWJWnVqvzBJybeydY",
  "key19": "3piSfEKrEj2DWQeX2NXht4qYE9Xjjf2VnnuoRaBCcHX7pwMyUtnpWCjW6Sxd1nkKE4doEvRysHkpJS2Sz7RCmnKJ",
  "key20": "2idzLg3JJorFXiSvoh4XpSSCWGrtrGiesV55hBEmWojiTprPVUXHepoXGBHpkA1kiCNh2cfLvgZBWtHhibzUMhga",
  "key21": "3Bnc9dJroYAtuCw4EM5dBjN3v88d3M5G84DmZZ98Eyy8yr98AuUE2m6yidRCLuvyZmDKbYP9jeWjFC69gLszqpn3",
  "key22": "3AXPmgfeiZWJegFDgd2HCPwjM7ooH9RTbn7riSo7KBWP3eNm1oDwAyTJVdSpcB9ahUk2c1eqgUsn6zTyGCmjmKst",
  "key23": "xeqiR94DTJcH56im8NTZ9NZ71ZB1jQuESQf6h5Yf863pmYjPKeLoTdd4ewf4jGMnyimfgskNkzUqGiNVMKPUC27",
  "key24": "4RP1rBKpsygkuLH3RUssj38G1uHgfrA5YEuszZBBoDnamFXSP4s8Sz2nKVNjwKsocV4QYQfTn56fhHr2LtvDsJU6",
  "key25": "49A7Jhz62PeQgsYgkc7TNedTpkF3GgM4ZMNKmcE16irHwqMb7beABUDz8mi5G5U6BDYX7z4446rTWXyQZ6WygwdN",
  "key26": "tokWYHi4HBtV5xjmTgKSzzi11ekc5efW6dRZAL6CfKrNFZ4xr4TJ5xTjDqWccN14h4yZ5FMoytuCyFSMXDC1QgW",
  "key27": "5tQZekWDzzY9Bog885NxDpG39kNKidtSQuqjiP5u21D7kkNwQfSLrn3w9xbj4FgwMwzQsdSx2EMk2ckTqsWBnFdD",
  "key28": "5rhvjs7pRqTxNEsqiwcRNwHjhKCXfAigiuHSnc6pubwkyEk69TABAmhEQ598nq5642F16qAiadHDcV4pAkN4xNrJ",
  "key29": "2xF5vMDFuGijuDhqMyiQrSQCFusjsmybxtsv1DNGbohFPFZio7JQHkeZ55DQFFsuKcmsZX8oGeTK5vCYNMPuMuHf",
  "key30": "4J4zLdzws9S7wmDo1JBscmHquS9zQ7F8ea5mmjWBAgpgocz94WCR744CzGSpvXMW1VaZNqM24FY9uAaziApLQaaX",
  "key31": "2tqHstKmCL54Zcx4boWbJbTkNx9Qtg8WEep2qzu5gvUFx1wwLJdd85DEM4A1tx6Sf7RMXsK1PibAWU6E2XqVLJrQ",
  "key32": "5N5tznXxXyFzZCpQR9g3DRhZ3pJotMwrqkkqZSzTvQgHbYYKoV4vsfzhbfxdKKz6vdcvo8iGQ2zdjdRJaXSuGF3B",
  "key33": "5kCAqS3co63gJX4nEf4UA6MeShAFnotaYgB8QA29cuMoDh3KydetEg29jpq2X7o9m3bkBHyu2hoPZzEu4SALjfS7",
  "key34": "gLmC6cANoCmf6PpwkW3QTZwcDPCF5gRKrUJovDrPYTFYZtAyfaiXbPKECrn9YqgXVRptXPQmjrNjmqwPBpCRu4q",
  "key35": "ar7vgZqxnBKP6dLZjh6qLcfBeggz29RgEn21jyY2RNavR1KMPdndDp8zHTKw2HefuKERyzo87r3KCA8NhZA71J4",
  "key36": "h87tksmp4dUCvagaByCRaNZJsLrpqydx6L1gfwUMzr1VZ6A4vyJn2yqKtKA7wvGVoTCpd3jjf9SLgCSHXLXwsoc",
  "key37": "3AEXPJcouoBs6goHnhC8TXRg2AHGw8AMVkGYnkGNvqxzufrRsqttyvohLfazwNa3uoGucSGvuS5kYQuNAVHXC1pU",
  "key38": "j27ncTft9wHn9hAmTUJvErrYPAhF2BaLfz1huZpJFjdkUZXHoR5m5sCSZimgLmgR6PZH2BGNHgBfTWWiSotusLW",
  "key39": "5FjXGj7sWTR5t3rWnFJa5LdkHtXBXNxudh1f95d8t4owkftVs8h8FJexf3JKdpRkkChtFrqhmnrSGQvgAr32qjAp",
  "key40": "5gvapE7DvbdEbpAn5Zzk5DJcNn8i638uxZmzU2j3BLCjSj8fH84Yv89pDcLjD9JSTqZ37Y1ttDJUWa2i1D2Jzim4",
  "key41": "4RX6vdJndmjfnpLQa3E12R84MYrCrxQiksrqFQxZC8AEJJhWJM2DmxV7ET7139Duku3PqDvBNHWqtVRyBDy1GdFd",
  "key42": "3jQCDwGVo1bU6vFjTUXG1d2C3Q7diS9ALUeoRGfnJDgke5dt1r7w9cJhQ6z1Hw8nbrhvWguZ8ZgspnLe5WVcuz9a",
  "key43": "3yoFN9qRZF2JrsFyaMRGnM9ub5HxK6jfnNye1itsAnGppCDsg8ri57xzebLojsdwKETTozt1VvmCSuT4kqbKTzYT",
  "key44": "2wA61g7V2ZcK7Q3gbCB8kH9ksn1KG3CqvM2md41jtnJrGwMziHBLVP48C9p4254hZuFamPmwHN3uPEq3ikTKEvKX",
  "key45": "67BcS2kGk38SwQBop9ojfVZ6RnP3SzffQwnCBZFasRvAVfGbdSNJVTumnAib6PHZySpm33UXB6PmfrSUn1XdCBWX",
  "key46": "5dMEPUXvSXbrt7rta9NSPw4Kp8mie9morwQZBfytUr845WYzN6M2Er3KfNDvu6MWGvAJXRFsGWKMtBRCjyaNW7xH"
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
