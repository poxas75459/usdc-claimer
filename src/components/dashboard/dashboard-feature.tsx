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
    "5kTSDdSatQfUK3upDZzswn4NPJBy5h5KHcdBVPvwxMNrTzUZDrvacfs8nYawzwncxm9vL3wsN7DmbgJ5i9MZ59xg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uqd1Lnk2qDL7KXdr9Mox8uYMMbjCN5G4xiv3D6zTNvCrme9ZLL7TBwmJ4j8jk8qfP7A8WdMApXST5tianCXSdXN",
  "key1": "3961r4Leavgqx71javiZLNcouJudq31er1bWmeNxF4wQk2fn3TzvB7MGTd35QfFRo1sRc6h4FEA252zQ3AtM3sAP",
  "key2": "5nkXAqL5kges2ZF9Z7EErQjekSE4Bg9tKVFbPUFjjpJSGXr6b7yd1Ss6xm4pcexo1v4GUeG57fGAwMyEZr2Lyugk",
  "key3": "5nA5rLVGyU3H7Mps8jWdfc59RTa7uBqJTnDExH7cTzP6EQS5TvjVeXAr7pzWsA5ewzQqp4Bo6VP9opeKEWKtAFrv",
  "key4": "5wsu4P6dTkG6C8VNZs5W5C25ghyYTFf88bNGxaDqfBWK9vSAxkkgSbnxBRVn9iyxoy8zqZJ8WQ3sE9DaqFJFKGkC",
  "key5": "5TxrW7LkemkdWjcS6XyjFVLPTwErr1X42XNn67pXxn5MFg69d3717bqq4L7Ez2StT1wcpzCvRak28fTnjsYkGgxN",
  "key6": "5wMVMSVg77xR9sK5uKAgdquV9EB5bavs5oSLAqMZH83XFFT6zqwKyiyCPnm3sz2dJgbrawbS1XG56STPCRtXrR4y",
  "key7": "4uBD28yYinzoqkhZxVGNTSnLWefirVKMcgAFjeuLzEAHocGP8v4q2mZ3LaWJXb8w7jfjqQyjuiYnH9iQv1Er75dv",
  "key8": "3KpE6V1Vq8oBdVCfL85s46VPBsQc9yih3PY4fpnmHcMGbzUuLrY8duz1DCqRWgwfexLep7knUnc68Mkkb7p17NPj",
  "key9": "5podvXRyUJkxhiFoMX5RqyaE9ppTJoqiZwkL3rzATbddCpLuKDsqyyL5CRo1w9wTqEjDw5QoiT71C5bSdimLBuqR",
  "key10": "2YD5usgmxdfVSDnEYvMsUXSR1cwb4LYfJdPRvoeDCu6a2AoykgdA5yt9WeMBHQU1ipiVST1Ew73sEsNHRMWNcBNE",
  "key11": "4xq8HhcZXNVBqmLV7b3FzcavDh2a4RVNCqWVENGhpKC4wGWgdEq6iSwbpwY6PiLjWuBDtJSqEos2Kaw21dzsSgQ8",
  "key12": "23J1CXqPhX3y3QvGWDnqMrgbZ1FxLEDf2s4Xmp5VtKCKaCuCkVpWBqA5vAcRSj9VuXzjWLXhH8aAL6ridzd24FR5",
  "key13": "2BcMyvrkSwaQrtFLdtbdDPoiEuQcoHfBRH92EBfU1jU9BWkyYtgbD8J7uMDdzu5djtjJLjP8bEctqGmbfNx54HZg",
  "key14": "2p7apGJiv2Sixedi2SVKWwYwqjdztTBUY6LzKRVYGjrawMKVeKsRMY58vGudYBq5ac7kGECcncRU8eoqcGyfCjuH",
  "key15": "5H49Rn6aEmxccW6DrHWWAKcGaDyt68ci7V38MMTy8s445xyMbT4v2PoyieqEST74L5kECj86UupE7i7QT27ECzGy",
  "key16": "2C7rd4otCGTdkddA3rjGTVQmGhKZkeerCNhmJ26C6UrWpeRvVPseTp8XgfCnRfN6hcJSVGAePCVPtLK1wBgs4xUR",
  "key17": "65CBGHWs5YYTWSqBnPSPniqKstjiHaUuYHy41aaah9nnTGF2WS9mypT9ZqU3E8GEkNVoRBJ55gKPrfzrpbyJRkPw",
  "key18": "4J9QN2YHC3M5AFhJCcszarb9vEc5jSb43BEQMYTW2BxypCRXLJpDiTCajchGcdpTsRf1CTGXEPUfLSizo6JhHGvw",
  "key19": "3627J9iVXauxVJ8Db38GU6oCXhPTYyLNoiDXnTMnBKDb8zcRw1Kh1v31KGwQbiCb7nw7nh8cyVAGEdyYtiyqoN5D",
  "key20": "kL7rkcLH42eoTjsNRay5d4t5tLK8Jxuq7UW44xdF9sLofssYfSAgpnbL47T37rP4H3K77ZVhrEQSo3mQ3rZYS6f",
  "key21": "4WEAAANd8zeQfsEXC2tgkPnFZGmjJGEmLzJHLrbKSd3zNBX1FJXQvtAEZdx3jFGww4VD9yge75iyHfLtqDNcqb5P",
  "key22": "5FNMHNXfbzmSnYmHhXAUvVjUsHeAg4de1kD84MpiLv6k17zxr8GA1vaY6YHXAaX4VHCoBFTa243wjomDZyLik3uy",
  "key23": "3QFtirwnzt9sohaX2jiPrfTVCznvM4wmSUeGsjjjZGfWxgkqZEsxT2JuoYgQMvZRuSVy6muQ8RwhK44RU7usXwLx",
  "key24": "dNCPSB5ic3tJiYxFpujzrNXmkTcU13jct9gRZ5hz56AjgtDsrCZJAmeWmQXLZwxF8PLMSoiGaejkkaoETSF6mB4",
  "key25": "5LK7nDns7iZFMu2ghGRqPUBK5vREdcqCZxm6NH8dRjXuNVmDA6pCmzVsshnH7bp3o53ans2bHMoeXRPmV3WQRi43",
  "key26": "5hiS5YXFLgGpNCC2CPaTxSVVTGVNEHYdhjHWLrbB37a7NXetf45Yeif8rHXyZTzHzs1sXT9797x8L7cixysWE99z",
  "key27": "4YMkfSBQEhTbtqMPiAUdoQ5dF5LZgCU3VzZEsMw6nhar11ai7xRMtPvGURGN6ohTCLK8A7J41H6xxHLTmxG4gRaq",
  "key28": "2V49V7UwyAUyvv5BRCcAKatw2dcCqGyJ9piHd73v2R46q415bMt3B9msm3zryRaW3MbVx558XHQ5hUP5yVDEHcQx",
  "key29": "67pAFw5yRjdVefp2SNm7R7HZ9xJf2A7nWjCHxpz2YcaTYcXkTbeNVuNLAP4Y5bWqGmCd9EzW2tQyJtkFF54pdSMC",
  "key30": "522Wk61q9opqvcX8e8acrbDehJiteNP1MbSENQ5Wrpx6Judoip1Nmd9Vjp3Qy2c54Vvjgt2m3KANJC4ZsWkFSSMb",
  "key31": "4mSWA6t3QbqLarCPqLoen8Q3Ey79F1hzGy8YsWzaa17rD7KxMoceh28KmnfJNYBVs1rqhuQEEnEny9vCzGiT3VXV",
  "key32": "BN8ALsThmECyBQGidHeQaGHRfFrRvtkQJHq7k9ZbqGrb5m4D8JDpVLGgD5BMwjMuBPQmhpoCHXEPd9pwgW7BqNS",
  "key33": "56rF44mwfqV5esZtcQ67qMk2pC1fqwFJRPqSVKTABpH344rfiuxQC9LpQv2GRogqfhDt49EZ6x8dwijMr3myrSDS",
  "key34": "3ZyoTeBLKmAaypDRZ48kdXffrbaAUYN8PAX1qbvVYoRzx3njU598SKDu6ytfysjSbEWFMYPqvpxZ2ERVW8Nns2zy",
  "key35": "3iBWWzSYBhBXqgqgmzSeL9oyyu6NTDcGDhnfemNUDkSsyWFz2vf5JWMymkcKsmhqgfNbmb2TQ6G83RDXuPS4WPaN",
  "key36": "9ksbC1C8vJ4dMxSsW3aeNxoKrrAcAJQ5cvu5A4Q75UfF4HtTe8DpRNgTETZtTKG8KNskJeTGgzumwCKEY5grk3p",
  "key37": "2eS2WtHPVHxfBkN9Z1Fb9Eck2TEDtLAiHDYfQRDMTe27nJcngTXV1aoFkpLVPogvnSJWmbiznEsbFbYNQSrYM34k",
  "key38": "2JM9K5BcLmJxWgdXNMiXHUWUhsSBJZ98BNx1pfX5nyjxLvAoTkCadTkHs2brLSPfLuSQBBmQGCqjvtQXpi6P6ybQ",
  "key39": "g6p84rmPd9sw6fzABQtr8Ztw5Ejwk9SQosT4dv4x6AGdMaPLAa7Wiw33YbghvG35xo8HY2Jwe9JAFLLHX5AihUm",
  "key40": "5SSDGn8WZAZdg8JN42mZWMDe3UDum2gbodMDqjunFA4R4nDF5xuGZcRtCUogK1kPwRcZNdiTPJCmGuZ6e6VLdEeD",
  "key41": "41RxaXnqxwX3eq2t2pyRURWsFAH7JLdez2rQpM2x2ucog3sQpRFhKuaWiRMkA9kgyBzUtS9visVfC8TEmJUTbnba",
  "key42": "4vpfoRZ2u445Tq1PHUUX2HEuEpkhbEXDz3x7Kisu5SHqwMBfRSm818zUDfBH8J7kL3FvsZnAB79qXT3WBStEFLhN"
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
