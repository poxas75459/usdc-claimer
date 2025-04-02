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
    "62XNm2A69vdnHvZrfWEe8JSLED5F9EMZY4qNEmQ1ux8NjcMe3JBc9h1t2Kv2VCZQpb5vZcpGmZtsStZpz6yXwjQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AiwBEgAHzrzTXuJfDXqstonfceniELjufsxxMc9gY24xwu5jGrvmK9WQb6fvaPSmTzu6XLdrsU6AKKm3heoyMYF",
  "key1": "4FXmngfPkB5CjbSNFGLHmucG1j8bNrGuwx4xeMXvTixRdYxs28V3xijB29w1q5RCDqkUA3NkaehUAXJYK1BeagQ7",
  "key2": "3ftXJW9KiEEQGrXMQwjPmvsHPkxU8JHSvz2MH3BpjpJ1MafURm1RpQvDXmuWeads8BHdnEvn6PsNtKicRQHjZFnu",
  "key3": "5X9TBYVWrp3Gs1yhMRu2cN1QzsRpYXfQS86g19mbX9hbJEenwaKP5vuDy2HX8zHrymTWsFkwcZ7gGUT7z28Qq7mw",
  "key4": "a7X7CDetgzcxiWfJp6QnXT222Ma4DqffWj3euTzoxATp6qJCAH5K4ySMeV8AcWQT5eqK5tY8wk725FGRskcMLHT",
  "key5": "5A4xaxsRVG935Jfc2FRjPqb9wRnxhS2XHBH24NdyDGC7axmUfZvRy7bD3NEqptHtJZ1DSM23qBpENcvGMWmbQUNF",
  "key6": "4mnwmHJ7cWQn9nVbrbwAVbqLEcRcwZPdpg9JE9dczkya3Zucn3bcC4K4jVdEgCwZ15Tbz5kxEBBGkhGFnodkMsNq",
  "key7": "3MbwvYsHFxa5PKDVSxpuGjxNwrrQXq1twLjDjrkzoLTERHgqw3zrorqfchCSKeFsD5n3rNaMjATZEsGB1RHxxsp2",
  "key8": "3WbC3LxBYJ3ZCMfd9idxQrqNnkRvwnqKj4J7HKYGsGxmnSnwDftBVY1UqRLH1c3euoPM27GoX9KyzzUPvCUAKRCE",
  "key9": "3Tz7ZKAUcGiGxyFxaXtJyUJv1HnqiNC9dT1ChMeQabtVCudSWs7EsipzhbZCcH4DsBFyRnyJGjqBNmPjJ2VfGs2X",
  "key10": "5fWhCzD43tBzR4kYxZR9CfnTpoeEmnrq1aPCMrdRH3fcvhJoKaZZrnSqwuWoZMEXFJgFhA1YdvibXYZynqF57za4",
  "key11": "qW723Hkn92fQ2cnLNKF2TwgLBG6VBeC3pntdwaf5cj4tCupgUTCvSb2XDvvaUqHkanLjGCJnt1kG2gNZ6TBdeVG",
  "key12": "4XB3EEbwcCjVprJKSVtDEnLQbYQH2GRjXEjXe7XuH5goaUH8M2rJsH5xoWqSnvq81aNVszetnGWPrpetS1MDGWQ9",
  "key13": "2uggTpRW8Q97JwPHjRQEyxaNMrm1VJEekhNiceZACPhq1t5DahWTfaFPJs9W15VJhajdZucmfR1n1f1wVQqEhKcL",
  "key14": "YvUcsmcLXwTiwf8uhRdqHtfaJdokC1sG6Dth86YKw5go9rYuj4HkAAzvCgvXadLKsJkjxKiEousw6781jhXqi1d",
  "key15": "5C62ZeXL1J9LWF63DzyLCaf147fjiizqusEC81KLk4jZ72ZJFiNWhig2Qjp8QjDYquj6VWQNXJ2GQM5EVE42Qms9",
  "key16": "EhcgynNuwDL8Ke42qdxR8uZNPxE9cFBLHyE4LyE5zuXTTaxZJzb3EfmBz5evoFz65nVZCQF3KVjTrcV9YNHF7dr",
  "key17": "4ARf5B1CKbnxfHKKumiQdNKGVueGAYQWpfmevHQoxxZQ7bkW8bsqJ7uETE7RatSWbdBUmYTN1P6Gkebovxj7Z6Q8",
  "key18": "3cA54RyXvZexQPa21DZUmzivwYBXcfTufBSeMgqoLwiGeQh1xe8u7f3Cd9QAZsqd4SxS1cYJWf7PzXcQe41gQ9TC",
  "key19": "3p13s7kHYi9gdYjmAuLmb6F7xpvPev3MeSiQizgz3FLzhALQgyS66NBKZft1C1LmNdqEoi9sBPZMifAV2ALJuxn7",
  "key20": "3RUTZJSAWwPRARR8TkT23xSZaBiRs3brmxa6gMD2Dcbp4hPxa4MKecRh4wE2ZVD4dMvBZ7pa3gTfvoP8ETNAmUM2",
  "key21": "61xfXzqKiynDAuTV3nfKaP8ntC5iiMUMXknUqWCKPSaCWPnnxEmmwvY8QF5y7tnpEgQ7recSZt78dVJkRvEFHVSW",
  "key22": "47pDNjuQfP129Ym7hShH2GqV5hypejsHyHdY8WWh61auowtCFMTMrAYRrXtPCYP3sKjitDAFhofsCgTvf9c76Nr5",
  "key23": "25jdHzk4U5DkVPvN73xu4LnygmgZgTUYLbV5QBRJTkJRNkSJAv8R3kV5RyhLHh9JbvHW2rXHC2SkTBbtiCzZzZrB",
  "key24": "bSsqS5Du8bxFQw9cKiS22m1d4Dzj2pcUBEaiqJsNnSrtXUf8Jn2kys3SToPbAUB6eHSuiEKhXnmeXHd5wAaUWnL",
  "key25": "27WjNq25ncXiNCyT5hgTjAXto1tRQRkuwaHyoBJTyZzRbrQzygdUtGUR7WqmMsmo8jMmKmGpaRhUgJXKRtvZVzwc",
  "key26": "3BMuWsA2T5h71AGwEC2VSnVUvB3vAHHTQxF81TZczQu9y7XTEQ222WhLiGW3ivkNaGzActXtRKmPdcBu3Y7cEdam",
  "key27": "4URU9CMCbWtwxrtdGHsPYDRWCJsUvTPfCJYv7ctYXVSzTU3LyPPHXGbvgc3YZqc2HH3qAKG1mXamp1sF7HZ3oxCx",
  "key28": "42DFyYE86aYdQZUGgJVSZYvzsJFYv2DWV8WJXDhsqPzMFRbYohJQjHD5rmPWwQhvU4j2wM9hpV8NZCuoQGhgaScv",
  "key29": "2fDfmimzE8o4hyV1UVSotZuwpuSYVnvud776uLCNmtndBaS8hrvgZRsBsB8hGcMAvBF9viexounS1Bt4ZRvNU4sg",
  "key30": "4Hw8YADAjhW7FN2MjcXchP6ETPLr5Fcgmo8uRv2ckmdiXWgt45DTACYtFsJ4h6MvjVgRHewNor3bsTssVYydBtyh",
  "key31": "3KDXUqb49NNxs9hnXcM6xGq1DeTNeqGJmTcJ9Y2ZSp4MHVh6SpWBZLwzGA7jzunu2jgstHhQC5onEp4WFv5qE59B",
  "key32": "5ixS9KgWpJAKw7d9FKFavXzaDJngTr9X2qg8Duun55WKHRitEqrsyP8MTKhH2ibHxXvVagX9MwyHonMbyWKo8UJ9",
  "key33": "4xHEZA6EWeo46ZaoiNZW6Ky1iYAEKx6GNCFEfV3DM3Du7tmjGVai1VogvAExcAwB5aH1U7QbBwSjH2f1qye41Pf",
  "key34": "4D9W3h8D8FdtovMboatQUFDNLadayjaPuK8t8cob2pfK8kWha42GpEkCzYKADXcZeEMoaJVrUXUvMBazj9JWyvG1",
  "key35": "4n7SCvBWnEiv8XBYAc8PoPW8oWpRU1dhohXgsw9345NSk1RpNse5dsHEXfUkMmhC2zDTYgqqsx1FVihUoo7hQXyK",
  "key36": "5x9BAVZx6Ht5x52dxdY9Laj68jkb9zRAXgBMcPmDNDp9ZoV4oxzDcpJcpvgfz5g7Vts2qEUjT4vkTFRyMf4MQwFR",
  "key37": "5SPqNbs9wb3XESQKgoy5wH1t8jGdbEMfihKoAJjAf6j4sdNRNiqpFbso8YDhPPkiY3uJmfB1SRz381U9CHa928vu"
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
