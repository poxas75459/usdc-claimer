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
    "3kVSCkiXUASBJRyzKhxRjwwRw93rh1x24iMScbjHtSwoXwxK1r5jTMfNejYLEsVJhepvbvs7d9a6kSn8JnSRw9ER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJcgrPf54ouc2hvVjGVUTzCLx4i6FmPZPfv2HVKAPBiE8SVJVJLqpqiosBag6T1t2GKP3bJ1dk9hepFqaD3ZS8G",
  "key1": "5EA7LdDQpRQNSnFJyoHipRmaLBBm8TNsPB24ibZAZ78qB2W9seDNREPBQK33EXTQn9MgRwQ1QkKRrA8STLs6tr7T",
  "key2": "37EcMi2SDrsbpQFH6VVMcRhVEmSxjowdh9dah67pwc3ArSiTKF5oibV2K6hytxjPkWD5dco92Rn7cyHLwStsELGR",
  "key3": "5gTrMDZYnSawW2QV5G4A8N3GkBXZscbT4BktSpuAk6XhpHXe5VQsEbNjw1WrtGdwEt6EzFoH9eHGW8PH7w3UwExG",
  "key4": "5MKKnAVPriZRpJDtgeajaiPKoQxYABi2hpARUuPezzLAJDHCnJfbSgK9JGSfjrFSz7k7i1YUyk9aEuDEDScq1zX7",
  "key5": "47ji2VgJEBju2zfsbdw49pE7xMrvthp4KDd1b9d2ok7VDiDeeFG4MtMoGvcr6dvWMtNcmfJCoceTNWZ1vVHmVied",
  "key6": "5B6wc3Nq9QMWAWzVeHX7dwgRV5oxoD5ZngzdeLtacCEaZX4DewHbE2FuNaTjmEXCbpx7NSmpD7FvPVdaNgNLfCHk",
  "key7": "mvN7MndTtgyhFnQRfEoMNgFaP9hEtKyCWaFdLRZfhNhQnVW3qFPAQC3ghLvKXv7BYdmGB4oPvWFkH7xSy8wLU8b",
  "key8": "4jzTXhjQ9L5MqHezsHb3u9UEqCAqdYGFCvGFF2zpsDinRSo2YhgLCRWLZZdvHEcS99tbZr16TQWEHnb57YXC6Pym",
  "key9": "4riFSEgpom5kTDXEf4mTH8UK7sPFAaFTHTeX6Swck1csR3u1vtrhWFKGbW5qmhaq5Bd53axVGdXheBEQ1rCmrcTe",
  "key10": "3JVjyejBrLpR391rU6agravu9Bo55rda2KVNjkA4VoqpX997QXuJjtgKYtm5WtJg4zCmscrtXXnganzwGjHodE1J",
  "key11": "4FDeMieR5X993korSogmh1yoMAcmJ1v8K9jSe3oS8RZcYGZdmj9dsu6GCsVssYRbqHJfZXXRcsisTyPQ7gUjNXCL",
  "key12": "5tcAJBcU4DftmXQdNkbRQhtUd5xJ3EZg9efAQhSLJmxMt6ZJcVkD6pwicZHNGiuDb6Fk9Gh4BSKibJyLMMkp8SSa",
  "key13": "2xBpZkcyCHJqirdxBKGyb1HoRDkZXf8xUcvWY73fbCX8nBk1tJmtC6SCBBTWeMfqsnPdTj78AK9BxPAsCQjHGqFt",
  "key14": "3KEQZgofz7A9ogy9aLXmqSEZvHW2nwULWEqcM5CxBpobPtU3xitkM2ufNZ5rZRPp78Wah8WfYBk1PrZSKj1GqSDr",
  "key15": "426htzs2FrdJFAmDvfmoaHrsZSkQaeJ3Z1ubfWjbeAjB2Q6pGtUcVqfLvR7pKrHrW85V5ciE4vhHngpX7RnMUWhr",
  "key16": "4LaCJ4hWyZ1xe93ruqWFTUJBoJraSKPG54soAKi7cBhxxSB3UULYQV85gn9sPRPzZAMLs5gurE3vQrrQcezKhKEJ",
  "key17": "36AXkvshZQVGjhihMQjoUt8vxi4pb1xmvzgAwosqiN6LkD2GFb6PSUFB6ia5RcD1yuiEHfAW2vJVYWABn3caRr7k",
  "key18": "593Cjq5Be1Yh9qWtkM6V1JXMmhwjFpbdXczz9JXpyAAThPwSDg1uq8hDD4wZBnN3tRCDQqxuAK6hwRD4gj1ZhLPs",
  "key19": "WvawjNTbyMrTysnxkNP7pgn2LQWgfbEBsb8zKCvfudsVagb9T6GrBGBNnw6ShUqcRYzVi4mzPwQ56ZysvygV6vo",
  "key20": "3D8aBtaSxaPJsKkueJkEbB23tw49rhaqTVFTnd1Gqz3NJMgrHFynNb4eXJWWY3mPMBFdVmcsmGRcjzbTBfXqcJQV",
  "key21": "5zaqbLKU8c73YhMU1dCT9BCtNhjvRw2wwEj7izKjCgf1MTGJ9xqVSQrxqZa1NTTz9AhX33K4CojqQc5FXSR5JVrm",
  "key22": "hqKiJVckJBpkukESCxmGhbews45Fk18R6f67actjE3JNrtdv83hoDJAzn3kXE8BzPQYJantoSDHLdpRNNh7LDog",
  "key23": "4P1kGX4j2pMtsTcF58SpbHcyHAYWtuorcn5XJvtJ2gzEqNUYLb4jro8cGzNTck5xqvAqYc7maVrSHyixoURjDwsA",
  "key24": "5PPe3k9XrG4mPbcA45yWn5kiA6SEqKwAxD5y7UoDj5uqWCHN4w27H4JAxacwKQeXDheQRzaRU59x8rfrMFzZQVbf",
  "key25": "4Kk8pzG5pwdQgXxHvJddxmF11LKtqjDCfsGvpDDMT6kQjDQj5g5exAMEbtosYuGs8BX5CxUCjewmrGQbcZDeYqxP",
  "key26": "3QfAwcdZfzmASgH1KntyxQP4EqC9ST3QZZYvdbAMAC8DdrRtATrtCf5LXKQpptKYyQ4C2uWoTWTUT2j7etVoQxQZ",
  "key27": "3qkjvTvk5jqxkEsJ2QbPbkxeLtko2uEEPbChk1Aw1MjmRZhvDSAziX2pE4wP4RxerUfVcP8yjvfJhtcm1xaiDZ3",
  "key28": "67YoQHUaxfsXnpGSMhGckejsbGbKKMyPoJayaPHikaPvYGwAwWZnJghZAoPXBiyTrxYAUhUHrjHjuRGfy4dtBr9n",
  "key29": "3dWGMAdnqqrCX2gAyCyRYogWxq5vUXPpLL3uX5s6ofiJeRmhLtNC4tAw4qbj8s8PeQNNLyB5cp9QsmDLcaTEzgQT",
  "key30": "2rDJXygEjxRwyKbAVgKqsK8rLyp5gxEQFH6ENHQTHGZ2NNuTGb1w9UBnZTSK68uM7TLAGJmWwiwN3HCg7dqbFbFw",
  "key31": "2opN3mNqMwjsYpLbMrcfMymQbEQPbotcumaMX2eLjpFX67Y9S3forX6pUkS3a6gjqczLFG5Yn5V7STwKiV7vdcvX",
  "key32": "4Pdy2ieKKvsJ1M1WqnAfZZcH6VSkgXE2LzpVWCNWZgezi5S8YYZjbQxk8FjP8gTHV74tMtxigBvVFgxNZNu8ieUd",
  "key33": "4CD4HY5gihySxMimuYsCuYrVnv3pqRW7e7qfio1zyhjxLaeb8gNQwJRWqPjfadsGjRt9xYEaJqXQrruUMGxmsCUY",
  "key34": "9vP6c7fbe16r5efsfv3Z64RHQMGw7GCpJ4PuidGV3Lb2F2SyRen3fDFxm3RwgmbkdFeCcEKtNUGnpzwenJZMabB",
  "key35": "BQi7E1qEP3Pkuwz9BehmmW6sPDdSyVaxwJQawtFj9nnjeD1TPCEXrEFgY9Z7vywC2svXMdAW8D9Ly2Fg199Ubb8",
  "key36": "2RFSsm5X5a3FyyHeTib6tY2iznYwjEKFEcjPYt5eo5AJqxeLTno8fk4DgB3jDp8nTataFHeuHPQjDDXpyRpN7Gf8",
  "key37": "2Yrh1JYXDxc1bsL37Q8xK3BV8nY2UCT53bnw1Zcjzg2FuLsJ2KgH9vFC6D8pqiPuBexDi6UC33gHK6miRZ7NxUv",
  "key38": "3eVm1GWpeevFxUSckrPXxHWC6Ln6JLR25sCYiak13ULkJq6hFs1C5rJ1sHxCbSeU8FsZ9W33D7U2GYrDtR2thY9X",
  "key39": "3veTdyZ4JCKmuDkmPQGNMuR62aXJbfBxfDwHmMtnUvDZqH52wMXqiFaYiThDw5Fsf2tm6GwBm1NcggijMZT3gNFf",
  "key40": "5KByv5aq7QsdiGc267xqcsTmKUuSMG8FAB9oYKrvvapo4wxFAVZN5fYNuRtEsYSrtqYh8HLhRvf8NgZgBawTEcgX",
  "key41": "4Q8nPESac3VmoQK9ysJg8tHBSexrwsMSjjM5J7XMgVt88nPUHL89DXNDPt9csuysMCU7sxrKmxeySSczJxYzvZ3C",
  "key42": "4iYtckpVg1ZV8UFHTxQL2PETGHKTK8VnPSrsGJW3MgAU7aCP3CtLQPCgepQLYWDqikUkzNsT19EwSaJpvfDT88p8",
  "key43": "s2Twwckg4DADT81JoYPPuKNJbcSG2SEACbuBbwrCVbnVezNivz7UjHEta2ebW2YjXRQREQhtZVTEbRWC2ohEekJ",
  "key44": "5oyBn7Zi5h9DLAiMFVdgMVM1LAzQvNHb8oJrwVESovYAtWC71oKEp7nDyvrktuj83PAaFqKrKqqNojVBvvGkVqMT"
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
