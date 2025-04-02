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
    "3aaHALjiEemNugzokASUYJ3EBMw7Xr73VdHBHri3ohH8tbQawZspCighz8gZs7uTM1DeJSqHJKb6ZzZhadRxPWwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7A7WGtJUnUJFWfLqCjJUu45RJzND58AAA9ZsKNm622QmebkZbgAzqcaCSwduf9VNHaW4tUqZyFqVhPW8D2kizy",
  "key1": "jH25VVvJB9u8wqvMWNg4pNC7LBdCBqhVPK6uAhRa8GvzgDE5xLCbf56AW2Y2RvEfUH7oP7Xgz5PrdFow467TV3m",
  "key2": "Xd3VAh5vnTDBHL1qNm3qzX29nPxNHwRJbzJ6Jsg2aVsgAi4SwGigBPhq56MJsbA4GpVT6rrp38RBqY5HymAa3Hh",
  "key3": "fzYmSNHwXN91TfEicT9d9BjGw3H9ZTF4VQXqeWo4smPbZvH6T6G6vvVw8gRQyThTvD7SwkcWhgT86iQ9DFcackh",
  "key4": "5sezSWwDqgRnBVYpRnha58pvEb8iCxA5rW2V5driRZ6WE7GkfMsQATBZctVTvhPqToisieQsPMLH3kW28Z2HmExy",
  "key5": "rFyVz7VcPJAWxrojWUoCmFyojzanrZV2QDyH5QNJnxzAKG9mfhVs29Rmwe8s3vXCsA6JAC9gH8NVAWcVDneGNey",
  "key6": "2cTWRBmBjMzEPb2pL6CiaQ9W2Mbtf1NmguujL6jMgwoEx6vC57eRVEYb7efYruBYSukByBK3Rih3ERU4gbsQ9soM",
  "key7": "3mA8CP8JCZEsSCNPDSaj9GnExEWRidkFffCNELvLKA25DHnSuP9nYMbzxaggxhnsWzN3wPLuMFxqZmU9v1EPb8T1",
  "key8": "5srbtEL9e4msNAz97i1xYNCJMGmLq5HtvWjkYZkV1boZ9F3wGgiS7adKFudTmZ9kVYPYK8K5iyayNqAuKbUMi4dz",
  "key9": "5WWw9Sz4RQ9tEx6UEDNbpoFH4JCWQYiC5sgcs3adEV8W5Dpk9sg7JW5xTdyMXFaHWnwk38bDMFzbSi21ksDR1s81",
  "key10": "1rVNFz2v6WtnufenbQu519Y8TwoAuzhMTdmg3yHLMPrzBSoi4k7WUU8Sg1JchJvUD23NcNDWVTPHwkDgYRQJK14",
  "key11": "mTLcAgXP1gJaH6wzsJnq7xz6CSsT6cNYPzNBKUqT42PfnCNpfvkqzFkUdqnH8bdecb52rDU6RmE3XaLyzpZDNTU",
  "key12": "5uhRuB6iMAqp4kKJwdBZZUEPoTi1rg7KBXPVbC8tZPVyvEJCPhervVQmnKe1q1VBBVEfHBcgyJjpJGkayzpFTsWT",
  "key13": "2xi9E36Umw6jURLfkHHse7vBaJnBc9JpkLpMkhV6HXLhBCDKErJhkFD8WCPjD7667frgJCqi13W716EnLfQZaSJQ",
  "key14": "41ZK24fS5rRE1Yi8izqyPJLMFVE6LkQc47dCEUhECdXmSthJmnnrYa8JMsncGBgqdM6cEmi3qMR14TvDt8u4UVMR",
  "key15": "5hzsD7NCPQ953j9X94DxbXZxZAg6iJZH6ZnK4f7d1ABQDVtKCptEw3rxBhnT8gKYZC9bdKB5nRp5mcpoBpKH2YcJ",
  "key16": "mBWCrtVihpTth8faGrYVs76k5CLw2LGBXAEBNGijm75p9pYQF396ak8TWG8pKAEhgq1VigcSZqRrjURy4AN4YiH",
  "key17": "5pRrZkih4wxJVvBychS83orqnc6JG8DJRCkQCEEYo9ZXH5g81wzhJ3Aycux2JtknJEu4XYKsnfTzFqFytiR7B9uw",
  "key18": "5rxFCKte2PidGYTmCvGnvSFmHRusuoh7LVYZRwLDvrCxMMMn7f4X7uav9veS2EDyqx3XuPjGmtyVDXNhoNaDUxGn",
  "key19": "4Y5H49Tg8UgnrLQmBAfAjM3cqEgpenPc1JHAU86X84rbRGSwkyC4EMWrLBdtpFse8dTQXkskHsv9Dyb2gSgSrk43",
  "key20": "PpWhVaRxzLta3Nbz1uvVxjS9KRYG5J7cUbSCmT2wz8exNiJ8xLbnyRFMvVirYBz7h1nXe3mP7EdGmi8B4ANnwnH",
  "key21": "5tdEpQNR9hKSrCuDpuQasZPjyRwpsRpzhp81sCHUUA4ZRYCk5r3S88Ko2mQJxRwpqPt35pFKFFHJHrpASrPuawsB",
  "key22": "T9Px7UZ9agzj9Z2woai8GP4yyMqfGCbRUazmMSiyUyb8tZYC9dBJSF9oBwBU17XtVKMmU5tTkKZ28wYcosMZaUq",
  "key23": "46FCuE33Xc5B27q8RKM6cjEyZwNpYK7XBMuaA3RLgXiGqwf1MrUimWsW1UCRuCuZL77D2gVgxpkEMCFsDxpon1pA",
  "key24": "ezJMid4WBL15kYA72HGhEUg2MVjWteWsRT8kT9BtLPjxt2gDUFpJ9XaJBT59hXMfx4UDNxsxjSSnLwnQHvRTgTt",
  "key25": "nP2k3nrU4MjnWe1ky5Jjn2A8MbHVfxuWLHr8NrBhcBAZWa6MFJHhrB6fJizWa1LNA74v9ip5wyNuCYceQpP2CPj",
  "key26": "4zkuCswKRRWpH3mPzMDrvs7t6RQSmMAG3MRp2nn9Mv9mSJvn6MHmRYYiwWjrWR1DUQm7upaXx8rdybAwj21czDze",
  "key27": "4P4kX1JJn1zDNPL5f5d4FykJeWzNW4ExEs7kGGc1pLoq3QzHTF8yHZeXHox6sC6mQWLJVJJSVWh71XRvmfHfMgjX",
  "key28": "2g3eJHvbLbhvh8TqfZMUep3VNJ9pXAdK4AiBLE2hXREFog3pt8BHFmxfY5K6FdDQw5EAVF9jcPa1d1FjdZSgJQzV",
  "key29": "64uGcFyZwDHfFHjUMqbgXKTPzrcoK8SX3wEz6kLrVPpqMQpK1MSwka8AEXjqXJMk42fsY2ivy7bW9f2qVXKF3stm"
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
