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
    "KEAb1cnatxeonCg7MwajBtoVZ8JbaKyRCgt7sYtaxgg328XmULjstSFq8T92QD3bL6ksoPm4bK6dhcLeZd1Wb82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QHWvwjJACauSWSs7fsSVcQ6gJQGQpfkuXrCQh2MXFg655PMzz1xwbKGByDVoRnbnscGC1hYhWiQRaoqGtrL25XW",
  "key1": "KcFrTpoVhCCnSY6PA6fyudhPdVR9yRscTYpW5M4XsPxCPyUgwvxn4Gv7sRY1vmHo2s1vUuWGtoe6c7X3DLKjTHx",
  "key2": "59CLRuTUxWZB7TMZGM8vooTn896ze7MmRWw7Zo2wmkoFBDYF1oWJvcHzRcaXLzbQJ9YM63ft4R9nbxJeAHk9EkkN",
  "key3": "3CkotGGhjVFsKK2L5R8mdcd73QUKJatEboYfoymirBYnyPZbLzHaq8hq8VFHpZ5BBm227FYYsmpYhFrD38QXEXqu",
  "key4": "3Z4GFCkSoMdyURs5qoKdzPhsyHhCLufMxA2UYKUBaGiuGpts31HGAnNTg21HhVaNBoiHEwJXzhQb9PXEFnjE2pBg",
  "key5": "5smGEmcChyyc18TVKBj23F1QxJryJmqWZgkVegi3kWM29aVvY5LKJpYaoQfM8kNtrY58TbCUgaDRBrWGQH7MQ2tX",
  "key6": "3r9uRj5Mt9cC5T7k2NY3GeEKDdpWsxH2t1HiHoA1GaJUUZN5tTWESnWMPwuuHpXrtc7o1eLwLVELoAajvwnopDWh",
  "key7": "3mCef7jqkmJUzoYndbhErKqgfGwfiDyMQEncFFqDZJmvho6pHovVVHpdeaouBaULrxtK4V38yzT9SdmLK63vGphW",
  "key8": "eAsUS9LUsg3ae4mBFF159H5qaSUN8jAyUPV4xvZVc3uAyXK6wefS3bMxoogjPkVreWuCSx9WNnJBbRh8qkpAtjr",
  "key9": "5s9yBRnHL7V23aMY9ghTV3otqRCD5JQ5b7DCtmBEhzf3re56bhPEK1hHiT2Do6NBJ9nfJdZHQDWEdmiBStNpqaGY",
  "key10": "4pVSPdTSV9iYvWHrbv82Fz46WviKGxCh8Qi1zVwxgMSTy4M6FVoCAHySMif187CQNMandvhGwmGGkwKBtQSmubD5",
  "key11": "644MjU35q7mjxtH9oyhaayqm5i8MtouGrHzBQGAgatRBd2StJGbpEKejTBiGHs7Jp7GYE1FGGs2sPomJE1Xt8yLX",
  "key12": "4uE4k1ato6mzvD57YothpnQBYrHNHwWLRdxn1Ro6mwj7Tk8RCybmJZrHYxdpS9ASSHY1Bukdhm6AtxNj3xgyij31",
  "key13": "Co4Axu4YXrBnhsMinfBvh79g42SmCNCuAkBTcVSvDAvTwhhmYkMg8qbbDadnK2gCayW1bffrAV8AKERM3SfXseC",
  "key14": "2UgPFfjVKpiXHGyVG8oCX5T5YVb6KRTMVVvo2c1y2ooHv2jwJcDZdo69duFiDJhsNiRTYbJG6KPyRSYC3zxrLUAJ",
  "key15": "5PCajeBhB89YWqSNNvVsRxAa9NWDuDnT55kVmboAW3jNxvjmj9T6h34nhaHPLMHgVYrGbAGpCyBjf6twRrEWykgX",
  "key16": "4mXd1cr89V9mKJd2NJ8a8ineLMMxPwygiCzmXiMS7qzVabG145Ah8t9KGRAzAVxHJbeXWPr16BRm2vfuWnZXP44v",
  "key17": "1oz2vsmNaNLYSoG9bcHVy8qJBAJTei1iTF7gAq3A7WPFC7t2A9ajcxHxi5SdpWdiQXdaZiwBRExMVgXb1281vi7",
  "key18": "66kQqdPD2FHcZmgF3GoDub9t1qZrZMmRyosQ89pMkzE8Zn7Yp3QXkPsWoFiurcFi1QbpLCKVNK3bQhJp2UsF4kge",
  "key19": "2XpC6g6NeodDe9rrCLC1sM6QmbB6ogFKzzZ5E3QynECB98V5AMEgoxbmHDpBVAzPXW8CmwVKenZhoDdk2QEiN8tT",
  "key20": "vLrk5tNYKDoDwEn7xjfzEPxsC1nkMTjtxMBU54UJGP5w9JuZQjKt8cYFHmg1V6LTgmaSfUhdoDAJE5ew4oCsLEs",
  "key21": "gqwchFAJHu5zXCUT6CLnRt18ZgEXDirNzZ4Xya9D3jbz1VagsPBXxLLAP3mnd72qv3PYZvyu5piEXNJFkmjgNsR",
  "key22": "5SPn3enwpvfmmf57nJhd3Pbe9uKzFugS6R4jjwpncnWUFYTcawWnA5GxH2YrQovet6zMPyL7ajzY3CwrCzXdpznS",
  "key23": "2TwzNtjnA6hZicJd6EaLQvW5YoMzFNQBEeuDwb2q2aabfoawKJMun2tjQ8fzVARRfV9ERpu7PPAAcCyVEkfKB8P8",
  "key24": "4mxPfex5wZ5kAMdCZaMEk6STGjAbHKgM394JD3LHME5f5ppb45k7SNZT6MBN1Um2XojrYqgLPmwAp3tGdgvrDgs7",
  "key25": "3xmYLN7QtQ51RUpRMGJE4NVHeBt7gDhsmWJZYodyerVNXXqvEkgYBPSHyxqrhJCxJCB2DCiEnStSkDepR5rc3QRY",
  "key26": "2sUXjki7spWxtRQnujoWYz9FiFhJdkEdyJ3m1PX6SjNE3NGJtJWDVkxwcDByCyjjjzXqxYe5qoorn46JHHxuyZtb",
  "key27": "u4P7jhEAc4LwmrZoYSH1qjfmmriQj2RpooEjVG6b6iprgygsNiXYDPFNQwFwCuz2TGibM3AxgwGPYWZFPdzK15T",
  "key28": "2hbZQYRt6Z6hn81ZWHtaUv629vmX6e4VVEM1RksJRKAEV8YSfezExUMuefbtFGHW4BvAdkduGGbv5UVbTmxsh6m5",
  "key29": "5SzsXC78BLAMiL4BfWLwzqdheRrk2Hu98LsSvCH2KqYnQvjWHuhXP3K4YLYdX6ZLgRKuaLJ3vyMdu8y19TEvMqAZ",
  "key30": "3DyNKuaQtc3cfEY3QZC7YFc9Kd1cgowUQJzLPgJNpqLUcMY1AHGRnTZVeNW9YZsFZDLacLkKFD1t1gXU8MA8MLNZ",
  "key31": "2y2gk4prGYWH1Kfnt6ba4vWi12LcS96HZaz6zcLuZeP6KSjYz3rTVVpMdVi89Fdezas7kEsoc26qzhyL2s1KiKuX",
  "key32": "35rYaquQFsDgYFb3U2EX9xk6MBaQjKwizppUb7PgsVerZ8X8pAXT4CfBiTXUU55TAPRXmnZ8VUqGVBrqmaRQfQmv",
  "key33": "3sERokJeSpFQoJw337LbkUQRnD1wpP4m9AYF6ZRSiGnvziLP8pKK4KG3YEc9Y37YcJRCpmzx7aJ4MYENTwN7ya6F",
  "key34": "3q9hF3vzQ5iyB8FMR52thDNxrrKovXSB9rNTybUWVnReahNt8nhfYGhyzw7SEPQuiYpKBGxMrBWBRqskpPGRtxEe"
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
