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
    "9zsej9V9nLpnhfyKsZgPg5J2of6wDxGcXCsJq7tS4WvHExRcvrgyEfDrF6cbbyB4TfNVS8XCn49bngXT3mSH4g6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e7tHScHPi8tcVJtKbbivGJ95coEbgYa87ugLrSASdDAxtskD6c8sx7r4quoqAnePs8kwVaoq5Shg1iWf5B1HP1J",
  "key1": "3DBSkRQU4B5dhu1So2TLcqnWoMdXuKKPCtr4jEkz115sjwcCPDZ42FsmCKES5kxxEoj58oY36qzeWSFF1n1rT8cz",
  "key2": "2wVbt2gKV2VNzp9nYeWzwycH7jt38AgHvsZb1NqrRWrbN4YH6J97Uko7s4EyWjXPxb5PoUY2FAYszgTURAHCJbhi",
  "key3": "5W2MHJUHYts4sMCFRXJJtNbPi3ACrdXApdaeChEpcx7CWVVX2MKi583FKcwDFpeQnk7t4DtNwHuu7xexWsLCA8jZ",
  "key4": "2TtzT9tjUf1FzfrFp75cuikRBVT8MeEwVjRtkwp16Ua3XQtTr3se1kSBQ4GF9BUqYYAFEdXYczuR2Mz2j188b5bz",
  "key5": "29cnTmZmNYC4a9EPYtj2p1yKCqFjikkbCfbC7GdzAYzSAdztk4SB9u6VzxgxQLvQVqP7DrvzaefcWTLoUEs9hS4e",
  "key6": "3sgHzQgLMWcPAxCEDp5FFGnYapEy4ayNSdKLQA5AhkYTAFkUkbmpfmrV9TfJTnDavpbrFhuH2H7H7WDLPt1B7qBC",
  "key7": "2qkg7eKe1QbubPmfNwiAuvQaypMDdzLefDbZCCJYtr7WAnuanMAmE9ckFW9Lebvc8bemGrRQ4Q89fehy8i7xB2fA",
  "key8": "2gHJowznsVzqCHqpSspquXpm5JHJafCghWBhgKVCa7Z5wb1KS6A7ACjPcuX8R29Tm6pC1F15E3VT7QpS8C7L1Z8b",
  "key9": "2JiX2fVfW4ugB4gWrooAw3e5UbCn6GtnLn9Lxz2hJ1e8N2bMRd72xVRaFTkZUt8ZT522jXHttbfww4nQWUBTuNZM",
  "key10": "3TB82ho1zyLxiKSthUFS1MCAYgBSu7PZHTcTYfLiPkLMDLqvF1p3JJ1fwg2FgYL3dv5yUdhmVvb6mQ1MN4cMoBiF",
  "key11": "jfa7Lo8nD5P7nSUP7w6Zmn6DFcWMVqYNjuXNv4yWn4auHqCwGQepHQW2sYzBpVwque9PaRgp36JU4mpqayn9euW",
  "key12": "7yKZPngJ1fU5GcYsArQj61vS1E2ZhhL5DDE9wcH2vTe2NLtP2YHJgbPCdffft7RAJwCEVXkCCCFpFnGjLrLisKc",
  "key13": "vfig6KHgcYpwRe1Gxr4GwSBoidrFKDtu22QeJamJUy6cJzeVyuF6fFjevbAYn8JTKs8TKLJ1zJF3mZNAL3RqJ2d",
  "key14": "2btFH2yWW47MVJQ7pyx9BvY2Aq8oHZZbMYXKKCxEZEG3RfVy8QbyeuefEHmMgtJs7ExTe3m6tzAcjWWMNyA3SiUb",
  "key15": "4GRReHpnkjhK5zxzcDGwnzdnmXGEQ55U3WXAh3HYmpz3oSQwsPJ2JNHRA3iVVCycW1nJMuDiAq5RLMDLkm2UdzPT",
  "key16": "4Q4C2MwF93n2aoVsxMSdptyw3gDtqz4TWZtAwhR3tFtbkuD31V7AqUxkZwD9wfXhdHxiRaD38uUmFC5rwK3T3vNh",
  "key17": "5scYyRb16BxY83xu4bep4yin3YRfQZiQz94WBSEUV4a8N2J1uRY5MwiefnoGBwFdi7MagEwwUzwePwRDZ7xzSYx",
  "key18": "5xbqufeH32XkD6j76fdnqBwLuWDJHuS6BiEJV6X2M3hCercWSYcYCKVTSSrtqsbvTCxY6jnCPEnw9Ckwus6dUyHG",
  "key19": "5m6zYtUQozqDQ1LHpCcJxUo32dTrg224yrfxDQEKVTki66tYVjyPZUWvCYHGX5xHCDbo8XyFjX4LtBmspwifrpPz",
  "key20": "4ZExUH4TGG4RPXuWuL3dLxRRyFpGxxEPhzNS4bL3wVCrkTV7w2Hrc3zDZRaKRJ28sw1Y6JXoWuXwksgpuc2b4bXS",
  "key21": "3J1kCG9rZyoJUPnFiBmGxMvoUXr6Rtk6VCpTXa18duEGpaUmUzkNMPdVNWncGytegB3EaSK8k723r9EGRWH1qopE",
  "key22": "2AikQcUcphZesjsFpfVtkavVSYwwXruPfxQmxXJQ8bS5zbhLkWc3ffh3MTRui1qiCeuBkycFJiUQVXEcdq4DpkCL",
  "key23": "4ALVZefCPVxxq7DUvtmDXhxKr1Dq2yhvyFexFndxDt8JhiRE9WyyMZU675kpMNhQRVa3Y7sKBTf4GRScwoiywRmK",
  "key24": "56qGe7ZcaSNN9pnsBHmzBtxgk7JNZjFMYFeGudnKUAh9NhZDGdVvAgA6dVeebtTJLx7Hcs5QdjMg8zFNaiiF1jtM",
  "key25": "iRFp9NmtyTDsUiRwspNi11icBo52FgAsQh1hTSB49YYjiHDbEtNC8Qb84FWzSKMv77qF7dKXDzDnULFkvyRBNxP",
  "key26": "3V9KZihCLdPhSPNs9REcTpdYnbu8S1fwHuY7QzcA9jgLgHKZqqLsL1ZLYnaFRouPvddEbF2MYtpN8nMWXyRrMiHm",
  "key27": "3W22YAP1FkcqBhPttXA5AMimDSFw7FtNoVoXpD2dXuiyj29Hzmxy9pBoBipVTZgZy18MGiCDPyH6qCXyndcR9GVP",
  "key28": "4REnZqhEZDS6Vp51vaJ6NVL5AnpojG6NBU9CwPwsWErP79YwSYTLXNxuEboxWe8QKdHcCHcFscW4tKhPMEuCvyDi",
  "key29": "GcnFzAJiKnaZ4cwUaViPALeqendE8N78dBgfa1kZx1WAyKq8NDVmAA19spBYhTjE1bWj5NakYf685QVFWCdnqnQ",
  "key30": "4ewUR8sppTcLRAnmLGYsStUzYndeRysvgUh3b5svpVGS4VYoZ43wpeDPSq2miewgV7ZLuysqXuAF32GYkYa7TWHn",
  "key31": "57HsjeBZcVVBDoUNTDX79N6Fj9ghyimQp2vcTr4Ju6ViZLyJq2DMYfBsJdMx3mNR7eeeAE1QrEqHEhp6RcTDmgdw",
  "key32": "2oCQsXQr7NLfYo17DStjFtR8yv3LzUrQcfQqR2ksB9rE9RQfRMw4WZXnjoTbvRu2mdTsuKVowXd39qzcf62cAwWM",
  "key33": "2h2ek1Y7DADNFnEMU2jwvfF9oNRsLNKqZxMfEcSJu6SudJHXDuocnjFTFhcdvoXtUbqksY2koTi2saXebLmsDRqH",
  "key34": "4CYbATZksQhbVC9uM9hQLNALhcTg6cMvaqR9bDHj2tNgyPPsP3kSsj1VH7FPewuPAG1JFhKp5pcmdFUavpdQeuJq",
  "key35": "5iRrcYZ7oGKENkBBTzAe2dwgxmP6CAr42kLM52rmKvMAjJEzL3LyWaYN49CENFCgods5qoy6bc8xCk5Vab52RVLc",
  "key36": "osh1E9myWSP8ofRNb4JBLqmxGW1fJkwVQDjWUDXS6yFnZCEUJjvWB3WNNPdyQkHDsGzh4G1678i4YEMVMopRpgU",
  "key37": "4nR7JYUozEQoe8PJU2Teruasb3zpoEnsYNgbFq1Dv67HAntHkk47ReKkxERmQ23cTgmqnEgVZQbG6uiH4yTFvv6m",
  "key38": "5ZBED7Q4j8xoYkhPLSZnM8RWfNrpEDieyTz2BGzQR9EBbD3dUeKQMwRneV4e6B4vtCnrQsxasC8hzzfrY1FBwBdd",
  "key39": "5QNzNv9nGkrf6RFA7tPUziLzUXiVPN8gmQsPRpqvJ5zcoK7RFdvuaDGUvcMdCdW9A1H5CsXN8pCULtQjudd1QPeY",
  "key40": "5us9FaduWdFb2dqY8J7pjUkJdU5KVYhKxJsrggC8RkUoUguFK6ksNdo4xwBDpbLoEgXcws6az6iTfwRqhGYyMfNq",
  "key41": "47noDQoEfHgZ83PXR8XEPY78Afg419W9s85yAQFqdC1KGY7ab2g4d7twRHLfkPjdhYGCFSGGKXS6tuwfMq9qNhcw",
  "key42": "61DC1aPuK894SrTuLYH3G4yaW9GiBnkEc8MCqJbs7WAm5CAYGt6PkwfJiAUtr6ZcvoknDMALjrWn7E6Dyd7DvqCm",
  "key43": "5wf73LJ34zSMeqj6xhV9eVWrFmt16GgsCk5vyqn6zjnLYj3JHaF1d4do5W12BisyCiBEpdbXnbDdZQXFvqQgMbTr",
  "key44": "2Wh8hAn3g1tAYnjvqEE5cUQB22L8rg5oyZaDRmQizyTs2SQFou5f1nyYJdnUPsF5cKd7ELG1dcFBUhfAvncqKtoN",
  "key45": "5aUXWvG4LeiNWSDueLyaGp7M3KnoKUHKEuBBD5NkSAnV8avtAJY31R4PkcvkbGF8JspvfGgD6m6beYyLmQG7kHwJ",
  "key46": "5KdZRu1LRm6QYqLQYivTHidY2vWLDk2wS8Qwc6CamcdjWVZQii22RgUsSV7Mzu4sNUVdQZgEL89CvSVubVD1Paio",
  "key47": "2BNKbKyCWvJv5aJbYHQSPh1xJSxq16t4MTZXXByDkwm4norWDb3DpEvX5ViKgqggHER42SnSuHSyQbQKBLWtK5Kc",
  "key48": "4v3fP74e8F53BCiGHNxG43qM53AfnbCiLxbV8NiDkZcCve1RUdRrzE9VoHeki6FBp3zqSpR92fCeRRp2soAbrHHn",
  "key49": "RpCDc2WcvjnWMBr6y2VvrnZzK7tRTeHDJaFmxUXbS9fonpSD3KcxAE4YJ3xEugADqNTBX4bs7sKN8Wv5rzjAGui"
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
