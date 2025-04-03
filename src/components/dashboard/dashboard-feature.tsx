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
    "2WE8Sx6x2gAQxq3RnapE6gZBSHFD39mVuRyMFzhGohP2xr9GR872krE5WpoRfBL7K4u497qUZMTtBHXga9xsMfdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LqrE2hfqWyNV3wmdWd3DDg5V3qQhT7DUzVVpNUAprcSnJLC1meCbHZjWLseRfyfiYhfGsAquq5FyNaBcU1y9UF5",
  "key1": "u6nzYveot8g24Ec5X93PrgoHWzmMyZddqgrUhTYeMysE1ZMwgnWHWqFGJuWYP6MKWRD7tziMrZnF9piPAtcrz1t",
  "key2": "3MtXaWWk5JF2WGHJfD5RNBQzb7ds2fG421UJ8aj8r4GSW8oRfocXu8jzD96G2o2UbaAUnpK8XWgsKK8wZPhtA9vo",
  "key3": "4bPXFwpRRZmiXHsMfhFHaSUjzzWmEM5wNcKiKSkM9oWc1jaQ36KUbA27TQHBry6G9gomk66w3hTKA5yKvEmbbuca",
  "key4": "5oBQ1pcvcHyEBHF5daBb8fhkvvdF3CsoPvwiPNhbomds5FNgve2yuy9buuiCvuR67kTfh6YJ3e8TwnXEyd3EfDns",
  "key5": "435y3gizz6iF224uY4wiDvSCNyUDDqJh2oCfTKpuAzPEe8Rj3bQc639JUEQtMaiJLQEF7AoxGdVnY387cxXMrGxm",
  "key6": "DAw72sxVqMuNsyeqgvkNw7E2W3uqn7YBKKvb3oubF223jL4BXrceQzr95PdZoa7cww72hFuvfxsXBrHHGdKBohA",
  "key7": "2YdCktkM4L6CFSxeRuMsRgWxqwY3PKTrCXEGAqbjtpRrG27YgMUoD98c3Ex1f9mbmN55Bymd1YZX5ZPv7GcK65wk",
  "key8": "5SdKUQC3DhNVEwshdagpVPtjN7tjQTN39H1WUMtvTWDRtxakfy4dDtVceWJfgWZEuDbThmL8bXJFZm3D3qaguTpw",
  "key9": "4cMsvHwsNiBRNKJ1irBRTshTr6qBadHi5Hyt8h4MESwFVrpX8RbqDgzB5nCYD5WQLwKMqpMXpVhxVQWCbQadvoxC",
  "key10": "2HVtSEwJcz6mNPBxwQgfSr4j1BiHiDDgTpZCUfJ7ByWbKUVyinJAgCp1gNFA8yKLE1SwEgNkAuqJzNDkhT4JXwZ5",
  "key11": "4ZwmBeJs9qehpLNVXcvAkTnkbAhTNanF2NFB73gymbZfU8L6dnPftWqcLEDZb4BaDtvC1jpYLQk8VFi868FuHm3K",
  "key12": "4KkTByPHfCRnAnFTTXYNc2APvRMrjNTqSbJNm9HwPAsZCeSDmD9AV9xrScnF7PiPHEeSRpuJg3vjHvd16e5V95eg",
  "key13": "5NLvkhi87HoQdMagppVzGunhtHKEiYqieegZKUcYmXsotmue9DTy9V6QfwFvzhuEzbQSqxM1SNG7BCGmhotFq9Wq",
  "key14": "2r6HRMTbHjMTJRPMfXYRYD4WgD3QiGVjLr5dJWWzhBxpPsTXZCqXhsBgzNZcjR3fLspaP2fnYDXHdmVkkQNprMF",
  "key15": "51a95fdnyvhNSSYB6QSm9nbmYKjujx9xuLRfwKsvYRukEFP5SQd8MibfVps4FXnUozvdHD1eGvz29hzgpHfQUP1h",
  "key16": "3nehBGdJdzs7txKDoNm9xJqZueDTL8K9vsfj43UmotiNpFhdbXUJvqePHWcqjHGRbuDCotfR7Vnq4c3BRHeiZE6J",
  "key17": "yW8ceSwTMqfga2NjpCyixf1U81UbdXiKfvhPVmDD9xZ6fZ5C5ZAmxUBAMgHmVV1hC4H6Qvm3LH5ASu47WcfFDRr",
  "key18": "HKAQTzynd3wgXEgGpTX3RNwW1JLhTKaqDKkB9xJUtmYeUfqhzEFYD2ENxQJ3v7iRhjWX8oKauCwXMbxmduUzy3L",
  "key19": "5FyYeeKq1WSsZHUKzUq6siQQT7hbENTtajRf9d5FTgo2Ti9iKPUrFEBsGurJnCoVQtfQBCE5CT2s9tu6VEWhtePV",
  "key20": "5ypFiFqxEq7Cts1tarunmzr4ChtRg4sXbKouP2veioBGCS4Y3vW6AtaaBMTvGHzTjVDb2yJcp7fJ7fXrZ5G4GqZF",
  "key21": "5Cu8v2sobYiteadMcmA19JukvvCvx9WjuJJK75VeqLXAvgrp5U77baj8agYR8AoxbporJtmxY1ptWTmKFL2WRjkw",
  "key22": "2q2YzgSixoqA2dwNGrqgP7PxsPd5up8NaCqrKoir2VtLwN5C38BeiuvJFMAgdh8oWrL7PV5gi3xBubVHRdaWDZDM",
  "key23": "3h4dusmKmEVgWto6ZXYvsSi85LVqQHJPyviYFHFkXF3HwBdCYk5QtcBP71tH7NGkhiLLywPjnDs8G3G4y17tNvGo",
  "key24": "2pw1q9ZDmQhVgVTk9zgRQYLJpYhNeckNA1F1f5wHPjgY4nNyVCtySdLfhtWdMZ1MjLQbBPfpufppX38H5MisrTdW",
  "key25": "3Bb3dQoPcQ5XSyWdx9sKyqG3o4kSinbmc4WbSiqQSpf9U1URAKyi1XDgVihsNRfcBhYJGWJLR84JB8W98gnz5Dgb",
  "key26": "2MqHEjWGXSYytvcxX9GsaABJrPu15e9x7tW5XsvCvrv8Guns7CpG8EWzyNNxbkLQJoKg82UWbMvntVNM1jSdX63R",
  "key27": "3HVXYnRoY3SvMRgNDQm3y89FzyF782xLANAcuvpUUYN6YdNK1C9ZGvDaqWm9N5P6GBgSdu8VQvMuxMYEGhMCds3v",
  "key28": "5MwQjgttqTt2Tgaf3ntZ9xqNU2XXzSvXMdqc4pbvMKzDzH6X7gkkapYvL7Y1NvJznDagqMQmmiEf3V3YKMBYG3ex",
  "key29": "4QDeX3hEs6nkSkDVpnQSsyNfGrcumJv1MtsnBf3ewVHTeWoxSU39nmCVehLPAS8uvStEXd7LgdP2R3qrXfeUz179",
  "key30": "4bVQSdYghdHmDotdwxHNmn322dorCnYmCAtLzfzChfgwW9hwMUid3kCbQTBVwnueTA2rwxmgCpCzy6rwWcXwgAEZ",
  "key31": "q34a62w58MMwKLHWP1d8MFc4yNwdh8zvnVLFXh326uC8Bgjhtw44H7i9KfU7cYMigcJnTfTKXgXsVEaZLoH4Qnu",
  "key32": "2YScTAoGxLnwQ84bzJBVPypiaZPB6RmxKQwTzzwqgQk8GzZR2gZdAuCDK4RMHnm83evKRTjfTeBszbMvYEoHWQEM",
  "key33": "31SDh6SULSQ837qTFyQWLb46eCCNoanHY9qKihQ7x4XrwCkixVzbCyrgiUbSe3ct8nUVwFLEQ3PJFiBMKRewRkcE",
  "key34": "5vzoLPCTE8RCBnVqYAabzZo1k73WMWcK5gfThMrVmaWJPEowTVhcqkD1BfajEViigh9E1Bk63qXQESpzwTRJXkge",
  "key35": "4F6eVMEBSosENZQBR5GXdSFTBv1XKKyZwxrJ98Ea7RtBHm2MaXPM5enz4Zqgq1JhZCC7mPuLmir1gYUMRLPzdkWG",
  "key36": "4zHohBkjVUyvh6aESpxYNzhoSc42VjrNZ7zVEer1f8WyLhNax8D5x9jrCtLgJhW7QcbsVUdtoD7UWUu8ZmZrbfKz"
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
