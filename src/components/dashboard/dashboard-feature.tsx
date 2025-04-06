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
    "61zQT65CiFscykzaW5NTCvaBQfdCH62JdPTV4vpBmDMot43nPcjEimv4Dg6zXQ2VteTjaqfjoBm7robDAVfSFeW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uQYsbuY2M9BbtMrkx1N8tVcks8nd2vFBBUSU3MqFDaVhWqMUhqrcTLntG1DLmGZGvwgSSpqYrQ1pexrAqZT9RG8",
  "key1": "65NL8jWCmN5vSdsWS5X7cxnckcZVgATGFk2FtuAciEfXN55Ahvnomfwx2p6Tbgj9L64PUomYuToXQobZvWEGVcD1",
  "key2": "58mMmGDpTnv7Sy5uCJoSavnGvKqtVy1TxqiuZadvhF5hF92ZKFb9YA9awLjRfYDGY81Jne99dRB3rNpc2aQcjvcK",
  "key3": "5T9vzoQZZBWrJtTZkQJT8mbk4kHk4aeHK2LWAi3oasY3x5N1n66EEvSNfa7D9g546NKNG8STsaxsjHx5UYf8efDg",
  "key4": "4Nob1YwPLsbDn9H4iLEGyuT2rp8MXb7JmfacsatogFAhDPRUhWhEC3HUCMYdQccY1oXwhCFCMbxmuoPhzNkQwvkc",
  "key5": "3FGJutuQ9ZGCyJELEY1QCoHadNm8219Fp2QZsNwSq9bvkZc9D2kD55p4fxtVi2eE76dx4YfqgKReB4QrETB236yo",
  "key6": "5goawQq5sNtXT3xqCuaussxPQJvCjoZasPuPQE9FjGMS5mDNdY3vn4KuDeLhrdw3mD5Tp41FEZ9A2qH9TSVsYRg1",
  "key7": "4FWwhYAgAoTjdjMUXKkWEcCTecGADrCo6crDdGkDjbm7WsSJXgU8ZAcAjAvQCFFmfMCBF5xAD5pH6687VW2CYGcA",
  "key8": "58V5V4iqq2UozZZG4jbgwTRrMQQqhqcrzk3uZGKRuQJkVj11tAF13S61nVyHSaPgXVPgJ2qo9CqUJLi7YctZyky1",
  "key9": "NbYPYHufWUVkaciu2e1F6Sh7JrJczBa9Ur9MdU2NsdXFs27iJK4WgsKukL3DzXndShhbd8nVTFFvDdsrvjDfdR4",
  "key10": "5hDbY9nkSVUvKCdTZX7qFNVfj2May8FUCmhRZVPdtz2gdaFZkhsxAasLNsRKNWAgdSEDvxTNgdmjq1KTukn1GyeL",
  "key11": "CpGwp8Mh2fWTifbRFpeShJXcW3815LeERiD4tMvSJ6upwL8WAycx5gQjjHbJp8htun2AXmJPzzC1xgLzYCAhRHR",
  "key12": "3UBCTBPRmHFCPWVkWXKm7bzX6cgNjzmYxNE5LGacu3VmWTNFN27HjUjxHwTVNN53w4mWD7w5R8E5xn9BVeoPDScn",
  "key13": "4xkCmKYBkHhbxd4tQ5fYU1JQLGscc5upezKq9kLihajAJofWB9aA3rAUZA8A4t9g1A6GkbZcNLBxRCgSsUFbDNd1",
  "key14": "Qa3gM2FqeA2nbXJRcW5TrWY8GRdmD8U1FF5eZNyjnCRtbJzGxF1MzqjrCJSeE98kCUSQfG5rDDFtW2mpwdSbK5H",
  "key15": "4DX4KW7gBEA91K5JmBoXYk1cckvPBMdqfUTt6wR2jrJBFCWzJSyQZ9Noy4oAhqVxgEUdFRgZCTAhijoh29dGcDC6",
  "key16": "4DconGoFaGaYiiZqdH4qAMNSFYfBHCgh5j8Gi1ZQShQtAj1tUg2y96sef46U6urWCTMd8VAWy7U3zW32g5cdGbMV",
  "key17": "HbwBz8XLr3cyXW6eyeiGd8tbQYExv2GReEUdm73EaGaGqBpFSNsbmn6q58Xn5oDdYwkM39hZngexjLh5Hdvow8U",
  "key18": "5CA6eiNvPEYmu5UzkU9EuyjLW98C5aJeXdUv2pQUHY9cm3jki6NkjQmtRVAH25WVsXWh8EtLUvFziL1RQ9dVuRJm",
  "key19": "2tfRbhkGx7Zh1zZPYpXcTFqLLLJtEWNTsFZQwTBHMkZwFDC28QDR1C5utfWLQAJ163avQaSU3R84y7uTQXSK38FA",
  "key20": "3siaMm8YM721jN2CgV1cxaubu55w4sLL1vUF7nmxRVmHnkzUDo9n83ukAZebfEiHP5M1Y1s6F3NYW8mP5fikpEtw",
  "key21": "V3E8DXKma858nS7foZZy7cChCyKN9EynWx9szWqV3RKmwFPdsn9Qq8AdAD78QFBrBjLfY3JoBRF8jEgWwQzEkCj",
  "key22": "5AHqYkxsqpnAvwipTckXwbUm5dVrqqyfkK8aZbM8DsM1uJhbWaWfTn8srtw4JWSfka2NZJBM8eNs59gLFRWnJCyK",
  "key23": "5Na9cvJ9U9a6mS6dZFioSgViABguFH5mu3ZExiEvEieEeBBZ9BZm6SZM84EBfDJAwECjum4ErG6GeNcABQ19Avws",
  "key24": "4cz1aDhnaQtBgTh22wfQ31nSops9XyszgsNWjJv5DpnnWhvznYdYCF2HQH7XQhkggEUicpkJebfoL5PsPDcZfRwE",
  "key25": "49DFCbdZm1EbKkQQSYGYQxtgat6Xo87Md5ucwbQuFLuwQgDU53DFb4GiopFY7bZ15wKATw8GnDQjqA4YsgzVjaBP",
  "key26": "47QKvmJnVqsVowQU5Chke1ZMEvkNzNxCdsCJBA3custwKsccYTjCLqp4NymeS4xx5HbdfdeBsKBCBdaSQKT44YRr",
  "key27": "67hSimYNwinjuEa5EqQ4XVfY2hD7CiVpn3aXZQHC1mTe3B4rAhXEfH8Yis4JdA52bMLz3CcwueMqtHmQLvG4hA7Y",
  "key28": "cTJws3L23JBQMzPJvYFDSbki6CxRw587djgy266cVteFBGyYeifxWCDhU4gbVJRVjc7cDSic6bcqLT3KrjrYckS",
  "key29": "5uLiaQgjVpFm6fLmt8nBT19vvrzgdGYcQ7iV2i2ikNa2Sxxr1GxaxDhhk6oJg9yMBtCUEvPiiCSCn6beoyv1b3sm",
  "key30": "2VxNKSJMWZ8RHYZrJ9CQPP7eBQnRJXPkhRDY4bwbW3AfPRpmrPoNCUCTqmi3BrjDdJ93oM1Xp1zyXBgXADNbYorF",
  "key31": "42mwha9z7dMDsHbEbUEACFAer23LHWAfJFgrLLZTWszeASCNLwwC6WpkqvYwxG29drUiypazt1MH9E9WNEF24P4K",
  "key32": "5hryLAnQ3JbVRPX5och6Vg15FjPPAd7Fkik9KJWi3KxRiuvbDSxcrc3ZT2SgC9N5d7THD3svRbZNKaLbAfG7YYP9",
  "key33": "jqRvzyMN7H9MoBnc2p73biYssXmFPb6gW4z5ELzNFyEnJnny9eKExkZwrdPf13w9Q19aPG98knE9EudV4stUz2b",
  "key34": "4epZoKW2aotjG95i9iBBoFXKMGBjZbGgKnyUuFQQXDinozJtTeWbnns1C1V2M9KnLBih97191qzr2Bzi7huReFqD",
  "key35": "33wzfMwzoRtZwkNprNtGBWnds2NDrUVHEHD8ua9REqC6zH2bVbnbiJd8nYGz9zhDUTFQiTZzfjDAn2S471emCeRn",
  "key36": "R4MXoo8L6aWmr113hmYNApZTipZSA9dqAJ43nbrvZiq7NaRBfUz8VZS74bMV2xhzkGrknKwKmaH3ii9MNNdm9MX",
  "key37": "4ChjFj7RRVwRpmnjwwSDSitK6MbX3K5wiyrqDvLpSeiKECfj5eWFp9TLuiFHGDRH43FzRNTmWpEcBnpone9kcFJu",
  "key38": "boJiGdDVHwTDsKqwZtNWDQ8FqMvPnwm37AivM9jZSoJmp1LtbdkS1JkH3ukjJKMzTgudhWwSEyPJ5vsvaTBHi9E",
  "key39": "4HY6T8LBFoJRRFQ3KD5Vn94XAckwQEvzeAkxr4BQYindY9vkpyRxfk67P3WxMWggNkswHVSw6tmGeHdXjERbg2w9",
  "key40": "4mP1r2jtqiLPr3xLF7rmpXvoqQ9jAGYtu5W2JHq2PGwtzViVRCEH9Sc75t87PaM1zd4vvvfdtmii661WczcTPYaU"
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
