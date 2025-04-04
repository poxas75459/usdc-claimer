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
    "b6bgzVHvManbBNXh4xbuWXnTap9ev6KF9Uufhp7aDjmj6crH9JJNcR5huom6SyFPR9P8YqmMUdPSJY5fdJLAT68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51qJwTk4B6VYkFUN6UnhytYfrPCiTHiQB8L9gcQS9JHFaDvVEg3KAWZWkjDCE4tEXswWwV9B25Uhs15dDqNW37br",
  "key1": "3fjRLhSvwtVGrsWH4tmzNyBuSYAeGLfbbtsvdhsnJKGHgT3zRnHmBiuF4vgeQYhJWar4ZpEVUMcYzRXSD1JuKTRm",
  "key2": "5ZxfjjRN3W6j4nesiUF2kqGTV5ACRXDhmTb9Ety3AZDAvxMpDpvkDHQaxXQprdC1iUfCwWh1V4PEdhNc9zeboZJV",
  "key3": "52WmSHn8jM4Pb7b9ZBNPpmsz5xuwP3gFMpKyq8a5LLAaxXKe4WouTnf1Y6WYoFuytfYqwNd59DSe4CpUQfBuFuo3",
  "key4": "uLvY26ajeFvgPy4u7x7WhtoCXRykmoMezFcV6VP59Va9yLnSjcXKwBcbHjwSBhiSqm4EADAFazPJdjiHtm6SAuh",
  "key5": "47d1bE2P3mGugAVnMA4iDvz4ExgC1vJydhx2rofAr9XAf4vzZVpCbKMMNMjfT5Yyr1D4ndMQrCQ7FuhhdBDyx3ni",
  "key6": "2mjchfixLW7kHREPMwNuv2C53fcqbTHd4eJRnEhp4Fxzf75SWfGomkFxDbbxtCd9rwV6vi8Qaf2gSLgHTadBfuKt",
  "key7": "484aaoRjudUGJ9eveGiSjibajzYMszwhhu3EqxJ3Htw68ihZNVdTsF94CvHF2HM1kZ4X8K7brHXsLZQdWWy6Sfqb",
  "key8": "3shtzqDamtVKCnp8ob5UsVL2fsNbuo9yk5QZ11vMCRao4HfYcyqQ4aiHcom8fM7VeibvryiLDiLjgrYiUMU9TbSP",
  "key9": "4e9FXcjjTfyR1sSXh9AT9rdimUyhW5mWxyNMwQmhuXMEnzyWDVKLaZfaEBpXXJnEapC5qoGBofJN444MdrkixeKU",
  "key10": "4fxg6e9duB4zd3t3xymZ3kLDStuXahCm3NwLP1ZmjLeHCNbL27F2H3hLy4EjJTEWVdN814LMMjcR4MkNj1N95w1b",
  "key11": "2WFex3QBdBsiPYN6Af1LWi8qeo1L7NRvFaQhYewfxdEmSGoHCYUnaRMXPk9qzTS7WfTRaiWXYNPRYVx6bZcU3LCs",
  "key12": "x67xvRAuxSWQZwC7mqc7a9LzzyMHtU4Cddoun1mDqNX4RXoL3EfMDaH7FYvh4kN8TLmsRF7WHaj3UxN2FNhPdYz",
  "key13": "5nurhrn2dh9wWdG8UxdBbodPG3MSU4sFgvMMtLu6WJaynJMhjkzs3TShix3hevvuvrwebURLZGEorEV9hXVRGTw8",
  "key14": "2Y79soJ384H2q9aMdr4GhoQRsRVERrkoinxgk1TuxLwR4fDedGzdL5eJScVVLrnAA1ZXUgm6MzH2wrcSBMFJSrxk",
  "key15": "59DM7bTc84GRAc99bLt9HbbMpudgFDYy1uvT3YZDCrmUSD4t3k21dV1MbisTEpys19i7CnHcmpjxcvG16RvxCQpm",
  "key16": "55U5cHWLnkA9mAu7zuqcRGDnuWGUNPh2GghQ64HrhrwfMTWPFoLHdA5riWn3XKSWMNv1MUzKzTWT7hVamgfLKKTt",
  "key17": "5AeFCF5BYXPmCKaRTb9PpAe5qLn9BT4vAWirtVWgQcJMbe59CxA8HpeHqct7Ubo8BcPGR1vjb2pWLL5ztRTdE8yV",
  "key18": "59YPn9BGVq6EfumfBSpPFGvjGL4SSdWe3UrdH8HLmszR88x8M6zzARURw1B8KegxbctcvLg1QzRYDfcXrkupv8bP",
  "key19": "4wbczrE5yBDduKDWqJRM5CCY3SLERQA1m2EjsdndDUhxiQJ2q658woxZNXKBrb2fJ1A6UywYnz9nA326HXCnGQu7",
  "key20": "61hyZzVF6bN2j3CfGJY7U3U7LGTVNEpx5kQnMCoFxTubSu8QxSwYB1Ymwi4V71rXdCuijsF47WsmUjgEWTdfSJ5X",
  "key21": "VjRuFbU7hWrjSLMkeoupnpHiPPitPfk1Kp7hEX2upF4HmDksBFRYFA9EK8mwfRP7NVY6pziCQFJynSrPJtqwYML",
  "key22": "3gziF6cXyuj7VcmzguDiWyG52SgixGog8aWUgfLBZMD2jRraA5HkvqvG8PM9boDsrE7n76BYULtWW9urEhPrMQ6D",
  "key23": "2We2zNgCt2KhKG9twNhPuCKuR4dvsBurGTChFstRx3jtdTNS1kTfNbx8mEJv49cyhndw8AcRHwPJZRdRbhtgKCP5",
  "key24": "5vxQw5howKZraGPsUQkFim8fXVn4wQbUx99dYThpMhhMM8nStbg6qW4XmW3MN94LHcdm3iRAiPSmwuvVDre3pub2",
  "key25": "5b9GNTxhm8bWkDfMUd3e8GwNsqzt5m5MdmCDT3QsCpQzE2FBHuWrb9U3xaVoWq4mjtqBazQLtEBbR8jRqnVFtvXo",
  "key26": "2C5uTbWtHuherAc3MrnitxHL9akNob7Eaz627JjfRc8F1pYt5K3NKm2Qhu4c4TrwDhQZpUVwWHtVVorYXXKqNtfo",
  "key27": "5ctxM1KAS9R1RpYZiFbrrnai3qgJgNpYu3Q8xuT4rs1Kt9gT4o61aRVw3Np1YX8pWm7G16C1S41oetChpNZ4Xywt",
  "key28": "4wU39NzbGAngkPYEX3hntWmG5bX9UubP3F2jgWRKzFFvqFQHHV1xGg1PshGSYqXKy2M98X2ADYuGqjyhpdcr8Z4B",
  "key29": "3BY1cgFQm5z1FkopCWGLghKVRKow6WjTvu3UKL7rPqkU94DphJt3mmE4LCd2HL6ZMY3hiFCL73K1jwUdwWtJngUX",
  "key30": "ex2qSf5i6qS4X1MufY3VsTMJhHsJLTLpenURPgTZJMVCRx9EABXARJGC1JcPF44Qu6bjmnjSpepajeZ29aNqxNT",
  "key31": "5EEiWKYDWhMqDM2aUm9ykfkPykbzT5fZ23UpE18cJuqCb3dtoYYNSyB5xayiqaipCKYaqtRDP8bsUyXsX6jaUvXJ",
  "key32": "KcVoht8FVZUGq3CdvBFK9xKCTJw8e7Bip7kjFekUnDi4rfBWEK8Bk88ZA5gYLAfTCQkzEnTNecbP716sDdyYfZ4",
  "key33": "6zp79FTH1R3imaUS55zY2cRLoeknm4jV5Pm3hMLQthmqr9buKPB1uyW7RVe1QRM6r224cFQgN3Fgw1FfaQzXrG1",
  "key34": "4puT7AMRXoMCBdYAmURuxcHzHsMci8Hhbsse2ozC8FBayKsutBjLTZB6KDdgezq9o4at3XHChoG3iPAC6qRtPEbC"
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
