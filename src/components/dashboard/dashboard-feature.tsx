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
    "P6LdJacneFcV9RKYnVqeEBZ8riFxLBssxeKPXRZEUmA8tUd6i6DhUzUpgaPAAiouFfSrc4aDt4igc86odudwfBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GMhKFecsF32d1LohHyME5K6p9ELT7oU4kzURfXN3dVxvAa6z31GiLSqKDgeaTgZifcq5p7c5b2Kqy2kzhtbxccE",
  "key1": "3rdCC5iDVGcfA21ReaPnYRN4mNoEfyVJXGbdXuf4KXGdL79JGtQuzV7CjgrPMC584drZDVahc2eu9b3VCkQAbmFt",
  "key2": "2hKtBxmVesF2NfXFT2X1xM6yRw1VcGKRZGporyBcs229wFuRBzuNeVXABG9LVa8qKkcjYtQbs2qhmhv66hCqEthf",
  "key3": "LNutnHd7wL9SV6s8QeTw22VLGxpUGpkrr46ttPgLL1GjEcGip54BNG3etXDW3m1HFQwuiDDVmyTtJJ399nmUT8y",
  "key4": "53phGMaay9sbxGUTVrfigHGB1hgeWqnCRMvAxrMuZXBfmpuasFTFzAHAQ6TmpQp6UEvpagrc5n2KCEaN9MhAZ8Bk",
  "key5": "3UPKnGYAWJBSZwRJQd1Wa9k8dc2MWjHXg6fgduwcBDr1bF57krHBHkhiZgE754sZqsGz9v26CguYSiLxZEW7jp7P",
  "key6": "3Suf7iTyJiKSKFTDv73wGD8GhVXnaSrNEk6yNMciTasmqs2y3NJj14vHmCs2DS1X3zHDwwsxUaksC7jKvksc9752",
  "key7": "iRUiKNHjEhP8dmf7wxrW2Lq62E1D9ea18SNjCCJiWVZMGSkEZCQGSVCAjarHMSdXYC4AjEysB1yaWmB8XTYz3in",
  "key8": "4UjQu7P1eTUCP4BbKGdADNoyg6YsY7VZL95hcsXZR48HyQC61rdcv3ERzP1HrcWrxJ4UvA2KMMvjHNHvjfrekAxj",
  "key9": "23a1asKp1hPwTWfmn46EFZRPSyQpJREtuZAduJ52ctCcoR3e9EEZq9usMPro7p6W2ApFpCofFWAgArQjzKkdBXXD",
  "key10": "51RPSq5hCwWHy4SBJL5V2DgqYWWQR9a9TRzRVSWfmFHfTqyrxDRNaf8ELXAvSaAnNh6p1dUMEnPXSgoLKhs8Sq7Y",
  "key11": "3AerxjSqjrutYYsmdgSfZ2s5jUY1UA8Rop7j2bAf3i76AZhGsDsEnu3GTkgLE9uiis5VbmsiDnStEtZcAbYQ7vBn",
  "key12": "4akYM34QXmQjijZ7k9Zwiudc4EVPdh9NpbfC87WrrbyZp31oHNH57kDoW6nPYBnQQqk1bLWGxei36oCwvBTtcXud",
  "key13": "5C8STQL18ju5mFXUXn2YKMWpMKqhWMRzZbPHPCpLKJTEDp5Ln746QH7T4iMxGb4dKZ6NmKZNFYmhbdHpWKDCh9qY",
  "key14": "4CHv8DZ3G5H4PXxxZ9283xfav9nC1Ewott1eWCahJ9Hg8Do59LywzMZBNjnSN9DRqvNfqaZbntqFMc5QzFQw3mEE",
  "key15": "2zR5Lu22TPE8hQigY8N8RtctL737sfknghyWaA2PpPbjHXwE6GNgQkPJYFFKadQENjdEKGYpHnvfeR84X3rRd3kW",
  "key16": "kbXvmraaSKy54BwWh2bQiP7p3s7tVSh9KjoKFstR6R7N39vvK3bsCcNsPE1yB4ngT8auLnu7V2tM41r3ptKhJ5v",
  "key17": "5sryRZFkk4AWw384gPt3cvjNY1QPtBz5ATzZZTK2i3SJZQZfddqeAJuh32MnxWi2KAEBfsXYwU9Lon8s5i1LLTa5",
  "key18": "318sW829WaztRCjMLFzMBjY8ZrceTpre6RQKMMdEws2iz39ucmni2Gd6q8RAKz6Yku4a69HvwG6dHgV1r5BEB3f7",
  "key19": "24MoAjVQRXrsT6rb6SFVmxKu5owHf67aFhAGfbcP8iFBdSyQS1vTzqYJwL455t94pHGpqNezDZht7iZAouJagb9T",
  "key20": "274L22dfa927mQ2zYmeQx7mrNKcBcDBraNZFq5WTbnmF6M7jonE1dF3ThwWL8vVsfysbn2XmmJD3tv3ZuHGHGHWZ",
  "key21": "3FSTxGpAkkYuDTRp1TyetYZ1ggD8LqThidbPyDkHcTxdTQFKK38hzUUu5VCvqH3d6hBDrfzAfwVLM357xBusUaMq",
  "key22": "9bs9mVcW6mqtkYALeXenXNp3F4vXrKbuonEweg1pYmjHFhJWEW1nzsePZjZAzhdNeCtma1TqXx4mpCzGQszH4iR",
  "key23": "24zB9yJM9mYUNkcAZc8s1iQs3wyWNrZacstJQm4zq48xk6xR9D11D2S5e9veKDD5Sav1hHBEiuF4V2h6VbegQcZR",
  "key24": "TmMiyRqgvaGxBv9TsRwNTLa3AwhGSWR3RKHYqrAdMXkrz6TDKJjd6vqrzEsit9fnVTFo2JvJ6bSZ3JuWPmXarWN",
  "key25": "3NkiUxs1vCpBpe1DdRrzNRahV1Fuj232VvoMGb3KfDXj9ZA9sNbtmfbF69fE9EdTCF7Vt3TjFC8pcQEBBYkR7PvZ",
  "key26": "65gjDVjLdsuNuPpqE7faYvEB6HmhJzgivf4fZopxTUuuQWUk9nig265toJ8t1LwgAJ7Mrs1QkjcEuzQ3CurRUkbg",
  "key27": "4kyxSyiKkgcmYHZ9Kq99ed32tChJjeSGHriZnZYFHuEuPFFYMuedaxEQGt63ZkeTHgbuY5nbdBGdcd6QqKArZzHH"
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
