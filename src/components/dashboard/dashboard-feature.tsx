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
    "3YBm92PJZvhL5kSgroKvBag4tpt4aiki4wundoMYc7pGAzxu9d7J265dK1AXZdQQod5ef7ZC7UT7E7TM9ujy2qww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fP1tDTE6CrxdBXWwNHDyTA38WxTAr9FZrHbiJWsqNYe2WfH1wncEWWQfMaogMUz4EoAAaTsaJNedKBR9RT8SbKj",
  "key1": "2sgDEmL2myqkdTGAorQNnYev3qBjVa34C4g9Z8etWUZmr8818Q3csepWsLYs4BaTaLSzBqydD9Z3yHWeaLj9LKth",
  "key2": "eJ4jeUZNoJrRCuZiqKSYYiAmpXxGGSvgf3s6QFqGT7H18T5XVGS5Ak1FxAVTBtHpMh6zUCE1h6BtoyK9HZQFjY9",
  "key3": "5rMPDuKvKxGmCy1pQMGYrsRtvT2EJooMKCnuGK8m92vGsDAbyuLr4wu3DHXkvXeN5R9A3CjkwNYnRaZcixfQXyQE",
  "key4": "3zFFGQd8JuF6Sc8qRe1pHDiEfjEeqX6JZf6WFc7UddgaXkPuxFmZ9fAXDJLxG4hSEtdfJkvamnvKPkCXCSW3dbv7",
  "key5": "3pJj3jkJ6Utjan66pJg8g3F26qXvWHPZusFufwYhP4HnjcFDNAKET84i36XAkCq6tkEFrWJ7EDwNWQf7UH5LQ5J7",
  "key6": "25Bjnkx6HxeqW1BWXyRaMjks2AXzKcRQcPipsKf9rv1Ct2DxJumsCUpn72FVEUKN55bEKgyJX4EU9bmJgvtdp6V9",
  "key7": "4tCahtCbMCzgnDCWrMF5K3VqYBhu12fojxYYMTf2xmAEPqq2dFmmFpYBaw9N8kTituHCU2BG5ehCBEMxMthZnR6o",
  "key8": "KLU3ir6EJKm8HgT368mWBPxp3pde4J3XYGFLSXz42zQrgGkiMR22qpoHCTAdY9nPFAW9vzNH4LjsKTip8srn8zw",
  "key9": "48osWg7dS8GRcvd21UVguXGbfDWckdWbWXXqL7yW8kMknNh6NN8BwJtVdrX3UCmZHBsLrfAgy8ipgUCB9LJVpGuz",
  "key10": "4AWFaWySVWCoaZd3L7Sv4m2yEhaD5vYncwX4KeH9219NNZDGKqLwLNhszuJnE9gAeyfLPGBh7hSCv5WKixvaLc3Q",
  "key11": "gM9tQTj4aHidy6acMHiH5jVxRWE2KckrLGJcRAm3LgcN9uJBeQWCBEBRQH1x1WQjcGqozHeKwQB8ywwzeebzp1R",
  "key12": "4TkyGcK75Qzg19dWio1rQc2Wb4tjLQ3kQdyCqMjTFfv4vncJ1nCj4tZP7Ps5eBjT1r63EhbMq94sHGT9RpHteqqY",
  "key13": "U8eUi3rwBhvH5qbSD9iTf1BWimLXgwznqYaXtcS2Yqvrz5VSZuABcoVLzQfuVbrvfbS61otM3oLPNKGr4X1RNZS",
  "key14": "36GmMjK6JbsRHtdwNjdRsCN8bMg18y1mHkFs7WY9Z1cL1SjbLcPpQ1USR2WCh5LC5Tro3arfaHBWrCw2AwGkAtMH",
  "key15": "MLaYEwXqHN1PXMuYmqGwToPSaP7KqMQ4NvvdbRPBKePcKsF96K7K9tMdhZuBD1XEL3z3z7eGiCNzdquTPdXwH97",
  "key16": "5mnU6cdG14FBwjNyCyrSkuwqgLp8pTrnGWxiK7jXrgcoqvMJpJt7Su6WbNrSsvXqiKhVki7EMqEVxtqqPoqBKWSa",
  "key17": "3T5KSMmCCGSfkfKhPSDFN8ger8Fto1ei59Dqivc1EmMZEGhmZ4XEDm22hFFNS1J36PdRveBgA92bCBEVYWo7tnV7",
  "key18": "47bWmJRiWms8GvWe5AioqoZEGeDeuLv9MtjTsKc8Fjy8BQ8ushSxkKJCJ1VX1fecn8jL1R3rt9Ui2AWLAF5J2m6d",
  "key19": "2b7qjSeprh6M8TU1nzzHDGQDrQ53Rqx3b4uFuQ4pvjuTrcqXG2Bnv1Dwws7L4H6DBcoCjkFpnecpa4FjphLWtHQu",
  "key20": "2mmTwcpoqqT4yefQyP5Zu8Y4w3bWZM5PdWF5wPKiWUJjjZpjJcz4EU4ytSrG6yH5XY94LgJQ7qfYvjXhrY7Csepg",
  "key21": "58CDYtyuToLtmnPMX2xAAc56ujdt7xRBpz8gVnqEh5VjVFPTtjqfdDuaXray6YXdU9s5iFfbhUvrKiCTZt5GzsMz",
  "key22": "3zT1E59Mua9AWqxEpE9aZdMC7bYi1t1G4G5dpk5ugV4zTvbH59tEgYU3oqfiW6Wbk9dtxoKTe1rPgS4m6U5ZonHa",
  "key23": "4pcXMPxvR9iMBynGbpT8pYpLKL4orwbLNZcKdAnb12GJBz2A7wjfG1Frt1HDaVoBJUyeYBRcAxEEMhRk2qdjjcPy",
  "key24": "3cTKVmJnfStAnqDBeyfyptPN5Z4AzTcRQqg5VdjMGH8fgsy7zi28KBvrnxpnGDMRbh4QxuST49iZuyc8xGXBNizE",
  "key25": "3TPTjRvugBHmEkKC5EXuJU9w6vm1QgrwEWenvbETA38qMLh9a2eeK5HAvCUfhAq3WPgURuSmCcfNBRPbdb77WXab",
  "key26": "KqYpmTe5eeBTT2TQvykGwiR4pPEbEyQYso8haH5j2LkPS2UYUtL4ddLKJURB2b5Y9JtNtaoQZAZ1uPAtDXZpcU3",
  "key27": "4ZmytXpicK31t9dcS2yWkFkQmPnt8cVNzE27o8ocrcVCGfr4Qs2BAx3K1fgVcmkVbZjyPDPHJv9BkYRkpSykQea",
  "key28": "3ZKrypXXCfWSLWQzUhVhN9ig5GnEgnd2A5zjpwMqUMmpCdTkfi2fLL5gW8BSKz1pywSLJ2R5V7PavxWdgNvfeTVa",
  "key29": "LbAyY8DTyiMfqUNS4CuRvkB6AEZf5YDbE1Vn3xQvmhqQJxtsFwnqxu8qH14rWxMAEA6xR6kiaLddZkjpUWUWxsr",
  "key30": "2oYtf66aVGC27vVE2pDZ12Q4KivPp6GqrHVrXgAYk8L5D3g2B3YxvSbf6pwhvvDiwGP5gu2YLW8NTNp199insWBc",
  "key31": "35BzXWDJYEHPiEpaJSocfLDH3kGMPv4aRGtZdNcRkRGzHMnK75HzcLwzoNe5fp3sFqja2LWtyx4QqHTF1fLgUHs6",
  "key32": "215eo2tMEubiSBNcGytQ8LhP5cRBoJrJ9MaKjtp479y4RGuZVnrT34KkoYSiaBbqZUL4aXjxB7q1e7TzbVBU6Ugo",
  "key33": "4QiWqGTUQEPQKatdcrn2svBXPKrCMjn5MEK3Ku7mnYytw7c4KkF8hXbHzrYsXdDNqAUEQ8KA877F8NFMMB7Tcv6w",
  "key34": "2RfmAVQk1cja7zKZoZxhbSsm5P4Sbc3xCyPibLKdZg75T96eS1MPHYAgXRfmddr7dyN4tFT6hpbgPQgzDMCp1hth",
  "key35": "58YzvL8Li7eBocqkL6BJ9F6M9PFPf9TJG3wnHNWbC45zx3w1CbyMQoVvLwfybCDYVNk7wk3exRqesN7X2Dmdv2Aw",
  "key36": "5CrLu94A9vYxJmyZzYiDtQaWDdvEnrrF2SSrDWGWSGNb1K4mee2ioKY2Z3yiqjMZ5ow6JZezkUbRtTPaxMWiDak7",
  "key37": "4VHJV81q2jpXLZng5afk67CArHDcsjFieAgAthL7VtLJ5TAGvdmtrB5U6xHWLdg14NWjD8RXixLQsbbcaeAXXhf4",
  "key38": "4757L24yQbBa6C2L4bKkziCJnzR2mENYEn3TqjjRtKGahAw4pCnSjDQ24Uq7dMnoBFYdpGJpeUzpEScrPxw438aB"
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
