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
    "4Uogb6RqhFrfAgTVBJ2z2PzrRntF4CYGMAshMrFiD6XEaJkeJFFWVi7hmpx58knbCuTn97aPndp7YeQk4gY2FqT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2soAZPZmFZ9KNqchvf9FaStWsP9mWNhHfgjC6bMxZ2P9FWhqLAcnaJLA3KnYwDa5yXZSGTUhFZksQgJUQLfQ7kJ8",
  "key1": "2EXyYyrasCX37DDikkpKkcJvtQTbpQvJ8LNh4PejJxYy9kP22omPN553WTPETU5BXgY9zhBQYSkd6hTT6ZroND7H",
  "key2": "5Vsg8mrGnq2M13BZzz3VcTEooDo3mC4bsUY1Be88mAJ7NYT4a9UJRRYLx3w7iwEJcMyRFRonD7Hhi1gw6VbnUori",
  "key3": "4Ws4APVpgnZ6uvgzXdRrou9dqaJyRzcHmrEbBentRYgjjZDXNF8GrovZrCbCKVKpA292aeKAU3KUHE4Faq4GEo2U",
  "key4": "2crSX74UscLRNrSkkwcKtGyxPB5B8DYvzy3jjRVxzbWywtxw5BRfjfVis9oscG3N9igbEXJqUmaBzQBS8rQxveHA",
  "key5": "3ySdyevPesFaC2Z9RECPSgvZbpy6CWR1r87BoaQGUqcLD4EKi6kDoYpLooK2Lk4kxBw2usrwRqo9PHBRu3ebV3qv",
  "key6": "2tmKvzzQQrMpsAksCDPF217MszGNnc3SXD3EjZi3ed2X8zjBs4Frw5BXoXN1iuhHSJ6har9yiEgkYHatRfp2L4pT",
  "key7": "34khpGZzJstKkeyaUXspsxTnMvU7vFKjQRMNbLkE3rraXt71EqyCeRX71rbY4NuxU1MSL9f5JWkgX6crys2w3GJa",
  "key8": "2kR63f8YVvErjMxrB8RSsUJ3ax9N6H36vpKBG7bjguDoYijKHMCgToctoQM4V9fQJHPVtFwzYPHihc49qoaNeewS",
  "key9": "3QHT1RcvBVE1KQvD4J5zPiUFKUfGJDfc9RtrdYPTKXKSfPazMAVCJgpqvrgfxFq1A8ZLpbbSFEX7tgYoAWZJ6tMB",
  "key10": "3P9puynNqUhSPMrJWoMt9A3MVSudbV8hEji2tNucgeXPLJXy8jpbzQNUnjK3eZ1E6mqCX6kzhErBTDxX1HAAwEJX",
  "key11": "wcX5Yp7Z8V56E8K52oddy51mSWSuinAZuHdikCjcptK4kbz82EcjocUSz3BWa8ihf7CkCjwLMYcvDQwzLxh9wNM",
  "key12": "E3ZTxpexbfFmpQ9w3euPNEALRsWae2yRaAXhZifnnM93aAkotsdGAwjiin4tFQZc4ewEi5iRfgL8YZTVHiy9i3t",
  "key13": "3CEokJNP6cYxhqfALzKjtpyFx5M4KandHfXE7jRCR5bRYmTswh2otovDSnjMbFwTGNeHWwEoiXQZbQDJZvgnbUq",
  "key14": "34DTeqBkcnhcj46TFcB4ztLaaEhtBu7p5yCsTUb2Stsem6R6Asf5hdLfHmdNrLq3bSiAgLQ2Fhm2eHarsChY29tm",
  "key15": "3TJRdHVD5g4Ec4pu2EtSqCvzGwtuWFdwd6jMHVnWqXL3AFo644iSv1GQhYtj7F4F8go9kWGqeLxSMyNcu9WMaPxZ",
  "key16": "3Cq6DXRiAPrYS42RcieJopXLMQLFmYNYtFj2DHk2Q2ani6pXutVLvaZvrWAVuZqMDFswgjk8JnobahTcvfnx3QiX",
  "key17": "4PeQPrBdCieFiGCAa5UsCupX4Mzzo3wshSbmsrgEeTHaNzWAQFbprnPZ3Lhyu2JFvwiuCtoP4EYPdt6tRFrFzMCe",
  "key18": "tox4vXz8mDFuSJssMtH8peTPq9oaZw4XTPnM89VCUC3ebtbzkxzh4RgRLPQhhPNpdRcGgoXeGEWtb3fXL3gcUfq",
  "key19": "4MFdg5f9wDbQX2FNQ8wubZ2P77ew8vJTeufbGxzLK2ji1DPvjFcBq7WoUFEt8fs4gjwyyeRCYKvVr2gfNnMzZuPw",
  "key20": "DEn3Zjzemr79y2dGqJpNnc7zu7jM8ZVCtGAbR21LTL5WzMzbhWvVFSVuAxkSTvgLSvNFQc67uXzQwc7q2cPyzmR",
  "key21": "5SmBwY2798Sh62Xc1aF9tNoqtMaYGB9ZoTFtiyTiv8Xu4DikgRoGPW46a2z6Q2jcEJ3ALKmj11Dba1A28ZF45wca",
  "key22": "3TcxsHhSaQTZCgpFRkzx7LrapLxB5GnP64uHRhA8E6GCcMerjw3CmwyBmedES3UVTP5745dZ7LAd66716VmhVR4Z",
  "key23": "syFoC3UhfgeT9YK44zrgrFnuxiEc3ZrcD5R2TuW85rKtLacXm1zDg4fdiQB6pxpkVchRNXrrySpwv8hRY5KXdwv",
  "key24": "4GTpskhzH5KB7jJj87QdgGCJGx57mTb5ANPeSHcTY4KhpzN5moDQpJCV6fek7dw1oYeujw6ZiuAQqAZMh7HMRzzC",
  "key25": "3WR2V4wjH3dcY8nWTbD8BQf2NB1Za4Yky9bWGxeEfxueim9yaGzE5xmvLKev36jxTn36YMGuDxNJaFXxUL1B4VCA",
  "key26": "4DG1SkEfUMdVaNk3F9pn792z1mKKWmYknD42BeAT49PX2AGvmwEBtF8EdJ5jrpLy3a9Y2TT5n5GtJn4Lqr31SP3L",
  "key27": "2fZvAn28JVcLqN5msYy88rFRjeryizoR6L9w1x5TKDMgccogTHovXo6NW3bE3sG12rzMsTjiPkMyydccJSe9CFj",
  "key28": "4poyeng3BtkzH6E8M9XvrkrH4LDBQzXHDpHuqs9ucY8y1KN5fSDBAchKFTEV8EjriiYGrVDcjVzzG15ZYTBCwa4A",
  "key29": "3n5UUn5Y9xF6H1HSj12fJ7YgFAvk2yUZrXxaG7uD6qNYUmGxrnqVi6X6RJXBQfgb4ZnwmsUDj7ssUuc9bxezEfax",
  "key30": "5awZ7omTCc4i7ne2i9ViSDNfPTixxhpRSDRKZn2jt1Wq4yxm3Swz8VgAJu7FQqCum3vUzTZVxitBJCdhutfNmp8o"
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
