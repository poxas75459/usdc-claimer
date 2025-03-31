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
    "bpqsUHFe1fCW3cJGrjmQVUy4SmsJdhKQ6XSdbT8asESaBP5WfxZrpasvfksa3fK3wx2XUHoFHLV6ctGR2FEyQxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VvRypNCtsHdntbb8HqUfPTp4hWpvqf9mZagLvx9goTvuf8ZLt3viiwW8G9bZq3fGTTZufpJKPVGn1fsP1WSTiEM",
  "key1": "3zikZ2XgcmGUbeb6gx9zutKHHXTZhYJywUinenVn4NfmaKjnPucxTDYGYSWsahRGjWsMpbctxoA4iCFHYPVDLVbT",
  "key2": "5tK1LbtzASY4KohRV62QqiSPgp38GfNQwKUBsQhJQB84LPZampBQBmPJCj2BdgF48sqSbm15Z6u7pR46DACybyQd",
  "key3": "3rW29xHE5nFtgCoBajKYcbTjkb8oovp1X9sF8cav6uowLoLhTKvBPgxAixYF3BXK7Qwun8wx2p6uJzWjyb4ywMgz",
  "key4": "5azWZUPSDaqGtcsJJCjGz6giSh3uWVpovwE6uARs2QYoDVADjScN1RT2gfyXAuQXnvKYEYyx4sa6Muut96dXAT5U",
  "key5": "ivPMA1FeLXfRnrwywVdQ3mnryDxTUVwXHfe1GG6QZ4ATu6CnkQdzCsSHQnnpirKNCd18xpFZKwZ313eCQZF7xBs",
  "key6": "2PE1XbYD3GjS5UjGPpc6ade2w84Ezxz76BBgZ7gmq5XFZJ9xck9ymGwSXrbxz9WMHuztFedQteJj9JYALGqrbXAq",
  "key7": "4HhiFd7QBFFtDjDRB4jQe4rw2tWkZxYbM9TQHvzK5YTRo42mz75F2iJjwuCNT4uW9xXwry3NzRZJFxu47Q1x4SXy",
  "key8": "2Hn1QeCvbePnc5MpcYXdFsao7R8sFd18UBK5HJGdAjdZpiBPDP7iPuDnpupuT4Dw9Vr33rw6krwQ85dXNRcbhRvX",
  "key9": "2tiz5tYgACzfCaHjdoTaCU83Av5pFb5S8YbxrXgy1ho7GYLivCtoJiVGVCUAR4TfyrD9H4PxwCJMmkeVfq6nRLXw",
  "key10": "3AAYwdPNxg3xZRFdBGJP8apRJABFFnPBDGycRAyWQFBhkmWEHU2zNXpyzwUEnbSDGRHo29tESPFoHmykRSoAErNp",
  "key11": "2dwHh84K4tYbq3MWgizB3KiyWv1jboQN2yUzr6TaXNuq7e5hg5HQ3Nw6JKzb27wehLqC1SzoL2UUbAPNzwAUEsJe",
  "key12": "4Gr15gnRCSwosGrkeTpxv9yiCoZrjj7UCgkAQKgQYBwVKMzjNST2jDwX1ahVzezUoPbxdQaLa968VBVyjwaTL9yD",
  "key13": "2DGgkzv1KymQz8bRpT1JKSfZnDyUDvJGm4KSE4vaebkczVyuppnY18ciq8BQSrzVXoaV56HQA3x8MYxuTXb4CuhQ",
  "key14": "5huJGAsqKfjfDr9fDUcHCHykgoDbmXpxjEdjyLX2kejSkBLRFU2V5E5EGEaU6G8hzy3sW5DoRDvCLRwfCHdoYWeY",
  "key15": "ZRD3mcd7EtoQkKEgpdC4fcVWRVAurLKXBqwrhv7Lurbfchzv3KsjcD4aaGjQasnHTVeLZ1Li4p7x9DptHJLorxn",
  "key16": "638gDj1mGxDj6AGKoCLbjxwkajX2YxMTHfBnvn9u1USLFBiKGq4RXiaxvNDzArHW8FBrqiiybNg5sh5Vz4cGdsQw",
  "key17": "2DYGSS3sffVXGchQiVGBr4HEbvGnyfyLJjcc2X7oPGijL7vdF9HpJ5TdkVXbd9SjVmYUQTgQYqTZAoPjQNrY6K67",
  "key18": "2kmZxswVSZWdE8gS9nXtLoaMqcHGQ3sQmoBcvFUqTbssjmBpR3g1q7EzHcUwNRrbkccvM6fSKixW2gdstRu1fm75",
  "key19": "2KK8FgGzg4J8PmKtpq3V2JwyQV2vAuKyqtiiqt8MrqKLk4MCe9jSVL9j4iPEwzBokexYVrqnN2trpKfpNNi7z5ZH",
  "key20": "5LAqTe1rxui97ntK3J5KnG8oHu1Gbx4d554RVbcWhmw6hYb3dryQ6JXa4fExx8vSKQ3CwhG6Fkqb3Qc8MBUrTvZE",
  "key21": "zKsh8MXRWjQRdNncX4WZi2MRFCHg4Vnx3fbtmPKDxDd9z1fWB2AMebAQUKR3Nj4gkYo4YXcHUJS9fj8dsWJrTP7",
  "key22": "3pTUyWk7eUrJKespQXs6v9BUDCYrPcJ3RwnS3KHFhu2v73HSQoH4j9mZAHasDeWrMgsLy1KpDKek61W2pLmMy9Cz",
  "key23": "54RhwKkJLei9kKXJvr6S7vxCNdV3yjJhEqJGnZxNLYqkV34QxHx72yFpJguDxFFKR165x5cBeJcw1t8NSy8pjEEV",
  "key24": "2hRJiWx8JV18jgLhsr9u1kxFvNdUoTyTMp17oaCTf5CzR8aqd6k9kSddb9jn4fX4Q2PY7EcLUALgeHZpYydx75nW",
  "key25": "2eBeF8pejK7jFqQwZGJFaxgkJwYGDnqGtCfFQkTW1ir1UWFqyjfYhoGkdatik54edeLjoXDvXbhjBXAxpfLGXmUG",
  "key26": "5BpkVB4Zrh1ra4rkLd2ANJomzUmqbKAqL3bs517hPXacq6tGETm4JK9wVTR5rsuhUdCEGBp3t85AXf8KLJkEmXpR",
  "key27": "mPkcicLCA5bWgUyVuRSyXFVzBQySrA55Tst94kQiRDXdiKfkfRYq5XrmyNiFmcdhvtQDKbVjNvw4obta6fG7z2D",
  "key28": "43bPU13vz1FdnRhw59EEnF5GD5QUrjywEcz4dsB7sWzSDeXwPdzenZPLws2jfryNNuf3HoD5wGteaMrhL2DgZumT",
  "key29": "paVxpXRpgrLeu5L8ujjdhmVnUBuQDjWTaD4nZGH9SX4PegLvH5y66LM5id2vetC94TGAjTE6tFSHy6j6KYup23U",
  "key30": "2L4RNtQeRNxKuDLJJoHrpv52aVFXop5gVhxmK5qUBwaWzjvFunCVNKHdCydFsSsRVqc9ZCLzTbnpxoVt8ekGtiC",
  "key31": "SU63kJYmNvfKMKsDV5vqnzdsTm4pDu8P83T2j8Hr7oV5qcuaf2zqt2VfPe3jYsCDSfWcHYCjdsnVdz4M1Y5kBVY",
  "key32": "2V5UVD5Y4UpfYAMWFWZuzkWP8ZyEKkWXvhJ868SaqBQuWB2q5Z3CVc7FwyaUweZWwagNLMhTmbrcXY3kkxJn3LbL",
  "key33": "22x8241udJN8b61CJG5WybJEvczC7intq2R7jxACAkK1hcwjWL9dTJYjKEMEFNoxLrqZ57JBfNv8i1vzg72ebDnp",
  "key34": "4dGy6bMnCL4PjwWR9YmSaPQxQdUcNaTb62g5LCvdqiyV1EhYrAtLncCW7oGKRSNsfcFtMjMd88NHX4X9YGFDSfqU",
  "key35": "2U6MF734iPYYAiFGh4uyuwRRcrV2WpANWYbdLhyT881b73VhwnQY2a8oGnwezjozPmnqZ4QX28FsrEuZKU5f43WC",
  "key36": "4m8V4sJ6suUy9jmGPqGU4JBmRiZnrepuR5cgp1gSDek148vBiMydD2tJ59zRggX5Ye1eVH9zthtvkragWepvsXZ2",
  "key37": "4dBE9CjXLmWGc37XSRae3wuGxtDRTdTtiyN3XamBNhYVBKsY4Sg9mm3WgwdSR7KpZMj8rezksFWHCb61njuXuVyY",
  "key38": "53J4aoYkQczsDS3hHsbzxaANpcE2Vz9RMSFnR17SmTBRHGNAPPKt2wNDgjPx96THbSbpwNhPske5vXe2PPVr7noT",
  "key39": "5z8p6xNNgxB51MYVZAN9Qkt7bXYsfytEfUSBVcoZWooYTyjtVErN236MsQy37kgnE6K7NKdSeXm9DqVk5FksSf37",
  "key40": "35LUMNySZkPXtqXDQLSUb5YK8c9HVpAZTWHQYEToeXxesXHfCfMcZwWZZ2x8kg3SRqVbRVCqQnna5QLZZPkBf4d9",
  "key41": "3WJyANxempbLzFxZ74H78VRvZchupvpxB8ztSeFeD8uuLFPrMmzCvTXAju5nudx5PX78wvRtzGroaNgwAQuytUb7",
  "key42": "4VGzXLb6pP6BJ658UWu8oWDK53DFimUZiimFJFjv8QwKAfi8JJzEtY7qZFUvd4ntWdVkUgPxKsQ9X3SX3z89sy1j",
  "key43": "TVzcMCXqvCZUUh5NTyQgg6hK8tNB3JFykVg7QZy1yYmBWPSNBcoE8nNQCQpq1pqpyLTS2owR7EhngwjgwavGa2c",
  "key44": "4i4C9jjQBj9TULKfH9xabfBgJfEDhNn6pkBQULymaLoBampXbGtADtdjvjKYvuzGcMdJf4bTjGpPeRyADJ4JwLg3",
  "key45": "51Fd7RYhLTvbmPmWcGCQEZwtdBQQD412rmcFQFi7CD4c81ZAmf6YYcKLppF7V4AbeiMCk2DmfVNyyNTtomwKijps",
  "key46": "3ZqD1SaRbEf17NVhPGNDx416oM6x8DRA9tbmr99R13KybLnVrSgmhY3XEekFFQM3ucRsHCykFzjKU1MPtZ5T99xV",
  "key47": "5UAyozVD1kxrmqPmHod4kCNeApSYqVfBgYF1XssCdmUDv7zTuKEMvqFBCk6KJcXXH9vnXWK4R92MCg82mTsgaQS8"
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
