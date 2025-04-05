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
    "3kCv6c1xXeQwofdUbfQERdxjjsjMtRfQCYn6VuTwmqm7iJ3sgYbAwRXeJ1xt8qVf1N1XrfkUR8xzwZbhCjAcgjx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cwm4YcYKunh8tJbcmCdZzuN1Xc1nq7JNC6qrUVKcJEXN88aZXPF9rx4PEHPB3DnAsREndkgD1hdcfn5kHDHhHqv",
  "key1": "2u9ZMNVWb7Eoaf3yyBNmnS2Grugih1B37x7BWeoZSJSoDsUfsrzbYG6ki48uhNSzjv2UoB99h2H89e1kdEH14XhG",
  "key2": "3boURdzLLwSSN6Y2oZ13exmyAwDq2BhuXS4XhfwfdG6k5PZjMLw156o2NTrMDjQE6F9poNJd7sbXunUaoWG5ihXr",
  "key3": "2Ckre5f1Y9XEJYQJvPnWRkgugwJrNUCRsjw4b4Z35YP99Wg9Y4iWRWGz41J6fAa3aRJbGPrDUPQhWiDWf4gXhbSp",
  "key4": "4GENSc1BD6YjTbV6q8W5jYL8XnszJ9v6RSEdzKwLTH8Qpt3qjC9TeGFEQCbz2g2u8BhNG2ppy7rfFtF2rtCMJCiV",
  "key5": "isDDEo23HfLvJ98Zb3CddW24cMioXBLzbXs4Dob7ZSWT1aQW3vWV3yGwEqare2ytupwiYu5etm8PhdgU8pDsLC5",
  "key6": "3ZQtSsYxN4f99Qtc4jFjK6SLGHJDhSMD6jKvoVgs4rpeJRY827YtFK74VsxSam8mbvLwNcdMeR1Nz8qSg4uxHSf3",
  "key7": "31kPgeTk1TPPqLEKzQ1bn9GsqCqjupamcKaGVFwpHGjsyKMAtXV81a85TAbkVChB4uLXhPnV7jJUM8HgGeMCNUiu",
  "key8": "3iSVToKhjxVqaWrV5a5TabDJRAD2fEK5XHA9cYQ8Bit6VhsURMNTYPBEWVGoN62u6K6HwtkeAHavj736LuMw8WTA",
  "key9": "2159jgBYFsPFNwEL6iTSCzkUkFQKgwEHVbRCLvdPibSLcUyZLjD6rmLv5vMMu76jKe69KcBGXoqxS4qRemVpsTBa",
  "key10": "4q8BY74QxrKgXTZTyXndH47uN5yx1xFJ8ZNGacK6vTySVxekvsZxgEq7WZaoWnMjoUSdYQVJwTLjrSiKqQAzWiK3",
  "key11": "WB2Jd4WKCCq2cYxmpKLZXt86PZQL75sNJ5XXbex9eqrr2RKoL7CncMwxoW5BWS9m631tHdcph2JKRKC5kG6Sh47",
  "key12": "52WYYGvS2cQ9ZNja53NGkksjG9QZ6Z19DP8LJhXyVFjuHpDqpA2g7o411AWe63d2XBQPexBrFeEsYYKS4hCH52yN",
  "key13": "47TE8hWvLC6xS2uupvtcWszVXocmXRLfZMakeyTV8pKegnqxeYoqog22MMhPj6ctz6FJdhkSvzJTDQMfc1sSodVw",
  "key14": "mLi3ttDadBWvi7gFixXqeU4WT9T7Jai8eK21j1r8RwbxetTQTag9Sxhvj9qtW2zftf1ci5M1h6DC99D3yRuxkZe",
  "key15": "2Goc8Su7kYRkMonTZHCMzsZERwxDU1VSSJuVtGWGWuGPQShmnv7ofmd6ZZU7UDQ9bgzLgMxLyTKhRCqtBF7MSSNn",
  "key16": "5esiHZ2opFppx25vGfpAkrP2bECaXdEgtKi3hMeC4zt79y7r3PC64Ynoqw5U3dCCKrGAC8TYwZEoG9fFyAUG6sBd",
  "key17": "5DZ6a6skmifv75MRxSqXr24rh9rHmhHzcBMPM3CtSrK9Qytfb9C92xbF1zU2DAVt1PbtnaPcAhXkJzbG8LuTJ2TS",
  "key18": "5hm3WoD8cfG4tKnHp6wdDnC5KkvMJbtNsUNF7KoyBYXF7Af2UTdgpmQSMMbmurr4iZes1Xp1kKuQUmWciZnCCpx5",
  "key19": "EmGG5R6gWRBcfcyksKHKuNLX9ZmGKgmbmG18bRf9dCoNVavb8ahY6F5idwNkp7ZRk9P5MFDsqcespJ585oaEQ5j",
  "key20": "5xEJTWmGMr5LX5zWsN4GFEZgQsdjP2B5ic8CGw1TaerjmKGiEW9woUxbAq6oMuhbuo9kNeypqggZGvYt4YeFf8TG",
  "key21": "5nBvpr24AkF9GZNiFPdX3ipUfPRmqpPVvoqsroGrMo1qfpZviiQYEWKqnviqY7TvVSx7ehncYyzmNB9WfFKef5uK",
  "key22": "62PYKefDpABd3wV97r8qScFXRWradN4D8UujsRMxgLhkyv2NRD2JZ3etMhqfKVDWfvnns154snrYs2RPAtrW38St",
  "key23": "R6tN5Scf4isrFAyrb9eUgnSMuX8oqbEerFF49vKJEidY4cGnQjaP8mxKzGNTeVLSYrhSsTDR2XfrWaMs2A2FMk8",
  "key24": "5cTuNuy4223i9UXg293nU1EcdcJcqjExjbgVYe4af9UbAkNntNXLZ776HMnDwhatuzYXUHVsk3HNExUD9kQzhoNU",
  "key25": "3w5cGWNjpTsBRSQXURZTkiEoGLQMsBaKArEiJykmyVpqRAkTaUMKzpstubakS7TxWbKNVmxTzcXNz7bAft1p3jvq",
  "key26": "3S9U5sLdbqmhQF1EzoLJW2T2obiUpxksFsHsvQ7QEbHFpsNMC9JPze8qSj1uyEY1FpLapUqrvCsfCNM6egCPVkNs",
  "key27": "CaSnakr9yadSBefoKGJkmqeAo8Nb1ai9mD3kbPjLudVKWr2WR7UirvVAPJXECBHDUUE9buJ1BybQSbgpy9QJiBs",
  "key28": "2W6qRTz7z4ZREP4gBYbnTtfn6QLHvHaRooPnu5RqZjTwfanjHCVQAu38xHjzacsYHMyaGVpxnPd2KKjYfsP2q65j",
  "key29": "43cyD4aVZTBvM4pLsZUeRWCWtWjoXjcQVTwMQAoAjxJXYGoZQcoaZ6HWYRmXuhWCfY5VQJfZZdzkq21hFVhSVGHn",
  "key30": "4yjBT7ZsinDmza8YgWmTiPtkWTqcvnsGhfpJvwMyTDBe4pndXPkRyydRonhb9XQQMd41arX2PYjsLicZzUjMMDao",
  "key31": "5jzmH7Nr3XoM6gbMxScPMjGjTx6aDSjvvFahr6ZVCU4h3d1MarMwUfSKhw8WcMf6oTtPKEZWDQ3hrQRRE9ZXqG2y",
  "key32": "387YgojqiE9t6wj49Abdsp4CCe9utnKPFfJdPo34VpdRMYWSxRveGqH28HfycRCvDGu84tdENMMG1Djdr4upFBX9",
  "key33": "J4BHnzKAjQWn9dbZsy9obrvLyZg6rmvye8mRhTJWkoLyC51dVbYmfvVki5i4P6XQFWYWoZiZ4FRqSBFomyEBiYG"
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
