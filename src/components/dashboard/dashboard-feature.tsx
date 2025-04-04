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
    "34X2jLCc376bto2aKdbZA4pcmLFYVL4DSnLDLMhXoSasxpVQMRJM66JeaEy2eJpEQXugKZrBNG8nnef9Xw41mfUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eFD1zzV9XowPd3tA35Z57EBRWhu5GnpMJ2Uy2mDCvrGKNBheEKY5218uEBmNSzFYEGYza94fgA3Q6mkEP7TyW4N",
  "key1": "3znGoUnEWK1wF4kkB5zoqzvaLp4jLfUcbrgCT2PfG9S6gTr1PCcYiJV4onwkJU49RHo731kVs7uQfiX56WPDi2WJ",
  "key2": "29x64Cn1WLVoiMHdHbAEWfRcnCtZRTBfTtRn52TQRwAUPK3cfrSY9pLFdjRzxekpqzQpR27TEjDraQFwE6i5UvsU",
  "key3": "6VVVstceMak3a1WEcYT3q22VcqwREeXRnaryrAoaGViRLta3ZGjkN4jGLvyRzF319ycDzqKtL1wDY3JmbmpTizC",
  "key4": "Wi6jxRTXH67WnjH47Ru5KYxCa8xkboWunMguqACVkB5Gwj6LpLngEoUpFBECJACtBXavWY9w31YTBHUt7NWydmt",
  "key5": "2ZVXofc685Cu6VDLQDbsDkfRk36GowLsNSRAAd5ikFTja1ANKiBMunWimkbfdsYqZphcm38U2oVdfm3sfWM9L8zj",
  "key6": "2G8FhtiseF3MJ2yF1ZvGmeVik1XFkaTStUZaTosAgjDGdpyok3i4KAfxbX23ACsxhuH4xSgCpM83FGDDv5UXHTkr",
  "key7": "3nzePyvj7vrV1hVHaBbQAePikAQwnDvWTkBwxEkw4ZerXM9dui5J7Tcr7bCactzXcCXVbiRm9Q2jCLKRfLdymuNY",
  "key8": "xfZ4CxLswS3DaHp7FAPvL46AqfZJFSVGBbEqfJrbzEeFsAsvAH4F2deN1FTUaiHd7mPw1NZbsto7DUetRWCPmou",
  "key9": "623CQb2Tw8PkN39UAjU2SBM93Njhx5uEccn3VrCBWsJns6XnZPXkM7Hxusuc7jAUuRQ7oPLHCY2BjpjghMwt5ZMK",
  "key10": "52V9MKtDQ7uUaUBsLAC4VTcaXdRiZgUQ8heewbhEZadxJmrA1h2WzCjfE3ZNKTVTcxvzkYC34P5nJXjKJSwUu6yX",
  "key11": "GyodQYztdzeXu6Bn5wErHxEP1f4YjcH2kw3a6uAvGu5QJg85vLQXJeGj4YREeuyBM8Cf7btvjgo2x5YQoqcCVqD",
  "key12": "4Wi7LGg5dzEUPkjeN8wzTgxxAgrqJe2GWRs6h5fvKBpBgtbgP797vt4gW44h8pr7stfJ8Q57cTHFp4eFkmEDogZp",
  "key13": "4uwrBnQagPBwMxgto129QZD76NZAh5H2kuPFzxE5ATEQa4gKXmrxsdsWmWsAEJh5CJhaEbNKLQ7JvLE3Zh37qNYg",
  "key14": "5kuzmZiHHGqNSiysXzwUMpKZtYQMmgiFzCeCxb6zxZUxUtQeH3L4Hcu2q2xH7qtQRpYN4LBqtyWPx31SZSpeE3G6",
  "key15": "ciNgJQfC2cALraYFTNiyviwCbkBFPtgw45y88qBXQKX1De9dbUAzp1b44yRq46xhMMJ5A9W5bU8TEvpJFoK7wJw",
  "key16": "NSEnUKEK8kcy18jTFy1y5meg8PTnr2naEhQGctoeZLw8Lz2diVM2M11PBiHPh3RSW7qwbo6xmiFMxwguEkSd47U",
  "key17": "65rUUmLbgSCdvcdCTHfRLsRo9rNu5nQnvVbSvp7hFgviPqHJZ3HtgfQvQDKf2dBhJCaYxyNscqJsQisvuo2K36kZ",
  "key18": "2pLTG6LK97A3PkJxrS4H1JrcMenjTNFoRBpkrKuQDGfMGNeyVE5nsyCZ4EuNWhPdcpSxkvmiwCGXspkjGFw8d6WM",
  "key19": "4RBuAK3NPPNNb2D3A7ZtRvXdxJMP3AHFvgZSGRbDjbyuo9JqfmtnHhYv7agkyHyM9W59Cow56B8bXJH73iMa7mZd",
  "key20": "M9A8B4WvXpYRPo2Du5jGS2nqeRpxER23USsh1Tr6y69s7bV8c8bkNw4WFDnY3KNmiC7FAJM8bgLsUWFk9QfoW6A",
  "key21": "3Q1YSzJUu9SMUGS84sTozyAzzjdutCMpup7woCuk1pFpaLaBTryx9MrpMwGhoRxiw4EMmKEEV1vSw9u5roGZdj8u",
  "key22": "9C3spa5W3J8RRKqMS5sowEcgRsAMGhru11QxP1B6PjfYgeYv4nuHfWxJWN6wxm4CtPYuFTE3euTmknwqPdo5sEG",
  "key23": "3kUAJyWVcReqD5NrwfrTNrnpMkW9XzBT5ZgrJwZbGGAwCzYgRqChLeNrezP8SkA34jnr1NcWKE51vdVmcuj6Nzb7",
  "key24": "5tBygJnc9QEK6fgAbwgzLAYtnwHwJG5uNSrENyeh8FKmhGb6tamCzYPRC5iHG63k6ugLEQFTR5AEBq29De8zDiAM",
  "key25": "29D37DQ4qZRnydftm5egvbbxKbXUqmHZTjrYLQ4v5MjNXxTYceTDhKbTdAnX9WSDDAhcNPP3p6BCKidR7v5Urg83",
  "key26": "2sh7NTVcc4dW58Vue9y6Y5Cj5tgGV4h4VPaUxeGPizH2h5RXn9rycYEFhv7912Y89jRZsG4ztzigH6aGgX9Y6rhm",
  "key27": "zKodUwjzLW2o4UnFV8yVmm2dWHCcH8fPED94Ny3d7h8NYyeTxS4nXDCPnkPcieEUQo8SrJU65WqKJtr5y9rfbxa",
  "key28": "SPMjWqLuAtEPcd27EgexT9iYAKqkrjHeS6TGMqkU5ViU6hpgqP6i1qU1L3m4iNaDD3HAkKdkCBVJh9F2CLKtLn4",
  "key29": "4GucM4jHdWWyzioHiSrwu9LUp37s2Z5nzAjDxbUh1UeHHvSgx2eqHEmQziyeUEk4jLDv2JgPQR4rNAm6Z3dNowYP",
  "key30": "5iCXsSDknD868FWw5ATG7x55zTYbCYAGSUqQouMU6roDkujAAwECvrgYET69dapusxZD79KHQEsMD1vw6kBdsQPb",
  "key31": "4rFvi2wN8uKBXZ7y9rndv4ZYi1hqKenUaQmXCy1MAzfR3N1J8MLrTLBaRGyYzKxuJeTJgrx3FDphoQr2WFwBA4Rz",
  "key32": "4ZdtCVnBcTgUUvABZyrGMUnpq1BHPMwySHZEC2iN3x6tnfW9vi7pwFrUuEqpxcGJ5ku3ZjnsJ3gotFmm7iYgayZt",
  "key33": "3c89DYw5VQAfwjDoTWHpAxt1PT6JUvjukCSigHcfBdy3EMHdxWvruL7SK3MgGTHZ32mJxB95GyjJ615egjYvcaRu",
  "key34": "PfLe6siQ6j1QaPFjJEzhriZKs1bHMLtVHcPD5s7N9YLyvWQied8ZyHB5tF9LjBZF4dAtaVXUvJ5kGLBdwMqSR6i",
  "key35": "4SWrxbGjCcKtFPKsjnpyXb6At22pNgUBmnJaFQKtGvW4LZFBRCvg9WJC6fm65VGiE5hZMdA46BbQs8TS52K12tR6",
  "key36": "3CroTMKeLBetacAaa1mvgq5hUbXYNRfJnGvjVeTDLxaEouzXiCRfzZbfEPJCLbNswnJdmmUuoxeqpf5y5piE6Ts4",
  "key37": "25Ce3CD8SNLn6XsSRTay6JptsHKUBRQF9Pxk9ach6DqmCrTqMCk8qyLDdyBq2tnZLkMs7pNPhntF7wCgqvTFRc9d",
  "key38": "25EJPpNBQiRVbKLvQqgp5uyCjRg2BxaLt7oHCWLnEPvLJwaXzAjF7TsH5YwUw6A9iJGyWoTHbCpKV6uRE1jQWuju",
  "key39": "4pBPVGdHEmnUzB6A89ohN5i3MTvJc3L8RAJD4AAbTZHLh4qTKpa1rsQuMRAiwUAXoZ5hDqiKuf6ceft4X4vnasKA",
  "key40": "bC84BtpRkpuzg99WKytyybtYbFwV7vpymJdqdpxc8w9X79J5A5envEUPRJy4XkQAj6dmEdUQFH8QW4zmbar9oJj",
  "key41": "2VFprcs3a2oS5NuEsQRVB5FQ9d5Utrh2cGCFXC8a9ZEsrNHJHEP6k5RRZ2Xved1VHr1zTsdrw5K2dvoEebpsz6RN",
  "key42": "4wqSrbDAVdSfZFYhvpnkgTNxf3MU1UTyFVqZwdH8dAkBTejywJe6BTLehb6e8R3S6HQ3WFq5o6grZK9xoKxaPkF3",
  "key43": "4GvAZRbvgA1Lpn8SPAAdSzUhWzYm7hrsXCMYz1ZVFbbM4QyMgxavsC8rEb9EhHvSYRXJYh7Y1MZS75YEGD5SPFde",
  "key44": "2qPKLVfKXyAFe8dipPEpiDw4huLM1FPf8VwbUqq4mxxsTW4269bgRYW1mexQdL35rs6Z1kCS35FvxbKg8fwpiVa6",
  "key45": "2C4fdpUzf49sQRKyjpwtAtCDydecceYsmfDkAFfRkELLQRUodydXt6ShysZb6dEiUWpKDTisW1AW86NGqD9oGe4Z",
  "key46": "27kjR88wKihX32Nse52zuHP6Gyy7n8Guv7mxCpSGXs2LpMG7YanXXwn1UugxcBLDLCEkVLafVmNg7JmheB796uXb",
  "key47": "5KaGTy8yo4jevVsN4EVJBQdjJEDxVHhCgyxJMaaPYmYM2aXzPbjNuTPv8vK83cP4b8pJknmLLmBa9SKYFzbMELEa",
  "key48": "2UG7ADRzwb3kNfr3LUpX7o98XwDZaAFty8UaSgcSFMCuJjWDah5frG1doLzP6pjuGU2MDjsxfYeVnHpVHhbUJpAF",
  "key49": "3Jkp2z6T18TxHcAwA4ZSWWNtEL9zQBtHEt3GsRY64Zyh9N6NFvjFiWuyAyEsPecph14cyynu8hBjv9PPiXWw8E9n"
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
