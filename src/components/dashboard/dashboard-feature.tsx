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
    "2YQLgSYpwfX8tBJgp6aBQSRKJefn1TJ9KKGhgpJ6WQYYCYU6ruy86cCg59vm8rFUtE6FTbSuXT61pAnKxcxWs5Le"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gS1oexDTgqwCSEY897RLJUKjiTbfRypS85voEmdk3exCrtUKwP5R75ctJqRcvrLneRyFqFD9mTgEoiENrpPaMTY",
  "key1": "3sWnyRYbXEtvHHWKX8PKoZSVEztr6RkhC3z25u82ZVpXqjJUNYCeftbnNngn8iUub3WquCEqSwUaDrn2LuxY9i1K",
  "key2": "MdTMLn3Ze9BbzmNGkCdA2VwgFsxbNnQfBjcLQah2QsbX7bewrG8RtzwGvPDPK8ue6JLoqNghz8qtj2hBtWxq6ik",
  "key3": "3b7zyZzPJDByb4FzLkxGAuRd8jU1y3XLrpWXw4ifNB2ea6XXZKvkeG7wan28czgwArQ5c5Xt6oSZNHUZUQeAp2HF",
  "key4": "2edhhSDkTgWa8XrfEerVp52B9R4KX5LJMinJF3niEcXdDbyA7U7GwQ6a2kajYzBXNwWdqovxeZjoe1hpHxwNxc9i",
  "key5": "3YPzWwG4Ei11tDSKjAzBYk4Uu4q19i6gz9KcRqnrkYZnCzErGaUr2UHSUtxfewRURjerWVWGvkLATMKDQRaxXVj9",
  "key6": "4WF9eeqmgMEvUEmPhdvhatYK3aQu5x7fS7FBGiJPiz5dXQAeW4vy8Z5hsT1v1RJ645d8a6higcs8bVA3ivTyecGb",
  "key7": "28heWevqKqUrr7ycn1tqS46iWK2JeTk69AegjaVVLQF46NrNSAAg3ZQMTzayqQ5GbiJhJyrqfmsTGZoXVJ7qqPvp",
  "key8": "23rxdin7c7UAQaEhdkcrij5Pkwfkhg4dAn9wZ1gDPq3R7uRwo66aVy43XA1dRo6teBcMeJPzzm5zmVevxdz29MkQ",
  "key9": "ox48fHpLFuU8nQJ2QSaJpBQ89ruH386kTCSkKKcATFAemm6xYk2A7RGWiCTmDWRgZGBBhe3yunuCDjDL5KcikFK",
  "key10": "4CU9kZSX789wBCNbMfQMYKaxvxMQJtWFkE9cVSQ55ZyAecopHn3FvCCtfvuU3af7yL79RkmnQF2prMeqdpJsS5WB",
  "key11": "4Neq3BBawhFGmZQHAworbmjsFEcGg5cBbBNqJL9dz5UgT1ouPms3PznVBY36QQMMCY23s2SbWNkfBsuJjhTeooT8",
  "key12": "4ZdBSnRUZHDKmKZ3bsyngpFeBMzxcqipRpeuQTpzUSXTmNPTsNceoAdCXkHkbsjet51fqhFbfBeP9efr2qk93xYP",
  "key13": "2CjFfM3XQhuU5RL5okWzCTD9t9g1heGjNuPPSrjggivV4BnDPnCEW2xrT3zp2GW5zdWmLehjroUq9uF48m1RGmMr",
  "key14": "5mQFuxczho6jWhT6MRvBYrB98FvnVRC47V6n4vr1CiihRaLF5Uziz7bFeCgTQpzrrsMmF9VKYY9q7viUaEziRQiv",
  "key15": "ypwgaLBnC6uogabS5CgHR1D7LybHh5mYrPjRe7H23aeDHULZNj84NAD9AH8oMi25KvPaTPYCVjaDnpbr2hooi7Y",
  "key16": "2s4hDHXmTohnoLsSwhELjKGwsdM4e41C2pd2o3MPii5sGZaiFn65q1AfagWFzCv8PvycK7dsKZzWxZsx7F2Ue2BB",
  "key17": "5dycXxScUcp5BeZLJZxYvA1NJfeWPFhs8sKyEAB39ap8KJpuWNuUnzXMmEM6rxAR3hwasA4MfBGEH3jTPZNVN2GV",
  "key18": "4hLB2feLGS3fJW1hnvku4r48n68nDiVRa13h7J9eDbeZwFyHNQZ2kjviuTtdJ1xZ4nQBqm9F9QYKNuqWZgm1xGmt",
  "key19": "dGs1nkCDgwHaynenoa4e5j2ZGYRu8ESVEJQYzD38itDF5EiwhFHVFiQPzU9AapSCSuXFaQMQojHrgivDYqtJ8bC",
  "key20": "XDU2MVSjRi1dJnmPFZwXRFpF7hGqPWryp5PZg7D27WkWjGXmQvcMdvsM3xm7Gv9Yik7C4VgsTB9vjyZgoh7W6yN",
  "key21": "66NUeyi18Jr2oXjrPP7G45aJQWQR4wWn2fYjZwewszd9muScVzWCY4mouCGVs93uyPyFMteG2K6mnbGysb1UzgJ7",
  "key22": "4DtZhx2qpo7qTnp1DVGF2Zr6q1wBAMdpNuXyMPYkEcautrDqdvfE3Tf2RKd8Rrp38vhVMeYE1CHKjESa6BHJamyt",
  "key23": "4Fm7NmazRDhpc152zwL7RJtZKyBcLm9X5asJhczZnchHWcvg2RwzASgJWiYMDzHs5YCpNiKaD7LS7dyE3qDEEG2H",
  "key24": "2SP99LYruGzxME4qrZv8PKV5dSLU6TqZk9sBJNW2HL1mwW87LwgMQcPbxZjSojU5VzYYVqHgtD1G4YHLmazyBLso",
  "key25": "3qLUbQ2dXz6YyrEbsvtsVHnaUXoqULhdB6BhNkn2WXEf2AbRd9BP5Z9mMvUcXE5V42PJGncnXHvAVLtZWqEviRww",
  "key26": "51Hh2PMaP6hH4TCNYkCmcovngU9gqi7iGsCMyCC6RT7WkyEP6kqua6CAbXQfApzSiR3eL5BzHCtZgKwUYHHY4HJr",
  "key27": "UXFo9SyP3tRDnAS2WdtA1Q4Fvobx98bvkUDjB1aiSKbttWX4t8i7Y7srpGxQoa9mE4SMVV4SqeT8nV8QAALcRAa",
  "key28": "3zykqDuCC52o3jTVcpW3WtC97VwbRGRvoEP11GKZiNXRGdptBz6ySMDjV1syM9XoBC27T4oztuCHLXpFzx5R7kYg",
  "key29": "FshuNKFFrevrk9bHkSJCgAZUafa6Xb5QGL3vrwWDYLVDpTJvFZf9kBgPjEo7WoaHEEiokUjUxSjaYJpvALvYkDA"
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
