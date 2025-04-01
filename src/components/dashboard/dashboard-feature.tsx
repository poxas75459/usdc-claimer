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
    "2UT2ga5qAmmdQuFcfeS6Dk5A4rKWrLQBXwKsPrnqZJRgjCxuZKBVvZ7sEu8ZnafEagmqGqCjGcPiU6k8CYgCZvxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wa3T1Aj3aQ9GDUSrpfeHX4wtzBQLL77yrktuxNNKjURmGxK2MQBtSUhCStS4xnkg6JH8qw5rwJpHFVyyriW8vea",
  "key1": "2ny63ELonBGyjwVtJJ5KDtjq4BaYttFpiRJY6RPHddWpMxENs736q3bzcYHC5LxU3A3BvMdS1dvAFHLnx1KqAaV2",
  "key2": "3RfGU2842uttS3paC38kVY8irihW8CjYW7EyZNNciECUVx7DQiQejoxtwyUQoPfQedvj8uXeQZjWj2wwPxrMMsRU",
  "key3": "4AHiLhKrQvDJD92CwqtXvD46VvqZzPAMbP8DYko3KQRCCmAK8CvZv3dUpLJpUoRma7MKfGRvCe9bA2wsqvYGLWiU",
  "key4": "2VxxfM7fRyHUn18rjZc8uKYe4yWSA1kqjuqKsG778z4NgCbsLzRxzFU7jdh1qotJ8VfkyeE3LfN8ERr4Am2bPXQY",
  "key5": "4bt5T5qC64PrccvHFr5CKtEiTWzvPxhKPxCJC4hFpt3Lwj4WUXXPyHax5EBpym4KSNqrqB6w1Qefw85Ci2S2QdQi",
  "key6": "4HUuZ14eeeTWxismnbeAqLhCsQ917eLcLggPR3xJ3JTTXdFqt4m5ssJeKDAu2tap7P4pxnWAPEn57hKh5xEutAbq",
  "key7": "38A6gktRNjGCmKBzvNCfca39WAfqFGJKrLDpYbXBf93q2pJf71cSY9yg9jwtVxHjdMgAkCNdGJwfv6FsRiLhrmPe",
  "key8": "2JCCPZ5VFfCxToWHFEFZyi2SvJZPGSAeT8dbL9eNdP5gKE67zTZZAMQJmto8sdVFDQxYNmbhVqesS3PsixtWRRtH",
  "key9": "3W1QkMAyb61sENGwezz3p58Eun1UFVaJpG3e6bjPVuvt52amGbZ5wLr9vZu81146r4yqy1AXbfLV7VUuqLr3Az77",
  "key10": "5oBQ7rSLVH3KtQ5m2gj58X4qBdkrtmVEZbGoxoexQ37HVeH1e8x3EUckvVtZXhzawuafYHSozqwnS46mcDXhCBCT",
  "key11": "3asVjSks2qGwZHwXvpv1SvX94Qznb8iJKpo8Lezjcp8yUErGrLykoAuUGKpctpK9RJgJzZ1pXQmZnRKRoxRFDmaE",
  "key12": "3goCGPGMwB8PJQ72BrkowiBm8xZCwQkt6TFmMGSPR7S95iksir2rzFqoXHyXPajPzLBVPuNcNixo7iLiwtfnzZuF",
  "key13": "N7W24jBCrXXP15vTr2TFaBNiyR8uHDTyzJii3F6jhUWUXKDEtX9mgA3pspp9rKohqLc8wHd1eqNxqzvKg89apou",
  "key14": "61VDMt7moknFFnH5wtUj6BEChxEDpGwF8gCYmbfH6jMWzEkRx2SmiiqZ71AcWxC4zREoyzJrf9S3irYD4K8dChSG",
  "key15": "FDjvczoX5gJL6xbphHSxEeun42BhkJWT5XMGix1iFUELY1s1vMuDRQHsqyVE4v3qJpBiM5jXSvJn5TuAwMMFtih",
  "key16": "2XC58Ebr9UUN6RmwHdko8mPfonHCrVcVzvc5yQRvzxX3bb82tCTm938bbbqQUarmKQKJFArK9K3XhS8HTh5SxiWg",
  "key17": "3ex1Dvp7S1AyeW86FAcARMvUkt76pMafnRd9CUdmodgWooDm1gsajmQ5AR1LGDsTCW8DXKL6oRNRyTzjc726PZCo",
  "key18": "5yYaBtSLwqCLZ9dYkjF3W18uc9i9CtWzFX9e81qt1sQ9Jom5TVF8mirWoGkTw5B7fodTR6b5LGdRtzuDLNUnvU5h",
  "key19": "4uZ1cqfKXjEjLgsq7jiqAaYyL21voUre8NzYa1J1jXhKF94b3EyaqWk3ytXBTu8KXU8hYqQVPfF1jrxPJHhdAgky",
  "key20": "4KDSfoySc3maRez77FcaJVdqFMZb9DpSLhVq7HtfzMZjPUCRfv9QNU1jBNsdfhbR6sCtUnmuxBxrQGH2aMQ8qcZt",
  "key21": "53bWuasRdSd8yLXwxQSUvcBvjRcyGq886DKzCKLB6hm8oHJHCFsbGrh5tQNtfv2oJmTmcJG2dUQWQmLPeetTbf3E",
  "key22": "3FesNRUeKaDqqMyXfWtoR4WP7GU7xMUHS35sSt5on7r1YngwWAu3dAND652BYzR8oiQsyijSG7kkTctCNi9xqRmF",
  "key23": "33B93tk7MV2ue6mzsNMd4gb2h8JuxUSkjUYGbrgYQLxs1K5dDJJQpDh6ZuMccPr1JUaS8Jqm9LP1QiT8zEhFBvde",
  "key24": "T9hWyhgb8mMz8mpaHQLjw5PdEfraLKwazDzezGY6o2YMNVDUuqavuxkF5JsoHTViCXHQcCPLSRkPJa8bmxJn7Nn",
  "key25": "EqX6RvsUFT6Cx9BmQbwCbyhZrGVZwajMmroTRrG3o7Gx3RhjcnAZrtEsz2x5psR5vhBLvktP8P4Hu37WS8reNoT",
  "key26": "5CbDcrtzaJveE8dxG7PNGCiUdUjythfVZjgy1dLCYxu7mQ5UfQN1F2FmAZAkX7Esi6fXJ5YzSqymTvDRekLtymGM"
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
