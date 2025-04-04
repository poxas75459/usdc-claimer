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
    "rc8KJNB5S346L5M5VsJc9TRDGMsNDsdKBYWwbiB5LAe2K3Wukkp5TjHQZK5bmovgCbF7jRZcDNXw4CATLyi8hi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ay2nRdp3scRfE2t4gKE9dWombfaD4G3dHdZRGpdhCThGcWufoTGSugkXKWiPWKqx3qpybUnfnjytQuzVwAo4C24",
  "key1": "5RWAAE9aWpptxNRnBx7dT7Fkd5bNkJpcJP6Y2dfCw9MeX8npZ8kNuSZ7755fPKcXWAfnhzt6u1zuzebvyJv1WvmF",
  "key2": "5CDKHdo7m7WHXSQRVm28FroyumGsjoXwNgikpco6DbymcBRwwcPLzMv8d7jn1NE5pNUUaxHhgDwpipWw1bNzNZmC",
  "key3": "2xWM2cPZMm17KXkw3gymGg6aKaJe74KQ7EDWWsyrZ4JdVV2hqfEnVwMdrXPaGwGn6Cysr6PAJdt2KLTrTjE4a7aW",
  "key4": "64GUw7PcZ1urJ2cLjtCHsdL1VdYNzAhH818hRsrkKGhGT2ykXM4QfXFJ8JEovTvNWiVvdHBou1N65y1JtsYqQYZp",
  "key5": "526214SpoE3tzmxeH3SAfHVACNmVJ1ujtsPdCdMV1ZQ2EBMimnbtBkxBoEeqQpthXeJA5KBTFsxZpGeu9JgL1vQP",
  "key6": "54ZRpX8A5X34W6Dg6F3Bdr6cXTp8MWvvJysnXhPTpJEgR8Ti6Kp5fs97bi1jNW38pbifawZSajE54WsgzEHkPCK9",
  "key7": "5krjrAAghfB8zJo8Zy6hvSfjK5ov2eKxRRNwdj3hkaUtcTqoz8SoXJXLADzUP1xjy7bvgWMqCRYwgqYoGV8uXL5W",
  "key8": "2eByzhaLfL9tzdiv6hFpsbkmMgN3mWgwG6bX9rdejY34drwjWS3WQ6G1YtLERjp4EkhP4jwiJQ8tJ7HXv3xC5iEn",
  "key9": "3QUAV8iwXjM4QDUADUHfvwUakDJmwCCoQJas4xPJza9spdpjuoJ4eRvaZXzNfMxUgXSuqwxhpcY7f7YVEk8fe9Zj",
  "key10": "toQBHHckQmDhw2Psat5ybHXvtEQbcCucp6m8aRLwXqQDuMnZqvoxkhvkgbirbiqUjWMi8UKJES8oE2r4ezWsYza",
  "key11": "4xtXz7Bt9zBtWaghJzLCqbz63aXafd4C5Ls2Cb2SZXTfnRsvZaVpcmfgu7BMFG9Z4FNZic1LJbMHqF4Q3DkZfDoZ",
  "key12": "5zDHypE2gbDAYbbhWqaoBFHL7hYYmpuiphMMsg2vkRVpJiPinPBTd9zb8Jh6pYWrzzUrpepmbQbUe8nH3LkzEJir",
  "key13": "5PcxkPyw8oAd4nv6Ks3gENFV8ex6M4jFZBJB3A1ZFNDXp2dWhEohUJVJnXfkWhhVu4aqKzYWWcfgZi7oYTfXarXu",
  "key14": "24DxjpngyeKapiDxst5UBneSnN34nvv8qb7r6WGkNY8ijcWReo9FfqZWs8ZJuXrzHHX8sqAPYCfH1aVqbyk9zFgZ",
  "key15": "2VqpHqu7aZtCk6a4aZVzqeeKgcwDm61aRQRSzG4BL85DNiCpjmsq3nNvsitBqU52DpPTNXouq353cZwEjtCrHbh3",
  "key16": "5W7AwJevo49ke3LashHcTASefVBZH7dvAqEGHvWsRWs1SjPtTZjLFThZ1UeL6iznAK1Myz1E1ShD9LDyaZ1JV6oh",
  "key17": "4FBWHUTwNTu8gKhU2LKp7p767HjMidgjuERQW9HJAZiHYFxYRfcj6CNGAkdm13HDRygGfRibHTnoMZmmpbYteJwQ",
  "key18": "2YVbYgAswaPMhcmSAX8QVjHQnEABjYYWo3G1G93Y3NDvgDafh8BNsb5oVNud5Cm2h6ogE2iKuh2krBmG2YUZ6BxD",
  "key19": "4ubGFcTirVhBu5y8C6J9URiPyatUCNmbD8WyzynCfDxthmTyDxGseAudx1UXPrrjc1vDK5HZVB9rRoVpY4E8b7qW",
  "key20": "vQ3JAKvfGeL3TL9AuvXVMDDEQSnfn544PuD77bkrFUbQdL53dwfXvFiR9ofYtsq7GJ2dxiNQd85djWviEdg8zpG",
  "key21": "58r9LBBkcvwJhverwsSyJahxmY6HZ8xeBcoFuQUTyD36wLjP7KCJYee8rEvnqSHL2VFrWKeWJjC2p622EpEBTPs1",
  "key22": "4C5wUvaJP96BoGyMSboeTUwmHTuLkeQbdj9FMRPzfM6KuWMtCb2j7QqhQC1AEcpwyFFRgRKG2D5sYeY3dhSzJ9YE",
  "key23": "VDkgrE1BSbcKuvtoUxWQPcxLYuH1inPTN3v3NuABB2bVvhE5D4AfvGqBbPLPQzEtHH7qhyeS8DdSA6xY63kHsxK",
  "key24": "3K4LJSckjMq1rf48o35WG4GnxBRk4dRYjREtybXug9juqE7RoveqdEvbUz3rZKvDbsvCQmaMyj6TdYnDcScZCvwC",
  "key25": "4MA99Vk27Cx9coG5BCCTY9bv52h5GCk1qNMscgcgu1vruwYc337QXsWu178EaNEnW3uF2zc4vnxR49qZKLaW2k6n",
  "key26": "4WrVNsULEN8KBUXKdXGQBRvXuFC9u9w7RXCSZ6A2qijnxAxFrHK4VyVLeSrPYdgU5yGwjF1Yv8Qs4vXmZyQgYpvV",
  "key27": "5NfdnECudT1215Xs1fnbWm9x2Jj4aYnBX5XwUKL7xptaJamKao8AwihETCoDaBCew5LkXZPaPkGwnBHWtCc57Yt5",
  "key28": "34Uy6bnKHK1exnmb19ko3F2fJZSWu1gbUfHQLZj8FuYsRexsAMqcSSKFfmHUcACSSuatGfTDwofbSRGjJNGhn9gR",
  "key29": "2FE3P4q6KrDjHBari5UHdSfqyA1VqCXjX96AHGk1MwUJMkieequftbjDCoiwH4HKriQXZQDm4fhx4Jrbd1mFXS1C",
  "key30": "5CNvYZ6i8NELC4gqmkpbNiNJuPKdocdbh3Thks8s42B4E4Jf42cdgdigtVveLzg7qreZGDg3NnDgqyfbiHTBf9R5",
  "key31": "4VjTwiLJucTxCZJtuzNMd2L6pSLV7XKf8SBzyu14EeqonFfHppbTBXNc8yAndAJkuEznn8AzRK8eXPbpcsHBqmNn",
  "key32": "2nA5XPXAveQrCQNR6adHcytSpjmMKi3LrgsGK3JsH9ESCfhjCAzeRrehcXRafRUyHZFQDPhH3dPQsPVsPssSNhSJ",
  "key33": "rujZzr5PJSFRVukwKoDupBHeajHJHn7cAL7wLy5eWdeu2N8piBZw5fYposKXwLc6H3XXdTaumtoFTKiN31t15Bq",
  "key34": "4LTU9aHvedKWxeyTMfgZ8MRLXLyCjsKEd3qKXF6Q1ME9VE8urpoFxe8NPRowoysHXZzgU4jWTDmNkoPFk8qimhy",
  "key35": "3cCm9NBsVB7HdnCoMc7pwggDW3RQpzyGkmBztkCjqottikyPu5cQjoKQNrPpk7cv3Kmp3kGKa76XD5pEP8oWH2vM",
  "key36": "3RyFtSygDVHSbMpXVYTrGRXrY6t7ipi2JaFEgUgi78BtZGKj4A4xCkJxCN6D32o9UbWAX3ijphsAwexUXBAYaeby",
  "key37": "3dyxqtPvYeknsqnVZk3QH8WisJcAu3mSHJ2c5GnmMqdze2295q1urLpg3pQE6PZ3SQ174SQ8rwgTvgK3fb3fiKRo",
  "key38": "ffPP6N84rNDxe3NwZ5yyLYRt6hJLTHht5CXXRHend1YxAgkitwXdn7UVqrj2v9u9zJoxXedtMWXQge7U2559aj6",
  "key39": "5NRLRWcLHPwykBkN61RSAugSwWDTSqJpS16ckKmTNkVCFJa59ntHwGoQgyDbUrA2n7XphGpWZYvoRqkKZQHxHfCy",
  "key40": "T9b7jqJ1TankasevLpLFUuJCdMDTRSngnbrUQeCK41vm7qvwP7CHZZQN5FRjxzWiSgtTLj6sJgaMfFAv3xZvYfe",
  "key41": "3bxrxcLFs34WJfAaasNFBS7wZuSP9eT8Ah53DGriCiAssnKGEhEFC4i9weC2u2BR1F3ZpfWykHdguieNcydbv9mP",
  "key42": "3tTi8Z5ytHgZdqXRh8Bx1xx99hc5siASTuA4gbykpQXu1MXFuk6KDoToeoyssLuLMbvFJnqCDUmtTzMnSUHQWnwY"
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
