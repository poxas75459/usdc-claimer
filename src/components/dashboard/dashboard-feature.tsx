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
    "ntycsEBHUeb7JuySm5tBaT89ehEjYhXfD9fZhKfZH5kpMkkz4sLBkpj8VRS97DnN2rkTWikpKnGxiC3LJ27McF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V2NmgB9yxVneLx1jwJnPR86AvtaL3oAVgy9m8trYQ7Qxs9zM7dgeM5nvjijsDRfCeqMQXE9KFgZDJKWWDxq9sRQ",
  "key1": "3RmUSAf2UB9dsCwbqf5jb447smbgzTQXTJy4pF6ZQZpxa9oucPysuZgZcLTzb2B6kLeT8Kt79TrDcmYnC9o955Jq",
  "key2": "5MLf1NAtf9qV9NF9Kn53CnuKWxYTQjn55bj6ubqxBhsyvYBTriFc42wmJAeE71pmjC7wjb4dQqiXvJubqSv2rpqw",
  "key3": "4jiXRKT2xGL9uS8vmew2CfwVTErAU1gj6LQjk3aNEGbcYjPyo3uNHxPi7LX9p1dzdPNhcarzMqDh7s8qPRFVKCBc",
  "key4": "4vJSUhMNZg2itDXpK8Ujirgaf38ya4XpSeJBFHebuMzGd9utT2ggzC6iFoag2xyLuYcnTYCMT9b389A1s8bMRECE",
  "key5": "ZQged3bUN9NNzSczG5rWQAVggmT34UyyTFSMSTikc5obEaC8N4bagQi93cPAAMb5kMHW3sif3ZzQjLTtjazTueK",
  "key6": "2HWpYzaVAUNzVYRncRo6bfzyg6JQzVa4eo7neevLg7bmkXm6ZwXWrhKXo5ZB3iCt9BS1kDD2zs7yELHPss9nF3ED",
  "key7": "2R23UcdV3ATBpMFBmaUgm2CXALCpQJXJs7tDfzmq7BSRpQCJH5SNLSph8gVfrUzjFA6KT33gmTT1SfvGq1SqZpRc",
  "key8": "4kMBonoq6D8oKmhcAVkPrTnzvyHnYwA8XJ1beMtXp6VVYbcNzyXRW1oVvHT8ydRZPsQ2bPTbJqMkw2kCm3KFySg8",
  "key9": "2hp6c9jNfBXND785WeGWWKEUvBtw36gGc2L26XEtTPWDPa2hLNEjqbF4qVG1jKMCnYc3fMb6CmXkBgs3nvG42RDX",
  "key10": "2251bQgCuxpgduZooKnb4dn6CadjYUobXPfW5zMhDTnMHpfHHbYYEbJtE59aeFUG3KS7XKNYDQAeDMdykVJTiQ29",
  "key11": "67MzMux55nhDBubtTjXwaFbz5KE9pDrApAMAUnW2q8oJCh7MW8KgmS8AzqTCFRZwgG2vq1GE72xMrjbY3ZeGqMRp",
  "key12": "pS8KMgsRWHNMfFMdeNiunSdVPS3PEk9jw2yTPu2Jgf3Bc6aGmsRsA7zCUfQzmuPSGvJLqu7DqGwe5HnKm2MCU62",
  "key13": "FkoYvKq6Yf74SUMTUsTXTth1qvnBS5ZiETCDDDzW47siJudpsziVHEa5AGqcbWDtxZPc3vyQYjs3g4LpZRKMzdy",
  "key14": "4d2QXvYodvmRCWksYD2TSDxQwjfCSsPzLwiENpeQT9iuR1xF5PcT6g2s2sykUDbjmscYpzXx9XX4yqSijJeiA59J",
  "key15": "5js4XyhTHSK4GKhbDQpgzAFhpfskyWmjLCViURkp1svfQDNBvWcPW7zw4oqgs6BGuoLn2XGeYhxFUP9ALjqLjEFt",
  "key16": "4K5sbqYgSAqsAjb2iMELya1UcoWAq4eKhQnUc4qd7EU2FohaAifmdcqMNvwUdhiMRcD2kpnR3duPMndQ6MmoX3nE",
  "key17": "4xgLJshj9aCZmJyzFVsb9sCyKk7SX4E2C5XpWmJTZgdHm6qhAUtaSgx1DFRpHPG4QE4W6kihaaSw9F6DFunmYG7p",
  "key18": "5yGGM2fypHo2JFGLr7n3ao3uL8ijPzxjSJWhagJj73ZzQ3dQmT93wMhLVJHzidjGFJ9ZaEcrHohCXZC7c8UGkYds",
  "key19": "5xxrMs28dhs2Dw66BtFXvKAxSms8fN7FQgT7HCMKifi61eqNnzx2FaXdaY3oFNokbJtDDyVNjZKPhUtSsLeEAr6f",
  "key20": "2EmbFJZ5mV3K7Wv6yxXFRmDSR4cgbhwvMEu5TRrnDZDmLxFFNLREnHDcxsdSiDe3qb76UUiGeWy6WhAPxvPZp2jE",
  "key21": "3NWzGySjK7btA92k8yMqfCvD9EKgSy7N9rEHczBGoCmYcJojfewTPGK5zLVTvsFaBrh87h2VV3VgvkVgSmVkMVQY",
  "key22": "48VD6yePoDiiq8t1aGDqB7rKQ1jEGELp6pxJKXA4v21d5MNKRnTJ6kuqNDZFpsmkSzfBEEyEE4FZoPWGdZifS55G",
  "key23": "5mn7DXwxdz7jknU9YfYs5kv88YRkGgo2gz4fKLXQEDV8bPZEMxWbx65PTNoj5wLQADuYa2eoaK5QjmpmoTWRAE3a",
  "key24": "Mq2A1UYDCMoW9RHgHAXcpNKTr8qsNUrp5uTU1eZMPtjQD2CAKCtJ7B5Vcep3g6cFUGW9HbvZ7UpePzRmCaPjnsB",
  "key25": "aGCAoAYDJJezi9TPkQAKN49xVutjM7VRGMLsNDzYM1nspVbjmd3zb5TuoMX5RF2AQxPK3mabak5V1k5tPEwav9b",
  "key26": "4iYXrT8TzYccWzswrqoRpnsrgHr7b1oRGRva4gbvWV1YrpXRQ3AWRqS3DJEnh6kcwpT7faHtaCRA6WbvibDqgN17",
  "key27": "E77n4spMkcdwtepeezaq8X2ZDZ5XCSu7KF75dMUb4dEpEyFnoVxssAVi8b12jemvdUq8qdFJbnds9ByMHSApfJM",
  "key28": "28jm5goikwDxucMh9tkxPjMizgjxFFiDa3QGuun63naef676H6DthxbvfUkCofn1qdiP7v9d7GN1AWNnV3WwzBfF",
  "key29": "21QJkp2u7eAMuZ2NjQyArZyftbxBwSkMjMSzSzoujhdeUe1ZZWdX4ZFg1D9rKER7yQyXnfoSXLeugLV99ZM1iEVr",
  "key30": "4jP5oqyU3XGkabDeaHfmDPxqeiTrBvF8hXtHuwqgo93AJUhhgJtXMxganecwX5mgVUrbpN5EMtUpabhnZS3bf7Sg",
  "key31": "PnnR1ReUmbfP9iazPzZy2iXHeZ4wxRkbZNWDy5Bqgv4pRzkbFeBqYxJULFK4Lx1WQ2pdcJmYKjHA7JY2uNFBHEM",
  "key32": "3CLcd7W7pMXcfJWTXe5Ygowq1yPkpNN9yonYVs5TVjMW9p7Xe3b2kRt5GMiFvbBq4sfE9gtG3EQ2p21mYX7Ag2U1",
  "key33": "63YoPPK4RHugQ2xYrx8mbVrXHgk7raq3MFs5ZXET11hyU8EuCpktwk8enbBK69auyKgbMegxVaGKFf1n4U5fCZ9u",
  "key34": "5tPLgFZt8xUP7zrraHL4PSPvcoV4GjAtCjJY9kA754UPGToXNtti5BuF7AruBuCFw7V517j6D87tnmAitPF2hjEm",
  "key35": "48bNNe2paqgmtAUkXqqNRSGYjrFg1U9hQDb5iaCruKAQYu38qovn46xYwbTaL9u2wabjcm8b4KpW8ePdKoMfsL4n",
  "key36": "47iFd8k6rKiHCgGP6T3Vw7RCDNqbpE7qCbX47aYnprznqcRq5nBQbV5miDLt6RA1J8xhLnuSVDVF9jKFdGCRzodq",
  "key37": "2KCHAbVKcb5heihdRK5rRxYyciBA9yqoAWjQ1PCvmxxqJBKzf3dfzgnRcDZhUxoFwn5XMdANasasCR3QcYjkh9iq",
  "key38": "3E9kDGr8d2KrheC6ZMvGo9tY7Aihn6bYd3yPohkhNT8BqmLheJXj8NuggCzMZyDRNHueWVD7kx8Bga7AH1vbSBie",
  "key39": "3uyBwoj1gi3tQcVQcvzawjTdQAgjrkWEL1KEGyrM24SLhmb8aD2Gk9VA3VHjm9brpHymCacbhbzvSAfFM5czGJdz",
  "key40": "gaBky1eHnFqWgQ9pbrFdXh99RG4tVhEMnGMfLWHk6RYUex6qv2ZQ1aTgs77y1NB2cBEMCFNziGHWKwnCgjdFDXj",
  "key41": "4Xo8mRC8rQVNczfkT9naWTqEecCeuk93Ly85RRrPqw4UsZTDSE6YDm2XTfAoELgGg4XdyuXg8QiqvdqjrQnP5NWU",
  "key42": "3xnvhr3wfWdzVYKhMmTp93F1YkZYoLBMq4nCt8VWDkJS1K1jqaNgXSCBRoWsPMdMUsCQEDENXy1PL8zN66xbnwtV",
  "key43": "36mGJDBhVmxKeK6carAkyeiEXFR15YJXSxVc6z4PGT3dg7v2npzfTeRBXffQbUmiqKLjeRNuXQrEGLMgpKGBDqPM",
  "key44": "2R84kH3kHzAdNJi3yvcq51gGQ3Gwq3ufx16ZzgQBUjTTb7QvfySf4LZLeZZ3YCrQGS79G1Hkd7qozRiy9d1MVfQR",
  "key45": "FUcVvqK1U81vRFAPfuxmSK354UGysnpLzkhqeatHFjXtDavsGiLDLD1CvCbu6ydm8mTgKZF6hqkfMPYDnCzDJYo",
  "key46": "46DAxK34vybrTxYtzFj7MPNhqcLxWEA6WmRFpCkeSppVBb2ENpbgV3mB7ZUYBPRBppDKYJSoEDDj7qHKsFUXE8RR",
  "key47": "3KaLZ6Ve5JAAe5fPiMqMYzsML7dikoJToVwJKqG6LxeMcZjubmJuwVMwGRvycai9e92BwGyPj9g8H7FJBhVDAjBt"
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
