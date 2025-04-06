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
    "yeEggGxZqoqyE7Gmkx3TgdDr1LUjGxy8EpVD4F2WfUGCL6Ga7pLZGeaM5NGJoNs7qf35M4TKernskYj646MPocP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "85ujjf4h7B6rFoTgfHLpyN7UcMByYR9aVYzTUDX7js48pQeS9Efbr6V3MywGo79RtPAei1mNsfPwctaokWWMGNG",
  "key1": "2Fh4oa8vftb41kEPGXwEs1wie5JVmzQYZ7e87gVut8FVTRbk6VENthvsnP3ydYnN6D3iCtrEv6TPNwLF9MXMSRP4",
  "key2": "QTQsSgT37wDV3HxofABvA74r2GLqKLPcggWpgPAa8LxmEqWGKdc55joTR8bViPntUVPsUNNzS67jg4vKrerJFqR",
  "key3": "51fjfvaEXQ9oXTGSVfNgykPkdGMA15WDYAFvsFLGx2c31DwBUzvjNYRR4BG4dx81qSMFTrRLr2ZnghHr391S6m9a",
  "key4": "4ASHoU9mjjWgmzhiWXGYjLQ5P38eCi9KaEZXzEumcDHmHBjkWCtZsJYWQJJuHLrbY9D7wAvve1qkPSyzrrAYS3YC",
  "key5": "4mA3wKJ1x27RHtYBUcLq6y8gudSSP2dQ1MRc2nMUUbfLCREzvUmj8oStiZ3z45LxxnijgJ5PTRKQHNpURXF7Jp2q",
  "key6": "38g6zBhjDFyBnQYd8Z4yZwRZuswrypt7s6Gi61NrrfwEoBRNUnGbCPdiy4UEq7DktYEG5m9SmdczpCqguSNn55fF",
  "key7": "5KiTsFpuq2y4PQPczuC5AdXDVKyivWhjcFMJ26BJFpCsiLBsUBrm3geu8yk8se3fG6iN3XCnyJ2ZoaP68iJVzS1X",
  "key8": "Q5aWET8Vhz4bchyGpr1Hc7b5Fvvt3xbT27XhZuMwywbp8LHehgxJPccWuVjjfyv4btsgQvZ5f2C81KZ7PD96rPX",
  "key9": "5MpPkhq37WoZbBgqnCTuRWXDQJfKDcPr4reAQpThbj95qWVJqYub81g1MwqQayDob5rikGUFAABdtpHMGeKfFd4A",
  "key10": "4q7enRzpZepk7qjSXQ6F8SUvkUVUFpXE1iGAZ2TzKe62GcSUgBp6ogBRyVEb5XmCQno4cehv4CZiCa5Ry4Gt2AZp",
  "key11": "3dxTDQaEgjd7o2kXSGT4h1scVNaJC5AHMpyDprgfkDFJz7L7VSrFz5CReLCak8RYmMXgaVtvF46aFg6aaEQYeHdJ",
  "key12": "3U7TnwaxyPTB5Kcf7LaC698iZz1UNjemn2PfczWCzP45T5PFXFoMNo8EYRv1qSQpPCjaTqMSugor4DfzdpdYyUxq",
  "key13": "4Fj51hC4zdU8ozrgUy8p5FZ6vUHHoSEiN5VWdVVZGWi4NjewaZ1yXwGbfgCr4SGpLZJecP4c8gGkuhuPWxvcj4Yp",
  "key14": "4W35xLLVqgrgXQRSgW17nbzZyjhGRhyWsXEStnizenGHzLdcLfV7BV6ZbnbQfYK5KscHpfH8CvmMgVxA5MhuDqRV",
  "key15": "uEzjo7pWwr5xHp22jxLHwVvRWPE42jX9vtpcEsXtoAPeWuvp39rzWYpyviZh1f92ZMpaP63uttcBpsNb8ysWx1D",
  "key16": "35Mi2QL1FDMLzyt7bj9SszNxPYRTebHR4ndyj5Qry8yisYmEfzr3br3GcubkuLRH5SdKzrDECtoDa71f2DLvUssj",
  "key17": "pq5nCPh9hx7dFcPZVDGGFKRiuf3kz5gDM87zZL39aEACBArLqG3DCZsRNyZDcgRBQT5Y692CExDLEY59AVdbAMY",
  "key18": "24pNecWzi3HAgyhJCGa3caDsovRC4BXdLj9w9U4rVDreu75Ek91hhZHhKX8Xk1VorvQC5mzGqt79H5VdgN7Fhjwa",
  "key19": "44hoDGA32wbWex9tyqqcfmyCNMDip5kHRkn4Hg4qbosxzpCaw2Wad7aZLXTNGfCUtHnzVw37jB5yrMDrrYVnS52k",
  "key20": "383Y2dQeMaGxcgSwojPc1MvAns8StFVdBhiV6UMEUEmbbvvnNheBWyQStQenHsVrTGyjshrzWLPfvivTTB6qF76D",
  "key21": "4615B9soeKJ9paqNxJtZoHoRyzCG7rszzh8VTvwJxcbK4dpzLyQ26RNsgX5kNvuE5PTBYbdP56gTnLTyz3AaU2r8",
  "key22": "5EgYJ2f8jmxMcJFimedtcStRMmcToFMeeETL7UcT2X2Tk8hqWXPKxMqpqwHPbejjFRu7byTgdrGYRvQfVAZ4KsLz",
  "key23": "5MM7SgFeG1dVicqRwYnD1ZecMG2d1Q8Ph21mmqwTrgGbnfXjCWq5sNa7zwgEr22iALsqxMFifVr1odUjTe5Wv3Pi",
  "key24": "3D4PU5BA7hpqfK2sSf7oA3pEw1LZbZM1w318z3XcSjUVMYRoSwMyXc3kiyScQCu2M5dxN3uQhZu4kd7TWSZQ6zFE",
  "key25": "2xUVNTH324n4hrxBQQktUPnXm81ufKHN5TaNhz1KLkQx8LLErbF4Tdj1GmjFAMhDRovG37JqVJoRD8tWtnVN9NGd",
  "key26": "5Qh5qc8zPm6gyeVpiXyUEjAqQKvnGu9o3d7g8s7rsRABXVQVY6qzL9psgdrJ1htY7D6e68xST61vX3ZeigiFz9iW",
  "key27": "3T1GHfPpkbX1eBdwKDPQ8MU6AHrpJAVeHki5zrNGe8QL4TxEMGPUefX2uvmjBhSAZshaNpaLPQm8iAgWxa7A67sz"
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
