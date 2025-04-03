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
    "UfPgLpZCYHF6sLxeFc957PoEPeit4bCM51ubxrqFdj9ejZQtBqAvgv7JX3j2Si5gYfoY58bucz1foeCbxboe3Tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gGTe2FkuNndxNM8TeSZFPURJoq1e3if7JmKsBdfnv1Cmu3T5xCfg4FuTNURrwyacZatQRnpYx4YdN35mJ1Q1mGY",
  "key1": "5hk6HooT8etQDU2D2tAktWAsMTfPLaG4z3sjS57mBqfAMvAqzfRGHEeuth4UTKo65fKTtotDYT3yg3teaxEkhseR",
  "key2": "2A6bfZ9ddtCfkmapRLSbJ9LtSFaCFLTTY9o1eUqHT4n4C2QtPFNg4FFLNSMXPRXfP8xr3wo31dNMYLsoZ2a6XcxP",
  "key3": "2bRAjeN7ofDQq5jdAS3LLmQbFLQfMUhLZ4etnqHeePRE9hVM4y3SWKMeNAcMZ6mkK3mPmnpnQUQP9BzUFjMaPkGu",
  "key4": "5qXWEnsHF7EpHuyLaL3tZ6RvALhkHPMs58GksNQ8c6S1BeHSGmaSxnSSFx23P97TbBpvo7Ah7825iyghURp5nkyx",
  "key5": "5cYSpZLH92jwax5eotxpWNBtytWRM5yBr1mYsjzuZM1hNBAcfiry1DHJXHS1Xbop7zxQiSuQD5ULjxRgy1M7duQ",
  "key6": "F51iR18ts5p17VuF5tGDwhL4p8mdnArpnDN1yZuAKCNfi7poqsEpju4wtbJ5kBBNT5Z9poE9Gu8KGS1dLLA4dPc",
  "key7": "4yGVZtqpMPX4nzfYcFLhbUMj1e7z7qNLbBYtN28WVnnFaY5ZuoNAUftWCKZbeZrssioVBspfVK2aiL3dgLsko2KP",
  "key8": "2MCEcZut92fXJFJomwedCTwTJUYmCBjbLhawmUJxpEFyA7PxGZzvnZhdSdF3y6cyNkQSVaZXsfwsTPA6r6PW5vmL",
  "key9": "4N48jphxCx3Q3ZQqUpXKScFgQrHvkR36XwT7pGZe6TwkmpZgKHNQPLbr4dZAeFk7EwVi26NSJRkREieJUJT3fpWb",
  "key10": "3v1RH9dgz1PiiMS9nTZm1TE7xmwKR6KSt6iZXzcKQbRcZXJuRNwjk3wVgvVfbC4z2Mea6kV31w4n8REdhp3FxvRA",
  "key11": "3tXi3EQrAeBNrFwrhLVeXUDdnWvfhHj5rP7SLqPa2Wh7Fb1CoUD35srcBm8GgXAFbKLCVyq52cAFSjZFajQ39WvM",
  "key12": "4KrsTmRwHQ7CmAEic3ZpWjmAN8s4oM5GLV628Fkj3DA12YFy4Lk3mTJk7VPVo7s3M6M58FPRqnepEgnrEuUG3YQ9",
  "key13": "xF9fim42tk521ezBXcEV2PabS5DTtE7FqZT1TjvT2ypqvGeAJsS4AyNnVF2DAC7k2LnpbvKAddCbSWuiPDS6bxn",
  "key14": "26hTFB99V9PQWKJE9oBDcj8myaC8KsxzUktr1PLgXJk3pMizH1ZzBYiXByqTvuTBnZYji9sep8nexD21YfQCGKAb",
  "key15": "B4mHe31emZzjVbbLsUyGD9fakn1c84pZWkFps8ALqfxxWDVKxY7fovW3iDKoMwb2hoPD91WmMuwH13UtrYSncGc",
  "key16": "4R6gFKAdiTLiGMkQwR1iNiz1tas4t62FWUR8nLxS85YSKhwnp34jAK5uhn1qbzMLmjhYPxNsaP9SC2HVwfJbcMi2",
  "key17": "2w7zqd6UysPM8EgQi4i2SYbSWadkEvPL3Yt97T6tjWA2fKH3a1P8UC9mSQc3ZKb4hyRiJjyLSNLs8bQ3E3M3bzjf",
  "key18": "5S271jNe96mBLJoM7HXhnAFhtPzDNW1daBVMk8MAHq3Y1o3ipj2CffxCnGb3CsnYJ1bmjiZqjsm1cmcpG2hZLhaN",
  "key19": "5SPorMkAz82mY888kWejEYqi9Ne4fhdWXcTVPKREahbnmPspJ31RaCdofg6gBpLtNstSrocfo9QuRsi8M7ZVnZGK",
  "key20": "5K76VzefTDw3689E1Cnb8nspPSX3Z9BaWR8cDjEAEvzDtndwrcDs4d387s1WyT8xFsSZKCTMB4UkDb9SyBLDudfg",
  "key21": "5BRQ7BePMXAMTSqWyoUS1Bhae3GtrQUYaRMMe9vk6io4cB57optGMMGXWgDo6mUGnkBR5WQSPDZqwPwJNpd6YGhs",
  "key22": "4TMN8cNkAj6uhd7x2dauys6RjnWnGthMiA4M7etBNCZE3c648fF1KKX54rD2bGiLF8oAcx2PQzptRtH8zPSESC9D",
  "key23": "63ouBnvo9ToCd3HRAQsFw5jMonUVpPU6veB2Q94iLoEki3fV2WX8RhyPZZKLeqshVW8cK7Xk6VvuFJ8GvB2h7Pns",
  "key24": "5SoPdvL1Ym83wcDN3YyxcpsQcRE595vHWfucp1AnFPTsiSftrtdfvetuhZimPb7nw61aVwE7F6d8xJ6JHdPhkVc2",
  "key25": "tTnH1kAGgwiqHKBCRaU1hbGeyhNYAqFcTaDWVpLfPdoub1dFDy8CA78CcJqrJUMcd7SyJBHYHd1RsT5mbsP3Tau",
  "key26": "5NJ2N8ZLdcgY5PtH8QJrq42xNECyuQoHR4xgG6v5poM1cyq4DvG7dysBTJAqUrSLX7JwEeNaUQc1FtP1y72G28f3",
  "key27": "5528i2s4GjqEuahwXhGL3TUzgtA8eYL5wL3maq43Tj4rnFFSqYh1v7ayuhsstrfXmmiQsE23ojRvd1P4mULYQR2K",
  "key28": "yVeo8nk3BqpMe1y4UT9qK2wTb1XpeooBpjfFhQqPvxnjof3wechAUPAeRVgTx3wsSNqr7mGVEwyk8CJbdHRt9Tt",
  "key29": "3Fay3zV6agLAwFpuxn7mEJNdEDtPVgFSz4NQiRvg8Wy8oryLYxBdTVKepwiDGRysnNcvJkb81qjKJ2sRFcr974Az"
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
