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
    "3Zq3ixX9h7LuuJimHHgZxa8Af8uPo6nayX7k8YKEBZYpSBSyvm5r341WPXveRun6x5yLfEFaz1LXDhK9L7ENNPUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GcVcHXyvBX1wYZ9ZmNWvvmQWiBZDmnymTk9BDQqiRRHFneQ8BuYjn2pFUF33jvR6LqTxsKi66prmciPsUHtPa9o",
  "key1": "3KnhQ3a4uKThNWAcd2wQJcgZH1NcMqsRhBfbcsatSuC8toN47649hUjTFpova4RJp44oQBxayGs53ocxBWKD3p3B",
  "key2": "TmxeDey1XafkGxgZuydpfYakEwDLqXezygjQg42YYLQ5YxKcCPC1hc2YMRPDsnkXr4o1cS8fPx8MLBAwkNWhSTE",
  "key3": "5AiVAddTJqwtiZU8Djzo7bMbboHJT4WtJboXbze29fbDms91BWvsTkPsD9e4Fe4cA7tnF2mpFcicbSepd5NmNNkF",
  "key4": "3vrL6zU8oJJyXT5Gmt5PxzKoUp7WbTqV7W5ep4cTZ6B4E4WaHHQ37PuaaK4VtVbxrs9PJi4HfZF6ekjmFCe1Qqoa",
  "key5": "5wC5PGXntgZktLavJTHpAJdXe3h4mGxLBQd26LFF3Sr3Tjb4QVMJCiWiSDAK7Dknatf8tYiWwsS8TdVLgP4LeH88",
  "key6": "3uk9R32KUiEoY57ZrYD2GothKu7eGZPXd3SWzjeQYfmWYqMsuynDmnojSAtKwso6KM64vYCXuvMJHtEoJgPvdDMo",
  "key7": "5zHSu4qpyw4iiqeS2MFZMWWuFFMxaNPVXi8Bc1Y5yHAc71AZLEeJ8qSr5wCErrFM38HT9iBNPAkHKseDkBo4hEc1",
  "key8": "3LnWxM4gbzoipfvqRsPMJ6hFdAaPDXomseTH3uZxWm9s5jciEvEMBTnZKyhZVwzc2oXtaxptwEtjRLgg4e8gzGHY",
  "key9": "5YXTix9j2SMVi5BoAZe5J8UNZsBfPWcpcFPRFsQVQUGxnijeK1SG8xunAwjsx1KYwRR8ourrJfxKJgZM7WrqEDEj",
  "key10": "2jBAPBpsVwjW91VSXzDtYEJ1wULk1WLVhtwJJ1nc8KUbVAAkEyeL5appEHwr2P8mbpCh8XvV7ev6F6CUxHarD8KW",
  "key11": "3A9uACeNEqRRNzfXzLKUCJcV5LziCC7k7YFCrhs8gV6SWdyUc5uHc9PLR7RxJJvpHWDGvP17FEtYDpuD1piyYikk",
  "key12": "3LwV8YjqGFfHWWi8ydEh34ZPv69rMaX1SfpkQdjMZTZdey8YrE2kqXZRv8f8mpJf3LSeZhQZbGY6suBqUsmqcR63",
  "key13": "m5VgRseH18aC5vLPhFKUXyGeHupaDAK1BvQuvHLbtJsdBWXoyS153nwtKLCUUqaSzUH7LzRFMXMqcFqdwNqhF1B",
  "key14": "5FCeVGLBSsXDrTdjV3e9oCgR33nJwaquRua9btRmxA5aKXqpSRkzGysR5uxufgpQ6tgwxZWwxepNDSTYJnq4Yha1",
  "key15": "3bZ78rBdRedhWVXUuBS92qZ69Tg2GSPcjsgvZsto9gWoYB4F18QCtBQkPm5XedDjqN8xU71N6jvWhGprojYbZPbq",
  "key16": "3wHA29fdKyB7qGagn8rRJ9KASpM3rtMFhbqWHrCC7o1G5qPjXkYq5ikjrHCgKVKmB2XTGRUxcHoBFtL9MF8eTYvg",
  "key17": "4YZD96giCX1ppU4untvVnrFZNhEn1NPqrjVom4oL5br3Uc9mecePiJHRNkvfnkRUMj4iLW3eScRCxgehsGrN4tkU",
  "key18": "5mnjqEZvG7Fj58EqVYaHq9vGRNeMVY3TCF8ZSYsJUZRajQo62kKAPGMWofySqjGaZkYorcnThwdqb9KScxzcBbZT",
  "key19": "4eNxVHNG6nxjPMCDGGF8ARkzCrmerUH9wSLEbMbkohUobYboMvEDpbV7p3L5fnHvkrxFiL8BHAMSAgiiMReRN557",
  "key20": "5nTCAsAeYPi9Dj3u3XCTnUYMGFo1T9J1FJgHr8MaBgyMEEsmDnGCdtuUNL44nCLF4dUv9chvE1eRikAkskNcNTvZ",
  "key21": "3b73fEBZmMp2yoX9jmUSvMkR95tr4beSTU4hKRidzZYZ7xBLLXFKRYjHUR5H1k3giBfLb6ASAqLufvdvE4md9Exi",
  "key22": "4uEuJUQBA9qafx6qMoA2a4pvvZ72RX28R25DLMcWqXSH89HmR1MP1xV6WzBE4zRbtDMuR4itASZrzH4ptwbokJ16",
  "key23": "3VosWGWDx95Xha8XH4vYdBNTXBRsh13B1SDvwuWEBXr34VxYnX343dvhi4o1T23Ma6kAkZRjkcCdWM9EdxzTFV9E",
  "key24": "3P6EqaCxgv1DFEUTuD3nFnpJN8t1KWjHEs4YfkfdLMsNs4UjA44dUqRrhr1ZmnXWYmvqifi8vB2gFpQ8PMhPqqrc",
  "key25": "5WZnNzZtyTMWPrXidkpUwvQnzXwSonsrsiUN4Y6X5jrJaPnXi8gEbGj8AnYmhQkJBnNtfhePvqMQqXR8PBW1XpYi",
  "key26": "5JbH7zZachdYwuBZYuJL281eMAGiRmVtmVLbcEsRhEhMSM1GZPRHhfjM7Ly6gy4rm4qEjbvmRKCVeZUPzpdCUXLR"
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
