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
    "5gpp5QDbY7yACZGSQjJZJXWuRyHvWHuACb44XkfandhSyWyv3gXxDYXWLJfektaPcR3cPEeCNSHGZaqtVZQv16YM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aaLPEkL9e9CSpwAiDd9b9VcHCgqtpf5s5paQySoiHm2xJGBUoRG8KQgK8RxwK4QrELexK4QttfL12mZRHc26dV3",
  "key1": "22rYfjMTJah5WvNFbXHkXgwYkMxEF8p6z5z7cmXDygZsYuT5m8UXfaASSqMVZFUaBaeKBdbk6GdDHrMgfPZkd5hU",
  "key2": "4vmDq7F31WeVteoQEzMBpgEWJv6xG76ukLXTEpnN87yf21Mic5vDSA9AQuyLNn5YFsz7wgWfMDVbGEX6yVCWyXQv",
  "key3": "3MuptLs5pwtUN2zckuJyyRTgR2A2kweK9BttXNHRXUkz9QkohHuxAGq6Cr1FvapZ69PLN4yqwuFS9pN5pWVuaAYY",
  "key4": "5F9v7iAC2EUedZ42cctiUC31hLiqiZaW8CTVG937wXq8aM52mEU8TF7cfdzQkreVsJmRDh5EHfekoBRBwFr7HzeL",
  "key5": "5E9ikjttzyPwDg2wTs3qmTcHbdoiuGxpWHZWfTRQCYFRYkj5tect8DQ1YFiRek8N9tSB6w7kYZGCYaU4TM7Jyysq",
  "key6": "XoSnqqddTqWpXRgDsZ6BDAHJzKYojMEf3V9n8YxSvHJFiizScwcm8oryd6pAffQz7HSQqa9BAv4iZGxejcGBsp5",
  "key7": "391SBEGiT9Dr6zeCBCFYPG5DfUQJKbCHbp24tkCpLPtZEENXcR3y7Fxdjz1JHaATkkjvTnFQQJ7sBrb85Ed67DHh",
  "key8": "2jrpZQUKvya7j1XeK2KHKysMPDgsrY952XKLaJEReq42w9WTsk1UoAmQ83HcjTjByZJ7jS8yAumQomqfJiEysTy7",
  "key9": "ja2JZhgGAv8uBz44SatpJogBVZ1J1mKuw9bD4w5h93A5G2QxNfRvcDRwxgXkihGbeeiN6Ha3t8g2fNRpqtgY8Q5",
  "key10": "5n7GuUvVQRy8H125D9rmptWjCmZDpfZfrxdJS5iZoXqt7A95J1NmTY6f6mwz2KBRgutPsrbRxjpSuPo3Uh9txXjz",
  "key11": "2N6NozASBgvsJydGyHnSSgnXbvX2ScNbVGAkiP7pQr7V8gB565bR2U91a5uRTvuTKqXZuPJggdG3uPMjTnpwbygG",
  "key12": "5i73NUmKg4aW1LaQCLxdRkZcEtX9fqMaLxZ1JQqQJfq9ZVqCTL86iiMY6AWcmqMpLoV2ncsP3xrnpxrck6mt6eJH",
  "key13": "5z88sqQ5D7X5Z4PpeS2En8Gc1W6kWY8HkvYXX7Vdi7FCLzB7BeEboGWpftBXt3EZpoyqMENKgXDuCvb9SS1N7a9a",
  "key14": "47CEfUSLKmXUkmortAPUi7kFSK7trdyaFSB9tRHrYxeE8wJkKJkChEgcp6xCoTxNTR2Zaz5NF4vXBokSAsJw5nVV",
  "key15": "2hFtUbYG1r5ZwrScNw9nFCXsCxXypHVMz1hL3enhLWZJXdT5pPy1Pa4eKG2Lq9g6s5qs3eZk8rgwT3GyTnc5AZML",
  "key16": "34h4MdDEibxLUK8J8JQ1DRgNFjDr2b7kzVDtgxmc51autq7fVhN7u1HVTasGNj21KhmcRpBkXsYa86DUgpbtano2",
  "key17": "3a8gBB899KzS7y9QQ9cwqRiZ5ZRMktp127HhhumgHGvfM7vXRS4WHiB5GBGdbM5xd11eJHfstFVS6zZW29SoN96m",
  "key18": "3q98DXCZ4w3XCpuq2Cg3ZJjVK2oq7HUKMV1MZvfKYU7EcuRgVGns2o1cDDyztLu5KB7zHX1FPDmyqpKzu1ozn7tg",
  "key19": "2ZoDoSyx8G8nQWbTKQNYkHUh5kMutsz13dH4mGWNtKSgzJgJkZcRZEThZn4RiHarz5aTqte6eBVpFSC8Tp5paLKS",
  "key20": "uR9jgveEc5Hxu8bfCu2xuzeNXjKEQUuKB44FnUxvarpZbcSprpZQGECDae3AA97AKjucCk6e93DpKtdLwt8waYG",
  "key21": "3cfM2PNZY6Cxqea2rLBkrHChDxBVauH5Z7ovVGzeu1XBNzdV46X4PaV8QtYiw7ULb7HEELxKfpSmc1vDt354PYT2",
  "key22": "3NuxxUtWipEprxfetrZWj7kLFQDxkxqqqTdmchLMmE1J2HFfCKw8TnQbZnRC2aucXDjJDBSnZjyJfVtzooTAqKic",
  "key23": "3X1yaBnE2ENawPCbXcbnYs7RdiY29RTQbuU2KecWnB8sLoSGbC31TWhxgiqtjt8so93qom8yeuSz1Z5pBS5qjEF3",
  "key24": "47xcmdKvSvk8tD7efUFyCXamo4bppCAAmggh7V1DK4VTsxCPPF4YuXYyEegPT7YVT5T5sWd29Pa4AvES2fQHNJq4",
  "key25": "5fgsjhSdXmDcWXauhQAFmvTX88QBT7Kw4SJ1KGCXtombBHmNQnUEfUVVzJPFnEcJGpdcdGCs4SUJswrxkivMcQnx",
  "key26": "49eq27DXj8dgu6bgvNvrdvR1md5DtMWygFKnEjhXC7D3FeruLQgjK27Gn9frm8AsqmsdEevnbK9AzTMMYtW8dLMs",
  "key27": "5oyAAb63nVyynvPPgfoeL7fFX1sw67iNzaW3YB29JydAp4YN91Rn8aYXorMSPXeypzy5rmA6hVJ6mhqR1mEXAMBo",
  "key28": "5e2BVWuVA9FdMcdn6tnMAfpGsy9cLAZBPTBFsATA8eAbzDwoVrpdwAVUXRPKh3WkkxxkSBRmYLRWtWnUTpk72kjM",
  "key29": "aH5NNdVMELrQdMJJt4ow79LqvsxwhmGjvvXSWPmwBA25DdvnZUFUrFwqsMgqYfcGHJ1sU4i1iiwCZyD3HtvrhYw",
  "key30": "3YV3PMqvzXthmv7TdqCZqUBoerzW8jjxnmwy4iU26TMMLRVv5MVmMjnYCjVk14TYNnVgK5SPgUzp9JrFP2t8iTSd",
  "key31": "9uat3Jb1wJegnxn4FipvzANzcAM8xw84JR9a8EA6BTuYrfRs3PjvoEC7363wHy32x8w6V9EwgYJeRopFS1bFvSD",
  "key32": "3UCGS2UCxtrKhPk8e7XNMU4ZK9jCUH3gHYBJD7ZWDB3KTaiGKDgQwvHVNG8zqxkbX43y4hHveBC8b8zhxeoZeVPd",
  "key33": "4nWHbBrYZSp2hz4h97UkeyvDXewrF8cD13ijxNc92vfxes8Zy4b2tqb8bNjBjUzR9dggpUePyz7jisR3zVyYe7Wy",
  "key34": "xsLNDGmnGDLcGV2bmkGG18pHHjqYrEGx4BbV8QQsHUt4YMwjXgnzRAWzJ65zhiNd2DsuMAraaPjE5q5ZSSGx2ty",
  "key35": "4f5SahL5xnAZruLGxnp1Fg9HxTH9dVdg1ggKDUgX7GvYpzZnAN5wbiM7RaEyBx4XsZiesBTXV4eG6k1tppwfSjt3",
  "key36": "4QfwF47ChthhbJzHZuiT5JHDVXJ5aSNCvfSqWEwy6Dgf6uGtN2douEAJqpPFAhHe1YuoqtKCb28TZeAsRKrdRkJr",
  "key37": "5wTTv42ETqQ9dCJ3mu8iiJhDhKiagYf7kedNeNX3D8tpM8xcingzaFSesz5AWgeLtSBbsgnUEziyrH9ToWGQGsTj",
  "key38": "BoKBCHjRgRhbEyKBq4moZDKssZ2u6WPAeiEmikoBkPk26HARzcgfJeTCDDUcATWRZEQPxVKZs4WchpU2f96dg5X",
  "key39": "5kf6LT4Zi2LCReZZ7Cvpy1e6NoLVgrTHqXvmL6jfgoVY4BvKDnZ1rKkjszGppwwhHSEsym7mh8C3x4sSskpNkaCC",
  "key40": "5MnzoUer8XyXTyqvLPswUmZ8F3baKy9tfvdZ8E1sjKGFKv4kDwkAootHjiome6HQ3FfrS5B2svvHeLrYZTDiWYYX",
  "key41": "Wzr9K58HNA1xqWXWY3kKSsxyKA8w5TFr4czTQQjgpEoUnbfmKA2SumpLMcXJFQSR4JkJYHWaUKhDGtEodtkB5YW",
  "key42": "4frRVzZVYRg8js7q2igs1fysohDAEtbVDzr2eb5cr2icjuAx3pyFRxMthz65mKhaieaVkgtcHS5NWmEFJAqeuNZQ",
  "key43": "5WK5rHvgLh6yTuY78zP4E88Anq7pRZ8Ke3wYNTXHv1cVC4uT6U8V44SaCoM8wrXCuzgrr9gFwmZxHN4STFKF2DRV",
  "key44": "3cqM84yC93MZ6Z9f3nBEj7HmsveoweqqxGhnPcoNfvoFZDbbqBUKTehFpac6u9L6pncfjvKVht6pzPepsQuCWSw",
  "key45": "3iXrPrRfBDMXFksrJHZWDhBNyW3yUyaLRFiFo52grrpKEdNdFzmuK9jW3BWF4yx2NFRMxZiCSEQp5iqT9f6MwYxz",
  "key46": "xDwaaY1GEbvxvczDdm2iPTz42SToTGWVC6f8nLV1Xpmo3EuMxCRbXupxwgyvK1CYZqF4Dz2snmPQ9PbmjT8GRAQ"
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
