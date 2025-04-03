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
    "5YLCJgmow9twxYyBWZUwfNpN1DymxJHcLFqEFnHK1i8N81t7fsu7niioAWrLtY7URFdpPBLDKxzGbJAe4kMNVbnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rWSJY3zphFjYW8eYpW2EG64XYousGQpK6jPnFv3bKXqKj9rv36RTRv6vSZgoRmrAvtM9Ke8Dr8UFnDXGadPkZs8",
  "key1": "4wrnW2KKHjPomNY5wi7Z4fLP67e8gLfwwoM7FRjmJrURTTmaZLHQ87PiEW7Y4u6v1dYR5u8zZRmVmcUhb1wbzWrP",
  "key2": "2yLVNALbMy5QrzCd6kNgxUbLQAtqTZbcXuGi3YENP9ePs83mGzXs73PuTCwY4sgbeKaLJchzKUKx4v4UzpKhaDfq",
  "key3": "2qXvZXLxCRMZxSTkt9iwHJ76FngebfKgs8qPF5LKAQRHBeP6pwHc8C5WEmdsQPsGJoo2kgBUEsSs6Q94CRZeUsTU",
  "key4": "qVURzKUMaGtngfLPqXRc4d4RqWNY8ubiNf54uGDDSaPzd1eMPVDdNE48pTWFVYu2oDyhfWBt8bVmNKFEFUA7JEj",
  "key5": "2rvvCWUK6vLJWQaQVM812CwPQ4NzMJ2RWYCDkPLLsEdkKpikDM4RMNcEKXcx13QZrvH2SsAHFFhuPnvTAhF1Asxm",
  "key6": "3R5BhuM2464gC6AC5TNcMHwomFgpcyX3cyMJcoGbL3XU55Pc5aeGaeYPVgoqvHUraYamj99Y98AcVaePHPDekArG",
  "key7": "5c7NPxxY2VruKAw5ptufNFHsvAqXsCvn6uU9UFVAZ74UjJ7Jnyprw1S1fTHDMo6WWsHuHEBFoULYWvfiYAdEG5PN",
  "key8": "5dJewsQ7YPZs16ky2NqUuYM9B151psUVU1UBJkGzDQZNLnZwk2d1HncTqAaAMhdCz8pFghLDug87NHr5C1Qw2JPA",
  "key9": "MGfE1VHQ7tHPj2E97XWkSctRjGFYyHjnUqBuRY6cpFdnyBMHzHT3kvGXftFxS7uKiu28BKpJbMGGQ42VdNjqQKT",
  "key10": "2v7F2jX6rESwjY9r3res6bBPPMTS5Xpe9qvzgbVAWbWzWpqwvA5Uy84TeukXD7AZrHjB78aFGh5uL57ZydcMxoBP",
  "key11": "2C7zVvGBC5V2A3xHdbDVmKj6Tct5f5Nv3gZL2vnvb4XJzEc5RRXdXzNhfU19vuEcPaELCJoZHq9DP2byfchmbt7F",
  "key12": "VoxnXo9iMhrvSJ2fPxgDt197PFicerTexqnCmuj5DBzmuURp1FCsqdrsVYVbLk9pm9vr78hS8Zmq37LTqnMC9jF",
  "key13": "UeynRwfyGunVoXn35zUdgiqwxHtEZr7o5y9bMrKwrobhTouA5y12hduU6ZxzjesN7AMGT4qnyGnLKgxGZ9gqydq",
  "key14": "57uCL3n26PFT2VpWQ1ZAZe8mNjv3SSRAXREJf2wCEJ2PhPhcCPXDE86yXdfd2HSWN7viWxdmCGRtMQsy1LruVy1N",
  "key15": "4HEEmUpdYr48M37YERLXqwCXD8JL85SdpkLXq4UQLwTDzLar17YbV19D8LpkRexVeAKf8pDxtZFsmEEqj9oG2kDM",
  "key16": "4jEFjcshTKqRg9MgkmwZ1tup8tLqxj4DcEjPWa9TmXA1swM243urDZdWveu1yer3VGfyZLxTbF5PFAHGzVYkKf5E",
  "key17": "5r9L1af59FwJLoNr8SsEWC3tSdxU6vEGsUM491JhWRJXERtXREuxAP62TVe6jh3RkHF1nqHr5drGGTcnrEArfM4n",
  "key18": "5zFTJD2yvUigmGvqgGRxY8M1aEwUkKL6d8K2f9zXHnRRwVGoiASnmDwakiwe1GT1Jqt47YPkUK5Q9xALzCcnAYAE",
  "key19": "5w23megJFLdKGSnxcZc7dCY8nh3sVtytunBhZTVCBzZfTukPwFXWSCHEJgj4wWDC1dtmAfhJb47P15iYp1YDtK6S",
  "key20": "5BXeQLKSjng6b4ssrWmWZC8zhVuAGoHKW8V7uvBe1BAuLYM1CbRGFAeZyDFsCEQTdb4rWAKZNPabB7ncCYQ4fsEc",
  "key21": "4wpZNRmQhYc83ghuMSxGhM7PN14NWn1DyEc4VYWaLnzNQLfPZd9zEGoQ7bQpzn6FTU2nRCE4Pcom2FG7kv9aDjff",
  "key22": "2xaQ9R2PSUq7wxkufnv7ArKz2MZQQ7S1AqyZ1wJXeA4WPvxjAsTNsjBS97436aVrbTcJNM7XfDpx38y746G4jpKa",
  "key23": "4XMoR9fuFZu8K8yf9XRaN79HbhMFbffz92dAwKu9BvxCurx3cgiFHKyPtqDjUi4NvW8LrmJHZxdpeiVzP4P9iZPK",
  "key24": "5V47PEQ8cHr6bUdfT1xBoDNBumhXjaQi8ivXfnEUJsLdnv14yaGXrJrp5Soz5MRUJ97mmivjPJpeicwUHAS9J2TU",
  "key25": "5SANje1fwUq3Xuma3fZTG22UaYrF6D74K9HGxxcX4HkE1KpfQMRnfZ9iLn2J76e3xkPj7Ymtsn8RF6f2SNCKj48F"
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
