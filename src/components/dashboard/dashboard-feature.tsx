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
    "51FqqoT4P9u8kYeLmwAPrdXCAt8smghaRTbNSc1smEEaxQhFLCaHBJi6VUky1gx87o5rppy7zXjto8i18ZCftBSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yDWgd5z7EthsfGr2TwRu813HSwqtzJ4KszEsXmzhqyRmLtCSBKfGXFHp2rCNHj2MDBinZKksXthK9U7wjyUbrm3",
  "key1": "24pC4F3juzqCDRvji5rsFhnZESMWbYsZMdQpvgxwND8XuvxMaSkJYMoCKMHgSXG56JLApcJe5PEghRbj11G4vn5E",
  "key2": "4NEnubpz59MyGAWCwPoPkcfr4pJfaUKE2kvkKceNbzujSYGQJZCaJpYPxvTqvmuY57mUrV2mVwzkLQjwBnB6nh8j",
  "key3": "2vY9vwUSoUnATE1RD9WLRfkS3bVNpEBD7oDWTytMFKcq892vv6iTKtjGjjyNr7V2eDtoSyxTYxYitk3EUpYGg9N7",
  "key4": "3abURf6MnAvihjawGDfFtsCy461zScy2dWiVgn4vTYNoeMKsd2x5ZBt8E9o68JHrSQnotuvvNQJuoJnB8QKUHFHQ",
  "key5": "5ynEgufV7pgkWGAzBrKaCgYqLBZPAwLw9WDwGfxb69twtJpjVDqLKC9Yzw1rrN9TzoACfn1SASLd22rAvS5skitH",
  "key6": "5LakqMTRzZ4aU49QaPvaeN51xqrqousNJpM8EwHctjhusy7SRaGpvXS5QBYx4HAKSytsidRRi1Suj2asd7JW24ZG",
  "key7": "22ncqpvPFUdzv3ZmSqzJaMupqnp8Tg439PLUX4k3vZtd6X7MM6eNud9SrfwUT5VPbZxoo9ZWrvDGJEizkQjCmbXK",
  "key8": "32U78NMbKmhvVze2fUybatCzascGn4zdHxfEc9nteojLVWXRcJe2Va6BJkpTKeR78UiKKfLvBNNHHpiW7dPjjkse",
  "key9": "2QmLC1i65r6jxBZxjHDZkpdoTEkHCCqyJf25AQCkU5Pqi5Q79VY2p3EfBwi1axNRakS1jwNAdYm4KTUGhxiU2oVV",
  "key10": "4MeqSg3TrUacpvCQ9q9xRoBy2wTxUbTnqZcxkCdnGryigffnx6vCGwYqXt34Ppaaf9fCqTjSfkeCP82YpcWjdprL",
  "key11": "5nwQ3VGtmVtYjdZYgxUWMDJaxSWucB234J24BL1QtkAUmbvC3G78Pb62y5RRWMnVPkVdCG5xD9MKfw2etfja3cN2",
  "key12": "DBBV4Q9MDfGhzXnhmS2Vepoc3gUUi3DEyEgesVvw4bZJ52P1GJMtHb3fDyu2KkNLvRGTCxXstJC6FuWGrRkiCW2",
  "key13": "211rrrvCUjFwSSExcU4sYkrdiGpS1AGR2gA48qbBJPBqrwWnTKFngocwofoR6wUJm329A1JJg6dLaRpfTPvTL8MZ",
  "key14": "4zvpRrbTShSu8sDveDe2DrDV8eZjhsTBRqrfU6RnkKjaJV3SJvVTn92xrzbTdsmcyt1Qv3LodzdMqgdN4tVj9x6a",
  "key15": "3N8RjE6aGnFG1pUMgU4fNXBv88a4yYCnCEh2kDCgybzmQDpC7KF7bAJmyRpvxzNDPzvHX4dqF3ZgkZZct34N2sVx",
  "key16": "61L8nQmErYoV3mtW651sQthadao61bFbWhnTbu57UCX43rF8zr3iU331XFwwPc1qoGnYqaNCTjJZYMiL5JCcmCSJ",
  "key17": "25c84CGq1qQDDW2yURJbP7Q3Xt3mFmfVCZZPXVbQtXLu5fstFjfABfFjig3dr9HM6FBrrVizfwWmbQtzE4iGGFda",
  "key18": "2sL4JK7VCmSAeL1zcApkveUsdPHhzRJkAv2Feo9kHjDgibdNoE9jiky9qHv5FkPhfS3U2cCYEFyc5FWVv63xybsf",
  "key19": "3WUbqPvW4kqNzrb4WXfJLeyzU3VwtHmDrQ2fss6Zw8tegHEJc9K9PZFJzNjBAixTWN6hHkpa38DpGxcsizhPDphd",
  "key20": "4Q3WMevm1jaJ9v3M1H19dNtuLF1v35QzQhPvG7zhEiPHyxJr9zPgP54eTSz7phdhFM6ieZ3vvZt1ySTNgjsmJPno",
  "key21": "2Tuf14PtYbogo9p83HJiVMMdxY79qti5JahqT8h78N2qBvLCXxhnr6RUz5cBZXDz7V6MYU72sUSvmLoyAjN2A2Ab",
  "key22": "4TFNkmVmSStQvinaoh8KJfqvLzw3m9GnNikzDAcAzdgtWeefouUsdU6E4eSsdH7F1bPuPcBuJT6jpV3tpatAgm2B",
  "key23": "3x8qGgGEkTiHviPHXMPH1YUzXum3HjhDLsUx2bD6NvYZUwAahUmWpisxEb6K852dTcHrNujGNCsHDEtxdJVftay8",
  "key24": "G725oGNXM54CNqDVcjvEJ5eDy4sGewfZJCnSh7jibY8hG6yYDNrxhDb88iszaRUehcQuQSaRMJZ19tBHXYGzBzk",
  "key25": "4JhXu9MzkjxweKv82FnHxTvrTFGByk2wmu4M5tsacFAzcwm1tTGzTa7qBFwgFdvK88HuAbVSjo9iELXcTUXsdz38",
  "key26": "2r5Gdu2fdGQb84dXy81zhdqdZCZ6Jv4HBfHRVeACTG5P8JL4nwQapYmvu4S8iEC36PyrbWTD3JGpVoj5ecsFXWqD"
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
