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
    "G9MRN6hYD5CEv2CEBgH9sRas4Wr8K8T4vNPyBpRLmXy5qACiz1GHaprM6fcZmgi2ah7UEgzh6jtCANgUXBq4eM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dm8KpJtp8QLCAacxcCnbYHg3Hn4afeofh1dpTs3aEgj6ZQieJGZVBkycyCoHRv8Q1ToekXysh5FMgKc84ZHDBr2",
  "key1": "3stca4g45Z97VTDwF6mnRm3ZyjcjutoV33QN5iRLLDDEbrHZpGaReZk2shL3Bgdy272ywFezGKmvZ7PUPCGNfS7Q",
  "key2": "2kSkRNa1evYoRWAdHjzgBTim6qUSopAd4xmJ1WmYawCj54nd94YLW7n6DzGNgEmJpwPxis7fCEj8BJ2j8x9uBcZf",
  "key3": "127BRBcEqcCqKmNaSPGFGbz9KiEUYdnTF56kER27Qa9CGmtXVzs96xtoM2g6W6kHBJ4X6GneE8kp42SgJjLBNzch",
  "key4": "YS81UmQ1oL7TFsPeJeExQnsNeMnnpbJJ4nD2SPjKRo9u5de4wP7D1r3FyF3Er3SbLzXiSgmLS7KVx7ubjqeJgmF",
  "key5": "7uLJk5yHh3qR3VzMt26cw45b4FPWJPQi5Dx7gvvgdSF31EHD7T57gQaqGebyAtrPQhoCpBUk7y8omPmWfyWChAR",
  "key6": "56Q5QttQeX7Ze3JBLkDV2cpyE2T6twPjJ9QsVb2ERFXQUDXjNnsoit3RTc8Y1fYz1wWQvBu92s3u9ayBzx4VwEVF",
  "key7": "2RuGP5buKYuyj6AGdTyswXgkh7Xf42f2Egohu8JAYCXVLvkqq3Cc8R6CvAAZ3ob2bkJGxAWKsDtzuN6Ydy8UuoiN",
  "key8": "2rJM6L6edyyZZ95DHaUq4S1w7tiQtC9b96mKo9pyGsdkAxhXh2pRQLF9YhNbKVrKU9CgtexayZkfxdkN1DcN3bBZ",
  "key9": "3iB3VqkjYh5wjUbNeRk4iQ9A5XAvthQqviYiZ6jWSfAubsLRBRJZh2ZkDsGLhXWnwP5PBnhRX3UfAvcqmdCouFgB",
  "key10": "3fF2uddCbt5AekkKWE2FFBeQ7w6VTe3KczeAR7dVvcrnMwT2QxrvQULMi4xuE5wUb8PVv1f2ngjdb5CbjMYcKP9Z",
  "key11": "3kPAdmQtd13V6kAduGcaZRc9p1gFBbDgxzey5awNPEGBBQ3jJCCC8xfLd2nLTAWrQQNZ5dZfEGeT1UsYJbe9tV3g",
  "key12": "2Htudi52cnjPA4GDYbseryphsv1x47jAq5TAMVW2uGzu6zpbo81wmgnXiJvt25AYRJtdSa4hpcpfXnrdbYA4pmM3",
  "key13": "3SHYknwS9LXqUTM6tenYxCjv2sFQrLU2N5qvR7K8eRzMjPcNJsTjzxAVZ5Mg5NAHogtQVa5rSPHJC45YR1ZdKEq7",
  "key14": "4uL6YtQRhpkpHdUCfDMVnkCkjrFZqKR9Sn8WgPAzhv7QiPTD7Y27PrrfvtTsadQ3b5xpj6tyDbn3ybavkjLQe5hg",
  "key15": "3bvrUajEi4L3kNUU93ixBSHABedu8Kh6GFVL3wWrd8JjW8TgULQP6hVUsxb4vEXEG8nWQQizKe7B8ZCD4Cq5h1Ak",
  "key16": "33n7YBY9KSRU4BZnMhPJVKrtZsR46PU2efMCWQQ9NLRQrTvpohuyyg2MvaCmFKMwEEWCxmsvAdtxmHAudqQqk2aa",
  "key17": "4FZEcAqUmQk6RU9LKpNsiwxBzV85VZXW9vHAKPmJPv7HrJsdJQXXfZa8Y4zBf29yCBVTXfoMzd14MnA8FfFZdNoy",
  "key18": "3phREfwUWZ4BYcirRDL5mgvj8JWHjsNhkcTq5KwKiU9UyK7wGUMgSsKHoVFTHKojmJVSwtnARpnQrU54Rkto4vek",
  "key19": "2Ee8yVAmfMR7y62op1Smd1ybaM3uDtqXfeQtHgQSpbGNRUxcDLUVr59k1QpgY9cfdq1MrR2fouV48uWKyZEzjWo7",
  "key20": "2VQk6sifTNaSkx3exmb3FGka9RSMiWFkAqwjeexnVX7XpHanzhZHt5u4MsD7tJPwhaE7U8ULQTG71Z7PWgr75Ee9",
  "key21": "3sC6WGoQL6v6mXtaMSvkSqPT8G9s35HLjKV7MX8rqvXoqiMaKEePbN4fFv65gh64JWa8n4ZpNfSfzF9fCKM9T26p",
  "key22": "2UsM5r8tA4UhauE3UZF6Q3c7oqY4sdDP6aCbjacWc62QyshuhqMBPTrexJB7LMbqgfABe1p9cfCUnYQnHgDKsuW9",
  "key23": "5r4A4e6tgJq1iXEUbHMgKbRGdnP7KCpP43YtuXKgm2DWN2WZc1Ee8XsLmmTPW5JGnJ6AwMuDQwrfd1zeEZ1qJdCh",
  "key24": "3NGjd5jp3ZKop5GapXBwsXm2fkSdabLuumPrWm8ic8E3veqGBsEPo48tAn7CXt6vc1fUTtVUurAEGP3Yz2LRc8bf"
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
