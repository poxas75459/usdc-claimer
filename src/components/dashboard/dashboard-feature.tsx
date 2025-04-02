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
    "zogjCZcMUFDNh7zbPFdsRCzSQfRMf8NDR7tkKfACHxnbfubJTfyB3sa58AtfBrir3mzAn7GyPSgQ1xoDdYrULyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ermd2bVFdcjfaLToPMg5Neppa9NprKoUDKtZ6Ua9SeTAi5U54ddRWPtTKGmRN81h8VFQeaj5p7pfZEYfMuHYrHE",
  "key1": "5R2NU7BFEsKw3PzXQmPFJ5rZRKwd5A8pMQGPWur7C6S5efENt4WicL87Kg11HhTSdvToyUz9W1wKdr3JHjHMeAum",
  "key2": "KxTKZbRrtYj35JeNB8MJuc5STEeWXPbSXY4mZoAMCna33LSyfUy4UM7mDnfFMQjgF9oN5bPKcuJR5jmgP1n29kL",
  "key3": "3B8Z5N5H4dLxUaqaxrDFjyE6HvAfJRpW6XckSPUqrCDcvwcCm4vbaTWKUqZRgBFwZdS6dqwg8LxWKfdrs6vbAowK",
  "key4": "4ocEncGmuVDfTGnWy1d4jRM86Nq5bWVzD2gLf1m5H72QUSN5BeirU9yVTTk2atc3Xb5UFPtXQLb8jqdCu42r1Csm",
  "key5": "2bPSxuEEnTbePrnZRM5SChbVekVoB61evwcdPXEzzPqjZRwcnttH4Lwj9tP9Wpa69Gsxn1QYNGP6H3kazu6tk2Pd",
  "key6": "4idnRsF5nvP1uZNMAe7kD4sMK6SEhc74xga3QZndpMFA8nvqdjm4dxZp76aKmH5FH2h9NsNZNib97F1HeQA4Pdg5",
  "key7": "39AGwmCUoRkGpbTzANmuF4YPKeWp24DTZ88ru3kv3kGKbWRf6HuuYKShiyaZashmJ8gYwdmPd6LvMAvRwSFB7QPG",
  "key8": "29CG8iYCmiGPZfwLWoy75NiU6Uzhz5TyS3kbyrNp99PnjxzDptjL2EysePWLjiLochXJoC8ggrnbW24uJhuCyXck",
  "key9": "62n9pR73EpCczfZnyKx8TYVAbSAkCn2q9Se2PAAP7ef7FrYwVL8eayqtskFY5qAU4D87EXhi2bVGaatKpYPjC6DX",
  "key10": "4sbnCsqCFovwrYZBAEzBPjNueTXWRXy6FikV8M8aQMd1st6DS8oNnayh9RxpSzhTCnJ8YnF35PAJ3qCWR3hnfhHz",
  "key11": "3MpFx2xqe773NpRK3Y95rta42ryh6qmvCzM7vMkF8yZwHfnFKgqP1VgmSXLeR6JsuXPAgfWwq8A3mVXsTYC5Ua9p",
  "key12": "3UupZTv81kAMCMeYB22qAGNH1wZWwy3N68dmQmQbtXLKZnkR8SnqhitWTyvKmGi7mXeJviV3sZ9J2hMCwVwdauSS",
  "key13": "4E9qssGajoSF7Cd6rXbnZ5c7nqHLLXYM5TqLmwoWq5FriBcRDvaQk4HUmnkkJjYVqSb4tKfsyJiawKjWwY3iQ3bU",
  "key14": "43ALnJAvyvSBrrSY6LVgxDsfHfqAXWKAjEYqS9B7aeQN492kM2EBUt9yod6aRDKaTdZfQaduaPXtJQCkLWnLJFnF",
  "key15": "3aNrxEBy31WqKCUnTp58zqQayCpX2q6hTKEpMAqvg54A4Q1E8YcWV82D9FGwTj6KUL8zUDMFBzRhibCNhRC1AGwN",
  "key16": "Hw8Hz5yy8NNYeE1Rbhm68JogYSJrQGrwtKuY3iVpzU4ep41mh38Hd5dALBD5a3bvgpjFNL177KF3XXzmZxYxPPe",
  "key17": "cMZHwPHAXneYaK7uNwJ54JRGiK38jQqja6gNscLZ929fChcHHMGckGuNjQ8eDEEm9g5cNgwMmYZ9Sv5rE3pjviy",
  "key18": "LazsPiKmV4fvP3KxobJ2vRAsTsrJHQbzpsdLf1LB86FrAWcetkX93YV6LMCvChQ8bXKmYASpAJ6snhsHWj375Uw",
  "key19": "127iVB4iakG6nk3BRUksc8tDmU2HHm9vqY1WoDafScKx4amxwiKpiQzr6WkybSvNbjYhqDjZuPE6Kb1EzCoCbjsK",
  "key20": "4UnjfN4qgVavCpAoKe3T5ewyS2Mrma9NGVAx9dzgBzRMSzCj7H4HBTjw9rFkDX1ReW9M8sUiBnYxkmNTjfNQ7xyt",
  "key21": "4wZ8yRgZ4rCPwYmTwykmvGytiBV9SdHq2E4tZsCFrJuT3MSTRgDekHWTQAyRmFx2KQJTpXtzDVpR2jTAc1Nf6HY3",
  "key22": "QDLrsDoj4HXMYtrv2kQXKRhCFQSGLdoejWbRp3A3odbxjx2oMwLtekr6gECuBJUoZjkWaJ45LhiqgSsPUp7wb3J",
  "key23": "27ACdr8hWugn9HfgcMTcRx46nSQbMyDYGSWkzrptPghq5msse1xtbDN52Co3wuHe9FuNRUcmCCFosJTb93Q2zJCH",
  "key24": "2jaek4tJanQeM5RSAp1UhPWDXEsxUbn2bi9yJtyPkLk5d5tHwRUNjSsuaKVha6iRZPYbVKbLG62VEQCwbVc6NVNX",
  "key25": "452rLHAhZrxwmH5iAq2SfofKDdVsv5ywDCueDgmaX2s6Ms99FiAy4TbJMRjxLySxECWUY15qSEPo2hPzBie6X5xG",
  "key26": "5UCz9ThybPJzmQo8h1TJYwdQ8Q15863uWMSfCqkKdxKi8gbcgUzyBtFQV7FoG7yr55vF4hSnHDZQSVgcgRopTY4G",
  "key27": "59UeH2rxGB1q6o5J7srJb7BizeHRVFnHq8QFdbpsmf88BYjd3tG2nM8QYRYAC2Y1AGm4BtBLMx9VpdcQHvCBL74Z",
  "key28": "2LFiygpRS6c4S9RysXArtUgYhxyQmNzwmCpQmbwjLTB6tHBYhhZUEyovdEB9qC3GkgQ287aW4EqaEwdYpgQHMPgK"
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
