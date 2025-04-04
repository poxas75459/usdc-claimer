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
    "5BqzuY7LckR3po9kNm12H4qmxU83p4ZkX1VSLNZWXCewNT3J71hNu86M5K8tGbNx4KusYjxCpFVtuXgP1k1or6iS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b9vTSGhdzvvPkNYKc7yRg3mfBitAaNoKUB9zu4DVzqcKox1hwphNCymWqua3P5rsXqpankjcUMZJVLSkWsJRScL",
  "key1": "4pgaFJgGuHnC42hUkpiwvoTpfJ9o5sEYrLYv7gV1X4X1Xk4zjetMXBgHu7XvRs1ELibajQtn4XCb3CoARFggM8wt",
  "key2": "38hZd54fJMKUiCCL5AhgPQunS5bK9hxzomrJGnbqC1NL5oEKUdxnpa8XedW1oqvFcPgm9Kab8Z5dSyyCfoW4saXJ",
  "key3": "2pdK2EhtfKP9czBZYqioXytEq7FgDb5HVQN752WAnVfH7SZdVDyxbaDxbXtDJfNfHftmAgzqNC54pp5KskFit3oT",
  "key4": "5hA4xDXsjqxwgmtxC249ZQApmMisbGg8h9YznFRKg5nj8ycgpVXRD1yD3gA8UvTdB4p7pjn3wUMCyMKd1nbmXw9",
  "key5": "4JyEcvNV4U6w6opvdc1hhLUxVvTcwinVYZH3HkMf74cjpz19xje9yuDPfivybr2zPdEBqpfkXphorb3PRuvGbeRw",
  "key6": "3xpmCeyMnavYHa52dqX7ZPRznZE6J7gNT8AMau9gyGxXe7yQ4kqHvJJUJfDVWvLz3w5fVwsBuL5Zc1aapj4QhDdi",
  "key7": "4MARiqJC3vY8pSJvDeySd2pywu1bMj75Q9R9baLzLEXCPfFRs7SYAC29sXpYhjCp7KE8Hjh3oUCqbStCL3pCQ4mu",
  "key8": "3q7ZgDh17JHLwK2Di323Y4EUp5bNtyY3e8GNNWLRH4nSV7TQiG6uVib32xvfk89kbgt5HeAgCahvwceSiLNZ3F3L",
  "key9": "5tdySgpMtoNUEi5vud8QsE67t9fvjUr4ZsXt4DownbTrj6BVsKy3UiccmBAFRME9S4XRbtYqUeN15JGbBjNKwEvm",
  "key10": "4a2eiSCvUFcGXa12QjdL2qkCCaSjaMAc7E13BYf5MgwdptcztjgcGwdtzJafkHhx2Nw279gp44EtWw4WkyyEZegX",
  "key11": "5pyZHoS46BcU3dC5UDfZmY33uXENfvV7cfoDF31A83jjrxzNPxDa3caRcLL9WWCACoNze7TZjDpDCMHZ3kjoayUD",
  "key12": "3baM775Ss23WhmAnoQW8up4P5YH7qpngheEt7cZAFieWhAVQXVMUPef4PRGZCSqbngNKRryCp7zfriL5xDS9NtgP",
  "key13": "HEN5nruqrqtH1A2ugJoiyzW9tY6szm8vkNKEnUUpZPyYFifEK6wfSpbS21opHYqaStmudkPdPqgtZ1e7JxzUDwC",
  "key14": "bLZ5JL4wtBCFnEUT1KbjemJ4XygX2mmzuSkoZUvcmg5ELi4iBcRBfCWY9H8XELtuzzifnbCL4oRrGbyLEKjp3YM",
  "key15": "2SqT7fAZ76CxsYzkWsCZFN3C14imcBsFzx2FZHdV7AJi3NqAGGnRDRSZNm8FGshG8vy37gcWcAmJqmV5GhkY2QFC",
  "key16": "66rG5TXtT88fm6VPmwRupSG1DYThT1NGuCDeEkg635Un9XXYAWLc9jeQhwn8TPhd5gSw9uobgp2pB5uuuAMBJ3Ex",
  "key17": "4KQXyeQtL6GS7GpUWkQg91GRvaJ2HSp3MpRFp6xtpZU5KHu3ghxtCHasUW6CsnAnuJbgD9vJmzZeDWCG7N58ndzN",
  "key18": "3NZaHv24Ym2ySXe5nbTyTmCK5G2bQ3HryD2vsmZCT8Nv4mLnpAjVeHidQ1GqektqxPQdEj3fJSkic4T1LJGfM2fz",
  "key19": "226135qNBZpAph4pYjJyrWYYpGvbX6k2PqLC9KrJj6sktLT8WkBzG9VT8c9C8npTqu51HFmxQSsJn7hjAKXcjqae",
  "key20": "JmsTtwaJ9SA59GUNJapWiXGmJMj95j2pz8scMNfyCZCfDFtfJ85J4vmQ9XAbwm34zHyoDJnjKyd6hCnfnUqdBqZ",
  "key21": "26U88JaJTKfYCStMqhgxhnJs5xJTXcZ9DTCaL6RhHpcmzu1q38eNc9qgxUePeC4RKnx6CZKzeasqM7VWCDPMHpR8",
  "key22": "4duJiTvSHAqBFZ2DFrfRzGnrHYpqaXCghtdECQU7yqD7DjarRxBQ2DykmfDCkzeeoP1WEgp2uxRfNzRMJtqEy44c",
  "key23": "23d8jYXowHXecUL2CgTxNwE8pqt7ji6VJyYetEjMRPKKPvD5vnbyT8HLaXmM9dXkXoZ8cVRgwbuPGuqKD1PfjaKg",
  "key24": "2GNjnc6nE3uZjXvTFQ5wzseS713HFi19VGDbCsE6izEyo9zu78binrXykTeBt7yeh1fFyZP4NeLbVTeJHQL46UxS",
  "key25": "2fwNjshZZs9N646qihjjspDha4H1A8DQqW4wTPEVQRc47Jdb6G29YBNVVLMUgoYebsQZAEe9EKMdPaDGwL7xihee",
  "key26": "vUxYZZA1vaZS59Wib8ndJj5DEtcxAXQTBkokwP6C5PAp5RqbAo5X5e3Bs5u9y5Fd7r88EiXy4td5K5xD4ttvUJm",
  "key27": "4aLkVjYV1RiovobJp2JVuo6Uh5Sp8fMyTu3SxU6hEcu8axZSBbj3ApPWB8jDSzuALJQgrsJ4Lx56x2Z4qNU73wpg",
  "key28": "3dM1x3rnCe3P8iLKaXDW7DSFzuXw1mHFzzvpDNdZTGRex5GLQF8QkeyGZPJFTbia93VQhXEn1XLouvX6A7Eej6Wn",
  "key29": "54z6eTeNNP1tZ5TnRRfWQY7C1LEjXKvNQ6gVGJGu2LMzZoNn869spyYHRWMY1HikBUEqdKgb7QMW3TDfNzLNPv1u",
  "key30": "WjEdjWnpf5bXH4DsejJWD5s9qDWue81UcyqbeCgrt4EdugzNnoyPzvhpXJQrQEF2huhxFAc92frBBbYjXuQjHAq",
  "key31": "5z3S2eN6yN7NN5eXbV6R2nBbyLvChS1KZNRRvqQQmL4rT8WPAqeT7fcqhoM7jcX35uCVPmYcwjUR1mTbEgRFD9Hn",
  "key32": "5rmjxsUEMpqgm4pH5YdJqL4EBgyqYZtzjerVZ5phV8vX9JYxqLXBiCCSnu2jdrVYf5BN6cpyAuWjALRxorDM5c7"
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
