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
    "eZoFtno6mukeNbcZUDUk8GX9S8E1b2r96P3Qu9Mkgd3vUkEcH8YEfviUUaBSn4xJh8yYVKP6ftX9TS1KJyHgmTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ocUsN9xr97wYvLGWVhqubs3bLEBiEQXYs8agKdvGVLcAc6BHjN9had5wh4uooGUdu2rp2YvPLzX7qNvWC5hL5Ea",
  "key1": "3FU5LaaHiQ92DZrxmGrhveVpriBtgy9mdXAM9YkAR82EfH9QepptKhaZnicmJYz9QM5k259u4pHFKbagdMWZBhze",
  "key2": "4zVrGGM18G7wQwrce77Zc7K1URTDmcvzE3aYMqXZEnJWngSGuxpUQEADEuG1nr3KmMqrWbssz8unCciRmGwu9Cea",
  "key3": "2xmhAKmkxJSTHGdoQHDFzdQqHm84Qbe8YQ9ZVEa1caopGtmGnPSECMGSePPZYVFGbSmczGiieQxDnTrH9H5AfcJ5",
  "key4": "3ZcUvqF26ekjmP3Prb98Ddw8ZZ5jQG527AjcnEiaMC9X9qnrZg4AgZd8cKUm1aFkqJsgGBzkZU8CZurbypBwHS2v",
  "key5": "62BVsTyKEW7SLgV8n6rhAm8L8ENpeucYVNqCDZmNm6ycohgje8dM1DHdyBuaRxEA4hBQhuGdvCfsEL2Uaq1d5je1",
  "key6": "GfxiVQuSRHgudayLqxszBXkhUyDKCN497eq8y5yV5YZwFKirLp8vCSVYrEJzKMkSBYjX6f24HCF4VUa39Th47PB",
  "key7": "4scgrmzczFgGkUzTf5dKLT9q8DpJvo9thWEepGwYLpXv4LJ8bRzK3Nq1ZKu5LwriKGqZ99UUYruAMekwx9y1RurX",
  "key8": "2fHJgEmP5BdFtb4CzLfmbuCX4HmZzZbqpzz9dEKFstrKNd9FJF1HxuSxuAfH8MbFR47jgXeZCREgAFM6CqiuqeVC",
  "key9": "2Vc1DFFGmUqo41zG9MuPvpDXQsDAQGevnfNq6xN7cYra9gb4Ed893t2oCMNVZduC281Hz39KfAHXnc9FoavXE8TX",
  "key10": "5wRseZXK1KDTdnbeE9egjEEmjGHwuWSkwXb3Bj7wSsqN6GwVUEAZo7apuyJm4oHPjkjXjNQaWt2LFq8xNm318Se1",
  "key11": "5Ex9mZMbMz7eRd9n6jvDQYwZ3bzw6pCVsZBTiVZgp3BPngVWUmKkbjTYXjtudK3oeCUr6VzddujyGqY3ssXcE4qJ",
  "key12": "5o3JyQcA8aGeHsZr3hacKkUVF4dm42QVUzKoUCo2dhYHE241wVS7225WdqanDUQsR9Y2UWG6bN8DGh8pwHJwzjj9",
  "key13": "6btuEXrsRviuDzM985NFtqrJds41vXaoXBUMzZP1zChJjh4EnFSdXwsNH1fpwLfpQthZbv7PyRqwv7vVR8644B9",
  "key14": "2nLKTQB7WshKDdxcrV3q6VykB5zGWLSgS1s9xndMUg8hJSZdMH4Peky7qiAYaM5cSwSNQnRevRyeDXeYspASpDxC",
  "key15": "3uBUPsFiPG65QtUQ3nyc9kMC6ZHNKJxAXwDXUhvbP3e1KwdxyT6Gf45W9htfDNEhV4uBFxa7N5pN8sQJWuQsN71Z",
  "key16": "2xFpxwN9B91sY8ixVu7WttfwN3wri3reWouueF1ArQYS52ZPNZytMCVNhvCwmmSnetjPcKRGat3rnYDuWtvZneRT",
  "key17": "413D8ohvSCuWUXtdtWq5oVccBB34zNqeJsiYqfa4bu5Duu4whufYvbfztzkbTBASjHrPA4Mmxxkz3gRFH2e3vKc1",
  "key18": "22XL3rchPZqP9t3hSyajTvgeyv7kDsJHKi7thVdgFqhSfLG8o2THF61FCHbUaNfzf7qA8L6nRv2by9YJTczqWzDS",
  "key19": "3jq69NkdFDBfqX7eK85c4kGjWZD9bWqdxC5xbSFxDqewGNc23DftZfES1X4fgHgFQofPafvrWCtzH7BCVbFuZkAg",
  "key20": "71rHFqXEyAc2Mqfw7RwU9aP4S84P9YEkUNHSY8AaSwJT9vTmVEfnNE8J7RR6KQSb3Kp6sg23eJ7R6gcu8qHc2it",
  "key21": "64PXPn6CKbjWb2r7PTyPdSLs2wt9dTBcGHqvNPtBUAiJXFyrj7nKvM1iEaD2m8G2PZpSSBbX7N2CDXfRqDS5c9gz",
  "key22": "V4B699Zymtb7dPZPR3tQZQxPr7QEXsK9vy39Dqi6UcCCoKC8J2FeSVRBpG45mHzWw7HgbZDViqF7LNWys1MrrQf",
  "key23": "5pTeqfxVceg9XgSVMnWA11U61tdufdckcF4kpRgwVrE7wWubFp18RagszvhAvHAH59MTCAeSyaVQgG8v4o5NwHND",
  "key24": "3ck71AEwVM51gkhgTCc1iEM3GKyTa4pPM5sDJaPXYe3pN1LGMvv1P7YfdLrKmTnfVvFQ2Wg39aF1KTKwX2WU23Zx",
  "key25": "3WjP6AG3PaQM96VBi8rEARA7zCscP5KS1XtZguN9QxNr6P3ZdfPt4a1j7tbwDiuc2akbLWTYxnp8KtU33rukxEW5",
  "key26": "5GBqAZzVrXhXA27ZteTty35CZ4wwyCu7P4XkQLsGeFoKGFdXDeqSHw4eTvymwbT1FxaKr5vZNFDctmDY78osqKFx",
  "key27": "2GPrh2tAKKF5mhDDj2Mek4GaNPde9hvNMHgTs1EzSHbZTBNxyk5qAqccyJa1mRhszSnhSEP138pt9T27fYHJtaZU",
  "key28": "x8GoHJ3FqgnevQtYh5aqDAx5DJH6mXyBFb14NAWkmTAd6bh2D4z98cvVLwgXNPALtVqBnMaMBA5CxpuAWBgSUhW",
  "key29": "H6D9UD7FHLhAhFTeCCWwi4qGEwoL7yP9sjV4WEoaKuTfTACBQP7txrouHYTkURhnAdMPgEx4RyPaQydPBX2w6H1"
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
