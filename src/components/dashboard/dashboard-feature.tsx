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
    "43cjBFYLV9sAAjSnezVeJnVEVc6MygnpbfKY4UxUzNtsQu6fXL2hXmf9KwNCJq11nsqzSM3duV8WR3HAAV5N6oeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qtXYSByJA3JERhMyqA13BtTbQHH8VaVXzgtyjT2gUxcrnyzmwdT7TXyXTxQnM7AzpeSmHEz6szi8TwSn4rnjM2L",
  "key1": "36qCqpPxNPpa5cEdjY3QAPp1MaMQ612s8LtPvezKBcLpXKnTWvgweshq57JcH4tcQxHLekEMi8GFj2Vyzsm8Q4BS",
  "key2": "kQftmBuBnx1SmguFxcxMBwdKAu5Mq9jvJSPL2o9Vg9Mgi6ySZy8hbFXhZqwi55zsoPZ5fSSTMRxBviNromLNWk4",
  "key3": "3iCcXV7og3kKReQHo8nCd6WbNNRi2kY3eAxQS6bvWrxADoCsgpAk3SfzLqmAVGZZJ5bKET2EpNso36btGzWZDEBV",
  "key4": "4AHD31ZBUMiRP8aNn8YLQtf2V2DSnrjiB1iyBUuDrKT6QZeKbvVzgshsNfZccYCRTuHxQDKyx7TQzjUdWCHveE5J",
  "key5": "5qokczPnECpk3HrR2ihHXxMV9u6ZL4299P3kbJ6CQVgiLimvwJA15FECBEoua3Auv6zyVtGJRTUgbtt2U83tDRXA",
  "key6": "zVuSPc7JCV59rmbopX3SoLuso6a3wFHmpC5i2ZBm7uXgyBzwWhF563UdDBgsStisWRN3oKLws5gMn2zQ7iPaW2K",
  "key7": "Z6mYtNW2XiTk3UXtxn5ZXRsGWDDA54Bk4Tr4ByQTqVuqz7FfByXsbfp7Frxo3ZzzqmCVnd8JHCbmFbEy8XvNF6n",
  "key8": "2n9odr6C85nov2zb86zP6mKdYTzFD68Tvaw9J3hjYcmqjzAyxzCMEGmLadcaPUyVPoMiopmGnwrR71W9JQtv6zJe",
  "key9": "3veZvfHSMxdQpv7DSoaCnJgDGWiUxroAs6iBfhrazLByaxxUCyrBsKMtw4mnWTtyKMgq8yts8mZ1EZuWFPpFTweB",
  "key10": "fM3aUcqBAKFNJNT1DYUw3NxFpdGxnyyapEZ1nypRnfPSK2bNttQBwRitNigSafYCTNQZSyGafY2eVZKkhPpBEm9",
  "key11": "2ktNs2buLmhxSTZDKJpLgdNXFKADoUn67JuzMtp7MptfwsCvNxzPMtRhJW3djNZX9RMRGV1JhjqVze5YCKBXqFNX",
  "key12": "2fbp3hkHhrkTo9ZrP5uLDDU9AqQivPdpyxi1LafnF59jRcCCbRGZpwC52H3aNkdhUwerCLmTs34oLnVsNDscFaSp",
  "key13": "5HucTJhUkKQaRgQ1g1hX5as31b1SqmkfiTKbKMMriTB1cqvibB5GtqAEWsGtTsDjXncdB8k6Xys6aLDD4Ln71N8N",
  "key14": "5Jbpuyyr2jZP4EGZNZX2UeRxwsYBG2JQauBRwASqAdXCVG5qQmPnt5CKGW382RAy5i9M74HUwC21F2c499PtwVfi",
  "key15": "2FwFhR8kjRNTuVDEnK73EGdSFZLmstUb22MeJWZNCS1emU3ZTrPe1W4AnMQyvxeNzsEUeFnMZqEhFBH3NU4eBawa",
  "key16": "2md9dDRrfJ95sNpLTgNfY9pULiryRY9JKct3bQfDJuLihe43vL4xqFawuvEm1MPefVN3CtB26SgX3hLJTLz6cCbq",
  "key17": "46Rojou9y5XVjBz7PcUyMGsuzckLJ6EKAV76DtdbBHedmG1PZD1EqSXUKLszxztZrpx5YosXjhi4zz3rv9z14Anr",
  "key18": "LTADNTh1aa9x3janvhTxp2g9avy2q5wmV3vZdHTuTy2ugB6H7oiKL7efb4hz2VbHyLszBeNtadPxJdeZysgzRau",
  "key19": "5ZktdashZHRvH3rTpvNGoqqXRUv1EJkRj8dUUYnBFJYnPMPpUhxvSzPkWFZHhLpU2A2nxosnjzG4LnTWHQCEEFRg",
  "key20": "5hjfAZXYsaSaYv3yfu52vVJKGjCui88YjunNdidmBSNn3L2XA7xz9UqoPz8wGf6qQWnW3eR7EiLVCRQve8WKtmQM",
  "key21": "4NA2291Cu6ZriomN3oeZNjwRzwbDekkKb4BsdKwMCiwDHbvL6yeCQX5vaowg9UfM34Xv2zNfBbYGgKp5Q4TMNZeL",
  "key22": "2ezdWySUJSJgqmMpmaeVPwC2mcxjWLoNumgEwjK367bm6wZfZSBfCVKQX7nFdteyWv4fxTbkP8MnRLwVj27Jr4xo",
  "key23": "8ruBct1GPaTKs5dcaYKXvYnuvrsgevFJnGiQt2Q5eH3oXo3hpamV3oG58oZJZwwk9xStrGubP9Vw1SZfbqsaEJC",
  "key24": "3zGL1UJNFkTVVXUnoAE7yWtMxsmZheTcnzBcoS4ovKfxPfgXQYypQp8o9vhtatMYUiFFpEs3R6wtdXbdNkiVYbpe",
  "key25": "2CpuEnPsXEgpFxhzVBZ4HxKMqs6XKRxnPJd4utAHrHdLVsG1gL42iA3fvSean5pygnXEQeg4ZUFA61xKWfJ3GKFU",
  "key26": "378GHC7xvEGiHEX2tWbGyb6Uqszv4NocfmWnfRAkT7zDFGS36qd9Y4ptjb8iU7js9xtYy8SuA49gSnhuCsdJiMcH",
  "key27": "2p1GcBATxsRGjSeTN74UKW7ZWtsUfuWtUqVWX7f5HJnXrtzFJTmZQ7yh5BktcQFL2mVDrqpGKFBj3M9h9FFvmcok",
  "key28": "VsuEdM7oEz7EFaPre1srEseXThE6uLCvtq9rFUrbb2gfYt3nCtbvQLN91mT2U5m7Xmh2XGjEaXoG8RJwrmq8XmJ",
  "key29": "3JpxbNV1b4RxE3cV3ntCzCB4GXtoNY5TVtx4V6xTpjFvizVPf5BKUxbGFj5v9VkpaM5CtsLRaHzMmq6rjhY79pg6",
  "key30": "2DwkwLtB4qToJvvRrwiwzVmXKWiNRR5piVnizVTxhJkdZNacstSpdqagUY5LqfD71yPJjsDx1gjZ6xZXm97Pgiau"
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
