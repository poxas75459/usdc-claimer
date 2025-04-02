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
    "2b3wyVDmDjCMVTLxXaPAakeQsFaNvyLasEJYZxALjvqzWAxnebQrLFXKsnygBFTSatDEDena6XQbh6dhbuTXfomz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yFKFMKPxRFtKyRSCKtguSMVCoWR2bS87mfyknT9poh8NVRn8BQZg5ds6WunVKRzBunfdpKLitdqfQAUbfMMXz1A",
  "key1": "665ifT1VQejfAgZWNgkFgMfdHpjUNEEXPkgBwdNS3FfVkCFPVySovHT7gtFsNMcT6hdsAYzYNpztS98SUK8dwkvV",
  "key2": "3HKnad55CBkke2ewffwWMaYcu6UdWjfoe6bhUJSvZ92tW5FRvd8VqXWXBD7UXVYmaaGqjvCcWc2umzREpkhg39m8",
  "key3": "hK21yBbDGVkPWs1m1Xfp8a16fMtnvLXYwHUqGSFpMU3euXHPSRkjVaWa467MwMDJw6kWu2YGpP9H1ow3H4fbrhH",
  "key4": "46DL9mzvrCYUzrL56y4JKZwX4ndZ8rdSxXmpXXfmrYWmSxNjkvncPFEjvJsN7uqUGKFeXdw8i4hDrA7SgKfGUjsE",
  "key5": "2hLjDqVC7pFTMrKGpxrRXDt32CDaUJdzTETpyYKkoTPHcoebCcr3UoqwMnNbzwK6th6afm38fs3L8KwTd1UJRa8g",
  "key6": "3hXBoqs1zPQCAuLnJYyLkP8MtC3rpgbXHUXKY2NK869zgKVGh3Lo2MYwQSUtQYeKXMudBZgGghoMpJiC7C6b5LXA",
  "key7": "5erRGE2z3NfruhxjNiUwR7kM2WxMoa2JvYdK5QEeCobd2s295fvNZ3T7uUDwfvnxmz4zx1TQaL2uj68SotU1qrRS",
  "key8": "46iAhS5kL3RyeWsESg5Hqru3ZUsvZeR8B95C8FqDtsgk2MwKJ299kmBAkS76W98bxEaxMaMPc4VPpipUmVRaef3w",
  "key9": "5vkgyTRSythZgR3N3rTm9mBa926tZdwBJHd213zi3DYyjMh11ZCTRxeUWRDkrASK56tSR7XqeMHUawSAQhfUVDwc",
  "key10": "2DUr3GUcY8mgoGVBC8Qzgz2wQ4DvCMaZFYX1zYct53Y3GgeArhtSa2o2pFRHpK6evittqRD4K52TvWBRAW1emkb5",
  "key11": "52cHiQ9ssEcsDRAPvQ1CnpDShhuBNXEq2uk1mnDsergM3xGahdYeGzPwEm1omE17RyHfsvyjAkPnHosWKZsYvdpT",
  "key12": "ydUQ2nomtLGpBxvb1LEeMobm33tKdnVE3HTL63LrpYdBbr9VysJoSUPBbkQP3JvBmTmYGT5e3GcCNDfpNW7Au5s",
  "key13": "2C11UyMvXq8FRVQVz9YNi7LCYMkHGu3zHneytS5TeV6x3FE3nyRCssvH2fhRWVEotV3cBt5T6hXFSRgPpWHzQ2Cv",
  "key14": "4HDvUfhTx4v7DbmYSeh531rzg3SWFi4fCzZHeggM8H1C8Q7GEutsGg1ScU8YCLHvHxi7noeGKzEM1KNeNTZZd3z",
  "key15": "SKk1L78BLXYcjN7zSfQkPGunVQeQxQEeQ2e1Y3ViMkYbrf3xAJuoox2GkAvdEjZe9naidfYwW2KcPgRaNvqcFrA",
  "key16": "3TRKnJogQ7gS6LPERbaA5uFpdAPCAmJeuyqgMRGe44uXJfs3F5DWEJ1bSV5DD9xAikvnrCbL4696hdL1E3QMXhYL",
  "key17": "4bFCcN9pBfFHVG27kCSLi4vVnuCRrCEKn4WBQi3vmQWNF8jKDxR2Mg1P8ESLqV49bJ4tha64YdbbXUuUAmcvpMUe",
  "key18": "7eFZMZfM6RxhifZZgYJxU6tpGRBn1RQfJpErhXuP6d5FtLNinRvwEdQNPwX9JvMBKaApP4ArPhrmHJphhGSsDZW",
  "key19": "2HkKRBSAvLhBQ5Gq3USuchXgjR3VRJAz4rhktn1GeaRn592CrhdCvbsmhUDDVmG1HuUzobLwnpXFswvM8rsMbbSm",
  "key20": "3uhRteSn63uRFBva5JjQQomKuxBAyH9dqvMwWvTyVqAxtsuWf9LmtqZnk8MPuDthKtULHk2sUJ4fEad64Dz4JwLM",
  "key21": "65AuJ7iW8xaA38pWh9FkxRgxSb3sa845e9ewBC982GzRbF9gFJQz6Eti1n6sJHDJkXEphpMS3n8Xm1MCtmYpVmTa",
  "key22": "3uTqZzY25cWUgopF1M8NemUovpAXaApGnApNmmrmDUvQ3naPCG2QueZ3U9eaDgTxV97sffR6dtj2sUAErMqJ8VnP",
  "key23": "2Std6V5Mh9ibLBbLEvrMyGCtSdHdBeKZQ48NmB7ZFCWxQCbScryquQz2fS94Kmm3PUXKjpV6NWZbhaoDhJew3LYp",
  "key24": "5sYk7tFrp1TYz5PdtQ3oo3BuwfnNdU2BoLRB3RrHPMKupyTHoAhC1JrMY986thUfq3c8jURYSpmWXaX7KFms862o",
  "key25": "2kC1WmxPbyrBbZS2UxD3ZZXqENua1xhK82o38RyEUpkM2u4kmyWWUjwVW1rfnxymZADo6hb22Sfy8kKbPvJMndVn"
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
