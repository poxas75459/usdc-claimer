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
    "3PPTXpjCwouhSDVGyXpA3p84eKEf4NLY9yo8PN9SHD5jEJrxh3iuu7qtTpuob7Gz6HrTmdvBdAcyyzcp1djjJYPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8xXuNW5QRi6vxiqGze39XMxBpt4wkuxaNZE4wcAG8XaMUo6Ud6KBdHHeQMLxxynURuS3dkDuc7pADePjzUshzTM",
  "key1": "5GJQyuKEHpnZyqnz3U2KqTnYjixEfZeESrMUafxkd511Kv9AnzDEvHWs8U7k2ykYKsDkSjNRn2DjY26h8XFCUbrN",
  "key2": "2zkmEMYPLQNKPSRNKNNHLb1uzRTuintpgCY9QbFLLTBr3UZs9z8vD3qAnwXRx7MyGU6iY452gU2ZMdQ21w4xdRwb",
  "key3": "5hVMM31k7hnym6q1b77cx7g4CuQfkTJuBAtqP92qRfhcXvBFd2N5Z12aqLfnvBTRXxB77JBtGSVvyFRaoTvxF4Gx",
  "key4": "nYxaENiKm5DdBqbYziB3cSiwcri5Do4qSLSyDRGmi8yWQR2QeVQX8bzPTYFN8Tg7bYf5EtQq9J2BmJ4rKJvigqY",
  "key5": "EYGfHxGiPKXFEoYmdwTzB9CztFKT5nEAr5Xkvo89fF66kBYYUJtY9TrFXa8yXKUdYSss1cUBw8uHezx855d6n5C",
  "key6": "4goZ6eYh2QinHGmqT4ataRLCoTZUewUu3QWxTWkFPRiC2XTw5ML1dmSYdDxqPoh4GFfYcmpwGszMrsMcoYYao9QH",
  "key7": "72kMfN1jq16fdMpAVFPW98MKdJCKpf1Nw9sks2adzo2gyyZj54G4wv6LfiVBSi7nb6U6m7cUzyKXQK4raucsXF9",
  "key8": "4JdVo2Jvd17B7fhyWXtUsqdSuYXB6FJV6xeaM3nhBRv3RyApY1zgMovEngrtjYswpvenrHMaXRA1n1rtMDRvedGE",
  "key9": "44SAgBkqs8z2VqZ6yyM4SS8m1YBMjQumNvvgjTQDbHwM4j7TS7JuEEeVPsh6iDeatBZHQzT7kTmgny4X9cjJw3Nf",
  "key10": "vv8XUZSxA1nBr6gZdqBvNCsCgxHM1iGkFpUHuWGprkoLtFJBYFQoNHooe1Pues5bobFXobhRejCyxjPhEqwo7Ej",
  "key11": "5h7BXkToA16jTq9ZYsYQ1GD6QNhj1e659VUfLFzwF5KrtbPzn9tQwJhQVAWgAgWfLmn2Vhez6KtVhLszvDRvwneh",
  "key12": "2pc4jKG2KTRJKjuLKPRpitDW8563YYXGnG5QfZx6p51RhRSpUKqQk8qBeY75qtKsHfNMthMC227uJw8iAo7S8ztP",
  "key13": "25sq1hzfdiQcApVPgxQrqGKuNWgPvLyf4AZcMHxjUJUxEwD3Kqvgw3QtKeZCFiiGc7uQoe2KwFWyNqLL7B5vsBuz",
  "key14": "4rdtPbsGd2GXL8gJqpeAMx3ZP4nrGtC3he6aLA3PJTgteAn18pSwUMomZSyJJFBdvddc89TLFCXPRujYqL4Sxuv4",
  "key15": "YQbvKsxXu7TT8yrKDgEqYrfgwUAR2Vzj54U3WBgVnz68bE1yZt4fquwvPaGiixUrjh1JHm3sAnpmHB8d8vYxPYn",
  "key16": "mkPFi8sk5ws56L1pnJsFETpQaTJTKoKWNxWJDvbS3g4QbJgP2L3yre4ZKM419ZfNAi4yYu1EK9YZqZYNGoXf2x2",
  "key17": "5RUQDWTfgkrpLbA6deSAqkrz9osC4j6udwcssPLSLkKshv8NpsGeK5EWFBKP9hHyv4EZMdF7YwKoFnnjNS16hNrm",
  "key18": "12oxmpzCCcxNonQf7u5EMLYFUAXk4NgqRydEJ9CUc3KWxAbWsXDBQiZ424SA3k42ZrYtfjbMRH5fgzDcgMsCqwh",
  "key19": "2udQhP14ANeXgjqQ5vuTA8XbtZuyWpSd2DGxTjCnzgJ4kLQmrHDJ1aMwgjZGTfFLT5XZdSn5EBeFZ6nSeuf1uMuA",
  "key20": "2RquZY88fLRiReT2rHawkuLLP1kjhWRZeR9b5pvxLMG2KQhdEF9qcB5EQUj8ZLaPKm2wk28ESqYXNquT2vQ8MDE",
  "key21": "5gHhsa1fxztvVnpcBhKmH7JftE3TPwnhMFbx6BTgeSt3wyEZaaqVCN1qztDdyuLHozi3qGzvAcDLKgkECFqmFYn1",
  "key22": "MQbRfF6EJTwjLEYvVxnFpLBGVPaxD9enrmTbAQy36BEvHZAbyXxA6mSswCGk6wNJPdJFJHRc6fK6TqeBXUkWGXT",
  "key23": "2kRiPqG3zUU3zFgnKFm7TZunAexDH3tobw3hjsrDQ9bA4tmrsT12moSXm5fTPUHA9xnc8FxUqGfAhM2fTXbbojYx",
  "key24": "2txYzv84ofmHE5VeJM5fuAQWCSE9qeaYocZGDXcnr8xrhR7Yj7KmMzkFN92b7UtP9wDPSn2W9trDcUmKfdHpSqmp",
  "key25": "5CGxayTQMMsDiSjTUWd6NPvtmzYvRMduJxnJNUwWrzSLHrt5E8YNogmfsqG3CNdygz7qpGmb2wKvT479WnYUf6NX",
  "key26": "2o5pF5a7XEU5UgQwhEvyqAWp4Jj2fWRaZX1jMPpTaHoJGBnpyqkoNdA2yVayY2ZiaFaLvAPUrhqC28uqTRy76hQa",
  "key27": "3X2JXaf8kcPFCXBcz1pwasKxQEMSc7TkUr2BZwJC8eFRhsceJnEC54LGhcqGAkTEYc5dnwxYzn1bYYpC2YDsYdoY",
  "key28": "52JhMibLB3j3oedU4dVzUpyXQf6et6jwjUFTorFLYyQ9X2bu8ftP1Mf4n3JDb556rrbyc5jxYwgeHBsrEzDuPdYo",
  "key29": "2gRqi9xhrx9HmFJWjcEKtdQUpb3nFvJwLrfXeQM8Xp6V3bbC5cxpF744aqPNsAZzKiaa6HsfwcKowDsS9FBXp14t",
  "key30": "4eZY5Mss3WKFnTZBw7jfmKzWwFbCYCbpwZa87qST21nfwR5xtWUQeUYXm3VT34QRFv1tE9VnZtv7adhGUYTwxTE8",
  "key31": "4A8dY6PAmqZ7jykrXTNKkH4mLkbHrJh1nze9QjC5vT2CaKX2ALyCWubhEMHGrr8zrBeTE6244VNhFECBbNhgS6jw",
  "key32": "2z89o9pV9hAoNgVMsTchsymYZmGQLehxZDSzeTSfHLwobipALYktQLYbutsK5g1n3TPQRQ5cVazRZ9MbexebLNy9",
  "key33": "5qCabQjNLVqKiY6Mgrg2Zkaskv8hkUHM1XcHLPChxdGWqszF5RbG45Vv7STudWc7PFVmxckTPGGVnwASXU5NiCLw",
  "key34": "2M2MhKbHLfaLe15fumsP2QV7fCN3eZWdagph3hZMYTqCZzYhDgXUTvS5MEPyYvvXcHmyCwLhT31XMHdjYooTZpYm",
  "key35": "Q9kJcAT7tAdEyzFEJ8B6crv5rPr33VsWXqsxiH8TmaCiZpqRVuoEjjkyGcAo1iSGVemnPES449joFrfeAXG69ww",
  "key36": "Q3AxCDwp5qMMPyUVZ9GX1sYyPzxG4xhT5n2QBgdMDc6C11oyPfGnDbCcv2mcDCd9fbNXBNJqi3DBe3pSXG8m2Rd",
  "key37": "2PejTku4YTcQoQHjWMo1uocnPr1bBSUxAKPgDUd42478A5bE9xC6rFNSC147nep7g49a813W5amRQdYbM3g68LWM",
  "key38": "5WSwJBp3sEQYjJAYrU6uqPrVbjhd8iYU8dGQP9uBdGK7JFAQQTAaVPzNDFR6oVrqxb3GdsdaSZnwtghGeidFC2gh",
  "key39": "53Lw3v2HnURthrDDVuKCYCkDKf6xRjkMKvPkDKXLbqFLb7yCgDjFcSkTAwexRd4zigTb83GArsbPaMDzDcaHFeKH",
  "key40": "QeuvZaZnwwEweiSTHajS5DJgusBoaaQXdFvLxPJhFKciFQf1JiSeMTrfXJoys369UQiyU3La9mg62ytnPTgNtPk",
  "key41": "65XQdZyN33MFnn34FGMAc7y89LUVjbo4m8A5P171FSaUR33UbpAGtYReNj8XAraF9tiKPrx5LYaoNZHSBMp4bTTg",
  "key42": "5hnjeio6ryHxTGLmJNFH3RrsLtWEp3RPpBios3JBp7pUmbPiEVCyvcLK6dk6t4s1THSfXKfZ1HG9mYEvQyK8e64u",
  "key43": "2CD9M6XByWUmb2MN3oHxznp1GA1Le8RCfJLovWU15jpU3Bqk8QbdSirnEZm1ohAi8teBoFDbok3hwAEPPs9ZeCLS",
  "key44": "3khMtH1vohsYMh7R1QsFBcR475FPKfwUT5SEAqdB7ErDYmsR2DSDVm5xynx2jJaz9eSPwCYP296hpED7MksoHEYt"
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
