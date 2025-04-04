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
    "E87yfEJGsoWUZCoBQ8BbKvWypJmY2vaPmhjLHK3wxPiNM4CSsRKE6zvoZefhrRHhVgKArRTxBhEHxQdh9vnUhVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dxHq8x4r1MtzbxGfHtDgw54QFcSKhmdcUkNcHC2QVMyWsDbt9ydR3UXAGcFtDiyFVsFC9pB3ZhTRDwqf6dduLJr",
  "key1": "2Vzr6eY95AyVCTcbqaZfaKgfgwoe6Hq7prFi95Y7MJkGoHbw2iBGABpuCbUTeV81aGerNPTGJ1p9SLgM7TyBgTVT",
  "key2": "2gdz4fket6poC5wjhErUPhtsMRbesBNBKvxeDVwbWkTY9swDvA7XoHaywJLRrMkoE6Q526Wk5X7ieoSZ9gipau5v",
  "key3": "4mdURUZCcBgYnmstQ9MVnrfXZzJDAhk72eBfq8aMWxuyYB2CzZiPfCkiThET9dXm6KvvkXYpWrk7GxBaPUShfKdT",
  "key4": "3CkMyZzrRsgsenooAFRLWPehyDrYSNsGkVRcbpWjUd8GJ78snuzW2NrpWbPeMJamq6tQNhBSV4jA3Hfowp3f2dNE",
  "key5": "2XYaU9Bx6xDjByCSCxVZQqkTCa6VLkm9JTMmk45PFy1JHosn2YRujVVTFKzPPrHjS9hJB1XSe26DKQd4fymTvpEP",
  "key6": "yy1YojYScUdb61hPbTRPagpEaWgwb514DyVTkfedeXwQuMf72WQdT4cbGXzxboMgxCkyWMEY5fU8zyKbZxVsqfg",
  "key7": "59FBoLLSGacBCeSyrnt45cxoAu17hJCFzLeaRCiDk4Lh3BPjRHGvCxXSuFfxMkuhjFeeVGuLUKR81KwZUGMHwqqb",
  "key8": "2SqxGxVB1BnQnim1nAEKa3dZUZdBG7mzEdVqog6wW7zisXChDPBUyx7YZrca4XYDtDh71fJH2oFgduRSaMGKyRnL",
  "key9": "2U9oq7FPf84BcBvFoQKBX7EJrkhJS6m81GUryUheuPffG8gHVDvw9fQpHSh8dAJnbMHAGoWUexd6CAHdyG8JSeXT",
  "key10": "P9iAvxp5k4Tb9kV1CfDxTGkpm4a4DEayYZyrAj46grcrkncaAdMJzqfesvm7cZGp6XYTDSPaJ8fq9c4mmNfc7ti",
  "key11": "3qoDAZ3xgpChHi9iYRARtrMiyfnwyZGkvd64fiwwNRJWdk22eNZrT9mRYLRQAXTDbWR7Zrp7JRD8HmUj8AgdQiBF",
  "key12": "57pTjzzXDdBEy4VrQueXWqCFesLvtyeFFEyvuBMixHc8pJczB4X2BurQDXGSqK9U6HVeoWUUvXzdaQ2PTcFvypCk",
  "key13": "5ip2jcFnysHSsePSHPjQqDrPbdGebMd46GJgcqreYJfTrMC2jQcKrnxn9jtAThJDYkXkBM1S3E3z1tUj6W3eWcnc",
  "key14": "5P3FwAEbvuW9NwLw3NKfyAQ9PZxyiyR7mYzUFBRGRYeVvGXwQGcNJjXAmJSiyyYUJEYZ6Bi8U9d6intwFBRGaRvz",
  "key15": "36XKZVcxELW855yYWHnr4dprEU94bf54vppH9VqfyH7TfX2N5PNMvSraMTXsA2mhhDbGJtjAGqkCuP3oRGZFeqns",
  "key16": "2Rx7PzzdjFefo8NP9CnQjfWK3nRkHbkK3bLfUmAhqAUnW6LyJawRJMiemSjttLGZGtfD7QYv7sWi3uDwaNTXQWne",
  "key17": "3mdTRGVQ9XRQMSgnCbLKPXdn2NUMFjnMdcQtTHC2EnaZanSf6rFUfR4ZvuZZ7m6MNgJdxv8Bf6jbKtBQSjrvogNt",
  "key18": "3wFPke75zoxmsnSiEv8v3nZBVLZoStPpjXdYnZtKTDF55PkUFnQFt96Xu8KpgaAG9c2maVz5aEHVnB4jsoxCz8Fp",
  "key19": "2Z4Dr2XGXqfuBKXwG4UYSqqCyXDcwQm98r7GBMa8bSuEnp2nSTR8q3uQ7XtWNPpZjyUhoCPL4FoaWrstNdQ1EkGJ",
  "key20": "4ks7q7ESNmo9dtFKhvGss6RQ1TBu9ikzrBT4VGKnQmk9vVgA3C6FLi9XjWZA8jEticuwJfRdVHjgq7HtGfeFii2G",
  "key21": "41CAcougsBw2t9s1SQEujmT1bPMDVoFEucGus1nSDCSZhdM6UaHTSDdwLvae8mAigff8ifwzGTqoSpdd7F36m1Er",
  "key22": "5YvpRYMr7WcWNHMCL8FA771fhCwRrJD8ZTjCLVBd9Sxw6GqCECGgqShLtzaXU2Vw2GJbcvdapQ7g1WSsLcm9FUzH",
  "key23": "3sFL18C8Ej4D2nJ7zVBsfi9zR75wS4QTgNRFe99D6ze2konRzZSbAZdresVVy1K3xc3D5zmw3MRhxEPMMNCjQDDV",
  "key24": "4hmgtBPitrsdxfAo1tw3t6c5jcAN9Avux953WPaipVLmagZGbNRYhD57o8DpcacwG2mJAtwba5KJdEYF6hLtbrrK",
  "key25": "pGeqCDrEaZo7ASzhofCnfDgxXX3rzUYQorNyAhvCzHYPH6S5LBAumPK5MfudVieH2Rh3Q5SfadqzKF5Chicunxi",
  "key26": "5th8MGWSA8ury5oboFjgyn5Bgz6FT7XgmMc4Mg41PNguAoLSDMtGv5GXZZ1ySfMvV9Ujysp36ySRyjdgoNuZMAFy",
  "key27": "548SXpNyPR7YdNCa1YcCkEHPW4sZDbxZtazCYH9EJFXgyhmF5jzD7KVs9AGxp59Q7R7kjbdezN6TxU4X6GFgqrTD",
  "key28": "64LTVB7X1DrisBdpPRVJy8Wh2dENi9BjPY5WuEsSXmZZMPK4a7zLyZcNhEwAhRT9tWHPcy8sNF4iELg12mVmpdTG",
  "key29": "3BSL6V7Mv9ZaTtAb8Z2ZbDYuXbZywYdxmhJSGz8STSbxVvxpGBARSfZ9qKTn5RFaCXqFopusK6cb61Qu98Yekhov",
  "key30": "61SCCnSBsD4Y5b1D2eshoW2jidtvkjdA5mZc4MsjHkUJr4RjUhZ6w85VoeXehCTtzb4H126vSEFoNmxCyWZP5GQ3",
  "key31": "3v7w4xVRKfk69oMuZV2Dy3q95sv86PeD5kwF7DioX6eY2SsfC7rc699JaMsUPEAPkFEyYfAZeJe2KnWAZxs36JBt",
  "key32": "418gN8rEogftbSG6xGyYMXHaiEnozcqEXBKEJU5LQ9L4c192KRu3nb2SztPTA33mfkeksVww2dzjsPkcakb6rVBA",
  "key33": "2vwXDaHPqpqEh5Y2MxV5uGceHnALpD5fSC7ebKSuCqHz55saSQQPSJ2Y1MYgqKUu8MYZcWqzYETN4ggKRtPmdbzU",
  "key34": "3E5hYy6BHW2bkKVQQJpukLMuzPF4QijoTBosqbMiubDGTJ4HmyPjSiiFcF3BMNL1mTrA72h4MTqTx8TcNU4p73Pi",
  "key35": "H8eddmcRA3JQPvd6dfuc1b9ZRPRKheTdz1HHxJ4RLmk1XNKai7upqAYwQmHkGqgLRSCsZs5gKpPiKLpq7ce6GEd",
  "key36": "1V4gd5YHDgvDjhFUAhAEX6gTBvPV6TgtAd5GsCX5XpLHa2Uw5YEXgT3gxmHykHWE3Yim4VgRMo7vdYHhvYVsHkW",
  "key37": "RtWA11eJrFsm19L6NbBSTcujd4vy91dfmYWrdczUakjWa3cjvGU5aChRux1Gguk2u5mu1kYRcjtA7sj2jZEHp8P",
  "key38": "wb2NHiwzWtYtDQSQqPM1wsiWd8yn1vnQf8Y7615a7CS18SQoJJJf4NgYRq2LpoRCZ2Zna5h2PqfdmpyduKBofTM",
  "key39": "VdR9L24CxjxHijniC8KPcWa58RC57bttmP55YGbDUwcQRNW6SYHzjYqv9yK88UP96Dof7yXCVi9cP5y36E63uLe",
  "key40": "3QRxB8ai3rkvKeJqM4fyag1jWKt1xAaM3A6GZnURdcU4uxY7twS8PKHETEa51xbUMgJ2pWuGuWxUQ4y3vFVhBzyH",
  "key41": "2fHh6wHx2sVXkV5mmxrmTRJ95aLyi1pLVPrQN6EjDUsXWG7w4vcpiGfC9mEm63fd3iwyq7x9XabjHY3Swkh9N45L",
  "key42": "5WBtezg2EUfgjQ337LxwSYc8DovsjDixQk17V33APCo3CQrfXDgPnjFHd3TYuofudJie6ynuhKkta1181NhwqEFG",
  "key43": "3DGJGZLtfdN8DZ8jZny7srCobV5FRzTUykxKtmDQ9VDUX6LqXmG1CAtiFzyVfBuWZmw6n24L1v8p1xMKyqHEzu6W",
  "key44": "5f5w2R1F5swenCK8xkQq8TnmeCUNjgLhCNWcrLLLumhULCzou6Eb2JTybfYh9ztpaXhUssL61mRLh6sTu4RG6kXW",
  "key45": "yJWoxFtwYdbu1RVMxgetfUmVTgCBjkactzx9PWKNay14XU3zWZjfcwaTtP5RtNcgvEQcinNreeh8hqCeAarzkBJ",
  "key46": "2hzsxZDktuG9dxqKi1Yhn3jwvtB11G5oF9wxq8mWvE81paxTbYeN75bSZBU4hM84Mp7yFmgycqjwk5MMYZ3YzfjL",
  "key47": "4f4wMvdpH955j8P8gZHNaqpXWvmkGjgXLpcZv3R1Zorry8uo4q5FdTDGQpNjz3CPk4MUMUYRYEQ3psnKX6Hkc49K",
  "key48": "LtYPoAiexB5aYHD6ErVLH5DbiapYQvAbaoHf6E9ptZuvq2eBFD5tJKrynzRQW3n4KKverCSkF2hNP3qq88vThPC"
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
