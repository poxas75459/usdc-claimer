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
    "4BpL5MfBjoJwSEJ3CJo2faWnDwg3AoUWHvBgWqUVBh9zTJe8Ujr7DcmnJmRp5WyTNJAsUuNEuHdPgAtohFvbbpEF"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3MEpn3EzqG6pEYvD34oKiLE7KtpAknpPB4k6cYNwmK5tjTDJ7m9pxCtQPAr9R1Q1EPwTDg2jQSeAKctXH3rJA3sb",
  "decoyKey1": "29mBENC9d3Me2r6RFHqon4YsTBzgKXKSZtFiVy4K3VW9YJSpKM5pLQ9HePQnCa4E1xeJ9bDaUgxWJEfukySW9Saa",
  "decoyKey2": "5DMo6eiwZxuRXpHebLrtQXJzUHX2K6yLgQvAN7rQPDuvxvzX7LYHEs8uNdr3Hx7PiRthRnCQn9FvUpA5gJu6UNTS",
  "decoyKey3": "4QdorzFxGVD6mqDUeqVWWdoqry3xWw8CM7fhj8qUsNhkxStm4xhYotADquGVetbdW14vXe5Ni5cKFvC2gnV2L72F",
  "decoyKey4": "2NVtytT8FBMP9sZvUxfAKMJNu754KamotD5n2EriWXydNwSPUL5HoQm5ocj3TNeQzmAyHgWGrXVAEwBPgKt3E6hz",
  "decoyKey5": "2D5jzt9a26hSPt6dC8PzgxrrcsL1zz8ryvu1YP3ETmwHSoddyM1xkX9jeFCuNNZSve9ZWMMfs9VYKw5DUHBAubAe",
  "decoyKey6": "wxHMf38FvgtVjdg7o95qgnQQvFYqmwwCTSrpedEBKJPZaD9PZAJjGjgC2biMw3NpuPVciSCmz39BmWBDZg5M1Ft",
  "decoyKey7": "3ojWGYNFUnk8hNrSP5AZc34m3aVwBXsnAQanahtbhHLoFpScN1JLHvvysVDtNyfdrg3MQQDWisCLXpSK6iFXvaB8",
  "decoyKey8": "4tx1eP6GHKFSNGcvZCq2kAU8ksYSga8AgwZaUKwyd9JXZjcUi1x3sjbBHsNEmfFNWWFnhLw8cWj6wqRACh7yWCfQ",
  "decoyKey9": "3BUvWfyBoEW3fEPMwGGjborb7mpXBLsmrK1K8j8AVeNjPXXnH2SH1k8vGd7Yc7Lm8pmjD8Yx5hg94h2gXEMvLexU",
  "decoyKey10": "372oeccxRRDnopccqEzDJXd3PEacU6XoA3iz45AFE8ksK897SyS7Qrna3dkLx46eDwMNtXFRG7YUPpDDhEbUzrUU",
  "decoyKey11": "3J9KTyFwvX1YX4sYxGntjuRMskv3j2saVP3NxzZwRfDHLzDuBvkPDnzfr3F1nffu6Ri4YyCesxy4tz4JjRVekC2L",
  "decoyKey12": "8NongBt8zLVPtEcpLWGCmmjTZ4nkvwbFrzfVFfq4Tijh8zyCiKgtFo5achCM4y2ZDUqL1iehdpQs2jsWbKY8pgA",
  "decoyKey13": "4vV1cnEEE1ZPzR7ixqqEbytgszkCm7XzVQjkUqVRTx42rQJcTwCyNxuriCYgjeJpzJ1PWEKb4NmrHhcsgxxAV2kF",
  "decoyKey14": "3X7dQ1n4ddpA5gPrmp8j2eK8Z8KGP7S6sq5ej74phpaafkq2s4zdBZHvv2jZKu4NgpdodrCek9bXqyKp8nXSscKU",
  "decoyKey15": "4qP7YkL9Mz5nwHnMz79Eguttz8G8Ev8CKhP2h6Mds8kRmwbnpMQDqKidRNxoDrEbXmStxZjgB3iJR6wCeoxicKJ8",
  "decoyKey16": "2M5DH6YpuZLjEwMZeBhzny8jmK4nNbEfU7PmCUFcN2ZxzfwdszivYAVrP9wmaUd9e7JHUBwe51EMAvAEubE4bu44",
  "decoyKey17": "5E4NH2QbVEG5XR7Y5bTHtSq4Ca4YEyjLD9TqimGBJPVzZ5akNry2VXMFMqViAiZRqZ5MDcSccnkn4mhc9mCLF262",
  "decoyKey18": "5Y5Hs6EH2ksXv8je9nky2P6ih9N68KQ9ry1Qcc1uZZwnHYbQh2orDKizUE6MuEx4NUHd4yvmhfDGoRbEta5BhMzq",
  "decoyKey19": "3A5jGhWMwwkFkToNzN5DvWLU68YPC5V7sYGvGxGaHenGq71pgErsaE96Ru48SGydXuu8XJ9qpdwmtzK2uvUZq2FS",
  "decoyKey20": "2EZ1z1DQyxmBfrt6LJ5M7apDPzbf3xEhVjgNqmqCBheJZzEiCZ4RR6PuoTbPex8g5pYTCxVkXMVVLw27gBhEtc2v",
  "decoyKey21": "4WGWTj3tg2TE5ceuGF7LjqNdxJtFpAnvf7dm9N73vpAzyUhZN14b75rGRTLoJtco95twYfpZt6UHWuqzQJzHwUa3",
  "decoyKey22": "4Fs64w9TKKzymehLVPWDsHMpGdXxBt4GPnC2Q2hzcvUtGDhJ4pe4cW6KkTjpKNEWNgmg4gf5HNXXjQxMN7UL7nJi",
  "decoyKey23": "5twndKP7dCSjmyyiXroYV8L1Zb1xo1piZSH5LUQNpuwubSbgvYkdpFmdMFirSnk519MyrAgnyavwVXFP5htN5gXT",
  "decoyKey24": "2vPQY9eHNKeyCQ2ifDaXokAYbF4MWKVLBNYC4FCSPs7T4vjP27MbXLZdGZFQveGaAWVrJjy4Gjt4YX1pVCBc37dt",
  "decoyKey25": "g75f6HtQi5erzeYLtsmZhRUFyTx3j6omVDDDATsA6pnNWtfZ1g95c822eXWot9ENzqozy8tzSJTNWHf2qxnTjSw",
  "decoyKey26": "3Nd9xnpC4msrXq4RQ99AcjxfsVPRJXuSURDKbhL3LNZYVsZhqatowGxRVX7JYoTUu3tTD4qed2HUwHR5itszPsDC",
  "decoyKey27": "7zUwEzKezcm122hBmmXxKWUenwjcs94Y3PYzXWfq6JerTtY2ePSu9MPs1FkspEjdEsnLFoGycqV4oFBUfbcfwoq",
  "decoyKey28": "mrRQKG4G6YgmXV4P9Mtp7tW8wAg6rjNmjyqterYwptg6voRyvUfop9oDXYifdbNj64wDC2M5jBA14d3kBQSNBfR",
  "decoyKey29": "4naKVLYJ1pLvm9X3pPHdi2dAafDnHGi5wUdDr42fLbcSL9Zdn64qwsuTaHsSTXsrBgSSTFPiD7KmnBe8UFyPMbLR",
  "decoyKey30": "3iJtL36xjhpBgHr6Y7z8W5aFMHGDaM4W4U1w8MDx5fzmxfAD12Z6foLERMVtvkgsQwdvq5CvMrT29j5X3h9uPVP9",
  "decoyKey31": "3PhzN6iELYuTANMneAFr6EbF4Q7vvxVhgSc4xUzAMZY8AqPcrqYTTgZjhkRbGTV7TRVy5uBUcWzLkfM39Ag5HCuB",
  "decoyKey32": "42JXGt1LvYJ49DAmNTMrVziYQ2cjLyKW1P3jeidjYpQztKWutNfDggCUCU25EQz5G9GfPCgrgoqB7JX5gDNCi7aP",
  "decoyKey33": "59AdHN7giz5tUtFCvJWSprRxAxNWHoK8FJB2cLtc7VL1sYxnFBwYFMjZb2fYZtGqVAXwuM7vJvDQNqmv2apSuYqV",
  "decoyKey34": "bgpmnRzXSFMpvAqkcYCdP54K9td8aLZ5cvC7irzdnnSEzoaVtiWXFv34AWKu15UfZR6SnexyGPcxP5eZE4fSsZF",
  "decoyKey35": "51BKWhMpea8P5k3hUkK6fHU7G8i8nfQd5jXP91wxnYqPWRAmE4B1sXSBCcEouH9JG7gC6X56Cej84LvNpQ8qDVUe",
  "decoyKey36": "66gPJYhitnbFTggWWvqKd4PxdUrJmpswUaSdZY9ziTznJ35wpgJnubrSVfTcN63g6sTvGLd6eEryZBBTicMRkeAV",
  "decoyKey37": "53sddXCubZUZcSugskwPtkdsYSN2MrEwKL3KyERbZLVMkrh4ivKKSmT6qZnSYgttumCfgztUauQ6B7AsbaxPwVAu",
  "decoyKey38": "5P4bS169FWPK1PkjT1gWpSeA7thELgX8m3Pt4XNfVpejVwjV3XPpwW8xXuyTGiNMY1GCB6Xzd3SQiS4Lwhx8eT7i",
  "decoyKey39": "3ASb418JUH6LV4DSX6t9DhtMZcwzEpkgFXVKMzB17zPym2TT18yc8z5L1BkpYA2SSjyTemTY5JcRmAf3RbK9ts59",
  "decoyKey40": "2g7FnKA6HrcBJ2QXWbx2NnBJW3UaRoVLTYqNunWkXKbuZHGZEGhNjqfe6wSFytpr9Nqeir9ui4YXmiyUrF4jM2nv",
  "decoyKey41": "WfccNHKwdAd6qp6m88cPcsWmpCsbaxDJFetm5p7hftyCeXW47zeFF25pLnZSgtDh1NKsFir4ZCckYfeQLQ5vGmm",
  "decoyKey42": "yzEtKPWQhd6jmgvTQn2fdmzUhhhqYwgWyjdJ98FMsT311r47M1hHKY61Khzi1sb54AntQUJtfFnovWkT2VmXygf",
  "decoyKey43": "55zBjA1JjA7XXP5XbcRRTUd7V1NbTbeHXD3m1WcWnADVWqAa2YqyMjP8LjWFnmZ94zGREH3gV6PUuD1qp9RCqr9i",
  "decoyKey44": "29aFHbQx6FJ6qqF2782KqhhBtfCRFMdK5keeVKjuGBYg2BYNvHr4XrfBXvMUBvDKfKnfkc626gjZk5gXo3C8VRzJ",
  "decoyKey45": "5QpvuxgfyvRGSAnNKVxhXq4WX4QTnFYUeS5JoY6rVSTvCurdFaYK4SoUsu2TnfPh3bc5EmWJp86Qkpna4V84Fj5e",
  "decoyKey46": "32PwKdAGzWESS8EZXfLscwSa2jsCpKCNR9GD2fwkBh1ZhUVeVbjRjGkzisisbaNZCBppSYesS5XccvhKSb3EaDsA",
  "decoyKey47": "2FB1oqjWCVhfWjFRbScyQJW1w1EZRzPMaYfAUS5UkFYST7mTpsJJKaba8qp7aGLYJUrNdVWddnTQ5AsMGW6Bow7v",
  "decoyKey48": "5tcbRnkhKis4h5M5Rr3ToRpGE3BEWVw8BUBdFuLxKckVumJ1JeSabWPcjvNa1WLbVTNSAYaT3hJWmqzyNXGg9iP2",
  "decoyKey49": "292e4aEpE834CxwJBRbPR4zEB812T8Xm5dh7jJ1E9hB48E579Sqkr9sftRCqR6nTFAztMEAD54HnLqTov3JYc9Zx"
};
// DECOY_KEYS_END
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