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
    "BpRLhfbH27KS42Aj9wNFKtuadTm4qja2uNipt4wXeVGxVDwgpJZz83sX8AzW4ogAW265sSsE5E2bkFFLRFN99Kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JtoWmeeYyLGm9XFg8CWpKcbE7ifz369mQBLwaRHMU43z4xSNapvWVj7xtxsqa5kQyjf8RfyuvwzYsdTmqnt5XcP",
  "key1": "5jupV8tz9wYGzfTdt3K2oURAfyMDfqn27YEz7oQLd9cLC7kbmT9w9JB3kRt2WeaZwoCZfRBPyUvnKoEBEb1MrmvH",
  "key2": "3ehMfXKnq7Za8McGTjdggco113AftPnEAcgFXZGqkMUsvNfd4ydQGzaCGALafEfT5Xxond4makTCFmNZiGSL6MmD",
  "key3": "331zhp2yB3ei5tVof63vzDVXxd7zLq8c1AvboBMUDM2cLjQ8EeSZhAJMdZMnczPtAR7doqHtoXk9sTjxSm67J3Pp",
  "key4": "2UrzrTRbySkggSCa3Wcvhp3Ex1tANXcdZp9XsqMqcmwC2pa6gCLAWPGet7buvagaRK9tphP4HE6k69nqDGPcTS1P",
  "key5": "2n7dLAhJVpH2Fpy6x2tnDMYUdcmhPg3bdNFcQDxLdk9jRbmoH2P3n7iTReRYQ6YaoGhGv5WLt889dbHmiNgS83Jj",
  "key6": "5iRxLpd1xsmgiUykCQqwQg8QX6A9Y3YdtyerwGnbAJGPHEfqqsinrpthpEznDLP9dQjoN3e9pJKKBCsCnwHoNUhx",
  "key7": "3p289tpTmR2KpyN9KtdYpUtvzGk1R3BqHiLRkHid8znyhAPsT4C6tVphYqV4M3ARmtYqf9piAHeuDCqETbvbDZRv",
  "key8": "2vGgafrcG6Bw57g7dKK7fFsnEV227Rekp8cy8KQdm6AYHNTDWLcMFKEARrvmntyKAFtm1qQQKRdA4TgL1xxVsZWn",
  "key9": "2mLGkULAm7MXu7Viaj4xdAeHANSFD7ERjTNS5qvCKrLuYLM3FvdXtmETBQQ8KiDvuoeZPxDCFcM8vRqPhKzjSwWr",
  "key10": "4BrmpPR8wgLg98SxAvmt5QCdhfmUCLzE8DgcUY1pmScspHTJiaJEqUR9E89AfoqppAvmQPAdfSJkmdA9piUE3cZN",
  "key11": "4Bt42UWxtqEsScr8ixou8GXDeb5Ks7QLyg2kPVLcnw1fotMTXjD1crjjbwkNde4yzNYg3t12qN8m1NDnEopZ88ER",
  "key12": "3aSTE8DYmwnx4jaRuPZxnPSzk2AW1FamfHAnBq3URPsRArTrEzuAkNRb8VfqwSfU14H8ESoevNtwK1k9QNojcsHz",
  "key13": "4zaFvEXPtPumQk6S8SeyKbmMTrPDf4Dk64JPsyEarRXrZkXtevsp58k1v9eP8BC8vLPiVDBFn3A2URxRKmkPKQ2D",
  "key14": "2PatRUHa1AufvFKMTUPu4FYQN7ah1vMyNbJwj71eW3LJGRshmtjwbzFcWV3SnLBwQsoeqXyy8jkSgRZPZvwGm5m2",
  "key15": "2TSLLjQjRoRkYMNijKPu1Ky3yx3fJMaxRDEe3TaehTXas1ixZe2BxZLRVddZFK2ipXxKm6nUGVMvy6EbaDtLFRJv",
  "key16": "3q6XRiQv8BHPKYc7ma7kfcxMDUByz8txfL8E9J3Wd39idwZASfkiCxysnQrtbhbB1J5fCzV5uZbHDvN49AQM175J",
  "key17": "ZVNFqjRmMLAVHHRzxq18rJiSV6LNMXSCipET3i11z6s7uFKpy6bqEFbjTefnB6xVtRGAxKrf1bXszqzBN3wxnuW",
  "key18": "59hnMyXx9FnwVaFbKR4dmZSAhcTg97Y7YRbMGT1acVBCgbYMaQ1PzSu62UquCwr7dPdpeG7MWrwnCrwWWLABaENE",
  "key19": "sv4PjFJgXZuvnh5LZF9k8A1EMFqzvXYzEik4YdUhNQB4UzMkhX2YmCh1wnxQZ4ajj1LqpY7LzhPRzH9NpPppHi3",
  "key20": "3pihhagbkgjxTVhyQc2CJL9fVSkyNSPCJ3GxRM6VyckH8RL1YUR3eVQgEw7ZTbVnuwWqvM5erBjKwj8yhEhN87Mf",
  "key21": "5m2LSMVprnCJfzaeDcNN4vHoDUhnDuvNTNffp3DxvKpMaKDjvbfmqtYQ7qsDKMjdAwWW9vu3TviKTgGJVnDMLYby",
  "key22": "67ENtMQCq5M7fETNyELkDnz1qbL6VB63L1fF2gShFQdUVjQY4GA3AMrv95bLvPfMWWQhUKn2mfE8gkAjXb6GmKoJ",
  "key23": "kF9RnC6SKzTkjELPZfrVnkJyiuuDPfipyVJ8JGJDXzJYs2wQERerpD2gENHUed9MUfAZvanxczWpXE6cmVZ7B8H",
  "key24": "2JQdDs5FyhjAmP3CfsTmNeD7mNouSu6sXSg4UUvNnkZ1o3QVody1EnUmTxV1kUe41sf4yyj59DxJ55xNdgAuA9Re",
  "key25": "43KCfkmLAeAKTsyU8T8gLFqDjHYqJFFvsyd5YjwBnYMKtEw8nQ9sHQtXEXVLZ8CsQgbfSuggDNR7cAaCxdm1bjTq",
  "key26": "2vGCfNnQ9cAPDMLuYofZS1Cig8brBVr25A8PGsyAQx2JmvZmxMNjLgLeAdU6jbgsy9zuWtJyiaayCfk8GMiBN7y",
  "key27": "V6K6Pc51u3HTH1YCSAk1S2mq9bhE1sTpv8YpZ3WvuF6HJiSxQZCrmjd5k4hpR1sNTcYFbpnZDEPRAmtVKERE7oN",
  "key28": "4eAtoZGZLPGpq9JVEXQFAtbtfqznNdeCgqxKTrvvdz8aWosHYh5hsPovkXZSFHJ56n77wDcUbxtHBrt2ko4v94GL",
  "key29": "4wF3krGUKMf749v91u2GNmGDTdGrWn4iS6rmYbRmGedGnzCHZTYjhRasTzM2tSS1GUG8trExKyv11s3jHKRRa46",
  "key30": "2sRrDFJHziPLgoVUM6jDYaRUoGCxv8Z52gfAbjA2vRAyWmpFd6sB8Ezknzn6znqCe5cwZycemk1CUQC3t51QfQgd",
  "key31": "2Wp8AEeXLGWA7E5KiYYV762ohZxrXUN4KhmnVxw9Dx85cAYuE7wBaW5RK7w8CifLukbrkZ6c8tbATfcTbxCb9B4g",
  "key32": "3LAwvgQZ2QRahYgGQUy3SUzh1Lvd7emiV13niHqo18oL5V72NbBn7NzH7zYyqfHGfUSr6nVphpxkANjQJjSXJXoq",
  "key33": "3mUiRAKt6tsCtRW3rHTNYNNdJxBbb3y3GgtcSVxW1jyCHhXHHw81ACWZGv6w3KXz2ZsWeQTdqZP3JdncoAtwVYgG"
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
