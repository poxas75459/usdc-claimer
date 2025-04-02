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
    "KXVerChh5BNMLi5RiHFWXnd3mxHL2yaPD9w4qrTJcvY6qYpRT8NejiKt9RqkXgiVfDiHyAU1Rb6pvoQZSWuz3qH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67TpRcp8pWBU1uS9NTL5fsRneDf4jSaYTPG7U2nfV5EJvJu5upBZu4Nq7uPSJhS9seLi7XUhTEPPJ4ZEGSZbi3di",
  "key1": "2gERvkNJKyMRnfYJN8dySBfJSL6zUAcpjfV7BJVGxodnyqhU2dJzXoPcZnVSmksfoRwANyKjNnqJJGLQFZLQonUt",
  "key2": "5nMhvN142pf8PGBDreAfzetrEc6BSjYijRskya1Eymj7bCvueBia3gxCWVGGfr8v6U4sVqP7EAp5vyDjt9KX5ceb",
  "key3": "4RaoGSQ5p9G1xQkLeUdBp2TuarTFL9GCNCfn9Fb3HG8GRuw8iMawDBt3Vc6ZQ67Bep99wUuyejQuYGgse6kaxzhn",
  "key4": "3Z63Hy3xmf27JGNNuBmEvT169GmNaPA4KngwTG33bGzrdQrgp8aNXvsxeiTJWc84wqicWE43rZshfFhwAWs34Q2R",
  "key5": "2BJExTcVtirfbLw44BfK7okP98f4H3iehNgbCCbKojuRkwQYGr6bRLPKCyyUGoNcJarTr5EZGurCAMLRzrZMp7jY",
  "key6": "3dhP9BqfDtXQwDDeeHViL8v2HEQUNuxJy3Zy4mCjzmFbPK5kef2gPVCacskEtxYasbUAdMSkygR7iGUtr3kZtTKC",
  "key7": "3L5UQVVbv92ZMoD8jshhjtzZxFAnSfauuimxPUgnL7UpewYbRNr6CexrwMu5W2R3nLPmMU4rvxLjpJgjSAa8QSmw",
  "key8": "2hQMcdF1LpAGRzdQiDphfJSYeg66GhKZjBXBnoA93MS3fL37AunAtBdyp5QvoJFRfiUo2bTnsp7zeckmqDfG2FmQ",
  "key9": "4WKXakvfJWVxnRgg8DpayD9BixVdnGmpU2d2JTx9tHizetRJa2dajSrheFzoR56mpHgrLNBiqCvXZEtQoniRFGnX",
  "key10": "2gUgt3RiUjc3g3ePdBynocuGgmUvYobGFxVotbPHB8LdZCbFAomfMkLVtk8i38tDHQGyFqLH2ngQYtczQei2ZWza",
  "key11": "2mreZrpK56To7TYDM8HsgMzFyALda5RpuNsJHinMVR5iKG4bFVWyd7apT72rNdv7y7MMkkvKDguzyGVj5TjE8FeB",
  "key12": "5yvp4WxfcP9bffimK5RQUVjEDY5MCyrXTyMUgHGSsv2JaokQqUqQKjooPpHb4huaikNbL2Mwne4Ycxu6ZvTKRJRx",
  "key13": "gHmm3qEUWcV4Uhndx51dJR1VACFjZiT1LhrTVxz4cGRpJ4EzbrVvsQf8sweJknFm5tWJ1sjS5Yb4At4kH9jkWZ7",
  "key14": "3V5yWC8PEKVhastJFQiSBguvE1zbyn5KG5shSr5dtgDuiFaWHzhZRf9qa7aehJ6RP7jR1rZaayb7629hsWSUgzns",
  "key15": "8dg9BqbnkD4kQudnsMbe6ihnHfcdYfsvvH1fBZgRFXGaWwXzz4zSYp2vLg69WwhNMXWxWvG1xxTLK5vAyxdAZT1",
  "key16": "3iMKWFp3mqSF5N48frVkA93LLjYJtpr6BtisG2hpMJ4mLLkUNR6T52Mir5smg1GaqdjDdogEQeP12Zzz6i9CEvdm",
  "key17": "4v8Zatw8iWYR68xVJUkcafrXvcJrYTF77sLXxE1hTr7KUGE9U7VbjgzBVp48gRuMiLjvbZ1K3uPEKHqADiPAeCbH",
  "key18": "4izBNh2eZHv5VaaG7eK6aSiPxsXcgptmWVkb4QDvCcMWPaoQ2k67RpHUiu355wvR3bDhkWd9xsGYmMhfYjxrdRj3",
  "key19": "4MgLpdLJun9X6aLyyshqNsMwzmirQ4pcRoDm1X8VVmPC6f7fPBTXrpB6qfm6GveYtMa1AKu2YMt9GgDmR3HsAjjz",
  "key20": "4uHa27SAP7VwaE2bpPyzx5F5mXrzdZsdZqKLyBpNrtDyQjHL29wmz4QyPy22eLbAVrYo4rUP2LqDQMoJ41DJCeGU",
  "key21": "2Q9QjSsHtekxBNarZRQzFGfn6MvHrgKoP2zcno78mycUJTYetFPinGGimsihoFMN3LfX5voszcWVVrk4MD7TrKNA",
  "key22": "Eqvje26ptw3UUnpGhKSHcU8PjN28JBvc1MNtnfevAMc3HdQzP1qJMF3ynN8o9VX5A2ETFwbFWkHN5AVHvypMHEY",
  "key23": "2Cvr6P7ctarDZG5NVXkW1S23VJXRntCTwfZUYfL8mK6FbKhtcTp3nBrmHWPAsSje2tvFS3uWdYu17v7NrMs8GzMX",
  "key24": "414Vct2gdzQX4emYc5fCPnQ1BuNHNbuwdqXnvUqrR7EXNABngHQCUm5qa4rMfRXEW1YaEZgLGoxF6HhVpP7FBDPP",
  "key25": "64x9bsoX1dnXdKWPfn7tbJCsNni92pp8J3ekboN8e9Hu3687dKrtG2zbLxXMdxZTmY7a3hcvb2YXBEPPmoSsr7mg",
  "key26": "2WEZ9X1t8tvwSaDZG9X7UVebD3hZXzde6zbx6skNkhHeYKCS9cESRxD7p5VzyRKV5cdtpHM2M6Vv9aRf6P7cVanX",
  "key27": "6ebVBvC3z6brsFAeK1ar4Hwynpk681NY539Ly2EMoG479J3JLWw6F1FKwuy27UcDu2f36sswJWi9ofZQNC6LsNz",
  "key28": "2Wv5fzQCoXoh5rdqPkFaYwoCCgxvzseFEqftW7LZz9HNk3wjagqK75zzXAyZ35JRyb2FtfHsJANKtzbZkmhBF44r",
  "key29": "4AWjpcq5dvvosALwswtstr6YsQeNUBGBrtyCTtYt2RUSED8i6rnSBiwc2Vj5jFKCnMRAsb61otWKEZ4KgDmhCsQM",
  "key30": "2c9RAcoFoKCUAtPuSCpDhosrJMYSAKEStFAJ1ijbssaFguemQJwy7RRLXhFar1JMMomsRXCnb5ZXdDdcZFx41iue",
  "key31": "2cZwpendBuHV1SKtJD62reNWgUqUiYwi9JoRbEKgzoS5mvkP5Aj96PdjZZqxKTEt5NTBzUuicZ9vQ6BnHHyCh7sP",
  "key32": "4FqvyeJRUohTXv26qpfnJE6aC5CC8VofKWFaeTxn5acbTD86fEuBPNVPsjgi5X58kqFYfHcwAvEswPKxdG3Npt8w",
  "key33": "52WVe4pT5ZreMjh5WbB7MG1HMadTX1NEJqV6gagdwSxHW8GRRSUgszzENtr9gRHUHQEm4j2EStXQU9CHhErirC5D",
  "key34": "5U89r4LcQJLsnSZY59hZf8vwKamdA7LRCj1Vi4YLaRY6Dp5GNafonNVbq2d7NVp7pwHZmQqFYzxoYz4nU4fWzz3B",
  "key35": "4W5CF7NeibwV9qsNcFuex2Fy8uKy3Nm6Mo8KhKsQtTssBFh6Z2NhNcQiWmfzctYUTaGfFTfLisjeQ2wMn2Eyfkq3",
  "key36": "4213XTVujfe9LiazAyLmS4Mii2PzWzCA9CMGk5tK6T4uwCu56M9x9GyBMnSiPTJ5s9xXwPm7SeSLfkmCiUXnAEgY",
  "key37": "yZu5kPWsSjJDUr1omUWhETigWShvg8A4miQsMqtYkx7u2d51BkNDVUDQNDrt8SJLjAehovcY39QbZhdTr3rJFwd",
  "key38": "4qLSphyAgUzBzoDJz4E6NSMDuqVxpTptfNFqsW6FS4LA8owDHF6FG9cKtRinqM24GDwKjt5rXFPDVJ1yhz6fNQjZ",
  "key39": "5aqdm2h4NbRDxHKLRnaFZjziVbo9giYn3azvR48BLDNFHVz8MrBXipcFUdwptthXwoY3u5zX9fZWQa3orWZauHV",
  "key40": "AqL6kd74EoVM6T8Q9Qt4jWnoWphBsnZrPPK8xXeL4C1MDTJr9yu1wt8qtXdoz4iAXusLrEz3uyP3vUN9kt7iAQU"
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
