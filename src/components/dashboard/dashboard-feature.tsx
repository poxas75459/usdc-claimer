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
    "5wvrwRXztLD6Kx675pdYgEHgDNyU6iQ8QrJNowfKdeEsk714Kta2jdig8A8JYicedjGciCBcZbzfSc28ksFbSY9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jomTmfHzeHCcbwF4cZ5eWYoU6i17rDrCU9SwHMXCGRRAW4Xp5J9oBqaTZ5XoHMFNMyq2mzvPWgm8nuBwQF5KCNG",
  "key1": "2dH5xRgsgKVgbMuKJJTvreD4EUNNDgntvUG587kdx31bQtEJarmQ8sGSYNmESp86HCEFG1tRvS9SP6ty3n53orsH",
  "key2": "SV27nFkLgFNXfwezWv2x1Qge6Ro9dGUgeBXZtEwS2haJdwaa6DXPQBpYDsJbK6e3PZtqFEka4wFB6ZzjASaHyoc",
  "key3": "V62rnXDDSjUANyfjHGq36ZeRPxP86TuiQbmsEX3HLCDxJiYf3AfL6cD4tu6JGBnoRfsp9Z24MohRMADQf3A9GCK",
  "key4": "3cepeGV7dDnPaMPFY7Aa3UKrtjWymdLaRYRzzUC74MUZqdbL28SbbkhTF66MJxoJewUGUeJiXH6xMxBLekyHCJm9",
  "key5": "9gh3R7ujHg3TDJ4GzT8qV8oKqm1A3eTxgXjtVfbVV1kQKPWf4fH87yafCMQunjs4EDv7EookytfpwdrqhiRBgya",
  "key6": "3C9qGfqjWP9mUWwFgHcsGgSnkwv1ti5isa42pozeRMA5roF3V4E3GCNfDkKQjAMwhJ4ZmasHZBzobGmEJQx39CqV",
  "key7": "4V5mz3GiaCFnUacTU8K8UPE5htg9QzRZRiB51JuR5vhxHUcR43pZTjMNbQ4WCcFynbczMd4jocgrGcmZrdadf8gQ",
  "key8": "5RDkjdpCPUTJGYCWWdXuPdpsZ9N7dnzsUriy9PmH9J9tKf16qMYnBqGW3BhCbVoqyu6wPLUrmVa6LAE3EJWR9V2Z",
  "key9": "4g5Az3G31iNqBvzN4QHskBk3jHiNNmigqkU8agm1KdbCQLfp9Ctw8fG6NSyPD8BHXnvwAWqb4RFpH6prhp9gQVtZ",
  "key10": "rsHNaknPZXtzsJAEUMrgoSvF3PMt54SZRPqoJNzZW8S3qmdPeESVJm1LFbNP7gZz5kEJubh7UHWbS9dmqSwB6qG",
  "key11": "4Ck2Tso8QzqKdYFiFWdbof7LmDFhrB6XxgmionYKG6t5S4MLFvhKnwABcADyTtCtqUbNRV8vpj6fYuYzJMBZBvAc",
  "key12": "5jjTMPBAX1XvpbYZdpYiTyiVLbdVEmmtukvpjNMLLcdN4ngfWRxGhhCwDGLyD1gnNmHUhFbGPuffXa7yTA8x85Dg",
  "key13": "4Dxfod4iRbQJ9cBSSbUMwoNRMAHCLUi8dNd4AvUR9occNs9RsWKWVBmpFPt4hpJLJUKUVU44yqkjmjudzZbTUUDf",
  "key14": "2YV5Pkbh2Lt1yAHiFPvNYY17zYG9KatxQNDjcz4LMj5zsKVk78ps3xQ1W1n7WQSHn1YRrCk8cZLdRo6NNRY7cnfy",
  "key15": "3NvezghXQ2YAUFvDoK2my2GGhWPUHrHyrdRXXKPTaLAvYqGG8oYM69XytaHqgpsPGfKsMhTETy8zdPphAUBKYAaB",
  "key16": "C2RNpCeE38c8nqhfxCpL8AHo9idjJuVQKVn4gAEjT2FgLqbXMStsE5uqQMm8SZc5YqxxKfyJEVWMmpMf6ExHWnm",
  "key17": "BiXNzsFey1qmkS2xtaX3wVMDG5tNaaTsTmyST421kvsCnn3cxzfws4w7mtbTgn2rsd6W991nv5Xezt4T8q3qcyi",
  "key18": "2Dqm58ewzEWeo3wvyzQcY29i5JxdjVCNEdAsXqBySQWv1gmd9wxKgHczsmPBJf4APc4jJEpQG7p5wV4YwrBt3ReT",
  "key19": "2kfLgKrUtaXiGGyu1pxTwb4KP8EnisfhMwhU2oqjjoHiNYNXogVP8hteo7aaca4cL2JAZhgSKrgzL9jVuGUZmAeg",
  "key20": "kNxN7kJ7FuxzwqyyA8ixqk7wshceW38T2A4X5m4FjyaoRcfUcWTjSm64jSnXK93bS1j38sCnBFYPNfYAVCW8qje",
  "key21": "4VEJgystRAJyTu8kbUg1TZxJsc5BeJ6xy2AjdJskNGF5z5hv7ajJYHUPmVWdPAB8kVVyQ9SD2y5SqggHTngnubVu",
  "key22": "4cSUaoUaTeNy8onRExKgMsGxhAt8STHMffgBLdbFo6AhjqXje2rt8DScBaVuKTjgLA3nRHg2Ls9PNc4L2z47s58K",
  "key23": "4fRJYytwrm66aJR13tXRGBjXca49KCKuz6sMPSxJHVUKyt8p5bvPuWxPFoo1BLLd7kFoFaYCrgjGtC3o7GfJ8Cwf",
  "key24": "4Dh87Shc4TSmmsku5zGzXmHndqkXiU3VHQav9cpB5qAbKhYL3iHtP6SCzZyGmdaXbzvZHyVokVCNJaTA3nyKzdkn",
  "key25": "32AUGuAyL5bauyAS2Syir7unAR5pESaWTaVgEGo4gN82cSchAz94BfTMAXExJphzWqd1YGAy5YZdNDhNSxzKHafp",
  "key26": "48CTCJeLTNAib394kjuDa2efLjxiEjvc1nPHNDkBmnKfKwkapQeoa36vvecyCdokKYatwdipPtbAv1mej9ra3PbP",
  "key27": "2ADWW3XswPxWFufYgKy24FkkcmkiZJsNJQwf8RJ8QuMuCndDp6qmszTRC6DdKFTFrFq2SA1e2v4gbk31vKFRKMFN",
  "key28": "cYvbwCmTqVdgy6gDvWrkEuds9JFFtMtKP3uVPe5P95Vq679CcFXY16P6Ka956BHAm3Z8Si6SWRBvRdn1YSDbn1a",
  "key29": "2G6o7v7badQj4HLyeuR84gx56BbUQFHc1mPgCu7TfXvi2QRoBEP5UcJsLpQ5Spz6oR98d9fX7oHryxH6ifER3gAY",
  "key30": "4fRZkT9xL2zyvSmQZYbZ3BUwh6CMwQKNvt4pYbx6ABkLiTrLJo3Fq9qPhq58q1uqZndHACLNo5yibXE46Gng63Ds",
  "key31": "5Xcjo8CEBzpXUku4475x8HdXys7ycG742GETXwwpu6UmgSZLqzKeNLkUA7fhoTbmmV35fn9vSaJ1cEeDCH9idGxX",
  "key32": "33KVaLfCSgBo6z5YRcrJjqZmNFPesmXJCjA8pmjybU5TV7ASnvhUGb7cnr8m3xEUqbBusPVB6cucJZMjBD9VQtdD",
  "key33": "2VMqooZvURbMWDTrFPtyPZGdeWEdjytr8fieqcr24n8u9uCRxk674cXKvGHR2uoYhyyExYQ3KaMQCfmikHgKWUDC",
  "key34": "6621M92PdQzZhMsg9mBk8Gj6NbTiFkVam3FT4dK591Cs8d8AUWAZxSufV4Cz73iZuWtAK4CAg9joHqQFmPKJSXiR",
  "key35": "2j5bZvT2Z6RMZgWcqxdqdCpjXfzMWhGj3qcdFhQjGR597cCdyFAnnh6hb8pKF1RxSEpZVsUUqFKq7bixkXYuvkuN",
  "key36": "eu2q1fNYv8nNNkgmeW1o5nXbheMLSbVKPamNMTK4QBnknHpTZmwUm27C4kH2HxrdGcNrzPJ65QUtZzqaWP7RVSH",
  "key37": "4kMCWGXRZ8T5Qxe9yJfPPity4Zr6dBXBhDC2KDoWpNfFKdBHEPdmo4FkT2Khoz69ojj9jYRAUsvkojPZ2rN3wCr8",
  "key38": "4o1gVMcmxiL3fTXK3sppuC1u9zf11b4u8JFgwgi9kmHWzbuPXnHdeZdkJssdNbXnGKpVfDZcCMo6gtttEHuiUsAT",
  "key39": "4KaZsWvDjykB4pdzr5r9vM8fmsk2m62ogS2JXGqwLpipeYv52gkMdqG8PtTiz6RF3RqezBWXyDbNchonkuZX7T81",
  "key40": "vvdhsVWkGukTrJAgPE74RdXRxXnhrrtXaGhzTC3vTHdnnRcrpJ8tCctKLAjKp8QJJqEicFqjgeXoUYoPajmgL6e",
  "key41": "58FhAnYkrgMzHVjVbp6Qiz69dZLhS8vr8phs8jvSwDjMxnw96U9aWbZwNDke7x1XnKx4e2qvnddYvRhXcZv5vgNq",
  "key42": "4htC1or1v5NsDsByssDPqd7LyporBYuumCK3eXerZviTk1eCygrrjDQQx6cnEqygHVnTchpjvGfRCyjKtqdasKMR",
  "key43": "CDNHNBAnKHTFmJnhwLdVSx7Vit2fwXwqCQbxd8DbFN5chfrk6cfvxbbHhrnNNFGU6xue4NYAomsbwkr2nT7WBkV",
  "key44": "4XtKBNCmB3XKMfyGsR5uj1Qq7yqvXZsYSXiU6sFjXTJZ6LR6aTdrEqU88rQwbKktqConVuLuySi8Zg6aPumdkbtr",
  "key45": "4W4sLSyecRRqZZF6jcSivmvRi5rRsFokUCDnA3R3xZGLeNqDBR2WudHzjagoRYZ2jZfj12xMWuHTdba7D4zJqDm3",
  "key46": "3eKfpr1PSZXeKjNuJUi9rWtoZ28jwuhxhCK9WTjkVmcCqZdzQZ2pjXJhLZi74xgEvf6XxSvqwnSf6UpDAo9zpJNe",
  "key47": "55ivQJqAenAXnweesJYRcdG2SnGP3fBomwaUUmst1P5adggQ6tj7May3LCQzfNbpLBrYqufqc7bndBdj2fkEWLP4",
  "key48": "JFhjfYDWKRt6ztfCUrsmUH58E5tgH2UCmPgDVxdJMW19YmkRzLMZt9YcH5DX3rAmKVmUkVjuLYYHtDdfLcbw2p8"
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
