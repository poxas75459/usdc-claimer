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
    "2ovDzXoXAsxCyZ9r6gDHjktdbfguTYWXbb2dGiQnEJPkAEYNvzt1DMJ6VsYeghVjivYxYbpauuBRgqf38YLWYFWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EgJwecLQryqLC9mzmjqJAf8w35bVqQYTfVPmyXGQ9Cj4A5Mchf6CE2AkhEkdGHv5vtMtc56i2eStuarmihpD1hB",
  "key1": "r358Sq4QzqQc1UYhf1WwJ1TSFeJMamPv1Wt569gHU8S4C127cs6dM5Lw7nrThmjMKWWofzp5RpkaiWy2UseXugr",
  "key2": "5fKj6XC49CEqizs2ZyUVLt65VtZ19dXf23ERinV6EmWsRFi76yep5NCAdD7aWkubKihnMnemhepL3zyzmPEScVhP",
  "key3": "2YQ9UctJ6VfpsNS4LYmiCbE4Gd1Efx82sDzvUUc7tFboiCttEcotQ2bWyQyvxYLb4Ce49FdeQzQFAXRhD4wN3xmj",
  "key4": "4S2fcFRxihQv78T4rBziDe9dHqdB8jk6DkTC5JvrjQFQoU7mYZNiXQVcrWhR2sJqneSoUz9rwTgzdPXY7o1pngEA",
  "key5": "46SrsyaHrv9Y5mAS9meKA6M7RVFr9xd5Peh6V2uN66L6EeEVDxuEj9Y6avAG75zuEhz8Xu8XLvuFYt3rMQpheopw",
  "key6": "veqkFt7YxNafSdzVmUQUaHBT59dxv44wV1jqDrdCTpoYnSVopu2bHWRNuc6toZhXTXbg2TgMw3nuakcEbS1SgvV",
  "key7": "3fGMUeRXjbMvfqobdaw5GYhbeTbJpNzNkwFsqcmQ2D9vKamMzB9AyUE4R3C7zCguVCJtH16eutu6NTEcGF51yTrh",
  "key8": "5CvWFMQk4AG8g6Xdf3BPJVRuYRkq1AfoASfka7Fri5DnEzKfj8KCZ5uZGrDyLih4HRNQQtKKKtwV7U3mET8ZUsy7",
  "key9": "hGwfwffCCL2k85BMYZbfRMn3yEsyGhCNxWoPRx1exHwrRVGKpGWHokrSc4gy2AkFBzVgseuVyQYeaSH97Akxpcu",
  "key10": "3gPFYVPqJ5isKxHdH7jSbpPHZfGapiPbgXQ7298XzVwtgq7NpWELmM5cxBoKBAPhi9DMXX49igCVijHHKKcs7xJd",
  "key11": "5P8PN1uMtPEcKmLZnntFxgshYNzcY9KyFG2ZAqJaN4DBpBh1wnFApNChj9BMEQW7MRwo83Gcy1NsMy1nfAVE39z8",
  "key12": "67NPVZVvSjDZVtiYE56woP7wKzWyuXmE3uAcEpptqLHVsExS679FFY9hr5s1XAFVjFFHesFo2gej1xm8DYEJYmjU",
  "key13": "8bfHz2PCGJb2FXZBVb2JGSdWEPYQxTjMs4q2ggLuVQVQvtAsRuRJB9rDx29DjZwvv6AKuyuPhSvsfmmxnVft2Ni",
  "key14": "3nL4KZMDBPKQd8z9bTRCtHXjpFfxpr5L7VffRe9S7cFgtHQzLtVoddvEUfUoS3TKRwT6wWE6R4pfxc3BfWWKphYK",
  "key15": "4hqh1Ywx2L2mDmepMHNtgs6rVqUqzS2Xd5gQF5z2jT7QRmXe5bRbRQHExSPvfiu36sK7g7pCDadBX1odppTdWcUk",
  "key16": "96u2eNsCZ1863L2FExiFyYkns7eN8z3YDfRwSDhxmc9RrNrLUzAEDhDksySFsNe1Zop8SdNubqLa6fLVVj1o7Qx",
  "key17": "5kxw44RCfgnyJ17PkbaCU2Pk5ZBULLHsWGiFy31UdtW75piBgQJWDytu4RzZribi76PxZ1X8YqSsJAkfbGC25xQa",
  "key18": "2mQY2iMVBqgXFX22ZqkCWhCmVk1o4EFtEDySCgngf2mjg8MnxLaGHWbXoYUwnNFZ21SAGYhLjkZWEePQpTaE55nc",
  "key19": "2XNQncj3BgnycFdnichZn5KNtd32iT9vobLhcrNZesb37P4McDGYt596xvoL7uqUYhsdX1nVZyM5nivsn54EimBD",
  "key20": "Qix2MrvrNft5JWyfoT1q7LFjDUvpkn1Fm6x3mrktwJsGnP92Njpqjnud6q73QY5cqvso1AeWA3LKSG9XYeiQ1y2",
  "key21": "yiLTJfpRi22heLffSX6Uet1oR8yUBzR4aL8FZRSAbRz281MJnm3fsvzSXNFs6d6CTNRz3n65aKJ5VYqZUcKn1bJ",
  "key22": "FJHRwqdbn8ZEDQ8HgvbSciZQuYh9G7ZL8H3NRxVyuQ76nqP1HSMCsFvLz9jaMKfXSoJJHYCNQbYhxfAVgt3qgxR",
  "key23": "35LXjgTcgTyQZgy8AW9dgPrNBQi6Ysga2SQp1Wd1irFUKku2gJhQCSHAC4BMHUvBYNj5hEdrKnUASG1pDu3RGesi",
  "key24": "J68JDiDofmXvmAXZK1dUXQFHeJhFx4K1GBUoikP95mEW9pEmgssMWJzRqCwDLFjFyS5iod88xVAnQcDZ5RWH4gF",
  "key25": "3nPWUnDNToByoYWo2dGr9VRfHYoMFBYGYCeNi8QqyMRSkzKNjWuiPhvzSj7nTB3cVziZ1LwBVGxRdCfUE7Kz1Yt9",
  "key26": "2ACRk1pSzKPL3XGD2qogauaK8t98woVo8zCHfJdszHAE2bLMswBefLthGsQPfvPEjJAuLiuG8vrdX43TorXciXxA",
  "key27": "41vANn2YMXF7WxnErxPkKFgKmw9s37UybtwTkPeubgoX3ByzP3kNvDSdf5FGyL2PVnWfrCXBnKpTRZpTBCk9ePK5",
  "key28": "46ZEe99PZzJpNRWZPN51B8zd1zktCobGS4ZPK8XiW744wWLk3JpvVmYJdRgXZYBdwXGAdKi2SQPt9LU581g2xy8k",
  "key29": "5CKSecWcH82DEz7eZZ8moyUaFwaiSNDaiwfUYN2yHhdzkHjc5BXM8mujLMkFCPf7m1xdtatimNM7BLauf1RpPSHe",
  "key30": "VxessxY22iLxWccQBGNqUZVFofiiVVZGvcLRsjUh4xBJ26J5u8vXYzm8Xz5M4AqWzkAXU6rwofkwsBnGzfCUEet",
  "key31": "4RzvqProa38sgCZbbc3xDeVctV8XYbpWsLFNLQNrH3K9sBGYRMyH2QJej2NQMx9xN2sHs1SwhrxvgvYbyEjnKP5R",
  "key32": "5BLw8yeZLiod8V1WiH6y1hLwN7gVNT3uWtAskYz46NGWpDVPS2zMcN2hpQhkcdfjf9ebojBbLpiXFrqYyu6jgnWZ",
  "key33": "RzAWxU83GHyFWnwKtiEQmTio5Jx7Nwj7sNAFawxfqSX3G94MoM5RW3YJvow2vVRKQTNGQN9Rq5YWPkVFd6BifgC",
  "key34": "4X55xXVh1c7jfoeDnBPceoWVJbz1iqTcqFoAVJvtVab1nRKbwaC7Ng5kGFe9y1sK9TYdVYA9sejgRE8TC8UMoBN7",
  "key35": "3zBfi6Vbs67pu2wqHSSf26vXNx8YLVTHpjc2bSVYrv1SYEjdAtXNfhdrkcsnVbtRwKzEWz2gotyrToPN4osKVdiU"
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
