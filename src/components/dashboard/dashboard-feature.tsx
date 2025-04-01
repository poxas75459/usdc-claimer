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
    "4qQrRuJ71qjCQqdRhtVHyhC1Wn1V8eWMDp5Wvr7XSdrEKruugitXjPYSHNQGNqKhF7T9LjmM63dfgyXLhkq8tZWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZgALAAEbomZgafgfV3dDSre5AfgCvKjEcbjFhhBrGbP5rVSa5UCX6oJiE6nDnyjm5DC8dWjLQa7MWpan34qwabK",
  "key1": "4jnCLe3NZ8YzVDNJLkEHbkeTY4hyTFT3XfwxVGrzR3piSXEBpFGL5anQYjrkTnhujeWcwUxcvRuGrgaQPkKfXHFh",
  "key2": "xjPThYzcBRSXYesLtu7fiYxNNA4XxQoee5dG82UBWc9d6x8KY3ZcsQLFEGyDpzm2iDPf8zcxSrMygVH5kCWXfWY",
  "key3": "62Aw5A9YvPceNswFUDEMapPyV8tnV6w3dLRcxZEKXbswg1MxDMm21J6y7DHGyV4aABLTVBtNyreU4WRQ7HhhWPQ",
  "key4": "253ZFAVEzK3KQ3yC4mcsZeiK1gcBZEss4mkbPbVUpPWVSrHsWHbchbU7uzvFTT1Y3bq5NkgsXUCHhoTbUL3mXiKR",
  "key5": "3xjrEYeNz1v5KnW5gFLQ3Vd4mkfaBGygUZ7osvCnUP1gQwxR4rZYNQF958SiK4gq2f5erdNUNimGAUrmwhotQV1v",
  "key6": "4jRnm8fovQKzqgMxZUGHxZf8LZuB1Hp4QepsqCa24kPnhhzJeExaHHm6TVSVpHsfRaEFo4FxEwSb96GYC8MferuW",
  "key7": "49rC8Vt48V5AM9myz1Rw9sXEsxDSKBsq5VU4cuJ7KMhDmm4uAGS3L2Xis4rz1NL8XmGH2sCDosYtpKrzs7G1GNp1",
  "key8": "3Ju78aYWyiuVJkewe65ud4REDi7NA8K74zBkoW8UbzcgH6ifgt51g2DWxRNf2PqLaYiz3YYs3p4s5sumoRfzEAfp",
  "key9": "21GQEWbkbBUyWficnDWh27bTHtZH4ZXwidHfXMNyMpA5c9E33LLkjzMu6znt47iw51Wfq9mpWaKDe42Z4bMJPdL4",
  "key10": "aY8Ehx9iKpzci3PeLccYaTYteuGSe8KfTB5AvLNDCsUh7oFcrdoCdCVzXxmXZcekwgGmV25rohMrxx3TJD2gXDk",
  "key11": "3ZGkgkxsuLSbwiXAR4irkupoX5Lh5U3DixwpCjLeeHDB4736K3BVTijz57WVJK4ETuSE6xBEJkdyxjBYtfgaqs66",
  "key12": "5siQyjsJvzohzxAficNR7Za1s82NBaTBfbv5tyEj8bxsPuVobxDVJgj2WXbMaeEWuxfKTsZWnuPGpDmXzk4Yb3pd",
  "key13": "4azDUAKdRiJEhoatZUG3K3AT6i89gbp34oSJm552DUBrrXJKMzsEJkKJ5uX7YGStbY2bLKS1APtivUWbYmcCKjiJ",
  "key14": "3J223i7U4h7qWpJ9bK1fGknMLf8R4VtEhc94caYmCyy4rvqXej9YReJH41QxmTAKyWVHDzeFVDaUY7YMXXJXh97W",
  "key15": "4efvnFkK4WkGY9fynTYaaNAjF6gpMyX7BUqvMgBvtKJAMUfT56Tyva4EhGENtrjyEsSw2Bab1yVaFYKnCRKpTwmw",
  "key16": "2ioKit3xBgt93RuyADsrkfZgMBV4htxSoyXHNuP7XZSErTTGU5f3Lyw5utsaZFQm1rNQqbrz8EV3xrkcFoa9Hzfx",
  "key17": "5K5KUJGaWsotfvVgNhhbHZfi5M2PewBk5hn27PFApc64jhbEbu1oSEvDbZgokziAVxzCMwwhdhW56Pcgy8ERreL5",
  "key18": "62DxkGnArWizcbzZ4ZmYkEFN98sYpuzt4Gdvfez28HwvjLxCJ94D58nz7KC6UPcxQNokAVz2MJKz2qtANeLv21Jk",
  "key19": "46kBQx6BtZEjnQxTDQecfkXR2xvav9tsX32KjW7fFcaKvBLgFEMXuZREfpEQ5oqynP5F9qDzvBFxHnUMXpaVyxGo",
  "key20": "nKGdzmHEPTD3RnCoutnaDUxNSiRVoFC9J5VHnocNX4na3boophmn2jDMRjmh3BunmWRYa4qMmnyopPpohcFHGdp",
  "key21": "5d1T5nsqLfoUHMt3zWLRqYaLWpMqQZhtTPwFHjf6vWmDwLr6KZu6FkzNBkkVkC2S3jXjf7vkDq1zh4xe5vkQYabA",
  "key22": "kLNYfSAqGStbVHWVjSiFb9Lma3bG7Cf1q8HLCic3xwgPuDZWjdjY2H78vvM5sxtB7M6LbGMPYzJybAfTGePED3e",
  "key23": "2octSmt66kENhUeQFUHcbV4oT55mWapKzytttTR7KroVN5rmGzVBwuzA8o38rBTGTjx13Z28PYXvaQk1q6tV9RNF",
  "key24": "5ZXBvQCSDJHc7nKVMiTQSPcXBfpedt6qa6hTQWko3rTo58qMZ1vxNo8ArzsZJTkT5KjUTFqbdRgiJZ6mEgzjtoYb",
  "key25": "5SVuqufYAX31pSTtUexEdsmqjK7K8bNe6qSUeAemYtvS1UQqZ4MmvFxDU9dRPHE1RRyA3asTHqBGGDgDWiHTA22T",
  "key26": "23JEfXzsjyGJ2p8FYBdsYmqQSsMnoLgknPSDmKiVhNfz5LDnwYTYe19PmEp15AvWFiyhhgozVuNS4Nf1HCKrFjuK",
  "key27": "4YrnUwVPpvYnYksgrtsKrFPf2VSmHVdnZR5z9bA35hfWGravxvYHncC3Ui8U6QYSPPaYWrf5WG8jtEgxjvQKRbTd",
  "key28": "5F8j6VMC7oRg4vzpYfYZG1kciGYLZcBXHN8du6ArMn1B28ihZjaTxaTtbBfB83Z9fgRNu7nnvAdThr3bx5ZzHxHm",
  "key29": "45UH87wYaDYqTFgsDGddDvedp5btYzWh2x4Pym9c8qofXgEbhSJjzVA7mhJr3QvTrsQwW6Mpz7EaRjyaFD3ns1Ap",
  "key30": "56Kw7f7N6RoVhhHydXBbNUZozk9wHRoYceq67XHUza3tskp6YAhXirvtQoHGccYpPYuQwh3GVuFdxe7Vp6x2Xkf5",
  "key31": "pHoBzpqcNttvPrnvcbyJyKwg6uJZKXZW1ECTCfskJLstvTjYCTFsbR5KTSgN8y8gZ1bkNvZ3Q5TvqFtf2ugfDPp"
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
