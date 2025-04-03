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
    "23tqbAtsdBjwQSNzQf698WgkHEUVviCpDKXm6jr4CkNWVfEHz8fZpXccZbixASwhqEzQ1FRZoAP5tm9s6Hapdjwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eCP91pVMD2yD8hBLRFDHrY2zrM1NUATTyaLCZWg8ZYrfeWF5t7Hn35JL31L79fdLszBR7cYHpjY9ATUkZpb4Vqg",
  "key1": "3ZxCj8EWNJr3QhovppiMJto9XhFsoM5winSmz5hdrThr3vGAcG4dMBJTjF8ZcqWnU3iEqSTkABarLhbWzaUyizEs",
  "key2": "qXTzq3ssEGgnTh2KKnkernEYY2HxfDy9xZ5v6uRUhLqWaT6VLkTVPFoC7hHsw6KA3hPFdsZ9qJGSbK5AfMDC57A",
  "key3": "3T6dSdP55FaHozsXYJfPJRhe7AqMzeXVeNz74hrwcwPPhDLvgngYj4WmzUx3UVDXvZsQP5N56eXjvyRWswWAMiY5",
  "key4": "5ygCBnAkLhKTLou9qKtWmGaJF97PZNBp2Q4eAYtmgBALtbcfjmYy27TXBnAd1BjtrXhZqyrcgfyk8zBHnv51NpiE",
  "key5": "5ecyxv1PBcVeu4oXTT6vekhmrXkbD9RCMYBmqBhCh7FRC9xpWsAn942kqNPmRgGWAGmLfXNBTVN61tQkW39vB3n1",
  "key6": "2kaBqPR7D7QyffS1iR3jjug8EfNLMRSsZrQmsmYusT9y32pU2BwZrz2ckEKd9gqn9suNND8sNbLpjQ842H6EvbFv",
  "key7": "3LE8b2rx5WLK6gE17P6mbBtcp4YobkFwk5XJj737jBs3pEQ7wmJofEbqetxZYhh96ttkWA7ttydfWrvcL7fLUSoi",
  "key8": "2BsqtSDXgFvfh1SrsqrMxyyetKJG53kWdqe4ny3YyR2su2Ld1FiujRH8fiTez3GeuCptJZc7q6WGeuTRGkW1oALU",
  "key9": "3xLNgWni8jmhZEjoMYBr25xdpfoA4sCUvAqSoi8PeFfiT8d3cM6r99rLpZDv5Z9TEK5CV2TSPLMjyzCSDkJvV2Ra",
  "key10": "2wZQShRrmkQecEWigoPpSKqLcCNYtNtpWCu9rkN6Rnwae5hsbMRaYsRb7e1zZ4eS59MpcaXvFqGP4f1XEMPc9SRL",
  "key11": "3i1C1Ncgdi1BMzqbyeZYQDb8adHWWjDuzXT6keaexE2m6RW5tXTUFJV6ZWmzQkuskVXc49ni3ZjC98J8Xo7zCRNJ",
  "key12": "5er42TXmQjMWvAkxQDCFT2vh4zCxRcb1cMA7kSvbC2JMvUNyrVX9uPTYJfxpitFhXVCcdgxmY6Epogt1kXsvXHbA",
  "key13": "4LJ8L3BPgqhLMfQ5R1UR7LrphZyDrSEq4YuX62WWcb8xPQuQg6tncpUyHN52vZEm4vWdNTFPyTXhNoqCXFDvYsWJ",
  "key14": "2ZbMfV57QweHyWBiDMJAmwv7u61PWLd3zeCyNywkinMGDiBBT5bMe18J7MJ5cc9C6khQrFXNsKvCYW9BQhpBJ7nB",
  "key15": "46UMnkW5XYABn99tFpfSn9CDwaUmH37geHyQ6CW2UhyqbGZ2PgoXggQgp9tuMYrY29Sr54WWF3HS96WF4YYuCg2d",
  "key16": "5T3y9iyHvzuhsAQgDynVmmTN8P81m6htDEKH5UaR6L7yvy6CUXBThAuZvCyqKf17PJKZ35QrWUoMbU3SStNkt1bh",
  "key17": "YU9fBheMnsyUX6H5Ajnn5texGjdocvakTGg1RtqsH2kcxP1KJreFcbqyXrdP3YPQbPrk2wUboFPc3dyJUfDjQPa",
  "key18": "LM26bPABxdh3bDCaACgYocPVnAgzFQ1m13WNK3MH9NdgWoGPGJkgN2bpwC8Sda4Tac5ejq1NH3DS4yuAH4PDd27",
  "key19": "JYx9tn5jVVpiTBGNQ9sArBgDW6XcvXMZ6yfJgG9GWTWk2cqqpCETvspeK62CGXTUKnLp56rxJoJ1KjBEMCQdSdC",
  "key20": "52ZRF6qNXPZefHeH7Wi5Rtm9aivnECEaPPca4xgfRGBLtQAC8SGvRakmjhxBKbJgDZen8adwJWrEz2yXp7kdH4p1",
  "key21": "4XTTuwoAazJ2F4Ey4KC2QAWkPrgGrHVkaW2eGGvXu6cFYWBUo43SHXoXadEhcVisCA3pCqqv8Dyrxc1ngTnanb2H",
  "key22": "qJFUjFM6yhMYJgL5e9PW4gTK4iYSim32DN4PEUNkvEdd3QWoWDyBaACNva7NAoA4EicDJe8Sn3KsQFhcqSeGwiu",
  "key23": "5ZBcpwUAkzCBHhMBm7jayXXPBiLJKwvnmVuf54eUnkXpJp3AssWuKWpxQQku2ANoWBhaWDcUmpZ9jtbvTBsjH44S",
  "key24": "4zJjN45bqvCAwbEqTV4AarsXNoKrRYigXGaNsSCp4J9ePk8C6sFUGMcto9Xq4R8QDUk27HzBhPvHo2HSC4z5JxRE",
  "key25": "43q3u6jbf7ukXzCFP78aoyfXS7HxfzHBVXCiuKSYDgZZ1pscK3R9WqegRpSBAbsDfasExqPKbWjueqHq48Qvm3xq",
  "key26": "WC9qrsyx2YptJ3k3hUTB6mU8tXcemdg1EN3U5F3Y8VQzNGhskZCuxV92WVfUJnrwGuVYo91xACyxuQEQEaH6tjH",
  "key27": "2pZu2wDajmpw6ud8aJXfic9wBSKUewuHywS7QYP92uNawxxVKpPp13uZhvye4S3V8D1tkvTowNVVKLN92q8rC7J4",
  "key28": "37iqFVs1eiB6YH8YALxvCPLzVhf6YC8LTeXGNQomXLvPBJRJodLitNLj3Xo3Yo1qLXPCCPEo5fjLdbwBCWb1kBGs",
  "key29": "5t8RyH2V6Ejqvv7cEk1GzV2tu7wUnJfVnRv7HT5v5vma7AsWHZFmTqmqs18LdffARYkiuJkTmAFURV9jDarv6JWH",
  "key30": "62QqcVArxAi6WwcER7PhMMXhzP12w1gUYBDyYL9hX8hSP14Ps31mRKBERoFaLAy4mZRxHL7W3LLd6ufE4je343r4",
  "key31": "5br56ht2XhVpeG33bWXcsCcrSsjfUYBZAMJjrzaCtzWpLo195AnMhN5NuxpJjjKsZHaTsGocANUZMp36vSki5vfD",
  "key32": "2gqhauVueLa4MFkGJVHakYNHQQAuLVA1y2ojVXpCsf87tXe9V3fy4u8a1dC8sog7xYD2zQYumidAahe342Mue4eH",
  "key33": "2beotehvibrX8hYRvZmFSKC9KD7q4yoLbM2t5Maj8gZfovPXM15NfBb2yc9soNt6S13CuufJ5EwapVWt6egAu533",
  "key34": "2e4hsMTTGuwNytymdyta3HGxcVJRwohiAgqywg38xM3jn4KKFQh7g8qX2d5VQQj85otVKVu1VexS1gG3UxvsxqVH",
  "key35": "2NcvmV9VCjKUX4qtKrzs5Z2mCSQEXAdfe43LoWQNfLNELb82TB81wDTcHrrmtxmxC1non9Nj5XkJYmfjKFpBAxhs",
  "key36": "fhBQKAvE5MgyujX7cMT34Zq6jUGqB2pXt1w74UCdB7xN6QQTGfU8rfKpv6sFVoiDph8xxPVnm9nnw64xKp1dV2B",
  "key37": "2dg7tRuiVSgztMr5ibxQopHiJkEpTV1FxN2c1LEtTriZ2fCntGdnQdEMJpu9XxvbVnLLN3QCrsQzmgjJ81tugiTP",
  "key38": "4xP2BgJBfb2wkTJm3Cm8gkws9zhS9F8qDkqkkgpaLWXNzgUqwUwRnFW1bCmds3NrttMfgt1ckXyepEUmhXUUw8sU",
  "key39": "4irgiyrZrkyPS1K1wbJiqEcrcy4snqGZ3XaiBAmSMV48UqLS8bDAgNYajm9rqWUX7Hg8nW66czYgipEem3utdSQo",
  "key40": "NfnyvSnDqYBrD6sLM6K23BacSy7NLvkFRGUAzkY53F6mzAs3LfEtsZs8GnRvzC93BrqsBywN5CpLwq9F1u3Rih4",
  "key41": "4RWJ9dKCFmzSokLWwhL5q9BW6aL6kubAEt5DhbRRaesKEzdFyTmSQcqpCJLeAsVrm6WLNjZFVugywKsmaw4EzD4L"
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
