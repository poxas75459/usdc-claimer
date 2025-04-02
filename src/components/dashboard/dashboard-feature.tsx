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
    "4K4V6q87cGheiYXwj9nADLVAwzFNHfAHriL3baKAGzJZH6xme7tBWqNoSzPUKT8s9DVrcvzbm47q4MkbvtYn9edM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21vMCfEtKmNCmCRAvoyRatxcK3NB6Sdq9eMpjPDV7TJaTA1XkFEvcK8Ew9j2eYFohMdXKvZY2FxYaVbt4pBvB2cG",
  "key1": "3AXz4xypygrtELCewqpqocJ3bn8K3nSzqzzEACzrpZWfUu33N1W8yyYjSLccxt1YAWogxUCceMn21j6bcUnZwk2K",
  "key2": "7vGNG7t7qnhTEJLtJYcuf2QfynvzcyGa7cjBxg9WkpiXKXVok8k2MnKg8MgwDnSSYTZLoUtENqfzisqDBJz8bno",
  "key3": "5BQkzvox4MJHdwjJiV2h3ewAFhR1AHctTiJ6PPQagxu7d6ELNsJ29zCxooVBnx3meJBd3EFZmroANgiNVgDRqe1A",
  "key4": "2kj85q3aXDSPZwA84FF9UWm2pW86uxykYoeoV91Uhf6tw7kv3yFLX1ws7X5f1wjMy88EKDTmLdevroSqVim5ysgN",
  "key5": "43rwewTRLJ5zaZhYTS97HjaUmRjU5F73ZR8PZNMNzSFUzUVMmHMf3QG2zjk2Ytgfc2RQxigHKT6LMbyMgfaBEosZ",
  "key6": "5asqG1k1zYQX32FfduRPsUnpqcYAG1QVHHbRVeBtzFgpjqoyX3grqVS3jjwXJXZsCc3DCn5VsGEUog39m2yHGP3k",
  "key7": "29AX2y6TB17S2F9orMqwHTg9AeMeRX2h3XUbLvxgL8DqzvF1f8fbEjp5qzXSZ6vSsmnW9YHFB423ZsiLUxfujhjH",
  "key8": "4fbQ7TnRRoUPeRvBJbGKnxYpoXtgo6uVHq4YS1pwKT4gMf7cRtm1k9wGRvJgPXYS427gxQ7usqAropmiiwugd7vx",
  "key9": "4MfyokXMzi9msbmVnPNKdEKcJvyodQvHwR2egSX4GXiySrvk4vCzVFoS45D3TKikR7wtkBUmXMWHj51rrfzWkBm6",
  "key10": "3cCDYa3BXRoVmGaAcfi4LNx5yW14dp4H5ErYbM2p3tfMos4UFLapBi8mADcRAgeYoTG3j5mEBsNzUsZENJwdmDYn",
  "key11": "ApSUzsbx9UnGbvBzJWPmD7Jiiy6eYnqF5kWjGpAuKw9YGQzMznqxq1F4sKdwKgRnrQ6e7sZdfts9A69nAGyVnfH",
  "key12": "3d3pKmD6SBc25uRurZaynrKC4ayLeW8NjJGgVBHhZp5FtemEoMvpf7iqo1GtPnWxAre5nBmAndsRwnydz9hA3iP8",
  "key13": "2KV3VLYE2Dn3yFv69HqxmF5kNAkBV2qLWjDVZoNCEgouZ6R51VbvdqnUTVNivfMyE3fJd583LPThSBXvPqEYpN2K",
  "key14": "3fx4Lk32G1VgoAMssaRYx2A9HeE8jkNUvskgFHNbcDXsebPZj2a3Fu5a4gMV9YNGf4X9YyeNXNm3s6TjEpGvVSvs",
  "key15": "56UkVGursikcm33sJ17dffGwDtJmFxVQoXgRCE4UPpB1A6A2NvVLvGeeePMiqM55rJWJ2V7DhUrSfPLCyaB2Vm3M",
  "key16": "4Q37jNydTkAfytYL1Hi8z5XGVCCmHwUkqZKbe9VGP8inn3PCvjYuuizu7jVjZMnXqEQDYFz2mR2BginSkeoBkpxf",
  "key17": "Y26HWzN6c9tvmEvBknZjwnkWfhHGUA13H9Pubnfh1PKjwx83MvfKKbdCMEThLX6WYAe3fKgwFVrb8BrWE13X9sJ",
  "key18": "5jtpHs7ubXgirctiZWdnNaKKc6n4L8c8SjXzdtXHmp5Pq5tf8fRA1CPzvvb5jhMfGBbs93BJCimhEmU4wyCUoAZT",
  "key19": "4D2BS5oNfkB4Hp72aXeLiZE6L7qrsJVYVhtdnuTqny9gY3Mw1CQKFhgFt5cquwgeFR72KAREjHu1rKYcscZ1ThYH",
  "key20": "2dgUyNRb8W11yRPUGUc7YXrifWzaKQNkgimvMNCNBujCa9oFmuoMc2F8vRax2r6REJ8j8YfQh2m7YtqGxrLVBbsk",
  "key21": "3NoiqSmBiHgYriCFnNQMjdnt2HmZQXhRnPqEDMPkQgYbFqEhZYsQFNcFpmjCPpTTLZ8nUrmpFyQQeQSoJzMPSnfc",
  "key22": "5WRCfkgrxijxG21SVegHvfnBFUXxsGVkTXwtxS55Wc2kzQWTiwo2tYTpPmAqADeKGPdcH4ofwLJ8fh9JYuBar2yb",
  "key23": "Zgc1LzqDuDKBhQJhgmWDeHRpVAAA8zYeksYUZbnHVqUf2ajgfz7F3PidNsuFQPsfs9uFXGYx4mawkW3sFmcrVmu",
  "key24": "5UfZAE7CfZmFCMXPrjs8rUcqJJQytxatx41RjKbFzbV3mYC5enEeHLqPvvyQJMWqRkdkgWatj8wMHMYa8XLvgR9m",
  "key25": "5q67fmnPt4myBcYvgHUaxAwrUD5j7pT8JQBJJW9UYnHLmuqEFG1vYMvchgENFftLZpZiMRHT2FqdmmgGa7QEkt1T",
  "key26": "4pSSuUVtenekZhRrvYhaeo7MuQYXrpLuipLbEVUYF5oP8wqWnoUjWijgQofaBUfDxAMGXW15NRKbY8RCKCm646ky",
  "key27": "34E9qxhCc6mRaNmG5SZU115VD9keC7398Ym47u138jTn6h2vrC8UgJzruSYYJoNpcvJYBxTbVJTobtThdcYYY3Pc",
  "key28": "54zxpwPsuAuq7ZXZ2Q1HEShQAaPXS3thKgVAjAFpRGMsToibLrCtTBu2hXRVyUAcbLTJQx95NbRLDRmatXTPK3EB",
  "key29": "2URH7Hv3kbtCMReqrgDepgoczvHAXCHY6jWGNy1bTvUxmDYw8RHeoZP5CZyhRs4zAiaU4EjNKDMpGVYS9PPTgc39",
  "key30": "5FAUGfFXEZkULioY71Rr2f7P8MqR9sApnSzerFEnuHpgam9WwB3Sei4SrH4jJw86iFWKb2j3ng4fBHDLVThazhy",
  "key31": "3oD6HFwqV5YSfzgWi5PCSb3Mkwx3Cpfw5Q6r8GKHDH1i6anzZY5jsRmVPUCBoDrJC1FMj2cWc7eiiiEoVx5cmUY7",
  "key32": "5tAq5edLsBDnPscGCViMd1rbKoQWwnuA5EksE5MRV3d45umse5JcWQiHwcgHoSUrD9UdnxDKeSgYxckAcnbGuDb8",
  "key33": "rSukioKLfruX8mQz6623tz9SV8f7CPdksRhZEGS44DrGRaYR9zTzKN1aNQSS8YKZwzfqPeiAkBgKpPfnTMSayja",
  "key34": "5GGrtqDekKuVeQLPP4PuKM7hrwUMrRqjiVvJ14mMUB8wZJfFyX4Nx2eSQh9bRBbFoocaqaqtu569GkEE3L5mvSUN",
  "key35": "5k3Q1vf1DLbtDXiwZcrQQYeWFKxygjHLzBdh3nS2o36Bk5pAV7vaKxFbz7W5vwMcewvaqCgqr54GvoBbPJxTmHKR",
  "key36": "3Zo1gVLKconeZW8SNNMy5EaQv7cTftFKSB7UuD8Jp8uH76JwuPSaJBZYSSKezemt2w2e42B9wFHtSrL7tdhySvbQ",
  "key37": "5usPLZjeGRNhH1JTgbG9s7ckmoabwRavk7xRjo5UJMt2nhARACRhZ3pC18k6wsyNyJoiB3XQMUrhv9nVUbbE4EMe",
  "key38": "55cnD4Uo59B8JDQhWFWNF25aADaJEtN4TfDBP4KSK43oSges2NNESLQdWfnAFvi3oQPVzfZHRN6SRhVnAQAtZHJE",
  "key39": "32emATwKFqpKxFtKDXDXGzwnt5dU8tyVf7cqtWf1qRDPCTY8UE1AMnEfsaQaubReKzENzJ2vgP5dAnnSAXsWRC7d",
  "key40": "3EbMi5orz6Z2GBCDL826W8bJi5PpWtyZ9SYVQSdHYTgn1U8tguozeDXxWKYRKMQXFhoACA7HGm4AaufYmSiUUihb",
  "key41": "5iWSSJ2Vx3TiFNdZixY6qKHqFW8NtRBvVovux9qSg9P2eUu1Yt45kPFrCiAbvZzFiQ1p1GThpDihp48B8WJo8GQe",
  "key42": "59twfV99UrEUsffhWLkJwB53PCp5Nu6UPw9u4CCLy6VeFoAPNAFTwuH8jJ5RCXwGvAG44cZxs9fpszNukKmdQpTv"
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
