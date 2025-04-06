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
    "5mPLuKCAKxUrcQ8jyb9KWgks8RLtXuaNwKQBZfQCLwrsCUntdCc369wbKSjGhMBnhTbTABiHqEJekBSSmMz4qMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BLxigrBNx8Y3kwRQK3Zt2paqxKhjoV6SGxyBWWSb3nKeToGczmT9SG1s6Yb7NEHQTuxbRMXk2fZTKmAUo8F6uJW",
  "key1": "4tgkeou3VcSnC4YSAzhioJuQZd8F2eWGBQb6And2qMG2NmdkXiTgxp35noHyVFdFdV9jq7HKWb2uQngNJDhChktW",
  "key2": "5yG6gpTBAosgfLTNi6tayusRNxWM4EdmRDCM356x9qvU3nFvPwFQsFm21Y48jWaSRqWGLdL3WxSnbH6aSHdGeUxd",
  "key3": "4wkifgF8oJBPbz8xWaipDxYS6oAuxRXZbJjqGUykQmBJGQv74Qnue5iNDppNKKGYYdGa8uS6kraCrhUy4NZX2mwo",
  "key4": "2a22YrTgYNHXCvp8HQhjX37PvHAxq4C5bcZvCk7YDtxcKHwwdhs2VCFkQ6jFateygYCpaqeRMPmPDJoq4jgT7Afz",
  "key5": "2UExsPGor3E5ZnASsP3zvquPNLFALcusjPkqX7R1gdis9Nm2M8EMaqdwVB6hVS1TiBAs5DiMeLdSpVEGo4DiYbuM",
  "key6": "2DUsR5ery3YMSxPsmsp4EfNKM6oNGKuwbrcwE68hvQcwWhyWcLzVoFK3qFHSXwmEXGfSFX5fd9rH59PNtgtgbn71",
  "key7": "4jopg7P81y2q7nyQAyZGTsYNpsdgDJtTAG8QoM5yyeXtpvHKPWDcdqf5ZB8T97vZGrHe9hykvBvkGPhkXJhGpGvD",
  "key8": "JKoELrZ2FKPQJbGq2QAksFNrf2xhfhg3tWqJxhaCbDMfNaFMGTmUqG7jqQF4J61BweTgLge3CweGEkfSro3WhQU",
  "key9": "zwUNHcjPrbsK2K43J7g243C83gb6brQGaWCJzrvo6XY2NPucUCWtLXpLPgH2H44aYYP7dKB5rdW2WDQtxDC2fPF",
  "key10": "4XTSuRdFs4CbFoYERdUVdJXoioG6xTU3QFDxaZpc7jZftNSyr8xg1sXgWbQkYnxEtZkmeq3K13qc7jPdvZyTqifn",
  "key11": "2arRktKvoaFb6Hjq1wryba3sgsbKPGNcJfoBtLn6pqz2DgXVmyQSboN7ACc7iBY2DucPcjpAK9MUkY4ojwAwfmTb",
  "key12": "3U7hEgeXZohko2F9js7VRapJ4pC4CDwAihgAE3BXb7aPRABrtXUyQ1Mquoa8JmYgNw9rFDowuT22MwuBRbqgyg4",
  "key13": "2d6xp4zDpqsHyNjLJjDcxRs9HmTCJqt5XdQ8epdkEnSuFfUTxQVxz74mTifLm2QVXdMstYxUL7uA7qAp4Hco6RiS",
  "key14": "9aqhLcrvhP7ZXW6wERjNa69opLqULGJYbpvYr4Vix716XeDYZAKapFjvL5xM9GTtkcHxEvBZC7rVgbJmgzjceFU",
  "key15": "SWpLc1PvM68YjDS9hpaW2wseSXQcpBcCxC9Kx7LBXhRGG1ymfH8NHSW4Mq1JZ4Ra4DU8GzUrnm9t6DXcvEws82Z",
  "key16": "25AjuCtZJsNgn4RkyzkyiaHSgwpVxThPdH2ViQKzdjzbxwFAaV4LF39SyDwb3y4o8LLSUP3JTuyq6i8uCxeEyzmS",
  "key17": "2qQTZeXNz1nBBAmQQtLczDTPbTrLy9aqUhJLWv5dEmMWxpF1Ys2Xz7bsY7bVN8bLJ6Ace3CaFmizu4DkavVD3xvA",
  "key18": "A1wsCAyYNiz8uHzruX1iLDhnuFVTu1ApzDtfRmutXVYtpnkqHyUtQDLhYZbPyuftP7eNU1CUsW4zotWBCAF8Z8H",
  "key19": "2rCbMoaDLqL1RM2EZw34b12dFwLDUSeRMj4qUe3iRPJwx2UrnmrAFQz7Ucd2dwvKYxw2UojxXzzd3Eb9RfjiWtP7",
  "key20": "2NaBYZnJbST6QzmgVSuJZUp2PUPjRcZg1szfMRsZ84zECeq1S25mdBLQuzWBvCVW6wzyWzXUTSM3N65DqdzKVAAe",
  "key21": "4jRvMSxXPtFgKVkcUC2khGTzk7KT1cKk2hRGvLWqytUQdV9T3V2fKNMuKA5CgqPdxxXLAouv3WpGzjp5noRyPMLf",
  "key22": "3SWzsxke2r7jznQ7gqAnFLuLpyaTg8TcnZpCZdWoc4qr9VR1ce2ixvwsLMpGan3A4hEbDY2Ve5aALuE76fRcJDnN",
  "key23": "UvAgbrSHEbqKKMKyqCpDF1Ekr5TcSwhbkNN8JEhksHQ7CNZULRkTXoK1yPSEXEfo14FsrcAtaKzMSSyD2gTmxQq",
  "key24": "4crvCqNnywnMidHojoThnH6SUYUTsrCCgfjLkMxsjGidZzrHXhUhZVzmomvcrYYAbDh5wFDLRnqfEVUdHT6k2wFu",
  "key25": "2p1qRiuhF6MYJGn2vZ51E8csrsNo4B9mfx8G6f7E8CqwaYgbEuwuTLjQzqNZqf373X5bhe3ejS1w99WoVnGEQo5T",
  "key26": "3tmEvj98JstbhBQMVZPPxE8U99r4VQnw59wRPHSnfh1jtGUwnCg1fer2jMhU6XGSyM4wGvVsDeC8gpNFE7qkTPUb",
  "key27": "2FR2jHJo4vMZuHo8GLu9WvJeW7gH6jZbYUkFBSvTxPtTpPE5FLgoiRBhFWkRYqsHB7v5sGgX31uQwmYZJNuGw1Jp",
  "key28": "3McmFDJkczKwYJQpTHsuyShLP3wHmqTGkGdhE4Hr92f2rc8PNxGZo58UPw5ZqExP4KFNpmmh7Q9g7LL7x62BMkBx",
  "key29": "4CEveazdGqKPiLt6pb8fPxT276Die3MCzdw22NDR9wGsCpNLxv8b5eUqRf6NnQVJU6PNFvRersXGHEZBQt5wpuQM",
  "key30": "3WfbZ3UKKJeHi9B5iiC1bCfGGh2aYi5gxKJNqvwq53PiKth8tNhhs3hq6C4nDtxdJyyvm724ncdj8Yk3fVU1bKpb",
  "key31": "8w5tqzx5AeMaVLaFskV13WGGi9GHYSx6ybj9BAUVpKjQahvfjztotwQceurAvxaCnS3znbFyeD6W6Zm6Nqf7N5L",
  "key32": "64tuUAphTMiUfPmohQzDP2rLGL6KW46wyTutbvmyb68oVbAYkJECzWKkSW82Gdg41YzTBSTwp4tEZhk1W6kXvxz8",
  "key33": "4UwFpLEbt9XzThwEHoUGdHzY8jwnajUnpV6sx8SsPR2gxWBNrZvFBcHEWTuG3CXRSdE3H8Rge9w95BdvuPWJVFro",
  "key34": "65vzX9Cc1HfdhQeaVtE36p8DFeMzzsS5zuqeu8tvhLD8ZFLR92fSwsADvj1bQ7co3AFkVt5kLGJAmAEU6SCV9PGE",
  "key35": "4Nwfb8EhwGYEmSUJ4XcsYj9nXfvQra6qXpRS31fF6uk1QbFPTzw4q6ReiFP6o1rnWs5QJuFekyWMzZFa8qFcxoUU",
  "key36": "67hkLVTc3zjoyaaBR6EzmzwL8piAU8AkfYmadyCYemobiek3qqkZDbyeKVgMtoZy3GZ4Zur1EmvDYWrY57gJzK4",
  "key37": "3VtxdikXuCQ9RpeFSDCkn4BBgsGPxKAfhppg9GC2jDMW5iRaaVt7D3kD5vuQ3YM4d1JtuCb5YLN7ref9FzjsU1GH",
  "key38": "2LV7YEKybWH1wfGs2zmJ7KsbbU7hHTvXH24BYoRJnLFRuogsfDdgWo1Gc5eUTtm4uBkcSxpjhwLGT8csFsqCWkYX",
  "key39": "3rsiSM7oNoMebtN3Wwbh3xgwURx7AHS2N1KWaN3T4hZk4ekM9RMRfPoosh3K94opni2nkkLSZu4gZpQbrdxFh3MW",
  "key40": "5itb4e7a6xTHSacb2jPV7MmFK2oN9rSHzWn2Ua5s46yVfo8PNpNLJirpHo5hwgeBhLamjdTUVPsUKfN8pXT962nu",
  "key41": "4cLi2J3NG3dP11TE2TTvktRXaGkmAu46P1yyXo8HPKyjQnvLZhfCgW5gymdpW7c5KonhJyXgfELZ1r63d4AyGUMc",
  "key42": "4nosNe3AUxLVrhB14B7gKs5zc4MFHiv6rCGW98Ey5cgHVcworsMAk2eVyLtxQ2YCzFj2q9rpbX2XiZDgsdKx2uki",
  "key43": "2KzXS9RaVynGqcfSWzsC37GTLF4qPHUm9Wf2jB2SPfKdr8cAFXkQxGfMkqQggvyhQSbtjguAxCm5b2SxAcLTXzaY",
  "key44": "3UcNoyPCM9LpLRW51Uc324YjS5icegzP3KaQbvnSuvv6a3Am9hBAFfey11VdGZ9furfWztpmXRe7HSffmCbDpsUD"
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
