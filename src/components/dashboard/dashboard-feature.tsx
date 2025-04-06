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
    "qe6eZ63cTZrWEvq2auk1kaGwZ8G9qNkodxj7d9MPfJS87vLv1vfTkMjfN2YQGFNbumd1MBn3ReBcSDZoFX4jH7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cT6mf2vpvPZYHSkoAP2h5sju4oZrR47jW9CHwBKtwSXVwXU7TEzN4LBtmnxZYFK3FX6LQPuymY9qUdQSxBv6msc",
  "key1": "2D3aGDx5cXtS1AxVA5fMwqeRNw7Jv2NcXLoMQyceveGHkBi84wZMebftQv7MMw7Aa56WB1PvPVM9npokLVaGH1s2",
  "key2": "2WLhz81zZDqRfLHBThVw7yAbzDgRz5odNqPtkv3xVqt448hTQ63BCMDqxMRBoNyCSBPYeNU5MgqysA4ADLfUARyz",
  "key3": "2zFnTLUKUtL2CxZ61gJ9gbxKUbFNseSMoycTtskSTxYw6znSf6jtVEp7AtHCPhoCj42twnWBLVQQyKqXzMfRAVcB",
  "key4": "KzLTApCvt4XD1r1nixbUK4sa7znvgq7JTTHgU6ddfMmGdXQHXteXQFFbTJVofWfwvSCSpcgRMFmjz8E6Ua5EMY5",
  "key5": "5RoHY58sEvQ3tzMmKjXxGit6CkegTdpzWdvBDo7h33AQZXopj7WPgR3fttAP2i5rDxNzv9gZRco2y6uN5zJfJQAE",
  "key6": "5VET4ThJXQFdiFWrHACrDLGd15iznCJ3WbWsSRXfqVu2tqiPk1dvdHdeLLdbQcRpXRYNjMWkHbGDhgeGGyJiXSDW",
  "key7": "5eQ6h2oTgpBvzqjupu9YW2upbFoW4dUWB61zWUVZ3CPjJSjNZBWyTVFXtv71XzgBpSmaxJeLDCd54kMHhk5PaGt5",
  "key8": "3JPXLcxugMD2bVFoXB2oNFYT1C8ZJHaWtdXGaW2hdqioJgSXWW6LdZf56G3b4VLdVLkjE8NLtFFxPzuTs99X8QeH",
  "key9": "5syH96uLPRAjmRgN615hdbT2jVCS16iqQfbH6ZJHHrQV8o4cuL1Y88gfPydGmev1sBSj3uRsiYdapgnuPRjNvxpU",
  "key10": "QRVssHrXxqkoVk1jGDTpNouanb68o44FdyCRfH3PZv8wrwJ4ECsudtc8cVQhhEC8boQ4yq6Lvj8sjErBbtXR4uK",
  "key11": "51Cf84YjekBuQeQoWLGeBQoregwUQXMLjazvF5uooHLVtJ2Puqroc4CvQ3CfyQJ5s5svxqQVx1Z3iVgG7Z4TfLik",
  "key12": "2hTWYuH4AsctmoDjBPix5FZ8XZsrfGmvgnKkPT74XyasZet4M4Sr1hWTkRdg7jteUf81iYM2WpuwYB79V8jSgM3Y",
  "key13": "3TE8YXdJaWE6pBEAZreNHTfPpzxNSFebRLSXLhGdvd5HLxE6cADM758XTBmt5MixZpH5DCrdqxQ4vyPuyjQuS11b",
  "key14": "31H28UQKwFd6h68HbSW86Y9tznqntYEKq8NJZAJuu1F4t7JFqotroAayEhuUHSQtB7ChoLLPPVKLnaD3r1vy7gk",
  "key15": "4qgbu9DpTqLd9xfTnxe2y6j6TTvfq4vRdbVT1kq2saYNJ9VCFaCUed6T6PUoFQEkBXVBtbUUzHX6EEoZA6eiEsem",
  "key16": "UkKQxGnXeFi4o9Ufdxtt1XrL4GDsCipyc2mRWUVG6AFBxypNHLz6uqJ3c55ERrop4WoEwEV1UwqgfMy5oWFKPS8",
  "key17": "2XAnpLZ1SoZRd5BumxM4bRi4xWXWEm57rgjTrPsJz6SevV7Naus56YYku4iZQTbi3zuLpXnwXey5Lhq6WDnHNbHU",
  "key18": "2FGaqkvNwxLY7RjM6gmTU8pBuP9Nze461YE76JzjzG5SDCw9AAg9FnmrW59EgxzoNFjC8JqiBY1z4ePVuNtLHWhK",
  "key19": "2ZbkSczhXRnQgDrjjojWiNV9ANLjkDbNHPXEnyxh4ePZ4XvBVLDaNUushvCybiQHemXQcWoY6eztzRXiUk67E3Tb",
  "key20": "2hQnSNnrMh2VGBUtaKaEMuVkzkn1L9as1ABdfhfifDJNtDdnrXZLdnQJW2ZJn2y4CjHmBUBq9tXDchEfnMsB3MoY",
  "key21": "5BFh5m8xrx8RD8yuck7eqcakL4fFpQKRtxHTqSLyTVTPPdayGPR16FH4Cc4eS9iBgLZQz6BFUHL3gqDQt7qjcRJ3",
  "key22": "7rY83c12x4LnUGTeUQBcBsjLC7BbWqnBtX2ofaWsrK1XFyNCEmgnoXfzAySazcZztxC3Y4KthWj5XeY49k4pUp2",
  "key23": "41xVVbwf7pZYzFuTo7VAXQ5J4HJCPeZuEZHqZYaxDhMN33dRnu2nvZpQhQrQGKJa8rx9VencXCdhbzShaAFLb9ZL",
  "key24": "3NJEtQVE1P9hcAAztr31YWJuVHeXdg2vcdALsF2CTv81cdcPvEjpshpvnN1yQC9fzGAMSR7akScbnzgw33wVhVGP",
  "key25": "5S9ybuw2UgqnCMcZK2AqaFFqkeuYHKJ7e8zTVFn1ETThLiDnHUhJgQGCN2mStP9P1vpcPJdssBQrj6TYBsb1nUzM",
  "key26": "4HEqKoDzfm2vmnjrxremGDDEuvYHwBRsGbm91yxGZ1PVpsxwwt4VaGyGv9MmcEZbmuBh6ZgLmQ8hfHASChmw6nM6",
  "key27": "2yA5cfX7LbxPgdTE3XQNTjsoPqn8pqBKGzs4DBvkvnm9KykpF6FMyjasyy9AXwvPifdfD3rNSdia4BqNUaoBWR3k",
  "key28": "5TcG8ocy8gSWfsngKcAK3WDj3oJMaiL1CcjghyxL8AJP4bNSQZPeMxJfPd2vBQW5CNUg1JvNWCRSYudN7r2aDBU3"
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
