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
    "k112c5Kq9p6R2ygpiV4QEeYsGnfEfAxBsVcAaqrwxu3C5yHnmyWRcuq4bpJaQtncq2SpASdivvK9xaE1QkwyZZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FtnLu45h1xvdvrN1WYPcuoHUS5XY57Lpm5LNmCAkKQatT3FAA8ExfNf441C3FCHXBBCvdYYYEcsBbs53yPZSkzm",
  "key1": "cEnsouDmG3VMYRJf1ScrFvFX3eeihSFdiYhHFKeVsz75jZhsi9hQEJfyWYkZG26iWggwCjCxwq3WLzo9vTxgZST",
  "key2": "5YBHmwYgDkyJgquLtL4Mjs39UEsAXEJJhmKDwwvgKqaj3PgWFR8LeVqrwEMxZRbbWAjx7CyL3KdG4NFxTQkApeC",
  "key3": "2Ayhj512TExP3PDu4diaZsMuynCuska1fZ2m5P92uWabUuruCD64WeQuMnMQgFQgYviLjxCoCqGKdtio9hLw3jJQ",
  "key4": "3C5B2iAebhxfJEeHW4Lwwxiy7DuHWLpqJ6K7CJBH6KWwdgqpYoQSCScfhn7nxCuxobZiD38oHdrQxeU8911CBUct",
  "key5": "4hUXdtc4x4zvecDCdzPbARMiU5dLkLA7HDvLjTHsWGUqQV32qoCrQj8StrXEhbBf5wvo2CHHKGTXZpjWxCgxZvuC",
  "key6": "3RyULwtjs4NFLf2vLoCDeuATXiBH3Q8yfzKxyajfX8DETbwosbVjKWAjinjVBcfDM9yCF7fuUSJvV4RbKraWiGQj",
  "key7": "Yu6fsqHFqE5hTdvQc4ecMV2W3N8mtvKEGpVKwcmUXdbUFLQ96AgMbXH6k1rUXJqUPctUXUimVySFKiBhyUSLSNc",
  "key8": "5pUBnS5L8ZENxM3iG98Dqt3AQ5MTL9USAUMCQa6gpinhJhFTmEkh8RqfJZaEgudhjwSBZyR4s88nBMEH1Wd5Jygm",
  "key9": "4pgSXojsUxJSGiuW4s9jdawePKxmgFDAchCU9GkKHmr4nQYWeR6RiaB9n5E6WejrfXXvM2Xnspt2FFVjCf2Cf4fR",
  "key10": "5AyNpLBnToE3qm2D6kkv9Y1Jde3UWZaHoEksMo1ML9tycGJwFoscjxweY43bH486QZwPXV1eEkeMmeDg8vKNoqdz",
  "key11": "61KpEEVUmKYDsRnMjTdnuxkCeNTMq1wgzHEXdH35mGUwLuf8AjxSvgcRoZGL8m7ETSx9Q6EJK9k44eHzzR4fcg3x",
  "key12": "538Gp9UgZzT1NRqEKwVHqLMzWGzWcLjDkSwX4KsVi15mZooBqyToKbhvX1jeypNw54Bzojy5pBCAvKUeiavkNZL7",
  "key13": "5Q3FUwK5bA44TGiQFffFHm6adFFRkKa4399bfx2w7T3WEsjNJk87eLtqvWSC6RifPgzceLUK3gtVrHDcWrE2HouK",
  "key14": "35wqe9ru5Dp8DVEdwUvNdmy6fJNfA76ZXPrM72VWTEXPHDwv2FNDpGPw3paMXgjBGHNsub6nfSDWv4aZWU6aTKkz",
  "key15": "5YNuiGYJKTh8ou3b79t9fJBrEF2FrS1kkc8Se1Lm6RfVc74DYQKEusa24g3nqmZQ1kfvjmPnQX1pjD2dprWG1nSQ",
  "key16": "2ce2FYm8kQ4AFWViGDGwhzTNNa1JPLDtMhHEKd6u1JuroXHZRa69AXwKtW9XCVoma2XtojS4YrC8JCSdBxuhqcC8",
  "key17": "2qQej73upeKH5Ynr2cW3Sdr12R67EcNDvf88tFgRwq8CUpKuUXsJq33jaHCBBj2hdTry5GJLR4GUrSVAnGp1LNzw",
  "key18": "3W2dUBpuZ1K5nJtZGA4VyEmtY94B569FhYWxHSvVhXQYHfyVEsFMrS46PPDqC4TNLzjobGEARTs26EDYrq3aJDQH",
  "key19": "2nx48t8PJ8Rc6Z4D6Usuo7cLWXiZ43g9XEiAPL7jN4hF3VXgmnfhSNSUpqrEXsvXQyPAFhLMc7a3TCphywvyFNMY",
  "key20": "2PY4RyyXsGX2tqSSNhvrsiHfDXgY1iW2UdLrxicc6P6A1jF5RyEKoWENVKtH4bW5QdNS7pC3joGid2CpRg8RJUaB",
  "key21": "65GtzPB6u4DZ7rsveUcecKMozFbat8929zh5XMDsRaSfhhrydUpvDZLWfNfvdQ9Sk7iweZFGC6yycbcBWZ4LCd5t",
  "key22": "2WQsHz2BLaWPvwFuQdpMLYzZ4oKrAnuyMXPMf5LmyoDiU2eZU7D9YdqcaTvKaNiRTCeTVRh52P6gNVhnNjrGY16j",
  "key23": "4bjyuGrjbruGaG2B66N6HKLQqhpMWNgTDiJuMm1pKDWi2xAmzcTJ84vnmgbskMg5VPT2fg62Twi1eq3Zv2DWYFKL",
  "key24": "23VFYaztb1NDSgGT1ycMARYdeW8YU7KqcJHsaAXVv6j8VertbcaaERbnTeW6NacKpv37p7mBEGYnw55BxAw8mhyx",
  "key25": "2uM8JFjCnLqttAVbByRCbA4EGSEvtpZkGazGWVdQfqmoyb5DtKkxZQC4nTnJV6jqsKMiHayFfMAcc9Vv8pDkEEnc",
  "key26": "4LyrpFn4mQncKKohtxitTZGvnPNeycWg3uxbDwEbxCZXx6bgGg8Mwo9YbFV1uCL4ninvFzdz8M59qihQDGaptLQ9",
  "key27": "A5wYaea7sQmXAzBkaMMFL2FxkHqxJrHTxhsor1cCA2ZmR9gMGMRu3wtDCPX13yr8LpGN6XiFvjHqKgUUbUN1fAD",
  "key28": "2PKjiu6BVBG8iupdDEmFTnCG5b4PFq5oLom3Sg4uQ8KNiFe5mJjPQ5zabuA5ZSzJiWpqrjWZjFm35syeN35tyoC4"
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
