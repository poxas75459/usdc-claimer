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
    "56XJunNj6WztsBtu2tPkCrKqhBve7zriLzEe1beNL5TsYpzdKLAeHXbz6UZrntKjR7SmJnvZzWANTj8WkAzZFnmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "545rVrEERRqnKPS9xs7db1XXwENrk6xq4AP384jGetSnRuwgVj5T3SqqFE6SVTqqXzSbYt4BioQiuJrzRwWYVELx",
  "key1": "5QAVYPvatCjxbd1cvxa58bDfrVBsLfp7Vu6nW9B4AqrXXWZKGugKbfxhvLJiKcWqNiLBLE1Qp6izyTVUm5kAWY2n",
  "key2": "Zw9JvJkv2gZJUDMfpcSyYJyjYz7aHZWADDwbexzfmTj3dbqTeHtYAarda59Xw5HpmDpEAfY2hGGmNuhENa1WiuD",
  "key3": "3yq8Nhna8Pry2wrsr9TjbgbemZjnHVqsR7x4gRDexjs2TDsUXKN646D2mXJHnK5mWphxLCfc7tSn3rF7KEiTjWzs",
  "key4": "DCbYgGb5Cg7UYrYN5Zubukeot7rhRPdhytopeQ4CSzaXznpHdtYjJGpL8Pr3ZdapHqiR2aRN7TccvLusC1WgFmR",
  "key5": "LJdpRf2KR6t2UekYuyjiqTJ7Y8tTafWPYURhmcsSuJsrYDkYintxQb2yR9cdEq4q9HM86rx4bGhMrowvs52Zwra",
  "key6": "2ge1Z5j7qY7fCRtF981txVizdAugUqCbMTiuumXeyyQzn6zamG9SEjuvPk2D8PiGpg2vy7r75NhuDBAoHRZnqPNC",
  "key7": "4L5kY2QHAT8HahB4Di9XQPJ8oAqNXACfUoe1ok5ygeHjScBfhj8ppq7id16ddANDfsnVbNXy2m95TDhiAAV6vg67",
  "key8": "3kwcwDNXriBane2VdQYwMtN4qmEqkhKmtg7L4fgFXWmM91hjtu3ru7gtGzSg5yEAKzLMDhpzciQq6p3HfJ3pSFXi",
  "key9": "4CaoKthPuBiMsH5zWXFFjj6mZ6sLtuXPHtDWLpnHj7eFQLAYYQt9aoijjEProWFy1yddT8d79LDWJjTUvv7KxSrB",
  "key10": "bGXh4smNvjTC6jGZjtPmTkWWrggkrrgCTNW4qK1XD12qJHcBHRjbrunL9RkhfSoJ6Dy1qAc2mCMTR6AZB4p8ftT",
  "key11": "2u9d3WSTPCpooaeWGBh7Q9KdFQcLU3phVHvm5Bed7evL2Safc4wxxp7UnupRbuv88vq88oAPgPM2gmKWe55hW3aT",
  "key12": "2JSmu1WP9c38jPYS9yFuNZ5o8XnZFMfyfQkDeQrHhCyn6k7Bk7tKZpbYtLHGWxc4DwrbtfhJWp2SZcQGPEXTXRuk",
  "key13": "47Wz2AqjHvYzqVAXJ68wv3NM1s9MRkB1Hxu9W1qu7oT8nXQ6kxBVYKdnnF9LYhdgRyCsRCdUjS8SVtGhRNHe3XZM",
  "key14": "XXadz8WsZ1zBqpCTFPoipT58kBhLVJDa5XDQoPfJXbFQC7NS5eMRvNo1JeR1T5DYqrHxrSsUUi7PcdZ8EqoM9cN",
  "key15": "5inhfjTLqVBqApgX2gWeeaZKHxA4uMNGWBTdm4bPbL7ut3G2nB6xTJ2eUqDs87LiFU1cq7UvLgQeF7A2AUDc4KXx",
  "key16": "3vkGQezFpimhBgSXWLNrGdhCq9vfse8ZMxsjLtH1RRd7zstMfp4RvNmProLwb97yWrUxc2Af5HV6GbzFAVtUi4W",
  "key17": "5uUWXDk2ha29Yn1aQie7rpZEgPjcRAGYGFVutQXXVeD4QTdVtNydtsz2ZUER9GKyyzJWAisSXu3af67pxd3fQXtg",
  "key18": "4VWKiJ7RN9QhK68V2ehkAxwJJK9cS9jkW1wCgoprv9y3ZnFR8K6PAJTCaLrsy1pLZbUrmjaQwPKPfHzB6VfGTybQ",
  "key19": "5Tvwnz8AXUCUWCBMUCtFtWb4XtRYrMmMAM8mjJThM8TaKhmzuNUDEZEs9H4Buvw4qPWpHRNb1nr3ZDBZvFGD1Qj9",
  "key20": "3gr6Lrf91jq6wuhavg8b21T6wwApVzkeDHnvkinGhft3Rcg4mNdnZLMvffZRjhFjJ29Qdvm1Jf98971875z9wdG4",
  "key21": "3TJGsefVUi1aAdVp2gj7CvL6t5a7St1Ng7BmpAuNakQzPhfYxMzyWjd55qqk5WfMxtsBTmigX14jQMJ4r2RHMpM",
  "key22": "fwxVAdfRfTmAHMmCA1bkVXVUNezPbkM474hTFb4jawuufpdGRbcqogfgZ8m4QwHsTq2mk4ZkkQ3kXrRCrqM75Uq",
  "key23": "4sqxiz3Tnmb5i2i1DHq6iLhQdW1YeUmNmkHhLaUE7UDF2pP15oqKTEPBY5cjEfJJAEuTtJFBYa43LjKtdeMfPtTU",
  "key24": "5fEXtykssAxsV2jixUfm3XzyxaUWCGgdqyEhBuAhxGqeuKvSEy1bm79RiJ9zELXTSdmAaHP4xMXPLV5JEFPFukia",
  "key25": "5jSkpwXHHfpCJFhm4dGL58RWpLvxCeFx5fUvHJqqATLByZW3dSpNty7FMYBBmMEkcBZVwFhdRat69qe5W5r92rP4",
  "key26": "JevdWN8HjULmxE8xD3v5ew7eWnMjuMFABcVsVxeVqkJfVvQJHK2FMGddyWtTigBXJXvH7XBUJjzNvXbFSkrrVzx",
  "key27": "3JXAu4itm92WyEWwwrwE2LpH272HLKg4RUKYYza4MFMMtGsaoNGYkLjqXLrEtbHGzZarXkA5TXJj6pvUcpWqmSXS",
  "key28": "2vgzpFcNAWqaewLqQwSGkQdEQbAvSNv8B2xXPp6XfHGwnANjFGocnkJ3WfpNQfM2CQPQWZTy4CB34ati715h6jWQ",
  "key29": "4cMnsTTGyfxb7pSn871mf54mnS1V18bkohfiMbbMFEfuzMh6MMxkTHu6DEkAQuo9QVXxZd3oZXHU1f4QNMJFzmGh",
  "key30": "GkAeuchJF24DVvdNYEUsBmgN1tsBRQDPfzs3vxXfXEMUC5BtzJC9yiWn8LTFHN6cxiCxMrdV7f2Rh24iNNRzqmU",
  "key31": "2FXvChFDWb963X2knGEYsDgzs8UKRpbKRmmdV7pXmTVn8THB5NYB61foFRZ5a4kWT7nQFQgowNL2bHDANb6DXa3H",
  "key32": "5rEU3eAXLNq3K2GMkJWH7A2dtuCe1ePLk9dZBCc46iVdNeiijMGLpk2hLNr7ad9vZsZBJf97ngRt99U3XVu8sd9K",
  "key33": "4dSvdaXGkUqbDVBKxRwXSHtPdfum3BgNjansjuSxxbKoHr8CBuA5a3sNhaYwBZTma5fY22ypmrdWZyHYSpRpPKn6",
  "key34": "3awv5r4nRahQv16VByzX71PCJRGtaJb2v5g53Pw6D7jPNEfaJMcDnbvm5PnyWUSXHdSS5M2MLzGpP8cm5SUsHgMy",
  "key35": "54ic1i8UF3PbWTHJA5GhVk1nPM7sXwcP9YYs1wERzujhYWKAU93ZoJ4q5mHhdFRGGZftKYzabNJXiHzLwgGXnkw7",
  "key36": "5EjTMZDVzo6yvRKNjKYa4siFwU7Y1e22XTz89VDjRRuBHnihPPa6hg7ELkfazDkR4jzJWCE15eGZ1Pagy7xTPPPQ"
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
