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
    "61SjNm9BJSpDmx7aDgCpa3wYWaHEUGDVGSZkD5Tb6qKg45xMXm78gngEweX8feWHDNYPjwDEmEf9xUbKhuHMeYny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61TujTLFrAez4XSdp7YWVtUQfM9CYgb7Fjd53Miq4zJ9cjYaXECZKgrBmYZv1tp77otUmnqUVaNx4GX4LAwh56W8",
  "key1": "4r15SPUvFRN2YV12SwC1KEK1T39sahdH5jd1LBFuUQKnXuU25XVzef7dmD1LNeLLrBoZ1Z7H3S6q56TAvjoRcXos",
  "key2": "2mSYAYho4RNp39UjSHQvpAnPJdpsgUhjw8XUSFVjnT6oDX6K4Dw6eUppsNbsQ1NL2hJGPbUbsjUeg6dmXKPaD7GH",
  "key3": "4GeZAVnNaA5BQN5tVu88xwUTd8JRGU2GjppQ4LKUSD5AzzwTFeAqkatCxsmPUUhXbDodz9F4Mc3rBpyXp9BXXKJ5",
  "key4": "2wmZLBs5N2cTWgubHjciSbpXWy4pphEGtJeY4gG84C5WgVkrhVtQgj3LMJS9AqjE8thXqjvEG2y4j4eynEreKF15",
  "key5": "2BCyaAzkPiGigTr2vFAMXizvkfREAcwDG63GZfqiTm8jm6JTBcsTtdy4zMoHWNHdF55eZDMfhncnmS5hnah5qJtz",
  "key6": "4UjtxPFjzCoVANrfU4ekYG26X9uX8uHccFrxd39Vi64Lu9GRqHXcDagQNL67di2QpwyYARejpEDVNgm3HPWr52rp",
  "key7": "5mWTDzyWdxNGeCbAvggLgvdb7hSCDcLsh3prQ6vjULQgfcdH4DMYUGk6kTA1N3cU4yfHDpKwGW4Dqxc3ZjSQxPbh",
  "key8": "5qSGQ5NJaMzmyrrGau5ULLRoh1gSRJdhmuBh7j7sAXstDBnYCU3PSYsHuXfDrZUTcYAfpGiC6xhM8uHHHBzKUd5W",
  "key9": "2uSACK626piNAmuLxSPapSq9mVto4nLEm2Wq4HGNPWMrXXXMnBBrm3SrtCjbWdvVwXGTgFmJLCCh5Mq5EL6MYBZ5",
  "key10": "2ELzSrRe8vGiiJE4s4avL5AbXdnUg9LJfJz2crgm6UWhyA2R6yNNE8rvjeYyXpB6vZrL9bjpBymLHvaQyGmmhMC8",
  "key11": "3X5umDMxbhq82EqENhCc4uK2bU1uJ6UKC6RNLg7ezinVtYxAaCk2arbAJ7vd2zYcsYSK6L4CWXsQxqHKGZuZcDk1",
  "key12": "4F8rFxWGRKtLSXjLwVPHcsPZRtHfAo6bcV4zNRDs65TCDFBctfaA1pBWKbEoPfwEs3zgevRDRK4krPHfuyRdGp1a",
  "key13": "51N7suj1Ximc6epk6ghrJFzvHFmnghBsLugpuNCZAaJV4DgauNRMqfiaj5RQEyG8kydLraMgNruni1wRVG7TLGnQ",
  "key14": "25HqsYMoUmGkF5QbSJfGB832kSmBARCsjLFTnZ6fzWHy3iLntfUQ2pyoRu9DW12NCxnqRBjNE2LWkzVZ6Y7xwet5",
  "key15": "5mWx8Jt4aUMFQxoD9xDCGJvEGE2MNJAXQq5ZQs9SDNnZ8jzz6MbwR8pDjkYseV7VotQGSzht5eRZxkLKdeXURNiS",
  "key16": "oDHfL9W2iAgmVYrW9MAfdef3fHaSKz4E8HFqzd1mz3JeJbeqYtJJ7fgU5XWuV3U2NytMBKxiEFSM5mdrQ3Gynmn",
  "key17": "3c4V6a1bDFKN5zDbFpnpM326vqm1RwHx5LPMNPh7D4ynmhT7dQt4vhkFnnEN5Q78RcuHY54YEoq98NuCME75muye",
  "key18": "5msDMp1ZkPs1RaDKMfP3UviusKdzhtCbKBsH49XdN41r4equoFgt4L5NCUvjdF4VgKTxDDiArT4oteUVgZ4vwzac",
  "key19": "DZmMtxeY1XmerYhE1mkNPYkYftm2aYeE5QsMKKPBS1rubTFPjDh9h6yhTp7jLrdFFFuZx1Lhh5S9rurFY5nAk1h",
  "key20": "5KH5r3FJp7imasJqnvvFrcsm87p3PKYrwRTEhU6SXT2kSAeLk3Vs7GAx9aHAAg828Tcu1jb5rsCJDsVKNc73baqD",
  "key21": "4LdgjVp5DWPpU6P15KymfyL3PuTLq9RdQxhPYK3yG5h83wGkEACGPfaqvdtdSvV4Wv9zexb1CjGe1q8eC6dn7zQj",
  "key22": "4osiUwzcGr6VBE3GAKr3ZFnEmZdbLtE8pzBKjoh987VSkXi4Kt9aV9aKTGgKZC3uTAfDi9epaDNaaK6RKv9BB2cv",
  "key23": "2zNaxdEMeR1P3aTmUR4m6XrRxo7NXbMrCH8v68Nr3KVMEnTYC7WT3GgEDQhKKUgdSaDMW17BmeXGRMTrpum9RPL5",
  "key24": "FzK2m43CRRX8NuvnrjJ5WKqXSgxj1Ypro2iYULvtXGFtqvNcKAJiT4xCKuH4QtBmRpAWkTQttrNnDXPuC7BAJ2s",
  "key25": "28v6HbU6jZ98HbRwBgM76Ks59JEwNFq9LDPmxbzBMfZ7RwSAe4Qxu9zuxw8i5Jnsx5D4Vd4gzBKrHqZxzLGGSCqa",
  "key26": "4hHzhJxpkQRX81aP3v9PJ6pCmF2m6WxEBAoywfkVouCgViE7iMgX76ajaDDn2ekcwRao4TvUTt7FSMdJsdu358TP",
  "key27": "2gtn6zwjqeLrxvUK2UwWB2a9eNuBuroReXKU8FkummWPqS7ttTrgz4vFW9kC6XLGjnaoHLSShvZTvxF78vyGtoti",
  "key28": "2FjDSL5wbM4W6UmAG6VuoByK4fbDi5MLFxFNqLPqLK4bToT9hcdzTwFPQGyhQsUc6tjfSis4qAFHdfJfe47h7D6j",
  "key29": "G68n4cdxxr6VHowFKDLF6yUyhdejwnAUfkBPCVqjhBRAiBfuvkYfZ2E1vzaDPKn6rHYDWTfG6E2okVk82HCmpKv",
  "key30": "2Gp2XBchrKn4fyDqWnMs7q5dQwKDCUMmuQ1h9dQ7zuCeAP8KEApKdktrN1tsBWH4jveMdrAb36pdABs1jNGjE2sA",
  "key31": "38kv6nGS9mC4adoK36mXzFkBT5zFqRvwUCQgZyFh5B5wxZqd7pZaks4fDJ3WH1jvwCKpXQqf9LByPWQEGgfHdU45",
  "key32": "5Gv4cknaXqG7j4vM8koqnm7Hzf5zyn5jFqLR4UKPSC8d1xpj7xNEzFd4LjFHwf6TKaP93k63GGDh3TWj3keuAWn5",
  "key33": "H2mohRR5mZNyodzJG8M7EPAR6P8BKS3GE2DB5dD1RwhWyxyA8L1JWs9VS8ff1kzoUknMA2RbPVFQ95n3MoKXzbk",
  "key34": "HxhKQyi9da2K6XbYgFPufxxN1FP3Gqz6zZbRJcn4Ug1wUTcPmosnZWEcLBQR5RaPPM84M54VLmjTo6NCcY5gEdT",
  "key35": "4r189KuzmLzz8nyZc3LJjbonKGnaQMgGfB8H9eseookd8T2eoKFVn8wDZeYzaXa56vLt88Y3CwXeagstE7ViQ8rt",
  "key36": "41ymUCP3ekHqFCvvdzibrvEs3oX6yQ5WxBVLT6VkN1duVyC9evT3RFT9wu7nMiP5oLdbvF3dcuBczbW2b1W8icxr",
  "key37": "33FxiZMNRBczpmdGK61Je43rpHVRT2GcFj7d1DVJddbnAXzNnWcQATDdV8QLvqER44s69MQ6FNcp6fpTVm7Trshe",
  "key38": "5XVRLS6gTweUDUriy7dSVzXPGtkgU2WWJpVqkSkZmm34Uh5mip1zvCrGm2dYPrYNK9zttUV1KJWhxdZpG66cVGPL",
  "key39": "BFQofnMTtDnqbpWC4h5KXbPS6SpQD1NpizfMKUTcdDKXPbhpu2fsin3JhUbQ6UnE4pwSod1uKawMtkB5KwJHCCq",
  "key40": "4moMM74E83Sf7GimuQwew1qpbqiu5kNAHXw8idCwfZ5uLdytcH7GLEi9sLwXJGs7dsji7cTNzYepPTWM9wAagtpa",
  "key41": "4dXQq7AwkxkSsBy5fUryJ5a8tkouCz4V37K5BvguQ4WBsLj4xLVdHhedSYLaBrY2nstgV7h227LCqAQ1Szh47Trw",
  "key42": "RV8S3rMqdXC3vWH8aq67s42s85pQ3LFJBRwVpL39Q2a4dyCVVdVQY4HU138x8ctdJYfW95cf7Peqw1NjeFo4WqP",
  "key43": "EJsuo7Rstbi11NhWHFgDyU15p7x7NTdwAtNLWVBnHGr9k6Qak3DKZEBi8zGFV2gntBqjRxdFcmg3Z72zyqz1xq5",
  "key44": "5NiCThiz5W3rrBaHT1sd54K6BTTYJM4SY3AuE7qvXr7PaKv558CrP2pqS29h1SwHb1hxWJ5YhyPYsUiA8gpM1PbG",
  "key45": "2hGxpmSwRxchDcXp2vtyusp8Pueh8GaY45nsaN4b2KjvoJ1rjikmb81v8KDNbR5hQw4DmZgVem37DRUQSFVigUjr"
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
