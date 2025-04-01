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
    "2EdQ9gzYwPjVNjuF14Rbwd55RBUtRL7Eoy44yPadw2eTijnD9ya3cAG6NkNMrj8JzVWVpHKUwHL5GJWMfZaaBAdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMcPpPUaAo7Hd83NEEDZTNUVLFvt2iX4AYzu9RGKGMdPC2kLwYAugQgyUpzYfDQoLJC92mhsGYdxwEX5Wp691i7",
  "key1": "4SkmjNdr7hn3XwBsw64uKLW7bSay826buxhLFPk5V1QnkVuZaw1A7hF1F38TFCnMTstoY3RzkdotnBVHejM3cguE",
  "key2": "2jLR6nvgT3sMMcJBWvQMJYSzEKzEWiVwtQULcbTCt3vcADNftneiNw4DLi6TqUXUs2Qd7q2SCP2Bi8yEpzcHuu3s",
  "key3": "2KYXVHquCc7B5KVcBZSN9AQzezyRnNteEsUo327EjNozXwLoHbZHV7Q69KmgVDtWfobLfVANekBZu1Q4owBonaG4",
  "key4": "5mSdCxUBpejPWR7jtjwf5igoeuzu4B7fmzxCR5o3zpCibgAXvX2iGm6wv8jJ5TSyKWe5DYUmzTgihJVoqiLJeuXV",
  "key5": "va5izShG8FPt4MVhHRJt8Z8oixauNVekZcrYbZXHLjsCpuDLVcDqANU9LHNGW64UFQ33JJ7eTVdeVPjb7kd7A4q",
  "key6": "5SMsEkfmhLS3aHuboYSS85hCrUcFzHdyEQ8F4cCSyXdTi2iUseakMdfzYNkTevvDoZqCYndrmzSNQbRTsQ1QmXLq",
  "key7": "5rvwG25m9UKBUUbgc9i1j6bvB3pLvj9DyoW4A9Ddo7rerstdq2JrXvWyoyVqp3AxJfvpy3v7hGsMFtdQD6485Bug",
  "key8": "4nA73Syx2KwzAwaHEgMzCJiRTGSDbfwe56sHygkWe32QnZ5C2N8MDiHQmrFJuWR6MyAVvuSad54AczakhCWRYhS6",
  "key9": "2Xtx4rY1SPi646g3xSg1RpPtSpJmw2XCZabNxP4SrSsRsiA8wJPxmynMRjDQSZwUSycT5NHHkyPqUH6JdpEC9Twj",
  "key10": "GmroGcrYz5trbNgxTi1tEczr4Jh3Mq6xa4cYPq2V9CiERGrfK4FHdggmpazpSDsetVKKUeNmKPgocUudhgGzcPJ",
  "key11": "t1dbQCDXTKBFGh3WymxeB5fuxQSQ8uR5QE1t3qd6YmHtS3PSmHr6bhzoW3KYPoVKVF2V56Mn2ZTEG1qrqCP2Qk1",
  "key12": "3JSmZo6E18nBQgGzJ5Vo5Rhb4CWc5RYgzyobcggX9Jy4myKUcGxn3Hruu4UaZ6WC2yRCcY84s9LcNqxVyVFSz7b4",
  "key13": "2hvZNoDNfQarLdKUE9kL4yhLd39ngZoXpxHGioW5hvkBKFjhbWdFwPrnGhvVMd1XqNKjDHnrDyXQu5EjSeLsDmk7",
  "key14": "2XSRxA9N623jxSJK5bsEWxWRcvnSMcfvRcmu9QK2kYzie7RUCzAJWoBq36c7HFbrJDCNapP6y4WwPtQhvBgsWoLN",
  "key15": "3GxoUe58dQ5zmDZVucc4vFQHsKMfDweGK3z5WwbjJe2C1oYRMs2RD417knu41wdJdJeNx8o6ya1KuTFfbVRhx6TD",
  "key16": "5ieCc3fXFEMQwmtJtbBpQsBN178rQ6z4NLUbVE2DaNjXLrfpj3AYv3E4G5s8sUjoBXtZrCg25YjYibQnEbvmbFSi",
  "key17": "Xk5ooi3XLy8mjznqci6FrraQToKWppMdhdo7hzfAiwSosCV245NC8tq3Lxjd2effeB8qhHBz8BGHDhrBtope8BH",
  "key18": "4zQ2v8Qq1QCGjJJGKjVtHgx7cmH4ftkqukAJWNxQ9FCniXSVYwS8bU2U6qmUgjPvhT8kKDSsdauVzgPfbmeYMUHB",
  "key19": "2cJzAzuF7eqB53vv9VeMYLYPs4qZh5oCfZw2APzMTerA9oyHJYiGhJGVABi1WEiNaRzvfyuhSRZVdZgRUrd2CcS3",
  "key20": "hp6mnpXr7jnNvPBTxMKQw8wdTdeJwmLaUJ1Ni7zktVr2TSeiiW5WdcfsgfAHt2wGNmXLrEQp1LqCMV88D56CAcS",
  "key21": "5kFRG6o9WETyD7MXkS7AxjWQFsAsHvMppQ8X44aMA5MS5E16ENhLmXHkEn1GEBSGxREwDSZhHTeLrm2YtEFfaGkG",
  "key22": "4KJFpERrwSoLJb1b9pNEjWPRYe1tdve2HTXoWBHcrNVLxEhfuBPUM6SeBYLh1MzEd23iGd3QcAhd7Maed57ceMjg",
  "key23": "2TieoU5bL2gHYj7s36p9RngCkWUdm7QihrYoKkrMRvDyDcDWpFzToYdKQk2ZXxpAVbBZDLyc1wgq8VmeLLzaAYNR",
  "key24": "3J7ztfe2KUgtFpmTz1bqieHUxpco5u492C5WtjtoU6pubpZzeq3Bmjgqp77PW244w2nF9seKqdyt2UnfDqmYUAKo",
  "key25": "5HfRMibQZXe4snvXThwYuX9MsVFHYZeH6Hm9R21U8TseFgx4ecgzxgs5EjTToKAiXAFkQhGHhs5DQYaFfeD1ZYfe",
  "key26": "3FgjsNZ1exks9RASQo1MUsBsaF6UNtkGB9jMaWvrEeBRrXwYJqHS9L53vkFPdDZKcRTDUZ9KCbArTCsqNJx6M9vk",
  "key27": "2bAJvumkpvDHnDvF74Vmp2ZD8np3QCxKonrWrFW1cKaW61xNnnTG9NmaxMokg4Xo5LsvJFfB2sBJb2e6agN4X3Q6",
  "key28": "2GAGad6oCRsWdDFf6H7YUvesCpZsE3oo9MALxLcjiUc7zLKgQQtZ6kgD7vwFc7SASSXTHjcBerG313oW7BawZX4t",
  "key29": "8iKzec1owAUyncXk4sJh1fgW1Ck2e3MoXDQMMCEVcSJyghvSRhmKobmkRPJBQsvskXSpgX62KKFWB4Rf9yNqfD3",
  "key30": "3QBDMzHw8HVP2Dtxh9pNuoYqMxL7QwmwAqUvLbrEEqYouexfTVpdFfYqHb8pV3qEFAyivTw2kgfArYSQWHnqyAZN",
  "key31": "5ThDjDLNWJKePAsQsXo2syWYK2aNosebBwXGtWQwe6sZUivKQBV8Ypuz5jBAecVXoU2V51fbFaJ5DrcbSAcKcp9p",
  "key32": "HoB89ELQgNpJ9bEwtUKmh2JLUcky84Dwg6yZ86S63hgXLwSAxstwquoncpQAgmiT47efryamg4kuQkQeGthA4BT",
  "key33": "4jFY3HkBTqdNg8DcdFWjrUZdFHemwnsnLze5PKEcG4zv7j8xfj59kAT7q8VvreMG4V5xFJD15gM7YVgGSJ3LcNVw"
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
