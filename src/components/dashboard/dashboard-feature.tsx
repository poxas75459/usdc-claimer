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
    "52PiiJPFsn2RYc4k9epPYZm8xvQdYDi3fPZyo822RAcFsY4pTwJ46hhSCXNMEPiXMR54oHzmGV7JjywZfeg4WzjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G8m2wayqJvwZwwnmxZJi79jZoU41tH7oxnEew84VsnBwGmyrev6HpX2Lfwq9n3ujkJQanuG9KXzPb4itYUEUpoK",
  "key1": "wQ6FYE2RmJBBkgGx6Gm9TsECECM3YwXH4cu4MwTkxNN1bNaCmxppk2hPwmRnSg36cEiCDWiB78a9knYJxHGVQa5",
  "key2": "4LgxwweRyFmXdwe8RTJgFq2LGu8iTyaN1uepDdgR4xYVgtTGgLW1Q8EhPivp5hg3iQqve7oFrZyfFpq4gUu74d4s",
  "key3": "67pKPianp42E2E2rSk23in8VHWQoimEkgyNnx6YP3Uaa8ifawxB5CC597A7rQDD4Uiezqz84aejigEgsDB3fsCY2",
  "key4": "MZqnFHBovMKMPvsHyzYchaQ1CSoFD7gVqJ1zdyq3NFJUax891rkhXSwLLZirzbjXeAMMdnnuXk4ocTLyahvZXnA",
  "key5": "pc9Q8u3uuN28fvjmQuTpwqZnyWyXSDiRFD6owh4xZvyPSigyPAob6ZKKPen2yjhKcUVaTNrs2zqGrc8xqHQZWga",
  "key6": "4PwvGrNSfgGiWGnu6AkaJFYVeFXmmBcRjquam2MKkkm4Rbc24uWCpmsEM6EYcf8yyZGmqLVKURSbL6AN35i9t161",
  "key7": "4R2mcA6vWTZdSrPaV6hFzDGAsfDtADjBTXyaDRgozPoErnJFVf3oJgXiGXEoN2jmZuyKLmR7aPHBPJpZkfWua6M1",
  "key8": "2cQhgkse6LNWNEo95tL7GbtWxSGaMpM7WAmcmAMo4LGJMN3k1NgDN2vxu2c1hfXMu1uEokG4at8h6X1USpFYuncb",
  "key9": "4EazLpRu4kp6TyX3kydTyS41voAMwkJ7AdujEUXahxf1WE2AdReEgF1TJGKaRWLpUNLd555XmcoPnSAWdoeuzGDs",
  "key10": "2k7r1p2Xhe4t8hnDo5f9ZGfohSMiLhNkcSDrx68ArUpEHzzoi89aFHtoCPJqP1JmmDx1VzL5nMa3dmUGmJGtuXAi",
  "key11": "2RjgQSRYJe1br1TxLWQirREmQsexmczx1YvHGLLW3rj1xmx2W2uWpNBnmJazrrvHDFx4Q9b3B7hG4bPsNkxrZ684",
  "key12": "N4zuMxR1XbJVTj39UXXUmcdG8vnerPaqiEbuMFeJ61ku34zWvXv5xLQypZTdj61kvYvQLXWH1MCLfzL4wubgJp2",
  "key13": "Hd4Uf5AdD1E6reqwQWHGkSDX2iKeKYVhaRhnvr3gGhwQB6mw4uUE2mVAoToVHikdu15Ad4gsekVNtB5ZRp56Zyv",
  "key14": "3KPrtEAhrcQNxDzZxTKn5ftg6jMZihwkXY9qzfyt3iZq1soTD3ezNjannQK1PwjiV8wmkzEDgREnAb7Lcri98We7",
  "key15": "2p71QtiNRFk654uyU7og4cWs8eVGtJResV6sP6kNP8LMm6xZzGRuB5jAxkizh2yEo2LmXAkXWbRLWhy6vFsau38x",
  "key16": "2sK2o1ADn8u6DgrGriDsDNH7Y8xExeY6b4K34DrXbnEsXYEDkDSeALJP1mTDZQa5vcy1q5yvKgC5BpYVqMatxTp4",
  "key17": "fRSR1DnDBP9zfxS9LPegZamCTusFkadjBgrh2mSv1u4kixYo7btWX1961PJFWon7faLJ4mNZuc4kfyBZZ7dLacF",
  "key18": "2EiuJJ1j585Xsi7NSZ5kb7Db3ogZZmiXVm1Bw3wCCrzrUi2AabJh1N81khtoqC4Mq6bBb1Qv7EnyMvs59B4ZhmCe",
  "key19": "2mwM8AMvectrPNxAc8dSo3oGY8DuqLRiQym6mvogsmbnYpRyHfyHkodKFLMij6RQNqgKmkUGew4dggx9dJQUPdVY",
  "key20": "25jTYL7V5rv148yL9umqY9AnDmPPFzfLPgR17s8Szn22GjcH4irmNpDKgphT388BtyZbvLsPutximCAA6fFXdznD",
  "key21": "5nKY7RkXK96NT3QRKRNr8HQPqMjFe3PDTC4ZfRis9tL9cGxqPmHTrKrPotqRCDtYu7dHBDeoetoN99PcZDZV9wnT",
  "key22": "4RtRjXwHZKnyxD2iFEGSeDSP1h4FT9phggkK55eSYtgPpEnNLeW4z97JytArFJmcZ3ZMsn4iuQdenme9jrRfw26j",
  "key23": "4PqENiSzhvYR4d9Px9AKaVuJdBEVVoknGQyeSmusoNTD6T1iR16t4CfwczWD9ZbTqjVMRFKb6UZMdAY1kZZxqMar",
  "key24": "D9qfLzzoSdPtBEEPb1T7HfJrh5V2TKfybEdJd2Uow1WFc6TZ7Fg6Yvk1owT5oH2dCeaYTJQCe5KzNMC3npVbKw1",
  "key25": "5F4Sj2xcfYQ9xghqusQowsjNbwxY7VtuzHD7RJgWX8eSVqPskwd2KMsiePCjkwvHUqKCrNa1uxJPRu1RhzSGbdce",
  "key26": "5K3ceyFZVy5hZMTtK8bddPDftjVnkXLzKdQ5iuiP3a48fzdfHuso1i6dUvW1LnGDDQ4cTZAJx6opBCZVPRXGq9Xv",
  "key27": "3dgYQkgejCh2wR8LfbQEMjce6jmd3u2jbewoJ8wr71JWmiBZVCxQX5saj43BbzR3dqbadPy3apJh3b915twND1A7",
  "key28": "5YpcNYB4oajyhmFfY9ovdnn4WLjoSXD6tNyfNSjZbNzDctgLAGWLXoPtQm4yxQDwWgejips72cNd9UW2knHT94gz",
  "key29": "4CgGCMhCqH3AWGAB66FuUtkV3gQKKzcqPs1wzY4N46a445w7XbvGNhZWioXqyFqd8Sw1JLDyFxnAqzWa51SoQeZv",
  "key30": "2kDBJ43aSh4dkdNdJBkUD6FNsLNKx5yV2rnX6bJL7HnRgfWiPoEDiG5ztJxQyvbK9tBZkNfZejRJ4uBkpVFBepBP",
  "key31": "3UfEeCFadekwsrP7zg3wiYNSdyUKDom8ZLMz53w61dFoMteeppE6iiWkDDqQs1HiidRK5s2s2DAMUNcP87wgpgJu",
  "key32": "3HqoQcQdbsC62xk4Pe6JGBHzojDpRccCstwYW6YQ1sR3qnSTXQeEf3Rb2sgL4Do6EYiQLpwye5ZQ5CntYBkikArC",
  "key33": "3vuLyZ36y3T1RbbM44PYSzijRi6UhrJbBriRYtkKuU8uSNkoPsj5MXuLiKo3kTvvCaU5bAKozwYMRbXG8MJMTWDX",
  "key34": "5vuTZdFHwXnbbuyw1SCZgbmJvPbcRiq5hr35HsxUJF9VaGCDQbTnMrFgoo2UaQKz3LPyWHNv8So8P71u93veuTH7",
  "key35": "NBPHt5SiqKpdz9s9oUpDFk8WTsco6DJN24R1yvqDMLWTZT446uPmDBFQCwybaMr65roYuEJxX6gHCpy7azVx8Q3",
  "key36": "5q1nNNZKi2sDfeLUp3JRqYnYqFqgGsXSqpBPyQKpdpvYvU1WvBrEeyPVt9mMMHuBb5RuAScxErQ7byrBzr8hQDu6",
  "key37": "5GUWLHjJ81XEjsUqnwQr31KdX4ZNCoERRxs1RSjD2FSRzvH9X8hh1LmaLRQXnvcgNjkugYfNxGDqTQhHGNbSebJR",
  "key38": "3xBYD6gH7ytqBZsDcYiVtBm4meyhqrxcJfdzu2Wipr2o6rjMNZetRY8FQjAYW4X3f58EGcYMKyHGaeEurfn8uK1N",
  "key39": "4ttQmvAWh2eAYGKue3eUpSdCFJKrwcmi453yzFh2yLkJfPuWGjS3TuUyB3TxYB7cjbpojjd4ceEinNPGywSKiKPJ",
  "key40": "3Q9ozY6ycBcGVK9rNPA6uU5kPCzgkQMffHaxVV5FA4FLgTWZjUxRgtXH4btEVwLpTh3RPsNxFpx98VNGR1AVa7hr"
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
