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
    "3uDb723sfTPHnWgEZ4ZCC4pvE7t9oSZDKwcJnriaHH3zDUiNcyhjjE9APv1gwX9V5eSKumdsFKgAzmjyiHZ4423D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27kZR4dv3iQjgkSgMWHziShJmeybJErSU64pSrm2mdAgaVJNxRZVuBwQi79ph8smv8iFe3Rm2FyBoeW87Bh5NBCk",
  "key1": "3fvsvdbFXQAaRSmLJWPkaSzsCF3M4UZoM2nnMVhrb7YoGaeJshccc64tmA3ZkrJaf4ffg4A4zBiE1RLvazzSgobM",
  "key2": "41g6iimaj384VKxT5LyRyxgRky2V1ZpXKWg2gMYeGZSi2S1bGAvc8YEedhuCodB2N2Mhsn4U9eGWBTVYR3qtY4jt",
  "key3": "2GSQcfEysvMbJTnvCRz2CqeC2boaEQrnopYcfFjXYybtd8wmv5F2EtqqdhXXnUDoR5n6tte3Y15KCVkArTbJ6pUS",
  "key4": "2fKeihuA4nhwxitBVRhi5zGa9F6sYPRBpCwvJnH6Zk8NRCWgu61HosnuCiZJwA1it5Ama8YNV85v8hhH4nnhfVcQ",
  "key5": "2tgUKwrxTKVf9chQd13WVbjUevGqco56rZDnLEUemo1aSTEkW9HnxrW5dvoKZpxNFujEzurSzRStCQEDYKi98Wd4",
  "key6": "4YbzY79s1hcADCJAwPwiujxBGDGyryZhSM8bcAoLNzUeHDfgZ9nrtKk7DRcLvoPNksM4gC6Xr7viU2VDAXQ4ib1Y",
  "key7": "5HVz9GfHyox9yb7sKxFoL2ah5SmLgQaLy28XUiW3Vsebdw927TYVXry3tQKeiuw9QeRvJWJq9Aq482kK4a8pUE8j",
  "key8": "FWrEtNzGzHuRRSH5ZzRS5jiqTNCqWwdfTWyiCU4Wy5xdcHX98xRutBNQHEb1AWqQ4iYvekv654Q6UwGZ4JNB929",
  "key9": "5eCgXkEtS7t5Cv1tjeo26WikaGpebWgQZGM5v9unvXCcq9BbUhLTUxvpoUx23UDG5SBmYY8LYFBWyzaNDAbeuJNe",
  "key10": "21fA5hJ2BKUPDrqGV49HucVvuTLfq5LuU3ijWbYBQJY9cztU3LL2SLACaRuSmryxoAPjD9g13sAciHer7eUAfDSP",
  "key11": "5obikGvA1V1e8wEwizUsWYU2Qrc3Qd3dcFhvi6VuPEe9gTXFomQixBwLzWbUK4PNScVwWkGVpL2ytUs1Xj46Dg67",
  "key12": "3trHXuFcAzhvVCWBgNfbkezZji3C79RDwuqGphgRjebkpStSjGzibtyVhrPc2ANkaS77VDiUX79PZPMGR1M5vz4V",
  "key13": "66vT1bTbd7XYR26BbbrvtjtqpJarkr2pzqbgKEJRssjuuHFnoqy5JNqcCqfJTPmxRZ1H7atb2AHyK23XbJGbjqhF",
  "key14": "3D8hkZr5QsmUpC5tuj1SaUW9caoTXQvLnyUWq1qQmBA7c5Eg9wG7h7ijhadm7aG3hbHWDNMsuZs9BEDeA8QNxES9",
  "key15": "CdaooWdsrv3iKs2q49SdmR1V3SJja6GEesEiMJCHM6rGc5qHqwYdV2KiVMnRrz4n9zztPRGTAjeVNomJ9P3mHZC",
  "key16": "3HNMecoSznzWiAZVhq13NMkaagq86ge9yMYULAhRn5otchzyEp345NMc6o7RoK8sf6jAnKkdiirdLiqKEDQBosgx",
  "key17": "gLgptbSYwyLMx1stGeopa3hCZvY7f4DzGzfAe6eLWapneG5HMRC7FNPGhSb4fW7jAPjA5EPVHUdyKBuwr6Ce47B",
  "key18": "2z1wXqR6XRkfRxPBpeKkd1sRtHSxAKt1of3FbDvpkaG6YZXBG8qTD9AyzyPtKxLvu5PZPU7mqvgqCgaGa74fJ6PN",
  "key19": "51HPQhBLraWmsqWQo8sGQN3KW2oyJXvNYKcJA22xAYYp4QxJFU3Fz35QZnr4eGsYiyqBMYSEBXg257GYPzQdbW24",
  "key20": "ux7mrc1vqqwGMxL8CE1Bge4yC6hhHsRMoYzt2ya2EutevaARPha5zaJoPtVJPJYMCLVEqvgopi3rHqf2wY4zjeN",
  "key21": "4DLjvJRvg857kv9tfPAwTGNB4sPx7x7mCAbxKS1R4XkNukEu6qVxr9B8Z2RD6t5Tx3jETth2MXFyGLHpUBZNGy8o",
  "key22": "325EDUaMHemuPQPx1Rh3zYdTJXemoLjKhVcXAdpcAZrv6Y329vn1xFb1ixqrywNyrXEiSUdCKjehMWzBqgibWkUf",
  "key23": "2e3eL97hWxpPrZSHcQymJSZR99FbnmTh8EBC8xVMf8KeZi4AR6uzkkehZaUvJTfPLwuW2YJMa29C7wYCT6F9vVQy",
  "key24": "3ieLiNCrw1D99tqtHtaUBNeNjGwEKod3c8Z6suFSAmQvw6SKBJizqPWW2CdRxtoVY7bDmQS1BigUML1QGHGs1tu2",
  "key25": "3oFAjwarjQq4RbFEPUUme63ueoabGF6BzqUKXPt2Zax864QT8M4L1BXxskbYtRD7zaXzKjq46XNa5iL7r8asurUZ",
  "key26": "3DY9MLKJRPkhphUjXMDsLPTDJUYDNy5otdXnmCH3Kct5aF5u12Gp6vWjVCiZy14PdyiudkAaM3kETh6z6B5kg7W4",
  "key27": "5UPDQ9A69UEeiNkBB5HR75RkB3c9vJPFuWXvfZVHn4ejK2y7a4upLApqjUJEMtUh9xut8LNHyQjDaRV7hzH2vt96",
  "key28": "3hqFsKubPKJJMg87QYCD9eozsfBDDYkcafXdT5vyNJft756brBoimwrw9bEXByUAV1WaV9zd9B2rKZtwWQb8KhBt",
  "key29": "2HDCCh7z4SF8gyehPSbo3cAxRSXfF1KHFkKpibQ5YbFmMPZLGJXWbSgdk6gY5mMFzgLomvw8kdyRat7B87wpAi5N",
  "key30": "5wqy8e4nnFn6PYfwqzkMGX4F6Gpjrh3epWEKr6DinPWsop4MfyhVSp64ycNqt2t2cAwaPjdjwM7gXLCMyo456zR2",
  "key31": "3YGBcV5JJ9sHRug3s4Nqjc88GQefHCvKREiV2ind9fdNZpTe4i1XS1heVXSmD6s41iXwwZPRz8Txnx1pKwFwivHR",
  "key32": "kBdQSszoy68Bd2SkttJj1XpKQnfw6rBckMbSCRPbmFEbkZEg5ACbQnPrWw3ciYJ2w1kbQdTfsYSHczW7YLjfCGq",
  "key33": "389eaaW6L2ECferzSqtpvVLQHeS8y9ShhZSMBumf8ptG16MWs9uYTJqnZNAPLBtZhBEZf2KKKbsrSnFC8LeEq4k7",
  "key34": "52dFm9YZqrUtzGAUCHtz1bvVTFwF69J4A8i3ZLr8VagizeQDDYh9qkMyvNQ3S7cu2xRxjNdfUFRMA16CVF63ffYy",
  "key35": "7PV4MpeCV4fpoJehtrEF1hCeok7U54c5WeDCdGtFyhf2mK3zRP5FjP1TDLi8F1YWzpsgPn2xxjCfy3AcmWn5aKY",
  "key36": "3umN6ayYfq1nZLEzj8aHfqQjrr7CwQEbijrSiZWKts7C9WF3bGX4gfM4wJPiWkep7EJ6drTSZr3eBPrWn97QzhCv",
  "key37": "2rdCQcvRUJXgJS6Mc4ew2dwxQGcfETEaD3ke4g4iJxwsTRBQ6NsXzh7GZMLYxnuZNP1P6ryCixMcZRu4LAdx7T9y",
  "key38": "4Ga2rxyiUW1Dw5m9VCt9mha5hkrZnTe935cCGfiKjGEZJzhLPrcKDVreNtJLhAJpBUEgYbEumi2JLdHxYNnnVK1R",
  "key39": "5veNuapoHmUZ9ddrChpx1bm3PWzQaZtYvbyK1BxmVNtD7uK9V3GMLEw7EhR5m5vuWEPMiazJ9JtnJD3vHdo4kUyy",
  "key40": "29Q4kj9ng8pjZKNdZHvm1cjVc7VF3AkwwRK7WMuxy76v2pdV3owgYocqa7ivpJ1GfXcRHwwtcsQ7rFcCsxGH6ehT"
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
