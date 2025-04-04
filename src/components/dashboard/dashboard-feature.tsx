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
    "3tSmXWU25X3M4sk63dFscBnjvq5YugaES2sTYVoDyHNarQKMfXWddBo7DvEyaircqH5p6o6r1NSrDhDPyQonzrx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37YrHsh9RVJXR6s4416oCs2J3KppR1XNkKYjGsEhj9PViV92Nh8btqTgs6mbmkYrGcccez1tjLUqVKjvU9SMPDkW",
  "key1": "3ar2NN92Tuiv6XPYJ1cJAemYGfcEesvduzPDdYBXJmrsDg27uMAKmdzAiJKKLJZ2D9BmsZ465bjRGQv2bg1w23E4",
  "key2": "5ysQTk9cd38DFeVmjtPKWRfPxuPtgoL159fkHCYqhf4uC3XMoxmeHHXiG6NmkJhh6pFBTMTQ5e33NZAPnrF8mPUS",
  "key3": "438Zm4fzowWkVKTmHfLaXPXfMAgvusKTBS4bUiPbBhVmUEQoCd16dsmynWwvsz31SXr3acPuayyRWw9uAKHLXdUA",
  "key4": "2prNQdcNxRbzpXYrDpDkLGHjhsaN8Gyh1fPQMecsGpEgCFKBVZ7iTBhCSJvLcTVrjAnGFhF6mkeM62QzBBFAYB7W",
  "key5": "4KD9VkFYpMXGPQxbemAmNqX5NmDSeFD9AucyC5xgUn1VeKUenaTnWhR1ArrtzRirtuYbuMpEYprpxzekhQAQDr1x",
  "key6": "2UHvXb57nef27qULsqubFz493BFA6YsgGftvjP7Sh27QwwrXkt4NvrtUBNftxo4LSGFUPqJAN1KiZa6hSyRDpELb",
  "key7": "4pnpSNf3YvFpysAhd8zCzre4rNQyzfn8jcX5UFphttSP4oBP4LJ4uQZRP18296wbjSEW8uZ381YWhuxG32R2FfWd",
  "key8": "nzFK5NbeE7Yuq3p75XyDC31Z1ChgHHSNeYzEe2GLX1ynYUsTaBFj4uXYiVEi91LHEex2Ar5VSojAB4yZ3GPHHmm",
  "key9": "3Xyaz1cMeWcNhuu5bcPxhhS7MZ6uBY5GQeH3Nn4mQcXRUm6XkFwSeJkY7djXGAeeTG34F3pkgZdQasqkD1oFsNdV",
  "key10": "2bGsKiV2PgshcALkWy6cTkXJfuQDAtpvoMN4HBsSZ8kSi5Sj9CEp8e8dtk9oh3dqNuUPcY439WCX3T3Q1xy7bPJv",
  "key11": "4XEBF9Vqhg5AUM1DxfjdPY7hFjmrFXwTphnkDGb3gPCJyrJchTmqLxkdeAvSEzB19ZLwQKpPz5k9Tj4MxfSiret4",
  "key12": "4xUTQL93HxXVQaaej374C5BRcXrYfZtCmoMwvrMo6Wq2NP99mCpaCQGGet8UWes7KWrbNpgoLAUYiRxH31sNUShE",
  "key13": "3GVvJT6z73XwdGeptNpMuEDycY49oPZ9yfWXhqr7sK7komJYfxQXbKVR82MKEWRiwCWbFyG3kqgLA3486334EFxB",
  "key14": "57nHnTV71q8QjojTrFP1A9oDYA6B8p7MoY4eAJ6zmWHgutmSJ2uZJMphNn395QMEyVzHBxmndQ96HRxTbtLk2ZZm",
  "key15": "2yNUYNxdcAxYRtZw5BZbz5TGnMk5mVYinXjAPK4Vg5XkKA2T33Sb5y4Psih2r1ph2oUK2mRfwBxr84xqSSfpBMNc",
  "key16": "2uVxgjxFYvKqVyt9FYJn9PgqzSsVVDhcHmaCTAfSYzExL4X7QKGTbzG3VTV27qoYqQbebDJPhu4KJxjgioX8BvLk",
  "key17": "j7CCJy7DvUWD19sG5aSQJez1WVR2auEvyhgCDeAN1F8SR9tquhqCzxJ2iAkgk3iLiTfesBeXvkSbe2WgcTCf7u7",
  "key18": "2J2tDSJFuyuVSTmkPLXwENiATD7Fco2nD3g2U8HVr7n4zEbK7JqaFuV3LgRzFw8eoxvDwa2wY2zELAMhGPM5iBJ1",
  "key19": "4SZyhqkcY78Xdgk9Q5EoDkGbaLMtvreWpyw9oU1aeN3oxCCgsL9J8f34aHRKHNYY9cV9YHCrzf3mpNuNZmfyidRL",
  "key20": "LbekhEDQ4Xqze3nXhbm5syNChCBcPRZc4VmyKdahEkcm8mtrKzo9iidgtH1dAd6mUNbNAPPxcZfkmXtFyps2oKr",
  "key21": "2PJUPzze1EpPHJZPBXVFfNpMSs76KodF5CtrHwpRJ2VCCQ9fkra2ctrJKoqY6pKi1dXXnYg8q8u3RYbEm2GeE85u",
  "key22": "4jcu5YHtcS6gNj5wiAnD7rdtu17RoqK2b6n4Y8hAk5q1apKzfaBQrP4ZbwNJojV98X6tRkNDAJ7xYCpEypnMg12B",
  "key23": "62ogyvQUhb4LtN55sog77ReEb1Yy9mHMDWsHDfZxECLn45TaFDvYA2M87k6MQzevKeNiVAEtYvM3WNAxRdtP3x1",
  "key24": "2utXA81oveZehvdV2TwVwAmmrTZscGGNSzFm5DeJGffBbD4Gsb98ztD7rGzazh6gjenSoThyzPQa1tY4fBQCq6H4",
  "key25": "29uyWEEFYHPYkMxJLnXgZUJbfBa9nBoWxQ4bqHvqUNC7YkAJaGCmJnPTH9wueoweD9rJTaDf8FvBnvDVAHPAHDAm",
  "key26": "3NAtqf4w2x92nz6hB1RBdmA4hMN6oxdMsa2nRtLAspuzTnFNugRq9p8yVxJym4rhubkzd2NdqwTno3TW54TgRneM",
  "key27": "3usbuVHpUiPU7oXpUpc2mtJuVjnixhCPWYaerikk6HTWx1oeUF7LuoKuVPUwPLHGNuLp6QFYznLqVamabyEQZywG",
  "key28": "3WXcgMK6NjiDVapMTt7xBV9ebjVSXtCAeUNX3jyzY5nrmAKgXGTUMaKBrsievn9HzsmxADQAED9za5DVzmLiPUjE",
  "key29": "2eB2S1zdpRyZMs2JbGzJaGkMviDNZsL2MUr7sqKJ7VVu67poHUXhEpGNTPT4PqN4GuSDrpSST5e7dusnw8HV3tmS",
  "key30": "5vS8QY1kWcCA5LH8rykHiMVm4yprf9EFxR51HLX7AhbKb7gc7jEdB9YbTNTiqJQPPyUcU952LfL6VqexnFHtrX2L"
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
