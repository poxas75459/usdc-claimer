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
    "4PfZMTJDhXq8smq4BNz7sb8rv9dsqprrESpGDhfd6mY55xs12YEKX95qtWKWYhDGtmaYFhCQJ5Fw3GghfgWtV6xw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gzS6KQj1xUswyjBb6y4mdwJrEMsm4Zk6Gg1Z6TDmmBuaSseQB6JQvCdiqkrdZETfrPuV7ebseEexK29ZcK1rDZu",
  "key1": "ChhAYaDV5q92fKfpcDiztKgAHwYjRVdiAmS4CF2KKdsWfE9U7WyysH1WSDNiCShQyKm6C9Tqwx6mxaiP29W47f2",
  "key2": "5yTa2JwK22gnxU2YgL5RzSHeDXj4GX4bg4cQSQedmYmfY7hmhw44PAArrQJD4jdhtJJ7cXZtGJjQNuPou4JkBrkE",
  "key3": "5CatN1Qy8i6yRroGHg7kRDG9Usi876WtEZUnrb1HXFWP5oUSWyxJhxMkEomSAbiERtCCmXsJKZC6Z27MxZ6uzAxd",
  "key4": "N6D6CzrEtnHMLcYA99iK26DtSe2qJvzY8wuseo2JwQuhQcxyEZ5erxV8HVuWWXQ4zVgwuzqMkRecEgGDZr5ohCK",
  "key5": "2pUMCcQUbNPpCTPLu4o7Rxf71VDdwaMGQnQfGMQwzYtCBWREmpztsuFePbKhJi7RDMXVCF5NLJ7W7nNZJLuJh37A",
  "key6": "2bGxpZwY6wx3V3dsg1KKJM7QgCkeJQNCfwikZTKqxRNiT3JLh5RqsRrBheRQDanaaJQyezeGE3xENsaUmgUNqRKW",
  "key7": "Msj7sjwQwC5RzhxeYGbiJNzL37AC2HK7s7woRVWKmPXWUbTn2md2vdCseKUtoHBfmzfr8HYseQ2V5dWTSRARcph",
  "key8": "3RYJXAq5D1ihL4HWxsKgxVsBSsbk92sx8wsN4Q3z8bPjx17wTrTo8zazsANTHHEia4Q5ZspJQCg57Zp4fwYKDZrN",
  "key9": "4eHaVEJh9LMrmSVEcXAYpfbzNaACEuiijHboij5vtxHGjqjnkui1vej2iPdAbk8iSqSMUuts2RNidm5z9rRBDpd",
  "key10": "uN4XneJxWDriU4PE9eE9g36ZN7rkMoUCYVLuSgAkrUvDGTjbRAxQTDrZ2Cfnn4TC49i4GmVZtGUDNNKv22SSm3R",
  "key11": "2rZQzex4pE7EMFCHpKRjciUBwnWBJV2u9r1d2t17zMUkERWH44sbY64UoEoMefg7omGRGTo9ak82DxmJ91Xx3DDz",
  "key12": "353tYQVawyBNHZspg3vbmiLENYWm5tsftjUPndryHQ6xfNcmQPm1zX6hTD7KnPoSwrYm7Ly3JUuNZDWHxiHD9m73",
  "key13": "2R38CvFKU2Y9ZoDVLU74hUFbdrAHDpSpThyegakrTgdNvCCbo6uKAysj8iaVULPNexKthjHzQAECKsbsVoohxJKr",
  "key14": "4uzbKaoYco22DYx16dzUHBtmwx5roWaTtW2XeK1bzRwp3o23v5UkdtkcTLBCvLq4cGZaYVFmeFCWn1yCWDbXjqQj",
  "key15": "2cB2Jn8Z3fzedGiFRdwrAcCGrFiZFDEoAh5QLQTkGMU77ZtZ16hRfZazuC1QFzVXFaWufe3c5XZPL8LCumDcBPwb",
  "key16": "4QH52uuzsTsEqLjda8bZ32FC83EYSFupaNkuwhDrTHbQTMUkdmKUXxEuwUY3htjtRahQM4QKQyNnMo7ynSBoXyCh",
  "key17": "3ahPuLGHS4L3XYPev5a4k1YNBBZ3zAzTBnq7MCjXjq2FBhgYeEpvW3RabKJPn65VNL1TZBfoC7cW4RqPq2yi68ie",
  "key18": "2UEEtfmqwyibuLyZoVQSPsSj5oS5PC49yrB4bxVe4MXt5sPwo72A7sgMCjYHW7ruENUwVw3BNYA3oJSceXQVcji2",
  "key19": "3zthtNYkHJpA6icy4uqQNYWb1SR7N3JBnXScXek5vPmppPBMugDPQu7PLFGiqWVrcxV7HYhyjF7ezUdtpTD6DhRL",
  "key20": "aTAjkE6hUoGkk8JDgnwRjYSugRTVTodDHtPRYd9esmk97sHL6wb3LQhhQZ6SddiYQYzx47w9xhQcM9rBjk2e8sF",
  "key21": "RYipfAsBmFrvjManDYJf9SBH1g4zCF3qvdN9hURZjjpzrBGELbZiDkD8na7uJZx5MSHMF4rvs21ssTkEFuXJauU",
  "key22": "dNtABufvCjcstQuXjpWX6P7dRf4VmFbKtU931vcGEhnd57RaPGRotpSShPyg4yzwe5pLNPWyDbnYxa2GohozNfG",
  "key23": "3cz8wveqgMYr2LjWc3uG1Yk6gNyjmFSMuTG35P9PgKRAK1Zuid4mBSjkzcWMjxKWf1aVZGw1ATwLJaSZoVuEPe6J",
  "key24": "3AoB24hY3tpuh5Kw6F5eBNtXQr7dBMhMb2UmczZTVa3NDc2goBYYRvckhAZkku8K3pJuXtv4vbmC1gq7bxPyPSWM",
  "key25": "mBemSsWcdf1SdxzGJK9rH83g9YRRzXyxmy1qKhXUTPWZaj5cfQ38JTmi9VZwP3tQSewu1TacZrGhS9Z5URRdS5D",
  "key26": "3YstijUWW6Bf778muT6ETFDwm3G5WXta7iy3iPydf61vdDrLNAdkP2xE18hMdJ1rC8KkG2Rvv7dJtiuzs2B1zfZo",
  "key27": "5bC43hJbrgumZ6sdwAQPWVNEp7yxV6WGCgF7LR2GREhowvd1qZeFV7ctHMw4d8jFeD8nWWfaDjnCHzUbnFggGgHp",
  "key28": "AfdRsqxbFCrT8CCFe4SgU5RSL2mdbG9AEvEdWUhnmkopjPTqWfmEcJ7GyaH2VV8ic8XQU9BpG6ZqLJ5MTzRiCwD",
  "key29": "4e3QjUe4Qn8W4YEaojHF9oc1TpEagzRgUMzXNtdWHhHwBiuKNHH4J3XxR5Hpgj2G7wx7Hzt9MzMC5aEtX7M3u6ax",
  "key30": "VHVVKeeEXyieRWdo8ALrqw5VpzSfyjPoUcWWDrP1mq4D48UW6w1wxWr1Fp31QLT5bKjpTgzBzayEHykRSUtfPY5",
  "key31": "25bv5H3cYvGAc41LaTP5eun3Whk3TYjN34iFEjaMJt4RTQzF7fx9BG4CBZmGajBbVKESEd8b2KBTaMdcJbLSn2Zw",
  "key32": "3rFedXvjqRSmSMSEXPk4a62DA2ro6jtjf6tw6xEaHJYBfZpvfEC5hQEwGfJLsdev8664cp8MvjsYtdfu39Qk7DgV",
  "key33": "3ZSU42s7jUpVDFYxMqVUejuU13v9t5nytcfGagfRK2Pmb5cXfMBv7KPTh7VuQGGi8i7EDpP7z7kECPfMp7jwsRnz",
  "key34": "UNQN1cRg2pmzwubQGHsjg8Eaq9WkGgcnBoEUqEAdrhzSBEAfVzRbkPU9SJwUeVPivxCtLABtyS4ewAgDFhMh8SN",
  "key35": "5h3y98phzTAfGomQiKLpnQj2i2hqTSuE4k5xXBXP4HkrdJBRt3XbemRgtTN2HtsepFmjeoyyXEv3BZtA4hF292Yo",
  "key36": "4p8qcSrZgSnpMKGkdaWJxnrsaLy8Avai1T85W7VmyAe8MoMP1dWrig1QDcM2zMQdH8ftreKKDnAj82gacX9m65f1",
  "key37": "3cZhqBeMdB2sgRNrXoZwfuj468zuUPww4L7mTNdiUQdYd7sb2Vj3RKZmeLXzmQM9aeehvK1Wo1KwrB5XBXFZ2Vds",
  "key38": "4kKxuPqj8Loz7PD1CWJZi8JpAmZemTZyUvre4MXEB3c9ZaBse3f5NEtLCFvHik5ax8C5UrgJMfLf7U2gbeZcNN66",
  "key39": "2Fx3NzXUCWgA1LF7MPNuyBWiex6gtZTB9VwygaNekWdmjgEe8a6a8Dv8YHmwgFbB1CE42CoZpBkji6G9Q64mKpbr",
  "key40": "3vCZunyGb8BmKhmUrwQrEkpTMiw8GxUxNz8BGu9CrgLFAfC8rEkJF7hZS5Z53kJrCqB22LLoqC7fFHUZK2GPsfx1",
  "key41": "4oPaFyRZPjqvGBKZpkGRKZGNGZjNj1SWYR4N1xvsVcFkAGyUTmpESpRk6iSrvfCTDfL8YoyfPHA176SKcSR1pzwB",
  "key42": "3BxNtvWf7R4kdprk6hbr1zWtTNDiVN8cjomonfb1sBS3HnM7fsmnCti8NxFQddxQHFWY4dPENHPwgpYA9kdhvpSE",
  "key43": "4jsXTgYCyXs9ZAyL86EpW2qKhegrzoCEp1EHmdU8kWknBW2frxp2C1CTeoHvnXVGEv1kPHiPLsANichrXdXkDfsz"
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
