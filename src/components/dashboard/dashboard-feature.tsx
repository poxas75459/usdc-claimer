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
    "31igspsm3SAaofbXKbgwSiZg89ijKo2DSZghPf8FgVexmCiX6TU5xRmWVbsDrf3yjS5CbygKcfWEKSAvDZFiV64V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hR8AnzcYEhxm8aWmzdo37Z4P3LjwDVqYQRMuDBawWMb5Jj1Qa3fDEzWDaVowbAMkkWqaAZNdEnbu8gjXVQ6pFiC",
  "key1": "2h3s7MAqu8HynC2Lkev3A1zvZzXJ6zkAxkJm1cNyMSgdFMqMyHeAcucV7Qv6MiwEXwJYQgAG847YG37S3GKkCKL8",
  "key2": "3mbSwBSPLuUVphWyrxweDuuiW81fpPpmE1SDvaoZmyxpSqf378dmufmJYNamQsHfWh9uLGfgbhfrzsbsrxNcYxn8",
  "key3": "41qkNCT48d8pxXe9E7GP1j9TjetFdwEu3khmmQSDAvxdTk2FKdw4behjuozyaFp5vAdFi6iAhVeHR6xj4E8YsMc7",
  "key4": "3tEbxZkHMWpP3qpXDEKwo94TKTdVvS76494jVb7xet9REPLLnW7fVxvJLVXTL87K6QC7Cyp5xZGDMmWh1rdCzGQZ",
  "key5": "31REXE5mwb8S3XEJYJ5me6ghZU1ZdjjvECrXGBw7RhmyWCMJvT7H8nSSwLzRKozjnAL8RM6NQKhNE3Qw2Vag2GU5",
  "key6": "3CaFrhXpoAcShnJhCPiKkcCiD1vManQqGCFbgNbsbUM3Dtm3aR9wZL69KTA9ekkVKgztsbJYGA9LnaSsy6vcipMw",
  "key7": "4e8D8tUhiuRM4JzLJpja6PC5sUHmwvitAHgEsmHpp63xcxQy1cnm1zeMbocKnZMf9GzsJmjVNbWx3sAa1HkbpGX1",
  "key8": "4BvkXBDQ45xLqcK8e9LR5nvjL2ahtWHCm4Rv8pswTyFkcadykwu85NwWAkYQpEvynrkcKXvG9UAVb2UzRLxMCa9f",
  "key9": "29kvxEcPwoCJhHvFrMUzxpQV7fx84RrLVQwPpQDj1rVAx2LpxxRm2b7t13oeN9Qa6h7MT5AjmoGVwec98yv9RAUT",
  "key10": "2A4K73afUurZ33H6S6gSThLvfBJVCUfdnMWxzre7Bk8AG4bvN6u2Yern1hJcw8G2Za8qRyYmKRoS72QKDuhyhHFG",
  "key11": "pwFT1Vqw4cMNb5f2JSVdPZknYx67cMMywUtt3xa8LypDQPfUgk2VmS6fzSzr5B8Me6zNM1PRQXmy5p5c7ak9RDA",
  "key12": "59oBY2VSBptTXRKoyCQ8cf7PyMufV36eNipqQbj3c9usV7QkmJj8xgnhpHpsnm8HqwEy3NcYbhN1xwK8qKscLHEJ",
  "key13": "4jWBxUt6EbWhsBu8jsKeirxrXsdR9aDgR2ANoKNJuF1G4ZoPy6erqCAxgpMGz3ctC6yQoBKjkbwuip5v6134UdVp",
  "key14": "2nhWjbQn5tf94XCfyNDmNg72Ueh1aNanExuCY5vF7A5znYf3fLxjZogP9xjrmzcRLica5KF6gwiApkrfX934ZiNv",
  "key15": "5LAbARHzG5Xq6qfY7nifmtx56NMoGyK4awwFBurdGh6fXQtEHb9gF6ttJVBL9ytodQ9kpDSKQVe5S9aTvjXuu8Gt",
  "key16": "3UcnVHdkXP7R3ewP1YLnRxLF5MaDbiGv8GuJ5r1Lj3MEzAzHxgfQ56iitSpJNNTS4W4idbugn4yci6PJyhA2MGYE",
  "key17": "667Zh2dubLgfzJ4wmduTjDpWuzueFsxbsgWaSVEzv6YSH4pKXnkMPz8PMvc3vNnJpqxFa7NrkvjCmyzFfHRJhYVf",
  "key18": "44NnEtvytwQZkx5N7qB2F6zrbZN9xDewhZHjCzfVYWXHwReGD2ru4HsWeaN8aFWzL6DdVosxJAX4SRFcmNAuVKrV",
  "key19": "5LGqLwjeKfYx9yrRdpScQjZ6c2tRKjWLbyYwMrhh6NBeAqaUzpTrRpHWu6JfdUxshb9iECtrfuiGbNESsHDKK4B1",
  "key20": "2PEH42qSantGKGQaxdhJUEjPte9YirUUHMevx9fPyk7kaWR8RgwMzEacvKP6X6jPCxsu1dbDryAx1x6DPSk29HbZ",
  "key21": "3RMk2nnDM42TL4xPfndZ1RBBKZkR64WVRhQ3nhfTxfYJJm1pB6X16pV8j29E9mh3mZnWqp9h5JHXcMWxaTWCDZuX",
  "key22": "53BieZnJ95w1yQ7K8wnfbL2xUmTcfNS2oqR5PEJfDTocdpKo8bYmRvtwTPveWcjr7NHaK2jQhRNBrk5ikZpk4xQ2",
  "key23": "4uQbDzV4jfcuF5zVaskMeZkxQLH5NCSgM1bhsrPzMj1eyqc2wmNUa7hBvjEgi8w99McLRq672hPmYsU6ohgpR8oe",
  "key24": "4eTQKyWXdBX7hcYMmSUyoHjCo1Ub9NwAkHyyMAfMqZHC9cMxnKCGNt9A7X7fE71hW8DZ1NN2SiYJJ5RJ666EiQwk",
  "key25": "gMCHM4y1J42mELjXPMt7gFqBxcHLyR8MRCJopyNfmN3AbZ877hFtZucY2omeAN3SF2c5KgsnbTzHHC4DBXUtYkk",
  "key26": "5roVVM6KNoAjNjmzRRhyMCnmifH8KxaN8GHaicH1sT4xWcBKUjofPvyd2buqmeogKJNUq57dj9cvDj3NybSh1zrp",
  "key27": "2QgyzAxvM7Uxfiv72j8gF4onuAiQx44TdKDkpSSVpUw9b5nWWCnZbK8ABN35W4mMctSkPcg7pDy5n4YyNA78HHJG",
  "key28": "62fUqJtGReaGGFgk3Ls7QQKBEyEUndCM559obQ5HQQVLLXnHnuwNqxFCKAB7SWWEa5sXxfTa5mMwmh2Zw7rEHqRV",
  "key29": "2SUJdL2XLj5zR7peekaW5rHE97Qju9BsS3tjT55R2zoKMSLci3nDLWmUcgT4mi1yLwgpk376nFdwEXzptgvSGNi1"
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
