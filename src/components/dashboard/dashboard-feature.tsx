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
    "25dEqvDr1vebTvWSgJy6u3DgvnCWp3Yxktcmw61Jv3MZ9gGGiv5KiwEdSWBKdKyESap8Ch4Mb21G8B8kfgn9QdP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58FTNFUJakDNrWfvBwhmKd4kBVQBnnQaP2hYXpkxRcNNQNBZfhx4dxW5shoRi2dPw2syPEgZLXcrna7jsZGqGvR4",
  "key1": "5UFta3VYLJKHCN8jfRFSCZgyY8Qe6CRuVNF2EmhnZQb9y7dvDMHf2ATRfaUSd1XqAZgMfHTtjAbq3aNpVyg4LCnx",
  "key2": "E3p8W53PEUehgQFny516c1F8ArmK9k266J9FoGHbSLMLZYNHhpag349QWJzhyD4SCz7EFHShSwxaX4eprJ79tdH",
  "key3": "CYPEYBFNqGgiygwP57mmH19zxrPe3kHLywJxuDFpbtMiTek7eR8GFupV2UjiaZzRwPAt45SmjpLMMNpPabG9Gqg",
  "key4": "2WmSnrnLLefeswBzKCeXezL1pzjtsJuaSy6RDKXXpMu6WBovww3S11pxBtNPLcoZNzoWi7kmi66zXr6GEVN4CHKJ",
  "key5": "avjkUsfaFgC4XW5LMuyJiB469WvR7YdcYcp9Yg7UARw6hiq8oHE9CmpKkiRPxy6xnY5hjnrQHs8J1CxhbxVm6iv",
  "key6": "3weDNq2Mv4wcJLnJbg3WEqYSrfrBaAQLKovJayjrB6XeBc77UEuQqEWV3kYSR5C3qdqHh1wuZTn886FaQVcDcfKi",
  "key7": "3W7ywLhPDEfLkANsMDw8yBTKu6Wh9eW8hnpSkoKGYEKwt5LhT2jP2hZZqw4AXS77TP5EaMcqSknQFgkJvACYvH6D",
  "key8": "3vnmMSCQNS71nBM41TUAD9qz65Xd8TKweH1ExY1VadbodUc94QecH6AwuwJQvJPcRbLEsphCfyELMqjUMhzkx96Z",
  "key9": "61FGpF1vvJLHUcMqtAXbUSqZXmLPHkWuPhxozXzHhCm8JxnwfKKCZAoNyLQJJGDa9AmGLp9pmHjs7PBCCDARq6Dj",
  "key10": "4pJmM8vfX9CsS4mNXt3dGPYsx97WUxrV3cVafbr3pdw5baVfW1Q8cbVyZgP1hSwCwXM92NBjZgX2SSEv2mt1W4BA",
  "key11": "4tUk5tjgQgGt7FhusE3439XMbgomzojH7dhD9VVLMrmJoo9fqQokkUArrA6VuDuQ6LbHxZz1YQ12kN7Pzdi4mfym",
  "key12": "4zXuJDZeMw66Coj49AEoWwz2Lyff7b8qM627cPNC91WinfNxesmqPvyJ2gZNwxdbM78fWq9a4X39eUm9rDEM3TrE",
  "key13": "5qTxVnfiUSzNNEwtexdVYEMcmp7gFhLvK5ThFH19ZAi3MsLmgzGmtrvJ6r6aYavYcEL9GcmTKYkHFxeBnDfgFmT1",
  "key14": "2UCyEDL9AWH1PdjtP27n8um5SDfofzHDCtDQpwodmDbM8j3swnbavYFMV2vKwhJRcrsdVF1box5u2VrKNdTszSYC",
  "key15": "vRpjDW8g1nF1HECh4PeGYeguVBYjjt6n9ZV5DmnGfViYMDZBU9dNWSMiRKxBWPemMb1eorAES2nsHWTQG36oneq",
  "key16": "25FcneHohvSFK9Yj4pCcLSfTp3JBB9P4MPrdcSQqh91i77xmFwqhHxtFtkfivUdMExkqakzDwC4JMkaCEdKhRBir",
  "key17": "3LTVJqsuRnE6dKkX3PGGHD1jJ14V25drNA1EBpveADQx8pcYJzJ12i54xo5hendEos9cmx5o9P4VQj118TSxAKZH",
  "key18": "2WdQHwvk9As356pbxUiGYHq4YTFMrjLgVya5frkT4EsWyX4ynaehiKYJ5sMSQif9AkzwHWGU9TEjEFdzBP7smjgS",
  "key19": "KXWaZUQGJ8nXf9m6ejCfrL42YZGLdeFm2EYjyqQZssGXvSGrkMZtwJhrBWfwb5m4wP6yiKgdxbQbBTCzY5HwGSe",
  "key20": "433nKffT8z7qCrLAozk89Q6sAvWhkL1xJYoXGwQ6ybU48kGpy3LbhoD8CNmANUkNtxXuFVA9rdCttfy5qPuUtmn9",
  "key21": "2Jimf7Q8XXTxVxWdYQhxrJP7tWLABDeTA5Kn5XauUEiLrwmH1Gqu2rdMaYEmpDJY2Yd64BknMLJPfnZctgUBb2r1",
  "key22": "SJD6JZz4cvt1USt1rLbvZWeZxdN83ubdzVmN4ZrGcACnQfdxeNeNfQ3s4Yvjf5f8wr6hNBgU7MAjRBYZmAH918Y",
  "key23": "QnQvpo6c4M8KejHva3Ks2NbACnrcokXa9sS2mFYFiwN9dqq5c4Re5yRpTPC6aQmPYQTK7j8fL9tgd3NwRDvMjBW",
  "key24": "5RCeDNuaGK8EfUxNZdD4NL9mFHGUSQCHgwrk1x6sWATAHPJwZseH3WC22JQx2bXHs1wQ2orkmVcTuPcE2BitxwS3",
  "key25": "55UrR6W6nQvFmqpnNayFHjjQR9ei4vQuW7xQsJMZiMy6jWRCpDVc12qi6DAqmZp1rfrEBwjwu2WMzXLQdNebAM3Y",
  "key26": "3CVnpmqvvJep8U19onuKowju48e7ozGjgRyGT1PDFKojRc4w1pfFLSurWCcWSMBMPnPm4UirMv7Czax236r8zrn3",
  "key27": "2WRu2oQ6mzxa6o3Vy9VjVyaNVsqBNystvCjz2d5XZ4mAExcqdLb3kMv6mT26rANAP438W57BU1PLyUa9PYgyp1Ej",
  "key28": "3nkJ1WZ7bXxjCZ4cqQS1AcN7hrAFndKJ9xfgsbhRp6KYEpZGx6xwwwYthvFEC8xLy33eAfgXraHF7bcNXXbm6h2D",
  "key29": "3677xPcvJ5s5vJG9uEJMw7d6JP6oFGp8gbJup8E2MuZtrutY21gY2XC2BetjeVP32jYaNAWv7YSvCW8rkbH9kLX9",
  "key30": "62JSihwDnDa1BFDDncFzLGrMR1JJLWi2SxyvyDhVN3JGUfQXQDv8dVprRL2nmJ1ZrgY9jUfuRpp1g5yKxgd57Jnt",
  "key31": "4Bhs3ssfnzduznAbJsYA5vh7XXvNRPCWPbikauyxRpzhMcLSy3t5dUFMvGoQUVVc8YZ8AmyuMMLsL4fDCrusggTw",
  "key32": "2YRPJAFBBaG616uMc5t9PxxqiqvoibGdYH2o81umphMayr5eH3pmVkBBTyyC5X5PFEXoZjokNXF9RdaD9u3d1kQJ",
  "key33": "31jE6id8KTxWQMWfxvedPmGedpCkFDB2Fj33Lg2JJ5zSDUg4CwVRXcJucTF3cL3QfoKkuThnYEtmUwhx6wiEcbzB",
  "key34": "ymhvFWNhvsrkkrtwTmLx7GPFkiNMSFatf58rrPJRgT49LmiwNJ5g8YRxbxkEc9t9t5MU2SRPuZ24dGhzjbiwyVm",
  "key35": "5cw7NPQyVUQZ3XCKHA6VnMi1exjFpmHkpmmidKS8hGQLNqfMoSodrqmfYQte1fXLPvMraCQ36PqHhaVpHwXYKaEU",
  "key36": "4NFDrUfX6TjnjH2JARnNcECJCDqp3VvCwFiYMUrGSfULzd4XVKh7yKdM5bsTtyYSCzEprCxv8jaHFdzSJMVkSJae",
  "key37": "jhvjLDEi5KydSMFgjnWQXVf7L1NLqsEUMcXymTEr21FAhD8D3AJhdyLvgBFxZibkKaxrnUZZcs9EhjuNLcScAmn",
  "key38": "3W9tz6Sn5UC6yDdZ2w7pmyyfzDPLvd2QCKkai8jhMjQ4bKxNPrFH2vQZnwWmSKXfoSvy8QaAKzKiSwpsZD1t9iFt"
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
