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
    "NergxsL6j8d2ccfwNVfYimiNGTUyGJCk1MurSPVWA1Bn6aT86mxahHbKiaXZ22HbcNPwJVwqmnEdrdirCs1p3jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kdgJqNdiSgz1eQ6eA8fqxkuBDwTkzzanNMA769ti8V8MjcmsZfEaTzkheihyFum5CSjfKXmFFMLiYGD3AFJe9PB",
  "key1": "2Pq893JrsMPi8FPAyGouh3LE5QWecFAXUUBk7UJjLZSE688bxU37CicfnP5CTBoTQXd41gVsaMPwmdBQ5tmtHd4W",
  "key2": "34WUgASBkKxS2STSA2KRhYxTRiifwPDTmt5rs7S8WWM1qvUwzZbSPYgEqadRd4AS3LmSCMBNA6qUpDX3WrVQFB4R",
  "key3": "J6WQxEDgMQmwbBUTdRaZXnJaSkm5guJTg8xJZkMxzo1WLX2pz6tk6V48xZ8AMPg46z4dq3dT7UKfKfWZ2vM65Qg",
  "key4": "2fYkoyTRUeAHKBu8K5PEG4SNHMaynDW8i78EXthAx9dqTbDQyMb6FWq4afDgmbaqLzfpAxmUAWh1SKbudRRfCu8G",
  "key5": "V8kKpTYZtXyP7AtFsFdb5exABbhqjNgztYa4rfc9GK2sWrTg2Cmewi7Se1hYm9Gf1WYMWEHP7Tzd5kW7mGeFP69",
  "key6": "311Yik3UrBNhrkPM8DDVR4o4pd7Jp4vkeN9iK1zLe6SW96dLF95wp9VwW77hujLKRvqBA8WGLULFepHL421NUXwc",
  "key7": "2E9SxLQ9of4SEiLgDyXDtDfajZJDYwm2FkFPvjF1U3y5BWueAGh6ampiYCC9aSEzuL8ZxE5gnHgC3JytkP9YpfkM",
  "key8": "4bsGbX3tNBMPKKRMvwQUQuZ5YZyZAoKTRrcknZQb9Xpym9DLYH4UBvmeScq69bTYtS8xoiNVeMEAYYHPHidJn4Yd",
  "key9": "26MVk8WMKY8PW8NJEQhbp3QB6iokQVSmZS4PUiXqbTq8FQHojzPbZ3wkWbucbPJeAxJ7qBxUNeJJjnur3L4ztkTR",
  "key10": "3xpvbZhSryEf5hY5g9LrQFWrdK7SJTWkKCxBRZxGhXPVkZUSgm18Sf8CxEajonugyEdEJL6qqu8a4wwwCgLzC2iq",
  "key11": "WzDAytB7TofiLzF7FcCYj9R6ig6HwtY8cKsg54WZQTtjW3Nboq2YvTzu5gpmX4XdjxKHqqJhcE3iCY7gZGz37oX",
  "key12": "3sic81usMWg1p86FM7PMdSaNbgZHCa5chKrNuwTjGSQyyV9JgCZbigtRzyjDFbPaXCeQEunJa66sTJgaVALyusxv",
  "key13": "5Ya5j7PpTQswxH95fK35K6xPAiPoFcQmMq9YEsMtKf4LCDkPtrk6ZMYFFowjP8Wwq5b4qcptK8BtZZgCK7R7JWZn",
  "key14": "U5KvTAsnxrimeRQRyTJVXWuT7QFRCJzCm345tDe97PYfj27Q3QgoFtQkQCb4GG1QkKhXZMJfzDxiXBeUuZHQLwV",
  "key15": "29JpHcauMPvyhsdeq6cZKhaSndqpzxtX5g9ccmjUqYtg5jzWseuFLHCTi6ugJZoffG1EUKWDZqnoyZJab3vHSCQP",
  "key16": "3Vj9MUoSYXK8KTDpq81AuhEGb16U83JeS1rRce4yrMkv8D76knJRUTi6p4U7ad1fZPS8ELPGHBw38qq2ZKMhJRLR",
  "key17": "3z7JTJ3odEtwYLcPexbpjTyRN8VJ11tDAuBBwMXickpTHDgDjMHLQGARHSEqP2X24FmW2UMGFJ9vkmf5c4mPKFR1",
  "key18": "3YeeoZfBWdoSMT4naezbfna8xbye9E8mSYf8dXQ1rJ7gHQR2MCVz7yy5rfEZ6JBBaLfL9nQdNweCzw4RMEcu3jNQ",
  "key19": "KsEqJFVWgxwm9y6YGRZeLTFZRbdiLG9zBrakoUkDTH7U5fQTnyPW4LvsiBaxPgWou83ERwSZxEKNhPEtbW7ESFh",
  "key20": "5k8RoTgjHiHGvuLzZABhwffWVkGQo7Qg7Q7L4sPp896EjdJirJWDrjQpeXGjCmZvJfR5ZLXG3dV73Zm6MTT1EwyA",
  "key21": "35Pj16Jd5E91GTQ1opPz5pytw7Vc726HP5zP96TqQ6YMyARbD4A3Ye72tSS7J2BzkCjNF2caJpn6sH7VmgrDA3KZ",
  "key22": "3ti4utZWGJC4teuveizFEK22Aaodpa23pNzHNKiXukx6TCVNdtz8joT8q8LthEecsSx6JwcjG1XeDefdgMVciR26",
  "key23": "5uGgzYfwLH47qGcBLtCMb73EzrwHuCDLX4GQbUBXRe59SRm7eLzp2aexXLmSpfmLqFWVNRpAwKdW7wapdhSv1R81",
  "key24": "57gZo6XKgCrvZj81V5cGzRaCNnv7f7bFyBZ5GAAkGetsYKimegEmR7ph6oYMy7iCdkSWW42mpzvELdLF7C9yinix",
  "key25": "391XwrnVTWXZfoqxstRugJiwpmjhUqdh7fL2yYLQeqvJw4J8kPqoFCacuc6o7y3WrcZAtsyp93JngDjSeUG5vgSG",
  "key26": "ncGizqW2GaNgpp2chNXWH8dFcRvPd1dXS966F5R4JPp2vPpwfuhtFPxXuuysBbNxTQCdpyuapkN7pefXyGr1ndb",
  "key27": "3YWgMAWHVY7SyzoLUp7ic3JNxPf2aWHMoUDFHpsDMiVmnkfrpCBWqKytaR6xNPc1Mi3qHhtxBd2Nq3uY1Z1HT6DJ",
  "key28": "4YZKdP3NhHXMWS1S7ZFeVL24fghCaS6aREdhX1JmaaL3Ew73oFyE4FmxNCvXxRLe2osymCTP1WnST1JBfyFyZirZ",
  "key29": "RFXmFGpgz9Jxbe9kFGZm5oJksejfkdxZaiCXhgeWxHmbmnfywqLqRGzbjqdRNysnvVvLktsbBXZhQR7F4Khhzqr",
  "key30": "5Fp79qFP3ujUcLVvKk3xKgQcCzvXbcPdgESaGTx3RodqTJcCTambExKBUGR4mJyYPunCBtruTCidQjU333morfBn",
  "key31": "1rjFgxNokXKoaY2BWCqE4Rar9iHArwiELQnC9tww8yZj9x6WM7utmfjT1v2qZpaJYJhAC26XV5TH9TT97Mmn8Zc",
  "key32": "5bGuD7QaBQg5kYX3wgKS5VsnZcFDuLB538fcLQE9fpZbRb6H813bNj4iG6e7o3AzLSMqiHwYjkBSQiEaR92ZRnNC",
  "key33": "5mu3aziogoajVyGT9wpvBTVCSeG5KrgyVmw7FkVecH6wE8cj9NvWGgzZaSnYBSFyxppteANBiaB3yAJRJSdprmtv",
  "key34": "351hETRBQfi3GWHYDToE3hJvBZtDHUJquwnb1QJ4oZ2cH7vAwuqDPW36UqRfdpUUqmPYRNsYGhC296Ehxb8HXVsA",
  "key35": "5v3Lv64ajs6ZkiDzBxwC6cvQCGXD1AthTfLUCfsNGXWR3v5CE2FkEy7sJzqPaoGyjBLCHzYWwHgfnvnNEo7JvDGh",
  "key36": "5VANW7fuFPoPUb155z1sCab3WWZKBFkcW1LGjTWNAAa2yRBH1iWoGSx8K75EM8BdNTMiRWXPWdM6fs775Kd4rCzU",
  "key37": "5pRTWij7orKgJ7VbCQ5mdBaksG18LFfyBQhsmrr8E5q1dQzQfsWDJM6DBYMCGXZPLh5w8sHRVPSBtaFqerphBsL",
  "key38": "41ym8TBkrHLsi3ym59E9GR7JiZRYujWP2PbuRQKWtzjqwsPvjwNuvKWFNW5uLRWcaMVByBixxBnxkYorLAgKu1yW",
  "key39": "5ggJErJ7SFMjRzGYUJgw1K3MvR5jMJejg9bRViLv4DHJMJEFmerCZpdnmsbuTAE5MEXQ66jjvC3fdvWCTxkbYqd",
  "key40": "21aryCTLHzEoZmRUMFESzNjysUTDqPbVcaVvm6YPG3BZDjYARkz8fyFwDn3inRqwh3cVpxYbFSy22Dc3dxTV8Y3y",
  "key41": "rnoQGq4bJindNMfGTm6vxoSNg33SNBNqLsdM2Rk2akGerjHLRvcgc9gXgudPnL3nSxSKSkcgTKHUY9WgHC4cTM7",
  "key42": "2zCquahYv2X8sTiMbPtdQZwdzmqgWt1AowTpHMVcZhY4S9ikb19kbVySt9s5sTVL2YPWCn2cS1otyqfd14xAqoa4",
  "key43": "qmoQiBQir2CeV7HtBxfSfG42buBuXjQPmvXPbBoLPWvyxH4au8i4Hk8YWdMcbBnW7od6oS8xSQHzoAaWJAX58uQ",
  "key44": "5KHCVjx8vjF8hxKQbSLhJfG18PVVfkxqfrfQ4DZdM73BptgsQuiz7Gk1d7pNma3anYA6dTrVzutise6qSj1z1asg",
  "key45": "2rbuANtA2Qx5M43ZX7xvcvt5mXC5rf7V4dcWm5LwaKFscJMBa1Nh3EDvceSs1aGuxoHoRqL8N6jpaBWcgHwZqFxa",
  "key46": "3Qcxvd1mF98PMjQ8tTkUnBGMaqv2wAoFxkqfRZRWraGPppEDVnXK1fqD65i5VDNG2mg57c6dbrsNNWBcFG94u9iq",
  "key47": "59oQXqzeFWrXeUAHqtFV5sh9mYmJTCtQ9gfAXa7mGcxotWkbsQ9wRgg9U1vLxzv7hdhv9o3siqKpATNeZTNzJcEc"
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
