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
    "4ZQ2UnBK1vM9YAue4FnYzPKvFdhQN4642JA4tGLp7wXpxARZWpov5jVBA686rBiG1C25ELGRx3cNLmTzcfxmUsuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HKvPsqeQm2Z2sbq8DZprtM1wc4uUvmJkcVW1u65yf5yFSqregGPvuE4WDVKGyih7QGacbtkfQb9u2YrHGmXK8uD",
  "key1": "3dvBuE9xWz85sSbfZw4HFyqo8vRU3tYBHbMwTS64aZtefBC29c9Gh3pbw4EBVennht2ieX99TzVbkE1GP1ZJxXJR",
  "key2": "5ZdrHcKvjesPNmP53eHnZYMC3samPSZbnENmE4gF9A3L6xEXdYjqXB6d5my97fJMVyhAWrSoJ3QcNoMY6sf2gkp8",
  "key3": "5KJSnkKZsuLuYVaLvU9WBjXgkoT8Zoi62BehQcQyb75x4rb6Pf61838MiK7duujf2E33o2EMo6AZkwT5FJXkdvgk",
  "key4": "2qUQdM7T3PhJqzjPTSqAVFeKNEVwbGpNGzfWFvaQpn5evFHkZDUs4PAPiChMeT1tHGf7VC8UwvHfafehFCSRMMFr",
  "key5": "64d2G8y787LQNEuJ31T4Y3kZp2W4ZKUAGQnsmKr51NGGpxH4ynesxrAXGEMdhSd34RWocBat9MAMigZZQGWwab4r",
  "key6": "5ke5vFiN6JACWGwCMMJeQAkn9YBRvc4fk7LUrtA2ckH5jFyfQgWA8pdQH3gJz26N2cSrWXaH984KRhEabAkYVmwg",
  "key7": "5W1prhCoDuYSwqhPZUPYzANBfgX554fPmWLrFm9KrBQs2BCp5F3ipHHcURxNQ38E4sB8jdbWE5m37xY7gLTsKiCv",
  "key8": "4cG9TYuw1sJs7VKir6cW25Pwu54g76B9BVWZWYvTDLnP2KyQTwSdHYjRGYMxZYb35TuNnRT8BhbcGNuaTfKVAgFB",
  "key9": "c7BN8iEzkV8v7snJ6936gVnnk8Cch92JPfBBhD6yVurvQ6AVTAfiumxogYKsWUGSzoKbBhj5De3xtyAZuoC9TMq",
  "key10": "3BGaVR7PFjG69ToddUgE74PAyR2pfucBH7tRDpcq2eiNYBaVHGqCoYhL4Rcf5R2vnYz9AbApJjT4xKf1TwGQApYi",
  "key11": "2oiyBPRtK4LCCyTYWD1C1vDFu2yxkjG4cDkuke5DA1KWP72aJkp7pb7J8TkaNwTYATtV6Si1DPZovQbJ4M23AyXX",
  "key12": "2hh42Wbe9chRCxH4T4AjEsEwWPNZ979vMcBizHoLGBNPdAWYXS9g1LUwHDGtopvf9ruKXTMfauPKWE7c1z6PkyPp",
  "key13": "5vGcWLGtVJZLKMfY99VFXNTfnbN16U6hJhxqb9G5YE1zzkvNQFE82XkT52fVPzQBz3j1NUKQnruMpAz5nQznkKPX",
  "key14": "2cLpDnKCHxru32YqPxPcwqadPooKA2WBpqZbAASnr2GWHCRR2EKx2nJ8t4utxSFVX5NsK93TrFfUvY21DzzB2DZ",
  "key15": "4bDqP6kSUVyyaHospzAXu7wrTErFyJ1cGRdpZx1sTzjyq6yHcoH4EPvYsRvtxkrHbbWn2cdpFHjtXm7ZECH2etr9",
  "key16": "5gJW94Ycmqt47Ru79Ezvqp8F78ZscGnuZxYgriAb6LWLy2qSNrhCQjfZbUB3rviNLx6T8iAuT6iZVSiz4wbzfzju",
  "key17": "2rcHLvDeGHDLHRw9kdbsnHnu3U1UVYvz2kR3aWu5GqFwPJm4gsDgELaT9mTnFmsBwtVysx76TLG48WDvvqnXWLd1",
  "key18": "5fm8t2vakMsjWEFea5hAXbUtz3eeZGakDpazg8uA2T1ZT2F3YzSrUr7zQ9CxwfQpW2fcurvLcVJvaSU9hghwifdg",
  "key19": "pvyQ3oAdnvFcbefX4ARLgp97Kg41CcBKtX6SaLRy8LLmjoapijWwpKhjzTgLqu1GQxLtJhhQwhB6PBfSKSf2YzM",
  "key20": "3jYhpiBuKJVwvdZodQP4zwJHeaUAX4w7Fcomk7UatdG9YBr7TevpDMcndutP3uhxiYmWQrUWpxpsEBHra7Qw7dM2",
  "key21": "NTHmAtxBEbwBaN4aS9d1Kmo8iUywdjeqs764K1ijCbNX5duoPLiwobRMnd8c6qfvDvWb3LWoZbdjRxybC3bodyG",
  "key22": "1U3sdqwPThKrTTjn1aD1w1gNDxVgxJopuw7qTdCFVgLvH6PBuuEHsAQxgjYDsUcghqFDP3VYGVjbZg1yd33uJTG",
  "key23": "hUdK4c2rA9dnC5k2kLw2yvcMsrfzqtEkj6UQJBERFgPvEw6TPbB1GDFLHeGiwFPjcsQNw8EBkgwGEYdevxEBGwz",
  "key24": "uKhHwunxqJyd6TER5514djAQk7YGFywb2eyGTdoEdnyP2cC44faZ4CAEovbF7tMQy9j9KvZnAGSceqYEsAuSvVu",
  "key25": "eUk9PhNoE2dMi9rsZaFhKd5jeDD26eEAw8wiaZqfjsn7MUzDE8N3JzwN6GGNWU8r9inixrkoccSd5NutfsSjCEH",
  "key26": "v6RJWXpqfp95m8rHDUddiZreXQ7wYxU3zdBQymT1EPL6TPoZvEWJcM73YkKcdaCxuuvjEdFLiX2eBzrCQHVG1ML",
  "key27": "2DnEcywrm2FNecNHc2WuSguhFwGrx1GEmSgeMsZatK1aXWzXMfxBxwYxKbYV6cyX2cgvT7Z9s4gt2BKGLJEiG9US",
  "key28": "4YjJmacAwmzZ5r9VE6CirSxyF69tcPEZvGnwHyWHZApHqw3vH68GpJ1MuiagcrCpNVR4FabqmSuqeewWi4GJNLms",
  "key29": "oQNXHuTw4onnpEsKmgvv4UUc5xHULW8gS8vWk2zqww4C3DTDQwjs1wfDEh4Qft8Xzz5PbhXMFGnESsFqmww5g7Z",
  "key30": "5KhKpKmpoMoRPCDVmhhk3SwBsJZX8oHc3ooLm8j5yToeq3MUmEuad8nRmQmnXFj5yAVPUgFDSv3H9xbhh1Zbcedc",
  "key31": "2HkWv21xW13sgTWedejHKkKQ4DKeQ7YxAtyawXgfGnGAJu2ak3gD15e7PCopQK9Z798vxBuZMoawtcHbDCpUuqJ1",
  "key32": "KTHf5LedSHFmBs5PuGZAVFnwA5TmmbUBSFuwnEkJARj4vhuHTKrjkSMTHWTavy3iDtTHcvPNCJyASFXVHxWcEBi"
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
