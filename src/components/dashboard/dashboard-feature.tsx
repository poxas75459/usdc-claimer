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
    "42trQVrcBPQZxoaeqX3MfEuTGL88nqUn5DMdfWZaHSS7TZM9cWQYNrXAmAGewGa1AvdTnRNA3RSXnC2piqQgc5af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dMQowxq9YH5eEZJ6YZoC8niazd2XJTbgAfsN7BBU13JTULiWKb8k4SMpopEbBFn7YayADbyTpoLYryA35eiXHJj",
  "key1": "3W5aR5DVbqFRkadTWBviottS5dSpBxjZNPMeySe7Yq1xq5hkuswQd1Ehn61KQj8wXLFC1kHdr7uudR3DDi6tbnJB",
  "key2": "3pbaG6FjCAD9DEdfLGpfGsrvwPKiwuwyXhU8A2X23DXG7BPLJ9qVNuHppsicH6HDXXon5UQaLN5SftNQjVEMSPwa",
  "key3": "5tggWoAQ57Gqrwag6eQ43Fbyqv3yQcWyjAM2rjUctFgAeAbim4st1Yf1Ub2ZU19wusJtmGSNtkGRGZLMphGUQiVm",
  "key4": "4c2RcCpMrUMjLUEXRWPgspPqhVZrY3MMc9fVyLh74JnFRa8X6wBz57riEP4ERLHbKfxD8FVYwK8hvy4yAxqR6Z1n",
  "key5": "LXndr9nxbhhLnfgZAd4aYgbKbkFGkp7S8m4aQpyj6EqqNS711VGZxENJ67f7TMfZqtnkR9mRsw6wGcRtLCqAkrY",
  "key6": "t6ekJBPyX8JGbgEfaevHJoJpGYCMSpUe6BY3C76g5vsKTbV4K6Kk8bxuEkTvQYyatYE9hkfC88E6TQ3Brsxd6uy",
  "key7": "rmQfAwi8jnXspq2swLXBhtdTvqeqi3K46qijrn1WFnK3LpdaDsg4JYTfRSL3TacnXxUqJER7AowmgwQESDiBsCs",
  "key8": "4zTmMZ3PqXmpj1PLbGDxHzdQ5D9po1T3CWZV59tnApvYfUqXMy4v5hnSecb2X74UBk6jiuKnCCDrPBysKBxcJehn",
  "key9": "31oXqNN3DwXLnBJ8GkMDoo21NYUMKztu8fzi8xD3HTUXxVBzDCrcQpUuEAqSD7orEpjTtwUnyhYoro95viFVDJmx",
  "key10": "51Ubz22DD7ZsnCpMSNLpprCsYhNNCR6KmVLxa4YXkYSa2oMBfe3k272t9o5kxcxU2Qmx4MruSHL2j1vPjXKACeHg",
  "key11": "5aUsy4gxQuGw1FbrTr2NjfdcKiU3seXWYjPa9LGu1KLfwnV21U5yeE3825FHHNiAC38Jsz92Nu455x5KzDe8FmNW",
  "key12": "4D5BFJEAjDBATu9PVCDif4Fdcdmd3gCUd3BeXijKMj1VrpWLPeQwGU4Pk4EsDL9mE1xQD3VdP1XSGELgHuasoYGA",
  "key13": "5BoVF1D8k2h7vra6asetYu3x14nooxkTp26xCYgMXGATyX3fyABgrMuN9dipsjnqF7iZpsTryKpHAK1om55NvY7s",
  "key14": "4hyHWjGg73Xe2bAqcneAT6WGXM2uktixytcdMf4jLTbERFZT5vgc45HnLgvFiX8vZXAEwuko6mzLRFNvq4QCM5kV",
  "key15": "3TKwk1HXKcETAEFU1V8Kc8AAhgjdu7zEs3H2wGBRDeKcstUfyzEUA5oXYtyic6mYw9KvG5GfSAJjrvc9R2L8GQzK",
  "key16": "AFjq2oSjMnMAfzkJavyS7eJkYa6JUE9rFodQKC8ySRbdJMZQqXRR1Wzf6knMB1qt7QJ8Y9XArxE5TZ5zGJXirFh",
  "key17": "5kmfz8vhXRPzk9APixmhZ152Ur3kbK49RXrjELuWiwBrjJmLn5r5fUB4hWyyuwPLcQcyBd5gQjYRfoREdiHbqvM9",
  "key18": "5WoomSqMSUdoQQW8cSBGpWLrHpngeWdM1UgMSRCbVT6vTDdq65PBRKDSVzmGq3WVuSspuaW8wPZwhK33UX7Rc2ug",
  "key19": "3ie6EdkFkrhzX6D69pGw2Y2bhMZHfno59f6kbXWsBtxGqybLjCskv9kQDfMvnpkRN2Ajcn4AqjmN5DcQWKVKZnYK",
  "key20": "3AZSdS8LBnwCouu5edDEDbP4MMu9aj99Q563z7ffCxhJVqAzzQxL9aVkxUv9Npou9Q4dQqCGKW5mx3qMrSRumPcG",
  "key21": "27fCFJzQnjWhcuwJtrB9py9n8LWKLieV1dAhJ45jyMGSRiyw186MqSDfxP5mCQnE9DfN6Bh9CdeNVRL6nLDgKFi4",
  "key22": "fssYuWcLtjNXY8ExvEuBDSr1V57hvQ6uCpiK1XFL4YVktzZ4JVRUntZAvLkpWSmfRQDBwbJTMcforeXatu4mKQP",
  "key23": "5z2hi2LmdpD7sDy2oCUCcdR88kwiszdHi9CwvbymbcDvZYBGraX5GpXVfUzQSLuabXyPk2bScLoAL13B1utrPQnm",
  "key24": "X7Gd99rtQDG2hfsVWeQvUX88yzx2JwUhqJ7wMHnj23yBtxdotLwD1KQBbjnbW2DYpVuV4bSXf9gSXuPPa6zCWpv",
  "key25": "UNuS7ZThPks6yRX85qEHwLLVEPP2YcVemT2Xcqn4eS2JrHkJzdERDEQTSr1ZKrXqoXQJBcgH3oEYjD4iR54B4Df",
  "key26": "i4DsyhfWoCBJVM41SifVbNr77NTLMJ3gTgb34j2tuTDBVUDAM1DDJB4CgdpQEVAHrNCgBKDZ2M4esg6X7bcy79m",
  "key27": "44TsJKNfpzycEjZdk3zjVzi9qVVMc5vc8KfqDTh6DSwVPAemxkunsjcADDi6DAXkBEvaKNQPJftfUCG1ThGd15ru",
  "key28": "4t8gcsQGViaRUtfftxrmtxakcQLHhQvTaXnU5Sij5Jc9SpRkKkCYuQ5ZJHGB8zkXirrTZUgWEQaBaxFGTGCNKBiP",
  "key29": "4rjPg7xwaMw3zZFHeksbBufrDyQmBzmmqqEZWdYNGFcThBAXqbngwiZy37j6GALVM5Yu6YvifTtKaVxmZPeqzVik",
  "key30": "2SVLuvX6RHYDo8nhNbJzD41N2MQXseSXAQdme7bPMzVtat6z8p9QJHDUfs4NjDpzt6cYkmze2aiGN8dycoNKS6FW",
  "key31": "2fWS4sPhstNBiDk6fczaJgwrCGqSCPitJtjGA8tVfYJd3x1vydSwhT5PKSmQenDYW4a3Qi3qsboR4mUw1Nd8qwd7",
  "key32": "wkWDznuVZrQWu9jQMwEYyPyTwpwEr7gBwUUyvVjv9aC1eneskxNsBSCCmke7ZA7EbmzujH7Nk6XJSf45Gcn3iNH",
  "key33": "2wi8nFYekQw7jmCHX79zXsMambQBoNtJEULxZGtGkJJbp1XgmvCxY2YejWeDhZqFszVM8n7GACYLUUo8rXBu47ao",
  "key34": "4wh98MYdWCG7YDmk5Tyrdn9eV6gm7hbNB33HmdaXWbh3KYczSsHCUcD7ih2kJLaKL1nfqiuRnyXUHXwSqAy3kJRZ",
  "key35": "5RSV9FwPetuVUGpnhAh4MY76u4dcsXbytNoHk6FoVEwjA2tjAgWZwhUGNMQLntgLsXWtix4iYjSbSbEgmooBk4ef",
  "key36": "vmPLCFQ1EiHG4x3WWRrpTAfMn3SVfZifFZN586BMRR6d9QEqhDU3ExHhvrpuqeSHf1uMJBNpd9fpbaHzhV6YfyC",
  "key37": "2nsHHGUm3neZMWb1Ev3LdyytohVJzQqv2EPzaiMHH22FC4eNUwjkSrNzXwZKkeAuBQfQYpfck6Ti3UgugbqPX3eP",
  "key38": "3TG9vewCk3L4GduzBgDXUqnnB1CzwM2VrpN2u9Pp3tLSUjr4MEVyNmpvQZrrmZQpCDJFtuE3TPXKqedXbGaG9fTZ",
  "key39": "2N7opyBGHjpTqUidj3kJvXhD9stYPRQ6KEz7sKxjtPYFJrxtEGfRN9M5fU39gQDBF2K2tjsbn1rXpwJFoU5zXibH",
  "key40": "mibWnaM6oERWBEHak22WAWEUjH21isPRvpDqKD3XWpLJ8LAsE7xHHzcAbM657E5nZwmM956d97TQcarHiWrde8K",
  "key41": "2yTz1EandM3dD4GW2TAAVZGomefRgQ4YzgqDwfoycFbxRmvGeETvV7MLnvH8sajsXVLWYUesK255zMoxuF1YmGUg",
  "key42": "5zuYARQa4eaK1apocHCJQmdH5awTYppvSC7CW3EreFZAv73uPv4YKoDyX2bL2G7qa7EmByt7gHEACqsb4jQDkRfG",
  "key43": "21hHW3Qy6hakb7iZ35swQTnAcjKhY4Va7rwfTUb2uEy8uq2rfUincCSrUDqY9QciASccHJaKn24dgW1xbBTJ1vcf",
  "key44": "5yTEfFrepxC5WLscxc6D1uSiiaRTPBU4gyB2UuDotYgbWcsWPAcFG7FPLh58VqCg8DZJdRXisMC4UtyJGCfesrjK",
  "key45": "3rvkqTRycPzApgRVHhiFefQkAtpRvoJBvJ9ShmF5H8FB1oafoJXbftgDHPaDnwofzLeKsDrS9PxRZtYKP5mZS67D",
  "key46": "3qZshSeEzWo6Myp8h5PVQotfFaDPPBuM5PJ7Vd6Q5QT11B93r5Fzp1M7SE2T8P21xQRmtiPaSzNiKYP9DDi2QtV2",
  "key47": "48YkF5oi8XrF32f6rNsuCfu738kfnrs22uaWEANAuoTBd4yHT8dQU7AibBJAa8Mhun7XJCTVUmKdPRN4WzBCJeZX",
  "key48": "4SFhkB32brmdLmk2e6wSqYgxUACn2ynD7QWweJpbKrvwNs68Pyez6232HE5eji5YBBCReiyY9zyh5ZJTWzGzyDDi"
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
