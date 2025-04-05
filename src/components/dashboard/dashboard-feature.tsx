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
    "3w2y1qaxTnrBrgZBC7D4mEbwCzueD1B9qD7otS9nyFezyNjNCTRZ8xPaBJZTygdJRk6HnDKNpa3WqEfscQD2pBJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46yBLjP2c3V8a1yo1CiDuJPcXN2BuW29eXxMTegGiqfxMTQWify1XFrJScHHybA1fALVy3d6oQmmiDWbGmH16hTc",
  "key1": "55DssRXMSs4x2eiz6n1vx2Pg4mXC8dP7LJpP2Wxeqe1MSMNW3XkFyV4VS8FtDSQhhGYhpKYfe2Yxe23DVnyBTXbD",
  "key2": "9FuDYKQhGFUwYw8EiNbm6UZCJ8f4mnZbv3XZSmodLd3HPxb6Q2Cy1uS3LrzJcfNuJCk4Bx6TBLU1cmd8x54eHs7",
  "key3": "32FgzEBAaUXxvRthDsWYhnXSzzAX43g2Zby8hYsBvQC49HZUftGnUmGuYkY15VchJo6b4ZiHkuLyumFPDLtMQpeM",
  "key4": "2C2ffZmbEDbFnwjrGPMsthZyYtFxr7WgzqR8pz8owY5yZ7nrgv8UNrUTWfwPw8KdG7GAg8aUwWLWSDkKVjej1rLw",
  "key5": "49TzyfzPF3CkkndoV7JMNx8ScY77QXXCNVrfoMBbygSkqzxh6kcsqz8Q9nJFek5D8epyehWavaYyNJTTvAwKhuLG",
  "key6": "5obbpZCE26UFrRAJ4wNgZCV8pVoxw5p6uakTRZLSwU3PiAzs5xTdQpsiG1DvnngEhY9mkQpz5Nkebyw3jh2dv9An",
  "key7": "31rcCXTVi4t3W5RKe4e4sD8ZcWT5PJA9NZjkNB3SBqBUweP4cEF36G5j2o8DgUfyvTNjkWxLSTXxtGmtbdMxTRAv",
  "key8": "4ZinbPgmf76jFYKRw8tefaMHXXRpt6US3vPNHWrFuysYQXKn5YE1kSu1q8LmbKK3hq2ieigw2W2v87FirPk3Jq9X",
  "key9": "52Ffm6XyahyKNm5UbMux13T8DwJd4wgb51rZGEDGbfBE9xnZChERPGdCV7mPTW8j9eaWkWwySc46TNf3zJDhcjGc",
  "key10": "2uMi3pA9bj39ykkRv7jxHJix94fJX6ycJe8xqqjPSHu9vCDEzf1xbJtbfymwBRxHDpWiLyMxSTwJGV5nzvGb6eYa",
  "key11": "8j6FH2oPPcBkNdBMG8QJZNAEBXgDzfWDvtoBc59cPyWSktcAVtyDfbfKGcHZCDNe1Z6o6iuynuWcKfpu7N1CWBz",
  "key12": "4Vz1EJ9yh55YHsENSoTWnEjZyLM6SimSMciW6jssQdJbFtNSibciAHEFeSHNVEvwJZuzi9iqEkrFTmegGJgJHp2G",
  "key13": "4KEXeo9BkixWYWGfow11yPakuCssZg1HyFQz9d1zSoKfPsRZVYndam5gAkX2xrL5yQ5YZfbNDkKY1BapiCrC7oCj",
  "key14": "3VvkbNKJqcHADeEBZYYmcW7D2EvmHr781AL8CQKMVkagnMZrPdZEe5btb7qFy7Y8PfQ5qmQaZxfq8XR1JHXPcgcp",
  "key15": "5wWwYRkdvGsAoU8mhqMg3NXdYnU6eWZhTzzk24TMdAUrbDjwCx9LFgQpcu9VHWd9ARco9tc81ZMLBn5jSuVpcMBq",
  "key16": "5voFV1WtJK5b7jYpWKqRDMEQeHQuxib4pXhyySPSbdrXgQo4Ub1GSnTgc5Gu8eMbgNUfzXVHAptzCYnvnCbnr6gq",
  "key17": "XtAs3wvxg69YpXeunDQi6WQXdXScmvcTq74ZaXFkP2SF863Ke2UoQs8rfuP1QwJcjo18zWbYE7bQp4Zb5cenDBm",
  "key18": "4izD4ensMt86dbRaGmQNHkpRammgaxx8rCcHPNqxZqmLzugjdAVdUQ5Xykug1f84dCCXvNiaMrkSKEn4J51iXSbe",
  "key19": "2R6mENxwzLg4MVQjgkbmYY4h2a3Pn2uKhgrEDkrVZzrhYyQu6KUH8CB5HrMumsj1cgcpcXKoWLkdQ5QKQqMEzKU9",
  "key20": "sBqK9BHZFYm66SV8gpDrWtGH1pRowKnmxuYhxAHKbwnxp1PvMLr21LxxHB8fhn6hKSzsiqDeHLAQ1gu1j9cGAke",
  "key21": "LuH3H32iYti5nahiQpfdVRz4ah4Mhqhpk4mNkD6ofFaScxQCqLtW4M1du58Z6X3Wcy62AHedb71D26h6dgF4nXe",
  "key22": "2G84kcbEk6FVNuex27s8noGETR4ZdjSgmTW55yFCbCKSP2nwKrazRstHqMXzDrPgTaRCLHeWjijBntP5iLpotDcX",
  "key23": "3gQayoHR7JwWJwxiYRuekwPmDBmt9RbhHSnz6UrGznDPbG1NXsbkxhv7qTu87fTiDg43dcgvMaUZ4bWb2fFe1cey",
  "key24": "3fHGFF7Lq9YANNGNNoEXxV27PKkd1xYNWXbTjDhq5T8mfBdat1kDYks3Yp1rmQHu7L64pBaxHVjfPeNpWA4AZTip",
  "key25": "327FFgxTp1sXwuEobw8SdSnCjhb5bKF8nX4YKLViBbhU2A4e4eGdqAgmdzhUB98pBs9N36c9UZzAiRXPNzHdNT2F",
  "key26": "MHmCL7WiYDTqW3jUzxPuAVCQqHQ5iCueGb2J3SDhk62qLs1RJf5pT7qxqDpNfwoUGgKoS2NbWSFjdBoi9ipK59P",
  "key27": "54LCAFv9ifwifpyHoeytc9ZSsEkbCXUuByyb28DcWqS3vHtHKVcWUq4ow61N2HCr5aEQrN7bYnWfh99uBYd4jURC",
  "key28": "3tYrecHKshUwcCVH5ZqTPX5fRqVnUvChrLQMcuYbxpKvap3n2ptPHGqhQs5XvBV1pr4436SSr5BNKHrh6ta19P3B",
  "key29": "seAnsLcg2utuTdimzg7wmiYxF4jwo5SAP5L9MTCXpVHaib2Xb2YoZXCv9MJN2NSCqrEoRkiJKyPW8V1ksNk76TR",
  "key30": "4635mg3VD9PtnzgNEGTEriuXDgzrQ9VH3hJHEWqLK5e8HoqkLqt1Ttr7UMh35Yu42vcVmxo2p6SQ8S64heLTCBsw",
  "key31": "58Hqr1fedQuaaYiFhzQYcjpL6L2BxnU3NL1u7ZmzScCbYSTGHf3vahXwzE7y8hbgyPSnCzXTVGpQcJqKFAsmwbdy",
  "key32": "5NViFWytuoLFpXPubP5HQb7pKqvEVXzNgaYPBRVtK7y48v8G6jDqQneTxn852hQUQxWu52StiTZ19bgMDyAkMqCg",
  "key33": "4mYvmn1cWMyunwhcKPVnPi7VJmujbH8MkGU6UU2REL3H6jyYFwKsptUHQp6nVvGs5YugahYheYtrw9QmQ4p8XmfY",
  "key34": "3aRb6BKzJygEmZrg2mS1pzZj58gCH2TLqX6R2tCraRX3RnCyayn5nuedMTFZinGwzdb335aHsfQpMV38dPtnWFFR",
  "key35": "NVR62oTbkwu5C4LkUoRrvu4jHZWo2QAhEUAG7V7HMBQjJ3iBBvsMoBEqV5j2xgojKFhsiyWAxx4zLX1Jv6g4tFm",
  "key36": "4e2fogh492rNWetCDt1NoksXrxZfQCCzuDNHxuobjcirtVWVnAxQkPetJaFyYbU1r2kjUgAWBCiwxRLinZ1F1Eke"
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
