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
    "5thSAgraF731bC7MoRfh2GQASeTTJuP6FMhJxBW8vGZjwvdzxHn9LhoRsMCmJwQpKTJFwx9NQYo35ZwtCygEZL4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dDKdamScezqUjAj8iutzxNucRy9jg3nBdgYBbZ1P2XHfgERAD537Ci6UqLdFeh2UnnrE42MxmfsnoLExUzT8W3Y",
  "key1": "4PMydRtGM8nkSyofnrdkiyq2NRxhMRdzPZVSa7NnU4RLW2zgNTXJ19DR275N4nG9LYm2B2zhoxD3KgGjjKPwRhQH",
  "key2": "2EEparidft6x8E1A6DC6ZTRWUfNcPd6weVyrUoPcSKpNjwDPsAiwws28fi6kQYjVkuM3eQCjypjVXJ6JMq5t2Njb",
  "key3": "46SpDxbbYRrkFLNSwZEayYwQWFsBzz3tjovsEt2xYDYFYhjQJr9RLv9qU7RszfYkkMr19KaZDyBV6uYutsmkUU1g",
  "key4": "EuaBot8DzF73W5aY6RB2mktqv8Sk69pTnRxoCGcuXuyHhfcYoMAdHdTz4K8QRbjPEmPKxAUBRhyTRN2sC2S4kYx",
  "key5": "3MoQ3H5535k34cnXX1zqJGXUDxXXVw8AifMutBUMMd5xmuTf6rRZHJtkv2daJY5LNhNcpdS2J5qiTw39YCWdmpnk",
  "key6": "4owGL5DpW3sFa7S8a5isrMKrG3raMsu6AJSnAdxw4wrb1MZS9v7JqzQLUQkveVrjtjYk4aTXB5QFkh5p3kUAKL56",
  "key7": "4m26PhQYMbqA78y55LaE36q2u1TpJBkSrwsXsitbqtshdHcXPZxsNBUDey9aCbRLAhpz97zHD8g8CDgNmakX3Jtt",
  "key8": "4jVaaqTzZELHqEMTJvNMs2HcopoMXgdoWBMG3gaiH2uZyMz9qenY53Mw2cCm9aEJDVADFWAni5EF9sHi8nDJtpGu",
  "key9": "5HguHhbi4HVSN2uY1VrzQMLdTYHAKUB4sr67HqFX1tHsR225K54CNndWV772KLdu8cZbHqFXxgWoSW9canN9cH7B",
  "key10": "5JPACgeiSf6HPu9mKt1h7zYkqiq2BRriXdTmMdjxYMsPBbUi21xP7Ug6ofsPpBjSrkyQ3Be4L36g168m6u8DqR2c",
  "key11": "h4CEZdHmk6T6AWh5kn3nS9sg8Ki94N4AdrVV8riUFqTfdAYJmygXms67dWWjYzs4fUKNxCmS4J5wME53kGFXZhi",
  "key12": "bGGRZLFkHw1XrbQJK4zMgHHyfSnpVsBVKFo2kdLtToeL4tcz1zJMzJ1Z45Yfkx5LGcKQXEAn32c4EgTJERbfrKB",
  "key13": "MM22pTqvCj56fpExWkohCPNT4Am4QAfaLp61KGbrXJzLjrNTQGQoPZaNe4VhXbhPbbKYHnVBq4xg8gaCuGoyeuW",
  "key14": "4rCwciNGAJc91h7sKDfbZfbWhqDKGnD1FwoXyfy7B8DbsN1fNR67gw319co7Z9kCbMeAMeiRzoresF95LkV1bA19",
  "key15": "2dRdY61cs7y2Xg8eLq1pSyw9sPbYMTyTNYiJUK2n1Q4xLkKS6vfCPtcxmL3VwUfPgA7K165brQnqVLWpraLEd4ag",
  "key16": "2EXkeqi6LiVooL6GUCANVAuYWrABwoYsdD5x8NPkRGMaZi8z34W4xPiDMfs2rZ4vHkCF3y6wsdW6m2AYxKUnvbDt",
  "key17": "5Mi1rsRQqBk3qkjXe4omBXdYzTz2dW7Q2GvTiPJMGkioJJaM4Kojqz7UBvrThQ5Kv6euLmMJwPj56Qh9zLwoRehB",
  "key18": "tYYj99wC3z7MqvDj592uDFbVRPBo97xnmRWGrpH1niApxfNmgUqqKBgR8DL1kEt3pgWg3g8GYy4DPfJQMkvnhfx",
  "key19": "2qCwzC96RqYJ3U6cjduf6uTi52royaS8BSbHyDgxysYLLhPhECwHc2TMweY8zL5rXfFt8STo24tJ9yeAXUjiwTXX",
  "key20": "4TpDqeL8guS2mcFP7Zx5oXh9Gizw3TJ3htsNYRtwo6SA52SP6PLWd2WxEm9LJD4NzMCNtcWaaXwphHCVcBbuFfuR",
  "key21": "5eEg2gmcjHyT9vMWzjviYUevJtG5hu5tJS4wZqmMr2GC87b8Ee9YeBHq5CdBVcKaTSApLTEGZ7jeWHHERqBSZV15",
  "key22": "QeyFJnQWiNiUdW1o65hLtAYXh8no3Gjp5BLmyk7kAVY2YkNCWyuSRQbH5NaVGjM6wShfgqGUrcyvFwbk5kvhLRe",
  "key23": "3uqr4un4aR28fu1EjT884PKBNcL2gUSLz3b7rMDYdoTQ1gbS12HbR3qKjHLMzXnxcJq4U2tuGAseESUVY2r55c7G",
  "key24": "3yQzJhMUpodB4DGrnFbndwK8MUszMzrDJaRFzGYsjaZgj1aK7DnzWKh6KzSrhcyQPiBWnBudHXhVhTiTaXSYMoBZ",
  "key25": "kWqrRJ12C9NSvWvRKJuZYe2vdm2vB92uU8D6UcCLERUmf9mec7KjHmYgQAYxZnecjb1tCQgYLNr2EFmvhcWXoK6",
  "key26": "3FoFynTpPrJjUezjtwUyUom4GSj3aRD2qACjHK49xkXHb5F26JY94XYRLGAuFmtFP4T4NH8amX2Dgsaiwyu7EERR",
  "key27": "2WBMu7NN2D8zgbttje8nwML9MUidu1aRTRoeyM3Xw9GRyneUqFWZ4hkwjUo6oorMgBz4eWJkM5EeTBbagwaKAaXa",
  "key28": "4RcMSQsy5eptq5CbpAqjNV93CFbMzrYTGXXavUNijJR4Ag9br1vAXjx9EE4xdHDZFSNLZ25jbcQNMrKABhKPVVtX",
  "key29": "2BTdxCAsyx4B33Doc3Vcv1uvyJcmFAsyCeTwxeCDmSaQhAGsudww3g5A2ZAZWpETTtGB1sNBZBRyK9RyWj9gjgSo",
  "key30": "2ph42ykM5is6FP7UvmNSPw65C624jwag1edfKZTAYj3BhRsB2WJfaFDwMyew2KRXXea7FUmfRnsDP77Uc2QrC9AV",
  "key31": "8mQ9D5RwT4JAvvfRj2Ny2vAb49BDqygLCKFgjL6PU8Z616bwdh98HchwF9zKGt5uwJtCGhMH7tp4dgxdi7s5Xv6",
  "key32": "3cwQktBykPdyt2v8rV5CDYNRHYfSNyakm7NRh4pUBPxykx4EXPTRKf2JoF6tH4cEadJJadG4vu5gCWBSb63qu5WJ",
  "key33": "3UzoYen88YrhBrMto6QerUrY7KPWa5znzapN2iFprfWGnfz14nhkXtodcynAh8so6yAgvi43Rs9cDCuRHqxfihJF",
  "key34": "5yA3YJW8DCMZdHimF3zfdeJMgTd74oBZWVdmYdT4mvLKj4npViQt962PZyzGwWc8auMnp8gKcrjFwTEqPkG7WBRT",
  "key35": "5wKptsAKzPAmGJB2LJzCg1W7Uc52596jALJs3xs1hj4wnUewStRJk64KneH9jjJXBrF47uVQnHBSH3xmGEh3ddCu",
  "key36": "5hhpLcyyaeByHK8LfKqddiZGB3in5uFkPqhiwameP3pLArC6rMjdfi4kQhyLb9vjJPDj5VSiJs7GEZANFHeSZNt4",
  "key37": "4PHSRFUswYUBRaPZVB1tt248zJjx4d9pfhJeV4218FS4FWUtbf1xcGcssPk9671txRBE5crWchQtwdMjcn6bkWU5",
  "key38": "34niUryWZ9vGXSjW7Hiw7KhfGhmVD6yhiavaHMzdgzmtE2VGP2jyYKQX8zCWSqNy8VSSghTmLbwWorEUffxQfRRg"
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
