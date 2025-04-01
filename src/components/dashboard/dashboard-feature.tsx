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
    "3G8oUVegdYJLbsyfYwHGkvGSvtG8xW8TGDsRZxb27H4FiEcnHSWM9pmEFnqFzEEfFVefxD266W17Vem2QP6oM7HU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EXjvkkN7dkYiEb6Amx8khXmVKuXmSCmqKHAd2NJZJfuKH2SC3v8ZQczixMrz9daZSqM2xjwnEwXC9ZyEj2V1juS",
  "key1": "ihW7CUG2vhcnyLN6hHqPpWmhfr5xBJDhhdT7PotyrhYpsSqRzMx8dCnEvfvtXK3jUuyGCbUTBN8uU3psRt8jPrq",
  "key2": "4AdBNWPiwEqP5CpAFPskhu6ckJTGikgJKHBrhgpdWrGAZU4yK8peCMNAwAdMNCePAA8zzUBuZnW9wMpT8AWvUwyM",
  "key3": "5SQACeJ46EBabLZunavYJ7twtEpNX32XhUMGDr9dGdSUQsC4Vr9eLiEDjyP3QAmuMpBQTNECLnBx6n81Fk63SnE",
  "key4": "4ymNPRnzgoWhJbdW8BRPUgrvHuCmb8wN9PoeaRJb92NmkkoanV4VeGbGteRsj83ELSDhz9Kt4XqaKoWHMezZxkTc",
  "key5": "3pn1jXb7py3SqMh2ufoDAon934CMwjDqwvouyyektvw6CkZQUAUttrTfA1UYKXh4yzkBdVteTuggNrFMdPnpbAym",
  "key6": "5TCzKTFaTLW4tUmwdwnbiS12sua4toTG2iNRitp17dhrKZfYZRgEFwZHMibwrNRuuDn5MovWdk6jqEop3BfgA9RN",
  "key7": "4qSLvErU6bc9MtpFtkouHF1cuM7nmbuzRhcJTpWhmbDYKHhahrZg3NMmT4krbi5JVnBfG7ooZuU8emHeJsGLYTta",
  "key8": "5JyMn4zp78sg7txGGC17fXLaPjBxhqGBtF6Z9EhPmPJ5XpbBHra95Ci5b8SxY7qC7fvoaGoW22TxNsPdtA4u3Z3X",
  "key9": "2Ghpk7CtmJBWYdQ78aLPSZLMuPEQmrB1xECGWS9ZoPBNkkVcBpx5D1H9P854JSeWPagvw6c9syUbi5qWrmkaPaxN",
  "key10": "3JvapNDXCQzuXjWZmwsFVsQKV8REP5NxL9LUEGue4nfA3QrLZso3dCMTY5EsvhGwwhMWPLDyKEdPqVhC8C4bLpuF",
  "key11": "2LntCsFMwy4cSDsJA4q6rpsZrNQqtJDPdwv2mPSjN364QBRHRdNkBejyKkz9j4Bc9t3cr25tsMhvb3kLxF6r338z",
  "key12": "2wDgmwPy5QywzLxRVZEtE3qRqPrFVQcXEZGfRm7eyXZ4A2Apd76GqjQbgorWWbWyDXsqspTvFkJjtg5e8H24jFBY",
  "key13": "2jSX6yceGE6Fn7f2ezC3AjooNdP8iBRKNGfGPQar9ivQxpTnmMeMUXRYRErQuSoSo14tmreb8mRSfGP726Hp7AvN",
  "key14": "pW6hcpRqCcekcW63a2AqoCxC9enguepZkmrWG5aSW2gPBJT3nEpRd2Ma57RV9WHBiHCGFdc9HZz1yrTyjjLgHan",
  "key15": "2TPs1Up273YdERTBYJLNPRptkaVcn5F9txMG8BA7SoKjZzMGtFYsXgHk1FSDSucnmf3bq8y8trRBXH3Ax3QtMf8M",
  "key16": "3cNXbbATxoCDroFrG5LqoFSREH3vpaueXRQ2VJp28BEv7uCNbM2SZmMAsDRurKDKfhASaRuvWmYCimUSSPxAqNne",
  "key17": "5QHn7stoDxtNXfw2FdroS7jMGrYnSKStmuuiqmCjGLGBYUpSZtMDDiSK9gp97UkpTn5BtnUeFHC2zihY1YCb727r",
  "key18": "3VmorgXwnJweVbtXC9xwWTRTy5i7zM5RgSr42pjBjn6VR2CaozPdSTmSZ3JEzaQMMYbFyzpaPnRkn1QkzPizmT4b",
  "key19": "5E2bJpUDrCFkH6EhrQ8dsuR4kw73uMBc2wV8JtKxtY1uzkmJKvaadg9G8DYwkWVzQhTzreC9AFj5niLQhvy2dVrd",
  "key20": "4kKkKhq3t28p4U8xNevhU26bjr15LZbL9jJsQstxQcVTW8JReJRjQZFVnwZsQd9G2LuTtbZCPGzksZcCPD7JYFnC",
  "key21": "239cs8VA4onPFLUFuRXYn9W7KLdd5SXtimiM2AsSbYcQ9SHxCwiUSzhGa7BwsEuJkUVrwntsPyjuwL3EmcmJAxMv",
  "key22": "3JG3ijyxyWWRgPKot5qoKH7smYbGMVfJwQGdQT5KZNPi2pWbxd6TEMVGY7pAKVg4hazzyYpX29jNMhMRyXjDb5Gu",
  "key23": "3XdjF2cvrUTUMhM89jpdTXnXVVVgtS1VyovdCDEXxG1JSh2xcUTwuGYyetdvBwVUsS7euMfhuiKXKuXGL5Y159KY",
  "key24": "3RSQ2TL8Xbr8WkGsngZzkY4nPD5fYUe7mKUiV5x6UaUnVJs7q1Y75UpC7FeNqRQCfERfKQ59bDJatvAB2xkHrAeP",
  "key25": "5acF8rZe41wUZfVvtf1RrnZ1oLHioeU2fXY8V9U96SjU8toha5w2yRnPnZFTNYJU3M9Zbpo8rNc7EsabhLSiVkAz",
  "key26": "9s1svJ1rbvnEL4BwnGfrSbS5y1cF6TQP2Xv7G4JxDxwnHc8Qwi3nYQTCWBMo5XXFp4CczYsH2V5REuMXFeDwNQe",
  "key27": "HQvSdgmmc24qWrQwa1gKYt5zP9ziY1oJHHQTMCTsqzx8zDma7kU7JejqR9ujhto559oBz2ephXWKUadW2xizaSj"
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
