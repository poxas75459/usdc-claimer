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
    "3G3MHhDixj4hQBjVDHV2gzb1NGjRQ7dKUaFtW8FtV9rqEPkWb2CB4fdWdAoPFc1daJvmiBMHFYm9KeoyFGZPWheF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k7humj8u9qMmyjgVvhwUCrrZFuBEhGraTM9gn3eAx2VAQ6sv51SaRtAc5guZWhLxgJ1hMYzcVFPpozT6HDy6dnV",
  "key1": "5Btpp3woL1gvNuFjkSHqbhcoQxqEedLdYCMgcK1bEAzCicUwWWsdrhxge9NZqDi4yXNSr1hASGduaDvJA4vQKS3t",
  "key2": "5GAE6aLZaVuJsJgarwqhLDUxDLDZbqNgkFiJNrgWX4d26mTF9CbL8KyHYimZLrPMnNtRyHPJeMjhd15LUnHEEvS6",
  "key3": "L11ouPVtTf4trpDpo3YrXLnb8LwATwPFQz5HaoRUforn7bbNThBbsMajt7DUTrB8bvZ5kKgB8EypamA31GKAu9u",
  "key4": "71LpSLX9rY2zww518s7VzejWdkpimouPmnZwkGm4XoXUPz4wCUiENHwi6ssRdAi5KW1HYzocRn6zcRVGVQgVYoi",
  "key5": "3FrFFTPSS4ZhtRkFNrNrznTN6AzNR3Q8WSe1moNvq73SHzjTT9YJT2hwWp68oGVoXU476xM3Edjm7xbqTiSBCQFX",
  "key6": "2TghWgDhsa4FFvaKNJvofkReLs3AQTG2JXBHuBGBJmsYqYkBer8CcfZMVjFfg9Jt1n1hAic4jvb4eZ2p2XtG4ESs",
  "key7": "5VepmLZTPok7euq7VTRSbdfb8TeeLJZHAVc7KA3ZJhbhnhZJWsYDzSxBctwez9XuP6p4zxDmVaX8jNFep5NB8KzW",
  "key8": "5Ai5hDMnMGJmSAd3xKL2MsPaYgK5afe7c8XEKSbfv7k9TYp5r58VsMmEUZUVACUB5yb6NBrnuZt9x7oX8xP78XHK",
  "key9": "4CJTBi7JZTyMVU8Me433ADQrssScdzWnyDurZoW9t7Lydt5UBFwTw7eXpCGDau57oD1uGwLjqJPrJCTodw2YVgAa",
  "key10": "4j2Ko9mF39911N9hVoscQ7mLy53vmH4WBD5okCsgMG4Ac9bhw26xVyiVCWHdgk1ZFm3cg3sfnkGP5guYwd1FfHBA",
  "key11": "3xJajq6YTKDSjZcGkgMsLkMrV713FuLBXeovYchWckrE2Dn48DbFf7LUJ2uFTubR16KNfZEBFZbwrujjpcwamMXd",
  "key12": "28XzGN5UeLJdHcjaPc8hxfg53Z3Xm573ENgdebLVU2MA8V3hV6yejH1h3fmxqPGUC1RYtQoiG5wJ9FedDPMETuZC",
  "key13": "4e73oEjn9Z4uBmyyJPcRjhrUcdJAYKW1pGJRWt38CuSmegDN33sAoeTM1RfZX9QYu5AENXPeeYbNiCW4DvV2qE7k",
  "key14": "5dUmccpNVZXPCfVCJBFVKGigmmHN3Hym7r3f5Pdm8AFUNRGoKgQTm2pJ9euaSpGVBbp5TneeBBDNhaPZpdCL3Bmb",
  "key15": "4fmijdy5ZgUxpG7o4PmDc8PEVgQwvMPCS8mG3SxVDNV7BwaLqLLNJYoimcix6yiKs3Ng36ZdgkPdKQwe5dNXHfcc",
  "key16": "5rL7fUPyi9eboDFAUUe5si8asUiY8xxLw1dww15F5nhT4tTgQnzL1tdXjM2wyxmu8zCk2eEM57KKFwNhaebQTDKa",
  "key17": "3F7EaeCLUFLjUM9R8wAVPS4EKVJUVurPrhTh6xBk5XwXvaF6t7NC3PXLE6LA79UV5D99wSqDDED4f6gzs9YUt7ih",
  "key18": "dfKwLGRuVyj64fEE57DhaQ357zWHq1mtQrxW4w8H376XUgNnrfKEnmdZ9mojjvYC2P5BAhBgG1Kk3D4fw45iM89",
  "key19": "4HJjF37QNQfzDqC1ybtxduw1J3R4KBTKHkUfWCWoK7MHeNKq1o3QvxQfh8v12Hfm9itphwTc7Q5KGeTesx4sCdq9",
  "key20": "4PPWhxNmHKSARjZzXCeQcTFN6hPioG4d6N9XBUEijsAkfr9CRZoaZxZYELtZenPSmYQvueKeKYgyeQ6oMUwzVeU4",
  "key21": "pTvoGzpver3j5jYm7bs3FXxbEsCFNLUHfw6GKzErGn4uYQee3ZxxudxZDbnZf5ZrHoWw1EfkbUrncrJnbpCUdPz",
  "key22": "Q7wV2EphFu9ja5HT8bYyNRBnbvr1fFrM3iqMiiV8LFxj33JrYvLXZiMH4r5Hmd1VgnSqY9SBJfVqA1yPKFSYQXB",
  "key23": "4dv4jd78ZwXJjmtBBh7UN4U3amFM64DoNgvDoemhbCi8CGNVGhY9bJDR7sHVQviFqKHdgUoU72wJCXpcwcuFdR9y",
  "key24": "2ST8bjjChDjJ6rwGxAjJnyKELpiHamY2FPd8taG1nwDcg7E6VjL6eMqCBMWCY5E56DXfzR5Y5edpuoBmGvXyWiiZ",
  "key25": "2XSq7kre6p4VAoprx4mV82pHP9osVnSfM1gCKKF739oe5QoDHSQhjT42iYSS37S3MgxwWmmYEXDLJWBi5SvhRcJS",
  "key26": "udVSwYoh3ReJr4Wp9aQirw9kzuzuuEBrZAPpCRjHP1QZ7Rmmb2VWxa9Gg264m7PyiCyVqb2V8ZXk9JujkdCkBtV",
  "key27": "5JYPDGwZXE5ABrdP9VXvdmnMRcBNGCZC4Lp5hfbsh1d8i5bsXn2yzPFdrdpqx8BZ8b7GqXA3EmKWgnYivCN1t4r8",
  "key28": "ksDtNujAmAbFgztYLQdmPPgNn4ozi4zE1193mZWHneBQYzpjcbRP3MwMEpP3ZHu3v6gH9snZ2Cu2g8LfwCcdWkL",
  "key29": "3N2NJ3MSvFqJgwZBEQzEXcARjaTKu9yXY1gotRnFqQnNdYfHvKpWvMFt1WN61Bjb5rzVAvY4jyfVzEUe6JzbWbdf",
  "key30": "66rKyQqyThwg8tPM4KJJ26oCsUPZ3VByuWm4HcsrHUcxLS3kfJorNM8p6uMaHYiv2DCpyf6vwmqNj3ToVe24Sg2G",
  "key31": "t7paREWWGsRqAFHkKhYVw8hxdNMhiXfxkgRMJNzkSnhRc5G48KfHPpgtA7YfSuaoBYoVnm27rh9CVFDgpwf3tqV",
  "key32": "3wfUsnWM4Zf84NnYMpLPnd3VytWR7L7BQ91mZ4aMvkknYScDSyhXNiGUBUfFvjC45xVs3QQ32ubLwPraDwW83NaM",
  "key33": "4grNe4LS2j38aHmS3Qy6Bnx5YV6Rh6PQjXprNGohypnP8HhvunuymdEaov3AVD4raycKAW6DYyAo5V6i8n1Usnde",
  "key34": "5nPtcskzmf8TseRJySaNtJGTpBQr15Eu2tEzV4aWvVawJjrmxnVvxEVMnLiBsRiTHqXFDMRh3aPrar8eqXqVjn7R",
  "key35": "4L4U7hZeqBa26W79JgbQ2LMA8jNyfv14DDa62LLsRrSq8KnvfVfZNWWLWsyGyfVhcAthxM9tWbvsY2XDLA41i53H",
  "key36": "4WuFkbMxw2ajbjac9nN9Lr7d9rsoRSHeAiAmPgJWGSTE3t7eUZnvHtdY3yZd2kFmSJ5giNz4Wo3igA6v3Wjsd6qJ",
  "key37": "4n4aK71RYFcDyE1DCcodGYnpvej168FCQTSz7qEsqrng9iW7y5SQNnHh9bw8Fnfv2JBwLbRZAKPnnDtEXWpyBRZx",
  "key38": "5pGtVBo3jwi7S8n4nbxBu32AZZGfUC7jBcHhc3w45RunGzPh7RxJFFoSLENWYQR5WS3svUsYy34R4rhmNpCcPcxh",
  "key39": "4LVsKJWVyVWwDUH6zTn2Xq8NgmWMrJbbLS5oHbgRjtw2KBJWusmQEZNmKcYhHqfFYhzja7Lhw8QBS3GmMpVN8iV9",
  "key40": "2Kot8VGSuDeFFBfWJJvgm2jzGMN7zqRsqBq782bG9BZr6g5K7T1fEzcb8u6sSujZoVPFQhKiPrTD6keVowGQFQBj",
  "key41": "4ALhoEVnHUd9CUjwRR3k9MQZdrzWGAcutCi7CGCc3sYMiYUaGp8rCQhEQnHXLYpHdsbCyKTtyWfv2j1HS8tQM1Kd",
  "key42": "KfSvZQpCxrLZ9xEhxg9WHhFk6ErXs7nv4gJqeExuaZYnApSbWECQgo1oKzPgmUdB2rHv6DxdYkbbfcoyPPAq9iG",
  "key43": "4zbokeSbmuWcJnTr1s3Kf47szecgNg18PHhrt6vNx5KVmq51oXkKw8uzEwmUTUq6noSwDFCGYyAMdam61gxsesPD",
  "key44": "5QMnpRVXpATqjBHKaMbX3FNMZLB1VTYQiqN9SXHiY7iav5CkwRMyberyuLchzEDMGGBYQN64s5arUyEpiPAuLQsW"
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
