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
    "3n1nEzDd3ScQEimz12mkQwt1HG1oA9ho6fcw88fSuaf8dt1HrzNZWJAexfcYcSR4AT7Dyi5PcviqX1nvLYw1tckP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5brBUVu4nqMRd4JvhwbwRju2qJC29vBAV2DFh2k3idcNFbWskbykpkWj9yCXK6oeG8AGE9PacVNrMyNeqtCa74jS",
  "key1": "3ttfo8Fyzvz7QsPCwnZumpb1nSLZMymsK9x38KfGvmhPsDiCvfkCaVCTYgLKGgPr4vPrfobRDYyddnfkrbaP6E3t",
  "key2": "5GSoBcE8QVAygKsfvoxqTzRxMPFSWeVm1qtPSLHoTXCnoSmrN1nqktAKQzLgFRiHKFmQvJrb9LXXVURvwBvEm2p6",
  "key3": "34QJ3W5B4hXB7pWSit4aPuc9oqni7Yxf8T6BBnJhKg73A6FbgTV8V9vVR9BNpD8aWqQLXkRrsB9Bp21NftA5xatb",
  "key4": "2AeJpKxpGEAbVF32mRCiAJo4ZE3EzxSmHPT6DhUUgUPzwPEbB2RS2A3VbQ4MCoEjK3E1na4xGs2g7WQs1CfgA7w3",
  "key5": "4eoJH2BSwLUy2qUCLYLoyYwR1JV5XXLdyRq7wQRDrzgDkE9Amy42FVkWf1sv4k8dPnCv9bbany3avFU7Jo43m7ew",
  "key6": "2gNwu98TWbKwVKvhFcGXdQ7TtJQaRA6SM1cBJd31kBSNESPDvzpyoRf63FWAq2BQZuP38VkUC5c3dVkjtex26HZX",
  "key7": "49DvKZskhZAd8gNsxGhjPYVo6r17kcWsXFFBDfz27w9jGpXV65Tp6bHvpAJxkKRadkSjDWMzSXGaDCzbjjfw5YyT",
  "key8": "3GhtFFuWiBSURFn82ze4kfaXjVqKVSTpPrJp7Gv3FkJ6qSgpSms1UKYoge4CZtnXtaXdNuqjQmgKQpmvG7j7RQHL",
  "key9": "41q7iboi8kN2Jh6Hc2QvnNx5bYYn5HMa8QZPyuBogiv5cGAm7LNUStMgBKHjwiq11K4vyFiyzVCh5WDptrEHXx5Q",
  "key10": "to7RhHgPvLsLqATpbjnSUo3L1uD4kbnBCscDPYXGnQ3z7XKjcU8NdvQHAY65ZQNMcNruDBzH4Uugvy8RKPJesJV",
  "key11": "2fsHpro5J3HaXc6XyVFvHergpUtcvE4EXcLCp2YfnnqybKkYEvtvXGE5B4SBLDwt3Kht4QJqtY1jHeLqXWda1vDD",
  "key12": "xWNBU96pYf3AYPTFDjhyuEMEkzdFe9B55j7bR5bvw9M1CKjd9Gpg17hai2qHVX3t2uaFjojbG36uZtTM3XM7FQx",
  "key13": "5Mtvn61YPQEH6fosNixSXkaGXdtQiFbFzyDrLXjqCNE4vDfzDVtCPaHp687Dkgh55JM8WhgeHFaoErgRJXQ9msAc",
  "key14": "4sZxWt8NJqMzSfiT8bSo7um4MKjBfhENVWd6FB7RGkNo4VLwTHfMAPfKacZqrYTMBmhF3Yif2FHrXESJT8TTr3BN",
  "key15": "67ZweBLSVeeDDYPT7XScXhNKfgZK8t6L7yRaYziZVaFLdKXvr6FTNvN4DLYfzR1TyUoWJwiYcgTQtuK9JNo9B9wX",
  "key16": "5QcYvscqcY3oHUoApYJkmLXVU5TSncP2eFQy3ohydyQQrecMUJcjMf7kAKfhajnTxrsHtRixcU3V2W8KgxmEtRmx",
  "key17": "kzxtfMzRMwKCeWw8AsHMc7TT4Esxb96gPSTkFoo5M6SrPd9d6ugZYzVfU7wSQivLQBRsVsbAXeiJSEQ49PaB7DZ",
  "key18": "3GCSP8DTVBHCMYSgeNXXbsHbojytjkUp6Y7jr5QQBv8hKkvK37wz2TdECQrRYqoEKwVSSnihMqvP2caybRUP97xE",
  "key19": "2VKnzUK1orui6a6Pug6zKC38QaqEzQaA5w1yTmzxo9zig7cpBB28AePY5hydNMXaKhtkuofVGrtdMWELFDKLCXVK",
  "key20": "3NiHst4EvkzWAhADJbH7D342ZD9WDhEYVjirhVa3S53vMjpxc5xon8V61oPZbvzsMbp1bn7pGJ3u32ocRuJD7F2s",
  "key21": "2yw8KBHEqgcjttEg9RZ3p8VE6Xoct5RpJsxxqTEFWBqzVQ37CXhuSt78jd9UT6myZ4ReAGGd9NNEY9fTRRCNMZC",
  "key22": "2ozmsmFXkiVm2YURoh5usVP27PHhfYMS1WMAL5WiqTgerpbWidAxGA3X6gP2wyJKAMTS3a6s9zHWcsu4wq7kHhK9",
  "key23": "rR7483nDktZ2bKq4WTBZKucffUZqKWEBTDmwfnaX6a2g9GYUHjYX2PQVHn1snqGMBYtiLHtWnMhWQsjkQ6VAk5D",
  "key24": "5kJLTwYtC61qud4ZrsV7AzGFnRN1VHk2EtbFWhHWuahr2GTit77cQHb1uPZQdg5VqwPo9rACbDJA4qZebcAQmyuS",
  "key25": "41k5osZduy7QE8tvJF7RVzs5PbLw9yB4tEMJ2RUxqbrNoDkp6ydgqHJU99Tko5rooPsvaWRLHzdiReZAY3iiRGzj",
  "key26": "5hcdhJc68ULJbQRbBuVPTVVeD51S9vxF6R9cjzCsLpZ8byWCALqwY2p2xXFntPtLazcUuzEC2sWNueNztB3qQ7UK",
  "key27": "ifLRk6QhxE6kugW7cvVrG7kqQ9FbKdwpnBP5ofJazpCV3C62v7atV5xL2J2NnPhBGbueVd3YSjycj29t5ZM899c",
  "key28": "5XGGf7sALtU9wRUpV5UKncyu4dwR65JgMuNS8MQAGVKiwb4an6ZuG1gVxZghhhHjEg6xWERv2kqH1FHJPc1ZrJdj",
  "key29": "4dMVNM8UgYdvA1fgzRvigcEuWNnPedvgNfGC8Nr3knffwSqFmuL1sWJZjveTY4AyRc8K2XCtXb4FsXDdJX8Gk1Ei",
  "key30": "5mSFKatpCjvjYe1CJqN1coPjDA3j6XBQgX1n1BuM59MjL6MkemMyQC2basSi5xDWdh92jEPUTz9vCvEVWVWMsxg5",
  "key31": "67mz2WWbb3cL5xFaH2KR1KFch6bKkQ2v66ugtiTSBQnhgfSvqhdnCZy5w7sFRuDT4TtMSUrjk75FGovZY84UzxKC",
  "key32": "2pjTS4NVKKqtVDNmwASf3tmsoHH7zSuh7G1qupDFiANQHi7j8Nf5juV1oJkninYH8fhc6DMCVdr1BFjuwh2aBYLW",
  "key33": "466ym4iWsFFzetK4aUuf9kPJi37jNiWBoaALfP8gX4QUWm8MHojdwfwpDHfbwiWzHThGi4FdpHSyMBkc5abGNYgu",
  "key34": "4NwNRV8Mo9tFwiehQbGXkwgnLJRjbs8HfE2VYW3VHxdhDU9VMPP7HrLCJJPgGvRczyfNDphEUqoxk1v8CM3AS4om"
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
