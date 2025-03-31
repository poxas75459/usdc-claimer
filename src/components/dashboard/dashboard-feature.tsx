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
    "4CUXn4nmxY7YY16zau3SzgdMhY5XwJC9U5rbfaFDES3sYJF7axibtcmpNeniVrSobzuDWdMUABqAqSDKjaoFMhZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mJsTuiKUeHAX6zhrm4sESnMeC723u5WsYoenZyXK4KWUpPrynmxbpzJ8ep6XPgEzy7cam4RV6UbVrcfbGsr6Ruj",
  "key1": "2w2c4qNUFdAEZqhSvZJYAgfqZVYCEKL8NScsqHJV9De6MZjShPHVviXKHP76dAXvY16Gj8oDoeQCrxTb2QzBeKFs",
  "key2": "5i1GxjrLJsLh4LD5ZAVVSkX72QvVE5BEDjCEBsCZBo3UXcN7Nd9m5i7MqxUEK6NYRiEmykmF6ftRyfBEJF94jtSz",
  "key3": "5SpXsH7BcA247ic5jQ9zcCQXk8Cfrv6hQHuACUbgWmbXhSdEJPWAChYeBn2iCo9CGSJkV4e7DLaMUsGuqgimZQfM",
  "key4": "43Jucnj4dXjXkAawrvXTaJzzVnVdq4BunadcH4LuKhfdDZnsMeWQUDZaVESX7Jd2DeWVC6uW1Y1Mn2VQ37XiQyvr",
  "key5": "4qr563mmnpQyiFMgpCBySiquiNHyLoKmtNW1mPbYoxbutk6Tu2sdSzaAso66RzKh2PRXkPbHvqHRpijbMtL45NFs",
  "key6": "2KL3GKAb6hFVWNxDTADFBJV39L6nPFGH1Gmx5rd6Zw1PPWBqhdBDvb5bNkkFzCsXmm6M4Aj3DTjmGVSHoRWm6rRC",
  "key7": "43rZ8wKLN7JqXLDnzgx3pn1tEbgNoij5CG4d5ib9dCCyHn4NXaVCNvPLNwtmCzQDvyR4zx4xLaiDn4ZNvKuM1HGC",
  "key8": "YGvYP7AobJXqePXRMoJrKtfxS84mmPtYN27RRsi2i8E1YtXxpycj324HzJ33ZYxAuDUHztokDVopJ5pCNmePp1K",
  "key9": "2N3Q3eRUGRr69r9m2mUVGLjEfwvURLxsQ3seok9GPYj6KnEmSGGBsBckNSiVQTkmRdhyN1reEC7YHXtjHL3s27aZ",
  "key10": "2FNVzx8LS7L2fTuAyxNusAcmiVF5oAUpUgLrMyEsy3XnFjJw4qptzQfJx5AXmZeyCALyf8X7JBPDWcuzq6oe3nLq",
  "key11": "47WjTdequatue2o4fYdh2eqM78SieJDfxPBgo1JFMxGSaMJMiPMi67tFSyQFg9QrN3hNYjMb8gYY59CJg4QREnDS",
  "key12": "26Z3DAbK4X49REGWRGR56NLVfmtQijnxLNtzkWRX8MjBMv1yW2WEkbWJZEeTwz2MFYokAHgd4SFpTMZegR9yLfuo",
  "key13": "5gUN29qiaKW6vHntxYmsZ2LbZE4gqQGA6duE36XtGWncmbRSfSSGiTosFxeH9zH2Wm3XsQXsxz3ywHsffJekbJoP",
  "key14": "5LinE4efLe7thMHJ1VvQQJ7gxLTHfkmETvQ13yRwwT4TrjhfLP4aX11Ja2WRKARsMN7zboPR8PZx5SxqSsYRVei3",
  "key15": "iAELJeed8SwTUHRNWDDCmmJoQUcG1adrwrcNVqp55VkfNTNBemXC5yd7Ry781DmZg89v4jQuFFBHJKJXgF3WnJd",
  "key16": "3ZKKtooXZH8KBTrUeQJf1XesoV1estxipTBY8KhidQNanwDi7iSSgyw2Cz79qpQi2HyneZ7mdb6wNxagxJjQkD4t",
  "key17": "drzqevNraZjHpZoeAypQ4cufYvuLRzchtZRt1sqeby4phcYzvfQeMiSesJjkzpPdywPgofzrHJcP8C1FpoRdeJJ",
  "key18": "4gLnwfmp3MGTPaNcQiZAK9YKFp9J6qzdTXWFkfJiAXh5BJsTDfVFBycMbvxzmrgYz1UpqA9zqGUREmfafJce4p2C",
  "key19": "2hqkpHzUepWF826uBEtnujrqjoKoBHdEbm9pFwGppM5HxBTPYpkrZUpQTmT7LrAZY68NtED1TN6NGtNPBxUtV43f",
  "key20": "5jWFKW87v17fmwyemsEJaTHScW1Hq7gPrqVYwtwhJ6YW9HFQh7xoHhzdWQovtM1cLpEJT6oEaHDEw8axd1tkvsTb",
  "key21": "4auhXfdF8JahekNdFsg8AWridCcEoXcyoE1q4bUMY6JxyuTw6MaUwivTHsB9GTVWKZa1VeRBtixoM4hSXHQ7j4f8",
  "key22": "5Nen1ipfxE4bHrUf8kntATDUsHvvfFHLJs1JTJybu22e5ziQNRX7kss7mNfFTQqdgatdEWhoBpKHgfbjjumBivC8",
  "key23": "4f8N27EXFB8nGDmFE6wR5wMM5ywDprcZ42TCBkZYGrkZy4wsiKcvHrgm3PRp4NNFM5x85sErVczVeg99X2udQTfk",
  "key24": "3gwPW1auTNfeUbA43SKo8JvVCu1DVGRGTWzjzcKqZvdetjNNitR8pm7XVDB7FAjWPdPb6yZhYuwSdLdH4iithmTD",
  "key25": "4wLhEbusoKNkjDXbBgBhgzqV5KMccNa3MNTyfUXQrp8anRY9iqouQVxkRi4FVVhkhPgADwAVJ199bTc3fnz5ZZGp",
  "key26": "48Z1dVHttyiGAC37edxqrSGRbtXNo1KmDvfCiGzQdKTrt3LvqGMG1fPV3vTvbYdZhZhoGLvqGtkXxfEXx1pqLUEF",
  "key27": "2wVrhERDmNSiGipEBixSFcCxb3kU5fMXCUUC4dW82HbJu6Zt35uh2qT27NWPoKFfhxKHm89us6adnNQPutzWQ1sL",
  "key28": "a14fCGm4SMZDrQQZAwTLqQ4eihKhBASyDkRbP21dWkyWxNZYo2xDGVf15nmjB2CSkPfK1mX69HbSQPcbGGu1bVr",
  "key29": "5h7zKbhtPcpmZHAVUbn5XE2VvKBqnqEGmAD13wakvgKyBJuxLiyGtn7HedrJRbDnLvtZo8mqSD2QudsRoDrtMFDM",
  "key30": "4E2Dd9MqhUb8Eev1PHgg1RSkTR7GtXKRLWGEhaeZSnmG1wUPaYsjSNaqeqE9nTTMiQh7ZjuLsaKyws6J3D6ZfyrP",
  "key31": "9qbNAtZXGXrcGuApJ1PEEBsbbAKQt9yzu6YHAvfaGYi2cErK8LJYazUUgMYLRzucmoX4ZqPqWb6D72fmeJmvXyg",
  "key32": "YpbKz7bhjPYUZ9FQMbAYPJhDw51hhmPwyJi529DuhCEKWcSX26WGeRRVM79tRPuKKSddM9Xd8j3vU5WHCiA2BFS",
  "key33": "3FxQQcDgVjHYZUGhCJeArVTjPVaevXyoEbiA9eQ4i8UdSpDGPSLxNeaVW2EDnxEVvHiqvYs1aqb9ZdP7AfaxMaYr",
  "key34": "3RMLU7AhUMwt5axQZKoUgQ2YwwQS362kyREjjZ3UfyeYHWDD8yHXvYKj4hkNgENEFfUZs9NYzMG7rW8aa7ndBBHj",
  "key35": "5nzzvVLxjQKivXHWc2D9UXriyBZRSFVRdeVggM8WuLwyczqmY6KVMUi7Q32qLhL6nz7Nxskhgt6wmmosHZ9a6eeL",
  "key36": "2r1U4aCjZpdYt3d9TsiK6TheNdtkjQyFWsZvrtdxbb2e9uWRHhLdB7WBiQuDtWPoaNL8dnqruDhunYPmHZD8w3c4",
  "key37": "vzbrzkK7tcANvmZhrAYV2xWMYF3Z4kpdsVLCTmXRT6Pemr3EvrYCPYEGJevK6SMWMqAw3jDrwZb9eqhEnmBytgF",
  "key38": "4qD1NJvPBZHK1LQBmazLzhUUEKEGd324fJMJpLyzNQZQH7Scnb7EmbsSZsRwwNLC8HDWKieKzkN3ka4er1b9oGZZ",
  "key39": "63gLicdRQDTFGCpNx2LeVECgLA33NTQzAVMZaJoqiU5yEE5Umw5WPa6to4tXii3bduvp8DFZvtgFQAhVyzndfQpd",
  "key40": "66UVnRAw42tUFkYDE2qvqALyXtpcYuSpp5XDm2nMYCaBBok9SBxRUxzDff51sn6UUPoH9B9fRE8roA8KpVFvfksB",
  "key41": "2VixGjJ7eobZrXpoWEDXok9JNpazqoxnshKsWzSJidWwiNB4rK9FAXHrW6jRqu82YdrCFYJSek5BN89d3drEMfVE"
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
