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
    "iAXZ8MPdPDMgaGK9Tc4euCFNYcJ7EPQ7keKdjqocGfBaFF3L4AoQpJ62Y2Xqa3fvF797QWh1yUQe563zX3Dczyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31tAQ7r5cQcQ4JsgLHB8UjgnMhDNbLuEg6stRRVdUsPyBHwpt7itoDB99GHwYGpwLqGLe76NvndpoZxzZKXWn91j",
  "key1": "WWFTb5Y6j4EA34FJgznasDtTvHb72Cn8rGxqkdny3QMwzLvxNdRu7MCqV39f5qF8u2htia282jtXqREKRQMZrfD",
  "key2": "2hBJE3mtY2SA8A7izgd84hKogtBwYtDWKDYeDNmuVzrBqMQ3rtedrcGb7PCQzNbBw1Ut2K65TKQ2P94toKS5dBYo",
  "key3": "5MqR4WCMrHBnwewLRuAXat2PpPLshBUaRmegjMdEy9RqMhDeWmfq9ZSLMEr4v86VHYnkT5ubyF6Dcpbw8N5UiX7t",
  "key4": "4RmBN8mgG9jxuaYk8YFACxukjPYfLzFUvSjru79T5gspnMCnBHLPEbQcooy5kCq7Jwvs1DcgDmnwtz3wPRf4HJcs",
  "key5": "61etFZaK4GeQfnLwNdfRMwP7LNUHoCWc3AcxBPRkdTPmxvdbHdW56eWUS3JyP3LoZNW4nnSL1ZHMesc2XrbvghZp",
  "key6": "4FkC5L74MxRTNSFVUBdEWQLbzRhBfHGLCaro98UwnPdCqjf6f5DRTmgvtprAjSLj3G5eEsLhqt4QZadKn8StCSe9",
  "key7": "3t6FcLhbcHqmNG7nmK1iDYQC4djx4BA2XQ6FAL5kiZ8GDGhJ5JUAmgeXrBEfdsoNWrVWHGag7FHs8uJ2XNQqhNgm",
  "key8": "3cZKMDTS4qaSp34dzepaz3XvL1Vx9KtXeAmGzLEp85V6kyTQRiEczhVicD724CPEaMbrNMe5s2ZtQD99yqBe8cFa",
  "key9": "5Wt8MMURkx3Tj7e7LaaSN8FTZGGSK9R6si5vVGhz59QJevZ5aPjHQUww3LGNe8biJX4bSE7XBRgpHiqkUyCcoSqB",
  "key10": "5wPWsudVvoESyEFQYMxggzgqT9tuyEVQ6Vj28xUi8yGiP9JBmYfRWPGD7tsTh3tG6kcX7ybz41WgNiRxEbw2taeD",
  "key11": "2vo3LxbFa5jjHCydUphJyvjZSZdCHmS6M8jdu2PFz4eiAXXZm6fA5ZxiwRhcZt3nxuP3QTZuaaRKaKHpXXHsutQX",
  "key12": "4j1bwBWYkENLXNZxxa8cSmWRq1RToaqNRes6Ab1tGbhBMxrtYEB347XzPSqHs58REUACPcJg3yXBkWduLv8NMmyp",
  "key13": "25u6FU1z2PZshwR1dL1mvABWZXuCD5musEvknMD1kcjFjMPDMHPzpaoeVuURdxp6mBqcXouXAUrke89Yd4aAAWY1",
  "key14": "4aBdZBZDpWuC7edFcqsnv2sWFS55UZnVzniCqNBvrHgEJU7b4UFfXkc1Lmzqj5bVgtS4bYfixRnCpqFV84tq3j2E",
  "key15": "5g5xGbhyV6ZSgoTzMsWAYGk5Jc8d6zyN5P1vvYUGEqDzoksLHa5BvZG52nt5XS5vhiFtGcsVCBTBytRKheXR1KRF",
  "key16": "2fG4o4wfQFyvF21TNWkfbjS8miyHyQpfWHEQNUg38YoJ4SmUtmAUsMDeja725bK2DE3CfXdWY9HTufRBQqt4xogj",
  "key17": "21xys68zKkdvK3RG5FEHpAM7e2gkUoKPd8JgqhS7k5yfCap9u4ewChkpACMHUdD2onhrFQ2VjcjJvu45XjQXuSiP",
  "key18": "MZJBS4Lot7DaJ8i9vzThEFyxet52qEuwN3CrwMvAkUhpevxbo2jYK8RRFbWJCPZ9accUWQo5uESBvHoNDzLXuxm",
  "key19": "4cX9nGf6QXuhzSNx7Nwdph4RpHCr8y34tUdseCTpVD3zGsg8nhZ1F9W1LADkDR7d3Ls5BTZEPsuCgat19GuHxmx3",
  "key20": "s15dm5yi6vzKPFZZwqD8Lf2qfZjWBcLFpHNKGH5y9o6qzpSkKBBbiWQRszicDUVTQgEEKi9vymZTz7DsytdK27V",
  "key21": "4yVW8B89CQRabu8mrHFuLwtYNsgipYihuyTRATNrJ5b85K3uBFgH72saD6viE6etRfgZyDYYzPQSD3xni1ZMA8xK",
  "key22": "AjsZxBbm7aqSnnujJAqP5crPN7rYMw5rqo1Tm91Mg8HN1Gv8iqzWYKKw3rXNNR5iR3bhYwBfGDAyQFoMSMVxEy7",
  "key23": "5oPBMBQZP1FM3kJ1sHWxhReu35gkmjQSjpsFSNJxWCCccKZbFe6BasUfuLKrv8YcbWhr9jAXkxXMpf4SLWtHr7NH",
  "key24": "3DU8EznuTiXink7aeuV1fM7RfotjCmMVe8cAg33oPfdACmbKGucpxgLnHUb3RE2RkZmqxRrvy7DoEPGffvtHoxWB",
  "key25": "2UwUcBDudBhaDVQd8PdURSrzU9avpj26sSC6ZGnDWUbYnCR9wkyvvMa7tsL1fAcmCYrLsNdirY1Yno84soA48ese",
  "key26": "4Bj7vBB3m6YsHFkSf1nCCCUvtpZPfVKymS8sz1vtp8SvkFn1n6cxpfhbARM6gTY3gJmicTHmoZLLVRYTdtZ9DxFZ",
  "key27": "3VQU6tsTAFbLJEU2Mn1qf2A9jpPpy1MFhCsybxFKiTqcWR3bfuPtXbmkWKTJLzdpNke8hF5Xjxkd8SVUyYizHN3v",
  "key28": "2BoF3U4ARqBnY2UFgPCJZt3GeT63Z7uE1hCGcJ1HSKprYYLxZjFbNzyJcJWJUMMznx6DvL4AKR3AQG8axYPEwrY3",
  "key29": "43nN3AtzbnCjEwgecX798op8dqSmH1q1YctoZWojTyv4Z7B8Dm25WqhfjVkaK3RTdh9UGJAqTbfbD6tH5tvkMbSZ",
  "key30": "SaaF6CUzKdpWzFmF6mF89QrmN75HWMif2YdyEZk5Q16onFuyro5FpEnPFypS5uaXWn73psbha6Rh5m8jcZGhdp3",
  "key31": "232xY4mf72FNbvS5R3P7MLkNNFTcavW18tHKLGGuYzJ9sLto1DBdensyAH1YJPXgEJWQKYnMLEpNFhjaKYJBbRx4",
  "key32": "3wNPgY2wYqviAU1jGDbZbmbAQ29rMpnut8NFBCe8GRvF3nvYC7ghdrH51mky9zJWkqKBLkUquqYWE3p2n7h1wDHV"
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
