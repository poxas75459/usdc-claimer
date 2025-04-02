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
    "R4Kx7pAzUgNTbCfAUrk4WyXNrnu7S7skH4Chpb7piPhghHvWfp2XbVM9zwSHGPm5w4cUZEh6FExzE3p2LkpSHAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TcrQjYf2VNZqKnfkDr8ZVMoPcoDNp5z8AXAn6gBHVsou7ZLPjEyMYJpoQMaEFSoijxRJQ3wA5C5BQSZg9uBv4MM",
  "key1": "31Jj6TagwAsbaPGv2omq5KfyVyHaGc7Gk6mYDuMWRMVmEGRA5mJWXXVcX4ACA1MJG3c3SszJgMJAigD6uDyxs58S",
  "key2": "EMdmiavwXmfJUKmVunPsoXM5c48drWVKPRnH6ktsaeEQsEqyg1Xs9MAeGYpxtdehcXpuAd2i3UdVM2AzUGXZ51E",
  "key3": "ccZ6xApxBfN2w9dbNp9ZvpKBx9R5zUnbpY4sSCLUwFotZa6TR3eCSYhWpzRHHnt7jqwQYk3JTpq5QqUEG3Sj7wj",
  "key4": "4fNCcZKQHhpdyydruzVKWruSg8SMUrVjEYgJdQ5h8jf2g6u4oZzLxQhquWPogNBkkvFYn2SLgEoV2MqWxcbsQz4d",
  "key5": "2R5PYfKjFc7g9fV9aQJcEb9fgGJJPVqZNHpqdSwohWtt1a2vz6KJS2dbwip12ykmWtgPxXjsgk8YRYwaBVkcy5G4",
  "key6": "3zrEUeypDLmxkNSYZvSsRCgN4opsmN2PeQK3KHpCUzpMXGjv8qZrP33MSyeTaSk18PaBUX7zAyoyDNgXiuo8paGM",
  "key7": "4roKU67bouqn3fAwxJw3tCSuHMvknEc1SpBendnaH6oHVufEUt7oBtCPirvaT7FNbXwnDMbmntFpAD1wccLWRpXJ",
  "key8": "5DeCHXKnUShwBd4r1FYtDVTvsvTS3sMy4GPARh23h8Mn2hKWmg3LswkCJLGEcufZ3N8GJcUvU6J7R4j8mCMmhuki",
  "key9": "5fVVU4kXeZexsyuYjtdjwfvWoKmfu7bAK7v9ty9cEiP7ciJpyxN9rmv8UuTty5t6Eada5UTCdX6TBYG6jDZFc7HF",
  "key10": "2o5NqdUwEDxWHF1c3XMZDk5F5biFPMod7ifw5K9hFfXEENr4HAVr15o3vy8wpzqf6qVr6Xiz3579Pd4LWZFNgFE4",
  "key11": "2uoP9PPbxUHevCgLU2uf5zkMohXWwwQg32E4mDeDufwwvCQMJqZm7bpUs34pDm2h4Php2rcExbw9uhGP1P4LccKB",
  "key12": "5nEWBRXX4eXKKUawXwXX97XyR44fGMQCKAhuS4NpegKPBJLijDrSzjY1Ce54yKnHJ9SYsvY3fySQztHWy4r8ELXM",
  "key13": "54zVsvuLwdf7F51kWTCgDgEhmiJBKCnDBkVR9fjW1iaMvjQrkn4f3CebQ3XKnzSAxmcFDxDjh4yyK6VRt4ECcXWr",
  "key14": "5zrRJsjbeLs47mB8x67gdLwCC42vAbSbx2mLspohRmVpboHcR76pPMv8ofuuKyccEUovEuKQUE3sDqCBespucqtZ",
  "key15": "22rzPVXhTW1BZXAGrRUqXcYUJc8tgWQRKmYm93jeNP5GyGG4zafS752F6ai5T22ta4PxCc4bno2RsmGTtkXudHnq",
  "key16": "XdAntctwYxNe1tQUhpmzVLUbRzyurS52YPCTK4hbFWM2dhMeK6hjvsHnw64wAXAVc3UsNT44tqER3kX82BdYLs8",
  "key17": "2xduEqsBtH7jtERtxLRJe45aS4KHNEMvpjvqPjkgZQQAuFsvCPjFKCkyyqm6wpepnQe3Mf4QGhaUkQ3zneticUPv",
  "key18": "54T6N7ayMf1vwntjeKxzxkijDthY1Y9oz9XrgekEFe9Jca432NwPNdEucgAZvwpHmpJsSuNpaY1S8MVa3GJ2g8J4",
  "key19": "PjZTKCnjd7ing85izY2FochePtCYkx88NpxnMU9q7pB9sp9hranmoSxUWWKf4U7C184uxs1dNCmukHMBQkKJFQY",
  "key20": "7ojBgM1qh1aT8z4abwzbw8cFDCvVcoEBgkjQxmGmp3r6sxtL8oYMXJ8j2fsqFBBWd6JBDYVuY1R3zrVsuZ4Fotf",
  "key21": "4bWmucz7Dqd1cTHoycDTJQy27oEhcTwA2bTYbVE6yE1J4C6FJj1Hj7kdDqBvUxkdXbzgwJK5kQrhsUGcxAwDsNSy",
  "key22": "4kzFeUvEpQWcYzEWW6JCehiUCC8WzcRpjG5DxsPBemESSd6G9CACPYWPin3qjxWMJ1aXmtY8B8HR7P5VPGVyExD1",
  "key23": "58SyDj17VcALQc8JFsqcTCDFBn1bFVX6shTxtVoDJfBsfaKEQoPUocAVfq91JRSEV3h1yaVjpcNNihcHyexLYc2M",
  "key24": "5PehwynvaeJdjzfqPsJh7fc5iLdqenFKDinX6aiVZkNTDo3m5ysaNgXNqn2xyVjf2wiwYpasWFvyR8pdA8uwMRTK",
  "key25": "5FJdpErScYNoxyg56jijjgJKjUQG6qYjRcufPTSm7ar788GW9412YdDWeb3GLj3trnG2EMsmH6pGk4F3SWrnGKKK",
  "key26": "52ooFv3XwdS4y4W2qvuFLFxz695qQzHj33dZZ4Cz6WH7fGp5AioUnHPGAhFsZYyQzuqE4qEwxKqW9ssTxftnTikF"
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
