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
    "5A9BvQq8fefuUtEh1oydDJF4194w6ui1T7okCD6muA6Gv1KeQacFdXr5NutaxufrD9iCYLpTETiX34Z3agFp32HQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zDRRaaHADEWzCqGiDy3r95x3qLNgSWqHC4AQ3K98VsXNvnWXtqum8HAgv2A46ipbDrwDd347L5V6QL5bE2quX1S",
  "key1": "3y4MvwH9aK7TWWZCcTnUKkWmStrzNsRfEiLWnan2MQTe7TVCD9Q1bXaGKCNKkDDXynXRAvUgCTLp7oN4reQsQYRu",
  "key2": "LJz7ef7PazUmJZ7JrpFwfVZkuJMJED6JPuzDBrTMSgiQ9KmX7vZVHyVUFYhk8zx4HFayTaanP2Be5ShvmLcstKm",
  "key3": "3QH53UceHnLavxVxgbVNnLkv8skCKcbbwCr5xdL2NiJwBX1RFSNu99JWZtNb6pTRyc9mehDV8mo7wzvxrrzLJmGK",
  "key4": "4aGPcNHXcKgnGLJnvULUa4uAvXybakkZftuGBVA4YBCs2gu7xCZBgXP56T48HQcNXb3ekUxvNtn9UQnQxWxdnCto",
  "key5": "3ZMC1yAY1DS3PQbyvZ5A5VpiM7WadnqtkZgMRf3zVLACwGBaTbqwWJYXcNULnRej1nBR474AhuGxTKYzPNUVAUey",
  "key6": "Z4jdC2QvCcqjLawCJjsWRYCframiGCF8xRfUQUaBJ2W8S9YjWtWxFEHkAqZRUzoYAzewKJPbBqDENhB5Ktj6giP",
  "key7": "2RAD7eS2qWddxPLs4gs7YuBz5fmsPEzR8mdExTav4PBWVEF5fD6BgsfSy7hWmSCTopcdKSZpbeRjju8zQnUxH91P",
  "key8": "aytHojchfYrhWeL2t92KoiKG1AAQ8ouvtGX2dev58J3myqo99DzvtESKrUZjC3DKyEv19dRAv9aTM3M5VXKUnc4",
  "key9": "44mJEBo7PAjEsCVADWtFy6Yq4wuK7d7TPEkQB8XiUvMLgi1KyvQRWgcC2jebj5ewRD7twMQMQNMJ62ypf5o6pFwe",
  "key10": "5JAd5Fih4VviNeEv1XcUFpAbS8pSuDemPL2Qeam8AMXuk1TLcUBN3K9onK4SjZjYkFkFV9QMJ8AQegcFwq8pkSR",
  "key11": "5siZsgekRnoQ6kiEVtvfxFrLnGMPxm6qcgxpbScVSgvwBjkJ1G6nuAyQcJZ6214T4tHZnVURUfB9H2etFs4je5Qt",
  "key12": "2y5BXqkKpDataGKrDm6H1X3ZMSbzhsHfRfV3op2HcqswCTVASishQC3MemrZ3qEXbUUNqLcMtgvKFDBFMJXiq5S9",
  "key13": "2tY91aqrw5yWCMpNFjwG88doBAarf2kwjeZS1EYnrQFappjKmDxqSpcZkc8goKJRBkmsDLyCs4wxmYdaNrTUEfQs",
  "key14": "MwbiYg32HFqHeH54hbTABiG18dvEiVCyddW7m2tSZRo1zUh5gBFKSjwNwD2eM4765Z36rRzbHjwD4uhuagsqJgu",
  "key15": "4WHQAMJyhKvNaHewNbVaCdxdBouLghpKnUh2eEL97aSFaapQGRSzSSRWo4KfYbBa23xMavqsnHN4D5hhTpXgisg6",
  "key16": "3HQ7ZAqfA9WD9Yxn3yNZgpjFyqQo2aKRH9Ch2pNih4XZ14HuNmnEpU4651VUiiFNvY5r8onJ178v6aKQXi7TX3qd",
  "key17": "f1xk54NwDDFiCQRXKqf8XzBtjr2SP5ewbBKLrDtjkQxyQrtmDzUQBbVHkZLfnJSr3SuKTjxUz5q7gCRLWcCiikJ",
  "key18": "gRB1EtASFvjtdAgFPLs8BGAM7MgLrHTmhjyyLNsL3iPaswosyXqsFCmkfzjL3gLbd5tWXt2FcWyKuaATcXZDin4",
  "key19": "4aMmAuG3Ey8YYbzxcTH98LpDt6X9NZpsjD2X2A5fEaTH8NKSVhLpVKNR6yJAhBUT5oEcEeWAXvKie2vzwBpv3wJJ",
  "key20": "2MSa4Z2aP5Az7YQD9BEQzVMpjXfYRRU9jx2SdWiApxT1yV3bEbLcmhoQZBaX1XxX1D1swaJhrUW4ksUxWwg9KFpz",
  "key21": "2v1V4LiSyZgJXoiddhe9DywJ1dMdWEpFw1mZ4CAdWJWTYHtLqNrzHYG8k79NEn7BYG39T1fCFa7ctBbovybcUVSA",
  "key22": "3yB7MpMShEC9iZJ8iKu1WDkxnGNBd1BNiPZKiTUwcya15ULiFn2HbD3iRu5RzihCbp5dSWuWEXHcF83f7YTZBZki",
  "key23": "24M968VWowWcNYqkvh9E8o4YDZjAdsdj1qSa6qD4g87SUGEYW4ecbMqNb9VeRYZbQaXK9poJMcSrkJMbbRmgvX81",
  "key24": "46EnX5oe55fx6h2HgLQDVZJ95g1SvTjY1Uu2eaVXLpESLBgdCkiFdJF6ioShSEaSix6j5hH7dRZTAsFmCs3mFbxX",
  "key25": "4Qz6eEqwkqAaZMyDkySSGv6xTwgjNZhT2vnQcPkJtmPhoRNtViYDXxuCfiVhS74EuQRStKhuWc7E8db9Z286MxGe",
  "key26": "3x1d4zgY68WVfXCyYWb9QbqmSNr7EtfjVFpP3uoNMWX7TYu5WFBffbwefHYDnFbgjdjEY9krpUbU5uawUHNUe5zm",
  "key27": "5hzzBW6cuNNSNxPpCfDjCy77dxeiZFKDzwbAmDnwUxhbkuEaoaY8y7XMiMN2mquuCBv7MG1y5JM7T1GpcDi3ZR5y",
  "key28": "PsscYtbmFP1mAUubypHTCH784Ev8v8nFdj3aqwGq7Ge5SoS8ei6P4rnqQXUG2PJToSvni1F99WYZ5seeFTw9oAT",
  "key29": "2kwMtqeXmsCW4PbcVfDs4z2i4gB7RNcsUm6Wtza66NW9jGNoBn8kaV4aSnRQmKxBH6MDx5Tr1ZYo3hJPbVeyo7qE"
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
