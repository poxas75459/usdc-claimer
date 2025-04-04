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
    "2WVDX4NgTTudegquKXZYXhspbBkHF4xfVHJfNJNFBmFrxA2qgDNJn8fiCHNZgaboFFmRGyhZnipjMJYZmEQAGuU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "216PGAxGvHDNuiZJzP5bvMULqmoYLzui9xvwsCNAuU8ckGkkc7QbkeYppAqADbeB6dxKWeCb7U4Cyz3BTnawnDfD",
  "key1": "29sRToFafaTEPHnpxZvmnZfPamXh6uHeEA4GshA4gJCqM88MeAM4a8HSfVwnogcSCZ68AnvFkrtDiNgKGLn4c5Wi",
  "key2": "5oDsSYU1J18W4mzifbRhPBUu3taEMqhmg6wcWfeVyqR3w2JsPVqCZeGs6R5M37ZjdnzgyvZ2ZvZ7PUZfhtXLHCBC",
  "key3": "4vJrSisAoK1Sv2YPgCVYvB3rHz1tJFtEoUdbgAdv14hsznW7adwhYu5gkvowxWG7pEyVGZhf6Rwh65GVYybTFXh4",
  "key4": "2b7ZnADnmqKDDVNFSC5jkX1JGBEYu6FZwqc5L7XuoRfSpCYvbtJM47M87juCJzz74bKwxkGUAgKK8BD6vTCjLMDe",
  "key5": "XWFywdTVc1Vamxodzk8XnLq9UjSxUkkBLFua7h77Zev1z8hMeHDKmCitNbFBjZ5eprXdRUhu5ubqrTk12hNDXhE",
  "key6": "tjCedVADBP8cSz2PsvLhcLFjonPEmCroEkVwSzkszTWjE41veAsLnhB9ZyHJFuGjXadLQKZgU9D8gfe6oPw7wWz",
  "key7": "gdxUN2x9qS8eWTQpeGyz2ZaT58hoLoQNqZzZ9pHT69MheZD6jNmbYdzhv3StqFM874QVnshHTHar2rSbB5wLCHf",
  "key8": "3LdpiYmnv3N9gWeSuRHJPHzDdnsCYtBNiGT1Ur6zUMPim6TvySrbzv6E6Jwz5ctmyWHPrxjUWbEVHU9end6QMNxL",
  "key9": "2oXY7FwZZsmkPJvC2Kyd2BwkYeTyJwG9BTQ4qjs1VNS6VLKAbim3MNB622PuDrKPFrxkPJazGxfhWcv6wKkZTMap",
  "key10": "3tZHwKzCStRMZYd9DNJRYNqoWSj5Qq2CwMEK17cWFUU4QCvCgRAvU9v88HjWdF3yiSooW2PT6yxfXh5tVg2gNJzP",
  "key11": "4KAnYb9xW1DqQkF7ch6WkbcFcdfTiobrXbxdsfz5yVcB7apXyGhGbW4kKA3MQ3wEEHjyWCjHp8LukyG7vxAHY6j8",
  "key12": "5iP8J34X7tNrTDwvgQS9SAUuvgbFk7jSXJuPU2gMd4WPESyR9ZPRfmfFFjciCd9sXh3Kjm1QbaD9xmRXWYntPmMz",
  "key13": "4WpJz25r8ejSxXzr3dBLH6wR8RYHxMJcxprFZ8KPQRyzSVFPgWPWiQET8bJ3vBDAkEWVS4TGNpU96Ndn8UZza6k",
  "key14": "4pkuG2KF4P3VHJLMDZAaw2jvVEuFDy4ajiar18i3KavQH6D38NGyEtfBRbs5P4FpZxHKkXXXhAqQjTA6LMUyYzHh",
  "key15": "DjF5psYo8igfoAVXA9B9fuztfc4pn4gReX5yfFKa8TXs8qe6W4AX8RcWfP2bJmjWtm4kGmfT9HyeLb5GSTBcWRf",
  "key16": "2FctdD19PxwG8RbpQLEeo42yJB7MYMiqif3uRHbRN7JgcRZpBb9vg6njMVNMJhn9gk5siBZ3hbSiwrgqZjkXiNxR",
  "key17": "BQuGCqBpnAZu68hwUMckPUsASQRVXR61KsmnYfY2NhrYftKvEKg5gjnAMCKY5QmvPCZez1qAWsh6xrzn1htNBXG",
  "key18": "3nkMFEkYrhGzjzpvnZXELBon9xwoxNWuWWiuE6X5HXshicVpY7TQjVUrtxi9pp7fzVxZU9UVFuWdyWhBpBHjgroF",
  "key19": "2Axe32yANaYD9bNVxzYVyzXG6JoYutc58M8mmPCu1HT3NXL6ztaeVmbFEbLep3fWRCaE3UzBcukek9r96MXxi9td",
  "key20": "46DPfND4dV79vNXLKBnQ7vwQ4ti3cHDydqsfvb9YiumakTV8Jdc2xjz7DqUNbaJ3Rxmmr6pEwbWZUZ2FiEVZWj36",
  "key21": "4z1CXDJjEbizZCyKTVQVfuyhcPayFZUjryqHtN3695BZPSS1xptV3g3YweA3Hhz5Lxbg5uMtFEXucJ3RAXokMzfs",
  "key22": "21DNvmrccbfbphdw2Tf3MNGogBMz9BnL1aeLeBLzRJrDaXYY2myw1ktZjefMndYLFfHFThFbTuMLX7euTycaCjKR",
  "key23": "cTbJCHeV8JABS9uhJwp8TAhkADjYnW4nyxEdEfJVrNAp46ZFk2AQQn41pNmfqv9NNNjGDeGkGdhS1ak7dYSJggq",
  "key24": "3Egs2WeagJED2pZ5VTGZ5gLxFw7PUVwN6udrKxdhX1cq96yT5emLjKeNryx4Uo1M8igjaXW49i6VxZbqHe2YP7LX",
  "key25": "2sgwgTQdUqA7ARkfiyyTejvAt5m7XXV2YecnkH2sFwiH2cavTeuJiFHfu4A24h1z6p6zemLLh4CiEsb9C4ZKggHV",
  "key26": "4G4cFQmgpN63tWsSSUm7AgGYUHaT6NvvUGdBnJ3cfveakuN2GHKcZ7VCnSRuDJxBoCPudDsiRumSRiJoatpsNMn3",
  "key27": "ULmjpAR3pHyoYWybSogTJ2EQCug1W2gsboaQ7rFX24GJMMEesfKmxzywz1qv4ygos8gUDod22MwGt9GBUFgUixs",
  "key28": "25LeTsQV5dkGJvasgMLD8UVaqgSQaJ4r9ptXr1FNDP97UcBszF65Jr2Gjr1kUhw6tdw925PmbYu7ZUb58R2JmhLZ",
  "key29": "2kU7oxJrcQSXNN3Ws6jiww6gmrfpf5UKsiNt2sEwh471TEeidcLUtgLLZgq4djrXN34pAyAccSHawkxwWdEAsC4E",
  "key30": "4rA5PrKB3wefCSKqmyQxb8WUWFNKNBpfdJi3phjHA2h9zTTjXADVPaamgJWetMSmU1HVCWX9Sif2ZCDzwcWJcHAM",
  "key31": "57MhLvUT74VpQSJBS7VnLMAGXoK2A1p6zgsJ9Viv9n9PtSExXxycoT4qFmVuUwAZUjioYB2RLcTgfGSaYsKVfQ1r",
  "key32": "2TVqbv32EJ5nu53G3DicSYt5SKkzH3vVAAXDh6rCHvK9yTnw83R4RacmxnNREDtv3QtCEkDZa9JtvkwgmtJzjzgz",
  "key33": "56SUj5sQHRDEG7soGZTYFd4RMvKSoduBgASsW4CEXXjVGaJArMneifZERTxHXqFXQNpa15rKYBWtH28JbkcvYp2N",
  "key34": "57jSkKwmgVwXTgK8J9sZP4GPQ2un3vyv27zWmwLW53bpJsuhN1gDh3BYvY7VFb8vGyQAyjbrj2cVoAge9Ejk8723",
  "key35": "5WsaRbX7tqpS81qJ7EN3vRi6GdNXRFHR4ff6zXgedxeE46JHk3pMqXuDojhVsj3w6NSCXPd3pNo1vqL5EmBr7Hex",
  "key36": "4WT4ARFse5j2QLMeX9ovLJN7hgNUEZQqt9ijHrigZXNAcVvwQWub1kZNMqhqEkfENrYkY5L8JchvDMAvLqd25N44",
  "key37": "2fExNCPKEJMNPtaCQtK6NSNs73GH47fEcxAj4RHYUYPADJVSj9UrktRPaHngHsqfakp6Vf3e6LzVfkWzKwsZAjeE",
  "key38": "4rw6NSWVFCTUWa1Gs34Lqmbw1YuBiaDpAjtKqdpXYDE5amJaRmfxMv7kQSAtcvVE9udNcoF3WUfvxFRcUPmxW7Wq",
  "key39": "XvhKK5nj1B1y2uteMGFUymYF1hiKqnXXroG7kYTpZoCMncYHEhVpMJGiKFCf21FyE4veWdT3boM4KnkuV2asGp3",
  "key40": "5ZBHzpyaVy88xNXig99YwgEPM4BJvKAjF7cd64KAKGpE5x7TwpezEucM8aYDgCC95GgSPpqtLMR3wmp4pQQndQgX",
  "key41": "3qeBnagCxTWBBtsfMM2SE4nRKHjonAaYe53HxVgzpCekCCn55N96qgQsqaqSe4j5EQQd7xZuVK9Wz4UcBund4nkd",
  "key42": "3Nxwzadxy8SinYEns87yF8NkLE1ERCQAE19b3pR5kAQ6e2zkLUbhDUhwwiC4yCsgUXgzjUD617WvrSgq243GdcjK",
  "key43": "4zjQ3jkgBbHXDEjBv4pJcLjWzkKZ9b8gY4Qq4YSw7zRvafspW4m1xxCYhzzjRc8EgJVUePoV1TCX3dtBt4ozPCPX"
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
