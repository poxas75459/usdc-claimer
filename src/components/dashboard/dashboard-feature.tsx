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
    "2Gc6mxY2um4TMQvJAvNo182vdT7yh1GRB222tfUWsrgB5k9HNLQTg5ij3ktmHoKHGbSUWwpMAX8fLwQsz95y4yaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pmimUfEH5inKb2Uv9af3YUt9od23j3ZGy5nfMZgfBNFmvFdVKzJCFiN1fTxkespJrLTk7sVmeD1R1cgWNcA1caA",
  "key1": "4hYHBFHcXmnoWjEvuSm5fW5oZyiRHztCobQTgwfDE47a5H39UQVCpQ4U8XhhN49maG1RkadArojUkW8BfWQpDzM1",
  "key2": "3DqSvGCnuVnoK89W3C3S2EMP4xKBokAbkTfLdinRULrkz8Ha6HotQ9XqTushJusVxkxNv8siPw5UV9samwCMcqbh",
  "key3": "26dxguRPQzMxqisbexMBfB6ZPBFr8f7vomCxqyVPTDanUCbNLwiqe8vKEPtF6N6Gv87Zi6TrrPBzzatBLCHoUuri",
  "key4": "62LAE3h7FhqER3QJb1zbFtvREAVXGYvsp9enTMK7ExDZWp3gUKuteuNsbQCRKGzrDTyL7E7LVr4TxGGmr15p9HZa",
  "key5": "2sRJB2cjhEwqAogZYfBZ3q3EjuVLxQi5YcPxcAG3qHqSWijZthpzbMy4hmKAKDaBido63Y5kvUaBBTYVT2po9hZP",
  "key6": "5uaxBbkHhZMKrEGMjmtNx8ENi4iYhA4gt5zcZjLwvBCVMeFsyZTnds2x8KNwMSaSn3xAjkBctPjJBW3X68aR7iPG",
  "key7": "giBUxy65jzyQfYBmWM4JGueb8pMbrVTgAnTqr8tvfwy5pNJmwgNGe9qy9hqXtJapZZrcacpXtizxzCG5MjuCt2B",
  "key8": "BgV8pzhAPYzV3hRggzcaLmcUYpg7ynnBmVSXxKt4FKyHpdDcMFu1RxGqX4gDUwyqZjhJastTTTC3NkzaL5yzEGD",
  "key9": "4YdhowekAfeaYNQAwNnkfYRW5ch2bmJHRsA7mjcyThtgdhYFkrVHkqZBX3mFvThMJ5NChLu8K9tKzg2sP77AxjXB",
  "key10": "4jUrCAHxnrHBXHfsF6pYHmEpKvmrQhhHHJG7uSbAb1mcqHLbZGzqPLGFLjF8M6izD52SQhMoUNLmyW7xLaYvTRKd",
  "key11": "5xK7XmohVQfpXzViX4eutTtCW3p61qkMiTfFPjzTCjCiTdD4de734YyzxY35hRsHvjR1EVp8WsdaWdXPtwyiz8Xj",
  "key12": "2H3EnhTvnao6KcRmq8WaXd7MwTM8aReQGuVMTDZSqqyDi3jX12y1nUx2QvwTGYZWMQxWvGfGWvQ5AGaTiLLBxiQo",
  "key13": "5VX9NpjHKqezQRse4KJYZoNhoLjn96FG1pzfJjG67JERzYAmQbaJzP4NH297mnPVMCTRbUGYh3puPVbU6FiMrQgK",
  "key14": "3BTJKSFFY6jz7EszmTFtSPxtXyySQpvXi9RpxWvcx7ZNjMmBS4ug4FUd29eZ8ZpFXcFHFKHqDJYoq4jhJ8KHALHQ",
  "key15": "55z9aoXeQbinD9adwFjWRwTmhhen4nWuWViSwVbDtnaUuQz5bxhDKMD1qW2nesFXjxmUjdEdkB6BBedx3pyWFP6w",
  "key16": "41SA2WkcNDestzakVB8Pv2kada9yfHQNNd7yE74riYNQURJkaQdEoF8K5vLybB4YhgbtCphzwrzP57tYgU5VqeB",
  "key17": "4dUztrgM6ZUuaZDedoH88UN58ooCa72DE5fpfPXEsSmzMu3iffZ2usapVHVrTY6fMteF96Z2gjyEUkzhgRPdoRY5",
  "key18": "5NaCv9YPJF3C3ABcz6EdgyFHMUE3WZuyRRoyuYFGEojWiBKPXnP49GaqZnqvhf1Tgq9TvPMdxZrF7KGszLDKGzmu",
  "key19": "2vZfkn1nRhBKGGtZqVHEPCYMXZ5JbMz1C2zzaA99hAQm8U2QQ9cDost64h6MxVZD4euPDQVXwhLnjMyt84BQfjA9",
  "key20": "3254BvRHuYuzFgVQWXANxTJiM34BVQZzkVYgzdr5gfFXA7vzEor2Tx9r2bY9XJti7sLn1MxJqBqdwX3pL11oXy3j",
  "key21": "3xiLHbLq7dNF1fVKPNZFuGHDjaSbKaUMu2jy9xiKpaGcYbBdhZHgNHYEWs2v2S4QHiVUJDzNvdUUX9VrLomrCiD6",
  "key22": "3yeL9Rq3svMAfPBZZbwdHwBkhsBpFPsXYVx9LGBT2fZ2Dan5TQQnLW6DerzBwJjXqG3cCjNFJzyXuPTjLcCpZKAA",
  "key23": "DBjjVVP51LCm8xuDFaFztqzKHW2eyD3Stg1a9mFaAoQ5inyWxnjQHa8Ztqh4ypu6ki4SRnNNF7x3oBQs7qYW338",
  "key24": "57ky3iSeTH9vzFw74tyxaMBmDVpJYAx6AkwA2omXtV4hV44828qW8jaRWG1e4g2PcFLf4pCxReVXde6Tt5SixzDX",
  "key25": "3o4KunxGASFh335soZAdyiazuccqj9pHZa71ofekGm9SPka39mqreebdhVZ22HMqZ1BvfA1djoLzUqQBXYaxvbPe",
  "key26": "xdgLSm4BGjZ2xWdcqwtRoWgFycAimi1j7dgsgwyB1HqmzvGJjoKpCU6xnErVcCJvXbdc2KUgyK3QChCikcubEWY",
  "key27": "4vPcXgquqR6DBcQGoXgLGN9NqHaqUbaATcUFxF7Wx522xF6d8YCc862WgutWAnMK3YkxJtEFy5YvjCj2ctjZdJBQ",
  "key28": "sw8i5DjwQgdYN2rzYANEaAUTEE2vR4nvHYPX2TLodDPxXWqLEFUi4TzmMm7uGMgX2VEWuAdqBsJm6c4ZxWwhXJc",
  "key29": "5o2hFLZNgQs4HFKpoizBmDcC5ZiaVtqFG6DqWg2PQ98wbEDvzccDuLzDZmY3ZM5gtLaxTFit1bRhvQggLW629g5g",
  "key30": "G59ceFu46AHf7MdgdLNkyZshwovEKbDrBicYJNCQJC9K3wwQk37ecN4D8RQLmLkzHhcT7otKCouqhVTVx6eyzEw",
  "key31": "qrNZNHtqS2jjc5oa4dHR3CuGK2bYyqxViof5L4UWN7rpzpePbNvmexxWUamj2XjxZcjhL4T8f6TLE1iqSnZM4ee",
  "key32": "63gyYq5hHQEtYuaxdKJ2Pg9n6MZJ7XDkCgjM9ut8sU7Mq1Fuqxswbi415DSd9RaaLG9UEaEdZMKxragtmG2TGeVd",
  "key33": "3D2BxY6weVbaX9CtyVJNDCqKinMMA3dvc2dHheXjvQsEU8bzyvmcD1AwjXNJvJypY42XAsAMeSkVBnGhnu8SV9vB",
  "key34": "9UChkmPSfTzh82Sr4caLNemPBhHNF92tejCQWyfC6J8GY7RVdN4B92ZUA4uHMq79dSHE675GXcfQzsv1bo5QShG",
  "key35": "5SzbyMRiMUz58JLLVx4nMSu8NZyihEE5VCvyjCb5tk5dwBwTDBvLV3JVXTXziQES3uHsjftNFZDHJW3fuwGMBMXE",
  "key36": "446ob3awekGbGw9PDE1HmhToSYGsUSmLRbkfCUpk85qFKRfdV2S9Ea4ma8WqUN9eyPMmsgSwpLdjNK43CBnKGGyJ",
  "key37": "2hYF8Ur7kxaYArnbzAqUaHDEvUNo67kcG6cvno1voXxqB2kN11vPSWtjTconM6wmeXZ1SAf2tnaq1Qv6bZipP85t",
  "key38": "5vwEmdqfuxZggdJMRGKXNxvsQSM8fG3ekCMGC2VAqu9y8PxAJNSGTPqmSFsDkDfFoA2ko9ys9FJ33nEWUDANADy8",
  "key39": "feSPrHeSH6ENQx7BdSG7Jvv7MZw7RcDr3RMpv1TK8Winhger9JgYPNnU9ZDzjn6ZKhCA63qq8amhfYSrbg1T8E5"
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
