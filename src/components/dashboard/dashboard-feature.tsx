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
    "5TtmTt4eWEL3mTzgJxrypqYV9a6m8w8HSHxuhisSAA7f4jsHNT1KTm7CyMgrRPzgWdutNNQQmEnqrS4XpXdT8P8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EVsEnGkMa1xc13Qy1wJzNUREanXduyhVJvCEMUbbTh21akLzNWVsCQXnbwzCPbboFpeEx59iL6biqyEkiuK1rWo",
  "key1": "bXHBjDYb8JhugSLAX6ibeQTvdbo1kuPnrjVEUbRNQ8eeQZr79BuCStkq77Ad2ESNVtbhqBZ3g3wfMdaCu23ibyh",
  "key2": "MVj24fWapHcKkFCnuWpwFRDsQQ9bhcEVyBqZeow7MKapd32Hymu99s9z7PKkxjsJtCM8emTkbor9oZaL47QVgon",
  "key3": "265Ccmt45qVdCHpjdCQoqX2rGDX6gworTJc8qcFvWus8WyCg5ahbnPkHPoe7PxJAXLQFDB1WK2eTnwCUsZbJFNaf",
  "key4": "q2ZFZL3NbSMNRKxdnxSjx5f23bBLSbQgHdpkzhAAV5nK6VZSDLQeMaMEvF2KPtjWPbvSgWbwq7QKcgimR4L7aib",
  "key5": "5c5RSXerJ2MHHWo48Y4Afhx7GN3HTPvhUkueqYu4HNESjFqAUNmFCKqdTtzShBfgaHPfw1Dmods4hMpimCn5rcow",
  "key6": "E5RawHGjU3bymAnWTSfHfh9owbcwNoZq4xH37kLMNrzvZUq4jJon4wHGsrArBEj5XgooLxkBLZA6mLZbCwmwt4e",
  "key7": "5PQ1bhacdDDb1Aq4vUT3j1jjSbQ4jawdaSfsDhuWG323fV3WM5xMeiYtRLc7PWyzFTHF3eAeqYYxPZ2NSjmv51V8",
  "key8": "121ePrG4913ekop8jgxiF5a2QRA1d6hfJUyNjcB2ZSCwc5ZRwsMzGrScMoNe9CzGRW2fv4UcedVMrB6mir9UsL27",
  "key9": "4LxQ8AtDx6oR2ZkR3EcXEppXT98ewuUBsiJMNddaDYU1qwgzFLqWEZL8mbHzb9jZFopwtbXKPBx4AogY7wSh2zKr",
  "key10": "h9wjTcosRZA1QPZWKqNCw2Dfaat9775sSaCMNbwpCNVdPYdjXt2Wwe7oxiTz14MVqiTF25p5WBTAAsVHEQuAdJP",
  "key11": "4cQt3xVgw6X2osbPY4He2mtfgNsogQDUcQxcQWqoE5hnSBZvGhVhZinyarJ5DNL94jgzt5eKfea6x4mdSuFbXmBG",
  "key12": "4pmfquZZfwo1jWZmBf2PQMdvzY5PyCvzWWz7HrYTthNunKciPPHGhCdURbqFMuJpewRXEb7AyH6jrUHdwDCaZYLQ",
  "key13": "4Xhin5WsQb4EU3jqjPNZ48dmKdz8gaYV1Z1CNbWU1dPiPzLj2pgMme5b4sbKkGposUjESvf5RkKNiTXBaj8DyjsF",
  "key14": "CXEn6AFjuhEQSysLxH2ogWAdhzoWBD2j11p49nuvsSXQJkk2dUBpkRwzgAHab5PT3xoktdYZjEs4Hu9cnqGmQX4",
  "key15": "rqamSQLxRVARHjxarUuX3QwBQn8WseD14xgkWdeYXGT3LEomy9TUhr9FMNzHWemjYah6xhFGt2gwYAhpLZ8Lk3i",
  "key16": "5Zq4iKuBsMVt82fboSDKAyhWg2i5S23Tasjs4oVpxk9ibT3RzFJtq7kV6iFREbvV99mqVq7n83d1KKHQfra8vTJN",
  "key17": "4RhAs8PeCuFEqPSwCUj6LYxpmBsPzRMw53yeSLkXA2MAyPLYJKRyQGBWUg1PUVeQBeSRcQRGmewHvQE9ednrzU2F",
  "key18": "UexicsUpVpYYKtndUNrFc2tVze5GsLqFWR7hDxCjJuZKiFhr6EWZCNgiHhSExT6BtXRPKv2QcgG9HP2uC6rRfBn",
  "key19": "4PwbUURHrHShusn5HPBbaeyePWEpxyduGs3VyVJ4RA2KWFu6qHLMpX3k8KzvypY8YULVcwxRCnzX7iX4QNnVmoix",
  "key20": "5hJbXW7gqmSqBHuTBMmvhkMuKVWv3S1EfrYaty5bwQCa9HD3fCxquFL8jwhVLi2QfaGSp9Y6yX7NkXSaAadszJNt",
  "key21": "4AomuhgrC1FrfTZubkQWUgMP6qV7dBgDBNLAsEmuhoxu4Qoq4F668iL8SpJP6BVySUyGdWDZDwQb8tBNcVYoXDkG",
  "key22": "3fmggjGjvmUAd9jRgwEkDbps9nvUqDX6imf7rrUzYGvLq3wPd2QET4BCcCvVLu9VFucdCPNnVnvjoj7osG2AQm1Y",
  "key23": "VkCXaDUVu8GMLRev9oqZtmRadvXWWQEsn8qpS37xNDUxqR8eULLyXh9zx8rFaamdekVHzKhTKYumzbqkMKsma1x",
  "key24": "2N4thUYbuo9Y7Wif5kmWrjTmWHUaXhWKWSZw5XgXqZLUibMTKbCaS3TMDRG6aFt5FAtTK8mjYDxMtrVAoZLZnZk2",
  "key25": "4gnjBCcpYAPAAMU1ijP5Tn767dhjE4dv5EHaZuTf2BCh2C6WZKXjqhE92t6CTWY94WD9FkLaMVrxPUixnBqJx3L3",
  "key26": "5LDQygDVD3qNz6NJT3QP9Ya3ButoABduDM3zWdvmtFoAkpHhBuRJ3GEGHn9DQi6sTMHqdG2vSAyzgF29X5GA9AUK",
  "key27": "5ZxfaSBpzv3NVfPWsoFKamndDjccDusCn1cm7tq2KXVySvjEMfwa8MBLtf9TysBbFK8BwHkE2WeM7rAzDCYDP5iw",
  "key28": "4mfTFbwnRYwN2H8Yu8rJ6CyDUMQbM15DEuXVTWz28JsMVWmQqp6Q9MGQqES5SjMeDchxEu96DHAQfuVK1eDJJs2L",
  "key29": "EhUFFv1SKeAfKt8rRDrmFsfJ7ECDujvcnKZXcz4Kc7y7EqK9L3TEQmJzQdBsV5onfELBaD8LvJMPkiCUEzkRTwp",
  "key30": "4KNyvxQyZoiWn93pL3RBHSEHPGSVfuVft8n6bfRe9vHtPhyj6CXDn7VUXmbW99f8ca1X1eX3mM1EJisEJHgaznyT",
  "key31": "3JVujuZtobRSV7b3q9JJqzv5XrPEXCsTCssACQ81tZsyHDT7t1texNvXhAvrkvVCbntQMkHsFXdszLmPoJRUUDef"
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
