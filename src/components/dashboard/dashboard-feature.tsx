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
    "5wHcyBMGTnMwaXMGKQVpzVgxoJqwRdMxPoufw5ara1AqbWUcD5nvqgA1M6m8AsFVfGH9LpjkJgG2XwMsL2pBXRCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31mViZuzre2HkAPZy6xtpMMY7CdjXNtKYVavsWX2VQXZebrnNaCMyNDFFryxvVLfZAVVqo7Z9Wjxr9xMogwM3wMJ",
  "key1": "2WDuXv5Pu5nfBDQ5DmuMCj9da38k6A8KCY2eCSWcePkzKvAKYLmi3E7xQabFgzieYLZEbbRaX9V84iKtzTqccdqD",
  "key2": "LGMrXBYe8242gtLDGgKYiFVjbUGEHpYaFpFGv3rrjbpG4RAtyq1USgkB3dkRWXzqsnqdy64qChzdto1JJj2odJu",
  "key3": "a3438mP3o7xy16n6GzQPs4zstcqmi2xf3Gd7mWaM9sC4TJteEBMxWnj8MdGaL6zSbDy6BMkMXXGSTCcZdy9ELW4",
  "key4": "5P981g7EPhXXGhga4uNZhDMRB8h4WAb8F5UgLp8s1azp71WCj6abotTfodC9app8TBZHhPbX7De2b6qFoyUARDoP",
  "key5": "4ceR1RL8amRFQxgi2k44jKVQzqRznn7vgZtgkEah9n21yWyr8mrbzjeCJqKibmdYjfM4F7QorC3YMCRwNCsikBR4",
  "key6": "Qse5Zed8feU4df5mvCTo96He41U9v8ex4vxMSoxQhxHi9T3KfSwtbgeAeSBiTKGuSWGKfy2W8SxhZsynek7aTmj",
  "key7": "48G2ZW9FPyRhidxS85j3Nhtb2BvYGLaYnZSZcBgAhNJpJ8vuyxtyvvdSsmbCJjgUxZV7ARWQ8rux5XFSKxZCrYoX",
  "key8": "5CfunwRBkG9r4uQPGhH4hk5HNoiQkYYXf991nufvjqyC6R4Tv9kU68gjL29QZosmQNuBJg6CWTZB3JYGWSotGtJf",
  "key9": "5TDhJjdDJVFkjkeR7bUErEmKy19LQUdsyj7DyEMpYimX3CkSKwnZhtUjAm12eYk4heWqQ5GmUEnD5RL8MfQ6Zv39",
  "key10": "63RJJWwJob2tXmFzisFRU6dpkoVadJCJQFPkQq11evbDpvvSuLjfwKwBM4iUECjiR4Fg5Xz6ym44SSwVpP3CF3Np",
  "key11": "3m3PsSSaXhDdxyDgU1yW9GEdDgMgG2VUHdAYaksGjv45XSHBQ2johRfGKT11DMbye9j2nMFqm48QQovt1zXe949i",
  "key12": "2jQWGoTo4HRBXaJYnPEFpjgCwJDdzXWJMHQ6Tcy54fyoWxdQPPX6msKQYRErQqLA6zuiBCBNmieZPuY1FqqLgEMr",
  "key13": "2cxmqmHByH7spEq8fX64GFUYs8pr8zpRdFvoAsaLFy4XCLnpK5Se4n1EJnY1N5nLJKjWQS4qJWHEGV46J3GNeEK6",
  "key14": "dLshdrfHEhUJK94qhx4q1sCbSgATRJBFnLo5cMeisuqmNPkZ6Lqjg5JkXkU9YSfCfUyaBcApiEYio68MbsGYn4J",
  "key15": "4g7SKJVMzdyPxxzpWkXUrSAG1qDcckGd11tCh26CKoWN3thWzeee4bEgoxvoSet4CegpQAV2HBGxjZH9FP4Y5a7U",
  "key16": "BpwbRQ6yBwnBfSnWZiw2554WFCSxe6BgqRanqK2Drtt8cwVt7YrwH7HpjF9ezUAGUs2MNi7QBKh9VpaMNu5p3zg",
  "key17": "5ZviUihztbW4LZUgPzP7j46X8cxG3iqZs9LatD8HvgVMUgvyYNTFW8Gp8JArhmGYedY4UDjiU1mWoV4PyQxvdYDr",
  "key18": "BTyqwncYqLw9Ds44pmLY81R9Ux6gArRymMaZ2X3EaaRrh8U6xecSQLdagCDYGh3SxNXkQ9xdbhAAcNzSN2m9Ubr",
  "key19": "5mGeqBoD1YQcSCYA8FoWnf3nmBvWSZNqoiEA5SKEgfHhq9X6jgsMHEKDPoJkSsRZgP9wxLYdzrjLEBaLatdb81dY",
  "key20": "2j2n2o4aSTuFz8bT1RwgBeKENM45J9DqFhWNYFa4qitRpEyDay4sjWD9GPBx3ef4m3DaiNMWLk19xVSNQfAu8Wuj",
  "key21": "5tWpwH9UeygXxgFcSQShvMoefMfwshiLASj3R5kp85mxLEv7qNQqGGB3njgUbv6yJc4wpdZypMT4ppfZZtGL5oUm",
  "key22": "4p2o41wNMf5pq2vDASeMDFpzCJqRdJvHzH91MHxQSeHixazcC6T7a5NV8AWi8VZpVkaTFuc2Mf5XaNbB6P6SrAn1",
  "key23": "2i57VfNRtbi4q8qoZ5HgdVQDqMajTXHbfxFtVitK4fgzh4bdtx3kMNpKwcampBbADCgb2zmrWDVu5M58sf6uxM5S",
  "key24": "3GRuPYKqjVjh2ZSQYo62hSgLTB24bsYL7r8By8Dvhi4ucTQL8TYJrLDpgKx7QEjdQA18fFn9bUfvEB6WLhx4bdqZ",
  "key25": "4Te939NkvWyvcArB4RLdMjosGnjcB4Hz2zsx46CJcksav64fM1ZaAaF7AK6fHtzZS87r7tSaeESsaEuzr7UDBECj",
  "key26": "4GGvnjEgimUN9tfU84t6vyfuvuqiNPGvoj1F1G2wm2VkfSKm6qckdPqzrwwzw2gQfkTkRT8Ns5sD3WnyHVbQQnMN",
  "key27": "411UZkFyHVyoyawLSeQnNu32r8AZf6pAHTCEhV5rJtwLZBofNMRM5B2i62TKr2avymPfuLsWcKKMrysVBWShJWwT",
  "key28": "3iZQm5NxEc4b2ZUfGvnuaBYKFey9GupbrVauCux5vheMa35JXekYVYuhKLN5v8Msh4WgC4uNpXFuHgTVmmpHQLu3",
  "key29": "2pcNKsp4GvhRu9GjBMbfsNB1cbxbDwZR1Y68dcLT8euyjqF1nyk3jKpkCLhtdiUxSi6hakJKhaKi9MybKtgPUouE",
  "key30": "4CqvHNwFPuPPSnMUdAaDwvL1VFWbAK9C8qM6FhqGXgHtb1vyaV7sjKXyf1uWnHBH9pqoeUZtv4uUxu8dkGeYoqoS",
  "key31": "47Bx9EzjDbeY11b1nzryoDp9RcdGoeUh5MdZ3KT3yzyPgBVrtx56j4Gyxthw7e23cbesGHhNutYkukUy1bXHhaFu",
  "key32": "EduJy9LbfzTMH4juf2ZtoVtEPRF92FJFM44s8siSj2GRh6QfJjzqf6ehKP5sMSDDj9BZndoS9Nhjm72BWeZcoEU"
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
