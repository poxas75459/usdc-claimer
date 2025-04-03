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
    "65GMCErjAoUZ4KLZzLeDDypgfXG5CGuhyJEYKnnqmtEtYWJ8hzK994V4zkuycHq8Sc9VxVnRwWg88nE5FTjVxYvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4adEUV2KtqWg9EGRYVWF6FHGb4P6S9W1UK97P176VfoBZ8qN5WF4jk1wwZtduZJCgWbZu2XJA5P2i3tDtQuCAR3f",
  "key1": "1Se4rkGCJ6DujCJiudYMnrjQUk3EHzuodGRuZjbiTy99TVcYy9eLAzmDyZis52ejpACfgnsLcgg82tmUHpa3S2a",
  "key2": "4a9dvNtDsjzRWpnQDzkeSuP1te7uPS8SzA8Z8kwiLbDEk4fmBiQqogShQzEWJJuWGKvdSCf8kDdCvEvdYRCJQqUy",
  "key3": "3w7wtEN1w68hBAMTKCNDBbsY77gdPPhHErnFxFWMPGrUA2P6TbB71RfMaEEgSMALt5vSuLEJysSgGoGSkkZktoET",
  "key4": "2d5EZjV3m21Jm59VzqPijyuRUjdBmSZbyGLzNnNrtT15c9mQgdy4mayrTAEC6iuEoXz6BYK2tr2rEyjkR98Q3zSM",
  "key5": "2nfYGq8nKvCg8r2nSKzEzuUDMYvw8PbBMLUxgmTTiG9djHABMv9qYsGBNQFwW9CC7p5qw8v546pa1mPLBogHFmZu",
  "key6": "5eQGSRiTKHS7yMsMsocrMKBZbjNLokVC34f72jmLh4qPNfh4bkWB6Bsi1BEWNtQVN5tZ9GuG84MyFGxXmAtLcE5N",
  "key7": "5HT48KPinTuaXLw6BbqF9AxwubwJ727hFhtEFt7DPtatYbs5xsaBaT8hihS2L352yAmWj1drjhR51yJbskisC87S",
  "key8": "2VDQty8fCmbCh778q3yhNGGAT94TZjU2BnpkRzMeq48fX4VNU7VoudpuATHSiD4ywS3KkzkotMddoYLtrjp68ozf",
  "key9": "3QfML3eFMmrZkqLjjf9Thbn2jTp2wpjpd31nu1Z8SjA4kiEKM9Fjy1rSHJdiatd93i7mUedvUNH6etcxSx6oXXHu",
  "key10": "5BBaDDRyMNLLzr9emeXPzUKyPmSEnFmxeDpQ9Mrk6U1ePmBUq8nNgPxDLUBPrBfF8JRBerXYJSp2VYZuLCABTHjs",
  "key11": "227JYetGFNeDYQXTbKYWEGPNrDRk38rkQrjw268NetiqdLHyMfLPyp7jN3ftfc1xYQWJMD9LgxKdZeeowTAFX8F2",
  "key12": "5NiDMQjcGGrUU82kccdYrMGQBqkWk2mHBHgYg7hr8ZYEQAP34VYf5gJHbWTyG1VeWJb1TcFM3CGXbxxcyf7RNa3s",
  "key13": "4hpvewa4YfhV1E1x2DLtL3BbQF7u934827px9ybf86jAEzKPW8FJF3fMxPQwgfRBTrRhpR9carTdHByN432Zy2LE",
  "key14": "5uXCvM3Em7orKks1P1osg4xuHmLEeHcDXmBRaFYBdUkzEmPpnusNPJewaWiAHcoHNvy2kUQeans2ziDBmHx7KpRK",
  "key15": "GEEkyLa14uJrL86FokxeiecmixSmSQgEJEpLJPFYJVEwDdbM1JSFckunKGbgcQsPsP16WzXtpGoCNkQjZu5zt42",
  "key16": "5BbrnWr23egmva4z3jnccKCDPAfnhEyLKTTUeGuCsmxhKWvT7Wj16YmrHwnTVH4AejeNv8WpXDqncXysQARF4KJb",
  "key17": "4oGTApCk8h6qbMQXGcKjRquwvWHVBiPa3cU1eDP6Th8FNKSid2SWoM4ThUMgFsERGPcv7itADUb5jQiiU7bPrvW8",
  "key18": "wmCGVc9gifcRqp2w2SxgRBF3Ud6Zm5wcRVZWQx423mpDCKRrrG35XUfFwvQngXStL8pR3A4Qg6Hsn4LJaPvbVVa",
  "key19": "4SiguRmgoFoGTEqDE5nqxn86AFV83t2kDeEWZ8D3tJ7pByEdKTjBjSGXRn1WNaN6hKhtXtV1XuhLWdy2Xqj4CXYP",
  "key20": "4NDEh8xVHedCeaEcoeTbSPbPqG6TRiNpizFxsQRzpfDNMUPSs4n9eWC4nKWGxqUC3zQjG9LyXR16cswiYtKs9nBK",
  "key21": "5vxCBCg1n8wuGax8xNQS6vnJiruX4buhR7YbXnbNQiBvgnVBPovUSrzB4LhRgoTQekeWMk5YGbbDzzQwGzV24yF4",
  "key22": "4bnkrUyo7xRdeu6CUnZRqNk4UceZgA7FKNKSatPCWtijJH6vbN94vzX7aWUrTkXdXsQ84mLmWJXiRHcnepftEWFu",
  "key23": "43tSi9QgkEC9BRkBXxBy9NHLM7io6fQv4zRaHpJ1uHSbyobY5mqqFiZQnYAMaW47PahWvhBTLzEARDKbejXPMCzq",
  "key24": "3A7BBqsgf1DyMW4bJoFzeRdkDee6bwSDyVq1fgmMGNsbRMFqVkEh82rANk2F7AkBjpUfYgMCJx1Zr8hNwpRWxAZ",
  "key25": "5Be3GZWF4YM3p8Radgi2SHGv599RHcXU7uXJhCxvEyZMU3JbonQDd9QuxiQTVpXpVCM3KKZyM539yXrJdjqh1TXV",
  "key26": "4Y8De6cH4UpxdFbk9RaLySVhD7SEwebMPgZiA1uNxzM5kPbetqGNxv2houGUKm42DqUjAyzZ249ZxosMYtHxCbLG",
  "key27": "3RieAdrAFeNGYgTU5wWNp4zPDJZ7xTMZjnDHxLVndVy3UGaCFCz2izLF4cYdhxJkeh2cdTZVV5dFMpBbZVLZNFXQ",
  "key28": "25FHAGUtcyxsh7TXNnxgKayfPru6ETxi3VTJ2n3Dt8gSFmavge88iXxUJeXJMJJ3LT5BJ1H1DYgGFonZc8w5kqSE",
  "key29": "3qSiFm3DDqVjbjL5h2METYzX4KjML6JadxTYBiYv6feRdYdRM7hQUxut9XqZLATforqeToUiMBbav4tBhJ5iwJMR",
  "key30": "u4eMx53eNWRE9qp42TMEpJXfnZDYpqyPrBwbuW19C9LYrpvPas5SGFzf11mMzmhBs5kfUTiBXYAMT6y3ioFywjX",
  "key31": "5XyrZ8rt9QdAFCykzynAkGVJ7nrpNtbvXwLAcA2DbHA8SNwyx8rX7UtMxrQMZLZs3xZ6AvjKtzWuAipi2iAGN2ha",
  "key32": "4LvgUyV4ZjRkNddvXLNNvwLTTz5Bzck25u2XVPp3jenM7EmeesZx4Y3vPm2myyEBwgmeUQwMMk5GnVERTCJY6NQT",
  "key33": "gAzbYQrZYgmVzA2ucvTX2v2FTrzhwwx2dFmyqxPmk7vGdJM6R5TgDP7Qs1wn9zPnczsSu9KXYGY2tA9Af9L6top",
  "key34": "3BQHJ4LzoYzDupF3F356gK86MHrosGKCJq8EYYWXHULnsMcRqj2ivCBMDk4Kxi8tptYfB66St34EK1uxyZohSeCc"
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
