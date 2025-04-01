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
    "3cjVs73TKMVxUPUT3B2grmLSrJhXauh3mUYnZUieqfPmEgHi1ZKoV8TjYhU2ccC67j2NLfKBi8QkVHSCaLmDcFsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rFoV5Vwr2oSczFpK8g3Tkq24NEpgayGUJbibHHAFDMWu6WzAS4M5g754LKwGFTYNCGhufCMhd8G71FTpCV8DCaD",
  "key1": "qSoUAvv6FgSFroUPKhq3B9uDHW6bSV8HsShKogxuNn4TeopfLZ1423VMQzh6wNeywCGKYpr7BLfEaNaeWejExPH",
  "key2": "4Z72Yx7HdBnzuj1eiCrSPEYvoUTYbj6jkFRuvjmTQqeYXJrZZ663EEhUYWJ5muVLzLTDUwVdkEzh1bYPcx2eHFkG",
  "key3": "2uXEM3q4CAs9ZnixDK3SoXwTqgZc9V3E32T1j7sxVoQiW16HdXmauF9kbfpbdPUAp8dyXb5GK6CFAGJC4ESddPgS",
  "key4": "5Yim5DoUe649ioEfuDFbPBEAhzxM4md6DiLP2KsBdpFAAycH2zuQ37GPsgxWT3ENs7bgGD5Q4Aw34932ky2WQePZ",
  "key5": "AAGD1bakSK64PFWmRMFn49RoEsjBL7xgYgr87EzccV6oXR7Zo3Kqj8eH2QkRdtT8ttrWUVWCAjkpZF9UCgyKa36",
  "key6": "3wikfMQiAXbaGjGZTKdECyUhsXc4ATfnJLezyKvwkB88KzBAn9Qqp6fRasPEhRi83PX2NcdsYhRyyKNhzUZhxkkb",
  "key7": "4zkLymmrYP3NZziEyNZKh1oZBT9YDk23rWZ3EQyMvpwMaR7NJ85MESyB3gTNnPJ1wSfJF4u5r9Kj9stvV6E7YFoy",
  "key8": "3AEQkc3BnfNqUCm78gSch4uAUifWPsNGnuJges2Dcik3UKfH6EuoWawTvaRQwsJ3fKSz1Hd2uhTFbYh3GEtcTrvV",
  "key9": "25gePQQbCHmPVgK2WJWpPPveq3k3mXUWehPFoo99XwEGuMZAn2FRs8jScUiYTujoFjJxvPBm4wihmg8ZkJJbazXe",
  "key10": "3jrydCFi4yx6Ln8PXUELMBj2a2AgqWWSK1nJctDLzLZfXwqTmWqfBT5bY4VUL4bLAu5fgtV1JorKEM9fbHZf7rFp",
  "key11": "fdPepZ2E8BpTgGvjN2GreCFLaC26b3aeuZtK8dCTK9oTiLDzmgsUHEn1VwCt2S9rAQdG6Q8a2gUc9zwycDKpBTV",
  "key12": "41363mn8DNoNJcZbDpgB31vwYnk3QvznLX6MCJ1F3XxFoPU6attj1Pv7MX9vFiX664zNoNiKdqpdUKAbwuKQSsZg",
  "key13": "TjaE5VeUmjss83p6z9du2hQXc2CCzodazicw3mmzPufgsThGor8u2EY7QMtcQQRK12ZLQ5PXjEp5vEw1irACAzW",
  "key14": "2TKvwytjAZ9n8K9M3NXNUtLmRbJYuErH7eAhqwtaYrrKH2n2prwTg5GSA71pDR2wS7nx665QJ7mff7M72Zw1noXg",
  "key15": "ydF7EtCEagcAzsftZX8GgBJQ7hdbGyKtvr9c1Jx4j1xfinEgQyiL93XCa3hpTLsGhr5TTR6XT5A4ZYZLAzLFWRA",
  "key16": "3wA46D6so3nEnuByszwAr9e6iwXFivBMg53UzmKhCyiYgDmYk8gVPsdn7DKBNs688Jy4ucjT2mRqUWXCxJgCqtUh",
  "key17": "HUKH4zebgJWYUxW5Rc4MZMtSNQqqUSWxQxFAY3HB2rfjPxqFu79LQhq48LCVPhwhZd1g6wRmVv4MLUqVNvwnTBH",
  "key18": "4h1MyVh1HnSqAzT3uzpkRKor1hQhCjTKw15woTohJV4uakFMejGzrQwGfpcHpJj1g5YZDXWwZajkaMumJgEBvH4w",
  "key19": "2SMzR6zYhg1orPjZEb1gBDAaXoFSd2WCEHAAm6asSXGg5vvpBG3jpFmtLHd1BZ3MYr3mQEqKdwDKBKz9q17fJ6jA",
  "key20": "4WyjTnotp72G8YY2rzALQWKP4h6aN1mT5j2P6EVaDDpRRMKgEUjKLc53KvuY55bfk8XUpE3vM2jN2aUmj5GDAHCD",
  "key21": "3riHK8B7PjGeudVpGo2nPR9eVLaWuqogsnUvU8MWhwLJVMp4ATdzCpDGsc1xJxWRTncM8euSW1xUvdqJvwHShKbu",
  "key22": "oQumrrbCbgw2rnQo6PTsrfcVs1ySfrbqTG9cxJbWmuis1nWiBh4AnNj7EaPZuRApfxQyqznrPXNAYa23pfGvWvS",
  "key23": "e6RSYz983Ae1cGvEE4qMpXTHR22334R8CyKdTviQJusYxmFUNB2SNUSvEUt9sedoYYVXFLhF5zG6p3heE1twFVr",
  "key24": "2XuX8mHomjCiTSmfdGqV4aE7RvV5cVjgC2SwT9Qp7AzdW5JX9iCLEjtbJ48SZeBbipYKx8askeG2kmvHMYPrBeae",
  "key25": "5YHf4xPhJ5GnUAnyGc1eXTDfsLLEGfgkK4kg6KuGYEc3ZMLH165N3LozqYJjfBTKoHnT5aAGU3ND5Laxx2FSZD1"
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
