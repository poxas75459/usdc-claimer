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
    "cogYfXSUqLye7dMix75KZu2z3FqMjE9yAuhYVqeNbghvpcW2QbgjZLFg2VTf4iPEAhEMzZR5VMnX4SiZqnK23Vg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59gxYy7opxseamkv8SssKPipGQBdBT9HUQKcp2jsMFBaiCeofAozMsw4CHranEpzQ4UPT7wp9PJQHsMDrKwZQiV1",
  "key1": "2pDd8ZCTTzsr7Jt8ukWmdqjC2UzM1PazB27UHC36kCHhHzH55CaaPPjvjRgkPe5VwQgWKoNAUqBVYFfT4nCKQU6n",
  "key2": "2JkL2n79hJBExdFRhw3xtCCJwDWtX7tyBJikBJKNrSveiZMu9Zkn75wihjVfsHMiDtXz4mAkKQxDjHvrdMpBqXQ5",
  "key3": "5MD8CpUbKp9yjqW6cNG5oWHhuHSp49K3rSmv7ASBeGvmLebud8TKiqiZAdkFyy9XRJdFNuQ3L2Zj99zk6Wm2n5cz",
  "key4": "3rG3d3RcsQRLVBnApT4pUFLFPkuNf9RvAxj1B3oDZjbL1dMj3gv6GfR8ecsheqsGSJHCUfTfTC3cm5feY6U6vo4z",
  "key5": "35DZ8i9R7wdoWgcUwTBXeibJ5GFDi6F7vZ2PnXigWJUgVAeUMtuJP5qThzz6aBwdJd9ast4zSgtXUvmq3y9svVhK",
  "key6": "wHdvJRfs1sSPATPtmCkMjjSd7iF2779Wk6AaSFP4Nfu5Kah2vdCuVgzHwkQjxXfTzXLbQi2DZCDdea5vHwAdNhs",
  "key7": "4ZDYbigpjHbYFTMHQQvYykH4ncc9MWUCU23wcZeqQsUNWWEYS1QzPvDfipeDi8eBU2ohWsV31YqGMedjqDNTM6nw",
  "key8": "VEvw2svkh9KNQeLXjnbpq1RHm1YjLYmNcAqH9rKbcwAs71jfT3FAyaKyHLQntvQCCuWnFGJi1Qh8SoHqsNsbCgh",
  "key9": "TxR3ZZkFTDJ3179TyAUQZH1g7ErLebQyvpfrr9TUh9Dg2YbW5XpNhwXwBCWQMMEnWFbmWweiYWghyDtMqhUUT5j",
  "key10": "iNYv6hMrJAhgqXtevkQaVMJ18KUotsyv88DXepZdYkY7DzLCfkmXPjdpstb2bWU95prmfH6TVJvZQKyHyYPA3mf",
  "key11": "3GBiTvwoswDtPutQhU529RSn6r1sbk6BJQXw9FCKNysfdus7H1nBfzTYF8QVkJZZ3oQYnqBfL3xqSKsGZxLsKxfi",
  "key12": "5uNdqNufjVRZzqwNKjc1fhScrcxgtZnkVD5S61TTbQAzEeZxCLk75JVEyHYXstsu2V3zZchwWsXYpcJeCGSxGz8X",
  "key13": "2v3Vh4nmREAXJBzArWBgeDNJDQDykv67oxtcqpqhCCSwnYytNxPK88Ahm7YKNe5RdRgvShFjGnj7GexrAjnRwVpA",
  "key14": "5ie9LyYe3NXPFakxR7iWV2fNHboZHi7e1ovjpJxgmW2HWkuRLyGzCX5qoa6CJjooCZPfunphQJQv9EYZ8Cnr2J5T",
  "key15": "49D3sNnmstPJULREUWEZRJC87cAS1YTtWGsq7mXyhb3MqV8Te2w5kokyUskWAYRrx1jgs8fSWaLW3SSdSo88bdMD",
  "key16": "5gbfwP2Q1Vwt3c6TuuzoGBj6k5Fmjn6D1yjvTJ2KFUPRTejQj3RVUu3BpvrqtSisBsDh8bzwDQkwA8E3Y4iyxEBH",
  "key17": "3HENBNchYJsbsJFGcBvnWEuwd57ZTPAm37X9i8NzmWWvmBr7PbpqQwsS3Rs8oWghgbXw57qSYz65BM7a2Y7JxvzN",
  "key18": "66Cf6PpRYDAK6P9zQMF5b2NLYZPLb3tBcLbYRUyoBsT7uAb4xG5HxmovXKg5Wpagrtjqr8PiHuRAZTxzbHoYqhtL",
  "key19": "39xrt2JN6oobqQTHdxeWNnPXC34WM1B3PvwyNiujdcH1YFyBzeeX7MYKkgR2W4P4f7fH49qXuQUruahvvmHiLxAx",
  "key20": "4XieuCfvUu5Bxji1rHoBsEvNZVSYRin51pnahKGnd7yBi4vxQDkUVBjF75j3oewsxGJTcBg2SWqjoPJyv94Yzfwo",
  "key21": "4EDz4LP9CJcZDYBRtXbuRXFfCz4EMpWLH5EvZgXUkmY6U3SkrTeJrZZshfGNyb5RpeKiB2YrjrnPSvcpBSg9hApi",
  "key22": "61EAe6Xoqiy43kycqJ1jqmSLeLn2SrQbG5d8M1DjF83c48r3qcAY9BEzpK6ffCPGGUXuu6cyWuQySswQNmEoGia",
  "key23": "38bKTMttxtxtXxrKqr65CvjaXXGFEAF3wf8cR3rMp7VufMoNRUmJQLFYAs4MTP3YjqLWe2TqBfRR2MBCpR9ruUPi",
  "key24": "2XCeAUNjNidUPGFDVQ7jCoM2LZzuxBdtbVkwQR5vTteTcUf4wrNq8rgxbztxU7zAUJfDxwgR5MxVKzSVyuCN8rcP",
  "key25": "2f9zXPuMGdcka8hvjraXpHknDJQAS7uoWgnM4pKJuDmpugcGrVMZYTPRaKHZpMUVuAMPPQHAZ4KpE1mEWFvtJnDX",
  "key26": "5Fs7pEmHmNZdKnhibZLxmndYno73gDJAMLQXUjnzU2V7s2HKuVmQjWJnX1wJGQ3sKmFXL1XQ1UKP3izys3Hk4xLN",
  "key27": "mJG8xXvn9ie4yduqqKbPuQFsyzKf2mQ7rPj9r3WrmE2cu2AK1oSHXFtCdZiJJeWYVSCM7oTU5UxdfDfPmPvLQUT",
  "key28": "3HtpnWUJtiQojmXCFJ5XFJA5HbJ2tCnAq6T9hJQLS247JN4nQKigAg8GQnXW2DJiDkKTmNEoT13GAEBTXkPFj92Z",
  "key29": "6HY3HbXCrpB99GMwzcckEyeY6CEZmUgpx8LswHMvSSGL3Up5kTUeM65PyLY1sXJmyYUTH643nTLUjUNMPTGgMRY",
  "key30": "5Ss5yWpTAn637uNXHwhztcZmSSmvxjYnENnDSyLBF2yiUeoZE5taPEXTgoV5aRjVniezEd6fNHcKhbre48PWbuXn",
  "key31": "5phXDxaYQ1EcMURr8eGEiEFfv74tMauCRPHWhutFzq6r73ZLz43Jn7rwrbsdbBqkTBJMmGJ9jr5w4uGckpnxXXRG",
  "key32": "5eaJFWd5ztbhFqVigNnu775fUuocneoC3geGcZLrGprUtXj8ibgRrEj5VTUq2TRQ31zHpBB11DD5kag9o9AptDzX",
  "key33": "46CbfoCiBXsLEMVM3rq147VKqtU295gv27c2WVmSBXxekMqm63yZYd9vaicSUv4BoeMHyoasAsiRmoeWAA2xgB35",
  "key34": "62vhpi2Sg2xVF2diGjNAGtcN3n2wA8pEuarhW6HKimQ5DDfos7FjEMrksmDd6kVt8NgUoxLAjfrWLkLyzuPWX4Q8",
  "key35": "5YXMFzZt5x7niiSGGn6Couyc44RBoW6u6vmSm46smzkkZFWhLLmXU4a73R6mkvMQjMkQCCw5fb7WTWAz4Y8fukCi",
  "key36": "5zoiANBurPx1VHBPvp5qdBsquWBGyQmSTW57LkyJSrF7dfetLW47fAE4psbaiCSJwxrQtCuP7VEwatrDhsQnT6bR",
  "key37": "5HWxedhcdMQsonpDPhnrA9KEzgoetDRFJXWNL8zam5KBiufNxRrNnLK1XAN8FrJPTPFFceJcLixjhqQViYEwi1Lf",
  "key38": "4EAdTjPgKRuRC7HdV8rGzerTVvrju3uAfaJ76i7bHXQ6UV2FS8t1MPPNWxPzkA528xrfQsoU9ViAWow29aTjFGSJ",
  "key39": "58XvvJCL4pBPz2kesj1UgxJzPXcSjHaLngGyMG4bS85Pfc1MbjUoB8jtPYQx3Atvqq55Kp938zcfJPtxEPUnhkSP",
  "key40": "3qxYKYiF2TrK5KTdSE8bpeY8fNBXXjJcPCdABGEZRfxop7ZA4N9oLLHmDJFdJy1W2wQhFWRy44d4pzajRs5mku1g",
  "key41": "4Pi6HW2Vx21qRwmAzxDnj8F1yu4GiAt2iSRYTAC8gaMpQRz9GoQx7tkemaRDFKdP2s6qg3ceAupz5eJNjcCCkWEx"
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
