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
    "ndgfWtUBGUW7VvTLcRZXPmYq4cPBuRaCvcChp4UU5sEBGpvxWXL6MeV6DWVyw3z5WWRVfKUyEdyKJgQuTPAhM18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f1fgvg48vgcwVr3hj6TfhzG8AHKF742mj7vCnouS5D9KHNntqWSNQ7kLTQBCAg3Hh2aVJ3CKfgFQQ7nTWrmc2BT",
  "key1": "f1D1JebsAKEUizPftyYQakCL6LqS1xa1qAuMHt8a8DnYRqjEF1BXCnGoDYeTTbm1zrhATP4y5Gg6edyB2V3UbdA",
  "key2": "jLthVHgWUVzZJLUfgZiGeUfMmK2KYMkD5Cu8Exorj5PujTGuXcDXbFxgLeVvCJM6nto6PhfUq9BguE6RDcnaDxG",
  "key3": "aFi1kdWKR2sfWGdhrZf9JZDLKx7bijFnzMfgbCbHKUCNa8yNyf6eArKfYtfi7TgWLNCMqHp4P56cktUe5sirtjq",
  "key4": "64jtKhGxsJHnLP6Z4qYDtz4LVi8BGiqFu2t2HAatpUUEkZ4SyGrBEnjxUsDG4Urt9jewKP321KNUs7PfXzpgQhUq",
  "key5": "4nfzNyGdY8MowHSYiynzwgSCeEVJaSLoygSGKG4Z9hu4vGj3RGxyy1ueCySnHFQ8Xd2w3HjUo2cmMNePmzGYzXtY",
  "key6": "3cynZJMQtmuqSzvs9brfmGWQtseLC9ardUN62ybBQ3oB7nRsELvay6xvY7qnk96SuQJtNwiXFohTbjeQdaXEfrSh",
  "key7": "2WtEqh7xuXV5k4sCnTUWyRvJNnHaeixbPh59VLazEbBqHSpXjZ5EafoVUgoh4ynQ9Em9D6u9r9aotJ7gwkLT1eX9",
  "key8": "SbZtaj5eWY8qj2WPVZefw5XgmvVWY44Ak6ucEMHno6EngvwdEeBqPwXDRgDAZX2TpszXqbNTvySijrMFKbzkHeL",
  "key9": "4VP94PR37iRmK2LtBRAaBg7GNLXQYtibHjvmT38ybws8tULotCsDe3bkzNwZ2qdzqafjyTPURA4FRyRfhHujAu6",
  "key10": "486xNpBzJi325wyBU4PN2dJSDSN9HEVdS38WLkuR16CnCqo3KZTbBNJVHe8dDSWAhjTa3nySBUQ8Lg51QYMzDXrZ",
  "key11": "8eCkW8UbqNWpXNfWPcyQp8J7pmxBweT4HoWohvTBfFDx39tVFiwKfqjbdFc5T8e9TbEEiy1MNji45po71LJ8v5W",
  "key12": "3MHvsyB5oZsCLTUeEoEeVjSxV42reUaqKf1h6uvQ9to5bfPoEiRz5rvdM5pveMzFFYoEYQcFrbVfy7pZqnRevHR6",
  "key13": "2dZfn8jV7PTQ7cra7nLrqZSoFfNPRUo9RRmomdKGhy4dTsDwbNFLEEtYbTHq6UnvhFsdMPPDsPksfxauuCsVQFyN",
  "key14": "3zaPdda9NNkfsUxNnBr1qLtvVYmqtqYgZb73vcHxcj9FRzrrim84h6q3M7WAu7cU4WvdXbbTZFE7WKi1aoJnsdMe",
  "key15": "j1yJyLZZwjA7L9AqkjULCKQwCoAKCrt2okQ7bmEWJiVKierGt4FhUhH4BXx4FYXfPpWrKdzj25wGHHu1hR5qD6s",
  "key16": "WHzN6hDCGBH1FKzwNb7Znr5PBDTLpwjJwcdjjoj3RusYzxjvY4vfftSEigetSoCSt3A1h3m3zrj8RCHPv8Sy3ti",
  "key17": "2FakLKpWEwzm8isREvy3TYBaTubHETC6zqudjkvCkEfRhkETEADTWkJzM28BKRAYoTAYowXCq5CfRGGrXEcnZN1v",
  "key18": "5x8htkEGy88rjSVnjxzmAQUr8XEdk8i4mLFNPURVHXPZKUjvkJfZtogVZHNF8XbZ4KM9LHSCpfLDq3GnX1BsVEb4",
  "key19": "5tuQGftTuF47M5Ea4DMHTB3ECPKdPgbygRfFGBFSGnoWPSD6Em2Caz23T6RdAWa1HZWhsu9y2TGFbWHH9QuwQXf6",
  "key20": "4VLziPA2RH3HY219eVW491xsA1niaC7A1hYxLuxKXQFHnp8utUtZ5WHbVm1zVhyuXT5at8hHvvaSBm5iXBNH4bPN",
  "key21": "4gPj87cwvHYxRHHC9iwwyAzSenmJoob89z4QnFuV4WQRBe6Abg8fP6oq2n4AEGT4ndy9cg63fSBfjr4LtN2Xr6Xs",
  "key22": "2c7Qmkq9oyVuq4YdsdqtRAZtU3K4HvmfH4yjRrc3kM6gUJoRv8EACfQLzM6YCxEbRkxWSdoa8Jmdvcu7cteBwCWz",
  "key23": "44kmGnp4kr79HMUvVc3MmuDePQK7gRH7b6rfvU4zmB3UfjH9hzpb9EZz3iMc2mcmRJttVLmdRi7CuakCGYnsuieH",
  "key24": "7rg4LkmSwzugfgZDZYqL8oVo9EVqZFbgtvDBfnHENPY8mY5oR1ondSxArkVZBy3FbKJbzpJCoeUZMmxTn3vfMEi",
  "key25": "4K2AtRdvFKiGkWhMHJwtvBgP1fQFWJwR6mHsTz9gERw16bxPyJwBXk8mHL4nNCXnnnbURVViqUvXbootkJNz2fVQ",
  "key26": "5pSJPFNQsaJBJsQm1ZDz39Mgs8tQJTu58HfFEdJbsR4CEeWj7vcdYCvMpUgG6eQ3P9rBfh4nDsK7MtbHFbyuxBn9",
  "key27": "5oFDhXhSXUcDToEr1dLhGWKpuG6KZgkN7fGcDfvf8phaWhJEU8FwryNU4jF1nmsvHYJoXaV5fN1MUDvtsH9YpiLQ",
  "key28": "3cYDEvgLSdC3ZJ25prxNUZSiyEX8Ndvyz3a4hzL4Ni54iuyhKJDSujvrSEkBCxDGWJHULC46b8AZGy5UjmuZvu4Z",
  "key29": "2ejSHSPoCK9N5XFoFFNTd7bf7oGmjrxmHj9ZGFuhjNkSKbsiCnDmf3VA3gEGswagCmRvP88hnSoTAWdoVMt17qVn",
  "key30": "5RR3wgJTML3DaoVUmH8CD26zkio8cRoXw6fQfRfUYQSJUgcWfYdZKr87nkdSCTqLKK5Df1NDVGW3ZphaNwJj45oG",
  "key31": "7dBP666yT5Vh5vxJVxDqRmExZ8BZrEjRqEPU3Yazr2m1wHaivKf5YL7ggwuu3WxFiDuZ6GqaALoDbc94PJn7w62",
  "key32": "3B8aSbekkPyb7Ktkbec2VA9PpJqRR2W8cRM3S7SRqzki5r29LedRpA49scm1n6GSc1Y8eduGedQsJcAampTeRRGp",
  "key33": "4MZmc1wUUTzsw7zvhUxS3gYDnPrKFQrhG2KHS2Zs7aM1GNDykftp95Qds2qBEL2gWUmMgkeT3h9GQ3XaERav8PNd",
  "key34": "4i8VErk4nDkcghtBRjRP5VYEcfrPZ6gSzAHfsAvKmzBCzKGjNpiZD2LYMuEDC6UeYTYQv3xm7ZbhaHWWTArDWPbx"
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
