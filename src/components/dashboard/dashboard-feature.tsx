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
    "ECGV3DadSUvr3fjS53jqyYsqhYqgJ3gomvtwJbeZ4mjZwvfEEdGuD1RjmZEX5un2QzoHDPSpLjU8RKdYjJpAk5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yANMnPJGSurMKDSJxKRM1cfbR1WStTj4Hg6UK6cL2vinBVsxPnxDrZpCbjPPfkBu5WeCeR5cBkFyur8iRUnSc5c",
  "key1": "2X8pBFw3b5mk4av93KogdFSRXpafdVxfJcTtjFqnfRUhkzyCFdysy6ayEyFAdTmxE7YSdXhUZoDMeC1nQpgt6faV",
  "key2": "NzYwoX4goWrY1Ny4ZDzZsVaK9awn49QD658m8VrKsf3uqQYJcvPLXvibKLNQfeQYRPsym7tbddLkfDEsty8kPqu",
  "key3": "5T7NqrhdKteK2stdW3fHEWWYmJVMZgFgkSaf3B4z8wLn6KZiZwKPmoFWzthmjtjUv59q3nM4ohTwhSjLeypVWmJp",
  "key4": "dAvdj5TK1gSpnM7RsD3YoZtpqo6ytrr2MZAhazPJ7t8cueDTLfLiMo95R6uMprYHr8dtwwcaSnmuVnnPrcxQPVt",
  "key5": "5VYHnmxTZVFZRTWb8ExcfCyveon3rRpYB8NYGum6RjGnGwVHLrzDLJhR7CdDWVW6GLGjiAbzUfnP8fdSw8EYRmP3",
  "key6": "25i54eprdZda2swpwZqSdTYNebHmr6eE6YJ6iqwqF99mkWABd6S1V4vSwiu3WhHuBtLhYdPhdMW3xXoXeGx5zei5",
  "key7": "5mMfBq4FQC2rHib26eRCJ936E1SfiHCmSjXNod3EkicAENyjp7uV3ULBN2RX6oJwpcFD2nrFZqEUnge9BBaoJrFn",
  "key8": "jYt4TPpeAyQ8LWWVhq5KiFrbFV87CtwTmKpoNZpq1UbDa3Pog3aC82AUentqEPTfp6SUVviWJDtsZZiMCwUM7gM",
  "key9": "5wwZn4TqunkdzzFShA5hvHeMXPHX49QsjEzUMmtw4bZ3zBGkaWMq9q2kB9CCS9fMwE44L6khKjgvqmM7idGgptHz",
  "key10": "4yPi9NBWvVSMtQouTrXxgi8ZKppm5Mr9jMr6qwQMpik9LWv6x62HXWpnQwgp9UtitB7nDBjKzEnZm8USQwXRg45V",
  "key11": "YfJ9rt7Tpz9uiZ1C49DgGTQbQHvkfFq3C7FHHDrCrnG41GPY83pq5cDUPFMeCRtG5LeGaL8AmXi4JAJb4ka76vX",
  "key12": "2Htw8XXeMR9PjCFCVqUc12WFP14JP3SQqyCrUTEFzZDYA2QYvx1RcqoRhXKdAtitux7iLrdK6j9ARG7f3Fz9hhgn",
  "key13": "2QpJGUTSJwFujMJYvRtwkYQj1jCnkpxdQh9RMiwpDshaE4wAkHJER41e3ezaWHEtVRwC6t2eav5PUGe3hxcFK6Kz",
  "key14": "4WkUFLzLDTgJuxhrmymgwcfqtyqUrL9qLxjT1bhUfQiqhCt7e2ruoj4nZg7tjGvyJgRZZbYBAzn2WRsc44hTkxag",
  "key15": "GU1BCRaiJue6cTcZ2xVZRzxonYApYmdb3dDQjYYXLQ1pjUNebPgvYimgfaFgKX3x3xsnQK1UWcZb1Xzq21anV8U",
  "key16": "4ZERNdddroddjT3vWBkkHqungoJSCccyBKdPuErb2rYzWJMtJ4Tvd5LJetFxS1E3XPPwUZrAdyKLWCd4XgadP4do",
  "key17": "2R4s29j3acsYkPY5KvFXpdL47qeV6ciizeirha4KsbTJqYm9oEz5oGuYJXA8ikAxZFWRyDhCRmE9PvE3ACa7Wqfy",
  "key18": "e711cavPG4pFZSUYfviW4Ey5g3fJFWjmJMnnqGcKttWzkx7McQ3Hap3GR2FfhStAnySFgcUvwxgtN3YKtoFe897",
  "key19": "23xNr2z66x2FccYRarJq4LL4byc8dBCHoAXh5pBieYTiQhxXzw7x7NG1FoQCwf91HrdrwUB61M8QWTQ8CuSz65nu",
  "key20": "4th9jjUqu6xFEpj6Q8N5RkcVdDrnXnqkNTuju5ETshXmE5cBZHmDrBTQ5c2a8AkCLU6Eh3Ro3E6gwNvRAvfXhBPx",
  "key21": "3CqY2U5jiUZuaj6Kc3wMP1CZU9xqWTVSanUo8bB9a1791bLw2xZYyTY87jv74g9wjU4CH44p7Lg3UeFGNBtHroSN",
  "key22": "34y9B13thr1tCGeqtXLNhLueNDunhdU7wj1Ns92Cwh5hNtmpBdzeors2poyfgr46kEauRQgEwjbwF8Wn29SNGhqk",
  "key23": "C8wJoT6en1EAmTW2RchBvKfYVniFQqhPxuMAGGeqeXQH8NxD6WRb5zCtw2kLJL8h5jQnSxj94TuVB1viGT8dUns",
  "key24": "38bp2nhBrjDQDs5KwbikNHV1hXm1smRbPDSZDVcEPWZMrPRwih7mMERmHdgm7DqZFVkAVW9HsAqRt5tXKCWtRkiM",
  "key25": "5nb33vXNB6iWt2MZUQzW7uCt45Q2fdnpF4ZKmoTsL3PCqx7dnUMY43KYgoaY4G4ssEXw5voewZcjRqGP1k99zPyx",
  "key26": "Aa1aLDCPLUnYYFVnYgvcP5e1SxcXaeKyHZ2U8eZhaHcEbei7s4n9d2tnev423Bk1VU27qRoYdReHbrDnCzgNcdZ",
  "key27": "3XMLupGESzFXC9N47FVLFTASGZgxQQQUM93gp4bPdRFanRvsoJSNDnsfsUAaS3PpovtaPcTsE86LeCR96Gdo9TpH",
  "key28": "4q5kmbn872hwvNiAZW7dDPwKyJGxgZYbUhVjn1xNA4A3cWEruHwiiYNVFForVRxiqAKJZfk9Bm9969etTUsr8VjA",
  "key29": "5chPdAeezqgMVBYvcU99bpAVXi7QUDwHTrLMvJ9PoE4Zt2zbGmWdH3u1TcPYbWRqczFq2jvUQSGG1fRz61CJCNkL",
  "key30": "5RWDymCDSqw5A1U1m54WqLU3jEMcLoXMwrJ4aCcnvDnB4VLC7g4EoXjz8wWjqaRpAosXNQqd7SqxQemdXGrKkvfr",
  "key31": "3mxyFjfs8eT8P2wdyTuUbahMc95CyDhynS3Lg5wpSucraf8yr8uFvoSE6MpqP8FbxUHjdZCidXhVUTPb1oMQs9RH",
  "key32": "4b7JMgerdBx5qAfhhPQ2giEg112uP88rGdmBUPWHmtDcCkYwU27yEgqSWTw6NYwgeDQqi6L9dYDuPpPzfxU4GB3e",
  "key33": "GzcVfvXfUWh1PvoeSGQwL2j6Y1ZwbhxgpkiXcPqVZ86B8dENz75QY7aVzJpmosCQHggf76DzMUsdmd7yxPKmM77",
  "key34": "3HGznfwZ5jAjwTnGH6UeL7AyWTiTUAs3PHZ7YfHFfVTTWnWVcNe9brqhSnSSavC5M9mJwHDgKUrBax9fevkBenkp",
  "key35": "4i3WJxwkZjJgQ7QEg1qL73hznZW4mHqB9dNL5BWn26BjCuavLLoXzTFMJ1jJU3gV16hNMnJHrr976LNuwWMwevCe",
  "key36": "46Ad2Rd62CMm5m1Gh7ibiVKVC526ZJtM7cE2z32Y3UZ9zu4eFv4nmAzRo5d2dgRcTdAuSnmBJDuZPPdvJaUYDv68",
  "key37": "C6WAQrCqnNfAfp8BAFAsKqGjfgAsHEUN1nzK9Q4x7WBsDRwYjftZosoWByDbtauxPJHiFTezzeo73xU6XJbhU2J",
  "key38": "4YTD58GJC8wQ3uNhxiBgCKspSEjskgVib7ePb3g5sNNAgWMRT5EVACYGdMRxdsDQA8QWSsKPZsfBhg31gbQQ4iMm",
  "key39": "56p4258xr5MKjtkmgM7qJUTU6LQmjDwAfebjV1QcGzZoTdo3UcvgiukBFMtkCZSxQBNg716otbLqA5krJWKi76LE",
  "key40": "2EfWcZrjuwcCT7VodQz7NnnwYDCNx6Zox8Lxi6NQpEQJGuRisQ3ZXXYhCNv5CGZvoEJf73xa4wXdYzC7LofYsnN2",
  "key41": "5RA9t3sKGDkbSNevTuF2abzEzEixDQF5Xu4MZZtGcbrq2kn2GkYa2GhvEDtHQFKK3p7auh5BERdAdV569AuKL2Lc",
  "key42": "2GV4dcXFEcLiNjcKd8HHofZrmSMfJUaNxkuzCQAuEhgX8M1vgpmWr78yokfD16t4GJUosUp5ucRqWLD9BtGYD2Qn",
  "key43": "24zyayAXHyS5XTp6xuubuBXWqUv24xpb57c7fZPNCtMV5cV8LEP9PmoDFcmr5m5UwodNt376PaR8c9qqZj3jevgB",
  "key44": "3YKvboPY2o3D93xQwrzsZKU6tkFWRCECPpVJX25afTNFRGSzykW86dhzb9jSCWDWj1HiQShFMKBDXfF2XYXoKjTE",
  "key45": "4GQTnkeaHiVq8CZrujtFe1gP2UDKou9HDoLmBPHqEC3H9eJRQZTp1SpQkB9Uvpk6oZTZJErZjWQGmN51HqVBebQi",
  "key46": "53Syui2ioZsEbaEXqFnvTBXfhwHxhSTyr6uLa4X19nBMAg4mpXCH3c14M1mR7kxCoBSSWRAY9zes1XXKYKAFHPup"
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
