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
    "MyGW4kaaHDsiTnNBovkhP2mQwm8tWJLDs4Fri5XXLnoX6nHZkqYKEWGANSaqYRPea9G4o6m1pprqGLPLg9Xyb2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UP6MY7TFvZDWXmgesAw7HbeTVw9w8yBCZrZw9Li6ozqpnmQAfxRhshsoTeugGHaqMjkfixYG8qdV2fx8DNRogaX",
  "key1": "2LzevVGSnApBGf9N33jYzdQn7cWAQdL4MV4zpr3WmofaeX1BzXGUdR1WssV4iN1f4BwFfQfDR6MDbqLFfM6BnUuJ",
  "key2": "4L5UTybnbCAQisLkmLkTmTNcoPo2UjGMoapdnc6BdfxeuNjAM3qwNdELsT49WqPkYH1kSBfxEf3za5cPRqBnZMB",
  "key3": "4qYjoGobZcD6Qm7W2gYswLfXmhH88mTFx2o3gwRsTdh9YSKD1L1M24DVBpXguhh4ECyDUXbWBVRTDSP2x6TPXx4y",
  "key4": "5eoZmMgArjdsfPRg66ervPYpZeDDffMK5yZhN4wCL5JCw7R8ngDEfxFVQcLnT7rXuYVmWeyCPMN1zUZPUkXoJAy4",
  "key5": "5AEnFaydM8cQb2FZtop15VgZ64LdtqiZWTj7skpd8bmosLVsykFAQWC7fCP12Am3ojjPnW4AT83aweGJaNG3be7x",
  "key6": "39zJcBg4RBewa6ZSStp9QmMNqLncbfVxfmTS3Xm11hDza8qZSDFQFVW1SNdcTLNYb41o6i4zoEUdJDoWdwRwg1yY",
  "key7": "5PhqjFZXZ3WDVzAreDoDSFwNKD3VM5pdPQgu9W7qf3f7NuzXLBWucTSUkEZu1zBLBRtPgdfHYJ4WgkvtFBfHoadd",
  "key8": "38Sdg3jVjY8LScPKQDMuSyA18xKpT5zCtiJuC52DfLo9hBGBSogiZweghgntoP9iKPJfZyXMamySpom3eiKwqUzd",
  "key9": "4Yyz3RtGPUQEq8QiF7dWkCPgWjkbXgWN6UnoJbLiEsspqZ1n3jsZvDZm9pA7zZi9TBxTfkSLPhnpsGhxTEqnn9tY",
  "key10": "5ZPUdYtT9ix13WZ6o93Ux9M1PoybC2CuqhN9TD9UKDiYtJgYznMERFGCKyC6ywDhEJdHUU7Pa2GVaczcfuqhb3sV",
  "key11": "4mFUSKtnhpz7ys7P2mT1V6TdhBcuUczsNM4mS1B5tpYxPTqg7Uu7yFDkVF5hNgrUYDrV7YZjFHGC9Ddcc9qVWY4Q",
  "key12": "3JPXq7oSzq8EY1fqDwdhSFWWuiJFdtTkAtxfVDwV4bvh9idbjUiLaQvBTDoaiHVFT4fuCdNekgp9MHZFWm5wuCTQ",
  "key13": "3UKwUKEH5bg2KrDxexbrtZJqTY8ZuE2EjSkUf4SVFQjetSsKcxi1Q78rnV2S8hFna3rT4Pzp22FFcAMkZxXQtsZG",
  "key14": "5zNnCTpos46tawZkrBpE8qUGGzMs285dZjTWFaDnzWFC8ztK4pLMCe9UPBTqsq5bvrMZVccTBeyYdkPrXsTusZYr",
  "key15": "5WvGRqpmPHtUW8B7g3AEoxt3sCtrFchxFR8ZggcQg88CJ949a3YNNjqn8FWRxvhveR7KRaogqzcqGCnp74Q8TG3o",
  "key16": "3b4MkWcKPFWtfNWQykzD86bFY7kcX96pGJQVWr1PXwqXLZPnBXoRca2gd8czNoiqBajFQLedeidDTYKXJtxvc6hY",
  "key17": "quTkASaTTfPuzqQnph3vzEPLEeeedYVNP2TDfoDtxRtYkXLDdTLqysMxNfKkvBi1ce4ivdtwc8oSPUgDzxM3XR7",
  "key18": "3LsKQTsXUqtcwteN5mdeGesBPtz6EBfwLrfccuZ2sNB6D3QpgNXVFwtkdeJ9RGvhF4X5aoVxjNz5c2T6z5NU4mhS",
  "key19": "2iESraFHJBnZvjU6bbsYuYwoeAazzjPCLko2v53oj2Z6wS2Vq9krUgPReQFAoyxydNFWiuJykpGpo6cqFEcTL6Zz",
  "key20": "M72HnmhEPHv5s1eksGrfeUuY5TwZpHMhpAUU9UFmZgHUagkRuqyBbGMBtx7Nfpih7sS671bmm4yiZWBmz4V45yE",
  "key21": "3gqGkwigENA5sAC9BKx349v2S9f1KATrktBoCSofAZkdc6aoKAGpkPckNbwcFHsJcAaZdDjnvR8L35UvBntNA77D",
  "key22": "3voryW51jDseKbdQ1JfRfty7E3QfYz7Q8FrwVynrVN52qdANnyGNm7qS5QowtRUeEA3qg23mVDru3FSFdEWEjHY3",
  "key23": "4ty5k47Sv5WgRk6tsJ2nCumta7hAAkvfvKgksDqTKNNPAZZigmg89rY6w27t82iNXX4wfn29KPM9FvcnicCkUU5p",
  "key24": "GNowWoM3ythuG1nNVxFtJ8sJuRm6oAnNaJ8FJdTA1KDUeUu8Ti21WiGR74psuNoHdM51RMAEBweJugWFzjeaPXt",
  "key25": "4HGiJjkQzu9b8pXXA2iKNh18JN5GdB4TzcvZKys8Q2NBM3Uh6AksaA9EDXznpVH8WLsA3XPSCQWqjJGgvL8KJtT9",
  "key26": "3xJktvgMVxntn87rYSb4JT2mSCf3AV6TWYdJE9vPrfBdW9V1VZ8JYPssVqskDeX1tGWhEKuWrxLjqwbVBumumkbw",
  "key27": "4bzH1thnqQwh1WhvbpVPTtYAtiBo4gSvL8Ybde6tCry7Co5sop72ZLvorh5iwPeZW5Y3bA5o36cutwQTvsvGwnwC",
  "key28": "4UXyje3SqmQsfGat9poaSaTo9pdhDL53uRB8XcLVzF5v7P2iqRbLy5VJ3jKf1vPbKdgqmpMcXyCy3kDqTSp7jQi7",
  "key29": "3bA6cLvbx5i3xKkabmnmCzQK4VK9pBBRfC7kAq8HgqQ4sPufnuKXCUUUrpxzdLn4s3GwDGpz92FGkrLaQ86TNQfe",
  "key30": "51Vomm6VzdeaHCo6bv6BAq8dnu3ewUZ3UTEWKTXdGna4xubEeRLENmJKT9DphXJRMZFhwp8iV6TzPzWdiwMzgBVQ",
  "key31": "5kNHAYzUU9FUpKBFdrAC1Zdr6MMN78x6PTKEhcR2H9AN1kYAf84AuCDX3BPHckEHR9MV3jbv1yMxW1ewLEYT9QD2"
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
