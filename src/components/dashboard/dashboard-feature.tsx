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
    "2evFeZEQNT61ayqNkQFmhML7e1hryE3xm3hm7rkv682F47bt6AWRnzkF34Tsme6W9SNFV74h6vaSBZGqttX6FQvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62aYWPXKqoNHqta3xZqDWv3g3xLn7m9f1m9jgJM29b79zXQQ61jtEMtxpQT5wQGr3dmnWFfF7PATNPU6UXbjKosp",
  "key1": "2RMjwnakkuDYc3ZCggjFtKDWGzs2uKwULKEHZB2J32fAtbUSYJAFSBfQQuFrbjCfsSABeB9Y9jYLgS6A9154J3da",
  "key2": "4NXnP7KpN9p4pYmydySf8RYJXNMPfdjpHKF6BsMok4AM6ZFAANkExZYgczboqzgrTVGZdiDcXfVB9D2HLqTmd7Xu",
  "key3": "4TPPu8d8fHwLy2aShDHmdvrEy6CcoRPMqq8XdVrhwZhYnWUjcRSHRzjWaM1JRPxdjpn2apiVNydbPaUaqSGUgZv3",
  "key4": "2PnEjCuLwXaHtfN594UYa2bJaDXLP1QYgm6oDREYaea2QEb6h7XqDCwfuq59mJAU3usGsSEzBUkP6nV3KNDGgujX",
  "key5": "3ExoWgx1dhtcJ2oPVK4iv2jo8c8pu4CgPk6kuJfyr5JP8RRsTg3rUEjeqd8pSh6VdaQr85T19RBMKmDu2ofaH2SE",
  "key6": "3fc76zcVsbZFCXCo4SPMtKFbfk18V3XpukG8vTbi8Qg2GwQxwQ6MaKLSyrtRs379LCQeHrNNG3qpv9qq6YfdZ27R",
  "key7": "NLhqvDuKVeAS8yU6eLhq8mNb5V8Q7DgBChfEiPpa7u9pj1uwL3yKUXXAw49GDbQmftxd4YjiKsRvxqqSdJDZxkB",
  "key8": "4nR5AfTyRSPLV2f5ttDm2spCTyH7g1dfiecfA96NmTKiVxB5ou6HpFqUPjTBDV5vuUgzRJiEnL5NxEdwRQN5rz8g",
  "key9": "5gqnLtXuz3GH11yT7N7JjrsoxX8A9eie9mPcpKWzqCHCWDtGFTac79gUz1cQwNqNh7gFjikzNB6feoFHetHUMXPp",
  "key10": "4gBSi4fw13pRoEofL3DEhCnaPWMUgKMV7M9ZVbS1DPffChBmD9M2MFAaK1UmsFykFWcoDfetwWkb1PPs8b6vtVRT",
  "key11": "4W6XxWDcyWvsiDD14vwY7VbXCqAJH1JDByCSD3AECLbw7Df16wUhQjotMghYHQuf8RWanMbn7XitxCQpU12aGvMD",
  "key12": "4sYgSjSrUFwj4zR4jEMhYwRLoB2kPsHZMXx3nSpcBcvxCJeiPPDURdXHiHcff3CcJurQCWspuiGxPev96XdsnbtK",
  "key13": "33cXcVj3pxANWG6jPwvY4gqKeGP3uPxUEATDMbfwb6wYdtNJC8zvYuu5gtLpTpYVaEhpJoRPrzpAWv5AYJUozqiL",
  "key14": "2ZCCKtQA2NcykzP5YThBeTyKSWg3w7JuUTBHp68RhzeKo8qFovwhGZe2pwtgrd3PbajzNUWR7hYyy6diCTuqQeBK",
  "key15": "4cbrwhUxUupMiGUDodnS3Ndeq7T5rzTEnGzeWjFtpd9oy51YDUWYtQbX9EVNrLyEmT2XVEET4qMqVNCNMNm3jEXt",
  "key16": "8xYQHiThd12bT8VZWgitxwNQxHwCUsyxd1W7rRp4vQEWJVSkkgVsJdyL647DQ4N4o79UcKy2bTJWiu6rgQGrosN",
  "key17": "44ideTBjoXCRaZ65SpH7jbFGTD28uZ2ttcLtS73E7BQsiBHoqfz9c54EH1kfHHktgyH1BA2aqtki6rTn2tSdXanB",
  "key18": "5xyp5ZRZquDNYfKdDz3Mvpu9XkJrkqHmQt9UPkptwkvZZnfCzXkKkzArGDUUhLeFPdxxDNLVxScyt96YJRtqDPkm",
  "key19": "2PzoG5T9nnNxutji4Ffz3evkw8WkZMb2956QJmCPFe1u439LbTjUjVceKF8umfsXPYAFVpXM5WfHxTdCDnR8ttCq",
  "key20": "2ktSWiedDd6zKinw9UgqY8ZQJBpucGWmBSLqvqrPhTWPQQFtDFQYh24VPCJKFiBsfT5PyiVEzwFPkW5DXqajYLXK",
  "key21": "oijipLs6aScw4dyK7AVhm19VJTLTUwPwAT54zqmqrkD7zD8fPVSXFmbWS1yPxGosZdnMk4zwGg1CyVsnXvCyWze",
  "key22": "3edyxXniv6egpNYWoqSSEQ3nbJqJUTiQ5KqfkCcxKSGE81VA4Q3rTNk3wfHFndKZt6FwTYxrBLWR4ub53aoA5TKt",
  "key23": "2F9g5ZvxEoLLksPPtJ4YHiEFmWhAhE6HZA2vT2eJ3uKHLszvd4pa86VdH9t5U4xpuBbjw77LMLGyM6pZRgF8zWh",
  "key24": "2bMD2dbJfAX5j7UjXthAjK96y5Dmawos5cxicACYjRPhN83fgqh1XrEmRaUvfjBmAAmeFDZ5NnqvuXDvm7RgBtaR",
  "key25": "2ofd8rGPTkbNrT5HQ63yZfpnCC2tqrDkn5EbKPgVjfDU6Bsd31hVR6wG69z7Y3HWCAPwjBaBH9qa6NhktqKvtMgf",
  "key26": "4Uvvy9cYvimTZjPNpNFrEHgyteZZB2Nto3pnQiChmt8pYLc78JUQiWcEJNzrgb6PHcuf6LMkdxi89RJmBoDaKxLF",
  "key27": "4vAtX9oQcgC3hoWDXBUSqbFojin9VzsAAqXYcUGwoySbTFHg9iLursvoXdM5afqrrtSaBeCx5MBRbM7Ea4LY66cb",
  "key28": "62J3NKJJyYDazPgTjyyY4M9TjNS4d6iBkwdGbib2pky51HfuFgqNLJb1piHwt57waLHmkXdzsH4E7cCRDiGyjLSq",
  "key29": "5VR5EeUzPh3fxfxDyKeoQyWxyT6y5TFE79wy8FHeokMa1TMVqXf2iNtQZ3FyTo7EidDLtPa5h984Z3DWKpJT6igi",
  "key30": "3mruNFzaVpUf3fDMACsqK4K2Nr2pSnF6e6hNoTm4eAu9XmYXcCTNkQVLd3uyj5vmTJzkXSUyYhuu5SV1dRvKvyex"
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
