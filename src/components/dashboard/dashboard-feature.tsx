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
    "2afzy42h2kB9chmwd6UzPibhtTi2pEDeZdWxQnkUmvUocezXRecs7yv3zcULK75dxVzQn7CGtAQXWUNjQvaJ9Th2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CTfEJLga5fxhbswXxisY6gkqqQiUPwMUh4tSUGax76XVzH3PVSQovTkKmroyGmFaXhgkGceTmb8Qiq7VJfeDgA",
  "key1": "3mF4RUkV6fiBsjzkhsFMLCV6oWHknrSi5ngYHeLCCtAjYR7xQ3TLNW1g2bK6iJJz1LuzVnDC3kW1cf4pcirJ3uSy",
  "key2": "3kKBrSrJcWDc3Hp2MRKfmoQqvEeW4nMZrmmAT7HRH8Exs8YooQUbcJkygPS7UuDQm5uQHgHUESbRrMJvzfQ3F1yX",
  "key3": "2vBKUNF5855GebC2aAFAAHtnLBWjXNdNUMjjkEzshh95NwZfDnaPtPKQCLnzenUdLjvXoASDZEXz1QVSh5scYCd3",
  "key4": "nNhq9M7QkAavhcfDLo16EjjFAMfaXN4vD4L4KHJJkmmWjnSNxkYmxva7xdgwY8RSRgtFhSY7M2sQF5cGKW4hPSb",
  "key5": "4jn1xoU1MgZmRhFf4wXGgHAPFUTzw4KwxiuEy4qiBoF6oU2L9KcPGxUveFcFbp7sCxmmL2jmc7LaVTiWefhwpNdy",
  "key6": "DxtaEnYZy9s26nnNjRanvnApbWZWvXvTqxJmePo4h4Z17odP4dgLomDupHjyjXz81VzRJX55W6yQ5UWy7XgBWGa",
  "key7": "3kFo1fddY5gv3VXXgj4Dua18Fhc4fUeqK9cUxMVGdFanwQExjgK6g5xjKFfCnwB3wPL5bja9P2HyxcAVmTwX37gM",
  "key8": "6BHkMT8JkWNdTFYbdYVPXvUAnaaG7mybhQbyjccy2dqr1gAuYmHr4CH4tVkmJjWb1eMu5LNasgAUq2KTRt5HhLi",
  "key9": "2PfjWPEWbzxT9a3e9SuNHQqFqRkVLt6qfPLviQKCdeg6sAPmvXbxmUwCyqGcYUbuLp61Aa66gdKgVg8CdhcPoB1t",
  "key10": "2kd6WdqN1ZBtcdkoUeem687pD5mWqNhwpjTMBUQoy6ZA5BxDghwE7pjteDZ4JEdPGrpWrGTeTc4ii7eaPzgKnm7B",
  "key11": "2nHvUxQP1LLLDWmqBSGgykJe8U3UbGW2enz2e2PPfdSC7ZW4pHgC7nJA5yYrZA7XoYsPPVjiyGUDxa2RwudA8qQ",
  "key12": "VX7Bx9Pc3mmz186eAiVCyqjveXHS7mTqGUfmTtHQaTHE6VEneGbPTLcTKSWR97oJPDTivTvtUZYC6pAruELJY4Y",
  "key13": "29pHcdUGATwGcY5MrEjSuXkEFo6NwUd7r3VefH9d8jeChYbvPD9Q3MEtRyio2YMmoorjVgzXkG3wQGgXhGMc4swc",
  "key14": "3PHNz84kZWUdCWEzKavUE2GCs8Mu6fHpMTAhvSridatD5cEoNrPCMVGMSun9ekAKCadesLryDjdCdRfyh5hLeN3m",
  "key15": "gJhzhY27N4rtaa1h4J7aGwtJEKzqQ7WRdqxs6FMsf7FqN5cvmC5s1QpUDwGJtTUq2DhVwWwBJikikG6mubbMdhy",
  "key16": "TBAbnKHPM6gwHLhEnAAwWNP43ZYY6NsV82aAF8pqTk7vF5KM5fUKNp9acu7Vg64t13iV8YSgRsmK3kQ43TDrNSH",
  "key17": "5eaiVPcBayh7AkqzPXxXahauxyJdvrxJcBTCJBZHFuZZ6ihh3QMFFMoCPhkFk6yRjYByrJKBDDjXgeXYGjEfB9iB",
  "key18": "3wjqR9ZqCejiErQv3jTWeMsPXve3GZ3iKBAzw1s8M6dLrMu5zdtyRfYHgUPDrMMqdvYUoy2rPoRsM55Csu3JkUdB",
  "key19": "32dTNPwjTMMXvWb5X4UUP6SYqLTsfhxHyWEmjub1i61RTNeLUbRW9GSGUYXY7cEp4i3XSsjC7zragZA1QzVBiJze",
  "key20": "2SvLr2QB1cDhdA8ZhW2FwRS4b3J3fezNEinVa31ispFKfEtSPHV5TfrrtG1GVsuavLqrZHc6BBzvfvDoxrmgtaou",
  "key21": "2QsVt1MZjqVM1jSyLxK6k3GH6R5XDXJusx1yauoqiGNSXbcx6PVQp1qNN7JWciywmTC7gEQBJjaBdPYqKgn6QeDL",
  "key22": "y46nww8PEVimkYn8rgrj1Ybkw3KNpdmxrT4bTzDRUipyiH92dw9FW9SnF9SntP8KEmXkb18c7otM9MvtSgPENSW",
  "key23": "541chGMB9J5Ra9RpoTseffERL9hCgom1bqC6btFuSC9e4rUzmdMYxD2GYcAE66fkmeoe8bvsgyUc39HXVJNwGVm1",
  "key24": "G8kJQaENd3Tfw318ck69hz9BEMa4sFtjguUDp2PCKA6grU8Zo3Wb5V1mj7RoaF5pEs616iLMvh7yL1CQ1vSdXYW",
  "key25": "2iMJnYypvdGqHCVZEHegRjnGFWDB8sfg1dt4up1eKdLWPbuRKSFseF6XpYx1nnwmHBFKtTykQKHEJca7edpV4mAN",
  "key26": "4zXwyokXLsHmhaWLjG84DCABVAaRpjwR5pqSm1PXQX2H9k8q7yCAAJxpWjwzazt7kcENNTWoL2kczDu8xpHw9RAj",
  "key27": "442ryE64TPSQLLX8sewGu4Ufj1xHj3wLcGevc7RxCuFCumSkuxShbpmNt6PpPDACoEMhbeoteqE2bQ4ASAV2s2Ef",
  "key28": "2RshVgrn9x3o1kgr63hFvtLW45RZmYXcfd1fcWhpu71rzYtRXBLDq65sX7Xa6HWtAFEGdC2zk8FmsZ3efu1sjBZS",
  "key29": "3fNCXLgp1ocgtr45rS81CHG7pT6tTFkdz8GDWhiM1gkegxU46KWcdKwn7PQCTTjBRemSaTUmhQ7DHXtzGXknpXaW",
  "key30": "5dqNkKzBqWHV8fuD2n7YQ4EeVZF17Kz9nphCh2ea2Tmb21hVZ1PbExiGv5k83v9NoxaCNm9pipE55PMyy7zL5UNs",
  "key31": "2PXZyXPQo2Q4Lo53GfrE8DP3rogs9zqYFjfEkt9dicB3itt4cgRqHKjWccYa2y7uvN6y22XJyQXH4Ut9W6vakq52",
  "key32": "5mUkCc3xm8vUtdNG4eFyGL5xVY1aqkWZxuX8MKXqXd6ZyuLwMKHXPSAryKBnv1vEK4rruuUrkEHLW2qcyeprpqM5",
  "key33": "3fjonWJbPBpAZUmKeq3AYFAixUAPxeZDYqbGYuLjfFyMjjjEooAeiLGE28D6SGbv4HmeMNFF4sfmuVgZNgKnG1V2"
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
