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
    "3Gmavjoqbgo9jXyAdjizVLhoEpDPpchRKSoNDrgQbmRB3CgED5nG3HA46Upx3rSJfWXHav58QHHJzxMoMRYt17XR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jaWnqj4VdMkVkhqKLrRfeAR6YvyUu7T1SfB17NxA767KBXFC6X1C61LrJVDZoRYEyiEAQ1QnDUq1PGvTsKJcasu",
  "key1": "3V1P1VCckCS7J2EocCUuMFCTRr6thDCpV6WtieUoF1impc6Q9jGeTQ2tThzdT8qXXwUXQwYqSRwWUPErAgTB6Wmo",
  "key2": "2Vde5TkiHe8LWGtQY8391jkZi4hfP9XkRPGkmQADBjQTvaX1WqLQSrnZnkrFGjtw1FK9fUSQExnzPW9yzMjVwf3e",
  "key3": "28ynRXphsirP67d7hMJDUfGnkXaDQfCL3zuzes8tUfTbzTJp4u3WNV4A9bz3bix62yg1NZcNXerqfPsqtFcJ2cfH",
  "key4": "5kvGybcvhHAyEzNs9DCdLnidHKfWeC7qCCHgxPGNnBkkXTqWn8jEHeqT116DyXpCigU9dgGN61w7puBRFWY8xQyD",
  "key5": "5DedPMQN2pySEQqEpfDJqsh8EEQeBrt8o6Zjgbyn3choW67hRDBaMfWjBE4zoAuSEzJyMNMLJmbWF8joqZdXxhfh",
  "key6": "41odYxNZLE2Rnn7sgDVuoy7vUaxD2pjR5K3DfBAzBVWBGvXyNoqHE4nvBeDkmRq9nd1j6fsaKGq8d1dj1JAoUcLL",
  "key7": "4z9ec1kzvYcsSgZ527224cuhTVC3kBtvGDqE4nTGU4u5QEiS48mFnpCZjaYuVsYkFVDs549ujBU7PRnva8Btj1zb",
  "key8": "MyCJvXPQrPCQcwZ9PNaPsjSVpqdQSwjGuSxGKSnKnNeDx322x56JAeoWJ7kSJ8eD1K662zbtARbHxwAwtHbjXMj",
  "key9": "2xCSSvLhH2tqu9utTHJQQBawTLKxv6W3E2uMJMp1jcwmHYrxMeD4ysCRzR33qd6icmH4oGxSQm35shYqRggerPw5",
  "key10": "2BENd9QSLz9ZW7NuFZteiLK6R88gXDJCC5Lnbv8ZHVd7qkos28cFonwPmc9ixLHvjasqZe4TSdJL1m3jEXp4t4r6",
  "key11": "kEmfAyTf8cFRdCy4x7eszmydBRUAi7qQSdgnwevkiqWQE57zzBW8P4wsonH5TqHg6fGCssHER83Yr4Y4wgQRWLk",
  "key12": "28Uf82mpBhD8pSWndZW8s2D8RtdLWL3a3dYuU31axCSxAEFSy7BpoxgYxgcviQ7TUaaS8hXie9BGuGzJdUukqb85",
  "key13": "3Axp5ZNcNmhticQaoEn6YzL9PDWiqAYLMpY4WkemP5DzmnZ5QFSZgyFUJwjyv3qQ7nyk7ExdfEFgqzxAi3LuS9WS",
  "key14": "5SyykndhMpNuZhN1gMGSPrUhDWgWjzuAMhXBeEGaRMueVKiNt5ShfJRqcjvk2c2fJG2G65f1KLaieuhrmnE6xB8j",
  "key15": "2zSQraobhpDMfDHRp4GWEZ1DALmDmZ3G7AjrzusDSasoymwU17Tbsh7nX2npUkzgmaRpaVMmtwZiRZHqEFj79xot",
  "key16": "2BSU7TkSKkfnqgLvMsrfSQhZvHBLdkvsFU5msCz5c54uSQA5YpJV8BBRf7ppCQWeWhm4htcpSEuLE67pHR82LhcS",
  "key17": "5gWRF7GrHCFKa5i47D1i6nwwXBrn58bmxnPvhnLF4X4uRp53FXbBwQyp2Z1Sfdye9WSJmRRGstQTyE8Fh7BdWvH4",
  "key18": "4nG4S6WTv3RHwxzZyPaKiZXuwD3Khef379TdE4tQW1AYzbDcnx51TBH88jcwHxt1i6qcZ7JWgitZ8DeXBsmcQzUP",
  "key19": "4RudqeTvYfjSvenCTSNYaq3XxgxY11WuM7TSLZfd7uDSU3EWEMVFpfoBdH6bPsWmkYz1pY9xou5L9dPm8NxqQDNi",
  "key20": "5ZPwMAphdBptMNXchB5Q1sGby1W5XY18zGzdM1Gx2Jo5YHWpPwt6FdomHQMESheSFL7dPtAXZGxW3y6TwvSwJto8",
  "key21": "2ES8JhsstfFZSpoUUmWA3TVYCBfFBDpeLPdAFUnECKgM9p22NvGvwXDudd5YUWJnmU3HFEt12xDcJ4RjKSySJsF",
  "key22": "g1m8AVNJZErgdRquAAAx9uaExfx3tB83GoCXqEDFgBFg5hhEpC9k1m31udEFbeDRy61oE52yWKWt4rzYzEjBxHJ",
  "key23": "4mHKginA9CFCrVmSNSEGbEgQXdnQy7HqaL4JSnAaNof5Jpiq7W8eG7wCQbzZ4PFbLdVxqCP8XZuF2Ei2GkmLsV1S",
  "key24": "4G5av9x7dHkiERN8W2PSse49EguTMPxMPtQ2CgYh8Ft3TJNXAwuzQhu6cNmiUwGyTiEwhjd1HTascj6p89ru9Czg"
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
