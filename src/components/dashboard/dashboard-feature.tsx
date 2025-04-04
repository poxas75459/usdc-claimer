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
    "5XpcBPqFg8TMRZRaBiQrwxXffCb2wf4ULYA9tiRc6MG2ibiYJNwSwPELyRnG637QcKjDDSbMv1178Nyr8yDvo8CL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "247HnbmSwsjjnv1PZsMgPTwjjcirbhin1JjViejsuyxSEU9Cq74k7nu19a1yHbsrsNbS1vCpah2eqdrQgjoqrZ3W",
  "key1": "5QU8oUW7TXcmRBWNw41TmhCFSd6Gii4rwr9N12gZ8yJNysfqYih5WvT9LHAk3Nxc3vh6nCQn3rsQikVF7RvKPaky",
  "key2": "2tJMa8eCqMPu9vHYGE6yoDeEz1ZiLXcQMWz6biMAt5eCqHSxBf2yWk2CmkZEyU2sMJf5LbN4hRUHCPpmw6q5f4Xa",
  "key3": "3M1nYj7KAWABnpfomRfa4jiUbah7FW8EDWqN43aSSjKSVoqbwpScstUvuqQziFMgM3wkJZ6fzwAZG7aSkoCHSExo",
  "key4": "2HoioyRyKDWjVgf8kGVdRgbhLvR7wsWwHXEk5rPBXCYpdTK7mmAvsn2crQsbPpRGJsXc8jDnP6uAM95iY5MapMee",
  "key5": "2HX4gu4XqFowUgygy2o5ybyHXjWkcEp4EP6khbJvy3qUynQaP9ip31ctiWtBZuUEiAANzoVvL2xmEXG1i4xjKNpn",
  "key6": "5xSsVPHG1qQktsvn61SqjE2ovG1kRJB3yCbYWu7p3MXquUYeSDeJxLHZagkwJuRhnLWkmwvieBvwp1QB8wBhRaBL",
  "key7": "2zcWRpj3x22Prrhn8J4RoSyHMDfhe8TZX19LAcCA33MzREqAajnabbdqRjgkXL1H7k8JteejkF7NUFK1Ke6AVUyT",
  "key8": "4MzzackYJfLQPvjaRzpgxwSe9jFNZsaqUzxWqwHriDxP1o35ksnN8uHFW7zVj4oo4BivEgtbdhazLpy2Jj29pzJo",
  "key9": "qkNzSdJJbgYfQSvYoML1M2AjWbLPh6W87Yqr2qSnVoUQFsT7HkSQrGcpX1ehvZ24JHSs8cwzTgFRuzzyZWiRjsh",
  "key10": "2sv4kA49g92LN6nLpuNCS7fSybBiV4CSWUdmsx371K4hZVJr4nJBEc5bRjrJ4A3ppbqgS5J7tNmAbN5c4hCk5j1Z",
  "key11": "2xh7CyaNYwaQB2Y2wRnVFz4KbweGNLZkQ2yjAix4MBkEJ1WFLKLi68H4UkWYToQ88LrZrw7co7mchJoVTCPGybqt",
  "key12": "4Jaa9pfHWZhgBjqYbS4PtGietaVgnecJ1xNaJ6e1sGg9d1bEBLZN4ZkFMuFxmxHo2KczngRx7rbqoaCGd8ce8CGt",
  "key13": "3k7RtFm7pmY9BT95ZBSCD6rPSExzkuvQr3QAcfgKTcfSCm3aR9eLpAwt2qNx9GodtgH9F9ryiC2DZAmgPPJYRyK3",
  "key14": "4hCT7SF2okFMEDiARx8MYsRj45HzF5g5oQva271eCi7JX5mavekdA3t4xZ4xrBkmu7Dg37tEcDwhuc1ckwWFCx9P",
  "key15": "xPffJpaDbkEUzjAjeshGcFU5ArY4UoSbQHxfV73qyAvYaRcfPz6JDaVVrUn8SPdFYi6Bb5iXz7LUWMEvYrtTVPo",
  "key16": "4t3aF9tDaRVdJ4F8WJJcw5XfAyFURZgUABCZxNvJM7Pps67qgGXPVV1sg5SfsF2TxHtvCT5eSaQn5hhm8rCLYtTA",
  "key17": "4DsYSFUXsgcctwPhzjiSdsamMXkkg6B46GeqrJwapvZPez66MMwf2sQmarK59PYyeav9tMfaq8BWa6B7hJQxQMUS",
  "key18": "4e5TMKTmriyn4PLtQXw6vs3UdTsHsorsn6vGUqohvjBi1GSVdeFnaYxieEsW5LtkbchfTpRLipuDxSnU3RBQkNUP",
  "key19": "hThXU7EsmznQcERF9JitcgibK7Esvs2R4dVawokLPSvi5dsV7QRG3BVLvWBbZGxfz1fBw6ZfQFS1ax5CW3gNaWY",
  "key20": "5qWdkMmbS33EoHd5eTjTNNRjyk1YcEmtVVcHaoDidNtyHyWss7MKDW6h3m8S91KgBbhdCxrpCjam1SJtaVjzjZoU",
  "key21": "mVvk4mFQm6nLegzWxJstDNv939UpuyzYW377LvM9GC6VZ9XJo7R2RqhBe5qLbXL6XmDHuQBX9TGrUZnoTtRyfhH",
  "key22": "5qJrpTAjxfQSRTnbJQZckSSWZFj5MdF6mh9VyfSr2CUNxZJnMTno83SCyMKab5WDKtteitX8ax3UToYXF1gTdQ9r",
  "key23": "iUvVpJmxM2UyEfvpTaRC7vX7b984T6LyNYpLX8zgoSLrUY75FGScmmaANokzrs42tVrwpv6D8Kj74jqToC7y39A",
  "key24": "xcdzqgW5QmP2W5rpcC6L9jkC8CRcs1sDcxMC4X7Erd8rKfEEP9ypaLYcb7ch7We4ojU4jq3ew99woL6N3LU27UD",
  "key25": "52fCFEUQqgPoyoCMevZGGVx1S8S2mxTKGvrA41EntDhAcT7qFCpJx6g1aSQBAMazRzeZhM5rZ8wpWXTneKYyywYp",
  "key26": "QmMBeUbFGHMLibyPkhiU4xr1z824fwsKCZN6inY5GN64TY1U7pgEucfZfpLuZwqExsXrpGzbpH3MFVPM179qHo2"
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
