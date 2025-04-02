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
    "4ry4VCZMQVoJbwAgrTKcn1Afkow79WQs18vCRB6Qgw3r6kCPJGPe7jcu2xEZMgGhu56mUb1Cmuhq98v9d6WVBN1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MY8w3coaFV7poL7LjJMQpz8m76GdZHtTPNRaViVketD5nw9QB9eud5Gz4AJg4Y7AxQrMycK4t8xwgF4G6k5R1dM",
  "key1": "645Ao1Szz1mpUDqfigG3VyySK6RMY2ygVQqPbuT3CD69utyyBDya5faHiN4nTkmJjvLPNUtEsfdZtHKBcdZEWY9B",
  "key2": "3B6uDFFFLh4iGLwYjcWu4ioGBqBGwYtqo9xi1cEcU1WyXgV1gd6FA98Z31dr63bsHoU9aMmN6hJZ4rpSesiSAMYk",
  "key3": "66BpXV5GwS8AtU2QzkaAmWwUau9EdiF3Sw2ttGHsfWbUV3piBdmMMr4cA9EBT83vTzmfRLtCtbgobyNTJvouvtLW",
  "key4": "LmxBBkbNaHGqKYeHrRJf1DkdoF2rBqbVkEaNdZMcufJZooSsJ5vt21sxGsQdeM6NC1PYvLeNS5iya48473d3uJS",
  "key5": "fJtfjZcb416UPHwYWM4qyFtCrFBbr8wLY964sLPiXvnDVNYkQPHXrUT8qu82BCJngHbMrVXgVF23U9gDvzzCAJc",
  "key6": "5vS2VpCEwBv9a5nvMDZgYHtvoAyPsmR91MGMYtf1md5izjChbMmehuhDXd8SjwAGRg71VYH72vmAxPJMib6HEyE3",
  "key7": "T1bDD58DRykYPMcvjzPSfQuLN5jEv4bbcBZqjQFwF6Ho8A2JVbvxUbEXVYXMb5fUJUX1r65m65zgZKNtmQZWpjt",
  "key8": "2VhNwxqQk9dceCjgKto4wNth8KW7cLgRQxVd6reDg85Pniqp8MNGPnBcxPvFZRwxXUwAjThdiNtV817gV5QTJPnR",
  "key9": "52Up2x9LcReWzyK6f2BwGsKVYB3D1ztjWS644cXg5oFMsuH1WZKc6igtJHj8p9EXKPe3cFZXdUBzwnYmhSaNoBQy",
  "key10": "5qkTh5gwr3Y2F5frhKdMctsTzJJvtqqxTecRyKmoJt17FCCsFhYih2GTWYDpefeARtd4ZM9VqEUu1s1AfNs2Kkcj",
  "key11": "TAFCChTqpkbdBY9YNTVWqyUhSJy41n23azjR31ZGunsH1wuF6F4opNKq5wcAaTbURMsXY7rSmUmkvPC1fsYKaUo",
  "key12": "4LhUcxAeE64SFBCLfJdPio1gFWGZDpXYkMmwvWET14bcNC7n7Px4gsdxApk8dDqQRzvAWjNpQWNdQyjnCpeevhdj",
  "key13": "5LviFzUSkLu1oNkudqXoyTnUkG6xf5nDwX9ofVEyo6jyxtajWxAAmVwdaSozYCSCrXmPHYBzpLZcvWypor7wEaQT",
  "key14": "27u9UYpndByqCX8n12zXK82fmGpFbuKWxSpE317ezhAJLyZmxc1RdBGo4CEQ3tNvYFfAXFXa91qUKqw1EnKqT14i",
  "key15": "WUSQ7Q2NAry1NNEgcrdR4yVgADPFwvMoEUmofizQks27bZ8Tf3PNCevqs7R8omq58jDFRUYNSAwCQVncYhAx1wK",
  "key16": "2aRrdWc1JJ2kEvHEbZXrnPTr19SudqbdMFQYXthrFSAq1qXawrwKaY4afPEcFZq8DB2Sot8sgfiaAAJErJrB6zd3",
  "key17": "25tiFSTQn5MQt6bx8pmwRS1wvfzwjJe4mAzRsbwXNF7ZoerD7oJa68eoDPhbREBpxiZw1xjj2DZKYuRPmAs7Cip4",
  "key18": "4R5t1iEb5TrUASFqCVLzqyiCX9g1pyDrK7gdV8pEGBSsNSRooASUrWyonzs6CLKN9JgyBPftRdwX3oJ4boktnV3j",
  "key19": "3qxJbwiYtbnpxyLbTge7tUDjsmiFZWZkPLm6ArcJcFzDUJ1qmJiuCPVT8LUMDbRZYqQmQo93kHHSBrKzytWyRPzc",
  "key20": "3FMDLczw2W5c2pFYvnnaiTMUFUL2oMoErfuNiToTLyH9SaA51TmGESMjNfcSFHpDRJVMpfJ4NGrQaVMige8xxB3V",
  "key21": "2X9iRr3FYzf7KN5SKTZe82T911Z6Db3PJsoTodJvRRbmuKRZiquLZ5aeBkUBwd1EKGD7CPdosg6B1AX6AXWjZRce",
  "key22": "5HfLN5zBEtq4BjFT7rnPCXDCDnyFy8TrYcQ4xwcvGWbDLa3bApT1f7oQqh12Rn8vicZJez3eCjuxuG2mdf3dwVJH",
  "key23": "3TtyT2245p4C999qA4KPY2kT9XeyViDvhZCbT8X7pir78Kj4HvHRLCgpUboyoVWnAuQhWp11in3KrTQBMS329Tqd",
  "key24": "23bzZcn5Vo4GVat7d4aqSg8hgQi6E155K6JySis2WwtZAVVXLiR5QGDXamUqxwLWE6ko8RjxVCFp4UndQn7dHpUt",
  "key25": "3vfk2YS9KsvsuRAu9q7CVnyoP9Ggue1Z9hVcFCDMsuRRURWEyYUJwEQsYRdE79bkLGL3soXLex2omy7Ff1Cm9f8E",
  "key26": "2dtnb82ghwxb4NBHVvr3cMuUWLYesdWyTTG5G6ijz64yc9zKXz9xb7cqosk5ueVY21Q8MCkF688b1ANVM3xAiMtE",
  "key27": "2Q4GhR1UGv3hX87L8ohjoRK179HVj73FcmTbqar9hXY8CgWML6m2L4vgXykBJqF54G6gkMGaCeQsYy7rfV3f8Udh",
  "key28": "5uUFE6QELFqoYep16UgwiMqPknvBs4GvrctGBwHPnDX5qKzi13UFtAUKxbySYcxL4fzzyBnRGYCtKGRDXXvGaqYa"
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
