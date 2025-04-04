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
    "o2hRhexzqcJNbB2HeBWGHeNxY6oDZ81b7nJK5u2uc5wz5KqTJQrFkgaBHzj8hQL5UNEsFJDhJ6VRp8KdebFYnGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LnBVTcKLUrxRWZo5C8ZmMiRrJoQ6jxRGjmjfLfZwPND83xfgUZ5snZsVkMHvmqbjZZvRUHdhg5EN9KyNGpGEJhi",
  "key1": "2n3pfKfx4JU141FfChvta5NZJ2oh3qZnwPFx5V5kjjv6ok41qPMfQQPNF5c9Ekm3aRgnNTsyRTKDqJ4yYFgvLRpE",
  "key2": "2G9hLM9MVtYsxrrZtUq3omzigzf9AnTnoLsrVa7gFv7Pb9iJHBjsNBNCj98pvQXzk3M696x5YqeFh5ePDMwazbzU",
  "key3": "3b1gT4r2BnX1jsHEpbKJUqTS2RKRLVEUFC39MzBHkWNWozCTwrRmKqFiPrQHkGxiZvY2dEEfrJvdQy8nqgS86RSL",
  "key4": "42RDZSh6sXScCapzRbUaLGi354WK126xSCFyt6vHXQgM6sXzrrckPFZcdZgv1VcuDwm9d8iqRu9vd5eR32reK8w3",
  "key5": "4jtbg6Kmwj2aWy1CRnXqJRZmudSnTWPBixuYvnqg5paALBhQFRjcZ31jzg546jp8C6n215bd1Aq5KU6nN7hx7h1n",
  "key6": "64V53PR8ic5s5efTdxWdekL1bg9NtFt3SKd3XPJAZQVm7x3KSskWkXPkiajc3TjG6LAffBN4Lg3GNpAFC6t9hX3H",
  "key7": "3LiNKu2mAjpDh8WCokVdkG1zMDEiuUnrUqx9ypeEX1tT3TYxni8JFRCsvBQC45XcACc9WnKSbRSNPzXn3owgxgu1",
  "key8": "NYjuUGaycEovdabPTQqUSBRKZ8cHncMc1HK5fGVNeXXbDPLsEx4GLU8Nx7E6m3E2X8mAWbc71ttiN5A6u1LyZG7",
  "key9": "57Pm77DWv6n7WqWteYXuEjw3JNvy543avJWQxXWiK1svNuzheMMM5qNx5sMgu2iS8PBtCudxkPxFdfJXZ5tKW7yH",
  "key10": "2qKvbrs3xfuKTL5fuJXz5Mvu4QFUMuVod2M11qUXv9ayUn6CKG1L3kmn6Aiqs27bHvzcfvijYw2KCgNYtdrFofMa",
  "key11": "26pUTYa9jEsZanLjgP77byCKvkkzdNmsaTDXs9sXFac7Q5cASESRV4t8VuxcSM6eHjCaF94rTxy8Zid2rjbGdBoh",
  "key12": "3oKyfHiKhu21chPsGDG5DDZw4hfQcJqNzNE9KuzSaqrmxNMydspd52mB893u5P7NnKYFrwHAzrMw5aDq3etgQ1iB",
  "key13": "35jW77yUyfqqR2ZLQb5MuXnLRYP4eFFZ48vtyiDoz1WJPJnZUuApYE8DKfkLEwMbHhv7CMCFQTLXds7Z3PUFrwbp",
  "key14": "dgME5fi8EPzGTGTi4KtpNLexkzpBn3E6pBbmapA7Uv3u5PwUsr8TQdRnsFiNRnB89kQMdocPRPnKC3Y1WnurcA6",
  "key15": "5BJVWzR9JpEH3PvXaWoY7GwY2HV6G7NYoFT7iU4cX2Wm1GUfupmF7QpYATE7cTqykFaXJcyhe6GsYV4RLdSxKJja",
  "key16": "3KKXVgzfWFestE7BCbZYTyuVqCqugh86fACy97c2SMQ2SkNHgJhpaWN7BFmboBvqgoQZQ3UJesUgrrm79L3dyry7",
  "key17": "21ZJWzNPt4VQydD9rKkM2axNW5Z4b1EfNoEMF2621wcUzuUheSjtpCsTCsjsk4m19iro1gZaguMzcJtcUFebypAz",
  "key18": "4X5Ai6yKMd2MNuFbhHAyRbVG9ipDr9TPxM2GKG4ULejxFxVQY9QAWoVtT2erNbYu1FMJqxF7RsVJ8eXBwWAnE7xC",
  "key19": "29ReF3rz4bWcH8UP1VTQAX9Des6gpN8tE8uan9DqKjyQjD9WD9mvaDs6VfK8BPhuE6ZjxHLkoemcKN82k4pEvyQg",
  "key20": "4NcS8Xo53jmMjfiJHa617gwkcFhx3hrAVgMdpZFBGkdySaFqgS6YtcdBPj498HzYVKyNWZAaxVQVPaeVGVT5NVq9",
  "key21": "3GJEXB6i81GotQEoZHxNG5RMVZnx2qSR7aznGw2m4iKjurb1oNTuZEVd26EbVCnkU3kRupUs3zk29d4mgNrNzSuL",
  "key22": "2eHWFS5AwDJp7B9YkKPKADpYfUfVXhoPvPofcemceFDGFHoLmfcCjx7Gxo996mdwkJ5s4wYPAad7qPbK6dHLW2zy",
  "key23": "3AQhiomCuQ8bmT446BJiC59o6U3Csewa35UF22Fstp9VFJMvXJVKtVTwWAhDuTWhDQCmswbbtTRqs69TchvRtqYF",
  "key24": "4RUQ3Xh3nRxycAaYTD4ubiiip6ZPgzyyc3W4exmtZ6W8PRcho4RFSrbpNLAuUcYhEAett8m3RYYf5qARthFEwxwN",
  "key25": "3hUD3DVZ2PEcnb1cUjLBCq2naQG5Up7vVSkk67nibhsfQfFaRmTWbS1FqAohpi493jMPs6s8Zg8NbdL4nJBWfpoj",
  "key26": "2sFWu3RpgfWAJ4dtbK6wBiauyd9fCwfHY56zXktQHDTKZo8CMm4SoLFZGesmD8uCuztZP5frbuQp8hHzQToDjniT",
  "key27": "21hQ49JtQootzfYTksyg5pL9xTcKnAVaTqjt1E9qqHN5p9fFMjT7izFjL31MRLcJwttUtSKghxdi2GeQhLhNssMv",
  "key28": "5w2UzkiFeaa57A6MfNbYrkp37uHo3YVebxZtUUck3u4c5AQJV8aAvkW576Npu2BQMNGgo3q4ZrkJVL4d4JAwH3e8",
  "key29": "4znqGLrnta7s7Ce7YACZYDXS9sa5Q4AkxGtKmkLugQabyi2gZnQTwvR2V7uSDRBiCoX1QuEUYZRk5PuYa1ABcjWA",
  "key30": "5P7BNun56se9iSTfhGrVnGacfcLvhA6LgN9cAuWvWS6YoKfvZAutvJd58FjawmE8LEa8jQMFoitGaVkSqHhti5Sh",
  "key31": "5nnoZRqDN3ZuG8KoKXYY9iLJe4iS7CCbjYdUitpiWdZdW7yzQ1o7gKDTyqRWKjbQgDNbS7FSnJ66Vr6Lr6caqWzc",
  "key32": "3dLgX5F2xS6BAkUrWi7tbriBi9acRZwBc1MUUwPySSHJSK9yzSwjkJfo8Ggvk7aFiRnk7RH7BsioFPV7DBEiHeXJ",
  "key33": "k61pRAqMVv4TW2xrNQbgKzqMJA1BoyVsX7dbyxWzd3soZTFfadtJxNXpR53PChqb6s6WKppiTyQK8kLrD1PSAX6",
  "key34": "3dapdoz4QLgE6rAqoWhtU9oWsX2vZvSMqAF4SjpKPw4dQQykJbyLoqG9gcsWQssJPytDk95gmH3JUQmLj2rJGekw"
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
