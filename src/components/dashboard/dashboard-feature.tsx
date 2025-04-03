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
    "Txdt33C7h8Yb7Zpij5hZAWgJvVUKNxj6m9XiWj6XCsGx2YtA2cPWmNQs4m854oBzvWtVVNhi7PUDSAPXJxDUVDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jaXq7jvHx5h3oG5sMYK4cwW7VwFt7rkwNDyeD6cree6sKPFxbW1rYYsFEmQUAHmFSuDAVWTT1F1EfUfnLtDJbwc",
  "key1": "4oG8hrd9nFRtCwvg1wrcPJfrNUz3Jr8Ezvrk6eDtcJPJE6TKQqdnWrD3PPCEhZesjdPUKJSNxf3C9x8vTsbvZVoc",
  "key2": "34tkXmwcG7g6gkntLYv9EJLiC1fyhmBN4nkyDWViveND4ta4TQoZg2sp37ysbTTHGzGBbYV8BHmDd2Uy2qhzKGPk",
  "key3": "44VkKH3TfecVqbSLZW2zxsPRzCvvFJVG34fz8NUNdM2NcaRT4RVofUg5spsx95AG9hRAwGnKx6JyX1KipsjeRg3z",
  "key4": "3YBvYdpDEmNrPGhcxQDkq2hUYjdghL6vMKgjTYk9TopRuUvr2hev3fHtZuM5qwUeZ1vb34e8gepJVTKKhpvGYL1h",
  "key5": "2QAw5uEWMA54vTBDYpFMzMvM5ZQTzNpY5ieUqmDq5YdTu6ATjw1bwRqQmPzPogZioh8QoZaCtuM9NPujttNmv6V1",
  "key6": "29ikkRm1hW9UXVanBRsd5kmQkyPQ5e7EGkbyyEEZwi3eSNtHPeVTvaxyKe25HyGoTXpN1MXkhuG1nnyZA5RknuRv",
  "key7": "FRmvwwkqMQACNJqQYFC37RuKqpheKUhNxQsy6pbMAXL7rxDqwwPncQaPPhvJgGYbDqRz7WtmLv9sspHBjDemu59",
  "key8": "mzjtb4qrNbThrZtHz7szL6R5mdR9p3RF6xkvpckmCK42JZXnm3D52ZX8m67xC5948241a732kq3qqYCc7gGbz9a",
  "key9": "3yEshucQKEhiFxw1CNMJMuavq7jqgCqCi4XPq5nUUJjpxCE4ewQsjQpH2SJsfV44ZQxJjEixVgwphbzQqFGnMZ5h",
  "key10": "51rnsW8MCsDtP7dWNvd6KtP31adU3ZQkTibwekjmLk6Hmb292sDfyB2No9YGWcvVbuMKSom4ji7uyEMXWV8xmeXy",
  "key11": "kA1NGGQJh3zTKMtGrxTU2YUe5zQXyvgBaszKhTPJasHFvMMEZxeVaBoBCsoehZXVhqvsnpZVf946bC1dHUddXWj",
  "key12": "2DA6cs6fusRCTckfUMs6UVWem4898GbtGSwfGpkWwQQuA5RKjqrwNHrFiPCtZSvWBJtFyX569kMLNX3CfXiCftCp",
  "key13": "3DX49yhBGdP4mX7tvbZNaZiDEsNhFAcAdpgvWCJgK5M38ymJW86h9AQn3yWfCiYXug7NGLszaBjpcnmAhV9ysJtz",
  "key14": "3MApWHfg95ihekZBviuRp9eBJP8PiLfDYnp4MsDS7MFCEpwoh5sDDjFQgogXYpMu6Xqw88faT318sLeVju2m9yUi",
  "key15": "3D9Z3NKkMLXw8rtJkJ3hmAZLi19aJwMf9Y4qPw8NiyZyhRYVpg6cvh3bRtiLvL7u4SQfzQ6hf37fZDbRUHTAZboU",
  "key16": "5LbpHyJai4mRnowjLiAREkF2pSKijCh6JPeMXtSWT4Wz6JCYfQYdfuYKSnzAnmpJL5KDipTF3DnP5aMRaZtouw6",
  "key17": "3tuZAhtqC2gJj16vAvvXHJsiN6Kx4cYK2dTcBEjY2K5N95d7mwNe7Ezb3y5Z8a8Ns9itkdJkk1nnjFjGRFunf8zB",
  "key18": "4Zo5HjzWgWq3YDrFPfYtEJj3YZ5WFXBnc6FT9LhFavpPE8VA8TN6bbwUDuHzeifMTyMKmNj1AW8ZpCF831nxtwj5",
  "key19": "2wWKpCh2Af7RkXpodLDnt1DWVq8cWbCLojNWirThkVLWqP1M1D74XhJ9N1tHem5TdUx51QsPB7NdzKu2sZrNeddm",
  "key20": "5xWhxMDmtVbtBxyPeDLY4ssfGTdKuZTfHL7UCvquY4YRTKvg4bzLRMmf42KSnsGB7x68SG9UpmVdxuZd1bz74pYb",
  "key21": "3WNvoULcnE9fvBiT5YjPH1A3B2AfDcKHnG4rg6ga7NhLEbM9fCRk8V7MBGWpn127zCxoDegkj4HCW6QVjt8gxgPN",
  "key22": "3qsm3vMFSrGv7peuxsZebuBP3UEtT1YqnbhyVPeuVHDebDDf8WEvfKfAe5nWUMAAR7LyZUxQ8hq4H3Q2JzWCZ4ak",
  "key23": "2Hy3MMFWEZ6sRSA1tR9rf64qymxCsoDHx6gCW8LTxWymU5rP8tXrE2UsyatyrkJGqEiudU3VNHikug1JXibqzwEn",
  "key24": "bNyBkhLyq9Vf8sFpdvftNMKVh8ET9CxLKnNzskxLsH9cACysvhGSFS1DL8ueiQyBmcEhZrPhfXN7Gzyu5KQmLCJ",
  "key25": "32uoshkq1bpPayWdSfkSNKBWWaP24NdoELySgUuk993by9cHyf1V5EgxTepTfnYJAcWhN28KWMtqxzrub7fwaFBs",
  "key26": "2MSC9PcGRvo4aC5YXWke5pA2JNCZ9rmaczLrc1PoPH8YDD5LT92Jm6JJqwQBRDFRXYvF292V1H2HCVXB1qrJZK91",
  "key27": "2mkPWAL9Kjohsi89CpAc3xu1z2Dd34i5Pkm7GdgfPEhjG9iJivHtg6pR6hMWrVtM7WLyRDX8iTFRr4nbGKsFRQp8",
  "key28": "VqDn88TKbKmjZZf5qBVc724ku5BxYhcUVktHtjEmoQyRucSx4DJLDyCGMFaqiGQumbo5Mkbxz73WCyR1s1U31sH",
  "key29": "4S911cJFUHzC7ULghHsxyWdmstitEYCgaYTRrspmwbbyxHDPGNygp54dG5QF1Eu1qwsdwyqJpSAZvY14DZJAQKxJ",
  "key30": "2PCFCLSjfPeNKfFARmiDB7e7zrciUoxGGTc8mAKc3pDw5H4u7yyfj645fyskHea3skhYggTsuPpXHB4RRH3ANXXF",
  "key31": "fHQvXDYcJ4asy1rf9cLu63VbaBpnGWSS8quwpTyvQBrPCm7t194un7DnDV9XMnFu1p25goT1WqCeP7jWKDiwmMV",
  "key32": "4t3DFvLbhug4sc6zZSBKuFYDcUqPe2i5Y5DJ7hzFJRPorFJqknByKmRzLKtGyr57naq8kKQRVBJnzqGyCecDDudZ",
  "key33": "K4prpjkxUPdYPxH3f7U9DHjvZuj81YhWReCDy5XW4y716h29qrpXpWtm7vW1g36WTKyVAqo9wpoFpZaBfff6hmV",
  "key34": "3bQj1kWvPcB9EevoobGDjf1ipBB6Peuw4PtQTZJ1hn5bKXijvGaubSeKnRP8zRLFEwU3vE8GcH2DKu1hSimqm45c",
  "key35": "3q1f9rJ8XuSrKR73ri793zsw3pV2QpwTLUVRpywqJK64CZ8PPe2M8vq1erEEtsH834F84YgeDJ9bigdz6uxTA2iR",
  "key36": "3PfQSJZQJ5BFkpaFN5dFwFrkimJqXRGsNoHWnN2dArbGQeAW6NsWAsnRTPnhHtPFqQe4zJRw1fUqJUQdE5mFyEgH",
  "key37": "GRnz3ppaiAYCEvm1o8vHm9gPQMP9osNZPjfG9rNn9WfE84MrYm5sGjKbVHmNRVWmxfBkUW1FopcWF5Auo9FFg8b",
  "key38": "2MhkYQpzqtUqzN2rvtY3DPKjvYKAfLjTpHUgzDyXLFd8nLze4GmbCGDhp3B9jyviHaHMwcz1Lcv1UHU5J69GMXWp"
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
