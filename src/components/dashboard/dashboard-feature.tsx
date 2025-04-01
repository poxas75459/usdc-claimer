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
    "31v35mTEVJg637ZSimc6ZFyEJpD1TpxYNfEJdy6xbBQkkA1fvX59GuhTVYBRXp1Uk64dqw89B7NrJnfKWyZrBMzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3skRPt5RCKcyEEkDBHraHnxcVoaia2PUBJK4eTkCueSdsh6GCVRZaGuLbdrPJej3Eymbn5ZX3ya85avkhT7NsF5p",
  "key1": "5p5RWmNKR1pkR9kXzuNn43pDb9ygDXoEHpfAAL4rL26co7AhFL2NVwvrwA9jGZujZXWr5sgaeq5uavURMmyEX9ha",
  "key2": "3hxToRV3MjeZikKVHFcSDQAnWeknDtoaH8c1owabChdC4tRJBKibhJVXji7jKZKwboodWuipBQHJxdoTCaBBpQvH",
  "key3": "54ZPjLV8dkh7TyRGUsyCbS3gLZ6eakYjuRYz6G7D3Jx4rK8MP4TYz6kAB5C4PpB4YT5cs98GScCUrgN8MnQCwpEE",
  "key4": "456gUFuwJrdwUEqNiipSe2RSY6qQ4a7SHZVZrJWrEDnyvzoTx2UXX2Qyf8acKkSGZUW9gqsY3oJpibmLQdWbN8Sx",
  "key5": "51bmK7QfrMnzhuibBjN5DG6dkzLjm1FCbhffriKfMn2jxooozFPaDtYV2YmTKTgPcYWfcE6WCJt69Sy54TQgFR6v",
  "key6": "2v3NjKaDrDwSRCgnySQAta6QTYnWJCpDAj2feyCG8k4rAXbbYcVGDeNCkUrBzDkyzCvQ7enwNggxadn2xjNyFjNM",
  "key7": "2KoMRjz7gTmvS1Hd6yQoYAEuPgWLDrqCMEqcSHMu5B1apr6Z4FWK472pfKLaaDm683bUD77GvhuqLRhCH7ff7UUN",
  "key8": "2JydRRUJfBmSQKwc69AZ64mQp1xG3mapnCUiTfjb9YKJA58jeQD7NcvVb78CpMiEY4V7rBkwryWauKgJ5KCjHPSt",
  "key9": "2AnxACx7mz6YPkb78KinCkfoSFn44qwhAar56R8ETo4PSD3xEPgMstuMkQCWu37dJLjj7Y9RSYEyrE9f5AtN6a3A",
  "key10": "5AXVHtZQ4Yx1y3bpgr1FVENiC1AmTQ2QFHzRQYY4qwfNvu3GTLHjAkSUW1hNgiZhue6azTmE3qrYbmJtYJzRah27",
  "key11": "3cGSAJZYws9WdcRPiJVhes7oYSSuHBVUvHBdDA4JUUSp4mztrmJwmFLzHZEYCbF29WDgM16Ao4aYsZE6fiDHfn6a",
  "key12": "2sAXaTcaZkMvoD2kQLnetqoG8SfayD7s9o4BFViLypn5CRD9REY9eNjmps8yjsxUNmmR9tA1Pvxim2xv24n8Qxij",
  "key13": "3NdefkcSCqDYWBSQxmfCx2gXXDuKqGKYzCu1KqSc1N4xRQTzt27Ezbe1dQZN2ZiutZGDpuXWnHzLyYVriB2aW63V",
  "key14": "2vQh4erQMBFTqkc8RxVW4HdYtwmsWSYTdFzbj88jp2W9wntouK2T9Zz6AKUZp4mU1LU7Cttv9sAR4NNmxchanasK",
  "key15": "3F1FMMS9TN3H4prsxjXUWaix2KazskwJ6bgYuGnG4qcT2PnoADGy2EZaKKny2SLeZDXVYkFsiEzTdwh9xTVoZdf4",
  "key16": "37xHD1aCWUPPeCwH3bQWKSKtRf3jR3XQSnEenocmP4QWDTyBgUSsyp73ViwBoEtuVgdWnazbtXPecyEhk19Q31hc",
  "key17": "1MMdHBC2HVhVXtwfwiuQjhusdxJMy7apxDmBJ9hso4JeNPz7ipeGougqHCUiSukdE3b6SF8ocE7FajKasCbnuZn",
  "key18": "5W8FMs6TFCMtA5cmYXm6t5rsBde5NnHPkA7GhkE2SqyrUKiV9PiRqJbjWNsUfNFH8F8AQ9PuT8V7mYHzu4enBxEp",
  "key19": "2azdFBaESrjrLyMQEAvWTjE3tFfXWuiWEkvuqftUeEfNQaNjf339d8vgxfjXuf3qZUm6QA3eVUUxmGjxAaCYk7N2",
  "key20": "2ifBjonqTExryY2tn9dkDVHrnVd8VBzd886Bsiqk239nyaSwN1uXFjCWhVjPA6ScyEQKyahzZqst6WXFpAeS6oBY",
  "key21": "4bU2QW36E7uPsdUHiTUmc8LVrm1uWo1sfkkRr3dnNYu6a4AXHNSnUyVXS4T1GGBJbcD1NfMHmWpVZqiYmsB6bkfn",
  "key22": "63VKWHUrkP9bgPXYm7nj1GXxUDEKoXMybdoTZZYTcciiQR8975CMHQkz9pfnmjwqyabRr2Wq4kmSeYhxvvgNXHFU",
  "key23": "cMLKwvzJj1Thf6rnJTGFHTqpNvvd5FxCxMw4HHAdowEtzDt26oUXsLrMFSDko5x6PgwmTFxVTLLr7BPZTDBgwb1",
  "key24": "3GiS5ZXKyQdkMjgnq3v5bGBF6Gmc6rHBNBy6aHMUy95itPacqzFHrkwFsNNsWyb2tRnL7Usjy5hpFsGpiWc2ep76",
  "key25": "64icKqoikxjvqTp3XeusTWW8WLxLJuDpSVasSiSgGkVcKB31kJ3R4nMmYc6xafkKjfgiFpLix5jq86dy1DkNoh4W",
  "key26": "3j4GwLhut193NC44cJtb31FkRVSJapTEfpdtrVUzZ2as48FVxLNhrM8FhBkrwVhj2LSp9GjNhrNQyZN2ThAq8zMx",
  "key27": "2ahrNBWysojxKLc2s5G77pDomMC7tzN8KxE3cDmCqMWYA6CcJ6roeTJQnxuq1bPk86tpPVHRSsXuvG1S52qZ1k1z",
  "key28": "5YztnDXDMyNwcxVEDx5TKsp16rZbgDyf7L4otgCGkjEHK1DoHBYZFLGQcyQoW9zninzZ5wtw7CXnueUvx3MGk6Q",
  "key29": "3oeF7DqKvjHWwAm5EpXXrRGTjm5cLeHA2rVx6Xc5oqokcLLPinzG4uadpUP7rf2ck7sgmaB27Nf1E2NJfNsNUZc4",
  "key30": "tFWfeMK5QTF7Hnqs6KYxHDZkX1mMt2h7LvhJgTjDkU6U3vv5u4UyVefkGgjLzFQgXbEhD1dUDJhA1CKG9Aicrcq",
  "key31": "qZUuFbxXeVEx6vuscSaGjp638rfv4MeUYrYiR1fd2NtuvCMdWE34HrZTdUe7Xjnr6q1TQW21bFgbGbapDBuA6wr",
  "key32": "2t9PD5uMnZA3iKNZikyFgKvXDex9xkVvepMQVoT34HnLEwq7ju2TZ1FFr3CFVy1ioZaGzAESepa8kZJ8LSS2HApT",
  "key33": "5MWrae1xLjoEehXXRR9QEhDHKcgCBPPpgvqQ3LZUF4XASPyBT6QYTbK5w5ohj7z8BjYiy9hfu2VxFMxkiaA79Wuu",
  "key34": "3qnCmmwWpBzXFeFSoL2dYQMF1gBjz2ikjbUkgMkfCybM7qvUJrKSwCF94VAsTSzx6fErntbd7t4DBZjcVMX4bRFs",
  "key35": "2HQzmoqisg6TnXRkqn113K5KWW8d6jV6NWSZ2WJFjqmt1RqV2WCr7xFtvSwd3EVMxF7FWYcsKv9TRHAg1rybcEwP"
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
