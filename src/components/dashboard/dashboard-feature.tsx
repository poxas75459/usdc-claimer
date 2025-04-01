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
    "5aA51xhuPru3rsoXydBLiqnGmWSjqYGva7kjd2uXZCpQmpFzAo75wzBbG4dEEPWJREKtHEoFhJ1rqiGeAQU1SZjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pYGevkhXhzHJN5myydJhe2VPGAWk1bXthBnFrfPcqioSrLdHpAqFHYgzcCFivXaHbUevPjDyLF5kE59poEGVaz6",
  "key1": "5dzZArVeyA3aErmx6EVBnjiSXUR8GGRKVttcw3NSwfwED6variU21eCu9DCZSbP7CwFeqqDLSCZ6QaDJu1unsJyC",
  "key2": "4DHBrDWnVjNRRy43DXVZ5bYgG35fRETkBPpxd6yrhTPqZrx5VuvdeTNW3odqtgUemsKwdEb69ZVLpoVMWYQEecKx",
  "key3": "pT4bEsQFoDkWiJCdiAERopGnJ3uhHs76JKAeUCx3eECvVFLJCH7DaQ1GEQkz73uRSXj3h7cCZbkn5XyrEWgeCNN",
  "key4": "55Pexmfsmn8QgYREKK5t5jFzJbjTLQdcgNNFzAWv4CZX9igJoKeyKTYasBw61G6HXMm91hciRCsUj7rSGyrcfLp1",
  "key5": "4cvLnJxTXm8bCsg5KchM57gMLbin15i4CVQmeqWjwXRrQLCrQQaEkAgUPQKsh2tQWes977i5C3NGX1XuSpT1oahu",
  "key6": "4FFmTNEJGsXmmEGu81a9FJ7Am378wJ6h9Je3f4L8FadYupC2b9R6QSHJq9HaeCUvX4Yo3q9pMGdkrCFFgJgKnJ2F",
  "key7": "3zGagkBgD77KQjK9VbKbKuRh4mwhPUfEn9CY7dAZ3hYsgbdj7PxBr8CsmqgeoRPsARSJtGbLvYC3Rxf6gJsvGfXY",
  "key8": "3K4u9J1XJT4EgdidhxuD7rSiab1gYMvzDHoL9aq1DgJYxKdDN1udWagcWF1gQw6Ehk4LNV1GmCtVTtNjq5CD3pLU",
  "key9": "64682qaKAyyieCXs3fV2gKuPKZEks3kuAdwamMAd3Mrx2SHo9pN44yRymzoqqNXuEqHy4UMjaVMavQGDo8cycRx6",
  "key10": "ccw8ak9csUJhBJnRzDHxR4WPVRjYKvjqcAvs6vtd97RepqT7GNH5bU13NRGzovueA5jz81NHNiT5Lo5shpTX7a1",
  "key11": "3ouQenMLhzp8A3xDCtjW16eDFxHp8TzyGT1oY3ztawf2KF1B4toG151w5jo7aZrAa3e4561qEVguNfodFm431gdF",
  "key12": "jVWWW2wNbhtDsQTdsMVX7vwhWJUb7socG9DySGG7PPfbrQGZsfk5twM4GMR3iyATaoWRKaNtgZGpHtxKHpV42va",
  "key13": "2jAPpTjpdswFgY7iS8rdHHNFRghp6dUMkTvsfhMMTyYAQasVRifShhg3xSdkGvZp1pRzYJfwGN67WTPABG6U6xb4",
  "key14": "7m1ppWYhzVok5LGQQQbU9NqRvfkX68bgtEN3xP99pcJKzBSNEb136NFbwajHTDtxZA4YaG5KYGdUigw26tvcv3v",
  "key15": "KKLt4nbSSheK78xkk3aQrh8AzYTyCM1GaKZYdmwjrxHxmgtTeVtkHpjbKJMWAztwsFifFdUBLSb23qwQEMS1JLE",
  "key16": "aqtrMPGMq4BnFXyJ3thpKY4YaYtw4z373KVwyuPzzkLcMCUZY2NA8iaBBMbZezAG38ui7tTMYcMKk73jcR8fit8",
  "key17": "5b6TeKhUKoZ8UaGpj7advpJE7DM8X5mx6crE2RpAGXTgx9ZkWcYQ9ugXcFJok3FC3jwAJwRQqfd2d5q7n2uNALbS",
  "key18": "47dytiVXZcAFJ83p8mPfJhfMHLmWKVPpz7AqfEQs7kvidUmThxvkZeraRd3dTuzajrDF5uPoiACH3AU3vbGxbVzm",
  "key19": "23sRqNbyoZijTdEZ4cea6jufo4vGDL2DvSrdkwPDrSKb4k4dLkA3d85tBoAp5e1fDFwHMeaRisPHut53h2LgdYBn",
  "key20": "j1LzCtyV4cWhvNRdUutx5dssV6QXW8kQNWvr6xYDGvNv7Z7VGr3CCcpPuzzDCTPMU2EJkUysqmrntZWZqZyb8Jm",
  "key21": "2EqVV4yZYsUhWk29Xgj6Hr9X6oZiY2VAjeYeDBX9hCVXWTyv9mj7TrFobyTbDsWPQagpzyeu5kjPZkri7sE56k7C",
  "key22": "CQf4jFJUDXYW51HWwjegidfa6jp2ggcFoJ6U8YDaP81Qt5XpLPCuTFvttHxiB5SghAKe6fCaLVoNfmAE7MrfTZ5",
  "key23": "2FXwHPco1N4TqM45e2riqp12Fe7rKibSsJXBdnXLrCcbo2nv1bkDkeURm5hFdr2rXjQicsT8CU9X5URAzKfTb4Rb",
  "key24": "4H5DEVeKoB2YpJ6HFZrigFUzMAvTtnFm2ZYBoojs9g6zZMdZEGav28jUmR5TRMBV216rFVP88kLzC9NssQPNrxaV",
  "key25": "3XBNQ71G8gfqydzLEnwygqkNwsfNMTuc5Z3AVKPPGhQECTSDmpfex5emrCYgsFkDy7yVmzUHJAntW17iRvRrvpqw",
  "key26": "5zEWPyzHfWSmkjqwTZxNFbNHm6q1PqUd2qJAEZvhjihfNVAigTWJMPH8iL9YeScKhN41GVVEaa2MuimBmE3Swro1",
  "key27": "pLnyLM1643ym1ADHtvJC7smtaE2LnNEEHc5zbiMxUNHjSg1MBxJP8Q7tVgY4ukZVhkVgp68T58WRGkDpnc41ZS2",
  "key28": "4WnMCRGx1uo1sB4FqwWi2K3o8siTNHMPzQDP3miGMrMeeU5esK6q4ANLKEtRA6oKSY1pL6HY5JWfLjzQksZNapzi",
  "key29": "4SgKtJZ7F9LRuyK9ha4ZQdCEvNtDVwgesEze5C2DGnyQBd2kKCMYYNarbmkyoQqr7VKQMgFyoxsDNqDU31kFCDNT",
  "key30": "2gqpwxHA6z341MZDmhFrGTywdWGoiDFY187hpFuFdqFYMGonGmKVoTFQTYo4XBwuMraNCJPKYC9c74aHpCf8x8Ci",
  "key31": "4qEt2xZYWLKLsUUD52UKvymkUwHd4TFN6mhm9HdF2URsTreTdNVgJA1j8cAoieNxsYr4Yd2kYWSnuJi5MKbyhgXD",
  "key32": "5pLjMBq1ENVkKWzNdJXzCn68bT5Swv9xUdEcCtp3FkSNTTuzPVB6aLdNg1hb8vKcYFhkh9XMLSvpHXgTksmqX6H2",
  "key33": "4m77fTQmFEVGwKB45iv8jXTyNjJo8NbRv3ree9rejscGg1WTRTwqyrqcNki9T3EKY7AfnL7MsAftUz67fEnLqSF5",
  "key34": "4zSTRmRDVwVvAjdmF9qSahjDZ5fXMpVKgfgNWeKWUBPpVNPiceBKr8jFimmR3YnCkU89xHAdW7CT5MBihGM3PQn6",
  "key35": "2XxbqoVniRH7fQXNgQfHFRhyiTWGmYTwp4RjyX1NxutkqdxiBY2e7h1UhJZW6rhF7WfTY82kEHSYoyAZFYaTL9yZ",
  "key36": "vpD4wpp9eza6M23fs7aojUEjfcSeAxaMqZGE7Eym6D41oWxE8iEg5MhKsfidsfLbk5nsvnU23oVBSSkzCvHCVKn",
  "key37": "4wHqc5YUcN5xvqrGPWxr9gocSBFmho3Nb9RizZuZCyCAQpsNJLiwHmQrBw8MkjaLQ1oXjxCqEvhdPJ6gPk6V77i8",
  "key38": "2BpdCgaXbvSLAQS8EL4bnSTreFLjCRP4m2akBoKGf3P6JXrcxUCpLTMnHZRNRqS2aBFtGDJjJnx7RAFZyycQxBWM",
  "key39": "3QWG9hPBuPcdtDfxj4bsFr4GbV2uC8NxHArzqQrybU82iTNXfXmRCatCKqwHWtqqYxymRVHc5M7wGZnRZcZ83yrU",
  "key40": "5Xbsp1z171TjXisdro9fDKi3R5f7cyhySe47261C2XZwdyyWW7B5guQY3HKYC4VnVLKDpfyJWmrU1cndnmJPRPP5",
  "key41": "3CPBhgQYkKcyKJozjCbSzprFC9KJvBwL91xDnazLSd7ryr5gtzU71vNX7xCQFTFENCwLBK2iU58pTJfsLeNhYarA",
  "key42": "5jBsgenZ85A3GjnQTnDSjf9nscXGEhu86JkkmupKQg5TLts4KaJNKNpr9JHAsYUvFqMhTNLKHrJpGT9WYwepTPLp",
  "key43": "3p4wwhTWB2SvgUotRGuX5NhvmoYDDYRSJCg3uQxh2yjanfvUh3Ed1pDiuPgg1iuF9yeAmgqKLszQTbFHhqiC75JL",
  "key44": "4K9Aru8REPsgZWyVww3k5J9n3oCdMgGtXdRwHWgPrgLSx4i5VCDX9VCK75Lb6KiCYfD1wQVkU6K1qPMFKDnwCUdh",
  "key45": "2XXGkaJJafbeLeaCdXcg3mYY71QzL5EVQF8uy6KRoB3WvnxrfDYPSgsVbAasJSYZrsW8EwD4GjUWnXVxmNXTWL4C"
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
