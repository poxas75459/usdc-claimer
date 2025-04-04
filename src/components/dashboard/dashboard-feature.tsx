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
    "2TXETgiea6c2bH1LCYPkFn3qeDefxYXky5Mnc2XYKNQM8FS1Frnau9jSEi32u6ph9xyKUfmnPmuYArphU1FVq9CC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5We7xowJzcZB5FTpHwEdyn9hnkyQhoLK2x3BKC2FskHrUx8fp45skpJCm9LdUEah5kCN1AfquC5fnUnaaNaUwi8o",
  "key1": "5dRnHX2NB8tKySKzwHvnzfSeUWGKndd8Kjgtr4VAMS32xGFDrdB1t2d9dV8PhZvv1Lyoeg21FhsCJCLgQEgXUFxk",
  "key2": "iHhWqAMPk2CBZ4ZQ8uCMDST6F2358kkWviaFMHkTFFH9DQfBr9oeVdGJSN4cEHvhwFy3Qud2xdubvgZvxacgFzq",
  "key3": "5w27eztxsaPzvbN6ksRw6ZykU9QKy4CpujLcc3wQZSV42G9RtW762QfGxbXMBkUpPCWBFGg93JnamHgyfDJJAjQ3",
  "key4": "34kxsh9ZhDgvL8y9mpSk4bQ2a6XTZ8dWkTcPzAHJMbNWeeDW9dn3PESso6RXbusqbnv7AZePbXN4NH4fECS1nryF",
  "key5": "52WzmZTWMXMUijAiqFHY4T5zD8rszwWuiSeAUT9rhKQQkcFpj19PqYZ4cKFhqbD1Y4TQZdu5Gw8feymnTiN32Ajf",
  "key6": "3nczp6PqRmf18tCpQuNBXW8RfaAPPLo7B1T2m7kLTpU4umXH4J4bomEXrmP97qiyBFhsZAjK2dCJ31DPjkdFkPX3",
  "key7": "MKRdH6kQtG2EwWnNbq63xCY4YyYw6XW8rcQALDX95Lb3vcpG8YECnPAT5eU4rVwu4SFpdnJk4JBza6v7NKJDkvf",
  "key8": "4Z9sqaggimgHSixHJrWgPhkN2zTLVDzHGugBL8cWDyFgfJVyPrnKngi3SkkRNayjVpaETbVZnyL1ajWC777CGcRE",
  "key9": "2ynzofPDNEeyyZqXVcAid3JktUzoD9yaFxLUkgECP5cwU6xifCuehj8BTzSbWp2BnLvWM66dNfgDkMJCcdvX6TQR",
  "key10": "3D89G7TZYG4v7TD8H7LXqE9RH8XQcWe7uHueUV6goQQcmobXBP3YYhbNxvMRMQWofqHowehKgP5qfNHVMhwBgbpg",
  "key11": "iutGGW1Y6SYsbcQLF3T23zST1erzJKCHb5UigYMGzY761ygCLzaJyP77mQbaHw7Ly2BBp5LcS76n7ZuFypsvjQB",
  "key12": "5K1hqRVzkvTYyKbbDqn28gxa6wqAdThzAiyVXYPVSe64pqiUL9XCxyHAv8Jjf1FdhMuiXdWadztT8onn43Nh7ELA",
  "key13": "2PRbuXfpCkuvc9ghZFNPMsvkv5hT8fwRWt4YAi2gh1BqaNtNMRCoD12aWSLjswcXnNpJRQCEMWp3aSEmKLikAsUt",
  "key14": "3QcstoZKg8bDUmuQTke4H93mn8hBSBuw7ZzDE7PxjfpS78npWrYn7aMSeQMPMirSEbyPcXj8b6pDT4iqEedUSKft",
  "key15": "DXSNTQ1L2cNFiBD4DN4HDFUgJkXpvMf1jyr7EPLA1YVkLYv14AYB9rpew5995czEdVuHTWERz8Ro4zciyq3mA5h",
  "key16": "3tHLwu6GHtZ28gvtEmux7ai56N4ztq8dZnu8eU4LGghoAviAX9NxA9jJNaGrX2A7r8U7bjpiTNg6eRLpDNXdkkBk",
  "key17": "3GuBkmTkcfAQ7cMXtFjCEdbDKNQr4BJNSecNnUAu1Sb6ThgjCBeDWoRo48JchB7Q7ei6t6VrVGEzaBAUzJEuLDVH",
  "key18": "2mfkZpGbhLponBXUo13sxUGRFg7tUY7a7vJY3gsGaexGiQVAbFJ3bKsKTpZsN2qk5FofXf1geCpoFqVyNCVs87NJ",
  "key19": "5QEtwRXEDhq5P8FfhTGzmxFRZQehajxfHGohYDcRjuQ36NRPKXEh5Rqdg1XXZJhEGEpCyFcpD7c8jJA8ZdTGSfxc",
  "key20": "5CWfKZiCLCzSGZBWaTvticziwYtHrjg8ZaYvCRRn2pTPAp6bWeRBQdGb4mHtgMaToyT8L8NAzWWuMDNquJ12xLzV",
  "key21": "4rFHN51Umd7DwxjKfUu9Hjgx2VTYdYoUJheFkpANFKLPAepLWyH4AsfhdKc5x5ACgd2GypopT5NCHjqqo6TL6AH8",
  "key22": "4LMqHpbuxbLGPGWBXH3mo5MSKyULRfqCxCqYRgskD3L96g9sgowCFMk3KoeDcThjtHnMfMP1QQdRrwS5AjyHAr7m",
  "key23": "4Tx699CiBwVY4GRs1EgQaSvkoVG42j6VKo44CGFkXpBcFZ17Qp8Go14NW1b3RRJtsehFreA8HPXfVjFHNPio3tqs",
  "key24": "dX6vFDVGrQNKvTEWPJq6G8aKqjW16prkM6eHjBE3M85gsVagwpWBuYR5CfTTLVR7ZCTk76GjQ2u3gYhf82sSH8M",
  "key25": "66zToSqejcAn7P9RzAbbtARPMUbCSm2gnJeqNZVZihD1juLrBpETyC7Lwviz2HmJ9PSsoPHTX3XD6uiperpRC28e",
  "key26": "4hnsNPNwWGSgUKvvv4tRgVjiYf5rMsCGv6qWo9YJ3VVhatpb45BGsCS989WW4zUBdc2UiQ1Yru4hbwcgfYaPA2TT",
  "key27": "553Sch2vVFb8MBR5WMbXgGUHmq1DrWzexQCWypM1ANkJRCFehG1jNzPtRhBRZoFJGWrWsDDBG2PjQsJcy6SNWFiQ",
  "key28": "5SsCELfr3pyZs1oQKfm8yLAoTJ5SvH2wpMYUp2W5F1zQJVJ6dLi4qj3LTgW1LSWY7psgzyUffvtNfuzh1vw7UHDR",
  "key29": "5fcb6xX6E6VyXciGqpkfYNMyCbcExCRGbT93gV9M1ye5HYsbUmV23CuH7xyiaftSG3vCTNA4YUWnEv5DrNAZP6Um",
  "key30": "4E6GjYjeXZtuaCGeytvMP1mf1oCXAyT57XEsc97Kj9z2maR96yAb53J4m9eppbVS2wncrrd6yELFadRbqixqMBFG",
  "key31": "SZECEdyfP7M1CjC3jtZBnKGbTcBLJpG2dRCjtbVE6LJaGNjov6srZuPaQvRH9EzbgU5Ud319g3tqHmCZoEwd4sQ",
  "key32": "2vVpdEzfYDxA2uiuLvzm3hP6vuRbgqgHBRBMDRbwvZV3TdBjcMMxUi69FixvE3KKWry1wdiHs1yLCmnswDqnUwgf",
  "key33": "5bZUcPds4bouaKfdDNwH51FBpr3Cigu7m8VAPUAQBds5JCHnD348pddepLzbqUBMyiLb2cooKQZtFLypa1RgAfQ1",
  "key34": "2xDLnNRyjwv9UieShNXsa6dCCNAJvqP9xChSVr6Ee7nwH5nTSJPS4twGcbvThhrvt3rFLGeTjXtmZsF5zmh8xFMj",
  "key35": "2H6MP3ojKyDJ8cQtCsvJEMyTnpznckN1pFsoWJr5dFtCLMk2AyRLsfWz5SkpMBx72mJKGDuL77jeb5dxVACJeNTt",
  "key36": "gyD5M2LvFcBhQ7zadXXmNvhi3RU4zKEchut8foyUE3Wdid35S2oX924TfNM15VbY42FmAZcwsJgp3dbYZVej3e4",
  "key37": "2E35nHdAgsx7Y14whV7LfwqRbLsv1t1SBWBdMpEJoVjaKVtC38GQqnaNvE4K3M3FG8YcejUoz4CuB3qiHatzSxLL",
  "key38": "398XeBjznqgwZyo2yBbmAgrAtzW5EvK1o7KvozGrhFfmqipAyvSkZ9iNqJoyeBfh8YhaDQcj8iyyj5na7DBsBbFb"
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
