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
    "5H32obKFS2E3mhsdVPkjXcfZgesxVDQjpB4VjLEcouCDHdHGKHzVDcyZWuvgm7HwqyAfWandG7PWtDH3YfUA5gi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hFb72yHSUaYQAz2AXCVEuLhgXWgPmy7J4sQuCGubxTjvM4JncatBraE6wwSXuXCkjAsNEscjuaXmxR2X2Vf2BXS",
  "key1": "ZRTQYsFuyW5Nkkh81ZRcL935kyKUt2z988ASBhTJppiCDW7JXqStjYsBrs666eFTE84CYZyRg2hUGaDwtSRFgPx",
  "key2": "4PXdSrkr1GvssVUdEv6eFdP5hKgW9F8mD1pZs2yTUPaV8x1VmW18SJ8Rmc2oFpQfE8JMaTNyqgJHTEPsc9NMdxEj",
  "key3": "3vD7TBN2Ug5TgMHJXhn8q8QGKkXt2GktMzffzPWqhRbdJNbMaNuSRNkPAmk2jyVgGKL4R5jVXZu8hkq3E9Pe1kH",
  "key4": "5txEardCFq2x1Fp8hHW8DAbWjdEP1VeZHfYDMqw8kU1MGYmD4vjXLEncsavfR3QgzpMgA8hau1zi9DRJ1bRMSgq9",
  "key5": "3mfw8kSWxuSuz5A9jo77Gc8n4CQKUmbSpvJv9rnZuyFtwSxhQa3JpFt5k3ZqqtLP1HNfYh3X3bYRj3uggPngwiWi",
  "key6": "25FvkeGP1hJX2P3EAnRzq6ZPPBEe3Wf9Jj6AcNRquPGsJ3Hdan7sLMxbr4gkbiTnRHM5oJYmofThitoWqpEWHwku",
  "key7": "3sdTTDaPwo6e756CfE37TLCwfKpYBiTqwf5zfDcSfNvRmsEq6Y1XC6ez8h1XG1WhqsBEhBnLAguYbuNzhd6CfD3W",
  "key8": "4CszPspoWHgUaudL8JzNoKD9UfSYZu6aj3hjGLsXNqdeMUmh4SuQJpQuFbL6E3oE5aE4QN6AHZPRa3Ta1sg3kdLn",
  "key9": "2SnLJHuyQSnA1WAiQokGnf37qwAELWKYSQeXLx5ABqQxCgJLc4FNecwknaBXi5wr7c1bFEL6PJxNx6T3yiNdi9ff",
  "key10": "66SXh3HZoFvPkFuJAzEMKvKwGF12BAvNMAw9zJSiK7MPuwCfe6uEhSCLZWdiT6Xi5jcvCD2hnYzNCtBWBgWNUtzE",
  "key11": "W8xsBy5cES1ePB2mAiisAvTJJ4sZMtbhzRXQpVgoasRUYgpDindNaQ1KguFFcGxRgJqZhg3HXyTCXiYwmUUckk6",
  "key12": "2PaE7eBQC4T1ogxGbzNRbU1iwSwfihtfoKW8ywxKjwhH6YTuoQrhfHkPp6J4AP8fJdRsVDvu1Zp72KsA9pZrCSpg",
  "key13": "3Z9yNuyjCFAU5wHPX6VBfVT1EGvU4vqScHSErdhwC5kZH6RhpUWxLY948XwZCgeqSpse5SjkA3BgorqBz7uxi5WU",
  "key14": "DyTgGqea6o8BoYCtfYB2S3P4DTEeYFjz7EfbgT7hDDozR2EeCjjViPeLVRF56R8n5aMYmivaEBbpUzCp5Q4ougL",
  "key15": "3v7B5PTjvZX98wSDjteAc2C7Gnpqa7TS8EZ6fpaph7DMSrv4a7ze4o8DxxpaLdyNNwnxgiBivLX46uJVYWZyCGPg",
  "key16": "4AZxR944tCjfgtJrT1GoFM8WyGRe7EJ8MxYScraQmmpPNtBFAzcQZXxcBUMQQnAzRHk7YPceJKsCQXxPjuFf6Phs",
  "key17": "3fvanXYX8DNyqRQTp2cHV1DanqGVbnHyHqqZBkxGF8syJugxHAHTAYUciXHpRkMsj9Dkhn2TJz94rUzPqAiahaXm",
  "key18": "2GxLUWV2zpQWT4ETyuJwF62tu6qRW8yAXfS9HA2JWnwxmQaVpiGTKCBXFqYzd2yCq6AYuy9PSNJjv2qkqHruXpP3",
  "key19": "5z4fkwRno3MK9FXLSYWyAnZzhk5iDPhYQ8YA32VM9oWf12hzNm63PpdxcYepad6AbRV7vZwVFg2x5yN8yyJSCDoD",
  "key20": "513iu6PsaUUijWj38DvS2DLBbsZxYm6qfjt1ATobsPbETxqcB24Fptbp6dZG8PbmpvSmETqqdnWrywDdVd9jYd4M",
  "key21": "LG3gp9a7H4SH4dRnU3UcNB16qnAFXrQzqYh34hyEMboULA1NXHRwficqYhsmEU6iDMNtYbmfKthzLLKgedw83AA",
  "key22": "3DXiUYRopjdhtevxFVd9Cy6AgngSDKP2taBCPnZjX7gQpj17f7sVyNJ6NwnGcxPepPA5hp3QVQPqSCYsLRsqA81c",
  "key23": "3x5ri9cGvg87a6u8zmtAjQxEU5GV1F7wKxwthrw6Q8tfA2H9dSQWpkFZm5cHFh9GjB4KoAduDXeKfvDDvTxwDZFm",
  "key24": "27LwgskaXwAUGPcUxuJchgE3mJWdgnDSksqK32zwRsKzXXJxniCKCSuVVMVTtZiWPpvspUgYDoJtQc25QhDK9s38",
  "key25": "217zaRs55tZxnCEu6J48vXhh7jitx3QMYwsUaXaB73vzzVnV7p9vUsjz3aQKxMjkebizXeLDAH4PKRoQ4sKpzj1U",
  "key26": "27QQPsrz7ShftwYyhZm2UTLjG8dSVfZWsQ1NG6ZyDqnWoR8ATrwrNZfeNDJKNt7F9CN9isR4TZSYW1A7k2VASXVC",
  "key27": "B16LR9CCtbTuwc6bP3iWiMeoHyuouWeoY5xxwtivE7A7uvgTaFxk1B8FHB8spqRHiXgJ1hgjovW4iSnxfXs1F4j",
  "key28": "2GvAGXWYNgrSdGWDSd9Q2dR4e2yJhPNeK6b9Mc3VMkBT4Y18bvDWiwE8zcTKcBtDrgrSZjSQyJwyhCtndHJG3R9U",
  "key29": "3ACtZqZA17hhWw1UB7phKntP4DcKZB63c5hfFRAscHLzJfFcZezMfCvzFPHB1bKoYGYvDf1QrTRTHSFqNgwUz5zN",
  "key30": "2KEmAso2QHVZ6quLDiHbp5wgSxv8PmbMwaDXNjyqGYT4MtRrTUrz1j3wePVHc7xo7A259dD4nPNMTD9pnABzWNQ4",
  "key31": "4U7tTZzATwfXGHdAR1AppqNjvU7iFVbigXDuk8xZhAsH5fvdsvfXUTvbsEzqbTWR2gM2nQYPZxCu6tGJKMTEpmLp",
  "key32": "4pBCfSSbiYGR5ZCiocWAwpoVCXQ46N1p2grAAQ2mVffBPThm796cicFvp9jkKBLtsVexi5eeirHgZyd9wk7Njwtq",
  "key33": "53Hc9TCrHjkaqjHQPRD4qTYw95gsNVYzQUXsze5NXCZyc4BJzNH6p2iNyEDQ4fPp3aH3AG1wC2qC3r1ypW56dyPH",
  "key34": "5je4PpHsM4VgEguBLJveE5uTLWJAB2vuDHyQDMa8GoVUbFuW2QSr8QQnpDGDkLvxysyrF62KUDTq4BcseEbCdNoo",
  "key35": "2CUDoy1KC4STMcZtxJz51TzDiDfHaNgJnRUtYVAZ1n3EHpwTRDAnChRTRZVouRMC936REEp9mVz13DcoAdCEYTmj",
  "key36": "99E54yxYcNqFDgE4xhCZSDwSEuPuy56YSvgYg8aYJoXRfGcVfxE77PJ155SaigjS15i4o9aBT54qX7KVZj7a3xg",
  "key37": "5WTDA5jEQtfe9xpsMgZSfMr73JBPQVe4C5tUeJmjDw8QEYdAvQbY7WMcctjF5dYa33kccHaX46ZfQLweXc4QKGZ1",
  "key38": "4gZSM67XPFyw4u2hdjWQ8EGr4iQDwzXzi5sdmzugPFRX98KrzkkRNMv1fUzxcNvsbky6fPqd1rS7aX74JNz9ZXMo",
  "key39": "5RjTZEN9JqetEsunUcmaHgL9zLyJaPsh4jZsRfVzLS5Gm6YmRsitSkSZ9ByKkasVK3igNEt4SSBTHLvwfeUkoBvG"
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
