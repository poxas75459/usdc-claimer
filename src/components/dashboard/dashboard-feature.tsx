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
    "3UmBF8CAkaJgepoYCjsqXa1r3AFoyFTXYXgVd39zhsEWhC13tiqYYSyBysAMwxCT5suw48TPvpxC5wbRx8hyGMq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XeJeu5GnGEfktsWwJcjGs1gwgWQxSwkfB4h7JnCpjcN2oUSXR9abceHAwiXZUK3BVoT1UQtU4S7Exs31SHa2Xz9",
  "key1": "G6GDRBHeevjGEj6h4AxtUFjLgjVCzpCrW83UjNEmhjs1aVbqbgNppwA5TRNJJwGarcRoHR7zdbrc3CPKtuxF7Dp",
  "key2": "5rpJZ9xXdfvqTJtFQc6majCqogGEBCuMpbprguey9BNM641K8H9i7LqT7FptCHPVQam8gnB7j39qPNrNvDci7VzF",
  "key3": "21C2pgcsTnew7pAChbYksd8LTmWZWywx1myaY7JvmLSvvY9173DAgcAgsoRpaJv8GUpZovrjdnLpTc2vhNPWJYBD",
  "key4": "5RdMPR7eMFWoJ24cLV1exqw7FpTW6y1j5NBeZfHAgtQM9tyYkbQKKWuvyEpyjPKCtRAeQkyxEaGaHSmB7JV33zWB",
  "key5": "zQcro9TiZEDSrHSqEpztrNgyxsAy44hJJfWkAiKBitq3yFPRuFDyodGZ5fiho5vvQ12LucWHx95BKRYtLEcjtfe",
  "key6": "2HsVM7CmELX3mSPRURSL7RJGNfMgGoCwZ433xw1qcuajQNTEb6wvCX45nvJiH1wwkZ2dCMvBp2RbNwtUKS8zePD4",
  "key7": "66igMQVGbyzSDEkgsMbSBzh4BETacBmjBdBZmTtrZPJyTpbRg2AF4Ufy6dDMMnyyJvakTEziuWE96gQPTsLuVBHe",
  "key8": "Lkjp5ehpsde8kwSkeVotbMenQnRHXFVeKSZUxzFLxHJxcbwdigrQEtXciqP8VD7pppzeqLfyM9YFhvVC1uVuzvQ",
  "key9": "4y3SnNXdQxwv1c19b3mUH7WJ7jmSWwL5BUkUZ6ThBM2Hd7EDNYmdqSUpDqgaRjGnDCo5qSqCsXJzLy3M84BJXzEq",
  "key10": "39HB5ngm1LKqjFQDLoGYXHj4jeAKcFLiTwogwcbVLR51pQYHWg8Kx8X6GHgecdafMRSUNydzKRnK57Ya2xJK2xhC",
  "key11": "3jKprNpKaZiRZhSLFtPLEM8xaRoW82BUXvMUArTxPmvrz1CP9whv64NUUkxjoQkXFy6ZYMyXZn5xTx1Y8wXZW1Gg",
  "key12": "Vvx1LKnyN3Lgwvji3Bh36s5sEDWB5cx54c5oHuMXyNtMWiivjssmzMfrnxXX5afFSSdBNdhrBGey5ZhtZsxjkfY",
  "key13": "koYeUTAVEJdhkxXg21Fg2yuwSHBpet9EEAQK8Eiz6dnPCUXaqu7rohfpcBoJFuRRG3qzGZvY9souCLcrCdQUqjw",
  "key14": "44YheQkexqnx6tdFe4XPuasGEDUePLeC4gChqT8cj5SSw4cHGJEbXTn9BGHsBj3BRkskNdYnPRYnyAbX9QtenTVQ",
  "key15": "sHtrWboZrrYQJvqGmeiJLrqJKhQkRRuAB58S5YWGzPcArmKfVhxUv4f48sXaXbvWyuM2PcXwo2ftYTbX2rbJbJs",
  "key16": "2QPyGERhQAWbKfsvbLhZNtbhYwNe7bobEQrwzcG8Cv4eAhM8cMWnwPEUoAobPQzLLE2KSfDBDfgkTmvJiraVbDUo",
  "key17": "BxhaXahffMQYVuKjM9ZKKAhRV2qHrywZWk5RZD7uw19fzDqkxxee6KXNWf7uu8EMrdmWuAizeQqKXCbCXqVmPLS",
  "key18": "rxTbiZE6UL7LAdHX9fYb2RVmiGCvpS6j5cdmoF5n7ChEa2WHJGf1956BxTcFQENecpm8LCcDVnigvrmboFF1bRs",
  "key19": "2JQcPaC7WirQcwnEs2DC5xkAjGjbVhfg42gqaTRX8C1zoo9q9mqhp25fGd1jj7Na5YNbZAdzqf1LfBbRw7C7qV4p",
  "key20": "3Myf8e2SVDFXS3ERjPEeVtZYVC6AG8JUMoXeU6LBRLUdgfqq4q7htfWYnjvuMQLD2bAzWDDAt4B4Xpa63qjp1PQd",
  "key21": "7x2GPQLt2aiCn3S2VMqNhTJCQva5vf1cm3HurjWJKLx7M7gnb1YXDohbpGUTRWSSAXyR9XKbRxcnaN1VxfjRpq2",
  "key22": "2PCd1z5gkMXEAmE6EXwefKvuMbuTC4CBLNjsjL2nVSJqbjmMJUMHBds6TPYpx5UhJ6Ej9285UkvqSv4RK6bPrHPc",
  "key23": "4s9rVmtUb84u36ETbyNfqj9QVUGKHENdHfNsE9pqiWxf5GzoUoKv4ZmtbkP1wSwyQ7NfhtTp8YFe3g6xFEBdBMQ3",
  "key24": "5DzTggWm6vSoerpVDQHEKYGmUamRGfhQbf6Rtqrb9DRXChMojTab1RBeAx3ZouSdLgYvRniwYCn3peD82XjAfWS9",
  "key25": "VZTBmy2iDRVtxyNzX6Tg8zyJXVNDqVUETVawBp7kq7VqXMqseVey7f2meC7riSWSPNKaZMw9kzUnxLJ2au3f8ma",
  "key26": "5yev4VsDdfv19cD4sPHjRmPq2KVHeN5mUjsH3H4noyYWafTwELSGWxwjMPWt2mS22nGZEEs4tdSd8wQGdjD1doHf",
  "key27": "3HBoLNYpmGsw2RUcDAExSn1MUHd5BqXTdhpynHDsnbzuPPDQHXaTveM6c2Nwtec7pa3dgg9C1LeXGTuVriDKkwh9",
  "key28": "4cmGQkAb1KxtAzD6bnREmG5pAGzWiWX2ArgRJMKpgLNxxoDcSBJgdxF7R2EUYncK5ybRiXSo65jy5FA6tLXQZuMc",
  "key29": "5U4P1efvYnyy13iapejoN3vnQoetbhohSY7Jn5ZZ54mU1VxtMq7VK1sXj7LSfFou5tG3LshfCjWt16akovmdHoLc",
  "key30": "2RyYD16gj5fQCLzNtpk3ibTo32cLiJnAfUSEPGhhzqu4Pi13mPEZny7NYgJHEarJpn3WxxxPbGfi17BwhFJmbuLc",
  "key31": "3eHJzkvux22XLaBTKhAaLW3Ey8TYKkJmkRGW2XMJg3Dq8mmtnVwPH9FDxuagPVcN9hPxMxMrG8XuxrGKEDy1obXe",
  "key32": "2seSjueCmRCS8T9gXZY4gucou2AX8sEh2cfVahWv24hry7pXJUDMGk8WdtUd5jh2Hi5Tkj3oHcL3uvhfqJF5apow",
  "key33": "4tku7PH2HtvVrQTYLAhmrDeCKAxyeUrXZwVwz6tL93rh4iXgf41Z2bJSD3oftfbwAvfNH2vEGsoAwqRYrCC66SzS",
  "key34": "4Un8KH5FsmCBWgWiVJu5NRyrHeub3phvgVRejtXWvcbV1j2gABVavERHxp3sdigR7gwTfMyEFnJqqvBjSNasT31T",
  "key35": "5Gid7RqEzhWJdvbzPXr5oisxrWDDgm48oa1VfjLUtha8z2ddfhF4EZhi6Ym5PMvoo21thMn4UzAnBXuRrFiyqxRf",
  "key36": "5o8oyuSNHGxDRLt2Xo9ww8Y5F5EwUwSG5JkZbx9aSKEU8Ttnn4aGjtxux6wm3pmoKp7oLZxeMcszK1tzbYdHDbGd",
  "key37": "zWm8zDGgy7uju6Q3uvaWyEpLWqj9otrEXwdmSdi9t2bYWNTYVzUi7kjfEvbHLys8XBT6koZrYYwAWKQbnx97nbg",
  "key38": "4oqNiLteA2DnUMW6bZKT3NKtFyoELM6EruUqHcuGKX1gJRtPi3ugg4NLULg1htLCDKp6WizLfSH9fv8swAJXfqLF",
  "key39": "4jZW11RvdVj61JFVTpdp7D8oWwyhcduaJWzqY1kanMD9rWetcT9FncSiMuqqQEh4iXDVmnByAocbRExyaZPmHDK3",
  "key40": "36iGc2FtFG5Y1nfpbqzig6ZSBm7ffYyCtdViN1hkJvxeKvwfRXjNmckTrCwXA2fwqAe2SWGQdjUTwxt7MHoqxaP5",
  "key41": "5GxXKYibPNQX9VYmcUpANU3MXfUNgEU2chRrHLxSWiRiFpT7w2Lg8mwMLvzWugo87hvpBRRBEux1NJqGVJDEEBWH",
  "key42": "5mohTsaDjjY9Z6ckRuX2ygn5vhAB5e3qLzAHem1e4uqeJecJ54LSShybV94ju4oyLaq1hd5jK63WxFGirfiNR696"
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
