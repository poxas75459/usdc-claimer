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
    "dhaRxAZPQK8cqTKTNzh61S3vzt3sjipj5GSQc1Zon2Nwth78KiMak8yJV8xP7cypim1tvP9xViP3c2Vm2x1VaQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fVze49cr9oQQspX9r4gaUwqLK7mmm7nyg6tWxYbbM4avrhXvD9ccMSZDdmyh7yxCeSKgNSgnikqeRPVaHGVuwQo",
  "key1": "3xYRpS1HXw32hgTBnK1mmxzXtndjZNZUCybRjERCZTer9FWTrf4yczdGVXP8KQ2zXPK3rytsmaHfFSMZUSHNrpSU",
  "key2": "2nbrrZ1QH6ZhhzarptWRdhv1j3Mm1VgNHqh6hnammUi6QnMNtSu7PLrg43c7irDpjiEc2rFPKdMiUw48F5BKYx7e",
  "key3": "4vK7a4UZ2QCBga8Ass6HqNMwiU5Zqo7fvGPM44UDWrrA7AE32KzCpfntx1f73wsuJf1LYistBPqQxe7TGJNxH512",
  "key4": "3U79X6G1TbxCammJvVbGUHL6DMzqArJzmZnkpJxM8b81DpXCvu7eU5R39hanh6opEY1ojfSvwXmZ37kpNKzMkZc1",
  "key5": "4mJGAD17Z7NqXzNpwyRCfFwjxqn4FbkuKB6Qgn9bRC2XA9GkhVfmafkngWmibna2XHxcVqxcg4LABzseiTJEGF9c",
  "key6": "2PXisi4YBdyphn9VdzDRt8R5NLRqYBaoErW89sY1MvdGkjpEXK315GzMqyRw5A6yaNgTvDQvTZSwPrZpJUTuMHao",
  "key7": "3tpbMo88TNk3WxoVDZsj2jqraewy2DPQLSvz9JXy9AnKVse2V9MyNaNCEhK3aJj8KnzrMRm1uJLn8o6ZRTe7Us7x",
  "key8": "48XQGZ2Y1H4tgaJ3FjhN6FgJTFThUMyM5CRkHy5JKKMxhWoZbnGtTfMM1bkQUWXVNUSGx9nwxf5RyHzqwfd9ACVU",
  "key9": "34p5XEYZFYdp4xRQj3yFCqDozhn4H8iPw7a7BLcNBRRWUVQ6QA7nQWJjtRj8VjpCoNobngKcDdf3Wu4drkzBoHAh",
  "key10": "3B7LSdrKqanD2YZiBZsLCbLwrAKqUfefWSMwwgzmqhnU78j6MwbjHK3vxUyLTfVGi1oQmowxgdqWgA6dWvq7XynL",
  "key11": "34kV4zMDDTwpK5bQ2qqxsPmrPbk47fFr4BK6npCHv4yowZXKLdHwNECfR6zrL4hpcvqHe2zsSCJai2K6Dmh2TPcG",
  "key12": "27DizhF5XdMXH2PBDjcDfgGYHRAVP1wcSQ1Jz2ARfYvhsrmnVNRm35J6WqVG5rTgTuU4cdib1QLW5AwnSbBbSEwE",
  "key13": "2LG2vMeVsQbPJ3zu9GCuhKneyjH8VoM84zkqQUyHeiV4YFYznqWjV64CDCHEFcHLXftbTAZY2H3pNPcSPPJ1dKXL",
  "key14": "riXwYvbxb54o6Lwy84uR98U2h6hSrPAH3qm94DCoxfmXeooTv4gqkoNsSJETzLzVAMtKXa9KpQxbZLJ8fhqikg9",
  "key15": "BRw3DLvaqw2EUDUsrM5mJcPxvT5kZnnsA44r654vEpEx6gce6u9nzrbPTZkiFHNjN9T2Ltsp8iGmkzra56Y2ymD",
  "key16": "21NxRomfovKFWJNJfA4uWnvbwEoSvG97T2cuwfguPE51vuptH1knqyzFNCKgHFs2uj1cLN2wEVi3Cux8sb6GWJnD",
  "key17": "3jckDqmjuNbCKzLATuCeErnHd7yBzuC1ZNfoCfyBy7JXVoRbFEEuAmtNzRZXLwr8tWfNhfT2LYy7qTtbgUyYuD5e",
  "key18": "5aAuq2NGbXc9SXAGioC2NEiLSAzvo4ZNehFoFk47GQTf4rsaH3NCbgZXScJ25BL3JgGt1jgy6aWvFhfK29zPXhZa",
  "key19": "4NTYHcNQe4hEQ9dFWKGxyYAxgSPS3fcNZehvQiipHT4Vh2F2QQzH96BVPM8eSvTDiy4FyL6ZVqgg5dpwjtzhtgTS",
  "key20": "4eH9HSpdewSx3nyHBZAbZKZ6YHzagW6bjS2x6xwyeYMwfR92bC5LALCUYJQZEatPPk8pJEsNJ1HGJHBUQ8weQj5p",
  "key21": "5T92u53d4nrkFDaCpjRXviMHPes9KgPkVD8LNqGwv8taoeeHNXQs4Y4A8URkTxmL6VmjmvgBGSt1JDBVQzx5S3Bp",
  "key22": "2awjmVXnzRUwAHhJftfPCGovaPn6VEZQ27WL5B6MJjTy2Up65WqDgDyBpoqaZ61hktuFHVx7cHQZ6J6XLoXYAec3",
  "key23": "32ttgM1WQH9K2ogYaKZN7Wo7kQWAXTnvgdZaXRS67FqKoVwyNyYTqVwBsT11iYKLA8UAmwNMyAi3GrGP2XdWvUhL",
  "key24": "5w9A2UZt4T9r2LXUvNuCciZA6eV65cZ95PoBeNofRi2qkhMFCp2gMbu2yQ8riWWwJEgtaKYfbiQi3B7EhNJvu4FL",
  "key25": "5PB9DEC7x5M44oadhkSVkFQVhCrkLC9bso7b1VZPUAq7VHrPHMVgU2iRXLn7jJu3yxC1B1tNLHSXoAagXJzCVJaM",
  "key26": "QuVdw1XZtvUk4mrwufGUmyQdxvt5ZTkS7SJJjvEQ1zxwGwZU3K39UFJUbWuWnGdyBxP362bmYjNketkFhwGtgLU",
  "key27": "4nsfw1xbQfAoL1BZhCxtfV79DKTysg7UFWeqJEbpJ1V6De4nSEhErJWc7qLyz716eoq9w3t2uCinv8hUczC8hRin",
  "key28": "3uE9qCLg5db98vE74VnnFid74F5Pv21jrjVX8s4Z4NVJVaVZBcJE6MEq4UMZgHjdvTfm3EdsTgFvEwnPDZD7Uz45",
  "key29": "4yoFtb2VjaGD2v69912zJJiwd3PdhymsUCGshLRVgp6pPYr9jGbFDPquKsbxkCriE5F71PTyJEm9S5oeytbQ5RV8",
  "key30": "4hc3ihQhEMAh9Nja5c95WSwQVpoWEC1EqcKgwhFzhhJ4hKqRQ6brJposR3HUfrPGgz8pde3F9cdxw4VS9JNe1mvB",
  "key31": "5r9EyGPoCDFeXK6vDxB647fBMigm5Bee3NtqpoJe3a8iF77Q5a11PPDPWrAUkGgko5jGg9QDhobqQS8Kcime3swH",
  "key32": "332SUiWmfygCqLncEBbQbk3M49ziHsEAjtAp3xFyXdxJVMHH1RBjeXNsVehRMt5hNqiyVN84qX6BwHbtM1T2VB4j",
  "key33": "2ywc4vJ33kkEd6dKthkcX1m5FKU8Z3XVoLnMdL5mdx8dr5LbMXdUyJw9BD6maizn5ymDJJrKV21eF6hk7STKYypC",
  "key34": "5nKWSf9msJHcEsfQeA62UfREzSbo64VzY1LvhT5mqdmnjiRQXXTGQW888UoTeCwbNfB85m5dy8N572dEU77djbiN",
  "key35": "3cqGpBaBkU8yqmzomFvKRqWpNczNaDHnpdagLxDmqavBY6FkFnVQKQjMH4hX41M2uPwRP6uUyZhNVv7NSg8Qsfim",
  "key36": "2ghcrJAzRhPV5VJBUhxSFtdBPz9WNQ6HdmHBJcSScHdr6gWVoNWZihzegzxynWuPZCUhLo7UJ7NRXyBmbrHxHVSU",
  "key37": "24J6AC74XNRK7FrAbxHS4KUMXUN6WkczxuVHy7Tp2v9kNqScZVAtCVdUPM5W1GZADTDxEix2uCytHgVVZqDZqvT9",
  "key38": "2CAqd2VzTbpE2T4HYQgG1MJMYiCbo3ys6uUDBn9J14XmsLdPqiruSVmzT8uujooitAZz7r2DGjBwmQmUcgg77im7"
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
