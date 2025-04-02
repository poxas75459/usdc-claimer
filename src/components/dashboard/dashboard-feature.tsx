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
    "3wpmhUY3LqYDe2BcEHK8woQdozXR8WfNxcr3UHNz7QNhmUaLfZpfHusyVhwSb8zsHG2Mqb7ymF9mVN3ZmUL6xypX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SsJLspSUv9AXKcABS64gz68Nnffrb3GxocD1swVgpW3mUayr3B8aQZrihJS7Yyxax4aAzxqYYgUYVvUkEEeYSjT",
  "key1": "yxVvTxDHztby1HNqFueA9GLue7YcEYE7J1MF5kaa6fMvg1MQ93VCjcfjDRitbEetj8xbkzEYpnQuk1qVrnsRj69",
  "key2": "J2j1Ka6vr1SQ1eFmrptino6KhAg5BwUmyx5aL8ug1w2JrKcQF46cZ1zfYxuS7WzyXkZD7KWBTq9HHD7uZCiUnHn",
  "key3": "5AMezUrdwumgPWLF1VFcY82tpLEHR2hEVaS77FvcunTfSMgFWP2fS9GBnT7r6DGvS5mzCs2UrxC6KoJKuwwysoAb",
  "key4": "3C6nMBuBYLxiVt6wQTWzbmPC8o6HmGSXBw9cPWUY3xNNMJ5upLXVurG4CnopSA4JMeiCJ7zaDQabMJYnr4ySDL7p",
  "key5": "3uu5Cur5sADbaWQATuZ6cZk7LELKaLuN6JgNWepVcxWP8BcGa9Kn7GvcDxeuiRYzE6HVZwR36HK5c5Y6xpxiWuT5",
  "key6": "gbw5GyiuBqPybwUqHFsHjNhhFGJXENZdzJ11TjYBdjzEcpLyhAbifvkfYf8DZrACMb9cgRnia7txpSzEapt1VzX",
  "key7": "33R9NRecWaWxogkY353w5T4poQ8Kb6GsQBhPT1kSLtpH4iBPFnfyjkHDyJuBZzeAiVLxfcqyArZG8K281qgqs8Rb",
  "key8": "H8uUmNFCf6GMcuTM1VtWHko9SxjBQ6k9b9J5vtmd5PFGNPLbjA6p7g7Ft4Es3VEk473p88gnJi9yWPSpgAGcecR",
  "key9": "4LTTrNXFa9TZZXMa2KJLRn8q4rRVpARsstwsTjyPQg8R2xb16n7aochCVBPqHfmjwoAtMbHiGYqFx6eHRZwRvpax",
  "key10": "41af7uijf7LnZoEg6ZPHDUr1yQ3p6AEAJoqLLvsPq2whNELKibpTYWtREyKt1KH5cmgMYnk9ZCTvCHgcf8LFTn67",
  "key11": "xVtG41HBS5SqxZ6WjQWTPM4uXTJS2MyL521jg74sRoRrUEsqySkDgqrvCguW4spvkyiWoZsyj91jFkycQt7bCHE",
  "key12": "2eKUjiQTUHeSNoDV2azQnT2TqDHX8tWnfcVa4AyPpKKL7GVtwymvYX81aSXdZmUWV3z9p7h7bZ4scxc6tGursKGa",
  "key13": "f4vCRvSxEqZDZbn9Ak2YJs98xFLDvypcVwVhZLb3kWAveyGa83gihHShtDK1UHrA9ncwqLEFMEjZznWdGC1bzSt",
  "key14": "5eY4BWLGByRVsGnZSM91f65is19MK9uvBTzoFqzpH7pYp1vUcAjxvzUQmFgjc6Ew3xNDgudbMg2nG7obhn2NusMc",
  "key15": "3AaAhysbXJEt466E1JFYMSPT3VpFmtmZZ8hBgRYkFYz3XVEnyKXgPqdnFDAWo9wJcgmSmxeE1a6yURCJ4JYXLo7A",
  "key16": "2K4JS8GJgbn7kDAot6z3EaiMAYdnubbzcoxDZ2ByC8MB7sKgsdy9EiJokqZvzNdHGggreqr2hsKBresb1otpgi1t",
  "key17": "65qQJL7KoRBptWpzBRPxUcFEYdZyXmWXNJmGyXiSxeHgZUxyV6Ey4aMkR82XRt4qh2uhGbtZgNEGk5iaTvkZAm3F",
  "key18": "ZxtjEPTNPhAuevPeaYPYjXqKoasCMj4aBSwMQLgPcvdowQYkpQ9iYy4BU34gXTrFeJWUByC3cEQNucktnpkYtsj",
  "key19": "NPEkZVpqNDh6pnxb8ueHCeDMrLK6TYJU2SN5fZRJuxi98xNedYqpJ7DkDv9zhfZNuJ33T16Fxt21dCFDd68d1Ug",
  "key20": "34R8taXv3DJupbh3RDEYKSuKBdjojuqrrTvvypx8woesosJvQ3J1niSubW2KeVVVR2ACPNgYv7CVu9TNVGHENN2Y",
  "key21": "5qoRpySoqKqWPLsmH2fJ8WcsrM5qrqqBGLXqhjXEkiFVF2SafnMc6GfgESCYMgo2F5vYoQJD78NC1Ck5R4CGS8W2",
  "key22": "4HNBotzNXqEkHvy8dgUJumdKZT9sQBbLN1sddGostJrbV64dYKAL62MdrMbR47qeWM9ZgrAUCeQG1WYSet8Luf7e",
  "key23": "Uwu3xbaN6K5jJeETDfdsgT9dnzkBntVGtaxBL6KzFfa8gH4AX5TqBje7aSr74JSJ12HACCvWRHHpQbpBxsaUrqK",
  "key24": "3QcyrNVxSFcf13WRct64yJ9MkFMGX7SA6HkeGPQFjKRab173a8ib7rkmP3KKb136bKPDSur7pV22vKcKKAqSeY5d",
  "key25": "3YyLjYc6oDpSrGPwp5SqHEzdGJWLPqL9FmW4nbh81zC2X1zwi1mZtc7jqo7DCAhd66wu74ZGLhDPdNXH4vsoWzez",
  "key26": "64tk7udsDVoWmEvkf5qeZZpX264WpmzPtfi8MzFsmqvSEcmYdy1eu8kpTnsZaPtkpRVNMDVLmmU7HoJTrk6s7rKn",
  "key27": "2ti4j3Qdy51pbC14b2cnw4G2kyD7JdPjyFU2SjMRNYrwGsK7spHba7xJEPYdS4Yst8FHios3YAkwsF1ePSS34MYh",
  "key28": "5iPGBFEsT8Q1hsPJNiktTHfiBTwK3ySRPDrdNmr7Xgsy5ZLwJanECED7YDVat4f7sMAMPCmGBZfNFui8EpK4uTzc",
  "key29": "25NGcErqx3vZRgxx8JspoGDaNGwvaRy4pNiFJxhVzjPkTa8bGUHwgvacdwjj4NsY8hRunMoFghUxYwJ4cKVLzxiW",
  "key30": "5piyRb6MK7f3jorsmJ6qJ1ViNSSh232kfYqWhEr16rjP5dkrwmEHedNtAzdP2RvZcudSVQto6qvy872Cy58srbSP",
  "key31": "ZQJHwFZfSiwWEYEqz1QFBLYWHmrpFJzgaG6R6LD6nPqCncRuETxsMfbhDvkUvvqS47TcwGjLK3B2SyLqzfUwFJJ",
  "key32": "5PuP1raem2t4tucdFM9ywGFe1dB5fmFgt2ukidqKNK2DNhDsfGNjjGiDYMuYQ8ej9uAcSv3mrLJ4VFZhGHvCDZyq",
  "key33": "5qrbFntHtMzgx4oKjESyaS1sXNxPAdHGjfzy3VT2ddhdSVDU2XpEzaCzmUcNJFzN2kuWMcuJufCuQzz4jtxG3ApZ",
  "key34": "4weYjeVe3aeapWpcaqDWwK9Jxu27Msa9oSnDceBvC6LLLpAsv84bKgBnsivhw7PxorPEBJkEJ5eagQL4jfUfGMwD",
  "key35": "rjHyVtUupbREYy13zxXj8ivrhAfse3pn4bNYDSC83w2H9VeRxzULXLj8mkZd7mDdaY9hPfL4bnFH34ETyxGuCXD",
  "key36": "4toQE3Nfob62qXAP3baLGSnvJm3BfApusFZufCeG9JwDQJyUGkeDV3h7sY8fL5BPcNyPXc9CcZtTdBSGziDroJ7k",
  "key37": "4U1mRWSjaFou7P1TUka3MSnQbv3VUZMZA9wkynePyfU41q1N77EJPd1QtHoDhyPZ398p6ZPtzg3SxbfLnD5yYoMY",
  "key38": "3RT9qjPJDzyybvFJA2teHGK5thzH8iuERJe8Xgs4yx65twyfsbYM1zrj5bTYCnqX6q2qD4qmngqiKyEPRmGabcb5",
  "key39": "5JPPcsGSSQdqMqiZG9g2NX1eeLEuDVpHuDJGp24HcQpYXwvQ8Pj3a8CFV7eMqHWCS7WkzALqeudBYaePLUWZuFdb",
  "key40": "5g8t55YgD7BkJWvntjcag4ZgZnUPxZ6173K8Wxa9ceBKaxmAU6zw6BfshbST11dVa6nsa42X47SY4QhHBtBHmta6",
  "key41": "3eRonK564iv1HQEhVWzA8XJhWDkx3ktwiTvqfWAKXUtnkLKKbvMkef2j6wKE9TbK6bpmiu7pNqJpkJggjvUCcmaJ",
  "key42": "3qxnYsCtXxT7cg4eyQo4izSBcaWwBfkKaZ5WUXWf1zDo68H7zA7CpGtJXxbm664wqxjZBTft8i7sr5YJXZVkNx4n",
  "key43": "qWJFYw1aqf3pa3mJUyURbmHWpUGRLi6UQkstX9G1HmQi3VPsyeiUaAq4nrP4b3JUhie4J1QjWdQKh7Pf2DUXH1Z",
  "key44": "53ZHrY4XHd7TB4xF2vEA2enrxDLAS1qTfmy3oqCH3RU9Q9eoMq2sr7wwfxiiN7WdTwrzyCPUnn4kyLbaQwpC9x77",
  "key45": "5DwH9NxtygE9njSiBdcG9SwTYtWnHdVdjX5Q2G8bsfd97yVcZmvrEcWNAz3PQpvqyV7bAYDWUNg4cwf3J6Padbu6",
  "key46": "5qou5Dr5bJUMzDGrmdbRhTGrLGUrVFu4tVuQASSqMiwNLjXbkWuRiSaSGqMBCEZdxLzyST2BVHtDqPJkcBsqyP1j"
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
