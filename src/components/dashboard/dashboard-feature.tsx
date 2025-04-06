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
    "41naQSJXXQ8SggVqa9V5zZvYjKLr2sAtqQfDUYgZqS81ry6uTYaARQAhDhyM3nZaRSVMB5bJZnmpygbbpGrkyd3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SrqUtF2wEHJoJZFs6d7nPS5u7udjgUEu2f6S3D7EtVVY94Uvqkac4ivfELgrRFj2oeGp7kQHQkTveBkTN1LcZan",
  "key1": "4KEZt6mkiEnoekdD2cNrjCPbYwEpf4eQRc5z93Rf1mW59hAtn8NxfydnMMCTfUStaJRehGGc8M1jmMkLMyrwHys2",
  "key2": "2PBR8pAWxGxt7b9SP9ikvm91FE9PonYwdHmA2g11sGuioLrK27u5Y8ANcnqbEayt78K9S1JHcYGeqMUA4UARPeAr",
  "key3": "ipMHqQacQpD1yP8t6UHpkjDwzDxTFsHMHj1zrmrSX2CQfUXytjShwupFm67YasMknR1a6Y1BUJt7ydV728amBzB",
  "key4": "3NEGzyG5TtX6xbVjyN2NRg2kxmTQ1eknLbJXmifqm17RsqcygjDa7ocxraZuzjkQ2yBe2vCtax9dpRRQQYx9miYi",
  "key5": "3SvrMY4CUxWbSTvYWoLHu8qupmmmcFG3ZfusNhoEgGG3DVNuWBZAr8hRTVAJTGRmhZ3JGiVm5wjYmDZaozpEBZja",
  "key6": "4wwk5mCnsPnjrAZ496vYBTbNojrigbyJ18s6ShSz55oVNc1VFajmYbVwVzdkNBjCSNxijPHc8mkvyZ5uksgPEgey",
  "key7": "2zbfbs7ZvSPzTaxBoTVZ1mgYMEpkidznBGPr3ibtGgMUAuKgAsVsxtfyJi53xxShkNhU32d9HpvnPkw8cFRGUPD9",
  "key8": "3HWQwpzjDt4eBTHTA9xELz2kaoNGtdzrorCjvpe7oa8VAPpHCwoXZinzRbmVpfg84npnbk1N2kfzYzLHqfc8jVCc",
  "key9": "2eqb1hcn9TfbonYybtQKkZ1SGLhpoZxewH9C8siPHqjtdq7pVZhaXzoUh55d5HHGaMobKYaQYc7CntjRZWk1dRpn",
  "key10": "3NwiCZHnz2iVCL6C7AC33d1F9ToL5fgSNw1KWeSwdXvj3BpkKJXZZDCPuYZSMFePWNYCeEzohxDz2GZ4Eiof8dHn",
  "key11": "18mt9xakNCFVwHfRbNKWwDVSQNtcU47AjjByTcV5z1bTpeNsFPhtdDVYXQmwziCxn2LiwFKg2FpvV23WVvpStYA",
  "key12": "4UvLe1QD6kK4KcqZtsBwkCH8rKkoQneWKSVxCFa19GBNt9b7nzMqFVgLJsTp24mmDiTnC7xsZnVSULZrFaiAP3YE",
  "key13": "357rMDydKd1Km4LNm3upBoLhNWgoz51bSvUUvT7UjBexXod4Ft5WUdAGBxefkzFkXSFXgENZinkEzEvaJ1MtRr1",
  "key14": "2i5CgMQg4jCEk2xhZZkmMnMVVkp1mcytf8JmmHGNMJApbWAsAzqt5ZVXCqzvSdP1akHB31Hm8vmDY1BLSeThfWkA",
  "key15": "ZTahhh2qkhpDY4jaZnkbfWx52xn9R5usLaVFdPp5hXjpHryrTbbHgpc3wcUMV5awe4HKvgU216VhA5r7dJTLWzR",
  "key16": "j5Bv1NU4FLXhw14nfPoMFDbMXXpSmBBrkKcbAYf886mAzjm859sqrY3vqckxyznD1fjR2vACoWFDkXpF8rJduGJ",
  "key17": "3Dm79wPB2UGpnTid1g5NFZXHrxVsfZayzCwe4FqFxBR2JDfJYnXbnWNT7k7e9eR43q2BEcqdmGCNSmwThzVK3HzB",
  "key18": "5RAFRrB5NiHJRMVAwF7fVNwRsQXwZJQisJaw4i7D2tp7ZjhZ6xV3TCiDyZU65bcjEUKxY2gCzmUMKgPe5i8H32ky",
  "key19": "tcwR9MrTYxnQrb3bsfwfWV1wgSWXsH44Q8BCh7rFQEvKqczNJKb72bt3oi1pFv68Jv3Wp3CfpXeTbExPkTpW6ox",
  "key20": "4SHegpaKUiEU7aL8vK55cVRHr3ckc6zCgrWydzqJ3CKy1H9aCdn4z5eDCevHY8RTPzDFoQNsn3FNFnTVCPd1ZoNP",
  "key21": "f6VSv97RtXqZ36MBBmwNTxTWEfUhUTSWMUrGkjSVue9vBBYsh5aiDWBozSJRzCPFKT1aC3Ud8rb5j5zc5LYSSXn",
  "key22": "2fg8pEr8gChLZxG2n47hxXYkgTu5TTucazjLYvfdSYjUKyezMm6sVUJhyVssxUS7pTetRana9Q7gSjRapWZPJnym",
  "key23": "2Y3ZEkmijdgkuUsikJZqhTLKSTrgzSCq3AdhWhvLLeHBqFKTMiKXPN8RgfJXXyd8YKr4aBCLRgNkvGRPeZfQm9Hf",
  "key24": "66uthrWntuMDRTjcAAzPUmM49ph7XKLULz6HuMdU4jLuVvRCMeXeKFcbEiuxhyFcLjHgCPPNQquyY5L2cVJ8kdBt",
  "key25": "2WYLxXnMP4w6XS1KCVFCKxiqZDbopWCsLhHDoGqjyZaoT9Ht1MyaFQ2iz7Er4Qb4G3e1ToUZ7hsi4ULVD1SZKjXq",
  "key26": "2FmLDCxy7wWniHwAcq1gX72wY2ad47mi4sLQsKgBxp86KfBconXHsAGepT8ifRKMeMzRyPC1HDTxdATvg8ErWtXd",
  "key27": "8buDMs7f2MQSsMNLeCiRCmBwWaYXF13UBzwYZMhpKRZXFc4vf4Ax325d4YBjMt7cvUsGGZzdkamJqp9Fg9R4cmv",
  "key28": "5jBYEUm2kKa1TMjgkVo7XPPr94NUqeLp5hh17cDakdHtAXehqYxv4erj3aAEYBso9wJsds4Qjoir83tn96d11ZkB",
  "key29": "585KiKmJLoS8YAeYe2mJcFMForg6ZXMq5Y6xdTYgYWTB7MdgFRz4KmpfEdB2zpsWVhRpRznCFoKLxTY45hoC3gDx",
  "key30": "5Qm2X9fyWiomFg5SCbrHwxi8M2PMG71cVBAysHdB18rWYwnqJNMQYf7FgVB1sGZeRa517K6MBpQGc1CmUpVqv7gK",
  "key31": "4e2yQM1PTiqmMCMSPRTTXiLGdknECNh1sMvYGcQ4ZqtPfsxK5kRyat2D3g1EMSjKNPHbTU54TJWbxB6PXpzrSLut",
  "key32": "46MTKk8Smfo1oKfHrRY8191XssXDMGA9xzj58ucXkm83mPjPCyNVbPqD3rgDQgSHQncxkERPrMs12UyEr3nXau1Y",
  "key33": "2eELocRnetmaucoLCQCB645w9oQSm2ae2xYRyZrjmKi8yUXFbHHG5d12u8Gg8JfDmEoD7vqmYkA4yVMC8WSe9N85",
  "key34": "3ei9NbRisA5D36kn3XWvwZuJ7xniDGf8WAnXmPizByer3wVGyNhaDDaPE8QA5av1kHKEb6umSG2ZBV7LPqaBX3AT",
  "key35": "3K7nKR7TavKWHbtDQFTb8AeKdnLXfBd4o7rn7UWdBmy3Du1twWidpRJtfUjNocNuRBp37wx5rURPagcQ1i1qERa8",
  "key36": "5ufYKoYGLgnZ4ZGkCSkg6Vt93YUn764BoG9PFADTfYS58iwm2Nd88U4ASmuaRieirtwrGgmohHqpz17CpZmcm5pF",
  "key37": "4DynMsgoWnQbp4AjMdqrLcpGf6Rx8iyY1kc3vnCUThpUaSLCVAHnNyWESB5r8MX9HoyrGYkFXq9wJQcD274DZy6Y",
  "key38": "2m1fS2EvCUp5VACsvniXujFUPT7LNrD1QJqZWg5C5ngFKZR48GahGP8ed73oo6jRoXjRqbXwXu153rAgDgBgHtJ7",
  "key39": "672CCJo8xNUqNRkRofkdKmFZ2rT9znnHw7Q55qCXwVnQHHnyyNMZjf7CBcfoVxCkHZgEEZrUW3uXEMLKJtQfzbFo",
  "key40": "44mvvs5fVYTJx6MQXde7qiNct14wVBkA5FHVPmcaQCssjzygs3dk5N7w7NniHpYvXfifR67FTYRuANSWpayWeRMk",
  "key41": "3eH5dCjFoaEoTiMBQrtfR1MuEDvYUFWrt4LNtoHD5vV5tu3APk3R6j6ZnPb5DyQpCMjc1jntnfzuiaXQgwzm4f9y",
  "key42": "4TouLeXXHzHvRsvWXtHg35vShStivjWwkV9GuH9tuwqxExMB2hoHQKe7npFJkGhTva6D8CBqHhY7gZ8vsD95Czx7"
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
