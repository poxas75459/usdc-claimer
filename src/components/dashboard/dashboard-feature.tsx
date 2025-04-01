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
    "f85nAHnLU9g6MaQdQq9BXs7qbNnnXAoMdtLaubWsk4XvqqPRSVtqdKiNWiaeBhaowC1aoUn3j3fcBmjtHhuYQ9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4puo3HZ93KMPrhZ5PqQxdDcbnLGmzBkzeEd6YNtVW4E48255SXmtssfMfBmKPHUkytpdzjW5x4p6xR5wMNyaE6BG",
  "key1": "2EFH2vV1WzWnwcPvEUdyZvk9Md7Wn7KxKUQWaEWK8Xn62nXmJxFhjhVPUxCP2hLFiHo8y4WX47TpxU9gQk34i13h",
  "key2": "67h47SdVqWABxCEBDDqNTCEbGTVXZuH59ZA1qnWeFpc68WM4mnUEW5pcXbtweL5fcfDTu3AchHNWwR3WBHGACVMV",
  "key3": "468D41e3xrnbuc5FmEzNUuciVJ95nretoeLjqVjuoXZT5n43UqkeybGPoBv2WzF8ugHe6NcwC3bw4megsYVfaxhE",
  "key4": "xducLbXPDQEb8fXQioMDZosMX1ABSw7fnjyMw8XihDiQm8GaCwiWFRVLcWtCuGJqc9xZHdbxEaVMv4y3y2TSfKW",
  "key5": "2rk3JzEbgFVjhhMokMPF513FXSEmgLXcmiyKBzZYiPdzQ5GkjAAzQw6P7JuPmCwJ2kFMUtZ3NifxSrtTtaVgvnjb",
  "key6": "7D4kwPh5MqDEgy8EhqrAdEALC1Tr1Dv2iAYxeneUSdL9d4aGTwxQKMB684wRDy6JDP8MrgSB2N47yJoHKT8sfKt",
  "key7": "5HnKvECrdkXYioWTYQgNDak494SVv9DC1csWpusVTv1ve3BufpVZpZmefpgZ6jyQVBeC6mpCis6dKvPzaAwNeSEe",
  "key8": "By7zZxjoAmZjJwWgSp22b5LmXC8AUojnXsnsseaQVb2AoZ45wTBsCWa8feQbEYqffBWEHqh6sEGsshmytXotMoa",
  "key9": "3VRvZUXoTSYSmS1BPAvwhUFJKUXHV1ao5dhHdgvQxm5v8msoPMiQPqLwYUt6GVksgYwh5LRRg21YNzVbuvR9jZCc",
  "key10": "36LEn7qeUi6YEjFGzX4wGQ3gDcHgNyoUJAuskpVYzq8oycD5DLviptHG6o4uooAr5DdCStQ2M4ZVPgLAHxUmteQ8",
  "key11": "3JHM9bvkGvQ1Fagn4yV5xLhWsA1XRvqedtEG7XiFxHQHBs7QKJYqgGxbGN7mKfwc1dApwKLEXto6kzTswiHd8v9Y",
  "key12": "34H967uh1r6mp36FVPM2vzoVJLdkQ2qimMT22ptbr824FGP2XpybL9Gy9pe1rpLLSKJHXnGFTrLbPtCXE1SsKRyY",
  "key13": "4umhmTV9mjrxq5o4UDCf8YTQDiH1xmXAUxaTYNE2jFUbqktQixzLtYbHDsfwijwWH1dWZqRZUMdVsztx7X1JmwgZ",
  "key14": "2vYZviAJvaCQvVN5j869pVMAXaYb8h4zfrbKYcXtp8LBZYY32TQAqmKj5B8rSbFWdeMKcMUNZaoZMDKP65rphX1y",
  "key15": "2vT2wpD8tDpiAkct8WF4zprFq7UoPUsmXJeERtT4FLdjG4ShRDkMejmBDwCtFJMqMGqnV6Lwt92GNi7D1YZjXnas",
  "key16": "kgyV1vt1e7MgpbdvDEMmCS2Kp8hN4y1Q7jsrv6beZHLgXoEYLQqi2393N8puDYErFmGCGP45QQLs9pp5MGJUSeq",
  "key17": "3ry3ZMiuzVQckByt27jVpJ3fGTDTZwCLoQGzCUVJyzV3CYbYYNgkyRaog6gAs9gnHNjvWJtCiphtKjB4Pbr4iVbg",
  "key18": "4hLqwRbscC6Afi7JxLJ5rsSDhyJZ4JRiQFQPqMFubVpz48315B6fvzPDzA1GFVNfbBhZTr1esi29nmJeAjcEEqyD",
  "key19": "2v3smtQMTzV9S6TNw8mnrfAmgA7Wd1XvLby8a4arubRxDJd6Fz45SPaMA7WCYWrg74sNCtdYu5xXHN7GMkkNCrkd",
  "key20": "3naRgATChPUiqktUfSFrArR5hYpEzcTvgejLY7L6dnsS99Ci8zywRA8a9cSXziYSHJGzSJmy78VWeLUMBGGCx9Lz",
  "key21": "cuKjREb228nFAQdtHBnNiRwqCrao6x4pVM3neC16BKTxTfCRgKwxtPSsAYSwS9rK4mEKCMa2xuRBPgvT2oR9gnm",
  "key22": "5T66mMMMQdai5Ro4BEpBpJfJLHpA4P5mP2CJ4UnMALS6RtnGAGJRZckMY7wtZX8cHvMH5BTYK1e3EHt7PFoK69jc",
  "key23": "54ni1TshUaQ2xmcfumn5nuz9oYaS5mueqdisRP39WhbttnBx4oPDTeSjvRE5eCqfVm5gJrkd7TPV9qaZDrh4wmr5",
  "key24": "61hf45AanYEuTp38euJWfcWX2NyomNSvqkLw6ZCvNABD25YVc51iNWc7fEqFvPFzLLoDRWPaeke8bMjmExnB5Leq",
  "key25": "2uRRXRQdtLtzpz3D7zH9LVXG6eDpg9Hmqr8vfkvMMeyLU58LBGJnHvDgNEfUjrfew8Sv58sUAaLZZ5ZXFEgoSJTH",
  "key26": "42fTaZvsGqiLBYykxSJuYMgmY7FH8gsZKTwRZa5bjq145WEU4jqGhtA63RPxFZefNRVnCEbmyQSMZUysqVqL7w8B",
  "key27": "3x8wFBnJoGSy5UuvT3zQq6p3ipeSgNSirFe3i6jYops3TrZ34ub8jyeRLWhrPtBzEFErg7HhAtNvENy1BLYCZvWN",
  "key28": "4hKTMq2uDUAqR7suGCfJoNCRsHAGivxfUziyvkAjACrXWrtZ4TzrGAwfZCqKZGLmssJLCMkuCqysUhvwnbAwkWAB",
  "key29": "2c9tBdMmMtNXvJhQPNN62taotdpYrNjt6nZBgSPZpZe9yqbRqmRyVH57DA8kYo6BtQkgTu3nWi2kjqXqjboSLX6W",
  "key30": "2ZdxCrrdut8mHR1wtxPwx9sP8WJC8b8uHpREmFL21tqtZA7wjGgd9m3XbwB153HRhDEk7ZxzAyqJaaXccaPYGENp",
  "key31": "3XjvjeBiTqexvuy5xQN3SCTvMnvUYYipnAvxuSWsWNoCWK9ovrLDXuh5qk5maC9S35nGJ9JpTc59HZcXN8JjkVyv",
  "key32": "4cy9gzCXNJMf5p9xEohie8pv1YNjqWQiJS2A9nijWPmT9vvKGwfdaUaTCNYQJ87Fwme39LjDWVnSAD3HDSqVb894",
  "key33": "28mqmCyvu7vjaay1CtT55tPsqEawZmPiC6vYMoD1wWBQyh8jhTJAMK9Mb7U3Sd8NnyjeXVmvDCBomyqVFPFhX7V5",
  "key34": "53szdnNqpgDCQGuhh2ZASCk83rso3vPnua11D4MT8BxvYdT8mGs98wiqNEV9d3XuwhahY3XuUKhWih5s9dfF53Fm",
  "key35": "3aevMnfqYh81kVsstT6JFcZWNgNbrHWwDnEsrJsKZvVNTQzSqLuvmNEyJZ9cFF3fdWHY8kPG4ENX5RTqBffygAQU",
  "key36": "3MSAvZLQxzNMEFRCGYXHvfNdEaFsrXAqS8gFPMXVDKUy1gGWUdZ2eumSib8Cgc53fBBtoA5tY2tkD4fzFXVHL4Zc",
  "key37": "4me9ebh9qC2YUE8srd66ioufxFr2fmxV2psJPjnytLm3BiLyh7LdZZ8Cd2VNLdysgZ1U83LAJTdc1dyUXaT8DbCP",
  "key38": "orEHUzE5HCyCPymnNeuY723t3wMuyZDeZRcJDvXkNYcGY39WVP7wxhPDW2g49p5q2kRC1tX9pr2KX892y9GYWDt",
  "key39": "LJfYEz2sgsLH2kh9jD7NQ1fs1zWyeNxEqsj4UT2gc9Q7pbBdLEnZgw5uGeAENFYkdgkLxEza7Sq7s7wc92PR4t1",
  "key40": "2ideHkTMCGhPdLsAgw6ktFVULhbtwvSrSZcub2ydnQonDyXRWbfEiJffjDShLPPmJPP2us6gLkbsUcHUeb2HaU1x"
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
