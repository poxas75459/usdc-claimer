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
    "2VEyJzn2b2iMZjUqR5nWTvmRcukJKf7gKpQx53gmZBkEhLBvqXCv5VMvg7TEom7Hpyv7bhdZnus7bNJTe9mKpj3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zbnu8iMvyNijjnu3a9K4sCinwAdQ2CXmraPSZDa5WhtHGLbJDA97JX97qUyHnXaXd2JSqoYPPCjzgEvbaA2NtdD",
  "key1": "3YWxveAgC7Fbmj3us98BC4EHtDbt9rjC8U7hdFkG2VGa8p6JkgnEUuyi5sAmvmB1mKw5SicQELy73ri9JusqkxoY",
  "key2": "3f9YZWStYJhrBkp15Jbq2z52cA6v23E58HSxtGoznQwJBdAUrRrRm1ZW5JE7dHHD19sXHjvLP1yiMYwKpiJLRJFS",
  "key3": "65hFqHDBhvHZqQzrmj2q1uf45mX1vwxwG3EKkgMdfGhmKKLcJSmvdeTUSiuYwFKGuQ8yVS3n1wy9L44W68ceb5G7",
  "key4": "GTwXg6eGKLMB2JxDgLQBE4nJej4keJBfiSAs1ubnXdUTyJswxcei9riBcCAPrxW9d69YHLw6KuUoFneYWRUvsoo",
  "key5": "2xPtAw3mVi29aDMGpBctQVPvaREkpJg925zR5kRRo1WDpKcdws2jJC89Jjn1s9GNwUyQZZm1GKWMRhYgQMA6SokT",
  "key6": "4gZgH8j5NJzLYhodfTjoj1G1knBpesnKPqzFu6MDXM7DvuBYqbApvQCKeArZZWdyKNQAvXXNPiDEjDzGZvdRRSgn",
  "key7": "4oKZuqnQRS2tpv9dbZ17EW3Pe8qHgfzaQzVRWDhQpEJRbmwG2oLyrbugpdGR3zN4uqsf9JEFdhivgdowaP9nP3Ab",
  "key8": "DQLUE43p8YjkZ2aJuGo4upn7WipaoXeagQL2CMi3uK1D8fWC5SCuxr6wLLGwdkQmGX2VdGEUF4BfpyQnxexhJZy",
  "key9": "5LLdh6oGkM4jZwTVs3LhB1ZVWR9vy1zv4Sm82tqHUaNQNnDNsbaLFQBB8HHL2TSZfCfs6DDCWErq3RonaMTZkUGw",
  "key10": "HVkfzUTi2H6W6FfyMp153LTr3sLDuAr6v6BVZkwMEV6CkZ8QU2eRz1reRQKvzeDqnp9Hr2wLi889wFr1cfGRuPq",
  "key11": "2XsyLKPqmfNkBMyFyQw5jackKNd7LG1y5BcV5mcqnXc6tec7utsr9kzEstYdM6UdZknPhcoUzRf6KCij2dQTVUGb",
  "key12": "UMNSxGwbHjiDiWP81QHeFRQs3CAkXr1WQkQcBWcZibCsRHoRz2TNHpgv6W1zPXtbixRzzArmmKwDdos5QacCjPX",
  "key13": "GCv6N6J2Vg8j9YMwRtARhpJuWXj7uHkZVCG1tR4RFT9PVn8ajrQjptQCbw3o6xPdQsuiPTKpxqafGurocoDyV3A",
  "key14": "BKdZVPsR3kiDTp1XLgzmMkxq4YTurZtbn4nFMuR8KHLFF4eHfoX99NSWPWmsbueW4gVceM3VGmt89KTDLYKmthH",
  "key15": "3cHSkfSPJJXPpnGDApaPb6X7bTgfzLznsjBLMZcHdbcXR8J5CRJvvmdvLm49sL7pnrcjCp24BK58Dwzq8drCqX6A",
  "key16": "5eQvxw8JYGCiSRuTZfBTTg7DDwAHU9rvjP8adWHFsJXstx1nMUn7M6k7njuZ4TqjoDZqrdgANuXibfB6j9yFM5MT",
  "key17": "5rySx1HUU6y48Nk2CruZrbWjtncqRLcRvWGNf2wMnXvhJ6ESCEMMArbTf2yMaxipbiyUyLW4MZZnBFXaL7oHXNzV",
  "key18": "3UFUkjiyRcUxeK7F7Zvf7KMberswJaKY1Wu3eHZG9jdHhH3ffVJvaCRFcfUvSXyREHu1mbLfS431p8qTEpAb6Cki",
  "key19": "46FqwdzBKir3LXMyd3rNZpLU9ddCHEFNbXLZPpRwF3ajk5qrDdz2z6zPZEXZaBDehGqoa5DGMY6bG26v6wkTrck9",
  "key20": "5WgDrPpXnzTzrctkQQL2XjnrwYP8ycu8MsirKxU1UXZ294EqkqeHGSzTzjque2P34x9eCykLyh3tbURat9MuNMy9",
  "key21": "5mADp11Z1kJdQJAcTy7rrquLEbLUmeWxCZJWNoCA5JENKGoCP11PSUDJQ38M7oYZ8jesZkWaH22fev3vhNQzW6ZF",
  "key22": "4Yqax44Jjap8QxXTRCDS9MGJ7D7x2f6V4FbtbF1LtEBoBqt9L2RuQd4KjNdWZwj5WgcK2G32rKdsHnAwk4bwiwec",
  "key23": "gcAFgJNmRPUwAXpyCWbK8bJWapuAmBfcyRks1JsqebaP7bs5NupJ6CMWao3aZ2G1GwKciapcRczodkbfztk26R9",
  "key24": "3VtQ3wVfqWyG2EaZnCY2xpmAUK2kPrRV3U9Zwc7ct83YwrDt4xABqiEBNEc8oStfdGy9uU6AovBWi9AbuTGHXUxz",
  "key25": "4mmjxtPNHSJRVisKwohzj2dUGHVtBSKCTPMR38M5MDot75SgCrSJycHcWe8xyKNzzeC246KPwkNHgWJqR2DgG4rd",
  "key26": "4AWmjHcqNuWWWYqddE4C84AuuUGo8AZwUJW2V2UbRaMszj4sfxAKaq6opQMuxZ7XUavnFbwxnNTZ8t6YF7aaCcQH",
  "key27": "5dsMCYo7wpiCgHrKH5Q3XDzDM65DG1ZcKgpS8JSQ19EQFekajxwAUFByxFKx7Rw1ifeqR3vHD7PzJJB2V7Mbrq94",
  "key28": "4adJ5TkV3nJ8gYADJEx9Eu4Jt56UcAdoVqHZVzFDTPtD5pKtqVrhxVRc3hNmKKmDoydi1GR7FJsyATCsxh7r9fMp",
  "key29": "5BPWR9v9qgMAXrivLZ6PdbNQVtroZMMicNFBdAovsYFfzRcm4oVmxFDxDNMmNcxaDAnpmJeBMspJTzgXRMc8BcbH",
  "key30": "3YTurfaD7SXn5qbjyQFCoALgBG7VGDXrw86rXLBA5LHp4QkKQST4rg5okcUh2ZPLubE6MK24ugRSUJybLkqvQXp7"
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
