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
    "9WnC8KAqZ1HNbpbEGjxfXXanhxUgUBbcGNAig55st7qz7GVsUsSkLYkwyodUdXtMuyNXZ4wkVU49y4CR6PMEzzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23WNUpis88Gkk9SoegEmTiZb1MmYCShFJqRfNz3Y2rey3hNQFCUTSjfKCHYpWiZ5v17BtTrx8ZvHaacgMaZwyNox",
  "key1": "38hE2a7GyBq2RCVzoM9T3BPa9otfJf8SL3W2wv2CpcAbXY3HwkHcjQdTFbRty6AuUcSyRsfDMUdgfmg61i24nwPK",
  "key2": "4CFvd7Sbo9seRRHYZPB9FVc5iyYj274gZanPbE2rujaNmxaNp2MMSrPKAxHqXLu2qXU1FeFgcKKvkwTxtKkHKjtd",
  "key3": "5VDziJabtFDwjfptLtuQFY5g4jKpo2xfaxDBnMR5Y9bbfXhCFvFUymuL3D7kM2CtEtzJQ36rMCEZ144C4fVs3Dmn",
  "key4": "5SYw9ZkjywKYfFMhf6sz5MeinVAuE3hBRrRRUaKXG8HsiVVWJX32mrPJh5Q8tx291Y4uJp7YhsRTsVzBQW5KCCcL",
  "key5": "56noASPZsiVm5KepmB5kvZm4Y8jHiHscSvUSGaEPy9BWSsEQQEQzaF22r1DTQENrFga8iGftuSTRvDMVhzGECt2s",
  "key6": "5gL9cwTpdooDHfFqpfjrAgYX1oKUNbumrWtYY2mtMbMwtQ3mZwqvc2tJPjzfYhUwxrN5aktqtwz8CvRmyJsW4bEZ",
  "key7": "2ATwoWZ3zaojwBY4X2jUDQsCp8qy9bZoTpeHrJUzc8WTTGzyYvyagarYjaHvcBUdtH69Bzthfe5RGt8LRXQbM5gt",
  "key8": "53CZyXMRXEWXFtT3Mbd7rTYZ8GWcf2F83qHyg8gG95LXQstQPgobF5MyZNDpUqtUs3VL6bnfTQB4tBWDomCoteRR",
  "key9": "27eLaGzx9ARQrSfSMMC99QXy8LQTJ6aApxyGKhoP4SiFTiFbwRRyDV5qBS8DFJ2Q5qk2nzw1QPTEy6Jmjer1myoQ",
  "key10": "3ivv5aZYw2yfJDRRLVxHhp3hg7MX6hzst6DEwqJmRsABE6wKwNoVTnxbPrYWdv45PBTFuRL4nQVkcYefGsAPH11r",
  "key11": "2oUefUgTJo6Lw8MEkz84mCUpsgfQVd25uYyMk5UK4YPW2uQ3P6iYqsYqHjZ4D6VnLfLrQjGtUrgAS7hpnYbEvCnL",
  "key12": "2XDwupgeLXnvyWAPAqRa1Yw73P989fG4AE7J9Ypf8A79uugPQdisT4czw1Mf1F1NdAay7nWXKehHMxhSUdGgdt7b",
  "key13": "22KDcgXsvrguL4HQEXqGV6n5byzAVK4AyUHyYZ45FCeU3S93G7pqH2TfMBSSJxDve1A4AHgCjigFSSQcBzGbgVkL",
  "key14": "2gDmjRxLySPdYAaLXrvXVk6HBXRgAcMdJ4WwjAtcRWwRfL4pUNxoEDwG4hwqdkBQbHY8WA1m1sRSWrh3ehwutHmq",
  "key15": "fC8571kf26BQqf7i1V5s8DGJp4S3ZunU7ZJdAFbPVHU8a2PCsk42fMsq9Zj6xqeLekwXwsFDRvLZP6B3S6239aW",
  "key16": "2DKNbLWWmdm5q89bxpVs4qbpPWgsfxuqRFndfq6sdwwRG67LwXhVoNkuDXbxvEJ4HLxyagkAqrbuHMrCFtJvdAjk",
  "key17": "2E2eVEdk3pQMrzfwjigQVg8nkoQFzca6Er3pijSL9WYNXUJt8jC6PUqhhHw3xzaPi1CV6AdpdGGjdPyG6J9d49kb",
  "key18": "gvQqRFunktifwPUWaRivxEXjjnzVrUdZbej9jN8jZGsy4Amzezt9FETuRih5vWFHEDNKqq7vfVA4eHVQkmTvFDZ",
  "key19": "2M2koQN1qsa56Jj4PUXnb766aEa1fZLsVUjBChGcASCJLnHmE48sUsVUhQFFkaADciigvTTgp99Uo9vtX6A9ncj9",
  "key20": "4cttDocf5AdyscVDdoupRoSYsHaTSohTaeFR4fG1zhtEo8t7KvMohys6PgZ8HP582XxRCT4GWBFeCESqgpSfnmru",
  "key21": "5FTstQ4p7L1X4EQLueYwFtJQdjct9CdVTTiu9qHD67u1bTizTgkrfNDgRgxCFLAtjGoJVUMn4SJqg4BxTAd6GbDz",
  "key22": "oQQEJqxJ1LsTYdV2NTU7T8SYRTYTJZkGToWHBkd5Pia8N3xyBuj2Cx4Ags7oZM7LkdjYvht9Z6oC5rKKxNJjMws",
  "key23": "32YB63Snhnr5XA7zYnWCcNcVz4xdcARAkECTkBgL2doSaLTTeuT6GoWh8FCRMZaTYp8VeSDQYcELmj2xpqfHXkRw",
  "key24": "5fxgmiPCaU8YVbj4FcRKt6hEePv8w66nRp14mX6FTKvHfLs1sy5etXdZJy6bPq778qCvKAUeoubAbcgriytK7Aj8"
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
