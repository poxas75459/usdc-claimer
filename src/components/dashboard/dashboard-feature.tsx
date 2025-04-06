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
    "3YrTrq2qeLU87CwUY2Ymx9S77N6CWMEufmu8wvCMGebmRiMrmL6qGTfc59HNs2E1WwQnDvewWQc1cs2fFccaqPxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WczDA9gL7u3ec1orm9UHN1RohzuwQ3VmmdEDXFbxNNNmL4kBtm9hHY2CV4xCrv7TkobJdFxpcV5mBrwEdHpL8NW",
  "key1": "3YyNV5RAKZUuKtxbAkrxVSoGrpy6g4N6okeAFKCgZjMJD7ggUwkZyLPZzCJHNwCFzuvYahZ1pwzCQQw5QLVRzhK9",
  "key2": "MBdfr9HQLzt1UQy1hSwzRAwTxZBHvrTXnBmhRTKkwL2ytCGxGacWBPZsPBc4u8jiCnuf8Jiox9BWJcqWKDFcKdh",
  "key3": "5S1f1B4eKfGpdFMmuywwc2dSPtRAjMK5beYtWef1mnUMyDj7MtkkPznmqwrVrTbKLraTBHWo7GqorT5JuUgdqQJk",
  "key4": "67W6jFwSYgnSZAEnrnC8zYFc8nLkzPmaqrwm12nmRk3Kc6gbTZvP72shiW1L2RgvQag8oBrDRKCbLCX8rtdVgNHU",
  "key5": "2WY1NVArayfyHTbJue4yA6LvJtZeDD4v2TPcB1vB2aZphTK8WPo6ngBJuWkFrmMKnodGKJNPDjxMf2F9ayvhXPtE",
  "key6": "b9cmEB7yfNeEY8MwcitBeYKn7h426taj45FegVKRzMLYW6MTuHuUAk7SzK9BzhqR3d1AozEFdYVy7uzCcbA33E8",
  "key7": "3ZzuX12CQkP2ryRzCtrfcU2XXwhqCAHWawAhj5F8FoxngwoVUX2CmdeqjbbT6fc5obwF2wg7Q8x9NfFCPopZ1Dyg",
  "key8": "4AAx21NGfpxpg2N8z6b8jNYMw46MYCE8RHrWUNwQBh9GUDpqmVXffXHy3t85j5F7QWhxuxd27iSRjUMfDbPNGVwi",
  "key9": "39hNgn23Vs3KrqUD8mtyqexswARW6uDEgCw9Q4XgDwLA4du8s9qDzSXiaXHwjHkhtSdybVbFBCxw9jx97Sda43EG",
  "key10": "2DuQWef5638CLRuYcDFiWx8mjtGM179U6hoz2fQCYshahu7x9LBCDf1Nfp6u9j5fXNfyhfC6SfTKjCko7PFXcKE3",
  "key11": "2ELCZpBCLNcMrUd6LPm398THMwubpa4DqXeoxk8VjP7aXXDkJPgBhoXFLREi7ejdRfoXRFoTyFNEkta3XGXQGMxM",
  "key12": "ZJw1sn6R1PaCZfKXCow6aAsefSZvob9q8xpHCwi9MgGYsSoWzVjEu4NK57govBdkKfpM4Pyh7RikbhHU98wHQxQ",
  "key13": "2uangVBfiGWWxqFqs151ouaWasnNPD6kajfUfATr6iyH3q35Dg72GbqeiHRiVem46Gu6XKMg5EQ72tK3onyh9KB5",
  "key14": "4yR4s1pnbi2VqY4AHrHmoSeDEMXhG6YpxYkPrrDdA43ZCyDXyJJQT1K9icu1ZKuRW968yACHi6JJWGVLfFS9yTZr",
  "key15": "3deWKRqpq3XsbUmj8gdEQ1xehZCr4NTQyzV3DxijihLdVuA3gduM2d7UPgdL72gj8pdC9cvQBtEgC7dFGp3Ro4XN",
  "key16": "22oyH9czgX2FjGKYDwUJYbWrZBPhZTiUWnHftHKh2GijLfrurDCBNekXmGS4oapM8oxAME48fPPqmaKKLgNHL6dY",
  "key17": "UPuvvzA5ki3SaKJKLsigHrVYDJxu16Y676AarcdRDBHF19PoV74yQEQTPzwd6LFQ73umfsmtXtfLWPhk8doFo9n",
  "key18": "5Y7zRipUo79RKsE8oNVK7CosuL5stTjfiJ3L7LUwHHkQm1dk2QeFjdiF2vGpZ5Dc6FAcvT6WuxgihhSqbvNsSoDb",
  "key19": "56DNUuyL9PJZ4JsQBJyXBqCVuvL3w12qnsHEukfpabe7jtJnBWNGq9u6rEHnSruyvSCKfxCLwarqARDsU73v2SAE",
  "key20": "4Le6f11HtysU6X5vbYnB6rBp7vZkLkTugwh1BgcPFC6zJAremtKDWshh9Tkut6QTfUy41xS3Lkd4sHtQGdYaKxv5",
  "key21": "5EdHZvezX58qQHMHEg2ggWSpbm3iqCEY4Kzz2UWEmpPg6881qam45WdTKxKCDzBdzneYT8yzmn5DZuUyPo8CajYB",
  "key22": "UrQcbfTg3jjoH9CmL4vqjjh84PyFNtFFLR8Pt98yMSxLj6UMcuTHpm41TsVbgQK7qEP64w3p7xLUWPeFVoCo7X4",
  "key23": "33TRyrRwAvP3eVfgTdyMv5gDqgXNP4XNEfU4mGqUvUpmtHrL3Kz299t8dFbKiZshCX5dsaCb6jAZm6991D1eEKNY",
  "key24": "3cQG6aZAZmoFkpDvnA2mDiFwDrSMMMnDQxgQP6mz2dhzCvdcwjJEQsJigaXHLot2b7Q5y7krgf26VxsNnpiLDFg1",
  "key25": "55RCXh1sSxLgUXZJFDUX8rGcEBSrz84QTorxLLiw49MupmjUTrTX5nREVhTZicDY4UWQ3dXs9sZXaEfNWbtkujf5",
  "key26": "5DEkLav6LjfTof1FUbvGvE9vXRSdBj5CVzzoiFWeTxNZJL4mySBWGC4Zdh23ZuzxubAEY1Hx1pwW91qhncVTe4XU",
  "key27": "4kBqfEsWTwzSMG4jXS332zuW1KZGS1iBPP8BAqcnMWkMbg8DJQWR6j63x8KmEXdT36AaNLU7NEHFvZLtQ1PeGiQ2",
  "key28": "5suMn7A6cgvzwfsG7qYiZV95M19BqSCcjmZq4SgMb1QbpJb27YxJVvhsQkwZzHguqAUt9eQ6HfH1DyPAPBQkmeqD",
  "key29": "5iLRhHMGN9P7FckjcVLb1m8x2RxMqdKs97uEcEC3eJ6SPrD35oyxHmuWbJC4Xi4Teb3BfTTkQuM1MjGcAy4J753v",
  "key30": "4A2jXtSNQCSAMgsd9RpDC3XTNRhf39RTv1cNyasXh7BQwCzF3gqPHFdTsQGppTUuBDfek5DMSFVsQs7WVzYjEYg5",
  "key31": "4iT7GPKAPxqpV4uSLZVeDEm7CfJp7YKnnVEMZEZDArtFLijDAmyr4jzj6AKm8xFgeRH48QpGRJUqch29297qT8Pw",
  "key32": "4QLbvLb5pbeYS1Z3dRyAq9aVYRNPTkDzJeRKSy5eWpN82Y8yM92bnwnSkzHRXv4jJvrL6KidcNjkHjfytvASRprX"
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
