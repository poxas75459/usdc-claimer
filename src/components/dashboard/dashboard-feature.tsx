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
    "C9CqirtvBqpBu1WVShu33YUWeSiu8NcqSNp9cW1pSF6tB1zhtVmkMBRfFeyS1kXTe29EPbsReai2BirEcUyscMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "269iu9yy1RZBfQX7iz5Xp14nkeTwMcmnmHN77JNoSfFD8pbsQ66EvfwenTC4zdauEz4WySQexQxhD1vhuCEAWFGf",
  "key1": "2mTezt3JBuhds4divfH42gSs9xmn391s3qTiFM1TPtU2EwbRFF4SSZWKtkvQZauuTkgWxwNWATLemGWafCwwVu3q",
  "key2": "3aou9B7cESc3pAePQ4oghKfVnKW6tQS3ELUamKJBF1m425L6981PBhajii9e9P8URZUdkdLZZJp24nEv6U4gQZw4",
  "key3": "2e4rUtLTcq4ckhiKCZfMKwRghFfks2VyFDCDueTD8QszcZKHqf6At4Narvwi1EyEbGhEoRafKYbNVcYUvkZhnNgU",
  "key4": "3BGSQLm9uuJ3wc79CJt2RoUF3n1Lyq9dUkm669s3FJ7UZj7nskwQk5Z1X6GJTiLv4WmtP7QqL4yRJfMdrsYzCcQC",
  "key5": "2jnrsCZU3Fd88KeVTQECMXvSaiYytw5aVRPHbszJMcLER6BkW3LiX1cGDUVp2FZ6PfYpupUxJkuy5zM2SuTLiitW",
  "key6": "2tnXFUSd66Tqu5xmBAis1C7kidRTqPAG17ZPmbry8ZmvZX7LNPPMbi2r4wTBZEfvY2zm7N7jRpDWznvSpECkuqFR",
  "key7": "37r9joUxqyVzzw82jXNf4oJ5oRHD4cqTSfy8TznHwDc4fRo1K6zYswjBoTcAZqcCZLBJkChwsGvGhicHJjKVLMDs",
  "key8": "sW1Gw7jWx7HakRZ1ViDimpYgWLZRU6fLhJX2GaKti9t2GABkyADp1YY8utwK4LxWUAxY3tAyto2nhPzcqvjY8bm",
  "key9": "4juRrrKFUY9TDBSAHZfY4z5PsYbzQspkoocG679yGmNWrmj9yJVx2t83SoFhR4cU1R7Cjk1oihPqFZjAz2TospPc",
  "key10": "29zTpUuyfCFkeCpJ3pFy6qEzVoTpiTwirFk13qZfdrsWYMcBwq3XejUSaFoBa43N2qSsJ4uGDR1USV8oRUT6pcBK",
  "key11": "5XvyZTL2b35gQ9Vwji2wJRm4jrYCBUtyEPoSihJ4TN3YJZ6hKaU9VeDBKayLtEwRNe6uiegFLcuuHk46SLP7E12Z",
  "key12": "4HBPdcpYXCD66ct3cyG3WHmV4R66p1VSfqr8XRVpSjgXQPsJj85Wr2kvD1u5EYUwNE77NaB1kJNjKyGGct7XNLDU",
  "key13": "2Nqbpu5MexfK8AbvymY6fM26AWfShacoVKBp4eNQvs1MsXxHhPvBUj48ypsBiZKbu2rj6QeYn9AfpkR73WvUUppB",
  "key14": "5FdxQarpPig981TAi4mY1wdtKaaRorYLrKdtmVA6ZuDXxnXqKeQNoaYbjBYaUMZ9ebEwSkjVp2YMhzBHtVGvhGkc",
  "key15": "5TFaNLrAus54cK9euBT1buhAxQhWmHBNwKaNP6tv2eTXXysUoTyRc4XQ47uTiRBhRBemU598uWkcXYbLicMDR5fe",
  "key16": "3DxBBi93xvymmoneFTpJ5sg6v4y41EjDsLxzuMSw5XSSKKcbZfZ2cpVMb8YzFEkeAhPPV1s8kfAyR9Sw4yf2VQHA",
  "key17": "3aHjiQMyFNb1JAjxudXSqXd66bDLjLemefSFPSmqGVk2fmaprntTmvv1Pa5WRUV6NGsemWXWTCJFzUKoqjVaPKjj",
  "key18": "3NGapRbjSjc6QhUFMehYu6PcuDt3FzDd7taCR6gmSzgrTCEn7oUjTxQWfk2JgWxddXk7GFKPrZoMkmNKr5U6HSWa",
  "key19": "4Ek3sfdsGKwVfxPuPcjqk8JvV1junKDgh7guMpPqoJ8GD2njMoSBsbtyHD4rF8YRmCscuXPNTCTZYrso2idRcKsA",
  "key20": "43jeEPHn2pWnF8sd53CekCCxh5NZVHapTf1ebWa2iujrkzhMRivyY3RWeVAEtNDLFBeRys1DZUM5pGAkrDhdMLge",
  "key21": "1dDBPKka9jsQUwVp2L4Jg3YZPw7HYXZz1yfBfyFh4itmxFrsWDHtFgUbdXJQJodFTUik33owK7PiEhCvAK1VmvP",
  "key22": "BWuNDft5ZzotR9G7wmdDHdTMPMWAkzVWLa2xw6x45i4apRpzLH9vt3XGdrcHcqryQZRb8NUSVVQLRcyvJ9LXBZy",
  "key23": "4veuqrsyVbjwqSKYdJpsLJ639LWLZdQNAcjP58L5Vq4xwFuPGJMeHp4hbpi5FgeCNeNcTZfjGKBbDKUM6tYUngP3",
  "key24": "8b22Xhevik4xhc8dPwh9kcTSNMiYBzNhGseU3UsFZUTNcjJCxSxT4zY2dqvVr4rsJPVQkaeWhUbDcUh9N8Rzo4p",
  "key25": "25vTnbA3SrT8Te451FHTWwy9tAAZbe1JuUNEDv3668zUq8MmxBTyPAWJoeT7PQgRU7r1PJcAZPFtVRRBcjuHPegJ",
  "key26": "5Bi3c9PmbD6HxzdZcesBNE4xnyJMj2umVqW11p6Qoz1ZfhNuLVGZBJnRHXzVtmFfhKjgdEJkJDmSe17uvtHGpc4",
  "key27": "49CJqTa5GuyhZJhjbAs9WFQux1g4SbmVZeeep6CG2dMg5QivX3e3UsMgeQ43vi4sukmNCQ1NHA5Pq4ERbURkZ5b2",
  "key28": "3pzE6RsU6sGfbki9rHnFyUoW3qGCcW9x2QkS2UeV57VgsPtymVFMxvyB7myitjmpdK1pEDC18imofXoAKJEqXGji",
  "key29": "2m4pwPR3whxDjcg1YAQfpai3zb1ibo2FcSuuDz9PGCnWE9T2pECATHW9SpAPHEDCCgnXnBhmsGAaumpK1Y4jy6Y1",
  "key30": "veJ33jzQHEksRRzjmWXSM2QknwaDaCT44owLjc8QsCUapaUCJzV6Zm5B2Ck5Q4SuSM5kwawsYrmhuyTaUdESB3c",
  "key31": "NANQUGis8br2kC1Ve3HMhceYYVpMfXuHDdNkRFUCmAmKpcJaVfV97grpkbioqio5RrAwadk5HZbBx11Y4Vjptbv",
  "key32": "5HJ8KvtbwwKRhFyNstEZhsvv6j5JRDzPDzDjxcBJogED5R2RnjNkWdiQytQwy5wKNoQ2gwDVWBWbWD4pK6eyStbs",
  "key33": "3Dwsd3gRNN1Bn4bFz5ThcPcBckCP8njGKpNMFBJHRpJfGhiNPw6eYV3fB1PadGUTJBZDG36vdEMYpRaRDSkWokkN",
  "key34": "gvhDozRGCoNLvrVTfcbEjaBtHSnWaUqahnKWUfjZwNXUnRZgLucSsmBEGBy5J8XwGmH9VT7u2YiSWzJqbaWudzu",
  "key35": "9mS1W2QdbfAZdYpkZupfGrKEVgCMRwgm37MyGHUAyEwS2oy7wEffcbMH6Hm7ABfM1YegyCUkXSY1ZncrCfSs1g7",
  "key36": "5r5bdCEkVRhrnyas5eWD6ZjJ7E69XBPuXHtF1WSTeeGvAx2uoiD8jW2DBqCCLXpUdN7mcBs73ztewEeAHW3C8yyk",
  "key37": "5VnkoBp64k6qEg5wD26QVdmKXboDL1rPqvsKiESjXtrnFZPL8nesMh1rQnq6vV6GtfNQYRwpi1G1WYvdcQqPkCh6",
  "key38": "3CaFtQBwmEKQDNsoTmXbVsAiVqHoX8qFJNtVvwnm3quEu8TRqinqVbDgej1qfBc7i7VUm5m5iMbPhkGpsfr2A4pe",
  "key39": "pzkFrcDm5A7E6s67VbZgQa35fSN2apxPiwEUBxC2VP7qAsKpW3Y4ngwfE29af2gijwr1aXL1C2HZH53QU1GQokN",
  "key40": "e9cKgZWRkafSr148LrVekPSqzFd4ZSoBcPGkBcozNhVqR5oew8ZPcimEJ8hcSwUNr3H2uxqDYUjBGiU3jjNxKvU",
  "key41": "fES8f4TdhEXR5qM6hEpkceair3oDEHD8fChWpz3bTtF6ZLYdQxE1S7fGYCydLtwdw9unH5ZTDxXuqMSGqK2zrFy",
  "key42": "5bLYvz7awFXHRWqwrNeFiNSDEytDtZCGw7tuNexbPzSBz86haSBf3hY44vM2evBHo1nLeyt1e4ok1QfwaW427oxb",
  "key43": "3rLi2NrGD4BhxcrH5eoEo3ertZK8kJFwirj4M62Ej3LdpwezhWXGwnxTHpbPrdDscWRpuGsMSEyG6uhLxR6K5dBt",
  "key44": "5jb4K5W94Du5g4t8Khn9G8eZyqGehvhvSox2VFx8avoir6kJKthV3FDcQVD1qphkZbWwrM6f3kJQiP85JwKcLqk7",
  "key45": "3nf269pyg7XocidxAYoMVgZGVKb5BvWnbg5kxybJamqC9MjAwFipjdbkrdxcbqyWQsewVDK5EBfFAcB5a6SYxTTQ",
  "key46": "5kkoCfq4Nsz2YgFVTTzyhmZs57HFbEwsNKJgWJnnDGhRMbiPZxfRxJ21PdCzuY4d6xy9S9STm9buPYg4n2NCMarD"
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
