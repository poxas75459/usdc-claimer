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
    "9KHtszL1LGWCAmN94rbMp9ReDG5QjUGt1FFgdLFzVX58MmdMrsc2pKexAPY4gb6ZhUfvx71Zrk5KA4rdK4UtinW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mATTLq9NcddGZuiyyAcwqPhoQcWJWSajUg54YevNfMzTqaZQoJ36GeFMYLFkeebJh2K1KykziUm6E7JyjmCRV2K",
  "key1": "3btoorAF6Xa2aaXLBxRa4dCgfa18HeDEqoNcqpF7GgNhw1cuDQYajwzVKWRgUcF5YcCGeB7uR734DS4t8pRR5zxk",
  "key2": "U6YvCUpv9BvbypwT4HuhM3Tzv3cXfSd5fyHKCE6Mj4EuVKDLEC5ikM6LXW8sJPm52gtdGVjBp4hV5PAsyjhQa7f",
  "key3": "4hwXhsW9fqmiDtYydYj8dMtZJ5oPtDvztW68VHPYerZfpcPbm6h7qby2veTNX8CpYSCyhjEH1Gc2tKBZzSv8uAMQ",
  "key4": "3oQfKLcHsN3e5v1EoQT5umTrnPs3RZrseNKVXRmD8GkQvBTmi8NvqK8FzfhSt2EYoxXYS6BvbWbvDDr8xCpCcvQQ",
  "key5": "5vd1rRb6B4GvXoLZNZ2zvbDYjwvoY1949anvELUrrPWkuQR7tToVMeVPJxdPDYBssDwsBbnovPC1k1LbECAxRSVf",
  "key6": "3eUMochvFn3fMmRzLybvKSxwh4dhMfb1cN7XqaZSGDQTdb5Jvvsvxc2HhVwrJXeLbQHqU59gTGKFX5hNLju26MaG",
  "key7": "37Af73S6gdvaTGP57VRMBVw18zLCggd9otVSGKgJqpuA5YckXEQotZQiH97qxEL1pCZmacjrXzn64pv8pbkTnoxC",
  "key8": "5o6CYcvkXRCkAMHy2HXAXbHi4cn1v9mK7LDzfcJYWV5UW149LdrGKYypDmM1SBCRhWY59yp9stB6x5X2iEj3s9KP",
  "key9": "6254RrL1NKMfLJHrXUT2pcHTbKW9EmeJyqCNKvrfpbG4tweANzR9NP7aE7jBCjnsrivSodyunAPnTo3iqaeV4nxf",
  "key10": "5Gnsk4KhX9z49Rih72eMKAvuVKdAqsWBoQppppcuB9YmDJPsD9xowNL2XDdEtNWrdjaXxcFMHMhM4v35H4Ec5FAb",
  "key11": "339pjdrVA3wuzCQehVuzejEDsQLvBEbYSB4irpvXhX9RJj1gMHNgzRav9Gnz2L7DMW7PKDm32RpzKzC7JtD5q3Ph",
  "key12": "5two2QLYWKrudqxKATJLFkmMMXY1jBcnP78DKayLQvoU35VweM7ksNK5M8QMaFBmzgQU31VjCbPK3asUcST5nUqQ",
  "key13": "KYqcLKNxCpt5J64UY7LxcnFigMHu5onWT818qv211LJ3aFGKvA6WcQVHQviN8KsPMyRGy6MtfiFc5trLeQSTBQr",
  "key14": "L1qWvypWRAgkkEqkKWneFe5EHGLvXgnqePpJSDgtaGiq1ATJCmvbrXuFLwnEibB7m4d4RtVqgaLGCnGPaT7G4UU",
  "key15": "2sj4w6ahCAP1zgTmVwUEU1Kp7UgwrosgaoBwZDVNagS45YAEMZS1MmjyAxGMXL87sVknR5FAWVQqxJ9cSMUUc1at",
  "key16": "3HgfMPWnEsKs3MrvH3mXttYQVzpn598nfDEZkJNYzMKKNBWkz9upDwxWCtfkrBKTr2D2czxLXgLe9gVTzLHNVXHM",
  "key17": "54uthmRmZiB42FP7RbJrLcYVtvwF2SyeSmkNtgk28hcmEMbSxwd384UHx4eCA1XK5LyGMJYWPxqC4QKmGFutmx3S",
  "key18": "5UYY2t8momqHAQzYWzbufvar1ZCqLKrrNPYwFmdV98NsHfpupcq3WSnHv9KjfK3TcPLxXvf4dUpbAEcCqLm2iYgV",
  "key19": "2BvzBwqbXkByNa5QaLFPTc5dArNw8TpKq5m3o7sk9wwq9DunLC59LWRGfTNVzZzuFwCYhuXTnm5fB2uByZMKScxF",
  "key20": "CTUtW18KBrRJz17gQUZC2Sa5wYNZXb9EtHwtJjLzsamvdsa84mpbn4KZy93AjM1php7zBjjrDJuCnLwoFqTP1Mu",
  "key21": "3XkjcJ1VaqxPqBD63BfhSCb7DpFcxKP5TkY4746TjKi1b1FbRM9pX9DdHjE9usfHCaRQSFigNhjB5K5RZJgwvnvF",
  "key22": "4ttreqsjhjxFJg6Q2Fwej3q3NSUtQmSshkNo8DTye3vwJaaQxhPtAr2cnpju9RMFtJ7Wj1PN5QEEuHCQ9KyeYcya",
  "key23": "2UQZYTc9Z55b6j7NdjGNUJiYnnKn8nQa4pKbjiQtPcrHkMg5D6YZgUsLbUcHt3c1aXj1vSPh2HzHVqneJDUDtKG6",
  "key24": "34tCVVk2X7mwPgi2jwciky5pDEnLU6dyFqpVr54sZVoJPv3Ed3QqdQyJLty65RYcxTyAzwuLf2fY991UMgFBJB3r",
  "key25": "2N6gdz5YfkFnQDtmMV9MVsMDMvRczcq9vXgim3YyBAPFY8FvsWwx2LcjQoUdE33yD8bs9KZbaNSdmjz9hKH9zXMn",
  "key26": "3xfDW5z858XeJGGdLGk54U75ud9nxRmpgSbmhvvykn3CcbySRz9juvK2mhTBRg5cw36YFELW8oCpmJXuWXZAGV2u",
  "key27": "2SHPC45VpcXdNRdBb1ddP6HUWngUQ16EGY7Vuu2MJ7bPRYzutV8z4qNXjsVTxLXcYcWoNFvkvnJkGf8nAsV1kUpW",
  "key28": "2LYabcFEwRigtBQ1mrHCsGsLUqUj8ZZC5gJCdHtcLChxgpuzNBNKGV7bnJRGkhNorNqHregfcQZCb21fD8rr1FzJ",
  "key29": "3g4efLf7wbYW9ethekssxeUbrHEFpDVhi2dydJPod1u9Bhh7ryaYfVQX1f4eqRnqd1GZfjJzfp5PzNH41myy54oF",
  "key30": "4kmAtiFzLF6bUWiicqnLQARSYJS2XARKG9GHDW9W1Q8wszQYXrMmCZvifkoZrqLSziTE65FzjhJquYyZgAGraq2z",
  "key31": "2BhYEUPrWBZ3WnL1fFiLhziyzMZJ9Xj7EdneJAaAj85AjXUfWaBenQJbUvTFGhzmLuFdqUXxwKNfa2C2dFNVjjQG",
  "key32": "2Ng9qmh3g3id81dcrGXk1hJMCUnmZZZWiasLptc2SFuAy6qvQWHxW1o71Ty91JQwnMiBcNE3MPKbxv5bC2rJmYec",
  "key33": "4agfmU7AMn3WeSEohBg1CfxKGCBdVQuj26pCLcFZSWctNsamAdWVwBL4vZU3YLuL7FcqtwAdtsCS6BV3eHQ8uTjF",
  "key34": "5F53wYXzGRgs3ywgYYEKctdxo5r6BL1ErqxSMajfBxfmMG5ynrujn9PyLi54VuzSYQwHVtMBivNt7QvaxCWgrCR3",
  "key35": "4vfiFLvWqurxBxMrxAweLEs2ShBeTt68KkEmug4XFempG93PnmVh8eTYBauRW3nx3bvpmofRP44vW1gjdfQFoSA9",
  "key36": "5fAex6GfDwn9PTNrcrjGTTv6dGUvqfzgrAPwPVTA1mU52PiDkwCjZS81FHdABiorPGRoyBQRTHY8xa9uwYKVMs8R"
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
