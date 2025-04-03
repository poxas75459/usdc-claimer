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
    "YHDLhhY9MchDKdWdSpZKySTsFg4TyxqQZ5UohzHVut9F9shQehM56Fxs5YNGeptWrRyN9U2HZrGoQ7EvGZJspGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kYLi7EBPFYbeLSsZEyHppZqtzcxUbPGhk3fAZZVnrswQdQQKbuTYEkxqri3eFnksdqhX5MYDoqVF87eaHJ8ehaE",
  "key1": "3btpiK5woPA5U8MbcS2GjLV5EMGhfZcycPSmJPYCXTm88jCDJRGenxpzAmRUCytB4Mdxb1B5nrEHnoyVU7esqFMj",
  "key2": "5y7MTuRCcNEGzNJQX1u1rd5XVmMFKiKmsJJ8khZPGJwDy6H6deuPKpXqjquAb2pCxkk3PkDzys6R2cspVUDdm1Sz",
  "key3": "2PwjCW8FQaqdZgHkQsJ33Nrui7PH22GYjzKNTgcLrfsGhzHzo6z7NFWiP8N5rchT4oKg9hDoZue7HEnXJBT4vuKL",
  "key4": "2SVEefzPcWTXFgpzFzrkxYiPEM17xDzgbW3JwJ6SjZzJ7QY4GGTMvvHDFNFfWQfHT23feTdHWHnLEQu11SY8m41f",
  "key5": "5oFcqa4qp93QbJQ3qyosSrFf9PW92EsdHpDaTAMRXXMfrSKPt89uuuZba3sjSKD9bR8jcopPRE5Ya6f2EwmC1EMH",
  "key6": "51sMShbxwtXv6DtT7z9CxFXZXciStoszcyHFwrw9uv4xgtbk8Msoi8bh2sLtzJYtcS4N8AYiwL48VNNks5A841EF",
  "key7": "2WjQG7LsBTBiGb9qta6uU2wDewnBbMQfmZ9x1H2cKh2we5U7MY5zo9B5krse7fbuoUWCANjvKGmfgZuGuPMVQDzT",
  "key8": "5NGctaEgYMm1mi56Fi29wETWscqqPByqwvG4JY8tCZxcYhchtnhjVgNJrAtP6nnoeZSUwxrctB9L6Lu8YrcfMHr8",
  "key9": "5UfsFemySRc2JEHWceyVRPJSdSKvaKEJMB3qbNTPJBfAmJeWsCu61YCX5Bayt8WomqcsXeY5rYVFtXnap7ninQvt",
  "key10": "3QsEEkhJ8gsq74gqjtwEim1joNVHygAR5iQxJ68PtUsTnLYkxC5VLyRzfkFiMdvCiUsMXc4XTtHCMpgXDCo1LYJw",
  "key11": "4Jt1pjjn5nPjzFtXshcLtqdrZrvjoyZBFvmUKGcEMvcCMY4eofaaSbNyABbz6EQH898tWTpb3EJNDCYgL4H5sHTh",
  "key12": "42HNrsbPQeKrHvb4ZxEY7wdHi6YPpFWS6pDiRawpuKSRjG8PTBkFRJrj7Dn5MaRq43kKRus3woCvtxGsCR9sGZhL",
  "key13": "2EL3NoMTyAxLeinGChHiZ6Re3aLT5qV1XVFYbLh7c8yvGuusHrZ42TF3VrnQZEdr9ASgaB3Eb3aVvtApMDjABaHg",
  "key14": "3DF6oAg6bRXwS28PcKErmCUfupXm8FULAwT81Kfjnd9xVDbWXJeA86G4brGyf386wdyY9CoQxHCAW7G1EnUeNLrF",
  "key15": "3hfr6XzaF47AYxFYBu2bQKcNZtjLW16hVcJGKwiLY5b7bPAhGb67VN5ojsuCeBzgQXoZbpYFMxxSzPx65BqY8s3D",
  "key16": "4awzgeiKaaAnRNTEqReHZ2qxiuiLdubmDD6chwedp8ejyhCdtqT7gDRDz99VXG9g12mFkQXoJhpKCGqZ9jrG4gDU",
  "key17": "34dACpV8sEpPyTKDKQpJAFN9kSeunWFTzJ1sZbn9P6gHgXv5oqsiNsKfGCLGceRREMaAVfU4fKJ65jjTYWZBZo6H",
  "key18": "CKCi3DsuyR599dCS9XsScB8Q9WKo7TwJrWtHfEfmcA3HA1UGAuvT3kn6TQDojeWsXBe1HC8cEt39XBXRbHwzGQn",
  "key19": "5CiSqMCiu5nsML22QMCLbyZScXfKL6c75X51yWMXawrXSZ7BG8JubbKZnys9Mn2VekQNNABi1uLS9SYpsosHxzVd",
  "key20": "2bqpLTpt4gktRNF6mah8sSH5Sw1jmUimrnQhSaoAE7vc9rFenrtrMaDWBvS9VmRxmPbpuWTHNAxqPMxya7hitd99",
  "key21": "5vr7JHZTnAwrQy2FXYKfAYuR26PCbFyNw3RXnaeA81Sf4c5Yc5f7vjQLUQBGxvpAvapNwJPT5PTu2yR7JgFQxUsf",
  "key22": "WrR5qNpJ9RSDK6hgjofxkQawdpVv2EsnHMcbmFeAQCdyTFYxW67ibs6cmXTeEceJ2ZN4BzD1Ns5qb9MBoQiJuyJ",
  "key23": "4eqXciRdGrN8wpHxKtBUikpzh3wVs5CSHkm4D85sXXZJ619VKHoKcdsx1r64gtxS3GboKS5XpGgcCSn5jDxj1iuD",
  "key24": "3c56KUQfbcw97fQck2k3jJaiD7TXLcuQhF4QrXpDzyY6AwzWomaK6HU81mMpiELfa3LVpsDMtQHVNqJDLTTYwUX",
  "key25": "3XAtz2JtdJLwJYmN1KKp3bfMPsfckKB35yUW5Gz8zwyd6mjoLufW8ojSxWbskWq9cvVLf4AESKf7oQmoBCECV2nJ",
  "key26": "4rBVP9A6EFLFta8sujvczy2D6fc53T7XA6NzJZ7QGDATYWPw4MrQ2irKkSoKLxEoUCAUTD1EWWhNJeGJSYpSRb13",
  "key27": "2Ur65uJeFhozaqRJB3CXrqFpof3eHLvs6Lq5oWRDpcDGoRg44UmdxskxDizKyeHUo35BfQJWuVVBU4m11nEKLsDF",
  "key28": "5fmf5WDgTNsmSB6U9WrPrT6EhhViYrpjysLyu3Bapy9jnTZyk9Q2PhEs8J4H6PYXXcAsjQWWFdiyTqEWZrNa3Z4M",
  "key29": "3YKzMuJZjxTumnRrvBPMn3PzhpfJeNSrEE9rovBbYSJuc2Jt3K9xrdaPkHdPBumwLX1Cyfd2wNjs4Xp8TkkdYGLN",
  "key30": "49w8WKACo5gUi2438W964ErpBGwZxLLtFjhxyFrX2Y8JRznLfvEhweDemDjRhfhuGPL4Tx9MYBrLdMMbNYCcULdf",
  "key31": "4x5SDk3RHDiHYxkW9Y7Lm9N8EwPbs1RFYM1o4LhjFSWKM9XzEUfQEsPb9sPzgL88fEQWWnttqxvcHnWfYLMJeQte",
  "key32": "4TqzVJ8HzFJSNpfMfFrTDBmnwQLNHLHypPxPWmyuZPRdwZExPwkgLHUuJw9jP3LzBq2vqckHg5WujjALQmUQsqeV",
  "key33": "3aM2eTa3mjKCoULs3iEspfe7SrPujpg3P7U9w7W3hKtTM8Y25ADUznZ5ZvQ3D4Z1EiCJh5f6DmoVq3DsGRStHKvR",
  "key34": "2MFj4fuESrHfhmR9dKVr5zvnc2UjjdVk1jRGjxevGKApa8q1hUr2WeKjA46SPveGrrtyRjYAW8XMC2gBvVwjV8jJ",
  "key35": "4EQmMvdMVnbmNhRvZDufXFwqkuNgax5sPnLHCSxjXd6wYBcUosNE3HZQw4YsiMzZJJbnQN4kah8vKMVvaRyYqSNu",
  "key36": "3id95ktcemcAmokgKYLSfi8Whi8yhCPyEUHkgtcmfCmJo2oqimGDVmPpBo2m1oAhjT4Zxf7hA3VzDRb32TsgboqD",
  "key37": "KxpGbprP8D9id3aDuL9rLwDczomhLSX88h9BQTT2tfyiYFnZJs5wCVkA33CtozhpwoYeKqYwygMAqNXsSANkXWv",
  "key38": "5Ujp3zqrDjAaEJPn5LeRVXcK71NJC1CS2MugmmzsfYyMbZAF9TzJRpxaUXt7q2jWPeZSeBMgMzrH4QTd2UQMw9q4",
  "key39": "2kfALGci1J5jyWuaRuFX7YhebwTiuFNatC3KU9bynpGginf46tBAokvSXakjdizsoMEJarWrANzZMfRejpd2Y6DK",
  "key40": "3SoAjhY3SatzwCabwYhm8jgngpuGsaVfkREyds2QLFfTmDzAaJpkHgpjZmDBfRcdFPwfHwYxMz2tCXwfznaBfxsx",
  "key41": "5rBaGa8evTjm2xmCraD2hufmP91UeaZHmgVW8ftoxxYzA7QxCdGFsspnGhK2cBTz4aDqX1pCairoRfwznjAcpEe8",
  "key42": "3UjnJZ2vgBnaP4q5UGpkpVbeY4G81hv1LuX5D6P39wFxfn56sKFeW6JTNnV5voGWyUVZgzQZgBxkgU2MDn1VSvNF",
  "key43": "58svPe2acYSxtTJMkGe3G9mbNoE6cEDvKGr61vHLq7ZH7QxKPryM3WR6onrcoQdcday7A6aBeKM7VbZQQ74xdZRH",
  "key44": "46iNBVy9AAmRsKrEKAxiYTtZ84CwA4oaR6uyh7smg6B7JsEm898neyg5ZeiL3kA9BuERmTQsrqzaCjrRZYJgofyT",
  "key45": "276xx9QrVJuFQwCD9tv8nL4dfs6EbcZweidfonAY6giivpuYRvMLbknmXMJs6DcvepPkRycCT3DK84ePbdS5HrNG"
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
