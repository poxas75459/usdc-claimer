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
    "5mgzCND7y4NS2ng1d9i38VpJEtr7A746CG6YCcd4oTPKz14MYf62eFPPF9kTrm66zrKGWsHevrvLJRhSuV6D1MpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q6hwcGBR7Ni8uHz3Y31t9Q1jAqt31pKj5kSz85kiA3LMJmuWgpNu2SiNWEZMV2Q1xkp6mXW8McykRVsJTF2CdGK",
  "key1": "3jE38H8PvGFDYykJFSRmS94ciQwPjF3fEiSbjeMn2a6ABBfFxS8v6YM4Wk3NeShjAkZEkiC1EvQD5QCL5F4iyNx1",
  "key2": "5VFLthmQiq8LK272SB4bb6CfNZFFMrc4vt11JoDwiisFhGzPdC12gKistRMNFtWaZFpewZ1mLGykwiC76EPGJjMD",
  "key3": "3XNmdRdnPRjMqMiVKnRH1U8iFYBybA61CfJjkS7txQF75SX1HA2gGvAwPreWsxc8e9FEieTRAAuGE4YT2mBDtDSL",
  "key4": "2a79BoVrbatLWLAPPqoTEbx4CLdJPnSE6P6TcHdQfPKNcSB8ibztvLbcsTyaeS84zfoTfLjtTfdYacEU5paMpT4Q",
  "key5": "3kQAjzWuDaiHC6FXXBfJMr1QRh4CJj9x18R3fRFeqPKcJjNSXqvhp9sg3gHaMaNqvGF4LEtTRfEVTi4M5JYqdrqG",
  "key6": "2aKgTTueSmjFrM2LRYf2fTU1vMXWWoEtyvKxbzYLkZa4AtvAmgEqVqReJmayiNHRuqU4SPpcmdjfWjThvCAXwg7W",
  "key7": "sUk9hG8CfqhrQvdZFrHBbh2LsX6wN5rHKwG6prdWptsKkpDciKHTVdn5mKLC9dWPsCe5WngZYPyh951RUjTGdr5",
  "key8": "2ScffrKL9RbVZYEfvpMSUiJ8BY72EKx2ci2HRGkLmQNS4GJ9ztHown6Wgp7u1UiNzsPwFmThJ1VHxrtY9LCi94D5",
  "key9": "3vdrQqg7ogPtpjWjT5sNXTiwF8hHHdicdEMtVgqtVsNC78KU6gtmwVYu5Z7nKqDkSdui6EJCM9zoT44FywRSzP5C",
  "key10": "D8NHxu3LmSDANpNeacR4sZFqAKeoCiVcrjgEohcRDedEvET7SzczMTLeVzCtL3xXcPH9DRBWA8H5VMyyRU8rdjX",
  "key11": "2eJ6HxJXzcVzewShZ6gw1tvaWsRPBqL1X9iPfeRReJRpLLWGSv4awyjfwALQMh3jNjCgGa5Kf48vsDTtj94wntDk",
  "key12": "4fU1C4dQ1PFSDhKpnc4FWzt91Yda3S57XH6rAuvNypQWvUe4rYNeyAFg1m4FtA6kaj6YXb8MKhAwXfQwbMoraXNm",
  "key13": "Q4EwmVeVirMaHKKp437WDrvhGwyf1QdJLNFz6BwHQkZEXb3gcrHj4y51mBNhS5ha5QjKVHPsGpfNA6koGKE1ixh",
  "key14": "5fVjkwASuJpsQJXog4SYaTry7TmPG4QNHm22jXifizirtgHCqkMW9YsNz3dRDygt97YxbNadiLr36YJjT4DXp593",
  "key15": "3NczvWbPXRsGit3uAbTZnknbmsW3c3Ta6u7DKwbxqZvbzs7S2PXvHdWApBrxCkNBrMTTM4G8iG1DZVq9XVnYuroj",
  "key16": "S2GLH7HizeyxWG8JctrL145mdSdAfFwM1VTwTQu9ATVW6Y7FcC8xUR6GbYB9udyBrgHshDQEk9DiE13nktvfBgQ",
  "key17": "n434sGuDyj6JiSCU9gkUtRBUZGwzCRFCo6Q6TixWMV4KA5UCsjKm9hQaQZed92fuYm5ban9MkcFyiGZarsmcZEA",
  "key18": "4NNvKRXhSLzq2nox8DLC16zexj6Jx6xWctKB5Sk9cXujyaEpiLTT3LzDvPPSm5xPDNAQzdLEh3Sk9LUVmwhgwFz8",
  "key19": "5SYJZJHxMLgoa6bnHyLLnuiT4vcAromsCX5XWZ2JySfWQKEFovCQzfYffaiMTFT7Kd1tB8QNwjtj24oCEPDTw174",
  "key20": "2vqgRLAShzVik3pkx5BesdFUxi5F1LB1prgjG8UAdjW9GtjNRLqxrrAyj84rh5Pc9vyvc6b6LzT1QEwphPcwtkXu",
  "key21": "236xJFmjY4JsyF5fS4qpFyYH5D4Yqy7LSAbYck9ZesFpfat3ZAminjtsjsKqPU1mzfmpwhPPksxMRMzVnDQghgxD",
  "key22": "293wdCMkBxbLCxxg8uc5TDgrH9fgV7wQWHUCBnYhxWyPaAukYJmDwy68a6LCBoETbcJBUXTjNWfiA3DUuzfK9Hdc",
  "key23": "5z1dSJZDiecbowcD7z8FmV3JmG7h4Mz4hg9ztyaebFkcBFDBAtJM9ip5sADdJipfmQV7AbTSjSsypX3NdYVWwjFn",
  "key24": "u8RpMB9wzSv7HReGz1LGcGk2K2Socp69W3uEoeNXj44xN8o3AZh4m9dedH7t6QBhEXmnxrC1dBCRKtLgiKgJuvX",
  "key25": "2HbQUdHNbU1JrA33wbXEfza2DXKT5SX7oSK1BqyEYstcLZYJZzhyLovPfsqrdGPzsVuQqQ18J5s6F2a9eao7ZvyP",
  "key26": "25bEnsGn3mY4WUFf69aqoHSmRVhamrpZzgqKSMWUA3GJ1AyJKgqy98fmwvFUmT5Wwzo1VjmSsxYYAtE2SkM3KjsH",
  "key27": "dAmb3Go6Q7e9MBmJj4VQ7SPU1qDc8WDnZEhS3dYKYWu7aACanpBUCkbaBfXYbSW54FggFQJp8wtwS93r7nEkUps",
  "key28": "488Qfd8c6fAasfH7tNoUHcZbtquE5toGR2Rzp7LFnn1fk9xxFg6fHak8JL1zxVUmBy3LwwefH9ywioyfTWSCGRw4",
  "key29": "5meXTCTra72FvBvBSsSaKjAat7DSmSm1FMginG7WWEGXZoP2NnsX4RJWuQRJPeQc6zAEKqYRrjkNBkadoKv1QjnV",
  "key30": "66h91aTwgFEaSHHEmc3pkF8dyFu4sQacFwdAQVwWJyGmscekCeCvDAvNd8sM31iCrFJmYyM9RfQYEWY4nrdCNaVD",
  "key31": "2zJ91H6xovr6vgN15A8SnDYfPCMcEpRFaYmmeJPxeAxAJtMja9aZUT6fPGdCYTuAsPLp5CMbZQASqjodbYkRatM2",
  "key32": "42TA5DN9no1ZvhJaU9U8ypRMGtqzeisgXFq6ffd9sCB6zhbV2aubsvhccvkc8USxLsWcnywfLFb79UFTaQJH1oNz",
  "key33": "4HkUFcHGKRLLjNWz34rrT4cTbi9AnUoJzoZsEjy9B9QGWhy5Yp94onpvsiZNKQHYaabM6wPML3jrLvDrDoNpFNzj",
  "key34": "4oJ2qcWGrZKHrAZnku3fXBhAGFwaDqdLYyYLpKJ9ogq65hMt25YGNjuPvkzHWa2Yuh95KBwRoZUaPqSZVKADWWma",
  "key35": "2ev4asf7MEiAVreVB8wDVD1XbvTMLXSx4j71j6jTHAQmaiv6DsCThpEDidV2fBqdm6qViFEQXdMPzYTPZydmMCJt",
  "key36": "2ZAjXvgrbJqrGCgmQmXget9XjWPBbHn6wC8vSy6HrqmLJL3jkoYGuG1FRBvhzgCdWT9o9cgrpM8oQfDUn5DyebJR",
  "key37": "3ZjUhjHcDwcCHCjyYSJoZyJbRMBDmQj9K13avmF1bzwsLwLgyVsHsXAVv5xCQtYpCeWJ3d6Rez8ZGtguMeXmB4YB",
  "key38": "3dbqT9RqoqLywJxipaxbPse3dbig4N7h5gq4b8wfPjrXvpLDW2qPHGDtor6fnAhLKXJLd7Uy7WgFzY4Z6ajyxJz1",
  "key39": "Fk2NvRYe8NzjMpzLKgEXsX41VPSdpYGAGhbLkWEAt1G6RgDgW7ndg56Dakd5wN89TBDeBYGuZo5vfBrybPvje6M",
  "key40": "4EvL6pWaFSq9juap7VexTzXJq6Y1An1HQJ2uTqhgK5qygFCPyYSJjkYY35bSR4LhSmf2a2HgCAtsVGicn1yXZKrs",
  "key41": "63A1zKBXuzHt38zy44GdtQ3aH1nZXDhxXJx6Gdx6hXEt2dBUofzQYZuSmbCEurEhcPuND24PtJWAuGnVB92pomAD",
  "key42": "3vX6voUhvegG6rXnU5849TNzUTkA1mLmGHqj2EvxByS1fe443XLcvgyfKVbGR8Fiwix8xGNgTZQtedxghZ2nGept",
  "key43": "Q8gPadnzZ8y59hssg9A6JddKxF55RutMcbzsjBQKo3dvbFnqVWdFCH8CmQ3gSsAyj1rEHJEuRJ5JfE9EPtpHwev",
  "key44": "ZRyy4PPCjW5tcXPoDfZUTqQqM4aj6w2QK7FWdv2AG1LSJvRCHiG7nScau39eLumLuGnE5VwPbkxuVAE3GXsDitd",
  "key45": "3gwVMZsj688TJu6XNzxCcY4AET3LycThrCB4N5zoJcnoojHneXHe6QNjGBDcsdMBQYzdDCsa4Zb15iyeRbe53YrR",
  "key46": "53HYfuCsBCLpXTxME84sFMLFNNmf4MmBpxPohPrT25h3NWqrzxThuWf6Uaehkr4NXZyX3dp93na7SBnLvjeqw3mZ",
  "key47": "5i2A65AkeKCHZDgfPE291AErmASJ77ryKSD72kThTt65Zpk7kaVccNVceoQNif8uAbWrBfksZVuuwhbgk52E2Ge4"
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
