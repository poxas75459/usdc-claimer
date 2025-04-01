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
    "5vMcR2VJVyCV1XSQ8TexpQ3LWraUvHyDrMEXTB9Zuina29akgz8DYBgKWj4pGRjBD2zcFnGgBiGL3ogDm5j4Ha9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LnEYaPN1TiVZZjemeHKKgvwhbggsbfrihoMFzKSZpMyRvhCeEr4ohd6x117SHq2wwV1AsuzRfKwij1zvgmsp9XN",
  "key1": "5aaTchFcHmzz6YuvCQckSpAvzfFbEU7aLitePFkH7DAU6L7PchZxjFSuyByXgGmySnweKo5zvNKE3HjxduUUVY64",
  "key2": "5QfGe28Li7WFV1T7rEL9jKnu5wY1PExdwvhr78HaRkEGXyEpnmJhT3vDK8x5AvD9wkVsweRrGcir8RqLokvYuprc",
  "key3": "dTqfcZuYpjLFZTdYrp68xHZMKLnKYo9Srnuzi8VV47xn61dr9PmcT8SGQMzf5NvTB5nxQp7SqJeZ5BkGFg6W8HZ",
  "key4": "4Kgja3SeKdQWf3sATHcrxbEhNwHsw4NtHhAEXGReF9fBmmJQtawLed9cfu9vdUxs8RHxvXQcmwg8mE6iKyq9fRZ8",
  "key5": "3Rus7ZiMG3bw3iUAQLzKdPTtUvrDcSViTSKDPrtYV1nmPfmwRaaP3hFWiudn53DB2jag2XJL7cGMP26Twi1GbSqh",
  "key6": "2HUF4FA9ARrqFZHHhMpcnFtAjLeF92uscyzMQeDCem8fsJm1gTyKsb2N1oVSF6rzyPjGJHTLX1t7WEYW8i34EFex",
  "key7": "3q8rJnLCSUCaZmWLeVN63a5AjoXdebsTSHmMvxRzvBiYVwjVFxPVmZee9MaN7edhf5TFCEazWB6yHAjc9k82CE5v",
  "key8": "4uygseK75QpPcmtGdFmZP2ScoSHfLWvmqCwAsK4gPL1MnPGD3xDVwGprtvpFTc3bVFsy3zDtwXDt2SUnFmXs5UEh",
  "key9": "4xDWDZBRdcVpjUwAEy8bbJ35PKGmfnQUMNqFhewMpscKD2mKev73GbzyrQkVtnLFSFaTtVFCFuZDWVo6UStpA7CP",
  "key10": "2cy9NdCJiLCkrWe2Q84n72AcMC33VSH3AmgdG9BGNNBBocigZYWPHhaLPJvFczCgeqKeqwbGqjdQtJ1tvvUutew5",
  "key11": "2CJ8yaF5rmF35fcVS8yoRsdrSEv9HGK7Ho2YSf2jaaxNARpxkG5Nak8g3HE5HcK7ct6ofUpGQEEU7S9hFCZb7jdX",
  "key12": "5aGxjhQm97yXBPqPcC4tmnxzfWaJrUb8XNqsdSUD2F2sMBwYw6Zrx1GyYfNJ2vR8tegHvAe5PGBXuJi9uro9bgLh",
  "key13": "2EVwgEVonpRLQjUS7e4Srr8fEUdQtS5Eo88WQ8N5WGhwk11BF1wY8NWxmC7Mea1ZjXk3Jibb1Kqbm2XU33xyMgZo",
  "key14": "3yKkPDQwKUxve9EVtbnkq2CEzLoRDtbW5T7EnnsLv6S9gMyt7M1azcwAZH7Z6k1cZRfsjqboez1pU2kZLh7g66We",
  "key15": "4ynz5yD42sz2DeZtzj5F4eHoHR7hvC3jidKozJo8yyZimAS9qmdS8QQTY9vBA22o1xzLtHQ5bPtMttL2H4NgwGNB",
  "key16": "vyiSfPjptfzwFH1qtQSCHU7hbkz9e22Z3JqLsCvGaYVc7xqKs5GQpQJkk4e1nMviv4GkVVSxiWreJXdiWLqGpiq",
  "key17": "4nE3gr3TdKKPrCBEwh4m1b2tLiJgA84jQcVAG1tXuwkfgutwsFMHHb5VvHmiaNEUE98HA2aGRtxKfhiP46gNi8LR",
  "key18": "2ugzYdb3DLcDQfKfpWVe4SVT48UFa3Pcb2RC3wbzYH6bygVagDc6xBb3rUVTCAK7CJcMpgrrG5weG7f1B29NhXVC",
  "key19": "5kCPHMd69kS8Tzk7tT6fd7mjZTMTSR2WGbfAYd5sAVRecF7ZyguSDGAm4DVXeR714CPYj7EVyEJNETS2iE3fdkEd",
  "key20": "5SL3d4K1txs75FcATV6LkDsTW7wpSvmkiFFRBH3avsobattg7onG1sjf9Sw68X7E2j7Srt5Mmn6fxgSGmQ46MZJd",
  "key21": "3SQcDmuqtJEskbhBfqqK2nY7pvDQZi1n5ApUfEfvdbVpSaW9EL7R52CKh9ix63P8ronNw9ByowPudZNRutzjhMdh",
  "key22": "4LiArJyeU6rpX6NcmJu6YxpRtMdWnBEbcbqUtyA3xNibnwGBNdyrYiq3k4YgxhSsccHkusAV6boiqs5qm8K33inL",
  "key23": "3rG5NNHYKvraJAYfr1VzPHns8RGQrUB8RzKXcZkpG7wNBePqjUecDfRG4gMJJm7pwNtig2daDieeZBt8ojZrzxU",
  "key24": "CTayx28MTks29uKT7hjRJ8VPrbA9ke3gfk82Azyrhn22dCVwguukpeJtrdGbdaAM4NHGYdxxyz7tAC2zTnJVCJX",
  "key25": "2VyYFKTGS4FUSkX8hFQghpKJJ4R4ErSq5SifAHomLuZYNvAjAhHkwZJUCZJWQcbUK9DarkkyvGcpksAWgvKCZBVJ",
  "key26": "2cM825vkbohCf9AegsLj98GGngjkPPnxEDjEnjEMx224rf71VU6XpFWfxmmd2zSVXEqc9XYpt48C7rYSA3gP9Z4x",
  "key27": "jiwyCu1FMSqTdFsxMnFSLVjSaf2NsGmz9YgxQWfKJ29wp4gy9JuD7q6EQJnRfDNXvRRPL4dzkeiQ7hRm2dJ1x1a",
  "key28": "2Cs9VQv85GDRq9YPjaYm764uUFaLyNXXVUu8iVtUiDW6PKq5uVhQUm3wikW92LEYuHHtVZtNAMr11GV4p5VqAomA",
  "key29": "3nB5qYFMxHTuJjqUwu8X8CEYCyC2xMY5tzZG4a19DdffwpMNXdFknVQcVrdAf4R8uPiFkqjSwxDJodxwhMaSq8Gp",
  "key30": "5QGaM6NnN5sCgVWrHFiyBn3VHeWavyhY2RB9wNXigsG5YhN9ck9kKbtpdmYeLh6snzyh3RjNN6Nei6ZvzHmCgvKT",
  "key31": "4k3RrbJZnCRoXz4Jd3cewR2uiZfPwVLFYRkvxSKSYGHyL1nna8u3AASfjZK5dem6jHci77GDLPo5AjyAvVXVyWGD",
  "key32": "i8RFMfNLeDc66MEkx3rxQMkLgFLMfYL71HiaVoRPiSDeWhR9d36spto7rJKXgg4SZ8woNNwCvsEBLvrcWggzrf3",
  "key33": "3kKZc3NXYZttQWnf4sivi4e9P4mcnKkrN5fuzuP3KrwKYjAJpsu4NN3WwSS8KZD6ssCkRApn8G6B6S4FDegeMaGt",
  "key34": "5ghuWZPbt9sztvWJY323F4Nw1brbuyYN2HUEpJpGGr4psTTyekexMsfHmnsxECNRyqkUe2hs6YqJEgZnEBUE5Z98",
  "key35": "4aYQFt3KkXPdMB7xSWCBwPYpiX87KjkrDEm2mtMkoDq1UHPzbBok4sS5NTwU8TE4poTw5PexcKLPdkLFe9Xy99Mx",
  "key36": "3viNryqhjrWsL24stMUjwbtuwXVb4kRcFY2F3Vw92oGAdduCNc4XNjytW2ETuTgmGKczHCVPYarqH71s2RuL4y84",
  "key37": "2bhMj2mZTYhJc8LeWn2hxWni3NFsiWuDTRwh8h2XssBncJ9T3SEWSiSvXz8trbAx72EwzXZqPLjv2Mpq664zV7eh",
  "key38": "3PDzYRncyS4GrCRxpD6uh8nD7L5kUkgybaY52gUfVUGn2B3tyTLmAcXGUELqvECTiPWCZWqbpPH1KnoD5L4LRVyh",
  "key39": "5XRBwnS9zezRuPA9yeTmmHn8Mfnz6DPgVWFj2DCLzmuY8Uw4Kk4xts9GAesDwGc2yEQZ6qFV4CCMQJF6qZ8NjMhA",
  "key40": "3J5vy7vKPeqNjsiMAGMBHqa4vFQ9SvLD6JhA8nbGAqpiCxjxjRamiEg3JyfAe1scfocfN8pxTKbwn6wXwY4jKDmK",
  "key41": "61idbZo8QqGtrYZsMnrwvKWUZGKBKgswNL3wDV1sQpmuXKUdpt6GdxoyYbvgEDQSEL5CimMA1JrDN5pJYGQkE6Di",
  "key42": "kHQYpyidSrFST7nMh4ivWBo4jZRN3cEZm3mrHPvL92G6Bf8AonAQH9uJY5DNvYEVJqkyrUkVV93qy2fdVnaxHY5",
  "key43": "4ASUsDaBwksBaNfomvnV47RyYUj2Tfq89uJB1BsxzW1YMnTrJk38DPbjD7dSe8N58fxPDQCiBfMpgMptnrQAqsEa",
  "key44": "3fQ1dg89H2NxcHN9sdXdUg6P2263PiFAJaF4wy4BoMsbTZQ9VpV3smNhUr91pw8GyWsGjfvP7vkiUnTHEbiLLHRd",
  "key45": "JHcFgPn1JKLpW68rTzKX81CTbhB1xjxPdcJg8KaBavsNvBJA5BiXSxSg43T75SB6qfBr5aNxPLBEcjvGbZF2nLU",
  "key46": "2spTCicBZavjT5i6QCkU4vi7DoE8cMuyV3i4z1XHD5HvX4xp2LVF2FWXF5fnXVLGaXyg4Yphnyuvn6pRSNqX4bae",
  "key47": "WwPBS9gR7Ru6uAzYCkSFtqSgrm7KeNL2P96xQmsDySx4SFXjo7bxqDbV4yZ9BSuAuJXxV5yRimnkeDSTocdefkc"
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
