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
    "27C6DE6uwteg9w8UoBtvuHV6oRcobvZ3owe7efbkXQrKeudbARC4FgpqZo8PNFreZLvMjmatGGMeQ7FJ6eyJEUJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yL5bfH86GiWvXYs5K23USg18794aTLWE9ZoLmdGkubrrLETpWjK2GmapqBMXJ2PvatPgtuCVL2R1uXLqDpXb8dN",
  "key1": "2AvDMqXvSK34i4Z5hJie8tFmcuK51MADRCFxxofj7Un8H8yTzWQhbEoKSWaeJDBCjebuBZLgFpGNJviouMdicuKn",
  "key2": "4tmrAjWS55XbreLheW3tNK7T4MWSaVtoY1Pyg8NJbByLvMDW57wgtDS9ejMh5TBBukcZMHNgqg2VGW7xUbM7jrLS",
  "key3": "4G4FR4TiwKcckTZAdfKiJvceDNVFVNYV9JwHVXEWS3AEqZymTKSrSNXdf8CL1ky9yDtyX4tHjBT4W48TtcyiUx1p",
  "key4": "3uAqys4WyerNCcDfcdwebKgn83cQXK2UBTCtZWZm7bMjUpAh6KKbotKVa6iAd6TkHyqX1XL5JQhQmGJ1K7L1GXjA",
  "key5": "21EnvNGMq96tMukyJd6WAu2RzwGCb6t9Jyky6azkxxXbjmzqXaExSTMguZ3XYziWg5yiXRenwcNr4HsLBwmGEL46",
  "key6": "nT4robUBamizEp1J3tWcu1r9JVnbJiyVu6u3LTKP3HbEYWPyFFJNHNk8NbiTuFoKNdY2YBw5Z6c1avWzut8ZHPq",
  "key7": "5XN4gQnwx9XseRgy5avFAqeW12SXT1JVN3nKTPY6dXrvB2buYftEWZFzPJyx8RGCNyoNrn4mdXxRkEFZQKpkbbBP",
  "key8": "3d9MmAFD4C1Jh6YUsQUQZiwvTHb3mKocyebZZnXQDDCrHuY96h75exMrNUrdqXhVXFGHqeJi3sEXKcMWmwCi7Qex",
  "key9": "3fyxaM7kysuPF1AoLZREtXfktEa1iRcXWZmycCBTtT4Ncvw64AAp4cn5aGAfLGq7iTZHRnd6FSiL6fKaQvipSMFx",
  "key10": "24MLfoH5BJ4dnHFnocir1mHz52UMmtCTUu2cqZFJdvDYZsd7Y5AUiB5bsLpx9cCBcqAJ8pQ8jtpUBDZFaHfGFrkX",
  "key11": "tshSZLpyC4WbFnkLPvHktpvSSsFxiVVdCnBQufMzYgmqA9qe1NK76hPUmvyx679wkmLUXrG5MTUE9jCRrFFbFTo",
  "key12": "5ozjD76mMFbvXVMVPD5Ekjr9E7ZmUA8Pg3vRs9jQbWtwecXCkAJNSMS8LR36DiYMZCSmFVX7ArSeNuy7zroxt5Qn",
  "key13": "4UDci62ZnDdQ6VraV6Aaeo5aA2k2zRXS9MWYDLQTQfBN7e2aCB37L4vYkrZzEZ5BhVCh3iLhQ3VyFaxtXLFVM47M",
  "key14": "5Mmmk4Ked85VnjUayMJguPMREvdfykG9exBAtrfdpDpc7q8KbA95uNW2jfhWBSyZGvSQJTdzxdRXU7iySZSXmMW3",
  "key15": "5maRxGMNzyjUwV1KoCqkwu1jkaDxiRefCkoQrdmUDXuDCsxqbXxHpz53UwgEk2hHR1aDZrtWUELDRASCKsYvmuLD",
  "key16": "3Tf8XxrzwjcF6uxedcpnib7rtat7eEk9zeV7Pg1NyJFzikFzJm5rgq35Er5Z3rn1SrQFrzbPLsPzRHAPWXMhfj8k",
  "key17": "3GoYCEezNwSFVDsSWSjqH2kJ8xD8r5A3iS1b9YCobBGcpXKuLeRH2eF13QRyzYtoWskQay3mksrcLXp6HQhz7BAG",
  "key18": "32ephnQgvYVTxrrHYnN7zeyowpckkKWZxjtTnwT5cxYnrnXUTgaWAUoWN7a68tuovdKxt2vEPjRugqDHwgwVrMYm",
  "key19": "5SmuraZrT7dExRAdZvd2VAEBruD9FgZn2Y3RwMKpi8VmqZwpNJDGzcDKvEotggvbwgZcKV4u728wH1xCujNvj5Jp",
  "key20": "3XGgiW7VTYrL1F9idKzZ8Y5cf8xa7jAnsNZ5y2sQCdrkxN9CMh4j8jKK6uwm2ZGWwTe1MtSd5QVxJhYmxFgbfiKf",
  "key21": "29b8AFFwhd9MfTPqVcfTfysyzdxGa16PdKBSM7qvKMRwKm5XjaXL8zMjdcVBAmL8eCEGBTqzzxBEfcka9j7ACHco",
  "key22": "TMyVkrUd7dD5WujcBFg1DfkLnMzcUMh2qPhqeRkHCsQRvmT6aQhyhEEWgruhKEyb9rFyXeBDoLseQSDX1z2kvuY",
  "key23": "p2oyyoJwW8JXj3fJsFjfD2MZR1PKitScz3i3y3rfNRZmH2kmb5pVMCYXMhritpGjY9rVRhoFBdNvx1BXocAoEwB",
  "key24": "33uDGmJqqAJidR1AjuMTUgfXeXcGm6wujC27Wv82PrrQDTVJCVQaTk24FGCRauZ1JxXESceGmy9CNpoiYzuAGyNi",
  "key25": "4kQEq2tkcYLqtGrGs7RiqQrLSgBYYqDio5DzSyJfz3D2i6B3F6or5fWRppVPtmmpYvGFKcA6iEUM7tYcMdWzp6oJ",
  "key26": "Rg469gtXTMdfR5HFare5JUn2bWrhUKxWsKwWQU51bWZze4wszLU6tuzEDNUSEy3Fc9UTkTVf9vfpoz1ps4WXPnD",
  "key27": "2U475PJqjMEC9SfKuepCQzrrTQAiLZCmDYNrUwE7XpKn9i8qrNm4opWPDsPBRdLY6ZZFfJMhcWR1ZN5hLrGwDv2V"
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
