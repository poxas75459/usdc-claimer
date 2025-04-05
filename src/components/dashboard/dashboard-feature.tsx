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
    "n9Mb1Thf6zrRqu8pWag8nT1KANQLh7X3rtHGhN2avoqEotXFUrgkDvEnw6J72Hoj1vLdVTaMEafzUrcqaWM9iCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k7rHdgQ6C4wC5LjQv2gJrqcpxEaHRwXmFBsYvQShvYrjgngxNkGdhrDe16NPRvP4SVMif8FaFMQYS6BxipBF6zG",
  "key1": "3uaohC79RVSUX8QZ4oiqnyLH6Lib8syrjoZHBzSTHpF17GUF2TzbfPqWbjeTCC3foSCamaXnqjozyJD5ZyjBnjhX",
  "key2": "4A84Jb3VH3A2wnLun37rdAsx8SdVc4oWT35rgDvqbyJoL9dgD2gGDm6NzKmmFP4EzcceWBvw27K7BR4aCgRBXtc8",
  "key3": "4Fxe6tsPFRdyzfmCUxCbdvFCAv3tZqHGmNY15eth4X3e7XAjf6xwgWidzVCYc7jAPsUx4ZVqcnhpCHUpwYwWR63w",
  "key4": "4RDdkdsmXJdQSoHnTBF3CkTLaSq7QcR6tMRRg9URRg1LgLCkz4Eumortevwv9dYu4hFttgFBdMeRCNcLa1y1GGdz",
  "key5": "BnTjE5AVoqqZPLmyxE53jA2bmP8Cd3j8jLS7CrRSi4U6k81C4fjtJUUZZenQMSXApnh7hq2oMif95asxKGj2qj3",
  "key6": "3sXe8vTgUduUYmSzdZkfKoLiC2juHf9wZceUBqAVHRy3GYbE4KNkkqK4QPrud9cfJ9TLeKJPSdY6gp4dWzMY3AMx",
  "key7": "4m2xnbLkeTsxhUtaYvNxCoqXLU8LnJc5CADd13Kr6Lt9N7ACBXA1hLpCGXjeHEp5H4vK8kcjJNhyuW1bMFTGNqco",
  "key8": "3quaziyvQGo37PBhGgFiqF8q3e5RWrjRx46qjFbC87r1qx1m6hFs3RDyyL3vqpZ88hkzkiousSZgycnAtL7HjoDP",
  "key9": "6262LDaiMqGhERioKwUCMeVYA3GejJkZF3XR5qHsJAQMRGeysEJF52YtvToWEqmyP4dtuYKFnjyBXA58HRKavYfZ",
  "key10": "3qDp2EWf5A5BqWpJoSLNgD649sf3J5w1a9HEk2ZBBoq1FFXhYEfq6rmNV7kFSmuFckkcUN51dUaA28UYTPeGVjaW",
  "key11": "3xNEUY14tKsCyhhHpWBComXcuXgU22fz8rZ97gRxqvDrFe7XKNVhWRiKz4jpqvNFa6NihtTP7CiB8MEitCPpn9mo",
  "key12": "5BYjAXuPtrznok1Cen6x9uJQwS1A1poQNpoFFZVgnr9Z3uRs4Bix1tZuj1kyw5RgS2zgv87iKyUPScwc1Zd6CSzc",
  "key13": "3qDw4sV4i8gkpEepuWkZTTjw3Crz7tnMGgD9jNbRjc3v1vAvFpGskiRL1R385FPNYswop4oWrZckh4NhPqFofwdH",
  "key14": "2zMSNZQYfETacJ5uD31kWgx9kJfqTT64exkNpcuJGTTJGroCRDrxhZaXwaticGvip3pQEcExJd6UTTs248Y6n5Tm",
  "key15": "32bbeyWPvEGeiputAussy5gizKbAELDB5VzznjLWAbfhaVYy6fQepeyRneqKdUMYnmgC9JrFR24wqgLqYDRYE4TM",
  "key16": "Gnf9ngeqBTacQvCTUbsJHJ5SpEA7cesBjs5DEjtf4Zin6GvmckXfGDXRwKo8dagUbZAZC14KxzvxTELnxTYftsa",
  "key17": "3wQRGGcjFYXD8rCC5b8XUrL8EhH4G6Rw9sDt7vtWW4boHzdiAFPrX1jMoq56AzxVS5aS8CmWPTaCUnSNZPH5aUPc",
  "key18": "241ePa7CzEsEwaK9mwrQpWg2ymyg73kkF9cj5xjb9mjr75SFdpkdtg7mcRdMjjsVdVg4wukohnYU7zDStMLyDaqw",
  "key19": "3fSn6Xc7Kde2oAds5GzUjke8Jfeiai1GFSjhSfeJF6KyLV4rCY6SWGTDKCUV2PjWRsP1q9WQk2AkDvyyDtJYJrWT",
  "key20": "5Qzc1w9f5WJP2bBXqe8V271fb9ugP8n7R17nBvcZYJJggtrBSKu3JWorxpHoerSFxYSY1BNk5VfpGbhzidqPiZK7",
  "key21": "TfR9NBzHo9haXC4LKuzRY3PnVAFsi4DCSKneM1P5wBT4ifdiGpT6o7euWBUZrxu7XfHTqjYRNohcNb7jACXXsGz",
  "key22": "3mm3dxwEk5cBYxGTa4T8kwZ2nYhA5yPNBQ7VKR96vDUZxZLVjNvLUqdGuv8VvcEM8omSWRzhwz9Ebbvpo7k5TXH6",
  "key23": "5xZksrLq7VzvT27gzKfG6JrHrTjo8Sjt4PixsLk8dZLkbHAoDNFc2YxEvx1wCpCvribVGwr5JjBTzDMSbuYocguT",
  "key24": "wEW9UnRAsJkdCwTgjD4Nqyg2Cf2U1BvFzKYbbGcNGrFQtcxGjbKEq6bLWAwrGrf4SpmRJVDfouiQYF6Gds5EYEm",
  "key25": "4TtZdTuNGcH8v1rVaEVMVzfeFxEpXcUBq7Cu3gY47pXs6gd6fxTyV64nVMXMTpjZWdXcVhFBkZYa6EgZGGCF7NsE",
  "key26": "57N7dRjp4jea9V1XsC1kw6K1sbtAY1RKjD8WeLmGgxawrmioFKmLWoH7WYcjvKQXJRR51HXFx6E3cFXhLyxRTzP8",
  "key27": "5wzHMRDb9Zmicmv3svEd7Q4ucDQDxuNj8n5bAdNmWPsNn3HM8fiLD8R1MQ6nUfJCsNnJTvxfDUhdNuAeWVPd2npj",
  "key28": "Pfi6tKEdZQfv5CRiWQTZ5L3YJJyDe3iCoMvPGBdeVZq8VQ59Z6KRsNFyW7AFdzv4d44DpV3wPMy8vrK4ja8S44u",
  "key29": "5uYmFqZuZG8JGjy1hipmZXNRaMnQjnG2LKADE6C51ngYGGLPC1Hia2dfXZk3DNEG5sqNQn1ZApo8ptLFeS6MbBe5",
  "key30": "5aXy5dhGbbpLP2Z6uFyb4w71GDAaPUtAPJ8G5cPgfTTu6eYFKgGQTDnNvzs6tTajxwWvY8p1e7sspDaibhmgw2kC"
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
