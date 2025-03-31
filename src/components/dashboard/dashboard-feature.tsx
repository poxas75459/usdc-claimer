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
    "2AoYAhzHZ6zrNrFbQN7BxeLN6h41mpix5yq6SDfvEWrUwagB78eL3PpFLnLmsg8TK1iaYMeNc5Seb9PFChrijFf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43CrexXNVCdeLrXQQ4L7FVdJcrVZX2u2mxD4nzvXNRcYhvHEZ13vtATP7fWBFr9kM3VxP2G7mRBXsj52MNVSV29o",
  "key1": "3Hwm1Usuwrz2NMJUAK9cShcsx1xRFwtUGyN87bBFuQbazr76wm3vxUx86WaQXdFejj9eB6GNXTuXfpM9skeH7uKr",
  "key2": "3khmHcSpz1EggsksC2Fr7Y66NiWb91P7JtaUazQmy8TD95WdU1Bq31qt2PFSYFvFcjP2Jtor9v6KdK2aqJup55iN",
  "key3": "CgrWY5qXAg1vyeFsXwXhpzBoMWWkP4SNkeNJp94XNTZHJkXjL1cci8nzveL7W5vdfMQ79rk2k4mJHM9kZNrXhU7",
  "key4": "3tCAbWCjjk3Hf6Du6gtwHYtCQHNhymDUU4WjAP3PeUZhQRKeMCxVvFweqA8cp99R9GAVbAAuDJCtZwpVkEtx2QuD",
  "key5": "2LzLXuMQAvLXZFwUu4D9nAXVYev5gWdzcaQKFKYnqKSiC8KxjYnHswfpDakyM661WqWs3omSf5ZNgMSfYM7tNkRA",
  "key6": "5s6VV4jeS7JeCnbewM3iLHjWXsTiW7qQiLzoqeWZCHtdjGB3bY3vqdCZ23t1HKZ2i3RLnumGJBNL8TRoWW3x1KDV",
  "key7": "2DJ6rrXtY5Y43hJgKAuhPYnUEMT8HAcwR5JsVmQnVXb2JYLNHRpZEMp9tquLcf7KSvAXymRF1xez2UTcHvJhbL43",
  "key8": "2bcccDfaX86CX1Mhc9j8FMnc89TSWmJtZhKC9TJbiPAxaw9i7LEMU3SveLuD3ejVJjG9XxUtNosuKfDQypF3M5rc",
  "key9": "32tKkCcb69wsVBRUrPs6UrHJijQgKXh2n5GcBPgoqsLictCBc2G1L1SkTRhU3BYsuTd4k4xph71xFhoWjysR5nig",
  "key10": "4edP4xs2VoXgKrkZ9qFKKREQc4hRD9BgNXxykhceTpgYJWnn9m64A1foivmH3cp3fHV9wZhtHQVju9ZGhTf9RaBE",
  "key11": "gTTjz5tZCDRf9hj2BB1a186WKVQG9Dq1sWGUL3CDWVEMKq9hkph3EiLVYgcWm9KUJppJxoZ67GkdCJG33nXnf88",
  "key12": "4nNHDCn6sVS55x3ZoqB44DmKqzcQ2V5XEre7DamYu7aYYpsbGDsVDjxbKm4fb1kMWLfWbvQAngAjCt6QYmeVBDd7",
  "key13": "2XXc6CAqFGG5J5FUKncNneHwRELFLz1qawivTkw5MMtbcsFfKF1cTCWRMdGozUdX6p8JudcKKetYn7Z5XhUMdV5M",
  "key14": "4PJjR2KvrkLxzLyv6fyMVRqCw8SETCUe5WydPCtaGZjyY2pc3Qq8SjYbYNDY1pQ9Jz386k9TrH2qvbKQSNuyHKwK",
  "key15": "3mVRPZhqHsM1wYxdoHZySQDoqGtpocmVMDhqkdRM9khGnmxSgcSMgRcpDxUiVFYT9Yk8P7dqoc6rEKqRPevmV4XC",
  "key16": "uwXSYFokp6CsKmrJ5hb9bVSg2ELhcgXUAXtSRibDHBi6A89BLf6GpvNWxrRawpWKNQMAhEyTUTovBtxQ6QALrn1",
  "key17": "3111rKnK9he5J3z5JntyhmtB8YD9n7w2ssgtdsVvQBST6J5921d1dx8jHVHY4n3j9yTiJAPaVRhgLurmEVjcGTqQ",
  "key18": "4UoWftLgC7ERS7KPsaaPz9uDQGEYkFrLVHGSHFDDEqyAdNATpJhNLnu9Yd2gHaD55aYSdytcKFxGKuKWvxaVKF8P",
  "key19": "5YmE1p7fGxW6wmQ7ZCqmYjj5vkq3ezUAmYyyEmH85yU8zBVPK2ZDZoPGob4ZXUtixBUiW9749XjpyVZu1qLnDUot",
  "key20": "64LWLAYf2WbweU2B15V95PcYQmoLmqYXjAZbp4EegM1qnfCdUiQ6qgMU3aC2p4j4yVE1hyFV5iAYhBnZyrH2kHSe",
  "key21": "56xGsXEmwncYDuYjQ7oXvWxHXoYo2ABxWz5aYdS8HQ833kr4ZZz2vRxV1ngbQ3oEGRALjnieFxFQZFye7jRbZjdS",
  "key22": "54hkUQD4FCKLvvvQ3moGzT23xCF68RvegytPCJmFbGAmzicyjCwFiKnSXik1dCaS1yT5gmmhD1XAxak7cYmiUtAp",
  "key23": "2xXozaRyp6RxUk2rPzQuwF1DhZbpWcX5XwimANctrckUeq56pjbzGB9APQgspCpPHAxu51dAJURQsWcNfft1sNPj",
  "key24": "2YHajuBDbm47j6ng6nb9ntiDw1NyML6VSEZHKSZGchGTQKDrJcRPc8e9vuebts4bK1aRg8h3MtBnH8XQcAcbpCJu",
  "key25": "ytAm26KS8tG7B89RcK4x6HqzT5z2hFKTVGXrBcJkK5FDtD9LYLad2c7PgVE537Fo2EPxX3w2CrqdSk6PEaBvKv8",
  "key26": "fvXRS2KvGzcTad4b8m84XaqjQznT8afEqsNbdL7cUXDSGbJPLDzuwDwAm7HKWKweQqJDTgNNzNSDaMdCWncnL7d",
  "key27": "5qjusRwWsvN5BuGJi4facMS5za6CfyzZdNUbTMctT1ETgwGk5s4jKUZwoR5Kqbh84GJ5VrjmWj99YUkWrPsDTsFZ",
  "key28": "3rVRw68L42sg13Mmv1DaRznjn7WEg85tzfJg7KJK35r2SnaksHL9yPJRDfY3mwZRnPCK3cexCKuEbBNroUPD7ezn",
  "key29": "4zJGK7LMCTntgavxCPndHoHtVeamiJPU85ERnEgS64fKWkKFHT9TdwfEAXKL7voKb7ttueJk8dCfP6CKVDvVUiJB",
  "key30": "2mW81QdXj8MW4giUgS1gub3WSxmRKezqtuUu3GZnxdjvmZPxTZkfPNL7YAduFvpMZZf6mY5zc7MABsYirgKfbBee",
  "key31": "32HXrBnVyy944G9Yqs4Nsh1TZA6DHBoXWj3AUqq8jBBEjM6Nup93qgve6oLuKMzjKsax3b7SV4fTP7Uo6ExeELjx"
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
