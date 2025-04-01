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
    "5qyPsy6zqRmnjUFv3EgC1jJoXLRNZLaXo6yDUixNeLp3V8Xps4hWTSemoy1tMAjwfnuyg7BWgNWYFFWYqFmYANxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WDwcpin1BwxDBRsbDuV9Raw1MgezzNMP6WU3aozJXEAjPYHNXDRUb5rN2FzAxcXbP9j5kDmbSAdZMeBpdtEFdqD",
  "key1": "4ZUSoMUFbs76RxAMPMpctX1rfGYqboHzpm5qPr18cxXoJz3HTiq97aiZZEn4JubRZ7DTvx4n9jYGrqBcfvBoFQqj",
  "key2": "3aNXDp2z1DJrXfKei3ZUqquosr54x9qQHGVXET6QorCmAoQAWbQSecEDSyY2yQgzfXp3CywY5RkdPywEfK3vMk3n",
  "key3": "nKfTGgoE1YWeyf5jLBRy5UkiTdT2xrWB7p41NWypW8utQHw3nD7QoiQSYRmx9FDXizuWt4J1UQXKWGYWPL8Tp8d",
  "key4": "2prWWPzBzP67w7jQMCWrNTyxzvCvL7gFCzFi2QKdnZFMiURqCCcttErixdF5opSv5JKFrmDZWtTDwKuAdx9r9DRP",
  "key5": "3HSMncEipqsvhxdQx2gHVgsqq2ktMGR519WNwWDjt6HqpCpvWzUnUNY7nHjd53RmM8DuKM8CF5EwTKktTp8zPBPx",
  "key6": "2jVWHT7wPz9BMiYEq9STYAmZ83tkrPSNV9nhJP3YqNoCBr4zN7Cyd1TKdWcdJz3apXYpChTVncARXTfxvXVGxT25",
  "key7": "U9opthnJ2AwBjVJcHkoZ2QkJTMe7LttzkCcXVRfHuMRaFmCTSZp3PocRiwKpu1yC3ykuxDZmFNXA377qaymuD4t",
  "key8": "54fGYEHi2hvag4gjJhcrGnGM3ByoEyDf5682R8AqQmX6hwzUg4AjkQKBAs6t33CCqdd1YokSTs9qqHaftcBaHrZz",
  "key9": "5uirvmF8m2zWzT6u1aHLDSXfrWkseSdKQDqGJgbjooU8up4qyBtJHBnUCtv4WJZYqURDFWdLQAKNKxG2irzPCupZ",
  "key10": "322Sd3Sdbz4of5F2MFfr34VqLRMyo36wwP1ZGor92VF856JAZ6RzwD9KtBn6R5ai6x84Xke8gEV29eCCdVd1gGvn",
  "key11": "3yjqtnXjXTfVQZY52k12cPA6veQfbDRcxc8QitjaxdCva8uMLTh3nUv9HHbZjcp7NX3xxipfiDm5CUgdixinaisg",
  "key12": "3sFJatopaK83sVXVMrMgwKqCXixJSaR6tf4R1h3fytV5sUJ7LwUE3B2vt3DJkPJXwC8PWcCBic6NBUuZx8rB2CbN",
  "key13": "5p5i482MWHphtTduZBogkSq2eJVrTXuDxrXW2ApJ5ppfrgZUgR3SJ8JWcH417WGSBhgBVPHPawn6ShSCbT2iMUVV",
  "key14": "52JMTDMCZBW2TJ584Ys41TStTzqapzArSW4mAAWAUcK1USrfQoVajiU1DFZk5r3BEYb3rGcnsyfTmqQK3vD7PVqP",
  "key15": "31mUXNvhmwSsrzz9b46d9YomWQf5i2KtHAJeELevcjzFX63U69q4JytEtrsCZHqpfQnTQ4avUtW2jT9M1LPFcYcW",
  "key16": "36iXPjEfsaCgZDG5dBuEfxbV73EjCDzrKtD8Dbq4aoxipRV2Jw22fts8ALWVstYMFCPLMv6XqYyPYt8dugxLXZLW",
  "key17": "2BqDc2gCkb4uh7WSDhCSUhY1awhowsukygT44gYraTmyYKg8PCnrVM9FyqV4f7F4VU2g1twEtx78PbwSU1AK73Ji",
  "key18": "4W2GpuANWRPUiErUE88kBXDbXeaSYER9hJ2KYaDruNwWLnYUMtW5sQo5PcSY5aEY7KnyT9Zyy6jMS4xEsEqM2Vae",
  "key19": "49R1Bj6Gk63ULj1zgwzViNnVNr2MXh4kKkcHiQqDYuVV241yYyyGXQCh9J1Rfig9z3pFQd3mpjeA12tmUWFkza5S",
  "key20": "4EP9dJrJBkzPgZCFSvz9JTp7bxK2dDWp9qVtsacXsxVfGbXLrRDacY1mRfd9Y2WRW5NVc7Ra9pLtyN9rXufzmKiU",
  "key21": "4mau6EfVGWJExevUaLNaSmHHc9EX5ZTvSMiPQ1uroEtiwx7TogFDZ4YDC6AgwJ5oryKEVz83th1ZA1T8E5L7bGmo",
  "key22": "fXbMw9gg91wWwMeqH1NMUgEQxFTUHoxjW1N5oj8tYEK8V8ydoKx1XdYskdtJE5ypP5SJNAsR1stxas1HwpzNUZM",
  "key23": "2c8tAAvvkxfU1r7mFXyLkdq47ioNcdrpjijLFgCoEiF93Wx5W7wEgMySfm1GeGkBDA2mjiznGNUi5e74W1DSeH6D",
  "key24": "2wNVEkYkK8MgCirz88pyDiusjYhXCyfdpvtNug4Qgnpkma8AagAyvALdJCswEdCv6G6PZGspcdEmkqtopoze4rtt",
  "key25": "5Ln2tutgA1SNW8jSxGVdu2Asvo7nj794aYQ3pVyrVAoged7D1gEd8C1LJjaHnt3238VrHtCGBqx7p7g1R9Va3fAM",
  "key26": "5hYxaigeo21nAPZigaZyNUoymzwWCaKFpuqNVcYdmiCLn3i7gA4vkFLDmKtG5upgMNFccCShaoySoKfZgGUjBaCZ",
  "key27": "Wk2Eeu21xhXsGCFK7DwXZdyvZzeq6jAec3jp5dzTwZ3GrWe5mdNfNj6rsjJer2JDXSfvz9f7GH3vmacttuDY2Xs",
  "key28": "qFdN4pJcmP9Fewb1wLKcdXCb64xqcNiJMbMa9NP3SS4Ya2DtdsNGYfrqBXdFHUfzkjqaJBb9q1ckt3z5xspFaj5"
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
