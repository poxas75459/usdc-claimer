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
    "2P96Frm57pYyW4pchAMV6njME3BKoEQsr2BjeaWwie4V5YfWTSjgwf286YsXF5ryFQBEzJCQymRpLCgKLKfavXgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zneu34wkyQhZD1fRPdUTRGGXgSJMEDrUhuiBw6PeHBaCAZ7eNoLNsFUn1obyaKRDkFN7LwJahfFy6sT6Y6NCdu6",
  "key1": "2SqjdJBDAqzT5APq3nb8aab5w3rdpMYTXwYj4r7rgn6zHmoNtNbbS3MrAzAKzMTwANSAApgsNCPjZoAV9t67kkQg",
  "key2": "5RevWir6xjmkae4niGHxkDUGmpQVioP3yPdMRaUNgrzijVV5K6cGoWpjmbiqzQ6413QzaRBZ7FCsjE1QQDX6cuHT",
  "key3": "U3nxvsEiDhBdgDLMcAxptVbdvvBNZWgfYcPnRQDbY2jAGC8Jxm65PeH9PbxWGqakJpRRxi2Wv4GM6d9hkzRBLFb",
  "key4": "4FJMZTy7WLPcAaxKqjEGfM9iHuyftboHu7omXw23haszsHv5jv2mmHovr7BxpNdfqfViZz645FrxAeLb4RuBUEAe",
  "key5": "VGApcymvZduPq9SVYQwSxTmewkJb9YXehM6dpBdkULts64qytjE1JmT88CD1PUFaWqojn9Ne4CH8yhNmUrtPV6L",
  "key6": "591n6zmJQyMMUWkko1U7xvb7ByhZRSK1j4DKBSAXyEvoos64U2bkZZ3QirHxC4hRQikaG6bgDTQ1a2VVFLwyM42G",
  "key7": "4iohgcbL1mvrC4GKt1eC5cQw7n2BJcmieWJuUBBCxLFCiA4Nzt1SzewwdKRzsKP1kMtcvrdQyoqmEA4kB3haBSmG",
  "key8": "56TDr2m6DH6D7eHBPuW2uqEaM1RvSXafvWR5CoiUYSXQCzZZEDurqMZ8fqPiQxumC2USiE15PL9b9pUUTr2DM1Kg",
  "key9": "DdvMVijqHTetWEfJXA5RnX2xqbGnMbf3eQMxw22FAAzs3QFsqS5EnBknQyGnrSFEWUBCB6jVBh9FRTxbePddFaq",
  "key10": "3RqqF2tNfc7LDMS7L4HmhqR9JkFDujbFPKWwCrpBYfDRCc79xAqJPoPbqKPSAe6JQ1fSNhWhrn2a6mBRFs8hmkTC",
  "key11": "gUWFqxWNaG33d3PPr9TQGJxFhHRk8XiE51mWAcsRxtCRcUp5P2kgEW4RB6fWmqBJD72REZ8jzFwWdYpwNp5wZKr",
  "key12": "2SutTjaZDSYKkK241P8aRyuznfq2wYqQcqDs9MjzVctbLad3upFsnFj1XV2UTF5RDcYgmfgME49gPXC1JAkky5NW",
  "key13": "2PhHgAuyzZ3y2jE3vkTrJr9tyyBm9r1nXgmTLmGWCTiWninngomgo1pSTrLRFK5ZVaE37t9goeyd5CPBgt3pfXAn",
  "key14": "4KTSv6f9WMTdgGpC2pY1RVEhGbCZLRTbipUvPYTcV17V4eoJ6YdbySkciGyTUc2qusDv9NZ5U7DwQXGFs5qQShsB",
  "key15": "49egsBi1LihDzVbUTi4cEipSdUW9tLSiRi3ZZ2MS5tmbHxDbvPb7B2nDNiTA9nCiaWvCfY1mdakHnpixCThBFfus",
  "key16": "2mZuBPZP8EG7uutLmNa3tCqRDm4TkjfW4cq1xvgcawfBysDBQ4wNC19JaLhEzKaqe5ZFh3kgLinJwXv9FeoQKkCL",
  "key17": "2HBjoEVWsajWswCrzroGe82ZGg2rok5WhX3HE4RT2cPxhPNCKz2BAMDUZLsvy3TLrAk5SWN58AkdSPsU6Uy9TJdP",
  "key18": "4utWHUAZCgJJUvyG4K8UPR3GW9VdMTBhgAGe7rGXrBZaGcJjzWGWtpS4hhffASgj5yNFvU3wEigScwHZ5EBahky8",
  "key19": "2xDrQtgkE73PvHqA4m2YSoAXvj4FcTUYk2ahqbrMMiLEN1NoVQwqQfezqqvFun9mGphGnnu4SDH3Gst6GmozRFGv",
  "key20": "3n8YKshzpNDLgNZnM1bxbEY946m2hJfon6YSfmpoAHNkjVy2DH5KzfsvgpMm6VTq2Tj8yb6ETGW41MYKRLyLuYB7",
  "key21": "3XMHWF56ni83HU7QwXGrdMKnusvduq28aDca8RMZmwKQZP1toLruAF2bMjQiAKzFyE717LS2LeAKfzAPrPhphihk",
  "key22": "21wqVkVZCjuCw6kHuukaguvTtKcrqynszzggfS2imLQoRLBAAaWzLfCmzPWsPg5tF4JEDXSLQ3MvXfMoKnEQ6ZWn",
  "key23": "5KHR4f91mrKEzQNwHJsYAEC6aJa4T1TFYGAtPe9FCUajZKF61AT32ZN7dCXdGpHqCxCxjnr4Zc2c5qW4KY96mKgr",
  "key24": "4wNHHX3moukjprswxk4M1jJEJ6KZoNWqTtFURE2f1ssvjPoVc4mW4kPqLMfg3Q3XejL1FgfHZqQBVfaquq7eKjJh",
  "key25": "21eCyioj7RSW3MMUtkeB3PymGj4XxPBPpRb31H3TaSQwSULQ97d7BESzqVUgsH8xYmTjnm89MavMrabPYpt2CajU",
  "key26": "4FiCAf8vXDdVsBhwjzF3YGTbMGa9jWwq1K5Ge7dgezxQTspuL6M7TxuVQFXNpqMKWWXujC56bfkNnXv1Trv1oBFs",
  "key27": "5zUJLwqTmHzT1TmdREFqdMwJPNrDuhHsBFQW8CqpKeDhEf7QArdQbgnQx1cEYC3vRx2cdJXGUHv382v3ejVsTY6X",
  "key28": "2ZhtNowMEJuwDKjfgUjrSpVwQkJ2ou48BFy4L3pEhKefhDAJVQNee8CichKPdQtf9UJoHBGNG6e48ehZh4amvgTN",
  "key29": "h8BypRGvnea7GoNpmdE69d64Lw58jrWaVzA5HGYFZwxuwVfdA9VEpeTtdvMvHCp28VHmyj4usyXbUUcEHajYCzS",
  "key30": "rRtDp2ahYyjdgJM2TtriKKyTRFm9mGRMpxXXBDsr5pZxWgVg88RKJxo6exEZs2h6v2k4WQUf4Jsb5RiCQ5TCRHK",
  "key31": "yAgDCarT5e1uR2GEnnVDpN5qq2sdV5MG4j6ACuoGJYW3SzQnWZNTk72t5KwaDkcRwQj6zCBJ9cTtHFo89yfbqDV",
  "key32": "5mpiawF54NbBbpa7AeQvpbjtuEZVeMwMynEhjZ5ezb1VLcH6rxL6LtBxh5Pp8ZCcDHbpHUSnVfyf7f6PumstjWSh",
  "key33": "KC14cRKL69q5r6ou36YFLKVb8yw7Gsw5PVe5JV2UuepiUJFGXmwC5fMyn9Xz5H3T3wdYbbsRGrM5WGjLBrAm5Cr"
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
