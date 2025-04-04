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
    "3eKKaK7NiphFSuefEmfhYyqF8x9LeGnb56JiKFnpCQm35DHNzkbsZ2CyZbuRfMteZv3nY88YLEZApFzsH2wZY6NG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CzJKaBSqdFNTjsng6gpkeuxwdsP2giCnH9hucg1mhJFJJa52QQXrHm9xLWupsAYnHix4rGov5tn4fvQsnZgm6ek",
  "key1": "2FvDqZk7ea25s3qe8xEJYeubonhizicZXi2fFVS7Rwb4eev7K3r3rCpjZzcCgeE8iXQNezm7LHMiGtKgVMdG5nri",
  "key2": "2vUafVL4gLTayf61pq2Rd6HtHvYEoaFun1o1qTGTx9XhKc9PC1LWWZ51e8Safyb5ZhCqiCWTedi69jiV4KBk6Par",
  "key3": "51bsTNtLPYjELGXhtkaoffnPifLBpM2QHsy5HgsgqS4hM3FrZmMvK95mH9Z8BvYsKeDWyW5gbWqmSa7oDsKE7Hdn",
  "key4": "2aEL3E5KRvcWEzESnd9VSz1U1XGenbkkrfLynnJZivGbnBB1tRZ638mYitg5qjk8ukwp4aeiToChaJZwdp9HweNL",
  "key5": "44aaL5aSuZxjqzqPLofd3vmizoLtctoXFMK5AkNP639oebzYkjF1tNg8GzSRMeaDvvhcrQ64ccngjJCPxQXbdtuw",
  "key6": "MmiaHjosZpiksrgZB5UdgmNQz8V3wQmbGKn7UrCNnAq8asJcNNJW7w5vikv1UJjs3D5DnQyXdQvzj1AQCE61MwY",
  "key7": "3RXEbV2ecS5aJ4Y2XENHFteGkUMibcLLw5E4n2V8nrhsc5pokapJN4khFt947JH2j2i9w3GagNghD8ahCwrbKGf8",
  "key8": "2QeZUgg5hGDqs9eYZWcqg8nEjNWMEKJBg6aVub2LcZwWT7RLkW52fkpC53fmgNaYVHkf5fUSxUYyZ14rQvcwNkQQ",
  "key9": "3yPFieFRj1dFpjXktCDcmNVNmn5EiDKXzzYghMJfXCvijVooT619AMZJUwZJnkpN4GSKXdWEHXQ7QCM7nvqrJQvx",
  "key10": "bSecPrmp151bjMAUN5YZoKzHvF7v7bdxBCGmBpSgeguv7YrhfdnWBhxS7H9yfzSESUc9zucaRBbTb3vQ8MAX1xi",
  "key11": "526MoSnQYXuqYDmqTNEnF5E5UMhPYWcxoxcjTJjFSE8tr21ooAQAyx6QgLqqjVMGjJieUCAjdX5MfbXmBwC6MAma",
  "key12": "ARsTm8XzQSurP1Kczy6smxUWZeHUmVFqVh92bqQ8LbAKs6mgMJFrxmJMUk8VZLXHfXuBHQX2rmwT5B3LyHnERp6",
  "key13": "5RBnpzpQvxFu8bYba6bf1C9VpwsPMmZhdzVoPtpnBdtmViBheKX7Nnf2XqvBj4sASjtz89a6CCaokLD3UfMSxzPh",
  "key14": "64iKXHEaXctPxNn3bYJuWbmoWcFqW9WNiSexLf8yJ661iYBRUTfM2dE3SoU8XezTEbS34UKXBNYrnrPcRSTGgCM1",
  "key15": "rv5Yte7czofD1ds7Rziabvj7pX7jySPaaRYHvL5yFE6iGWPMCZb8buUQveudDf59fRPZEM176XjZ9ykG9iTnEsY",
  "key16": "5eUdqofz2LXijd8g8LvCiGgCDKzR2jNQWB4AExfSPyxXKM6j4vynCBXP5F5zA1HMvquGwnhLG4yDDxfANGUa3hJ8",
  "key17": "48B1ZKuuXaz8axJEPPghDn8jVPaBYSiH7gT8a2MTx3ZQJAVZZzQbXfndHbooARDCJKfSMG2Bgk5xLr5S1qDW1DQt",
  "key18": "4RMvpVUPVcmkEwdjbMxxCMbWpa4rgkTQYyNwSXw3UoxD9t514FPrJY9oP8tYVRTCjxc9QVuZwpaNCKk35QEPwLtD",
  "key19": "4BBmR7dZi2P5ffA3LZTPYkBDZaJPaK5sukSREedifPN3mVF2DKdAX4ZfWLxkU7SDrXYF2AHqne4VtbHGZmEFyVRM",
  "key20": "5Kj6bbZhb3CFgfn13hDew9aUrGAdGz9qiSVvgKXRARa4oAUTcFgvh4rPEHDMCcqVex6FWZ1WX5NWGxUGwp5vrsnk",
  "key21": "3XkdoAJ6cHnPdsQ2EkrQ722yhnNPUnZNeh9scUGH3iUb8HLyjnSiECpdPDSGYihYfVGrMWJiSChP55XpTAEgyyLT",
  "key22": "2x8aMzgoudapyCRZiwAsZqrMEybGrPp5C4F1ogqwBwpv7KH1EcrzBJaWJJgN6FcirNcYMvncWaqDnXcTREEReyTx",
  "key23": "FHB5Uzv5reDaZRb3Ut7vYKpmmdTTQE3mTTzUtt4qVt9Q4RPK3amw7xHMDUi7NC81Tcz5TdCUcMe7zReysbnfKWb",
  "key24": "3ZBBMUhSqpjoqDvfdE6CwBtBFDPFKyT43magrwM8brypUUBCLufjB3HxzpYs4bFt2mVhYAR5wDaEASFTz7oFwmGt",
  "key25": "39HBLagjjE6XeJ55XHonP1Y5XBgPHXjKvmFvrv3EfrUcYg8dvEDmDHBWqXncX8yuvdA5GKPr7JY2vhHxgGAKwUuV",
  "key26": "2B38gbYENLoqUsQX3ZZF2KN6xc74zSq38cVvHnom7BSrMNaMWYhezunEQ3u33NQ7L5sNgwHDRviqCYkSs5J7YLzt",
  "key27": "772ghtE7LJGaEF33wXLbP2TGvXtSXVFVy5xyVysUZW61sqQKKveS7hEdyJM1jYMLWvQowDBkqRn3Z8BzN2xVEMB",
  "key28": "2Cofr1VW7KgAyPJQPpQudHftRDcL9tvyzsxvqvFrVEaesZ8UBxwQnRwx6CFz16wGZ7Gj8tR3NEHU46pNyo6efpXq",
  "key29": "4husFDQ42jMohCD51Xka3NpanxLSsuqUw4RvicZf6Di2bLepVM7LfVC78XZjcwnx9Ly9bdTqZR61CidkNLZjnPSR",
  "key30": "38GT7mHwtfjjAVTLFU7FEioiqBegCaXBwj9MRdhSwJnuFZguTRRfVxzmW37PbFRaMytoGdcPhD4YFAi8J1gGMuKf",
  "key31": "39ht47Ut5Lne8rGgnwUvfEGa5madDbKYxaHru6sAwnEBKxMqAdYRkxiWN86JxFw3anLdMjtxNxcSE8aaD3sq4EGc",
  "key32": "aGJuuA4fTYZGNmcFwVgkSRRacqjMo21hZ5X45ht9RSRWhYq5XYvz8okkTHZUgheJXwsRmipu2sfakWSjZWradbH",
  "key33": "4rrx2i7gvb2xMGQp4cXKqjCeEyVbkjA2jVaXojtCa9a44NVJNvwqrq8JisYxexpmhdJdtZmHUvWd5o8WcbVgLXtm",
  "key34": "5KL1q3KdosguubAmspJDaGJ9rcDWNzQRcEEeubuJcFNU3UQBMTzGxXXp4qgibfA5SxuASz5rjSsNBowSyvXrhVDv",
  "key35": "67Uqu6iQwARq53ari1weUrHjKDvvhLb5tK51APbqYmMdDYaihTagdDJx74HfTkAhwBVv9fgGJMCgFmvz5Qz2wnQz",
  "key36": "3dakMMGEjjQrStvCvtWbFSQMpQLHYWQmE4VxDRTRBpBWGkEjm7PMa9aRyDPdWbtKLFpR1cQuyBPzB1jMGJVdBeKs",
  "key37": "298YaD8nvkqt3Jeg8ZiqyuomwvJnyLP7gxZdMHstswGDXf45ZkGY2PYBbhZfrnGXbDZik16eqJuKHYTQn4DrZMf7",
  "key38": "BWKm47HYH9XUG193JuSfhbSUJDRFfbbxQFEvmPKKxnuhNZhnLJx9p1MGcLvEa2EgQmcwwuHNAJPmMC3uBJY1wDg",
  "key39": "2bmUov3cNXRtF9i4rcRfNHUvAqZq5TqNoD9xAm8KogkAJ8Z6koc1SmDSXo7WqnyipneTTR9kEqYT6KzPRGuawDQs",
  "key40": "2DnLE9J94avu381pajNpqAa4B8xaXLS1ysF9GMPbfyB7aUNvR3abVd6BpXJCTPKKFKwH4Y6GcbgpDcXGeRAdfrat",
  "key41": "3Wf4v1hwYU7BNy8pjALRCoPMBwYjS5D8Ysf62UATGsoZtTWYop3gUSKEAwJWZdJ4T6ZBP3jLmDXb8GEdigHT6CTg",
  "key42": "uyz6jge5Gu4EnNdw6Pv9jcpGeGyYhqf6m3uj6PtNoHT6xM4A16VJYAo1RpuxGp2q9cmpYAfsunnVupL9nMfJDKb",
  "key43": "wLV8rE9V1k3mK3kbDP9mQj1eFEprncare14nM9skCNfVQ8rJRMEbFLGBdmunFdiPEFLwzc6YtkQFvBRvUhNAzkQ",
  "key44": "KeGzrDuR6Dkcpi9zfwvvQYEa58cPDA4rLutcd8pQot8M7WNVfPpbgFQZFUc1mmtMuvbpbJZckuVkFofMRXhFYLM",
  "key45": "2kEN8Rmik1BqPBoRJ6AH572mdmtASThxzhTts37vxiFsnFKk6BDPRnb4YbHdBysgmHCdHRqiJ6drhBZFQ9wFs6mf",
  "key46": "3PYjYAUZpre9E6AnqPt3qt79M47aXjjjLUknBxoyCDJZm53mwGvzvtnP6b5FqW2MHomkpFiRVyb5jJq8Xh67G7qX",
  "key47": "4XopKtfF3NMBoCbyjXFQcD6rjdvSkRCUSryLJ83wRhdFvi5rK41NDAfDjS2uNk1wukjUNX6rNRRY27qKgEJNbtv3",
  "key48": "5GMYJtx3vA9ey6izUwjnQzqSTFFbzdwmHtotRE1WMMoBLA1ojJomSAZothjZj5tpGCZz6g2gzAf2YP6jS8mphM3m"
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
