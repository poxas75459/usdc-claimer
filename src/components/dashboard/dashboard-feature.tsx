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
    "3X1qHfgmn1oo2ovjSR1mWwFh3eDpiGodqMKY4KtJ2jWXcJyft2MomLAr8YHPUytXQj2deSHa7zpcV31BCzJDdPU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38CKqfzUwQMnx2aVQK784hP3r4Xv271qRzWG5mQwtv8owWxQtzCctRYgMiMGMF2LcYH95wKXo5LJfYh2CTaD5Aqk",
  "key1": "3rT9WvuZ4u1bxiBTzLeqpRWzig62dEohLmECV5KVNxDEnFF8o6fqZVnQfcTNQYx5qbxhtUhjvmQKBka7Ytti5Wym",
  "key2": "5qP6UsUL8TW3pFxP4SSMpN7KLpjAJPfYWwjxUfoN1mdJpseZQfPqw6QLtcL2pXjryHfuQkQTR5YTPdSJ67rB4hMx",
  "key3": "5cURG69ozAzetdxPenFTWGmujA7YqANpRP8pB8CoAdpWW3pGhWjpu8TcuKXB76uC623jAqoCrzE1ZkyemaeeYWrS",
  "key4": "2aK4zjRzxBSs8d8NMrfjNStm53M8CqcHGCT8Mjyav4kCN7MGsXyYKxK2D57FHMjj5eAQgS8zQbNvRbGfyLMaEwiz",
  "key5": "9JCWrQ12RUu53rRptxCLdUoq6EiMokoL3ahgYi1Zo9Gyf1oriPwUNSqwF5MHPfRkwgjWrJWrPGSnNxgdiHKSSMx",
  "key6": "2kEFaFowKTRDjEAGKDk6LqQzfHngjprNUXYh74FPUWAh5REXvhcCrFcU1GhqRWyn5jL5LViHakbtQSSycKcV4gW2",
  "key7": "RLWJyzb9nnHADBUry1akHQQTWDyzJftRy2ePhQBWr6YbzGVa3nuR4stHAa7hZDKDcwndd436vE8JhMR8tU1U5Ln",
  "key8": "2svm42ouew1JshfDUH6FgWngUCqAgNe7y7dtpt7mQr9Q2FimLJJEwcgbaHz7gh2XU42rHtG9bpZwXHHqwvLH2Swc",
  "key9": "2rA7BPhjTWHshDr89JtLQCDtS9NY2z5h5KvoLKYr2dgpuqQ4wGEUnoSgFHbbDcv8uVdWaw6Dv2DKV8pfonCDxpVp",
  "key10": "4D4chTExop3fUpaqjGA1gUQj83WaKechKDv9UFReUxgK9pUkPRSPBCwXvpdXiwab1PwJj367MvkSxCvr3283kAwH",
  "key11": "3KYjQENt9S4XHLJRs5CWaE4iweGZ7BsFuDkMFvsTupJJqUM431mUcVVXuiBwgbAtdRgAzZpUnuZYvJzppoon2j5J",
  "key12": "Fd95sCVawBgywivthSVzBfXJmrjVtTsoFzLGxTnAdHt4bHA2kKkCbxn9FfjRQ6LQ58W2WM3jwpJWGXM3HA9UQow",
  "key13": "5YqqBgrC4JFAVaBXaPNTugTzZtESGDVqeKBeCF7tih12DJogTXkwVhw6mX4yzN6SmByqULTe1nPAXhL8XENe5bUU",
  "key14": "4opAX3gbx3gTB5L7PLxqPfgPb8mCHE53vRe5m5Ln4TbieWcvAbX9T4Th1AuAMbZn3TSmciiwFBoKUTKWR24GsSGC",
  "key15": "5JG1F2N1m7ekfTjZT5QuWwaMNkid3yq7Sr4gTyoQpurZHAVtE6m9iDeD2Dw1VW3ek3bEDWpVkbWGDCevqmTK8Rr5",
  "key16": "381qdc45Rjvb6NF99nPN545R4ZWJfegtE9rCrVaUSXFabbrCRmFsjsGaphGdiGECyr4KUntYWfi4b6VWQvCLuu9k",
  "key17": "toy7xy7fG9W4W4BkgyKy3BPXrg7myF9vUQqpUQWTqKRNdCQrk8iVZp6pVzpHdgnsUL4Zpn7ndp84kgbiLcdkFpd",
  "key18": "9uUdsSg2ToCx4f4TjTkf3ZzL8UfKXE8ygEb8JUZQ9YDH3Z7jM5xnt59LJg42rJdX9Qe1RWx2Ga5GdYWqCcJdqfd",
  "key19": "2mhrwtsi7nQLNWjLU41rh4yCaEUwb9NR8rDZW7WtXYPNfDuPScNs7czdi5JERjU4UYvLYee2DqAa5CQh2zDjDFTe",
  "key20": "5d4rAC3cebBYtikHkVzdtB9xzBeQTAtQwwLfg1Pp8nkmXQfmR9xGRDGXUm54P8ZpT617CRtEpu3vKp6cfffHAgbG",
  "key21": "5eaMCzGqRKbZZqkancM2AReXqNQBudtQAaEM3yCmunQkPZh3rvCbu7HkbG7Tko5ZkQAwRksQwu6UMEhrcvSeQDCv",
  "key22": "i25E2fFYbNkHshtkbfrHewqBhzJuoPQDfduc4z9F99tVZqcfQPpNBzigMNWitM6XwTMwXyoFmqWrrCusukfawPa",
  "key23": "64WmtXpkptutsaQKeW67QdjX44CBeqhnS9UJLCabBkUqcTHx8oMgsyCJYiPxZqRfkk7qDudB8CUsota7uCVQCqvx",
  "key24": "5smogfaazxncYthPgGh4VJjzw4fk8ZAn4gLbjFyVSFtsj2RA75oFUGxDY34c6dwo5HJ67xERtAtVxybKtXYtmTSz",
  "key25": "2NLX7NjxBcW8DjEYkQB44z5tUdsfjV4hfXCG14bVgNDPqsBAagw54SExoqqBEX7iv2XHx6rs1u4NLosn45iC3TzM",
  "key26": "4tVp1YwrpyWEEJ5nNEAb5r6rrSqbuM1qLzFY9neAivjHAEzY7vfeBDMEsMcKyMsvsvBSqxGGdC1C6uNHQGUrNK1Y",
  "key27": "45rgxZwayi31NPtUXMuuTrYspmLe1JG4k2u2pkc9zvyhaeFGjxHss8YUPd5rK9n7VRNooxbrd5WDH1hUMHHgGwPW",
  "key28": "2vGkxunbQFxaMf8YdddjpaC61oEmEwtAiMy6LepBggUL4fGMeJTT71CU3XYiBv5N3EC2gvxHK24MfkUMxTzStDkY",
  "key29": "61NXiD1gWuP26YEhGgk7mrTwvvRqaPZ4p2v2caYLcLzeHwbmTbKKfGo1k9fRE1R5sFPTwqFqZxropGYqpL4g8v8a",
  "key30": "4jjY73Xxgb3DA1ozh5PeiLCXc3cASScgUAR1PNLGeUwt9qmnbtz1MaQpd6QwRp6Y23szr9cW5Ug9UfupFJ8vxXDx",
  "key31": "4Xxpjj72tyYuKecsztua3ekpqtez4iGS5vep4QoAqYo7TrSNk9dHi6vEC9g5HXrDHLLfGUWYDeZ52YGngXE3V8he",
  "key32": "4QSUfdwFKGzNQBjbQfZLx9h5Fz8HmwcXxxMuCjEjvmL1x91iQp48qyg1omG52PVAZPY3j2zynUxQ99DkQrg3Bkbf",
  "key33": "3B5HVujJGAZvn6BoVNjr6Dhkwb3djUReMM2JjeNL5WLVnjsPR8dScWAgbs8taU9Rz1R4r6vxzuWumt3tP3khHrB1",
  "key34": "2CQC1TJA73V41nVUwThgburPVACtfk2RswtUw4XFQW4RsMY2CQfNK7kfbaSUcNhmkUyRAXE8ic36FL8GTNcTD97S",
  "key35": "3z6ADFw1wGCYp6ozLXwBiefusP4MzCrVPRizCD3sac82fPhXwVxyXhGisxAGAVdSz7u9LfPBrMzGhc6Vxq6VnBYa",
  "key36": "pCRsS4g8Cs5WB84QE6k9Ws4orgPPfohzU5sZdSNaw3cYtczZ4L2dgTH5dMsxHiRXBSJ4cVhVNiwyma5jTYqjzyk"
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
