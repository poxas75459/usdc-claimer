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
    "5d4RnkMgBr9o1CFLzNJ5EHrSnqNBeZNAtFk5eySRAZnsghBwYdwXrrLW7FWM7BYthQQEwWwvQRqwMy9vc3D2YQzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67awip91ZPVqVDwG4MoNk7rWwoWLqCU67xEJGPHQRCz3KKRvzSvwTHrxJHEJo22Q4jLnkwzyUddsYPkm7Ua4483Y",
  "key1": "56RnutEsKExwUEzWh8imqFrkn5mR66GELGpAALweSf9uyoJ2C2kra9yvmeK57bRkTiF9aFRdKsYVkyvkgNku6PBU",
  "key2": "3qhYcs2fV7U7RPDYiePEizdgpz7D2rqVrR9qikDbXuQQhds444yaWM7MUvvtMvTaC2Ta4tkbnBVMJSNd1RqnskGF",
  "key3": "5ZvdGnqUEdDx1dxmuoLGFAbxybnDp3mopBSXDcemy2Zx6y9ms9mjeVo83n8HPe7pjg3FUsEdge5D716QVW9Ej5Ud",
  "key4": "42SiyUEZsgCMQFeSHbxmxfSUvMdZZ9UjpRwn5LCg66HFhtjQ1Xf7k2WVwBGcyr3PJ78ExSkCyXFb4airzhKfYWfS",
  "key5": "UuqgswPHJn1ouZP4F5m36eEmZzH3pJbZkzCCBzFhCnURqXfR83pKsuyqeX3rLdaivMLzebH7DFaWw3G64vWScXy",
  "key6": "4iEoNFMSUxY4VR6PuxfqJpAxydi44qX45fjz4yE8w9yHu4R2sDmmEkNF4682s9EEgdCi2QLhNWTaPWYYANtnAcDa",
  "key7": "3mVza4bTMoX561i3CP6yYvL3tKhDogp98uTXJifNE85PkeEddD8naP2dUvAJTpEVKedcPUgeZx3u975NcJZjNcrh",
  "key8": "4bhtuJijr4i7o5wfU3YCQZkXJLzwRX4CWD9JXViwgx3qTzgETAdQGnqd3r3c68pq8xKgst7NViCUZGUXfBigaUgh",
  "key9": "4g1DdiRnPCY8D5dCqyud835ZWxPEaBdzNA9Mnsr4A8Dqpzv8aKfc5js8gHfQCNegbDyKEDozdhcTU881YfNn6kpt",
  "key10": "XLQi7sXz7ojeiAbg2uotgjN9PLVPF9FJ3LEjHFAch31M95kN5CFXsiv1oe9YC6MLvKroYsv5GiLedr3Dub6GKNA",
  "key11": "4uSKE9N34FzJxYNsB6keSTkrNeCfwJ3GUBrGnPehSzBedpYJdJ8HKFrjLrfbWLoWcwpiDLSbE4LDH7wMmhVsr1d6",
  "key12": "5XiiVLrdALuV4JZtcE5VFeGQptqFgQVoEBhoJrE8rHZiFN7HSw1pFbX2iRQsme8AET3eJsVDvPnEXrTf8bs54o1D",
  "key13": "5MMeEPcEYq2w3uP93PCrCMPk1SQ9MuwoDn8fKmXfWL7NLk9L9wa93MD4vePeXtAnZDzYnCKYJ5X4tHtg612kh1Tp",
  "key14": "CuB1JmFKVCdLQXv7trtxRLaAxT25dZT3dbXzNhJUCy7qbTvTLqUfuTshuVgJRxU95HyGrWZPD77Kz9wLFNHUvG4",
  "key15": "646uRWtuKR12NFSUAZ6oUZrvgvxQVMJATYQEyaRfbcA5kppoRpy5dtdJxeioGqxDmhdwKwMK3L3SAmNioVtnK3Ye",
  "key16": "2hKB9nwxoABSSiNseXMFyhdyobJQtnQxRhNze2btivsWeKdGX2PS999ZpnQy9DdfUnjkmnpzYSkP7Nd6RaaQsc3B",
  "key17": "4aCDKue257BHhCWq6A77WvwYBMZPN2GbS6UmVkBd3m5ZZsoqrJcGz5aAoeGG2VQsEM3URWxzmJgp39bNY1mzL2D9",
  "key18": "4vsAmBbs6tcrK6ErvzSodKyd1z2HExhMxZ7AydNZyS6e1nTgcr955u2j9ZtQVCE6KD3sRjDAhvHEko6DnFEcVicD",
  "key19": "3vbVzi9e4zno5Gxb3oHTJzFMDJaMZeD1i9j5hpwrDGQ9cFCtkzkrX2xdfXmo9KZjuiKGaDAjaoqNx3w2B6xXPQxs",
  "key20": "4Tnmoh16qi4QME1mxSczAQrVWtkVttCqnoJaKqdSN5szkWezD1hHqi1ZhUCgRSunay2rxiJXukPEAbksmhA5uAqy",
  "key21": "5aDrhXqESvw71tzLFWKMkApexbadDg6EWRcS2jCdNUYP7UWEvtD8geask8XZU9cnDr3LJMHrqncBiCPoHpdfyUN3",
  "key22": "5q1xVCFoKsfDmNFAW1i1kAURrjU167tCZNNJJABz1m35RNPW1fRcU3pq36GZM9ezMKCyeLKj5i6oKLj5oiiZQZeM",
  "key23": "61Mr3KjwXxDhBm6Jvj93gi83uZHsLoYngCTXqoajzXecvEjS8n44sKMCpozu9taB4HXYHZ3vESHJi6Dp3BFoPFjY",
  "key24": "3jQ1VBswrT2smz8SGqTqWfowLQiJDB864adJDnfYaP6FfQSgARJUsmRFdiJPsH9ZDA1cJRb6Gi9UUXFqsAoSpGUb",
  "key25": "5deFYRnvw3nhCTPTqzKLVSt4zSneW2mPPSCY8nzvZdosqCrTFSsMQqdtbgZkfxtDLp4EBYhEpqmNoycC7Tq46hsi",
  "key26": "469kpyf59LcaZ8LV3nm8dxPjtJbUmPFaCfkZHNMC5dd2x6tcQsuDNozuDyk1FYGhSKEwiiEhiNrk7Zd5X9RZ4TKF",
  "key27": "66xnNY9SQoB6kkNM7MgM78bwvg5bDnYFHezypiSB6vg7uDEmncGwMaCKBFXtCWyGyqVxgE8i4wsYRcBYK4xBx7iT",
  "key28": "4KVVEeLjQvhsV8sR2HqFLJVyBx4dsLPkTQ2ku4dTUU8JgVNqdHsRmGdQUmCiC3SPZSZUScrEUbyr9suDSHBrWmGd",
  "key29": "2U79xeuFKJV3yQi8nxbMYkAqk3QThuvArgxLi3LMAbmWD4u54JjyXKhm9G44xFPmP8FPhgGfTiqJWSxKRLDLMokp",
  "key30": "UDVGHa4wzkJnnwAaDZscgKfTF21LKRzUFtQFt5b8dKwBZHKpbNu9c3Cgh2zLCMEXYwmhegjnBSbznxwkcL7WJ91",
  "key31": "SKbT4jMiRy76q7R5HL7VDdK5tMSetaJmS3APfnumnX6wQf8kdKi9qVf8iBGtobMpGCQumm9phBZAbjs6jVPZoCE",
  "key32": "4MMvmMx26zzvWy8Ubh1pN1Mic84uBgP7jjVkMeBSqzZPsZPG2CdzkXBKdpPJ16CG63FwcgC32wMSY2Yzx8vRpvrL",
  "key33": "3TyRBwX2U5N5DTYtA6uo7Vr2bxGmjVHwkhQyGwjxFQbjKTSFR3RED1KuGj2fsJZSPsfxbro65QLiNgZCg2W29HAU",
  "key34": "E1Kfcj4T83QgWj4pLS5YJPKgUbPYCzMGWEBXZL5L48gbnLqb2LNJ2qQFV6jLeMGPAqjfCA2cCRgPiZbNH2tuTXt",
  "key35": "5ntGenJKwc1HuzYtFoYwyKaGeVuw29pDxz9q8M8Y2WdxUiFMuDCc3xkQfeaWd4dgFW28QqxBVCGvksoQgL9mGCe4",
  "key36": "2znaLWtpcgyKtnEx1J7vATMDaMn7czwH3FbLPaCxEg4ffFWwPhoGpvRL974xKgjyNHQtPzHUWV4kcbV2CVwGLJaZ",
  "key37": "3SsUqm9FKb8k4gAcQy38SUwoGpTcYLe2sLVagxHAyWR1EsqEx2r58NkMWiGm7PoHgQpEEBujPXuEEuPbdTKHkttB",
  "key38": "2oNKSh5cmLNCBqi9HAFT8jKHmEq2cDMb7uA8F1KYPEKVTh7H89L3h3ocPPCwmmqTvVXV3R4AanQzZRjTiLyNY3mf",
  "key39": "2xZFAPgosHCrthxocvyCYHUdZJS2N7SRjFZA5ZwFJGVXKM787pR3wajRTRgKuLQTuv1yZF1K6CSEMctZMsVgWPQ9",
  "key40": "3ZP1NsGVZTr14rL8BiCtWC9JuLxzpQ8yFJ1V2WSt5SneQsALoymt3rzBbPtPXkxTSUv5LsRY86bRyCTxXmmrouxk",
  "key41": "22DXFjkmxMmQsH23KbsNFXF8FM1wygHYbJjPK6aCok8juHkzngGt6YaTm8FBiDHjJuLrgrNBJrPFcizG2SPdKWR2",
  "key42": "4A64BDAh7Z4cKLKojsK791nef9tckkiSSZqug4p6jByNwL6VgpWGHMJgH8hSWLJujLDaM9F3XsYiQY1CVLsCZ6wF",
  "key43": "4RiGXbyYJxNUQfhZgvXVRbFuAjXPwDjxLJMRUf83TqkMt7cw5VMBzGZDWGn3rnQu7GZJP7jy7CDwFj7EEQmjqUXd",
  "key44": "sYYTVBCZznjSVNPhM2qXaiGmXzHU1VWEe76G26eiQqAkBv2oBAiCmvcFgqgvQBFSUMwYRXd8qTdySgtAE4NFeqP",
  "key45": "5BWLgMUFF6kcMUnAuukLGFq9HctbBRwDpig4rD9xUpcgYdp7dwyzJ73tkpjJQTRCcJYyUXFCZCBkNUJnBse1qXA4"
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
