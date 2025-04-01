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
    "zY2apn69JZuLkLUdnnQjp75zMHgJgUjiGmXURQJj9BJTeS2kZVoscH4JyT9yA8NJjfNEvezWFLTG33VJiy8TTeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S2dLhNV69qQVADigfA7EbJuj2uh2VnAQx4Q7VUShh5FiuiHzJk62WgcQqfVhBHzSMATwB3X5goZZDXGjMz928P",
  "key1": "64pwsnJ5srojghnntvig87kGNrBh8ytkPwpBb8jaa6bHTn1fEgtbbaXpLYh7oEG2ZFejByTV4J1sAXuXgHBD4dHT",
  "key2": "528U8Sm9FyCCUZrGdgJpvPEMaCfEQYKTTyfCNbcES6UUeeZiYCJ2pa8Za5d67RYsYRUAZi8BLSNnhA4hzgBUQMei",
  "key3": "peVL6y3SrfZfCkYVvFnZudu4w43vcNKraFADAL545X3rvUwz9AmmMAVoWhtaAi1vadkBMf3oSJFBwFd8CqBYDdz",
  "key4": "4F2W9Bot4rWVj7AbKzHg1URpmD7wXxLtNZn8JRsHbrHq3XSFrRrE62ju2kRbNsJzedEwg4H3uXw8EaWDTkUA4cTL",
  "key5": "2qEKGgiUdsauLreVdFoUSuJtREbs2tRdekShx7nnqYidHiHkLTbRAiYZgcRERFH71Y1Zte1hfzqrFyY7ufmH8j4E",
  "key6": "5VcN1BLViY3X45NwcrSEcU3zeizN83YfgwrVRMCdRv9xxgdJNhMwC8yFpHWy2aUP96prXGF97rnRqYXsvScCG5QQ",
  "key7": "McYZU56rxeVEHjW3d788wWQ9oeNJzK15x69fmRnZVc9hMpW3W5QZgCXayDdPLwoUFnpaaBGczsYpZtzUHFdnn2N",
  "key8": "2k5oQQBYWX2gM4tYaTivEfbWEaeQFCcW8VYgFX8otrHgkhm4j1VJPG7dQ5Cb7uPoiBgRBjfyEwFg7jtxX9yt3py",
  "key9": "4tawuP6QMjr2yFT6gMth4zhpqP2VBkvp8sMvECKbZCpysqMzK8W1Bj5vQ7kNTygx6RoXoXtuQvEx3LaZHeEW9GQW",
  "key10": "4hWXQYw3sFT7kY9aSAAsRRtitdTDZvfKvDGRbJyyoQ8Y1eioitLFUEQTwjp333NE3t4if9LvT7j5cVs1SLx614eQ",
  "key11": "2FW55cZXZT1hLXcvAgjD9BegPQCFfcCJ1CXsVjW6wLW6rFiWYNU4yuhHa6TxzXiPek1a73mN7qtHgAQ898XUdBHr",
  "key12": "2wmGshUvN5Jn5yTpTpmncao1RDK5PDktdN1MnF3bQewSbcGn4x8pZDQ3HqP38zgySPh7BDoJeERwBjSckw4Yw8cP",
  "key13": "4yCnaUa99mhVhUXXWdzkBVzRtpMvRRjwHV4YaBKuoEnqxjYQGxLem6kxHnwYMH3QrjoF9Dz3qWcNREshAsvN27nD",
  "key14": "5PHY3Bk3JAfAyNQVZTq7h8aFdaKes9zVjYAdovL95Vv181hE1Me3WXJXEGH8N2yZvfPxVjvyTwA8FS34an14S1SM",
  "key15": "xvbDY4Vd2i2DZ22dzqALxpQoqm3yJ7njieSZcrpwp28eANZiTqSQJuG9DfGX3VUuph9zA2Jp5T1aAzmyhg6XVH4",
  "key16": "3DU6JYKMxJnLgWaAMuZdkhwUTjvYkiGS2qJyCSswdy145euifWdchXeoBYFG1aVBz2hCVnDyMGPzako6zooFdxs9",
  "key17": "PeW9tMFAjyrTFtp2taKgZ6ZDV6YDZneGPLFhFacTDjgY8fCfrokLD56XKRaU2yABi1rW2jNYUPmsbH2NjC25Ytf",
  "key18": "4JJ6M5ALb5R884QysdcPKG2tQVxeGF1RRQQNHV5t5dUMfeGv1NWzzmdHLJYSSE5o2aggYSmcRpgMvseviCfcPiye",
  "key19": "2yDcBu7mRULaAu2kucBNfgKRPFYYCiSDEYri5deGtRiFw7UVWgXUvb3b75zDYX1goEpYCGcEDmdPcxGEJpUoGYd7",
  "key20": "4weBYAmfZcHFQtxurj8LkoMqzJjg5z5sPtwcY4NwfZFD57pPmQbgUoX3RrrgBhBNoUhBYXUx5eSzUJ5sBgSNzZug",
  "key21": "4dXDvz7y3Gfb54Sd4FAtJZbkmrmnMPa4ymAVFEd3fVxK2hBy5E8VjX6vzHEp8EBqXp6SzmMLq511fpsU8TZnEqfW",
  "key22": "4Cmbb41h6pexMbTqkecAKDbGGcfWdjSPxNAs4wA9Vhvfsbpj7wtq88SD8UUDc9ceGWyJzwN8tkrLXScwxcC9VKvd",
  "key23": "2fhtFHK2UVAkms818XAdcMznbi5LZqqpJsRp7gCPxeYeSLv4ALfYD9A22VKtRpKnmPiASjvkpJsCbdSUDVpUuDke",
  "key24": "4G6J6RF5Anx2cHJd7Wjddz7CSyHbvQTyseY6Q3qrx61DY4pyUNjt7k73ruohEP9vkr1S5kXpaEAK8Y8c2Do5Lmod",
  "key25": "4QbQjbv6xP18rqj9fn5yVtyRuBxmbQJJRrSnJM7ikdLG7XGPCpbg51oimGUEpcFqhNRKzhr3GceVydpBrursPmMh",
  "key26": "2eTXVdEUCLqVoowuRAiyWG3gU4ihgGP8P1BdcKUo6NMdS82CALkQjGuNd8MBLVjo4eyPTqeHuitZoxzy4Av6xbnw",
  "key27": "49UYiPhZibdccXQBe42x8ws5wqck7gbyEpQCzPDQMpcFBt36841vwCaCVggPJzTXohHQjxSqfdakFB9URRdQPSsP",
  "key28": "3VhDykKkfNb4cX8T3Jh8yvJEfHewohcRPR8MrFgj2mVNjUjrn297EhpMxQfc3joVeFwXLrWzAVByyrgmTdZsgjFh",
  "key29": "5aPfZBGRddQ5Fzi3tHfFajSipXiBHiGqesiBGjatjYk7rb6w966rT2pqGCFurfdoqYMjRs4G8vFRhB6MiC69jFVB",
  "key30": "3ES4t8YnBbv7Bt7oFFiQVEEGxSjQzaYgj38rqFjn9V7hA6UJfzmpDzyhBGwBtd5KR34cTAyJHqCJvkUSLXLUFTUm",
  "key31": "2YJzyTvKzRq2sMBpReBdWuttniAWmFsZZVRspaRkDumgkx5K9SXAoH86gMybCNyaV2DnkUVLp2HByB3L1iEyraip",
  "key32": "YrrKBqDzUKPe187DXPWXBpXbjC5qttNeVwZka1B79zPwEw7z549UrrnrfykQQRWR2wCGbvEuZLVwd8F9JhinELu",
  "key33": "qLZnNt247vm8MrKeAv2YmJoNhtUS6LLUoBRwGUytoFZNgGjGnCU1CMfhnkoNqCQdL5QQQwMW4VdJAgcJKzofctH",
  "key34": "2XdAErronDGYqL7cTMdfBFBChcXTZN3uxtW5Yq4Xdp2Asa5SwxfzGQAFPwHRN6jz6nbXaLPVypmXBR55SofEHnoJ",
  "key35": "3fHBfV19M4737HX6CQjGkoLcPCAS7fXyUJizGjmruSt2AJpFitXYS91ECeB6xaxLHG4qZ2k5AuAHt867PtaXLdsB",
  "key36": "5UkFAMMwy6H9TwGZ3xB9wUyfimoZ18KTAfBJnxn3YHebQX9mSuMxWgbkbS88pBVVDf6A8bxBv5vEaWkDfbMMFiqW",
  "key37": "3Sgajgd1ocivXKKqfcEJLfx14oBZuGFn2Xgn8DkLwgaP7WYtgugQCue6FGDxF5bsC1VUfFRgKjVGHAoAaSELyADi",
  "key38": "2m66HUB2xtdQ9gZU9eqVFRhH9QxsuAnurFD8grczvRhubVBc6iKAEWuRgwvx9p94jZ2zTLYDsf99cgvyEK1g57cJ",
  "key39": "4Kxurb6Vnjyb5t9SP4f87paE3L8zEAhj29WuCRbi1VibeboVh4mTs76u7n1t92eQ2FBwtwoxryBBatFfMG9NDxWV"
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
