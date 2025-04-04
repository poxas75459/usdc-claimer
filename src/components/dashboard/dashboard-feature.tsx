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
    "2jnSmKEG2T3SZD9DWi5V1VyhyDTRfGzmL9EZ8F3gcmmteyHGwQf4GoXFUJ7mV1t3LcUqcpTf7LJ1oQ4HMa6HeeWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nNk84LRFXje66Nu4grUmDYJkQinUX5FFp1TjorZ2R5NicsQCZB2Xqrmeet91tM36kcwQ3HD7iWiTNXLpMJckRjF",
  "key1": "61p1N5CuJKGax2fd7NET2mdg1sV7qoaoLZ5rMwbrm6ic4RkHWh7MZkSuSRbwwPjL69uWsLc3svdotJgzavYUKtMT",
  "key2": "3Rngx8uM6nRkRUai9yyJved2U3AG5511M4WqS7KU4gofvkPFjx5vWT66J9TGbaY2rMjF5MKfPZfiC6AcicENBrWC",
  "key3": "45Vu1FDvsf5DPahcMqSQZ8Wa4U74Kbo96gnteLrZqryjPPiuaignReRdWEoo38faFJc5fs5JsNRqhizu6z6Gm83a",
  "key4": "3zg4vaqeYgUnHYECyFxERT4Lxi94yEb6W8ojHVPH6dG2RSGs7QF79KLyi7jMLeP7EvEXpMSPzpXGdXeZtC1tJqRH",
  "key5": "ykisbALJBJPxsoQg7vt5dFs2R5WTVNkYeDRghy1gVZUWq93erFcXdxsVyEEg6PbvSnhxWDCBoZRgZX367AN7Rke",
  "key6": "2kvnSman7yRVf8s4btEum9ZJXUdin23qLmrPVGKrGLqUXsmgHHBNjKvYBqR4FQ8r7qvDTzWcpfScLfWzF3oZFpic",
  "key7": "2kQU58Awqa1penepMhhhEXN7ULAQTk7Jhib9b4iyGSAunx2b2HdWutqdjGZfoPZ9hcPQiWB3vfMLLQk95L3boDBq",
  "key8": "2FEnkNWYGdae4mtra4Py5mdNGaMqDYD7wkSuGES95BE81yeNzxE1Q9yUtwu1qZ5MVW2bZkBhD6DL34aEYdVJjyhj",
  "key9": "3wfvrnnEDvvCnrMuLmqgxkjAfUcZrTpRyi5F8mnoPxDysvGDGx9qJLSpjeT9Jj6ejH6QCntheHYNsx4NAEEbNebk",
  "key10": "3CCxLRwdxnVdDdyw6arwVj4befaiZ1tHtsYbqSNTPFcrBgALRcARuqxivKsruEMtkan9ZXYKpTSizm7xhXEPGXkz",
  "key11": "3it3cD1imVgWthi1MMcU3LZHPaWXi6F2Stx8Q2uf2WL1dNFFDcMBZkWdoB8d2vve5pMA3cFpm98N4Ky1r9bw16B5",
  "key12": "vwxPKFXcqjZNLLgxKSxcQUo3pCSsmEtTRm7Ctq89kKHDcLGyTcnBARG7snZEeqDXPfRNg249dPFakHv4ueY5oHr",
  "key13": "93ezYDMK7fgk9RSke9bWRdjYfFU5K9ta8Y91bVcxJFDpnYfs8GSQEsQHuUqnbxV5xCSYUi7oYgEoykS65iJ13Dz",
  "key14": "DaXcKP8Z8RxqkLxzBQbEgt3NcM2mm9jjFpZPxReZoccX1EmUvsLYh9TFWYKbutke7KV9KcPfVzAtFTpDK77aLez",
  "key15": "5R8Qt7mqZiRYYsYrWtaeTiVSjtQStE7VmqyFSNMXyGi5UQZunRwXBctUMt7nQdFtuGhmwtoHs7XJWSgP8EU46XWH",
  "key16": "3mCRdUgKkvzskwLfjDaQnWcBKGdrhFu2ma6x6vhr85TEKppzCooXLTtRMWMU5QhTV2tK2S77dGGww1TrL7beJPbc",
  "key17": "3GavC15E8bVEzER4Ez79QAJd1zBaKdEFhcyj7csR55oRPDw8zhJjzy7QVExVjH5nGLCHsBMz17ahy5Map3EHVJ2p",
  "key18": "3ZivNcJ8S1DSXqWyj6U6pq4RBWzr87gHWdPZJuJ1iKpw3SmXPcHy8tzJfq6kNwehhN1mK9o4b2PHjpzr61FBrMs2",
  "key19": "3QiconJyrxMPzgQ555D7M8AfqMP4tHpgDeAv4ZZVhvFCh5WEuCsiTHvaK4xorivqC7QQLKrwt9iJZWwwVfPGMUuM",
  "key20": "3CNem1GYbk134mkaFHcxqeyDCZWrAnKP798GB2Aptt3PmDZYcjVY4kjjxnb66Cm8M4J1Xa9BpVJMKTPhek9zarfo",
  "key21": "E5phFqqhZ1NcDFbknwmkqqtaEMpwUMdpx7NU6zd9whX26Xsr9vt9sgDmoP6HgoqcUA5Ydw7ptjcRdEtWn83a848",
  "key22": "3BhYULxdtCew8263Tp1ryuWGd2Cj48DCypKHAzyhahKym6v1T3xARPrpserJyM8osUquiwESMYyWyZR7AiqFnHpu",
  "key23": "2GP2XTKhjKR6M9b13yFXksZaxh7ppyd8knviP5bcwrPXX51hA2KERN5QcNGAmVf5ocrTqPKN9R8BEkTnPH4aAzjK",
  "key24": "juekBmBGNMEVCCK6oJLgiebdN6XRC6feoEErJTz7Hm21aYgxc5u1BcTxKv1FHqfrW3vvGWaddbDp8tbc4mrfHVG",
  "key25": "39MoJoPbAKiavoaXmb7aGi7doPeQTZESHjkYFoFbtCNHMY75gRKiAKYv94eBysYBmvkAur4LnXWXUrjQtegdJtbh",
  "key26": "QCg38szcnsn9Vvv8Xq8hnzddpPj883qbfUncgiZ2Lt6x4K18aDRUDiT5MdhiNMbZ9hfG8qndrdynnZjkQoEyekh",
  "key27": "2gvewmGahZymWDabMLTHR9ELSanpYSez9HSM7YTZ6zzbSayYAr1gXESUPjSRV5Smp2DzM48uQ4LuQ691oigEhKVZ",
  "key28": "55J7SEvqZj5yufSqDm9zAAaxNE2ucArSqGr1Y3dfWHpWcXJQ8UCdmjxW9KPnFBiaCFKEsY1Av7zrcDTKjJdb8xHR",
  "key29": "3YhiPS7EreFJHjZJrMWh2UsCHypoGgeZomUwVCPso9Jj24vbYUjStdR53TGX5ZZ2TfbFR2qEtfLPUwqWcXej3Q6r",
  "key30": "3oSwBAcaC3LJDepWvGMDFDKnJ1frKGPbdFYzHvVc6ZGoCzbt2UUEwYpnkA3qdmBCoKxs1kZDdivoA5v1WCZttPGU",
  "key31": "4LPrd72WKRqdi11ZdLCRwnngxqh2QBJhzvt9Xm2q41VLo1vVy9fMfB1GgZiExaomqwTW6oq4WCpuTZKtWg3FsxoF",
  "key32": "4GJ1QYQoRGB2fczebbX87Tm2sREMDwD6A2bmiWaBxswLUjtvpEcENAe1mWfwT9kwiohSCozzpBZApr4jH19NHtn5",
  "key33": "kW44p26pXAyq9BVngdCyD9APf3RbuHckAmMUN2LDCqJsGXcACzzSsUpJUXsz9zhnNBQADKVDoDo2ZFSjtvCyQ4d",
  "key34": "535fSj73qXhdPezaCFm9u4YJ3KHiZzRGB15tyey6QbEGoyy6QnszXaZjtkd4sxRkM1sv3oLUG11G98rXzySiDytf",
  "key35": "4VX9KZubB6rtFrmw2UejBg85N8v24nMe1FvD9XkTHagXGkvHR2g3zRk7JvDLy3mxBkjhSToKy6XeNv9Dw9UWKJGv",
  "key36": "3JvpXrpcj48QZx93GRrqc8oqTTgZb8iAhurR7B3M1VV3Zr7z7A81hLVmui3rFDEbp32jzH85nYiiN4CdWtEVTico",
  "key37": "5tdEwnjYZ55RyiVQuzS8cfxrSG3TygbkMPXW4dfxKCs2qmtNMc5Ue7P6BHTtfiHswbmL8qQcQ3jeSDMMbWr2BtC3",
  "key38": "3ysgvL6dXGgTWQdNpyY9DwTYSkCi7KaqUyb7hJrNGWioH3Jzw9xGbA5ciiCVkRzuNxBp7XwBUQaAz1VwUzH9Aoc6",
  "key39": "3YjBMbdUVEKdDiZBAEB6F2MHnwcLvj5jf4WFEq5SCP84boJDj2J1nuoRXFoHRWVwgVnsN8ExmmTqqUSj6SfjU5Tq",
  "key40": "rkDb46sm3pkePe9bMSTWqGL2iMmaAEzQiBJkaAHkgKinsR2qWubP3ScsJU38tfbLdXiNebMXQbKVCRhphiUgB53",
  "key41": "32SkkB6eX2nzKzEyfs4V4cujHMeZpTL7Sgky23mLUUiCPXEBC39FvPrnR77iajztD4tBqBpvDcnH6L2qbYQBrjGd",
  "key42": "48EDvoMB7ZmMuke9UXaG4LMYtX3MWLKLyympxRSmCZQS4wEeaF7P4BNkR1qEyrcUFE7GBWY1QxpEq2vKUrWRGJgR",
  "key43": "3pVWTC5WfwXE19GjxncZatEP1eiC8yifGt6UqzwAdaeYx8bkonFjZ7CzyosuTJogA6MhmaGPENCRQ19DKR5A2GVp",
  "key44": "21rjvwqKbnwAdH2TGm3WAXzinriQW65bXnGAt5zt6n84DdMxvf33LvjqPfQwfpWY6HwpVtGD3myHcqSdBQ3VBs1e",
  "key45": "4YY9y3rgWzrmnPa8MZ7VoEMW7NVdxkQMQjsNu2P9yLpaPE5djmLDP4USjYWwGxT6u1jh6cHbbSTd4jUctpMQVeVp",
  "key46": "49VeCZR1253dHHYfoemfxqWsw55pJVEYGjwegfS2rYi8RLkHBRLh9TyDNbKskwwaSB2awjRNdrGyehazUSg6jJBb"
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
