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
    "28dENAq5HzmhWPGyAUsMojigYvJ1BGuqEivEqPda3LYssppwvpZ4ohpDx5dPdgtfXdVJyD9dFca8t3fLxRh9XPbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8iuQrcHD5MMWib1MxYe3Lvozm3PEWDZoJJzkv589p21LtfFdqeUXwmGAJTKWTUVEfZHvGXTNvamWPJZdP1ZjGgq",
  "key1": "4cx3bMQzQg8MqShV1dNESzXqAMK87x31KHRPQFuaxWrQz2Dhd31gaYgrUdnDGsztydc1FM51dXAzHfPBGZoV71Vq",
  "key2": "2g7WSe6DuepXKhoH7aj6VfixNxLLp6u4osTUPhk3LG1he1bRYf6X3wKd31HSYwfzYjPPKgpKMH53yocbYRQJ712p",
  "key3": "5YuProqTURFZpSWxh4SQbftScSZgJX622i5DbmpJ9UWzPRMoN1H9GsgC1HefN58AKkWcXqAzFCMnMemBYNkjDmsb",
  "key4": "5e1ZDFunx1eRL6pkvX8oNbWugLjbh9dZ4J9WgCpnVWqRNnbUzQDSfpiAtSRWW1mYbjfTkbR3cTUEV4xbKVvZKHP8",
  "key5": "59BhMPV5v8UHQD2d5rS3C3LfcVCncQgSUyXatqhygp54mykH91cTwFCEk5QVqRMEvqkZzM4wBRfBvU8AbSyqpJtB",
  "key6": "cHVEY87bG7SNLdm5dRrZus1YnuWT5AiXcqeQcgpEdnxNAqP7Cvps1F276HwMpJMvM4NH7UGwrgpxyRSvnMkCTBA",
  "key7": "4rHnkCx117YZqcVwUL3H4Pd8AyVuXN6KctwFMtYNyboBr4p7M3P8vu5dzuE3ahxJjPTrcVjZf3TMAEfj9JE1ySHi",
  "key8": "fgasuWzQBuWYFCUTkrGYV1fHQDkkJMpXQN3Jx9sGhBTRP7HpSYfqgtdgc1ASqgTBFsBefmUMhrHmA4MAzZhG2iY",
  "key9": "246aP8sci272QkGHrUTAPE8jMK9Fwc5LF1enK2MhZczzvAZn2aUKwfDdADzCCmSJgTN3sSrpNgBXRztHhLV4JCe6",
  "key10": "63GR3Hi9DZ1wXrAkV1ApCavwVyhU2vo1HRNxiQ7vqMEdPCRHELSahXH1bi3R6XuM754QhQUFDLimVcbXT9Pq6LKy",
  "key11": "47FRFejFmK5DF7C9MypTnEHpaPQa7XBSRLxCSGBnBySX3wVXjWmG4miMQbgXKucFzFi6zehCJzRMnLFxEjGpzQLj",
  "key12": "4oiKqrqmFowqPTBr83hHLzTzWf6TsmMmzpXCiVypZK7aBrWKpjUsBet39jjGL92HZXBcnwYen8KjFFzmV66f7cof",
  "key13": "3RkMXearHtkpyUMHvsZnuUZGnfacBuoeU5xc5xKtBRkfUhLq7PH7jRvr32BLUmP1AMQwuy6nSKNo3yVoEGjwEReA",
  "key14": "41PaRyLHaUB2xtuuHFEFXgGfSHjXVE7ioVc5zdXUdzKABuPKBYKgpTywuL77SvHW3VWJsqcfkBrNPbnruvdqQv2p",
  "key15": "5yrdKAfxYTpZ5dErzZKTCyhYscJiRpeg9UHs7jJ6unAzv3Ydp6ZLjoE7MeepwDCjrdsSyV38Gtg4NWsJwhiGVs1M",
  "key16": "cbbL7rvhnE7fKTnhCURsPqzu5yUUQNNW2Yic1LR5unWwEhVCqnxc6vVzryME6gTP9fvFB1LanuWeB5dEKfa3K5T",
  "key17": "mG4tcWRVKcyLxrRfyvMz3gSL7LRzjbHXw38jDnsvsP4Di1jLH9mSGLXq4Xed2bo7Pm41VSamn6DFrmUdjvPGdjC",
  "key18": "2x2hJQfE5JRq69LfGP1ZpUXBEfLCLu98ZxgfPzCiCCeKZRWWsUtnAbvr674PSi1mZXShu9LzNUGBMJWisoSaL1Yx",
  "key19": "3BVA3qrhKXaUgQrChSjBkGiTSZAxz9Y2RFFVKc3UYid6UKaMfrXHS2BqCekkhuy6C5jC1agpkTtBQUZUBD2mKv5x",
  "key20": "5SRVz332X9QLFKx8xtCJUYhAmKHpzp2GQSJdR4TQaV3vbRqsctD7hrZbmaCrJpLfd2kURKbLUo51TYJTZe7iaiN7",
  "key21": "2oC6ydbi7R9p1r5mkpXN2An4ddQA8DSqdHxfoZwHWb1kqpcikDKgd9FHwMBg58NgSr4xKs6Cv3sA4Rre8s628ZAw",
  "key22": "4ahJH31v9GNfG2sCo5Cszy1KT5VcEoAKvsQq8KL8XafWuR2ctZtk8q8VTUS4jgp1WnDMcLTsMk2TP2omtiSsYbqk",
  "key23": "cXUMHYojt2wZ8Q9x2691ZwnibHbXzFYhz7RRpJi2irkxd55ho99H1icN9QfgBhWWnN8sWi1LHJE3ek4wdEyQ9Td",
  "key24": "38gN7XxjswUvKkSeJWjMymboUaSdDgq3kGiGytZGzSpKSyrnF8BZBD5gTQUHvQT4ubRZmkbWd9gETGTBbcXfs6XC",
  "key25": "3TsRWj1FAksa7TM5NaCZDe18Yjp4Hi4PFYn357txTmRxsQjNtjTg1aj1P6A7AL1fDXfCbM43VxDjiJmabrEBnd88",
  "key26": "64HQo3qqpWWpvPZxuKvLJUt8wWm3A1fZPFkKxViXqYTiSU6SV53AADwj2GPJCFKcyPJ6TqJzg72kmgLFvA1ZQWLw"
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
