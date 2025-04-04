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
    "2p2N7DYtZAjLsGRP9Z7pTSVCAQdLVMq1MbBzPFg1sAc9jWJMUp72BETCLnsze2fDBsY6XQW1wjkwiJL29NRYC9wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dRuHdhfAVG4HWirNzczZp1YWMVEuLCDxd4vBJPdHDeo7QTWTuTCT8S3mG4wSH2JxSkLtXNMAamavzsRLNBkFHDG",
  "key1": "46kHPj6qgNGwtdVkfnz9QXync8W8kA5QwAt7qEUn731igNsRtbkGNKGDRLugM5vAeRKapfovnvHqdwaGRho7UoRr",
  "key2": "pc6QkxE6P3Pgd31fJR3cF3YgWnyeXWSBDwDYEkDRyhSvuxxpk8aiGwVR3xD6GzhW1LA9YviujjCwgdmG5zLg9zo",
  "key3": "Xq2cgx1AUKLEgZotoWA4ykxunHX2KkWvftqTZJ6VZsTEY6ZgJ9MiPCdAvuZD9Vm95zT2Q1hVdkj2gxWek4tXVpg",
  "key4": "4CoRqyMKnRgxzsCYY35ewj32QgwZz6ZaZF5NasKrXS65ifVxFjQbbgscJ1dTdVt2rTAEMW5oVW97BR3MBcbzCJhu",
  "key5": "3JasUQVjHM2ca4M9Cj2GFfpwXJ3h95En8ja3JupCDW6tJDm5STYSoE2cjQZXtMtxPtd9zBn39so8ScRroRRAzUz5",
  "key6": "4aDTeMXS1TEnB9dyM6rvzoDg3yj5iQZvCkL6HU5eTk4CCY8wC8AjRJecf4NdHc2DozNwqZcwSGshewXRjdazXavD",
  "key7": "492E6LSURbvqM81LUu6vsh3SPuCXkto3sZqJ6zYgrZDjrpZhAd6xiaL76WoVxopjbhQ5s36hGQ6NfcLMxFBywNha",
  "key8": "129c6ByHrodJFHcAi6U1u9nG2FtJJHiEUi88k7vbofo4gEpQTfKZEiqwH3kGDhSEB4DDyhREcZPQwhtmkn4pvEEn",
  "key9": "mXnVMpGSxKt1atkGVCt2C2bZzfxwHdroV7DhHkHzyrtDmcQDSsozEbkMhSmQ9ygt7BYzmN7aWty4bGQffJMuiYc",
  "key10": "2X5UkQ2MVwCNkSN7iw2g8CA5at8qQ74Wbrha2Ey186VXQSfCDE8x9fawUtW1aGLhNEgqvXeTRvYxpDJqtVNTqSmN",
  "key11": "2R6RWheeedEWfaEmoRD8duz7MRsxcpGRqvXnvidifj4VMTY49RFKytoTPn4AvCFepGt1foyfHgoLj8jFdofar74E",
  "key12": "47nKMvSZhnXF11nKBrWMahZnHu47uXdSpwJYvhgQpqWxpRsgyzAA8W8yYRmEc4hfWmVph991R2FsbVxdx58r5WBZ",
  "key13": "5xg6fwVKgtq3jHKbpEZcV7hCSXp958dxU1qGqzFQPx1Uw62cxgTyXaJdWdRQMcQHLK3PJoSnRwo8BE62VHiDz42K",
  "key14": "5cN5zFawEfNCNpCsunPgMMJS9Voh5Li5ueYoKTGxYvvcNKmj2JotmZGrh6pLBCvnu9THnBoTXL95xGNcC8vWMA1c",
  "key15": "3mSGfyP7kz3mJtep9C5Lvso76FUumF5o9NgHK7rsqNHxh1aFJf9RoiETdRHCMzjguM73Va1uztGP19NYcbdiQF9",
  "key16": "YoGezCxFxyBQhxMjS6yaeqMfFwLvfTnX35NfgWTMTHsEcgqyz9WsuNENPfGLnYNKVwQcLucPE6DnZg5PGvmguWJ",
  "key17": "4kC5SJGqQ3pgFdoDoivzjtyG9dsfEaAjhPRXHsYSzJN4fMwDXRZx6AmMgF7QtFgSjz2vqAxbWXJdvTiBtvTcNLXy",
  "key18": "4X5MYLJV1mjQ9Aam3crkoMW1RrJhj56BWJNoxPGNiiCMNPHASPLBnMQZL3jcUZ6bNjic5a4KDxLyvXz5nUYmFUxY",
  "key19": "s6SgFwBaam7yedPYEBmXyzREQmZYkiTAFV1Ra5YzVfzbUfuSve3cKkXSGRYmM79FKJmjFGyTm1ojQ6zdsoXSRX3",
  "key20": "5f7RNUSZhwymZ13AZE9FwvEdXndMKWwfhzorufaeUTPKVF1ZTiLEyYe9yFfL3jEZ2KBq8Fm94MNAKvd71fADPmgM",
  "key21": "4VcQty1nAPUUgJMCd6poq1VRfTvm1DXeu4H2ocwX1rDBkuWRrjDcgmgt8WqCMyr1s1mWMbMCjmZmepBfbQxbhU3h",
  "key22": "mnoRFHJG67aCm1VpSEjchEDpruXgittaTkrsNkHrsnRVeoKpUYJo1XhYNs6UjVcT2wQB42BaKEv2TgSV2uYdshF",
  "key23": "21GiAGuSY7qPhTxV6T5nPryxBnP3nbzeGuijhVyTADLocQzJuUSzAyCfzyNZMQUD9RNRVGP3tKE5jetrafUzJoeD",
  "key24": "2R99PuSiuM5ktyAnsjyfh11dTr2j6n91B5VrMyhrz9GyiHukxYJqBEHQmpxSJAxXD3YBoqnY2MoL3sKqqYzCAdt1",
  "key25": "4d4Ai5ns86Kmbw2mnLZ13hfYWL4X19sYrdhBuLUE4bqQxJXsqfFoG2JKTnipyc7f5LQskahdqbn7oYWSXKqAxwHk",
  "key26": "5A3eBxczueqriP5z32UoiH6kRkTgXSZnu3MwyJSWLTMto32BhFbiYgyBebxTsmitoxTJHnQzD2jacCifkfFByU5j",
  "key27": "65FrASUTSF9Xt8ZhknTrQYVTEni5XAF3jfykXsoz2J2tnkyZH2pJFko3rT1SkmqW9XTjVnCNVCSi98cdnEa2gebj",
  "key28": "zuUqVdappFc6tgVeRGkV8UwZjMfXvwDH3MxVLfuYMTKvrYe4kkUfrEFvihCLpd8isYfZzrjRMjpb37DMBEaxsBu",
  "key29": "39rcxxYFxxQp4MPtCSbChYYuYetuLj6YEXSkUhPUyRNn5Z9KMj2sDYQEYxiqNrw5gW7cXcP65Esuu8hCRwsCnfMf",
  "key30": "2a7LWgxQRMejCkSVHgrvncnJzT1CQXPSXX2VWXUYmneaDbzvohhbjp39uGDZbR2dwskvoKH8R7DckhrCTzZ1N42h",
  "key31": "2mskRph3VLH12mQWZCR5XiRJwNY9jee831U8g71Y8oq4RL9PVyywYEQzWSygetiHbCxnQV2oUNAairx1gKKtZMq6",
  "key32": "2gjCwBDrXGDqrA2CB5jsV4jSYcoGvVw5zHZQ3bchm6vHAZMihZCrhpGNjDoJqaAVFggrv2nfzMC1keT5JZeMh22i",
  "key33": "5C18eETEJHX6HcZB7aTZAA7wxs9Bgp1XMKXXAkZUxneKPvRABoLJJcuW9ouVn5XQ5axZC5zKycYTuA1mnGvt9VPR",
  "key34": "4SdxSSZK4jK7c3ffkb19m6W1gDVKGBe4NE39oLhMbv57x4Su3afPdSpQBLxzwgd1wNE9xJDQwR7PkYyXtc7XbCm7",
  "key35": "5dTDXwMcZ5LeJ35Gw1e7ZjvmV7VEpYGXhSDRXuxwNYSnmeC2BV2PiDB8DpKP2QpboGVAHAdMZX1vh37T7Hf99TLr",
  "key36": "tCBp52cWrs4bAtP31atSjHoGs1wfhsxDZ2X53jsG2KrgWt1xVHQj636pCRusN6J2qBvSfdxucc8zzyKzy2Rz9ts",
  "key37": "3xozVKMBgkANzpzLQQ2wbYP7djoDdioXXJHqL1XzZATziqXCFcX2NEaRsZvWUF7VECaZ8y4XkD3d7NtCZfwpHH8Z",
  "key38": "RsRvZT8K5NpepkdsPzSMyHziM6osmaKgrcppKUV4gk9jEcSDmjfgfZTGzyiPB3WzoDzAhaeT84H2kKgnCR2h2n7",
  "key39": "5w16GW4kMJjzMs8zxKVzfXL5M1HrSprjfTcFbBi4B34Yw2zcztC1erCyji9MXTA5JW8j5Z55Ai8MhbvbXnS4iRC2",
  "key40": "bVcLu6RdViN7wbS2erHFdhuHKP6TSkwFeK8kosEDSQFYckqBV4NQW5cvJLmztC9sDAbpgb5DdnHrJ23tHKWHkmf",
  "key41": "2EGGkrNKDBBJcXAugx1YPPfgQvGsbDNgmgfL1j95DTVfkfPqWFQz4Eaf5nqFPFwEMg8VgQe8rUpekMegqfn2E8Kv",
  "key42": "632ad29QL6ssuLzG8RJNFrMZTB1VnXE2ADj8Qmoia6kLvvXY1dUVRiNsYFaKYzyRwsdtc2qKxZZvCMc2DLEmncTN",
  "key43": "4agt9q1mLHjkbCgMxSwfgcRgquYzpqZJiGcQiV9wKCHBPHzaxGiEn2gocygDCpdmroakq6u3Mb6wUKfCrj5gs6pN",
  "key44": "5s12CxT6FEdHxC9s5NPPZMoMoJzGMePpqi7HwUZqw3FKnuax8ESetwPJ9UYot2KnWq97Ewiq5nV1muG24ZA1Ugx5",
  "key45": "4bQMDyB8jEXsQFKWRH5zsUAtMUiAmtmPSukvWQ9NAYkAYw84iNdn5f8PrRRhfF1SwS2Muq8VwF11bMH48BFoyCzQ",
  "key46": "4tx2CMAA5jWzNRcirSx2RXqe5VQgPX1chUtW5q6mBhYtUW3sSRDseFf4U7KJNFmZH8zeukJZDy7nDEVVVwGDWmZy",
  "key47": "5hdtALRM3Kr2yL99WkYqpV2BbGUJCfBdFSLtQKwJ7foCoTwsZPi7ka75cyNsNBxMjRhNZyZj3KCmQvKqmT3cgdGy",
  "key48": "4cCffkDhqEmzkiRP29KhhpnshnGf5DMKt9dujFToxekbjKaHwnu1TGX2frYgxWawJzMwW2w5jcSKCGeyUzAoHrTL",
  "key49": "5nT1h4ZMjTXWJSVZQGWFzm1sw8bKFmBo8rMoer3AZWFAYF7M7yDqYaikeXXYVFd4Kq3r5r5BmnTGewDfQtsCigYF"
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
