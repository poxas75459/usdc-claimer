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
    "3WWHLcbBQLAGki5raSFeSFoy2ZGjfsRaBNSBWkUVdTcmhipubpyRL9L9rgMGKhGwRUTkTRTkuiLPcJZp5vm4PdsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3auxsz5kdnPFeJfkPibwuQNoRJXXq86ikxQT924ULjimE6fAiRpjrv6Q5NuJeWD5M9ekT43FvG4QjDMeemZL8E7K",
  "key1": "2ELAgYzVyMfXoTmnbobzDCwoqFYBrrzPu9kVRfWpBrxGQkxusojZU8QqreCoCQrEC4qTgepEUMnPxwXgEVycs3yD",
  "key2": "HPFu1LmF35uYh7FtUuppcBSxFhvbvqoW8bxeT8fnkreVmenExkprpETvepYeLFQBykESHr4RoZe3aQX429CTyFh",
  "key3": "3CxuWSYvWBN1qH8QkJb9CPFbhFBfUfxgJWWmwWMzxQUqpU3NAAcDiwXnYdyzpDEiVmZnekDX5PTi9fFA6TvyedzC",
  "key4": "3TUNiSef6xbpkyH1ahT4dW3Wo6UvXK2tm2w3FaNwMfoFXm2KP2yBjmryyKfgdDUic2NtZwiVYa26ySykNFcyLWxu",
  "key5": "4AjCUzfvSnzdNjbNDVoov4KjBLMnjNfSMUeSivnBH2sR1Jymbbh9hhvDPEdBk92cdhY5WPuWR3bgWLBoCnhEpuRg",
  "key6": "4GdT39ZAHsJeq2p89NSW35itTcMqo4M1ARQtkoQZdgeDwkjedUZWnSaoQY7dRqQkN6niuDci1dVB6wi1BjyjVXPS",
  "key7": "4TkDqpA56XjcvR4hQQHJbQuCbGYN7wtB2K2zXrnx2sne8cTt1auLBW1wLeBkVQvRuQ52b1RbP45Bo6q6uvvT36Bs",
  "key8": "2MEaXcxqfEDqJMHRDTwVVdHX4fvpUUKREcjoMcLu66oGF3uFDKx7oZ7ZC63gPupQJwu2rWd3WV98Gf8XsHJohRFQ",
  "key9": "4xcJWx3zrZmJZ1SSc5H5pnHeaAcemGqm2tA7N56q3gLDPxLzfisWeNZyfxycuhd2ozHkG6TidD9ozyYe6FbV3qeF",
  "key10": "38mWDh5katW8g58HVw7PdhXdUa9rox2gq5qj8F8gxzJWgA8Fe5FWxB1aSkJ7HzsgaXdK3iWoFEU23Ky7sgo3HjBJ",
  "key11": "38wPmW81FQR6NJ84mQJWjhKc4rR28btV9czpeTEQyhgu8sPpbR6ZuMnrKD9AF2qwkoMvrS1tmi219FwsdQhPYZND",
  "key12": "6Aji4AVmdH6XYKGabHaCDJ5smnwY9GY8gNbNbZLz5KphjjZoC4bSbvC5mR8fMqg4B1yGjN3bB4Lz8JNV6DogLSr",
  "key13": "66s5W6EUEh7AXPdXxZFVqvAKT2WkYEboDBRQ1tE1BDULU2dPkHqTUBgp4m9EP4g5WMV4T3HDBwUFu1SVQnS66uXb",
  "key14": "5CnER7BmvBByLBeCtc8zUVZqBXYCPxnW6v78dpNdxLxi8LmsfynqzeSVGdWkn2GpdYhbQkHCmgANV1RmUum9fu8R",
  "key15": "5Kfc8nT1ruasddg4Fn2fmvtyKhyMQ2p8YKbvAn8N1HG9XPHbgQafMZfzX3x6CspgVLHnHexACgdy3uWrDTWGwugp",
  "key16": "57SQ8xqGywedzAuToLXoKJ5i1VKGVz68np2os45ugKFpXyjGWnNSLTWToPhjpbqRh9XxqgEmNwwjeEr8xvqC6vzF",
  "key17": "42fRJqMiVu6287jYp4GioxPw9Mram7Deze5x3neKLhx5eTjsKFeWYwKp6LM9i2Z46Usr4AZK2A3dphCsuN2c5KTS",
  "key18": "4kRBNBcXg6Veo4QxXmvfUQzno81AgkFbXA9vF265woadcemsScYXffmYrWPZUYKYGQYr9fV6sx3XFPaoJ5vufHLn",
  "key19": "5raQ8d2qQgzFSHxSHbguA1Ji9kq1WZQDRL4nxfpaqyhDpxP3G2KykGPCqCAjSw1MKi6V7jm2jNUEQro9XXJEC9q3",
  "key20": "2ExoG7KLw78rdiU4N36mjkAyxp3bLQb9zDPcRsFKtmmuNHnmr3aoY2X2X2npG7UvBC9mKUHiGgQz5CfZ6EgJ9ufg",
  "key21": "3HP8iZbEzYTekjA37g85YUJcJc4ugrunPDU2w3T23u7baaF5rrATfVebWBgyWpYvFCyh9tTHXpA2d4au98HdGsQu",
  "key22": "4xsq2JDUUG2sLKQ93xvsghqq7o47SidtsggbMb6nFxVCCu8wkkLompSu4TU7GYooQeNjwHD57QGEvUckUKPfJPhs",
  "key23": "4chNuMRnnKcf3svVLf1g8ZjZyruNxzQhavM6dYqTCoecRaKXSbcoXkhEX3VtXCfiwXfQaUi9VMnWdnhSpWJKGXN6",
  "key24": "N2NtXpzkPiPqaXLatQTxsu5JrU8Guh9Jneak59JtWMQm9UyYrA9gRB79d4ZZNwM3nmSocUuzWJrFC5as9ckXdiu",
  "key25": "2C2Pk7CGAfWbvw28pE3CDYig3NuAk8DgmRqxvNEXQ2wGhhnuKJe2oEqE7k9ChZiAHDx2tiZFvh1XeHGBmFMF6TzC",
  "key26": "4NRKpUu1Mm4SZbjLKNQgKe5VVp1z28xSby6DVYMnQnqU4fCQKmfsotv6eV8NqPF9p8MSEEjJfnBjyaxEkKGwLPop",
  "key27": "5DvU9ptsRqv9Ri74M1r7TxeiSqWQxrAMA7Z9crMQV4TMU9TQoiRcBWG8JdatUkMcsK95nBcdBHzFLNBnVpH5989z",
  "key28": "SE9UMqms2NvdJGdTPdFGjfdTKdVxVNYjnhuRtDPzsW96Jm8oPwV4hdFkPFK5ahkVX1WoGYwywLvCcuG77Who1Bi",
  "key29": "62sqsFz7PssfNvjqocu4x27ijUActZcKrunqznsvmBCzNVmNui1ramGYyLpWDkRsFRhdPzJA9Yf9y9KcmWEjyePc",
  "key30": "3rE9vXEtzs2xXauFWsQUeQJBGS7hgKjMNDqsMjwzBsL7ZU3eBQpmhL1h25BwfP2zYMQcAwmp3kMH975cZCSU9UDN",
  "key31": "2PQ6bbgDEjKVNt1NwCgedSTCiZbTTyuX8fZhDAgwsKq6MzJphPc3d5zzbumXA6j95oi8t46T8WzeSwnafy9t3bL8",
  "key32": "2DSfY94hh4YgBKyuncuR2zSWvvpNaBa9AmyLn31QgtAE1uuCsWbiWnViURHMW792844hNGnsSTVokMCVp1aZ7bhq",
  "key33": "5QzHUFULCpiqnk4ExKBQX9ULzaUehrgp7RrhCLKBWH1C5w4Lktcnhc1wNRfZicLEAtc3TA1TRGVmTSgQMa1T9wS",
  "key34": "4rHtjSt2yqE2YhfsKYFvNGKBUxTkxiVM1wv1k5wZjWjd9Vm6ooDgJ8Thx3eVSgqje8usfHtB7MGhpuWNjiq9oipi",
  "key35": "5m2D2CUDamvpLVqTZ7BsA5JiFZk6PAomXNXVUfN7RUR5x6dmzCLnBhcMpKDSvmFtp7dYYFiztqfZBxaumDWcCRT4",
  "key36": "5M7V7w5Rs39hukCbCtBb8iVW8u6UCQgfAEDonBvknkL1SsjFg4dDUZaCaDhPv4SwUQpwtMxjQtMte18mAMPNroFD",
  "key37": "3TDCiP9FptgpkErQZoBzqd5CbxFjpfLkh4JivCng7gn96gTX6Fon5iW3aZ2xX85UuHKA7cfBE8CptUnsLKdfCrLt",
  "key38": "4RNvpYUSg2ngthWxF7tkNhmofikQ67jz5PX5uo4JJ35vFuAEUt6VoNQPbNpcTx4Pm81WvzkzK2YsUBdTRZ4UoPNu",
  "key39": "31q51Q2dAhKs4HPeNztKVtaT3MnUqkjH49f5BPUAkqZQwoAMM69rHFgpjkjMStLptFG5WZQ5joiCoMA7BxSydJka",
  "key40": "4tuvmBze3M5LReN6FRrbX7WWyNYA3y9ghUZEJEfKkidNC8hTQXCydGfYT7krXSk6ibf8sqhbWhRPe43xjLGwyNSA",
  "key41": "3hwi195RYNuuUQkD7Up8gps7Ck2ao56CaNEve2g2cKDz8CeToBM4GFmtsLuZdrKh5n2fUVyJcYj4BP7mDis2kG1b",
  "key42": "3BXrSkJsvgw11HHBduyfNtY5MiFtUEPQN2eS8u744TQEHw1zteSA1XJQ4YTdLtZVM3agHsSLavzrAySSkjRo83wd",
  "key43": "gpv5hyhRCP46jV1DtvcefoTLeKgkLViHJ5Ny4xbuvzwczVjbEKPk4CJ9H8JATCft46PM8R6hBSrKeU5akhS1LqQ",
  "key44": "5V8NdhdVxXvmhP5fZfHsRrUKz19DC6oGYLWENMYGWcyNbknoruS1QMrzfTpCPwkXn5i8wyFv6VYRfUzxjAzj4FMK",
  "key45": "2AdrQa1b7daT9dBXM6y8CYESAg4oEqPKtYCFjUPwtSgnDoTan6BLixyumpaQD1Y6exDuAgSKb8qoLSSXF51P3CMC",
  "key46": "5XmCh6oLDfusfNKMcWKfaNh9fvv9ukNhbqukt3YCh9fG2dTAa5zJJpTeSkwVUeUjugp1Eica5iyGukUsYwB6WEwp"
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
