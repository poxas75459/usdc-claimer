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
    "3PUTjyFbGmu2TMG3CRP2Bas3iV4UabYQTCkxe2q32kTwSNmUQ4fM3QuaQSEbE1XhwiW5oVT5aiGPk2phV6rqVQ5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b61pr14taD4RE7Xipyc3fXQQmEf9KaVRPqPgfMJWGiHjErJ3yHzWLDizDTNf4b4R9mytsu64Z2vjUHW5dYZMupr",
  "key1": "KYPnUgGTwcniwg3tntGUDAUgKk6BGgaXriNdPoKobVAc1EBkzVu8NuAK83CYxnHd8hKnKQGvFgwqnwfnRyY4fGz",
  "key2": "m1ghasXZ3rUkLP7RmyLsMqdxVYvmB5ZgbCHex3XW3K9FeEaxqZjU6MNd4LztYBfUUnyPa2EeiuFmywYZDRp7m2s",
  "key3": "LnWbk4mNGc4gr5hqyczrxAh6oHkyZwCiUEuG2zMLWgiAxzo8z2PXhQZV4XjT34XMeydkqnL7d9Q3Q5Fr99Nzird",
  "key4": "4dAkKGMvLVZLMJeNvL1rjub78MrzMBbapvgMrJ9kPMrFD4ZncofjX4iohhFXWnRRS3RgZMm4riJxbpPDA5Vf2xk",
  "key5": "kR9cGwgvuseNdV1U1hL3RCS7umxqZ4YsXomcTEs4QYxM4kmdrAxESUY8XLu9Uk3YKc2n5BTEwed2ghM3NtiLh7Q",
  "key6": "4NDUdD8wY7syYfkyTq7VTbz3nv9VfNzNFeXKiCj8enEw5NpVNRomhcESyH6Ct9bGXpsymrmzthpPwmWBz4xsmLe4",
  "key7": "RCuUBciX9DN5iDg6QXNoSQVXTCPNx4ppL7dZUDZHZ5bZGASn6XYfk4BwJhmjHtMiMZsgbkUDWGA8neoZ12eDeoa",
  "key8": "3a9T24aPC5nzaDtPDAkvVLTaQikDZR9fumQLzAkZVLhx7r4ny1CTour2Cd45t3TXnEBN148NC71D76xD8WNzeFRW",
  "key9": "3d3wMJGkfQRwUbDzmutRDAJimHA1WRsxmP3zhwG4XhH11Yn9yQ1SL2hPidjKzZmpboxZdiUi5cqyeh21GM9efd67",
  "key10": "5Nx8mDPL2G2LB31q47bqwejAA1JmMJgMPQqnrdtqXPQHrhCVdiHkmtq9YiWishxgUTp2nPAvR3occsQJmcFhffe8",
  "key11": "5yixbn9W8s9wmkR5z6vZPF3vwYUgZ6EwsJEGwTwCejptPFTgpofheiefZHa9Xig9sbykZCGk951S7MNWy97pJBiZ",
  "key12": "258QYsUB5eo3XiqtosGh8sLrJrmiYtAXrG22UfNCs7rjvr3zUhdEdtNCyGRsYwYeKjJ2poGpmNna8m8XHkbajDm9",
  "key13": "3f19KTqBWFeUrT7to3dGDLAwQwom4G3FZX2de9TnjnBm26q4DSD4NHxbi4ww4rZG6FngX1CSL8YpeYhSikUdcJBx",
  "key14": "4Ujd3iR9pzLLJBrPunR46g2v2z6Pva1AxKm4JRiqg9yxfCvdQ6RSTuAUre5Yysit1w1Urd18jvDHqzEd39oJHt1A",
  "key15": "66kmf1KV4pvzVBj9q4Ti5Tho9WDepEgst2Kr9Bwd4PQzaBjwxCvzwvpVXNyxbYdQnQSQ1pnVfrUBqwsEczk2X65s",
  "key16": "2tgrJZkwvhpSCojnR8asPuW5wr2X8QPjwGUtXZDHUU7Xd29kiEtvQHYnwVzUmnA3yt9NL2siyJTJpbFNLTLLnd9v",
  "key17": "2DtBeG3WBCeTpt1he1ZsTBpwToLCMi5eVwT9qETBKPs4y3QtPWzpzXjSWM2Kr8CnqczxP1WhKhmuG7BGFgu9wSBA",
  "key18": "3ggRyCGXJA2vrkWrCr3ZBtmTM5raspdY3Es9CVrEtcEL9uq8ezq7tMKCUTMag2oZozbiVHMNw3i9MJugho2Gi1SH",
  "key19": "5v4qEGouA3CecJz2nsQoUJp3aY7KYNLk93o1kSZwceFqZ4qYGVdC1bahR2Rifc7eHFw7F9hrnJ6WKaDQMgS4UQED",
  "key20": "59ARaQEXM7tWd4pDFTWhDKsFoNtgwtJpQEL7BUNh5QvGsVE3PqU5JFFSP2KQVJdX6DD5ndCaVW8gEF8k48CDrASv",
  "key21": "2ZvnMpXxw61Z8V5i3wpjAdhnMHmG7GHcgMXnct33cU2Qg7AC4x4SdGv8sJbBjJ9h32dLWraQzZtFEk4mrfGEZ6FR",
  "key22": "3tgphjo5nHrPW9AZa4x4gUdauMVh3rW55RhTCEC4E43MTkzn4yFBtUTsmVnALaH2i4Fq8gCHDHY5N1B5hQqCXJmn",
  "key23": "2QrePzZpQBfZ6gSu9tkrRjuaDSZdXZJ645FpKZpr14PbrDaX3h9Gbrc89zfTyyxsWpBqGQ6AfQbgT5i4MpuEgJWT",
  "key24": "23DWR132QA3SsSPy93MGwMXgtcB1T93TXmqg4Ri1yB6cAwrbHRXF2qs2VjDwGQhNAb8svDRBcb2BrVhASq8MmxPg",
  "key25": "5HTecXQ2V9XVFkCLPvhNEDNxXBmvW9UVAtVC1SqfVKeXVJvmkynMErs7XQYpRQ6qLPSYZ1uqx26EWght8aeDyz8x",
  "key26": "56VMASzKAxHxUKVnJKWzWYBsaVJT7EQeeAoRjUctT2BKfZWxeFWzq1BKpsU3QR24ujBGnFPSR3UAfqvhzbweiqE4",
  "key27": "2ih74a6iSM2E131RqqRYsd9BE23XyXrRJ1ghMoNm5Tg6uQhicaKwCGyg3SNLzzuerEguzKEj367XKtFTd7VcsftG",
  "key28": "2Cmu99JtHCt3D4aPbafjfACPnvhYpaNeEQujhjc1DnwpWHRjaRQZHvU59zT3S62KmXpTXXJDsPLLU1mffF83fR3q",
  "key29": "2inReLgmHBuje93GRpJNoLDwGFTNQ1rEnBmxC9CfPHPCM6wpAVppZnydYTyvX1jsvXTUoT3u2sQ3vanR7pHtJkdy",
  "key30": "61pVEcXwzor9HtJ2uUxMzytFEbD6on6crbKkY4GZSBNQPYyjA6WF8LDVJaSYAzTwRL2qwX3aaiiYN4fDYKEns28E",
  "key31": "2EBtHeD6vBAWQyTLzmbct5WWgwKwEybeSkyAeYKD9tjTiWtGKUt67TeJCDnJ5Ja7dcmu1SWBxqPgewCGygD53SEW",
  "key32": "2Scvx4s5UeqX3fYnYmU3spKavEHqLwsP8uPmuYu9PaetjFcmpmMhRVc5PBv7FRcc9EMJwiHZi9QQH2XPQpa8Kow8",
  "key33": "65hdVNt5398g4GhXD4r938GV8b6R3suj5bgMEFo8zatizhwMj2eXqq7muW3482LwGm5Z66Sa5HxnZnQFpXKCcySa",
  "key34": "K9HosBnutJhpEegkjeUFQZTHeCv63txU4Q57d51a2EaqaTwEqK12BQTVxrpaF55s99xwM2aENgmHVxqZkxFnEx8",
  "key35": "2ukooA4ctaoZVaKqwUqNYMdH4b2WypBJCmZjZT7EcucMzEczVQf4t8wbnNZvDbtng5QXvzEGZsD2qHuBMMrXa7Ld",
  "key36": "62c1rj5NTmcKcuhYK663fy9iAi9XTWRmuUt6vGYcikU1arYUoCGtxGRxCTEGkfjEeoY6ahsJ9bqcBVhJ3ivLc17d",
  "key37": "3eqbseYNzXTtj2sYFaAervRNzr1RZN8kEsrPHxa24ru4xHuCAnkwd8XeffvugkV4GZxmb5284SK14na6upmvrhsz",
  "key38": "2aDaEF3RHZAmQvN3iVNB45t3hhoYsDsB4nFjHGWZpeyBUY7FMPYTs6yjwTT3LhH9wFfwEoLD7uMgrEaEKPMLLFXh",
  "key39": "3CfUsTR9p6jk9WywB2LmtjhMM8QbeL2J4pupYnTtcUD2UsD4CxaHU7ixddx7jSy6cweRjDQwuLfpcEfyNZ8FH7pU",
  "key40": "4AyLRdH2ve5dddsHfjgavMgVY2Uv8sMroc2BRZyBZ9zyTQf2PwooGE6rbbTw6fCwPLSWPiqCbppahrJRLdy3C9wY",
  "key41": "2NEdcpnsM3WJT7w5bbdy8aDMAyVHpmNimbkuM4HvW2iQTwR4YCUBV8XUmvMptSffBPuzNK8uFjf7p3QhtxhjswKz",
  "key42": "bo7kEpkpVXJ4xq3A34nRtMmDkzAFLg2X2eeyPSwUcMeNMLPLWB8JM7dDYF1gZep2gSPDc848dNndnStd7PhCzbW",
  "key43": "3LZwhGVisXx69YFmXEVgbpoVNPe13ammXPu1G5bUHHpN7wbzagDfFYm8ZDKURgqEBmBq8ZWEHJepxgoKaLgqh9xW",
  "key44": "miTNLPrZs3Df5hb8TYz85Lkxir7yJwT8gX2V1Scgn6boQsNSt2bM1hCny3foB3XNYEDyw8QjbiRLQGtt9UVe3hs",
  "key45": "2tobSU3xmWWABL7vtU9bqKqpyttnjRN7T3Sxd6y5ZgKLahmGEe63dLD5tGQEwTTB55ta6rvrPDoiqnQPSV8674H8",
  "key46": "TpW3Lrpn1Y1tYqVtwbohrEcGsKwf8ZnKm59x3mFV5wmyrByensHAHdHwbjLntkf2C5KiiW5pS3uSfefoCE41cbd",
  "key47": "2KVLP6joEtttRd8bZwNQKiVb2NkcTwM68LCfjRdY9nSRDCtCMba5DyUvkuEAWZ1K8xnGCkEmzKQs3cjtZbnWmmme"
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
