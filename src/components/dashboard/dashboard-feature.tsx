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
    "YRfdnX99vqsGfgU3EBHwz3LK8GLGxFmS2Bn4vRwoCDkY9PyaLpkyaCUQun77joHatWaSbCch9gNQtqDgejNmsTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JHx4KikQm4gX3eRfWdwBesiXeMnPErrwi2mgh3aBpL81heThL6pZtHCEfnSiCRVhJgP3wrMEwNXPoXGATwD7VR8",
  "key1": "4nv6XiQzBcpi8k3SLU38jSdDANeHNo6qvfWQN5Q5zLWHqqCeanLdADfane3KBDWWJ3gVwwHATo1dyVWN9ZC4R85Y",
  "key2": "2VLAVRZQpLkUMAjVsNfnERdjU3uMPidVrzNJ4urRZELzXpCTA3Hytz6NzoCyWsr1gUB7A8Am4DrBYDwPsjcGmSzL",
  "key3": "42injuYxuSN2EjrNmEhdd11HpMcBccSi4SYpeCAJKxQ6BDfSAfnZecLVSfJWg6coF5okRBHdSXGfee8DoijRJSNK",
  "key4": "2V13BCgSKfQiG8CfWpS7vNQkpAV7ENgSYcHAfkQFPNR6RLwt4mJt7LSJTQENGkLWd9TUU6raxEHBfmnbjuJXNMsv",
  "key5": "59vKcYCTEkEv3y4iAAbFqkdH89DbWT2MDRbeYgVH5G4XMuWBFQzP3WUQXRu4tFg2oKaD5NUzK46WSj4pfAC5qkFx",
  "key6": "4CD2YdFmDvHzG9k6RUwF2WQbGawiMhVnEfheDjeLbZay8jRmqV7ByT2dxsXWPwmhid8CCey4kLuvvpQVjy5VTRXh",
  "key7": "4pBUwxVxL9a7Lm5L43r7kXWpANE6FR5GHERQoePZv6U6USDtDcwkMQHH7hBLxnUB8qbkP1Ty5dkfRynQQ3YBNLKT",
  "key8": "42qjbuchRkwtKVMAUDDe9cJLdURY7dmt2eFRATDc51yh1YaFyMfm4ELkRU93viUnFBYHFqU2Ucy47M2BCjv734NM",
  "key9": "4SkjuaNF7SabX25ZUdKBhBJgRtiArXwxwe4te62DQ6NtAKjU7YrXfSNZToxNBg5e77fsqKfVWfshfyadexBs4fn7",
  "key10": "3cn9LiMLQu3VgezPUr57KE9sSGr7FaX7v9GQM7m5Ur4X5QCsLhj47eS8dVVKvXFPHNB9YzrrDi12sgY2WUrWPCwj",
  "key11": "35sRaTxAgGeL66ycRjmQ77EubXfd7HEkmCcjb26ZEf4UxX78qmYtEfkL3Vn16Y3BkyfkqA6wTWAbWcREsUXx3skd",
  "key12": "ysH7gW5nck9QCTaBzU2RiHLNEhczxFu4U5CG3tBtjprbcbZYnutzGhrDPgCkK8BRv1r7nMb8KWfZDERWRDS49g1",
  "key13": "3EsR7zFRT4jfGZ2XehSwwvybwaQcgbMkrBztis7rCYZkSjsJEgi9TjpkwM6Aago4Ys9XT1Esc5w11URaiAWC1yuh",
  "key14": "3En9MjN9gMt9dLsjWDrgC6M6nBmxKtnJ6xbRB6zXa6B8tqygitWaKffLbR6XNu4TT3Jfacs5Kv8uqymGumAuJdpH",
  "key15": "4NV7dKs5S7zUfmfALqpP3WWbGrPyS69dGEzBEWrNQZ5fNtSSY6c24kqYiGZaxKsLwvjcGyEvuEw789xzZsGZ4wFm",
  "key16": "3WCXYFUvnWKFK6XCVRiPgfvGyKochBnv7CvkKhPYEnaka8jkJhKFxFCVvkFg7hkTTA8hmyJ5eqNgXuEeWatZiENW",
  "key17": "pXpx3PGzyHW8w3MNBdpR9CKMbqdvFuUbV8kmXQ9V1wXot8ccWbM6eYtDgX3boPptoxEUX3npMv2A3qywnnLL5Pe",
  "key18": "2P5RURQ3yKheSESMEupM1jUvSCa37bq1Rb13BeS9wXnDdYuoXCPihL39CPGpT9Xk6MFjup6XbruxzGbSrRt94aSv",
  "key19": "3Cy5uMFS6GVN9VpHNo5CSmvowQFNrpsSxCYX9q53DhMu8LG7meKdWiFdmpMe8c97rAYZcVgKNkN62dGd7EBY2qpN",
  "key20": "4wuBnJTLdC9Dt1jCeEuRKj35ZBsyTShnWEvZNhfv1SxcdLBQbQ8rvz1g5zMS1nhQAeKhEcbVkmivS98RCVVcAbbe",
  "key21": "3QjG6RxVvfJZ2Fb8wCD19e6BHFjkQwup9wvkwmA44ixxZ4oTakVagbum7i4au7MDC7idKc8MxBv83fg7oSevHRtz",
  "key22": "4BDF78NG6jYwwgMSgPqm9YhcnKKWNSbFHH1yVQ76YPvAxejR3EkoEJWoANP28v8HG34FKGdvLzYeJYqv2pQX4mMt",
  "key23": "2c2xU6VQCbzhWLsyZwAKNxV6prPvYAAqavnWqHmkJxTPC51kZfoh3kCHCLW9LNvyVEf3E33GPMEPbPsd7akdHpiZ",
  "key24": "3wFjgDjsCq1TzPemApnYJjus5XzNzKsDHRLUFsFFVfifMkiD2jGUh84kt6Es5DBHMkiK9jgmwffnENxEEGW426Sd",
  "key25": "2ngXXRs7w5kJUnmRvoanghvAKQgTbr3SZT4t42LHPEz6RKpJtg3qZvSUq8Swpna6DmkGZtJNaiTE3WUFth5WVnFA",
  "key26": "5gHK66MnTA3dXpUdYyWpuDJB7SridYFH2zTaAeE6Gd4SpLTLEEEvN9wMUk3RniiFVZLvba9y3d5BZF8DKWvfKqgG"
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
