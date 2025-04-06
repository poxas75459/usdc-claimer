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
    "5KA2bDVUSRSvCYHJ94psbmZBX1kpF31bfeFZLnJXy12SLhwxEud5raXqFrE21cWbCAEMjRYkVxPqyyKhZz44aYRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZPq7ms4KYuMNnNWo4RY3sC2dAyjmiu2Hf6YxTWtotkui6wH7v176dQeqw7L9kMxh6Rwxh6pXdns9CpTmHM6caze",
  "key1": "5FT4nCPyeqxFA9VfmXARRZM23ZeXHrwTkRtZeozhfyrNiAXWoywvM9XW7c3oG6gD4q6to527QMqyKz1NjFZ3HBMz",
  "key2": "PNaTUAVb68rkUF8jsqVPo5khWNurnU5QLPuAM2H3guEGJt5t7nryWpg6a6B97go5pnV2RPY4zRMd7GdTqjhw7QU",
  "key3": "Di8v3c7P5RM7DayqcBFpT1b1aSFRC71jCwWQVqSSFgyMoSLzkd6e6Te5r2Div3m69sRHBFdnTTFnPDxjp9VUzJG",
  "key4": "4bgsroNg1mYXiwXpZ4YFUFLdXvUdGF2LZga53CtuuiBZ5AzwbioSzDEX3A2mR93Wf1VW1aJwmSXsZcxaLzjDBowd",
  "key5": "62s25DWCWPsZ6MN36htjEqRbd2DXu1GSdegfLDgqgF5dt43YK2nD7b84pfpHwzTb8JULobaNJyxPtP9647TYxKwn",
  "key6": "5Eq16rnhRKZ8hJipXpKfEd3j5ucW9JKCmuLfCNt7NAx9LLcZV3AUbGuESSFAw4diMtSFEwvtsfNcNMRpYSKXxmEv",
  "key7": "45UeBmUcn5fWSxVzVVE2KZn3SCZMAgXfoUAy75xLHLgVzJZGGQXS48i2EkFwa7z6GTtZyXoWo8kftvNeZ1d5oUk8",
  "key8": "2XaWnQapzvLUEegtQFk9fPwewZmDJMeyTiXbbd5a2hJM5JWjps2qHiFQfqAT4Jj4Kr7P8j6RQCubYvUWjYYVvGde",
  "key9": "2SFF5T1VaBxYoZ2ByKH3xSfaAUCHYFiKrtE45qJtEfVyDn6aemQ9ieQ4WtCf7bwaEJJ5cb6uFirizv7yc8bjAsB",
  "key10": "57fiSxokRezFWF4brsSckPbpY54X5P8FCwVEqif6TpEHqNKSgRJgY4XHbewijdybg3cbqnvbrHuwxB1dkwePBiHZ",
  "key11": "4zjcpjUP1MALeFqBoSurvyv3QmmQKBPVVzMjEtSTstKigqcDYpuUV7QpckcYWAgUc58ErZn6kThmP1BVvfM9no3F",
  "key12": "2Wp5mgv9ViTd5hCAni7BCj4WkNBhJ8zBiui9EfLW1FPygBfaPVKJpnAbcLkaZR2g4Vdgj92ebaL6v6ssscSPBKzq",
  "key13": "3dpjkHfBHn9wAd69tBAPfYtNDGv2fEBnf4GDmfKiJXsg1pbaiTjXudnxpcuxPFrHcRg94bT3MLPRoC9YQmf9G9vL",
  "key14": "4c5uhNkmXkRR1TDDnikGEB8T6dBdJE4GVr8dNcpLExEynP3aici8CSHcmCcGXkuJ9LPxDgWU6vhssLtXWjiRURgY",
  "key15": "3gwmoWscxxYpNs9FjLDTTV7oD7yGMTfVmBtppWmCbhdYcVLekL834HiuptqnKh1D6wxFpo8UkpP1b9GMqE9fZFMg",
  "key16": "rnSHiFseDrgjfPhFMEPkEAA45yKHhcveja1nCYcnJBtgyogkj5vmJpwMG2Lm7dkXHp1e9Cu45F9R3JpGYyF6g7C",
  "key17": "4JDuikbFp55j4EB9dew4CH3XDqSVPpQN5FJzqcZuM7w7a8txU4HDAovd8CoDheiKtdkEwZdTZVtX2PbsuZ4BLPjv",
  "key18": "2f6Pdxg2cbVYmvwLEbyZFpyFukPzoSAHARGac3zTSXA2gf7htyySYrF5rs8iS3zjk646cYHvYLAFXqYJwzsSMrbL",
  "key19": "3j7vXAdXeynyziv8MimrEbZJPZDkJVsji334FZKwXb52EG18U1SZmrdeR3kvxfHoMZBe4QHuYQEEMr8dgSBus54E",
  "key20": "4wMafboryKPK4ijxpTvGi5kiyyLrnEnmWhM4Ee16n4br4sLMo9TaDnWJMXb76ZrKtb1giHJcnRogEGkY7NPjxXUB",
  "key21": "ssEvjEUW8AXZJk1fERurHDPHnrvLE9xkMRLBG8NTsq1ACrbuk5n4K1cUMWyRBZ4C1E1aWY6Vy5Ftyf6mesit8WE",
  "key22": "2uxG5NVzCzG1FYMT1BBotyJbYJAFPjkJGf9jg76WxNG4U8MZciXXHJQBdkceADQoXozJ76EgnXAv7nC8fFHJRYRa",
  "key23": "5SFGQ81SY66JEZUHnmJC8xN9fs2nuSaBybwsrH9TEbBcBvvMjnfmv1VyWNSexFt5Z9rhLaTX856D2y1KYLK6kLC7",
  "key24": "Yf1Jdnuoq47kBt6R51Nt75UNrq3SJfHAkHPRJGi6Z43oqyz3CLchohdaWb8GaVfxGDruR2fpNtrFRwYMWcmwgJA",
  "key25": "3UUEbXpcc1jxkYCn6dkKDx42dMKUQVbS8f4hxCxkv7FYUuQN9qZynfGzt7FYjydt8irxXnYSUPNdT1aHuCYYgH4n",
  "key26": "39UEeqSZ67oupkYoBw9E8M5gJgJxeRvRYLq9sdiGrj8NHFueTkQSCirzyW2LuqhVYZxDex8yzwsRQWMkg1i6Pn1o"
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
