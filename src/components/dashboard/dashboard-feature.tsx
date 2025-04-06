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
    "FnQXhVZA1AsazExALQFEdFr1oy8WhiRnYPHAdK7ukZn8uWdYrf8ysRivSkDPkzHDFfKSyPTLkra8DpetE19fBKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xvqj39YPE68eZyTWdtvbNc5t1SWqFQizCQsEwXG2DGE4mWdYroquXFvcY8LiGr2ZjmVdEFjHjxV6sboJsasN56t",
  "key1": "3xbCS1EQFrBNXWqLVFdzaejpVYPLnfFURQq5ZmGb2uHVsdkFdD8b6wG2GC1EwigXDhS5ikXUQjHZxCvR2JTYS5oM",
  "key2": "5XrHtvwdmhPgwR6M5k6BWc25eFW6hbXM58dez67zPDBD4mR5tSfUTCBfKLWs7fGdCAQmxCznoZD7BCgXxU3LcD1W",
  "key3": "5HTyRAauGBa6Wf1U2aFLdgwfCTFEuLso7SKU7E4X1fLHuckvGvSkZF5mgGvpEXzpwDE6ZwzPTbrFWRiGqHuo5yvH",
  "key4": "5zvnqDEQzT6f7kAP6qN8U4D8AJS8sM3dj9uNMtUSBhxxMnt3Q3McrGD8GdgNebPg58uajoPXcwGXmhv3bK2SzLkL",
  "key5": "GyrXKd9zo8EftXZ9aidYf4rxqHYUGkd3mGLWaTxU2nZroZbokbNSUFLLuUq3J7tZwX74tmc1AAxHnPrdsb3MwUG",
  "key6": "5pkYdwXAmvyup5DVEtzfmEBYMvBoYjgjbQyA3BgqGi7s9Koo1vBqEen3sNWwAy5GvfSmo6RtqBkwGhr8DmfLJ7sP",
  "key7": "2xZxEnK38cyGf3CRzm9nPmLtY4iNzycC99Y7yLABDN9rHwemxK4eDKR9gn6GZLMTitmpARgGce8QjsgowFuQY6s4",
  "key8": "53fZ8KAtkKKtvE6gRNHQbFJt2kpKn5ydMzcDT8SsfKrhH4r49VRC9W3k6tnKu2pJPPBgsLgdN77ysx1fVZxCYmSx",
  "key9": "45SqtD75z1oa9TBSiLaq338SDaoAYiHfRrb1H61NVPgNRaynUKyGSyUkgnU7i4UR3o1qBWLVmwMEuUrSKPqxqqr6",
  "key10": "3utCGNNUHLwJFDXPmSrteuxH14f7M2Sxt9ophqr1q3b2DKd2mTAGDgzPM1hd4mzMLkQkCxY6AAtiVPQLEQkTxkfG",
  "key11": "3y1yFP2MJ4P7NTMuoD4yNjZU1KGBLSWsi5Dqs3x9qUyVKvVJqotC4udEKH9LEo1GubfR33nM2WCWWZGegvaxPDED",
  "key12": "24YNN4oN4bTQhMCjg1NcZ9tsHmwvGmaRLwPPLwFfR4X3Qh4khSDZhGjcAsNFiM94RqzRBRx3UqZTB64WAArePgG6",
  "key13": "4PHMPQLo2x2DDzd3XKC46ff7jNX56c9UYsuwu81dnWpwrhJPizwcdT82Tz6aUbATggP7ftdc4ink3DmFbhoF2Anc",
  "key14": "2SoDMNPhDK5BHNGbcnoTzC5tcVUVVAA25BxCgSR8AR528wbee1cTpWxJYcckLHVHUMHCSkocGVo2vp5YkZBnwxJ2",
  "key15": "4b4AoNHW9KiqScVWn1b8C9nWA5WUwKi1gSU2vS6GZ8hCz8PZ9eNG3UMbCCMukANNVrJDQc65JNmJfSQdJBtSCd2W",
  "key16": "414DQZG7EPMLchMSMhFuEMa7dRKVnj9AdKNcCKruru7smi9B3mwYCfU9REeoCrnpExR7AbcUFvm4277oy1FCwqzH",
  "key17": "3JVXLxgSvUnsHbSXxtt2adnxV6FmSFHYTA3H7df4L68SKCpKoKH4QYwzv9RQBhzMiWP1QyigtPjG84VTBh5dpk9P",
  "key18": "QcYEBMXnaNhNeGdvY1TdN2fPd2XmJTjKSqZsGVscCazpS4XdqvP5GZmRr1pvG3m26Hpumf4RFaLvDTMD34tcWyf",
  "key19": "5NF78F7RFFAZ7FQVF3ecj3aYwB85jNQo16rDN2RpEbgx8faPGKfJRZZmgjN4yBjdbWf2U9R9LrpEiYAj3N3YZA47",
  "key20": "4ZapavfxjMSUvbckqUJhqkWqV4T5u7iwdR5aWB499r7svb4drXRCoUicRKCJP5iZ8Ma5jPVHxm5jtHPcM21b5WeS",
  "key21": "4qhAJ5RZmVT8pfcKbNrSbtpJiKpapDxaM1QowYqqNtQaLQ2dbg5fRkcdHPGFFUWsPhUt3AMeoQUoh8yoFzKV3FYC",
  "key22": "HTQVCsJmFvoZD284KGaMRX9AYZAA42w4gxP3upkmF8Ca4FKDDWB7HocpMEQgdDgfmFTuVcuV29CbfwqSTXDeuod",
  "key23": "gCirN3z8mJCenZNkJ1miK55dLgRPKW7eqD3MRESqp5tHEFiraiEB7k93S8XYSnh6fYy5oXYqq569YhsAAn19QkR",
  "key24": "WJSQ7kuMnxqm7Hw1oKEBjHqY5ymZxrDrDy1a7yB98kwmpTq9ELuvYWsWDZxMjTa69duyAA1AANqSFM9a5iRioHi",
  "key25": "53AiS3TUaMBfjLUUXMVV6FS51yKV7faaYKfAVwExnbuRs9LMuawTbDxW1A3jwjDuottCJfep47AZEqfC9eLsHLrQ",
  "key26": "4hqafELCFTEgw8mdY4wSCJu444YXizgdE5FxY8FRZzupgkwpCkxFzMHtcdnT1Nym5vxhJLf1GYTRxdPrHSbh7cUz",
  "key27": "2QQpLSudvbEaNg3t5ZSRnQkDyRv4RbJp9gPFvPhWQd9ZymHnGh5qhABqYzSZfZLM9ApaQLRU5J5Q5qCgZcB6CuFr",
  "key28": "2r9rmR5rbRgNk9sYgTvtzDyLvGGYRSvcRGffdacMgTyKt2Lq7eZTD6BKLgahDQb8zGS2euHfiMDbbc6hdY7RgSg7",
  "key29": "KULZy7BuWWLjDnPb7kfrAiPuc64sqaTTWneqLZw7dR5u6dhXmaDiZLHUqDoY3PeRKA4hX3Tpkjqk36B7FPWLMJF",
  "key30": "4RpweCfer7rZDaTqMYXTiGHZg62Tzu9LvDKuMbmgCitgSKY1ex7Xd9ynE3vP8xewzSdtnufQi4pvgCYJg2c1PaZC",
  "key31": "5DQMKcgYeVse1V865jDYK6HWsjUw8DQdZyXdzgwBj9YQdN1y52jfxW9XtWFZM56HMm4vgK3eYZjjzwGxrQibdJRN",
  "key32": "5XxnmH2doDsBzWF7hTtprA5GVLt8whjxBCVYBqVNyHYWn9hRCiDZTJCv44v8Chk745wxKkosKqK5vARef58bQLep",
  "key33": "5RCp5DQUHnv93SkRbjvjtBTAoi5njukarqdLR2ow6QSQVzxYYAKu5Zwvga3DzP3fwKoeRncj7bYohcWvhqcAG9k1",
  "key34": "2XN2QLLvMhaPp3jopogg4SwR4S9oCXxTmRAZie2E5Yi67vv6wzrWjgqavcMNA79FYdtoxxQHuvCZQRaJFpR4Jtug"
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
