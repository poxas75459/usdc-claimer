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
    "443U2b3Q984AFJXs1A4Xj1MZyx182zGYmCf9tPQBdbHukuwdQ1FcabEbcqrTbUBZhjyHoSH5ChJvtJUf1ajgZ4qR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BUECAcCa6fYtVb8dVoBAukzX4QmoGPvBBKac6rRDNwWU1o7Xezy8NKDnebWjDkAo5gQksTV98ntFJF1CRpGvw9P",
  "key1": "4YkCCubLnkdBTZkU7dZxjcDANJUYZGwq1ekCdCojhGF3HURv1ULhzYHpPgsXLMEoGR4hCJ2BbhdZeKQYEriCPAnZ",
  "key2": "2Zv61ZWhhdcwQdiaDkwPeKXjXNVv9irXYQp88rP5HXyHyzqSFohst28K1uhcmHYDGp9tt2xSHsgVTm6hSWPJokmq",
  "key3": "4HqLMUBLxsMvDNvNHHP2En7xtZCWKbvzP2oHAGsgZGGgTAvMtFEox58SMcqdYybEdg2tYwnF7G4h43KzVt6tJLhF",
  "key4": "28XXr5ohYbiRGCYb3S2cJfp1ynAsRaPtsaFSu4VCF53tKrbRs2oAjAJecn9WeBRn7g9dXWXeqAs4j84xjZmiT5DZ",
  "key5": "5gdE4w7WBphvbPN7eHhqDFNSzGsqTDWWV8tjvsSaUdfukiwJerKKsMtjJHkSsRQum49DTRL6BiE3FBsGnc4FbRyG",
  "key6": "3BvQgN9jTbwvP1D4TQ8GmzU8nbSM5iizYw4dSRk4zbzgFxDAPAk7VpQJSz7sL9rsMTRQcN6wR475eFB2qQ3MoczP",
  "key7": "39TmUNWCiSWD7mwranWsrjknL4PRrHbxVtFM6FckVpaMAviCDm4ZQ7PRaZ9STh4TWjykbtgG7Cidx6HMjJ5krepi",
  "key8": "5FQyt3JU1k25qsQRDc7CDknQ9J3QuQo2dDj6Wga7mX2RPoBhSohf1Tpbm1F86hMqGv7Ls46eWdDd8F2o7ADAiJmf",
  "key9": "5FQRWrTcpNCYQxLsfFK6QQ4r1Qk7CtLjiT8s8Vuv9Xnm6aPbYjQ6HHsJyojXVgVejbNXwqGB5nEreXZUxyBWohrs",
  "key10": "67hWWEfRUo6SGkraL18ePC5h8kaG1k4G8ZpiosYAL2R1WY8tJy4bTVWyttDWMgYzYH7ijAP4zDh7kLbp8VWLs357",
  "key11": "2dyYJHuNgNZgr5CWnxvrNmvWHpfz77ds2zNBXP4g1x7Ds6XNEgS9byrqxQeE68E2LsmAtYcMBYE1kKMDgnYMnCC5",
  "key12": "tRDwRMrmZyTCGSC9kJfP7wmdcMwgS1WxsCSsT7cjZ3uT2s8JZHUX7TDm85H6koMJ36D4EabZtbndPaxjrHQ5hFy",
  "key13": "jVybLCyVy38447LAEedDCfZbAPASG1rz9j2N22teVPaQJvvmDH94Eos8tkmaW99ug9JWw8iwD6u76s28fAtsPb8",
  "key14": "2FoAhn4nwmHwKnev8F3khaawnLAXSrajhrEqSsAcrKddZHQCcoh91nmP2TYhr92d9hzpvTvZ8zPpzkcaLSiepYX8",
  "key15": "4dYpySKHfZySJ2rqWnSzrSFPZr6FBQpJQcuDKE3Fsqgn8qEVspDSFETvKbbeyJDRThPzZwRv9sxce4uUcbhLkbJr",
  "key16": "28PwtKHbpNSKaBqZ7e9BbRL7h3Gz3hS8hUXvc9JdKUUsyArvq2D4QfHm2RDmjpsbZiGqLFaom6CuocxDVDfuHSAu",
  "key17": "4rU9haH7ogc775PcUHpbaRi2THRuszrswqZHa1LjE2UFiJ7HrGtWw9FBMMyfzCe6p7jCkrNo55nhNraZbxGKeJWT",
  "key18": "4F5dHV5uFkHk2FTuWTYgSb5TX9vmwsim5MnYXx9peud4ShyvTGXBkewWgufbGSDVngUfDgnAhnwm2J71ZfHfGEJa",
  "key19": "2mkg295m5AAtZuxDUpoctz8DzLXKkoCgT4pE7es8LnacgKZsuBXDjQeoLofEHZoPCpLPNBYszpGiu1rWDfijn3JH",
  "key20": "4PLjXCk55WFtRNweBroHLEvvvyyS2ZVEwpeCXEeCRsK2rCRRrYoQkmoz9p6o34LWZfSpikgGda6yhhU1zBHMmqYn",
  "key21": "4WPPbL821us8k7fxZtovy6r5VjYAkwZNN467TQZnyshwt4vcp4m5B6WyoA5cxyL8fht4QG3vcBgZaJwHkFRq9wKM",
  "key22": "5vhWHVEsBYRSUcWCbTsYxYPHBd8FRfF4PxD2iDn6kUyccEA8WfHL19wsXY6rAVjjEJvrx7UAJCW93b8LmdvjgCrS",
  "key23": "m4tQLuuexF3quw7LV9cE159daAbJTxUKo7j8yopRQtdAdEvzxCM9Vi4htavNwYcMXtob98Rdmu5c1Mk6SXG6HMb",
  "key24": "2Sgm7AFZByHkq735Ps7ASrDX11TPuxdW6KqSits7HMqrsp3WCoUpNMz8SmC8GyiD2FqH5orZRTxmHobD3JKPo6Mt",
  "key25": "67hBfRMJRyeL5jM2FPmH4YSQXWSsrE66niiRw1gGjXKmSZ5tLxn1VPzUzcd9e9Q2a7qrVP9ZP35aSYFRhoYJ4sff",
  "key26": "4JKKnBU8xQ6CH72qGqfmwYr1M1vF9vfELbhUHCKKnGBEJsBcvXjkhfqXFhQbKbUrpWCCqQMtb7CnRqDi9PXcgiAb",
  "key27": "4gbZsiaiHFr3cxvUUEPaoapLNK1iGiBWwpSuoBBmi6BF6GzmJ3pGPA4KRrwAn1bToNjzyTVgswnMJDGdXfTph8eV",
  "key28": "2e9ByUagHEqx39y3MDmDo54ThJy425eFENquF9jNHAzZYXBEYzJUyvb4q4qrkL93JSRgRT3wea3mTTxJpaRw1yqP",
  "key29": "4RVoy6P7X3tsNLgxCinvXg45ut2iGHNubrNbV8MWxV8cmpbrjNrjkkNARNXYpazGYwCY4SvuA4q6A3DWppafa3jJ",
  "key30": "26TynEyBvKS9MhZT1wJuDRpkK2m8iTTKDqJHvvtkhGD9XjsUGkjHdnJLbobKFAxb337LhwXibMeBh27hXE3a6VJW",
  "key31": "474KoZMze6mpvFUK6bvtGJ28a4tZ1R1bYJfHc8D7LXEn5YBYFUTGWWXWVwCCAggGtYq8SCx6sKAfFKrZs7Tgu38n",
  "key32": "czKUdior9QqE9PPqXWsMX9Qq1E5CqXVjJYZ273dF8L8j4ymdHQPaRjE8ycx9Kr66ueaaF4xcLAuaCReutHn8GAM",
  "key33": "35XgagPjppyV6rTJPsrZiCFupD6F7F9W5F5q9pmvif5CycSBrMCPNvGvV7SkXkqS42yC8JRG8dMAGDdSGLCGasZc",
  "key34": "5dmJ7ChxXTCxbGcJMhPMMHg9GnDT2FTaQjRhYJx63vis3R9EwNsJcWKCQs5jaqz6tZThEEsCGs8BXRrdvkHm3N5q",
  "key35": "5qnJmd6YY1VhHkUmNkPJVY4fosS8fgaxGrLQYu8LRb9J9wGUCzhBJz2L8Ni6vXmrwr9caDgEQFENYyPH8ASRgw12",
  "key36": "2FsejcVGE1D9wf1EW1NRao9DVwtReKaK8qbeBKHjSKj4W7nB32BFEHEfbtMtcMakfyq5ZXDh1WKESA3AymD1d8c2",
  "key37": "4qv4dBbUhEfKKbJ3UfhmBkx4onXHtTHhkS2EPSUuJBXrtCoCrQj3muqd3anhm4z5NcZ5JZ8N6KwzBigHRayupwWd",
  "key38": "4Z7BLWLJy9D5JfNydY8x259Ywmv7HFZMVgVmjhY7fpFwbJvwqbDbpjcTdsft5TPFZUh12Q8D6GJmFjxQ5KnEXuLz",
  "key39": "2XgS1JEa1Vf8N46PmP2xgDNMQaQh87ZUG9M9SAzsMztLJAqDCHv1QZyubqYHqWFsafW8rT5yKrAQzBeEh5zUzwuL",
  "key40": "5GaqXqKNatJpxb8NYAEZKwxkmgtCcjqoZrswoaVfpL5T4zcFTyYKcNm4iKUafRxPTgbG9uWoiXUrnWhGZuV3eqsw",
  "key41": "5RZSMMFWnW4mL1zrmjum4EJrwB6VGMiVqQPu6BAtR53K4qjZ2TtfbJGioDhGcYbJEG82vZomgFDLeQfxfCrCnpi",
  "key42": "43g817HMgc9nPmTeTCj1rz1TTCUfrd8ZgVxPLvXi4gmeZ8diHn9iAyryYBA4zECZcp9sSKsy1eyZPov6tZFHWchv",
  "key43": "ExDrQFGVfwDsxBz7Lixoh4YvXX3S8LT2oMHAoepDEdcYG4E6SRE7UKioXnTDXLeqwpu1nq8xmsrF569jgmLjR94"
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
