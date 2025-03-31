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
    "g83YuPqpMomTDQ3zcSQSCFJNf8WPysMKPoVwesvfwKC1m1cectPdnCFJ1QVXpENaW5HGj5XMrVXZrFyPD3ETeAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aZQfc1yVZWFuoJoRPHfkrorXtohHG8SGxQTamtvJGkjttWkjP1uLJBrPWdH8Jxobt4id2FLrTr4wmuexAc7HAx",
  "key1": "1fKmdiJeV8gnsEufYtEYjhJFUcTk3ejkGWxPFhPHxjxx7YUZnJyjSPNe79B9EmL6XdQcXCpE8tdUjxsTvt8X1ne",
  "key2": "2pvGCGQPKvvBdSyBaqoDAVTBLm6Gmjfa1AUUuwsyrFoPT8kAE1tF21UDR2ZBut3xbvxh68wF4t8MFytRKPcgW64u",
  "key3": "4WRmu5Fv34P5JoFfWtv8TCsREQhq6z3jYiVE1BaZgXnAHUnhv65sRu6VHL59187yLnPUHdVi1xGFgDpDwPBoTvRZ",
  "key4": "4wXqN8BchLQRBkJNn4gBVD9BGjnrVx75aPjG3VxGxb3WxWGXYCijYciRYLGAtbafAZZx1cLi9R2PnviVY9vYgu6h",
  "key5": "2ZiAFKEBAjXFyWputjJfScSpzBGe41xqBJtHtTSStkoSCXfxfbB6aByF5q4sAkDiJfgEXhCaGWbFWxkPttcvAv8y",
  "key6": "4nhNavYjAD3cPquNAhtg9fnE8CGDCYfnLvxEDaiAdubPzWKiWrJ1kmfu543PtbqPXD3QYynLu1bJHkGH5Dv2nDSx",
  "key7": "d5kzDBT8LHCZbrGTUUM2nK5EZNFmquifqiGkFvYs2iDHfKsov9SuDA8xjTx1Z7RqYjTJgvVB9tdHAdAg9UBQvj9",
  "key8": "4Assq2GqfcP49xyoQARGJ5ec8rAz9D1dxe5bgghQsXLtP8LijpqCViq4RFx45rxsDmEpJ4xhur8tAXYRiF8RAyvT",
  "key9": "2t4TQHtgB3VbXz2rFwb9F9SWUW1rWwW4uFMqMPNamLRaTuDo7GycnXeXsFwYjhukAdnKpE3vQW5f8KCYEoUzqHTY",
  "key10": "KzaoZn9ThAcnAESRWpRvcAn96WkfcYTcZWL155vWTKByUXBuqtntt1BYecMiuvbu9AE2PnGcmd9yspw1fXrkBEW",
  "key11": "2cpMVmM3eo89PgwaKyv5x96sAvTSUXUnccrjbF4tfaPFAZHvpi992KZQDZAdTK3WVAeRe1ZRJBVXikFpomUgTDGB",
  "key12": "4bavgVrzn3p47cyc3Ns9bvzmZJ5muZqYBq8294sV7QYCjor3ZErdF16BsSfw8cnRsmeC54au63BQWWZrutMUA9Xd",
  "key13": "4C6nS2ZnGeNvUjVbJZZUWsTPxDNcaknZCuD9qqsFp2KRdVVXvp1vV4BThG8bptpzRLZt6sS7yQL7QEcmWZFc2x6t",
  "key14": "4MLfNM3y2eXjHKQmNGhrpJ8ueuhLJy9VvGSeYJ9Xz2x9NyAGE3vgkoneY9nfFNG2o6piZmqWi3pVb2weCNcbDiCy",
  "key15": "63Zj8BK3kRGW9NnqPEuPdeuDYYa44js5FUzmi2zFsUC5WN32YzaYgfKicqqQge6iRPACQf72ppseg4QVzktwdHtJ",
  "key16": "3BkfPsNhWojEqkeYrWUmY7X4aXS7vrEwA7wutcZbjvUZJc7AWfBD5e4K2DpCZ9EwKY1vWA9onxNQE67FMk7tN3t8",
  "key17": "5zTMkrRiSH2XLs4GU32ZSiM819SktajRMTHWaLfNy82rPaCWCmPE6zt6ZTCrdQ2VGV1Uqr5uaNMsh3MNn4rHudC4",
  "key18": "5e74P9WaVLhJxGbEMcEzaDMuVQNmCqyCiSoEon7T93SxfXSasbkwqfC7GfDJYRVWgV6LhVwUSpCNSjPutLAwmYfk",
  "key19": "3bjNeztkC2nQdBB3c1SN769mzFLnxiXsdT2opAYtVacrTaahf8Mmzbr8hCs7cGpndRJf1q7gciscMXtQScPxo9MA",
  "key20": "5UqgYQt79gnE2arD5u3ysoV1gxFqbt764zuFSYo4NCGx2iQCdyrqj6iZqfE3AkhNCthFbPJQWGh8d5SyGvshM5dc",
  "key21": "3eFGSfzbLUjCvVjCH6Ym194QW8so4MLoh1zWnSop9DFsv2BvpTTDxnWnyGPRKXBQMvwECCfgzEbev82w5Q8Lb7jU",
  "key22": "3Go7qC9bHuvjWnYEqpuii81aR3z4hDNK16sisRGYvLz224mxbV4msjDo4ddfs3tGkJnXMFR1rSvhCXxkurrxgMCD",
  "key23": "2HdsqVh9hYnqVK5U7rDCc16s5W4jUPW23uMukwfGHFps8MqmVg5baeBMSzKzzifQSTtMeYyZyeHABwYYGMrZLSZX",
  "key24": "4PqixcLGGbWXAsA8y3V8tXi9mVrJ91zUKmN1tG5Jih816xN6eKtJ3fwkDEDci9PzGip2h3uq5KKoG4c2EfK7qjPh",
  "key25": "4KhPsTZTy1RqDUEGfVWxjVsKZaVVT2rHb4QNqda4sBPFEhJ7rK3NeUmMf8beygPgpCpk3pAHuYV5BVxdLnh1ndwG",
  "key26": "4PTdcpFFGSn1kCy6aN5ejXopQroYcWp8LxFo9HtgwpLJTTn9kDuu8AKXKSENz7ChAbAijaPK7HC1756xdjoFVDUA",
  "key27": "4Dq5s3VWx4XUnaXnh47eZ4cTRCx7MJmegSTxcEPk7a1BH2bLb4ZZnVHyJFhNanHiPmkRkFc5uFkhr5avxFQQxVzv",
  "key28": "4mF77amKZdpb78ovog3KpWfAn1VXbNc6iBCgXi9XRpnUFn1kUxFsHZKVoCLV5MkMM8vvBLXvwLAAkFFSmmT3fRfG",
  "key29": "4RZU1qoJbFWi1fd2HGHndrg8DJr9EjFHrc4hTXCwoxhs6FUS27ZX5no8NmnWeYVW6j4DEBSYnXWqgS3Ms3LNCppB",
  "key30": "3bMLYjgQMRFWJHeGptDJG8sBzz1znMoRN2bgtmXzTVXFCP2ViNfitTtnHdyaMAPd8JHh6s2wb3LZiyd274ciAPUK",
  "key31": "5C3WD9oxpBo63UEXBEYKJjBn2aEuuuP8cgrhj2tDnxPKs417vv249aBFvrU6e1ecZbDMGEKh9ZaWCeiqkD5n62gi",
  "key32": "vZTwE97t92n3J5NoCg8uzTNN8Epeondz6FLu8TrSJkSEnaEKGSoKEE7SrmCgnRaSbx7VkgKKFaZrgaPiJ11SXi7",
  "key33": "5DBiPMCUrTTeJffiaZbi5DQ6gwUWHdKWYqWR1o7dZRuYhxKWfBNKNFSGAgk6BxLxhe9mmW45fi8HbrL6yKqu95V3",
  "key34": "2xbCttT1PVGX1Lu839s2nywB7RLRDTMixbCtkBizwrP6BAVbVzSSbarrXahRZMiDF2qFF8uJnNVd5Tx6jQMzxrYc",
  "key35": "2r6ZJzMXPjqCiRrGi24GtSEiFMPZJXHzyJ9Xkj7bP1YxTaZVEiMxdSRkAxuy8Gmxf2K8mPPMwhSpqAo2jbvD5Gcc",
  "key36": "4TzB1acXknFgdkqWp9meXSLXefBWU8CNfyCtqpSGwwN7nuKuyC4a71ncpxs7FpZPhtexjKpgyvDaVqVR1HjMqDh2",
  "key37": "Fdyp2iKT33kqMZPV9UurFRxztwWbbmb8ss2ndj74qfueYFZCbRDxrS86wFjJ4LC1F3qDDU8w8y5fXjxFkR2CVwP",
  "key38": "NpCSNL5wM97dnGNnixjpT1j7xAzaQHdBhVZAEB7tSmvVs8yuzEyaUL5pPRyoNSonNxZ2DbWxaD2uimVfgMeZrBb",
  "key39": "3TFsAhNmSJd2ZnNEjwk7FFTJof2jWUFQeckXE8MAdM9SEfNFhztyoPza9ZZDKuMYM6uaALQMsRTVGTNz9ztziyZN",
  "key40": "28yA81wMpYNUzqqF6H8VoEiL16NELbZCmMguNegBYdwP85TVoPBQxqUcfVYCp1ttyDi2h74J1RrESF6nhJiLwf19",
  "key41": "3B6GoJsZKPXDcCjmsrHL81YaXUNWnQMyPeCCfgTHLhFoscZbwuzB7bn1hkxPTqNzD5km5SWDrUQWjBVEMx6UCQB6",
  "key42": "4oXfepnK3QF1tdZeraFGvkTjoCKAvAJ7DSfQjYnYBZrcj3awRAVn5nMRsQMR6C6NosNLtGdZLkNPk9RNPPY8X1f4",
  "key43": "4CLozgecnNcbgwGQe6Yi1YMKWwLhiSUpA7XL9NxtjMCJZHhgkAqJsTQ8J9ak7vi6NTYoYry8kXhPkJhBVKnYpxnH",
  "key44": "55jZkHocSe21hn9UVuJixhTxL6aWwL4JRuX14dR44Hdy34fKr8N5WFYBBDWJXgmMBAqeZswLD18nct3QaLfaK4eV",
  "key45": "ob1P5mrX9ANYWuo1UxTcnLuS4Kk5W9XQSgD5iVPC6L8szw7NcQA8sXJPQQPnGYsJhfUApd4pVQdHsaHwtopPepU",
  "key46": "3Ka9ipYjZP5gXe4GdssPSgqxnPoXgkQGdNWrWpRzPz6yhJtRVsRP4wsnvmTDeKJMjfcTSfnAGXD9kp9b8unDWnjp",
  "key47": "2XTpmfjiyP1THWfb7GeWtBYTqfbnpCYRbnSBCAQxvQMG7oFwHZ4DemdHypJfYhiq3C6p1hBNU3pVa6dhK8YREnNS"
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
