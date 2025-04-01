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
    "3aygJsMKyjTMWRmo8j1vyx3yn1Mdq1BFGQ5FCSKMjygsDzdiD3UC3tYc3PwSzZMF4VWRz9jKEcGPvFj1ZWoVJQ6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hf3F8mKR7SqTnvSdRbVzkAXN1fLzZMBp5r2oTpFuKWv8tQwvhgchhevnWw9zvBFxH7eK6exXpY2FsrzcyGu8gHE",
  "key1": "5w1x35e8n3D6hE5TXGHQtwFYYRkU4PHSoKi8733AUA2ZjQb8kyETm87XQnXmZNdHDvJioGjbQo6kQ6zafuXXZhY5",
  "key2": "EuiEshufQTjTSxUHbR7uVyHHwazwmsjtMk37PdWb3LcGuz81BppLHPCaxyWoNyX5LuXdvPfVLrUw1w14m74nvMC",
  "key3": "5EhTVVNpQUMMK52i5P4k1u97g4mqTNYvy8VCf8QA1Q3rAG33n5VHRVYGhUXqQaKeuidPqLeu2MYvzaMoXM1jJ2Am",
  "key4": "4sk3LDJtewyE4WLuWJ12uRHagXsDr1oNZoZQcNfU1bq8Ny7aM6MUBUA6fwnRwATduSfQBCMvSe2TCrTCG1DbRRBv",
  "key5": "2uBgWgsiPYBuLBZCkM9FTPHD7nq38XJmjndXpsWJ5drTKbdqstz48ZLgSXzvhMxhXLkPtrmM9Me9WKinWRJ4GyHX",
  "key6": "5ReL467CKB8WuKt362x8km5GKPj7cBWWQwxjHyhpBvjGHdV8GYZPEbuwuwWnK9pDvusiLU56E4c16fwuWZghAjyQ",
  "key7": "tN2oijdMRK6Z3WGCg1KEbitDLTETn5HY9G3bL7Eb6Ns3s2QzMFWHhiKbf7vpNivJvdrTT4HPuALdTqJcuN4yyTS",
  "key8": "eTj2YZRTVF9sevFUWejvDuwqWej3f5neNbaorZcqvY9C1xRm35nJbAJhkUhDED4fxbSLjdQNVFBBkmXDU5Tnh4B",
  "key9": "nznaPsshpBghfU44ujDoJ2K7UuJRitunmjE1qzAAbpr3CrpmWfSQ7Gkz1XhZuEk5ZJGPfTqbf4aLzZSh6ouz3SJ",
  "key10": "nxECZ4aJXLJC4H74gjRMKHxHgq4F3QqBRk6h4dGrMJU6ckUcvmYmhwHwYtY7f1NXJzgFqar2hShiR9WqFHfFAiw",
  "key11": "3cc9FxDYfGK4XH1gWG7H4nEScizJsVnCgmaq4MUipFZireAMCeYiyowzUVUJJ13yhV9Wiaxap7hRFHPsCESigT99",
  "key12": "3uv9XzHbqrmNRUAMB2tA6s4tXEz73kZRZhiR9tYV6xkxfRcHfRWjFU2HbESRXP9i6QyuKQjFmxC7VF2dYxoaxf15",
  "key13": "5FUMM72QXhMA5KHd1RecVjj2R7iSPDxwrcEkYstTx95k1jkUZzPXdD9twDsob3d36LW6xdT2fbp6Yq9Xv91Ydx6T",
  "key14": "5wRBRkKLUyMvDhD9KKPoqVpgSPYXKRUrrnKgvQtBapDY58VghFNb3QfK6Wo327ta5nAi7v1ByLUcA7Tg1B69P3ZB",
  "key15": "5sMMrA2V4nJZBU7oGagPU3HwsGaMshqWCc6L8xyzmHFtzZt3L24H9TU66GPSXVZdB666TtQhDZ8kNvXUkbJoN5h2",
  "key16": "2TJtc1KDVQMdRw2vGr2opMUjLH1XLvqvD22rC5FHMhm254PTwu7M8tbV3sWH6gmG5UbrxRsa2GSNaNe72v2h4vCy",
  "key17": "52StdjYco87k8R2iEfZUA9mZMg4eMBkEwiCxhGSijQb9iRzYieqeoSQmvVPXDtNPhmbmM3keAVGR214aZ5sBs8cX",
  "key18": "y7i88jB74wg9CvWPg6ErqWAiqzstDVwTFxdEFfk2UFvPYzVG4aJJonZd3GzCxkGvM7gNNwhkCzHPG8QYgCNSdfC",
  "key19": "3rZJwy5Q7eVgDDfRP5HPQD95b3Pc2nXCjq1g39GcPztXiCzwLS5VhRG73gvSsw6h62TijffHbu8vkHwxh4pmVxpM",
  "key20": "3ER2Qh8g7QdiCTYWeFp1dhRPsSutWbYTdrMFAYgZvKm9stbP1XUTTWzjptxzJmBeQtLuhiyrG4N4dv7YacdLrCto",
  "key21": "5XNyRXNPrWTMBQLcDkTvt6ibxqZbeuQxi7W96BdFdgyU4SEdawHZoNnNgreSpAAfAVwcCmPK9BKMqKzJRrgGLXaX",
  "key22": "51EbPQKqWAdQiBWVyc99NzJgRdRQ4oJrFGTkimY9i3gUG2N7T4msWxk3t85W1FZoK5p5SJreVBC7BVnfgTTNCMcD",
  "key23": "3pweZ3BqPPW3mVejp5GKC9BxCPZpNXKH44PXjwyKVjAUjp61PSffDYMAzoiqGWyTfrtHxL95sJRiyc9TRv4dnV1G",
  "key24": "4RZDsQUe4ZorzNbHCkagmVyWnpUp3k82ZAAeaThKfk5payM2GzGjCoDWJSxQnzJYWStTJUqQXuL3hTzo3sXbat2v",
  "key25": "aN4DsN4oDc7JUzh1mzdVrYPq26XL2EP9n1UDSN4x2ttj6vkPUBzhApHd3o4HbcGUV5vTHZ9xAanCZADXVj9XFwv",
  "key26": "3knx71ViLcRAH4JAwaC1TwQnBKru8tBcpEjnc6XZiTJe5rTHPsCNYu3LCuiQ9oHWkCo3c44CymRXXpjL1yUSyYxy",
  "key27": "4EAa1UfrLsxWsjAxRuXzbxMj49g7y8m29mCQu5K2v1Lz55gqqbRfPgREk9XvmLLaRsgfpCShHM51LfUG9gUGGGqS",
  "key28": "3icJHeTr1Wk7ZNT8LZQ7WkBQeZYTi6yyiUudCF5fW5T4nuVmxBmuQYYnNxE1vYpUCagWj6TDrorAHXynh3NVtbzR",
  "key29": "32XVRphUqTFuxP4926WwFzbp5TuJJwGeFQhbbA6NaqdWu8zPuPs84NcRCDXkBeFSBXvpJ2doYtpcqwiCscKChq1U",
  "key30": "5NrEzjWxdaaGtN34naxyYJwreEWSpQPJ1inuxQkpoL8MudT7FncH7sYAUYWr83Yse34ydhUo1MEx2Y4cncV8otse",
  "key31": "64h8CPGhkCak1WrNQ6qErgPQStEFDWSgXnTs887M4JufzNALv6NLWArGNLeicoPv3JJNFLdpM8cnJaGqx2WkK5CA",
  "key32": "2cAdJqcDzBboBqtTaERHYQH45ggvywbtvp2rDrKdQuHb2jUkDSyFcMTptSK1c2oVgSYq66BPAjEL3tBG95N33Nbz",
  "key33": "pfY1y1sjS71rGEiJjcwSBFwwHcUBUTKsGWgzuVFzSfqPKSRpGDqBLmtAFSJd4oto3MzLCAUNPmqAXS9Hqi3xWJF",
  "key34": "3GvPkg97fBqPiPCPkTxVvbZ27hSgVPkn1jSLpNyXvTyKUp39ebRSKhL3pKxBJaPtC6U4sEUUBoqg39vGYbv61E5q",
  "key35": "5ftaLJwopBcWrP7wVKgQ72iWKRwcbs7HAC6igmFxEroJgU3byxNT5NLESardDKUJ6MfJ6Rfq9zxak4kAca3ZwoQp",
  "key36": "5Hh7SbGawc1yxQ7SFR5YaVVE3HxQRZkJ2jCL1cA4hxqvegT3xLEmWecjqMTHHySZuzuCEzryTRh32usdimFgoDxH",
  "key37": "5vq5hxkLHz3P5pNkEYH5Jkn77qkvrcYBhXjDR3bVmmGxTp4dmjCFbtZECUYd2w4DRL7SWkgMygEMPUpHJy4KaD8X",
  "key38": "5wVYwPpeiHQ9VDX77PeA5w4tgnWkf7J1e2Ue12tnHzKhAeqk9zJVwyf1brX81G9sQU4GsrijDcmWL6mhwnYnB4s1",
  "key39": "42QdSBHNJTieQdMtq7xe4P8inkrxNe2CTCff6kestT3fJKk3hNb9mSGHZt39rVNbKZ7xe4Tms2EHr2Y1J5f7Vgv",
  "key40": "4D3zoksDR76vhdFPE7jdGPJmQT5mHPGB4mvzQw1C5LhKvHtAqLgFamMsFRwPdb4xG5WY82JUy4aXn2zGLyVcnt8d",
  "key41": "5R4YPCxqio56mvNKJAfk4tNDbuNAmDN5NqMZPxEypEzi7bCTG1ShzSo9mXvVBVDbGCwbDXYc9JgCp16rgAkMowUS",
  "key42": "4hskPzkNiXpoAztiivfL9f2SVhXQxUCLKaeeXQL5PMc4Z27YcNPFTvquJUGGPUuUUmDEeYmdksF2KHN81oY2q4MZ",
  "key43": "mpRnMGwf9NdMLws53WTHmXETqbfgFBxiFgYDGAf77MvJXBEcipXkXNjwZgyewttwgKAy1cnqaP7k6ww2MESdQuC",
  "key44": "4mC6hccekmazXdvEat3vnLCEpSpUJyRWMekyfUJFuognxSirBAcY5hrNfibCYKavspemChLqdmq24WYe3D1xUTR4",
  "key45": "42ywu9cvF8XPth4iEBzYjB7XQms2Lmvxk2R6ZQ6inLAEA6xdktBH5bQUMfupnqWCHWaLLCyyk8fjec1wtCYHZSad",
  "key46": "2cy42nVSr5KoykCMD5XqC6K9v7edEfDcYtodzeNTwn3dwek2KEicvi5TEnUfaQBQJdsGPEXVj52Cu8mUSxjPiZGJ"
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
