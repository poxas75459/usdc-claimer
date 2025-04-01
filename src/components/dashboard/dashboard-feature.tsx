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
    "2ca5bxEHGoKWTRTUwj6g6D5Kban8wdSTA223M9UEq9gmZXmADSHQTzjxDpTn93hvrFYiKXvBZm3bQSE2LmfZD15Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AMcK1vMxG6ZJ9jLpMJLZ5BR7RUJjLYqX3ghw25whwCWKAUdtRQPLw11Y33Czb4fGMh1uBXMvJuKTcb7hrYKX6ic",
  "key1": "4fN6sjsQAepjEiHf19DTNuy7sFQyUsE2XSLDkgeLgEvvZiNHMnrtwTe8yjj6g43fAzp4yMxzpW8VwvqPo61MNQLx",
  "key2": "2jHn1qjiQ3Y35WqymQRwarCwmshTwQNpvkPM4ZKvL2SrR2EftNmogNzbnfmv6oGtcryXLTZfH6NDLgmgovnCHxr4",
  "key3": "31EgHVbr1tSvqfvRMC33ArE4QKFsqVi7Y6SFrJ9rxj7XGMCdincPmJr1WPo9LWhaHGuJsSN6dosp1ahTVji7GHTh",
  "key4": "3bnUBtxqR9jB8NQTN9N2t3jA8dGq6jAgW8CQDwwHrPAfV82Xcb59hkFPKVXcCKbv2c29eN33mevme32CanNELwxY",
  "key5": "3d1rSwCJ42M9RD89499oNX1j3sfHoRVybTyXjVcSFjx1i1pM3ZUM8TNTAut51vhsU2M9YW9e8TfBYRuf1zdSnmxo",
  "key6": "3e3yMqsbfCvjQnXkJxFg41totEwds7okoa63MMLsSuY61iP6mB4dPVdDZwcmXsWekuWRBXtFiVHTcpeToGvDyxDB",
  "key7": "3qCZxPEL8LKJfEeffbAC2T2QEQgo9nE56NCjcT5HPMJcWw53jw1HuPNv1qHQPYsDv3g8yhRRoeA14iuSwjpW1BLs",
  "key8": "5Af3UZjoRyiTS4FsJfhGoacYiSh9pSyN3nE7t63eRK6Rsz1poboqdGEahBbpqSt5e9jWe8tRsMvVVCFRqNtF8Lf3",
  "key9": "5PwmWrCpQXpWddwsFF43cYPg7jBK65iR2QugKB9gp21kuRNp9UwrcWCDuHk37AwUGeJcCHVt2Ts8cfZnARs4ybeb",
  "key10": "nSNAFNWpGHjjcCPJYVjbwdQzSnHX4195eTWECg2DJ5sN6DVa83KM3FFm9Kz8UkQHThtL6SnN1av2MLqxwXdCrf6",
  "key11": "5cwTstRbsafVurQXYvCJ4qx1WZu5HK1crDQHNbX6Jc5cQWhmk7GUQU7E4vqeo6ZahzsUctubhGTPpqUps4yBLc1y",
  "key12": "3JrXWRmohXi5TYnAipmzCujCzoFCZU2dQhSvmoPWM3UaZeEKA5dCTSb5psK2TZCsnMrd2k12LUQDPNvhEse2qon8",
  "key13": "DC8k4mLVCqGfjutBnixXNDHmZ3a9pXk4xwFGu57HYcEV6LnuV9nCqDH4KhRAx9f1usbYD8j631rUd8EU8dzdnyP",
  "key14": "49Kfur8M8cNt22eTnHqNHC9uQzuRDCroTEn4n2Zcvq1yZGk2Asn9McscD2dP2126E88AjMDsM5eZQLido8wEb94y",
  "key15": "5WZe6NaTZYmkJESe8Hb8Aq81Xxt7A56sgvdtVtx1fd4g68gaVxuHLgFCaszxZ91CNzRzWWnaMzk3uvLNarVG4awS",
  "key16": "5jjgbRmVLCjb2deBchYQwUaVez8gu9cRoHAWPYQzGjGTPHQxEchhMNrqiZ6wYsL5jzBaFJcZBBSU7kG1zwb8eJCQ",
  "key17": "3snyMENgDR8JjMGAq9z6QjtJ3CZRoL7VByMfvqcs52btocTnuUCQtMZ4Huc9YHwbe7agUdthVJwShRCnnhuakvgf",
  "key18": "MEdSGJbXpyZwigQWW9uo8NrqJwSYdYVpLizuikYbK8bfiH89f76dLJGZ1a4PLAa54CNP96NmMTL1We5qmVdL7e9",
  "key19": "4KhWf53uZLSgr5w5fjr2X9sVW2Xdr4YwQEhKA2Aq8iP24LrnK8jtnAentqKzJfY85NmjN7z37zQdNgaJX8yzEBST",
  "key20": "oTzGRndgrsVwf9Tt8KVQrFG6UkQodyyUhJJ52JRdBzVe7YwsDwzu1UFvrcaj8kX2QtmvJeu43zzZEkV8pNmkk9G",
  "key21": "43Vrb7p8X8mB1v8yqHWXZTfsVGuwBmLDf4AMwbXU5Bp6CNFQBRjaAfJRjrRmPkhcEXgA8adEqUw9tHnWG5xvZ5bU",
  "key22": "5bKPtvErJqjQdNFEdp5Mb1jRdLRxmcn7mXBWcffs9ur6aFFJ6kyxkpxPdUPkUmFQzTkNFzFSQAQb46Ti64PjmYfi",
  "key23": "5uk8CuPVYjK3xoKDEhhTPbTtKWzF54cUBBGbVZkejcNWkHJArVn8vzUfDMgqnhTj3AAR5EfZpgLdx62NvPzgYtVS",
  "key24": "4yxzxjKo6ZrTS2HofeoY1NxjVL3BNakCmrBVGRT71JDsV22sPp4eVyD4WqhPohvaPNuCW2fgrv28vG4SFiZ9cEqN",
  "key25": "5hQRFo3ijLohqQF8E84RGcYvoj2fvLT2ih88qRkrRor636y8tD8H7vVRDzdWfgpALoxLn8Xeh6D9Jc9th9FNnvWd",
  "key26": "fys6qBRRHHN4DrTCN27wFVUo2TRJ2ihRjVeHX69PfFBesWUZNzn2jhZtxBcAkJLL3Qrug4ongNx8NyswNoToeT9",
  "key27": "3DjQxvw5jbCjZqq45tCahJHmdbt6sDWDbMvFRPZVBEEEsemsmU316nkp339GHwrmeQr1rwuW6m23JfXVSBBLHFfT",
  "key28": "UScgKzwh9izKFPogN2aiF7LV2jL9kjut4gxHsVQk5oQDESP5nqHDxbZptvzu2PZwrmWmN7nG6oznqYAKyQft2Lc",
  "key29": "4thqtiav6aZ3SrCRkcuLZhD9TPvSu2CYEU5pBGcCK2Zo38owTXkQfBh1UqNUtoAXoWBWccSXpCji4v6t5GnrjSyy",
  "key30": "9W1qqJrqQK7fRWULJMwWb8w14ZaC3dShwFrtAZr1ETE1W8oXqP1cygrQWj8vwD2BxJ4U6FmL8y2SetryWtZKcbW",
  "key31": "ifBgxGHXdB2TLgg7eQXD3u32JiMGLjLshwUTZ3zbmAGy2n7guhQW1k23bnMWmNbPkktXx8Aqqpye8q7uMHsbPRr",
  "key32": "36RFkuzsBq1uuXYTGavPSAfoxTqDFkoFgC6TSfcckexmcrWknwQgyzLwtKEJegaNMEfRyrqpy9rDj6RfhHAougzi",
  "key33": "5XmnZnbSYtc3yYqjiGMSxHSQyLoRBWmFMwLYefAEGoRrKCvxJbsXdE18wgoUEyJ7QYc3hWDH7wko8F8R73M2Wwe4",
  "key34": "AwQyCaiBBuxTXNAp9A52dEqBcRSkyDV9koQc3nNDkAc9MrEsWBmPWzGzaCQB7StvZeGUQXAf91jobnmjqxJCfXC",
  "key35": "3QToQ6Luvp7HbpAjErGR71aWgWwHb7tVFzpBWn61VxugJqRuuQT4rAUQ49nimh3b9fKKcckc7k8AVap7ku9C7jM",
  "key36": "VEjqhZagDkQuKiviAEPduaVjL4J7F5CYQLpBKtWJHcLcPe7jtHsTrWdEjamgvSaArdH5UpVk7X35PeMWmwYwtA1",
  "key37": "5mQxZQeYXQhJeW9dQhM5on6E26CcSV1sQviJD6X4DELzXHRFZaRzjLUkC23AJhoajxVhpNhq3G2mnZuPG5iBPJRu",
  "key38": "4f4hWDiq9DAmE1FqceSaFAKxautCRr1PpqXy4zWzQnosj6CcrDQm6qRNduwUfHPVyTNC1FFjfx11SZPnUgJmB8rh",
  "key39": "MekkVcbZpzCzatEDVzC2HHRd7Q1bK8AbG8QdQWMUiRLBBUWV6mmauWSMRVVyN3tVeN5P1fsbHk68W5br7vd5eae",
  "key40": "3qBEHmpRGDY2W8XMik24hRRmw94YwbG6PKcpyko3py5i72o3Gau8iMqmkRZRLvQaMFRcjWK3R35CTtXGr1QZbFRn",
  "key41": "551TPbp7gHajNcmS77U6G1TXmn4ahiXEqxUR6YZ5PNSNgEXYobA8Zn5T5T2udKu6vqdxUVYrsm6uB1oyM49Jjmuw",
  "key42": "YXTLsZcTPiYpQGRwYnqe4JYToPDVf5zri8mgd3xZwejCytiMMzizRWjcMfEkEaXerQgA6cX4fHX3EZW1CssDAiS",
  "key43": "3qR3MffQpRKLvF3Xtv3G9btwTWsNQaBnfZeLvaDWYmRgj5BvkTftpCn1c8FgT3Yz96tmsNaXcvAxS7re3dzpWh8L",
  "key44": "55kQhWx9fSLSpVFZ54zWxTKdqUXxSyaDg58mXVG8yU2iPDg3XC54NzWjCQRa3QiQhQb7MDXop7XETGX8mgwTLZDd",
  "key45": "3jGAkEF4PjLLmqrVdYtZADbHw8EwAM3WPSsdGxm61gKDJh8ZrfmwkurkgW14oyFaVFbH5WjsXysgiy2dhYJRoQqw",
  "key46": "4s9Zh1BJ336ssZx8N5PFPSZ78DMgGi4BeUrdTbA1kfP6NaSowDrMFWJLBDowk3VCnBdUTVz1dTpVvLVCoRieWhUF",
  "key47": "jVTDNchw3pUWiA7XYfLpueozhhY9XKtWLbQZjdzmucKR5hUGqE6snCqf6JCfPyH9DqE16zxvCHMCowHhWQCuFXw"
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
