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
    "k7C8HXJhnC2ZqdceVJ27LaJr3cMhJcNYZACHJszNb3iQUY8ubTQJY3pLatpHs7Zrimts9R5ZhcfF1NEsaWLfBQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pSVNRSCZ8uNUYn3X2rPtZUcRiiM213N7TSJmHqAgZ6a5ZMRNNug5mGmhcRPoNUnQ4AZCGEBTjn5L7busLMLn8uS",
  "key1": "svTU8F4T8zyGDHFj2TSUwfHfWC62pCcaNbmrBXZzpePz1drHRrJUnuywT4LufQMVRbBxhFueUj5QFZJR1SaJWij",
  "key2": "5QDZs4JuC8NFYsifa7aMLhYheZA44gMupY3pBB4qoUcMMeFEdKsEYUJorJgWuFEVPToToTGRaFawztBYjsjwHpjf",
  "key3": "4Y367aDNMZ9D7Ff1B8seXRhFn1fWPwm9Jn5WQiaNksJQAUGBfBDjNfR5NFUAYr5SnRYEnJFfNKhB555y2J3mbYCa",
  "key4": "4hYJuMFujAZtsD4gKKUwfPseudRRDNLdDS6Fd6Cbn7X9gDXzFvqQ7qJ97CDfGFnGWPmbLubpaXEfk7gDMZYEjo1e",
  "key5": "2jtYzGWvRoav8wDmcQmB3fA1caWLDvNHFjq7qeL2TJTsbvQMcikS9T3PVdz1Wgj1NYD1i33618wmzCsymzBb8taW",
  "key6": "4pkfTbpZ3YYWEwRc4SzqAV5KhUHoWMwEsVGsXV9jpykFE3QDGabNBVY3GmAPZKTmapEYwsnSNei4EPZTTPtcA4VW",
  "key7": "4e5JzpfCQHvuoch4VJZ3C2iEuT21y7AMLR98vJFTQEarJNiQRBYYCnMm3bexbNGZbtKwB1tBy64N4ExxjPae2uHp",
  "key8": "2g6MjFxopXsqL5nEg744uz7gTWtDj1hdPSxEVBYJD5FFh72PJqCvt5HfdhFB5y57qqjJxUZjivZagVaA75Q87xUH",
  "key9": "SA4JjYWjrWsojEPxPz3YSE6rKtoJQVkHPSguWV3GqLsLDdCzHs6rEFLn2rvENHC5PSHhBjNNLYqZvnvwUU92VwM",
  "key10": "ZUgRCedR6XrX4MsexLEVwLbYqgvA4KVWZpDZdWXuiQZa8Zv3fhMmJn375Cdwo7eSdtC61cLD8BRu72mCN7sRLtM",
  "key11": "5MugCUR9R2tx5jAupj7fqCn6LJDNuMycDDo8iAxcb73dt8vXtFQ9D6CL9d5DXDGaChjvf37huh7SKmCoWAWTrdkx",
  "key12": "233njPwSWsnuwJKAozD5fpddVwSpBboUV3cCzoSC3P3SzQEW9po3e36hpHS3BRtLDBKZz32qMhQcQWL8oygTMJR8",
  "key13": "iPN5Ffgd78ggFuWyKFYLJansxG28HuVxCEDasFdMwej7ADELzWiUiaRvZsu8aPrqZ5VP8Ls3avoYVT8us853spY",
  "key14": "2tMtLh9kRmWny25eXckiLHDa5CjcAnQK5puaUkPSgiiaXSLPpWmqmC8334MbMXvHVtnS7uSMHvinChZPryCHurcc",
  "key15": "5rcJEjU4pfgYAQAgw5or7RzGWFsnG3n6JRaiBGKrJPeSnnzH5YuzpcJiNNzTKTMRiePUdGa5fcxbNjEMCYFD5UPU",
  "key16": "5roTTuTxic5F2ebAymnWxVEdCnUcXqYADxmpTWqn3DJchMZHnoy78uHs6hSy5UgZ9FHQiev5YEQoDcEJYA3N6sUh",
  "key17": "4oEy98UawRZPjuW9F59Nzvd2KFo7wbZMfF6oyzaJoKZYkiUVPHAtf5CgUjSeAhGTsQv6SebNM6wQqhBUqZrEd3je",
  "key18": "4kTti1Drq3YGzrzbCBu5xdYdjbp2xQNHkGJfbNyqh67f2RNaZoSHQ85TD3MvVLXyEHAmC6NKHXPGMcofZ115EdiW",
  "key19": "5UF8zs8ZhwP6WhabRASbFs83jZb5QzxbKeT6LRf91C7cwdz4RCggeqhLLKAPc5ZgQPiBWppjdqJ1rW9ynkdGq2NT",
  "key20": "25f3JcVJKV7ZnUVtMTADsu3YbeDeJKN5UzBqKZPvZCnPwwvhK7Syd5G4YhaiEYJUsTpCaSzdWo8g1tkUAdLnDGNs",
  "key21": "S7cLnpQkGc9XH4d9Gq2PsEG7UnSZNF9fxHzWWBKiBYEo3aqqXM4HNEjeeepK4DSxH5s68dR1oYC6SNLKG9j13Zx",
  "key22": "4ECv6msoyLUW7txdtD26BPa2owFY1nPYrn2H2cpPchcxou6goj64jQNG4zxAWafBEYFxv6x5tRtbWsXMmeRrpGe8",
  "key23": "5hDvAmUq2UidVz2p2Raqq2WPrpJ8bmJZiL89wrptfdNJ63j2925YPxTeaLuN3tXXwCAZJcrFY8fu9NRJaMftA7ru",
  "key24": "4RpPrkomYQDsQhr2joDivPsUDEkMjsAGr949H14rq2ba1coWFDq34CGL9qw9KKAmj4SgdgHYVCrjrmy6rBJcFw6x",
  "key25": "587qjMXvWc6SCgZ9yo9WPzApcPagrAiKcmyr5DyTc1k4CzHzTeFcZxYso7RKUJRJ4h4Y7RXjHzyV2nLXHGT4onax",
  "key26": "5qAnw5WxuacQPQrYRfy4bYyWTzRAY7mX8NoApunzYgUxa9DFjZjiQEeznc8AcJ41b4UAibAD5nUZnKsV6xF1NQiJ",
  "key27": "FD1J1fj1SHKtybYk26pUeCvPs3VZu1ZqVYwCpsha3AKTNS5L5hkiFUc6gCNujS7GDAhjbC65SFnv3XaafbnfHb3",
  "key28": "2D45vG86RKkaieUaNRoGWsge2VKUfPzxA9tDV5Dx2zGm1wvKgXiNDyk49RoV5Sbwmez6CskKyaV65SDPGU7RXSsL",
  "key29": "2LmUqzKK2t2eD8JcLsv6Wtma9PzhRLuWTZm1L3HBuEK32usrep8fDUuMYMiw16uX4u6VPBvGfUGZeyHQ1grSmdWE",
  "key30": "2vD5Tz5FYppz3dyLzUQ1a3LiZEnw3ys5AX3P5o3t4mkoobjxQKpaZhhuCgw681k5hsaFwposwxyenTsyxqWGgFUN",
  "key31": "4rFEFzY1M2LFTzwP9M8Sj7mjkLp3cFuigEdMEm2YuQdSd39a4vRDnNmSAH7x8RaeG7vPGnM1yXeKVKjAwfcZ8ztw",
  "key32": "4iJmPxqTeAzFXgsAwDtf5pHgj8u2Mb5VGBVVdK7tW4QuxobpooJSeYoUzns3JbsnThcC483YsTo5xgSQdenLhHZA",
  "key33": "5Xk3CZadRNQFqmbEwWVHbM8wPTCthcAb2uM6krgsEeQNnSMMJq537Wz665e7Dipt4fWPBZEXFRnDnNdKJ7WDM9ar",
  "key34": "4wYVSVZZscbdB2trjpiqpbckR1kxfnL6GaK8SRx9CAbrQVxtArgDgxDn7wBKkVqgXz8VZpk5DHN5FkGN11ZJNsUg",
  "key35": "2Ls7EirgK9nFgG2LSrjC7RYkubp6Guyg6WEVsYuXXsoH8RumB8h27CRyak27pTWQY6SVZu784Z2XQ7hBmHdDNEvA",
  "key36": "56zssN6jQpRwZZrLSM1jtVFqEyQTFJGuZa24bXEJRqwsdoxfreyiKUZFWCo7XyqvwCXTCoBBiVkh8aJsZ4F3YxnX",
  "key37": "NwqNBaLU5TD3Lv7Wmuu1pmCz8HDJMXcDY14bpop2XQzbUhFKZTdzP14c8NZLLvTumYcWrLkDEwZHnLsDPTBEvzt",
  "key38": "ByLXzmAPvT72pgHDR8a59V2fLVCm6EydkjW8jR8y5ojK85XSmfLDNZc9pbbDJ4DpK7qcZxviQRJPPaZz8ZWZYx9",
  "key39": "5645bH69JHVjXWCpbBb29SQvh8PvvTnW8pLhvTn3fHYAQW4WP7pKCWasugsMGtfRRpQgUrnPcGn7bsaN4nUmSsqK"
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
