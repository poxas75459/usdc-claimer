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
    "2tyexRBDRX9BMUsawCRK3ChGQTumDSkTp3zYF3LgExv7Bt44zqaQCxDSgpKwvyJJZ1PivwYGYEfQdcxSfe19W49s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VnzXcd9qDQ6J84U3jyg8dpCZPsajfSbVaFtwwChGAyfFCDW6s9qy2NH16fT7bjb7FVTiYGtkJxsQJMxaaUjjJUM",
  "key1": "5m33Lc8w19CLcmNCZAfseSrKktPJYKhU2J5QHDw8TGxGGpxZtwKcjzoT3Z3aeqdHnZPawEbrztEZTBVeBFrgf61o",
  "key2": "Edy9m8ymdjUMkiiMBaJM4Nu7A5WK2N1UAd7Ut5YATXFCvPAviijbEK1Je3DB9z1RXqxCqV2yco8mas28tbu24w5",
  "key3": "REMSaLp3hEqYgLEiQNjXepmzYaDW7jmCPAzj2h5EbPoia9vJm3WS3X7KJgubJQfct1jvdTeYC3jxgPrKk5Q8daG",
  "key4": "4fzSs66zJo7MHWsUfR7zE7gMMUvpvSxu9k3adrUuMbtwTP5xfqGLM6zfvvGyixwa1HxkMTVUWYFTrnVQhYfecgrH",
  "key5": "4QiHeXJEVxvW7fcR9BSfLDXoJXffaS274ATd9xM6553WiZD7MTvpnpSi6AaEnVSAX3itRpcrYVq1bbHtpGYg8tiF",
  "key6": "3vMDkUfB9NssxmmHcpppDNfJosz8gky6nkP4N8xLuT44VNtFPYPDmkdCaU7CSYVnobJakH6wEaB5MJRgBDdnVB9L",
  "key7": "5doTuCyDw5RetGxAbKKfzXZqvziGhqQLiXhjtCV6rJPgtH7oeGQ7zYhyU8JphinEV7XSKmtv7yP2uLKkZzmtePCF",
  "key8": "4RqiorqHvG14spBGDLVjBEMkygjkYgQtw41S9WLTPnyW8Rx8d7ARteYzecVM55i4iM85QAf56rojrFH5fMHQxiqf",
  "key9": "4RpDtfwG75NfEMyjzUmWWotBMJiCn79ouSZ55NQtVRRHfqHAgGnJeBNzP72h185JT7pvvuBVbT2DG4jWnfG1Wmhv",
  "key10": "5DXS65HNyXwVd6HkJfzdQwrUVF3FrFMP57PCjpnHc7TULusi1APWJ1aYf9wu2szyWXhvknUpDC2UV8ixC78gxM3Z",
  "key11": "5jEhk6J5jmx2USh2k816eXMN2GVZpZkdjVD8eRfYUAK7waNWgMi2QyK9vAmRozWAUgdKXuT4jN9PW3v2fhZHbqUZ",
  "key12": "5EAK2ZobWn1hBnMhGAyodzq5sSxhojpTjqpicGHg5Zooz16672MD38ohAXvMofp9BtNxcdzMn2iWhm34DPvcKtnD",
  "key13": "3k4naAQ6Uv8syJExuX5MWy2V4hauTqmuyASSkktxDftewmYad4zpGktK5ykvC2rLk9bNfeoGdrzjToBXrN6b184T",
  "key14": "42Vibuf4KcemiXp5hmMYrZo1W3AALxgDwdiaZqgLNPrg9k66zxM5hDaqnHDVLSpsYCccoW5as3SYkL6AzNQURyTh",
  "key15": "2YtVYF4nREeQcY4LrpmSHeG8G4r4wafWVBxBKhuSuNY7woWQkhfx52SdMeywLM92XsSy9QsrPVoeB3f9x1GWzbhG",
  "key16": "3yX3pVZgpMDgAs3aSqoYJUj5QQGZgmyS2RCduJxdXsFq77fqsDMU4LTA3aov8tnw5eKnXu9cYrwRNzCAzEBub2Yb",
  "key17": "JvAJfK2xJzswWbEuHMEURrxfeZxRKAatgRWqV1ufusXvigKm3YSLhsmhQbw2RoVQfVdtAjL6Rszwb4ncxb3SVSL",
  "key18": "2rd2TrgBKQ3Qx5fWFLVe166F2tT6f4Gy1Qn8BE6YqypSUsXuALKr2KkWFgmCNyMtD66PE7bP3H8RDUCKzN2Xnkay",
  "key19": "5fDvgfrdavC1FtBiFfRt11iwehJaX7SC7iuVoSMGF7zHQP2g2zRFCyYU3mPiz9VJ3mTqbbGTN9Rxoz3ZS81kKVHX",
  "key20": "4yiMvxo4xbVcy8jWcFRqREebeA3yRiniLQi6an8XtLCVebm4SK4uMrKTZwNFBKDcBCTALQL6PpuaEjBzRWURjEvH",
  "key21": "3zprKYcnn6WGeW5KVVXnYS7v93ds7BFt2Ut8iVoe7pEohqpF6yFQK6F8e57MbqQ71tj1eEUxYb66pn1gTiBsZpbf",
  "key22": "5sLgN9vdxrsFo5cHU4tx7EUgg5ZpUTxFovPaUKjVbDDxJcqd49v8QmMF423SS4iqwpJiQRKNYGukXZjamVH25coa",
  "key23": "75eGPF59g4ubx1KyKUTo21At4jCGR83tE8Lns4iT1t82rQ5wjYgfm2eHZDLL8TvVuHPmcqcw1htPNVR2WPF52qz",
  "key24": "3Yq25DGrDkADzYggkrig2C45BgiGzEkYcrfLQAAMfZrUqbJgoX8zREyuecyLLTkE6LrBbs4m4XTt6CcLiUjNGXsM",
  "key25": "4x5DCLa7KRLq2iu1tpAJdtHVVqGLyiSeqTTxDpvYomvXrR55GsumAPGMjQyMhyQVWuA1XSv7Uq4E3JhLbyccjg4i",
  "key26": "Tx7snUZDR8vxYjyBSHy49d3uDfPChVNd3ot91KkJAF1a9yiBRKSf3inMvVKiDW6r5nRU4RGWNi8FQEVJan3Ntgi",
  "key27": "4d53ds2hCnMcqDAq2RrM9oPCdTPdM3CTC3zQ9KMpMWREfkQdWU2YZw5KfZD6qniFqFj1KkAJs9qep7v2yp7hEWYz"
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
