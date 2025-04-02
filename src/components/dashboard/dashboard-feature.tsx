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
    "5rABXccjDhwb8KVo6bPNeMXQVrSKb3MKoZLBuWVisvpi1kFXAJCoXrpgLU8aCw2n6YhU81Nz9DiRrxDeBVaru9fJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CHG1d1Lcnbse65gKrLgAm4FpNY6o5e86GjT86eDSjuqXpmMGunbSPCZuw8HHardWHSvZsq811QxWgUc6mGeBPww",
  "key1": "ozYNgKj4Y2vr8Rpf2LynpefCPRhfMv1SQ12JuGVyLLieTED6Lf8ujx9F7EuyPbAv1bwGNJ1FjXxchiCkw7rpzTj",
  "key2": "2zPSJMmZuySQmvTWHbKYosjq83FD7n7i3TJppmU8QC49RjjBo7MHckGHYn5Ck5gSpPSCNMmEaMzLiQoTukzD4f3t",
  "key3": "NznNXCH6vxKcysaWdisfSBgr3KxiHC45JoSdZCJUpS6PL5fEzYU3K8wsHniYxnLSowFTVpmGY76vMPXHabgUgbz",
  "key4": "yUNH6pueAAWkG8Vf3or6wJXnsaH3tB2Koin5d9UG7NQpiMhCjgTQwkakbcH7Ndjs5L4BqWAoJiX9u5Chfabp9Yu",
  "key5": "4MwGaLLJTMxzPZAChvMNbfA6fv6Lo2qjRzvgoggUoQn9hcsMrKaEVNQLiAnYJBcmwRM66h6uMWM8Azycf3U5XFUP",
  "key6": "4UDnvgX3xGApMTKopiweQUK8Mqzxm3nXEhw32m4y4voLhj3BAHdRepBsQcoiB9FY9BcNPDXWoLQX1zxd51HAZTFY",
  "key7": "qVWRAugTjzzwNoAvpCCT7iSN4sp6HSbvV51pXnQo3gK2MVPgqXNCU9vzKk7M8cv3KqedGqsgTcLN3xjXJsLnDzp",
  "key8": "auZGSMkrkjm4HRG4pVdiYz7yu1vPCDK4pL3FFUcJVqKp3apPm4KyFkwQz2k9rnHg6V7GsJH5VdQDJLETEdC3B8z",
  "key9": "3yx9CuRotu7XpYWV2hMh4CSmUr8EpqCmK5yvvhwZJdL1Nk2q77zcGU7AUeLit6uUM7YdDFhBnReUwwZ7FV4ovXp3",
  "key10": "3gkg4YTbwoSXa36XvY3MJEDnbHnN3aSCJnQ5RjKKb5NA6cGYy9CBG4KyTdUrojsW4wNXeLPKiU69A8t6oLZtEnzf",
  "key11": "4yySfkbVMn27A5BKaLmDJNSzTJ26WG7RBMatmq2Usjswu69ysPs6fYkoVehSuuSRmHXEH8sJDtsx1xyhEJzHFfdH",
  "key12": "2u6USnQBFx4NPp72H1G9iDhGVcSx1H88XsEF4eFeT3cD6AjRs5Q3vheZ7o4k9vgzexRicCjaaMWZdGhH6ttnv6DY",
  "key13": "4dNKvX2Kkhpd1fuWF9hTzPT7KRsevhZEXbMN3j9LjHLtSgKCdAXjAHxMdcq44hUQDwU994bMrmxhAjdVngVYDkBW",
  "key14": "2qG1i1Uv7G5cs9u73GwAFDcSj8aPGkSs1Lg7Q7T95NCC695MKWgS12iiyFdrrDxuWJX8qvtL2xzXf94tcRfeViJR",
  "key15": "UD3VNAAtYakEEfiLSk1zEuAPiNXm15kqhd1Cfr6y4cm534wnzHtCVkNf3RfUSmJiKbHccfHqaLmgYo3YcoogaRZ",
  "key16": "3i2vFUZAm2WvSYswEjaqd3p3h4CS9S17LGg2nBPKA6JodeqF143gzGrYzGTLJMPdYVV6zEMKsN5HKP32YbdHs1qG",
  "key17": "49fZh37ATkmg4iBwSBuGfT3LDBn2xQudF28pyRB7HS6w8dFiEYcokkufyjagcvDCVviPBuQ1HSQThajWRQeiGxPc",
  "key18": "5xQG9bbw4FaRtgdxuFEmB74FUMsgxaPoWqW6mJq8hocy1pw7Y5vc2zeF7P9uxY4vVMFhCtAomjvDPcR22o5bYVS9",
  "key19": "YKivPe2Y8MWNVHYpkwvRbgafyw8PEq3o95HcH1EJbau6AiarbjsUsjtzFbQuJUbViaycTffJMJeUn7pg7gav5ii",
  "key20": "4WaBfyttWzCYCY8JvkSJKLvNeFRNWbgkM1KAXXbvoV9PYMikmLQi92HhV8BQhTjtzjQtfhfbbicSqF7XMz2MUjdj",
  "key21": "2J2zi5B8KCduMXx6xbTEqBdzsXvPxnUhYrJxSiq2bpagjpVJUjWdsf4uLardKUpaLw9Y6oHjdfvzZDoEqJNiZgUu",
  "key22": "4kwfvszu998UUmT1McERS2gfLjWLyjmUm6hro7rGje8kJDveCPH49gqVKa7HGQK5Ao57h1fJKBvkdELbG9fYXpR8",
  "key23": "nu4nuNVHdFEJQ9z9gyK4dJUM2aU5uUWoxkAbdaeaUB9RBqvxdemnNzpcPPEXjNwGQdmV9b1EfDYcHY4yjajXeVN",
  "key24": "3DiZqGsXYbSYGU1PX75NwkcgtEutPEJFH7WrBYnCjU22yAATEcKsoAA6sQCXdostFpjt22i3zJ5w7k4SCQ8hsgNg",
  "key25": "3jqSzksUa7i4KTSHZE17bAP2SfTWETtLLU2J8V9EkKmSJqg7Ko5wrZP66S4vMyZvA5PNtLDya9v8Z68zfzvxANNy",
  "key26": "42fAvBcX4PAzoU4dKkHB1Mkc8huiZ4D6qee9c4xxVhDwEVXPJS1TycnaX3dhsabKNy7VH1Ws94LXBcqU4C1RCHAm",
  "key27": "2FimB1jVgUKYULRdwdRFLf6cJ825S6JnGEVsgFhvxtEAKEYe2hVphkZvWDGGy3qsfiKfndymFjZtJzCSee72NPor",
  "key28": "n4B6JQNzry4vha2nXfrwSUGtEy5Wv3pDSpraYXZ6WZSa13qNteRpbNrKJ2xjWTEUTAVk8gcA2FK5VjJ9t9ow1mC",
  "key29": "51vws78MB1dDcyELaXvo8KtcLZu9Wxc6Fe8nPpb1THSxuAw8c1JhLxYGcNQCJahr5GajNK2Zku3xgCcoRMs4vmPy",
  "key30": "xEdoBae7Eo5T45CyNL8jBN8N8agWvT6qGN4EVTuwHfPHcFhtuz8pdZRtiqXjEDpV6XCGJDqpdGDg2kezZhWLqHg",
  "key31": "2SKKg4ickeTmdQLcHcuJgS6FNkZFnh6jeAzFMpZLyuz1Ab7bzUdv1E7tYR66zR1SBCaKxQfSBQQWfzmnEJNEWUqf",
  "key32": "ExXfX4JXk2E9HWGJCJJdb4saPVXF2gaqu3h1My7WZpu1s1oRN75RmTa6bazXuLN6Z75zTzDueth16yv9CEQjS8w",
  "key33": "4RAqUL5ynJetk5VygnpP4ViZXCdtBLvo6Z7tMFwDF7kiWLtESU6nSmSBfGjpW8GCYS5cHizn8qJkZtMTVR43E8yb",
  "key34": "4VwxtQ5dadmqTxSh1wuaPdePQU7yizSTUacNrkWqRbwcRKdMDWEex1MEinsJfjxMKz292GjneYHdBTNS9eag93RV",
  "key35": "5Lq1vtGS9P4QyKXgsGbxNtzohQKCJhz1is4B6MDjBcLsfdtZMLpQE4hnQs5wPAmbbdiBXwyUygtNuUWsFSsWJzEC",
  "key36": "2W81JkbCUz7ENyy3rHvgodfZx3M5wfZEwSpUaP4zsPYaUpbN9VGnWFQL9yhXfvDNbsnUzeQfCH16m3288rAJAmBY",
  "key37": "5ovjXbNh93JWTSy2xed5aNzKz3hUW6vQ3th3BJ5dYk3kvon9Utj5Av6yoKV2bHa3hsRvD8q6s3rGytWXMX7WdMqg",
  "key38": "5TjTgRzcJo77KmUrkzD3rFAKpKq4sWAVXj73iVa3xcj5mgHtf48xZ2hWUHfeX5GnoRgGxc9JFPPfTwpfGu1wEv8Z",
  "key39": "nXP4b7Ng19BaWhaSu1GLnCFu4smi4NfAuyTbRAYVx18EXb6UZJdh6geXuvkQu99bnKxqF6wvjAFQa7uXp43edg4",
  "key40": "kYXzEDZPJq6PiseZVHcHkZsuQJ6L8kVGiHhb8VoGSNcYm6EtpmNRWtMXxSN15L17fLd6E4VhKfQX5HdGDzXiy2Z",
  "key41": "4ZEyBeNCNLEeE8Cw18uay8gSuWEbKFnh7ERHg82hpG6S7Eq8CBHeiV2wHWatQt2kNqbtjXHHbSDMmsaaM9HywcYB",
  "key42": "iWaxud4yWRV3sgTzYcz4g2jnycCUUCGE3b2LJExtnKrAiyNb7ejXAcjPiq83QipvnqVzKAwssyTaH4GX22M3HBW",
  "key43": "3UFLrStEBnCVZ1doTnRSnFnSsET97rD5hYhYaZA9Rfu9wLie1ZwZ1MT9RriNiPGUuEUNrtmWcbfGv5BB3Hb1iY87",
  "key44": "3tkpCdHDx7pASbNEs7u9CCPZdoWvt5ZiUrwwMcAQAoz1F87CxRu3ENmbWZRpvpHewXoYHW8PCd8Qi5q2Ntb5NAXW"
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
