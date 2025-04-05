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
    "2mMWavtueLHWtNeTjVi4KwvNn2xjdnwyp679hoNdiJRWNsk9RfrpsMJPF6E3nGNmhSPfE598iCFxR3q4cYvxLCj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Jb9sKNJ9HmbMEDN21LXmJ1ajxmWL7EFqB8gX913HscmFWNjgUg5fwHgVB8fCwHf6kuhd9UshBsWVWWkrkmYJRb",
  "key1": "4N72kKo4fxCPCdzheBE3VNBa4rEKu4uLmcKobf2Eqo2YhhFwF7Vx9W433te7Wm3FfRFs1rE1RfzXNfSM8XwH2hfb",
  "key2": "64ntukJLfXQLuS2xy6EUAcGSkLuvPpkkQWc2KEE4DaRWF1NqR6yx6FAT7w6xamsv7CYhqbNfJz3tou4P3g3XPc1a",
  "key3": "3bxRGvbTnnXrdAGv9mxFBwBY51EbJXwoA3bEhGvKvuwKuL6PKg1qHPp7SS1Ab2UCjUwfvdvNoNBN3N3jMarUGNjW",
  "key4": "3WQHWz326RyUh65yVyGTooTdQMJbnNiovCs5GCzgR3juhEdKEtryfQ7ypJ2e2dsdqQ4V3Yt6jenVzQtm9JFBEhAC",
  "key5": "28dquTQ5RAC73jCY5fJBbfgoZ9g8UWpkEK7gRYksmYfPrwUVGK4rL2BoXBqxVxTfULm4w2mx3SD7QsRt8yFYmDJS",
  "key6": "3ybQKvpXmPSVQEjwFzSWiZM97QUYtbSbesWi4wfAfKNL2EsTfvoBmMnP3ZLBiecVRJo7rnoKSVuaNYswM1MrxwEU",
  "key7": "5PekWGy9oDwW4WPs27ZixqDTQhwfjDvNbnJxcJbrrjZwRTnwxRHZmc9MSnbEG9nxymSXbTFfzVkXTacLmKFXtsbT",
  "key8": "4TUL19XxAhP4aAz5KMJgtexE2ddnW2ohfLs4jPVB7SF6aANCw1aMvbRnbimHovP2azAWiuLG3yQHtrRm1pjdm2dz",
  "key9": "oELhofwVT2ittjH65AwSkjUqeevXjLC5FNwdLHqRmHKcrhf37mZt3vgFEtyqmWX8zdDSS6Wia2vyNf45PWfUoWm",
  "key10": "5H3ThiYVoA8id5cLYK46CxUigsSmTwuWc32rMvk2iC8QgG4RLvauDBKuDyTpaR6dEtZvo7BJSt3iWmYmnSPpk3sS",
  "key11": "3qaah5mn59f9tcWyAqhdM2eRpgdijz8nzjLQdVvy14t6Fyn7vpTSDRoutnPqgCNQ3om6L9TYK4oL7ukpiFH4gfA6",
  "key12": "2oGFxvSzTp5ru4es8Scg688y8hxLa3CkPSTF1bNssij2eugrdfRX6nZVriW3fX3TATJoSeJNBHKRb8iRHAv2N3uh",
  "key13": "mkotU3H6oGBM9jx35TYToWTickFBLRzFXbqxFDUTrw3xQSBPac842oSsWagP2MLrh8zLaGRpznJbeDmjhYfxU4M",
  "key14": "2Ucuk9Cs3bQk78kVieLNf2soDtKfpGASuXWKT7MoUN54SD42nhRsXQ3nkddCt9fiHaH6JuEAd4edD8aa7dDaWb1T",
  "key15": "3Z54fXvQh7f244EumiZKsK46dtRja8Xz5LTozDPkbC3dcq5g9bDkUqh2cZsasGLLQxJSDhfDh7DEKHJpNqupyC8R",
  "key16": "BF9i79PYEPMVpB1jLfw9fRLk7LzA3Nk41mJVrxn5chgiGcHs9iQtrBXMczwQH69z1Gpse1UWZyY8RY4GQK82HBv",
  "key17": "MCW5vy88EFdKaVhLcNXpE8sjz7kCY5PnSeZfTV71aMksFQgfCCgATKDKPr5UDomhZ2Rs5mxdgVDWryWdVrPrM29",
  "key18": "XVgNyGTpFqDZdBSq6SuyHq4BUFCnvvqQB5qaztR1Qgj5HHFMrZRrZXCdxpgSekySnSf4XvXwyRAf6wwEj9yJMaJ",
  "key19": "5Q3YvBGQ98avx8TsKqV7jx2bsePo4b79hCQeRnLrJeR61bB1tBmPVTAoGVDdEbcjFYV1LjaTvZEYL8eLANBKsm6X",
  "key20": "59SJcU7H8aQkQvCr7FkDxgFr6yEidyHACREBoYffwvB5CeFRSULfe8YA4FvcE7qg4FhgnZPeym54ooYbTyGwA5X4",
  "key21": "3zE4nZ55ry6uonn39LXHk1VvKTiEVgib7woEL3SBcNsAG4dL3uDdyEAxKXNjm6V2zKmZZRxTNpAevEsc2QCxnz1",
  "key22": "ypow8CWemRynBTJEbuhPz5NVVVvEyyjvup8Vavr4vnu2WvBP3k6FXeAPYQMbVrm68d5oYDHqMcnx9dNYsF2eLap",
  "key23": "tiVFbgL1h1oY83hvtPHi5cuGeWuEzBMV43dYZRR8iva4JUTePBd2tjVaWmbeMpccMp2hzHZZ3DMpdMiwAvcqWi5",
  "key24": "4jpwJGAtPqdNMUAGyy7qnvoLshJaGAFBfLWQpiq9YHsNUbYKAnv6KCdxTqBoMHjytAaxXUpH3xERG7piyRVMoW3E",
  "key25": "SqgXtaTAS4jCNBqGoQGrY8wHXGLQotG8dXskgc4wNSNvyyWL1AmgvmKdrMJs95GpGa5ycyv4i9WEyJLvqQe2Jom",
  "key26": "66y5yVWynkBga7SAYHHg8dFAwasDLjJUdhiokjstaHXohnpYmDq9YXptDutSf7ZhF6pcbGBPye2duppitHGMYNWr",
  "key27": "4zeAjR63T8kFSoCPK6mSQh1tbpMQPvNND2xZgDxdcX7Epw4gSGfKxTJw6KahrutC26evfpForVf7Ndx2L3JmEjht",
  "key28": "36ugcFREfCYv3GKeLFd1fAyzLYNU16T8xjyCVprkW6oJ3N5DnvEkqvVApoEgyvrXXkFJQ2dKZPLL3We5hGtt7uht",
  "key29": "frgdtAs2whHUuwkTMT1wwydYMUb4sM6PqaZkTvkSTxu3RnLKRsLXBjga3hA42bo38L3s4t3muRLHFTQ4CrDKm3x",
  "key30": "26FqmjeBDEzLxtDfosMPQF79p5A5Xkg3RM2VsTyy8LAHDwxxBz15mKjXech7QuksxXWY9BcfwikrQaRJW81xXzpm",
  "key31": "4AaWJCHoLxP3rnjcepE5xyyoFDfXCnkpnbU8R3aDwfWA5T7vZuCfEhdYrEY7EbPFn94i2dYRCzseo6kCgyPPCFcW",
  "key32": "wNExmTaXKJpLGszTrn1yr23n76mtxUMwLdyhZCGiLzqYLHiUHPUNbaceqHzA4uRAf7kPGjew4xhAT7nZmQnMFnJ",
  "key33": "2hgkXek24MFZ3BcCYLp9Y5sfa8TgaNuaheWWQDtBDXkeMxNZ5ANMEHght4GAbAdCYS9k76t9uyNQ1K75xsTdNNsL",
  "key34": "Y96TXBZ29PGZ9PTfdqnKXwo3kJyMFn81HhuqUMFEtYqC6XkbizKsFHkajNySHnmNhNGi8wTWnCqoaHYwM2DtG4J",
  "key35": "61nYuB2M4UJwGDYdQCyxd6SHSe9tajVeihyrz2xpGwZqxvhWJYS4GPdQpek7mj87nzM5DhRVQTCXFjSLEyiPWVPj",
  "key36": "3B3fzB7yJqgcxkvbSqSniyfrcdu5dM3pkSF9gmD7VmR7cB1VTys3eG7bsPXspU8mwnVbgd9g8gUdhH5w3RHuAwko",
  "key37": "3KnqTYxChDx3DvfhLD4v2cx5SRM4EMWQg28Ez55egj2bXGDk3zxvRY5Xdy9xdLDvh9bEEqXjugAQ5mY7tscGGpDV",
  "key38": "5M2G2BfAF1KLFBFeaNhspLmYUw7n8MFNwkVEBD2UYVCuvfMBxvc6X4Wo8ZdhnaNVnrJqm9jJp5z2B9xp5NVWzAGb",
  "key39": "71UF4nxcBzVfKffcFwUPZVbvMNVq38jjbidgCVL1Jsjz3KCY3NpdNFJ8Cw3im7NvbSZw9JQK39nM2x7wJNLv3zX",
  "key40": "4LUdFTjaQr2YH4CjNqFA7rGZ7kEQ98AmEm8JcL5kyaiodiRGonPaqdsHa4pCRWmCBzQki1tVecpwFWNxqpk2Macx",
  "key41": "5BUMha5hqDtqJ9dGjmvG6Qzw53RLcobA2N4hP4z6Mrj5b2woEsnD4i8G6tdZCrV6jHMRPXmAcHZMFohFMHHjTy24",
  "key42": "WCYcGLDXkH1GFn1QanrP4qrUjArrH43fv3hA7w53e17fpugTeeaQNDUtsYUJXtJS8msLiQVa4pdSMoDmDByLQrU",
  "key43": "3MSUvjre3t14Z7Ju8RkzfuUFnUp8Aq6x5bALjJ74vRQCE9kD1w6wTXr7r95RSHiBny8gbibTafWp3kDdfJtno7oJ",
  "key44": "nRrxGPHUysdyVvj3Ry5oGURJhNMZRoApUgBrUeBbpcvpuG2bPnvRP9FbeiNRPcThhBiEa6UjUm9YfLBK7jFeNri"
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
