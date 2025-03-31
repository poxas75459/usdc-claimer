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
    "ooAmwj15H45VudxWPUV9Bh4BCN21QZf4XacrFGdWCQA75NrDWzFNE2agTTFVbNYchAw4b9iyTEouHgrEiNhPDEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ebLep8gMoxRSxXz5WbArtit7onZr9TksKmNRa7GcYyuQrF92JcdMEZdezh4aVcjrmGAtH6dpW2tTBtNWcUzH4Te",
  "key1": "4TBGYfgcxeCeHbepGfEGtXg3sWPBKwgqYjVkEV71DuVuD5jpBWf2HEuJWS5b5dRsNSmrgeuapo8Rpvip3WSxnfV",
  "key2": "28M7Mt9rLFaB1fG1EVBnNqcjSWpfdXU3RoxxWJEgstRwP8PJeKc7ukaniMHc9a9sqfRkp3RLrokWU1sQr5ec5k4D",
  "key3": "3NvwoVmE2kznkNezYpnMGqTqbtFWpTAteiAcmuP4JrHR6KGriA6SUxJgckRH91AQd4PeWz19GjiNNFKuS4U8tHE2",
  "key4": "5BAag41Pihg62kUyth7mQkwEKQEgyxMyQT1LtBLWJGSnhyLphdJwkBDNcoKorWq31oNCoK1Ko8puoFycecaod2oB",
  "key5": "oeFbWbaDXzqxnjcNKPJHJMxqCgVK5PFHatjMWKnAdHmvAEMDgdf9mpstL6Vp6drkAzPwfuynxju4BjDAnBJp83u",
  "key6": "4xDifoyMbjovbu546QgwBt2iTzBFFhAsTTesUKF87HttKXnt5dgWdtQhgftJvM66ed7hdcPpwvvdXaY3485xVz6v",
  "key7": "5gLZXusqWQQpWxcGAQk8uinqvQ6h3pkpc91VFaFuJja3p6bWVhajizKKxbPRetVFzxS5jGHGUq81EPxZr7DwB8BR",
  "key8": "4UwSdcDDVx3QMqyETSWv51k77Le9MwNt6iF4WjP3PraBzJtwzgRmK4raDWU6HUoVDZMGgDmrcGThPWqVMH7GXcRK",
  "key9": "5YieMipPhhFLDnnqs8PvxtE6zBGpCnKiprAjt9RZ9bpiWh6kpuEyQUQXphbHo2UujdUJjMPgAZhXwkUhhq6RFiqV",
  "key10": "5ChfjcSQoRYdRtcpsKrp9Wk8eJnuhWN6bB6bCH5G3qje63oyMB5HsFBR2Sn6n5EYpWGmNcBh1EVuLGFBJY8m1FCp",
  "key11": "ML1fPyTthhBy9G2SAixKXDQRV9qF5M9nVPwvWSDjkV4P1G4NkUYwNG1doaPDyYFsr9pWd7JwJkfqntE6iAxMGFc",
  "key12": "rYb9cCVJVCNB7bE3C3exsoxrt2rmPdkM1PBgt9eChCprGWAGC3Vy8xTqKERNQJ6fGgnzQ2Fsg8ucxV4cZCF3b99",
  "key13": "5PVWoMD8FH5GJLhDiuj8WuewuTsBTCyBdievHiu6XuctBFUBXHXYXseaXQHQ6L6K5fLcfVAhVL2LfBxVKmJj97oL",
  "key14": "39a3Gzza1ZeVJXhk8o6wAAJaAoReAyKEnK55Xd7ri5JNAUSe6gAsN96G436QviAyWF7ZS2eCH7tyyVYGSGz6faK5",
  "key15": "F3JDEXZR7vHdVkbsxcUPovaTYbJJYAqr43YxCfrFkq3oLSfwEAPAUZ1BeyNHLAbXbopCNudS4Jub79PGmjn37j7",
  "key16": "2kbUFpWbfWB4nRWjpRzoNo8xqCodcTFbGY6sCVWQf7uvbATEfz6RYb65bc5SRSRFyLKMbVy4FdcnAeqhLd3CMUT5",
  "key17": "4TF3UkbSsMD4R7qmhYNKJoNrhy2S8CibByBQQMmNpEseRwfgxBzG5Py8R4Pygis1rVH9G15Jp8h3baVv8jv1z4bD",
  "key18": "4eL11Mx6MZVknKb1ckHzUTyZEQQDj2VXY5fP7sXSkKatFNcboMTbGBDUJfdk5GtwzsGp6PefqRjMBM5CEKyXQwnT",
  "key19": "5aixRd1eZBaYcwUh45o19Y42nQcaDwp2T8vbNMpUML4EnfStjRMi9jeBvYGdHeo8PEqjrmb29amVTjovstPWZNA6",
  "key20": "2QhzwWpaf2iqRWeXYasSadByePo5bRvhKeWgTo6Qc5sa1U4vkL3oMGhvzJu8oXzSD5kcN5jMC6rqNvbh96YmnnJt",
  "key21": "rQhNadroyYyRYAQut3pJMynt3xUhZ1nrFqNLrawzhwWFTWQ6Mf12upDqu6zxML8C8WsENJ74tTLJfY15Ajm8h58",
  "key22": "4yfVGNEurNHKnnTwoiXeR84WAHFTiUULtXgh32EHJ8wRbJvqtKKrxCP6YLC2ncYJ6bnMJ65P3eCwyQTVhVTPfaB",
  "key23": "36VBwWrDL4n1bKXAmLjtRbF1HStpwJaS5v4xW6WsSMLRPEqgBsfMf1tLnpkunKqtmDSv4RZjRSn2tDXS6MZQAZo7",
  "key24": "3gvACigB3cTvqFXmMfxeeUcfxjQvRVANa4hZZ4RKa2UEvEhg8QqiZ2sTUcvZMwrWgKbgwd5a5D1Wu3xmY336J1Pa",
  "key25": "2tfQjV1BPFYKZtQmXmH3A7D8SLVAyRP8ZCd8CKTWJw8UJg5aJjGMZtB1bHnFPQK9gkhoyAbdWenoAtfhrwQKZeWL",
  "key26": "4JQHL6sqMx5bSEs9aZnxMP9E2JBYaKvhS58tDZxfGofi8pJQcNAqMMM5von3HcUcteuWGKoDkzAiFT7sBtXkEwov",
  "key27": "54PYRveefbEyrdNvNBCA1ZhpUcVzePmKEMXpVx5RTVtG8FTDnRjAwxeD8q5j6gyAgXecKipqPtgPdsDa7EJrENCr",
  "key28": "CBWWgcD9DNQvsrwqD7MYNrhqSof74NwNNiK9CnUNb586Ak1o27JUtfK12p1xHq26LGQwEppryWqguALGXrxAv9s"
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
