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
    "4U3jSUJRy8xVcwG9xurHTuSw8Qc1JiTbzUq16upHePwbHvw68gykcd8ZPP4UUh2MyLCdMffZPmJxRsn9p6WkDUaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56dFWGzMCijoZZhjaAVuANdVX3RTpH9wCW89SrRqrP258yBSDPG1kMbrYeiSYfdmKHoeB8mKfqcJFE8q74m9rNsd",
  "key1": "2NQencWTKCtQFHMBnhyfSPa35bR5xtsVS4mXQ52UjP2zyaxHH87CfFN7Czc5abc4NAmqoSGEinHiddHkN6gWqBUS",
  "key2": "3Ln2ibQUkyJF4RZpTyNMXg6zm3iHut7FiciAJ4Tdp1Jf9iboc8tDU6vY7ZjoNTAAvVXacHiUrrU2Lnf3wnNQLnwg",
  "key3": "5XXypUBVLRFLmVjkSXN29Jdtc55DP2nMhVMmfj9jH5HpgSzDotJ9vGstFtHrZE35saztrNgFY9M2Mfandbi6pno6",
  "key4": "57RJqRYaBkGeoV2n3KiqLdyHvZ3DXVNgPoHNwHybMYjqMddzQreogaxTTt3VDd1R337aLs6wQoENFtDqrtkiRVch",
  "key5": "23RHPa5WXwtbiL2b9c4eYTm2Pa8t5xqKkPnDxtBc3eoFnXxpFbeGDx1UH5NgRmAAJhm6jEPG4Mho3h56j1M6ZXeg",
  "key6": "5fShnwregiqVvrCY5t5Pp3uXATcHXpXGA9WzJfENQVeJ97xeYrXtf6UpUm7hFVjPQKRzjC1VYDrfpjpMzQNQJC5n",
  "key7": "4ydqYMeKQAPYG3ovupSvkiFwgL4cRwMt6cg3TJRdfQ8kKShJEHZ749eTFtBe1LsL8x1o5HDZEpZ9kqmMAG7FJSpg",
  "key8": "4ydnnG9BDouZLUPxnypene6wPmqhQdqEh54WrvnCUGRnwf1A8wrgKbBZdafnoBxbo187UzJpGmFFsyUJub5w65vv",
  "key9": "52buqbheb5knU2hVeWCqbF2H5RhecKkgFR9oixkNMywpD48f7zUozisvxKNTC2UYdbkuFTw8pFqN7TvtMKQ1cit5",
  "key10": "ByZ8EECxgpyecboAWJnWxC6wWyzqnTNzNpDd1uzF7BzjVY8DzW7zFtEf2GwEqmH7w5ttP2aWzkHjSBDwPZKeyAA",
  "key11": "EYRYFVsA53efoAWYkjqVcT1NwHKtmK2okx5Ua8MvbBaR1ZK78RP9dM1QrgyNysQEDFENLTo6ukTBx8M32Y4b4GZ",
  "key12": "3BpDBZn1x2GstSC2bhZZcJdhXKxX66CjNZ6tNhREcgUSDLiRm7WLbgYDjHEwYekKaRNkjFpXYK7hNyT8ma1b8Hwa",
  "key13": "5GX6Qvb4qADtSjrxRgWv5j4XcHk98wYkboZ9ebEXU1CH6p2vYne3tC4b8METzgTe6CtrBkuBynbyyT3YazCtrdT",
  "key14": "4JfHVCqPaJzs2fKAupSpMLantN5LrTuws5ea28s3Zjv97Sa2rc2eocdxY8BPqLF1QCzJvY9tXq8RJCbh84n75x7G",
  "key15": "2d8sWXV1fKRq8CCijdHsu3Dx3Vb8AViQ1LYmUyo3BAfWx43yCxKtR492SxEsd6NKH8Rev48KF6dNgYg5Y6BuD1F7",
  "key16": "27qXu6i5pKMbqZBbmRHAxAJ8eiasJeQy8joaJ7BXjiLCeuWQ1TkRHp8myXoHfn4vDrHsvoSeGxJkH9NeeKmqseLr",
  "key17": "4aFAHpu5LEgAed9bq6snh6hUNhTtgjz1ZpTtFGwT4RWK7w31GHn1vr4b78R4nDQtJ2VeD3iavysv6cUo6AA46jGr",
  "key18": "5FLzPw6KHxuVJ41YNtVHp88vbZF7VhqY2CRbKq4tQdoxP2hFvekXSNVhm5ZCdDFcyCt2kp6vhZYRRa9734hJnKFk",
  "key19": "og52wpd1QjrdmHmWAAq9ngu4xMQjx5xrcLzLuYqyjNVWUBvc4Nwy5nUiZhxxWCUhrHAUcg2rMDSHgBjRmZRwCnz",
  "key20": "5BmaQEmkbacqtPN6XTigeJWEJSkTM1qeCQyrurHEBsUwMhvqFsSzCYiyP79V6FsRVBS6uTmRkzLPpjedgzg8XMyp",
  "key21": "2VgvZntg4HimuoNMPdk6nW6yj7KPysGqUWga6LGj4jBXPwojEkTXVmAbzscYfEShFTVFAK413EDKKwvLREjDkAs4",
  "key22": "2coge5K6LaTkDTuHqo9zj3R4jejZFK387jz6x2EfboNfmtcoZQfMzsMuPLhwbpCjcDG1TP7PwnRxPg76HBysQ7PL",
  "key23": "3CfnWT8UHtDpq9PMP3sw2vC3vw8EYQa77hUiLrCz6BGfKwT4jtVKkTgohj8PAAGjZASAjDT9AFYYCNCgwcdSDkxu",
  "key24": "4tqZTtzNrhnrv4Rhpixn6fKfYhtc4tDsGVyALdmCjA8tPzU6okHCCKaHwBeLzdrASQu4n8Peh2ic7Bx81XxPHoQi",
  "key25": "3DbJCBnF7Exus5SarfhT6priEwZNzrytd4x7pLzejp1hX8GbAL7cGNFZzcheErq8hN4fQPi55Z9GTMbDbrT3tiY5",
  "key26": "37ESkeAdbihN4LKUkPjy9r8d5xzgMmBaVVpHrk3KzCQqWxsApTSXbuzHF5UPENDVAUWRPHwaNTjDaGn52HM7XTTH",
  "key27": "y5b2smqmw6bnk7fgJTs7jAy1ozUWFSc9jjTMfGagVeVkVqTLFjoWUES9mc7cn2HSfYkXK2rznfr4ufedkWGht6p",
  "key28": "3ar8J6cpbpfUtMZyTNHxBcAg4WV48qcRfjWFxGNtz73kJVbgXKPDDn1QCP5RqERe5LwGQdTXzwxSMLnDHzR939rm",
  "key29": "4gW1m9Lkt4ei3tt9cDU1TM2ntXYVASg1uNYLcpC75BhitEA8fakcQKhB7akS3V6Znq3DdSChoLLuERLe6yEmPKUZ",
  "key30": "4BEgSCkmTtwGVrq8JtoMzteJnMYbxjKipZDd9StH4EPizhM2aDvAuUEFeXmZHfPXYF8SW3ozagCwnpZ3f9LqFcrW",
  "key31": "4NSWd68CUNsGAZcahx3AmwvhPk7R7TanC4XvLXymYd12UTv93GV4jmRiWCgAseoKWSyDjVRbJ7Mn8noekMhiqvPM",
  "key32": "2ACz5kWg2PLMSb7QonVpgSJJZQ56t83FcuuASc3itNQS5sJgPn8zwDkAUGMC1LTPzCHTnTG9wLT1Ug7tuRmnYeCR",
  "key33": "2gEFus2exL7PJtNteMk7jXbQJ7QmBQcACRfiTagFC1KSqUM8KgLRpGKb2gb3Ua3fKGxNPwfwxfMdVbH7MKQhAhWU",
  "key34": "5BvFkENm2532GuNusCbrFXVMdW891pzzgjBgWdYJXNuDqs8AtvUMJkhrP4rt82VZ5Q7QHZvXLqCWckBx5snnFD6T",
  "key35": "zsBbBtg8bLU8R1R7SRVN1RhGafSwowTQkYsqeCLgZtuwhNCPGZDpZmysnH9tkfaftjoofh4wfmLxvg5mHjVUGWV",
  "key36": "5mXBkTR5Tn3VxWipbVp297KQi7mDtYcq1vUmKkRCKpWUR8YX3KsNzhRbPjG2SHkRT3KGsXVBXCTZsWN3dLub3ZUs",
  "key37": "4H93NxqmSUhxscsj7SWwovYwULaNnEffN6Aq2ioJCX3tkkVJFouUHauNstGBcyXqv5ateBzCdaYNMbu8wB2CBZEL",
  "key38": "2peH7vuJnMQru2jGEj1A8FEGrNx2eVasAYCNRZsQXeiuLPizbFWSpRAU6FZL1vvJB7GednHdav9AhMHJyH2mRWtQ",
  "key39": "3Wm4QwbqAUfQxc3nvaqW61iuwpUr42VdWQB88LrBC5eF37HQaDTH3ANaUUghfvDLy8jTpFV2zefEv77q1ECHaaYn",
  "key40": "3qyu4ZDUGka4VZsTVLo6mRDKfN76HL3UoG88yaeJ8STdu1HYEKActPgsAcq4qjvgfj2sEfSkkQxvUNbjSQABjrHb",
  "key41": "3nnH4La35KMw3ZdyoQExp4unNKhxnv1qfDzufNqf6JwsprgeJcH2UDGZkAXWmv114WoogcxXwCmxESb5gSN8vCQp",
  "key42": "61VCARXAPZBxRbGNLBisDrRkZsR7J4pCUxcAPzETXKccrd6ZxU1EwUmPh3wySngB7ykPf4bJ7fckwk4HbuX18SXu",
  "key43": "Tc8LQJKmEmFb6dksstWLCBL7mogYtLLQcrrYVaiMMKXzCASVw9WuCdMkVQRkGZDazR5jfqX8ZzUzndzkmUGMAzR"
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
