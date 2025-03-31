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
    "QSS2WWmharDgENTCXabJ1xLKQhYYLuXr6P2gr4t7pzhy74Jxncg5kdkga2nxXXCzrbNFJVgTCxUsZzpTEJgMXos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62G9YsT1SUwQgLXqgb5ayAzf2BfNSxG2rFCcuHoWCQDaGMHTcoN29NuEK3jgY7KRmMxNSxmdjLiLncJ7SUG29GJp",
  "key1": "s5nxKCK2hEhXHg5ynoGDw2gFS9kUj6WXWcyRMAeAdMSRwGggGvdwA8bSfkabeKQRqFgucadxkUUH71SokwsyfLy",
  "key2": "37GMbFNLbBign4hhQRB5uNFG4ptrjb4mcTJ6CMDdLCAXCKeVyw11JFhbfPcp1ZRCdyUVtgwSSa2oY185Z9pnn4Jw",
  "key3": "39B9NZddmcKCpspwLJtFPCVbN5iuozibPFgdRvwMHCWbWrU3Fa2My5X58dySn95j7xWumF2L9BSSfqFjfv8UK348",
  "key4": "gnZWbgkV9cAQjF4ZXMC7aam5JDJr2M3H4qVxKCwbBD5k6hrP3ZzxAuYbbVZ6apMauDjfdgEwSDdUiwhnxVpXokB",
  "key5": "34ksrsQUVz3JYrS84CUYf4hEXw8AsEjERCSiLP8SvrDhoy9L9MerdhfvTPXLXTFfPYtLWhYqKDPmpJh51GE3xFTu",
  "key6": "3C2W4ByzQFm7RcJU33zB3TJ3tUDerhUHpxoUn9QPdSxB13nzpTcHAUGivp2TiLewqYPUfvrwDHubSA7jWFvGX7D1",
  "key7": "5BeqXC1pfeYsAcGbxLYvGyb1gRWCvgFQywLh6FrqzowG2ejHDCTjoBQKMXFGhzkvJriyHM9jkqHhuhKm9PQEQAox",
  "key8": "5aw5fuNJoHjW2PZowphgoVnftKKCBfD7Hd6xXnPU93MuqiHMyrfhCc3XnsZgJ6gBnij5FdvSDDKV2j6ZUrCYPid4",
  "key9": "2PrffykjcUvdv6FLz7Qik6kxpPyGffbsTsSQPgvC4ffziNoG6jT6RNA3cdiXAZVmij1DUsD7D5diURUZwzixzANK",
  "key10": "L8193ABRC8hQsQBddrKRwD6EVJ2VQxEANquYgjdUhtSh2vWLKwEP2MdpoWTBSwJBXmdyCN3kpt22YSbmZWUN1CT",
  "key11": "4PDaBK331F888KzPQjLbWGJmCgEq6wdeSNh6w3HgKQLe8fSBYqLCbog68xYb8NfobrkEh16DsVgT3h9Tdyqh5vJ2",
  "key12": "4xvSWjbqCbAnzr3pesgQYtDEco39qHuqcwk1cvvQHjXTWgTFG7Ab1bwt2i8GBrNvKdEeUKFWZFimnJiiETdkYYxz",
  "key13": "2DvHmVevNJ26qaGSQrByBnjhaxSCSkr1LbnskjtYqDMtAEtwapmx2rwobEMdJSaLtAMW4eHSyJwJiWV3FpNtQHEL",
  "key14": "4eVHc2CEmZY3wXq7hXAscvD5G6d2zHpPAtC8mqFFqkNWSZidujfCu4oKKAkaEWjzfTukKVFhUv29DKd4YXTxea2m",
  "key15": "H55bm3v3Ph2og9gzTQTXNwjBac8NKv5hZ4kF4GuEv3FzRtKtoZunTTZE1GWu5saLr49GeC8Br8zi6SoSFn2ipBN",
  "key16": "4a8SZ5L7tQZqAmeqzFjQYunzMFobDwPXrA989bcg2nyB2MtF2sGgnziujU2BwppgTeDbXFWEkmx9ibmuF1bz7rBJ",
  "key17": "5rnbfpswLg1jm84fdSzFXpeycomsC6ADvWM7XyR5H43eEWd8Kejy2GwAygo8QuXSWox7NdEYUqQrnDCYyzLZ7aa9",
  "key18": "5BjC9N9jiykaz4DGfPVSb5mxpRNmN1rCE3ciSxn6v21meBYgZ6xmQLMZ8kq8YhSLPCSaDwv3QzhxHGzWB3zxL9sV",
  "key19": "2J89AEdVgq2Zv39o567HoN1veq88Uk771RwjpDF19vDKBBXCxfu3whzVt9zbh6FcFUyzDoGQEihLD5Frhfywhs5N",
  "key20": "2KqCPyBBLaKGd45TPvb3fpzreedeeazw9THaDprjkkrSAx19jpTFdTWSsc75GB3Wkrk8pYc9HUhxcEPbWUs16BAd",
  "key21": "21RaakwVLDquDrrLMABmHQqAaWnnsM6kHMsN8zjFJByE1mEeGg6PSSBRzouJMYb2mGFf2Pt24Fcrbj9cMzwGBr5G",
  "key22": "2noqgqY2XC5b7ogsdDnt5RBCrL927LPbUTJfiEMvXR37HC3RhjkXkyAS83VcRegsp9DndF25WxacGTKyipYa5sFP",
  "key23": "37gnzZ5eVMXpK9Gjaho1VvEtNAwk8nei3yDNTXNMGRjoVr1QQq93MvrawTLhkdNYPRn3p7486RUmG8Hkeq1UPNqL",
  "key24": "2ZBJ8VtNhnkX61JgG6AQGsV3Leqevm52ou5keaj5JyKDbeJcHWJ1wmkkhsyypPmrpWh5f6tzP7hiTCdykq9pYGL",
  "key25": "3MyQsBpz33JmrM9q1nx38GnycK8MQHoZawvB3Y3kHASXPRJjbfU2mwPZRLcUnChnsXETifUt4K4sxQaew4SNVNW5",
  "key26": "3hP7kBg1Fea4up5KPjS3xiPsQFqFqJLaMvGf3M5MKkWAkBRh8aM7wdzTwfSXBKizGBVbCvehvTkvMpe2vNdMeNJo",
  "key27": "rYWHsMtVqAbxkpKWCapMnJHmWREsnc9TzjSpsowwFuzZ2DMHurj5KTCUSoMgcaVqmbgdrSihXzJsSvtwnx8uzY8",
  "key28": "66FvhjiqHavC3xzoMrLJgX72DRCgaYuJ2PYmDG1ArAkWF94Bv7pQLMwECid6RW31iGpjwkf7uMC5ZCvJLMZPeg1V",
  "key29": "Z1rbERCEpoCjrjm5neb1q3eBfsZUCLo6LpVHy49hUBZpJX32EVwbhgMvbECHdwEusS5gauZiWqht8izycnU7avA",
  "key30": "DKjJLbi7gPKzkVAPTMG7avTHYhPvgW7rykr7BsAyTGvAS2wtYtFDtNfFb7HcBWT7m9xrH8Z3kmgssQmmqNJ671u",
  "key31": "36eiDvSEb9j9zFsnz6vQpgUkFJd7Ae2ZPaS1RUmxzUohGGmtYPyVKojsSh7ctEqpsxvsLYJXACwiF3HybNDkqsrR",
  "key32": "61wCiQ1USZvv9Dz9zCMz9WzNnYKa8ryaz5wq5cLM14uGAyrX7AVFnLFLnpHRxyHxBH9QD3uXrVMLQJ2G2kJDjdwa",
  "key33": "1u2YXdb8uTSsZSQdtjazgRJbZyRWgCRNC5TUYDyZqj6Erevu48mJG7xZL78V3bs88NYU8bx7dcu7CFXbEkvdaAW",
  "key34": "2wGEopA2GQLAhFtRxW8eNLu8Du41xMpZ5QFoqcszji8jY6hdnqpshj1DQeNxHwNZpjsftB5i7BntQ6588VVaYWiX",
  "key35": "3EG3LMou3CpwXUvDsP7cqNJVrYyLPuFpaGHMAuV8JccZmshS6MUNwtct4UgSGStkGL617efTc8KzQYyrqLqa1enQ",
  "key36": "4rv4gh8WWXekshHN6xhaZw3K99QrJkdJ1Mxp6zgwWACdxycjLUVMTJS4PpR1bsF9gVLt5wno8GD1vbWy7rGYyRpm"
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
