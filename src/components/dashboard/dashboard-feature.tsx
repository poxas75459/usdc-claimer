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
    "3BAbMntqEZG1b5DJ3SnDArEd9anTTtkymzr4buruvK8E9sFDW16Pgycv3vaPK4bLGC95bWyMpvpaEaXUQwhgLojm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6pa3HX7q2DE18e8HKTGsPZo46nQheA1QPvbAkV8YCmMGEBXyQrc8E9gNQPubcDn27p2BWhH1bD2n6PZaGRt5aZx",
  "key1": "419EYg3uvvC1Q7V1HaCax9prgmdCeAqkEvunVuUtV3MA1x3TkRuWSyrRUg15CTWWBCs6nB55GZmCkWrJN7R9uoKs",
  "key2": "2YSmGefHyVfCaBEm26H83tphMXY17vLfNcj93Yn3bQsyvfbxFAWgv6JZGWeAFoP4EosPPgG9ekbJjzrNG2AMS1Ls",
  "key3": "338RvbTzzYabmHFMsKKMAdH147XakRuK2hjvi1NP8jsivyNQJmxQqWFsMFkCZ9Kj4CoG3cWbgrPdKq8XTgkGT8tX",
  "key4": "5JUewWpD9VFBmiyVN652GBX4JEy8xeDt7N2TCPYxoBGw8SaJPXnqKMe5TaH4itc3JuHjJQTk89ndhygqeJYtx797",
  "key5": "5T6A8NoLChRRPZG32svwUGUXveppD659xD54KDMC2v55zSGf7zet9GDHmSW9gkfruVYJoWGfvCJL8x52wUgqUhZB",
  "key6": "5NxXpixjfePuKjW9hpFTsKCsPtpJMwvQnahxS1AJeirs25YZuewsEFmU3qUBsLVm4woZS1pMgTaE4361nxF5rZnv",
  "key7": "49zmgiHxYRwjnAcNDneGcPZKXBNYX5EustznXiaiZFnvwfhkJSruPrmsE6nemPN2HbBxkREHF91WbLAg9LBLDjLs",
  "key8": "9EhNSSt2wvVNuvqS1JGQcaLD5ruJ7HBpsq7ZAfz2cm4gvQ3PyCYdGUf8BZxgqai2HpS7TNgboYbBp26La2KFXnd",
  "key9": "4bEhHTRdjYKir5R7nNMsAkAiX51TrKoo4ntFU2rdxfi22oXEEUxuSo5AUmh61nShiApdA8SsycYkriWuRqkWXWZ",
  "key10": "4PVY3upWM7HiNCYuCf7zgq3X5Cw5TTMvr9C2SNfktWRHRGaFRbD6mCUwDHUGF62GvNR2JMCxBeVJNCXY6SdDnZoi",
  "key11": "58A7M3g9avSmzdfooecCbhLK7VrW37DWBWy11X5XhiMUen2EdRaVBNyN46nAecptRMguUdhJxom8NaVNFhgUWePH",
  "key12": "axdBefa2uHnh78Uqs8YAJY2UkThZNkDTigeXJa8KyUWKM6Qv5wPET5k3dFmmeorBDgJ3xL9gGJXW4X6Pnje83ht",
  "key13": "3myG2qAeeGeS5YiZqtgX8ExsxZpAczf85L7g7AgMVCH2iatUgzN4b1y1TYvF3n1G9nGtVasHpPXSR1YqkCKup3R2",
  "key14": "5WGn1qRDDraa5YJRtxXJgNMxojMGGSz9zomjWBYw3qsZp75NUvrz8uTbNYQFgm5fCH7Hm7nzuALm3kZckDyyN71d",
  "key15": "2Q97XBYYzxknwpvT5qjXqxsgJdvefUvZowAwFxnxXnhsTiD1oZsbA86X2RLceiqDgWVFq7ZSa7nLUDzvEFyY5Zed",
  "key16": "3S3H5fnPY1jvMG4GzQ8XRYxNQkLDvf2GRXGRMSUC3jE2H5s1kVUSLxpw9Zg48qWjjmZT3bawFPtk2c6jDqtdHn1R",
  "key17": "2SL5BXKbHm8joZCDmBhTZv1GDCYfHj5JZ2VoBRgwyEKwoTeVuvrvdgK8Ev5tJGCEqc6p4Vj3vibikDkuF6Qkx9GT",
  "key18": "5i8tZpqgdSkXJ3XEVQgKg1f6n96om7xBW4RY2nJKZKCRnR63C6WtGFrdGTU92dVbswnLYHXS9wWzg44ZtghRci4",
  "key19": "5gcVcFCHEz3RLwKt9VDdaiv1c9C4KyCHDt4mdkMGfC51vpC5b2cShfsdZgNDVSGELwcjDoyEtyJDLGjmPUYutHno",
  "key20": "4eFdQi8veb6v1rGkcBcyJjx7Gav2nZMcnifZwcY7ogX5xWPwHCmmjZquPDp5RVihzN3yqVeKxVHG3qsp9c4kDd9E",
  "key21": "5RGUpJaXGCMjhofeV7KvZvwofLgfqE5VukAJRUBbbGfPA2gs1Q6pocRYq3fk3icszJWYXA63sxouiCXBfxWsWCHM",
  "key22": "32AU7FhEMFShcDYoVYg3MAWL5RAG37fm4hKX3kgQhyNCzGhCETEkqPLsDLPM8KSqSV5mbHLvRFaM2PgnDYMMFGWP",
  "key23": "5HJ9nGzyYYkuTW2wEi8jzjVSs5rXDpJRNCEKybnfSt1EHKH8Qpn91kskzAtgugfTdiSs83KmCQvDzJk7EvYfaeW2",
  "key24": "3wGtxzjjBxCfVW1gFWSGAJ1T9FUFBxuNF1f35KmAnz5fMfKC1S1dWbLppHXFQU4bFMYBX9sWTve7S9uZbBeHruDx"
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
