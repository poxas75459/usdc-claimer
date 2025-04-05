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
    "5fKQJqK1gBZuZPixHvajQfPdhSeMikX6ay4vVLo6mpsZdQQSQvgXTEVmsCBRtwQ1LoWWd9YSJo5wy9pK27bRriSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fd7goHkdJ5jjmvfjrHRF92DwyRYNKjQBz2Hx39KMBkC84DmVFT14D8nntzimJJpwC1m53bSP17gvBeuFTg4hHFA",
  "key1": "rP7rxnUcWCPyEabyUZE9amHZS4D8NjY9pKDU29MmZkGFFzG6M6NinokpNMXcRTE7SqZHwrdADfS5A9DPH1E8dNr",
  "key2": "4jAzNVCm4b7q7HkNA6SFrctcb1BmVsfBab9PB6gfjZaq7wUc2RTBvAF74HbsXge4feuRogiNYLXR4ot5gQebvmoV",
  "key3": "4y93SimcnHzyuKaBmUc9RhCkA9RAz6GoUGQcBhxNqEZ9rY4c8md8Q8f5pVvwgAKps7JKKYGcCHYZ5QGwgANRgUtx",
  "key4": "5V587PTWMnYiPK5ktnLzLmBEh1B2sKSiHWS8Q4S7tW1Fgk6vG68DFEyzyhBD8PT5t2VmRWnKkS5Mby8tMeieeYBt",
  "key5": "5QwpJ6CMxSBSjpp8SreuL76FggGBtnojnfM6xDcDjtrU7g2Ci9WyJSt7U8hakxQFy2WeRw4CRPu5yFYisd4bmh98",
  "key6": "5JnyT9cMcimexpry7JPgBPJooHSFJSSuAHd9zpYWk4BAF4956SDk4rWc4jSLtJNv78tUzLAAXfrZ261o6GqdSFmw",
  "key7": "2oqT6165XQcuxFqxUedtcpfdR5dF9Ta6kKAyeP3rWEJRmEVTrRp55v1WVy2HR7BHxvoh8zvb3zzuPguJ8qsizsiX",
  "key8": "5gxSrSFy6zzsxgkKSukRTNUNbnefd54WphZxj94kWFqa65iKKyhPqQLS3aNpzVgJ3XAfJX7FXkR9Rrj3b2rBJwnL",
  "key9": "62Ukawtx2oe7KYF4t3JvgVu3Y9p9QkLJcFr1Kgwi8coRvTQhGwGQzBTqdXiMngwVzhW6b6HFF6cnAeAjkpDugp6r",
  "key10": "7G2KmgyokLFNMxw9d5yT5opdWKLD5WAjPYfQqGWLD8Pqfo9Tc9tJP1bpvhbZJ4HpLPkFVc5d8HrdithyYJaff4s",
  "key11": "8x6eZm5q1G3zYsmSFh4ZxasiRWUTtbjoWvWkSPEXKJ7XXsC8G92V71FBX9VoW11S5KPrLCsMfSLCCxdThNPJX2u",
  "key12": "2rQRYSYAvsWkpNXcYUQ3SA8S2NdZzUBeyaSvyBxyGq4qVynJH4MkvFU6N8RFqy6X6XSVn6X2tDox6UoxejHStCUS",
  "key13": "5bjk3rjudWTZYGEtnmhs3BLrWT9qWmhTKUccHYXSauh6n4fs4uLGJair6o2L9yB3U3MMTi3Q6YaNauQBy2hm1GjF",
  "key14": "Wweavcsfui1DkhH77WRphASvkuaTwc81NpzhD8UDqTTRxEPx2AANEm6Mdz9Ks84XNh2nutyipwPQJ8wJaJSCfgS",
  "key15": "upfLKmgy3xHmvGVmtNzqHmERZiCvMqra7AaAjpZqdzYeyd3xVN7Gjkxa8QBB2aufb2igqP3KtQSsdyBzbtp25Ra",
  "key16": "3nXJjFRGuXaqK3j3f1MiKez4WUC3uqbvE61Kfjav9xnFxJd1meDfMphFduyhS4w5HwSuxB1KL4J58fPFUgcoXxxw",
  "key17": "57cqN4NbauCKArRZx7haw9HTYiXnD6W8Tdn6zprmFjxnFKEYxVEEsZVTUj1f9Y2zzxtXfvAQysNYsugzeiYZtEx6",
  "key18": "3SBcQLfnWahF54aJe6AhmHVFkSMWP4njjmHdcgoFZeSVDqt9FoLszuNLbBrNE7veW3grAzJJRB5z9i8pE2x38QGb",
  "key19": "hBr3BjezyvFh8hmB3C6N1ugnaVzCMazYp4e1VUtx4G2igpwDm9C9vKVDbUt6UCKgsQtc26y851UYpDRwzn4jqeq",
  "key20": "2vhUbyZjEoPqpoaXMpnWzcmrKckMYxmmkZdeASbWMkytfRJ4XBCb1rEuT7zhG6gnXqyLta3HMuMkyabni5ByXzt9",
  "key21": "56yt1KhCreUyNMVqPand3BA6B3PAQsNaQnbq7XMN9tt7xsM9SPjb9xvcm1mfhCjyd5ghFXp3tLskuiAXtiJLcK88",
  "key22": "4Vmeo671QZoRcjGmuMHP6HiqRjk95Sv16N3yZGQSUxkFfYs1uoZHLsh1JJHh6EoGTk82AMsy23Qo3fwDxvKksPZd",
  "key23": "2Eq7Pv96jEbnBCYcjfnePoqJwRsBXf37NNpSGpNqxtiHD7xcp4kXX1oFcVqmP4DHG5jVk8gzSXNsuN4A89ag95Xe",
  "key24": "4LRBosHJu3rChMvuaxatoDu8FJ3Snq4scZv9MjjVPNM3rQ5QVrDaYfWqCxm5DcSS62REa5Yuc93gtAuMjjQNpjvJ",
  "key25": "3dtgF7Y39oaAJbJJ3j4pWerUPKZC3ULecMhdrHzSRUTy37TQiwM4pEb5kaBo2vdCfxLd4Zk4NX4Pcrn8xNdGKKLP",
  "key26": "jg5zCW6EPQLojU59THHjguZoy56W2dBRgyNQ2tjjBKsC93bqbEKfiLWYSCDDMWunZzF5ysTzfFwW7tAEGCPkERJ",
  "key27": "2Lo4HUhAa6Txzppr1DN6nmVVfFZAS9Bs2xxbtVAUR4kAHu4HLPVa2CE8SxNxkD15EWUQjRsqQa6MZ17GTu9QEQoU",
  "key28": "3txyM5zBHX4fBmExUzUAFVcw7tiVS86N3CCMf7icKCC5ATT2jnFBQPVqttimPTMcF66tB3S98TF1zmsVN9AoPC5a",
  "key29": "3KhL596reZyShLXiakjXKrH2YtTNLQzvJD9Ke1YgUL3zgWiSJ5a83mJrvEYEzDUCEwQZYyiLt2ukqUhqW4ngkuWT"
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
