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
    "PM6Cd6ddH9MT3JyCz1BnAKUhCXd1c79xRFxnHk6NUVPEB9irwX2xyKgK4hPrQya1TgGMCEcGdhtmu4F6WnQfZp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W5gUax8A4xgXff8s4RUzfDWPWvJt2EVL4erwn3xyuh4iu6e4i3FUUeAsaYb4Qog8ECjjqXeABhoXANVwiHZujhM",
  "key1": "2y6DoCSoNiGk3ScfpYt4JeJ7pn9n6HNmSjksxrmvC53kwVeBEUzAb7RdoUabk7FG9pabVaNSH1HH8WEqug32HCXr",
  "key2": "6HdfQepmDRNc1SEU8J4dxQ7Zh81arpHQ6329RmrChqTHeqrexAxitdNZfSYJpa3nvvcQ52PyGnhLFhVtCKAZ3YN",
  "key3": "4WsTHomshAbxJWznoWJzVndeBjowWtrK1UXUKwhnm4pR1AjiBSmTGyhRD112rbGHKdmURyCxMoxzYuAWZf4225YR",
  "key4": "2aBDx1Rd7uGgUcAk9VkWi32hAsheA1NX4WV9bsrGrivDMbj1NH9eJnLb6dgcjNYP4tBWSwaYUYHdtLzX9sfH1qS7",
  "key5": "334zGHDYh4STXmcAQW3qWotx7j9zCiKTGmuALqkiRN8zNAo2EJgfG2yCFM39ZAEmBxJi4PS6NAAeaZeEngeYFMue",
  "key6": "4a9RFriEJ2tdjmp9CCw3eM3hzGMT9oH6Y4VvhKNN2CrbvF3WMAJLS9psixmEEH672H61Gu9Ggvx1YuNTTb1QH4Am",
  "key7": "5r1DeSxdA8U8XRqS1s6idZ6ArUaZVMEHPaH3ahDrLd8X422HVtANJfdstHWcL1HZ4moJ98vaBwW4LyAyseFzboqs",
  "key8": "3PTYJKcyNCJwVAHK8FmEb7EHAxkdyLKun1tXU7h6cFfqjPsbZGbmV1VFuMriXfyQed93msKgYbejFWFWm2h5vRrD",
  "key9": "51DFXyvJWN4aiA7DTGmu6sXZgetcJ9HRL2eEcyxgQ6A2wAvG8PHruX9wjsW1iWQAV81z2UdEkfh98Gw7YeijWLNB",
  "key10": "2g9EKdK6S3E86GfbshK4UYMGEtrRXbRcJEqjfBowG5shWQGiHWZhNuC3Dt4pjRVZY3nWirU1472Q8iKv8AdhW8P7",
  "key11": "4zqp8pP12Djo9DrmcnpukPytSqiEnBu51xbehXBjRsHG1B67rLDF7oaBja397NqvTuduRGg822rXbJpo7U6LWNvW",
  "key12": "2q1GNdyofocPVvERRw55aRniv6QjFUv52iGohJE8T7AEHz7EKPfVBNjjJZQMG8AbcaWWE3ErkuLmc2NA6A2R6yRu",
  "key13": "5JBYZJntz32TDGcQRmc3EZzccgw35vBaSHXPo698uzfYhGwX9RuLrhDyUskZuSD9LdRrzQdphxXCnVCDixvCBBNU",
  "key14": "5eYKCdsYKfv4MTXvKwUwjqF7FNVVzQHbXyKTuKDN321NAQ4rbuga5o2bvqgbeEFs3QjNLkJVdj5bdZs2wXYVNxdP",
  "key15": "4j1oy9SJLV5bpH2xxNdauM2vW8fHWzeVMuLNSnnob99pqvDcNdbA2VbkMDLycVb75qrrUKxxeYb6tXB8U8tbnhsD",
  "key16": "3H85oLJbteQUBu5LGXN89XL1iu557KL4QqQvb8ZkJwiURpZKHtPNxDuYDGEVg6MZfxM8zFNZDcgc3neq51hTTwMG",
  "key17": "2TsM1vqfd24rUXLTLp2NEpYXk1UdzVVWaLjR6vNRCxa21Eg9FY5bxGQZWNepoH3vY9XE3HDXgfzV9vyroWm2nG9j",
  "key18": "5K8yaxqQpWTwreMcqXGQgcf4YfxmAUvhJ9XNYM6TkskmyLdM2L2D5UYYDop89zpbcoL2YWTHMkqnz1xAheR1idX5",
  "key19": "5inqsRwGqthZHtoTidmd6RWCzLaB483zQfDiM2Ywe8Kseye3eEtaJBTwX9Q6TxaqfDpiDxsMMneZZoRQg9cb626m",
  "key20": "2KTYcoWJTuEgn62ewc5BySMcYfEVytnFKXu2i1QGEYEt5JgqGnin9j7DVgTBVGDtbjvsz2jTxUwRLbB9kbHEgskw",
  "key21": "4Qo8ATkQmz5fsxqqoAwxTd7eWq3qAMRumV1xgTGXYfoBve6PVJ125AL3gqvGUZ38zFziZjQodgKdvQbkYs8AC3SL",
  "key22": "5Dbo5ZZzKU9NeX7MpdqhruGL9P2CiC4qvbKqbay1k4Gu4sAdeBgp6HuPmKMFUY14mFwFoDR2JmxoF97YADJDUeXz",
  "key23": "4mP2A2zq9YJBG92fu6XPkRxegjVW57E4WcGQAFGt7ESRNsYxoi2rJzp6Wg38DPCP7HzLcw4jAZRFyVNfBX5NsBZk",
  "key24": "49uWmSW7aF6jk1zyGBWAHnij5U76XpGDyBYkJjYK95jwTj8YjQJu9RtnQov27vA3Nkmsacc1vJ61qYMW5ZkLpbW8",
  "key25": "5FFFL1cmVLYTgPacQgW7A3JswTCxWv3WLwgMemRvGxF7Lqa2jkykh2oCBa1icj2J4Qt32odqUoUDTm2QCbJYcPWR",
  "key26": "2x7AFcBmesbwvJymAtU5egcwyD8YfwZNvkEpjCLwgDWHHHFSk9uGkfpJ9Z63ivjko5nhF6KbbtzRxFWB49942w7Z",
  "key27": "4tzsTEbrDeNQWcWu3G9WpLGVCVQAaPncWaR5vEMejLJvwT9Q5R4qGKcF96hfHaP7yd4r1ZTurNN2es3RKKM9X37X",
  "key28": "4vUDnpAvBqjzQYxEm6iQAaX1v9Trr1j9LatQ8jAP1HdRYqPfdQutfsadKJkp3S3UshiAFcLfueBQBTeyoFzabKHu",
  "key29": "2CLNf1KCUsMQfMDKBW7s8uanuoBdut9X8DKGME3iqqj1CqsDDi4QhmFsjtJEeyGC2qKHSeSAbmTpVxb7r1EBDQrm",
  "key30": "2SpgVannE9Gdg2sjVqU5jZ94VdaJcZD1De9Q5NQ4Z4rdGsbCgy3t8diigowgot9UKo5NHqA9arnk6iUxM4y7DGXb",
  "key31": "52BBwZ49SiiJxKbXJyc4yfSvDAsvy41szCTiiqgBFtLZAp5pQX1UPkH1vj2WPhwfJxtsxws6KLa55Yp8rEdBfxPh",
  "key32": "2xTqxEnntfbyaQh9vk8cA84rPKtYaiJHhhDsSKWVbLsyUFm3Fzh9pumAYjPTLAR7ha7ADCWvPG6ohaxBjQ9tzWyJ",
  "key33": "3brRZvCeB26rwtdhSxGs6rSJs5FKZG1pfbURT1vS25RmTDqt59EaYf8HPuxnQqY787noN9jPG5zVztBg7guHTpt4"
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
