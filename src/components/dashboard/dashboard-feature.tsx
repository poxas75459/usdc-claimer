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
    "4gPxQB8WFrvLAmJWrLsejakqkQqCbGjFRPJowmKpLWnnfjUNisu7pebPyAjvSJ17WvZ1uYa1r35NwnmD7RiEHtXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E9Hu4yzGDKhezEFP6LWdu9HK6xWHPVhWkniEq4PEkicbx7iJSzHjN8jg7aZLw1PJsJ1uEfBuuV3sULg1Pr1QCvr",
  "key1": "4bi3H66qBFnxYb7VHyzT8JdCU9ye3Kyihkjp5kEnDMBUNxEAMgo38vL4UHKwr45qgPLX4V5n7GbpHtANmWVbK34o",
  "key2": "5578iRACswtUQ5K7RJFaxJGWaNWmiJj7aYcqYQJbit2F87mBSGTAFvJkTLpGK5moQsqDZ3Fm6oFUAmw9iT3BuBTF",
  "key3": "57bEUhXhDxT5AauZL6qPdXU4WDWYBFDadcsUoHYDDiVzZDHVMM3Uox2tR4Q7ra1FcnAPuohAzpFSsRGGFqfibhoN",
  "key4": "TMHH9PyqUezuT7XerUi1AwdUS3Bv7p69oWhC2vgHiGREi1KFmdMatA6HkZrXSgMRgWiyX7wx5Kqm5CFKK8G7qFQ",
  "key5": "4J7xd9CieuGFeCod7gPLvXthtkBR6pFMv4FdGYVrfSVzZ4wLwhXTaZrEiji73LQAAiecWdDFboCp5D9AfBkJ1oz2",
  "key6": "4TUebB1suaaBujyU7ooQqNuKarA41UTuTgXUXV1wM3T4vKPEWShpY62gAd7tdS7ebyFXLSySXGVnm8J1cMJsAFMB",
  "key7": "5YnB2Zm68TvqefBeGuC2sg2HHdfC8guGB3fpCKkERJsxJ4Uxp7QGt7XaLgq7G311tJQFMiiYqRXaXrHEknJjvmHv",
  "key8": "5UUJruxnx8ywKbrY8evkmh3YuCA5s589use3WRAbDKhKhcAG8827E8ttxEhYV6rMUuWi9V2b5UD6cLvaaUQAY1ey",
  "key9": "4zyCvmqjXAcGSqEnWmvB6iB1iFK7P38oYZ5deXWZYYkduMvhkWDHtE5hQ9mpGd9Ra13g5e1NsU24AUwwKhUeG5i8",
  "key10": "5nx6nr25jt9PFwYEkxBFp1GJSB9CYSoqDkdtn8fPX1nLXCYNWraE5jfUxyrLnfcRi6E7bkBpgAQuuLETnQQYXWrE",
  "key11": "3VrsRBmUbd3dXcoHFydJZauyBk8TV3sASpsRWyjF5CvAtz1LByjbLyxUhwUThfPBW7Pd1ZTaBcf37iP2zrEL8mcn",
  "key12": "49WVJHLM71pQwmrgpUS4EJyjZeFLDKSDBbPAhU5fuWWvg9QAtznYZ4vuJLEBxjW876S5VaK88ccGgyFJpqGwDTSz",
  "key13": "4sgkcrMDCUv9KfPmEydCgcauhUxmwboX8qagPHkrh6CeuqpXUjAnnaNu9awNn1i5gcDHFUTkmgd7VZd3nrD5kt9m",
  "key14": "oMaGMMjbf4CVPvJyyLtA24AWGXjyZePxDV4S7QRxnN494NwBtMwUGT1RTD1x3bG9PCtSAhbwc4A6hGVmf3zuQ6X",
  "key15": "51p7FJPQePkYQxD6JNxUKVnMveswSKALv9Bi8sFZP1cBci1rU4a94Aq8KrQ8KBqtMvv9N3h7kTs5hoj1X8T9pfrh",
  "key16": "4EL9PJXrBkme1YmaA2PX5pamQQb5AUPfuiKQMuNU559G2yJBRGgrAxNGjMnySzV58WeXzyopwcVasRzDSjNGkvjN",
  "key17": "jWavbFiSaRZAt82ZttFgzPt48u1PMkda15EnQMBdzJty9MYzgMCwP9HK5n1bwnu3RwGQhCp1gNiq16Eb1n7hd25",
  "key18": "5eY2VADBgsocXFjC8oC17dUAjmxUpfLSdAksUqMUxxTTd5tMec5B6uiLN2Y8oNcMZPgdpB4dWNzU5NwcYEmjeERw",
  "key19": "uUwYKxy3hUuabJ8VVnqzRjXtxZiZjVUnsZ7wv1GJi8XF7WSMYyqbNcLioiTe2dQx1qDDcuHdAQCfmWT6GFFmhyr",
  "key20": "YsKwADG5yY5CGr45upbq21EJSesWt2GzcgGjPxqhUDeSkWTBfaZjC2hEujanpmm35GzyoG9dvcuj18oauYVsQSv",
  "key21": "2JHHv19ZwuD6eSNUq1pHvpm847NXssgrQP62eVy3jwz7VrDfaRXeXEUB5RmVCMFfkNibfYjA3rwWLaU6fV5fGHsv",
  "key22": "27N7i5QeBsLQFTf8hck5UULCcHqThvjpxxnuSJzdbqPZxiJk8UH1Q8o79VgiPFovi2VGCsmj5CEcmubX6BnYM7ht",
  "key23": "3AmrLHZiMD5ifeW4tneHmecE4FbKanLx1PhrzMXzftFTK6W3CiDuXHmKUmAB9GPqkxBjU2GYsjNkz6DQwy3zmNJw",
  "key24": "2MrkBSkJkGjnwkFH7ebqHogtYVr1dK6Svh85CWgbMijVV2aVHpW815SD81rFVH7ccgim3MV2rGNdzHDSpzZnpmkL",
  "key25": "3hhxeasJYJJXv8FwBrmsYtaM8Jyr1Y3zFuHMTdmHgpW33FtAzTvWpohnPmX1rBpsjiR5RcScge2dJmbk3qHwFBH6",
  "key26": "KCRvDq5yV5DbgMAjZeNig31y2Dwwt34Qr2nho7edTXrTY25CFPvPjvXCdT8tE3FBWszQGP9cGGuQyeoUMyinZpV",
  "key27": "BmwiPdMKzRqwN7KQHpkdpRGmSPurc22aqgeRP3xV3akBNESknFRVSEEJ9JUXg2t7KiXQoYWGUbDUcyCiNtokyck",
  "key28": "2FBY9F2yZASR67PQyHshvnh9eT4qRM5sD2kmSXPNGJWZw4CbZDKfbvPgRfMfSR8bN3Ff3NND2T6QXSse3oSdGCtL",
  "key29": "59S9GStQJGSx4RwjvHvsoQmjZoMqgKEV5326bS2sZdqkasu2e2PXa6mMrARNuxMeCtJ9aqmP8B6i98kajx71aJw9",
  "key30": "4UheGUueCNnDDrHfEaeNp9w5z9VCzGTFQuBqZ1ZFwinXHiTQtsmmzr9WnyC2zJJ3MB6DscXaoBcGi3mtxKtKoHkV",
  "key31": "HqkmiEJDRTj4DmC17v6aFMwYzeQjrieZVEhRurDpUFCEqZ8HPNTJG21YCRKPuK5VWhV9AAjXPq7xq5Y9LihK5kH",
  "key32": "5WwdhyMcCfQD7qVEASQovLuUqdudTpAZwAAHZahLbp98zubrmTKztqSsvwrfvAbWpqn58KN5CnvBmUegpPTZF6wS",
  "key33": "2nEGxBAimy75EKcruAMMRaoBM3ZdHz58H5CCCE4vsjE3pJXvFRm5EwHRacPojv34Th3FwRmSEFpodMQrqgk6Rv7w",
  "key34": "4MVAgVz44weWrvY5CdwEuqVaRS3eNKjcct8GyhqBvWJrsjucAoZ9XGnpQSdDWJCsWZARdGBShnpWDcuK7Cf6QEKW",
  "key35": "31FgAiC7QZVipCV5wgu5CTH4VfCw1yijPLw5XyLyeVzHKoMbPsUBEWYLpbhGaLEHotZwuRQ8vizCZZv7EnxxpZaM",
  "key36": "5XxMWCtVMc7TWNkLk6vefGaHqKMmiftQbGqGjaAWDbRRaTKweWSM9RfNQjMUmAwdfFEFUt4nKDyU5UbKn9xA62kt"
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
