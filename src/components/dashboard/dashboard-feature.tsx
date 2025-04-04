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
    "2hcaYgATBZP8Jr83H9SYWSVBZoaPFc7tZsbvwsQARP3hntKUAYmit3R8o76MkgFZXq8diyk5hj3QXcuq3qiGzwPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ChouFBikxwdphKE9WUzgfQVJAnUkFvTEMMPZgbgemv7mk6oaFXTu392rKZEMTA1PyM2wLJtpaNd176DGeVy3QNi",
  "key1": "567ch8qnNrJ8KVY2wgXVjfqHutjBxLTVFmK8pBup3Fa9snFgHoF9mxTLP12Gkun2V4vTwranqWUMJeqZeTEpLJQT",
  "key2": "4ESSVNzFUXKovCQDKh4w3rf3gz3BywD2rGMBETq2DEdY4qUQe79FxWhsdRj1gXGE5tJEDCTbXRtFjkLyUyT4oXMs",
  "key3": "4yqozAjtsqw3D5TELm832dcVSxDCrbuKDWBqgxemdxnn4d7eErmv2eetwGJsCZwfpxke1GzHZimJLPxmDR21XHTG",
  "key4": "E9yxsVp4EjhFTQGotQUxPtT5G3HC4XjKX2fyyM8SYfgwMLxC6okobKYw5eC25DrKxcVkgMKFyzYJubBHHWGHi7p",
  "key5": "3r8nX6rhE5KBcuFEHRDfFC9idd1dzuFQ5DC3J85r8xCq1Fm7iqVfKrRiLJT86rt8FKw4NWHv3KycGhm93wPVaBwM",
  "key6": "q5ZdU9xfBzh2NvekHN3Xkpgm61dbLCAQ52cHgXt6bfvfNHnfK2tG4foVu3CJaxzCSk3poTDFaoAGEL9zhUyDU2L",
  "key7": "3riT9TStLQSjftyKsSUSUxfgYZ7fbPxmy8Z7eaZntrmdcVasbo9qVbZEeNyRwwBHP5shFYbv4MeGZskW6bJYChpT",
  "key8": "5wEGcK6ctwxEo6rFZaBkLnCkTfoQ7e7Xbtn97CqhybHCW8EUQwU37qzVHrgWXK1tzB9tP4AZi2DDAWpk8yVtEsFi",
  "key9": "3BcM75MeV1xmp5tWsYAkcVJY9ZSWVYDbb1uMuqVDmMr4Xc1svQRpcammuDdNBpMAd8zzhb2cYPmMLfYXFKeAdz3A",
  "key10": "4wmBLmu4NmfBKJhgT6FU7CCgsXatd3LZk9hnurcpEDtTLuuLWt4RTsiDAe1mxQVTWPxDMgiYYqNhn2wkb2ELVyN1",
  "key11": "2y7GP8t8LDPehwS1Nagk5nPRqisvpTpXBQgPvXSxhmMuVovrch8NJBikVr3DPViU5N1pJSWDSrPmckmj7atKv9hd",
  "key12": "3Ro8tTHXfRfvLzM3tUDhX7QLzpRdKNFUvhTsLTRdEporGe1oYKwnB6Cnk79MTgjy8PKyMFWi9dufA1k2Jiw4SF3i",
  "key13": "3aSN9SSSc2cG6Yn6wAc874uzVPRNdwcSDG83vfZkBvZP7jN16VvjueF5tv3THuNT9LzdyjgM6CY6ijXXorTGpxKJ",
  "key14": "43q7bbL6kSHTEcsitibBSaNANfgBqG1ArwAe623LUWbZXrZ6pNyJu6ohAKxqcUQE6yqVSHE7gbqKuybAvVoAyMd3",
  "key15": "3yTPaJTLH379qbHLXHTFPKgM6vuThBCW8xpnjv7W41QMnoYBRHe76N6p2wSSsevB6DEqD2mvQmAP7QxGCayxtqfH",
  "key16": "3TBAqbgcKE7GsMsj8DMKn9GPMHbRGhz2E6U2xNi6TJUw7T5sNS4T9bdzEUB9VFzaasb9WTvz5R4pbdTBmAvYeakQ",
  "key17": "5RvigB1J26jTdSUdzQomxYTknCP1RoppJ8LppPCos3LgZWWwMBtDDnML8kvh5QDPJzKux2jWy7em4YWFygd6kXYe",
  "key18": "2KuzJfi6eZ4FqQqrMAsnY6KTX98RTQejb25bsrfhdjoMRwp9iDAmJkhosen42boZwzijQiZPoAJXZiW3P9JEQhL9",
  "key19": "XS78f3ifJGe3XYxF2sJaacCTvSUqNfCrf7L5eMoPRX83VWhRhmvqHB43Uo5NKANA8TCdrDRr7V9nPzYze1eezb7",
  "key20": "2y6fVVSoUQq3ZEhacLReeUhFSaWxu4LyuvciwU5NEsP3JJCNHRwFngLQToSqhdWF9eCHA2TXRndj1yAmQxtMCtQB",
  "key21": "54LoHZDQcWUZgyJ2qwjkGhTFX19MxevD5v1JzmvxdqcP6v93MqhUztnCXVcn7k7r9Lqy6guNx4aRmDmSSeXTDnUS",
  "key22": "2hrB3yAkACMJLNEw73v7tZ3tz3C6uDM6auR4bJuF5dmyRuF8dAkHqN1rtr3hAhZZSH1xQjcY2NBjBoJND6GKHpqG",
  "key23": "5qYdC3kXijzgaFmWiUgdkwGU5a11Rb7jPBKwPH7SWsQGEpEGw2LdrYf7cUDCkzrn8wJkp4f6GyfoY72jqjkmMU2A",
  "key24": "3niEWUaJVBoa9qGTFnnbysERFXg3W711W6SX7oxFaAKB4NHhRj4X2aFi8fjTMdfoQnHDunsbFKmwwR9iHCURMDnn",
  "key25": "4fTo7DqkrcVpfSX96x2AQwE1F4NxZud4fCrrQSFNnZ76u8yXixYu7V9w96kjfgXaskHKmhxGJZi6pMuHEeFvqKkD",
  "key26": "5PsifMkrinC9i4TYmjNNoyK3dHgtLVpiuPB13DWosQZ8kKkmqwds7XMjvXi2G1XSbzTyNkTzCQf3YUSWrgbBSYET",
  "key27": "FfeXyrn19RGoeUq1utsRqnFBxiUuE3cnxkpjbAcN4jL4evzf7qBFm3q7tB2HiFiMBKZmRwBTE2jVDVgWMaZipHo",
  "key28": "3R52iFXUD6w4MPvvXtM4kaK6Cn44LxjPSH9kG3NFkNmqQguGCRD3LeWANyDwLYx7nCdhVUqvkA7rGFrWpRXgJFMP",
  "key29": "4KvQMmQuZPGjPfCmKhbtF8JiQmf9ZLLTp1eP8XAfmXdz2UYS7vu3YPNQjd91qoHo42nNpXmVoHF4ZTn4XyddMZpW",
  "key30": "uqaTRq3zthKkLKYeYGwE3xEA7jpmbDzHoVwvN18imcrh32a5mY3XRJyxPw1Csnaa2SivCA4az9LYhz8dJfvpwSj",
  "key31": "4ELq8ePBCWfGQ9mVixGW7Sndie4mj6KgCdXLK6CCiNaYMSfyZ18GhP3TRrp3BWEoVPW3coHkHYhAQXkLUWTe6u2t",
  "key32": "3h7uJzXmKTLAfha3zEktakk2qh3EoFrLFtawkfmk3CNa9N6KhnTCbj7m3ErWm88821UdbRJ4BmMa5yk1Evr6FzK6",
  "key33": "23H2pn2vyGCEUhoygxqu63DGVpc26QHEiUGbwhaWXfUBuu3Mcy3pnb7PMgPSvV4SKm4Adtq2prS1wynqtFUdPa6L"
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
