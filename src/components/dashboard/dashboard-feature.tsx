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
    "CrbHTkdShAfn3n48xAT8XLJzeVdj5mrv25DLSJVcAXF5LKiuZTELpEosVB3VTHL5wRN96ScfHhJWgZmh5xy5pXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aAY4Xs7eeMCZzp4MsGhCbmJEjcm7adk8UD5fZ2m7gZVjPZBLpUngHw7KL2Ar7vEdJyQK8FT2Kf1iB9q5knduxHd",
  "key1": "5Q9cbTq4ZxZybw3wC2G2AWCDYF75YovBVqiSA7iDZNpjBzxibkRdWb2MXhWhKSXfdJpzGW6KrrLE8o1Rn84WqX9Z",
  "key2": "3N3XhHu6ttnRJ5x7GVtJ7e8TcwkN5eq7VKZihurQFZTfNC6JXWm3uPe5TyZY5RMYHSEeN4sE8DNkJYPR2WCCDkdi",
  "key3": "5hu74qjyjobDcWdGYNZfac8L7sKxYhMLx3dttdyZuXi7Wj1eNEyW2KVZK8FoU7DaRQ7NX4hhyWWzXCErwVTM6JjV",
  "key4": "2BrBL7dcVVJRvCKjP53xRQduXvkqeJJfCmwJbTP1zMcDLQD5ajT8Ej2xSiQwGZrNeoDhTkaT75KNGq5T8i7t6V4y",
  "key5": "3nP4TACHdFPT3A47T9aYAATpYxSkeew62SM5k4gR9aKHeeo5Gj1taAmKvq51G69VJQe8RDMryHiHgMwvbLM7ppu3",
  "key6": "5SxYFc2eH6fJSjwzHM2CwgKtr4NUCN2FowsFnMacAWXZKn7vhCs8us4mLKgq61x6Hfov8Dp2QJNnmEVEvum5Mok6",
  "key7": "3eAJXvmkYUFWvJsVKdL545JEmKvdF5JHwuNSrMiCLePapptnxBgEnaZHt2DRtTLH8ApWKmLnaMq27mvubybJg3HM",
  "key8": "QJ1RH2BkM1zdPZmxTHEF86mwKWdtMJN513VPpFhzKarFadF7ykcYH4FGnKsXoKMMxCn4av63HfnBGuhd6Ay9zhm",
  "key9": "LE6oGQ9QVrdZ4aQCMTMnPnBBij896zjfM3sJ1f2ksC9wrCxbx6Q7AkFKTtdut5hHTuvvfnHtVXEzHEjkpepGpUB",
  "key10": "QicG8J4T5Th4nqxQyvSBiUDNSqsXitoUAaE24WgAsFpmjwR1qtpyFi73aGASnGLsGsz2hqcuDjkMURCVnh4LAA4",
  "key11": "4eh93mhWaEXXWSTPoP68cDybgK4b2rC1zqRvpXgtNjnXTfhS6MYbYR3BHTDiUaw6SUgpoNDMARXKKL2xu1m3emYx",
  "key12": "2eA35HYfQh23Xd4eSWvexPwvGQY3Eh9TMnoERyyQ5KcVqavCa5nJijE1iZ8dTJXwXsQZ1WYAMqPjf8eqHsy3U8uy",
  "key13": "nySRg34yAuFCaQwg9uYTbuG4iYuH54AXTPhM1wT9yBnuvpFhFDNLS1Z5SFyzAcq3AxC3eNhmmrzB777BhTYZYbR",
  "key14": "3hZLJPiFZMFEXf73ybZGA2kwxD4VupTcbdBNqpPG5b7YWDhUTboTQtXmDeMraZNG3TPsp8JvCtqfMdCebkT5vLRw",
  "key15": "4bdPW6KyTMZPsmDBRcepJPb1oCqzuNDi6SpLKsXKVpfZcMfiaF1L9TF6xSwDoRnKqPLhma1RdW9GtpEZ16UjGDjS",
  "key16": "4a49Hox122XJKVcwVw3SwRyACFFffnojsvgRxTXi6EvgA4suqbi5i85k9RRNQd919jPv11UyGjBsn4tneLQGSDBm",
  "key17": "3yNWCGbHEPEJLwuSjBjqdDShYtdhSzzZfY9GE3gW75N5jm9zXm2KTwnTjaVRHwMbvhGpf5tJZTqqAvWn2QvZisgm",
  "key18": "5Bsq3kUvuTWrnAjzgeGMsmfuN8aaup8vNxvjA58HZzMrN22L8wznsFwqVstqs9NmjLFbXuVtAQH5AnBFsZeTQ36k",
  "key19": "Y9jKiTEDmPshrwxfTvW6trHVajzDtsoa7aXkiTtY7GzxTUPge5T12xZopLGE1B9X9E6aUEkpN7JBk3SMHSdXDcf",
  "key20": "4ViRxAobP6PM77WFNyWZ6MoXvEUzDbN7Mgn2axdH9cexFZogcih5Z1abk9CCNovT6p43zS3XQNPpc3PjDGF8ZQdQ",
  "key21": "3qKBrTXm8XVPTzshaVPhfgxwk1vfrDP4jPZqfwRgGLNVLh4oHfkabrAvLdxeBB9nH1dRx4m653jA8hQATYHNxUzJ",
  "key22": "ia2M4KpSfbVXttWD61Vcmm1hgXHWghiHEJCALvu1Yzjr3Kn1wFUbjJVGBHqtqL3XsX7Tv3kQsQVnEyuAvPasQW8",
  "key23": "533LpZVZNoWiT3ZB7UiBkPQNzvTRSGZgm5tW1GKRqjTonvhvunbyAQHjzATNdMLaYkKRqs5FgsNTboiXertqUdyw",
  "key24": "4bA6pfkWTzgPGKJpVtRUQcfAJWuf4owowzbvo32PkRTJf48GsesnEWWruZAszfVrZE4KY5APjK1nLwSj9bkd9wnG"
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
