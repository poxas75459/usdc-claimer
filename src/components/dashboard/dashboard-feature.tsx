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
    "5PKxFbTSZf3V6sAtevofAWb8CiPE8PGazPURK4Vr2WCPFkRXnEqp34d4s4fWCpVLn8678Fhz1w56A6URDXCS5nWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i84j9zrdNSxQSj3tdWT1CrkuRnk15TmfrNeLyYnF47MTiZzzQfHwRpU7nAgDSkm3CqUqtpunyPVw2WiSKrpUmwH",
  "key1": "3CZvUY5jG2WCUJGcjnZJn72PLwEonJ79XqjRdLiy6rqmAgzzVbkJhnhaLgFX13b7q4tp3PbUnjusvu2qrEMYETzZ",
  "key2": "uLGA5TZjFqyw4y48m9b7xm1ALqEdyNE5cust1nK69SNL39c9iPZX1bt1PfN9qkgocpYQQZeW1yKjnxzE6YdmH19",
  "key3": "5WxZDhDmRhuDUwoVQ94gkkQPijCAtayLgJC95zq6FBfa7mNhRDssKyQyhNmgWNBCG6UKi1763Ytyh7MHJwCLSi2d",
  "key4": "3FMEcHT8WABG5EYBtEe4f2o5ssaQXL4vJpWYtej3WtUH425gVQtPtxLg1GW33SAFi7M8ac6oMpqu7GsWHNiX8PzU",
  "key5": "5k7sBz6n3vuW6pkzCeaoNWMiHjmqGHtWtzoq6yyQZxxuM5SBZbiSnBVpJyqipbMmQ4HS7gHgSBpHNE8xvg9pDtjE",
  "key6": "4Wc3jhHRk2JBANkmvFEqWpCTb7xKTTxkY9PbFgZzbjWa3EiABgiHWg37uaCuTCd3DPkPEUfnpfzgPFk8YFhyCBa8",
  "key7": "j1NX7FP1MTfgzGFF2HLmuwWFqwLQVAYKPhJz83qywgpBTGMCRFcQYhbVPVrT8jubJfzWkubMxiAWDF7nQtugs7M",
  "key8": "3yEqXtthZhWzbZCpgH2fK5wQDkmVFFBPHuRHNe6JfngpMWFzRfL5pyvgirkvH1ETNZAEVsL2Q9KTG8J5BXA4VnUp",
  "key9": "4L8kGr3pkgobwXiQgbRvAywc14mscQnPncpzBCH41T2Zr6WXnoxqHo83enKgD8VXQBzv1vbf7by7pQRa95sUaS68",
  "key10": "3p4b9UbQxWRUfuoFxJ9Ai4EBWa72sEPYaQUAT5nJjd16zQZdaucZ85bKk256Ssgo5zzGwFWe4icb79NvwHNcr2en",
  "key11": "qwyjMcPA4jHi59pBh7B78oCkLS4rcLvu8nJZgkPX78rgW6QSWS3wMDYcc6j1SGjBYfLRajtjXV6WeETmfrbD5mr",
  "key12": "4R1gfJaAqciVMv1gFso11LRpgKZFq3fwAXHjyZVSgmZXhMCDkG2XdoVbymoF1aMYvMrvaVi4zUmFa5ZDq5qiELSs",
  "key13": "2S5Pa8KFeJAcQbX4hCB3C6XCL9JKZjdQx6tv7TxszuZmzwqyn1Usw7zdsLchkvbXFH4j9cs1UtkpRNMp8YnM5MVU",
  "key14": "26YwrA6gycHCXB8GwZhrPv5gGc6qXsMgU7D4qZ1nSPsfTdT4AmH3RaEgomPqkm98U2kFz88T81FAeTY3XGwix3xH",
  "key15": "4Ws9dPeZdpCD6JoFum7oyQwTdkz1AERuKYfnZ2X2qfR7gHxsH6D6RHqb1zP8HSFdd2hxmW3DzxM32UdPgV3GY6cp",
  "key16": "5M1MFgDPEVYEgUH5tx1khRnAcPUVwDZG4wH5nRSv11uS4n7EAkaEqNQ5P5tMVxw9adu5wbR6PgqJrkNYkhPR31ZZ",
  "key17": "22w37H7aGJyfKQmVKNdTqaRu94EXCJdoB6FxbzYkkvLFHrY6vnZzPb18NkZQqoYdqcNHhjS1NP69e3oNZEVpkdcz",
  "key18": "Y8cUDj8hx1SeK1BuXgux917nak5iuAvjLQSHrfFnnUX67epKKZJetEccvofW6ixfbjULGsA3MRbr8P5QsYh62qD",
  "key19": "45LboyQeGAKgdrwDbgMFQvg6ufhDoC1VsoKsTFfYDftdz5ttWVjzfdtUAtwttC54wD2vxFnCmr9UyNzwgAhYF7kB",
  "key20": "2GXKKAUqzyzspHMvskQbDXCeF6uULtuHcLM4KJF8VfR9i8sG3pDwZUHJPKC7tTqNq1nPR9WmZXdczZwoSTxAWdmy",
  "key21": "3JZvY7bW9RfieV6ofrAYbGA3x6vBp2DSbH8uxiN6CAAtmFNu74SFoZokS8wxCxMnGyB6kyF8fmpNJJ7UHxHPvjd8",
  "key22": "5nTxnnZpdgRCubjqFs44GZd6J5zQF7xn98i6cCQ1Y7SQ6tctnAEQpUYyrNdk4bofkRDLhVwzMBML2q9gtdR1YoBq",
  "key23": "2a7dG4EydjTuDP2qLdCCJYzowRGUA5hzMYnuWYPn86j7jBgQ48uV4je1c7k6itcPqnNkmd57n85ebrZja3JaVv7f",
  "key24": "y1gFHa6jAyie8DpfJC2BP3w44iJ6QB4NRCcYDiSQj5PoMdr6uxW363C6UDW5rEM4sEaJesx6KYm4qLMEUqxMfkz",
  "key25": "3srFRV48iC1BWNUoL7yr2NQanrymYRHY6UmETVWWr8ZfRQJ2gnRCsxCueatfj974ExQNrKs9sUQXgaNK5bnUTRsH",
  "key26": "3noT9FhAdbAaRk7VSNHcWJkTfQK57bYvGJsEHmdg8epNbd8MNp9ztWGc7C2vifMw67F9gG124wJhj64DBLibjX38",
  "key27": "42e9YkMSFSKFc74YmDcZwomQe3yd8uRrGrFyQ4Yw35nijJoJVVYVnvFqvAFcyKqZdW3mhFho7QkHxEiois5dVbK3",
  "key28": "ko8Qdc5rZw2hchxxA7oSs5YW6G6gW3iTq7fgPsDKmD73vX5uoJMN7VjNmEvGmQdY2bV3EiiMWeXYhhw4Yv1CVn3",
  "key29": "4TXodpKE6PAyo9kRUAyjuqREuhtioCZnJvrwSF8FnwxoNPRjtSS59DjP9WcKQjwMwE6cZCnADhX6vpCwvqxnyt7Q",
  "key30": "49DKVVNeXKV75iWGoBW2Sq1BYqcYCydbRnGL4NipbErxptdxYabEeXtr2LipvLL139ay4TXLeM69YZoZPd7H3Fww",
  "key31": "2egFoESFE36D9jBrXUkcPwtHGTswjVhBw82mCNhsEBZhNmcxTusuHYoEepde56AxcxTM9eQM4AaUHoefNQYixHuF",
  "key32": "t5bNJE8ckeyBnqFtrTxFdZFMi6AuhuecLBmCMSh49ZCARk8CHEkdY3a5n86RtxirhdiHPMh7G2WGAx1XEAh3rCD",
  "key33": "4FQvSSkZwto4w6N4QRUFBHxFEReFiUDnzXyyAXbGxCudcVHeNbq8svwNnDQN9yPdNfDmR4ZSqnY47tUbXtGudeJW",
  "key34": "61dajXbd39j4kCZ8pQ7JdepXsmVFFiX4V2rYDAkaoYQ1vk94iywbAUfsc9QYuE6PxV9sY4tXDmPdnGdPbGi7h75Z"
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
