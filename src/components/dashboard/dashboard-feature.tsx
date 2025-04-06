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
    "3cnj5a1HRdeJdykw61igrHRcjrgmTW7z2UHsMEi5hDYJicre2zo4oRM5eDhVZXJzMFSD5yJLKzzjZcG7oPvCZGFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yoo3aHBNFfUkbsRaYCw3ZzTD5CzKXqeEY6BzW7o3VjtLAVRzCsEFnNi9kHsycbetUkfY6GHKBh58PXppvNL9N1Y",
  "key1": "2Vb6ojfkjjbVSYm2TSkVesDaJL6i8ttHLUDRg6ryFBAnbuXUs9UWTadXctjSrP3sJrrrpFqyKP8wDijY9mGEjefP",
  "key2": "3XkaUuzyvhVTv6EbR4BMDjJfmnrrrtZ1PmNmTAnv58jrQ8c29iKJ8FdoX2DgWnG51T3RGouatwZdqGyLT7mApK18",
  "key3": "2rz7izZdseUEbeZKDHb9E9qNijMQVMfF1xoYG1M9YKvkdEhWFfcoyYRbZUdoJmgzkjuugBZU9gPAznygozDPCwCo",
  "key4": "4c1kY3MBbyQftNHMmSpK1ZPXb4U6DoZoekKf7J2oHjaGE4wZe8CRQZsfrEGaHzbs87jNedhBbkKeLTDHdNjqucja",
  "key5": "5mKKqRqybTVoXZXLRxb7EkVCSzjrkvHyX591sE1VjYK8Jzh3pHQ6PWerMvUUtuEAsNRtnZt7u2KMnqWvM2aFiKpi",
  "key6": "4QtoFbesjyHeRzSg26tYaSi1hTb5qVzFJnxxuS28pE2erN7jE2xptviV825z9pggJ8JSNXicmFdV5Tkyn4RovMn7",
  "key7": "b6fZfaxa7RqctFSe5je2WvyKyHii6MDBM2Dv5dNcdqAZzRiXHzFZSYqhGRVBM2CPykpXu85AqYgTvyqfdxdnPrF",
  "key8": "3WKCL7bnNuERdcVvk1hfvwU4uRVpKBRtcTP87NGD2q7T71v8faw8KG55FhrJkLtyAuT41hprQ891egm8ZmVH8Tdp",
  "key9": "59YcWzV6ki8jXkSWsyVLrEGJvX2fKYi6cZyPBg6UcsvuVebyzEL5ahyeBzUabwWzxSPSRPW8kRZK6X7kfSk6gRNW",
  "key10": "5UWarg2U3tx1ZnndTuadDt3USvLWhreSK7agR6cz9ZGpskdHHey1okSZxDWchRppsyki5ZMGKZCsXSmgWnWzXqvF",
  "key11": "hWDyQuW6SRRtE2dHgVAkUyLUH3JimuCH5UK8YTaRL8gnEWtjgc1h8btSfLrsGBnViq3S1zpCi4589Yc5KAqK3Dq",
  "key12": "5ejBpj8Luuc5qHTa9fY2tbyVZRRadqL8FrbbHvGJfNjofn19638HmP3yqdSUUmiPmyUmwnrRFZULXF5FJPJLNuae",
  "key13": "4KY8goXEagL5cVdHVRfD8v6JTh4GAA5yxyqPAAEiyAr1AFfTVmvv4p1CfrLi6dYVDBENqxQ3ZV7pdi49LyFKJ6kN",
  "key14": "2zjMANZm1ijb5s1fgY1eQKr55nLFPVtYpefXFryjn4m6gQ655Yneu7sLq4u2kLkJKPc5fTeYRtMKp47Su7s7f9T7",
  "key15": "2kS4K1vFC1u6QWyj5RFRp2SD3MKL9jnaNs8CPXdLTywxoifoQG8JebpQDRKrEPeUh38NgmEGNoHuiV6qWtLw31TA",
  "key16": "5STUBrQgKed1cPNHrStDajYC9mJEPhEhx5ReP5DsmAmmDbYtAwCRuKxs463YUYcdiCgGCay8Gtcz3VJEXS7vganp",
  "key17": "4LFxrdYV3oYa9nG3ZTXk4umh6VXgbMpZRJHf96rDQQwP1P3WwCgfonQEAUjvJKiACt5AynF2krCftMdkgMHTXMc6",
  "key18": "3koWkgY3swJboNZYm9osohLCz8zV2tBSja9CJcbA9cPTSUnxB7JGTQa7vpCWEJrpDLx9UwujWCWiK7CViML1EE12",
  "key19": "2Gjhfuovgwvnh8MfSWQKu81ab9VG89FJ8Lx1tQb3GNJQj35rbVeBeUt2UDQiJ5FpiRJB9MHX2nC4oCqzz2S43VUZ",
  "key20": "2LS2b4tRFbBZ4TfqBUQWijZzHp3RoxwrpecibEaJG7UQRkeiQ5kveH8nzqQcKmbyiEnqKH445HP5LcisaReXeLvY",
  "key21": "2Kq2b47N4c3y95dTepetc1vSsFAtc9RdMyb3obrRG5nJ2LnfTbXPrxxqN9XUqSZdQj92oYeaky73Bk58HJvNjygk",
  "key22": "2bnyvrSqNKsmMk4HWtmctTfMwnd19ix83UfDZo8d49NR2CHHZNbK98p64GbJAtYNn3K6gpcsQcUSbiSo21ShnMHx",
  "key23": "3rP7wXQu6pweGkb9vzkKk3SoSFw619Tdy5cUcxjJzfTYzMc4LNcgqy74GBDYqCJeyeeq9MpJcwpPccWb2vhgzFtB",
  "key24": "4FANupgnDyZs3rJGrKpFBRWRDAWWWT2CbxEuCxdUeDNfHDsmC9BVaAvh3TDhPLFNEvvjQEFi9FGYdyLgMyTkRsNV",
  "key25": "4U2ZLnhBXiwMPFKGjvgamPsPGhvg8PWUNGehNhr8bMYxojTC2JmqPhgeGGJxYdq7P9ZphadKpfBHUbtcGXpZdPnZ",
  "key26": "4hyzap11yYoheS9qr27EcZK1FGDjVgLSQE15eA7S1Zt1V8wqEK2nRg3pw65xjdTnodDbRQ3vpRbW33xohLyt4HEt",
  "key27": "3pXq29ZRrbGuKD8awzmFQbQJz1NvAcS9o8bsctALYVyq9w67ZzVTwVVJnmxuYntP3UvePk4KZCYJk4o74eBuqaJw",
  "key28": "466ukF3GwQSRKnqcGEQw8Sd4Xp41KDiZFyThpLXenUuyDBjQN98UwvCESMF88rSjqaR2GdRjq1TsqwoL3fpVKvNF",
  "key29": "4PCTZyTbquwoSHpVHJxabZ5xH1LzucNYHur1z4vA3fQKVD5jjdbeSjUkxHwfQ7MMzebhAg8HiopCe4QSP63HJyQM",
  "key30": "3iAJn8hKRojdhsZQB4VdKMREfPiTVSEheHDM2H8nQbA99vbD3KzGmTwQSHT6LMyg3Uoga6mh1Pem4153usqoe35"
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
