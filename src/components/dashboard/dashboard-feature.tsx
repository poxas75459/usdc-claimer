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
    "3tUeMNnVMJGdxyZrT2EzWAMhvaXozZFoexKQWJxqGWY34KTnjUnDA8HqvDJQHcaqJhYuFQSvwmj4Yqdpq7FMwdXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QChQH2is1FvvCoDZfYSK8AFkMDoa9wAqGE3BQd6pnm6C4YnHjo2dfvHWSEPqou2bftRTViECHKZbjS9GdEEueuc",
  "key1": "3XNrTc1bQASHXWQL61hUKCZG2HPYCqtx8QT8svbJ8FXgSmecxzoEwVGYEaj8GGSZt9WoRJ8qoXMkypWvPTn3Qwju",
  "key2": "31LXwzajhheWnRwg8Jjip6QUdGUCqEzWpxmFY1ftmEKEGZS5qmQfV3uofQq3c7D2nXgeFAwWfb5myDpnCbnhHsDJ",
  "key3": "2iNEja9bzVzANviJzqQ3wCBZpvorZT7bC3PssjTf5dm1EnPgwt1qtLAzsckfckUdX9jZYWNTQDhBmqNUS9brP4hp",
  "key4": "21qKdnezev6VDXaGNPwrTpza8N1dKH7S3ivGxTDNNFXeFHkfzEwAXh6Pr96oBCMdry8vfeSL5JZfiDrFTsSQsw62",
  "key5": "5WA5eECxKtpvPy4qHNwQfeyocd6XkbGDGxtpuX5R693Tj6Gm6Znwh9tjau6kJ9A2KTQuy5xh1n4WiAAQZcZWD4cL",
  "key6": "XNnp7Xh6cTJpvM1QW2AEU7ACsMfEQofd5U6dCGMYnehTyvwzUkMdgZSaB29QQFptSNCsFZB7S1kisdNZb2K1tkh",
  "key7": "2TmzgGF6fNo7KRvJohA3S8s4QxwQAn48zVCwTaMTopFqjQPvdRmQyg9PrQQMwSYXtNy7FNtM1JtSwdTjQjm6GxAv",
  "key8": "4mkKq4VdencSHMJkpe4Pb6RxcZmZsDwNGiRrfCgryQTQuFgGAxg7V7asYo14W64jXgJxpt8e6DGAPac5CMakthBa",
  "key9": "2KpnamZByj19BpaVV4gWbBuEXLqgZKZWA6ZtPL93cdW9i4YsPL7ZFepaZsdiViLnPSxjcMMXjZ3n8QF5nctsYUKx",
  "key10": "35AZTzo1C8pUcbTpaXJdKXmDXnoFwq7vM7unagjVUVpVM562ksY7E1bLzkRZwpAZhswjuAofD4binwGA58YErnto",
  "key11": "z7ooXxWWHePk6BtWmAcH59fUxDdWxcUhFVYsiLW8pTds2ZzyzXQZ96Ju3jsVYq8swpEFgGu1ds2mrEXxiH8gv5y",
  "key12": "678ySFqZeLyiuiyq9uRS7YrNSEHiQtKzLKaEjoauMts4EQikkmGMcHVHHDfHELNDA7Corc7WVpDS4bvoM88sVPxa",
  "key13": "5wnJg3ZeZNbBnVLnQzD3bD83CPCsX4DiRRFyvi5Sr3MfwPEwaT29uM84F8goJ1smD7agwmkwDWxpVvHV2kn4ncBs",
  "key14": "5Wa3uJ7dQefy7xYSd4eDFzBTLNJdw5TSspcjyyzgqC3AnzwVGEik2qeCPTZKhnVEebtLBgHDR9gb8LiALhjaBzEf",
  "key15": "5TVwy1tUgV5pV45hEWKaMX1FC7mdsVf7YeK7fnMPpzYvtHRaJ6FhuZ4HBwZiwNimy3uacYDhVJawTs45sqrPok6E",
  "key16": "4DgysVefuvn3Hi72vJGsdgXiFcbqG4Jy9H6puHzvRYTbhwgW35vZLKedzyj4GbRcqW5dXwazwtjbKJM99svdcCyb",
  "key17": "L8gnYrNGBZKvB5XhLKLttecwscob72REkSsH1CkDEjDvHSF3ae9dJGPsZoc4rNqVRsiRfmh8f61rAd1Ndhqst9X",
  "key18": "2CX3pcDiyowYdZs4paMP6tkBNzATxht3UU8K1j4P5sFriCEHEVJtTYUF3Tk5XcQwMigRSxgXZ62nqizVaLprqsEv",
  "key19": "5QpbviU58v9ad5zmcqDJjQ4SqopvEpEHPciPHL2MbNhAjDzUXZB6ShHgXsbKddGfEEG5nicbLMomC3uHT8pmuYky",
  "key20": "5MivcQFGPDFthQZ4mbX4ByX78nMcNc2m1cVhtAB6fxJpHPHy48smsJrHVpS8biYizxbCRDUWegD2Rhjfqj7fr97S",
  "key21": "3cLRbygEy8xhWgKPzPb34RdAic8vWgaohqq5g17AuDa6VRGVJR8eS7XuDdDL58AEUCa6L7jZnEJzeUcBWsf9foBM",
  "key22": "41TsXJstwbRZGiffzzXsBmz3JVSBFWF9Yo7mKov3NA5wbCHMBwQSCKA6hRKb3nJziaSShKeY4RGCqVKgDNkXDUVF",
  "key23": "5weBN1TYQjFJd8LRa7nGpBQht2uXFjBSKbAbb4pqU8hXj8q9i9EdmRCm9EnsuFiAdtGEVN6zSLADXmMe7i6MudRj",
  "key24": "DBHCnwcBRpi9bXqrKmVo2TrgvT4HwZEwXWcJf94bjdbPHfXZryBTaBGW3ho8j8XSpQZEyLYHtXrfamBAy2Mpcuu",
  "key25": "MG1eJFZyiBw8gWeN9MERQTCLpYehARSLn7MRpNxQWwk6dL7gf1wCfD5HQKXEXyCjXWezzkxEL833eAqhQKXquiT",
  "key26": "664iWUX1kY1R9boKUbMjNiX3FraGzDD794B55MRAV6mJRuSborYKvdZJif9fAVyXXiQPkt8ozHKU8863yXxZrfrM"
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
