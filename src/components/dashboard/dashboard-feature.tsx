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
    "3URaB9yLxjUu8xNCZHy7HvVeeyJU4tKaAimREpYceEMhr41VrBF9XeV2cbg3zuJdGPCMJLXztThrrL7W92YULB4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pk7GQ4vniQgaJi7qja1YDDwgZLJ61BzrUSMbCGfW8Bsp9eyZrybyLVxoVYa7xd9E1ymiy4rsnnHdPPP6MLHZGk2",
  "key1": "34QaNkw3kQkh2Bv5Ee9MNV7SkLtcRae1vmtwLVSgfLWYmXNasKBRuA8LFG7fUjcAg9Y8fWckUPkXouPUwfkbWd6C",
  "key2": "DCshFGEkrATJ5qU5xKkdNYtoVtELfV9i2H2sdwfSW9iAXjrwPpkH3kaFrixKejBoBZJDsKso8L2JTE19S2Kncx1",
  "key3": "3afJp45WP2Pr3pM4kVoSyF3zno2ShSBneVFLeb1DzWMqQPU5J9Lx3g769UAmcmNEbmJ7xJA4gDABqfMfambpfBgt",
  "key4": "h7TRt2bdFEiqsXX9WFWN6y4jr2rJahFAvroBPn2khJZayL8mrpdvgX6s6ktdqr786VUgzFc8uiPfo8CaZ6i8GjY",
  "key5": "44ADCTN7RRiHECe5kY2iXDMUV3Hq3DqrmmJQ465b3vGFEy1WxH974Y7qQ9zsKgFReQkKnyQWAKTE62yRwUmDAHBw",
  "key6": "2C27nV23za3kBMgpd4QuMdV9Pr8U9TvhnhkF5XKgE1p31dsUjbzwjdVu4iP8S3M7iDT9ubJHJDMX5Yzj6QuJzANT",
  "key7": "2GrXjU2nBji25wLbhxEi2zNQwMPvGX2Bj4ZJ56HWs7zD26EHBs8HfWwWmuP1C2AChyxL8u7K9U5gh5SB7wESVChQ",
  "key8": "5PLQ2tQpP9ffGypxeNVYVGS2fpq2syqH8T3PH4Fu13Gcttaw7bWL6Fvh1mGAx8QEMFHj22zgc5qC1Fr9qvzBwcek",
  "key9": "2NtEPULYLyWLva6UfTV6yrAUi4CxeoM2r1qFpALpZu2U2iZZG3b7ca4vxd9RdFW8ubmwp5L4JoREg4mt3WH5QN27",
  "key10": "3u5PRiLfWSdLrNaBY1WszhLDAyMAwLQpXXbUVHxgduqMP1AVhoHPDqe5jjCqukRECDMXpXYf422yZsxj1KiPHj1s",
  "key11": "3KtWmmgYKXCEwGRDEMJepS9CFg4e3Yih679u79irTHJwvUinJtAYu1JcXBVB48XWxjTydPbYPLkQMJtrgxJcF9a7",
  "key12": "2GKgET3V9uShZqAahmmnqNK2LNioJ7YUJr9yEziY9Ddwf4r7mhV6pDKPfx6YQXZvuG9urghvqaMKjrSHJrgD1kGi",
  "key13": "4JiGkU5L4ovVNkzZBoWP2iiQePU3pUfPwfgyBUXwvLRhbiCAAwZNL7Ba66ajuseEJe6JcNyv7q8z9zMTAb1eZNLm",
  "key14": "2zfunVmaEa59bHtAdBaYCyNXbEJX4eVEhNM2kDcdrdEbzKvkTRuZ6ARqvvcPS3pwyD5NZawvjdVipqUtcCciUddm",
  "key15": "7ZHDj3KAJujYuo3FVEErSqa6icat19Ai2EM3tdALVUwtgSz951eMJNGRUu63sfwXyeQG7om2u6evYQ2u4FcsNjS",
  "key16": "3WPNSM58sYBCQZb9PsuGDfNswN7GoDjEZZmgQ2kQmzjV4Am621KxFrFGNUSsXzHMPk3GPVjf43MC2MJgvM7McUZr",
  "key17": "42JH1tFN3U7Km3wBL7s2WgYdxYzeNcBcNGLBmanvWkVEzJnoiAbQeDWmENniCrNV9DeWc64hxV4zGQdYs9ytDAnh",
  "key18": "a8m8XdCTm1aMVm783eCL4XZgehRveK4dTNnREjDKPsKbidA4ZMMoqwUZmEjeW2ZtfMG6Gp72KTJMUP7cFGQYa2A",
  "key19": "3Mk7Vb5JhRmkb55ofvdY1MytftfnbQpgNKnMcPncNNXKXHsHa2b6rypmeyXMn7bQhdGmUDiTLegEVWKzxHEonaUt",
  "key20": "26bpERBd2kEwDBfioSA4jYLdkce9mCdbizE8TSD4oaaQ1GF3FYTHgMTRrCHZUr6KEMnfJkuiJb7PRcVSY5j7i5y3",
  "key21": "3eHbHQbqrW2nGnjXwYPpBk2NVPGSp4SoiD2QrUq3MG2R75PQmW9Wabz7cnbRvXDXhUMehYZJnQFjjCwypVRjPy2U",
  "key22": "3ZMBeVZxCnHtvFC3E2x8sTiUFbS1Rcy5yyY3uWXsxEVMsVreSzgbGYG3tMsWtyK4XfcpEfWg9uVPCAoXFLppHVg1",
  "key23": "UAwfL8zBsWd8KRzpYdzsB2C9Dxb7CVtp9Xd3A6HrPygtmZYwxHCcUbnXQzx5ZF4ymPbPerKHXAqBQRcYPX9TuwZ",
  "key24": "GQmLR96xJqK9CBfUbDPF4aQdoBg3b3crDjijg4EVi9NZdAax6SY939v3W4DEutyTEfJ5HdL5yCA3tQWeDd13YAZ",
  "key25": "2eRsHyt95jKwqbxyVJCdmmvUgEotaZHxFH4Ma9JVZBoJTa9ay5hoMdCiyLbe9MRpPx4Xi1d5JPByTnHkJ5YqCgPj",
  "key26": "3Rjcs6PNsvbNESGgiJDxAchmopR6uPULan6jbgSpbGmsZeKzF1HzcUKWDYmBqJQZFRxCqipiFWEy9d8QUz5R69BC",
  "key27": "3U2Na4TUNxMumJSs8DEgzAqsW17UcENmTMoNpsMiVy9a9FrZXDTXKcn1fpEjjYxeDsDdeGNo5UTSXeyxVihvdRsN",
  "key28": "5zuVHihACdB4BfEQRyC7mtSC6G4nB8J533Qh27cFWZvKVZuA278tJxEwDqoB3Fn6Y81qdZ4RkUYvwpRoj99KBWxt",
  "key29": "5igAJEZxDAwEKEue8hUpshhEi3TCzQcu451sE5mBw5cg7mMPghCA7red3oJn21S3L8NAA8vDMaV3FTsnpE1AKWjj",
  "key30": "25zsRsGchJtc1mXEor8q9xHkWsy3mbvdgqFJpL8n1JswFwbpvM9eGonVKhJFS2cbsD74nuKrWHGKpC7d4rYfwnAE"
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
