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
    "3QFPXsZeCqVAXGfNhWuNhdN9VjEypuL2HW6i3trww4VxoeXDKM4niGrBqeQpPHsZKSbdqvKreo5AcEwBoJmhPm9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hi2abG68em78FJZ6s9T5qVXG2B8naiRUvP8xjY55Sr83x3hegSUtnP26TTASkBYiZemf7a5FrT6cyuUC51LZUFN",
  "key1": "2kK9Yrteu4MViiKEoDtJuZ1aCMbTqAmVuRJBiGYn1oMpnjBsHi3QStRZkjAgv2cYZrk6DpeYSicbReEjPhVZ4hpu",
  "key2": "5J2Ho5onfGBTPfCfygzjDVqRNsa5BuT6PYo4YLgpjMUPJHFibopqAKHVp3nuo7vF7T41ZroWBCjenyYCPCvhPDNg",
  "key3": "26XeRdLvx8e2WNo3N7wStBSa8ZytrD7sX3VVz3dWkNPc4NpmXcMKkXK225f6o1HXZ5qfp8oVtvgeQZiC4doh4k2F",
  "key4": "32YESU9qkCp5W6LnjN16mKjJAGxWLqxjHVFrJsrEhb9hcBFDWdpPMS6cSRhBgVqDUt2hyGaos3WytTXyi7ziNgYq",
  "key5": "278LhXPD8of29UyiFRjjwM49655r9XmCxUxZafWLE7XertgQZ8GiNYYjhNBbV7Bz3mBMn7ZQJKvedxra9gTDkkiL",
  "key6": "V9hesywr7DUub2T6rBGm8QZPwN6HYK4sFuJbDCagcQY9UKrNri2v4pJGvUVDMYuAXuTaxSt4X4nVwjUZxG8ygbJ",
  "key7": "4FuXYTXUsczkUKxt9oF1u94HZcypA5XRjyfXwtVqaCZyGLUGLguLAVjCFz3Yf4YDoVcEE1utr2NLbok1y9EKywqH",
  "key8": "xm2Afk1uQeZrHXMbCG2sCtKwRhT1pPNLeBaQYUniWPagiH8pmwkVVkJ7ZVFaLLehcdY2s4BTWKx46owQqsAkzrv",
  "key9": "5ueUDxsLrbvHcoHa428DFvQAjyoLWkMKKuubBBP2tnHb1z29gxtLJN91YRoxLiFdeZGjeKsYxfJqiZnCApSn6yjf",
  "key10": "2i2AV5SmTm1aKPKGtLm2i25Bk9j6cGHZsT6mUVnDUPSCeQ6DsQH48Yf98dJ2GtowE5WiFbKcUm9ycFb1cfEjfNWp",
  "key11": "4Pth5EHY7WR8RxGpctyfvT6QdQnJg1FTWcAbMC1qUU8ysrDTfzfRX8XgDdJE5yHzHSY2iqgAv6NMvf5Ah2irwApW",
  "key12": "4zwMBiAMqDgf4phcezAkERtZr8TFfq69ziCf8iZ5CCTKt8748NCmMh6m98ppEvG13DkVkK5PuZuhCXNe6D6j3GH2",
  "key13": "5p9mwYQg1ADSaYkws4tnCbbxUaTHia3gLULRKiztLYzr7vceYownBvLvBgjvgguaL9CmvUVEPesXBfyuBSXQmorR",
  "key14": "2fXUgce3cUg67opbSM5dJYSCaJgZ8DZeFGFFmkDusjavz3rKctmGrnW9GaRE3oHeeiM3FTZX6rRtnhH76EUMzNsu",
  "key15": "2KQNonthioezTXzptVUmogGwhBW7vnQShioYsiebA1QKEn97ojy3xSG7uQkJLwfNe6W6Tz4qCpTy5f5ayR8S4Xm",
  "key16": "4rptUYMELZkSN7rfUquDufxS2TVc8yaALmtNsgtCFX9APmeeTDPaCzbbtgLnHA6qpKk7JAJmoYPPJJRfW8koyoDE",
  "key17": "5DVEd67XxXqNkckzTAe8byYNfPxBkAkPiRryAEUnkz4ZGGttCk8483Umavk7rYCjoSZxqMxiVTn4pAGaY89xxn24",
  "key18": "AVhzHq1rKXBNK1div6sfSXXqRGy6rXxjRXH3WLgiLoZLxEebRbJ9dGtTojPv2yorjLu8tauesnhzGinkaWbiZFS",
  "key19": "5aTUVFZGASAxJ1NsfuD3fENKsZoZFUuG15kKLFm13zpR4BSgtgR3kizASLh6BTMcQnLBVJZVtq4kGtYpAHsaNsyb",
  "key20": "3jQoCe63R3GcuWYZNgrMKcLzRTSwd5wTgBXcVC3f2GggKed87yaZJbuwZChgkKkzh77G8D4cFyNZoWvnE7eLHFkm",
  "key21": "4kvNmwBcbgaiEmQS6dhgQubidFpYSj8YrVExtk76JHuPQpDPJbTf6Ji24r8jva2e3d9W8qFUr4jLwTVmRrLuMEH7",
  "key22": "4Wy8EEnQtediLwuwULnH2N64eVkEzjbp52ApZ9C2FdcK2ZARwwXjyCDaitowBs4qsNpeH3nvL7rnAEJBNUiXeZJy",
  "key23": "3e7xZ5vozWnAQGjA8GPz91zxFHyP51ooScf1EipKyg3DVwdsRfsv1tnn6ezp5xW9Un3poMnFAHyzuB6aG6Z1k5Jk",
  "key24": "2GQdnVb7H8jiUsRkzDAZzbE51DtzM11cQ3en5W7Jd2EvL5WbcNQ9VTuDPRFuQ96Ga9pEDxu19cFQxW9RNWYjzQnG",
  "key25": "DwGBaNsAf3tx2dWJQrXJzJ1BAzthQhyC5N39mZzmhKZbqdmpymNeJyGFvCJKYHWJDb6AacNkW5kPg3amRobx9HH",
  "key26": "5wfTdTxV2Meu19RBAFssNEB8s5GMFUFNvKEGrSU6kBbui4trYo8XhxLN8FGufQDXdsRTb63M8sVRMnmz7YNHdfH2",
  "key27": "459sEg4Y416SCZj7P2srYRSrf655MGSequa7jN1qHs8vnXzKyFxreuRkohyNkWdTyCpQBtvZEkLYmqQoqvr14EGr",
  "key28": "5hmoLS8R2sqtQgG3aNpYKtUYpzUfk6SbecMSJHWRG6Awqi6gRQPgMV63zirkYuN34QKKgYGi9wxNr2pZ3KyeYpa5",
  "key29": "4z7wYtLyVQGxG99sZtaMiqzq7tvVGypLmCcHAckr4Scw2ZaeJMa4fcPkYH7ff3qxmkowoy3Y3LTvs5w9vJYNrtDx",
  "key30": "3o7rHcAnoDoRzjBuePjaLU7wLVVuc5d1xkA4Hk2GseKEeiHzNqY44VP6sdtwLhT19ZPHv5h1Tu2pnAGmVYmSwdT5",
  "key31": "4DFMovYCABYmkW5eFsoQpxzYsSbyrq3dGyxfMiG8V4zKZZaBgAVdSGkhSva2GJChtK2UDepj1FHpvM78TEEthuMz"
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
