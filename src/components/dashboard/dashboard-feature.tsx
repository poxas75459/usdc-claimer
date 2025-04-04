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
    "5wGh3cWPNqu5hKpzJxNXBBzAKEsVot3ccZ74dznjwKgBc2q6bLNNas1af2wZN7qvXqLpvE4PDALfeMUu68KVHeDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lid7FHfujLf8C7iTUVEohJcM76ewbi5Phk2fPDUYXSnXGYKUAzxGYi9HKnhbhBhEkm7wH9djdSL6DteQbBCHv6b",
  "key1": "5TSFckD2rw1hfkrgd3JDQi9Pwyz1gCEjzeRNng17ZCAs2TRCTifU1Zvu52rEpA5YfebqhYZg4Gmj39ukAdRLjQSQ",
  "key2": "GE35qqL2X3zs4Uzuu1G8EhRSTaj3vdk56gUPwbsi3EdpkGnPuwfr4mKQqqFAfs9kGn8JWmcZNE8ed5SND5wsJcY",
  "key3": "5fLu3iPX1PmwQ1nRbFwmGvuF5Q34BnjwCZTvcctsMCXa8m4gqC4pTpyXQ7gVPnnVEMKpP6SAnEj34WZF9A8inwzJ",
  "key4": "5jdNW1vocXx7GMmRCyRgasHqxFCKDDC5NBtsY8JCs6En9ccSbaDe3e9swHtnKuKfRFDw3opJ4EDT55AmJdVbqv27",
  "key5": "4EoYC4S4j9WbyPcsyv7pPX3GSEo1G51WyTH3BtAMNL1mtZTGbf5rZEfsHPCM378v2QaTttPU9foFJWJwbuNJoD32",
  "key6": "3Mqsg2RJn9qwRijHWMKsuTb3fauz4Eia1gnYNpFDsTzE6ycPCM4cNVjYSB35xjgeJAuMi2C6if4twXiPjHVeY5LL",
  "key7": "3u2Vsjes64kPaek6fGGTFRPcxswhk4PrUt3Ti4hQzCDtyS6ATTSW95Uh1UJhEavqw9pMqu4KikgaL1AwTsAApVwf",
  "key8": "2eqvDJHT1Um6TXPkyXZHskW7FkZgKLNU3YysEQwzoCtk8fHqczQcRxS2b8cxEDQ15w7uTaEYB1nekvp8xUniz3X1",
  "key9": "2L69JcZBwG4AuAtiFEbaEAAZAii2BF3BVS5fb2YFb1FjVmEA27yLc5cKofu3vdks3deorGQ5ehynWzKf7XZRqMk1",
  "key10": "3svcSVZ2PQjBrMf92qrG1h7rn8u52GqVsudHErugKmzDG2Wx2nncnhAvyLJqgq6wdnddFsuC8ZAnbjphzhyBZLke",
  "key11": "wV4Xqg4anVR5vtwoFqG9gqbMTqCH4Ry29ryy3V1nFPhCzsbWYeNCmUT1wAEZRndhQzwhAp1L9ZnWqMLPp5Gadtt",
  "key12": "4xSra9yde1zgjprWNk17erDhtJ1YQP71rTLzQxLFkdqnjrDfkTffvcg4fS8PDY9gWJYksSEPtWwvus7nipJGp5hG",
  "key13": "4srSTrCYo9TF5FE2te6MmAt8DKabM1Cie2oLDim41PQsfiapkVD54hMnrPHjL9LnCNxMiaVQKvfMHauu8u2NEDM4",
  "key14": "LTHSRvYLTWXVseCLPaoCXR3uS6sW6wpnxXP8JEGt5QVfVnQr9cedww1UnVJNJa42FuSu7mYvsg5AM8qdPKiqYoA",
  "key15": "2jnCj4WewnHuyPg5baRaFnZYEqhNSZv1wkLu91bwZjzPwPUewugwpTfeHVE9y8G8wek4Ke1Xbp23g46ksnGBmxdJ",
  "key16": "nfyeaDSWAaC2DbvQYVWEtWp1BhUTU5dCuAwZ7fu7P5zCXFq4fDSxCpBnBoCxa6LNZviikvpknrXuT3D1CmRckwe",
  "key17": "2GzKppZB7nDbt2eJpAR1penNAXKhDe1u6uBsNx3re9D1s3ivzByQxXJ4Sb3oy9LWd5kFefjxBi7qVxyoj9ejboZ4",
  "key18": "4uqgwPxTGqdxdbNjZvUXNHVLRQTDSurCQgdCL2CHqtMAea1PdwJyEc2GxJyJY93b3ePotRn6xrruxrEfp2Xy1hVx",
  "key19": "2EQF5UvxGYQrzc2uaWNWqSmxhSAdUFxatPYkbuWUtezFhvLho38NuNjtN9i2zrVHvxNSwiutHfXiCWSf2iMJ8SGj",
  "key20": "5WECL1FYrgvug4BAK3TpuXmyd5CDJiaVfmPDJ2FisxFh7cpmLGzbHRKvJsw6TKLM8nb6NRqg3VUke3GvN5gxLLGE",
  "key21": "553Quj5xUkSX2mQS4ThQiaNPgNoG595Gwkdy1oLZyfDfpjBTDmZKtuW263QWn7e7pGxWSJGxap6XWZ6qZ16P183h",
  "key22": "5KaRsSr8igYonxrkh3Pw8renL8DxMmkfmip7t5fMLsP3wKSzPH9V4RGhLQKBXRyi7C3mUSchccXDsEMrYaSiCnrF",
  "key23": "4UsJcwcX66VSthSmuTU6BZq9tNnP9WcFNg963Tw89o1dRFvKVSesxmtV4KwwafjGa18rnB1SqxEvu1v8TNrPbL44",
  "key24": "3uwWTE9X7iFHsxcB14H2zvGyKbxQcEJWWiRo5b2RoWeCu4G6rXRq3h4WbxvuHnhPEoFjRpUjvTBQiPfxHwt4Pvuk",
  "key25": "2x6byycsT5LG7NzNwMkmyQR8ZwGNb8bzaUUpjitG2ejD2UotXdDUrmdP1LmgmdxEKvphgppz5xL8KNqpqtKffDCv",
  "key26": "2vTLbjeACmSyRLPAmpCd8Jrda1EzV7A43HzR6tZdpQ3rRm9wppfT7WnEKDvmQgHJD5qSLkuFEEdPo5GcMKEhVrZQ",
  "key27": "3f3X62tC3CaE1ymJCfrYzfshQA3ioN1qCoK3K1QASHJAcHiJFLZMzZQK3u6PgXsRu9nFkosmmiuW72u1vgZuDjH4",
  "key28": "2Mpoq4Kg88xRaCp5c11ufmrbuFxHuLKVTWwUSVZhSCqFcgdhvTUKg1Ttq6RhW1ucCQowMyEeizraULxw2Yz2WSP2",
  "key29": "3siyKktShkDjxZ3y5PxEdxCgMdkDfgUbPUDTP6gnFyrnJruRStrmS7rZEjwJEYefFYqLHAXBK1K9hFMw9jsEe8iz",
  "key30": "TJat1PmhyzQJB24Va95u4AQaPW97La9zPW1sxaNGQ6U5MajjCusM4of94tQTBJwkGpepiaFVusMoPeSpjp5TxBY",
  "key31": "56kSLKhTe9ReFQVSRrt24bAU2einPrTYZasB712qw7LDbVoa9TJytvUTsZGQaWhLPnh8fNi1fWCvheiifm6YBELg",
  "key32": "7kZH1HJdSq1hQ5oUpU3cyEi9QBmushWKcMaxonBDfo4q8f7s4rYoZN5NMMwY2vE3w1ZUdSxt2pvTwdMisi9TGpc",
  "key33": "5RRCMCXFwpJgibWK7VDQu2Xj1QsHQ1NyLopHsXu3FuGS1dPLWmZ43k56a1RvCnxAJmE89f5pWEkJx98HrunQEUG",
  "key34": "D61czk1baR2ctUituYFmgDASS8yaqcemRHhZputjPPvXEyvEjU7brzWQQxLbJ1fDNsxtgVn9bzhvwHVmQQhTCsD",
  "key35": "2QeQ37vzE5P4ENaGzwjFDo8xUdFEtKFLPpjRnNuzftpeny5GUFMwG8E2tgFZwufwcbB2651xbDyhkQR4vjZaVYjw",
  "key36": "4mFwgJdHsAy3CvNHMNobNo32u9Epe9f8zgAGkb1YU7FDykMRyS3VuUJuQVbfkTMSycJ6Krz9pDyBxYTdqpYQAELm",
  "key37": "4W92rbWZvqf23T3pBLBfEontaoVHZdYMi6W9FzzzSGMqAVoHHwhNuLrQEVToSodjAbk7X8MHDLbDNgSHBLzzMSuJ",
  "key38": "5tQ3zGpH7ZamsoWS4PrvhMbnLv68k6KhhdAcpXSweyMiG1nfs36d6cx3EHK1aXMCmqYUpgjqaK87xSQqTUZtDqjR",
  "key39": "5K6rAw4yesgxUhmUQUuPNwmbTFyhbVkJiPqVKFWeDx7MwrQwMAZog7R6EYypgA2XMEZkikZuayDTjzHMXByPS99c",
  "key40": "4sT7xm8hKD3rVapeGXKiPEqjxMKPbYUAWVcdCvWHxt4sXwjQzEXHCvAk59MgXwwfwZevBw3EGXrxWapEsxcDwxvZ",
  "key41": "52g7MiAS1fo97tbR71aBjddZeK6wN2NVsAXufx1LHTazWz3Yc5jcotfu5CsCaXYcTKsw4fBCYULSGdHLXZtu3rNg",
  "key42": "53nzDptrZvXLr3aRq7jUsndDjiwJnobk9zXUdnfEh4oExyW92mHR1n9aMteyoZ7xLoVAHwHGseGACiLXHavoWa33"
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
