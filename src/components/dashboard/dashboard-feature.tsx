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
    "5RWKo6BPLBpQ4C3LC4oTZ5MAC1sU1w9yurpBYMqzS9b8PMTVvR1ipEyZGo9qwb89TjsV6e35sMceoFtXjCUPt4aG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hYwSroEnmJmWJoQT1d5DxdDFZ3vCrTxZixix65B5SpKNnB9nJ2pjC8tJ3Y7yPExMECMnoB8d8DNzJV649ktGfaD",
  "key1": "5A7PW6DjJqL535hkS51tLY6KvccX4RcA8PM3aj1PW2pf2QYJXMKf6rNv2NzYYGDW3167mbMzd8ZbCZ2T3EyoPvJx",
  "key2": "XLV9WQdRUKNTax6WnMsT7nP2cscmtEbmisQPL4KosHLirNKQFNvFscHDwBDmwRC54dZotAJR7gXUKmutaGZ4hxr",
  "key3": "5cBC9qQBaCDPNZq6qTqffKe59gyvBnHHG3tWsHjx2RRMfV8n1p5QoZNTiL61GtNNGpy47G5qekQ4ZLFT9du2Gdrf",
  "key4": "2cPP4sfWeVQbjty7L8oi3G8gmjVJcyUDeKxbbLbZGfMVgJBeDzYJmDfX7rBwzG8qh2SfT8XHDdchxHBaghhJSkN1",
  "key5": "5DKh1gQjEAb259LDxRsHukt7MtYYqkVv5bXosyNVDy9TwLAMn6s1CbZZ9VTJRwSUNa6YU8AmYgz5T1eYSBXAQcuW",
  "key6": "4dgV3PMDxmqUVBi4v4TKNk6eDWkazu3yRvgXYagy4wsfMNa2CgTZm7BGQ7Urr1meeFhPsrKuPz8TmGpmZ6tseTi7",
  "key7": "4wbJF81Ggjborgd2n3FuRw7vX6TxZUk6g77c8ZyRRJJQ71mfpMuFGF4y5ak8yHEKayeK2s71NshjgMrw7j1TknNV",
  "key8": "dQfCQU9YnLCYFdHLkY5dcuBEYmTnDautuysvdtuLjcfoDTFVvpAutDPytkoYm7jWx7MrdgUUyXbdNrDJkiniHK2",
  "key9": "5MCk6kiFEK4akFLThhhUuhKmz7YMz9TW9ft94p1CSrbuAXDYVFKzoXpWKPpqipgddyoCB7AfkGpofuyebah8mNAR",
  "key10": "5uKJyqPSgzoqGMhx86cVpNS3E8YiXKJw5xn86EdFhVqgKwJe7fxkG89pC2StrPtBQ2M5XrxVxnPRXAg8GkughMmk",
  "key11": "3r2of7rRad8uzWUqFnYNpfdWCyUzx69gVp1HaXim8FhV3pmTyagDzVncA86Fi9HcbnZBPu45ZgJXGxwDntr1bXT9",
  "key12": "2PQQBo4xoiYDxUE7yr9C8mcVRSoAy89zegwjFn6y9sjehzCNAQcTow3FaErLenDj1sy9BCqxkqqUee2ZgJxwcF1z",
  "key13": "5FQaQraUY1ySHKdYC2rAK6EBxeLkrZWSMxxBBGgrbeQTvCXYQvvurY62pPVKVdj7F6KX3qWYfMeMu9dHaMHy6bYT",
  "key14": "2LANydV16WRpUw6MP82DkajM9wKP1f6U7nbnL3PQp12rUy8VWsV1bpqpTSGtEJgzuBa7ci9YGGZYAcoT7A4PduBs",
  "key15": "2Gp55VrGL2fy1qZqF2GFkhporSEvNJJv7Z1XLAfBxLArZQe3XqDGn93DjTpt7M1DDhWzTMBQzUQxXVFKBUxQoML3",
  "key16": "2Tyk83DqsWFarUvhT12wz3TR34hDKpnz8gTQMJ4u3gsgPuYvYLDoHQMaxHFujfXTvf72MCvRU9ApV5Jm4G5V9e2x",
  "key17": "5ZSWdKfwTu33VAkcgKiY8tTSPS8o4WVnwsXgCD5k9o62LhwthKzxwkpAMJ7UFyoYMexpHLK39oFcwxRstW7hY5Zv",
  "key18": "4breZYTtpWBq3LmLBiiuW494RkDbXPqrX4eAw3A6y9iDhAsP3Ze5Mq7RNBKaGyf1wPvvnsYvrQU5CfEFmmXzz9zD",
  "key19": "2Zk5mWHWMvdkkp11dWbR1aCRTDRiJCQPtZ3mA4oGENa8fPKXczRZedhuvPPtZwmECy7SXdXCCUbfZwBDjecoyAF2",
  "key20": "2uZ2xWTiWtCV4f3GFqVAwunVAPF6xCe3VLNcYhVPb4GkRJcE33HY336iAocwQTnvqB7bjyCZ7S7jNhDSRWi6Ap9j",
  "key21": "BHxnUtwvPDhRjNR2VaYi7yStenPCJAYBpGcKT29pZfcPcdFkHTgiNjCEqWmiaPpqRc7SeLq35iRkKLWsUTYNncy",
  "key22": "44jUEbCDqBEMtW6xkbnzHC7NwM2eZz1sUuTXaPXjo7zY919Jiffv4FTmYBMhrqJdNZiZmcRuPyGkqi2UjJxf6L4x",
  "key23": "3TK7bM1jsy5NYGMja7PAfEH1Tv5Rvxjc3f6Kowh95ZTdseRqNxsJzyGXeXxC9yMmmKd7Bt3xH5uzi68PSh227VMt",
  "key24": "4AFuj3tnBFCuSNPfy3fEoZygaJh1kyq9vVbYJ2jZopiTZv2Ztrct5Myfd4nCEBgo7n2Rt6wrJPPReji63ZqZXiT3",
  "key25": "Sq8RwoTDmg7ufC4WVhxYFyYz51xNbBD2xBV4wxZgnEboSUWkXDmSPtnbBD68rF6mT9k3AkwNDRcNswkt83ZZPUo",
  "key26": "2r1V8JPaTQXAJBAj2LBC1RPYWRjrbdkX873gUnbF8stZCT9xaxCqAYgBDojQCnfNCXNRHhVjMANUgGBULNYKmN5c",
  "key27": "4gyhz6nnTFqAWbbVRpYaFeQXnK5H9zwfxLJQpCw3R5ttoVQkiMR9yU7qo61sA5SSBwo8BPLVa8KyZsboYhszeqnt",
  "key28": "4PAERJuG6o2KFmaMEbcC4nHuAuUeSgVPDksCW69XGSXdyrG3r5Ncrfm4EMVGeD51GGdPsEnJraWEh6Mppdud8P3T",
  "key29": "yoykE571PpaC8SdVpipKpNX4qRgjR7vEVJYC3UByAbBK97m1dEa6hE1Ex8RLEKkwYy26xPJTM5BeLbqiHpVuPE1",
  "key30": "4bdnzEVPL5abUuRfdJ8QfGHpqRgctGMSTVDFZQ5GVBjyjEy8ftdhgYVD48icgqCSc35y338zCUinHSCKfiNYWdJ4",
  "key31": "5BgDYV4aiZK31p3L7GSmJdH8gW1BN44Dg3wVhKBAdLHrR2Ta5gcv3YwtDAuRGkYwn9CArgUMouLBJyCmgdJVqp6G",
  "key32": "37ZjLsEvLEWR2ZaQiWutgEuJEVz6voNgZbrt9WMjGggSAip7mGQQs5Eh6Yx6hGfrRZ4SPCqkZx3iD5anGSQZpVYz",
  "key33": "4nStQWF4bVavuiJT7FhJw2KD6U9MLzwxpqBm3GsXpv4tZGfPLrEZ7wMwB8UPNxQY9cpvrQdVk8CHSHEEjm78b7Xy"
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
