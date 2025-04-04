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
    "5VriuYnWAW9XdVsX76NGX719D5sdE6gkeVaxMgjXapMMHTMukYPnW6dvvAJ7YCoLiGbc1p6KkYQmRAQf3nnAjrtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34eVsiYb9jFyY3uds31kvWD2LxRv2YSFykc5pNivmr6eZfHyBferdGX6PLb35VjN9E2s6pzJcZgTLYHrLX7iphYp",
  "key1": "2LWaaVvXiqvF2JL5hE1jfqV1oha3kjNK76PaB1emgAzzazbxUhSh4XT53QPQEEy5BA8Uo4h4QKVedZKcfUV5Vksd",
  "key2": "ZuaoUsvZ67qS9qopLr3Qpn6vQZsG1qfghJeaLHpPZpVvSceys5MEXhC8HTrMX5bKrMADBWB3M2NpHzVvCsr2sYW",
  "key3": "5bFaFsgMdSCrGBZ8WwMpALVBM2cRVsJFVLf6xymVZ5kj2WoEHSfzeH78XVmaF8MMM2yCuf59cJELMiR5icZrFsCr",
  "key4": "2yzTGCRU1Ci7qjDeRfs3YmFAMKmxYje392Jt3cZCqK1tCpYZeYmdQohhS9tBYHzF4EdpxXdCavdhohc1pVQbV4iS",
  "key5": "57u81smQuT8FNkSUbdGuUZuAt9WEnrNcDA3VSxcxTQkMS5fHgCiGqRpjDqbmc8ZegE3otmma7zt44PaAePb8N18V",
  "key6": "5P33kdLo3PiAwV9Zi6uqJYdAwQjUvmpr9V8Li9xhK7RF4p8xs61m8R1sgU1PwLzmhASB97Gq1BQvJ9JofwivTq69",
  "key7": "39ExSjTm1wHJwzMjcGkHhaJQs8K9NqEPaGU451RQXWNHiaCaohuEr6p4gBTuzrTH5EoNVrC2p3ZskjNnndgwqpS6",
  "key8": "35bB1viHFbZQsSXFNh4Dy3g4w6s8EFPSmXLBXZWCk56bvqhSG38HHKcV4kCcHdCwnYoRHhyd4ik3EdsmwFiQp69Z",
  "key9": "RFEmy9w9faV5oGYhkP4GLabwiRT65iwuTctV4A5xxe9tNzATKjKE6owHvrvZwHPNikeJWaempa7FpWbzsgguUur",
  "key10": "3EC84fykDKHCVWYkgQvPtFUozhPYNZfuYm51wVmUr5W4t7xwkt51s9biDyHGtTAzFG5bipRcJ9aBgrDYYwN9xDvj",
  "key11": "53QRAB4nYMRBTC9nM4CyoLunjzJhFCh4haiEpvso2fPuLw7n3NG98Fa78pFqiPJGHFUuHMRVaTijZB1qGpLJjrVf",
  "key12": "4bhe4LVjSb8r7CSNcQFYFSvnqm38sTKJQm2yeQ3BehWLmY1vPwSuHjTu5kRxBV81bBaFoXyMU3UXesfdsfPtYZk9",
  "key13": "2Pw3VngARUryD2utzpQDrCscGnoEM3D8sWQmPcSPJZFP5qv1WY3BXKuik6MGfSfRcqzugFjTmajczSoX8wi5SYvf",
  "key14": "2Nzrje3zkiaihXWvmBxVH5tJP2iMVTJ4c4YtkLfbD84Z1jJAHbNKAhGcWS2ZZmcktPUBUgCH1YBrQQDBEDAXNhVA",
  "key15": "54VF44oev5hajHtGzHZikb27DeCETBoqm16MtoJ4Br2iRrfnT7eaRrFRhHvc37zfxRCoJ2UyjehgGDNU9XHi8BPw",
  "key16": "3ipGnfyssT2wcBQ5c4Gs1zZf2pPxMjjyJD3y91X8451JYp3XkMPMJgTRg6zwKsMBfnKeuRYoFt1jDUsduA3hZyRm",
  "key17": "5udfWK2yiVQfqmqxv8fZxcrUT27RrDbmiTq6kDwVMs34wX2kTvkR5BLETJ2FPqcVLTiedp3vt6HqpXH2dX8eBXj1",
  "key18": "21znD3fKYsEc1puNJwQUAyfApVexgV28Lg5Xh3A6KWh3cgcZ2tmEZRpNPMN5oW7QAZ8S54woiteR8CVnd8sA4yGW",
  "key19": "WEJVrvkbwVtRGpDPpcEgYChNfzKBWBn4hyTZtdegt1mf7HY55mGv8LBk9c8a3CVEr6c9heKA6WhA5zY3kz4368j",
  "key20": "5FpqeDYZY8NA6hZGyfLBNQfd3PWukKeuVoU79DgjBXabQ3LrKLfm5JAfyXeddP2MwhcnYCxDuHaf7satS4GU7RiB",
  "key21": "5L9zsE23vvGLAh4tS7wD3U6ywfWTJEZdBcbTaEBZoJZZiNkV5SpUUQ7ifVgasgUrw6aa6ceZsKwyVE4BLgapXZJP",
  "key22": "639mwCLoXZdaPft6yUzb4JivxHyvcRNxvNXBU5yKcMZgiLekCZaRCbiWWX3gXHbnNmhFhYBnnoX9a7f7TR6XRspu",
  "key23": "3omDL7gYumzeHP9VzBFWnwfo9mV54BXQuhBbgqpLpVMSEq1QBQm1JfhQaJ2azt1ZyZogXFBnAHNLKN8LhGJN2Qgc",
  "key24": "4GxX5o5BxpTRxebXhLjBUMNef3GK1uKSccWMk3kppQtDaN4Xnb2DhpbAiQst142GwWc8XbUMn9zNPBGUgpfDQosr",
  "key25": "56ZoDKvhMzAwmVu8ahzz2d1XyqX4jokU5sx8beuaQnYvpNewvyRNezR87JVbSbSi3e8B6R5zLNTKUMRrcraFX79W",
  "key26": "39Yiq4WoEYMjmZa9KNJgY3643hER4rpX4cbbVbQssiXmAafEmYb6YFfSM5mkEs8WFW4EVtxtYmDeznT3agvvBb8T",
  "key27": "33Wb6UvMLutDbUHe2YaXTMUbsnGp9U9REBhbRxRajCLxuAtFH9ndTBPSuGwvjGxZLL7mPxJRFkTYLRos8ZXMNKYg",
  "key28": "4d1uTBNC5RvHBPnXQFrnaPUXNjXLCJcpzNBmsERMEYJ2dFmukJ2HobfymfTve2kbAgcRJ9etMp7RGRmwefd4fHRn",
  "key29": "47FS6Crohr8kFSUFYzAoDfzdfRcDwckW8mzVPtEUhAcCxD95p3kRFZSKJxfh8ygvPd6UiARygU63oeQ8APPfsj7e",
  "key30": "GDszZ7pYyjPN7Wr6WSnxGwDEQwsyvJaM36ZHmuiCHKUfwQZKpedvpAQiegkHu6MyFEaJfnVqqCVhjtE3yKW1HHA",
  "key31": "4mMCYNrBXpJcodxfjYSNy2oM919WdT532WqRZkJSj7itkEyDCMUKqAAiQREYuTLrxewz45FkiJyxm64s3BSAPqai",
  "key32": "vpu8WQQBMPF9FymtRRsk3oVRScdvjQC9DFeL1bxUb8NMAyNT9agAUa31fep6H6EFCwPTWMhvkhqC3N5cv8C9tWF",
  "key33": "iwaKhNdW33L76KxP7F9umGkRM6V66koWzXcRenBYd1TLXqZ8TTGJbjwfRa2ecd2ggSkF3n5coSemcvZKD2wBWWM",
  "key34": "2VNsiz38kfqqka12TCBEzScUEwBD8ZCn9RTJhwBi1vEHUx4FjQd8TZFVjkVbsedF5fgs6r9Em6Jm6QK8hnWyvwRC",
  "key35": "5SFNZHZPw7kjShYhfvZgW7iYoa5hqTqsr15aSKjJuLLWdtkHKeyX5ySKzGnxqcYhWm9ZRtJu6aSX6893uhPRCGmH",
  "key36": "2jMDwByeyHYdovGKyRTeqf87qpva4kHfJ5dYVodEFCPZZEcYB96hJtVSd7LRxPcB9uaLMvEBR244o4qYWb7DazyJ",
  "key37": "5u3RWyaJFxV8K3AQgenW854NsJbYM5q56FKnnA7Zs9gVrB7NHu9GREQ42kNz26HmwojfJFBbyGscy2BhVZ3Vv16D",
  "key38": "4Ud69Vxu2WtVWcCmidE6osyDpQ2epSPG1roupBKtFDXiZYtt2FY5k83tzQ58QKYgHdXGNdsTouMDEseNohxPA43X",
  "key39": "u1zCJUf78AQ4CxuGHymVrfcrqvqJkPVQWjMMvKTvMN9E2TijWMgCFvwMEiARALjCxHMB6SRwMemrFij7jDwX32k",
  "key40": "3JqxFJdcy4tL2JKhYYz4SN1zgyhRo66dqN68K3pEGdbjjatmzdmX8V9mkcYb2bHEUe2yt5mF8XDz3cUZcngtNzoZ",
  "key41": "rcWd8euDxD7zDhiBHcB3YJ1RqFbR5UURxtLJKt85QyC93hjzjCik72z2rSomrFx1rW7P6KmutS6t9GLXeycyZ4s"
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
