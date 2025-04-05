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
    "2PbG2yhduCv4PxXwwD1nETaavgwft2kwa3kiNfa8uTb4JBjpJnsVPTev1aVWgmi6puKeZrLtuAxiW6g59ZhEk5DB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D6Bs1x2xxa1mfQ5NgHp8nMpdyq6R7nmMqW1z7i3ZCmCDzDGwFrKQMcp5gN1bNBAGanKNy23G35LJm79v882EXst",
  "key1": "2VfYWLnpvncmn5B31dSUepwMcWD36GVtvpA3sfZRF96aZikU2wtNSCVLiZtm3KzNrkSibFw1U8CPhNQwA4qSfNRF",
  "key2": "5Yo5oSnUDZeM2dkZ1fvezgcKWNW8XdqyFbcmgfNsf2sbnko7RMbMq57tHtPHc7d1BEsrstbvys6udMVfqyXsgRim",
  "key3": "2TZx9CcgV9Sip1MEA1g5curm5YBFtsyHmfUZgRjTdqHKSeQygh82HwWH5uiKdw9npgMNeKHh1vm5gqewmyWkor53",
  "key4": "UnenRLNSW3vN6aKGKsvmKMiNc4kk4MQa6aG6BEu9Lby2EXDF6hsPCXPi5BBEUYabwGXBXZ6vBx4XTyiDdaUZ6yU",
  "key5": "5ax1EJwgKFwijVY94kj1r4Nc5pmCLTQkU513KNyTNLjR34NRtj87L8Bunb9yDK49GC9EMusnQKmG8eT8nG2ZbWpX",
  "key6": "acMthFpj3pxAJFZzApsAQ4uegiKJYdtNQuFQWvZt6KdrUBaV3mJJhz32UFcuiZ3F9BmBL7cCBNSAzADmwWVPrVW",
  "key7": "5zZAoLhMCtjR7AwkpKa7y9PCuVFpm6biB3ScncE28rC1ZqWZjZ7XoLS3MjHDpsjjL2dLg1ZNXvF7LmQ2YVCjqLrp",
  "key8": "bqsraA6C6Qtdp3QbZk9HJZnATGD5caJ35xaLVW9naym5hEErUyib8DLQ3bR5z9J4Njkds4F6iCLoTtM9FPkzm6U",
  "key9": "gwkiByaQTcxSkFY4xjF7oyzC1MPoXbkKyA2qPuQQgwXafcxMF7KXdnHw1WzdPh2VwLLhPvK3GYiDrPdW4w2fN8L",
  "key10": "3WLPztozNkkdgawgmcgVRNApbS1QdNbiimtGuQeXfPq49EEMCJLKdJrxWn1kQ6YjMGpnpZLk7swPy81kCGLfxsN3",
  "key11": "3VQJM8QCL9w73DpebZ2bGpQtXiP7ni1uga4e9PG8zBq3rSNvjobd9nXw4EiPr4xBMZ89Q2g498NvJbUVVb3msH8V",
  "key12": "2sNunb8oBjrd3s4Nk5yMMuNGC3XjNgik4Rup33NPHoDFWawqKegXkKB34goZKhYdn3E2oQXzFVMoGgAZMfaeB8sR",
  "key13": "2W5iy4zdw1V1np9jq1w6a5EeqC7Z5f2y7Y6GcXhqet8Yom96y2bAzYUVdQibpPbqhpovHtdJUxNZcdU3VHgDV7C2",
  "key14": "2ss4JtB9qgtEVbhQrksZQNEQXg9pQbixcNrSCLehDKQvjjLyoFjxdfgeW5KwDX8mPDzrPj5iAkhtvjkWmFFUeYwm",
  "key15": "4D7nELYscuGJfn9dzWkD6immoqhUPsBHbgGqxVGhDKAZQP5zcRrZnpQ3RUd9hfMimvo85abnmDG535ZNiiiWQL98",
  "key16": "3csVbFYYB8JcgQxX23EWAdkFjpx4k7qTJuWNAtYeY55btYyC2FAYcvcAquUEPLKniz54RxEDqmMNTfQikAa2CVDY",
  "key17": "3AfhMy4VdgxAenqdPJWvduJMSS6qNY34UtKxBLX6y2CFFKCEiGTWcTpvrNR3cxyMnyVC1xK7a9W5fAEQ48icdJPt",
  "key18": "56HVcwADcgBfGwwsAeTGzjRvxw44sKACGqUHCc2vwttbvbWGDLdfF12459L2iPx2U6sDVnPaCpoqaATk3XNueb6T",
  "key19": "4bzrytMNxL2824ZMDD5sWsJqZszqS7E7jRSQkX6QyAaSSX9862o4EeaGu6FTrkVgUbA2RGT1c3WFz1PezjSCwKbU",
  "key20": "4ytpUbyjfxhhyLCjyLWxkaVBVrEy8z8B9bHdPEs2VdxtdfPg44tsKFT1viLUtpgFse9qhkgGrzNTtvpKdZeighfC",
  "key21": "54viHwinjG8x9cX5cLkPJ5demUBwDHuShP3pu1eevWDmDuXAuPmLDdgex9hT7vDk2nxgXmykyBHNmT3QR19VRtR3",
  "key22": "3T1RMyTrd25MfpPTuFzHdMcy4dAtXp3z5TCwurMdMwof8DxsW2zpeMZ6vqC38iv9umZygYPSyEp3YKkvNSCF3h5D",
  "key23": "sVLGavyTnHmB6YAUfnf1WDAvom4E9MqKrdnx1anotfdQ6931DaaL8aDoQxUGiAB1gSPaV6rJnjJuYDNfiQ3ccwR",
  "key24": "z2wVNzRLCtuZnhfYCiGTWFJnK53gjFYwZHEtazrkSsdb3v9Jpt2vW6zv3qq9evPqN7k36iyYpriHwY2AYo4S9UK",
  "key25": "4w86NwD4cJNyJPXsKnbP45GsrYUjzrezWGM1LAd9cwV7s7K5xyZxqNsCyr2892nHyochARp7ZPP5iQBCjytxfy1X",
  "key26": "y4rCYUyNcoShbDaSYhPyHxs9nqbX7RVJ2woQcZh9m51mD9v31d9BeQBbHT22eQu5abPPauYQJMcxSjqKsVmG1G2",
  "key27": "2UT7YGnFg68aNRp1YNEUaQq4fDuM2goVMEfceVDyGzBtB9pBegh4ihyvkmypFBZ8KLcasXEoXyk7DDFqoUoy6sxb"
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
