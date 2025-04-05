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
    "3W1ceVYmY9Vhwdh8u84udLZgzwwQpG4rqVkyBWpP3Q8GZmD9J2LDZfKh7nUnG9pTMq3qixPYkueXQnZZkXRZ842"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28NFZKiZXd517cw6qtVKrfYPqy9LeLwWtz1GbWSgywCDPkk57W42R2wAJ4d855kAeAELBKn4yf1UZQW6LFoYUHoZ",
  "key1": "4qzRThPraUqXJnd7JBh4BqkSLuo4c5zXZVg1vBdpM2efUaADLqoW14NshTXcxhP42YZkc1F4Ju4aij6CoR67VdGK",
  "key2": "3c3b8NEbh4mSdivxLHWjcHc2jP4jjoJ57oAhBVP2T2QGJ1YEeJ4ofux9AStZuudkCnk1RYkrYaKkQU7z3GXmE5Nn",
  "key3": "2ecmJJJgCy6VfkYNAUD1bzv4i99fwam47XyqwKNLFbyx69CxRVuxHyPq6XMpkVhssnjvp3eL4u4dcv6wLgR66JAr",
  "key4": "2BmqEGGyv1rzgBfMi3ZoRf1cBFnWm3S1a4CdKjDJHBMQMfNANBNycrhf4S6TjxZLAzs8jyPzbX81P8Sww3T1vYZ4",
  "key5": "4qemWVZE15ro4dyiBJ9sKjv31hxdjd7kKwjkvhZwzW8X7e7bb8ZeA6UQUbhMtyJyJoxMf8a88aLX2WXSEMcR1153",
  "key6": "2e6BcTGDwuNhkSzpJNd6H4d9BsMpPhRUBpciFkNRwpwQ7LB63hhpbYHC3nZwYNqSRfVScYXLHCW2YnJ576e91Jct",
  "key7": "4jgLQGLERNCPYAfvo4Tntygn3pnMmj5fjdigWsFSgBafpppojusWjztEdd4rbPur1HpXvRZA3DaZ8EsARnZCL76Z",
  "key8": "4KrCWf2EPxuh2oHdnbxcmt8AckDDRRhdmgsFShpabvonNx9rpafoYMW4bkECCPV5Fn44GUJPT4U7e4ECZN985E3z",
  "key9": "4qsmX5u8PYHBeJEc2yJsyVBanuT5MeTcAw3rifJX8ZbsHYCdYUFy7JQYXvoYtXYGC93XpaVERxWmJ1rEoigsxXox",
  "key10": "4N1BFUGaytzxuAk2kNUQJZgTasRtDZ2bptLNfp6awssPDNPpCjCYXk5vmSq7xWmY1twKpS1Ag9ktW9PVDuwRQns8",
  "key11": "4QJbPvTkktrJwuVgPsnLbMsnLoivF4JVbrzWWaE1yhAaKkbuBrSpHB1ZCP5r5fBouvUP9ahonvSEHHuSUau8xpUG",
  "key12": "5sJHorh61oi8Ci2wZWxPmhoygpGEngMZecQ3WYi3Gasm3CQn7ikTyTgwatMA4EU614Te6iFpk655PR8NK1w9WhW9",
  "key13": "5mLCkDnsuhhHKAf4cohfAZ34i5niPzzMxzxt5VvaSZC4TMF7u55g5e2jDjp2bZjYNHcbNT5djm8oCAhvGRwCmNtB",
  "key14": "47sT5rDH9Ki44DG5ioVmiZtnZNaxzpwSreApCF4pFfwUFNP2GFK2AknkvBpRgMXiEe3ueLrVYNGwhKGTd52ZQmwg",
  "key15": "2KSaVUdbbVtEyjhP1LpbNZ1DRV7dcUyv29tTd2VnVGWMVeCLEz5kaR4MEoUuBSTyC1R7sjeqBmbVy6YgRUUZbfGW",
  "key16": "5aNNBV2fdUfAJ5bdd5voHh35QFDxFArsjyqwnLD2L1CpYf27j29e2PyPNQ9pkGg99kH9vTHz4qQkxN24dmn5ZviH",
  "key17": "3XzjKMxyi68zGQSJLt6t3RQL3wgbSJvEetPSUEW8dghAHpDzcLBEF5Qv2uPDXykT2Vvv8pUGJg414noLRSBKJowt",
  "key18": "3vU1Npza4YEUQPJyEJ17CFd6YiyUETxfA2Ynvsvazt3d9kjyU2bJcfW7GMCjP4Wia4GtyVDftjPe8AEyJ7Vx5hLW",
  "key19": "61qUxdQQjcGtPMEyFkWdoQBbSsRcw95tsEEKoWEPnRZDFduYjQ314zomCGcov2GQcoqznDftEEEb7XVavchJ8YDB",
  "key20": "4g4tgT4FJ8CjQf2rtm33RqUyaceQ4Zregvr44kr4jqm4ZCyJPxVytC9Lde7Wxn4Kj7LkzLAFwd7zfjU7h1wewe1u",
  "key21": "2nnjRxQDqYiJCu3bkhRHDTTZqBEZPMeiyvsszfM57Ak9TbCE6mSzAKxDCxcGX6txFSkzJPk2E16swqVQ8w6dPzSb",
  "key22": "3sx8EwD8GbsFx9mdmZ1UjQ8jBCG2XyzrfumF2jVCJ7k3AetWX5CqrqKEH2EBtVtzMajsD696GNPNUvt9dsUNAsPH",
  "key23": "5xy5ZLcUewBc4uHjq1satnPjj3ni6YMrZMmsWRUpiP3jbirFriTbGQaygHtwN3osVSuYi6CdrBN5tjCb43Cuh7FB",
  "key24": "3yajdxkCHfaEdhYXg94rvxdQ2iWc6iGejdpbLk7Ndx8zTWcsz2eR4DRw7ZphrFgiZLX1csBzW8NDeDtf799MKUAu",
  "key25": "5fUtdvanqotpj8sTs2Pwod6brUKXjdNPEys1bEtggBY8DuccLRBTLoyNdubZ3LdsRiMDz77ueBv9oHyepBM1UpSR",
  "key26": "2ryvV4vKSsFJqPpgPK7ekZbizDzYYyKnw2ence3YkDAeMYYtLFQZyEL4WrvQyEDxvCE5rj2CbwjE6RQGjUVCiJch",
  "key27": "5qyUoqdZcZVz1untd5ZYPAq6ZgSmjRXHm8EtCuH7adAwjQXfJfJwxvab2XqkkxVvaDbVU1fN1GUZMMZUduhntAwW",
  "key28": "5dqe4DWuQfGTGJnhAAivFpHvvrvvwTPmGYggtUJdYhtRnBDhUBAWvPvmEG3bpbxQJaYCUsxTYPdkd8J6SjXm25rH",
  "key29": "4XjBHEAuyBcAe8r2hAHA1UmDNtaE1TNzPbQGj77QmkekeThYfL5mYHfh1t1DJTqEkzD6e8PY4XU56PDRbA7kyKnR",
  "key30": "Yh43YXyfvsucCrXqURwr3AkyTnhcdtH74Xmxc8fmenuYGP8bVXtVJCtk6m6NHmYPmEkaYwA1LipE9kmo4QfJkvm",
  "key31": "3hiPjnwQmeEZZ7JKBygP4KDLtGUnkaazrvXePkkQz9PWvNhvuHBZ565g3dp4vxtXtDAECjZ3gmFQY58LgNeqMjhN",
  "key32": "5b5F5T1S4yUhXAiQzpNaNs8sbMyDrBiHPDG3e9Zd8JGTpaowkETE9gZxsPV6VpFHRgbWCnZEfuREsgzGLJDvsW3",
  "key33": "3y6jELiYrDDYCFWWwjKxFhionzcPvj6AxnTHrw2baQjqKJA2CcCcfhWD7m6ZBCgq8DCVdpoEiAKSDPv2doDX1xHH",
  "key34": "2L2k9DSNXyzzzJt2XC6kd3B6sNMqCteWRamF94yZDVokq3jvttGC5KxhYbmszx9AboohpUfoRgqUrp4a6wiGAS5Z",
  "key35": "3D3SHcmGbaJ9SQrDUVDPtuMpbVZwvRGsgZWmX1PMuvC3T1AXgUfeJRbEsQM6TTwh3ePurxzHteewXDXV5M3XBPmw"
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
