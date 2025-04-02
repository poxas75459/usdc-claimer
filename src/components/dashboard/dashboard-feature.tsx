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
    "2KCr8hXpqdrNnNbC9jzFhxGQP1MuJRy4Yh9X6CPpq4GSdkKTHoCUcVGXxhXV3DXYdCYqNb62AieYj8rKmt5VBZmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "npbRkJiVhPcdgBpc9BfxY56hxAvvUdbB9DEoRMiW8jy1vyNq11qxntVXJL9WHc6tVAbJ98U4Ffrm8fdH7TUjS2H",
  "key1": "4B9PxSHUzS6BDezaGFK3BbQWcnZkv64YTR1i2h3QMZQnu641XmvZhojJsVk9M8VzLTGn56RC4wPYDGQ4XR2Tzyrx",
  "key2": "583yiguxg99drMs6YMdzVAbmhpkeC1VN7KKaEnWJo3sT1rz6pt4u9usKGPt7y9KeuncvXRjYmpNQoCCbho7KMpV4",
  "key3": "351J8Yd3Y2VyTxt5Lxqiv4H1reyQ2yJbud4V8UUcqPS1gKU9UXXYgcgZSoc9cSbGWwWYzfwbfweJgVuQMt3HJQ7j",
  "key4": "faKB7ifZdRN1E4PFCyWGmbNwYey82UV29gouTmAJx4AZFT6jhMZCr3mViKpv7bCiLCz4DmmiDAbKFBBnb18BvN6",
  "key5": "5kAanTyUxHamEh5etpGsTj3rnLksN42n9pMLcbaTZoxSmSe2d9NxximvC86Bcch5nMEPkxYHjPZo2isRf823auDd",
  "key6": "5jLKeQAGV8v6WpxG2KaFeL5EABxWxhUchRzSs6oR8AuudQvjESfm8GPQzD13w42J5tga9cHBnCshWXCdUDPJVHTF",
  "key7": "5HTck9B5vdfNk2fCS9TtdSR4TrmJTkVj1RPQwDgsQFysvUPWeZ2Z1HSE7vXw68pSZqtfqPSzHs6WHEbzGCB7HSFt",
  "key8": "5PMwcVhofsreE1ZWwTdurP8PJqFUkgepHQPnk5ZEmCSs6Fykgv9nDe3Zo5EQovaTmKUnUGwY3rfkbdVmniGmwDkj",
  "key9": "4LdvcRACaxS5hx69ECCksEW6zh25yw3gYS1Tdz2hAvxtKEEfvmAWPRLguhm6eTqXqAYPhWSHf1yauvYphKxWoLhR",
  "key10": "2ziSju2UtsrZ6cmdgf5QSwWuXSmbh7JRre5ninqKYnLR2o38FajraArzssgRt76oY5JEXxwBNbhN8c4qmu6Ey3PZ",
  "key11": "4qqraxTb2QUEGitm6B9yvfhHn5xb2TLDyhajKjDHETxmVx2RCo4qdsdvwwKJEUtdEjLihysgSXa3gDwdk3EWRK9i",
  "key12": "5k2Hry93wGB9EdnLDvXYh9kPT8fNRnTYc4EgaPMmMP7gEc73D3YfD9g1QRCXSAF683myQC3jdP7fsHr6CTuSeRiX",
  "key13": "2RXNEpsqinL8KPaME1xpTxH9WZUSSTx7r4X8Je8wDCAdZ9qEnA11wmmB73avyAx9D5fwEwXsB1ghB4jZTSFoZW6P",
  "key14": "2gkNXPso9XkDSdxpBeQL5aNEJntD8tVah2CMHCbZqnaQedhW1FjyNWjCWKBRb12Nhx8ujX9mUdkgE3fJtGUcZ4VK",
  "key15": "2uv92GuuhdCXg8pQP5E2Q1SeMkyYdD5WUjjvhNgbExpEGk7KFBxx6PgX8YMywsvPc3wu7ZSf6UtUjDr8pDeE9Dqp",
  "key16": "5oDs4zTiELJRHSpYue8WbTb78zaQZpcM3jnzEwMhg3xLKuiHT12bWWpiTZcDYjW3vWXgX6rtstFn3bKAri4RUmaV",
  "key17": "2ZZvfFJyDtfXNbCBNM3QM2cLKvtLAfdZjfDqQTNQ2rmUgdfrBUeB17xrMabHNEftxg9jD6c2CHXGw2RWhCn7czX",
  "key18": "41BMRW3onsq3Vu3wKsQU3ftinivZXzaF35mAFYmu8B6Ht7chKFdsfBtydWciAakXXfaHZ4MShp4z5ZLLaP4tBrQj",
  "key19": "3Sgs8zLFUH2G1ua4J45fPSb6gdEgamXxfa63AYmfsByrZcQxaiZjHXwqkiez4kVracC4uCqMcFAujv5GgJ7XwcNk",
  "key20": "2PkqTG13xVMUobJSBGUg2ePDEXQkaqLUBuPK6mCbaqxMRSBPjM5B4TGiGbA2CxnvtzYa8dLypFvhKb5vSLhbcJmY",
  "key21": "2jQ71aSTSj1mrd1SELbd4ziKRhAqSt6nZFWrQN2NR23EezjN9XRRixyxqKEmS9wD7rgAKZAc9n3vMQtMeuPhLqA1",
  "key22": "2qTmVyx4ADbHXYJpQScWf6HNjeM5Y8i2R7mgKi9Y2qyeFzr5J372qEac388Qw7gZzFN9qDvKUhyTgD7emghZCVc2",
  "key23": "2qRrTFtRBw1upE3zhCWfAirMRX2RWQfnhQf2Y2LxQM2ufjwWgJsTKbHR4rnJcp2fQfGFriCBEz7G3K8qrUqgQtur",
  "key24": "5A56bnCMhjzviq7vezLiT7BSsJrWmo4pud9oPYnTxnxdjEPJv9RdiYc5d8ju5dEWmJNxzEWcQF4TjrWt1GGG4XrX",
  "key25": "v3K24n66SeyocF9sbkGCYpDHuSS4xYzMm2bGQN3mUn524ochuXRMV4spNqaaNA1CTXaiVqeRvQnaNCzAHtWbtsi",
  "key26": "iYQDAEJEQLEtEp8JGPpsm6wpRKbscX3TtR3EMRaRUVASngDZAfTYE7ydspgCmJ4NTHKko2kL9PLZV5DChKobxhz",
  "key27": "4z4p2DMy39UGEcQ2KrLiHL3PV7nw3tZU326NhYvX41vthPG4wXg9azPGfHsdd6sShwTfHRD7JHNWVYZuNr6SpDQE",
  "key28": "4K3Tq15Bmu33aemGybYVY7W6K7vMH32YfPzi9v7eqDFYANbY71oZz4p641WqPxX5xQbbUoR3QpiP8LQs21tzuyAT",
  "key29": "3fc1qX5bBVApnQdjH47G3TgbDpDvXvGbHSiCgfU1XiarZvP7iq2CYhsEn3gxqe1kttBx3mK5F3LuRCUjh2BqHqmH",
  "key30": "3gihReXkckNu5tdZYzURrySr8YNubboFm9tshuJwpvz53kzSNPJ5cMP7PenAX2ZxJRNaBUWRCLGSM5SkimwZNZh9",
  "key31": "5Gy97FHMLYeunAZ9hp3PVxvm82Gp7iC88tfPJDHUWPQuDuJPL4KZMYE7tV8TjYJYzi3xBjPNwAYiqbssnqsgWuAT",
  "key32": "42hJgprCPus57Zcj1zDRYwYWfFdRKtbhZkvz64hMhwbCQ64uUpMkV6ud5b3wYfmMzQu4A8ty9SNy3eDxPzvPe67Y",
  "key33": "5TkVjgsxifwRHnTA68FVzywcjCqGZxhxztAGWMiNXkfsMKjEK4SDHYM8g9y8fm2vNhbVQtAESREK2yReom3gbanD",
  "key34": "3WPJacTG8xd5x5mqFZJRpWUkybhsXz6ayxAP2rHeoC1BVKgjnDd9o81BzWhHzs7NzgsYHasR2Yif9D4rhNunjsSd",
  "key35": "5F1c3SBpPiXkva7eciymsiq5s6jn8khfYqdTFPGaruJuRfzXbLZTJAneZ2KW835rDqZ1sjy7FCowkqKBssmeWuBU",
  "key36": "5g4YrpMM58czHPVD3agn8i1VEJRCjAUfspV5UP5gyaLziCZtCYe8df1hUhEy2mvhy2otMKTQ9HRoFJVNUUSzV1bY",
  "key37": "5oHbBanHHqmKmDmJJJMGkqk8hveQ7hXmcx3HJcxWaQe6W4P1S8Xy6Cgh5yWThRPBLp2SPMG5dXNkunXcvsKPqwvH",
  "key38": "4KartgVdGpUiYLwJvifi7ULVm4BPkWE52YfyHQh8KcsuDoNjFXtEacmuDfn4sn1uZeJnB593yoyciZn7E2NDQyRt",
  "key39": "4PnqhT2LKgEFXkUJuvnGCdGpc1FCFG5yz45L61dmptyBwBqjzn2EWQCrTijHdFpYd23Wi7xG2GDQEcYopsH1g4H8",
  "key40": "4RQoo9DCAQNvYCS9zo57xcC2C7hftkhMuxTziJ4ZXWVpDSebA8Y2SeQT6iYSWw5m6HWV9LNeFLDYg6V3sb2w3A45",
  "key41": "27f9qD5J2kJcZrvQu8qcccWyRkx6Z7U857Rzn879ESZbHsCUeLRjw9npyXAwZWwQoTiCMFe1t6kBkB4YdtN3UrfT",
  "key42": "5iHuFuBFFhB6qXssDAZVwdVKvRAqrx2QzJ4VJx92FxTCHygGFpQbgyj1Fxag2k4TQ7LwLnekcqiN78iumPaAa9ZM",
  "key43": "3uWf1VhhstcVdnTexz6apFSkvbsPgnK4ZtyhgQW72efm5X3AeLEp4GtHuvE6iZHNhECVepyQoFGgUKS48aFWGSu2",
  "key44": "2x3tHFzFcdfByMwbPbsj9fWEWBB9fYCVbH21vT344aCYcRBS3smW6LD5ahKDHbbQhq2YMYXw7Qt7Nc6FZQpQ7fT1",
  "key45": "2u7BdizHCMT84MVAobEbonaMoCADxw8NSFFbeH4pECRLmsxQe4jRU4dbGyTyyjFeyYaZDD8hW6DqFcnXFKP2yAfk",
  "key46": "2kEBXSgPK8zhTxSFiJDFVawmPJvYJKixXG1K1A6axPCdHYa1GiHBCAmX3YSZaxLMwLXhgnShwD9ok1kbJzTW3Lvj",
  "key47": "cyHeHPsTtsWFkEWKaKiAX21iDtQJE2EyLQz4kL6fbimWcpYCKHwD7JRZSdQPRsfQFMh2CGBvXwGLbyeXq1iXrxf",
  "key48": "3oi4a27B8xvPK283CjvyZDW57U4YZG7eNSXpPbbRro5qADKPbMyWwtWEwex9UnoEFcHpDTnUdeXNZV7TpSWPeapN"
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
