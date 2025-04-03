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
    "39kApXrar37qZUVS9ofNXfehmmqERUhPCSYzBsEyb8PrkjEc4ghegQuZMHkHFptunrwKZyVScuj9JoDNFKhy6keJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dSwTik68g2yHivjLuiSzeKLp3FNVU3VUsgNMsENWPw7YRGMhFNZSTonWAqhvYiWvu5kYS49CvGztuXHA46Rx3iC",
  "key1": "4or8eWowmws2z6VEmxKByNi9qkH6jiVAkvr8PZXezMu52tR1qKkpFSFAN6FZ6yCTictKHDF4CUvuVBss1HyjYAD2",
  "key2": "4SvymegQqoZj6E3i679WLqyFAD1pWaDSMUo1LFVZSEL9Aw9YxYbBVU2LJvA5RGqWmbUnTMVHHLfkkePWeN83Witr",
  "key3": "pfG2rmUm3dyzX3K4uWVCAK7EETkeRPdjkBBENLpWqxttRmvPWnpvwPeUfirfYqcLq72Yhp5usTTLxs7XpTroTzA",
  "key4": "65HZALRNxzBvTx2MapYB2ck6xUEYpT8xSh1SNuPR1ULkzkdYXsQ2fHkkhdLwfLTCjbkKHDQ2NUvamNjx1Q4DWjL2",
  "key5": "2hhrzzQw9Y8YQtTqBNmJh9JgCJNKJ94WrSHCVHdyc5hMdYzvZfXycnssyvoy3byM5nw4gUc8F47eGfVJsawWYiDE",
  "key6": "5xBZeccq9BzbHHg6W62hTF2AX171RbnPA85o37h7vhsRMkD9m9qVbxrXGoJw5f4EqkqKXZ87ibKG5C21hM8VJCXZ",
  "key7": "4iRm1J9UXgewgtUwsAHwBraVDweCUZXqMwnw4n7RfwWLHqo2hgiWHKoKeSDetDoigjm7xadwurdNjYnyJkSfjwFn",
  "key8": "2q6AMK7ydX9F1MoJ7D2ADLbpVBbhRE2wgq43BUJq7aPvfibdwUjqvRPUjCGACJEjtZ345T2EnAz6Lj7i8qMp897x",
  "key9": "4UW4FSCthvuXfFqxGLMNbuPFnS7KqRgAkiFZZY1ZoLhJQS4cmhL7udfbFPvDvKuvrCbnhraJpfoTDPBCZTQVNi7Z",
  "key10": "2wFoutmZc6sfgQ8R3vtbQmUw9P4CeiWJQHmu7ZkDjKBR2UoqGyLq2nfqGpjWS2rgYyQ6443LMC8MFFzN13PEJPAm",
  "key11": "5UPkPxvkp6x3qoBgxGfM4bekyq59eac5aAHeDge7x6DffHSE6kDChJhy4vNRWEmTUwCt6aVe1LA2J9d6RUKTgEM6",
  "key12": "3g7tXSAYPYms7Dxa2PG8q76y5CiZpwPN1158fDdn4J7K62VvLMDgGNDSc7ygTfSEg2o3BwD78CaK4CjCaWcrBvVN",
  "key13": "46iFLvaDvTjqaRhyfYRB8Y9w1SJFeJ5Mv2qQu8GfD58CZ4baao1Up1dS8zax1BreA31pjRwurMH8ZHCDeiXLR6cT",
  "key14": "4osunwhEDvTysJphLhDhzLr6uGVcNvBKonFCbf4XqMLPCC2SZxaagRpEyQ2AdkNuGnB5DkehyCpa6iCBE2XJ2Eax",
  "key15": "2n2VYpDRWcoLhJHLkukkd16GHsspdPgnxSw9p1YFUBKH7M8k6o4RV9hZ16sseytoSedJBYVnNZeQDzLDC5TsNXoT",
  "key16": "4c3KKxudZkWToKxnpLZAuKDeHF1aTxdDmmP58EM6JXZEhUsNMZzRMJMZA3pu2QUh3vQJWNfC3Lfy2CsrqxJRvmRM",
  "key17": "jc6U9qYUuwiVwN19TwGMbiBiJa58bZ6U8Eco478RmbKAU3t5vANDygBHkRnuXw3z9SJcFfVqBmwzb5eSzKCCmLt",
  "key18": "3sj2Bw6vrAAQvTAvPgx5VoTzY1xRuw85xu4vNhHNEstvgK9gebVjQ8tTNcvjeP5MJFau5hnVKKuty8yWLJBQS6vT",
  "key19": "5PaN5szLWCPufJ5zTiYRGiUiJN91QhPrzZLiVoJAPxoPYKeKkKMmmqcFmJShPpGNxa87jVs7u1VbrHQWjPQ4pW9K",
  "key20": "4mbeZDMTywnkbLrKhSAVp1zM4VZ44VaePCENuMsWtnzG5F2GVYwmzV2cS7YwHQfTtmMQVgnhFKpzy1tvdqZ8oHn5",
  "key21": "Wzuc2wwCfR7g2DWBJTqq2nf9XVSUswKnu7AHP7LRiE3ttsvBrg8x6n5JmiU9uhjgeT9jNrZN1nif5MGF7UaMG5F",
  "key22": "31EBnizHiw99MMLXVBm2yNF1SA5mJ4UWF5fo9TSLGoi5cctP4aWpRaR64CBFpJTuEENjD4p6CQ6oZ6sUWnUVonc5",
  "key23": "4nUuTy2eYWUrUM9fBatK91jBFYC9KdDSER7qY1Juyr63WeU7RfrP2e4yNrHizpeDcyJJTeeA3JUUP4Lh76PZaA8X",
  "key24": "4rZ6xRGq5H32V7RmE8NbFaRdNxc7gQfnYBxcKHP4ek435Z4JfnFvBxvbQYT6NML6KRegQgX1pP2Hnt5UDLFDptEF"
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
