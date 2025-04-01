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
    "5V7xUkUQ2JeoGX6qUxP7PCD7LQCevLYrjqbUcznfT5XaqqG6g8VMUL2CvhiBGWbLEh9j9zotDc4B18B1B46sNpcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AtiD5kznKJkcUBh4tDHrdo88r67TDeViLL8t2aeERoMn86uSc4NmFRq2ZgMfSmp1aXgdUxXLYxhzJfKSgFvHCsW",
  "key1": "35VK8kvFRydjtR8Sp6Tb9WBMe9qrvfqD19MbJuXtNRxXauWP7rLuwv8p2tGiZag6oa9gpZFt2EMpU2PkMZR1KbqS",
  "key2": "2LYMPCCeFTrjr1t27JugGbQ926sEXRRrLtZzT852wuN7pMhZQcNwyiN23DoXrBZefbJPAaFEq9dhug5n6cdYEXYF",
  "key3": "5t3XcRVhgAvnqapC4ci3L5AX79KJX46BzBUprFHugZpDbqVfyvY8RjAbFZvpR9CZhvqj2utcQdkaEQNJYLsr8iH8",
  "key4": "51T2CGwmWgmDeLW7WiyTk7mtvk1zhtDW8JBwCYYshEmDbwy4KMpYo1i4Dvt1hAEXJ3P5BgWJvFSbxCnbewFUBuQE",
  "key5": "3ufTLKNNKaPDytGB6cfydRtgd3E4zBJcE1XDbawmUwt99r4sXQtCcwQCiy5qQMNc43apLNkEvN54rD6GYkj6tJFV",
  "key6": "3ACq1DodivQavzcM4WoaRixWpywTJes17WKfpEccAeJD5YMbTaQ9MuYJx3t8nB6C51uae5tvYtNM2g5MAaVi9hhk",
  "key7": "2F92xeSxqxCvUcKrLfaVmGMi5fBdvCNNz1mPQAAxfhdUAEYsLABABzwXwaK3H9tyUwtcDLzMiA6QNw76Vhb5RizU",
  "key8": "7DhamFwe66nVzSwveKy5jfxTQgmQfgL3ecSSaozdEQDsskFFt4FVdZeowZDPz7Qtut4GDkTKxdvwJC9X5EumeQ1",
  "key9": "2TwZ1sG26huD9vi4TsLSa6femr9RnQQKKwAbb6ME1vTQg3e1rqvLssQyLkzKeHLEhpAmeeU6XAvgzt6NLqrDXpKQ",
  "key10": "5V9qDgWnAdTp78C9HW3WEVTbMJ3Dw88iJHeAWmZi8APAEwhQk3szZ7UDXkVqTAiu5vDUodk149u5c5uCjF8NQpnQ",
  "key11": "2Tf2Ad7KpcxvE7MMaCfQ8e8BeZh6uy8CMxFXZbbRuSfg9vvNi3rqGdpnwZXumKJwesP1S5eP4itc7tGR33qqs2qm",
  "key12": "5CwdTSidfv2tiJvo4HDaaesMkr62Z6WPDHsnjEDtFNQFByNBJkfxcsK3o1J5inSXj6ibzawBM7vBaqu2tqgMXWJg",
  "key13": "2uNRwhVHqGdM3dusHKV5hs1GRxXnEwgk2FWrqsMBoPmyfVSb5dEgbjsVuFWH2kzfvuJrSFusRSEdWC5mWvjwiNqy",
  "key14": "4upk4p5MN4SxbLAPqe78kZubksoWMTtnYvACQWMDsdBoxgNYpcT7y7gZ1AnYBcEN9dp65EnMPVHmMfjk2dh1ZELQ",
  "key15": "ytUHT1YvBL6LEkH9QdHo3K3pMfXP9CSUmGW63KXnJf5EB2e6Nsfmcn1wsU7T2m2JLrrZK2pBuWbqmBdXrBdYxNy",
  "key16": "41P5w1Lzmks6cAmG3qDtvRBpTYuB9GXQCpXD5PvBzGiPhMFJV9j2kmjBhkwNv7eXBxmqVwxXwfX9GFu17tLL1Gn9",
  "key17": "ELyu1LWWsDcPmFuNmB7udKwfyQ2ZZq4vSudLp3hvxgaqT95nn2Mmr9aHFK2efg2hH3xuEKba1ZQdJKdGCxCoctc",
  "key18": "578L1jp3JEbiyCijrZsDmzDt2nfef2vViPaDwKqvtyBWtQCCGaMrdb36pUUUzuFMhAfqPCYezpU9MvUeDLEZTJ4s",
  "key19": "3Uah4uVsg7sRoyZXpyPpht7LvaBtaWYdBwhctMji5yyGn3SGq9EpPD7LNSJPa96XivMN1b5ENsFX5NwtWcbqcroY",
  "key20": "4DqASESxPKQAqp2oyFuDB9DxphnjWESJa2S4JbbhxNSs1hU1aG4PHmLCEteYtPmeJPeiFoVX7uT8ihWSECbo6FUr",
  "key21": "5XU3NNVvWYjZvWTTY8V1j8HyqHLAhVFE4eFWis8RvoJj4pvLCAmT6aLSf6VVSUekdcwvsWzty5S2Rm4fTo2w7TWB",
  "key22": "5S8E8pAbBnrCtzfjcgrdNLPehKmztiYZ3uBKTuQDKYHeWcFfHbdX44G7W9g77RY4rQhiDiQAujC1P88rmEZjkVRd",
  "key23": "2bd2eiPwkYET1nKhuZG9tzdAN8ciRRkNAkhZ9o4Ecm6ViTMTribjUTTYGxYmWQRhgez8e81PU4YE269KBqFiHqg7",
  "key24": "neVu7KHXDut9cotTuZxxhN94NpPi7GgLVg2ywJNsZiB7pnkG8gJvT859EQRj1MU2NVmoPU7nYStX8yFTNqhxQQu",
  "key25": "gqhg55VgNMXqxckZxPqREBGB3NPxWPeJ3HCucjCmtLU7uagC63qF2AcRiimtdDcjPw5wGydKkacPdvfuxHcHodJ",
  "key26": "24UkzruqwqPmn2pfcSxe8HRgRmKBF3msNzxKsc4rxXMCQpX8ZAbtVs62riEoZECnarCPxXNTqUyfu6S4xdaBJoQ7",
  "key27": "5SJR9hDHJT8jY32E3zAz6TNSwtFQGkd4AHgEgtW1m4NHLFPPeHDWqgLdtpcgni1dkyoVbRLic6zjKFuzH9A4Lh29",
  "key28": "57aMimrucaZan9DKj2NZQzhcCT8D35rn65ThQAaaP7fV7J7BY9tnS9yS6rPFs1Q8kzqm2eJPpE8MHkPWY11qcMbm",
  "key29": "4SYMqLqfHzCmbvy2Z2Dazqaq7kPfoKKExt8wZWzX4jbxCFy4LqLGjw5spQZyk8Jc3cXXbSisitqna1UGLi1W4hmV",
  "key30": "3b9N6NkZ7Tmp22AexwgShofdywzmMYFDmsa5WUMHTt6rbDw3mhxSpoea4Wr8JXVKPccCrCoKXYVhEzndNNR4Hy8H",
  "key31": "5cMiwwz9dd7hvDvJVyyB3UWzhAw6wU3JpjL2b3Q5aQknq7toPLA4Rx6HB7d3NTCSX8kUXcDxqsVHDm8QsGYgsUQP",
  "key32": "1WiH6x6jHPxD6ykT35XkwiBept3GUMfvn7Gc9uEzGDPirJpfujsHa4sz817zVbpfhTJLRt1LvHtkCx7tT8Uk6mf",
  "key33": "5Gr2xFd2cer3xcpHMUnhDmfuZaD8rE57C1xdUW1UZ7CMZUhK3DJiZGxiGbttouUDqfYvECPBrDfi4WjkxUVf2wBR",
  "key34": "4JwUygf3LdG98Zr4KgMVZixQnxadcnnnUSn3CtP3HqELZancWkLFS5VayZsUkEmMBiFWeZP36VXvF1Cfie96ubL1",
  "key35": "5XL2PGbr3BbgvPQT4Qy3tuSiBTGeXrA7xe33LzRoU1ZwRjfPvMsvfPhW9C9BrCk9NNMRMVUHA5dq4jv1seYJ5FGt",
  "key36": "c4unUytMHhc2sgPP1nBkp2eZg5kvmw6dAefwetVBkn5vMg1aBs8PT1qw4cxFXAdQ4iefkkefsa7LEnd34DBuCmb",
  "key37": "4fzy84iyBB7gauhhuHQg3C3YDx9FaafWLrMtbFyyWTwEgpPFZB19LiCkRyAZUo9pvrQzhS3Y3mDWfhdigrWtyBAP",
  "key38": "4pUVksVK1stGKJ3G8bm8CGN4BXzUugXdDkD3gSQbRZPrei11zUzSUUC7z9d8xHYaHFVMFjyrG2MkpGgoqNca9EFb",
  "key39": "2J6mf3E8TkAtwegEx7rvAeQZFMAurkTjdT9KtWaP8pNNDpfgHVipkR2KSBwp1xxov7RU5ydZFEiouq1GhtMuCHtt",
  "key40": "4Kst5PYz29Fd6Gsmvx9prUaLyeE7VkSP34DUhFrEAHrYxjXNZ1CudasnGk5TD5785yu1yMUBvZDbHSMq7HusCDRA",
  "key41": "QxKFKeewcaShoK9Ma99MqdEtHucvcstsMuEEfcfbEscXexpmu11ViexVA4LULRfYfMfpJLzmw7bkDeWHaYqsX4G"
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
