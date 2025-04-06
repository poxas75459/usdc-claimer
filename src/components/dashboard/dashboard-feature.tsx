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
    "5fQaTBwPDFxD5ugRBMsQxPY1RnULbKdZPrLR2dBheXZ72oGoAkBV21qafQ8zFAte3CSZHKwKHASJ2gfJQgdb1XAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vt1pD6JHPzwb8E5gfh9z76oKiJXWJXpuD5aWCKxB9dPwgtSrcotgEhxVjDR5jSULr7W1vpkFDcJZ8zgHEySj6b7",
  "key1": "4sJQrGsZUKfekwBxi3ryufbkPGjkS7sBNc7zUDV9cDiq2mU5SffbCSmmauyEMuKSvpfKR38VQFbU3QDw8CUyZrWj",
  "key2": "2YnCbxjpqo7uh9TqWW6e6x1Vox14fmYfgvAEc4BtGhzr5GqsNKYdevXotiR5dddpcSCSvzzYKVSLaRq8pxTzgch5",
  "key3": "2y6ikU4b8227UJf6885Tih8SBHE5UrMBDiFQqdEvccqCR1ZjaNboPf5Jxpq5mKsdFJkva5AMySsXaE8mh83LguUm",
  "key4": "3TVNiRktM8UB9hquzwzABLhyMtiyYyF444yKuFaHX7xoWh3X7DgyWBwc3ipwZ6DFw8SBv7HGth6SDjtLqyCpaqvu",
  "key5": "rY4qQdrsv6RjhU4mVk25qR9E5g577BKm4UJjDRhcCSvawHP3wNxnkQacXGaCvxeq9hRLwZG3XX3nB1B1Siy3fLQ",
  "key6": "5nMfNLeMT8acCbm9SxamH4aV81x24TUKqvvJ2EMoMUKtQHXpueXQNzhTG6QHYKLrPdhRBbGKWouVcvuCCehSV4cG",
  "key7": "5G3KJmWYjmEH8dwVBo9ApBNrfTbyLy6Loenthz1XztPUsCKeno6xqtZUNdJWeKppnH8bRdRkwBbZ5XBhYpRDFs49",
  "key8": "3KrN37QJ8o2wVWvta1DCufCBJb4SopLXMj1zJi4VPfC29hE8cTC1JGjWGVTitrFUgY8Ut54Q4J72pMdimMpb5LRP",
  "key9": "3CcV9YfXW5HvdALWJ7hyrDg7MYN8bueUbjkHFTCTWavmiQf8tJSr9FM7W7kuQK8Mt2zkNNZKAAto4QgafQSSPe6X",
  "key10": "41cA9Pkp5ToHkivoJCCPj6CqGxUkBE2nevceBrVCadeQbWJnxGdFj8uu6XuvzZXp8mWxAFgNL3u7k96k7EUUDDWe",
  "key11": "4JaE9G96FM2tR8hk1vZD4mSuSbJC8sNdhiCAhZprRcQNQFdkCfoWSXXcTethLTcrhypv7XjJrr64eeFzhidTBJMW",
  "key12": "5QE37jC1MDsVjxkoZF7gQyBDgjW3o8euWt4PPX3d3havfegbgVCN97mvFGXmuh2kJYPoyLvZZDuwuSdT67MP3j2i",
  "key13": "2vXhCthztysLnx7XZHeMWkcZRoS8nezrstt68TbRTzVTJd79PDKLHz6FcpY7ShJGV3awxL7QTVRKm5M2d6VZAchF",
  "key14": "Ai8tHuSzLvxpDpKR2vzyt4PrHMpsvZcbo2i7zcKcxYNhPGJ8qhxP868GXT1txiJjiWgEj56v5kcpHqnpFdSLiEX",
  "key15": "5tcJxp5MQXjkEBL3xiPMo8pZvBYwTuT5XtfFLpzEbjUXTvPDu53RLezeLSYMJyrZobsKynrLxHNAu2FXkCPK1Eo3",
  "key16": "UycR7MAbXb2kLGh8tAhQxTwAYKBsecRqQTNH6AwAoQX9Fbh3aqjCgiqCwdrkSttW1rfGkBmYdWN81vZ5aoH6wdD",
  "key17": "4URWvUb9EhCD9bxvM5BevSrbptxwkXkdjvdA1JvwMoLDPc7cT8GC2xbacfVvsnRSNdNFUihHWqmbemGRNsSvwNXL",
  "key18": "2XiUaCfqYCRb6MgqjEDkNEbVfcQxvWzZnLm9h9Yyy4VfmihE2VWms9osRDRv9Zk5VJLsox7TPkjR29mHq1vrc2ED",
  "key19": "2xaKTom2wN8PeWY54eFMXd3pPe8DeJFv2Lzw7UwsC8wpDAreekebCNsh3xHpxT9XeXjGWLZXdUTiLEM2uXyi1SGy",
  "key20": "4QJgRN6jQHDXon2Dda1Ptw3eLUjHmrbwh8gpDD1zkJpgA9RuvCRhCxFG4FXWtgFssTHXEqvkuqAfJEqjZivdhuTM",
  "key21": "2YrngKqdMQrpf6wPciNcKJk49cFZJ7a3ksEr7w5CVsniyYHeirFMJZHjt5iCJNnQQena1rvYc4oQ5hWxvneUVYrA",
  "key22": "5JZQ9FrURtja9vqv2vDcJa634kPj5xoVbH5Y9xPTLAw5nBKWtmwF7SuTCbERJhQTVmtBmcXWebP5tXGoPfNVkzLP",
  "key23": "2LvdbCP55dBp7G4evEzyJ3sM1Di3q3oQ7Savz91XQKH2SwMHkNxWuAR2GqPGogoLDK5VdXaF2pXE1mbDyhVcuRHB",
  "key24": "2dYjveSHHatAqshoit8UWVJRgMupS2UYvNS86MhW7Emuuw1wdAYPEiXd7EJTiKZ97JhtDUv9d1beEBi2f99wmxRD",
  "key25": "4zPfXXa2HVa63gFyJeYjKNBmTKS43GNeNmisKNCrgruAcz2SKGWGTy8PzdYix58P1rLQ9x3Z9Uo61VpdDYRkvQbi",
  "key26": "5bBdsJrQEQ4uFLLosbv5nPtiiiQeSTsHrSKNVoUtWtrLsFW4W5vhhWFpBFNemEsERKPoVcv8tjB6ow4ksQmUZeQ",
  "key27": "QgiLAJtY8P5ZzADsZ6N7xiGtMudFpHDTQhnbnB1BXm6GKFJ6sqzComX9VKaJdh6bJWxSi14q9UBBpcqfN73AY8A",
  "key28": "31t7T3jEwcLqMZkv2YN4jqi9suTgchvik1tCFrTVN3YnhA6MXjak9Hhi39fmmAPTdGNU4dCNxHyDEkpeJVuTRjKg",
  "key29": "2TFrTYw3u9hS9Deg3K5EJuD3j1hoWCAgqDP8beeizJJYt6G64nnBewKMes9wfYKFJWmWSpKw8SS6s6KCgaALv1V1",
  "key30": "5PswafyisaURb1ALqVV8uLuev2TCFWuW67zLQ9stUaWzg6YUHrYrUX86BBDk1rWmEqz6jGVq2y6npDBsVPbNW8Nc",
  "key31": "4hgGabgmv3JxMWmDuCgVEvffydwEGoDnftfSLbXKo7saxZfjQLs4vwWiv1aWZGWimLhhabsrDV9bx4njoc9b4A4N",
  "key32": "61mg2aNM52v9LwxGQfFoPq4K9AwMwyzoPeSPEetwuRqFaQPv6H7bGdYVGY5NJMnahKDrMrH7MZbQogcXbCHkZj2D",
  "key33": "39sRE3csk5suKf4n3MhU8yrzkiTVLPmRfBjnF55KZDzMQAKqyrrn6RRBBnLpMXCFQVG32p54e1Y8FZzUrgogNxqF",
  "key34": "5fzWUvv9zHerEi4Vu6EYo41jssawqzuGdwfwYutEMqESm2cX8WAJgib32TfdXqnDnitncTsiVgdXT9kVKvw1L6Yy",
  "key35": "4Hs1cWB3fU9NTGhSbiTL9bZR8CLVrXDK5J51PPDHgF2TcJedd2c9AYC23o96Viy86ZEuQ8jpAVzdQ5pLDArZT81b"
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
