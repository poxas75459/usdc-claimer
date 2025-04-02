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
    "46jrUe5jPbXWmoDD19eZVTFSRMKcS7EtN7crSTRayV1r6waaVAuFFkhrfb2Z78YVjWNsVQQmuN3Nxsfr2hFupQTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58M8xrwHUy5LntgKxKaFcDjFJvgFgFEoyLZtyW1xP6SVk4SHJv5pg8KSRU3fP9mq85WZ7KFGcdnk8AHETdbTwKRu",
  "key1": "2kcjrNkohNdZscr8t2kWe7touWkZHTfAKEixgwKgMMsrcZzvd1YaCtk1LykziGZDQvKUtvZkBRk56CHzeSrA85pG",
  "key2": "4xwckNNzdyqWeEEophKoe4sVfBhzAumRhhmFkftMVmi315sZp34ZcNx7CToF7UpF8jHxgCs223opzuQUi37ftsKd",
  "key3": "2NatqTWdxDZcftUue3xMnVhVvB4W9Cp3jcPjJZcMeuUSNXNmLXk3mBTUVpDGBBfA3kkmgtvS27yJ6QwHCXNLuhUn",
  "key4": "i6NaLKsZRuUu1srWx1ebrdHf7AX4a21KdaCvCPAymhnQZCTp8TK9a1UUbDkDusooNcDSCFtVDUr9vxhPBPjm6WM",
  "key5": "kfwxkHnTeUhQ33YYEhQRmEAePcEihhafa6n54hV3EphRDMw9hwJKm4uMh68Wn6FnaLwtHSXSkCx3JafH91wLcWD",
  "key6": "418g2iRcc4sC7yaHZpVWiuJse2bchs1N9QEkaNusHr8vd9exJw2iyuqeSanEJ5a7Y7pQ8kDLkX1bE97UXNEkDfNA",
  "key7": "4KvdT3bsfHSRhHPXr1ANE98q2HbN4GFSunoMxPXEH4Kg8rBKwsiBN6Bw9UDzzRqDnDKSqzEB2EmqN32VwzbPXinA",
  "key8": "3AdiVBLr46R39zCWBpQQ56B9vBdvEKNXQtrSMNyv9nAEimJwS2uBg2ziruCJvZK79n81YfysQXP4TNkdB5D6zY14",
  "key9": "43Pn3bPj1g74jpzh34E4DVi6T2qNv28GvfvEJ4fY3tyVsaMLasZdmXsR1w6SpPNcZ3odNcVckX3ei5Y3TwVwsdgx",
  "key10": "5RqG6SCVtPMnNdVtgDeeYQLy6E2sCdHCVMWxArE6mQgLnLjdD3X9dq8oKgZWqGkeVpvDpQs1ivVrXbYuTFAhXmiw",
  "key11": "392eZepHiorLsZyXHjmTKYnPuYumnJY3npR7h4g7Lu4RGC3LMUaS8XxuRyXA8nbgPFDXhVadQDrzw17tdxhtDzp8",
  "key12": "2n3sCuwsxLAxP1Wkf8dqy4JBq4r9okafu7sP5aa6rmQ99VrYiXsGnvem91GLKsGoJ3qFckhTvVEetvXYyqJyDPQz",
  "key13": "39EAr4CvMe8bz9eaygRUSHyjHWy3KWdN7a1Q5mPhEAaiAiN8tryAzCW8mS2UNYxPNiTHUTv11FFNgomEy8ojztHs",
  "key14": "4zSVyMbzrcFiygEHVFSi8UDbjSxJ4nWb8SeVdGWT7qAQBpVpDTWyTYKHkJsiXtggpXab2phq3ontmVuDmnUJMXdn",
  "key15": "3gdxG3CRiMBC44aErnyPeH3VuEiso89JfsY7ghd6b8bjLVMcoPCNgRD7v23BdA8TkkGMNNQPiDX43cWSXvouU4Hi",
  "key16": "4ixs3p3NM6fAoimEMZ7pqVyHGYh5eNTqfHHSTfR381Yzo6cbNtYzg68iA4TFBPQ9HrdS7aRfSDUWdA97XJjLFVst",
  "key17": "3zRRNHUhScLCr3Sb74NGtWb2Vuw4MB1RvbN4bx6VWXQWWjfV5MdqbujRR6VAVETMfjeEczjK3yHSinkvbSvCBPh9",
  "key18": "54mgcVgonSXhLRVKuikpzrxSNBvJXnHih7QEteCVTWBorxXZMgLxMmd82oGWx4LUHoLkmyYZvuYXxy58e7CgQxgM",
  "key19": "5m3ncvYuFi8Av7Dfbsy13xedv4hb8c5nbtSHbGg6ZFLDtG5VPvj5WjtcRTfxbZuRmHZp6hS7f79x4sqFzrT6dq1o",
  "key20": "29ckF1F4jVQHY6FcspwxvsMMPoRz1oAEWrbL7epKz9Ldt27XzEQeZ9Kh3M2jQHDQoBUVjNWj8HNr8ihfeKFQPdSn",
  "key21": "2sHQJMXb6CXej1QgLRdyc8CfvVikfk18ayTibAfD8eGS1mKH7Me7SAEkbc2mRicHKXmSixQ12y8UzqT87QTbhNc6",
  "key22": "3GtkUDyEp5R62qpp5Wc4uf67TeAiApNSbep2DsGWN1R8syqTwDpKZeMfsfcYpChWnP7Gzm6KgtuReTzimu1TpnG9",
  "key23": "Rgu5sST9vyU9jQG9fzUe35AoeE2qmK9MrmqRzio6qWjYnGQPgXNXC6nvGd8uQ22D6PnoHc9CmvV9zZGqkyWYhLD",
  "key24": "UtgWHGFUAaSxhBtjzite7pFig9Cp2YcmoZwso1CYcaoYbJ9mZKKs4rFj76w5FhYwTuGQgVZNJNohwbpBcLzcEhK",
  "key25": "2QaxPCpWJpfmzm6vRjMkU9k8sRxUrCmL2MSKARaPfNoLnJx5TjVSqDXc3Gpc7GEgrVs5d2VmPvsGwZ51pce4Lwvb",
  "key26": "3V17u5sYNy3TTYYLHeyvccDfE6TPLc5aZcerA1n8o6suvnwSTx7S2hLQhFzLuJDmG1jN89i5KGqqU4RQWAMZNsxE",
  "key27": "4saFpHx7BhDW7M3CxBZ2T3tVKt2XUJ4uSnktLdL6xvGYzN149B1Q6mTxu2N7MLk9sx9z7g2tXdh8rQVAiu3eo79j",
  "key28": "4grLKoUbjiEp5GAnpkKGKeRFpMupq8DnupTCsWyeTCfgYua4TtB47h5i1ApmAqyue45tYVKejSyBqYCfjuAFCqbh",
  "key29": "4mVANYXj3seRyAyt6niXiTem1czvHdrzvNuPdf7pozxxJEQELPnu9qWo3v314mdeMN523d1EWChuaWAtvhwFCaxR",
  "key30": "4uEpNaSsHi7a8HKLXZkmBJQ3GdYsDMV5Fd1XT4yieUBg49QLQkP3DHVZJM5k2vwsZXR73FTCe1mGG98YVpHFCwDV",
  "key31": "65hTgp7WAUgDgyZ85DkPUeB1YUASt8aKGqkPAoqfSWLrDWvJKMtzeedBME2ymAZ84RZJfyRKkxHEtz3N4qDKbzAi",
  "key32": "5HMgq8iXz4k2mPW7P9ZNWhk9aZy26LD9cpf9yjPAVT6iYgDgRvM2i7uVJRSv2EomM5qC6wNU7Qn2yheXmRFLECGt",
  "key33": "3oUCQsMfB44HL5BWkJArx8YXfzWkcLHUzkJjoQppfbZY1gLLxsR455HPYXuHgHpr9TudKKxwEpZ5ST1GAU7ZHsqo",
  "key34": "ktqdMYqsWeXqF9LUXHak8QNYBB9wDarZoKMdiEqnTKgLRvHXRQdcNwttA2uc1wykSSCCfM1ZXzjE61ZjjDcdeYQ",
  "key35": "2MtskX7mkATcPxeGXiEZBoLNLQwSs433gueQVzkSpyG9Jc3kxyk5s2nL6qWRRHdFEwMkhMU3cqA56f87q97VmoGG",
  "key36": "3NVeZKmQb9QGgLCzWqaj3FE8dncU8yAkmxYBmaFFgwyjVZNecgNMKFYF6KPWzpxgYjA7xfb5dB4QuszpBXLEQPy3"
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
