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
    "5GujtMEc4tXY5cz3PBBzVCAMtoRUQvEnRU2LpWzKSsexZBDvpaXvDQVDgx3bhP4m3ztXHZso99hu158zKfMhtyJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uXuHEoowLoCoF3NNVQum385BvAYjRKDeBRpK1CDyWcezzRsJrJgXFFwCGgQqL8a9FMwoR9wkmsD8h1zHD1BSYd5",
  "key1": "SK9eRJQ4Fznx1TwKKsXJrQqfEdBZjZxhDqJECnBdBtm5uVXgTe9SkpS3u4FSeK3V7QMRcqgegCYa5SNnR3QBZ6i",
  "key2": "2qsrrmvtDgoLhRdQnNqX9XabqRRAuaHx6mwd4Ek126x12KAEbVTFiyTcGGmrM4qXtsiKgi6Vw35FWtaiwx9Pebuu",
  "key3": "4TM7gGX1myAtQrB8CXipGYwPUzNHUMpANPb2tzUE9pPekeCRpPpeQuNbRxxtNDxkdKwJ2HFHdMpUcYcHCfGftqtJ",
  "key4": "qHV8Te3K2Saktfb3tGQCPmiGY9sV2qt5kKVXBCnsBCnMR5frMMd1mAkoNZ3BoFR3HqFxE67zC8sfxxuzcSw4JoL",
  "key5": "58ZsVqP8rorEGekPR3wM6U9VeY8wVSPcE8Ysco1aQ39C8DGDxqMFkEipiPvpdU8YULeu9YUzPnsZnj1zwU8tLSX9",
  "key6": "48nAyiSCHN3KxVBwJR8mghHabserDN8M1mrSDq99csCrEHAkPZRjPS79rLBUXbKBP1JAYQuHVt4hobKHdwDB72oE",
  "key7": "Bg8djnDwEsyFTcFtyZfFrUvXECgBtVzmKzmwZHLV97bs1JEANstu6yEyNkoPjKaw3iA5NrWeMv9HoDynD5xEweT",
  "key8": "5ekvwDXR8bLnzFSaVF1HXFgQp7byBCSW5TpUpKgEqegiwDsJ422fP3dgHb9m4XkTXuKNCo7AF9BS44sWFJHHzPrz",
  "key9": "5Zq4yjfWSZx8ZzhH2gNapm6ZbfSTmP4Hy5qYnQz7Ko27SMcu45dAVEYuRyy36pTACASFysLCkJZfcghTZKejBwXu",
  "key10": "4t3zXTzqv8qMV1CuagzPe3T2DjDsPGBYipsSbSwWDCADh4UvGKh2V2WHVNLFvygCCNip7mXUg4QfznNbbSsqG7eN",
  "key11": "2co82ZRTjGCAUXCMaHZAUqhwUJy4bhvK5ELgAW7trLSjLTMV1k57KVxRGGiz7JAWeRUrdpy4MjnYonL9ZWobNkFv",
  "key12": "2xdnPCpykEz84Q5zhpiZsPTMRkex87Ki2Bpd86BRjSrM1F4KXL6gsRe9tM99JSBPgeCqHHU3m66Rjj7Na7X6w2NV",
  "key13": "5RvuPzbXzS5DsE4F3LqPxwAPNZRAmqTurmumyFb6pUbCFxXvuZaJFcVNjFLP43SMBxhSMSrYPbkLy8SX3ALXuzUu",
  "key14": "3XyMpEGgt9ScCqUz72x4YU8AUEPyyyTcQJGavLTr9r19xNg7bkDw9sxmSEngaScBVrAuuJLk8j1hBmCANvGmUPQt",
  "key15": "58HsKQfAtfMsnLuPQwXHPwbwJxhR6W92LXDSJPtiGhY19fWyjBrGsNvn6pD8PmUvip8g2BhZ2rUexTG2S6xdgsxn",
  "key16": "5bYj7EE9AJWFPMLVjTcPjaHxpNZK72TcD9iX3G8MweghSgWcBG7PCCdQTKGPnfok96DBVnUtb3fvHJtUuv8WFUEF",
  "key17": "3M2yAXs544sdSN9kDCc9cL8MbkwsfTh7FccHYRxNAzjBmsAX1n5qTLfGB7DjzSQVU6WXd7gVYip18nTwtxYy1Zzc",
  "key18": "58f2pipXjc3aR5qwhckKHv2rWSv158WG4F1fD7KuWt3wxFmQ5rZ2hEmBxNd8LQfTRxWLZgrNyHD4zJcSUKordN7V",
  "key19": "2FoKSuZdGqpXKvJ8fo3kpkJXGb1yeacyds76wpZaTNfgsqChRSKfJi1yPdTsuSmLr5KXAzCbGP5BBF6JhzVubu1u",
  "key20": "47QkEk5UcEmoMgUFMQmrxTNFBAiaYRMpteTxy7ZVE17jwLyiGztf3LrX1TuNfxZqgzgJprayNr17jAWypN8TGC8C",
  "key21": "3rDGpWww7w8eq5Uj3RUp7HWktNXrNnmpkS7hm3wfigVzVpXcUFuvQqrL8oWvfzVCFPd2frMx3DKbxFSxCBjGLohr",
  "key22": "5YgKKdHMd8STDkggmVnwLstbLKhXmnsPm9T8QZU7o755BwL1TtZByu1FMM4nkgukPznFpSsef3LQdY5rqVJt2Uyo",
  "key23": "2AEaqcUiYWzEEF9sGHAMUTUuvQEGAa6Pa4pmkf7EyqMbXNCb2fHsGfkpxkwiz8S1r8LsZXH5dRg3f9QRE4QnhSdz",
  "key24": "2T2PzjMtBQxWA6z9qJbvsDhfaoC8MCmy1NLxLZgoNEExh7HJsVFMawrXCd9dg4KWJcLr7V3U9yz5P8BeHqybL7cF"
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
