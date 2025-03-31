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
    "2CgcjKP4dmHYAJAwiFuhYmxrWbCKFhaMfvUVAzLhWKxjrQAy7scGxpzqiTupPwHbDbUzrRp4TJtjxgnHAkN54L9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gCfDmLqgJViivz1AxzgjSX9HNYfBVJTqVTkMoiaK9aoQdyLjjGRJ3pSsW8PBwQeGg65XUdqrdn5FhPvL3pfvNv2",
  "key1": "3BQhZKwxXbSyyhSmnhKhnBpng9y2oAL73GNeEdt32gkjfb8EixmMp3FhQB7J9ikVni3C3YMJsmpxNURj9qccDNE7",
  "key2": "2rEGUr5SXAhgnkXupQrifbUxeZTrSvTBpXnuZkzaBBGP275wgtxspiCESwxjokYq8HSVSevZdbD6Qm2YNZPcDBdn",
  "key3": "3tfGjaMiwXbaMHuRYdzeWKvuNrrNJS4ouNzuZrC5dfJn9X37oeZMdTKahmNRXSck9jJ8QBnc7LmS7MwgytAH1tif",
  "key4": "3J5zaWDiJus85GR1vdaZhYhG6noCoNFhk92oXaRWv8HXcofH1bBwFiMo5KUBsgSBYYhTAWbMYLR1Xgj7pRqUG8Uf",
  "key5": "5MP5YEHRLNFLeVFf4dPTp78t8aSAW97UEAA5vERGfWs42N2Syb1Ez8RdAcngB11nee37UjcX9XVSeEjmjZVs1Fok",
  "key6": "8KzuB1rbRJ2uucQEJ66HYCzv1hnLB1723EyBdGGzABvPbDaE6H1goBDvbWMkenPy2DKnChgwc9sRYjWKgAb8zoj",
  "key7": "pbyjNGgUtMRMSNzD2L8sLTnXA9a3rZH6B4ahwvdxRNgUuZiiPTjMx5ziwMXXBrrRsNCryBZ9YeNxWsmiZjT6j9P",
  "key8": "42png6cYPZUiE8qZ4vJCXyeiJHAxH98nSKdtzhAQ2aGwx1FN2wbhttrkxbEimm1EgYeAtPzZ8hNwNSvB3GMi8gwN",
  "key9": "5ghq4NTVCwVwXrpcKz9mKVKpYWTU13BZzEbMzC46akMku69mSFuTvfADkR6PJcKRmpN1pFdGGQ5b53EnE3Pmu2kY",
  "key10": "xTr3sGJE6UDyyGnCoBaSrQKBRkVq9P5N4meSB8SevWWczpNLfJt1iDHWxfYiPVqD66Ha9jvdAnTx7MaLQDQCFLk",
  "key11": "5zko89ARVbQavnmi5LbJaM3uz1mqVBZHPcdEwQrM8qm5xQ4kWVZ1Br9UaVvXjKCFnJ8uLuE6ESZUKp9eVLPkJkq6",
  "key12": "2fzxKexYFsHY5ciMdFTEiBu3vCV78SgeQiezy45oPU5tEj8bkGj3ovoN2NVPJnE8V8pQ9npce5UEnVHVHgvMKuiL",
  "key13": "2Xv3XAznfQpbeeoD6h4nisgv8t46KTM9e49Z8mBm3ppdKnAXfY4Tmr7GqcyViApijdWUpBssEw3yhbe734uMK2Pn",
  "key14": "2wyLv76JXL3sq7anLTsngXDdJEBwah6BhQU6aVEw3cwBRBAJMdBRNjgkM3jgD5wpr9b3nF249en1f9iaHTgQxbcU",
  "key15": "5j95ttLYKBGjoY9S7pniUMSeg45Fz93U8JfT12fddMZEWMC7Kf3um5AmpRiuVm4JRbKreadcg238phnLwgbZR1Rs",
  "key16": "3EqiR5xkPYLde61rForix1NiN9tyUduyYhMpPK7s3wCZnDtw2mBDP8uAHY9doydMUZb64do1LBaJj5oQVTzF8EF",
  "key17": "4TXV1QRbbRpeQAJXrgBZVTAJbVn1XsbqGRCsK68Y255pzmJazLyKhUULBsMD39Jhue6YUHz2NHHpAwhCgxHUjfNd",
  "key18": "283WvbKCqZncazpXhDNdZhKp6rDdLaRFzr64SZxpMWHuUqoBLcU6TkagQP8nTWQxgUy3TBDa5PcrQUowibPnqQdS",
  "key19": "66hJsyXzkN6bXhW5CFquX9JBVx4RJUwU99o7UB1jSjqLiXzL8hxbiBuQjz3cvKowPKEze4fnEAMFcXW1CjB25AGo",
  "key20": "wKUddbVveeE9ghHWxJiiMBf9zTkiBVriy9DE9fLQn3XLmookDJCGSK9XWjipbqeTJ6psCfV2VcSdDnvWVRpwFJQ",
  "key21": "2yVZChyEdKkPnbAa1a6MpwVjotWuVyFh1ZGYdeoK5XgabGaWnP7mqzzh7Ba2pws6sAGXcbrVKQCQ9nEnimacKh1r",
  "key22": "W9JRbHTgf6qy7yKWC9Xg84ZN31k5juW81QT6ySQTnCnJB5M8mmaERenDTvPktH7cWZo38LHZYXakZNaLbCeA73j",
  "key23": "4Fq9JGRMxSjXXGan8urBmLLZ29cY34DmmeLr6BKT18vCWwk879Wuu8N9Kb5CiVstEbJ5YCKQMAdiSsLTH8Ms157t",
  "key24": "4mFmvjxTzhELLE3sLcAwz6AzgrDyYxHw4KQgq7CJmjufny8yC2vmcmKuH81Fnt6UwChbPzU9WFkkvayoXzprErNa",
  "key25": "5pUkESenejGa3ARe716qaYMpAuWacft23exgEvvtAdhYRfaTB1WJydKCVJuDTmwSqjKJdQXnkYETmy4GH5UxeqY5",
  "key26": "5MMsbfZQA1wqRYVt4EDSZ1SsVmhp1JVTp7149vrd12WscZd1t1CDedhHhxVSKMYaDUzHHPkdJv2RANot4eooM4RD",
  "key27": "2VpJJu7yjWvm8nKSb5ff7qCx6q2MaWb3mCXLmDppdThFnD2SznVMXCWARetSBcfVRVWfBtm4MP8AzuaT8KAxJp3i",
  "key28": "4JyNAA2wFKWnWugiMe3ab2bcGFzuXNLjpizLe86PhhS6d8uTYGnaxKoFJSfQzExCnhfgYnZHRognikpJSxB11mwP",
  "key29": "31SsEJcwwcmaNQ1yQ1z2PsxGiZsh6aQ2RpFtVo6em5iuxXsa3R6v79e8aWDCH5X3LfmAd5otfsc39Kj62HBzTmqn",
  "key30": "5p2ZqbYb3zqATvB5xa2snoX6CtngYSvX7SjpM8Bv56Xathakgqzan6QQRuBUFbUtKTNUMAetke3d5ao4UovduZR9",
  "key31": "2vexQ8ZXpuPUcLG7JmnEc1ySz3DgernrRFsBCQMBm8CZfKtbk9Tz7Ng515xGG9EbPgbrj4hSnXLgXLBzeNqSmj9t",
  "key32": "2BrK2sbVFngQpxzxz9vtuWeDjo2Xo1759PTo9SnLuvPNHeDnzGbw2Q8PbjHgMozBBg1pi1MFGNd2cerFF1Fyr2rv",
  "key33": "akVwWUWS2JRs9wvYBZRXcCXGBGrNnmyw1QyffH9T4Pe78gW1u1YawwmdkXNNJpezDQ6uvR2kBmRY5gDXdqsJNw4",
  "key34": "3ayhyjuJ9BPsgTzL8TPoL8nH7gSWFuTdgAGhw2eyWGLxYgm7XDEzELKpL6J4wJJkDN5NsvquVhvDasvmbJmKxZQh",
  "key35": "9Jm1ruUGoVAZGgyyAQnHCdf4FQMRbHzL8hAwwk4CmGB4wj6JMbDDcj1VqxCpGdSbzLvEQegq3bMhC3dCQmZs2n1"
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
