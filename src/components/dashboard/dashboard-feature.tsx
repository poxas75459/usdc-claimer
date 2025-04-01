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
    "Qqix4riRCtPUM1L76xAGUmtti4uVKzRKSMf9V83vM7vAKB3otGRf8d8KFKUM2xtHyqajt4HQ4TmpTzET7gJ7ZPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sVZj3ca4ns34jdm336j8s5xyFWtGLFrF1mZBkSJi8ZzLz1iNd2xSvL777oEJZHwgCEzqik6ZjEbtG7d48ukhM37",
  "key1": "jojAW2Ja7MYo29eFwKUsMrBL35tSoPd4zejE7wye7KBZvjMGTtecNss3UsyzAeuR15LmUY8TdZVcWNwk2WBw9vF",
  "key2": "4NaARvdVyLzs2SXtD5ZywkUevVriNRodMe3ppHHyRQD5Z3yAfTAqQPBbru7KPxWJHCMtb2sNXL5QzuuUokwBknaX",
  "key3": "3ZbtBQmDGo2Kx4VLwiJhwXw5pjCHRCTpNB6u8eMZoXXPuMnTgWvddjh8KhoeteKkenBWFDXyeyfzAEinwB3G3TQE",
  "key4": "cn2ZaMYMaiXxjxvrDaWMyXi1d1nFEznVHxUUajsV8DnsD7fVkAGYzVxqkrzwDr1WsopBEpR74RVQqnPPQua53w6",
  "key5": "3FpkEBnNrwYKNUR3V9EtTVMtw4RiQWm1pqzBqD9KwQdqEZQ3EZRrpuNBMMU1a5PJr2pVT3UXFdFzWpgFFxS98DMr",
  "key6": "5yW32kxUzS3ns6YsMGFUBNLABdtYJ95GyLi8dZYt7kc84EanJCU7rcJzrVEUigaeHmXydfW1SDzYYFT4J8KtKinE",
  "key7": "3DSXEYdEd9jaoxyjg1P2x8D5Qf6ZjJ6hgbri2k8ceUeQRty6JcFVobfAfpNo4WrsS1TwLdFcx4TxivyaFdLcyn6v",
  "key8": "4tB213ibPUiS7BVf7Z1epywm7X5HjNnyW4ynRDXc4nPWErtbU1Q96YWj4N42J2AqesikRkhmr7ds5DKqzBm7MxF9",
  "key9": "3cVJ1EPjMXpjGtfM4RFZv4rw9qaUNDieiNZWYF2ZnQMXDgBiFtQ2bD7KRu1bChzxTZT3qZc9khjrKgkaGGMd2Bjj",
  "key10": "4BQTFNMxJ1vHKCTXjWArcPQSn5ijGDVWYg8M6KQARGZRMCoHTShjcNkcDJ9YtVkURnW5n8UjNEh83S1zH21aYirj",
  "key11": "ruKqM3XK1NAV9cLiQC43AL7rxspb8XBCnSKGJiiqkdThEWy58Z2WhpdGH23Nib1mCLEaQRLcJSvLysENmA5knp2",
  "key12": "QZ5p6QiNAm2cz58fTTQnpQnTeEGj9YY5epiR9khbECcdhrXcYcNM2vu5KWCxE1Fjc9aCaDPcV4saFoWqkcnXszN",
  "key13": "4tSGirruYPgYxSJqDYjeePqEWiWv8JnWMK1YmNxEf41hyCdYsmCF3rEW73RuHCtNuh7g7fJeDkATuFozCpTdmdER",
  "key14": "25hqEPJXbr76zLAveWBbuHS1NteaMUdoMc63RZNqxX2w5CEKYZRzRrUSUGqVRyBQ9JTWiK9csrpKDQ1EsPFrQy7B",
  "key15": "28ecT1pQe919FKT6dPdwLWrnFrgS4e5dtnxQHojY7ueihQKEnEvVCcxJbDRH5JaBfz8FpLaZThGrCVX8GfEEHC8C",
  "key16": "36hcj4PrVFR4DJNLrxmet3QahQxTEuWA3u8bN28jcZS9SKY1VkRbwFHnecJeXXxiEqUBwnW2GThFgjUhGygbWXQU",
  "key17": "2mfUAirffBq5SqNG6gxxkvHGJ4Cod5EEdrE1SUypNaWuRP8BV1ocne6hArDRsCNWhckiKSJTTLXMWX1oemRPPzjg",
  "key18": "2MdA25HnH3w5DzFVw5p9h9tmAqwMMh7XVBYE8Gj6zrBqHFDBCYn2SfVNShyMjQHrZPzM6QSC9kqsMzmWtEhW2MUC",
  "key19": "22rq8Y6AXYifexTYv1j2HoePZYtWBsGCXsP6jEH8sRcK9bbuwW7ThzVLfgK1WkYnzt9qf6LCPJHEvwXLNApFfgnS",
  "key20": "5PP345C2vJ2tFTzAbYxfksVPvfXzfiPaR9J5djkEuEXBCHLZKF4dFfTBnq66HDQ2JodcKhkL61TtzaSpEgFCPtm9",
  "key21": "4A1nF36aySsrjUeJdBuCGL7ehkh5kde4HJZbnrVMJGZ31QVhZwpkihxvQ5ctdsG6qQEqWLDL9PGau61mdqSu7nB4",
  "key22": "21F8Yk3H1cCbtF5jnoT46yXByg2ucdN22BZdbeJm8q4Gb4u1r4mfGHkXs1gw1u6WiWGQH629WBjQDGkJkpjGMviu",
  "key23": "2tdyN5rH9ZYLSBqcnKMAX5kqGbZwN48Bwuf5k6mGQW7fHEwqaSFRoibppeqHSSC4SFXKHF8zEeFkqiVo3przQsk9",
  "key24": "2hHAkbxbUc6nS23Fk4c1kMMbjBSzGFYgZpx7uoSwYndXZopseGvW9SuGq5PxbSDWLSHdMa8wACFnzsFy3k5CPjvF",
  "key25": "KnXfvCaDozQUrzVpZ3nmtHbiyrNo3JhXSBdzxddpi9d51UGWxbUQN7XUrPbHypU7hiuNoTyykoHcA8hKWa28gnR",
  "key26": "6jZxUo6jQrYDKLPMWoiqwxU2bWMuXXLTLtbQNAyrHY4n5ydK1GXEquZt4gMJAEWz4MQ9M3LnwByArs6JMFsTm6E",
  "key27": "3c1gPLkVnnWiN9BhVEYPRXZPxYGESMCEX1fC4viHwRdB2DapjoVuzUn4NgYETUTxkAMEZTn8QMBx6swUJg4chy8H",
  "key28": "3ghvggAXuDY5yCSvXEDUY5xZUmY5Q6NLj7VRC1YXpgnKbRfUCkjxe9XTnXKfWtUdEpcoz7FJC1aMBGDnPK9n4ycW",
  "key29": "2ggTJpGAqP4TkiNqvPrbeoWZMhVWPUnqYHwjDKiBwpJEsq4wiogPwt3LHUjt4U5E6CaWdzRQronPwdqWuodiyA5c"
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
