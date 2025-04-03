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
    "5JznZhEJQWvUpmxcJscsFzaqXYrbYdiMoTgPNRaJn6p86veNcg4trAQomU9b7xv9CthSsh9q23MvAofGg49uCSqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bv8Uv9YJVQcvBxoZGXeQRMVkEoSNRLKVA9H7f5HyXiAm1f8waLENDuGJRhRfyAXERELP36osx6ztk7uRUYgT6Wi",
  "key1": "3A65uyGD31wDWGMRiqQTuFG6Eni3gtEppxU8tCSQutZVqsZ5HgqGEAx2AF81CapHJcWuxs7ggDeJSGHnrUG9WyYz",
  "key2": "3X9AkhL4XHz8vYsnBkCJpmChsfgcV9wRfZjYQSr4FBfPCsofXi8XCmnuMofsuEhg92x9NeynDnfU6V8dbipb7Zhi",
  "key3": "Gg84wtN2ji5x2Z1MW7s8LfNXa3kX7cMkj4ckHtqtfeErv5Yf3by7ikNfby21zMgKuLD8sm6c2WmoLQzTfbKbDGm",
  "key4": "4K9N7M9JkKrxMWT8G2FdYWp6vDwhjHqEDNRqRyjee2ADJ8FeSq3Wc3wBkJhowyJFx44CrSiVVE2gHuKtzYeoKL55",
  "key5": "5UQdgDG8ZQnkSD53t5WyiQkfQv7SKZmiiYKaSEBGEvqPRj6G4RM2mqcEKrPGXuHQRciansTdh2ccNYwy67KjtrY",
  "key6": "31d8JMACh6anu5a2psS61ebrqM1V4fs1s5nVbLMsHfgffyAg93miTmF1VrYxyDchwbKZD9eX8QgkPVkPe3kQc76a",
  "key7": "3r8zueMJRD7ALTCG13d9dL3AXUS9cAwHJE9hAkeWjSt69y2hPJPuRfMsV4gS7aVTJFsMe5xzzevWp2gzNAveSqks",
  "key8": "vi4FvbVEB8owVottxNRsAZrkoubeM9zKKfREBA22fCjvg3L1MgQvUoUDH1L2nPQ5cCpjTnoA8oHjV4HeGkYQQuo",
  "key9": "XBExsyiYY5CYSNsnS1TdB2tTa7zjWv79G9PcQPh9xE9fvCB6aDsU3ozATHUuvfCxnhbuikFZQkE6Dq3LgJ3x52m",
  "key10": "7ByHM1jFgmgz6iDd6DB2PiwiNQ4YbdBefCFknLGbt5Uv7sWTuAbKqoQBiWk17eavaiVZ4ZnkGvwtD3pRmBmQKq6",
  "key11": "x5HKi1woZ3DdyC39hGgCWiuttwRKTMjLUBqxvJuK7RSbn9jn6ngPp5w5V4ge6ZWRQe9m2i25xLGhSzXXySmWVjT",
  "key12": "afRaHuA6cVCiKmnSWYBfzhwvQwYWqZSAivGjLRKigGPq5rFX6KnCxpQnLQd4hG6v6aQrUt6PqjfxiWizPtm2pJT",
  "key13": "oqeK2vJ1jNGwu2npt89vzYkZ5QJUqhb91oRsaPKUjg23MFL4Pb7K6WnXDprgagB5up1J1dbTWN3SuznsDgWUAYz",
  "key14": "E4CKmX2cBDSqWYKJo8wWTkySUyZjyaYSChxTCdegsPip9e9JH399Jw9Gv3CotvnMhcd1pnUhvPRpqcJ1eRTR5cM",
  "key15": "5bjDr3eEtj39kVQWB3iFwMzDSYzmo4pm96MknH17o1aC1dWms6siX1GHLHabCGJx5dGDQkfj76WHVrjc8r2yt1kt",
  "key16": "29B5X2n4s59i9hi3mi6gCdDcTTfaHPSpEn4ciX5zRVUv1kvGFmUzfgwVb3bcTnnJKfMgW71jJiKpqddUAAgvGnwv",
  "key17": "2yLCnGHrdRFTf2catDR8xodHgJe7ZoLBRP9WYt2tbqVe3BG6puBFR8vu7CMRD6ZnbQxrV5LafnpUdhuAMwJcbX7t",
  "key18": "5XMEy5wSbtE83fkt7ZKoKh8hZ2SY1eL2LZUUVWTYX5Tz4rFzQNoVThX4ENMenjYq11mENZKryZAVErzBTgPsmSyT",
  "key19": "4QzjBV8cnLv1KEG6TXaozaff4KY9HYnowHYkc5XPbuBi1DGoRdcku5fKyhiU87wAyWdneyTUt5UDKUuXLgM9Lvo6",
  "key20": "4KsJF3vNiBoWHcR64bf9kS9gVMJnYTNenPFy7YFmKoQZ4zypWeAFNfFgGRs21SDGNj6M3rYaUUqavF3mDa7t5UB8",
  "key21": "4Tc9GJkYNompeqFQAt3qp9K5RtQ5o4Q6Tidk3VtArse3CTeA7i4kjin4nNshVT7MoXjGxNFXZ8a2A4uG3sPSwMfH",
  "key22": "5RWJ7Q2KHbzQ5vwqRFUp7sEUr6v6MotefbaRbEnHBaKHdpmdgMwWXnRiu1PEix3nfWZSfJNhCRhBnYJ1ujTPucSB",
  "key23": "3FoscVGMN2GGu9E952EE3H579rVHggiqaVeBqJHSaRZpf7F7TKeFcRkWwqZWe7HvHf5b9N7QpTc4R24FukNXxNEG",
  "key24": "3whZC8xdUirFqAzpqSVbiqA4FQPmz6K6dcpGWRhW7cHg1FcmzKRBovNf5WxzXKDGeGPJZ4ZfXXJNRDxXhSpZsHai",
  "key25": "VJ8JMdYYYtaAzHAcx3LZHRvUXM95Bmx13fnDYuSwaMcuukVJ23pLCd6iasnfEfyeZ7wjUK2rxK1Ecgjmmtos5Mh",
  "key26": "2ka7kKfejQt1XbAzjSHv4j3pfyNzr75jqCDEJmRoKKVpb5Y8FyRPJTwNASGx3CabGprX2hA7UZ3TmJX9Wc96yWBR",
  "key27": "5ak2YFVMhjns2xNxAoywd8ihb1cUmx9qD3q8D2QsBKzK2rp6U8h5kMHSdJ2W1m9Byud1TUoYiMfVobP79LBd17tM",
  "key28": "qraeMditRAH3Lvz8b11Zk9KZdPJKTFXAB9saRgwAzoj6Jg8rNmLbN3ubovsMgX5cxpeAZZfbxx694HDg1dMGu12",
  "key29": "3sJm7JNQ6EGziL1s5fZssP5uhDnR7bmNvaLPmZoH7BrtBx5zeFQxFZejZBpF7Kg7QBzR9YF7hkMbh6ktgxhLDgy7",
  "key30": "2Zyn5fy5ZVBJ3hPgwUCqEosPymcZiUVjcQ4FVDwN5F2DCaHw4axhkiXzjpvFDc1Q8FN2qiAVxv45rbtZM1kpWCKk",
  "key31": "cMwV7qpevNEPn3BnEKDZ2hVXhQpJHCCrR4yzvTYiYLqvex8BX1v21xryCVGBhSsNfQZxLbymXUsUEmG2T7tiX5D",
  "key32": "52KNDXyq8atxG3vBb8pYdB2hsU5LCKyQwWD23Hg1YvFbXnkQvw1FcJSjPxhtGDVCZTQ8YYGB3GvPKL6ir2P8EYwZ",
  "key33": "E7p8J9gkEzTMibkMw9SNmL8JwXSjvdSYdvPo9zohstQtDkp1f52GCigkwvTfHXKhmPZzpgSaERwiotkf1ACzKQC",
  "key34": "2XiFdNd8DMwWcsfrSzBgzxh7h2ua4HjXdEc9eN8bBNKbHCGBRvo6M5apeDo2MPfTboP5DpjqRtQLi9uaoxKeD2Np",
  "key35": "3VjcEenoEfgt1Xr4nEafB7wdtHiY8PU18UMSRnrqY8xmLArhmaofPoQEQif2XPSLBQGznjDb5N3jad513aPRngUd",
  "key36": "5MUUgaKn7YVYLiLxrgPjLxgWvACku3BWDcw8KQ5k8hgdLJbyZffqLZ6NvkvKHPWY1iXLVBDRtDu1i2wYfEP5Rngc"
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
