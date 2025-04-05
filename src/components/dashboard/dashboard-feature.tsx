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
    "3XcQ52sYEVvFtfbVDdxrgyZXjqWemYGdhxd3gcNB3fmFZ36oLxyAoVLGNrtZZxfccrBe6Y2dZsqoMfC3eCx21M3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z2SdBVmaHCkXyN177SYfj2YiCz5bTg2wcHKwPcUgjSpjAV6cXWm2ykbQmUi7PWVyBmT4pKjc47hriDsvMJQgXUW",
  "key1": "22eNJSyw5QFRQ5Q9XrQ3hKrtNu4BbFd51bL3kTuBb3VeSzsAM6ncwmGa3inQequ2qfhKhHxKWb3Zw63UTd5YwZbK",
  "key2": "2hGYt8szzmDYVbAv6QWM3sfmB6dSeGqdk37VP9mmSF8BMYcf2kE3nTZK5mizDv724qjyva7RcB3qQWh1DMddxDZT",
  "key3": "2Gh8MSbcnKbULG9MLYZB5ZAq7MmnkhFuvLcaJHgn6TYxbL3coiD9NugxaKssV4PBrnobbuEp8uar48jUUeM3T98w",
  "key4": "3h2vrogiQC3Wswsn9fQfct8xZ8gqtcAnrHgJZjdpMddWpkS8TeiummEXRhvdYzLCH6mjw4krqMNbedCQDof2GcpD",
  "key5": "42z4TL2qxQeUZCDr1ELAujpCoth4w31HvcJfbNHJxD9LvV19o6YUdkESdPw69Em6TqESNGCFRNCHi5tNfgrkCqta",
  "key6": "3iH6d4cEUQbByXjiaXEjSyV8sCNFBSusGAqzzUKrjLdDFm2iHaCWui9Xgg7wv1o5USMJeGdJQ1F3HSQjKDeWtdif",
  "key7": "dP3rM8YodgbpaAQgsuPguAfk56Wdsi8vzEnDtV76mTjYw3nXF9BbuuQtKcKYP67ENAVaSAXHTB7oDc8Cg4Hq9hE",
  "key8": "2Qc9GkbrPYXtZvMGry35Wi1M1ixpinmv6Y7EmrpiZyP4YcYcEa9Fy9Vq1ZatY7FMec5YRe6W9wF6qeFoP3UkmqPu",
  "key9": "2JoboUTEuvAi81BHRTtWjRMur41oFzZitiy9DwjaP47HsHgQ6nzD8FMEbuoEn2MF3LrHFkzecbSqJG1iH8iFHJGF",
  "key10": "2tiysjk6LAUeCt5k2eodPLR2zdpqe1jewM5PAmD3tevUkTXkRo197zMgtUebDeAV7HLSTx8SpR7y5o7h1CEXifem",
  "key11": "5WnLV6sJE2J2kpWUWUbbTbfyigtjrgiho4Y6JT8jt5ZSoRTTN7dW228fyVPuzHvygcNQqE51wV7HgNCSHKbsg4zQ",
  "key12": "4pNfxPouJuPDYm3gfcqP6cibKe219rcierWe4r2t6CUeg3pR16Ab8kd89dfWH2BfNs9zLPLaaxNGVxfzdKyKmkHb",
  "key13": "2eRhx1Qeaz7dPQe3QXyVCJvcSzjvwx3FqudSm7JwbG1w8afy5ai1qjcJxQEzmLxRrUgkdYGSXHiePeKfvGdM5vFE",
  "key14": "3VPyXiMJ8osWiBj3nJCF76ms1i2A6tJroGDrXVkjidPey9n5gKnNLzyRdmWRqAos4fCHu6vZCaGEvCXKQqNx6LzB",
  "key15": "2qST794zqUzDoEx8jrnRTgaUh87YmhVcJ1em9eMyQZ3dtL56xWnHLYHLkVpHgKZAZmrZz95y5qQ3vwVuswL5tHY9",
  "key16": "66jRDwiGwVP58FjtRBzrnbCHE6CkQ6nKD2np7G5haBwBR9ATahTED4Qo5kfLWX56ykN5gFz9XsfxoVEUBR5fTp53",
  "key17": "5YvTcr1jJ6PHjL58EnddWqSWX1aHkjSh2pStLYhpnsvs45AAdwx3B2Ew8ntTkR19ZjBS2V9LA39xaR2ZmWxxNGRQ",
  "key18": "2NBtcHdWuBuDvUYLrdVbospveYLqMv2qe8xgwHK4jSrteXRYTXNS5pKwwhCfczb5bwNmNKgkkTyPK9YtPgG6C8gD",
  "key19": "2RqUbRm3nWbMLq4XMLYZZisLsceBLbQnP6gbHX2ZcgJVvcWWQutbU34ZKAufT7WLXiSiYbsAWz7na9414rk1uGrG",
  "key20": "4sELoan1qXiFa1hppTeXePYLSXCTiu14HyvsiNaNXEQ3JmJkT51JHoEkLNS6b8zS6y4AeWi8cC48XNxazV4uQnvJ",
  "key21": "fHTczFzyURSKnv67VTENcCgQG2UARUMMCVVSnD72Qc26pZmVLx25e75cge15Uiy5ZEiCQJ6je8kEMHSLiz7dfxP",
  "key22": "MuLZfNTJ6orP8AMGRS9eu65WB9UQDHQtYv9Emff8wEMZvLEQEV8KMeYyB1TLrx2WgV3eHhussDyoY2G3Tukzvqp",
  "key23": "5HXzv12mbPVXThnr1wG2jj7Psmcod7S2vhsixu7LGFJnEHft3atQ3Nucvfm2mfUVS3LVuqgCpTuzUFRreTmY8otD",
  "key24": "48P8117zZBEQxHG65TUgyVrmkMJLcposrwJ8mwEjKxEKimckBQr9rUYRGt2YLVGeB2QpcYBD977mrbG4wjsbxJzS",
  "key25": "QXSzHLzG4FDL31yXo55GkjicKek15VziihSfAyAGsdoNy7V7QeSNgP2exvZCpbxvphUTC4uBtYPjL9shcAD8HkN",
  "key26": "184wQwSGdFeJybn2jxmvc8pzM52dQve1Mf9bJCtbMZmKTNGRaL7Z8ux5MYnk9rWrfTz6Mm6cDDYjghcPRZrk9y3",
  "key27": "5zEgQuj63X4xQi6zFzU7nuTFXQi9dnKgNVNVaBrC8mCPp76ETWRRTmohTjujNotdKPSwwHEeM3vfg3Zgryn7fcJJ",
  "key28": "3TqPcVxCCRaPM35DScBogeknJi9EhP8piYigBT59sCxmoSEPuPSxwRDiJRHcvowayeDN6TqiK4Ede3d1eVM75t2a",
  "key29": "3WxzP8zJ8wtnBE27cEpTAYyR2ATeSsBH5t7zY8NFFxn7MfqQajpdNeF2QbnPNPeXG1zgBfGu2eMh3iCamjCRxrYy",
  "key30": "2qyKpDWYobNHMtW38ewHnd5zfQSofN6pQXfTMrfFFhTrsRn2mVLrnJ31pAKkouEGLmzxFU1T9KxVWsqy8qyFsVSq",
  "key31": "3UfAKG4RWkNavMsA9XL3hdz1MRN8CZ8Tfr6BM3KAWzbQqAzdLfq8Udy4Td44wBB4YkXT4gwtKPtuYswFY7PEiUdT",
  "key32": "56D9nQsaXaKakrzuWEuJ5ZCkDEhYZ3e8vpKKe2rAWr1oGyBU9azzW9jawdwRcUa1eVaaHoL4iFSvDHGwtVjXaBDm",
  "key33": "5shFnVVmdW6PWRGvtAiW2LVz9TB9VbK9B5ZY1QwkXgFSpS1H3kJvtYQ3hpZ7ygP2bKrV7TP8ciPc1EY6UnXr7F5y",
  "key34": "5pHMgJ155gJmA57NM8hzr2ReahjAsxWCSTHK6JD2zLzNsyRrGTjdK8jcwQjXCrzbpZJtxwayjs8o7VSwUvFZz8CW"
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
