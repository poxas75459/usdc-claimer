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
    "26UZfbc1Xdq2jq9SN66GJz6iXzrmZdsiMFckpveQjiMBs6o79DkFxbwt21965aXc9BP9BrViDPqkoZqwWsvB8Ze3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47pct3AErUyT2vxvHvRr1vjPZtQG3nycSBcL5EPpkLEHxvRAm9X6r86im9JdLqkmJiYzVfHqt1LwRuYbMukKHyMC",
  "key1": "5DB8mQPPDum7r6cL9L42RmCfzvk6K6bWuw21wekJR8UuvwHFNwgzEyuG3HJVTXcQ7Vr1PfCz2A9jvACiJxfcUCii",
  "key2": "983muMDjWvqpVvCa7upLuM5MiPjWfDM9PB412qwxniAV3Vo5tnai6WXnPKcCNH8nQ99vfRAE9fSLvyWEAumfxxj",
  "key3": "4D5KdWDosigupq2Tccg8bTfiykfEyvKvU5z1VjLxiezTDH6eXmSZPzVjwjYnVYAuMQH3fYP1ftBhQ2AYTGzuQPZn",
  "key4": "4ePvLvnSjPoUoExD3MSB5NLtgozHkiGdajhfKv3Wa6wr5GLbhirp2Wu2ayJJQCd2ob2WoabEqQQ9HdbDhxRd2W2W",
  "key5": "hBPbwyY7uA3uSTfPRPQ7zKyMFP3zXQoD1uvP1NqDiuPHYMtWBS4jXhsmb8AvuTWnmXs8w7TnciGZvaQDD1NAizv",
  "key6": "4G2wyvp1kBouJVsXMGwDapwsXeR3pbZPKgA9jEMUwmspQGfgDWv9Z4sjksaekpGEmv2t4Qqxv3zXWrr8qnresMig",
  "key7": "59B6ecemvZ19SgQc8Gwwp6vv9xZ1JyPSjpeCnH4vU3CeF481MqVb5h5yyBM3zFXGdyfw19jnEkNxfnk3dTX7NX9i",
  "key8": "MgZT6s6qHtESDb8aj57i6yt38nUgZTmx3o8q6GzpnYg9PwXyq2aEArzsio65e1CMxiJViJUmgnmGXBDHQjaEk7X",
  "key9": "3uopA947PL3NKWNj8zN3bHHnQqM5KEQAibQpt1TyuaGxrSkcnNFqZVaABLS56e8ekumhpaeetZ1WoLLtNeK6mo1a",
  "key10": "HWzXvZcFtbazMmc6Vzi7gH7Dd39HWyxhq1Ad6GxqLMKicWfmPVLiyMKAgF1QDW9sX1TEzob2qRCuswp9eYbH77n",
  "key11": "5gaPacfCTzYQ4DEXyxKXHm4jUhG57d9kGBu3kXLczb5vLyqL2aA6raMnj3JQMFtJ2mnELUh1SaffrB21Hkb9G2p6",
  "key12": "SdYZhxm6ArXCLYttFdQeUd6MsK1b8xFV4tHVkkSCKw92aHZ7LWheRAHSUqLoiER6hC28PGSpZZeV429WGNSfLmT",
  "key13": "4hWeWRV8tnXBLCLGEN5eYavPzkNZNBZwtXo3xKWbijXAdEU4DoZhCR3NnUXgnAQNpdrxkxJaNRaNuZA6rriujQ1M",
  "key14": "5ZLfdyEe1GGCyMdPpYn3bBNm2crG2sBFsjW3rUhM6XF6eTRsy1UTrfr26a5wLVDfxCxKZemmKm7UXiSv7HjanYPQ",
  "key15": "39TCgSfP2UM8Xnn5bqLJY2BDupYeAYciJwD3QQ4AcXtVYTHGbHcx7MgUY1gEXgqeTcaThYCn6dTvYt6DSwHXGw3K",
  "key16": "3yEeLRwHhn9ayuSkL4GsAvEwzXCS5TVK5r29jiMywQDYKmVRbP17C4bm9jrdQyAieiKzTf3YA124geeT8Dex3kpq",
  "key17": "5TwuvLkXA79wMp9MziYGiXhu5WDDK2YXtgE3Qzkp2g9UqaofZhpnkqFjGVzqPFMrXHZkT7cHNHTGAny4sqZ8w2E1",
  "key18": "2GMrrkZcyXE2PH6nuAtrnmuzw5c3VEpzNfKAQWFbwfg5D2pimTvmb2BQznop91ZHXoqNEv5bFYhNHLUpiMbEnaRh",
  "key19": "3e7voEXV6ewzmYAD748VVRbg3p6KmDJ3m8tBLdbMh9xSUtdmizu5gW4ZwxfiEVH7BL6cGtMLz1KhA8WuCdhAhrgs",
  "key20": "3ZxGZdsuN2BtfSk79KhMKSmu13ng78Re72uhZ7aiAE67pVqCCSC3ZXFreHjxiduwGStYUk8vJJ1hmK6VuZ5oHiDu",
  "key21": "61Ek64avwzmT6mHj2PZ7gYoH2bKzUvW1YpAWttdHYNeqM4GWBnMeNdJzXueJgHVjcBKFVtMRqZuXDfJUirmDmJVU",
  "key22": "46cKtwqWC39b1GFcmgXQkyGfpDTzJgZBC6oSKy2B3imEWtCBXVpRmXF8gMWREfXAgEhgX61RfNdtqkTGTTi5nRKY",
  "key23": "35wkh82gUNC9SRPXBa6rAYACwWfLBHzQNbrdQiE52n46Kh79X4WvrcguMMGbuFZD6rZiQNuHQFCeyocKuDWQzSJ3",
  "key24": "wfL357tNJ54B8kAonkv9KPSnwEJ1dNxT7kDPtMqRnvKMW8Dmz47niE5HsBwDoD3F9ArM6zGkQwpuBCpMqVcEt8G",
  "key25": "2hzML48vbJGN7TiwvkBnpC4eU7PaZ8aZ4pE4G3C4vbk713tFiNYLLdokbQspgBCRGT1fDWC7Ve9R122h4Huzxtai",
  "key26": "yDUYUgjoJvbkqu9aJjbVL35rczqdqKH8FMny16Q4zVhvMGXv34LbpeYcUuV56YzbrAH6gZEb7tCeb8vPnFMKr9D",
  "key27": "mEMSUBuUfTLHrTcobL82Lmj3cdn1ie43YbtAyUDJRSuvpxcKgMED61JwUrK4wYzQQyPK7RGXh71BEgyDkx8YVMw",
  "key28": "jz7JX2omCkFwMKSHBTGM9hPZATviccrGu9ebAUSVmRnCvY74qG29wpRbemByyEvirFwAJQLAwY9SwEDauMEKft9",
  "key29": "4ZfvS7J6NgsvRYZMeJbAthL6gp3Buwwawb1kWmi5iz5E6bog5FX9Mg5mkyeqYM79v2R8obP59rgCB66Bci7v7ZCw"
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
