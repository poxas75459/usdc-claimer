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
    "4Aru6Ms7ScPUGTqRRjdg8ZaVBp3QGV2AFaKiQK3NzdVWqt2LJURVpqVhMiGkttSvSxkYVbn7UsC7ZGdxwU5xb8m1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DmfcvVyoiF2g2comiLisgEcRUhviCP4kzFbfi8mPduKCBmveVVvvZrgjyv5hi7JoMGc9VrNHcnLjaEtFRwZdX9p",
  "key1": "4DtkzKLU4QP8pZSXn6jSeBCgKUmj8wEy5evfJDTmndYKXkNu74dKZ1nViwZTjkVNH3i7ix5uEWSQSmFdg9Qdn1f9",
  "key2": "4WrLxRnkdjPrHgAky8M7Wjr9TRBRojbj6eCvcQxfHBrYQP8TrKNrQQuUgmduUW9tZtnXEnhpm3DkrXLY4fZfniP8",
  "key3": "5WtxemuB9cCvyF1u5UyJyzcoFaEHtXGYebBMLwcSTkm2Ff1ScXDL85mefeQSD6HVnjCvJpw7Qj45w2VNGNpHTfdy",
  "key4": "36UdATcvkYQqQfBrM81hnVcoquR6yUL1mbLZRbz1DKm6T4CU1SPyg99u5jP56ZXyvmeptHcnVhdv5JYQUq34CW8F",
  "key5": "4g1rx93ycWBddfdHr8Rx1JjMNmMJEX8PzWyuTJ6fvveCpoe52nUJKzy5qM1JoUuhSpCJqV7pSmsBJ8tfEreKcEjL",
  "key6": "42EJaZicu1QuUDXwoQxpQJBUccuX3jvC47YMFYHfhtkbyP4ZqdTS5gytGxRUjPbcgVwq7ytrqay2LAqDze6fC3PW",
  "key7": "3za14meNbNrN5Z2wt18Y9Sbq14vzEiwn5p2rVn4ECXcbNnxNnu6pnffpwV8hxHaRHH9aBhVK4aHkvj9DkKLGeE4K",
  "key8": "4AFydNnaacNyde8Rvk2ip8ejhvDudy21r1Jmniumr52jwFxaapQrVK2bK9xV6fhz3xFsxkivg2rmCqfRZ8NzvU26",
  "key9": "2ME4nXY2T1t6eGGu8MWnzxiAUf5mCCM8ttGj4DatH5eKGpDzDT97JH7mZjsTc3fRqiECJUfQaAHafHZ5EnMWf53y",
  "key10": "2jUxSdBZpXFdrtNQovf9c81i3VrLzpzt3C5p8aRnDfR3AJSdrnmSMPxNqeRzoU7r8WRg72cSwyySarGjy5esfKCe",
  "key11": "2sDq35QiSRyVYMybuDvrAy78rJkFDfAn3wR8M2G4LV4ARL3ETg8mhTRXZKU9t4wufXwQZwSYCs1118b2FEyDByeK",
  "key12": "2EaBRMUntwd9mdp6wAnFuFVL92FwdPy7AvVocQVuvWA6s3kNA2Jz9MbjAGtuzK1NWzsFfbAwL8QmKzL3XT3tAwCD",
  "key13": "2W7Q6EacWsqP5uKsDW6WhVhvR6ecJE65zJqkuMTtqeHNuuocY2otboWPdYoBA869VFvV63EzyCbURWeup7BjHP9m",
  "key14": "BHEspyjYQeaanYD7ZUNDsv6VDbiqYFSzEwQx1CVco23B5smbJr3w441UG7dzKBMeD2WeRrpTTVcP7YbQnKrcKZQ",
  "key15": "5fTxAENoRkyti1s8okGYnGax1dKf93UXfLEHDAB99RbjC4WJtXwvcw9Y1kMoyCRYmiVzkx7h8fRFSsk1yDYgPo8y",
  "key16": "6ScdgEqBFqj2uzMQn8USKAyrbii4nfTs28AJ9ubnKCWofVN6BiwESHG7rmsafqJ8xP9hXnzz328r8oHnPtXR5kM",
  "key17": "5aAVg3inSMVQvubVzSvAi8ssgNuGAuKrp5KmcQEUvf2AJ3nLFEbCv2gxZYKzHqHUaDqztvGM2dJ85eZdAvWcYBYs",
  "key18": "3KmXHPnwQcUhEBtvcBySfKHJfEyBZ62yUF8mR7N5FK9jfXvnWEdyJ5B7AC83MSrgQB8T62w2K9tVZbiBS9Nvj4JT",
  "key19": "4H9G2b5pAyWskEVcf9fDFMWVpPcR1LR8BvHBF21RqJLzHBCK6YLZYiXDbKztYf43bxW3wfWcH563Au6HvpapyLgd",
  "key20": "3aG8C5HJC5rg9JMYW3RCPTMrMga1qKCnhWQYSkrjKw6L1cmWneAc2knHUZzBK7hxKkcRCLDnwwHd6CiWf5g1BDDw",
  "key21": "4rqv9incirv2TT9T2i4PE5NQwP2TbZmj1hB1chjXaHCUMQGJGcaMczeP3kgGF6fsJfjKdLxRyXXzjssGWV6WHyrV",
  "key22": "3BAKyt2ReKcqo3MRnin8SLUFihgNX1Dmf85JZzFeDDH2LhyWCy59ot21GF4YdaTuc53FZvks26RVnBHFRJh5nzBY",
  "key23": "25Pyyv4D7tjkmtV6YnryGuFb2MXfnhUH1ZhLQnAdPmHwdwxupZscnQiveCrAyjTFYyjvXLNKYAyQLkKmeStjAgBv",
  "key24": "2UKiacCDReCdRKNhW7YgitbQieUvKEUkfrTfkxXAPWJnKSumw7EfBhvYXcnnJzaJYS6XpBaYDDX7fsaq8y3LZYZ7",
  "key25": "5LtbLToFJbLw4HUpRFxWwfTsk4uFj3tycJxmkUgLuvqKJU11uzUQdqk9Qq3vYjELzGvbpdvnhekQb2vjVjdA1Ndu",
  "key26": "uHcq6DE9H1LmJHRvrTTMzCk3rYv8hJikQ95XDGJFXLquFxrY1iJ4FoQkcMzG6oqTj4nXJD9BdSWthDbW51zsib4",
  "key27": "2v3kYbHZh582uiWKKS89ifbUrV3KKFSdojW7Xbc3Gr7EkJmhrbJRggABZ5sqxoCUMBGTMmhZAqdqE8G4iq7FnZJA",
  "key28": "4j6agx46LhptwSCo4B1pYZGq4FGiLJvHJ17299KaiyMM7BtuT1RT14yNHb1vQk9jKzVcjhDzU1ajR8XVsMZTPh8r",
  "key29": "4UDCp4khY7ARzPJ3aV73aWkTz2VAyPDDrzdGRaKT549xioCnkgaAjA4yHjmo7TFy9Bno9Ac7LnpzaFGSzzahsD3W",
  "key30": "3BQLdtw3SGeZEgUAyfBf5tMqkkxnbiA7n49pSLAm2hgMsNKpK85dwX9r3JBbn2zSTRNyZ2mcqnmVxCmLzz84CkVv",
  "key31": "58CtA4dqpDMRLSVEcDdbiQabGeZS9zNSDMH8b5sL3jZbfSXH5ShGvJT4bM8MuEG4MGrpHmWftWAiRRG97oAA9rmg",
  "key32": "5Yc7zMqx9i7WWMBjQQvtDx2jG9XikEDYxYweykebDq8KYiwLMWmvnZjtpm2PFo1Mp9oi2Zs5dni3cxpNDGnDNk2p",
  "key33": "3cRToN14mJ3L418KmQSG53XPQySHvmaQjY6WrQX23qcNbJ7SG32cBDF6YZHW7pk9qkwzE1ErnDHuEKRL5CJQT1ry",
  "key34": "3uDoocMiZWGCDqu5CKq35XuC3ztwTyjFq3csayXMpy3R1oum36KzEAKGEQsByuL24Ls3sMhGbjdKtqwitFgqAG3U",
  "key35": "4KankiBUQJYJYsBAsPEb4CiPiT59NmoxvaQ7CRKhfEbfRZiWLHHyzSpo1qpWhQc1cCt88YcMRj6XogVf1bMMRcnQ",
  "key36": "4amjeHHstDgrvGvxuaFcbQkNMesBWhQsjmQJWGTyDQbtHMNSz14gW8HYf4VgaU7o739HM8VepSiLo8VK85LG86bF"
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
