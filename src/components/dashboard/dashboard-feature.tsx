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
    "56YJKeCXCoSNec5B6EiVrVmjMFzMkSS21eTxLb78YQjXSrSBokVJ1RM5jUqkXKLJbv4t1dBcmjwDATnQDE6TWD4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QEVUazfx4SBTScxVQ5ez3sivB4uNEkNCoye1Y8WjEzsXUYAK7XbqQV8nNFvcUt89X8PMzbkgRDyLqNErNGWGLZ7",
  "key1": "3gpg1TfPnqp6Q7ewroXN2wuKZc9oQkKJJFqrqz3He1fGLsoK6v2UftfGfsViVdny8yvJbhw7yubMqxDiXjWSSHva",
  "key2": "232j9iThgyVUmXq59RtzTBPuM8vKe7tYWztgD3BQwMdprfUBNWYJYhkznAszKQMexmX3iGjPBAd7EuwjaNU6A2PH",
  "key3": "4rSnXroM1s6uFEXAsAAdZGyoWhUW6Y9P4ubwoGVbTradyEwAQxtwC9ytknRsuqhvJn4BqbNoGArenNot2NXyJVSH",
  "key4": "4STj4o95MUMAB1DAf51LT3bAnn5d4noZzBsK5Ytmk5zDuQP5zmj2xoZ2sGscz9Z6CCMEcPpHAjYCjL652mUyHbkc",
  "key5": "5k4BZcxFNEXzEahH7fRn3BWLdFg6de83No9MPySh3PiZnX19t48aFtxd3YZru9WeDNq71rN1W6AMHN46Np1kJcXM",
  "key6": "3feXbHs9vBycpNVr2BRf3kFR4jfQr1Cwr6CwjywBwiVB9GqydoTfrXKAtkZsgfa8d42S8RtXFimqgNBi1vshgHW2",
  "key7": "Y8scGPEUipQ4YTY5Yh1LvkppCpU3joWaHWyZjZSE3rx29Ho9MdvotTB5e53yFRiySAkR1BmKVfrTgGqfnTeEkVr",
  "key8": "3ZxHZ8zFLJJEeHf6hKf424uFtQpMW7sKinggeaHzd7gLsm4QC3bkf111JdHoUj5cfs94yVto2uz9woS8TYwpF4qz",
  "key9": "4L5jDV2mfA9mz1WoR4XXHCd72MLQ4fMPiLU6hm4WsMxKW7Sz74xtBHJRCjVbatRtPFbofaAzY2xERWijGSkYJ9sQ",
  "key10": "3xRomvX1GcUxaMa8THLy4MFAejRS3LSDsxykUYcpCw3ryoFvG5mM4YVNUfNV9xoYx1N3DB3mm53FvU4MeCiyTEGT",
  "key11": "3zHF3zbFQ7msB22wvK7cKZWF5tfWJH4a4aJsLdzRkhf2vR4tgD3F3enDwDv2EZdw96TB1s3m6ejgubEBtEzgz7ZV",
  "key12": "3akCP3R26ySjod54v2MgtYxShaGp1ozEYjy3aG65TsfSfGb7osoRyrBsHJFYyv1w7Rm7LRkfqBkEgUCyauWi8XHE",
  "key13": "32Wm7unKtW4QTLsqh4a1JYfFK19rQBxFdtfBbetjvKribPoUHXeAjudQRqgUBWjg8JcsG9GKCX3UPoDG7bHnFZXb",
  "key14": "4M7sRLXsxYFFPV2r3QNZ2P2s4SXfibVMz3dkzMv2hMbTX9e883xCTPLdtdsZGHubwZ5Qr2dVJccSX7TcPawoudh",
  "key15": "3Ry95NV95mTDFyZdTDaHvLKhHczwSgvbMBCPshE7ziRARY1zPp9Wjd55PaooT2ae8HzgfuUtiW2P8j7JZSnmd4Gx",
  "key16": "amTfYN31AcJz2vgWSQHPSbG4LohDmBuLZSXA8Ur1oymy7X7gvYehdS9e8rN9Tqwg8SXVzscmDeWTvcqnarCEghp",
  "key17": "3ZXwWSqjoDZUkv8nxJojijsBKPygvxtgWibvkLA9xPjfGCTuiD7b3C9nhJF7fqUmmLTJAm2nzZQYeYhnK15AVGa8",
  "key18": "2CMvWHDjjYNqqNLDACwNc3KF1H6SRuNGb8Qi1urCS8K5Tjvu3kaFDSxVp9RoB8qJP9adwZUYdErZpVx544TwTydS",
  "key19": "4W7oxw1qnwEezHLQVeb1Bv8FfatvqBokrVBnxTU2h6NjRC6Mvw2H5tDbLzT7MyS58kN6R8EqtUDV1nsN6BDroAfd",
  "key20": "36aXgUtc3fwHECnKgau2Drsasu4gv8EfDs2zbwpk8LfKoxQNtewd8kVQwNh6yAq1eH4BJftemfqG6xybNCUgShY8",
  "key21": "3W5qYB7pXkfWnjw3euKYg3CThzgdGQiR3qJK5NbhYsZmwHfGLK3XSxSmCUa2MBeGueVVPzrbvRazUHtQb3EYf6s4",
  "key22": "24n3aLiDG15TVzZL7VB2SwQL9gN6G81cGs1MppC5QTv7mFjha1dn3hUCwMp96EUEr6JxjQa2EYZq8FAgPHPGfwAq",
  "key23": "5vbW47RS54ubZpN8UexWMaVQzjtuMTEPcsjVHVjueGdRAtQNSnM5XWAV6RegwDqfSmm4mcjW1qdFQTDQR4YQmutw",
  "key24": "5kuEh3gVYLHw3pQaSRDoMU5yA3ABRa5XA6hnyBhSJwAyKj2oD1hymNrHhbi35Re7y955Ssrjo7UVD6dCg7cxUAfV",
  "key25": "LvYVg7Svunh5hFrx6yXGtTtUwMtj1XerzPSoopp9bPwNPxB3u8BeDabJp71kwrVWdhtAKZCLnrsWW4Emp85rb4R",
  "key26": "4BKhfgm8hyGvehcXtge29GVqohQntuFDa2DULeXBADaZAxb82Pmu9TUsAjFkyoHKGCeZuUxWQw7L3jEoW5Xispoo"
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
