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
    "5FdQH8cHthse6zxJZQbeQVGPWMCTQrdPt21P6BJ3Tq353SJunXDeqQ8sE9CwFYCFTb7GJW3tP38Pb4E4o4ZVPLVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mbm6VevfNnVUY4pqwhgoSSiRyhjQ7YRUFMWDKsJt9Ad2fTpeaCbUyrZcWMDvXNfJJicUV9jan5oeu4x7okZRgTt",
  "key1": "5ySfqSdykBcPGSraR9gAtMm7D3EGKBjTLQvek3cuT6epZDW6zBgFnXtN4aNJyEkCSQdNQ6Ca3CzfyDGJrGynWbXf",
  "key2": "4yEQHDfGjmERmGHouAyyfvFGH5ysej1HT719aSnR5EYMfKgz6eJdT9yYV1hwkLu9YvcXJj2Ur76WeJU3UAx2QP1F",
  "key3": "48NFBwWhUjeMvRvhcxAn5Uw1jkZosfmEFFKQzxcFXUWoAr4bHuZMjspE6GSTVGreLzbgMQkbFkMRB7VbZJ2yYnwN",
  "key4": "2WKAzCzW1xBVLBucNptugD1L8kiWvPsBWV8ys6UnAnrqta5g3Rvjjknbn4HgebRGUTqhVxSb42R23KG8AXrDSyZs",
  "key5": "5McXLJyCSocVNJzpQ9MabEXV9VmomfLfuWZoFx5DYeMLRNehVR8fy1H7UopVCR5XqmyMUWzqUez6uS89ECJg6yym",
  "key6": "2GHQec9nmccDLHP8dMpm5fFHQxxD4w3tYdiNJCMXRaTHtEk21viPxArTd6jjNduTgEd2MrpqE7bDq7bEejWYPsYz",
  "key7": "2qWneysahxhv5HuAkgKjw8BNCokeoH1yjdzvW6kCfzog9LQL8d7kqJjHadpbPq9sH82LeU6noM46X89WkW1krcjN",
  "key8": "2FT7mx7HtBsi3YyAfFnxagSy6cMgivoPaHnFXoRzscvU9GyPn4L74Drr2CSgPC5Pv3T3V4QS1TiLLCttEQJWcdLM",
  "key9": "4MkNJkWWZnk3vxH7HkWzV8djx9EriBNAUXccx8JtdnxiGUc5gVkBadQVPFPdZpvyGgfn7udU1c2DiELNSVCUsqVE",
  "key10": "5Z4VmHjQnuRig3XdgfJaZZaCH731Gma1JgTtcvk7RVrfxW37YmqXEsbirb993rkwcVpsogyfnFDP1cUdMjCXAqKF",
  "key11": "4drbNCWeQp9u3AaupL9Nb1xnQ5WdJw5EKS6jqJgqjU9sSrCDB5Fr4ZcidVUYFAn6ZCn3XwbpkJxExwuA4FgB6SJ1",
  "key12": "4BzzW3vUaYwnB11sPfj7CGVH7Ds6KhDBXATYym3pbD5gQrfRtF3oTwL5AcfC2CEbz5SHDCiBdKkVwESScM1UCgQ8",
  "key13": "5RSxvKPVuLctXdmUGKTfzpnEMPkRs9T4yUBRhdJYtkM4eue7ZyMYSFozMXvc6wvmuHExQrwnPpSEzh2KFWTUMsmv",
  "key14": "2cZEQx3QgU66gwYKHDS2e9m1vD2VjkuNPPyuoCDaT7EmJcxgG1qeWJ3G5wgNyAvF6e2xvTiCkmYfqs8c4a6QF1du",
  "key15": "GcL5XgUhaQ2PyUgdGv7XcCK6hZc5vqmewmBy3i8wF8fdzUzW93gzx2kWcbCB2N6J37oQBmxwrxSUCBXc3KtenWi",
  "key16": "jiu7xgYS417QUWqjsu495bvMcDx7EDpS5J2H2cS4onVAsARnfbdV1z9CETJaUJXc2FM4rXoZx1mP495QksLcB3M",
  "key17": "5Lk3gbpHGXNxdSYDF9VGKJbma6jVLfNndaiNf8CmG2k9kFDkcSVvqWUjCRNTBZopcGaUtHGmsfURMYZWQaZNjhEn",
  "key18": "4k7WmjUnmSU81ab1sGAmLVaSrVtFEDnQu8ZjSg9nP63PyUHQ1oQu95rcJsDRXNkSCWExYfF97JX7rJyp51X8te4y",
  "key19": "2HuuH9XD7T14QvccETEHhvfbszbMQZc1U3s4kc5istXaRTuo7jpwqANBEPvbYy1vxefBPnuVPFSR8S5QHPxrbLxU",
  "key20": "2FaaychapSzikWa6FNLCiwW1RnrtffqDFTsbik4YraHB6K9b8TsJFosHsyFb6BhUzWthTP26KrgjVKvyLcA9HQkB",
  "key21": "2oL5LNX6b3ofS5rHF3qoHJdDfdfZ2qgoKHtYxRuA2XHhSbJfoYpxg1hRifUPLjfbguoasMxkUur4uhuZMrSETiPA",
  "key22": "3vxWcU4R5n6kB4cHjtvt8YceFDn3R8Dx2b8aJeWoMJvoRtxiofKMhPdbrLxvjxeTxpaqgk7qP6zXnViDBVwm5MhL",
  "key23": "3peHnieyxc1jcC3a2SGHaKhT5Q47C3tKP9YJrfaUo53x6gEM7hXhaYxQi5SX17VUdnCnyLECpQj6znYrNRqdsxfA",
  "key24": "4HCEaNcxALZkD6iapt85hSSoxANJECtbmGNx1fJvB3osptZkNkj3GcXCxvXLY5kmVHHYpEnnEZpZvRLCWoaxbpN1",
  "key25": "3xBmUcHPrr5Dm5W421e2bwETEfjanmZ4mstjWRWvZ6TkXhUzi2GB22sAjv7irU5dT9vm3StW6pj4nd15tEf3YCBG",
  "key26": "2RSVPeDjMSsox64HFqQ6HC4J15F6H7Z2usrJKzbuTUaHPn8N8G18bRH8C4VbWozz5KJ4FXzvdzxtxvTctagZ9Vps",
  "key27": "2cZSuSpXpAHSmLJxcbja8nkFueHJueq4VwJdQPLcV4SHM8kQ2qxBpNsULfoLXt7f3BwLqYtio4D4e2Pvj8sdsdfp",
  "key28": "2fxXn8SymvViRwBEYUMQZejuXfyff8mQN13XzhLLZiMrAsU8VxfnvCo39J6gfL4hmDa3hJqCPBAw4VMUK81XCmU2",
  "key29": "2Yv9UukNgCVAhAUdJW962AUFMgTMMPrTL74bgm73PepHBrZs91L5scZ6jdMovqxnmnNEVFS4y6vM2xanUAtaqHdh",
  "key30": "4edWFmyHVR9Fv4YctUNr8Dx1sBw899o33GfZ3gUVaYSFuP1ojceZLvpZDtRBHR5bSvEp7K6i4mgR6ibUP9yeBNNj",
  "key31": "28NrDZay8VmhmFZT56qCoxgqFi52vCtGwxv8tSThMGpvcQLcdzxLDqQGu9CdpN6c4ix3vfRJ1NVL8sbtxyy9NHDZ",
  "key32": "2e9RyraiXof5YcGypZnYqpJd8YMCsaQreFV62kGKHcrXntM7s2gjyDqjw1t8SmHhRRgRm4ndz1umhfv9XGfxTLiM",
  "key33": "3AVAmhYtVNYfL8KZHro314Ldh67zjYje84o9PnwyxVrgmXQubHAGvjzSRF9bKrw3PnAr5xf4cbhZUZ6n7vgbcW4V",
  "key34": "zMGNAjXo9VDEshDJwK5ER1vUfiFi9n51HsruJLfCqEWnqBGj1M9PxiD5RBVyX6QrHDemYUZjdn8Tm9SdQbrKwn9",
  "key35": "2z7Sk62p5UYRiNJqNFEgqnAzicDL34J4qH2SqJX7bznN4yuW71cF9uvChUWA9ZV8N68zEcqh7ks4vKnrxgvuEEYg"
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
