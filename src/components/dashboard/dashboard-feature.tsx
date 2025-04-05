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
    "5BFkssaYhTytSXqSmYdms3MPQETAKj3ENxg2XERoSdwqu5Xf58VEyvNCEaVoM8DNmTKbhr3VK8hHn7Hvh7aoF3S3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Va5qdQxavJ7Svg6xGiorG4weyzdvgss3oifM2HmkG6mYKq6Q31MfeGnS7uK71B2EaEtHaUneS3aetaU9LMBJ4Wt",
  "key1": "5Fep2bbqSSKGyJZJHwbCMfbRzHu4Bh39yVSmaHs6kPaoEHxqDGrfrcyPx61WQqCeAybwHF2ABXyUzTVsm2gL1JSr",
  "key2": "4pAeonDrP9jJCh8w8ViDEKkGNxuSGHdtGDftUyQvd7yZCVd5bJFd8qffj7cyVXWtY99Te6hRa2fqCtJokLfTuHNJ",
  "key3": "SA6o3c83BHMWAnKDdkr7uCK3T2WSMKT3JkVaRqk3xjueHzypLR3DYJYkkrrCsYGd7U6zbeLudv7oNeM8Pq9TQxT",
  "key4": "2xgR88xj4WE5UkZHnRHetajpBXcQJGXMsE2nZrm7p6w89p4GvinUsEuB8dQWpKMukie2Ra4JWkohy34UCdfcga15",
  "key5": "2RHNfhHdLjCN7e5A87CUiVH5P13ZqSJdGB2MEeeUMDTyXvGRkThLBvxKuGK62UkqheQF3Ern3pjqqfqi38PnjJvz",
  "key6": "4w9Uyu4LvaF6ok6EdxGAFRGnAzRvyC4f4D9V35m81SHPSPKaNCf5dkJUtYMWUWnBPpYh9LXqovG7cWcGgvSFXmZq",
  "key7": "471XGeXzxs9tBK99yd4qKXQhXpFK6PkTLypXpbo97YMepWWoeGjB2hNhc2vgrBAfDWABgfpEDhgLjeYpta9D72W6",
  "key8": "YsRwzXsDtuvxbsEeUhp1zUvvNVgNHANSj8kzEnSEmPddMLBXYEehY4Ju135Xa3ETxarjRdn5cyrfepEoZqmeYQx",
  "key9": "3RiSCaMZGWVLS8i9q8XdffnDoYbh1EBPFESxrQ8eNYRSN38mfyP5nc5hJRSyHhA7RpQgiqvv9vyuHueuouRa2VfP",
  "key10": "4ULvWARtFN4FcknSJto8Wbkjp4GDFRStLtA29kKxvSBhQ2MAu4qoZqLvyUt2FhG4aQiSHK5V5vPp4tYS67MkNghn",
  "key11": "4n2spK75FW2fpPomQN17hf5dRtdeGQTQoYbP5gQdKkgzPSEPt4UonB8Myofee7zcTyRURMEpMpgMqGKSWERbbW3S",
  "key12": "2PVAbbd1V1XhnPkkcaNdS9X7NiTamHd9873uAqFo8jbutvG2t4fRsmYsxBqnGZbvqtLf4S9xtPaw5QaRT6AAinxc",
  "key13": "2pKFJratis54px3Vtxe2kSq9wBwLjWTu599Asek5YFgrEdG3VfHGrCfHCGjNZsEPZNcQWnR5iih6k1WpuW4FwbLM",
  "key14": "5edw9VcQsBzsGTG2pQhZcXkV2NrZRVCKuwstSM2KDk2zAccXzHT23PFVpocnqgu58w1pZsUSCfVgMVcLJQWh5Ji2",
  "key15": "2xYSgeGdr1Gqa3wvDPxbU9rUcy12bt8UWxjKz4yUev1817u7aVgnWZJN9ab6y6hfr6efVPLpgS8EfSLFGJq4vTVP",
  "key16": "26w1L3iwmqDAWG4Lv61axLWNJ2sabe5incUv9Lgw1LEiisG9ysDDJQEAS13n23MvhRRV5avTaFRHQ4oMpGB5NZtN",
  "key17": "4GmP5wwf4RFUWKGTkGhwfctF7XBj3pozGa26nbNBs4oCJBfMyYZedCu3iBPdGJq2HEq1GrZvCwiaAnrE8UFZckHX",
  "key18": "3BgxBbrgzoNLfxTFDH1V6NiXoeBXhwJPc6rsawEBYCucAsPwkSDmybQiH5qbik94kCkarApWinyVUig3QyatUc4A",
  "key19": "4qZpJqS27ohjUAKjcCkfdfjf1YEborzG7xS1BkufoEyDTiYN975eqjSuPpDXTn31jtAb5Nfp8w6oQzzVg5RZEEjR",
  "key20": "4f1YLJ9ZZNjNfkcBBFVEQK9NgpfmAvF78nPPjfK29TxediFRS7Vy1nuM33JM6rJQYvN5scmxnDTuoj8Q6tyLwW6E",
  "key21": "4oGppnmcxoveLwPij4HCe5hw3JjtfasofPSKr5FWkXD9NjziL3qk949HA1PswJzLjw19JUXNCkejftsEYEHHaNe1",
  "key22": "4SoPjQx1Wv1rMbo9ayaj3o2yRdZ3tHk6RFaxh59ioqzRJDxtroQzdkG4f4RrSTdquJpKY99xJJ6XY3rTUfbrSyav",
  "key23": "cnR3oz2Qp3KxchMSaV5rLZHkbTp69katrNZsMvWQ7pKmXaic9kpygGDvQePLoSfXqRJnUoZ6vLXXyNxZiL9q2md",
  "key24": "4EFYUzMQPNEQXRTDbqHyowr1xzykYwUcsF9hD84jisGUxk56KY3wrjjAESY3tGaBLThDUHvm14VrkS1YtjHqPWLJ",
  "key25": "mhVcsQWq2rd6aNfBbU7omrKrZMatJJ7WiZrQBwWx9rLY5eXZGmQmj8uaqcjWwHHjzfmgMAYr6wxDnCLnfqr5JX1",
  "key26": "5eLSaQEXjpGjzrwGUivd36NNF1JSTiEQHJd9v2Jge6h52ddggz23E7hugXU9bywKg1mEWWcUVs3Xi2sFNuiszLC1",
  "key27": "2VFkXGKrGs81oR7TFA11cewEAzxknPnmzzaw5rU945b9YUP53Y2AXhjoKt44RaopE8uxWeU9KqNzZoC3PeGGBiKi",
  "key28": "4fMdsdLQjHMu8ssN4d2ESHjySVNeGG4sLiRLuHi2RV4u5qxSiS5JfVEU3Vr3QuKo5P6pvPNrkwiA5yRt3ycAdegR",
  "key29": "281zGodVnSeWTzhXdTQuRQRDo2m269Mvffw635HNmzD6Zv2gJeBuMGHbEkzZVypEdh6B3rNAYTGPk8cpjLcLngFm",
  "key30": "3fCh1aJN9hGb2ptiRnqFDhZdtGU1d677HLJyVk8JQ6w6DcjwesXiQyaeETG2HyJioyEQ6cDiQQoQuKsS76VsJsVF",
  "key31": "2BRHCvASc7WZYdET5S2qBAk31eMUjogGvPKj99QzYJeZfTGSz3u7mmV5CHZ64mpbDUuZQBzkzaa4T8KyZ8VjaJNu",
  "key32": "36cs2vcMuixMYxEdhCweDjpzMRXpjRGnscUdubVbSD3ads3QpRA9htDxEVw6dHKEPhB4MCF8bW1mZGoE8FNZDSkz",
  "key33": "2psc76VQFKq71S2NKYrbqn2MaHdYrdSQPUBRgUJPxaV5Ws5UdkwdDMeAgqiKPaCMXC8DGNNFFpagg8tx73qm2ViT",
  "key34": "5WhdTKpatwc2m7N2sHEWNF8qESEPy1vxBpsa3ws7ypakphrQGw4R84PNjVWbGrw2B1nR27vMY55eJxsarmq7v21q",
  "key35": "725Vo9ij9x9oHMrmWYF3SLgEfdS3TbivWytvnF4BU8MjZU7tYo4GYAx3QebX5isf2atHFaXuSFsGP8cU58Mci8f",
  "key36": "47b2SFFsndDWyos1VnmwE7JSz4Fbw3ghdvNvQYwPWWpRYajNpHwcxvb46sUwiQNs3F4K2D9rE1EdC69u88X6goah",
  "key37": "3pd6rEXystUgdjV98TmKJjzXizZFfxa9v9gmFtS2971Y9VoDtzCMtkY99zrN6KxYWeqAXaJB1TQgsMh35ZXWtEcz",
  "key38": "3vR5xJiWZkmdAD3MULYvBfAfxZ6Cuuu5Mt26X9i6ofuCiYuzGHXJES7z2gi2dad89fdqeyeeZ3WtLkcZcHh8LKfZ",
  "key39": "4axHddpGmedAe84Mu3vFQpFJDGE1MBbD2m87Xmd2eoH4B7qUTHPu5s7iLu3ZRLz6SMaLrx4zCxizX6hwy1gEsLdS",
  "key40": "3MG7tw2sq639PcJBesRsAWvJvKTBbnwwHUhfk8kiizRqNQd16LP7rvdDtkfkgsBkUDHMvZith6AVNi595CjHph2i",
  "key41": "vpkwWN35HSke6WcG4D5oGk9Tr8V3oS2h4oUzNd8Bkj7sa7RRLaieLj63UELwZ4zAXRme7gACR2cHdngJbtCtifE",
  "key42": "3NNhHjb7n5XgAtUvqWwxSYfPLQ17cqtACDdJXcaTSgReHEDJhq9zdRo2ktS5dJyWYNYaqX4cgxeKgBsyugZCx4K",
  "key43": "5Z5DN2yLSc2kxEzuDGTdF7AkhghEb2AmBGoKvGtBpVAJUGkoQmuZMrijyjnDSEQkxCnj22M5CCYzmL7ahCj4R36y",
  "key44": "41PyZ6pzEG7TG3h89rrryQiaZ1XcLxNvkmhowHAZqdSYSEC4b5Huq9dTNumMBv5hXb5AWpnniq8HRD9gs91d7wu8",
  "key45": "2Nip5gknviNZaXXZfxMZquyBdHK4vRh6AkHscsfdS63MVEpR5bM4dipf2E1R1yZzB1AMgDomh7Sfnbqz5Bo9Z5Mo",
  "key46": "5W4ntjYZCFQjPCz2sq2qzQRGm1qYaUzKCEt3SaGwHBVtWYxsLcvVxDhB2UuabtKcr1VcMjpeGSHPoyJHAgRU93Mx"
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
