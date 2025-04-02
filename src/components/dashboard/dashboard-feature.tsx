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
    "5pWYgAD95KvFYvipX8hwXdpe9SoczQJS5v1Mn4UNpCCqKwBt9qseFkhWaht5ujAgYafBhcBaaD7L18N7hS6AWS9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pqzr7qk4tNTjKrta3v8tGR6gjNHzrKEdxB82Yo17R4H1V1LePgzU9YoJfg7WakHatbXFKoN5hXDn5DNfapjihbe",
  "key1": "vZJsW8V7okYRLfSp3b5xUFpRnnLxVDuztp4PpXsnbTq4w7UFzPyqx95dEmKDUUJgn3NxYuEmUD9DW9Wth8FwQoE",
  "key2": "5CEPMCffeuFKD8B2JHB1B8t5SYBQjD22TcjU1o3Dtu7jBbuhK8McNhHf9XSrEezyyh7t6VH9WrrcQ4nSGqL2ZShh",
  "key3": "4Kqf9ENGMztTyupf7uCxrwyopGuXRJUxqLcxFqGbe6oWTVp3BJktpAUEuzRbSbVfCmoTy4cPSFGhLUVAKGMr3bJW",
  "key4": "GkjFZPYgRSmZV31ZXL7shTZLJxvfGwQYWDEpRT6NFVi27WxwwguqMod15LEHXzkxonFgK3ixmvanPD3Sw3FEEWi",
  "key5": "4PmHrTije2BV4pBYZFzzGWjCmnTJvcKZ1CztaVWHRc5gWzCi8sYVAtZWMug53YNGPpeNp1C3jgpcvAHBByjWVyto",
  "key6": "3sLo25ERQj4v24tT52kAJ4hZNCzp97PaeUf781faLxcxoj9CRMzSufcuFHCoSdLbBwrTGu5ZwBUtt6Pp68f9gY6m",
  "key7": "5WbZf3aNTcCchxnPJPE7TgFEJL2rfMCBrNZ5oaSGTGqtK1d4UHXDPztZFhR1htifTKnWV4TTuxrSnSUPJiGmQvSx",
  "key8": "3GBCYH7zKvD6D4XuRSuy3gpFRWoWm4QQcobawAQThYQXy5QVztTG3CxgL5y2ApZJpcwQwex6oGBJNtKNizCYraHC",
  "key9": "3rcSSzqnKTfdRcxC7eREphcV7P6VNLDiFxJiutBVeFAN8V6qskZuwDxeYx2LA19HiW7R1WDFFB5vm6DEvBfMPRds",
  "key10": "3ye1bpfu9wUtB9mDfyfzRD4xhSRDQXChDxkoiJrXLQV4gE5Kqtp7hqYYa9DvQnFwf66qBraM561tXSdBYTiiWsmo",
  "key11": "4wJ2pK2mkmoRnbxM3hAw4bvgndCfcJrM5PWW4T1idBhgt2Dyp1VifMkvxzQjnzX2tkQeZAtUA7zUhVu6LWPWPvhg",
  "key12": "RnpDaUsYFwG6BHnT9NErzmqJFZT36FCarApkBrDE5YGZjax3FCSbuPq9HBQTRPvuaRP1kiLkC5ViNhmo4cxcCVk",
  "key13": "54zKGsJAVrxujuqMQzTBTsgdDyt1zSMBVYprnz7ZKCVc2F47j1piujE5vW6NkbghNdnaWVHgvHtpHkRbdHBjHg2X",
  "key14": "4aS8wdJsN6csSYzgugi7Saz2wDgS69sywDjhpk28vcG5b1sz1hrpZe3unf67SjRqjubGjK68TtW15unamdaWb7ot",
  "key15": "5U1nrhwfu72fUzBcrfFsHCmoe6rhVRpbagErEvetuKLCyYYMnQqeoUUwZnbHtdHt8yGBwvxUVBHArjT6jY7cVNPu",
  "key16": "2f5T3DEaC6dLoYcKizuAKJmf4x4VuRCMri4q1yZS9MG9PUzAMNF6P1KMn8bhadrkKHS9v7b862Exo8GDQNEq3A2D",
  "key17": "4nmS2sTfDDJJF6CDEZB4C1fbzMWkoKSwnQzoUmpxrohCMNn1fKsoiWxbTgP8tBcHRQ7tPKZ68QcGAsV4o2a64zVG",
  "key18": "qs868iREMx5DwPf8QomSbvtJJpBPMRDuPmLNNCQnd594MSwyrWQDR8G2himK7SSdfsXjbHwyWyJV5vb6pgCWj4Q",
  "key19": "nq6HTHT29UEjXLzNSCQEEnk3pF1dX5GTXm26JXZgQe5fFgB5zQA5fjSqbWV7cB7BE4hpCPsBBpsttusRm99mcCq",
  "key20": "3VstuN8QC3KSF5Ljy5FYqPshhFYkNEyZLxD47HqnvtiZTWq1CUwuiTnDomJXw8Nm5qwLfaBVrwbVho4y1YUDLWH7",
  "key21": "5MJhSR28d1XX7R9TNZQFvN2mHdubJtmTQBERgA8ZapTkWioHyxjqenEouRrHy4r4rREqHnSUDh8NpgF6kp84dye8",
  "key22": "33mvWwT4VNL6vWJwzqztE36EbaWMCQNrKTxsxBtaJpRQoaPhb63Tn6jaqpLongpWore4r2ysG8szXz4QhfhCKVhD",
  "key23": "RFJF3DEHW95nEzpaLSnpmkggqR7XxahDBZrX7x36eDKbMdbmG3QWpktRv4h4VLptuzZApiMuBzSLPs8S47o3puu",
  "key24": "2HPx3QsaCDWHns5Eo1KiRtWoEMx2ZyfqjiYGWqhhC2aHvocFyeiGBFikNnJZ9U8V5N2vj2AmsXWB6UMyc4KnwQDx",
  "key25": "3xKCrZEKvHLrTKMMY4La2AKhfj7nfWGtUTCXTCU3DkVjxmmPLzgKZU1iZYXgTCgD2Ap4EvMb1G7vP9wnziHBZzs1",
  "key26": "2yiGLvwZhPGv4cRZRbdB6vRemEqAg2rqhKQEdP3xdMWT96KEwz6PsRcvYzfPL5ZrzfS2KbqCnLn6gVaET9iV1Xay",
  "key27": "3EdvA98yeNxwC3J1WSwGqabXsRHGTiSLPr6WSYZf6qaNr3UWEGyFEh4YbJYB4u8QgQJQJsXCTS4kDyeFpbCVtiNJ",
  "key28": "PXNRY7mngo2BG8y9KNuJuRDW2GcF6rkEK6iniWjPuQRTsqWEuHdx1hwXpqQoJCvGQiNULCx9pAmANFhfUfWTRiP",
  "key29": "5TnsmC2ARyKmHuyFKLvrYexp9a651RSgXzrs4YZjkciafvQBTyd1HWwdkDHH175rbpmiKuW2QF7yKgoZEQVQcZ9i",
  "key30": "3WvFTZ36FojKp2p3KfoH7pidPfKq27b2KQr7BgvbEtDZmoXdX3yJWeaTXfGnKSPRL2MyLrWHgnQF251TmAws4bFi",
  "key31": "2dEMhUHgcyL7oU5fTz4WfzioNGcXsjU2mh7bxKZZEuQWPxfkbPHxfbe9t1JaN5bmnsMLaNNchvLzKqFVQxM5HyeF",
  "key32": "4szv9W6UZQL9aNfCGkPHnuEsfUJ3enhCcmsT53xhBwoPcprbLwopC8sTrCUvxF6RcZWxD24GezUHn48x7WvsR5N5",
  "key33": "2Xsr2PLFtdb3zpFEgfp8aDV3gvMdMCb9Tv26qyUUW1DgiDH8zRBWbVpLyaPAjT71YXMi1Ziiuaih79WWC2o3fMBG",
  "key34": "5zxgUeVrcvMgjdujnHfm3kLQL3Y3dPbPJtn7njgVNcxu6Vki4raRt22amfgcNAyumsXR36L8nb7q9F2Wp7DFWfmW",
  "key35": "4QZT4zS7ZZC8xRMVC55PbcDqc4yuBCudANWsDaNQzf2LRQ17jsLcCBt5XifsGYSAYeuVAyT4b9TNAToaG9J98pHH",
  "key36": "AaEaDN58FtR5bUtVKxj48yzfzDBkJM7j5U9VSmZvV6BzDw38p5iXmFGwE1nV4T3kTQ1jV9qGt2XSnLAznkv2kva",
  "key37": "2ZvsEkbvowctqcUZwFRgL4G8KbzhN9QdBz62s6bKCSybCcsM9PUHjZRXstZ3qB4cQW55pX5rCiN1AuJ7Cq9xnRKJ",
  "key38": "4wZjDRXUcPirEgCE7m8odqQugeuqDAksHcfDX81cxBVmZLTMgET5K9APPqkcssbGRJAWGTxxVpAbWBJWuW8VFdEA",
  "key39": "2yU3pqJfcg81xDeRq3ZjzYJjV4EKaWimoaFqWQf8fYNKeUvgsQJA6JhM7gC7mDHfywfE6WrYfu18LSDGwcwK8F99",
  "key40": "42m21xx49vTR2xSAMsvbLBeuJibsCxiJminFgEXJtwYAz1Lokw1T3NtRAoHTdbtQj8bDfTVo166MR6ya6gXD7Lim",
  "key41": "2zxr4LW5WekWavkQuYLZxmWn8eZVPVZSe5HCbnPCzqpEgeqq7MusZ1sAZrMasXxsJ876od5kq3c4Awe2d9grdkfT",
  "key42": "3A1HsLZ2TdokPQfbyTLjwDT32MYsojwmk9yiYGEusDnQebE1gDd7MGKQScWgjRCodFEVfdBRwJGQy6G6rRTLqt5x"
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
