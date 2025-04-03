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
    "5yTCtx2WmyiP2HwjPdNFfj7Lu2rLN37yViwVr85hGcpuFHQK2Ku2p6rHVAYbmiM5xmkEX2R2LoTLquxfccPkiVcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hfCmgs9yoDoqRDk6VFqjT29PtxPAxX9h8pdjuhPpEn61bghFV24GFhjcsw2xEKgELDpV3QRtAmcyYUi1JTj2VV6",
  "key1": "4iFP9WunNueCsTDSvb99yWG68o9ax4mQATVoz7YXQZYC7URLKtuTsswLEdNhfVFGUYPVzfuXj4yYzf4ypaZMdFFX",
  "key2": "2NZsVYs3NWEQkzLhyShCiCDceFqrPu8pLU466m3xhr7GAEQKrALzfbQsY8Fuvyej4m672FWywo4CXNtLZwKArzvf",
  "key3": "govvVkB6PhERKUaBdbQ14SVa3RnLyY8FYu9d8LEaYcKieCuRq8AcAuHsw1SEzRHFVvRkAjpp1RmCp7K51ragSPF",
  "key4": "38sz1DrS25ywc53coTuw1yR9buThQuJjAeANg3zPZgZ7A8JfdEGWRfKbjACd28Xt6arJij4CfHsW9xjFDU2pXaNC",
  "key5": "5PSpJhaqkmbaWAsiVjwBgTmH1M2MJ61oy1gJfDLemrdyhCMSpwUxzmAErsPoGWbcKy1QfY1i6Mh3GC17nFW5prvT",
  "key6": "3n4frxPdxQVoLK7PVyvvSHKycHD75YjekDwFHsWiizFPcoBLf9J6b45ZyWKWe9rwqv1XRJJGmx7Qh3yF3a6st3wY",
  "key7": "2FjMqvNBii7TeH3XDXhBfLqC7VDTNMq8AL3FJNtgGXs9kDXQFQgv1op4QkiiJzkwnRf2qKTUqw6bmskdVCEtbeao",
  "key8": "34QoG7HYma7uuoKwNrAUw6qaHVrSFkTB8CYu3QAi2s8Vt4hGFWDmV47h7CCRSdVuURnRf2ECR7uciZmhMX8jUTzC",
  "key9": "3HfpbZQGaWAJ3MvN84s7osQFZZCQTXJpFpv8GC1mxBKQHwu3WS8fUawbT8yLmB1tZywRFKVHmBdUsXzbRMnsYxYN",
  "key10": "5vm2nQJfbSNJSnqzCjRTfjuBDYEHpPuepxirnP9TbLDjTdtG47j2rBdWNR23kR86iRE1S1WEZ1L9X9t6b7bXsPRF",
  "key11": "4ueN1FST3nbvvmPSJhJxvdcYdYsKvL57A1ztbBPH7cFw3QkUi9uc9gdFQpMvYcQo2nE22kLEmMhwNgmsRGAQ5JnD",
  "key12": "2LsqCKNzwpUncUpFtXzVf8pz2VwjbNhuA4HwUGS5ZqobqgnDP312VRBTZvhHnZgwQesehzdkyJWnzXcUfcjniEt7",
  "key13": "3TnptUWz9TLyJZGDTfm8NZHAUycdFBQSN4vGCgcXEYaskwxPy3NZC81LNU7YVPPCBxUwUSfAuqKomcK2diGQPeJF",
  "key14": "4cBEeu8W67JExPLysPqrAE6ojjgQs1maPbgQ2dh3TVAgVLyS42WMNipCxRUHfuqneNuj5LEoedqYNBvSfn9zmZnk",
  "key15": "4prx7HYZUUKUu31Pqrixy3tik4JAj7yAdZxUrjBLaDvSNHRPi2X9wYs7MSfN3h4MHP18tTvF14gZA2jtGKW1zaZ6",
  "key16": "5vC2kxHxAnqyxcgiStTgk7sjyUjXszWntHSi6rzuyQDLP5JCnK75ybL7igdXPZzmNt7QhJNKkEuT6WDCZeF5Ni1Y",
  "key17": "41s6DLjpsCU5jCAairZz1Y3iZfcao4dutAMSH4sELjMSc4eDroz6ABhhV7MiJBWt69LzRJkVjLWHFhbAmmhKmah7",
  "key18": "4V1vhesfMhu4S7X444tEgvVoze4awyhXzvr6guZotHyPGGKdGHGK4DjgNntF1T16wedb8msq8Zin4zorQvFu4p3G",
  "key19": "2pYiWc8R5o63J1XSZL7FvqLDSmRC9VHC6HiosNwSYrUWmZHkwqfmZmjs8zZbY2ka4LSNHAwicVo7RLX9RtZxRuq4",
  "key20": "4U4QSnvYm2odS6AQBsKY1KfVFUeDRvJfzQUW66HsmEx5uJM3D6wbtdMWWvfoCZnx6TDEeTV7SdmAFadSV5ysBBYB",
  "key21": "2oXdYPwxR8cwqegWLjjJhMsLcsnFUXNUxviACboFL8dPN3AS9dXwEBL4Kdr6aFaybi5WConx7JCiPnNbYyEhGjLp",
  "key22": "5WN8D5SkdFxyERd9tvuuVS9hhp32WiVdAviF8DQs4Ao8WGRDiinmhLjCu2rAqNTPESyyYwrktDcsZMEVym4bsrdm",
  "key23": "dAYbieM87Z2arAfV8jxSKJKYHfknLbhsKhf9aeGbQvaJELdZRgVRFoYj6iRpdUVRWQ5uxdSYqFEGsjXmUeSV2qJ",
  "key24": "5C4WhKTzTwP4aCdErvyufcZssfCSFZsvgcLbX1xDRunUEHMTVNbFBtoFCs9FTYfdaMrzqaVZFREHpDRzgkRunfHh",
  "key25": "4LgZCMZ48vYx7B2uRum1zwNQ1yfMf7UFkR45K828dYTZiwqiWxD69Ft2pCkkXsQbpya4ouggsEt6LvhDxjEQX8hK",
  "key26": "5k56AXCqzoxwRxoiLeEhCJBjD5QVPvaycGEcVT2UwLLNGuQg3co8wbfUYQ9mncuk56VNj4VZrarSPBkBXBGNu2eP",
  "key27": "u2nTGphDFWanFEPqmGpgerAMk1aQfD93XDjA3JGRX4WYbqocjdjPeZrLisLFi6newm4uzkdFqDqUF9DpXjYfp4b",
  "key28": "gBSWrhN9Rxns6pn8C32faB5yMMfNrJQyHoRtVqYxTkqVQcTBVLTKCTzMJRTmhD1yu4r8FEjY6ZunKcUtajygSUd",
  "key29": "56kQDXPy7TYys7E93nPuHDqBi5tSrV6vsQ79TpiAC7tA3WbssFSzFKMUbRHQ5jC9Eww7xjatrp5NHP5h9TyVFzVf",
  "key30": "5VBzAAChRk2tTkvZQRtP76sS7exjCubAKe9n7CuBNjCe1Qcy1jw1kXLjGHSdr3YK8nNkabWCb3EaookUmrz2fGa7",
  "key31": "3jdjsYyVn4rHLQNnD7usNSM11cNMQDGA6q5BNApf3ZSj8ivDr7kQtB88w4Pe2Frn5CDEcoddFcAi3QS3LKpnbsCk"
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
