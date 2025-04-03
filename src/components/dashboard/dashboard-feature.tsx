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
    "4i8AybLj6eqLiZsnKZimTtGkifGHojHhHA5VoZBjq6JKpAecHs6BTPJtg1dWmC4Z62hxv6iqBDDveYMAFUfmGV4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZMCQSL5SZYFD8uftcMCd4myiVAMtyA5TcFUouvtSRrqKNR5Yv2Favrsg9At7Hj9kxbci6XBZyarYGqbEaWMUsD9",
  "key1": "3xhF89ZJUHmZCV7Hfi3FkE4a22cdRcUYuTfWJ6NhMhJmSDeJCLmSQj9QoxnyD1GbeZgB45NAVxTbx1Ghp7jpfeE6",
  "key2": "2hfDrioSZtjmpbf729db51M1ch63DsKbiDsZ1VadztaLZ5zsdx6ND5jAjVVrt5Me9bvEG4RvyBZvFL9M7A2Ywa6S",
  "key3": "LAWpjNZsTpRLjoQixgBJyAdLVqKRZ8QKcgvb7Jw1dMrHLfBQR5shTujE7W2LJxkpoibeEZQgv8sBy2TLU4ZA3wJ",
  "key4": "2q3PbYmsy1WCXhsXt595he2gRX5pfNGxAqQw67D1u1FTVRU5thsgKUpnjXhTJiFzckbTynqwvShJuCvALfWmCahi",
  "key5": "5X4pUtGMooFT57dMTn8pu8MNYB3GBRmCtxoEsSAhMugnmPKNQe4hemtt2XuHXmbVr32bRdaCS3guZWze872hNBLM",
  "key6": "2k9NKJozS5b6DwZQbU6gJ8GXAMuADsXSbEyd567SM1ANT3w97Qyx5visgxQimUV6va5NnoyXzbFB9vGMnfRW8YjW",
  "key7": "3E9MrzwcRfb4JyA38LUcy1GuUSPZGLpSpej7gXN2kYdizf5e82xYVEGNbneTD8hYUXUzaocqfRdpU4Q3c8tuD3q8",
  "key8": "45LxkoYXso5jEFU1AcjGDwVz4eReoL7B5Z12NHqtsHxXSh1eHA1tBd137UGNAjtBWTJiFTiYLM1E77b6F68FS2sD",
  "key9": "TxLTLaD2E8me13AK5RGhEPJgj8GQDjp9b1PhJkNncaa6eTgVfeE3nYFotn3gdt8JBZD3mKbfpgaXQhkCZbA7ncv",
  "key10": "2ENBQCp41Dz7rt5mX8dKQH7oTw6pqbuhQwDdcjWPhKxA4m4goTq3Coc4RRPXrM14PStpMX8utCxRzKj1fX31iuEm",
  "key11": "51yNsqPpgmx73F16yxmRTqtzorKR3CXacRW5SNeMT1hix1m2dMj5rLJbHh9y2RzzxDdeJRzCUD1ytkX6b6eVaaZS",
  "key12": "56U7sjsrLAR4wNYcBbykGnkdbFZApTsC3RUXyzLAtbiEA9UyXYHrDusqbXBNWtvSAkybAnPPS3wJbFtRkiyHd16E",
  "key13": "5Nb7GmgPxSDvA9yBSDm7cRrUJxhBvFSWTEz5kKFztV2gUMpwfxua5eSpY1Qh3ho67bNExGCLdp5PDFHm9VjbDMgX",
  "key14": "5f9SVtywyh2vikNH1JKPAWo9FxwN4W87Prv16z3tibbA6oiccDgQQvw4ts2jrvGDKvtVGMgNXQ1AwKF8uw5KHGuu",
  "key15": "2bmV3b1pjuvvU3jJ7WaHc8phcgZmdHjfftQ34PnVxdzUS3QfCNwZmCPaJEKtFdzy7ksmP8HiA7NYYjBDBVFHv4rV",
  "key16": "31LFiRiBu6wQmXTVM2n61gProTbBLC6REPB1BnQeiACWWybVeKzgXA7kbbq83PmXaVXpsDFLtWcU38vpnmC5bkSh",
  "key17": "4dCCbqz7ynnhgEs6aQPcDVUr47gtcJATZXccwGvgKwifpryezypYn9Mfvnk7Jdvt2aDBrhMbLY8vx71461d1F6GR",
  "key18": "4TfduMnMmp5yx7LhQ3uYFA4gL4omm6TZi1UxSz7HFF1v18b62CKKshkyDf5TaVirSPgz57j7f2hQiPkBFy35wuUE",
  "key19": "4vV69F47JsB1V81TL6jCEBiCEaHzwJxzMHFsh3VFmiq4QVvouv7uoPJVeWQuKfMjznomVehrYgRPh13j6HCcZX1d",
  "key20": "4SppneuzqbeRroeqP4tjxQ854ywiaQBGzRFzC6Ejv4xLuDKd7xZTRXrYpfVYgDsQQbywn5Cj8CAD9czrDKnqWkH8",
  "key21": "5PPufw7C6hgBYo7Vwm9Y9bFuvyTGtKDjxZrThF59Dq21tbMRyKgvRxR2JN1WA7ZnL9PRmkx5yz2pxp9czyp1oHh5",
  "key22": "5zAuh2UFQebBhhTMbxa3Hht6uVDEno9y8jei3RnrV4hKTBd2J38rdawPoAbXXU5KcnB1PJPKpp65vPdZce1cL75X",
  "key23": "5g4kC6C4r6AKfoaBhFrBtn9umNj4hrHYW55s39TrFwY99NCzqsYP6CnhifywJRgSfhihtdTHEPcWeuxZwSgNgnKb",
  "key24": "22GkKTsif2ZyvDRNZwJGrtNq7YxbdJS4Aws336sk5GoeLFzky6QABLXP7ipuDwJffcij65ayTBV6CX8gCxwGDWPB",
  "key25": "3w3NdJFayKqYiV8JsMmaLTpQgSLHTsgJaTZXv26LgbTny7P8uHMYFyQcCgWcqnY6uaHf8fqxpJFVwDan9U4pg6zH",
  "key26": "2WCU9eRFUi93BtihaJxorjseVSyQFinvytQsN6Pz2HzcWDJ1zLWmeLupAuYhUYrLV7ZM74SGkaecntUpDWUnBAit",
  "key27": "2oE1zgrHm8hJScowDk2Df7MBTWsgtXmk9vEq8arfKWBZP5w2CyLvjMuevHcx2t9jW9j4VDtk6QpPgbMSMPjmMtSg",
  "key28": "ixh5jzKmo2vAdhknWijeqknXuiUo9duhM17pJktzUFMvSw93mkUhpuk15kpJyy6V2sMAP945kMWw2meFHCAuKtC",
  "key29": "3DSqCkPKZbWxe1GG14MRwUmaSWek5EVn6huJF7ZDqwJW1tCYRkga8xAcKikUWnjV8ojEfzKBoLRLBX4hrmaRrNEA",
  "key30": "5G7CzFfxBPo8NTxNCg4CPx5Dz68Z4DK2GEN6vZhHiyocmucqHe627QQRde96K2uHjtvKsCVwWZoyU3nC87Yootq3"
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
