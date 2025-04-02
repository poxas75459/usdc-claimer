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
    "61CXwG7Xy2SCAUpNdgos5kGVtRV8ueDWaejzmEEFYgLBcsKVE1fHX57jKdDz9ikUpxFhPY4EfNuhdtaEN3aoUVgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GAPugHkkccQXN8AVaaTzCMjk5WbyP6Tu7KGn1jwuJhzZw21RGGubuxEuj7GxbowuRNsfeXX2ioP6tvARvb1KwS5",
  "key1": "4a7EZmcHMXSqMzs43wRvTTieRCMEGZttrjamf9wtyhC4oLC3nWfiM33SyKaBGL9v8sDuScQBYG4ewVJi65PBpwKP",
  "key2": "h4wpzRFKdtFQ9Y7k271FRpfDHu2SpQf6ourqqeSjLV19dsiayySqoaVkQuTQcZV9spgLmyoN3XgFdHZS6zG5oPe",
  "key3": "uqFGGe9LFxS9yZoAzh4GBTqnxbPPB6yjhQ39UAjYpVnMYDCj4xowxXqEZo9sHDhpF6GYPvA7RvD1gCHfo16hUda",
  "key4": "5NeNBoptoA47uYyvnnmFmq6Svkz6Hta2Nesw3erfk42gkLvW7dfrS3J6G7m9MXibkyBV8Xj2GUbNdj6AJ14Q2fsE",
  "key5": "2UAiQ6k8QPvrwKAraprMkE5Z3Jew8oaT2qwwCoisSBkYJ3fRGEgRH7WMraRXKV4zxmpHGjgqNc9dcq2hc9gXqhhK",
  "key6": "4XHrRzzeQPCHeKqfcN32TvqEeXhz8XcJw78hzqMHrkpR7aQR5SEyxQKGw2u5RsxcdiMKUbxoK1uvh3ALsR3MZA14",
  "key7": "56dgt2jV8qvNz5r4ZqfmYt8gDB7dVsvrrk9ivmq2s3axjJLmCnVkpZG7HR5gifncehS2DcEJZrbGZAFZN9GzaSTt",
  "key8": "2xKaN9uY2Gxhh9FyyMbS1AEfxZyYscN6u8vG9M2d49mRkFYLDj7q5KVkFqUhGw92jzEdM6qj7G5RbV1gGbCkFyRr",
  "key9": "66zVgTEYTPGiXJksYRDvMRqWUrSdYfNUwwmbdE3kqBepTgSDn7c1idMTGu9Pufv54828HXoTnXZmzVJaxEWfFzb4",
  "key10": "31adLnDUVdP2PD4VMAKcbnUCPJF91ZRBJ1vkdANKjx71rVrNLtyrwiwdSGchKLjCbQbRaHyevG3zvmqhWUVRFTuc",
  "key11": "2Atq1nzpA1Hq2W4nEFBVBP73xeaRfCGNUGXnqfsvPSdxPLhehmzuiThtWuKkMU3kp5cApGmjGv2xxxyc7BzTNg5R",
  "key12": "nAopAz5u425daKVPTboisR2ksnBsEiKBpag2Fdp9wZiWFW7F2GU4JQ6JcfkDajc2kLkH9E6GoP8pjbYfeS2KAUU",
  "key13": "58by2JF8EYX9D6U1LqgCRvkPoHnVauszHWfKf23UNkgobiuSSvkg6EqwbsX62XQ5mCd2CcUuPAfo2f9BNtx9hTU9",
  "key14": "49xNVpZsUtvvDxGAVbAfwTcAGvNPYsPVqvrxT3aYrkDkaycTUS6QMKJYXoiqVCEWU3UK2uLF3WG5j3wERz2T5ctM",
  "key15": "3izzjNQEo9tmBr4AFRYSnCXbA5wrpwEYGUVd7F2ajvLeASTCK1qyf7JrWDG77hS91otzLfZLtXWkeD8pSWs3zXFZ",
  "key16": "4Ag7kLVebG5xpRQ5kumFTUBReTfavcHg6QcdB9a5JnTFb2uPkphjRrEkukdVw35AKzV2RrGTJh3iGBESAYnmq2oB",
  "key17": "2W3frYDijDDHL8fFFUKqhH5TaxjrR2hrd9zRxNy6A38N7Q2KFCpiy49FRyqWQtsfJ1bZaqcQb2MeUCvfUoJ1pFZA",
  "key18": "3QRBAkNbncr3xMh9deXbNHK6tmFtS2Tn1FwDMpg7fipbSfMNFbkZvhg2aLU7MSncpvtBHwN63qBWxwWdkDa8eXJK",
  "key19": "4T8viBR7M8meRkHtU12bCQbCozHv4ndiTvetMx8ua4XLYYiMRcnaz76s9rkPek9DmoVUbQKpZgkNDgennrEonzbW",
  "key20": "XH7TmjUeECP3bSeaoVJT5JoNSLGF9ncNyTSY6fRmoBhaoTyjpiSKFVBB4sNfvLzxcruZD83GWSMSUJA1tNXsGPT",
  "key21": "45mZoZfxZiMuimJci34yaXUbqLUJvmiDrehcnet9sUBsQvv2wi2wMVJw3ZuQUxR14uNZDyhfUi7ER4Y6avZrVHP7",
  "key22": "5UeYC8Z7KGxW7e5Zp1A82srFoAVfj1eoitBvayFVrhcTgycAjKe7PZcAGHwb2sMy9fdEaNyWBszBUoiPKkiW39BL",
  "key23": "45V1bAmVr8YKGF1KioodrKUY4vTGxmdjvKqRkQ4ncbHsNfSi2WLwxMAiYmL365yPCoL5Tvu2u1wMpkczvEmSyMst",
  "key24": "Tp2syqrQYyoPf8qMW8GiqjSNNu7xZ8E1FghBRVTh6zaMpXgyGfoqzoqUjue9F5YooGpiu6J7xFR63ziSk9gD5fx",
  "key25": "2oGu4rz6y4sTKFzg335y8CPiX4qSaceWzrPCAMNpDqmno8rbjeMTdym64LGZTfiYmPxNf7CZBiqAi2R213WmrgMV",
  "key26": "Pd1JWX42CTSyXJHSjX49LpkfYWakPF8e6rE4oWcSuJcoTGd6hLRbdL2K9zyz3Gk5DF2vQNGmLVmfWvCaS6iidSe",
  "key27": "3ZoiQkAVUkRQRaFUtN154a3zNeG1yFx4yfdTAs4GcwAkJ96u1L8D5jgt4beKQSedhj5jAKdhvr4fzdkkPsMbJsjw",
  "key28": "5PauX6yrEa3C15qWrERowcDXrxVFE2vM7sjVzjUdTR4J6wAVwqBzzDRFPBDstt582rFGPwvn1pLbmXw7tM9j1nQi",
  "key29": "39RxpiifT2B2c5XCyaiGhYV2vATpty9b9ZiHyjyFdFqrS6D9JqCrZWbZf5WhF84yVtkjyvRekrwM8kXisMJDqsvd",
  "key30": "3kDXpUx3MEgrWL8KHH4n9i1zfn15ohqwkHPTo4HYf5xQ4QACLqLpaNXFCtZtGE9f3jZ8Xa7CJ8bhgpS8PMWJUkh",
  "key31": "2d4MSsimf9aY4G83DXKd3SqXEV8WmaSxyDFGaoNTK7Hn41y1tAaDJgbgnR3rb1f8qHxgyvnkRF1ggXp2ofgVi1MF",
  "key32": "RHt277H6rxZhEhmx8vRrHDg2puCt6MCXN5QGHKSLMgTGEFhrnTWN3W3HKsTF8YwWeQiAfo4utLQXSMo5xvK4LZY",
  "key33": "5hSFymTArE1pvYdsLSjvGwAFfKuY7HtmaNdCGCHPyby6pibMoKdsoz22NuLcT5MvvWMxWQv81P5PrkJDA1TzYLFC",
  "key34": "5Rmcvj2fPbtnhdzk8ois87uGvrDRG54x5KLVLE58cfrDfWA2k7cwsMUfPbY4x5wMZVcbZDGsb8Rs8urkXC1HQnJT",
  "key35": "3SUPnFthMrTJKj7GRaDsHc6pzBR1XsFTT34Qt8Bhd1QbhnDEE3DfxVv1F45Ztvus9no5qmXGjaLb6By6C1ZwMJ4r",
  "key36": "2vJwJqppjbSyyfsEW4Gp28fWmcESD3aVMNi3XrP8jxQGvoFTCSN37ntayCq41pE3bLp33DGYXj4rjBwNwv9N71W4",
  "key37": "3yhmBUXb64LjX6RsYeGEkYGHv6AQmp3foSfJYoFEJeRM6MfwHfbJBdwDXM4Pva1h9g4NAn5Pidj8PAo6ZAHin5AN",
  "key38": "55cHHGjFH6oCUsxAzwk72bdjNtuM4fmUzzgHsm4VWBFTA7SFPK4bva7cSj55ZitAuhHAEMuwfPBzhSbci5mqfnDn",
  "key39": "636evvQtWkUhgW6amCLRphn5UYTPPPz91RpsXomhN39yM6AK8RD35iDLvcFntgVZLGLdFo1BpHpBodghGHxebSdQ",
  "key40": "5WBkNyiQFq7CTbaweMj94Q1KvfUMEsJDi6Ue2ZKJ3273RPFyFaWYBt9GE74J1FAPDTtJpF1dA3muyHZE32K775dD",
  "key41": "63Wz8MFTLgahGHp68CWxFXz7TPwLPMUzZHMA7r8nEJtSVxTAePffdEwGCfe95fTko9obFR4ZgQoWhYsBT92D9zgG",
  "key42": "2im2BX6MegXXHksMCPcGZKk8nTA9TH2TxBA7eufXhVKDMXomQF7BBJUc8EdaG89eoW1APQJy27TaUGhyNG8bRVZK",
  "key43": "618Jovn2FUYu6UZ2gTyuWxPW1wKfx34ymJH5QD5xFxATh1TkTFMD6a4djd6E1N9Wf9BJ9z9fMhvwsvsSuWcagQuB",
  "key44": "DMU3hgXC1EBqymZ7BmqrKMMG3M73EayqAFMVfWYBReTrsxgv6yH84GFWQPB6HS7zC6M1hAkpYeyqHrajcqPt34W",
  "key45": "5KsrPny5fVJJovbNSa2fdSeqNPSaRu81Ld9ZAZ6MYWv5W7ABnrM2HoPFhH3zW4RonMBuxdzgTn3WKSig7W41URDr",
  "key46": "5CF7y1KTzEw4PGoyTQqdPTVstueAsGL1X5tFkYzfaDqjX74VqeBfAL6uvhn4wP88ofDj4UzWJSAaz8FsUEbffFwd",
  "key47": "8pDDGbMN4HJkPbLKwGwyEXwUg6Stz8vKG4XAhLNXvBL63NsHBqKSXzHcYhuZ8Cdo9FuHd8FwH3HkEkk6iQkSuvf",
  "key48": "31DJuz4s5RfsF2cChPU9FSqZoV3Nhi2ki3NgyxQtwFMF6bBGofsq4Bh38Y7ntrQzUW1Zpj7j5cr1S7s4nJYELTHw"
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
