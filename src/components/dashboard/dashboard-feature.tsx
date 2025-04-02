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
    "4n82jLuc7JhQq1FBKoc6yCbDuz5nx8FWCuGajuNFBnj52esgQKUtkrZZeetLw46Qr35YYL1Rfy5WsBDTcL2WhZHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JkWbc8GSjtHUfbL7qexXe1x7NWeXRkhxEHrKNCSaAJmnpTNAS4zHvCuv1H2SJe1CGVaM64RFtoXHTPsKF1NUbtY",
  "key1": "2gwe8PkB9cjnYCyK7a2Pv47HV3FXLovTtMsmTtmhu4g2aMfQe2S6gD7JYr8CgkAxwiwvziD7PCjmszM1sn1bSuxD",
  "key2": "3gzHTqVVFAiiu9ofJ6PABf9mhCWEJecEofrcmrrsCDvjBKKuqHYaXoaQYtNfDjVgrSbX3dmpGqKz41WbqSUgAWH7",
  "key3": "4kgi67JP3ehpk47pgAgDqRynrCbfrbD4qFFHh3ZSjSVECHmuWTYE3VsWcXAK7DmtGN4Ea2YJ7yLr2ESfrspPNnue",
  "key4": "2MRgBfUfTV4iM95a3MGH9JMTyVUC7SNEjNCV2xifNhfFu5DJroYZQ6rsh446j7C8T2GVwBC449aZTcMGovbLobGi",
  "key5": "4W6hsX1LKs45sZz6zGpYfpsNAq3XVSCkfhj5dqfqCd5CDgFzWqyUmzA3iHWuS4j1hSFWGhmbkL6QoNG57bkBm3Dr",
  "key6": "3fo7uSdBDFfNexbdvavzu2aBBZh9bx8p1skB1MwYs5iQXMWkEovAyjWsFtATBebftyd88eXMkRLwj1zYLvemDkL8",
  "key7": "2qrU6QrR9qvT5ymYzLEmRptEqFsu2m9wVeLzMq6puBFyyFa9xfcfSPWTtSqBKgqRpLPGERPjgXw9JUNsj2xUdws6",
  "key8": "2FopPgkQkicFbYeK6A8vzNYHAWaFLajhmRjW99RKRZjCCjzJJZDjJicPsx5thKxJHeYFR9rWbrqzCLmMf3Sx1H7S",
  "key9": "2EgvxiGYAhUmVazvotE91eKiqJBkz7P82MV7sYPwG1MsFdhw9BirkmbKhUAG9qsQs787CgYztN5XwKqhke2d7ApJ",
  "key10": "22greSBAZv4wQcrqykeDixJdnfMZu2mfcs4yzn5dXKyRMb1a5ZyYsCUKyEHK9T3pWKwhtpFm1Yq52CV5i19oyodF",
  "key11": "5uaJXPL1Xc9XHC5yeTeTMeV1fxdGcSHs7D7oPH94SrWwx9oZUpMbxsX847wAqFDK52oskCHmHyDot61PwpXtAb6o",
  "key12": "5JT3xJNfZFmoxSfRyRvcpr6Z8rnSyEyS1zoXqyxvEMwUsAMuNbZGT7E8yScGvfWQrbLM95J7nGCNnRhzsakKQxrz",
  "key13": "gkCEwBxbJK78UzYzgws7PpKHHZ1rbPJzYGgyMNcuJPZZRSP5cyTffLmH1BTa1n7QhdqgHNr6rSBGJmjaKnVJ5k2",
  "key14": "2E7WhhwDSVUX85yuGoo5en34g29HtXi6LbzhBXYjud3qLir2zLD63sYFibtZVqQXgjQhdeLQmtxGzebwaD7sE3KY",
  "key15": "3cr4QWV5ieKHgi7suzvoauPf9KQ1GdLH15emiEvyq4D2gec56E17F8HTYwn8QDA5n6HfMAVfU4LeCobJzCXDmcUn",
  "key16": "57NdE5mwQ2VhDkH7MdV72V8YYk7dNeSnvRfo18gFwSQ9TXXpddyAtPNi6i4fnfresVJwYKRWSyuHdnAeejNtksF5",
  "key17": "2Y5tqqmsTiiwM6MxAVfMa9LhGhG64pEWRjWty6daHu57qwg4MpAs84pCpF9s9qutfjixv7ngVCoZdJMZwkUjTh6o",
  "key18": "3Yms9eXwMxDpRbyCM3tgbbZ7yeUzzNFp91Bi87UTX7uFrJ1RjeLmSbBiiURazULhc4J9eRjQkhqYqKfvERk2Gywq",
  "key19": "54Eq6zvwNtvgWyTcAHWrAnqmfeCG82q4mvq4xLd57rHJfqPUn4NZLnMe8PoR9hwPC4cRze425HabwqdxxtQVdYV3",
  "key20": "3vHK5hVBs11k4rCcyw9SnWysgyURudfnJ43MoN3zM8A4q3y2B1xey13j6y3UJNu7tj6cvBvMCzkUcdCnjgHmnNgD",
  "key21": "3gDX4hPAYmAxUo7Tq2kfzaVZnhixhy55HKu8XeE3nH5jn43K4thhqiwVfmPLHohid4iv2XY5f8dTbRQX55ksdSD3",
  "key22": "3vvzWcdWCKqxxtuaPT13p6GbiotjthxUEsmoq4dpueSbyU1LnF3uKb77hFLwoE99cgkRkmGgggfSREBjWHnkXCBD",
  "key23": "3GvKutq4S8TQmcg4uCCtWqLCcaSwETEk1KVyJknZ4LtZUwR6mBbM8LCo8i5QmW8mnx4eFQfaEarrCbWP8VKCAJzv",
  "key24": "53fUsA11mMV1JuXhyrfkWFaLDEy2XpexexSinjjyRRQnNjUossvtUjFLiqRybU5cKL6Q3Kp9fxLoTWE5pzaeVfqi",
  "key25": "2AQzTRWx68CZrreAJihuWLVmYryYYa2jogQSgBU4Dyv4MxXdnJFmLQp6MHX4x2PaEi2EDMYpmjcdpUMSvEG5Rcfx",
  "key26": "3qJvWHbw3VhiiNfbgKFEfaNospq5s2CTNJsmg5VvK9L1ndFDR9JgDDSkbGPnMitYPZZqVb4QoRedc2sHagykuHjt",
  "key27": "JK5vS1idAb9WQDJKfE4YYMSogDQpRokSLNiSuhbnQXwfz7VX9ZA4CnCTF5s53RyUEFjZdefpwvgE7oFtWySGCCR",
  "key28": "3uwFV9wEgnyPESHZTqW7mLauckSGdQ6PE7CE9NgPwy9WazvYxZkEvhUkJFjXaCJKAR9Qq26ePnftjDxyfQiQjLAn",
  "key29": "67kQohmg4NJoSWLUJSTshcP9QfYJLhvSLPwo5hnArtxExRJanQasoeFj1aWvdRVR5VhfDba4PSQNFECGeLeUnUfA",
  "key30": "5WiiMMKxr8fK4SvBsDZPbmG6zuPcLhFxU94jwAqbUGcFzMuF5rCBcFizjbYtn2ZkgAq3qoTem5i2nKwgZKJY5KcL",
  "key31": "3xjpvEQY8XpVjZq4Qa9u2Fd7S6Kaa9Sp7kaicMcYZACiqKKfqoFcgJmhgdhyPUi9E2GtgtPwygo96K2xDWA6U1h5",
  "key32": "RKDbZLWNNh7aMR4XAsYJzsVui2RRmU2KQKqzyS66ib8xSbDYCjKfSe3EMihoQgPEpxVAoekU52SExtV5Ud27vXk",
  "key33": "4Ae1fvMH29gzc7J3SVxEeeeKurFMXQpf39NMpsisNQz9a7SfmXiRgBg2k15MRrnk1HuAxz8WFkAy2XkShH7bPKMn",
  "key34": "Nffd3iAo1vgLXA3YS74Yo2o3jPouxvK6Acc7ycCS5tSKHRK1YqdRwFH73BLgFe4P1ZRYi2SFjSBjgnUHKBNm8TE",
  "key35": "44vz3CfPZYU8wKY1yXfGWJLoCUmYv6R2mBwmQjvMa3Vpz9ABcPTofK6knrWcfzQiacSWgv3MoiT9A6eV1LPGw6RA",
  "key36": "ZS3YZH1vL3pXfUES3k5SLESqSwTcKovfrJCY1DjV4Hiv8UrCGqE6uLTshTaKTzHAcSupLv312r6EbYJFKjExJT3",
  "key37": "5wk6Grvm1tPht3ErGNbBF8w91BdPnmK1avhiwLpsSBFkdAGRvSqt7GareNxxL7RVjbwb3bukxgV79WpmfBUwDXCU",
  "key38": "4nshyXfPRn4Yk7jjqpPWSbgjMs72EkswHc6mvwYqyh96QjoM6twuAEXPYPaPahSfJn7t8mEJ4gVkrNJsYPnWjqhV",
  "key39": "5XTCCpZhBWTntqYxPwNwkTKxRyXHsZGHbKdUPAGdARF4b2s8VwvmcyWF7yGpk242j7jmawnUVcTVaiBd2fHzQiiT"
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
