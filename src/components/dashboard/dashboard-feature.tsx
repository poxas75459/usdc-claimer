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
    "3ShzgwounkCJBzYxttM68fB9Jo3UeQgVs7SGVArL8A2FbCai6Hi2w5sSW8aCZVYhnHbssHnohMq2QPshBGjDpmCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PxuWaYMctLXxz7xoJV98jHXDPssMoAEMMf3eYi3moHf5eUt6Tzq5c1Xzq156FnaUsW1tNjLzYfS7R49BanpVujw",
  "key1": "86YNoZMsyBLMq1tk1WB9e2afXvrYnJaQr7t37kiCA9xRRiumXMhgr6BjyfWppe2ZMg3xecFqznWKJRN2awqNFMw",
  "key2": "34gkgcof6MhQ14wpn773pHLysznfJzwCPgRQVfSuMVRS6r8K1cCFbQ4jawdZzNWoBLcdfaoGYZWP6Kk74AfJcvxB",
  "key3": "5Qq35tC4BW2d23f6D693ua3MYa9Ybtx4NqU5z4dtpFWqbDG2PgRbyn13CUhNdM8decrAmPoxdWSq52nYre4privb",
  "key4": "4VND2iiB1XMCQoG797WxXytKXhBfY3vYNLVX5sB7HnWWGN3jbHpyssHGXNbKsrKW9S1KS4NsAtBZacPLzg2tsQeR",
  "key5": "3eYB7kHC7ujrMjwrtj7Z1kVXXcMREAaPiceEEBdBHGVUYpe95nupQAYJT4T4t88AtdsDs8chrQPnH5WdtQKhTJzx",
  "key6": "2gZsa9CQjEMDJA3izTnWwjfpadE74LCovqrWGgETsJ7jJYcVVbsRxq9YihVqMmDrCqRe4BhM4Q5f8uTPwDfdifhB",
  "key7": "458UqpFH9LiEVHwryCq1869fk1ewRu7rJB7EXjAMXwffEK2tjFToRpNCKdmynuowjSyEJvkawiRziXYnfyCYDujM",
  "key8": "5PZb1A497qNJ1gEw6WG7SRpoRJah1WxJTGiiHTFqFmG3SZa2F6YMzHCqWenCKtU4B5qsZ24sM7TqgLy6Wk4jG6Aq",
  "key9": "nGZCynHS8in469MJUnA2JijLtHc6ytsgv8MdQLEcnnrjTRPyiJ8reMJiUcDDnNztFmGcXanf4ApawsAszg1yEvN",
  "key10": "51Ee6FEKRDwE6eHk2RkmKCayDb4CuzG9zBoHmRCttnYfpoaFHpD9ufn5WE2sSgwVR1McRMKfwa9muXCy4VHedVgF",
  "key11": "5Kev1v9Hubzhm9MgbsXcLD7GqjbKYBwdYqrFnByi6ahy4LcB6G61bZ8nXwEE7VTfTAce9q6UPKYLRSbWem2pzpWb",
  "key12": "4SVF5AuAJceuV9WyLtoJM4YVfAk9ZxtchrsXwsSzphCGR5w74U9JU4rJFM9XC85KXc2k6DAe5C2KDP9YptWQuo3N",
  "key13": "45YEAhJmzPfdsYrKXMJ9GgeN3ryYJhD1NxD9jxqQoehr76MspASaGAtpg3rphYSz9gxwqs8ypEG4ck8shhSHpZiR",
  "key14": "bEnpYGGo1mPGJDpjqemVMVam3UocKUzHXVWnCDfvHDJeHeTFq9H6kRHrYcqyRYgDGYhp4PRuwstXGvDJ1f58mxY",
  "key15": "41xwUL8Yh3xCsmxLbjZC2uQ1zFJfxocRSWJCdiiG5A3dv2yRqaLy3ZksYEzqa1hqXHp3vqKrxADn4mVeRS1LFWW1",
  "key16": "5A2tSY69ZjRyK3SMNwM7ugWzf8cHuveA6zejXebRBqsdrgLj2YVNHf5vdbMXdK9WJ7NNZNjet51XAXHot2TteHp4",
  "key17": "3V2c6wjBvVSXKajQiQVhCGrYeA7V6cV1qydgH4vCp3Lm4qt7rmxMqkmgqvupXQiBC9RYxeLLacrXFrmKiz1nYC3x",
  "key18": "4yFrNUGCaLGzesdRj3cQbvfwSTeydUCZ84ccdL3ae9VPmufBBn1puD6962sP7p91KhYxJCYots8nhkUXBxvAQGXX",
  "key19": "44cJC814hjsMMDaHyUkdqfjQ9bQTQetFYjVN3g2eeDbbKBggRjBDFrQrnEFDhMDLPcQx1cnL1oVsEgrbYHRBj7Mq",
  "key20": "4kt7XHpCj7HzF1vZNQxpF3kHEEb5qazpros5F8G1GbeRYvDNSVo4wXGuxpV7VJ481JjncAa1qLfvfgH732LaYFJ6",
  "key21": "2QwaeDkQo89xrQWVRBrCJRZDpi5qYFd1a434jwGaLCiRe41g5tVJJZrAHsKRVXrCZovPzH6vH9wZuKpXHkMhNVHW",
  "key22": "4AqEURynvL7j1WpGgVRbFzyPXBT32w7PsPjEqz9bF9BvR8c9V9whkX4KwHnuRGjDtAXTi7qTVY8fnrvWf9hu9Jua",
  "key23": "3DXNqC4TCy6JY1vJd3Em4ktsmT7u6FwhPFcymMYpuPnWXakdboAF5qUDC5JoXhEmrgVoiwJ3BvJi2euVAeNpwhG5",
  "key24": "2N49JdH1okCX2H58i57Dus852iCbktXhuDehah5XFA8FYCenkPMjYcY8jnwXLu57y8kB8goWooSUG9Gjj8GzspWK",
  "key25": "5nH39LAh12Xf3aZrqZ5ciGFsjDvFBX3ZcenS3sPiLRPLTNnrpygBsn2Ui5cpigZQM4Xup6WaYCk5cHaJnZRr4Pk3",
  "key26": "7rkxsuD4ukXCwBE3QohjA9rjBYbNJZxUhc39HEPD7Yz27uWuJhKE6akj7ZeSPoZqqWJZavj7jk8jygNsfvftG8b",
  "key27": "27t5AqUwpCPwwurhsCCiaA85rGB6kjNfs4umvGc5VHgyr5gMxMK8NjqiXGcddhWnogrbXAqvpvVEFU16APZy9Q2w",
  "key28": "45U2f8bJeQjyTCpSiPREQfwvUnzyzWGwxijXvh4figSKgvE7VogwHnKbsQ1gtMZEzphcNvmVcCQHr8RtfbumWxy8",
  "key29": "3Vn91DbvZV4rukWeeaKSwCMEr5ooTHM9dKpwGSYWFLSqzbQ4sjWqRNbfqtRnj4EPGLheDzeSHoJYtfK5deEfEqed",
  "key30": "4KwMtqNHo67kDxjQQATCw7s9XbW3bf6PkkSGuY7Pb4RZ6jkroXeZfnCnqu8Pzhj146fXR6oiWR8Dinud9D9HMUfK",
  "key31": "58p5fPhWnG8dtavQfbZGQaYDy6hKJQmbGJeL2FVi9bu1ej1GT16jJHTycV2fsRZinGTUdHzKyJN599QB1uE4KYa2",
  "key32": "Wnaxjxo3DNHwMzxjQkA9wMJcWbxmzKwQCPUMkgaqaUbqtzqh9ZYQFfokFbexxY21Wy6tnDxeiPM1Fb7aRq2C15f",
  "key33": "4XgPrT4hMGFTR9aVjjSSTzRg5Gqznc6ypJSM1jTgEjrwsytdjERuBDKWXmBrCdmFPKfhs6eTwqCBUDo4YQNEceZU",
  "key34": "2unsgdkb7wTAGR6cjzbiz8tcmqAPV5p76q6sbuK9h98KhpHp6hn97gE7NYPVcR8ac7jPBoiU5g8Yvy7zxaGU6gDB",
  "key35": "3Fsda4ZKxXYagacHESN3g66hNRuYqD1gBaGzNQdJdtEvzUxyf35pzwSKC6riEQmBcTks4n84aVEYDZiSFejoX4hZ",
  "key36": "4nXQEt1YwEZvZU2eXW2Xb8LAdG89WN41sTZFKgPB5mGnyVimpWWaUab6oYJiBzPwapM2ySWrUWxaVBAG8zVrPK2M"
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
