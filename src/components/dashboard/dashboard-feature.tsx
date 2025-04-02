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
    "48mmAJ8vssFRLAy9u9j4KWhqBwhEXioS2p59zYVei3zzSPHNWLedmNcCkzfLAJT2owvXTrBYxVhMQYYhrt5mVNYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uGLDp7SioByGKY5QdCT2ugJsGdok6cCfGzuHt4kJNG3cKikCAsrZNNJu1UTruCvzbkzgLTWSVQYyWUrWbNbPyh8",
  "key1": "n7MZji7Fjtou9cyjz77ApuydDbnYuvGQHN8Z8JgmkLWfXphrKGnQ8LpKryDpn33nsFrckbzAzY7BqFeYRtCqvek",
  "key2": "5PZ5kLLhiRZqkFZfBbmKuDAgzsipJtKbW174J285yhCZxaAZtf25fj2ZCrcRbMV6iziEv1Ypc8Saj4LXtyZEFxsg",
  "key3": "5pYfkzQ7kSdH8byjr9v4qHEL87TUmzcyjMXP5q2uz17jGDRjT5hvZDNMi6ZbbJyXEQmAJi7s896MaDbVknRCVxfh",
  "key4": "4CyQDBdk1jGoLtYZyZyAfmdAtB68WZQsGGprXBc3ueLS2zEMpj6tBxQfP3jkbc2JbHaSBX3ydVjNzo1UWUeeMJ4o",
  "key5": "45Fn16fo4feqCsss9joGNTmpvCtHxKZCCTVQQm9m3zpHCXwqq6fbVRDXk4XM9yhzdU6eeNQvAnGG92rvZcw24mjM",
  "key6": "19JxwkdEbmvWgupXZSLVuga31jfchtLLfYEwwtXESjMYvMN6FF8SrpwnyFtwzoRYiFCah6n6S1kUZsQJvb5DdA8",
  "key7": "51UddD9kwYRp9jj6VdEdLr9yuMdZe6Hg2HG89fVFLkGkCZ5a43XsnptAg9ygP8aPdCxAEfZ6V41mdPTPg25HUDBL",
  "key8": "2xHzkrZTnTPZTr6GewwWKd8QZVBeXTNLnSerKKPJeQkYrFyBT7Md9iFucaB76ejfZsAkrf8hnnaz7jbLBj9uJHqs",
  "key9": "3hXunyTJGfaj7otb24ezFr94rEjLx78MTUAq9Ece3hnmDnpUV1UUq5NF6VsUBUijJu2uZpxy7WYYD9YrKrbDD5BJ",
  "key10": "4RdkDjw2VUp5QSSzGcLK6WU2VFznwSfSEMYLZybbhnPvWrw1hqVqiviATVkABdTykzdSouYYFjzGode5QGAzw8Yw",
  "key11": "5izwbN7Vu7uiP27kbLC6w5LVqQXXyZRv5eHGAWkjFJuV3effTyXUFFMQVzj75MM1KCqKFvU9g4jSfPDePc92wT3F",
  "key12": "23BKYZSe6WP3KKHdQZQye2vjxtajo41DKkXBwMUSPDR4Na8q2cs1zbybYYr66ExW48triMb2dT5ZkdnLoSMREnG6",
  "key13": "32PkwWnxFqXJZ2e4bUeaEENtqQZkJQcHDjkHQ6mgHeb465mGseFSjJLAWcppPjk2cJMkswzZyfo8km1qd3ibQV8M",
  "key14": "62haciukTAewgtYxRo8yewVfQuzYT3Xyd1UWw8eNsGBMbT5NoHAmC3YPd2xrzxozHHVjsQKYrx3CqQWYbhDsAro3",
  "key15": "3oYVLdN6uTRWZfmp3TCL9Fm5PSXMfRKWa3y7Eba4GhCTKZLQQF8iKquqZhSW5jRtXgQ4qmy7oG1xYDjnBjC1tPzK",
  "key16": "8KBb7DJNrJSCHyW7aMuyTtCN4b7xQiWiX573KX1ZU4Zg6sdipsjJCCR2YKiud26AY4fwDu89U6DHjtrSEDVaKiS",
  "key17": "mMYrrtCi39W3N2RUMgCv1vMgidJEsBH5ZwJPZ5adifyDcaGnhtrr6rgfdEoEtBVxCfHN4fyS9u1WUuWLoorjArD",
  "key18": "3bGKrzUzRnLYUweVk1ihAShYnB9wE8fdn7zFnv5EJrGpKiibU2z35zg1Ef8jhC9od5ZfXZ74aKgdGM5om4LXZkPV",
  "key19": "2AF7UEbtHgHRbc1brCpS2FHywjFCG3CheL54xFJotyUgNAAZrBm9q8ARStefWusRzhCLxCdbbtHjH1ecE7AH36vN",
  "key20": "41sM5z62LoDiNP4MeJgM2ZYixagdPrx87F8ewdQXFf5LWfyJG3xEGJNV2Z1dRcPzjBKQguoUdxJBPpR3hUJ1dw7C",
  "key21": "kTX4VcqXh1x3ozg1mxpSvqjCrtgjaoVeWQ4QXH6NsdwA9USbTe23wXPkGumTgixXis2sqNkAoZWB89pNUormcaj",
  "key22": "Z2rabZ7QWZk2o6S4KuSGmdDPtFx2DL75Lfq45xX7589NfyxmyFZgFaGnEtXAiLVb3i6MPrk5X8EmE3a2CdYNwYe",
  "key23": "odFrXberGWJjRo8WrPGSBRpm3b1nr986edMksB4gLptNLnk9erCUp5sJuYq2bzKoDdLtw3VmUg45r4oKXweR2C7",
  "key24": "3Gcbcy3Ygkg8MYEesxmrhpiWV1vTQktgZ8k1Eix1anw4hNaSoMtRcpD3g7U74LQ59fQwq6pqeNVeo31DEYS2vUkH",
  "key25": "C3rNUeK32osNoPitVHzTRdyGZyrgf1PCK7bYLmyRdrg53MHBW3BVmRD8REFDtg4uL5PuA8vyWVBxMK2bzQXJouC"
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
