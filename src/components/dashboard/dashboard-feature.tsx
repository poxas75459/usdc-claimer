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
    "4SHLsyAEe3Y4GZNRdmBuiRkeqeecvRs4r3NUAJDKnmsGmPwmi5xfn6fUyqj34V1xjiEgJ1sjRVBQ7ovJavg26dN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hRJnCPg4LPrFTWtUC9xGMaAubVRdxYna9yuac8tRcZakn9oVwu62XxGd1w3E2Mw3Aia3Ek6Etce8uy6yvtYMWK3",
  "key1": "6JChtcAfeYWAwiUJzLaRBWtX3TYxW8PyqgJbdexBrEyvADHabvP275LjJdbSqzbsd6iFFwHtjDTVa6Tb38Gg8q2",
  "key2": "2KawGtdzTDVLMbh5fJ9u4eia92rsy4rgKkuCxNUChFqjxFJWXAFNwMsP4tthUZqXbcVjEqz5H8fzxBubE3EpCHFt",
  "key3": "548Z9mWGa7McgxBps1YobjLuw1JSWdJnNhXv9yjziJxPwHRsdg4wmdxF9wfyKNBC789v89UeL9Yy29b3qsKhhNZG",
  "key4": "56hBBcvzUWeYw1ABzryXXXBCRyHeH6ELx7GS2wsB9xhBMbaAmMpdhpNe8i4uSdwZmGscbDvd17rgGGRdPaZ26LVm",
  "key5": "2etdBK5CR8WhSx3DfozMtHCYHcPUaE8PE8SBhpuiH8cJMDzVSRKJzKWr7WF2zMYD3ktCAjPS89Nba62ryPEv2qD2",
  "key6": "pMjoQg3MfCVn22B7btZBDJujm7iUK8KDXyFDP93Tdckxa7p85Wb4srpgN6kAr8UjUAi1HC8Htv1aq2KaZvaMyAd",
  "key7": "5ANho9dbFNrP64hNiuqicGFiksEx6jx7AjorfrXTw9WWKwLsTBsuiDEzANmaxXSmAcbHtFRZsGReyk7saAqkLCs2",
  "key8": "4gonqPJLxUjMYjjzbSdiE42ugdxHbQd12DsQLbLo67yjQtTHzcu67YbdypNeC83o7kQXkvcyvdu8pzJ89sEhUWXA",
  "key9": "4BCVUt7aXKcYdXYV3bCfnjQYivPufYkDEVNWouLyDp6M7ucNZ1CCXeETctbYUjtM1YyDp6evE2rNgPjZd7NgkqQp",
  "key10": "4cS1oNEYN9RPjrn3avqoVVfTzxxTRb3TVYqr4FMYwp4QG3PhGUpGBbHeimvBDvgtuzCN3jnV5Kd4tAFteCL5Cztf",
  "key11": "54rDVvmbm1GgmmsLZpZBs11j1eQpUjDMbxn4V3zjRmZFiECyPigSsCWTQAD1hyLxSQuHyoK6uSY93Z2FowXENSmR",
  "key12": "3L5NQEMbctmR1tfXpVGYgYXhBRoYnoJuqbvUhWKcWXWnLFM54AkhDPxuWn8uiuvoL8VRRHVqxLA8edr47aKfC2KS",
  "key13": "3C9mjC8T4KcL4q6sigHc665WPJap5fJ1fEv673atsrRXvUBn5zCYFaoqfidrJwZt19FMyRRYCFPiAGzLnyykM7S1",
  "key14": "4jD1Q7HmiDUPFw9QFR78E5ngA2J7QADTRakuUJXapmpM3QrXGK3Ph9FUHZUh9p3MLE1qSszBqYAQyFQSGJMRiMqC",
  "key15": "5XQmE9zQseDNvUwpeeQeXUSb7xtuNDEkcnoNknZdLzGMyfDgaDHaveZGpcKyX6MeMD5JhDb6pTPPC5zd5DYna1tf",
  "key16": "2cgRBJ6xd3rtbaqgxaiP3XmqRAvtm23KxFHeoDKrcSK6M7pDjXS9vc1jMeRjNbYK4Ht6uNk7ve2KC8CmtVTNdWHS",
  "key17": "2NtQNEgWr3HUPUYhpN92dW9EumCc9MzsHrTaip2hWHg1mHoS9YMDE4L23FzGS6V39hdNwP3F2WbjfopUeeHAbUxH",
  "key18": "s953KKBsHuKmUrPC2mBErXPoUAxrtqLQT9WouaCJsggemaGy78xvEuJDWnzcEdhRbS6f8yF7xd3Poy3DEsUhbEd",
  "key19": "4Cuki32JWaWyHeQUFhXzRoi9Xw3RsoUPFf7yfevsSsgomeAUbmuHfBBvdVrbeeDoFzQj9AYbCyXioygSdQuKNq8f",
  "key20": "2XN45hzop76D1tPP7JZwozuNYGiftSsBB5Q7pc7PZKLjcwSdnafhpD9fuajzdfQt8Fa1moFwj8Ps9yE6uRCsQAuB",
  "key21": "5UgLU3TwTpw4pTUCyk9fREySth51LgYWvXdjcM3wfe1xeJRj6xfX8hkCDgio75EcUexqzqDbaEpeMarYbi6jzwA7",
  "key22": "4PbhKjyfEfM6UucwoC9kvXeWSrzQ8QWeY5uCTToj114LX4kRcyupseGrgfpvj6AYrT5qPwj2hMWdhhBRmVxi9wN",
  "key23": "5GX15www1CYda1oNYCNdWGVyiQY9AL6WZeXfh4mLnrDJM5RK64AgQYwmRhaU6yFDYiFVf6SEZssZisqTyMyfzadK",
  "key24": "4HR8XEKRe395hrP1Axnb7CHvmRQeX2bhbwcYMf6SCkkVn3cFEbcHgqczA1hpiCgScwbsAojZH1Y7rkXoVTnzNz8v",
  "key25": "iDMac8JhV6h2HYGtBtBSzD4PqVdq58WLkcP6o214gbq4rEvN6yN8rrhQ7cVGM5szP1n3gAJfNerBr5ET7eF6XWi",
  "key26": "xJEKGxxoyUAmVqqY8cP8zusqyUJNp2H62NyH4P5oh2de9YA5yuVcxaox2Jut22BuAMfT8nBsm4u9mx2r8dywNyZ",
  "key27": "2yWKNY9Q9ZnM7AR9ZHN8y9gGwp6SeerUZXtMuZnhuSWY7VAx4oZ7d1CmKiRbE3Zm5rcAaoSndTdEj9QNRSmQpWyp",
  "key28": "5pmsSgDyhdc79Ta3oRvsXJRDW4SZN6tpKeosMTfkMGY6KjsdqkRd5WzdVeGvAQ9nupf2HWryVkM1bmDvcY9PhLXJ",
  "key29": "377kyZLMcTdECkUQcyrkrhLKFsavaRGnwZuhcEQRjd7pjhAV8Y2fhSFHd46KVtCKEbSay8qYxyeDvnE2Gx8prBde",
  "key30": "2HniHfsFDkWSh9x9UZ4LcvVN8gagvPr6JAgmquwxFAQTTMZtSYJ82MYtPXYiPQ61xTZffnqR1hUk6zPEuBSfDABT",
  "key31": "59ozTX5H3s5kaHZg6FKFaHgf2n8Fjcoynpb551qYpUDtebyXGsvTm8VVNM3Rk3P1zaQoNBmYafNsnLUHewdsjRiJ"
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
