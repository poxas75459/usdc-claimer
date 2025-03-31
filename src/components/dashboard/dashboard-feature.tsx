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
    "4W4tkTSiKCVJhhmpFB2opb1pBnr6NFtCs7uFv7FZyuLjuQ41AZVpCS4SP25j9kBu6JY7Hqk7gc9UJT2atxHFF4ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qmo6NCKVQc2K3V6d65oxYD4cGmQrAwJRSwTij2gmqF81aMu6THNqKafqYmoGhgZoEdFWFQUZTqECapsXFAMR8nZ",
  "key1": "v3C4gRJNK5AxKP1TiGkE6rmrik1JrK3ywXYGq7ZTcSb8SivzLsSX3AoDaAB3iLDuB8p7dpWpV1AJvjWUgtfk7w9",
  "key2": "5noDG1NnHzSsCAoXhkbVd2B5tKfuhotUKPEeMFT6muV613MayLUt5VKTDQQwUkiNxWZwiRb39ZgdC1pwnwyUVeqB",
  "key3": "3ZH7QSNFvCBK72sAfzXUEihY7MvxRCWagYBkWRRjq7erSSoJhv1eyFrR71sDwNC1ePC2VU59h4aaXoiuSVoAL54v",
  "key4": "4brWVxpzxmdm9hgWmNeKL5AZzmc4t2NMfTaa8BsEd1cUw9VsjS9UJRfDdz17aa44fk7uU8FVtQrBkpkjUqwur3jv",
  "key5": "4WjZbw2XLaEAHoHozZ5qq1pWub8aYywADX7B4eoRdpmR2C3LGazx7pkBn1VHMFgZTUAQ16c4fQhPTKY7CNtQzA6j",
  "key6": "59LdJ2Cg64QXDA6GTuc7SqgzWN5ZbVdY8SPL5Ria6eo4yNaseb5v29fq7k1xcW3mgHnsiLcbDzZYfokxEdXGEqSc",
  "key7": "54PtHzvrnbN89NDiwWHpj8RmSr6n4WfJwSpqPhQqPycvwcwiGVrmZCjbJH2cJ3wYSoWTQWEGaMfZgtVVJjfaAKkh",
  "key8": "24ShDaZLfEhnY7icY1dHJ7o7UHjqCJTUat8sNEA89E5cUVu9zhZ6s4cph53EBvXZ2aL1JK3CEKps3DoBQPF7fnjE",
  "key9": "F4o56BoXRczFdjuhxfxTdK1gkDVhN6jJJmhKKZKFdsCaUWj2sJF4MWbdadTcaDnDywdXAQVsJRKk6C3K2t6ou1y",
  "key10": "4bAHM8ryJZQ58j1HeoWUHc6majCpgx5ALLZuf5BeWWEXjE7GUAGfWPncS2TBCBQoorFZjDt5deQqUPCA85uaoGHo",
  "key11": "4swr8t3qACDEFwAzq6Jagem9csUAnhHCcDR3ha2yhUgCp3JWNa9U5jVCUovSGFAgR8uYCrYdH4VXTWLQCUnX41gN",
  "key12": "37Ffnk9Lvf47K5zoJRq1bExicC8KFmDZSqYri1Ma2fSsRZ9RxaPByZZ2ahHeVcYa1cUksio8yN1ihniCdo8JvKip",
  "key13": "JvUV1aAnQTewc7LYJnmcLuzas5icK1Uu3jmH96VuZiwJdSY9RmhPxHKVMnqBv4TMXDDSJahbEysdg39FcpYvJx7",
  "key14": "sPcc9T6e5ZiAAeCd2MpjNi2696ZnuUTqBx79yyeEb4SzQEFajk2A1XVEE8cLSQ9dGWfMSKC78ZEoXCescCkNV49",
  "key15": "2bqw7HRGDCQyZyaENZioPTTJckevq3P9it2j5ceXwE4MTmp1EZKGifnrm2HDCRj1SsRQZ7PcFiSinF1HSC7Y84Rw",
  "key16": "T9CVpPcS4Chu8SczYSBNgi72FkLaghnePDZwbiG9gQWycuDoAso2q643riFpNJU6ZrzGU64SbJ3Pzz6ZjnjqjeX",
  "key17": "4qy2rWaR5XMu4tVJpcjUknfcwHoFfN7hu8x18CnCibSsvZfhRUhEBC3Bsbj7pqtmRSP5yVHAgHESTjPv2QCgctd8",
  "key18": "dvXsFebsk4hQbPzKwz1kWtyd2uUDDC5VnkccetgXMd7EieFteiUUCfErK8HLferSMtf2MVbmFg2m9tb8EmE1nHt",
  "key19": "5Seo99zaxzRjZ2SCM1huJDvF2x7gVfHGobnUwuSZ4A9aYRY5jDRKbCYrBjK7LWsYJa8mcxEw2iJ6GSGcfaD6D9tJ",
  "key20": "5RBE9EJ7YRxgtMD5WZQpyJbNe5R22dGdbrcNTTkot2WjrVzF1DTGerjRgPu7PWavhoNQWL5i4jeZpjxQMYZje1Pp",
  "key21": "uyT8Hbh7tWE7QgRrBru8T8UWoFtycJe49JCCoh9F66K6VvdJerrqngtakofLb7RY2hXT71q51iEzEGtenkDVDd3",
  "key22": "LsVXTRFDR31TciWajRgAyoEwc9DSAS17vgbYkAaExzgnbiT4e4hUbMtZoKoGQ5U21uk2DZXEWJ6E4qwsPxkRwUH",
  "key23": "339UXeUyMG9rKhuVypHTf3V6ixLKsszp2hSp6KQzBen85GcRKbKXDY1Z8sVgypMFkGmVKXdvtgN4RZKmkfJs4HB4",
  "key24": "5S9M6BaSsMvCExV997XMSnzZnfK9v4fbNQtVit1Us44aFyegNrs8rGyxibB2bRkMKp8P4Ro6D6SpzG7Q4YyxQr4q",
  "key25": "3zQpsg8SEk5MYE5YTKz3aVp1vN48nHY2t3N4PZkqjcLAJRwL5Hcynj5QUfe9T9zb2PiTi7o7aRV5MAHLZUFe5LcJ",
  "key26": "3pZmADDMbt2zXisuciYRaycHKsaYMdGZvoYmdXWnaQ4ZVM6yrr4kT6RDvkTCtGe5oDQHtf5UWjSfkdTiHK1FPJ8A",
  "key27": "3ZoVLYqpHTLhLrUMeWBUdYNrgE3gaoS6wmfJ9X3iNQjk47ZtcUgaPwohMBimb2JB3WAbBdMbDoC3KvbfXA2vp6sz"
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
