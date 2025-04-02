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
    "2md68FQJYYS2vd7prjzmgMEDStLCgPEKoWzkeTrygcAmZrJbojjkzasd4CbWGmU2NAFEnhKTNCkxaNeaYZnXeWYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DMbszakEdXYprpjr2DjBCTk1F23MCBi5Xbg31Eqy3jvs3MtFm3naYum5H3p68tPzLaWPV8jKqNZv8ycm5XZfiyC",
  "key1": "3RVP6b6AKgMBS8heHjKCJfrXCuZNNtEWeKSd8tujqjycBHUg75sSHQ3mdBP8B2BJHTS8bwTJBSm5GBy8ahF9qgHj",
  "key2": "BV3myaru9ZMZrQTHcR4zFDoiK57zcvuf4MfSsPNSPhmz5xEgrb2g3h4XLPRHN114RHGuuLvbDPJCXFzFuuexwBk",
  "key3": "3dFZVuUCd99FVFyikKbj4F6tXYr3Q6L9xi52Uaqew54joDGFCnxpNipqifwncmvmnyLBrPefSXCXqqADQV12hF4W",
  "key4": "2NPggbLjRYxbELQ2VnqPZyUGWSRpYi3pRicyG5kBVytLNwTAZz5pg48Xm9KwYuoXkpTj8nhUeg1f9QpH7kbcpRzZ",
  "key5": "2c8PhqPeBpMd4Rw2EK1yqvLn1z2UCDzKHuSwKdG74vhm4tFK5FL97vZWhMGrPjDYuUTaQ25uYdyzwgi3JXaENXKj",
  "key6": "S9nBDaKpQrCurXii1nsipCmuXenGcX9ix9QornJzfomhvrwQaYpeAv44iwPfd9ABZ9Yh7GmSDDW8cQTQDDTDXCE",
  "key7": "r9HE8eKYuNb6cXUKXayAuma4ey8pEtnUro3A9BQovotcmHdatYpthbKEKPVe3fdc4SxNjqNDCTNV8CMbqDTryxS",
  "key8": "UGQebTTAbxRdiZoSJWNzucpVuVpz6B9qfkiuxufa4AG8hJQfzWaq2fV7T3E6bz3NQupjjdsnCxGQRNu9B6Sw7GM",
  "key9": "5zyuh7iAouA6ZtTQdAXs9KhcrbhSa47ZMjx9f4HdWy8fPWExEauFT28EeqbD8uQ8fiNKP15mgP2wyhMt8E7tYBxR",
  "key10": "587HTFzS4T7dVip68Mma1PCTg6qbGXdPvzwwjtsqQwtipmfzykQDRzBx1xEkbaJZZ19iwSEKvC8EWYZKzy8qkpza",
  "key11": "iKFcTy2m2nkNANVKY9dY3VZaCFWqK6U6YMHYv6hA6vEbA1ryb57N3wYsahaAKEosCXt7xUSYa8QDY1PuEShDSB7",
  "key12": "2HeBdmnJJE5AfmfUXc8PqhmXDkRC6N1dPF8gQLJF14NdAZdTHjUmDwjEysKDSmLUdP1pRT6osZ4oVsYSR17ktxb7",
  "key13": "3PUWv4GKiMNozTmBvATMY7G6hbwZa1QtKNcrF5aAvTnKctFzVNemR8Xi7Cs1z7dB8Z57qeazC7Q7HU4p3Xj3YmZn",
  "key14": "6ZZ2dt1KKXKZXiYQeUMoAN78N8S7JQtS2ySKHpBHSxm6xe1Lt8JPdTSKLyCx8Rvn1U9N5LqNnQSoVnbhXFEmcsq",
  "key15": "WUCJ84DJiQsMEk1YrNs2XbHFdQVPjtMBeHV3BJsUobZ1eKa2PwiJrYHGQjZwbVtkVTwT4s166iwgoCbVzmPvmMW",
  "key16": "4cN57DWMn36dZ2iU67NpHSxiSD5BN8tr65cPkcfL498nXGc59KLKP3LaNyHjMgpoJ87GC8n4X4QpCoXzPUREaocy",
  "key17": "2Z28htf12dsfK1Xdc24L4veJkWFdaxujoDxx9zMWPkbcwVpRfgTsTqSYfqztqJWi8erShp6wi7UkvoNajggK8Q2a",
  "key18": "25zLqe3eocTFjtapaDzB9q9KqmGc6mjB8LK8E1PX1o3b2gRB12cWvTTyxWguPAxPZtH4RdmsJRNZynX6FbFtg5f5",
  "key19": "4HuX8fAkKxyfUiNEuAd7sM1RfqrpgrTzeCh8R8kQVZY4vufYyCHU8xxGegZbp6HHL4nqXKyAFDrKLpaT6nKYCX27",
  "key20": "BqG3JN2QXzyLU2Mteodx6J8p99NoyAVc97iKgXEAkrkBxEBsC92bu8K8WxRj61rxgiEFDD4dkuNW7aAeK23DzYr",
  "key21": "Fzrh6eaJfiS7iKZjCkab6o9nuLHqQuf2TnFMxvBGVPWqLSBZkEMbLJZS2fMuRiUrrRUcwvfeACG9ydXoxTgorak",
  "key22": "4bZVvQPXquLQVegFxjz9NeugjahRYHjnSwCPY3iY5u2jPxJhDy5pBJe63qoFk2TjjrcyPvBK2UxcAiES89ojcNEv",
  "key23": "5cMDa5UckM36umyH9VpqF9LKu5k3npedWg6UWU9oyrpSbNsKZEDNZSMNNCQ8t9z4y6czCHMc73PnZCtZz8HqKXAw",
  "key24": "3sbXh8tvGMyBByc4TYtVLX28k9aJ8tc2Jxpj33R7d953fhdvgtkrWxZeU8kAs8mjLGqzhq3RW2EQAuH9Cmec1dYg",
  "key25": "5KnFYFmS9J4LmuoiWT43xcW6pZJseBo97qZLxb5aHwUjvbgKbfR9JREapuMTcrr23GWfGPLfpTaT2gRo7L1P3SPC",
  "key26": "4TokU1eihzo8FG8yCzX78nZVeVn6aqkUtJSfERHBbR2Eu2u6URZawGEDts1huVPNRWCLoCwA937RUzNvDUpwtnro",
  "key27": "2nsBMnfmprf8aJQgAJgkFXPc5dFSRW3MFpJzC3ksJh745eD3ayaT1pi1BZiADKMAY5NKmmLgqifpVc32vJnvuxvZ",
  "key28": "32vUKCmLBdDcW4UJdRXvwfZ1erZPPRPZ5Ws3XDSGsfWBHMeiqyLo78cVmRNeHFaf1pyz7W2SLsKwcsAjCjWWs4aY",
  "key29": "62imgEYG7AwrM1JczwcAznnmjCiUfNHfjTt3pTuyRqq8YB1TEnHmE6TvAP9or6YTuAw2Gaj9HWmV9k27dqVY7rpt",
  "key30": "35b1DC3koFtstCrZNwSijjNF11qqMHn9TeVeg1PXkoqLAVsDveELD9otVS3uMsHvnAwn4R6TY8cmRMpomSGYuUv8",
  "key31": "EEkc7ryHWKcawdv8MeaRY7Srw3iHhvkhPibdvkzY9bg31XyhaAMqGFwa7MwDXE4avjrCNAWxWPBPHhq6ToCnrv1",
  "key32": "2NSxmS4zcMryy3T3RGRMnPJWbH3vkNEZeoUtfJjvXntdFNJre9DwVXqrXwtnEGVoKNEh6uEi2j1LVweT2ihPbt37",
  "key33": "28pqEoqXbjQNZibR8avtiNwC22bXGg597oyd8G2twF5wiezfYWyUQxBZJJLimJ2iNznrsG5Zd4KrENREvUe7G9r3",
  "key34": "3QSShY56PvZDxSj8SHdGMNnkWPY8jKAasmjxDL91YRzJ2qWU3PG5SmutzZcfD1ALwWuNneYz6cH5P23GtD2M4xns"
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
