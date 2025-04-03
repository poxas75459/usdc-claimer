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
    "4LDob8hXQRX13MLFK1JydVwqXC8NamXBq8HqCFToy5KfABJ4on1EufCEZ8LEkjjV3VGG6oSADjEdGmQjt2k4WHxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qjGNvHViXS11T3J7GV6NUnq9x2nMRjLaQeaCNki11CoFVsSML8XLr3PzbqRdy2Zjou7WeicAsJUGQcwkZDSF1sr",
  "key1": "sR5iiKSFVCNR841L3KB5Qhq1mKmuwvzmeFNGAagVcHjhKxB9tLydHpgrmFTB1DAACmSV7NykUqeQ315r39XxWRr",
  "key2": "FsyGdGqrogCESSxqt1GuyE9KJSVL4forQWvSuoy3MfGnYKBWu44SPnyAohS5MkHuwEaamJbHGfLY2mbc7WPyCNY",
  "key3": "4JZd9jbHgiNoQhnkQb2feD2cphkPnfZhU27idtQ4dZoWwycw4ZDLkvssVDJEasvhnsW5B3cfijLVMQQanPmfc6NE",
  "key4": "3eXwf3AuZQxMkPqVr3HWzpJurPc1nbQLbgZB2cxEGLoZakABagW6Tj4gCpupQJhNnhbxbwVrHCScQtrASjyhxwzp",
  "key5": "3R3iynuFrymN32RnG3gzJKwSiPgGcTmCtuKRYfV7Ptdtv4DMd7gxCEahmLQ6xYNTnRKyhNX8KZp7eo9vBdTS1ioF",
  "key6": "4iz1UzyoLxS5bEKiQVEjpSzeaphnNnLY9MqKbyjCxwSyh2ZhXUYgARSDJfcFPwt2purwLjbnoDgd5bngvZ1mf4VQ",
  "key7": "4g7UFF1x9qB9DqUnwRxwqUsXjeGkAvx4mPdmPcK2GJxtQH9u7psVSU6HZrHyDdnxfjRzmTsXJfxLw3EQTUoBN2Lk",
  "key8": "2Rxf1bBTmG7xTJ1fHrw7fiwSA5pj3R4c6x6yxG72E1aFUW2ZTath31Fjuzc5482tQnBpSjCZ9uELibd7ig3DrWr",
  "key9": "4A927v3buf1BVT7WbxnGStY8jH3h3bwz3dKx6xF3vacgyxg9vMdXjtM9S5BFj7ywnuDtNx5JPgBchxxTSZRNzGSr",
  "key10": "xi2gBAPwRRWWRVkv3aPcqEKanNQFQiwCxsUZWhncqJ2EthNUNo7HsBu6gMn3oLKDaojbqkHHxxe552oYi5sjd59",
  "key11": "vtDyJMowo4t3bSA1P8J1vsrY46b8EXGpADVvBoLucEGeikyDSKjvDAith6KXYJnN3w3vzfZ813kQ7M5fFTvc7UA",
  "key12": "4tMfaNkAeiUVMpsZHCCTh4fH37J8gYW88XVsmsGuV5vKdApNdrLc34BtbJRoph2FsxN7H7WV9sopN5KZgxZAkF5o",
  "key13": "5HWaoxJ54sVBRR7DAWNkxTxvmAJyGhwtbixfhqVPp2n5THWBpcVQfLkiXfXDEPVsbX1RaeRNtW3wfvdy5W9BRqQF",
  "key14": "puJQWWoD2uTzvnot5FYH399s4ivdH4t4KrQSVDpEzKJ6KW7CwCDav3X93dNfNK5PizYJEQRrb9Zw7M6ccLdme1M",
  "key15": "5U3Z3CEXtzQdZhFoLuMJRVmVf3vx1wZSHJebbjMCxqwg3GTDKK2fv38KjZR9hRAQ8KYUmUqVENJPNr4Phr5pcooC",
  "key16": "42AUb36nQ5Zsyo5MHfzRQauL8cYmyh6dQnA2w7DzdBY9thTqWaSANim6sR3Kw6pXPx2V4pnCMhxsnfNAbSvW1jiS",
  "key17": "5H9NpnLyyic2ujaTsbPEHiVPnetuHKqT9C9dy661ZrhoDTbZjEzocajauPwTub9dAp9Ljx5uLMjoTU34cmwnzMf6",
  "key18": "5QqcUofGdVNcwKCBymQDGmGLZqzvs9SwxcRWF4C919Ugodq2Kq5KBkRx95M8DqmD9E6XS9SeQfqwHQpsXhu5zHgn",
  "key19": "2UESrjshheyj9L2YPqy1kxp2mMLaDhLNTnu4DzdRBG8Mwt2TZks7mArTB7FLHKQhbkUWDWQqkyQmDNDCvkwaAt1H",
  "key20": "1psuuMVCH3FjvLd7pRUGcB7VF4Yt8oYA3dxsZZvpT2YxTAPky881wnE7Rjf874hfdZPr59DMau5i616v6hdu3AK",
  "key21": "32ax32HWm17WSm6Rwxqcv2erBCRBnKbkreZSFby4xBm88AHYg522hNtRmYTQagJX7gh9FKbA1woxDcZpc2wKFvcm",
  "key22": "5y5eUy7i8NwNJ6ESeRY5FJB5AQMVcPjptQkU9D3cwLCbfxgRUfACY32eRZxRwrkmubhbsafWLBrBAQUpNEHi7TGB",
  "key23": "2z3yzPAVEum5MqLuH5DaVE7qFscUD62EzzyCKcQVnWUeNxRUGLWAWw4wQJ6QsrzTXUNv1SWvRXrd3j4z4D18YMkF",
  "key24": "2j8J7cKTRb3QfMnJxHSJnrzXnaMaNGwspFcMpZ5aRAThhTS6MT9VEQ52eHWftAa5qSHkDfm33GvkLSNbfhPFnwEt",
  "key25": "4UJ3yt9exjhX3zV9jHd6MSD1TqQQA9yCuDhuqCn68E5TrjaZYGVtY5GaabgsDqZ5Bv5yWqQLwvwomTG47vqo8hVv",
  "key26": "61drEyrJrNYpAYszELQDaUUt3jdJ2UJZoSzGoqbTvm8ToNw5VZqZH4hJESkt2nk6Myk3mNE7J7epPPkA6ZK2WgtN",
  "key27": "62g51EDyFG453NtHrvPBEoUBcGMTfYP4kjA19HyzDp5xonTUCTpdjGTzxrNHEhgf9kjZD6nbTV9FJg2QZF4bNphp",
  "key28": "26KyPxf6Bv87GjAf8F3xsUFSuYuowrimrZZWQeEDYgFgQH34TPcQefWT2NisaE3xbZZxXdWWSK3QMtpyo7RZwAAH",
  "key29": "57mDTY63nc6cjp1bVhVC2EGRnjhUr9gd56UkAtxUkgicvjWn44QCLhiitY9Q3QmkPf5ggdPDn7WBQx1nWz4SbTC7",
  "key30": "4KSyu3wTCeH2MyEqrPqeUP7atDnvBrSQw892fj4zaKE98aybKYKCoct3SZzwTYRW1Md96o8c8DPs91iExDXtgjG3",
  "key31": "58A8KN3cezGwbaptBNShGCnNgmWWMmLmdgM82xGpzRadWAwtweiApsxayzLdQVcff1agtwfz16AH9kHMM4CDMoQ1"
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
