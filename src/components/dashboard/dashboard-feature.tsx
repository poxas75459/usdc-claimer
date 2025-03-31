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
    "98J9oTZphjF4DmYMZqQEuycJVyse54e8NJu8NkXsM35bsMEe8E6KBdurKR87MarDEZNBd1F8gcR1fa1xFxpcvKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3phHeCRqFuT1PQbPYfENNa9tF88yNb5gUYcFfTgZ5WUTZmY4tqkWVmK5ebc2KgPcw6U71tNMDW12Be31WB8DAQjg",
  "key1": "244Yio4nUbbhHXk5v8MZ9rDDyHCr3K9uSHWbxCNbXCBuxk2KZkNyYgdrp4SNs7XtcjqAhVPsNLBztsBYWYaf8fad",
  "key2": "QD6drydMuAQHd437p9fqMFZGeF7yLXekxxZzgUw6umxM7LttTBhiYpa7Dig436ZAXV7N9KNduZFJJKDC5ucex9P",
  "key3": "5o5P6rsq4JCUWF9DoU7pCzp7hQeyYvqULywrTFzCZVjMmRDVCMrauRakh1zqQEvzKvLnreosAEwTFsdRcTERmbaA",
  "key4": "3TsiW1ZGmKkSzcepMiHYSaLhui8v33ck1wjoUzT9UUm7FMmm6JxLavm8uDnpwRVy1j3KEH5KBaNEtbMGc4JYSrcA",
  "key5": "4KwTdATAQLmbycjevscKYFdx6nBYLvAMr8fibQ4Timq1F2c4hb4wtQA2NfyRYZjYayUu77A24yprJ8rGdqhLkWB7",
  "key6": "35HA7SHC7UbnvBtFmKCCkKrrBFR9jft8xJYy7cAbLgkPfx6U7FbsspSbvqxwCe6SE1meiq7mHdsNiVUvR8L9RwgH",
  "key7": "2aTC6UBfGKT45GSYscxbL5Lvn5RviRdabjLPDTBGx4Sy5cCDFum14Sd7e2swCseZPvTncXko1nyFDEG6vfTgbPdn",
  "key8": "KhW49XVyieSjJvdu5shCUjT22rfng9ty7kpH7ggR7JyPTwN2ZXk9gq5E6qayHmPV12ujEDYQpCLDXpyA5PAMYgt",
  "key9": "55YcEoD8cKuY17Wg9MUzKUUZnoBqFnzE3WMM9eRzMZrLFJc4253Vz4S7BzbQaFKipGTsqh51EXbdExRrkdpLhyrG",
  "key10": "2KG5Jk1QG7rcj8irMS2ssGwhwgVsCLXSayRnPNTw1uuSoZgR4ocX7mwZzXgN5odPtv6wpAEq4eZABrEK4CeqBUBN",
  "key11": "4gocFfoPVGaprvcnMtiVUMumJYh4mDr5UCEtx4hxK6eejgmSYDzPkaU2hqQCETHx4U8tSskPyRDNMLGbXwaAw7iu",
  "key12": "5nGQ7VBD8BmzBG7B35praD7L69zdFSMr4y66SEhC7amgW54J8yzKKbETn2fnsFoGJGzPFUrngeUeVrRRidff7hSy",
  "key13": "G7c5jLw86vZC7kYRwwwVfqFt79mqzHATWKqN1B3FuuiRU4GfdrjCSGAZLja68ZaVWABud6VGBzUt466uFNNryAE",
  "key14": "37Lh94HtD6noMpjUrQjYoNwyy8TjvRtJkCTswRcXCnG3gibcWaN98UXC7EE1orp67qkvUyPnuDqinFp3Uz8UpwB7",
  "key15": "VJeH4b9vftkrtxWyMmkGi3eWnncjmn1VoawMTXazQ3rCuZ7JvS8FBdjJN3LLQMX3WUWJPuSBe78LUbYG6AzksJq",
  "key16": "22Dj4zFt1MGtrSjozvqgFbXtF8PccNJAMt7CjsfCx14wL9gBed4RDKPQxBGhn9cpMB16JmGVH6utTPndhFEuCPCw",
  "key17": "2BEWjj2Ppfogo5FcexbwamdPEk8H7uer7BPcV9bDbwwwxRcsCULQyqXyE3myvnUmYWUA6YKKBmmf33mjVP1iWPrr",
  "key18": "3WVC1X4BEwnnn1ELvGyRumdrS4LBVyhnaSz7etjYfhCwHFg6gbcbEuGcCTZsGZuVxL4JRfSvpxarRhS72myfrgx7",
  "key19": "4Dd6mmwPjZ7fK8Wc6gbXYHxagyNjfUtqQnmiFwXeih6u4pYNzmsUCRZVNTkgN1aUVVNs8wSiEJ2pYyEuZ5uyunQh",
  "key20": "n8M4fG756W2wokBvGpF3e9nt3NtsXjNQLpD1F7M4vJ6DVjLaVN7BixQeDeTR372hU7g6vWkPHicKL3yFACiit54",
  "key21": "5WmCsFNqxiXmQW3RAAq5ozG7wUxp6Fes5X9Px9RjhNLTBq2bk3e3b41yWTNAyQHFjYmzNyuhRejgVNP3wCn81H6R",
  "key22": "tNQQCpLmMe5hyAxNj2XQawSDyKP8ryet9mciE8wTsinbKcEi9SDHKNvSKHynAWcjvc4GMZcifVrFFkv8oCJt1Ss",
  "key23": "rBWzhpovUTGh2QB71qCX9atukWefSyivetC7nZ9h5ZLWec2MX9r2D4vsEUvtH1YKzaU8xnHFVH8fEEJ5qckiZYW",
  "key24": "4NCCWXC6gQ7uqW6vLDDUDV28zfGJDootCoVP3g8qvPuUfUwR16WN3ceBvKBtXyvBtuNsvBTpcAQgMP4AXDzTphWy",
  "key25": "3dguu88BdUgoZLF5dYq3Piy1EN5p5eYaMJcEnzfwxz8xHnBDpemRhdgd8o148UHN9Vzk7UEhMveEkPbD7h1bt27H",
  "key26": "441XdPkSJ8FfMmSpBtzhxh2TJq31fjJWWwfYYsGwQ6QKQcDiZL5R3AHcZ5oFA3Md2Ew1YEXYVMaPUiLisQfNHsqb",
  "key27": "WrreTZpX3Mshs1NZczvc8Qbp8feFyarMihBn2KCc7rNgvbRtLVaL8orNEhWJMkhPLFtX5Eh4uLWXmUV2HWsf2Xs",
  "key28": "2ijnA8uYZEreHex6vorKJzQfPyCcoyMuBuXEeXmfPtBT4BzCEcwZyg7FTacFZkWEPJ8W6HYfMnCV5hxsUpo94yyM",
  "key29": "5Bgb8aiF1cGUBuAbmRLLhTv9yuqYYSchxhRiEG84KFsMVXngxRs5jYEynhZ43Vrz363oDAUx9zk9upCRsdx4Gh1W",
  "key30": "5wvv3ixT3i6vCgq61Jv1oCU6XPz1MKwtr2hakUftjMUhJvKof4819vu82NhP6xZ8VGwfY2TMAkbnjipiaNkASTxc",
  "key31": "58oefjjZaasPyteAz9wrhi7a5dNWnvviAw5dKJxwCXeuMC8MDiUcw6wASZMBsnJf5X9QjTt1EJCtyQKWb1VQgQYA",
  "key32": "4YGTVjtABRhKAgxxqyZbcoSJetpwscFweRYxCACErKALdUk7Z8v4D4EUo17igoucpGaWDAtQjyquCuCym1UJFxAL",
  "key33": "4PDeBSfYfsbcAJymz8vT3HcvP4PoP6s3ycrKH1hmxMjdFDwP2KzxwRbTY4JmUsyRN2pmU8ThtYyw4eoZyqwFhUJt",
  "key34": "3tKSQVAAKMhkDXQ8PRhKVZK47kULqsn1PLBA142ayVpJPmN9aUafm6qEU8mPdHRnRJLnr31VTwa173gqEWGxWGye",
  "key35": "57qgXBShoh4DqDz92yiCXT5KHQeGfUFcknexUkyqvoZzrAxptdqAH9JRUBiUuof6jUwBCpVVXBwQbMjqYATzaHZy",
  "key36": "3sxtU825a1E319p6ojgqSJuiLi7qUqay9k7pdWEbHQgFCz1EDq26uJTaN7hbgsAGvj8QFVo8kcNDvTFmRRm6N9TA",
  "key37": "4jDfdZq1DEa3guPCVvXdwxMoUQRyFxicWBRj7FFVShhLez1WrudgeeBkyodeQeGrDxE4Qj9ym9QpLf7E36RjUUww",
  "key38": "3kHoKgs3LytsrztpBm4cCuZeaSYxhsHNcVDEi2bCzZ4tH3iKsKbsFMi855BMuGfUiEV6pGKULzhszvHB2SrkibUh",
  "key39": "H7QSPo9YNNAkj8TfB28eCF1byzgDYhJsBn7rqy6TNc7hpworjEB6otd7vAhAqUzQuYKLLQJnVy4j2go8RHdpsZB",
  "key40": "MDHgQLPLrzZYy4fyUemUjokFmgyYcgwNNvX2Rx22ms86V7GeDVngb5WeviqEA7nwuaSN7ZKY9f7SNMn7KeZzjpU",
  "key41": "3dAUXU92T6Qgxz2eNTWjq8uJsA2MGDpGLwmJAYUiMu6uCY3PxSnBnNi1j5R6YqmLrcLeZgjrB7yFxHbLHKGZ3WyQ",
  "key42": "3ANRqDZ1TeVB7VpqVH7jNCUXMrxVFqSceK41wH1WCUSnqjoWCTs8cSYJnNf6KnMC6Hz8jivbL3whAB9zstdDDqX",
  "key43": "VUtkWT7MwCRQitWYaQtFupYMfV3izeHMuY3aHRArHZvByanwuR6thvwUZWGTk8c2hg45DTLdrxTDrKYwT5CuJET",
  "key44": "3s6CxKhAoWqHhAHhnGdKGKhDTwssHrjCz7UvUqn4sMRmKe1QibB9dqNpYLczvToG8eyFNGHTjXu8f36PePR9Rc7x",
  "key45": "2mdvNEuFdgk7mw6w8FVvHNU5imkMgZ3NrXTPoWfbsgAM5AmDT1TaNCy9DKtzvsb6PZL7pYboFvo4EztGb6uGtK8r",
  "key46": "3PiDL4JCdi1Ug1ozJ1UsW24W9f1idtKfvbajWnBk11y3zhwrbZR478XCbZVTW2V25zqXLAZMJZ3JxZPJ4hnu4MGS",
  "key47": "8gXufF6CrwnH7TNvDB3BFw8cYgQiV51TSUbXgXotsMDoZNmJyb28D488gFuFf4rXygoGzN4gu2hHJHXwe9uVAEb"
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
