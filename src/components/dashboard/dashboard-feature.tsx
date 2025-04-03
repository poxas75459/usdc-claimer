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
    "4WivewsA7k3g2zucyn7T173RMpKE7ZSoTFB981Fg2VPJcShukynNvteZzKGLw2ErEGurdRXC1B4zf1fmXACocCwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LLVLLWvfBsSbthVWWWueLnu58nsKR2KDf3RaRAAp4wGDeh9N1GBqJ5gwjY2kUkfLYuJr5Ku4hNxyssHmRWSj2qi",
  "key1": "31EWimkMM4nieawCLTF3iNdKZwsSXVVXAwZcVzRQVnVFFYdWvFVifGvCbGVLgJgF8yrihHA5fERFs9a5Vaowm5Qj",
  "key2": "4YU52MWq1dE6VbG3hAcMY9k57eDy4sk6ySMTmJfv49PP1VwDhQPGA5oxRbrTbc7TQZix9v8qy3c39BqLq9ryn5Mn",
  "key3": "2BjGbScvrqr2Z9xWu53ds6S6kKfoPrsgDtkfaGWhuAjU3iPmykjU1TVSDDEk9UqPKCLvTxpwzoLnWBELuzUjTNr9",
  "key4": "2PzJABXkSz81pdV43PbGSQ6YH83Sa52LXp7sfeWsDjafeZtymgu3oNtWfzkhH31xnDs5XxVLbLXvaxAemounwemf",
  "key5": "iY49LucP5nQEiSava26mvoZ381B1vAV7mmThz9j8cNJyp4xQJzNEThPNqn4HZoSFuTPD2bGuzrdimQCxwxRERiA",
  "key6": "4EQHJkzyD5G388Vj8C8ee31dcUGfLjrvYqbU5Dn2rLhzrRqpN71Qfit2TQqUk6LLLgBhbnNR7EkQGvqX446ysWnL",
  "key7": "2sDvA7gmaLFCWVQ5cCTYhKTxMK1nBjVmn12RJ2ddg33mn5ujoDaRwcZf3Nnchg2Sq2bgx32FNZ3YR8DWXy4AgQMA",
  "key8": "5BeMx1esN2CjeuEy1BwksebRfwCrgr88zvLyVKPzVLaETVzxBQVvPULpCEa4PwPLxZbsUEzVkp7VCHkhMVhsCBRX",
  "key9": "4jcVEew34g6X23zVNTF6r4xsrDvwbyey5s2NM9XRMwEs4BnmNzY7DLNKSXgMHqCRshkWnWYvXtdMVwiMsd8W3dwz",
  "key10": "4maP7x7mc41fuDuDQ22pTSRMEK9Cyyr77J29Uvg469pvNvZQ5qHmHAYwp9h33MRXep8kVLS1xt8SjA5WWFrmF6hP",
  "key11": "3tenGrRaoxpvh6Y5gDKSaFyZVqTkHxhjzapHvuB8bZT1UeLSZE4stvECymzDM6LdhRFJcxJQma3ePDCFAFX5WGSg",
  "key12": "4kAYP6dqwq7RoWgFiB5h7mUzzGKjAH6HWhWuXyQKjjUVfdgmnrrLcJqyNtU3EXXzT9Qc9KdcjsDWPzhhehyb9auq",
  "key13": "5NACVP8DEkpWZDpKswZKAmU3aYyBzUiLmVg1DL31nVjqU1DrfQohUkGZtYLD4rbxZeEWVQomKbmgrpZzB1GrsmEo",
  "key14": "5FpQuhjMQJf7bRvyg3PArWpbVi1ewFPRzWy4h8WEmnFYE5XLpZuMHacRbwjuG7xRPJuWy24w3ZfZEoY6FHHfy1fv",
  "key15": "2dCHPfD2Fw7jDCV1TyvPFXqSdNaHiVbsGi8nGAEC9kQp1ETNZx1b2JbHjMhqCiTgY9x72jEKKV56bxZS1QWnUtmm",
  "key16": "31An916SLt3pQKEvyVC7ZYh9EFm2PsHco2XrADAsPvTBsh1x7hYGXBs4HCFABJ1bjKx1URDCv4cEYa3qApgEcoMZ",
  "key17": "3J3dutSD8KPDjiHmqgiQdjg9sUVKY9jsXWmEtHuzzkX6amTg3XpFmP1JtEKgA8rWNVjnoNDtwJ3hzKNVvskXXBW6",
  "key18": "315Q3Mh6JCM9PDG5rNg7N2te12dd6W9NocyMea8cnGwcJNm3nyXwJHnzUea2Awcvu54SfQircnj2JgzkCGcdLnU3",
  "key19": "3iSaJ8QgBEqowCbQqGuA5WbNBMHsSkzD5CDdbdZVjSk9Ui5FpyReQEVFgXgPWNHjDftw1PJ6Swmcav15F9dV9GJ1",
  "key20": "h72HoWeHqA2fHiTbzwnmUBCmm5PHPSmY1yB3LNsHC4U2M6wjiytAMDcbey9h8vMhC7NEcV5kcet8aGUNY5bC5ep",
  "key21": "4ZWnAhHPqVj47SrGtWXwWw6aehGibRECjGUZ5pv15MrWvzdaRMwapU8TNhGqaUcKVUv6Amb9cvtsUJQwqNbhLwb3",
  "key22": "2NR4ix2z2eLcWDiQM4qoHJpJGf1RNJ5akF8i9kiUHfCMkSnzm8CVxkS3fBLPhDugH6cHGxmSEAYwjpzcb9Ajp3L8",
  "key23": "5vnC7SKK5RQHUjPXmf9GGmrvodXV5FK65aMZtb77zNCB6koZCB2c65bZCgCBEkQYyhMkCXNFmFz7DMS4FihSjXpk",
  "key24": "6hv4MT1cTRS2mUyXvX8WVrQgFyf26kUk937TfvBXtUYVVRTZsCth1GeeNJpLFNzsJfxDJf7FR3Hge6toM6LWgok",
  "key25": "2Z54gsUdYAHTc7wzn7FaxT1xjZoiTjzeTG4QpfgWRzGcrc8o4qBEpRmzfzCjpn8cxxs3mVAbrEYLA2b82xEZCsvU",
  "key26": "4QTCw2x8n3YA49kMHoMjC4x28b6EYcknXBW4P6C64JXJD6xxJarNv1qR77ufRYeoh5yXDgBU5HqrBy5TnrhP3g7H",
  "key27": "3uRkPQNw694sY8ZzpU8ksk8awqtdPBV5RZP4E99ZtMLu11jTNuegYE9qXjJ7AsJjVr18me5nZUGvEhZ1o7o43VxK",
  "key28": "4KyYLygHkFfBqfaM7RGY6QssUaugEj17mGMvgeUoiVK6uhEjiWtRzFyJuwnJjU5Lp2DbiAz4MUQhvunPTZ39w2fN",
  "key29": "3YdFyaZAgMhDqvhds9GtdBB3LTC2GYBTipHCpdLFP5rrTUyaxnsEqn79CCzYKUV2k75kArR4SQBwD4mbq7BxvZ6s",
  "key30": "3WrbQUUg87KRuH8QgZVABSzSa2sKPu1mYnywjdENn7UR7es45owFqPypoDYupkgt6oyTwyfNQR7odToSEBZpK92k",
  "key31": "2M3ARfrh4wFVSH1qGQFgLwroT39rbdAU4du2E9pQCdqCpkbmaGhNn8F4NnHom93cK6QUrsRtw1r3oKSZBKNMJ7hQ",
  "key32": "5E9YLoqFv1j38QozrBt7gHu6otxQps9iKdRdXymKoSvQNgkwA92fXzYdMdc9EJKa8KwHG3oFLH6WApV3dJkdRDYh",
  "key33": "3u6nci75LoLuHFFVZHcXzeEmCYhk88eFB4sbCtfnieDKtfx3hNAPJC154pXMeKjsoNM7XMEbdfzy5NHwo32XRg9m",
  "key34": "5jVpLfQYnJUcV9Bc19TKQ24QqPjD1EFgoaoBAgTteXKBbFW5pTt6nULaX4Gm1c8SHaoprTkC6LmvBL7Hzkr9EhHJ",
  "key35": "3Z61SzTcQyhfNts8C6GHm6f8yyCsV3T26BPc26hXA55AqF4ATQ5nSJ5eUNMMCVCWEvpVr4Z27YRc47CCXjEhkAWJ",
  "key36": "4MuVGEENNunGpvsmh7uhW8BRKy3qgdZeNZaRLM5U5wRxrkAZKrvRcnKfGjdjcKjTfekktZvmJoHSPNq43YPptsGq",
  "key37": "2vUEMLDQrvg8Jct3xs2y1EjCH9xNqR4gBomV2EKLMaaJjjVtxq8apd3UusSqsjLTC8kMzwWcWy2dLAV6U6X1Un1f"
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
