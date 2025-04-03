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
    "2Xnnzv9Qzi7c4q7MZJwogMpq8V6uDuPXBh1pCopCyb2ss8wZ2qrobJwm97qEwBG8rqPyMTBEMM1SXaY2RxufzUA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rgh5sJz5G1FVGxY82fKKhqmqfuA5k3ZnNAtKvGxdt2i5i6W4UTjJBMn4sMuqKWfavRuAFYLCXqG5GC6RN3De3S4",
  "key1": "63AuMtb6Eoxb8rfC4J16bsBKPQq9t8Y5w6wzKy9QDusq1t9VCzhaL3aJA7oKzdEHgy1MombzaTFNUKqdLBgDxGmh",
  "key2": "64r9a7HctJPHnwyjjbMejmNyKM1MEmFR859NkzbmVNFz2UTCCuPg8qdxxtTuSwUnFEbKidWovyCjKNdgL7aVuKar",
  "key3": "3CHDPyJ1gwChLLVpo6ADVoLFqBs273nTW1wxEpmnw4qRfPRyYNZgEUSRdFDwLyjAimrksKMNvL5Ydn13RPiMGARQ",
  "key4": "hNZyyiBzupDuGvzTG9H1qDDkzt147FNUrk15KRc4dKg6yGtkaSvkBcoe7HDL4VKfKkqBCsqjPjoP4YB47Dc3HVv",
  "key5": "hERBgfHyeusZdErFJq6jZb9QXCHfoKn2mrhwdBtUPab6reGW27hUL2N7vWCEmCN6xVbaD6omj5My4ViocZ9UZtc",
  "key6": "2hUMJkEhxViEq2UpPazz7GkgXkLPPNUGdiRav1rhpuySjQ3KSzaukzMaTMkW3LbwFad6STBcduy8wZiTfrD62BE4",
  "key7": "26mJzvK6SrnoAGbrCNJrh1mBFsFccFk9CidU8uyds28kT3hxY8f1WKiL1xUeQA6Nb7HVrwaqmfqx1u8z6mFMo8ah",
  "key8": "3ipGNZdUCQrpRg8emhbs6WUQqR7bSj7PECkabV2vM2XwmZJKHwhhhXx2koDfn2Em1gZZbc3bo1siVEv2NUPWzVZk",
  "key9": "4EJY7pkXkocXertWY5KKFqT894Qy32TNCUsVUEXavjTsq2mWripoQA7tqfZF98rZVRNQsVfi6xbN43L97LtutsA2",
  "key10": "3BVXuhKKQKQVweg4hu6wo8Dzk6Qp6AnF8MkNmGuiZrhCmBGhTvvEJ57VHR5VttEQFEAY79987HxRMxC6ydspUzVu",
  "key11": "3rVDfKZbGkAqXoN7NRguughVt5tBs2XX9qEXmJGD2AT9Q7CeoUDBzij4ezukPamRKnNKLxvjP6nzyK7cKWCR5LeG",
  "key12": "32Fb6PYtZzT57S6v6Ei5uZ4jfWyBPGm1g71FxK6GSTT62zDLvEUzfoJTLiywWHmsv96Xh1Vx4Mg5LavWdnT2WmFM",
  "key13": "5BuzdgU4RDWS9zTGhQCbJcmFyVPJXyFmc6sAT9Z6uM9TcujLjK5gxyWdUkSC7LuwcH8D8zNcjbbcDUm9cvSMSW1v",
  "key14": "5EnLxsA4me9fQShuEgZaM9Ub7VVMkCFWAUmdPSKPMG8c5n4nJCCdTPeDHtdcPvTgbX5Zgxney7HJkSUjig2LcAbe",
  "key15": "2CCJBzgSDGyN1CMF7fWcSVpUQCFyHC87dAe7LFURCuKMvsCDwXJDVLz7qgHm3zsaBnXqiCERsQuPifRkTALSvUTJ",
  "key16": "4Q9GweDU5sgjCoxGbN8pDabYZTcaDGoMsCghJSw3J1nmpDHFAQCXp8qQeRy9Y4Bz8e8sj1kDDzVpmU9ut92EmEZf",
  "key17": "5BkAghpqf8ECr6ieGxvGTB7A6zrw14K8ZZ5RhjJHgeSFTDiLnHU67oAWh9WKRgotjKni2QnrUTAf6kgCVzYThftE",
  "key18": "C4EpjpDV8u8vfRu99XS2R6Kz5psSgHvCP8nr8r84veWvVnd8F5bDcwnUzwiioS3dLNrcECXCscpgVmtVuZ1wMEr",
  "key19": "2Sy8yrD6PGkSyhXqputMs6mzWJsgy7Lnez3dH29rXWkXhCJ5b8mXw4tCA7YWVarzR8eQWe1xpxjunxeiXGFELjzm",
  "key20": "25PgA5ZWtg942NbHDTbkaS5awxvwA2mNh5N8RRz1UP2v2EwwqgYSwvF7ZkoJBrfDaywhhLDDLjtUvfviZS5HJwjc",
  "key21": "h2n8217ckjedwXYv5xaMkvo74QGxhxVBB4McTWdaAvgaCjpDJ9qFMD79rFnT2UAvTibi8g5GiQqqGDRD99iKNq9",
  "key22": "3HyTMMeCKEopFkeZ4Yxii99nyDgbxgALCAi9etyHKW1G6JZEcadYGKuzL978xxRrhN5KSoLD34SPjZL1SKHaJV9X",
  "key23": "2RkzeNkkw4tgY5sWkCSpvPPmLS7H1cQZ5jcufJjka3kjCrMqPAmoDdsdpSwgyTnnucAW1EH3srSWQ7z7vuSexpVP",
  "key24": "62K8DBnorJLGbnmnKki33wJWFx6qoM2HrLCcpkRZkKytVQEeCsiws59sn44CuBFb33rcURmdU3NAqngSFB2m7P3R",
  "key25": "4WvfJZQGtTrYqWeQkfCwcmbN6Grr529cYFBypPp2z4ddoFZxNsJqEejmECergtDXsS7BgZabMPsz7a8WnSyWqeDX",
  "key26": "22G8pB7LM2wzphiDX8f4NRSDCq5ykkKry4bci8Myyqr1vtExwaN46EcW3vuzZ4M1NrLc4ZLpSe8FMtUs2uY6nyWP",
  "key27": "5Un9Ens3fsYTPVaH7cKxgJkHDGxaZTbY93caMNT3VxGVNSZqrXG7Vhu4vnPCJ2nK91ESJA6h55BiQ3BNPphW6yXN",
  "key28": "4koYxiF65zwamRqnbRmLvvPwnT2we7ehKM5qUfsK8VS7KxX2jQvC5XJYk5A3Q9Gto3tZnpnCwokBsjJhyQce7zaY",
  "key29": "5Bk19YtE3n3JVpgdZFDRWpMg94HuLZp3HVyVJkomCjbZEvC9Vb5mUmwCjTj5zXoE2Y5MmmwnUH21EQcYjcUrdFp6",
  "key30": "61upG1sTPraKz17p85c2EFscBmGCDMRtj3wbXVUej2XHiumWqkLbvySdsoL3puauCLoV8Kck2D8dQtzMU9mLKfuS",
  "key31": "57JiqU4c1VZd8XEPr7u5pfT3Fid8eUzw2pZBXGgFfwuBWuKDm2BpwDFTs43cFNHi4y5mw2FWCeZ2CJe2xR9bGMEH",
  "key32": "2XNtavwa2uSXaEmYiki8Z7MKjUneg84MjnNrDPhX96dj88tEii9nVVAWADbuutvwt7EXvh82wiGJ5KFvA8jKvWiW",
  "key33": "3pp2gxQ9s3sr1EjR7r7yiaq7HhmA8oP8QkhqfhYDJKeeCC4F2CZHKa9Nm8zErQoGc4nB2xB6oLCuz4Au27QkUtRG",
  "key34": "2GdVxn3bYc26Xtpg2sc7sGVFBbfxXtxSoNuziN4oXsqfL3i3uNjnn8Fr6Hv9B6zqnsj3VHbKxdQyFqmo3GfG1CJv",
  "key35": "5nFMLHfni7xqdDruFUC91Xr7RKUwt266c43Yc7973Tx75N62bTCZ9gNQ5EMJQ45NTJpGjvvE1r7UXT4HfHyAh9hF",
  "key36": "29Dzk4oyrtrZGCU5bGVZBFvkybMhPou2jBC6u5vAR6TtBWdiWWN49zsNEYt4QK3WEEye3LFqHEauGevGw5Q2D5SS",
  "key37": "2GiTKi2jYFHpLmpeERjbJjbTeyiYbLEGkrLzqqznekwni4jeDmDXxdHnhmzr21NCj5eZRsZ7SzPZMCUGpMXMYw17",
  "key38": "RpyRVY4uMqgX9jqBqWPm4G99PHHh33qic6CbQMmTMqC8S38YHNZh4aUvrh6GCHLzh7RAFTRmATtMwRgx92STNut",
  "key39": "53xXTH5xQimWTsdjJtfq5VuFyQHXVBFCFZzQyGiqP6F3cmNNW146So3fUC2LFRsQfVkkWe36PKtfSDPAF3zMxxTX",
  "key40": "iWRsLsPJP5C9dvtCpDMyEsg6McJRUiEshTLh8CQDS1Q3PKqtUYHfgyaSQYAPiHyW1GJVW2sPErA8BDkm4ByPv29",
  "key41": "3L6qDNTeRBbKXyQxQk6DaFmrB9PHuEGFNzqHXgNWPBQz5yCcyVbLkfDXXTaRUDcg2GdShonszaEuZS2vYWJjxQoz",
  "key42": "3y7y8mms45Q2HfxwWUiVxcUkA6s25GxXZhGfjwDcugKcruh2yTD5P2nb3a4eyNkKWK8x9vkdQf7YgtJxHUKZbWSm",
  "key43": "5hwcNzDa6WF64LZsBCKDhDPoYbFEBCRzAPjtDrfgXpMhSCeGYJkR4Lxb96qUrxKCxQP83LgkVXyWUieLqDEg5cNh",
  "key44": "4UQh33mAL1aBZCsoXExDNt6mPAEqkVnihhCaTJbGHgDoQAFALDsNPfnYL6g8PhR2WkonJWLNcV5QzpWPiGiAqFzn",
  "key45": "2hundAkaaYfvTRN4pJ48XnTxpuerAL8nmJPemRDC8UXYW7RgaqCsRL6fUsBNJMzFQSABwxtYifxj9fumVNXTKhr3",
  "key46": "2Xo3zsK6naYxLe8V52rRQrE19Dso9jRwLap5Jy2af8asYLMfmxcPWBdB2gPRj3MkiuRii6QfmxReRNPQhSsb8AY1",
  "key47": "3Bemww4ttqBn6KTqDjE4GQvwQr158CCUVEMqBgZfrrHtNAvbYDX9LNWBmm7vcpB1TaHUcMp1sCinMiLacrQnzSPo",
  "key48": "2fzKu8SbJNJ9QBv4ujJP51zNYnEyEkVfAXKJ3qDDBeokt9Z7wpbsx84vALtdjtrSmvnuwUZLBsU3L3fMRXGnv821"
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
