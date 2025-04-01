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
    "5364ZteQ4KLZmfXj4MwCrFNb7gxgWvEDLDtaUERPu8LaH4aT6ZTfnkQLr6A8VZtGQGDdy9GjPvyARe7nxGxUpnzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37vmEE7HeEKAVdS7m61G8hR4eJ1tERLJ9DpXSNXapt7BMSERLkdjxMSuAbv1hjvTvmbEehTc7BX1SPS7tQCaogQP",
  "key1": "4srCXAdEEAGjA4Rk1b8rqp6xgRTpiGAbscs5ktXfYEHZaE8k9ZRZ58L9ud3nF1xM35remFdyiw9ZhWjPEY7BQWrw",
  "key2": "2dQYUx8gvqLXn6VTc3Y15ChagPJMoS4h8hYx9z8y6sNn5rzdbG4J1qgQ4w5nfE18RJ6zykdHJtz3VSAcWdqimuGW",
  "key3": "4jGtoSxZiVKeChVKYnWCtWEjDKugseDKf2yL9MuZDnaevMs3dHJVexYxd6pXqwxZ3FHU7LJqFjee6UtEoAtmNXPt",
  "key4": "2PG8wGP5SjufaG6sRssXamAB9NYqeifmSk4PzVVbakt5Hfbi5E2UCJX6gTPs9Tx8oAEANgL3Zcd134gH8C3h9nob",
  "key5": "3XoL7UBEKVkZ2SjxYp38KFbVKmK3UeMXsYmdGJ5g62wnAJuYpwY5hmbArUAhgG7FtJRHj4ifwWmdmLTKYy2LWt18",
  "key6": "3YuJWtzRFUD9uPa7L94LPuE392Qh4Qs7nyktm45MFL8njrJfsVkR4oB4M9VzSvHYUyfgCDuT5kMpbWT9iyRNvFcs",
  "key7": "GvtkRgvEEZYBYUBktiStzysa7CoYyo3MFXmZ3cn3XNnoLp6RfQH5EgMU8g9NKDHx7TWfBTcP5MXJUtua1Njq5Qx",
  "key8": "2YDNXJMJhVeSjnu7aue9qLVMZc9MP4BzxvGNRFLxLyNQYpVehTXcnAV3BKowRuL7Yir2XaRwBPzZujTRb6Dz5yTz",
  "key9": "61DF8icCXpVJKxGBCNiwbwzkNQrR5QqGNZqwseTcFU3HzA6e3ocU6QtJFWhDTcG97rxp2txEGspuExKcV9Xx39uf",
  "key10": "2RmspDBHbJZj9wfXRfQ7AyYqTkWS3Pzsgs6XR2yrzADmM99oELCwKYz6pwCrmNf6L5cAfRF9ZeKfZqXptwfw4pS4",
  "key11": "2yuC77qwczuRdd3BSESepFAC6BPbSw5xdehnzcL8DnT5mVQMKie1Bdr2kVvZa3D4KwczsyESFyErqHZaMksaoW6z",
  "key12": "R7gnFokwRiSxUQdyKzBGN6tLq7nZTcg1v1FzaRfeDATspRcdbXVxakCbz2p7uJDBZ63dV2QhQeoAwwjAWkBF3AW",
  "key13": "3rQtyw3DBirf1SWRqU8pTkL2Mkp1WyuiHQTxe1ypN3yVYx6q79NWEqFkQ3HxBtBPmiZNg9HrKGv4N2Cxzx9tvRDB",
  "key14": "2A7N4k9unUCD76zvgt2uVAZJTVBUZ9E8xEistyLD166XdcGRBx89fUMH5VuKpXzs7UZfm5Aq9VtGNKKHzu2LkkVN",
  "key15": "YsPH7ftXmjLovE2qfG541pLBAk9CLqgTCe6w3KR1UVeEecSdJ1AwfEc38YcU9PgYTACzdUtZRo3Y4WjemmQrfez",
  "key16": "5kXFetFPx3Z7o57kSQpUTpDXzidUZJ76NavqYznQ3Eza86dFHMEv7NVaz7KBxBLSUWBY1u35oUYs7nrkKohKwbuM",
  "key17": "J3myuKfX2txznxXdHWCMASbTrnRhTjzger4KLCY1VzFgTWC4WnEuve6mkYF8E4hEGD3yMThprd6EwdfKCEJYmmn",
  "key18": "4SyJSs6gdDiNUyJ57vWP6MRd9DEdZSWZQGwQKfFvppTSsYTWZc3BebxJY9kbdWStCqjkgw5AyHHncGkgs88etMWD",
  "key19": "3AuJNAoRCR6K9pkcb5aHe85T2bZrGsMvkoZT6Sa1Q2kAP7fVZHEkGoPu95PwAgUUefqgtg1fB4yRuSgRcPEpUY3f",
  "key20": "5ES4oXWznCeUpAtfSCrid5PhuqC2BfLrKp4QgJHpBLh4mtF1BSYBp3wTzmDLvjPxPFBrk9n9KvBaUsNdEnaEfoE6",
  "key21": "411i9k33TfxMCWzdEWVAc8uLsDwqBLRqHTtP9yztxHnWXuk2ENftEFNhFTHHnbwcyg5UKYAe95htMfT1bkcqQssv",
  "key22": "2Wy2tQbBUqfBep7PmNrRjyQpSsyxBG8angHUp5jfRoLVLTGLttwiAM46ah1ubrcxSbYHfYTAEWEVhWVWmvsmQWTD",
  "key23": "37ecU7YpXQd3df1iuEAjgNcxbYHonyFU4ELFzoxkJAJxReCtrcqCMyhVRUnwHTxjegsFhX7K3K9Xj4SvwESTVG84",
  "key24": "3AaKo7hLHL2ofTeXZe5eFNTnGp8xBT9UUQMmzs8umifnX3xkXHUqqgXXJjNjQfmK6PHijM6WNQPM6NaajhxbW1A6",
  "key25": "5sJkyoGyekEFi88J1BW9BfDhuvNzumuxJMLoPGrk2NFVNGR7NZDr5YKGcfXonbj9mngQDNJADWsLfcePrQUEpTMZ",
  "key26": "3VremNFK7SYmDyD58S1gY7J9Uo8g2F2FX8sBq2xSNbR3KGTXz8Srg7oMP93CuPDjvu6UsAnvK7u9JqieK97D5UXY",
  "key27": "qXDoEWFH7u2vfFfVwghGAEWQZAQAJfjCUUA41Hf8XZkMZbp1DoFfSPwBUMs7tskavvpi8HfyGa5sg2QhvSwYZCb"
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
