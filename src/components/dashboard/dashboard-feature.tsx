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
    "4bGiUkELkaAMPqBC58zCLNsZ4svUBmDBv4NT9G6dJQAkUHdfU5Dp3mUCVCqApF9sp3adqv52GWgLwLvAg4vyRy8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gukM4MJJaxo65mnrtyAGnG9UpmW5aQmtxArZVb39toAkgtN2Np9hx5gYZ67nBm8dy7Us9155YpEikMnL1NQ6cMk",
  "key1": "5ZgdSw7jTTTkywHrA8dsh4aMJBefVJMWQtbyS1W1WG29HReuFNtYhYwJ1jUtff6jaGh5oXc584AqkV82gXEpb83m",
  "key2": "9CEPUACHxiMrGxqhjJ9Tv5mc5tZLUeFPngBFbQJ6ZarVkvoz2mLk6qkdqLeHLyFb8zfSCsRsEh2uJMgwtCi76eX",
  "key3": "4BCHBJnN6wn7sBs2A1xmXXtfH6ZRq9ZzMMhjxhBXc665CV5jx1NSfGRUv4CcRshnUdUBXXLatsmWfLqohsGpXZV1",
  "key4": "PqUTLFLC2EUmEuwN6kdajg7sED1PiXFvJrS8ARQuTTThsevqtdF4AV9ss5HRGcizbTvtMTjm3WzQq79aJjDmmEt",
  "key5": "qEHkoBL2GzdPUfo9YcHFFjSFmgUujF6K9yimCah7HVWzuu2p8sfYRV6AUX9qH2t5HsmMnpLx2RQo4RLpmKwoywL",
  "key6": "4F8oiw6NCuRWh4ej2c1kJYTdi89AX5sJFQ95GdKJqomKY23KDu7sRGXXRdNkyJpTiAnH7tqaLVRbevYMkoTut4Xv",
  "key7": "22A9zAUBPAXL3EsuUcsQgrKvv9Q5HScAHx2BTgw8C7VSqSYo7F1GGrCQkDPGGCbH7bXRMfxQj76RZ1Cvih1YVXgA",
  "key8": "49WDpG7XM3SAZhZQXdVUTTXT5ao7xLSsJCVVZBMCXzZFpztAFy7eEAHBQ448zcV1Dtjp6w5tzDjauRvepM3PGPn6",
  "key9": "398ag2ygGLD6aEZ39J2FBDXmMhindfbo6ZRzgWwbTi8SnpxKpmDzohxfcuW3g6soTeQBUhuMqek8TkW7Y6wusM3U",
  "key10": "5dMo687PFubakxgSdLsdPC4AnpsW9Vh9MNoC1HKa9iq5yTkrXw7mjPpi4aCqfzzEZZQoVYsS7MnPjbPsKkmreB2m",
  "key11": "5e5Xu9nH7YAtqoZv5rFRHb6s7VPHVc1fQ6wtHjNwdkhECnUfeeuFVgR1gFrFMsEpBCzYA3M7Gn3zkFRv6oHngsfo",
  "key12": "5ysEr4gX8zFndpJHD1Q8rFCwQ66ienLLnXqxWR9SieAo1LY77eCERq98REJwZSQ1ENavjB3fFDiJxpUzEvUw1pEY",
  "key13": "K9p4jZMGCZ7seGZizKkD4vQR66nmdaXoWersgnjaDgDXiiKY3m5vVCbZQzcd9T8GymCgFYy6xJqziPTyQR9kxWu",
  "key14": "35QiSLJqY8c4vYVXNRsFkfm2qmX8KuhW7wJW7VdDAsP1h4awdaURfxzLpw9kg6XhzapnAJ7VW7b7tdiaZnMB2FSD",
  "key15": "5ywtsbBUtuFuvjS2iu4kjCwxCEB8sPy4YqMgPqFBPoUgtRo6Z7KVMC7y3v6LK42adFPQs3gjrU7RtoqtvEpKXWy4",
  "key16": "3RKfK1Zjrd9FfcGGsGgEu3BSds6QE3LXPugdVJmZpB9unGAB49xZ5Ln4pC2a4FzB7Zx5uHeCiZg9LXmbcAsuAkhh",
  "key17": "5hHwe6nKT2Smx23SzZHxLGuC4BEVQqmQsghA6SmnMx7resCsPH78TsDLwVNxYpqHvJiXu5aWXRKHGdrvCesgV2gb",
  "key18": "poogfNjK2bedKAyZdJc9c9TtMjFbF7hFiSUvPMQzcUwaMP63T1QYMMb7NHJR6UVBgds3kmXE9oFaEbuC3552BSB",
  "key19": "5bdYCiF21ytawZzg2bX22nqy7Wn8xHa4PrrJaEVmtTGQYRrATL8bDYNETw6VLzDV8yDYBXYweV5V5KF2jvthaRgv",
  "key20": "5aPX4zkb3Dup8br9fdwMXLKuZwURfTm1ZjDPd4JJG6ubCKYia78U7aLoRe1tuE5nAUpFKmvGmumrZCT9u1gQwiHh",
  "key21": "ephJrELnLCRBZcDVbdn1Gn176hqidHiU1HfaDkchaoiXjqtocV2B5H3WnaArFgzPKSiHmddEXWZJ8Yx3xREeXX2",
  "key22": "4F3QxyYmZ7KZkdxvDaZHqLGdssfD4TqaaqRMQrnC5nrip9WNgmhkEPrv5x23xxC9S6XKvqTszQTHbipMgWfp7GhK",
  "key23": "34bdomvygGdBq6HHu2XQzBP99N3GKVwpoF4kCqGdNhnLNxZKSZ3VibHh8bRtGEmNvv3V7KXgVX4S5PXsrDhZn6mj",
  "key24": "2tBPuQniaYGb9GQ38AvcSqNL8RBg2J5p2hu3rvcJ3b9ro579wGeZffd6hkHPJwQpCoVzmkWz3Rk2NZGqjDvJqDoV",
  "key25": "9kwNcVxLRoAtnzGPYyFQyoLFJV1DL3iKPkvFnB4dMQyZoDcVQVqG8Y4VUvhC2fNkx6ooePUcXYPBTLe9pgLCjWn",
  "key26": "4zyykqg17BbUz4vsJa7CQM1J35ewcFbLjGKaQvAW7yt3hp968GgLGhX6KF7n9bgRTmDUZEKj3SZXTBtvMwf62uai",
  "key27": "4xrAZ5Kaof5W8KKidhZhsx7Enp7p8244tmMUiwYNWJco16eXL3hZ1UM7ynrDUeYJ3h3zAcw2d4hK5YSFWnf1xcut",
  "key28": "2yeuxnyG4xNqCyrMZ3vMCfacU3oErHN67WaVSeEFNADo13ZYgHMHRtAxiwb9HMPdxxUkgUM3jQVZRQ3AbSqRHhBZ",
  "key29": "2MXZM9fxp98N6iNjDVrkizpCzyWBX2gfmyjxp73gz8spRPxu6crgQiuMcWVbzgtTRVdraiceBnZuLRkxxeaumgng",
  "key30": "2aQJ9g6gwcdV9W9MJ2WdDwiA8Ygv4WmVLyZxhT5Pkg6csYFP4JuYSTqmfXnTiq8KnsZY6La1Gufu8zpvRwWaNaK5",
  "key31": "LotQTFxQtSLYpDSzfQhe3hBy7Tc8P8iwitA4Wgk5pyynwmPwtmfzPhD88pU7gxGFTXDmVnZKYLVH9bomtMUPM8L",
  "key32": "4RN1eiSKH8dPpyCB7RG62w47akydBgTZ1ihYnQniPExJjm7omT4BPNbxXRvVt3pf8He75GTytp88dXZd3F66YzeK",
  "key33": "DgVeANH5qyR5BvHEiKttoGdvVDxVmV8ejkgAC52eYHEwsbH9pyVRn1oY7bERjf8jgsdS4Wo5z1puWZkKYQQMzyQ",
  "key34": "4GQNm8teTRjGGnFzSfdDK76gsohyMMDEBt4DwiutU5VeiNWjotg1jhZWiKYpLMKVkoadRFXjhXKH9VavQVwXQwJS",
  "key35": "2LAqbpB34jRExqnJMEtgyHxbYhLrUQTixYUhm2JsfyZT7WQ8Pqwj3eQm7BhXdjNa14QcJbAajVKMVkp1VoQfEQjj",
  "key36": "4Luf4W2ittydwSX5kQ1KZNVzzLygQC5g54PQadBxqqKu4WHZgy7BTdAMDakJz9khiyxCvZ2rBdHf8j2BRqQ2gNkA",
  "key37": "2PhNnXEV4DVp8yH1kdQABLbrziYoFd31VUcAyxvDUdEeZBhbD1zy6DHvdibg5UgAnGnBSmKoPVdmZb4sgehyHMHa",
  "key38": "4F3e5dgzvp1T6Grsk7YCxA7GTP542MYwqXH3YzQKTzgviEEbXkec88pURzchgmxibHuPXMHGSC6yBNGEdqo77fms",
  "key39": "56A3ChQpNmD32bnseQkVbsxiPEM9DaQosr3GyEU9cBTn8uhRQTW8yA2QZowz32mr7u9ptJFYZt6AbW9Lu7eYuXYP",
  "key40": "4Vofi5yKbeu5yMKj7ZA5jt9Ziy7BAToRA6J1fQfov171j77AyRtD4d4Gqd5b35TkEn2E1fEjXCxZ6rth1MGQAXK5",
  "key41": "5M1D4GH4Rrs3CB82oCahY1ApreJ4tshqwTPLWYRtrmrvuRSjBJjRA67A8SdbPdjC7sLheYWYHKSCUZax5xYcSXMR",
  "key42": "2G4A1wC6hTG7Tep9yXTdg1kNtnuF8oKCWMYeD6Ldrb2oekvUmALqGv579pnqKEPo3fn94EjCa9oZV97GiCvYpu4D",
  "key43": "38gD3JSwX2vm6ntkpHYRYpjwmTA9zLPbTfEhfFFBLqCGq1zipNARx7dMP2DvLmSFvZBFB9Uwr2CoUe9ounRTQLVr",
  "key44": "3yp4gecJjzpiZpq1Brv72SqqRm54Mm7VEMFFVvx4PyX4aW26L3KYu4HKchpPDtoEnR4bq9vTASksuqZbqb1Pd2V"
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
