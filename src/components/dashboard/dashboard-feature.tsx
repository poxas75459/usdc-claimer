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
    "31ScjyygDnWhxxcZsh8pzREFEmsnKmTwyd2xFevV9r7YsAhY5uggsoGKHp17qPFTrr6na4BfRqcr4pJYNrYZiyEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rQcg86Hr66nLcSn1LyPB9PAn6wUodSCiNia5kTqehVMB4BvCWA4qbC7GWMyVjuhsR2raiZaRj8u5ggVQnjMBG9y",
  "key1": "3B8gsCG5SSw4U2M6k2bmty5Y5yq9vCSiiibvHvDN8Q5U4RBKzNJpk4hbKRCTaZU2SfgABtZE22Ajqi351RnAXcmS",
  "key2": "9tdAHbsuzvAgqHsgtsYbmb9oSjuDJZPB7v5RpDktbHwggfMGqXKz7Q6GmfegnPkPspbH9G3qmjEXrnD6hdqYHPm",
  "key3": "4S15fNVMnDuE2Tup739dmJUS7bBBDvpGJUr6rRzrziN15WRqdpc8f9HGpEixz7YEWhLmhd5eoNp2j8QXzcHiGMMZ",
  "key4": "4ZeyvBPpQhf7EsTi7YPP7CGFu8LpmwFwDvnFwpKQ5UnevCGT8bHDeRkLhtv2cMWfL93uoNMZLLPnj43QvPSHtPsb",
  "key5": "4uq567ti7QchgfDGnYwk1hLDUthkBGXM6Q3muu7S4v3YbakGg1nq2Ke4GbQoUDiAmqvfZiHWQQWd99YkDomG6CU5",
  "key6": "443HRLkEy96MbGJPfaE5EGauCAX5wnDArqmHtX45H5W5TcLUKSiTofvB3GpioJ6utZzhbqn9HaB7viYGfJku2R73",
  "key7": "2UcnbeLtAGpGCyWtZLvoP8C5Rhnz7d87gA16H4qnun3ZCzXywi2qvKtguuzqKnQpKUvxxuhK3CoEc21YStJTF1qz",
  "key8": "b3c9miQRtTqTXrv5FTgDWhwXMERogtTM2YLTjhXFhuSsPkgm56NWXEUFXtSS5B1kPxZRS1kA11oySCVLEPq3TC2",
  "key9": "2yG8gbHmeP1muEstWeWL2JMJRAZ6Ckx5fNJaCzzLBc7KveTJXj1vuwezRGe2yAYGdBSPZC6iYcDsPeodaXN6idT6",
  "key10": "s5FK6d88wStg41ne9Qmt49fqWYnzSDjevSPA89VLeSqFKppFqLvCqdDV6TBLQBKkUK63uAjBEhNHhBFrMZH148v",
  "key11": "2fJht6wqxK9VCG6VBuAJDZpgVaTekp4vRkc2Hddm6iUvBRWRUaybQb4G7W4xnqhHphC3vW4xHZ3H43NxwZNHknXL",
  "key12": "5LeaLFo5snSRrN6UBZ86L9WsDCRPgTaXrYU65k32uUHDJU1akw8wWW5v5fEu5svuQLUASFq1DPSX3f4v1WyLxpYB",
  "key13": "5F7kz5AHBBysEiFPt8BBVdAAphFVdhPL1r9jiMrTXJ5yUwRXy8SQX45FaJiL7XfN43y395RaRpJJby3ouqyx76qa",
  "key14": "BX7SRFhv4nWDEehnQ1ws37y75rz4GNjqdjYZkGreQ1LxS6UdVhHaLPHAkMCxuh5BvS9XrGN1yVpBBXwWhHpnSep",
  "key15": "3sqRyLQy4SHqpSiN6eJXjSEMzLpNAJkxqonwqLYTBP3ocigLiV4LpYrxeQ8TxmtnZpeNW3uPDMbUxFqnDnd5VMZm",
  "key16": "ZVaniZtMUSFp2VrTDLQdWoKMnF9sdPu89FxZUzCqiKrkUW8QhM6Yofnz31DUWQCvJwb6Hoi4L1K4jPhXp9ToBVd",
  "key17": "57DbN726h77bGJrgSXLvw8RqXSipR7JqdYq4RHzg1kNctXaxupicn6cUSirywyxxdhT4BaH6vtX3GpXntSv4AQPb",
  "key18": "57YDJduoCk1RmxnKQLV8TXggbDu87VJwurQ8CccaJCkhQ7YaXUmFXwSHJqwMU2gxU3jwUWWEg1fbh3nuG9Bx8dRQ",
  "key19": "5QPmt6RK97zrM6SNM8LnZFT9pru5FbpoQoWrrAiBQF439F3CyS7rZYsVxX3kpQftAi4v3J8GF1688CcDfxfsUtuH",
  "key20": "4CrrC9KDgfhCXTjqYjWQ2XHLnyFJmQjPDwhFK2tYZxsPNaFyuRw1dUhibfSDvqdepmU4HrEV6sjVzGYDdhLEpVS3",
  "key21": "2wuGY1nx5YpkkmYW431gSKoFCpj2MJJWc2vnFWZCtee3x8G56WC64BLhx2Tct3xMGXSANz5FUizTs1HSCFSBA4Bp",
  "key22": "4UxT3fTm5vBGcEQrZwcn4itjAAZEpQ6zgAm8gCt7idCfqZaQiJGV8uoYkd2Pf89K19Lj6U5iKCHggo4GWpfnQsd8",
  "key23": "5cbP8qubEXZyMSPyvp9R9tDLt7UX9TVe36raHu78VCXKUiUcUDxRzJQhTArsnGHfooQ3H66C2BqKN6JT8TrDuMQE",
  "key24": "2bdkcmVrxUcUwDEguA99AJWwYJMaxBi5JjSnggwtxCvxGCK7aRT6keLGhRLxion76UZAYaS8AScuFcFB3ZjA5E9A",
  "key25": "5Kj4U6F33k36bGPhUh6mqLqcWNtFNwnHJDtNAczYU6HKNJyiM5dQhWR52GpVuTGD2pHrLc8eA4AVHJPrQak2kKAu",
  "key26": "4KXpjvvE6tGp38v5zTBziD5dJUex3ugxh8YBaTyqGzPe4fxwCtu1nbDNmJjrsuFsmQ7v6tLk4wj8gDvY16s7mCWX",
  "key27": "2qjHeaXJFcnNRDhp1vWDPUgSTBWhznWRhuUQEJB4StHzat6QhmL9wdWSqZiucdCobKwwLTASLR5oRjdyBXxR5VwK",
  "key28": "4fKJyJUWsQS3xC3kmvKrw7sPHx3ccRPmEVUzmmm4Yv6szk1vJMDr1FErVDqJ6LjnkN6qZES3iv86iMznfZXuCoA3",
  "key29": "3eJFs9aGKJHfvN7CAs4S17TiX7qDTPKXV3zWBXcMA4GiUKaLWeWpygaiysacN4S1rZGasor2hbNbt1Dz2tpsvHdw",
  "key30": "5oBw5NRe2LaD54XKSHeL86YXR1wV8fri4h6voAxGrh5ajszpranW5wAuR1tqYjJBroQbxNYzRT66FHfBbDGyiwm1",
  "key31": "5cAxH1nJUpiir5m8BaxRmXT3gd8EAQDTDzrv1qrdiGu1PKvyk9xNiETeY3VwyiWFMRNAFLw2BR6dnKDXfGtp455",
  "key32": "4KrLtPojapxUfSMWxowQEBjpCqEDrPzsGVBHYgHRWqAUX6tGUzWGuKWAic3E7qg3KqzH2FC26YjY2s2onWUSNzmJ",
  "key33": "vFHczZrG1LGADT7wW6jVESh513XUKpMvp6SivrEiXz44b8wPq8cPsrrAVgdoPq2BVVe2ungPKBhyjNU994p2TXR",
  "key34": "5tEi2FFYcig12CQx1jfNqdpiKUR6rpcKkCGXzx22Ya8LzDXCwhvubZWLpLaX7ckw8BbrVXJAnNyLivw6QiGn2DBt",
  "key35": "2oCPpwGAyqQD1G7yfBYay7LzhsiAeRfnwLrZcmWNVbpRFtXbzppMKt2tAz2XTBMi9skRQFE9wBhzNyk7mVPtjxuj",
  "key36": "4Frjp59qbQZTdRmwq2xzYd6H1F6T4Rk8h1doebJt24mfeXUt3obXcyzPMRmytLjk8yB4GiMfodN7qmbFDg7recyU",
  "key37": "4SqghZB7oBZm5ami45nYnVj7H3TPYw2kDNnS73q5D983nYdba2eTfoSLdP4fLTFgGmccCXihHNAZCGfu5ZCD2nfH",
  "key38": "59DWuQSQsm2igWXLvuRTbRMNuCazdzgqAG9YeM3mHEAsVc6kRFtAkMA1iaw5QgdBUMpaaf2yN1o2viMn9NnWtkQA",
  "key39": "2rcCWtjXXcg9FGAqZcssjGMCi1AmKPQqDzDVSUPfyeAa9uGm394yqejjctA1RCHx1je5ZDtePzHWokpoJLmEohuM",
  "key40": "3X4qGokfiHuALR9SYf1xvocgh5QguwkRtrCDynnzyiMqCHJbWjaziRbbZ9DRtZHxNpQPZA3UvBXstHvxNHqxh4m7",
  "key41": "38QzA7x6U6LKotHZy6VUgjLwrDRVUbUbfm765Qn3aXtDmSsMR9Fq7TMBFuFZ4k3LhGNLqUcE4gF3X2CMPbN5CyCP",
  "key42": "5rrzAgajjqVTbRBwzFYcmYMzpHQi7WcDQW7XEyR7UwmeewVGkCuoLp2Hh9pJctKzVCPDPGpBpKdzH8rvcTwAYFAc",
  "key43": "3xVHub5dZ1Ux3Q9nkRf8ts6Z1EANnWw6yrGdtZYy4wkijdAYY6ZrYq2NCoUauGnVkLNUcuiSEQWmUrCqrt4EbedS",
  "key44": "T7n78KUg39BNJVfwavmaKhyz1Uq3NhXFAhMxYvf51jgiB9SzyvEUrfjC99dFLXAt8Qw145XVA9LXwnZs1idaw4N",
  "key45": "4wx7C6rP9Fd86ZteLkv8bUNTGRaUtH7aMt3rac9vGC3z4X69S8m2D4AEQiHzXboBjcP7UKgzTTVp4XVimmzBFjpk"
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
