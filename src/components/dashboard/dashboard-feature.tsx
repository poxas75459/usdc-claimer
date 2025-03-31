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
    "5RpMWaTheMo5B4gZSmxutsgkfVS2hbXpLT9kEYrkS4x5FEwPLMJqv2bG4RWZELjht5TLzhUGvWUSmfANGP9jAEyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mDgJqTK7ssCDXbd9pAp87wN1vnwaVNWnCToe4EoiGdsRdKh1vZSHsh8JvBdojrtcAKjgGHrXUVwPJdevSjkU9BF",
  "key1": "3Wz9ugwShe3MZJcaW8Sm9WNzWXYJgeNUe9Pk3GYTZR8xp9S7W3NsgueSDzHWjTCh6pyWUg91HXAUgZH83SrWpWA2",
  "key2": "2M5CdDhCyBvaUbhWLk4X8hBGpjAJzmrmMrd4PmzroJBtFuLHrSTmM8SeBhwgmJwpn2zDAcbVgKGesXCyQjPi7e6b",
  "key3": "xDiW8tom2uLo1LUx6sCQJ2sAECDjm6p4mSgumrYkQzxGN8F8TFA3AizKKRafDexFM79kMZP1KXNb5AQdjTyLCav",
  "key4": "2vtnUB5P5CTkKfoMvpUJxYiKCWCCLa1m9WRi2UR95du6aB9b93ZikY3DKHCVcTP3stdNMnohTu7Zeo49XgKNge9i",
  "key5": "4tLWZsMk7gYW4YaSGEHLA6TCmzWzrKPYcwZYwuadgyG9QZcSHidtNAqJnNgvDQ7RFiu7kLTLMCSeQp58uRbXP4CW",
  "key6": "23De3RcX5eWfsiYRrQrZCpewknru3LxmZtvHjGmEphUrfxFQ731addMZN3EyNap6DyH8ocfcM7UbXrLeiYE5GaZQ",
  "key7": "2uZ5j9zwvuybaMSRUBuStUpCjwxUyX34WNB9rX1Pg4KcQoTGoBNRRoVBu8Zfzh5TWZ2iNMLKaj2A634AMtaJoggA",
  "key8": "TSXsqFc7HsxcYPGyMKrBGVhn6Bu8SEi3fz4EQ4wFZqQygWuP4XWB2ipayrDieMEGyANHnSYg1tMo5RaUX3GfzAc",
  "key9": "4xxC4dpQ6iedDsSaeVAu4kBuuFDBvMLJbyQhmmAXzQGrsuRoCscrDKXSHV46WfAtYnRVrsDeZqp2n5mMSMaym3VB",
  "key10": "4BwJasXYewgv3CbvdBTw1z4PviWUAXvV5cJ2LKaYRAXE9V8BrmUaa6ch28naXbhYEd9em3yCTxpMYtsUZahdodwQ",
  "key11": "5nsFj7JTJQpNJhgyZrjeXngtxrox41zrTewSH72w3XqNqtXtB5wWFf9XGqz3WMpiJcX2HqtSv4CuaDLFRQX9pAse",
  "key12": "53VoJJzt3fUuQhiYJE7eE5bVd9biheN2Lor1kqnebjegqRK8s5m4e5xP7znqgvpkiy1mSWDZhveKAPMyy3psCmNc",
  "key13": "4N6j8xpGTWh6zhkavPRmswmnfGq7tWbyhsu4B3nY7DzM1nsn4oPSS7XsN5c1YTLTxrJxND5HL9piRooLmmKK5aLe",
  "key14": "5BgY6KmW1bxE8QotxFPBNwN7HsaBB5SDuHpWEBfApkVRP96xvi4Fq7VJAgFeySb85x7VXbuMvhzy6QYcprDs6tdK",
  "key15": "3NEXK9tMrRFBnANgBLni8CqVWjmiGWzJj9q8ddt5wmu8HQLZttfVxEdqDtiiU8UZ3MapNMt2QbM2ZW6paFtBSePj",
  "key16": "5bNRNSDYuMRksbLwAZQ6N6aWQmBGt756JeUyrhKUeHNTQYyr8YHLeqYCaqgwgaDJqPFYK3eWrzduT3NUbcP8YfG1",
  "key17": "4pGxQSyAz8dqDndphFNR5iPmHroDpXtCmHuCSdyFCf6QD5AkFBJe54gf3YXXRQU1BWamFAjaJ31pDB8L6qRDRLfC",
  "key18": "3CkQZo7LHfn1az5N1CuzPDyicEe5CepzYJReMADK1PZV3cLsyjABUxbgnbn6kXxdNrinM89QVf3hm2ztp4oSeKdw",
  "key19": "38NVcFVJi97rCgxZk9bUECf6FmoN7JugGEhst1rdr8tN1WqpdGgYrjJC1uVd9ArYPkVfVuMBYGbAgU16r8M13Ysc",
  "key20": "2pyz8Rc6rWtkR5LD3w3vq5Tp5C3U743WEasrsKekg8EgpWTszvVDmicNK9xKApoHTMo9mnHLztSaTHY29hwfd4LM",
  "key21": "4qvKf8QCGLk1f7UsunBhMkhPi9kNB3v16ojyVpWbtLmsjPFQvjpywWNr9casmK9AbF7hmL2pSyDodRTUaF9iaeL4",
  "key22": "4PhXpXgQPxLqDXAJAKuy2LhUFwu6F3CGhDKiX3AxWth7gdXcBUvKQnc7gcxe6QCMmt5poxhJiijjRAAe1N7t7thy",
  "key23": "3cuwg1q83ioEAibdAyxQc7qr8ZYgGDHvFAugMVKT7PVsXUMoNhi9zvTEx5EfH9KRcPdSdj5YjPpDgwwJWWcA8gmz",
  "key24": "27yUTYNGALEQENp52MKaRkaLVjU8VXjiKaAuMTGne4CE6p9DZouS48tFeFY2NWF7DW24nuWmhcp5evYx9e26sZmi",
  "key25": "3gus5JK15aVNqsECj8UnhqVP1o5f2yL1jKEdAayzXuepYPfVVPkF1zssyc7b5tRA2waaNWcNdNYh1x1vEr5wx9gT",
  "key26": "3WaW7cxB4RAW8eJ9QxNctEER2PuPrDgSqH1f7Jzm8BYjYQYDYab21J9inAHwDaJebSxdmtXE19LptdwygU3aX6Wo",
  "key27": "VEm2ub3neD8qf6o2UnSbxnLfVcqLYyxesJhdUcAwDQRMtDb4w8vq9JvUvWi9sUexDL3MaTJLm8sehTZRGbKbyMB",
  "key28": "2fBxP655xpjhBXVzj9EM6bjkjt666zoHpteHPfJdvCHtP8foQ9JsmJo1jrNdhECfoEp9BdDq5FSue7Ee94epvfHF"
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
