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
    "5RKZSagyiae8DQZbpMmhMbRWCc8QxTgxU7VLu7gw3ifriRybPfw12fMm9z5zLEs2UHC96Ju8jFdTx9MLA9ySRPan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NzsMsKBe9nY9Kmcqa2Kav2NMkDRj5YUcMH8K2Nvxw4LFBrcJbJBEukZiuPD5t1tMS85MhK83SZwr7NSRZPPVmc7",
  "key1": "4A8izHC7cgH85JPLfp2RqNAZSuoNaXY7MSZMZuqQp5WcCz8JpUH5YEuP1yUTqBSZUVYh4RUqoYfX4xRyBzzAnkKV",
  "key2": "56QGNE9fdyJVH2ktqg8mXM9ZQiLBAFkyXt6yjBZHTVGLkvjxmuNKacCBvKM8ZKsjRMbVXFPMK7okPrbEy55t2HyZ",
  "key3": "oBw4RJYnuQjHRLcYevtr9VagAAApfqXGtcD5ag3JoP57z7m3o4Eve2J9JF7eyVMn9iZ5gCyy3V1sBv3sWV5Kb1n",
  "key4": "43QBA4YYfA3AThRA3ky11ksRB3W2XG1svfCcRpqnpqmVzvaa24DjfQyEy1Q5qLdKbokWzXf6YZ31C6DvZvJby9mJ",
  "key5": "2D7zwsD8fnFHbLromLiLi7fgVyCH8b43VLKNSAiqbHRVUKTU7UBPbm7jfp9RYokdnsAERx31BcfJHtFmC6FZfmvg",
  "key6": "4pLaCNKA856pMB35Dya4t6BfmQWiSxGyt9FZTZJbSYMyC6CPb5phMke86TqtNiFxYL3LRMaKPW3xRYewBGoXBmdt",
  "key7": "4rtUxafug3L3tkk6SeQE7shAXBQ2iQjJ4wRVk7Fz3EozCzeitQZznvrDraJfKF3UaYq6FFvJce6PDoDHPbXTi2ue",
  "key8": "4wVnh9sFSV68mFJcm5uDfXucbH21KqRwWhEPymA1oonEzmAnUkHS61zNj6WoDzGkdbnLjipp469U7TfA8XPP657K",
  "key9": "453ED9g7HKyz5yvg7zYeMxom5PVxxhbRHdKJBVTX77rE16dQ8xQfhyJKa4Pvrm71z7LjGaDbwFvEe7Q8rsoH6JpU",
  "key10": "3iYTFc8BHRBh42iE5AmfYpv6N2jWL8QVFSkTSzc7FBxiDbY8Jr5MrkenDaGt6obQDt92b25eBLGfDTGzaeQgJuZD",
  "key11": "5LCfQvjKFcYvdxZfUKGMYxems1mpq1xn3JUgM6ccqt18G9zesMEWguULUSmRrv5ZNbui1H5S5dp8d5q5LvnucgyD",
  "key12": "EdVH6k3CHYv79UXmVMvJCgGArR4UjA16AqDgBWcmufZDYgz9XriGjpjiuJvAx4tRmxc9UP22kaoF2FYiqKFS9No",
  "key13": "2JPLU7oKtQrz4mmtkvXhp8ginxpZbpkZ2bQuBhBc4T2QWQVyDL66t39gKv4ruUrAJRawQfKv1CGmCtvW743rQhmS",
  "key14": "5aobdRk2VumNVe2coGET9YFyqb6EDeN3PS3fRhhuWMWizBo3L6CVrKeuLGtQekx3FXUiyremYw5EuUpS7vSPb6Ti",
  "key15": "RdzT731JenHSRrYrxU9GmVzPzM8RD3CJJYeTbbi5acbobDv7cxcYwFdf8THtWFSiWB2Q4idFJ6YqXLHKcRjfC2B",
  "key16": "5igBuJYZPxTwrP9Z8U3wmMssgYWJL6hSLykM5iDEuvGjWn9PvnHKab2b7xtxLTxT35v3xNEGUWYDhSvHj26Yzu7d",
  "key17": "cPt7EoAmvefubXBuigZkEzwzQ2EhvJLXJAufXdMzDfsz3nSHPLj8Rzgc3KHfNmK3DBeoEcNwPUz7WfW1sMDn3Jr",
  "key18": "5uQud66uqPidB2srjEfnvQRsmgyZtjgLJgtHFqmNv5NskCtUupgLnDC8T3WFsAXpGH5rPiR95PHrLwyobH58NisD",
  "key19": "5WZXqKUB7awCYnbHcvZzEC9chuRNgSCw2RvZiM7b4GT3F213GmChEmPY8BodaSJAhebHQTM62vEFitpSWn1syFpo",
  "key20": "22hMmhw9UjiHvxPFDjPYmmj8MajydiRkABDbq1NbcQf7H6eD1Fyc9f4goAjurXDB95paaNKE8Q2YG4fFW2FbWFq3",
  "key21": "PfksPefm1yL66mf9Bk4H24Yodvv4ZXLhn3W4U149b7Uvh8X1xuxPNjjCwpmm9r6VGN2vkZorCx7QhonreMBEXNk",
  "key22": "2zZG4Mw93dcifPZUmg8H2bXfHAS5B65FtAevEGqg7QfY8EKsvVg6tRX4mGp3Gdprk2uUtyos5gwywVA8zwXk5Tpt",
  "key23": "4mWNZWQY9bR1BynAJ6VN1betjyX4k3ASxMi41PJT3uLiHvfdegA6RS3VS6PiidH939XNms6fzgSmVpgo3pAemGbT",
  "key24": "nTbANCf4N3HABkAvADhitSj4S9mBhWiH44vfU684RerrAYL6LtxjCnPQQaBPjXgb8g7QsYmFi8BFkDK5xht6zam",
  "key25": "2uyUNeFmukKgPiEBAHazJpELcZq1PCWXzzw6NCxdJSZ7tNkqq3d5h2itcNJ2C2xxb4hrLdVNcQ4Mo7dCVBpH5FdK",
  "key26": "56XZgdBMhpgsxMNe9ha4f6Vv7yDfDvTR3PFPjxX7ngW5YSnK2XNzGVuJmA8d3PZn6sJrvNHbLNkS3uYethk7PfYs",
  "key27": "2nECh7ZsfmELMTP5vW253T2YME1BkLnAnUVHFwFcrBMhsXVQ2QaGh8pSdXphiJxnrN5JyMBMSjV8kQ19JYRWncjF",
  "key28": "49sBCVyqXUV4p8K6QGD3w9EbiVjcLzBX3THGW6Z1o4xeZiXZMfjDQJxZG51HQyhGUNJGS5peAinXtetjaKg1js6t"
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
