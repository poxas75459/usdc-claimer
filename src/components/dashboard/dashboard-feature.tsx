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
    "2PCciKZhrQqssxkQUGZgiRk37B7tb3PPgT5titoE9d4WuemyJzjtS9RRFHrGgKb6QuFNCExU4Z5cKXNBDsBDx1hi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eWedtwhEvDsCAntHMacwRi8N19oAkss4ztKKRgFkfcKypmfagQXFRpnQygj8n8SPewG7BoNQ7QoY76SXbuGhTCM",
  "key1": "3xVgyMkf3n6njn4ge5umkFZRrnWdHQmMw7zdYWU1UqTD9rz6DB1YEXKzsB48eQXE92iB2if97CTFikK2RzbzmxJ1",
  "key2": "2H5de9CEkPANubfcwiEee6W6JdH2iTvacjLrZ47J1VFputasEwgGsvaymjDb5i99JLcc2cyuCjGhYoU3xivZq6xV",
  "key3": "2M5n2RvJTGKSLcHxxJodjJmkESf9eipEFnqbZD7paqUG9oxf5tuwinroTRp64heFSEtJ1c4oN4NgBEnAmpVkkyX3",
  "key4": "3C4BpcjdAJKYCpG4HAKTW8mtrciN1DNMkAHexdMsqBDVZJDa9mcXvwxvjt3FhdT2YqEhEqLEwpLZRYLx6V4J8yq1",
  "key5": "5EWg1tYpun7DprKNZKyhYWJa5ajqDmw7HpgtYtLFgZnWQR19t2eETfErXZmjBrNKHKgGg91RkMePhC3sup47EWR5",
  "key6": "31Fjpyk3AzUoh6wyb3tXGWCoxFwHFL2Rs9ppbb8LpvjtE9qf8HvdW69tm4f31mxBdef4Jdyswhx42Asbkh6E4zX7",
  "key7": "2Lyw7RYrzNUz8HzC35GqNw8fL66iccqbVszjQMdU4wk3u6VRwvE8j8TtS6SbYBdkuiwePSf1K23HzcmPaFo41XkY",
  "key8": "659V2k94a7ZFMNfyNC1MviYaf5CQgc83Xak2ZRqymopEaagCXakV5ewFKzEM3RmtAcYxYZpj41waNKqf8ZicbCQM",
  "key9": "4t4S1CZJLurvrXECSfFFzYMJDGHrdwFsPHVkkmHPBZFE4s4FDCT2VFyS2vHLANjEcN1N6yZCJ9NHprkLoLtjw9Lz",
  "key10": "SdKWVJ1xMB2yY34rs5K13jxzAT6aMo4gZkuhvPaiBMrWFnEhrgXwCV9cjHhFFGoKSqXY51hbmFPVM9JZmJqSppV",
  "key11": "2WG2rCwavXjnFGRuSJ3ea7oGkqkafqJoXTXL35fyYV8PPPKcuJCfRfAvKPASbsUZkZZKJtgbSVtcqPvqTp2dvDsT",
  "key12": "42NnLRNYaPnsv4vfQgEMzmuQ7YnCcz5W18vQh35MPDGoW6VtPudFBCAjpYPkUduhtMXuwq4Lh9XoSAamsm7fgaAC",
  "key13": "MVSr839eEfK4TwPWLA73pBmdA2qaBK2x8EtxttXTfGK8jFRz2sqyv6358Z5xaTMZs45MpsbcNzFKkWW8vDsWB8g",
  "key14": "AXHmwtWVksc3edhzrBsfDu44FnWgXsCwfS2n1ptJMXDD6bauMARCzA1ZRB96nRLv7spfB7iyU7FUVR92tk8kqPU",
  "key15": "5suosvrstfv3BkJTdD51mpEAz9rg6b69MiYeyy9pLZCp8WdwBmFessA2jBgwZKwLEXSRVTHKsjxjRqNJtFk11yyo",
  "key16": "5DNdoanPrPSXVLaMRo55jVp1ZTK6T1kQFnLXBEEBihadmXRWdRtAxH31jbvfsTk5YSdT7yuuqKvE3Tq1kvaPchKt",
  "key17": "3zSSJdR5jnphqJ8sRFLB4XgzfAqPGdZ1bJNq46ZAZSFaF8jCJMynrxJtU4q33fTKTMNAnSLxy8CZmeJr21pcjYZp",
  "key18": "2yVui9Svp6XgwjKLsaU6QSoUneQZpAFGiimUBHW97122Eqh4LRveoLbzzy9dSMPDhzDU14ZBK8ucBMkioY7maKMC",
  "key19": "473cmvUJbiPHJWXHtU8SC9GvHT13itkfmipT2CxH1DMwaNvB6yyydf4FtKe1kYuP1nSpd2Yd91BAck4W6AwtwwwA",
  "key20": "2vxQLkDM32o7fy9LHrTtQAvVjQ3sBmX6WtBG6YGXaYjggwVt4qwJrLxJubKKDXsD9z71NWc6qeeyiYXyKhbm8Rf8",
  "key21": "3eTPGkLokHr8bFeit9MTGPaN2uuThb6kgZDwjwADZRywnJrAs79aFeV7JhTdUjfidPSPLaLs3oD3DbcqwnE7oroz",
  "key22": "DzjuBpJw9A1B4fpyPV21vkPM1JfvUxWRqVkS6aNqBdHkiNfxf7mK6WP3sB2YHvHjB6By1Gus6xVULRRf3qzB7Ar",
  "key23": "2sSjCWusQXSMqyT3HFb97U3ZoTd7Tch1yd3jKqNvaoGupEzGPeTawzHvkJ3Z9B9u61z9dwJjh1EvCv8rQMnzRReH",
  "key24": "3fBFoxP7f1dM4hsNVxdpqokoooXskRbEArjTMe9FtoDabcUA2yQXYZoWyD3SWFooxr7CWGXnaEgPPdLwSJ6x4mB6",
  "key25": "5f1t6wisiAucLfFB5UyLNCCqnSxep1A6rWH6B6mAv47XvngNA8Y6aSGcKGK9d7TjihqDdBKXuMH5aLj3Wha9S9AW",
  "key26": "RKTteyqGaAeh1rA3Wsa516chcMu2S1Q7Yu4bKYAyKXJoqrhWvoRbh2VoN3nP1CadgafgD8abUraFn9URtG5ndMb",
  "key27": "cPs4ez9hnArYJmgZAw2RmXy3DYN8fCMJA9nryPG7psnhHnEGWZD1d3vGb8KghoCS2izC1CjWWSh1VNhU2iJVBPC",
  "key28": "124a1JAgiaH9UJ6QRhk2sBxrZ57cLGZ1e9rTa2JAWwWdgxiJNWKKJ4X2tGzpA9ZYzSjqFj6ZiCJWmBKuyb39n5MG",
  "key29": "67ivYqwZ4vyRMGjr2FvJNjx6E3EP3UPo5rYxw4QeRNBFK4PEtg1rrhAcxNEUsPVs8jTjzo8iAJ14RiXfno6yp5hc",
  "key30": "2QYMRXWWs4s52w81qzP9iFkpACjcr22c2ATF2kV9dx1124ERkXRnx4nzSRihpHp5dWffpeQ7UkAQC8fjBmNB6Ezq",
  "key31": "4RmeP9NBXDo4CPZULxgn69tgzpu62mLHRD48hAE68rBUFJhGRjtsVbzFG8Z7vJ8izXpTJmxYKL4tYgEccBgbYq5y",
  "key32": "29u2AtkYyWjC6uzPYF9pU4phRy1uiMjG9wJqDZT696tbc65BR5viV1UZK7MQ26vD7PDReeJYDAeD4aBAXGN3vgJU",
  "key33": "5SBTk883W7jVQRoKZMqqoU8uYPmzEqM1ttHeobgTQ4WYWCm1dTr1hHZwU82kKU9YLCyw48aHkGhTE7p5zTjGch3C",
  "key34": "2psDqPurtgMs9DFg7HJreLuhxbP7UmAWUQt4STHF5Knzgm88sLPrHpcje6F49wMUdWPhjW1vmxBnHnB9pPzkceBj",
  "key35": "4eN1v9a12ExMxLQVzRQfm35duCGdfNAgvCd7AsdZAPXWf5mpDBm31srMaQ61MrS3u8ZC7XUWTYcPv6Y6CfVhS9SH",
  "key36": "5vLD49qw9odVw4kmgc5Eehi8TmHT7WvH1U9MiaYe4QfrV5u852fj7yS7SSFMPS9Y63CcQEEWpdM572EjAw9YbR6u",
  "key37": "3JtWSz1eD2L7raCtGa72odHerhTX9oLBZw7qndJLKAkReavpwKTnmC15zEt1tShoGmyPJFZCVcydzthf49LJYEbW",
  "key38": "2W543tNCaY3gQQ4yyouEiL1W7kmrkBBufDzBdHNXrpV9qyhSvrgQ6YUM4FC8gjsxQf4uHiRM4kp4dU4wKXXQnFbX",
  "key39": "4x5mfagx42bX1smeKiNkgNoqEGTh3VDq8WMuJmkEbM6tSkc7h6BHvTQA5yFWRapDcMBSZpGNKsFTDW1mCcF6KTGJ",
  "key40": "5cAXErS9WquhNuir9BzhYZ5Psz7wehLxYgXouYpsyk999kqqrpFpzj4kwBUQvic3eaYpQudKbLBcPBnGtDLCkMPx"
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
