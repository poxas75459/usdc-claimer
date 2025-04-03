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
    "4Lhr7CWqmXmjgpyq945wpt9gJHBu3Z1ehAG54ZLb8Co5uytdQ5YR8fszqUtpefk4VEfbY5QNAHmUyN2cvCfaNaHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eQhKTEaLtkDGCqZyN7ULA2azjYwB5NuoifNStDarxM5qhotdCFqAUDsFksWNSzBpcWdUkiPpw5aP1FPq4xYdDDC",
  "key1": "5Gb9ZujJS8ccSLJXieT3ZBtBsc4Y1duzW1eW6ZNbX7pCoRMsqAt2KaXKzaxP2ErY4RRSp32sam6Uh9FYCUGdLP69",
  "key2": "hQSB7EukigBWjyuhMRsKt72r2ZaSNumRmadmzodiUtwWLkxJ4s4FYSryU4LV61HKGhi1HMW3UpQu8BFFLUNYKJf",
  "key3": "4ty5LeYjdxsGwmpmo2TiBweV1Tn9vL47xeka8ehBibr7os7p4ww7y35Y5WccK6sCd9VkuExYWCLfaDhmbenkn2i1",
  "key4": "4AF4WiEbjpf9UAQAHRZgeSspLz788zhbhf19sG9UYdtGpfARTVWxRF7V8j2gjUzR9xqXzeudAQwGT7GZnmARpPFm",
  "key5": "3q126qckzRk2FKpVoJR12BLMSDeB1f5wXjfuchzK25NYQAquxPvEutsBSHxGkHd4rGYVBFS9KcGgJ7Ug8G4PQcRf",
  "key6": "yB5kSbfqdm1emhruHRfuF4eqxXpL2D5YpcvSUPzxoN3pLkHWR8cPL74qk8wRfvg6oHFJbBu12VCJaW3VVgv76BA",
  "key7": "5GjsigQxeBGnZQPzjvVcw92vrcpQ45w2mYV4GhJjWtDssXowDGDVovoEX5C1VTNoXdqWuAHn1CC8EskKfKHoowL1",
  "key8": "3HwTsQkha427TrKsCLbWbpumPYy3zMLUowSsPnHZfn5yjk7pC9FuV1c6taVndwewC3Fj6P3Ceb2axmuAweBjKhse",
  "key9": "5NNoxRzAR6gm3YUApDDbzSHo7BU6VJjEbwrAMnL7dwuFBZDVGZ89xuhVN9A7BWDZgLbhp1MCtnVXpBgf2frrc1AA",
  "key10": "2vdd6KaF2qEyr1Deq7Z8cdWPQ5cWb3pocYhdc3Y367ReCSeReTQp8nr7ozTtFzDJK4hHKCDBYWG2WycS9NUfUdGm",
  "key11": "zVEvrRF7mhZENooF4vRXdyC7TtGH1E7Xgi2hTPz19SCudJaPr1Kq94vr5dSKA1wki4yqdTP8X1BVxY7RYpapX5j",
  "key12": "3yjqzhHXr3iJb8PUmmbGteZwASUxp8LPvrXnMS5ZmosjWtqRr56M7mTbdAXMHsJoPYbhMXTfffeqJV4Hwn5b9Uff",
  "key13": "2mfXFSCVv8xwGeEieacgYnW2FpnPWKtArDY4jaPNgp7n2fXxqb6oFowgj7Q78GBz9a43Wbzfn54zC1FyqMBpLWmL",
  "key14": "2aBSCyXoDsfZvhXojhM5xd7j6PKZTeXotAeK9dcgoC5M99iRdYpGeRfviT4gqJMYfmo2oNjvwVqxV3GEivdo9ZvD",
  "key15": "5FAPHirqgF2KvGZELXaLHy52t2edb9NAUNJEGZVaYV76Qb9n9AsXmZPzGmBLrTDkpJBKV3Mo4djorEK5EEuxjGL9",
  "key16": "gQ6a9WVMYXkKdGEC6uTKjyz429GvXxGJ75Apptfys9oweEnYeXUQdHp7NBKAADtxTwqmVNXNdv9vwW29zz8Mkj6",
  "key17": "3Ni4jHKGGuHi6ebQgJxSriw4J15erEJck2s8QC9hZB5WYbWJdAtCCAAx3PnUeRvoFXeEeVmEdFau9xDDVmDumfBP",
  "key18": "32WTT6oUFYKLQ6M7DDm3kxH3W7518nvLFAGYYDAWDmfhP7amLXDKauW3m5fVZsuW1uQryEKPASiHcdXWf1tNPxRb",
  "key19": "5CWTryRkUj9hoQnH7WxbCYWSHYMZ4RvCriLXmCUZDEyds6BEqUT3ysr6J4pNg1vXPGtYmaSxZk1mDg5P2jwG2jDF",
  "key20": "AXSBqSVXnn3hXmwTffnVe4RMAvJLvXJ6eT1ZQUSpwf7jFamdPKqwndqk96vbkwXwpqbmxbrjMid9aGkRpX7XUj6",
  "key21": "5zhjRsRvCqwLdjbWeV1DqzCrBHT3qSYH3AySXMB9JujTjwXZvWYNz2LBgbk2gEr2fWWYiwjz9MUM7Mps2cvsb1Wn",
  "key22": "Uy1FFx2tvhSrfSHV3y5hRpCpg31vem4dz9SLTbnoToUWW1GyWjr6XDm1retdDNW5BpgSrXqLyJJqESKBG14jTkp",
  "key23": "2mGaMGPUwMLiBpGZ2RQJV9vVfPiXyrQN9FVEGeuzeVFfzavBprqG75hKFwjsM4EewYxZCuqMDdUoXSct79tbH8vF",
  "key24": "127ifkWJTvs9c6kfBesWSjZbCHkdZJQiUrzjXBAAJ65NgTXwJXAM12F7VkY3FXkb9epMLWSnJVKJRhEpsmSXBFXQ",
  "key25": "2L1faCWFoAn2G3FpRTKMbEP9S2hXPiBYhxPCvZqg97MP7TYdCufEjoKh9dtF4528mkKmDVEDXhjKfwRvVd6f7mwo",
  "key26": "3cmo4SRzC3cEtsAgD4pbPXg7pbdqERd3nPiuS9AWxmP1VyZgeWXqGFbGiYzb8CkqGQmn48XVRnTUPtXT1VL2wFSq",
  "key27": "5h5GdDrmsPHZwB3jjRD9RG2jymXZH8LWpnjNCXxp8bje77NYnQpd2CD5kd4nq1Lo4BVhyVYCbcBLnr8CLvSTeuTq",
  "key28": "SP5ofpqifDx8JsgYQNkKGe3D4iHW97EVC9z2yhjMcoW79yucHwSx1XFjiosP6TdUxHdZg21GQR7Wf3bxnJ5CgP7",
  "key29": "4i5S5drFWyAAHSic2JBfiaUrU9eCz7HQaYXcRuLUvWq5wK3wRwyvh72rJ3raGUkcavMhuJ5tytDjwesmnD7j9Deq",
  "key30": "4WLFC3vKQTEVjkk6KEzXj1pAzLo3iXnA6usgWrmD5EjJH4tYs6TxxedhF8iAEpAXspeEsZuXxczYPMT3KiqLDg5g",
  "key31": "57RjK5nMmYtVxbffCNN3toz54etvmpFZBBZay7AjpNnfEhvTQKVo6xV1GjGDzLB1bkUgJijMmB4wRjbMxz65eiNU",
  "key32": "CqxYxn3UtnNKhghLnFS1bov7LkoEEv6E51S6Ab6ns9eGBCKtBVjjBE9VHkZrtPRLZ8mu32Pab11BLcpEMMvHCZe",
  "key33": "XRydXRoxFdPqiVe5Tx4pdhGr2CP2exnVsbzzt7Mdiz7ArUXrMzhdj8soyQkdg8fEjckF55eV9joh65XcX4V3Qk8",
  "key34": "2RX62BBJVZLzxbDph8pSrvoLmho9CTRHou5zRux8ciwjriu63MijgWaZqVkz5kb6WbA4uyQ86tebR9aj3s1qp6GL",
  "key35": "pp4topenXKHY2aSvL4CyNVjdz9qWJK9T5gau54ESF5QVV61R3BWgoVGFQGCW3gr2gSKtK56mp4hfAs3FMnWMvHi",
  "key36": "3bbr4gWC94DYmBEpUBQMtwaVmpfKgq5TMGuE9ebuo9pSnyrXLrpHdNrod8fcjASJdVsCCd7aYwMBvxnVbafgc8ob",
  "key37": "3qX3v6L7dDUtbcZDvXAvSYu7zD5rtg9td2p2FvuD3W7yxHsuTGmSFzSAz6JR4XxEG4zBy7NQSnyhfbEVrXr3V39k",
  "key38": "3vz4HaJwZTQEtmVdWxXcajoc656CyBPPhEYEn1CrAiMayNtwUWRBqZ8ebvDW3wYAVzU7Lkp4zhHcCsx3ikJjKsT3"
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
