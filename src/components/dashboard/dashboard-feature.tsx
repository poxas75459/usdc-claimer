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
    "385WwCzGEpw6mrjoAqZxVM6vxuXakwTY47q7jN3Nu1VZihB6P7C37msRF2a9xrUPHVfXD1uPojQ6iu2w46ysrpPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qRQzEz4fuMTTsurGbGjnttknveUiaxGftR5uSBSiC5wmTxH1s587M2FkpEJP7zazNQhXnNGtngRwJjDmgmMiMUN",
  "key1": "hAipmVEwjGm8K97pCG6KkW8a1ARdvE9JvSUomm3YSHpjGoknwrVuE9HBhbpC6ant4pMCT3cD7D2rqBwNT8CvVT9",
  "key2": "4G5WoqprCn9GanfckRfUskUUNVZnsa4u8YfvqiTheQekBz3Wwy8v4mYQj7bX6h7zs5RgQiVovtGMdotBnNScHzwV",
  "key3": "5qcpDan4VpjFnbwXQvzCY8pH7D5NwkPKaxUe1oNzfoPTZo9xUuiizSgtDzmrWMo6m68SKUr7MBJfk5zSTNPDDm6B",
  "key4": "y4jvn3LNQQcV5HJwN5b846EuVjp63GTC4dkgEHqyoCKWAhf6pK2eX8uJ3JuCxmCpeystDdymp7CN5zwk2ZyvQNu",
  "key5": "3BEnrQ9zizbLRnT3dC1VRa3rQQT9SypYN6jK9KgXrpR4tHbcjvJWjUvmujZJ1H4g8S8XQW946vJCKTWcoVGFXhQH",
  "key6": "397j5QwZ32UiBzFkjYf9a5nswF7wmHH9UyrW8DsWVYww3JsoaB1f2EraM1orkPFhaP5EHQ86bhSckaXyjBVvtbKB",
  "key7": "3jFvNhQs1RVXo6kJ7Rb2AXnsmXiA1YZoZxfrnmQBdn447JBD73Ka44WKz8hE8GYZziWimjmuoWst7j9A94RmXRei",
  "key8": "3gTtxqvu6uE8or1pP4jGwbGDxMNXUCn9LMmhQJoAAi3S111egHqGpoVKaCPnrprSEDQCgMpg9svFjxhMVir3QgEG",
  "key9": "4Be9ZLQrAqiQhdFnoK9gZtz4njckaWL8TpURtYx1bNA8g8XK4SCMdRGEZPuU7P2g2H4uZVSFmvDdaaPtLpKvfQaP",
  "key10": "2yTQSRBdAj75sZJcxvka5s6cuBzNCGBaEh6MoFcQgou2eeeLnaHYTRNjEV6nD9p4mWN4DyViKoYrZ8CGC6tABsie",
  "key11": "2aPeidA4Y1KNKJnuV2S89n8zDsiLMn1TpDR4DBUCP6ByuZBZeRp4b7Qgc9g9G1q5Yn2qRrj3vjkErF6CvX9XQkNG",
  "key12": "3iQ8UyHpTBXyNXv7AmJqNJRrxn1VxGUSEtn3A7L4oH19hwh9TNAwKWBiBMpZ25QYuuqm1H2LzdtJMEvVpHoL2pU5",
  "key13": "eHrCcMAvWoqgxjGLsXEuwWZATpfUpwXzoe7Tf6RZYmoPb1ZNDjhiqMqBB9FvyAMYan5Bstj478k3TjGnBYwE5mk",
  "key14": "uS9aoXki8FDricg9caBfYXkNLDKcwx4bXPs19jFD2LNWqBe6mXKU1VtEkKye7UBx6VNKG4zQPKdEagg4Mv6nxb6",
  "key15": "3voGo6vg98kV5wFeucQVMKRcuVUxMUPDfdW3qtsxduEXUXNER6oubiRfuzn3duTrXYmMk393dqrnnb6jKU52vBty",
  "key16": "2wDwyDfbY88ZreuZLGkfFx3CQKxRsbxFRiHCqTkWkXPNyw4rNxwnWrYQLtsqwkXH7QWVhfRzKfe9cWLUanZ3emMJ",
  "key17": "5pSwB9usGaf4pdPtixU2w7ieQmghcr5kifixEnGKbFWuCxqkH3wP7zyNfmUMc2t5zfCYaF8bFvVtyLC5JMF8bhnJ",
  "key18": "saJwCRuHJrNzxPaT33k6wZgwNKnb6CYqkCw1gM7eCVDWUSHuCrvvgu7pKYD3oHKHHhYvoV5xQAUNxVAPWchgDsB",
  "key19": "rg1xahxGTcAVvdA4QrJxFp9C6GiV2RV5Zu7dxvtKkXjBUsfZAkwxUgG4uYVGyW7DdqE48G2iGyGnZfNcBMgPSCE",
  "key20": "4jGHex9b3KsAxoCHoUJkMgFjTX7twEXj8C5UADK7y5TzPt2a38ehCPtJoqPKyP3JL2pieBqTxZap8kFzUTezmqn7",
  "key21": "4XLRvfNAQqDCu6fz72aANhLoZw7wgNzDk2veWqjo7YHBcK4EKu53H87J1jCTYT9yeA7VYAi9xgEcyogYXRuCqyL1",
  "key22": "cgtQHSTUYq5qQFR1uJU2VJHtB3zGerzZrP4LtgmBkofCvZb9DaV6DSeQcByhvUE4RK6dun3mbkC97S5LMSsiwtQ",
  "key23": "3SAQvbzL7LWsm7wx2j6vB8vH2tJBXB6NsFvUE6qiVT86w3vea5b6preEQGvF48eC1xiVJ9xjmcthnSjt3oGMH7bU",
  "key24": "4tyyKtxvtemiCrf5vckFFiaU8dEmZRfb8cjU1W2vbR4PqSTrRM7738FZBj3PWDJWKszmayENXPgXYESdmVSy8LP5",
  "key25": "4r7yhdwxcRsNpeQcuiXKU6mVSSDxgD5rzKsvhPLp96aWmsRp7m4GQB8u3kmB4bFCNBsuQSpuFNxTNnEdD1K9LaMz",
  "key26": "5GdgnZQrVADTBf7LLn8scCZxFHV4KYkr8yuDPZmVGTpfXdyzJt2MJW2sVRnoxHb9J2VjV9zbaCddFT7Rmxyc7hKT",
  "key27": "3aCBkzn3jXEYgsjK99J3hxKBpf1gFXAbj9HZkzF95EmyepuSP3dnjqLRsRyiVfcHCgiFQTjrrhDgMwNVHUAegc3U",
  "key28": "XxeGZFUdnnJHuWb4jJRqk1n9ouJ2zHGz6QE85AhMHF1ccvDVUo2VQBah7FhUMLCsZmPwXP8EWtdrEJHqsYHKmfy",
  "key29": "25LC5eP7qUUp95hf8idYAQBcq4wsT52qDJWLyMaz7zsEpZMoGQvf9TUooXzV4d74jq8ab6CSFZ3Cws7uZm1AGqm8",
  "key30": "4LK2G49N1T848CyWVcpM7QzNstLpYAK8NDf1WK2V35KjqYPZ21aWhHn7xd95AWCWEWCAG8TafbAiyWyhBwKd6DhE",
  "key31": "29HoLmdDsBwuGM2MaVGfC6hW8dJ846Lo2cttk5w6g4Ld8aoWgL2bdmK9RDJtnnZ3VUS2MQpqGiKJgMsQy13EGPcE",
  "key32": "2CuQmWconmLiMPjPuCvNo6SMG9YAgVQvtND61XvwtwsEVM7ZYgg9eRPbMAkTscnn3UZgrDr7kpyisVuUsfuH4wHd",
  "key33": "5V38PFhHZVQiQCth7REw1sJogvfMHJkS6HgNduLTRBNzfbipYcf5nkPXQgivhSRw8RJWxJFVmU3i6WYx35PdGNuz",
  "key34": "ry2eq2YNdnETFedGT1DyA3CmY7b8cJtnoDVdZCHwuoJPRG1Ywa6qCQxND4CqXz963cfzejgJSX4nAcLPrz3Yo31",
  "key35": "5cz6zHmUZRNZWMopFoHmBugxPQCGDcKtC9jz6PZFLEknKdzsA3KN8E9phtvEA5VXFboHqbq1E8EEgCNMPuzssxGo",
  "key36": "2TnsGVwA8p74CPruYBQWK3C1edx2F2mXMaZSE3DZFrarGVcKpPB5k4VPCNsoVp29ERQB1p5q2wDTJ9E89dLZ8Hzo",
  "key37": "63Pg5rM7rmwKp2HkuchajcXRzxsbq2o5Hk8Lymk9p336KGbTKodYrMTncyNfE1d6adqTKeWtdK6PqPDCaqRnGfVd",
  "key38": "4m3Y94Wp73xHXnJHZbBD1SwSRN5sZ8xGbUcs7hGyjvszyM6R7EPQHPppxngvnvUNjHB2myf2fGcUrgxbGa6KD9Xc",
  "key39": "3kpRSCWZrEwAkn8PwB5WK1H3tU65T1xvsFUKjw5EbYmBtWaZKcJHUbJQTZbfSBr5h5vNTPRd235QHKUdJCr592i7",
  "key40": "3Z8BvHPwvfscPygUh2Hv9Gcg333RNyNxa5yH7RoEe4iJZa5HqQsdrLYRn8Xg8iBcPuaSDr1dG4KYJVUBJTGJrCJs"
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
