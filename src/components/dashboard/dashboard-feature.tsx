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
    "2RPFrZ74Pi983SB1VXg9rRLudSRbo3b1oDNEEdpbH7tRNnW8DCzZJvWKcu66HzEBEVTBwbjodp6CdPmqBRTmtWGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wHbwfKNARJfpFatRNotmWRjvJiPGWM5y65gmZWMNnqkfhJhiJoTxvvarvmC7vh8ebX9GCFPkueGyoNZZv8538Tb",
  "key1": "2hUrGAW1xobtJTRJT62mb2PkoVSE9ifW2kHX4vHdDGt9DP27SDNxo64a7Kt7CqtykpFt2nqMKXefuWgpmdtzbyRn",
  "key2": "A9q5dfBzn9cNRTVmGcXmdnXz6VstecNXQRgu3oPdFpxHD9rAstYdXyCKCikjhqgmTcKhT7myJbJ4aQMNZ6nTZ8R",
  "key3": "2FJ2tMZeYVE6161RcKocP9ETs7DbGiNgR3WwtwzSh4X56wEssxndKm16dzPSkHQMQWcxRdFPTsyfKASXY5Upm4z5",
  "key4": "5ND2UxbariFFoSCzGw443rAozJchrGRpXTNW6U2mSZ4T2Zemw2VjbAQkEoWtPojSrMT1MYNbGEWCULoCnrrRyNop",
  "key5": "21tx6jyW6z3a5YnQtgucx5QbVYPFTpwpgGQ8r6zMLzxfQUtwSjB9TARGUbGa9v2Hwzz7n4ApBfN9bb9YFRs2Zrym",
  "key6": "2w4JH9fxZsah3zYpBNaM7TnsidPFLxFSubuzTb3hnfX7CsetufPMieuiBAoiuYJCDCPg12igpY1Vprguq54u8MVJ",
  "key7": "42ULb5darN7EAEoa82BQ2o15JrERE1yt7NMJeZGQuzRNLHLKfWX46pFou83YVhxokdc4M77kiGMtQkxVgbGrXA1e",
  "key8": "26t9zx5hzhyoGkfeSJEDENumheBxZJ2JgCRpfDhwmNoL5bTcTFcUCnn51HtGrRaiFkpxnq2hiipk7fu9BrgPwx9m",
  "key9": "4pwBVx9cDWM2abBdLNw3wTB286rd2fWmK38FjbdJR3BVzwHvTjKffCfrCBARvdNRPnLu9prXLRwAELnX482mqfRc",
  "key10": "E3dtP3v6cwmvKgLqms8au5S7B4HdDU9LDj9ADHq6TqzC9JiZPEwM1EECx2Pyz371HFwf2Ct6wwEeisrUuXwzSPE",
  "key11": "27sSZCv9LvhtM9HUQFEUXE5wsJbTpsRUX2349GhMCpbNWnFk5s62oUUP7HEWrSNa6gPmX5jRGXosX48F5DNMgSdj",
  "key12": "3jPwfoV11nQ89pJVEu2iWn1TTajBdr3Z9xE1jDQhhJH3nmj6PSpd3ujZzHcrXsoyea5T12Gh5UH2LjcuVFvY6Rc",
  "key13": "c7DrRrgUvnGBXeX7vQJiQZ55b6k4f7hW5Z3dYQ69byCXHWPoyyZarTe7ncJpSDf6Lwxvfe6jm2FAogi2pj3RGYc",
  "key14": "3tgaSuGs9z5xjved4X8nvM5jLLnd3LF9VNpkkeU7HboYJqsyd5R4sdo97ocVYH2RUzh6cyaagCk8E3XdqvfFEJXK",
  "key15": "3obirdYsBuVnEDtcWJBXhbPNJa8BBrqAsNs7k5goyBnDW1JCDKoXwrJqr7PiR9VE52sZmGUk8UrqAfUJvCrwdCNz",
  "key16": "2hZACzwguTXUQDUSut4ALq4JWkYnun4hu9q6xpj9NXkWjrAwNtB7DfXzyXazkW3emRAwf7pmoyYBwUNk2oQfvyEN",
  "key17": "2SWCX6575dasvn7P8w3tMxdMfYeze9CfeyTyMaujLe9jB2z5h6nkne3RsEDprD7oQXvrSqfrjhqmHEYk3XX9zSy5",
  "key18": "43J93TU6MPQ5buYktwboE1ue8GnMias6fHpCE3eaSjzpFWtvvoaX6eBdwrdGDm1VVR3D3UBKYB7gqzj7a6nrM1vj",
  "key19": "4F3CRrLnRdawpDS2uLoJwF1nDR4jTWiLauutUqoMXGRYm3NKPPi7wJHUWT4pW3irpJA2qQiMVndtQc24o3GXtH8y",
  "key20": "4j52vxxUAx564oebSXXDnE6GjCDikqDEscoHjJTZgvkneDC151EfZfvi9aNmuyQ736qaEk9ppgWjHQUN8zY5bbDh",
  "key21": "43bu6CgSGiX5Qufvk3725gkcCeBhYJGgeCGQb3rKGac4DKDX7c2PDYM7Zd86TAMShFfwXQ35jKHBhtoxjLFRLVpV",
  "key22": "2V9k5Sq65EVyJooudtDgfFjffnFpg9mHexfFNNCYTfdTuKyHqJvHjpr7d6JRau6G8mzaNmgPvrA8xjJHYwfnKojo",
  "key23": "3s2jG4jNTKXSyzCmY9kk4cPLfcghku3SJQY2EkiQEN1641Ui495jKvgiPjKikzeV6JRRmMdwCHcJt2RKnsWJQa7a",
  "key24": "36DpeJsBmaq6NWsXDPymsQS5muGMvRtwqxVJik3mWF2vi74EK8gB3KHncANzyZzeH5JuqcBaE76rbjUYs468qFXM",
  "key25": "8jAjw4bJ64FtaKSMMQj7S1sNXLfYYLfkWdJ6tbCezo1UQfSTnVhyV6Wup7r1nJBvmVd2Ek3PosiBXbpXcYCVxD3",
  "key26": "5riyjWNLZ1821NAxJo2nUbisMoTJrmGtYN3VU6vQbrKVp3np4nkAbotniVopp3MfvR9DMd6F2pmFwWyieWLjm5SX",
  "key27": "35khuECoSU8CVxDhPPczUXcVCwNrZjt8Teuxc2jgXF61suPTPxde7AujyLn4tbjrv7JRiwnbB4XFWY65kuQksZm7",
  "key28": "5PZtabjbCyD7ySMDCuumsbMgXncvmvht8ZN65LSC8YJXQahkx2KhsVvwGPzqixQzhjCYxM7KyVLBCtkxM64ddo6U",
  "key29": "a5L47rTTDSijauSWg5ouJZjwgHrtnetqcpnnW8hKLW8TnfyjYNWTK8xcZpgAzmGsAM9yAyJFhuWm5B63om3X8xH",
  "key30": "4YZ3b17rP5Kn23Y1Mx6yoRykKFGkaqY2mZd5JQHGCBGLgMabDWrzMbGbktu3KbciKjbNxDd7i3pLgLZyfwUfCeK",
  "key31": "5Y1F8YZqEBJAxGqGDQzipFAuLFcVk5quYeZQZmkiBwdH27gW71AhKFFkHzrybMsmiRDSqGDrjBNeY86XE6najYwD",
  "key32": "4vsBXkY7LapkyvZSu2LpcHpXmjT5LNK4xtV53UizdDKv8v5J1rwu9x74iSFae63qBiqELY64heK5AZgSQ1fU8VBz",
  "key33": "3x77PQT6AizxVoawvJ7iSHc2Q74VesvivHpMdWMTPwBfQeVvNJSrWTMm8BzQ5d3GctoRBXSaopjQpY4FAEcb79Gc",
  "key34": "485GNsUS7tWSQ97w6kJ7eXqN4fiUM9DQi3j1bkbMa7iMF7aU1KvAwmPo71vqNKG6obwEh7VsASP1cCHzgTFtV1G7",
  "key35": "2YDKBfbbGxzMDXaW4XWSBAmmcpadmxmJ4YKtNyWnsqzH9LqqRfLeJFXggbfQLZia1iyvfawGeUbwoD2Y81K8MpVL",
  "key36": "ZKG8JSUUqi2VeyqePMCRVbLQekt8dT4o9mVD2sDZZje6xTXFTHLn191qjPeKTsnM4FwhnFwReAp9kZG3SLZL7yA",
  "key37": "exYARdi6WGfbxbeX847t6sHGTjGKy1fruovmqRCEVAa1AwcScPugDnPxBbb6qCzsgUVAUc5k55aqPuPYX49vzLB",
  "key38": "2JxkrqnbZFGS9XQyy63fiDaqxJLgAdo6ra2n31PdsmfEkjdi6LUenBJyFvT2iS3gch9uCy3Yb35Hh9N6BTYuFb4Z",
  "key39": "5Djy2EFjzPcygtQXyghpe4gBNxTH4yrqwXjMzCMADsQNvxSYx5NRSo7upzzXNHuPTWZqD6pyXCZ2CFGNkX9Wa5NK",
  "key40": "2wk7SNP3eXedM5ntXYapa2bWakLXUFR9M96ySVWoLfG1PMJFjeW2qJhVe9agAMhyN1SfKHfBebW5oT6YQyXDCDMc",
  "key41": "3y81W5pRkL73MmPYzjTi7PeBrEtrE9hk2TfwjsPBwiXW7WdktaeD8BETK9UQdh2AqoaPB44w8hS5gH4GLjQrUSy6",
  "key42": "26kYs5aZrSibcbsBAKDJbxbRTLL24zz6L4iPorzmd3jRVntmp4YMD3ir6kTANyFWzrm28jLBnXdwfi2oBis4UDMx",
  "key43": "3aB5eqsqSQPGmifr1kU9g66Ft1WvA6jjGzUCCanjRBT1Tvdsp7PYcuaM2hEnC78KnnWkHHMYktn1anX838f1vvM6",
  "key44": "mAVAq2D9TiUBsHG6GgNUuuMnbQGBFng41uB2YBkb4Lxw7GVoSUfc19P37pkuMBsogcBFkZUYnRiccz1atwP5t8E"
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
