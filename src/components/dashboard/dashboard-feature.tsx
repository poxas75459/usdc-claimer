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
    "LoF1zN1c5DRJoueYH4CBPc3wjYuQkp6WaBhpuESfvFTW4hJDuF7ZEGY6TEtu87BNc88Mdbp3aqqcFeu5JaRHiUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W2EaVHH5aYehYQso21jExAn61ZwbzC2V7uSu8gLqWfW8ewMV4m2eoiELPKBN19bj5tLrLtSHAKeJUUD3j4LAHwC",
  "key1": "23zKWBjc2M4MqJRkbGgSZAjvbjyeANvecnHcQyV7hM3rbUbkVeTiZZw5pLNZeQ3cC3ERcUKrAJS7zzXRxm49fwEb",
  "key2": "2xTbcofepNHgw5noEmNdNX47EzGCaZ9G17Yaoiwz9gxSFZtry6j11tkBG3oJ2iK8bQfV1Hn19HKjxNAv3ZNz7sAk",
  "key3": "ybnx1kufiZnpF1iRRCKUn1uovUJx2Sy83KoPEkopckq4PU7KhkRwNXyEa98eTXXUgoq6X7LPuV7ARuJZnC6AXFX",
  "key4": "2fXwydWHx7bmDQ8ruNzRZT5DM7gdNkG5dZLPxfT82hhbgKTR7NJSRTpETCYAS47GJLyoJWCFXjL1dcrCyuAEWqd1",
  "key5": "3Ms9CgZANmUFaymwcUdb6XbZJrHrg4nh6w57vmMQFqWqeKNBo52uumBHwN3mxMunTMB2THHSK69NQnXbhgUtsy2z",
  "key6": "dWfhY6PTpcRNFEVzndNTnJ1q3QKSAfE3XNvW1DAWVGnPw3YLMk9gGNrJmNu7wudfspyR1oyGAf47XE5Q3CUspZD",
  "key7": "3MjF5EqFb4V9Pn2E44KojAnYBcHrpWPNcTrFzFPcgL5YzTwZQRgSfFgKTSafRqL7PoVNNJBnwWSvXwLkhALd6Kox",
  "key8": "3rMqqQHYG15u4PBryqQrnjQUGYhc1UaP2afrD3ha6xqqz1S4kGfNNxRVGDfJLfHChwmVQeqibHbtArUP45aQaG3V",
  "key9": "3GwnTZdwswCFH7HoFybKKmZ5gv2ebU2tJhHjsmiP8ePCF9rUE5Vd7bg34EXzq1WxotxpTMDUG2se7WzxkcCpEBxv",
  "key10": "tMbWgwqcMcjBmBDrcJZxFTmAv2tbwxddp8SkBwJ9RritHTAPCSBXFeSn9EeJ3UmM9obfv1Yq3CJwY5eJBD3ZMTf",
  "key11": "2eZWSMKrFweEhtzNZtVvZTjXemCZKWGccX5RTWEciULhNS4utGUZxacr19Kcq7oR5zVy6kEPfkEdgNgiS87SJPFx",
  "key12": "jpCNv8YjXbmNtHBPkpWVLFx2Y2QWcTRbG8gk83DVKQHdWub9FZTD1123H9qtLLgqq1a63dfZfNSDpsy2dxMQiFx",
  "key13": "5tgTbCKPMRL9oEkSWAVcHtCqzgMP3eLVbUKEsrRehPv3J8UWkzJUTPR8Qd74JdNWRRcyWH6EmY6ZBtp2fUm9cADR",
  "key14": "5vQwRLRoTsVLggntiAWwXFPsJmjSxgv78E1ibs6JoYMx7KupKeNaPTGDTg561DBecvNwqL8rJ5RK4waf8ZyUa1RG",
  "key15": "MbNra2BJQhCZ7cBdE4RNy5N8Xa1wqrijzz2XeX1cKCYjaCC9mFXwikQXB3NnLTUz1wAo4fuRF1WShSmsJUTHcK3",
  "key16": "x9jWLDeUUZxTG86pEKvpikeJD5XMyb9iEQeBabYRqSUH5qHqq89iBRRv4nKabPGTAi41vEntuoyAcRQ4PGa7F4Q",
  "key17": "3bFSqjnTGtMX3mQa9MxvBWF45PNEds5SyjxQ8S8bPVqK24nt2o7z1fjHehDAjYvMkAqHwpHU2nA4hctgpSVbGzrZ",
  "key18": "c7wo6oWnRw83p7eMtARbaEuiPNd7cDZ3V5sVJvbp57Y9sHMGdHyJTpWXoBURKFifE5VcfBgwpD4MY4npwW1geUG",
  "key19": "4twLHvrUpwDGSCk2WJ5zdUGs7qZcFrFtDjxg1bKcQ5GCAUDXdjtVBH9BfMAqxJozAikCCsfpx4e5N4fdf9bv9YvD",
  "key20": "4jwCWcwKnXyAMdrCGndGiyp13JLKaTJfSvU5kqjrGVbm5b6rRATeTfjeCGFhwUAdaZeBKC6yvJ9CFXZ1j5SaSWfa",
  "key21": "2JK1iFPkGzQN5ArdJRftFtUWvpVm3Nn9uBHijeaQw9bPGPxkRyGGAAU14TNGfmZfKDvNcHGv4QwRLhpVEFfKqdqe",
  "key22": "3LeKbq9bF4DuphfKCAjyZrdiTaivSeW91TjFqjDu7iTT54NTHoaUBS9DEAGJpZLhXZtWWEJvh8dqbKXq8wu34ESo",
  "key23": "2XAMJNZ3z45yF4hQ1urRAm1AwwJ8kDsyHsS9jvs6ejczYKj9PwbQN9SuR8HWyqwZiD4YwHYMv8JNXxFfuWbrJSeA",
  "key24": "621jP1bVvB1D6AkTPb6jFu8TpFuAHozoZPuHh8d2KncYvyHcjmuqvC9wfmzTLspidyQwzBqWomkpXH3Yby8BaNsY"
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
