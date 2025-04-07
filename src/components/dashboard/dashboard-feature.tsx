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
    "3t17o3jWc99qPDYfFgi6niEc48LiFPpbaxWzyzXeGTMr53SRzt4qU3ZPDwgXPqPPdjXCHgXJemDZMwUXhUon9qbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w1DNyhzS2su74yuemh2yrCToW1CW8Adx2aRWFs3tcwAYCU18tH1xKDQBz9eUYwjHcRq9DZtWdXTDe5JTD24sPyo",
  "key1": "4TrJYcwAXfUciwNoUSwf3ZiYWVdmZ8ht1w2WYMoa7DqNjhEw5ZJigujbJaZkaEVVQ1NpSrHz4qznEwYTj8Lrnhuz",
  "key2": "5YgH1EesdT53j6WETxRULoCbnrNutTnYtYfc4t58cL6TgcCDVBvECBkxvPovtiCBVeo2Lpn1VQFUeGhutxPLjP2p",
  "key3": "4SiJeqGWBLDEQa5KcVKTmEQ3B6DUUH4S8Esc7AChBkDFPwEYNGgsCJfm2kZoM7AkqfgyobUrNey7B5kHjxok8USe",
  "key4": "R5xUKkYB8oET4Vn9EEbwDXw8gYwexT3P1dvVWMPB72qeCbrSUvUAzEe3DzGVhidvR9Fr25Hq8EKEk3x4ruBrz84",
  "key5": "5GnTjQujnB6jeTbwVHv4aWBovNmVVGdeR3WHRaECSXyvyACneSkoCjuwdTz7cuaFesPiy9xnZ52jDj1i4gDDGi3Z",
  "key6": "C3DgbEpduG3U9t67pYYeq5Eb4MgCGnqe6UpqCmZMgGGMYxbigD7Wo74NUtUs5d1nX5S5oQHxSW9PKc3TZpxxPKr",
  "key7": "43AB6TcBQQnpQDu3oA1PFCSdGM2ge6tEVb5wD1w3D8Xu6Yxf55rTPx4HrZYCzLGNVVrrmVBc9KLtEAv9aZp1sEYw",
  "key8": "4923zvnasUc2L49XVLooiJ7D6hCtuc8gK1TWbzvGY9US36LWNfa228Ljtt373TsLdoQVvERwnhMbBfLuc8VRgb5C",
  "key9": "51GkrC7KYmBk813zqbywqAKHkvpnG4bU9YKdx2khpN9XTdcu9urxKKdmgGNLmMp6Ef4ApYHDpbg5jCSA2BweqAH1",
  "key10": "3xpAC9xRZSzRSFofH3zEYhGwiDsJcR3dEPXXFjWhScUw99uab8wABmZftnEfxCBLVqywAS7J8Ku9HHYraY5GjZZZ",
  "key11": "3KvrmDJdA9UzSVbk4F1sBVT5vK8ogkVu9pWCFkc4T8uoagsW2jfmriZssbQAyWPqWMjwX5s4zQrKSrJdvcA2m8hr",
  "key12": "5KEjXRoXR3ZYvEbFRXY9L3AAdJ7xK7FAwR6frBbDTWj7pST8TqB2eZaDwFi7AJ73uJ1z99w7ieh3w2kyvpUfQk7A",
  "key13": "4pCmGSTSMeGVKLxzVYckVBragKNdNdNLKU9guo1DYwyKY8C2VNqAh73VCbtLywoQGmv4FaD8QxERrwSi3K9ys9Z2",
  "key14": "2SdZvwSkkkPqidzoUtX44FSqAvdtP3aHQvPeYBLQi7cPwHxVnAnFhKY4Tm2fsWpFa3i3TezAKXTxNgJpPsyaYnjP",
  "key15": "2i36bgBSigz5Ss8gdKBD1Rn57zCPVmVoHsnSpp3gjHDPhZL4wbSpXRkJX4r1gUWhHYEniHn7GnRB6n9S6Sg4DYko",
  "key16": "4e21LuYQNfN7TEos6T2AodJYXKfH9Wj3SfLAetiqAfwjhYs7frC5jxwEkwxTt7MzL733AYM5dciaf3oPmoYhEvZP",
  "key17": "5S2vEkyCby7Wi1WDYi22gCKoZLxzYffVDnzqWMQeCjuqji48Za8z2ih9qaassWaupig7p8T4cYRnYtq3AVeYkB52",
  "key18": "5tCutVyStTJ92DtUKH2X9uUKyywQzse8UEF7UnKZYBiHsQqDeEBFSoxqAHyas5ugKiq9vokvEgwanJfG95iZe5t1",
  "key19": "2RpoXnyvHXx4sUpfzB5HbkY3VqomTTFDYDfbMjKv8F2xDAR2mgrqpHcgR2PDSvaxL6aDXHkupeJP245SxqpNku7w",
  "key20": "YWWJCBjMxRv8w8uh7imikoDLhLzd5VbdqeqKfVwGPEYE1su5kzqpxHw7b8aFsak2TppyxrSj3g1pabuDSTDJfyV",
  "key21": "2NacpzG8oRVLyPRRFiXsCW1UZNpfFLRopDT5KqQfAjjtKhE4pjPkvyJJ2rXPRbi27iJCCJggvzGVAdCUAqX52aji",
  "key22": "5k8zrihkPxU82GDwgxJPiP2jEK5SpMECHiZCbbyKhqB3HFbcqkmrLG9PzjTKHT562VsfszHTiPF18zuQxUoPTBuA",
  "key23": "5MgPioqwgy35ucaJ25saurme5ZQziYRnR3i2rcFqcn4CkRtXmZmYBNeTSFyPe5TktD6XK9RdRhAaQWCHTo4XNfJi",
  "key24": "3qLoh57574uVvvS8tytqxixfHuSJExeK6Pjv7yQeYMgAiJdx2RAd9DcLhNuK74qPoFSct1Kh2xYqknnaVNsRwpA6"
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
