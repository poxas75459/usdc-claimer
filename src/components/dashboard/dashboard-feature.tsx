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
    "5fZ3wv3YkhRmdLbhhHNCdshBJ4YaMSu17CbJLaxbqY91EjwBAxH516bRjif7ZuWxS5BxjoRXTCWm5KX4inz7anLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37YQybN8b8X6mgMbLSLztvhZHEf5Q8yK92SNdFxpiyLzv6A8qzpLmV8N18xGHomomBj4p9hba5sQMfJeCQ9CBcAP",
  "key1": "27ytnqWBoTeCSg5rk543fF2G9AsQFZ7VgFzTkQFpxP4NiSXPkQcuKcbSrXxZc6FCoNQNhqg2krnWERTt2iCnK7sZ",
  "key2": "3qwXr7xApwpQ5LzCji96LdvFgCu8fTTg2r8n8XTCtn9gB4PQaNmGzDGMh3NJahaapXesGyYRwSfqWKhmGAqtpodE",
  "key3": "5n7kGRPhERnQxX77DLEzGMLmpLAxaDz9XhKYE52gqs7KwoEzwQVMF4nzGq4HhsDj2mtB6wfpJYBWbNWu62dRoHy7",
  "key4": "5sSDeonuaCpa9eUrvaALTgbQJzs8VuiTiK6Rqk8fYUS9Htx4rGYzStQkX8KXwgoJen55tdETYXfj9RiwKNrSzFGU",
  "key5": "3pfMZHN7b3qyKu7TmzQWYxZvBhUXwFFKJZSomxzeato7UsQwAHcERzynmteqZhSEVNe2nMpF8wXirGLcY4k74aTb",
  "key6": "3MYwjbmTmzEqHUKxcSUptuCr6HPDtGRCxUFJu8XAL5wthhTdEHepkh1ChjqtdLnZ7L5vG7DrP7Fa4nt6KWqqbob6",
  "key7": "23H9cXaLuHvxF94RuU7wwbGLPAqWZtfUTx21T1kgQkELsX2P5okDTaunKzkNuTsuLNV9RqUje5sHUVB7FG5kZLYi",
  "key8": "5Hr5j983sJyeUgQ4FUvjAkHD8g3xvsAQs7dvcpNSZhwkr7x3bWmAoXa7zNxcnzxGfY63tNpPYNfFWCwVkBbYwJKi",
  "key9": "5TtPXPcyjfCwKBR6Kax5BmvWHcn8J9CQ4jyP45eKRvuKcRfQvaCW3Riq7aWwdTM9xrKQXUS5begMUrTeZcURuKhk",
  "key10": "5mqZULj9BQ7YHH5iLchpsg8qdZv2LBzXeDkeiDwA6TPSKoHBoEib8noLyyLG5vxucGoLETZtm7P48BaNjR9Uj66C",
  "key11": "5szhTXujAdGZMdDS4hg9shQ25w4evKWawQoRjqkuRfstzk9gdTXFNuJ3u1oSAZbr4zioKGbrZnHjun9TPHE7NSQJ",
  "key12": "4CAUYC21tSMZ6iufL5PXiEawJEnBSHRqvbjt1vwdEY3JwRTQLsoPnv3CqEvXXHcCsSfkfe7QQrT1LTy4L49dkz7A",
  "key13": "63XRxNF3aYR6Nr16PLoheHoWA2G7PNyL3bSVCxs6fRLyoPeetq8mTgb8u7wPWWKa7QRCisoEfsJdJGoRcMu42kyt",
  "key14": "4C4BXHRyKjMLZfryFsNgAxxXTuHYSjjc9oD88XRzaxkgWPHyaWAq2KjLc5P7eJS9eFwUVXsNotpAw54CetqFwvsb",
  "key15": "2NJXhq4U9G2RBZpobtEEX5AkuhyjP2G4L9GuCt6btTNX6qS3MDff9Hd9jpoEcM4EgWNaoFXRtjnghws61TRAYWpM",
  "key16": "4jbUT879nxYhhbvJVhUjt14eWQJzJhQjA8Uxtm2oZKr8DXcTiLLmUdokY8S6mTMnF8quv3AJ3odxVJShs1UP9KsW",
  "key17": "3CE7JRhXsyEV4GsQdfRdmqYTWzB52mbtDnPaHj2DKjFWSqA7c6icpzG9XiG6E6gQrrgetPHqmTXVvQatmp6EYnpx",
  "key18": "5fNkhTYbJGUGZv5uCdzQegWA5LmTTd3PzS5aEVyRYyqC3oixpoutrArmbqGRZwag4Ax8AmWto67tcGdHA3wkNbhh",
  "key19": "4X4VcFpfJyc3X9rvs3sahjzyMderx5wrQqL77uvcNk5YrKvMoFYNFXZeuaNTY8Hc6XrnyrFGs3Kt5zFpvRJKaVPu",
  "key20": "4eFSdYkWfJtxqphk7QExMoPkojGdBaV3qWHhN4QsejND1KQPGdptnJfZ4AkkAQnPie1NL6kawugngnZZpkhoYhDC",
  "key21": "63UBt2Nxv6SUnr1Jcchb7yYSSjoyJTs2Sp4qd6H3PvZTDrAn9K7GKgmvVih1vPXJwqR4uX7XEKg5vCpT9nyP2q28",
  "key22": "2oi2Sa2hKXEs8iMoPcXXpRjt3tMwMVSNXjTMLsU3rhrheTaY9mzDyFmyWZD1CeD1wW3wbZT1o3tZ2HVCZz4YrC4j",
  "key23": "4b3rHoUDsP8to1MfrRN3anEeAMBFvteHxKe4jxvU2dwk9Xzf7BXpk4Qu8oDyRbiEFv567LFhFyFGJjMDw6J6mhQT",
  "key24": "2DRvzSA2cPSU9E6NkEA1j4juNu8k38NPcpWcJFgF2Kohrtw8K2SomwjEERqQbSazass6y5CtMFNrhKEh5YWq5aC5",
  "key25": "47gfh8R3AZdd5d7b5BXWsyTQsjFQKwxzm24reCPzKUJHbjw6aughHByBfKtNmSNS4n9kDkxVf5XPQCZQPpeMsbSK",
  "key26": "5nvtDaBD4jx4L4za3cQRHUg8jAsiAVCPsNHdKdE3b1Uqk7TuRf9iFFvuxM3M5kedMUizWxrct9P8vKbc17RuGeh3",
  "key27": "3xnDK5KUpTiqN2Bnp9sChd8Y5GXV8zpnEJSfUgb6zsjZtxhmkqEq682xzhWbLMwodkDTJThwBQZao6t23gBVAaD3",
  "key28": "46WJT6QRdcDgQ1Bp3ymhLYzXAL2DkgCqoGk2xqTkn7xbaMWCfNqYX8qAZfwpX1k2eWedtgfjC9NBntL88fiP8Y7w",
  "key29": "9VVtB2wMVhne9QPqjDydNe5cnoKroKZhtxLK2zwyrmyVTq8QptBFpH1dhSSMj13aN8Y7X6g3gLHCq2VNH16dGSD",
  "key30": "4eZvrpnHkaW3qimAdPdoWCQy52txZoEav34AKMgFYbgFSW3sJwdkqVstAxdUsUb1Go3JncRYgLzJiGvbpgWkzYdZ",
  "key31": "2aVYgN7bivegtbXxku7ddfBCiVAbioZt456aHGiDqgqZsxasjKxoYMbnbjdTDb16iNXSfZvDgAU2ab2aVqX6iLc4",
  "key32": "2g2Pvpwh6e12i8hmUYjrbm9tGgcLdjTmSz1zYdg95vKFE48kN8yDcApSyWAkQHvwiRpW6L4BqAjMnRkYFsNXzBQM",
  "key33": "4yfWrL6MwJB5M5UXERaTZVJPke475jkweLhg85ER96zy2M6QcGSwcFYg8uW7K6kLrnWW3BLhShp2pSQFEJGbHUar",
  "key34": "xkncuDYD9SmX15m8qhN2Tk5b9U8WkVAb4vvJ6b9WrLByvVK3EYTn83vqwBFx4FyX79PYSwydDvtA5Rh2QN4FCfo",
  "key35": "2SSaacMunkUtnWaMmAxk9QzZkLevBro8SQAaCA848GHvkvVRiMWY2tFb9q7Yy5PWmqbN1f1tR5AKPmpd56VRFHAy",
  "key36": "tf1PVh3BuoLUEwH21dsqDD643AdXd9Hck2ErRG5KWd5HZwoV5Nm5MQNDG3PAafAgGHhfPG7s9465Yy9jmQPwpvj",
  "key37": "4fky2NdNEnbN7esgofJxN7jKzVbXvReeeY2mN2wEgXWvfkqxYdav3QoZ3EtQKXPQZpW9XwydZ4bpjM7uX5DUCgZz",
  "key38": "2rqgJYMkTbD95WcDyAFgbm9TbEcKKitcJUAyXeLky4stTdbxX1JogESemyxjDp55M3UpiSCCpFUYYB4iRcUsNccS",
  "key39": "UhPefBPUcH3XqBjh1dkvWbbimc9NFugZtVwT77JcrkWkikhCVqKJqSEjKKJbx5HcqnxQeneqgEGyEobrXaFA8Yo",
  "key40": "5CoeFB3u63ShHRyXQp2etGBLGpBFwaAwiZdtWLdS9oe9B1YLqzncpqxohkV6UFsmFsn1EWTNnFKCownY7vktTX2v",
  "key41": "AodaTFnCoPhrESwm6dyynGpCmEm9PL3wLtNtb9ygmB2jkUMvdYu5Tot264R7RYwAAiSTMd3NEjteGjkNfehg3yj",
  "key42": "KXeCK1qLdPg2egmHx5FqT895xkm2mxLZKdyiz9S9mzJeif2SaBrA8GdZkHGttH1zDRWUdUbpAiBkm8RDc5eWbdh",
  "key43": "67N5WELHBRhNnNkVRbpEdZESJN4YmrMzmzsRmR1HXmxe1heZ8VTELjxFp3s22FCEmWF28okjYzTbEodmf2tiGpPZ",
  "key44": "5Ynjks1wRycM8Gt4GKyxjgJmypEenoYJpXjVn5dtFBYFEhqcK7RTb2ijTSdoVzwkMD2RERPGxN77b8iZJaE6R2HL",
  "key45": "288FCpy4mf9poDygzduJp3TJ4i278bnVSGvwj7zh8CdDBPAb2HNtPYhikeXomadEiRbuh5chmqVkBf3KWmoU66jK",
  "key46": "4HCgrMkVJjnQMRvq1L3J1CwXhA8n2jxdHADrF9fw8AMgjkPANfRtDTLq92gGkqbNj34EzbcMgGgDfj8Y59PRCDzJ"
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
