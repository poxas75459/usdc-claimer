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
    "3E5KYBv4PKwG5aSBLvVWqsR9c9sKHK9iGkGUj6JWrzpEuG1xuvUhQimRhstNXoP9rMFfUhbtyWqMutv58EhRV5Px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "16bZzWoLb1kErciH3BFsXLMKb4V6bpPiH13L5QuZD7nT2atXgYiHWiPTrZAKDfoLai211GrtakdT5pxnyBafMkT",
  "key1": "5uMeA2XCYyUYwiCBtmbXETArFzFkHUHwyrkPRAUrJmVyjrg15BgRGMy8wGrHxsYSRFXtfkEKRrRUfQe3mQ7zViG6",
  "key2": "3depug9DKhrsQXGJ5ipyZ4sCMR7yTPr4cJc5iVQzhviHYamfprHNPauhnLZDKgM7wxTNHYaeqSpniJXWpZUxeTTt",
  "key3": "5M8KwxmRQd5JaF1VPtKoeU7DMYaweXDvKv4RYArGm2eysSMHng18gDXMPpjFKjXpuLF7DeBZJyQ8J84P6avBDQyY",
  "key4": "BPRgBQn6Gc2Jtm3eNSEvAZFesBf4q8yDPkQ9dwgzSeSegqJHBxz1KpH9qw9hUdNYWdmjwZUiocWwtyVcM1sboDE",
  "key5": "352QpDAF3koTA5E4LBvrmR5EYnsFTVe9byc8R9wYqnZSB7FgXcVbZRRuFs1cXr2SQ1ztuy9WtWC7cHMTNQMg3cjw",
  "key6": "2PitRoZ7ucBnDdG7apVsVcABcFhR9UNtLvxvTTpqhmUmRq75W8BAY3Nf2wSHRF9dLCSqJMhd4Tv6xviLTUHy5Wdr",
  "key7": "47UaUGdJDK9LSip4KezUaCiSYhymqcJAhMFHEwANXDAmVXwgNLfRkKwQaUzRwcsGFHJ5kGJWe7rEekUBDgVfsdPQ",
  "key8": "5YRdgoGRVnbaqqJHKWto7QSeTFKT6rifaAmd5pt4aoFMmZpuMfkwxQwoBmcFLiACysAgUqKRW5rbp6X4NZvJKz3V",
  "key9": "5dVWQE3eTVPWiomadB9fbx55uDEPMqQg61egLWfbLEfLZEBWC7Eae34tyjCrY97cHYnCm1FuCeBcziu84BExRBtn",
  "key10": "5C8a16AMQSUnezVX67XbGvU9WnaxuGgAaP4SmKR4HMV9KsCgDdHHbBUykVVPWTsDonbSUuFq7zG1jmGPJM87Tu3v",
  "key11": "48u2ZA4u5DvX5hg6ZRJdDfecRc8XF2wzbG4bihfw8iUhLNHhSknn4KpTPJJ2wsi5ZjtG6HFD8kWRd57AScL2Ycnu",
  "key12": "3izs9fow5ssX2pnFfiVdRF2UKQn4kXmi1QhqFNsxjySDxcz1Cyn1k2J47qUc21WEZW9Lt9yR9Cr7yzVRzBFpC2T6",
  "key13": "54f3u1HPenw5XRfkL5tWCPr2HJ7Kdna4ATkGMhKQMqAX6b1d1Cec79AkAaxmwwfCBEwXtDKgGuhhcJxXdMt9hfcF",
  "key14": "4FHWRWQUS3dyq541ksY23gx3oTGnigMwodJsHf5QYAjYcMZj8Q43UJMNzcTatZZF81cnzngD19eS6YnX8rP2Q9k8",
  "key15": "4Y5EXeVo1awqVdsQKhYRvZBTUqGaaWMGniRLKVQCpzmyRKE6e9XUyggxvUULjyTxjpCKmdRneyWVSsEFaX6vKvWC",
  "key16": "4KP5mwGmSfb5cB1y9mJRaVEGwRGcwiyU4JQZMtq7h64fzCthJR1nUt1VpQqTeoykhsmuzT5Xm9cimCDSwYjQ4cB",
  "key17": "nXRKKXtPH3BytmtB7Fqy1qu8Z6ph6z1NKUCh1evQE6SSBG5nFnghP5Lm9NoZJ7arRBCStZ1zeYiqbvzbAaN8GLj",
  "key18": "pDcoci4D34YuWuYS4BnbTBEHQouVFnc567ugHoxrYJ49Gkhkp3yde1cyzRNwiGfPWEd6VVoPQv9t7UKnVthfFSR",
  "key19": "5VDx7VWoeEiBHZKDgh2epKhusgc6Ke4xsipLGr1n2GLPSH5Kw8Ef3RyLnUKsb71roB2damCva2zgtNgUfuEcWHUS",
  "key20": "5JsKen3Ezdpd36oa6Tw37MQP2AQmhrpeBmr1pTaUR7qp6V2DRmPtnoPFh9BKx71jAhFLHzqcbM8r5hdfFWfFASK9",
  "key21": "4dXrLDjfy871qpkcwKbxRWidSXh4A4gpFiEL29NuL5o5tbrtTYiNUaozVAmbQA5iWcLnydp89JhaEbS3hAdpzoVL",
  "key22": "fDZe4bQRBTa9P15ozcvCzzbLpXmB88bH3vw49UkQapwPEShXhheBywLhLcq3gdpbjVHzBViu1XCD7vrWotLtTH8",
  "key23": "65keSsN8UqcDySdwfpXfBkvK5VLKYspY3Pnh96pmN5gUeweya7BLvorHLTCeWmWMAsr8EMUBKS1jJjJkdRrmtqtg",
  "key24": "5EHQE5CEJCJoUd2h8jbGvNBtQgR1P4ioVxxpmN6xSc6oW8RLbknybuoAKR61ijtDLAE2YxHbJUaEcuTcriLyoGw6",
  "key25": "aNCzHDfMCGRqFwxFGm2q2HJDqE8qCkRgN1PhUu99N3Gu2M2WcseJvrP9yg3PSZeaqyajvwuCRJBfi8i6pzxYUmP",
  "key26": "4RFKT622JCE2NyfkcrMcfRKHSmAMpoAKPZKhKXutmtJM49JE6JT7FUgekLpx9sQ46Uq3ouTEL3wYBr9Pf4ba61JW",
  "key27": "5b2Vk4qpKF1yXr23ZcJgwToPtSThNM84sd64hrA77gCxKRZc4y4wYNjLDaTG4xPsWmtgaHUCYoBKu43gfH9TYNK5",
  "key28": "bQ7qW9w5wxSgu7q1oKSv2PEfJpBpvx9Yo3k3iXAEryVNMyTGb2t1DvwJHP7sp5gMS63kywyvne3bvjCezwFECL3",
  "key29": "3vkZbw6umxCsxUcN2JHTVdFtTXQRKAFheUfcCVZr4jxCfikPzHP4oaTwuo2CQTkHkfhYFhcovrcPtij6umYP8wkq",
  "key30": "3u1w45xRyjKvi2RK3iiwVVqFTKQ1f8q5RBzqabMykjKtYM7tSLFzY7FTN4ZydaxgUD6RYoJT6tjP1S8hfXcdt9i8",
  "key31": "3WYkuLw5NaLc2M17ZXBVPQZcMZtytNZgLvKdrGAd1SkCRqvvTtygHSDGM3YG7XsxQCACn511E3iMhg2f9GgDXc6i",
  "key32": "xQPEPrYMeX3GA8NBPQKm52D6DCoBAgS4dgXJyCzSaSM45YnrsRhC7UDkYCv7EHqZn1nsfREV1VzKtVbk4SVDR85"
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
