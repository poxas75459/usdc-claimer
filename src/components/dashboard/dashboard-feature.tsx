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
    "2wkeXY7JRWMYbvRGAiBbLpi8gXAG9jVfZ3C3WngGNuFscGESN7KhZfnKptu9M3AAA1yK41fuRiSRY1G6eFAZYR46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4og23BBM7M27gsPnb78qqfGFr3LHAkgG959mwavgb7GgJQGrybSG9gJnhhUpCvsZDExH4XGiCugi8NLGS4rDbV8z",
  "key1": "3kLoac6yN9r4vremKZDCn5r2AuWCpRpzzhPUChXC9YuJrFPcRibHx3D57Eu8dfDPSaX6jFct1b5w8XNiA27o6so1",
  "key2": "32Criz77nz9ayf5mAvLbXdojSbrgpSA15hNsfXrR7BdwqMu7spgzrriwGLnAPNXrYk8jDSFbEJgtBewty1u3mowN",
  "key3": "kcEUdkNJVLDirHxxn6Rqqaux8ABDMv5nSPFhGnmXbFA84muacEMgvZNSa9fagfHieF6NA9iqxobYjo6JxzWWHd1",
  "key4": "23eaqyq1FsYL8auU67HurWwNE6vidjBRLLbShLPJuaZ9AxKyF7Hhse5QM9LhhTdWqQ97e8GQfat5Cw3caB2DK6f1",
  "key5": "Kxd3VkCtKYf9ZC76cwQBqdBd4UF3sg6w8SL9MLSGixv9u1ge6iQe7Bk2iE1syhJBHaFf5kwsHvydfUzhWHjshxE",
  "key6": "63H38fRZ3xbkD6bdPs8Mr1XkuqT6ynnoMvmuJXo82aMXirf9eK1QdwRDG3RMPAPYspSENXLrajB4BNPTdA3DV6ZE",
  "key7": "41L4a5Q71D9noTmnz3NpcPSPKWXHhd62Mh1bKw6oLgPVNwEAJpTkCE8SRQjt4zthvN6NVgGAETmJLsbeYuyChfib",
  "key8": "9dnWVhWUrmc8xeHXiHF1K185co7qjPnNRTxjYzn3ANN3nLPvFM4yGmfYdvcRzXR9HiWc6RkfdeQ5T53HxkCN7XX",
  "key9": "KaRrbtX75Q45ErNZDAhoiUTFzdtWk3kM7Mf4K9S1brNuMRSo9pqiEx6oScf4Egj2UMbE7RUkRGGpzuBPbU1bwKY",
  "key10": "26jcZxKVoCCfjezGVJZtRBdkvPfJfZ23cozU8eNAnCqMcQCKYB5qGh2PkH6ukN6pvjhyE7TPzZ8rGejrmhBWEp9V",
  "key11": "Fwc2QXCn7pJ5hCWHux4KgPLgrSaBFutAwUFBEpf2YMuYWvzzLupiuA41YSzNXhwfMS8JW7DKf35e9vt1aDgHcEp",
  "key12": "5es8vBuWPwMxsNYzqSd9QtrR1s9kVyNEZnnhRbcCxPAxZVB9kPWFCmhDXfGuUjT8uWxE8GDPZt5aLnnw67C8A7XE",
  "key13": "FoaCiya47ZT91MhmKNxqf25gF9RoN3wxV3ATQbnYZoQ9ovrMstYAqyUnv4LhYbLKYtmZoooQrx1zf5wJZ1PpMx6",
  "key14": "5wnKRTe3VCjaQiJ9uHwAE69u3MfpvMz51QPtb4k6QaoXk4Mpfen3TNoRFSqyGi7rNgY5ar8fQ56HsLzx4rrA2kif",
  "key15": "2z1xwqLZrXKEbYqFhGwMN6XfeQWyG1tEazjQySgExxkK1aKJ1Pbh5rkiygTJKUT5Wf7jWxwBwe8Frgz7KDoymdsa",
  "key16": "2XMYUWmLHtD2NCurNQEtdwwiaSRfAXwiygVBWrxtAGQNCexcqrkzmcZUxiS4kZPUv7tfuwFF325VerHpWkpA5GnE",
  "key17": "5mF7guJUTXvZDYaUxLU63CTK2TM11djuTVJeBTWaDGh38BWy7HRkuN1d6LV3AfP2Q9shL2ZLgy2wzdN2pfy8jXTD",
  "key18": "oe1NtDPPf5RHUzosoX29H6UsMRFLTDkpmEyYGmGePFRrGfKvNHZgBoGaPeCc4ssrT8XruigVsptDPGqEc9qn88F",
  "key19": "4s22uJxi2iDZa5BbUAQUBSZyVzhNCZ6tsijd1XUGzzaGAz8WpXjWEvRtijusoLhhZAcsFKmVkoWKj26oNrtUJaUx",
  "key20": "MX5mGtFZ5Xa2Y7G8e74a6zSEmidB16hf4y3NnfbBUwt4L53DVN1umLdc8pm3Ze8qi9AWxLsnPcMpTyEt6Gk1TgU",
  "key21": "CBbTHi5D9MBCghCcAGXFBRZAwKBBnTpKFvXSAQYeenHp6WeRZipJFHYbm8NV9xF7qwuLXn7t6CqYAyZYAiaR876",
  "key22": "2anfbYwKSVKZ9bkweoByjGEAV2UNxpmTvD41xRejD72162Pm97WQ3f3epQzsBJvZ1Bu9oLuJ8CwzvZAaxL5dQXKz",
  "key23": "2ca4dJTkNmtqmpxTwWS84skg5Y2vnKbF7AEu2MFLmZJT31cnthX65f4DUqefvuEfKYtBDno5Xr6EqP5ZMWt1G2sM",
  "key24": "j4PWyt6Z4qbEGpEWL1Y7Ct6SqEsuCg2r6jGVihksUuHioJxi58bdyxieFsuNgaNcDyRUR1bbfNeyPY6UdYqXVLm",
  "key25": "PWwuJaJexgsW92KXi1Bqracu2gtHA2w4UW6QNt46N1outRm8dNFpntTE36NihmG9c5tQvUoZPPp6UjtZadfTpA8",
  "key26": "26zB5sMUdmUydmd7PfS93rM2jBnnzgZer19VpJJEhVhGfTZZgNhpiJs7xNz2CiaaPBs6tqgHvLRPDRccxXHyqf5z",
  "key27": "3zRNsUEvCdPNw29kYrYdn36jKdUQjRxxsB2amwf1tBTf2jcZahHxZhpB5KfGRJHa5FV4xGB1fwUSVqFrXD9bzfRJ",
  "key28": "5k4xyohkvRz3Z7cAYA72WaRymhH4et8gVQLrXe1Nqhvr5uSyfd8NFCHpWoSyoyQQ8ox1qS3nJVxrahP3soxqCiwE",
  "key29": "5BFqZ2WoCQKHb8mMFNg1bnvFmcZjZqNStbkZM74Wm1qXTb55PJuZynbx22ZSbwM2ufsQzdMnjvUYjjktEj6iyfYf",
  "key30": "41htCj2JvuKAzGE8vDF9HdDhqzsXttHa5hY4urvquoDiV9SwZf12MiCVDcEP72oc7hWkGT35q59fyHYAtXb8ToZC",
  "key31": "56XKetbShP8stL8smTEkH1j9zEieGgTfAvEaBEL2EAkUe2EDQEZ53bBAmPUNoWKAMbowyYXVc1dr2uzwi9WpMnsr",
  "key32": "3LVKGGW6f87JxfJNjWw1e2GAxkzPzC79doue9UMEDUU4uUNrLLSb6KpB8H7ycJ8i549CUQuPCoLr36nbRogA7y5J",
  "key33": "4JfGg1vHEmsa4RP37ZZuCNt8g97T6YsTK1rGDyatEdVKRr22DSd9Wby6fyKREf6Lugc2ZuaDpVWGmVavZdaPBkWK",
  "key34": "3AT6v2o6KWr2jFTwzaBubuTZE92kZxhT7uG5rFbJ7YrDERMmm83o8DidcU2d56uBfaihMjq4nada9m81rcZmTw2c",
  "key35": "14iHTHvvzNJq7VttB7VtBTm8DJmviSvGXxMzNY6HZjzbDaPfMHry2gmSbRjZGdTtXDy6qpdB2rA45A7n1M5KowJ",
  "key36": "67FEpSUS4Q5w7ATWkLbZrdy6GTS3Ds5CZvNyjANisd1ui1WNVZDm7kg71Ar15mk7sd2btkFwG9McthFTk5bMYQEJ",
  "key37": "5GZnB9SvKZnvj39cVN9NhVHX5ujHKAS8hzHsBQquH2pdjdnTrCVyphHaKXFXfVFKaqSSj1MsNYvBbmfrk9pkprPA",
  "key38": "EJh2pZ8pgMyBfBDY7Lb8T5oDRU8vNRg27bsEFWknEwSpf3G5TZpcs1aiPS57nsLEbkPgmwg8Xp8SvnVxgmbVoCS"
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
