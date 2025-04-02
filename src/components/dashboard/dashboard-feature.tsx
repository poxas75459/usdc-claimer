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
    "nkNUSpCnViPmwkfj6JzrBw3VucifXGXMFarak4i7fUecn5DQFgXbgiPNSu2z5KiTn6AwDFSirD7w5XanunzAz8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UiCRapYWGwA4fpRBoHXNAeZ5EiHEmx9nKxSYTvzWumsA33j6ybVBnDnRCYgJ1B1BByszCQ3x9uBPTRhYVZU7ThJ",
  "key1": "2z8VcfBEM9vEjC2hAy7MQENZigUWeiG9jkBp1aUgD4KksZxVEM7ZrPeVS5rceiS2EEgwGsmap6Bhg6Rh2FaKzVR7",
  "key2": "5Dg6BJsosi9bZbuU4BJUfFsJwJ4sJ5LS8pPDBVpiNukhxfBjwGQJoz22wmRpx9emvNwMUs4dJcdMh4oJ4ojbV91G",
  "key3": "2Y8ker579mmLbSrGrZuu5jphHYV6XZfKTMWaL8EHcS2pLfK3ErDFf8FMX69jpkmeFDZ2nt7Ty57LqthKBxfN4iEM",
  "key4": "AyGb8gEuEMy6PWHXcnHGnSkzgTYdEeukzfbv97ZBDhtLaRodVwZyLWFcPdUmmVTascoxcrKQdLovLXwyCYgtF4R",
  "key5": "2whhjaoJssZ8nfpmDjUFnxQxHy6TaW7hNvV9Nv9Wv1j3CD5pWyp9L3vVnHQsRzCwMAbY1c6F5SPgSbx2gvb1tNEh",
  "key6": "2stReB5QyCkPM7kkV4zuA37aHQtLx5BoxtSuJPFExWaggSNEsnySu5SyZ9eRZ5iKDyR1R9ekTxHFqLSDS2sEczaX",
  "key7": "3PWfkmJ1f5n6ypje9vybhhg9FArFjrh146RAGvJwJEWutDHikazWd9waFf396LxaWgqXmifH3fsXNKVuBy3Fd34Y",
  "key8": "55DZfuoDx4GaWoyNmNYNdnXpAAzVjpSRa3zcKqbvwDSa659ZRB7yLCS7LTA7auZG1iAEx5CRYELTrFCHVrHMmjDJ",
  "key9": "5pSyvGP43mRqCPCVjbp9vqBef9bHiGS7ZNrCbEjdrtGQLNgUWfDxQcduWGYLuWffSPntgBZA3j6uPzzMMJwjCXWf",
  "key10": "nRRWvvnpWHiuhSGpixCTMeDdGArWZVFbwfNLzCSyijBnFKLGAedAAhgUMKzKBpdvEPB1agH5rR9zvMvwazZq1Vg",
  "key11": "5YwKrwcXxyKT5qpUpeumSG234rYBsDHWViZSvakqxdGu8nmgmuDnMiyku2tFXhzR9fCNw7p5U6mEYGZtT3wwZNjQ",
  "key12": "5krVnVbnUESzLV3WWxsFMXk9KQ94BgnKCEniR7Ggqd39p5BoksKS2h99bek2nhp8NqZKzho65qXwxwB2kN7p6Gfz",
  "key13": "22GabwtWfc54EYxAcDAigQiFcdTsqiDMmfL9J4Pzkoi8CXWyCa9y1GGH71jHvd4d2agJs2aVPXieKJUMcAX3ewRu",
  "key14": "5rtPJM1qoK2uBJMxDnCn6ggh8TbyGW4kJsxaaysh3xHuTuy8KhsqLxoFJM8LFRjD8BgKepKg4cs43ebYpAr6HhBB",
  "key15": "44obpJAsoH83Pnjzjgi9u7mQq7hiHxoyDBsFLVj91n2eWDCS31kithDL9nNiREHdEekM2jrB5TVD4RVrJpF4HzTZ",
  "key16": "2wBXQKVN4QCetbJebyA7gua8eVg1ArRZ65pWtcqDM6ugDgcB9fmnxWRTQwoenUY4ck6hy2rEjuAfgR3X6WrzeeDN",
  "key17": "2Pba7sNtyY2a8Zn3dSJDyN3fNNrGiwecVYZvxPHCF6HYGJ9duVYLgwNkWdbKPkspUf7xuFu6b4eYskBkctLhvrHc",
  "key18": "3uPuGA5yPiAEHd9SxEwBdcPveR5kXfKV9Th1GooChfJU5ZAdYNdvJdnYrvWuSShTprSwKz2STXyh3dFWcLXkeAft",
  "key19": "2fQ6ayMdUTqcntZzKebeZPtZAPs3vK9swfWdUkdNDK7xUW9nNF66BSjWHnUhA3HQpvbZxA7iDuYYVtcVEcPDb3Hv",
  "key20": "2HYYfuYjGcFutZPQbK7XTGwuLa4tWBCYJkHD1yJve2sMzQMnHymRbavmDUq4mGib9Gch5hxs5rtj84QfpfpLQ8an",
  "key21": "61pmVxvcLVgT59jrCGknCmBnYFdAy3kTSTFeavSo7fWp8V6BbgWR4iFEMFb2KLq4YeMciD6roMYx2dbp92LR9fB3",
  "key22": "997gYRa6t87pgMt8kK3jiZTJCumLDpfvZV4JGBrqXgMu6prQtt3G4JXhx7sjBW5WN9QuXEgTCKKR8NCDjmNwU26",
  "key23": "W7T5nx6zDoQd9VqgBLCM86KSfunbAZwzwwCRFksnwBRHip6j9fcrBCtbrKimWiojqAp1Up8YfyqGPkDenMjkaxq",
  "key24": "4UPj9Ppvsug3ChoGkn5vdXJeTSHL9PMeZG8Qq4pDnATnoZfUBnCfu8Ek7DrDC2pHsWk3n68QQ9BRPBe24xobCHRu",
  "key25": "3wecY3qRN8j5TuLwE4Jf6qhhowRDHsxo9Cpp2CrfBGySG45R1M31PQZXcACaX6daxN3YsQ9PbpwGmFqnmz3iuN1A",
  "key26": "4cAe9pGLTyCzvvd4bdE5oE1Kv9wuMcFaNecwhD6ztFcNr1ycWdbMyJ4iGNxGHARCCQJjobCbFRaNSJx3piq6mnuH",
  "key27": "4DzLbE6WEaMdacBoLsgYJWR4uiAC4DHFdPc16tFW9tbPDwpWGv1FFN8zA9cCVdwVyYSSFgXLrbVnqG26zdqbD8Hn",
  "key28": "2tp9oAst31t9eyox2M9PVXcUddNeqvSxu6yQYhFufSMTNiAXAyquJNARdwjndzSHe6HX6H1iS8ADERtMKhceCJuP",
  "key29": "37cQah3ynoPQ6APGcPhVmE3Z5QEAauBAz6532FKaUyyKhZETDaUHc6WvWXJdDYzFupYr2VCdmCRi5NEaRigZ917u",
  "key30": "5SHZxYJTGq4GDpbNgEEBVRDYPzLbq56ZVgFCnns9JapaLAL29iVYESWkiCtPdQRuJLYkDFkc8s73TcioP2sqBQpF",
  "key31": "4L3r3WAVF78L4LvzXnF9RaWa9ewtthbWddWfXZ4RQp7ERfcxhoBXCLegLAx74xrxJ8bfzVdweMnB3UdY8hEyXe7V",
  "key32": "5oJ6aq9Ncfvjhy2CxrwfHYsKLt9jweiGEozmhFBNigH9ppKngWDCNCitjTJFcggF7d8t1hJD6oPuvo3EPyvJ1hyP",
  "key33": "4ovpyMiu7NWUk9AuF2RQVsSEm6NejoiC2kCwcu5bYjAoPuo2x4QEJyUDjMSVVCJ6Qvcb31CDfM83FfMLKG4PfBpe",
  "key34": "61tdXgFbE28Dby3wENFhdiCsweDV8idsyXxS8CF7uWnJV4tpUMWPSa37LyLzB5FgmdrVAbqtUPtEYNdd3LDypzd8",
  "key35": "35beErH9Xmoe3EBnwhg3BuZ78qmWYN6dyBU4Df5dh8fdpPDyxUhngcTzYTxVadfzGyK6czyQxhJhshe1XFfJxnxz",
  "key36": "5smBFdN2LZFxa5Tq1bLAsxwbboGyj4vCspPU2nXxZU33RtwaPvzcztYYfVjnfMeHTFvNotiFXYjkLtXbHsM9gh1j",
  "key37": "5LLfYDjiWw2jLSboJXa4J8QLys1wVyLbuKWSqkCCxArMRQJkiiB5Es8zTWrC3YYub1YHxSVm78W5276kpPg9f96i",
  "key38": "3HKSVew7vhP6cSad5TPaiLxfnTQMWaAYAhDPz6rNWy8PYPHdBuCRgN6VEMpmYBSosav7b8Kc9JhgQWxRQnrGsnAL",
  "key39": "2nXtyScXYiEt3Hd5fBpLZXZSVkpt6b6g36HBsaHYDBn7n5dUSBVzM1iU4XY5dDQJMqonb6Mymy8epMfestN6rwNR",
  "key40": "3U3yDoWE48EWoyY5NmXSo81FhxABrReoqVZGqqBLcArV2j6Eqpf8nDn6pikxJ7pU2obNFErNEc8NMPSebeg3uPrg",
  "key41": "5sv6kGY2ZEPkt2cXqMesTvbwVJfWHPcdQDUq92mpVsd9fbb47MPbqgGg3UUERQ1uuD89BWsimBSPyPcqCAuwkWUt",
  "key42": "3seTzCMfEjxA5S6Xj41dHBpgakg6fyGSrAaNCjpB18i1YSoATqhLTqCaMmU4n59VScxrfiEXNGhe5rzjLYjFHYru",
  "key43": "M5HcwVa4QPaQubS3puxYdNTovmwrM5VbLN6oxpZ2QmzKUPss3rns1UWMmtorV7S3yXSvmmoaGx7GofHk9mW3xuR",
  "key44": "2HspfYBXC4vqnk5rcr9E6csprKkJ18ZdiXidL2ocYDomyRHRw6zXhWqSQF6EtT2DmqH3xYJvrtfSwRExgUuQ7qQD",
  "key45": "Ac4BD4hekxP7gDqDyKXwJjRpmhuQLn1YtAFnhkLjfjwevg6cnDAXaFNbGZPYS69dNfTWVEsreMvTdMPLijyXYYX",
  "key46": "RmmBHzsaJtvVVniy2dmPmj8vzMxrWBGAmMbhFQZ4tfoWKstt9873dP4j9FNCCinjaAkdLUgoYc87dmBHtScLYxp",
  "key47": "MZCuVGXbq2EyPzkxjZ6cZw8ntWajDp8ZHk71Q7BkArwqagz1TRyfV4pifcnRvcDkSnyDpSRmUPD5ZoZoNrMYB8k"
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
