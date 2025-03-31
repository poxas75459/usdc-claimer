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
    "3uadtbCP882waVHjjHGfdPNjya6RA4XXdzx6eXwaBqdcsJTzG3jtoH62g45RibwkeCCBhhCeCdxxA4zLxjySZsxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YYF4aM6sBgvSe5dEtYAmK8fkW6yG94B1m9HdsAQFUod6Go6CPfTrM3kz67ZjC8yTK6k3FwndwhkLnSbjTeGyRny",
  "key1": "2ZwvWZvRts7czpVQtKVBJDbzDFxRjdqC58KkhZ1e2gGBtqiEBRFyWPXFWbLAk51xFVaKSMFh5AJjwi8ZrJUw6pSL",
  "key2": "4Zs3zTLe8fUkt4o8Hnr1WVD7BoEqgor8zXjy7LZ6fhGKATVtRfQ3ad7pWyNnM9bzWbnemcneqR1cGin9eRkFn1ep",
  "key3": "4o2BpaNWJyG9WmwXHgH6QmmfmFx6eLrri5vDuikqfawuBgmXy2dLSteWRmDFzKD4FYmqMcpQTUsrRmeb6CGi298a",
  "key4": "38VWCtwYK2RuAQHBDGtMZ9GodnTry7PaGZFZemp2yB11kmphT4XwnVGWnKBftZ9ZQwaSZeockDNk8ENCArtr3qEv",
  "key5": "2ehs7ktLVcmbQTn68kaYKM3xwL17YKSWfButNzwv6VgkcsESPiXmHFRsc7ZZGX9fstoVyndHFBhMN8cyUhf5vhcT",
  "key6": "2W2e9pvpo62bowPSCjnBeNha6HDwES8RvNSpHMRN4k5aPxgtYFN5dWSxZNdQVBPoVnXkL2N9qyTLQgxn1QmniCnN",
  "key7": "5TmJdDAhdHNVF3a74vfL5s5Y48c84Yyk8JddPfbjFFB5NN6m5uRsfXaSJ48tEwsueBXDV2RN27S9zsw5DWvJoNHj",
  "key8": "a96NEjo36W8tMM32ygPMKJTfQAma4TGSqfjtU3dsqCo4PsXSiYHkcfTNoXw4ULp7RFofrirVZomQCqE5skimXo9",
  "key9": "2CTbsVGQ5B8xiibvwfAgGTA3CVirjX53rEs5tWpFSvLXfS841t3NRoJzheJ13ZTa1XYboGLpZVm6T7yC8LaEhbxq",
  "key10": "5GCo7q3dvwszhAZBiiSGeVWp6Y78RySY2eAHiEjxc9jjxP3Qrjei8UU9XNYxtyiSmLWzFGdmwB6LirHykgYyraJ4",
  "key11": "3wHtwebiSdj3rDN1rb9QujNRmPj1GJfaieUrsB2t6zF5fZ3UkHokjyjr33zutZvQNnMxQPRADAGozkQVQDxsSLfD",
  "key12": "3PAjgv4QhnDc457K6t1D7RdVA8j6GfDEmYJkNw45gw8AhedCUuBda1dYYSK8rk8hKnkBdcUBWfW5uyzFQMVw5Wqr",
  "key13": "4PQ2RKpK6DVT2wsdshbPxFXJVFcv13L2uhGQEKp4BhRHMYb7spc2NW6fyceM5YPnZYa5bP5wfSVQWEn9mmgv2pqU",
  "key14": "2TrjwYGZh1No5GkZKvu4ifCRsMtyKUHEJcqZsJ1Lu8URNCwSoLbsbPjbdb3K13x5hyNnSK9Gdci3cbjxz5pvZN5t",
  "key15": "38xsfYQycxnwBcgK6hCmtT1KAQq9Urv8FNAL6gfGKvydrgyq5KAYL5bWgjUuumy2JQ4tp7eP6GfVqnDbE2jJpMqa",
  "key16": "3tTymLWmELymvcFgAGu6ujuo37LftcyfQHHX3A3ddwYYXcjSnzR3pgR8WfKS2B9WAppL1WVLXdS2iQTPSuSKxYuu",
  "key17": "5yzvgrThH4tW6EUxoZT8K3YuGRQuD3hgWPh6cC7Mca7WEf8syLAw6uQ8yqYx2AGoiV8erX6VYpVf5CjssG7dKnDf",
  "key18": "39vo6svK3QgqYn6z12fG98y6KomNGj9aYrt974Rybrg9ZeYbEH3AmuGpaXqm4E8PkgFhTFKVzGCJYunZ3d9Rf8PG",
  "key19": "AwawvbfVfR3LbqAuJ9us5uTAyc1PZTxLFkhcMZLiX2Ca7H4BuYXNWhRH4DfrW7Non7tH9Jv2zGN8iqwzvUbAyRa",
  "key20": "5vLHxmh6FwRm1U6ZTpQkNeF1Axx4uhjHYR3Uj8spomN5uUs3RtNRx5TVCtqCJTowhMkVDsEUUhttZ25z4vyKvYqD",
  "key21": "23TXwB4Af61pR9mQaAkagLM8FJYuH6ZPK6tQCPSF9ScLk8uFnHPMG1Ab4mFqPc345KjZYhQY3ugRDDcizVJBfvHZ",
  "key22": "3KbWg1YqL4Wh8HqNqe11eAraP15VS2wrtqjgRqeoz8PFe6XHLXf33TnfT3CFcFqjXNWBDg9YARKTks3okatDVbQ9",
  "key23": "5Mx3qXsmtvJ9gkaJg92gHwxmzV1FiTFDBPG5NYwu2Sbiw8r8xMwN54xuVBtNzyz2DojeBqJvCo2GDm3SPZD92pBA",
  "key24": "4myXGxGGXEy1nwEzRNgmHjGqJa5voLsoNnbsAJXZMMR3rkHUT1jJgJxnyzFzizsXSxSseHvVxxAs87uGBP8z5NLs",
  "key25": "2EPtH4xq81tJrrFeydFBh4N9KPTm9oWkZjxWfSptwrQxgZEV4PCSZK5FAMdxxVWBUoBWSqzZizYTS2pPGYNEKV1q",
  "key26": "amcgUq5LR2MZzcQZ2chyJdhawPMtBEc8GZbAqs3aTLqt9NnRGdpVGa6y91m5dhKKaRH3iyiq4kBVcEZdEpQrUS5",
  "key27": "2kuLGkG9QJQmHa9F8pkKQ5xhgvZ5MbP5knnbXhPX2D9FKN4wUNPjqLJHxnwbyXwbScBWugZKVAFVEBpejYJeLmP6"
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
