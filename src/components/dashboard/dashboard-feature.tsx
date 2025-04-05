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
    "6581AbPWhuyYeBaUu6BpP1aBofC1nrVDwogmMzvEd31X5Nw28ewwxt2B62E3NAAQx6xwwRqapmVUjkymPyyj4DrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gYkD7Xuf6ic9F1XADVJSYMtMDfBzCAVC4UsSJyBmMVABZKixHWTQCZKDqboheiKYw4CEFTw9YVUugo2WdN8LDFp",
  "key1": "5nHAXass242tVCivniXxJKbuopzRJjfVxkeMcagG2SLZUTL8N573AB1ZKTrMjXr4LavxoXPjiosCXFmRAMjofCpm",
  "key2": "65tJ7CCmnasiLdZt6DqoApTgZNKEYNuPz96h1YidV9dxG1Dwba9UdmhfajP6YDt6auPzB2CEAbSSpNSfeMFUvqze",
  "key3": "2kLF6LDKFJDytCnWunofigB4t236DmzS5EedqfKB8mSXpGyvzi2svVdBbNN4hp6B2sSVfxqUhBUm8KMQCGM5orv6",
  "key4": "5bmH35Fdg8h5WZkN5kPvVUATeHQwUC6kEpgLfHfoFC553WddTucw9VPtt13Nz2pH9KShMxkTXkWKrG8CBjoFLqnx",
  "key5": "544kR6Nq4ha6yMXrACQF5BvdRdqdJrDnY8X98HYDMEs1MDXHR5mcBZhxRhgpF8Na4zbDKzwWgJSWdBiwUGAixwc9",
  "key6": "5XTAQBdZAvifk9qBqxwp2Y1H1F5hTMwqZkUnagu4HenhKqxevvRwZv7JqcsaJVhFo9XYsYuEnNPaNaBNHmreSYj6",
  "key7": "3Qcz92oCinKvqzY4HHdcR1qFkjkuV9iWSFjqXSnWta5E1ivnRvHPfHnPXFHxWwNUSBwQvC4xSwUtC4rj8mK8mM3t",
  "key8": "3PRYXZ44xygJsJuUCjQAK2YUDVf1PWJojTazmVaBo4nTBJDVovMGkZH2k6YiPuw9VMQrsKFSQY1LGTJmcXV2BcFC",
  "key9": "3WPAG2rC6CsKtDwa2FEfMkFt3Di2kSovHqNWq9g14jE6PzEFixSBq5KLJQ1reh42Dg31evWq1auNXFWkeNCi3MoB",
  "key10": "5yUNDCJP18CzejezZhdKXgEiyM8HqQLmfKZAzueL3utkGVkCkvGFAcCQLnBp6oKtV8zQiF1onCRVhEWgLtwVWCE",
  "key11": "3otyEcgSG8K4z7sKvuJqodGaPC7ZxF2W6HpmAvs9cxrXYVZcT8UkeUsGXtST6zm3swGRT2YgLiBGjakJQr4i2Eee",
  "key12": "3TkiqPaQy5tzqJXgBofKDoVrXj3JDN2aUSNsketLZpmcLrzAGvsTdbWK4v4BDzmXfg19NVkXkYNe9n7ee7U3VLMw",
  "key13": "3xFur2LauJx7oBDw2DztvHHC2BGNPPiGuj64hXBic3UmDAB7xgS8oboKTA2hwa4hbe3uTHAgc5J9dmREap8Lapt4",
  "key14": "2pgZwpR6BUJqo7Tf8rXv8P5ZKAuCkqZ4R9KVpD6TmuMNpWMrYeABSYvEY18CgbbEeFui9UwhmUd2H64wu4wiV3Qv",
  "key15": "aLQvx6rETNUxz6HmFUk5DYWPBuvnMLEJvkmA7NChZKXMXfBeAWdedjSEdRDpES6gcMTBaKKAQptS8t1wcd9SgBA",
  "key16": "qVQhvbJoke5Tvk4AB8WNcwRPdD1u4A7DfLbYJjDgMBeD6yGRGfhDVAGrpmzw2Z4xNfkKqjRWcJ5FT7PeTGSw8H5",
  "key17": "5ZjPtYvNu4vbn7dDqBBznmHoTuKdLagpzTXXSC8gnejTqqzBpUWy4dvcYyNLDSiyMFJexnjHJDJXS32MAsQCtKxB",
  "key18": "2EcHCTMPUxmSjRNmy7ptuv7Cd2MoijbfUnmiRWMDyHWDM5NpKJmdf9GKiSRZBfhxK52tUKh61pbubpvWHbh9Rjyv",
  "key19": "3Ffd8L1D9wFPWUSTgqP8HupCUJCRT6EnRhPc8c5XiXEHc7kwm7BAceAEVpUD1YtU74xc28rUyYXPEhkLBSVHCEqT",
  "key20": "4DwDQ5DagnBz3uqKdpcS1gxgc88HJHtDRSPURUcRxfm15XxSeeFsyjjoBVyiNmccBZLuPh41JAR1qcUL94pxcEe9",
  "key21": "z6KacqA4EkkqoVR7FzkeFSmQjWfAfsQ76wMetxUijtiD7dTPCWPpeoJ71L5rVx5BPPqUf21JTRbYvQw2C2MjhwN",
  "key22": "4xraQtsSgNELHnVw3bmLJgKsRJDXzkYvXE7dL7GEBwgLtzFopdwESbu2pbHRp16msyoVXt8Q8tK5ivH8Q6Ha6BKF",
  "key23": "4MLcWsb85HLW1G1xPymGT5chPENMShYrZgML9AxWRAiozeLQzLDNAyneYsx4BeCv6pz79gK3Qxza4JvdfMgPpk9s",
  "key24": "StaRm6JwdwjKCnWDeCHnE7TqE5dMrMoeXRL5nungsR73SdboCcuLmSjay2NeYvSnwytGpmD5yp6EqSStyrcQyjh",
  "key25": "3y7QwNkzc81aBAQSCLA7PuzTfQybVGdUyCNUpiydTsVmWLhYNRJqd8kSeAcvi4y8zivXTpeQxMeHH12iGZVfXvLc",
  "key26": "5piSmP9bMcX4GnVL2K6GEFSbM9cfUjBWmcMPGvat3npD456FS8G5hi1NvxtPUYsou3SYLp5EVQsarg59mJrWztXh",
  "key27": "yzTFEXuDEKjUqG8BuJPHwFWhoG7rM8f21XhTnzBWbSsFZc3kUCMtcLjTjcWbeyiEL5ym5d8u67qNZVrLgGmabrA",
  "key28": "5ZRyKdKETijXErTtwwacsDYBsBYazsL3YH69m66DTsYZrHyRzCdnbPyYpLUfytTyFLsMnGJmurdNKPx6Q2AkV7sr",
  "key29": "4FLz5d24VApf7SRDxAhqHu5boxAkAKT3Wu8H74aiU33vTTcHSa4GkwjJ9seYYMNUVUn84Cas461oF25cq3UrvzbN",
  "key30": "4q5WiKSagn8Sx8Skc3bCgAtnZp3aav6o62vwHrYt3se1yo6bHAMuBhfd1GCZseC4PgJrS2UmUQUV946ZQYZzZBBT"
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
