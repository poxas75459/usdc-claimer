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
    "DRxubouDgsPmCu14LZxoZFsPBD3p6AC5C23kNo6UHy3W2VLu48dzcz3XGXxBxGYc5sKkuR2dcSZMvsjvRmqMRv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42qwLrHG84PM3zfC3Ry499UvgsrjuXNpd99uL1Er8BUWXUrsRewQ69PDtu45fBCowiHyHvWy8w5DTodBZJi73Tu7",
  "key1": "5cfcnPw6i82skG5mzdWhN4kamGqPnyAwELy6tbPUrVEZkNKY3yB4umLc2LewBXvWjLk5XbiPgQK9CE1bqSHfSerk",
  "key2": "2GMfmKVHk4spXFvZ7qqYVsAKeioQ5d4urMmVUMACb7PqtVN32Bp9T6hWr9i5kw3DngPGGYo47appPgM7Du1RaPEV",
  "key3": "2TxZJy7hdLMj4ezbcrcwZ3pewEA6XLoZKRsGMTXhZvft4bN5tJ6vWstWBeBh1GrTqhcdWXeCrqBNZ81C9azkhFrA",
  "key4": "56GZ64UUtpr8wd2zjtkzdJnGG3Mxw5mqoLCBH3dGfbsudZ5eAtFcrXrC8kQTvagxHCN3tRLctNNZePvFiTDADG1m",
  "key5": "B4nCNZ5Rv5imnyjBBapWa1nZovaUxvjyfQNT8RaCELRS1d3soiBtoRZ4UteGb3fu8RF9gWdjMrE5EYJ43xeR1iE",
  "key6": "41y3R8Byd43rfu58vu5xE46VEtxquvzfw5ey9vzz6Kavy8Aw5ez3X9E92siykjNZxh2hptsh76Jo48H1TmT4vfNj",
  "key7": "3p6YxBmJwR2PNX8CAZRzhfCxWEwiVNpctZ41WRq3ZfRdqEDWGaUUCASLG61fnpfUH47tkjtkCr84f6hHzBMBzrge",
  "key8": "3iRmk6A5mQHwA7BQrnYqHMui2QR6dHuM3Xvuv3EpK5i73wLAvZYZXpj4rSCNJcZKbacQzu5ZqJ4r2fK8VsiUEywK",
  "key9": "5Zh2DPd1VXAr6TuXiuKZE7wVoagDShxS6GfG8XC5ki9ia1Tk3NMDgwE6vBGjs8caq7E5Fx9mxMEpbb4mj86XQLAo",
  "key10": "xEunFfVSTKS8BYDjKMX2dMPLSZ81AKsFF8ooNKeoX6x9C8Gw733RLJDjAcsWepFBTt7U6KcacFBGM3yx3bWaoLY",
  "key11": "3pe353XLgqe2UAMq8ocJBgrMub3tXFTg3K15rqw3x6qRi2k4q3jDZAo4LAVE6BWzhgsdX7uuhkyFLWFwNSdfMb4R",
  "key12": "2eCWX44zMrpuYTmwt8zWdvKWiEUr5dXZCUBcd9Tr8Cfn26Pgfw58SAYvdMuXyJwQhuJkk15kySD9pPrqhLLoSirj",
  "key13": "5giTGpYdFdgpR3SENDZEEnQA5rYS6BH1XRoE9psWTfEwEZGYrejcgmw8sn7J1kZKWmt9nFhh6Kz28AnJrQgPmZ7A",
  "key14": "4hUeg91u6aWS92fFnsq657FzDzcfcKahjrmYk4fS2VMsAbxMJAnYjkoUZ67MQQavWLJrzPUG4wctfYiAwSfepU3w",
  "key15": "66RJPzMv1QMrFtwDYGKpbBsdjBBVXTiHy7hcz2D3d5fAxWxnFnHXm3j3umxSBXTqWkxUp3WkUUc5yXm8UixGzpbB",
  "key16": "5zax3aikW6ubupHxRCJ8Ahk6CratWvDVB4PrkkiCDcn7NZLALT7jTZQXBREbmEuVWQDJviyxzioSr6i3VgMjtduJ",
  "key17": "2pLE99MFMyJa1Qz4cnDTRtsSoLmmFjMopV6MyPWPkUmd2V4h75sSxfn3a8ihuvhq4VSLFis8j8xDs5P41J3AvmwF",
  "key18": "2QP3XBFmt5xxmazEdLF5rSk2PBRkzrqS3z2aXyJmdZjQkjLSrnGPGFaVT5G3dcv5HuXYkcfmP96K96yJTCvPEJeD",
  "key19": "5KrY9rvV3a4PxAdKED14sCUVsNd16rbXtWr4SJtjaLUZsFENwrphrBCPs2svjZwV7eeXXiiaupw1aqFMJ61BAu7S",
  "key20": "3xueEzrmMrCceoBVxtfGMNbj2PNtiRDkKeQpYtpZoF55tuMVGANRa6r8X5GZXmS8Z9zhdA5Y4a7LLCxVK2v4cguZ",
  "key21": "5UG9rMWhPv7YhaxsW8MWvBtpebCtcCrmMxiEQJvZkBjGLoubkoy5r6sFbDG6U31ZC6CxguCSV3eE4kFuPHdV95wm",
  "key22": "2NMYwpncyPbJgarNcaeqCFEWRcNBxwkv5JQKq7FdRpLSQahe63Q3ezBGPhunnd3Q7QqaSVsX58syeUTDo3VPrfT9",
  "key23": "3PpVdPkcsHWtxZB7fvpi1qrPSG7HyR8hxrYYGRyfbsL4WFcSnGuSGQ3TQ5GAsePiEb3YSeS1isP8NB2Fy1ejtXsn",
  "key24": "kywuKsGtQpm7JX4VdYs6rDu8fdMmqz6Bopzw6QgJtbwoTJjxCAt4a8b3eQwqxQqLGByNiCKrsXRTC9JDPoTaNAn",
  "key25": "43ECjV18pz2kYoTwDsWgn38xSf5atMYp8zGALenspAQoSghoZ8qFkDxhq2N6WfMHmEZGhMELpSR9u62p8AzepH4x",
  "key26": "5nw52z4kvNGr47h6oBF5uKNVXdwT3PkdU99fuvkMc8tH9pp6S8hfod4qvjAh5vvah5qZSNcfRNMr6gpAC9wbYAwH",
  "key27": "3rYBab8qV2aJbbp8jaDjcPMG3jwtEHj8cfG16ENJBYcwrvS9ZJqmKYRufu6Asu1KKMsMEd5xTn45mAivdq5yTDCW",
  "key28": "5PvDrKfuVbPt8A7sNy8eBh8g9wEESq16T93jMSPYfza9mECQGgM4sXm1aA5jz1kzdaVJC4i242oMUoBB4agDrTwq",
  "key29": "4NS9wVyaH83xbymLjp7VHmvyuXYBfWrZHsqoiMznjkYhga8dKLkNfD8V2Dfs1A89kYnevHziXacd8arzja7BKLTz",
  "key30": "2FYU4vaA1wJLitEAPF8bbAytM5176mASNJMi5ANHzyRUQyZJL1QCvQagHLehVG36574io1Ekvt6fBN83SZC25EUc",
  "key31": "LEcV9uMTww4mudTG63fSy1DyK8LoKfA1rRFZ9Arj1XMMwbWwDmJH8ndM7XTQCTmnV6nuAC14f8U6GgjUfpfGuNc",
  "key32": "2DcygCrPx2rEXLhh3eFr1q3Dx5dbQvDisTQAfp5sAxWtTzYaXWmxX1W7DgkbmeeHNCuJYx3cka7D7zQxnx968KHd",
  "key33": "213r51KfsGLuEeSaaMDiFtygBRbrfJvqSfdyGMqdYguF4k2F21znLMKPrxvtH2kLC3i8S8DALUoVe4mnThZPAbNm",
  "key34": "4MJYSj7kfbk6zYuWVrU3ZJGYe2nLkW1XPF7K2ZLYpNj2LjBbgzZ4wiYTBGUS7Xo2QA2Cq9nrJ7HQ6cLyXF1ygYPe",
  "key35": "bydvnTbFyEDsGg2VqVnDtnKszpCMqZKgafXuHksvUkGm7KrTNoSnHV5ySjCbR1owMst9kvbARfV92YUg87jNUhD",
  "key36": "2byCoamBEWxUw8SSbCrSutFXunigZf8GHArcM3RZHSKTvQVSepDNyskTqCJr2XAaPSXcYFqLuvDWGDPHnoksdkmS",
  "key37": "4Caou1VmLo1V3Pn28gtDkxLksEhK8PfggyooPhyFFkk3aPccK9dBE7jxCTiu1dBaehxodGavxsvKRhqvimNFcwJU",
  "key38": "mggddTULHpgspqGBeuNQ1q5Bd4TBuL4Pbaz8eFeTEGabmSCAAXeEcaQKEu9BFjU4XojH41aT7e2QgC8rqTYTF6x",
  "key39": "ZmyRe42od4LMrqaNWNy7vHxqQKcbPVWT2dE2Sgh9yDkkwXXEtRN6U3ejKjxHZidUxnDiZAnCi1DRRTEPAV3KykC",
  "key40": "3E4kvYFBYFPEfcZhrphoBahiFmZCp1pBxcTN5dh3ZsmXC3djKBEyp8m4r4TKrTxk3iMPb7wyGybQSj6e38xM6Y3L",
  "key41": "5X9r3bUSgtJDQ6W5fTqP4ZwnLJS51JY5fey5Q9gXau3u3QX3HsYbgyLkRZSwtUp6dExAJpU78PsaoAcmLiB9JrY1",
  "key42": "5Lu3VQVfmjJvGYnqG5ToyLYj31YCJzRdKbUTrAuBhFSFr5S4LfChSnw3iJ1vHg9m82UZkpzK8gZ7kEfans15kvSC",
  "key43": "4Hzp3bjv6T34AM3iQSQHQchD8efY2bGbSv6DVftFXXAxxMNMt2JWmn7KKrBMgZyvbDMRdJH2R8dQtUVJTLJLfATC",
  "key44": "4a3o952SXjypTpRfiKg56g73ph31Jgtyu7XJWTcqYSFL4dUY5Tvd6uarmNG9FYoX34N3BtArwnFTszp4druqmToa",
  "key45": "43mkTfQ2XkQXf4xAea9fGryaYN53VJKZ1c6gATo9kJWUqyrPfuLVsaZfjGFA6LiZk31URuHjx8nYscqo2uXWxriF",
  "key46": "5WvERDsqmuih39tS62ZTP8Us1uW2KSNTWeHKyWKpKzfNoDAqxjcyCeeZpajzU9niJT96VLFPJHssqCTLMr54QrCi"
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
