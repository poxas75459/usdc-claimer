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
    "pjBDBnu7CfQc3bd6onJ5yz7Bcdy27kAccTqQoS9sH4wYVUpC7CBhgX9a3ifHbiDBcNeaGbFBEdzonjEGWLFrme1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3irHXpk2m6PHjfbk6sihxcDWAya1HeQE8HLvTUp3ZjQsHGT2HDpLb7d3c7qbizVnnoswi2WXsNqfg4tAPQTmNQNr",
  "key1": "5UR38G7cSWvZytCiVLjMMsNtd9CDcBtpTd9sMv6gkXnLLo8x8Kzro73ryE4QUccb45nb3Zmk3Zp74egf1fTavdrs",
  "key2": "hPz3DJVPKmkr9ktnHMmiZDAah3ymk9vuS8mTKV6Je5dWiuxAb7VVTzz41nbLEdHkrWSFUuYHpHxvvZttfQe2MM4",
  "key3": "5cB9s2AgZY7dazcRNMErj9ve1PJ5wjuQBC48rpjdjM6e1C1csqHKVv1DZSzPZkrZoQcr4iTr5K9HiNRXRV9GExNz",
  "key4": "4z7QL4r1GiDT9U7ooKXfjavHgBxdTX3wPX5hVfYWPZTrUhpdBii2wKQLh6FjiXoLbbcBNmoNhVEmHRnbSTCMHmud",
  "key5": "5SjUFnq2F4CGFWkUnMXjv5nan6gn8GiXm7LTDv4vDRfQZdc3aSrofAT4d33rMwxPUXatB43AzBF36JMv2NLsnxcH",
  "key6": "4MnxEB3Z26VZC4oh7XpKBjoTt6VjC2hkuTiUHMDUrysHtXeeDuhVuJARV1MtTXFrvkJoaFwCrTZ23BLhCfjK4Ht6",
  "key7": "2w7euMaQ2zMgjQHc9H5UzFqeQmGoXXuczDB76MebJtUzAdcxQVgSeJB8Q5udBKKpXSgf3eggkJ4rWJLMf2Wa9Zci",
  "key8": "giGVMu2PUFLPVGJkuEGHAuaZJzrrd6z6biRcjkVjZcwkTy5pby1BM5NYTZm3ee8zLhLaiJVDWHF6Pm3MFQmHcjd",
  "key9": "4VADwAmRwfHmZgtkw2tqJeomKqod5C5GM2WcyVcH4k2Y9yXCkdtS7fx21zHe38ynpySs86ZA1LEWDtwkPKg1FMwx",
  "key10": "4uC8t2JEHfWAhvGfHDdmibnaWuWzbweVvT5Yt3xWo19HaHhNLNTUd1siY7gNMGUwNCHttdeVjF3nbARaNaFo6Jqp",
  "key11": "WrHPv3ffSb5iSmUe7Ddo1SNToT47be76ACtanCE2PTxRJp8vGkgFzdvvtWFggaTLSNDQimNbUBnzHyGqGA7ESjm",
  "key12": "4YH95HtQ6acVcsPm3Rjqu7gUP27qq7hD2R9Xbr6NZkNAEpsayVeMw181HqsZk4QUZ2x914Miq2YfoBGQurvscHz9",
  "key13": "3LofgXB6YkVTSE6skDhMAC7Bnp4yHBUXcYmcwK8UPPHYbP1HX41Ncsu7c2NZ38nJKWHzdgpkv3JraxvS1v4qnpph",
  "key14": "4MQaDymTbdvYNi7xmwPgW8PXsxaEVCGmccgA5Ax5xPnwfGrEfDWiBNjkDg3EVsdAswGXveDQFFKXdYkSdaYr8bEJ",
  "key15": "2FSc6nMSXBJqasRK87q1aNVxMrVP8WA6EBhJeKLJrVnwE6WQ55oAw4VYVui8K8bEyCjb9PML3tHJNEppuSpmVBkr",
  "key16": "5hYdSQZ3VHzgfeF6gMFKuYZ1LEzyjBqZXtvjxtV7Q9ckKmJSKwL6VFMYmrxj8QabT2vrLX9LeHvhUHKzsnUxE6oA",
  "key17": "222TbHc6gT6XVJYpo6rWBT7rFcQmhQBG4RfS6T5ifEYDJd1ZKsxE7ipZg6MiZ24dnaoGV3iCnzifpDq8fVuYv9pV",
  "key18": "32ZaALBeqQvw2BKAr1TCXBJoKQv9e8ruW3SzpRT1FAfsbAAH1SCRTXLm3X6s2r2uStLN8wAq2LyPk4SRXRFsv1Z8",
  "key19": "2qoMd8UjBntwRcgdTcDYydzApxPf7WN9neDEFZyhfTK54bGHg85pkAPnuYymJxzFvzQrvtC1pbzCZRvgJzFDmri9",
  "key20": "3LiNxcv4qrHKbaoRi4g3NidpXjznpLBztC8m75nR2vKKbwdxANBp76vHBWfmpno187H1kyyTg8U7aqzrGK7s2AWW",
  "key21": "57GzHnGyF1e3e4QFhej1x3cFnPV2GeDrzi5pd41S2Ytuu6EdbL6wqtysuiFfeVJtAszTwAtjwcKooagCMzb5myCk",
  "key22": "4wukt2iur4YLRGo6yUzPhufukbPFBpoB8qN7qPoMqNgxCLnLywdUkDZufsyEMuVJnF3gE6yq3a2CjDFU4THZL7s7",
  "key23": "2Mp7rwM79MmrVv3Q2moAxsbUQxaHKULGPpZYXdnmBZqj9snw9K6a8bSKmPy2kSPiV2pmP81zgS1zzNppZS7n8bPX",
  "key24": "3LEQmj9ikdnzEPYxZWYJDGbpwTvZ8kpoyDmdPG5z9ste3V6AqgobQ2tpgzFF9ga6szXNcgRdwt4r16KFGkjC3az4"
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
