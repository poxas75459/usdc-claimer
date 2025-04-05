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
    "48b9wMJ41cAC2Yh4pMvCESz4JqFD3jB2JD6rKXxeiT4jsym8gAhHe5qarVSTiDQpJwu3eZQqzUXodUQKpoi4GHDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43M2DeNsyeP5JS91hsr1RbMBS77AMS8DLb2pDNqg1S2sr8CZvGnwyZU6BWNDDrBKZYrdaKqPnNn77NW2CzPTQbnd",
  "key1": "53ziZ14NwYyurYJ43R3NRBjGJvKgh65aAGciY1jWoAjyd72aSFqaRfSohhihTWP8w9L1cvRzr1sonvmGbRksKj5p",
  "key2": "5ybVYf2fgiFpmdmGu6cyn1BZbQLkmRGPLQEsJ5NtYq9aeAkbiiLL6qxwnX6ghutTS1C8NYheKyAW1ZNLW5y6FPiY",
  "key3": "3KtTtpwU9Tspdaa91aPFYRKANemJoitMh4v6siconJEtQzECfHqABEsGzFhAf74y3AFBNWyWtwgRfzbnBRqoaBfv",
  "key4": "4hQWqEVS2EZaXMwWz4VYHDGnyp25chGthNV4fH2kUVy6kJsSgHa2TKrkY4FZam6SUBQkSiazwDijHNZNVsx7Ncwt",
  "key5": "fPd8TEv4s6r2FA9QPLoGZz1vUiVBHf8pPZrwunmL8aH2vQAoC8KbkzscScm4PzAsXdCtmRDjU6ydx75mfD4SN2f",
  "key6": "2ys2rq76KQtU4H6QeFpQ2gMW3Ki3E69rs84rB6Eej7AZetrtALB6o8NEqT1FBaLbfaGoouFKjsKQF5B4mypTtQVY",
  "key7": "3mxLr69AsTeg1915hWj9w1FmUTtgUCZG7VCr6UfNYPYJbx1wMhTLG7efFZx8XCg5woQDe9ZbTjUpRVN4XnBfDg8D",
  "key8": "3U8fBQgPQLhVNnhTtA9hh3nALUJudiA172xAizDDy5Qg6HndF9KUUqMGrhXT7PbqTPmnMDDjsVeorfQ1GKFbHo6y",
  "key9": "4f9R39zjDKCZYvjRioyqhRzr9NPEyxqazftTs9j3jFgDYwU7tB2spGYg18Tj4N2KkwL5usiBhPevgZrKXGpZXwq8",
  "key10": "5dxLmWB2kxNNRsW6a38eB1kJLam8QFe673x4JMvkjkmqcMYjQrn5m6oeB4d2JAyL564eFJrgNzGBAsmwtNkyk2CJ",
  "key11": "4F4CLPr2Lu7sMP8GeW4jhiCM8E758TfS9gNsXmbSMJYQ1MCRz8FJLnFsVUgsBmodWCySogfvk98X3v78jwgFzDRH",
  "key12": "28DgH3sbdNqQcKi3WfiSWkAYy3LmBuWZ24K1vn4eSfM34wez7PquqpNAyaP3efYWKJc1PfRTuhmR3BZhzCmoTU2C",
  "key13": "2JNCQ8Lvy7vmq79fo8X6DT1AU7ibCU2UG2PgR6xZSqioVFa6jRoQp5pLC6RfuwabjkjjxoeaxbnbekwfuPKz14AX",
  "key14": "4qcJvyLcfaZbBpNdQd8fhqVGsGQHN7YK7PW7y2Hno1zf92MEVfbLxcQRcCmqYRFuBqzxKZwN8sXdMDyzQaQHwrY",
  "key15": "4fd3ZHvyqL5upqEoavpbXjVGVNJrPtb6iNKQmcgcZaMifLYfFpS9a9VureJk9RGCCU6KjuEgMZmU2caBpaZ4Fpj5",
  "key16": "4m2McqUnMG5SCxdUyn3BpgsfuRkfbpXAkBg17dgDZEpC7q7DJhM2232Zhvh4UcbCJJ8ehMyHbiYRnRdR5DHtUWRf",
  "key17": "221Md9e6Bp4K9YDJFpNWK3JMuwaaRjUYTSJKU7phg8f5YBqbVHEE9fdYdSgEXDJm85mBpg666Qw5TRH25ugVcHgM",
  "key18": "2m4d1B9iycxuhGKYTR5G25YvDsqL864uQentWezkaaVRww5QqcWjN5gufZooHTxGxZw2M6oic6rWHESsL5mte351",
  "key19": "4QH2SU62JixMp5A729eYezxuMsn9iy6YbfhpEqDCdnTAFDVB1rhdfZDKX2CGA7o1GzZeiDR5dU8CQe7ZLkmxFzZT",
  "key20": "2NqKdoNovucavM4MuXKE36G4oWa7di5sjHUQeJtmjVGaVf1R14HErDLRfTgZ3cjLkn3T15eAJf1wGUUCyJdpduQW",
  "key21": "3mbDafMWgH3C86SuHooyPnybjbg5NM5Z7ks7krHyDKmFsfBXFEhrw3Nte8GF9rhPuciYNPtfie2Khr13yx3dpQ7F",
  "key22": "2CPSXwGUsZrWtEhgm2afzvgKLFoUWNWaGGHj68jhqXdFi9areMgYfGZT5KUANBVAf2EgJBmsgHRbpQnRNcS9c3Qn",
  "key23": "jrFV5ciEsc8NNziKVVK9GjD9JKG6vHokgZMa78brpjbagibFUALzzsWU2gRzcziSWzkRGL5gqmdeSmWTUycS44o",
  "key24": "52mujbb3zdX9pmceFi95L24k98rJNMp9nEJoBp992Ry5s5SPTCTM7J2csjWJB43qKvMACcb8iztvoJgUUHvj3Hou",
  "key25": "37ZDWUHWisLFN47VuWeBr3FdmoNAhqKPWqRqkMLmc5LFx2Y2ZKBUJ5mJ4GUsARh8zRZwHAZznqFFuoEPG9FL434F",
  "key26": "3x4vg3QfXT3Dyh6p44pMXmrQT8ZCyrqFpnsoLPW5CAcPZLaAfiTUK5jNfPSCwTZuzeBS1ytZ3QN4YnU1X47a13Kw",
  "key27": "5f6pJNhbtWPfvHesmMaFCrVwVDukS58tuy9vzNDvsJyr96Ki71pQbFbgqgciv2sbLfCghGKihR3dpuUuBUZxDEd",
  "key28": "4P7m6FRbmwZYywZvpmBjPiHg7nkT8WdsoibDCbdhq5XvUwuay3XTN2MLSv5LqGzXqYSKR4HSQJiBiAzxZvDDrr53",
  "key29": "5AH1oJaozwmuEafvaQnWGX4rJoLN2bLmC37TWdrQyviAtAw5HyLmttfX6xxJDbmdBA6wuZiM9KHJyd3WxMr3798q",
  "key30": "4adfKqAwhcQNqngRpgSsTwpZ4RDfWpxqKLQU2hudrZQEaFwnrkgjUotboBRTouHzFkb54MHgYQ1AYxymBFDntjB8",
  "key31": "2byCuPqPcjfZLCFeBTLFhjPfCTrgTz5NG4LsiaEDNkT8yL9q54o92ja5H47a6xPUWqCCnZChVVGoj5HqzCgUiTWp",
  "key32": "4aDYje9pJg3phkhfjuvmVxTDqbFnnDA88MTB4QssNNgKGM7Srg1GyUsnEnGHfW81YRTgyUS78LRuQzyvYpefBRD9",
  "key33": "5ppPx48CCR4VpDz8Fifk2noYp98jqsxThGF8ZtxL2DcqwBmeEXSgjx7y2zZhcnpr4sdubHS19MGjkGjic8oUyT5d",
  "key34": "5tfHLTZ2r19VrDVK8EYy7jEY76eY1drDG9c4CBq1movhQfBiox6UKW5kuPNBkhwLFpwDEHYzq6esZtKFB1eEcsmM",
  "key35": "22bwo8wQ9EgVQsEfi4QmGVb6ueTeA7UYzxc5cjmnpGK3TyDm6RatzcM9Kmh6hHbo1ZS1ZdPh3wA62vj5ca73rRue",
  "key36": "iURY9TnP4g9QdFCYqH1GjtuuY1BCiDhKgiaYAvp3MPH67uLd1UmfybeMLDCtZuGK1rGj4r6dqMWmcmwTz93b1jo",
  "key37": "4qn79YaHtjDaAhZV9weAVYNJR44ojai22DZFFVZJtxcrS2HTNnKEWQaoRs6f5LZ1Pqm9w1Wu5ZXL6t8KfxUpGyso",
  "key38": "2YTHrbZF4AHiVX26zmDcxRa8GwkuDwiN2pe7gmJuWdBywogyHRSMZzUaSCZ16wrws8UQ7qfyWo2Y1qBHreELiWVK",
  "key39": "TSAghMqnKiwE8zkPedtbQcMoKNsvoUWmejauRJ69rZCKQxp7qVFUBeHCtFHL6WQhzGrPSryZF7EgC5Xj6SDDyKw",
  "key40": "4yucnnCQxZa2jQ9jWnmtnAFVgGoDTrgK9PNWAM99mLry3SMV5DXTZxFCwvjVcxTgtjDZuYyac87gLS5iAso7Nmow",
  "key41": "3Hgqc6mYJ7Pc9sq3EWM3SaXGhghxFQr6gNtYJjQoeUNhMqZzbTSysi8oN541ArYRhvysiT89W6DEeokmpaak1Hou",
  "key42": "4nSPa6XswwBfiyzbVM46G457AFWxSvXTLLXggkEjSAvPEgA9zDnjKXivAkjFvpnuVSEa41HuZ8bkokygeB4b6Cq2",
  "key43": "3sUHgqiDKgeULaVVfdV9XCkrhWVHZNstaJVkmeFXBh7AGKR6C5XQMaXoDf9xanJ7Wq4WbPJcHkCb7rJzVj7vMqBU",
  "key44": "5fXg3NmWeSVXToxx9SwQC5snmeycyLiteCE5wCGSugsrpAA1hq6L8ik2n53RoidDABiFE1dXo3BE3jG9ozLodFJK",
  "key45": "3nWH7thMyvm428Kk2jkXDJSXAtNSg3WpMvVcTd6SUfBBGKto7ewiV6LNjuQCiw5hzwHSNpZMEM5NA4Jfo5pAceVX",
  "key46": "2Z2txQiqu5GnHXxera1C3YuATmJExvqe2kVHBinCRewpgMUqfnbuBrjjkitxD3cebRrGwsNZymKBuHB6QJUq2wGB",
  "key47": "6iqsitwQhJeRqjo5B7N8nz4o1TzfBSJNmyzdxku7uqjDPtNdjHMz6eAFnnoTVjMrF3VyQ1Ebz7SGRjr3YquFhhr",
  "key48": "61SbHU2D1fmy4w7D4B8jDdA5KvELW2wfc7SW8RiHgqmhkwMAW16jCqku4x2XaD6YhkR6drM5XBaR6QwefBm6Epws",
  "key49": "5Tcc2WXUPAqFfVDTkRi3uKwhCafpEwc6eN1uThxqhZnv4fksXZ6iSG9aVH976kC5mf6MqnzyaLCAiWCxLkB9XJtC"
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
