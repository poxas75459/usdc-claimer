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
    "3chaQ7qu2MkZPtGxuA4kyG4RaVs99QFT9LTYCRHS7oGAT3MDYXaS4yBN3uzaBsR7QTkDQ8Dyfe65yeaoQMPLJAUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jf9mwemYS3QzaERK3Y78qT4qPXbzq2TFv5VumjUsq5wGpfaekQvpYVp8MvA8Hz2XHBeuitCP8d3PtG5X86MqH8a",
  "key1": "43FtNXtxoGMmQtHJfYEKSaDWfQyJfqB9sMmLhBt9WToatfmdx8C24x8h9XmSFwCzTv6ZHarVRRwekPYiYcLsnpTy",
  "key2": "4MHz6ua5PXr3E4AAtUAkxxHaoTXtypyvWAQqpuwyQVTLKbsrXy6ZGpEA26XTC2EP5msaVhGwrKpqib5mQwKMqmoY",
  "key3": "49meZghoJebneK5aWbzkVSe9WXDb3FQ1S6rx1RJL4S6C4x3DkgqCexCyJCcBfhzt94NrzeufLw3Y5f9Kti15vQb8",
  "key4": "5LRCaZozwun6TWvqbj1EocN5hTBMY2d1ExrfYN9ZiPFntVE7aP67tcKykbeLa3MM38zNBn1UC9yFmQqNbWmt6598",
  "key5": "2bSafcJBPuBnW6uVjKZNbuMhERUyyLVqwwiv9AoEuiXCty6WsJkogfWRUSZuho8qPNVr8FVTQVdfsUc7yf6mmQXN",
  "key6": "3CT1sm1f1As872ZzTq2xUKCeARwGsgGgTKCnanNEmbX2qVm6vL9Jsdet72KDouTZSNFCki34PFEFxhVBnU1rgaRL",
  "key7": "36eiUw1T9DcsYZTYJfB53DanMBskyK3bFLTqQvWL36ezpW7LovEb5uXh2rHQ7KHWQQE4gsprkSbmGB3GmxGmmJ8S",
  "key8": "3m7q6aPWpYj44Hf9uxqcPDwRjEU9SeLwcgE1pd6AoSN2Pt7SLnT5MmLaVcaJazJ3dxVdUFcMu2WNMT4rRjxLBb9R",
  "key9": "4pTtrSiqfMczXfAQPLdpxFUMfbzJJCE1G5yBn7nU5dHq9veePkeMMYeX7Cpr7P3mQHpMWfxGcfjydQpu2uXYhRkz",
  "key10": "2JW6ZZGmPuniH1JmspRG5b192kCw2q1Cz2j7dEFMsXqa8TV2Tk1c2WTsA6omabYyptTB9V7FhZLXZEkZ3Sxwbc7s",
  "key11": "4jYmJocCm35saXwEyMUJvJKskChQNQdJcBJfZNwgwDJ2CpHzw9NBmo6EJrxTNzDcnm1iPgWBGz8xuJvvoUUaJQEv",
  "key12": "4qegjnF6f8UqABjEpe9U5dQiU6vgwsok3EhSM6xAmDhHPAabVhgpU5ryo5nGMUt5ZECpr5BpzCrEx35WNV6xQY2j",
  "key13": "3T45nAy3MT1BTGbB1JyqV3CoChtwq26ZTZc1UJCmZSQruVr5c8zmb9Dur2RLogNRVswLDrkdXHkMJUWYrJtBzu2P",
  "key14": "48ss6K9TTu6zizcDo3EATA8aesdHSh5BG5k7scFqTHaiZY3DawBHiSFk648da29ijFo9otcrzZAEvt8Q7qdntQy9",
  "key15": "2zTwBouaq4VuwNLM6v9rKDys6KckLf8qsLTseoM8dFxrbBkYfzQrZjopqXkPNWeGU8dwDVfauNzixCo7wLWGrDqv",
  "key16": "3BtfcBBSNSjvijqDnZZCrhGYnewrXPBohxz7dRymjQfouaXekJNMbZGgjRf4htPzQ5zrAJEDsuvoR6HtrEPVWf4L",
  "key17": "4Mc4CeXsVU1qDsqEjcDaFPco2UW3GJhJ7bRwSxgqjZbGuW1pzjH9sWqNqmimeAnh89bYUqwBpzJhgZ16CkptR8go",
  "key18": "LzG9mXSCyZWZEYtNST6rikfknQQNfqz7ekWVshqhJCQj4odDD3ZY1L8XpLuJ7NYaQMqujEGHVjK8F6xRfmQFm5i",
  "key19": "3U1viVVsSa53iSaHMEahUi3m1ygtmV1p5rsCydCy9k6cc2THaV5rifqA2k4iVMwhcPwbPt6vpXJvu8ER31tzwQ7z",
  "key20": "2L6eEGncGgnwgsnUvhpMUs8gKicxnGqheUJmSr8Xqbbxg7J5nUc13tt4haSad24yYetow8a44zXsfeBsDUaj61dj",
  "key21": "24QoDcADTLX7GZiA8VJUjXEGgk5CvbmVhxDoVYTY87L5utDbNKPGqmpaTWCbWNwJp4h5ju4S71uaiM3r3XJVurRq",
  "key22": "3RiHTVZ1yW2teYUS11n5WY4rT3SSGB4ZRwZ3Rd7tX9gYthzN4CgvECZWdokcDu5YYkTXDGBRe64sZDZ2VZeRj5ZB",
  "key23": "htTgTkRQv5fqhv8zaCRCBnZ66HGQL7yDVLfMvAEL2qg87KHZBNBN9mKsPEeQ6SkkEMtEhZSfdTV9yRKXwaBoj8B",
  "key24": "42PiWhsK4Kih4XYbhzG5QZybY5CkSyX3e5MNQcbj35iSpx6Di6VFprcaKuBEUMcXD6em693oguU4r8fotMeY9Ek1",
  "key25": "3ZZwDskd41L3bSK5uQtRAypTi8w1dVCCTWgPfkBzTteEFRqABZwnyiAnYQLPAXF9AFH3MXDRYteoKThh2q5zHQmk",
  "key26": "2U2mHTxXaXb2ePkLieVrz89ySRBXM3g3uis6WiycDJVuEPbPZsCv7jA8FhQeBX5PJVRYg1bkTDEVnpPCpNJgmgnf",
  "key27": "3zjJKKraneQdRCQC1qSbrxAmWHYTWhXS6XegoTmFgFKtz7bmfmvaceDTxB3PhczTMN5oMiwMG1HDeeb7nh8GjDpt",
  "key28": "KsV3FizZubNkLgNFRyELgTXvTBWYjLi94d5GtzAP9cFHKNgrHeFSzNQSfbBpBSE6CUg2J6Vby1Gi9E4nDfFic9H",
  "key29": "2pA5aZnUAXxXb9fEfGBVp2ZEgTsTXVLyRx8KRKwUTgHFkzoCiGNj9zo378u1PwTomXM6VJcFycz7DCu3TVzBa1ze",
  "key30": "445oeM97q9gU4dKxhTXFP4cz44jKzU3sF2nfdBwYFK88WQTtbBdTsccjUXtVfgSziPseqEruvD5boD74bQ2SqUBf",
  "key31": "2J2pSX99p9XwqeZn6Dz387w4yi3smiqJG4Di2cwUz8pojwbKKyQa7DDwq1koW2pLMo8iCp9zNcHKoy3mHsrq1fmg",
  "key32": "2wCVqZAhJN1bfM61j2ckCx3TzyzpyRMNQH2uboPBXRWUQ2i5noUZCKsQTpssf4VtotpnjbZdckb1yQNmZEYntmvN",
  "key33": "T5A1dbQHcQpawybYahXCopY9fTrBCFCD8DwrjH19DkL1eWRardxZ5iXvx9eWKLocZKj18g2NQhe15vaA6ceH197",
  "key34": "4jw2ZY5M7qXDay27TxYrcMPBPmUazmYAg2PMmTesFYAmZQkVbmGyiExCPtuNShbM6wTwMHkEDLjGz4uCRnakmYB",
  "key35": "2jUk7uLhxaxjiYPwdAGjSSoQRt4SPwrvdejGYHSQgGR4KHLSYTSAAaSnpmpdc39eRjd7eBdbwH1CxPBfbsKT5t4K",
  "key36": "5B7usYNo1A7P3qQy9T3ymw4UNP5W33oXUg3DyahCeR3eFfoFD1ucagUbFgJzHdD4h7yabZPy3AYxp3XVFeAakwzF",
  "key37": "ofmEYofDuna2c25nRoDfqdHmDCvm14KiaR77X7ZwHPuYs3V1fSwLuSrWZz9DGMctwHmoMuxTZyXidVjEP5cvkEz",
  "key38": "5DAAGxfy6S1oqSD4dG6WsGS8eKR2cnYu6M2AbymfoBm7V8NvEoYGCK3foHpY3tUpCXkgCQtHgLo5c9WgV8q7ijtv",
  "key39": "3SsMvDXJs1P8V7ifsWgUb92sfjpZuwWqdmS7MnBPp5nHQ5mR7nvVg84YejfgBgQpRcE7gsLdojk3FEo4dCPmb2JJ",
  "key40": "knuZAcUnAzvbVrN85DBvdfghiG9dtP3EkEWWubAgLZeu5DK3kjotHq51hMWB81VBDmq9WNfzrQ2fNYR9M8wTdpA",
  "key41": "fvpUmDRkynEjuqi7GpYuNisrEP7CjKBLqbakXEzdAkUt9toaHwRLw684stUYuNKo3i89ZufUydtLwsubuVvoSXx",
  "key42": "2gKsjc5BZ6GkX8NYfCUGeW2NiYw2UwV4aBBGsPgDMZnzopNtZP1Lu8Bk5jUz4fWgHHdnqrbmq4xkHguT7DXmuj3J",
  "key43": "45QAM2L8Fd5GQzDQorzLDVRhyu98yApXZQf7jGrKotUy41QnE3JwN72L7GsU6Kwnnqq3VDqbrBhsMaEZt22VQPKd"
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
