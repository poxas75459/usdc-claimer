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
    "pXTwRsTvs1Du4mjwaoPqFWCGtDE7uQCmKvnhsCqNbZWD8QZ9cbgd8GfHJoihYZnooE51NPLSYFd28h88qKsGGfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21MuFhyVLqSWJybPaV6aSD7Wm3dRKcSxfF64RswVyGfMD4f16TD5WpjAxzqPYcjX1cLG8ecaEAxM9mujMgY5aRB3",
  "key1": "3Vwvi6gMW4GCVgNM2aWBV6MHU4HqGCrBufWYcCRjxf8VbKjwwr3QT6fnLWPy8xCiHtJfukXQX1xavx9xf9424KzN",
  "key2": "ePVWoA4KxehomnWaWUksQ69WdtYktXzCynCeRRHe6LQvCmCE16MthpdtMTZGy1GsKMnSZYkBTTJuFNjHSmSfRgZ",
  "key3": "4GdReway4mMCiMc41uSJPjo1xCsYyrPj5DjVC4kV93xiiZ6QLfJc7h63jUNoC8xzVaQdyZrpUPtsDMePMLKcv6D5",
  "key4": "5P12boqN6CVrmb2gb2vUJzCV91Lid9TwuV5aVe9eSRFBZfU28LDVPTzssGLPJtQJVdenQKRg15uvcR54yrrth7v1",
  "key5": "5qaNdRN8BzrkM3gbG2cyPbNpAXLjuJyAvVHnhkmdqUNBp1kNSnBrnYYtSr19QYPNU1BisLqFcMoPRgjFULvSbnF4",
  "key6": "59XgydjbhReLrUw3wxR94pPP2HUSXrakfRejZyWsaKAMuoCPmbNxhk8tDTiQrwQ4JzFnEq4HW5Fo3RkQQkDDTRWx",
  "key7": "4SPTw2rCHE38CWrCYnfFdbYDBJJrjS1o8813jdT1BrcMwztEiqT5LhcyibbhXMnFt2uqZbBAjVJzsGNu7JxHGfV8",
  "key8": "ubcnBMRgEqdMunQrZE1k9wzvZSucMmmEd39MQNMyN1PFtag4vkCjhC1ZcHGMXsGxJ9dyyrcyjQQgGfwS2ehNCv3",
  "key9": "3442gfqbu1rg4JkpceqXANhpKhz2LnLwKddEKo1ruwqAxPy5vJatG2Vu9UPyZRa19d4YfFsTAKrCns3UPdTSREdH",
  "key10": "2Rb4mbwUJm37YnN63C3KReTkaobWu2tdCnLRsxrc2kgQ9s7QRPEVUmSoJZBqhKHLSH6Q19rZzJioyPKTxFAgpTNP",
  "key11": "J6nsYZK3YL4V1GwnQqbMbQ7puoSMKeg1Y8whzrTLuF8L95zzkcX5ooXBRsPifLY1Rgna6GU5Pq7vnfrToteaEVG",
  "key12": "2GaMY3JfTwdCcKF65CEDmnhkkZ548zzaipqGugugHvR21A7TbqkwdTpbFoZ6SxAkRudQ8LcUevGyxiv7nZbfgVAJ",
  "key13": "3kCBNTPwTAo8p5o9o9aV9s7XJSdb81iRBBeR9JYazfSyfn12iierHpAFcUv6jiU8uLavKEE6g4jLyeAFYTLubtPu",
  "key14": "2EdbwaPRVkBhuN3BdjSjtWyWRXGkjs2Rdv58DqcjucuZKCNX1Cqbm5w11UtdvQdEUNZ7J96HTtB8g8UXku9i6Azk",
  "key15": "Q1feKRzRuQ2CQsa5H7r7gannpG5WMDppca29ZtcyKJBpFmVc3YZ1T84fnkb19Zrks5evj6baT39yWWc895R17d9",
  "key16": "3ZB51pfpVPJ8kVih62RecCpkw6tx8YgCqw1snMXPmUBmaSk1oZCQEGvwEoemwKk44rpZufX7ytSH9BWKM8itZiTN",
  "key17": "5ZcFnKc4VowqactFnv26XqQBeHMyCHvgsvQ7KKpWaAYPuA3jGAQHBwybG5b4VezuzCnR2cys8iE6w1UfpdqNLdwA",
  "key18": "2NLwwqepiM2PENdsYfAeGQjXCxjMLNEAXaf8PznPctQW3hMfR2oTh6HB5dYyEBrJQef8P3fKf9qYTrBQEcbLVfid",
  "key19": "2i3sLxSNqkYGXp1Y4i2JZTJPCprLZc9eayVj8wz9L5xiPRFdLttzB8uJu6wBdPTxXKg4zWZEkkXaZtrmF8eSimxM",
  "key20": "4Y5WdCrqePKHApEmE76H643WMVS9VWpd5xHAP2U7ogF5hgzA7BxxbynU6Fmo79FzBQum2hAV3hafsoBRHC72EKag",
  "key21": "4WFGSdvvZiAFRMcV31AkmWNXYZWHM5xQWHzi9VxV285MYix3bBpYrNwFPyJyLJfARpHbzbr3UQhi6Qifjfpz2WdF",
  "key22": "58MMiNqoe76ADbAde5sM4LqC365YkUusSLYd4CSqYB2bLkpU4GkqZ72KPyr7zvjtBoW5GKPqaYZ3ZBkTa5bpLX7n",
  "key23": "4aNP8Vq1ypSRwA5vadFnAFsfJscbiRPtspKqggFRpzfi52D62SHQK4Wv4ieYTh1gGJgMuVcwNryVK1SeHyaUGncY",
  "key24": "3X9dVviSB6xBx5ihZyrCkHqckCAdsVNSnvTyLMT4jQ5ubvj7ccxn3WZdJ1qCp8Wm2REB7QYBo4DimUagx7dWYPYF",
  "key25": "3fy9e5Uy1jcJDvGj8PmLvB64YsoMCVYtxN9NbbLfJV4GKa9FvkJstfkS2R2e2f1DQoUF6c4esTjwV5bPSmadDDGv",
  "key26": "5HGLzYTCbgGyP7TiY5j1JKxJoAgh5VVE6CfBPuMdTADd98qjpjE7bCWvtY85XifuFDk9SKrJgW3uBVKMhHFXvCvX",
  "key27": "3JwhiXpeg6XPeXpRY6huDiYxMHv5K1dmYfsczgfv8pyh3rXfq2CRjvJPGmohwmKjZqFNCMBhbhnV4Tzb67BuFKiF",
  "key28": "3TuNUBqDtwzvdf4q7qxrEjv2hYvcPVEeikL6tTKfiaA2NG8o4DXzazGAXQhtgsnsSCxPeZfj2FzsbvK6aSaM1cJA",
  "key29": "4dU4rAZhE3QBNT3wMYyXmec4HCavSvk9n51iwh2VUiYLEVppQbz8oojt4JvMuPqQc4Wqp9CBnzJLaCeQdrUNUmmq"
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
