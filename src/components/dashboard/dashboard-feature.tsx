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
    "9dJP4SYUhXVLzCD3V9XGuvMSSqG3cQwVM6tWgHdi8sXpK6yTGF1nEC6bFR21vUk1ViwNduS77FXMyXj7yj5fhdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MtjZsa8a71ayUwVxGsqN8iM19MjxWvTobgcUyR36xtDz17ZnmMGPSJEnRK4xjK1Fk4CqsNW3KtybQzVJZASHEBU",
  "key1": "3ZbsCLUNye4NwJ8VSRUx6Y1KVah7gBvtH4LSUAqTZ8mkX6AQfwWqHG2BzekAHwoxAjLpAZ5oUaLw6owzoacrButf",
  "key2": "4xfS5b1jTrmBgYqBrmfEaTJgJFCuPYhJo6jTPVGyfu1WvX5CjrCKw7kziXUg86MGpfrv2Pt8qXgUX3n1SSmMEmjH",
  "key3": "3JtA1V8h9KWKyHCo6ie7KVzBeUBZBf7afJmHHxtNezf98gnhr8z6CrZYhZURVqZ3FUXksEipADsThaDD6LQyGBr3",
  "key4": "5rGK6bz9cW19Htpqp3SbgvPaXHXpAgr7dXUjFtCvo4B6LBPMmV5fHwgKjdhVyEKZaZRHoGpY3bzVm2Eh3Hwm5fDA",
  "key5": "DZVS8DgrgGFAtn47WNVsZs4wxTKu994hhDYAThGFGAupLPGs4oCGqVPmd48YqdnSesWCSWAVmoAx36FgJ4nSmtu",
  "key6": "3tcStzJZvSdJLoxHUWhgKUhPRNRpEBNYGrRdyKQfDufMcubG5ExVotW11cmkmiSbxDy7dPijvxswVT4kBNt5o3xw",
  "key7": "2JvbkdYtzkZguEPzhJuK6onmG38mvmBpXjRj1JA4LPXthhX1eYfM3R81FhtESsQiPGiohU92qs2Ebwo7arnYHgow",
  "key8": "5Uq3NYLMF1b7JbrMreesqcRASRsV75oczvYdEBEtbiatEZ1JSSTa9tA4Zqw9Lw6FpHfbncpQv5DspHJqUQjFcL56",
  "key9": "5Cu3iuNN3jRFtnaS88UPs8JqR6GvPGKp2PB7jzKGhP6dDKnLnUsk2Zc9VWHH1i8nvddThVL81JWMSWBa3WADVJsv",
  "key10": "4TCbKMuVTSYUzFvZ3uq4EUsjGngxGTqdAScqPm2LMbW8GrQk5qMFTsKajLTMo4F6P38JsG8SmAsQj7DBMVxJCEVx",
  "key11": "iFXscZFwrxPCJSnw48b33sBx8NYtSh43oPiDcjBv4uTL9HdUPTmxDrAD43CHfySxcjB2b1UK7zbjrrL5souruPp",
  "key12": "4NMLTN1BLHNymNxgFyDtEFYTqPRC5eZ93YXWJ8jn6x3bdsfhdxaEp3PYA8GTNrpFTg6t4kZv9ahReUPhQYnRpixK",
  "key13": "2ZQB7T2qX9er8eZuuGLVvBBHBMhUTyvGJeVwcQqVbEU22QBN3WBf8wTdT7e4VZRFVNSjUG3VM2LpAqGXBJU8kkzG",
  "key14": "HkLR2LvvouzGyuG7jRieD178mce1he6buDUEhN8AC8E3PuWeLg8dTmAAW6M1icNMKp1dkFG8WgRzECr67t6XjzQ",
  "key15": "2WJvi9DfszE6tsnjmT3Lckf8JhfZvbks5CkrwsXGdQjKzwNug4b8x7VFQqYeYnAG8GBvPUnLSmiUEYzt8RxKNvU7",
  "key16": "i5gRAJmgoyztsgZqZSXBA5YwvQFfFoshAELpG6k4CqCpRqnaCZXUbMdk4yPBgbez8yu5pji2682NLTaSgsFKGQ6",
  "key17": "3xfgH3kJMJwcQ8GTbPfJzRy933kUbNmvTLf1R9DSN7ixEZ8JoSvYFnYTMA8Ux1eEikc9X2YDE23ETxM9Tw5Ub5bk",
  "key18": "iP7QiA3pjC1kg3XrapvNK1oZwV4eXUvkEND6ryJEdcFX7MKxZLsmLFDuQMoZpzCjSh1gDKyFwcL5YpP6ng6cvzz",
  "key19": "2eu1hgVQNtzKmaLVRNXozvpQXHkb7Aog4BNXFNugZyqHFxoNSz9HKjPG7718X7yGovbb4688LYVEpa9yELZ1TVY1",
  "key20": "8kZZh9GfYUvzPymSUYTUG5u3PUaTcGhdhc25vPsjJ3qZSEhMHrSiTXVupXryNRydimxYxGTCL9wozVztLRkTqwk",
  "key21": "3hQcKBSo1arTXjK9sSL3KAWxSfcXGhzRjPHuSLyW1XrTWed9PQcP719fT4Amh6RuPfkVBKAemP7bBVrKF3HdJQRT",
  "key22": "57jp5sDbuium9X7YqLzVpRB6CB5LGc7dXX7vwoYg1r2rCwLs56V5wb175rvWhzKmUxKWwv5UC2jMVSndF6dXQw2R",
  "key23": "65Ed4ADidXfisPfL2QYMLuU2pL9M47z662cWPj84rFZmpX1b4Dw6sqq4rvoMv9kj62FS8jxwiaxQ5WQqZiHEPvJR",
  "key24": "A843giaHtZBY2cd6zfCNqqCizeA4cbnmZDBXJcznKx2k5yBNDab676nubZCwFGSRHEdQJoajqRb19eKjemGLPhz",
  "key25": "56At5cTL3F7tzT8feSvV4gAjfh8hx4MFmpnDDf6XcfeYu9VtrkpcTLkEqAxRQ8gJq4Eixvn2p3S8NHgSJ4h8HEec",
  "key26": "3ELJvQKZKyHqvNxGjMZacRLQSyfjjVDMzeza1sqVGc1j7pmyqP5xmzCSVMUEgR2tMjACbNnA39bS5M1z9Uf5Fqpu",
  "key27": "3NU8Csr1eyTy8Sqc1SrmAHuCa27sbsd6iUuVUVKEtsykQzVkDcKri2i4P61GZ9CYS7gPLT8bLU1QtyEbAXjdUuA3",
  "key28": "39dR8CoKQL6TxFTtFwimoeMDmiFbsZxcfywkkKt1LrixdkUpXLKjk4hEE61T8V8eZmk3hsaGzRgFvL6cwYuSFf2o",
  "key29": "NnwruQ2XfpHDStQdzow3y3Etcce62pR2PzJz7znTKnh9FeqEC6C1Ah9HMPNHfrPezvaf7y2gXsj5EJCLtqfkRUN",
  "key30": "3sv1z1wB27TiLzLNSBgdSWQdT8GvHo1bPhjzYKN8EviqF7uB2f1ZLct6g2ap8q8VcPB9qN9MgeA9J9K5xnW1Jzrm",
  "key31": "4D27YvBZx7t62sbx3miakajuCyrxtjXgttJbTXmon8iDo4aXWhGn49fnTHoQxaTF1rWTxw9NaV9pBEWNwvkwWC4p",
  "key32": "tpMQ2CwSJ1587FafiRFBLRTHA7VjgsT9MLCZAxBo8CpJLPHXeYHJ4v5qrPooHkvJ2bKuoRqmVevg4RMjN6E49zp",
  "key33": "2yr98YfuaXstoJ248gRKaqnfWkE623Z3Hph5rzQTTCG4TPc9pSHtH3s7RJr9PX426TqVVorGM37VxsrcjANSBUcx",
  "key34": "sKiPgpbRgc2hK9h2hzq4EDuoEamQvZNpjZFTmEVVfz4Y82YR8CDaYrJ3JXZ6BLQzLRHcdKPfDv5GtZZ7z8nrSEy",
  "key35": "2hrSd9h1wYkL4Rs4KdNnMztvsEYpqo46WzaP2oCJFaQQMor4BJKRJyu26Z77a7wzLmUdBfsujWSQhRRWfYMUz8Bq",
  "key36": "5ZoYsEht6aGjXW4ps1YD1AHzNCkhdeaSMCQFxXS51TiPEaUVebGrxjjeY3pA2VXiAzUnTbQToUZsqagGbZ124iBd",
  "key37": "2RieAsitWj5s4GScU1NY7jbH1iYo5gDWJdqcLFPVJAPW1YoaBZFGJVATZZrtGkKH2CRrCepMrsubWQ3aWcg5c3Ln",
  "key38": "61Ldd5a4WYXxwMxsppRQEMNQWMS1k544GZu23umg7oFnTB294iAmDPBT96RSWGGLmEGdouoNppi1NjXGQNGDFBo5",
  "key39": "3pZCrJnKv6QVTji93ZkBfv2sDb5qCzTSdGF8F6QpfhFC8JaLHtouq4PQWi5aprRaNrrufVB57PxzX1qDkmvWxbXH",
  "key40": "54qrW6bmMMA96ACLRC1R4e8kqUGkqGLPhrsfZdiMwAs5tCefXFqSmA7DR2curyWihN72dHXp8NVufoWG7WfdCwtp",
  "key41": "42a7Vjfa4TotQaEkNqmiwsyWK3pZySBzDSTeTExrhBzvziiBFZNfiWcfNvkSfkY3xWhDc9pHrDW1nW23dya82q3B",
  "key42": "4GkCv1rQ1Ax817YDuLVRx3CjK6uKiaBjkQ9HQfcNc7P6FMZZb1Ze3YZ1uWrhpj4Asz9WUQ2fNasXRxGFc8jaChcv",
  "key43": "38vUVMPZtj9r7YdQXTgYBgb6AkMu1qbYdh1MtrAUd3yuyF8P27Ra3aKReyFsJaGYjGSuFSBaHZcyRdJoq3p7zzhf"
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
