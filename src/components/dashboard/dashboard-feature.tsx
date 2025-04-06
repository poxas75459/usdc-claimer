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
    "nRpqLkzhDZzP4NAEgnpyk3SNE4zLwGKfJmz8nXrhoHsZs6PWjU1DmzJRE5pCTqJNPWhJqKwzbqe7A9ZcWJ43FEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RXwhzrJyMbxwUQzkxiQtoZ6JFEBKSfURp26muCkMgejJSdHZScRoosPdU4bVEGge6Ut4DC6fBovDWthSmQcSy86",
  "key1": "42MGwEJtQunxtSEEJfHFRwjoXCBAKUfQizoz45gezgCP7Y5xgsHTwRCm5cSsabsZduK1xoi6dYQAyiNMeLbv3xGn",
  "key2": "4usUHWcDyr3ueNVnzTefHHsAmnzZtgemou7Vc7C63CK52dT9swsutBKgVNcVLxcMayDFZqvxer89kNJzp2iaWx82",
  "key3": "5rUdGXce21mUcAkxa4S9pxp4xM4VSE4qYthmpM1xY3Vdesih7hcLqXdA5LJLCseAjk6Tbup7eFsVQesWhQhjuVL5",
  "key4": "2ma9PLbkVtFzheGXQyLFSotJnRuC82vK2nekw2uewdWgP8RzCuZ2JCbuLyF9AsGf4MPba3RoL3Z8mm6JTpcDzj9h",
  "key5": "2fbMsixGoPmsYFgXjyyD7oYnEv1df1JvabEYJSgTDXoSLbtek8pqPeR43nRBXba1wmkYN5rdPyzCjkh7hU1x9gFY",
  "key6": "YxGTQ8c2oBGVArQwqGJooU17aPBqeCStNLqbNmWZbK6syXZ96z6eMXUqPBRAhYBgdXPxcPeAn2a91MUA9Y9GXYN",
  "key7": "wq4oSHQ4revUA4RLyZuzhFmgcQMUY2HBofuZLQfq4VNj1kQbHDgZuE3CCoUWGpX4mbywpob1bpdytMQWHG4K3mx",
  "key8": "2dfp8XxSTNDY5c57HgVrXN2Uv8m2xmTUdC9cisy3DAYusZsjkzvqSG9FsEZQqLoiUkREBw4RUazPM4WUZqzGQBsD",
  "key9": "4JZw9Y6m443wT8o1y9ookZviNWvfYFECY5hkmcRJu5wD2mTepo7fFJuSm1fF7Vr3NP8ReZw8JwFuYCyvXSDcLKUr",
  "key10": "4zgYbWLGiqDfTEaLocgbnbNN8EaUADh55DsxPy5jKqMKgw33Gdopqm6oZUjJnkP4XjDBd6MDLNB7y2siA9rpodiu",
  "key11": "4Xgo2qWd2RVdAWVUtAMudeVCsxGfgjLZkXfuqzUQhpb4zCCVnJKabKhP4Pp67zAUsYaM4Z3m614z9mtfDpm2hfc8",
  "key12": "2gdXQKxRUdUB6bfknDu5bQANUqWTne58kboG33kXiF3MULFvzSGqQwsZnfoUAmuUFCGYf8fKB2EzDn5a3pUcuHMn",
  "key13": "btrAJFkSowBB7d866Lsw3snyT4Z6xiS1Ch3Qs9Xx1mWCebv2C8ZWbRMY7W5iiodK62dy6cBs44LxdJGsF13H1gW",
  "key14": "44QRvDpFRRjS1AkbLM1Be44Wo4wJp3tTZL17p77izBP6sxKBLtedcrxStfHRPxbPCjSSd3ckzpvWn2pE4CodM9ef",
  "key15": "2xNz9bVjPXCf1VkWJfCeWFNZ9dSN4TC5q1FBe7fQQ4QJg2rJgfHUWbGazhsN5J8nBnNzuQexqDBoa1pkCArRbHPY",
  "key16": "3tmaCDAGsQozuEAxPENzxLSwNeBobiwtXJKMZY8zQ2Z2iiGYdsKvnwuqF4BCAWr9jKp1riXxcXkmGsziXiX1yw6W",
  "key17": "9gne3dYe815qCBqPiiRRhwRdBDyC2VFwMGefLrKp9DKANJEqEzFJ3pMhUgntLiAGc9CU5oYiYEb9de3EA6gr7aq",
  "key18": "54myNa461afeKkhtnwiby4ZXo6NLUJi5usAZBmS22ZDyKvWvS483qbdpBfsv2WCsLHA1GVC2x69TV3rfmZSQ7c9o",
  "key19": "4qx1kMPSUfYHn6CPRZHMwdpdU4MmmZouAoR3VzjDCNC4QoKEQJnpjcw7xVT8mQQzz25nAPUEs9Qyqe5QWxCp8GpQ",
  "key20": "GJVp4ruFfiZ5HCi59Z76QqMYHsknAd6EvYM5vcX2ZssE5NyAowq9Zwddp2MyVdK3btTCVmEqPNhesSLvFJAAKom",
  "key21": "SKx6prPY6QHSdMamm85YJRSRpP8Ei496gjoVX8rCrLxaDEFq2VYksrVVn9zhmibMtm8HZeoTddRzC1iCASkNwj5",
  "key22": "4XWnNcFcGRbHnpHosL86QhsmExnJzFj7cvaiDUpqurqcyrr8tFgXyRiQ1MQCEFzZVc9WeHvWkKjpbt91dwAAFEUk",
  "key23": "46uP9ZCpTzmatXQo38Jjmdbif2fjJBZAuc9KZ3a2XtAzyMupBcLEqBemVACiSwpLp96FNc2JvDzR1w5JKTS7y1T8",
  "key24": "TrJ1Efg9HEY8Hq8q75pewwDFD37M3JEppbD2V3pYzsn1AgyaDDTCFrXkvN3SrNpcAzYSCEZ7faGbzpoiabC66rV",
  "key25": "AgErcCNviUw6pwYkMSqsYVf6FnZGYc51zhdCvewD1kJ5LewmtL9ARFxUKYRcWbikELCTS1L1vCFEaAsPHMA73cY",
  "key26": "4mJppDm2nUpsWbXSy5VmLZQdy3oHHixu3ibDfTADbAbJs6GFrA5qUj2Eduux4WnxFFr1SJmTA54dVMcbyVxaoSSB",
  "key27": "5eLewTYGAc9DztPKvfiVarQy4R6yZ1WREBJy38TcsFksFDjZXWymiX1Gr4dMx2JP1a2wobAxY1GQvUATX52cVR6f",
  "key28": "5cW1HzTQ1rLuogUJx6fKUKeUdEA5LdqkfDBYe5BmYy5iqJ3ThWQ1gGW7Thj4M17bCwpP3HB8EgB7ModxDjppA2tc",
  "key29": "65zapZU3qvG8YcDmSzVRqE9pZCHL5t4dvpZbDv2xiyNqujVVpUVfsDjaQjQGAYs9i9ikTmmFY6gRBvrvZdswtA3V",
  "key30": "3MZviD71yC1CCVGyRf2JBUg4FCzsk4L5vj1GG4ABvtz3bSUx4QV4MQYCwbgX41s2dZ1oDzsV1AvBGgaM3eF4ABXv",
  "key31": "3YgvWWjX6pTAtqbZHhoXBMnCDa1Pz5cMCfvJJuxSeAxzJyZBW7F7PGd1TULbupYM2bFCcKNQhaVnqEaLoHVBYDKC",
  "key32": "mGLTk6RiTPaucvd38ey1QNXiXu9kaLt7iJG5KePbmRGrQadpbghBvHKM5xCVgA94NYxxD6j3Zfhrqt7NBv9PpR5",
  "key33": "2734KiaYxkrFxz7kwoWG5aNe7tcNYeKumQmkciZtqaJBhj3hQpUgb8oCC4d9yuhhdbz6378U5exA9yia4vN61cFS",
  "key34": "EZhaKuYXqWdTzM62ocZTZJvVzVa3AEYzupX8i3HW124nQFpxv35LRk395AunAUVDRNFEfevGhMMXoirG3K9WkNN",
  "key35": "2REqKY37neJXcbc2JJVciFYuzZfQg2QoFfgd5VCXQHpMtzCXxG3hA8xXFZtRZUrkcZrNSG2uL2bV7eSHDexsBCRG",
  "key36": "2ixB7HPF5U1h5CFJ9cGqshZZ33EnbhfeLdMaLNKvE4UYE237wdwXFqHiT53YjAZXY1WA7EMa9LgV45SmctgYUmVH",
  "key37": "tF9B2t2chteXqphzW62Se9CtjMNi8FSxZTQs5vEFw76foaPBry9XLjoY3QUQGjPipzkPvgtPrjikB3nxkRGLX79",
  "key38": "2RXyYYEMAcXf2xU4VCEMpsSEhveLUHuuCkw4phPkHM8AxpxPCBTWApkrDf3YQ7KPX2kV3JKJzUoHgiVvszoJ32Sh",
  "key39": "4bWHMLRt9apUuSMpd7ecyJn1XR6PmMHu6np8nCPUUfMMJPAsyveDtkjcdAurcpg5d2smF2ExPZYjLBFftD3Fyntv"
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
