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
    "PvXqXYRTLkUgEqDFPVEXxJSRjHg6YxZB3r7YvJLNRPKQzX8mVdApt4r1PS6WM7GXBa5Cv77xLDtawQS3LHsyz6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SdpT2VL7CphgsmGXS5UM2qnMGLsrj6V24foatjbbQWn5iHaE8vjYqTkEyhwZpWpeNSbLy2ftPYo44oAt7hbz3tX",
  "key1": "zwrmH2Rw5wjy8d1nVTDTfGuXUtZoGt9UP4SdicWeYMSnF6x3uqPo1eiri2e4nef16vemGZxvccJEbG5ebLW2eMK",
  "key2": "2BWMp2mhNiWZ8zCPCR3gfvdzgVSP3miJCpE68QbjgyTbCwX9PyJPtFLktpZ1EtH7mL2R6tMVw5f1A2ZauekvWw6N",
  "key3": "23gzFvktLB4dDiyjNq4Fuz1b8mNkouQTbmy7YSuRdHGXVa1EEziUx1LHV2TxjYNmpcmNFmghzAK9NvMddZFFu53j",
  "key4": "RXFntWHvJ8t9JEkRfgR27bJ3xgA3e2faMX6L9f1NaytPssDhtoZEJGc8dR7EoKce7ddHtbJDALECsSEC2wSMK2y",
  "key5": "3JP9hoiE8eDGthhTQEAg1ChySoJwDn1dna4KTRZadhhoT12hqFdjFjvuFwETvGSun4mCVrpK6NzgDemW7nmhWLEa",
  "key6": "5MwgnUiEriSjZ3xaWrQEeXSXCWPeivaJV7Jc6BRjJ1GrzUFQxnL79bRENqARAEUTmNACbEgSnfHfwrUeGyELyzJX",
  "key7": "4qdfKBxnresnur7q2TSHWj2vQUZHMYFn2eLAFoKurt6nEDt5wRvUe4cZ95rSv5KwHgPswucKtS7J6oEEvK3G9K3H",
  "key8": "4o5QK7HoVgeNSR1b6NyjXYwASK8zQgnjTikkMyqBBQotAFHCiDuey9yHW75v3pEGofZnXGTFXcAXDmwzTmsu8HJh",
  "key9": "4fZ5fTSDzjumRCZY93JWRabhRpk6ioXVik7YeE1HzgME39Jc9KvgpTCcznRnXjb9RXgofJQAZVxGtTtfowRtXbSX",
  "key10": "3JwwpsSX9DxEuZhaXDtsEfnBgptU8Gx8zBV2oxL48RXE2msszffKBH5rKzoDj2BfA6VcAqumbrRjLp33XxaNMGSL",
  "key11": "2GJ2Cu6XCzYfYhAVrLQfn89q7mWmASDWbazUP26eonAfjWFqGnqfNKq4UJV5CnHTEJD7dgNiv6PJJ85niz6xGD84",
  "key12": "2XVDMJy9Ep5zrdDviodTsNBTZe9ySvzYYBEiaefVu7R2yo6RoKj6JupHNkTpMM6NexH6GFYUdxDU22dNnRpf3Npp",
  "key13": "5iujchAS7rUXWDTQyRWCMEJEW7UAfTSdYJP359DGhU27eaH8Jt5fmDQHNnNozrSfz7qPTuMsJTbKZfHKqMSi3VZM",
  "key14": "4vGDPdcKLnLRBw2WSiLL6tXj9hU4tgyhZQdC6ysJUvB63oXiLTkbz1xQHRx2hP8D5x4cWfDcHeFNrsMa8dMbuvqk",
  "key15": "rYtTECtqb2ztvzYF63WGK2nDwEn15CUurUghRhwgEU3YUEZ2QSXk5xpNgUJ9CTpgTGiArCaXn9fiMXD1qV8iECD",
  "key16": "67JgYbNX2eGEauALN5VimmvgixRtbWrzcm6TDpTJV4Wp1UXrF1o87covtTHDaBdTY8Jooa7bQbAajsNPpxVfsKHs",
  "key17": "3oQrdtVczZ6WhZ95Xm6Tb24EnwcCqRyZSdU8B8anfYr89gdCFUt2ssRVDxEg3DbpYsCsjkqFoJXwrV5ECcoka8By",
  "key18": "jN3xJVfSvC4r5LQV5j9TvULXnc1GzsViVPU9c2i7XCwCWRyQKj2Fm8z49Vq6iCc4uZbwu9dHZeChp2SfbP3A3aw",
  "key19": "64xEydzL1FXJC9A6ytjHmZZqc2j21jkWpnNyomJxCShfojoSBQ31gzuaP1boYttafkNQxsohZdyprdH9WnrwoB2J",
  "key20": "4htH75ogbze6TurYmKZGYTnqoQccvp2RqLj3z6da6jMctwrGFCR4oV7sRDJTQRDvFKi6oyN58nMP1NujKVbj7ves",
  "key21": "4KTkQEh9EqVkR5SVBxkGSaDHHLRe2vkvgcRzpqRa83wxUHzewcqt7N5XUqkzvh9nXG9jSURRcmAjLzwF4o8ujGX",
  "key22": "5UAX2aMRfQ35ymxrsVxER5Hasz9wABc7EQiJkCx96bs8eEzziemVS8aht5SnnZK8ezGmRheogs6dP3VnMa8TysRF",
  "key23": "gCHV4RLdapKLGWxzE9G7RGEjZS4C4Pq52y2cBSawoXsesduaP1A4tDpGakPUMty22BGHLpBN4XqV5zG6JDY3TWM",
  "key24": "5XSsNTgsvZ3P3SovXTsH51QsjCiEPggpm2cSZ2C1Nna5LRz4AsRdjXD61WH9pL5KoAw82sC2kCMDDcjQRJu7UhYY",
  "key25": "298mEWfnNWE3EhJgGYgny81bQsMSJnbiChgfFS1NiJM384Ss5Ymur8vgxu7Zc8xgkehQS2yaRVPW9gTtqM8eSEZc",
  "key26": "2bPFvCPbZtJ4BN641qiB9hHQEe3a6sZhMB814udQrDAqCfB6sAXiAUNSAPTSEg5zJiH4Muw4Zt37x8aq2zB8oeCx",
  "key27": "5GK1HE4bHMkaqLVGtUL32nZCpoCyka97U7d6NAvTXVDT6Zxfmfc5udMj9Y9Jmyb4ytBj4WhUhq14CdnLdwwqMrGe",
  "key28": "2fexaTv69CwphymA9TtGZC97ASAM9UW1B1Yer7iahZAxbsnfLhpat3PQNK47T1E3VggaHJhoeu2t9W7gMGGgddfa",
  "key29": "65grBT4an5Bv9dbbDKLjSZbfmKfiJXMoYoX8UwQ8fQM7E9ntNCLyw8TP443MX6czfVUopdPjQJCk8EqYs9vunJvA",
  "key30": "5LipPdzJvp9FaVpwJRezZBPDUzH7A1Fc9kbF9YuCeRgqeLWMGvMJbYnvB1bvwXKUSeYs9suU86x1s6uVbJcNuWhG",
  "key31": "5V5ZEZvytaNziTB4MvAH2WNGhruKMVnjgiDGYZU9dFAwi98Kg9GxVw14mFMttCGcYxbHiQ9tX8yfh5YwTjsLFYG2",
  "key32": "3MxUuG2s3Z7r4LLqMpTW2V1BrUvE5z3WzEJJLp8YT5FSxhGYwNuyRdDy8gS3nFwXRVHcaq9MnwtMM8aad8eJQP9",
  "key33": "4168XFPL5BQve5KY1K8nmrDkhNpawgEv455hgiHZhqxYriSkbr38HdjSWPq9A9UuwqGXDsGhkr8htasYbpatUxtx",
  "key34": "yk9xB2mL7HMpVbnKNRzGWmNrHAYmbGQvf8WgKUmLmSpZ2snt8dd8x55wwBCGemf6UacjHhk4281QaFxanmTpKWk",
  "key35": "4jve1obWwj5eCuAbKcZQX79giqZfysxFNjKUoiX1j11UwASFRpZVd6joLa2vJAh52AiBeFBnSSNFX1ufW4jNTvW",
  "key36": "4THxFL3ks1eA8SAVnQcpcvXsw4q7VNLpTZfb4JBNPQgquChEEQRhzE3iQ8N5U6yjHCxctW15D3Fat9YSNrC8qgGR"
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
