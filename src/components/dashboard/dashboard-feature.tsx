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
    "4u1Yhta61SW6zFEv4kVXRpRrQJWr41XK3j6EPYHeoZuY5CWzxXm7ShbXE3tZxW5H3A42PgXgiLBbKqmfe1wyjV3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UxcUgNtcKazSxtKPouwo3DWmocEKLmp4ricgSsEbjjEy8XMNBcokPCY8BmekyMUEKLg4UoHjqhGwTRAmFdca3Wo",
  "key1": "2iRrMVRNZ7rPp8fj13nrVYi8TfobMEVb6e9HtktWg6EZPxVyaeXPyCps1zXdxEzwfv94N6pp1dFtUsYjLxSzJgJW",
  "key2": "5UqzTdq6YdTBffsK7vEyMB98hmm5pRvi7eixXczUPaZyFUSu3LGLxuD476k79itRW7pgiAwzwuTrj6nYaZqYKHgw",
  "key3": "4VjxsSVotkipPAgkEwf4Qi4Gt5pNH77JipSpcMzzh1VxTnmQJWd9zjhyUoHo5sjgpy1Z3h7jKqLXuKW9LjSP7VG6",
  "key4": "Y38tRCBBXA9JTM2sdcWJkvDhDkm4ge2cNKoqNdKia7z925h67kkUtzi3bfg6baF8zj57riQJnjFqdzCshXCe64h",
  "key5": "2JVugkWEhqkVTRJ8dCiaj1aE2jzexHq3UbERFex5bKkfnfURTeJJeScw5hBdXKLeu7AhBEu8t6JwpXa1tUCpF3VJ",
  "key6": "4whmn988AK8NLUsVtKqdkUn2WCSnYPGC6Q6WEWmeY26tAD3ADBFKxTPVRfpaNaCVSKDJwAoCF96w1MJwrmP7D6rr",
  "key7": "F9QMAyzx1jatwryH65oVyVYrc8m2FSZPQQDKQToM1og4XNtE4QBff1vh2uwchuDvTvpZtPpzV7Uq698oEfFMqYB",
  "key8": "45hqtFhSUYfg2EsBC6AtZSZ32vDZqnnjMr2es9EFdWh1dqg137f9M5eTgMXh38BLQW1hiDgiHgcqAz8sboffdDHT",
  "key9": "5GmT22mfvdfkCjMKSh8sMQVWVvHvyqB6YkAcPTC7rvVKzHj2wSXSomKNXbapW3Tt7weutaB5KrwPNoRY9nZN9yt1",
  "key10": "4r1i7mRDT4HVcgQNcbXQ5deEAZUJcfRNiN7g3xrAri3cGDj7BzLftA19Vb4SGYxZmbVtdL7FftFMWJHjTNLUERTJ",
  "key11": "4cAu8hE9rFXJNErAuGtGyFz8fqxhHqCrat6XY7obX3wYkwsrWk4D4jBG9q8DSUSYgPqYZzZGjiMG5w2ZvjM7SU32",
  "key12": "49oUadnJZCMXrdGxsuJ2bcfjg13JzzWQvw68xqqucv9o7c3ANmN51eFiHu9gBDGcTyFrprh4QyAFN4QGavNaQmaL",
  "key13": "4snenhjtZYr9PokCARSP7BaSEc3r6H5neRRVihyxKmotEebJAYSHaPiKuy3R94bucRekz67CaZAQ9XnmNX9vZKFt",
  "key14": "2kBVhNUKjyAhULF2L5EvnE4k61FhoQhzYc6z8KqyeqPKqZxiH32puynEi1M6ZVgeS29TBRWweTUPYmGvLv2nhUf4",
  "key15": "sa8XKQsjmCXFH9peChWL6S57vaoDxSZYE3sKCFd1peEd1ifQZKJwTCjADFzcSwvteHZNgxSd4Z263s1VWK949Em",
  "key16": "2TDB6zdXeJeEzHhVRscAq1QpQeVyFsJwKvV3VDc4zcQj9UroUpSbSEVX7ALjnCAJsVrEE5qRpkxANXgPw5ARgD2i",
  "key17": "vbzrY38JTBrtv9ZPHAfz8d7gNSPPV7mY6BDsgQs4yZrz7uNY3kRGyCr1TjveDBWVFjfPhsjwgiLkoDGsTzV6kJt",
  "key18": "2YY586HZNggksJHBGsu1KvJgxVfH63yCnmawbxanZTFZo3cJ22c5Krjm5FhfU9wge96Gx16bJckCVQ6jepwjaReA",
  "key19": "4xst9LD9wqLv3ZnuVGMj6vLUaJGH8fXF5FL4cwFG7wYaGf9JiMLGVyVZR8MKuaUnJFZTXXsfkHssnyNH4FadcSPK",
  "key20": "2z4zF5Yj7AsogZdhWkfp9hXJ7nLE98gnhVr7mS2yCYe7Q83AApFTfkejsimzpwyFHvNbsmM8vz54TkdX671xJ2M9",
  "key21": "2wvbdpoToDSypcafbGkuiTCtzpV1rcM16sRd1zShxyzZTmb3ZSQpiMReF2m4ZKBc6zzE8J2BkySnmq8yp35oJ7GP",
  "key22": "4qzHfkiVdUS5MGiSJvWt8vTGzcj9CPnsrHf8qCUCe1iLuZBaoFrujvZSxQAprjtD2CYUArjcbCgP4RLTih1e82jC",
  "key23": "Hky5Q5yoWPztgTJbVjJhzM6ARpLgbF9DZALgUP65QnGAD4E6F89GQ8zCMmheLanadfwi1eitySNdAs7Fni7TfHr",
  "key24": "A48hcWkGdP5vPkwfGeM3zxNwQh2SUKEgWZfEUpeGNVNT3xzfR7uZF1XfESQFwkBxqcSnFGBVXAEKT9C715iDez6"
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
