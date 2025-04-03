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
    "eXExboF1QxidsV8iucihwfZa8xetvjDtFTWWFXgMR9GiMHBEDURQFVc2P2Ugbkdzt4VMGfZHEs1wXRPZdzZ6V7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wSjjcsQvKey63SWuFCBNvSrSJfobK5iD2FCwEBxW62rsWGhzaA373ESagqSmb6hBu29ECGbBssfbwq6TWhEy7Pb",
  "key1": "3Qa51iMto7kzeP9U5ZZPBqe173DnFenK1LGCtv6k6d7zeyNDCWc9b5gPec3qHr5dGFquPTNrmgYNp9m1pAAD9Z3w",
  "key2": "2iWfyxhsDFNm5fCcAHiCasjdTsUsRVNmmAA8uJMiCvFoWXfjWZUKGk8f81X5TcVPYvnwxyZUw5hKMGsqUzkx3Bp4",
  "key3": "DNM5qeLAeyc47ef6U5cYZz8Zky3DRCQzqKRuF9dTsdwXEo2zP8Hqxq9vXQts4yTdsBnEUpLJyWiL1hb5LF1XjE8",
  "key4": "48ipqtWVfn7oZZ3G6iHEH68CUn42uCov3FUH3jSCswqgL5P9KiA9oRT9ssZ3QXfGLC8wahQ9S2Jp5zV8J5UmbgjM",
  "key5": "3xc1htzLTipZvA1thCaqGuPWizQVPBwPeLHbgWrXxat9hSDJyjTtUqH4HFxm6kZeLaZVmUpREwJawNLjYQqnyC1c",
  "key6": "4EkirDH4c3zW8eWBuWi4bmQzspgkvwX1DsaquPCicV5JutShHDr9MhQvBYqGkYFo5cRvxpzzoZrFfnPMeP5Y1cGz",
  "key7": "4zZXnfGjNCGTCvrWqaHkX6SHJ6aSQrXGbehFTaF4BYK77xKDwoYh4Dpx1enVGsS4CNjok7pxLGBTgPhb5Z7hGJBR",
  "key8": "5hxz2ZhT1Qki4NtFR8oyb19rBbxgenCMFZLiCFJkqnCFk7pWzoaVBrnrCCruMALYtVQ3xEjK6zzp7xEYkKUAEqDY",
  "key9": "4NffV1k2gz2qCS3NNEZzuickFBeMZyHixBZSagvX6VNcvMaR9SKRRd6yT75uHhCwZmCKXg7CGp1oHdrLgpZwAzVG",
  "key10": "63o8zXNuYbNz89Wu6MyFW1w2Z3frVyRfPVkFob644ux8Ayh29b37EjHYWGBnsHYXKcZBvcEEuZtnfVMVo81qHK5T",
  "key11": "pthRpkF4kKuH34nGeLGApv5JPTH8Xx8VibxeTmD88Shznj9qVsYRfQn1UfAmmCzeKj8yXTdRik3LeqvRRCYFgbF",
  "key12": "3kadHFF6UcJDKigcVSPFka3KtdFbzYNQ8pzPoru7abxbvMtFPiGma8BGLoyeEWib7bTApW2WxYwQpQnvy9GJ4DXL",
  "key13": "66pCXK9eMHSouMP7TeX7jGzfWHKBWkaR3HvRyFbUWGtVgprM2D9AaGfevJtFEQG3femrnJGJ5L2249LQWWQvSk4M",
  "key14": "4UsDwxHT2VzGToy7Ra7CW3rF7wSj5tzVrz59rFnJM36b2t8xQ9joe6Qp7iyrQM1nwrfg5BqUQ59dR34MT444Rt2E",
  "key15": "2xunSkLzhFTBaRpk8BUcLUeHPs3EnbxEF73xfYeaFVx6bpVXs88He7PhqvoSgrmxitv9EKPKKAttaRqxvTNDa9zx",
  "key16": "2Qerzk8ZJBn7vjPm2V3APWndKUJKYe4AxD8LddoVACzg53Z8eQASE8ztxnjLz1zAWrNLrmCEdDED6b2pbHJnvCPs",
  "key17": "KoP5Ya4XVLTjq9Pi4E6Ua6Me7UBg6cPkAvWgLVEeRvzc5CbMGGZXEkrq1v6YKxGUAhvqoAYdXiVkXmGncfVFEN8",
  "key18": "pMxyyrhP3X5xX1CFDng3HkXdU3uGaV6XS15JZ7rE1KXMhhfcK8fhoPLArbtwZBcqyRQq1g96SRgAaLmB8psdxjJ",
  "key19": "3VTjSLUhqxY6HWETsjpQK9cMegGWEh1TJAnNEnViWeeC6D7jeJ1tCa46rywTe6qiBsvk6e7jW9yGiRBPvsoPKCjP",
  "key20": "EgMo5YVp3LJ1sBn79DXhfNBpkT14hz6CYimTfpbhERf5S5a9CADJe9uP5gDNpfBND94XchBYoP8y3Ww1SPshTTN",
  "key21": "S9fjSJ4bUCCTbBiZnch1QhxJkMT9Ce9zPKtpp2SC34R8xYYCt29e1ouTFrpgKWrwwwHnHZxPUUHbM3uhDF4cE2z",
  "key22": "4fs9kz6tWaYU3Pcv7JXsdzzqCL9DFe6Y7Lh7dyUQsCQpmg7AUG3u9jJPtmLJ24xz5mLc76Lw3mPmEJXHM38MgdDp",
  "key23": "5KQmUZUEe1SseY7VHHJshSBTzaEwmtNhoAkL1GQj2y5L784FpEnSD5KbFBMpyteSfs2AejAuAHzgcH859z8rtJu2",
  "key24": "5b1fzNVTyErjEQ7Vg1PmmKPiHYv46y7wu123Jg349RpZKhKBH7evoGSGyKqCZerzJ7fUfHdUikw6rSQ84zjPWaCj",
  "key25": "31NTnUCjtohbEvZ8j6ofPjr3bZpRWW5YyZJRoskyF2xdLEYeiCStJA7x17zgBo4NBB7LwJ73KErdeeFkkTMhQ8UC",
  "key26": "5tf9wzfRRmekqqRwu9dJ7yWx2oJHfKZV4J9sJZ4veL3ZAY8aL5wsvdtR1yiYxvi5b5aamK5GdcA9Bg6sT36HLtgy",
  "key27": "46o4uwRD7vUBL4vzknX6QAEMUgqRTF32xjwTUHQ55W4N6s5GHms79HXAw1D7pt2AFLaNm9qsfh2Zhn3DaV8bkk6H",
  "key28": "3c2m37y8Ga4LgoT6NzZkyCWxPS2qRH2b43D3Uu3XzottdtDvxohuxxXntuy2UHB3DsZTM1G6MmH8JUWZqZqqw8Eo"
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
