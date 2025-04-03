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
    "3iUXq6ephPnTz6q75EbbieR4L3yTUuifVsTMySpGaZErqUFecYoKyAQE9MVe1iKHYfFNdonnfTBUsacKmHELUaYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u3ZQECaBtuqwwrJard1stVJiYTeQPTVagwms3K1SwAvtKtS76xVswWZsjtvgBFytZwVBGY7hqFaCyyNEcfwWQce",
  "key1": "5WWyie4D52xWTNgM3Daj4ZrBVYF5v4N2RK4MLjjVfGhbs4eD5srvRGz1e91c2YidKSZNxq6mrZCkPQoDwzjwW1Ub",
  "key2": "5sACrJ6r2aStbgvw6ry8ub8WaxKxUujLvNUEcQXna7kftDHE8U9baFuXQmcxJPn4do99jKdcNYdjAJPpwms6sYqJ",
  "key3": "515aD16Su54Yu3UYkvECNwgYnfBBS1KRW4bVQDKL9d5NfBa88J8iGEdF7F4V9Xipz5KcVM9SQ5rsz9DYZPHdPTYv",
  "key4": "2hPgXf3oGh339qqpqpKkUNWK98pYn43evPPbVMPTyLLKcHWdyUfZytgmGJ2gfvfMbmXP7K6DbwfZW7VFnZKdSj3L",
  "key5": "2jeLt9jFq9wc4fiSgn2pGukGwf2XEfqKwtavP4sK4HRZkYA5dNyLuQta2HSrJDBPCgSKcjH3g49JqBvHuwcwvStK",
  "key6": "23NCDL2TNoD8JH8vjao1Fwz5PqyitfUcW8WmgrNtZ3nwghpFs9QgosmVCpZHGFNPnLEdkzjyiEKFB3UaeXJqhfHs",
  "key7": "mSqXr41oJDrRV2vdp2mUMGdJUcP9nWnDxCSyba9hGfoAh26aT6bEaz8Pyg29JnVzZreyL5BvgGhNJ4f41eTthTB",
  "key8": "5nth3MrXmqqvig4AmFxXsEa6964CWj3HEhiiLK3VxRnDMunjh9p4Xe6Yp7opbfyqvvmSLdM4xJ81oC2rNgaAxSDX",
  "key9": "3sMDxiViDMYEhxuzFTBtu1VXPapdjWeiujKEzmEhsnZzF2RZ7WDky1469EtbTjAX6AtGC4t7HUG7fWj3KgF7CE5f",
  "key10": "5WALm82p5KvGJa4ocQUZNucfypmYSi2M22NeXumLiBRoCdWvCiVxnC12ufEWjgDMpZ71eok2dtvWnMTRLgVyQBZY",
  "key11": "23TABPGH8ZfGKz2186dbnNh7pb5fhQTHEdEPkc1KZtz27PuFauk9Tqjtmv5tHgSkFXy8mq9NHWo3YDsNFn3B2osw",
  "key12": "3TSWVeRUyVn38BpMMonDbFy2Uc6tJyyfZhQcbuyhHwNbPqvXpTL1DzVGd9MkykFJbJD77iBwNBp6tN1NTbZm9VhY",
  "key13": "V1DYq9znSrpEeVxdvaWtSDiTXMKnqtdBPXSSpNm7Fg9EvSQh4H2d2frG2JAM27jjnMyVoPskQBChfjgB9XgGpqC",
  "key14": "2RWYN9kksDjAhKSWtyZtZKrdfkSSnX2TEtgGrPjkuKtTxjfqxQDf25tsuFRfXJTRLNcDrrpTYGS2HtczD35fXDdC",
  "key15": "65tCFDYSyycNy2pLcYEeqaxpbETmFYR8NkrfTDG6mTQaQ1BUwr2J7PttnCJEtsHDsaK7pGES3QofqSMCqqS5cT9E",
  "key16": "4pSTKSeHiYAw7rX1YrdMkQDWDrQqSFyD5HEkdWw9RZZt9tf8bv9ALsdVEkQ5aDxxQSVNwQYjb1GUqk8QUNyy5Jt6",
  "key17": "21n3eo9ZjQRnfn2ZfdoThTTmU9NpSsBfnHZZ7gkXzZLmh35AuGx7qzen2qmCf62vdxAX4nK3Vi2RDwzsEuyDotod",
  "key18": "5tp7A7pf76oXtkE5DC6nP31gqKFUtXdH1j7L5FSeUx3CoGsaz5n8DzTxYgAzacM2hvhskCYs2eLj3dwUKjX1tq6Y",
  "key19": "53en3LjpT9Ei9kn2MN2WEwmot5okAd8b2ZYQg5Nf42AurWPtNt9dXKN5QXqsogV6unrC5NP9PKz9bAdH7eLyjfzA",
  "key20": "3BzKet9j2J7GP4moUDZzXtByiKGgDv7KYDYcxmgsNasLNtR761pcfQBjH6AszC11hm5FDvVBJnfoH99x9Y1QBx3z",
  "key21": "49grPkbRbEqgsfY1xGJGhPZh8t4XuCw2ZE4SvJYmNezxhT1FWKTkbvttNiB2hoyuxppX19cNpggNWgHnurjH2Amx",
  "key22": "2NdB3vnxaSk3iEpfeYXg354J391PmpG6aE2ZZ9h9dmLcP5eMLuh8iLxEF4oLpnJYmxM5aH7tpb1UcXqDWH7JLc3C",
  "key23": "39Ygo7FENcWhKEJnqYTXAVY9aQv1QRGsacxjTnUciEabfhMoJthxGoWumdvKrkde49i7FW3et7xpbRk4SMwsThbw",
  "key24": "2LzWcKAQ4ZDBD9F4zASVRijR5nc4EJYRQ7KEMD3n8gnaKy6Zba8pLFEDkrGNW5VYjAgzw6etmpsnv1rrvUvTRwuU",
  "key25": "62CBk3WERNpZXpyyDrVhyNpUAXK4AJhoygSTeSfnPKhtkVHGWFAf5gxmUKgH1fXYPKEUGX2ghxY66KxNBC3RUu6A",
  "key26": "2MwqNwuzDbRQkSz11wyvPXbHtShDuNoVnBJsJzJwR3t5tE9gnsbzs9zbnDamTGKdq7ifP3JKAoMmX4zz1tgMUNnt",
  "key27": "2SYv9iWqS9ucEwWc7Ywh6eQs6gomhojStMmt44ncyWDJ6DCtZLtQRvXXmpKHuyaLZCWt55DoVK6dZkqfCN8XyZiE",
  "key28": "fVKKygLnqVjQhR2DFG3vEKQBHMioYzwC1oT9Yd38i1y9vMCS34mPieGraFEMdw3Z9yE8mveS92HfbbvsaFkJCHj",
  "key29": "5HrfP76a6S7cL1nph5C5Mg2KmCPofLmKNDM55yQrQxgKgCxWPkuWbCSSWfNT8xtMm1fQW7dVXpb9cr1sAirGDaiC",
  "key30": "4EHGjzRYYNdLF12wnFh6uY6mPpVgL86tLuvQR6LETEbhsyNrVadb1DzUs1TF6XqYahTMzSwH1n6JaikSHoAPmzuu",
  "key31": "2jDqjtuZuNHwec3twUeT2gmzvqJGGaqHxmFLEDBEu7jtS77mhBspKxABpt8yYUfNY313YwHjsuut18TJbbF6dz3e",
  "key32": "rsLLCw6DbjAVuZjcwdtvRt5Pu1pbKgY9JpkhTKRjuT36XNMiqBWM3TSnyTFb9wqrFY8RCNpND7gfwXc7fjJuksu",
  "key33": "2QoaEVbNsEtX3i8TDjoSyu3CngBDf3eECv9DzFa6QF9bNcEVVP4uAeVdSad8LDermK1ybYEstnvFgsUW4yFwX8eR",
  "key34": "29AokPvdGzxDMv4s3JfnimbyW5sfy5tDsvDkr6cBPcU6xU3FzRsFnFLSwWx1JtpTHiCtMxFW9r4vkJJZe8nzPckR",
  "key35": "2KzAuNuz5hcHvGPq7madWytqstCtsGK838s3fMb13RwuzW82veDS3VQutftnMFP6LpkXJE16w94u7Q2VN9ZDoUQ6",
  "key36": "bU6TzecomY9bb2KfNHjX2pkrzSKuxvMqsG6nbPaU1jnnShDmr59p2zXLBj4TKRyqpaxM6T7jKvfBp66EydQtB3L",
  "key37": "2JDjBkqLNcuf5WgKEzskEzWDrtaBPZYc72zt6LPdGx5oZDt3CKe38cDAbCLgL4xknYLnVJQp4HXnWqefjrbph2Xo",
  "key38": "4ohAGcvhpoU3pXaVn8oZ2uBQxorvL2bLoqDKZNK1BLF3Txot136pRiaRdUoYK6SaX7Vpzea4HqUMgLADDgwtzsdL",
  "key39": "5ey8mNvcq6xJQLR53P4aFxtqtTadsw1iaNYVvivE3rpfjA3FCh9E3Thb213fbsqreQrhFuHXkR2dURpmDyz2SEs6",
  "key40": "4kbQdLRYEPNbHejjd6HQUykCqiorHGZZFZc9xCEj7cghvJyRSKbNkpTLoJFDueqa7nCR4m2Ld9VksCemKp1EiuTW",
  "key41": "jRsUciXLTSLDtVaBXcfxS8w8QoSAiwmz9LDDCr3K7sXZLPppMkCM6a8GAdJwExGjCvCBRTSRgvL8gEMMRwSoGnT",
  "key42": "4gDYr3dDenymBJCc7RtFp8iM68zDnmEEnXsPYtT6SwZgbs9ChwA1Fuo26nJVbSrdJmXNSkJgAQRPBwVH4Gg1xRHk",
  "key43": "45b4kD69u9FY7SNqSS95dH7vxC8tSa1nt2yhm4fNwMk1wWmuMpS3bEXvJQeN4ENbgKDu7XuoUj64XLW48gqidQrt",
  "key44": "3Ny8nmzGrrG7Yf1Smf5ybWu1UZ319MJf47K1q3gTwbC3VnVpvX13U3xsha87wNskx5SMztzLJ2KznvnZ4CkcK7Aq"
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
