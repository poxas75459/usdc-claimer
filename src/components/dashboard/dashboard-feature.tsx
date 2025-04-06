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
    "2s9VqRqbVE6vNQx3Rob2TUXvpVpk72FvTnDYg4UoMNtMo6yMicHzAsJPgq3LvhbgytiCMqEzfDW5Pvet79ZuLNHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63yP3pSqkr77KySzfUKy7MAqE4pUZhe71eXr4Q1dxob582Yb2y9PeLFLtgnH6yXnG2m5YD877pCkBiPmXJqvdHLe",
  "key1": "46wPmY4tNLS8UvgFo4cJqLqUC2nGVhte3SeeUNpZfKs7vCzqg3NmJ4wbaB1woGtdHpEwrPu5gJY7tyxzTExuzonG",
  "key2": "2WHZFrMMFvAtE2grMPukECgg6gCybVB5njxBSu94KMV9qcESRKRSyUtR95nvNB4xuaBaDdvL88jgd1ipeA5hqrQs",
  "key3": "3gT5EsVkzp45MvzjcvjHWnK3v1WNLWAAyKz9fvqq9josmtbgDcv9EginWjZQYfwmsnSJjJ2v8xNJrP7YmfQg9Y71",
  "key4": "4TsRMnLmnsQLAVcKyvsHmSL35wNVXz6hqfvZbbJWBKN4E7U1gpSvuZB4yZFHmtyuWWjhX5Y6hbY67EVzJG2cbrac",
  "key5": "1vwATSANM2NnxTde8Z5biCiTJGCM3kMVERqVSWQuBVMBG7etJpCAER2ZWowqGntide8G6ptb9ecTN1ZRLtMmZsm",
  "key6": "5DCXoeH6hibaFyeYuRARP66eQwbjtUxKrGwvvGrfEfZ6Z93n1inBBmV9bX6RLbYVyuQmctJvikQKnkzpkUVgaKR5",
  "key7": "3yp7otbaFsvhe6WJdoLseeBwZ8SP932E8sfGpriErgHg8td3yLeYBbpD99vfEKU6D1PNG7U4ppGAow41UAWt7Ey5",
  "key8": "4vkqRrmShRxFacMvvDhJr2mZWaXK2MFV1BFb2b2euaWUUaiKg6LP7mGTfoap9cptRPdN1DjuxdvXyaKrVLksCsxe",
  "key9": "TTCtu5UMjft2d9xUtwMhstBa4mcMjEFDBKYKA8yBAqLvHp6GV5QghtGmpaU5pPnhz3qE5a5zpz5FjQD6Zje51bt",
  "key10": "2RvD6LN2bbABVPyrPiVWJ8NySCKSdfX4mkFHTVeNE6FJk3zEt3gD53NGWq671uch95KfFSpkSFXXxNTJXgNH3dB6",
  "key11": "5yssHRFxdSkRaLrVXYApSMP78uWdgJbFtTV9ccRkVBKTkDA5NcdcuW1JLcYW6ikc7hetiWXmR7m4J8tfLTmUy94k",
  "key12": "2vQacGThymxaPjdnKuBFPc2QX7SPspEsiH1SSrFSftDwGfkXGir1nBbYDUMWQDJT4ThbLNxpbE7kA6ZmB6ssvoPh",
  "key13": "3A4ig7o51Rom6kdckpMTJ8DysuDaLk9aG1aLGsmqisKxNd2CBb3qwTGP36Jg8HLNkkreoQSy8T5bd5H5vWA57YmM",
  "key14": "4WqHiv37c5QCeMRrThy2RVfSx6i9feQ9kQAi6Lxvag2TBFKMVpMd3MJdoSsjZqM6aBpkxbeFx3miKEpcDjR7Mhgw",
  "key15": "525ecdSpQUCBZ3dwPNWRbVWLyBmE8rBZTEGHZy3iajvgzzS7DfqvYug4Kj6Gowacuq5d7CdkWRwEQmik1RiCEHXa",
  "key16": "nESPvCBFKf6VfytVjVNQcgZUcbrL6upX2YLqzvSuMBRTo4uKjHHYEN1XNk2YkERc9rFM2inrMZo5kyM6G8uAKqE",
  "key17": "4iRz9oHRLqdYR7KvZWFTwsNMF6H4aeKY9dr2X7WshmHGPh4hV64VF5ApDdVAMyQoCXbb31HhVkQnDFNi3XnQwEhf",
  "key18": "5RZPDxAEneADKxzH87vbrCpotibwSaeYwF945wJrVqUGAR1683yk15hir4rr72eeFJYhiLZY149bGWUSERmKbGpj",
  "key19": "4xF6TcfR8YoiCreTPhCiQBi3jWbuodBio7DFn9TaqpDhqmgBLWB2BpQcn2fNvUr9NrT32fCoVLqNorx8quEaUMqz",
  "key20": "58H78KbLWeYJnixSnXEBBsgJRhMhgcXmh9hJXWPrwzsVS2c2gmWnmXVmKGSRxhZ3EK6ERos4ATbXGZcuC9Zq1ZWd",
  "key21": "2bBK5BDMuPc1jBmTzTdPKaFF1CK4zzF7gRansYRgGDSiCocuJUt91LiJz3eBMrLCYrPCqw8NDqwTV8q21ddW2tt",
  "key22": "o68doPc91dH4WiSvyqSY6VNdbXk1ZY1Fe14dtWj8foeQZ8SuwkLXFTKkKqdfCTvEztqgTqMgEW8WzCbBEevTqho",
  "key23": "ShtxVqpJBpHJmk6Ukd1sUntnzLgj1ZA6LWMJuiba6WNzC9c1cSMLwLNhB8i4YjLFucEVWgfR6nHAS3GjtZhXDoi",
  "key24": "5wN7aAZr5gyxSeAbni1id4QuhLhgS5pW2spAMpgVvRGM62r7qSkv2ThqzqsgARDq3Djg3m6eLRRgjh3BgxTszuvR",
  "key25": "3dhM6wVtG89B3Zx1vkb8ptPVH1rz7zizVjREqd7PWmrr1ycK39Ehqsk8KdvshHB7LdAxboc6yhJ2vNqjt7hsKpVd",
  "key26": "2yxwRiboSP47Ce7FXShzQKjLd5uXd6c1uk8iCawT3voibpDikKS3SYfcPuW8M4XTN6jte8QeCs6gzwMSipLS3J7m",
  "key27": "uFKie89ytSSAw85s9URBXahvcdRkXWL4bXSvpCE3hnSSyhzYptDYpV8iYvBFQuaoxuDN9j5Y1gX19p2xwNAFCSn",
  "key28": "3wEJSHyHae5AJZU5LLxsqEAJFQViRLM86k52KUU6A9nrhX7E2s7LLDT99zXfSP4KqYiPhj8JspJss7vpjSbr2FKM",
  "key29": "591SG8s2MLGZqQCTCGPG3b8YiHoNZHna8fKfV6zRGxs9DZ766y3HZCwK3fX2otJHccqP2zJu78tU3NA2LhwSuUvg",
  "key30": "2tiGcUvgnxoYqmJBsdn7AVCxsG435e1PghXU1fZ1b1P5b7iiaX6RSDTuaDmf3nECbJnoecBj7xZuoDmAtFTdUWsn",
  "key31": "47hHTG27J6MeHQ8DLYkeBnQeBmoHhBsQtvnjNoQ5s3AAGhCTPeXmz4assfCzr142dJqnStwoEUGj4Vvf3DyaBcUg",
  "key32": "3xnTxAYaSKQbvB9dEhsjsCPmzv9VyjaCRAAsCGDhdAPTAFvExCzaSf5a9orPkHMZvMjoJsjWEbygu7rYF2a3heah",
  "key33": "54EEwF8nYSy8g3uFTwcadGzcSZbbL9CW3xA5T8U3vELWcF9yVhX5igyGmZz95ukvmLKPc9sWFRSuuYgWHoKeEvZU",
  "key34": "43k5w8wvGJPg6t1Wp3XuxeqX1dopSEeFktZyg9JebPJLu38mTN97aQQ1H1Lh6epyHV1uX7pq9YG4d8UCup6ud1zv",
  "key35": "UQ1NJvWWg5QsSzrEJrv2n8c1amHHJKzvkPKKquZ71NjKSZCtsXaV3QoJ951pRKv3nqYuVnpRgcBKsa5jQqinYi8",
  "key36": "5ReQbYhHLUgF6B5MDncHxzweheCX3Pnds6HnXxXgwt6FYpb82fkkMFB8orGCBLKQfNrAWC3LntKPgrg7qhaqJLYA",
  "key37": "3AnJNDNs2dt8BTxQt7GuKz7KsnH6d1jh3SUKfjDJA1cWV7BqohUthEGL3ZkZgQaj8az9vjp7mQdWv8X7AxycV7ed",
  "key38": "5guvkoz2Urt96k64tFVcMS3ogS28fDqnQgpSb5YNf6AWH4GjrvWAtGGZ1Yn7fpDkhEafn6Cd4S7k7B6997VRXag2",
  "key39": "5nhoeDHrfXBgiqqi4sobnPqeuQgNM1qK7Lj2mycnfsBM6ENf3U3qdtzfyffAhTmESVWcLANjsPtjhAf3hA8YMb6a",
  "key40": "4jEC2U5Ybd1dhCSYgme89czKZMYGzQcH8z1iyq9sJ5yu8wyqy6EZrmL1rrxsMdrrDRb7ToQeP1U6iZ21WhcL4bTv",
  "key41": "t3qd7RMBzhrisEKxiqKJFHCnUZADaRBoo3Zha61xLrpcgKSupe82Jr5atjzsygdDGXQt8TN8NsxXeBUiCiHvACR",
  "key42": "5poqhYTcMhVX5hu3S1Q97Vd5PVUfgm5KoQP4dkp5KUrxidMuyxsCXMqDLEqowTZZUMeBJP2pdtGNGVRomd9uyrm9",
  "key43": "VMrFA89cZwa7HakZGXJJ4oBeGBqAYpeSYmesAvD4nnu7XgZkuYEsy8Vnh9LSm6vZKTMDoBWynZP7n8Ts14MTnwm",
  "key44": "4Vez8EFudt1oDpZNFMeXj287Nh853GGMomveuhHSRP66oDh5Sn4hKQUBSJbXTYXhdoGVGyR6ujN1h3Dr9iiqHkMZ",
  "key45": "63QQuSJ2gUBDinQVsJHSAVekK3jZhg1dE6VgPKh9T8LvDQaGe5C8sjQ9PVX8cUSH6Z7DgmYyVNo6cEt5d3u9TgVc",
  "key46": "TMGFUyn7zyDZKqJY7AGpFwChCJ7zBaC3BDAWDTcz96CVGehumPNksesByCRqTfJobyNo7DXNBSBHmaL7yFthYwP",
  "key47": "3zSuFZRncf7ToV1h85BtTRCiVtgVDYUSdyE6iMzRZN3WSCiHDmeNbZV4SMFwZuhUk6dJpGTXeqWf9yiwxpx72hhM"
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
