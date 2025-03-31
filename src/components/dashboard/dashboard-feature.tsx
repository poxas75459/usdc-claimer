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
    "5UexHLLRzuxoC6TvgnMuVXoiRkKfpGkDckMuHN5kB2RDjsCPTrZQQHDDLV8NyDqpK9YV4tznhXAKURiXM9iopKqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bkFLB1Fg7a6KhcWZ7WvAVu2iszEDxv7N2AF9tuuWPX7ExZjnyAMPHXVGoXAdadoK1dnYoPhMsoB6X52d6j2NADj",
  "key1": "3E7NAnDgHpMg3iL65i8h2r9jPGvyMbvec84gGejxkypmGcF863mwd2nsaqnN3aRGq4bTytfh8NMP8ue2cDc78heJ",
  "key2": "4yeY7VGyjmcdQckj7Rny4eAiFqQqggYpuubCKrHM46aGRk4bknwfvCNywwXZwqpAV9WbtjKLgHPv9i1jDJAhAJM",
  "key3": "4UXSScG8Zi1WngX8hcx9z9bKCefLQQi2tTCM4yEqGdpbqyfsnokgQJChLeCfBknPM27hAZYSxHLcx96rFVUoVaWH",
  "key4": "5eeWodcsJv8qK2QyoGtARC2KcdDbjwLf4NoEpM7MmH92Fica4QowUsLeBrDd2HcHYTuYrxMj428mJ8rMfYf8DTDm",
  "key5": "5TDqLkzbp6otGBGkSJpcKox3ZU8VnDAbWJxU1XNBKZQEuvyxhqiDRmLmo9KE5CeNUcafXgpw2X5rU33J3V5GHAvU",
  "key6": "UqKCz2wUexXrrHt3tmH81zMPRk6DBtL3ZZjkv8jMMjqCcv4U2XsaGG29DEMeJLFwTGinrApjCCTirzFbUqxFDtu",
  "key7": "4o4e4ZhXMP9YLkWoCxTVsf4jjz7i9XHRTQSqk3bX1tXhp5A94dwDXPa5W2mfgtc8g1Ymf4waEUG2y5qZnAQnYUka",
  "key8": "5V9nSvoF8BjyPBAXC1Py5soCdZmGS1NAqz1ES8VXVUCjicrXMnSbM5BbTom6VN7gSgZUodMVF5jP3kz7HwisuCyn",
  "key9": "4hJRsDkK2G6CPj5dVT3cH6Kp3dtTHsjgFL5Am7c9M4WvsQuQQb2dmTwpgFdMVf552U8R6VAwhauwiVWAarQ4s3M4",
  "key10": "5yuPpWrvAUpHrcSDHgWwHmJufefyk2tPSpb5HSJqSdvKL72sBdwKvdE1BC7QqN1dEyKF8zm23z7HgYbMyi1QnNYy",
  "key11": "47rcB3R4NT6C1rLacPpG2vF9Y8XXuoTnLUjU3Y7r8vrL65JTaRqN5Ce6R2NmGiqy6u6LVKzEoPznsBN9TXkaL473",
  "key12": "vB9nrttBJR84oYuEgbmav9syudU99DvfxGvyjDMAyXbyvX1372Po5QKJtnmkxfYZ3Lzs4gxSocDjALFRvjiq4wy",
  "key13": "2zCpoqxaRfEh2E5tKuhrktS55d374PSr77AcYrXo6jv47GCQ5wUFX35gdZfX7yFuFR7vHnNvDQkp1HFVTa9aBLtn",
  "key14": "5uMwy5d57RH7iK5ngyAT5wpWxppTuWsfye9TNzheRrR7n3Rp4sx9JJiJwDgLfZJUfrgJ7JJmPHkLWtWxA3ULdCV6",
  "key15": "2jiqL6UfUR83QWNMx1W9G1pHteBKxN8dfXRPUsDPH8GzHituDtyjkKBSok4ZkbvBB4LvbrZP4RSUNzSyFGqjJUU4",
  "key16": "2GrztvH7Dd1U7S1BdcWvY9ogoRptStYzL6gFgyKpAxjSE5qcm15Ht2XNGzJYxQb4rNFR9i8UnxTqYZCVLjWE6PTt",
  "key17": "hRxEWp95WfJQuMCfCzfSUMDuYq2BSA28zZLaRgZ9vCj3mKvG3xU2J2fRxN92pMLWHuS5UySbjJE6hDgtDktvHWA",
  "key18": "4MkyQzdL5zhMrgxxRn6xh5MEMnuU7UHSiAbhAr2J9EJCcujXYGZ7s52KDursPCivgF4MFxi7MTqABa8Bq7Pe9Cw9",
  "key19": "2nnqFL4FTWvhQ6qjoW5TKzc4aCPfoCL75FFoFoU2L9hZKJRecLD7awaGmVgqTZjh8otivCTc2UtgJGBnFagQTFZY",
  "key20": "JQbGQJ22C1SeVuaUj11Rh2dzNww5eqJvDZm8hz6wk1qcd86Lh1W5mMScaZp44QnwGZpbpWRtzcE3jxMkpNf5FoW",
  "key21": "3sQTZXnHAyhYF3kSDPxxjCwkoZTRxNqNhU4U7HXucNMLK7ci3xqNw2GcajAaz1WzGrtnfZJbGkgFQeJkyD84kqSg",
  "key22": "4MWLMSit9FNxuo15iNELh98GPAcXdezhNrdoETx2wD8GqGpv9g78gprbNG3XoWKnJa88Pt1DsVS93FLn91zTfqSJ",
  "key23": "xyHTmSTJoaeDK4kNKMn284uag81vqYrnws9MZFQrc1qfpaubSGoCs6Cn7KhnGBkDx2aJBGfCL97fGPzDR3o2HvC",
  "key24": "46gTWQ8qEkEefF8UoBBFxUDTSDXbnLcUtUcn6D4DeQEBtrpxQzvXtmcJ8jRzS2G8V7H6Ezso8qmLAy3m4ifVQKVa",
  "key25": "3DsrRcKtMwRPJ271y2iqSYTPaCSMKsNthjXBYd3SX3hazJFv9o5xTnDpAbYT2gZdjBvvDHr9Q7gutEnkkyLwXagG",
  "key26": "4ptpThoZ6s2PwxSZCME4n3S83414x5DtDJcH5NhCjuGBi21RxJRRmeqgnTV7uKScZ4sW7WLbymiveNSFMAR9VhFj",
  "key27": "2pXfMPEfiBC4wbc3NeCXt2QT1DCU9u9PXXAffzaYHU7BuLApGnYoj1LVREv196U9a4gfVTRvnuY8UZ58tuuW3L78",
  "key28": "3n4sVsvQezAUXe6AhG7cXC9bcfoLM7iwXYC462qwNmhzdwmKy4GzRLvnJfjMGRGF7NzVbDtHdzS19xbSjc7gJkGs",
  "key29": "EiVTQDWun7gzfWKuYHv7R3DSJAXRqKjLcBmNYXuVYFvfuC3qN9V6fgFHLjAX9A3y2RuVfNPfkRh139pPTQVn1XF",
  "key30": "QoQB8YKafeT5bkEn7t2kEuapYxLRj9ayNzBfNM9K5PCh2uxGcnxCntBZQWpM6uYLfLPtBgHUuWBvYPaRCMiaCLn",
  "key31": "21h4byA99dyvF8rUEgKbMm7ge8GYcV9jBUaxjzCBRP7afjoeDk58FBJFXTEAPrF7szS2NnMvEhviM7UDJAra1bD6",
  "key32": "5MVT38EBEQu2cR1LKvgMvrh36kP5ryppSCjQLQkyqs1k4u7WJPxo3G9bkbjZWBgoT7iiQBFhXdgsaaQTPo4TuSvP",
  "key33": "53Scc3w9jMVCuQWBZVeHWbaCuEgvDBnPuL9jsZDGtidv8Yj4pvTwESMBHWF5KvgXR4Z1rxvSh3Rr7ukndFprLcL9",
  "key34": "41Q1nG5nA2SfPex5x5KFrffzEMVWtZhJug8nstQVcC1AgmJD9K3pwix9fPi1HrHvmQHi9CPNTTmkDZntcBymc5xU",
  "key35": "4H3As7Q9W68PbRs44L3ma92nSF9q5M1b3skRcx2cLVL3H5mdmLraWAibZiQp78PkWg9gGN8Wg35F4r7i9Z16ZMk9",
  "key36": "2sDiuCLawXaeGXJZUNocj9bb2JrwmZcKkBhwrGHEQZu1anfMxoQ65iBfNq8GU4HVscovUYn3PR9AG6pWvFvfQL9s",
  "key37": "2eMoY17zGe9qtDWqKrLCaLBhQmu8kGitf2CZrMAwMGTxXEGbQ4XHHr1te1H6JoHJ6KQTnmaTCixeQBff5Gd6zh6j",
  "key38": "37gHZxPfM8dApqdoy2RmwzDJnaLHwQVBymni8u2NDAaoWAM4dmRT1rPs1ftGJumbWwSYaJwANhY7NMEKLhSbkM2D",
  "key39": "77NcAxbh44AaV3dBxTBZGLMcLHSrT6EHNMzHfyAB5wsn32H3iemeKQnx7k8ghgRgMC2vyS2k6qxvB8BAeM7Zatf",
  "key40": "5zAGJoRGGRebukW2RrRLdLFwpkCcvz2qzCjNDKyHsogfd1vXsGk5A7EeuUtDYyRJah74sNEUihhKQ5uPzsL3c2xb",
  "key41": "WaQYvAcf4vMRtKhGkPVynKwesNun8oLn8z69iRBFLEbwiyMJdHKQyVuMU1pereGAdzY2SC3dBrmHLifsMTBnvM9"
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
