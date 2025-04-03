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
    "2uVtRCDeQigcSeR4MtA6LcirCtPPgs4THGWwLkLLA5vG5pcgN3q15ctvwhUTUQKuw4DABJ1w3Jcuw2idFQiDhj3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hq1G3AeXBPx1vSYVcAxNWwoCcBLHcsDh5PT6mSLWhEs33HPrD3xXc56WHsQx8Bb6FsWjJ36CLykJcZRbtX5DxBH",
  "key1": "2MsBPT6s7DuiCpNyCnXp2xBaKYKPBoomBmNcYi5AqJ8giSJXfKVpgT6duMbq4R5raUR3UWQWvD8XhHRV9BtmQrvU",
  "key2": "387aBdN3kMLidfv2uqGcuuw9UGpS3YtQ8aimMVoFugp5SRZzfWtTFioq9ZSbC2SxREemhLT7sK7vmCP2uE2Tp4h7",
  "key3": "2on4WwidNzz3CmQrnMVLBTJGv1p1s3pmebJEQGWP4TqjhWtLUQm3gcWG1GNF6uWNFRtYGf7M6fP6CknwDLheEd4K",
  "key4": "4viG63zjsudngTHjxQpwn839wfoWJyzC5bWFeyJFzU1rCoECcnaokw7jt9iHitTMQN9xhfJCym29RNkSAVX1g6BU",
  "key5": "21moV54i9iSV28esZdz2zdwKySBGWfxQdh5aAjrUREQ6nQWvF6T6kcUzFVioRAeSLTSv4Fu3pRDpEuyzQfa2Y3ax",
  "key6": "osq6TVLrMRD88EgCfpvtxDnrjt1aQD8FAgRmzRutfZQmkmETdRVXywzQHt56kdaRnkQ7cxvqYmYVdZmbF5gMDXg",
  "key7": "4WgdPXCvbUhW6u8NunqNC9thA1QzGoG65dtewx5CuHEQCxqcdemseLDMeHqAHmjYx8bjZfUJMnGfQfb32TsDKER",
  "key8": "4jj14PKmfYt1RxQFBAmVhscwAJnkYCQ5WoW7h5ZoMQwWssrDAWEumB3RqfdzonwBhGwRDNkMASia5pEF76LXddxQ",
  "key9": "2LVb42n6B3swn3trdmDEAgWYPMiDUEcQdWVBk2rUsqtCcRjUUofZau3XhTFdKhHQjFf6R4daXyBudsi5pfwwQe5a",
  "key10": "5CckwKBrrXFmy1hqk55txNzB6yEviAJcFCiFRzdwcgrieuQfFTht2NXH9gneKXf6HhXDNKWdQQLxWg6Z2YWdDcEy",
  "key11": "65A9R6nWLjNL9Jf4hkqkDaLHHr9WAz6uz3WFzKLFVggeggYjdjDz7fSCaVWjwNbYyh4ARgUCRn3BgetCD5dyvgNb",
  "key12": "3oMKUUwhMnk2rp5fs9dhaZ58BKu9UshY9V6k69tfDWq8Vos1o2YXq17ZBaVHT3zEvjfZSA8TqXqwmPADvwRnTzzH",
  "key13": "5vEFK6GWt3gg4coRGZ51TM9naNXCg4P4WtHtSTpA2TKqVnQ7f3Da3hRoxXZPckGMr845UYdUgrWKWCi7MDtXFf5d",
  "key14": "2yWnRCxZCvXMTtRUP8JCnpvMDEQaUmrAm4N7GmnwcDjZnqTgtEb8PJx2xEeKsaCCPDbkAExibj2MZ3BfabggSbaf",
  "key15": "4ixUr2QRJc2o73ANuDuZ4m7ZrScFBnJVkdPjXa1iPBHjMifN4BgAGCdxu7rjtaVrHyi2G7sCcytzX96ScpohfxpV",
  "key16": "4bHkr2Rndeaa8JKpbGHv67oH3jZ8ZiG1mf2kuCFPyiHLzeAzXRC61NnEtVb2KdHT69Nbt2FMtxFy8ywYhwnxgSYM",
  "key17": "5wED9RfKmCMgNtwjK2WGfujADFjSf9VHvtpA9WgUzDjr5jLK3yc1VcTCoTUAxQQ7zhyrKrpdu2DTDJw7nPcmXXEw",
  "key18": "5RjHPuGy9g7ZDSRVP61enmVVS12t7tvrPtupVaaFyn4HRX3yvUc1kAtw4FdgY7rUuBncc19KCJwsM1UVcPPPtFth",
  "key19": "Gpd4gT46BoPU7a8TRQ3CoL8hmj5Gq1GSiff43YvjpDHfxvLmsdtAFVa4SBFydRd71scn8aiRugnZaXKxpz4o9VH",
  "key20": "u6VA2f8QzQYWnEbQcEsc2Gr2U29pmby7mnZ2U7i7FR73FNtgjZZWz8EjK2izusAVNd8s6KFcBMwtSvk8ZkEcaD9",
  "key21": "fgUBL9yJ5tPUY4sJSokKFTmSMLLdM9Hj3ypG6JC7LeG1s5scR1DL1YofEhQL1mi9CwVERgcdMVcpBGFex43DA6w",
  "key22": "2jtdbajAHaGVGhbC4dFkdHn3nDcSwDfptdaDWMTqRwtYeKQXFj5bxUKgq41GtbyxBLSWieHf8mq6VzhAFuvs4Tp3",
  "key23": "26cbzVpVzyf6qonD9XCHjvrYAgaEH7FeWfCfNznhMn6rM3xrvrVpZcvqC1JYvXDcGjSntbhe8LXaJ4u4cpw7mgXK",
  "key24": "5xsKxjjaKCp16chf9PUv4sdmK57B9qsLY1mTKSwuTuiEYsP3khG98uvVZzrFnEaLerou5QdPPDTyiqHEG8gYNpJ5",
  "key25": "5d9eyVtSUU8KevdVQDrUhKdWHsajnHGF81arMxR1iWYRwG684QFvVooeamhBoX7zLPbKieeVok7yTyPgdJD9Fnt9",
  "key26": "2ttrRmbMKrWM6WaQnRe5Yyr3DDSkytCqjPn2XNWV2XcKHUznyuVy2YVCdJWQsvSHnYBbKiGE7KcGqJM85ejtBB5F",
  "key27": "4dW42zfXYbniyHb7ARzSan81zws7YBRHfuQTGNNs9XTw5uxiJedooQtUqCFJgWHNZfyh6RdWx4RgwyLnHLfRoJcX"
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
