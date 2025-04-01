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
    "4uN6jtVzQhyryufMUrcqB5j3GLZmDZxzHAhobWBrN1ecQC37Quu4ntg3PUZHPwx6YQWxyF3TnyzzxXt6ioMLxp51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "481EyQDJEyJQPKVTj5h3zMY9QoKaBY43Yh2riMAHYdhHFJqqGF2sheZdq4ExnjQUbeJjWNhvVyn7BVsuv1mhj8ET",
  "key1": "bb4WPjr6Pz19NepFjHdpen3QppkNyVa1XBdKvJCR7tYBqGhL6XUJkwqBDdnL9uC7ZsAswjyVZhKcSpgryV7jb7i",
  "key2": "5a1vNwp7yYT5c64yU9c7t4e8XvyN9f4A7o3JkJZCN8tV9eKkZfXvwyj17U1uT6X6bKFU4xjZknqN8ur1chzMZq3y",
  "key3": "x3rNXL8U66oJpG2NUR6YJFNRy3tWts6V777SuoaefbyH2VrUfK787jAAxnfMA8ZXJn8QdNmC1kgXMzc71zexUFN",
  "key4": "5Rxq1LH7984LTZZUydyoA5gr4fG3YBWg8bqvaM85Mispo66gBaa2MSP4DoNmp9jTMTGRUqZrK4N6Z1z5AS1p99Cx",
  "key5": "2qB87cyKPiE3goRHmRNyJ16ZJRL1mKoCdgEq8WaBGbXWz1qM9EU9YKKFnGkrhkuC4CrA7E3JNUW6LwzpoXcgPguR",
  "key6": "2t7ZR2rRshmdQRy5Su4j5TKBQfpVmKVJmdbs8LRCE7H8tBgj8PoFwa62RtVCLcBuHHfK32BshA7EmA5GdFKoV7Fv",
  "key7": "3F283oSAHfU8UEkQ8e2TaWM2FBis6ZRsUiLFRqHtv4NTNDajY8PuLDvjN3Ys39K217CnJ94wSXKiKURdYRMWyyUr",
  "key8": "5sx1T9nsZgJzVf7iBpeEuCtTbutiBYiw83YSboZmrgu9kTYDFTGFYAh29hLMYgGk4mdoKtYqHtrdhznoF9seLrW2",
  "key9": "3arDrxLK7XGMLFmymkceRcftQc6j8rd7G9r6hUQG4io6ZN3VTKwvqabrrzzRdQ7oYMVmmjE1PkLXzFSdVZ8r5PVv",
  "key10": "5g3UZVCRpunUnCk6YstN1SxAQHFEMaYiWmJSv8TboiJv5CnmouhQaXDeKUzQy3KnkbozoGsFFNe3rWDvmBwaax76",
  "key11": "4B5Lf5qkrBntbgghys4eJcmT6jR5wb3aHaBdMcaBj4WMrYMWv45v756SFMHrd1FYghzxNGvvzGE76CYs9qPZCayB",
  "key12": "3UsrtQcnZA94TfW4qurVaay1tnns5XZPpEqN69jnVqwG8NFkfpimqwrrbsNmkk6h114mV5FbcdEm5Doux4hcyXP9",
  "key13": "2E2T8K3dAfCMorZmDiBa4bsyrjh3thHBWT35LhAgMhQNtmgWRXMgMCtA3CMXUBFyS1xAhxZe64oBPTxpeUjiYLu2",
  "key14": "5ZigEa9bKhEeDgvR6oiDbDqJtM2wats84v6W1S6q33cqd2VUwLm1vQVi6sBsu3LYYXJhtBhtyKBs5ZiCFfxQYggb",
  "key15": "4hj1FU14eYcSfxw6E7KQ5piaRAPu7jRiJ1utFX7qbprbbJxAE3esmzUkSJ93rvwFUsYdZkkPH1VDDSr2n8gkxmzy",
  "key16": "4j5KDabv5r6YvjPPro3yz8LWye29qDiRro1vGLEZJMSnhCNagkCw5Fph2wzQYtyNQ3jzSk9vi3xQGTcLjTrRXQFF",
  "key17": "2SsYLgdZwDCRXv334GGYzu9GiEFAkJCt6MDy3CA6Eixph8iNt5qMcWPVSKaJB691po9fWNPFSRaqL9svbe6MJ8Xi",
  "key18": "3q2aTjttWwpp3YhMwX956W67YQ1AJh5PhurHUhHHoiBX2PXMU2KVce2mXWnAcFcP39PivmYW5hdNbJarWoP4EuTg",
  "key19": "pDrxZqacXCoBU9njSSQUt6SKYCoZDrjAFUwGADJKwee1HY8PBbfoQDu35N6CTiRKNiBSVM46818HMc8w8d6esVx",
  "key20": "5RFwxStU2EG7Sw3bNiVmFGRBZ2G7hbegZQf6fCALd2hCqvUi51BmvkNjBLp5MZTJMEkJmWPJL4HGhLG8c3wfdeeA",
  "key21": "BBWh4nhXeb4MQGCfkxDkCd75mmXrr3FDRfF1CwGxdGdcFGUt9NB2cDNfVj6nNTHHX1nTBqcnZjpPDtiFgR5BVY6",
  "key22": "3Hp3pcdxav3McZ6MwUHZ1EcqdtP8ZNxv2jU9oREP1v1NyZ6munpPnPkExKxJ6A11phT62QCSSouzRQnkwUbj8j65",
  "key23": "3tLN1iXTzFdQRzqWuEi6Q5vdJzVz9HktXZZXs7r5vR2HvhmthUx8GFXYxd6XKruycUMws3uQZf7byEE6hwUuDzPw",
  "key24": "4Wxx8WJ3H6hTHA14i8tmeTNY1wEk5fq4V49NJzHqUdwvo5QKXV9v7Sydrfr7wbkoD9FpiXxYvV6nXV9f2tVKqHc6",
  "key25": "UD2rf7ZguzrZ55TabMfbyPnuBBwKU6GWKPWtPwNsfA51Lmexjq63st94KswvySfkVZQkun48DkWFRiYqRqMUJ3r",
  "key26": "2gPZGqZfxZRdkEt6cz4cW4Quaf6frULyxj96gpHWFKBXUNBgdhVNbnSkthv1kqX73h8HGvPHBJBVX9XGvfpbRgqY",
  "key27": "5hhesfzyAPs9AHXokPNVgt4MnCAi4fyE9PogRAorhDQkBDZUcGPt7CULf4ewKV6mkbVALGkCUbTckuSUw5jypVfP",
  "key28": "4pF6TYUV6VxieyGcTXY6a1gDVmALAC2R8E7AmTe1LJy36XBAMfH8KSEkHftFL5Z6Gaz8ns2T8tkUQg9P6dE14Vsx",
  "key29": "2iG2vDT39K74MPdXccY1c1CDM1j6EC89cnHo3YzgHA5JwMLpt7zwqVoD1DdiSoroPwGTcnHTbcKcJmVoUVibdx1B",
  "key30": "GJLqdpDp6ZRro5zdgiF2bUEvLVSbBkRSDveDjS2aCA9uzAe99iJLDQjCw1vGdFqt8BfXUGgygPfiSaL9AfFjiCh"
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
