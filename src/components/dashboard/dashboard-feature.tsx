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
    "F7x31FPbv8QB8HnsVoYV2syqbaWM5JPY3fkYDQNKQU324HGmihkBBN4ujsfwkp67e9sBvq3tU2SKmYtKQr6NjCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yv5qkeREFKL3kpN1oqw58khKR4WHbrYvmjjofivMjkRjLdkxgsHgLfBDQXQUoRHxZioBBihGCoGZF2CQ6XTTAFt",
  "key1": "36U5vzn9aVMRX1JpLAXwPTXhasyEaBCNEPL6pWpThSPAxadYgQfiFbiEgN4GfBAWSFEiK3kxtpM8y2y9FvB6VTGn",
  "key2": "5eX7QLQDMd9Xu268SztFUXaA3vBgNH4w9mD6EkFJS7i547Q77xNU3uZDE5PxHvQ5VKoUat9qAhKx9AxmweL2vBGb",
  "key3": "5mrittefw8SmRyNoQiwfbZ1V39sHxwCbP66DTvMhYBoxCMuge5M3oCDMRGZhhKSfqKBj7PX98LduHqFF3iq6Xq29",
  "key4": "2FKeCT8bLpYjaGnpmEcrekLrY11YAUpxC9D4AG9BLwWqNrXJDmdpkjjQA669Uhca6pnYGhuccpPEw1fRzhtuwxF6",
  "key5": "3cwqKyt1ZjhsgzSaZdaeftsHeEk8kytFCJpre9dhaGk84nMGcwqURRTZEJCxuNYgEcLAJ8eUF4SVhKjgF3LFFPrT",
  "key6": "5eKjiSouP1zQdeRNoukWmxePx44vww7W31VibWZjkvCH2dxn7YKwgHCPD7ssDt1K8VyR52nP8YWBEzYn9VAX2rRh",
  "key7": "3kCS4TJVtkbd69cQbjX8S7VC3MtyogDQEo32rgNwk63Phj6Wsjd5dWWYJt6pCAsFHKFL6n5Am7vA3yJ4Z7LRg17N",
  "key8": "F4x3xnPg1BsjoQUGA8Yi9kBwUw21xuCvPCrdswa8zcSaHCK7xh1hNy3rNychFXeSxFDYv52BT6MVpyqt3oKKg9X",
  "key9": "5MVQBZhTGewE44XBrCXEU5G986bbeYJDShKh3sXek4HC1pajNb1CUg9yczJ816PYUAmMTXx2x3cEApAHGKmk6Gt7",
  "key10": "39KuMsf5KXy2ZsndKzfhuf1ZArtnV8bp61rH13AfXhJkettxSGE9s6CVc2MHqwHieBD7uaozu9GbBLDSNfdDc2F2",
  "key11": "2tSoynw6yKWdLZNt1nTU49BWEYDEQKEvz6X12TY5W4ZhczZxC9gZMPZg9Gqd9aCsivk5jE5YtQhRYLmYC9tJ9z7Z",
  "key12": "46xERNy6b47g2Nr19NTN4HerPsmHP1mU2K1mcUGDVYzXyyHerfPLCaEkCifTeKnJSvgxqQNwBrfUtMLf2y9KoeTK",
  "key13": "EsiyGRCWDoCUDLbtdtdBAPaSNcEAScKq3U88QoNf391Q4kFu9vbbWMHNNbgxk5mVgMhGUSNrXTeE9D5xkRfFWm6",
  "key14": "b5XaouRGo8rqkCike8MAvjWxKtwmgx3a9Rnegc1zaLusHuCE4M5jrGfViFbZymSLdf3NsddpPxMUh41yWTCRYjr",
  "key15": "431X2bid6itzDY1JtiAZvdC3S4m5fMnCupKP2MefezWmsBzc4o1DHRbWr7beTmvgTSv6PhhMso6EGdBiTRfZZCvZ",
  "key16": "2LotAHU3XPGMHftPNXZcCixiFSweRWcDtux5NqMRbuCLKnDJW5byKhVgsLKqKN7Bnh2YpsXtZoYXF3GN9NTngxkD",
  "key17": "5z2y2p1pMVpznPeMuLQ8uHTChBvR7dxcv2YbtHNWWUWb5JuPnbBZDc5djXc8Y7McPQ1cf77zgD7MxkJfKAgy49Vf",
  "key18": "3fD7Vmf9zvTvUsppWMwdyBDDkA9Hn2at8k2PJqD8YXLHBpu2RrKQqbfrvffB1jhgJXQgnWx2S57U4ZAfVnGEfRLb",
  "key19": "2ZpCcX7D47T16ATnwrkRioQnSCdQHSB97ttuRhum7M8uEmhTkWBMtDxBs9XrYVbLYaWPBpEtU7Wb5hoqgiA1vCzC",
  "key20": "4QXPtX8rz5tzSGqg2aiNC5osaNu9vXGdMgS22PzXqSx7Z6Am6kY58peREkD1PG4urXd1mL2pAPn2269rPosoy2EP",
  "key21": "3njFsCFYkjNveUXjZy2dowjq9Bxg5AahJBTYLNfRkpsQ9wK5SBBAacBnwuAUEVLELfiBfmyBRcuzKHbd5BAZMGjn",
  "key22": "37uHBqQtf4jm451FijrSMx6e1EEUU2LZnKQYXWgz1Cd3uL56vWCvBfMMk4uAP44shFGvfQVZ2BV2n5DVUSSNFf6p",
  "key23": "4Qo4sAmJknQsqCm7qYrxXhiUSjvVy9RJ7HGExevkQsHwytsFG8otMtgKsGN5i9R35guizEniTPLSXu8fB8ZK59SK",
  "key24": "556y6EQspx5EUv6BPVuwsdgR6V7bJX6jHYR4F6ckhf9fntkF8HF7SqS2GvK8x65zA6BvaYcxdu3bPnc8nVL5Dms3",
  "key25": "4hFGhv5bSV9HRUCYyJiWxStKnsFZK1rMJL6ByhShvhp9VpmjAAZM53CKitUKUg2uELrcBFtGrjrnqFTNFXvwHf5a",
  "key26": "2yDbKSPnwZTgZ81G1phvn4nXSDJ9afUL8b4rk7vkHbLx65mrycqYq39QwF4SLJzWAfaqnCxFvgA697Z7jYC33hLV",
  "key27": "4sKZ6pGphWdNwFRgHnVX4T9d7DnhhzG6WHCR32nnQe2e7j265Ycdd8nZpFvHPw7c2NTZRxiGz8BNUYvt2hgdnVHK"
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
