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
    "5r6Ye9KCLgLvFDAG5XAc6VA8uUWSHC6WJbNCK7eD1gqFrnntT8B29xBt9gbUYbLLVNFZJMz8MZk3ABaUNSDGDzjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4onqReMVTDxztUndrbDQb5teoRtQe2nTUiiHrQXecckPFWBKi42wQZTDCp3S9ykoihvKxd3mzQAuab6JeDrEeAxh",
  "key1": "2SmQn4fpTQR5bmZDnc98zURDSUof51yAR7g9EABzb93cUgD1PCu8DeWT3Pt7swp3QeMDKWi5qAZQre7VJpoaCaPf",
  "key2": "41aw7VixVucfx8SVUjMwZowCqXnzDpbSmCmd2CWdd4KYNUqiaNpqxjrHLG9mhXJxq4jaBEbHMDN6fDarYLbQitAP",
  "key3": "3Le3XURkcFw4ePkVuK1NJ1U59ap4nAkk1NtqXtZtoTR3ejZkqxafhwS19SKGRVCrS1ZTVmN7b5s4z314BdjT9qXs",
  "key4": "NXQZN3Yqe8Y8B1RjdMnw4EmEEPMJHoJ7L3sNKY97wVvZyxp6L861xNhjFBcuthPnXJCXiT2fsnEm7hZv4iqcPAg",
  "key5": "22prgf6w8bikgjERNEQcXotQb9CrHzvTuWdufDBzmg9gAEdEGRZynGWJBS2W45Xiez3Tpm7qL1LNXomUTqCMtWpJ",
  "key6": "3uwPdG6rWpQXSDaxJknsbVwBCRZQwzsp38PJuTZaFADqCz8zyakvRfrqdwK6BP622AwoNv2F7xzPBxwjeCtqhkMy",
  "key7": "59gabuMnN2YkLe2hv73ZDde6aD2YuaLzDzoM2eCQfsQjSwCSTBKTEFoSnvHqd2hGcNjSFDKsbDq2QYFKeRzL5JJU",
  "key8": "GM5jmzH1UVU1ib5swjtxnqiKkCrbYhrgCTjkkG7BHEzABLff4PxdfTKVYshxYgGWUGTWpVnm5R3Xv2MS2JCnppM",
  "key9": "4WPzWobst9gzSg1WchQmp1ndF7Lz6J86R8dfqA4TjcwAzcM9ADKLfsoWQXxCsTrurbS56FAkqMB8yEucprcpX62z",
  "key10": "4U9gvpi4VEnG5F9FjkfDP7rKAfBD6GHEwEcoyoHaPr8fV38LJM4dq9KK6gfZf7WogpFSTA7xFpnCK54KqcsQzZab",
  "key11": "2Yt5bUwrA5skK4JcK9FRgcQUpkBBDdCfwshx7y9BDD7RHtb1LFZBonJBpjyCoM5LYSjeafZCvmmbryQ3wuoFhNsg",
  "key12": "3PN5qfk6CWnpdmj8V8zqqwfFpF2vTYeJPcEJrCLwgudMjQfpG8ZBhFR2px7c31E63F15SmbnQuBY56docVjHKRSS",
  "key13": "53EciPqPmdH6FSSTuPYPAgkigcyRmrEbTWo6f9nfYrhu1pSMLk2amkx52VRuNKUExgpTugoFNbQca8idJ8aZr8rW",
  "key14": "4X41W6f4sM6QKVzJver4WNK4JqEp7HwhG7vm5624j9PgDXHC6jRHzyKVQHR7ApfAwaBXS6WVnh5Z7miDtz2yedrT",
  "key15": "3R76stW1sZ4o4AfoLNN3p3T5VuRXcVqY9u4nFpRcLzXHdsxP1gNgWDqHmN9YdBkMWsddDzqvNnGNcDaqYtzAT7Cq",
  "key16": "HH7ZF2gwCjHyJrnPXeefCuQhTks9hRrjx8LZMLhNjhhRT6LGQHdbfLUcL4cHVrsN34fSH1ioA7Wy9RXg9XMUnXr",
  "key17": "4MJ44A14co1wt4Zep4bPCV2xvruqAzraKGtJLdFm3uNTq7C8WcqwGaYAjvgs1NyXr81oyaUeJEzHgrMJqupG4iSQ",
  "key18": "3zFXockHa7VPfQMCXPzr8m7TfhieHqGNEgJWQtVBDKicLaw6y8iTrUbASy5yCfkhp4REFBi88WTnSmRdLEneJesW",
  "key19": "22LX3QZpo55w7Ruz2CsH7HbtZRjYCPogQc19Qf6X7Uz7fBeaUBpvo3KVx7fPmo2Tq7J6xqBvBiDfTiH6PWiSeQPc",
  "key20": "5H6sR2H43vj2icTXYWhTAtxZQa68xDvHdgymSGqp3536f3VZXPWbYnMUDU7EenX1DnwEgXFNYPBDBdcFRXJER8pw",
  "key21": "675cZMAfha6B4pSaYHfqhjKZSSkgfuTw8Wusi91a7DsKYRtLEyVXJzYNBAKtDf7UfyfzR61f2CBnyKw8t5NNdyjZ",
  "key22": "36TfasYpxFAF33M5gG1kqiEQCuMtYCAE38LTv9SebqPeRarMSdjKu6NcaCLp3dw2teQRwxL2YAFnq4TNN3hKGCzh",
  "key23": "DwrSpuJ7X9RV5fPkiM4CZ3aDQWrd6zvRAQDzyYVUp8HnqQeGXXuPnhjkB4ZqXjZiWyBGcfJQm5MEUVH9nFAxppt",
  "key24": "44zUa8HxhLrcG14L261cBT76E6qJCn4XgNYuoXga5oYMAGHG5inuiRaj1pTRYS2VaSSm5vcoMc53CE58fSR7PaZP",
  "key25": "4ZxkaH1NpchdNYBeVvQV9Ai4eNeDTQ3LrJkSHxzsUuWugc1Bm8ucuZidtyJXXUHHsQA2cFVcirjKbtKViqDFW5w4",
  "key26": "3rm6LDDCxhDMQ6yuvPBk8nAgpPU9yri5njNmCfVZX5a2s5jJX84mPtQJ88ru5PvAfDZUAbpsBHgPKbQVEuQT4rj5",
  "key27": "Zh7pzenPGnriBZE9GAU2tK82xFktJFVVEgLJCNMZRn3tq9mjyVYbHdJLY1B6zSv1bS46Sk9kpGabNbM2xM5nSUB",
  "key28": "RbBmQymB8cTHRGu7qbCruvDDdmmUuVan1crhWYYLjXgtY8mRu9Js8AfYZtYY64WqTBXBvnz8QwiXGyNb14hkRK6",
  "key29": "54vo7vrffQNPZnkftNj7cfG3uztedqwAkHTfjBzQsGrwtTURogD3vv8kphD4LeTp6mXVYDQbkTAsEeMHEbAmp7Jh",
  "key30": "48br9WHYQihoCDRRbkzFHbYNXzhBnSyxkSsjnGqhUEfb1bbZnC61Sh8nJKM2NpLcgRuCSfALcfM2NeWTZb6j1wBq",
  "key31": "3xs1hQGVfUN1A7KHzy6VCxnCuyEbKyWY47h1ZodoMRpHsDKWzfS6xET3k8c7mHXPFLbug94yixGG8ySQz5qcrtts",
  "key32": "4SGvQba41yRtZLB5WZbR1dNa9Eztr9zWiWm7MyDw3KHVaya2MkQn2HCGgAYYwGLjBAhPPfWE6s79JJfa5VefxjdY",
  "key33": "2rhixtykiCCcx6Cf6mx6AoALbX14vwLwo2FZMgjHF9zZv6yQ3dy9ZBjxYdRXT79fLttJGkh6q3CyFgMKYk7pcuqN",
  "key34": "43vAbDJNexJKQ6JpGufPuk85gkbZo2XW29niF8vU32tuMZyYRTJQ5EfU3PcyW2quAopTomHqXRFtiZbKytJmkC1M",
  "key35": "3jULJYUM2jvvotzBwGm3JGgMRSs5qMe4skVS4EmkvYkQyLT1PufuaGMLTnM4etq4xmb9EaCwK8f6SxwMqYQRdPaC",
  "key36": "5vBRwj7anL2C387PV328ny9dr4cX5rPRUfBye4vuAbBCK2VPb7cYFYu11Ywxpk9MuyXNC1wmfdbSvQedixR3oLFq",
  "key37": "56taHwiX6MnKHY8n3vW7CkBmQzMp28wd3UHYpv31oPwmuQVFwL3HYP3uXRG7K2pwv6JF7FJCnM8ZBCiq3vTnuhbN",
  "key38": "F6NyNghKk4rWe6LeP41CR2GrN2i4rxhSjNzssW3YPg95oVzJmULfjfq3xKnHhEUD7NesaKarWH5wSjW2Uie6kKe"
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
