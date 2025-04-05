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
    "33a95TWny7UfxFf5XBMB4LeML1VDRPjEsyjPhtPqMMrZ15iSLEW3RpXPWkH9F5Ljrzyqe9QD43nEFetd3cthHA3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vAoFhsTWvDzfHUAEHM6ndWUcEFFx2hYfDk2rFMpeRo2pEncs4dyqjDSCmgqALLBihXxc4yUWzQLAQ5QqiQoUYTP",
  "key1": "4yRsTQgmmyP1Lm3p32L9UumBF4caAgHhBgP6BA2hoPuBmzZ1bR1HJCdEz1h5meyUFAMU2SUeJqHC9gR1EgzCd4jR",
  "key2": "hErKFyGioyruERQM7d4E8MUgHbZocyk7o9yhfKpUN8AhMsbvD8ckwnDxeCCjr1GGuCEx8ghHVfpv9yYNGHXMUDY",
  "key3": "41j4U4RCSiYh4DZofa3o4ior1pyxUzqSQtzpDmpkwnBhEuWsFc32LQupW26Vuy9cuXup76TVk6t2DzDJLVtUtzvW",
  "key4": "2gFRtV81kJmvA9aZRTUxJsNy2cACYhevG2a1bbDv4CUGFJyuKby8sVebRNC4x4KnTCSukJFNX71j9usWJLX6hZSZ",
  "key5": "48qi1zPcVuMyXsrtKfnEpvGqWtvJmMvhAugqJ3fw2iwufjaDUK6GjQSVhN9UFP1RLkPpc9smcqE2Ann2gFRa4sAU",
  "key6": "33is9cXb2y5Ym347BHfRDuGaTjAD6v6aaGFcGcXpnWfeLaHVTYzSKW4VQJkjYGDZBs6fD5W7gpbg21BbovBzZhFM",
  "key7": "aqgtYVvC4LTrBP5wQfFyd3o4EGqXjFpYHsSFDLcmKLmAUwTmTv1PHWMgFD499R9yExkAZ2VVtmrxArskoyLyxzD",
  "key8": "5jQBeoN2MYxYRGeNssQ1bG6cgHSs9hXrSNkyAmeC5jcT4NJ2rnvuAZf62h6bKG3Y7No7aRPBffj4m3kdtCTcHfcv",
  "key9": "QDjL6FukuKxNqvKAJwNC3zxsKR6dh6LJmzXzCcCuGfEkTau5mzV6EXWmnvfUWjVhaFqN7QTudDv4r7A7F3PVfqv",
  "key10": "4yF2oNCSLSZuJDrhvcM93SuT5UL4K1qNxGTykVhtrPC7oM9Frd6YiRmLruWjjELNNwE3G6Fnq4BvCsvQXnXmmLzX",
  "key11": "5M5H5rPpyCNmxjdJWt1fgWbkC4myeHDBSdotWoioTECQGbpcSax7yVpjeRR8ebZr2riMU38CAZRq5aQn7MxajD8Z",
  "key12": "EtPgC14KJX9J36uMegh8fW3xoeJcSzV17A93MVV5X9Xyo4pXoucz1MWxTBXDuNdd5VoD3HeMRMyCGrKm6sVWXs8",
  "key13": "45huFwSRcjCEm8p4d3Z4GWGiTHasmBKupPNs31d61RoBM2uZvMZ8KxrvAMsbDjZuedPBU8Mr6aNYdgxkfzoRJDr6",
  "key14": "3dJRt63x843BaAopp499yMARg8njWbBbiHXntm5UzyDZuMzYqqC4RcD5S8wWq1BaUtDBkZihCK26DbrRB5QKySye",
  "key15": "3mGPaandx6hktmP4cu9yDE9k9wYqT4Cv1MZT48xjNUxkSrf7CBPF7zU5z9Qwdu2xMNHtVuwDEKV6wMJvEbUWrVbX",
  "key16": "4ygnaEkx8p6uZxyv6wjjSnUTtuU7dUAHwN8gFf8kU48Vi93YroqrbXkdmyZy6RCRcMhdogwdbJc4E3WbZGofCVAm",
  "key17": "8NiYAwuMbkcC8bQBhgBnDWZdpdfwmpTxc8E7sGGi9pikdwDGLiriCESfrffFr2S21MPWtmNYkXyk7rQU8a7DNPg",
  "key18": "3zen5crsFFfNvLfZAo7XHvFBR2hXDxjmmMiKqu555y5uEceAjC9wz7AgHFR6aRJX8TPRnYHAnmHdEkRDJgcjf7H",
  "key19": "21SP8sXHLq3FoUCMVrhZRimB4998veJicoNjf57SigorTFNmUxDkiQ936hc6kY3oSndXyFJdjhWEpmDEBiDAzfGh",
  "key20": "HWqQKUgX67eFexsz82dtdW9To2VQkzGZRmCHNQActfG2FtmFtY6iRbXJWCrA3phDsapRjuvJLRjpzYtqWKobKr1",
  "key21": "5wz8DRAsoqn88tHhXLQRpA6euW9iJ81jRynaNdBrtv1KRXWNWuvUnwvYvH8w4kHbL73h1gRirdSXPRewqfxJNnCT",
  "key22": "4j88VaWyz7rCcGqEe2guPWF5xYpL5xdw55pkp1FKzTCVUhz1MwwptfguWGKta8mrfDACNBstErq6rnHBPamyr5Z3",
  "key23": "2585vTccMoeB5Msv95bauzR56ApN8UcfBGGY51HHqq4xVPL21BkAKVLQYezzjmbLJnhoY8dMdnmf3dxcQKhAh8aV",
  "key24": "2dGF8rb4JE81AXHrvKmXzyTVq7so2ukuYAj7WykzZJ62k5cmPV8ZRVu8DrkG3LnKaFBLBQCoW6wBKbxJPbZAA5Ky",
  "key25": "3Z2NAoDG82vPZVkKqzdZNhnbuDsS9bPcWDUJo26T3E2Fr1GLkMPRcfJiFkRDZwJokkJPSDu8DpgGacMBPugBny6q",
  "key26": "57Pd7iWmhxHi9x192pqqT8aKeDPNd5WZbjqQeSa7q9bwAq5wmwYxfTbv4E8dp4Xb6UpeCci1i29xvbh1FcMTmXG",
  "key27": "5kmE2TpuzzWh1ddaGn66QnyuopsqXhLpeidRU3A4niyLf3FEYZGg9usQdBTj8A2bNpjimKjbMMufcgHSiudg9dfd",
  "key28": "3cEyTfehR6jRHEQkB66KRuLfodRaUGdvaZQrczSW1dy1ZxgXDCpXmVn59RKYMV95awKqVz6XZgQmaN1AFFbjinXc",
  "key29": "W7cMiRqppLL4K5JKh7QoPjEQbSghkPLxD9uuJrj2deGSoJD2RB4BvhWeLuGzRdZ1CUu9vJWapo6RC8GU4ckefVD",
  "key30": "3gVRePJUu8w9CRt1YhorvAmr2uphzMGCob82PQDnis5YhCTFECfQYst5c9LqTqb1q5Kt17GkMbw1YbjvnBWyHxWc",
  "key31": "21ojw4XDqzXFmy4HQ5jDZjuygPpAJbwj4SRPBTeP2SCrDrnokin3GtoFtD8ApEiZgAdWUHBdMXreqMQswNu8Mst2",
  "key32": "4giJtdj9pKbN7sHmLPDME8hK2KUYxXUPraHR9JKBZvnKJxWEyQoQo6U9pgURvKonqeHLp7sJvwNEM2MBSJr2ZP2M",
  "key33": "3nQ8ELNLNzmy4g4gUdnKougBMbF5G6bDfNNG8L4KkrSGQKJ4r4iq8WAN5hrqjPxrqgUA6aAhE8PhE7q9FjSGmGxo",
  "key34": "Tif47Hx62nazdvh4PxdLktb2bx8FoVAe5Ay6aGmp2bWZYbT1h7Mj4yrgGNRGAuNGRCKmGFnAoWVnmtp5S4UFHDE",
  "key35": "36auHdstLc5iiGsRMkMsjSyFBzMEtihnGaFHsyZPnT19CXTPaP4XjAikXbMo854qVb7zBSsR51fifTzYBugixDs",
  "key36": "35x53hDraLdryPdrr6gwoVz1quFJqXjV5hJLCLZMFSBTLaJQsj31KigXmsQtwQAKTdK8UhkVBBWpc1jwcRd8ntfq",
  "key37": "V7gUHXEPzdCeHXucuSvsVLGg7kdBaG21gfyLXcYTHYCtsJXkXF6EMJ7Sg49HPT5t8Fua82sX9eyjEWp8q9ZrWsK",
  "key38": "3CdEDCVUewujKEAnNCEPUf2W6jG1oMWCVpgRmpmVGycky6ttyqjZq1g4TWn6ZD2ajuhZ16vaj44DEuHTFdjohyyj",
  "key39": "2ZTc54XxChEms14XaeK49iMP6SG2V22cZBrU7pCj4P7nv85zaSSvCmeXvkJMWLTS2q38qgW1FhuauozAZfozKpD3",
  "key40": "5hXWp1NyEqk8kxqeAqK3hCA6ed57Gd9p4H7JZyNBBDfXGfL1ap1ihbHYMXBwFgXqS3jBLjPzx55HmqSRJ82QFm9M",
  "key41": "rLo67opxsmFYgwmqDCWQC3KzQusMs2HFTbS1rirCBKVADKEouWdxCymbmG7MLC6ZBwSjG2nYNQuAHRMUJrCguPx",
  "key42": "4zvWS5o49yJMNbFFvtW9r1SQaiqi6ZYEBrmDhWbV4e5AMoNb9YA8Cp28qFzLoUmJpPKxugcEhGB9nmwSRjaunELt",
  "key43": "5pjNFxXeP6MDibqnWLG4MVY5UBLhJXhw1vHwEhnSFa3DjqwgiGEJesfizhBM6xdiWzJe8ECS8ihDvMuRiz4DgtSv",
  "key44": "2qofSK5F3VtkbvuuVDyLDCkcaMoJ72CrfRLLg24Dav4n3hfUdF96G3pHeup9JqhCwewvMrgAK8rPQY8e1nN8ipDq",
  "key45": "2AhXgkLuzfKTJfE1xFzVA7pn2fNGhuavbmdyUFLNaSvwCWnYysPDjXubjX58ipnRZdHhFz7UFXC3eqFm6UDnHHpx",
  "key46": "uXZ1PHwAJu3No7mTcZvYN2khhRDdpD3ute7XG8wNPi45XwYBhXLroitCA5FoEz5iDVfDU2pcbwAQEUWdwv5FM32",
  "key47": "3b4Bk3MUYRXY9qEtaigj8xYJ84AvUDdKSr5njS2V2KgKqWoYpgDMRXFvXjYLPn8FVeGSAyAWajrvJwJLyLhSqxG"
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
