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
    "q4xh7rkCg2ExoMBzLpJ38SaanHEy7bgkpg29cPgVEJMZHgKMV48EFCBQ3AE9rMZVKDJhaRNGzaCYnaSicVATx3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z1LcWbKUWJRkn4jLiXxRRXBAq74iDcjQ7g317TwkH7WF8m4VAEpeByNR6G9QhQbeBcma9r7VtkALFFddqxuuao4",
  "key1": "1USurNGDeSZKknRMw58opsxjK7kJbGsiJq2rpRWAY3uH9cXrzKAsoDGPXzdeUV4QojfKuCKrcnATaty8p1zkfaN",
  "key2": "5K7qKAVSBfhd66yJK6cLYyBh8hCPt32ubcPhr9uY5z658wDYaSwbiNeNPexTFHKzVQbqPTEGWZe4yqF39b15Vzic",
  "key3": "2XctAPBqYoB9Uc2XcufJfKMe4jr75kWkZJXypChExTq5o43Xfx2ztkxwu84EctpQxnoX1XYTcEsXtc8cLToMyahf",
  "key4": "4pLMRm1NCtDQGUAn87qHRrZyBsumYeZznFKLfWNZnC9mCXd2YsoMcWEE4sJqrRHy3P4do1PqkdDZ4S6H7z7qWopL",
  "key5": "2JRVe7ADB8QyUy8P6RYMPpD4AUmdUvZDq51X4iidLV6K4oAiwyRgHYne3Y1tf1h86JdwCKUjkEF7PCy8ugmAkZMp",
  "key6": "67W4Nrpnsr5foFSg951DHERtSbYNCBThEPU729CnVMdq7rx7KXpRQHwcXqggsxkqov7yejNfhu9fV9YJamMyuzch",
  "key7": "r4vhsGtzx2DtQU1Eg9utjtTqepiGiDSu9favTuMrMbFSPf1BRuc42WAh6XfWxyimVKMgD4SvCXud7eqadApic5Q",
  "key8": "3G7mJdyFxa6zhtNaPna6Zq8RZy9DWFf2QGBc1sG1VTpZnyjXUy3FN4zdCubaauy2oq94XZLaeYCrufzhdRE4LKrZ",
  "key9": "3MeHU9G53LPDSPbSfYcewQQ39QgLA3JDqyMZBQ2bwdzFomH5DLqscRBNwBMyAPXQ8iCLf1eGW8dvkdJibw1vUKmC",
  "key10": "4TKi2UHhLaDQHXzFrXAGc8SPnLSLDVCMVWC5CBwnJzp5bUwMW6a2nCJdsEfRgUGXXNoNbDvHoCKk7nVaVP7HWjck",
  "key11": "5aF7W4zTftSAPrG8imqcceqAhNC5Tj14VL3jHb6CJ3gjqRdpqvQnXztX5jxRkvrNuiFzgn4q7nhRkgPc6tuBKSXq",
  "key12": "nbnYWfhzcYK192eQk2DA6CNHDyVSnDtN3S5cNZfnjhR39nHiL9oD4uSQc1hGszVyCn8LAFX2uLey4PsUcmYv4MS",
  "key13": "rwHrUsai2QaE1fVRMm85AXKcSjG3WAgX4TR2ghT5i39EY7CfvzgKiHT7hh7mV6gehzF9RyiZ4hH1RVgULh9LzcA",
  "key14": "25GyKojcQVvBhUpTPDTQVPkCNhZZ9X2Qv8XqHJUG9fZ2Chb363GsbGsUcSyTYfuWg3NZFrM3cyr4yXCBf123hdXA",
  "key15": "TQGdkDejWAFXRGwpD8navDziKfjxj9GWmBfZHpiTWPY6HSA6zPKoBUZm4RC6ZRt8PcDKjjsxuAstQAPNqDzSG1h",
  "key16": "cLJgQZCaojk8YKVTbyUaspbRvLh7bJY46M6qoNgDUiHe6wnQ5XMSBVnW2J8Vn1So12uDtWU4TEmWbANK9wpA4ML",
  "key17": "3hXUJZDDW78XfGvbw8F4BBs1SHAXRpmREHMQ8oTeUkhT2gaEMPycMT66TcJuhoGhJxuFqH9TU6yXYVUA8s1t85Jd",
  "key18": "4YYTqvkhobCZagZWrVXTqU7VEBzmR384GfzWceCknXqiTVRCz6QuX8DXEfn8vg6mCSwK6nWcPyKM7VW7eBMsrMrH",
  "key19": "5koChqgyTot3soYrqtcMQHt279EdgUteZKKU9eS3JjGp53TAdEW835deWxapQMLmrVbgbYoKPELDUw3ApgM7yCbj",
  "key20": "4YfuxjoMVzdWrUQaiQkACLFaG4TaidNd5F73ycoi1ddBCz1HDn9cpB3Zt1LDLMGt7cmzKeYn8Vg5eFXXgX4fwVPH",
  "key21": "2VYGMiy79bYuRmX6fTEPTQiXfnAKgJv2WFUc591g4rvh7ndmxRCzWkv9SeQALnE5WbD1tiA6mfykygG9oVf6AAUa",
  "key22": "5uhiKaQMFcRRkJ1p94ewkXsJieeKmR5q75PG8Aoj4oCcNTwrgQauAPzFN2NAX5VACcQuJEwP1aV3ezaXiD8kabJ2",
  "key23": "5WDweVZUHBcEfHUyhC4nAgFpf55M65jZ6bEi5uCSNKNATEtnmYUsEZ6Evaw2F9ZS4c9pkzUQQoGs1xvdUm5s7Lvj",
  "key24": "4pfrENjA9rTtoqt7bRcUEJ4KFmUqruyaBH4wuQ7b3AspfFq7H56AWuUTPWtfUzSGRhrKMxxEC4AJByZy7cEx9Xuo",
  "key25": "2aBnfaqY1qXJV7FBftFRWjSM6sZ1hjKtKTrP1DDaa2XfWjcsAf2NAR46Avq3Mg7sZRtiNGY3eCEQthaYGE7x4Piv",
  "key26": "5xd91SVv54J4W5YeNTGshzY2xMXPyq6YpC2NGk9ZtvpjJky2qdkBn2ikpH4V7DjA9Rsc5DSbvnnsCjGH8GxVZSht",
  "key27": "3kPQkGjSneAupKxZvhQQjMegcp62bEvfjJP5U1Lq3aYtoC17MWjzXw4PahBw2Rk5FaRFg16aMBZTtsbzSTZfbLsK",
  "key28": "4PXvdL8XKigv3onRBuhqgfus98WyoHUUpubA7ZCSRWmWn7GmSU9psDv4v2VfBGUwiE9A81qdzuZBybpESV8FfL9J",
  "key29": "5pbS44oZywmwYhq3SAStTn4pWdrwV2R3AmapN37bQ8bBEogZU6U5XweFte3xYjLEnoRdVybHMA6XRRHomhdn1hNy",
  "key30": "4KBUaMCZ7c5qy9113isdSPXKwKPZc9X9x8MLg3pGb4bitJSjMYRwjb6t9Y569WRAJmVfYPQDz8394k34KxB3ag66",
  "key31": "aXuALdXR41Qq9LvYpdzPmAijeWRQRigHLNLjGgUHNa5Xu9gFFtzSyfQqXDYra3nJD2XJHdxJ833pE8EynLp44BB",
  "key32": "4jNr4zXYo6r3tNoWnr9KpFRmpka5XCAHA9rSxB3DCXi3iPeRyC3Gwva99YsY4GvKDZvzJg3a94Yz6GDvUc7wmDh3",
  "key33": "5cmDXqRpFzmtezbVgGMQjvMwKrSEmKXZDuFe6aNbS7L2h8PvgFEEb68XuJ9cYNikiNiqXz5cibLCvHU5HuzPbwoj",
  "key34": "33btJSDiLP9p5T9sHYey8gbMDABazz38KbbLMbGPYCHRWf9izY58e3spUoyiwt3GTWxKsZZzpEwEc5AHr4VA7VPx",
  "key35": "XyLDKUNTKF29f3Vm4REFemqMwLNnRiGGXHoCdA9k975rZyUv4BtGonZ7zpKFbrGBhqPP43iLUEkyb9dLrnP2WyG",
  "key36": "djVwSkK8A923NZeZNFAD2112eaVoZXvGNHKDrYtZ8BfPLCwb22KE6m3JLkHspB53jFuL9GdN86mrpWiiX2Z87Kj",
  "key37": "3kfGYVDsG29nuiiYMqwZz1xv7J66wgSkmTNGW9RHAxhvkYX18fRrzvgK8ZZMhUaP11qimroJeZ8B2znebw1KhHk1",
  "key38": "3zL8jk2puukESKy4E2nZTeAVBZ12BpvQzu3gPtvc9S2VQ4DD9vqrWXiJCqEi8QtRpkTtvcrtjq92FDSVxQZVuFyQ",
  "key39": "N47iumZqFFNMLGv6VVA6GQcNe7sPaSMGXyGNXD9MZ7tzF57ksJMTnkjmKVpgH2PZ4LUbKTDhvp8KMafWqvWge8p",
  "key40": "3Wi8CYjJaG1BMixaSMvUyW5CvjWBxGW7DBPyYR4Vx79qurA17tiskF63kvLBjbc5b9f1KCbKZiMTeHHUu9UTqD7D",
  "key41": "4eitXd9T8F2aSHt4nDkqDdafX8a2Yx2VpoowCjtKdDHnUc5qTvWfL97YirTqsN4RUWTJQ8UoVG7cyrxVFXBxKGuq",
  "key42": "2fLPA35bAtzFNXurfSttJJ5iVYFSCN1an8MRLGBXUp3vo3TtuRYyrnpW3fjtQRYke2zwJpLbs6uAx2s7eeycrQPZ",
  "key43": "23YeLX2AWomYRouZpSohpDrG2w3XHbWPCUVz1PG1QBX7HQCfB4U4xLf9fVq9eSgPCF6rusUzouZbXjPkQiP6ww28",
  "key44": "4dwJ7t4YnDALXZ8yJWDctvoHuvSPC62bMti3GM2MC4x7DHj7r7sNUgE8scT923VTDqXfT2x1ABpv8W4cW2JucVja",
  "key45": "4wM3ZvXDpx6jbvTbme7hx1cisJuPUK6JqoJnkRwGP6K5C3McGT7K1Q2p3BXVhWBG9hDJwdmCjKN8gdUqs299L9Pb",
  "key46": "63tqSHETQdxQhYfiytDmi3fSbxeoxaEb86TSjmSMxV9Wsv2JBF8RQRfWzjoPtmHa8B2EQbNSPEQi5a6p3ZjFrsdt",
  "key47": "DLzZFz4i7NCCnPt2jf4PuzzSRffD7zKM2azq3PZ4RgJc4ao7pJrmTmVUzhW8zHbXhsj68vcSKEseot8yzopktAE"
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
