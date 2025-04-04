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
    "5PBFHUayB2yWfhUN7tTCWdSSDvmWxMGnKcmWGQ226jUkuNR2DkKrrFG6tpBSwKELnCRcGDFg2xgsYKPqYZwnoyp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gazGzXk29QX6brTx9FiQfErg5oaZW1AgCh1ULvNgQzHJP9orJBCEkPTjBmEtVLV1HwKdQYUiw3qUR5usyphGZbK",
  "key1": "42X9VFU1Eb9bb9jTnxTJ2gG2tVBgL388bSu6UCd4GFCdSvTEifoRuAzgyfjzZCYvgPwarc9AxPJwv67LNpZaZTK6",
  "key2": "5VMyjWDofeieRNTjPTdFchm5tm8L8j6mCvFttwgQFKERfotB9sADgUWk4tmdxLKSCagNsvhX76edh3XzpqwoT5wm",
  "key3": "mkXa9Ptsek5zr9j4GspdiRBtWCuBLhnGMLVvTZvCda2KcvMAWiDj5hfCycWz6fXpE5WBJfRr4D5NM7Z8gv8oVnp",
  "key4": "2U2Aq983jxsFdTjxAP2hJsepGUnwAhZHnaJQqUju3aHUzbBY1WcPJkEGFPZ8ueSDGBNfrEvZTaPJT8pzaoC7dzAU",
  "key5": "3jbPwUXq64TVTCpFD7DiYLbTCmnLL3v7aXK7PQGzUpFEyRkXqnDEck3AfdQY6aM2oMM24grrAAH61tTzHFtXZuty",
  "key6": "3m3jDfZm85q3tBycmVkHfS5s4MVbQ7k58g4cw5wciiZxGtznzVgANo7H6XFiXe7kR5jyiLUMfaoMKwvKCEgmqGym",
  "key7": "3GtxeFqV5JR6BmMjax54xUY3HU6VL196v8n1jXRQHNaUFaZ9YR9QXm2HrvRJ4NzgFWEGzf1uWPnCQMEbpHSRFvzD",
  "key8": "3dN5Nkea9khq2DtU32VC8YP5GQdaxUcdZK9VxNGEpzxomnrhWpr3vnobxwW5xmP8ryEtoBAvYfKx3JZDNWhb5Qv9",
  "key9": "4NkPqCzsbDN7PLTh7RTPxUYcuxcm5XsAsqgqf48mVkQxEkb986YrXiQsDzz14s6Xi86dMoryWnZvHeiRA4wbWqTa",
  "key10": "5fcpGxzhh4skypEPLsZhekTAQFdqR8ynvWyAsv6cpgUCYfzGFfpAfXcWpSfVhF3XTrFkq7wSVKepXV81dxNMVtMy",
  "key11": "3HAKXGeYC2qTCZCeuk6VwkekkwsUhQETsxtaS1Dbj2QaipFchySGzjFDS54TfxiLiuUoVHpdKh667DQ6DVCHgBH7",
  "key12": "27vF6AYvC3eT2YkD7JfvLF1rUsEESY7D6N2EdzMKsuXWojWzHsodQjXuLPRdXrmLdH9B4TcQyrWCrgqkseSTZaYs",
  "key13": "4H8UhJuL6vkMPJaDwkTqMg1i1pXuUycmhwUU6XEhYuDLsrYTriHzxEoqCqJbsBJxi9oY9tZ3NwrD63QKveNRYGeo",
  "key14": "2nfeJDZjXJ1y4fFWEeSgGkya3YfeQt9bdBGmoKyHAGnKqZW4JSXY6fXppZGUVouhfocqYhPkg5LAwXD9RGb6YYLp",
  "key15": "3vFeTmaUiqtxUcbpZL6ufqBUS7m53c7ZrVLjYxa1LYLYyjwWZ3pJsnHx637aXe8Ni9YwDyJEqveGMUBGYj4u3XTC",
  "key16": "i5NXoMnUKyhEyPYqsyb38XWVgpHc6aDtDZkq1p3LzZN7majjYZJxyE78UjvUAJ6M5bb1X4im3mGq1orGNWhezHz",
  "key17": "3UgDk3JxafLPQH1o8TnJYD7esSBRqUf4jvX58VzqxCYukoNoS75j4Ufp3gBo36rHXMKNChW6Ko1XuWhotbYbmDEM",
  "key18": "52b4RdiRKbBgFLwV2zwh3XE52pCbeccpbViAWgVRzb6tdWemjCp7H4P3tMkwkKjMUFusgz1Jm5sfKmTpdjTugUJ5",
  "key19": "2NdkvqRo8JZ17AYZAjuHMZDtnqUYLSf8kQ5252QG6ZJ3dRHEbRYJwB7Y1YuJpaqfobFjTiXpxavwBgPPYDyoFoYi",
  "key20": "2KH1VEJQvdDVTVH47MKaega9qkfBoG1dhYHyNyQ7zjDpTqEro9RBE2Do9rVQJQHwy99AkrmVo4nLoEW4KWqY6pGs",
  "key21": "33UVXZBwEkCxGKnYGnjqFjmSCF2eaeCEZZ93AUPLqCuCRCCcKYMDufYhHK2JHBFJzkmU5YzGhUtdGQ4XVCVMHCoJ",
  "key22": "5hXH2tYDtTkAXEBQqA2F9DXWPW31RKY8TvNtzGc2EYvttKeVrPxjKz39WND13At17LSwZgEPiYwbE1Zj23yGY1sK",
  "key23": "5VRkWToCAscEr8QwHjJD3hj3fGNgJhkJNBLcC25NVZtjYNUVkMaW1KnKhtWQSW9D1B5fVGvfH4nyaEqpbddn8DW7",
  "key24": "2ysmn1sfbLhGonMajE3p8Sjz7i8RLWfnYK4H3cG7dCerTj7SeuJgJaqgp8fbGKqXQLmbJRWXLBdpXKwJt8FCAbPk",
  "key25": "AUzR4rjeC4CBTPBYtZqdzDePg65XJeM2xAqqN4sgo7s36kRmjzjyN6e7rwadpyrN1RJGce8VpevbaQE8pCgWFby",
  "key26": "61gENwDsPAPmyL2RG96Qo67HdjHfEorPHJwVjDqEiuDAqBsm9FUoMZZdFJPXtzTEvpPpT1NXsoBffbtqDVxRjiFB",
  "key27": "4MpjN7urp24DuKRiYLH7sphh4yytmJy4NQTG86iqZYUPSow6hoDNbvzNJx6w46ATqY2rnxPDAyFsRL1g78bB1zag",
  "key28": "66CXnR291k9jRCUQ7iSUaKTDMiQpB2SvWgNXoPZZAgqCbniKX2uHSoJZcji6PDorZPiVADCXEmWRbxRReeCGRDCH",
  "key29": "4gFjFKn6C6mnkJ86d3aVXFgU3Y5REh84ZF9FkJzqRYTT66rVVRsPvZ7ZiXyJZ2TWXpzCW7L9AkbcJCo71Gz9fxse",
  "key30": "rhHaMwNpc9rvSXUNTjXF385bqCexukwu8rEHFGLcj3ARB1gNytQeRmyVg27xC7sNsDRqgEuqMUf3B4ZkjXf1JkK",
  "key31": "5AY6arjywYtHLJGuXN6nEsjVW7n8rBjnYNmABGpN3h63Cw2UuQ894MxQ3Qn9u8GMEVCz3TnJpJ7N3ff2Lt8d8mPf",
  "key32": "4iKT7p72mwKKQd4ahgpUMUrJAeVdjG23TXTtNT5TadjTTgKC6mWkWjvzZKz1qYn9jZbTKKCpsoEGE7b9CS4GWHws",
  "key33": "2EZF13crh88MjGskYEh1NbeCMQBW5gNjAhqaY3KZvcf6N85CMNmquZhNsnfPavrBgTKVyYLG3tLj4R75gtfoFWgL",
  "key34": "37LesWFmd8XNrd7qiif6J5XPGHNJVxebawDFrYyqj3SHiRQYWzigVrUnrGsU21fKT7EifYMi83qNXSENyjMSxxzJ",
  "key35": "3NmZnK9u4sPweDZn18kBizFGHrgYhNfFYpQRaa3aB2xNS56e4tVQBpTG1YMUcLpjYTf54TTsZCZoh8yXuV1ukkqV",
  "key36": "wdv8MsXXWhEoCNJpbMGewcHwVgiCbY9mu9daoLDYdTWkX4E9qszeGCob8XHwQhXQiX84qLia7rZGo2RJDqNiazt",
  "key37": "3omaNR4TWqv7Lhww4TyyrUnzweCqKkLJv9NnnG8XxMtqj8arjp8b9pGMJ4sHodZDAmwAteVXRWagBPPSD8GAir93",
  "key38": "65tidbbbxGgFrpPM8AyDanmuJcqgjYzHMe9RdwLy3SGDHCvtnk2d6om9XE1Qi4g92QWpnAxubDo1EgVSnMqEtXk1",
  "key39": "38tyn6EF2a4EGd1C4MfwyXVDX5JBwF28tyjrGfvcY3iDzQEb9971domFtF3LBujX1i1zpsACYT1wXee3YnVWKN68",
  "key40": "29zFXgTPGdK1YyiHLQ225mrPxgQqjpuoYRkioqefbDyJKu3nDDYo6JXNB7ewuECjWVD58adgLQ8RP6ha8RzxgzBo",
  "key41": "2EX1i6bpyo41Mt4XnSe89qyRDcd5YP61eBSvTBvThLNx2igeNqZ9Y1cTmdS5RSuyjpi52f4zvWA8vPoSg7qMrpLW",
  "key42": "VWxKRwDyiiXgDvhbYXmqzFCpc98iZTLHSrLNxy7YrQJuJqXNW2XYgu89yCEwG11bEYjFHQWkNomBgFvSVEtRxYs",
  "key43": "4cM8eVPsgzUja9iFC7TpUziiiuMYJa5GidyTFkA7YavwEYSm5NQ3HZih2nHN9LdbPdW2iScSc7FTQSnFqL1GsoX7",
  "key44": "3Dy8uFqNgUe4oF3e3YHpCL8HrocXBAtEoGMXtC9U3aRrtkdfSf6xM2wEzGMKuigm8VjgFCKPghoK3RLi2aGbkFSs"
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
