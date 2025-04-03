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
    "5Qi6v4cWLoYG6nhefDQawDdEBJAN7tZfPd2mK66qfPrRyLUih39QB8p8bnTdSbC9DvzNHyFSJfL764gXR8R3mCEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P1vXPPuVWwAewCCg2J7M1uzxBo3b537jGifVZtrvPJbXfaVdGBEx4fjnKjVojhirWSVP1hRReFjCyZBmdZ3YLte",
  "key1": "4LMLBvtBSoD3yN49X1iLiQoCeRvBbcmLeF6XLUEEhsBnNn1aKjTf25Rs1KpVjBEc68msbrzfnpLg6AZ4tPzeby9R",
  "key2": "BYvJ2oVuX8ZB8FwjHwELegTj1LgFcWmV2iAuiuirh6HHem76dQH9KwXBJnLsuUamkuWEHGKHBqjvu77TVEt6y3F",
  "key3": "31cHFXmTZreGRo52saZZ6CMGXTJqMscyZwesGDyvjcMT7oMDD9FWgd3vGHhL9LzJiSP5HVvaGDJYPCQKAQPHJCue",
  "key4": "ByyAPSoqzD97dkJTmxnkD38o3JNZKCyWHApgPp3ptdgtd4kQnHJeFqrSYfYGL15RMDQM9eg8mJpPbX72nQyTGq4",
  "key5": "5GMNJq78KifFfywnNPkf1RzYYL9S8EAgBmuMyPELAYrKmho4osJhXesuiiWc3Lon4Pj26MgPNFEdbAwUM8Pab8pu",
  "key6": "5wcp47DafYMy1qncezHKMet7CgKoJd2bzrsTaFbhoxxuqFdmD6K78fRibToJr7tFGbc5e6zQ7qMotNdcoCsxwWSy",
  "key7": "65VbxWKJKyMhJM6bVwoRne1hMBJKHNJKGGBXy9C62NERJaq5Eh8FcJyZxE45Qw5QFHGo9G4L4KYwJhD7FhGDYofh",
  "key8": "RhoomuKTd4DufhRWDmQABBnoPu1QJGUUbr2GmmtVMbJg5oQAeZEpUR1psc9ZQa4882YYpu2KC4FJWjtkkjJFd9E",
  "key9": "4gbrQjqaxV98AhzYvC1R6wdNB5KLuWR4oLaNBQhq1NBScycxwt3y7WsBvMuTUnnPHbbpD72EkQU6A9EePByjgAo6",
  "key10": "NKFWvhYNXx59QTQzBGGwREJAsJ12nxja4EmQRanD3hcF6CMamZoK7SDV7khB5EWWEw9cPXoKqdSR5RoBN5fC4Fc",
  "key11": "4Vvzs2HNtHLM81thYZVQRpCkiYacMCecCYZJJ6AfD2YQxBAJeByoXYh7Ecw64pq2ieiV7Ja3XiVUVM6GCXM2FNfz",
  "key12": "5swt2qYxkebcP3WABNPJnMJvaqvbXb32kGeZrDVFrbU9AY48Egm4Y7aRR2VLG22LHcqd28tQrz8pcU1irVJRyNz2",
  "key13": "YZtbv7kM6V2aFuWQpFSjmZQbxXB47wekyDPJCZBZvYrggFz9FGJDbSFDpRB7wH1rvYe91UHiEr1imQwkpPpgwjL",
  "key14": "3pTUwSMDSYAKRgX6at3MVKhbjLWBrHbE47rwmBiNwFnh9BNNVANH9Qe2cqJfddngR8FShg9kmBidJq8ifd97vrGF",
  "key15": "YGQMuCn6iQHc6DfaHmhWgxRgNWHHABg5PyKXmFZf1uHJj94cjMX9WQNrJK9PRnttJXCWR1E6pSZKAJS1qGufpi7",
  "key16": "1mZocN1R6JLJu52Y4pchkPLrw3wd1PPCPycr3ojiqsffNhADveDsy2XBRwBjrehjXDrR7jRaGhf5VEfCsGU4eN1",
  "key17": "cZocPMJTSTE5p4sugmqNBQ6Pkzmvce7foZtTdPbJyRoXMdK7zf7tedkyDAbd78puPHRFMWrMSFgbgE8XVqs49J8",
  "key18": "4AvnxJnSZGdsJke8FGcSGF9CLANSqRBUnjQ7qAFrcA7TU8TbGWVS3ndyq2rDK17nPFtUea7f2FxhJETK3e1veNJp",
  "key19": "5VFtk1vfyrgo5essYNT3qMS6ec3xY4yDeHSJB98RY13yzkNwBNRfxHKVGRTrc1sjNAhjobfFALdJpB17HZmBXHDK",
  "key20": "3JMQrAqiMtnrDTT5KwcPi1BgEb8AainspTbeWEES11M3Qw1DbBZoSNkLgy3dwzLqQAewmfbfk4ACFc6n71az5SS5",
  "key21": "5qhGegLRWKtMzK4LH5iTKjuFayv1i147i29TgKTSNMHPyqpy2sgT99LYEJMNKtXJFVqsR1PGWxpXFSntZhSrD7su",
  "key22": "Ba5KRr1vUa4TrN5AeHV5svr9vppQzAc9SsU7EWVwoYjfxRUm1BPNYWvEiKcdRiYuGUR5zr11QznPLAoYYEQ3Ayt",
  "key23": "2CVUomN7Q44VANph2BrrRyjMGC5kuzhNkCfgpYNssnvqtcPy5FPXhWvErNGyqcmmd6g4NAvhAF6F32yBo1ENg42C",
  "key24": "675FwGC1F9gTEUQddgtsnJWbzq55a87xVh9h7xCucnpteTaQ6vkBGHA7Akkk22tDymtSsgRTgfzbb2QrGyGw1jfb",
  "key25": "2of3Dh6zcKsLZCsDiEzTDsaMMwK5cWXaRBoru2M5sCqEW2zUyZFLiNeSe1QwAmmxGBXjVaLdwJbAFTcrosyoJnbq",
  "key26": "4qkWSXnqnCBHxpFLX3QLKwpsPAqGjTxAdcqWy6gKtUoAD7zahGDxR2zBoa39UT3FGZ2v1DznCn9oSSdESVnrK9yt",
  "key27": "4cgKyTHdjBZ1KRZUcFUE5XVB7wG3Fq49J1HkkdTpn965cBe8NSNefq881WA7tEfGCh3qikQqmQgY8YQmTwjkiitM",
  "key28": "3G41KEMiDfTQg7snfkikqtFhjkAseJfwEE2X3ZL9m9gqt31ksLoL2NecFD13tnFa6eByaZzqgCG2k95prJFtRGCy",
  "key29": "35rzVNVaLMF5VHwDuz45XXazp2Wf5epWgP15bwLaZGm19KnuPvwTeiwXntvZ5yMQ6c9avXxqLCbhEtFcHLpVJUo4",
  "key30": "5Yb9tjarsYbXGHwUi1Zmw3VA1McGai2xYZP5tBN5LR1AAHiKNCYAmo67sC4FwKNSL4utmCM5dtThfKHhGBweL2Zp",
  "key31": "5yDsttexiJJkjwo2NABLUvPmosQtgCgVj6ZNSSaKRsAm8N1atSTBjbTDXb5JfkL5P2kJyB93kuc5dm4S2PKxUhJa",
  "key32": "4zKoG8hEmu3xu1DL5zv7kJpXuYM6fDdvBVTaUe6NcYpWRHUCJxYfpxGGTgbGtN3hDrgkfsy5v9fN9359u7xbfS7q",
  "key33": "4aaQuN8fZqLujfsEBd8QT5XG3HxkMCn9E76UdNbfyZmfpCncGYL9JCcPkr16rZUrBkAFGiP2kKCAQSywpYTmQmYd",
  "key34": "oWRSiec19nTUcVfuZop4LjotAUcWP8hhpZW7jgKmZSKomFWgBoeS2vbr4ZyQbeCCD5TimiXm38eXnaUearSqVVc",
  "key35": "2gWWJxAY7RWMUHtHvUyppgmmjGReGUYZMJqcpZjGMsJuC6ZG1eELtKZpzHkMaoWipRCr6GuS9rt6aBSyg25c9YPx",
  "key36": "kpDia8JtsnKXnn6g2yX66iv6dopDBLBn4kXbAFKnsBxoB6acAESvtQdrod6Va8iSsN3b4TgY57W2feH6459grsh",
  "key37": "416xubnJ3Rw6Cb9dpH5u6s1ShaJZukwQDDVaVV3ynmVZnQc313doZjTHzUvcaWbUvpMq1MDXqhjqg1uq2sPEVQw7",
  "key38": "3ccQDVXqtTTfNYrXprM9s4oh5FsGcWDA8o7VmWumysfWYPqe54wENc3Ju7XaCXnzFqrUVgX7MoTbNgm4fcpVBboD",
  "key39": "22DxkfLnNyonANe2y97iBSrGDjwZ4j4w2m7ArsATatPEEpYn157RBnxcWhEysX68NCKjRLSNvfZJQPU1Hoo86m42",
  "key40": "4waheoWjqzr3W7ysdcDFMroydks6pN1wVJHQYuzcUnxrGejSTmth4jSNETBeC7rk6BpecYDL4doYjFdYufsvKxPX",
  "key41": "5VhutcXjxDXfHDTrxBb6mD5N8B2M7KcrSvD2Ca8DAj7fjPm9evP7pDhhTZYQc9Zb5TmkHsw7dRzrcUkA1i6Aqut1",
  "key42": "iR3ed2zhqJ6RYVgfBghwbBQLC8JYKMdzY63KAySzhvzmr1G5Jwu7tTQhrd91yje6wWRmmcZ4gUhzmZSb7HvZfdU"
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
