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
    "4fsCG2wYQ5JUyfxicMhrUERSksmeSD6oHReEL4DGLZ5V15g1GsNsaFMpyBV9ybpscFMocXBKSYowmdPsTtmZLMPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h9tuPRtbxJrtSTr78UkxQnCPPjr2WjpP6U35jx5PeNDA9ttP9Z54keY2Q4aeFxSPRktudzLXbA81NmLLKqVBAeM",
  "key1": "3QceFmpsw5Ld38GU3zwUpUhqjq2S68XXxST6KK8Ap66fTpC6Y4pvAM2rRk29iNk2tLFEMEabwnNgZKTgSPhLtwdW",
  "key2": "5iWQdhJxYJbsNtAYktAVaRarvoPiGAzWKxn46gERjXPyxdKEWLwn8RN84bNbDqrK4wuBuR3jn9UGPZUd1BVrN9ZP",
  "key3": "23C2W3dE4pXEU8AAjqCbyW7q1VoWCngw3o4tKpoetavaHWqRr9YvuyTHWfcV81zm2cb3nvFK7LbSTridwZdCCQ1o",
  "key4": "5rFJuAGqNfz6v4qvW5ybHAJYroK55teFwSkoNdYzZ4WPxicDCeTG7PDAhE8QiUDiWn1eSa4zGxArBmcuQw52cao3",
  "key5": "4L3QeitioxPSBCRT3qhVZx8kHh7EoMDGVk6Z7CewN2VpJjuT3p3Q2FzSYms2UbZgzMpjbMtB1JwGqxVZE2kkB7wb",
  "key6": "4EFsv8Hno7AYg888CMZzhLCwZvFcb2pqZRj94rxLvTUSd3e8bDU2nAdaQYuaRSekdSoQuAsiVMxvMzqPwzmCq2BR",
  "key7": "5shgaJx5eCek8VVLKU1iAkzYwgjMwKiCLaWidyWWhcCUvMKoCwC7fNQ95Jf66dvyzQQRV2ZP14NpRgGqHH5axvju",
  "key8": "4YRYW2a4Civ7zbQTm8gZ5oCfnWq1yzMRpHkDCi3u4rYng2dZmT2uRhFXDbYmhYPsVqVpjRBXQHmr7hriAVs1dkcV",
  "key9": "4yp4PJxSyRDrnftfPcQbSRnS1sj8suxFqX7FEu4EurKnQJjec6kYQ6Fj3b6xJSWhV3HzyepijoSPZcG5WnMqkxFL",
  "key10": "4xZrLwLPhLhrDnN5GoSJxCXZbqGL6NnwxzHLZSdz6DSyvXka6Zv2eQaebDLDzoX3RY9CRSjdKSyF1P4Nt8QgigLd",
  "key11": "3QQij4GAMqqCq6RjDk3f4CfsSaTDFkXzxrSFb5bSXFXcdgpwgv52c7f9Gv6UTnXhYxbkMYTbwwstoUTiG3rLe7yq",
  "key12": "4xRi9tNtRdCgw32cAhSQ67MSfoGNAs4tjwAE9TsUenJ6WQ8vvdQzV3EaSjdfKDExxLEgeRJtUojbxaHRo4G7FuuL",
  "key13": "2nGByoHsCs8qRkwtnQhPYTHeJ4xGqe5eyRY5UFLdyVfNdtVuAz27RriyHr5WaMvu3Tze22PKyMedHfvvv3kjBsnZ",
  "key14": "3BjoGwL5FLBHdR5eaGKEmBaYbbhRLiPKz8VTT5qqugEzzfn8RMfdPLfsLezG5kJKPsyWUgKYMusQbbatf1GfbW2d",
  "key15": "PVtY21fLgbapPmYXffXbLLd39dv6RsMh3WeL2f1hthL4sxskZTWZdQ9mPy6zmPLmqBtD3SoEagMqBQXB8vJkHDe",
  "key16": "4BzRpPojFYHFXxKwWKatrJZ1u8X8ChCWWAbxG1DnHRhsLetdemSXQr9iSc36bwkPCW7yUPCXyaPAihffkfz6egb1",
  "key17": "5mMTcQwCas6WQnSRC5MvrAXFUqWKkn7xxbc1LDTiEbnXdryknKz8Y4tz3DdRP1NYjVaAT7tA74YVuoMx7im1A98m",
  "key18": "5tiRFoUV1NuhZ7jS9S82HBXLgSaggwySKmUgLL1kJArS7DaKaHDHdGCwfHXm2i422E47oHN27VLoefPuYSmDkM2c",
  "key19": "2oFafyXPZqmWJRimoa6uMG8ef1ddV1mPPZLTqQouvAUbesVXKyaUh5GPuXoBQok9irx8BQbHMYQCTBwVvYwYCr5P",
  "key20": "21uBq91n3wAP27tBSMMpBZq8ARbev9m9ZFQ2R8bETbVpvCqZhDQcWwMpEqCYT88tKk4u15f59KKDBZHNSVuJ3XdQ",
  "key21": "BGD5sUhSfkLmoZKnuvfqW9Gye7wZZcTY1WL4E2yyHkqAYrCG91Vbp5M4H17LAPuMjV4MDAN6qdoPPY17niwF3J3",
  "key22": "4N1DC9kfgoDr2K42GiHsr8CyqMfR6wNpXM3nopzC3hxS6krZGBL1VQ2UxdRhFL97RUxGyh7mLF3PdPGjrQ6hSXKz",
  "key23": "4e4GPwQJGsRSgvJHhSUHWGr5hawSEpvtB7kVGqxrLe4i4efR8Lb6akXaAPSPEgNBt4N5te96zZkdFPoS8PvyGBF1",
  "key24": "5DYQNcQ95EsyQGD9uEiS1WLDvAjhSmVJJymwvR7Z3id1f9zeUEcdpNCJXSHtPpeRjiwwGRr5bpogqmXbqbzDScTk",
  "key25": "23xdG7vZWthDXaX5kW8bk3XJjz2n2Srtzhr7ToaujVpRph9sHYCqC9xGQaQEhadHBxdY3KRKFaStw33hqQuwrnpv",
  "key26": "5efjUrAC8fHbHkj5XRZ8Cbgboxf2uQuxz8kfdxsfysFVvwcJAphs6863Vv5S6JSH1zTXNiV1qVFcmDfD5QQb6P7P",
  "key27": "5k99bjGn5kyTNywU96VUKGuukeAurTYm2LfSik4pghoanbqc6JAct5JzFtXYBHJxSzCZXmXBjvjuAoJLVHGDft38",
  "key28": "3LtSGiXJdHbFRvydfegGkhbaPDoSKPjyQzkYNWEXA1ZZuRJgvwe64s6gYNX6tSo5do6zY8eiG65MY7ay15vugnbi",
  "key29": "5F14hrLvokcs8nHpuNY4bdrJvwYJYVPRQCD5hVj6CN4BfGwuMxKBreEQMCZmY7Lx6miubnpsgRjqmxZZ7DsMHzz6",
  "key30": "5rnd2FZ9d1668KNvXjwrax1UKYnqXfLYBfYoLRkm5gAwaFf6gnko92pAxThzUNxppRGGpx8uhDFS7oLY5n39KNSW"
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
