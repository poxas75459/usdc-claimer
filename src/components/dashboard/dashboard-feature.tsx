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
    "3tPWPpreDWLiAPSp5ia2ipC1MRppLDb1W4iW1rfPvJwzUqNyhj1LgeSmykteQyQrqX7njX2SzBCVNjH4A1zq6vJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3hWcaPziJiWHpVDS7k7zKDEWY9riLae8nPZMc9p2hXQRGfDsSVPzsCgX1Qn8HXQhV2cGM81stCFyjck2wqr4Wg",
  "key1": "5eW3y2qYQhXshL32kt3VxA1i12xj18bn7JHKRZBBTQnWF1VfV81PbrfWMqmVSsi2nWeTGjy5XBze8oGQLxF6kKWr",
  "key2": "5hjgz66f23EHnFiGK2DaJJHEJdKvumShHyQo1jxd3TcJqeDctj7Gyeb3NEGWr4E2UHoTS6PCex4KpMA4q43pbBZN",
  "key3": "2wibn78YSCvuFsdPyB4UUPj8g5nuuombdAGJeAvcmya7RDNxF9w91kb4VofbPahjFJjzc2NwxsPKGgHTfN8LMZJ3",
  "key4": "E3w4Qh812E7Bd6PLGWeuF9hzejvu3tAgaxGeSHpwJyQHwuZUbDN5gniCky1EzuksxJbT2Rjsf1A3i3RxGTVeVcZ",
  "key5": "5dBrpNiSxSPQh1E1xr6Px6q7PkD7XxD5Hi5uqPE3CMZkrWU5SFszariELV5kn6faeadsNCZ1X8DP4iyQtJnDPMM6",
  "key6": "FTjtSQXcqoNvfrab8czAjGNknqagfeSq6trKeanK2adZrpVTVFTADAQZhLBA8CmKAVkcMxV9qbnNiqVXHqfn1My",
  "key7": "5xdnEVDdzQ6Hh4Zcv7jauD1jXsahWhBkWj3o7ESkEdW1uKmqeEKNojaYgjicXZTBiDEJyU4XqwgFsotFQ8YGYf6H",
  "key8": "2KKfZJ9QN1pccVuzBnrzx4jn8xrTDJmAjhuUdd1Mzs8hZmrGnXdZ5TKqvhmUQkCsd1SU4NVavuxNdsEfisw9CCPL",
  "key9": "5eh78MZwrUpe7pdVUxPjMwzH5gfcTnPesMXQssWFNNcGmpk5BcJdj9m5KPFKnquZ2qszGe9FQsBnpJQcqTqbKfhF",
  "key10": "3B8326apoYmhfaPMvhFERzQn6mshGWiqMRqvsg3wqdGvCpaotoSHkMMJzfXT9hQm2pWwYQWcZCD4HZqfJNARkaiV",
  "key11": "QvSXEFTcYg4bBHConi2J5f1VwcdE9ZyxWPJ7ziJGq3pGGsTCRijGby8zdhg2bUdxrCE9Pnmf336EMKb1JDXq1Er",
  "key12": "HTB8HPxxpP7h4XxQoBS9uUJeajP9tvSBhfNWUKALR8CbYJBMRzRCqNqArhE1mZVKAujhKvXnXL7Teo1cPrEiVsS",
  "key13": "Sfa2m7RBedJSv3f6aV6pa9jW4Ehk4MamQRZEHzjf7tDLiYt2WJRGpKFk2MSxTzkwbJ97GRWJB5uxczLdBXmwRKt",
  "key14": "4JdUAyD9XtCvamCPrpYTRX1oig2v8HjYAbgLXZrnfvVrJtwM2QvQYerQpxZk6yNS5dyAzJ4gEnittAXdBbLnSWQe",
  "key15": "twA8yaQeKuv3RzAuYdnVVQWhnP6E7HDeNi64vXkhLsxKgEM7vbQq3ZLKetcsgX4MAVoEz83WrNp9GcANuZf8xy5",
  "key16": "529JcGhmukee28o99JLXEJ991WEetXm1RLoMJNWqRbHdTPUM1JEuYzAfGYTFTm7Ric7GNBfsEnM7YZGiSiRqGbqj",
  "key17": "4uyTgRWGLx4eYwjZ4qhqfjpnqo7F6gtgeHHt77b2HyHtLbBDfNpRVzsfxBGoD3WSje1yBawF9AuPunrhTcNH3YZV",
  "key18": "5ZHEDdTNynMRxMqJRQYZ16wviTfSZTEe5Z4yrmXBaAbyHE4oa2ZAkJtB7RVjHzM3bBQaGuic3cXAdFWTDdeqbqZj",
  "key19": "NXMG6Cym4oG8RHxDxJK35vAtN7cs3ZvmttUQsTipwnrJjwsPyeh3umtzzLEh1ZQR42wSBDdjHs3cHEzTe2npo5W",
  "key20": "4auCMfu25gVLEZFvs8gXjcfnPSca6wkxe44g95ZKrAUYRrJn88b65NXry3NobHNJyhvtHsrzKGWtfKW4d8gu1RRT",
  "key21": "B9CJpq72WxUi2kyQnAxk3aLUBhJRxUhUm8CWYTxQXVvVAkZ3eUTS8bjez8wG4qjYdiUJX1oLDcrpsqa8ZQnTTg6",
  "key22": "4Ua4VLpdnkec96zScgyyuWNtu1nQaiV3chhhGy2Fvf7Ysj5gtQiYd1y8s4Tyza2wJ8mH4Rhyx3h9ZNBsBcA6musS",
  "key23": "EGa9EF4i3W45zTmhdPPEWctZMG2vvH6kmP9WQFzKRrzm5qhraK2motvDxzQ6NYA19V7exWxLESwLyFTmXk8b87j",
  "key24": "3oAEG7mHNsFBn7HjGPLAxxNXzZofWaw59QrBmmduxDxW52b2EEFAF4gvHsY74R2n9ZwzyZuaVuTX3hxXUox8JvBE",
  "key25": "CAnMT3gmNJgdsHh7xZpU1uNqEjRoqkYGH7xpEvp1j8HpYeKD9CT43CFyg3UvpjKjpb5Fvj4nE16dfj8oN5m8fz4",
  "key26": "9gvW3zbbHWzBxscwuoxdAZKfRdN1YSn4Q6MxBDzskgUCSHSnoyeKYbyhESYX6G6zd1AE5FprdwQf1UCZmUi8UzK",
  "key27": "5ih3RjNeoZEmGGNwUeoweQD8EXfD2Pgp27fmUFgPzrnRMePgTNgKyk6EtC5x8RxaGT7FW5dHUZduf4TNR8AX2obo"
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
