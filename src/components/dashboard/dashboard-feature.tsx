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
    "4LyRMjj4uqw6wX61tYcYi5BF8oDtbmdNx6Db3FjH1re3pPiCa5Sr58ej9VrF1422s6tzahBiVFvN8JnCoQen3XBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VP9kigp15UUbhGuZVUzEmyvSA4uUnDKdoyvisgj6w4kDoKSupeByWhQtVHtehsTC1FafzuV8AHvvoARwcgL55wg",
  "key1": "4tbk9F7y2TJFb6FJ51CgmBFq48vdvF742qs3fdM6wVAMSMRXcFPEk4nh8ekFZd9UnSvpvpvPm9uFCDeLrYMzKcva",
  "key2": "41Kj7MdAtJZXPTJnnABQEn1JmDfDX186VQwit3fSgBqokH6fnTJPRAMSD1ENRXKDafSTwJ21sK7gWLxQEakFqj6y",
  "key3": "5drsNYQ8UUWKYuifxYg7pVwz7GnrTMeFy1HrYj3LpqF1n4thhmxY734xxbV3EdGVJJwdKZ6q1HxyZmJRZtKebkTn",
  "key4": "wHVizcgf14P99XDinsm1D78GJPV8M6Tz1qumoSoCR2ZF8nV4k7d5PKtEfmCFvGvUy3zusDpNsgNLBsFAVbThWAc",
  "key5": "3PpjTzYaYoeZZX2bMHyPz9yFtK5oH23CCsTJ32dYtaZKPVKNmHYTjFqzamHZPVfA5ZJS4XDXM582ovrEQf63FYw6",
  "key6": "TQoMDvk3BPsaMgiBEnbojuwui42pHWfDyDPEBnEJr2dAU5JrpDV8FCM2UQ1XbLKUpiKxrkDVuKJPHx4u8S7wSka",
  "key7": "2SjxR82WwJQSZX2fbubquiWnGrnExvQPC4z5JeXoKbz6MNUZ3GFqt9rqjMdY3FKGvC4P8woFjz3cqQePPUnVBjMr",
  "key8": "2XNt4frwsyQy64Vjm12LPB8BR5CxPJWeLv6H6YC9qTNzBXaYE2ywjvghxLdmhRKNC49VxwWZhQhqJMFeKBMydaiq",
  "key9": "2Tn5g4Zwu6cYnkfngrTzNuBRjVD3QAuxJ6Ewtq4vdnaWwqaXLjKLTJiyVnCxnZV5TPNbWaJY7BAsXrWxnwifEbKG",
  "key10": "2wRhr3qXPr1LU8uj9vaU6oxEoBwQRTWgY6sf3Zgioy7nRArxAqJimA1FVBZsg23bcs9kPWDpzQqP61dT7A1tgTmh",
  "key11": "496apTVhuJn4vbcuopC3knTWTW7mpcZgjSkV8tKYaY6LKLUS5vZQQKASMHvXxgPsK6UU4zCrVaQCJG3CkprWmsSB",
  "key12": "2jqJPK7FQrzpHGk8SMtqZQYJ8JE73jrM75LzLByWEipbL3RUv1sZCbBR97XjaYThPeFP8VM4swQjQanuNnyRgQkp",
  "key13": "22WixsqnstWrmRKw5674cq7HW3L1QHFtY3gvczvBtuwUzaGMggTBHfX3WWEzdDuggKWAgtsCbD9BZW2A9B7SHcWc",
  "key14": "2eXcvRGtCe5kLZyeHNE4zEjKHyTUb3PEXgbJowZUzF8uLRg81tjE6xBLDvYBqeYnKEtG8p5ikm7357vuRHmk8wkQ",
  "key15": "2MvQhJBCbP74cRKyCThmPFy1myfvZ7sfezkoW2QCBH7bVWsyUsFcP4L599UPSpG45qbQN3XY6zNG9xTZbgAMpc89",
  "key16": "5Sp2wGXT38G75jsRTdnR6R48spVDTTe9ZsNvPzVLaMdJuVjnZSNP7fxbqmq6aNYcSinBFYhC7i5dDvPmf446TWUK",
  "key17": "3zk9ofuhjm8YC8Tb2KNDm4hkH4h7uoGbvD3PkervLiaBvBdW1VeHCZHArwhJNFkcK4cYgVgoZyTpcdU4Yympn6da",
  "key18": "5TdtTjXaB5KFksfrSTmRcJgqjsCKnBKJp24PJVq7iwtGuQdEF5UVJ6zhnDDXNUWrY1fjioygVbXEZntyAaDyAxXh",
  "key19": "51BAXuCustr8FYFYLQDLBPvJ78D7ZgJjgyPjPSd8G1f4PgYtksUbZMV4YBS1777WiY6sKVjdUPwNeCw3ywErYUj5",
  "key20": "4hWPhP33qfp4GVxp3LP1HinWzWQBNNpgZvkwkCzM1YaAb7NVEGMQpyPdWF9xdpchM6K5xJ32sfyRxy64KVN52wq1",
  "key21": "5g69NC7u4q76sSVgfoQrzFpJRs8WJCPmHZA8Yt4XjHx7YFRrz3MyjjHXvw8yRnjrnnfa4nHx6i9TAMffvmXKdXDi",
  "key22": "43UwRwweAXCrDqGWyAztsCGB3wgZSh7WMABpUy699TyJYit4GHdk6HRm27Z9Kh97brXpV8djLgqCRzMKzje2G24S",
  "key23": "5s1FjFqYgg8qxvBTMaE1DFd8gnSB9NBQ7fRK7VdYcXKPbBUWTqWKfGE3xMdcLaY2V2HLMb8ffLZYo5yLGjj5wMf8",
  "key24": "5HLb8odggYyUXV4ZqZD61ia7jXY98DrpvMb3648YoxMyDa9TmYyeBBh4Z6DBswx4pajV64iyY5p9U9kJbjht5kGx",
  "key25": "5MUir3d7CX7JipYRhGXxVxUDCoyFR58Jy1JnZgx3kw2UBpqLFjUKw1BvXZaf53QYMoGywoX5uQnh3zGttUnKAuMx",
  "key26": "7AeRGmRP4mLRds24DyxE4w6tRUCcwg3oz8dr5ZiKaDMZumhAD1A7f54VKyHwaHJAY6p4Kc3PU6qZupUgWe16KH3",
  "key27": "4vobv9WvosS8AQgTBZrHMNSxNA3Qc27ffr9Kpo1FD31mBXJkoQtypJNkyV6j3cYM5ZHRmSabVZKvWbcz2dRvtma5",
  "key28": "gxaBhTCc5R4fiUnZV7FCB5qUuKJYYRZzXQrUEjpEfvKBuKJX3oju8kCAm9zWMCcWX3nh3RchusAHo1JoyCrvPnx",
  "key29": "2zvMekAaHg6f5LiJ9GUHQHUvisG9xbyJisGsoQg4wNGJU31Qsr6HaA4vVFSxVXdEtLAaj3xrQQ2bNtRaj6mwLEpc",
  "key30": "UiL3pwmrQuRZzCon7dwJqgW8hvFgxX8bK9XxwuHwKEmUXFqReTDQPnDfRcL17pcEv2YtqM1UVVA9x4kC1qfPiS9",
  "key31": "2uYCDmEB1useCTbuYLCf7sS5Bc2GoYuubRRyUZmiW6yFbmcFtqB59WXeAPE3AqYisQdWZt2nE5oPeTjKkP6xkc4v",
  "key32": "2cisHbfBRmRS3RwytpkvmRNQuZL93dBCU3xfdquvBX2vXmPPd4SiLdXLASfHdCzf6YBvRE3PBpuBM42nb6pKCHTc",
  "key33": "4wfFtLZoLGXntxX3nwxJsY5RtT6heFkRvQy3prbtkfza6GqRZDbQpB2GVvZUNvCJxbmdGA6AYLke1tM3XEHwurj2",
  "key34": "4pk4CG45eK6XoZd4XaqJiiFuyHanH5VDZiVeY96KtzXo1ZCjErhm1FhQDawXnBatvS5uAmuSir82bD6W2WdoDu5h",
  "key35": "3dJHUhEQz3b6kLmNbRrUGzsfSrXuUTx6wxc2UNo6QNVL5rh22itJ6BGANEPjW1e8hjfcuJie2jzHzpwQi3HZkKRF",
  "key36": "LeA3uuNjsxJZQZv21MEYxSPjycgJtMdApFXrheNCkH4XJtoMKMqhpCDF8MaUVzuWxyj3nSpEcqT1L5TRh5kHgHm",
  "key37": "3arnxeS7Zz73TtRneu8rhpjBe1vEunKRCRcRw5WHCiSPqY7wiKB6Z7CcE9xYu4rfNgtY7dFceneLrFbH6jG8jGKN"
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
