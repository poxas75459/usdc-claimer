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
    "5DJJmk6JC5uEY148gZukeHVuAUSRnujGdQbgy6hS4HnApuwNpR9bw8DgLheoJPkh4q8fBKfAV1HHTdnqxDbFna5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WsjdEqrMP2Ftfcjqu1dsvDu2ZFwqi5v3BVXLiohHcPLoLYZ382sXmvySaEk3cKL751xah2hxq92UPdiCn3PoUmk",
  "key1": "5QY4mczksgCdVmf9NbLYnLTzqzGeTJ4MnLnWBie7tKZyV52v5re6UCfdH7ZprfjfDH5JSc5LBtAxcdcqiyjzGRWm",
  "key2": "MsjCW1ZhzfUhGsnZ2vohyLoAniBVmSzDc3PpFYUFfnjvLhZtzJYKSXyskFbGXSH363tgzav7ezacDRbpFDUk6xE",
  "key3": "PrcyBxGdjK2ouXLvGrnPcCnu2VEdYfdDfPSSygoHN5hazUj3QoyyhAZYZF4ArKvdDSNYNuZmdyk7x29aMTcisad",
  "key4": "3VkGHz2M991CYfLaRB4VSWNs2NKQPvteUcvBv7vw9845YMzgYkM5EfG4czd7i9M1Wgjvh2WRD9wzoKpfDEbqKyLV",
  "key5": "5wHcaq1ViLb3YsqjjfbbPUiR98QfzakRirD62RG1ZadyLi81rqShbptSD54U7t32iKobA2MNLmpejNBrV4xvBfZ3",
  "key6": "5GZHagcwPNCwjiuuvX5YnzzY1eUd3BrvJ7rdJBj8XXkD89u8j7aQ4usUCsCooWq9dk29P9hMdhvphbJQ65hRKAtN",
  "key7": "2QErwZx3goAe5gKhrD4kCspDUDK13oG2jDBL3pWim3gecYWBqtLsXDjUzr1PDKHEVXt42uQY14D9k4qeQ635j2eL",
  "key8": "4MXY1bdKJCQsGYdRqkrATDkWL96i9Z2dF9KjD7nLxNRpGZF5N6PNty6qhtZf8tH8F9WMiWcTkaZAzZGX3QiLgBMj",
  "key9": "2qND9ztvDoAj1vHcv3L61qRx68aE1Ye9wUNUUQAUasmmfcs6knHe7TYQjcxZiYUN962TjaFB4cFLQBp72QPALtkm",
  "key10": "4GgEHquB8YYHY6Zpo9r7gov7S9Eps9oD2RMFqDau33B5u89aJXHKkJ3AT5YzRUGLBkAqcYmsUnoDpe4tbaQtobe",
  "key11": "3fSRGrFRvwZZDYWVYjrTreqLDnEgEa6U4DaW6fWQQLPfw57Ks2RmjvjUQ5ggSdVzFPgAyai9cwnase9atneBo7vT",
  "key12": "o5QmYVWPpZiNKTmKqgGMi3jWB7CM7eWK53Tc3UqoNEm1yyErSPUUs8Egb6N4sCrrit1joB6PYedZUzz6t1M7Y1K",
  "key13": "2zduZ4J2smXykB2WAiMatsMPMcA69DqLhEumfinfobSeYF8V7jb48AACcdRqh6wmjZcqnqhr6ektDJxfSsLobjAL",
  "key14": "3RGArNiaVpCDvwoBAumFqohEgQRvUd48YcP2uAQ8r7MxswBFDmgRNM7QA9kSMwD31qeSStqL4PBvvikvJ8u3aKqY",
  "key15": "4kmssPaC1RHcF3rHQpKdCAfb5R8kCgQ9DGLEHsDtSVydENtsi91JyW72w3pN6fi3b82H2hCUS1DfHK5GXnewHuke",
  "key16": "iJm8j8R776QZUYTpbJaj2DgT5g8eaWycZNyrDqz3T9Qy7hbmSxGpktoHkChdKB32ZQcyTrmbEGkyemPKxpZpSio",
  "key17": "46CBizHxg2ExhHi3xZ2LiSZVcdXt9CgVELR8VT892d3CKCzyUHxGR2aG1mMiewzH7PehoYj65YwnjvLhmKPDMuHK",
  "key18": "wEDv4C9TRvVeAsod6sH3PGWHKyK619Q1qihpDrRHkQiQFBQACkJ3hrraDxhFHFCNB2PKDkvoMpofPZz6mkuoEV5",
  "key19": "2hB5fBKHt8Bmc5R3AG9txy3w7K34r43CiduVBcVKh6QXbJSSHPVXRU82b74SzKBhrUmMD4DmdphLCd1yynzXTcnB",
  "key20": "cgGMN2hYT2WDkS5LCeC81Z4o3z2Yi4hLDiBxSxrcyd9uciRJodZxSbBfgz9tesB2mygmouhmEgJRHKJdMcuH9ks",
  "key21": "3gXrtHsedLeBcCEomaXsxdA5EZicPGZmnn39bu135jQTnEqGnG9hc6svFAqyg4ybbRBcD38YFHH7gxgFRq3xCipC",
  "key22": "67c4yu4UVgsiYYnVLeYfr7AFZ5CgXKNMPYFz1JykSV6dUywUYnZKwH9zF4WKvZXCngSPupSNwruefaqFSThEBMd2",
  "key23": "5d5nwMTT8F9grriw7oncF1L1uwwzH6GmHgtGRcikPDx1YiacYvLKFyg6uwXwT93XZY9c23iRMsEFPp55eo6pWwCA",
  "key24": "3VFLr2j8T4rCkrtDjyb7udhkGDzyP8nE6GkeRdapkkYSmZenG1h78mvwZUysLdJrPBcjcueciM5DDW7tMuN4Yrb",
  "key25": "5PjdYthnN29Uj6WEcKrCa64ZZyvkSocp9d4n2DpqjZQ3Q7CJgF8dUB6TUL4XYG9GQ6YSPzCfHGdNXt4uVauDAUdk",
  "key26": "2kenYPixC36sLduJhwNXD9Ttga5hPLdSCnzxqKrV1zMruMb8hLJqMJcVRXsH78GXKMwCa9HLP5AG85T1rreeWcXW",
  "key27": "4shgWUTAk9p4j9ob2EdnnNVpjh6djpmYBhmYcJpMoBhjmDWsix1PNTnpeTN3QJLmnMCyFSMkrq2Bw8zsHG299dro",
  "key28": "63ZWRSdDAksZCujzYtoVqmQc3315L1d9WZCKjQ6dMzcEGqEnMBrzTMLxCFCw65HidvwrwiTM1JJRXpzDC1uoJXjF"
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
