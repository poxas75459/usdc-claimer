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
    "2WXWJGWdqMnDQDchjeyCBo7YPxf8PN9nCogDaU9CS8excEWSnDK4MCWrosxw57Wwz92wHyn1jmd1TYm2zWyGpNok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mrcpfgRCK1zqceR8ydoQnCFi3nSdj8Bw7VYv1Ro89ryL2E3XB7FxYb4VfsCTcqRY7XFaSP6dpFn43u2zVifgpTc",
  "key1": "3b848D3DSoc8PeJZwXY5iWpaoHkWTdLE8B6Y1oUM29fJ5JF9X8oLctHrSzTNsDoe1UwRGLRFj4skzE3X6MkSS3Le",
  "key2": "4jzJ2MftDpHB3dizWZCvCqCbLdZHGhLoTS6TYhz2s8vofv3DaiP9LPqbFEJWtsEAhXmfLiVXtjLGGWec2h97gCBz",
  "key3": "22ngj5mWHYq5XhfjfA7pRjULaK1PHuUj7kRhRCx9shGuUY1JaJWcWB39EVatnsrLEAtjLFPtMGJZzAEmMVLwQXLY",
  "key4": "hjrAEjrwTW1u3xRrDLtXva1p5m4vBakv8pVCoMJWt1Pezr49bXBSk4o8nyU39DWrJciqwaDtaBw5wKiFnq1Zy67",
  "key5": "pmjSuAmhPQoxe88CD8TYi7dJGykkRCLsHZN4iDQJExotAGNkUhETgKfioGPbvkWK9hmVkH5D47R9yKgbxFFSGvX",
  "key6": "24gQopd8T28cq64sr9KErbSp6JgVSgzsjzfNYkSnx1CoCeWvF6z2LLmj1wtkruaoeuG7NdmaCbzmFH7t22Yez7oS",
  "key7": "5819oz1SKaUP5PNSh2tuPZs7dq3jX2pbaX6BUTm6LMACcSKxbo4mN4QN4LFgtDRKCckiLzF252VAWounjZd7Etf9",
  "key8": "4T3oLJse6FPhcciWzBZhLTzd36KFiN3N66SYhNwNuzULKPRa27Bn8WibanxaoBobJXkJDn7sUpQs7C2ngbJhsNgL",
  "key9": "645LSuFLncW5W8SULxxnwqe9ubBWswiusx5a9t2KF2dNJNj3mXL2cMexK39dsJ6xy3rMqG1RtDVU1BRdksfb8xiw",
  "key10": "AiqWgGCgYm2J5S7kTXKKBE2Cw5RHqm5p7nWCfC64yMz331yEPV2VjANFjwN4ye2ZBJputEYjAM451RuLJ64g9gt",
  "key11": "5mQcEmpTy7wHsWA6xRehm1FmbZwmg5CgeCBzu4hXxqWTvkHRg7YkGcCxbAn9dyGY6CVnNgfJfq8rSnWtHXEtQe5y",
  "key12": "67746NaY1wz1GniJWs8YEpWJ6jahpg9UTL8sqXpsBvvqc5MdCDYYcJU6YLiPqs7J3azHXwusEdiYcYDCyBFccH9c",
  "key13": "26cvmggWhNFRSanAAGZarT2789MNZfNjcCXR36GF9jpSL1azFzCarxVmKWyzTfoPq42pUrB3rBYRuV4u7o14QdEy",
  "key14": "62sZzjpyFdfWWQ6MtJdEHshzv8kXuJ7VWv9JzsBhract9jHcfyTdttMATw72ySoe2KhSbB2eivX5uSwfzZrL6Yrq",
  "key15": "5FaS39t2ueeEqWixZZmrm7PREwcAhvSkFW6tuEky4XqWS67hC5znDMQvpo3YUduLpFuszyYKkoFTvaRm8AWjCQNi",
  "key16": "xtq4xXqAFCA6rhrfHCCrkD71Kigp1fi4Yjfb7nq3oc7rKTVhFxqRYJjgeJ28jGDRrznpuBUWaUCcozxLuZ91gS3",
  "key17": "264X53kynxUGiWKY8x1txz7dtUszdHV5ouEXYaiko6Du1gQgH1dcV7VdVDNjD1B7WFfh9hTf8GpPEWRSYSAN3xs2",
  "key18": "67R1yQAxA9he1fMJX63XLN7yykqpKirNsU2HfRjkHMPudiY7NbhAjh6WR4pHQPQSVsx2v2P2CW35fJiNDWDzNdgJ",
  "key19": "4mscgGebj6hGZ7Tqu5ry3eBBMQntir5jVKYfknpNAH7JJVndTSBtZCn4pEKKEP1RcXN5rpTxpuksuud9jbRx73kw",
  "key20": "2WkasBvTcrEZWb2abP6z7Lpj7RVNxSSgp4xg9S1sGfXoRijkjx6KGUTZzdeHTqGAyftPsVaHKRZThHs866yojRqq",
  "key21": "2diN1yrmTRKAe2RgWm33nvVVXe7M8B8sUiQcy4Tvon33UbpzCbuyS626SpApJXnou1fQJiWaoeMCsqgUfgMdgZqe",
  "key22": "5f9B6fU8UYdi8BWQcDcsQyJchFrF3hQBLT1i9Sa8dP2JfcoM6tZXLTBkJRLZi1ByTcaf9AL1GV66FeB28fJtb4Rj",
  "key23": "5onjog7Jk7ghjNeFBJXQZfSH9A5Y9RbnWh4hae8DdAd3qvNKePhqnTDCwW7weaxAdsHGSYmaFkj3muTSKFtR969t",
  "key24": "4sRF27CFfXqMZXduwZ4bMyRJHsuaig3zyayiz7hNEugmSkfZUb2EL9CHaKwhtSjjjUNPVV7BAZhDZw1skYCU1ywA",
  "key25": "2w5zRif2mK9pDJ66tAJtQJS7TP7tH73MXTVtGG7hBWYADhxZtowwPjSvCj1rSeUwejzy7aCoB4hA6iYKZmdGcMmt",
  "key26": "3G3RrELR5xzNcda9zEhjwNVV1ei3xsNiDYP8Vbb5ARgyekDykQNPDhzNhw38DxGGSb8RgSoMze2ym66BvCLYGgXa",
  "key27": "3WXTyJxX6PLjYLwyRUCEL1VuQW9mYRZY2SBijyTRKT7VTppjnP3cu7WxbPC2ccT8M3MyA1nkVA9to4YZZqG8HXth",
  "key28": "28bPpuYyZgb2G7Gc5my53WVYgbwr1BTc3yV7wRmYEVwJTjW1GJ3BLrAnBJkdCkVwgDpotaBdXZx99mtEnevggqJH",
  "key29": "4p3zwpmhmWBeBiLaBXFEQvMyHdSGU2VzYu8qLUYyTJTzDkLTmNsfyQDi4g4AUQKjszWDDuDq2o26LHtd7Ymjndv",
  "key30": "2zkwVEdLR43JFubUTp36p2QGAcrvGvY8AwvW57NxwaUSPgyzgGD853GdsDPPWY13GWiukT3YKsBHEEk2cLKTkuyG",
  "key31": "4LrpwsfeE85efPwWQBet3jD47pNDzJvQAHbtMWz5iivLzPdd3e26o5sV2YrkSDPW85FJFkJQco2v5a5Fs2WAf14e",
  "key32": "tvw7gVw8rqXjXYA75LViYKd9qCYdR2D8wCYr59TWA2Cccir5oqhnSy8FSmKXyFNG7bMovM9Ps7QqEXpEGzmAZS6",
  "key33": "3nKb2W9cRG5Yz3ATT3yfAEZanZENADEFnWx5rRdDrC9vBATzTpQ8nRghQRmFv9gg27juu5GKUZeQ2EAh4hjKNjcg",
  "key34": "2kTnznGtpjixK7HWuTXqNT8dfHx9K1CeEVnVzXcMTFytvYmow4X1coVkVM7AetMoqioXJk1dikKo2S7qbBxK9ubb",
  "key35": "3YTC5yw5Sj8mZPfC6onZ4hDZkayDmXv4yJF8im6ifKwDnvFYRh87pssQGNXtUz9qxm3jn6CTZUtUHm6DemikRQ46",
  "key36": "2NaVsSK3CmDx3wPwuQHpue844xPC3D2gCkSdXrrAarHooa3f8mQ1Lu8NCZ3omadDUKFg7U72qkcLVN2seQ9VhqWo",
  "key37": "5VfwgjVDcHAA14EccpBCkKuRWtJ6pzGsfXErfuB4xQQTZh8g1k6B9GBhY2XoHdGtygFCGo2KNTeKp4Gz8Dtwmiis"
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
