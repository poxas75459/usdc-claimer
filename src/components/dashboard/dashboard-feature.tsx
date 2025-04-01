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
    "bW3EaNrnK6KP5PWqGrQ8XykYrBFKCQUmCZuuJSWF2o6SnEgGrEeEc4DWre6SApon43EbVLotjJaRmt3JJdxj2EF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GjfnKxQ9U6nzWMzPGpfs5tPDe33p7xexCPMBpDJnzqU7D8LCLfDGh45mwL8SqzyisqRzCvrGB35wY7mjDsALhLS",
  "key1": "2RyAGgSSoKgV5P1t12cjLNZUUmLtKNqC8ZeZon3qQTpPkFyiX8WzykqbhWkSRnMSfvpahBTwJLeJuMh59aFwTEmK",
  "key2": "4ZUhKMqPSkTk9oSqR3Wcp3rTs9efx66GqSY7zPiZBJJTs2bQ16zfp7VCEB4PNqC6xMrZLsounQCLDU2JUgb7UYeX",
  "key3": "4MFSax1tQea7HbiSrHmEmFYiscWV1dUpjGnpnDeaS6cQNj2z4qD4pBY6M1FAMF913LDnDyCtqfoAuDuRFLYqgzPt",
  "key4": "4iWbpDvYRG2ezYWBW1BqpBNEvaAMnr9GRwTUEfvHp1X6ECpXWbu3bxjScwrzRS9AipsFSR7C9GJoEMhfyez1xZr1",
  "key5": "3eREQxLbvFRnB8UX6HtRoQtKVtEehCBmLfRwk92JWC8DjDiaE6igFowgA654MfR6KYMiaXrgWAah2hRMLd3ZDFcZ",
  "key6": "2iM9Y3BRVwM6r3TrLZgVMBQeymWHq6NK6NytYy8jpYgX4AKTKtZXV72jy3Uwx2aGFBeW7EaChFmPCRsaLpiwGda1",
  "key7": "4hJnKZPkbj4Fo24m8SWYJDqE2Hr5owPV5tX9MKVfgDwJ8gArH4w5E3L5g3eqGVHCeBM8p8pKxJtq4MH8UGsFEyjE",
  "key8": "3i8tbHk4vF9MxeV1Y5FXcJbFWkYFbgQDP5u3i6tirrfxpnbJrt38QwoB6A6v5ewQHNcRVQSATBk71wFQXP4D8cAU",
  "key9": "3xjxkXVFkC6rcKev3BonRGQ9iYEQNropu7qD9C6fVfASQtd6VCqqHXbhVRAJN68T58r7mghbkNDovWRLCmAuLUL7",
  "key10": "5mMdYRTVKdxGPqR6YhQNYvei7hqhD5jUzNMycCYPMGQFTvJRx4fJ9Jy5Lu7stnYuyCmS4YRdekoPAnJd3RSvdJYc",
  "key11": "26eUF3QL78pAmtmHiY1ziSZEbD6iKswVNE8bznr3ppoLGqGACLqTYGfebn33skdzhYkzwuAroybhaPPHNc1nQD4f",
  "key12": "56BjM5g86i75gfbRvyxdgfaW3sP7Smqiu4zNEg6urm9wVWK37F3y4n9MWRdoHTV6PBnGPrbTNN4hpvxFiDDi95ra",
  "key13": "3b1xsrjy7Hc1B1vejcDkWCV2jnHL51Ap7SeX8Rd8n9iVKSxTBaYTQhAuFzZQHLggB6MUv18nQ7cEyrxUDEGqtB1J",
  "key14": "3ZkCxef8QopAjFb3F4KdYX8wpW5jZau4KrUFsK8fADhi1n6trhSG3wjDJkeb2STBbRzxXJXyJEHhxMkW9iZBkQhk",
  "key15": "2g54JqefjBr13rCz3VMfZ9pVKQitZgDSVfs1xQDwvWB4nMpdvecYd5NDM3s6u5DTENyJb7g9hvUHTajcrmbTpY4t",
  "key16": "NbHeWZ2bD4Ykqc56o1ULJSiecADFnjcFQffz64LjkLFAS6xQzP3nZGUcQVzYdC21oGowybusrWMoMA2GD92Fc8H",
  "key17": "5MCF3JA9gvgPw4nBSGmvWeyGHyFeaNKpH2M16cr5YGp6ZT8X5wtSScswaJf1x4ZuMaPVPAWiWwv12aK62NpG7Uz9",
  "key18": "2rmLvfAqF5ABMgLPbVX5gJYbUn64xjeeEanKvoDB813CA2wRVrxqBSqYsyUU4fLcduLXuEk6FWocLH6tHQV2eetx",
  "key19": "4fV67SfCrKnn4eUfCDJVTdAQNwHaWRb9kFz1ujNWvYdMkiVhcnodBBkW2bY67pZj1TmSJBPUbccrdNveGmQYNTiX",
  "key20": "2PUji7tGn1rVuC3USj2NLjpMr26Yg1VzkqJsfXJDDQrvkmJoeqeyXtnAnvTaGhw8pbsHY63v4pr1McZM2L8ph2GV",
  "key21": "cFXrECjM5n8GEsm5Bx1zjy6zhVHJnNDsByciND3eZqCt6fr59jBmVSELQqDzMPcxuYZ98avHP8XH774e8Cboixm",
  "key22": "62wFsL9tnpbxYfzbBCnFQY6ifc4HNZq4sSSuMFa4rknjruwxEXh9tvNgZ6rn7GcFLNcJGxrLsTSwyW8boLe4VhyN",
  "key23": "2jwfLUDRs7SFW3753EMeWHRAzSvAQUv6ZBuVDnMxncq5FJWDn4souV3Myzo8HEPJnrU1t3UdaKQVUwo8KjkbBHya",
  "key24": "619qLaNYM1B5pmNqiP8Q2SSd6Mo9rGXZcAze7WQ7e9qUutXZM6sG9SeYJtCJQ3ad5KaD1fG3LJLuiMxcf5LhB8Ri",
  "key25": "qhS7Ahrw25eeRvAhXP1GWUhPQdtpTVSeL5zd5U5pQWF1aSGcpZtYNWkoP4euw6xkFqybRoQn5qQY81xns14VW7p",
  "key26": "mL1Bv3NupGbRDBMUvPWquv1jXB5WQZKhHX3dqYkiNRGt9P6DJKc9MStCAzGCZEwUivEUjebZus3TfsJsmwBMqXK",
  "key27": "4ytcdhkXvAU14nwzUJHvfqNbjZxPLgRZhX336f2Tihy3LpU5miBidBcAvuNZfDSR2qN5GUwsn1XDuvtuD1e3B17u",
  "key28": "3iQWfY2exUPzLBuAxJXJpuuKNvrRZcQcSsYDco5aMahZk5Qt8Vm5rUMaJXMhEgpZfaYewAgewXsCg68v7beXeMk6",
  "key29": "56CAt2XprvLWAaFr7SNofkfztCQheUo7TE58sKmnDzTrxEf4CqcXGGEHkhjb4QQZD6q81vujtHJiwWCRbBed3977",
  "key30": "57qnHLPjx4pRGcHbiRT4RnMf1QxavukC9Ls3kBc2h14iRvHVr3gFdstMpxCE3HMtYFBm25j2GzuYpacDmo72xRXt",
  "key31": "59QTkAcDpaJ1U8JTZuVjJ2a8XjF4NnZUthvTi57DkDzdumHyTLWBKBtoVdULm8NFNJ7R3hKuMKa4uVXGfibpgTK3",
  "key32": "16t1kvHzV1ctMyUDsZEET712JnL9Z5M7n3jqmELECdPpKnnVAsM8yZCJCLQ5wn7vmTzitaWgLmDdsBnUSLuKRrQ",
  "key33": "2KawACjUENfGLmdHXV3E3ifADpHsuMky5ea336vdkQR7k32v8cgmQDxgRGBUQSi5RcCPwi8FSow4JS2yYmDvk2U7",
  "key34": "4gWDNYXtf3ucDcpKVn4KTVyBdCj2f3yDv6W3uEYxE9j28rvX6PheKpVNwn9DSyAL75usV5QBHMixgTF8yaYtNyEK",
  "key35": "2UdoS4rh66WSdRkuJ4vKgkkbTZnzUxv4ch3jXpczhD6wxU7S4tR3Sb8CnVUokZETLcYqs13JRaym2Sh1NECywG2U",
  "key36": "TfxsRi22ZCLyp36rhfwezUGqTB78CTYxzXNf5sstcGYyNZDXH66Vyb28DYpzWfBiRq5oXEyt6XdppWCXHbsE855",
  "key37": "2eKqpxLvKS8mFbszyKc225m6XNBDwWGjKMxhHU3g7dii9RoaDGiVao3kADa69JYwnAT65HEvxoXZt6ARSZsuwcnc",
  "key38": "2kDJUuFQnFctKrtFbKouzqY3Cr9GZ7aNpzLdGrGYeJGLv1cJh6BipH8TJD5W7BHaKx9H9hvU7M6yMg12DW1k6xT7",
  "key39": "2fbki8jfZSyPy38zwkTyPbbQYekAAcpk4wT75UFvfae4kqnMYXt3R21kNmAAFVUHsyuDis3y6PNR8Lw3GpLj9TkY",
  "key40": "2YaHe1pMgKXNEbvnvxubPxzGuoJRwXBLXiPFdpTuCeMRQnTF3U4BBPX3zJ78XnspHar891TsmLhrecoCNkMoHGtS",
  "key41": "4L8NEZPE8NwsVtfTdR8JmYThiRv1q78MumhdTDRyZjrfK5uLAaDD7eDXX9C2QaePqf3LwRGd3jZHcrQoVMEjJeYT"
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
