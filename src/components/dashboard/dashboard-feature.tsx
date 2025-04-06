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
    "45LNEe1S1ora5EbZYrDmgmnbTQ8beJ6vhTwPXhoBZvgvxz6fUiNyJTkYWSA8boC9SgmbvgiRbFADbpzkmAsyUeUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JCrk1FTCTnx1bKtJ4FuK3GST6PTMvKQFjg6tF2qNqnBseNiHyMsiMRw6eALkmzqDh98n2aggZ8kAhEXZRYxP57K",
  "key1": "3PgcinXTRJq1TsnpB95FT6VqLn4CvxTzdaAbnJSWMpJpgtCfVjNSmrg7TKSgqMy61DGj9ggx6EkGJCNajLnpLRX1",
  "key2": "37UgipPiu33PVjU2yr21gF1PSpfas97Bnwmthmjyn7YfCVnYHWekdWtgorAPGtoMSnkWXCivSxgnrBg37yDghVBP",
  "key3": "29DAEqjo6W5dnEqeSK9jNinuBPNnse685SLvU23LYYNtKydTyGdvJqvQYCtbNCoLh3tEjBqvSvoWTSYx39XCg9y1",
  "key4": "3tGRCVt5xPYaLtUwVYXioNnv9yDZ8Y3Az8mtJcagEQqPPG1Tfk28R2iP15waF8RmdZUWWJB8h9oSbbLA2Tw8U8Jt",
  "key5": "rKX75wxhHAxLKCLxCtT5ikqKPJZfox2ckUopC2ZfuPsE5FsPbFLyUpjozBFeQsomZiKFJLudQoKswU9PK5WdxHd",
  "key6": "5zDgwYcjo8tHpawQEcTVb2g77eepb8ftodSUkctHt36H5eqxC7brsx8K4H9mVQWSU2oYWXqW3d3HC4YgqGhr5fqC",
  "key7": "2oCNCpeoa2a6jVrKixpSgCfTDabNnrxSn2DXCoyZqU4Jgs9gEjdxNk6nK8XPYXxSr2crEkAbsGFBsjhH9WZXEUY7",
  "key8": "3zH8B6PWo2Ttri9PKWNiQcKtvXthHuqSSWsT95jqiydAuB7eoLiGie3CRpBofgemEnjZDv7JoTPSCcd83PGkd9Ri",
  "key9": "3Wmp4jcHhJpVMVvCWF6nta8h4e5UU2bKuWCAZGkpPe57jAHXbziFXPVwDUvU1LmriPGJRWV3A4sSyNqi2ofJPDzU",
  "key10": "5NrcgF2yZHGCVRNEqYxs4x5HsRERZKxtwNt8YEEnQA7odTauemoc3CxYnuU1EPpVZu9nAV6Yaa9KRMAuvKCZJA1z",
  "key11": "1Lag6NHuEL7VwVw8TMJw8Lt9PNdSrDAcgBR5znhQU8jpu8JSgNLNmpnJSLcmSvY2XGagFZhsWbDPYecYRuyxrHu",
  "key12": "2iy9S3nJgqLX9gPQt4sRGRDyXR3kfd2ZabByATxbWXk3NEQFN782M6DfLoNh6mo6xkmefxn3s5FQ7aiLsdLWUtY1",
  "key13": "3QwbBqFeeEtDJNRxySvzp5nSqQxyszWUNywszZn2f8upGRdVTjvU72asaVMpsaRmUSjBMfxaPH8CkE1C88UXX55q",
  "key14": "5Z9bDiQsTUbQ4kxHoq2jVhPyEFtHfWvPvziXRhTHhKkS7VExikz61RgwVxX1kxK4s2rp3mz22aZJ4rwmFed6zWwF",
  "key15": "3L9wEAT39vmeM2v5eCBedQuhw22mtLDQbvDW9k5paSAgy647VQaw4dxP6S6JQSga38biiJfHhVc7dS934f4jaFCV",
  "key16": "4Ue14SZVoEaZ9wSuXcry8uCtRg8CjvPeS7bz3qm2jCHXWTA1VELnpe8WmRYVuSDuX5FmHJsJwUgxhaCWYduYUEyY",
  "key17": "5ABfLYNUneQnUo8BEfmTKsgp21WyTyxAwpKn9fJhPFeufNjenP9hdSodjtxseaXigPnQR6mJ1Q2tfLxY932gRB7Y",
  "key18": "3BBnsbGqo7bSYF87SbWFvyeHzRjkh2L9ZrE3bjvV9d8fCZVNHCEzZRKf3d8cENdPQXa1CvViLTnWN1QM4anGi9sT",
  "key19": "2LByVRB5EjQ3LRPaSXQhu7MVnejhRSzx6JNV555tcHpbL1eDjFqaEd8zYMJResKZRP9qfdkC9Eop2CHJkbk84LYT",
  "key20": "2n2SXHVyMYTjX5R1hooNnJTz8HHxiP4PCYxQrzuUvYgAvn34ekTpbntCaN7XagTfBr4heYNFv76P3QMtgDH877JV",
  "key21": "5H3caA7Ty2Wgrkpu1w8ty81LCnR3Ufp8JcHtmPP5HC9DwWLvgPDXCAYWUhpYv73uwuz1td89gSFfqrVU7p6onYww",
  "key22": "VSSiGVhHBXhFSxQpTpEqHzBnacEYFGWSWV7QKL54LZnwTSZuNdZQbEfhvSmKfnnYFgszZSv2QeSfVPVz3N7a6So",
  "key23": "5xKWisYQsoVVg6b8EYJ8VZDVSdf5pTfS9CrKNUYNqVJVMKPViGswTdbYCjc98aKTxG8upHo16hGp1NaCHA9WHv3x",
  "key24": "29kEKgDWcqpds9mJwFPGWS2XAYAUWQ35hcNM7niSk5EzYmbzGMUZBLu3xNdZ7eLJSsYr6PfTtZjNffuS8tRzE3d7",
  "key25": "3jgj61U8w7Dsonm43VCqUK9T1ewhadnNCueQbqsPzvfE8kaZP1hofJka6n637mKBsLirQZHYgsuyuRZEN5QfyzAC",
  "key26": "4S6X2zvF4PzLPSUTxjKzqMvHEohMChgV8kkb47mLGNH6Q6dmdZT2hiNxxwnSFLsWpPeKfj6CnjwzLFBwqfD9XGbh",
  "key27": "4KGuuRmB5oEzmwHxaQzCSsjGstrsFagu89jGsFtEd4vPwt5LMoaDhLn4PzkZrHQTjDa2TcY4hkzXXkrTAQJfZG5R",
  "key28": "3wsxPkp8f14Hrr6fD96hwZiRTpR5FB586iNCF4584do3sCnoeW3BgfDWt9cQyQxA2jpVnycXBVW6KAwaDGeer6FC",
  "key29": "642u6Cx7cipV2JiU1xXghKp4kM2utJWfZb8WAUZS1HCro6hD9hxPzL9jWx6W9DFGv3Hy4kJbHfi97LNNNsNVzV8F",
  "key30": "4y6wHGEPTuGp5RwZ4ZxnCo7eMZG1ZmZ7ox7dVsCQv3vd6gTqz6ZyRZAfH1psm4ATFMhsihJVPncWYAnWX8xBBPaz",
  "key31": "6BUXti1D19jgxGUgXEhXnvESDzq11ajsSHBz5oavgmmauBjrdgNh7pSpWMasHfFpW9NBVdzq2ibX6mrTvk1NjQU",
  "key32": "2AVF2rgQWQoo6jfoHaPN47XtAUDbNtLFiR7JQa4j89zzrgbxesV7q1AYmGRMfu6LpKasN3BUJXVmwJ5N9nuBztrQ"
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
