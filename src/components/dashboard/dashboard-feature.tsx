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
    "4kUTJ8iHZFJp1AKyLZ13UWQdpwWQNQZwttxNghXrfTSCxyqShmsFYXG9bsYpDeEBuobPFkShJcSS9svvw72nW7W8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M4nnwZFj8Znc2wkgAM38oUsMHRZrSHfxPjis4BWZZdEH9nea8MEhuNnHTBrJwRkFHpTTnuh3qU8oUd8krksmMUi",
  "key1": "uHmH3SPUAKh2Q7bzAuWXPZt1rtL5MeoNCgcb3RJeA6VcmrnqCvktW8v66B8Xzfcu7EJZ5UF8hSVcEzZqQcRiU3K",
  "key2": "3VsZwNKvAn66RZVpPJjh4XPwPsr96bWYNZGNdujExLJR1sabTVvRqVbFa1ZghXEHpRVzoESZhkkHnMXXywQ5zvhw",
  "key3": "3WYsT983vgjhiKprstxw32LohZeSdgY8nsCQpt5cH7Cqc8QZnLFareCrX6Mh1fkBLfPeLy8tpprSeJJ5ahcgXm8t",
  "key4": "63oDeTdYtXbL3LXCaDV8vdgL9reCEmAHcCxTRfsiz6SdybGVBza4ZVhTEHamCTcx9pYKseLqNxttBAcGdsouWBBx",
  "key5": "3EDx1MpripT82WzKxTXNvVsT3H8mKgNoDo2usG7osfekPvKcSd6RGY5Qm4npV1K5yCCorz1xJcYoyVyi6Ymw5h4Q",
  "key6": "56fXhe6ttz9ZeX2KepEhRxT55DDkekQSgu6KWAMnut65hWhvA827Kw9kVRqrF9tjTjyHrZeiUenDXgmJ9LftaPrw",
  "key7": "2FT34P2FHZpeCSjX8LRQP1FP3WdfJDWLVpXE2qPxfaEmR3oBTGoTzSHF4hhs12X5tkk711F2cuUzEsJ4MiXE1J1P",
  "key8": "LLA7LX6HHkdcJd8BxW3CEaEProUNyxLzoyr3or5UdMqfCooJRwB5fp7JpU21bRYmWSmjs4341rF9mZWod2kisKu",
  "key9": "vQKLUoHKETRF8fsdrpeRu15X5wvaLZ1hK21up91fbzbejjwf1TnRw7nqyrKDqM2ikifNGJcb2aEhAeu11PMhrUK",
  "key10": "3ZDcv6rVELyXuXPy8ZghCHiQyGRgs39LTbyNmRrZefTwqr7BCsxBSu3mCWKfz6cEJeKKXXosUxeqx9zQbMom3m99",
  "key11": "v8GJvHZM4yutCKXfkGyBFC88FnyTbgYe31bC3NBrQGJLmkS2Xggfqvr3CyupxkzFv6nMCgn9tARqYFuwxH4n8bU",
  "key12": "4hYqiuNW6YFX3EKnTDKS1JmyCpuS9nmeaGxSiSbDcFeTM2nfsR2CyQ7ERQ6cd1fNqd5tnoZQHSi1ycpxkEn3MmQb",
  "key13": "2J2bZZbANX1844HcyTWdp1p33xJ9YM8xZj7zgddNjkhaq2P7YLFtmaDeM3upDo9zJ57r1Pf7hf3bHrWUQs5gBYES",
  "key14": "5FwFkxiTGMcs5KkGmEsN8hKss4tdPwZKGTqPPVgcF1t4kgVAfdvzYNhTZZdCP2RYVpn6qq8oKnoxzvKPdP8rGvHn",
  "key15": "P4AYBtAV6ZK25ACztrCmXr2m1JCBoexWkYyS9hUddnc1kR8EtyJu4seFjW6Zp1eGAdwJRx7f64yR4NRg6sVZsKr",
  "key16": "3NpJW5duzbhrkqtF6rZncesfrEkyEv8tXn8hnRxJmic3WRYZku8wKaYwR7fCir2cNUMBFN7QjQwx97AcQEvNfKz3",
  "key17": "5wkqyNh8sofndmz5j69tCmgbZGKrUkxuPcP8vPLs5j13SQFx9kPC5LhEK63ShWyZhbXUqDcPBRBYUWbp32pg7cpv",
  "key18": "5NdkP2wUSiUhouZ8J68mMUDC5zW4yuMjweT48J8mqtCb6Dsvm8CL6zHbjhDoniPk7EfZqLCQ4ur6jsP5JMVDoxpF",
  "key19": "341HPhpnTrCwaTHkXjSaPNwNUKjz8NDT3Z5Nh15rzCmRioeauzv9WLApwvKjpau5xYGQadtf14mKRW9BMg2951Bf",
  "key20": "65siYUPXfiJZyCTVmVkxxSsiAPzJsKe3qTnLuRA4QTyh94BQhS3u3JpJCyvgaze75qBQ5WVfqrK68NHXzXBm8tmi",
  "key21": "5QyDqw9Y3Q6DzRr2CryP5NCKDTnMfHqeyQ1QdUrQdar5LDpvMrkgBjLLxA6cNt5C9hsWnSFbrxXcCV65wSJzLmPN",
  "key22": "5pTqLV9fPEmiCws4PE9uofUPd6M1kAXzSbAFtEz7YcCmxYYmsEXFzYaCttcUoqFHUTQ6xLjRPwNxUXuEe6S5B9qU",
  "key23": "Z8f2zv2Fn1Wq1WQS5BUwSkiHkD3kCmkrJNnjd2tp5AwbyahdonT6bGtM1585X94NTaJcm3vFgfTiiFZqopgabyW",
  "key24": "dJWV5p4As94rcv2PztoYgiHbaYvYLZYWBUaspAZYqSa5gJR24TFLpoMD72axBHHCWMpestbGFK79349iR2v9ARg",
  "key25": "Xu7UJaG7FnXLgmkFjVgvR4UKdvm1CDxccZFV5fBniPCJKZMZxT4C6rB3y9ApYmwapqdCBbwZURg5cSuVwEy71fp"
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
