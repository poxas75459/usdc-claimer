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
    "4xbGxfyBg6uFFjcTxRTx2ScRpEGrAyD7vApW6gn6FSJpndsE9WQf3UxRyrFw9XCw2JMnwvgieHW7v4ZDgkb1oQKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LcVftmwH3gAF13P7cfBx9bShVsn4gsMZWamxEhpU865eXweAvfrVenijJ8ZurPYbJHfvQP3UFf1XQSth7NTFA7u",
  "key1": "4bw6Jnsa15EHmyK5iUCYrbxHLJA81xUYLxhWfA1j5vY6a99hEJfsZaunbPmPnHf6i9pb5X7qBt69J8sGdUZuPbEA",
  "key2": "2vKsZE9H5h1sNTu6FyVQKVrz6RGSpQvHyMZw7zP9bmoCx8hFRPCt1GxviGNtVs5oSu3nLhAUZNn6kk3vxSRgaqc5",
  "key3": "5udanxwyuxoEiCZ9AJKBFFcKHmVA1npRkHeiPuqTrd8i65fTkEgWEbfaGxdBXzJGp68w2uTQbFATKvuMJKC88LKF",
  "key4": "3pzHyGqWJ2qquaHWt6BSaZYsLWggYKwzdLj3inBDznpM1ZJ5Lv6WBpAzgeCKeX7ExFcofDQNRUBW4hCa8qLUC14N",
  "key5": "25dehFKyxNyrRfyqEbGdCoCXDcoRpmENUozSDGyGKUUBHfkJhbZhaFoALLYvFUMrgenTsfwpDv88sbysw4HBKRBL",
  "key6": "3PQ1EqW4h32Vx2HZFHFeDyeLPc1EH46ar5U3oHWDza2VAFR7GuL6E7CX29HBRPH7mSxYnvxhuu9JD1ajRkB9762h",
  "key7": "4ydmSzjwzx4NnFkDWCKzG2JZauBEuPTAozCCxeSDEh486X7XTn5ENh1eq8MnbZDwJWfqK9RLacKAJbmrR9dbPbza",
  "key8": "2vd39kHYfnpRPmF8tB9w3hzPtADoUQoss1xbeNiESnAPYZ6c1JcTuoncuyCmeGY1CkaXz1BRfmGS33LuzeqMcshk",
  "key9": "DJnAS6Zi9ckCohteF23J6tqKJghJ3HZSTt8p7QamuxsDb7o7xHxqYSYy2ksMiJf6nZRortnpHJKbptPGc2NEsJj",
  "key10": "4eydNNJNNy9U8g95TNNqSRWH5aBFLubwRCjcTShQv2iCvEVa6j6wxcDwCysHyCvM4BKUggCaXQoEhcDNwgyJgdQ9",
  "key11": "4ot87a6cMr93vu53F5JbA5MABxQDFFfLyJWRjbDkunEdgqes4gxmvx58MRRWfxotA816gcpxpfowzMPPhzGDuBYU",
  "key12": "2YbLwdF2eXbmFTKY6eafvchzkwqBVtHLTaQmtteQu7srdw6XxEAenU6KcxEMGfkzpi8E4cd47t8BrG9kthMouos9",
  "key13": "Ft1KG9ZZhLmefS2dwqx9NDgZ4ze2Cw7D41Vo2vx68neb1Nbh7dsgYs1kJFkkFppwWcv5aHKsStwCSuGUt9Qet7f",
  "key14": "4cBNxYurkruawtucodkwP7LYzFToLbLKdTktK4JemKimXvVH2PiRCg3Agx8nqAWine2ukWA49Hg8pPEpwnvwYQkH",
  "key15": "2NEcjnG1hiuZpKJUBSqf2PToUqYxuDFesutAgd6iku7toKJbg1QWDBemzy4Uikmqjj7ZQK12n84btTebY9AzdjXY",
  "key16": "VK7oQVvqLbDof2nWS7ukgzen9iXHntiu9TTeV1BDx5EDKREW6A1XGMUfag5JPaysAQa9vZxyoAdiTaA6nnFfMWH",
  "key17": "3s6FVJ8JuxTXtzsnwZGnScVhLSyes55P8DgRVTF7qu26PwGpo6cV9JuBRK9NspgWgTRi6uJUhXqHm3q8dfCRGYsa",
  "key18": "4PiC45Yaac4A3mdxsM24kEVhRBD3wX7NHeyjQGVCNvM837t2Ca5qL4mvCw5QawHeMYkFyTbP685x7PoSu6EWTMuP",
  "key19": "ANKUdVYF6vcwuPVgcFahSvTPT4pT61QpWdAXCUYLJMgHgiqdSYk7mTKnoeb6VZ3bTWCNAVUSsDftH38kEx9CwTW",
  "key20": "4jk2Dn98bMy7ugpVxvkrVEUR8cbEa1QEGxMxxbfd8bZfDRYeudmoi4PAMiQ8DFAnJW9gKXfr75hKWZz14gVhPv9X",
  "key21": "23xnsdSrD3RkfP58ea93VCFjYL1kFLwFUwyPcP4df9ZJyCdoePRYGG3eAmXU7DcKPQSX66VLR1EY2fSYCVaomFUh",
  "key22": "4kr7hFPXyWDbYpZ57p7zjtnuUHhSfNt8YPdjKPPnsCo8ENxiJ6Qg8hW6gzoK6kypSHQvE2o3U8LndRsZ4Mdp6jUw",
  "key23": "4Dfb8VyCBraNVjuCVvgQTF7NGGzJvWZS6PM4MX7mkAiV3J55wGZFNYZEEmB224G2SFL49s54FAmoSMwvtQpkAUdL",
  "key24": "4HBFiAidbDWEM6MRsTSRwAH4GkgspsyuNUp6VdHxWGfgQ25DRpWweVweFyEZ87o6MVRwtG3S7CDZYd4dekwPYFAV",
  "key25": "5ct1nMwfU6mjbzaBbPNybDqFG9sFk48gufoCZ8Sv6LrDaRDkWiDjy9t2gTXd54SukyJZ2qundTwLZLWsyB16EqH",
  "key26": "3ZmksH4HUUnJzZjoFXAgvTpZmfgXFv4bPmaon8Tnd8e5YP6gCNvAd2fyRZDsHWnsyTreCYQfyWLz3CqvMmiwe4X4",
  "key27": "4JKg7feMT1RHDH5yLL28EYtUhLyEZx6vMyPWYXR83rpBBmyKRfBU9bEwFtdfxVAXUJJKRN21LFi5w7YGunzi4Wqo",
  "key28": "43R8So9Rp1u4Y2FvWAQ1GfLbbnE49E6pxVEjeqs8EVBc9R8QNnxPV2jNuJjBDGzkNvn6iBiSf2qfGveQ8PQr3q6Z",
  "key29": "5sdGDmEbce8qqohCLMscDmzS5HoXRqgUuCHd6xjnd1tLTqSewsL6PUt2bBj8XRhBqYpf89DCfFUJheexLEMAw9C2",
  "key30": "5WfN5HQw1KYWNebEAJG4eMBmtgoXrsTUcUZxh5Sysive17swQ6sfkccVJNhftTnLZ22zRfCXeDJaN4PivStpQpH6",
  "key31": "4jBvWoSKaAVevh5LjfXE4P8d3rEkfMpUMmSh1f37gqi2pMAZ35kFoVAzhZR9S7ZCDEHoi4FTdXwqeizFg3YgkSdm",
  "key32": "5QkwZhz4Y7XSJwrxcyL5jGr6GMpmmrfiDw8JpW7N8cAFGsz9MZ8MnhSMcUi1kcUgAqejKfC3K2FVekTudbahoqx2",
  "key33": "4ZzMJJ5FnQXgt92vEFuQxHAqNWf8hRergdk7y6hW4uwcVfVYQ3vZyfNJEtsp8d2pWSLFDcrh8wnnabBjZ7uXkKWp",
  "key34": "2QYrwiEFitP7y4XBLJ9oEW9voYmNhMU8uBNU7t9nMFnrCiovGoxSfvAUYoNPwn3Piqu5Pv32J9JbqTP5WGeHGbSm",
  "key35": "2EyyWvFJevChTzoE6sHaFPThkC3DJeqLouWBuZugTQiWYEXuVUceVY3ZBqbt1HgGCFA8QKwG2TnsGzZu4mCLKTFV",
  "key36": "2HUWkJjypPBeSd1XXCSd8rVTrLtKfrzL877VTxXQ6vZZJmQBjvqiioELyokJ3hKDePgnwcV1DhPKF7uuq2SP7yi",
  "key37": "4on6PsLhB8uVMeduXAD7s8wShiFSo3bezphdPb2VXueihKvcRLtSoBqwB5EinPVehRn3BFbbpBDU5xcfyPcxLB8d",
  "key38": "2qRGasNMBxMTQi35rSCRyFvZD6B37zMTGj9jPeJQVSZYtgu4yMTcvozhaijrewE4KwDm8oZygYyRCaAKMAFm9pjF",
  "key39": "2mQpAA8tE8jytKVapZEUji8pLBHpLrrJCzMg8TvXTEzXWuXup56546vPMeeJRyhwkRt4KF7Ra6N2rqUmzYACPQRJ",
  "key40": "2GNpiJ2PM6zBUWqGyTK6Evb4tqc1wcnmcPRybtfGXFuyU8jyZZDUf4D6kvT8bE9SEUJdQvx75X889T4FicLFdvso",
  "key41": "4VUdP2FJZrgkG7z8ntbK5P3XKaYEGjBPMPnECCvDSE7K9YjttVC3FfR9D29aRXYJX66vSidS5yjMY7aKXFmK4nSk"
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
