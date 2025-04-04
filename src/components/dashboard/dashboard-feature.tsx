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
    "4Tiy4aMLuGH8mntDNAE5ugWo24kAHJ9m3zzTtbWfAjAJoV8cwZS2srzH5r5XpDfprwPhEwKVjfNdL4DKZUHinvkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XxNHeQhKd3JYDS8MwsRHcg11rM16S25BKVB6QRSkAZcgpSJrMPidbKgpzuni3azCUGCD1AnwWNHDikGg9xGVaPG",
  "key1": "5R1QoHB5GGwE8oTTVMNzFBbhfWpnfeTkB8j5S3oiyNnyjCx8S92EGehrLx4RzCQdJbNPBzMiACQamDHHERMJtW47",
  "key2": "3vSn7KwKLjmxYsokwZZXHv8MRTZmEFAHehwqduQrhMe6Fxer1NvzVPabhBaun5NkCTUeHifvjZmU1FnW3EGf4tKy",
  "key3": "5M6afYnV1czQn2eLTrZsbgmBkVfgvj5tjnutDe12vdurgbk9x9FsdvZ8kVXuHjNMKGH97TzTpc6yVfLpFoATiKFJ",
  "key4": "icndNwFKA61j8xGtxGDaA3S7Bv4UZ37drb2dkzyuHDJq5GaixZ1zgRqcnQXCELrDLBhHEj16q6UVQ7CKV1KVAqF",
  "key5": "4dbktJd2uYK7KVnkXGTRmbdVRM9DyjcZEsPxn1wJs7cffmpYwuBaxQJjk4YEQ2ijqtHosYnketiRNCmAdx2XJ9sM",
  "key6": "2Bzyd7xHNeVLuC8gdY5dZoxSan7nQXqRkev5BbvxfELPuXCkMYo9Ye7a1VF2n2YBnJa5wGrX3QKD6nEFHCLhJHbD",
  "key7": "4nctXhke9Jic3526oTevhsrWqDtME7Tqi1QdtTvT3SoephCEL7qahRE2Jst4hM8X1CdnsHYhy6LFepwwxGLQyLuE",
  "key8": "51cj4rAgQ2JW3R9bNXQigdtgzBhqqpH7TSWLFPDN52Y7897X2fDJdwnsrwdx36MDcVNn4cRKpWLuesEidBoKzeb1",
  "key9": "2Gd8CDyDgbY6Aq8i3AehHbCR3BDgyt8QqjMXgYtqdoe4wKzcTFYW3vtECdCmrYreZmsrzKoe3PKecgk2KTJ84zyz",
  "key10": "5KiL59dviRrH4NF6z4x39KAdSkcCXCQDR2b9JyKNbA51C5b5aNrFY6Gc9iM37raKPZiRmbcojaWeMa5KkEr7qmtq",
  "key11": "4X4A41qxZUzw2TQdvRu4L1MD1wXg4iuD48gEN3JFNfU2WepFCBfekeAHBVo4yTAk8u9Wr4QmsDZWfhoMCcPWQkuF",
  "key12": "2tF6y98U8Q7ZsD14gnkajuFr5RmDkAgDimLJ1W7BNmkuuR1q6pnj5afLNTvP8SHd7dAaqLDwAEhbh23sUpdJkUHj",
  "key13": "3HFLdtKpapm6AJNqcwzW7npkPyNx2HDDt1F9btSRjLHdAw2aZrnWYkr24WpLDdgEkdBZMaRqu8id9ibGZVDTNKUh",
  "key14": "5ZTD5NRbchYdDie1S4pE2Xft9AfUe5nT93n8jGLXEqDhsYsHN4Eeom7V3utx2Pdejq62ur54ULh3fzA7VSiu9vUo",
  "key15": "XgMbA1AM7Zu2L5ERU1EMSp6iJUiPcbUCESV7Xyg2PUne1KsJRaAF8Ghz3R23gQwcs68NNX9MuetNBcLYQ4n2eFf",
  "key16": "33pybk7K3bLMNf1Y5ematBeh7cHFUTTT76TddRqNxJeVU46T5tVXx6Q9g3xsc8qkT7D3LzKqXpHnkrxUU2dMo3BU",
  "key17": "2CDnjoxpd4v28cR9b5v6zXDvMLqsb7J6pDAkH8Zp3wNaUDZtCCTxxymcYULisWrYaQ46E9c8VQpYasJMRU1bSMQ5",
  "key18": "7C7aEJULc7f666sDCjaqMz7SAEnQiyMNCK6rDxi3bwCMeHcKspEThK2voEvVZ2UhDiRbGEm25GBtp5W6QhJGDeP",
  "key19": "36776UyWZWFMa5oBUjeTTgDV9VD7TUqxb8cBYHDUDGRddcgFdU6TrkqkJgCbHVfDxhXkRHmPYbyUABHVDhrzxZ6f",
  "key20": "45oku9TcSucoZwGuxvMi2taA2K7hDx4hYs9X1Rt2KkZscKRPMkU23ohUkugHLBkcw4cf8FDWRYDxbFnPBt3mTJ1b",
  "key21": "iem6kWHqCWgLKgsdD6d99wjVakXKW9JujZB5aDCP7munxrvLUH58NKSyVCJ3eJF2VqfLo1WTDVja4qCspy7mg8S",
  "key22": "3MnBJmcHQ9WDwtXv1UJGvZmdbDAzP8mST2iFdusBkYGwk8g4LaYkcHpevgSGGhLvdyakVT6iBPjDur3Jj212FxH8",
  "key23": "57htXa65FktAGmNSm4FgMySyeiFz4nBqkMJaGsoWX8X4CYU1ZWgH9UnPmARfjGbfTD68pEvdfgSxgghpLHgRw3Fq",
  "key24": "2PMGCeuqb3JLkBdJzBwU5qCA9qXeRtR5EdcXm6SFuQu9kecw7CPKfopVUpgq132x6PBzPotfYPZSpr1jrr2Uki4w",
  "key25": "s1WPd5qd3rFwK3uZ9ooXTip8P7rrTb4NVwvqUXxHsA89m63JNsa2hJZ6PriTAx6eRz88SPs4558gyou9kDkN1E3",
  "key26": "35EcwJdUzYtZpBkkx8KkSBgTFZUqvMBCCkbrdsSJcP847khM1WdZkbewZyPdwSdzEcoSfraL6RTPjpKNP7HNdxM9",
  "key27": "Cfosm4wodB6nUePZgHUhNwjLstDbNSCv37sAKMuSHQChncEVqsWuc8jnezin8fcdHq8FWVXscbfPcA7j3W7cKsn",
  "key28": "5YSwYcAWd3rM21aJKWxdJgpvyos9py6iw1RE8AgJJciLTKjpGCbPy9q3Yc6ixfyHQYf3cNo7AWkQyzbZo9FoJMpZ",
  "key29": "4JugvxNVTc3VFBFb8sn3Re8RNzMmtSPgb7GuqUMdZ4yC23fkJUjWC1E8n8s96MKZK1RwBF5NKe8oRkV3hQb8GzKe",
  "key30": "gFs54SQKmAGuvzkU46rpnowCUAECNoK9rsn4hpSemTSxNvXZvsiSF1neM4cSXgSvdeo9LzvVrBf5dHp8TwixKRc",
  "key31": "2WtG2C3V3nwi3zfF2gaE5CKxjz4pHctr915VpjjxZeucNJUycPWTfr4y6Y6qFsyd9qoP8nhg88QfjLuqzNfLfJz",
  "key32": "2vNLp9qRzNiKEV9RbjSKpqmuCFprMfrYo4FkFuQvWmXA3r7m91621caCHLfyije9GTXGw2JMCdsBgsnM5UwLtYxH",
  "key33": "5Na9GeiRoAmsXaRhGUjwPZW5VfXa55YJgLH2GGyjP9jdYYnWbgMWUYzUAYjtSiyQpULA16sbFyUVgVFH98magEGf",
  "key34": "4mAxreTLk1hbuCSCPTdeRCYG7wpfS3ukgU4SiV29RaUk4mkgaCmzaZQxPKXTWTbcy2jLG6V48JY7FcrgLAAdFEGF",
  "key35": "4sCHzqrYC3UzpREeMo2rh5A44Dk7PdFjEDqjVrQ7jbPoLvoDsNn4jPxvXPJE3n4ixn6kNzcyKaXyJjtc1JMDv1LA",
  "key36": "5ALBpWGd9L5V17TodJPTwSQEXWfAKKTXRkLJUP3Vvsw1D6KH5HLiaE4Mr7eMwEDwWUoRNzr19mvErqKa3e3wke1y"
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
