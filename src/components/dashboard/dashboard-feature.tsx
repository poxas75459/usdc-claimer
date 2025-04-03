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
    "Ni3SPsCF1sx5Lk4wNnoRLpNy5S6981e2khbjpHVaGEDPizdC7twM38cB24nhSJcsSF2PsBRAYtdpTFz5knCNoXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s4f5hcRFKqnPNTEvqetGbJTXXDaNaLdHr2yWR6akCv7AN6JQ5De4AR5ZwmYtVs7yfrkELyCeEjLCVKi6uciVDoi",
  "key1": "gjVTqQq5W7RugJjzJQVrUR2ggkAPgBaxp1TLaBRRRXCasrfnW6jouj4prjqZ73E8mkJMhHPk9p6hGhH2UX6A3Ja",
  "key2": "3uKKEaJ78z6zfedZK8SgRstBvLL7DB71EPZ54mAsYgHZZ3CkopfTZLMtCb7tjQun6AjhE19FpWoGN5dYNDxhcffs",
  "key3": "3ECAmYMhbPLChP26mZQxRL8GQ9c5KMMPKZinm4EFdqUr3MjbcaTuctG6SQPhSjWKd2maWeHi1XRTVhb8QqPzkRFe",
  "key4": "67KMYF1fmMT9AoJScQUp14bHoGYVXynAmHZuFHajZQeDE2o95x3MeFVt7dXADdCv8VUFkbQbQgkMr3rRcCxMTdJ6",
  "key5": "4Afmwa5q2XSxXKekg731Vb8xTq4YaoAsNJui8pBqf3LiYTQDvtFSzHgUk1bFSsmsbbewrcmBgr9TLD9chShdUM8n",
  "key6": "2DA36pVnFPwcCkKYUfUJtKekJj84V1RVTPYZs7g7BQYodGyRQ7DVgwYhuGERvHE1uLJWRKKQDsXC5aYRahFyuGzH",
  "key7": "2JNNT8XFaEnFPFuDFeKvBQP9t26ZfcDRsbvMJdhCfJK7y8fUqVnkVRc1vMapXZ2ngoPSxdLyfb4nY6eVPcfBXAeZ",
  "key8": "5tFY1RWkky8wK4MAEHQoJnzPdzsN9yfzsqH56c8TLbvm1sJpoYuKxDexha2W2QsuBFWhZjJJ261PntQLxn9Dvo97",
  "key9": "3kvmqrzuiqVbQkKbRBSqhTBHKnBfVpX3FcWMM81AZBwRuFfzmfLT1pjFXFbeX8P1cN9VSZbLPyH3FYsmvMWPyyoZ",
  "key10": "5ngzbdHEggUcuUVgeWWQnHqcTVecZ6cYqf5pu9V7u1MtQznmrKaizJpsGdQCLnnrdevhsuoeYSAYGjiKZDeUj8Vy",
  "key11": "m7UGkTDwV1G6LTRHnGR2dTXjziB14QcrGncrz3UezZweEoCh7qLy8RnGFcFfNFAkueBTdJjaFVndj4zdV5Lph93",
  "key12": "2HddTYMqn8rWRWivwW4E47u2C5JsNtgu7rKLcgmGYSTYJjKiF5ZAh61TwCKM42CTA2QDXpnJ8PvLBSCLeKWd2EWu",
  "key13": "K6efU3KFw7m6YRcR8Z2eQMBENR93ZqFSjy5W5ioeuSCmV7DJNiuXHGKw8uBt49sQAd6Z7Cn82ykFTv5BobNQ4X4",
  "key14": "4UKbWyxFphZaxd9i2F4cj4ZTPjyc7Ly7AGasFh3yGDD9x1kSHpJmuxFzSB2A99ZtvDE2Lxie6VJwRL2TimhydjYA",
  "key15": "4p3XnFS1nUunQiFKA7XHuo3gXD5n3umGnowt2yjHW5mLm9qGKBcV7nMxE8H3kk91oMSjHNPp5FL9kpik5MY11Gba",
  "key16": "5WeWcXCPxvAnU1p3srHk54uq2kRZVYH61redRoNSR3QAaiXpEwbhR8qdPo9FxtxcGHqtQmVq627eSYJr3xhPSawW",
  "key17": "4yGAzAUCSjsJZ2z2U2vJdGjRWLmW7qYy3MDuXeukSQyiNqYo2fdw6V1eC4kNZzpsQJ6QFdiy7qJnSZ56M93CTeqD",
  "key18": "4kkWg94a5uCL1gPQBPjRRYbvKRpy6AsL6yDrW5N7UWhpEqgRDdh3kVp4pbff7gtL8Q2HYhhX93QfUqiy7Csjmoub",
  "key19": "56Kx2ddypxPbFj3j25rTHL2L86iQLx61VvbyvCUYkmiLW1ZS1oa1wLXkZrBoQgPsnHyFjKpn7Mr7nWnFRrLhBwRH",
  "key20": "FL46cewV16ySV91ZyPWdS185RRQqCtVCwAxxfZwt9YxGFWYKGGZ9CCKaHENStMR9byqW9vxaoZWF4unLGCjHp33",
  "key21": "3kvkicKEc3N6ne7MuATVjPkvRYZPW9vsnkJVadSQViKvdmGasrG2ydPBoQcn3aEyWovJSiS4w5jxfbBkjxyXmY1C",
  "key22": "4jos7L3ALbjorrewABUN3Q4QHYJbVvNGDQtGNC36kyGq2Z4qwK89j4noPLJ1KbqeyVxmFCFxgSTg9KhiGp7fdAdo",
  "key23": "3aRA36Rxg6pncQne2VTrHQ3TSv4ct3X915kBBMpw34Sye5LMQoAdWZf9uXYmucN9oyF3nWaYrxBPu4mwBUJCKj1H",
  "key24": "2dPCvLhj6JM5QAYrZgUYtwHjdHkKdvHw6tajUkE1QgDfg7ysn5G7D4t8gZXTrAmg7SQJCtrYePqN6LLNCfQ7NTFX",
  "key25": "4oTeE37ivZQEzRrkqaCQsfAiCzjWUgdnB6qgSSroACmrKJQMKBfkV8LE1PeCEVt8Sy32mmHMB3fidUN64q1rHz87",
  "key26": "kgW8tqGhUo7BWFkRRQ1XJS2hf58QoDWS1BHFQgbf9zZBeKYE3BNQhfkG5tfYv9qKndStQgY3f8NhCEmXAPR1nCm",
  "key27": "2Kw1hZL5uqVZxYDX9HH1ni6kSCqsFDEodmdLMuCmbfcsc9Ufce9bzMMh8dZzd6X65S3y8McxEapunhoyKG7SR26t",
  "key28": "3K4bk5KAkiFnRAWnT52BNWKjKUvDUZLtNF1KzCUXvxRuDjVN8Mm3kNPixi8P17wtmBbrAQ9bNWm884bGzFbhw6Nj",
  "key29": "4N1njJDe9SXBdzycGWtWJjTZFtfzfJ1c76Pve29eXBmzgbwoLBrQxPLa5p2qYZDiDPMpVzRHQXeUUWA4nuPzAiLQ",
  "key30": "4AV5WsQ9cKm5Mp9z2bX1SNTZ9aVyqMUrbR2vZzaJd8m3j9HRpYTJpDvuFDQwWCJqrgoL5rt8jwYtSUCXaDQgynm1",
  "key31": "Gy1RG7dmQqPBivgyZYyGuAHHbB6GNXUYrDYccJaLfon48SWRctDdLsBXXMXbfspg4pWqnk8ttBcpj8qHLUzRBM7",
  "key32": "67kq2DbV2dkmzd8HSK4XseobqEK6qUS87FTTtCaqBBegjs3GkFNXhiK2g7f6CcS6xPTy6uzREB9MSUgkRUgNDdhr",
  "key33": "HFGBgJ5UkF5V7T6xfftKZT1xhmDrPEF1EWzB2Rc3YYzCms7Mq8ErDB3VszBp1G82EHBLzbwN1rzCWU4cRSkHu81",
  "key34": "1jR6GUfWqaYW2Mfac97Af8oMY1Pcm3R5acRVgG17WXvGPZTC4qZxQpj9KiPxghag216rwguj3c4uWhbCLdLEcQ1",
  "key35": "2EH2RiaFSLALekxjqjkpD6Q9ZYohtGxujiGmWboHw18M9CD5tZcvXxVgm22VyxL13PFQqCuxZkboQJm7cNacVkQ5",
  "key36": "3FJTupdcc5aGkR5AY3B97JUDnU7511isR5qFyphM6Z9MmePh5V4MzRoKtzizUpnYWusjvZQoY2dGC2sh38LFKZaf",
  "key37": "QwQL1wkSZXcCBnSymB4mdJQa3yb1RyAL96hDy1cPuE6nD9puLpyUTgSQ3uSPeqS3ExMFuZRyZQ9HsrLJaDzhCqP",
  "key38": "5mvtxEXDoMsaevdiGc4vQBXiGbeMyr62NtzYvnUaY281CYdXgaLc7YpEL6YzRmRjBybAM9mt43zpxTmAPuizuGD5",
  "key39": "2qxGLic8AiumWXMDhHZDLF8yFDS16B1wC7AmpxAt5LcK9CUKPPQxjioCsY3yQmzv29pVWMrDQ9XMLE4mvxP9oVm8",
  "key40": "37vVt8R3RLH7HtQ5JsXMUMuCZ1ETHQybrA3pAK3swsmyby4cDhsN1LhBTkdpH4zbZZ41hsApeUucrGLodHSDqT91",
  "key41": "2W4uLH6ySo8jz53sd8z3B7FyqGH3U2me8PqzYyEuSZMQ7nk3uSRQbxBSL2nSXrCD9JReL6xNZXufMf8wyiA3R3a2",
  "key42": "2raqCvP8JziS3koKzvxUWChVSA6he1hSR3mgPHBm6Z3Dc12z7E7pYqo48EUrk6q5hWeZRZSU1FUb9x5yEjGeeK19",
  "key43": "5FkcYsQHcHR8J25GvcukMqcceviQkJhvnWBQZdpQkQQmx7jr9Eku4Ghtfbd3wUx5r8D2JBzRgcroDFtyVBBivUHV",
  "key44": "239zUVaDsMwPUoSamUBmNEMBVFXCWyvgX4SVoFVaJuayFLRuJBhaqKxdhmgzdJgQ926zTesSudJ4nAZaVws6RhVM",
  "key45": "2ugFJumDPBWu4asfB3jCimDSGWKkfgARfnn4UQraWw1BB3cDQWSjqW9wQUQcsTxfgrGFFAT3Lj4Ni46FQqqQKqat",
  "key46": "VvopqnNWXBJNeFqQ2QBX6NfiKybhsRRFz366vrRpWYBZNKUdtYNCntK6UfT3wjCYPJweqHXbK4Zn7k27oHExTzH"
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
