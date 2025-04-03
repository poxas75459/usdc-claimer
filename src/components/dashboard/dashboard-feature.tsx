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
    "3y1bCohtZ62NoTzrE67UQKAKCNfAD2TptqNNHVUZDuuruk6AjJxKUUHW3WsQLxJVBksJKbDgrwMfnAc3JKzrSmTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BWCabA69Ca3BLdmCgDUbp51ikd4bVTk6DAfn12WiSNjmgE6sjzmWbRzenR8PSMqcdvZwkgvByVALPrTVFzYN65S",
  "key1": "4q4JzrfEZ2cKrRyoqh289j9rViMLRoGiPQhNqRi3F4sBCbFGUXf7SEfYr6aHJ3Rkk6KnbfHuF5WZ887jujw5i22T",
  "key2": "5beXzAeCvWdqxjxj7WkV7UuGtE1dde7fMVJvRxUbTEKrfFfWcUvGSjhZAMfRb65N5w7wCG3bDpc5k5usu9hcs2BS",
  "key3": "hoeqRPEkBiiMkGUoqC9j6ax5rheTBQKgKQtF348oJKWSAFmbzPZciPCeq3U9Td2goxevS4vZ52ZyT1PqSGQn5mU",
  "key4": "2tqWhbsiz29hxw25D11PtYf2LJwLTyvwgMGozsLv7Ts5vNwnqvwpFKjx3oSKgYiCtzWkNjjH14UxhpJ69FEYkBd4",
  "key5": "rtR2gtkUsaif3y1cv4498nDNS1H2rKCTZRnDizfueGyBWEwy3KxF21fXGUkUkx2PHaxsvArzXaSqTfVeB1uuz1q",
  "key6": "4BkmDoCB3xPV9MdbFtECHocsc4MbBrLxDgaGpTD3kGi5YkFnBKZqLyqyWFMP8W6y5cK3GZEqpF7PLvqEUw9vwKxE",
  "key7": "51WHYCkTd4HWY7KjMW6xJDMXEXM5odRHHQTiPHZp2hggrfScJ4Qtri4Djb2wQYRuumAiVt1AwRvRxcT2oKWvqfnE",
  "key8": "3PdwoqtZ3Zw6QfEvARjrtfXAve45PWR4DNCQVqYEq7kLqzYoJqDvXadcSXwvvn2cK1j36XSYsmAcxdkhq3DwwMeG",
  "key9": "VXWmgMyxhaVZb2FwR2ik3tM1ZF8RNqcbCBwn3cCcL2u1m4k2HzGoY2u4ExtoCYjioxrRH39Nkv5Nuh11nRAoabS",
  "key10": "3UYXVttdLWn3ytyGAmdZ6J7WBCtdT92ZRgiYajw1XVm68DSrVpAECALnytf9bz9RTyhdFUfuusuLxd3TPwFuWdUz",
  "key11": "5ZTFVdw18RLZxCy5EVn3St7Upez7aMVAETZhjuQxQdHMhTGME5KGFg25PBmitX5Quq3ge1EdYMHBKtGVbGfvq5WE",
  "key12": "5dFov6pdZ82tAfrSdG1TQNYYpj6PfNkY8rCPvKwnsJHJyRjW5ikbqEAtNieN5hi8GRsZUgrMAmD62Uy9CBmxTGMn",
  "key13": "5oioruMWnvPpqAnZqeph9ZaBSMxmexZxbGarmjSqk3cMyWUxX81Tzsyy5gizxZycRJaWrX33K5C5pbxcxX5dKTzi",
  "key14": "GcbSPZSGC6X4R9yAae961RNUbVoUNBnAkw2gTtJSd9hQstxzHDfzYhgyuL3CjLk2DdVjzkTdb3sWrW2tmdu52iX",
  "key15": "3JT3NxtEMhwLBngQauPiGfHS2nG7Qd51dZDPPxTP1n6SpqYqdYhjnsa2zrrWy4cuCbzxEbTeQBGdt4gKQxQdUiXs",
  "key16": "4Mb9JvkWaEtraV9xPx2ZwdVSorWjYd1uSQMAVozvxwvmkApJcYX3BnZMwhQdj4uGj52cwxQ2ZmdnM6kzbHisdxx8",
  "key17": "3TUDZWUD4vCA9k8cB3oCZbvBdJHRQaUzS5TowFuPL7U5yN94CCuj7ffHS3mBjaExCKMsvtAsFq7ETbCDZpz9fMLd",
  "key18": "5Vbf8d46Ak7xhU1wQoAMDFoVLYPtTPAzKw2kKpS2fRdvshT4y6hnHor8hTi9kAEcVYxRBweNjTb79s4gopLLovLk",
  "key19": "5tHdxvuJA9hSyWqamcfp4MUpQdCAX9WFkrNBfQJQ8xh9aa5ZNHc8Cpw2L6nju8a1rarK1JbJfo8deWGjnTmhvEZX",
  "key20": "2674diJ5G7iooHykrFXDwMsNSXMftGEYnT6u3MBe2czbokesUeRZG4TFhVdqPnPo6VYxVxv7p1RRADXYcND5UxWf",
  "key21": "4TQAaTTvcreUGqhCnnoSAoAm51YbM8FJPxCiyjPZq5fMVFjUM8sYvcwRvLxKhop2oknN9Ees9cfFg3nPuXrirueF",
  "key22": "2X9A9d35pCCWntNWLqJ5wEa6gZiaschWJZEZa4Y1iS2hhFgcDghqem1Tr7UbVMzErb3khBD7XUhdepRBSYJJfhzy",
  "key23": "59MriSq9vpVqM4zmNqv6sqFiquR75NDueAARLZ8nwsZAc5BHejA6ghU4R39JQnPWpkCWPN5tqx7RBu6wgTs4oKc9",
  "key24": "2HibcnWy7k1WVbrr5nocqpkSseRi7a6aRV6foa2CrmToAR7WUeUQL83WArZ7Rhrt2q1DqAZnewL9rUMU8SEz5jjd",
  "key25": "4D9K5rAewsQvqBmoCeG3f9g5YRcLGk5J1MfAnEbJESTUmwV4wps4sQYadYQVuN7dvePL7SeDhekZYE5HZJ41sFJE",
  "key26": "5WMM6jsjf3htA6LJRvMVCC5ksYohfZTEHr4HBZrzW6uKHPGQ2XUcqfssY2YU93PHWGtUqeq7yXa5nwJJZ8m4Dmu1",
  "key27": "evYQG8LJp8g9CffrLJTKp1q49eAsvLmvWhyL2ibv3tTffogvZiPFkufhGYGgrvHsZncTG8LvaBomS8qKuJ4uKBa",
  "key28": "pwhn1YKawkCsEPPyU7D64k2xGp4aY4rDFfZf1jw7xoFN2UsP7rG4LPK4F3HVM7mDzzKxTnJJEGQfVkQ4TR4husR",
  "key29": "4ZqfJALqLYvNUa59iJ7pfQXH2uazRB2K1zi4LJVrNKm7feio67qoPLjN4p2FXZ7DMCPXVJDsCYRUTNfynBs2uhEN",
  "key30": "5Nmx7UsP5tC3pnHfPaPRqjzDVDvXiGHTxdLisBvtwcoW1ZJkkM4dr65XWoLo9nxoi3ufQEwDH75G3U6giFKSaWvg",
  "key31": "85by3KfuhwZd1dizJncrGbnCcHo5VBd8zCUyYnayFGq49CrPAWaCNfXNwcYK4tcfq5ZK3efuDAEA44AyaT3MZuz",
  "key32": "3A691dPnrfoLPTafzrfJNnQkWqqoS46ee2SWdg7vxjR4UkDBdDfHwf9F5dsXgK6xZxmifCqyRjpNckYGihuDfhBL",
  "key33": "449U9S2R4qXiwGdsPKiKGXrEoshAnq4fbXn61mBGMugTxdPuS8xmJKxcs5GDmBA5iBVUSGJ1tVFLDEbZd89UQGk8",
  "key34": "xX2WBXixoEtW2iPNiS7VSeR78Jn885GoNZmqQzQnyEcjsCjoQgKZ8jqLXYDJg5F9XXoeCHRanvfUgiREpHH7ZRy",
  "key35": "2sKFJWAxzZgaBUVGUdaTxBSFfmS4FQR7WzLKjq4X5dWw8nPE1X7dNHQk5Umru9Gh1r66pVQ1rKaru4oQFarmu43Q"
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
