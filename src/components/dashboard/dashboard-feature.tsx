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
    "3uzZXomM66LwLZK8nN4ZeFMxz8brwDZ1TLn1xZ7wphDKkgYGCW9PwdPedjFjVho1GpKf2crVxgusihy4VrGoZsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P8LLPd5CutF3rsHGLYBqbqtPQsiZAdxrxxKjAejf5qDHm4ns5aDEdzvSXRe7pPGn7wfdYkjNHELSn79dmu31fF5",
  "key1": "2ps7h5NEvcJuTMJakeD4FxpnhVW53dmAE2yLgMFEzRwahKdiCAfZz35XzTc6SP7BD1AyNo8b2oSds6SiMwvre2Sz",
  "key2": "4d7gL3Sqgcum5h4Nm3Dr2ZkREJimNjPi6YSNDw2KhCtCXkMSBZ8Wn8MuUXerLFxL4Sccvvq9QadscCjwiRaZKF7R",
  "key3": "2vz8mFxkEkKqz2oQPFA1tjZZjnawjvcSKGCp3DT9wPys4CnN2xpT3XLn4GYzuqim283bjAj8UZ3sYFfFjKKe92eW",
  "key4": "5K41ZTLY8Fk6f97N7Nnjvj12qioHRAS1CDZVa7sso7YuxKo7Bjx32DWSedByRL6fD1d3iBHr3r9Lq3ujdp2EPcDS",
  "key5": "3m3VxCpnh7y1TVeeoeFVD44LWm7uDVTN1votsBWZiWhrDJWLskzSaRAoGT1i7ptAx9me1R76qM5Mgb4MNKa7gfN1",
  "key6": "41hVcakaCxa2HUvKgLTHvwtmgnXWtpzsTKafBqKYx9s1GPaUPBTqiSzDndrcY9w8Kekve9MuqVagFLtEnJRCoe9q",
  "key7": "31TcMZPTEVAn3EVZ5XWqJVB1Zb2yN1EgN5DhtZpNKMTEpJuGG7NaAa3tQ1B52eUXSGsrDSyfTV4FS6HcxH7YdLpk",
  "key8": "w2GrqteeMVFxQ4prebGwozBmrBGKKEuaWUeTJoeTyZ7EDZpzapqzvasNc9zPiEKbYc5knbhYBWthziEvZEt44Ea",
  "key9": "4oBJyYmiV1BCA7VZMne6giVJWS3MMgZxSZDkKjnc5H4mZLbeZo4tCYGJEY4KjznYo13f8QYnkuEH8FaU6s24Xpw8",
  "key10": "3ewBpC3acyhjyqaNMRYcMr4cHPmgcB6ViFSMzxAw7zZuAeC7WRGcmQYMuosDyyLyDSUNj56vyRYfRvgBhDAYQtnJ",
  "key11": "46r9XjWMZMVwUCP3FjNPB6P724RzxQGSZhoN1VgYBvGog93CCicnLyQZPjo2RmRrPBNrjYoPU5J5nxYcX8BkehuW",
  "key12": "mrDFSixkY6xhb6nCWfu5Ue3WhjgCLiBrtqv5T1kLgGuCLCVpFNsz6q7K5UUHqLCrShpr3umdfLXzCKsP3r8ARJ8",
  "key13": "58tAWVZMdmHTHivGFcfU5bYgzjDUXFdmPZrc4VcZkqHqKdcfaqudGQxFbS1UNybYxziubu569c6JyE1eTjFdkNoi",
  "key14": "2HndoBG1zvTaUmXdLrZTZhmRez3huScaScrffKNFYBdC4U2F7nfSSFfRkrGWSxkRtPMMoCj2QJDkPJpV4vhuXzc5",
  "key15": "3pan1hLqQLKi3MQxWLxfoE4Ti2atgvowWgsHTQQSPuhA9B2i11UGV6VLWwvQcmExkr3FV6iSEHwb9fm3ATBmFJ63",
  "key16": "zgFHVGapE5aPrETj2XBzSKKtzTLQw6sJmHRkp4yLj4pEnzaAxYB7BcGMGS579cTxAd61UZQm8CWbW3c2fGkSeKc",
  "key17": "5GWZvXSw8USkKPnMW9wWyWwW9BSuWhu7mdy8n4Y2qZFT9aJhd65psd51XbGzkDNG7EoFHdtYWxJGAdmuVVXqopoz",
  "key18": "33T5eLnCyRjDEiqT9zVDR46tYkT3ao7j76bxWFcegiQdSHSSr7Bg6XNcJUVRxUpP2veFP9zbvZeVKoq7RfHcFobf",
  "key19": "2ZHx7UvRCtZf1MtbJyaA9czbjGpobDmxV6LDCBbXNx51CorfqVBjRXtfjyy7n4YHzd5VQkZkrmRiqTMrD7LKMhXd",
  "key20": "2s9UEbqVw9pgSnBfu2kgcFKxRN8zGEbq8mLSqEjfvXJhqsQRCanSmia9G9xHirqsV29D2QmjqY2W58682x6eiDzG",
  "key21": "gXrFZJiqd74EgA2WKxj7gCKEpVYn4mzxmaCoZSUvqZ39UNw1GRH96rtpfqYLSaztik11qiV2zDK1B4wfKTso3u4",
  "key22": "2Xf5MBByYcLaouwNWzqWThEpFWnDTZmNGqUaPHjWnd5kw5n5BGe1sKKwGLe3cAFMVMRkbHnVYJqe19PFR21amgMR",
  "key23": "44hQ9Y8B25JAc9oQmchGtUNP8jVgjvNNkmT3C6nFWkeXDXS2mHqgoHULopQTSX7hCs86Ya95QLwurMMfjPnfWQKZ",
  "key24": "4X7tAbqejzFWw6Tua121gnACtHMuMkkE7KR4MxpyCGPeNzkumt2PY6jmqHy6zoPGAbgYau6cnK8jsmGsaEwotj6Y",
  "key25": "XoQGHteyFRhVU9oAXhrUYwbmC8o9K6knTJNRyur85z9fVarr6jq4gfhQwbiCJadNvHmHcyywshdyGHaKuB1PBjN",
  "key26": "57q8wsQdy1JactxmKoYqoTNLnC8z68qDh1cx2gk5wCsrzYa1gQnUj6rsf8p8ZP8Gc2gcGP23PKutNBPnsrFqui4M",
  "key27": "2By99piZDiUroicXCu5gAMqcGAWVw7JFV1hGYprmYVPpPyeMbkXsve7mhBUSxshrwagTo2JWurr7Rc2bdNgnXmwy",
  "key28": "42rvf3Vf7NCpRfLBTmahQEKvBHGvi33ZCRjj579UYBEw1XLtoxcJZyGu9a2xp417nVQDdD4CUL5pyhf5B3BpJ6t5"
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
