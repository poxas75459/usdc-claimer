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
    "3U3JAwJPzTcqbAYr3UvVdQqSKYsqWfdVupPuGnuFeXKtZicHwpQ3GwSUdL1KdGF5S8K742NF8PowYeXeNXdq8deE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iUPV63WDKKYGXWpVQbFkF5hrVxKxZT7CRMk17P3NB87gMsDmh1Rp2cT7M43oxzM2wbaJkPiLyGtRgPGJJf6DfWJ",
  "key1": "5uD8tnDypFaAMdLNs2jw9LKJfDPGAZBKFjTWp5Y8MUVGDGVuiBivBJDvS7gd9uVgkiwCQuhoEWHEsnUfx5uUS2j9",
  "key2": "4ijNxbrQnDnNTnRFSUQxspDwnmuWBbeNkva1DRYpr4TujDTFyCRH8hxSLQ8Qfe6dctDM3DKdg5CgTEJvwqN9mnkr",
  "key3": "5Cj7B2BrbsVLX2gCFCRuZGfQWk1emeBgGRhEMwNbqMWNY9ZmfhdnjGqPGEEUpDdsZtwkpkA28P1PdwBpn3YsiLUm",
  "key4": "58HFuqJEfqptkG6GL26SNaWenhWUJ1LF3dTMjyyRNp1dhQbZFzAaLApnorZzV14RcaXfUVNSPHfEST5kChgt27bf",
  "key5": "3YnYDhEb76Z7tSLSNvZsnEHnjayGrkvmMt6JfoudQ5nF8me69R3kVBdESwT4Qd9ujZ47euNdvBQZ1rnm5ZCytAqN",
  "key6": "2nWVasQpCxz2dEKCqSHWLpZBpm9QzUVEbiYK1bb8jQAdd2fa297s1LiKoatqTGcEWhKeExbN5EdoNPL5qquGRSh",
  "key7": "3oUjEPNRHsimvms4Cd1QmhjEGZRLzjZeQ5TfSh43PBXXen85P7MP3VBwbVvUft6UDz8DYSaccmn1ci8Kezbo2M3k",
  "key8": "2NDzZ74KcEY4ZU3dx33Rh2U1gBhAHV5BT6yEbdinmuHa3U1BnoRp3B9s9v58kpYdK4fA5rhHPMwuQ7YyYW9dmxKU",
  "key9": "5bKcJX2FwuMqAChs83oyyKgWwpjZzimkGca3B8LgadJCeuDhYDXqB18ECFF67KhpTNgUZTC1FMTYKFsYHvB7YfT",
  "key10": "4vYsmnUkir5XmqNng6rWk9ZackkTnfm9JGNUEbbnEwm6qaWZUEQ3upHF79yHEGMsTDjKMFqNN7pwn1EPnDYneZuP",
  "key11": "oiRbmQEWHJv7NrMpMbGMr17xCpPuXcT6Dg9rnX2MkDDzHd6bmDSfZpY5WGZs7TVQr71AJnJeGPUhe6FuCfv5AjY",
  "key12": "5kszaehskPrxw5wYpfc8UFChN6ghimPVetGwasBPjZEmixEvL7SN7LH1A3Ejy9sT7bzkRjsHrpALrVUUbNYh3Pan",
  "key13": "5GnFkreUEPkijZy3qgebsCCdJ5bkeTEEsEBW8gPW1joBjHGgdEvQchrV5AArzfPtApCoLS8Ktfb6FiYu8QMX9wwM",
  "key14": "3sNNrg145K4mMpyUxZsKQ7QfCGGnyRJXjQVsPxchSnmUg1LmxEw2jyBq4T765gg9deyepmBXD4CZKuVz3ejJfkLy",
  "key15": "2vuP3DjjWqsbfKRXx8NxaNjsqr2Mh1ybHw45RF26mpRpyACZTnMskT8pH4JfWNbeCnzk9cy9idR6Y7wSxnLGTjg5",
  "key16": "9FDkN3ye1LsHhv4tPKx22jyXvMLCRBDmvVsWXE2HxJPv3esHjDuPd5Q11ZHABkYnEcEuTzQCNPAWxpPQ5aMpAWt",
  "key17": "53CuaRqwnexZ1sQtqFVij77LiNbLdRcJcqv9wGQcpot5YsgG7i7sYqbPEgj9fonEqviMd7LmJYw3jrCBdqPLMBrA",
  "key18": "3Dco7DtBhrcRizb1wGwqMxNQfLMStAxkEYNhPAZmWGCSeHw3yb2rggw5d7wyDNbh84FGZPniLjTuhfiiibpdjork",
  "key19": "2jQmfJtiGfdpbV3pmU3Px2NjLnZWbWyThFd2jtxZsF97QAMzwREkPuKESACeq1uPAzX1q2gskSQHbCAavpEmm8Nz",
  "key20": "5A5BvfvyEeUukC61Y9MrYckagBBLL4SgBvb8ZviQstUJxj3WQW1t48vCffkhC6jYa2ypxtLXSMhCKLD6NK6dKUoP",
  "key21": "5RxfjevWuJJ6HETu2MJKYueTvrX6Ng8Y2LP61fYrECyHMLx7ATvsh2a5r9rYQqgygi8TAjtPU83aZBXAkW6HGqhC",
  "key22": "4YgSPA9DTdhprzqZHtS3ohWfTTWGQHEtwwvFJem98KMsKJbd5ZTaHn8oQbnuzo1kq3EEzcRrFusg8GBqwjd7DYQx",
  "key23": "2w2uNSxYRVmeHihUXkDanwytfFQegbXzwDYPKqJ1cyo1958zHEmRhfL6Qa3n2UzwWiiEwrPMttshWSETTmdtiYLe",
  "key24": "V9twLBimM38ZnmD3eZuQiJ71hKG7Uzc7gAxbn5B2zi17kbGM7rNcjCg3MXWZow582tuWH7u1vKNAiQNXWAkAuhi",
  "key25": "2Xq8wJy2NY39nfWfouig9fWxDVA3UPp8abLE1TqvW67WmRcotF4rtQUH98y7WTovLccten1dwdYK3GFKHT9E9LKi",
  "key26": "62jvrXPLEGtEjaQaqkWyxNVmMFTn59jnAcCZxzXfvNKQJomrGe5zzxn364qUVqoPdjWR8FWFBvWBomQ9HcPXmEiP",
  "key27": "2HPXy5YRXAvWcSyHYgNb75DiXzR3VujX6Bw7epvdbKSa1DREZWjD9KvGCM4ZnbTQ5o5RvoV2XCyhanjPdrFVatbH",
  "key28": "48nLEMdFaSrwTmLviJTLd1EHyfQxzCbHtfxj4uHZsCW4FxbbUnRauNkiKfMRrjfrFLrnM8kL3HsQgRbzc6NEhg5J",
  "key29": "61qwAgQAFZewfiCLHoHheAXErmfxAVpgAz15KtLDGnHrQcikqSKvEsGuJDXHS2XG8NCbfELcWJw1H1opJnaCRdhF",
  "key30": "4Ji2gDHxLfWhjrCbdrxqhNfCUqnLsf9TYYcjrWLCgte9po7AyJdbbm3U5BWzDqZ3r74CoA7911aJqgjKXHyq4e5H",
  "key31": "F8jawvUgpAabngsaMGn6J1K3Famdg9s9FP86BA192nydbgMnMFAvQnLCY5bnhoRzXQh3Aqzv9HHJngeiQBv5opg",
  "key32": "2QuJhwbSmSU8ANQAjTEVBbKB562pWYotjUfx16QTJUsYuarjPzEwJQznTktbhHxhiitBPJ5Bygz468X18oN61FUH",
  "key33": "4RnmA1Q6fqxib2ges4GMqT1sZ7AxdFxNBesu7HA8t26LEbrC6eCgCf72q6eoQECmL2UPXyCwKMQEoxQ3TqCzDyLk",
  "key34": "4QyYS2PsnwXkQ751advZtaro96ku1GcmJ2MwZAnzqueZsM4iuAJGUqi3rHe712Uc2LDsmS4XdgaRjMnXCP6doveJ",
  "key35": "35w7Ux63wT9Pb2SJ4vLxABKoEmfdV1txf5iwvipuaGvs8k4PyzpaCfUCiQNKFDo2P2vZzocKntUyNGPZk316n9jW",
  "key36": "S8kiZJjGtsNLEXG6PJrKfQr7f3cfGXphTw6vYpDNBmhAvi2FHqNFJrGghywngGXCVaKxcF9uSQ3HGQPUEyiedsT",
  "key37": "3vftXQNJEFXejKjyusNBNGMjsCaf2DhHCNW72GnL5s5GJUkePoqjF4EC1XtCgKkeV1yUynee3kqodkhJoykLwxrj",
  "key38": "5jKLE3HRoNSNunL58kFzBoVBWsYuqMisNeVXu1bxA5oehNgakkA12DMD1BmZzoZoogSvEzgWe7BwTQb9CBzotKZH",
  "key39": "2EYQuDi6S4nPeoJV6BqUrnEJK8QdzNqUJaqK8zBWDNbkqgWcxUWb5Znc2y9bWTSgqigLo4Kic6Z4aBg3tFicc3Me",
  "key40": "3VfJy4vYLgdCej8rbTNUK2WaGCT6rSmCegQmR6odbueeBob2Fy8BktSPS75VF1csyWZsCovtgpfQjAPqL23TYvFq"
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
