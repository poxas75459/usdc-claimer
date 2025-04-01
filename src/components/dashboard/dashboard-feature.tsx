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
    "4BsPY9XHymUjw7tJ5xFwZyRNQYpQAHsxaErwspBLJCKQ276Swb3RbFDdkqnk7VqH6hnNbsyJvJzpKGboE6Y4cxax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5okPCnHSm3mPNdh2djELGvJpaXUm2EAYC9pZz2J7SFoM5BG3sBLuBVLyHDeVkG3c4QfC3ViVHrsnRKfsStDKDJ93",
  "key1": "2Q6enWUWHbsbYYgmrT7gTyA32FkFm5VCYf7xic4SudSKFe9cPDg2xUeHWUFYM2bPmbgX76Co4FQYvqWsSTteUbfr",
  "key2": "D66rU36dAca13Cv5A5WEL6XPfxNrokJdss7SycjQqzcq3JZPukF5ehayT9B7jmQV4ynEY6fRu6yuAJhmevpXKGL",
  "key3": "4N3zTCqrqF8YJTy5evRy1fcuidPXSyk2mA2FnJSCSK4k4r5FBuoTHLvb78oJbgrkUcuVkVvTtc4eqzDcm2Ty4Sh6",
  "key4": "2ctzHUqM4bVeCPzQbWuwRYPm6v8WMPLYPh9Tr3kVKi8gNXo9N7X5J5zfXo5gEMbJyQz3frwmNTjWgPrF6NLnZkbW",
  "key5": "7SjVQzZJ5JbYfuQvGc8fW9Qamr1P4m86DJggc8Bb9sKtRnoCwTWsrFFuDZAtFbdihfEf46jXuB9AntYrLw2kEHh",
  "key6": "44MS2eZwF4euR7AX1nveTGLUg1rSd8kvzfsBahv2Zt937TBS2cV6PgyL3FsYLv1w44uqcZfe7eAxiFjRdMTBfcag",
  "key7": "smnHuop2ckpAwDCrtNuKYzhPKep4jzCAyHhUw2BfCnm7UMPndyPQ1zR1qaTyhgMjSHbjvBJDKzx8JCPhTv2BHXB",
  "key8": "e8kdA7VyRQc3uEb2RwnWYHdwaWZwh67Lcjfyw5XAqfvqJj2BcuHzJyEYM76rzG7gQj2SXnpSEBqDKfwNucP3rvM",
  "key9": "3EGefQzPuK5xJrD1ugVa3VFPKQq6qciymV57xDGd4TVbafGHGBDbryLY7wz6UJiWdZeCrmvEKK5WNnPParYf3vWH",
  "key10": "5Dzb79csk97LTjZcyA4u4RGLo1TCuhuGpSaUQuc8Zq8yxcxYohM5cbEWP3Za6AVLwHbYsoP8R5Xm1xGD7xr5o6fh",
  "key11": "2zBQf5wiLtARDmz9uagTam5uK6oRUAzeMxNqLvV22oeCuEyW8hCjiKPZxq72QQiUVYKE6dQckwSuEo4DQt7GAGjG",
  "key12": "2cWzQGJTdpe8xGZLvHHSqWJjJWDWrRUyNjwe87itXbh2UZ8rGe8UXACY7LFtuC4DKFxTtJ8J99NeDPR6RKpAsFFP",
  "key13": "38tKtJbWANwWCRqY4CkT1Z233aNSubkbRcRTMAsnP2RGPWSn52gNtkeHPoaEdtN4vYZKWmu3Rnh1JYd3Zb2qgxN3",
  "key14": "4dbtzb3QP3fL2McBzC9SBNu1ujnBTfE34494bG7Ks98yKHDcjtdyHxY8PkwGXw1fR5iUpLEaf6nrSUBRNtHvhnuz",
  "key15": "UNa4f4GRddrig394u4Gz6VVsEy6As39nFzS6L3DTR1fuEGe5QBchauuSewrmpNBN3sRCKwNwepAACzD9ji2FGVx",
  "key16": "62e5idDYUtxAhzbdb7A89yw5WJ4m5HfadJZEDwywPTN49RnmXKa2koDFr7QBKYvxGcHaBEYR3LqU1PZMVvbi4v4R",
  "key17": "526EwRVWgffm7qwMBKMLWMZUo8HeEMF146WLPbzWPfAYPhquvLjEzMGi2xpT5QuKmmHoyJ72DUjpMZFM5SrZoqxN",
  "key18": "BbZvn3eyhRSNb69e16AbvwzsdVd8RYR7risircgq4a4gNvzhDcUqqNtPyMZmisAAEwfgDKjGcPcsuCdBQVuvx1c",
  "key19": "2ANWjgPgnnfcD5D98tEudtcvLkLYHF7CYvxzW3K8arRzyEAeWNvPRqb5nJLSD1LwtBhxYkRYXCfPoUnFXtihSpqz",
  "key20": "3cw44L7kU9XAGEvGx6XTnWc9mW3F8XWJecQPj6kWrKi1nUGof6Ke3hA8Nz1uVztdtjNckGcn1PkouDZBnitkgsbt",
  "key21": "3fzvH6JzJy44FFJHdQLpzNsetgpNUxLk39YxQs716oThzAQ1tWWddfjYBQ9bimJgaectFmWGYeDTsHepGhTErC3A",
  "key22": "4TDa2WtUjRdZy19rL8fLJM3dQaMzudW6N5797T1BHjmFeJvEhupHtQghbHoTCKSuHWvVPd8toxguBNHWiPYkwwdy",
  "key23": "41g3UHcFfkF2PuEFR8yEScBZeZ4wAoQDDTrqq5GdKCzXxa54cQmteHm5L1UbW1HJPWc4gjt2uX4QdS31nrjGTCc4",
  "key24": "4nBDY1epkiuuSCzGRm2ywEeKXncGHhLPwSNQpZvrkNJFVSHgv9AY1x2GWF9GLZGq7WYw2QDYy7NTWV2Augdh7o3C",
  "key25": "2L61MTEHrx7r48ww46SRwY2nNdJE7sS3cjMPyBG9BQnEk7XA3kqLJsbw6qoDNkKrph3TsTNoDNsJpWMynd63YNZM",
  "key26": "GLJgMHo9K7efEY5k8pVuVMsuBYF12umY83VEgSqcDA2RGyhEVC5jFJsQqgDm61U8EM9fQbUkKrao5yUsGedyJE1",
  "key27": "5tQaRk4yL6MWSoENgLvBTYsvoJ5aUgsP5uhFtGhn4qsvYmtdkThM9ogngG6kYNViTXLNzUYG2MwJCj9iaJYSq3Wo",
  "key28": "GfzvtTuGA1v2W3ZxKDzd6uaHEUHTdHskwZC3n9Jf1tuyFjndiQQ69dhy5PMauNR8fngvNiMSyS3bdPqFUA7AKYU",
  "key29": "5991pKeCPQp7DqnkyRKXNvdVaw2W9CkLvq2czqj6qQszxw7CCPjdUWVgNnjHUbiBTzJHWBCSbG9o5zmFr8to6xcW",
  "key30": "39TFLErDycaACwruvEVbh9Axkegn9pew4bnkRKurgZHRaP33gUXkUJsHkpYcbG7J5C5ZGh1rmQJHWQy9hCnJeTGr",
  "key31": "5nnKV7VcXCfaKxYdHKZ7F96Fv8dGUgKm3H31eyLb1A1ewkE2nEBRwR7btLEhAaCU7WhozEtfy91HhzEzk7J8vWXw",
  "key32": "2iNR2E5tQrA3ncbmZjzQSap8djDVTsBzpngmByMM1Lsfs9icxAoQdBdX8ruSkt699Kz79Yw9iw7aJq4ZgALVixWn",
  "key33": "5eEDbS86WSRv7CR5cAo2Rx3iRZYdk4ra1szshaKFzPWYm2Uyy9UoDnhGMFmGdif3is7pc7xrAuTZ1cCg97gsowHL",
  "key34": "5uGf1WCvaU3uYkN5CETuf7v8BUwrK9Dq6AknLMvkLKEFKAq7DJt5QeRXpfmTwoRz1iavAQ9rCr8u1fRvRGerUcKy"
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
