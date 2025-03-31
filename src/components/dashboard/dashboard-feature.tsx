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
    "3eKKVrWBvcSW6p2bvJ4MNgM9SGfyuNrgo1YK75Eobrrh9p7CAeqsroK4ZKe16Rhh9ArdSuiKPBawTiALTKd46p6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25chWmMvJrCNRd64pfXroYF9GwqaKshrUmgkEBAk6FCDctJu93KDQpy89JmtopkGDbezMqryKqqYWwSG9HTEEM7t",
  "key1": "67WSpgb2FzWTon5d6TCu3eATTADXXoPAoMQYjjUNmZqWusk2UMccwwezk18tm8vvugNNwrss12FNPyrPUPWUNuK7",
  "key2": "3NBSBFPiCqDhBa9tkQiPHbEtiFfMPKM4hBBCQ2Utr4a5ENkXQeHzRVeY75TRzCppj439rs3qJbTqMDykQvuEuHHj",
  "key3": "3eYaUCYquEV4hGC6uebhcRnyEPryJxcJEvdQ3XNys5zLCSMeXZNdhS25Lbezc4GPrjtLDnL3zo43adD98RXaGJaH",
  "key4": "tnsW7Y4LAFPP4qrqBP1YNZ2EvWsdqcSz5LBfyjvDBYwoSEooRUNpgoDNDzgB2H8uitexUiq3UcC4aDTnRS4EXDo",
  "key5": "52rHf3fb2zAfGQrwByDhRwg8JqovXvQXYXYhAWmpKm5nU9Nk1Vu7GAfzPzjvMuG4xyACYYuzGBH99KCGDMgSDkPb",
  "key6": "624o9q86vpiL4dfgkv7E6DPXoQG88kjKbHdLiLpTHTjBmE8LJh4bG9gwsucRUjQmG1kHsafoV2bYvGrCMoRna5ex",
  "key7": "2or3zxPtGLVDRzo7YtRHs7PRqpmkCR4h3bSW1y438ViKHU7nLGUv42S2MJLMC5UMji3Nx2YpZvUN3Ps9GNCAfxT3",
  "key8": "4PZCrf2taTgQfjQygFd1PRgWCMsdAfmEcbR72Hx38JavkkhF7nTjRKVYrcgRgrxY1T5gDdz6GbZoTmHuckEt1uBB",
  "key9": "9xCHqABqgfqs9iwa5ywrcAb1EfZFnEpeYr4tuEmfDJaRaaHCMGbS7w8CKntLB2TCTRwugghTFE7qKdRs6iFXYXn",
  "key10": "3mmSzFg2iU99Fs5qUr5Qwu1bp4pHifZbHfJGhbgMNfYYNqGLQs3Av21viHuc7Cdgv5nhGbiFCqeVM95PhBRrz9Ck",
  "key11": "5qZyAxS1QZRjbWBrt8hBg4qLtSQc8Bp9Dzbd51rEpkocnU7vW83sHG6rbNyYydYuhFbkFFXCXLN81k7enkMHkWLA",
  "key12": "3neztnNoWHSYciyavCpUdVbmPNjXsjmk3t5z14cu8YhBQGYRmWYBWKLTk9Snrk8hGZinFnXowgX1ohr7qXcqmMFS",
  "key13": "2Z7RrJcMCPdkViU3tteQHb9x5AZRsbBn31CJsTGLKdP9BhoChs83WDP6UPskqWSipJRGi8rG6ifnug4b4AtDf9aj",
  "key14": "3MCWnQTo45a2sMRN4AZggtGdsyRyqn6wdiiuNHyTSTcQSdoXJCXrgTNQiFucQmHX2nStbYbgMboWLkrCTHPPSpLU",
  "key15": "4bev6vPrn8mUsnDDdaUUS5Xy3aMFFEbfFcQqGtbiRKsFyqLHDKi56pB7uFg5moSFaBn5ztPD8dmfLUJCknrDEJUe",
  "key16": "5D11kEWEirwnV5VDETD5JLtTTeGu8wq3Dk3n83F2ySrsZDMD3G1sHDpRUzGByQEVmpyvya53xi63M15YdX7z6U4S",
  "key17": "5UsTQF6zxc33cjGGzmFvHfA83bkq3PhLRBXNKrK7S5ZJ4rnNasdTAnLTboNDtztt7wnnw653aoMJx3k3ixwwhC3U",
  "key18": "4i1VNC8388zcy31WSHUkug6n5Z3zvs5PkuHsyr6MECW4cL82RWwgD7GANa9HByQxxXurct6E6zsdgrjT9Kcyo67q",
  "key19": "35YHocvfXyvMptny2bVuAzj5or5fxrbwyKEqgWL9pmVifxZzvMj9ZztDSeyXmVFemXUGQZFXiB2SmbZM28tjzo7J",
  "key20": "5zUgAyDFPNZL3rrzp7HsPnLS8JWgpHJ1hgLyfjxwvvv6BXzJJFtUom6TDcHVnrmJheFWgqrUhiJ715MjXeoZduks",
  "key21": "2UZhCNFDM9vqoP29gBz4TZeDRfyEVpBWFNezwnDKyTM5VV1MUGjJBEHvy76hWe3yoBky4v9Gaw1qXv6d7YdmhxwM",
  "key22": "bhFqjPixWg67CMR4oTWSVbTd6Vp6iqbiBA11tyBMvV1eiZTgXPjbE4h3DKCrZwRtwUAxtocugyDTZUAce4ESnMP",
  "key23": "36qMpj7bPTkbdNPT2HjYzHhqSAeqvtzJTvCTL4y4kXroiWKaSkqhuK63TB6RrDN6jAkPFhJaPcvoUDjVgnhee3My",
  "key24": "5G2VzkSNAYZp79Y8jWY12uVSSm9iPPHgYyLZFWbyYRLDCvPRdLTwELyp6FXLdEGvCLhdkMErSeusmT1L6FkqFnu6"
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
