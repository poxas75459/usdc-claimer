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
    "22WkDEVgnN9WyjZSRurk62631QekEHX8mbN53QxnKX6TSX8fvngvB2Bh11cjLpwe3xzcHdoq1tMgr43H4KCsMxGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pe3zVNH6gWCnhy1kM89jVig6UzKz1ukVSJgZHj6PTpx3J5AtnTatY1h5vFWegyXKhAXjnXqmgT3DmNkDGgeH88M",
  "key1": "2qMpG6QayUawvyYqUjebTJxng1FdagmMAz1EoEe1B8uohwCsmCij6Sxhxp6VXt6KCLLontZAFGL4gQoMKCyGBz17",
  "key2": "5nT8mGTB51ogNXdr2uJuxfy7uWhRpy5JqbfPpWFkqMqzxiRtXsvZFzs8peR8WWh234HYNcESCrEn4aCBf4WX1Vrk",
  "key3": "3z5q1BVJ6bPWvS6SuUhK4TgiSQx3hkbZEf4ezWiJr9P2bDW5zzi5tyUQMAk4Tm3oetGQLEccVVq8TF3J5f9RoAGQ",
  "key4": "88HMTFhTYLr4gLmyMjpE2DSVTzhzku4sSY2UiTamA83LH761LmfsnH3NjHjEjgMwcRC6jDApb2QGc1fQd4ygnrR",
  "key5": "4oNPkKHjDBAh2iYFCSff7mN1N6AiMiHmhKYuSnL2eer3AqSPcocMH5JdFWpTWUR4RAZ131wSkJimc7jTPhKdMyav",
  "key6": "2ieUEAuhz3cag2gs24aGWEh47xydq3NWLPVSj6boiBM7cee34tJyRfREsuyHwJ8oh5zVxrMkHGr6wKzZXDDjUuFC",
  "key7": "QwVd3A4rN7y7wQ141VvHGCRF8t6fXtQFM6w3MAku3nZWqt9qyMMRECt6B3xCNvo31WyAnf8b7MuHnN9cXE2EVpt",
  "key8": "55Wt82W8TZcN3LBCec5uVxSe3ws58uZNG885BjS5RAQgqZPXHNqC1xwFquKR17HjnJpfxqA9wNgEbEYivK3rwWTN",
  "key9": "4EPUEmETkYA2LxKWGZGBXye8mv9hD4LY5Zy6F8MVLpMjwhuugAmD7rEvZYW72QofCZfQXaXbxmKSUJBTvaWwi1jd",
  "key10": "27Pt9Myb43i76jgMnuhbRemRW5gyTp41pSqn3u1uKBxJS6zkj2tZzLizSu61LngoRFFqwA26oPMTX6N414KWcnVD",
  "key11": "UZ1Z1gsAaytVGPeJRNJeVihyvNdZS7S9zgJyVtesx8P9EJuNN43WyKCu3QNXHQU6Eb5xCrnKFdP78w6F4ZJJogW",
  "key12": "5GZtRVNKPKBtUD4nxFL8tvivELsCsmjNAFWAU8eWY7d5QX3G4sohsno5WAY59FR5z4nWVhprt1rQd6jH8YFRMuo",
  "key13": "Y8pZse1b6Kqw1SXwFVqCDSREYpGmFzwsUtCHZToFxQEarMev5CrDqfQkZk33dbFYQdowpU1bZ4kf1NwBiY5ZUBw",
  "key14": "3r3xK6X62FUvcj5jQxLRtC2KU812aKgMgrhbWMPoqLg2LpgGDPLJAUApiwxV74Z64WioCbZdbafeR6ui8LEakNUR",
  "key15": "2oR1cBpjtyfAGVgbBYFPw2qHjdhWtf2og89MLtXXWnXRM6Ev2fhha2XaoG6LtM6QCX3mCAgjQEwgBrFJvC23GMmG",
  "key16": "4CnF8RqNho3e1HYq1bSZUVprLLCmViU3gTEH1QCyFa5w5PG4vak2jJmaeJR3j5n4DxaZnZLTwevBWZwapRfB4jWk",
  "key17": "5CgSGfET5YSMrd7dw46qM1F2ZGixwxpbEdpAwPb8amJaEuNW6rhiqbDKTWe2hVFcALL9AUXjgf8iVHcU1VmgohtU",
  "key18": "55qUJvoxbnPM9ybWRGb1rkfXtjXZH5cm4Qu2FXXxj3bmSakpRzbWZuirbTtX5wpyfmf2YxNpBDZy5NvtyvuQSeYE",
  "key19": "4uAGSsD3RE1UWXugY6MiKi7Gi5Ew3Ym1VF6GvmBN2tcxYS8PCWrhxMkYhd2y51uZQu31rkegohf4NVwNxf1uprSj",
  "key20": "2meLBA9hwssH41piD5caHKywc4Lb4XBxsFYGAuMSTans1pxFbMKT59mvqNUTkmeVs3b1XeJCugvyj41j81JRWoAB",
  "key21": "3wMUmxWJUC8csWfatQnFg3p2Q3F9Ns3BFfz8fVY8TW6tuZ93n7rZTnz4L6SgmZu1vn48aHkUXFrqDfR7A1EqwLZq",
  "key22": "2gBjENwqB1zHSJbK9tA2aKpCa9Fk3LBbw8xefrtdAxiXARuuHD4GGPXtkTwBog3aAQUG1uduDNohnAtqDTmBPRZh",
  "key23": "4Gu99ofm2icJeHhm9f2Mb3Ug8BcCFQJH1M2ANDjUNiDkhGLz8fZRStwgfNKZWviTA7KtXTLqWo2NcynHjtRudGvZ",
  "key24": "54aHndQDEfEXd8v3p1fL1ZhWgkBnjYDh8Tgybqjrjim1XaimuhqY7CKHVi7Ez1uLxsM9t1P7RDUyoCfqgxw2dT5w",
  "key25": "2LUBuco7cUTZ59ZJesRUw3YevPzwdfHnCwxu1BLgwp4ieFXaQAhj2DRhLu5sN9a6AtbMtM4Smg9T1KwTJdxKQagg",
  "key26": "PAp1F9UeXQ4qDS6XEb3vRsRmTK5pmKtc4tpbSvdccaMPFXo3DZhT33ZegBCGEUF5XN6TZcohe3KnSqewVFdLxs4",
  "key27": "23B5M9ahGAuusay4BS7tPcK2EyUUcyRfHWurwfY3AUCjMKdYav6cJGpfwSwBn8nchD7bnD3o7hzxT77cSHomPBPw",
  "key28": "5fS1uBzJxjyk4Web592wHe7JRSH8sXtMqSn6nHziCfeeTSZmKmJR24DiP3grtJaY4oYjY7S8DDdJJGBcGUci1SqR",
  "key29": "4ejmvr8JMqRdagTrygbQLea6o3zj4W7Qf1Dn6nAnGhjUNNwGea8tyuGKC4G4T3eJVAdyRSTcJFfu8kFzn7tURF6c"
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
