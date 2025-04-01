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
    "2psEXKU5YGn3td2BBug5Hxh1tExzUNTYXE3d2p29ZAXcrh6QXoMsUBPygQgdNvhq7nebFCoC3j4v2tv58b2PVA6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27rmjDM7YxWWPijJEn38ge5EeCgp6F8Q8L3GX4hkohoBbehc4TecLbMfMNR5D8HgRQXSCJXv2yduxg1vHSBTyN23",
  "key1": "3hueW37BPPHGmDCFFDU5VKSNhuwN7Q7Nnd7TNiiPCCt7BUw9dMw9XTwbq5UvcpfBp4efQqjUTMcH7bKPCRHpv7Fr",
  "key2": "5kx54YFsBgxciRrveaMa1cbnVDDi6xWk9ZtURcreg7V3zxvKk4SvT7zhg3V4Ny7WHUodr5NctQBrgW6VQ9jSqbNh",
  "key3": "3MYtK1Yo9g6r6EAv7ehAQjQukVU2dE1WDJcqKv4SVxN9rtuVPGnphRNCtwC72VeBB6bCVhXCKbL27KQHq9naxpa2",
  "key4": "3W5UcrZBd3U6r9pBP3jZte892u3ZVxTSUwbE5pLQtBswwBkMYsrPDm8FMFykEyZjCJT4GS86dXdTYhDjDk5ayqQZ",
  "key5": "5U4FYx9aY1RSNzuboP8YtSuQ8sRGeWN8pDprsoxW8pL9dPmKs39FbqqMg5vVDRJ63oLJtcSvZJvtzcDpLh4hTTM9",
  "key6": "26Ea3GRfvwv1zCVJRSwkMhB4Za5AkvBCL1XQqZpXoTskqWYdcHB9cFXrfZVKr5DXgsDd5go2m3BLD5wAn5M6WVUB",
  "key7": "5216bKTpVhLuhdJnMZaDy9cKvVqQcNufSpoNmViVAcAc7c1odVy9kaT2VWuRsoUFyf1D7yzJYk4hUE39TTSK7Eb2",
  "key8": "3P99WKtSCscgD3wWdxSHvc3o8EUEuxB8Acs9ZTNWKa8ncT55yPjG7Y6Ab3zyCFFewaxgDMxmi2cbxhcY3ixdfGxj",
  "key9": "4wXs3wHYd9gmTDZbog6KznymWVtStp5WELpRoyHniKxEwwTW3LxegNXJECBLu4LWEEBWQNxC7td7vneFfa6BiuGf",
  "key10": "2n1NzmUa5FiL9EKKSTsvbSxLGrHZ4QZ5Jg72jyXxLuM9J1gRheBQ5Ana9jRHCjzWAxuCVkzbEmYkzfKLKMF7vJTm",
  "key11": "3mYVJZSP4iqWxku8dtsqyia5cTbDxv5fkRFteBELHW7JedvkJVkeMunxrW5teZ1K12DUuchQwVVwxgVjgJ2cSyrM",
  "key12": "5BXPrK8ZBtapRZ6SH9h6rBYC7xdyUa2yoq13tzrzMA9tRXv7s6xQ4xgfZigXYXopwKiP4w1JbgidaCQPSqnfKJy8",
  "key13": "4q7jmcb8YT31UnZWM7JS9UANDSkGdeciMXwtWhWsxxrfpoHdi4wnM3ze4KNqDqsfBvoZC6W55nDGA6nQ6MV588mk",
  "key14": "4Q85wZ4wy3fkTV1A6hgB6ymP6BRqq3jSDCtNpTkpLFdtzjvRCe771zswKCVziB2ifJVEatKmy2zp7pYPoaJizWaP",
  "key15": "5NZ6nKLqgeVKDjCAveMc5Vij74SStiKnsQ7VtjoKzScXUUotpaEbYybtrrdHmwxrgnZfiD1zWkzyU1wY9qGeag5x",
  "key16": "PZmHWjrmneVUpoTQfRFu9ftf2NvFUufuASb64LJmh2riduZZqgcYvFmR8s9NRP53q78K8pjb4ZneJNNFT6NKQtE",
  "key17": "4vvF2y2p37xMNHJkcvv5ucNeAosHkmERQige3JsiYjtrsP4Mqw5pvZfSWnpqCnyH9VGnReJshvQRKBjHGCS52PAt",
  "key18": "2Aqb693yW3ceVg8XdALNqnSJrkKZK5npqdft5rTeASeCD9e3pFuYoZ1QKoZUJvhkKTHrY63nSycq52gcXerUjTTF",
  "key19": "1kesLjnfmYRoqeuqPA4p6crA9uMFxMuTVKwPnfTMK9psQQEPJLpTGyjDqcipd4hsXoB3RxqBvKy4KHQK9TPL9Ze",
  "key20": "4FALVrq99WDaKjDjUkBYuexLxSNRhYEAVjZ3KWh2zH8CsEgv15uMDFvKq6SywwT6sePehsXYhxgYeEf72StgDa4F",
  "key21": "4nXRCoUXmRtVJCpf2rBQg5ZGaLZ7u22vJMQqnPimNKUmGrZc2sEpkD5SxaNygJZozrb3xgMm4sPymCQddZw18VyJ",
  "key22": "4GdsACWNUVY73jFqM2wfHzC6itskk8aK9TxW6M1Ek142fVngQnUdaqfn249LwuXmWiLTmNJ1tKQNdsZKWBTA26ZC",
  "key23": "3usgDPUdExncwnDu1puUTteT5QNXcMsa9rdua3fYHJLjLnw6k7EVXMeTZ9QNJFF6qw1ekFGbGdQjhnnz7aRgZqWh",
  "key24": "4kEfKULB9p28ubjfg13XFiRXETSoUZgDGGaUHwKG3Yc5sxDwtLD7r9xrHwGm3N5RDDUNHXhTZ5HGJ3u5nt81eJ5K",
  "key25": "Gi1N5wsty9c6vnZ42Lk7HgWKnEDvJAKPEPNtUeiLTP29kyFZpLbUH3RAnsPVxy2Md4yVDrgUBMxJPQqfsk53rMA",
  "key26": "ZVzLb7gV1utbWThgttTb3FvVBs3Kw665qgVrpxDQV2DDvvcB2eXhWer54cVgDHCZnDzn8e1EDW7ziyuUq3ZwaSF",
  "key27": "4TCZragqgWXDtxfxLcwUhZYK4BQ9N6bc5oni3ZkEKczPJx8QtepWHjfRxTD1nHDqC61obzmCAQ3ZLD8Mqu9yyb4g",
  "key28": "eEy1GtStS7s91nmxvh7RYM8PVB4rZJzGbFoheggFXu5Fz59SQyfeXCrNCtTVQ6G3fGn1rEZueNBFKu34rimyBog",
  "key29": "2TbyD7QeTH2yNcLaUt2czraSgyDPmVXJ5AfkTA1Z8BPCzScRAM4d5JZAAHjVYs1r3EsmdDPQaCaL27Y7kU4ovHmM",
  "key30": "mfHEFfdwzBjJcDQRfU4WucQHva578pvXqCAnzisucqqyCkW6MoPwHBpNxV1R8yWuQZqxUQbLtvFC9THoGQKRqoW",
  "key31": "46zqZpzXtR1r23CMKPQuMBAZi6LqquU7WxfzCaJgnLCSQTkksaLX9i22NAKk1FYpMPYhuE2VDCGuuWQ3FiqPAg7R",
  "key32": "4oH2r2kLB5b6rpctktYWj3khwupc4XUmpkoXrbWG1ModKRMuxtUEnyJWdp8CEmPw4VYybw6EsMcjFm2X6emNqFa6",
  "key33": "5v4UDKNUFXywtTpXBKLWiC5tKZN8K7ajqzFBWdP9rdsVxLwLu6p2AjY1dbKKqUZXkv6Kuw5Kiqk6f1oPi5CHdCAT",
  "key34": "5LNyNN6BQ5Bo4eZbbi92XR1GSsEh2Ziw5Hmr47a69MDM7Z295vaoLqNNqg2WhkuXUZ3Ci3LS48kN175HSrsYGcaL",
  "key35": "589JGD7oUCyGtAkKyf4vL71tySdbjazMDFPD2YtNSw3GpfAZeH6vUeTE3uKPFi5LLZFmH5uKqCfzywFyseWioQns"
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
