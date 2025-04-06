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
    "mVGV2KDDBfX5te8Z52Vi6yzNhm6kAnp74dtbRgdMWQhouu3ZPum65MRhH6z2ned2Dyr5iA2Nm8x7acEu27Ruujw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GrrgRuJtMnbocUGvDgYTP8ShYkhFeybudrEvz9YtHVR45mkKs9Ecw1js28YHeiKD9EwbK21tNqoZgdVYe5ZPLDa",
  "key1": "4CkU9EPhMbvdWLJD8TgYaGMGqMj8c1UgV6eDndN9qKW7EzzSBKdMYAboZpiFbDztjG4cMPxvLQdQe3bLr47uVFqq",
  "key2": "5Yxonv417dzM4RzksG3GQAndGT3VFYNg1YH5ctTZHwdFxy55bWsnFiFh8Z4SRqk8FG7hnvNvVpvCn67ZVhc2M9R6",
  "key3": "2GiPKuQi1xMJXbFtEiZRMV1pVDRo1wHduzPz7saTai7hbjnZhW8hKhBHtyMCcmwUufCGRrosUoEjYZ7Txpogs7EE",
  "key4": "4CBaNfYQQmBW5q4bLSG922on6GLzHdAy3HNpCp3Ha119RD6tAHeTrhMmisEkhijzGuKqeBcF9chNUtZK2YJn4eZb",
  "key5": "4BWXmTd7SW9mMQAyGHhTS7jEjoPyTxZQFdNf8SzEbnBrvLZGarLL7sxAePmaSWAaHvp9VMzhCLibCsfadqWhtMvA",
  "key6": "syhNnZPQzMiWV6Jih9DyeLujJpfCUidPxAzQ6vEsnMhreUCqgVcdKRGMMVWVzzhCwKbHmkm8iTgZBMjjQGXFCGF",
  "key7": "3HFJ6ioNJ6qcgnuMm8PdoAXQ7qp425BGz63WMRjxjVBq3qii1XdXFw1r6oYYmMrQjGUzT4eKcsnuk1rENb6CCNqQ",
  "key8": "3fTyYP3HEHc7u4w6eGtQocxGKBc7mDUSBi9oERn2fCNoe4tohnFW79bGA3scwynQYGwzyjMHT7d4KT1WAFsuUH6T",
  "key9": "5mpnhSMSjh4CWSGftm8iPCoUdX9QSUS8tK7F1nz2rsmtBaBM6AYG7wDFvPEUr57wksizZTipnagiuCNGjEnLLm88",
  "key10": "4rz62dxpRwKv1UY9QQiDZSuUfXGspdWtg2nyjcG7oxHU9uVhNbF88ASHCiks4tM8FREHWX1Z3ciCj5hBHb6Fqd45",
  "key11": "5B8gvGB33zaqaBNo1BaHjUbx4UyyDyAMuaNmKUmB9anBaMhtjJYkDcHTgaBcZqAURRsnJTg8JoBL8wXzbEzM8PMt",
  "key12": "3SQkbZtrmbma2ErH4k5H5U1odAwhDskpXdaH91cMgATmFTUnfD1Xcw1BpWa88ZFZjLuxsxVjYBSGYKPGoNUBgZpE",
  "key13": "4y3dv6yiNLSHKLoU7vEuVkFN9W397JT4CW1Rc5DW8zbDFffaWUrTE5Z2U7YnF9fQwc7MPbAyfwg8LjiiCUYfNpFn",
  "key14": "3GYp5LLbLTYL6S9Zx4yBCVm2JKDoDNKJ9G6jswLJQ4vRuGb3LfK2KQbDVgFfvX6rqzzTrZoMFeRUnD1Gu9AcBZTn",
  "key15": "5nTrkYnE4hXzP5vxu9Vi1bwbz1KBNn7cUfG9cM5rukyrYkSkotKRH8f5zas7gaLsx8QtZ1UL7DRnx7ax8F7GCNDn",
  "key16": "2NQVfvaiauoTbxENrvU3PxEmfEurK5JSMoUeMoY5861efkUgF76g6xXBa8TH3jPMh3Tmvg4JmF8Pb2zdifUjwzBd",
  "key17": "3cPLJNU2RJgFzuubtjAis4gKCuFRRy7axU9ES4T7ciFeSYgqTWJHffV1Qf47oDwQSYcH6gWmq2pfQtogT3yBTHHA",
  "key18": "CUkgF1YdFZcxbf1auJpYN9Cs5ZEFiMG8QvckiyWegfvmY5eLSadyVjpm8LqJKHvoXoDBCTs5kpo2oUJBp7fPrDN",
  "key19": "2WXRZf2VYxYxphfVe3jQYP9v5BpRJuLFgyXdQzWMU7wLW5THSr8Sjhg2WM2WHvf3KLRTHpvMWYRaD3KWCGHjCYvw",
  "key20": "VAJjq1dzujV7TdMtnCnZUETeVGXQKdpCs8svErm5uG2Cdo1biuCgSKxoeM8FnPxR5GQvEN5ujsfaEAzCtMCs4FS",
  "key21": "aRrCi8PXXrD7CZwHcJcyipyLjkKj9mfv7t3k9nnan1q31Dyq67qf3pQr57mCCcLcVwTGndH5LVcwqspNUMXT9xP",
  "key22": "4Qq6bmtxjkz7iHrjje6DcBGapKDj6Af6bZx4bZEor7wFoU71Unfqd9ZNtFzhqG7V35U9qGLK9cVxMeZXPbTkrHoq",
  "key23": "2U66gyGjvgS4zpvod1rcGCzVyCEMT7Tj56AK9nkZi8NJbdgr34GP4k4c7wJ76F6vWxuEzdLrBGSjnfVKvgR78RBc",
  "key24": "2wkAjfvq1kyVRYREi3GfqyWzrVDfvVjDoDUeUhzXffgUjuRxnHcDyWujrRgL1H2pRTpQBCYYVE862tHvG9P52MRD",
  "key25": "7wTFMHxhUE6AVYL8fcruZ5fxYRLhVMaykfBgtwnPdfron1rGigrAZzWRL3sryrazGyxPk8daZiVPbvxdYkNktbr",
  "key26": "4e4ZBhpda9mVmZQsc8gEE2KCtwdJDZTT1t1xzyieWkfTALVuB7p1DPm7nMfhVV3yUbaBEpSbAw1CGbD8ZNY3Js5T",
  "key27": "2K41JkFEThWW7j1K6ARkiG28pYkSthJCWWg3B1o5fJMm59hgsXyQPi8ARp84iZsNnaEJqwWgQv3ehMzrfvVnXCT8",
  "key28": "YHe2sD3vob4VUKT519eTRcWeYdtdB6CC7qk21qohsxkxZYjDyFt3SbH71P8R7F5ugbutcmi4aE8jak1w2wCmXu8",
  "key29": "3GmKEYdLdQxQhzP3Jy7ACQsGNzpMnAxHHg6PHJqYnxHGzTv59BsUdQRiU6ZuJDD4c79zEUSowDiUeVenF7JawAvZ",
  "key30": "3aG8MrQNrunFXE1Dc6HqpRGXMsg3R5rndZnfYZiaHHxcHU2abfqWCBDKNSt6hQcrmrwCYH6dVJVg8vBdmhpdV9zL",
  "key31": "5XMVmErYdboNFR5KwPPP5V3NqVgka7Nqg6XqGmAVp84yGpR45gc68GMjSggdm3jYB8hDjFhB3RxYE264zBakcjLv",
  "key32": "4biZipgzBJUX9zYBVAQuCBRBZqGHd9cT1TyzPJPSjZ1UYjZByGdd8q5iWX559Ymi3z47w2UX3wSCXyY5fdumktqA",
  "key33": "4wLiMhfDEyYUre918DmfzQ7KWvtFXuEydiiNXKYL3HkKr4VWDedrRUfZMhafjdbqJtpEfN9GhV1CLBQoLXwbrMza",
  "key34": "2wFyPCqJRBPXMnpRoVUdhakNU3TijEN1oCvkLZfAJv7Uqnm6b8UtRfrj9mmmDmB3dGhvkjNpyUjH7zuyhrBdoX8C",
  "key35": "5peTKeJxZGmKRhrX1AXw7PJrWABPovMKtXoDJVjYPpje9zW738E5kMnVzTs9NZLqRiDVV1WEq8xHQDaxnowqAzs4",
  "key36": "3g4uiTw5YL7rwKcHEhtUxEKu5U9DRvCP3qPmWvg4edhn1wofMqHqKfzwdcKwr46A9RdzDTyDEHv8isHEwyGK13fv",
  "key37": "4QUt5jbKE2QWXg4wcRn7mu6GkDaSdsKMWyeRcBRMynTWHFPbF8sfjRWJa81NLZBKiQPwwkMeaCfap8GWRFEyK5ZL",
  "key38": "2S73vFyj1P6Y3wpKxNf5K6AnwxqDuF8MwKLadGqnVZSraGmdDKRN5cFpzQoYc9DdQ7fVrwYTT6ysqApNwvxAGGjm",
  "key39": "4pM8rYB7X139SgW6ziR59mSxvBu4mEadSbq8c4CEPBD9WFZrQ8zuWr3UYBV64TNTC1KAkZBr3z6GeKsGGGHb5fnE",
  "key40": "2ctp9zqvtthzU7Epcnim9MtU7heWm3aFQmnKBnznspKdaRuccUdpBtn5hes87gRFfu3b4tzKyXWYBaFHQsn8gnxH",
  "key41": "3CtaqkNpYW6LBnEVrZ7QkgAsBgLsmTJmkU8pnAEYGmPjmv1ovsMbvPwyMnuchMJcfGHvbCfhBMBKREEbWpcmMmrF",
  "key42": "3optTbXewuRtVSBnhgFyWs9H8h2UdxFm7gFsTREE31CiLyVPnwGJ9EMU9ECEoic87Puz7F9vEKH6EorWTmQfpi9B",
  "key43": "5Rn9TigSxnxjLtZumjJCEGDSBSQBbJcHyYhr41yYoueDmgEWos2BtmcSVc3RWz8ueo2Po4Vv46PNs8NGGxxk1HgY",
  "key44": "5UAAgDWNXQuUKH2tgfpPNUo9UVVQ28CnHTeB3V2Z8pEeN8bEaJmXXe1pzrniVBaMW8gycBHUYjM6rmMPiyZxPkHy",
  "key45": "2CJPkP2tvdPZ1h2oWpNSUrz55z7PCEJLDL3ZYXkDVkGQ5e7GDxcD5RRKfcKzyPdSMA8wbieqD1KQKpc63LeG5Bn8",
  "key46": "cBPrk1eKVQN4RYLoiLjbAY3w6XqH4fAdbcwZK5GswZfKmJjojD65uVTgNy9LsHmuDDdxrQymthrN4CMwFWzxrF8",
  "key47": "4FyqwknmyJJbtEWbr9QT52VhKGfFS9UZsyhwgRe1uEtegV5KesWVi8krN4NWK6y5X2YJHve18QiYmKDDBnXpfiaw",
  "key48": "3VLEiwaqPW5KNF5XHsaQk5dv1o9EQAbvdo9bYBMcTbsvGuhHKaRBySWNjMBo2aZJTj2T541pmJ674VAA4Ki5Q5bP"
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
