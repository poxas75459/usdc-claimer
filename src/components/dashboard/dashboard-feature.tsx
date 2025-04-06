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
    "4ZxqJdggD2RS7VvdC6ykM1dx4Z9QKNBtExw5VY3poBdypNPEuvZWEg2367pxxyoNuSzsjAzs4gJHUrgpyXaVtsjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38MRfxDL8c5SvC6AvVne5FzpAeKCwFYDXFMGEjCyeFqSwwRz99yon2U5nb38NrzJ6TYB6ess8rhwTeXiWR2cMS3R",
  "key1": "33jBWTEH18RfBFCacWs9VEJCGbbUNn4oefGNgV3EWW9jdRNuJaAwvJLKisjC4oWYf1SMcUcwBaEMi3b51KDy7azj",
  "key2": "2fdC4yDqnk5Z53MK5Fn4VX6CmX4YpsaMLc54oiUV3CSP6j1bXVDJGWfxhceVnqM3waGyCJF5ewsgnHjJzVN74qDt",
  "key3": "562kCQ4CHJxEzAgYfvfKcj8wAaxAsMVENqa64qXqmg4Gz49hYaY51KKteNKvG4NY29hp2GyW6azKD8X5EGraNH4N",
  "key4": "3bjxgBT8CQthzzhA5cyAZVDm12GuLgaULB7KLtyiMeDtfNh7NGR6fL4yUaLVhvV6LytbUhSPk1yL5xf27UnvrUix",
  "key5": "2Uyh8Gb9Vccksg7nRV7uJ14Z9PTGrQznSKMvQQGW1xdMSs3rKV2XmPkxu5byWVbDwG6TL4ThFreadShdSnFgvW4u",
  "key6": "3iAguze3pVUQL4L9xLvHn4g3q3sPWJyMh2HWgDMY3xPzKv4U8wsjhvrnt9qG5kEB9ZYV4FL1zRYuBUwQ8eLrn4Gj",
  "key7": "4g5LUVTuexg6ocR3kfLp78ed2rDzr16hB5Kj37nkm4XWEsiUVQuPAWgSvmxj2ihFewwdAghen9UrGAhFYV4JkG4F",
  "key8": "dP2io7wbJhYXKfr2mFmdg9cYSMmMuFXSaP9Km19wx4MZcT3bNKmCYv21omMr9JxnWdfitB5wD1ri6xN1S3xVwis",
  "key9": "2sDN5KHcDP7JEtzziaoZLjoxvsnGw7XND33K2YX1qbTeNAHfAvUT3vtvKjmPgj4K8kFx2jTAWe2Fr4XaJLXy5Fvw",
  "key10": "4Bevay7mE2pNw61nk9EuVeNVVZpGD15bzSvs7qwQ37n1sfNCQJ4xfNAeGmCUUghnESUr8S862c7bDCrEeFU7Fx6D",
  "key11": "3TpxhfFbhCMNBMRqQbxmWDKQpQrduW2dcuPYWbmUDQsqgtYMfs9k9gzJsnfbdF4KdFaq8unWuimFaSLPxNs69C9G",
  "key12": "2Dtiuo38i1KdfcBbfhnY3YacNfkjtMxiswmzjF4uSiHkV3wHYRuc381QNMHaSF6M1ZjJ1d1nAnHHfzvmiyuUhxjp",
  "key13": "2Nfa7GVDqy6F6WTGagZFBMV874hymCcnKc8w6yyXhrvyadHjkxTfutFX63exgV7MSSbfFYWsPeqBiWEGFLwXpkav",
  "key14": "tDNTmDkXQPBmWDLiyP64RBjESNTGYtNxZtczXqVFHGCox432XDWa1q9qCHfSLodwSjah1fnKZpNQDSpfpzNx9g2",
  "key15": "4keYRK5wsBGarZKhQjA1rh2gip7YzifDEaEkAexbmTzGn2DLmZJ21Yz4jjirKEHRYTW5sJUga1tVH1gSF5hsNzm",
  "key16": "3zkYmtxv5cN4o1mTt77nU2sHysc2ym9hxVCFWaPFc8gmsJt1QEvGWg4jLyVpG5uSib9nx84j9RhZnfNHzuzVkLef",
  "key17": "4vD4TfHiViZWer46LpJcPdbU95tPhZZdxxjbmN2YsWX6y63vKUVHxCCCqUcRA38gLEJn844FVqZMDwAoM7qVt3rH",
  "key18": "tiAGk2mpPrt8ynSbR3WUaXBEBHnDmFFDyKBXy2N6qe5ytk6nFwbwSqBtJ2MobvWohLS6iWHCnL2bQbo4iiMabvR",
  "key19": "2GaSfGsdCzpF2YZQ8mk3jhvciskN67BG9e8qg9k6QArY7inh7xoRdappHNcv8EfCbeNNVGhUbZT2Tch9GF5nLnpv",
  "key20": "62mmgtfktQYPYg8sb9HSzbUkHCN1Wm95JQZ7K2wosVqB88LAB2ExVPhBuJxMmgQEL8o8QE9bV44cvvAzrbMtcnpS",
  "key21": "GC5rFChKWtuNcZGrkf3B9tzPo6TuyvHYGj1WuozvgwK9EhqrNXMPm7GFGzQu6ZrMa72zsL6Nef7wzRiJkTVJxoE",
  "key22": "41oSCSD9zdawcbbjzVUMwXL5UPKQL99EJSGZNupZGTCaheyPs21Kn52EfUMNkhd7n59uQZKNB9nbvUb5dkfTFUpc",
  "key23": "hznrhaAheBmEZtjYZPRHBWiw8q4nFmsLFoAACSTpCfZUXB32aqJ3imZXE8nBSwDDB91pYwtnEpWQLtJDKtJX1tD",
  "key24": "5yVmSWtEkueuBZpzHQNfbnXDnbMUT6sWSgyihHzQ4Cek61bTbEdphMkJU64nZnjW2mBG61Rny1VxoPLyheGDuwkY",
  "key25": "2GUGXkkFbjJ3xMUyCb7FzpnSkpsN7cUfPFLYKKYxM5yCSXPX1JU3g6ir7tfRPmGe1PqnGW4UEYZBLPaYLT75fdB1",
  "key26": "2vJRYdMbuDg25dmDgzP6fnXkPYhXSRtHyUdZwGRkUUKZCJFt3cEfFpa3Ba33E22eWRhDajKxKPB76Y5QrJbrHkZs",
  "key27": "2d1Byx1mU31dvnRwg5xMaBeZYS1bBXbr4weRbEzKp1D7eQBoMdFSNTmnDHqFJ1PSXAoPWguePXWd2TsodyWzX3WM",
  "key28": "2ivrrxWEexkk2XaVvLDdNRyu6dxRfJRhLrhFDmFMMKa8SAk2CxBg5xTsVJZuJbQTiPkF6X4b3A8pofGx5uK1wovw",
  "key29": "iGFf3UTLJ6Fbr9CQnhzhEkdg6fm1uN4Lb91TT7nckjVTFwdBzekDf9ComK77k2Ai3mndnk4RSvubrFTQoA15hh6",
  "key30": "5JC2JGvdcUTr5RZyp6ZSd6GtCrMsnLzPzAGdRcS6oNWac66WyS7XC49cgxbwgv91UVbYyvPv6p6PtqgHKqi8VRqF",
  "key31": "2aiC5WtuFy3tCwyj62tLwKLrvAo2zC8ZK4RvdLGpNFyPQxfHb87WRNYcWrDJ891Ue83ZBwQpqpnGsPGXKGQ2JMkJ",
  "key32": "rTSu4HZdAhMyBGcPU3ja45eSRYb6W1gSNVSBGDN8KsFoqSRQ9Epz5ordm9323qmdpGSHBJzDPXYRZNDnkbXRk2d",
  "key33": "xduyCg3WSA6zrLZ1Frx8tBLGWomL5RZ9YUMKVsfmf2bzZ1zwYC3jyHXEkPvESWy6MzYyC6e5RobZQyJpBsRpaqt",
  "key34": "3NQpBBquayTZPp3oA3LPgFsiv78D82E3BL1KjnmU2Pm7kzwhueg96r4SDypaVDVHNR4WZCYDgeEo2ShiekTTshW8",
  "key35": "4B3kjxMNmy2zVg2RNgVSDJ5yiCHQUXhVpRRKYtLVHzUrVSgytrpZSLfdwwxuj4SJE3TDQ415SnPe4hDMjSJ8cwrf",
  "key36": "3e8kUA2a2DQ5fmdYGtVPd4Y6mQ3L2BnJwWWAig3Y6RoYWg7pKH7njYE31ePEBHGEhu3hQEi59qvT4cHJm9QArvsP",
  "key37": "33u6yzAPjYoZQQfPLuAhYw9M6mHXoNoEYHEgbbXGTgXXtb2TSX9EzB17rnRQm9P8c9KshzX8Hzz3ERgG2o2MdGjN"
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
