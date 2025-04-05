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
    "2Le1gpokNSHM9hGAibgG1koK3nv2DWctXmNNangPbgBQ3wTa8oT5yUWEavFdzUUCbR46ZgedPja4rj6Bgk2ZmfeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VY9U1pifgjepa1xoxRTu1WD8m4aJm15dcSP7rAjKiDkdPMmvviLcwa3ZjVNtNFUNXUTmDrXL5fxcPAghN5QmRhr",
  "key1": "2syDmMYmzaNYgqSVBGJ2Kqro1cppyZQnwtXwW5Zne4HvDfCNkk8BSiXCxiAjBwYWWoxsj7t82ADiMFifuxz2u4Gw",
  "key2": "oEtj9xcXas2M2F1VCTX7SA4w3K1ACaPZxj9paq2XCwSeb3A5fQm12cVCJrqzqzqiRwpBXdVoye4fTzQifRdUDA5",
  "key3": "3Nqr79xWZs3WRbvQcpYpwbRnM8xhAzeKD2kpmbMnTieWHqW4Ue2EHkwVxku5VQbuK3Cf8zeo2G9FiRqnsXx8NcSo",
  "key4": "4BG1i4hhLquyPpraFooUXYLa6V9EnmietDpdmsTUfc1s4xV4s2qk3pAiFrnj7D22Fp5JiCLB1V5NMECbZGKdAkHV",
  "key5": "5xg3RKMNUqrVD7zhVHf3wSqKUiQzBBDrxCmSMpv8cAhK2QMYNWWZ9DDdDucQiHh1UYSEDPGjo72dH5HFzemSL2y",
  "key6": "5t1VD2pPSMBCQVfaoPJ2tfMJFtcP1zRBpP6CercsEMcYay9549ySszYigRMUobZ6oJiFsww53mP6LmYGMnT6NUsJ",
  "key7": "rsDZFCh1VQyQXYy3JGaArd7srVUCzVH5REJkXuzJ5J1xpTP2Zz8TdJzZVrvbvnCaUqhXtgSrckDKDk5ef1oEhm9",
  "key8": "5NFkB627ehpZHE2fyQxXbpKAiLgxMS5tToBRJZ7SiKmTHi6UusKxwJna5kdeSsYaDwofuzufrqWscv4WMt72eMfR",
  "key9": "TncZYPwiFcqqLj87YWvss6mP1cByiY49pwmEFWMjZJVbM57Tby81wQELmTqvqy8ZQKDnr78vtL5yLuoigSqS88t",
  "key10": "2Dx1BUcCf1SUTvs5TDNZttvEkRezs7PSs1jKrkUFcFuAbQVekjM6VHiBczwZsayJ1mu5WnmUjE8F6WGYhi9sbb3s",
  "key11": "2NGVTaiEZNoLf29kjHc49f3fxJz6Uignnn9WxdBvqB24r2U1a1hiqwraMTXEfqVwNsfvZ4bp8hQY3mVDCJuK7ZuP",
  "key12": "3wb57frByfnqzJH5kvoctjEaZ8dwQnsh4Cxv48NMXPXPwX68GqrXEABqVPj6RYejvLQN4meAPD67TErzo7RmrQik",
  "key13": "4RSQGDiKJpnGPTzvCNKVGyRQcqC7Jp5J9oczd8oWiyqXpcmvVEw54yCqnneW1pwcZGey85vduHkR7euyzLmHiw8h",
  "key14": "5RRbnHLMY2hXCJQqBhSAB2niTHfGesfpTY4e8RJzJd7otJExJMjUm2j4HVXBZvyKQXWZmBG8hKkLDe5BRk2RLnCk",
  "key15": "3sMweocrLUpWWWHcGwcZUfDR1Ctsm1vpAdFbkGS6JzDHVBo14kCBo1AnYxhrjeS2mvh4oqbxF1oSDrTLStewMu27",
  "key16": "4qCYMaaGY58o54hqKchSz2xxTzCKSCjZMhV8fzsQioSctBqtVetDhScieQKwBhgHL9tabXakRjitVUm4FXUBCPoX",
  "key17": "4Ha8JBRuv2E8dJCxMqzXAptGXcq6V5dVwovMDFr15CMrsif9Bz4wAqgSjT9jtjKqDMHxYdngUBY8nsbCDnS78P4X",
  "key18": "2N9gVqwaGsTVc7KaMfmmESH7YLywQ1pVCbifrdVFcd94WxuATThQHA2kMCmmKkLPGepQTe8ZmDfixSkWXkk4h8rG",
  "key19": "1J9oxRbddRA2sNjjxg9rCRyAbL7EKsTixD54HVEbhLc4R4uXbFXq8WjRfJUinesoTch44JcDRU8pzCjqNFLs8j3",
  "key20": "8ApgJj6EAGa8DnQ9jK8Hin2D6en8Ko9iY2GnjKWm1ZjupUegHJPMJj4SzVyEK5pL2bhRdRyg7kQADSZLhWGBBcQ",
  "key21": "5qxXL7Q4YDyzfHhWrNmAyYTKTbU8hGBTzAf4RaLZrDK2mp3nidykq8MYyRKEQ3dyWjg7Mr5TNP5AVaTRcPnCPCsS",
  "key22": "4sYTDDEWPRiZf6khitiZpdvCzPC81cjZpEfPh4MMU7KSxjTLSgEP7bnL4M2BV8j7ezmAH55UiQZHtzADsiAbMwu6",
  "key23": "2sKXuSw91FxLjeDz3cnw1KR4wBDrDvSyQ1i7oFLJdtxfMQco11FRAHjRKf2g94ZcG1Fb6uxwokXjt8vNkYtnnfAq",
  "key24": "4UkF3SrXRXTV8qwj3vrov8dCdts3b9RL3rKBq6d7kEo5666EaUffX3mUPpGz97wvUPhqfWa9We8XTguSeAz5rYWp",
  "key25": "4XsHwatDir4LRJKEdCRQ2tbtGEFZ5qoos2yokxQRuNXUnAgW6BRKf4jYgZezpPy3RnT3jLAK1cKfW1nhYcVvkcp2",
  "key26": "29zbv6tjFY3rUEFXrABETBfwrYyNxeqLHn9B1C66KXbgZGxeoZ8TSDvpqwYyK6LcgATJpjWWwBemsSZQHcBxBMqD",
  "key27": "5hKGvgyANPE1Fq3yU3rCH9biTWzDpcTZj4o979e8xpBXMFwxSr7Mni5vUFm9gCrLe8uwUrTPaXuNVZPkWFQqMqs2",
  "key28": "AQfpJ9Vph1QHYQY4AzFtmA8Kpu5BMQ85fpQ9Xa5FcE47Y2j4ZGW638x11EgEez1pDh5gcRVWLDgapCPuyQ8cw38",
  "key29": "3Jia76a5c1dXnTLq3Ho1mREQX8Fs8e3M2SoJN5XZAdgwfMHcNUZid65XKjm356okzr8sY2C39HyTvHA1qUsgBh8D",
  "key30": "xF8cNKdyaBbqU5KxMJEBTPrue1pgEB8GWKprQzUL3NU22PS6vjWRopTijjCBGYEjZzT5oz27wj41fKcLDtdcg8b",
  "key31": "492KFnmMXQsDnS7vjAFAxZxLKNSu9FoUd6fmfU18Fe2V86MoDhSdSECHP5WhiCZTdAPUknFHuserNx1i6aGky2fj",
  "key32": "4vrUnRSG55S1FNVoE6Jdi8gWnmrzHZtBDc5Sm2S4P2PX9RhAqqWB2rYtU5XTG8PHzWCcdE7gDwxhtyQeRWnxcghX",
  "key33": "3e2CHFwSbFn853xsUqESDyYw4C9hXqKEtNhmDa5wESKZ5u1iqf7V1yoybhLU8zkpWsemAdsxqbtZqWTyCgtp3cDd",
  "key34": "61wtXYFPWASE8Rf7C3gUNRhFqVQUuUWt6mq5XBsV6Yp6VFeadm8o6y5LqtVgVUUEPjW2e4xg9v4JgPSuSLpHd9cy",
  "key35": "3hz8nn4vdKDFu9mzsjiepCtBpmmywJTvNuK2XJDgwHC7C34VBsnddE9Xz1p3yyt1jzetwdRWWvYRpGBENnRdpFAK",
  "key36": "3AVdG7MncVh8zSKP2Th4eiAmdfK6d1xaK21Dg211BaKTZmsP4vFmsTxqYhwGrihxS8pCCQmyBSp4bqneYeTurE7W",
  "key37": "4ByCREML81rn9KoSqHevpP4y3whxJQ927ep54z8pza6PPq5xCrGgRfdNEhMqSj1ZcTZDv4F8jPXRjELpihjK9g5u",
  "key38": "58pGfQJdHMPpaTmRxk9arWkF2L4qw3RXKfG1XEgkeVzkkWt6vzTM1wEsAaq9XAfLWADghFT7jr8PYD3cKXFnrNAV",
  "key39": "67YH9vGRe8984YoZSB4PoBgKfqQBWBMchA1ms1xvq9Dy8bsH32LjdhoGUABaub7FrbTiJRMxnj4xx9niJCARxjLY",
  "key40": "3TsxEyjmK8N7Lo7g1KEmxWu8KvcUqmYUVK9zGuWieMvAs8P3ux4WZVaGBMo2wDxkhL98uicSWzYxSr2KKa7WRewh",
  "key41": "5z7jgYkXtNuL8ixH8LVJEq69YNZJragd3NxSYcLtG8p4sCvUpuYZqTQdAoHkXMt2P1nrn5VoRzm6tL3FBKQDfZP8"
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
