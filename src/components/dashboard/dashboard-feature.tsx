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
    "5fuNaUybGqcA447XgmiasRH2eX5zKxoD3mQHEen73RcFPQ5AT67MuWkQayPNX2kZpub79bbwAWymTZxAG3YV95ts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vauvehQRnMV3Z4nky9ADCSp4Rwni8EnZwMdTDAp8dBobaFTeikwPnyxLgSHB7yZS583UzHshgTiiKf31AksbzC6",
  "key1": "HV1FKiT7bidMoZUF3Ghp2uHU4VRBegVAxyoGnpDXo35puY9TzZU8w4u7fGHXRZUm1bTedVJUEqFBt3zosPN8fRM",
  "key2": "2dbmW6ydCDUBinTDjsegZ26QBZE1F8hFScm8CP9J2kBwo8yPEt5rT9xHACwFu1DM59mhdeEZ2cnieDfJ28DerduY",
  "key3": "LXyp4e9hgVzMk8VPs39n6dd2zjyqxBb9mW8E9Wkyrq7fLPBpR6HPnyxjx1vKdjx4P1z4RpwLbJv8i3fF66XiWDG",
  "key4": "2oYXioqraGqS3EJu5LySPz3KEQvAQZXJA8jcjJqaapNyASfVmXNz8rHcni9UZ5RcZVd9GXENBYRDkNJMS8QPoU5S",
  "key5": "3Bg7MPrJnBNEr4DoFZWXXSSrDqQkseoS3Fa4aNaVMPxXoKVTcc1KXLFuVVrTFFk9D1h63Y9x8vh8NzDdQ8HcAYAe",
  "key6": "3r8Hs1Ud3az5bLkmDefj27SgShegtsKkDhSETdEtmSeUbMyn9FeGn5SKiBWy3adSMJd1MpjbuZmYdCmyjGiiF4GT",
  "key7": "5T9Tu5vwMKqBCJQGhLsfcJePUkyJr2GiYpHXcktdYMwij5EKM8mz7sn2rL8PCiPgonZgx2kgo1GYh3XAnw1EC5CN",
  "key8": "4ZoHMu1QVoDF6zSApjKhUhmhyGru1JELHDMhxEw2hcueysVbtgtFzM451e177jL4E43DVRyd3qC5jry7x213P3KR",
  "key9": "2bjG9dxWUrUhJNtQBSW148dY8kJa9AbTSm62r1Rjrxd45qFsfJuYa64ZM39PnQQeRE6ikfuXMFPsiuRq6U17YxK4",
  "key10": "3EngR4stYw83Dp51TZvG2u438jUBXGjvk4qND4E2UzGYbQa4EHedErk8GZNJLrmUBZmfvHxWYW8iVqLuyWDwnHsR",
  "key11": "3357yehUrYHt57oJhw9ZEFJT57LLi7QGPyjaNMbiarxcv4QSUrgcrjzsXiw5eRbJNdyfBUyq2x2AD4n14vJPVvEt",
  "key12": "4BKsDMZfb75yxHXTsziPq4S5qQZBsuDBEoXEqBVyShFUNuK926m8wVaZs14ZJ22zFEw5FiTwVSWKC3jYkUbhezaw",
  "key13": "3sUcMVQPDqTtLy3EE37yg1WziPuhGD8AvMUn8WK2ZEhzVtnv7p7S4tNdjFfCkurhUumLqamPVaToinxCPD6bmsxk",
  "key14": "4PsaeqrtA46FZY4LMkGJS3Sw2nDvSr9em8KPctVxXHwV5aYZsQWavrVB5xxLfnEr8sSvrfFb2zdVnSD1AWwEyDJw",
  "key15": "FCPjMie69Rd5RSzdSi5WWpbEuJ1iLf2LQpmBdaM6ksm4f6qa1AkaxdSoNbS9E32TCUHkpkRc6L3dyMSF8XjVdnu",
  "key16": "5dhJCzRDq7sXkUXYcbaqaQAuc6TxVTfDbYd4hDc1rRCWRAAgcHCERcQ2VVxMyKEUt3C97LLDy4YPAwK5THoqSTq",
  "key17": "127ESCnT1X28rNYUZ64tXhhB6vZxTiymBX73Cda6oPLwTJjSA8Ss5N4SpcXxd3r6n5G67Y4uBi2Jq6bQeGAEqM2x",
  "key18": "4KwUBrvkST5RXprkr56Ad7shoPZFsCRyavm9HLNLiz2zCAUXiheiJxJwzaVybi7Vn3AHizeMBN6u29ftbFhxALgV",
  "key19": "4tqVaoyoEsopjhds71DLT7BBzdBcV44mmvkFWF8yQrWBMASiSJUk5Sb5wcJUrf7AcjeUL2CFMfCUDEjPpekrBeHT",
  "key20": "5Rm4E17ca1iP6fL9RephWe6uBSBEQmMxYC4F74W9Awi3Ji9sXWiTPBXE7kc3mx9GSygWPWpmjPk3Vw4RNpUNFJGP",
  "key21": "52U4tQ6CF4YDkdT8JtwA1ywBFiYpy7NvQxvqeZGHB4zGPmB7UrJTLsiqz1x5L9ksSj5LNQK5qNRuy6EdhuqtwBhc",
  "key22": "BBqPv8YfXZnxH86BvzGNhdGNJHnnkbmSNhBu4jc5B83qZLRvJnQfepB11zyrVxYFjd8p6uRM5U1CXbYJnnwVzad",
  "key23": "tCt5MyVjNL3u2AUcdXDAyXAnKW4uzNXxPNhczkUX4YxmiicdyeSmFHSztYAxAzB6Zf3tSEEJkbCNrS6YSdmxFBW",
  "key24": "2hgon8MZ3BqyRjRgb9PKgXX9gtBguiE9CEdAUNZ7tdAJ5hkyztmhPihpcbERCrKT6wkyTybyaDky6si4Z5yifTE6",
  "key25": "4W4KigZ14YdyVcsfhHJuz1T6gv4nrjYNCsDV6TQiQWvk3NV81r8M5VQaxHsaCLTDZ88NdhnwbWFCNkeK2hx3RQVG",
  "key26": "4gXDemQiMaaKCLE6qumUbYLt5onH1D1otoLXnZQXFry5yeAPzgNed5B1Jp2wWNkrGNz59rVsw8pJted5dfY5MtQg"
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
