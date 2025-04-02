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
    "PQApAevmdpn2G3cenH27tcewWPvY7rRV7uzkYesi6QQeBC7B4pAy7CmU1nVLuL3NBUzkAj9GHtAsGnWU4GQgFHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BzQ8AbWftT36qnWvDZTd3V9PGzcJXviVnqjjVv5gw2kF3oatCSa2PYMPfe6gERrcBjjfbfLjZfUvpGfdygn5Jeg",
  "key1": "2gThYajBR6pvBFmsYWmdSRRUJDFJtUY2nxeiEuKudLybrvkZ1VvtY6oE2yUYkacWThDEuWnGPVuroVDA9yUDqebd",
  "key2": "5EghweG36h71jHShDp3FNsY693J2REhaN8GqBd2ZqqVmYrttipQWdAUqzdm2fc134xsQKnnvwMmfVP7JU9gfE3op",
  "key3": "4Td6hZz2Qj34A633ocU8dkESyRVRnqZdjMHrt3x2w4TjA9ihqL8vQoNsTpAcqNWJPtCQ34zfhpERjzWYGM5KWssM",
  "key4": "P4Bpp78qsxta7NpLhRKudSPQ2QWzQBmJ1B4KA9vYGwCDDa9iV2USdM4pu2yNvGwcgu2iy9oMekiVRpLeYoWN9P7",
  "key5": "2ouh5g1K8Yf753n5akXdFS29pimbMSHgCfNVYbp1sjsj92x8i3tfu9P3FeVityAAH4ukVoKGN9SsSmANnyTYXUAF",
  "key6": "4HSkSD3H4bCZeZ1pkrDv4ePN2TSUEPkGHeNetRQ4R1xedLbuPnD1PtcKpkWo2BSKAidDe5Y1eVy1P7KEqk1WuRDq",
  "key7": "4fKBcBgMcWeq6FCESynUyNgcFNZqqhBfastHHFdz5Xov89TqhTHgpcVyRCnHJM5fHW4qTgij3T9fTWghNaxaLzj6",
  "key8": "4yexzukJ8JYfJ7nEzZ2ckDT5C2P71eLe5Bk4jaFD8Xcc93YaBvFQnATrYG9bXuXaedqsccjvcrRPheiJyMfzHWg4",
  "key9": "3r7VQ4vy85nUcQ5GJ9WGMbxGem2RwAzffx2C8x8Rj6yrvSywX9k8nuRet46KBpzmGNpcRV3TDExKwepD8Z5zxvss",
  "key10": "2ThB49T1N3EXpVnxa8tyBnV3hjLwhtoMEBx5hCtnzwUTdjMsRtJSZ7dFEphD3UQSyBKZhdYzt7muD2MPUjeHPx4R",
  "key11": "3jQXrBwmaytmNJyRCNHmCc29TcDXB8PEBsPSTnaLVuk2UTh24WKhkDyZaydXXnwvhoFmAzUDWkB8yuMY6Fu2kACt",
  "key12": "2Q5bfw4bnv9SiJvwhazUvJZH9YVnwBriBER9A8E7hkzaXXU7SYmwcSXSG1saN9aBJKrbnp3skVLAwniYu6z3FmwS",
  "key13": "3eQgcxJT7yEz6XTmZTm9dMyVrzwuJDn1dDvgU2jTY9GZcciJ3mfevZ15A8yawmMH5s7WhALpTdvj7GQHXJK7nCL2",
  "key14": "soYT5TfmaMWEYhUkZKBJasWVFbvjHA8ENxLFX71GeqpHAzk7Gi1VS4FrtA1dzLMdUEBUEJRKSxBE1px9TUpnhKr",
  "key15": "4M6jL2PNtFdbYDXShRSh3kUsHXhxozAnpXWsgHMRu5ExP5gXu257pUkkVW7jEjz2ZvoWgX7uHg115j9nPqvYVtjf",
  "key16": "qnfQrapL2MY6MDY8o6GnCRjHMiie7ApjzWzXNTaznEA2rDQkmfAoxqhmtdXrNKxFMtCDkLHQ9Sa9fWrKfRgWn8o",
  "key17": "ThtV3jqT6UXJVHaURf8XNm98EPhZrBuGexZhSsTPt7ReM5XEARUX1GDJDoXL59cKaUGaB18fNoRU99KAYsRhdM3",
  "key18": "2Xdqc6e6cZj55TmAXDayiFAG3iRtUMRpCN3N9fKJP2WCKS26rxAYgJa4HW2nTLriUidm75c5S7LRjFVk8vAr173K",
  "key19": "37ixmBPm29G7KtVBPGKzYGApKiHbkJXJ9cNtDpUnbYrSd8xYvLrcx6Q4WDeWR3vnUEiHWnCwUirw52Azz1EuHu8L",
  "key20": "2BbQWLgX2JPdzriSjFzxUXeZWzFjaCGxTwgLTKSZYRScZxysjpzZGtNMDwFuw1b3jeza7w5oeMHteRwHomSH2q28",
  "key21": "2SqZRW1eqHjGDxEjXKgZbL94QGZkqFa73WRUFNyKiEtjCZMbQxPTVkt7ifXtjUrmWREx8XPWVAEumi146E82KyWK",
  "key22": "w86FNjbAjpegVyM5dYfmNVEgoKv1LMjxjWKVeEebnB5Jfut93cyX8CNJAdVA8H1hAdpxmY1pT214EzCBwP71Vu2",
  "key23": "4nUDgauPQaZxd5vQULBFDK6j1w5ySn6Sk3Ref1XyjbgqPrWqTNANcW9RAnkK1cFcGuGbP13J6hdU7hLGkMpE51Ze",
  "key24": "2QprdVLZisCX5Fzs8BkJseP9yXfgCJ4GsJpHEEHcpc1r45V7NTyWEmQNQNxPFdAxHoTNiHPwSzmvQYngVHYgXWNL",
  "key25": "WHRPhsMrEFai6f2vMBJHKsS1mdUEJtKANwUoqdg9KKvNWTqpfkyB54dyz7hqeBHP4Guv5srZQ4Zc7Vu9rqRqgSx",
  "key26": "4dUuoSbSd4USRS8ycppnuAQZEemLroyQapPyEHzfYVsgCVg7bToK57PC7TXrHdjJtywHRZTh24V3AWqRM2MmFTuC"
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
