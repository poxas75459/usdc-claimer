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
    "59jih317RotDfUaC4geg9FZagJa4PJDrXNkE862fQxxuHY1B9fKwpLVLym9boQVmojYehWxkuukoe2AuXDenLqCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32STvyoNcT4QTv5FPzL7eyNeMiXQ82vxR5J5LEyB5NQrHdmtmQWNthkB2qGrKiqvcRHKJ67LswuYwCmggTgXGwnL",
  "key1": "58ruxrgXyJP739farCJvf5W47qC4EkKXgaQAYksCmGm7NrZxUaJPrtLV2k6MCSwGNwCP75Nh3tb3NG4MsKuEhcTS",
  "key2": "5gQfonpMkonEKSESg3SPWFqf7vTLE8g76WgYQsmxqo65aCGyf3HAfgEGDNhxgkYaH7opExc2SwhbUVExWqj6Fw23",
  "key3": "5uMzaZRVM2c1nog61JqCvd3s6BnhLURAeFLSETvzwPa3Di4o66wVzNy9vLducGsoTjM7SJWrBXNUP9MB8nBGiGJG",
  "key4": "45cBXeL2eD3tzq7AWnoMg5CtjivixJhV6NNXeGGtruP4QTDFFwmRAcXrmNgc6cBcMHC45pK7qi8K9FMgEJDEXTCv",
  "key5": "4sHNrimLxaAuXfbHSH6zHBF8Df6gxpW5mpT1YUyj49Jmg4Ek5zgNXikds68uFeWpiaPd7gSmRgXj3t2GvgdSvvxU",
  "key6": "3yBbNoQRR4Kh84ioCGnZjmcqQub37CDu9FKda1jRGmsdVVnBex7RETVGojHQnTjfQjKkD3KRxXTz929omKUzcPHY",
  "key7": "4ZMJsLAit4fD66kHsUCcLcLVYDbWkgrwbWAeHqYB9PFxwrG5Wber3jjZ6ipmaAdMFrAEHLZGCPKZFouBpK4J9mu7",
  "key8": "53VpA85yFr8azZKvGaoELyKUAEWdjqT2LuxVXZe8Li36JDiHaPshP6PZ8KFLJzwhCJqgqt6xp3ttCZCuChkeQkzh",
  "key9": "5TzYLSV9ERDvsLeZaAaqtZ5LA358iMw85mb2uCagWahwGrAsviMKkYb1rDUbYS6FPqiEdQH6WH6v1gTRmoLC9dBA",
  "key10": "5KRL73jL2nbCJ5V9tEoHgQuuqn2ADBsUiFiCEHbp5beEpgw6Kqt7GAvsDQBszVae22Z2pvw8WQXX6GuNJw7hHHbx",
  "key11": "2hwE3Eu7Twg2wpm2JX46cUcUAx1pQUqMApmwhnFB1ehAHyqMUWrowZyfLBUr6PZPNMzfPf7X57yAyWA4TH45wJKN",
  "key12": "4bX3RBmmzmTngSjNqreZrJF1S21uAs63musqJ2FRrjTWSFqi7bzx3ixjxmDQpSDUuVKNkV8LGviiRJgbwGy619Rs",
  "key13": "2wsZCDoV32tRAUXXKK1g3eMW9JxXmMgYJFeC5FS3bWZZ3tbUSRbQtpSMuzye4USs89LwkPvbLnwyybPxiCWA9eJx",
  "key14": "m4VW6fSBJV7gCxUAXLSnyxaNbXtr7ceKhN1uQmSiScfiEF3FaPDRyJY1JWdP1E8XF5eS2wufwNTk1drdP1pFpJW",
  "key15": "443RUEtGX6ZnMEyFv5t27N582YcSxLyhC1FNK9q4uSb8kCKWnUDDvKCXzpLGBC2gcucHc38iU7jexJiBaaKvhaim",
  "key16": "3jjdwbP35BtwnDgSfSafrVaEgRmiDchKxPN5WrxxuV8LUcFszs952ZKA1aCFMMt8DEQH13pS5raVQgeRtpyYkW5Y",
  "key17": "Do31Lky22jTbo8Mnh7FS2STJQKkZ7tdmF54bhbihWJpXco87fAjFZwjfkomHTH4bwFdzLds6ERF3BjfHnrSgXk7",
  "key18": "3C7Hw5jyfKQkMMQb4CWFXhzGeTs7Cce8NWucwgT52Bvy2df7g8ncjpTGieBZgT66rzLeJC8BM9syce2jGFoRY7gT",
  "key19": "2vqJTMWorfA35V5wAkpgDB7wbFjRKHYaShQLL38YCrjrMz4Ccx63Uk6RF1mf4xprtgEtSbrYW6Vmv95sDgWehyqf",
  "key20": "65SVc1ZvP2SSaeSnAQ5iejTqSdRit6FsJMWiaG5nZKUQG46pTAhRLxLVqcHZ7BA6YmqekkTzpywZkuyW46eBf3CL",
  "key21": "2VEHKjCEsUjNxp1RLiTTQMSJGGWed6hdokedvfi8UhX23x9S9F4EJL1iuoNCLbtGj1ydcwoUEGS9Qyuj6PPrUAg8",
  "key22": "jNfafNyhnUQg49DwVqTd7mrFVUvPRhQWs6NkrFWxUzVRSndiF6igqJbjBJtPXrRniYqo8xFdnVG2yr9JPmbhroz",
  "key23": "4p68476jdWGsQXXBZbehsKawFaU6iQoV3e53whCiSuLcL9DZUFz2pgFN1xnknkm2uMoX2sFYertnpvfzfQn4mEtY",
  "key24": "5oSJ5oQ7We1NeQpo7o8ADGTmNfX9su6xe5YGXMcKkL3CfjFnzmZPLRq6VpCLALyCSRZmyUqdk7NqpBZRscYNo9P4",
  "key25": "62NiptW2YxJkH4BLX3Dcnsmop3giXcmpfwJxcoJ3dUkn741nLH6Hy2X2Tr8Z5731Ww6rA21hHNeqqCSe8n3GivQz",
  "key26": "52jDgmMb2R5zC1ooYpZfGxzJSFLfBRVfJuWW5yaupdZLYpcoWAy6L3k7X827RCVtxPwtigtMSFxwZKgPy1FgCXyf"
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
