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
    "2MK1XEq48teKewSYas6kGC3bJjeJTRvAMd1jXXVPzMFNJy5jXsrtPk5P6NMSKbE64xza6WCh9UNUc4GgWyrn9hTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sWbFaAFQ1JuDoZooeYpGvQ79i2V7o3cojHJL1ks56129fEXS6tGqP9sQisRsTaTfkUE3GgyC4ZDPmdCq1ppjY88",
  "key1": "5HcXVprUkt2At3B6N92jHDv7BjUyHmmVyGLbAnoPemh5Zbbmb7JDpoZpP1ywaFdfad56urv5pzW68aiXUDVPaJeD",
  "key2": "4vkuLrm5kAKpDyq1EQv4MoTMeAos43DYXzBahErpCkPzutHBQz1vSq2m5Z8PsFSVUKDBucjSG57UGBNbu6dyeU73",
  "key3": "5S7MxuJPLRGHECHGakZs6UyDWPNP6evA3hrf4je9ioswtnKQKTrU2Se9Lr4MtqbKMExM7F1npC8bGB8LfzaQXZjx",
  "key4": "4zzYSpVDyMVixKAZndZUmWaR43iyApWiCsCqF1XWbfMN2bRhaLh9HmL5koxhutydaR3c8rMEAhiAdvKYA1oq748W",
  "key5": "ELai6tsDUTS6hcUSyZeY45dNqVBLGnxdeZa3JcAEkgMVhRHvmyRK2CHCJ312uXnbHvzAo7nYFfSScBLVzWt5vSm",
  "key6": "3m2RC7CJPWWyy8EKMKCRRng6prLLgW4fbwT1YkNY4L6JpiGfzJ3SR8G441Nh6CMbkQcKgz3uJheZ5o2VnhzsahS4",
  "key7": "2z4r8NB5GRa7NpXvRZPrxqkoPQLomaq55mV7HUcwgsqqzqTnDfTcdFEwbyyVp9XorZniBeLdDdg52WH2sGAJ4Csd",
  "key8": "3goJfnn3RbL2bJz6g1Le14KTvgwxLLL7JkFh19SpYfeBpAyVT2eiChcGGnJo54tAfoc5WN3chGNd7me1WfnV7FVp",
  "key9": "56WrLw6tfF5oATHdKEUQdaCZoy1SMzQoGFgZGQBrZMe7mH25GB854aaQDepTvkXBKLVsX3amx98cv7WP6PZKfmYV",
  "key10": "SAZqxiYpCCk7QHW6TDEhaD3fGRoSwxGZ9ryHSE7zzwNpxjf5FauHgkLQ88mD29h2oAiKHB5FDHRefPR5PQUfnDn",
  "key11": "2MA8iZFCBfr31MSk6WV6kjWiYAWNbUCJ5avDbnS2JymT5FDRRmVccDTnaZ78zMwFEyDUZjZYNeqcJuxpVQsHCgS4",
  "key12": "29boLJvuAtqcPL1dujnnT5YJkP7kSUjyZ6RN442AC9LWU3yPgoJekHr3bbm8LEQhokCvPdzzhhgKQZwfNMY3AnE9",
  "key13": "5Ho635tERixPJSNcxS45YLi3uoNywznxvjJ6wrchwcsUVTDTXrLn6foh4kJ1sCBEu4nwEzLQTKA6NVkWpDCT2jfJ",
  "key14": "24xHzZPxKxAjkE36zrTW2msnoPfgLZSYqAbCYZRiSrSMudnnyLUZBLZ8RaYv4sJe7KTjzjLBWfNxtvrKALLfATh8",
  "key15": "4MMGcxFtmjki9n8bF196C94XD1DTuQZwosoereHa7k6hjuAenFzLQRnqJf9tMJ9UQWP4ATDDBreaVnULsVnxbMDh",
  "key16": "2tKLg24yfRMUMZrvd29gJ6W2s2FdaYjnYKf9xnrP6iyoHM5bYqraCxsrVYN3gH7rCU3LqDAwGKFWjHDJoEKUxW2x",
  "key17": "5YudmMkyxrR7kTkt7xfogeNtTzbVwmHa8FzdGuRUjHiVdgP1mYsoUpkzRAUpxzjTJTYB1k2WZssxed9iA9XZ1YAF",
  "key18": "2azwkkwWdqtW7ATbAa26xVefV2yVsTzpA4njAhy1LPpEr4sAXJX37TUdyh5XWtFLyNbiTZkyAUTragtVMTm8mH6D",
  "key19": "5e85axw3uyYM6onnSYUGRy25Eg7w23ft1QBXrEa2cpnvFZ4ZnA34Vg7UWR6FsRaZXjpaXtbTVefbyJkWfGFJ7ZhV",
  "key20": "4KJsabfrkVTPoaoaNQwGoZ7irKkcVQqhVZ9dBZ926h37brzVZynnhEo8HBEdweESTURFf159x5mh655bd72sHrWk",
  "key21": "umRB2MM9ya9Nu9xgjqBU97bGAYrQ1Yi9q7DxSCFV83WqNc5C3QBKRReNwkykr9KLdR76MLg8q3ELDovt986T9qj",
  "key22": "653gKmyNXniW96ELBo6U2Db5CzRf6H7o4cN4UNjowEcMN3Vf5M5BrCSbKoMV56W1EeLJrP2PgWDYSdYCe34ntayB",
  "key23": "5TeHpjFNToAgTScupiWjEWNebjb4vatMsJzE3aVkwcPcnkWr6e58NfKLzJ7GaL45DHTHbUzgHNmZ54YwvHrWixzU",
  "key24": "2a19XBhb3NonNBgquG8bYg9JmK4zFSKtkV1QCC91UxraencVoGdGsGdJFJx5n3DYwVqtzjZ8yE5k4x2ECp4AEFCo",
  "key25": "Zf3AE4VyRU5rdBRWWM8DNGrM4Y7jVkMRawGJncLWauyukPio1KcwYzUQMgksQcLj87m6uoPnmZYQawCdEKqV4BV",
  "key26": "26cBjNkmhjZHbWq6x15eiixaHUg7ZaCXY1kWx1Sb3nhF3nipJ4GbxqJy69qu7ZMhVBFdNZbR8J6u4rqLZx9DMBhz",
  "key27": "4kS4bUxeg3MEzTjQLdJCCr23h7CXarFet1vuaVfqNNvXZrhdPs7aspYmSydrjns9biBvAtmBtsoJ3NynQVt5C5bw",
  "key28": "4KqRGsb4BZWqjb3Y5N4wQ6qSp5Gb1ZHppqVc3Pzb7DDtbJaTpAV5J6XAJcAGTma3B8xycH3oV7U9jL1W2VrSTxb4",
  "key29": "44RkG3XD3asJ5fMeBfZnjYDBZAxxuVq23DtWBj1dfMLC5hA3GHc5bpAoScFnhwsLEHKxfaGj23huaQseLHmRjoad",
  "key30": "5YysJoscbzQiCfggPuDoPVxNZy3EU4MwTDpxiL62zV7rx8TLCqBaGPnVGx3vF7HWHs1ZsBqZ9QRRuNzoKFQBsfq2",
  "key31": "2pnq86a1ro9SBNtUZ1Tk9QUqitWi2mAyaUFtRnYpzRkYcX2ef548gXPtnv8PDJi3YxdTCo4Ko5KrZtJdGwcLbTi5",
  "key32": "7Z4Cdg1BjscMUoWSswWrabG8m9RswiMPMezvf94knKLfp7f4ZMg9HxTpG1MUSysTBHxz7HXkQgHWfgXNpuoHLiA",
  "key33": "4DbRNKGT9SBMMGXU7i8FkDucZjex4cpDmuZxUUxamKZYm8yCeDobvyw6uUJcTSjN3QpPsF5KpdQVBM8hHVGmBQQ5",
  "key34": "3uLe8UvjWQSQFFUDH3UhjonG9g8aqZGbDHjcDY9ZUoMzNRdMTboTs7ukBxrVwGeY8NTg3xjPH1UNuzH7gYxxqegr",
  "key35": "5itQq2koNpnbwXHtArkhDc6b2hgRrgJU5FWZYDagYbpFodhXqRviMLr2k326SaKRLQJ4QiUyDgjaFeiWQxQny9s",
  "key36": "4WXxMz3gZ3ogk3NBehnb4gGu8eFMZCJtdgbJdrc8vwc3JykCLCULFxEYHX5L1yL7ZwtW8Xqc5iHUP5Y4coFVAZFf",
  "key37": "25zPmpGMprPY3FtzdBqM43Hv2SY85Xf44WRJKcw8P8nibkGyVZyByW7hsfB2EVqt5aCSyxaVKFJw51q3SUyeQ6Ca",
  "key38": "8xUeNgJu7kXZtnST3NjvtbLiSEeN5vBvLGPfxfGfkuyUUJcHn5w5FXbXpvMc6paxsgLvLAaZJ9L7b229BNHTMBt",
  "key39": "pgZXdEnGhQC4zeotR74CAdfUR8cgDvqHJq3DAgjkCCKpF7nHBHGyq174TWruXNc4TYbrgMxonv8a7rNKumrN3Xd"
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
