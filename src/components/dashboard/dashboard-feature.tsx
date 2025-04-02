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
    "4uMgZKm9TDXFudRWsego2an1ndNuSFrxxkCo4SYdER27t3eY1hgxygjQNeCkCaFSiWe5JYHwMeqToRfSoMWzUgm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GuAC37MKRgtv6XKehDvvuR6fyySqqbRbnksTwv2PxSEEqnmCDX9kzAZTKDDBrV11nPT6RTdpyftAnqtfmHe1ZWs",
  "key1": "5WkH8ApLNf4u3wafwB14zrNMbZgC1iTd2pDusuhj2V7yA112z6k9DZP3DiEN3fdGvDm4PSbyycvHCdGSxPjheTCL",
  "key2": "2Sui1mf8svVLmeQjxPA4DfsFe5YrPx2uBYPjqJd1xt5A482Svw8TKqKTtt8CVhY8Kxpv5XaNEburpCFUnjqmnzCj",
  "key3": "418RkHs9C2maK1evGwmXmcAdV4Bw5jfdYKpN35vEexXQshCtDFN1A9WnodjUA61HTV91kwjeYsP7BG9ZzPLFR88t",
  "key4": "YDryg8Ba11VupcA9LeWzofeUWdncudEBghxpMwSC1cnj5P8uefQUh5YEJmHpL2PA843MmgdDkLQiV2YtZSgRoFP",
  "key5": "4GTvXzsmw7yRsNDVBSz15W86LxG2XuLtkkM9Dkvagahtuifhup96fABK9Fp5LN7jooGgUXZm5LDPv58gwYqfRkkb",
  "key6": "2zD5FnR9heQX31gS8vQUoHnuY1uFUecXBrHmJosxZxNto5kpX9yiZzoAwTRGfhDxbe9kNv7fXKxqXfbiCTJ5mzib",
  "key7": "3UuKiDxCmVsFmJCqKmCxy2rvNhf14DUsQmd5eGPo6wSYLSLYLoBEMNbV8eoe14PvvwKsepj6LbiNz4jW5JqooySD",
  "key8": "4AuTn1VQ6penoHh2T9uUJdTYKJxU6xAkVLGwJ7jRba7gxh4pxvhG64xqbXKfsXoB3ZQUAenZ61rYz2jQf48hnjPY",
  "key9": "3NdrHYXgWAnw49pRu9BiJnSC7k4z56vMYj4EpddchKTnN3MDomP7SAsNxq1P2YDG628443CzNRvQLt5rGAthh5mT",
  "key10": "36RCrpCv6Asnr1wgvY9j8a2Lopu6RJsL8nAUmS8i1K6Y3AYQpPhoSDczNNrRAkjhUZsb4VC6y2uMopb87nVCaX8K",
  "key11": "4A9KKc9TD5ViqfW273Sfrz43bxgisEnPA3azjxMjQjExnaxPqtizt5RgV2uuDmUH6LvwszMY1K1QXoc7k9uhjpFJ",
  "key12": "2sMNcr2DJgicbDztyTgJbu3S9FsGmpt9hqsvpCGckBUe1khDUnZFjXi843FbkBYd9KQpn75ncqUCLNGki2TmsMpx",
  "key13": "472rN4k5QLb6nUr9ynSQNqUCEtF7sJQRvQLCxTm8VZaiAzMaxJbX1X7KJPHreaUmi3BicXqCuipGWeqC9j3L4avz",
  "key14": "DcQW471kwLidoMf1w1TSL8m6zQPczBdnsWAT9EPmCzcJ62o4LazfbQ9gbhepJebrWUy4nXKKj76csATtEMYdo4e",
  "key15": "5MjrpSv7G7ga3gBHPrcmAWFh4L1NPuWvc5eFNZKs6KGSPB2FFxmz1NtJ9yqzKiJdPsXHXaHH8WREYcuPPnKgmKET",
  "key16": "2e1TeByGuHnQX5WVH139R7qQDxnaKnh7YCXpH2C4mGfjGgemRrV6donk2hJTNWY87V4GZtozD9sU1nY7ZCtGnR9m",
  "key17": "svDW5116kbUgLKyH2o3xpU8RjCnDYtiN2y42qdSQ1QGovzSUdVco6WcGaf4shZYzWQXQvS5BDJ8jzTZr5iWPM6A",
  "key18": "5zKgcsUbJKL62dhevpRjV9Ron3MxDR2kYNynGbL9SkR5pAnEKbvvfVhMgrifRCVDr3V8SQyR3bZLJH894fbiR6R",
  "key19": "5DxpmipX4coXJkQ2ud6jCvzsSdcAVyDo7sWfq3gpQH9wr6hRdQPCwU9rJhaJWguQpyAnpoKcLUMQvaNzwkfVPutN",
  "key20": "yccHsY9QNuhFaZAjRa9UsZn8W9fsf3abpvkAzSqb8HwHHKD5eiXpSDtSy39x4uqy8ZHUtfdF7UDQ6EEoejmWH2u",
  "key21": "5ZFVVCU5hcSerG9G1sy7cXD7hsMmYPGoibEVmub7bcym3QndF1KFR8GvZ2xwqj9HcW9JQ7RKtaBCvox38qzeNyE1",
  "key22": "2Xuot162cymhdumaatpQzxQGFnTjYd5gycYofWB2c4e8T9SzcYLWSUDdBdpCxAY643wpgoDwbnSe42eXdPbTPEyU",
  "key23": "2rJgBNsppLtsDqH9DGXUGLY1dp73DCQizfbk79RyJWvByYjjAzYE9Cnapg29mFzXPa9JKiU3pbCNiNs7TtxEnE1M",
  "key24": "3NUgJD3QcK7wCeLCPywMTmzk8jXmgVqQGF5uvTHFaDfKspL9iP2YknEGmjFFUVhsxXNj2R9ZXceyvAmHDZkJJ7uu",
  "key25": "2tmNuJUWvBSbSckZZTUiCdAZTzQ3g8xj2iyJbV6WtspNHasPVSY9AsxqFWXc6Yo3UDgEakfyzm5nAiPeEzC5GJyT",
  "key26": "5wVgQyTNpb7iCSbv2s17rXW45d47ugttpaSRMdhoHFBDYpn1eXtNc1ZP8rAUix5y8M8Ryk7TeE6DTonHG2SNPB1r",
  "key27": "4GJM9y1L6hQA931hc2PKAQQs5Zsiv7gkpbVhkrUiLKsMyHofuFgH1JYPW9e8CCcYM3AzA5mUhxbuaM5FnkBRLXGi",
  "key28": "YFqRBpfrq91eo9wdRgEhGTspyHH8CaujtvCRcpxEZTRw9dZsnQbSbfgMyY9byTw5MhiGpn5BPvXbt6HVst8HT8M",
  "key29": "328VsX7tDHtPEMTKQUoxVAHVD5eeFqHxrK4iAXkKN7EcsEw2mEKe3viq36t13KwPtG85W81PLA9y3m7i7sghr8Cy",
  "key30": "29o7o3eA3dfw2tdxeuRB1cdhWnhvtbVyPCZCveazKUEmLEXWQ7GWs9KWfddpEH2ta3HznC6KRgimt7grmzDjJx3s",
  "key31": "4rEWgCUaBWDAqxYTD1MVeSNFPaDrE8R7UcCBWRf7ju6LDJCcnq4YyKnXupWjekTZ1FniZjKzdqj6XPqNskuBUjBz",
  "key32": "3L4FphSoCkU1wvgxjFRYyrWh7aHBthRUNi71svPtyZcAjNCsF3XkoBLUb1SQfrtnCXB9xdYvyp4DEoCqPpjyAhju",
  "key33": "34Nf6ZYauQ8m85zheLx7N8JnQj6oAkiXGgKHUeqW19HcG9NQ9t9fGH5r9ictj9aGu5QzRYKpi2332ZciZEzJQx1s",
  "key34": "RxrpJd8JnRbaAzeuFDCdaBpmKPWC1ZonFFbLEsGuGV43v8oKQjELjRPPqRsEMkdQJvAcUCF5RDSgXEpSp4uD4bZ"
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
