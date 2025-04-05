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
    "5Wh2YAhD5LQdJpT8aAzEbfa6SMda7kYT6jbfUUSW6GtFdRMbuoYheQnwUumSF2h8p7MeLGAACp3fPjpLeabdH9G4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NCqPyuo4dwHwjcaA24ugW8sMbojCWxSnU62pPRghtsLwpBtgvDqDxE2btiEthcuawtrk36oHZwDZFtF1oF9MQZG",
  "key1": "5zFRscxs5UUwxSEmSnpKZcUGBPaVeaV5pXGUkfuNyAh87DgUz8KWKgtmsXtTdTf3Vb48cwrGctrTcdqmWJ8vuhAf",
  "key2": "321W3pHakRBMLr1p1wA2uBFDoUcgG7VwLnYVPAicKv23D5Mo835eiJUnnMRPVyb6E8bNqybKh8KB2VmCEEdGBKdZ",
  "key3": "3c16ALVwViQ37E1PCFeQHHY2Nx7LEEVQgMsDniFuRYtWRqk3vMRpN2RYnvYNtdFuomuPrEd5sL6VVpd88n6TT1Bw",
  "key4": "2CXSnf14ocnRcwMK7orUqLFWgBGLJdM8fbS8bH2fdhdoSx4wX4vZsxeuez8DnMGJmZ3EfbK3sS1nmEqM5hF9TTDz",
  "key5": "3gJxFRWxPhpXACYs8yUqsQSZ8aggjY4VpXNdA52ykfkQVUZmQ1sb2RwZgZHymuebaGbrUhJBY9GCHZEkrHyHzVvi",
  "key6": "hkknGS4nXA9kCodC4ZCZ11syuuFFLqLxejLgowxktFtaD1nmzhimQ4Uoo6S3MVLzU3Bm5Kayn4YdnSeCwSDbSXq",
  "key7": "557RB9XnUYbAGBvmVB4t7FMkx2TQPTwgKuJxv69S31eqoUKho4dYxUUFS9o2tABQoTsLu4VYN4L97ZCv5wGowrHc",
  "key8": "32QjyVKR5EHY8qkqXj8U4giMVk3y61QT36Q9i4b6UEmV6cATvhPPxomM9FVc3Mm9MnJ4Jw12EbPqbSm6ag4DavEB",
  "key9": "3GV79bu7WNDfkLwvGUc6822HVEZTD2hG8Ya2xXpSxGsVTWdX8ZTqAgmroJVZU7CFu9wh2svdanQDuuEXAf4C4A8T",
  "key10": "2QCeDbvoMpyJTtpWsuT29Rnm2LvFHCXyBB2VorMYocYC49LFM1JqcGh9gN9SxJ7K5hxWHTYrNvrAdwU8c5ZRWaT2",
  "key11": "4AkQNwU29TiHbh1VwLPeMqEJyurukjRteA7KxxyaJ4R8qmrwuuAnUguCpHrDkAr9rQigjLZQjnrFo6fgfynSd9AU",
  "key12": "4dqshHk6mmwaSxKpFFmTGKeVWGRQWWDpN3RqxDB8kU73SMd1V5ejY9YTp7W2mENA8bSt5irLFKvtiKnE9bTRSsJ7",
  "key13": "4dKMMBD8DKgzrwzcMZCEr5Nwuat63FQcJsi3MFd7Mtv4RsPBnVwCRToHBDejGfFv5Q6Xis28QZNCz9fx9JXkjfop",
  "key14": "AhFNJVdxoMGMukVhKUnPsQeAXf7MLY9MZyFdLkagUGawJvPoD6vJ9cnqRM543f9tEhzmQGA1To8a5YrE8duWTwt",
  "key15": "48X8uiNL4cNpZGksTZZa1WmUTpVXGDL7x1pui1guQMRzEaERJYgGBPNRZ6aJ8tq98UZ72EtdvEJHpzfhh8kJGJZN",
  "key16": "9QREBNdhS951dbPZMcaPEwFXeiYAoyRLUEjUE6fMfvZf2TParhA1hQNNFCxJFqi57dUYba2daH8M6hyrP22vbkF",
  "key17": "QjivuLHtGGUwZqg7iEN3toJC3tZML47S3tp541MvzgVuiFAr8wtvP7LbadWvaHMFwfyHoE2RdjXfaigcwYhgJ9p",
  "key18": "5pmeiVyAYGcTQKAbbXPVBPJWJTrugexrGhTurC8i6bXaAGpJGY89B4ntez78kyzUmCbr22RbEmymvCnuHRWY7QL1",
  "key19": "3oKesRJzSHKvNKmy4yG3FoU2QyBoj5LTnhn6BGwVUPw7JEYgARHmj1KNLECa6GJbNs9ehChRtqqbBhatj4niDtGg",
  "key20": "5uJaNCj2kEddVesjSfP8CGiFNoneEBk6G8RebEK5cwUDncXEMuFzoLrrZC4tdVygnEAhBEKpmr49shkAV3jFzBJ9",
  "key21": "risjUvUw9PVNP6PpcNNBUSDkYTjCpAcahCc2Lee37UDnnsUtnwHehDS5UYUUQ9sDqbY2MD6YSwBCd8g7y5CSjvF",
  "key22": "MwoDdLdRU8Y7iM9QckgdoTtZENnGoj5aGQDk1BBhWuYuF7HCQgtyc7enfvzPdu4SQA3xRrwDRQedQH3UCAELcDJ",
  "key23": "4BHSkPnQuckPL9F1Bz1jsymp44wU5TTYxBuR7eHbF1Q775jRcGtWqU6bNVJHAtZ3AaPm7GLnZavmqhRMWDpvnxkN",
  "key24": "335a2YFE44TuVm4gySyqJuEB8H7PpP8Hp2g1nL6DuNKatAVJKTbfzGJmar6T7m7ET5DKx41YKHjiz6pidQWDzgEL",
  "key25": "R9CoU8Schd6Ygqk6gsBvDEFhEx4s98Km38wuc4YX7QgkDpV3zUp54SvbeVTJTDPZmRUa4qCVnWS1XJtopzJqbNH",
  "key26": "2bQBDM3b8Mx8WajiNjmBWw5TXaAZR2RJQP8C9ThwhfjyHD8np5ScMNR8WxsELKtGNKMVW359DbzBQUve3ZeWxcX6",
  "key27": "5dxBBWPzV9hC7MsDzrsm7nnmhzM5pMH9geV4vLcsJpQ9Crooy2HevHvmhA2V7LGmPgHQ6xWSdYV5f9YeysggoeQe",
  "key28": "5YSwYAabkZhjQGCCYYu4E8ZkWAppPwvLzKiagM5V4nQSk5wCB2Ra8Kr3VuwMtBPeYmm6wUySDSiTepw8JtdYhMM5",
  "key29": "2LxjGBpa6vyz461SLHE7b82fjLPVo8CJzLuZtMkbtL69hJr4ouRR16pVZdz2icFUDRGFsnVGZRZxVPcgTz5VjiiN",
  "key30": "4bXiKj53wbdMG3ZJ5sns5VsjvYXDcPJ5LYSppVWaZJEqLdzKr5FjGCETcHNwqog7tKTjW5EQCgZ1EWFJi5EQehKn",
  "key31": "4NyQs1wjoMavpJ2subZCAEWNbBZMHd4sErYG6VQueotrUdyp676EbGUcAyNUzS5zUeYXxNmFxGkQCk4kT1ntUXXP",
  "key32": "5aFZsbXhNcTwsNGkLaZrgMt5yfUuwS92HZBz9jNzqrZdL4V8qQkPkDFWxPZkkV6kMWNQGWE2ehfcJPqGaYmZLBvT",
  "key33": "48R5d78E8HFFC4HTv39ckUqhof3nr5bFgQWGp826kJ2ucyvcoLukoVwsXLz3sYkJRDVSw6Y46gyaLaUoAHGF8bUo",
  "key34": "JiSF4b58XWxNKRPyirPP17Ezo77VGyPfPo2CcQViUtghkEAjL6bhRJ1tGKXuzhBzpFpRN3x7vGAhRE4LQkBQu7q",
  "key35": "2qXeYtRWH2QrxMzFCVGXpjRJPBTebf9GqVtteJJEZsbY8qa43kJS5ZcVCoTcKZLLBvMpARVLLK1XM1d2cnJgkPHm",
  "key36": "2PyZGatdmiXrsHku7umDswFno1sANDCwJ5D6ZzYfNP6qeJYyrvbbGuNNUEAwgfvbxtr2kSrURWYT9N2dAWEGgu7f",
  "key37": "4gJLvzCSbCusywEi8EfG8PFoTirCuSqWtSGjubYF2P3B5ewWbQzFvDtU224wdBYyB9TN4pheMboUKw74r8gkXbA2",
  "key38": "62BNtnsYbd4YQx5CqfBsj2GqqXZDCianxEM3FDxjsLRutx3uXRTNxp3WtSDRTmtTudBixkSKvi1KGQsy6qQiqKAN",
  "key39": "4f2kboeoEJ6txvSsoNRjpyxC9Z1X6Vta7ZTbMQzJHN3iBJfaaSfpWLUKaWvDXeMCLxvubwC9pVqZb9mWLkSL7cMG",
  "key40": "29gePqcW91WGMHJMFahwcBY9tuxKzrX5F8AhzGKd5kuwDxaWkuneB9WiXEY1DVdDXUGnxQ2DUSWoYBXbRjNCoenE",
  "key41": "5oUryah5n7Vt37tZM9s1usSJcwRHtBejKchTfMMXEfTYGGecc3waHoL1gsLmpMesFLZMMswUPCwEiwFDdfDYguo",
  "key42": "3YVnZNWASHoRdsxJvkFBUL9ZE3tMjBeb7pRTeXk2L5X2KZwdZDDivrMJWswGdbU7CojeY4LYgHzA48QSQizpKrnB"
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
