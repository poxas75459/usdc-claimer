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
    "5b75SZ67kzfVE1nv8jC9tx9EUW2P2ik33iyGZgKnFGdagSLBmRwmE3SsJ8y67kMCPRD5MZav5pTAwjf2FWCHboT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NpoPwt4QcgYaqqXuk3P88nJECtRrVpR93gY2CDQhBLQKrioQxcXHw9GFkmSU4FizGyviNhKVahzFizHJoW9daUW",
  "key1": "4Z4AKFLwLxQzi54jJQWC9tYgn4mmDsaoeN5Bcibg3V3WSbTtGuHxoCujCAo2PscRdk52pNvmXubG9MiCH7TPoWRd",
  "key2": "4KzCmaNbtexegrCRUvMh4fjBrqHxM9XS4PbK4cwcHA3gZV4MBQkgwZXQnWsWjhqKWUvv4M7qREANfgiUJvqrEtZP",
  "key3": "3nLQTSoawgDkqTjdJpx3HPUHGZy48WXefzFwoWdyLmv3CpSB4bkcj8tPGcP76RM87FLunBx24Sx3psBPS9BUky8P",
  "key4": "5uaWaxZ8pfX9XeuzNXAtjDpdDxdZHArUo71P8E4AY6A3hGPAJH8hZqkzGKkZX9NbHbiJ8kvS7uyoyf2yeyvzfc3h",
  "key5": "5uKmtwD5c9PvUtXGeM3RQe5EPLRPZS9SioDoRkQD6q4eo7bzdQeaBq247LU2A4Uyow8uwND8KqPqj9QpsAHcdZq7",
  "key6": "3eyauYd4REFe7AZb1bZ2Nhg6nJmKj4rJxtR2Tr8GHqBVFAXnEAEx7Y9njNgFz1d2fxXbe9URFVaw75He7zrAqfW5",
  "key7": "2gSG6x41oymCg8CssvvfPpTpE2V52p7Zx3TWV2hEPCfzzimELWCEuqhR6vc7KVvvLXvcdDFYTV4gttA2kV4w5ys2",
  "key8": "3sCQ1ck5Ddwvhku979P52kHotHD3s5AJ4vqcHfsv9sKVrgUqMjjNMBvrUfgcktYnaHQ2CAtxyyxRy3WXc2VLrHGx",
  "key9": "4RDFNcxPhRnfqDPVF7wX1TpWA2MzdQMxs5oqsmzVtNmVQk9NJ1Uu8oQ9RVAG2QfXNuE2j5bmn66bRSp8NLWmERKz",
  "key10": "3bhKH2ARanw4kTMtUSC46rLGq4QMtoZVFaB4cXQ936JWHLN2b7cTssTyx7DHbAFbDGXzFae7VUpd5gtzah943g7P",
  "key11": "JdQTnyheuZ7HP7djWAFZe12mkr5eRVRtnLtX4K71kp66PLQrDCP9nVmQCp8sFyFqdFQiTch1EsHs3XN7jronya2",
  "key12": "26xq9TTLCpDUR6nRCTrMBw8hXNGWp6y4g825YusoyQMNdfzVHgjd7cprtvyYW2gcTjMwiHKYjE615dVg3geFxKRz",
  "key13": "LYSUwcV2Cm8WQ1Xq39f5nccrHBNaBKsp1z61Do88c2sTdZ17k8chpMNPS6YsFkTPXAvwzmYcPtLHqbgZYrF2zuz",
  "key14": "sv5wa2LKSXzP4eqRqGPfDEPx5HtKTQZwxMZCFDcGBmxtSRzaLEzk5oQT9JBGhT8QE9dnqaAtRBqRJb6VocUbync",
  "key15": "53HN1tMiurhYfagy43hfmqyKcE4BJEnu638wS1kDP2DEA5FAkZymZePASsorutZ6DRKnxKRGqLWBfX7JTUv9PJk8",
  "key16": "4VTrUG7X7yTAy2k5uKM42UX4V1HjpqArD6KAzHEWa3Rz1fz1eJ5NKMnVnSyS4YmKYSqUuqgMCs1xormNJKUtzSNW",
  "key17": "2LoTuWJhujUYC8sSXo3XFPAo5BGAnPy63yV6xk73zALVzKhaTFmbsmaxmNjWV22Reu74tqKFR8U97XtmtcFWsSyB",
  "key18": "55mHQKtAkXWyHvBzikbrNxK2XKyHYAFPKa7u8QPcU4J1pZ2ncvntMYf9yFRHm1usbX5xdiRMzniq5SwqnByHkGS5",
  "key19": "5dra1WzBgij5ikZtyeeCd6JwhYaKBWNCQbH6gm7pwadMX9gkczJ4reYk35cNZsJS34ETAwYNRZRhJtLPzvLwFFWf",
  "key20": "2XRohPosKbjKBARmn2DccWDaCTsRnfcvkhLqN1uwfJy3dt5QRpmuBhUAd7SPDeeFttzn6UVY6Q3UgbYNJH7oXgZn",
  "key21": "61KHDsLfKN51bagoxLUkdkUVcRr1kcdPKehDeL7zgXRDvBYw7xByKeTyf8R6LQgZddrMv9KncPaHvSrQk1GK9Xyq",
  "key22": "4wd6qZFBL4bXWdZxj9Ha8BG85uxdC7Nm9gJfYTrLsykjWNQUGYb4eVrKJuRb2NusbwQhaQ3E9WTDmvqrspFEw7VN",
  "key23": "36s6NMaLHPG7CTTkEPnMM3J1c4vSyWnDYUiX8yujiVEb5zu9YPW1qNFyatwu6tifGgYxLR3CkszKLfnrJytd1NpJ",
  "key24": "5w7Qg3hVTxMbr8Dt6Abm96zaqUNTP3ePZbDrg3vMMAs1DFNj8cZ6QVHm7Bgdieq84B67ByXSbFZJtYWtAQPtXMtU",
  "key25": "4gT3MwjwLh9SDgSRunkXMGN3yft3ZRAqxZ87826DZnASM1ttba2LdADz7B4hinP6AoVnTEFybYcuJhPavaNvh45K"
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
