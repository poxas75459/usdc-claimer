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
    "4SbUs8SQZQ34VTGMHa8dPsWqXN64JFAWKSV1grHULDw9oNFibAbcJNupWAkMwEa2Gy5i1nAJ1nLbXYAc8rZVofWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kQD8nPMK34jiWJv3kNzqtsfCzfGbzjksGQmw8snQnnxomxCvqMSnbtFxyG9apDkKH23TdmwriGsyHHswDMQxHwW",
  "key1": "2J7UL8u2fZKTBf9hcStHB5sEmnZodh3nR32VQBnwysEAuP1BoQy5AcU4NDzUmmHxsezGH8z1UyQmSxeYxJ4Z1t8e",
  "key2": "34UpoV1bqqR1G22f9Sk9F4NCadTPJjzAH8A7sjQ8qCgdHvXnR9r7bGJLrYtP3eQ4BCA1kZiADD6upJrC7Ni4oCt8",
  "key3": "24rfXv687DBcPTAsKV7qs5KEtn7U8F7j9KXDJJrzMt3ipY9rN1r6zFqphY1bssMKLjQ2QHno8DAqPgZtZVu9A32Q",
  "key4": "5uUYZPyAofnMzd9Nb8Fu2F7uYXCKBudPhE1gvQnzhWQgqByzDgB2u9cFX6SK6aPfMz5a9b4dpjfF2k8FDsvKiGGA",
  "key5": "3xxkQxDT1CFCREe6vLZEajdEoCKME9vAifhLuMVXkwZ4pYmko9ykCqq7QuWPxkM9b9Lmgt8brqUchf1sFnxn6SmG",
  "key6": "FTuLGBwanqtSyuzPNxqdTsoUN6q6ftXe6oc4J8rVcwLU9FA72zxEpjzfHFp93difLFC1MJJv2WNCuopSxz2zXzN",
  "key7": "46Y8DEssMUUcoKncLtfbjxa15G3DB9LGJTfroCqNKU31jU79avkNd1KaAYssEBagL3qgS7k6qdTYSxKzucAtXHfi",
  "key8": "5cxfaQC1CfHoeu1NaDD5ijys4gDRCo682CQEW693AqiTknAMnczNsKCtJ6VBsHunn6X45crwxBo4uERzQUtDqzEg",
  "key9": "4zcfA6YfErieFDtsBmpyhWppfcPNPbDrvMeheDeKPrXiNyjfPQM4t3Y3XKcSmL8etud421qWuxYdHJqN5nigQakQ",
  "key10": "24xeejYtmqd2jVA7cZXKKSmmKAtDDje7pkRLx8K3qVnftbgZsxXx7KxCAzm6onbhH5fGLgTfuwiAWVSthyTZhqpT",
  "key11": "34CNT4CfJqRpDmsJRLZpK2ErejdXfaj5audQdqMEBUwAWPZ1bbsz1QMJefYGMoXfucT1rxPYKZajVhiz6XnuMpyN",
  "key12": "d7omd3hUnjfH14cKEyvoA15XWhygDV77cikJSkN4EsmF2d8LKfs5mwGDDRn1ikmynRyTJQtft5n1mWsyx5U4bgZ",
  "key13": "3UH1Lig6Qdgpf78YiPVFVnjMAD8sAfHRoZYgEAr8s9UYUeUSD6KTK7sbENRSxwjHnhYtGGX6T3DjtasUxsGQMHaf",
  "key14": "5X3DpfcswU6xHvLGv8syUwwiRC1vhXQEiKAWF559DpLWXEa6RscqiudFJdoBC6Q7GvRj2rtNUwKHz4gH9DWGNKXz",
  "key15": "5kdCUfZv1skTxPvWF7fprVuK76Kq3gS226h7fC87C1A6sSjTDJBbedGyGonTFDnVf7Gd3LKAEZGn5dZrS19gxMd8",
  "key16": "4HXKkocTs1H2Tj84qQFKPSJi47SVjkU58Py3Cy99YNqYyfJoXVmTu2zrqBuHL54PvBuMunPA3bu7tQcrh2MwZ5wY",
  "key17": "4DMxqPwVVyDG2mD1wsT1SztZcighifV2ULZKrdQ7iT9Y6UxhZBAJMpgHqphPyd4JgRBzZYYSd2DNvCfh7SCvZfXd",
  "key18": "391YGEuafVwaNZRTLmhw8jK6aJmBXNj8gmAgjLtVVBAjhUoeRzCRGYns6LBzLvUb5zpGxBqrTXs9iYUphqBUUM2U",
  "key19": "4G7wni4veLVG7aVoha3ofexy2cn3u6RozhYkppGp6GYqDqRtE3Ts7VnHLtLUfWe3c8QPB8cAWLZTCPq9wZNx394r",
  "key20": "3tznVyzQJcZ4U9N4mpjiXcSp4TjegB12ZUTmwqbX9KrjKttt8WseLLZDwUTg5qx8xVqzhkEJTzQYR22sTbmCTBs3",
  "key21": "4kzYrmDrjRY4cvAi9VbGNP12cMGr7AbgVysju5JSCuu2oExsPnxqWNTVZ7Hh65gSxJc4k6c5Hg8B4io4EwfMAXK1",
  "key22": "4i8QYBimCRZYojt3qBkGVjyw6kWv4T6ZuqcNCGiK8iuRytPprTcye7Rs4GWSg1hR1Kf1ztihFKBgkMSYQfiZhhaH",
  "key23": "8bFkib6K42BERBybssZmiozsmUktsajkXcQd1RHDG6Lhck73ZXfFaF7SDfaF54E5eqnPhc2dsvf2sqAUC1mv6j5",
  "key24": "5mKte46YRwAUL57iXNto15WiivvTJTGLCydvYnTPmXkpyTSzpZKrkii5mcEno8KpQua7zrRMbW4uvARJH4kk1WMd"
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
