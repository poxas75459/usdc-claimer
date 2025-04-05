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
    "544yyYQf7BwBNxtT17jA4ff9KmzseTERW9kH8mHYBNkdN5AbU51D5zhJffpPWR92qsdysmmtWYjz4sq4V6djsamU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MrbdtHG7u1N4YnxtwTfjBxMxZzyi3awp8NMPHMV2hSL7WaoGN2YNjpWkM3xwpop3BPVvpioGGVh185fnJdQU8R5",
  "key1": "2TcWqmH2RAyx3rBWNWw28HzuWx2NmTUWWu3vevwWeQFQEHHEZwHDGfcfXsuCAfyqkhZmuCSFDmbVPt8C3WyFcoaV",
  "key2": "Tbn1wcvG3SqC36RENhQiiJAJ246QZEXY5qj4eCfXiwfHMTNo2mwPantRraZrmFJaCz6wfdFmMCVFkannrZLQYns",
  "key3": "k7HW6jif1r3EMWDDirM6bYwoD85B2KJtLEXYJXnyrpcgyemm5QZVepP7E1KcfhcJUunoq7PS1GK3kCr36ukg1RQ",
  "key4": "5Y43PHkj6uP2sVSE4sCU64tQU74dUexoWHg57X5aQDbyvYQCUbSrehBGaA783eH5s8B8RadNnqJ6LptA2NDnRtpn",
  "key5": "5SoLGP4HccZnS7qFZjzc3FxWsYkWpTU9qg5ABU7XUfoBKe1Drm5Nk53C9REgacaoCNEbkNYJKBWK5ewsJpdgeJkq",
  "key6": "3WWqoQp5aLWeVDpHQW5xgME3izTwfEz5Am3nkUL8CkgvA9y4rzKrs4iNQnxXCY4kA8wJjqks7iJWrMug7nsg1ghC",
  "key7": "4j62Dr1bEN4qkZUxbxib6tnkPmM4An5fEsNcudYHVDHPBaF66WYpvqM71HbT81U99z99LVrCgNd4ZVupwDRJNhac",
  "key8": "4TAaMQsH4YHNNfeswkdsFrZco2oSkPTLYfpyYUVAP6Dce7YG4MAy8ffHX44mkbo9mhjGMZ8DHy4TnSwXV6WxScXK",
  "key9": "3EWAVjdDAvHq2d7hms6h3XnAL2iEZ24A8FsP11Umc6A1CcH8LxgXiGdEotWawFnzKjmv7UNJbXxBcqJCbww9Zury",
  "key10": "2bB7zAbexrWdFQo5Mvi9WMaZNcQ7RJLbFN8zCm5JYgp3E8xXe3z914iMC3JpUtGakkfEU3NW65MoNrehCqre494A",
  "key11": "2pFcQHxYiiExzRyFC753VaBh642ba5xvhGovcgDengipe4DJKvo9LF9eMUYNCbocJw29Ht9DGwApVyRgkHzeb6UD",
  "key12": "4ZRhYvAaUkmPcZs8Akr5S5hCZDj3N4iSD4w4sUoPi5Y6ez2mamDNnZZ9X8NHDqtJdAMaVvBnbbBZetohW3FVsiVt",
  "key13": "4tNLcdWrQP6M69gWpx3m9HQmq4SFiY962Ua8qfEbXigRfpBCPQQ3NaymkS8JheTjvxx4iGA2RxBii64K7FXh6cGw",
  "key14": "4XUeoL2nTGWYBHmYn8ZxEMmL9ZxhE9YGCEFv71gxjTPHfJp3vEXG3KJLB1YkSJNse8jpzpdR7XBt3FZdnqNxCmda",
  "key15": "4hVb17kiyp7BoALdgfAo7pem92MbRAxhw4REhjf2wTXCYzVTMGQN2g3Q5ZjcgRB1WYwiA84zmhNzgeRPjgPFvcng",
  "key16": "35xuVvjc173H3EzVh8WLBgYqpt979zVNNiK9D86xWDbEC7mKabvsr9pcsLHg65mB8s8651TRp7w7LADAhtWanShb",
  "key17": "3dMSauZaFbBob9FZxEAJbHpaLnYxvQC7my7GFcHLLZP8Ybqw8kMHvxvM1PjRCT5jboSYXEV5H8dSz5wMgM1b8MWR",
  "key18": "2H4QDjnULspEzvUFCnEF5jZTRNLSMc7AMegVEfXgdgEAgcHY6Va1XtMNr9Wpe8C4L5SLx6AHdoqECkWtTPwTdn2k",
  "key19": "411qmwxdu2P7sshB8nbNhxT7aCd5UUjPxF4EgcY1WKZg7fHpFw9SVqrqfK8uPvqQk5LChjYg4hV9Z72ok5XSbiyy",
  "key20": "29oezJmRNYyKGZxgJ59iQCVn7FKxY7uRBP4Q4DL6WYpjeJBNEsKaDg2t4HvTiBHo5mR7TL9tnryUYjqa1mVMhUSn",
  "key21": "2NARhigyLEkxz5xk9h9f1T2v6mUP53y7gWbJ3R3uKRK7G8JLvHgQ4jgpNrhRY2nRY6ZaZTwHdTCC1L4FqFLrhakL",
  "key22": "41LDH1t34ABPeCbiNR79ASSuMEGsK8BeEEETVADN4p8nKq76HFip6fUnQXLw2mgcuHaj7sqGhGHWWpBCcWSVqxcB",
  "key23": "22KUsk6WVn3p7E1BxcmycJspazxs3c9ckr3R8xXTy8i6kqaPn8b494AuPTLBUCHJD3eNKkK1YVaS41tiYs4x2EFv",
  "key24": "2jdjrtfmx9DdRTFekJZ7BXsH5Nru6z8hfm7PrhS6SGXcPUvYwQV4zzJXuUtjxZi74mm5B9HaM4cLVBNzkrzrMDhr",
  "key25": "4dAtVoK4r1nWhxbHLPePmiJTaw4Y8saD4pFbxLFQhL3hwD5f8BqQ1qA9frTreirA3SEgYVdLdkgPUUfd75uYFL2Q",
  "key26": "3zBwfrcnSrDqEhdqvaNAVTEdkjYqV3G6C5mTbP5ZJurzjL5nvQZkfmxnygEW2Ss1g6FPg7GBq6WLetpizqzHEABU",
  "key27": "4Cr85UCx9i1f63dtaHppB7MYnVg4bavQVQzNeoe9V2KGYcYCXa9xkajy2VoMR2HG4qGYkvQ2A1xC8yQD4bJ6dLmD",
  "key28": "2GVK14o8pb3XMoZBjqFg5R1CEZ11CYX16xNdAS4f6zYvyuWPrPUzraQFYqyhBHrSWLahj4KtFDFuEpf6PJTEZKez"
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
