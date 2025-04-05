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
    "VE1cXiHE6fbbaWTknYCJQLZofo1dzyoSzM3ErXHzog3XJ9R8QkQF5CWE1kMAqQ4R9iyNCB77aLh2JMaygJoEKtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eBAgyxzBW7bEJQEe2276tRYNSfgHrCczrzFZ3aZoSRLuhg2LF5afgvPhPfXaMFfdnNtfWdiJbEJEjWjwxkZKPMd",
  "key1": "4YadjztmJxqU6phorSDuYXpJ7Ud1A3ydpdoYdpmEnXwRQ8yVWSmmuJgUWW7fufLbCtYv2onHMgf3NVnBnj2aYXPg",
  "key2": "218PBDMqzJhcBckxFA811rBpz2pKkqV1S1RSLvG6VeNsS6F2TttLjmpGb7CowZxCuXuRpTsra8BDHQdgMxCcKzHh",
  "key3": "51Y1GW8d3n12xo41yFx24D5RntneJbgJgPsbeev9SZbt8LdxCs3YCcUHYSLAPaMxfLCauyEvq2EB9PE5Rb2Rh8S5",
  "key4": "27imgmSTEyjUqKPeqAgC69VDtjrigCaFeJrTzxeF3abWGU32M1LKJ5KdVqhpQZ2xnpptfFpCZoLW6Sb6qHGZZRLY",
  "key5": "4GRsYUcG4QNmzi3bUn16B68DRL3gtpftwuJm5sPyL3oHMZKSTo8RVCVQSTAHDLRwk4u8GEEkRWH35qKxuT4VrJF9",
  "key6": "w4H3C8VVCGanGm9TLKJWuA36Dq7KEgntPx4P4AuPjFYBdvDoRjZ6M7jRNaAPjs9YhQpUecbJHDJULoPH4HgFRev",
  "key7": "kaUhgYVQxuiEMmXLhbCv41thZX6dp5diMP6E98QUyKeziLwR45NTYDG7xMQqbcx7W3QnQsJJTF2SGTt88H25Bef",
  "key8": "5PUVFpayGCYXyLmAnAPDLmS3wMYCDLL8mTixwcf1SNF6it2zGqBZurrF2J39QvDjSDNv5JF3X4qTXsNhQW3xuYTV",
  "key9": "3iuPGyhcyrJPnwByhm1bYf3dxGWT7DpUL99SR4mYV9DT8AgRSRKzVRbTBNtzgfbDtxKMJ1hZfrvDLV7oUXFBC5ah",
  "key10": "3j6FvAJsh2cKvsMXDVdP1hKJEqtxjBLV41hGAyJgL6DPJm3q9vQMkaZDGNPu2HQWfCrPMADAXHeuzozdyo9HkCHR",
  "key11": "51f7NNyJEqdGLVZrVuSuw3ccAEhzgh5DW1Nj1SNQGvAFk5gBdJ4tNmt5Akd4332EC1U5sq7auJSD7DGTwcfXtGno",
  "key12": "5WXLGw9BuDu41ibqsLrHuQCYzVm6XkxSmi83YVZNnQ78DGnam6tjZ4bWwDd6eVn557rkSQr6mCLTLgbQtARk8ZHy",
  "key13": "ZHJrgsE8MAmEXToappezq9gVLZRzjJexYoWgyvtkyk9yBD7uWqWbXVc23pZDwgiiL5hhzsryZ8qqQoBv2Yka38d",
  "key14": "2PzTUhLwtxHdFvei3NrAERxPVMUUb5LUXexWEHeNHX9AmySmKiuH1xH3m9psQyHypsNU43bodyqMCdKaXaNayiHv",
  "key15": "215MU5pGh6hxd3TEUeZ22vw2rmAzsykJDocRA2eFMo82VBjghfLkK8LgCYQnxZ3y9svvWfot4Afq3HBXqSXh4dbb",
  "key16": "pcvgnBwSy34bhRxjjpr1iEQULe1Y28D3LUpBADbxMmP2b52FeYtGLSkhDbDWc1krJkFz46QkNrbhbwRbPDySC9Z",
  "key17": "3bCjcekK5BH6Hk3p9wK7hgy8azMpAVnCEb83EGwJvxG256vV6bhaZXTUz6h7bCBSftKWzk3pMsxvMzrLEouPgopp",
  "key18": "2MzkdKkMghaxJZwKJWwM5LFjnLsVrw58zHZbUAhTaNan3dB8PCbUSzpyAT2bCKgUyGfHFoymchkgLeEq6Zw6RRKQ",
  "key19": "67ZUVL74A58qQMbHsgoKgRArmpJP8QjktxA8Q5THJHD5frs4PpVKZigbqD3L3CbMHmmPEhA8HGrVsJYEmS3J2cJo",
  "key20": "5GFXZVyMrMSWvfECsCFLrUX7Ka64Fc8qk5ESb1dWsvFghYhSGfY1rgbU1WeBgCMzFdCzDFQhPghiWmUasV7EFamt",
  "key21": "33AwvnAcQnxeuxwb7fsfbjn9CpkG6F8YgjxzBxTjLB9deuhyo6BJgm57R3uNr8tFhfk75zJQjLXd1Wd3tQeC8a2F",
  "key22": "3Baub8o6HH3Vp5s5xQs8nypNR8Y23hzKZ5az19egk3Fx9Zxd9YVzwkaDUH5AEWNzBuNKMAQXh6VNtbSQRDc8BbyS",
  "key23": "44iYVQFgb8rRtyv7WoMou8XL5PPmkukHGeTFNqsBymgc1pKn4cXQ7M2vbASxzLUWYXhjYJ4Y1gDCExjMWpnDzLMg",
  "key24": "44hUYufypCTkfdjq4drJAhzm9SeJ6T7GL2go3j2BHDqw19D9Jo9h5E8Fq6aeFHDQHdZy2PopS5d6aEUfT2cRgb29",
  "key25": "5v69gCX1YJmi4DTWNCnqyiJuVQNm8mgQVtY7nst5YURiXdt5wG2wpYdS51hH3ZR7j6UAhzCU9pXm9iSU3Fqkb8AE",
  "key26": "3fEHg41GRfGdbuqb6e6qdtcVo2QDPPDWKk5YzJmKMJMrrgkdgcHHD2NmuB8yZwUKgCSQ5bU1vF2p4Sgio2oPVwWx",
  "key27": "22QwySBHa7HXZxYT4QDubrVKDJKUrMebZtM9wcmRc4buUwu46SQxhhJEwk1xjuesnPyjRxinpm5jKXSMscogCPVs",
  "key28": "3F2hzk3dCB1bL7SgGpRdnkNUt2y2ZjSsaWZPASNMCUbwpry1epH4FgG2hZdRebfAmRmC4SU2KpBisxTYEuewmFim",
  "key29": "2QpHKk4M5yx9ZduNR7Gi9u8CZWvd5VEKxsSGejdQ4W1PYHy5oHk5uutLMYJ3CSkbfXYMMriyZQocPqvCSQkkNwJs",
  "key30": "6emLAZXKPpbra8EhHqEgHwXSWjTKN1oqKhidAKtBkJNTvqfDQLNyjN9hpXDnZdAScif2p2kAos7gWorM2MvVnaS",
  "key31": "5MNAZzkxPvZ56tHFnWSAJRq4vMQHRSVfWiKfAYns4RpAfjBjwFZRhiudda19LEzQJLWSibtmJD9jEzpzRKQH6qUk",
  "key32": "5KzAUMVg98rGqsUkpmgbYyGCUubbgM4M9upkzBc1Kj8ZioBhKd2QhRnHwwFLrUxnXQLxgREhLzxa5KZcK4PQyJYU",
  "key33": "27BgBZV7YiL1uqztYfj4A7KRC1XXBsyayMAK8uxKxWTEV43VfKCUSD3goH5iZhstS4JcZpAefb8Bpdfhidixd88T",
  "key34": "3mFutHEGA3YeoqGEonuKwNjcVmYJEa7GpLXfRHcRku6AcFgo7MKeKvgBYGJ1XZLwjvwy95vZvcSGEYx1f1686dSg",
  "key35": "3YF5XyCjhokr9a2KQwJhRbCAHgtKCNK4gX51KcLKbDkJvfW1EE1Dapa5apqNMgGkNH5XSKJi978wtb9TgFzLyjy2",
  "key36": "5GqLrRSe7RfbMWPdBXGMTNZX3NSUyJgDag7bLjorzuxbRrWZHDZBm5ZAX61ystLvUA3qpAKyybJpa6fLzz3oJVXk",
  "key37": "2Pnzf3WeLU2JfX193o7uyfttv2DWkSy26kgEyF6ZFtMcPhMCbM2DVeYwtfB8MJ9eszu4PfJT5mq2YarchDCX9Aid",
  "key38": "yzBSnhiWtwDmoYzmMYxmetxTY8Rzqh5JXepF4bsbimtGYGQtRkr2q5LwTi7mgqMpLnkgSEWkRMUDUjn3mqa5s9n",
  "key39": "3tLWF5ss8WuUr2nFL3fn8yYjQTV31p2CwTx8xSu3ST9UW8ux7RdjxeLRTQPZvAUChCQzCca9qbXmQTo9ktwnJJuw",
  "key40": "29MMNZ9dr31XSYtcKYeAMyFHiW2rGQwtryvgzftgA6YLstMw8Urvq5uCU93DPYye3bv1bzkjHuNxaJcqK6U2UbET",
  "key41": "wGWTtYrkdDUjJVzGwJMiKaJBN3Mn5f2ZeVgHWnCzy49TDaLUrQDe7suJgaLRVqyjmv2D536qWUxBTsmu13BAP9H",
  "key42": "4NZLXBMdkXeySCZcXYYeJVinY2azyiZeuWUq91ce4hWGijpRWJybDqqRpxTZfV3FPeNmZd2jhTbxnjHiJdhmw58B",
  "key43": "4qeXLpW3gn5GfXWMEqK2zBCu78XHvnjr99NmtnjoiqjikVGVy5AyJBtPmV7fXDwbHqN9wLb2gZZS6tbkmQrDzU4z",
  "key44": "2ocz8csdK6N63XVXcnsDLVTLzxYsp1GS96umRqmKjswYeDCKJogFEuB5xQqKcsqwaKAiQRXg4CjBLJaHMMv8XeLg"
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
