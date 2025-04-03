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
    "zBPkjfGT4prMdWWB9wygskx9aJGVQBogD3xnNFBdqx9nL2gnUT8YgXZgstEKCFbQrC5k9HBqdNRi4Kh85r1iyQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nW1HFcySVBPRyndP3a51HtVLeiyZYJHiohpc9ucnxVMBKo58BG1GBPqrg1haRDSh1FLPEiAfyGkqPUtEjLpvEAf",
  "key1": "5pAjmMT9LXGoQ18CzeFfVWTE9nTAi66n8FuUUxvBsFXtiMxnzaLJBJfAr7mnr1ECFkJSdGsLKVZHEBDD1SjvXmSa",
  "key2": "28Frgjoi4uUF1d4MbS6yfhW48je5oDst5Gu9bP2itQcDbY45nvWoftjnSfaNoX4tch1rN2LPk4iZEJRDNChz2y2s",
  "key3": "CMPB7V8FAGvwqDsNDEAhBPgpbF9YAkgzZuLbiYtMgdXLSTBiXEDk1cw8me6osyVudhbQPxAtLfv5X95SGMWNXZk",
  "key4": "4sduPypHstYvNenL52utqRCE7CuEboyMgWvnHAbrnwvMEQ1EZfV7CpEhKK7VmM9M9Mqx2Y1f9Q4Md9A2cEP6P6jQ",
  "key5": "nn2ysJG2oX2pqgRDK1n9W2NtX8uQbHQPNnNbvBtPaTdsrMMpW5sxAmgtDiYJX6wzpUc5WfhyBnY3YS13roHT4HX",
  "key6": "3wVhmh9qPeScwegpsSuhktChvvhkDPm2DUgfqyuLCVG9z1MJZFne3h1TREzxMKU7QQ2AZ7n21WBTWWo25zDK562j",
  "key7": "4ej3Q331epHTEi2cadeSeUQMx1YMnYmshDKzSSzKtsSYBBuCDvKkfFUWjBYvLvirEt3Vu2ECAwhrkAZwR1uKVaYn",
  "key8": "5p7ZH9oV2jxLq16JcZ9VmJxGp61iExJViefGE7UMKfQz1FzN23mUz7bLW6BsPTeoD6ZffaHS5VWsSoPFqQp3sYGh",
  "key9": "5vbtP8saVYzQaqBZhoiGTX8JyKQeEd5GDGZENbfMWvXLN7V6UoJ7AksbzDXxUJDinaKs988w7u6Q57NKnFWvSS1m",
  "key10": "27ZouBgqgrAGh2aXxciYUNy4H8bJTtAvzsrkwRsUKBE2TpGAUbSb1i32gaBLNPLu9GrpZRWug6ZDsmNXN7MV2XMp",
  "key11": "3TksGw55mgvQXTx6RNBRLnVFj965SfCpNSircwEnAryHzBaXBThPBSw94qQicV73XYeu7bLenmmtkoGmqgrsJ5FG",
  "key12": "pWUBN157MS5zV36rxvQUCYiAqy4qZGkqD2zn6zeJN5CZkQG3axUHiyGnkr2BQLtga1LHJyKXKNBhstDBKXnF4aJ",
  "key13": "4Vg6Pn6DWxiwxevrkQpHSE5sFobkAADG151o7GmC7S8WKVDnLQApuaBAVmbRvP7MsVeGru2vRSmwrcZSf7rdxiwE",
  "key14": "3rRuv4j2ncjojAycZkrNeTW1wWqBmannEpjzhutjLBaTRuo4fBDbafStcqdkygeZpne4JQSjix4hvbiRxQV8FXA1",
  "key15": "2zQgy3vhLCoQJgjtFazmVGEpx82Cn3bFJ7H3CN1aKx2LrAgzbKkcPxgjHjLN3dWu8iCaJwajzEPdExDdMh5DBDzU",
  "key16": "4D2mYg8XoTezdEkQMoosttER7C5RQomrUVWW7FjNnjvdeDQVanK5TmpRQBMWWP157E1uHS3qxnSA43gKPh7sZVSC",
  "key17": "447C2RzxrbBTNwoCK1S89memd2FUh5Aw7QbdZ9TTQnm1Cgfbzyxos3NAL6ZRHBTcJjTFEFiMJ5iMx8cWpx9biApZ",
  "key18": "gTppjb3uMGBVeTH8Wvqd6kgxeesbidEdwJcW51Kze5BdbeCv6eYFiTbXKMJJtAmhpcmm5zNF9rAHf9FzSVfTmFh",
  "key19": "4GKkbnfKX7kArWmrT3wQzKpT5RetTCb7WhyHCxMBL2kPEnxt3ZjgvDP39vTVu5rSVCNt3Ujti2oe5iBcjPdrb749",
  "key20": "3MuKxoWeTcgtPEvZL1ide478RjMh9i19DVzzHQwBonBv2d6VrUcPYBkXKHvHccD8JiwLKjbgBA2DtWjHJYy2oEth",
  "key21": "odswrdEmmXkC2LjTATASuBdGmBtWg9Ay89TroyRVDodJkwgW4qUkmT7JZoc5Gdir973VR15EeLmu9Xh6rNV6vSB",
  "key22": "3dyeJaCjyDLYECgpzFcSHhgDxuEQqKHM78KTY2PQHTTM17Uoauv5bwKkSmkf5rv9pVzxMSvJ3DeSfX98hLYnh2WC",
  "key23": "5mgYdsiFTcevSkRkNrUUxfH2K83Uy3vi682mgVBtEBkNek1hUMamsiCe5nDTKzFMW6De4YdPvG7HejqLH1A6ZgyH",
  "key24": "5JbSHiWof8ridm8STQkdiHGEk7EcR1Qk8p8SyqCRjjGVprw9VsZXLDCWqGfeaHdLeo37hPzDRJaoD7PZ57g8eVJS",
  "key25": "25mM7drxbYEbkQATsHKaTUf2d4vNnBp1m9TeatFphWfKVr7zas22szPwVdWToQwcQLZezbQrwuV8dTLyxhfmdFsG",
  "key26": "4tSpe7E7y6hMzpTrWyu7k5ARyHeKvkWhmpPSebte1sQdbYqJL1AL4LFWLTDwpnnmKzrj92EtnCZRG6v16dgHmFTB",
  "key27": "3qZqWRpifTVfrhcTT6aXkUTvQcEeoo4pBjaQvP2iP127FHuibqtEoiyx4rsFmPyX3MSkSLhUvpYVcxTTpiFyt7nw",
  "key28": "2tUnpDVPxG1wMqfktgboctSxJM3pYVJ3oy82Wyv996xhX4CFMrSjBShzGMzQZBFikcztV9HAHayTmMBJJmUsgQHf",
  "key29": "34MiWE6SfQEJ1L4bVcVtER3ovPLwKddRBY139xKtBbDWQAAEdgEbHsr161pr4cGiafdHPQD7EYmPdD16eQTqEEFx",
  "key30": "4Qs1UjdPVaR9BCeqB3n9AAtwu7qgrvTnWbXSdYt9afyYjwzW8bTh5d8heHRJdViRoEhYYtCEe3kYW5jQMmSQDpY4",
  "key31": "5dHrL9HtCUErwwt59UTX7dmjSpiYWhw1z9Q4F4rvPjq8gztrqHp8HFYfTCeLBK3ohCqUk6cHqWEDRFk5Fr1hzf62",
  "key32": "TXJuM8n2dGpasexwM5LfZjgzcMsqynYxHSUBroVHij311CBUENpTypfCDDRygQkT8xrhgirWvejdZSHnTAbD3xP",
  "key33": "4zSuqKEAGTqtXwcxttcW8dTvNbHPao63GjAU6bnt7TeUCTgHJNjK39P14iAcQzJejc5CgNVkvs4ijQrhpv11Z4nC",
  "key34": "tu8bsUEe1g2MhZHvRhXsvHKTJ9twWYR9nxeW5ujJpmxgnsuH3Cm1DYLwxXvVNHBRTqnM5H8i6xWTt1Uoia1xFPG",
  "key35": "3z6kavj9cFP82nc9kfZN1JvRZR6eMFu1hykiKUjdUE9oCyi4DugkxEaTsaJ7bUEHnAuaAeaR7C8AwAHVo7xYFuRM",
  "key36": "2HKzAhm1hbXbdo9VXz9Cg2U3PTVUhzGf9vxTR2pyWVs1887j8uGCixe1JjSk3xecMF18SAWrKjFPckmTfxfh2kSo",
  "key37": "aE8SZVCj3jEkLcfK1xkhxop2vFaLZ2TadDfw2Z1oNGnBSRc3YGsQdj76QWmTe9wxi3WHexfe1oN4YfkzLqkxNKL",
  "key38": "3yvo2nyqwX9xwiqH5VSs5TwWDVAM6SJRcExJwpJixjUvnaHGDR5GwhJ2Tj1z8CmJibKCgPwta8Kyo7bNTikv49xQ",
  "key39": "4fChrDxxGXyCNuWPaUQHUCzzSXYhwCmWxvCUcF1hQoqx5E3cdnHWQDW9b3BFg7Br1bJstLSGFnapNs9W2Ds4NYfC",
  "key40": "YnMEFBR3rvssF2UBYupQaS9u7o1qtsfF6G9SepQwaXpgP7FZCLX1i5WSUFMkyRApG258MjK7havthtcTn8xS3sb",
  "key41": "2ci4DHXSxkrPNk3QTniiTcPzo3dCcTdE4ZanaLG9Cqz21NMoKMbBHogUnFFETzU1fKaifKAwLFYDTw9b4gWD32C",
  "key42": "2tTEFrDVjoEftH9AmJzKth3xnRDHPR3QUJD8Pk7ybRcPVWFQSdVc9K467sSPy4QNfxHvfm2whgeVHiCeXV4p78fK",
  "key43": "MNYrVo4Y54n5WikXwKb5WzHUZRtapa9UhaqurLAW3evV9sBB6qZdn3Kx452cToK1KahAuZCUiTX4kNnoFwXun65",
  "key44": "AdSGa2U7kjYGjrDYv566s1uAvn5SqsamRdczA3SjEWHicHKP1ciy3dt7oKU2ma41iN5TqWcTV2mRPnUnXefUEv6",
  "key45": "3SFZDi7Mb4JV2PuoxFAVRHJ1Vo5unZDUo9zhWHMZT5pQQMVWMBbBkat3G1YvxZVNo7c8t8Y8HNAqJZ8LXjNHA9py",
  "key46": "3DihfZP3mQbkw8SpdDzeLEvuaaDoedse3qQUq5w4M8bAJCtnDh5p1tHiL2yqShnDptRv9pegmU9DUzTMfTtE4JjW",
  "key47": "2qjzkGnJbWVnzNvQSNjEp2dzRT8QobLDpxpDodX94vnAS5FjYab6nkgGaWinVdEaW74yADCXYTTmWihMRkAQB4Ev",
  "key48": "3yHhrxTSK1wxjzzxeiAcgmqofpdAHfju75KTueC5DbHkARsZduhAgKTe6fmNX4NuoqW19Nr1ELZgWhpDic11adzE"
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
