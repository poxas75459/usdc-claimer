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
    "3nkaLzyieGVu4hTVeVShfx8XQKTg8bRpK6Eg7BTw21t8PYfxaPCP191NFRSQX7bvHUxu1cGmPV6tNF7gBzQrKPrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x2uTBg3WtcgDpZUhhLMDAX2c6P9VXRTus8EMUUcF7MMmFFjPnvUAuFMwXAfaRkehh53DaAupEjAAxmVRDEhw4ZY",
  "key1": "ZnEfkMRNfDUHt2WWnCNV81ZGrvMGUX75yLwgYGdipsEmDVNLBcEpWW1ae4tsrgphcknNbcTQr2ymWijN4fHre7Q",
  "key2": "2rvy8Cho72xBfb5hwmkwFKG4P5eaeq4hK1wX2mUWHTGokThJS4ssLPoYJ88qbvcEHYGByhaMmS4Lsnjh9NS9GiZK",
  "key3": "5pAPACtEWFUgdAMvxnXdh4frLKBS26i6mnTuT14BVvXQSjTApuYuEMT4atcWqiiHB7todmbQC6mqg2EE56CvhDDg",
  "key4": "2xc6jUnJShUqVGfYwqx8AyqTJ3GTMBtZ7DSmPr5tyj1UCfDr3VVjQLL2FzB9nueR6vw5LmW6to6LFZydgV5ch1PN",
  "key5": "2WvQ16i8zjwSmJwcihWTkyKAsdNzdNvh2d6ihomSkdN1Sg4T6YGPbMdpGijDEK76SAnJqxvs4V3eqS88kWodr8Ts",
  "key6": "4kBBXzkCTZ7qgdJG2kRhU3W7CsuE3JnjVj5NkeH2Lh4DdyTnxrgZYzubgnbFU1aYeG9zJiZm4y143Sms6NConzQr",
  "key7": "4YfHAE7pXGyw179J8SDq1PjHAi5xvtDrhZC7VohtY4svMjqqV6DnaxWi29YMKATLbBbAkrMbfgHZtLGS1CPi7NWt",
  "key8": "3eawFbQVcupyna8564TowVQNZdEmzr8DAugRwcAcCaSPkYpAScCUTVT5QjTNTooLrYG18mQWhagTg1teL5X9hsg4",
  "key9": "5YSBFKhHPsWxR7XPgS31oxnhMuVB53eoAfifxcsg3nAwoFx5GvvRW3jCySaYRgMsErkpynKptsisUDjZDy5KEMSB",
  "key10": "4FK8EYcogF1XoJZiTYPsFnnqxM1jG4oFzymqfMEAHQjxrwmJGETf7xeu4wHNg6QgCoBv41hzvbjBW4r2wWXzVmUF",
  "key11": "wbtCMbGDqxD6uy9LberUBazu2BKJRUNZyDpwNUvTfoKyFxWhsmQL7GAHad53XNQ9fEwXuHuwf6GW61EdmAHig3A",
  "key12": "KuF6ExTnde5EjEHJ1FatZ8jMLRYN63BDPhvp1xjYdRfQ3qqzrjig7p9qmoZR8qv2C1TPUvrxmoiSGd1dCW7hj1Y",
  "key13": "ZRQr8kkkVfEsfvsy1Dn1fi9XGnxJtnwQLSER3xyUNW1h9YCxkNpjSjUwqvcFRUybdeX6S1X42SKLbbGPFHpjoWw",
  "key14": "4iJ9Vc19nV8bJrDFQcVN5UXLNRnPUXiaugHnrLTckNSYrvhgz3t8otzPkNjgFfZ3DuYdS7dsZurXsaREQ9FtJfxv",
  "key15": "5nZSrUbSGFi3WmCWXM2Y6RfGfcp8AsA4kkSmyFFoucSvMDq5f4D5xmPn7CEgKgGbuZDnkmQT14iXraqpjXMPBhy1",
  "key16": "hNbHhq9goLrx2nDhZCiakD6DjCnQ1FTDzd9dTekECjtGKrhXgf26zF3b4LCYX1zL7DuLVCzpQckPrr1FkZcF6LX",
  "key17": "3PoYa6xtreDQUXnXXdXBZtFokqhpGgB49xWrPs98eq8ejvcWimbsjiqUhxuadxhcCKrYusEUJUNkfmBVjgidFTKv",
  "key18": "2vmpzVoWugxGmH5Ts8wmAYscyV464kggz8uQM4Nu17LjV4oCY4a11Rdg1XacK4sUXN8a1sXNXBeNRrWf7CWkhiFe",
  "key19": "4rMUNFhhrCq3NBuxiCgCXCzcPgtHurEB4ZFFCWvHSYpgmS92e8DKCwMSYqCBAd9jRSU5yQkqeeJtsd5XczqDEfXM",
  "key20": "3UndivgzyAvQByDQLzxHRoSrYUxRwH1xbUjsso1wg9K42PiTLD9fwf1aC6pLaZp4ggvzXuNromYrqA5BxwBn78c7",
  "key21": "5HqdkwNrYHT7pwc6xXUDNqHzParXwafmPp2k2BU1wReD1qux7qNrYGYsj36E8G8HWa8zYJ9imvRiiunkR7UErz47",
  "key22": "2TPvEtnhaJGqFqAzJMFgd26tXyeYbJvmpQw1JY3z3CgSoWtuCEkd5y817rvrfja7aRLAhT1X5dTb6ach7CrEj7wt",
  "key23": "67VnNksoHiTWx7nFHLV4DkKB77364oSB8fq14p6mL3N7XqiizEXraKQ8wk1TWKYUUPkt5MrbvPKmF97TSmqeTXoF",
  "key24": "YLdKfFhrF3noPoQP9ry1PH5SdKMPSYrioQ6vhGpQVQoDjWBjBbySUg8isNkzMkW138vEFiddRweV8FvCEvhbezY",
  "key25": "3A7seasP2ADiUUqohdvVsiEs7DwbJzEHyE5DiVyxw8HoJTWSdFTcY8XcTMcpWUzF2dkoxmFPNfR4fD1KtfAPdeaK",
  "key26": "5f7pB954ZQCUFy6fzj6zZtW6pUjRbyPkM38m1XXBaL6wVXGBGCf5wer9dZxPecDiSLUus1qLEhJhU1rjemsvZbKB",
  "key27": "3bw2UpuuoRbsq86iX8dav1gcbKVgeDHUiGjDFXH5yf37RDZhE5CMSwLk1aqyFitTctoWF8MUe4n7W2vrNDhquSg5",
  "key28": "5hxENRfY4UtUiL9wi4XCqM9Wm4e91D8APMXaPMRokFLAtc2HRr9PjrNAp9rhrbMCoLsFGWdiBYtHUDvoJXujdp4d",
  "key29": "v8fYbWQjt6tfJDd67s72qVua4kGYzAS7LTYfCpKZmE1ihXGRE4UsEPi2SskLzo9kR27gPEFi44qzs14KJfDYg3k",
  "key30": "2CmJrdjAqKQw9CzVFfqMeYV9ajUxHCHcYcEWtxSqRmSh2BLmjwjCfw4vWnqTsLWdfxS1AiLp3hq9YbDe82ta3X7N",
  "key31": "3sCyGnVEpgyBVxNw527gqqm4J1YoXWxiiYWbqBLGGa4YGiMTzbSLKrbriyM52gVbFhR4zgDoCkW645xLZzvT7jDf",
  "key32": "61bvUPvvDjcabzuu2bnQvfFrHxJEJWxxAxMUxi9aV77ZAmyXK78D5fuijPDQXXDMewErUcdtxHi96qh9DPxC8bNt",
  "key33": "4tNWsioScW7k9i4YH5f3UNiikS17CiX1gshgUt1gvLeA6aL6F33wciVDh5UXXFkSsHC6V3mBh9c5bP8Rd9dsgzJ4",
  "key34": "21MkmQjZCSrS2V45qMZNAyCXHzigZZ6iWmbPjTAuktwTV4AswzJjAeqXGyGVQamHF3bFhS43azjQNegpWJSVcyGY"
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
