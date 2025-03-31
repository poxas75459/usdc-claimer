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
    "5BwiHCB19Y3rx4RZW5Bh1wFPbAdqUBknVYssy7gvoYvdLnwtZrmPzxwjasjftatvVaaEFcnegeK5y2QMs8TbydjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jXZzmhtQH1VHqQtjU67r6486obmRQou4Ua9DLzhrByccW8TVNfFeATStLUGKmgBk7VzScKGFTYXMzw5ehZgZz8U",
  "key1": "3kCz5tBcx97GxaP6GinKdESE32FVSNSzHxDzeaF85g21UJDyza7WMZSXTRJUyfEKtrbQH7Djk3kJn4cGFM6ECo8B",
  "key2": "65o2jKUq1oZv8J1U5yVFMVk5L6dUsV5gbAfxGoh5uXpkGzyqorsV2JK39YoUswFF5PUA2CNJtV5uywZUzq8HJocQ",
  "key3": "vUP6Po3Dm6MX2cf5sGymeet4Zrnpad6oKSCAPppDsKeSw3DfG1JFVEJnJvU5Ftg7TY5iLoNp4ssrzGqJGuT4TBY",
  "key4": "489MENHVvpGSaRdaDAcTtUzoNL9EsWNHQ4WJEom9mJXFfwnMQ5E3eZNKKARVDrUAPAyWq7d6jC8KZ1kxKVPk8CKq",
  "key5": "3y9CFoi8X2A4ocNXvnwgmTXx52nSH2Xzrev4ZUdjh2YxW57PiqhBnsgDVLphiyewhgFSuP7sj66nrm45PB7KFrBn",
  "key6": "4sUS9SmUvbnRo9TodnsMVmeGHyye8XWDRCLLyEg271kMWZvcJqqwiw931YDpwqL5f5Tqz2ZCfL8CcQNHTahzMuAo",
  "key7": "3puxsxtABFMuTBipK95FQWSrHaVDw7tRRSNshHmuqzKAsNKEcFbzthup2snNm7aFiCXJX6wFhrYQ3UW4v8VBnVZe",
  "key8": "51scyc5KvTvPMurNqeZgtwJ96oPGmSMvs25n3p3QQ1n1Ai3msVL8r6bWHaqi8pk3b5UQ3ECUBqwsiXXRLfvYkZFu",
  "key9": "2Au8rcMwuNeTxmEFKu5Bkpyq6obZo1zfVHUpakaBjWa1b4b8hjfM9Abi8CS3xgxitW1SGDgooYxXMAk1SxofM2AD",
  "key10": "21gq466vkv6ZvmsUay43Uo43UtUjiByBSgrrzJ73Yb95SfNeL49k441rTPNjskY8CgEdtiX47Vkc62BQD1VvfBgx",
  "key11": "yeD9KmGfevJnQdSMwBA3L7HRVR9enJd9eokQErppXCqLFnV7CNDa2FtYpKn8zvwaPUsAHPTS2xxb2KFHnezRbWg",
  "key12": "3m8RZjcDokdv6bMCHuZJ6GfJKySUh9jrtGb3KXmw9EH9hv6Y13nkPnBNNFBVjmmG4h1qxjtnxBr2PJ5rBYo3xJmA",
  "key13": "4Yr3QFSnKDdvXKUgRfjRkCuEzC9DYQBQmam8NJ353DTGsCedGwUiroXrD3PZorwpXXRHJTPptCNwitY63QzDGLSJ",
  "key14": "yXz8nQHHczqmgkM3BrH5eiv9xbey3k2MY3txPEM68TmCGyfxKTZS1bwLSGP3dMyVoNrKpwdfX9yZH6iQ3Ec15Wb",
  "key15": "3pcbcBpaZToDZSB45fcv4JKvCz5mjWfu5KhVewpLzkcKe5iRNjyGoiY5GCxK1cbJe51ebNNatSukazWsEME552fh",
  "key16": "5VzC8wdYbKVEgQaJtLukFwRLxjh84e275aqjPgcH6CmvrCJj5zkiPqGp5DtiQLwUSpXoRRR8c5kQwZZd1X3Z7dM6",
  "key17": "59zFes4CGfHX9oZUU1jTM332jW1kdjiz1bs1c4iEK31zkCyqisiJDCPJNswtnsKuHtAbmXEe8ZJC5CqTGp6RwEaG",
  "key18": "3VLwMYKwgrC98M7jyDG7m7eGaZbiJ59GnbeE8S837EyxbNr62BixFbrtKc3M6PtB4Qazh4BXUpvePsTHggwp9BvU",
  "key19": "3dB4ajE1na6TMC2Ncx9Zh6DmNPNu7BYrFDm6gbntYxjQLWM9K3b2b8SBjx9cHxVwovyGjvbdL4Yej5FXR1H5eZVW",
  "key20": "5Lp51TdjtY3YyFMiVEjqEq7F4vpGZ4BypcPSWftSgABjYY833kHAcAxXs6TfkxL1ShZKmeKVLduXPmTpqEYr8yTA",
  "key21": "3zWCvfQmoj7bMuuQuocBS1CTD9zwypHFwjedKniGNTP6otvA55UkhkmqL4c3G3kAs172PGjtet2DXmpjj7jNM54e",
  "key22": "4y3onW4My8tqxe5d4V6hDDFPXJeufGnjESCP3Z5j8DWZHvLtKMWmtkUXkY7jXND39sGx47MygLxQ8ZzSExGgMn42",
  "key23": "5eRWSg2zRJm2Y8JBZtAn3Gt4sRQsLG1JfhAMztJNTshj5QRcJCxuLH8KFEGRc7DRH8SjE7xpJT4wDt5oGMo1J8YL",
  "key24": "5pxqJBjmbgRU48xwNUiL9AwVnZ1vDjWiFvbMBArWTpNVmQKgn6jDTXTPgpSp34Xaf97K1VFKWfh4fhgkQnu9gwnc",
  "key25": "D4iLGCoxPbwLhaZtnY3hXhrKeRjHBnDF4RLMeyALyRDFeFtQEPUsLdQmYobT7Ky7h6zsCWCMqLHojvFun44qDbP",
  "key26": "24uwANNA7ov2N5S3kcLMMouG1JCpVpS2YJuRdQvRtpcn5guZkoyuqrRuxEqPcvrBoyByju6VCA5X6ad2uijX8t4e",
  "key27": "5xmDFAriRmSWH9mrF4WCz9gvXgfaCPjuBfgdDBhcWKPQxeqwdxfRdwb4UmZKpij9mtREH9LeVr3h3DuJ4czkTmkv",
  "key28": "3mLLrE7pskwEgkknGRmSswvtmEmhmmX28fiWtCtfvn7yfD4mP1rp16i6ijAQesMsfwvcapVMTT9VSHYv4cRZco3w",
  "key29": "67Hmdxn5tzwEniZvQpEkoL3QvdyPDMHiLqNrS27xawCNEQw1B1X6nrP7hLDaPDosVCabaxAvAKX1JTuxzTwqTorN",
  "key30": "i7DzimXTvcaMtdWFGikg6U35KUqpvkMKhCqJC7Lrw2SGR5ABH2f3zZqYqhYwC8kq6vUbVtnzz5p7bYyWqKL5qMX",
  "key31": "dRyNPEhp3bSPTVYvKatvq7oNYvi61NYFssUdVDUEhrpoEYGhe7bztKuwQJRNT3o1tLqZF4vkVWsY8PycTo2evDe",
  "key32": "2KmyyX9sqxTCMkLbfpPkpisq3TW7dZtqSyX7c7FrBWZos8fNf7e7memA2ELZsY6fEYcwTCGp7JDu3iVM2zHjAHpC",
  "key33": "3bQ1hutdQxEHepcngDNFYDnDzLWBQbRxv6XMPtJBQFipn4UBsM9tqio9SGksiiPC4CGncgdiV6aXmcWzsgRGD7iv",
  "key34": "5NCg4d9fjokp4DKm6vHKEVdzf9jiEk5KHbR2skUomSER2hJrY2pGRMCb6zBd7XQAwevzRUhKLJYD9MjGtE3LhbRE",
  "key35": "3Y2RYx24h2FNGpSiLohjGoAojyijBZYwYAeG21KzKb5N8seNfs6f4oXKe6BBXyCWEpo7w7P2hjZSqsQep7aTYX3Y",
  "key36": "4qpStymiCwvsFtFZSdom4KyUvTj988qcFcYm7xPSghwMwYcW5TDUAwFEyYcBkxUQjXooyKjzCHZTd5zbGJWGLoJX",
  "key37": "Dn39ouM3UphPbwRX3zPD4DoTLCyHiHPijXK66P9Bxi2NmxBhApoCuJonsh8dUUnQ96F9whLQMkaVs14WCrf7Scn",
  "key38": "5eoHVDVGc5dhi7ESHM79iwNCq5hW11Nnow3mVCb63ove87J1vqw9KLYJfyCxE6g6LtsQ9D2DZcbrg2T3YnUnNoGz",
  "key39": "2B28Cdzu3re2uGXP7Meeus3SgnbywsJwqBxTMdFiZ32ZuT45HyszrSqpc8BeVwijJ36huLJM8rHyZN7sKgRaJw8j",
  "key40": "29P6yqLCgzb2d574iBX5gDm7mUhMFEN2DUWGyUXp8uHGrJtEuoKGWzFZpubb9TmPrkwhjyivq2XWXDUnQqSS7Jdf",
  "key41": "2dRCAWjchBynRYuDXT26ByaTRnkPRPq7kqo5JiwnYS3NwfZtf7LqzMGvR54MnnZtgRUzMG46SNGp7wnEy8gy5ku5",
  "key42": "2iS8qgDK24DxqK2tag5gagMCamqnFbLoUE6ERFEznuYBfsd7xNxQDQt2YJUM4DzHVwBRDCgdg5tWBpygEbuYeQNh",
  "key43": "2wPtFSRfTd8VPkZt6Bx2mBCCwJEVWXfM5TxhpjGh4ooTXiBKw42f1oeUEgwpp3qRANgRcixrXL7LNcxP39DeZfvJ",
  "key44": "4CXqyjkfMHvrs2qqb757HMx77T1S7b8pfrQczJzvznHpYTYpB7EahdtU33c9BjxWsJdbUJyHTCwpZFL7UvD5Brv2",
  "key45": "QF1uXuAuBWCBg5hSB4iYCDWVgaKD2Rw4rnAQpaR5JxwaRKzZDeTfcJFEJ7FFLtyPyzY6rWchyRwz3Afsi4yUXdW",
  "key46": "xA4jpqH2NhnYTUb9tyraFJHdcypcFfao5qq4jwVJLiiEqiNKUC1c5iJBLeLxdcnUCUr3WK7p6HJBjEXWQuhi3b4",
  "key47": "49h7o5ReL6eBXyQ87fFfAHefzQZsiK6FcdWVrSSznhDTPzKKXfPEsEmXd7MRLtLptoQguwatEDjV4LE51h8HaJ8g",
  "key48": "46j5PXSBh8BchproBW1b4RGnbfAxMM2hJ6tbsmtdjWnagyaTwuH2zq3qBLdu2WK4hheZXDKANoQ5vPRycon64zQP"
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
