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
    "4f4ZPteDDe7L4cA5HMdtaziwfJaDF79RCMNucahfvM4vUq2GVyW77N4xEuE9gduHwMa4LkyYMpMmXnNcqLuYo7S2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rw7yoL9k4VagmzJsKcEBPDaYqHSgMq3bEUzXxJDtrQTk47L7noFtcWKVyXwZAHmaJ6sz6oGKmjox2awHSpGD9HC",
  "key1": "2R5u9EKusxfycBXNKLbtFoS1NCxgdYnbJBL4ckrWAzeCitv8KeVnMSf2abo5gNLa6w57euKsrRt51THSjE8hz9Ck",
  "key2": "5rb9iFwpSWtU9EG1rsh2Bv7ceKXR4PzWcLR9U21hWM6BzstMfPWFoCU43BjDLPuqgKgk2eDsAZ5aY3dk6gs42zJJ",
  "key3": "5ZCR7q4ZSK2Maw9ePtA4XBKwJzq1CSK1cqj9Zj7eCqThbEJNi4abphRqoggHRaVRWMVmHnf8N6At4zgQUrDdCewL",
  "key4": "3zx2WuDREBKKxgGV85dVUaHiVcj2CZaTCUAut1KY27bebDsAovrdVKD7KPbcPkUu2HSW4TvERJDXseQqEMwoH87G",
  "key5": "32bNHoKfKTsMRN1kHWagRPTiwg6NFhKKy4gRe65skTZJjzoNWPAmyEc8mt3ZG4ZRTPi1a5LLRxWh4adE3LDTh6Xb",
  "key6": "3a7fw2P38rUrCK6S47eo39cckerchha8ZQW5daheaRhfqkzAv12LWg3XpiK3KRnpQEVuc8Br8Ji9pvLQfJcKYujX",
  "key7": "5oSkwbW1bgt8J52srbWNypHBC39ogy9cd4kcAvcRThK2fU4mXvkxRqFfUZeTsZQGERo2kaKR5dhMwZq8tUwF2hBh",
  "key8": "25wsrrLUqhJi3BBrvMdUyemWVeX4VXSVGnpNDkrp6yJ2wLyYDY9xVcHX79VNuEc4Fepavqi2Q7bTWTDViJH1yVjB",
  "key9": "2N7T8iHnGE9mtyni6aTAB4FfZwM1y9zhNnNzczL19qLSsh7XYB8fK746mz9ehF2u9gqXH6SrDYzxGzSfKMC2sDaK",
  "key10": "GCMy4WfLbBvH4Nr5AavJZz4rm8qW3g3oePRnbFDXXdvDiL9Hwp4cmnsSRAMpJ7h1881PKfV9EE8Nx1HkuFWQ2Le",
  "key11": "yvCoJhLZ1nwiunbncDR22br5aWXfC8As5j1Pg8MBPEc5xjRoBVgHk9TApXPg2XwhkU4XgwSkFRBAPC9kTD6wkU9",
  "key12": "3JodGHevz18jB1AstgRwhgrSj9jwP7RTHERMq5n7VsFgfKz8DgXD37N7KXQ2wA8j6oQXkY4Bi459VvDtR6exwTKK",
  "key13": "RfBR6izVJSFv1Z43DguJdvHhphRBeNyaPeFgJnRGHGnxU8omLTu7tSNCkjz1BsqexPUD21GiovACJsoNM8pVRUV",
  "key14": "5sTQeSCKiVuusPNEkPAZtDewaTRHhBZmFwfnPWHZ1r5jj5X44qwWA5aioARRLkgD4BtQW5yiirYcCwmLZn2fDRsj",
  "key15": "2KXaLahzoaR7eicg3sEAwwTFBgHWYBVF5Dv7qUsULcAdFHGcyGGjNnFw72MoWux5GNwD71E1YQiZPPuDbQFM8R5Q",
  "key16": "4XrgRzmN4DHMivyNFxJV2ZH8HLDbNuVA4ND9s3S9hC2bMpCF2DTHAGdoRsJVF8pELTQW1ePS3VKdLymtux5m2WeX",
  "key17": "3WiYv7u5FQjShURNhRRLwfmZkMEEpsR6x7zezyUJYuEL5cEGprxS5TidZmZzug1UXJqbqwAP3CJuphkgmVXo2Age",
  "key18": "3GJvqBMZzybhDbFQ6thBqaxp9gLiSVwhTYvP59cU3CGrT1qvQmZiWCMgQcandnJdMtWKxyEbZFtLdeTjEaorZdKx",
  "key19": "b35RwFzVt8EadWseHw7BLWophPsw1BUjksXnDvhPDoeSZ16eXsWUaBvrjGrWP4QfDL8dtSG4Y32MEtrK7viMXqb",
  "key20": "69Z22k6moUXBkx2CqBc214kCtsUdStaP6cFE8bqKRem4AovHC3a3ekvq5pQiVo6uCYkfMa64znipFvHS3Vtk1s5",
  "key21": "4Dy44MFYncNGvFs9cCw1keMCWfPBPpQbtXEm8svTmgKtG8HVp7uoxEGTjjKQXzY3zwEpkYSriUo1pxjnaQXunJwy",
  "key22": "52tdL9BPFYgwXYLdDdymDFNYwZrFmsrPc5VdwSHCvLxansgfV2eBFHmVFWA41ZAwQhkZxF1diVJCz7aDS7h9rbyf",
  "key23": "7QpaQc1nuU2tKNetYjHobxcauHc1s5RGMZ4fykmwFsUhqZhChSupbLVjEorS9s6c9fDAyTZKbHGNKV4hkFghWxm",
  "key24": "3bqAnohrWm7m5ooNkiCdHV8ZNPFs6hhC2ZgW4n711KZzyWfkLbhiqQTDb5i6Lzm5aBVsMM1uB7qt2eR1ARgSALep",
  "key25": "4xfnVLjtqE5fUwxZb8dHyXEfseCBf4n51htuSfk6Gv3ByPTf1WMUcZaHBmB7rPPaabXZvmUEEzT3TVNA77qj77M2",
  "key26": "4nuGg14DevZa21C2awvVkP8jjn1Q8Z5LaF1TRja1rNSJxtB2ngsPQR8MLNs7ULD4dSJAwcRYqga1wkPQD7UbsGnA",
  "key27": "5XCjLRbyCvcW9ox7CMTrQCa964JqLg9YJwUQk8Pi135KwZdfEuxsD1j1bCV1uKjnBV2iArFM3pnHw3cxszZvBP7Q",
  "key28": "3X7V6GLaPJiZSH7dz4qX89Lv2oCps4JS2oUrC496mRmDKm7CMj3cyzrc5AfSXa6SFGUg7a4QHJDdASbWeteGEVum",
  "key29": "5FQU4EzrW3exBw4i1uAcFJZyUai5ogos8usDuTC1MXZ5sVe3xhMJphHHZawuCFkPnWucW8ZKvchzZNqv1Sj6aEfP",
  "key30": "v41BGSAKPanSsWoaTom6fcEHv7iJkLdB16eBwVP6DVSxmBRfRg8yMDbjEsFpADtg44gCLLQY6msnNy1c3j1Ci6e",
  "key31": "4rhihLGYkU4ud7qYT3QUbcWJ4PJyMKEms7fmNRVCmc2qJM6RoteuwruHHRuknoseikgM4kHdYYZgzCF5WBh8vQQx",
  "key32": "2uSc3fuEtUBbciDT6NRNCs8Rdo2a5CWDPvP8Q5jAxnnhjXRbT7ZxPcJWETRc4XWgExjtvwtJtZdLKfj2rkqdX9Z2",
  "key33": "5krDS88FhfUVuXvvxfgNfTrYJZfxGFPppKtdyFzLn8KpnidkyTXmEapjKrgsE7HMjGtEuU6YkPMgr85mGEgbri3q",
  "key34": "5L5k2zz2jVew3bJzi4xj2Ng1v4AybA2yDw3EBd14XTDW5UHEjQ9y96Fj48BjfRE1bHAQ9W7bMu1JQzWUZ75gYWh",
  "key35": "4DRD9RsW23mahEszcadQ3ShdXWuGPkv3KM2eDauTUuQYXiCGrkCdiaAbjRrTpdTKzSWHVfSfg9werRVrRdKBn77u",
  "key36": "2JkVQfvqNGsH4gK2xvdxEVdcypgZJSPDuSEd3jX9tB5e6NTMikQMY8YSvpCQzEYmPEW9WrNkMLJ6MfoTakDqEZVk"
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
