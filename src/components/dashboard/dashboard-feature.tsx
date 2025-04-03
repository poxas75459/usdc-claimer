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
    "2vXaZYaf7uGeoeXYZfWvYKJXndufmh8HdLPKygkRDg1edkBpp6cUi661PwAvbjSRhnQptkwZmNPvVc7Z1yRJpJYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "446NdaMLexm1tBGdh29cpqC66vL3C6m3g8aU22nGknffgPc2ePwCDv2qonrH35iWRznngBBXrJD2Nuv4W61Zjevf",
  "key1": "3NpXiZuAtcYXw37oreJ35szEgeELTmrvDudzzEbeUjnTS7w4RYmBErgm5g6c71qvaRSVvZtbKg2WPzNf2jm7ThGn",
  "key2": "4utXCq2kFRGr89jSNE2D8Gw2wiF59nvqroib7vpEQfG83GUv7rEAYtKCHaDtznuZTyKj1BvNwx1H1UYkNJdEhUJ8",
  "key3": "2ezEeZBvSqYvMPTHKe7nxdkmBEaha92YdFXvYtMJAynFTNjAvpWKG3kzyweeAAAdh4wRre3dpGnQDEfdsELxAxJx",
  "key4": "65GRMBBXheWwjg3haoJH1PtCZDRV9DiKYDh7XxPPLqQRGFz2zWRfbsFQvce8CQckMyAqthLEHorA1ZXYbe4QYdqc",
  "key5": "57Son4KFsRtxpHPGksYgzxBXbuqUAwxF5mA41Wxepyk8hnxE6rk3X8Drhx5jayr11hVGXrm5Qgycrat9RBNUHwz",
  "key6": "TryUGZRJCdja6aNzeKC34BtZzssBXdrGJVWXZ4eP5xPmqXkj3xqo5RaGyJWoM8NbL2f2jdggcph5j2PbPsBV6Ch",
  "key7": "5ksMLwrrKYFMdftEpHBrUmBQxJG2xJYuvasSsPW19zhuSU62ANxgXs4PF8wNVBR2msQGHU1iq3hAD13N3HxxwnAt",
  "key8": "XCt6CNTevSHU3UXDNWt3ajhPXgcHagwTA38PZJKNtkvyxz8XjpPkK9VP7eraKK1wpguJvS61jXoU8W3aMcAkJRB",
  "key9": "3dLMTUJS1MTSak817h3qZjN6x7axoPreo8rWCy2GZKjdN4DyKwpKJdx7kR4JV9Gq5GAFP4h54UFbRkAfzTrEVJHs",
  "key10": "5RBhKSuYWmriSKjitGNx2mUUJXUF8AANyepo9hQQ1S2XB3aqGvVPdHRVDfTW7Jk6RabkJTU2FnGe2oWYMXg6LgPb",
  "key11": "5XLydn7zYVopfkKFScPx9yH5sHoaVRvHmptKFGmyb6LbzFLW2bfVTdCgPPe472V4zHMLcjHLbxpzHWrMsi25gQUg",
  "key12": "QXEh9b2PUaJDkSVyXzGRYXQUi3Tj2Kq6t21LgSP5mvEMJjGHW9NdpKjhc8tZXjNmib1m4Zeu6cjZ31jUvPPeewk",
  "key13": "E7Jgn19Hbi5Ai9zRMTB4XaWoC3gXhk7VSNzZoto7EN44sr6A9Fj1V9aXagzbePmtYvkzGzeuy2rc99TBxWAXb7C",
  "key14": "3FRZLSUEWeRTei9XJ74Tbanvm7pTkbvvLFfCPMY2UexNTPMVSsEJvGVBaZU32HrMCcxxZ1KPs2wAt3DipArqQemZ",
  "key15": "3BmKyLuWNoSPZr6rzJycFApWgjteyCqE9qowcf7VwYCv8w6YiHg1yckew2pNVEmen3Vrm5jrTm55dpTo6dHYBrue",
  "key16": "4BVZFXgzBaUJGi2a8owEN7GA247RaAC5mJQMZkHr8g1B15ZgDCpUweeZiYhjKjxkQEQUyAFXmp9Kmg1LmDABgB3s",
  "key17": "32Aatu9djUoRFq6MmNJHk6HpuK24ukkHUKvU6L1XhkPF3x2Je4A3VMaD3ajK61aDp2nAfgf3sSJxB1aiHF1ZMEkz",
  "key18": "ekhrjiWQHZeRibcM3FZGSfRFWbNSBgHyZp1cBDcH5xv9vbftXj2BgLYmbRKhHKfzRfFcM8xHy658QoAZT9dav2T",
  "key19": "5e5qcjWPKtEfLic77DnhbRdi6x2brrfuQhYEdYTACJewfvSh8QUdWrpDgcrKcruy3Epn4t2m8PSFX6itbX9srTAx",
  "key20": "obKijffxipsmDn36gcHLidf8ffxDhtbqKboq6bFVuAJT26JJ1pGWemWyt1Xka2kZf5DfHFbKMm5sV1WjytDauUX",
  "key21": "3YfMhV5G6jfpV98madWHV8HYTTBfMDceWoBcPmTrsame5KauW2XnbQmUtA3w7S2mZGwNgAPCVHfGi5R9Ku4Si7Qd",
  "key22": "3MCk7PyXpbEQ6mgS7RrXohdhBFvhzQtwVG24YrsCwoo5Xe2p9JNh2aGGAc7S9wB2weS3c4nGy2VgFy6rSZPC9H22",
  "key23": "5gAwoijCvMisDKAMCeJC44SoATDeSvv4Aa9qCTj6ba4yaJDTwLJDym7cijAHFNgEoL7EM2yjD6ktaEKzSfye5DMY",
  "key24": "21othvXnCGXaLmwwHn46uHNwgXjuXhnkRsE6PEPKDZWkotPDvuDrn76JYBvnpvHEqXCU4RLttNMXQeAtRpbedNFV",
  "key25": "N1FKqRUVDHKXbm8VBtWwni5yp9mLUtgFBL8xhHuBVLpSGRmkYf2Z6jqe3h7VaKj4kXof7WVxDfaUiWUBdypYMLv",
  "key26": "L3DPgMZhDihfbiw7eQHK59XZNRn38iWPRuCqDsS2MTR1FuJBwVhoCX9iwn8RvvZ3TmvVZtjXpL2dyz1N2JTznZM",
  "key27": "4Y95tcvK4tBBE7QgsQkQNYRERGPZT1yoUBsWtZTU5r5QnZ4PBLQJuFmnin15pZEBjm7ay8og7xxNiMwnG73qj1U7",
  "key28": "3VLZWUg6WWZAz699sxPwDFBrvF6N3SnhFkGpcvSFeu8EssFoXgNgmanwrL8DiPcUqaTDhaHXv44GGyLC4yFP49dB",
  "key29": "487f6oSjDbviheJesTp98xYHEW7ngotb1QtmNYkF67DHxnBpd4nAMtcUGYcDMrHJ8dj42Vnesyh9RUrMgwRmzkuC",
  "key30": "3zEZqYCAAqWm9EuatxrooeWKMGQbQiETyPUqxLKjpnirrKvyV5W715dc3sUZTr458F3G37iXJXk34Jvm64L5shgs",
  "key31": "2PSeRk3hgoEec3PtunrZcM3JES7G2AEF5z3NoSiLTiYmqwxJDaHBA2JJYRg6pzcdWFQJ59LmeXf9pcjzC8TwDsJq",
  "key32": "2HSfoEfNM2zrf8TZMs9z3P4Kg2B5Xka6fv2AGALvGtuMC2bbYEz2uqYrwmecznribgbTBvMQqfn9uEt7wb3sPDFj",
  "key33": "4bX5D7cBzU9BefLGjm3Bm3B4AEpERc4fdZsrjZmFrNzBY2Xv4t5iQ1RDvtMizJ3GgxwDvbMvPo5o2rxei1Sa7HC9"
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
