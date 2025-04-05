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
    "3qHDTp9puBUqqkSCVDRvz5GsSCrazL8YFzsx2p9DGzJ2GuWAs52E5e6KpzXRd438Nuvu1rAvs5siDWkLcHNez5zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yzhj5mmwcuVHpd3KZY3aZddtw17XsKYBE55Uh2pAjKvDZnPF3eGhd6FvoqpxYc4oVSExCSswqfgNUS2TNKmL37e",
  "key1": "34Eum1RkmackjRKy4cgSmuiQNhf3xLx8JWsHJ4TzUf8Q6Yrbggq3ctAwcLv96mw3Vk6gLiC4F32zoMwBkPvR55Qj",
  "key2": "5L8iFJB1rQxn8jj2aPJqVQZW1hWm93VCTxJysWTJ71EshRnN6YqVpsE4JCLu4uKunLYcWGRLYp6oNvTwPJwbCDJZ",
  "key3": "4WPVzrjSJLunupkjtS7JDsMp7easxEnAGoiqiXdXongupWwWBk1JUSiAnfR2T7XuJvqJzsidoDvj3bRVtioU3BTX",
  "key4": "21GuaaFU2qWmBwZY7J4opZHddo2WdSPKWtVHuzt4qfHR2LmMZpNz2j1zQpPj2bctDmYKY79U1To6ZPhosiqEWukD",
  "key5": "2ArBNce5kCNRkBqJJkLE9jHHn82ctiqN58MGe4LxB5k4Hj6tjG4mwLGqGZGgHGYPGpcwC42J6tjCszaW6aQdSyag",
  "key6": "2hykLF5QfQhCwvapKXnHedqRjbu98iETGuz41goF1Uu86r2MJu2ohj34zpLN3mMsA4DSehSop6Sz3o45hvHCBYjy",
  "key7": "ZgMivRUcqPUzR1R5jAgY2jCiCe36ydhhR2qUF5keptk6auuUVESa9nrDYSMZKr8SanQYfSs6frLnidA8WjaYG5f",
  "key8": "4J9aHXDpr5JErgtwZQQiLifwFADHbtkrR7ANcF66ceFrFmmSkxGuCbTxM51UfRu4fYNY7KFHr7YpATMFjsH1KpGH",
  "key9": "2F2KRmninbbQwVbr7qEvnk9S4oHk6kC17fD1nDa3C6EWZqfqRj87F4boAs6R5QZbMdpyYiVrTjN5QtibgcQsmM8V",
  "key10": "5j91fh66SA3pxHmsxcCqQUem1cCuquNe8soRsNGjDQBNmnQzLwBU6LXdzMRXSQ249cPUSfg3oz4CMUVja3wFybJU",
  "key11": "65q95DAkGayF4Dru43XiWs3LxuZP4GUdavVZ47my37yABTBttKFuiDyg1rcYGZgdUAt7ULhm7wXhbV2CBMKpoxpK",
  "key12": "4i1g5VJypnjRJFq9t5oC4LAP9swFPHRRiC3SdhrLYMEuhYyk7NL2DKDE3ycFbBZCiLagmAqHGS41nmnYbaVGs7Pe",
  "key13": "4T7pTRenTeayMFkCshASsgj2hPDuJMBVPi53zXkSZLi1X2QuUipZ7XztayhPjdwcFmQ2aiYkyjXaRZzmkUXjpyaW",
  "key14": "hVkJfr7L2h1DQzNyzdr2exbgcFKV1o9wBqZ2Md7uLTZs25dcMp9xk5fju8TAs1Mf6Y2wFHcghcZkPqButjv3g6c",
  "key15": "5sEV2aRmG8RdyRWreNbAtQztyJVjMYhCnMXzNbavXTgrPNATSD31VF9KJ8uU8YjUjJxtK632hrUUj12fKXTuTkfQ",
  "key16": "goYK4t5xDXa9e3mdhcapirg7aEBTBsmPmB3kHuQWF36MkqURkLPxHKSVSiwA5WuLK3x52Nu5YyinvFiaspajssU",
  "key17": "3AKbep6NTdLLdZgKoLrTDHAxs7GK6qfuS1PXuoqAc4KbHjpDcy9zzaxhkFZJTrb5sirXF7fTc9ydsFRnECLin1He",
  "key18": "YrSvs7oPB3yLZxdcrzjhWoLMtxBZpmuBdmsRFsYt7wKecbYbyJsubwAk6VS7FuCzyPVJTHrhAiFcwtGivJeBF3K",
  "key19": "2mQiezNnvH2bn4csEAtZmLDawRvAxocVysX46M5FufDPDRphvo9LiZGWTPD3YDakEnePx55xVicM3FmFn4h3okVb",
  "key20": "5ZGCtBKfBdyijUCqFdL98yjG4wKSppYYqQRt5RGQbaZBG2kSfN27xhCQSk48yvqyWukxdHjvgvADzAF7sCMzByo4",
  "key21": "53UGJxT2L87E5YdzR52MnDVy5guLhX5RbVSb2P21WDki6ujiNWCWaD6Z8rVZ2CmEseyf3vCSo2W2JDM4p2q3mNU2",
  "key22": "44SQP2PxeAmyNpftT1RLEzu2CS66ScKk3b3H4NxNZhQVv5yTuqY67Z2YUj6dWUzbwWXLkr4tQxMstcWEbVgwvrKy",
  "key23": "37DUrGogFCLFERZvaxSaxFZAC4t6dBB1J5J9dtNNdo3qVsSTfnzo7TQffpMfNW1GpGqCxqd8xqjUE3WkyVWpuGS4",
  "key24": "5eeaPzJV2UEmvy28b7dHz5GDjCCpUbxxUqR9XNeYouPKTbDYsuakheJMK6MUmgea4MK2qhVzaaX2KgBmZVYHgaiq",
  "key25": "5tZAZpd96HDWWG3qHyHAA6RK5uV7emp2wtWjdjqUMPnbaRG7raFXSirk5do4tohvejGBXHpca3LFXp46iktEp7e1",
  "key26": "26CRsZJgPvpn2JgG8s6ynRCn9zt6dvcwQCeexmQ3RKch1rossWtbGKdU9ERB9DoVhiHJTCoU3XiEW63eVPivbQj8",
  "key27": "NiAyS7TF7nVNUUAazBvX3rLZ6qUXK9Pxo8ja5MTe18NEnyCew7yqitHyZ8bAz42rcxYv69m4NFeWjt7Y7ExVrwo",
  "key28": "5QvnwqmMvHisThjL7FQfWPGLu9Xub6dbsGxuqeapeHcaY28Bng5v7PMd9ajck7fhFq5A7yYn2LXVxFXWN7CUdC6s",
  "key29": "35V8ebTxqn13rtFVXbuiofEjASFBkPyi399iL6AZhaUxJNB6qCHMcHCQJdcBsStCqqbpUXu9yxqwejtB4pmtRuSK",
  "key30": "5D5oMeVT2BS1caGhLB56yqPGxpWo13koYwGQeBpfg4BbheQYfzNfpvy9S7o4ExjyLDdhRnAErohpe1pgA3TMXu5Y",
  "key31": "2FtRqHAw6nTsEndsjWHyV6uQZSg4D2JrmbzM5jKSV4RKKikzKh7rRS2z4q5HRtQtRqorPt25aJnEuTfBXqMiwM62",
  "key32": "4MwCzEdsRFURh2cwMt6h8yhghSJ5mMNvZsoNDmEhdhtKeNVezigotPjV6uf96WJnvwCzFbA3muDmoSxxQNtXRed7",
  "key33": "3mDpmx73y6QXwKgC7f58v3hUaXSpYtACocRLiooFydCHpEqmPFEzjqzhsTMUJ87mTDCox341mgCuD4BYgR4J3uUo",
  "key34": "3tFxYHzsLRLmanE7TKx5WadAmoMygbLrrTDfYHtPxCacoAshCo71U7RhoG2ooS2KPqfPFQZmmvTaLeLN4cmh69Ty",
  "key35": "5naZPLFeEFFyiJ12eHMS4AAXoswMHRrSV4UYjYovphttaKCBWa76CSVb1by27hwuP4ZcLAd7nBTqP9i1Nfod5gZS"
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
