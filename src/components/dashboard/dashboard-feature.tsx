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
    "5UTB6JLmeJUA1EvmQzq42VpZqcgiTrV2HGoTSi8QWp6sZSX4uBFtfH9eYTVTPVnzLGN7LJrTxFqQBioRMqpbDTGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X4wD3E96m4hGTbiBtSA843KXaubqhQkj7RtLbqPLnT2WgLbvooLDabXoX7QdFFBjHF5prbPv3EzJjbmRJXer1rs",
  "key1": "22j2Mz6hNbAchXcAHSRmMHb28XhDoTyc1V88mHfUizwioJ4rGHo9itcRMuXj5bT7kFGK9pnC8xNmnaYvQSU2yM29",
  "key2": "dDtEzRSMayHpYsTD72vTp8ELbnJKd1i8FSurTFLPNkoVSjNRnCUvvxDAUxVdc4mQd4B9VX9AyaM16voY5mbkm1K",
  "key3": "5q3METkAgYvcf7xy2wAGkMiugXRqtfqfPhohWFiRqo5vo24oJFRWKvoYiEtysoaxer4CyYs19BdZ22ePAoXpa9qt",
  "key4": "ezBRQppyxVXBGGNeBz9EpzHJTQYuhYeTPMijavbjid3vkYRceFH6hDRwdM1XN4nf9i6EnGARAEk6FtX9jy3TjU2",
  "key5": "jiLb8sjXfwirdq3J3Ks8ehzsYk9s9BKT8yzvvBK5pYHQZG9UhHF4o9QuEy1L38VjNx92Worq2y8PAb1FGTdaHiq",
  "key6": "3564V2DYMiS4ZbMBQbuS91JMex1aNMH89ficTaEouwwUNSebbfh3nU9vU9msmf8q9Lsh19hwJiuv7bZwwAULT8xe",
  "key7": "4N4eeiHCAdKf3fnkKsqFU82ZdJq6QUgePknxXbjpfZAJzyTFdf7RLjt3BoXr2M51Ws2PfMgwtePxkDoPn7moaG3z",
  "key8": "4Ccedi6Tzhe8ExdiPGVGNSKQSfLB9641gCbscTpPNqru9GadgU9sy8jRAnWnAko3wecEMwzNkUnge24V4hothp18",
  "key9": "5sEwpFFb5SH15rsrCMKEm6Z6JYJbG5C4984nCGQMCmVZJPrh417isWDEJnaVt9sH3FpHFBrqAZxiPhbshmhnQWkp",
  "key10": "3PPwW8T54UvJxLzBeFsDD6gGm8KfBWz9KQJGb21fxParn6BCtoboQe71BKRtchyS8vBJ1NShw6LEjgbaHfbKcM3d",
  "key11": "4kuHEmF7S1rR9JFPu42uaP6Sz6XQaGZzND9G2tQWGc2LeusBH2228bNXmQKqCqEDnKpFufhqAZoKMigczS9ReKX",
  "key12": "4YAp8qgc1g8JuGfcF2cfWspC2PYbdx3zXnNBsaWhy3dVk2Nk3ogJwEGLttmuAPs2LW7EXSf5AH1Q4C8Z4Mzf7XyX",
  "key13": "3RER6VCZ8FsgSaFRUnDYe6AQeV52aKJDSDfnGdsLodFTR7nWR8yzqkXAWrVExiVCQaiv88JCpwKnRUeJKU4Rrvmk",
  "key14": "3JiAEo1n2KCLF2N86B7mUg2Cjt3QFrnwE1EXkNFwzPkkDP9xZNS4Jdpn61ASSvSFL7fNPrC2wmWMVX7RvJpNEP7T",
  "key15": "4YE537fwp4FHvc4i9zPUXafjPz4SEG2q982769E5M1MhzyHugkwgoMuBHRDRztwXEJPhWDv6yambdVD3599AnnSt",
  "key16": "2gri4iVzCdVZXojtAhhLW9fxAH6EhBdKyy9ELVQsKzWXuXkcipWRKy3emSuBQV6VQKjFcZGuxyGCEAEVfNkQyNP8",
  "key17": "2S8wKBoAfqSAtrhNLsGUWdpb7izoZF6Gifmh5LnEUpu2H2Y8Tz2QucMohkGm1BpyQ6bUyr8BM4vxjK7XEr6YJKVb",
  "key18": "5UXwiWx7NhFz2udXhdwTv7x84bE48RGQA29zxw4vf1QbfPjPxGA169u1BBzk43CX4baTddHpJmQk987eVkyEsy8m",
  "key19": "5EZz7WFf5Ki2egWVhZ1Nnu9PgZEA2EJ5hNY7BtWFMrdfzoaGpBxJzad4JMCgeyZcheDXcqHGjPASnXdHd4PN5xKD",
  "key20": "5io7u7vTuduRNjBJSGc9NY88CAKfick5pXwVHgCvLxnpN44HzTtEFJ6ZVwowSgGF6cSo4KcbNem9XSc1tgWjoTAa",
  "key21": "5v3Yf5qZAvrZx9TPVx6NLz5x9LGJbPhbY8d4hWv7r9EMcUvKkYtcdMSPJoygnpRmu9tQ9m82e4bVou2cXogx1RK7",
  "key22": "5WRopU7V5kP9QLrKQH9so4LSEicDngsLC3SqKLhDJQPYNXJvnKs8eAgJguZojZMyY8w34aVe9X6q2uF6WaNGPgvi",
  "key23": "3iLf9ThsxneyEwMG5Atrq3Y29WJKtMzigzdvEUTW9z7r4NxpEbywmSm7H2r9v5rKMLrR7e8twSiNyCdy5EtwD9GY",
  "key24": "3tXRc9GqyfPzN233cs9YJ6H3B96F4WGnCxWx3eiULytKRyiGhxK6p9Cg4B4gs39t3iCVuCuz7N8tZipbTy34QZDZ",
  "key25": "x6mgaiXzpvs3Y5yBYuTcG95YCkJRXBoRn8ToviM1or9QH6ySfZLN4wLdzhLZ8KnJnzxqZXshMbZtZ3ZLVxffEDn",
  "key26": "4tkGpMeKFeVg4Mdp5pLwkngQiFYSgGiZqRGFvCjxxmA8bdJnaN5ZFotvqf9vEfaeLStugXhtewrjWy8dhfcMCePD",
  "key27": "jAvfd24C6BaNUYjvnuGBmicBUtuqZWhEDaLYv5khetYJCD5XwaZnC8vDXgkbNa7VPGdLoJCFdfvG8r9xdzC8r9X",
  "key28": "63rzBtyoun5UrLi6dQek8UsmibRqwwd8S4npXFU2h9S9j2K1Hk8qSTkzr865tULHFhNmQCzYyd2DjXA6du4Q5zam",
  "key29": "2cmCt3iFzuTSJbXACWS1T3LpDLEzEPgw9PwVNQWjRoiKRU1sXXHB9VX4tTLCcWFqCeGmfVqADBrkrHhLH4haEjws",
  "key30": "49r5cQpf5ziTpamurKy9yPwytJkqGNWUVtRK6jvkbnhuFJR7brgNsdqz7AVBKoHv8zfkGcsVMrH9CzUWW5vJtKDb",
  "key31": "2AbijWUhPp8CqNb2u49jPhARp3dL2YLDiDZi1qb8CJkgK3jYLWztdZcbVjTjozQKKdm9NJgb9jiuNdMNJc9QhP3j",
  "key32": "5p8tugt7KrDN1zk3Ak3iBQwY6pERwktsXUVEPQyTWGEvB6vxqSjuu1D6T5A866DdL6yRFS6xvobB3vcA7drKrinZ",
  "key33": "3GawRdeGTNYoUXeYr5sLSofttnTbYPr1gduDZ884fdC9uoMMtPeRoAC6cmbBaByAtycLwmynRY5AkV9Mkv5bvgDM"
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
