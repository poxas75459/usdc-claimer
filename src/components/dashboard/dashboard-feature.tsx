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
    "5SuNWvTqF6o8MdsR5nAMEeEi97RQxuXV29tyLSU7VBZcdfacDwc9Adsg1TpuhJmNiyhFY5K53wx7wA8xWtiJoRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ss4dfGpCLfe8cdSL7sUoGR8QY2KJCz6tZUBnAiPVm3zbi3dmBtGVQmVecHfnH1EZ77PSYc187B1DmKvTPYZ6xjw",
  "key1": "C9Fnho3ULpaPxFgvPJBRm5FuYQ1inTJAhZQX4xDbEuVKZSeiZEtsypZ4j4WiEaECDiTtMUCQidnu3pNXKEAvZ8h",
  "key2": "AnB9XxPDzsVVzbXB5UP9ECiaFBEVV18GRo1n8eLy1GQRJKsxpnqyasu1rXYccuJ7xDVXe5seEzxLFB1oqUtJS9i",
  "key3": "3gRNDP6csy375xV1KuB1UUmYUuGH9HEJ4JWMjKeDVgdD46uFGaDSu4UWiDFyDpkLrn6SdNieUeEh7S1DV5rDPtG2",
  "key4": "5FjKJ4zr3yjoSJnwJJW34YCyDAWkobjWHugCxXJ4xLzmVY6EKkHERqWUvkWZyqACRuzR8A5HR9ZPcKtBGetdz2Qi",
  "key5": "sM4V234N3bFkXCjdi4QUkBzFR46XrSHgYFMgE48wjozSctWoe5nmcKnjabFbgYw25y1N2bK9iSzizEfjq1naseT",
  "key6": "67neNW8LgkYcU8Zd9ZFTxwM2yTPyz5GRfK9WqLdgHgsccL52Cj6paP9CAtEeYwH1sYA9ZCzCRX5iybH98c2P27ky",
  "key7": "5z4qRRSPHsRySSGS1KiaoLygt94rMtt256pWns28DHqQkDPsFY6c4UGxRdk6TahrRjZf21EwPiGSPbrVBcp7YZn2",
  "key8": "57qZoSXw6fxnbJdiJBsx3piUxexPAs5ecAWWRbMEtX19Ki22wXx2ifyuNrLq31BdjhPdFnAfg6tqkwuNiPyGdnvi",
  "key9": "3tpiNNsWT7XhS1yqKTR7VTtFrKnQExagKfmjsULcwb6TaixznYruj5eZhtsVUG2HetyWztBRAxvt2RpYZRwWBga",
  "key10": "2qzkUxPQPWKt3YeeT9muCSG3Jo5c1XvTYiAQTGdCyPRwHnf1w3umk7ByxUbYAbairRouJn7AUu8Hw3jh3LedQ8Np",
  "key11": "2rw15b1AsCPLTwuJzwf4odcoaiw9SNg9qQrNcuuHriwcv7JDLhv86Z7xRau2TfEciX8kpSd7RiU4bJMV1qjRvYgF",
  "key12": "2PgRVk91CWqp4B4eQn8osz7FHBN6pfwcVeioDuSHDgTTp8kyk78h5AV3AXzV6CeQ8DgnqpVicpnFm5rcRKeh48ja",
  "key13": "4aJ2jsCETrceNgkGzo8NVNNegktMAnu4HvEEBzfrHAtPdtmed9yFSyoqqNCwQP2yDF4kC8on7sRAm1acKbaMHi7H",
  "key14": "4HEPUJ6tBKXsY3mke9ReDYVomEbT8d4u1wXdr16445FvkZ6Bxuejnb7gCZX79wLS5NnFgoRcSgiCApTLcLJLjXgh",
  "key15": "4DfbWteoVQ8UmMjkGDsHacFkAiDtQsTJ23T19w6oCXdkmaNo4A9R9gNmj5wvMAuTJrQu3rakfsjJkvAd9HgaxaUU",
  "key16": "5WXbqQsJJjYAQCtrE3THwf6A2gxAHLVwG1yU3XXafL1qfGv9yLxtMfcvMiDUBoSdkGpVzWPKMGanFkXcjmxRtnDn",
  "key17": "pNAXH1sxLjYf8EuTDr8wEcMDbJndLVi2rrh5GqgKumim6U7TTm2sN1AcojaDbbZNxy74iz1LGAETXQsPEuSHFmA",
  "key18": "3iF3LDA8eg5TQcudshzfH1HedvgU7GwjdZETnbjWhCij3cyBgeroccwRpUgmgM6WRXv2WxMgg1TX4YEPkhejmmqt",
  "key19": "3rfB3RrhCctJeGty3Tvsq5V7apGaBFHErdDSf8Z8iERjvjRwz9Rsuxos3tavrHtrHzKBRKXtfNWWNcZP1E9498fK",
  "key20": "gTQnmdzsr9iXCKtRZKeRB1fiQnWnPu1BcH4TtbyBQpMH1z3Ny4KDPrRb8QgbmjVcmLodYKkcvU2Xs1BPD5bwZRH",
  "key21": "5aPFe1JjtAriChpnTWtpCvPvhtQ2ivWmynKMsBV2vETRFVAkMCw3ekhGKQhypihRDNjUbvYUPhTax1eRWrhJVuWU",
  "key22": "2avWhzQ4Fvn8Cg573mbCVu1Lmg5cfsrCcaorNSXun9sU6DuRYpSci7V6kDcKYMtAESzmCERAzzKgcTqUVubKQCmB",
  "key23": "3gQWyWZxPzjRT9L9kEYJFzb6HRbQAjwMxoXSEtvThTy2en14TBP86XfxbTAqdhmNS7rTBM7bGxPJykAnBrAXnJr2",
  "key24": "4BMPLp2WEFrz5KpmpW2zEhvbVRsyyKs1X3nbLgUzPjB6ybU2fa7dgxY2HvwCp3RgLug9JCYXu9HF6XgRHSw7LxmK",
  "key25": "5ax1wR8HdKT47s4BFnSWCKaxBUCEzDR6xtiqzezVECs8BSpCCyVGfAzkHW2p4xQiaEPzqm2S3RdrUDe2tUXCCMpP"
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
