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
    "2KrboAMgGabT2pGCCxQv4zfWdXrifaq7ZzBctkdseWJeNr4tqy2HxvJkjuDq3eJhrrmExLQsnyJkJg6Sptorvqqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pkxxCbzMH2aeTsaENziQbAXB2LoNNwZ1BXTZTgdRetvi4TZnMhc1ENiuqry59hgMZXPHomM5CdMq4hygTSdw2hH",
  "key1": "3XpmTN2fLfiYzJirrzz1oFbL6N12qDvfqyhadGHfqQ6wstiMiF6rEKVEzfJy1XF74ipd28utrPaViLHKfL47h3Vd",
  "key2": "54g4hGwoR7dac1SEyrYbMs5sKtMwABvTf9SHuBrPyuMmo3Lf5txoQQsCA3nkzzEBQ1BUiqkEReVHrduoxRiUJCGd",
  "key3": "5tKRNvsCihVtERJ7LHgp1N4gnxc8n2dSJRmpbnwss4Rm5JquRPG5hMP11ntiVZR48Pn2Fd3cFt2q7hx6ecLpNH3e",
  "key4": "4RvcUk55t3effx4juYghZcLkpdifXriu95ef6fgL4oigWsMhoBcsacgi14LHSctwNyJCU4szbjAqSFzRv8nmvSsc",
  "key5": "5E7fvPZ37q9gTzm4wvnoJjkcM45rzCeLwYxfDydEud3HYzA89RUV4EBRTkrRM8mDdkm3FzkW5XFxr7HWnQuKXBqj",
  "key6": "3pg8wG1TVkxmLsaC7nNqf49dNtdsMvtzavZMJsVJJcpaGPrNHpX3Z3EEnfmD1XLUZS1ZzUJRH7pmbAQbANKwVySd",
  "key7": "ua9KZfrMCLL4H8cyFsexvD2ypJw7jJjgK7WjmK37QZdvNoUPZudpCmnFZagGpyyXEBLnhd1LQQo77SbukurFcfB",
  "key8": "o3RC2waDm2ENfGvgsMfxv1o9r8xnsgYYdnvnQkbDVsmJHd2K6otvuZ3U4J4CuX89xJ8CwwxvnFJRhFSxW4w64JB",
  "key9": "KKVzoSShfid6Qo94G4VreZAd8RETH9FvQ5XMhnGQbYJhnfKW2rtqioo77BZnGvWAYEgqHRNVYtKmjH3nW7tdbye",
  "key10": "2S1PBikWC8Y6U5ghBH8coUjVDARuTAyoQt7ohntdPkxa8KGGYPmj5dKBXH69cxQ8uTcJ4dS1WeehYcjBPqjF9r6f",
  "key11": "454YnZ22rcgg27sQkagqSR4GM4CWS1TAuNAb2QogRrDabvcWdoYLvUu5zrTRLpy7DXorAy88UfCm6AvVEuunBMiz",
  "key12": "ohBS3UobPQtBpvGHwmWimKFDryQvnuXeZHRTpmshDFvAxEr5iZcKk2HcJCDSfYUr4omoeVrx6dnN6g37kb8DguC",
  "key13": "3Y51vFovpJibkHV9quGrZUgoZpnowJjfWwubt83Y2aTnWGLLVqW7ifgAEqGtPXRFLd5nqXeM9atauTfsK7AETXnv",
  "key14": "4G6RGtRzgH7wHgDoao4uU4ci3B9RKTiP7ksN2KosGEkQ2Dp4FpQ3Ri62HhmLFuJ1HiBdmYiK76CuwxASzLqoGfy6",
  "key15": "5w5rGCdeorfjR7nNnwn2kZHK5csuUXGQow2K9bZ2ZDMBZiVXq74LxTkepLyNJjB6VZtsyCVbuWF74zErpx6cy9m2",
  "key16": "Y2x62MuGxJBSBfC4PPbUgdCKRzKNh4gXGra2GY3TNYgKxCRjFeQsyo5UT2Fix1mXTb8WQgN1HeDsCovkAWyVsdR",
  "key17": "62qCFXFKTtg6tWnENnLsSrDNRAza9apn3KDmGTqYcYLk6MoYkA4Qe1sPCekGGETgdaE39mjzi23tfh84JNuKwjtD",
  "key18": "51Sp3ySFKpv5kEJhR42XiKzhaYbTHTvVjgbAfbwJvFpHRfmSY6Y3rWfFCpoKNZB75KJD969i1vpAB1uGvqZq5Hit",
  "key19": "35H1MawsfEEwGLrogphRjtmLHEmWyHsJm7vs8UNWdzRGY61hWnt8CtTVhLssmyj3tmW7iEE9TpnsSVhK1LkUzBFp",
  "key20": "3GLvZycLw4wUnm1Y5ygKjRiTbQE8dAbMfmZUqCh9THgRTB2WgaKjfjjyeNWDKCz6XDRnGB3kG1eNPJhtqDp8skdE",
  "key21": "4FV1UxHdk74qAHRivnC18Sx1ZGnSnNiKC6RxZfr6QLkTRTpVUjxzdSt64NgST6nNujpqyqR4sx9diehSQRtju2qc",
  "key22": "pTcba7id8B3bJw7GfgcqR9tqY1cd57PeLE6NgFDmzZ5seXUN8dmAWML2zfY8XhGPHWNxvPbwxXZQSw8eHsCP4Qu",
  "key23": "3iejbwdZmoxoWKdeamD4pWGPtoHZLTUxw9Qopc1vo6PmhLXuWePJTZJxw9xXeyr5a1dLH8hd1aweesYM6o3QjhjB",
  "key24": "1237zcPeCufUpt2WuA4XPjcRVJerGQiXJCoMkudyz7ovBpDLCuz3XEyUesC699vhGhR5sLzT6ex6yGChbbquhZc4",
  "key25": "2F7TUpAzBgdxhmpb6aM23c6tft6iC9ma46AkE1fJXQoKUQZ7NtWoCbHRuxauWKaPNA2hYkXCbuYanZYrz4qb6NL5",
  "key26": "4UMa7fsH4m5ohU1Mu4CPcruCGjVN3n7SV3Fv1AgQCUepPcqBHY1ZnpLZwAjs589oC9xGpYgDHSdX7GnrfDcnoFYj",
  "key27": "A3hfpJL9kT8NmcB9UyDg4FxvE7sJhT3FUdyHJkDvgSKBfiR5JhkbGM8cAtKXvYijfdsmMi8yVoLV1A5cAZbws6L",
  "key28": "23hL6BjVWYPQFEyoBWEyfRcQkzaT7KnQUQb14APBo9QP58UEiVusje8ZXDFVTRzxYaPdjCbnwrsCT2bnZ8hoVVNv",
  "key29": "2Yi1GqcAcqQcT8fmkEWemNPjET4viTdmKLtKAR8V2cny2EYaUpRzW4jE5rmPgyS92GjWshxj7nWrTWqMVqefmsdH",
  "key30": "3kevUQJ3NwP17hZTo4n78NnAah6pCW48CQpbGmD3SHVX8rfTmdVhWkMpwJGGQdGmFTcHkQCfwPewaCVgha7duRk4",
  "key31": "4QvZGKNGwY8GSML2BawYpQ3dvLRLGQY5JngedmsZRy3bPLsDdonQCBHvpC1z8Pw6qphA1EUhJg5f9nnz1gXjhdr8",
  "key32": "4S6anxVJxY6mzHzdUn6fik5WqceFX7ojuCy3HnXoks52vY4TnVQ9pwS3gegBsberDQ73JSGugPPsuYaBz1QYSVYE",
  "key33": "66oauvPzf1Kch851mBYwj5zv7u8iSKjPQTUZxGhAhQkkqubYpRhbwQUSceujjEzhE2bWHwBjdPGGA64zosw1z2mB",
  "key34": "2ctvcY1bux6XXaXVRh6JeBCVGXxZEHtod8Bh2awjs6FmxqyXSZgdepbBXV7E7FQke6hK1qSzm37iKAejjAPN41tX",
  "key35": "5tP8cNaX9ZMJQ5XCAQT63vGZ6VSAvzMoLkLPhBG8JZmewGPu2ohVEvziCH627NdgSPkqgp8rfMPyCxuHNjLYcE5J",
  "key36": "4ME8NjFTszfsFftzKybE9QgJtsZc8NBHXLT4s633VXEQV86aan8Lh42PgJpgNDmTNgJYmMKdw7RwefueaM8qkofR"
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
