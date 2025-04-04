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
    "4T3StEqbibhLB4BpUJqHMXf4QYQmpkhFq6od1hrAgq2FmyUXG7XxoF3Da7aNcq1j1mcS3NwZFjU6K2pPEZ5hZRVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f6GW6jor1rTUQNrH5ePkVwwsTa7qUAqwZXcgQsR2kvz61fcpcYawoj9dJjrWeqbSnbHkKqnLytpkmxPurj8217M",
  "key1": "3zpZqRiCB3jTqGpdSUpLBKLZztjYWYnq5JjZvJ3SJXx7Un5VPKzdRtYZ2BxmuvZ1VkeH7Eu1pGtv1y6cx8UNdYi6",
  "key2": "4B5K3YcetDZSdbPLdFMTZrwsQdXZFDXe9g8d3TcqBeWLmwa198jbCBAdmfvAVQmnS1Bdf7wqAd1pCLY16k7cL1Ps",
  "key3": "26eA9ccs2zW6Qdg7ygZCxz9u7eadHQNmxrLfwTxgDn29phpZSokKNTAPV1y7vGJiir3L1rqmQ5MMHHntZyNyX8Pr",
  "key4": "4afK3varuHjGa4rkUQaCD8cQvQs4DPFNg2C4KFDuw3UoaAywCVduh6nuSsb7jGMtTW8EmqL3fwqgkumyGAimBNA2",
  "key5": "2ZoSncdZkNKkzvgzrom4hkVRxz6SounZghNLSizH6FYMLjLpq94mPuxrKUU2qAz3zonTiRbmgdHJDNb35QGCVwhy",
  "key6": "62MRkqpWJkPCJRoHyGNEBemaoHSPowDyN3ofzTVYBpHy3CKHYmhuLUHKu6jmSDUYKaJZaX8uNdavUxe3TpPozamk",
  "key7": "4xSUFg9GJXB94GwYEQnfAR2aeWJLsTa14J7YSnTFTkwxasofBTTr2MLUzaEWkSJJaXaG1FK6iu3eTcdky7jsngPF",
  "key8": "jWF6XBR69aXsX7CbqaX8BUfYUZMhyBHnnQ6frRYFEfMg38dcuCdj1pvYhPc5Aj6m8w7irSM6JUfsZhAQ31wNQJK",
  "key9": "3sfbgej8i11C62Q7s6jG1HJcZ6Mdq2udcLEovbF6T15qN1aSrwnjZfVT5tgzKPJqDhDYozZSY2C2G6m7r7xx9FpQ",
  "key10": "5y4XjhEcq5VLMvEZ3RNvnCZig1vPxhFLeTtwhcyCvs53GktQuEcURkvsGBnvKVky4EF7yqccNZ6QHegbtax8qq1G",
  "key11": "qiemr2N5C2sUw5nKT7qRS6u7CvzFVE9PiMwHB92SStrjScY7BavfpJTojwknMQQhm4MQSiZZcHxdC8zv4x7kjFC",
  "key12": "wgzsCkzg1CQsPpZPqD4g9TnZxr5teLauNgAE3ALij8C81wFa78ATd1mskfUTvmBQE6fyg4gACsXNKMrWHR5ekeD",
  "key13": "2LP3xJrCJZ7P2dDgaUKr7Jhbkv2iW8JD4rkC8wp7VzjTcpZX5usFiZBcsct58eQozUUjinVtcENhv5e3SbLq7dyn",
  "key14": "5GkHRMHmmxNtAvQodo3sQu8k3X93mrhzsafe4ZEJypNcpVCEApN8bcSFsNW3fKiATRUSXZG8aoP4vzo4cJyseDRj",
  "key15": "2oKrW1aYKA7jH8vp5w36qtDAWqyPxsaUTPBU6yMnsE9AgEXcm2GXEzypoQkL78r8XT6zWoszULQDtz4avMkz7RUk",
  "key16": "5fn2H59A2VheSYDXX1kJNuytQyJ6zvFbQebDHodmBUfqdkueQbMeovgfcqSRCgfiCrpxh8yrwjmx7Lpc7yTJUMxW",
  "key17": "YR7wBbMkF6XhToDQVya8CkTDMPU7Pb4usiSRwABtJvJ6dC7ec5V59GiWRTkQYMyGo1D5YKdswsQ6Aab793oKnXy",
  "key18": "39DzG2S493PRkWUc3N69nFMT42dBeyve9C2Ls4n4F6igQF3YkU75rdJrEdeoJjVDCXFj6pCNTWWMdukP1JmUqNoN",
  "key19": "3eLFg8nH9VvDxMmNJ9hdxBAy2LTc4D6dQALeSkbmJNdoxNzzUWSdNxP46b7sp8os3WJRWq8ptNNyL34B7TGRa6yD",
  "key20": "3Ca64tnxfDoMuYaUEaZo6arc33X8ibwdxS1pMNcUqpF72SLA8yVgoE3NjJSAz4DsL3wkRLFsLsmsVy9k5JUMF3gb",
  "key21": "2R1cqRT9Qbzo1uzSXpZuAgzNAbaChNMPdyyGHEU7Kr7hiGhyV8zE3ck8fRtUneHTj7uFfmXUhvoFtjr9sw8LSQgw",
  "key22": "376KVMqbdcJ7p3NAcWK3MHhkVQvhQUSMCCLLeKxbiPxNjnc9KqTFZtdDUgUdvMTRYaNkBdKogJJBG6PLiW2mVLQW",
  "key23": "4mX3SdfxrNqTsyXymxqfujJsHHTTMUwbYhw5L5XZ6WKSU4KTcoWNAusX7gQMxDEhd71oHx7yZLH6YoEqmqp1SBNo",
  "key24": "juxofZQDZmPK52GM7nQkUZnbYE3pcp8gKdFs6sgaXKaH9WMsYZq4sSkMVbqikhcZFzLT3cCXFft3WBjCHMtfJdC",
  "key25": "23R6LNjT1J5FymLTbSVLtmKcCkeb5jDuLG4DVgtWyAL6WYJUfq1GatXVEd5Gj4TFjm7N63DRAk1t9WAR7umDs7C3",
  "key26": "4MRbnpkr9pivugEgD9BMKpJoxtHnLbBGdrbF6Bd4m5euVtG24wfsa3KocsUAuGYT1vDUW16CzURvCiP8Cw9nQ47g",
  "key27": "UeAbETcRzZnqaKBTZR1zpocaePQxDbZJ8tGdXG29mgQSWabjLs1Fn1Yu4vTiWBJpqwRb1cuBmjqcUcD5URNEdcg",
  "key28": "5Penu31H5TEyWXtswAG3hdVyQrrvNzaSKP228CZ45wAjsueHHGRhLwLt1MmP41ukmYg2YXmxS6gqTqigdpJjfKEC",
  "key29": "4fMWQ7eJYWQ9fgkv3Vn4RZQpyfr8FcjQaiBdxGxhFezEychVS9M3cobeyLJwJgRPm8RNghydMmxppdzphGRAnKzJ",
  "key30": "2kFQNR83EuSgERR7HpPag8APAiQDyb5Zq7PW5fCPJ5MH67jqaodiz2fg3fdnpt5zB6ywnGcTV1xiuetovnH7FMzo",
  "key31": "2UQHVfBn4Czutk6wnR5qLATsA8JSFVsARDXY17zrZHjEf5qaGhJrzJaKcVZgcrSire9tZQCqPuShULUKMtzNP5BK",
  "key32": "xhNATzYLkzHLRRTAFpVGTuBRPm5zFnz5sRFe16NXCJ3uhy99cvzTQmEg9fX9sQLCu8uV4deRHgiCVZb2gRiBD7g",
  "key33": "5kSnyPK64zwFnvvzXA3mxZmN5piDffrf3QB9w9vmUUvYktECgMZcaEMyXxo5GP9cVhqyNeF64JK6se1oPSfx4JFi",
  "key34": "wdR6M1VDdnyJaej9gKRxzLgtx6jF7UQNX9SBafky545hDJa6TqEr5MvaHeNMVDCuXbihAFK2sRQ9AWz28MSV5Se",
  "key35": "42SNSBKXmf7ZUTDs6dN5ybrPCNfEzZDUFExDuVX5YF5gvvoGyG8qT7VhYCZo5XSFwZ9WRMiMgBcwUqA7L845TwgQ",
  "key36": "2yhME4Ec1fUNCMYTxQaD332XgX2M8DEqF5jYGuYayVQEX6B7FHoyTZGZHJBkiXm7t2dJ8JzP9V418v9RVnGgyya9",
  "key37": "25ztJZsJdQSUhMXmPg2qEGkJ3EPY4uj6dbNVgZ51LE2dJYp6EJXEuzRSFEt45e5362wVgsn1mUEW71hXzar945au",
  "key38": "2LM2oTCvYbB9NUKjnnbbMwYgkN1bVQeeqroZKs1ZyJBuUwC7QGEcJKRh6xZA2qkxFJdYptxVrsAXf8DvZa99isYJ",
  "key39": "4XJQ8ZBBumJYtTHFCRBjAUhvjykJzru6LvVh4E9weyWhrEMwZEZnjEEvagfrdnw5c7AsGX9qDEz591Fp5R9GWsnM",
  "key40": "5xRL9rpeQWfm9TdB7NpaEnViuoAZXCbT1QMyYQTmsMfjbLy1ZiLcykLPVnK4JemabDkJayapj2rpjiTMJquT5PWc",
  "key41": "2Cbb2pHV5fGAMnECXeUvMRHfj3siMbM3PzSNthnhA3gxzrgPChPADGzY1Ztgmkoidrywy1z81bqD5j5czpnd8Ymn",
  "key42": "3UTRxJe7pBp7PxomeNRvAibsgfzhmXYHgigCgB9NwMahiqbcFEJ2ygE9BFVsJdj1qPLbEN5EkEUHoHskJkrDESE7",
  "key43": "JrwGwLnvA6jbZwjwqUzi49c5pXpp42QMUu7g6RihhiXxEPKiSEPo8UfphQNRyYrMEguBjJa3taJLW6BbH9o9kyu",
  "key44": "3XSbtAPfwB8RjKLMmj2ra5z4RDBcJdNWZLL7ayRCEB1FQ9QL5iMM7WyYjf8r85Td6tBn1Ln3PcnsrYptQVESUS5k",
  "key45": "5p7YEgcrDaNPSQsFyZkb95GmdHCEaqZENyd9sCr8wfUjiw7te8DcxD8qU59Exk5JbKEbkHuHPmVb1DANQMsdV7mD",
  "key46": "3ZQ1qSAuoWNzcNGEa6mWQFo9dBa7MZrWoxidusmPTjRBR8bYBNmD5fpAu41S22ZikgnDrB9Px2ZJ6xr48RDeKWd4"
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
