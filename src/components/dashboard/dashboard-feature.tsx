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
    "41aNLakcHYK7uR8E8pNfckPXnpuFwLawN6yXJZF3usj6eRwnpMs3Y1X54mJoteDfV5vWSK2KrXzvUkUXJXeuPmPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jeDn83kk5A2yYmr6ovWdbpxteifQCSERddUbc34GoRtLk1sRUm6behNhLc8fkfQk6cFFcuY9AXTUfff5LxFfJHb",
  "key1": "4Ew5W6ahtG1hGiCbyFP6qCfed6CJGeiCAR8RaHZmaStxi5kAuvtATKbPPoSjdudHGECdaFuNo7CWo4a8WA4voq8H",
  "key2": "4CVePhBF3SJQTqFcBRCEfuAQBH2nuERUk4RWkNAKgp8fwba2z25L6mp6ZpkPGzHsLBBf9Fan2HALEYp1SgNzAEzA",
  "key3": "3HoHSdzcY9rqh2DCBneB5gWDRCNpvwV5uLv9gWtmq3sMSKVzMrEmeMhEv4AiEHcCqzSRuLaShdV9UR2mkTfb8aMw",
  "key4": "iFy68yLbByniSTCkaS9VUTNDX8tRvfzkUXwjqcrb1Mrv9zGphB8iPDhNYZBN24vdJ7wQgqUYKKqhHFf8HVq9Hpt",
  "key5": "3JX171PXGg2fGBpfwiUV98f27qfm5P9gVJGC5RAEKGG3iJR3jCn9vNcGKTaRtH7TTHrN9KqNp7JEW6GL72FrahRp",
  "key6": "5PnZgD6ZTmUMxuQ4GQxTwA51UuTHDkn256AYvYLsrNx1jiKPAuBi2vjVvRhUS1cxCxiVgWSv3Rnzr1mL1ge1mpXQ",
  "key7": "5b7G38UMutq1QaQ6X7codpCiMNZxf3Huqb4LorNzReEhyGdUoXbDZ4a4Ep1fWhXx26ihBA4TE32Epbv57nzkobQ6",
  "key8": "9HT1f55Gtpdx8mEvMfGRs6amJUEJtM2QJGpkRTAS3jEqbzjSNQo4dopSrXRvU1ju7ZZJ7M6THPBic4tDDGPJiwk",
  "key9": "Eb9PUJmufDVvtZufGeZGzduyazneYrQWgcnh24hqy4uDaCDM7HyK5V5jcUgcCKtF6rpmSvsx48fPjTxEdvZY1BX",
  "key10": "4pEV4A8UXf9kd9ctU9emh6VgRCwxr47zGJ2W8XtQxwbpBcUQUaRQYpCJWzSB76Rm9haXon5NmAXZBzmrGh4aDyv7",
  "key11": "2AsVqNLuVe3bWwSAhTP1tdGz1SYaYCWATWrGGgcdU75PxvzRLp8CaaMDTKX5sS3UFmPZxfJaZqeM4vMJTnoh8Fi",
  "key12": "4ZgsLm13RUamMbBbt9fxtmE6npggrdeXkxEs4p3LhqH6HWLJkF1EUYf6nCe4m48Gaj7E3mMveYvss1E2Yejjwavp",
  "key13": "4jWozuTHB2Xpkh83TZ1E1fZEP8Lyj24ir8MPshGE6L4YxvFH3Y8VG6PR4W1tQEh88Mrvm4vCoDbLQEcbpuajMKm8",
  "key14": "2zZfKsT5ku6tHKV78BdWdJdHL9D6pxC3UHhKtCPaXo56jdad6fRzjKaRu8AQLGpbGG55REmxUdDCTPBx3EVsEe2P",
  "key15": "2L5kd8xY8QwcyHYSQUgaTXiYzn61PrRj5hQKfogQTRbJocJuJsNjE5vajrxT5y4E6rDVs8hyv6DyVfZN9TFa46cL",
  "key16": "qZhsVzxCU5mXJJ7aCbKmga1zrWvMTrYLMorJCZ2xf6rh58vPMiPdy9CKaZEtpGkCUswQCQogwggFVRMYymHfU6S",
  "key17": "2fTBGtLVwaTRSsTcuG2jgj9L8tfLjVdHj9uzjau8DCjhD3WaDzxguFpmp1JNW72dTC5qHPBdfdQMoksHwk4CzXWw",
  "key18": "26U3L9GaMpN7LRYR2gzZBcJ76Vaf1KfdeRKpVW699dSq9z9qsUvjh8SqHLdkZeqFKavRK15w8MxnzBUdk42Wnmaz",
  "key19": "4hRBxgtWQ6PXJ5rpBYm5GRfQAaydyZ8o3DcK52X1otJi4DEFMxuhx2yKbJtsWtQkoAoEobA1LcWRh7TjQAwCXBmb",
  "key20": "3QhdnCN7zZhWGEK4TEhZJyUsoziewxijLA6SpQPzJt1azDwcziGFNDqtjisQeLS4qo12Z6s2wYhJhL9adw79tkpQ",
  "key21": "3ft8No2XGTVGUbxxMEaSzuZqrJP3gMxwNBREoSSDT3Cq2zVGtM15E5AknsL9xhMMqv7ECg1v1c27nXtg25RQvsQt",
  "key22": "2Vw6U14Hmsoa9G5wDsu2Jq6dMYajbtMZjbAffrXCFrvCosvDYgDj2bk3jxado5Yyna68ceHRDpq2izVALNTcQgV5",
  "key23": "o1NC9fUo2y1Uqn7kCPSW4woTEsgWremhD7ah6C6UeLDpiqPTc59QXJ6y1pgNVkxuWKLJDoGrYrQecxWYK5omvVH",
  "key24": "5dpWEtmAWVN3NYnqkk2EMHzSsjK5NP9GrXb7s3RLimScFouNforqSWB1CbYrK71kWevybiQSUhKAZML9913zMK8R",
  "key25": "3SYYMePRbYoaRzoTZSAxeCfxJartqaDgHrcEfY86mjEncsYhazpifCrt9GZPRNtFBoCYFa5CyAQToYcrYADKUzN8",
  "key26": "2Ur4EpRJKUzQuJ2ERwa6T766aZvU6sGMemYWTnm7nLt9NNLzjTu5e1nMTGXsL4jtmjQjZcGhR27f49c1Pvx6NUkR",
  "key27": "23Ns73wrkge5Gp8k4eDRFLGFf6HoLsk1GoqmHjimvUWQXtxyw2fa4WJiFdYQWaGwvfQAmXweLTkg3PjphyWNHAnR",
  "key28": "2p94QPX7mPiJFztEN1qkkwZLev6BVUztfLoUbjQwdDrXxsADBSUNUqzj6YX5P7LjpdDn1azFacKMfYj1zLcNxUM9",
  "key29": "C2FSdCtpW9XNUyVr8yw6DjhenmgVQKxFpYaie69qJFSpVwpc2KBPGnJQQKZEjsLJLFBm69huW7iczQfDsxdi1G8",
  "key30": "3UtcCmtMueCQcRfuUfHQWhDei53vLKoiEzgNBigwRNKLXby25zAeXzDUhuKFbJCpQjwbuZmmdZTZ2m3xFyDdwrZp",
  "key31": "5oB7RR73sYLjS6jgmRM2wgZSBi9QXDvjfbpFacfRnKf8ihcU7sYoJ9iT1LTPKeTZ4smqA5bv7EwdSXMSB8TDLfCZ",
  "key32": "5D8Nn6fwpq397qrVs6GQXRbRHmJwtTHaHoP3HbaXK7U1rb5XuwR4jkp5E2HsqpKdviDKpusxrmqn2vHRkZJD8VRT",
  "key33": "4y6cXsHvh9uWS595LED7L7qDPe9WJv8DDWcwCua4D4QLR8vWyvqK3T2mmTwWGcyv5JyzVYrKqcQWf1tXstVgRn3A",
  "key34": "5vX6cJ8srAEzQMEEdZKi3YZbMzLQwmsXG52SUS4iHci1qyPHwESxMiyLFmbpWaJPo8nzWiLeLD1Ki4Dn9pv7mj42",
  "key35": "wwsTiBuctFQeK2bKhma1QFBNw4tgLzEK5yksj1XQETP8HhvowLxnU3umQY4hafZQLaqAB5dB9vWv5SNJ1YWSX2z",
  "key36": "2Bn1Rzgtaw2JKqtsJMWsh7umRzhxbe6PnN8VcotFou4mYbnG89qrj114X5xssUJqMuHiovR49EuCHFiGrcjwFkue",
  "key37": "4c2139XDPjhTizmm7TrYbd5WGoCAasWTpD3b1jrYSUXhcFXqT3Ygn5jJxstVudkbpcRBu6LyctfQDdM5uSpygxiA",
  "key38": "4MVidtMfjV8DsJbrxbPwVNAcHTCcbmw3vpWZdiYZcTxaHhFYBoACjaNZMxv1Nyz4CrV2J7BuRfudfiNS6Ey6m8qF",
  "key39": "bgVshjpF3YXG1J3bJusxkE9YPUx44zwWwEZ25mLqEK4yoPiwt5Px59pKEbLwXHNe2CRLTRH2c14jpL611EZwGvL",
  "key40": "tYYwwaqJK4xxk9BNJfT4jQdasV11HoAKACfu9ReSydNy8uyeArUJ4ppHYqay4GnuTM1nLMJP9MRGW1kD5Qz1uej",
  "key41": "gk8An17iEekcr7Eg3LZh3BFVpVa8icj3hE3toJ7AJn4Q9LLi6rTiz1Pnyk7fhEv9DSmYWNcAk44ovK7JqR5zbpp",
  "key42": "5fesmNh33o43fPCE3Nvt8Q4T5oGUQezGdYkMToVUBBmDwi2b5M9LtfEcfgJyFy8L4W73EfXCs1huR6YxgSufk57N",
  "key43": "d1x269ZHUFBrjoH9TmavApfDWNkiTu33nMxQiNkT2YoRgZkgjXUxDxSdjoGtn22rJcxs8VbNj97Fr3pRJ7B8ePT",
  "key44": "4J2F8BniQpgpBkZaqRuRMet7NofnfmDRMSySJWqKGkkWz2wVKD1kwEfdAw79kEfx7NqXk5g7YBJaphTgDQojkKvB",
  "key45": "38He6Uwy6BV6utPXX3FTWh99rvvD75ptdSsjpsHSwdPsSgUZa3wgSA9bGHfyG8rXrPfGNKTqvsVWXbmvHHaDsKJF"
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
