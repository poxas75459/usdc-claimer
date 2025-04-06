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
    "4MZ6ugN8U7WLxBYQNf8bcmpu8iER9cicz9ZiRjKspAi3mh1a7JgNTt61YJg4zLQBsbLqdCweWCiq42MyLRpFJPLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AkdWqgravHmpRMuTZDNV2tpnTyfXHLnwMM13iR9sRC1RN3ZgVifZ38T7MYKtmxFUK56NiXViKRsgUTU2MfdP9Me",
  "key1": "41h4W5y3HZZFt8APpN68oUw16egfMsADa9Mhu7evzsqvpeyFpsHMu7W34RHoBF8QigbHjoDseZLBzoYvF2h581uL",
  "key2": "46X93ZKS38WjGfHaAsvhFy6sJYiHuoHDwRvaBFTCrbvQGnTmWmzmtJBorMAB1UpcV2SFKg5Tfeh4Y65qFxjbcSAz",
  "key3": "sRqo8UEeAuP8bWuaJbmWeE3u6eBAT1uJxLY75uML48t9KFbazGuqE7F1FSE3fWoNzRjFqgAcVF1a2yRbDNGgv7t",
  "key4": "47nZZbC7AgY9EZVpNqis3ydBdDbjX2bCg2PSAk7MQFfQX3vQ7p8yT2eUkdpDdfGrQsGWa2a5LcwvEYaGrLYM8Mx3",
  "key5": "3z2jYZG6fodJnHYzkDsBPF3tPCuB32FC6NbSUmmABAihZkNpXPYhvvw8i8xoCLAfLFENruKhuNkN3jrhGWnSfMY2",
  "key6": "2WffBQigwKuA7dGacxk4UCS2zPxcVCwK97YoGtB6KBCJGu9TFXuHFk3XmcvCFpvt32YJkHdeiGf8hV6kkhs3P3tA",
  "key7": "67Pfe4s5whoHrd7uBsdAsBNSRaUqp4CfZhJefrwvaXJw7Ewjg8XewFt9EAsAomHYTE4eKa7QiSJsW5Vx4iVDNKAE",
  "key8": "5623P7rTuzhM3GoFfHtunzToWkC8XEgakKnvoZ5ouErVq7uiixpQCtcRuiEFgPyYoUNRxVVe9hy1Lc8AsnCYpgDx",
  "key9": "3hQKRxK5FE869f65eVcDWCoNf8AaFpra3zyGShiDUKkTw6KcYDPeNvgeZk8YUvkMaVaGBBkxCkje48TUyBydFXyY",
  "key10": "471xwQ6jddP2QbhaiL9hiJ9paVSfqRUqcZEaSMdkjkPUYGnKuy2xzksfyjcGoLqXVLuVYvrwABSuoPnFfKqmKdnQ",
  "key11": "5k94GQkVSm1tKPsUpoGFFVqiJQT2HGDazJc8BshLXYGAgrkw2C2zC5oncnQyr7PokPwPQ8SiebBiANJ3yczh8BvX",
  "key12": "2KiPp29ZEJFke3SfCK5ttUdXvGWPzNom5e4p7SoSfQ2YLEcFN5VNdTdUS2eAyv64QBZCzi7JjScpyBt3bvnigykF",
  "key13": "4GsU8BgwU6RaL16JnC4MuiTwEFBq5F3HCNZ9i1vDrHDiyDxw9nTtUgAp4kBfiRKrMNdf1Cf2fHyJRJnetAV8wZoX",
  "key14": "3Dzf2MXvzYucP9HNa1L85Pu1RuZS6A2u7ZfW8KekYFyEQz1mAE6rDHgxWSC61xm6RBbaLB7RpB345PDG28D1jDvY",
  "key15": "5EM7hNnFhnDYuVhtBCob9JGkwRtFsBQeqLcmpHfnT232S1ykpMCCyNZis3XQHNUJbEJ2A4aVLPp2igzBds2woR95",
  "key16": "3PUfo7wkPngtaeNPQJQniJfexgfjZZ4r9NhSHqPsk34TeE5Efam79D3ydsQ7oH7noC7Wq4dehChMbpTdtUbmfvPt",
  "key17": "2jSpkesyhoEAWTidwzUJJFfQKfyFLkAHJetYbne7GtxH3Zisr93UNpPwYeZBwk7J17po5FgHBmfPtXhagZozT8pT",
  "key18": "5pyTfKBRs1cSU7jzvX89j25ShhSRoWVDxUEwEsevhnoJY8DGKSBQgx8JekDW5meH32o1k9fDcHYLXBYp9ZrWkUVd",
  "key19": "5VrD8WbeVtoBViLVQ9WSzuxMmKWQMMHZ5zctnNaEumn6wqmQrXaMeeMtQKxafDxmR2fBJFbx9B6AiTsbeg56N1XB",
  "key20": "2HF5tH9vz5EYwsZmwAzh7imH5rcm6cLGbpQ8AKUpQgBRMiprVViP3YaLv6orTs9VhdZqAofMRtN1VSsPQELQHjKg",
  "key21": "yqL7kqBtdYbgX1RSLSCpji7gorq1SbP99mTBM2oC8aD1Fyyc8xVs2ey8ZLxiyoueGgnsQZbNvvUNNijoH54k1Ci",
  "key22": "pmkqrM1Tk5hVxmjnpU4kioeGCKRF6P2V2ipnuRZncrSFg7rPE8BBy3JRX7zfHvdCvbahNFFvwAcoCw8DMFa5tFi",
  "key23": "3TodgKwTbCRRNtXLhXYa3jTetwmVDJcYKwtqRewotuzTPA9Nz44h9DH9UHVAV8K5nFzMEhZy6mzXq2uogymSxjSG",
  "key24": "2h8QJteqiNSjCmGXPdsRnktfpUzEA4FrVrirsrUJKXUNTfrUSMimEjHkyseWBb8VMTFqe5hXAMxxLFtSFnu5E18v",
  "key25": "3axYeVkoUPNsFTZfjQCKC7nnhUmBj1vMmxSwFWVDtcE2kY1BAzbdb6ig13tQaj7ojWmcocDxREKwtT9E6PprKLhs",
  "key26": "eNbQGvM3HWX5GBEmndHLf1XppEoWAoYtzDGpvf6fjfCiw1dPzvwY6kodZ6LKp9KvKuLUPaUXKnMHYYwVxFbeAyU",
  "key27": "59NQaQP5vtpGLfFNkDjLr2XMX3EgyYYkmC9zcHH7mHdmYBGQ4fQJ6DRgR27j6tR2BKB3cqtQx3NXM4twte7Sd2Cx",
  "key28": "3nb3oMdvaS9FzJs2i7BcBxVScrc8SVkG2qzmRkqkAHjXV6GGnb4dgbeoPnxFdtxMB8CQ5vNnWPmxb91DCtNX9CBn",
  "key29": "3Mz4Dzfdf8Zdjv5rcbf1ocmyAy5GYATjja5MyynujG54nvBHQUxDy5ucVBBxQh8ChejCXYk3AWTrV9HgRaNTNBCK",
  "key30": "W3dAs3Q4p4MMfLWh4tMnwLgXW6eD4nRkmmsvn9EgryJ75iy7ZoaaSXTRehKv9XVPT6oRiq52YUt1CR6xr9P7Myb",
  "key31": "3RxsgjEmdACPPnMv7CMQrg8sNnFxfNnfxLpaWEjJQA2VXRR5hgUVNyU9MKpstkdKhY2jK6mfJFNvbGqw4XRKadxQ",
  "key32": "5XpxmEgJZnoJfLw69ikpoP16LYCxrNjtaUt6EVxd3SoV4DgWZqQhbSLsvERjbSfabvVW6zoFyqVoYuNArweGACWV",
  "key33": "61FrXN1ZXBqQxkCEGwksuoVLjSNXrNerGvvhWw3ZRjbhzubSXouy1P5ccCdX3prSt7Jp4sCuGTeD3sx8b5s5S2ZW",
  "key34": "3Jj37tYFLmFLqC61TqzwfLwFmuZ1FrBS6LrpmP63skKwGwUsamkvdHmUESSh3kw58qjXSXFm3wcxKYHAYLiuev4y",
  "key35": "3tXBBeQoLWzaLczagJ5WwESa6xf5cp7sHUk4sJfZg6DAmdSLdprty3thBoMKVN522wgzCRSzHihLGC7WKmqh9zzZ",
  "key36": "5j4a2s6Ldgdyex7hJGmxAGP47FAc9edBo5NvunZVamVFguCs8gNBiqii7WxktoxhJsWxXBKHFjonfRuVXPEEiQQ9",
  "key37": "5p6Qm5WbX7AxXVE8pd4VughsSw1WRyVFqVLKwqQWrcdAaxy7DbKQQeK4pGWf595YNUY7viLxyMNkiu9KjRdzNRXj",
  "key38": "5uHotX7mEG1wSKd4XBtdvTNWVoPuBhSgbXcsvPU9oQBCRAoEKntcmqP7r9d355y9XgBByHVUCed6Q5QdEAse9UyL",
  "key39": "4WvevDDszENKWY5QxeVwo96e5VdtTXJdtrqFBFKRSWsre8WWAfSXykbrPjMApWr1PEE8TaH64vgX1HHeciaekBLQ",
  "key40": "2MsyMLwm9m8mpVxuAUruJABcT5WyaG6wUf44RmFu67dPT8wMyETCjTHDMLmGvhEmBYhgLf8eHRRgkkQN9KHfsmZb",
  "key41": "5Z4vyqu6ApX3ZHBJqWaRaThVgjjQEigrqeDqiJuKJts83XuMNifnN7Q5qmaV5FQEwkDLJYDWA4v3oanGSSaPZJXL",
  "key42": "2aXPodMjBHsYSPvJQdPdJ68Nd5fMahM75nGuQQsRRa59EKLL8Zy1YDrG5K2xXV9rt3dHTSwyTuLhpN7dCua9GXW7",
  "key43": "5fUrWcMjdpRRSyqaiXfqD4XkTEAPuNcvHda7JQEDYo7mioZpW3gx8kS6zxbRVdi1aBYiiuKWzrRfaciJTw44bDD4",
  "key44": "3hbpNscHgU8iU1uWAcUG8AUt7w9SKsPF91MFEMEf5MzhJngqQJHzNW7EQ9rj9H5vuBn7sxo7cgqniL1FDVHaSbsm",
  "key45": "66QfCTays3rFdLeC8P2pvee78Y2WfjAQWdVUey3qrzFiTxuxF4EWfpQhpzaK1qz4L3nBf79KJMtaeu8qSQB4dUwF",
  "key46": "5X9eX7quAKszX3WZ4Zbgx6V5uEBBaSpgSdFsmBa74GePuUF7PR67LtzroR1VqG9aEng7wKmEge6gj6GDUaNTW4Ve"
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
