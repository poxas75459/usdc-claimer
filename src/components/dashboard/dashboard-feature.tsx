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
    "oPzQFjBf6k216qpiPcztFoBvoC73QL1hBJ4XREQKHGVXHP2BDdftbJU4bM7YGDo9b9mtD29yLYcvNKJZ7LGxYaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63MshvmyWexgAXZuHp2vvxf37jGiiAPkQ8ZxHiUesWSZkQWw98N9A2Ha13UuY2MwM61a3gFMyfkCLdAz7nqn61bJ",
  "key1": "4rJ4VzsLezmKo5Eq4ti9Lg5uxQBJMLYspd4Fcs6Z6QyYzqRa4D9ZMtZ1fdFyZFD4o95Fp67qhjJWuXtKkbAkBe3H",
  "key2": "21dP61CD5FhCKpErxioA9wH8sqBpWjaPvWayu2hMboc7FqNr9TJaoEmxW56qu7vxBTrcQkoP9ivR1z3Gjtdd5a19",
  "key3": "529bsHv7bAoWRV8NwHxpQa24H48gGY2qs6W5H78s1MxW7sGyYtZYdCSKfCGVbvy6FCRfaen2etV3DFTYRymy49Ro",
  "key4": "3kqa18U4799JArvKV47reXZ8pA8K31AZUiwRqWdsQwcUyY3NLgpKCPoQEaq7zEBi7PmQ78BZsUoDyEj4nHvfhnGG",
  "key5": "HeBKNY9Htff7D2TT4tbmJF5sDKBNRHFFej1La6Lwt9DeZDXg7itrMeueRSqjtqnUqEbc53cgVdthLBXqAzpP4Pw",
  "key6": "65jr4UooZuKbmuYqEmV7VqAojErFXAGb9NvcjTxPoSuiN1pEXoV8u4d5bhpSdf86w7shPRmrVhy2Yk6iBb73pKTz",
  "key7": "2XX4JQc8BRtetrUzfqwWGSMWRGykd6J13M1BvafD99enjsDn1XPPKcNsUBxoYeyDvE1HD7P6ZUyfztpTvdP66dyv",
  "key8": "5PkmcgyuXyJbo4FiU5a8NJDb2evjFounzwFN7SLbMvW2JFjQyiedzm4MvtGNTPmVhiQVkjoBWdfwrR2EM3tyts8A",
  "key9": "36h5rpnkUK1pJtHBJ39gYxEVbizF4g3xBBgJN6PjERKJ79HFQRfiytHTsxnVKowTb1xoCJvpPwrm4A8q7kF8J98t",
  "key10": "2bRPYuQfcw9EyVJfb2ZTZifGL5u85g1qV2J71PwUyzTgWHpBw1W8TZdxw4ZQwirwWd1q3ypR4Gh37k9UYLaFTPj1",
  "key11": "crt1dTNYjoGkTBqBDrQavT3PPPZ62yKHvfoqGcnXRJXcsahSUYnb5VKZt13MyPy3nmwfYTbRxq259jBBL1sL8nU",
  "key12": "5JUwgjbTxCbzZWsCfPZB4eJVR8Lw3YCXjykibneehJEtcYNnDRZvexqbTQ4LcUesRMJfGPn25ARCFr3fmtutHPKT",
  "key13": "Zgj7vAUZtGjBrop2jwiXarftvEMTrUwVmGLQw6UWdbajmVWD6HhNMWfstifzG8mxjjv1mEf8NhWctSjN5uncBWq",
  "key14": "5jJHrvPU4b1uhNxWkYFuq3yycU3u8Y9wEGmjD4Dqm854ixNZpo5H63GxdiG5ZPdgozvf85iumFVPzXkBWFdFEdkK",
  "key15": "2iEhHHjFuvnGAGG9PH9VvdhxjKczqAePJLsBiX3uh5THJmFVQJ7STwKvmZDage51SesfUJJn41fDC8dj2Bhj2dco",
  "key16": "5NYiwbfQh5SX9Miik8U1H2ebskowbkw9Ltd32NRo7SRBNe1o74LhBUGFk8rBNfP8L3MPAQnK96HUmTCU8irzf9Zp",
  "key17": "4kg8XnvPdDs9NMWTpTdEdmTVyyhmykLfFctWAW9e9AfvNqBBWJh3WGFfD9a77JuVad9d9RCfNpdiwwcnYC2i6h9Y",
  "key18": "5b5bRVE4NH7Mxozu1BF1D3NVP6M5GVPm6hvZGMAbCynThcRL6GiXBMZFd3sSFAmL2jTr5n9x7zr5bV9Aaz6HzNbm",
  "key19": "5gZHUNJsLaJHUhpqUMWroPiBdaKyQ8Ctu1mUfUBfUdpgHvpQFCgnBLv198bRKWV3azovNyWHeLuNgVgWbGsovkts",
  "key20": "2Wh79D1hbc5C7zejuxrpseKb8vWaNaf5sSDYnGFnkrvycCnEW8DXK8HdKj5iSiGDG3x9bARkMEPSEUi3gZYNHqhY",
  "key21": "4LTzVKdM3KEzbqvXuMjQ5AKvdELkAWRs4VZiKPJauCAACW9MYeo6krSWsxeDkHdKjfqBKTumVoMvJSy5MJPE6AuR",
  "key22": "3yTiML6vxNs73cwEHvq9XZ947yT824F2vmHfet9qvEk2Cmp1wwWAUo7n4vsMM2vrUvQhppiyCN6LpV4wRNUnySqT",
  "key23": "PxgcxYKpB8QcHEowJtduAWK18aL6URdUjNdMzhv9pg7YrjEaAhCFvc45GX95wkczMhDrsosLvnzdjwdLJ4eF7Vq",
  "key24": "q5R4oxQoZEXLGyXFRfpgyjdYv2koco4E4cC9KhMX3TLS3x6J5e9QqgPB5X3PpN6fMZqXK2uLAn7Wnsb1wWpskZb",
  "key25": "4M3H2UpdqksCBGXBAjW3T7EDozWigdLcJv86cyqG4FqWRPJyoSUHFYVMXx1oEsKKvhAzQVs8VMovw1fZ4fSPLMs4"
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
