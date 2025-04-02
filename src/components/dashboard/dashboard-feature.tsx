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
    "3aocRKppieYLyr3dvfRxjkEgDqoWHyiWJJSNTSzbFgTuwMctiFdp4ctAZsnnmcYpDDERDVFDNjJEFVehfR9Jtizh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YWpn5pz2TkzhZKjxSWRodV3Y3QVuzonU4knWcsbiiJQAKCSXocW8A39FXgD2FvjMQEb3DP63hrKS39EVURVTALg",
  "key1": "2WSfAHJVtpnVovU5k96pD2bGNYXYE4swS3jWM5sD7HhqxN1Jq1qUkvfVgPPNZJzcTNxKnx936V8u8is2uiBRBov4",
  "key2": "3hATV4zZMqo3QvcpPdc72hb5wzaGXkTRMLRSudgu5Fwzmw1kpf8kk3ztAxtThP14QQv7WaJka7HirWN1Xat8CTga",
  "key3": "5juacV9uAV6AjrmocCejQEoM491QZniv7TMrnFdXXAZbWY5sqyT2Zcha7sWQ7Lh7KhRvjbu4rWcLUrFCTbpVEdHk",
  "key4": "3T3UHxZ8wHBpFEuBALE8uUQnbcUwQvfQE9DQKhNJfDNg8UpWhPQvsH77NpsjkgHRQYrj5w8QLEMHo17qUY1GXCRz",
  "key5": "zUfdJhZMkv6inwGpYUm89amiSJjSnQrJt25r3dWCzj97aYAU8i1MtK3WLyLBDQJvqXcWyz61bwrhErETRjcDLas",
  "key6": "8RsPutASHpE5Xp5kcZTCN7oTK4zRHqepr8WeZfBy7pVbsNpYhJVYF5peeR45JaDXH1NhDbEA4yyY21oEBgULV4d",
  "key7": "2aDznGvcUCqBhvujsAgP3vKgMw8HrMv5aGBFE3DkaEgz99povnxwtSvSx7A4LqvaJhhbBHrtAvfZiiKja8gtvGzY",
  "key8": "4X2AtLCZBqx7dw8kVjVyhnnQqcHPDq8fRsEuuRavuDYF8czpPbFZ6sTVf8WUKp9SYEQ7Zof8SXBqkhwZ4WEUidZT",
  "key9": "8inaFcwDCE5oZUfBX6gBnfQNUvCnrFdNxaUfw1rB1zummgTVGhZt3m47ZPV6G8Z3L2AVoapJdvs2RyPA7T3ztJB",
  "key10": "4vYBRmgoWoG6QKb8CPLdV5VMiHUuSYixV17fWe5CUw2fdEF5kzJzL59UZsSNLYNUfNw3sJp4SAFWmrsAQAUt2yHq",
  "key11": "35XEPN8dhUq9tMupKmzWhrt4KMmHNAWnwfV7z1HNmTZxz5PvYRYzjTbUZHmzGSooMXGD9UUe2rG25xLxn4dSext9",
  "key12": "5oHxL8gvkKBtaoZfPiEKXSdtDMzwQ7wuPbn4MdshrJdrk97i2P2voDXkK2c8jsxSb5i6AjC8RUfKTSF8F1zh2dNC",
  "key13": "yhirBaXZpCcj8NGn14NPzjL5sf8w62SrRnJcbd9fQ8W567KvHSbPjSAUJ8mSVACZWSvjs3egVWKTnwoxgZHgbNA",
  "key14": "46NswPKTnSs11a8MohwzAfoEZPyiby3jubqxyxzXvwyAKSWjBysCXYLVZ2gMBtX9VSu1X7Mj95tZvdrvBhdeK7Z6",
  "key15": "4K9rUq9znrTXMe9hRAAhBaZqagrYsevksRFTsquQbq19QMtKvscUukrXVMAKizfYvDuqjBD21o3am6GLaWbxHznV",
  "key16": "34KQQQSKgAZVN335sgjoRtKbRsRYMaZPHp9WFDcHqd7ZX269dBoXzUtBqt1UaFvwvb6UQTbnnZqJMY6h5zo4aU67",
  "key17": "3hrzmYo76Ekx2qemX1iPV7B4TMXaUPFQTKMaEQu3a9vWUj98kpJZPsNwqUip5ufTVhrkojMgYqNWQuwTueSQZddb",
  "key18": "5tkYz66FBVymLVve8EbFdCSJk3RU7CwMEWnnq7m12S3h9WZEcyoK4ZiFXYgf5pSqi56NDTyF4i9H867EMU7z1L3D",
  "key19": "5syTBxpyAM9vgQhkNPYkErU18NdS6pxYzuAcq3qRyrHB1NpEdTE1gMPY8aWJH9mwSq5L1F7WDQEpBQh35JoBjAEG",
  "key20": "4uxYkktXJMcVzhSJ2JtyUbEfdgKtUEyk1EbGZQF4K7XN7bpzLdjXvT56vYrAeTEBL5DVmduZWy144hpWTtnbLCw",
  "key21": "4NAJ4rfVS6TT68JJZu47bfx2LSMteM6RzUSgNzW2DjPAzRD7x84hh9TgVzm2383Bhjr49GMkH2GWjQfPz9Ra4FyV",
  "key22": "53LZYbNKnJRB1F5F4DgjC5imTapvZ44SX1vh44Esb3Rt6FoGJtTwPt55wLtu4dG31oXoGHNfvCMePss42aA6tK9Z",
  "key23": "5Pd7JRm4RXRUEUvb6CefuHWP3ud5PnWf5szrcfhs3hddUjS1eH8gDgLd2yPKdqNAJyV7yJE2d2qzKdheDKw3RfBi",
  "key24": "5qpzTh619BAykjFhQ9uakANkvU8CZrKpwQAdUKVs5Ggk3K4eeZCMSXfyDiqMiMTQQFAhzzpReKM67aGkwUyGFTNJ"
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
