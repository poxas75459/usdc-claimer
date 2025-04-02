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
    "ch8aPbUhCa7MRYLr84JWVx5njwWzE4FtmXaQ35LarrcT84FeLYiF43jyx9bvgEzkZnfPm5fYaK7TbkgXWLJV7oi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YGKaiUTBz12uwW58E9dYHj5FeB5GX9hD7K77EdpyZStueS7yiZQFq6MWSr9TA882TMQXKLzAxbWzdvaDThJpjR9",
  "key1": "2UZaqegVK5CuASRg8k4x9cpCkdEP6EeYEXmZC43d2bZiNm2JcFrrgwSKcwDJV8JKYVLhTRpn1xCDaoM7eDr1XFss",
  "key2": "3K732T6h2oi37a1hecW6HQah3GGYntfi7H52ahUkQpdgB2DfH1WtihrGaMxCvpHymitHP8NmZCukiswnYRoUJL97",
  "key3": "4BQzc71cnDFHWoVNMSZUCx6C2XQVRBZiAxQMj2rYpwzbdmaBNLnMiphgkgDfbzwYk7Go4iKsBB5PCf9VfuqHvWWn",
  "key4": "nbgCf5XCbRbijdMZiVgb4eH5t6ZBAErNhZ2rqqNd64rvDqhrxaAMJZ8a3v9fuLsGFHhu5h7FrbsJY5ZsaKPhtjP",
  "key5": "5eJoD1uUEwBcRT533j6cxczxfDB4TR6naTpWehBf8UbdnzMtACwFZSnnk5hXJcLmznk9RQd69MDXCdgB8sTSqB3A",
  "key6": "27gz5V1JFeHL1bQoJ2zHQ536JLefMq8kMxhrcY9qe7HBkQSyhPsRPBdXXHowLFEKYfYfDy69HpKZ688JTFVgeir4",
  "key7": "35CNZVKerEi2buKea4Humn37mXMBprnJmfLyyfPo98Lj9y1ksBWejYBNJukNTeiAhhbc5dfnxFKopBfXXddvpWKd",
  "key8": "pZpcyh9LSqvGTFNT9tMRam8FG82Kv3jk7TP51mVYHbbQisypxa9wfQUGKFNKAoERwNpu8KxNfhCBz9RMZvmYpPN",
  "key9": "5PNUPT5uVx4fUmRf5eKXDZ8ADiQsdBcuP9YL4BRdJVo6q9yQnj6mSGKMgGoZ5ZdiXHixoB2yyW9XFfi3cpQqLULe",
  "key10": "5zDS9ghfze5bi63kSrMXXJnRThTuRrwvKon8s6FN2DdfBmXps8x4ZdA2j8eGbRdbG8xJArCPYFhhP97q54B1PAFi",
  "key11": "2KB9vwfkzB8EGYHYQ8hoX6BoSxTkKtFnaXyV3rDHCXEfQ3eWXt3AaXvQQo8jmRC1BVYtkzaddmJP9tPXvS9eNzm6",
  "key12": "4m4efLBzoFkZdHmmpTMhC7oVCtXLxtiBe7ekGKeDuV9SBJZdH3ahMjpR71odDySM7Ho1ffa2kGrKTvzGbpFHK1Pu",
  "key13": "4furRBXnpkDkB97iipjAs8xwhx2QYUFNBKYPFKKwWpmXbWkHbWUooBZ4NQNDJwfMEgC7vgyBgWTxoBMWoGg2tYdq",
  "key14": "3s2HHacJmmsKnhhjAk9c3HFofVRJT88LhDCq7rGfwNDJArYVMNcXCCYk2wq3ECZCf7Ca3DXzeBkK2EzGYygnMG1x",
  "key15": "4m9rEePpGLVYGnQBfMYdnkABdYk6t932Dn9i3sGt4s5fuRo3f7Xa5CHJDWX18RBfSw5tgDti2q1rxyoCtUYMKhFW",
  "key16": "53yDiZU6oBdamu19zRBH3HjgKrcA3KQtsQXsNyTFcfqKjNNBBmQbiS4hT8NfsHG49fh8jDGzG1QcL6vvnjNdUi8X",
  "key17": "2Daxbiv3Y9xLMe2qKBRSwSJY4UvpNhQr1aR88kBhVv2eRnDG62mZ6XkpJNcNPJo73Y89Cv9Wpyit2HrM7A7ozMho",
  "key18": "21uEyxMBxKZSiwxhwzMyGhrFJnzrHi2GV6s7wxPhTwX969ibb7GdCGVCsMGejX6KrzURMgDqFSACEx2eMuoobnhg",
  "key19": "2wRKUg9tqUxWtN5fPCrNr6X48PzfgbwKTkgKooyE6G1Xqxu5HTYXt7PxvWUrPQYG8k8poQvPe23nQwVTGimiNcRr",
  "key20": "5wArN4rkQgfMDvp7HEUY5k1B3NMNfBJPEsF1vcSJ59izuejbHpqn7SEoiLneDq4pRnWjY4xremgKQEts1dcNDhJW",
  "key21": "4x5DidfVYN47JfLLWR1aRG5HQW8oP1T68E2JiGjMAy7tvJu6W91SJsG6C6xxi7WSAo58WPjZanyLSx1TZgAdSph5",
  "key22": "341QGDC6UnTpa2LffN1TgcXG4BTZdeuXgV8AN6xnj4ixcZmi5kbJWBDL58t1vmt9e6N2kRnELBp7my4EygQ2JqSD",
  "key23": "4nRGwJpgTuRqq2nD18oydxRgHpuKjrku53vJwLafUbH5xThvXme7EB8imsrGteUKcFS6Yzz7EKbYY6rxa9aBHtGv",
  "key24": "4iodVPJAKXsoGnyH7Mzf7fEgfj999z3PedZ8QEAsWEKxcPdtVqwxHC2dcT8ujibhQPDsrBFriJks4JEiMbbF3tJf",
  "key25": "4cFbp39YxuJa5Vs9y1Kq3gAHoEm2NiYzACmK8bfEYCDCncg64Q4ckWBUvVYr7vHQ6rTK3zTZ8qQbagZ9BdrVNyZm",
  "key26": "5GEEY78qCcJCgrxGe84zBBEtaQ7ptQy6hpDcVmYo8zdUT4bH8q8SNifuu9mkM5wtsvtYvLh5nKyQedBFwXmo5DfC",
  "key27": "ERQeh2VoMcJPyT3ZHFvYqfwowCdzXjs8tnnwUs2ZNnVXr2pc3vqyS7AqFxHXQk8vCVwB6Fga9VFxFz3n376jicD",
  "key28": "5DemPXRfrT8wsUGzLGM5U4LfyKDweYHRpWTsCNhWx7BGDAnLgcZztNnXnXmZKMvFqtrvMrmL1qPPTERfeUS5sJnJ",
  "key29": "5VJdJ5kdCtXHEWV8nPJWq7hPDFwLHL8sZaa8EwwNYc5BUDv4u33WfcdpLm4zn7Zi1krmFtjGvoUTTHARZ2DCUjPS",
  "key30": "4B7g1KNgYFnuYi1u4PFzyrwcSDEGzyrrSGwByJLHr95o91JLZcsXEAkL5dzq53TkMgFzjXtFYFdSkNzuLt8TtpLW",
  "key31": "3S5A1d36RrS1xaZQmz3mPE7UYZJKKB2LBSCPXLCMkjovh6iq6s7mAi8YZGhGhKMo6m3HBTZk8igL2LJV7cgVYyJz",
  "key32": "B3tDSSakiko6DXYU7WT4gKz5toCi4kyYX4AywpBByKemd54TD7FUzuY9e3UNXzmpgjRJxtbdZ1j6Jyu6Yb7MDDt",
  "key33": "3EcZG7p4DXAuMVMGJEiMfeBE1rgrjB5Di33TQYF2XbpYi4e9APDEqtm32BkVjySa2guueEWAXPVJLGKVkdXnYxXQ",
  "key34": "2ttz8rx7nEkxZVKzS2RFjWk22dpFjtKaqmSBJwruDDTq9sJGHoT1nVr9K8fZjuwwyBpifzoAoLQsV3kmFhcw7kkr",
  "key35": "1GkXaCUsoDB6GuJnKogjAoewShmy1pZ6Tb8LBTU4RbdkNTS7vuqV8SoSe9CGiR5eAEkqoJ3UELvRHzQajDdyr16",
  "key36": "eFuytAbPtA4yMafkh5hfcuK7Kq3wFfruXwNJAeQb15NNWSY9wmnkKfNxQKkiYGtw1eXsCZu7if3jGgsf6ED5PKs",
  "key37": "3CUX1MziPZDpoXwMV6PSNUYejeruDd7qEYW5jsny6kGo3jBybo4sbyDyRUz8gRgf9TPHNmU6fvXceMJjiLXfEHJD"
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
