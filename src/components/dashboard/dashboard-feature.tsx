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
    "5xpRqVaLuwKFuSdm8NFXjZ7LxaHhBW474UW59XEh91qUSsttybMN5UCrqCQPfzHWCQTMmXYPNgXieh6srZLoReao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42kgBD5nXJKoD7eJzH54foZWUE6JV8yiUzAqhgyogKbmAMjbBug8kM9wPcAwpGsm8JdeLTobZB1s12kV5QgF49zQ",
  "key1": "NyXRGtm8tNeMiF6D9xN5s9z3tVVeyahfbt6z59xP88j7Uouu6b4Jcj6dr9FnLZRxsB8tjvhMfv28cERpnqC9PWX",
  "key2": "wXnYcaPnb8aFLSFR4EhzvAJDK597emtGaV2HksZCKf46MBUdvFctes3wViVxvZuPJKDEuXwikQx4MdDPEF7abK6",
  "key3": "MFmcf8WVMtZfyGUPGtjK3qJkz9SNgUWp3TkAzkqDcfEDYb5eEqMg2e6a9Gu4fvcmm6PvtbF5Xf3F2ZrzF8FP1rn",
  "key4": "nbpxgajGJ1rZX85Beo4ns4yW4skqYkkbNwpBeY8EJiR4kToF6VxeqKP9WZxjoB6Cyh9MHffuj3TxVRJedVgt2vG",
  "key5": "3XLuBmCdRGrBfLBa9Stgu6uivR6qgSR1pbFbvp5qAMLmfVzgjyQtsmo9Fmz7KRqWPPRyBEqEdVprwjhY6HaCD3wV",
  "key6": "4EW2PYkupR2dKVLhWkhSCW3K98YvP2snPZxjWtu7M7VRqmZDMhqKUGktWk7dVCQPMLzxZyLGiTDiGeKELCD8Lbuu",
  "key7": "2ivqVisUE6jqtXDJmFgZoP9GEAmDSGrX8TqG48oHnqUorw5XqCBWfa2vFJrBwVh1xuj3vxMvm5pzoVQ4rYjYLdyc",
  "key8": "5wSVXWkVqzwPDCs7w4tGwbipKw85rU5dkZT9dA96RJvPf9AeY827koLwbX5ib4drCyXyBh6eoKjQWUCCzvDU6P1g",
  "key9": "2xgmqQ8zXAsuppP3z1uKAFFCEqcRruyekr9QfJUntEo4tmGp4S53eJtoDxwrPysRLx5oQf3TpW9x4w6RbRgbGiZx",
  "key10": "2ugo99f4bauKN8aWYgVdPNRjmohfJUcSVKAmv2f3MgLSFvnc5NkcSvx2cpUsxoGtviPd7kBtcu8Eu8ZysoA16oeH",
  "key11": "xGivY4ZrwkLMLMY9u6MpmV7tETQV2Zz1Wnz583LX1j36ikcLuZMmS15y5ccxQpYkA1wHEAucm5zqQtpRg25b7hX",
  "key12": "64jR3GXaf5CYQPtvqzm8KixcDpUZrAGcqweDWTDmY4o9aBNyTtDoUFj34HgQ56H4dcRBtZT7zs3LzW5uS5nM7HGD",
  "key13": "4NerVfZrAf7ohvYNaTUfvvv2Qe73JURLjn56LQvkHP1rAzJbmkenfCpEcvRK6ssuezVyX3xiSVetCbsnh3VRZ4jy",
  "key14": "3HXyK95S39Ue7XJb2FuzT25U9VkVrwLwwc8NBKEw9nAuBZhiqmEjmVZTrHAmiMxQg1p25JozGce6DRCAsKfyzb92",
  "key15": "3AkrTh9BpDgGZPihn34BpEut5REmjk4QnWirisjuU2Wa43fVeMNCLD1jvQDNzjCNMGVzbm3RN1VjzE7JnVPTNrBX",
  "key16": "2MZKv2mqC1ousuvg1s7uZx5qEp81Ncr16RrsWA172oK9Y4f26RJxfknFDEqTx4j3QmamQDEfcR2WTwbCthQaAZhs",
  "key17": "g1kYW6J8Jfntb3R5b61NZiQBcyhFwHk51ZwF8Pc3F5CQnBgUm5398e21ERqv8zVYtxmLYB6DKxfs44MxuGtUXHu",
  "key18": "qnAkyNYiGKKTtCwKQVnc137GwcogxM6STLpFsvigf3SKoy22bmHuUDG7KVgtmVdw9CeSHb73jHx8Pz1sdh9CPGx",
  "key19": "4rMD5DZptWsnWv71UYcoSXYg29MhYmEmE7Gv4daDQWKorz2kFApnPxRHANYzS5tvHkija8qPjsKe65AfYPB8BQ7t",
  "key20": "3KiYPoGPNyPA8FJpXGKzAGyj4TsmJy35QKZDVEc8iXe6psSEkHuDJiQmdb28Ka6Qr8ivErHicKJQXF4TKBgJjF1H",
  "key21": "2o9BtKsb83S8t2otzVu5SBi2xWzAjjZ4fMFaUNi1sTnW75x7EjJeUu1cdFRtLGvwNF1VHBpxBavHKBAio7nsNSoK",
  "key22": "56iGagtJURCw9wKubGiudrPpuQkWUeiMLAhYtZyYadKcHVcCyQaH3RyurAeDEsywbSWQfuNbRSYYBEerra26gEXZ",
  "key23": "5bCb1X3xZQyhqEcen4t5uNHJwV29J31qRV8nig42imo7rDDsajhvbk5KaKu2cpAfZMLPLFgQKqDPBm2bxLE7SbRg",
  "key24": "bEsd9JWnDuUh2BVf9PaMdLcek4QcgBmZgcuHTxKnn1PfBsZDhG3hdFdKejKqbBBZBmA1ZyWyZsnFr3u3G8B1eNm",
  "key25": "r1wkcBbZ6hY2hU1NuwHyzrWJWeWvZ6RMnEQ5JndEe5mT8RnETbjbwnbxxpyp2Vqm817ooJmdAo6Zuc6LCa3NizL",
  "key26": "3meBLysoQ8X3ZxkP5i8a9fW6bsX4sBaHwJnffYJc8zQ31BcNLC81r7pHHFh8T8cy3jaZvHva4jYBzBhDqAQxAbLT",
  "key27": "2BXBjre7ejqCjpTz1bgcFdrEWuQJK1upRMsxcgZNRL2B8jwaz5xUFmmTWtZvNFQzSh6LYBFrUFqTqdVB7MrxDgiA",
  "key28": "2WQR2sTrEcruuc2MSD71CdjYYkLSozTR9Etkvu7dgUcmEThqQA9CU3jLwFxZhSECPRSWpaKBpEpEbPRkKTNRHCGo",
  "key29": "4Kci9iUrvbnA2Eyfm7YJY8ixXaPM4nu5ukeoEbu6QNt9C2jM8x5LvgTtgbqEgagVUpMtGfXjUuE7uTfsLpGE7sG2",
  "key30": "5u4YJvSpmUmCK9XeYTR7zzrcQrhves2bp4pMgETL7uUYg9YSgoU8kMnL4VzLDwgKZaPmsCyFS3SHBQyMnR1Yn28Z",
  "key31": "5gwepZadzUWrhMBBNrkTt2jqWSCH93kmdASRwjFBzy8qUqgsQ5n5p4NNe7cFHc7zq2vMHawiJ6Zgtm9ZPHpS7NDu",
  "key32": "3YFbqxzm1a2DET5vGP1Z8wwDps3vX46b3h7EN23BmJf8Qv2tzEv1TUkhdJjhzWQetSPSTnwbryaDxNHbo9qwXx1s",
  "key33": "3NiSHobb8FkkiEoyVrJnsrEcQf6wrJmtpZpB9uKxpzJvMYoPJb2vuebyrWSBioHVpFhukPNKvxFsbKUterTZpZfd",
  "key34": "zWbffzfNnaVz7jh6gTpSymK94T6Vx7nLaS9xR5gU551n6nE8WMWhfpCbCNpFwycQsqzXvyjCmvnMhpcEcVt57EM",
  "key35": "5RsJFgdmdeBvGUi4VC2swtDtnta986vPVrsVmtqfotTjFWP9CksqAV8urMCxnVnFWHUknsuSCbHPogynATYGXgP9",
  "key36": "4sfpYAATz3489ZvnRehPyNMrC28Ph9gryM7y48xpjhMQGsoF9emdfsowWGS3iEmHr55DfnqsfExfiWtXXeLRQqc7",
  "key37": "Z7YiY8FyTG9ZGgtYMfP1epB4gM1sAy3vY5Ru5DBSgSkEksxAa75hk3oZBCvmwfr4SDLJFypEGy4trdB5FdR1rYC",
  "key38": "2h9bzjftKQ9apaYnQiypSvdCL9Fg3hba4skYVXLVwM8PTN8hu41WwczSHb3GeqTevLQcKzPot7ABuNdqtgt1x9iw",
  "key39": "2GsKnzNMAkCPCrReRrzLvSfkP541R3n3jpwzkUUBVoGPimatFGbsJak6NnczMbvNtUwq9J3dbybobuNaqvRgsdAf",
  "key40": "4KYHc73jQK2mR7To9GuqwJs83fNbvi2TYS3YzoCGYwZQX6Sm5U2SFm9g2fc5deB9wXAGCHeqRrkxtubpUuKcB5UV",
  "key41": "5R6xBdGdtnfrQBgjcuZBxARWDPfM3sodbZ8rudNjiRcCwqRZoY6z2YEKFumaFPcB2Qke7jxsq9n1VcfzSkCGCu55",
  "key42": "3ANTJLhDUKi74opobrqr9WrQm777rcBRX9hchiiJJj4mQTYKcYJfxfDq4KzzrME4zsbJBdpSm9mgdCwUGRjppDBK",
  "key43": "2NZjCXRjB5oCvJ1sif339x6ArjarfAt7c6LUuPZBcsLaocVvhWnyRMNCLSBp1JhgxDr612jCXYJM5PxzL3QQkapb",
  "key44": "64q9wE67eF6dCkGuhNiVay9QnEsXTvrZ9SRu1xTREmgu8XCvfbBrM4JnAXzCLaWN9eTpD4NansaHh1Dj5jvQonjD",
  "key45": "vpVQixbXQsBWEmQ7BWFnWhz3c4T2RAWosK8kqTPcaQeCszrbDSy62ApChQEQXpEYihXp9sWpdWJLLggcCxGkxyx",
  "key46": "3xE4m2xgCSsLNCDboMFgN6dLqrNLqGUtc7zadPn8LhGAKk8PAgeiG56DssLYgFnK79saJ2FMKvDFTHAVxuFnnDWJ",
  "key47": "2dbMpGrgHv7hd9kgNrYwRYUrwH138N6anG5AYQBR6jAzPnGtTxNx2PMTM4j7Nx9uYgNzhE4qsZeSimbyJxSrSaPe",
  "key48": "291R1XTo42QASf5ywEguw6Z9KfBY8mLmsmCmx4P9QEyV9ZBc4VGqKN9HivazwPfy9qvcntWrae4pTJAaThdFysfV"
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
