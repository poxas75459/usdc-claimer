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
    "2FVoyF7GuykAeNNrNDzhPnPXEymggE1RWqRMZdVYynaNXKoKAYNUPd4Z3UuwfAK32j9bSFBZLeTcajER6jKXBpDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gdGFPfLrh7m6H8Tz6yMdb3bQuidHvNtjB5A1yCCmcSjYnqw1chpVifw33oKwwDA1Khd6byHTTYp83yJ3UMg9qZ2",
  "key1": "5vnYEyicXahcHyeqQF65Wt61MfzeyMpSEti3pHabgnkDthjUyzaBQg5sZWi8PGzgoE8kdfmtBK3V9xa6tGiusWvT",
  "key2": "3YL1UbZYfP64Lz4cs4QtygAtB3doLb9QTXKixguPYh9sAwMxrnbNLR4L64sSrWnk3PbyHDPW8CKqBJCxXUSHidPa",
  "key3": "48jw1G3E87KSPw1Wx5bcz6Ehqfg5Jiku5ntdbPHq545ndDMX1oupLfjMgAT9ReMZ8Bokgg9WrpfspxSC825GGEDa",
  "key4": "3eCzXfGrj3DWV9nPTZ9pVymBSowaubz4RuaiDt6MqmPPp3ttmj3p29DbhMGCng9n5XyP9Xuwm5NJ2YmLVxki4rH",
  "key5": "CPZGHAjjb8xz6jAU4HQfZqDv63fhaLVJ4SRGJ4trhd9nuEkDNFq6rASfYebLeTbq4icEnVhLZx5mecoSGr4ceGi",
  "key6": "3uEHxcHRthMU71nrFxTFE5QNmHjZ16Xj9sHsqTCS5TxfHwnkCVh1UKZBA165G8XgEHxNYtStUTuPSoWBTHUH53NV",
  "key7": "4gpj9WZEi2dNXwVXAJ1H8eXuKHatSTzKGEAFY9uy2xnQAcs32f5pFyCdcs4MdRafJK8mknnoGWHWgnYm4iAEjV1F",
  "key8": "Yzb7jzNk61Min8BexKTFTXzSszAbrVgFS2LpazQQW3dBD5bAqcqaVDeggnEgNwbEKkHruEYCLyxQSPKFrY8Aumc",
  "key9": "5S4M8CWsoNFHsfQir4ezQuQvZkTCP49hSRqjYw52BUJYVUjGQ87dS9s3Ga4KqzyYaM9nwydE752aGDM1UoZAuSFY",
  "key10": "2Zd85Zz4kESvZi56opTUVzoSUDbMa3mwEyPu8JKYHRSC1TZUVP75hMAGUbQhs6m5LzjKqV6T6wSNvonCovWrsDCS",
  "key11": "3K6WpjsLLW2nxFEMCy9vSygPA4TG49WLzxh7cDtJwHpGcKzVPDiGa9fA4sFNrtADgu2139RqtwJ6uFgZg7JPWSWF",
  "key12": "29aVjQ6aZKBT49iXjUMmE8pF49VYY3xKqcdMGGrsfwFi36Zv6HjJZmaDVsxREutk2owRoQJ2FuKjBhcac1BL3bMR",
  "key13": "5JHBaiEfMRxjVi9FYRwtyWmSfWZx9FoMpNWdVC8yLwdM4EsWttGH5HeaSdnVmYt4UmaKTp1ZMbj5VrTLd5ZoniT7",
  "key14": "5YaPhzKg6USHUs4BK8qNkumdHrwxnXoocuVVGhjttCFunPuLEsbdujbc9CGu3e3WW6oHzYR8EremzKX5TXUWgsiJ",
  "key15": "2DmrkCbguZDTgh52kR96WY7XW4J4tBsxcNqSriixNLdE3jr7khKy9eZqZG3swJr4GktjRrrgyM4KV84SySGe8PTB",
  "key16": "4dQZpUMpndADp1YHTRNw9sBrbSJdGkmurYqRZNjGL9CViz2fRxpSBLD9miQMPcAmMgdfq1Yeh7KAjehUFcNn7tJq",
  "key17": "5hMGa7Wru2u33FPB3A99CAYmJ2ArBM4QrGei2oSLQxMBggxx3Hw7MpmxuvqjL7UTMNrfRR3JwLXQiCtbZx2CnBhT",
  "key18": "rcCVViJioithGbCcDsyyFyy3Sh9sUf3MgH3Bfod4BxQrXBmXFmcPC4HN143rnTDX34BXEPxxpDP75Rghr1FtKNm",
  "key19": "3MaBrM5sWib3eTW3Ej3ezXoy8pTVEkNdpA7SsyKXEDZNG1PRQDh267k3e9k3Co18JVbyweoHEThzGYZmeZ42hon8",
  "key20": "2PGDjmZGTP8KjZCUMKyoigNyrznZj15UK3AqnoTrF6vBrZE9CaVffPiCrazZorRiwdCYBYPhh1VKXjax1x8zNqrp",
  "key21": "56G7pqAYrA4R6LNTfa9HfPtixe8dpZMiqbFA7DQMq29hm3DWJ4HSjkwwGEDhvoaEG1n8mCrJpr4ZRsC6FRUCUhoT",
  "key22": "muZSfGrEohPvh6ti9Kzjj67DDFNHXdGgp7mquru7WJtryBHW7N1FikiYAJomQbgUtNoZnFSv73bhVtYBcxAXFRz",
  "key23": "44k3tQidDWPa7C3EZRoaVLWYQSQpAMb1Q7Yasbfzr6re7N1y1URL1Txio34Ef2BTTc9UU2cx3raf9gxHbNWsJoxe",
  "key24": "yGpNZeLQGUSqAyL4sCBe9Ht73mvEzegG58yhvddCxjRzpCh6J44QEXeEFeHHTLRbePhrwv8PJ2zwmiDe7xUVaJG",
  "key25": "jG8Z9iZ1y2XVHA13edYV5DikKUWcPRFUURQfxvEkEU3DoBD8v7QuUgJFhZRQ5GphVdPxcYMVYfaqaXT9iHDDBTG",
  "key26": "4YLYyDYsrh4LdczgxZqccDKbxes4NKdvynmRcwCLtCxWwN6J43guWxjwEKiW1bHgSnh7mLNkp39xC3u2K3mVdQpE",
  "key27": "2d4intmRczK2qKwC3jFoeUMK9LXYZRBS6XjUVeMsSr7sYH4iLctAQEeoAg49vxewXrnoup7fVDF31aJSnU1bP8wQ"
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
