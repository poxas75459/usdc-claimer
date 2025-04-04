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
    "4sVqVqEexvzhh11jXn3yRTccS6gB5BJK9pFsbrF1Xm5Qu4BpGqN1T6Y5Sdpw2iuRwQWzNyu7MyuAjejwp3Bc3R4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "skjW5wzYpJnxRXuZ6TxNbk73ikJCEZBBbaV7v2wJuD7ETWHJz6eFj73pRZ7zh7R2FAQ23fiR5cmERSgef1BZhV3",
  "key1": "4FWH7dvibbHRd1xJgy6SA3Md9f8hNonDwSZMtLTiHNkVCTaMPq2u81oUpzhbtZHSYGvJAGRSG4fJhp817hXswsZG",
  "key2": "2K6gQ5LkwVBWfB2X9XU32YbAQH7zNZfm1E2JJHrj7bjosXJbY6UHUw1u9wk1oYPPshvrVRv3A1mut6bciGxfb41h",
  "key3": "5o4bLE9FHWg4dvfhP73Mmo52cZFvPUafDuk9CXoXWf1itWVrnivwXMFExafFiVFUh1ufSRWNiEP3XXcBBhNDrviw",
  "key4": "vgZrLjdzdG9h7JpR5jyPhxvnLKDqBJaPfJXJWkeh4StZkiP7eKCiHN92KLSXJv4BN7mL5TQTdiGWPpBoJtPsAuq",
  "key5": "2m48jdxTwjZyZBuq6MFByfFLoaYVvAM5HKsYXLSHi4kr96vCJi9SrjUfb3Yofsv1qsBydMpcEuQcYhxAaKuhALGk",
  "key6": "3ajhCUcovonaJF8L957fQHJiyDRAPJ3ddYq3mfiCHJbJ7HwEdqDtiyXzvSN88PxGA5awW3fkdZdYZYAcViktz8vb",
  "key7": "4FeXPntRumQ9yCRXAijZVFXzdtu9F8rkAvwm4TjxL6KkNk9GaYwBWbGEDXP5FRjooUdyuxr98YYbQYQwVNLUn6bf",
  "key8": "2VdzAkbPigshKWbEuuEHvtA12Kv9W1LwURwLbM4XQneamh8ubTc7EsBKp2R8KFzSQosyuxeEnkjPouFneM9NMVNg",
  "key9": "33KYW99kftvxGZ2XZem5xwEnFsmAtEpuNWc9EBXttEMRr6xuhYXLPNKBeYYnRk4Z8Vtfjp2R63J7WdG4ua1sCv5Q",
  "key10": "TxwXNUkMYJsTvHQtUSrSMnT5Vbv1yhXah32g8TfjdULeTSVqXjVmNyNKyP89ifJZFaPnWQJB9UGvmvJZqQaxt45",
  "key11": "48ZZsft3R4BcFTQeeEEkKgqz5fXaar89VS1MSLm3edH4jpjptqKGvQAyj9TigULiUu4RFqSkVJ9oWtH1yZHJZnis",
  "key12": "2zGWXEmLj1iVHpVNcjY8Fti7cKpYRN9XSvabwhjp83aLRA23ZoX4ii751qzYWoUdyFPN3Mhfu7XHYsCvxuVzRU2m",
  "key13": "4e8NSyvnLJktpL4C61odzYnPKGziKJoYEc1LSG17AySbFWJoxurLXSysHbh7Ps3gm5C4oBNtgDykX3NJkeQAR9bw",
  "key14": "4zk7AKirPem7fD9v6o2Ngdov1h9hXNJDRkWpg5FECtzZWsqriq5Qob7hB3viuh4rWEzfdX18D2goQc8qG7HMQ97h",
  "key15": "2vbLzjVtAQHpv7MoV524cCqrm5bVzNGHCyPxXuqwMSbLKThUug9BST2bNErciLsLSosC2ZSLe23rS1tsypgezCEE",
  "key16": "FtmhpLFmPEdRAMAP6Qc7vukKpe1c8n4Ck12Qx6X1Wtzr5eVtWaDTa11CFMXKdqp6oJTcaBNVfTHwhneQudHPims",
  "key17": "3wMKG9818C2XqLnsdMX1B1uJnYDy5D21xxT33TExAa5qP2MCvgTnXcJ5avNVvJGm6XrpnmjKc7rAFX1tt7bcX41E",
  "key18": "5C9E8HXZsv32hWNMvudXADH84ARjEamCB7P12YkU7khnBdicVCZenFkoE7SMWWtVk2MJcdicKjKPEA8Rz5BTqqBC",
  "key19": "2YCfmh1tJjBohQim7RT8sHTFr2M28fahV3yiPeSh78xkRvR7wiGZh3p7B6ACrKBP1fa2GQrDEDAA2iFA1WacKpEa",
  "key20": "3Jjet52Zy2dL5wFmqQ46R3m319M9dnwgu8cRbkppqtdpMmpkG1W7w4Dg5Rvr1odDxjrryc1SSZHYXmwSWZMqtZ5W",
  "key21": "2aTr6tNfi723Z6wbjNrnovTvB1NxkdB8uBrcVTS2ZBm1chNm7xgnFmkMPyhyJQaKiKW853ghhnt9aMwF8kHGoMb3",
  "key22": "53QyoDFh9XzFt9L6iFXbjToh9PksMMzsX8P13QdrbBWU9BUgK4qzyZdQGBBXFyhrL1HKJ7nEwTF5kFZgpkEAStG1",
  "key23": "5SM6ZJ2YQRABpwDe1QCxZCN71HdkAYrBiu1QTBnerGdt3tzPc2MWuHHMCojD9GesjJ8rtU1dL6twHEuMMzYxUdHe",
  "key24": "3xGDzhCsTL7g5wKoHtH97VoexRkKyNe7tyxSs668zbvdM4PPbdBPEUEwm76JLPZEpA1JLeZfjdf8ZEwCQHkNtEEd",
  "key25": "4KMnybsP7vu71kykjH6bcNREKiiTCKxPgxh6q5zEUAGn5TAA77k5pzk5tGctZD8zeRDitsVXvPjbgZfLME8ebT8F",
  "key26": "35WSEsPsXNGnsGnjWYDb9tRFZc2stVCKkW5G7SSxJ1pwNPd7xsf8r3Bfqszdz3Zpij5ZJhphgaqdsxTsGBvNzLJZ",
  "key27": "4uVzBo3u7Nh3MP8F9zPEzrnfyHfK92Zr6N8Ut27B839CY6PmRN4sRWWapjoEwYPc6k543bJrTkpeVSoDmfDm2Mhx",
  "key28": "ervzFH6ics8vsXa8bkYfHUstft5qevtD2vvYCwwcrr5eyNdbb2kfve1TfWya9Psdtp1QWvECgEHkaAeSRFqQJNn",
  "key29": "2uejHTXTCwVX8VN5sS2bSsYwtNxzVedirFYDKVwnhJhkQGroos74FgM6oefXoLTPuJpgDmxYUe7RowtNX5ztZCpR",
  "key30": "28opvoDz7HJeHGfkY5MGXZELoZUCFdX3S6s9ar7iRWk2SJwDCG4SZpmFR9DpvhLs5auFhCcqWj1xMgLdAEUbNszw",
  "key31": "4P3Q2Pi6wWLkVZR9eidKCgYvb8uxd8L6NChT6eBRuQWsL1JXqVawthn3hZ5MpVC8KhwjDPHLmGsfZ4F1Rx2rWvTh",
  "key32": "5JUxXgjqq7vDeAbj8b2iuQbqpV8rEzHANtR4C94RxcM7procMtMDn6zhsuu6sWimM9i6kSpbmVhg9oJQd8Eq14iD",
  "key33": "4oNCB9XvwU98vutH8mhe5asiwUgH5quovCGsNWDd4QyFcfmURhHUR4KPFzS889mMYZajS9x6oxjgPhhjUbDAUvTc",
  "key34": "ECCeejV1dT893wAtsQCEAF5Tea9jVpTK8AdERHmx2gToJ9mG4DfDxmKD4vUNcU19eKSPZtbirDo9bEYHrScP4yJ",
  "key35": "5jjw3jMioQKy9wddkYn1tbSmeCadz2DVgWsPVTUcdULvoFCVHitXK542S4CJ56AHxxCpQXLT9kDCBvFbbt3zExqg",
  "key36": "7r6iiY8xkxLqML8vhENF28CDS93vHtCMQ1kqnqMyaKSCAjRVWukgC6X8FkF8SH55sezuGCvZYwM5nBsnaqPBuEa",
  "key37": "a94emGps4fM1eQYqaNP9WWYVm7huESLRh3bHyxCZwbDezDY25ESNPpNPevgRVhvLraQvgLTtTgMqf1JoEocmPMp",
  "key38": "r6Dd2roxMJ9ZEUa5H7Etx2JEKViTdVDM3ReNowtFMZJ14aDnHQ3UNSVtLctFTVnuNDN5M22VjxwE6aSGqhGZUsg",
  "key39": "NzjwLZGEppzeLxz6WhnHRhKjQnQfXxWPvA6ZuFgorFeVoVXBNZGMsFAM4fQP6auWGpHVnRd8Mmsf7FC12UYzgdZ",
  "key40": "5Ngj7NTRMErrE4MbbwSjW62ZwXbhJV2Qi6sxEXUbVE1swrKpTz2XYt55rcTsJTHz9QqnEuaRHWBBitUB2No3e3i7",
  "key41": "oWrsERxnxFJZfLb85LWQNe4QqAYZrjkQd2NFGsW4HYeE3V65HmvJMEFDDYLvdbmBRRUU9VUPM9vSYcwWy937PRn",
  "key42": "z1ChhNK7ovWQQCVuHcSzpQ4i9CNheKtudKxsJSWwvpcKFZkyowzUGU5TrmS7zjo52jPoRgr9SZPAbuXxJaLsW7e",
  "key43": "zfiPSD9AeWJG5wdxZEawwnngc2voKfTdnrY4kDuk7iNLEuXd934Sb8WeNjUupgQJT6kyB7ESoC6LhJ1iyCk54rT",
  "key44": "4zzpoWPboHW7oWAg2XboQtxJ5gAT7yjkxkBaT7bAenuQT7KeVyK3dFCSjGfsfRGA5BoPyMSm9dYLJDrqzgLb9Yym",
  "key45": "49VcotkmRMEFDFSkPFotJzKD5jfVvjAUxwJ3BJKmENixsKjPmtkJUgfFHosizVFS82b9aYpd286yZmUdqanzZ1RV",
  "key46": "5wQgSYt1JU7UwepANT8tB3QHLNi9pDnD3auFkU7hNANviLJmrq4A1UQ62AYdmSS4PKuHsEGepUZyhGEjCBCcTC2G"
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
