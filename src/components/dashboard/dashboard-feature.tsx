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
    "4ut7fmRWjkS4Vv6EgKQRA3rfwnXBjBA8Tbq5SPxijuAHhDU14ycjyjFUcm3VkSGb6QMYTzj8koMNyoYdjbgT2i1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fhFp6Q6qBvj8wKee6XgrVKfTJ2SV4RrhZsB5cgJNHjXB2KHpZRyDNhnPhtzpwGDysZaLx4UUaahCKzxLoFQaAw4",
  "key1": "Ueo5zrHVa2pgs17bHNFjaT9NSFDx4cjqp8J4WnH4f7j5BQq8qeZ2rgdHkQtD1zAMh8Gt4zVCHaN8HrTcyUdXekE",
  "key2": "4sLFWUxyLsTjbH1cJVaYQBLJLu5LJuAa5nAWtmPgRWbFhZSY4xtgh9a89LPgR9EUhZ6SsUt3iynZ8fjLnKPKugc2",
  "key3": "3sCWssHsWL7MSG9nn8jkytokNBiTeyx1AU76dzNDrJEgbuffjP7BTHUvC7ERR3gJY1VCUTARF51SEcBV7oYVBzsY",
  "key4": "5iTwubiUwknAKcAC4JK5gyxyMUZCgxvuXTtMJe8gUnM5StjbTWwxC2cq1XSRSC9BmPYa6Ru76jAcXZ4wUsrCEzjM",
  "key5": "3jBJNCi44wLM9M1nnu3gYeWgrwMMANRgTHNPN8gH714E75AxEBafhjSca34xVXLy6xYSBWDYeJY3V9RikvH65xeY",
  "key6": "53pAdKgvNZYX3RXvge6dqMBTpNRjstLaD4XbwKrP1ML9qAR5n38CV1BUVyRGCYYDPbETkbf5UJkJbwZu5S4pXMa5",
  "key7": "8Z1YPVUH68HJHetuybhBsjw9aVoanDsLawCbsrK5exzfiN6AsjiVboYndcgcBZo5a5rhLqv9eRH2FTtuUUfpjXV",
  "key8": "4vGsYnFmRxUm8XxUnWz4ZTCvPqCBbe6Go2trQJFcWzjQ9Vtigngmo3iebNuPPiAXkFwmbF71jZgkD4LH7ZADbryn",
  "key9": "4K27Kx9JU2NskoJkuJ7zmy6cZGgtmKiECnLCepK6TtGoNWW9pDcWSXesQ1SSTv4WkKGAdWQhLghx3TjwuhxvPSM7",
  "key10": "35bEXYhFjQL8388BKAkDQgDaywfgzRWoij5LDQeu3wnb246mC1Vns9dgdKWZAgtk2L8AyAAy9WK8Q8AuczP2cek5",
  "key11": "45qTFQseTh6UYBmDBMnrNnMxepZ3SiHZFJv6ZpGJEawZr5sDizDgTQ5N5StpA55BM8U6wUz3YkCx5N6dz7LNoWBa",
  "key12": "2P75h8dPzZMJp6DSXXrK6ieUsS2tc8zbpxbp2BCz57vfxBCyFWzg8axJ2xRhi757w4ovAyXJWXfQaJPcuh5C3AmZ",
  "key13": "2z9bvVbNjm5CN3DGSaDG1jXCP6bYwJ2PRP2WtbzJ427jMVivNCEib1dPzcMzpz9zYkNHXSMAzSkJePrbYoJmSWgJ",
  "key14": "42DvGV7Wt4CfkEqJAMWKRTbdY58aL2DCRktWWPAP71qmoU1fjcTLnyrsFQ7XMJTwgeRkuT8QCm4REAb9Z7LxssMK",
  "key15": "2QDdMjdSL8vBp8THBTCwyp88YxbApdm58fM2WuXKeX8xowVzeLCw89Je5FZ2ekuT9K7QRTBo9R7AC4QRbFLTgfxB",
  "key16": "3ZcbYbvqfLEywY9SCrziX21x7Z5zGsYoMaEBeecZh5cHHXkR1di6g7wtYTvLdUHwRaDAB2BiVRtw7KKA1NZRfGYr",
  "key17": "4Sv41K1X8ff8sWWkMD2khSEZvdx1g99juqBSvKEJxD1hunvhEaRpe2i6waLNR8gr8Ypt1wSdbfSFJy4zN5oYJJHu",
  "key18": "jAkiBUAoqWfwtL5Zaja9RjfugvdkQnq2xAkjxJNkXEPnsodPZL3fubEjsM8URuqbEgZDeHGKh3cccgN2ykFPBDz",
  "key19": "4pd31QauZsxYFKSjEYVi9uwJoFyn9GqGtCnvohwXRPrnSLRyxQj7XTCzJoUiMnp1aRQvPuQZ3AiZvmfwp7uyPAXp",
  "key20": "5MTYM2MaPh1iNhabFfVsYkQXmytBXd2o27mo4y84VbsApot15Wy67MWkkcUTN4Uph9Wx8a9geTRLUhGWDoiCFiri",
  "key21": "28vTeL7DzYuEG8uXMUThEZCjrBMxBv4gciHWj5xRj1vEteP7e168P4NtapsmGnU34iesjMiLkKYtdaGKeMV97DLs",
  "key22": "4unrYkuDCjycFPEtPGSYRWh5V5x74EDzxdkf78W4UrVkvKN3QGvBnTZ4RyKJSgsiBfkVxUAmf4Z3MahvfnS84HHK",
  "key23": "2WMdQKDTCihAPBZLXm1iysMspmJdS6gZdXmXUKNE5QKG63nruuDFTZsUsmY6dB1ukqX6rew8rEAL9Le836MBZmJk",
  "key24": "5Winzpco2wH2CsoyP5E6WX8o7JKLqb5k1MYJERmbr6waGrzK2TKKpDQP7vKtapQ44gZgG89Qny2BoJmN2UviN98s",
  "key25": "4DM7jAiKgCAk1NMGYL3mGv1SDWCnjL8WDDJREUFPiCSAGKuidUPhHPWPkA9HJZowhzCNRdgLZiGHiA6SxojCEMrP",
  "key26": "5mZzHH9T1MxSHTjWkT6ZDYYqYQwJrKmDJxHiFcsqVS5coi118wyh1dYxp1VhDgvevn9KEdFSWSFWupAWrJgqnPt2",
  "key27": "2UPQsGXCysGoznP9o56diNKgsjEZTgSBeMWADRFoiwYcMqS5hzwHhY3jTK7WCzPqyKMbLhUFgJbqjB96Wms34bC2",
  "key28": "2mvQ41t4QxfV7dmgTG3Ft78jhKNEJiK1q8jrHtNzhmHbyGNBUAEeWQ4wddGbSroGrZhfznm1pgwsGQnpephNapnz",
  "key29": "wYRTY99XjFacnV1e1mpy6uf24Un2Q4e8ghSN5t38YshH7dbkSEqRYKrsYr6WywTfpRRG47GYScBLNDj49dWpoPN",
  "key30": "5PYooNtGbf5whMSKG8zeD5vWS9zeNQjdTKeVpVRmjQxMFCAnqrTCmCYweNXMYuueBXDXuPNMYDVv7McUG45B44b4",
  "key31": "3o98e6XYsJocSm7hbJCWhG6XhhfsaMSNRkPkt8XuhRH86q4aB89ac5utVHFJuZr3X9TnNnJNdvnX59e1R5d3GYT4",
  "key32": "5bMthMz2PPSLrHkGupqviKzayrHBxJ63DN46MWFPnA8mrjNfJGqpxJh6PQXvSAqA8zbwa3YCEPB5RZJ2Q2FUsX3A",
  "key33": "SUCz7f41V5LL49muWntHywUXThAfGeKVoAJz1giimxXCgAejYe2diZgYsJNBdGffMSqrKNDy6SsCTpBoGRzS139",
  "key34": "3RbetiL6Nx85vbwg7KhkJwH7t4JqikYJN55DRodaLyXQsSa2vMtgih97THsuUEjHM8cJuYuJwpkd735BJF1iyaFk",
  "key35": "22Q1c52sgQtFDDMAkA8FA3pf5KQruwVtdbGsiVa3yww221VKuhwYQc1QaDRKCoD3WwgNzmGJGSK5iqDQUdaVj9ZC",
  "key36": "MEr5vdqQcPHxxLLFF2pCoNKMwrdKNAYsxgHjCZ3QXQRhkjSrCe3fRFedrwvn4EPCrt17A9TAt5Dh3GvXCAMBJYR",
  "key37": "5JofJ7uibya1BV3aLgT8B5Vv9FHJ2SfV6kd4tp7oEzPduGjCv6pDGjgKVgNzpcZcEpQxF6LKaDCZCvpxpkQLQEX1",
  "key38": "2Y6X5yrSY9TWPWieDRdNeTGkVrLotj1MuzPadcsoMWB8FQtGhK1zeuPsMyn4nPAq3dniZsLPAYS3fMEqybTNrcde",
  "key39": "trkPh46FGpuRXyEuLpp3XmbU3agLS3GiMtadPRrP3eKTL7o8KVRnmKYgCtDdqcm65XS2MdDaxkXoLRhtrGu2ixd",
  "key40": "5snYRJd5E1KwxmN5ANMrby5LLmVnjB4xqBdGc6itKPEMuXsYNtjDSk83uEBfwxqPMezQDVizo3Vd5AXqVno8wwtp",
  "key41": "2ujwF5onDExfJpgtFtnyQMzCK6nxWfTtMomQ1fjYTgPZQKqwPV75peLyBWft3FVVPF5ZWDdFPnwFZ5mawoS2NLn2",
  "key42": "45vTyBxToyiPKKjM358XSxsiz5mZUNTUJT3krxjy9Yui7qs2CYhdgGaHUfJ6W12gB81KhSyaVNK358tS6Dd8JVGr",
  "key43": "4ALDzccziy3hH6yhdrtFrwRenuLsxsBr2Fzu6SskL4AsDyZodiWkr6SXQwKGaC9dLP5k2EC3sB3Ag5EWQ8ZTy35A",
  "key44": "5UJ451asK1399t2zGkSFPTK1EmVd6a7LbNJgV3cA77NuabX6iJLow4V43Qj32kiqnDh39S7SSDHGuZaSfsPJBCCa",
  "key45": "5q7iMh392bCfmrapYphj7E11irB23idXuy1KZwLkJjYTLyih4UgBvKXRqorJEbFEAtGZwuuww9LhYjGSBV4CtDXk",
  "key46": "2svDYXnMBhUzWMAZRRpy4sXbETnDxQE26tqTS6DNcMNCbViLDYAv9EWhG58G7rca8BBuU6oib4Bnn5hQ9p2HNChG",
  "key47": "3Jd2oHb6CMfRS2yxTq93n6MVmvMuVUp5Ef2wZTKmT4J97YVfNSjE3bpxXuQbt3NJhRm5WRbPXjv2Prbxbz17Wed9",
  "key48": "2cnu4hBbBr1hXHWTozZtVAsaCqqCSswUA4MRf7P1iVvovj6MR5B16SsrGVQYkGJJrQXvwWHC6ti3uapNohHnB1a7",
  "key49": "4M3doToLHnVgnXowk1s4hyad8X2hwzkn23n69Kr37D9CQhP3BSkwUKAb6u4YQqHM2pyQE9jAXpEzyL1oz5s4hQrF"
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
