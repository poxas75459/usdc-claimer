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
    "hwYJeJTAhxuJtWsCBjGzssFRbCtgjXq1yocEkjWKp2qez2DNBkj5Z27CsP8j6kWJ1bwLL6aBzNVkUVyDMBipR51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WJJj4354csVGZUznRT6zYw1sDsU4y7FEidvyk7GYqY2NSBNT9Ei4h3QHi4zvhsego18Ao4QH6Xt4LqdPL3qnZWo",
  "key1": "RicqXQTCEzkBLu4dnx8fLp6K793XPhz8UW32D9Fv55jdw6w2zj5QA2xur2EFCjiTBo3Bq2ULPs1Vd55Q3Dv4dUw",
  "key2": "2jZtBvXBy6vs7D3HxzLXLaf5yLMB5F7qzmjvfsDah2zbnw8RoUYCSYRtftHX5GQZkNMWR77Kf5DdWmgG4rLz1DtX",
  "key3": "2RsW8L7KUfchscXru68HhoBzzgUacTQQGGbPrYih4MGioKpaMhxHpdqnoFmBHr8nYmm5sA7fy4ReQDjHzWSwM62t",
  "key4": "pDnWzkxsU5Ey2G314ZezwZaXjXNQEdyNNnbGhHpG8PSHm8Wg46yPEACDKD4DMoJutpopLT8JH9GZMK1GLZFS7RM",
  "key5": "4YHQNzTNLrExptmywnwCUqcz3rK2ciueAJ1vzwtUfNmmy9qV5emQiPzBmR2ukdbhyABQHWXbycfHSbsgF9jTjuCm",
  "key6": "5PZb5Yh1mEnm9WzyWD2nbC3JnvDr7hrHNh9KnAQrKX74zYamaAsfNV2uJnPdkqrPXQaCmfdE7Kra1vqcUEaxva4D",
  "key7": "496ovERT43urLkSust6bLVFCW4HvBLKJjZxCBkSLibVAUPB81LHL4tGMwxf4tta4CMGhJH2wqk12PR7EY7zqc3q1",
  "key8": "35kXWsyoFWScGPNsXmUYEWS1MGrkTentRNmuS1XAFoVKzTcSBAEQwAF2ohZAEaAZ4WfLWeghkHiaooZauMQLuoxg",
  "key9": "5ETQwY7viDpAMjSFGjMHTV3GhdjnyXDXNoxqiQxaKNj9fnxxT3Lbzf9aij5RbJ1kRJe6mUKP6hg59WJCAK2vZSvR",
  "key10": "3eRiPaEELCopjTKcm4Hbd5wmQgwMyS8CMnhFv2222tSrCrbsjV12QJwu5Cfw3oELx75d9TRHL7HAAWeoZeqi5GkF",
  "key11": "41SAVsiFkshQ9RfkHQXPH1gYmAcmvn6y3GCiHTfVpTGg5i6TKn4szYCMx3vBEPV25aZeyCTkh4drs9hCGPmcRgrp",
  "key12": "23wwYC1aSV6zrAWLkA6seWwJyqC8TVkFeAVPambDtUkHNVntcjNoTkFSTPowd3WY1gvxBPEJKPJW5mHdj4iGagwh",
  "key13": "GCUiRgjzRdBeYav3zmEYhrCbbQaEhpRM3hKjjz8XfEd5oKV7CZ3MKFpKqzah3aUuLPpZZHsCLETtMFEb4d6Wi6G",
  "key14": "21eiKRJzifFQFJoYWFXoSVoNSPcEbB18g4SvQ4jz47cnwHxxD182uusiQDqatKmq4vJF1jLqFvidoKVnUPpxytpP",
  "key15": "5RvW6nfrL3NBgNHCxNup5bnhVoGfX2RoYkkQhT9ERCJwgfBNnLzpZMcdgERUD7UT4WiBTJrKdp177KWhtn4zSuB6",
  "key16": "2Tq1nczXqMPcPQivtkdDNv4GxkLuf1gVQJq7uRj1UCW6q5Fsb1rLL9dmaxgskZiFnsG82iswGJUncFTHhLF55EH7",
  "key17": "3zXJXoJ57dg47W1ovgjRK69ieyVpLYU2scfuRcsL7LHkQLTxXTcsRcHZXSNRCKUqYLqz4FxTAk9mT1TjUkZ8DcNs",
  "key18": "25yvLfae8yHguBikroRNoptuhHR11jYr6J5SRBSxZjCgjUSZb8KP2Ykfkiw5FoB4DHFfLKCLEreSpbhWQaPVXYJE",
  "key19": "43KEHSjbV5Wb82qCKGrFv5SnGq58D94rLAcf1NPgmYh1zkRukvKAbHUYyhZ1UrLQ9K4QP1NLp7aJnen47xva6dgZ",
  "key20": "4pSreH27zJAXvcaeCcrQqUcMC4cGudXJSH7gtS1FNcDqtaCwE264hJ61iGy4hDVfR3zPxm4kdro1dqNcxo8mtzuf",
  "key21": "2QeTK3V2mWLfhXzD3krXyQrqcfBZVCAvPV3bF21ugQikX9FcxTbdUbEzg822cp5DJnKCPDsPTHTMYeEQGvQfbSf",
  "key22": "394DczUdHfNEJgwC8MG9XdUZNJgrNtJo2sWEzaD6fv6fr6Cs4VAXfBWnPMZRU7fhrBgnUDs26M3WuR7osiYm3D9d",
  "key23": "Wk3mCriuPxArhdvvTm98BMcRrvdVaD1poLYm7AjW2HQKmAiMEgZRCLUJJtJYQKG3uNT3ngmuvZcRHY2zQhWKSgH",
  "key24": "5JfC5S45ebBqj73SivftJrxqt6ikCUv3bLdv9wCGNL7o9rtck8UxazB4tExMDq2hTsszea3JKh7zCLieuRp8AMB2",
  "key25": "5nmMQqfJD9vtP9vdqeUn1kz8Zi53tYS38QX6XW7oKTbincqggtieazBFx6uT275UC8X7WfYV8xMxWKsYT6yDTyS",
  "key26": "4DmioKYZUAaTnUPDr4k6aBieXRwgZcNgnqTs181S22Sv5zNb3KZKx2ZRPEGgxxmLEQAn1B8kbQKx2zKYZoFJi1D5",
  "key27": "qKfq2jyohhKQjp1ccdTHoTLv8rWQzejzcJ58d5VVLRvkKHWs9TbK9g5Hy99jmp3mX3JWwzPTXH9x6bbz6Xbc6Zg",
  "key28": "2mGqrAaBJSCxk6EhDnGFLHNKbmjuu8fU3z66hGwF7wba7SAduqXoGLLRdjtHHaB7RLeqqh3HdjRykCpJW4u2PVRb",
  "key29": "3xB8yeD5QzDSdHvQzuvrVsSyr7Lhicr8E8khkn88JnNk171WjY6LSGEdb5wJnWP5BKntb6SvUAZ3k45hdsLeqKZy",
  "key30": "h1Vbu1GHaPC7H6PPtrcd5MN3XkzVsY4bM1K9FeAvsRsyT51wDJ9XnoPJRo4CAkTc54PvKSaoM9ko4yYAsM7yogv",
  "key31": "2ngAiHoQRCwN5ixinyCWifs7aqKyLnMaEyLUHYdrkvrjKvdZWHVsY3MGep68mckBzRUv48b4iRXHGQitC3t7mZJE",
  "key32": "4TEBvnbRbG6rsvmE4k8zMK7J2w1f6zmR319i2JPoXAGNSR7PkSE378BfuoefXK4AzRvS9Ga9Rt5K47UQ63yzn7x",
  "key33": "3YQfQyiXYjVxYBhzuSxbaMAqdi6WWnoAeZdNh2ofCnBPRQqEqsa4sMhqid2h1aC9JWRAe6nyW55fQKQUAKVAXyhe"
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
