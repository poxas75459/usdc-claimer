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
    "U6VKKNeAYGcTgMWGRGe9VoUZpApcUxtSAPm1AoeAt7wS2hcH7LDoieV34nahPzJxF2nmHSHzcdydrjUvsHEnQM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32WcGFpRq8QM3HBL3LYk2oz3g39A9dC58r3mdUsoCGBoQwmpxZGGu1T8cT9YNXanTKpzXnyHR8UenKZB2XhiG45Q",
  "key1": "31A5non3rMf4myWg95h5waPQEq9YyACNw65bLzr5cQqoaBaLdLxKSCpKi8Vyp1RNwbXzeDGZyZrkH3nYJZJB7uem",
  "key2": "3NRCQCVbHzkYFZ3chTjiiTm2atgzsPTW7XsrH72CpSv5ALHcEDpBs6nKNhV6EKf9w2C6uXKZk4PQR9TQhMqS5STM",
  "key3": "4SHtW5nsyvD5s6TMkXHbGea5KMCHwhmGJc7MqbiBkNTP3QpSYfuktpgNJsmjAz4K9CEhs7oYvKzGx911HMM3DdYd",
  "key4": "617M4NWyBGLih54BvUUEB8DXSnH75rtSvWzZnveRNKWvaGPujkHutjL7K8qQZJxkyWUebUtXoGTxhJkxYH5v6qFN",
  "key5": "H6i5Kcu3yGY9DmioNaPa5HnX2n9mMxZM2caKjF8Cdfhfj1tZYJqxeFzbHJeCTimXaa1YzPuMnKTFzo3pTpwuE9x",
  "key6": "5aGTUbedZGsG8g6UNVSWyttsBqN5oznatX8kcxRjrdogn2ftLX1mgUL78hkEVtkuCa6kUMwA29GcC6zoFPXaoapA",
  "key7": "5FR26MZdkvoV8739KfRNPCeNhHDeKLRY4MdA8pFqVFDR2NQqHFpasNdDSpp5PJBuGRiQS2ULRYf2jBB37UnMUoNx",
  "key8": "4Dg587bjVcL6cqPnKPAA5guitcCpsmPp8GR65g7S9EFiXPuQcEf6gD9pHPzTnTrUBSHyeSwFn1AGVDKKEXzu4gFy",
  "key9": "2pH5NVuUpSeZyYL3fvK12MuCbiwzKzDkQum4cHGWyyvxuE9ftTGjDgPMNPCzRGrwvVtDkTJLjZXkTLALJv3dpKXd",
  "key10": "CMSAN7Y5hRFRsagvU7K7yfbHtv9DYyodnR4sZVh4iRoFo2eHJd9dAwhnjfFxopv6YdTdwz6BxP6UQiWZMBZX9sw",
  "key11": "239a5Ws15Jrb4D8XYuAgRL4YccU9RzLHxZyG5wUKYdu89Y4RYoren2uSKm5tzd5T314r93pyp2xvNbX4hkvYzAyR",
  "key12": "3HYcecAJ2NtGu8SfZCtSLGBZNLKBAGTxzZrU3U6i647DvRtHq3fJzYGwp2iN2fDNCNQVs39j3kfjf8LU8fLyGm5q",
  "key13": "28ZXH1GEhR9B9dNf1dB9WKjopwZYCgPYRCsuqBaEUsLaprK9rLPNLzYnaTshiGQFpcKLU3fUMq2MHgHVLegZL8tG",
  "key14": "t42TKYXGCq9mYL71ZEaquyHPg7zeD4zyzKSXQTtbWpA2Pf1teeusqt7WzwNSyDgYwnEQDFtr3r5wWGy65BNDmqe",
  "key15": "2aP2FCe1KhNtvhKy4gFVvGUJjyvCakVcv46EazvibbRLPytdPtLJqww7U72axmSGFrm7s1wYKXwQQZJUMQr5W463",
  "key16": "3rd6uCK6XvP1FpSyeZS5TeSNPanHMJV8VceDctKms6e5C6Qq5WzGLUnBNiMiSC3biFark4UF7PRym2SraejqAaPi",
  "key17": "53t4RQeFqGW6gzmrQDZimjmKjSGvaxJXgWsSpyvzYoZBYJKTKDDsTEpeT5H8wFtyFTQT2qm6Nnt4rjgYGbUgxpJJ",
  "key18": "48H3Kzgudua3LL3DCGAG1X3kuvJTzcX3DWwfp6YSRsE4xoVTCL4CKCwqVwWokLrUAV5Dywv2fxqe7A63nmDovxhm",
  "key19": "2MuB2KSy6QEJAnfi2oYB9vqGUEZ1Q4pscXqXTqE7SMxSX3RbeYcphpCjUahiDRb4o3sBmiyEtSFAJMjwqJ3kwTD",
  "key20": "5yto5F8CLgn6kp9oEozDkgTSRnHbZFfDAKqjUmqyNTSxjCQYSf58JQQLu87srdw7vW3fkVusKQ25A8go42M7HZSU",
  "key21": "dENRKzzGVxmxKd48cxnwy5PjiRuJztXv88ydMQ81E2awhvGW3XoCLTxHvTNed3QNHANaHKPQzAAqoTaeP4EVTJT",
  "key22": "2PKRtWyJSzjDwLM8Ja2tWkVf29autoGrUVnkAAf8PkqTFHR3qTxtwBM4fhRNKqykcG8mp3c8tQ6P2tADNdcHxweE",
  "key23": "4ismbAG77uQGd3DZiFsjj93H9tP6iyFuw7rT7yhe45jwAKqkPtJxYWyVgcSxSt6mtJbC5UGqshtz9LGJ7TvE2QN5",
  "key24": "FpxLVVES8KF8rL1L1eL5vMHpmoC89JCccfTF5FkbwfxWvxcwuCKAPKjL5qMM8YMoyQPQKdPfjunARpgpnU54SoD",
  "key25": "E7om8g7SV5Q99MgHHQzxfTcCSCJZzShjaaZdscpzjUudkj5C1fdzsnBTsBZXNfw7VRujkwkLiasvwQ6PWc5sYZd",
  "key26": "rAykHq2dXHcyJ5VJGvLUVRzJK8TJLmbSf8qFUTB4QXY6jXKfV8VMU2emxhLEQTkjgX3XAWxSofEcVau2HoP5ffT",
  "key27": "4Fajy4EHPnraf4CUCbMrbzMaF3M557UWY4XbFouBeDyP56pqFk7av5stRvQWaYU5faYV8PrBEsXxxpYfyvKdX26A",
  "key28": "2rdVVh9TueqmNR7kmycsP89kUpPns6T6EzkhrQ3aGmHrpXXm6zhA6VsjeHPPkAw2Eyu9wWz2CeYzxdsr7xPjU1Nn",
  "key29": "3cAzntg4k56HYWJPBDpBDo7RJAa4sz7p9w32VnHmX6F9Yac2httBSeHJWpZSFRjMJgVTsgf2EUEK5WgTX7eZXzun",
  "key30": "5kQDCiGQgHFWAbXbJ2dJs8dn1nyRL8zvejHfxBp4b5vsHGmrkKj33vYDAyWRXJStKWEfxrjbrRKSBb3vrPaydoeD",
  "key31": "4pJw8pTKuaDZFKNZyWPr399rkiN6FBBSvikxtLrhQrXPRCJWYFKT5cMZbXjG64W3yoSZ2F7eiWdm9YXHCL4j8Wgz",
  "key32": "4V7hizmZNcZnSnsNjRUciiSgv116fE928YMHkDq6X4VK1uBNgkFwWSVP3N1rptS3Vyd73Nq1xqHm71Ah2ofUgFGB",
  "key33": "5PEQVYqkUuSt7MShqP6sWmQKcnjSutaaLJLir5RhHZ3nFdR4RBjMz571oufM8BHVAUfBreJGwmAqL8fPyRuwLko",
  "key34": "5m4svex34SET9qeRMJYAd527zUHooCZxcDDvKcjKJg3aozeJmMGzPk2DCZSk5WrtTbnrLDLEZ8v4nb69mGPwFpGE",
  "key35": "4pveZr7FQw6UA7Mj8D2nt7NaFgivvKMRaPQh4JbqWhkhVknf2h4Y7cEswkzHoJn57z9U9RCgMPC8mjk3g9JHUBXU"
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
