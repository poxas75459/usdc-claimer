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
    "4WVrHN5sauEVtij5o8dfokHdEAEpXkYMySAc8z15h7cFgcggKJsLNZbGF2VFucQRhmmeKPb2d5jStcu9xBW7728q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hgtojqyuhq6cdaGC6xL98CRArYvxNfyyCu3nHmo9pvfH9yxNcN24ZcjyXGVb2Fxdxuf6CJ4vvL7oYpzRUqhjdzs",
  "key1": "5We88VxQTUoqdVsyD3eVSfGY1iFV1yABgrf3m5wznQP78tNvtSRFUYkbJH5bUTutNPk9cKoh4yrsukZQhAWSadYi",
  "key2": "4SBEA1QxfqUGDLL7huoaUEwccs3kYhpSXsVbZYKyWDGBo2Mg6YZ4eTCm6uWEJDs7TZTnNAQ8LxrwzuvzNJJqomQc",
  "key3": "5X1o5dBUACkMXnWx1bQxz3WCRh8qZVh7v5t1jw4kVJijK5Km776gsWEUTtPgoBFqYQ8sf1xczF86cPaZaMJu4won",
  "key4": "3frHMtmv7ikFXuxyMskc3GfVpJhybY6EjUM8ePuGxrNUwMfoYgJKV6mxVA561WpgYBir7Wsrkje9CDfZN2hjwfPV",
  "key5": "4Qx5XgxBtpizi47awDnCDKcL6t8dGA8LfFeQpx6U1XzP3wyXaKAQFiL3kG2PaG8ZzSDCng96iniG5uqhruUxzfmH",
  "key6": "5WCgDKRiDTQpURqbMSDWxLUmDLVPAUumuV8tctwGLAEd6eZYGrJzPz35xkEwfF9CTCi8vyTYpzCR1AWLK7sakFoX",
  "key7": "3ZV9WsLdEedjnqtRN5uFSYBCY1cK1CTdUU2AZfeCord88AYyXEXNtcFir3wR9ki58cpcfeZiSJGuv8DHg4T7BkQ8",
  "key8": "4UZaHDesBCLNUVA8yrHTDprecb5RnQce5qQXMeg4LowmGnDKLAN1V2gg8LaCciBUVL1517CCU7U4x9eD5mS3PpAB",
  "key9": "3DShzM7UBHTQeh91BWptCiNbRLGSavWLRq11JAHVtBSkvBzfAkiYyJaBH5Dht5EwZpjtKTAv22ri8AoaMFxjRdp7",
  "key10": "4k2YgJyuuqFwrgacRY22r6LAj2xR9Vh4AtVWhA3TCDc7oG8AdwkeLqWhhjYjpbegd36drrDmMgyHfHNkQupVZJxv",
  "key11": "4vAsCgBTvoyMA2b1EhzNatuBM3UPMvZUA4Ad1rsy37d9p7wypvW3aTq8hH1affmUPenSbQByJ8MdTPm3eQjApWQN",
  "key12": "3eYVF6ErGQcL6mF1wTEwoiFBSa4QTZneCH7KT9jpT12G2ihEpJhmQVEj8dFmiFrTcDazJaGmzz9LCgGCCTLdZcPt",
  "key13": "32iePPgZQAediQuyPqUapZ6vXkRkJfLMp6JWp9XYyV8SDMqSTBgNQ5w9XHGgWJbtWi9wXwJZtUwVHwUVQkPj7saG",
  "key14": "4Uf23XdhxnCkuoJXZds81zDpVz6PFhrvdVL1V4cPqB1JAJSEpJEAs8rssataqPnnwVi72Lg2zwp9FqywMbcwrX6e",
  "key15": "3bevhMMex9Hw1cUGydPodE9Fn9mWFNDpzz4pi5Ej3kkbmuJw3YPMbEeU27hHvHherMhzBQQDPKu3g2LnqeLRg9Zb",
  "key16": "5cxme66nUNeFBLCviSY7mbkYeZN3TWFUQodb55x2CvfE2b5AMndjmqvuXW3VV7G172xcReCUqQAMALXEsenJXBsd",
  "key17": "5iaAKQfoDp9AQM1CzV1PaJuN8p5oT7kDEnxrwPSC8sbEaKEorUx5d8CEcA3a12mmrNURAiPuD2CKAKZCNDnNzWcW",
  "key18": "46RtYCkLux6NE6LeCVmTcwYBtHABu71J4d6wpBNh86qvbc4qUDumJ1z57pqyuvfwPKvmVrJU81nLke2UkdzHogKU",
  "key19": "5C3L94mVaBfPSMpvRuu94USWoY8MY5T6QuasQZz5bg134kX2Xkmg6j3TuweD22HZ2GunYhrccn6gZiR1LuUPdM4C",
  "key20": "3WCf1axM2hLuWHL8PjzViSkU3rYoEw6a2BPcT5zheBGNW16JkS8dtxtGx5RSbdG1CKAGeTBtEYaVcsRrMvxqfTRV",
  "key21": "5c8ayTX1Z4qnRgqTxvcWYQBzM9VgSMjYLJVgsm7tzyCg54vSzFjBZgYdoTz1mm7xERN6HNHjxRPzkPFZYsV4qBgy",
  "key22": "1JJTaEj8m91fDdqn5qyui9AYAtcD1fG1LW2q52cikgpn2D3US2J9eksyS7UuMhzUXZLAJ6Wu2Vg7giHyWv6LUPG",
  "key23": "2J4uDsumsKz9kpEvGB8J8GqjykGL2BDk7gChSe97jCFa4mn4tVwiX1Q6movpkk16UPWgt3LeWAutnD9op2Tvfps7",
  "key24": "59r9b9Wa2oxWf9QkznkPiuvR53GKq127SEQSf1gJovjZq3xTB1E9dA4itq12FPR9mFAtTaJEaCrfvC37uYLxm69o",
  "key25": "3MYFm8fRSHgeBRqCFKZPLtCsfG37jQDEjuHm6VJSn86bmchERjb6F7LxEgRgoCn48bTXBJYXwY2dVKgfshaH6y9A",
  "key26": "4cTvNT9de5TQKdrHWHqRbqkZf8qo9M7YWbaGXg6FjebdhswujNUzWAsB4AQpv9PdLefDVzWvAtAyLbEWieMbDoAR",
  "key27": "2x5ecpsS21kdmtpBKQCmLDXrHms3DuK6kQeLvb2tvd4uiHxdC5amFjXYTYgiixtnXq9xGSnQmaUDS7FGnXRYjSDx",
  "key28": "2iv3aKCyxVsvZ8gFXN3M7Z6hgizo8jFswgPFJKTUuopUb9ckZ69s9HPz9acq1PWt3Lh5K9neUk3buCMNbPEhWs96",
  "key29": "EVHEzqKtRLTgPX7xYj8YCLYz9tr4VJGErAFLcr7XxFfvnbRQoRK2HBi2a76NUU9GkC3yyqMspxrbREfAFqmC4JH",
  "key30": "3tV3Y7onKzggMVkDoau4B52aJRphLCWiM7vdqfnmtLfytLK5wyCNiG9mRwFrpV2FqmhitLobQ9FPiqZhsohDjb1M",
  "key31": "558Z8o6x6CH1i2sMuuPnpQBqxm1e6gxaDeD3mS422VY3aP3AH4agLfQhAGdW6rhLE85uGLUL8dhkq8S8Pox3ppxq",
  "key32": "5KgozkUUJX9V9beKt7h6VVJEZEEGM4g3NER1RyD9C7U34ZfN4kANbdr4RRsGSiZ7RPmeVachTgBJjW5RfirR7UCP",
  "key33": "3HiDQYQmkdbMEyV5aRT41gknocxVVYK3AWVXPB2pGX14grKuZLnLo7QF1tVB31kEGruQW43nnpP5dcdGqWZyJT17",
  "key34": "2vZ1ZUkWHKAH96GZeBjZVrgVCmesXAFRh9wxvLR3SH2XvUKeq7mExXbN1F7LaVmvvKBaEiXd6u2NB2apwVbYRi4B",
  "key35": "ePBsRE3p3yaSPgGifTcPWozKAbc8quFTmvd78Kph9Xvhbxi5A6A3VwkwNv9MqHN1NSXWpv3G7dSWjSvd1HrWJ9A",
  "key36": "4PYhokE9yb9tAZarHyb9kAfaNVwM3bw7UXueNMQbabd95S625GNbMBHYqPPjsHC7Gis8BHkLB15Yidun5pv4kx7a"
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
