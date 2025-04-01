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
    "JKVUkET45yptmdkEAbpyst9UpdmVDwEzyDwsxAEhR7eUTXA8Vwkq9H6XDGeHsnNAhM3jUECZdZqwwko3875GM2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U2MgU7S8wjfELGxZfmjsR59HJ1ayYAUYnRvXAvWwU2ANb26KkbFq574WVCbeyKGaPx2NE6NvjmM1Mtxkxo2vsh1",
  "key1": "5CDguaQLdWB91oQ47NK2rQ8vugx9NiBkWQrXfVnBHxfEfXvkv6eTUPnfUNpHkgPnTtrcZMGovMet9KFM9FoTHyYZ",
  "key2": "2RWdySqaD7dyLdmFyPnnMyhzChjTGSVqeDBHrvXpLL7iLXqXR8QvUpBBtmsECBHKWXjwbVfUEW3hfrbYvqpVgVVe",
  "key3": "3NW1NGkXKGsKGq8ouLipzzet6DnSRKXqgZ9TR4N2v82L45GAce1B9J9RPd5UZPZgzk9xQMEaueHLchZUtuDDajds",
  "key4": "5rs1KUmFL5X7NAkH97L98x1dsHQ3794r8d2gDygQVYAUzSQ7jT6X1WNym5xs5GE6kkZHEBnDVmGNgHAT1hxYp61",
  "key5": "61aG5ZETXbfEVDUs3gm9PvSeMBpSgB49oqdYtD2WnDG2asUt8YGG2rTo8PeYcqw4krUgbGNy4oknxAdpGzYUthC4",
  "key6": "35Y88yhgPjbHex9YYaSnbi8rLU6kL6SJNXiFkAxcfodWc3xuLdD6fcdmfeZ1a3Cau2GVK3qm2toLZtREqV9S9Vk1",
  "key7": "4VqiJPTMszDCAAf1wkMUzKyEsy3DiKFZp9Z6jb6g9foo6KUSrCmoZ6eAFx4D8Focb3u83SqcFPKyLvfjofYx2eCW",
  "key8": "3THVKasFtCsaK19B5GzCXe3Mk3uZaueZnLLVgHA5iSCGt8cNxrG3dYhrLdKF2QxQPv1ZJiar71CytzeNkqjDG94u",
  "key9": "3K9TfNKwYTqCZikxigrVumx4WLHzh4mdvPj4i5226UyFvKLvP8KYpwX5ndmbdRmz9mz8jPYiFLnMzf3oG1ZFSQSR",
  "key10": "3t2EKfkcBxbdSCwzuuRP62DZDokqw7brQHMPSXSAdE5i1fajeWASurK7buCGKL5vgDuvHJx1dE5BqmwBbqGsud9p",
  "key11": "32pabcprzAYPH3Yp3kKE2NBbVm9K6L5Xxw2skE1n4YBCZpAkdRm67M2cReGanq24zJ2fLEa4EP5uCuEV7EZeJoL5",
  "key12": "2aNAPNkMyE99LDRTb2bX6ikDB4nVSxBXuLJ9tSz5ttdxqfeeVyGPhZzdDA259n9uj8Z5AeW2K7VNKwtjssyLhRTb",
  "key13": "iBRW6sLWZu3Uavz4ZnUeWNe6qqnk563sw7EhAR8KJUgZeTRgsrL375p33VPVaCpBYi55yyYGDpcTiz2e4vUoJrs",
  "key14": "AStgPvnU6WrzwwChE6ymDPDPaQybcHS3882PrrP17i5fJYpRP2W4sXXyt3gxEFNNRSBjjLALhZN3HNw7onAyZoV",
  "key15": "36ZCMnMeVaHp8fpkv2fDCf6fG3UuFFA5Kcid9FtAizjxb6AFzYTGhP66yhes6cVaFMfnBb4sguvGL8nKjoSgtD29",
  "key16": "DrLNxbgkDk3CSPqxkGbpP7gmYGJ3oHxnBP5S32NzogctQ3J5HfJHkFVZpYA359xGnmDecRXV16x1W9ySZWuqvpo",
  "key17": "5PeLJS8zbuhKfyAdnkQJ5VG6LCecgRsvmR3kmwn441UmEkGVqtgNbHJaTpkSnRGe1jXRMTL6WHtTWBcWfwmULwNR",
  "key18": "4FeKPoFXErQuPvjM9hVWXMxpTQrcdma4QhkPnw7iuGBUrMpx4bGNqCLBFN3zYwBnvBbZUoHupzHbdc3quVTgmcX8",
  "key19": "5DFwet9DrTQre1U8ZeMGm2w61z9kxs94RLsNbHzGzzjmgnXKFP7sW9RnNEcmZRMe9Z9ueb7Ye3rnatuCvA4f6RvT",
  "key20": "3iAAJHVLuatuFckqGUtQY1wjKKGHVs3z3sD3ttVzy2VMX57K1ZLeuHJbQLdbGtpcYntRCuwikSGXnUkzUhqof8t6",
  "key21": "56sidyQNJsBNQGEUfK53J8wMaTqbrxRmXCXMYGcvFtfeRX6U5iZiJUD5nzRPtDj1G2PB6fDaVXK94A6ZTJPc4vsz",
  "key22": "22NLNSBhSGoxyPkRHW5z1pr1Zrk5H4RJdeyUL8f2yr599PedvbtUHc7XAUJKyp7d7v1UUDc5uydp7EbaGKjLkPxX",
  "key23": "5JcVAz8nosW9ZF1BS1BBBKEXi8b1PPVBgqRyqaij98dCaE21pNu4PrJGMLsi2PhLz8Kusm2zP4Hxwc1sh6PKDv7n",
  "key24": "35dCrR55oxyWYX2rZEX2vbQMc5g6PfGdyHxKozoFpEKx2HS6BLFBTm2BNTMkJ61pKeMos8ADXJ8yxpkbMhb7VDM1",
  "key25": "3dbaLwZttedjAFRnSRETW5vjtoXAcdNR4ZUb9G6unTNX9bdRvKRYtMwAFuuKvKD67onXsTDLHgmzSScRxqZDGP1y",
  "key26": "2fvv4YX7ndvWak8jzL3CtCMcUetc9XgvKAammgitabZmAHav42zbZihGXFi6cmaTJRSnBs3k9Hj5eGgZ1CRhf7p5",
  "key27": "2WjgdhZkH2yxMYjSxAGjsRtjQXWiwrjHbdYt15aob5WUjqaAwLWTB85u9TsWuZ5CADtgasvyQoWAZxwD3ieppPik",
  "key28": "3WkWx1b976AC9VnwWcjDYL8YGWT3RtpipMf3ngiUemHGRtQFcz2tAaAvQFqLn3PNYBhwkpzUemLSKhTLmVV3H6Ub",
  "key29": "VDaoCNG5fSiCjDqZ53b98s37GvLqUKoz4dYdGKSBCkMMv1c278nkjnK8PqdhcA8FGPxddrTAYUeujpwNakFsW2j",
  "key30": "KBTL8gzobUbRrGyBbYTxKoeygSQi4AKjyjS2kk6Uk8Xi6T9FXjXSso9UPHs1j5YiTn9m9GCPg89xb9wJ4vwRjyz",
  "key31": "2jDrU3sonnFqcRuY2tVRAU8e6UMUA5HLDiXwSkzrEaNXaausyHtuHYC4ANMbe7gwBkppCCbRidpX8kSEUAvCZRsj",
  "key32": "3sYuvthVBLE9XbVu9aLAyJ7jHJBsbfHb5DmnLWJ4n4b6V96TjSifGNBfoptrqCPT5jcX7BNZfdAEMFgmQkia33G7",
  "key33": "3DQaUM3a1hgoJRtPoAQvdEUbgaGS9EV2zHojeG2JZfS5F2Pwbi5geJfSTUxKdssXQtwuzkNruZagTsuzkjTDgTuD",
  "key34": "6Ab4KH4oSqXNcQXiZ3F84tQQgZvDHnXHG7d3ytwLkexQA8qd3oNj3f7tcakNeEGBvD8Yb16UTUYba1xwVMD3vFi",
  "key35": "38g2cjSWroehH22whZGqDbgXbMFitj77DzKoUdAEMtFuusnwgbfL76oK4ypAxW7A4mMYCy9HE8HD4XWuJEdFntVd",
  "key36": "3bewEtAop7sRepDoL4A7MSVgMBQE2hgePKYeb4Rwo6jxNvBvGWLrWfJWTtzNZ4gSsgUXyBZ68WAXhChgfjWbWCgU",
  "key37": "5ewYqweYp9TwfxzgpGVHcjdnv26WHnvjS8MURaYz8RaEMNYhNb6YxaFSW7xciQdHckpB8uwaJzhDe64GGcZ3yKbQ",
  "key38": "5XakAxeT9cs4Md2QaR2enWJkK4KjCdP8iX3JiawN4N8WUJZuUvjtHT4vueyKnynGxo4qvAukuudwmt6VNPfP5jZL",
  "key39": "3MorNtHeaw51sH5bDouyK6iP8hPBsadXvAUa9KNNuaRpP4rcJ2hVXiJUPZZR8MCZGThLR3DbvBGXmA1A4THfkYUG",
  "key40": "44jMHYmgtoHwBQD7WDmopZ1Qv5FmHgVcbwwzntFJu8jtmVV4rdFydB94uMwSMGN3mnXdEFjbF6ctfr2Km3NWPhVY",
  "key41": "3xFn23yT5zKfAeuv3eASQ7doEJSwqCqkxeuDCv57KjMj3cxJpWaJ6S8Q8CJeFaE3hHVJJbpQbYd92r2TnCfXsPCX",
  "key42": "3CwVWLVE26yGEADFXwmefdejCCqtWYQo2A9GhLi1dqo9PFQzfWYF8J6UVkiz3peK6T5F9WNpcoihGxPMPsmLdiPM",
  "key43": "3ZmoRSerwKHKGgQHc2N1GUs1BNDpFqTbGXmXzSYw1k2RkxqgNBP3RyCz4L9LmBng5eqcPV4ZgdJQSyCQbH4KG35c",
  "key44": "4QjJtAiCYPD6tiVwgRcqSL96B9FtbJoWhB73CPhwauCG9t6fQ1kmSTmgVF25DN1tZjTKehWg3yvziA12Q9eodeUH",
  "key45": "58Ze7P8es72wu2ZtUFQnpE2K8PAZTKadaef5d4s8BgwAtfCTkb3f8NQwxLvoPs5taeLZz77VnQV6dTnYPw7oigT2"
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
