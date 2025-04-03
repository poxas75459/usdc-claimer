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
    "5wtyRXaTCNfWgs5BztPpT1yZYxfgjT9zEMKHpw8i63CJyCkbgwebSoU1AGe5t8XGgbbdYL21P1MzaMWrjTyBrcEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QG4FYdP3iawW2WZudMtdUUNeDFXsXobkryHDRfKqUyAm7TjhbzVZHESGug6fzUnU2M89vPF5sD2cdQ1CMH7AAtp",
  "key1": "5r2pMXL7VfdzB1X1NP8AgmRnARPv9BJNcsRKSSndNjpEfB8KBeh2RHVnbvDWLAepXQrhoC5WQ8VwGmvtJtK9auCk",
  "key2": "44ejMNCDhHN6nC35xKSut66KSBiwEvKCmfYTX76dZVSN7dGQ3eibcSN4inSpM32E4mcuwaNKN6wp3dP4vaBTN2rv",
  "key3": "2ghMNgPqfAbR4rgkSnxMFAjA7939Sze1rUYN2Hqa26iSgTDf76jRiikWszqy71pnvTZmfNhkRF7WuaozQt2SEqrC",
  "key4": "6cARxwRDvnYpSDBnB19nG8a7KaRiEG1XtQBPY2p82LgD9dH7hXyajCf4Jx46Xb4bGQ2rbhzGgFYaxNN4rbfn29E",
  "key5": "3hM51M9BnJGfVopKTdB9WKMPGxQxQ7p9wqbx2PgJCbaWLxiXKt3iVq73oUrNkcNySgrrWLaScgvFM5QQX4Q1pC7h",
  "key6": "4qzaet1iLwdvxxwn7S23QhDhVAsrbTYcU9VCnn87vH7PrM53SDQukNiMCZE6qsrCjKeYv6FJQH8RWxT1eHMqkTz1",
  "key7": "5LF55obfbKEB5sYmNgsELD5z3hYrtFY2AjQvBScjgbfFnkrLFQ3yskESn7vvNVdWesKJMj727xWftgSp7nhJYqhb",
  "key8": "3yMHQ7VHt4ABv2aDCwkouTSYmFLWmuqrWdTDJncLMfuDok3C2uKHevxUCrUHYkqW3yPcpzMb4AkPzjJANjNgYUv",
  "key9": "3KyYw6EHquJSi9gf2kQbeRKufHB65qkkiedN5T4unaJhLdzyQvehsiUcT9euc1PrhX2V5yaASym6zm2GDqU3oDs9",
  "key10": "53bL6Cyz3DWNBJFvAgh3PBZ429J81w3o55VtNMqQencXjku5QEqc6LMqcy6W3YELUuPXrycMYWeDUrSYSuVdyCZp",
  "key11": "dmTvRGy232dW8WJ7dzaTMeVaYb238raTEE5uG44orNyWDxhsER1KWdpd9usTYA1imYbRTWm6DD7Gc61FizE9nrr",
  "key12": "oXMLKNxLwDXHknBrZKCDq1StzS7yjM7yFe6d7wwwCkr7h91CMw8iYQTaz83CmUP56zgo4o4f2eN19ESYjAoeFVW",
  "key13": "2RCy83GpzXp7CR49Ai6VfCytRchDAWrbhJKx3ccwivmQcEXgMZSU1sPbHMBuoy3Gtm6TrbFmpzq6pEngqPfJUPzy",
  "key14": "2XRNpCob63gAP119mJfb1WUydRvCwaDhszPSURWVhuMpFXxF7Y8L4xRor98bGRG7G4TUXft5DkwsA34D7XLiTXMk",
  "key15": "aMz8jEQNyFE2HHCCLyBedKbAkNkqh5bzn414GRRbHH2gqk5a4UK5XEApesf2B7EpdUh6JUs1BuqT5m1gihVfQER",
  "key16": "5XXaFxsvxvEj6siRhsexoyraBust2wfmTjRrQED2mXiZDeRoURhwTG241MZRXkLLyks2fEvsLZ2f5yPj8yDB8PoL",
  "key17": "2wGkpWLrw7mEdUUEdkx76AGxwkxLNar35WD9jnHuHAGGPBk9GFh1XytPXd39XNHaAS6f9PiLejBr7su6e7Gc9aVy",
  "key18": "4G9u2Xrh1JbMiqd7JCDQYg1kWmgKfhkrEYEw8VLsoaiv8z5sTbLDnce6weLp9Sz4bC8BUuDhs22dJgrK93X4fMaC",
  "key19": "5kZLwhrJXRtg8NNM6zvewrP2BxZRBE7wFKpzHBwn1MkRt7NJSt6BmDkbEafnKHWdbxg4a7EesD4RyPDqTE2i9hZk",
  "key20": "2SiAMzDpsH6Jrhp99aNVHWcmt9pFrMV3jHtJan4DTxh8duF8iYnkaUMmMSrCVZXUK1FLqY9D2reRemgv3D88x43M",
  "key21": "DHUgVTYZnmVFjQCPee8qxNgNT5qiZ8nLNKgR6BoeTYTTKWSubEF1iYByCcMocEE8e25DDWqKyirNXQkdwbip64s",
  "key22": "296wrHAHDMp3shB5vir4DVmUdMHxWf3ZrJG8ithN66KHjPdz9HJDffhyUXzzrMwbZ21yv3RPJwp1Sw6qKF2rGE3H",
  "key23": "JdqT13Ch3V5nBxRKuH37Fc2uic2MtC9a4F4rjiEdD6RGjjks1Puyxy1teQjscFLpa44s1NCcJRWGepHcjFbzEZn",
  "key24": "5EECfhFR819W3fYqWL2sZSqof7YzTsxsjEZNMaqWydap4JmQw2gdSdH2ifhGi3t417xeUcKhHNzCAaHavFijQ2E9",
  "key25": "5eyFV1i2AU3DdbyvDdbwax2g99gHkvvqjYyrTBZnEgkjdzumwzXk717T4Kr6KFGZsbSsQEKKFvydKETSYSy7eQ5Z",
  "key26": "3QRfiujhFYQ6atHxQayVHeqWDRUhng36a5SiuXxyYJMihkibQe2yi6LRFYtXYNMThDDc2pyp6y1nV6wHhPe4oPu4",
  "key27": "2LvsV9o9heKZR6j7T1MgzwfafXynxGCyEUjCFidWyT9LCkNCX8k1Wb3bQyrFnsoBE2exFLkDbR5uEmTyehR8oVom",
  "key28": "4Z1GbQ4bbh9QrLFM3GAbGos5JTGd3CTedDYMQxSKCBhQw8mWBMZ9qgKbmcP4N6m8i7bSaKi7hqaknqeaqCUNpFu5",
  "key29": "3ya7LGDBaJFCXMK8vrv4Esc2MxrWv5L1dw7XvpikZeeYAfLWHKBucSske9i2zekEaYF3yGeeg1WJKkAipoUHSgZn",
  "key30": "yXjfo32hnWZzdYTG8M3QzpjjoRg6vGNZ6SBqnyHfAbefrmoGnPLi8Vs6xVSpF6vtNtogdnJzLeFSuUQCm2tSDSa",
  "key31": "5TNMs72nmCZFBBCpz2ThQ6TGYyBfVMekKWpkouB2TGoPzgtVPPLNuyGHNs7uTww4DQSuzNsD5eXtos7DVSU7NE2h",
  "key32": "LGQKFveT3vwQPWebSjENEoHJScKgkrn5VPQ8CLewKqdkpKNsufRYXC3MZzpUm9r2zp83mNhKPhRZFn539YbG9bh",
  "key33": "2TG1UAurQ9xTNfn3mLqSsyZFmAcrFJeN5cB8zCYmF4g6sa7WHhxrhwJenyXNbSmD5tFqWRgzEprQiVdvK7psL1cj",
  "key34": "5VhsvDRHqktvxaPBVpDJ6f579Bg61G7Gih82nKzjAR2eVZgEsARSvAYKAxwbyjgA75ZcYhgjj6Uix3VKKRtVHxCq",
  "key35": "4neaB9nv3YDr67hPjPSHfQahJcsew6kk93cWDPZjUN5FVGXzAF7rGXcaRm1VrCZz9WSz34sArZDMsqWgGWYbEquq",
  "key36": "2ko7XJNYs3S6gRMZmw72LH4WDg2ny8UJzL4LmbMpCN56YRdWYYTJH8nUjuVMJW22AMHLK7LLcV4DZQ2t1XXv2HJ4",
  "key37": "SLLwCN4rFTUBPjLmxnUycS9oXEMmdACRfBvh4mh3PjwqntwzUhUbvX78RFyJAfGAnj6RgWx5W4mLZofyj2GHjt2",
  "key38": "5np7yVBrRvunqiz3dgKGg9BkoMzKEeEg1ULwNNUMhspu3CfFqqshz6r62HSuUcw9poGuKPPn37RXMVpgCbJpUzFf",
  "key39": "3TBA7fh4J32tqAjNVeizKRYS8AjhqNFMMVCQBw6Fk5yFGVemwbJ9FdNC5rSTyT33CkaT5TmKQh83g7Y4ChUFZqjS",
  "key40": "2MhyeZTiSe8HSzAeVBpQcjvoGY8PCEZgcsAPm6ySdS1JsNZy7idLBixzKkyZxugCsq56CidC5saYa3xgEMXTnEx8",
  "key41": "4wwRsYn2zBFZKKXEYf8FP8Kiab4E6rAZnwLhgTRGqFmeTHvqWQb4Tn6G3qtFxb2GJnguuaT5G4pD6gcTvdVRnJjW",
  "key42": "5nMbse7JUVvatDP9oADwDkCopiP5zhk88WukpKVksNnYhsJkQX6tB5M1XNuVPbn9KT6b6E9ftawJuyw6HyzjvZYZ",
  "key43": "2HR2yAeGArQ7CRiqHtypLJmQ69BiSF28cVgBHwNDDhUqENetMprmq28kQRVjhAuRepZiG7Yb1cxmHUtEfWKbTEVx",
  "key44": "3zZDN2ZkbuetMoZYZtkgvAJ4ZHbNsns3b9CXLynPRtWFpAYZocbVafoM4WPY1QJTprSch69RhiMEwXHZ3mCeCbTi",
  "key45": "4hPF6NwzqB3j4x9Ch97tJ5Yzk8wSigQXkjXWjuo7VUkPhBeAaZ3bstVr9AdfQXPm1EUdYevmj9nYLxs8ABv1djU3",
  "key46": "4nnTFEXHrLRZUudmmr5USD3VnEa7LHXyQN4ZxcKDMhwCmWxufPknvW9WJbBCSSEvwH6Na2NJfVReNJHe9NeLhYyk"
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
