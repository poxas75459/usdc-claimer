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
    "3sYXqGVSpwbCov77Uqsc5UExctECV2m4S6qQu4c196nmYo7u4xgVMcS6qWXow4C5JRMUQjUC7BQHtY2kmpEpxTH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CRJ8ZU88myyT8rXWEKopyR2xTaDUcAoZFpTWBYfpFD83QYasMKkr1VtTD6rUDxpDPohobu1JGhQm1yogDHW2RGt",
  "key1": "296A6AqRX4whoZWyWZQEKD1p8busZEs1HuZNdmJAMDqHWyuZNZjSZa6R1shfTh4NfZ83X22qNAtMgXFk2UGJGy6A",
  "key2": "2ecTX5ufejKcNv7EWGABTKJqpmVLjvM9LRVzPmtF1VgFc2udj4aJq9yzK71YV1TQjmTjNQ3EeeuCE2x7FFRmkUnq",
  "key3": "5zZDw2DTfvZMR9YsFBgJ1TwNKWXnDxdpmYPQNGTaVd7nt6fqdKVnvydgCfVHGacs1mYWLD3thkovXfEggHTCk8fN",
  "key4": "51fNAwk6h79tAAjCJr566Y3KzP8J2gKH7Ze9QT9eWsRcNmRbmDJoKSfuM9oxwDvUGS73XpDyGLMVNp6B9KZwN7mr",
  "key5": "5sZrzTnr73ab6ALoHfem241NBUt3h9vQN7YAsa939graWXF5VQQAvgEBr2fwDJ9NHWNpCCH6h2tB5WDoGmrynjxt",
  "key6": "5A2LfJSTXYMh73btMGYSjM5235MXttEm81i2W7iV2zp92h1hv84fsDKEjUzQFmnigBfaWUYpir4yR26Ai9V2Wsa",
  "key7": "4RUWbUt7WeT1VudnxN2DLK9cdvbUzX8CGmNMdnDg8pDUDD7s27m4uSj2v3nqfVe5Vpj885k3Hgr8SYzayweiX7wE",
  "key8": "5qyQXyP3Bp1uwiKTz6VBGX3xKdD9mrfe9DhzoSdP1NRevZjrYoJfZhyruhHJQp8Go7F4CVHGCiGMMgkxLFAj6ZpW",
  "key9": "5a568gAQ9KaHs1GoWS7dNvJRCm2sfRBHR9pS9ANco3WApZBKEz7CzP8htofJVuASyJ4irjyBTiQqBS8jkEhWFU4J",
  "key10": "5RpHewey1d4NztQxAEst8vsbHDmiNh1btpCHX3YCcU2sXUceBQqkb6NVWT4UkedQBEQKooG8ig5BHNPwmpGwvQay",
  "key11": "vuWia8ENtiZneP1E32oJNvhC87C27HJa5REdPXuQWEL4VnmZRzfZQ9JaLnJsA1EsPjQjnivJM95znT3qAA7LfTU",
  "key12": "4SUno68Hoji1oy2RZAqPAeaYzRNv1B63QsmpERL759XK5aRRe6qe9EwhXXfUxu36jyLbFAecvPdZJGLDyvbh96dh",
  "key13": "2UkQrF64dJNJEPoUoUHeNjdsArhWFVzUNTzaqrhmuqXbbTmHRtAeu8Cto5rYKGVagUh1jnEiLnM2xGWQoPEMwTDb",
  "key14": "4bgqjyBnBd6bopg8Tmd3bcY7Nh1xtHLnZiBKHyGFAurjmbvFbrLs7Eez7Q7DT8nH33zTMtX3DMFTvW57DkA5PWYZ",
  "key15": "2ghcDU2AZrh5N9seeiW7uiKwkRV2WqJ1rhWmUmutVb6d5Yrc9hgFtN8vZp4hthDZ85EiBa3fr66tHDZh61KwQ9es",
  "key16": "bEvM6Tv9GFLT3Uinmw3RLJxtkHWtizFBAnhhQHVpJg93SjhvA6Gd4RfuBhvMuLdBYfb5gii8kJ17o7sJzJmhVjT",
  "key17": "4sikUZQoTcBBYswcRcioXosfBQ2xPpnQoZiNgR8HzNHN6BNi3WtfK4NuoiP7dxAZcRUVn4B83TByXqLFqUJyXWFX",
  "key18": "5GdpQbqNRaiDfHSzTc2d5jDvAJnYq39JErAHELoFk5rqRqgQvTLGDdLmP8ro9cyAABmxDkhgpKu9aoFEkGacq3yP",
  "key19": "3zegttCirrcUL15DivU8rTsWopJbdJAvp1zJVyhYpTFiuhhV5a9XGT9bFYXZNmTtidboogGVbC7KEJmYzz8NcWr5",
  "key20": "4iqAkxMdpKkn669bMjxELnsQcoNkNcKgi7eeWdTSQ8Ecik7e7QAhzSUHLiVWtWuBkHpcCKezjfar682WW41J4AkB",
  "key21": "4THtaNBDN7PUNzCMc7wX2TdDjLe4AGdMzuWfvwRq26p5FhDqqf2TVNYPRk4S5X9GM6Jehgij1WoVuwHUVLKfobt4",
  "key22": "4Na2saJJAcBQ17KK489GeuhwA8GwudosmRMQHcjw1PKozkmPjW3ubfbmifrPwjhpsrabZPSViR4skm7As6MLFKE2",
  "key23": "tfT239Uko4WvPLKC7K4LL7TyskhMqPeNgs7ayHwyzZhCFVWqKn3dChiA8HPmcnEnktBYT9UKyNqNRdeK9sHYByq",
  "key24": "364CPZRHkh4wLFVZd6DXY6q4tSFd8nDpy64tBKQYzcfRUStwAtkdEHXdZjsfXrBf4yXmHQauNGcCiW6L6TPVBD31",
  "key25": "4J41k2QL4VSjfA35BtcJR82AHGHz1dmxbayCLy9miN79rRqrk9xVGtmwEcnjPksGkYRu93eogvZn3pv8n3XbLyig",
  "key26": "4Wt42zEfk2Aoq8ZVyWFTqNBHZRJ6KQqf48wiMXgjGX1vSBuFxqBc1w8iSS8bgyroJDp9WuMkT4WuDSZBud1NMBCc",
  "key27": "4wxmh2zzq8wvXJx4DDKtMEBafupY7cbfmPktBK9kC1ghNV8vZ9tzcQcpbUDqzTX8FDCPes9Ud7pZLxHToLUyUCMp",
  "key28": "5KDNNmYSHnipuu8DEPrvviobboxD5DKdS2mJZ2dZDigfqkcK2XHsTpqdzntuumjVRnhtHVu1s9f19UcTfEWPSQd9",
  "key29": "5SQbfLH27X1UWLgB4ytCTtXif5YsYYVHxrPk2mjy5JmxL341KTwJ2VfztXPmopMX59FSGTvhEkH3CDchrk1yWiux",
  "key30": "4o6AkLubbqL1MWmnrm3j16YP4ip9MQ61sBpPccCCGkyTXBS3WQpNPrS7ZvLtPiBjMCcAYppaT7TdwvS4c34UfvKm",
  "key31": "8dR4ge3C2UGiTxb6wwtPghxnN34Ezr6r1aBQWqna7fm4PZtBbScQniKHcH3JY2ChndA2DR73VfLdgEpmV4G7nTg",
  "key32": "3PZW3SxjwsdVXFyNiXB9j2A2VvkPoVYtiwhVuCgruhci5jmXDn9KH6RHbspAEdkBShL3JtKnwhf63QSdiVWgoRRB",
  "key33": "5v246Wn3kbVEypCfjMyhGaJ5d96uTjFQfw7vAikpry6pK9PMHRdSja1u7Cknu8ZV8fXJJDSPspWfDYqqy6NXVfr1"
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
