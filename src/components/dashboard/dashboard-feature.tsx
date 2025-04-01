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
    "vqoFnTZWnXuPhh2NCtJV6xU8jcokojh4ntrXbWq1WvVBFbdXuKza5zt7aWGb9ApvdCinUf5hh87gTB8AnfjWVNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dA5GC4NT58j9gANmXw4Q5555HwYwm5KCdMFbNpCbtBADEw92cwnrCYLb17zokAAS7r5XSEG2ByE7jyBshn4prpb",
  "key1": "5bbck7wDXiCDsFdZYhCPuX2ejrmDWBcTnWPTd9TiNSMmYtFFE8jhZPiRVndk5xm5SR292hnrP15uEFoTecEBicNZ",
  "key2": "3pUhnrD4sQW9M5Ruu4NWnmsaxKgCKGngr3Z1sViRES8N2XLx1GHLWz7KeUzJm3CdbedBfjZDApQo2r7J4J8WQuF2",
  "key3": "24g5HLTEYcCRKebNNw65bfnGhs7J4nHGNvrpkNKTTpQLsvXy45XhTLjE5KbvXzeu9BRsKX8URuq7yZ7gZLZ47YuW",
  "key4": "5jiSZhbZcKgdGYqw2S6QTQAn5DbsPmGmNUiXNU8HjpLdWRjhqPP1CGwWq5aXsYHY917mDzwTcV9Xy13myPnLkWRK",
  "key5": "35pMvDXR95xmMBKCYYoDMSDr3MbGVfcw7ZKiEuprBGvmNxsVi86Z8QEsA4mXocb7Nyh5E6fiduVA3bm2WWDMAbD2",
  "key6": "4P7SKnFD5AjGWcVtwbSbS87YovjkF2FGiZi9ustfsbeBLVKuQrhakUCTFTsEHxZ5q3PwyTK9uGwd11wWJ1AnKW42",
  "key7": "2qNX6dShsqBPAjmj53YiSYsbYLcAMVHaPAuFZ272wENXpdEXiHGfQjU1hnC9uGDfszcboVMpexup7yJt3mjLLry5",
  "key8": "4bDXSELKFhCtPhvRmc1jfYLjHUzkhwKSTCaJsgevCu4aNb4yZBSR1TQPtt3dZib5DEzWRQE6ftWfTKNP229zyvxz",
  "key9": "MZtyApuSECp3ads4F1kpqTk41MALsqrHMXf7KJRpLWWEp2d6yANL8DpJzKRgniNB7rbWycT2V8DpEBHefiuLJpK",
  "key10": "4z7QuoQMNQdg3X3Se8WApHkGG1rLSxWxbwoDMQ4Dv7PcRFnJtHshK8egUkgRH61xmGcNEKUeNZPN1cmsviuebvkb",
  "key11": "347cD41Qi93AaMubxaVBeJPMuSTB1XFndLJQrJtA9vSdCYGVX6ZQRvC2Z6qgvN7kurHtUQ8H8nL5zYgJsNbqcBbJ",
  "key12": "2xjvicAUuzsnp5NMQBsy5qoYpwDwsWuoY3gNsoJzmVMHiGC3qpqqeyePB5KkwPLGgmJvqCbBkdU3H3H6dtmWriNK",
  "key13": "3qFMvw6HH19PTbbkVYZw7PmM4mKiyTyi99MaGob6VjSpguvbbi2HfR8STidSFvF8fRa2rk4Vj8CAGLgAfuxbCcH8",
  "key14": "qLwKEiRd3uQGwEQYD39JfhP3W4ZATbBzBz26GsCHSEmnzgx37UynpbbCR2BYQYoiauwmdxsEja97PiyKPgwGMEm",
  "key15": "65qfyJ4RY9M3ibsXX6xoqq8wyVReJYduXbtHfxxeHsvzvSRS5vUGDgLa8SLswJYCMr5S1ymeVHVHmSGSatPCr8Zm",
  "key16": "2BUKG2HVcU1s5Nt2GDtqCfFQvVMF3NyTGFD13QEVKLrUeSfAQjutsDQsoWwP2NHQ8duezaoUQs4WucXmKpvYBz8A",
  "key17": "5rdeLJHUcGMgyBNYK1frpDi96eMyN7drvj4Kc89MVecH1pmJSKGm7zS7RWd9f7KDy137Ets77rtRXE6oenxn7vXR",
  "key18": "3xSF4khxVozVkTKbyavv3GdCMnbQoqLzwR49vtDZUYpAn3WcsB8N5a82iBj8hNkdDQnpWB7ShALWJmXNEvEb2KuR",
  "key19": "4tPwAQkrs14UZ42VBnaevmhDSuRorF6ztgPvouveaxzhWEf77PpfXUyjGjL9dV5EwHNv8FkVuGhnqLhAdgM5NrLW",
  "key20": "D2sxdCer5H3K2HavYVHusno3e6ooZyRQftk2s6ssATKsCG3SUkEu9W4Yp38ZRfcpseaoW2qresEH25CSqQyzEVa",
  "key21": "5CRvWyrsBtyNPpxTnggq1ddcztURpQQty81yC2CihiiBmu6wfhrQjcZoDHfz2tjo7pK44sMKvZfyXE8ndHZToacN",
  "key22": "2bYayrgNpAbtJEGqaYBFSbKQNrQfDvvVEYoeTQHmDXvSWuShUTcwDfgEtg3CVvMyUByTw3BY1CKNN7hSgXfnvcr2",
  "key23": "5M5bgynJgpLbRXVGJM2wLyzQtykNbyGY2eH25BLSn2LkV4cA1ojyJfsuCJhC44g8VZ5Hwx3nWyKNPeZmcWd5Y6UT",
  "key24": "43rFug7cqT6GBR8MSU8pFRw6xSYZPJLsiDU3vydpJCo8SSuqAYBfdcdNazvNsu15LCX2NPFq7YyZvhXvXMrrPXtJ",
  "key25": "MLzQs5nhfQSfHdLJk2yK9L8LSq89CSXgASxtduqaAcdNx3369SAC7d8vDFAWb9A3Ys2PqwkCaUoGyXdWWnDSVqD",
  "key26": "3apdUF5b8gFUDSMqxxNQ593Nm8ByEALggJvMt4ozYSsS3EHpk2K8EErgDqn4vq2KwWywHGJLnp6f9frnrdELfvbh",
  "key27": "4iC4DxZLa8Z2pbMc4WrQuA5YunBMtFLamnYNtv7rfG3RbGrdcpZ6DMSBiNM9pUwkcum2NXWVcWW5BeSknTT52pcT",
  "key28": "47pD1VALuJkv8yCdn3gYqC15pmxq2Wt5h4UdpHkknJtU2XtyH3EFQ5yUggvhrVKzhvQKhsjki3YttADSLRFCJbem",
  "key29": "2dbXZuLCryjFg5Y7KRVpcAtaq7fFmRhPzP21F3ggR5i1cnD44vt1BHavHdJC1AwqokzxkSEtebGUNXVNfEQ1fUxa",
  "key30": "4YsYUo7pWGfSECHyoQpbidDvfGDZKHc4wNgo3YSWLk2TYaDhV57i9Jhm6G8T93zDaBXJrdrB6K8Kv5JJKwHScp23",
  "key31": "4BRGFgkwSngonJCDiavAHQzeVmFCCHjR2MQEEDjGMNsvFdMynxTcVqxMQJBnnvrZLqndTQGgnNh2BKPff57886GR",
  "key32": "589wV7JXrDsCF3qU5vvBzYSGGmnu5zRz7S3WkJvTDZUScgChMJAtGp9fePhuWcZenawLYLvjUZSCE2YATnqpPSZB",
  "key33": "43A7oZ3KE3zP3Mt2aAunK5vru2dPUwNUMd7p5iA5oZnqm4vRQkfz5CAZX3TpqSzvE1ysJ3bRUQg9dBz2fnvLW5Rf",
  "key34": "5WK3N5GkyCJgmGYRHfHX3KiyEV6BQuBPZ4NmXDpkhrwaARVcmjWhvU3VNZn4J49DQ1dn6pjbX3vhiZWTnMB4MEW9",
  "key35": "4BvKaT4q3tGFYYAjuW6EvadqPcNGSnQv9YhPXPSRXAjWM5RHoBpAo4m4zWAD5xv5vwioDFvuABYbRysA8UG6ddcg",
  "key36": "4v7Uy9V39PNETw6ZzRR4GYZNYjNYioeySm4sfVxS2uD7d5ks5KVq6udyGcM9UvC3pDCcssvLe15VETjQQMSS6Skx",
  "key37": "KXy4V1ESzPpL4xHX8knVUzZVKZYHPZwtm299PtEwnDUbkWn2CH3eXGSKzwLGLYWcX8biaNwouuxPwkYV8rkjhR9",
  "key38": "2Xf59X4VE5dBMZozJ6J8UyaUSmTD2D6T3epXdg85zHeoEucgSwfpnSPTnXYy1bWDQQBLM4rQdcaPJ9uk7g8H7sVH",
  "key39": "9ce4DGptT4dzRYLnmwmRG6vi5GZXAZb8Hwd4TFafb54eBYeUkfzn1iHQe1RSnHTHgRNHNfEjaz4a2jW3ELSo8QE",
  "key40": "4cdR42jAfC1e3M45LCqWL6ziPfPG5wF8xFQEkXgv1dkbmnUnYrXXE1PZux7i3VkQkcMghPYCFjVLnLWEBY3NbbaB",
  "key41": "53JG6Yt2J4eBkpaSVpLS78FGgPtFG6p2Cp6XPjtKBNGuyrK7HrM2eF7AoVpa8kv2FZt8WNHYQcV2t14wVf4bPXa1",
  "key42": "5GVW8tDUB2JoX4vm6z63kAnvrBMVyi1WxrY9DViM1ckPqTjv1ChLRpDMrAXnJyLUquGtizW9Z4n8xuvxe6czbEDh",
  "key43": "2t7kWVCvzmqo16Nm9hHd8s3HUSskc4WYKgmfrxhp6ixQpvRfCmikBorN38BeaFXbPdi5vS3EH9B1aakTVc84jxEW",
  "key44": "4LneDHC1PCMH6fjWPmKmfPwh9piEf5zA7UEWyN2RdMgHkD4B9dW84NVeiBaRMCnKUBtgzj6eoVqYfeyTbazXLTYr",
  "key45": "4TLsUqSBBaVpUiW1hg2jYd4vmaUcpxBo5KTFUYsZ1XteirbDE7PuP8N3dLnR8nqjeLvY398jYsR6VdxPjpAw9exg",
  "key46": "4C3daRXa3LEDhouWrpV2TD2afTXghmgseFL146mhqtAG1KcxCG8rHcidwi55ae48nSCvmzfYCQF1Y9wfbEr77Wjr",
  "key47": "4XE6EGn4PUiUrL1qFB7TGTqznD2qHUVhTUoLzhLLsAkGwq2NHhvopjx9oxQPFQTeHu9vq4nXcsp5TZuBEqyJJUDG"
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
