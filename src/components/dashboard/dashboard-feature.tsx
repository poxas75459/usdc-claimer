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
    "5vtU57SQVUUpiL7oCu8EghhdLCoSMmb8HQe8hzzkrsTE9bgkdQAkaQuooYgkXEoSXWgkrDQys7ei6GvHP2nmD2HH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dJcqGdAjHQijgbpCNAnZUxVkWoXbZNczRWivkRtJw73GQ2rPj6VQnRxnivp92htoj5N9WprqVc4vXm8Kg8Y9SFg",
  "key1": "4abjG5MmPhZjrU4aFdVSV5wnjSvVfwW6FFDtz9TsuSULD2UmnULP8sVxeE61qZfEQSbEpP7EhS5LngGjBdKFQ3sS",
  "key2": "5BJ3HfEjG7u9HAChJ2ok4ZEW2vbp1vPwqtyGntyAL1dTbNriuZLZ81pirwCqdasfqBz19koXbqAPob2AHXXWQmWB",
  "key3": "5RkRUih5uo6bwKZCwkdp1zcMaYJJeJpoUQ5cJvoBrFYgwjTN2JJa2wdFYLir7Do5pNmwoctq6FMxRAmcoWLRpdFM",
  "key4": "4XWjsBfjyzFPtfEnWAfyWLGjtnYMRHMHFYDJjESooaSFVA5Phjq8GKJaS922QapWPqrZMwYCchbeSoryCqPQtLbQ",
  "key5": "3uH8B6sKbWUDNhp6arZDNXGyVYiMFnodaKvo5KrjJQhvgCJp2i67FMFbtPNyYUNMQhNURJENoxs5sj5zzBn1Qtrc",
  "key6": "3MdcEhLjnbWhpfkbv3MKdcy4K4FhnGmoZrSefbmVnbXFnWeY8VmgLNWgLunh8N5pLXTss7AWBegdeTw2AZPdGmDg",
  "key7": "3yKsP8fPGbYM14KVpVddYny56zF7UrVX8Zwi3ampWSKz8BqjGEu79z9txAE5cxUhjAKiARDcHoXoV7CvAGiGprJT",
  "key8": "3U7RWVgVPKiv3coht3JmH6UYPhsegYh6MGadkJ2tf4mB7husB5VMkBrtFN2XRDdVR3oYTfmkfwMjokQTYYfXiJva",
  "key9": "31By1akuip4opHkWtjMP6TxY8XcXEPvk85Y7W5npdMJJzqxX6EUFBYfkzKkVCacUgp8BVfqRuw76zoHUhri6ALzd",
  "key10": "2tPUuR5DUNhaRozDmV586uo7n8mousUZFhBmU9DDusPDJHK6HB4TDzKDZp6ymtC6jGFmZx4hx76iyzHavq7JK5w1",
  "key11": "DwjQSPR9KBkPEfGRrVW7vt73dCXZN6QszvrgS8xAqPKpGPSyNwZGYbZdrHBsXPJ6jUW6fa2vJUeXXpZt6JEMu1n",
  "key12": "N8rUPNcG4rupKmmg2qv3tPBzRUtN6pJEm2B9xew1Re7Fsp86JALhw65Q1Ak64L8vHPFyx3ngyqsRb211QoYf1Nj",
  "key13": "56SqsxthjGFhromRe4hNguFQ1m6L9NZN6YSHwJHhS2idP3Dk6n7mxdQD3kXVeZX1SMoF71v7VmB7zmANRMPAvwax",
  "key14": "2as1fA5XREXmSse3JDD83v1M4nQ4j7PqPbqY36Ez4nmNQYEoLH8ukt5F2VdHEQh3hNrDxuiARSXJTGzHiTEdq4cS",
  "key15": "2cSTDv1Ri7ywbtbARqBqHbiHLdWGUx1gaettL23iFsB5dFwdywiF1hisp3nWymz8kkwSQqckVatEa9NNTUhHMsUT",
  "key16": "5GdCfogeJeEhJRbDRHH4eUgr1Ej2qs7pS4LZ7MLTjyKwf1mBnEHNEQ7hbRPuk9iQ6qHFiiCjyPrLdnVzZ8BUZiuC",
  "key17": "57eLrwqYXyK6pk9qN7jBWKqmvpPKjDh8LfjwUhEXGeXXEu68nXqmJTyRXZJx3Vc8AA6KLHDaHXWdmZSg6RAgt9GP",
  "key18": "ZzJp3vyGkrTkTmJBmH8h8rEyXLb5nBwWj3KGjccn89hQhdH6mraiG2qXek22wEcTzDyS4mUE13b2gL43e3b9Bar",
  "key19": "4hrWmaFRcqZPEU1NiS5EHEmcBiRADqKKJZv9iudNQ9g8dydU2y4tMXWd1f6E4BT7ypURB72tCwgEuKBGSbqRTXYu",
  "key20": "FF5Lou7MuXWeZYuHTcyQtUUrQrSHS6NhTqt7jo15CRQdpZgEdMxw95hjiQwBte52nDawKsi9enYKJ7ws7m3PDhu",
  "key21": "4k7ccT37etXD1X1ETNkzC2H8fNZzr2gjyBCwPsyFYA4NJ5sgtGMNk9CoMRk9hX4x21kr2frnwKasggykEWaVbfLf",
  "key22": "3CFJ24Z8XvU9ACSUQkajiJPvTH337fNs6cFkpKLFThqAzfCKmpSz8nED3qvTpuEqPdPgiRWXKC9eP4p4H8T1HdJw",
  "key23": "bbctRoi7zLs45DueXUjgff3j1gcoTmSJuD9MZpxAGb2SU95c6fbbStdtSzwCTx2HesWbPHj45cv64zFLgpa678i",
  "key24": "39UEyQ3gE1PYepkPFXqZyemJioi37hsNzuj1pFzzMFMpGgyJ3dn6iaksE5UfDrnQqdkDNE35ANo77CGHNY1DeBmU",
  "key25": "Zib4Z94jdky73ZuEnQj7xskcPsshBb2Dx3uNxBCWP5fZ8cgkrNeUTzbM2b1kraT1fxwvSGcmXYrhAjwXEsarKGY",
  "key26": "XALiwEMXWWqVnAWMdp43qgErrSRdbwH1xnKYKj2gAWj2gxN2HgHw5cRSDtqbv9Lsy3DqUk1MpQ3HbsRVQNJDZCq",
  "key27": "5avn8nsqijXrvFW8VN5FEEkET5cin235yViP2L3gqPHvrbUhsBGiYrqsNQ9kDKr3URV6XDQ6RSbng2xADTF3zdib",
  "key28": "4hGBGBarJAdSgWok23tupdQycD8etLHJKaGEebh6HJdpJ7KYyCHFQJQ4bmdNNccRedoRSxgVkTqRzpwkF7XCDrXJ",
  "key29": "2rsUrtDsHnmyrcmiEaMvggAQiy5V9g9NfMrQdhxsEXkU1uDKAnXr3MTBztm1AFXSLf9qcHN3jSdRMTikewAJfvWA",
  "key30": "2xh5mH7GrzRfqbcp88XxvuFGp28QEZ77jwPRfWivPjxrwQdMYALofXyquxGsd7YCphdnCujLmuzTNrbGhAM2sRRe",
  "key31": "Esf9cXa3RgXCQqo5N3ZJm4j2ScaLWCodYeWi1nVLaTppnMyacXKodnmpBuau3gCazYYF72g25sArrmS7CxCtzPN",
  "key32": "4vFJ9MQxzdjHmKCSahpNH459LduSMnB5SaxwSjFswSwp5McyWmxvY2Rb8LRq4dchhbMW36ftFdqZzFrC2fPpaxfz",
  "key33": "5KCD99YPVzZHqzMtaVw2tU4TdTx2RnqnCo2MsAzWHncFh7Rm3UPnDPTS6NtF1wcdJEHAxHX5wc99exR9mzVaNDeU",
  "key34": "3FvVE2q5EQ3vp6eYEDodRT7QAfWFDFSBfdmJ1HB884hLTJB87fwyHHddPfeKvwCoT1WC4wp5Jcf4CtcjYpN6omwK",
  "key35": "2WmjReY8c1KrQPdjJEMBJxbjB78srvnmfMbWg833Aw62rMcoZCAkC38i8zeiBAp7mLWbuu1mzShdBEoMnDpKFKVB",
  "key36": "27ABLeiiH2YdLqoAfvMHKUaphvDVPg7Xbd8U5E88qKN2dhr61swY1EyDRRDmj2jkc5PS7YNNAvxZQWfZJCkkw14S",
  "key37": "23Y7NnDvcg9JRyMKkUnY98kQh8TcqJVSZQ7aXASPdZLqVqb1T3Y8hajosJimf1ZFj5esK6sE1vDXbQUth5wxftVJ",
  "key38": "3c1Jc5nrGpXkLAu1Mw6juWwmTukyDsxgZDfCiGqFwaY5M54YdTmsjosSL9GdCx6YdMoN2aWu359Xvsix4GECQ2uP",
  "key39": "5qR1Z84LqvbMZbhEWx9FkTcZi2wDvj7mQLdWM7qJzxAhRaYq3vHRgtsUMtmAPvKzbferLSBUu4yacoR6HLdXj2De",
  "key40": "424kfRTgMzeZQCnEwtTULv82ocNm3us9qhFqsu5wE6dbqgqmGm82yCmvMZkTuLghyTSLoz4p6JxjchQusE99V4SS",
  "key41": "58CRbWEg3napzfngKE8k2p2iM26hxMYaiDHa3uePeCqfwPm12z3hT5RPQ2rDcbiLcCha4kBEeKTBKYEUYWVcmLnX",
  "key42": "4ina6Truc2xo7mRWgwfea9ynyUs7xGZkEnHdA1SmnEquJKVt8db3itEZyVC1BmMLwhntcRLQ68zXSMiFSZNcAH71",
  "key43": "63ZLSEERmrFJvtzvPndFJMVRqQPTV5SLAjqBE4oNj7RP8rJp5uAuTFF12pfUc4oHMRuHmbx51mYJWn5v2PmC84C1",
  "key44": "2oZ1Aj1EBNVSskcDEXCMRRe5s36riFJySTEkEFakFCX7cqeRPwiuGbhEEfMcRkbh3t1kzhZfPFSeBtULhb8T7E74",
  "key45": "wHHsU5MsiiawPyLtbT1gJfcpSeHkoFJc27ydxdiZt2q2yNDcbWG3j4sWes5MNjX3xwxCCSxzsuySQt5XT7x61V5"
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
