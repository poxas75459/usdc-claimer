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
    "3VVQDNp4apKrG91k2fDVtzbP1PCkZf8UfAqzrPMZv1qs46brtPpdFMhrRaXzvxCw5EvBhjXhPhBcVAWxAyU4NFW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dvHNwB7svkFHzqAThz89jktFtxX2PMKYHTEvd7kRJW1xNK74tdzE88iadTKzEo8iLX5gAgfc3f53YQ9m5BrM28f",
  "key1": "4fL2ecHDRc634jPGDcUfQ52EDavc51QXptioUHYKr3VdAJULBFkKFtEPCrd6um27kRQgEne6JEqaaVipfQ9CRfQ6",
  "key2": "5tmcc9Bsi6Lfkds7MhWWpVdr2YftYec5HQekfGCCacsbuh2w1ReH9DjNgo1hnPFHzScp3YD9RP2JJLe3DoPnU2Dz",
  "key3": "sVRTLSRWpTik8UBT4UJanqPMNxSPexCND8fTENfmTPL6KGEhgvN73dLVPE5bRYCZZhSWp2RzBur2HEMXYYm1H7E",
  "key4": "2NZzJTMdEZHZRQTebQBmsmMcqXL67wN4eNDmtk9PrG2b2W8xbVaBYx2XCZxHwWF6R6Ztx7yTU8vThkmJUJ6vjyJ1",
  "key5": "4423UiXseo7oqqdRAw6FRJaQq2XirP4GBczifk9ehq15w1QDW6KqsgmbmDMpYRgB7sHrBsHeJHwhtXJy9qTtsH64",
  "key6": "3fQ3D35kFxqXjTifbViR5PSrTQvex2jDo4bTfxgkpRuweApbYvMXSZZKAmVETeYJqCxpHcJn2NrstMo56Qd27Y86",
  "key7": "5p9JB86z7DnVkDAxx9bYw1xoHZeZm7L5N9PZZZdPbMbCv2K6f152AC6RwMqVWUheeRPvARBEJQYHHbsx2mvzSRiA",
  "key8": "GngMF6MqAxBBwkvrL465iYY38uX92CEYLJ3ZvjKFCH9xfa6ZTJ3X986uzhra5Jdmbwux1zsHyGrFSiRf2SiG58C",
  "key9": "2dhuirDKfmuvEADZzRsPRpExJ6YNjJvDQzAR3B8r96tRwGGbaYwoHp7GMH63Qi9ED6qXXYwMReWAXNx1Z7jKUhRG",
  "key10": "3vKTyq49NBVh6LjseLhYjdkLAp8UNwQLmx42XNJk3grTEnY1NPfPdgcFBH1ia2DXQbtQMAstLQ1aiY2gLus49kAo",
  "key11": "4yvwowR83fsj2SFhhwNh3y6HtXrgrHx7FgMbiDk8t2Z412PqKwwXbgtka9Pf4eh73mNbw4qHysh5FqE4fGpnbgF9",
  "key12": "bPCcy6MYdvfrWuJphjQ9Y5ZUuPkHEUt7MqSaJtkJaB3x91TyrYAoYrgr2oM9FQbQAhPNUR886LfjbUGXXTEGq79",
  "key13": "4YMWSdc7VSjAHqspKXzAb7NfzFYqoigJrxXjgwpyR7cmPvotbrBA3GoULad3TZnoTQSfTDaQ3C9ccE4yKBij99Ry",
  "key14": "2W2rpSzAftupirjfXkjVnCMAB8ZcSnZQBi2yvX3XyNgcjvtKBtx6QPYb3AJKRsnBmh3yjR58vo76tnWdp1XCArpA",
  "key15": "21W4PiN11rR8sD6ukYfhaanxCUxFFWEXHigVzTzXVGrhWWnabqfFxZEp8mBbwDjRFBU6GgWvQ3xSuGMMWW7sp4e1",
  "key16": "5PdN16ThZ3D1gDyuErjuLzqANyC9fqKBhuf5CGVuSFYvmsaGiqPERerPtPvuFEbQWKUf4SeNCuvyuAvCEznxRvfD",
  "key17": "2L5PDR2cCV32rrsQuWQ8vC7bBXNZHFHHW9j1PA9NByjUH1n2y3ZEf78Vy18V9C2DaT97xn5NtXRCtU78FDoNmyoM",
  "key18": "31TLzz9yPzGyKHfSk4uo4PoPr49LuGdHo6aokhZR18H91aZwaFT4duXfiFR8Y4tLgGmeRma1DEcWDp7gSThKaP8L",
  "key19": "5Zy5vqiPAg3xm86ETPc1A8rCjpS4St4GZvLpW5hXxrxSkcaZr1QftsWaarfmQ8UytnExs3dv4qnFBNdqpUycZg7Y",
  "key20": "4bMaCeW4vJRZHUK1bGy5ZnK79dCsAkYAzHtJaCnPNyqCWr7eiiY7X9mNmu6J11U4cun6EyP4Y9avUABaQSb8ke59",
  "key21": "5SPrrPYMhAZUh4WMixfJYJ9tkTo3Yv7VfTM5WQYdw5WEVZPwYPiHCqTNJcjkjYQVnSSDu27rM9byN8GjCGdYptfm",
  "key22": "42zN5zXp5xJFTPk18CquW2Nbrc2YLpLhWJsawhaWRWuYEVCQqcw2bGLczTDSDbQB7z1ca8E2u1ooHhMYJ5MZKwQE",
  "key23": "NHGFVNA3pKLkkWaGk6s6mSWzfKu1EoxssjY3swdW29tZTku1DWVphMRfUDkr4T9z9JNF3SKQMgXRmieG7QYR9eD",
  "key24": "5DbWYuHaiMFHo5CYinhjLAtrCwW2EoZ8PdqTvBDWxXWBLKCC31RqDF3q3Ch7pqceZ6MkHKvpw4Xxahys6eZxuGqV",
  "key25": "58ptRouQ7MaCPFSzLSXTXNNQ8JHPFRV1wdNafFatf9vjXHsYLFH3ydjcfqwL9ZSegTVLxWRGCnsgfQbgv7aeT6qF",
  "key26": "51FgBzP7yk28PBoRMVQrm23SbPEBxxEGFU8kjGvjoNE7yRX2pfsgnNwb12qAyVTYtfsVteB6hZpSz4R2STgMvM7a",
  "key27": "UodnDdPcFVeTjjbCJu4R2KnfC3AwZMRwRnjqG1VdK1PH4jqouTg4aDbiBhkpJZJ1t2Eb7cxBCP85soAw4Bz7Z5i",
  "key28": "3vioq3ibx1dZNAGicvkfVfvxt6q3aGX9eQiwM4n68fegrsrbCrWBcwC9GhDc4NWG4HrVjoga6wyMjmgizVgdMsb1",
  "key29": "3YNDDsBhTPPr4AuGh7CoRJCrAZyT1axU6WYF66UAwPZgDrPRaTnsPZYxjxLBawc5vXoBGKYCNsVqtabJ4vXDURq5",
  "key30": "3CbPv8i5kiDu9tdJJXbk5o6v7tF6Es4VwEZHM4vqr3TexNiqnibL7rAwB7kCAaAxf2vcFAY2CcS1VSpNoKKUGiFZ",
  "key31": "Eb8kbLo9kfoGK9jL6fbCNYWA5yGXFosWQ4AhEgeCoMe4zb8NiV6MvLvozQHbWu5NQZ6tBAHZLtvRP9dtmKoyrFT",
  "key32": "2W5oYziVkdS8Vf5MuJzQFmpLZE9fMSFyeYKDYkJqwVESwEPdrecjf17VBHMjdBLoA2U1CfXX43g667sAfxSFCjcD",
  "key33": "3HBxYbo6P8zoYcjqmfGVSYQuyqeqkzXE2aMxXf8wDKX2R9ahXGRGtzmAvDxzMFquULuZDitw9xeCGdP74VRZxRg4",
  "key34": "55q8t1U4BG84S1DfDGW4VYEkMq42URrkek87s1KUZxKd8ArsiJMeBq46vD3nCLpnmxGJbJ7TcSUaS88hPpQXiCpX",
  "key35": "LYT2oBv2BuL9fTRJJCUHNWQX5WVxggMuZuAxNfkHCSNg6UdbQeQAXvp3WqMimrzTmHd3evXjwB6ZyiZnUoxzRps",
  "key36": "4H2KLZAjVb2MnkUX8Jir9urmm4sXihfKZ7o1626QktUJGpTeepKEYkmLqgkwQfQWBxzkPbP8qrmcJTuTBZb34MdS",
  "key37": "31kpNBfj8vVGuptk4wLSm8acG54fjJULQ4vg6fT9dbFHWFW4JkKQhEBPjifdPtKJeZS7RPkTVAmiTEJDGqUyPEfV",
  "key38": "4TZExkQHqGB4YS9fSBx2buvAMJ49GJa4GeWNXY1LRdgsAxYopt1ayWc9ZQBfWaJfWLEafENZGC5FUqBsqFsApzk7",
  "key39": "2QNeCFsWqnWjb94j8NRHuq2Pawi2jZJKbLe3ZRw39PJDXZChKeS4BCLMPir4QE94VthNRDf7AWNYLnTXhnuh7rWU",
  "key40": "b2euT1Bt6CSaC7u3tbrvaXs81AViz2eoVLaV1wWrfFLBvkF4iTcuiWRcciW8EKZ42S55CgQk7gQLPvfvoynuwCK",
  "key41": "2WPBR8uWojE7EwWEpCWnE5wweCCEPcYexPb9MiajG5KssLwpMWGXvaLRrSGr9PBSTD2t3bf11ZCxCw8htceYyYcN",
  "key42": "46HoSgpJ7DX4gZPbRUFUBtah4hzgHQxXYtxmR7uEkDgjpVt2uggeugYvct8THaMkyp7u2Q5AZjQcNLuaQYxAkkXo"
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
