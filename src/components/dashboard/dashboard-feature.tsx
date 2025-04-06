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
    "37p6FD6pkRyXi2Z6NjJna7Hj1BpcUNELJaeb3hJDFnpUejMAqsrjBqG5v22W2sm6X1ApLVu8YxVYFTXTGNf7nuX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n3MwE1mEwJ1YXL463KNUoatMw9q1w8SFwBnoEt8NnRDxcbo6Rmo5zAT6Yx4Hod8uiuSA11ooq9XuB7eFJQYvPsZ",
  "key1": "3PPjpjxGnA1GCY1B1fB9xbrzfxurSsXM5PBw551pFFW2q5P9GWi6Cv4Hniono7aoqDqkMcEvt55eK4Stg7WmnNHD",
  "key2": "32XmhoPgPLBcvtPueRS9269Sue9pY3X3G2posD5typpHsQKG3wPEq9uWkaKSWH8KVzxctMVNhXCo1RMW9QxbE6CC",
  "key3": "53x5SU7VL8B51DeKr4Jw8rBPbwFd3GTx8ct7eWSJXmupVqzuyV89XAT4yhKyUk1aKXci4PWWTaeYKMAD49NiZuHR",
  "key4": "79V9gNTFc7pse63zcBvtzKgurYdNN9jLGeP1evXWcAFdwmeE37XDQax5HmskZshxb5n8mmmu423n8VgpWWxRWND",
  "key5": "46S6UByzRkRYCyymii1CzBsN2bip1GXEKHx55JCyc2oTjHott2VvTY7LLLLTSoNZ3tUuk8tXULfvNo5Ui3Abh67S",
  "key6": "4wLX2BZMkPPc1ReZTrMkptAsTHJr5WxmXH6HnmosTrh9xBEUGEDyeUyzxDeiNSACuuir1Korsrnf3K36zEHgSAhp",
  "key7": "4uYcwrmUivZBPrhg675zHMffFP4FirMigmZrLhpmxegSbc657hb76s4snNfV9nLsd1k5FGqEu5zhaJUgviwnC7f7",
  "key8": "2DfDufYXJ4A3bq96L8jba4DAmpA8EBsa4dsfwEQRhsWGjnxD5PB6SmgdtnMSYrc5aJLe3K1GjFZcsic7g37PBHA5",
  "key9": "3EKo4PPCdcHsfLFhcoezU9C6DKEunZoKz3j5hEhpnx8MikZg3iqBSzwhQrRmhTB4wzszgtk8fz7xJpPxKxoTkWfB",
  "key10": "5aCayn5yoLgKzuN9PnCF94bufY5ZLRRy89nyciXGN9SjDhVxjPesuMiXB6aBqU7s4Wgpu4UnSG6FuMAR9tw3QZKY",
  "key11": "5kz19bNtwwJeSWC6wikgLi7LxhrDzgtENGyW3NbfwFetNmcN6n7rWz95mi9GDYemGhgJe1NbsUXUPbRHCYtG1igk",
  "key12": "4wBTBch5JMd9ZgzrTte19qCww6gPrpVZkSvGPKngLESUiryADm54ngy1dfxg3hNRSGwLvHZEzBW3Lzetgi96dUYt",
  "key13": "5kC1UdCqx8di6wEJYSGhCLtcCMcT5adN38oRDBnJGfajvg6M72zV7C3TgFXc8EAnugYiq2fyYjQAjMgB6vbe8B37",
  "key14": "45kcAEJTQC7tbx5o8FqE3A8mNxe4fakn9dSE5S8QxTx1arF2fWEKU95tYoxYqjGFUVTzTeukaeZnpmjarvPm4EaQ",
  "key15": "48AaUSkDuxtazyBnceGd21ubzVaDm2J1w2ykSPsJo8TnYj4BzeRNVWe15RMYo7rUotBHhHoNVioGZQXEFkFycbBs",
  "key16": "4yyWm21pxMbT2S2ySW2WMbeqau7jPMmxwHWouKBjyNPBByr8fFqEA8AstDuCHutwqAXTQ9PMhTWsLKXY4uQp3wn9",
  "key17": "7HmGb4cApfq1JqWY8EkQT8SUwBvMs4Q9xTSSF9p1SYzN7y9zYDx5TEhDSswTXmHMaUop54QQBpMxhb3hVpJndZ8",
  "key18": "2ppMUReRcUYZMzZ2J13Uu8hkK3s2XH9BCqAwYbmt6LiDurLYa6uQ2WpTUetgcRCpWAGLtcQQpC8JP9EsBfDg8kVp",
  "key19": "2HWNWYYmZ63YfQ2dVrq8sJxK3TQfuhXkFk6tPgGQJea8zFWzhYi7SoC29SFpu15ZC2xtXXeXCpmjFMuc42i5WJYk",
  "key20": "RjjKqyjjeRPkNC8wJVx5sNjjMGHZ9WbFefoXFJGB2XQsjA8ptBY7V9MxhacRmnBprDmYsxnzDaZRH9PrgZ7WN2R",
  "key21": "3mYjSjJv6iXg1PQXBphqK6TaTb9pXhibV3dmBytaNR9RZXW37uqbBggsp6UdAYbpoYvqrwqMGD8e8quWvmCnUqWf",
  "key22": "5zMcRMqUpYjXr9xYbhsrLWU481DoA64sNi5m5vRe7RqhejHutLxCxk8ZaQ4McWZvV8BoHV3nw2kh3mG6pj13XiD",
  "key23": "2D2w93t28vuyhMaDCjxsYpqHU2FqmFexD7FJP9N3QddVMDd2XRUhzL8VJ9mGUGANC7gzwYW9294Br5Are5nCme2Q",
  "key24": "4bwZVLsLoq7PQN1efcsuZzM2iYAr32MsHWjSkmHrp7femproDABJxDb6FRv72NiiZia9FhUeAzFdmRm9CYKaBg1d",
  "key25": "2USP9dcR5APu8RMAwTzBobEra1EgCeSoBAq9gwSA68PMyff8qSaUrrqke5QRsGD1WgdDptGP3g7Fc8gGxheRhYer",
  "key26": "3jEVb6if5BUD5hZh7oh8zkbuVSqPHQjHVGnQdDe9GZhLXL7GtGB88muoRsxw9HPeAuAj3VoAnETZqVp4Bt3vQgRL",
  "key27": "5FZ65rvU4ginrPuAvfWFfqCNwck9WPXeWeAcAQKpKMqc5ufUyEJ9p4GC47UKZzDwHtHK3bKPSit5AaVv7eAaqL1H",
  "key28": "4jmHubHvAepqRDt1NqJdkEC1QoEGyiq7a3LjdTnr9efABdDKWZBtK3WMnp9JfofFmiHVaeQCsi31k3YAbF4y9LNj",
  "key29": "4jpr4ocCzNJV8v6yEkYeLWCDLmFEeZrgjaPDKTEtiEWQKY2VC5yU2CpEiPmUmvqEZe4GmwMvAoAfLuUW8Y8JXVsx",
  "key30": "3rjEWBzEXi6CKetM6iD5XLcJCQV2v3syihL6DrWDGaKRUXh2hqCidM6CjxXMjbamiMGLAERrxNEBVdhjPfLA9w2m",
  "key31": "59mcfqicBmvRma4z1XzkiR6wKyz8jNH6PU5CaU1vfK27xtifCAVWYPbkDi8XDZiacRcZopEVcaZCpJoef53W63ti",
  "key32": "2dnaTCHLZTndTy4g4ywBE9yExTb5TQDtVUnjppnVbSCcvVSuhFKjrKrYyBZXCrFcesiVmJDh8RW91dCc1PGupqfC",
  "key33": "3KQwvX2qDCBp5v2pySXAqtZbFVmsoFFE4jSi4bzMsDGcuzZVAWtL8oCbFgUv4CPxTGhKY2kEAQY6fdtaGGnAXQUq",
  "key34": "4q1eUc74WTLe6zZ5eKwhBTtb991zR4RCay6Fdq4qCwWxpqcdBbWrBrUJSSW8r1inigoEUmZGqquouzAAb6x1RxP2",
  "key35": "4WA2u5cHnoXn7cvvouML5V4AB6Q1RA4Nu9pH2VNuov9urNr29tGLDF97VtrfjPiJ4UNZL4s6bmesfr7CjUVUbuZw",
  "key36": "2P3kWKuPkj8sGuRHtNAidHGAmVVa1scgeZFnLgPMr8MM8hEkupbNnNhxnh14L7RjWaNXxdC4kFABpg94PQgz17N5"
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
