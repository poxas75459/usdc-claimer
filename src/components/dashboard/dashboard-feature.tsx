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
    "cyEVwKVYhLj7cv4osmBTEL7ftvJeE4GnbHFRquons78PEk7vp9frXZddGHPBLTzexLt8HQZUgndaUPczhozUYoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51X4Rb5GWoVAtmRjkGttVWUcDy8UqeQz2zUmArYvZtX6Vn1HgCQTuf9jQe6Ljnh4BSBMUBAhUTAueMBATjovVhgA",
  "key1": "3e5jbuT9g7Qbdr3vE8dCXkH7ACRrebvuJopisfeFwWbiF8pSqqQH64gjauq4ghdBNPbKZfw1R723X8MdwwyPKdJ7",
  "key2": "2mp7x9J44M75ZgdKwACEM82PwVzdW1WYEKb4m8MLBEFAsqraCcYtdYtzow9SF7CYixyw2ZqQp4UeC5ipFLifXnqQ",
  "key3": "2QQGsMzjCHw2SvCgD3Uy9K5YwQRw8bj6V9uFtkHe8yhtFaJvM9UeWfsHxYP6cdhUUJfTAeDjpYN44Bx5ZdRLiDh8",
  "key4": "2nSQ5M2YzPgUuW7LScVuHdbE4bXz2QMwNqhLTr3cvq22yuJW5w3FAgck2S4VBqgnVN4RN6R8y4QZ2T6MDKTDRs4Y",
  "key5": "3NaHdasjVEMSLt7poemBy2SAdc3Nf9WNQTRudDA2vnhAJoEvS7cxzjLa4kQeDadbtppfM852N8bkSYNJ9rqxZmnb",
  "key6": "21PeqTtwWnMjXkAyFSKGJwQ7k9ezaRuz6fFhfPMKmsbB415XV47s22eDytrsnzWLAZtchaUHTDFLc8oDQiH5qHzh",
  "key7": "18Zqgt6ELeKBa1BFg449iGZoGSrjTeak75UsE6myHaPVRq9cwiJJHeKogadHhKbhVJbX6vVQV9ECSPo8R21w1ns",
  "key8": "52adjddgT6edRQVzZ4PsJPFYo3V7B4hgeFazVhZLgExxXjBXAi1V4Bj32SRvABkHVJGPDvLGv6X9bk5bV6MGHMdB",
  "key9": "3onNP7ZGKDNb1Sbfc4x5ogVNxqRy6LqfH4hXpGFYT3miGmVVhokGjxrw4cbLXJEJsLA8vqMrUP9ErdUKAvVoQUiK",
  "key10": "48TvUeVN9Vjaf4hvyiDEDUkjZD8u2HJrFMmFgBwSZ4QXEqtyTXPmCySb2LJZhRQWPiGErFcZ1vB4oPdt6wT3C78N",
  "key11": "3vZtwWouvqQB5wN5dYFCZN18w9qZ8vCqS6xiDfj2MhwNL8jG13z8j11w7GdVVUR9k3wKyXjbCFSmbRm9imXiKK9u",
  "key12": "2dgFwNKGQZMaFaoRPgYESMmmrwuw6SiVveB5odHtB2jb3oWD9RrdPw2M85Brsc1Sw4ZQzbT2NJ8i9X4i4sz1hg8Z",
  "key13": "5LrpFWRZRs1hhiMpLhHXLQxfUat9xPpAqns7vVXgaKzzcqyptebBFFSxVHHjvzyDde8GuAhHnfCr6D4CNZWRqJpE",
  "key14": "276HSk9bVcwpXTEWTAhb6ynpavZFeGtA23bYSsBRGvJNwW5SvD832zLqFsTUjokLWJUCasXNTBbzU1qw2MJsuoAY",
  "key15": "3Qq93ZZrMnJbS5qpSCFMrtRRVJiPFoH9tEKLREve4jW73QZeET9bpkBz7MTz9s7CyXv9Bvo3b6Zhhi3J9mD5koVL",
  "key16": "2cvchLvcji5jmFL3UEcUMsjarTJMESE1MF2tVaprW9oQENEtyF9cP5wCb728xyqHdHbkNLJmew5kgvBzj49cEQBt",
  "key17": "4vLA7fy8SRRgpTj2ooLMbTJnUFpHctzb475hcYLk5nLR5Laax3DpS9YSSDnvAG2yHJhbmY4sZZf95vxjjUpRQyHr",
  "key18": "5mNVmeYHb2ZozbMVzZErXZLMwnaoj7FzgCqQP1fgRc3q99ZZCfPyr4psfXGUhFWCT3ANMu43b7vvCQKsdy3jpPJq",
  "key19": "25D5XfQbq2LKCQZGjk9KWRN5EaXZyENQeYHPFPkvr9zXkUcDQBwfZCh585LuvHj8cqz8PKgXLRFKyPEijBmFp5jk",
  "key20": "33AcRs8HyF6y1vTweTvodjAhod7HpE6Nfm5mjgjms6u7LJWqq9FArcKX5nvek8vcexTQsXzp21sTuMroQAcB8ax6",
  "key21": "jVBNNnRkPmytcMENhMwpDMbTNcKc2JjYDhhVMWQnFS6mQRzeYMSZTXgyMiyUEQeRBbWEy1R58ct7Z3Tws9FKWeN",
  "key22": "4Kz86oTtCJ72NG7unJufLfMYoQTX7eWoh6FbZqtxtPRhoH68obmoExGhBykHdMNGYnFDzXBWkYyXxug4EbRbfLHz",
  "key23": "25m2MpxdCxjvwVfvurERRhmgzB2dhD6PLgPEXaq9acXfuLXv4SLjto4fgXh7PYqHo4iCADjzz4q7cxWXYZaksuxu",
  "key24": "22NUYRv48wCvDr6x7UqtRgoByx4Zao5Xk9iG3bsHSd7sPCtt6qbDjgqPpeYE9xsdrEzc6TFwwHcEv6bMSzhk7zQT",
  "key25": "4Lv4y6v2uUL9FYzxab7gnm5TzZyTtogjGtnukR7tojy8djT4aZxStaG1vqoCENJ6Hh21DzW2oRWYavGFbFT6tQAk",
  "key26": "3SqY36cYKEJwmeqU1476WkFEcKfeR39dhgB3TPFGsMi28mAveCwh5gZnb2U3BLN8BkPLJTyx3BY8MMSUuw2EfmK",
  "key27": "5ELVLE6nJVsentYB3sCC6EPLrLaC2Ty6yZVbQ5TLur1uBVUKnJfXNzHcCUFNUpACAug2UfztUD9D4b3Fxrj7D3Y1",
  "key28": "2FRCUrr325SfDroEbSATy5PULvn6jNxWYwxM72HqvoGeCpUbszuFurCtE5NWLDgrECae2qYYM943XtUpySx2yMtN",
  "key29": "2DFdSi3hfUJbyDwh3mc35Aw22cDma8Gx5ddkZoj4GMwD9XtoVJgJosoTqQ7b9cVEsKKENk7rseLF1sJoNuDrBfZN",
  "key30": "4Jfr7S11UFcFCkSdQ5hSZjp1Qy5hxDmegzq38hHJgGQCTYLfPTrnJD9Bu3KdKdCXXcDmCztuji7bLrfBbHzjFxXB",
  "key31": "5gtczYrA34hSENLd4UgCti7gaVHeAX2ZGNCS7Z175NHjkfBAQpkcESA82bvagEfNJYt3ycY2BDjqqKdqJQwH5Jq1",
  "key32": "4poLTPJRdwopFdQwAvW4er6iZEAgWNbeVj21ZM7M1Wge31yfhvynZpxNKPxSKHgUgBbudHrLvFu5mGGiK49nar9v",
  "key33": "4wxSPC1QSCcVaEcuD5RD7cJXrENDGu2KLMRFSLLWHiUF5LyaLFkiMe5Ae1MkQGnBXcjjN3bAi8Qc3Ri475xUmcNX",
  "key34": "211TUyzrDYtNZ4td7E16jB3DLfDFqbZyKNQxCGetDKTcaZzSAoCHkZ5hewA3kRmDyLjZskBS4oTJ2eQMTzEp8Cgb",
  "key35": "3Rg1EmzxFrAkxHwtsHC1pSH7sn18gVVrqWzKyuxA9z4U8cWJdhHcm1MsNxiSY6JXcZXzwkU8cDfZrmksYBz58ekR"
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
