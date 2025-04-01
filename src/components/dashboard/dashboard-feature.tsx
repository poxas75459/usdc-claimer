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
    "3BEKXiy6qcTD56wTTJWucJfdC4Ey261tNZ2xSH7iduM8XCrHKUbqUUHhp9whu44zD4yEagihXXxhyzZoCc1p1D92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67GHQQSG3s6hRykVuJFdx7xmF5p8Fw43LZis23SdGJtt1E5PJHFwJBcyvDjmBbGJN36ADqENU7RmcwhujvX2GDhZ",
  "key1": "45Y8XvNJdv7iq3hDnRXeKKyDznwVW2pJbdafpZfL7zXPmgzVk2jCi3b2XThLcGz5gGqmk7JHXPMW6am1Kgz5HbDn",
  "key2": "22B3sYHFx6Dj6uwFFz9PRDkNTBqQLBFH6gc3F5QWxWRMjzDisWsV6iQsQ7iVCg7fFE5LefrR6XaftDHkdT6GYTM4",
  "key3": "wQqWquu9BgrVmryzN5swKB1sTYM7z9KcCAA3BoCbhUPEntTKi1sEMQz6fLofrzvYmTHyTPmZzMjrQdx9V5e2duq",
  "key4": "653rjKtSiAUtMHjCkKuTE5aU4JY8TaVptxi2PYwTNXpWCS3SDXtHAGcPGxzMdFDfbFhJtBVEj8bqFmE9rRhUK6bD",
  "key5": "MgWCtAs9nDfqUEjApr2XX76k3LJnc78ksjnHV5frwpeP9BwcBmFCJ6Nn1p4GjkjmYgcGLUWfTRo1H9tbSNzL2Xx",
  "key6": "5pWvXRBpgES71vvNcTdawpnpyDYLqnkdq91TdKY121T9VsTaxcPMBVejRhGTFdp63EySKNppwmYQFYUxQBvFXXw9",
  "key7": "wfYdE2KESxbCZHjhe27ugSmR4iXPM9XcaoN12hmvAuXkjtt8Q9XYZfwm5RevN14o4E5zCrPyGjEtCVXRj3GYEXx",
  "key8": "e7EstvURLB9T71uAioSREu8wL348MLga63ub5KmfniKA5Z9zYjApjwG8qhsxNAkWhs24htWRioKdwsAKc4tW4ZZ",
  "key9": "3EdiwwgT3jNVDGUANDSJxdY1tokNyiiMshZtnEgFt96EoKQLQDAtjHBCPScGYBogHs7pdhC5cFFwiZgEidhf2ayP",
  "key10": "aQNL7EcWaZ9CoFwfT6p4WZAGrxPskPd1RqL4k81RqGndSUErWThvcpTf1Q71HSZp3nAKBrJ4mS6KimDFgg2wjxK",
  "key11": "2ee9hnmS6Z4ZF2BY3HFTk3D1A8D8N4uWCwDSuYYv3ZALy4Z6zAN4eNAq2Aoj1vb3vbK7RCv4SZDe15ZZenSTwkB3",
  "key12": "zb3W9soHSijnLcbWK1M2sArs2LCf4vqT8c66DnSWEyZxwYwo8KLpcPTUbuFtV6uxNZyo6p6MdT2JySdEy5dQyGA",
  "key13": "v5gu2yEXAZGJ6NrC4kXxYgdvLVpdTuMTnd3DcA8RfcWYPRzGbpxhyWFpttje6Nu66KqTZJq9Rw2vjXteCrL1zWB",
  "key14": "5ieWgPnWF5nNt8SBxBar8ZCVApEyMMK78hvEqYP1HVfvxFnjUL8mv9izMbtVrzuxanZ11eDTwHzgSBB62xmQb1xx",
  "key15": "3HRreG3kT1E2MLit3oBgWtfVWUEe3LNuquVxw9uMrtBRqBZ8jJ9WG4SMJbj4cnaSs613HeimnDh6JmB4FywLfVbw",
  "key16": "xYoZ6cdKugvz48iGSDWg1oKJFu7n7Ab5wpoP7wrTtjMdYzYFfrNZUscJJfCwYbLkGY83ZUaVQhtv8VSZQfRt9iz",
  "key17": "2iktWapCEGvK4Z6NLpSw9UUPQLoQMbAXEdAMuzSSNxjJZkS1jwjpv3wf24tegXcvzkM7rLsArMkiXFMwdfpnTrzb",
  "key18": "3QMjZyzKkUKHCStNTKTBkJFYRYA5q7yCrVeqcmPth33isyTr6zumUDxfvuT9aqDLqHwGZksmyiSpa97DnRdKnKiT",
  "key19": "3JBM84vi1yEFZEVLsxtPQgPLchBfhMBrCLutc1cz97cyRQQnWRJTUd3X1f6EoUC6UU5RRyWCNiVxt2ATA1e9FQtP",
  "key20": "5mRPf9vRGNTJY9LUvofEHmxLvdnTwyAJmFVK3q7G3F87NKdPs2YnN45wv6AY7aST6eDmWCtgP6qADbAJ73Mmu8az",
  "key21": "4HtMYJvZ8TFLDfd3BTNqKq3hANiYidLVVAszaEE17mK9ohCPbp8ciCZpx38u4R7UyMy9hWFVLwbNkn5D2xVq18Wx",
  "key22": "q2zsZhpw6rkLsaeYvfRkbHFdjhZhUo7NsFQMmYKCngKsscdsCQLyccbnf3Vaq1NaBa5CLYuqiTbw69mp2vN8aP6",
  "key23": "42JwMNZB5SWjwgfAPEizvkKcESw8SBvLLzQxubH7ftxECqqG1zMDSUJorYf3LkgGxDumj3M8qZZET9XLoyrbeD1C",
  "key24": "4sgv4LJajffAxvLtoxL2bU4t8tJPWnAGi6kVDDs81WpLdjmvgcHRbdyPFQQBMXLYvpdJUEG8HrZTszGeZU3VHjux",
  "key25": "4S2EG6hs7x4f4dZwJFn7aDqucrUiN8cgQg1oDwZCdoTnfY9HVQE6QHJ1yqcZmqguq6BpD1XiZR4wjqz3VtWesEmJ",
  "key26": "4HTPjDGaToNHLCkymMfRygaFLwHZR73mhqr7ChAnV14zSVBm3t24qTkPokZfcecFZaNaUct7cxyJUCcqZgXuQej4",
  "key27": "4HiJjCYxAsRM6CarraYLGp2kh6E7vi4ZiFpYhd2inEFYpykv3oCxfhbBLvMhykz4kbtawLciVYoZ6KqFUF9xbx7a",
  "key28": "2VmhwZAMrmjJQiRXcXTDW9Gta7Ujz46i2TST7rL1y6gz2xKK7rLdoekLbiXEU5NWat2jQdvrnVFSw9mgoHptzzQR",
  "key29": "3PZKbhww31xwqdmJfd8tpVE3Cfk2N6Gb5xoAr6iF9uewGF7Wg9N1u4Yyx5x1arKudeuSL1X1YjQhhqCh5HaPzfp2",
  "key30": "5yuf4FMxjJuDHR2MCo4hG5DjfPJQfhAx7pnjw27S8fVGBVKpLhCB7qrPofVHGfjq9sdfwoyvg4hMg1BcRsmRKXds",
  "key31": "4EMQE8Fn58Z7TVBCNxgnobmSRDfHxjXg5ciMH5wrN6JparqqH8EjkhbVoqiRhU9HqHkbpEyV5mUX5quzcUPds3nU",
  "key32": "2o71ZyULqaipkKLnQjzM3vNQ2BtjqnkpQXXNTVkpLczYWiSZrdx8QUHzxPTgam2uiXgFqxZLP9oZPTwGu6CV6zN1",
  "key33": "4ZVXY4UUN9vrojs13W4y3s31qS4mqeqLS8YunLLvC1hNMiCmqGZHJGwnnDt77Cd7JZ29dA5AGSdbGhHUBzrAaEHB"
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
