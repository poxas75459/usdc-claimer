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
    "2o6BuXQucSCwABrFSGMkaX1Ea8frxZCLNHbEaRXFAuKsS8tk5QXQzr389K93i1yfJJEWXSDAvvJBAWJCNADCwNXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dKV1Y6kJ3aPR59i7V7vaBv3T4diiEgrkVUxhwQRUTwY1ppmdDcyH2wH9Gm7LLSnNufv3ea1xPTxE99TkewWQbiH",
  "key1": "4GZAHmoVbFzUqtRDQqxHwsxmabrM3t3PmEcHiGoCAHogGdzjgf4GFbXiZbn8nNE2oVoUq4xd5kMmJ1XuPL1xhRbC",
  "key2": "DcAgAqXk7dzyaLDRn5NADpvE2dGNuywfqEi85iErFyxby2yVcTNPbRvFU9DZcyNQNpst12rSioqpwSbv7R3VD89",
  "key3": "3XJjGkjvebJzi8gFsRm78Rpwen2PXvyXgrTB22kugGwCqEyRGuztY3Es9Q1jguusUa8KrsJi27rhRqxrubvXi71J",
  "key4": "5TnwHRiJpjgGMXndbD98m5V3HGsJpzV1xfPgLqDByvJdgjTrswsGSERxU5EvMA4FuvAoXSb2EuHteyzqyftXzjMj",
  "key5": "2qVzZyRZET67ghbipWzWQRY5ap79ZawFkch97YTsaCqozBCn6T2TVdYc59Y8uSuzwhH2dnC5DQFUPym9rM96kmpH",
  "key6": "5ut8A41N1Hbxke1XBfgb4VmzJUN13wkagXeWDeDSZyzAj9uTvypgfL3PEi3SiQfEFERJvKPXpP98pEqzY51sQECm",
  "key7": "5w1UMy4sQEZnp21LYsL2ZUpQ5mBnjrj6hbuQp7dorKuDn98n19BAgzQS9ZqBRYctquTtEALwDSfNkFfCGyUX4SWN",
  "key8": "ASXSpB81JJkNmhXKBAsiy9PQopLzFNRbWytXNq8pHGavz4yHXo3WYzqECCiRRHiJjVC6WG9QgiMnT7cUyGgXnZ2",
  "key9": "51Dmvmu6yzcCHqN2PSzCDGCzzPu1JnMGkFuTwN3gde3D2FE6z5K3J53P8HaojEtRhLkMYJHYSWDy8XcNbdkwbWbp",
  "key10": "4kDNgHue8QLAesRZkrtAvMQQTaKN1uHALxybzgvpfG2xGBuGLPrTBSPPT4rVEbaxzhLrgueJbDGpL6gq3oiBQz14",
  "key11": "4u3rwcvbhwTFB6PnxhP3wUXmwRGSVVQE9CcqrbrhBqUKaXUVv2sxpPJQBpThPuAo6AFYRDjHYz24z54zaWSRf2K6",
  "key12": "3Vn3YVyKwwup5vHtt7SSQj64btuxALh9pe7YKXw1ktP4DJjJg1WRWBwsZEX4L19taBHEe4ZvBKSqma1RL4EwSvxt",
  "key13": "32aCFkezSXJpj9DrspeNkm51CcAi7ehKTYDMWe61BkRAabWF36J6vXXjNA9xVsnCPpuM4uSe66giAuen4kGSaZzA",
  "key14": "VXeYVtyjxccqjRTdvy5uNr7eucLaQG9tAfpPAJAKhWaav8RKmKhLs3rTbwyoMRcFLdfLrXDLzq4mw4b1Wthycbu",
  "key15": "39En7tgUV6DbruW8zuJ77STmA36ZZaEPJ8vmaLFiU4v4n2fkGhb1ppQ8gMsENZZBFYfG1DHNquGz1Acryuf86y28",
  "key16": "4BVM8uSXUVDyEpHzDbpDgjDUaYFNCw9QUT53Nei3LkVZpAQTUmc6FE9a3YQJ9vpuRZKQcpKmj9cDWfq4eX7WH9ga",
  "key17": "5z6q4uAsfkQfKNzwurHJ5HXjwyfykifBxTysMnPPfZm6hmf2aYumJyVwY4U68FztYkW4hqYXUr72EeeYS9HawA1k",
  "key18": "29N9G7561tjQuYPE33Lo9tQVkRqxiZwcVy5Uq1F1zGdzfqULQLjTuQdu4ZDUbCbHfDv9dKeAn8WTvbRBtcwQphFi",
  "key19": "46GWHw3LDgifRD84dVWH75dByNZ8NxQkmaS9MKk8LXwTFNMT4GMkCkPeGVWngUo8GQxMtiMqp26KNkDeUH7HYhFp",
  "key20": "pJUP5ZhNoaXxg7mMMM9at6D26JjjGYDqNd39ggBAVsZ84DyTn19oDrtT2MUpyBH9dtLFyZ3wCBF3NErDPDCgy22",
  "key21": "4K45j51jn4aXPFwfPjUfpDWMotrzSSkkDw1e8seW133Jmo3iyNNYtRrDUbEYkCCiMTCBBTSxp846573nRe44hCvj",
  "key22": "4smxEZoCHWu3uArtVd7Qnf8zcF9Gfq8kcrHefwwf5RTCQV43ZJxgQ9nbiX22AK7V2a9hKxgwGcmtMiXg7aeXB7cn",
  "key23": "2ajnfnxMpaaZjB3A3pc4uA56MYsnF6YXsof1z6gkmoP91dw4po5QSRVge1TWTA5YAgJPxuszDKz2SgauDvqSRLTD",
  "key24": "5GMzjnjiYi7nAN6papqEW1t3wGEwYtU3wkDe5qiazU16PEpe8Ke3qPcEAPUb3GJCX97iVF1bTaHCwNZtzzBoPRC9",
  "key25": "5hMWDTynmgsY9vVgT1CFH7CbqiBtj3i6GyFc1oYJzQjBL2UuNT9seMmJLkYRUxSzxRMzT3vQvhTTHukMp1qmGaaG",
  "key26": "38HAtEGfgpYHr25E3YhKzgdk48suztcrssRJ4YcGz44Ub337rvXh4AxzFheK5yCtXx7xmsoyfhect4q8Je7btL3E",
  "key27": "hAMYTLECfERE4SPnJFqSZ8HpMiTnsguyhgxfisaQUJvxc2djyxwY2a6xJvnxLEHaQKJNTxAAT9XQ11B1dJ3PNKY",
  "key28": "3wVD1C4szmeFjZmwZCBu9pk6Fs42RUJXAzJaj49qMXyXXLDAPTSQVqXccdPQMSTRuGzKh3MMWbuqBoZvuzirMUii",
  "key29": "pDmfeYf2CVGxkVJec9NyzqgthNGoS7eLXJvtCS4TEy7CuajcwmA1yEfhxxF4E2u8q2BQ9ujLKd8eUYNF8at9UGF"
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
