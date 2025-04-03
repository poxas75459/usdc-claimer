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
    "QgE6cBJhUPQsZNBqZPA1A3X8vxV7TjfjmdBw7qdbtiQY5hkt7rPRFp8Y1gGYCtfqCxEkrHmxfN6AqGTzGUvgQQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bLFQC6S2PSy5qKciVzsCmMFRyaHspLQeBLYVJvd9SURv8bXVG7gUqhTiu7NTNzK9V6MMLNyya7weY3JjWYq6EAw",
  "key1": "3yK6q6wn9qJZC6FJ9TXbEiLrKpBxvYnx2dvrwdt1jEnafemGRrqQMzoJNV8RDmYXRPF1FvAEvTkMcd1DNPEH2qCG",
  "key2": "2cvSZf2GAGvvMsuEV6sFjiFBQ4ihchoK4DJb6ZajEA4BUxLQWPwBUZe7BUo1LPPtdBM2A9G9CG6sXBQptEedXsoE",
  "key3": "WTZoZMcaQ9tJFskvoSyiF7odLF3mBT3dzEGrs7HctLfWVZWpbRi2ufEMR47UNCk1fAK9XwZ5Tot42myCjC9f7dq",
  "key4": "4hvg1XeQsgoWXpMPMg5yWNixK8dxGsiXsb2TjF8P6mZ56fvoZ9nJpyAQ1z7NmvGXE1AMEX7KYzJySiL57djVEH9J",
  "key5": "Zuu76ptuA14zZH8by49Ch5Wa6sPKYpQtMtXB1skHXaDBV9Mhjxd6j7tqCqGnjvaBbdd7evZEpaGjqADYSMyY28A",
  "key6": "5yD24KHxyPDgzidKfAewoFSnF85i6f7fpqHjEdXT2671oCdpvhvsex5b6Kb5uAsECMv6kYp4AVRoYEqqyk7k6SDQ",
  "key7": "5XdRdvXqDhWcedQYyv6zwKshx3QKbhe77TfDAWh3HmmpWFPMc9Tohm1TBebtTMKnEDgJXqBNQ8y34MJ436RVdfrR",
  "key8": "3FUBi3svexenkfP2TwP3R7gLbjiurMRXqci7pvGivx7JAx3Jz8MU32KSi7DJBnAjaedobw7RwcPNJEY2TLxdsbTT",
  "key9": "2rotHMcNAxSaTC4VMUX4EAhxGaiKMfoFdqmFmi2MkZH9WZQUDWBDY9ffdssoEieeqd5QfANrd9YhqNmTR45UVkLV",
  "key10": "3oDBSicNTX8LLipkBTbMXb8GXgFjTZ9oqz6wKvsqvUtFougrCG8CjUveSrHE9JBcavPGTcC2ahpPMhh19th7bFq5",
  "key11": "PEELsP746y5nTcsgWaEnW9kEVuqFMmkAABtqc9JfdUwF2bdzdCM6qybv3mdfwQvVCxJGRUKbGB1gsAA5QTTR7VF",
  "key12": "37kdki6afU7MR2aFGXduZ3mrQ5airuwftbaSAMA4Pfab1GMSzeeRaKrjuuhfr3uxgqXmZpbegFXzTWaqF1CxDLdy",
  "key13": "41LdrCaG4RsxWPQ6RZSEsFRH3KwGi3ZJx4jSV9rwFtczRpHQ16hr3cTQcXcWRGHE8FxuY4ipqTwjm6WzWzGWLDmu",
  "key14": "5dPnirA4et2o9o7o9CDSZbFt6AQdWRfVipzcRMvanhvksYpcv7waUvhu68jBkk3dxgsVLaT16Fymn4ZhNGbDBFbZ",
  "key15": "B5Lw1cHb7pHcFxbMcYP4UYcxd5ULGRU4uH9LB2kdg6FkMxqrxfMaMcbq5mmDpjaAM4nS14SDF82WN1C8Mc2vwPG",
  "key16": "45z5RXu9nP7Eg4wfogPCPP4beGBCuxUpngf8cYSFSbsag34p29zF9WtnqnhL67picUgugPWdJDJBizD7rMcXMuAp",
  "key17": "5Ftb5LYuvLNfKNfcwTCKQMrcFP6TWxZjm1CqFE4rr64T7j8dcyDjwMSVshAGRcrwAqhWD34oznzetMa6cdQxa1Ta",
  "key18": "33bEvnmgZSJi52XbhGy9u4F1ZqQPbFjjvHQRyX4KvyjfoYDEwg15NbfLyRWaz9G5myfY81gX3s6G9D2vzzpRc6sA",
  "key19": "2ktrEihS7LjkmjLU25t6uyrwS9crzXaTSHKiL8nBmS3VsfJYXRGKfW5w8pqpiDg1QPVxe8mtno3g5WswSirnDDgo",
  "key20": "5vYcN967gue6rmhBMmUmnCThD7netYKjqxy6yp9JeDWYKUgvcRbpdUstRgTu9Y7YNcuqHVcVBk9Xgi3y8qw5Te4K",
  "key21": "5pZuhjnsDdbQqrCWiVHsxNzuzuJRA1v6rdU9weD3s67Kz9Dx5GNnsPskoryKySSxnk83CbyqLMDL9UZCnqXjmj29",
  "key22": "5gf6gTbY1BAMq421eCoLjeLyt3HxmHg141CuU2ESz3ahcu3Ahn6SxckmjjHxoVphcLc2fwQW3FAebhr3oNUDMitx",
  "key23": "43WkTLexmLcK3yssm2LkTAjmFU2Pj6vkinDCGdPLK1HwxchiSwxTjhMpjwVfwqcDLQSSgtE7j3p3LmB7aZkgzS4Z",
  "key24": "3JQvgvgKasujrKUJMDPcuDmHaRLGS4pfmRDH5rjFPJgEMqosbUprniP9BBjVMn36Bb9PJxxWn1t3SKBNs4M18cYm",
  "key25": "4vBiz2oppvWc5KbiEmeWGFMrn9gaPC8mGMrsXSWu6g2HkUGHJLMa3SWFwfCzo5ntRyjMLBCnAzfM25RtnbrVyrAN",
  "key26": "2CSTZL1XTNrz7J1Etf3KfRmtsLCxaD3RXXLPiqjBAkkiE3YXfNMgXAjWi3eG7PDrJ6KPsXrt6fRh3utPqZrVWyzM",
  "key27": "45mtpkcY1czSnP97k7FXe28xpuSZccTsxDL1faVhzUub1ab3Z6z7dG4qbyJxwKYMDrfs4JmFB9MWHzSa5X2tkcZ1",
  "key28": "3NUVxKsjhiFJQ7qyeog8V5LLobvz2fiNh1PE3Xv86iSTfdyMPH9MZgWZ24Yxks83mmJa1zVbaD4pEdD14R7CvFpJ",
  "key29": "61hHT1Y5XhU5Z9daZaz4fXqbBgEwa42eK3ynLVqTWte8RpKs1kN9ZxsxNTWn9MBq3C7u2wMZqWstgenQwHutSpUp",
  "key30": "3t2piopKfk4xVs3R9MAoNo53nfUjSXNCu1gECjGe5Sd1ieJKiNtjCZCkd9xHbJeTuXiMrAveyFMzYNCKx9Y1WjaB",
  "key31": "2UThak4Q4rL11bkjzKnQbe2PAwwnef79Lj2QVYkVECgVfoXaNk4w6rgjXFLjuX16MMhcu58brwGmmRicPpQBVLnN",
  "key32": "3ZmrGXLRQB2PNTSPYJK6ZJgPPyv3SXUGbCUT4Dh31vRoPwhaqRZg1A1RWZZoxrQCHyStNMM4aDgqUqdQSrujR8WT",
  "key33": "5ZwUk1owji7KPsYQkQba1RXgvXqJ3gnpY6fwZEnR4hR2N73iG5x83fJ3qCNJbPLYNZ1pruvPTnZbxexqGq81W4uv",
  "key34": "FPtSPJNc8YTE79XNAu7E6vCcpMKn2RnuMadqws1vyiTWnezG4t7Y13VBRkq9YRcBDqER2XxHzu9w7tHCzGmmXEd",
  "key35": "2U2WCssNJ2BJPsAJipxDhHwQcj5N1CtkUfedgRecXwoGAFqHzhnKQ7GsUzctXJ3Q5MZTsQtn38ivcZX71MyrrXfz"
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
