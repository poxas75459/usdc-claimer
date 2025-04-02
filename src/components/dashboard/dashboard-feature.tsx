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
    "4gDiSEkpcuiEb1RbUm1HSYBsW8sFo5AkDvTtt2mgjPD5DqyPTRajX4DvBEXnm8yjgcyndUQYFaYiQtT4orRboFAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r9FZsfbtf6nXKMmnSdfqTytQidGwuouQ2f5jTMjG5gBk3Szh4Eatpp1Y5dUpkCWvAwFujJttd1bpGQgRxVg86ri",
  "key1": "3iDEVTrLu32HcKM8UL8QPkmG2Ub1LS7uybbRyNmRtumZpSvmkTeCdAz7ju7o7XK98JSu3s8mgRtMhVK3Yecxtzog",
  "key2": "2vLqXY1TMSz2FrDhS3Ggo57Ja5y6BDD3M3yzctqVVUHgeRSYXs1Gy5hhSshmgPQbYWkBrFtu2GzogYtsiJkhpCVC",
  "key3": "4TZtbnv1zc4GGvnBqD7wNA7aSvLrh3NDLoyndBCcUjcfJ2ZzMTZwFQRu7GGxEdVhMBZrC6txLQJ25nR5gP4md884",
  "key4": "2LfiAdXdVgfZeiXwe4FvAh2L1953JngBbpp7eoobsQ7FdyXX7HTH2Af6zpBSgxe95ktanmPRMX4EqfTGUici58Yn",
  "key5": "gXwoq9TXKsif8yyKUw1RRVWL4qTLtmmhsu5A5FjYp1R68g3g32nrKatDZhCC9TXhMzQ1cEpp88MFWc6q1eM573V",
  "key6": "3tVWcdLSKv8ArUmz6uPA3r8QDaUtpGKkgEcKf1sTZZhu7JrQqtThfDx4i52LgTEHyzCpDG9d8s8fWEdo17SCrfSF",
  "key7": "F3ZfHu62vyrFwGdTnvjsWUz5kEi2J95hPzgRcDumr9ZS9Z7pR72RmNJZeTomVeRXFMxGDXC5b575tGUngG5KDxk",
  "key8": "2bJnfRmsyrGtVHnYHQSP2NUvKDDMctrAJ7a4DYARMptjtrv1UXEdF3iCUKkGRn2bR8ARCZRD5ad3BbyRp9uAZoB3",
  "key9": "vCJ7S8ECmJLeGvr9UjpKcWt21EwvdQh1qpmY88EMq4HaPfuK6SbcLsRsknX3P17N2ww3EFRjffou2Ng7mENKFHq",
  "key10": "3jiZQanZptNtM9uiBMrGYpjPUkDmrXqFJ4BBq5nfeHKd4JDnUpYQpVsy7LA1WhivQ7FFHtiE3M9JsgQiL5MEPLmw",
  "key11": "26n6z8jV76nLsPaid9Vh5qbP9Yojx4sKf51jiUAkzZb9wPLtg7bwe4Nhxw5GeaEBcLHBoE2Yfbr6bkwJQ4tcBGkf",
  "key12": "4XQ9FAQpiUuGswKuiuv3X65S6uTVmBuEy7kjGuLBHKuscbXfMMSKhB5Q4ceqaCrwukPM9R3mivjatmDnqac5Lhtz",
  "key13": "65NVUcezecXx7gJGQkv9oqnoCs92mH3M9rCNVaT9Lt9scGNCYGYM8G5vMDevevazxxJWiyy4WGSqLJuzSS1FRhtX",
  "key14": "5SPM5BwchYGWxL8w8JDN4F9T6MNvxYkNzmeM8e9vpS36yRYwr8iaB63kGJ1gu6b5UEhonBaCgex6rve5qCSDSUWx",
  "key15": "PoyUTDKLWm3bDfE19sV5DXKaULH5nJ3xz85WjtrCdKnY3n6MG1NjMPMYJaP9jfnrpCvtoTyRWLzA3ySRqacetXq",
  "key16": "3pP4aKUfLiRqMuScKcgjt7SPvCrFvbL5R26yUFxX5QsxYLcyH3pLztMcYUjdN6xNcWbMWK3cvUP8H9Lj2Ewn9PMv",
  "key17": "3dSnY61m6SgXSz587vpk3BkCfXV9KsY5wmL4NRnTSjKzbdrebh1jdDQcKY4Mrf75aNRjcirQFRXSYiV3uRmM6y24",
  "key18": "3X3JwFQwg4N8on7SP4rYmspmYv4iyo2LhJmcsrfaag6hTsj6zq9ykfMPdM45kdWVubCseqX6mRnPgH2yeALJfVMZ",
  "key19": "4g2ZCsf3VJoBBPwvddqCjpkoLHmVGVzaZXp5EPM7B7GNJTrfCMxM5TQrfebo941tLMzrhvAWHg3crNq6g9vYzVwb",
  "key20": "2vgfFSsqmHjd2VQJUQ6YA1thcAes8kuj32vNrgoTWEPYpjb4UsX6YpQRmLrvXWrWF656ctayqdcwQPxHL3L5Vvuw",
  "key21": "24coV2fVLgCrYZpL9nY7GdUhcW1MCJKGBQsiQ8mZLXvpB9GoeZ357bdezczE9njAoJvq18e7mkK8feDoBDSMafLh",
  "key22": "2MTQWypSuzzWxTZCRbRwPwBvyY6kJnqNcwBdLXMcKQNiD8xMTXmDELHGf8NSPh9Dwj1MKAjudJtw8t2rbDZD8vJQ",
  "key23": "3hHbxZLftbD4QEtNgFvLPWJfXHo6Bf78i6Wieruq45PdXSWrfKdmp8aaJPCv9hPbetwHCJvCf1EwQK5bXQHFztsz",
  "key24": "22S4Q9fJakDHzbDSiQGAzx1bifZTRyTiChaniuxs9ynF6YdNavUQQph9Xz5yQeBynzh8mLq7TEHeSNEpt6aQCBeb",
  "key25": "4hvkRCgmGLur1jmBZwPUfYkkH3Sx7LMc2fXMLTJhKJ1g68jKZubHpnLNrZGFiLYVjEshwK8DLafpc7Zuvaz1gAUB"
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
