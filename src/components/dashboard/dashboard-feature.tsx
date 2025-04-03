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
    "4qgwk8sBJmTLmkcLT8xB4oRoqgKowgGQB1LzsFs8qV3MfJG3YJtwew9XVQpKY6C8RUerDj4oe7sSPr8RqyBnMxX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b4dPM7zbqMwXTvVPpvy9xNXkM3FLJgqSNML9pqgLEYgAV5CHBzXmcJPa5LnxbQR8ocei5Ek5uVY2M5SdNs8tvUS",
  "key1": "uCHfWpsiCpiNsh4tN7sLBzyU5j5H7LtWtvMKndVra5s3XJQ2924FhztruFCnLyqQQStS7nzv43ydx3qvTsP72Q3",
  "key2": "41YN5Ba5sVnkJAwy4YhYv89GY18D3y2maXCk7UWfc7L37NM2suMMSKrUQzPaExb17dQZvfVRBcoUV7JeHpC7BLYy",
  "key3": "5aWMrG5YQYNB5Kzyurz1PL8BDPxqV8pf2kMusriVfrCKdx9x7PrvoN7ZfXRGbXxPHCw1YNJK68Ph6WD2JcJU78g2",
  "key4": "587dWdgBfNF9A6yecoZJYdkXoQxUE2spjnx3xirajqcD64y1Zn4LAXrpfaRGAzsGXSKUWtnTfjaqsRNrkEryUQhD",
  "key5": "2rZ3kLD1gCozXGD6NaCXgJfu39UUu8ZgCd2c9PZXskkUWc2bW1HNDPMugj4Uq5iZHK9RE1eY3eGDbd122Fbyh18r",
  "key6": "28UG6t3xKHzMD4J3aPYj7A8ZNew6SRe5tU7QDi35QzwwzZFmuki7Vfj55Dns3gNUauyvZr4MxTR48cMSFgWkqieL",
  "key7": "2WgDtRQ3nzPWt858pciW2CQ3QxVp8anQJS1iXYnzrVgwxdsng3wFDGeE4b1Sbstp2WjToU7G5M8HFA6e9PAms6so",
  "key8": "4MaRhwZntB3tp2v7BMiWMWAUzGKE4zSJ3uXbdFuZtRJAvMvFi6PJnJJsU9vWv8Q7uhXtPimoz8ZfzS5NLFVMySgW",
  "key9": "4JLiS2Lk9eFTbZE4g5rzEJG76QHbPxC9qiwQFKvm8zfvdw7oeJSDMGzRJjjEMGaPimrt3Fu49mngwrxMDj3oECty",
  "key10": "4UWRbLkuM3sxa6L4Kna4txWVJYmXFiz4tAyvgNqLVowwmuESwhD56fDwDdikXCsK1vWiTe5GERbKt1r37NyhqRFN",
  "key11": "33CAUijn91bDuQ51jTzaMnoqdSgA8oaH4ZyitjrpE3wuUt4uLjFTedNJfK5XTZwnYLGWpBHucBcehoCjBACFSKTN",
  "key12": "YavDjNoeebry3tdRBvpEKk7U2n4VwjqtYxCw3j4QER4WQrBH9VEijcRvkqVdcuyevpNa6WY8GHf8ohC2uJFQ7Mz",
  "key13": "mgwBXmiQQ8S5zvLKTkFWxBnYium2L2Up86eLXcGvM7SGKLDGfp9h5mdprCnegqwksD3WNkK2y7a37xBkZ3iBH75",
  "key14": "zD2sWhetsJXaKDU1QNeX5Qp3GcMaVmkcFaQBjTizVNgPjw5N7kjRcKsVRFBvDDQM86is68cYYrRqkXiTgHAj1aQ",
  "key15": "4LHeD1X3xNxHfYpbRZLZncjs7S8LCL14j9ztyb612azCec8BFneWXbgh6MC8NpAFRxT4qoppiZHAKoYrvsmLAExt",
  "key16": "3gMzbY92GV6irry6K71kZc6wBNK2qdWVur5DACSkjeZobdN9GaaNhteKeig4FQ9m6syYKtm9CoPe9NgdmFq9CUCr",
  "key17": "5YtseTPmL4k7uxKE9oz7pJ4rWYLKdKrYtM8giaSE4qg6LEE9pBjCSY1YsDiGQcc2BkkDSnEKTgW8LGvgFHHX3YoP",
  "key18": "2e7inXxp7NRh9bX38rsKGXrRSpACn4xW5pa2pCkZX2vx2zoUpyK7XFpcBBQndL1mYuiU5BU9RrphBtiff4gSWx3Z",
  "key19": "WrnzRCEPMzEM2LgPfnU8QscMT2uy9n7wqyhMf5AyiL7CF6UW9vWqNMD3Xr9HnesjNkEAHcpRbd1p6Nb446RHEob",
  "key20": "5kjRpnvBLVD3mfXB8BZaxwWez8kUgsc3JeKL3YuHBvnWLqXoN2cFA8cTPF4eG6NU73PCFaKSe2XY11Db5hBXQmpR",
  "key21": "3ELQfTQcBusY9nBwvuL2gLFKtbosAmwd5krPGuNos5f1vyZLJVKSTckLpbVqPpZ7q3eLUETCvXb2C4issNw8Tkjo",
  "key22": "5VNTa5sQhtxfmjyGU3avZa3pLQ8Rb7NayvprjmkRSnXVd5vYsusYA3NYmQ4nfEaZARMFEAb5N7vnzXF5bvtvE6MZ",
  "key23": "5JLNH39CB4RVws85Avj8zBoHidqosXatxyhrzhaLFnVsHPbyLqFfnUztjo5F3ChCbJiWjV2BG68p8xBhihhAVBTo",
  "key24": "5jD5sf91mY5mzkopUjDHrTZ2cnk9LzxJKE2XqY9YvqfVsptegibHXwBYWbeDyniJR6Xdh7bEedGiFVqUi6GFuDDQ",
  "key25": "2NN52aQ9rJ1AX3aHJNx4FGScHqF71jHP1AAhxghvCeNCci58NZBvXGrE4H5ct9jfK22kUp6RDyPSMA3uvnhLteeJ",
  "key26": "57M1HpJ3XVibvhpqqxpaZaQgB6LeVpR3gqh1GtnNty4bLunMYy3tbcKBxtigisXMcUQ4zYrktf6kUWuVM7iYqh4V",
  "key27": "5SCsDaGm4UJv2LNgqYQCWfaZU19PcLkHsw1NseAY89WZt6jWywqEkb2J3VR8uKBwTRjRRachuDxVHZGEVyaKYRSH",
  "key28": "K8Fre4it7W8Cyft1wXHYdQ6zfUUPuMBhPaGS2Jm812rY4Y3SJD7F3Jr4Vu8qpH9Ziq1ieQ4JuptoLM2mtYY2gmj",
  "key29": "5TYY31iA7mDz4YrLPWiaqgQePW83nLqW2J4x4qiDGeFvdrwQwakPm1eJYNjE4jJD9yVPNXe191SUb9mGEQHqs6yb",
  "key30": "HSg8sNjsju8z1nvVQLoiSJRK75aBSLP3uFinzYZ98BLvnfvCayjnAUXM1pQAdFPZqNkZb5zACBw6T8TEDtmRm53",
  "key31": "5p7WHgfbz7XK8PyDXiVrkKpfQJViYT3u5hoW83q6RHEFRCVQGHe3V4GBi6zCwjaYwH37iRmuZJwPGDVkkpSY9vZn",
  "key32": "4XEjHM8vdwsaDdbAmSu5aGEL8LzJ1E2YAAZspnn4zYSJvDzEWLHATB5cgL29HHGn1CYYDrvNFJPFj8WFoUyeqc5S",
  "key33": "2XtijE1WBTDeD9UVyEJEZCqxF223UNzMNWMTWgNupLXrmsnsfYZyS6HkgeXc5cSV7Lpcb18yKasoSAyKHSf3rr4m",
  "key34": "3MLXT5HktJqwfTprCeC1nRWZpPNHjs4zeARE3dxhWPfLAHSwWjjyArkRxmAHrZfC5qP9PebQf5TMvSp5gpUyNxYv",
  "key35": "32B75hqURqyXF3c5GpW4gR2VG6hCShaQRFkWHnrAEDauxNzMCpgD6N6Kw6HPfY73URrYXTZjka4NroPi7sjhr8md",
  "key36": "5NPjZY6BKa5TyRhrLzPkCGWiTtUaN85WQZZUhSjaQpWuMWck3pdDzwrXMeUVDffpNxvJ3eJVSmk9ssxGZUVt3MG1",
  "key37": "5XQC7jbQdHa2iNzjjX9wjFZvgmyRh86j1UmoyktftiRcj9FkE94vuSEG8ymP4xfiqimtm2MCubsAC2zraKkGHB1u",
  "key38": "3GbytvrWL22PsvWu6zwdpfPDJzR6dta5TYyRga8prm5retL8gv5kbxf7roftT4SCV7mvWibrrx7Wi4EkNvxkCoMx",
  "key39": "2MoavuZoVzc77LYKyK49G4iyxpgYYMcW9eCGzFDFNeoihcZNLtadThiLdQQxT8ePdfwX4a3UeD36cCz7mHwbADsG",
  "key40": "3W4NZbCDc6pBBiDjkX7QehXw4EFhugLA1Xpt22itVgYAJXjBbJse9MY7pnUEEb3GDUf82Y3hrAydGcUP4KEQv4Ti"
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
