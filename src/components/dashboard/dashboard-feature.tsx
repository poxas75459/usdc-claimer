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
    "2kMxke3DXNETYdB5EH91yJSFZ2SHVbBL6RZTqn3SzVxuFpGz7hHZ1ePNYVXnDT4LWFSXinwEgvcLbvzuoRzxVXs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54cTakgzyqBYPD85S7tksHdGHP2x4z3agSLeS8XMjBFmWa5UcCLYqrxJfuJLoixq1tYyyWJoYqp8mwZ7CtZR9Sxp",
  "key1": "4FrYrF85QYCtLKayAxXscEXJwaALfizswAJn5as6WCfmnn1v4F92jSCapY1eX5cR9zjNvWDhK1yfWLfGLqF7CRBh",
  "key2": "2aL1XfWKtNggnvjab2PdpN7DtmQWXyyDrsLqr4fyNH6EZZFifaaB6p2BY9gFDXCSQmmaF2gyftjcty7TauP8PFD",
  "key3": "45qjVitucmWD3uuNZ4Kfy5XNKXb8op1tzUayWeAGpFmKh8Yj5E5hrKmmCdex3dCDvb4e2yNdSiPre5YxWNDQoMGM",
  "key4": "ewdKTxseRDHbKo6ybciLvUPPnpjd1FUnqHL5FpvbFYHthm4QxXTotk61Pi9bCET6ysNZFzG6FrUCFZ2jotgD9wC",
  "key5": "51VHtjanVFTDiSxKq4D4rwJfREkXQEf2NceiHhantsUMSKs8h1naSa9biKmaXn1TpnoFwBZqrHoRYJThvT54YkXs",
  "key6": "3XxeT1YriHHv2b3wM94MbjmSzHDGU7bBkyx5qKrA3Qmufe6haSBXgst7E6Rsfinz8vTnLgrinwhkcwc7iBg2zWC7",
  "key7": "tdSSnr8DeuWz1swTU2coNsPxZjsiBBSXfurCoAZMyv7eNPKQeonrd15L6uS8uxzW5oKbWAwkF1ftBhS4nN1F6GQ",
  "key8": "2M78fmh1nTAmoaRUvA6QbbpjCV3ug9t8xhjgL9JvoxQFXatdYZT4zcYXGBU3MtxopbqSqBGK5zBQnHVaLGSqn6po",
  "key9": "4fAmdhjR7HvborTQwgKffhgqfz6WeqGcc6AqGUm14stcdbXVVh1fQSu3eiqh84pbCGbceWXdHDPztfHTxiJ4bkTr",
  "key10": "4K37CtEirnzC2rv4HTYnEqavQjcGUbwq1mkATJtukw5rckW3SRdQ4p3pVjGVYZ1EmzoriXwUHJ2GB4YxKbRUa3ew",
  "key11": "4cC4tTntv55zZ61ersQ22uYh6G3XLzRYcTaXcfNsTArGa568jm3wJqbQE2uTsPSPi1ML9JeANfPmXeQ3JNgouYQ2",
  "key12": "167WWrnL8M1aaEkTurDsLiSHxC6kgzqJVa1tuBR2NFYk2PL4oXLmWjTCvc59NXoFtoLuQkAddjLgZjMNN2yNj8g",
  "key13": "4Gcgq1fnh5Mf4eTnUbqgCzF65Gsh9UxjFtNmBDKzL1HM6ZCSdRFmeq8KHVQ25KMCRYyPYw9jdShifJtQVwAfDomu",
  "key14": "4sGGAkkupyw9NpamnaGk96iZFYukDMLws8YLRKhnC9MoTs5AtcLJrE614ZurpMaMSgD3WcM4wLdDWffQgrnt53HW",
  "key15": "2a6zYWiVu9RpJMRDL1Ki1bd176QDtjWVvTwP2hKZR7emz3HfUEowyC7omjjqrLM88pu9X7BsWumvda78jdtxTD61",
  "key16": "3kH7QLELSa1fHzkh1RPX3wQXC8Lkc59Q5bx8AvuPLNaZdjBgRLf6aV2nqVY3KgLFabp5XH3CP8tPi3bJh56GiXaV",
  "key17": "2BiEemC9DMBipszZDZdQm3dAP2hBPMUhAADvPSjn4FQ7sSotxkbLqs9ma2HxmKTiL3uAXMCQ7omiodvEvcH9Ggmn",
  "key18": "4o7w3Y9g7XkcaPXNP8kQj9pXvvBUbxYCnXAP6Sv2R57UkcutoSqhtNpxzcHNuBJfgrocfq1zM5x2XH4BsU6nLoNx",
  "key19": "5aYCYWUjfrqY1NKLhptWxXedGBp2hGcQyuyNUy6fsjz5Kg6xCwMwUiYL1NpbL5PBgSYUAFEMfzRWwJ5aeFZjebb8",
  "key20": "2QbmqeCYwiTM31AmmNxTS3ZLCYnNn1AumJ9C6qyvtofgEzu4zA5Qoj7yJstMKfjTRTbzpTPwmJaR8q2JsFcQsgJX",
  "key21": "7XEYduxrMQYFXA1DZ4jnPoUyuuVLhyGQB542uZLXgBFMTMnvz161AasfxCWAEer1G6urqDx1P27HY4cx6zLQaFv",
  "key22": "5kCY1h6kgduvydmSxqPSwRkPTqwh4VP2Mf5fNdggZmZjMdtstzVPkKB9kN4ztxafzfFrUB6m4Qiz5RzgqUWL8Qjm",
  "key23": "2JBRbrHZL797HXTxDttdMKM1bweNVxKAPErXK11f6DAdBvV3pznhJSKqikYLPrUDCAqeZBPCzAzUMrhDfW3vpURE",
  "key24": "21LuwUQs1tWvGyq5HNxqBn6ng5u8uL4T8ijDvxdPd4kgryTNZp5BMCqbpAtkmR9NAF5iWcutRC1HLaSJEwJiRViW",
  "key25": "46uBGmJWFdRs4EjBbvgZppuYog1FAmDLasyCGD5LxzohJz6WDUXnZ45crXVsGG6mXEwJ94wMX8bnaAwZFTYnKkV4",
  "key26": "3YHuaVBZL8Pe6UHhvnLnteK79uYUhPEaWjMeNrhLSwng9DmhN1qirdTXbkkG3TzHu9wis1JCSpaf1hPRWXPpemcu",
  "key27": "Y6Zrxxyz9MstZef8Ka59XBCGMuCVw66AdiDkzHGVeaKnMV5em6gTnQgoUg7N2XCRUNEQr99o5yGoMYs7ggdNv34",
  "key28": "2cFt7SUFoJn1FDCBRcb7BEA3bNJ5YEZmoyiRNpxmzX83hZ2LK1qgRTPuwcc9e8BqJukn8xsPULw62RGpbRMypHJZ",
  "key29": "4MsLcgtBcAsbNwaNdxN2rwJCbyw7XRmas9EodrRNtQFm3S1HcfUJdG1QuadcFEEqXKeC6Ah3kBsPMAVj4if1UudQ",
  "key30": "5LXvLnxG9pDQ59VCBjhF3D41UWnKLnoCK1Q4FNJJhzmByrRYc8zEejCeeZQhwZmGJcLNPce8FAA5PbyzDwtFxrXM",
  "key31": "4s3VdqSsiu6e5FFEvFgNR9pb3eXfRZ7UYXpGqaFAtvhXBVqaBcRncfnP9WPYKTd546N9Xyw4Ss9pUi2wzTrffF7M",
  "key32": "4iwutXeBgSPfVvfc9feqJTHPLcPfo2HthHTachGvJwhn6DUW2wkTNtvKqADiRZMiWT5ktXKq1ww7ViByETtoh1KV",
  "key33": "4GoFy9MFf5DPvKu5yZiuBiwU6Bhw6ybLw633gxyDUTU7KToZjeYhv6F9L1dNEqNhykQPTJBdsYqjrJbQyh4FaXhN",
  "key34": "61nsLp7aC9Rgj6Q2ZMYSNoE66emLb5nAh1Vy6PLXs5UF5MHUHZSEQYrh1mz6GugKjqYShGpMJvZ7meJbCgs6Fe9G",
  "key35": "VFiH26dGVTZjAe3Re336Edtq9ZVFjyEW4ThKPyMBotPokE4GzTaUcNz6V4ySBUTxXjXE7Wp6CVR2PvitMgtLa6S",
  "key36": "4Sfkf98CeawvacvihSmLJQRcYmfhhV5cRv17XoAzRT2RYADNL38fwyomjM3Xu295KwT6Q56RwGCiRCMhsxu59sKV",
  "key37": "5Xovc7hmEuPeEj8Zmt3eWniV1tHTj2VHoAgeqnhXaknmuzz8LuZt71dtF1ZkvLUsL3ZxCFXEpr58424TnZKhN3pc",
  "key38": "614uUvE9vjGSqbLn6ejyHaDyv5Ep7zFG1wUA6Bmc1cwLGPV2aVqFDSJQB3C5hG68hT2a7DBUD4ax3piEjmJJHW3w",
  "key39": "6wNPJHzstyim3aRtgMMWzi7SsJjsbM2dSQbWWPvjqWSa7bBTMEZWh9TqFZavwTJxdV8vktdEFsqeUF8RNntTmzE",
  "key40": "4RBarsQRGaiKjSPf1ureCa8o9x3zopw7KBZGM2E9NSirwECdUWBahqUarhDkDBPR2Ra99mzNAN7WpwVWmzRbX8iW",
  "key41": "4Gp6HmVs58hJN5XXR8swTwftaWMYBob2K1KWpEj1CoHQT63kWbKQezJP2NoA8SaZbKBsY9yJ1mMWMVyKP3siMeMp",
  "key42": "3TE7DEmqPxbPiP4R8gtBVyFJrg3Qh8xArS61V18w8VifJum37A5GVvnZ5s7dcWNzPKFbwp2HGbLugf2gisfD57FT",
  "key43": "3kJe5LfawfSE6QE3PJgJLJ5vjqTGhGULMA7TTP1nGW4FaXB1epWpBaFYYpqHLnaeyxwUPgCi2A5cFsSQ5sWPJXoY",
  "key44": "4C2x3gG6hKJaGDNWamZqfngLA1Y79BSnPNbr31DbmU86Hp5Kw1JBt5i7VTCYPGBru2UNwULsm6Dy3gNCB7KVawN4",
  "key45": "2aKwNchLGzymHpRirnFvRTCcmgBzSfmohXqvB8y8X9iYXCyKK7EudpcQV58Ye5F6Xem7ce1VEN5zAHd42WRXoenh",
  "key46": "KvB6Sr66BuDZtGWdc2cbWRtVHndS8oFHnSWAbNtiKwfuCHgQgMnrwWkC84VnCgU7LDUJ9K92Ypd9jGkAzpvgL6D"
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
