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
    "432N2Vgtvwme2SJ82zahtPEqSyukhV6pna2KXCrYW4JjGnZwRSaZ78yASPXNu6BEfJR43EpfygVW1VrN6Q7VcoWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BkanaQnXd62rzYonx2wdWATcWfGVNeaaHvjUaCRBKoXFkSXkcm5vKr73csXxyrVJzJzR7pXrKfaio335dETifgE",
  "key1": "sS4RbSsF4USJXqz1dzy7n7ZMuPgi3CbaNbtBtgFvADaerQQqYhoyHuVwjX7yWucRPGmwDG1yavtgM4MQCfvjJYV",
  "key2": "2DL4SXUwazzJXcLFxgRoyCvT17YwNSqLCYt9om38XnhcpdJQJA3KVtqcZehGsmSVe7isNHXiuuj2CdvgarWg487L",
  "key3": "4TgaagSvhVER1ajUZ9eqbiFbKAdedQ2GAXbf9HRbgVKbDndDFQJPnn3ckRGfatUQ5nj348cmKBi9Y9rHmATduYqM",
  "key4": "4YUKyeyDp4w59KV3BUr7nfWw7r5AJqkcXSSx5hLQ4REqqFeUC9afnEYcAoGk2wdJnZdSaxXTV6HsymBtrrfj2aSV",
  "key5": "3GN8JrGindT2qrMWZL46nYWqg7jAgWbbWrUYcrvPtytSr4oXgsGRwrd6q1r81pkXsQPMDoT6icMgE1yqT75e4gf8",
  "key6": "5c571QYZNgjViVmWYAkbK7MKPcPaQzVEwMpfaRnBfr9syCfwKG5MyVPk5uKQdjVwZW6eAiR8RWLNvKmKeRzC9Ye8",
  "key7": "gMKmh2qUYtRoppDbxmDQtNkPFxDN1v4fPJTBeqLqVr1eWaQPMnJQDUtCj8mK48usw5WBAHYorpNWu5H1Zfp3SMn",
  "key8": "5T26QhTfJN3tekLdYFgBf8Kby55jhZuLJvrMQuTBcFnXv2xcJyKH6SM2QQwncfKmmofVYx85J3XmtxAodd3NJP8a",
  "key9": "2pho3PFNEX19W96Jj6yBB44rrMVGJXGQ9yN91c9sBbikJipNfS4maf7if79UrJrZrzARrtcieLQwFCiRi4nXNnn6",
  "key10": "2d1n5fMDGtzsq2a8UiGBSvMq1mb15FLG2VyrerYYQ7KLzCNJ2KHEaX9tEK7R2qkvSHRzp55i4EE7dctZRMsjdr5c",
  "key11": "2GZZfFR5HFDAUZKfHemDQZ451K56ZGG3ftuRcPg64oC8wgsnAdXogAR21p5LXFDD3df1YNUQkDniwCSHjiFHSzBN",
  "key12": "5X7v1S2Yi6e31XwctizHRX4RETS8XVyaftoWHW5HxfngMiLGMdYJC8o7NXe6o7bqs83bUPd9FdMwzswHcifFpZD7",
  "key13": "AzHL9mNeXPN26Tak18mjBDPkfcv8yn2tj3BHeDmvjz5bvnLNDFS1vWt5KDdeg71Qiwbfcq8kKJRmpVUWPrSHacs",
  "key14": "4xpL9XvHQXRFtfzH1d3sVjrXE7tZpQUjH5LukV18MBnBRWFGqCTYEh9EfKNcuXxBtd9RJs2Sjsb4jwAHAAEuoVBa",
  "key15": "5VpS6dsGm9NZ6tTo1kM3GDMKZpvt97gbK9gXfExH5n4wVTDy9LmKWgVeBj6ozZ7kgvfKTFQnJZvrdobNDavUqfVo",
  "key16": "49r18NNdYaBB4d4f3cQ5wiZv3oMJrYVZgRQugwygKKzgnct8deBbwySYctqzrzE4BqU9djWWU1Hm9HPA2ZMmG7u1",
  "key17": "46ovAVoREwtSRYeKnFUQVpDbzPz3nqZLi5pNZFX1wvPnF3fSBPe9hkFGWGzv7Cf67bTpgdZdHqzsPnS8937m1Phb",
  "key18": "3DBxS7ufdyUuTbmG1RuQZ7sdjA4ag1jagPAW1jq52WpWFQctXb8bi2ApYP3pLPEcEwGswtcgPHNXZRXjigUQqQzw",
  "key19": "4oMsdnGYBvhQs25k2Ldg4ZNyuayUJ9qgVXg7MzD5axEtH1pM5qyHXNt3ULZY781EiEUFbqKXZ8MkfwdtMArTn6e8",
  "key20": "4TGk2J5ymbJ1z62ktBwLYd2RALenSp1L4J9ECLypwfrW8mjHzcyNdqNu4if99wjhe7zspdWg2DhMEXkKEh5aTm7q",
  "key21": "4r3U6XcX7LYFzYszonRXZxDxEkXkPGzSDV1sywPE1e7EtNZaMpZmDmYodi6UagSN3bP61xNf5PMkYNgrzGtEXEXP",
  "key22": "66LFZH3qs53d6rtN1EkWCBPve6aqxXb7tKgwvvqNgbgWHMnbRUsS5VVMTsLvZJRgWKo7r7J5BBLhnUoqZ6CtCNvs",
  "key23": "4GtSRuAAWx7hD3himxpTg7fHGxTP3HbV33Huxj9HRCR2Lp74HATXjAu4caLSbeTMwpq8Pa2MSVkvyxyT2N99Cn95",
  "key24": "2bwRz954NpKnPCQ2EFXBTVM6XTxyGLT33rqVYVGP9XwzMM1RRJHQeNaa14KWnmtZR9tK9BApFBnjZWNHVptbpjo1",
  "key25": "5gQcvWgXxeyiiETBmuw6LxHWCvv6wKMF73dxszzTR6ZcweawqiqKSiyzzt7uvAwpYtPt7aa7VmbRsTSYuFSxh9St",
  "key26": "TeT6VoUWtTj1ispoqn6kLFyEFaM6Bydk7DhuSGSdJe72aQSjpd9rbmyfNcSBmuXJCbi8ardsxmJzRNzrBBc6g8N",
  "key27": "2EVFhtfqWZhKtkciEiJuAmvohUizFQaguvjimvH1qxyLTzM1Bw4jNNx2dvGY8x9chQ4aWvGunBo1NoLgVwbEP2wL",
  "key28": "438D5Sqqkrv6uopLbR6YA9wyWtofRUou7bzu4GLyPw6BBUnB61MdeN8w19KwFp9YqMmyLpCGxEdx6Mhe6gadeDVD",
  "key29": "5ajkNYxribYyHUZMJbxMsnqhB9p2ktPvnFs2cno49cHgY27fPaKxcDRMRsH2vqn3srRGVyex1HEVtSNqfWHFJQqx",
  "key30": "4e53ny1rbHnebWT8cQD1Keu9KukPu7vdJoVX582UTB7EARk8teh6NxrL68A9e6oStESYtXuvE3EGrnXSmqcn1yQo",
  "key31": "4AGhMYbthKVKFxoP3WhGsJE2WFVijba1Yd2gkG2pnxiMkmBMBQ4U9HUC43wmi8Ezu6KFAEEw7hYTgKJB2cWfmjmy",
  "key32": "2QNt8LSSh6engtt4DgNx5wBhT5s56PVU4CoMGyqiWjRyHojkZAEFXauYcxW98ufTqKXyoc9Kkiu7rhPm9NfNMaJ8",
  "key33": "3dGE2Awm2iS1mf2tLTHnujkDHPbpLXJ66a3RfkqD2HMZZwGjXPTC7V1chvdGD2x4cE474QqVLd7bSWZW3tngopMq",
  "key34": "C7wFDRXS7RNvRtcnJ3GGx98GDLTKTzfxkbXWvL3EdsLVwm3dJvH8cpqewYCrivQkS15VVBh2YVyNTqzkG6EKXWX",
  "key35": "2hK7K4zZQ5H9LMbTb7k64nyGWZwrjUsVxtNppf82751ofAUXr55v1jdNdmZMnDCaEhVfaqvUDW1ToprLdBHVm8WR",
  "key36": "2rANA1KDa9UgSD76nwGv5fm29NzRG5AF39m1NrssRgPwbuLRVnP2kcF6H379yM3RKXzh2QjuKQSnY2w1SYfYv9P1",
  "key37": "4BL68NXZENoG35PJBSmcwkPsdrjFeqPvuTnxz8Y65xACt7SYeBgchR4YbeqnX2qnyn1zhrPnixkK6T9NPuSFbjvP",
  "key38": "657ruecRouVNc2osMzSzdih39tYA18c5Gjw4Ev2PmySViESKnzLPPFAtFsskLkfanGoCxVEJXw5jR1q6MH6hCEmn"
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
