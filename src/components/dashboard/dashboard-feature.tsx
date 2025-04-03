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
    "gkzyd8Dei49L24NfUxsZxEj4Kv3NvkFVobNTWj65THTqWFhiZV8FuFyBaCfuksYxjqSoX37Dr86Y52ypCdZmwma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Khv6KuYkJUMfSZUtkFmTNnzjqbZimyNLrHZoop6kJ1EQ1yvwFMCTYWrWit26uB38DBz8bLmEek9HmqmhriBihZj",
  "key1": "3Ajyb3BXRbye5GNJW3dhXUyq4mTp36QwdpbfH7gjjuX7os41zBTWF1hzaRpPQpVetYuLsm8345itNYKGnBRyHTvE",
  "key2": "37g9eD3WTS1CX5ZkR1WB4n127H7wn5JNAWZUw7gGEEBio9PCZyubNTBJHW5dJJ1E65wz8PDZ4QzByv9gAutNCGgc",
  "key3": "4aemiKBDtG7JYs8Q9o19cgWU3vjA5J1sYKTpKJ3uwfoNJewut5EvRotpAkZq3jjuyG4vMcT3y4H7HQ7huDV8hnWb",
  "key4": "5yprJ2AwMCdAvMh8h1q4kXiYYCtNpUrMzLUU6zto11k17QYkfVuLDxoB5h8Ee3bwK3WnsZfsxJzxBeTvFo1p1pwm",
  "key5": "51f4Nsgbu2rhAW4JGs9RqWgr5wNCt5ixbVzGdkixpUtvM1ap2hjhCU651hjMoX7XZB9UrLDQxay7sVRfPjCp9JLT",
  "key6": "65dDairjHrEW7gjsz3ZpWGNKxTo7BBEbEBLCfZBeQc8JCn3HyGhgX7V4auSJAZ922dT7bbPtHJhuBgnLh5zk31MS",
  "key7": "2oW81MjnEFc8TKirAhP6ghpnBoFKKGkZdEb3FJdVPrM31aHnhe5KQdSdPJhGsPga1wetuqvaR8XG9PhrQ3qBuAKo",
  "key8": "2NJhCKATUdJNA2g8AugtPiEmdzkEonBPoJCEyoSEhQD3EE82wcsR8Fxz4n3kytp9LcPFEd5LDjWrTTiMzLP7FVpr",
  "key9": "2iFQtrfbMAdXqskyotA3UkNB1AMTfAo8Y7nTZG7fKCZsPQxYcT2oMmBNMgzREM9Dyh5pYWoHcW5nRyXMmx7ieLaE",
  "key10": "4bCZiBo92kXrZrovSdc55vqeFpdturJhEgBHqzRX9cM7996tHskfptFsSRFsNfhbU5JjgC67Dq8PahYmjitDERpj",
  "key11": "N5qY752kVSrXqkd4ZQHJzLwxw6ffWDRHLz8eGaTQ5fgRXgndH9qSx62rjzGNG8TF1yzAWJU2H6tdbgB97Z3aAk8",
  "key12": "yX9oYgwVjWX5ZqZyVG4s2Up38eLRKq57dYqbi8rtzew4csw9fFXXsR8YuwDNWKtGj9g692p4ikedT5DmXbgRvYM",
  "key13": "3GKByoHbSCznKMxeqJfov2KrN8TiwU4pNwP6aVSf28s72DQt4Nq9yEpzsnrdQF31o4DUq4psBgSCgC37Q1B4XRNg",
  "key14": "3rLFpRL18SxrMRHTsqUaDuAuciATEF8VSwxrUpgQA1yDRNDFCvywgaif8WTAJx5YpEUDmojSaBb6zfDModyhhpkH",
  "key15": "5S1QRhq5C1E6DLGaGJdA6wXRDu2pm5cvFE27jn4hAGVcKN75azayYXS3pK8tg33xMmGPLYYvBT7LgALtx4cKqSmt",
  "key16": "3xsgB88bwiPtDTnFVEJJ5fEjB2TYWXwxMGXzR1f5yvzzGnhUEczoHttC2umADcuSSb1kP4U7thzWtPcjWuRjCBaY",
  "key17": "5AtG4yRTns94cHcSLdQD3NNF2boTAyWAhVTVBSqqpVrg3cHiCnRamnW5FrWW4T5pQUcB5fk73GtEeo6onJzNsMW8",
  "key18": "zGv8iNGYwdKH3b5eis5i8uH1E2ZSQnH6wzwrUcYieJ4FUV6ehqej48uhGGM3U9qLKwvBVMa9P6myQFurdsdLkE2",
  "key19": "56baW4K1rAYKoHwExJv9dbNGZtRFov2q1zmAfcoXmxJNzWiVkZhDDGnZ8CVYBWWRg5oc9sz1iZrc5bvJT179hCic",
  "key20": "4Po3xr7rFr84ZBoVLF1s6kXuqd51TL9zW4bv3L2bcWpGqhJvy38vjr5fTidk3KK3adNHxhA6TVw38jHkrRceJgJF",
  "key21": "3B4gm2Lo9mRXYCq2nj9kjZThMTacAtcBv9HBRCHJWrqptk4YFV3MBCQLqA7einjf5L7zEtN78wtp8qSNFRU357SH",
  "key22": "2ZZpbrcnoGdupNGLZcWkj11pTm1PgkVaQzA9evigDrQvhrLccy3xpYNDLdpjYXRsbafyez9ciUsRELUyv9ank7ip",
  "key23": "2uKFqmAkoW513rNa4CMhpZkogNfTwE9U8mzcrJhAf57ieAZuuBiB6xpgHYS9tCKY5WfhwuAxjUqDjojYwShUcYjV",
  "key24": "54P4ag6H7i5mbJoqGptoeyfsRdfSZRorKEXzoCYmthwYVEMGvcchuALbPyuzVgib7VVj7xzNibZ9Q8hAEMwYYwet",
  "key25": "zUEfneopLFvsuCnPngkYbK7fnhKp2v5pDojCf5Jto7g7ymQk1eia9uBEScPxZR7YUYbNsHioSrZDwHfE3dn4ERr",
  "key26": "4BafWNuEe85vN8JMsjxVCtyApz4YFbfJDnsizsPfygNPu4SyuK8j2k9EpT5aBePPbrmaajQGeALDkkKcajVj1Ww9",
  "key27": "2jdCTEJd6uiRMkxAeaFv8GyHQDdikc9ydyeqKbrHc3xoguZGhM4kAuMud5tFgiWsLu2mkauo8zKYAUMxCn9YHZWi",
  "key28": "4pLy271ZzkvUdjpUfzy2Mwf8hv6eDCYeFFBWa3MgnLBfwdXiSjPw5M7dpS9Z8YWJyKv8PEoAayy7pqNAeYWmw4bb",
  "key29": "EthKXM3wsHRPp2x15si778xvqksBn5RfK24ADRVf39kCAa5Y121hsAPSwCX99AKApUTFB3DxBc7TwFwZarrtRm4",
  "key30": "uAnapA92Vve5nc4ZYdB69RjpGyCTkcoJHGqfrvDXAgwQ3hvsKWJtkAPGsvcTurBVp5LhYEHrVUKpK2BdebVvbBS",
  "key31": "4dHKoLrmH2kBXNi4cJHZaVDFGxSZjRBT1WYw22GEcTczB6qCpGa5gubU7oqEYEpu9TFbDVwtN2wrQXnEdBj4c7UK",
  "key32": "29J8YKYiCWes16gDYFkr3TkFzeg54spjeWe9gtwvghw8SoLdY82hFqWntQ8W8dnmjziUeCTgyySxPLpjJwNwZWii",
  "key33": "2BxCDbDpSLJaHvXm2VN8JR7S5ZQk5FYjwtkCuVFqktHJpydqbdk2HBTjZX1ZvXTAXZY6adFD4MA5P6i2XfVuEiiJ",
  "key34": "5XkZLPwjsxdbBUX1AVzCnNVBUhvrJz2WqifNZ97QAN4tkvdEKPRFQFcqCVF6mbt69VysQK9udg98UTfz1TT1swWR",
  "key35": "5Lb9mfS94sKa1HEW5KF82XqgoXRxUTTZHQ7NU3QpK3Vn1KHuzXitD5tp6eMsiA9HfEtBWybU3QAZWGQkMbF3iRPT",
  "key36": "2bbEpe8ka98B9Yxo6G4NtVZwwThCS17XrvxkN1a9jophcynx3VDTnAToJAbMMGbX66mV76Gv5Hmhg4ThyS6FR9qm",
  "key37": "61Gpis4CfWgSrrcQBuZeRJPoJLgJWzfkzm6wWMsMofRhrRtSX81URfck8GNk27jvpfqYoi22T9Hwxzt4m5n4xRxS",
  "key38": "2yspqmSDFeAjBXeGFSKS7vrAhuAyb5b3fbQURCnaFYac8HCpjuK7kUDhg7FbvNqGSZZYnawfDF6vMVAU9ZbjAPhF",
  "key39": "sNHY5fEWTWH8Hhwx2wFYKjpz2sxDP7QmEJBJZmfmM3dmahow9cS5qyRruCHZ8sKf3QftFVhvgVpeznX4sW7yqg8",
  "key40": "4rwsKxT8NswyUiVQBPUbMvKb7saJEcLBBhEQi55YyPYi3oi3pA1RGVRPm2htFzK49Syym2cBLUUgrTTSLUVHJRSU",
  "key41": "55egAvkYgTFmrBpkpAKA5scjcTEqtAQBpMZVmSmbXwHzswJ7K59w5N78GoNvDbqQcLgvTSMSX4wk3xzAPmGErz6q",
  "key42": "2TmAeuYEtSjByc6SA9qi5GrsJinFMCw6atZsoJeRhnYMcMzhtoQcP3ayDD2sC4YTonqSgLszoo5CLxBX5FKfMQNH",
  "key43": "29gGZo8u3BqKRYGVDMpkzYYr1cNybZ6YaWPLuH9h9k3mAHNmwcXVZR6CVGzNXgAfXLVC7gVTQUjaurRVxuMJtzBb",
  "key44": "4hxuLmt1rjfNBVbxWzkFHVy29HtECcwoCw7F6Ga4ocKGZiL2BtuxJa3MpJx2m4HMmHH7SzDq8S11fnoWVWuyenQX",
  "key45": "3X5EdkvQpx1XkgMotnTdYEG2dbPomgmtW6bkTbG9U1Cj85qXqYg6JWHnyNqqkJYkUZbut3rpJyrfRmfgc8ZYCcxE"
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
