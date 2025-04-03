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
    "5GLceTqM1g8DxJpDnqspJLuYkowRPbJKo1TCB334rqbdwU4Kq3PS39m9UPnjaZLnosfZYmV6DDSzkrFFhdGtGcui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qr8vyrVcPaWhJzKP6NSTpRdxj71Hrjt1bd9ika2APReoa8YVmmLwaL6Q1QJX5uJvXEQh4dgZ1JAkGj4kMm3XSXi",
  "key1": "39AuQLmbw8bMeVeWkRfgSA1qPg3MjMedMXnswmCKmcpGqEPgsjk9NBFjx4qGiCAg8NGMzwdWmoBSYrK3ou3KDUf3",
  "key2": "8G9ATHDqTCBFTVY6Bb4gmVuQbcJQdVq2NZsYbTVT4cCTbFqnjuaATHiyMAQbFZkU485dVcQfXgvYYu4rxdSVpZ7",
  "key3": "33i3NDUpTHHF4mZPAyU2rZYT714agUrdSNiup8ubURhJ9QusNjU4Gnf6mFeenwCgmbG6EYG4hkF8KY28UYK2bzZN",
  "key4": "3u3qQ5iE35pjhqC1RKB2B1cFwPi4gz2gtChqtURHKVoFdox6D4eXYoW2EaLrWtavi64KLnPSWxAJZdmHJ82FhoeY",
  "key5": "5TrzJq8XVJKkwG5rCoEBzpfmG8qee16qMSKFqVXyFwYDyxVYRsHuDBCBeRKZ7UEK7uME5Gf1w94TEpi6xpzKQsvD",
  "key6": "iPPhUCoY1MhLDr1iA9hhoSZu8cuANVZji3FcboSY8Z17nbjZxgPcfWDY6UtXne17W9tx1Xy1w4mjj7YTcTaQuCy",
  "key7": "3rDHzuFKkfYAWtwLL3A5ZFTkqeyoGgzMZkGd87KzkqWfGv2or76pURMFxBLm9qTP4DcUx6TGJxqUkUtGCaya6K6v",
  "key8": "2PZjvybbwBNusWtiTrfUftz8r9HmbgyXMF5LBDKrd2mERCezLiEC5V586pCpTANE8fPHSpxQ5Kuu28XMXnEsQc5H",
  "key9": "5xqf2PDLV3MmhM2dazmCyeBktaVPWKmjfjUyiT9GPzU9hysEQhjmFgyCER5Pe71tvMsE2QUMRQhK4eLBopEp6Nvt",
  "key10": "3SxzGR1fiwVBpcz2W564DncJnMkBffHDQLHJqiJsu8kp1knZyHnyr1PRGi7A2opeTwuRxwk5vfdDFKaUcRHaDUaB",
  "key11": "5UBX6PoAzpc4RcrQnKxHgr5eGr9gnQfhptxZAHwjz9kZa4TSvF3XSPDXvkowinwr6qxbngteRUG8KM8hfocsipVr",
  "key12": "3DhryLUmLMAF7BsUWW9ddxSaaC6TcpvcNGnd4S7JDs7hDnZddMVTVveS9bsbmACgC4SzU4zLsjizVPawRctVczsL",
  "key13": "4zhBcdC33MGwAJUafm48ozSEccmLnwYZvpFVsiRPQA3eVxNt9Y5HBwaZRcRWhp6bxmCger7heoTHW21bYCW674bb",
  "key14": "2kVzcxQrQum5hTHuRpqZEqhnsu49pfpBecXgVG4PWJFPkPy5Zekm6APzjCgwpt5fmpsu2WMU2Zu8GyrCrQeSL8FS",
  "key15": "5HCKjopQ2hFiTmdi3LDQZNT93yz6CoMEr4mrUK2H2n8efD12aVkjgLWhd5uoGBceQyQ533x7snsCjuFzgoG4Y7Yu",
  "key16": "2TasV6u6CisMPbwitToioy8bkbuC4tyiR7S6DssJffBni49b1RB88hypTQPFycx2W1UA67bowgkm5fyZWThGp2H8",
  "key17": "aEuZQxoL3ZjDqZSYzaD93mdxTemJA3MbxABhRCtNTRPBryZMw7ckQkpHpDdGyHigrPtHaA6xVeKqbMHwYcxSvVg",
  "key18": "4f4rR2ycBkdjA9VctTqxTFa42vTXa3S2LmpMLpdVVnVRsiokS5kt7YLT5npJJ6MSsBE8wsvXr3fhotGsgEkrQvgK",
  "key19": "2Qz14L4TKkEb8dKZW5rxvd1ybeXGaFJU15cE2XWYyS3CW6PTafuVeRjMNdPDiX4zeXy4buosNdU6xMUipARQYXUm",
  "key20": "2PvMUJiGjyWtYd4EneHNDrhtvaZr2CGfcaqKMao2jS8UV1KNkemHkfYe1h2ADYxSHKdAKUtvgU6VsafMWikmogJ2",
  "key21": "4Dr2FL84uWAca2YkMG7eenPQ2MvVGy3jpaRnwnpUDcunS6k9Y6UYQ2oCGRvHpeQSMHfVw1WKVcSr4285C6AB2Zre",
  "key22": "4m41nBwbzjVZVdAUjJKDFxVdeu5tZYkc5DhbX8y774a3RpKnysFW3UBwXxEkUQvs6oeeCuZHk3F82cuUkMQf349n",
  "key23": "65C5fPXxrcUnrrvcfGLE556XCUaMP9t8QksEzmbpGRLVbvb5Rz6faMj6v1VfvQiJZuytwq9wfiGXP1fd6d3hqzNG",
  "key24": "4T8RhCMGyf2auCx7UjJhMyjvnnMyB7j5QNivh6nkjwNhaTJU8M2p4Bh942Z3Ctz525qELg2rCfS3bsAvSGWeAv89",
  "key25": "JfutYAdDzaVRB7ytR3jRevFYb7o12qSft2K49HAZUDuTZAKhhvfCQvgQLFajK3BBydT9jTwhzkMQJ5Jh3BqXBDp",
  "key26": "vgxzWH18fK97Q4XXGkhPViTUmKa6vFooHXiwtpxbcfjTuF6cRDEcaFzuu1iH3sQajdc9KJnMM8qyxP9waaryarf",
  "key27": "4rzW2vNbNYQhc4LQ5yxtmbyDtwnc2dXWVgZjMJDxdJwzHkvu2PhnRKkZz324SyRYRP9Yrdb48KZ9kPqj3s3aDRca",
  "key28": "44FdNTL9sYtKxh7fVm8eyRxVhjfQNMYyLGiAPMyjV2g57zYzE7sfT4zQtm3KZMmJcmzgmi12YJWGinJK6TaWkk92",
  "key29": "3Kj1Lzba6EXAm2cwgzhMVgp6qXj6HfJ5bzMaHkZJBqGHDSU96xPGhDWuqCL2oj4PKgbwjfUSE7w5gfGEoGoRuhi4",
  "key30": "LqR3sPQMXW1U8UFZ4VZpGTCtiXZDKP26Z5Wxm3XuYFrRtFrMvFzZrsd2SKP8gYoQ3cjqnodJ3qVXuSLtSckC7N2",
  "key31": "22bQUyrR7dvbdmqLqbG9UJmuDgmq6Mt4coUpgDMi6qu72DnVcBN23b6hpEYfZWr2pz8BLccQNvCPyTggg9idez3P",
  "key32": "4xGto7cJuS4rGWR3UjDMzd58L2hxFF6octgMYbpV1hrvzbJ8yjUuLBJtTmSv9EcrrcPxEPxvRkcWxZDeztFWERJi",
  "key33": "2KhSJ2TUTjrs6H9ZpbK2BBJEsXcu1L5tuYUQoq6pEL9Q6KAfykM1hfh4Nz5Jr6xtFnvfnWnQKkMQsFqYLtyAAaAo",
  "key34": "YvhxPiiWcWkZfzFmU6tiD6Tt6HN5WNen51D77WkVj5wS9bgxgBKevAYdH27S8qDaB7qrbjrr4xVJ3cUn1Kmf4WM",
  "key35": "3HbdWPjD2UE2aMa9YCzJaUJBtBpbGpKr5W1LY4S86Cfj4Z6b6JFYouiheKVQLpaijAgq5EBWynxX1pLbyGqYZKnL",
  "key36": "2YoddU5dswkkvDmWoSFqF8pijeaRQnZywCv2kEwxmvfPJhDzWoLcbTf7qjXiYpjJGJEvoRHaBaDE4GrMabPK4JfN",
  "key37": "ohZgGnmctY6tiNiR8HY8Wyivpb4dt2NVeRWgwU4Gm1tfmoWo3qjDccGMAEXbqBwQ1L82AmXmoAkz27C4EoAo6Jz",
  "key38": "od3HLvK1Hco6DjLPxUeWbArhULUpdbRTvAjPm2ZxZW6AwEmbB8BNxjJCokHNMm6ivP2ii8nY3RoxcEY22v8czWN",
  "key39": "54mMoFxcm3nivbp8hWProfLFPWKfqQzUHsiKFAYwyBeDqTMCEC3zbof7YZwD3fhXrW8a5f3svnnTdApJLY2J69HR",
  "key40": "4Px2mmdQGitPXAfxb6et3AiELDKNump8fpM4JyWQCWr8Zk3LaRt9AMoJ5dTDop1WEkm1ZKbnR6kMcbGZWgJCwXUF"
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
