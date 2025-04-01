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
    "51PqwWcsuUEDiHAp6xkpkYE3SFqEw7WSgn1WgTx8RMFJ6DZ3FbCBzW44D6gzQt5M5bSUufNHkopEWSnt62KQgj1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bRPK7qaiki4ZnDAShErUVM2gPDeWPQmR13AvLSMnqr8hW4FDcaEjtVr5Uk43jUziD7sPZ174KFomSbnSnPUhqoD",
  "key1": "4JHgWw1xhjSwAM9Z45659iBSqkVW8HnEu54owyakHqELprQ7eiyyVpxzhjfJPSXj263VXiDygdR6UWAuq25Dz8oq",
  "key2": "67E7LuQHRBxELY6LhtXLJwN74bZVzZqfrm85RvSXLUbYFMWSsAPK7ZX1yyPH2yCA4oMbQj8N8LhLXZXitQJnALZb",
  "key3": "33DTfhtLdLM549FaKDZaaoJM9wto36dngUd7dCXMMtQeA56yJPTv3AYqxXpqAGuNSAHCA3SzTMDgcVcUV9MHSLgG",
  "key4": "65Fo4aAszq2ceVpTx8MWF176ba6MKNssrBCNgtCaSWRh7njx86F8YEfPiv5o5vtFup8FfpK2mehHsDCddDknJ6Dz",
  "key5": "62cyVmL6GApnuLvH2S7opZA5EXdXXeWkJCTLWJii1qpXyiNPwiYMJit7SBNgjTPjiH9ZFSC7Demh58nnYBsgP8ju",
  "key6": "gcxGh5dnniZYjLgFkpwCnKVs55bjujRw84u6pWsf5T3Tg8vmKnmxp3gyUVjD1hTcNjLA1oVXeUR5NE5v4kJ5sb5",
  "key7": "4bN4AnB5aaue59wjFRiP2knnqciMBaZAZxjuvxqHEYm9kcvGEnKFUxyhkDiQUPbCiVNNqyXTCWFwQPGQhje1T4Ve",
  "key8": "4KGyzwKYGRLGXzYTTrXGMD4WR6yaHzLPggS4YBXE5SAc2XmiA5cPeiZtAis2YKW1wZigNhiytgeqyLjoSmHh7A6p",
  "key9": "435xksuXDLMjn2akn6dN1JjoD33zj773sbegJUEfSNmaSmScU9Qo22xojpk3GqNDxoFwTbs53xbYa9sBc3AYJUUV",
  "key10": "3f3P1P4wswvSxrNi7QLfZF5NM12s9WJiiESYhkur8r8q6gDNjD7ySd981BNgszkbJwAf6mx9NGjhVUuqCFKvko7s",
  "key11": "3TeCY5ay1x74JQqmBfz8vpRoxsiETzEWDyPXDGzjAAJWZ2THir2aVd6Q7SnFEGw2c7REJACPWPxG87BENipiK8pX",
  "key12": "2LP5hjNUxPWihiEENZaDc1HGbT365WHodcYgqFBVnLQBHnPnEhJdcQwhLaLDEzzxbGah82Gbhf1QGjqthkR6iwV5",
  "key13": "2RoR9t8XbcJR2FTLRdrhGTHKp8twh2gTmSSCiGfqoQRnE3nX6E9XcWPecWPrqURYiCy83XvJ3PxzidNrddBVKtit",
  "key14": "4NkBmuFzQrvfwhdgKa7GyWkVkBKFg8oMdWmhXcnxrqFC8yNztnv18TKhZN5qm8pEJLhicgBTSsS7VwtZ5NNHKko6",
  "key15": "3iv7BpfeSFB14oHrMuJX8Qz7BXf5RjX57PBCTmi7R2m8RDeg6wTMTnLtoPkgL6WSvTDHxwVTi46yHKdq5TMJHeqc",
  "key16": "3s2c56tJP2bjCM4EtBrAW1f3KooLHZaZPaAm1soY7iCY3CT2TjFtX9ZXKCsUK3ofgmfbfSz4iA4Kg6JSqRcuTzmD",
  "key17": "4vA3q39fJjGPSoVe2ZVttAcrjXbMMPQYuCTWf1Jt6Vn3NafDGLGkUp77q7wV2tcfK8hMxWjR7YFjHkb3VwgrhvEr",
  "key18": "3XW4ReTmJapr2XafVtFcGuDHw2kZcoirP3cwb6HqCpYADhVmK6eiMEcdBXptgsYJoGTwDDGYxmLxRyzQx8ypMKpc",
  "key19": "3RYbxUBTijo1xEWraF9F4DKP86SfQxLizLSzDfEwC58GGAmRKbHJZF4YheF2JycsDJ9qFfCnWF6qSQyr9oawwUNX",
  "key20": "52NXJZyEmxd7hQhrWUdNF8g5MdrckdTx9TFSWHQUdBxUqiiyG4XvF2x72W3X7CABJy7uSNryWQP1Pnt7UC1vWKMU",
  "key21": "2qs7yQatrdnVuRidk3rBpaG2ieboZrKuuNeXYWLXstPuCL4cMmeA1W3DkmztpuzqA9V37hw3bXCB2xoydS68K4kH",
  "key22": "52fZMWgpokQbEY9eLDEFATPoHenvFChnvKfoCVBdL7nKxVdtEFKmmyrgBxdUNKHx9s7z7onpYEPBLC2NrfUejJTF",
  "key23": "38gwa4758TeoHXfbxhjmzLjqJoNeqYiXbUH6a1thuSN6AiKTaTtsg864nuTL1DnttRGAemCCnQ4oBVpcpZfkjn7w",
  "key24": "5QSfV9Tc89xmhPHVmQX3TMKQi6Teji8uyKe1dRnTyKDYt6CdL9b4CYSUcrzqsSTob2cUFoA62RKrhrUSb3hYhEx4",
  "key25": "28ZFRWePRf42TXMqc41DaRUzuuaaVNTcVNBsDtfP3yi1NM91sBc52okzBr9nL3R9w47fNx3RGVieu4cUL26N8CTj",
  "key26": "5hkbQKpfksjkLktHpwWF6JyCqnCjfgvMf72nHFd4zWBvti7nTx3SUhBkhqYVQUut4XAtejDs5Eg6uXSbrLExnrz2",
  "key27": "2KQPyNfrtmBHAwr5gt1PPQ9TLmTHou6GsvCFo7YHPHFgBh5CKo7kabKf72AX4voozYAFRQUWTVZSE15MkKWSRedD",
  "key28": "2Xzf2v6fCz5pSxPfz2XnX672WigHCudJroDWXDkN2Y12bxq8z7YV7wSR16DzUBKanozuZuKUkacanN2qF9VvCKkL",
  "key29": "jKGb8S1FeYoRh2nQEZVHR4CihjxSAHHByq8iLq4SgQQd2oT8hai9a5eH3XXcPw8dZ5mJWjC3iH9Z6P8SLCevsty",
  "key30": "4hDyE1r8b6t3tWjDuNRi6Aup8NcRPepNjq2dhbRA83DTEWJZBYurnLo5rWXbVmZBY3taN7WN63DJU6iSgYPXxbhU",
  "key31": "4NiowNB42n3L6KoNVZjuCTvqpLrKMx38j4vzeWcoF2vJL78d9DaszUj8cKHmJnGuYuX3iLGjx8j3KWicdfZUdmkj",
  "key32": "4sx9T1UoLXi9uDUPPaEot8fg79CeRMZnb2jNLJJvheAJ6rpxbSFSHBHqHnoBg3CUL54Y5XpScYEsr68ttp5x29qj",
  "key33": "5mRgYKxCqonZixYAv8488yKJsEUUJ6HbDTUMum4wds7mVo4Wmyw8WTDKhWtDfLu4NB6YGHyJvoDjES4jJEhS2RS",
  "key34": "2Y83FEekDhW9TFr5utC2LvLFCpriAZC9HDYUmYr9pyPmgMXz8vFVFBWLRgw3hiSNJdtf89rkVwPek4Gxp3Cz86S",
  "key35": "5RvMdLTHFcoJfyQvLzCFae4fDqC3nBg2rwPHjvUQXeXcgcxZvY6ovqY5pcZUrqcUJE23My9CAgBx2eexcn8sxbbE",
  "key36": "5777o8NQZaPyRwG2jCcsyLEZLRKugK5J6yrQ5boQUjYpegbpPR2wimgBMRCrv4AgWK5C5LFjTyBYkemSZd7kGFQP",
  "key37": "2qHGUGeDntHttDp5BbBNc8rSxv8Tit5ZFVV5UswpcvcmJoKenwpLBsZ3zMN97Yv41fAxYsnHoA8UdQJfiVZd4V3e",
  "key38": "Nec6gMXmmAQUUifd7T6SocP213hJULViae8QtCBYxVziaJwsRW59pSjdbCcguffv63wTKCY9J3SKAhhkyMJGq49",
  "key39": "5zTYFRdP1E6DykwTbozonH6HzUg1bph2CLFH7Q9mnzXbJJVaCYSFLc9dejVmLHDPGzRP43BTQR4Qdm3VNvYNNe5R",
  "key40": "4MifuzV8QAu7Z5DAKV8d47A7eFjnFzkkJvrD6bPvGvX256kZNzpUBYaP4kk8wwp7xHCPj7ECAyKDv3PABdJKXZb",
  "key41": "49oq3FEw8ktgvn7K2fjzFvgxPUkKf2bEM45N7iu4GmLj753WJQZzC4dTBuSvKFfw1DKZZMntUbPUj42HutgmMWhp",
  "key42": "2RmFCG7Qoe1nFex6GgEpXBuTJG5MNmdMtWz4Cs7DzYyYhswu34uq5ALzAjDcFkjEgvVt2Pht4g8mR2HrUF8Hkhcy",
  "key43": "5GUukuXM2G4DucjeTMf99tbq967e6zTRsyDV9cW6KkMjxkoRpge3qSAVmScpFj43XroxjsFDVfASLTUj1CqDTuyj",
  "key44": "tZydSbaGKmFXLDUVCii6ikYcbbc72vzKZakpUqPTrpRrSTuFdnN4eqA4zRaxpCuft6MriFqGyPj4ejor2acWHv2",
  "key45": "2a8nyFsfsWe587QejgitLWya67HKAsGa9kdEZ8EvPnMGVB1n6AMqPfzuQNJV748xAki24arQtpTVdPBFJc3DrZwx",
  "key46": "5ZmzhNykKuffwmfDPgVXvTLY64aV2dEUzPaLYbYqwiZgMj7GQuMtc8TcTnqQj9WLWTKePJH97M7qnnnym4Fw1mAY",
  "key47": "3Ynm25ikbUP4YT8NzrjMg2gcRxkq4LXoFNn9Awd6gBDyGHFhhPUR5VVC1gJDgx6ZetdwWgSTprcR5MgQKLPz3Zc6",
  "key48": "3H3EECusYrqN96iapjrGgbUcVST4KCQPeEaHNZtJbR9s4GP2PSrdJTUdiJyyt6dhYziS73HQvm36bVtFsCvWeZMz"
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
