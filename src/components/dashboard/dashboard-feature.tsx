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
    "2gUhdfDWyXa4Naaip492LZ24jPLg5o19yF8PTC1KjQpJ7KXiRC4i4eXxMoh7BhaH9pa7nmXL1iri2yWbiQwz5Yc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gezprbp4x1o4yryefzWnTSh4RfnQmoGMLnytPcvNbsQVmoEMVmWZvbZBMTwwz5i8kjNnFBGymc3CdVvHHCz67P2",
  "key1": "2bh8PdcK2UqSr4shCC6tyY36wfnhahrgocYmEwxQEG1k8cZQ4Mjw4KC88ivYbisom3k5rE417RQWiaT2AjK1rq2m",
  "key2": "5Raj9fy7agXeWv8iVS66xiKu3XoGLJJufUcyut7YBAyrnG4iTRQi1b9SRXEMdkmbKN5mARMsAR4mEaYqUh1vL8Jm",
  "key3": "RveKysBS3CNg1k3qgqWmgVN7s1gymRCetG216cTUQL8EaQmwTmD1obTDYQUGbESzp53uXq4GnftwF9TW1eSXS1N",
  "key4": "rVxNeMYedwpXN7Ug2Aio75amNTUPsmBdFuJ3MewbsWT9nowu9na7AUrtKuPxi9BaMWMdbkedxYX1bMQvDZBVKrv",
  "key5": "3sUacRAB1bnY675zn2AUqb8U13Xpf6yyBw4ocETNNjFWyJCFkqgC27PvSC9XtdeUFHw3ptqQ7st8TECqTDAWV1gG",
  "key6": "2mdJCr9PoG3RZjt4rs1Y3XbtQXo1aMiKypdfsoqRLVgNFJuUY6EeFCA1ivbcu7vsrN6L59HucZe5M6saR3JzXrXS",
  "key7": "4NmHL1qGUTB7tAVzvkMt7JCJ9RE7LjcnbbtxXsRoGSjPozU8LZwNJym6fA4LyKtZNuDKwQYyTAe2pMWn4d1U47zJ",
  "key8": "2Fh2F4CfLveouzvTpSdnCiSqB2RF6kqgJp1iSHcpm2p8XiPx8abdmQy8KD67xjQWWGBBYQyi2PmJaEv91x3rhpG1",
  "key9": "5qBqBKjNMYHVyDLnr4tbS9J2muQxdyyeV5aEiDzTXWGLNStRK4ZBaUqobUKV2Dyn71GL4Z7nWUs6qRrYd1zC91nj",
  "key10": "APPY4s4qGuALj3wt2CNvp5c7HRP6tLKE9FS94HSNLtxKKWQPMAWEQYQnVYM6WbyrowqWPiY22XLPwR8DTAi8euW",
  "key11": "23pMpAYbE1mXc2gyW5Emud5zgfm9XZ8eHStoY1LNz21u6QycKEcXb9bqSUnKer8kDNjLHBFJZu1TzwXz2SFDDKue",
  "key12": "3TWuL6uvLsFD4EwmLoFbijmDokVM5gNLgynrzLr9PBcR2JiUZsBnP45xeYsVg37AfhjcB9AfojNfsyN1aVAcn45L",
  "key13": "9q62xGDW6XNnkWW5SCo3YVh2dkTwFhghE9bCWQp7ETX2EoY2wjMRDtNvccN2L27e5fNXtsZtKHFpLbMiaXxU2aC",
  "key14": "Wce6B9pii5DUPN3bEAxWUMb8DMMMoWQ2YqprejbSpv9Z7xzcTkaAFwvBosdcDAshWPQcydpHxVRCqaSwdXYWDg1",
  "key15": "57N6Crxkt3p3UidBTw21xAs4iDKC1nzrnGYrpV1Moc5sJnTje67QebjNobRJXhTkXjpP7qjYYfLi6c5245E59wEg",
  "key16": "2PuzPT5uLu8RhmGTZ8E5au99zrHdPgtY6NpGNtg6WhPVZ4bAPGSq8k79Phw2riynZCregqW9joKSuwWnkD4a5Tav",
  "key17": "65yyYkNWJRmLmZ4ut3Hew4Fi8EhDMfk6p78SXLk9q1BQwcR9pLozcGJUaUWim4syURKhwK3FajUvoADSMMfEPBLw",
  "key18": "3dhxRgxjq1NMRL5bCtR3LezfjyQKtsXe2e1viJ8EjQBxRyfpWKKHD59u78ibXsMxshijWgxSkQPpesMSHooU7wGP",
  "key19": "4QFA9GaQk6gLErvZhhTF4ua4L7BgB1eSwrXH4PqyUPjUsYKHd8ozw957FnNk7vcKmrysWbU1C5HHCRMpEZroKvBF",
  "key20": "3ARAFDKijUHRKYKEMtig2ZQw3d4jBZx1B49GiUEQiASSB8xzeQ7QEHLhWHQPuqBiXCVZWFwYG2ssnatq9YL7X6Bu",
  "key21": "21jWUWeec8TRHzHM6S3FHijQKyEC3xu8A55HSA5MhS6hTngX5DA64mttfrPFTkJZWy6tuoUSTs8tFU5hmpRCuBch",
  "key22": "4qx9bvuujXx1fX2yfFJvoujRCWJkWRMJny2rw3Kqh5enedzWQDZNimnphxCkzYM2ESCC1gdpSG7gSM6gdYkDiDeB",
  "key23": "5cGnSwvR4pYob5he2g8swRpGBnkhhw7PRH9K7JLcjcGEVxMK2sh9fLzHhxNbCvqJArSSGjP9wavnZfPwCEX9UwJU",
  "key24": "2VsHPY5y7195CW2EDkgnv2BEFLKpigRrUgZ6MidGXZDdW75o1zN9Z49g6CiD8vDMr3d5YLLZus5s51EZokYGs85i",
  "key25": "4oCsGQvzTNu9oDScaM2fQj2rZCUjKBsfZMJ4wYGpkteR23QfUh2GF4W7XynNqMWuG7WY6obNPTQ6mE2W2qNqzsXK",
  "key26": "TfLFPSzVbuBZ4fmgwQEFXRgWq3x9hFN7vQVJ2zJJqY4oN9xETRXCXVrEisyg3uNt3nHvsFRrR96Bx32tdUkfhZU",
  "key27": "VrU4cfhfbpPk3vyZAcSY2z4oNgPDHgsGMyEVNH39D3B8YnDzoKViuAgJtbYXCFDC7ojY2sP2evaX78uRnj2daN6",
  "key28": "4aR3TgJU7BeVPh8v948hcAV5oJ1GeGRqB5P1CLpCaEeL4s282aLMhK46KqgRPqMnVFxkKfGRuzvcptAEEYeUtLqY",
  "key29": "pUGtHcXTuL6kw3g2Xcju3Nq3c2PhbCiw8vuKS7XoRGfJcBLntL8Z63pq8fNqudfXTvwG72XDzXncUPuiphUY979",
  "key30": "37hPocdQywgRSzNSzd6a1C9LTjsm2f8Cgqs4JCgZP273KR2bW2QUgQM5LGLapo4VcnnGBgA5g2ZdU7GkZFDAYAFi",
  "key31": "56CXtL9EmzDodpEsRxsHoYgxqrLXGyeqsCxb6SFTARDzSBfU4esZt2kQ5McTJSmHC5osQGatn1fCUEuJr4gAxrEP",
  "key32": "4LduJ2JoobEhKYWmJ7d3ptsDuGtp5khQtzvSSfjm35ZCzgMuRg3YNAamwUzd2iRreUx8sUjrhqLzDtqaHQHWd8g6",
  "key33": "2bhuKhm8c1ngaVoVyZaEA2ndHTiSeZLDdBBA9fdVT7KL2kakf9VtVHMRwKyKWk4mMn8iMW7QBY34w1ighvpSr7H7"
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
