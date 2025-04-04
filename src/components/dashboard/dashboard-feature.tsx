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
    "2NV1infHzgq838LHQfxUQfwa4BvB5VqwsxZpKvPSpTnwr6e3cRySFPJy2uD2DjWBn4BnJguVHjRTuVAxhr1drk88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GW6kX11b4B5pc8hEfMbTGgQVbA5pZrBbrDwt8Yd8FXjCZKwss4yCvNb8C8QqpcxCUHsMXiGycfzEKJ26Cf8Vb7V",
  "key1": "3DJgVSY4d77L4PTZthufbtyUVXx1tmYQuMF26uEFbJqAFYaYenLyGxkPBr9NUpk3kug5isYxcA3WT2zLdsVXZqvi",
  "key2": "3ZxVHW4hES1Dq9Qrev6Pb96YjJy1S4o4zpHD3FtyXvRi5gbS6ukPrBCpxGF7VtrvQ2CuMmc2gX8fHB1jjyrt6GNZ",
  "key3": "3iezmSbucQAiggd3rApnhnLZ47dMt8STVosw5T934NA5e5FG5QbZafQzRcohk9Pmzjf2DV6WCzGdrSsr6vjhhfRB",
  "key4": "hG5VngE3hiFs1ctmEnDcdMDYophcnR1HPJKmeBR2o9PvgDYyzN8vHPwa67SomioZfySpqHoWAEG5iCHFahZ84Tr",
  "key5": "4pZcYasRpEnf4HpwtfHTDRNFdKw6Lq7my5BH37V9xPE2Fd4My7Lmp4zVJyq8cY3D8kuPfEzPT4wnidewgru4w1Mp",
  "key6": "5m7MUoUSHPHzEGbF2keLbmBHHAMGBXh9NSQDPfTttTpMGKwA6FC46GyMPhUSknhTgyESS6p6Uy2zga1MYXWsi4aY",
  "key7": "5F88wxVcGzSiJ7Lb1deim1vWEdzoPwFYaEjLXbWuxeWEc7hC97agerEGdycFwxjz75Np14wZMpeBNdB446j6gFQe",
  "key8": "xA8CcUehRpnXJQkRSgCsV9ypwRjQ4638CpQ1cwSmj3fjMMwdW5Kj5xaFoMv6bdz14iDujGuyyT5uxKRhgjTjRYe",
  "key9": "5JTdP7TJfZR5mXELACqfTfLBfeQTQr33wvrfHvZpXRvrzs8Ck6cLah8APsPa7GaMvcgK6q6wzmND7GS4B25NoaiY",
  "key10": "ntce7dcpmj36reCgaUPftemyCrb2pRRn7iZKhQS66N5X1gCQxiDsk75mq7Fzuaqx2gW4GdpMFPEd1wpDQwLhxBz",
  "key11": "4deEsqfu5rqxW3jnJUym3cjsbtKbtex7i6tiApmhmpRv9xdJJCGSSaHsY5BdagEavuFauoiCqE9MYaXfU3X1mjgS",
  "key12": "35xVmBCUWkJdAxJHUE2rmVzXghvAKi3WAhdg1ZEr8rZnCiYfeJ5StEFqvRPkuWeSkTj5TYD6cgdjk92PK6Q25ReX",
  "key13": "32cLhRZHBJSUzszn6or9uTgU26JsMcYd18UNVHtsGoTF7yTgv6bvqeWYJzYff3FMJjUzgAE5kMgDyFW9yrFGkJ6E",
  "key14": "JRiAdViJdiw6hTfozDXCULTWQpQiYkNM6599AnuJ2fhAj6Fbbu1WdGnF5Vq948JaFTt2mJoysAsMZHt5vLDpfMt",
  "key15": "4uEwXogZBVWbrjmmfuHNx4zcRptixGkDoRentsVwbC9NH6QjvHJTxkLmaRU7YK6VWv9a6E7Uks2uJhbKdKXD8CHP",
  "key16": "1vbGYid6dtjy6kEjNEMtm9FWCQb8VfTAJv4GjACbbwYFvT5Yp4N8vtsGprMKLHATXZRY6nD7Gi5kJzFpp5JpLJn",
  "key17": "3Fjo7BUUqECthBgdjqz8ZF64G2KueUWSRE6W675c72MUmVf7fVmWkaHeTo2BvpZcT3hz5oEMF13b1m82NU7UW7FS",
  "key18": "5wSZwh4dhmLY7iTBafs6yAW2AxcFLeRr7pRHPJW9reiTwmSSz6k5jSpYihmCex15HDFVQqGFSkKJpdHHNZBG5Nmu",
  "key19": "33zotAVQiDtNNUxjKdCEBFba2hCFyWjVxVnHJys5epHQuhX2LJcAsXNyB8qUNqNHF5EZcYXv3vHzGSGSmjZnczbD",
  "key20": "3evNCvxoB2qBiPExV7meEkgeHMdRPfnUjPGJgT4WUfFhEEPdWx7YSpn8LQSw2Wgk415MAPGkqgPEfc4hB1bFjZzs",
  "key21": "agjL2yWFwq1nxm1v8Kwkhsb1AWDWDoH3dX7eWxMGJZ5fjffChgsLaBVwJUheE74RhPhGZGi5jhZaMjr8MhjU4wf",
  "key22": "5RjPJFLJ5LiC9CBhcjWqXtFxPR5RWG9JC4Bnwo7TwjNEtdFdH9xkRZFTjCAuGjdkaNkJrV9j3RsJmswrhahKfUkR",
  "key23": "4KtA6rMPr5bUWBcnuE7AqG2CEkA9y3EQnwgvYwtds6L2nnmkobXJVHFWtuMDbs6g281LTNT2eos43i6AyhvP4cEq",
  "key24": "33dbELcMk16jmwPpjfyxvxEypYskt4dD54hhzR5aUiPjJcvd6v7WLZnXJ9Cu1cWpkcaEB2QpEXmrUMuGsQfL2CNq",
  "key25": "3EfPSgtBg6gQEt4Tpq5h38rKpY2GdAp9kAG9vPm3hueWNtVm5WwpDJJHqX6bSSFok4BBX6DWc6y6xj1w8vcecCDP",
  "key26": "2efPcWdyLFLPvdYfLNBjjAjf4KPK97qcrW4cZiq5fhryoUatp2nXAaSqhqQJRJbmeoz6UFKoPeGqAvp3tc2F6PUj",
  "key27": "4y9LEc8FRm4QSfkgTkPd3SZt2m1c5qu4oNMtgMSFYEuJtdGDR8CSZcEENBeYqNuUek1u9eBxnUr5z784nMhqdN7T",
  "key28": "5XqVV9N5LhhQSXb9yBusC7kxpkHgDTeM6bV6A4fY1Nc1dTQeUU2FtK8FEA2pbAC7axyaf75X6PYPgbxoSu7rJooj",
  "key29": "2xtex61PVrWjpJJoSXZKxfnubVZuN7zcGqLJ3LbWVxxTX8gfjaajLUXqWuz2Ytot7vg845cokz7V1UKVDgyPjxsb",
  "key30": "32kTLgKVxt2o9RHPKgb5A59HSkAEE2c6hzFihwpbPpQ2qjhmobwUBywjFRQXcpxHHS9JJcgKdkNt3Zk4MY4NnPrA",
  "key31": "2WuKML73NuWGKn9pUucsf2MXSLdS6b1mENGqodJdGsMKDf2yzw4YGigk8ddX1DBgspogbYFe62H8kcyNbtTpxDkd"
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
