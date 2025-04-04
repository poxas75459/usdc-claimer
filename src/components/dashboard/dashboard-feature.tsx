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
    "3W2aZ64oyR95D3XeGjqnLHGMzuHffuThRg83sQGa7gAYiyhpyGrMUBBNhJNwczmYVpdwsN4q74t9oYRskRyD1dtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5kgUNvGe4t7jkARQdgmW3u3Cioi3fUp3rWn7sJ9xKk1NGrEbqK35yGDi3z7JVUfS6x1d36qwTwtx8r9wyANCYs",
  "key1": "5K6xkdPSzS3rJZU9mqXYnZcFU3PhrFMKqSzVRTYQPwFZgGimLwK29rTBQ6fKDsv7R1H35SiHYNEWtinPY4DRGCSc",
  "key2": "5GgzcyPYGxsd6w9x7nAtgRXH3pigBeDY12DiokvEUiDe77Qp9KKp7NLb352oovgmW7a6fx7vYrrmFTtiV3NMHySu",
  "key3": "5GapTEdWGZDSefaWCjuZR9E3z3jh14Diahv1nybKwp7G2BK8AYaVdugsRWbsa5UEKMFmiyfwJDSgoKqCVicT4wyE",
  "key4": "GNXZ9LzYZKPvwBKQN2U3ovwCon7qb64zS1RzvT7gggYj3n1dp6PDwD5FSdRqNZ6tjjLQvEqatgaLYxczBZPRsRR",
  "key5": "61WvesBWNY1exLb8zy4SoLf3bdMWmhnuQyMmwoLDkJoDaaaENmzyNmjd5JVDRU45StinRRQ8nwrhf7F5dubj4Hpe",
  "key6": "4KaAnLYW5PgqAwhE6PgEVASiAMs8TXosJtjQzRNoArWP4zWbKpq48z8C3joQn9WGwVNVazLyX3uELHAMAWDpBsdb",
  "key7": "3o7gjgGAD8bktpuYPnaobeqoWQ7ScvBZujQh552bpBdBnmXNXUBLodMqVznEaUKb6vzaWtKopYXXbm4EcNoAuk89",
  "key8": "4WsRxdmkQXTKb7gasxiXhoBHLDYwDmZ7jMkqr9JfX4NFPeve97Um4GNj927iSFC8A6rAFinuto6yAkkyxaidG7U",
  "key9": "5jYkw5Wo7Ddmoc74bqL6krrw6TxgLZ7uKnWzDawn9TWzC45WJBBwhPzboB3YYz5H2iByKuvtBJFdhJzpP11rCTBa",
  "key10": "4nQEcXURufYGZx9UAjFUhZ5ghtqPaBzzt5wCKWuhXvSiERSEWbPwvWBxB9X5g7AfAoQnKeep1qLcWgCfE3rAYDJH",
  "key11": "3r5P1Upm5133oK8ccW1qyFGBTzokmMhFYML9vpJ8d8dKd4DeJse3YDAZ8VK82Mh5zKg1mMxX3uNp966xfpRu73ie",
  "key12": "4DiFgvVP2uHHsfrMPidt511uzcrwV3fkbvYeVgWEHFC1B3hrXZU9vgPTuykX6o5xanHJPKUJvrWhbVVZTbAC2eaK",
  "key13": "5zEkTujGtRM9D2xcqTGH3S12tqvfdkjmbJZ4M8X5hMX8V6EMAoS8ZH7wMS8HVVDLcd8KjrQNUvbKvdjeEyF8kb7X",
  "key14": "3995Xf3doQwicdFtBvZUmpQdpa4JvJgmm68v4TBX7ayrwB3kD9Rao8scneSmnJJ9NGghj3t9BF4zyG982xhrk92U",
  "key15": "2mQoi2KRWZw8fbrTohfpt1xjja4FYME7yXnKwW4yjT4xmpuZSyuMFuJkvWYKEFo18ewkgQjW1AcLWTP1nP9sNnyp",
  "key16": "uXVhUcqTejKF5siakGzWxQUHnDZWNMgo9MnVxfNWwPrDjwcP9TcuYFdhTmRRnLaedsV8DLCTXFeaK5MB9aj4ReE",
  "key17": "35cEcBrGhSwf81rniB9cciVkntj7H8HbgjinUY2kWgXUtXJjX2dWJobNtDz44A3FBNnkbAt8obmb9kBx3p9KcpT5",
  "key18": "2qpp33kzTCLD2k4rRkvyq7omymcQ1WBXPCvVFEwUb23i27Hxh34Ke3Vr5xVdzKJukhUY8zeysUKk4upbTVsqbR88",
  "key19": "4PBEZ1V6AHFBDGcCRt1pHVeh3pzTaFzg9Wktf98nvdb9EozAxcirFrMiSTZw2DzcHGpBgreemEuBqE57QysyZdLX",
  "key20": "3wkkkShQUgcUQbwRerLuVCJhX9rwrYmVQ2WjkbQagkyC9mtcvfnUTWjXyCBoc63CSYBdJEdodWMma52p9TSbySY",
  "key21": "44Z315kz6Ji2oMAard7ATsRykJGHQRzdc8Vf5PfM6HTyazHMKhg6aDhNuCQSpuqe6No1ATXCm6UhTGjupduFicXK",
  "key22": "2x6YTHenqQ3bDRcdjcSvP2r7Zn949LfegKN2kUJG9SCsqU1g2KMMFDjAHDRWYzSTmQ14qZAdSVVPdsioHG7FiXmY",
  "key23": "4kzfmqrWbPkFzSbRFZ9xYew4jWi3cDJgFXFqKVmSjTxWnjNMDJ3XBZvkYsYeHmQmyWxsRTZxLAR7w3HjxRmXa9Ju",
  "key24": "5bMhWCJqoJ7sFXsjx3tZ3KQP4arLkYgtpJsy2dTeHg8oGHuUTq7YXJKrVHfLUsEZKT3vADUb8mMfyBdRjTgxM5C4",
  "key25": "5gS9UKvEYm5LeCu7hxLwfaWcS81Zbikp5VxU8JCFi7g6ricnjGn2dTmnLxcCFjPMhzuvJLvPWyqFQnxDbGxm4xQ",
  "key26": "2Ww8NGennyVGGE4bokJmsoyZEwX7rYXZb1iduNTmPAgvST6B5KngZcL7EVv69EHnoPBXwx4roBkD3jQsHfDvu23Q",
  "key27": "3TEZ6oazwFLx3rghDaXgC3UUUeHZy3MaG1v2koW6guJAaY9m3Vv9kESjt5T8QqcEU7x7FkyPico5Wcmc5Uwco8M",
  "key28": "3bXEzKUzV4CpPe4b5P4TA26aJNm26Doy4hT58YpDL8ghUbLi3U4MYFpHEarr8MPpnEmZL2MBUHcX13CZGtJt3WEa",
  "key29": "4qumvfDYEHrsehpVFi4MTCYeFxJvo8akLXFkRZNPNCmsFJFDxX26P2U247DiatFFHLY7Gj1uTctQ6bLZCMohSq3f",
  "key30": "3RMzpb1eFE4k7dSBEwfv1ZZANvVs7nZg7Zu9RP5jWfbrf2RmAg3MVsLJ4c1UKKA9cbrtM33KYXX8TuxDtbekpvqy",
  "key31": "4Y4KpzdNr9ejPHBiJ6Yv7sHGr2hWs45x3xAXQzEttr2aCLpuCotsXYnrhR6Cfj7irSe7VvWpFwzJqevy8TymYwce",
  "key32": "4nVYfgkxsMyJu5pEYkaXnPQgBnzuDJAKpUfPg1TUx1q1PAMKuW3WxxWgjrRVFynEGHzfA3XXXVzz9Z5fWobpMHYL",
  "key33": "3opfHUfGwpDecKeHhryttH3qDSoBVCTFk6RAynER3KtpUfGyCLzcai67LhDLdJsfLtn9aiTvXqU2YQ3qJQ94LqGR",
  "key34": "5QfeZpGdZLyQrWkvWuY76PtX2f1zA1se3TCNWKY4PCgAbahCu1uYYo2ozEY1uby1nUX4Z2eb5KWvbKUPaFP2i5wC",
  "key35": "38qN7y3MN522NLKkePSSH8igBBXYwHY7a8GspmUgr3Y67twQ28obD8wbXvGsLmPzwnyoyWNWZtV8n58L75W8ho5p",
  "key36": "3XFQq5eDuQXKHir4BfxTpAEG3oq8JM1HJN4XVAqGVfk3LAGLNUGFiAkfjCqqBoLooXpCNAgxVtfTkB6KCMb5rj7g"
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
