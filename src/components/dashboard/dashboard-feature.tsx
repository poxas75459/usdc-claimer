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
    "4qLiEfV4KpBMgHcMqm5UueqW4v1pnii8e1bKY38ZGUGjjGxrCWFVs4BKndVERKSeZtkGrZEFXNd3X2RzuiKYH2rS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Qu9E2zBBLtiMxTJcQpXjUvaJEvTMGm9oomAJgoGd26xY9YmuLgyb5CZxDuKpJ7RG9aJK2pE6Eqs764CHEhi9Vb",
  "key1": "32w6ZwnuRYy6aLqzjeiiWxFfvTxGVRKFrgPAf6N9AKnxpnm61ufcvxwQjC98VqdbMAMcuQ7YzsuijanGJVW4nudG",
  "key2": "3RJez8yg137chcgB2q1wUVbcwSVJqQHhWeMGWpqBrkaMF6epkiLfUTZKHX83icdvFvstRbtYNt1xtK3uJ32EYBNh",
  "key3": "1W1ZEvKJqBssvmnA7rsRXWpp4NqohuibooMtDg81Ag3s376Rm7GH8vCNe83RJK4hzAgmRKqpQqDzpDzGjdKFg9h",
  "key4": "5NgbsHmexpYDkqTgVikgfUhrrraKtx2Uk5JhEk157T8aHcwmtRvdAXsEoynVGL5u619tBPT7EzXWJpzoFo87eo39",
  "key5": "23VK36MbvYqKw919G2fodt4r9HVYP37oHo4vt87LDoBnhYk4xZPfUH3ZMQj1h4k6B4vGLVCxy9b7TgBQ8Uhkbad5",
  "key6": "2AGXCn6jeAYDdQugHN2JGfm3dt4rGPZGVNNkWu29P3nSv7cyPdpi65yYvG31yZ9nKvrfWygZusMA4VtgxdUhaJGy",
  "key7": "27BmHcmeMQzkQYbYRjWLw4ky9awTUEnVSmazzYRL2xo7U89gn7gU2TFryPXMBoqfXsWwYxQSmu9vb4DkQ6TsVztD",
  "key8": "5LxVEWRiAaiHTwvibs2CFZbAmWZU1bSjog9iT9fTFpbL959p4WNTwoEbVC2cpHae8xEX1nRz6DsRYEa5FFYJxiFR",
  "key9": "E59sgJPANNSpLh79BfS3mbsyh8sxD7br7Bg5AjLLXEEa8a4KvF5LQyKoNiHyebwgnbWPVwqRe947k3U3kQs1BR9",
  "key10": "4e8QP6dD22N2mBzHuZW5MMtoqrDuNpQhE4usmzzQD5sDuiUosU5JCEUYdwjyhFanp3fczZ7ZrQ3SFzwmbyL7y6xd",
  "key11": "4DKnHuM4LBxGTCYYwk9PtGLuiZMPAcxSbvP1xT4fNit7Mbt1KNBnbQDFNxh56qMUWMWFJoSY4EKP9FCi8q2yWqPQ",
  "key12": "5DwSW2mKsMggiZpszstwURgB4ZAKWfQtvY3KMJ2rAfCsR2hZ4GN7JjU5cbQvQQK5SkWsLoxwZkeoxRNhnB5ssUT7",
  "key13": "4zcHYkPxUyAZ82dmAFyZqkDR8zDdBgDFb3zruRW9wQZbQqJTYfR6VEqCoYqvvX9sjH1pu2pVPrEY1H9QrhCFVB57",
  "key14": "3fZ2Jp923XSPu2KU9BCkZsGW3HPFvdGtF4VM3pUdTnBN9Pvfan6N3Y3jGX2q4GTtCzazZbjGPK2uZR3zs7qnT9yn",
  "key15": "3eBv5H49YjVjiyhknEFiqop1Tqdq22kpMAc1NK9Wx3cWPC2oSibdSRYHQWCAkcBCN6HCBkMaFcgcW87nmgs6TJaA",
  "key16": "34eWkc9nR6RW3qdehA7Q8fJBcVPAy7QKa4w8gffrQ4fdmw1LSKL4rq3xwnr3RGJdEbs3m3SEAQqALF382srVLx6R",
  "key17": "2qQUnBMWy85HMTNce8qowKCvcdMtrk55hop4vLf5qsm1xbTaq8zgp8sdJoBRuw13RgVWypY4ZPNmYLba2vdpgMmP",
  "key18": "hKNg1odTuYXkgjirFTDrWNGrGF7mPiqHMjZJSu1VRLoiejbeeq8ZprSBQQ7Gjd6ubEGcMBfQwJKw2davm1gYJzu",
  "key19": "5LsmYVtVbV3Q4AK8PAtPoCy2TgF27L2cRHzDkq4uSB7TNvkNw8iDLv5aBoDL7sgtK9syFe18t854XZDuY8CxGsxb",
  "key20": "HwBvPiBifr9yRg7qftrgkKjKGLThr6pMXiYDoyJfuYFm6Qqt5PhWxeBwkuW71UzYPZHZoeJWGL6hy53yKU7gq7e",
  "key21": "4rDzcJ3ACtdn8BgLwqUkFJf5TZ9x2FZnccy4wGB5nHgwLSGRfdexN2Zar2wXnepQdV7wUftoGhCFi8sv49t7euF4",
  "key22": "e9cDNk4kjitr8ZWJc39QYizDXj15t2L5NGAXkJCRoyCGJcDR74pqky7LDdry4bcCgYGGCJqiVb3A78ZpjxpGUk7",
  "key23": "2BrryfzWrjGtw8f3syLSMUgZ6J94geiLWoPXjTVkfv2PHeQ7zuV8M2YdTWurrn5cdtswCmRfwXUtWbjZYAVRbPUs",
  "key24": "4u84URVfbGfuZuokriDcLLfMV6pP6AYTGAX5i7mGuTKbwKNYQCesRXuHcpsHE1UtdCLhTWwawPHVE7F1gx91FbHj",
  "key25": "51148VBxt2fTSUurBH5ctBK1gfzv9p831TQWDh9hDs4vMzVhwbgibCfHBLAt6DXyy61bhQXvvKq8NDH3e7NEkYyu",
  "key26": "2b9DyRnSjRw27QM9Fy2AftXNuoBsVMUKj84MZPRCRJr4veSht4fdidUDSfxSxQ9X8JKPFUSMAP39JbHnND8KcbKs",
  "key27": "5AogK4nY33y78sSK8xg69H8Gsu1hwsgn5jPNjzwzKTdLthSWPgiEcgdwQNwb1zr6v4SkC5mHjgJGKN67k6zb6dTE",
  "key28": "343oYxtT5wmK5dguptn9cg7HGy7V7TGCJNw7Tdxk1JLn8CxtiTt8dBgdDEkERR1ZvAokoacG8RnckqUKxHbQDYW9",
  "key29": "5akmVg7CwtdW4VvWk2RWvm2cZYkY8ovqAz9hki4CVn8xFeDhJ6iRJAxNSiS5CPqMLMHLfkMFFpdPoTrMHBp9r4Tw"
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
