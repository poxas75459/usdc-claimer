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
    "3rmQSwkwVgScZCnG3JDe4fRwR586DS2KuCbP2JTtxe5cuMmp2dHB86p8tUEtyZ1YvUPfd8MtLpiQMeKfKSm6pfFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HnUjR66U7vxxRbNido57nj1qPbTHHrvWBk8ojnJEoe9hgPLKHxFokeckWrEY1SwwJTD6tXg8V8r9UkM2cQCqsvY",
  "key1": "3zU1JHUGJDgDQCA6xKfV9Ss8qqvwL1NGrCs5h2QrVhfXJ5eso7UBr1A3Avy95hoSioWmozLEtojziXCAe8EyVacw",
  "key2": "2BsrmeMTjKok9cc6uctQLHbe65WAwKqD6RBWD6gHquV14BqwJRboUTDfTQKVoSvcXrVtFZEv4ZnrJhjE7cUGfvMN",
  "key3": "4mbFQw3yTnZzGwwsoYxMefVKiXygoMiqC5DSgQcUSVp9DobqVNxjJhT4fGnm5srhxyddXDNsEpewRVwDs7s4Kd9U",
  "key4": "4UiYYRPhU8rrf6QLrnyQaSEFNnAPEw379zaXM5yeuzTmfY4DLBMsbzPswaWXMq98tfjam91ouUQ2fZaYc36VRJ8J",
  "key5": "3mHFhfMeUPDBrpbEkCJMkULtmP46mAG5MBJSrZa79Ekb5MfM1hRTKCoi97v4pfcQEHSWsffrsGNBKiGVq8ZQHbaj",
  "key6": "3QmZ4pDVnzt2wYSexGiC8XHmosNPn5xEDfdH11cWtG3taWsW2Bdrn4sTfn9nFdBEowGm1Nax8xf5raAZyL76qUDw",
  "key7": "4Gnivd2JUKTsYjBp1NP641H99w85XvAXdxWgpLQyPXjertKoY2KpvbATQtw4EW66JWyFTqZLjNwcp7vSULs7G3EU",
  "key8": "5sHyyb5rJCLLHpbRLNjRiC9fNDt6YEEVYF57WPBLRf9i3JWnfukLSoppugyZkDha931Q2uURGAgtRke7K8NuBT6M",
  "key9": "3r8NQpqa11NLxtpqyt2tV7VqD6sgs24YhTZ2iRcyEwA8zsmBUgDJULdKX9N38VXPAqRGUcpD2S6yVLKUYBcrs7mp",
  "key10": "P7ausbHWgckoyjthPdL2cw1VioCUxuaBN2AwUduT8CwknvSfmkDgUumdVSAGUoqX32RDgxJyG7vGdyRPP2FGKn5",
  "key11": "yw7BWC7uHZZDqKhhY9tLbNnFM3xLbHv1ohKyFwKqEFa1MEqiyjTZBvcZ4GPr3ZewoUmw6Yo3Ym5a23ZWYe8V6BY",
  "key12": "cH6wczE7ees4SFKcYXjJznN8d2d7uWbN6VV3sSzPNHciDeKoyTUAaMDbCp7ptC7kncUUs2waYedmG3qsxzHZB3K",
  "key13": "379WsDkgFuvN1Wywu1yfRPkjAmzsWEMg5gomnn5FjgkbbdELWqrm52vfdxtHKjRdA1VK5ayCNAfuqSkT35PMqnZ",
  "key14": "DB65yyVWWpVbchp9f5yop2n9QaQTJnB2aHEfBS6sMaf2RpHoPdK4VMYEFAjHNjgCJRz3RDUG9NuGtPzxnQUKGxm",
  "key15": "5GPPyVqDaT6CXYcTsa41GgVbZfntmvEd62Q1ZLQv4VEEsjTeeyEkvy4HAvxHLfzvYLFvm4Ah2qRJesUhL9T7ZQ2V",
  "key16": "4jyGWFAz7FPLyepVapZtT7UkgEKAsU6PqvXipeLsnmXPRqXfkdUkDX4oJMoELf9Gfgq2SzUiJpAnsQQ48AtwkPGz",
  "key17": "XXgMqTzP4Eq85Cwfo2pi5HyrdNoPJN3HKWaym7Wix6pHwgo5aWQdf8kKCjMxbuRs3Xw4BkfrtZqbzisFP4WZC8s",
  "key18": "2sz6WyDScJaMJs3P6xyHiamU2zj2gBzysvkDxRajz79AnaYjjTZJd3tB4juHSfH6q7AFeLHoKCkxr2zcvCY2P3cD",
  "key19": "2v6QZ6TPCYsHSj5ymeyFNaLZbuGjdZGdVGnaxKLny5eZgE6t32B7mRRLAspAwT5TMfNqZLs1qdUYKVmxet5bP6UP",
  "key20": "39eh628462TWZZJV4nxcK9XF951kg2tn2E2JfsEhHEckGxyFMLopXrdqJNDzLkYawdKJZBLNebEh7VykEHDbaVfr",
  "key21": "6rsXvtnfQCCsNFeFTUmb2L7Bpv6p9p5FLdSHHo9AuUUAprZ3vsFshSSHGSwt5P4Y6c9zRd7QnP2wtjKnziuRBdd",
  "key22": "32qMGq7vxJJDaCmveFtuBEBJsdoGSodbKPxNkZLfREcYCrCC4dzQ9C5AGb8BTTzSu7mKg6zLEvQzzHCe35nVobph",
  "key23": "3JyuHzdA9WuicNyqPazNeNqg6XeV4XzDXgZX6e71cEMkhrgp76j9x6b8N8Z6C78fhvmjpHUA9Wvgbt3sqEPFNy7U",
  "key24": "5PLVVDcRgPSvAcWxcj8Cjtd13KEXq2iwT2Mk34TAZVKEJaEpLZkBW5w7PM6YhM3sFecou7vqku3tRmCtnnQ3kPUT",
  "key25": "xvyhDS9EvSpkRJEjUt5SPYzvoGyS3qg5hvrwvheF8obpBrJ1bBw7q2VJFUFc2EKEHNq1pxcnhUoh7VXQ9yAg6NU",
  "key26": "2N5rsu2nYq4gCRGHVkkBK8U5fpqpy7u3jf1YWHdpUDrhfo4nmXzK8QbSqoKG9CNcriehyGFcT56oZibj1kWQanHG",
  "key27": "3zHZKPoaNxtdL28UTYuAzYz8464Sbk7uZopcymx5KFkKZU3ezLrhcj5Xf8cuQT5DfY57Xm1ZRmeBU2L79EJewvNh",
  "key28": "3rRy4eyhh7nCXpc62zpTsZcXGuG5qnfc8skTWjFSFL5FZu5RCrA8C4jwHapto3HQBsCFN1qPBSPvsWi3z1rBKus",
  "key29": "5ME7nu2cCuSVi5an72FTBs8ykQG5We2Y2hCtTKjiTn4HMEqExLGvuQgS619SkvqRboLPvpYBghmdryNDjc3LcGM9",
  "key30": "5eca37CqyVZutmaMSXUQxWRp2mLrv14LAgXKQ2bP7UNh6K4sLXDyicz9djZLaGRaFakFqTDd3ii7a4TVhMaHFb5o",
  "key31": "LpcwguFcSz8TbpPsqaVVqfqiheqQbR1dcvjE9pKgorNv5bnYHb15AJxRQkTZiB2xGCqEVV4qEZWfbTmxtSMZMNB",
  "key32": "62riycf52igUhVLsrDm9N4zaT8vtxCiYK9UoXWZWeiY1mBfdNMRY6rQWB4QiH8cD19sPPc2PHbxNijzH94H45Gsp",
  "key33": "5KZcyq9FPjsG4oH3vgTyUseJJ4Hr1E7xiRCCjyxXjUrmcKHmjinq1Q5448uiyJU9k5mamMAHr8zVsknS5mKcdXS5",
  "key34": "4EGoPcLQjScSeDZe9nNpPbw4PLXhoSk1JroW5CCqSxXLmhonwy1iXqo8uLC89eNNC39ufoGVGkeAFxXQjo2bzrUC",
  "key35": "kW8cr2phnETWu7jiyU5QcNzAvY772qsotuE38wDrXWbd2mEsrBc2U8bb71YdtBd3aLo73bHKm96jnqkqBfwYA5h",
  "key36": "2nWJrHafL7HjMq6dN1Y5UBz3DSuZhVVmrcC52nCYDXYtC3c17prUsr574VF4wWviXABboKDtgDZPJ3Favpw2vT61",
  "key37": "JBqM2t7XmbQ7REwDP4BwHC46SiHzZe48H8wAoemfwzoyGLBuQU4iDnPhLzmEoFFV8wRiLa6pm8VGKCymzs8PrYL",
  "key38": "2vcuNELXzALW6F9WUHo9F7rBdBTCtukDG1Um6TK1a3iJrLD6fAkUbMwzj8yA3VahNqqNk9wbzQUFEaa2j5yJ7dGK",
  "key39": "5ZpPL6aWtT5EQeGDB9jwDFbNBBoMggYzp2EwZf3YcKDcPx4PL6pm7LJLiKCiX6D6Kjb7qCzyzv2VW8VRwpXgKGnc",
  "key40": "3MHdkB8CTC6PuriszNvynFHoo1oL3Xc5EokmiwJ8oWpbstLVydWWXqKWQr7Z1wLj9MxP1v7ZyNHf67GTJQV3H58h"
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
