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
    "Mrk52VnAkQbLTyTjU1fShqZNU7yAJMt4i312PScG42DmeJpsoAQai5Umu1KPpSiwi9pcqUWNoMxrDSPiqYfTA3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34BZ3DmXGDqq1wGEWULvQuuWEf9fjrWVoJjSKeAmikY4h9HNeMiq92rParDT6sy2r6coietvQmNcPZQifChmVi8d",
  "key1": "276V4udUvcTNA9BqDnwHLbZ13Qgz7B3vZUWgp8z4WCVqcFVo9TyNtFtxhe2nAmAMzyWRaA5V66cL19QzzqBRbA4X",
  "key2": "4MZeXb8B2dR2oKsw9zpK2h7hjzsF4deQ6xuTjek7B1UrRG8VN29Lw5pFMd9SGKWS7nSgavgm8ZrLxdakVtoyFGcw",
  "key3": "F7WHhmJAq86QPD7sDyEeMUSCHpVJhCgbD3Pf9WokZj6rcA61FkUKNL9s1ZHR1oRbQdP5mc81SCQzPKM4enfUEtx",
  "key4": "5NSeY1s4JC8PFP7cvTunCfNRT14uTAHh1njz2p1xc3KCG7AtVsoe7zqjbFVkRVdtxqWtEAEP16NFKUHhMxqHTaHF",
  "key5": "4jDeYE1hb9aBME2MFK3A62jk54Mkpk1ciHm3Qkft3YjiffLYJn5rjNLDBbdAiSiETUftsRTo8x2tTgSGW4jUDbTQ",
  "key6": "2GScH81udoCd2BYTRTUWcjFVHKRTPxZXyr6HoPtoD5nQgY7J289Fch7MsJG7qCZhEzJGXBayHjANBX5rXr51KSsS",
  "key7": "4qEcPgny9Q3wXDYzpr7sAHQDwMXrpCYGf1h3SEwruztZnk4KSxjxPDv1MNrxqQBbZ11bZ7uNcw4UYYpYYL5HTdiW",
  "key8": "4MgCeRawJijagSKvH1PNwvhwy39yMf39CtKJ65AXbigbYJcfSidVFPWhUHugwJYjxSUHuZw28BfS7uS4M8quiT1y",
  "key9": "56hNfcAman7Zvb2frxvYA8TtPUJ5vjm4rTSKQBFWjcQvauZoYj4hT646ksdsWMz2ZbJL6R4atBAMRM54mN5bE79z",
  "key10": "5Rg77tGZtVGW5N8Qz9d9DTFjpVQ5gXSEuUKtEjb2QgrSiKgXQiQmGLGgrBFXacnYWsXQjLRF2uSk9nPcDjZoooPK",
  "key11": "gHPeEoqYh9EonEDwhwtsujjZXFTYUvBtXy9NRZ71gLG9FbErnzh25KhfBCBkPjxgStcEttvsZEnAGgL6yRzhZ61",
  "key12": "5B7ULEW7hib8nCeC2hsCyDrCmeGM9s5WC68bD27RpZcteXr2hvkTWkgrbja5AM3bJXDrTbprmpQsNiviicX5vWNb",
  "key13": "2XbZeN3xR4UmPvRMrV7p7Ad7nJe8rDMAi5ev8BYeXBQ8ofSnZ7tjGY75j5LPbxVvvrHmHHArNfoSPnmzvSxCmiUi",
  "key14": "2y3SmYVRT2ZUXi4cheqbimP3nV1So9ev8e4Wmgp4cBSGLYWaF1CHUJxCYafRhoL18D7KQAZp57i2FbAJ5x9LBccv",
  "key15": "3GDdPTQqPrfjTBsRAt39HmzCWNndDS7KCwhDiLPJecRQn7nPtneyUoNZrw6BHdXdRGsKRvTJGx9PPpWs3JUPkDHC",
  "key16": "2yMFycUA7fR8LDfyRuk9ScdVZQH52f3zuegMdFHB27rawrDqknLd7MXzPMRXeSDELzjuaT3dZ2osYwwhBMniSbGS",
  "key17": "3Di8uGVGa1b39kMAGKCqo42hjA6NSiAVejnAFfrA9g7VPFUJmDzLXCBTru65nrPcR3CsaNCAbcMy2riah7GZTaGh",
  "key18": "3E8QQxLqJaqqDXgABMU7mFi57gRbgECUPhxaVPpHTorx2GXbMHfDjazgSrEu7ajkF2EkC17A2Nwohs6hJ4YNVpus",
  "key19": "2KLbG9yzJDcPD4tYoT18GqYhSPrwPq4eGMRYpNHumGKSrn8VtpMaLUCrsTEaZ4La7189a8hZ7Va5Z249RtPwQuS1",
  "key20": "29pZCqz3Y1Zzkdj5BYwpdkcuLkxamTN7mzbFSqXxH6E6yT1bc1hFWW4KfbWHUeEF5U6dBvXdWZXmnCFbYjkcs5HX",
  "key21": "4WTha52CxJ9K7qw6YrxHXAehm3fYpv5SYg3y5vjhVf8wgg11Ab4ja9x4tGQPLcYmsAB15rbXzyJmqTLJAkKxzvum",
  "key22": "ALjFoGfSLWRcJeuJzu6mPefNY4qZaW9tnwnZ3VaKEksBw2qkuHd6RbtKCkqbBaJ4ZDPqSo679ttwMKeV5xHL1G7",
  "key23": "1KVpc69H3eqERG7sQeLZA29r1DtyqRSRDddZBHmTwCLSy9p97ZfkcBRKLtfT1jiX9CQy1K3xSyESGrhr6UxQLDP",
  "key24": "RcMbnnCtpFUZ8wSAnUmR7u8v9N2KjMDdVAxwjykPWW12ZSHUvSj4UXravVsXsAkRq2PrncuzHRwzHpMegLTXBK4",
  "key25": "3PxJUcyuNjFfo6mxVhVZdps8jNAr3X9Zhg9ukiNCSyAMtjBkbNHc9Rw4Sq9a4ucEhxgzwKuRnSocq91Ge7pNsYq6",
  "key26": "54wpySYo6eHJdUsAXzgm4pJpiH8b2KkvTaun7sAQ7RdaAAUT9LEUiRRJNq5cF7XU5KGor6nwZLirE8MQLAS53oat",
  "key27": "sW4U8uKr1ZaaQix5FkqrhGZiDGaoC1PUmZ32T7hj7JXAtZFQx2vRsVMCDCWc6kV1HjcQhTc278hiMCGu7uak1U9",
  "key28": "nRySw5rGPAbdFyppx1vkCjBkh2LaCjZ47BDiHhZSWm4wy8FFBNDwccyUMSJutiKGkK6FArtuN2gmCayXpWX4NTt"
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
