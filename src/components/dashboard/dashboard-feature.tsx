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
    "3aAmkdsLNrPG3nHCSPs9YFVCWpNQvBtJMDFLCDmbwzymos14yYyr8nm4vKvw2Bq6TbJSvsvnJAJoYtvk11MXnWg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jrMamCumM5CRrZy77qjkThFRLgvcXsoDAfM46VCwCtP5pESj29gBXUaGoJYYHbAqP14w3RdS86EXfBpqU6GieiY",
  "key1": "3wt6LMzfEqRkGN4L3D2JXMmusPJ18j2m26qP6sAoHuhibHXGsmcXpuhc7EhyYpAuRq5mGQzS94hj4FGjRicqF6iL",
  "key2": "5UsVY8UAxTYPo2XN8Hf4bdWDW22jWGkW1PPWb1FLQU1tj87jLHjysztD4LYyCpZ92bPC36EimKb4Na4ejrXQvQ4o",
  "key3": "62bNa1UsQqRD8du34rWx3ZZJQ17Lr2BbiZw5NSTeVqMNgiEL5eJvEbC7pXjPT2HiizKYqDuK2d7qmLaPC6pTmS9D",
  "key4": "354oCfC3XEvhnRsMqkAXRAgpgGBxawK9fPCqjhBW1fzeCaoCTbAWu6dR34HexEAfvokuEFNuhd8Uyo19XxvcqjxW",
  "key5": "4c1mEFuV79gqtFnC9grpvezncnNmDFnUdKSJXd8A52QFs5kXCw3aqZzeRK6PT76SLX9sYC1TK6NdbAYw15D6byYa",
  "key6": "4bw36fAmRNQ3Cn815EumVrDAarPYn2LbcRc83yBBhvKqo1Rfe62m5qvKdEPVhdfcsPrCDiW7nFm68aLJuzamSxbE",
  "key7": "K5jTg3fq2Z3LGDb8fNosAi3vxHbX2DjN3SxkPY8T51CiBwP7rq2x4RTccrotuSPmiTBhZLdrih2WzhSB75DLMhZ",
  "key8": "WMWgwdqhmTxcZMYSmzGYZgkFQkzW8LmHDv6zfNgunxuCrUevRXHikVR136uvvdbpwHgpjKQRJ5Bq4NaDPc9X3J9",
  "key9": "5MPkkPtWkAbugNUrFQVPiLS1Y73EhE1TwmiRDUU6mQk4scU9urCBdhdfcynmtqzAwt7B9zTG7pybkBnmnxA8MgC2",
  "key10": "59B38Jn6Na2m5R5SzThjMcsjPxCrETMZECrgWGQj51AsgwZk4sa7NehbxfKa47EsESPHsQKQfLdbWmCywEUYhace",
  "key11": "2orLsXWH2rWXHxLA8aVj5hPw3vvyjDHZxAUqr59ZWFsB8Jww1ntNVSYLvDpzrzBtCkZiNGkJqFfvbTT2RsRUGWDn",
  "key12": "tdbnrnyJDzFqw89njZrda5UNVjr5X6QX68ZsBcboJsY7Qz4RuQNQHf4CtgPznyEi3Yb79AieFw9VFy2Um6kXZHV",
  "key13": "kVsaXkn9P6dhp3aEWZz7ijVByMd92kokr6Zgtn8gsLu9sWQsh92A8HAr37MPq35fMr6VhHYu1hayHLmoQZ1Xya7",
  "key14": "4qyHxtExgrYZdTWrordecFSngxmgu3ddFeUVcDUWDH7MS1uCeHkWAcE9ZUa7CA1oKFBDskQWGkgaxctUebJgF6E3",
  "key15": "56yCeSSbspVGgogwgfKCyF9GBkk2n5mvQHaUE69npUKY6X77fgQYNHKNJTZJJjVep8gnKAFhVk2cJf2LFDvy3F6g",
  "key16": "2Z9VBF5M8Akgn3XYeukijJUjDeD4EGZFjmgyCyvC6wZZTneLLabGHfVW7cBcq8Z1baDepgsGcxgGTRCECeUQSTqZ",
  "key17": "2PjoN465zNemQSpLgWosd14kcepXXJ19FkmLsfBAXMAyEwdg7Mp7VrqdaxKHEkkffnxCCrTAUR4No8tN4Q7Sv959",
  "key18": "38Ac8Nh6qFqUHc1ABbGSXmwHU9ZkPSsdXUj37XntDBeWniWYy3HsBorxeSJonYX2woCPo5hbRFrg9cowu2kzcms2",
  "key19": "4SfajhGVQ8fXLSbShF9mCxAqvnM1qbUibDw6rBGY38tegdtEKAruLnB7wbU5sK3yn32y4TPbQTysVdfW4yJqm8Ne",
  "key20": "2gxn6jS9Haeakjw8CZVhKiF9JjTCJohxRaA6YvYy659RZERQZCyjztusvqhK4t4x8uH4MeuLno2G8f7cxS6ChxeQ",
  "key21": "4bphxcmWu9MFkPAamJXWS3EgCWvsJGzayRjFEhH5uYYCYDGsM8dG34GVZ8QuWQkswE7b1fvfWoNCJGg6aZDfGBtf",
  "key22": "3XVqnYgccEsomUEhoGnjWDS1c4TYr3XFGzFHCj2XifimXza7j3m45MRHCB3Goed6ADobqPm7kkSNk2FNwUNVBCsQ",
  "key23": "5qiGyco9HDRpFogVvUnhLZkBGVPjf4ANyBRk9j1QS777Tg3YHz7qeKWdC42KmUzJB3DfNz2oALxfuEvMoRU4yssM",
  "key24": "5FkobxAP7XezkZuFoTwcuotVg3Y1UkuKDh5MBbJvVbgHFkoEhwBJGATLTAV8agLR8NPfzCVH6Ms1dQPtUULwECKs",
  "key25": "5uneajyMBuXkLUAQEeKahKxNaSTf7diSTBpu9NVAo44nJK3mu1kEVa9Nrupizktm1egxMLRWZPRsgNAz23sGnNNf",
  "key26": "iJxAUa2V9SLCh7AP43Rmqa7Sf3TETxNMDey2b8khr9mN1VaLjzDhbtujmdBP9xmgyfY8hBAfoP745TFLAbgYAHY",
  "key27": "4wcZEshJPFgW4PWeonfYdCZzc7oQeYXabRd9FYQsC96TFDKMt3b8S4yETcMBvVkLVspPNyUjoN9Sdei9H8LMK5SS",
  "key28": "2kq1d4qN7RQEuL9WBYuzgy35QfKaHAhrLC6Pe81AFTTR25C3cQkTky1AJ5Dhppg92UeKkH8rSJoqdktuhEVL7R3g",
  "key29": "4N1WsZQjaJiu6M2VfttDv7wr6A81dfLHR79tJthSw6ZJ4hANQKjavzfK9dAqo9stymLA68d7h7tVS5VqjXnE3uX4",
  "key30": "2cjdqNcGNx8aKk6QGaQ544GuRkgEywMANh9JX2mqbNo1dfirP1QUfoYMEjaEhm3F1Z18xWoPppcpiRo1p9XcqdN9",
  "key31": "5gh9R42818xQdZpNDvRG5g4yCXWqbLB8Fiif75GkFa2g1qiNo4nYYjwjmpfMmbFmx39VjksE3MBLWBtmw6K7PjpX",
  "key32": "YZMCEZWDWLLteebLpKi5KCV9mfipRSwcRhzFcnAhrbYBdWXXstNtoAvgqkoTvtBsRWmg1zMgS1H8h4iCo9QkZph",
  "key33": "5NMYCn7efUPDNrVsZz6GkTft6wXPCzWZ5LeWWHyXen5s2cAVMJ5xV7K7N5eRiEad7HSuGSEgeQNS7Svu7vpALEKG",
  "key34": "XtNgvgEXtDkSTeMrBmLqxG9r3VFHdMazs6Xe2ZBEj9hbucoT5SpHV9ccGatzi1paVxab4XYqLmXk329S1VHqs2a",
  "key35": "54juzUXjUWvVn4JXCxMGsvx1wtHcSWbVCPzfD7ZKyqh31QWtK3KMQwBkmFRswz2cK5u1f1qUEyQxZPMdTjz5grJi",
  "key36": "4p9cCLcUW9SUg1rufzXcXroHfewKKUn4PhBLoPoSNGmvfxncVyKo1UYa7oAjUDVdjz6N3QA5AQUF349FbVqP3p1m",
  "key37": "5Tt3JF7NBUzwLcyU6S9e6Vong1ufPMtmpXDN98QKTjLWYFq6xCZwvfbL6C2FrNDysUsYamQCZpuih57jEfoczYDw",
  "key38": "4x34u7u1E971CGS6VPdMziha7nXFCok27rznVUsRwAXRCf4Jz8Qsdv1z2m2s3q4vCfqTj9EGoPfjT8oy5K6rQjop",
  "key39": "uq6bFJHmCAhbrLbWZPvkXP3cLSVVh9BQ4a7azWfQgXyQtwgrcTrUNd6hNTjXwnTwXDf42b3x1d3jEuSpuzLxLam",
  "key40": "Zo2b3Dy3PfeBahPGHuwnjCo5ihnovKDyp4Tp17sZ3j4V3CXVgPP7j2Eqd56oqL7tXa6javGcDJSMtu1eUwHZwA3",
  "key41": "3HyG8c7s54rF9g5XDGJgeDiA7rKDTs5rB6Kw8taGoifN9J9SiZWmMV49xbWyHMfYoRvtRzCV3AH8v5YG2i5XmpXv",
  "key42": "2SPh7USNm1gQgEtfPLcMa2VkcbmqHSSiA2S6ZVFTwJ5uq2mEpkeCkxMH8AUWDpG6D5zCTmBEUFwtvgewtjWckx5a",
  "key43": "47XEeHVKVBqxZtZ1ajy3x6PQ1uVax6sQp7YWWjMPAHgXTLuwWitBTPnwrifUFGEi9z2thGuEqBLB9FVn1LYh1u9C"
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
