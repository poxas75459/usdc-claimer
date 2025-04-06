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
    "3jTFVBZ5wGJdKLr6EPHgW5qbh83oGXrXSd2MJeXK1aUj2RyQmDFUKD8tV1FZKrUSJkSsg7sqdf8JXMduJMPwHXsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tQnkKecjh8hEYW68Z9EJ6MowapmNN72N1nwg1fqmVTJvckPaw8NT7HvtgzH1Sw7NN2pTqMd14q8iEZmSfyi7LG4",
  "key1": "6YsQ8MfQTugd7K49gxZkdVa3VnDjsswrrY6oUpiYxqKwWJgzcgpKxxBAcHWLTGEWHtJCgMMtPAcEEADRwcuFWd2",
  "key2": "59Vdi2me8d4sWaKjbi3xo1HMGFatDDj4aHG97VqH92mpuNv7hdjXKuwhJjarK9DkAssJKH4vLhhZjUAabSVcdyWH",
  "key3": "2c61PNJX4e7W4NL4ZEVHPdbdpNQtvHLqrtbZVgJpwv9LVfJUWwdbt8y2i1P6P2zLAPBXTNL3mDhKjAhUYviNzTZh",
  "key4": "4vL5sbh7kyyWJCJniHaJbaF81cpGmY7SRKRAemsdmDJQXqaTfwYgkvMUmB25x6qQdcpBmFc5dVVpbGwCiFzubfbu",
  "key5": "49uN6AuSUMx8vj9Vji3mPWaCpwi1zRWdJnoJ6bozuxdV96zczuhgMffvUE8PghGemvcJFdoih7JLra6wDXBPfgrz",
  "key6": "5ToLbF8y1yit1sxt5q82ov1C6daCWduho8xA5mgfJmnMk17qr1pArpEwW7veqPqNmtfdb5t8R8CGvuGJCcZ5r7bf",
  "key7": "3t5Nq5VNcGsUATWi9X4x3fDJri7a4ruTUQjAfyqyWyUSR4eiNr54jS8fSJWzUBUFAr6vXhPKgE5EtdN3cirPCCXP",
  "key8": "5ajRmstonyQdoHBh4MSz7g2DwizkeRo6JBsQqdTH5j1R4P1ZXz2QbnafXPW7skrjXu9HkRaTv3honCRLSs51W4cU",
  "key9": "5uW67NcrrsPV3EmwHZAfkdwtdUVKKFYa4sne5YpUAc3dAZ3y2dV55HeaM4n16MVFzEjhx7KTXLZ26vmyVi6tPVmv",
  "key10": "2CPG4MGWFo3CMB1zykGfXoYEeokDXb21KiGak9iJjnC4xTCeWsxBCnYKUgnrS8iHeqALNsNT3UHH2ukL6gZUZpN8",
  "key11": "4wKrYbGi6sK4ChyK22TyXf7Y3NT71oozKN2vB46mTrvaXrbbaoJ4kDcq2xxayiSDixdHvyGLHQ7iPUPmUucx2LTa",
  "key12": "5jkEKx2YNm7rhizVdu7zxucg72NPUfHGvVUtAFVCQ86KRMiP5w2NEA5tDsJdgvqqkXrmF8mJVRdDkusuWEFDRLnb",
  "key13": "5hdwjrgiyx8gBzAruQp61Z9ASUgbnKMGTbsMVu6QGE74SChwX86pxxv9eH6WDx3eGuQPQ8eQfjBBJYAE1vxCoaGX",
  "key14": "4H6FjsNT4T9eN7khMz1nCFBdEHbDggSrY2rvFWHfTc1gfnLuMvGGdjX9CWHyQQuGkCiqq8CQgGhAKYeMyyZaGWGz",
  "key15": "45PL97KnMUMupCH5WaKSYMpex3VoFPrbwvx1HFprN5PDKF2W5WfSiimcsmXbEZzU81rWXK59u4fxDwWZxZL3yusi",
  "key16": "2LC5DxbyJD46jSzLLPH2PpKt8dGf1uQHy2tuqtrC9s36wpUrPEekVAPg3Y3kmFGxsyn5LEX69oeCGHP8cD7EJhQF",
  "key17": "wJJAsWTS5uFbfNFyf2ACYtXScyqQqL7ry8BM7HU1AqwFCDhV25Y8vLE9GCGTScZj1KX7rPbTpW7ao8C71YwS4A8",
  "key18": "4UNBoUcy5baaQ3qJFD2Uwnpw2Vtc9svnmV6rj3toSpyQDeCWxax4kYsjjqeQDDWKZmTKg4vxVFxpFN99wXUKFmjG",
  "key19": "5fe9PkBgBCDqRQidHQcS5tq6cBZy8FayBJWmZFCVpnTrGshw9kpuM5vcmboiqLHDi5gq4G1axZ4JdmgFaWEAAVYh",
  "key20": "5AiRqyr5yJfs2wNevmTKaAAb6CXDxYxRx1czkKReEqQG3sNtx2hYY3f2sgTZ3AC1xZ2kBUomJ1yNTA3akRr6HiWp",
  "key21": "2whANHoazxknUEwAvhRatVmJTPPTwDyR82xnbAGukRVe8mr5qA3o9Uu5Gy9VsLG8zWAg9uL8dTYruQae2MiyZ6fN",
  "key22": "4ivt1An8XVVzDaqNoXqscZZN8SGHcQMQyA454CSGJue4AHMvCuviv1ksYP47NMGQwYt5uqyuSz6BqaVN2nf7mARf",
  "key23": "3rprZBxdSqHgkJDJEFU3FGmZmpNmzYsbFoXyYVRxAxqwpofBMwPCgWh6Q1q7vc7DEz8KTmV85ALBcqyfBGwYPfBQ",
  "key24": "26E4GTrSUPT2GGUcyo9aZLDW1c51cHAV5matDsR67VwzbpToZF1vAnnjb9Jo5kxMYXtzUY6eDt5kEiQRG5VJ2VZY",
  "key25": "5VrYVbVzrqsCVZv8peMGCRSkCHWaZwV7HosdrdQ3vUKAPvfgqLiAkx7f8vehqDmon4CZTKHuAY4m7Bww5TruUK1B",
  "key26": "29sLQipH1G7oTGuaPv6pizrZ7YZaCrPFWAk9GfhQ5AeoNZQLJ9JtXZLX1eLbhbY5XzxUrSsbyj9oswcNdWpPvrKi",
  "key27": "3xwudegDfjEjwN3TMfRbPwETDmbHBtKDJ1M11WnvJyoyGRoSUE7zFDe8CY1rEDMQLzu5cj4qH3XyUWqA1ysy3FYr",
  "key28": "2tGxgMo3EEEYz8eRSCxK8VdrhUj13KrfM38joTaz88vjqYgAuy8N8Mm5mc8vuuHHUTXDnstSL7neLUWdKoGmHY74",
  "key29": "21sGDPnibXZntHqxQ2CsrDV6WtZ9jt1LPpVSTn2yX8vTWj515eEWiteXvbqCwit7Dmd4ES4Rn1St7vNGagRuHSBA",
  "key30": "hyVY3vRd3JeYUmKA7D8tcyQ1RXqTjgiFCrXQHpuJ87kipEA1FXtQbWu45Zv6Bzz7AFvFABk82AM8Caoj5QTSbsu",
  "key31": "49A2BbbjwtaaoysHVwMd7D5qBr2LqC9t2NCLoBjRXmhizMALztLnVBRaFnBongxANGFMbhqjssnUBZNXpDY7VnnB",
  "key32": "42C4scvB5h4jC3deXSYs8KDprNXA6fT3AT2vq9Sx4CLXE4f6pT5c3NeKgv8UNP6SJcJmLWuSL2422964xaQvwRkN",
  "key33": "5oKDwNtz92aFnR3V7kVJLXgPxMMSj9CccdiJ8M4Ya4ykXTbU5NXoJvLLjp8zBssTz9Ud75qsCgjoXvdRf7JmE84h",
  "key34": "4M5ASbrjhExXgD6Gjdu2EeEWaUyHdi1XxJc1JhuSkK4X2RarauPQqhsPeqYU4aaBFvYTW8M8Tnfvb85GFh78Y5Q3",
  "key35": "dVMrG1nhS9uNpccXeXGRcLbNEDMUxuyCGFxRotih2uBbyvh31JrinGJHLYDxLT31uJ3VRL8QmfJgLQqXEtU9pLq",
  "key36": "5oDN5LC2EPTJb9Aoz9Y1pVnKTnKeHCejWBWkPmw4so8k8o1gPR86G4BveWgQb6nbP8ApqDi8abb5x4AaxcjBNZa4",
  "key37": "4ad9mcSv7oXvjAf6Q33tXwJKd9wHcrentKxWvqUopa89nydDSwmWPfpFcPVHeHnRFp2rpXKUJRYe9X7K4oN2yqjw",
  "key38": "3oi2wGuehnr9fWNmYAa2itxEJcjB6zKjCoukUKxWyHNgUpYuAAbQcUg4Fm4vwbU16CFTZqfiy3BeEehcEG2Ct4BQ",
  "key39": "3vNacix18q8ysxURFCpBFz6RVky1orXsDc8hCwAVYQmgGZuxjzLQGY14DZ253pLjKxG5j9qKUdPZiKe6x3rea23Z",
  "key40": "2ac2TYYqb2wMbfhsxoouMgsHJWy1gaExBxYDTqhU7aa9vYr3SRHwTPuDRrXBEQomna4iWZin1ZTqcRtKEfmS6qiW",
  "key41": "3TXBezFMLrPMht9mw3pb2VTTBkRyHLj78bc7k5Y5xpJXSsAFzYUQzCjPnfx9ddK1PJPfCv2fnZxCENR4beS2oy4q"
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
