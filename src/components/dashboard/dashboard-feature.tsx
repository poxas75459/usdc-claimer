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
    "51K1Vcc93p5vmYiHe7bFYarrK5JB4MrLGgx5L8jKmdNhtrRf5jYrLTvtccbymfVUGb7FKCnnLZRnWr1KyqQRT1EX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sWGtaAJNHr8ocRzQbWLXfYkpRZLQ3KNP77jxpD4V3tHxMPKq61bBnUDQpGowhNPjRzH4hSCZUdGxRmwX1Zwnm4f",
  "key1": "3UGUazDKLVLzL1fT4HUKfENh1jQ1pGZhUUxtSpUWstvGKv63pxeVh7E33QSAiwDjv5mH9idJRro5BMb3BVSbWHfM",
  "key2": "t7xR6wAM2mktRvMmqcB84wFuHqQo8uQ6pDpp3v3huBX4CsXj9o6xMMgT8nVZWsxNi88nNZz4qrdjhHnjij13rBu",
  "key3": "4F9nKuB8bY1wTPAjHQJ2J4BZaekn6CeKZqaeEuehREhsW8gBszATsFDVj9Mec8WUXTydp3h8eDgp2STKssZkNnG9",
  "key4": "5FRBjFBukd1YwiWEaAQwx2f5d8uGpudA1kG6P4TRxKtMaZPxkCB6ssziJ5rPg7J7cHi5Qo8wBsjs7Qt3JPcE2z2W",
  "key5": "3iLzm77atrq3Fo245RXwZAMVSbs8VQg7uFpDnYY92TVw2FoHajSBUEud9C3vWR1qBhvpgXL7rbYxoUZpCV9acFb7",
  "key6": "2UtH9eAbqRj2yECmweF2RXwMMenhkhkb8bjY7JDvjHi19d7xAeW7zdVbT52FohjyvQ64to2taMvN7nL3wC8188uz",
  "key7": "xvj4V4Sj4FCd36AgN6Z71GZDjLApPVVeshKWgALrAApzEmcYRYLzz4Riidp6uv4pk3fVJqo82iReftdZmiCPvMP",
  "key8": "tMfwkLS7qgsuQTLJ1QXu3MnEULFLQ3h3okeiLebh3rYxAj5PB4v9KiYGxhQtGzULyeZdPhetR2EiF3DFkywqNK5",
  "key9": "2cog7ixfUE2d52AifETSSnt77eetNUuaa6zu1kuqNsUZN9HTqCfDECx1eZuA4ooeBATgkrwvKw8H65je5qssvfmJ",
  "key10": "2SgJVDwodyi3BerULLemoCpfKLp9xP1bfFgamVdg8SWniAs4EuWQR11rKhZj9WSwXYu6J9sfK8Q7gdK1oUvoEkZV",
  "key11": "2HhuYdZqsKCyaQRYsamiLgjQh6ppJt5xWQasUHb6BgAsNocFzc2YBLTYpw1eFecsH3JgCRs8nx3ai9t6NiEd8Q1V",
  "key12": "3fcUsigB6htXXXNJwe89tqUm6fRKhQmXMyMzV3AkzMEJhtjUTfhhivvvbvzdYX5XEJJTtKwqYDA2JLJ1Yn11y6VE",
  "key13": "2hoUsNPrNJ1efpw3QP4XMZgcywGpYmVb32dP9FpYdUCYEJHq7ohWkY8m2Zx4sGKE5D4Lp51FKTSqHKYxY6FrD1hk",
  "key14": "78Gv5oBYBSzUvvPjBkchjftCuGBFYrJoCiRVPjLcGF1svv5sUsEkEkgvE7vi3cvbqHEQgw4FqfoxwKB4aVGWhc5",
  "key15": "2EBsLuXVQKWu9szWQRXxHpUQN6N6ZmhHCbfasiAoXjR8MWGbuMHBVVyT5GDAjA8dX3aUoJYi7Kxe7pw7EYg41UmU",
  "key16": "5r9MkDnpkXWtZk3y9WyuHM3ZnaexJW5kLZLCc75HMhzGHA2UCAZLv4FhGeoEo6Xm3yS3xk8BUw6dyrxgC5XQDxbM",
  "key17": "2EpkkDAGxNUhUx4YyQsMZ4pyUpcfTkVvZqCLP7SCaaAHQgCTY5wzVjSP2MWWmSvMxJYDTRE6yDEfHAs4zMD67PmY",
  "key18": "3KcJF3g7G4c4xFdfsfp9jYwy4nymr9sd9rU9S2BMYYsPdY7QXB3dwYCQTBVgMZYERwRQa7pEnitb2WCjskbBCky9",
  "key19": "CkmTpF4prW2a87YBtuAKRrKLFtjpVD1NGiE5dDoQyEQDMQLWuexykustwEtEKWykUrGscZLL8V4oAxz5zpDAB16",
  "key20": "h1thLfNVjVDrmzR5vY15HEp2qCUTGLLUheAmwucfqhAg3u6BVUJCi3Ew1CmogkooqL8A1rCCd8uAhMvbByDRyqp",
  "key21": "38rrR2uMq4vnpYQ9ghec5ZRwo7uwW6c8bzXLqRGvv7cYZPJjLpNwMMVNoGtZPcqHK1qHxyDbSoXcqiPAF1hD3r4X",
  "key22": "3cT5YGzMThvLCwc5YG8YhBm28FvxFbaUHfvbLEVgPrLCHYtbSdGs7iHi5CzxnSj2S522NRur5noZfFJdLri6Vr1x",
  "key23": "yEf7Zh5kF5USKRVKsCU3GYRXSraZ7RkmpEanpfvUFVBi9KZjEMbqZtWEWoWACALYyD3EEEDt8gjs7PcEi6neAE6",
  "key24": "93gpL38H6HGZZWMAR5iqFYx4gvN4TCgUAVsYqgGDH3cbyufgVorsXCL9wnhfV7Zr1jrF1pcmuBUt9LKgPy1Ld2z",
  "key25": "2znARRkwyRhJTAhqoasSDPvv4tJDoj6Lz9uXowFhpoTPZQGf26YGPE5T8xS3PagUTrSmfSdPSGbiyTCUoDJ2VSqo",
  "key26": "hnQMANy48gmb29pDAFD4tp2b2hktsX1KLgdTcbPiqj6Jar4GK3FckN1EpaZiG9GiXXN5n4Ase2eoKFDnMYUKE9M",
  "key27": "2GNRtmER5Gy8n71A1aMoedmeEPeTbz8N14YvDMPkSWLWnTq6VFox14oS7czBnzxBu8MnCh1KMcELSpMNZeudP8j8",
  "key28": "HD5N4V7qfyfeZJj1HBjSfiZuYBpEesZsWSZtcjHaJtHD7JjXowach3cVXCabxRsDkm5yz8N7yjAmJgSUTH3kpd4",
  "key29": "4uHVjBK1NKQn7AkTHxd9bgDjC333vbe8sK2zV3jJFexZCybgjJZL7guiAH4AG3VvxkpewCenwvmd5fgKd3W15rrY",
  "key30": "gufP4MsuC5LCvHJJoRuh9ZbXECZDB5JyQDM24NtRnpNPiMutqVtxjgLif1gZMUmGHqZRoLgjfnZdkziKpZc6Sze",
  "key31": "5ZY3bVceZwyWawXwiedMSHooJzhgcmosFXmy6tbzfDVmaXReoXB3amvfCeabXTstPgsoCNJxAdMDbsJDNxx6KkB4",
  "key32": "3bmjB5BWo9EJoutmkHvj1USkEQJf8k9KuaCn9FC3qwHWVf7wyrLK29x6PyTb3M7D1DsthJcHND1gfuc8BPKqLVwU",
  "key33": "2TjfeVRxouw2oCcfLMLRmKDVF2whxpMsaQhqN1zLs5Pwx6gMGdVZX4qrbQ4KPWegtKp9tzVXDZ1iF9m91UQyrzPm",
  "key34": "4zxQfxWhFPoujh69JcBvkPrabirCUL18tafzCrmNSQT9CRZNM32VCtGUgGHwBsX37CQ6UqqAnbNpoikUCRNYr4mk",
  "key35": "PeNg5YYSvfFMEsEJzy5FzUPqA7ShxJZdDWAUm9bAy7tHXinuwKmNhdEFXXbeFrnnnXRGMFAXDakNJ2WRxHkTSuv",
  "key36": "5Y9D3NkmRMdhgvzDND5qmA9HuA2oyCj6qW3eY4USRRe3B4Bhe6VVqqTyc459trBHtJb85Xss8pMTDuJht4sisqgH",
  "key37": "564S8yrqZvsHwNfb1HiNw5X5m7dBNJQ1izxxiyTETcvDMypWXEfxdiArvntjz2Z1SWz6KbnrKrD17GJA1QnX31CR",
  "key38": "WqeJ75L6nwM1FjGVEeBfCsUsb6Cacogy33d9qKaBtL72wKAwonS5RziJQA1JaBgCK1btmRrjykG9WysHCyTSzMN",
  "key39": "HYmqg9v5Mec3cXy8JExkgwr3UQQZHR1zbdpDDBsb4eZx3SDZs8c9W5h2zKGTbN872qmfEGPmvFTsX1gL3858T8a",
  "key40": "XwhuMY8ko8TCWf9YRYUUih1H9mGkYP4hvRehZxpyhCer1gC8yj1hfwAYyBG3U7LX2yD5iTvTue9M8CJmr8eRCzP",
  "key41": "3eA8nBHA1QJZBTxnuj6YmTmG6JUe3ABkQ1zHgUP1mZARXwWt6KB9RPjdUSZT29uL4etK4nuZNiS7o2UsKJcA9LZG"
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
