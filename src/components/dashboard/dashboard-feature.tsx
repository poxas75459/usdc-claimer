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
    "5u6c8qVS5JnnEi2xmd3G3xRqMecMrEYzhD4vJbomgMkykKzw8ki2J2n1vyGMtpSvgWrL2ukaWHe4CpZGEZvtvvas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LM7bAxvcduu7BR9WKh4ahVGDssiRnxiqrK9XvaXtD5UBnT767VCX5XRdWN6SY47E57RJ7VpJkv1Hkpcm5wDfM8f",
  "key1": "canpDSELmjH6z1kofVpXHEyDme8jsmowRq5aBYdBzjd8jnq5eygVLfKPEW7ys6ZpFasSBmpubiur6BX7UT8hF8m",
  "key2": "3N8Dr4k6qLdrcLxbpfTsXMda93uvv7myRCniFuWr1ZgtsbssuZVNNgtE91fAbjz49Hpvnr5nCNQ6kha73QQ4xGKL",
  "key3": "7UCfTPeS4pcexsRUtrGhrHsKEFzxfLo9NurYViSKQ42Wb3RFQKhBHdCpkjiGju28GMn8GMjjKH6kyiY6a7WnbFc",
  "key4": "4CA8uKQv4zvf96j8YSSVCTrPpAQFTmXcYFAFDgNiM7WkPxXJvWGgA3B9oK6BNaazxTkXx3Mx6FYhqxsx4x3tFwMg",
  "key5": "2orwH6SZXKf7YFpdLNAMhhvQkw51foGJcStgCGLNt9ggeBjg5sJ2yuoHaxsagPr1Lmm4WuCnGcXTZXuHr84MPEXd",
  "key6": "gBa6LSzVsP8t71SXoahdUXY44nXgb4am1LH7fdk973TUxx3viWR34xtH1PsJVQHFA1VRxGSgPWsNLNrnJPLzYwv",
  "key7": "3xEasRbfhovHdGQEuK14om17rBXbWzxbaTaqE2i4qr5GnVtbkC2bm9hStZ6mg9Zde3nt2vnRttaKbCbXtccJ66yH",
  "key8": "rkGjkjSor8tUmdZv55YZ4X3yK2htMTe3UsiV166PxztgCLwUodmXGd6cQmMTKGetEZcXJRvYCvf82bPRtVMwsuR",
  "key9": "4HiNUthZKrbJL1a1ZgcTUSLsVxSsBaVWtp8tmFvWFV6jPPWSKpQoCp1gQ5YzsBUhhyboJAP6AeQTv1FGXExbPUQf",
  "key10": "5h3XXW33Ak5oUpKc5P5HiSpRarFjgDzGhTNhWpXeJnVU9YrrkJj2SjWyYHcQMqxNf4iY6rQ1XXE491BD9qGADLRo",
  "key11": "3Qh6A88jocfRrvSo57soZrRNAJJ3r3Pt5zb1rzxczm7qAk7fxWHDx3fS1P4Mp7b49vFCdtNXE15413VrZGSYUjPc",
  "key12": "45h7dMWjKKVCDB9eiLwaf9J1Mwrch66UbF64Ws92KLdW7p5L4MW8CxdtJtXDW75A9qmaYJ7w2ES6eMVGFoZfSZKL",
  "key13": "jbsx1EjBpW6uu5aFW3Z6tNX6pBFyq1QyLNTAgnAeF4mZzro8b6Ry6yWEreK1yTXtpfLYNSaGcJZ6Hs4KV74ETGb",
  "key14": "4cF1oA4g2xpY6b5tG35XQ3mEV2eWVoCFxLmvv8zE6rUvGm6GwNDHUhpX1PhNyQFaaLYwRfssjGUyDCYjwoM9fwKr",
  "key15": "4aRAD1BbJCBhwv2BzrHtFqq4te26bWy1MpGR3wzXTm5rqGdeYeQzXZeqZyUKhpnvfTyMM31WGV4oeDRM7nXeeDm3",
  "key16": "5LKa3rNyKva7NwAWS1qCN5CKB9YYwjx6WZhTv9xmYiDc6canQfDPyr6kWK2nnEs1BpL2qN5xdYJzzXHKJwpGQ2wz",
  "key17": "3x4391p34E6qxreAZM6vrM7QZLLbiQzAztXaSy9w9FQLCggcK7ndsXLNrn4eRrwpkDqeLkhu3oLCVkuoyCwU1MEb",
  "key18": "GqW5owfHwhZwH6qFMwDvVy3fWGwBbk7T1zCU5Y5GCDzEHAtEMpCirss4WTHCxGTU1o54191kLUgpFvdGY1HReYg",
  "key19": "3Zs2ZMvM3ZrzMD4QDfXSvoWKJbYATzVW7JeGgEX7RSFww2fmJJGJdRduPem43it7MQgQoUbCorcrP82SpL5Y9K7",
  "key20": "4Jbi7DKaSgFUXJUhovd6gE3kzFBA1iwwq9HHT3mrU6tTjHJD27LfMkp3Btknosx9TLfFQEcE52H6rDuU4XUWz6zo",
  "key21": "32q5MsaviTK8g4N2iLZep2xwCH4HtCCekNTZ6ci4KFxp2EqMPFijKtPek6M1t7ZjGC66G4WiL692KX9adASNfVwW",
  "key22": "3u2pJSvn7XSbZ3wUqc5soSU15ysmjEMLXsVLaB2kMhUMAuQKe3pKQ3Xt97Bqwaza2k8aLokNL9w9j8XmNrgReZaA",
  "key23": "3caHAv81HR7jYTbMXRTpYJDYqmtqCBkd6xuRqNDDXDXxdrXYWd4REz7E7KswoPAGWLRNu1QcxLL1r17xnDs1f3Lg",
  "key24": "4prPA57MCnXaWNvBUBtUymcbtUMuaCPTVFpvYcYBW4E5WNEWnhEBq8btMBdcAqggrTVQKQJtNN9sgr1YrAmzU6g2",
  "key25": "2X6Ar6dg9LktPzJyiMfLrVwo6BPX8BQV5i3YTDMrgfsqpstxg13j9XpaCYoZPzEJ1cc16PMhrpTTtCuUTPbKXspq",
  "key26": "2dvFUR3NKB1MS3UijPXxmdewpDLzqQmZE4zWD2oRs77xydLwmorxiDe3jV4QxSJqrKYRTTWFUFMD9RkwrkVxTKFJ",
  "key27": "2bD3NFta5AymibDxWriac5RtNPJhM4ScF9172hyhv95Cqs7dWi7cobuLqSERd2SSTem6LQSJKo5eFUz2jWkyhXFm",
  "key28": "5yU17EZbUc34rjtD67NTFPcGbmAioyggKDceNJSQG1tApr4rqD6HuYEPsSEqnJoB1GBjwdXA9CDZ69iKaj9WbyRv",
  "key29": "3jdYRr5U3iyeMFzB3t9T6BDzE48WAss6fCQPaD6bsEKxYcSEkW3j9ZhutbBcqHzTpEYgPcTCFmkgk53NPdp7FCQP",
  "key30": "3hyejSRPa2USu5BVyRBaRZexdC9q3bNb2ff4yG2T48KoKMWXFC3opNz3TuujDGo1pdYsfSazDn3zdeahNieswo8f",
  "key31": "2Z3ww2GGFykrQ7BeCk3ZNR41sU1Tu9U6xJZhEUk4TJ1QfCXUwouERV8Z2masAtUXrp174MmeaDHCVY99imwJAo7e",
  "key32": "4Wzm7Bwm2NDJxxdb8pnmsdggmuPGHrdNo19tNgCuQzdAptWcXj6rv5iqSj3qZXDpxDxoAYmcVSVgP9KL5dWtL3cE",
  "key33": "5qMVueN1z7S9vZWsvGKiGSoKTqMGxwyskj3654TunUUsXR1zpXMKxzFycjXBVy1QV2NgS5gsm32s1EnyzLeGufrx",
  "key34": "qQG2gdpKtyHP8oSJN2Spp9NNcTJneFjrDY8A2s2ugNnxeufJDLFGeZSP2YEofe1k8oWKXJG1EjdXVPjgydWsSxU",
  "key35": "5uTP2MLnKReJ3teB3tQH9V2jky3g8h9tnGg3nt1yF6eH2RLaX5zsvyKaTQHgMmyWG2D3jFiUUL6saPx53s75wYMW",
  "key36": "5qs5JuT9HF9zAMJKCpv5mUJY98gsayARobWkg8XDVEUMNM3sBBoCbgD1Rsmx5namPjvEAf81ZRGHVJP7R86AVEDy",
  "key37": "5EMqvTAngnAMS11jeceWk3ncWg42MrRzJQsRwsgpvM9KNXPETYMaoSC29ubEEt4kJmj3fwkd6mG2mKiod3rA4d8U",
  "key38": "5NJ3WTmy1v9cp4gJ3gPp9eSG8x7Zry7xSA5cRBKReUj1KYroSrhMxDjxnJJrj2pRa8T5gsaWC4VuJmnfEW2Mp21e",
  "key39": "sxAfEnYihAn2wV7k6aRZJQ6kWaUJMw1WNprb56ov7uirccd4jkrVGrbcjK8Q97rwxwwK9EKqH7Psat8gxNA7sw4",
  "key40": "126JNFiwR5HzwhDZ1SUYdNJq5VW2GxBkB4ausnXMekxicsTbw7F1mSeZrAr5R2BMkWoucoB2LiS33n2A279fYChV",
  "key41": "Zo5MAm7Gfr2rTFBwgmyLNZzPqq2D8np4udhjuyxhGsSAJPo1NMSumPZis1gh4PmEe3w9hg6Zi64HCA8E6u8CDg7"
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
