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
    "gWfCw2YV4hj8M7DvDpTcRi2pKcuwXypfzsivXihHoSBvrzKnXptiVpsfDbEnYyNsmiahXRmQE4vhKwNkZRL8n4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cbde36TimNrCMaRP7kK9zFTqgbeqax1Uj6F7HkTDjhhFuMd8DyZwEoYvKA1jtbG8vC8EVNaTPNhZx58TkCKRpuS",
  "key1": "5sDSDaPJti2yDDT1D5QuQJuMGoN4NYJr7mupePYEVCGqE39qPMjK3YqPXnRMsJEead58YFEmNFm8R4ZgjYnzeuG6",
  "key2": "3TeoqXQz9qjS9Khu2qqgjh3mpzTqF7yjinF3QLgpJZ7NT6ebZc899vsk6Lm7dSdVhGWw8xyU9Q5UisC4sNyZpDZ3",
  "key3": "5mJNvFcsHZb1L1TCAVha69Gxtzx3mEGxAXsrKMLfqeyzm7w6gLGoD16zd527hgqDqeWdwixNKZR9hFDw7ABRvchL",
  "key4": "2CzLHhZhdDKig1FKaxJPasehu1CQ4VyEFQ8GJUG8vU4RDufNEYarP1VymwDqMvZbdyjP863EyPTTDjD6MUewqrCn",
  "key5": "55kiF8NtdjbdeNeV5NpqHq5p5Td9sEzLkgcC26zzNtbnaYzwPNsTntAriUAvHbDdtzj9Crz9SYiYqzqHCPJht1UE",
  "key6": "5UYNkCXdME6AsnZzg6t9N1H3d97dAbqTAX59F2CSC8r2H2Hu1djkjKSKXqWf63U74k4HULXxN5AC6iftr1w61mAj",
  "key7": "5UFM2Nbp1TMRQCRLqaoZLYdkiXrbZLw9LoYYVfdjFk59J5QS5hjLxga1RRURnJTfYtudjUZgJDzKDydXvqkMNNfm",
  "key8": "3WhjxqLQ1anZPjYE5Hvz5gJJWyeuPtTqvEkPccbd7CntouNns8oQxxHzxeMQc4jBqSb3LrS9tJ25o6bpNd5BkF8f",
  "key9": "5cxcVj5Qxd6g7JZDTQzQQr7vrFqF99Fi5sSW9NZB9a7d25YZyPEt8xq3q6MQKoPP4cxAEpu1jQHy9RWu5pubgrF5",
  "key10": "m7k3G8xawQheqHbcd5RaEKNCFLjgRQt4Z1kMJNRQuKKqBRJDhwYmxUdgUXBNGqFfxnMso2bfMttzxJA1hrJjh6k",
  "key11": "5VcRhMPatjcXJyw4Ps3y9F7Wz6EoMHVKi23eisAEcj334zF7h1nJPCr5xAHz6TE21KnJdaC4fjt5bjst1GrpyARH",
  "key12": "2XE1Yb386fWqzpDADZwXmgkUEtd3XQdvcuLKR7MFxBvV1a2Ce4UT6xtRPAwJ2PommU7goedFDQSzM5xGU2tzpuXM",
  "key13": "2wU3BqzFzW9jSTgUqAeiGuiFKfiE3YsS3892rHhJwh6qcUJ8NwjC4djTwmkzPRiTJuGb4pzLR1FDfLd5iq6whioT",
  "key14": "4A8aVdb7bHe1VHt5AD3KzjRW4zAxTF45zQ8yTbd9NdjdewsALLENT3ajhsshV8cG8jqC4Awr5Jf5aP17jAQ1zD4Q",
  "key15": "2vzBW21EFE5SA6fiJNhnbZXyk1hYMYVzHwsEZaXGHHZvGKPsXgsnu2xhwsexm8tdL2u5TMKZcuJPqRc2K5Q2DPtt",
  "key16": "2isUXFQ8Xi3xtcuJVziYCTkMma8fab3dXrTMnydwM3oo8FoNyApT6UmdVcVuuC3WbGnL1pXHMhfo7A51co7zZZMa",
  "key17": "532crNzr2ubPB5Ye9gscvEjfVfDdCfX4pdrj72AWMuCCzA25Hur3UemE9m2NYhscSPK22JHvZwJStd3G1KiYi9Bf",
  "key18": "4W5Z5qNJfLrnhEoLuKJfuQUBdD9NbV8SMSYezYmJMx4xZFZzpgLVFYT4hhM8r7viC8vqpJ7SkTLnNyWfnH78cH1U",
  "key19": "3nR72atoGAb4ns8iBRP9pSrYBqwfM7b15yNHaH1TcuG5kNiYtnKYAFCsQt4nc6pQacQet1GEGqryJeWnKYeNKwp5",
  "key20": "5xXBvBiMHGTQr7YFp4rcb9qZ8kHSxEfMTFjQM315AVZrqZW4GtnwRC1meiAKtm4j2zXW7YNejUbrz96QZJ9kn4XJ",
  "key21": "52ktSd214VCjTZiw8mAhmmyrWsGLjnBB4KK2voVjWn1AFPjb2PpW4W64cNcg5Qbcs2ASyVVmtF8rDz2u1ySytPy6",
  "key22": "x6wdEKysMmbzBwwqU75CjE2H8Q94PWQtKA8Ha2c6e4yVyMuNjF8tZu1LqPLBBBq55wuGJvbENLtSfaGXnwCy59S",
  "key23": "3BJASWirsUE9cERQYWXcKxuoSovVEFX1L8f8ccRgXxgVtPe6Uck2sSmpu5aXMor16XrXhZHVMHNykntcMiWzzhU2",
  "key24": "66T4rTPianf3UoJ265HoFnwWsfwQNryBVToTuhJLcaKnmFuRxU575aZxWV42QAxTqZUdxSQAKsoeXvzi2wkk6f1e",
  "key25": "4Qwn1V13KFt2Lkx8HN9oCSQ7y76CQVkHX2EiLeH48zzCJMtQ2hNYWuouXSKD1zghJfLhghTfRN4sD3zUJJWpMqNR",
  "key26": "LoiJge8RXwgbQwMDmLm4sn8BV9Bx8xbxkFAynCXombbxtGoKsFZwHdLRMkn2mtR8yD9668tVXrevZBQ5mVfrhvo"
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
