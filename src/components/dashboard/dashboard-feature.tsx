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
    "5qNow4CHeywYiV6BNBSUixJDUFyVLyAzEQmKAFLiNNUUBTg5fCWajzHRbHeVSaMcMZrMCdrppZeDyXPEZo9mtqse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aJgHqnh2afhYfFWApawVat8Np6sFwYnmmrheMUusP4wpCTcgG2DNAG36qvHFGfm7hadCzaG437uHxwtu7TXoug8",
  "key1": "52kbx5wDbzZgxjocsjAWvr8N8eqzWCE4XngyreV4yorU34hv5fqRyjGq9bsawp6ohiAMzFHVRxmv5rG1CLJpswjA",
  "key2": "3XVSApfUmaus8oQMbYT337sEPUM7v3Lqs9hGsPTuinZ4cPB3axmEeGWLFSL68UoqZdGyLSjDnGxN9x2aHA3h7H2x",
  "key3": "4zpPgiRtjkuK8wF7boCCpadvn4Rn81Hbr4hGmz7uMAoNsCnNJG7kdM9yupe5k7mArmCfU3dwp2xfHB9NW8JKM2zE",
  "key4": "5otK5zebtLJqWxH8wbHQzYrNVSV39ou74FsKyAFZMz7LbPT9PdDpLbEDvRjoSt8RuLP1kPGEYsTYYM6XvExsE5AB",
  "key5": "3NBJQwV2Aw3PoDFhGq4bbt1JGyD3oxrhsdgzfhN6MarCddq3sXsF5ovNDmaMfFZaMBsY4z9cdS5BikTcrRsHDXKf",
  "key6": "3zeWQBLSkycEee5YsHfjq5sGCELQTodxAq12UVcBTHUPgYj5RE74pFTSNHnVSXpGdS5fbDiykoTiq5nQ6HDERs8v",
  "key7": "39qnkgFabqH36vYNKoujdYsiLy3Z3C9QKVmFi4pr88PFN8Q6ktMpdaY7QXgA6U2EWoWjekEtDVKKGvdfQ2g6YQjc",
  "key8": "KC1BPtPdknza2FZzAVHPTZRiC5UFaUS63zF1Yp2idK21E8SxdxKGxBnwGn1ejR4orQaQmif7nJdy8U2rr5m3Grg",
  "key9": "2ArNqG1efPDtutPMdqyoGf1Lc9xfm4ykaEwFxJPv4RrDLPhiH3g5uJeSwu7FYBfZc6rtpUQvEpzt53ti14thbMDb",
  "key10": "NuUmM58iVJ1ZEEEJSycxCx4h9r42Tmrps4TkvL2j8eZ1fxYJgpw7QuWegJRVhk7cp6nKjUkopgdbuf3BgRUuis3",
  "key11": "5ZqwnHzczBX6giB1JWtEyX8oEa35YtkcW7WbYC91nBWxBA6oyCMjSYgJBdUKsd3o5J7HckTt2BQsr2F76CaSfF3F",
  "key12": "fsz4GejwtsMc9rJrtkHG6VgqL3y9zKctPUWphcUWxkwAWmRuxYCHN29ChpkdUtbFtFXFGcFgF8B2BVWUKeJCMEL",
  "key13": "4YRRTPujFPFoytNgYy2KuRAbyqY7zd2WFx3hZaZwMSuE3AZQJ9QHauSDi8ULMgmGmqymK4o8GGULgTGq2JkGrnuW",
  "key14": "4hRTtUURPKYMfdYPsYCVNVNKUaKthrMRWri3rQqs4z3agnmrXfjoLWnNM9diEb6ZZ8SWnwbTah7T9R4PqXzjirdW",
  "key15": "Sr2n4cn1VradfZ1pMsj1fUQ5r4Lt8DKMYYnxmDUT3hitJipFmudHQP1Nm51c1gdEKTosKqq4YLD6UVmt7jKtRrV",
  "key16": "37p3m2rm1pLzcd1jD1CuFYXDdKBv5by3S86L9mYxVhv8MRRpS4szzbKHYSdFyKYFsJybQbJ2MgKec2JNSYMMx4iz",
  "key17": "3T52ttQ5bu45JikFB9qHGgUtNDoAmJEnwnE7nuDnjsFJoxN5QYUSWygEkZviGLnT9yL82WeFr2ikyMaNfYUZ2PqU",
  "key18": "3FkwwpsUZbv4uprp2YJ4mN3W1zfe3fuaJYaLUBgfQU4h8R5w2PRqktUEK6kjPF3yZkDFmcDQVpkjmEWNz9LuR8Gs",
  "key19": "3xZdrDe3s4Mu5hfEyB3ehFVLkhCxt4nhhdfDyQp4MZXG44rMKw2qFeKHKxQ5KCzkq2VXYmUNXmA9vkRPVxe7qLH",
  "key20": "4dgizXXpDJNM6wjrw5dL2EFEUp1kKYKMFQL7dpmS2LBefJ7DWf46fX4RfQJ1pAru2SB9jseMtmiDd7rWRsFG7D9P",
  "key21": "3F9kAWMfQrHD6p7YBi59MMEPoxLSV7zaxAe8PP1bdX7f6Zjrcagsb32nYU1jGpFWGb1z1vVLu3dUK7yGXVbFypHS",
  "key22": "5rtRaMMx1TxpXvByy566JmsvM7AdxmN5DifkXdhsRYgaB6hg5g4jEsP7PZuVXPF1oeHB9YgNTVorqZ3sykgkeqjd",
  "key23": "5EYP7fKTb2N4ibZCS3tGFLqADYgi7szGdnMkdnZuybTVK3DAq1S1LQQHmsobRuavpAYh31F3oRjUVv58idPeMeaA",
  "key24": "2YuxmgY5yc1xzZeAa2HVmJhi2X1c8SbP57tjX7hUvkr2nC26rTgoUe7n17hgzGjBRMKgHx31sr86GMouqwdtunjJ",
  "key25": "2sr6ASHda1nSpu7Yk8njHwVGpqhxgEjbWCbfjjkoBvUTs2hULYUrP7zPMj7fCAaXi75ibvmoqeGBrcfvBJMQ9B5u",
  "key26": "4z7iM9acPWfrFTBUkHHnta6mS2kBUEN4fSmi6d3xtp1RnAwW8LQBGiKgZTkiLnSCmr6Ueh4Qjo1HhebfzXDVdray",
  "key27": "2xxfEmwxxk5P5zH9ZvgreJ7tD633ET92RePXBkE6oU6bWE7yL5Q74WHnUS1XjjCgvgLtfwZKXw1RwpR1e5mpvNNz",
  "key28": "UBzNXMYqPybSLzjXHkyZncKQnvLa8uoUWu458tEhvUe7HnQy2LQGoHNKdLps9Qqzr6wJFYdqn9Aya4i5gWssYXy",
  "key29": "qkbhkim1nGNriZqgXQ5YS6hCay94xL6ozC13A3Rkw4h8ZtDSrScjbMP6GEomckYSqqve2FDaknc6DQBfAEujDFM",
  "key30": "5UthMFFKk4PgSdUmgw2RtGRhiqvx7TKd8XxrKKXBbxpoTWEAHTWCmfQos4XT6jBySsqqHA8jQ3P97USmW1xpAGsG"
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
