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
    "3bcpHm7LSm9XCA2dtjQX7rGcRNTiX5V8PgYzFzi41Gd1wvABHnTRpMqLRaGnCzGXoF3VHWoxE5MxdiXcBEBWjKCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jcCb388vcL42BrhJhuXufDUF8SHyXri3eX73kU6zHFuc3ySfTi3aG7MsfYNC3qGJcW3AXiXF1bYsYJvnMcgRAc3",
  "key1": "4sGfivgJ2LCmoPgHAb2WQkLA3iAwXh7f8vHTYyRryqCeimn1jX29tCQ8GcNQN5uVxxbjDTdN5FhaTEaBKwfcbCnR",
  "key2": "4cWUD86T3Zam4YjUyWo1VnAJDyfkVmQsPfxsYDB6X2sfQN2hEYx12yM14g725aDLW9QCoyfK4GtispFg85C6bEgM",
  "key3": "35Lt5z2Zg6G82kzkWN1xysGPKAzCPN9FUYC8tBw8ex3suazFaeAKLrVFkwKh9EeFiErLSe4PnDrcgyeEojPnHgVv",
  "key4": "5bFRvC3uSTa6vekNypjjoBb78d14iytVdYFSNtEgPivrzKGZ8U7ehJdnGFCbNzyUcismDkUQPFAZ1zPC8eTcTRsS",
  "key5": "kncSkzf7PBkBGKMioNUFscMGXAh3H12TnKxgizEN3cL8GFb5QMLe7TqxuH6N36j22AHbvLYLNH1791WG5K91wBp",
  "key6": "4VjK4JsEzM24kmCbPHNDbws9gkxA8dsK4SXTXG6FTAcFC8E6RYGJ5o8piFCwgStJxi8wVuXYEZZ4iMRfHH3rh6CD",
  "key7": "3hUP7PAr36cpMaMGHpSpRgBHwvejsKMfX49kDF4e7sRxG99St1Wvn1hrKFJBbLmyqnQv1wdcbwrNUhhYUWL6dgLY",
  "key8": "2f7TuF3G9FHzFcifrbrEtFggoiANjj56N7fRVLqs4BG4NzkBtE2XKyQ3YkpDKZqXdVnYjeXi1houT9xnYjKkkR8v",
  "key9": "3w1H6Fr9tbaM4j2KC6ff4az2a7qHoX7gQ64nM2px8pQR9ubD6Fm2T7h1mKXnKAtHQPTov3yFzrw2ELSC9zB5vQ56",
  "key10": "3bUEw7BWb6K1sgqKv5DihfXcKtXUZaSjijKULLuPTh2CVR8zrsjTgPrBPetpTcoi25Epvn1c1p7ZJ3T39JCrVGaX",
  "key11": "38zoBoNBMnP66mgXiwjJe5e2AjUUU6KbHK1hUDAfmXF4jaR1MBHjdfYXFSjN9gPVrNkvdkjqpHSMsRUEWV5TzdnJ",
  "key12": "wE6f3JTmnE5KjTLeK6Mk5pdAyqiFhArko1Z8iWmVHmsBiUXBUVRdpVjeUyVcDJtYhEGNWeN18rJiHHcQ6J5RjtR",
  "key13": "3AcvLNXKfBGdnAhwuCh11LJRqLigQPJKa9nUsPcKbNrQLXPDVzZ5cbSjFK6CQus6evhC3bJqH2BXHs5ztmoqNsNA",
  "key14": "4DegZoasPyVEhBs99G3CGpVPrxuWJFVFKRpWkAeLxAHUUnXfe1mLbpkk1ibXkGjrsuMDnaC7RpnouTwq61XEASUx",
  "key15": "3CG6xDaFnLqqo3YZW6ednk5FEuNAyoy1pEutVjSzkTuDH2gRdE2Ng9oN9W5xhwyzR2mYJDNdDwgQ7X1gdp4WrHXb",
  "key16": "3Wt1j8scANSoK4yf3Dh2a44A7ZAKDDK9YYCvVCtbE19sHs7E4TZ6okHHptYFXwc49dj6J1UMLE6nsKhUzC4xdzih",
  "key17": "4CQALc5cJMJn1NSGDic9rAFjtwQY8cWZwk9LwHqYgAdVhSSs7Wqk1vNFctgbz4yGdXTiYicCVoHMn8P6xi1FMzxG",
  "key18": "5cdPDXTQfqVsSpxDKyUv1sjgYTM6DW7Ds23da6YcGHtZkkJgXKLYbiwzK74EHshxmqfa5YA92U4BFvKkr3YEkjS4",
  "key19": "4XPb8Yk4C8KLRQnn54jx2FXAWmTP75Kud75ikvuSvXHBox7SVKWDMSymfKCPsaRes1Q4rfJs4E8byc8euTwBxjN9",
  "key20": "4e4qZoiR1ykCWPdPZx8ffjenELrQj7cnoZNM9pia9HfrVn2qynX7j65Da83tNp9qn1CHpUerWRwnWh3Yn5sJko28",
  "key21": "53GBgEGS9h49PLuFXfzCfrXPDXACPjoLFEtr8oqNghfLtgPGe7UJiHqZfKVcDpkzbq946z8BMrEDJRjgpBiCSABc",
  "key22": "3UHGasrmGZvzpXzQjUqmeYhbscCQbFzuEuKtUjSMkynvPXURw2B2nkXEdkp8qqvbLHCmYGK22QPNjxAMqBjSTosY",
  "key23": "4gfmtUCSJceEzSTUE6wDwYJti3ArrtkWJQCc6NiWeneX9CJ55r36qsaTqArH2xPm8gwRyhByeG2373rqWVSGymGr",
  "key24": "SuJS3z7R1kLFGv8FhbwM4QdNCNtZ3PEd4UAvGKRwUAAT8ayTTmBBnMUcz1T5NqNAxE6ty2w15wqpgBk4Cma6QJ8",
  "key25": "4FM6sCxdJfeaWEdEfZ4Px9wZB5gZF5F9Pxfa3Nv8JLWNiCxLLUNrEV8synqPAe5QYC6jhsRaGgfnS4cR6TiscxDr",
  "key26": "3e2S6rCg6Uji5pL7ptxM5JjteFU8c8XM99Aoj6rsXNzuVZbuvi5udc6DPw12WGvnQ5ZDoYCv1NjU2Cmy1JuM6Kvx",
  "key27": "2eKPG8aYXeRz9zx6pVSm5xcJHNrkz6q2xo1oPyq7CBvEyjjSZkRvJhwVd43Hg3js5cSqo1H2AWWo87gB6xsYTDH4",
  "key28": "5StWjNWmBt5AzWQ9eoVESa2ikcQ6SYj6BQywmtu5WwG28bRqrvLkSmAm75vymavqqw7hDWey44ephXbq7CnhaMVW"
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
