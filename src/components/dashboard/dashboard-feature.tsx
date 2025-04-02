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
    "3Aa9nvQZ6WtrPiSEZDFcELURtZxtZXqPAHphhDJ1UgYQVoKPx6ZAkD5zrriJxdHDnukukjBMaAbeyBFJ6WhacfmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SqYfawyPikUtmXxLR9L2LZfKy5WmbFyiKXbviUojJZPqpbzyp8HMjRZZ2zk54ZwtGoTYSLuhttzczGTikBUAhw3",
  "key1": "64RHhphupecxaFV9YQzN6wDAxdS7SnCtcWURdMxzDWjy7mvS1GTw9dnBiz2Teg1xMbN8LDwGbxzSSCpaJjjA2rNp",
  "key2": "4vB5uqthwsXpk6kcVYyxSKYJYRAakFbFaS8D6tRTQzB3WvqFC4YqMf6kVbvpVG8VZWSJpJFDVRF4DBWR6ZgBfUC9",
  "key3": "4kTJGTjnZyZfvYrgWpkmHcEy8js9mG5d5cYyGDLKydR7PMqhpZ6wMymsnxXpExoCarNT6btZzSnwH8svEPoKaKjt",
  "key4": "5LZdoRw2weDzTxqQdXRCXYf6sq5nYWVG8KmMVJAo4io21U2VkHaPzpN3JZ4giHrkKNErpyxexzp4ncFtV3FRqPD3",
  "key5": "PM6QDZrNLherqDwxEyRqbi2ZZrmUiXK7p1eJ9ZYAH8uDEgwGNYLZTupefwmUB2oGErVvimz6z6XwevzXV3sg5sQ",
  "key6": "3bUTM9pmM8NYMb2HQb4NJThYC6NFZYDim8vzWygAoChztu4CPcjJkvNcWvcGcPKnsHjUezmn1QEkFDUqU9jGjHRQ",
  "key7": "YvrnGEDeZWRYiMTSXU7m3D9mCxF5aS4Dzuto1FrQz67HZiUzoddtCzDgT6ZJX1RhUgWvaPu1EwrfczooHeqpFSw",
  "key8": "WhHE87NhqJLER8XFMGJLTxLj7iTG6DeeGVtD79EoJsf8b8oFeqiFRQyyDa7VboLHhf7cZzs7PQmhC2uWdrBNMpm",
  "key9": "5m6KEr6LoGrQ5i2A5DUpZGYn7RxZtkMQ96WjWbSCqnEWxeNFZStJDpVtVWhJguW1b2EBsU7qTNxLkDwDcJ3U2AJG",
  "key10": "2SKn2RaTyuQwVzwVydrJ5XWLpyLXEDLsS3ssGsMnmGVnfUun7RHpGFjqg7Ndw13sRUMaXM9nBkVFFGij2nHTbWbT",
  "key11": "2FEsq4kEgt3WivrUM2YYXtVYsdt2trxrhcJ1d3dRky3tgv4wL7XavKtpmsFv2iB9DaxomLsULnECFmFHCrZ4sfb2",
  "key12": "2af3enADzgJMVLpeqfcbvoV5LKkTPHbbJx2AyjhihG614LFTFmwWwJXoQxK6HYLS6YTeftDgcU7yxG5wizCPyuzU",
  "key13": "4wrfFkTFKPDhZahU8yajPLvNsg7yrtuE2oDEKGe3GogHQFQLzCLo8qLak5G39UKwSAnCe1wKyrMJy81R2RnkwePr",
  "key14": "4KcowNpcB9hFNX4zgQMaeuaLzg8vmT6RWpwkGikhtDJ5AQsrgUjTxgX438i4CuBnFPm6MYWLqCJKYtEBh1P5ZAyv",
  "key15": "3Z3mfCf2TciatcbWsi4JaWo1kbb8bwmVwaJsNWypDeovavwEhE49UawpaKEYGg5PdhDx9ZgwoUT7P36fRrjLMnvF",
  "key16": "2v8QkemhNmV6ALEayoRcC37UBF2cF4MgHPA1aVmFfKY4pYXrEVhXeYPLHH5LNfvkgnxkAhitxaYB5vpfaNm4F7Xq",
  "key17": "2N3CE8jt832dxo139fCWhLB9HQnVx5tagsvsQMMJg2BTR4b7fSjhCsP13VxXUrxET8tSdMGKwZdsFq7XN39nGyzn",
  "key18": "4xCPyfiGz2d54FHgVPcb9to1mDneDwrRSUPuhkBwqRP593En7oxPev6pDVrUbw5PVkSb7zEhxMCF6hdSe3MWu1Xj",
  "key19": "4te7hKragcYPhudvxTsdBVknfShZRnYaWTaXPwJMhCWeAXGR2xL16mcksrLPk2vtzkf86hEQ7sKBN61MKMV7tKoo",
  "key20": "3Ud4h2CaaBKkjQNHwnXP9ZVxzKcY3TqKoLcjer8rfLhPEPcnaKYkAzdziszuPZ7GoWeLksFR5RyAzP5Gq1prd4aj",
  "key21": "53wGnes62aghZgRRkjcyrnrXpTXhCth2g1yU1QitR5CzLtSG52jj5PzSa42dimgS9HNVegMpmESufGELMUhSrRjk",
  "key22": "3eHfELSiECwBkSfmdC7k7tkqRgbidojbySHEsboKVa4Yfmi7VC7w6iAYvwd3um4N8WgtupnnsWfjKKjhKsLHVde6",
  "key23": "2c3qAEDqGat6rYmxJbLCzjqgiVSP3cuiuFcm5gWZPZUrNC9X2vRooRKkS4NAGwEtPDwLHn1EeCyefxRMShhVPRFC",
  "key24": "5AKCgWW3eKUb9ySDSz5yyjYjQWQCLePxbDLg3SrMcNT4V9gDUaqqombXkXdXeAaYAX5imkoyJ2gDaD2SxHiSoq3J",
  "key25": "3XtveiegPWP3av2CrR3raoNNaa4PGBmPXTenkGM92i63AENBNPtVyv6PWsUChbRJeGG5ZZynLg4YSEp2FcxoWMg9",
  "key26": "4smzGbSuDTRgrdcCJxNR6TvofM9NBYx4VLz4N2KsTMgqAD1fcfhzMkb9ynAN4Vi69rg6wUPqc4UBKKrR1hWFENed",
  "key27": "3wehZxuDydMsRXqHXcvFPKgj3b1giibn4Qj4H7GeosEvGcmevJmNWh8YQc8jNT1Ri4yzEKpR1iCHT79xxwKwZQco",
  "key28": "45V8JBy7DA6RAkuEk8oft9iGmQ9JAmbdoqkdf9i9LkbcjmNibTZ5EsZ2y16CBKD4JjhpRrZh5weY8qc9zNXkr7KX",
  "key29": "ejLvPPezsDFsBnJshbzMoLW5Ht3qtwuo14ZxV27x8n71yNSKsC8Mc4fPfgsr7o6axAjXVrgodkf9xh5bWmw3HTC",
  "key30": "5YEPyypLR4bJQKmKAQQYFR4PXGkdn7v9F5JxuPMdr4WeVFGM7QNHQ68XFYzXJcEoahHsPFBYjuytdrvnGMQJyj2Z",
  "key31": "35av8VhiJjtnqHBf1QHuhkwc9bjPK64yMUZBzzSPgTHDDH3QBW2rMPhjT1GoK7pvc8C9WNvbxyfZvFXNLS4JLXRa",
  "key32": "3ByLGn9yfqnWxcTE4NfxgGfbRAkDPAY3zUaNnv1aVeeeF1CXrNKsKFXTimL55HpkHbmg9GuvQ9UD5AbTxAGcM3WV",
  "key33": "gnMy1omzeN3tZBLeZEhuN8WfdHc1MQKeg5Dx68UwKCkDaW1RUzjoawJi9ZyWcgazN4HzZtD9GGKJAEor9YzzPnK",
  "key34": "kWpDH2b5cBN1MfQwkpeoAy65W6FRvKXhGFNUWvr1T2uDBLMMyRkMBz94dY8o7gS1HDrjAY5uuzj4X5ABu9vUvnR",
  "key35": "5MJkKF5yGYyFyJWX9xnYXTQSEv3eNZf9VmNxfppw1fTJgz92DqBCMJ2sYPPLhxRL9SuVQkFfETHv26TK1ebLqXu4",
  "key36": "4zNDbmpczJE7evmDxtQSjPyuuzUwZMHVqN1hSQZdpjjahJhoim7PW8caMy73DhkxFmnRuoTv8yF6tfbB1ie6LnEz",
  "key37": "32RgJDHGDK7R6kdKC9MmJVGj94oB4AAaToLbsHeiXfsRiGZ3WLAFpbJcstHW3SNmr4MRVDL8CgXipM24MobvAe66",
  "key38": "2wGoH3USdXMshgQYFzc6RbK7XwHNpC33ErYsGxvmVJJADwfSYMvLSrwoGY6VFymXS5zsHT7HtzLnuZTkV8wpwpiq",
  "key39": "5x7o6fbL8qYCem72xuLiZjhZ8ruM7qUryMgP9hPqErRaUzcykKq9mq614ongth6oX1CUee8hLY9HjhkquvGu7ZLZ"
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
