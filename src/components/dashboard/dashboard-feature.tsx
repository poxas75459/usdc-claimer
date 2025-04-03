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
    "5vf2PM1gdLMdnwoQ8am2DhRgdUAtDA8Z5pjxzyfGLZKb41zWuwA2Pqs7tP92EU8zTNFQe3EhvCfizecUN8hjGPp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eQEVqgr8q3UUkJ2cMMaxd11QGYCcsMeS2mGte3e2EoBv2EgBJgReLnrCK1YiJwkk94e7ksA5rC59KimpaYAYeC2",
  "key1": "21FEXd9WTtRC4CvSnBrqC8nyGvD58zumhCpfcZcN8A6zAC9eEFufVZXmBzTZf4wT1rB7Jes5C7JGvKtn3B6uZt3E",
  "key2": "s253DzJQ2NuWkiLSTwS4WgG5C3MG9Hp3RDVCSt5Tzf1Tv8KKAPoanesvHSTjwFXRoENAARCMJikqWR75JsMSZuv",
  "key3": "5gReuKHD81DA25WG5NjZgogUAsF7PkXt48h8pCmAFuYfJdJ1AMQRmL9zwr8uPYqCJXqJ79X85PdanYiPmbDP76E1",
  "key4": "5BuLnE5Re7tcYKnZwc8aWUagYwdCLA4VTqkN53PvDKE1tYcS9HmWusqYmciMqyUhAXuP2PdmTrTTu1XuEwaZKrRE",
  "key5": "3c7GYTq8KQE8ANZ5ofactdb97k7XGFropbzCKLptCu78bu54TtNLQdVngsHf2kagprNdNgsmBfMwHpMWgCE4tUyk",
  "key6": "3YAv6hDWDf6UqNi9bKPdKfhk38HxCF72vU6a8TeFnaZxPQ3vqV1hLc2ht41ZdfCRoRKxYr9q1e8Umvu82Sm32uCk",
  "key7": "33uuHaXfpC5LwCL9mwrYwBdMa5phuSxFa1gLAJXLYi8UYAbCGEfqygqYesCerJXotPShKw2N1j6EuwFm8BVSnNq6",
  "key8": "4WzZ7Es6KZ5miJz7UfDQAaLFANYPHgTk758C8LyHNM1ZWAzWJGiV7KddBaufbh3n3MYcDdL4twwoVoLWDrhburDZ",
  "key9": "nAQhwAB5aXLpaz5heLifTk55QtLSrnDgxAK9vysLDqxSv9mMB3QpP8e8k8k9jvBfFZtphNKCLxeH9ChPbjoqCNe",
  "key10": "3RtkCAcdqcw9NVuVtfNZRPnZ63qA2S7ZamPGX73VoQq3X6WkNdpWeR4nKrnALXBghkpot5HExS7yBjV699jNvAw4",
  "key11": "3UCVFhaDKLuVLagooJxFmwC5nyTar2bBWcFPzUZkerV7Mf7KcQxaNgRuRfJLh2B9aiPHt3niqVarfWnqUoQwUE63",
  "key12": "4tvUeK2KCexNyFstRGAPxdqA2XGYT94NSiGuQWL8wpmsfm5UTbT5KeEBXFxFbmdfVvx7taFayBhEjhKiey854oMz",
  "key13": "3f5tchVL76UMyJw5bDQZfTDzGeLibtzED7xhDmpWj3AK3xbg57KZo8mVG6KDfzkv5bpdTbTonwWE27W4Ni21LYp2",
  "key14": "2yFNY8ifVXytn2yPTaNPcZR6BcHuVnEf6JvLg2zxWUycyRtWAPkfBgz2Wpy5aZkK2G4gzegoF5pzXKg6tvYbGP58",
  "key15": "67aSQA11VpG7GWRepDwoDbH3pFEasfWafKK3bvevPM3Zxie2fpxstpwGpWdQxSq8wci2VMdZZt9GND8eaojdhTcs",
  "key16": "tDAmFx6E46KCQnPbGDEBQRdFoXuXFxToTNczNPs2TY9qXbnUFMTqkacTitgJa4RSYsSvMhXTiChPpQdcUxYnDi7",
  "key17": "61GB4bdvsMuWTzRzeFc4QD4vUCFPhPe9AAcmdbmrRPLCPYvTsQaxjm8LHixPobRb8Lb5eAPbMEMRCV2XnDG42duW",
  "key18": "4KitQqNXe5Bnnu6P9C5cgu48ghyQa8brstemwgqoU7twDPvGE7NYvqARCvzoiJP1SareXUaLPBmoqzAysUhsV3jr",
  "key19": "3MLYS54LqgdZ5p38dUET4NH4mrhRFsAb9KvZDvRt31t78BQGZEfYcEoBAuNTD3qCdbHdv7iMFGiEtXfKftAvr9vN",
  "key20": "4ZNKPiNsiUMnM2dXELbsiYfzDqEdkZFHRiDdXoRHTvsDRqph1oua7jDfAcioY13bMW7hhCFLMGS577kkPtdghy1n",
  "key21": "4Kp1tT7Tr7BctZKsC9Z2etgQLSgcwS3um8ja6b3LStJAbxpF1fr7iPuGiDgZXyv2U9GWRwQeFEtvGt6QAFzCCGFW",
  "key22": "3kTq4rNahz7DQWiZkHH4nZQypCK3KJ73zifJaZgGbBe5Tf4kbMgU1E9vwX1Sv1ZE895kJDkhsNVzK5NC47rU4V2v",
  "key23": "4HWobNuASaR7UfxZHgFpT6ayciRNUhd1NoLAeCkK7D7GQqiurWmhCKtQe4QiBuLc15z8nvsoX96BP2NvLKBQ8xug",
  "key24": "5ShqmeyY9dDcffUpMVS5mqNbNhh2DkqYJegR9vAHPTWHVe6on5YZ53J3ZWCXJ1pdozEUfPNxmFsSK8vAyivd6Sh6",
  "key25": "3SZV8PmutqssNVYm1ULigsgwYXCXyQZHxSe7gd8eMZzQ7iEYAaHTEnMcCKWSswzuJpgRnNkiBxSKuQqZsWYy4uFC",
  "key26": "45HT7VRyRufkSoKUomf33VU1Kyndj66N3ikgN4zhVYog5ZawB8EXt3RDnUmmicn6To4E6pHRmSEMJGxiotyGKwRa",
  "key27": "9HyUHzKpzF9ycfsCLFHLgPvHQry6s9Qk56o4QijbfcaB41ndabZWWx8ntPomJgoUr5mEc7YygTBQ9JgAURFnZGD",
  "key28": "T11DEvj9gB3Z3HFodcEtycXgKL6e5DYUJXUYaRHCs69XrWgWVpgQkmLzrtmGXmKd2yRzH5bvkSCRC7Nt365LPDP",
  "key29": "4ExmCo81X8aDJLBNytQEC9RMG9jYPoYTaGoebUtS8EVGGXgZxVirEjqGhTaqjuGZEkcNysUAeCx7yaAPQoLoDF7U",
  "key30": "HyxVTBhZritUNawVrH3JcSvWmESGKXqWGoDifgGg17k7d3N9zEwwZaStRq9U94iZgckeyPqNqnTUbbshjjVK5j6"
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
