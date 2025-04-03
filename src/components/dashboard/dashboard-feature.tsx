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
    "JgSsULaTwW8s6yiVrzmtzP3C8BQ7oEDhPntRSertHA1b5GvfodGMt9MGNmH386saMApaFTew8sJ56i7mKPERWUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sF8GnNFV3Yj3P58By5K3rHYexdrAthLnkKrmYBduNosskVcrjVNXzymxgM2KEMSsmxG77i41PGhFh5Lj8FrZMqY",
  "key1": "3uUXXixceurwCvcKgSMznuV84FojjSMXgXZCqt3edoJWZDxKctccFqcgfM5rDfzQmYZmH6urnxH7X2VuzpYrRfif",
  "key2": "DA93twWYmRJ45eBu1H4uozWttsGa4SkMTUE2YDzxZRyvt3RUcVFV9Xhww11J9xrLpBNZHnbV6WGUn1WhmFK4hxR",
  "key3": "32L23P84M1YNVSdudcEHJyVJRHzmFJu7BzYTcN3MmAE3fcupkjrQS75dEsHtAa4qif4qMG45oYunrbK8PTcXtkx4",
  "key4": "2NpnsAVompqWA34Q4HPmq4q25G6zXpxi2QHNFzc5Xp2mhjk3q6mXUuWweQ9Q5kNjUd64HE6s6pEHcWuyeaLi8GDB",
  "key5": "QK8UJnR37xr6buCssqNsBwVycwq1ZhcTKv34HJPpyqXkWsjqG3QJwVkYMkofjm5skwp1nk8uJUnfbRYKadKiMjF",
  "key6": "4hYzMHPddrjAuAk89hzPRXE1h9eiy5yGAx4d2dDCqvU4r8fwBXX8cDP6dpiYAjrSvLLA6bdM7E5w3rCgGvX1CC7E",
  "key7": "4EJHzsPnCVc8eicJPBdcFAJeLwAQxthyvpxaM3PpzyudVcTu2UCkPm4oGAEjMfi1BTTt7PnAB1tkrCnkQVabQNS2",
  "key8": "54q2DD6UrRgtNvpa3bUXqrPdWgatzSeTTKSte8esigipCnEXXK966DHPzJczswMBXe4crW775VGvnyXRaPVQXZ9f",
  "key9": "3octsnqbLk6FPkMsWsx87Bi8XSzEApeZYaVnjRRosRnCovqsymaDijBDsWysWSbd5jnk5HPk31GF5vyZDYUDLibp",
  "key10": "4U7BmybJCL6sRhE8b5esin1minM7z1M1H4wrzC4KwH7afFJPM4zZ4q5EbNURiqJWzzeVdi6aQQ5Wf1viEGq7uB5p",
  "key11": "33oNZDouZxbuMQT3nXQ5JPiiYD4QnujomR8GjeCBvBKZF5Cbp4Hqg8ybuBjFWCwBYZKfQuCbTA86crAF3xRT1Nv7",
  "key12": "3Mw14iRTUhEZybQfFwqvtw4SyvGR94Zn1cJVAuxkkzekVevChe19BcbH5YudCqnc4kdeLLKeWyUdxmGAaei3KPsB",
  "key13": "5nctdZ4Q8Ai9HCM18fCwbe5NK5f83ToLdY1xWBP94WEin17adyTeBfgW674k4otWscbRcM6hGGSJriww1TrmVAVE",
  "key14": "29VTLbqAYyhdEsWPinEDNsXPWqyNuhad4eWnCmsKDqUG85Yb2dcXwc6s5tMhSJWXZuCLKQQze8wDExwMfHfJpkKD",
  "key15": "24PPxu8Y5mPjo7dca5PvroT7UVbR25McG3vDvQikFqtkvepsxZPc46tVYyumzCnjvtgoKiXFP5MpsEnzBPHoq3VY",
  "key16": "2UxVgM8hA4DZ7xqPyCPgjYWzit2Y3Uu9pQXEZ7WKxAxboWd4pDQFGDuQVajmAnQTHmbCY3HFoz6xHdoG5CTSaMfb",
  "key17": "X89ZF2TKyV77zSExb6D6cHN1D5H5R4kZ3jwNuAZuRqGHpMvpvbGrxbAuJ9zaezzgKPnFgGUP3MxuYanY7JDqyLd",
  "key18": "3NiMmtVJyRf8Ki58rWEZ9puCjdhaGM1B7mSwkZVQzTxL5uRhreG8TyiwJ9hJdzDk2iTht3VAvNmH516Kin3z6XQY",
  "key19": "4E5gRb5ED1zgPAXU8bjHw5svL2MyJU4dZpBgu1xgoR85MVaRFu2UzUYFEj9pvoiLBSVPBbqCoDKDrG9PpB2CFLi2",
  "key20": "3jyUCrNbnzux6SgWSXV1B3NNWA1gRaJary4bfbkDcTV1bA8KV3rNizCBdNSQYmeZFkQop5zgvnvgbvSyPG6S8azp",
  "key21": "5WNEvNcHrtjXbfRHpdFaLbfDTdSsSmdShdUP1dg3682b6RTZzhibv6y2bVvJv5e4ZH9kfEfumf5XNj45wVdNjqpx",
  "key22": "Tw6VUgk4nqPSouXNysthzNjzCkfeq1ZbkJjAbZ8wSJj1d9oY61SowS9V7SC1issaWdaBbHTeQhLEBgFCQ9i8ztf",
  "key23": "5KK89JctkBetyeqxPf5DRr7rF2H55U6miT74dRkai7hCwpXaPfvS1R3hmik7DFHaXcQusFp5ha4YzMgYic6ZANxu",
  "key24": "26UTD6ipYcsWNt3H5o6gLTH1BTf9d1NCWxdFgKYK9a8swf1pzwH28kFHKe8t1qWeU86RpB7N9ePgr4BBDD6sxqyA",
  "key25": "2LmmfsdAvBvdWzX5vmyER8Cmon7XVCZyvgCn52YJmxEnvWTR7kuG4ANVquubLAfXDMiE8Kgjpowtxg9iuPUz61Y1",
  "key26": "cJocvJ6RLyuPgbriRhkLhywgdrjebnUyaAtoKNmfk6VEnVffProMuNgAg5QicL6FMQYc1p6vto2bstosPAW5waf",
  "key27": "5pgTiYFeMG4gYL5awogi2PDYtR7DyGfR8UfRtLn5aCT2VEfVC5GZkWnmfp2QJcNs8ZTQfcWUT2scFhYaytzqUPgd",
  "key28": "2XNqKLkDgdGj3C44zavRqaZuLenbr3GFH7hiq87ZYfa9Aap1aD7JY5vqBkDVib1wTFPfuNHKa7LJN5GPR9EjQwpe",
  "key29": "2edPCfWM9HxEWma3wGpbBoeMqeRowXBmQ3unfkur3bXiyUyHJmaxX5ekfTvnaea6EydGphGAuGFr46eLELLgvP7E",
  "key30": "3NBmJHKgcer1VkaBLYewvdqPhMyXUxTayZDSppXYmW8d13MFN92zb7NZkum3vcpybjVqbjRzYjRHvstqTiLV8y93",
  "key31": "4xYpKX4nrMQLaATK3j2ciwwhWrUt6XtXwSYGn2hu8g1jY7NZtFFvDQ5cKzBb6he7iqenQYJESTRUhcnnYC3aVHfF",
  "key32": "3ZXmKxQWPgnkuu4tWhwFE9qLLeagFQ6KeNN2MyRMfc3Q7RjVyN3sGe1XLUMYYARpyek4DPoeqTHUgKnzT6Edwyqv",
  "key33": "5U5U2dt8GKEVChkZhejaQoJYYDuWxKD1jegbzt4sjVzvpMLwJx7SeWAgML6gSdJ3Sa6ASMTGWLMFVEUfh8A5JFvZ",
  "key34": "5gtQs5dCfeKfu69DVGdzsSHxDqRnqC6ZWouBQKgz6Vher1teW2XX8FbVZUTQX9sxgrQJs8GPF8BfpJKMgQmmCcRn",
  "key35": "oq1uHa5CPGSg9aaPd1hobsQdxb9nGsrn4u7oaeqh69Fwag478QVnZvhHDCTrKXfk5KPkNuNE8DMTfVc9ChdLBJM",
  "key36": "8EL8EnUYe2NFhzTizmhUsy4JxzKf3TrfDKBz8gAyQFjG7bVoe1GwhCZKF3WytUjokZmVpPSKyr6zQLRWUeYrXjd"
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
