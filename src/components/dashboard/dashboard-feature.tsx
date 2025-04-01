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
    "61jg8PyY8SpuFuQo87BTq7BmCPpbT41aVZXd132JWK66DPUXtcYUg1X24EBhnLiSjNtuKX6kavEHeSGNY6PJM2sC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49dS44GNczN1C6gmvRbBDMoztVTJ3LydtuRrjtKptrb8zH4mx4jjDBhDHMBMxEkniKNFzxSRZeDH4trZEjPYRG9k",
  "key1": "44kq9QFHbKRAFQb7Sq4vKxaUxjxhVH964hWqjGqad7EofpjLCiqymwB3iyz4DxpF4GypKs1NeVQ9aV8hoApJ36X4",
  "key2": "4e496BxqXtd1SMSdsDt9cTiBuo6nF5cwowWz8LjetqREpJG7CPANNRCAdfQmwyoVL9SGvqbKy7rKq76teya6DJtR",
  "key3": "3M3yojhy1DAUZGHnMyuH2MRrr9n5yLPd2C83vdc4gRSkkhd8LWB8xGD3utGPgdWav97cBT7Mmqd6H2Aki2gZcaSE",
  "key4": "2igjmnZ9JNKWcebVZghA7MEmryxybvVz88GS3skiNfLMMQSPEmhQCFho5GzsctUQTr5v1DS28HoZWkDoypJF2Ew7",
  "key5": "78xpr5znaVntkTTuwviSVjyZKeQoykyRL23XUanjTZaTsXpP53UjDdVJP7KUAxTdmdYFiWQhTWViMq95drvXdib",
  "key6": "wnScumUAf8M2SNDXUS4bM2woXLRSh2psJbET6eJiZbCzencCw5TUvJtt3Su1iF44HwCKhdUstD2b9F6HqzfKgwf",
  "key7": "2PcrXHke6w4YrqKH8vK8dKdRj5HChCZTBp4zu82CY3GCC6USZSLTtM2AwGKp6m2jYK3vZ5rn7ezGvp8yMA44nCQ4",
  "key8": "5T9cRDpk2phGbipGXbAd5eKY5YbHHY89BGDBXiJ9dtgUz8LKVWwbcYe959rb4JVdCsTxgv8EWCtZGar7qzrGKy24",
  "key9": "osbfmzrr33hBz98h2JDP5vgwHBCBsJi8vURCRh15PYAjdENfx3emQ1yNR2z6tTJ32CYKdve9FYziKhwSX5Ttvmq",
  "key10": "51QXtFFiXYL5uNGVmB1XnaKiKZEoufxkZrwH7NQwqJ8FRsmqzZwtTJkPH7TPhcayDyC8f7TNrEVWdJxBfXjMejzV",
  "key11": "5Umg5JLYrK2WBbdWV6DtPrMFHrBgQBx3EJjNfUgGW9HuetT1SYa1pvjBNvsKisT2KAbTp5vraxWKgfwZ9suzmq52",
  "key12": "5tsZC1Myx6M4Mct1PTPP4FbxRkQeU7Z9ZuoTSk2Dtk9CArVa4xAKkQzso8P4HopUSvFBsFQFYdmRNmHP8yvMrSJW",
  "key13": "2XbYdMHPGiZKF81aCDFr8kBdbePghq9jmCJ7hCVLefhTbHxrvdC9GvKgUr76dfvd1jWwv1QfV2C6hb8ADMk4by4F",
  "key14": "47GHizhnRPELYuBqQRdwCq6Nux49z8S5gzoLx9kCRb8zDg1gcqipBm8uhCRKJDT9om8HKYgDv36eXPFMpTM7mSXX",
  "key15": "61ZnPt8ESH8igbCz9G2uzNFXNuiYTPF2gTBKrjEF72fPYLSpDPxmNMgYFey6jxhPyVT1zWTygcUsGGenwUDBGiCK",
  "key16": "5dEaBWiP5EPLE67RMntu5rhLtqjnYRcvBHKiv8ySjXf4oMpcq5vrF4YuCqzbxqg8Zk5J26ytzxqgkyYv3XWhY9VX",
  "key17": "4afcw7BVpXhgUjBj3jo5tZX6jULodfijSfPqJGJWC7f7tifi1CehCBfj89FHUeVyBfgkxp91fwCVqEAQPP5JEStV",
  "key18": "2ZNnsNSgRMSxVSjZUJ9aqf9xvAw2hPY9LRpvAdmaAdvvvxVmTLnFsbLxxjBq7XpwQR3wCQBYTfGdcekkoWkj4S63",
  "key19": "23rbjarnhxWVbxVYBiod3Z2STeC3etSwnaGN9cgeejGGTzLTUzrwGj91nQxvCQxA3fMthDe9mQqJ4tQKhHZdSdUm",
  "key20": "3wxEy3neJr1u6T2uxtYe6424frDow1LLKDzjd328nBynnqrzVYi2e5E397rT286JGQUwnkTMA5UAqCLQbUhB6M3K",
  "key21": "3ena1ATpkRPR7DyEPXENcoYL2GaHo17sBuxQyfiBdx7C91EGkQas8BDALgdWFCYpEUtwLFX8ssjbNbJz65Xfmh3a",
  "key22": "3owP52fr4Q3fgZex4VPxZL7NVNyQmSuCsLx6PVQydca4uXBoWdDGNpNVDgs1dQ9LCKNjUjK63oKdcjH55kb59MeF",
  "key23": "Ki1xwBe8ixdb2L1bZkZ7yqhkHnJaG3jBBrSarZ1EgeZTrxrgQRkFqS4keiNyApfymgTe7PVZLBTvC7j7a42XJjw",
  "key24": "2uYVuXoa4rkQPcMpUgxgmdANJkJiqU8NX4EMcJ1SdkR67E4oZafVR5R4c4N2cT6WLuWk6GK7sQJWQCjpR38GAhzx",
  "key25": "3NBDSJ6pgGgViczCZ4UQnGj3H6cbyPyVVJTDNmJShCrDYr5na2A5dNN4LWNwnnj9WudF9m1rjezXgwoket7srkBr"
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
