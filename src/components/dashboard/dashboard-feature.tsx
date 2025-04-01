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
    "BAnFT3P8trNFYeYQpWXM1LdnJr4JGR8YRk6BXEQ3ybRroeXwq8ZFfW9RAAafZaR3Fv4jPfDsk1rZjw58gac8QR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xpuWeTMiV9fnii5r7rZJgFF2dG5qvTsAC6vya5PkcRdAJTvh2wqoDQN65P6QbNTc3U8sDjXJcNKdVujm3QnkhgD",
  "key1": "i2oiUCL8jRQvUW2AeABnVdT2Yp4YD597pTN2RmsZQZWzxisQxQpkS6FQTz5tWh2RjCZj4hfXT8Sf5HgC5YbxZcL",
  "key2": "4XTRfhtna5SuwzPBDKk4drdjQ8bqb1XoME2UASve35bBjuiziLbDg5y9vVgF4Vpk6npK4n39aHFkKr3fjbN4UndD",
  "key3": "Hm7Jypz6sy8fwm9SKcrmNqF7j3FgUvAE7f8dvvUNyzXjWnHyRnSFDryCxVFYmxV97HegvszeK288Dg4kZ5dccCb",
  "key4": "5jL9VhaLe7wdAUa5EXWmDs3UytZBhbXTiHe5MVRj85RDXqKFYRWDJsfHnsghGJVRkh3mLi3WANW6iQvXZZTsFVdV",
  "key5": "3sFJmvgArsPM5WJGzpq8Hquisuge4jNvC637Pmdv5wXipmKZ6URM56y1FUpjQnao3sANh9GHBhiwHuCdcEVG4FVP",
  "key6": "4321MZurDghPb8iNrHKaaL5PBwfZ94eRC9yyYdfwanNnm6CYTJnNnkaDS2k68GExiRAT3XmG9iYoVrFpeSUrA8fe",
  "key7": "4yYVNNwLJJrDCDSxwCxKRsLfKHTpWS2U8bzh6C4TY7xUj4HmrdLdEAUrDpDeWE731o9jZvxKtVVLYqkA2oAzj4Pi",
  "key8": "4EL6HP4Uu1RMxJ6fa6Ass7TJTbvT8CEVrJnxCogSmfxqva3t5F5KjuNd8tAh7qSMG7sQTESN3YFpc4SsH6WtK4Zc",
  "key9": "46nxoC8PYRxg9Qqc4Dj1tAUAZdZnk3arKqxaybkDfVq3BqovKFfPeUeZQhQxJrLZR2CYvMTw3yQXkqUqVrVA4ZRE",
  "key10": "31tsCM3BvzmJJdnJjGRUaE3sMaszUwwCiAmyqeYm6vSZQUq79TWPSYC5gTRE5BWW2VgN8mzGkBfcyNs3BStwzA3k",
  "key11": "378bGxf5EYgYxBGb9EqCTY64fqn1i9nty4LKNQbkbQA2HpgCKncrB3q64WS36FutqK2zxZKr3srzbzXpFRuaBQRJ",
  "key12": "5Ap8YF5rTMY5fzCALhfZT9VohLaVMR2GTBJt9ynxgK5FVh4JiA419xDSMG3mZui9XN1GfX4mc4zbJwGepkDJPM3j",
  "key13": "3yK9RpW83G7eCA5bHRtcW3YY1W8KscPFKbE4r7HpjfuZJ81PmZLs37L3TAoHvR6FMLRFthLK9xsGH8swkQqkSR6C",
  "key14": "3Har4gGftKkrE8WTg2hiYpeUKZPyUhVcu6KUA1Goof5fxq5s1am45bAWchLHBcMPE8fFs8gfDVxFLrL1ePNubFJg",
  "key15": "4GCahVBKgdpdqn8EfiiYaT3Uc1Z1zvqSKwQc8ThTpdFUfJttT2DxNzQuLbE8vJaBejDu6mqwNCN32uhpmy9ditjF",
  "key16": "4SGP1wjHnavkncfXmd7xHzNon8emKYV61Vi9bW9MHExyem16ypXN4CvxGMPhsW7vP2M4pfnVwtT4ZTqiFX3Q5Ubd",
  "key17": "46C9LKW7dovm6qiaGDEYG4Fi5X2tDa8KUgvU14o8HpnDFirZU6KKBw43f2iHcZm7pP5HTknFzyMEiDcDZ3pQ4pYL",
  "key18": "5WkgcdkRWycWgVi6Xhw81dzCSePcJhvp962UQcrp1b5gDw1GZHxvQVP8jGwULWuzkPuuk2U6hKBxcTmYUCuFTtJ3",
  "key19": "5mEp7rAurhK7M5X2veyf94R1zL3FEWEQsbPi4bUvD52uBjT87SisyTye2nJ3ihb1bLSzY29jZsnKbnLZ7bghaBie",
  "key20": "3nvJXxmobkY5sTtJvHJ6hoY5H9QuZEV3otQ7oP7FBe7NLXGchAFV6Y52SdKbL1cUpSUGWPL6cJWaoWg6TbE9YzmD",
  "key21": "2m6AvHob6QUE41dA5HbbxqjLGP3JsTWAAVtsADWo8wvVKehsCnYtgh5S6KK355gdTYAYsb7kawoNMDFkihrvm8uH",
  "key22": "5xs3CoyTftbMkNk3aRiFk7moGQfjhmDWwA5D4PiFh65V7HadZ8KLnUNVkJ6134atr4Ua6cwybYLH93cM1ngNghQf",
  "key23": "2QqKtJ7qtUQFrWXhFBcupt4babFLuWhWTkxqUoCBkAUY5weLQNTcYaru9KrX161gYUfFpAgm1eG18m3jxQfJbWPK",
  "key24": "5VDiAtU5K4rTpv9xstBxJJvSHyyzgjS5JiXHGKQytfenfgckQMKgrEyebdW5xkui5nhGhgqbpn77C3BKbxqN8PDe",
  "key25": "3MNPRJvxYGwVkgVYJYXF7CDa9U97jqLBeT9Erz3JcAppVJ2y4g38BjCYUGaVSfdEawogZ2iXkSpN3cPT6tPgrtXj",
  "key26": "25JJjydP1jiaHYwXj3Lj1M3AMnPZuai2YxwiqWzrACKYcXo3ooiP8NMQ8FznVGSUswMRCbTC5gXf9vH2edfnUzaY"
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
