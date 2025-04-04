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
    "2sSwkHKZYtezm6LAHUtox1gx4GhMdjDk3kXftkQV47TzUKkemb8WP9CZvT5pxwe6YMVXjF8TuFcc2JE1TxqByPSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i9NeFkQjMfo7sDW16cacVSEVgvaDXqNfHtrFCyiLwxEbMgQJxoaMpXGhZditSmxkvaFzFq6CskFHpJiA1xBWXRz",
  "key1": "3QyxCXt3LYQr9HKcV947hzByyry53zC9prr4hr3a8h2PFzQnthuVB8ZEraJmK6yHfKMztuFAr3XogmozwePVJmLM",
  "key2": "5uurhDjfFEnS7U3Xy8s2yZpT3Ufw1bSa7XEQWBXjDdNC8BRNwoERaNuFSeu8P4PHJXYcfQnpi92svYbLhnf7bCCK",
  "key3": "R9cxdUDD3BvjAWETiDY1NUDtNq31Azrgh3yhGfNt51zAxVnp8QgtbYCDdSv5BC7GGhvNss112Kc4WGTVvZoX9XW",
  "key4": "3by7G3LVh5uQiydmwGC7xc3gtgbQ77FPPgjW7k3bDtretuUU7tX2D8xn2BHQ1crTTYPTGaRgokZ4ofoCvt2qZavc",
  "key5": "3pVYfpftk2mxRrrb3EXC11eeoocSAd7pjSuLDWCivKWA11xBkk6Q6ferxE3STwDMC9bDnkfYt1CBwHMYP3R2sRzy",
  "key6": "2giNhjMAbWKT3Lwk1eX6BL6rvks92vUm4EM3tBDaZH8pWMCar8WDbAG4SyU76zqbaLfSdv8Xb6ndCb2JAbqPP8Hd",
  "key7": "647YoboULTZ8BXrW7ohRG35josuvLvQiAWwUzvvJ6NLNUVvTSQTxUXeT8fzmV4uAio6bP2ZN1BtQNo6giscrv9KU",
  "key8": "daBpxjm3Hjw2TPbKjzQfLL7MoitZtXnYSG9voUXABmkN4jMhZBSfobJQGPDJtSD8H72KxCc8RoR7gJCyDhndoMK",
  "key9": "3G9reTGfMTaktxjmWR5wDPxY1AUyZpvCQx3KTTqdRwPwq4SqdRAgKfcFWAi98oB3BSGo6ujtfmMU2D8cLddHdC5J",
  "key10": "2RDyMQPUAYaky2EJi1x7UhKPWyyvrU1siENDeAT4LMivDXgD9aZTxJAFjbrfQGPiCMDRt4gxPwywJEVkFieNY3Je",
  "key11": "3Nm6Wm4Jd8ZdkRPCsj9jXSC4n7oB2PsPjZSdk1cKD559UgsMk4jjpcCt1BpJoa9c8SVNx8dPA5G5mf5pQDgKtmNM",
  "key12": "WQz6FFUud2F4RVZmKStg141fPW9vcbEakHvzwtAWsdwCyfAqVTAJ8REUxGqafZFiXUAcZfka7AgcVB3Nt2N6yiM",
  "key13": "4n176KKd3rDvVaRak46Jrmf4nisH1mfsBNGa471UzoFiiyuJ3MvHhwsxbQd9UaWpiz7TSAuFRSZ4xYo1y22nJ6LG",
  "key14": "64ELPijW7dam9qfF4uwFJZJAvrZZfYyoo5WKam98jMzMup5cvs4eyLkCxPaTMqjfM8jN1BKLsdmAMzYr6UGqAcvW",
  "key15": "37mm89Mcvm21otmVdDqYR5JJL1iMmGfwWFEpRPPTUpP8G9VdSzCH2FdvRBZJReXnpXfc8kJD7gbwcGKbUMjxrVwN",
  "key16": "4cXFXtha53yGCYeUFCUD4DZC62uch21neYSqb6CkFL9CiZFBFktMFcWF4z3bXbH38qepwQGtGxJavJyQMCRWFwTh",
  "key17": "2MKCgtrbTtDwMJmRuaTZotQBp1fi3XZkq2eZ89r7BMxeMoJuF2mi55mZwp2xAMkUnSto569qPrB2vBFC62Pps53p",
  "key18": "2vDSytvtAN5kFuFw2nhsvB21WPJpC5yBsoD6tHcjk5EzEvguDeG69tatPor2AgKVLjZt59qTNNkkpJN3t7Ko46T5",
  "key19": "EE9Wbv7Q3XZKD64JL2xHEWD27kszz5jiu3pXZVD7Mep2GWqqaV92xYqWvoQRLDsBkGSv277ExhEN9qAz1JSc8ZM",
  "key20": "5L2iHtcCpuWd4S6fu4WPRTPuQGKbgMjSwEY1uiTcvWsJoD8tzzs171MxTPTMB427gGfuEt8PK68VEGo95r87VgTZ",
  "key21": "4XWmC84potk5NcNqpnQDGamLNNZv47WX4RNJ7Xth7aSEKjoZYUvgPbRv9xKQ9ecbpTW8UTxa7eZDPkHws5Bj9UYC",
  "key22": "2gmNmaCJzR2UUxFEswZyidUTQxZAPVcpHPF7wndk6SToNq4WuQpiYHbvXDBVJ9HNyPMqjA3uSWBUhduMSMuh7Fay",
  "key23": "2R2QdxnwP1tUs9heD432uogvEETfjxQeThaKJpjpxk914HWwrXVRoiQTUpcv7pGscHXPX2dpgPiHd4pCURFf9mCg",
  "key24": "47DrYEK1Sn86RN8QCQwUpim1fpeGzkToEbp8RCvTmcbBJ7ttEAQMVgN3AEuoFx1PN4ThMJThbtMiRbMaFW6qk7sc",
  "key25": "2pFzKbrrGCB6bHiUNgrpkGC8jQvys9hVm9yjWgdoFGxP9CnYj8o3evsotdayxGMEDFY9URu1QrccT5rHnryAugsU",
  "key26": "ntyuRTyaBtxwENNgrfxe71DsJFwQosXdybzzZSVGb8sFT7yBoS56Z9K4Wzyvhe724Y6SEL7BC1XNe1sZs9ueAwk",
  "key27": "4kdDMXovDLGuFxy7rXfkdpCFMJy2Fxrq4PqKuFqWmZ8Z8UtbDzZEpV47oPw7jv472UiDJiwz692pyfaQ6GZjCvS",
  "key28": "2XjnF2rd6T2h86sV4FGqC5PXY2R5brraSMPPFqKxbZB6oQYq7hu8DswAv7Gkc76uCZpgEysiLLaXHYytMXYbtzjd",
  "key29": "6148AWDWht8dGpJ8jh3DdPXreTkFFqsdrubVnjb4gMHtHMnTBJPhfzxSiqPgXfbMCeasivg88XwvVo5odrH6MQHt",
  "key30": "5mR1WohKFGiWWHK5d4PUXLADtxwSJq4tDbFuLBCm4aJw9QHS7qYAo47WTSzr6xFGtMKK7bjYRnLB4ZT7sA3m3nxr",
  "key31": "3x4fWBM5xU8NDVpXHMqvFgAp32XHXYCRvcpNVYrcEmZoQgFd85i77jdnDwebtkhmUqNjoC2g68iGpUHZdie8JJpu",
  "key32": "2xJn783feFeWCchHAhHKZkqChCSmwHKCz3p5m19hNFizjRV7S5hHd1ZWBCSJfFTDHJh1AxASWAFoZg566qxTgTzT",
  "key33": "2pk1T1Vmb9TX6sGxKPkdj8KKMqxGMSWtiEEVXEw4nbB7ujZ3baDxJMMsQeRbdjHf92zDAmPNyMkoXZtdFNH754nc",
  "key34": "2PjEzWMKWWFJGfkqgQ392JDv8XsUxhHxj1xLSpJySUhmLHYM9rzkFSakx15v3oqxmPVrbkDLRdseTpnqWkXVbGn1",
  "key35": "4p9bNTi5jeMcRmFqeGLFDAZAApQDqCrL5T1ffcatt6QZbDXAbHZHVMKaC6n2Aoi817oHpUWcwUNFdTB2LigShGxy",
  "key36": "38hdLf3GgRdb9qeTUdUaNuyCcYpVN8337AGCxRbVuWoHxoHtWmqc5KN7hFRQ9JMLoJZ6bEs226zUPrcpkPsFeeq",
  "key37": "389d3cUGb2cg9Q9gVQeGoLxTfJJaPgYYm8zQSuxL8EtQ3ggJSFEpNrQyQXZSRXwAdT6PkMcneA7PNkjq2VNYEgSP",
  "key38": "nBvWao2xeNb4U2MAFr8DmP6iK5gG7PWfUN2R5q3tJmY4GLCKoXX3xhodjhvpVT8gGWRdJJyHvSywC4jPuCKfYCh",
  "key39": "4K5i7zzprxzLP3KN9DdsmbuYSfLgUv9SKTGQJJfjU1iQgb22tsMnbS2QGpBGypoF9uAs2ydS6b9DXJ3cgh5FM5uX",
  "key40": "4nrbzcH8VLujQftyrfQmrP2bxfbU3Q1dpvYFsmDQfAxKs8Fi7Bm45hiSkVmKsabbSmaESHUD6ayp9kKs3zgDY8RK",
  "key41": "4sz6M5trmXqtkJutN8f9SwgikkqcZ4VNBxMQph7bv4TGFnAygqnEtfYyyY9ZHpDvJ38yWNMfHumPqMY7jqULNVtG",
  "key42": "uWvcjMYVwE5ZmoMkzLGJ5dv3f7mCtisSg7Vcnm6qgELpctSLGS41jj8GqEUxeqjEa19pY2E4mWUsLWdBroaDmaM",
  "key43": "5shkwWJhfe9JTW3xwpBc5JzHwhZZ5hBEfiDyCgVcMrSG1AEpto3pv9ZkkX52PyRW34nvvcQvpxeAsW6KZCb629nX",
  "key44": "KwQw2iGwJVGeqZGj18FFfmPFJ6cZ2sRE3yALeJpPBzgTPnfj9jmmaHPi17qH92cGYvD54ZcAroYF1bjYabtWrBc",
  "key45": "5s9SfAgZfPDtGFcrraSyEop5mdtegnsCPYAnhXSVnCu6agkVuTnHMw8JMG5oymMEn6yJmLsk5s6T5MhmLh1ZVpUD",
  "key46": "ZdN12eyQDRP6PSX4A5kf7DdeXdgtqyBmXwcBX1Ja8ruCs7D766xr69opHJC93DBqBawWynWBnNoGJcXqU7Feadg",
  "key47": "pHipJjGs2dcjp6DiPSvjvZnLCLXwvV7Khk1X2uouUtMek5cZY3R96X7FjyKECCx7SSbGbmxfYpbb7FAs7hEbPSq",
  "key48": "hkU9cfmmocnnuKusTYLeUoVToswhFGcAxcH7kcQ5mqMnHcVkerWvaZpS6RRoD2DtYt3HgWBwyh8HZruFHJ7UM1s"
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
