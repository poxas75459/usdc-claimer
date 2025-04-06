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
    "5S2gSe5tWMcWDP6mForjKLvDpPUhkZs1HeDN8DPTr4Y1ThgguafYAh6YM2QdcZbfdaqAbXYrvUnU1mDtVb1LhaJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N2bK1BZM9rtyZ8rq567nKASGNQwSFxY7iFSrw4iFaLmrt5wncTKmfu8xaFConqm68RPnvFRjX7nduZAz8pJFSov",
  "key1": "3vzFvXEcdB84V7qpKeRC8CTDoDuqZs4MpCpstQ2a8LqCKMZVqJwtPWKdaQrF4Kdh9xVjeXJa3vLNKewxDa7TgaAF",
  "key2": "2t62S5MtF4tzYNjwN7V5wXbffMZ3uRvbmY93G9U81MAddFadDBwmdCJdNR2kPDrysD4Ma21M4h73X9SBRcF6vdHx",
  "key3": "4dgYJKvsX9tRhyAMy4LAFUF7gkom4g3YL4vR6asHbWKHbCsTZ33xZZF6wjDE9yJcJezh3MGGpWyQLsMXpqdzvpmh",
  "key4": "5EPaaWmjwq5QSxPuffBXEqjdScinz29Etwn5RZoUa8GNXujLKuyrksgZAfvG2H2CqjUmxQPAkQ4dAKPcsWwpa7KX",
  "key5": "2FsqsDPdjd8VHkrVzbXf9exLb7f6GYrrtX89o8nBT8i5mKqu56fHGz1SM7oZePyRAf2kwdqkLCk7FmgvDuwpTA2u",
  "key6": "4xMqUVrUn6vn9EukdFbasXsZo1gJ2NkqTh7RasVci4p6PAm93FxK5EXHtv234wh3K3GJAuYA9gEDDVNa9ca6ZexH",
  "key7": "zBt8NdAe3kLW2pcJPVRkb2szemS8LqmJf31srdjZDxh1sXEctk3x3vWpLw1ByJq3K8LqV3VdR2YHsZvNVQjnahP",
  "key8": "2qLD3bjz1qktJfyrreRR5ETrdqU97mnY5vdgZVnWSFWgwNFiMzMyoLmiVPTUdZWKx18Nf1a1MguMTEeb5wQXPar4",
  "key9": "2ALNBR5DZgrCMLLWmKWpP9zSSLqr2XoXwfZn5mM1t2p8gh8K73LEZtLKUpxfJHbtLPeVCMmKjJVR2rst9eNoNsFu",
  "key10": "rFwVkGaZFJkriMLcHRhBu2uGnFgJtYbY56t9CRiNXPhFDWjJgFAbF24Sv248WMEugQopa3WsHRV5NAgopgWboVE",
  "key11": "5NTP6gq5mHbLzRwpa9xnCZviQE2yDufPwoweiWTrYZMPJp7H98QTbArG3ZVtdS56Y8xTrPMqKdnm7YMejdg1hLRR",
  "key12": "5ZSxASRjg6713SSXSaQQyx9hP4GJjERB21hbnRfRaUESqgU4NoC15mqWgjdYYZUkqDFoo2obhX7jiaMnxBXZbEma",
  "key13": "4Q6b9AvmWa2z7c3depDDp1GFtpTsrFhPUB6VjNmV27jaJdUtf3YmyB783EXCT9vU54gbnQCHkzURihAQHM88eN9t",
  "key14": "4wPwwnvhEiJw5cRXJbCK9bUvaLWxHw2nHhNtPYvdxDepnF5wxCfaUy6eYGTkNvB5jpHF4M1RMTUAGmvmq5hDT7aP",
  "key15": "3JAkjiU2Grzq1iWbE6fas48dnKRR6ZXiPMrZpsjhP4UZ64YaGYAPgrJPtSow8MEqb1pQohnjr5QF5pTcDFpuQtA2",
  "key16": "4evcxUqypyr99FHDHggjnWxfPBfFkHp1GU9fmuapY98viT86t1R9CJVVqjfoD6JbeyfTtoqGUpAoqPVM9Domje3f",
  "key17": "3bi54i7mDknPVDQtD9y5t2drkZaYhA159fRAqREULvCBBSGustLdEnsg8vw7KUsHzTDpUMuXaZ2BZmmn3FFT1jCX",
  "key18": "2k8cnsZwxfsiNKASW35TcyVPuWYq2VQiy1RV1MFkde7cLxEHYja9UKF9YbvL2b7k9c1SBSewdJME3Cmj39E7Memf",
  "key19": "2ZhJjeoANBfYZBwbGmgZN6uckmPuihQmpNUNgfJPWiMjFPviyuyJYtMVizQEJc2Pd7ewBwyKMzK1YcyxQvMAAKWd",
  "key20": "5TsC6k38zdKbyzD9yTNRYyNYeHYkRhMto9WCT98yLCqjf5gU6vWgSAyLJodXiBdBmCh8vzWuLYAUkiRQ6KmG6XLa",
  "key21": "3V2QM9kwDhAiX4e5EzsotjruyKvAZfRUsmTSqPoxL38JxiQokXhYhob13tADcHmiLNjVAtGhrpTcHcjn1ot8sjDG",
  "key22": "2tC2BmgBXCvansP3JFEeMSxhAX6C29eQyYEv9xyMB3tfDuRuZfHYTcKqwYNKqEqvCAqbwiSTMEHBtwcFTpTKUBeB",
  "key23": "5MaWqaj1GaRRhp97csdd7CZZa2vMxskH83PMRPL3wF2LTsi1k4PzhLsJ5ZmuhUAG2vPDuqk59yJwjdjtwtThTAYm",
  "key24": "2Noo646k83hfwZUBUHkbsHSQK7GxmE4WmVLAfFYYLdqbEV1nSjE631Qg5Anrv6hwK3K5tQKG6pXwGzZiXJky8VX8",
  "key25": "2mB4ipm1Ag6UXMZFNoSBA9y6crDZBS1VBCkYnYwr1ytZuQx3MHkEN9NVYQ6ZKHzHtaVyMb4Fbg9daCXmycX6JeRU",
  "key26": "3c8x5Bsf58AC1niquect4DgCUrQbnzboB2sYeBrLGybFPZgEe3kPZjaqVfW3RP27hbJ9rS67m1wpRqfPnS15Jymd",
  "key27": "3d89CLNotPyPFoujJQaQLViRMCJC12wqjRj3YfGDkFG295CWLqtyBTGqGygSse3WmTucExzSbeaQW41BJGTFcxnK",
  "key28": "3bzeyWSWXhHN3NA8piefeYPswUab1baeyHaVhCiF6wEwpBRf821yDNcLGbSFBvkVGnDd5ZmLwDbG1wJwmq9GT5dW",
  "key29": "PK3mXiC7JGgQGfWdXPymreFNvV7GWH32eSgttrAFoDmQe8SyeqVGDmG3W3PDhiANhRpVxgxrX71AFrjKtEEtev9",
  "key30": "5ybxHmhw9cgcxfanmNr9euGKdUKsvDi9VEYL6ttebpqiPDZwtBWvDmHQipipuzQnwQAVEhdF4FAkcax4erjNXcza",
  "key31": "35v1rGzsqXe8psMTyaTkPL6wpUWTE6ghvViMTrvQL9JPLdt3bqkNH1cU5g3wH9mPAMUXKBfY9M6x8id41HNnDfY8",
  "key32": "3iNB1pYMK4H8iRJAwUev1CsA8x2xaQdynGswG9YkdbewNESsB2qFL9efSUptpNZAQ7w9Mzsw7AwNHK3pGxocGphe",
  "key33": "4y3jywLFpJ3Xja35PbVHFmhVaUPqQF69pkz51BqVQeSY6E2q8eFzw7aehMAGQBP6PfdthQ9mL7EhzkEkqNPTbrcW",
  "key34": "2PsChyZ2LSkRwmEhZqfpzkY4vTezwAUvX6H4YsGgzHiCPRJcxwd7S4uajou2tAX2o6CjTYG6GshwYzDCjwR136oX",
  "key35": "v7txJKUj9STo47GxKridjqymuhNgMqgq6oRQS2pcxmtVXgdUxSdTTYkTNtNQt5hHomxF1oSpLCCK28A6aWasKn4",
  "key36": "5Nn6zupjTKiBffg2m8dhF3UtDsNqWYrmuX6QxzNJjqx8sCUvZJ5hBR7HjhHDaChT4H8URs48ixZDuyzEDWEWTGhg",
  "key37": "2ARLxkZFsDURHNE6DT8ZuXjMTcDwJRma9u28mbVWC1789iutqiFJ1rjdDGNkH8yqFmpMxdP6q17oytdCPLvPMD4q",
  "key38": "5squWH3RnnGDTmEaB1YxfL6XFTV6zM8jFesesNSkkx73jvQs9oFcNJpxjG48gY1FisFpk5LBvKLWHn95pn2WQaVy",
  "key39": "61LzKF2A44mMEE3v7DJCncyTVp9HP3Y1p5rCAXLYyuDypYrEgCjU4rXkm4gQSzri8AhKTAagqiWnQNSqPJAsASV7",
  "key40": "2YER7SxBU6fm6hdPnRraTzQcWkLPfBB6WW2NQ2hUxMTAQdmZxKhi8e7U9mhsCTii5YvF4rbLTBH1BHirpwVUnigK",
  "key41": "2tUqyW4HWsQ22LYgDhpxZrcfFNGQqtYLn3k17Lmdh5K58bs62ZvZ5ugzRiTZ4cfyEAPLBKhrFtAW3Ho6FTxGREfX",
  "key42": "5NFJuQTKhpr6zzLsMJrovLUYtkZPnXyDNefmR8EosTuzJ4rP4NE4r9YvN2W9i14cEG7s1UntZCjHH7VVU8uvScqq",
  "key43": "2HNgXzTsc3iFs8vDcAEptbd8LmGKuDM65pxMNL5ZbDj8LjAMKEjQMZcQkdrsjnsrsuGmAFA6qZqTTSh5KdtCGa7G",
  "key44": "4hrqwws6FuHAa4u3ABQtx7hQvNY81LN9BzFuMXZvGW9nBVfKnWxJTC4EUg6ioecVsZ9u7soNpNm5qcuTBoJe6RfY",
  "key45": "PSCksQjEg3GQgucxCA9tLiS4CUSfP1mugo9BZkFtCobSpp54MDezKW8WEKHWgNCGcmWuidiXy4DDFga18fhmVnT",
  "key46": "38qJtNEzsSdPZanmk7CgyeJ14izsDsim7FngxxxYoZen1dRzmn1QvyBrJCUYy19x59eLg8vLvRyiT7zZ7haxx4Nx"
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
