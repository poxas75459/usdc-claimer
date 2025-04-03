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
    "CaHMZkogJSCWGfcJ1Rp4isFHPVdQA1mqbgt8Ks3FK5kLWUVNTLwMbDxSsap1TUGkJJczZGtqUo5bJbgNf2DMhJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hqpx64hNaNqC58PhtdcjzGhD4kJ96p8849JejhiSB5k8BbNECQDgHzu688rKYyi1KU4x86o4NZWVvm5TDoSWCTS",
  "key1": "28Drcs8D2fqYvUumwEWuwJxT2vhNLf1ipKEHZfHrc8Mu7Zo1BsXJeWaLHBQmRdPSPwtBsAqjxf2VYxqZtA87QR2M",
  "key2": "56cvCCfjJvo1Kuvu4wrhR25xC8jYt7Xcf9qrTJ4mCgU512iEaCbyBxEEpm5AXgUSVi8z2TMUbX3p2Sw7BCWr8obm",
  "key3": "4NaNSpQV48BdmEGcAZ6ePFj5UkvAUq5ZsgmRrhDYWpAdZ7d1R4diFVEHPpemRQ5fZJZYy8tBcRbbMLWvT1QyE8uo",
  "key4": "5ZyN7au8hxrw1y3yELXnkeMj7ci9M8z579a9fFx52GN9wws7jonUQvhvdtzXazPFwnjbruC3q7GuRLJ9bB63cFni",
  "key5": "61ZFomXFzTycxYZsAV4aNN7BBngHTPcVqVdezMijnLuszgWzdWCi1wDY3ZVZF5tfZcnKy84pWpSXWe2PoUvQvPb6",
  "key6": "2gaj1YGMGAa5b1JLxz6GKzwm6dmpUwWAsEdPmoP7vtAN6jGvufzYjBp7kja3ohX2kfG6tL4sG6WWWNTvnff4gP4C",
  "key7": "4BudW4cdtXhEtbimZG8nRWw3gwFBphBG49NB2qHLVcGNrrQv3CV9kPvKYDTQPepSaG6hw4MzexEQh5CH6pbJ9GwT",
  "key8": "5txKwkeP27Kuofa6Z9BCVJaXgpgjreyBDYjdGBDx3PYf1poWRewck2wToxWcHWhLKzdmTnVsqLYFNNndHptv3JNn",
  "key9": "2T8rAgZ2R96p4PD3q57nNWmJDZ9DKHvX124MRAkH97hLWSttNKeGDLnFvDuyNgjPuxR7GTwTL3HJectH4Ye5FomQ",
  "key10": "4uLUqiRupjSeRQJ3hLUbbwSmKvYwYEJ3vzco1urk5dL3L7fd1LeyhfapCh4hyTcsN2zRWWpsRTkYH7xXcajAK8cT",
  "key11": "4vWZB8r5FVuZbe8QirfQozhj3WEoLcNUR1gUSeMEFz4yrENdZvSgJJ1zcW9EFEEpjxekuDzwYDc8AC42vfdErfDF",
  "key12": "2RLwXCpyy6qU2UBsaLNyz2GyaSZhw4bSAU5oGYbXgTuLScJ6cKFEkm27NiKXzzAWd17aWQhhHqnv6wJS5dNYedTi",
  "key13": "38gciAoFzcK281puNMNDDRCUpCpw1HsTKFXYLkwTntkEnQuNecRAQHLpNy64Ux1WVsYoBESQFBe9kBzjnbtmk8yJ",
  "key14": "4wQMgozACdZdy7oAXgVxbsfvFQDrGCPiS7R26S3LmyXFWQkB1oPshSNsTZ1MGMaAurwCJHHroDj4BLEwyAqriHTM",
  "key15": "3YZkqg9sjJFCG2P2iG7L9PBnbot15YjB4ru4wjNMrqviwivUBoh32fjq8fNi8csUufbChpU1gNwU8EovJ6owVdH6",
  "key16": "24V2szCjHWanBgGkLoKaBp9Fnn2Nr2UD9jcSJnur6NiZi2frkQCBGqaC4pjG2yKuEMzeoWp8f63ZkynZud6VXxfy",
  "key17": "2dsadYL9KQyg9667Skifp1VTQ879Mqg3Ujx6PknaVKzkUCLc1jFcvjmmF58RNWk1nj91rY1s6xw1XHTsuyCwfeQb",
  "key18": "Fri4Ss9bfiAjcae2ZDqQkhTNLFUVCsKsMozjccoj4fSpeDbzv9LK6H87z7Zi6eyY9NWh8BizofmXETze7ntWyd9",
  "key19": "2bTikgRhufXd8NBgoGDDXuJBSfxU75Xh86EQ9WXfWH47DCyAeR6Py7suf3hYD1QJwBcuZvu7XT8VVYeLUH1AWSrH",
  "key20": "GbRkjuBqwea44wP5zgdyXdyQ8Vm6ZZA4MLkw4qcWW64ZtqBd9545LspEr7Kzkq5eq15A3C2R8GeC8QtQfcdswgR",
  "key21": "22JZBtv7rZehgwMdLC2waXCBrWzqnKaDkYLFyGZ6q1BUVFqw4EpLPVxwFUWyFo7vnsFr1RkwfnFJCZtoB6z6mi9h",
  "key22": "4NNE17ZXBpYdvzPGLgd979daQ5XQCCATH2YZyX1D7ucwMD839AubgMmfVy5x5YdZzqpn79AZEq4ScfXJJGJar6xM",
  "key23": "63xNv6zvLXXG292ME6qDQpnimHFKFgVNizM6DAdZtKUzd4HmtnJWv5xyqmP2syXM3WaF4a2tuUu9wLJa5rEoQCKR",
  "key24": "42ErzkpDBrRa9jJ7ngPSCbujgQRJPyiiBN9K1Hm5dyTbm29e9WnTfqDvC4gQhu2LH6anfygXnSsNaNYhMLxYdRwH",
  "key25": "1V3fwa12qsR35CkrFSXoVSDNKVHeGEeHBBzKh9JAx2wn2cJ8JDvwTGzZZEdV6o1qMUmVq4nShPMvwRTM44HrFCV",
  "key26": "4PxH7TsQ6jAvwVHVBTXvMkHk3HjVQLdqYcx9DE8JkTAKmpX8m8JfZBi53G7AUEDdV83nzTSW3EtYNimu7cBbM8JZ",
  "key27": "fGyXYcndovc5Ri3E1dYEdb53iJpPZdfSSKfowhxEc4SLuXA2Xjun1K3ccQvzEnmJgkUGBPMvuiZgQ9F6QAXC5Wu",
  "key28": "675n4WfAog17ijS9FdJ1jzhYywXAAGz3G9jDTSBs9LU5rSv6X1ym2g1oYtkuY6VFxjW6t8LmD8RUPWo7SkhpRhM2",
  "key29": "4kPxexQnyny5hxuyA6nTik52fJV9gRunbsE8c68k9otFhs4MZNd4UaaseJvsBf6XJ7YVweXpwB5Nrj9rDciVMjKo",
  "key30": "3UEdntd5qCfAFYgWS6TS3gpbmjXhTRzH6qgxj1JBfQRNWdCy2Lun5o9JJeGstSq82Toqpy7jw8eQN7TQcPvr9tpB",
  "key31": "koR7TLzyiwUM5uionw6QC41LxTEiFovfMjZxykFDB41jSPqETWepTJZBFKFPLsK2xzwZ2UHqpW7hmKmVzbLyDQh",
  "key32": "2zcLj3syWi4hSVEgvWkXgoJ9BJ1Jv6EWj35bDwgpJtTPQ9sEGwjJpFPGUDNrJrpZ1pwUTbFGsFK13VuFwa9TKiuJ",
  "key33": "6YUuUB3WdkyM5tSiG3QqxNbhU1ttqx8UM1dMvYFHRVfXnpRQWKyuVZcYHfofA6Q9WLhCAXcXje7M6aP7mfphrzs",
  "key34": "2PTbhrJzCcXi18yV8XopEm98iTfCDRfQEvrvnpkDoyDe8iTeB1Zfzj83fCcy75YYtTD2FiXuFFD6z5Wy7mmQoYs9",
  "key35": "3mp6ChKvGRAE9nVt7f5J6JKur9XaHxnyTRxjQU9MLnu6bsSsAb2k2btCVVbvmBWsFt2ULDptJvNRZZRqwkWweZLu",
  "key36": "3y2nX3hEwNqLz8b1n7TejRc86jebNvVGxSu1XiNoK7FC1tBFuf9DxauFseohXNgfxnwndhVRCw31NQU5W83FUA34",
  "key37": "5TiCaBc8LvUcTAAgwNpfiJe79NvhXNyCzguPh5deeRS6HmoHuU2njzzjNbuTN61JBgTUsYas48GCFQaY3RHKqrVV",
  "key38": "5pdEVHYB2PHNFLY5hiMRwxEY3kEtvE2Qds8BM8LFcJ4nkhPimb9AVe7UJo9BtNzDPyWTUCfARznkgsi53nwRsGiF",
  "key39": "4yXCaZdpFN5RC4mWkenhVeyUB4Hs3NLnnqL7qB82uWN1ixvVUyK6CJeHh3bnVgEeJjHPQ7SpwY7gP91gynpjbkG3"
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
