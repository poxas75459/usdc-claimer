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
    "25vcN41zmdLM49x5S8KmqeFT3zKQLMFGHkhpZPoVBxyLeLtCinHZgyHPyoLGuwQkfJJJ9T6JWcUjLKrm2oKHk3sD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h3vatSwMwbzzm1eucCU1kX5hmCstnnLHC9DFo66cQ689FZWs5XwSJ1SQQXkq4crAwCvG2xh2tKhzbZz5JtQ1se",
  "key1": "5TT8wAtWD2wyT2NTUe563iDh2ddgjyMiLB4duEZ4RBcx8YFTVWzG15etqazH8LaDruwPLSqB2fYT6LQm3vjaGTpg",
  "key2": "4EnCRF1zEj2PPXszRooX54syAQwJt98oKMVJK68Ud2U2zBB1C6mR7rYSgfXV6xmQJ8dwEQ3qJa47beDkNj1skAiV",
  "key3": "4ybcvyz56g5G5Z1rSXhJP5QJfJbTZ4CvMVeyCKj9PkbfmhUqjqhDLznjiDoYPLV8XjKwrgHtomx95vFhhj9MT9M4",
  "key4": "3ikhZP4iUeUx6SDT627VKs8itTYhogCohrLYvSt3Eo5gd9zdmexNH9LArQR5anJLuMs8gydFQwDJQNowPhXKrmuw",
  "key5": "2czipib2vKu6uxDxp87K3mQ7ETqkdXCqgm7YGtEXbgSPqRCYxeiVV4ChXFf2K35sQyvUqbD6SBqrx27VtAUcr5pd",
  "key6": "PHupYFiU9pygt12j6Kw3EEYguuMf2QnxuGdbKPW5P8ugMqucKqEF8pMzgfXaj2J9Snz4VjodVL2DuWPGzZ3ePoa",
  "key7": "3oJ1QF3o1kJcAhU9vKYmCJ3aFQErdjAGmjQuqxet6gacVG1V82jvsAKfbokKQ7cQxoYv9PRGcvThjaNafFyeADvA",
  "key8": "2atNoDsen8A4R1jWWLiEKzZLwKgGbaZc35zC2Fxcd36f2CKmgcRTvhzRfa6xAkccWxTur3fuwamxiDDLakyurveq",
  "key9": "5rEAmaZFTcF6WukNb6rrPNsge8VEPV2UrybAhHRYtnQCHXQDMB8dPkJx6eL4p2RUGNeoNeVSp8w2VTnCeuFcj99j",
  "key10": "t9gctNiMDPhqRZTeiagxLoJstU4KmqbfhU5BSh789RcmuyFH3biH8j9JQaGGc1pbp7x6fPkjfejrJQh54rHdB6M",
  "key11": "5q6dtDmxLNZTEqMVJi8FyVjYonisPvtUJ322A3a99fXxt9sJR59ib4wLFFzSbGFaSMdsz4Qe184BmU6EZChtQJCq",
  "key12": "R2ugXQRgutyUUZp1oh4LX7nE5AgyL3r6beit6J6yBzMPeVGNpc3XN9jd3yRdBLvZKRy3QeFNVYa8uThvQ3ENQT3",
  "key13": "tm1ksPqBT7297KAPSFZv9f6EHcMD55tBof8x566bEsrKMBJsUXe2ugReaHoYVFciLQ7fEPEn3vM328PpsV6mFJu",
  "key14": "5YbsUtnBiWQsdQ23Wm9gGKN2mZuhFDShv3TuSUPJd3oiyLPCx3BTA44BqEbCetQceZDoHR5N1rWs47pAcgvkZzrg",
  "key15": "59pgcpkG3e55NNkXzr3MjAxB1u4GwT7XCtQqLhgP5kBNhK14UQdtutDiNLn28yN3KRs8BNVd6mZvdkH1bTqWkJj5",
  "key16": "4ydoERatY9RqnkYKx3ZKvoTr5Wcr7WiEkFDSQNMq1Q1eUtdsbzc6k9XhfipYV2SX9UxKrPiBy8Fyhiy5gvn57SBk",
  "key17": "2suQ5UAaVtTLKdSTT5L8TsdnAfDTB4zyppW5R8aSF94koHvnwPoUETY8WFNx1dUEJSEnDqx2pdEfpoiXQiKUWTQ1",
  "key18": "5HBmS6yKQCqByrsyHeCABzLyquzjzLb9dPa3MEERvim9EToQcTRVEHHf33R3sHseBBTWkTmGJ1Bzy8JgdKZCStzj",
  "key19": "2x2tWMjCWAajd44y3BVgkNfkdpLcVKrhiHCKfpKi4SzGwfhgu6eDUDgbxkc3EHk6wB4rHDmJcPYZtNfXp4M6fLrB",
  "key20": "fYpmixd3PJFytHjH7rYcBaose1Yofe71TjuZAHpZP3gaqZR66eY2GcPRttjh18zBCy7PkkjwnYQPTkNAEwQCN7n",
  "key21": "2P87hgVqLvX9p637YsiCGyX3uoEu5EEaXsKZsrx3YbwvVFdNGRp1wH5zqqNcvLZvhdDTQAAYRxLLD32P7CYh33ds",
  "key22": "52NeMvAx2i4gq1q74cffsmBbsNJgfbPTDpUQo2zrbaUs3ab7JP13UTFk47VxRi6ZdUHaRBANdJJjeYG9SQjhbhXb",
  "key23": "3kuEJuF5Pqo97AHTfLQvfY5WTKxE5YVAWA5aFQ7VA4f2WzVtMcr8ztvFbowJB8HL3WHPRcNgoWFSpEXh3ZgdHHkC",
  "key24": "3NAcan62dTgZBrL4zPjeMcWiGjGC7m42cqVXeQmUyGKUdx9eAS3D2TJWMJPh2c2kUtrv6FeyDPTJAWcV6p2Tp5Uk",
  "key25": "4fcHQeTvgbCmeHfUXkJvaVV2qeGqrqtmdfjwLpEfQ6QnLYTKFB1SDFrUJrW52Y1djdBvrwcHScxpvkLj57n67M4w",
  "key26": "2N2WehcSpTSHho4SFYaxMA8s2X5HdpDhEhtA9XHDpBZsoDDDJTJgzbTcPfa6kyyYBjdLSjh3HRsHt4xapofvRjYz",
  "key27": "3onX8sBaG9h4bNDoAsf1bBAMYSAvYF7yv7RZAFVWzUZ4DkpwYji1NjLNkWS3sJwxsSkscMP4jjnrWe8CNfenoKS6",
  "key28": "3ULEcZzhf9KYPaJiNmS1wUnAd5s8Z4MP1ZNf3sHmaxnkVndZiWXirss26wYayaZuYD9QEtvLDDKpPMipdkcNB1o8",
  "key29": "5g81TmcSsJ13uvp6DQMsQAfkqtscq2Xt7v34NDUL5ddtTYaRFTgPxSxhSBnog13fTRd2B9sgFUrJ2hkngHkNZvMB",
  "key30": "5QKB61Ccr5RyNMs6WSt57RfWyKtJBL46xtHkHCUXXQ1iXKTTYyvUmiTP7iY9hZvDcgjgUSkZr3dPhBTXtYtM8dEQ",
  "key31": "3EWcugbwjgQr7oWnENMuNdUXabQPcwnNHb64vJ3HY3mTzLryi2N8dKcWfyY8b6r2Z7Qmesp7UGR6LFN9MeQJsoqo",
  "key32": "2QnNHmoYFAkfvHaeAXD9wKahAYgjT51X1RdfVm7vqsATedR2vmvjjHBXcCDqptQWVhw5dd1jFZPEu1KkQ9Y4mwVk",
  "key33": "3TNN2g5rhxUqej3on9iSQgS5Fjg4wzz5kdn9a9L8cUGcTGLboVgyWvk5Wbx44EW3rebuCPTAhazFJLRui9vFmFxU"
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
