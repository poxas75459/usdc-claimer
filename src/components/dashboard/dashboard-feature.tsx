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
    "2Ef2dmZQEipAh9Ryc8wWFQmvZ1QPPStAxGHspEeFNeYy5wZvxXmAG7UNbHxnyYBHC5J7ifWWfz2gAaz1eWwMTgHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NutVdTktkHVjk3w8dzsGo2vseUSj7PDA34j7u444ggTq52oLbcXbQXrwwKcyhBALvQHGftk1756XoH9syjBwP1p",
  "key1": "2nbWMaSiMcAqP4UdYKVyKfFvp1YJZccBt2eTe9mwoBZTpmVDmPYsa5edhsgYf7VPsfs4jkNubsubnRNWvECXatcx",
  "key2": "5LJZy4wD7uZjxPFUJBf2zXt2iawVwhzoqW1k1gnTNWxgxm8rTtWKQnDxEuWYP5S6fcVhUwYsamNf12L2tGpj9M8Z",
  "key3": "2XcKTpLphLjrnbKvTxj5oy3uE5Rcmpirpikd23ahpfEEmQkteWkzLkaUkQagHhB48YcK6iTNvSN4tW6ewn28AzxG",
  "key4": "25bW7pu1dseF3FBTGb7czkJA7AbhQ3r2jycSBRtQ7d86Md3bnUUNjB1i2CRRnD6UjsU27cmEtPQMkANafKPEwrtv",
  "key5": "24EY1VYqo5dJEVPMDBQ85vV1U7gSsW7Er362KS46jRzSbjgHYTqUMQJVzdcsie2fDNF1CntpcfkziNkhUYQREPQ6",
  "key6": "22UZhqenbCj8J91KYT3XvFghcLUKGbQn7q2vWU6NWBFfVBtnNRTBoVxtv5X3z7ZQ6TdkZKCVziF8LbWXSqr2anbw",
  "key7": "3BGcwKsyGLtdvKcVBRnyZC6ptv28PVg7B47a7AJF1FWKtezdKiijeydMVKwJ667F22AtcjgcJDYNBidFdjdMeKHA",
  "key8": "2H9gGqygMoYFaRVkYa4bB22uZSDJpHh7WsjrqijYhotsfqiyWbC5C3VH1MRCbXCyCbz2D7SmX8uhsAXW1V3Y41dJ",
  "key9": "ktcX5Bj2QWtoRW2fEhE9rvvNTuKwGT45EedNMFLDkpQC5kcJxxzuC3pyxEdDmnseSxbbi8L8kqnnk94UPavov6m",
  "key10": "2hrXxDoWVVKCujyiD6E3s6quTefTwwfcEzptvFbdxzsw8zdpJDYtYt25ZYFnAbuXGx5RKoftAegbTUgj5RwbxU4u",
  "key11": "3PDRPatPyq2gXx1U3VUFTZU3kMjTnU8biiqAzVUYJDo1qt8gCvoyZDbAN6cDq1qZ5gd1bUvZRGBYyJdR9b2HbP9u",
  "key12": "43zSfsGWE2UyrWtndVzDK2xhPnPmZ6tGB7ETLB91RAXibrayvqApmVaWH6EhsrRGKPVpvwbvEEZ5LeQhv9Lmqbby",
  "key13": "3qGQZxNi78ojAta33qucUCqoVzVC74Ce1aQh8Mwwt8QNHns5T5pPtW3ZDNtAit55z2YPkLtGByNxdirneG7ULKGA",
  "key14": "3dA58MtyMAFWar4HDrSF3EMTPkFfMeAQwh1Bs2wavTZPK4ZB1rrvEJFv3wYHDhXVjHYFHzitb1BwaDGkjw6wWSaR",
  "key15": "2wkZGNdxxMxpYQYLJ1EeRdpYrHgqYhjDyF5TZXS6t7vVQHy7P45VFSqmGvgjTekmQwNxjjQakobEDDjs83GXo7yy",
  "key16": "5vtk54EEHRPutihAinxTsh14vLvmsGmDSCwrfJYMDgsejNW9K6Q87sS7LfVtxmrkh7axUiDs1MCcYGeP5v34E4Bv",
  "key17": "32QZQ6Z2yAeYWEwebgYXjhu14sMqz3HH1zPnZFu2D8Ebpp3DHAKWuNeJrQuf2HRkgNbgJa1b2SAguFep6CAXyHEX",
  "key18": "4yJWCKSbrKM6k4ZQEiNSLtzdfqdmd9ELP6xV8CTbpTuVDCE4KkLAQiRw7rA7Fi9Jn5AVKVGd69FE1DsuVsjcKaB",
  "key19": "5ZpM728hWaHFFgaiMkQeW4ov2wWbUk7tLsehBf23YFqCmjVuYjsZ4xcPNiQRShuZryeezQPqqmT39b3soc29oo77",
  "key20": "2mnraUkuitNdqDRX6R2oVyifGkDXr3XHjeNDg3TECYZg69XyPh9oqJaiE4neTwqWYa18cC375XBHCEXLfFZvpaQv",
  "key21": "UWr9xgsLSDv6ajiPPmDJuKBoc9qDAJnCxHMVS3ZHTUeP62r4KKqMdUPvwF2HK7f8piHx5bLkMVbxxS3xhJyK3ae",
  "key22": "3ZJEudEpzT97yt9HeWen7WZgTebpWPMbq4azjMzFcf9HV5aHNHDU9ZUWNStWBSZaBnc13gst9JYJgq9BAbVXuFRn",
  "key23": "3r4d3VhxDXA1nGgUNUUgiBYXcdeQhNGkGkvN9zDgmmHSKkStBN9jo5mb2xnjHMZavBf7gDJtx5L4krksVak7WJJz",
  "key24": "4mA8smfv1BXx4dGqGCLCsikVE1oAnraySt6DD1gj5HzCdxWeHyAf8A9fFbntXJHa2ghQDM1TbRHtXaF8XnsYnX4W"
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
