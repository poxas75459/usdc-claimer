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
    "QeUd9krWWh3Dw9JdydQkpTMoQSeWChsbV7DqyCjwV4nVHQYxEaF59Kfv9UKSJRxmiScAykmtUXK44FrUVASFUd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34h3JVxHan3kgHzUmbT9Cdoix5vP5ThqQk9gKDhFyehYYXWPiAR9PNvaKuhkpJVQ2f3FcWG9NZdeXwpYur3pyRkZ",
  "key1": "8YptCstvqrxjm7Mn3aRbhY5wj3YGdz66NADB1V7sA7oDvu3WjvW1oozQiM1rwQS5yRqgDbYx58C9Ey9EBay5JTD",
  "key2": "5FEfCdM2rom4VMMTDGZGpXCpcS26DhEZeu52XGaKBcUx77C319xAfomZsd52jtRi7pXA4vXttd3rjmC7sJCeUsHD",
  "key3": "XzG8GeMZV787iUb86VPPzEM1hTrQGtpKBCU69vMAesaJjKoMZQh51NZndk4ghQKr2NAkB6wUUgabGE1zscRbCeH",
  "key4": "KfnJhvPJTQJstUejCwu71Q2HhoncqZHwtLkThTGB2bZQUcM7yceSrKunJ9NWiLijXoHE23fueqog7qgKKR2RGp8",
  "key5": "4izrqb8JHjrGDi5FBJacx9fNTj6aMKDmwctwkHkvuQzA16AnNn4rna3yjF2L6M1XY7KgH7rAWui8gkmMRq16pztv",
  "key6": "465gh75snafC8D1L3dk13yL4UEoViqCEiZFUYSgXtBuiVurRVwuWsCZZEd3thWRxFGGcygpHrdpxfmFZhrez4okr",
  "key7": "4ZYz3HMK8LCRE9F4B9LEHKZGFYNDFnTuFzaR43Z2HghihsNm37eK28MRrYBw3yynkyDwHpmKZdWuZ9MRYXzo1PJ5",
  "key8": "2NHh18QvDKvQ9KuZ7SbDTtTNjjr5bSQSyEvCA9D2mWvNSLhPwB7tnBjY4bu7zNkR7RSGVqYwBt4x9jbZTZRenjHS",
  "key9": "27k2ji5axXB9p8THhv2XGiFa2e55pfPdLePv6Qdrbd9qj4PEyWmUCeyDVmLez5wdP45B8UQrA3M8W3mSF8q1UopR",
  "key10": "3kodXMSey5pEyde5sHfDHCw4B8qvVSCaCuXuMxSSRxEJ76mRLv6oKa1wkH27Ngj64cyQ5zXuXyZf2KRRQS3yAuS2",
  "key11": "41caqxQZmbwx6noHM4KbTWuzvp6iZ5a9x3t4pGg5vr4msNLtXDBRdkm2aXkJGM88M889Xu6Ra5yDPMrxrrnW9p6V",
  "key12": "3bEPZRST2dnkmnFhfPd5GJwDQDPHHgmT74V7C4xJ7bsycDn1NJSgFUyUm7PGb1Hdh8PccLJPipMUfjR6kHzD9Y3C",
  "key13": "33TcMXzfCG3RyzVqPsXJwptUFP854P6pUNX9QWcxjHKmx6xQqwuyUUn8noyp9AYY28w6xPLGWNZ2bDgcmfGhfkez",
  "key14": "475e49Yz4hEB9HYdgg9efHyPe9imCP3r9KTepGqLmogLanfAk6nGYrr2rTLqR3fRPzVR8iokSfWxuT6Rvg4engLz",
  "key15": "5rUvtSCeCooBmi5NzAGnYDXoqPvgfZydvEAZuYFk6nSWkJD3Ha4Rjj1sUBEYa8aq6xQVaTfkfUQULe6r8CRgpUfp",
  "key16": "4L9s51hKAjTQDLjCcNzrNKX4HfT7RnJsp9ff7MYTwDz7XmJyJqoiazYGNz3fpm2yiUL6WAcuwBpwt2h4PwAdjDuh",
  "key17": "369TKwWGGPeQwHTMtJnYkgP8eFADs6UdafjBYvvrkh4vYwfQZqdhUPEVkqagBSgRSfnf4CP61i9EcGxRPzKgU8bY",
  "key18": "2Mj65MsY8UYqFgCe9A7QJtUzGeXzgWSKX1dhDDWaGveyJU3MySqKLDg8FGiiXgnAsVXuvsF7B42HmCz5NfBHubn2",
  "key19": "d4sFfV6oAQzeqEdiQ4Ywg6VYEvtqFrPjgUC3cBy9EmPED2ziG2pURguk1nic2EmkWt4A3RcPJ35GTQzfdrt8db3",
  "key20": "3QR21bpnAQ99VQFMr1nRPizEPxD1FACUUHcKanrpCWPtXzJNNibS8Lq2zULFLGDYvAyCMrXCn4jV3ARKzqXT3z2s",
  "key21": "2MSBBocfYXMFqgiJr8U8KAza7qiGYo3kYNsymVULhcxvLW5tdhQWLhCMnoMYUNdJjUE1DVRWYRZTcdiZCZbkZyqS",
  "key22": "25Pa4FfnxRKEhjwevwGMWjDuifaCCThkPxKzroJKBXQPnKikGh9ARJCGqGaPA7QqHVh1e3KgsvsucyLRduoFAXLC",
  "key23": "3zSnobZ8dy6yvMzmbScvKXP8TP4BQ43VdsprZzjxJ2DYvftGXio9pe2zqs6i6eD8Fq5WeUa998GQJb8UQZA4HPCR",
  "key24": "2ytjJuADg6qye5gwpgESjCyAoaieqx4YbSwu7ABQ3xVMYhECvNkPsViHn8FjTAnm9g8YxxcnN3FyKiSM1sNLc2kP",
  "key25": "24XE3KmRNayHGb6B9gWHMKVFvaji9SQYSdtBbUiBHV8ppv6EBvJXijrYkotMzJchWY6fjQhiKjD5Gst77qdLxZux",
  "key26": "466V4XzUoyASVx92xxfuXhjNc1jGDjxarCqv4fF5JH65uCY2W59x2cZ9P9cfZKaHSp7ZMsxBRov5ukJypW5Lx2Mp",
  "key27": "3uXqxZgw5UmZrfpjipHGTut5DKharSRFomVwZvRQ8ayevcN7bSeYFijdpWcxtNTFCnawoBWFU3NL1kkXu84T3y9B",
  "key28": "5sKr41B25zTTCB8PgHUH1KPaNa9eTVa2gCWDt3vmbGhcrcQjE8MiFDjbPUG8yXD9yyRhKbUtzetbJz6pteY7Zq9w",
  "key29": "9XmSawMZvpncTnRaMXCgDVc12H5puwMaTEwoQLPb5LjeZYAdUcSfFFrJELJfPiy3uu6NoJ1VXvMUDBEekUFBmiS",
  "key30": "vhAoYqyxr4ViPk9PqSZVJy8BNboTFQ1LNoY57QHNC14CmT9mf3B8ACDhSdngKMXvDrRyPJo5oGunJowNRCuE7RN",
  "key31": "29N8PA9Yh9HKsdRCm2m3S1utKhnxpAgMzCow27n79p2sYoG7QA2X41aNPEfZtfXFiUQ7bStSD31SC67XPdfV86pe",
  "key32": "4TYutpn5QRp3aRjE2ErS69jV3ChWtZkchDL2EcyhE56RVcBpb67MSa4GaJe4C7uSLYARJjPVknkA9P3eTo29Ca6h",
  "key33": "JQSx9Gw7swEMj6i5uKCnvoTzo7k3ZGoxAd9sFMzuiWTQwniXWQ8C6AZpXH5DqBaDzYZDo5kRL4RsJLktjJmDp5q",
  "key34": "4Hcz1a3CJv1H85ETb8cjHWsPJERF52XBS9uR8Bkwcf5veDQPo1xB3RyLoiy9tvSXLgyrf9yZ1hGyQTVKs4r2FLiB",
  "key35": "3DJQeTLYMsSL8ZgK7ooZBZKpwpfESahTkYr6cYhLy4GQ5FwnpLWiEmGCgEAdGeGCzmcUsXe15BnAwgmmJXeRqpU8"
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
