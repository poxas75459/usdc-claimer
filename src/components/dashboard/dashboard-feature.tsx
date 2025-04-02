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
    "5DbME61EgmyMvWwQRXYw5f2VvW24Fy9ViWdDTmPQYQhtAmkMjF9fLDjSAacBVZiXZsUBZLriHRh1kYhkbeevafEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LYDvghRwduHPUvYJQLLLZLRrfQcvZesAgtNw2W8ghoPPzoJSGwB1fioyUbmyHPaoKjuCztPeuQy2DViHE4ibdTE",
  "key1": "h1j53TGr2qk6FKGUyzRuQ1snX95W4LQndqioU5YBT8cc1fg2LeqepAnGd2EyX67nSxyMaSVuZDqYzR67Gez8L4S",
  "key2": "8itShjRoMvLc6dp4XsEE7ddBjtKyA8CTtM7QsUBsS7SYktQXZotCwZFnVTic3D6R28BrKz2MiqCZEyxdk6MDQWb",
  "key3": "4P3R6XXGf9guYLPLUNiD4ZNvei5hp5ULgWzKvRLY1vhQVuJKpWk74wDmwjXMcnreaXNm2XuytwAd6WPQX81ciTxo",
  "key4": "39Vr7hMeWF3TejGTdteLnb99Y1LvuPvpNjDhqnhvhvWsHHK2oqxkYMLiKC4yw8FF9gAYUWjmTKTRAsfwuUCNaMgy",
  "key5": "3ZyXhg92UpEcCSFM3aTpbafhN9G1oYg9Dw1LH2yUtMDBR8qKE2yZnhMc3GvjXykStJYCobqgvSNuadhiuqkYQkd9",
  "key6": "3RnEMVtPBSHYfgBjUd3WuG8M8DPLk4qGLbnbeXccNnZ9do8RSvD86aTvbcgFNYnA7NnA1fTuoNE2dgPDWs55Ltbe",
  "key7": "57XVrwq5Lo5AGrXFfQzHWGmfavvcr1AMLxNRuecPQirKYEATD79AKLzr5uE1HNLmmX1QMy9mwhH8BR3aF823HpPL",
  "key8": "DNai2ppUTLtVQZQwGgJ93baYrxRFBjy2MgXjzmLxT3TfXmAdg9taA8QXhircVabRxXXe6MJJTwdPKSZ7zsyJEMz",
  "key9": "25xHsskAJbbPFp3ZWmh8oTjNdYgX2US8CK3tQtLS4Kxo3cZ67nifwWxwheBfMjV7nsRidGv9zk4uABwcNLJPZmep",
  "key10": "5JBTeF13mJ6F1oaSdqvUnq9CP9Wpwjr3YxZCATgqgCgWvCy9zKY1KSMg8dHhctNBYRaVThuKu78maau3NN7WDJzN",
  "key11": "4c6aLV8vCmVnqyXXJd2PssdMEK1pM3es5TuWT396hxCXynRBqZHoMafuorKuVqKFvsd36vUnhBaY7oEuWU1fg2ih",
  "key12": "4QrFtb6aashfp9t9FuVmnBeFBZuMbk97PAXAgSukqBFLTLVFx8LqrZyqpqoLRoE87FdT7inUh2U9G13zXuxNqRW1",
  "key13": "5auQVfC65HA1N1n8XPaBf2yB4CPnVJ2GYrteGGTpFVt1FcivPScmd1NCyjbwPQJt44VaZ62dNarfYndxEjySa8kh",
  "key14": "enLmf2pQR8VTtDrqHrprtgFv8368DS6z41d3v7ughLGWqdr4dmCNftwU7VkSwBHuDRaUdpKbN6hrowcz8XLjdgc",
  "key15": "3TBHTedLT7VvxPKtDAvdKLnTHZ2xUDEgMMKHzLTmWbJbdMaJYHSDiwdm5RwjVAx8CyemwrzziWQaubhDKCtzE2y",
  "key16": "5MhV4eTFqvHeRNtdYh6eGt8qDJbF65xmgvaT17shsi4jpCUJiPSHy26FoBxc2iVcpKBcJeMwis6StsJKK827BeNz",
  "key17": "2GbnGknvzTYGR3mAregUGpBp2iPdbSUkzSEu9mZkrVM7ehVwpafTVn2Bx7uJfiZ12uHTLoKXF3rVkJY7fqdSq9jo",
  "key18": "5HnsLfqZ2rhnwfcF3TzE8fuf4R3QcEsbEnBmeAXvx1anoHok48oyrNZHjfHRre13CQWNfs3TzrutkMHTnB19nMcK",
  "key19": "56xjzuZFvLrjniqSU3wfKzafS5A2kQeakRVTzmsALQyeTn8hc3bpdpT17rE1vCGiUkXHD8sYE16Mo6wSzp2eFsET",
  "key20": "JkQEmHNuQDbCJRgZXFbCVZHp7ywjASHmuSTzDoTWX5VY8V6zrKrLJ1PcntPwV4PSb51NwyE2LKA2ievW9vv3zye",
  "key21": "2wVLJi3X6w9M3D2VeN7ZZGjFVUqHHZybst2cStRgHd54nujDGpb6RJDqdaGzN8cZg4qpXSiS6TNzfiNNSaVh2TZo",
  "key22": "5mw2G2qQKxuQ7xdWAjU9DD1kjc7tHUJumrQwdwJxrff18iyLsNN6Zygn59rSUZsKqdsU8ksCCDLiS9f87vwThtrE",
  "key23": "324z6BeEPBzmPZSqJvDy5UDa7BFJoAhQ7ibL19zNh3MVwxApFKJ4iPDdvcHqGMftiEuWGha96UbnYfoBfNYGp4U6",
  "key24": "3Vf3GKjFhe7LVPkAs6DrNhKpVekSoJ4NU7mfuJ1FMXqYhnmSAgnyZwFGePEYSVDuBUSh1bSoGJ9dvrTc6QjoZEwT",
  "key25": "4QmYGJqRnFhHK76eKisBpxzAVi6Dx5evnySWDsVRhocZttt2K7A1d9JoHfGWBiFKdgQd9GU1Pk31GmpjicdHsJLf",
  "key26": "5sn6HBcg6KC5TVGnKTnyoo4XygyGDgPZnzuEbtpe2EYNhtMVT1CCqqZ7YGpLi5zAG6HUaNwMWqBwf6LzTNFUgYj3",
  "key27": "2vBB3ehY4A3neK5H6zJAAu3vc1HpJaYF3EHqYJYvMapZtwxf2zk8ZrpptVQXB1dgJimmXxMYV2QTiReVPb8v6jMY",
  "key28": "5UZptiruFPUaC7dznjZ58apgGSdCpMMY2wCeV2fMDyG5NTHvDhuS3bCQjSHem29JvZqhFXoS9ox43eui93EUpTQq",
  "key29": "267zZTWMgFJfE84j143u7EG5DadbLPCFnpDPeQs1J8Sn7Ro3TFVV413h892GgRS6FWVpsSSBzBkLAb12nn7YCtFD",
  "key30": "2JcZSJVddExzHseL7eRswSKCMaCieus7wUCrbpQGjiQnQ7Wk9KBKbEsuUwSjDqGBQvizMA3XsuDCCHL6CqaDoAMF",
  "key31": "urkEoiB5KEuhgz6P1ZobVLKNM2i4T1kA9rnfigDUcrbXk3FTmSKnGWN6Rw1Bpvix7BSccMLSjvJvzDFEWCVDs3C",
  "key32": "4qe4R3DKkV8Z3m7uRsiwfderdeZpCZRkshNoSiSx6VbrV7Nu8bwRjiezahEsgQvVSQkKf2fco3LsFJVif3h2A7qK",
  "key33": "2LCEfU2CWmngqasH1zCTerJadgiU5MAZ8fs8FWpthZEZxhBkKBksinYEBcCSteKS4PUVthyEzyWkVr1cafqfx7E8",
  "key34": "4XTxThKwbCSb5P29w425mDSLy5KJczRwcQ3GaTwMUNnac7EFMw6nJchdAWb42KKfAmVtrGAyKkmMTZR4KGnnBRei",
  "key35": "UoccrNgUkiTdxUJEH7eWgyfVqaAiXxn7zkUtmN4oXDVXfrCwceTCEfPZpmDS7TSWHZRGLVFLUG69Gx6Lp4A7rYx",
  "key36": "5mZxZetm8SmuWUKVmrg2FBN9j191JHVQ5C5jdZB8LkDk88ry4TuKp4xGXurTv9bceQ22pmeQQn4jhqTn5GHkN7Vs",
  "key37": "2bhg1Mhrj5PKVGgzkM8RdsL5gDkfswYbpMmBGChQG1B8b9hiXARH8tpTZaZJqeaK7sBvQcYQTMN6GXww5FAodUav",
  "key38": "3PsdKr3iji4ENL7tazxFqzt67dnmr1dM8japrkk3kV93yKJTniPt3UNqTFzg4guEFmijWYuRcWStfd6fGjJdt2pf",
  "key39": "4j1g4RPDWStrgJnxM91Dafi5oGgYdqW2pYZ75iCoLqiEJykEPyYfVJ2RkBYiz3qr8HLECHyAULGyYbSCgpJM2TEB",
  "key40": "63p8xw9XYCan3kr2dgJ5FjWFLScwg5Xsba7kb4NDSFBmWxFYK9CsheryV14xFWCPM5abtMZGqfBhGTCZi4Fft6Fj"
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
