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
    "32As9bhjmebbwqLHooS7jnUMYF7BubQeyB5VMk4h9Wgiu8Gup62BVJRXEpzu1kdRr9N4my2zbcqRvAJWd3zKtJDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iF7suvZ55TDJ8H9JRrnWEdV8pEwbkAeshDJXtzK22K8bghajFyYGtUWDZHq18mGFygjnf5Ei8222hUEnQydarpT",
  "key1": "4ZKgVoLk1VRbL7pVrRemq6WRmVUnbWiQDxKZjYiJTPjvP1ooSJnhkSePATYgSVLK23kQesfMzY96M5zfYu7HUymv",
  "key2": "3J3U2b12Mfsw4tRKeeFnPbjFndb1B3Dx4USwcArshrvqHXEi3bXFWAEgD6RAkxmiHHYJBpvFs4JvpExAGZ6AFWf5",
  "key3": "5RngsbKtY5murnLCN7gchH3pNvFU6sALVkNdVjhgW351BwiQa7TdDktLAunc2xA7iaoLn9HWMGFkrcqcazvJ8ZHK",
  "key4": "4b2ijxaeWvSE9HudLmKPhbnWFzKn79cwtHiUjjHbBwexHgiaByZ8cf8YApd5LPiD9caVsnQwuG2vXohCfGfb5YTx",
  "key5": "3LjJaE6zubHpgTwyy9EccZg5UefQYha21CEvr2Fa1dzvde6UQ4rrfAFiLkVFBkWnHV5p4k9wM8nsMJ4kdgWjbpkm",
  "key6": "LVQajMaWyFkBacW9Mo1XJWVe5C8sbskWGUUdU54kosRNoN1AGCR2ckWdDvLoAowik6ZYXHeB4HFQvxcPK5BGUry",
  "key7": "PrjH9BPqfiPUWyJ1roUCaxDnpW15A8VzPRgXAg3L1T6ad8pCbwARCsSDMRzZey37xAWhqaQcNpt7xGUauHxtxP7",
  "key8": "LKtqQY7zd4gyYiFCbJwPdiX9RFsSesvmdLyca3BVvLyixWb8CeqCopT2q4tX5biFzfNyRQVQBS3kQPjDvSWdJuy",
  "key9": "3kRBEV6TvxZCzfEAh29hGRXn4N1B8BAowSjHuLPMGtwGx5aEULxqj6RxZVvAcMvUjMUS7nGKdd34vnvLmU2Hav2s",
  "key10": "4MG3ZwDgrtonsAN5ikaYQZ2v8WFAukGddV6wHfwHrLxL6qB9LgVTPPA7cQcpgh3uKrBdn2516Nhjngm6Yk8jSgwn",
  "key11": "2CQye9qARjccPnnhLthMTK8SRTowUtVVdjFZsLnNmNwa4fXoqoc6EDHqiYNpaSsjL7LxhGUSuUtj7yuQdUaLZiwY",
  "key12": "4Y4yP9UEk8ebaA3vMgvWvAedJBTA2LepVKywpWEarGHgWHvQLSHxFs4ppsdbxo9XXMoRf16odWk49otuWJQM1XJP",
  "key13": "2gzAgEgFYx9KjtV1Wf9rkbiPLxACXWW6DNgkT1d8nWQA1jqE8XhMdCWLw9cydkm8VEsARjj34eXb67NLBvQ7Ux19",
  "key14": "e365iHZaPTqz8AM71TaCsxpbXNgFmRgimzzbosdy2cYKmy49ThHcGR2W9a7NTWPsHoR9Zv4KpPbxiVwX2e4dg8v",
  "key15": "2eTqqc5NUcbgXDxsX9mAyVccvW9BVXyttmBWwMqveg9fqoHXZyB6znrndnfFJcFjQFHGLLnGkzwpNVnRMKntScnh",
  "key16": "2ot21NbMtSLrxE3K5mAsTRfHWCJXfdknyCsn1PtT3WZthaZDgu9X7fSUqR5viPBLuS9jEFPkJrACZSD1nX4T9nf7",
  "key17": "24pDCtk4zGTkD8bxrtHepLDBUPecqn3bknAdTmwy7cg6x649RLNqVmn8rVtvw89Nx2AFJvdf93R7N6J4pFnbDmXn",
  "key18": "vM4B3nyUNvcsaX3Jei6CJ8qe6njpT8ZexGRmhrEjCwzBMeC1d1dYXinDEuik6vEQ47Xz9nebcNFA4Mvu1D1iM7i",
  "key19": "1z2gNgMxqheN88YFBCDXNMCYMUg2omGPw4ebxUgpg85MiySA7iLGzrx67J2czmWxCKmWsV8ofxcrtk1WXsB9Dfa",
  "key20": "5ct21XyvmimfhkdGrnhCU1tsfTQcSEoXqP3cx4cjabUXL4FTVUwa76B6Aa8VVkuhB4GJTv5eQptaJKiN2FY52MoW",
  "key21": "58VwS2EXsYT6CYHsheCzsHdmfBvwLzQLTNtTK7dkZ3BynzdphBVabBoEvxbZJ7cbdCPXn6XrgcPWwGjNyuSsHwKG",
  "key22": "5LCF5vxY6ZL4WrZDQez7NPkH1fZfTqGeGmBgxzscMwaiFavg9Ru2dTrWEjpfVFQK2RirjmmAhNxXZ4bxE1pzXDZ1",
  "key23": "4tt4WKP3hbpfwcHaDrXaBm3wHrmjMLRtQF6tVYy4Ay52BTMoXyYi7iovQA524TdEjuRzkNSstcyo2B8i4CqDPuMD",
  "key24": "2SKRh5Drg2xdtaZ1LMMrxDojgtQQR4M2kpxJCpph2PDqw47EtbL5zLn2QxBop9SfCdkVC5nMRW148A99haWtpvw",
  "key25": "5mGQ9sWd2x6GXj3eokEGGDPs7coH4dRmZ7xgzMjMkc3pxQqq1wpwQvvEws5b2BarwaMKsqZ4KbYrMafLDWLGdtry",
  "key26": "36TdP5KsvnohhXiNooLN2Z77egUfFTtKa78z9tFLskjyaAJCtmQbzQBx6iJSfsBNPedzeviV9SEhNghZhkByagcg",
  "key27": "4FwGXeHdHgzVavBEcvyeXK2ejn6LVrsgyekXMVtiYMtuj9SXXHpVoSGuJhtX5xkXfRWAXBE7CG5eYbiHUMopD7vM",
  "key28": "23nwTcW2eQ6UzwVqbeyMnPNHsaXPu1qKQnvX2WM9t2s8KzSS2k4PfFAvgdfUkgqQELX6pRw4Gp97weNw3EjzunE8",
  "key29": "gB7sLWHFKJ8ynkLjM9P8WZdUjqzDcvfjv5U4MV3u8RQERiaRkt65JFGoTV265wvAjYSXyxqzQnfEbkY5f9aByVS",
  "key30": "3AhPGa3tE5mD6bhhrk6Cj6b15wcpujNVTD3efbChPZDyoLpQhC9SCHHEdTZeZjFFpAjQxEbPeLrcZv6d9yNFG1iv",
  "key31": "2m4EHNmpU2QL9XV7P9HEK2vpJepYHTBJrDSyuPyqqy3hDJED8j8XKnwq6cuVJ1TphGnPfqGPeEE5WqwLYZJEWfAS",
  "key32": "BR2LRiH9DJZeFJkDcyjULGTZVvpbs5QHRJwUFsqqsP2HKnhtbyncpcPcVbktDvE4p7ZA1gHEKYJKWW3FhwkWmRc",
  "key33": "2TmZTSH8zWijFnJnEEbzu684bQsTeuTuVEcQyNTeEhDrHZdixxtm9DuDHKtUxshumNumRVmFxxTDYaAbiCxrYUKP",
  "key34": "3rKCYsnYDgbgqe4tv1QLFRWpLXjHWYchj49aRx2GffordzMrcAJgHSRevCbWPjdfqhYEAUtGgXyWLCeKAkfuYaSZ",
  "key35": "egy8XgHBhSDEPtAVF6oPm38ZWnxGLf9ZYaB2i5nu8ssS7zfzw9BW7veEfeYvweWAiDgB7wdUxcbwWLUsx48EpVj",
  "key36": "4jUv5434LpDrNKZcwp6bikJEtPU6N7q71DPvjdWFs7hs7X7whokfXveZr3Ge7YfNs9XqwAzPRgM6gMjst6eWTuJF",
  "key37": "LnRkrrgbVzELoLvuchmJJqnEyECdfZygdSHsd5vqp5rprscKQtzQqutezXgm1SkMxjwrYmX6BguNMe1jkXi8z5R",
  "key38": "2tAXhAULokVZWvYn7ScTYRAuypsHXnJ7vWRrPgzSRc497hpCVWGCBKZxboomttSuLKz6XKCfC237nLTFQsYf9QsC",
  "key39": "5qMPvL8BRNkVCJtNy91CYAEkGdDYHsX3tjVLnZcuQSnQEvNCpzSpzJaHoKY8B45JMkKwWmXKtHNeLC3T6kJMafjt",
  "key40": "3TVFpxGQPyCpxRoy6wtpWW2astT9NwgfNrqFwMNfrVVQUHHzG9W8ve61HfvdmHvAGQmcPjmBjzxJ85T8FCW8QtDm",
  "key41": "23Py9z8Zmm4tgBgXdDMqFxeBpcGrLCwMTgKiKLtPUPghYTyBzoCtuWjoLDwagoYEHkGWXtx6yW1QFD51y31GhTdF",
  "key42": "jpiMFo3tBjowab5o2YTYEMX9ymGTcbACGCysrh7BWrCYPufc3XLyEoGm5oGPRniZRJwcEjEc5P9mASmccgnpRtu",
  "key43": "3vr5gd35ZRTCNPaj1B5DCqYQnZTabAfTPaoUYSmzcdv8wBizvfxiDUAxaZG7p22nPof2hY3cUAZL3Ui9c3fUnpN4",
  "key44": "5b1yNc86m68UgEMtBXp5Vpc9PnyxQ38RRyv8ht6uf1WVRHfRTvbjzZddE5aZ3adn5b16YwQB6T7grcNF5DoBqUop",
  "key45": "4hjMctFydLiB4zb2myGVcDHgP7jQqmve3NmQopxoTMCy5MR873GYgTU9yk4WARrd3CqoXakXP78zGS1DRVuz3ZL3",
  "key46": "5Wu492tZM2JmjEntcLWZaVJscsZWtGpHYEUUZrjbUAuxQXQa5R3fVkR4NCHzHwZ7WWRp4m1XECmhrG9kq8ERg5io"
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
