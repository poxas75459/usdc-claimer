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
    "edECt9A5o4sQddJJkoxyjA3jj8vevwskDdGiW6BHeuQCeSUB2j5Tret4x9p49qH7hgWWvZMgbfv9AKZ8Uy8tUWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gTtzXni2STdNRsDrPDCp5Z9zQ6XHHGLyUpHXGGkmt5EzCTUEnX3iAjAMNzAhUhiYFAw3VCYS4zxeaNpHtJzReDm",
  "key1": "3hgmJdYMKvkuVB3YnQcbUMtbeonaMUhPU8f1wNRGKxSNcdBuUn1qEVGiZRyGTpjcN5PdB6hZD22EswCQFfxZedTQ",
  "key2": "nQH6bukWJzu6eM28Mn8or3zSbHwCRVyRpDNwenv9jvhC1rBUxXAgkbLRS81qmc65KwuNb84rupp3vgTUWYzVs5E",
  "key3": "3azrW7VNd74oMsXMVp3jhRmM8CgxzdWAXsiXRAD7riRfRhUqM4G1tWtNyQKqCC1A8LK2LnkVnyxNubenrkCVHa3E",
  "key4": "3Zmg8HUkQCuY6tQhnmBiGb5qGfYAQg8N3DusnnbAsvwgJx1r1VUzecfxaFTUA1b5bsy7BBdh6BawAUzHrh749dQq",
  "key5": "55oXDui3eocs7B4Uj68umKwDKZyeKkXq8nPMjcp2WwSgopF2qpMn1TTVvje5sTN4eW1fqzG8HURb3vbhvv7zYb92",
  "key6": "3MjKz5iP4Gh3uqsdyHAfYJATCqHCbmFxw4cXTAKRJ4TcELdFzauEsZC38dncwcijzENY3zcnNgX9qdTMfs63gyUC",
  "key7": "62Bw1nzHn4vmCE5y5VYUZLMVqeRg7K7cS53JXVBa9Moja6Yag2PDmKnHRt4PW7bXCrNPXb6BigLtNdfSqXzNrmPR",
  "key8": "4U3HgMceNZH18iA4z2zm6km7WqRFAR8gUi4mUT8iCkgEEd8nDFXdeicijVad2ZuULozL1EDvLMyR2RmdPMF7q9qG",
  "key9": "5ZGbGfDcGd9ePuerF7xTQKwbApvXsc5wVDmKTDvTCP7rEQ5aqhzrkmEN6DT36XwskCPJcuCpSX3tphtNU326GFGb",
  "key10": "3QiaGDQeP33P81KgkcLtbJZuF6Rnrc2AAgagSiLxEy6hbgWpcPWKsXPBJ8iQKbLhyWbzwWKJ7x6T47wzS8oHa1xz",
  "key11": "5vW1bKHYZpxf8qjHKZHLZBSwcfJYeDnLk6VP97F3NUtvxt6wqZn3snVRzRJ6Q64qfzzAcxKHj8zZ2i1vZPNjKLcG",
  "key12": "3SbiPbku2qjLwYsgCdP5Hw2gWUBrJRXdxcdYz879HsyyuBb9dSeoDo9hjabayebvL5Ku3nkKfEVwVCxTSXF7QTUZ",
  "key13": "ZcymQ3dkD9SMU8DN12bc872fp9EWfNGg5k6qi8MapMFvVagHkmvebeKvbvG4kximV8tJ7BWCFkTkY2hsRBwNx7m",
  "key14": "4rTyNQ69HeAcsnd6qrQMBe1ZK5vzcYwXEumfxRkvVFoBc1CWL7L3j3QXnqAnNV3HEA2eNf8mQ5LXSybbBz4ARtcx",
  "key15": "56a5dNhRhx7stRv6o2sBnASUnwrkDofGPbvtbTg7NuWugJMyB2FrweJe71TnJxm3gwirD99YyWLqbzKhQWyJj9Y9",
  "key16": "5RVDbt2i7JWNomGWYkxJMzFNHQA1hn3DtESgR9zb2Uv4xhGSujK5bJCrHsYSKmiTKMLUh4Q5BNbH5ETHMNDoQHsX",
  "key17": "HewB1uiN9tvz9JorzstryHiQCHe1JXvQHXzbKxZCmshU3eTJjEc8fge1vAhtH2Cey3FJeiE38GLhNj9j1evAw4K",
  "key18": "EAKiQvpwDAVYNGbZY4CAGoah8UuhBznppc3LGa38MRQNhh9BAxz3jKox3MwXWdvG7ocUsFVxE8V8oG8HmF9e9Sf",
  "key19": "5ME5FWdBhxqFCFrJRZNDkneR73EKfPhUAo4Ty7JCfb2d3zva65TaxbeixaZ2gHetw4HHb5D9xnZU4ktM1ZQ1Rh3q",
  "key20": "2JVsVM4QMR2VZcppjQkkabGQRcX2NRhkRpGP5neb7ap2sBPKHc1DJwXW281tnW5av53qrdAwBeQJBzoniFDmcvjb",
  "key21": "iT3LRfWFavQc4P1r379dFRw9v2wNMYeZMvawstnWsFQYLUbHWHZGN9aFUMHvyQ8s1y2BBhE9sEs8iePzoyPFg6E",
  "key22": "3DSNqQdm9bRuWD6JRU1tGJWwCvb5CLuS8FP5sDwNAzj6tpvWnSSxjwEstT3C7vJcxQn2fqdAiHWYtG17WTs658cS",
  "key23": "3qf1E1aCoK2uRd3FFmyGgrMok1MG3fCUzofyw48mVy9G2mMPq6mxKcszZma621gUtsYe5MPCRTk3xFDLNgwyg7dT",
  "key24": "22hZW4sFEbFzMDsEsuJzroBN8LHDtsforboqeDkm4PerbcKuryXMWVRiPFmf5KgdfoqF4vmcsDxkpELvv1HHFX8G",
  "key25": "2fB5LstYz51W6DD2NNvyCkmDP2efN9KSVJ94cPAkrQdo8TKtetuNey5uiGidJN8kdtFrECeDFzQBhec1d56rEHTe",
  "key26": "jnXMYjUx8VnhspGGyFH5drJRSJLTiCvGLeN8WaJGJDMRJ7Kr92TGCt8b9DMnDHKBFjFijjqMXQ1wbiKDPz3bGmu",
  "key27": "5NDXCFet39GStm7n5ENzVNrcGctNBaxiHxEan7ZVFod3gvEkvmpKgsrfW1FRDTaah3Ws5XNfWGiw5s4kXK46CVc9",
  "key28": "3QPzcEYG4S3NCMh2fd1HPo9CHjbiuASuGDaBJDF76EVW1reju6aAoqZVTpmgyyYgptffcJ1HWskYmGZr8CUzCDLU",
  "key29": "3FovkRGd4ZbHQySzhRwu8hSRJSv1yYMr9BcCxyV62vn7SBsKcukFGmqCRnx4NRd4SgND1CB1iEy676jLBo5mWNfU",
  "key30": "3Na62B4m2aWTviXDrh4nbqA8nRLg8MaWzxPPuvqE7YN1mSjVJ3ezYXRxXHBcJU4mXM7kZZDaGCDTJ8aNz1aBm9dU",
  "key31": "MrerRckrYZXHe6kZDRCKxiQeWivkuGMhi2BxoYCokPVLngikmUMSWbks15rPj4bKpMSXF98Bx3GXDFo4ireoi9w",
  "key32": "2StQa6L3cL1wvRvf9qhriz133Bk7oEw58rMB8qwyht4mKyCwJb8zovsabdfjTkX5kp6HqTe9vxTrNqkQs7sejSAY",
  "key33": "5hkBt2nFLWXUST76AtJ2hkBg7E5x4Pf8kELv89rJeFMi5mqqCxFHK7KjVLtsbrYaNFDvTLKi6yqRKKRfwQRf9VvZ",
  "key34": "3uG5KVzQ5i312RyfwMyKc7qsoG9sssnqGe5YFLKZ2vC4rcYkRQ87yDT1YpGooJtsBL2M5A4Q3YHVnqYz5HfBEj24",
  "key35": "4K5kAGh4va9TpnBre3Er7RkeqmitPzviQC97PCCqqbzTBYaNJs9pT8X8v27kKXVY8TwqmnqTCJ6TP1hCq3usiTb2",
  "key36": "5eqev2JEhtnDe4fijxzUaHJgPHvNS5eLcHCgkcYkGQR7bxwVbF3DtdEEQYLwjWN8bZgeVgsNjr7VckToHTQ84kes",
  "key37": "4hSUUrYxnjfFLnyVt9oHcgp2NKda2FiW2pyxD5MD9Mt6eKLZ6cPgbTJfcJPVtk958CvkUULQgtfhGVSZicEtxRsJ",
  "key38": "3UKo93fAWbb3UkgC2Mp6xd4MZi6qq773Fyc1rm5ozWBVZZqtUUArkrHVcxFve9mNoo22S79yVAEHQ6KFm48kyVS1",
  "key39": "2EVJ4Uup7uCCeeK8wgFw5c6qfEh9G8ipPatu5WVhY7c4D5udbUYdepZRbGE6jY7ELZexWuq5o2EfT7fYBVht49tX",
  "key40": "25oaRaixtqrgy68W147gUgPfHAWEiGALwyR5zCDirNvyayeaPHZAiYWnmXkUTnoxuSjvLVZLQbtwp1VP7Y6QykRC",
  "key41": "3awKZTW9bfMga77qrY4T2W29QT1EDr6nFALwxmw9GxmNCjjemaFzRDiKuoREAqcqw1N6W4bPYkME6eutHAhGTAb6",
  "key42": "2xP7KX7JnpCdcGdBJu4hMhMKLCep5cg2C95fYBqsLDgSfYKE1zt4DRMKKFsAAPqcCiCLePjw6dXyw9wUrNUCa4nZ",
  "key43": "3845PXjf61SbKY2aSs8HySKYhJCx3vvmfJLLJ86BPAJ6z7LowfgmqarSiqPTf4qYTSsbtyRePaj1WQxgtUy4tYF7",
  "key44": "5XP7kyDeY3Y7ELq4t6im4rKFzZFi1MpDarw1CDvcHvWEGk3cidx9i7AcbAiCEtEAKKmTSnSuY8DYmM4qGm7pUa1f",
  "key45": "27tPZB9hLqnV5S2swfk7SMVQZQzy6ZQrq1HfXnoANaseUBQxoB6bXdUYvQ8E5xSmVjA9hEK798f9tPWLMLYEWwAV",
  "key46": "39i6tg3HCxiqwJJyQER6dK72TGmDAxrhhfRYtzcmRkARRNGvrDW1XHQn7uLyn2ayG7zXrv7KCToCnJFqm2qJNqXk",
  "key47": "3cqhQaeK5CTXtEM6yScmyPGWzxHqWWjaUQQQrKao3Zf7UCUfHNHE7CCwXWMCcSFigiszpYnkPdkhYzLaDF1SkfWo"
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
