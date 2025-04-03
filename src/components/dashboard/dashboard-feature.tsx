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
    "3VuECSJU8pGybdUoDmjmYcfKZfdgvcgzxUpB4aJjuaa96Pv3MEPuVTAW4GfwMjM8a5BfYCBbfoVfYJ6VMbkj52Eg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P3W349nriK79cMBAa5sh53eDa8AYdXVWhpkVkGQfPrvnV9nRUBLHsNnSccgajkQdTZJgok9yq86FrvX9pZYgHCN",
  "key1": "4YzgsLSvKMiRSCwS69nbAfmK86iXM94Cu92Y8YNzXYR6SJcAp2bbL5tKf5WLQBdNJ5K4eiEb1LRVY8U7J1dNpbhF",
  "key2": "37UkXgdWn62d9XjstSpB6jyX3QSSauMnHrN4o47L1yaNfbyreWdFiJ2sERE32x73ybFUuc2H1fY2jgxAYCJjKyoU",
  "key3": "2Vq5K3vFRFx82wrJAwRwfRqKJ59MeR3sigkknoxyCBNDryBBoeyzReTirM5JLp6zPBMUsy2FJz4PyzLt4e16C4Dm",
  "key4": "3ASQNxKeDUG5hUKMK3MW6cVNfjesNJLMSyQEFteeCtNcP2KPUd5EZrUY2VEXFRecuL6reF6k9pGzGAfVqSnRJh1c",
  "key5": "2EyuAjeowVB5gnW8SWJsigBtv3t2gD4eqqtijY9A6JrQ2Zzt2JUHPUFxQ3brtrwUxVK3bpXy75sMpr6XUBnn25Mh",
  "key6": "5SXYVkmXjCQ5k5NeoUC9DaWwQUtYpLiVonWQPBfwEqgXQL3nvdKFQu4dJyZaNfpWMGewsvAcDbLCKy3xBLkMVbMS",
  "key7": "2ktW3vwUMjD6aSxjLbvufE2CBViMKacTXSfVzWstrr3jaw6jTtgaFnxMa3iYM31xqDBcrCcGRmCBNUkZYZpSdhPo",
  "key8": "4jMQrukumeFuun1v1SAZsMagYtRRVY1wCsSPjKUYswiwEzzcWgAoSLDS6gnvbR9SWwbfPrfy7CBLeKh3zDW3nFCz",
  "key9": "3FEYncK5PEvyViZzzFYmMkHYtk2yD4rQue5xwy9Dv2zdWJbrq9mRX5Q4kyEVy4Pry214zqgtreYToHrFBaEdGzjQ",
  "key10": "jUaH7EBBcbGr96zaLGkPpFVWPcvJXNihokib7Qa5WjonvoM2jvrZSukDqmKT3LH1M8PkxZgEd4TgdXJgkpwmUKR",
  "key11": "GSZsTnDMNdLFkgXp1LVewoJuHMdhS2kcmqwqCpT1F62SNft9zorSoC2hS3JjVsYeDpCoBLRbWkDE8V9LojAc83g",
  "key12": "3cdrXNiayWrhadaJeXKVR3U2U1JbHx69x4DhEojCbWg7d2hANpm9NEbSvnqPV7bCJ6YGJ4mEyAzuruVvdUhyn2pU",
  "key13": "5Lj2dMdZrbJFTWPd5idVe8e6465uSsav5aezxZfbGNyoZ21QULuXhoQ71wNuBd6Pe1FBNZb2zkSXfrtiFxKrsUqp",
  "key14": "51YCAwRyc3XajQnQSSuMx2rMxpgQZKbUQbjouhg8uhDc2Ks3SmYc3o6opSTvvTtcBmz6komPsDrCmYYNE9mUNobu",
  "key15": "4M1UvM3pLrPkwDSk8rTSpBQTRpZSGJPgwaX7U2fAZVCH9Cc1E7V1Df1UWQhTMJ1Az84vsuXF3izus1AKvXfsYVt4",
  "key16": "4NP2DHTW7ApMfFnWJJiLDjJhAjnrpdwmJ91hQqsjgmaMXpShnFZV584CEPAmUhGVz8HPZEDPXWpKr65ALdzEGxa8",
  "key17": "4LgcDBKxYhnzuVsLaVPF15dYrV3rq65pWg2t62mnDukTD69uwXSyNXadAw3t7ztND1aXEHkyCcYcbDfZo6nTXwqP",
  "key18": "5TwVUoT49UAKZJNA579YmVRZn1NZM6eyUtjoX4KRCuZ8NmaUMRt8Hsfqotuy8N9p24Xdedqzh2MCxj2QgrHgdPNN",
  "key19": "2pPZFRSnC83Skv5cUeMVJaDUHAsmyZHq2yFJmwcQj1TKADyhDyati8xr8TCepUuDhcqxTEpkGDLvBLi2M98eMXKU",
  "key20": "FTkUTXiMBwv2YE6seeiDgGK19KDfW7cW4bgjWTHLt4YPas6VXLMXgz8DiVA7Gk2CdaWGazFTxA914UYusvSvP8T",
  "key21": "5JGXd7NjJ71MjoQaWRMSiFTYffXYVAYccNhU6UjgoRMFLnhuaEGtuXkDTCkBNn3zXQEZThqZP3tJMH2LdDaR812s",
  "key22": "ijsXvFbfXBPajLoh31UDvaSjaTKJekRKgG8wzVrosNRDL56J58EwyWauoJ3t671XRmug8A6D5zGYS5cvCmc7qc6",
  "key23": "5yJmPpyb2KdcPsSvxCdW3DLCBc8WHznfzahMY7YKsNtAtf9xuHx7Z5tRFc7ro6qV8as1wWBjGFfStecWLqP92hnG",
  "key24": "3EXT3Pyjdyqe7YEc4yHUoVdZ39g7HEiojyhMqjjosC6USYwgMn2QSiRiVih5Kqex8mmS7EA9HWhEp8XcD5v6iSnv",
  "key25": "3uB64G9cAi99yTyMzPBHysgR9U2cEy5ks2aNQoiKVyqASWnb7DPN7sL9GUwoRPJb5d8MkJiUXay9GeqRXK2tkMsH",
  "key26": "3uNzzjcp6fSiRxLZ4ACqPAYaiBiNrekHFvmzvj55KfdijntT2WmVNVwxmXxNEDTypP1ZH946sCTRoATneNzrh1m1",
  "key27": "4vpeZefVF5fQcfE8vNXeyhFVtERr2TnFk5Z3D9SJJZieuugaJcK5F45ztidCdkDG2T4ptAwkdALVdeAFaQSnWoDR",
  "key28": "39cmEHioah9a5hXLDRgfH64Y5okJG7YBmMGZN9uAuyqUHRjp1eh2cajrfYumhMsG9VFoPjxFUvs6DXewrAhWbx6M",
  "key29": "jaGrrxMKsxcnhuWzUNHQLq5N3UuoqnLV4eM7TZRkv9HyueA7TCZusjNPwwzfTL9DLUEzYaAeW45RxwS3j5EXtSc",
  "key30": "5xv9eHCJ729pzTm1Mw9eH52CwG7QfkeMrUNTfC5ebfU78X1JDkZDrEZm1FAjAwf52KE5peiNNMEmFSGwnkH5PF1b",
  "key31": "5NFU46B2tg2br8iyK7YzFtY3nMYfMWAG3v5cDtJrPPpyjintKcBsUcQY3AoV5cCCDdTR8G3nMUU7B3GnY6YVdSb2",
  "key32": "67j4ezC7343Ex3t1hXJUTBSi4jwDXPHihd4geRhUoCk3dT1TBXZyQDUoBzNjRwrgYRPM6REwxVYG7Np1LpqYPn38",
  "key33": "4UbrNH7sMfmvsccwtNdhD1DXRt5PP4L5Lwd8uE1tY17hBddF68qGfPugdNaTx8Ht4fQjk4N3BTKjVyFKeoQispDr",
  "key34": "2PXLUaX16paN1UTzQiVXdzr8iitEFgAnc3Mcf8nJyxDuMRehuXJsb7CBfLECpmqTLZiwEHaESXgejxuMf52hD93D",
  "key35": "4oVJJCQQsSJAhyUbVyUyEdBitzDzHzBvuaxR9dDQ8gncZHGCcoSZPKExFsQsT7PYrAw2hrsWrZ4t3mtfz8JnzWdj",
  "key36": "5GaRsirJwvyXkxEa5Fs8yTvq4PwyjXwWrHqjSPFMyu8M31q2TVCrPQvxbSaYX7rKiETZEnJc6AsSVSaGAkg8Krjq",
  "key37": "3ujz1y9ZMTzKxkT5NZE7zqBoxpw8gaLkjpTii6qGfiXabtxrdBrTZsaDwFEyuGxoxwgTadmyoPCocraj1jFf8qJX",
  "key38": "65yB5HK4eM4Vsn5s4gVK5upwXmNCybZkBoGFutwgxAGuYseknELhkYyMDVkfgUg4aTs2ukBA9gDaV75KaFVaZZqc",
  "key39": "4sFvmGdSvE3GkdP8rcUfaYPjWrCsJJchachgb7Fx3MgnmWxtjcK5qFD7EhkFWYRgjfX4kiAhPiKFeBdVctx6Yx1C",
  "key40": "5meHGjHKNdpKj4CY42kJXoFC8rbY2UxiiqwmRYELyUhFfLgAosxVmtjLyd81tSNSV5fYcBgRRLf865qG41rmr59F",
  "key41": "2fyvwRT6wBw85eBPyZ9GrUmpiatfqtEC2kPoQW7Jd1bUt9o5LLzpvZ93xRztoexyRixLu3tQyN1yMpYUzz33vLrH"
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
