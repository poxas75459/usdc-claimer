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
    "5AwSVUswtj2YTyTTL8p6TjRPpcMS1xudK2aGUE3PAFECZJ12uX7FZ8QA1oSUpHST9fozGFrvwGqtoyfsHNZ9Ctop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uMBwXhMx41A51qNFk61irH35euEWbbJxVkhy6jLsz1jnVBQ29toPdTbxxXW55HSe5DYQQZANCG2byFczfTErej8",
  "key1": "38yw2udhXKBgGo5Tde69oYDDuh4tiXM4NYxDsZg6CMFpfZErJNBAgzCa7dD11wC4eAKiFaegCbjfXM8togLfGLcq",
  "key2": "5sneafwtUgak4ds6DFQG7LTFtLBFwHrV1HdRR9SQS1z1dzB54XdVJ4PAEL4iEVbji2mhNA26odxyKNbAtJ6F8umP",
  "key3": "7T33oUx9c5BJ9dYdhRnjgV1gEQiiPSK27L6DWh4nU6LQHQPzfANCmu86jZMYxKbo8Q7Anm1yJUtyd1WV6Nnydhb",
  "key4": "7dqpybKPtdYN8MDvdzuFsZDXNu2BRUJKHecABDF6iwK8x4WFdZ2sM3QjBKfh9eh4HGtjn4Gx1c4DgWoaTSybTuw",
  "key5": "5NjuWbUA1BhjHWF4jrAmtrSCw6PK6FAr4ZrUfXnLyYsmkZxQJxrqXuj9VfmeoAj7eLbMAkATtQMb4jE3LtYXcttT",
  "key6": "4JSmuUGyjE6Dk4sy6YPLrTEhwMwu4K2Vtxhh1c4DJMSWy3GaB71ousXhrDA26Tc5fybKYbc9FZ3zHJWw3T1p2iYN",
  "key7": "H1L67FAub6jtK4G3bDQwZV2jmcn4FsL1Xr8G3mZFshbRH5HzNbqK5zasbiZCdd5eBdwxVzwXatNAN3CAkdi1Uv8",
  "key8": "4C7JtKcPj1RPzBEkTuPn1toACmj6mseC1qhG3wQwYitPMunM2Ceb3RaFUtPv3z5rCTHsUWAQhDVVnsaCQoA7pk9h",
  "key9": "wAy7y4ff2HyTgegqGmkV1M7mDpWgVLVpRzhYSsMDbwcQ4q87bAjZpY8GWQqJNmTQRFcdcPDudVZN4qyudvu7CaV",
  "key10": "3P6SqtUmx5EsygnFsekiTyvdvhE8KLpX9LAkdRk6eTg7wQhN815RhgAGbrnVZk9cJxANQyvf7XUEwjKWNUCfJe7p",
  "key11": "4Sx1SuYYrSgairtJjJZDcMwXef4zwEvc5demNhEQuJnLBiaKWjHzePGFMM2LdpAw5y8mrB1qbZfTQk2q5yFL9QmW",
  "key12": "xwRcf1aer3cshHwAbHw6exLx6qQRVXpxShrmD69mvJv3zApSUTw6GkivZQrgMDrdiYeoaNzWEbnvb1CebDBe9zN",
  "key13": "5kDWCZWfTEEZ7pC9mkRU2ckFDsYTB1HLpUE4ULJaMZd778LRzRuJXnhk6ae1bjMkdWXWwLNz9sDgKPhectHfdapZ",
  "key14": "34egLPeVtfcE6sJuQUAQJpaVLncidD9V52AakgZ15freHUpD5KnxStFnY8a5dbnmFS4GVWuSTeYBcwL9bN2JCXuV",
  "key15": "VACFg7LVJ9VvpKBJ9NCHD41dJ66jATPPUHg7JL7eJbxtDftv5uvPjjFQaDtGmVxqsLJrQF6bLUmUE2mynZR1EEv",
  "key16": "3w8ugCit6ubhMDeEq91HPfirx6VRSHwu9ANDqDCTvXQM6YBByFmE4pN22jAevysq6fdMbEQHjr2tjgirUDaoEfGH",
  "key17": "4wKNcEjrZbZykGuYjQJbLGaWsT8KnGgZ8Fg87AhUztfnQskGKU1oMYRZ2d5fqDGh5ohhqmWMsnNhUJvBi1Fac9gD",
  "key18": "2m5q5tYLXPGcGma4iNueXiABJ3mb2empSWJGvpikoLkBerSmx31JtseoueBPeNZo6ZFpXWWuToQvanX4pBd9uYAq",
  "key19": "2Pyi3HghaNP6B4GuxMqCs6La24NrE86RXFVQiCMj62hYo72qsyt4XmM5gt2C5eMyDn8buqCjHYDFc7VKkqyCNkoj",
  "key20": "pHZdYSEu1fHWuwkUpozQH8crhyfyjPxXf1suVmZi2GesTUJUrMvNnG54qpNfByKLCzPGbesdBA1rkt39QwvvVkg",
  "key21": "25zjmA3K6yMKZxK3faJjg7KKAuUNVppxVp9ySKcQtjC3UqHXRA2EHGGtJnz4aHSNWarmqijeaKFFFc29yKvkpZ35",
  "key22": "2PFLMho921A4x9aiEKrZQNtFbFmbhXUmCYxRJmkERHSRQt8MqLktiwjSt1dP6bVifKK8MAvD1cgCUwxtVWr4JYGK",
  "key23": "2v4jKwHavETSRNk1AXzx9a52Vs9wty2fDSPdi9p4xY9bwfWSxKDa2z3BwCntZYvxLW6LeTANDNMfB99BppHTnm1K",
  "key24": "3EcJLF6w8d6J3aSZJrwgYJLdeRBKCQh5StbU1CzWvi71HbJMcWrCLzLaVPUBLHXQSGQrz1VFyVAxm8CX8bbhCByg",
  "key25": "4148T2tzRLmDm2FPNhAZXKHiukC76vxqPKCaxDLfUfzcpZZ47WMPGmXfQ2JfAyN4q52xKfGr1XHDMw2edr8Y9Cdy",
  "key26": "2mU4R6X4JQKkAF4Ywgposx7KiCetepqogkEWzf934asvuD4J4HuRrzsHeoAJmGGMCURiZUy9L36ZUAShxn19a8TT",
  "key27": "GpSFwBCpKVeFtMkpofvmnDyYigeByjtDJrwDMEQAjBSeWqQQYv3egCJZ2T8WYrKPYdyuRMsZaUUQjnrxSk4jK9r",
  "key28": "MhabQDZ8cQ9S43kg1p7trF3wRsF2ULjmLjoNmLvg5WLw5t4sEgEsNWY7iER2X8mMwbebKvdYRpaSqw14tFaSSJ6",
  "key29": "E4tQ9iaKDjotjxgL4RnMegsZLcQpgTrqZ5vc4Bi2oM8pbnz1iXG3iCC953Fkc7HUbNxCqAqTXcmFyN2AoYq4UhS",
  "key30": "48FteudG7wEfrVXoBscwwy4ThxZMK4gXrjXAfgNxKcz7uLXDbJXQcL79ZpAiY2CkfZx4DRKP6NPW8rGTSaBX4bbQ",
  "key31": "39K5EEewtZmFKAkv1QrPRVddn1BwnA8fKxsUsKK4dSwGWAfoj3LoYFzJG78w2iJoRgGDLLjDkmi3mJH5nEfGXotg",
  "key32": "4jLXreoTmgJK661gMr441NhBjeZvhRtDvTrXzRCHHd82vo6qLuuzWkMnX9S3uC6cuWb8cj6pa22x4t85uoBmhsCF",
  "key33": "2ssFhynuAdw6sQA5yjFo6CeVbG6n9yz9oi67Ht69P4WdCzW7YRGmSZKm9DLh6rs45FWWqLvG9pXzsqp95VWWgewA",
  "key34": "21MCBJVV3R4WrcyfHkajitUXHKpTwrqcV7eaoLcXMj5qxfUVx6vgJyXtu7KQHpuDcc91TJ9Cz2kjggC5NqbWfgUw"
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
