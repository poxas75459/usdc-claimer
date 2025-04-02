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
    "4YQpow24BEGqkfQMrgxT5B4SmMtJnUjQQ4MtDejfyEP8hXdb4kBcxdgyZmSsjbTHRtHXb8pV9TMnz9eur1626shA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DoAVQC3Nd5EBopfSvZT5uPHQLwC1R2dcnVLbcEErPH9PVmRLuSnw6hc5JwTUcEew7ZDknCCNApkdaJb29Lpcgcg",
  "key1": "4mHwKd1vGDc2D4uSZ4eKNeXqoKuqfcKY9sYGhVuVdkX5ZSHbPooGoVt5D7hYu16LXXvAuueX498ihr5AUjxbpBYP",
  "key2": "5c8D4dCysLQ7g6a1XJcBsNpiCda5DduvPgnNsHNFjMpxzH4JCaaj1EFF6eAsiEW43NXVNJbgWwnrxFmfJTo2YMFD",
  "key3": "4vqK9zdKKBZtdvY2SL9mr9XNWGYip53vj24i7hQZcAP5HwTJbZdgxnWAeY6MFbnAbUhGoR9G7mRbgaeALsmZxNCC",
  "key4": "5HHwaUhbA4qJWcYgxNu57QE4xGgu87gBsUaGSzeT4kcgcRDQxq2sa6ZCb7LhR7fzryLcoB9mDHD8zt2DGS4GuKtN",
  "key5": "SePSMmd1kL6s13KrPL5gfLdmn6aXo6qY5MUU3xcQ58usr9Z6GyY8zVA4ECzJnGhdAJwCJGZPNQDaNS8ds7kk2Sq",
  "key6": "5Xik3gqGMY8FuU5U5Se56vvgt2PU2mh9cG63oR4wArnydxLV7ctjgk4aEMj1kVVtzcsUYrqYB36Ej81WWdZuARUy",
  "key7": "2dvpesei8REJBNDTjA49oKbL9prWSmG5LwPMT83h1gpjDrWVAkqP8KSrPwYiKnABXkuFhQ9fXbRWFDskVuZ3gS2V",
  "key8": "65ctxvzJg5vrRaNBy56jWuRWzxb54ucgm6myeCX3cvBZU4ppdNCHYW1UVST7dUrRMbjzarHzFrkdbcmPhgpS7yCv",
  "key9": "3bcQaQqwV3xpYm9qf5NUSborEi1RdgzMwJ6dSpWCVUkmPPsTNaUWihouRQQ3nxhwTQWExJi7mvcpH1mrVoB4vghn",
  "key10": "3JUmB4dn8NCGLzK8nM4xd5RzJEgYbUkZKfpy1XLZaaChRFaWHaXekmYo3iCqurMMfYvSVfLJ2RLo6pUMdapHx8iT",
  "key11": "4uYhT8i5y2KPVosc2zoFz4umwAfL8FgdrQCpC81qUJvxWYoUXPp5hAxVFpAiRZ6n1V9cJX8wwDLdF3GMoxzFbEma",
  "key12": "4gQgDRGxwrHZD929HYQ26AkAe4D3c8wdXLRPkE7XA86PQXTACxciHWjXTAub8QGZM4kHsND7jLGjiZSmQUsJbYtC",
  "key13": "3PqBQ7NAjd5gUwjKAakVUDmspMD4RPxeXoS9dvV8pKFib8APj5Ch3QoDqfe66qzaM88VpvcBYa9tP7xoKeXfaNKc",
  "key14": "2i5RtjxPAre8Wr97xhe8d1jQJFfM6zyQHZgD9UABb7k7hCbMikPab7BdZHzimU2wyE5CLaebPt3k1w5k7eZtzxRA",
  "key15": "5ToCpWLD2TjDgWHEJWGzC4QavLbd4RgKu4JLeKB7LxUV6BQRYkTd1Scft4FkwvdzXyJYnGdyHvsvM5oG3WkiZmmg",
  "key16": "3ACjHwq9Njek682dKURsniwoDon6Jrd3Fktrp3cAwa3XnR8FViFqVEwJ2EZNhF9qgJXZ4AX52EAk5Uu5Kt9LUgX4",
  "key17": "3J6hVFQsYR4v2Mhyzzw56DoZwjkvE8onvg1uryNgzikptSVa5tFhiNMU4dDVcCjEvxsKTNdSdLz1UF9n4SjKnjUt",
  "key18": "3X9CRKbsGbPeirFf6JUgSBL91EPiBbeMv2AsrAnQZXUd1WKT2QAu9MX8RSVgTAWPJ9U1PH2JQjFTk18H329JZes",
  "key19": "4LBv8qCpaPFvMNLjTHF5Fgm4eAKS1eTWgP66PrfiASPFPTJqRmbUZ8oHnKb5H4L1W5XWrhTDxVsKbLJjNj4C1Bgy",
  "key20": "3P9Hwa9wj2sq9KXbYTRs8yqjPeTUMDXbFzGJrLvejfJGje1RdDE5hXp5zK8uCxEMrgRSPB6HQgbmufEmAgvfPHV2",
  "key21": "4EY1EHPX2yWUP2uLjuaMTgHMbFuV368kAk4qiwonM8GG6tLYFrA8a3MK6bM6BgwASps2AaHMCNTibhdm8cNaAKoS",
  "key22": "a7C1Pid8NrHxMab7z7Kqh8ucNzZRaNyLmCybVabarqFE5pLwEJPMN79vQKLnrm7CyfnpLBjo9GDQRqEqvLGvXxS",
  "key23": "3BaRJXjnC8WenFE7nSjnG2FGY72KyX7FVqY8emiNECCDsys1zVZGiADKMYvqRkmFSerAX717VSaYDXo9DkeDPFmh",
  "key24": "sm1f9yVCrfELTFSWMfMoqNyAPEyKUismZvr4sH8ABeRoLnprer5WXfQTuGrmEf5JfLzpVHvpdQJYtCbNiVkBqv7",
  "key25": "53TPUquk8VdUX3ssnGrvPw8ELAnbMrxMFm8QiPJYpMGuwnMVit5euqA9KqodR2Dd1kDNyMLGKw7kZVPjc9DEVsb2",
  "key26": "2GWVJ1WiuAYDVTpagJbcJsSCP9cBbJQZZvVSmz3GMCDPfrbxSYuqgdV3gLF3ZR1oyJyxRnYCgzZxdJcMQPTVofAJ",
  "key27": "thsz4y5zVKK5gKdv3tfYJTTCZ9DjKjjSCbHytkk5RQt281zFBtMNZH9o4JFufA33XUTmyAuxqvk8guX3zctwN3t",
  "key28": "5iito2kzbRph5Jt35GKQup9N3AYWWF1SbAoPL4ybrMFEDudEimkuLTeY5tnhn9qatM71AB3RTw8PbMRBfcrC74iQ",
  "key29": "4Gran2wmssgWdodVRhMQKkbET1FGwqm12bf28rfnEKnXQq14RB2EqHWSg5shrbqWM3kYLJCeMs1892g8A9C2a8pc",
  "key30": "3kDc98WcApAYhBaH5ijEVgdABAnRcmwTR1qfGG5y1oV1EdFYuiCdCmciBEG5UFy5nGJrAe7geAEHVbRDgUGUhr2H",
  "key31": "c1RzvPHPu8a7rBTrHxc6hPXnC8A4CHQQpm5kR6poXZFatncFEDHJbRTFG1uVvmbBMgVKhzXnAjdxGausFmZ12aM"
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
