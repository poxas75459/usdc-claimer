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
    "7GCHpyvwR3oAeehpyWbV9fx4UgsqQAng2tNsYethcvGq8jenwKeQMoEDKcV3rAFmgKkwD7tCUqB5qtQp7fu5E2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NfavyqfetMdGsMMfYu52NT9E7snjwKdE8dszdmq9Cf643sDzrd3jGWqvy1PAieMnG2WQLymboJSK7XfEJzcTEQu",
  "key1": "3xqS7P3xStCBpmZafosuDZBstmE8EyFWsqsq1dycFRps7NYwqSjjFgFvVCbSatJjpaPk1S8CA5Byp1tBatwWePnS",
  "key2": "i1FZZ5BZECsC4PuEvaLA1fabh3MDTXfuuBrbGPkXJ8uwUPvHwQdekzoJVRf7MvC11UTRG3nxCmMFnGNvjgCdkvW",
  "key3": "4camcw3CSA3gct731qCMTrZ9GT9i235JTUe6DRRChcxHCtYwQxnafLQzqUGQi6FVWpkMb1KK9pc3NGCt8wpHCF1V",
  "key4": "4HpsHobPKVzczQDPwtsX1FtMWzkkuxB5So42x5sieMFPR99y3tG7EvtKej2VriMdbAicUakj2VAM7tEP1aADTj1r",
  "key5": "4oKG9a1Pmq6ieviVZSbkp2jkkv3BRUFSJfLe8y6iBnSo3ETfkgMEpuTZUgKpq1YVfKyVodd42W8LVMAfXktwXXHh",
  "key6": "65cbVYUoMLpia7XL71bksWZJpeJmbJCsN9rsmVuJSqgjeUXknvfgX1Z3uvZDWrajDxD3aaGLwNrCY8HnMmHNPgBj",
  "key7": "4Fd1d6ehxZrdQ44jn554yar7nYhKQ7cDTAXSJt26zwpaXEYxZSRb5XKmzvonxk6pDLdGPx1r9C3U9mx1EEZu7hvP",
  "key8": "5sGTAYGQ3PgCJjVshPZn2Cw83NVDMqQUQjcVdcWnFxrqjfbzFskquceufK61E9VHPUq7Ui2yHwpEGgRRsZ82SiR7",
  "key9": "f6ihc1qqRzq8pdny5DTfW1e6nxKNjiqj7Hb4jkgRZrfkVUjpBtR5RsnWTSAi5BNGXAyV9BiTGovo5CJhgJagD8e",
  "key10": "4MHsVzgbmVEVJaXgS3wrzjPaxrk68MM3n9UYsraNkjMu4JFtidERQpurttzgmgTM9NSJGXeqhHUFvPGntZLeQ8U9",
  "key11": "2rSLinUwd67uho6gXiEcy3ybut2bBi3tM6FpZivfQE8JW2iDbKdwEE68Fst6u2koX4sSvRaf4h8bJuYQV1H3YK1C",
  "key12": "32aNBnoTov48GqzKug7Ds6GE6aRWmKAdDJY9jk3pSiNbK8pEUQXjpFtGtnM8J26ye3FAc5xxzUGuuL2MniU8Byyb",
  "key13": "2jH23AQ3anevHbFbHABRqseRJHhvRPw2YhuY29KP3johUDq62ooycEP9C1Nx6MpeMKyrnbbUdcGnNMWWno7nxg7V",
  "key14": "Wr3DxKVkhcBMohkw2w3DE78EhtoJa3vtyFeLe7obJDqhV9gc6KfC3PsaVpk8XkkC8nxYvJDb24uWPq9R1YUFu7h",
  "key15": "65QpVZ2urnDx8EcJJ61c4uYHHibpRom6sbZAmSjVRQDcUFbYKdZpJnSAeNRKz1twW9g3quu2eEVnFs5HzDtU4p1a",
  "key16": "3VkeXRMeor9rgUHhGdeMW3Nk2M9UKFBhB9BabEUZt7jW1c9kdxgNUHpUo48bPxFPAXGEHVZpoUeH9bUeCLkfQzvu",
  "key17": "2fWpH6HJxEUS8X66GedkB1Bg8czDnu42CTpmmdoXkhyuzyzkFBmMK1ZwJVPsSqmmhMH6dJJsVYgZ9rZYGi6ZMkLL",
  "key18": "2eSM66sM5oJotLDm6dzLfSCt5toHU78TQBDaNWAQQuCdnk5k6dooNPR5R87PXfx8JBVciKMBQZGHmpDRszuBDdYi",
  "key19": "5Q3RYVTVihPrcGwhomNz9eQLaeo5dr7b795Si7E8QcQHMg7ZEkHo4B5JPhcEyVfwevhURB3qnwJNyAdFaF8CGEst",
  "key20": "3DSierMSaZKP3AFGn2mKsKabLBgBiRgCNybc9Q3B1ZN2LpNTSrsqHdRdE6ECRA8r3QMR5VfRHwcGgRXkYDoMeCL8",
  "key21": "54w6eK1VevL5Zrm12TnVrpjibeFZuriUKBLno1XztdcKxzJ2S1m9MuWdeAhivWf6z947ykdUM6KTeN6vGvgrKDZ2",
  "key22": "SmLbtQpaB7xVBaRybXA5TRvCn4QPv1mb45qFA15SWSY36xBWQLrq8SXKjKj5dSznq5zCGNPbyp6h3syvjmumAVF",
  "key23": "22AVuWNuzn5Brj6cjkW7pYBDir8L9DReGLSdXToknSALJUSzAzL4tjWheyJVSSGcwRKaHR47WAVBj2hs8j5FKTzC",
  "key24": "MczDQkxRGBvcShPEaGQfcHE3FfAJd44XKJKghMFo76C32YmDXeqQkGiXyaPDVr2jtAWjcqCnRxm6gjdwQJMXDVo",
  "key25": "5Q5mhizy4k4q1qN6M7bwC8Y1jqJFvnzmwXFdgwDi4afda6oFrh79NrTzLa4BMswC1tr7JnsExamJu5LfxRZdzigF",
  "key26": "3iWnfwVRzdh4fUhKra6XvjjSuSb5xoASP5pgNTWrmEeM9qwZDQBpVSEFgnscPHtH6cY45fd4boLcW7zu1PEHUiiw",
  "key27": "5jnCL5w4VYiYT8Wpb6SsTTdHSn5Me7rL1Z6Th7yJ8Ub1BKXzFmZPAN74zYpjfk5uxemEcBGSrt2xWF1Rhwh8C14d"
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
