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
    "4TN4Lpyt4TdFxqzugiVRa7JZUbUTutaZwfP73o9JY8QPEhCntVyVZ4ymzRuW1byNn2m6FmW7jpmsNqQxQ35T2BsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ny6woyHoSS1iDBSFy5wq2qAp1pvvJCW2fCewr9ZW4WmaAfxhordPCAMYU5NMgnJCRXFpghfCm4oz6BsJFV5sMLq",
  "key1": "2GLgEv3qbjQ3TpdtDrhL6KfRmFM4yv8SRfCrAAaa5XMxCFw5f2fTXoKuxUj2DHNSYfbFG8QxpuY1wWjU5QZGew2A",
  "key2": "5RUmPbRom1p5yyMEw7Kf3q1oNS9TmTkM1pbskBAj5fNFWjJLW999PEZSGLSTATswSphFFFP3TnpcpjFkoiynLdVi",
  "key3": "4g8EVpycaAUAoC4SR5u6chT2WPnPxnm7HWHTauQt5sc1oeZbrq9bzFZusHnPYvLK4W7oLriH6TLJvQWFhnPVCiVM",
  "key4": "5GynVu8B6bzatonEnn1bdqJqR7ozUbmJao9Nyv6oQaJdM3ECDRyAkY35gzZDWsMspEm5TMqCGVkoTFUDkMGkHfGD",
  "key5": "3FZcb1Y9ruixXousPPUVQxxYhpvLckPL14BMpzBjBPmzYu5zPzEwfuVqfporwuc2s13mzxYTBBrqvrCuC5JXrVP3",
  "key6": "Z9mZFykEMSYXxSF4tGvF5qkSACFbJv5qcnRmSuaR86NjTYWLAD62PWiZCwidkCGGPuvk8VdiWs6k1eHBWUFshmb",
  "key7": "5vprJVsGiGcbJV68fk9GkEuYzt6kvTJS4NkX8ho5EopwrKuNkHpiuN4rcyxUHJiC865UzmpMfeMiXL27APCMNWzH",
  "key8": "39nnJDmZp9HKNudkr9FsenKCnuxWJDPUw2CtRuAvyqyYnbUYbG2phib5Hz8uJ6kzktQjXr3TUE6wtBPrVLezetVs",
  "key9": "5cF8P3a38QtwKQrZwv4ZDXm4KVuqHuxpW41YQ9w51VvySBh1aYcfUP9t8gAwr1GwNQjLMX6j7hskcUUPWYscisGN",
  "key10": "3S6c2oFK2kKWPb7P3bYwEzgDm7sykwnAbLkGw3LLJAigRKpRJJshRa1MMim42bUWmLJfhDh8RWqe71VSnQjKzuAi",
  "key11": "4JoSBy7f3MWQZFoxkzFDgWage5QkQeUrytkPnSGpyBXEjkzdQboaRszDFy63V7p3kcmLRpiKDRSePwgSWvWjCfLV",
  "key12": "PVDW9haq69TzXAnWdnNXtvRVvtKNx67cX7qddNJ2R496q4rEar9muBBCv6bmouh59eHHK1gWwxkAA19YxUE2M7V",
  "key13": "5FdxzyjD8E68qq3j2zHXTyZkyW6ruFsdpkap2DkVbsn1MzCyVaJAReuKQYS4dRbFNL6gzioVMqB2uRQJ9wc7dZoh",
  "key14": "4LLxjcobBBGGdZoYYtoNqcmfpFVwMV8PhiAQhtVoS6H8cybtKZH8NhAbFkGHh14aAc1W9xh6h8P18Cd7p9qnnZKc",
  "key15": "27YD25ueYVHSuK6y6KXe5rLzaxEhj5yUxK2QKcVQ8keZTeDjuy626y4jP5gf8wVDTCp94A1Fn7CMCcE6YL6obQx6",
  "key16": "3AtxGXcDiucanasgmBHHUWpEkVesD5W4afWDzHKT2Mw54YcobGVn4CZdQhK98V8RtXLwGajzjXFZY1hYtnzaFFTi",
  "key17": "4kGomsqVqbNt1m5zHt97gUmjhrPvYLeswvBMKhuwhVs19UgYGxJKp3a1q2vKgwF5pnSwBZ2DkzRBd2gv4R7gLZKF",
  "key18": "bwEsqw53jnje2YYpV3qXHHL8cHySi54JxQo4kdxdMxfpHP1EXRwTo2HotE1ckw1qWSjtzc1z24rRrnb6NAvLG4b",
  "key19": "ejoP5bgND7aRkc6qLVv3tqYuk2EWTQCZV8whVKPVEu9EFDzfQuVAJq8YmFxwFoV67as9bUq8E2Xz52fXchUpRgW",
  "key20": "gAzbfeUKWipc9rg4DwjXbUT4gHYdHytRpimK3RiJSuJiRzBaD51QrNgFuySmiHd494jusWoR3LKMnvqehVodh7C",
  "key21": "5WztHWZhJuN4fivi2VQsWqnJ2iwGK9AzhbJKJq1SSmRPT2NJBSYnnQYdFCTK6NDNfoxPJSzMHtoJMWjPF8tAbVau",
  "key22": "3wHkKBssD3ugmAqZLmGHjaRK3aKyweeB51TH8dKgNxFxAkhPrkELxQ1GCSmcU1NwEhEX454wM2VqPuJdfnzBs7y7",
  "key23": "4KLZBQZFwkNFaTJuKVkrEojAewuwgWgti1fVQNf68cSs4j9wH61e5QvAwMPedwdYouHo5cRXKcFp9JFMofY14hAy",
  "key24": "5ut8B95B2ZUFoAt41GyPWxMfuPmaU3kP6yiW3oCJE8eqbfiwyTN6c4ejah7C3WBiqcf1iyuJyXyucTz4sGC4NJQp",
  "key25": "2dSGLiKGexEiLrUhVLWvLbnV9KjbBJXoR6oVYg9cbMUxs4G5bu9FhcdEc7xhstv6CCQiB9sMMosMdFV3Zzg5iCbq",
  "key26": "255Jz1BKxNxvztcNchbTkjzGgttnqSsYxnAyZTH1PAU1yFwL3QsThFkTvt8Te6EQfCELp2m4CPUNti9WtHK2ANpP",
  "key27": "5hHBkVPD6Ze8NT4wZDE1iUWqZ43UAwxP5pTxYYqn2ymjzs99BL2TBLtYA7GWfiZJGbuK7CZXxh3gE4p9X8AdiXYE",
  "key28": "KQi7wWeLhoeLn8aLRVBAzYrS5yAem2xyc5qLZcE2Ts4VpdALZPbuHvbc1PC7kvgS9aew6R4FTxPRta99hH1vaop",
  "key29": "4CxCbKJojGuhKan8LbiXrrHc5k4QVEjUyoobA5HVvAkZxzzbzpw5FauZVcdJknofpTjEzmPZ1RWaqsfRW2kBND9A",
  "key30": "4Tfo5R76yRYpdfZRQRdGAgjQDfxCsqrs6uEHFZBocnhDpJnyPCijmHgZ86B32M1ArnAQRTBMt7eUBRGkyJxTut6",
  "key31": "3zaLVWZPKWLn5sEF9bi9ri9R63a9QRf2KG3XZG9aZKi9gwEkfxUpSBcYh7a4D83ZUqbgrDcNvGFpRVhpbvTsR9fx",
  "key32": "5h3J8m7Jd2BzCBqanH2RAVWy1bHZyQ5y57j78UQV4Zo5yP2Uk2GQM7e2cEEQwtZh7ouuSc8Kr3pnysFYuAupWMuh"
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
