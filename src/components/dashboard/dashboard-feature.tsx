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
    "5rcDJvESDvkyXU5rmjTjuqbeqRbJQtooMPDkkUruYbnRobYecSJjLwir44PZCbpYPsnvXg5LQQJPo2i8QPhPS9S3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jCUt4AQbxvGHDYqusmrxbLFtv73vsUau36iLvrCzgWxzgLHZRAL4femJPssXLRNUNRRsgmAHFAqKLiGc71nCnTi",
  "key1": "4FrKxmYiZHCyvE42fmbXgaLh8F6xEVATBcyrt1RepbEBSFQ3E6zBHZr43xrhSKAHX3MBAxYxKL8zP9yzjrc7JFRR",
  "key2": "YkrVpED9kVUAtZAyMhJSFcjnwEFEHuq85c7nhwkX5bMgY21XVYS1TxCqy7xTqiETtbBDaVpmveS5Ktrj6qaJ9Vz",
  "key3": "3jMzkaw3YWFs7z9iEkP4nYXs3mMSxhWbnyFbnuxecsK4YikqJniPXuG5ZdCqKqftLSXjxydsg4KaJh3FfUsyQ3mU",
  "key4": "27AnBEi4UyovQ8xJSFpsZh7QmtgkUytyTvazgP17y5u8ztP76qGZgsER51Z8RBPL7Bjmj8eGbRBe1Q3PbrmY26jk",
  "key5": "5T7emWaA7EEc6J1E4G3AdKp8dZZSh95HQzP46Q1rKuKTFRVD8LAB1HFGbKBvzgvYXk2Pkr3bpwbvGHaHidZkHD74",
  "key6": "ZSwb6MUsDYqTDSc2ZJM3yR8sRSP8segqC1HQTy9UwZ13NnKeQQxhUBDD8Kzvf5oUwJgnwEm1RNucv2Wx2TGsDDS",
  "key7": "2MZyYREAf7KDwdjGF59WGgD2jG11qkEhspf8oSAd5sLpGazXrjMD72TdYgxHHoYkoZGQkRNvuQmo6AoDj21Xxqmg",
  "key8": "4Dpguixn1na4bNg8LHASApg9eNfR67onJFPCTtLWWn8dNxwU4QnaBRhYb1HvknHSo2hrDPb2wiJ53mqbjjAvUTX3",
  "key9": "1qf6W6ufPPG98Ym18dPdJ5ds8h2nVfDWnSdwQpv6GxWDVz2oCJJgdmQo3sPBTZaUKPFRtAxxzPkH7npo6HqCSVr",
  "key10": "21Z9SyZaPiNK1ihuNX8M2X63B4fbqT5ngLGUfdGG3wrDw3AocvqGq2QavmEQ8dPRTFWSH1hBPmrThxYgekVDCMdL",
  "key11": "2iPh2wZoqc8CuNQoK6GA4YFLuY3MDHbfhZyzVyYRn5MmqqnujctN1yNnSizmdFodjZjetvjP3EWEvwrUULw8czLw",
  "key12": "4J4P4n9JXgwKmQC595a9Bij3pi41ksdsNZxgz6iMv1C4Q21yYahLefzeJ6s7gBpvLV36CwPDcEGrNDmVfMrABhMM",
  "key13": "4K1oNqnGYttjcpwFszvm8YfN2ZCJh9P2hgSKPge8dJtbcUT14JEhUrVSwcEt3CTJsSRAM4eMejMGV6ySAYJdft5i",
  "key14": "gj1ye9fuzBc4nR6ZaxXr9Pp2Ry2zxhMDPaCZ1Yd48WrHxwcGqMp1HUGJnvJqCASupxmTzb1eohxbBmT2SmBJmas",
  "key15": "61y71EybFRCQU8nWHhgk5Uuv1D34C3v6RStmL5jGjAw5FfFoGjZH4r8ARpYooVA6JRicQKkqshRCakBixYY9nh9L",
  "key16": "3mgcgCDrZDpxREGfDdKYWQHvVApUNx8jzqjRqupd6nbRxaL6BHJqP6KxDNXcCFh3uqEFuhBeMc5r7V14CnZNZhuf",
  "key17": "5C4Kt3HNwsnQb9TYZL8DsvFxAgqT7i2LvPzZLnG1fCGWuHWs12SNtB8gsJqzhzZfDs2udQrkfZdiG9Goyhud4vEW",
  "key18": "5cD5QWp9Y6zfyuixeoFncsgbiWBxpg1hbwuukP4JxD5Tq66NpaPBhiZFJNTpgSRjVitnySZf3GpGvvWrxE9vwKCZ",
  "key19": "2tXJDtLA3ocS7ymrrKSLRNFdUBs7DenEK6jD3PaQKMtK5WPqpgt8h27GidTdXW2qecKVJP9px8LQ4WgXBLG2uxXf",
  "key20": "PZNMziL32mb3tZFZtLoPZ6XZC6ZZeomsrLN5acwCdHhhCyzuJror17NFQjZputcSUtHfjg4zGrz25LwYsvjAyMr",
  "key21": "3H6rGCs7jK6skoAWnnuVp2bvYAsjBHE8jdZo2wtFoMxPJLzv9Hf3Em6pqNgS3kNmbyE9EX5WSJ4HpHK5iXPoGJmK",
  "key22": "fijwokzXDyMTX2HYZeyzqt7JNUni6rLV5XiBk3tzx86dzZGmKZt8Z9sF4HzAh8SzUKophWBhxPdFgZ6YvJuEtHV",
  "key23": "4h6yTaYN4qWZksgr4BjnvUbZ37sUrTEx3c2EuNiq9rAkSq558XZNwfL5U3HdWLoSSxnDjJY7asdeCqtkiDS2eepD",
  "key24": "2vV3aLoaKgcY3RAstfoEGZt8DZRo1Vs4ogHVGRiMii4huHbxUmyGDSbDABGq3Rgxn2com7ysdphdBF1avL56dXTX",
  "key25": "3xPzZCxgm15u3919hFexWgAj4bwCdm124JL9NuHqHr64zgmq5SQkmL9FBmfHtdxDrQJ49EZKYfTZw3qffscMSF7F",
  "key26": "3w4Ah6zimUzWpXrFdTjL5wZLxmZC4DX5nEFFwzddAuZZQntNukmgfSESmYmZeZrxePRkfSZGvAWrC1RBHmwMhyDr",
  "key27": "yiBKoUWwtArgdKzoUdvhGduMoiAdKJ6hawFGep93fyvcAZzuGtixwB1RzUxkjBmtPB5Qfu3jbnoz3eT9JMnK9ko",
  "key28": "5aABukpc5fzwcKqp1MXuRD3tonE4xVAA8ZtFkZ5SJtiK5o8ofzkxcYQfLqsaTwRyGHUMUdBSWYFrToVBPtQZyH3w"
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
