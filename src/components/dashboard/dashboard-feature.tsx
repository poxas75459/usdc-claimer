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
    "4r1NmptRgamJjfVh34FR2qGuLzuSjsLxTJePumkmgpGmVL3jj9BFFug24AyKnVib9EWnBWyREuZYD4ZYhQXdnKFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mu13LX5HwNnRVD89GhgLoFmv39R9oA3STBADzAc5u5XGsNMHJX8pouP4swnLsRSTp6CY2F5yRBdx157UwtLR5Eh",
  "key1": "41xrhK2GexSAbjfahDw8Gqc8s9qsHUnxTgVHYyEYMjxEvzSBrm9JToGfGV3V2rapSnB4ajuuGATr7WwDHugbWHnp",
  "key2": "5tzeQLYNUX9FNuEDY2QhoCqQHBkDpKWCpVLF61sZfYYKNv7QuQvG3KSxNTnnZrUR52d7t9zgmQWjceUme7wUgSTh",
  "key3": "2zs6E6LanP54saJFXvsUFdH8kEQw8crhPUXvi17qGLYFJ2hyHTFERFrpneabVf8LgruUutPh63eSoxzGxXWZDWnq",
  "key4": "5dA4VTizvR8DMxNVYNXfPSBiZDfwTyTvvoRAfBaz87WXWpEg1VfM5YUL1jMCs8YLmxRzBKSmfEyEporD7CscwdYH",
  "key5": "2khtBy668E6wgbTWeEuByDj4v6WwYmyyfPDZhStCPBPcvxDKMSHxhzTXrCVR4LiDUVocRYddctTsahWT2nSDXBWG",
  "key6": "29mLzcVEDPkN26iR7BLwABrecUFwDAqjaQ6YMmHhg7371ntDzFmqrXfBRorD6MWLyyVeC2kaEEXoqgjXzxffExGL",
  "key7": "3CB31rG6SCGmbKtA2XGVdKzCyEWACcSUSqjoDxvMf9xG1r5QePJC17kCEdfJgeZSCCXSb1AhagLuwnxxUGdT2zjF",
  "key8": "vcyuhAFddAJZLR8i5zSJjAdz5sBPCtZ2EiamjD2Q2X6buH6jnYB45VjdRWEiWqVH5krLTL891J5aec3jUuGcTti",
  "key9": "575m9WTQk3LNRNkjt1pyS5tkuRTFy4hjvW4Z6hMNtf5Jvhb4kV5kwJ3TRcH1kCCKHsub8ytzwgBi5GYB9DxZWsxo",
  "key10": "3pN3P63PQirdp6sUmboGDtR1AA37dB4CipJYcLEiwnkiW8QpuQNQsSzoStSnfikyAXgN1gBEqgH5ancxrn6cxgm5",
  "key11": "4fRJebcqtPMg39DZGy6Z9WvD2LyHhfzhYPkHRsoeDhkDetWwsCwXkC4AmHZ34ddSAY88rRk6383EGeAeG9EFDZ7h",
  "key12": "4uefVzGnLB482Eshwy987bweBv65wBGK7LPgn2Fvax4ufHVK912RFJuoAFvxRanZLkkYYnGF75Q7qN8dhZi2kmSu",
  "key13": "4XVf16Bvb9WC4a2uiipeP7QRkQ6rCfYwubwXaggKe7jJT3dCk4GXxFYYiSsoN8qtS8N3X82JkqEdxANkSG8n5utk",
  "key14": "5bFBajgHkeGtemfyGDvEeLFmpK2rHyi58NRwZy4i3D2dhdEPCp6dxnWVpefUAC9yqM2rWf6mqfXA93KDyNzBjLkj",
  "key15": "281bjC6GW3Kw3rtfgpLQHg4T57bPiFEXNEM2JEoQxZYSgrxubfsMVQF3oBpjND6hVdR6e7CeqSymBvvV414aEP3J",
  "key16": "3L62TVuqXuhL9gmmKrKKCuSDyjkHbmjwdLVG3MQSDiJh1j1MveXg8Tg8w4Pa6aU7pjncik1N45ZCLPgJNysWNF8i",
  "key17": "5KiWs8GZcAgLebyhu6ifSoQgTHDsejLY1rL18B8Xue8fAPnYLNyr7nuvaoDh5c1gASuw8QaMNcFbtGbfYMXpEAR7",
  "key18": "32CzZznbwhxBsRG7yoxQb2nQod6YEz2x1TPa84UL8gnQUptij3a1XgAZ9JFiVtGYGdqBGxNMaAQ4RkmhcNHxZy4F",
  "key19": "Cme8sAyspjmCW6woWmWwyy2GhkS4YGrGRgPa44xerRcpEN5SxQw4jjSCZx3Z66uVo89VzjXJKFqVX5mNPC8Lkua",
  "key20": "22ULYQmhzR8w9sMWZAZYr3KdYmq5BEkjRXH6HjxKhhAbL586siM5QvGGLEbChiYUf8PuGC6iFxjun48ksDKAUph1",
  "key21": "4T8njMLvsnSoADntUV3CtzYq3b2PdwkF9Hko8iAXFyACjTFhE613TgoLW413NaosSA9yfV3r22LsWbCFhtGdbzfB",
  "key22": "xpLJTYapoJtZT5sVmEMVjEahhP8rkC9ZtnWCNoisgArn1qZuWWYdH8eCMxjaQFsQu7RgtXfGcULDhHDRgKhw91U",
  "key23": "51ZDA81Are6hjnbpYFL7ybYUguPd2zSVPAqbz8EBkho9tVLYBf2FHbGu1rS6Rwytb6n6FPakWd3wyf1X1yZFRaxJ",
  "key24": "5hdvHGsdoWakt3mE1poKw4MVT8H6UEqoeWcRJPK44bk4VyQ1cLGWkpwsqabEH7JuM3NtnsRB4fc7ZCj5CE5UNBkM",
  "key25": "4bnDBv5HmpQZuH3pLBXoh2iFQheW4oFYagr6kHUtpHtFp7Vv6HTdW5turCb2knTR5UeTWqseZEstgBpg4gwyawAf",
  "key26": "5DLAZkBAwNeVXbeyd4AyiCyaMGZ47iVLCsuMfnqCaQtAWD3U66si2CwHwf8EfNMVtepJm8vrhmSc1URi3v9KZCFQ",
  "key27": "3KHUMKnvSR1X8Z5uyhACMcdoQsoqj11pzNVgJkLzaJ3tyYfkqLr1KRudwB9dzvnK4dPse4YykiHt75SgzbWuzBii",
  "key28": "4H8E6fsSEKVcd2DrD8HQxuvDmB3E132RQDs65t8jVjLLM19oe1FnK7ecHSSZUdZGPo6ZUqo9LkQGPhjhcfKeQoU",
  "key29": "1HZmutK4z59MQGSp8er5ozw2g6mb8FMPCTRbLRGiiRimcMTt1FkQQ7KNo64w3k5HAjaivNHfCx1aJbVZ4oidaVs",
  "key30": "3JX2inXpL1brqurBsTkqCur4iGts37FHccaz1L6Y8uhYW2ybPgvnhrXCTRyVjJzNbppZJRjHrVY75g5e3Q7y82tU",
  "key31": "27qzyFkcZABgY3NMcSRUgHiwPKAHP1KweVs8XiGeVreLDuyVupPGasG4P29VPYFohq6ouTxShvZXrEdPVrjgG5HM",
  "key32": "LVNKzLcvvExtxGYW3s8hACgMmQURmqGLYWkNspKPHe5AFqY4JoLpEs4wxEZrBpmqvmtF5zKjSYGguqq1sjfuGpk",
  "key33": "3PucbpgA6LULZerbLwYE7EZHwiePPmUXbU9RavJBygB4mcbkCj81kh3DWWmoQeW1iyziMmFLq2WYmdeYjNjyFtTK",
  "key34": "4bffSkPnLSNLv1WNNxVhi55LzenKnE4Q84ncf4ybEBu5C6Ad6JvhVWeRdJMS3w8eJjUjYTYTJoBRr5us2MxCQsKQ",
  "key35": "5FqzuxxEhrCi2aihzKGnAGvtKPBqyJ3pbYWGSW44gEtEokAzUf5Vxy4puPUNtRkfovyQCzC8t1msH2n66DnxtBwX",
  "key36": "4JvgzCKQb5mmapqfkLwQEsJTKx5wHbM37bYLStw8KCvs2pPXuFnCf5Hmok4AHA5TubYVgqhLdcghPa74GVuKB8WX",
  "key37": "2LtwGVZYTMFqaEmN4FWmUCZZmAw3fSD1c8g18ZM8WLnp2pCi5EAraK7aVXPF1RbUedZ8hDvdwLACjXZ64kTqcS5f",
  "key38": "2xHSTz4f1HbUdYkvSo1zKZ9auG3fcKvEoTJYXsHfCNnFYb1fgJtTBkYHrt87zoy5bmE7n8r6dYJ9o4w5WhkmPXFK",
  "key39": "vkDY9tUbemK9TusVb3o8Q2AKG3ftcQLYVY8BnPRES3dJ2yszxawrifcJn8NraKeS38BRDooiXoNEmN8sHu5Zoma",
  "key40": "k4L1hAF2TC3DthkAxx234au29GpUXJ5nZwTGfj48xAYxCe85QW4XiXVrE8Cm9GHVU5Sf9odQbWspXdTETcGdMYp",
  "key41": "jMHSrgwXcWkNLdtjeEn13GusP1amshtz4RhomLB5yRWxMSiizhRTo4cMsTk6oXLatsHu2W1Et84ecn6EcHcucrX",
  "key42": "5wjgbvcAwXSMGecnnQwr9h8rhQkyvGwakjquiuCqyR5hkG2x4DXERmcfMJnwJfp63WAkqMwMzoWzwAE61RPxa4Ae",
  "key43": "3MuJDtfBmgkWYrx5UrGF7v9gBaaJSyvwSXn5i3eJwX57gEfdMGMnDToFDMZysMaNom4JHqB6VgBgZ3jEJgQF9nCg",
  "key44": "5kJouHm2H9RT4XnJ8anQwUq5G6yHyDHczMDSgVvn6oTbMrGMTfMWXjHpn65CogMjnaziSEavC6AFTE2CbUbgYC71"
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
