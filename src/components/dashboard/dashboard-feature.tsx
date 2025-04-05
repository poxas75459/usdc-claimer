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
    "3UFqQVfuBpbgZQvppGrvBkQay61W9ESzPx2AgAz7VBundxzK22U96DjnTPg3YrWob6xk4Wo1asbJANbVNgKeAntN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jjRnQXUmuk3j4vdQs7tkErrbf8nuArXnkyFmAr9sJGjT78uPKKBT6kwGL8ceTfraVbRBo8YjANXuLD7VUSfRN38",
  "key1": "QiPYqeJ77YrGRYv9jZV3NDwbk17fmZfui7xEhzTpz16MD21tfoSQ7AJwDKGtL3rWeVNX2w7Mb5k5AkW6hk1v9TC",
  "key2": "4VJ8v1HzUNW3qMhbmJMdn6BZcadGG4SJnzdhHHigGihcDer3Gn2KhXLd76pLW6MEbcAQKbxMcpWixogndQvhyKGL",
  "key3": "5JEKNi9ve8utHHb6mGWVb8TCwHMxEzwJBt2sDMcbE2cVzFBWJ7jpK2Lt9vuEY8rGDTd8TkrNdsARex6H9wsEhmwL",
  "key4": "3tXd2oiEvxkyqnLqMrd67nKBsJKJ71szzXC7GztdYgPVqZ9xvPD6iFsT4UEJZEz6hUs2CFodC4c9FkuMzgVaE8g9",
  "key5": "2sexVGckm9esp8Zk1aY3K6shgTyUA72YzojTToLwGpLt1Rx8fZfHZyR11hrgMzcRdfSQ7xYwHddZb2vJJ6aukZ5H",
  "key6": "61UaDZuWyEQyGzQR5SKq2TDdYRHSsm8DaAw9gKa3MivTUzAQH8ZWebubhXQY2GPzjg4Wk3pSWq6eg77gbzZuSPes",
  "key7": "2w5GBCNLdUDDKmCXazKy4BmUqMxCrrkDFg2si3FmpBswesV3HwNt5N1nFhYoxqbNEKT5Jw14HacUHp2e8inPHdik",
  "key8": "3c3MLZhFT2uu8zqXGF7xB1h33ToPvWDnr4LoGmoPZzyN8aRPLA9B8CQAfBMZANgZdZJW5V8ztPoZyFJp3zDgf9bf",
  "key9": "4bvKehWHTvcqAfaqGCEhfzRckMyXMAuHnmhw3du5rCzY9AzHJmHh7mDbnqupeZ738ik4DFcPyk6mCTByFn5M2Zfm",
  "key10": "gZmQz1gUqP1VTYFDdopMNkwsKrGCR5M29xbjCXK1HabSvQVf2uwXLrRVKawMcy9gHbzd4WskEiHk9JDKL2PqeZ9",
  "key11": "L3JTtyJ7oZw8TPBMcQJGcT2aoWHwu9rqQURxmWj4YGdWqCT9NVTv6NRR6a5ZZ12YGg7C6FYPtmFqwAb1h4P2PuH",
  "key12": "YpPwj1vLqJtyEdem6gR1hYDYDhXbRAaLqHsXZUG2jBcfWCXCeKhm5duxQ3n1gWf91uBFuxkbh3B1bKqW6BfTbT9",
  "key13": "LXDx48cZKFRKhf9HvxMQDniLjS5bqeJmV1Tn9f8U43gd2fXJwPW4dbvVJHkSBnkixUn2rigVBxKPgWMitxfq53k",
  "key14": "47VSiBheJxZrTfun1fEGMLx4c84WijPnckwjcnRVKZxjLSWiUJradY9m26Qo9kZBcXuPYLGF46HND8weP36PGX5p",
  "key15": "3L6KE9nhm6V43YUDiudu9P8NvqorzGKKf2NA9b2iERHXtVWPvVnPr2S5iaRRuxxdtw47okSjwPmS3TyxuNqnAZYK",
  "key16": "2eHAmf7aY5JaXXRade5ArALMgzh9FieBUqEijQjyeS9xe6Sd7Mw8Xx1ksPmU9SysCRQz3Y83MYvmpdHdJujGCQC2",
  "key17": "5VnSJS3j5xY3SMnwyFkCnNLJVmrYL9cjkWU1bb8wXPi1KXSYSXq3FSraCiR5B7F9MThdcu34jWonU29P2ddnvYNN",
  "key18": "3mT2UoiVBo25ti3p1PTotXMRK2ZfnYDhAaBYV2YkYKZNRHErc2LzJ14FpdhjjyBTvgK2j9rdTb3Pa3TuSrXjiGG1",
  "key19": "3yrEj8Qrk8yrdHMuSp2oko5J3AZD9ftuXXUVZVKJjNMrZh4qn1NYLdawjpEQ1sgbkzegEr4evjhAmNrQ66rQWELv",
  "key20": "3UUKrD79DZtVDNDMEnUQX68WrBxTnDbQHELk7UWFxLeEEqY3kZncGnFHhn7AM63VwTUt9RQWws3yV58YSRoYBM4H",
  "key21": "2PrZUZhqifqUPevoqtCzB4Z5fWqAca4QkhER9pTYpfPHUJeakdvdeQcDHjWJST8Fsp6uDiwSHiGGiWYGsWb9qQhW",
  "key22": "5Fx5bVQiyFD7Dk825tid2uWnSg3rXZscaqQS2CbycGr9Bi7B3uVBp1Mztf41BWgme3rj6NafaYDwo2bv8hYZbo1Q",
  "key23": "27kY9AQFywtA9nyfXwPTVNvWtUaU2ToEQYRPpPmF2agAP3e9SCPyiWMN7cAs7PZF1RkhKmKt6NgG7ttPaNQJr6Xs",
  "key24": "KPCMCXra7CLQ6hrffuddN1zuvnrHiYrqAvhpT2qJs2VLxYjdpNpYNwT3goHsTBg2wiJKhGdm6pNcQf91V6QUqTK",
  "key25": "5rjNewzbZeK1wWUF2RzjYPcjQAy7qMsSNzRDFYQAfwaX58hjwWrCVrmbio9tH5LzjxMoEg91Duyq1ga6ckoZuXcs",
  "key26": "aS9uZsW5HNkrSoZ3jvcMQVbyRt81S6B4AaGHVsHeYSmYnLmmhLRHPdumNa7hJrKNz5uDYTUUxD8pZxjbjSG1W7e",
  "key27": "2KKyJsoBddeAMwavwkgfHQC28WvAHhtGCU7fbkuyj3HuXqPnfgmDRGEx8RNMWnSqpCZeQrnqsF2pfR3hqqq4FCWm",
  "key28": "3Vezz4Zpx99y4gTZwtyFrfxJG49QuozuxwVybBSY66RTUFvnxsqvnc9zzKXKFLMoLC6G2mpWgjiYbgGV4iby1ZGG",
  "key29": "3LZLbo6rm7Uu6Tt2CkjhBQEBedURoqUgbC8wREhZEGBVtd6T18o4SHQdpZArCwMd3nAt3ev2pxRYbTAsDVEhsCoB",
  "key30": "4s1ckfXEoaQfcNfYChf92Fjbyve5TawqqmVfjoPkfXpT6WG1XHXyhKbmjPgyDSGfFrSVY5ZGxaeLiKAfDfDEE6pM",
  "key31": "4tae7w41sTUtBNqmAzjJ4odHCoYw7jecrAPag24mF8DwxtwZ1VE5HYNqAxXd13hDKQu25uU6RecSTojp5cLWTvfx",
  "key32": "3xXVj3wQCNjepTiUxKMJeWAmxrZt8k88UUuf2qHQFjFEttJQ59RHdJFRM6S4A77h2q4F8aCtgpZfgdT9794YLGUG",
  "key33": "uwqdefuYB1Uo9Sk3Y8yrvPUngFkcu22Dvyvb4UVsae1LE9higVWJNrwUkyM5nu2nZv9V3f3ETtBc1y5xDgTT5qu",
  "key34": "4twmvCtFArUniJn6cF5k6cKx4xLzDVv1QdcrF1M2XYBrNmoPn2ReRE4j1ybV4SKVkVVuGu2hxHeMSkMx5zguicmZ",
  "key35": "3ms5bdpA5oEXFELGuSAgyQH3WpdLRZ2o7KDw7ckeW57PctQvuFhTAgJ9JmozjWCc9gX1Gcjzrxa3izH5MzwEbDzw",
  "key36": "PMKd5kTrRz5SyC4v22xLTUVgt3s2gZCjuCKYbACxmjJQLMcNrFYXdpxAcU4bZsHAko4wXnJZtbXFp7WXD7by4QS"
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
