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
    "3BR3Nvev2BXmfhbvy3FwotqdR3sVxEPxiRbAMhVotEc973gM4jMFqNYEgUiFrkCVdw5kDKDV1EvViwLCLZ5eya8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rYjTzUfumaqkv5Y2WzrsphAPzXAWZ3fACZN5uj1BPdsQCcf1EvszhsjopNUXQXKM2vUpgYtuRHZ6UCpvz6aTgKh",
  "key1": "3GqzFfUo2sLAeciFvPgaB1E7iqaym1nsJJknJck1vJoA9pZrjsnFkyUWqYF27zDiK528EejDQwZ6qzfYQ4J313e2",
  "key2": "2DNsSF8wnuL4eEBto486LUT6FgN2Daad6tn75eaKvosciSgPafvgGhcrNqXHimhaZxUkNPuiXE7SxY9Zxqb9VUug",
  "key3": "SbhmDZh9anqsjuz1f6zGwJAqCFehVH3esDq7KE3SR9foSTNZC3cPFCAAfYFoNvQL6wqX6wqgbAcnAVtXJyqivD2",
  "key4": "4wH6QgHF8eX5TzGDq3d7iQoYF9oUqJQgdpPR9rQft611eWW2VJPBxJy1UrGRUN6vhf6DdWyvH8rJCnDZGF2NhFGu",
  "key5": "5j2sscAzKXHDhyV45FHgGoJHRbDYPUGnRZ7aSsiH4VpL3hjr1jaZYpB57fegdBMQqPSFfqtteHJ533Ut7CZMGsNd",
  "key6": "4qyVJ3GanCZSbnwdWVU1kMWrh7SMB4YaV69YYvkCU3xRrSY1y3MVT9Rphrnbar2iFeiN3S5QyhBpkvAP7E5oFks2",
  "key7": "2d5LLqVyZ5W9L4gQuuTddgYirbawmKuxYhV3eGf6xgmCrFBHApqH1iAWzeu1rD5TuAQfpXArMN82nFaGunaWujzb",
  "key8": "3tfDvkc99YiPtCPraUEb4xhFbE9YNJqMdcvAL5p28ndBviVCNFkGeNs69iBXGBxBpkxm3b2nNr9MJ48ErovymAr6",
  "key9": "3GSFdLx1m2TTDPqbTiF7ZJs93i91oc7xsehpfVjKHijG6RKwyibGBYSktV7ELCX1beevbwYFi1FWDerFF83D6Wkr",
  "key10": "5D4DJTeHUZ8rRsfg9uk4V4UQ7e2hRGUA7oQCeJ3tV61YmJkktxYNhsm2KuW9rU7qKRdAbYY1fJxsTdeEsPGpD9Si",
  "key11": "5BZePj5Jr2Ux4sVBjY7xzXPvQv88qdUJuRhjxoWBhUCp29Rzyo18LgW9iQrxc4mkMf7NfRZTr7QEqW5bhBnee3dZ",
  "key12": "3taFnnpy9VdqWX4J3jLLfQQz3iCCXbLBnaLese4CFztFfGYq55PC8ijmAPU29t9JiEd6KL4df8mauLUJZMgryZxf",
  "key13": "3a73x3W75NoW5vXwsJp5dMudbwSyDqUQKJcWScGdpwVJrbni7jW9bBiDLuVmURZAzpTzXF3NuyYuMn4qwSnvKTFV",
  "key14": "5dKNxkxq8QJjFxogwWNtPxNcybURaNQMTtz3DHiuMUgZobef5xf4CBJUzemDRkY1wCzicpmfRUChdPcJvcKtZyE9",
  "key15": "67DsxQAWh7hYrxahss1LHkkMGnu2GhqF5bEyxtPMZUi7mBFjKAGDUSRH1g7bujeZBthPcAZFqsi6fSy6zVb8A6xu",
  "key16": "4fGyQdD47y1xFbRhYwD1oZ75tBJLrT5TJoQp3eDtY3828EHuh8YCrRLTZsJ2y6EM8HrCpjuyr5CK8r7EQ9z9ndRF",
  "key17": "3cb1sweSN7TJBU23fkbqJpZpVTyycRHXXbFnseZRXC5yZBDJmKNi7GvXyXSqMR4chnVejt5FTCe4EXCrVKx2kZ9M",
  "key18": "5Zz2RF6ziXVwEHe8yAKXaNbZKLCZFkiXxJ4XaBBMqP6ng3WWvQBAbsXmnjtUghCtrZEJ6QzXAjeMdXFBSq7CR4sZ",
  "key19": "2a9hT1KrJQ2EL6UQkWzE2AwyeNaUTtj6DqMZsGb8WKyPjFDtiBRqmLbDh3VMqQG1sdr4h6qyCs2uhi9HiXZj5z2u",
  "key20": "3excMEkbcXJSZBQAQQa6DMPNZUSjrftX8UK8FrLaKYTssQjp8CBBTaUfhjbMw3y9LFJuAiXVgvFrj3a2sEihaTm1",
  "key21": "22AdDp5mjiNR1vSrG52yqXc9HQwmudkoyskFHw1d6rQY7r7nrJTeQUxDvT6ERBurnGNLGRUbDdzZUGTvRM3uv5Yj",
  "key22": "5iMfKMhm4ddmJ5WZVAZ1W4dwmx3H9qQZrG4G9dGtNkfSnUxTu2GXjqEDwLddaDGqDLY6g4XZikzHSNthdwiWeWd6",
  "key23": "9eZmeXhGPungQvQP3pohGwvbjisNqSw2479YbNADps3epywoSDECQHCyqjL9fFmN35uBeurpEZn8MdsdGCAKDsZ",
  "key24": "4mqm7bLDyctTzRiPYBChamtkUYk2nDEnBX6BhFqy8cRyzbPJdZHmggXBFdSXWGYjm4UELiLHV1AWwKJL7iwqyuB9",
  "key25": "3KP8hrMXyyM2XpwfL6KUXcULs8zrTM45ncURZf9j6ne2CGc7GXcAVghGT5WyMFTKqbrMBCGvk48GR1tPoqQKGvyu",
  "key26": "2kx3P3QeMsMnsa3339bgQevzbHqZKvFaco2ZGCqrWkB5MFANJ8RB6QiWzVbxwb4ZMvAfPnxFfWNpACVRsozjyKAW",
  "key27": "4rbZttcWDpXSzfbL8psqvXLU7u3hU5iWASV2M5aR2z8PEtKpX5VPrXdEPn4FFbgWzn9REs9j4nLfYt5vfXa3Yt9a",
  "key28": "238M8ob4x92aRgWAw3mBLeZeL9deBaAh1U9LX29wu9qj1FwJr9QVrStFz5QaWw6fkXZRVq4RgVZ7d3kj2mt7zKr3",
  "key29": "3CLvFnispPFTF2v283eQSEjop29VREPVWAxGju1bFv1kfEgxZ1ZebSErfxeHvafG7Jep4M4v958wYeZeWFSmV11c",
  "key30": "Wt7kzBw9zqhbcHTU4BnKVogy5f8Zy6uDcRpJe3Am8FHvTcJUF3Fu4yueYRXe6Wt62jaK7KLQHAQvqKjdhScpxYw",
  "key31": "3hEsEExQrHcKikmVGijYu92ogt1nuvcVnrszRFqzT5CJLtJvSbSmg5VGh8TaakUYF9JKY3KBPHtbHxJZZSNN9MfS",
  "key32": "3Mov5VXJE34bFZuQ1Vf6jEJXCbn3ucuBks2yEZRN5NxrZNQ97uq7DYosh6Po8o8phYxqnv33Jptf7MXQdnXUYATB",
  "key33": "33qtisTycoW1rDbgbQaUQkNrSHUKJ3HdJuQmrMaPPUpfNtEd69v62pS8jDjS4RxTDGWSFs8pHVpcjucCyBoZUPpd",
  "key34": "2DvnkDB5dnvD9FEkfMXEuZXMUzzPLf3RfxKQZe3kHngdENyhfuS1KipQyCwTCqkyQ4DroWpxvrhoZbDAXLH7ym2c",
  "key35": "5EBy6wNpr47f7pE2tLrzCcL2Ebxut4YAgzczyDP1iTB8uGNSRURzSTRM7uAL42bLXVKbSv7DkLfgV7v4xhj7eeAz"
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
