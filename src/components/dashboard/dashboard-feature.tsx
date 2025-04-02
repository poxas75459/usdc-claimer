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
    "eNSZavqmJDGuhBpfBZHdVMwcEDJCr6Mc2kjYq5X6d991QrVGk7S9vR7WXEa6yeXs4idpPZRKYn63k1hFRHjCdMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zb4BQAkQ7WQ8nWK7qoYvfFc69QY9BJAmdM2AkVFSXVwV3A7gYAiiKsTUsctL23gcwFwmjUafEwgh6SU8UDFct19",
  "key1": "dsYygD72Ki5uMLFQPV5ZLfziZsY8f8Y7Ga6ZvmEwUp47329352fBQMvEYSyjy6GSdiDJEtbcisKrhsCz8WZ8va5",
  "key2": "2BzzdaxQQgHJQEW5Vjs3iixAynibZe5c9ZdvnpcyYGMC78ycgRHBrz4hoxjF5EsSK4owU8y8q8w3vBQaCPUzrggB",
  "key3": "34GhgHBsnhf9oDSJQfF6rd8ZLyEGP1ip86eB1DDKsyoNLcZxdfa26RPMZHdRs1pdCXKwLxucZANaZ1f2D2berh6f",
  "key4": "5kerZ5jJsHgKxMyUdPruJc1qEEVNi8oqBDsXSTnZzempjd5ZH7mnfZBbeHXheKEJPRGjL3icMQQovBfm3Nsm9i85",
  "key5": "EDLNPyFvku4WV3jfeFt3K2rFXfUinrA8cQVqpnUqcNMAcBqrqNwSWVZQz6CgQ1mvzpsKg7yDqyTmMKYYupJ7k5c",
  "key6": "yqyduq4dmmSo9HiVVSrGygG1oSq9GgkSHa6wWZoGmdzu7J33Nxv4UofeSAmCQ3ydAs5bw9qeGz2eKw5CSvZeb6g",
  "key7": "47cHMjtb9ecfbQQYuPNubtABWmB85Qt6QgsWv4zGU7yDHPs7iZmhXNAFVM9BGh7b1gDHXU2EPtu86JzenYwQhW7r",
  "key8": "4K8TUBdnAdvzW726apxNH5mLS62hQGCDNLAY6RfJyMWLcjcVuvLLSv18SbUT1UkvaeEaCU6GEV8SvkaTX519mLrs",
  "key9": "65xbHn2Wwxvs4VBWdShyG398BQp8jM135ZUubYKU3ajGtdANqYEf41yE6g1MXcubwUhfpjikkzzCQMoWziAZeJQ1",
  "key10": "2ciSqQ6HLQPh14Er5QypnryA5fMvd1s2rrQkmMvzh4aXDCQeE9Tz2G7kEpXjEZK1MtVoSysTYNwYCvT29gzzMJN4",
  "key11": "2mvBpkLvy8udZtbv1rrjfypG4a5yL87qmtn2qBhiJrjbnExnREoN2nmmNgmwk8mxJSzZNJLrsGonzUoPvAMXAtYN",
  "key12": "54JfeD3y91R1aNzUUabyHAjKeRDAmpMJPy3UYXVDCkZoLcbxrDydLLoYC1xZcnwvWKYeBVYbnzZuSpGhYLBbt1Wg",
  "key13": "5eX1dMLBkwjJ8aLbzktfjU1WK7TJXtz2Hf7dJYDtZQZyXHbNR9FZmdytBJgwN6f63HAZiBB3aKFskZX5c9kxmoPr",
  "key14": "2FsZSnrCRiKUm33iKQLeRJ3Mv4Z5cuJeTzj8CdKZcCeLxvTM17PHYd9bQapHbSSMDztqo7ivk6kjFLABqkDWagK",
  "key15": "3E3XfeYxTWk2kvFLkn5FtB9ojESw7rVofAEuMTFad7X2tVE5pR5xHWzorRDKj9QpWZth7dQc3VgcyaTM2f3Y4258",
  "key16": "2Nc88fv71BYCWDftGP1TKhPHrpFX475PpxnXB6nX9GGykaP3d8R1YLJWU7q2vxwYRD1bNnN7X32SwKGqhFbs6tWy",
  "key17": "5fwcmsSmpsCR2o6asYVdMTp2tnUSiifSCNoYGYG4nD6phFPHEf5bXgJ42uwWMo4VkqK2mWgq5KwbriSxoxArXtvP",
  "key18": "2xuDceKKUqn4yjtEZLsDk2WVfrN3EffEb3VYGGapRVgwmthCtD32GU8HZZ1qhQf55an6mCivfTVDR89CKJFYTf91",
  "key19": "3AqXYn3VZefxqRKFf5GiJ77ed9bhNPPrpirP9yoJT6bnLQurL6ByVQPYgnUfMkHoJVP4w6Ff2SGenTYh8t4dAfRP",
  "key20": "SbeHFKssz75Uo4dGGHs9q9qNm51TeVPzwYj6Q6BN45ughAESiFKZu6H46hNFEhwjqJcW3ik53wqqBMGS8kePEKa",
  "key21": "4UjfY3PtDXWwV8NbKNek12jKvH64p6455Yie8jcodDrE4VgqqMd21mARrCz1oFydnLq1C2BABa54uaB1qFUddzRS",
  "key22": "f8z9ZJ8UtojN7hkh1nwhC85yxActi2Xpazv8XcVRAnL12Vc3yHVSftY5LpG5NYjtrn3yoL1vd4rw1Lu8F2cvhYA",
  "key23": "2GpYriiueByW3bSf6247AdBExQXdQHARgZ3NgZoq3PumGhANMmXTvUh9ShdQPQaeimRJJNWqfjMnT5z6pfZuMgnR",
  "key24": "5kAkxSddWgNM8fUXuQHYc1c4xoQabV4tAueScLhtjNSLXHF7VP6mejzbv7jmBzp2CJe7hHFZFqG9qUvYdfzjxdDV",
  "key25": "3LNkFCuXcUkucitrXY4bjuwdop2Ej5fYuvJTTzX4w7ZsaqwduyQaxNyBCT5N48UVVb2uuYnLzaZshWXtKbSsAc7G",
  "key26": "3ZmuJ8funeYuQUtk4i9FsiU1gjcGJXBGH9KmKQ26GWR9Qrrqw28yJsYCgdtadGJYwBRKvU45mr6DVzQNgwnYq5TQ",
  "key27": "uy8Lu7NL2JqoEG5ZocCZM27TCuzExZFGtMdwjvuwv2LVp5nEy35by3qWKZjkdyNNq7VsnSewUxV1acGu1yti1v8",
  "key28": "2Xd4hYpbeqALBGp9EQjUiuWBXnoCbJCAuuNDa1D1hC58a4AJapAZoQvHCGHwuoiWsTLhr98AFCucp9XkpsnhJ2Gs",
  "key29": "3WYp1i2EZn8sFXY61Fxzo2tXtdS7eHxfZohHyo74af5976VKJUFwrTAptphKtBSQeKrH9FU2sdbgWtGzWowvaUtq"
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
