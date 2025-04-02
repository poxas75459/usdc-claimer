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
    "54gkkyULUyavbKYwMVB5TUhW75i5EgMEskFyAzv8iUhGcLDcox5gCPsHhsmQXykCs2n5pjac77UU5LGGsqdbVZMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43HnLaYAKYKtEqwzMQwFDujaauQtvCLR2wH8GGcpHSxAAvsypKXd5bkdhDkfMRZrTh9GhuP7TaC4vFPJscTjuFaA",
  "key1": "2jhkvCDYUMt2TSvP7gHFXgFTzPvkr8fRiEMbVhbR158oUgwAXKgv5NdctAixqNzPq9nv1e4yShLpWuokQqNhNTBv",
  "key2": "V4b46f6h3GDszRJbFaNRxtNv8NXbd7FJTopFAyriww5oHiEniz1dDw8PLDSNsoyJNsTK7wa1TqnK55fq9DzvSnf",
  "key3": "3jW69fk5pKXYLTC59L2f4q4oQtfwvT3rNfJUV5kLKX66gKAcLmFsfJDyELWoR9xCKCAYaYmNcABFWE32uhvMbRpq",
  "key4": "4YktoBM3VFbqocUTiuqE2dXdaR6jE8zy1PvFA2Z7rPAksaf7oEH7Wa6mmjKr2nS2D9AcM3HkXFAL3TFi8ffS83hM",
  "key5": "43vS3aRuanuwh6meAMom8PzUVbc8g9RNfQHG9vN9Hyc3uBXGXubtWsW6nnQk881WUs8mhB6etGjco6s9u58JSYSY",
  "key6": "4YSUqhYY8oDKE2p7JxVFZ2tzszfyfX6egzccxpaVNHpswrqUP13Yy9KAPSedP5XWCr6zSQaaJKPKP6UwXLJdsruy",
  "key7": "dLHFHNTcP7BQj3BDMe8mhfRMjKAj82pY6K3XZvxvHEs6HwK4K43abyYBoi9KLirTBjPjBE2PecZumqnd7y8XkXd",
  "key8": "3oSGBsnyRx6VDn41zNioaB5yMZNBFVF5UwYpYaJeeT3VjBeecRdvDjQQu5a31DXia1oj22PNWtyasUPxvApdUyAr",
  "key9": "RjQXUBnC9qJBedUatGCLiytSGECobn6MU5oBRRZFhesxDJ2uk63X2Xi1qhPuDYK2BTuHDgm7FoyVdtaEay9if7a",
  "key10": "422uUyNTiyjLoEii3E3ac3zzuXU3PDWYfeKMt28StuLXD521RT7xKzrzg8xUJswQ3Vs7AXLBkkmmDBiY58xiNvdo",
  "key11": "3YwgLVhDvrb16UVSRPLfTGqE3SpMzE9JVXyNqiRfNdXm18Wh11dCbRLgWQPGPnbbwPMFYrSPXwL2m8H3UmYKGCFE",
  "key12": "5HKFnrLW8J5sHRfZ5XoGoGaaGKmD2DupxwkQSVZpDFXnrBXNUPGFcbjPnwwibsjVKRU1Kr2hEe488AFwHk3rj7i1",
  "key13": "5FHecjxPUcdPSeR6CvKVys1mfZA7k8hqJssBiAs3Y8uzSYikmneWaRF3sGHNDEvzJHD56E5A3yaugEATAFeKPdkv",
  "key14": "XvDiSwnZ8tLziTXaMmKPgSHgjRaTzYtuZA9Hd8ZgieQT5m8hgiQsSVxDqJZSvh4UugVpb861wbLDaCbFWkFz8Lf",
  "key15": "5SGSK2QbnEPA7i5WJ29afSXYmbYrrEmWmQmiNHVbRiEHUzVfvq9AUTj6R9yRgvaksLLrwAjRRkcTG2W9BNbHMbMu",
  "key16": "4JDLgBsKAgCSsrwCebykCkR3nxrWnrHd6JrewrHaY1ETe5Cf2FxhVGgQnoWZkUTCHY6F9GZSNCAZpaHKMrYfdJtr",
  "key17": "7Un7SJLDzF7pfLVK5sXKFFJqxWSdf42qkUpXWSPKrbWvi5FgY3p88Re53NQ6a2GGTHdkbjxtFPVg8KpPXKH4QAJ",
  "key18": "2gEH5ZvJ9oEYijkqt22c95jGLTVUh3xpKx7Z1e4sdELAM43VBfTpGAUfr36zPCujU6tUz7knXd3Ej9KLFZe5arSF",
  "key19": "3XbrtfUZdL2p55K5YJtr2ayvjFH4B8FBXdqPNyYKdZtawAZxLg5xgBPmWJgZuuya6Pku3itTcfN1HdKmfBAbXCm4",
  "key20": "2sZs7DVtnosJfNmSLwLVcLoNzeY9dTrN9XW2z2B8wNk8NgucAqQ5onvrB3PwyvNnMD9N8jsiJPxFkrLR9zAKVBw4",
  "key21": "43CJk51TuxFtFeuG8oAxoxQnQ6k9FBPmZcvt3UuoiMF9Vv1DsvQH4JJKysDrhK9URnzMVad9BKjcP2SoJNTrGswc",
  "key22": "KUznye6vF56YoWLUpfwtZYAaTrCTjTC6pipeP5YcocvxTYnGVKnQhQ5tVnKsRDhx7TWzFSRSx5qeBJfiASaQC9e",
  "key23": "3v6Ny5trzrLCbSvTAQhYv5exDqFYEDE7zXGszokx57EZwvkzvZUJezoL8DWinhDyLDoKnxJ8KdLAnjv398HxWq6W",
  "key24": "4WC5qr5PK5Mb2XZxvM5oy4igEE7fT3Jc1g9ZvvFJqpfTvrkBmS8LbXcXXiCFEUH4oT5KJChQGsszSsBSp5JSrYZo",
  "key25": "23eevup1zPHHQk2dsSRvj3SFMKF3UjRvyCsTdgcBTXUS8kdDsHfhsQTWDt8tWZvf3NpP5kKs9rHN878SEHCfruig",
  "key26": "MzCmbpME5mLAXbNS2F72zTTLKobwchU6HMagPXnMK5gftAkD4jmJMQtdaoL94Uq5foN2xsD34azwZj13AWGgNRq",
  "key27": "5yP9jmDjuAtGC8yHGvtrny3uD4hfUg8PtzFrZf8SZKjwtz8ceiit7h5hnVNFwCcqcv1Td6iYBZMPYdybD4jRbmW6",
  "key28": "4iSYeij3efYTnDNATxcPiF24DYgGCcBiiXEYTuuNfkVHi4PGsQwhLrGqz1mnKgEE4SeW7TpPt21qVybZVcaWc1MF",
  "key29": "2baoEZdu1KmVZBcjp8sZEHazyjc3qRnuQnz9wwJR7vM83fndKT9kpTabXXeb6NCFPLGGWPfThbR4SWF7CAZEDLdf",
  "key30": "sqj5AuAGa76XwwuHPdMyK9ss5fVYxCqAFMfuu7LTMsxqcXBVKonzgPXqQcRPRMh9tBM9zZKdTVT5Hnhqh8WYa3N",
  "key31": "3WH3bwM5w24uVEmKvAjwBqU2D82BWQNV6sE8PubXSdBSQ6xv8mJHUTFfYbZqpRArBEkpRN9TW51rHiNEGh9QRxK6",
  "key32": "5QMuyCxvSES4bCfER6UhwVEbrhsVbgXk5QUnUkJ8Xdy4xdfg16RWzUagat4QWmkNFeoY9Mu9SjbpjfNFjTsTT8nw",
  "key33": "9adZimMFo1E8Fv6SLgRvr8LBprRHJG7JFcWs7fCWFjwFNc1Kz18bqbpGDmZ8WBo5w2WtW2sJc1JmUqR6phsWBCv",
  "key34": "62KCpaLYSAq6ofFSfH786B8ciX8ebQBYZqkCRV6GxSUZX2CB98SgcC3SEvtUd22ACNrkgMiWa6L48uV7NTikAD4L",
  "key35": "5Ns5fLe9AWaATXjRZHeuXqzgaZxA29j5jwacmgG1wkUMXWcfnefYeah3EnJso9Dfoe73PqoRu3jXugQ5R2aNqQgb",
  "key36": "LSvrmc58764Tc6eYioKnqGjGGuCKqC4ZaSroZ7bbVPb1n1P33UZQq5pfKEohzneLXiQSDSNTsJhRFgAJ8HjaDfB",
  "key37": "4S6qsdxbwNX3ju9bPuH4gWPjAFYptsxoTTvVbXhNtnnvx8RVRhQuqyipcDytzV9acUsf51pMTnfUaR7uNdj2asEP",
  "key38": "4AhnwpJEd61beCy9x8w5w78kvUXzhv5vHVibVVqAngPryNURvEbdcY6tQ2XdcvijxSafoit8thA21fmM1eQ5wRJt",
  "key39": "3Q9Sn4Xp2niDAyzbJ3S8V2ZaDDqecByQz442f34rw6JkSu56MTC2WAJtYin8RsmPYiKzrzDnfEhgG28NLxACyVPw",
  "key40": "3zXVxSCJLouzXnnXsnWntgr2dU7qBiwmqC37T9FNaAWZ4E4MwJ8AhneQEEaqaqPvdnAxjyXUwWNo5gwFeDeTq2Yf",
  "key41": "5C48WWbTZgjiXwWUFRpB3FF6xMbZ4Lu9cJbtFm5gFHEwLX8vLGEKPb4ZoLib8aLzq1NntE9SE8A4pvBGRqZsG4EW",
  "key42": "4wwXDLYioihiT9neHpoMHUvDsk2SEiixv3GWoSLg5dQwZwKRebEe3HjTUzUEWVpFr9USpjDrBvxHPebYuPuPxJjB",
  "key43": "2o98wuLkX1KYXyENbKEUdZhTLPqSPc599NsM5Tsb4akru2WHMGns7u4vAKXXbMWbBUhGGkPsoeRNik5vdBaGi8G1",
  "key44": "2pLtQY3KGaygS4KjwFELVXwrYPfZQmAGEcUtCCS7BPYvo1hLi4XNKsCw51KnNtUbM7tcyyTDbRyEoHBZjArRKSta",
  "key45": "4Hp4ngNDryhmfZRG5QsBkxCSDja8iBB9M784aKSAABQSoTay2NbPDrenqz9CmFqWtz4nSRGq51E4uQ6nDRHwwmBM",
  "key46": "55SvbLtLK9h4dEoRhm1xh1Yfc1ye8T4o7yX4cYt93TZ6k7VvmivhwEn5bfw2B2V9wpXaGejEpkQSE9Q3DEKpppy4",
  "key47": "57QRT8QVsM7GafF5hsTc6AnzcLsVXsnrZBZf9fovdwJw9QeAiA8ccuhNQdvV6JyPjXc25kAHoaUfcjbCS9B1iY5E"
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
