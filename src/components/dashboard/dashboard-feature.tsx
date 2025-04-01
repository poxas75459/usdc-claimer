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
    "5D6iP5BaJMasggHa4Xtczyg5Q9vwnraDKf3vqgE5TUqupE5fy88s4XXcQvfv6hqRBrmRvgtMGSmkByf53yp5ncAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64BG2LZK7JSvT4oXXS1Te9DodEEqxEnWeegKMkSVW38ztdgo399N7Jc6Hr4DW7UdXioFCisC49Y6NgKmmgpad7v9",
  "key1": "2owo6zNbjRizzt3MTi44mCjKagUdbniWHBZoe8wGLkXBv68q9D1pE5yE6tD1a8TPgzUEPXd54mbjW7t18XaYmp8p",
  "key2": "2an3Fs7rcK9rLaZNVsSwyY9WmbXHfoktGFYhinMnR563vJfP45bc1gWiZQjbS56DVZuGAQVZZK3h7yNHKL2DR1FP",
  "key3": "5vUWCzhdVySAHZAeWPGmX5ehj6ocWjDDgcceSMGmxZDscsGN8s9kjv46avVFMfrCYeZZAhEgELAaqiztGK5PLyAc",
  "key4": "2gYLtwAPejWFrA8WUQ1jwTkiJxNRokCeaaSuuDAxNAm1jZM1bqrvq8YdNhkUjzf2z3cSMEjZKzveSXRVZyNLuQtF",
  "key5": "4YNmTUiS1mBh43YuMn6a6ZHpbMsCnAb1EpepRBTGog3xyRMNQvUiJLF29m8HKpaynqLAfYnNEYfnhAsSz66H8bBv",
  "key6": "259EY6KZT9aNoUNVbXtgTbV94cMf37VBNvMAPaSGuQhJvRqhJzbcrMK9MbR7HvBVgHeaLzxnFNpSs5VUgQCDEwku",
  "key7": "4i2wTJ6rUr32WCX2wvKvkm7gHq2HPyXzVxVEGqVNbkgStxTStt4cf5juA5FJpcd6Uy6ZPXp6aSBSAVAwGJg3B2wn",
  "key8": "32b3unx1mhh4AAoSwTgGvRiEYPeTm8P59vaLkxBzLQxSDGqnMqsFKnQJJKCpcZ872QBCHTTRvKMBU2RAT1DPFjmt",
  "key9": "bJvtMmPe1jUn4ZroixsTzQ9Pbjb8Ww2yZ5EAbw8xmR9i7ssaWV2p8Yhnt2jP4CDtw9CyPAgCKt5TpQdGSnap9dG",
  "key10": "i427cBXfvYvrbfBw1S81pvWhV6ycDV86K793MRUFw41F6qcqBdv3Y5uWDigNdmAwpa3rw8v9id6CnxentsQPG66",
  "key11": "SxPvwuSAiKmmzM9WwEbf8CoSLVqShTHku4xm97zyFfw6hHBW2U1PFtac6VwksrBFZtCanyTgYUYnu5gh2ftgw6T",
  "key12": "LqaTgEkkR28NVmz3NuGe5iQyPj7nB9ttfu1L4CYkMZ4AEdhySr9LuACh8D5gW3EVo3eCwTZ1f5enS3NJ1exPonB",
  "key13": "5yxhiUWdHTCgnjRjtCDPg7ySwmdV1XHjVdwtkqW9m5ncx32ixWV1aPoZWmg4PVL4T3Jfti8NNGTPbfp4MGp97WiE",
  "key14": "3zJJgVxF9VjkENb1SrpesSev98TWSFbjvFwHG9w8QdB6NqEnj6KvgK1fxAHbHCDm346KS6dX4ztF92C2WzA9jUVZ",
  "key15": "3nsBAQoJV4C8UAdkK5mDgDNjFyXp938uy4uuQaVmx2pgKh1MFJrW6xGkLa19UF8vBBzNb2ihBoAcFAMeHuADjNo5",
  "key16": "4bTyXxiVzeer6yNMW4DEzAioWUsEi5WLeJosERhJWE8212cwuwvYQP9VNmTcpV9FJpvYBprrfY4Myh14zHpnaq3P",
  "key17": "3HxSUFAhMTfqnAiFsBRMYV4UAaT1jJdS6r1ESwNcwtTk6tueNV9urDT5xPXSnXiAzGreDXUEWnSikGBSaovMo2XV",
  "key18": "5vh7N3hWeaeMno42MoGKER4rJfJnWBE5ChSr8NZbZ2cD8Cam2PP72uiJtctegpYo32QG5mD7p3DyZiUgZ3zv3rct",
  "key19": "j2FMA3euB6Rqvc37sY9PnF2MUAoEoH6Lg49e3rYHtqhHBAbubcBzaGBuiSwaamgkaNdSuY8gomzyNQ6tsdB9hpb",
  "key20": "5wZwLUoFij6dPqS1ggmF9ffS4zbEEvDcf7y6BWCWr6Vd85nU2P5N9zwAH6SmLwyWEwym6FRtPB9J7yByDXeQbUex",
  "key21": "3L7LEwRBboifyqq3zhAa1LCdbkc2NeGwaAGP375PYTmF1aFUVDWF5gvnW2jFsVnJafujNX54CrPXGfso5YAmaFqK",
  "key22": "cgYcnDqV5Wz2BYKXFXkUsoP2aEeqkwFFDV4QGhYpKHXzRfB1TJBxKYMEWxuQwVP6n8XpFjMzhKiu3yeSmyDx7qc",
  "key23": "4D34x7UtobUxKRnaLxQr1GeJ2CTdPuBfoUTEQVxSQRDpJtxn6XmPPfLHJ6gxDzx2viibHZnHmhjkddwksEzGbquR",
  "key24": "2fm4C3634Q6rEqi8x81ChTA4vFaqgpCDgneKGbVhrjGSdebd8DLN2mHkv5xY7ri2Wa1h3NKT31aYJ5u9oVZ538K6",
  "key25": "5z2oRj3heydUUT5JLFJEboXSESuNjk5EoQJg4o966ECZaXjqdHVVq7iFeKNW511Hf34suh79zrVxgtki7rNWahpm",
  "key26": "5MueNMsFiuoaNRvgo2Z5oKav1PgkrAWrakFb1m48Qjf8G8Bm1AJM5e5UykVahmtMVJ6G85zsjnapPLKW22nyydSJ",
  "key27": "5PU6wo2S2TzXT1di6uCCaQsgHdvG4u9AWPwpMadgs7HgbHCqKnvkGU9CRNpTaaMkAVBKRBkAYYLZgHTz9cgiAGMP",
  "key28": "3d3YWybPZbDJbZLZFeDwBc9F3i2X9JebdddKxbRxxQ3QsGn4ysttUAL2D6H4NCsmgCFEdUqdkJP5y3fLYELwu7rE",
  "key29": "49P6SJAjnn7m3qBv6VsbnnLEpwLt6SJJzZLiDsBQkTdzwkp8KeEB6yS3sM8CZwDwrYwwfKSFKCYDi956XfNeV6Uv"
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
