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
    "2mzkm5SudgxXPCe2QakGhsZJjLUKHaP53UTNoKn5BZ23Z8Q2dgjV9V56yDQdE5UuaE5DSwQPqXemDor57GSnjYro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmzB69fpdwFj3Xh6H49WvDXEKyZNN38vuvcHrkN8NoYXaLmpmRq2UYfZnWozAzZisZhvKyTxhkiYdTaXaeRnZs1",
  "key1": "2dayoVznDXswtqdZ2oV6XZSqX9xZwyhWhuVLcUT8DXWY2UQLT7Tpbh3swRrUDCRS2V7mhE2JJQ42dP6ot7MRq3M",
  "key2": "HUDNCvnhqhy84KFMqMWuYSSCWZYWhrZ9FkKPyvunaZ27imBR1E71aJaFEPqre7d7XMu9omvc3ersF7j3ikybyrP",
  "key3": "43SWgq7pQbjnLzbdMeLUv4Ea9B3KrBNZZNsEA821cZAYX573qdV93iQVgnH6QoBb2BuaX16pA66gKumyPMa7ooKE",
  "key4": "3h8bk11DYAiG3BHxmXaUz5uncTcTSzKt2MncMWXBahBJxwt4Gz3F1jcE9Uah4hQ6Md4nBtWBZcBRR2ybNm4uvwox",
  "key5": "44MZfk7hRunNK5WjcFrCPoN5ksD6hzCRTZn5jFFEFQiqCyXteoLQ1VMmGvKjJ4AiLJurqxNnjJfbXpBURcXA8Mmg",
  "key6": "4akkwSTxCwPd2f2bkh3nKFJSAUjJuaK4yaEBZbmCVJUkwYU3VtSu7Guo9kQ9FmonXYn3UxCK5NxWQRgWkAYVQT3s",
  "key7": "558i9UqN8qnXHthWpL8FBr4NHKDzSGT6bdNWrq5URT8x6K9vLoVA9FBK3KHMFv7Bgr6c8uvYwkZiEkEi9WT2v7uW",
  "key8": "3EXrtUZH8oGoviFDxnmxqovFXQezcsQbgPogo9uxjRfsnw3FMPsUq5ZFgiEqbvchZ3gCAziuoo3Sv5z7Ua8ArMMk",
  "key9": "3bLd2ittiQBMSeFzQsm815h878JPgfTzEpAyv62FWhbbGuZLTfkD2aREKaXyEj9fdWh3JdFvzDzmDxN9BRiyXaA8",
  "key10": "2ifdpcTFnvtZ8UQqmrkwG3nxNVPdMoZHybtAEPjTYhVKVwu1TdwRju4FFgCaM1ekbHRuGKwAmN6nMwEgiMo72brh",
  "key11": "ahioqSRg6cTR3aVsZUMiXnVS9Fn8YRnL1uFUTFtVDTefNJwu4tPSExRTGTwwQ9wp9Mf3GjywnhYvaySvL8mUmq4",
  "key12": "2Nh4rBGfmKqfQHh3hy8Z4kDZ6gbKFKiyVdUU62f28ftnyBEQFoh62ZSTX3DSP25ZDzaGohEYyQbuSBkpZvg4Czgn",
  "key13": "2gfLi76ncVvAzch51eUXNu6zJpwW7e2smsMMZY26J8ugaQquM5S9Csu1kzEdD5pVN1Z9sAcnRyrvSKtfSmSX1ciN",
  "key14": "2VLKLtUDF5tdUSFNtv1RZUNDWeAFQTqAiK2EWrka13kDFMkbb2693ZsDv5v8GC2kyfrRA1zHoS97wupJubGm2tXZ",
  "key15": "4w5soKv7eRTFESH7ojs8PtCpAzXPewwo7svy5kqFDD5X7syaeg1te3vMR6gBUjgQ8YzfjVcg4KmS5Voa6AWnBehA",
  "key16": "HDndg1Pjr1bf4LdoDf8s19B8RWhe8xPrPS9FnPFgZA7R86c6GTvrf5XYtB6awGiotVt66dGM6YKWPNHvCYnZ1sz",
  "key17": "2musYg8pRz4aUcfpZ9SdgAEuoh34fZfjx9vLozRQPk91dGqnbxYC7Bg3T6kcnpP1R6WgZRGs9ZkmvhoXE4nRQAcF",
  "key18": "2oR5yk4h92mdQrmCNc7YUNvG15xo7kSceqCcPxopQ3vU6VZhM8fRfKEmkBw5FbC5dALHwCxYHdTsnJ2Hq4Kis7uf",
  "key19": "2sp1ETaGbPFMESZbMm2RMBS5yQi17R57D99XfhjzfF1F5HQinRb5reXGtcPyEHwHYu5zf4WR4o5MWmdNEFAsye8B",
  "key20": "5YbKtGs91YYP6G9V9oFwZYiByQkApLLwfGD4S6DM6UKiNwG5xs1Vcq5etDLozyXEvh3Q2kG1jWP9nRHmhJicWLjW",
  "key21": "4Ci9rJb6neJAnq5D9xhdWwvnJzDRm5vMFidZGdYdEKgZbBMY3avpXDsm18GCsWmnUNmeftDy6UntNEPSEon7T1wu",
  "key22": "4UqkiS6pBWwNFYfsmAmwj9jp7brJuV3Dpx7S99yqg8SUEu8Tp7bbmnPo2rKFnUwtjCJoyuvvKoB53QjAmddodW9R",
  "key23": "4YtzpxgH5HTn8kLWEziBd2xbqHfEJwDCDmMaLA8jMkJ1WU6naYfAkWFd1ToA6qzYx4N4hPoAcJhjLBgBPwb6ygiB",
  "key24": "5CNQf6MGLbrmJwYUA1f1kL2ZK66MFk2Hz9zz7wddXfh1xukJVP8p5WC7yCn4ccXkSkFzBkGNzWkGTw4b17it7c7z",
  "key25": "34NJxnbVkaCAQF3Wqh4giLigqeUbXmMLnX7XqNzVFYauVCeiu5H1SAoVpdky7qkxXymbLg4PmwXKD3T5wbbA6TWs",
  "key26": "4S8eCmag3b7Zk1XVBx48d2Rs97robVaBNjw3GADypBJrGKDdeMNT3DkRm5RWPgdopCW3HrA6UTY1CTVHyYtaXrdC",
  "key27": "4TMkyWgJte7skzi5C1xSQ8T794ARQx59TysZTBWf8SP6usZt44mf7MoQPDxjbF48Jdz52MNPmJKZNuxoFHHskrLL",
  "key28": "x2AzEjDyKdBHLZi7YJ3ZgCu15k1Zr7oi132QAjJ7vLrP3AScdVZaQ4TXdMHiCVdp5RBo95EHSNA34CUXtu4FLHC",
  "key29": "Vzy66H7TPDXDWYqZRPissukyQtx5Mp7bUFpjAs4z4BY88MJkw1hePW4RvQu7DfcR2VFBtKmwu9K8T4HTM6FiRxJ",
  "key30": "4riYH5h23T2ScviDN3XXTrfwsqUq4whNDFKxmXvtV3AbGfLTE7cX3z37CPUqez2gAsRms7JmxHPygU8ZidNBzPDk",
  "key31": "4bcUVUzHCbK7fAoAjcJzphXdanukp4KwYhht8xfTeGBMggwity2U2Up8yfeE6k31SYCXsjgzVsmCvjt6yupGCrPp",
  "key32": "5Pcgw2uA5ZvvvfqS1HLqHrDmDjjgfyihvZ7giB7Wm4m9kcc5Pya3dWhuCfh2ATZvcxqpUQ1iAc2qtULjPF6uD39m",
  "key33": "2XEMqn4nEuh9E96mdTR6s8jSRDW7hwgUVJw2vaoUZkc2yCLFxx5hjt9M9XvLuc5T9V5teZ6rTZzBFtSb9tJWDyAX",
  "key34": "2QSDmm9oTF5dvS39cuZJLxkHZCZuUHdGfxg2fY4va6AcvnqfGVpgqB7dGVB5Si25rtzGBf7Qhs2xETRDvsy6Lv8T",
  "key35": "5of6uBXyWRUpMpY7F9agFjEcRzitTQgPDzw32sRxLEDf3Cpdnc2ZRf1tf6GNwKeHKToyodytfrsiX1RgWWs6Jk23",
  "key36": "3HvjJ98Jd5p2hZg8kcFC541vaAwdrtEB88AZFuPBG3Jq7XwexvcYwtxaqi3vPvZx5xXoUTRCV1Qmc2qHTF7VGn3Z",
  "key37": "4xMKopnLK8W4VTpsAgPe6GdDHM3UPCp1G1g1vZAUkK67JodsjogCWTKZoNdoTrFCRQ1nqKe6mXZooRKKHD6pcJVN",
  "key38": "5ib9kyej3CAMkNV4ZNEzjEgTeAuEUMbUZJ1xu43PeWoHMuRLj2tP4Wb1t9WF1GfXVHezNMMcnCVW2VzDXBkEgZPA",
  "key39": "57MtAQiLhMrGC7Ys1qj5eiL1vSNuPTTGwZX5cK78jqgZnZ5oBpjLt1uuBt8GZpiqyv9NRanmb1YTCjF9kw3XmdbK",
  "key40": "2p9Tm272kXLohDCvPkbere2xnp2xauaZ16JJ9Qq6NisQGXvgCoczPDTf3vdJXLVfTD3ku6Z2kXd76G58Yk8rwhbN",
  "key41": "5MKC4FchRqYJT15EMVNa7uHfFJGpJv7fm2Y7DxyB6ZLXEnDayt5qozZSxC8g38F8o4m9jmaB76UbKvMNbXzHsNts",
  "key42": "2q12kP4ZYghvJ7zZbTihQ59Wupq1GJnDLnnkQvuepW1TT92tpheqas7NdG1L66gooBryCDekH1aVPBxMbFZH4g8Y",
  "key43": "XKxc3Mys7Ls1fjRZhacouQfeKadihBfUyxfaFFrQpNzNU5mPw86m2hzfSHd6HNu4BFoCEpxfboUSStBxh1nwRGB"
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
