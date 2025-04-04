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
    "4oz5VT87entH8cefkXx3EpRn12onYhxMGzFYvvGw6e6WHLEoggs8wNA2oeTCQyHZQLbun4cjT8KMXBwLEvRbbSN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tEw8sZqwMXuV8ah2VmwF1upGAGFEEo9RWwnjUvFwebnSJTAa27N5KcWEgJ8gYRfQqLkXQKwg5nAjtMCaXrDxpr5",
  "key1": "4hSkWGjTLexPM7eQRmU74EFPLmQQFo7RARDozoiyckTbwsHGodUHjpnL2p6CEm7pps7j6uyMJY3yc1MZvdoyUeFo",
  "key2": "29jYFArMWEMwYJQmcgNvzT8h14oqcXPsVjWGjgUX6TuARbhmR3ySTgNUuEh2jnNjkf3dZ1QpCKda2hvwvNPQDAc8",
  "key3": "29gKoNLdcwAiKGCdQUY5FnW4aAjc7HMF8ZJGZC8CBQQFLkum8AZ7wdj1NNhpxr7wKfPSt2QBz6KMyj9rJ1HgkoC5",
  "key4": "59qUNNgP9EjBdhGaoaHsXQHrWoi7cGVASUUKErjReBwTSfACfRCBbNRjUMahfahDcnDaptG1geTEPGUJ23BbpgKi",
  "key5": "2afdB4M7Rn5JnUwCP9BrxUXx5KPJchKCSuJC9AmA1ECfMEvdfFSsRhbDqLHNahwSPQ2W5Hyv59RnHRUt4SFh8pJv",
  "key6": "5qbfgFx2prdQrKBkEBYa8dqSBrVjrCMnf2uwm1S52MqZeqiQFzZZsTpkGY3v68AszideiASxFPcg7ftNwU6EEPdk",
  "key7": "3eaWDXgbWMibamkY9rnQdC2DG36M5bkuuXFSSV5Fdfj58udqyXHvtsfn9tZHTnse2SsUPvD4NKQoSjdxFw2C2erp",
  "key8": "5dgTQ7AWzggpsWdj5UL918Lsu1BcfvnYPzKKYda2CnzDhTBfnuuYTEGC6Xj5ri8XkvY8f1uCKrYj6t227VTu2X4f",
  "key9": "2JeKoA78mRXcytWEwp6GhpmRCfjQBCANTztBLV3xBMEgzKRvANZgBoX1vTPqC3ziEmzVJPufqDDDNF9PGEHUSVtM",
  "key10": "5iXg4wHpAJD7DZnxXuwsYdtg3T2scQ7j4nBoHBvLTiSfABJGKh4U8QbzambHzTaKsHJjWjWZq1inuTL7wWvHZfKw",
  "key11": "4GJTno9G7WVrDtYQUD7ZCoBZssbbwUMZ5egCYm6NGZG7d3EjbwxmbYjimqCkPiABEeFtct3aCBR8h3XkSrkJBEVw",
  "key12": "5gEcxQhTMCs76Fy67rS2Am9EQnUYEwhqFohiEiPvuY1A1wXVH4QjsXoesEq6j64HzypRy9ZjjKPJg4tixQYmH3ps",
  "key13": "48dhH6cVvCyJCP4cecBaebFLF5wv7frqG9eZeJfkmhKG8KBASYeZFHAL24NMTAp9UGZeWycbg1QG3usRHS9uz3Pa",
  "key14": "3EnAsRtNxYQwNET4Dcz2btvivGJf6XziVWVxuzLLL9BUivyRbZV6Gsj8sxLhGw9kTHK5jYoPeaacsrfp5Bf4h3LR",
  "key15": "5SzTW1Azq6nHApAyNPT6Y5M8FBWiLaZkcQMr6EEdfWCudeggsd18gi7oLwTJ68XvRY1pX6jB9KZ2juooj6Xvqctf",
  "key16": "DXXifwoDmciXV2iUB6m9tE3b5gS3d4JyQrYft7S3p8eVRfvwPTJDSC5nJmH34xUDZ2NfacfKd7wCVW6E3drxJVQ",
  "key17": "2qAr7esp5Bq97dAUgh9W5BVdrRQSi46fgJtZpEmp7Z1cmRJYQwirVcBFJenMkjiD8RH8BppybQRjaj1SvKrhmSnB",
  "key18": "2W8HA1cAURFbzZHJGCyXqdxT1fdziepdW6vBFwg8hGeyEozLdmSc57WkUED2VKRY4tyhd39VCwNEjwUaJaxtY4Sn",
  "key19": "5KspnWJ2RZYKyZvZCvCrg8tRKR2fbhz7RyoPGzXJzas9yHzxPrzWXqVKRQBZiXQiwxLGRun4JrWNXK2q7Ghik9pe",
  "key20": "5Jhyvs1FJWEcjqdtqke5jmqenNSA9gMS1kUDD3pwQ2DAwYwsKhHozVJeL9EA3XZDKeVULJ16XTcmkUSESjF9r4gZ",
  "key21": "4zY2XHUPhnG691cJdsVsw2mYW7mJs1mFiVc1r9AoXoqMrPmgreZiuVhUFG2NsyG9B5T8ELtHVKYGMFNaACprqv5V",
  "key22": "WsoxyVZq3YWMgDD9XnuwPH6bC4fcHNSD8V2pcGXHUdohuJGS7kz9mnd3mfXHpnWEazLdNaVowfHmciC39RppTKJ",
  "key23": "5FkRWtGbKCRkZqqRKUVR8xpzuh5Mu2LnjDfqctjSaU3edN77jcKVBYF63wZrsc41nu1ZSLsuKQdwwqRmUeD3jemP",
  "key24": "sxKbvnBi8UHxH4dZ2PxdZZHedVC46LidWKaVzoKXQn4YA6Hny82FEi52eo3wqxPeG1btDxmfXHJRpH8ZoyY4Q9s",
  "key25": "5NG1jJQ4epzAUAP3rNmwDWngMemvL7RUqF3tqkxU4gpcgrfx5TUaiKjcA27TPR1gfX3v3pv5Dtxf3eBHLxWPriS5",
  "key26": "3Gnv8DCRei3tJ8ynajd8BtC9V116BR9zuZEPxC1PLRLfrt2gsCEbLapYsRn2bagTU6NWsQvD9dSBTwhZHfHsQ3t4",
  "key27": "3g8XeRFGSxawQhHNh1RNRTF6mfKSVafRbyxqzLCoX12fACtFiecKDgSABzEAQ32dmteXiN2hWsUkyhFS7MB184Ry",
  "key28": "5o8mJSqGjYAFTTFX68wVZspwP6xJ3SW6oz8o3nQTFNRG23egSX3xtdJNQd7eYi5TDUjEqTSysYvWiXSC7saEiymK",
  "key29": "XGChVtY1SLjASFd6Kjj5V9XVpuwtiyyNasPFBbaCVRD8VPhSSgPgUp5VoYr98c2z59nQJFySkBodiFBKRNbdxYr",
  "key30": "5wQypmNrMPYghTJXN4vwMyCrNvd1egqLU4tZ23XbjwdeXari5pYwBe6qDovPs3x8YozKcf1tyZES9oLTyZQ9LYjK",
  "key31": "46oiCqWU8P51xLMNtsqDRvanEP99Vpae57R3cEXwHScfpAJ1qLNxgEBk9WNYAzSdenBRXL9GXN2xp7ZVDx4iaBXF"
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
