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
    "4b62dXQeFdUtnFXYHoCQ5EytCmdEcmt6erQy9w9BGpwkDk5ddidL88cQN8wkDi4quuaUaAzrVFeqQ3fGPCL8DnyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uCqKEXdZARPs9xURXMjzWXNRYEF6WhyNY1fcQs1uZRLK6TH4MRAFndp7YNSe6tcPPZgjR33HKQjN2RGSFSJo6ht",
  "key1": "3XDMdTM99ABjt88CqmCQSNfTziCZ675f7yiTT8wh2rZgqLSorDSRFBzwGHxm43r7hVWhzSN4BWCRU1RKjjpYcsGa",
  "key2": "2rcLQLci3VU14i4dqmZtrZFTRyxjWnEoBUwNVUnBetVvotsMbSUopvfubDJtxKVz2hbMeW9Z1NcqbrXnGeKRJMBw",
  "key3": "5JGDFeWuN8QNobzYzZnpJMD1dn7LRESaVr9bizjkPeZqH6MnCVrhem5CShNrgykfZnqX6vgBhjf8P251JdCCA4Ex",
  "key4": "4x6f6GB3dUfjcVqtRUzMkWWamr1qtZK13KdA4iMtaWb3vo32J6QpqtwBrRfLvDEWFvgfk1jybCiokEV13uN4VMZc",
  "key5": "5dNtS28atjpXLC9mc5NYYXQwdD5kXY6aVhbLkmPiWSZ3qaBhgspHJSxuq2y5aERwitjdG26Fkk2p13AoqsGXg34M",
  "key6": "4rJV997to6nKayQJEZiYLcjYbZMAZfYaHbR4V6YaBVbhYtBL9B5SQpdsF8rXjC7Z6UrMx2Et3x8d1RY6m1zB9yan",
  "key7": "3ZrQG1PKmPyCNseEDMWsG6qaKxgxVfEgbChLViP9tg6FVi7e3Q2KBhuvkXrBgTe44bauTPCnner7G7SqTTo1geEm",
  "key8": "hYfoqgpoxLANR4fGCoxFh6iZhxaPe55cMQzVFMNJvcSS3NVWvc5ffdd9tRo3NQf8eKXSk8HYPntCF6KKEmbabyL",
  "key9": "2SkSLwC6oCK7M7g8iDkwnSVnEuKUP1Kyypi5YaJ9v74hQHVKUvpyaW6beDdNabKXSzkKakCFj7SeByhKGP3d4FVD",
  "key10": "2dFdtDAWbBBGuKPrgNPyfRfaktxw1Ee8qbQBDEZsFUc3tLVaQLEN8YfZLaVNAupz7TjZP8nnoMtQxb6yiDmhnBYo",
  "key11": "1Xc824RuoAF7U3E2JmDXNe5mwPEqtc815YZqrUATXrKTCTzKf76E7ZwfK7QN4JW2UshYy9n7EJZPyVHWdexgMvE",
  "key12": "5kJ4KCFmFEHq6ngHwNXJNvfbf74RGUQ6dphTwpk2hHTxWD3UjuEGUzDPFgcvptivc2dEcobitUnQtigeskrbwHyT",
  "key13": "5iR4cBaGNFPWRvuQ4Taj68Dp68Hs29UcFjaRbYWSWW9CyMtmuZACLBbz9h145QmDsT5igMVUJjMV8cqYkLbjtaw7",
  "key14": "5MEUp847DRhQjwW1qFPoWX88r2AgrxA6nEoETA1X6yq58zzkvTozHudzt5j3LKg3T4b56Cyc2JCSiLSit9pivWCz",
  "key15": "2XL9XbfDS8ouVnaHwDg69WmjCrH6ojjG7aYYz71tXeoRrALHYp2HGAv6GgiE2bskbCRa7byxF5JyVmtaaGppmNyy",
  "key16": "22zXHCaYT1xHs8vRHqejFgBZJT4vEdD4jSTYQFeyLqvs73Eu4k9dVejmiUTNaTYk49o7E7W9w6hycGkw8fVkFF5c",
  "key17": "3FLgPiyQyfE2D43qj5aVSJgmmbBL8k8NiTzssoz8JZaFXXujoPCSiL3VJDQqLwPKV8fefsknBhe6rbapBNNF6bsH",
  "key18": "4XVkCd226f5Z9nvm4N2hkzXAeAe2Mj82vR8VgZCek4DVje27gKfmb5oSqJSG9CcTMS747vDFPtvYScJVRWLeD5Cj",
  "key19": "4fqNZGkn8JhKYbv7xG83HpmkXupJEBqjgApUc4KSZ8ivQ34AMNyrkmjx2rpijMkZcZxnx6sQpKjBQCPzspcSU49A",
  "key20": "4f8jpz7QFuAVmRJ3QVxhNe7d6gC6ngSuT8taMvC2MGVL586wk6TkvErVdvCpRe7yaQ6EiowTMv4s6VCYsQKQMbTv",
  "key21": "42bEX1qBp1tzWKw4735MSvJztCuZ9WfC8o9jHXU4gC9qwxWJMwAMHdLHXUTJaXyZm4Ezxg5T9cPcLrRkwJLYRGgh",
  "key22": "GVprzJFtXNbokqj5NPdD91rzBZrDNSAbrnK2tBn8nFVxuTPZZp2GC4skJeVfeS5RDkwdj1txhjbjUDxeMUG4qb8",
  "key23": "5yJ186VLd9ydZAAVKtvDWjRdMePNeT375CBTShaRs2M3zGJPqG9WfmRRhpwLH5N8oS7N6bFsS9ikvQDsaV6sNJSS",
  "key24": "44FfEKrrGd9cznKFc8jmHiVLADKLx7r9v1MpS3XduQjC1WUUTHdJsxhk5nUkfS9SiMK5NXdaXnpuJ9RmmQ6aDL2e",
  "key25": "38ak3zCrQqCCGCJ5bZpXgowZLpcmoUpAgoFVLm7AxHieYETZbxARHbG5sD7yf8CX5W4VggxZQ5p927o7mNT1xtVQ",
  "key26": "YkiNk7Q2mH2b1KzToKM5kn9LuukxG9VNFyVwxSRoYTs9J8EnEbvg4P3m7qgRQhJ9PjAVn9TpmCj7NxK4oMP6AQw",
  "key27": "3NCcLE3viUNQciQCLhTYERWssY1iEWeBLCwbQeQ1PWgSarmZBH8WMKHsZcmzGqzeeRf6GRn4coRmepzdwZbhLDHn",
  "key28": "3su7pbzbLoLh7HeD2BdtX8QztMWmHpyeAEVWRb7QWVuFLQdKGLts46cyzLAAg2ov6vPeEAnGyTv76MxarCS3onrt",
  "key29": "3FLcmDWPMh5zEhC77sowGn3jc543tN1V8ambbZWQVPoxjtZ6JHwmnv5XAqnn5WsgXDsMdpYWyQ8EXw3tUmp5BFLi",
  "key30": "E9U2ce6ThrqVWgKPSubPhG1c1mp9D1jTkET9gYBfFidBxeZHw3J1g1uWLumQZ9978aGkvecnL4tas1S1KamVWWa",
  "key31": "5G8dnwGheYMnchhcXopaKzoQDS9gLV9M13KfyhLEoPHbHNWJDxPr9ScoJ6dCpeFWYLZBA7JXP1ocfYkQvGLatJa4",
  "key32": "2W8Nyz8a6zS4B7bAnSi8NshseGPVdbihrgte6KLQRFfEPpDjVxwjQE5ivJhJGziJE3B2mkfgbxcC1Jz6rro4n4EX",
  "key33": "3w3dVDTSz5b5xrvCHX2JraDcxBHif4EhHYX2Gt6cfGmEA13J3Ncnbfw5pgXBkY73xrBcG4DSNH5XKUnQtAScJ1Re",
  "key34": "2nnGm41UEVPo25NgCu1YpuJ1StAP6c2rGsdu4thiQoFAvWAG9gESksdqpBgFhYHCmmRFdtTGnPmxQD7up4chQbiD",
  "key35": "2hs7BVBfZ1NbgZXvuV9raVDMQCoZ3gQBTn1oCtY3asREKkBKVMfnxWAfKu4D2PQtPjkf6YyfAq4wsuBVB8XWYNd3",
  "key36": "495f5Au675pKYaHucDeeNfL9tv5xzg3ghBP47SnGfn24cpvpBrNAfikcH8gAVsq6s7azLrHGhZn5QqhqngLEFnDG",
  "key37": "2kuegBa4QwvdqkHkogADiYc7zHb6aS4c3kAFSvzTEXrwSSdvwBNDTBGarCnuuBYt6hVmvqMrnukPiufJPuTUwQeY",
  "key38": "62W7Z1ZunmZESZEHryNTzW4dYXC38w6G15Y8nHZLfQRfFRasD8szjkXzadDodZ2mV5kvM58Jctyc5h8usYhXT2ch",
  "key39": "5MpLFQF8n73gupSBVaegw2fk637WamFdWmEuLesLE3v5KFnvnrWhpGW6fJEurESY6wzxep6SrHxnt53iGnB4FCMo",
  "key40": "R9TECNvEDkofVwA6BBxCtNT6Hfi2ta5B3nCgh2GgGhxCc2ixBTyu68kbszN38vkhW3LfEy5UZzvrFeqGEhG3KCn",
  "key41": "4149kDdR8udVv6o5ng6oRGCMX6EHaKgAYz4E8k6mjXPo2SaQ3arxqC8KXet1dxrsgkVTokLkF2JZwWx5NZobRW4x",
  "key42": "2kgQPcDLSwB39e3enD2P29KoeLo2qHZtVe1aYjWgBVhn3RkQ5xRLD3EuxmXFhK8wkAaVikT146tsNyKENvMhnFfR",
  "key43": "3iEjAkC2HuJJm3XSCun6Z2qHT6WhWiJCgcCJnRCbMLkDr3nyzFn5z1QVg8upuowtqZ3B42VVq2KsyeC2fLqBTzQq",
  "key44": "5jMtecdHnNtSHsnYH22ZbBKq4LV67ZQhvaiRLZByjgiQmAV3nDBj84v8hjxspAAMwPtGeRaQE1Qd2ZWREy8vm173"
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
