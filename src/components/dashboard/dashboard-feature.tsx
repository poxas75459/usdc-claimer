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
    "57GW2X9qz1UGHBDFPAPyyEWTGNy99mxSLq83etY2CSV8bJ1AeGDJfjQ629wLiCtereGcquqySqLyqTZCt7fxQCCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ez4rJs46NhbJGiroMeXM45o8kfbeWA4Lkde3vLzSyBjaXv6FnUvdjeAyMPJhkmmmj131Vr6BzJxgFfjyy5JoEXu",
  "key1": "2e5kDJ719JH9xGZhSEtWugaUrwLeJSG6g71UcTUqveWfFBmF44qJ5g4shaZa6UbLFk1LVTwczuZ3ZuPZqLLWPvE6",
  "key2": "3aWj8AMgikmAm5nxTCQvVhXvpgByYCAmJ8xZbDWR9SKEzDfCt2aMQYnFtu1ZyAyiRU5yjTU3vfKoPSrTaLNfgFSf",
  "key3": "3zprrR1FyLSVfqVouj7g2UT1bwYSwjjoo4DZF55v8EYcpNyHx1VHi2cW3Js7QDYMm66rddCn1ZPww2MaSRN6KXYT",
  "key4": "5UxW8Auu6bbDyfV912MjS3Yp2a7j1awpKpBohoKb1VLqyGiSSEQTk3mMeBfwztDHJzqygRWjwKyyZTNsf55ocWKv",
  "key5": "2AQ7UTPCdm4FLRrq2d5a1SUZu3PnZULz9V4x353JnDoXRJtzz6j7nbR5vWxFf86DyxHAEzKstw9644yFcLRtAotK",
  "key6": "5YY3qeJ6T9y3qe2fqxbusGtaqFFQ1XgnZ4scDQJcbXbxtFx8KEio7o2FmNER8MksEXQZs67BqfTh1EdSDYexKMNo",
  "key7": "38Sy63qAe7sdhRZHwd12js7V7rBzvHUjofS7kfQrUDJKp8fxat7kGdr5YRAJzvSD5ESzVVGuyi4AkiNwKM4hYp6o",
  "key8": "3VHHiBdTsfSWzJ3mGchSCeb7aGme6CVMHuC2oiWtjMg1R4fmfzVB2ToHGcz1C6kd6FhAhbmKk99micoi3DLtXmLy",
  "key9": "4FVc2J5UDHF7zqeG6PUf2dof5EKRHwTPeh7nXa2sEjVe9S2kZy1DU1vwkcEYUwdXmaA9MC6edD55W8aWq97SUA79",
  "key10": "3dZ5uBhBoo1DH17BEKM1oRCmfqJHMbpRVU8swUu8PvCCLVpgJuRpBj6ZxMRbZQ6MEf6QfoatETjmh5o552BwB7gU",
  "key11": "3uzYm58mmQQudsUg5K3ersuMaVSFPAAm5ghBj9KkDfksBsK8dG2dd9bbbBkcopUoBUCoTkW8K1w1cohfBUo4hAF2",
  "key12": "3KdYCzDzw7ppDCp39A5ZDoQco1mrXydHWFNQLMwjihHC3vj9F9Pk74jy1ikHUkmgeLVD62hgdYsBka48pi3FWukm",
  "key13": "3AstxmkeyrCGdeg5vmrX6Th2aiYW1Xg7ckExcm5DnxhAn3x6jARbdXtbHf8wR2syFRB4Vkx4TpTxNsYpt6zaCDm6",
  "key14": "2K2ojRprugmXK8rCeSbkwa13pCoQHc2BTPAbYNbteVojkF39hTFhuWo9wHuYMBfc2ZdqY8npw1YBJTTfmwJhHVuD",
  "key15": "4qrtLXJDhapfDaYueTByVcgBujbCiG4TVJo7SSAiFPyqA44C2gmw65qJfmXorvpaVintHYk114Q3ebam3uMohshe",
  "key16": "fqUG5NJeLXSJmGnNxJi7SbwHmwhAnH6KYLfcPoA3VZf37G5Y2ic46vvPpEauk7QtWuzKe8VkFYP2QjjFL2L8rrY",
  "key17": "45NjgBWcgE4MDpE4MHKTJVuNgD2r4TowtMHYNsdp9B6rzuppBUZZ5fKLSKMUTE7cpKMdAcd5skFsjG9Ewuf8Vtbt",
  "key18": "3TggFV3HCEUyx9f4fo2yhkUxD8ZLNqNFLkhXHW62jvM5DRbb5KsQTw58uJy3R19L937m98UpuqqNAEcXu3CGn4HT",
  "key19": "48EBY8x8ah1ReEMwfCcHsCAox79Egf4MiaSg1rpNdB7n32XiiRMhkyGswyxFeUuJXd1NhBsZMGmq4Q55mFaAHwWh",
  "key20": "uaVoBngrjBTccah7q82LZG1YTH2VMSfqpzt6P6bTab2BEeRH4hWY5qw7FhqxB35F7z4Mvr7TcrbtHkRFj4MpY5X",
  "key21": "51aonj3aS7M61KCPFrxJaqFX57Ud9qyDNJsT4ajrEFtAZWS1fCi7capGfMHv6sWVDu43se9Hcua2zYwtsaaUiiWu",
  "key22": "5dfgKh4dz1XVb2KNRjgYKuxjfiJ9Wv4bfMnFSayk3RQkAGuh5hWVdpCpTrpaRV63VAiMDXfFY3GR4po8e7ScHPiL",
  "key23": "5kQb8RkdzndPMQr8tHxjvh8XrxNAdwA6N85PQMCJP3U5p1UmpMj9hqbYP9sXru5knAdfBjwaYY8jMagSQyscV62r",
  "key24": "4JgL2yEXuRoCBwjH4tDYFZegpZxLpiTiAmf2wpJNdYsNXEWBy81qTjhwMzWPdFzuLUg9QXe8cnNeR5hnEnhGHzQ6",
  "key25": "5xuU9zu19umXchw4endjCdg6FZLeoDGcbMPt5fyPqk5eHnDG3p7Eq3Yo7VsJ4HtY4kRKGjBUgSFywH8njV9vb4TX",
  "key26": "vRum8dF4Ddw1EMB8Jg6rCQybDSAeJ4ETxp4CKu5zJRvRbiZDhbbvEXJyAeDs91AX1TJUUdndih68PAnawDN4MZf",
  "key27": "476o8iKcTT25dCReStztJEtx8Vk8qJytrMgrbBV6HQKdS8y5Y3Tj89rXHMTuiAU612R63Sdq56VwjZ4QJZuPCAwJ"
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
