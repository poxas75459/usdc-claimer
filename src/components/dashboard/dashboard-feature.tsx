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
    "fmye5BivdzzDA6vmLRdiuGYQhErchTkxVVg8eREvNbZ8STXuvAHEcZM3thF3KbRh9Np8AnkdbtTdMAt9sEdMzCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Bar5wha5jCfpK9oY9bW3j6n5expWermF4TJASsHB9sdQWoMncycvD1EjcaNELL989ZiHjk2cn5rvrv3BxqGcEA",
  "key1": "3f8QZ38xGruuhbK6f64xN4RNTeHVgpKT8WU3uy3pwfXhUBzTkrBQ58G9YQXYh5nmtZBiBmKh5kQ5mktMEX2a5ZjE",
  "key2": "43Vzottf2p7MSv286qpvDRsV9i12WmZwuqUVHBdNJhbqGFpX8ncyZ65ADGtTqfY8LYC9SqLE9dKWrzhpXxyxoZpe",
  "key3": "46dhAGm5TQGQdtMEznxPtCsLvViDyeGA3MgtqmCGNCe3faNCuYtw9dLxun6XZdng4uc2UR4KDXtAD28eKgSBaWTT",
  "key4": "Czw8AUmBkXmPwv7JtLcRTvJF1HecKT2jBETWXFhkqZfnxnCDmEhTDwdga5ThUa2QyrGkQTm5AnLgLqPykNBuGeQ",
  "key5": "2K3ffedVg14wWjqruoJ7tWu9BcXLcTtcjzpdGYro6Us2ZLhvvhN9EzyAEjwEFP2ThAD5H5aFzcMJF91WPWdbr9g2",
  "key6": "miiqJ7NCDr7U8YWZLEZn9HMwF2BrjVJFzPG3qtqLPQoRhWJzH3iWPWJdruf5EjqC5LyqJZNEP2BRD2AbwXfTy73",
  "key7": "4xitVGfj881cKKkYCJjwuBtXwEhdUNHHyrutKwTtQRE1avMxZ9XaWFyBfsiHVSjqU4EPnazuZF8veeL6besY8nZJ",
  "key8": "3k3iwTy1Mkt9WjbhEK6D3VQPwjjhtY8jeHT2GhAoohy8Jsj2fLNhu5PykuNAKo1qjRSAfsNctsJ44FxfvmswG3qn",
  "key9": "5dT4WUkoo8qT88DfbT6CCmwzZBaKvDsssLji6a8hYUBTvQFSuj8MKqbVbrBexdJs2kcKGBzyrn4ks3rhnKcZj8NA",
  "key10": "5F57pG5QqAUPz6tc18C9K1bFMojjKqjXTpzQoMsff9i5i8Gxfoabi9XNUTecVJ9gh8ugdxn4YteRLUSdqJTCchGX",
  "key11": "3L4k1mzhv93ZFQdDuxznNCGcmQSJm95mV7bTNaYKZamgi742z1JsCf3rmPugDGsm22nHcAfJidp1BVLo1sGq7FQo",
  "key12": "5eqFvrzRXALLDetzy24EpdnoD52ttin6zvwLPX5AxBzf4aimbFE21LW3BwgZan2u8vVteYKakRNuuY1PMgxhKBsp",
  "key13": "3SLypFz3GAxdw8ewHTYt89oRK8yf7orxGnnCGyUDU5aETNrpYoF1vxyaQMQ6oQEEE7TqteLB3ArspbWmikwEvtFy",
  "key14": "2STkK8hv5gurGt1nuuALzQR8uHXa8CCj2XNdXHe23JdPtNYerehUwyspFBrUF9sn9jPVcibw567BUa9j44gGPbQp",
  "key15": "DxGLc9rSYeqCp313GDwYNN1nxUrg9TKpnKaqLkxJrtoc1ZTbBvAzM5mjzDmQwHSmZLD9Zwtu8Nnagtot6QV4gfe",
  "key16": "3XwhcZWqTAcTawDFtrSUvNWQoiGCJWX9BcLhKWWsrRfBtgEHq2Lai3dYDux1d5uLxTwX7H1yJJLyQUSm5u5ikHzF",
  "key17": "DieVyzAcpSuacpiaWnLPd7CssCkbJSkQw1uMTD6xC8ZbNd7cnqJoRJ87dx7XYgomybDLGZu5X45P6xmeFPDEcU4",
  "key18": "5JAchccDBr9pDrmrZzwUt9eyR9s2DBj2Ws31mUEXM48HmvNUVdGksQRrZnLcxLsYAcWcvQ8JDdfzwjmcXguEHeZp",
  "key19": "5ntzgdQDFQzVkBMFyVsPfCPjpSn3uT5y1rL3NMxw8eJ2vWJAgwJw4FRpqshDn3LbMeY9zNMCgTjuY6g3Qnb9a1AM",
  "key20": "cYNtcVa1Sy1n26wqSTmecbaaBHvKkcsvMPRdTXV95uoPyiCH4dZYpqZm1iinGgcU4ibEFdQiqfkKKB2c21Y3mVw",
  "key21": "3eTq6ayoPDMgTTKJNNdig8cfo5Uo8ijNE4EL579JPVm7GCzjHjpLvCjyZ1V582ByJRWyQSFHTwET22MdDYt4pSs",
  "key22": "pxnZtPY7sWADWNuHCuMbaJwHnwy8LooSnQhLLaLJammk16h17yAJAwvUr5jwRa7MF3cKG1wDiVWn6TwdJ5yePQk",
  "key23": "2LA8oWhRR6ZZ8DypPeEyzqDJA7rwxvz44oXsgbaK7c8HJeBTX1dn7F4muTdTrBSuU8VXqwYSKK6xRypSeSBRppAc",
  "key24": "59TCFwpaFZnjeUfGNoiCEgZQvbaTqq2PPij8xz5nimLSjmRmwu94kKChppfp4T4uBvweZFjtnERHTsqyN3iQ7VQ7",
  "key25": "DhQSAzgkQoa96XB9cPVnAYTEYNBSWpmPGUCdLALpwiFqtrD1wwrJKRfuGZsGSLu5jYQ6vueACATiHztUf8igqqv",
  "key26": "4wHu8QcNeyV8qgaF69HNbrD92qJGMyStMCUdEyBffS1Exw3gfGTZT8yXmSxnnTRuTGGducwJzFftzbQcpD9vbgkf",
  "key27": "5SofdbtFnCAM5CDqA5njmqCDvCr7gEi7wXakm3T8catKPBxdWEoVZvbpHezWJRmKBQNFgDA99odcq1gcfC6CS9Ay",
  "key28": "5TpPMBJQxnAi8nh6NUR7oRyhzXTDXvv9fPZLygTSBH6s6L9hjsCvkwBndCrRxb1syH6yK8n2pD4wdSgp3BYybjzM",
  "key29": "4faYnNe8eZEymctncZi8hA3YKYzRu39cHYVa6mFabz9s82gsVqNrTo9PMBQBgKTfqmUGqh4oV3bJsxQgFyZHJqR",
  "key30": "2vQtDrsdRQNL6kSr5D8kTNrayvGanwq7RpZxoYu1eipyQ3sKSdzrCb3YSBzE8hxxiAxpPHXMwiQvbbd1T6NeqT4c",
  "key31": "4i8xxjdJUv28sQGsRovdTqGHNynm92uqJRSEZPjbvMhTRbMeHAU8ZvLGbk39RqbQuJ8ocwgVHFAsGK9wkYG1Rcn6",
  "key32": "2YALafT4pBkdmRaBASHT9G7uQsoGpBC7LMhnuhsNN595QgXjXZ8u9ZPSPiYws2YQJvPkC6UNFEoKvZRd9GauzCjQ",
  "key33": "3CB2c1Qc1Qqgt1AdJwBDo14EujxQJ6SMXYQXWgSaQmMqJxEkgWdR5bsjfJNYgxywpD1GPqa334oYpvNKaJSw4LQP",
  "key34": "4AhcSVoNjBAbZ7eWykdcm63KkqJhZxmnNyt6J8JVEBrYLqDCAeZiYVgWbwtTUDSEFswYTW8qddA4QSYs4kGKtogX",
  "key35": "49X9aj32MN5nJuY6Ay4eYmdrG7k1JsZUv1CEpxcgWiRticV3bXMRq38nuDVbSbjNomMBmsxkQXYrokJYDiY86spL",
  "key36": "2VpRSzwM4pkiGrD55DosWYhtarrjhWbN8GKnjRYLguZwuPSYUB5zD8BU4oZaBHX71XYDeZ9sBpgXPTFekZWucf2j",
  "key37": "3UAuUnJm5A7swmDgHZB4Esvu9WYEdM39pnVePS8Gpa9vn3EWmqK3EV75nhg2EcFePq6RLKgTrU7LybRaAuHsdgHT",
  "key38": "3TUXrNYAkGjcQgAsqVawgBBa8hVpECNMJGX2hH3iXknuF5qhwcysp5bHCRij2Ebav4bGMN2wteXWfR7ca1QJ7aT3",
  "key39": "5M49L8mmnek6LE6J5J9UQuWN132MXUPg7wd4qZ5eiom58DFtEDWUQpqCJUV8Vi5Wu2J4r6rDwKUbrdj4HgiFniYj",
  "key40": "3twDBHwN5oHBC1jtAtPbrVJsVW1wDBo612zv94DKCVpbgzEDF31tJT6kNrbAN7k2e8DezbVbdG1duruqMotL4akK",
  "key41": "3x8YkYP6uFswybKoDVVyFr8a4qMuJHWmZMxCwQDN1Dq3EEsQdHiwZeJgHMuJEGzgsdnHXberQxcXw9797XXuXZCq",
  "key42": "5AkwjSQ6vopiQZuE6wp7BH27fP2oAPSkWdov1JQETyAMBQ2NDYm6PTuxMnBic6uTfCkXAdFd1yCJ1aXDCCJMo98p",
  "key43": "3fBhqvRAUSJ5xXs5kYebGSCu1vBauuU6qLoTZHrfEWkz122zUgEUMmDY8eDo552TjbYHCedzmonPhVsvj2EVH6gW",
  "key44": "4ov4hcETQSuWY2h9YLZ5K3hkH7Lk316z3ACnKnotozid8urA2Ms9rAAtPytP7H8DikcXR7b7oPGuQv96qRH4HFPs",
  "key45": "8xpzR2B4xugoPw4hTLNqAiA5EuEuY1enaZ2kMiFVzCUzMMggNcAY9GcckBs48nmj2DLrx5Z5df8PEg1LRUEVV6n",
  "key46": "5fhHyMUJNnaHLHA4Yka68YJyFsMWbTukv6u9WaxSdFUBVqkhHx7BKiqqLtEWMghya6tfYazJY2QPpoPAxAnuM4BY",
  "key47": "5FXqc1VMdD8StctFeDouCmTdzy7SHoTxyaZ9iJCNG3uHjDeSk7QFnHS9mrdDmEiiqWeUj91WdcQZErBAKFJbSckN",
  "key48": "2WHTxGSE5aCaKJZsCucM8wnht8EXgDx45VtGCgrLQdyfWGGwAKp6gGNzwJcdF1FXo72Bh7Sjtt1XMdLdZY9bV5hd",
  "key49": "3VuUmTpenAYJfKwPrvpigQ1JnPHHbtG1fAEouR27xx5gQoVrTeLS7hKLerQMMNK5VH7svkUM9Sbymo8c9iRw76QV"
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
