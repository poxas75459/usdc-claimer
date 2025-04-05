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
    "3NUMp9jfEu3Mx7NfJE94riN4qmtQPxLGnfL78Zisy9LRWsmtwqSNgXzbjuqeRLg8BuMtqpWyEK2ToLC8gTJgsLiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ivbJNjiyW3w7i4Qa2J6K2ro5mygKxpVpdT17HznSrygu5zho8CDc7ySiwCShZJ1p1ZdktvgfrNo8M8gzA8bN9S",
  "key1": "MxyEf2S6gqaffGhEaiRxJCEjjbw1HQQ9oK2fwouuWRzfQVeV3cJgWMofWk7AWQH9U8RMuFKRJotc3fzEbRJnrfi",
  "key2": "4FR7V69iTgPTqxAb3WHPXFGtjP13rAWZBZPNYaa22xvRHagWseJC1vEwQMpgtNJeNN9U65AjXJ8pvcoEJWQumSeN",
  "key3": "4SteNLSqApvxDSmPRigtnTYoMkZLdJ9JfHgWuwnSaCpUWbc8bZ753XqouWSPzMVbS9kJoa3YHSrr54cQY5YsoRJp",
  "key4": "2sGXX4pYjdTT9RoJqpq3qq3a4j5a5RDKxUcjzD6z5f1X3JnaHstRS7ig7LBzDqiixm2zQJXd3jxm6xRvwUEzz3Dy",
  "key5": "DbrBx9ihKfmrRjgLfieFavVtRA91ckqDmTLb2YR3D1WdikKZkZTX4LYLPyfS6uSgPe6xgKJxtoXdSC2kyzQ8gb8",
  "key6": "5rqXg2apWzyUvJ1cTAf3mXYkTvZv88K2hLxG5fiK9Q3tVAnn5MGPSr46PTZzmpHa4gSRfRPuJKxbVafeLapEq1dp",
  "key7": "4z3evp2kCwp2JHyax7xcKjepRdNoov8GkYrxz7V8PaSgf8yVpZHF56XiJJ7ZwMCr3dXYbNAia5D6fBS6R4Tu14wP",
  "key8": "4j3aNtbCHg2CgHePuZGQVHSpMPMoF3d1veSYks9xyYFXg4x8gxLDd75DffgYTpNiA1oiV5WcrgSFRT747zCbXHPV",
  "key9": "4tTyn7ndCcdqpcpg9Ko4eVw4cqjhuw9Z39hmzZ6NygEarivsFUBPN9hXKPpNbwB3emB1RYdqyjMymvQAAxFNWuWD",
  "key10": "4JBApQUzA7zKNPQcD5Zf4Ec35S75aXvJ8QbY9uepMHXApQ3g9muCkEpbGFtuLw7qeZJKhCdUZq1NsG5e5ALsJ5Hm",
  "key11": "5u4A7AikKyTWz7oHp7XvdwGdSAT46d7qVVQsiHHoQLnqTXoKhiYLTEvbLeUBuLnUErrLzL6U1ATz7ZrxJLjjghuK",
  "key12": "SgiC8a1ZxmerGQMbbXs8vPtXg6WAux3CypG3YxxXqiJnwKfXXcx79hg3ph1GQSuwBKoGJQ7f5AQ6uYWq6BZT5xa",
  "key13": "4VPm2nbjiZWe6BZGPtLR2cmE6gemDpjwxA6UQkDUT8wZmixY13pppK4km4hLthehXUsdqVVqGTGSE1Wr5bKXevCt",
  "key14": "Tk6t8vz5Nsckq44FqqxwxZQtmAgEafHMC8NH1q4fHn1viVqdwRTSwARR5Zv6fMEkz8otnaPRRJVfCrTiSmboxAJ",
  "key15": "426Pny2V6JDCdSHrmeDsZKdpqbbmTQPqQB8zkJ7U9UkpSQC42Y5NtqEcKtikHtR3oaqpB8QWus2vGnHoGRNtVgVq",
  "key16": "4mKMPDTtBeZTXp4MiJi7CKurF1UjBQMYFgyAs45RwAica7b7joRKVJzwbxwaNFeX9qVgnwFTjw5zbN3sPqZWiER7",
  "key17": "3SJG5CJqFpdKzSEApbfZyLHhRqSp9auWuUK8veTrwnWBheMDWC52iipo9F4YPRdB9zLAf4GZQHUNz2S3yxqKFJxZ",
  "key18": "3tkPoZo67ipNmQ7SqFgBj2wUEPFrKFgJjw26vayJp7ZVqHx6Vby1kzsBdg6HMZagXFtH9G4AR8tHfkho3iguzJaD",
  "key19": "2xJ7JzcAM7vfGvtx3NJH95EnqfBKUsPRGk5yqeF3Et44mdxBiqyWtzFse6gJZ6MGKPFeEXUk1eHGFD8HmWvgjghq",
  "key20": "2yb8Wa6Ybq3JGtmV5uPuQaLMiDyADByEerTg2zoXM1GtwhGjhpTFyo8VCXzfcYjnHPqd1BJYzotcBeUDt3rSYuiy",
  "key21": "4uqrcEXMEhRS6y8u26ie86tW2ztSHHMECMAhWwGF9uXYF3hhRWusbUy7gM4Nn9BUnyjePiUYiiS1NWPHcXrv1d4R",
  "key22": "j6zmqE2jCbevQ4QvBckKXTLLFEYKx3HDoZ8cfEcACUE19CCf1qVajFRxQJUaHWVmerjJ2Hz9e2sGsYwuC1FJrYB",
  "key23": "5iBMUEmtRNx4cVhKuL9e3UQjbCMFYroqYxR6iDu4NN9mTgQ6AtkT9Ud6uigMdZhKiiN1Dd91M72StRrY2ZnjuUfz",
  "key24": "qa5k4XZpBo438RjyKKr42GeHuNaTMdkmQFjuZU7P6g3ZFSWJEjy3icYRHVvbzYkvgr2CKBDPPXSxWDCfZ4FBzhU",
  "key25": "41vXRPBB8W9o53oBZHphegN2GU1hXZXW2SV8mibGeFwAYemHQRoMQTZnf1wqvoNVg44CTYHkUn8ytfeSYXxV2bLv",
  "key26": "43GqQRjQquNkPTSd5xoP9agLCMLiTsteC7mFqC9dDVEx7jcZSzHmzEJeqUxQm4q7XnbqCm6qjLkcetDLRriS7pWp",
  "key27": "3tdGRaxAsFN33E3ibmwcHoZxxAqk1ZUEJCtp876MJnJWVb3hwx2pVBMCKd6qy1skR9PDFAmWzNpnNWKJMsCwt9kL",
  "key28": "4bHUAej3ghvYnqqNCqGFzTP35gJ7XPH63U7PAGRzcxx1ueTLse2jTiZ87QneyTKxyEy9jRnK3oSswDw4V2SUQLQ6",
  "key29": "627YpFqJRL2erW3u9qNGezfXLpckFQK2DSMqZgurPRLtsCVfTRjC2w957bQZXTpFQzgiv2dTjMddrr9gJqGVQoHP",
  "key30": "f18G5oxSfewK9WHZDMYooJ1ycLjkc8tArTDLTwaai4L2Rm4oAXD14xcWn939x8xYgH6k4cAU4azig9sRiZN33mA",
  "key31": "e2dYXoYnFDB1PxmEHctfWfbnr6ZE5164XkvP3qzGXhJ2zQBPw4ThAY1bQTRHNMaZh4UT6FmwgBpuUyHZVw6o5qM",
  "key32": "54kvvvdreX212Yzcvrn2PushSKecz1UQo26y1kNr2o9N26qNqL2DZru6kxJ9xbzbELk93onyESWR8tRG94YRwaqQ",
  "key33": "2trmASEgzigGchVsQowwegR9hL9hmXtwPzpMqNLKuXkHzk65BmhWXNYtBVB9Up92XQjH1R39f9Mg3SHXaUx1ff7b",
  "key34": "2DxgBo4Umaxtkqb6WLax5d8QUHq1aGMhosQjVAWxQHHL2darhA9fFGBf6HmeShb3ioDLq7x44ocjA2epkCTe9chw",
  "key35": "33Pd58NzQKDx1vYTmDVWkhiiEJGXSR2Xg9Xpo6ifejjaKgzCq429YMrEbFo6HXRuPcXWXKTQV15WUa4LJyiTfuXb",
  "key36": "3PGMNyNbyN7ZPsgcPukqhtrAYa2ihbo2DA2pWeDAPH2Ss1hVAP8NnaxZkt6XNjzspMfRYG4qgqAXqEx9oGQmHqm3",
  "key37": "2V4Z98sHGceCiTvbWALKnxAJGjPnFGVcWaUjdhTQphuJsYnJ4hBrb47mi8nKdGytsYNQeUk7Xqmdnmq3jgNcWv7r",
  "key38": "5Se1RbTZThsQCZvzJ4TpYhAn44bf2x3Y7tmfjkpwt1ZJYD7oVkBBaBe1fp7GQ3iiVDAcvujyHxi56rRQgSP4b4eZ",
  "key39": "5PYQP2tR6z3phcsmU2Mpfgh9MvV3tgohPkKZBL45RNF6YLPmTWNnUpsb1kcXfNzHh9EjioJJpVsZ8YPY1jFxHVdm",
  "key40": "4VnPyDV9s1gdKpwCVwZ1djoJ6SWDZmbnefErTrsSMRKHbYHqTnJngcNeVHygxMtrhNuNbjYjDjGDsQWZShP4VqgA",
  "key41": "3FLHczAT4VT2Li5EMSiGk9RMWFcGd8UAUYajxBwuTEpkhH2HSurozv6uAiD7rSfgEMqfqNCCXwDdjcbqx6ByKfNB",
  "key42": "3o3jc5H45W1Q7sxsgiLnAEBTgn7qiVoCEcTJs6vMe5tV2j4g1NXAzAdg4jSDUisamV3fkNBYgXhCdRNCPgD8cfpB",
  "key43": "4juoHBpnoJycCgurYL3gPHRLtSZiQFsSZgXzv8kQb7bxmWPpp1wNPKFZCB98MTFo1LMa35dhiweZzNhkL6tjiUwV",
  "key44": "4N5fj1is3xVEuLu2Gq9jPVG324FC8fo83qC3TZjBu9y1Dbx46865mJXBuztKcovBSfXqsytSZuwgdKT792UVKySA",
  "key45": "3eDGWZQhtH3oaWoTqE8fTShsTdkJp3jDGAHjHFCReYTAabGxF9n339uUvqWQpPQrEdMhY5oszMLP9T2E2sovWNw5"
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
