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
    "AGuGi4WqzFoknvBZeZHRhMyxv2rpvAvjXAHHzf9RBUUPv2zczLBHQktag2kDSYRpXd4yPxufWDVYwuTpfzm2NDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NS1LzEBeWjGo1fmssmnigYRWDyzuajkPmes6eJxYMrncdQb6UU4aBwfus7uLyTkvpCg7KZNUHriygEJDNw8XGGx",
  "key1": "2wgYsLW18r5SjoH2V3SnP1M6RUo3iy9jyGinvz6SHcGmdv1vhzTnBGejsZLujERqQs8Ccjh3M8D3PvQ5axDEGPbi",
  "key2": "2q4NSmeJDHc86wHQ95nwTpdUPpT4XY3NPRXNDyed5gRvgyEKboPJXT5swFMfHciBfKbtAhCACxjixWkJ1qpUq6DK",
  "key3": "2biqRvtpTuoozQW4TorR2xyz9K6zhFFuAiDs9ye8LTYQ3gPFVTEf3v4WSwLkpHvDPou6XFc48M5XJrp5LLoX1JXe",
  "key4": "2B3XA47aVwkUnHkxw9Bp8pLWjPESY37MDemm4tC91Wu8ZJ5RZoRcQUG1ExBa5ZEsJkrEg2Jqm3coMFaEfQx8RwHZ",
  "key5": "o6N4gApqG7ZAPrboxXQ1gxcG8GnazPRVuuvHBt8xsJ2XhdtFfWwDjYEyBkFJZ8UCCuTqZeSSFwX6auLPUM5UKmq",
  "key6": "4YN76DjbhSh5EhqM718t4kh3Gs6QRhxrot82t9TzbazV9yEK2ZjhYaRib38BNiCaTmNiw1wE5bx3TVQY4VVsw6CZ",
  "key7": "5AyYjJh2mjmV3JEJPVENf7hXxBVGe7Zp8BbuHbE5Un4GqPD38Se3uzK7GXVnTgyHhbVAqXwrGmFKgx4N6JHdF8gB",
  "key8": "5APD7FvErG4sTs4m6VQui3KmMM8oVgwgkVbuyv9jzmQuQhEt4N4KHRo6Ft6T37XojmjBXcjAmX9y3aeRxAEZc5qR",
  "key9": "3rJStDuq3iUmn6NpoesEh48UHiC34664A6GXVDwAKuPnfhnkH6a32qWNoKuqTCLgTuu6LqwRzcrVk1GfcHuTH5SS",
  "key10": "43NJ96v5FkKUYrK1r2dmBJBYxz3i4EeBXoM6aPWkFFwTV4a6y8PyUiTieZwqTPYAyQsW2vW3m5KUQm5DjjBxHhrn",
  "key11": "2wFh8EYQJRbZWoAt6jnAK5gEfSukocdo4GTJZ6UTAeULNmEpxzgESBSo88v1fnG4nqShmQWEr3GobM6zSVaSyquy",
  "key12": "2qpvBo9vaeYSqv3MDQf42aVcbk5kgZdVmBrsQVgGCMvjK8jAdB9FWef1x36j4cWaEKZzhpCUUsMDkGduLZM8YChw",
  "key13": "5TaQugjfiN9xC4d6AHmsZ4aQVgkfzaRUbogAeErF5E1sdwPiDfpWjCkzT3m85b4MStk5tav7RdApA7wwY6jb6PQ6",
  "key14": "4AfrV6RBuvtPLLneQu2ESz4WQcBnQmgfUUwoHWeNo5kzwsy1Hq4NTJK75JbwZ512Ja36Ps5uVk7ucp371dDLCdwC",
  "key15": "49SfPWXixkyntE4egkto5vk4iFBcadESBPE2i2h8BuYibE3j8R7571TjekD7YJrE2RQWULPyp5dZy7TNV8VSVivo",
  "key16": "5sFJZJstvrvPVgJrF2KiCr3d2NstErQszrijhULGxepf7S6nGWE4wGSUWZJdwtb3N1xuimNwgNE7RGphgTpCV4Qa",
  "key17": "36UxDyhFjHVoDhn4KVEF9yBKcZm199sr4kLWRciiP2AaaoUApa3i9JDwHbGDQ4MkWVLuznbuvXPrS84nFuQxnJP6",
  "key18": "25UrsBiSQ3D1GzBwQG3TPhBC8TXbJDTFrjjkwNyQbMuwBbnjbT1iRNbzvsx95j1RfPaG5AFkhKokTpYwr89eAQWn",
  "key19": "5wkjRdURu5JRVu991zncm5ndobFr7GxBETwMjaXC4yFPfmSKfWVqj3cs5KH2oQNLtPm5hZon6jCc3jAgwiiQERwX",
  "key20": "JFjMjVTDnooBBYLnAcztC2roDG6xja8xorHgN1G2UKT6yTgYvbLPaQN3Ag7hc2Pf7UTQKNP2Bo3KiLhqicJQMJs",
  "key21": "YViNY6e1CTejXNTFaVfZ2s2oT9hUK6W7Zd24yuuzWE7XFuLwPH5P2SHtPLbAnjRDQ5KcSuHMiEikWTgxnSxmoVG",
  "key22": "4uCwCypb3mybdb3bQBgp6W5suRiXi8e2uav1yg9Y3YutHjXp3DwEzXstW39kDGVgZix2GC3hwqWUjx3yQCuTfFaL",
  "key23": "2KSdGcvwZNpHMTmaJsT1eGRyAVX4VxQ1wCh3RCKCyTgVWuyJ4ZQSy9gHzFPJWpR63hQnQnf1qmGrxp6pnJiTep95",
  "key24": "35R7TLvK7hWKVtMTLLywj76KppnYUCbHtTxxPENdBRpiNXVz4UiE6hmeXsoo4SWpRrDbUTp8dRPPSeJRa5rEwa4y",
  "key25": "3djUdxic5Gj1trTnBN5SivCJqqSQyqQUGbg4ny2RrQfnno5TrGpC9h8eYFsXNxyHZGfZ1tu9qTj8m7Y28h9RPB9s",
  "key26": "2vHLraFrbSkokpeKMo8fZvCSovHzfbxUtZZtmKgZc4MyDGEJ9Jfi7THHyYAoj2ceo5evqjSApM5ymFJXiScNTiuK",
  "key27": "3VgZydYwQXoeMapZiNThQSBHSDhRJeUir168rhYDvRZPHFC9JU7Pk7mHp1sZiLZpeaQJu5wYwXb4mk4Wss33Sogi",
  "key28": "3TWfgJieHPqiqCuzkuJD35hkdiD5YMC9jsjiJJSD7Rf1HpLywvtECWW96EHn5fJBXLoauUUYkX52nwmvWB3p7KGC",
  "key29": "4j1HzfcfayyvRxtkPYHyC5MQVak9uAFJrk2suEAzVv5TQiJP14xEvjYx1DLxum7kMJKmghqrfhtGAgDai4jdZV2E"
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
