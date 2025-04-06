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
    "32F7r7LoLp2hA84upB6GUWQ76nnmYJRtcCSCWvT7FFnsxNj7P9NtsgCaDPN79Sjm7AWeF4vgb2vD94qTzfqcnEVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G7tz9NqhVy3fx1v4W57rpH9twYuiSaVmDXLyjVVm4WC59HDFSRbriTyyn96iG5F2tiLAib1C6RrekJFbn8Kxs61",
  "key1": "32BZaFUgEyLBGWfoSYRkmXpJ13bvWRonBuf4q49vo5ciJvcqWjWsdBGqRAg9SvFh3s5HiSfUVTZPnJrrLFwtHpCb",
  "key2": "2V3njb6BhmkKEAEeDKcsVCrZNuXPsHK2iFWuT7LTTzwxFazf1MhmYdRcjztNNmboSbi4ku5DX3oRs4cGsdBw8sC6",
  "key3": "3XweqYsW2MEtJSEu9HW26wKhjYyxTqTtpeZ3sFwFUxLoDc4wmi4tVs1MPWobrosAVhA6t6WLSmCXYtM6UYt2rb8z",
  "key4": "5QaM9XjAidad3fdZuZ9AUf6xi5qGQ5w4wNaw7StLDXGbuArnFWCkNKZ2hCHSiLnw3TGZhAEsYK3vtxrm4K14DWCD",
  "key5": "47AY4czYQMM2NZTMq8rZf5P9F6V2WCLS1uyso7Gd42cNchcKZdCW8YPutBf6Nvo21jt81Efc3UfUkqtXw4y4Pij4",
  "key6": "59MVSr1M8jwj29v64vtNx1SWhbBhQ7JASgu2q1PxT7p91atpw9YneWBHvfpBZ4J16QrnHruPetf6qDX4jw6meCEA",
  "key7": "4drTbAw2ckxkv8RWCHnRkMLJeqFQRx814fwsjRt2WgNUBPPhptWFBfpg26wBumGatuwx7rahoxdkN1vUFEJbrksu",
  "key8": "FCwcKGvhhu5nesMHK5KZ8eGVYAU163fkn4prYq7XdHLaTTMNxnhm9ikG7xpmcgavVBokrvYwnqUYWJCx9CSDiNw",
  "key9": "5jEvRqz1qQGc5u7LGZ3wNoNhdo2zCb5pjakcmiebgoMTbrtbTX1YTysFmPioPvaK8vwQtbAKYjR8kGRRENvQbMSd",
  "key10": "4Wt8ASLQmCPwVGfMZLfqTKoxEyVSx4jB61N8byoJzAAxzabrye3AdgCitVJDheEa32wYtXP7Aa8a34oSqjWqT5BA",
  "key11": "63etZVHf4upiAUAqgFmXmzMonXqCpUb3D8PNP5cYU2jPSGiYBSGQS5KEiAoRFCJWEPH6Mfp9pJnkxFbeN7y22xbt",
  "key12": "8CPP2nTL2cQQNGUH6gopmGox3NX1FMc4tXjfwGtn3SKFgza83VEx1y75wDeWrhqL3tKnTvzX4Vs1a3LaWzJS2QY",
  "key13": "24gZQYSkWmgmMveHpHfjRxbADN2oGnZVBoArG4jy6LMudw2T8M1knD47Usm6BU64dnLExuFzp1yps6ehG8NbonzZ",
  "key14": "f6LHZcw3KZYK669EmYhMPawYE1YoXDuXa3LorxuTbR69LpnXXadMdaGXgLscNweBy9f9XxosRCQPw9KgGpw3djq",
  "key15": "r4SeAiQzuw1aLw1gurL2bwkuGyXMNAamGbyTVy7J3K6rVyqFt1T8A8Y66t79bSqdFfqADHsbLpWSXkoXUJMmWfG",
  "key16": "23tyC4k3DuzPRRr9szoCm5HjLdVf6D57fyWeWybB53pjhvXevDzr3qE5ZLCfLTmzjxBUVFvfrddoe2rKy57v6TDq",
  "key17": "2roQhCm5D6Yinp8jesdkAyMSp6QnRPWcBKksZrwyxfnxgWfTAbJ9LAucKDZD8YUUFescK2JD9WHcpS1xqfHtM23i",
  "key18": "2oNc4wqh5K1M9XzGMfzrVs1qwRx63hJMU43kWLi5mBMXJjrmwUqdeBRadPMbAnowSMJoYDGqiREwvYMGVqi8ab92",
  "key19": "4oTmMjrbJgfmXTJaahf1vk8KxecQPkF9SsHeYmyVJ2cnAV6oxifCd3uNhFkQD1SHiQYb2bcxT3sMZk1R7GQ2vmUh",
  "key20": "5uY1mZepiCQrxW1ypEuM6eaBJUT8bTL5U7QchXDXNcMDxWa5VDrzUtuLKMvXBmFDB5nvh6SkG7RkAhLJctsM3gz6",
  "key21": "31SpfqT2YygeAbBxC9ckeLyTjLTsiEz8azqZTM7tmfLcXf9xJcGkyTizkKim35fCdQKHp63pxi3jPnTgCWgRnsv8",
  "key22": "558geY81yebfeq1anXbaHTsTpmhg2mX9hrEEysqBtxFnFev76vXKnYAtjfrebPLRomJvNmRUxxMrQAG6byyPSvjK",
  "key23": "3tZAXbsAkQBjv16FmqZG9J4r54Lj1eBvQkDdduP3mjMjcDDwySn5bAHQJzqrDaDS4vG1QTywedTC4YUXy5YimjH6",
  "key24": "3kx8oHKeA1uQ74EvbnUA8j3vbo4DyfQ5nnbLBZHMWP49ieabQmL3ziA6cDJtfAiAABptwcwqLwBTUUMUTAQFPX1F",
  "key25": "4YcxqqYrqq27JQEagkkEohwTFJE8Svo4PhSwQ613GAnKMKh7kvr3GJuyNHrwGcVh6QuGTNE6KhF7CCxpPkC5ec5z",
  "key26": "5PxH4M65QYfzzAfCph12R3Yop8ZgVvh8kDrJohj3viLmZvYCFLWDTYeb4QP3ttuGy9NqrX7818FT2f9ioNCUkehr",
  "key27": "44tbiDuuGYSp2D7hjRRM8S6ti3Q879Pxm6zUndcsBTH2Swo1PZCvJZ7GpzvPz1yjtwyvMt7eqaqbor8o1ym2BTED",
  "key28": "2wAbsmb8TCu7KgZf895HWXG5e2s3kBPpUPktVFiqsDzk1xV3rZNYx3ausVB9r9DorYzzDL7QmJgiiU7JzrPF7ivg",
  "key29": "RT3gcjhTpTm4pBopn71vQMKZoJHnMcTY76DwNc3EQ77EWMgjPwPEJ6RUtJHxt1V1ADKEuDgUvRAf7n42vVoUmca",
  "key30": "5x5j7QkGfLg2uTnC2xSHNKbKuJbpgDXZ9tJmpHXj6kVo7YYfi4tD33KDDEaCGdKCSaCh9Vjr63TMgMgdgSHivLMH",
  "key31": "2cxPAG8XpnynqFJ9j9BaFuZjUXuTN9qkcasBzFWH2UdP5z52PhUt9qU2j19aYkKMhqUudJUh1gNh2jhagSZw5RFw",
  "key32": "3VCYZdf2E3EFogYUZ7bKcZx3Yre18eMUr1ezpz2n9VSxJhb8iem8zKjt4DquvCvEqEXU53QHqaGRJd6dRhz7cAim",
  "key33": "45eZoYpnE5EdX5mnah6XXmHJ39ipx7zah7devPNaxV1LhbNoZr5DvkdVFfii2ncLDUrvxhtt6tFQSDuKcrpGWLGY",
  "key34": "4jN6MSobcAfpEh58jshiVZiaAf6ZJqH1SYXB1yDdKUbCaJFAbJH6vUN9PZtntbZTqVejhzgrZyASYGFoYwBaHNyL",
  "key35": "4BrUyX8wRdxCtSokra87RzQqgqRG5Mdk18HNucq6fyqaMEUQey51wAAwjg9GgYvCNVcWAZg6K4E6rRnmu7AQLieD",
  "key36": "29McmZEBmRfpgophekwYGaPoFgYEubGTNsZEUVYVhJttUXPi5qMFCBi6gpo1djkrNz2dMBjoVYEkHTSZ4jBno4qu",
  "key37": "3tV27PLi2sHkba4SDR4qhFwzK7FVbuK2cEAUiPeftFLXgqP4FzZmwD8gxyYuLm8i7TXfhSaEw5eqDjhNQEH6okeS",
  "key38": "4zxioXTcbMx7J1pg3h8fM9MLEjH5J4ZAPx2sbz1w9yXB7wRZZdiK7xJdDzgdr7M2t42g1UojJxMrXUnEmCiFZzZD",
  "key39": "4E9gQ7wXeWttJ52xRW8i4vT225yN72oknpC3yW13XDzsW9KoVD6fqHFDCBP9LCmb9Jz7sfAJRjcsNwxymKr8f8oq",
  "key40": "2pcKTuSiH4DVNXmCsgWPBBDsCJ1y5AjLpBZSFm2iiYfigUUoSfhKTRnVKRjdck8k9Wd1aTGgkEz2VArC5krtVxpV",
  "key41": "4u6AkxEPfaDVSRZGTm9St8RMRXFU8WvXcPtcQYtuRzfipzVCJU1UGxr5XhLdaaaaAoy1TmYTR3PBGxBXL86QsUA7",
  "key42": "4pu6tVgbDXPbYwWa6TZbwe9i1mGYSRHBVDLVQSSHwg4GxwCJrQH8Yrjk817gvfyr93uFnnjDTcHiCrqN6wQxhT6o"
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
