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
    "5XmaRooaKQrVWAFGev36Y1Wr3RP569ChM5LFRKriDg4LYwr25v4LTa1tpRhVAfAScmKkPdJEuQ4ytTx43oftv1m2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CzkkgkyQb7U1HSyo52H8skak9ZPpYiEy8QCeva9GyUzTUsXVTzuhSmzqNbUwPof5r8ZpQMJk5cTTf79yCQw1tdH",
  "key1": "4Q6QQcguBaRBGUQuNu8p3MULH5VnDzZV4qTVNn6eex8UQvbNQRYd4njRUwMwEmjdyKoSXATjwhPRDTuZvvoiVXaY",
  "key2": "3RDV8fmfYN2UaoF1xVJG4Z8E5zoadeGDGLTzNQVxrjsmKkZS3X67hjh1wmESKwmzKGexWdcVTiQVmkv8aSJYyoAG",
  "key3": "5QWoCN3m9QQ8RAASCurSjtTw3oEMBup6eFtBFZ3rTCQVkGsBgqLkhrDVMLPS7aMDGA8FFfTghEMuEzHvCNEuFTCn",
  "key4": "44PDsgY4Ty687Y7aGMvm71mWvt2NtwXfHE4FMrGRNgz33U2SUN7f8hmiNeFmNmUwiasBwVVbJeKZkdhcquLV1wfb",
  "key5": "43t4GkEpoKGwgGwhJYoqcrXkkUqhoamox34m8ZA6gZSS1PGETurPSdWxdVD6oHhiKfUdaHagHWyYNMfYznnqDaj1",
  "key6": "5bFg52V4RsHHeTYVboBf7VinhBgjbZLhdPiG8WRokaA4GSSP4nbR8q7Rna7JFwtdwQsLNTknsEUEs1cWhJchuPJL",
  "key7": "2fXVoMJJNUTAXujvGeyY5dFyTgWZzXH3hybbGpxnvTAisevSdQGcMvNGhg6dsp23WKyKvjJ2G4rgucVW2DaKKnNJ",
  "key8": "5SdXVzHxHtzJifKWEvpPoTmqxvq6JWEuTxAUCR9R999gXGNzkEgp6FhCPE73Hrj69ZhY46YA6oFX2QdXf6c9Ebw6",
  "key9": "9dQTByeCSc9uvDR2Ub3HQDnUk8tXy3KnY44THM5zNZCAbXswQzfmmMby1qbaNfyySVYP3dfGyusR49FRFQZFZxu",
  "key10": "2FEzewFbFYnhPS4S5oSbf2uQQwYkXyd2S66cv21wCaTLnshoxnqs4kaK6o6RWKDU4riRpshQru9KEMz6kVKWyv4h",
  "key11": "4Sur1ViWLRPY3NyT9DangweqU13xy94t5Qfos7JTEHLk9q5wPHZJmaTZGWTXuFcoo44BM1ZEm3vXzEdke3JptrYp",
  "key12": "2sQn61U54AwRzFXS4bP2wE5yDP9pu76eNaMUiYtQBRDe4g9YCi96L2rgcC97e7KpfSCTMy5A6Ci5CZkvNv6qeQjs",
  "key13": "2WT63DcjA4xednq5Pte9kL1J6Fw3H1rS8A3cn3DE5LXv8QLZVY7kzhcRbGaSUkDmctsP3vdd4Utgh9WHHGQmYxmN",
  "key14": "qapJAvUTHkoCBDVeZ5F11ABCJ8d5V7KNPFurY4jkdLV5Wgm9B8cRzFkKz1z4LTrw5fNT6SWvjeeQSpLAyv7jeFe",
  "key15": "8nJjrrV3iQedYdvaSxtmSRuiRZwRL4RdUFUNtm751rqdi6cnNcwp4iF1DBPbs8NdF7h5Q6ja7PD3RAGYJH6U5pk",
  "key16": "2fAk2F3762kXwDkCgGowxs6YbvMX1ivLPRW8xgzwBb4dReftK8JuQ75LDpJHB8F1oDMq9FDkHovyXbP5S23ukno",
  "key17": "2CjgPGhxAuxic8MoKh1ivma7vjNGixCNYG5LhuVXy6AsaBvLEyoqgvg9Bo1TgY9M5FbAwgnZJzwYjFnNpWKXFpfD",
  "key18": "4cX5F8UoaYkwev9MMhSxjt77bh2mrf1ZfoUvGwdTrp2fZU1hmJUMddtwinq8HYBPUR2ja8ygQtwgt2hhGdZMATDf",
  "key19": "j6Y2tGmg4YWZMThVURKAAKnVkjNUpzvaG4QHX7K8jRs4uJxeUnVd671vaNPihskJrzn2kV41vM6gWUWbWzXM6cX",
  "key20": "Lh4tF1sbFwWY3NFHxjshFVjQcbpSonmv4LpdxkcV5zbDbnLg4XLX9287XRRr9pJrsGaVhqCqmpPJ9yFLvppKJLt",
  "key21": "44WJFpZAzUzGwgb4cjRyrejBdc8BQnHFh3G4L1SFwJ2Cdiw9ZWRy1Vk5qRu7XPs4m9qKfnXGKdab3aB9ZqK7cJr8",
  "key22": "3wBs5sMRKvXsBzfNePVUBf1ogq7bGp8C7yL7JREfTEBFn65CAYTamuKRLNGCNLLzSBerKHQd1QearkKrZaJU6EbU",
  "key23": "2bAfpAhY8K61W9MLZr7ncJks1fkMKzqEVDA3nA4XbaziZ1Q6oxhgR6jS7SVsJAKiXCtwQBbGQR7b89mT1wbxj6ZU",
  "key24": "Taqhso7f8ZYasasKe492D94KxteSC7ioYnpLNB4Rz8wJE3jqsrPq8g3HBy1CWo61DEsFXrviWMo9uJLRKHEiKzf",
  "key25": "feg25puKQ46Ye9ZtcgJme1xt1ocrQFAkrDavj9sEDqoowHQgp8d4kLYdUnUdwU3XVjz8U5ic1BBZBLNGBWks4Sf",
  "key26": "611gvGEpWgBi2tUHL7Ao2ucztAeT8Qg63kosQwNWMA6Nu1KwcYonyshTXVt412qSbA9KR2hzghH2xsy9wm4TEnna",
  "key27": "5j1Yoojr7svrp6iuebiMHCD7RtXF5aktHUsdSaFRnCeoQqe5QWYyqAgPeLSnxC6q6ojLs42KzZFcgVkQjAAeezub",
  "key28": "5aoBpBjhung1CGajo5e5UGJAnYKnwpKbjctt9FgpiaDh1rnxtXEkK6R9MHyubYgq1bbiUbSQxaGbfnubKBYzv4ZC",
  "key29": "2GejCEq5mCpSbYF7BDWcw2kWC814U3JXa4vSrqxWt48MUW85fzJ7466dyDhgcgrkUQk9PTW4zZbcwWyhsZshLhvd",
  "key30": "365YYRXqWSnqKmpXQCwBqC1FPQTnvL9N28piMDu4rLh4s1uu5ia8ku2Kmv6xBwHbYpmLB8vGUCw7cPcqUkytZDNr",
  "key31": "4y58BvSEM6hJVJCiiGQ3Lgtxio4z4SAaRwYbJ6X4DXpwhSBBVPAZD5vRMQkKhNnTSaVJz9dtYJL7mLP28FXuVdWn",
  "key32": "oT6TJPZnQzA3L2f6nfnG9osCUZLHUon4GeSukYPL2M89Q7nYmzUM7LDnuJbAWGX5DScF3wBXWidhvaHed8R4jBT",
  "key33": "5oR4zrHwqnJS3Gs8PHXFrc2py9U23VyKrMdiPQiRAVnEbHxP9Zv7kbggQorLpNA8UenMi9gVjkRsjRG88aZFsZwd",
  "key34": "4UuZo44VGqpNUGG53xbsgLYJGBd1cmsRB1APyVQvb3jEiA55m2K1DeAPNhmVd5YxBmaL4pwsDjxuQdLkzPEnctmL",
  "key35": "5oPUi3AwcHREbpQsAVkL632rYnEeFSZ95bYQgkd5tNmXspDyk7Bgeq6eQ417Sc5HbNKjrcxSq74AENFocH19UAMX"
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
