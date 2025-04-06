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
    "2cdkFfvYcgufP824A6hjM4HczKfnRVNUorvYSeo7V36FbaSDNfhXZHFaPwT8akV6tHsJg9L5S2uocLcvS6ukAE4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BqcB47xGfYYVz4vwTaEiegU4D8NCKowWe5NXcYH5AWxJoDrQdxGcdPndbr6w2an8uLFmdU99HxFwHhQQ2TrNunF",
  "key1": "wN5LZU5XL6uRo7uuPNMde8LBYHwmj2WrXUJc5cEd57QpB67PnEikcEi1pFzE9ggCzZcz8oN6v5ZKccMQmSNzVTj",
  "key2": "4hbFhz24hma2MeumqTR98Cte1CLYXifdAu8S81SgBkJUKWXeojNaFrqfcny6SP7mvYHbeWeu5ENwKKCRJmbTZgDx",
  "key3": "2fJ8YLXsqNyVS8WPTwQ4kg2eioyyQR5Beur3LuWChLmXgpVeQP6RBcAgMfthLfNZGXwX8b638pwCng7mqry9J6MT",
  "key4": "5JqudN7dqw9CN3E3UvSaCDxZPkK26SdUZErPyXwKKaEVjLnaWnyZ4gorqGDu12AStuae2daJ9L8t4TSbMQpZU1Tm",
  "key5": "4jgD1Zona4SAvjtbhXndLSfBXpf2hxkwRtxWqEgmaRaUJTFXmLoJMKv9ikpB7wY6LsntU77UbUzvZgXKspsfqNNn",
  "key6": "2PMMgWUYBGg3ozFdnTMvqrWCP6mMVz1kBN1JNCpnyQqqd47F4nGKYs8ATDxWYVhEADD9ofpL3NkT63PrBkmPAr8i",
  "key7": "2muNjzbivJ8AeULduCctJvn8hZz16VTe7ZFDWzPhGJmASyTpAD4nZUAL7U7xgGjBDX4NyueKw82tfp58SqsTTsD9",
  "key8": "5G4cn1DPz56XYgKPLuxWdqXtvktMMZsEbJwU4JEnZVWks5W8MPfK5RxPAT6GoVDXhLQt5PBUzAEZstmzcfwwtZN4",
  "key9": "5Y9hzg9b8hvA95Z38C37fJufWdoGrwdGpkexrhSozBYtJYE2XQhxkW8qEqSgyxWBeAYLsvLV9xeKQKA1iSKA1Vdv",
  "key10": "2WtxPiGBfxGY3HYaQinCMYPERo1HNR9ss4PtF9J9Q4BDbzjAHo6jzKSu6rAa31XLQmQ96Cq2L7Mxg4HhpJwpXrZp",
  "key11": "5EoBqSwFWSDZjiZ7GrgZ1jwNjez6kS9fympWx2u94e7cfiiLQA1FWVFMBvP59X9juC1uVRtZVed7zucSKpSg7w3t",
  "key12": "3Ev8CRXBSVjaD1cd76eghs1rf3B2bBP8sY9LXpWRWh76SEWf1nWDi3T6hbCnov2SqpPweGKAAPkfq4KkmUxx44vk",
  "key13": "37teM8NBE2YfLynANd8zbQ1SgCuq4W83kpbL7fUdUsMN2tR6cnQ93z2CAXZgDUkS3jj5Hr23ELjbU7CYpHWn96tR",
  "key14": "2vnDVP5oGNvemRpimNwcxZRVyKxqe2vmkHJqeB7dkHBtBRsp2VwexrXt7LMn6cdJuAaUS8ZYsD3825Wz8SCdP8hb",
  "key15": "LHg6KCYxd26WEN4CSupB6RZjziiyjuWCMCQtmNrbPrPdTyxCbvhmziQsyatLgUrN21EKdtNHi4FRmELsP4jB7MT",
  "key16": "4WGf7GscnDpw7tRpux1BB5KU6mvhCeC9PoCsd6Qab91zeCBudAv9xXby5sL1JM2k2cJjheXtuXMdfs9qo7zDp8AD",
  "key17": "4y6v2NQqeVjKuMLzNn4YGzackSgyzWa9D6p4GyCanPZ2cVd9s2M2X4Tm7ExhAxUuWrVydWkBSexwv71FjLtBStQ8",
  "key18": "2uup3rVs3PMzDWj9P2xAUT5ULSNSrpRtTpsHA4i3Yyvkx11VfxnhUsAGvBWA3aU3cehVCGR8zbJ9pJU1PxfnmwMA",
  "key19": "3yJfn4VFye3CvMYUNYYjiLohgFAJvMVtg7MY5pPq95NUAWk21LPznjUgmneWQfYJJ6cMqujWK9Bkzhrud9Me9DjX",
  "key20": "5c6wcHGAVLJMEHX59NtA5B8W8nv97QmzUVRWPU4vYdF8gey8zStx9QPNz9XvgtpdCTH37NwpWRo2Mk62Ufv6zuPT",
  "key21": "4NYnkW98Bya4Rd8HMnfmZkvRmFahJ714t2zwa6SysUkdTMPaNTNcHTcEsotDPoRgRtUhABtJKUj9WbshTdBRfiv1",
  "key22": "2ycwXWQNKMAtHbHouKdHqCgrodSpa5BqeJHN4wvn7oep2zH3h1vGVrxT2NuYTvXT7nZrqvunXKDnP4heCjsUfgVJ",
  "key23": "4dVAEmjYi2j5aAPGhvGcjYrBpWfnB45TANmRyEsSQg5qeCTMroSn2FrU7WgCSRcxjG7nxkkbw347gAwEkvnuLYTP",
  "key24": "5uN7cdwNgJFCun29UuFtviNVgs6SPGHfdqNgdSmpftwCcSBBFjS45ZqoJwwq4rXejMojxPpZDaDv1qs85JqNhpm1",
  "key25": "3YfnfZT7iMKVRHWb56tv9VeapoUz7TqF7tgGnqbMQKAaVCWozNCsmi4i5qs3kk9dC3qvk5GmztC4WwddKoqTr6mP",
  "key26": "44A1a2d5NgwzVmQomxWy6izqsa2pmTv4TwiGAY5WhQ9b3q9kQsuRGXYdJ1o6D1KFG66fwkvMyo3YSFsX1vpFLYze",
  "key27": "5zgvfVphjm9q14cN2RQcEKCTZCHSegDb2GDR2JkTaGzWYamKhgpc6jbLzybVMDa5MRGemDyAP22F4wacXQFTRr8T",
  "key28": "55e4TZY1P917t3o9mJjyNe3NBF43XRA32mJLJp1FM2c2LVBV5BJVpcY6JYtEn3pgD5hL43xwHxLgXnVnaPPqjry9",
  "key29": "2D6kd4BXwn5j6Mhd985XZ3pXp97rqiW95uvoeu6frVvXwfE7ixcpC49Agm7ReXc4hwrsPzdrHTq5tTQohnpdUB2n",
  "key30": "22x6WSVegEvGPgjA2LZ26FisQUcj8jopvTkz7au4t8Q68Z9uShwdnmVGRzV2XbVentazPnB127pNWaRvJYW6oLbD",
  "key31": "5kZGDdMWB5EaeVvXF2gf6wdhUnMsKUL1u4DjWPbaKrgcv7ia5tmACLuacCxFWVcvm5DXaHcgtC4YQ4hJNCYkafb",
  "key32": "qyvTpf1QiGuA2Wv1kWRTsKjxuPwzbNCMoEQtpuXJbeBPTwieSNjGTcsWLKxTd9YVeUxLfZ16rrALbzoBmM45dBd",
  "key33": "3jH8pdRA6LJuNSh1dGPqCRfx9HJmkePkhfyUKKiKD5s2CX7aSCaeXdt6jRYH7UKv4z161PB9su9fiDWcAV7CzG4y",
  "key34": "zwCYyK1TFaY6kh9QJhGCqHY1y118GfzTZP1tKa1foVpU9LGpyK1jSD4SzreEBeQM8cAFGdpxzNRKEWMmQhRfX1z",
  "key35": "2GmkGN3hNuyoad2AgqSnAozdansPqw6xUQQnyXj9GCtAT8WVEoq1gig5cDRaYsRkVCHfYTd6D7TuPbzVbV3QT4ou"
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
