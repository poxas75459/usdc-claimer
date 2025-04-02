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
    "4Kf7zdAsm8qsWvN9bFoKhQiaQypdeN4fXiNQMLCPS7jjTdKjRmmZ62fVZTqmz4g3WTATve9j2oQWoWeY1smMokXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EDu9hyUqnca6a9jQZfTNyYB2dnMgnRSjjhsoZN7TREhdwH8LYo2ske36JMUoJDGSsB2Ng21LBxbsCMYRUCpRGUN",
  "key1": "39tmZzsnh8EMKLMpJLTzb3LZzvFuDfo558EmV1YoJRPdBiwZfhR87RkmUJf5Mjob96YzX1Gc8NVwoUtqPdvBqyTh",
  "key2": "XuuV83ZrCmhAEtqRZkTb3UJQqHE6Mi4uqPJjdYmWGHCs7Tr1qN1BWA7HfGDwtnRwXvBz1fo8EsK5aBb7Dgavx75",
  "key3": "Grnbiqbj8QrNVDbcJeqU48TvG2Yw1FcwupPCHuc8ihoiPKMHBBoZWizEpRPE2GvtE1oE7khj9XU1FEcmjjHkZLT",
  "key4": "2J72QdL7FmTcmTRHmF6QHfqh2tmNpEcdgrumP79GxYjfwUhoVfDRPwRJ6TF1HYby8bZ76X6ZBASf3i8jWh1AmSEY",
  "key5": "5uzy965HZkRQJaCscWXrVoaKTnyLNCgWKzdmXH5rYaW1xos6xrwa1mvsCT56fv2Mexyfks4TBzpzvBp6dq3AaqCN",
  "key6": "4hR57Lv4GSJbs78MJchZXBHxFooku1PzKBYr4LKRmY2k332HxyhTs3y7zbAxUJmQZC2Yf2wd29bqr8mFZhf9uEMA",
  "key7": "5Zsj8UeFB8KVb5za1mRixzduBQ3St4T7mEHZ9qJ2W8RPBa3EAtnTctpMJRMXKafkZ8BSFZPkdiDQSai8p3LvHvvT",
  "key8": "57W2M1buH3k1PFbPr9bnY4fLG3EHi2GRm2vQscZkgFs1CoqfdeTePxbP5D12mRhLktsa3DNGTKeeVC4xKYpQnb1X",
  "key9": "3b1Fh8yo4WDv5NQmnfHDLXiFjgnfKHCEkzKaTK9u3iBRkZM1yrhiiaWnXdiHsz9Nh7AWJdePyoUhbzxVsUWb1swr",
  "key10": "4ez1kovRdptngAtmpRs3AUqit9xSxKU56NPuMDuFmXQZwRJEfnbTddVSQxtnMNyPSd1AkH1hXuV6fV7ojdepJcpr",
  "key11": "3nmjYDZ9548UHm8ztmqisyjDckExJup8UPqPdvvzwHBEPjZx2NiHCb3DsJfrMYHR1wWdDzA4TWUPimm5TZjZSTzH",
  "key12": "3933J4tBgAogbTpJujpuaQ3sVh55CGEPkRLRzwc6FRu1h7ctry739DrvfNYr7PC78EqBmFvQybBt2caMkr8wWbJr",
  "key13": "3TPSqabYY59HUrMkMMaVVRsLGsazynD9YQyUnCRDcT8bA9ewtnUDeTHzF41939JHmS8UKUHodfRDLoNQFhYPRbp6",
  "key14": "2sa6EvNgi8JQTDj1yVqGBRcXwgdthjyDQU1pdJXPYYeekAPucuqXxfvnjm2wgwHZ5cdaFSCNo68aM1Usq4F8v5EY",
  "key15": "4hHYMweK7dBvdgnEXduHDSceYxeVj8C4ZcV2WbWZpBhPHxynND94LPrBqvikWQcvYcdiBWGRe2wEhBhXJSPqd6Jf",
  "key16": "39WgZ5LfHTSs2Ah4WVQXraNZBVfTNPRF1YNfastLCNoWnP8Zm8qknv5awf2yByYAroRxmgP7oXUdPDkWGBhHPKRq",
  "key17": "5f7v6Mz2zGwqdiDh74c82LvNmB7VQyHuPA4iET1AM43DSun5rMe3LTMZ7gxczTYpoVQ93DuTFtXbcrR6JXdGJVsN",
  "key18": "4AQFvD9UvM1JCC9sBGBWZteU3yc4iqnYzeZbf67tkXBnBzpbQD9UPA81K5ajudrVks3KH7qDtYaqhEB6f5bLAXdL",
  "key19": "2xLUGPmNocu4gYJmcgchjwUsCmamjFDNs7YTPsFaYGDH6E2pMW6mJGV32xJY9KApv33pLUsMKqiopJYw93Q8jcJC",
  "key20": "5LHafxDTnhYpN2Vd4K2LT688C4cy4vS4eyavBVvbBMMfmk8CkRFFKcuobSXaPr4X8NyunGJpFHdz8mSDJ74bnoAh",
  "key21": "5EDq9KcsSZC8QhDmeQ4wi7SNoZaqdNvFJ15jD3U4vbag5oiEYun1onp3c1D1XdYr4jDrVTC249cnoywiFM2jTCyf",
  "key22": "23FsHf6Fq6rbhQzwUAxoNz31Dc1fk3sNXoFkbdFZDSJCACwxw25SMDGdtb2iio89PSVR1kscjMVmuZSaD5JA6uEs",
  "key23": "5LrbrHzDcRoisJF3KYTS4oiKz2RZwZHnumkyY3yGmbSHyo6ks82BFn5NzzenQbg1ntPT3qpdGFCaJaoauxQrqoi8",
  "key24": "3Gm2W6CKkSMgrkQKyntbGSUhYmTf9XxA9ec4t3pwb8C12Nmp69myLqfoNRbbTJEkbqYB5NvdQm4kgXgegP4jLZAr",
  "key25": "4fKEpgjCTMpcDtM8JbCQEdWWTuvHQjad7gZS9xdW6n5JdAtjkshjHn5KG5xDhfYzdCz6L8yhSss4fjmW4r9jjQym",
  "key26": "2o7NcuJB9dxXG37YKLYAYiyyvmiHqmoAy41S1ah7Gcpjdq8Zg6qFiYPdhhGBqBvYgdjAf6hurGmRbn4d8hqCjgNx",
  "key27": "2gDvoCDHEE2hvHVwH7a38FowvbaSs4RM1AythwTXYrCY6FLawkm9YjYsBaB4fnhqoMJAmU1Ya4fAaEiD5pwynKNQ",
  "key28": "49edTJVNy7zQ3NcxZTww5ShszoFMtN5wW4mJzTuFt4gkDGvx54eXgbgETYMhRJ9MN7iAQEewittKztdwLm1hYdQy",
  "key29": "hmTtsToS8shkM4PyL3ZrEmzvFNRCXhH9Mcnc2vnx6bVxMhZhhSgzCv9BWtcKU1dZwbM3greq9GV5HonA36TwZjp",
  "key30": "5nLgGiFLsccaE8Z9GsEqsARBtwfReYTGHREKjTzamMaVKyWwWSxj2vm6EbJ1XtrjdDxwKDxFFx538XTJvknfk1uJ",
  "key31": "4Tw2c6WJMB2x5FwinnuG7fsKc4sQPUkZixWnh44STcdHQAmL1MNqLBrx8RSNBv88KbY1m1gy5MLkWn4kYe7Z1bDq",
  "key32": "41ZzwLqf9ycg6CDJhqVC6CBB1Aw8hPff8aaFERETHq3pWsjkZFXTgXkLeoLhUDsm28iBxKbor2ZuKr4gBmnZJYcN",
  "key33": "2qGciF5dh3aPJqaUCZ3g6gWv1LmDZNu4A6zxEeFByHdHBWXo1GfPL2tVfGRiMFXaXBS8X7Ni1H34peKfS6nEHqj1",
  "key34": "5hGp9dB235UneyaHrpVbzFQDNRj87xMQPtT2MMfZEjTaFVP6L1sFTyGUNeopMv5akn5fzbXcHp12XRH9pMRw3XPv",
  "key35": "4i89gEn1AdQdJJm6yFnjMaxmRDN4VFkL3FnXk3ZLpmXGjzFRvAZPVbUVs3hnVc7u1iKnQTKMCsJwKCrMEBMfgPrY",
  "key36": "31s2GhV4Y9jncF2voQGpRRSECrtpdwfqVS761gMhyqSXn1esFjReX5n6syu3jqpWUWhWWyZnVpGKgbp3QwsVZHdG",
  "key37": "qEyKaVVGKuLKLpAZio5rfwNNkrEkHKgvSFc7NigLQ7RWX5TvKCQfCNJqNmoNJgAeiS5rp4cCLrndaRnspPt4TU8",
  "key38": "2NRfBeZ7v8yv4BkqJgguvQWT92f1wHCjQVQ22RDvPGNF7StkfaEr6efFNDsmMHjoNB4i1aorCfdgAPWucN7hrKUf",
  "key39": "2MhPjWytMhJ98cB8FGMpHYpSymNs7MrMXQxqNDDczpjtGmpfKKQPx5QeYPSp8wRxzQwRe41C9zgPSh5g7ZTCARya",
  "key40": "5rSajxnAyAK6Dku9XKoHC3LzczEg8eYUjqbfprzRgtpubMXeqNNEWfQEfNLLmkYkobbkEzjyLbvxdwRgcMggpGHq",
  "key41": "4vkb2CPfB279QcNzbaWtHmLATQvF96P5CcjwPyLtcAbvic9ac9A9RVGyRNfyxCmV7rdsFNz5r7oESnvRQupVs1j4",
  "key42": "2JRMaSsv2iDVbFsBRdtBAoDaUGE84zn3gyCDwbkDpKkcwR4SrJhAmHwttuckKydUAxbCT25cyidzH123Qhb3YEmw",
  "key43": "5Z54vBkXC7MmzBrkgz2XVbPCy6t1GytXExPgoyshTfkkpvhZodP4WVwQhBSGTBvVS8piPBp5Rqq9unbMojMrvhKu",
  "key44": "o2NQ571BeKoZEXQWSpieh9ASEf7dQ3LKs61oeck39A5rqNNRA985ryPBxWNJgYijFrAq12NgheMep42nbcB14Ct"
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
