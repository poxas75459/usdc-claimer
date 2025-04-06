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
    "h19f4HevrFtGJFToGyf28rXgrB4r3HmWuT7TFqS9h6X9PQAq2vxon6HzWDHwxjzu9U4GnPJgUWSXJBfueSjoBSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D463fvneihzApRAtbC3MngEgFXsx3EXHdwD8DrhynDhaBtxvVvrX9CaZx8yKHPyZayCuPZvJS6GEjskjEEQTknY",
  "key1": "59JWn6QTqaxnNhWD4PHvYdYzpAetgSUrD5sW4woqrjvpHbBhER3sosLtGgxaV4Q8SkKA5YP7NRazooLDeqoL6HwY",
  "key2": "5N8m9WAnTNR4trmvd74g774fZZ88vJ7jdKuWvdZcxWb9kPeJZ4sC5m3e4hay9od8ukhSYadDS59wyVURFbS4GSwY",
  "key3": "5NTzpnfkjZ2qxtPwB47WsunBRxEmyuA6bVHbhC14MAn6YL5jLhWAraWeT9wgZevyiqXdxLc5U5hFcTQBmXdSQP92",
  "key4": "5K9fgeNAtbG7pzJt2heYZKFRMsPRpTZwd4TZpyvYRkDN4zVDmeMSsg53aUiAUW9W2Ca3xkQBGNsSCupZrAzii9XQ",
  "key5": "44FNgzvqm4Nnt3DWUKNHPak13nv3gBmM9vUPyGvadF4CVNkkeQjoiKXEdmonoiMv2FXWBQ8uJj6mAPRj5iqumGin",
  "key6": "2H1gnVp96aXjUmvTofZHS7K41eQbfJ1V5TmNgqJDC5W6zeTyKb4HAaQkRzwig3jgtaRFoGW7AopAxhLNN3cRZ9JV",
  "key7": "4gWTE1TR8apYZsveoSAdGNWTAgCeGS768JkJa1JGc1dKB6NVRtX2iyq3eFqZeFz1pT3gC2eSrgmqECfNr2koD4iR",
  "key8": "3B2photLJLxqPbtTc7L7X3QWR192ARna3qPwnW26wk9KbMEotvKFCZYFjggczy9w1nCX5Uq7twwSwmMkMzztWuoc",
  "key9": "5WF3tmyBHuPQ7ykdiMrM2VBL1Cknctvx3WgbrMVVyf2w6WCEXYTRLsRk4dEB2He7ovDrSNCgfdKks5gF6bbG28Ga",
  "key10": "527eDqsCaCaWnYGHUuuqDfBEy6Qj9FA4NLeDvuhhvmTsT8EhHZYg27o4GwfMmw2SM3wyDR1vFS2CMabijaBC2GVt",
  "key11": "57y6h9jBFtWbVneR9UwVpndumH1VcCjWKsuLyRdfrC5DaTcVEGnpLdWWBtUue75xbs5BojqAHrLaos2UeYnRztU9",
  "key12": "2mbBq8E7QJLn2oyKf5TY6dKWiSxyfSEBvoS2h5m9NWgfKKYipDVb5DVeGkQQ2iSghgxyxEKq9kLYgx659PiyLwib",
  "key13": "64nxeDYvKATZZctQt3wWKUAVm9e65YGHfnAruYB7WB3uDsbmtYK4b7dNwXC69mkDdzFY53vy6R9Pi187ggMh3KhN",
  "key14": "e8CsffaBPe6XTv4ArJamVDtgiS6k11w7NJBL39vVw4Gpg5tbubxShf64NmxK6HW4NB69hcVyDZfzW2tA7djHYWX",
  "key15": "wyHXGWRXc2eiaCVmUXSrRoRhhETbctF1FoQPrF4tA5nCkau7i3DRmJFLY7Ni1AgRp7BRTB3wkZN9W9RWRLSWrja",
  "key16": "2crC1xZcfDtHe7LmQrHMe9SESZi9mDm6mqN8QU4FByd1XtH2FFTtowDXdn62LtLKeZUmUT1cZvnWU4K4ybGbS5uQ",
  "key17": "2gCGo6Vr9kGgBuX14pTpzbKLbu1CGgCJVbczZ8hiVr3gJ7hh5cBZ5zmfrSAuXx7zcZUJb4PL41rWoBLGfALvYeLf",
  "key18": "sGbSa63gwnTUVJiSVnQCDnFwMqNQkDLSykNsFsgVadBDWpmi6Y5aE9YuyZJTdaNeMXGAeTfVoEbtVuQj7zpeNLk",
  "key19": "5tZnykFcZrBr1z2HsMFxAqKZDrFsuoYzJeh68R6VuxKWk4pzo9WLkwC5CsagTzSNz9T1Ttc1LJo5caGtjfCnutDA",
  "key20": "AGnAKKyxrbihCsc9F8iDeYDq1gGJKJkDq9yAqWc8h2zcai4RWzBWDzgPBSS3GZTKjkWx8vm1W68k3TCMubKu7ku",
  "key21": "5mvTCXDwL8gpTB2TGE8GFCjJE4ftvPTfx1Sns5vfvZK9cXB7cKgDmeocQxkcxkuMa4jsn3XG9JeFoMBww3Quahjp",
  "key22": "6258nbXV6tt9wdRGYkeb9ZXDQZQqp94eZAG8ww6KJHiasyJgHSvvWAKU6ZYp3tqx9rdUko74ZpTHm14ZLUeV8kEB",
  "key23": "2aBaSMCtSMv3EqFB6YDasqnRyWjJGU6iFyqv2ffjd9UEch32oEhf2s4ZzWFeH3KdgVTiqEGeRLdP1e2hf7hDwzYN",
  "key24": "2wUybNgv7w6RNaDnhi66XyZmyy6jQ4Z4MswuzAGENKEtXboYJpb4qgQUX1BvSLCzD4yUsod2ToWBc4MEs7DAJoqr",
  "key25": "5KhvWeMzWmh5W7DhXdVRHnyWCPHBYpMT6WzoVCw2PVtYcm994TBM3pmtu97gmhTq2QYutx1kJwezv66m4qPMhVCT",
  "key26": "eDg6jajXHQ3CK6zyp8qVWBeQJZ4vDKasvhChWphfo8asPVXf2axohAJjsKeLeS4vfiigQcHg14CgYYhacNfxtzv",
  "key27": "2Nzq3biV777gzaR1Z26sDtxgv2SxNxvDMeDMEqg2LXzUL2RXi91VsSt2142RSNz3s1MC64aNwXUAPteN5ts8BZUL",
  "key28": "2GkUUraJGPtauV3LBTphautxxdV21qyaLgAGc1erzt1qfxTWKCEyuVXcui1x6fLNg339V767Dbon7DWvKbjYUWtV",
  "key29": "5gDUyYNbZj6mzPrc2HhJhdx2fszHVA9es87W7ZoMYfH8AxAKcutoQzPPFdEwEoyuZm8Xphf6gzS2WWH9tsY7kQYg",
  "key30": "4yTevTwiWSB6NtumfgSd6PDHw2uGRawjDctBtwAnrzZ47rDu3vu2MfMivZX6JpYFFEvBeC764a2AsxoepxMLBr25",
  "key31": "48NvzD4Jtnfqwo7jNYob69VikFDR3BiLsv9jp2hAge4RFYsqXjU8dsukXSLw55yHPF4wJnAFavDqGrEbb8aVcUgU",
  "key32": "Pq1TYTKrtQmN6cKRCgL5zGFXxMDkzum9mHNnegGNJ2tAmrYueGe6LLyrHHm1Jn7XoKwniB7F3P4PdTK5EuTojrk",
  "key33": "2mGwG73XBfxQPAsDFB1HNiaNTGiUDQxsTQPz7j3GuiF1nyfC1afZVZY6PjAgqU8CK1z5LZdKbRpNCN1aLNs46wSK",
  "key34": "3MmHpG41PqRLkbUcpm3KUtPVTNVjiaaPnDHPkN8Th27b3Wtc3Ugf2jVaRwAJFNMuzMNpCd9A3tzgyPdAVJSCy9nx",
  "key35": "2bAABG5Mb3EGzuW5ZgnoK6dnPdbMY5c8tAi6hFV789pyh94uxEQZFmPrtjBt1HvWLTpmxLcUqdJmF8mTbzRvaaSs",
  "key36": "4dNJgHvQ9QXuNzPpZh94SCtHVx8TYvLB4viRSqa61Lwnhrn76rMZibLp2oTDrMjx3RHetGnRsL45JF7697VpZ1ie",
  "key37": "4M8YKi8rDeAtkAogQr89mbSyVYW99Dtn6XSChpLVeaLhDFTg8pMTzuhcR6uGrGatedaQBDr7VVpmv2fzgUau1BVt",
  "key38": "2S6WS3cFUU6wiKMGPkK4FACsx5fWc3VsdhptZLfz3s7sENyax1qq9nUtkYUgZfsWrRDXfeZZ3aqP5DTMYxMATu74",
  "key39": "5nQpMD4nh7FuMVEayWnaWkRkEeybq1VVy6gtrBcvd44pTbEix42x7gGEfCZGDSeBQFiUHxzoBtzVWaHPS7EvKK7H",
  "key40": "3AVrWKxSKuy2UVF5WPJcaefxf8bjuwQzpyaYw1xac37dPjgafFucLobmPFNk1dsnER7A3gH2C1hDAp8PPptkWMjQ",
  "key41": "4EgMWcb4d45x3TMJgAs4ynFLWv7jTYwYdxZkfpVsCJwZ47L4TE6UYosHpPKAH7ktoS9UTf27khmrv2DiPWQ1czBK",
  "key42": "M4jRpLUuMBbCa8eVpTFEE4tvvpKRRaJVcim62ZqzfmxmdJf3JsqZdbkeUKyQiquptCuLooAqCwW14YWxoWER9Xw",
  "key43": "4gM2ZBSdpU6rHyPvaw73PvTYC8wfuUxjMxyUTQqUzh8gk7iHWfFhZ1pjDZqNfGiiVt4UsdrZsVdJWqLwh4EtDag",
  "key44": "33c8sibvDQPBhRtqJmBBaxHuYdpVfmfkW4ktqHb1puEpj2Ur9F8zeXsKNf5byQqA48JHb9QUduXhsFyYpnu3LNmy",
  "key45": "47H7342Pkhj6FJVUpmChYhDQkDCkzz2bdrTrXzv51fpvyLQmFoY3xY1YvVzEsRVaePcLx4Fp39cZtk6Ps3gcuHTP",
  "key46": "568W67wKvsqNG9Fdfzb8Y4hDQNkcUi8J9YAEQivZpXL4Uhf3728ASNV5wqnuy9aLPiArWvnKaBtm4uw6k8F3gzN",
  "key47": "3ghXqSVNashYGPTeH4A5MWiJeNYsNg6E3gf7VgTh813Jdq9iMz375a2w3Uq3gd4XLnAVcaV8wkUWxcrxjaCuGbxU"
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
