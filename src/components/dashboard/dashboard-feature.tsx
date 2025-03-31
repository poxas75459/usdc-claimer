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
    "2YQMh22ygmSTnKwEXWvjn8mQjbp2eEh7hnXA8MWRWWJGVEu2P6qVG4N9rAqGmcQoAjHCyzs4zxeiG5tuCRq8vjgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RzhMctTvX8fMBBrmDZnBokhsVLpy1muARKKnLXxs2CgzAsQUTLhVYbTppV6pzwpXywP4um75z9WL1abBYy5yod4",
  "key1": "2mkAD2t1b8Zy2SKmBDM86aDrN2qBBcCALcyTHUzQFuWbH7DZNWhScoe4gMrR7AgVdrvzjks1XgbTYbxwscbKw83j",
  "key2": "2vtW9CcYLASDFSEYBPw1eVwdbwaZayq1yYTPea391kwni9m2Ns9fBaZikKG8hrqtYaa9tr79wyYHZ9HtppndowVF",
  "key3": "n56H5Qdg6ySYkkKSzC8oqJ4fM72ZRFhtK32UYYgNNEGpteTbzHtPu5y8xGmT9tkKpuqxTVpN6BWowHxkRWabNFC",
  "key4": "qpdkbJiy2aCsENN9toAAxZHEKyZaKy38bDaZgJCn49Ve3pRydQBD9fwtJnb8xFDCinrBvJEQovosfifTgwdA94r",
  "key5": "4wNLi1KkS1VFFeQdnYFUrQjb4BSECdaoUQdAcLNPh7Sma1o3TrEWg5fjK5BMYTmKnwEpedN9WRgoaWeVBDkmDuN8",
  "key6": "4CCKdXNYN2mjnr5Pp7mvkWB2WpisLHTnqC4RXmW6tmWbiNKeAbjAZcxnhQvsD3z1CNNGD2RjGN3kr5rvPiW71CWP",
  "key7": "229gReXSi8jsbeX78zafv7tpqxUnmiKQ2Po7Bi8DMNYJEzzoxTLWfb88PgwNm64jQmSF9o8VNT2RxL8mbcSnD1A5",
  "key8": "LTReUma2iCX1WzD55ody4JqkGgEsdqXr7UYojSRRshxwUd6Z2w39zFLUrpyT1rsN7jg1BCFkBNJkCKnaroH55Fk",
  "key9": "kAWErCcGqych8niJmmPV416dHeSGoRYz2ffr6q1iyG3UnbYuWhjVRdce8fpN8RqhXPgVzFXWo1TVMrPMzhEzvnP",
  "key10": "sWQN3KD5GhWTnxbKR4xGzoMpGqNtYfNzwtepGPvaf1Csb7uiNV79PuWACztxw2xWkypuVPhfhTgyYrfY6u1Fqwy",
  "key11": "2qfe3zn5PQSQuxvXM8Wakfqeb2iyyjLr3DP9Tc2j2rM3ApfMLU3ajuhgnonJ4zZB9J7TcnPBEG6SdRTrHEzq2BJ1",
  "key12": "2o1y6NS4DrLAw6YnLWu3g5Jvj9VCq2JodjdPmuvsNZ6dSVumNYRL7nMksH9MH4RFFiTza7dakdeC2niVoTKgHt2E",
  "key13": "2iHe5ZRxdUXJG4eSpqvirXRFMGw5B4JTY1ZT9ambJB8FfsrGuksrD3TdL4tijvreS4ZemhRgo1U46TrAB9y5BWb6",
  "key14": "41kx3s91jgSmosHHo5ZTjNkV8Q7CjB2ganTLeuySMJ5TB4d4XRPJcz34SvG1RvmJwuv32JdAexXW72mKLosbzEaH",
  "key15": "4Sh38pXXC7pRRkv1AZ3kbVVVqB96RvrtFZQzoEJNovbj4XKQDhobfV9zeWjSTLBBkF16Vg1Zx84Y4rPE5AZPGw6X",
  "key16": "4D3H75AyV2A8oP8f9p8AyLtvKLd6DqLbBwmJyBYt1CxCnHSLuPK1ewEtbuszMTCrRBMKPZMm1SM3Mox9q1psjfjs",
  "key17": "pvyKpQTW5c9E7kByZyCKTBj3aSf4E3hq81Rp9zUBD2VCS1CLcctCE8qhUTAfvtGt53WGYoVQs6ymjzGgaKfii4z",
  "key18": "NZQGmkXarVwTDrpdUUsA1tuAWPKxeFrt7WCcUh6somYYJYCQ5rLqac36giQAR9PoHZ7KezaxWxhf4t93fHMVjJB",
  "key19": "3hQxXguomz68gXD59ETrNzPq6f4BcgwHUfFaQAGMWoZmhZhtC6T4uUCNvFyxET8rso3xZi9bPL6fa4iUhnRLFecj",
  "key20": "5tFdMhX5shEpPuYVqRqsCdbPu45A5qoUKgwcnKAqiqGLHLqhmU6QAESkjqwykdWeftMtVJBLQEvnvypvXs5UmU11",
  "key21": "5yGcjGZxGNeHcSou4o4CQq2ex8qjNE2rC2ApaPNk9KJp68TWX6kxZicstyfvRYyKYaaisM2EZPZQvDQ5NKySd3sk",
  "key22": "jmDMDUrnrwxFD86VBRcBocRQuREnLCRUuD7t5MGuHeQe75FrqzvGmeruMqBxzrbxoHdeNTTF52bjHqtf94W5Mn9",
  "key23": "2ZWqS1iCBtnq6sFXN7XqotXv13wMsdQR6dKK3V7xyV9sio3VowCgx4qFZtbnCjWxcHW3zTbXU6vxZtrQ2TxBfDaq",
  "key24": "5YW4NJxhuqKGTHNckJUuUWmthkcLy3NLfZsQ8FuPpTSGu8Cm3cnQ6x1vFBgDc4tvuRZgdXjKJWn1rKt19uR73qmW",
  "key25": "3KTVtz7DfbLvHXTHSxvHcFSusnA9chtJay2AMm3kcnkcWmenSVqyC2aNW3QE3D2zvFDeB65ePFtvSAr2mHrQFoBQ",
  "key26": "3SbgW48KrBXUPPfJ2gKdqDPLHhetREVu8H4buWtzxo7SJMUJnUTQaqRRfhUjL9uyngKjCiPyCbhVxhn7teZsxXH",
  "key27": "2BiZG6cdK5b4DaJHdy7fWvJ4oTqgD9kxunxnMJTMCDj171PRzenVBz4P75CgxatEViz3rfTay1rEkXoskhHpXBwM",
  "key28": "3ghreA6LoagPa6nXNAhCarLG7C4PqPL8uZKXLzk35ZZzA1hrXkrBaz93rVNh1rk1vqAmMRQdw91SWJeMH7BCWJbx",
  "key29": "5GMygd5MfsFKcqamYkEjEBEfqvNX5ZA6h8TCieH2zjHbocKm7475iZxc6aybZK7MYRYvkjY2BHESheXWPEzZQgA5",
  "key30": "36opUAAtqGcemLvvK61tqapxqFFDHZ66q6YWT7MJUNtoo6s5dSroVZSHbJ2pZMQABofSD79wA38UoNJdLhnxaJVM",
  "key31": "VyrX41e5JFTbaYLM48hoCL7KPQdd84qn1MesHkyujFGgnzCwoS4ZTFHTCKQv1sgrFVY7mLAusnJ5PdPBNDY16YP",
  "key32": "5j28yocLtQVdjrzqFpgMLkc47GHWRhx3gUiW1Dim9DSCpyBHFesC5yXkEbpZ49ca4D2UdUd9DfpHUQ11kgeM89d7",
  "key33": "5UhoU2ARxuTv5FaSCXMs6tdkxZNrN86Tdsk8o913dMyBAqLiqqVnKCWQQpCMbnLxSEDhrM6t9d2M84Q7LaRsambe",
  "key34": "4fenGvzB1rC6tkJq4CwehADVxPDW6k9CGSpodt5habXyEBLXGS7C8NxxBc8vXrGtzcCdQRQyiUJkTg5BzNFxZE5P"
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
