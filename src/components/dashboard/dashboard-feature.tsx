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
    "3htKrZWc9VTrGKEE8uqjUeXVsZyoGNNu1E3RiVbUX5DhXss8odSf29Be8wnq2FhtAWHx4ShbjcPPSP9jRFE9egb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vxaH96y534qG71AKGaLnwDqJfSaV5L1PyMqrsmiSTW1fotMA2gHHqg26UzfsSziGswmm2G7dw89hxJPaM9CQjaT",
  "key1": "3s5AFDeKZUKwHYmCsv7Nvh8gC5mXRj4uhgZgppPSuvfBXR6za87xNR9MJP1EXCaV94vdKawa1d8CTpHQG4QZLqa4",
  "key2": "m3ysq57HLQQjw7jPJ8eGzm53j3EPbWZ9S9BkT8YwzcCCBM9Pp9wgxnncbbd43Jp6sPf8RyXTgw6jdfLWizXSF2R",
  "key3": "3PXACxkcTPXLiMk9SCtXeQrvS5y1ks1n2x2cMbdCJpKHXKeapveVdEvQUr8FgMZuTqV3mnzZY4xY8AfceoHE2We3",
  "key4": "2RHBsuB1UUXxKFi2JuSMmHAxLNEEkAuXNEhiSsNqqtoj1Q5CMRF6PAAWesbjSATaTh5bXivnsSaANxDZSL1KeSyV",
  "key5": "zStq9Et6Rxq1FTu9YBPbrMRAKE2ENNXbbDNyQz6sbVsNRVS29Wjt4gvVDEsGFqQCSyPSN4edrdt73nVoi78Hk4c",
  "key6": "4nTfc6prsTRhu267RWJq8wRmnhTC1ZEsUcubctVAxkRSkEJF5UpKWwxBXNamPjpA2a9BextAZXfr5RYzDBmfn5vV",
  "key7": "5ednrAgvczc82NUH6gx7jyRSJg8yFKdiEdULayb6mkgeMFZmAdJSkTVgn11ZtRvSB2Vp4fLPxwagZyG4pY7xDHaR",
  "key8": "3Vy5Fk4M8mHwpaCxSXtJHpjoeiy4EK5cDC7JnPUyw8E5gjNfNEVC1kPzVnCDpqGTrd5kViAcbFEvQy9268c7cNq4",
  "key9": "3S9aivfGGXMy8LN3zrRt11Rd45v9AZ5nDGbfa86Epsn9emZXn1o6hHbsUnPbmAwQ5PP4yKoxoWZKSm4MzaKmj3sf",
  "key10": "5rYJhWybF2fJgduYvuq6s9WkhfgNy1mjsDvzXi153zasK4UtCfwt5eSb69xcJ5onnTFEp87i8vEJnw5psu921Cx4",
  "key11": "32E6SHo8nuCVFVvaMd6gBrwTAdpyTNuxTMnWpag9z4dcMuvavPGwgu3JyDarTDHrb793PjPTQMhxwshntRKzexbe",
  "key12": "25cGEeTSCPfDoNr3ocFhzjTW5RvdHr4MQdDs1g3ituHjxYg94dxrECPWjiq96gmLAn1hGBYVGy6at92usfuy3kbH",
  "key13": "275nQ4WMrTUGHA2qapXBxcicgoUfe8LqzhZewthqWnXURSkvFryfn4Q85pdD4EorbjMBMnNdcDGU99BgrE8uwCiH",
  "key14": "jRVJnA4jbRvnLPvZ5qL5aj1LBJstUeDSiCyVtMYrrm9KaPUQx4ndQJjSnrwtfyiEbjfmZHS5rHXG1dSYdvnR2Ah",
  "key15": "3ZyGPjq85v1QWR8zHpDGvY4JJPAGcdQwFnKoCf1bNYgaDNKqKkKJAihSP9p522scfxNtGYuooi9mJMyBJRkTVLCc",
  "key16": "9MrnBvLroKRnP1Gb4bUBvhBUuqUJNMTjaHLf8JodzDszWxAMogwTDETHPp1mwK1PbmG85D7xcamZybA8qJCcdod",
  "key17": "5nQFdvhVtozJyzjcxChkzyPiAEFrP14sKRHqqJkKe2pkxZqD2sg3QxW18Q2yL1GPKGYnN64uEMHYVGC7DzYQM3ZZ",
  "key18": "641Qu3WjfZaeqgzNpmvzVzyBRWvQ4yjPzE3dgfhcgv64mGx5AniDL2j7kW78xrMn2mhfHW5GmJvvRQMsV3ZgpAhV",
  "key19": "4CPd2S2xuhGgj9ksBx7mFR6h6mq5MHTxmkn6tPLNjb9wwpkFCzocnHm7L4Y9TUCZvLSoKtjei7t3pZZMk2va4Qp1",
  "key20": "4qbexTeJmY7cBpgPaZ42YkhZhV2UN583JEJxC4kr4Y5F7SkwX57svyHPdcot5EhS8tDWLXtBiDGK2MkP8KYPEWbs",
  "key21": "NPUQHcGHeG51Ngb6StFZqvJ4VqJYuXdG93qjKhnhwf65WBPmw9fQGrc3KB7AXdDEDywKGHzfEhSwUzQCyGnbELD",
  "key22": "3q6bYUNwFWwRFPU7U6E2TK7WNyoUTr4JGWRyeGvLaxvtMy4n3qZrZh6pquGRYkhJsDg6UyJkEr9sYdK5tJR62UvJ",
  "key23": "2YL5AoMNQTSvB5DnVtMYHZkGwMhYQqJsy1AkiK9NyeDNhDSUK2C1bdRiV7vtuo7XJcWSf8DURJa8vQyqk8as1oHN",
  "key24": "5EeQBVBm3mjqmojwm6sRP9vkE3UQAH9rzR5vYVh2P7JxHYk9MDDRoUFgxpsWBK127zy33d28vaEE522VspWxerPf",
  "key25": "i3A1XxiNWMDjQ4kvHpMYfivcjNnTMffiRGLuHSbQWJCvuTxAMJycc47MTZ7Ja9VGVmZsqrZXmfJ336ZypfLcdRA",
  "key26": "zrbEHJWkxwgH9nu94vBsBqYFeHqCgmUSo81fdxLemdYxRXdMsK5sNqnWx4GoSEzTeweTKbREzWEx4XsJXzWtvCx",
  "key27": "XMd9WzRPR8kaAAEH8a7D7eXZZWeFWU6uESrJrr7Vedi5rvuk7cU2gwcfxDLLbYmQqgVCTmDp9raWyygzQbhQou1",
  "key28": "3ANF2DfpjARxYYVi2WJqk9AsKZzhVDu3ovaig1B1GvqReVJKsDhMADnP2CUu4NBNhPovJ4CjmfWJpBSb3gj5f5E7",
  "key29": "4CLTkwBMj92AK1G4Z924ZkqszQohHq56owNVn2n6Ji82NKeq7yajjmkXgBNa3MbqKupUJxRXF4ekDLXsk5wxz7sy",
  "key30": "5ZB9FEKm4aveweEZ5ExYsX6aUrHAmzMEJFpezTLUcrLmLdNQMaGSb3VS36Kr8ucVfCzKqVmWfrfbLfV3dbcc4Xyd",
  "key31": "3nXMoRyVqLaK2oPBeeLAdo3bvt3Z9yWHZ7JjiBLHh3VL76MKWB2oqTt1L8gqcvVam3Uskq11pkbR8nsVod4qoLtL",
  "key32": "RRSxFem3xe7yEaQLTD9B8QuQUTZv8ZW5e3CupQeYc8EhTBZCWYbhbceyeDSrDepESgea4rfvs7BoBJ8dMv9M1Sb",
  "key33": "2LkAJgqRYuvZmzLdwyp3g6gqfZ1UVGxSPBsaJFFtvFgTxxNWAp1yVALTLgRnrjNvmyS7t1oUgyVgAKmkdTGp9noe",
  "key34": "2tUdLwWh3f7ZfiRPzXGDR7nCbUfGJBvizckw7jnhxEe3UJUQuz2ErWdzMjdDZHvitTBaKBywHDmQnSQJpLz8N6F",
  "key35": "4vSB56hH3tpqfRJ5g72QaiwAKkh6B3dtPqMTWqs8UKekjLPb7XyWhuqvrAwELy2wPTA1sWZE6XsE2jtkGn4LfNF6",
  "key36": "39kabAv9yiUJN93NriMKUQHYCcPD6EdGDHUxkBi4jKVrpBcjL5HKTE9gyuShSJqjBwkivHzWHjy474pdRyjGxdGy",
  "key37": "2fKJNyWt9k7bij8BzjuyXeSXwoffGVhJosELne5AH8agd9xonACqqmJ7PBMrca5XCcRBLmo6eu9nXZHpPA8Xqkcf",
  "key38": "2MNmb3v7uJGPqGh2WdDQnjxMcvrjyoHQF9fheoQioBnWBxQCSKi94yFSGySS4ZRRCJ5PCfpDRR2rjNUYomuJPsy5",
  "key39": "JPKDQnC4B7unG3E92MtDrV3Z7aUypQqBdaJ2hQUajAbE2hqWBZEoESKgyFzbNTy8MqmtsVLRWZFKdEHQM9uSA7e",
  "key40": "4fDeB7MXcL96qFvvXehTYYKvcx2qaFUZcbDbA3eRNtxYLtEeiKkRorT7Q4QTykQg1EXfyzpcDjzMBaL38pzjceRF",
  "key41": "mGyTohL9NuEGgMv8pbASunkxER7fYHNoeU985XfcQtob3DWnYmiPyACDCJ23vXo5Ha65zruBEN4Zpk3LWsZB2kY",
  "key42": "63qjH4r5vWuQDmX4WjQcGWn8UiLkkyEWy5XSyZg3kGKeekJ44HXcVZNy6PTEfbzRuzbVw2hqGZZBRDo3rU4YVXW",
  "key43": "7MZW5FeW4xnHsvekn2aJ8Fnb3DWxRY9UbKGwbDkDtcPfc4dsfHSi81PEQYj4trhXJ1EQrnuGZYD5R2BusJsfUxk",
  "key44": "PiBHfQeQ46aENXE3BnNudBkjNQHDrsj7CsdKaQW2z9fA9YFd5f1oeYCPTSJojK35dXoWQycGU7B7Raes5PzG3q1",
  "key45": "3rhgoptfKyUNxmnWhBr3Ak18fnJnsW4h6Rt6BBFsP1PQCM5zCBButVG3zvR193hUBUouXHsgi8eScjxoona5oRVs",
  "key46": "4gntWDZJnZQL66sMJj3gtzV45PH1stQKgtedc4zRL5A3d19hmBJTPPGB8wmi7vDyejngsD5hP6ALrMaSJUJxrxn8",
  "key47": "55S5HxqGTGM7TXxABBD7Dir1XinvzGs4oxoxRLA9BGMzUCaTiHn8GT87YWhsAXZyoWTKxAGXt3uV8HU9ch4tCF3A"
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
