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
    "3BGPRZBjCu4tXmqfn77CS9eaftyg6axrPUgvzZ52ex1sAkfGg5oWxmAFdZhrwQWeY3UJbTN7Ldu87etDzp96cF5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z51SEHhidtfK186LbZ7CPxZYhmk19LkciNWWxRcaRzahURwcxcKtArLzjRxDUFqNpaSs97TS41NPghvfXBYNKfj",
  "key1": "2eC3Gi41G7rGpfSCkUohCaKJD2uqt36WcyKPqrrASs1jHiZbiexedJKeJQ2yQc9mveZvuLDgNUvTmDS5GEpVaAnQ",
  "key2": "3NTBSYHe5EzSA8pMDBegqnx3BraowP2mADDuTqBXo4CRn4iuKEUTVdij9jobAb2gX6wnuJf6T61gELGhVLLkAcn1",
  "key3": "2GYPsNx8NvEjZX7MNFRUJFXX6LrFsp1VuyiLikwAZEZj84Vf9LJCerVVNxDw9HW5YjqjVRZiUwdGyVRuPNnzDPot",
  "key4": "4DzSSijnXHsT29foxejjbY9AFGijHCQ63u8D532v6iJ4opzZvBc3XrXp1g6upadDcTsHoW77cE5BwfFPeG4Q4bqw",
  "key5": "8NGEg6Xcd92PFeCkAZuFJRiZ2jQT5K6hbUFvVDurstsQyTXCPPAxuNx4h3ci4S6vRM6xkLbQT23NTipeQXGRcaU",
  "key6": "42WaPwF13wG9ke6paTdWXZqXsMraAXFmWq8BFLbPPdRQhRXUAAwTWVdZdNTfjKy8PgsoVzj6PFpX4wzYrmHPcesy",
  "key7": "5KpohGNTMyRKbqSWNxSpe9nnrkVy9iesm7ZsmUp38Ck9mF5dG3riayMEwYZLi5VF4yBFX9GDX2RZcrX9UCees6K5",
  "key8": "5VoseA47VUjyvoius4RpKTjMrnUgHCKvbq1JTR9btfjVc6heqQqZbvdSRp9tMiLaxF1DAjdcZFnqBaTKYUdLpG9y",
  "key9": "5SB5gd7bCCLRn5aFEKtxzt4fAwb2jCWdKgBrSBxeeprsmiGd1w5dckFTgCKFw89h6HApPBwihuSKsB1YFXnqmYT8",
  "key10": "5EWafbk4x7sv3kNALWTJqu2DwBGcxmBTEAEdwfonVLgDkEqzZzdRrubWwNGXGds9n6o1Ns1xmZMomJX9xGZq8WZv",
  "key11": "5GCocbQHQ1vDx89gk7svHx8aQkYoDcieCxtdpqkDR2g9dMu5ztxcvSDcrVPPn91XogpH6CiKfcMC9qk8FTm2cokW",
  "key12": "3cGLYviLP3M7jpZzzTaurtfpYsHF9VhifLz6mdeSFyCaUkxDtmE6dQyntduuyhgYNkYmywNPuWnkpbhBv3uu8pHz",
  "key13": "3xUnirQgCfv1tSLmeCn8ewE8tDvDPm9MHXmSwJZuvKEodCpnd5VLmcgjaJcknpY1ahQmgeDVA9KcXhhYctVDXuVt",
  "key14": "2Ay1tyW52SuNuLvc8N9PoyzoHarUHp7j4fZqxMbbwsnu64PhZbJji7trJWUKd9shXqjED6XTD7VdBRnFaD6vmhEA",
  "key15": "3ob6GAWAUQoBEttFSXDVkg3d81LfaFefAphV6ZDLUyqxqN3EZw9WVkj8fkrnE3bEQAK8FW7r2jS1zYn3VCxwNvkA",
  "key16": "29mNfRaWZD8egccpTuVhHQgKaHKvRg6XmapaUqYwmEEoEyNgcsLZhPS9D35BMgdaLEwJMirczL1tseor5njrgssa",
  "key17": "5Np4KBq5KTpM4vn98D8HJkRX5fgH67Xr5qDRB3wC7YDgCs5STcZB9CefaBKutyu4xX62TudPYLbTyakch8YTF77f",
  "key18": "3C7fW3jXf1gT1ATtN1HhCiqbQbQczJD55up7gypQwwvLm2XH9zf2nz8hByKyHKWc4DQyg4o9DPhzDa4vZsnFhFfs",
  "key19": "5XUAaAvf8j28wqLamshDhCbmr1mNdotbg2snEr4wLeJv37dBLmc2r1duiioTD12Dopdt1MfxJWKUM7ihstCtp37L",
  "key20": "3rmW7Ec6gHPdmkt6TeTw48ZNPZkNmUTW843bS7HYJSFoM8TqmmUPwq2wsyoc8K7wnCRWGsz1R65iksa8eQALLYF9",
  "key21": "3RNuRedoqf8uCDtW3V49Etor5H1aU2M5uuQ1CmoQ9gCXWQJudvkTVa5mgWM6xcc47o8Nk4eapnUsCZSL8UgpK3kD",
  "key22": "5euv5WUY87M49cgq5UjcRNR6qjg6uAUbTjQQxSjogidpKy7gnKRoYWXuDtE7sVmqLfyY75cscDq97sfzxXX4udNB",
  "key23": "5wAD1A47nwVFjrbNhhTsHNUonFCMJkUsMkpzZZpEPuSAg8dcRhoerDFK2mUog2AjSXVYzz285n7njUSV5TLkXTDz",
  "key24": "4TsKmbqLkE2gedsQUJzAnhGmHRPJd8o4eYaSnM82oNpx5DXWRQDtzQbYCFrPnke5LsFrk7oErBV9h6HMp9qUkbcP",
  "key25": "338ujqhEk6ENxB7Y8EmtzsSKLscGQENjUbMfvMm5SS43Ev3gM6rLf6CDdPoPce4WxGsZ2g4bjDSBwVJjvKeJi397",
  "key26": "nB9MDnSGvToaBvVzQnsiaoEL2T9QkYypD4CVUaQd7CfBKpYRVjrE9cT2zfYacq9BQzfWv9B63nLGUkYTmb3yVV9",
  "key27": "22TLoioCUAD4mvQi9K2fw1FmwYQLiUoieJy7bxr4WMmumN1rr8a9ryi6mfMRxJjpFb62QquDRi79bvHrb267SrDd",
  "key28": "3bAMRYfM8fPXMxr6L6Bf5EzoZoaRpR6DJcePswcwStz5dMp6GyGpFDVHX5p8Fc5UTgTGnAqTmwvKPXXeKtXDU88P",
  "key29": "AwNkPJy8dkxCFrLE82en1ViwUemsmKtQWGfMwafzAGSkXUFMt2jMkHV5zmB3dQ9v48bR1zC4fqNqx7ajoZS1dvm",
  "key30": "MYA1taRzSUvRr6eHRDkrX78mhweKMgFUJFghiJfDeicj917gYmz9u89JGB4tqKsP5R7r9xdBs197ZfDaGY66jhR",
  "key31": "27jZjXhnSFgqxk3bXYArxB9FsPKW7VbbXcLKR9XVVncAGaHseYxHwuzy3J3NpNvKzErPi99UwqiZF35T2gv1gTAe",
  "key32": "52StDYRwXsD3U7o4KUYrRZLerFeNPpBS8ToforUHqxLQLYxXeW6yorV5qtmzbxqpJiU5X81yY9AE8NmT5XNme3Rc",
  "key33": "4n7jHc6tUG1QTp7A1Qoh1hy6BuuJRTp24HZa2gzZqveGNPD7U4amqAZHaRzCoCLHqoRjnkxeRiuPSi4xGduENad4",
  "key34": "5PRy6jB2MA1ja5DvgoYGWKiJ4mvBfNkARXotTvN7QahdFLTcS8uPhz2oViEUtK34JoBwyK7rVDTDw9atpmkHg9s9"
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
