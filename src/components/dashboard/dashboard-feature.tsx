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
    "cVegNFpHKoyKyqvDJESx8UhgscTsyBzZZsD66cHHucKWW1AdTYa6Jj4T3DequcgRCwK2XF1LPQy5sdcBJJwQhr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Edk7aPx8HDp5t15k8cjoMtf1UQip7unot6rLBStDTB9L3gBftwfL1E5g71HTRv8f1La1wuQcGweHsZt37TbxmkX",
  "key1": "4qHs3ftWJDQ5SkVNPSBg93zjsv7PZzpfYM4Ud9e3idp83gAn3ZjVLdtqFLdDjkQE1aQyugN7PoNgoFdMVfsS91ip",
  "key2": "5RMZcoGqGmhe5j46wBR3crY2sgLF9K5GK6mbZPdFszPb8nwfSTn8jS6HrFhWPkqvUeHYzuhNXQpbr4vKvhjr9xww",
  "key3": "4ESQJzrtYsk1wAw8YgaUmLsA18Jni141nXgi3bCacnTL84uGJpKD1hdx5kApkPqBV9PhAo2HWGhvHTdXgWH57b9o",
  "key4": "5Sgk9s5JuQLW4a7MzA6AAHQznyupTw1JHwj1eWFqvcjvNL9gLgUMmrJHxsKCatBwDtXLJgJzXW8cDCjkdxSoLqdT",
  "key5": "2cVpfVJ99xjYKrXucfCjA3WJgpHxPYWdbyrzbucwENiV2upoP3Bo3s7EscUED2Tg1xFnZKwSYtgxqSvEUmNB23Z3",
  "key6": "AQVzvM9sqGefhJABw5NATzKahzfW91LUAfuLjqc9DtTE4484ErmTkfC55ssCjJsFcrUVWtJU9CSuNjarsYKNCUp",
  "key7": "6atcyRfHLRV3MmFE1qgs9Q86yv1Zv2mJ1phn7dh5s4ixRraPKRZXTFixmTXP6PtkD7b8gje7EDD7MXDHaz4hiYE",
  "key8": "2EmeY7JaMUoTJHXccwkHCWNBEURuZCjpz7FsVX17cUdx3WeLff26fxN8QGJhXvK2yzuC9uUrg1LrNjTmnE358xDc",
  "key9": "3u81pasc2MnLRxkyduFoiPYLkEjMF2eKqaS1bib85xGxhXwZU4HVd94uCp16TU38VixEDX3RPmHd7QYJ6Ho1mvqn",
  "key10": "4wDufzvdtCtyXd12Cdr17FRD8wiCSdVngm5rz7mEB2uHdw5GDi7jLbMhNeSZEi35mHrTCHwRJmxRjSCNqmqTSbV4",
  "key11": "4LxVc1WZRsBVKH27Uv9S5Wynb7fkyR1ovPfUqYtwYeCZu2pto3YVWsFNW7xmNEYMWDBErN5oSwR8NVscVedWBUkE",
  "key12": "AWxhjjD57DemjNycKaTj5djLSTg5BLEuovRXUtCjGrfT3aYohhYjbhkbowU11AgaAqNPGBvK4knygCWeVH4K6SY",
  "key13": "3sMXr6VeACgUC9brq7mM9VTTZxp9N3DHtACUs8GFYshX7BJjj7cCkGyp7i4dDM3nJHVsc4FmGnBiqKySUH7yNFYW",
  "key14": "3bzCrQNKSD53bLVtDtNcQJLvVBv2482UaL2ixZFVFfiyw6kJNABAhniHWebAhacBvVuUmwJjVgZ7rjU3xFazkrz3",
  "key15": "Ko8AdjDSkRmvvgAM3a7GJdr9SKNA4y6uN6HAGfMiyVj6jeGH1QvjDk8MyXa7BKLVGibJz5GP6K1pnDPrut1xo4w",
  "key16": "3c5oWHvV7byPSDBft3ZavZhYU8NcnWJXPpxtSnmT6rwonJmHG4DXJ1cKa8MBCsBGPTtdbQwa23cap45G7UT3dxGf",
  "key17": "H9Uc4giuVSormcx2gVjdQff56YqRP1vAc2Gi61yok2i1KEMRvfe4FFRciJzjahcEmDn77Z9RVnA9XwXnreqxRg8",
  "key18": "2LqdLUMwXLWbHndYNU4He1KfxYKxi4gNMLKYvsMiCMWP3WmAPcSjZKMQFXLFzQVcQLLUGZDZfrLMvZySanR465oz",
  "key19": "FXsNFomv6wqMjruqQYgyrrJn35unuGFNWYGa5E7BLWWiXhjTdSfNoD21o8xbf3xL5wqb8uhLFQDHQ7djDXEEaSv",
  "key20": "4iEAKW6NYijBo3nYze1CPzoRztVc2AHHXFZ53Fsy32NBZCX4MconPckRADTwbMWTkHXTpfZ4GdLVY1q8fXLjj31s",
  "key21": "teCichewtgatMpJtTxLJSKgHNGRQVNCvTmisjcwNscuX5HZnk8ZA61js2visLZFqxQejQrk65pHWQZNLPReMCrG",
  "key22": "4fSTHMKAePmeC5gGVFnxL2nALmMesFXxT6UEMRvQi1Gtyr2ndfie6QEParQ1yib4qoLczDp4NkUJnRzeFWztjihW",
  "key23": "3nAAUqJM6MKfuoEcDipKUTiRLQVkyKXZ7XfFTAcBUwjnuz4D8dq3y1brXVVjCVCZaZp2jtiC1ie2Jr8d4ZqKea2a",
  "key24": "3Ai9sL97wnV8L2rKHh56YpfLy18mwCfnpoTVh5PgTtRo9sRb2eQLvJnQhYmEzaH7YYwdnmM76MWopjNauyVkMt9s",
  "key25": "3ECABctB7cfTbUFfGy5WoeywMr61qtrv6VTLcxEqpKEf8CiixWzJVTaiBwm9KTPP83LqQpWNRkrsVr3cwsnPokzV",
  "key26": "3rUmz6X6EgBtZhXqVNaJcBh3LfuZ4DPaF6Zesyp1FWm79cL1APuzemf8LC7FBLyDLKcW1d4JuJdpkYVjYZM2BHt9",
  "key27": "3wZF6qmzy89ngjje1wgy3ca6bnh8MzBUTH9D4saBZPUTY3ZAKGjGbUpRqPYNx3UmAfWnYTzGxY1GCiuomcBXoCcq",
  "key28": "3oP26RS2Lp6B7RDrdaFQkGUGkMgxxutuwMvPot8fhQXpfAtkK5oZA6vUmeEeuUUEoSycq56VM9yvtpDhv9XdsZSH",
  "key29": "4CTb9Noe7JoJ4e4UHX1ecqKD7J37hcVNsU13ANYJAiA3vXfUbsicnLu1CEyx4e85FeHT7T37URawKz51AkdoSt3a",
  "key30": "2Z93STy151ZNagQB93tvBwQN7GaeaMTLB9oVtFA6u1xUEPD5Xznn2cxxPvu5sxWt233dFCtcMcZ4k8mKRJdSWS8P",
  "key31": "5UPV54zXFQdU1g5Wxz9pdLugj8Waj2sPrai2zpLnhsag3xwY9sD5LELVZpmmPgrgmpiukMr5BjUwafkcdMUE3ZxY",
  "key32": "44h9TUFP6qXmZtKPeuvTDdwV7jV8aVLdkCLX4bn2tiCoHutgKjUrDxJmnZEHM97A8XHDJr5buoNrSVifjUtbmVus"
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
