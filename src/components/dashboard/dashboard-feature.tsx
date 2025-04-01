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
    "4764cErbQexHwqw5ZT78Wob8KK2q22JxH6gEUnGUUpH2cqr19Chf8QbceHmLyGhjFNc4LT6qDpwbt76vQntr7R7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CdVcUn2URXe1fYcq7MGBgb5hNMcEmt4AxL6ymwkyS2PgsUt5qZLLK3M6cTEPRMft4NuTPE1aVcRN1daFD2qdjEa",
  "key1": "5aTHj4rHwSX3e9mdnzyJBUZTnCYTo66YvDQhJg8uhFGVpBmYpKfnasGPiw5BZCiF1MwGVujENy85HqgwUY51o7jV",
  "key2": "47SnJuF3LLegnhmkF1BLtJQpgTZU5kUYsTgmyxwtDv85UfW4D6J4cXkEEE4nUHdsV8UFknMpEPa3vUeXxfMLriAw",
  "key3": "5wRLGFBL3tZWs3xuz4NiV2oUohxCCpKZTcQe223H97vjcLWdAbXC4f6A8hxDMezcdcHACcLt9w96VEgaPhJtSqxM",
  "key4": "3jgHSsFC4ey2fC42rU97rWmVSFyRkLEcfbyCa1fmbfazqD822SjZczJNpDzjCgpLq4S2BvLu6yjb5e1UFHmbdX8",
  "key5": "2fqcj6Edx9j7gqJvAGmACmdRKupFWkENp44391V8CaHjAvPLBwtFMJMBigeEq4ET183HuRceZGLABeZKC1h8NmbK",
  "key6": "3V9a2t9h9icKhrXVfQan29kBcM8vvhoCGCHWUn8pWfV7KvGuceVEeVcGHiF2WD72CKt1vRGnwm2eXqEVBqiNH4A9",
  "key7": "YUxDqfWj5qiBR6B5p1tNLigsNxzVhuEjfsvLerJfpkbXeusNRp5A8shTn7wG49ueqH6xgYzHafjVRCR2cjrpCvk",
  "key8": "2qH1VKLrnDXF1Vkm4K87coNESTjacYHCC8UDsSNtmSjbrgEN9pHScD3KiXV8eHsg8NPV5WRWXyUtiUWKENgnWRu3",
  "key9": "3iP7ZJmYhyEBuRUmrv8YXzYFKVUSzDkpU1HZFoB7DsFirt9S3JYUcPxm9cG8ue6jwq3HmusucvR4TSEr1KtCz5KC",
  "key10": "3qToPNQrt9kBNnnR6vGaLf3nCYrSqEjpLSxuGMPHWwu47jCaDQDEeuoFPZWpHWE5kEiqAm8kcoQyEBDdZ2b9Q9Mr",
  "key11": "5SWQJSfMBXYQ6SEk2zaz7ai62X1H19sbPpnw1mGSmqFrxVCZyRx9bmjcLbr8rBywR2GS77nMGdMGXWezsahDwjLF",
  "key12": "58C1B3ZatZR3fZLt1wtdhoea2jgTEzSRsz7etmisVSiFg9gVpRGCLRb8GWK6Y4hj99oBCjykcxqtbqca9KLcybcb",
  "key13": "3eTtjYaAoi1dF1k84s4tUja4Feqs23QpSqDfQdhgTWF11C37AhtDjAuSJZg1eY7cCvNrdvcKBkJyjUAGRUJzrMY1",
  "key14": "2LWLXi1fkFtBAdBPs6G7WCApCgtH74iRjdYfti9YGNqoNxPy44skoWZo2JgMKhcWKpx9WkEdxmUg1vnpjjyEvoxh",
  "key15": "43poG5BbXnvTqMiddWq1bWSsr6CboCJxmrsY91ghed9uaPKRAQNokhQBgaGHGwRDL7TKBEWQZm4Qb4DSNNtT8SoP",
  "key16": "kJJj2YvhaAnNmyfDCtMf59BE2rtfLVfZHRbCjXDuHMGit6pwd7dPGFch2MmKWiNntx5NdRpRvR55PmQG5gmQNcV",
  "key17": "5G5VtnvQwYRvuPZX8jKoG2DH8h7GTGKyAvJKELhUEUgXqCQ6PVXyo4YELuszhi8jH5MQXosqhWzzE36NFbSudxdV",
  "key18": "45E43UerKhEbNhN6yKDMXkf1TJAXsQRFg7SUCgyrBAFRuaPR24y2etcS6N1u35hRm672fyQZq4QB451D4PJkvSex",
  "key19": "igQo7vXTATchtpVv2M5hmgNVzfr2AM5QSaLbofVE4q8NAmvGpBQii5qrG3t5m78b4tpcmpkCqnYRjSB2ez2nWZt",
  "key20": "5GLtEZ7D6C5BByAcZTMFa89QjDpBGGqrHAUwsciuvjCsQp4ePsN6crLiCEMPvdUKbY7PazwBa5wy8tgsiuXeaLcZ",
  "key21": "3RiH8oQ8XeWxU64x8iNdzrP1iLHkZZriB7gowgVZSNzTP72ALZgTQRyhUkMSXA26dS8EL6La5xLkDBes4sAkDkw",
  "key22": "5Ls35pZ3Y5D8bByyNQvVRZLgMABMRHvwK33jUypkTzTSLcX7bsxbvjQhoj5mAyybYQRtXCsSKKgconEQ5MbapiVo",
  "key23": "3nZ1ZgBCFVRey3FMX9TADhSXnkCZryXDKD4GnZCanFXW5DM8EbnHLzy9pSQfxR24HJbtUmee59nTVyWGHww3jzeu",
  "key24": "RvQTQf86koaTU3iZFas8AnWPbUbMEfykREuQpvH53ne2DFQf7yRgabzbxipSqXVgZ46CfHP8rCyCEf2ynxtiqf3",
  "key25": "ywBSSc5hCWzCFa7jykRTYCUKH1DV6BRnP7eJT8C4UC3mdTFZAX5aNJn26M9zYiuY8Cp8WtvHdhbesv5BL976MZf",
  "key26": "2zzhu4seEX79tz1BFm3tmgWJHdJz7QgRASCiUmugKhYdERgtZTNHKWqH2KnwiMdgJbT4ZMAfB7eJhgu6zqANYTFq",
  "key27": "3BvHoRcMLZJmxQ76gC7kBSDdytXXXTEtFJuEK1KxJitbi8viUu2uSjKmZkD9ACjRjCMa4aqpvmhoHrinyt5gc2Pr",
  "key28": "2c5Sp7nekQgodQH7MhSSYEpuWZREhwtMQNJc4ues631Fkdd3V51jLa2u5PqY8YvVpXyJe2V5g7zeSP7SNcfW48js",
  "key29": "3xDcVKFbozUZFGeG2D3NRczLejJexqG8BCtj32uJgmBUL2jPmQCZ4dBgG8kCr1iGrHDLvaj2vF6HfcQrFiEXStQq",
  "key30": "cEBhewkrE4bZ9maGdx63rhrrXk2Qz4Ffpg6jT3xKi2SSptShwpvUTDD1nfj4Hg8NKKt6RB5NiHu684UgLoxAJ4S",
  "key31": "2DQ199ySK16U5QMCcgBu8NUUGovFAxg3T89drfmAeiWXZr4fJZsMhPgAtyvgUTNAyRzVYLeaU8f4L1Q1WxjgC4Bh",
  "key32": "5iX5Bvtyn1uzWXgDEpbutSPs3D1WAoTWL1AKyYmKhyBJnkUFye5dpWY4jYW741psCy5kGriREu92exZXbdRknq3Z",
  "key33": "4PM6ts4aPD58GU6399AhpKaSmJ38YggWChmwXgahSoexCZruKD7nnTPe6HtiZawnbjVLymswt8Q8fsHLk3RB8oJo"
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
