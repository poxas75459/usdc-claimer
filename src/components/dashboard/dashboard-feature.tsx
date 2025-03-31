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
    "3nBwww3wVq6rmgLgzJCtisdBRwyaYY2xPLgZVnuPFT4PYN91F5tHATnsTduxH89utQb7rhbZqPJSb89qDtWgEXC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F1MBwp4kxjrxbNsEJdHiG5uamakCsyeccYEh5D9t4dpJumzommcuyVZN82YwLJPbQeaCn7WmfsmarDx4rGrBHAo",
  "key1": "3Ww9pKVFynvWUbNLmPcNxvD69uUosqN3XVRAyFvtEHnKnM9PP7widS4mJpBgfCC1NYQiFkQqBrrBLfNntNxSNpju",
  "key2": "3YFEr5bHmZCPpxtE9b3evdGhB2FCAbC5Dr8ZJ7t1fChjr7DHeT6hTNdu3TqEmu455RuiPGbHESkML5Pij8b6hE9N",
  "key3": "5vB1BebjYHQsZPBJftCJhraXi9wYEa4BKg8F9N2upLfGaANGPzAz2MvU8qVQb2JZxi7ztSD3yntXLCFLuYWQux1d",
  "key4": "3Epe788UpSWsryewE7AQHsuhLhAVHthcSVYk4UGfYbThbF1Kg422gUyrbw8mamrMb8i2Zjjc5eu1Liq9PZtGSsoc",
  "key5": "3geJ1LULmFKS6B4tmcoHbEX6iiXwnp1hd4zMk6GAEbZwqFyczoj6aLEYcufy9WF47Tj7qLfxagGEFAWRSSG1sYgs",
  "key6": "29nop6AnDzAWyr2g3auZVCfYxne3k6tjs7dCgAo7i8aHUu2CHvDzjBYcPsoJ3D2YYLVs2h8UdXnBxuL4tnWRUAYz",
  "key7": "3W8p8PGQvdopPhXWF7BL8wJG8eFuiAteCc2wrY88QhybWTc1iQJNWHCeNwP1f2uN925MYsN9AHMFqFP867nU2eg2",
  "key8": "5mHyfA311CEMzKpdVicwnp7erLZiX5k7n8euoRCDw1Uj9BpPktYk6XBcVPb1ejbh7ExFURpBB1QPyY6Q7MVin2vh",
  "key9": "5PBnvg7eH1gEwWkV9Rs6FBNHKSP6GvUrZr3xVd8KvMt8nXV5eqBmSCS7RyMGUAho1TCHZd8WiuMdPrYi8PhxVi5J",
  "key10": "F4XSsrVqvS3S7xmpC51Ri6Boiauhv5wHko5NCuwDcHERrGDiqXGmaa1EMm3GYAPAxvRc8SHq78rnPHK5wHENzPH",
  "key11": "5Bt33VhcQVCqUb3oFBEw7aS2DkvjzrG2Ub4vCkN6DuV6goCEYi6QPbjnkjnH62QnZ3VqwmnvtoXLUffqvNNN4e12",
  "key12": "AvtH7Szh3xzU3t2S9FE1fmPXQM5mnTMr9aanPx6NuPcH2WnTUof5Zbh6SSjURKEFPg1M8tzQdFUtUynH2HNM5Hr",
  "key13": "35BKKrUKUVLdPMdzJx8p3pXmm7uKCcT2ZgK6fEUHPoEh86gSbUUcSoTQW79pRhKc7wenDe4JFraMCPgpfz5BwQCp",
  "key14": "3pGsinVHKzxp6b6b6UVuKdiSrcmHbh2DkHF9HJ1Sp48KdBRCWfuRQJFffrd6hCsoWhiW4dJvtZGhY4JbsgZ6LT3d",
  "key15": "2Rr7Y9hHXgiaWB9DsP5v7JeFhAxHQM76erH4wVmRKVZVZdFGyteUDyb6qnfaP5fqnKzsAzmRp88T54dKKkuQPZ7K",
  "key16": "3NeA3bNPCogexPVLwnnX3u9STvnTkJWhf6B5MQp9FKkc5JUcYESdVX5EiKSvLSkv4DiLLK1gP7d1XzjvQiBgKkbL",
  "key17": "4UEqZrRsGt1c3vX9aboXyx3buBvUFyLfhs2JcDbxj1kLm2jNTobuf4krjPhi1rkZWFmtayuHEAQPkeyZUJcdFUjN",
  "key18": "33ss95MFpvyQGSmh4ojfQNg9jea7Bb6iytK8J9qwNe1cfQMsBZB4DxrnPXLA4ZCvu9QwadcGiKirKToFQQmHb9rx",
  "key19": "4YF99igntL1CVfoEN1Qp2x1JY7nVCCXEERDziv7KMJDWwhkGi4pCQTzoUyHVjJVabQirrBvNdiu79EJ6CYTYpgoC",
  "key20": "3Ejoof8DktYB37JtAM7HkyGDqxJGyhEZNqVX8c4crTxbZm6bAuRDsJAaNx1PoZGbr2W3EbW8bxs44pRdBkJDPDpB",
  "key21": "2bhvhCj18HhXKNruFTFpGnEH3n3yZPaZYKrWbH9rz8WLchQNkvUHVh9e1kZJ2jnNUHn6u1SbsvABX8H8KHLXniwH",
  "key22": "2KPQzpcKEWgTr7entcNd2nAVT6vyoNi7Bm3VHG7othkK4yL39j8RWbZNip7yQdjqe3zmgBAgXEyugk7oneQTNysk",
  "key23": "3BvcLFvTDXNrmXGGc87AUJTCvrNAj98ruSjEvWsXMr7a3VwwLbzXnjkxtMppY6rTZnV5CJejxeBweppQwA8WhG35",
  "key24": "2kBCT49X8Tyo3Lx26MU1FwgWbBLHUG4mk2EDCjAeiqFxvgFNEZPkFANd3zuRwpMUVPKsJjvdJW6s175EtgUjC9zJ",
  "key25": "mFyvL5UokLBeA7KNmZGjmsMzZCUyHDfQFvAQ6CSzhs39UK61affyxk5dyVkEaV38Ln2Ju9JGfytjcFnP85XNo3A",
  "key26": "66zeDBDVkoQnxFcQttWKCm9NytGmxRVeoVjqyVG3mc6FRiypdruWdfp5rdNiVeZo8GihygWM9kY1R2Qro3rGNTk9",
  "key27": "5dD8H2Qi6YbFRf29njXFaKq8Jpbo3BqBBRZQVvSKUkpoLJ51Rmxptoi8PthJhiG5GVzqJTuJV2nyDr52o1FvK1oY",
  "key28": "edue5jG69ubYYdHYLHbMtpXVjAJnveZPsxC4KUALkaee2bkZkFamvxNzmFTqbjWrRUQa1DytZf6tamTt4mk7j29",
  "key29": "4V786jDQshzoe7AZ2d9WT4ZzLxMrm2PnwMabUeLDFkqvz3yJYZTHopoiU5SLGH6CK4ppB51Aeo9d66bSXY73Z65P",
  "key30": "4PGBBXCBGSJ2gMxPT87PNNvDDbFgqWkz37TVnKoKTB93pGhgaSxdhvh8zx1J7Dg3X7mshVYC7oPgYLNcq8i8iRtR",
  "key31": "5PsFnKGdWZponTXaxAQcz4uAnE5gkMwMjZYeBHgZTjR3MvEpLnA2YBRoT9QqwbRbdXUY39tKaHeRttBucAVyGhJh",
  "key32": "5oh5wd1VPB8Fx5AcE49bAR4x1wa3rib9c7hiGEgCCbYV744gpTT7F3U8E8kLYfZ8ru9vD7AEtXH1U27g68ArTec9",
  "key33": "2QrqJutTMDRgDYmAaGWnWVUWmMbokkub9aJWy8Zmup8vx1WbWNgGRmx4kEwjMZjtAtMSzReNpAgWYoaL6YB4EzRK",
  "key34": "7KJj6QhRjswPmMJavNXzjTKPkqCD4gdoBLcqyExPi33P8qiZZyBt6q7t9QJMcMPLC9V5cm1XLLWzaWDJp48BsjN",
  "key35": "5dTiKeyF9RbqDwxe4L6KQxTUKAFnYkzpCuP6qugHxnXLZhxVb7JmS2j6uE8BWFM6mXWQMUJ81PJbHTjAsefVPRUq",
  "key36": "3WyWbdmcT1xQtsBqE1tMGVcRMDaae4futy7zKsWZwaQkEudsWw6nEo6pZzChHnVRGt4Bm8VS79FBnLW1xnN6rK3t",
  "key37": "ZyugB6aCiPjVXdzwGgVpt9t1D3pWZyJ5E1dTd3BEWF1FfHxdXUdy78ssQNbPXSkxLUnfjMkAjZDzt3MUspnZMej",
  "key38": "5WPaY1JeM1fMBHtHa4M6keMLLNVTUSe2YFi7rhhbR2P4puCduaajue6zCiRFMGwSwG38qhaVvenFgNz6Cf6pU872",
  "key39": "5uYS4iLziam2J4tQU291vy5VZNPmJauvEroNNdHepSHnvxfaJqmdUQzZ8cLgp8WNRzXFF9E5Fyc4NdXnKxW35Jz8",
  "key40": "2oVpfyafC3dRYGE3radcXxEM8E4gFhnmsdXHXx4LbxUXnNs1nc1AijnTpHZituReUA521WHhdoWHtjX6q5HKk8Mf",
  "key41": "3TptT8vpjk9JPyopP9XTdxtgaTDKKcAJbWw3Mc6cuX8f8dPc9gqnWUAY5eNeRyPZWM3XJBLenospP7gi4BzZ9zHw",
  "key42": "6xv255kC6Bn8KZemnxx3gpJ4runwNNvYqWJT9HHxxT7uwdbKxPcwN4ZRenTujxgiLDqsicv4jRw78ps72LShWND",
  "key43": "2mznQcjaY1fiWyxRFnKMhaMSawiMRh9L6Kx1EoVbPmRxoVA6vz2tKzdYUR4gSckeP1bVxPowC5iJrm36SSregK8L"
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
