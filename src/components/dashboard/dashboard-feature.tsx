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
    "5oi6qsnRSMRw56bBAnZShieA3txPPNaFS7h62nWeF4T3Fh6b1zaeLVVb7yZvYny8BJ3M4SMPdzPKCmS455eSonwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CmbWrv8dRhCTVHzpLe12niP9tvpuYrEKAjHhrBNjsM4euAfq9ns6oAk9Nbg7PwNeVnXHrtKgw8D4tmz3WsPc4CL",
  "key1": "46x6yd8qwVrDnWQPmEVBFXT5HMdzgu5ii8xkfgY3ynyNwMLskKZnMg5ktNt3JrwX5bF4eK4GqopDfyzrkHBprW1q",
  "key2": "4Czdsz597wkg2skSinxtf2jFG2eCZiz4Zf9rEqXPbFM25eS8ohMkN2vEiesvTF2zhLnzCXbXBRoJpc7hjFVDoSwU",
  "key3": "2bAUQ6VfXfb64q68a5gM8VsmHcYU9PUnCuS3kyMH7FUas4LN9bgCqb8nocoYCHAe6sZst5UANFTjB9D6qk41GdS1",
  "key4": "3rPnHXA4gyETvf7avJeTgbWBBRDXbBLBD4Zjw6A6XGkFRz4KTUHmv64RZKXdKrieaFUkQaaDvzzmj57dVePJTJKK",
  "key5": "5BJeMgtAPhD4ms1mKPmW2wpxxGazvK93S4rzPhBn8m9f9JcXnJ9Dumg2tpSFYLa9K7EvDUpJKocBdNE4zkzfzPAD",
  "key6": "zLaswq51e4zqTqn4A9oRzK3yNgXYsp7DPpf9pAPFJ43tkF34NpcV54rKJfEtfJXDjPmdRkPhUfUZjUkJvnH5Bg1",
  "key7": "39pTSjgtuz7i2tnJhdiETPH15NeHngYFxYMJYSyEJY8tsYR4tdphk15ysbRZQ34oHemQRPaTVbYySembHcr38vDh",
  "key8": "47o2kZVGwE7qGwGGNLaFeKHHB3brvbryXqRjFio5zkw3DGwfx4gCm4QgvVBpQN6dTfMeRpJzwMieM2mAQZdknoHi",
  "key9": "3saxQVn5kNExMKpMvDqwyAPaCty2Fb8uVzWBBjyDmbNeLR2GFXaMrKHhQwZFvQ7umcCdHwkH38EvD5bgThCWgbS8",
  "key10": "2X79nXUVjKwQycdgKpDJGSZWXJWrMQmGYwnbSSmqsFfNbswvA1JvdRsQf1xYu8AGNfqNuLGTXMDgbzTAxuW9xW5c",
  "key11": "4PeZf7bdLsU4pzSTEa2DgyERGPrbM96SwKzToGaVNu5u2R5s6CaTE52iKd9CoMojB9pyqpAMoLeEXFgdjrfLdZX3",
  "key12": "LtjMUjrexd6ty4SYWR5YqDoRe3RJ6uwmHMYA3n95pLHQgGDU4vcVrqPerayCLB9KgfUjdYV8wjma7ME3TZXHai8",
  "key13": "1q43nMo2XC29RC8pxZWrFKXr4JSSeEW8pFGoAEjLPEdHEXoQWGYhayhpQiWo1ECqpPs6Aq7JPjgmJbqXsfNtrAK",
  "key14": "2ZrrvmkwmyyVrTXYG6JUXQyMGCrK9k2YWV6ViLr5UYRaGztfhhmEGk4pz5eiUwLL3pt63yq5au2vgNxVqBu8hvtM",
  "key15": "4vZUfcHseqc2TNDAs8wnCJv5j63Gmkwnh2hZzFFu3DQ9cCaHC6tcsy96uTRnEc79PyeL3mJy7MMWonnaeW94Gmd",
  "key16": "3b8gkJ8315TD2NVSGZueJT4Lpi13nzp2LoUcTEZLPgRU4NBFGMJK39z7EXnnq3eEZTXdf2WcWbVrhCdkN9ewonBg",
  "key17": "5Yg9MreaG5Awh4LVvvp9rPoJFoXLNsZHRPRcB63uKZTm8mynNNXmnNoJz1RdREP37FvsYHnY4K3Pukxj1e3W2TrD",
  "key18": "2dy3Tj16K6xJUdSz1BUec9SU9Mj5t8Md2muMYaDaMoukhsFNMYeaCDSrw4uJbScNUB3fiuF9ghuq2U8ueqGX49Rm",
  "key19": "34aHtXzBU8FBMU5hZAHfjuNz2BA9aD3Uf8RHU1hTeiny3XEArrY3fseQVGyMzqTk7ejkQozbj3jketwUeaZ2zaXE",
  "key20": "UYUNU5Vhmwei9vVLysFgzEBeQsDZazV4ez3FpVABsLScLEtms2fbSytraXiLtbEcpmHZjgL5wmqUE52VqKevyfR",
  "key21": "2y8zSDDLLCTT9VFU65xaHPgzEv6KgqNpAVPpyZxDHtENmffEVQuYmZK53EHfT9AxDLcN3QM9PffG3AfWELrCkLAg",
  "key22": "fcuM91rQLZnHgqaK8JExJcxWUBwjj2VRXFYVH9Dfs9JRwu9StRbPAxN22FCMMDq9u882F5qe4txCQ9HBLDpZY9Z",
  "key23": "34QwhRc2Qn1CL5SQjSyiM3gbUuwFwBzL4Jkv2nvZN1me5bGEjNtD74DxdRNNo6H5gvpkUFbit3sDFJFAn219u4cF",
  "key24": "sDMZuhd8GfRGtwefh3x7ApcQ7r8h8HGTXwHn7tuPvtNxwwp81RcdEcRxGR9MezQubYxs5uXSfs2v1CPtdsEqfBh",
  "key25": "3xMpi9yRVvvTbvaE9iChx9a3uzwimoXdRbM9rzzrMcZBgEJ35MxL4af7v3APRgvXKeZ8Emqb2mTgx2nDXAFearyd",
  "key26": "woFP6AP4a2RotG9SzDgU3Rq8qpbyqBwGf85FX5zRhjY1sRR8KZN6KtoxXDNdDZsVtdev9fG1huYKfez15HNUQbg",
  "key27": "4TowgY4axxxs3EaiDQfbZJCCKnjPDPWMVqd5FpQ2gUBUUAdJJrRxXsJWiTZcUqJjESKPp3fefZ2QhWRHj9D1j8rY",
  "key28": "31H9yCMPRbbo1c5bBiBRuFKS12Fc3FsjXvA3cWjf9vsDPHP68AS7XGDvdvWc1RBTHHuodixgbL5gb4HYvK4CQZc4",
  "key29": "5uUfDrjs1yN83JUjFpaMNdmUC73sgwGfhS89jnd5HWyvVmt2ai97u7nbUNGriPq6RK39LSe2jcW7YxR3ofB4n6bt",
  "key30": "4XLHHRQfLa2Mde2KJj1Rjv2Ne7gpJnTGbseRwAkDhxAr7aw42keyNvvadKsBvycLhUbbypZvSfG1gPSTDFtmm1SU",
  "key31": "5f9bm6vrQ2HjGKsZPheHNRMEaPMvVQCZZTpYTFUkQk9NpigYqPyh7pUSjBnFyt7T6eL636tCAhRH3U5cdY7F4ujs"
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
