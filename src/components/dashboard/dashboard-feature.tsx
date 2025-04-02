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
    "2P5PigDT4WR2d9PENzzRH1x8FqM7Rhfp6Pr17ntcD23abTe88UZheP1hTNvEZki7PXjnSjnjscf6WuyuXa1mAjrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XWj1hKZ1ubCrXRJYik6T3C5Ve2BCuvJSsY9tWLFuMaASKrwLhiCwMHAChyNeFhjzuvEMotsTUmraV1Tcn9nFumv",
  "key1": "2TFEeYZFtkohbkhtpwhWAggjRUv7jrFHYYVax1wKKnaG4o6QuZ7jBK6ZqihKL5YB2aFVrVUcv3QZT8mBhGuzeQ3t",
  "key2": "55QEwuGt3uFR1FuYx3PjWEyQrDLEUn2VEwR37dXAhjteEX5Gzgu8EMdN9EMLXj5e3zxatGqmpp2ixjGXpqXS4esN",
  "key3": "3SH9Tyi3U15TERwys1Vv759BSJ53HXSsaspJddUR5iWN3ai3iXoaoxbPky56FHKkmgaSi6ij2LuJzMkSj8eSQwb3",
  "key4": "9CiQumXvT5ZedFTDFuqq6frSfH6KE82HgjPwGDWRzvMNdxggZP9WcHjSeHGPoTRe5eSCZtxq46vuPrcf9eFa1C6",
  "key5": "2ZoTBJZyR98Vmz2W468vB2TWY2LXEfoq9ABrXdNi376LvmjvQuAcncGMqAafqZ2gckoMp5xGuEqUjti7RfhKmopK",
  "key6": "3EKN26Wjs2oA8sMNTEqRpJja8PscCwP4KM2g3zhuRdqhWTn6vqq15vtWpGpZZvjH87aukbJHia8gP1de1Jvv5MVy",
  "key7": "5zRPWW8qr9cJG2A23qZSua4rvP32QQYYFGVSsJn6B7jSoPLXpmy6sqWuCh2ZUpZGG34E4EqWSG1QpxzxvqQzQ3fr",
  "key8": "1pKrdXVB1j3ingTUzVoJ9HmS7tk78iChvk7ffdjQs1dfZdepQMpN3xbH56e9br3eAAukuRN2PA6jscqfgv3ovYx",
  "key9": "3figFHdAo9EPnzyMco52YX4PXBs6nQFx6Q9R4nw1iukuS9ZzFY2GVZpG2qjiwKHJdTxEteZAaB2U1fBgTZ5s2J2C",
  "key10": "52RCjUcV2cJD79WDnbDN8UkSKamgGgjGieSM9bG2y5ZGSAhVLqZTiqeNPmWDegiBmqEzUimYs3nn2LuJbtmdZ7Tq",
  "key11": "mZNLabhXfB8VSqx8EEyQRDmR1c7nJgQio8s2Awm8t7TMmeMq854hMgFWVZRcqFfUzKBqtFrDuXdvjcm8fVnq4PT",
  "key12": "1f1DRZsWysMNZa5KKSmZyJGyUdKiBw1WtZrEgtMFhJn9fB1JEYwuQybnsy6JKT2SqPNa85RmsGgzhLLWKHfe9fo",
  "key13": "2yTERttfYU5qXgaTA472xcvfQ7NBko2M2siSa7Gadg9u9c2ruWpVS7yeavhKGcLAPy4eBmeYPsPkGKS1oECqCeCn",
  "key14": "49owhfQJZRtaWMPTpbx71Xi5scoQevqiro3zpmQ6ZoiK5QYYwWheagRJEub5VesEKoDowYUKKRWUQFMNc1HU1nuE",
  "key15": "5xMJfVENQMYHyTdGyXPMKQUPTenhwiRnPyR6PKhJHjdoirf7yswZSj5MRqJ3zWe2wW3tCXNoCmUbNYd4JW9opmob",
  "key16": "5WCTDdKLcFAzMUQZVoNoD6GZGyujSuYyuEFP57ehvcthpMtEwNN8jfsx6m6NRDdzzvj7cmAbVtSwokqegPsANFEF",
  "key17": "3SkNNRq21eYSHD8UYqfBbQoS8MsqLjWAUnrzFPz4wHR5HsisAoQCWgLmkByfpD7vuQj1nmDjWUEffPVr176bY4du",
  "key18": "2BGpQykjT7QoFt5YB9MZwGZQ7mPVDrMZL8wjZVbbZXT3GuYpxiqRQMn7PfTeMWAeCgXzdM78jfDsnLc38bG3hvbp",
  "key19": "yJkzuR3HAbBns52CZpxkfrAeqo2y1ksEDVKVvFRaEkBUnATNrAHydwFFdSJrWM9pnAonF4r6UK53GwcVuoSmpGd",
  "key20": "5CXTrb1FY2uokyJNtkgB4uUPEZiqzCkzUPPPKmyf32qMF4xaJ1VfzRS4YWjkSeag5XbS9S7VWVzMhTPTMA7hEii2",
  "key21": "kyqJ8MAzm8PAKxVtPVoYZSTbxq3SzHCDL3NHUMZZ5qZpvmAKupWLqqpMoW4HKMBWXhRJ4Wx1g5Xa4dvAnmA1ips",
  "key22": "4jZk8Vzr7Ta5K5jAq7ku5y7iVwwkfHuYgeh7a97P3Koz8xHUr6pKjVu73yREUDKFKdvQ8Drhj1nXkSYZ2xG16dht",
  "key23": "2GDxRJXQzLM1rVFWcaYpnLK9NWAwiLtRTrpdWP96S9zTDLUhHmhMj1rKcYGH6gHQevHtJEvzv8iBzCSysGkqdExR",
  "key24": "4tCKeYJ5THUzhQJwDcyz4tN988i43nS72mqb3KtMPMU928YbWFbiDwFkypyNTbGMh6BW2PmdpwBvsUW9TDTFNHnA",
  "key25": "JLDuNA4zR14b1VtL8tgYqpFFaHGUjkMuWjhdsryub8Paco3hDdmd1KJ6QFXbpNZDaX4RgM4Xw1Zz99kdqWvEngr",
  "key26": "3hFp856giKzAaq6m1W5mZ1rUhgqX6tfhgi6Dx49GKz77w5MAc4GUThKmyMrAgUJFfigzsH33DPGLgBDnRBr2LQ88",
  "key27": "zD65cWbE27FH4iZnYCpL36AshnpnNb8UczLkoptixj5tFVnuXoAbjuXyTF5deMkARMrzrgW8vDvS4Ciy62DTmKK",
  "key28": "411EiUsoGXDGiU5m4RBmT88157wzivQmw5ygfnLoWd7aAFj1acCgKi1Rupvznuqfw2KkeAgEaQ8qCWn8HLmCxXk2",
  "key29": "4yy7VrTL1YrVi6kfuHG7zazjNFdkBJDNFtF5vBgFaLqyGvT6qGHgNyg4J8ZaxFYLsa9sTs322kkhddCssWHuBsVH",
  "key30": "2EccpeC6hZD7GocpX5PKZLD5k6NFqC55eoigvEcfN3pz7p4uqfcrMDtd6vs7vc5MyCVgstULezrBDY1PhkRDNkQ7",
  "key31": "2qq28PEMHob6cm5VnHMFaUQhhGSsuK5PavnEfhFGRqZnh3rdBddsDhLNyABYsNjDAvim3TYL7EMKSyjGaw2tA4vR",
  "key32": "cbURgW4PDGUmHGqN3gZ2rREcuphswHpkwh8e5y9QXRnmg4dhCfNCsx4oAsvaG4TDHDU1siA8Gab4E5Nr3c8FNmP",
  "key33": "3uoKag7xHSGhDH5LiG4tX7NyqndVTng4oTXqp1VJX6DgsD7vZxvEWqbpo22fxe9sxamZo6YtK4eGYV349RZQZbuy",
  "key34": "3msTLf7mfMA4byyJozhQLv6EdZsnfLEKmoNZK3XUkHEvzdkvhZbrqhG2TeZyjnMhbFnczUGQgpRcs16B3KP6KaxP",
  "key35": "FfHj8H96GpVNn2kCy1r3mQZt3coNR5Wz1QPHxSQ8YYC3RCJtyaJDThUCKeBMU8fmwJdtaXgbHTFUDzUfQB5JTCQ",
  "key36": "35ncRkfHKyH716QxckGkgtqQoz3n563W6oje5Put7mJXvNSgcaFKye4rV8LrJTFPuWPS4qKhiaVM3xFCr4QbVbr8"
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
