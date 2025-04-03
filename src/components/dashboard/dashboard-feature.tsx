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
    "3LdYHJT97uVZVFoaNbDn3HVJqqDRVKvDNzbkKKntJCHqRgks8SJCTra2UZdBNJ8iByMpXWihxBXgps5ndhwibhom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nm4aDaFEZABjzkVFuqMGyFDRz96d4omEpdwkLkzyLjd5q48rhovEDoE5KpGvoDK2a5D47cQUipHLaCb36SxwhNS",
  "key1": "45WyYjf4JqwLTcAVjbaRvyP4RacsocA7DcAApKVKkCwxyt89YpyaNBiFRGJK1DtLMDqeV5Csf1hyhr1cBUYxjvoV",
  "key2": "5hawRCwx8fsNaY742GqKLH4cxucNEtN7q7vod9Nk6kbWx2zCfoeBKMEV4onyxvAwM1cFuvvtf1hvVbPfoL2LKLM6",
  "key3": "2CFSxWQBWjkTx7xujtvYTCEYsUDsMdG6gQw7SYJSxYh8J2p6HLmojWNTVB1rQ5QsBnaXtdDzCGFYqUwr5vQPTUMN",
  "key4": "5dRbCkZ7ST7n8fuEPzAhqXN1NKdMpmfvbb77jCP97hEA4LoK8qASK9cbtZznUPa5a4AYaVL2USRR66Ji882Mr4wZ",
  "key5": "2muvNdJvVUdJxh9SiiGcFfPQZWh5ujZkJfSmQTtqa4T8wdK3HMWki7y3sX8i2eTYQfgUMo9EHeFt5KtcTpeQNcNf",
  "key6": "2Jj4c2qHBFaB4vr4Ad5dPobw1Gurxxwfu3WuQWiXV8Y6hL9ibseeZDGvAwwMuBNa8bUv9twXzMSvKCA8ovoiTM8a",
  "key7": "546UVZfES9quT5UirrN1jRFVpsVMF1wP2tDoKTpxVZUdhPLuXeqqNz3vjQMzZKNbdJRN8BBPUdzZMi3w7CbHuXcs",
  "key8": "4HGkEZWKtahvPPfSRgVjQBE6Z8hMDmSz9jHnm7STDMHcAwer4pkYgRy5iv23vT9StzWB4AyvSBQdMGagQk2etDTw",
  "key9": "4zuuizE9TDwjhtGGvGuFD1ogNv9c4rSvt6Z8VCamcfqdaGb5S5yXR5kgsHwc1rjQNyrhpsPeUNHxL9nyiUGXg4zY",
  "key10": "3YqXCBNMs4zS7Bizv8dpEvFAibb9KYr3W8go4u3djRsDQ295Y7oDGp677Cea9M8pDZcNdvyAnS42xeVUPtDHyYn8",
  "key11": "4T5pJtgtmwwRhN3gRNn78Kdpdzcso3YvdBcgUSKnkEvVURmgCswrbV4SiW7qmCYrvtCJWbLv3HbEH7BDqtSWjJQg",
  "key12": "2fGp8or2JWaP85eE5quFM2APja2f3Ae6VvDeemtQ4nwkpCA6jEV3EgPH1fUn3Zp8T1v2gXuNctCJ6BSV84inEocB",
  "key13": "4cpp3D7f5fRTy8jRxXSzbMHwuyQRfDQRbwkhQYxTrHf7N2FptQNErj5qobq6ctg81FCDLGHpqTf1bSqYQvXrtZNM",
  "key14": "4DcXLvuyQVrKRF9Pzdubzxtm9ZDGdueBexVbPtT1C8bXkEUpnM84sR3mquzLL4pnkcoydHHygH44zwY7ZA6FxC9J",
  "key15": "3N2mLnrVPsfdU3aqxfCrB9Sh5Z2EHgJhPTEq18jQJp4LKRusFpXVCmt1bEpWt4gmPe5isu659oiB74rL7T2UHJEK",
  "key16": "3hrHC7QFk4mgiR4RTqVrnyKdfbKaRAWDaJjekiwU116UNWSBGapQb59EfwjpUjcWBrNMeMrpXPf9Fw93MXNZqGmY",
  "key17": "GeM9sT7AZ8NyGQYqX4gUtJemxTo2LgyMiuMwH5iZW9swLonzP3MYzXteQX2DUUVRJXnhB4vQE6Yqq8B3GVtza6m",
  "key18": "2sE8mKogY6KgpqbQAnAaeuS5ENxcTsiJXuGyh6ZRkcanzxkqB7r1eajzEC8jEkSeEzwit68CZK3bWprpkdiyv8ZG",
  "key19": "XXbUACehvAsa4iC8s93qPapHCqgxwzut8JHxW31w5DJCf7nbSVZy72HPQ1kXYbS6Ji7zHKL53hBK9vmGddSoDcA",
  "key20": "3kH6sf1y9CU7gRfhd4ziLCzckUKXZsRteYdopacHSyRnAGjmFtx31Qbe2yEb5nzfDX7wzxKfnHPJKG8ALjuZc5oA",
  "key21": "twRAPdrPm79p9Az4JzyF2zRwtKuPzvvBvUFrwn8wpumW8zyaSkmhZFAqNNhZi3o5VYPrFLPTtSuZZhxfKVXJKK9",
  "key22": "5V2JzhCPHYa9wV7Y41JEEdN44cZuyaKAf5yPfg2oRWv4cC7PMQ83vWq4cmsm6JQ5HAakQMab43fL95GGEUA7Nm1t",
  "key23": "4f5UzVMHCw4jC4cmoxNZdBB1Ur6zgSRVko1oNgq3dnHxVfXbKiWRVwz289NbbC2qWvYm2VCAuhd9ZNSSsTLvzFSS",
  "key24": "2vagPSfEA29qoEcV4sWM7i1uQhcmFGmFaUYNqz84PRbPutqXAAgFjy6vBm2j5jCGjP8mxMgn2mnyQMApE5wDLNpn"
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
