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
    "cHwRB6ayYCyYHfYgfayepP8xKccsinyMQWSCp1K8MYYxBtbZFj3Af2tisGf2tCf7NZY5oeW62vogMiQwKtGTvJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zr5Ka4SnKFejKt6TUydpnKAh81cWpCKURfi8C18JH5UhjqYugFRmJT89KpX1FVsLDaKM4mex3NY1sppfscZ57te",
  "key1": "5fA3XDXPdBpgqnkV6uXhhT3eoBUD2VwPvGGEHAaMdxTzHowGMzxwWhufadZJyxPQcwDBaNjK1GGMdnVTofdBKzkA",
  "key2": "4AEtVWu5P3Hv3Do9piKiL6zHNNc61KUYrjs3a6bPpYMS8JGcGi8ogvPdsYz3ucpUcTQRG17pio4ZN7LU6r9x1kw6",
  "key3": "5yAb3RF6sUiUyypAnXZMv3avj4CfTSkPRfPgFe8vjy6kj74PR5gnmKopeRaFVvcN4s8g3dxRSUQumpkwV6QBvpXP",
  "key4": "4ZGzkxmgjELpDgxrwcXLCN5m5i5q4eEZnJ3V2eM8H8f2r6xTm4ko86B6A7Um3BkzmTphaaudg4YoGFKkeBPqCwYW",
  "key5": "5RJRC6o3WrxdSLybZgxSQPfbAbLWja5ZMEYAK92MgyiydCJBTbambX97J3fmw2SgCwJ9rzvrunw5UztH6Rr9zz4r",
  "key6": "rH6aD1skRbvNZci1ALDqf1fZvwobHRQFdqWQSL1Z1jCpb5dHaEYGGj87q1KQYfbUNNTMuRhQTHndTXPwb6kSixV",
  "key7": "4wHfcd98V2j2DMVEAombFSuVD6eLHUUjZrJ5W8T2ywowUNRnWijg65T1ubVgXYApN9fyg6ykd55fP6QAViuMzLWK",
  "key8": "4tBjh9nkCD2kbRDgA5pPTyQBpBoxR4eHMKearSVKZ2Gywv3WuQf15BiCePv7tazx2m9DFyhnt4WfNv7D5fJ2vKSR",
  "key9": "4uCvvYt4wn9BCqZhFt8HQDrEexec6s6tXSJBHxZtYvJ3YB3bEs4vPSm6CdGbW9aHkNkLATzJyDwLn1EeqiY6UnRG",
  "key10": "5YHw3eYJhfds1AfaaWXwMnAn4wYxo9cQUA2d4UfByg63Jc7xXp22tZNc4wQY1SzYd84Nziqq8PsFZGUuR819Y7bc",
  "key11": "3pQss8DYJLMBWXFm21mexDwae8ujHBFuK33ZHsDLzJVcq3vASeatDJmzneyd6ZV9Ni7VQS3LHZJKbcFx4sE3xNqz",
  "key12": "4j2Vb8erNxcE7ickSmdzDkEhD2VMm4iGgk9YBSyQPPaY1vQnFvs3yArq73qUPDfgYDcPjAmU1vLQHAvL7dC33g2P",
  "key13": "5632aeojuXmdvKfWddV6mP3KyAbdZ253KRGi3rDUQRAskhV3AuKLcweVdzQxj3Yek113ZvqMicuqBRssfj1119XR",
  "key14": "3YdZgXSL66icaSZ35BZLHo6NTwavVpxw5Auog8YcQfbfZE2KA1zyXJ7AWfaDSnhFMgcy6dg27YfX5Y6BWASvPQgp",
  "key15": "5hc2NapVJH1doFFBdnVbj6eoVX5NYeza5x82UiA8WqSGuDo1wrk7ApTSHgaqisXg2qqZ6CvqvFriFYvBMdhGtFHG",
  "key16": "2jg7vbP4bqh84jiPteFgGGQQgxo2BB4yvFcoyD9yRqebQXgVeeg8Y4eDLkJ55ULXeL9PE2h4LZgcPVgYLYSzQKrh",
  "key17": "56QHePNBqb3K64bmgjexmXktBJuw4dx3WVXNwYqZWyW8J671hdXRFNVCzXwUMCCqRYraVwKt1KpAqYbuNpu3Wd9E",
  "key18": "3z61GpQ2FFhGQCD6269ece7bGhDC2jS5MQXkUNfC97VZoJ4Yx8XCUTa4qW4Dvq1bVUGFTnML3dC6MRufmXwXvBgh",
  "key19": "46DxYeG7nAXTWqmQYa1oopZWqnjazPcndjvUgBakqFHJvLNn3fckTzGigad3bm1F9G7fTx8BgiiCDomJKn4zn7wN",
  "key20": "5mgMfcqN7HGY6Bpzy1MHnbzxnFFJDMSxHDQf9cVmnqf84oyagazaBc7pSwoDksSoNj2pBWk9DDjVTYasScFNXuxp",
  "key21": "5pc5zp78Z9AfDiwdiJs964ovynPPAYwWf9ERgKkbegvT9h559nzJRFSCcW9L1ZHsQb63dqgJgfM47E7Qm8rR4VwY",
  "key22": "2SuEnza74fVLEqJ4RrUQZnQXeh2CTuGz8qtFH8GHCQcn6yayrH6RmR3Q5U5DRGXA171j3vX7md5a6nRZ6heCybCq",
  "key23": "4ZPfpc6C7F7qydMyHuS5kRXvGUuakb94hGG27qHXtJNnNmjiootM4xKJTYkALhSuWTsLmAe7gcFcT7EoRJ2tUCmV",
  "key24": "3B5Pvr6FTXa3SSXvJGbJn3MmCZ1oCVKR78hagnqHRyb52ViMKGSyR53YLu8hCmkTuin5tdLgiW21MpykMfYxqhph",
  "key25": "4syfvSRct9Uv4LVZMs3QGcku2FqPESDK634wVAUofQpYWfwNSXYHiYzRvtAEapHMhWAz454YtGSeDc7Th9MDu3zX",
  "key26": "2JJxFdX5jESgFS9JUx8za1XFeGz4iqoEkG8gp373bPAwd7zn1gYRZbFKwYHDyvqCahdzLFDMdedJdXrWUPosNYSm",
  "key27": "5bPdKDPWprAY4pXAvDgDrkqqp726gfujPMFmQ6x2XYdHCwY9yt4cWipzwKnawQi74KbKCWHGDnYBZjbsrGMYm9UN",
  "key28": "EgiZ4Y4xZRUd1VVEwcKVnd7iXXQ4TGbCdSMicrRBVgCcitA1yUbkVZxb6AuJtYJuK5chcUMh3MfKfitVEUZKiXQ",
  "key29": "4sJhRrDxphwpo5S4et1AmLngsRPaRKVkrxdVHSxuzvNHQwBqFxMzPc8dArnE2uUMastQePUEifBgQXepK5qVYsvz",
  "key30": "2BTTKtZnVxdcMKRBSLD3aMTRFvbnFnor4Ti2e8jMnCG3nsoMbaaMcAg3eHviP7Dzipm1tcSrEEjAwnuJzWoQiPbF",
  "key31": "4k32C1VgkhcREcSck8So5ALJTUuKu7DikE2zwFn8qpmsN1dmKBJ8rL1oLHPCH9JZ9pKiuGmi8EEUjVVokzHQ5Hh5",
  "key32": "3M78retxZEAvda7Y7U1To3mGi5RwBwmwC42y1mHdbVa6ija11k1ms7fpjiqmdfnKvymxb6dMLHuV3gzUAkBBdA7M",
  "key33": "2LBSADdZothvpPcMNwzHS6bk4b7nKwzWvzKuGn9NT5cSV7KH1qLHTyPS4447jxxrsX4CNDhufuUNE9v8VPj5bMhW",
  "key34": "4zCtW9d8kUkJDj5fNCDM3JREx4JybCokMxt1RcwHb2yiszQKCrFbCzVTKBhH1R2ezS2kAofghxwUVMugpbQ8DRxm",
  "key35": "5W2x993GNRKNDjh72GT4G9snocx11zRxMuU2kNkD6VdptusRThJan45pwJDRR5CJfo1J74xEtPekBNsy6EiHwtdP",
  "key36": "4KrxStFVZAt75rthCT9yeNMHnuHqbzqk7cLKFRjAWYYaAbKTd8zfQFSBUqK5X4QJ4pKDyqkoJVpe1gUQsyNoLJxf",
  "key37": "3TnyuSrAfAMPGhD5pEcBEvYDq63nnwiRBwyqDs7ExFz4SUC5rLA2wEsiZVTjQXcRBnxR3uVDHBxwgspaN1vm11dU",
  "key38": "5bwaXrJRsakqMXm7ohDmLcZTJsSvUdZXR9WVr6QdAVeGgfzezHXHk8hhPzxnFDxqchkbUp3BmkQi26Rkrd6e88u7",
  "key39": "47BvmgdodxFeNcckjcnTqfkH5JxQKhAG7nFMFiL5KzVfUMfnZ4JsGnFt2zzZwhojG7uHyXkxUKQS8U9KBKnLiFj"
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
