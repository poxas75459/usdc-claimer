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
    "4mADHTesbExAeyrTM1QkmUZ7yMbGPKH7FddHnzjpTwxALV5ZkdwF5EwaJWUx4vLSoKKpBRpDy6LiE1eVKCBQ8V2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B4LTatbVJ7bRW94HgDLKs89noXXY2tsAkgNUuYZKGpgGH7bhRGVnXDAyESSbWNBDwj9NRUzxgKHcCvi7527nyrt",
  "key1": "3GzFBpWSWYHU5Wn5omgrcs8XLqVkDzud9fC5dLAgREQaZqQvtWUENA8BcUeWMKz4cEp5QqoRNn1RE7STFfcxcRSR",
  "key2": "4GeuKriohC8KBzdThHo9rfUBbpU3Hp3ndYL1ZqC3fDraKCAMWcPL7aephAJB6Afs82ADUWXvFNrC6vt8N5fEwD4X",
  "key3": "zDrvR4vRxtByTYat7MThE67k6mPu7ReoTEpWAnqtfPuRF9UBLUouCzQqoMDemVEPKXY9SMGhuYCZsE98jX3SktJ",
  "key4": "5o22FcnuRwKn89FNokrNaAEKjpWwZXp2VRid9M5woLMAforeVET2UhWetzyp5Sti8v2TndbXnKttkZNwpYbgkVci",
  "key5": "4M7SVZzpk5kP878WL4h4WAuLS592LHXeyg2rtezhLxmZsF4xxsV1Ldn5Nia15GySFFa3WEnKYTq6QGaxXq1U2yMq",
  "key6": "4nKGDqWL15dKsjWtc9xv8mS6fph7s8Y5GjutFu7quGmj7427Nc6tGocmmBcUWS5bfXN4KE7rtXSkBkZ1WCHgPte5",
  "key7": "48qkY2USdJ6TzDygFHWTdkAmXFvA9eits31jdvR4GJB5rLHVAiHzLZjvc8KbHmMCzeiVn7Moq8Wpet2wNASmURSR",
  "key8": "BHxjUQKg1TMivrUPiHfjCKEWQZJbExnkseN3dbu4U5Z59tXjfvP2jiAJtz2MFY7dq2bufR46WiGJwuL2kKPifuy",
  "key9": "isFGJB7kwbTdNg5AEXRPL17aa2397TA8aZeZYkeAoT9q1n5qEDzfJmJdjJY9pScpXEDu4oxMJSYNbd3jAt8NcDZ",
  "key10": "mPsWS3S6c7C8PxrLn34KGdYchEbSwW4LFUuCZu9vRCYj8sDKyN7smsMUyQjRRBuUovUkEvwr7fYqVJPCRoqsArx",
  "key11": "4FtSbUX7Myx6L7BTqe8A6ndPmWseSqEbdNt2Ca1DbCqQG1x3RND3w5jAp5fBBC3m6Bk2GyFXpZv8T5EKmmgAQFji",
  "key12": "2Xya6K3tXkPgAjhy9wGJrjQjDARNmzKTM1f5r6vn4dvUDr7zUp7TfqWdmDRRHJxpwgFwUE8CtpFV1uC1zu95rS9f",
  "key13": "fB4WZhWTb42AeqifrWbg5yu85zk1urkPNBVXAwgeJRjw57qNHH9wob9oUox5WFA1n2pySMku1Mj42z3k5HH9NoC",
  "key14": "8RbhxL89Nf94sc3v6CNVeCaxVWZPUe5Kbpm7w7Lcqu9rpva7rFxCv5QWvYHkEvDxB37e6qAFf5brnEns37xf3vG",
  "key15": "2ZGhKnZaN8ZYHsMcR9HuFsFF1hGdeu6gNG1DdVaasqm14HHPabEEpgw1Ph3DmpbRNztsEnyXREX6sUMGnXRgn4yF",
  "key16": "jxUD3XuTBCwTWs8irtQH2n76X1F58cLBSG7mvNRrK4a4NngdNWHHJ3PuhPBEkVDbc4k6EBawxF73qHZnEK9JKVD",
  "key17": "24XYJe1bkJaCs5ACrQumnQgg5YS4GXxEngk8ssbFGv1Uom4y8P7fsTMmdWkHorbAaGqcBvoEJXePuoP2bcJWAtNi",
  "key18": "25aq2ZmKJE8sqqrw1qe4UvN16LbnDxLAqBSH8atQvH4rBxsbBgN4k5aR8eq5bTQewh9enddHJkFEDh3fY1MJ1eze",
  "key19": "59yBLgFFaVTwpnWDK4zzFhPcZhLzYVHnP8V3yMtu17cgQSPrFEaWt9JjnmHfkk6ZToguGG3o2jmmGTRdBjNYzaDY",
  "key20": "5ahB3qLsYcD1XN66d1qf9Hudwc1o419rbxrvR1GeyikeuW44XRLjDxWe6THrMMBL89jtUBVouDz1eRQRW6VkN3rP",
  "key21": "SGkBwHUj3NnBL8S2HGZnnqGvwGMfh5sbPZq59JznnPH6o7DvfNGHskJGZso1CrE8ZoDpf67AHRXbpujSUCiaHR4",
  "key22": "aUDhGzxqHLjLsxXkATzjuQUwbKACSGh1mFTX5YD3Z2fvJiJHy2WJaX5qTSrAkNSQanwaZpqEE3SgnEZf1cTjmv8",
  "key23": "35HG4JgFiEciy8cXqXqNJdGwRqGbEycxm1focr6ySGcFQp65AqP5tJ6TG2pQZxhMf2nsnncBQR7hKE45LCVM6ikG",
  "key24": "3amiCW9LNNSMXkihf1AzStVGvNAgcdfsAaN4avojr7k2EJPN1vJkDFGWfvgAXwy9z5yAwx43YNhKGCtWryx1ZgFZ",
  "key25": "4mfN1SJqR2gWnJarv27oXnyBBX2jMpinAwhup6G6XGDa9Ztyk76eM3vPsLvCqhVwP5KwNNMuq65UpGRCvxWvS1we",
  "key26": "2DB9itA8eAjo2R1h1r9KS9stWXcQnFRB25ZcAx6dCPqUwN6hwuM7PQLpNvpgdFJXB92JnC2W2cvSn4WjURMSCpTi",
  "key27": "4U5XneWXMgKnDhF6XYkeaDft8zuLTXY73shidgEWGKNxvKcDC2im8VvzJ247k43Zbtoh5icSVJXehV3rAapF3pvg",
  "key28": "4amSJHMTSj91FqAV4wwCxWKKgUtYRtQJZLQDftmMCdSBm9ns6CEWc9GLzn6He3NdfLRrZw49vcise9EHtQe7QUqT",
  "key29": "j1PVudMb2zXT9jR4zNvtX1HRAuyoeoeAFXkB12brYkNaqjZEdJ1FYzaD4UMAJqCdMn2NN5LztQfBW15F3wpk973",
  "key30": "Po5zM4SzCzGBiePkzwdH56gESaPtsph6exchjQAuzT75JvGb6DAVKUakWpG1d3siBEaVQ3BaMnwnFdQBzfx5C7h",
  "key31": "5t3Unu61DAcw3pNPa3wC5v8Ugr9wxckkVJZbfvz1kdTmx8ZLvKBi7TFKnG58BYhRTnAfPyZhMbGEHp8rQDjNZGPW",
  "key32": "3B8GQfuGCN3RfhRxf5AhGWHimR4g1AV4PtSmALJMTRZVBXA7tqwXFMxrzMSFDMHwVzYGxFhpXEqzyXzpgGuYrud4",
  "key33": "4tf2UK93e6jdE9XuTgJLrmDYFtJWuSTWmDV2Nwf2KEmfo7D6tcQY3dxBrSTMxc4Xe4LA6aLJmXs2WnQdwyMmR4vp",
  "key34": "pBJWnNCCTFDgQ7t8BSzzRPVpKrS6BaeWZZ56B8LpX7JZ5msnp7Y2EoRB36FDrV3sttY3pGTVoRjGDVFZ8BxhoCP",
  "key35": "ShfMMBCevLFZ3mP9CvVhB2d8vK61PvnZRDge884zU26pvKxaomGkkWGiwnR13NbYXdpPCTXPWD1ZQTZwokNoMHu",
  "key36": "HUUvj3wDL51EzR4FjDg1kbXS4bYUZkkDSvKegYYVtyXwHFBY8bzrUyGgfyxjtFR1gd6G2Lnao72R1itGZH7ZifF",
  "key37": "5gkXJ5tG4Yy2abv8h9r15ZycMHV6Rkoyk7rnsob4Uvuz1mDEDfCnswuDaMT3b3eKtdTXQVcJmY8YZnURuGPLKg4F",
  "key38": "3DLf8AE6xRsi8avUi3g8gJoZuXU3qLMhuWWrw1NNW3zhHrqF9wSxGscuLc5QTgfgmDPGkaFLkMnE2zmogmuhCpNp",
  "key39": "3ypvfrAwDMDt6UzY8mjN3Tn1wBmaR8CKxKNARYopm8e719ZxfvMSqrqtc49o9zfoFsYf2k32ErWSy7RS92k5fCko",
  "key40": "2yBg6Thi6u4hd6y8cP1zoPfZ8fyPUWiP9AxxSEb7hVSFvsrpzKan44eC4XCPJZ5jBFY5jwanRmb2pBS8ewjhTKr7",
  "key41": "5waiqJZdsb98PAMiG2RCLqksCFB1yVtfS5LAcmLbuFHJ1S51BH3RqYUbczfrPWLRCLvDBwkxYqXD54GkQpsg6VT6",
  "key42": "42fWK33GfKPtNSecGatZztZ52KoBgR5eS3JSsToY5WbejEtJMRd7pjVNbJu6CM1T73ugjSYnzFY9G5HqxtLRBdw3"
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
