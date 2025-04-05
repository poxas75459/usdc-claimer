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
    "4Vt7gohapjKBxfrucEkJ61wXVuDLyVzeuJMQbBvDdSEVUmCqokbWGVz2w8dQm7AWuJKxAEVtrhQ86nGXVzor6VKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5frzny1vYpU6GKyeLnUFVAyE5x964d7zdp1sGNprVKoz8ZnWCGk2LqNhYPcYWjN5GJZ8tF4wXHPjNjSV79xMVcqc",
  "key1": "4zuRpeesGvdeZidvDiYN2jXebgqENcqWPPdSs1VwGXjC6F31ETWYgNskzwU1xhi3SPbwy74Y7sxQWkw32d7pm3k",
  "key2": "5btSxnWaX6WhS1KyArUtDewgRW7tepMQsxABp3HBbxt1GNwjWk7czpbNyw7pCxi9UFYNNFTnpginBPKVRbXY7YLR",
  "key3": "GeBbkexvD9G97ofUs1AJRJit19x9i6DAVfRhW5zdcau8weCCrX9j8d5yCX48rNWBQy2G5VPjrS4de4K5gzsa6g6",
  "key4": "471Vy7D7MRpewrfyZRxeLCNdrEG5q55Gny6ViwQ7BscQMBFQkpbN51sppYNqMZGNeQCBRmxVLMroCYw2Z4g5Lm3d",
  "key5": "21ZngogQ1wAdTbkiiP71p4UxGW1h3KLf1F3531NvkhGPosUYDuYoK448vJjR1niv81SqssLmw9eg4ZJtUeEgTBdW",
  "key6": "gqy7GbTBWB2MzF4DdFxF4i9gdUEAgHAGQx6zPNk88nSoxay4nSuCSanQjW6qhfKT8F9N3aRq6DNXqoW7KNao3jf",
  "key7": "4hospmEDHDWkubnzH18d3NYaSVaRKmnEXH7Gpy1jwMmfoof5neGa8QKH6srX9sE6BY9NkguD1dUSaufKRsF39KbD",
  "key8": "5HnamLqB9DuK33AeyXcJ5G3d7iF2odYCXgK1dzCekSvL4jZqjdCwQtAvqu9rYfxE6FVwnaxaiiQikT5dwhKthjYV",
  "key9": "5XJhorzNWuMSM1S7d3mqp5nCdtTKJfEWmGVfsQGfxc8xdecSP9X8vWfyzFiM9a1qbR3tFKYQTsmfefsUb186TcSK",
  "key10": "xtnSCsNLtMpJRj3rwR4fvQUge62KWv1ZdKKVnSE7yT1q7QuiiymxeYD94gtVY1VvLMRVmYW9SqsH97bLbV36fvG",
  "key11": "4aW7p3LawdH8j4i14aWAbCwMjJcTwYHjZeEMfxoheqsBC8X2W5GPH5vLm3GA5Npzm1Xbp9HF4CivKe8voxaRAoG4",
  "key12": "2gUAd6rgJQ9A4vtQzQTWmKHxQC1ACDbSXcERgazNYqX5UYLDy4sCKYXjfUBYYKJ4Uq8b4ijiCHWGrd2kg2f2D6BG",
  "key13": "2Xwv2EvEfm1jv5GY1zQRvse4eyrEVNNMmTFoCwS7bvPvxfyJeeUtDp2YjkWUPxoiGKkv9tDp77RU4nFMVPec6A1f",
  "key14": "5cFjQPs3HhgdC5TbefX72LEsiM2SeGgt9reAp4DHtecioVpf6b85dwz2fW5dXfEVN5aHhu9LUEAEhME116zN9Bku",
  "key15": "2315DYfU5v7qXArtFEapCDwfq5i4eqt9pAvzE8SB5iU1Vgy5QdZTE3FTzhCCcHeWChrW3MA3d9AxaJTU2rb1bVcp",
  "key16": "3j5nhWMQdN3jXn3HA3aVHoXrYLn4B21CgS3gSbfzRNuMJJaFpSg5dCQsTKtQX5FNz2FjQP8TE9w48DPAARprJuYZ",
  "key17": "5BGv534BPT3Gce87gr2pfEk9726UmxcujMRD6UXhjX88jxKzLhnKJsTwVfc1fvs1wyWgzLu62jiKaEtPwxRjZ9r",
  "key18": "5jrNF4h4pFwdTVWX7urjmzAmygiF938Q6HRARnPo3iWA9MWEYeg5QGhF9oq3ABNrog9EfaLEmqCu7zGQeq7AmUHW",
  "key19": "2VcApu9UVQDEav2kBEV955GeCBXiZP7FTxZfRjkyaUV5e6uyZ7eofggGukGf3HBsp219zKbocEN5e2ASQXQjZ3oR",
  "key20": "NuzD17Dzc8evYWYgWUTMp7BNDZwoVVYzje1xPei22KejxtpgA3BYDc3JZ4tJ14MLRyv68Ktzr17m4oBR1aBMiv9",
  "key21": "3eRZBZ7FJEv9hqQzkSiq5sCv5aULunkhcGKDhs1ZhCEBZup4GQQUAoK5987fLFjN7gw8Y1KYr6gdykkTN8JDjchU",
  "key22": "47oxbnbH63Vhy6pVbFYXAw3e9Bw8dEJxNWZozmgTkw4JztT9JEXH6iWkFufzfG5S4qvMiYSzFqKndNkZwoQ2K9JV",
  "key23": "4dWwK4Mz3xisED27PYiQa8GAfmaWzXdutBC48MdeDCXcjaUW3tGfWSxkHerGmN1dwrcURVcJnZm2pGd6YbhQjego",
  "key24": "CaW23ZRb5FdvM5q78YzQits3tVFT4AzwdzYn9bW8aWd3kYQjqByMuR2FdeCH7PUbQBVBp9mq1VrkNBMPbX9xSAm",
  "key25": "3d2MLWavduji27ovVGn4jcHhyLQhofCr5C3Vz3G5TSSsnHv9GdP28k48GCpn25YQLGVvjSw3dmDhrNHrhoFrceZP",
  "key26": "3Nz6DJ9JQUDkjYZA3QTN2RYMt668Kqv2KXzFy2ETR2L2eAbKpdQgxyExuzqDiYrvDzzASDSEjaktJBTV6oYvT2FQ",
  "key27": "cNcQPaMC9M7Hfwhwv5h12nmEADbGKZ9CRFV9mo9quHxu9gaJvgqTwEc6sqUV2W7yzBdFaqdrUJFnu39DSYUmwYq",
  "key28": "2A3dBDKgDx42t4aviaK8x4RfW5BwuCPf7mwd6NCtHeH2skhCzNwNSj2BaE6zcd6yY5NxsNMfu7SjGodfimuGFkHf",
  "key29": "3A8TwN6GSrbKD94Q4DseRepboQfk5RrxbFCFeds7uduCUns7MN8ewHwDv1P2qoQAWQNogFXDW7Tv3Ktr7LdfV2fj",
  "key30": "4nLjjVvbuiJkkK2jQVxsHKJPNkg4L6B8V3G5ERWg5m611wwgXA3eE4YpmJVVzbPqKPctBcJcQVtgiTfg48exzFfb",
  "key31": "66789brwwnpqfS7pfUyghj2q2gTpGN5M95jqkoZ897CgDjPiXrtv9hsoqtYgefyYUAWLzdVsQQNikWnpNDCNFJDT",
  "key32": "9YXhoUnWGEwXJiVEaRH4eBmgzi7DTqUKY4ZKUV5HJP4gVCjQtsGk224CDtMSrg2Ja7ZRD7kzbnHrq4Gu2EqtZQp",
  "key33": "uZzd4PRGjprTiJV5UCBBPMq6fULsbDmHMrw7TnM9AKFHUBBa4iFYz8TdA2hewkhxFt3BtphJoBSwpxCsJhmBUM9",
  "key34": "2aqdmravwQJfcFuZKg2y2zJn97PQnKnAsuhM4a69D5Lvj9CMqCM1HtrcYHPB2USbqAXMwrvoqk11gjbyPrXEEoPk",
  "key35": "3j1Y9KimgH9mwYqFSbyamPaw8qHM9uCAdpKuaa7L7myM2yiw8FwecCVp1v8irdRQRmEmwWozgjahAj9J652sqerz",
  "key36": "WMZdRjt4vFbCYzvgapeAh8wTcfvitAXnKJiuF7DcY4EygXxGsuPEtxUfmDAmBqx8FtvUtMfWFedAUBa8h2SdkSZ",
  "key37": "5eKCiZt5hDUpJBBVnPiKxXAdnAZZMZJCP8n79L3Cm1BKZQS7wxEQRSyL88izv34gXTLraAetfZ8om4tC9gLu3AbT",
  "key38": "2qtAXUpE8gHwuuZWULhzMV2vZQHGC5RfVC9LMFZkj7BtFBMn5jA5vEuzMBcdPXW1ZrVBRhjRf9sUoWw862p65LJB",
  "key39": "R8N2xDvK7cmAYuMkoQykANve6nxLSQuDgUM2xoo8aJVKafURBa8Pt6ehD72VQ9rbu3cpFvurvJi6PRqYd64gfp6",
  "key40": "2YRFnpExPTXVYDcSyoHU6kfo8e4EsFUuPDNQrRJXWpEXn3NL7fuS6yZN5qGZJpJ9cCnMEKkdyz3mxC4PUYqTAgMP",
  "key41": "2b3DM73bp1oDJDBgvjvU5jvBk1LyVwFUz9wZgkNQxeo1D1pzEvne4F1L7pobcUobVW4cUCoFQkdjre6ZxMGUqj79",
  "key42": "5X1CYP4MEXvhJzfjqH6U41gQozsTofeKRsDTgefoYvtLBvzi4esCDxm68QtNLGvk29F6xzWmKgYHngQjXakLcbwX",
  "key43": "3rRYXvjD6zg1gY2LTB7DbyP2Gjpb5cLp4QFjYmcZLvkVrDKdNbnEvZipLu5VfjE2yGcQQH3tdAKAGSH49wTFvTUv",
  "key44": "4RTexXDy8JyxxwtFyahMDq73CmoaT82vNPkG9gZ7omLJ3xbWshgLatvMF9NU9tzMWfobgbFLtZSsheevyJAR1oZf",
  "key45": "636fsBHd8QWhy1dPVFSGAxXig35iHg7PUUbFpTN8KrBDoMBC3gmoLXmwa1r4DDKhvM6gDV2VmhKzfqNUyYmuDkW2",
  "key46": "4aaVwuUrT8Jkxj8f9o8FbEZ4aNQi7GG9A3NySqfQhj9DwBvrEwS4Vwrn4S2Mx76yzKMcsK2QY5eLn7U3ZhMT3Gei",
  "key47": "5vUosyjyM5zfuJgV8BNqU6NDT9gnsBs3xLzdVj2m2MyrFGmXnNtxcniJimmVbkcX4vyFeyWpWNX4QwwsvnRiXcvb",
  "key48": "VV4JxF1PecJAq2eUJay2s9HkQocnbapqJhpKQKzYyoRXkAPTFkLTpCxSdX9ZkFpokJhdfyFk3RfoahMgQjcqSQS",
  "key49": "25Kmpq66uVCuGAMMZJiAFy3iri7bm5EnHLSYmEmirNcvGdsBUxZiutkg7QCUxyDVRiiLC3L4PPQhXxK8MvNtfkeY"
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
