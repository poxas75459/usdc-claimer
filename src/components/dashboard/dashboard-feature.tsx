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
    "42jXDo6HDU4PSAWdtuQsNfLfibyAPJYuX1jmoFYtb5BGUZaBSPNYy3DWz87QLxJ8ygQaQ9ZDrd6cbeYJsrEatijU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32S4fonzad6P4rpww47B6zPBsJVrmE92SLyLzSvvk1de1XCxg22C8QwzzrMaMsRdDBWVxJM15NVUzhrgvhTuNvDk",
  "key1": "3r9pFwW1nT2BTLs8uVpWpqDJHRjb7cPzk7LSkb8yYmyKthTcNJUweAJPyjPAZ6gtbziXNHm5LTMVWWzSpwBH1YWh",
  "key2": "4hhS9Kaxpqd3TfUZfykk44xNErRJFrhFYCyMUyG5AruxhkbDLawQzxNZDbtHdPGZJ9iz5bHVc9V6fC4F9F7zh8MS",
  "key3": "5Xhikpza758au83MYSkHDR6HYefdSnjRqnBXwnDEr8LGko3XRajom4B6pzvi7beEBDmgkntRAT5i8BD3J5yzt4M",
  "key4": "2yEURvxwYnKNVUE9eEWYGYx8cTSYYHGoExYqKaete4pCyte23NmzDVCCvdKZkJETsQz9evy1XVo5eAubDUsD6ucR",
  "key5": "4vAEEJEVvc6BTWHErATfo4Hbk4ApNsFDrWHZN7fCTm7k7w1nCLmrzUnLW1EKQj2KgvFgppP25gccfrPV6QYr3c4H",
  "key6": "XNKBpJeCjvcxUy9Az5MjfupfVJUXmMMEjFYuNM9Rc1roqo5vJSv1ee8cdzhGxW4yytuB55p7SHaJA9t5ifihaPk",
  "key7": "2vM2HQidoSpAafxCUD2W4tY1R8XMFbr2igDtNse3573F9m4ooEE8PSW6F5C4fQFsvtbUxeZHnD2dfdGXGz7cYVhg",
  "key8": "4oyBW4J1SZsKqedKBNTtmpsUEtLdUMaprshwvfQLhMzs9epSiCVU5c6RmLb28zwBcxGaeuTtvqmW63K6vfqAYayx",
  "key9": "2UZ9UHqpNhNByHggy2scU6a7b4JSFtjSp9nhPdQs6hPj4dqGCHifjkysPGiub5TnPKCxLzmY8vRDQCxpbLqHPvK5",
  "key10": "5poGyKavQcLDtvdaumamWvbDyE6EWa73faFc82vuf8wwANHTFGv3kmV2tR8kzcWogLWtW46qWxa2Qq8LKTWJzaJi",
  "key11": "27rNBLYvvaNJnJmkfzK4TgkLchQPuABsDoCQhUXnH5E9rY1NBRGkDpaAeDQa23LQ83EQk4sTgCgrK5XFg51tnoQk",
  "key12": "5UUA7M9nxQBfQKZ8fsz2KVK7YkZSxXjZ76nFJVqPQ92mFWmB1cLfJ6EkCnC4zaFtdRnCszpgjrs2M69gqYkx8XgJ",
  "key13": "eTk4nWCrsdQDR1xbobHiCB3FN8fXXehtm4ke1BcUFCLufbDrWXeKJigiSefycU6QcSeJmw3kfP1vskir14bDgX7",
  "key14": "5QAScm1BGn9kJTBBgJxqicBWjhfuNxWy2DeCipGdgytN89oFJLKA6KtuKoNdoS4DAD443Jupq689DcLj4BT9Qm8V",
  "key15": "3DkyrUnSLb51mqbhbJFB4eedZ6Qj79tGy6FJjzbhkQT1LyNZ1kPEp7K4fCDEnep6eBB1QsSpMcddddf4hsrwpa9v",
  "key16": "4Q5Asdrk6CftfvvDhPVTK8ssHa7hnFjxSSjW9PLxndU4P9GF7zueBpZk6kiYp8SognsH6qprByzcuKQgxZpK8MZe",
  "key17": "284Upw3rEWDoJyhpZ2gdmnWACRL6a4gUDLjMehVKSbJDsATPLpn4xKsRFV8sfmK9L5vK5anFkG8mi6QcNLdBtcM4",
  "key18": "4ipSAieyUUKW7VCz59bDNKkRsMW8NAagucBZRRWueu4WANmBSkGMwyTbskw6G97nUvTgWHGkeTWJ8nLcZECXeruu",
  "key19": "4fuaJ4TjKBzL5fV3qk82JnmPJXuucecGMNUT1Ede3NhvHgumq6g2Dd4NpxYqRvxZg1bBi2Grw1F4ZeReHmrtGDhw",
  "key20": "5cMcSfszp3ZgnAxqPW3UtzTinTSzUFhbRSqF9G6U3j43YkpnaEHU6eQLvC6bqg3d75Joq54NxjoJz1YoCMgSE4Kn",
  "key21": "1rvAWDmGU6f5x18K4LTCzifqHyFgktHqowRUuihTrPV3DSSnnUv6baLxYBThQdKwdBPNY7c9o5Ggi9yCw9YCuJz",
  "key22": "3zj7jARq8LWp9bnh3cTm5fAB6zZfh2zZ7jjYrzVLXvNgZCrKEyDXyhFFHJcbU4TnmgkfCm3HAei7v4EZFbgvL4xn",
  "key23": "rCiTTYqbjpT9geHoS1oZ5pM3P8pCgL3GNDtYioej53AQo3qSNmsdfwgaJreiX5rr1TXi6Ebu22nzTv536MGqmJx",
  "key24": "2YvtY866hBRpndSBvrG39XGP4X2ZhE5RWR6i1XRLXEtcDE2QKAs5CHhkWAfssm3Ds5sZFu76iTHkW8UkrqtPnzuS",
  "key25": "36hoGubcCPa6o4R48kKE7biZdc2TjUBhxevn5QLUBZfvUY1KAr7mf9sn1Fqs1VEcANuoe6DYxEtEwLapmyW2LNPX",
  "key26": "64rgVnfARr4ZJaA6M6wD5dsUgmRr2mYn5RDn5t3vtMJ4tMS42CyLdi8GHZdrHnGpdojquD7THV9A5EHwVhTBj5v2",
  "key27": "124qTQagzMo6G4jxW6fvjPC3njN3WgjKYCZV4EHA4fEQAWa7GCwZ6CctKdzLfNmpFTmyVDpkw6RqhqefH9aKppvZ",
  "key28": "4vCyJDGkiphCN2rznCEyG62FxzFDLFqANWEKfXrpQXnJU2wwGzyVCxNBmxcwduhwjRAodJD1rVmGeUYiwoW1CVti",
  "key29": "3AB37q9bfEpoVqUcgnt9bynZhb7PqA7gapLHKV4xEB76uX4SFNjm9kDu1dk37oKeSC1EPnhrCuNMa4wXBHsajQfD",
  "key30": "8ZXBvEwj1qShYAnM3yrXygbDikAHkkXYutYfDJ41gmBreo7obJcaZeqX1JsAp94Y5q32mFV2ahFTLEqrSGqEmgF",
  "key31": "37hXUxsRq57fG7uMCGJeTnS3H2BMAN7RVvdQsfTTCCtX9ktiPRBEeKNnAJBZYxVBKmbEcMZSjzCuSrmeU2nUDwFA",
  "key32": "2c6EVbZvPAhT6drgA4wJQoapCTqM9TtEsURjSDfCQhLc13TuX22JwZb13wsv3vJHTLphB4QzN4rm4MWQFR6RKypF",
  "key33": "2brWJp8Y8eJD3V1LL42wySGLbofm5jkMYYE4FRmjvAK1mhmk7puMkWVaoxMFWH5jUEfWRqDzNhdQoppSt6UwErNe",
  "key34": "65fUJBReCzzuH6fxTYB2P2XXJaWdafcuTqaAVQkQnbrnv8gs7PoMx6T6zaXi8pEBX6voeBLn5mxb9587LGBpjRMM",
  "key35": "3pL2k5oujqfKyvfAxEF7BgfgmXXRVwLufLVY2gAHKZYFjadircqcXceEXYMUtEGGJtrKPF1JVkARJYiEfKUzZq2q",
  "key36": "FiT8ZavjqjMFWouu46DLUY5LDYR5Asp1vH1B4YADsystsAJTuZVucmXtGJzY5vaEh9avxQzxXWJ56YMF4FfKNar",
  "key37": "4w6oEWfobefZXGi9XRd1XEwnJYN5VGVtXQyxzmqVZRgBgNCCkfS11UcRDBsPeKV1E69ZrvXUPu6JGq1ENffJmPfW",
  "key38": "3szCpRNkfahpB7rS4wFeHQAck7H8QLF9bixB2ZuuW9JjzwpR6Eug8H3Xa868ZBYzA1Nj6GWmksQtiHetf4CNLir6",
  "key39": "5Jn2zQf9Bq1TwqTLRy98fpsDt3HQYEt4XhHuq5WJbrvvBthmHJ6H8t2HjNzjyin7jma1fqW3YXv2xHZw2dfL5aNW",
  "key40": "23nKAcLtah1sR5CQY6VUfCcEddVRbZf6JPuvBBXXJUbewnCU3mPAjGm4rMWYYjwBBoA4pDnwZzpFacEJrahh8UEP",
  "key41": "2MjdC9z1cyYtqjQa2Q5eEw5UXAoYB2AzGxxyCD4SGLmL5ZoGXBBnSN9ep9gy9TpDLeTZ32u2u1qWesJSWymQKL1b",
  "key42": "3oM9U3idK7Yc7nqA3si2fAxxPVqbG3wBQPU9t5hb8jREaKg2PzPaLQSUtkrE4hg8TC3En8ZotYGVt7xTG13CDhn2",
  "key43": "2xEdn1wsUH3ToV8JZpo6APN9E4VG72W8Q8wuUrJ44j7TfoWUq4SsaBTKrE8sRit1fNnx13qt7AKjKj2CMA4dK8fF"
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
