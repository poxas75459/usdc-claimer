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
    "5yTyuRzCnGqofPU1hEc7WPkWHtznovAycnYz8sxmSGqe8Ef9CbfitmjF7eKDhkSAkb65fKPci7jayL7aF7WcTqjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSo5xkeZsktRsBnjRMAhQHrJWCEW4AFmJBiXrvbEDffLMswEWsXRX5MpXFjfkax3SxzxZEG5gC6yuNUA1pe3zpV",
  "key1": "2aotoea7BgK8igaXqtSTuAZEPdzjZxXHkX8RCxoeUqG6LeE8bb5ydk1zgAigFkeFMwy7wbRnJgmHLmMjtP3ART3Y",
  "key2": "UFygKNkSX9XZ4g8CJr6TSjiBUYp9Rmk3gF2g91vyMzwcSYCSjiTHYD2D6XDDgtZNC2bbNuUWqdNkkTxtuh688Tt",
  "key3": "3vhjKcTzLeBcmc4dQt2xtLgqhvD8Tv4aFmL7Jm7NRNS4w3mK83mKD5jtmj4dpPdSQRNgZBTPeWjesarfmXNNcusT",
  "key4": "5U92jDWEiMomsoFpqFRMoJ1a5YxctxKo882K6Hu6tNsmsfqBjxRYqgR7q5icbNx34NjwPQK29h29jwM24R425Xd",
  "key5": "5TwUiMC8iUt7zwvLJF1Brm6ZRWJjFZ1mMLWqVhpwWSnKtVY4adAFjF47X3DDjSxk11Qy3VetErKTQGRqxbUK2pgq",
  "key6": "53MNhbTqQ4bufSQoZNbQfi7s391PdZ1XTpWmMY5GoZX9vRscCwEd13Uo8b6Emn3jN4vgCAp9vqArVRFbDzFCd6Tj",
  "key7": "4cGkq4LSC8wzNEjeoET8Ugw2UKarRDwZczTV3sZKziWPs7CSPbhdE3PzNRZAcscueKUvdzKCiu1zBGiMP55SLMBV",
  "key8": "5238CF7bUn334fahuBuYgv53PaEERce1C513rtgBQFmcNNnb1YFAV9pwPqtijDjBE4rytdNYkTKV1Y19ChQKh59x",
  "key9": "4TrZfaLZUyaBNJjbG8t7Ur6vw52GgNSDyP54MGqLw2EXkUwKkfNbXsbdtmw3PBszLJSZeTuLMfysgFerRjR7rcko",
  "key10": "4ib6fxK9kMR481HhhUcxApkyFhqA7KeYL79QKxBTbohPZpp4FszTbDUkCAwjscpVFTAa1X2RH5ohXsCgxZs7nXsK",
  "key11": "3AbRm49cxWeyDLaomJMm3peWuVLJZCqvX9noRe6X5roqYfVdVhdjpvEt2eeZenLhf5iYL84BDSh5dmpAHJ4Nnk2p",
  "key12": "3Vz36GMr8HtxZR8tE6NN4TtRC9kGNsnCnv5ydWFmXNQFYsYG8DQUWz6DsvcX1BAp7YGq8W2W912JD1v4jxYBdXT2",
  "key13": "2MbyLf6hBkpUd7yr2gYjbxUEYuCAPpakuX6gUv1dVHCjYTcCJwyWDVDbT6tqJNmLkL7MpcDL9EQePYJpu8r5Kov4",
  "key14": "4sBGBe814E9YiHHwPZnEGr85CrmSdtJmQGuxWVsrUJxCQECZxm16FhKGg9NNqB5jA9NZ9MeoupRV2YQpEGgXTx44",
  "key15": "2deyNYsjCeMrK9yC3o5gn8y5BZA6qcKw3PH1UNQJdNtR2ktHr7zWyeig64Uc3pt4RHc8vhWURcY4Yq8KCi7ioTfu",
  "key16": "4xY8zczn3u8afTE3rWv1CwiF8vdbWRHhYP7k199RinirEBr91xKLe9p5Bvu8BPVfZVkSnHvEy3dVVPdf4926raQT",
  "key17": "2FodkvZGAgQYWYFi6q5VCJ6YPd3kNk1AXJXFqK1N6bQYZFaCvW8cJ645qQyACw76E3jEtpkUtjnDZkc6ugkr7P1",
  "key18": "28ixwHUUVmNgoU9dstAQ4jgw8EYjbqRN81ErADH2g7LPgWn4AgT89v5kfrSNxxMvHoB3eRdygd1AfdCaUwTowDPf",
  "key19": "4ZpBgTR9tyafnB1f9vibfSGqrZaoYmcNgPVsZwkwhf5iWCXpfW6Po2AjaNYT8czy6rYFETzb2pHDHn6jBfN1zWJq",
  "key20": "3turCUb8N1QDiX16HNqgngPeTE742qe97i3vZAeSq22nND56L22hyBvQGp8HPthd8XRDDeJzjzAjVHvLZuMeKDyM",
  "key21": "5DTMkWpwACyQoriNyhGg8XCGx1ihfKatTJUaQ6v8xp6VbXLM1cKzBKcNdQoACgtWViTjHn5FJENDABSwC5UFVFUg",
  "key22": "DqoMVfyvSWjZP3DhqF9yzAFn9RuPGdKG21ZEWEVrUPViTnB8QJkiFvNgCUT5eZwStnZficNFBHSTxAjiFZs6WQE",
  "key23": "5UohJPSZuAEv7ba7Me94rttoYJVrBUx8MiSCzGwvuvDH9o8y4SY6orLjntHFtjDKnB6xbGapfJ3FzSFVoXMCx1KU",
  "key24": "3mXXJfWUEHRu7CY3JyMMroxdZnHGm9qagAWPHNcB5tPqUJycxAMKgSVvpgS5cnz8j2W28JEuzrTVhZCDkZKrCP65",
  "key25": "HnTZPSzXNJfEXDq3QLBwAM8ro6tDF8ASZsQAHNZRjbaZKBmDcB5EW7PPHBwrafuMWXAE7CJC4jAkLezykw6hp74",
  "key26": "Qr8nE7J9egfhpfJAdTSynnTDiP3Sk3RVT3Dh5qBa9gjta3kNvV4pZ4Wiu4k8vja1GbPK8p8GroSNGrUPvbFbCor",
  "key27": "5cQ4bgezLg2QtxMtWxjKYq7rcbf1xP2Tc4Kfa6PfxprwX7nTyxkq6BnBGrcvfvfuH8phjhXugPw1jDoP6241gvSg",
  "key28": "5y4FBAWndTxtQ69wbmceJP4UsL4NzLK2YPgcFLpEz6eU7iqoLrrcTztVH3gL2E8VZLRNNrqKjrvYeguEi3zapK15",
  "key29": "2mEQoz3CBucc7gfV19SrPSc887m3XS5METHpeA3vmfv8BngDBjbc4xCBqb4nR8zMjj35budQ9aCHvzwPLMPTKd9u",
  "key30": "244WuBgaJ4p32Mp99YAE9XBSbdz6D6hfdxLrHSwZRE7KidVaHX3wrNr8n5A3meUK3XB2qna513DyeCJAuqTjtnyt",
  "key31": "53PnbPK5u829WwtD4DuQcQY6MsRDyWEwhz146TKc3QV4gEkXf3RAskJbVyK8VBFGD2KRJkGWUTmqQtdHjMEbk88K",
  "key32": "4Xgka4u4ZWvF9xYwobA3SG4YdoKURLACKuzhbCw1HREiwGTPAS9z5EJUD7WiiEfgbVCVU5pSQm6hH9Kmzvk853AN",
  "key33": "4zcfoZn8DDa66PSSFXgqzJaXcH5bwnihV1QfD85w6KFS61ZbtaUupJzHRmtcvsk7mkbcUAWuopN3hds3UpxuMcGA"
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
