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
    "2bxQTVkqZKbyiLoAGQPRhsnx21DWM3GxTTeyo22vPiEUR7Fsy2vHgzCNeVM9JueCwppHQfYGH21tfNbhK5CW3HXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BjRJQ2u6TkzBb31FpyEXKPAn97mnYw57wy1gqFA3E2K5kBHdJfHAyAZ7HPo5SFw6EP2vJtqhEZCZrJCkKefPHrM",
  "key1": "cMqbG9ph8kqrVSdDRn9AdHhd8pFxZAkR6XT1ikTQBK8u47gd4xUuWJH3pFzNKHuereczzASkMo26e4LogqwtsYU",
  "key2": "3aREULXSP9KzMh4uuCMVDgrwHUWNgH9Zv3YN7rm1hNUKuhKXqXgwib2VQDDDgyFdu4ZaNjNvt4N98ErmUvWC3nEk",
  "key3": "4TrXVJn73nZvUpgVKf5b9aVa5MyxWcvi1r4BFr86rTKTx3EGphGzqmNRit8CvFZVurdiYRUCB3tWvw1XXmMNHzT8",
  "key4": "5p1RUhizV5CjgtCXHPJqYPH37NVT87QHuuk5RBGQdMLW8HwDtKSzvTPaSBpcy6RfU124xjCJf7Jsom2EH87nTDio",
  "key5": "2ZvviC4jNE3aneCzrKUhoyEFaqToZUubXHSCYNJrFZAcxkcsnpjj53PE5cHVCTPEE7CXCyNJqLEzMEu7Xbq2gRdP",
  "key6": "5vJuHe42H7xhHDBMhUEdgZD2nnrUKFG5Y2fbZcVL7C77wUcyGq131nUUen9Dqaw7cZf1eFv9G2dqiEpjVCnNrFyN",
  "key7": "oQsnidjCngf8xoPDq5nqnWYk7A1MFMfNTJFpGoiaqam5HhDYquLQWG4kEuPbWysgQ3iwsYeZ6vqqmKbk645HNCj",
  "key8": "mmwiWpgnTCz5nKqr1iCKS6XumrKbhC6Z37w9g55yGTdXA2dw5vyRWuum19so9wysvZ1wCy1tD9vWBKAazLCHT6w",
  "key9": "2FaGo3HkX4S2o8sQGW5RCQZc9q4XgsXtT7zw8AF6bqHbm7KJewFQaEdG7RZjrM6Ra4VR2uu2oNRYgQquUfQTLgh4",
  "key10": "4fgerrFTMLE6M1XXeVg57jac2sZeyvkJnT6axrhYCMjtRau5V2RPSegsRwwVgn6isgQfE5a1Gd5N2RDL22CHYqsX",
  "key11": "5YEtNGiPfKbakq95AijcxDWWrhMAfk3rqoEjsAuuzg9AKYfzyNTTLfVwkVvyVPnQ9Gbyz6JjnnzfhMUUUymd6amV",
  "key12": "2qQFdEpWUDRq2ayUAHdDcoVhy8cfzkCsATYzQdhn1c6Mu4UyfR7gXkmANi2U4kma1aK8B28RaZtasU5NQudyojEY",
  "key13": "5Ke8NuxvWmsUuguHAHsHi4pnPDpPnb3MZ1QW6dfSnQWuwaTbGYAJHPDkZNdZgRacpWt2euBNnxgujxoBzycihfuH",
  "key14": "56yZthcPFqpYQNuQDxhVZeDmxHYHHgcsKApp9LtriARPVXJAHCYLkH5AweYERuRW7Ve8dx8as6P52V6wdRjZTPPf",
  "key15": "2PewuarDcXsqs3jko9Y2xzdZmB1MFhnZbtXgF37AQ2PzQ9b8SvxFFQx4gQSw5ttjUvJ9H9ry7VBc4Uc5aZg3EGbQ",
  "key16": "51cx8gs2anZty8hC25hwi9zYymcGDWL4aaGKgQtPErwmamGNMZrXSgX7v2HWY9GDFM4wfBySak5HmCjb5EpRPpku",
  "key17": "2tj2VEPjWBfvGCW6MASvUY84TtDDEqGWSXKTrDSwGPgqVkJ9Y99ys9DcYZ1J91AZi6dB1T7Ysr9cJwGKtn4okJhJ",
  "key18": "eFYgniqwTeNG4TeFe2sv1okPKT29gxsMCmiydrGXBstPb8C4HN6eZfL1Tv1Cdy6foPnnyHJZxPYabVCCJJeQQJC",
  "key19": "xPZbiJz4mL2o3VnhXXu6SwWfFfGJQU2xTy6pjCHgKYaFM9jm2ApVCYebyLBQd8XWzGAABhQqbWaJm1dDBt8cJdS",
  "key20": "4ro22fTtCQPMnDn12pjfvaMARUNK7ypeCWnrq2v1eQJKNLhMQRoNPttj594w25xaGmh4rxiagFtP3ZPGhRQBQ9Y7",
  "key21": "vW1PD1dn2S8PeULE3EUij5DYUA1AzNhyFN692JgMA7FdEtSbcy9mr8xw6nisj6aTNMEye3JZ1kJKVrcVY3yzYcw",
  "key22": "5cH5JpNLemEGVYPCne12L6THbH8iHD6TzwVT4qjqwFTQTKVQPJgGFj2kFpkw8rHS72nTgxpG3w6mhHAmFnFNQGLe",
  "key23": "3k4ZBr1TgDzvTz2fDuFNj6Mxs98Cjrf2pPwLJDkTJS9AiJ9MZ2k9wtkYspaoLGegBq7aV1YvndUxaSkiXA2Sndu2",
  "key24": "bm2azGvYkAVhyxMrsKkpYAk9bgRobE2L4aZNhRY5JUdwYy33VbvrDPXuNnwCzkj3o8sX1JxQ4goeJ2gtaM3VEoJ",
  "key25": "29y4KQgKH7SNVV9xWtvRu8igHtnedLbgtgKDsVpwR5pHdkpLuLreZs3PpSR2pqhQVdtigQTXetQh2XS7JYVbbiNE",
  "key26": "2eEgXwPVFSsHNWeh41g1LkkK5VMCoxpSJMp7o2EwwonYMGKdSE1VNhhY3wdgEwKThE9GSPZPoeZWGWqe8XVz7HbU"
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
