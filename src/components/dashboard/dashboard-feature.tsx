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
    "59WhVGHm8Ue8MNryXEzGrPkar5guZHKfgiqFU8pHZsHrmaDxpdPeujJN242sV8juTAnPPCfvuAJ9kT4fU8TEt9q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F7nMse72RxzPyEQbshEjaHTkvqKXeUEHqRx7LEWwhk4cfotXEF4ZtWLQrRqVjAUpSipVz7XZeKibGYahVihuENR",
  "key1": "35sAnaGt5mw6T67GJ9ghEKSVFSnvRqgiCptfHcwuNsVAFsquUpTvUAxmbJKHwV29Z8yoqhWDkt1nzBF7bxXpiHeN",
  "key2": "2PF2fKzAgZ4RPah72x5YudoY5woUFbqTqhGjXobpbnAa6pvgjwBcVRz1KEKX1Jyt3Z3nUTdrTpGrsGnqHsHS1Sym",
  "key3": "3xPY9JyqvitMXQGiSjHtyA4oiDyYb32ToU5Ypwh4SJ6QCnzoR9Y2dZ2WP37jL1KHhKkeQbjLctQR3dj8hXA1eszY",
  "key4": "3fHML1yuS7i5MeghQt9oa8SMBtAQbsuiP1fv1QqVusMf7xXNU8oRcEYMLcfBHKe1SVeceTFbjwnujEAzG25825Ho",
  "key5": "42bHRBxYavnrWYeT9o7hS8vRXdGaUZwj6pZyLEX8zKV4ZaThzutfUQS8V5oLohwcq7cTeNENzxLvQo81BfSySB4j",
  "key6": "2UdmNALExvvWqUx76LStD2e6AhaPZnpFKuu6Set9c2AknfnV186CmZza1h6csQSesbUUpufw6Y2R5P64pYhxCsTG",
  "key7": "FF8hKXevL1iBd5eBW4K81WnBmsaAj5bLTmnCvcGbXTSX8BsxMYXXof6zdCA8LVrNXkpWKush8cBFDcJC4rAod9f",
  "key8": "3ko4D55xuRpxAmCLQSwfkykKcSNKR8JazoXtnVhWT9FhH97iQQre1D66TaB6LMCrcG5QV8sT4fP5Gv2wFjQQNBcW",
  "key9": "5zCB85Hm9MQ2yR2SyQnFhz7KdYzTErYQVQwyaZ7yP8aZCiPwLTgWNYRS5ittTpdLsuDPuV2r2BMxJmJQfuxdFevB",
  "key10": "L5EApYkMHVbFHxNBczUdoc9nnWYrkDY7QgqWQ2M4TDn81BTn7i1CXWFL6WDreUwBsrHcmXuXA5NfbvbH4MsF6Lc",
  "key11": "2oqYnPrtw4W9EFtZfXXtj3e2Ethv7TMR7qWSvmz42WjdrPiYwdcmSTmv1v1x6pfUXHjdfkgVD6zHpLNeaLvJk1Xz",
  "key12": "2KbPHH5EZCC8tuGNdLGo6ijEXPNFPm9M7aVKT1k4SQActcv3EUsU2HgfSrPWSL2JuDt1jmcdWExoCmeC6CTQT6VT",
  "key13": "4crPnLgPjmYgPRwrxm7Th28b3ApvbgHAiLYXqK7RfNyTottyUogr2SRyToEo3Q7RNbEb1EtZgg6eRViufyfjvKie",
  "key14": "2MmWg3kRCy8mooMy1hrkA4SAfPDrpL7NegSHnzodtfMk26mGX9hvS4MHuAaVHg3FC3LAgvNBfYbaaETSg9md6a1M",
  "key15": "5qfcYZdFDBx3vbDGvYGvhwDX9DRej4FChtJBeKMH6kta1L6fFFVv6NMJ618TR4PLvdoKLVPBX8xkrVmkit5iVHV9",
  "key16": "3bXYhNMPyTyLuNBqts3pNn2tD64yMS6YRxvtBXeYNRWLRAMiToCsFAQ8fxG6HoVydLxJvPPHiwPvYt5U1CvhQmCS",
  "key17": "2BoLciz89khh9xru9tbAphQ5B79yXiXn8ivBjjg1y6HfuLKHGn2EYS46iagVjJmE1LH1ap3JGqFnoox9ETYtg2zn",
  "key18": "2rNhWdWSZDNzJfhuUDWcazGJkd3jEmaQNCFwGkLvcZZnEhQmRqUSthcxKJ6WbDAo1W6Yjoa9ntPiFY4W2A8yP5GS",
  "key19": "5u6AdprEz881mXgSknoSMq5yAWrJPywZxMgAAfxeqKy6XoDmV6kX8ssJvAhuCcQhsCoUzG1NJecirQaX6mjDRXew",
  "key20": "2QAYQfCQc6PYdBAiXqfso8WwmGkczz473ntfKvTyPzjtVnCtTZg784ETzXxz6ThZDrHtWA19iXgn7pFHnNdJMPrx",
  "key21": "pizZ71YCVxX7mCTDbYZqaCrHS5XQjpENs1ujYci1C6BPvqPmhYSh54GVu9WTYwF8BfXvbXjTkhBNSDMnc2rzZg9",
  "key22": "21tteFmkifANpMATWEhiWKJnzeJzXcwG1wx4FBngdk9cTuUJDmHwzGPaMQnr4Y6rZ1wvt773warQYUKbYEezUPEo",
  "key23": "44CDMHJVLMDS5PTobkhpURtazA6sxsxUQzvSEuX539dz3DxdWFzLKVKTVURopGvU6vwMdUx4mqTTSZjLBAHtthf5",
  "key24": "7kqvpvjhXQaZs5PYxkXfqT7gRVEjygSAWs1iP6oKvXkeDKM3YjySjUnm4C1b5z8c1WiYA33dMMMYKu7SbmPxdCd",
  "key25": "5aEnz9VAydAp454idLAt2dtCTA8DZJFGCXv2iAiQRPfBewJQreErcWDT4k5KUuNKUccSQYPN5CBMfXK17zzeAuRZ",
  "key26": "5FytsNDUvhjVgUpCkYNnXYDis96esWKMuKCo3DEAWvFKJ4VixMQobV2KikxaiBPHfVJFw4sQoaeUvDFaey1aHhgo"
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
