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
    "4SwEw4FfhQ4bUPm7Nr8GqhLf1QcwBBt5rQ6QxNCXsaPoDhjzycr5jvi7UzUQVGYCXtfWUK1XRboarrWyKwFAnPUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37XULkDL8f8E67CHDmy4A3Dc9X9iHBgnTad24KG6kJXqT8VpBouXWba7rFX9vNcVfPA8x8dvVPBkdhkvr6gUUN7w",
  "key1": "2iBRGxiXmGu4GA52wcBuMAdegAYX9BRE1Gphj7fsQ9CKiHGusPxSvmZS8HiTDokZ7pK9ZPoHQQc15dY32Ujrjcz",
  "key2": "53jiNG62hh43FjZRxuwQey8WtiAXCdcNGRP5qEY2fbMupqzt9nniZT89TZyvWDea5qQkA6p2s7mtioqztXB6XYz4",
  "key3": "euPvN3JyGggrpbrpj5WFT7F3zuce685icbHd4FczSX8JQDMRfqwqtB7WSfDfin4TfU82Es2Z72dzmH6aSKr2U8x",
  "key4": "4EnZSSTQFzQaPXy6pG6Kby2quzmESj5o8WCS81sLoXz2EnNwwDeVQsRMFffbKWVPiuGvgP8rLtpxemhVnYDPzUQQ",
  "key5": "2PjPUHCXb5Z2Gid4KvC2FADuvp5YTGF8D228qxZuRQjitu6mEMmSaBW9zkSzG4Z6uK37FDFYU6rLmMckh71c7Aq9",
  "key6": "x1cX7SMvaTLH3Pq3JKLDp6eMR3E8JBtFiBD5wLwt346DYnsJMSZQsAW5LEYAzhW1NoBJp26omTS3dSBVcaf6qBk",
  "key7": "59tQURY8YDdhXiNbtjBNakn6Q1wNNxkB3eEKgfpjgawCuCuz1CQ3XyJ4piXUtRw727qiy6usq2uLNRAVFZ9jr4VF",
  "key8": "ty4AxDdKso9DpgD5sWZwwbUdFV5LNfz4k7dzkch6DqPTJGY7A76ubp4Ef2EJHhFkd9V1paGbJLTdJnTeRbmCbWZ",
  "key9": "4nptdavX3ineDrFN2toNdpgQPr9bFVY6MWDnNCd1ivvNFKmwr1Cv45F6YvhEdTmsVsn97A3u2qCSrPgeUkybbnZy",
  "key10": "2fq4w3f4DzCKqwEMRAWKLVmxgjxVMeNRRjddcuJ3zbUwBVB8vhCAvz53w3DR8Mg8tYv1DCVSLUYK38ks3LCYfawW",
  "key11": "2vZh3EinvX89BTJaBaQoFFkbLohS2sT7PBpzJA1PJ3WhMkoKoUFZLz5ybM5TNYupLsTMNHgW2UWMdHauvznt8H9G",
  "key12": "2xGEmf2hGgv4jaNRYn1cN5mZaTpDNtF2Scp9bM8HXi882p8qVwegKQ2n85xwUbgHJANuuLLFzN4jMsKDutuDjR6F",
  "key13": "DAd8ipTUWjeiqWnwHAbuKHKzGDKgtqcqLsx7c92N4mn6CFtAhaC3wvuoWsx2qtJAdtL6YAoWL29YE3rQSguqtMj",
  "key14": "4Uz8ouRFhzh8DrbNqtuwkr287t75hCfpuDMRUwyJwfXHGCooWCaroydMec87LCv8RNdFywcxHPYEeDFNNND8P6ra",
  "key15": "JkgWWX38dNJkUoECqtCH9V6x9Nqj3LzmZHeQrwaTMkz3gQsZadbKCQ777EABc3ZjLFysMABp9hCUyZF58yz39cv",
  "key16": "5U38W8Kvj5LonADYFMV6DSj3nS91BW96p9w77cim7CYBKCBzFn5GT7KeZN9YDWeNnVEp1SHqBRgencM2kDvMyxn4",
  "key17": "583nPcyhN9DxYjgBtZDcmTEeVUdzJstq4fkceqzToJGrTjWCe2tzo1QfKw1vRZQ9ogVtgedBhrbhLzEsZoDZF7SH",
  "key18": "3RnniJwnUSFHJDEAWAUneEVoYdjiZrkhUZjz46zkgQPku2QaKAU5p2zP97jJ4iCjxzEcH6QEwj6wBg8uGrt9JAQr",
  "key19": "4VJ3MhXSFNSHHecJKS9Z2K4ckrJWojPavkoejrGmPJa6NU2usbdnLe2VXnZNS8BmeBQNTBqJDm45AYeG1aD61hWq",
  "key20": "4qTz6H6igaJcfcbxZSNMUv8XomP7hLDayrZFvDHToz8f8ebLZscqwvsVDevcpMV45gJmk2nvuhUAbUNnjTPrPJe9",
  "key21": "Gce8CeNacuK3ESfjYY2qeUpDXcZCC6sNmEh9hQYBA67o1LbhVSNfXRBfirwFwG9LfUi3P8QSpybZ6PtN9vKcCQR",
  "key22": "1Wkrjn8etjTMGWAfGGQuZessay6xRVoRmwwP3wR2HJA6BnuNwNF9G12LBptyqVwAdKYi6DDLoaWYMgkNwYvZZax",
  "key23": "3wgrtMuPwtUNLsjRYT3vPgBVwq4pAZeK35Tg2JCz1mQdaH9tDMt2cZSdfPDt6qgFPcUdne4ZHVuda8MzFCDa933t",
  "key24": "HXyDfVUdTjYdSF6j5pXiWJBmH6ZasMWJAqn1Niwv9P9wVfC4Wy3VkixZgJreJGqfqWLwZe8wiNC2PyiVXH41QAq",
  "key25": "47gbKuUsLpDLrswLKnnSGXmq1eoDNe9YXURnY1nR4yPjXLGb1exkUS9X5tyCgvKGpddP7hLAFQ75PWZvaZ8S5PYa",
  "key26": "9WJv1LhqTNKiJvhcWsmwnyV4c9iCC31ySrgPk5bbvMHcXfiKxLgu9zTfT5RHxGR6TfotgXHq9oxa6mcMknk2DVm",
  "key27": "27k6ZiHdAEhyCVDjQfZHKsah5zQPV4YVZtRfT1HqaTiHbTKTJfnChxF6Czbg9JgBz9HwEQFgtoNY3Nfkud18D2R5"
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
