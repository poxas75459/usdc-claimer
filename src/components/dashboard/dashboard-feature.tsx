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
    "52etR71KQpGr8Boxoz4y7Gs1KE3twVqJEqHzsFvxrsK7wzuhopnbiecHZzozKQHxhz4Fwf1gKGQz2gyY7qUzsYsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UmHanKpSgEgLviWGSkfxtbTtdg1wmSD3dXLdJPYuUCi2Din5GCZDZwKbfEp9cNn8wEqgsv5gsDQmxw3JC5uYvgt",
  "key1": "UNfq7VeJh1TessujHtNAhXoy6ZHsHbaPJiiDf4WBRshGLYvB2hQbjBmKG3iTgCEuTAN3bFZsJoMt1FHuW1exCts",
  "key2": "5TQBKw5bL4cdsCESZSQfmyoTjZ2qkvZmkbsv4QrqT7NHxm9b8NNseZ6gjNbUNx7JhLgZEEy2Qzfc6vepzpKoU2gK",
  "key3": "2c8cPHf5JSNQyM9BXG5MmKkupW8ZysfuyQSoKcPYwiBbjPBKgXWpQYj9yjmJWjk2dHAFdnn1MiVYVGRxXEcs6JEz",
  "key4": "3SHEwz9kKBsWTPkoXAsX6XgJikFehH2SRRmiGrMSwuR8kf7uCQNmgcDfUrCXY8XrnE1cg3bjDPMfVkW728yzRo71",
  "key5": "3PmyZBkuG8oRNMSG9mUqcqM5RZufd1wbcQ4BTvMaTm9J6geSVviZ1qsgye8YScCrD7xSf6683HEdteA8BD8PioAB",
  "key6": "VWi2CqYELMBLwhWSbkK7QC3KoYoEGtZUHXb6xtS22tTtPijyGfXT9R4vHN3tkND63NRN7SPhRFJAewa5UNgLBQV",
  "key7": "52sBqRny14xaeaJziKBL7R7hD8Yus4ZGruqQtTyHJoig6yvhU6bjqJ25EyMQ3QUNovECPbdPAjTLdNWK8Kuwb8su",
  "key8": "5ShskXqKgbreqToAVAu9d4BHjt9GnzpUGuWkczg6K32uUDoKhseefo1tS3ohT5T15BaxRsKczZg8mdyX1cZEvArM",
  "key9": "TX4fvDeXEtQX1m5WWs4SuitrxMs9vjkwuthezitNB8axUMVMUfqbcNPo4tWDE9nZMgopfNkBLajAiC9GYEebKjk",
  "key10": "4shS5eVx6fAk7t9Ztoghs4ZQ1CsDTjV9oJ52PD5kti8zeACLeCjM1j8Lu3Nj2mokP51PLfgsYqvwCxybXdQeW2js",
  "key11": "gC7NW1NEfUaYY1d4xgKhdSk3pzXiauoTZycAawacDy9wNVsmD6KF193WxxPpfmh26NxQftHtNg3n8v8jxGjcQHN",
  "key12": "39s5bcV5XSaWUa8QdW2mpWKnNkC1iNmpfFtPcoZptX2GUvPUFVZumV478rvtcnYqjW4pzAKNRti2Af9NU61kK17J",
  "key13": "5kuvAvVDZDkJFdXQE6RXdQ5bg8re1dXzSEmQ7As8ijeSjcLFYFEpWWQSKqN1rqVgH2ZS9X5wtVxnLRvTM5CmCcZT",
  "key14": "3cUD18h5sJG2w4rEBexohw4iEh9CYFPwcmRZpyQ4TLe1vQkNvuivvhv2WxCLj9mhAC6kEK4sJVdEkf7hPTrunRXZ",
  "key15": "47wCynFFNytBtLNVsZQeh9ngJNkpxvdaFpSuKo8oxpnApZL2LTHFGFZeyQtmMfg3cs7xiBhK2VuRyuTRSn4FC95Q",
  "key16": "4PxdbxfDsTfo7pUkLFxm7N5m42L7sCEibFdpXQ3eFVkDr8qYApoUN6DWKsbu9rWqTnkEJ2xBVNUtVUMUJnbRsFvB",
  "key17": "2EmWwivrqFGjp4ZQszEi8e7FkN6QFTrbxz48pxXWQSu6dxF3rSMxwn9jdXh9nBSzLWvHzcvwtoZy83a6T52j1gAQ",
  "key18": "58hPCamQST9mM9su19PRk3ToKAecXhC7xXqxUXmsH9a6F92cqBQUczXgwJw4hC3EsHheJ8u8pCXS6BXBu3Cwb2nd",
  "key19": "kLaMbWtiTjQbbUrHgXutMoAcy5Kwpw22WpT7mKkwZ4Eaq1ZAJBpSZmGwMECzGq7RVRCsnZp39Y6swH7E4JRybuz",
  "key20": "62RG9MHhDdzZBgw8q1kbpXDux477Z1gj7eWGSKr7qT6vR3Fd8QqE3tx1tFdkh51xPYTpwxEQXRJjDYj8ypNyChpi",
  "key21": "5G51mqb4Fg7gapKsLzYofuRrx4juyJYgJ8pyiv2mFcpBXaUkUKmGShtyRRvf2jJYZNFhqJ2FvFFDMgJdJLS6MDLt",
  "key22": "4MKZUTNE7Q43VCiqdo6NqdA4v3HTFEYHBqHBHMQ3nNKxK6FHfwMf5EeKseqjFq9Xp8JmEAty3T4kAY2DNE9sfeeC",
  "key23": "FcC3LdiQq2Wgb3PUfjmN777vpv4dz96ZqbikiMC1C47qPPMP2YNi39Z1EBAikKucQeKvT17wDVk9pb9NJ6goXjk",
  "key24": "z2WaLKrtW7wCuDbniCyC2z7AtBcGnbzg6nZBgHHs1EJf9wTbjkYxhdByiW6y75sTwtTm5Md4pasCrSPkpC3HyAx",
  "key25": "4yxnAmSfkJz7FFTDTUtKSGUEVY696rg53tHsiBCJfeuen3Njx4TJCk6Yic5gZtfaauyWx85mo2aQRgZBrbUHSbUc",
  "key26": "P6GGbZNNLjqQ5oN1cQjs3FSdZTViYFMLZKYBje8SurZwhEN8dKwZj4ZVBms4C42UVTMq5Y3G2ubxHcU6UERgz77",
  "key27": "4oh5qSgMALGqACa9FWoXvVvLTK92vpo37JeBH4qVGBexwFs49zk3jQg2rEvAKzBQPuLayXikVJzdF8yz7Q76ZAbb",
  "key28": "PCwWfjDhUcVv3wjxf7cdEHSALN7uMaqv5E7yjr4UKPGF8WvvK57DkqtfaYBS4z6TyvNZne8Tko5RKNmoGb2ZA8f",
  "key29": "3wFkkNn9ys7kvzUBjyw1hJj8617sZAma7WH5qRmEDo9zQRuoxee42wj8WfVZ2Tpma7Y4r1fo18UR7jA6gYGgJW1K",
  "key30": "4GQp3z4AgX24kM7uQ1ENXQnCAgpQXV21mnzALgMtmmR3HXdDnB2XTBGDQsgzhsAK2fZGiSXYp4SBLrCEwJ1JbQ1H",
  "key31": "2d6njSF5sTvNkphEyCATbJFeCEWUwoTxfADjmc1ZaHzhoMeHnn6GaZoM7bvExugRCpcPfHs3xbBdpXAfVRvrDW4T",
  "key32": "5jEwqna6rUmxNXfq8SzqH42PepXS6b8WrF76d91sGHwym1qVijp3r65VY9ft8RViYohvfZRKo19k8oyT7i2B3jQM",
  "key33": "4jchytTB854yYQ4B4eZm23W7gZFQ5Xsqn6mUxW4wS54xr9TH3emgCDvdmAmHYfYaPxD9vmsYpKErWVaX4cNV4Wxs",
  "key34": "2U2c9iRuyZFPkPcnMBGSJX6yN3J1fee9AM5uYueRpvZmJNDbf5rPJQY5wg3qHvYWycDk2jPH9g8SS4DmNwG35a61",
  "key35": "55LJsZpMmEDBS9GsGnrNz5RfqodsdP4fHkJvaw41V9b5zFhWEG9KhPRiWT7pJczhnRWQ8FdzjUoR9XzjZ73DhMUa",
  "key36": "4qqtGVpyhpEeisfNXEk7hjtUafe6Xnq4k1YNWEZmYPuzJbQuFQd1F1VTmnbndr84quRS8ByZEca3t7fvJQxMzTWX",
  "key37": "32pkQgRwvn1JF5Gjbf4vwwRRb5n2hKYfRngwiDrG3fBcv9t9JpWma4SFbhwHycHiYYBB4bfPDkwbyyAMZFmcEsuN",
  "key38": "GaQYyWyE4MM34U8c8kopqBVSeVU4AjoGfuNqK2fPDaDTuob4xkUhdQ6mejphV1n3Cr7cmSUiX7SDgzb5oWszsjK",
  "key39": "1jjcJvW4FEPkt3VqNrBhT7WeiKh4a7VZsn5mhuV4hTYsqKRDib5LX5UKeTugwEM8zgUH2c4nmrBR7Gg49Tc4xhQ",
  "key40": "U7rUeGCPMP6HWwDBm4LXXemEmvbMyHRHG3UvLYh86jrw359VfB6HNKL2Vo7Za2n6UsVwP7aG6yPQDXS6Yo2qGjx",
  "key41": "2bPXT54ihNdSUfTt7Zg7GMSpLgp6vv5PafBPBFHCpzDjQ82upLR6HRv9rYvHmr1FZcSinFBGtrL5DokUHMwex7jp",
  "key42": "21w76ois5zbiSuibv5qVhBRZypbUw8vmAHcyW8n6kEaG6ZC6bYpXo42Q4yGdfUgUWKbNGyAL9ZxjjJz79ToUBh8p",
  "key43": "e4VRcgGKA6zd6cWPXcj5v1xLuuFADNtpsV8YbNseDu3yWVypHiDfoXVrKn1jdgtpaw6sYf6Wo8sU5hg4AHwsc31",
  "key44": "2nhztqk2cQKEmKy7aX9268WRwaRUHb2o7R7BQ4UHRNs74zEd1d4Zo3o82i35cytXjjvRvX8nVUiFrBQynLCGX8eQ",
  "key45": "3oSTuaKFDcQBKm1bSd5z8Vgzo9aB7naSM6byArp2PTFPpAVXRQPA8B26q1LJH2iNQ98Nd5823eFMv21kaQ6Kjogj",
  "key46": "7AVR1fd8gmG3oZDsg5YRatwxqKu8xVXP1h1JPy6LHH6ab7u7bwtMe1NXhw2EfAZjY3r9AQDVi9LJEr2JKWuRJwM",
  "key47": "2iDrdzdjoJPArRzxYCaCpPHRV8BiARX1cQeKuQFQxPjM8N1pMJd8f5cSQawLGspCGoYh4zgnUwvw1MST4psbxJVi",
  "key48": "22Lb7VjPyYQPY8RySZ1D4f8JVqW49SD3fMJw6mzuBszWXsiifp4VSTgkoUcAy5F3D8KDa1Jzb1pwLfiRRFiTP1cU",
  "key49": "4J3AkVvaipNFRBGZ4QavhnnZMKEExX8jfjsdoFaQRSGp49QyByN63eRH3LTZ2GV8uPCVisEa6CNbF9drkzzg3Ass"
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
