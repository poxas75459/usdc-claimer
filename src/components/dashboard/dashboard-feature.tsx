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
    "3HQL33J45NzCMYVkJdjXRCS9vNyDQES713F4cMkQoC4eQ4dWSVmMN5TkeYPWCn3cYsafBoWagPNAWcU1TkpREeGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TTs9Vz7X8TFkeSQNpRY6HsDKZNZYAiqRx3puobVSqpeYat31RwhThWjdQt9w1XNjK1oncKwGVtZ9itfRbrGs5Jf",
  "key1": "5iN1nxPiZYdGcKgcC2SKSqoajciGG8Xy4ZHouLA2SNiRY8fn7k1n4Wa3r6X8jbdaP7cbear2UCnANUjAwkk3EdSH",
  "key2": "4a8A6KHFR9cxA5gnbf37LRkthpLtvLfkWq8EjkUJX1zqkfKWPRBy9FK1SFFjDaYxYkZM7CxkvWbQBdur665uNBa2",
  "key3": "3x1xYwy3YQqwgssQvW1rWUryHtymEbDkkF8qT4oT23fVLr8PZMrj1npaFBJGXuVd9cVyKH7EhNbAFZprSHWDKw34",
  "key4": "5jez2NiJs5Cy9QAnUa3dPzWRsfeJCQNFxk47gKnSgAzR9VNG7zERgnwAx9mR3kxsh9254fmPoHzpVu4Uh7jWxjaC",
  "key5": "yS6CGFmLFFPizajfi2SWM5kbF91pEa2pJATX3JGZTaPXEPpbEtDJxEaGABsQhwzvC8duG9nqgvoCLprpm3Ntyex",
  "key6": "59Q7uNwNMaHeaYY8UgHDV594hKABfYLdomLLA682V7osEYfYtJ4XgiRjWLy2XiSVsJPMZy5uS8kJbgE5hsXU8Mqo",
  "key7": "oR5pX7FS1MkaN8fZ4yW6jtPUFzNwcMAruB7TZAcfoEsdzbhhjGZTGy3Ur8o6tai5JBbPNGKNxKBm9i9rjheyX6x",
  "key8": "AURp6qz82Z2wyxrf72m9VrVa43a8S95K5aqS4kac9BcpuvUFEXJEV8Er2ygWiBv3X6wctHSy1gNX9ue8NYLNqHS",
  "key9": "5UyHfvQuVobbC8fLv2YqyzoTjwGVUaUrFzwfkNVP3NV2yWCUhsJscQsMvKM36dspuP8b6RXtsGyPP54JjBAkaaLD",
  "key10": "4y2ucsnAR7PFYGpts9xYpRCL2HwBCqaAnhVCzGZ59eb9TLus6TsVuzawPchgWp7ntv8uJUmoZ77LmwDmS9pWDwzd",
  "key11": "2tUDWPdLXhabXXBGmWTpJW1ovuQxpXKxm9exuSFnMEskQoQHhMzoAznzK164YF42XZSN8Mzexh7vQYnmjYBbb9Rk",
  "key12": "2kuZAWR2GBdV8XFr6hDzvZ3BvxxvEokndK8qTjQBuh85JcXFj1s99auR1ZGhE53hheLXD9i8Ux7aZ28pSe4W9zUq",
  "key13": "2ED9CsjeuukJnsHKsnpREUWcvBvSJcBX6DJ3KPzj63bJ9yRzzCVwhan1abP2pm7KkRDZmfsKXPmFCsh3cg4kKX8p",
  "key14": "53uyrYdULjke5pegcDtfyraE65QhWeLjaEioXQDsfbaWrniskZDRZ37duPDw2N5v9g8BPK5fByyzU1wUr3tBfsKD",
  "key15": "4DiV8gmLqKyUt8KYPA3R6L2uTrTWZTbxSZC4PEB9gsnfmqrbWLV3D2fyfo9NVoa7cXN992yNPGU7bkJ8dfp16njM",
  "key16": "36Lpsgty43ueT9GbNSUtnGrsx5bvebsgb49UXxEvLi2NrB37JsiqiVck7j3ryzN9dStwiq5NQj8c3TBwPtTmbn6n",
  "key17": "5N1M1gugvaVjqWfv26A1uLWSa7Xtuw8ME6Hcu7w2qhaTUdXxCabBb5t2GgHR4Hd4j4pSNBfGJ61D5LqavfssFr1u",
  "key18": "3R1LUywb2JGVCmTdQp3KwmXNEXV882piAYPctkFqtGf5bzncRAe3m9a3Vcvn8Z5jPg66ChBYc9RgMfF9KPYZgVMN",
  "key19": "3F55Kn12eBir2GKxexBq9PmsMeEfWBcS9dZW6KJwgSuFurB19hk7krX1mxGFMfQ7Y8Rv5Jg6kF6xXivH2TnXvuD1",
  "key20": "43LUf9gNir2NeXsev1whz4P3sXjddTGDuidaKjdhu71cGvpDncdk6hvFp1T6kZ9vRR3dFT5sLZ1i4QwKy1rBy3Rc",
  "key21": "VVmTfcULqqRg9g8itXrC41zWFx7hFxH2AdZx8APf3dQen6yLC2512bQ2JHDjR1K9MRB4NzJKNBpiUFunXBY9Bgp",
  "key22": "4JZ3cc6pYR1UKTyWkkCaRgWRAMxWkv9ac48tfpgpGyVbLbATJ2XkgJPLY7CXnXowBuyj2qqEvPrhpQyEappUPwUc",
  "key23": "2StCWFjYfQoaJrXsnLXuYX8q4djS7BPPqeCYVN7WbjVS7BLSp7GU6jpCC9n6tuS57H3xoZhH4GSWbSqaMMpZHsoP",
  "key24": "27z9mADstc1Vm8LvpYYuPquPtLuytecU88uYgiEm4WW1BGSQEvhF82pzYCvKUeYtuqQGcQxMXHRthGPTjKj1yocV",
  "key25": "3TPCY5So6gCLzwHUh1vMvARcAGVHtsz4d4TKhT46VYLrin6euxSFinyDFjobJygLz2457xf5ffv8atMTHpiqD5fH",
  "key26": "2zzaJbY1ULXruvo2o67wZL3p1CLgD4NiZ4RrRuLLYN7omSwtussuGuRfE8nqF47oV7imts6ViWCVHt2oyFDk3qwE",
  "key27": "2zDAD9UWQpBg4gcCGjxjeDxfbZ2KSdKb9kLUTvKnt77eKMVUeg9gWcEe9feYNbaU7PBxsMzQcfxMoSbed6tnnQ4K",
  "key28": "3c4hu534Zfub9HWb6GcDKdDQJbWkEPRUWDBhfyhbRqRbDouHP6CWQuFVGDUZ1BaoSc7qwJuPdsLHWSZivtfYEGCp",
  "key29": "5YjsbPc8Ha5sGfj2hr2LTGsKui1j2vVm1pMcypcLpQQvdY4mRKfY8BwZe2jyDLYyiBWGoQuuZLFswAoCsBACw9Eh",
  "key30": "5esVnXT2pMk9QLbdxx64tt66kaNCDkPLBxWWnXb7XAdQbzrxwFtwVmxB7BsPxqyjDCvsieuSyjzwB52kPh5YrcRp",
  "key31": "3FZxaVJp7CMF6B77dEb2kMK7bUaFw1q3fqiuTGFUCptFnkkJZrwktCChYw64p1WRKAUah4Nkph2cU4fyRFWxcmbn",
  "key32": "3v7Kj8Ztpx9a5isauLktne3XV2Je5TcZquf5xBW93xsqRZx3Mo8z3kMsWYS4z5bQpqycLh12ijXAFCnkXBfRuqnr",
  "key33": "uLwYGkHEdcetaB3pjRQCbFpnQm2uNp39V7G1XozrtHbk6YtQwWWseKHvdb7tHmDCCgCjVpP7uifWvYaX8Wa8Pkx",
  "key34": "3fub49UpYdq1PobqXHgqpw8EiThbwHNhGrjEVQYyaCXcPCtvMckH9R9xYkufwQpJwc3S35mX6ea4xbjegnBdLibj",
  "key35": "L9zkGAZp275T6WTSmixu5yzLcsVzumyc58iMvTGJFdaTxRimt9YNoKzzNiTCqGFiyv9CFCqxaNCB4AXS1FquAro",
  "key36": "2rYvu7pPFA8VC948GtFPDCJ1exhvmLWtBnweTUh1WfCZccNn87DWabzXvek58tXwZFqaeBeseMJnB6C1iVyrPGpW",
  "key37": "3HaTMGZvE82VxgpqUfNpcBjCL4Ju2tTSvt2NEXm8eVS8mqcwrqKjETGsL5yPxyeGxSVvmc5u1Wh3ywafcfNKe6B9",
  "key38": "5iYW9trpwyfR2FcNNXxzoNqWMDPhqAKqhENMAVztWbEdjAF8Sji9MR4cFuk6h6n8qx4Vo6K2ku9sLjBV4WhEEV9t",
  "key39": "5FyTf9mRTVX6LstugkdKNox8euBHbGLHNbTXanFcQfHrkAsbwy2YvKRfLE7hSJw2kpZuVrZbtH9McRuTY3m5AvJS",
  "key40": "38V1VzrkcNPQcw9raUfWP31YjynzAfUjbvJsQvotsrAaQr2FFv1SfdCvcbbL32gPsy7QUdVWK3fzyZLYC5c4usw6",
  "key41": "3rzR3skEBrzFv49aDgSTi8mpFTmFhp9sbAvfdHRZnpYHai6bJ4Ak22e85oxwfNRwaMWdYPL1LpGjpqe2vJe2Ptii",
  "key42": "3K3qWWUEokbtyWibHeDsyCd5REFsG5tyVuWwCQpsrKPtFdVCRaLBKK5MPHxrtJeJmSWuwM4J4RBYh8YDJUwocnVQ"
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
