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
    "5mYv1AXxoTawdu5bqdp3VKcRCF3BDhnK4Dz5HAUaztwg9A6DHmJ86GinwuJJCVpB8aDLPVPYguhyV9P4PwJcL41K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "th7656xxJ3x4Nm9D5NNFeAGZndzgAjycuWnWMBjRoC7E6PLVtw4SSAgcoXtC1jbZgatQM75mu17UhddoWu4TDZA",
  "key1": "2fqP4QUSGJ1xfikByXBcLS2XNNakrXytnCFoYXVjU5rfobJamR62wGoTEJCyaroMGtsyM6RA3VuNxZPmEZFSFo7i",
  "key2": "5hJ1xxQJDaprtc6C8FSYR5BmCSfs1EUG8ZceMx9SKiJvWkjHe3gjS3BJR17D6aYigb2CkfjxVc4WfbjzU2cqhuiH",
  "key3": "2ru9LU7euNgm1TVm5WGSKJoQsqJKeQCgRopmYA24SyMB9cAhFxUR3EQC5dsNbdFtyMJ8pJuLKzEmEo43FP683L2p",
  "key4": "bj12NQEAXQfagZUxeLrXGoTxyWEJUQneFpJdRGkgoZM3QnGCaXNVnSmPkpxYxxhv7PdDufcfM4ZN2j5WrNDhXzS",
  "key5": "2pNpUDnfdwZCN7Vz1jPmAFj7GfN2SCfr2tugh5CZNy6gt3VtyiGF6VWb5wDeQo6tYjRrkLrQ3YRMu6miVytjtZBm",
  "key6": "mV6H8AQWJBojzy1HQdEy1bWYQaXQ4awPezVSVfvbnxsR7qHNki2DNns9YuhEbynXw8YwcrXwXP4mXLZxHzVGjqK",
  "key7": "2CreoAB57ixZq14pvDigKD7Fxwpw5NH8EAQ7hf6mmSRCZoMMpVu8dra18KKmL6UKCfcdyFmE76hRedBwQC3WqpEp",
  "key8": "Fx8A1BemFHkaQLzUUvYYXxzka1nEqRgmqTgPnm3XcKbRkgUkCWQQFL7KmR6devjioBawcpY46dWxpj7WuZW6HG5",
  "key9": "5A39rcERYKkaQ9y7Z6zTW7ai4YsEy3uULwyQSiHPqUo8jg66vUehqJs9pedsfKgfaAS34pkwheLwXNjECnUNZ5C6",
  "key10": "2MX82gMYGLszxHUHTMAMSRnSM6C7w1ruw4muX1iqjQBGS7WNw4HdtiAKySLCak1AfyhWL6pueBnP6Nwj4WL1L13q",
  "key11": "2AfpzKcNnY5waMgWRx2CaEDkM5a1R2KTpasGQm5X2vRy64Vtjy84j3oXnvNtaUHgqcVMzQWi62auTWanHCkATTRo",
  "key12": "5ydhjKVFLbgUfSVWZnwduS1o1egPmk9LxSNcPHBZyNPbfCX6k6zwnEeuNWCBrEtW8zCKK88kQ1TgCMtkzoZSmRgA",
  "key13": "hksANyMV8LM8fdPkLXLU96HgvNn9DsGS8dqY6o73T4nzwm2gnxyLJeiasbmYjF1253UfqwJmGSGxiFrYwtsJecp",
  "key14": "8djS9XPz4Hsi3NJy2HKk8mPTthejcEocg5dXauiEWaDgGadRP26fm6izy648JLqpbsddzNMxRBwVyGBYhYAxZcE",
  "key15": "3FLxrj2vi5x99KXp2mb839CS3NRUpygVvqpCKTpkYzBm3Xh8WYZqWsS3mkhiiDgQQw26phTuNKaX4AUCPrFdVN1N",
  "key16": "5MeRtberqyZ9MegFPmhaT5sqDPG2Akjsh573HmFMeCmqTxK6E71dfWyuBn3c1No9Xwf7m8aBa9L8wNoBQx7YPS96",
  "key17": "2K3sAxCyBp1mLagSXafDZPqhrrno2XWQCfvSaVW67E79i4gJa5nT7W4sEDpX5gvfSHVAfe7H8bBQZW5oqkcg9VVF",
  "key18": "4jZ9QCMy9BiP49brKDhw2vyp8AxJpEDpf1NK8Zj6uWQDFWzWKravsQUiEZ9fHHYKqkW67L2hH8Td6iMUGTJ2wXSH",
  "key19": "56rhqvoSGHDqySjUo1gduwdeZdhAbaQrj558Tr4qFTJ9km7fqSut9HK2GCptmvp7b5315EqxeJ2nhFBWtHhYBMgQ",
  "key20": "5vFnNTsXdD59KkwtqmhyrnetgYy3thMWxGA86vWiNpp3Qcy8aqd8ER4VjJGuuScE7t2BB9HvLKqaYuGSxHh4tVuK",
  "key21": "4BnDaZuM2D39ziNbQmJmuePFXzsjAnBrWj9qp2k8QqMV1m4j8oR1kYwt9LcFKvQ2Jgga2vP8aVwmwQMhr36AAhse",
  "key22": "44BtWNxRDGs9USe7V3x3hLrjTM4paeFFnMJoFPqkt7Lo2iyiDoTaLXfLB68S4KKzPGEPw7HvVuTnBVsMxNJmscRB",
  "key23": "5bPnyPnhds4kmvwGXXJEiBMj6bwM6Pp9pJ5kun3j643C5K2jU5fwXU1UpbwN1CunbPSQQthYwuUN9FotSeBQaRGF",
  "key24": "2HdFjYRQVSNcHwTKzZ9HFcbBzHUq9kZvknTm3C2h1yM3ssb4fNz8EVeHQuu227shxwDwUh4wStgNL6bJdPPMKcbn",
  "key25": "5v74cXo8RbLeafUMjRY24wjbKDRNnDMTxHtHHtqh94panArakRvdwssMBCkZGyxej3Ko49h2QgDgXnMH3uG97uai",
  "key26": "4pWgeHdvwwi1vayjqFdYDCcXKbEiTaUMXWJvD5q7zYVPWbXDq44Zph1s189edvLxvwAAR9ZUfDCUr2xYDD37DQMf",
  "key27": "4Uo9G6nXj9saGNSD4CRYHAzLyXd1aJ658AzBwRWHfeA9ZYp1TJWg8Km4vkEjo2rYBtuLVMKyuY3d1ZybK7sRjxST",
  "key28": "56r2pspYu7CE6ogdUKPXuRamiFKbGARyRijTbSz9r9Fbv3gdsW7DTqjb6krWvmZKTswbnnxnmWtutxytRPVSxQ27",
  "key29": "4tsGP8ZEsnwcuD7EVfGSLkCs4JtrRUhikPUQQDwe1Rb6x7VPv3LbW363YHF6HSiAXaHYYTSftGNRfjK6Tsz6aJ5U",
  "key30": "2d4wRdX5GtvP5sd3bGA4t9ud8YhnCHhSFVSukupr9Rdmz6bRSLQJhYcNXytKDhHN7k8scn9WWqqqE2GDTSHduopZ",
  "key31": "4smNn8ZCZmGmQHDGPqnKdsJ5zMa1eSdRdXcodmjDXcyXcJdUwfwQhi49Cz5EV3y2a7YvjzCmMbb8KBkpGcxBPsSV",
  "key32": "46s5XBVgjw8NeRKmexaRLgXQJ3r5qJLg6CVML1u3rQLdZXx7BRodroP26VMaHkF1eY9ux9atKRnGJamDbbJQMDE6",
  "key33": "p7SBHcnaQz2LJsZecwrcEYEv9d8p2fVJ9FYqmmbXiubnc2EJkdjYRqL4ncQo4PmfLJ8xk81D9y5C9uaNDsbmnSj",
  "key34": "a6418Cs9DynsUBZ2L3oWKwyYPJX65kVbCRHSj56WKgDvcw1xoRtBVAuMfYQrkkgEbTVgqMBChUpuXpeiZeNY6YJ",
  "key35": "31owDTVfxYP21PKQPL62FmDBniLm1UHz7VgDDzibVV9GjJEQxf5ep1FtKC3oJ4xdnNjtDSgRLjGoxQpQmB1yPrgj",
  "key36": "2i5vNZZpZoJiXh1fTsKqpSXuf9S1bWyFNvk1sCNS6sbZe6hdJyPbkCt4Tqvhub9zxRg9WRSBsJSAfGbSZPzpFmGB",
  "key37": "5PzPhKND2TiYFPdprNT5LYB3vcJ8h9N96y7RffjGgtZG3NqmbtHkWenn4n92ztoTwV8HNjC4AUKAhnW6dcNQLJf9",
  "key38": "29d7kbE2yogS5KmqgebbJVBWcJnYn7HTnhUrP3fQ83zXNwbz1pYZhKGVMBQgR5ud2n9DPSTbmSTMxirth8tprB4V",
  "key39": "DuPZPakkQx3Yrsg5cfnrtLbtRC4RMktFMkh7oyDYGhpnAm1Nm96K8QHbDuqfxwQuaA16RBFfFG5Bn2hrxHmL1vh",
  "key40": "2bYRDYJpE3PiYesHZsCFoqbgg9MsSBcMv9AQ6gfnKPoSkWHkDXtQmb7W9KMw9cRwucV4NpDJNu7PdhGFaxge4NNP",
  "key41": "2fB3Az3DVrpktFd8VcATQS7YVi1oFGrpR6p17cn42XhwK7sWmboM6UyndRWVQfffgpuNG2BGMVyzGroM63kJ9etb",
  "key42": "3KJP6pUDv3GGD5xNCfsoioM9Dk1t6CKkaHQ7JJ6NAqWmWRE3EMJ9yttppcmj9hnz8ziMPZA32dvPwucFzGsZVQbb",
  "key43": "jUSc4Pw54GSYfHWqbFduodaT8bbAQ2KnZ8KYGTBPFeLWGt78itgJYr9EkW1FFjwiphCxuXhKYya1pSNf2G1Uf8Q",
  "key44": "5YDWXto3WGfDpqAivjB1yQ6rDz1Lp84e1BzawtX6nPMsF9oYNryoPapP3D7kVX2sgUmmCAGiFEbP6TmLUJmqqUA2",
  "key45": "2DoEa84SKzHxCLaFGW4utfnDhb9Ye8rmbrAnEjYUWQtyVPFQcs2vekqamJUvVqqnvDYRfQWpkjyU41Mbzm9kjMHw",
  "key46": "3fNvckxvKXwk4DsxCbrkw8ArdURhXz6XQo68gL8QiATXzARx45ZwXuPyRZvCDsBC2xk774g4DZUnpJ8U8cWSLkD4",
  "key47": "2WQLexe7EmT6TdR8cgjF2Gf3PkFMjWDcxkgZZNLQp3bwHsGioL7rPFGJfq4cmbbV54tAzDDJicPYwFcUSxSNGEKE",
  "key48": "5bjkz6m6G2fpKSGRRPKy1rRVNKc7S2XcYAL9hTRxrUCU1JiAbj7fNxQ3anL2A2Y8y6uqd4WE9UHeA65d2NwDwio2"
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
