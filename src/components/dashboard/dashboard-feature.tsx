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
    "5zrhF7aLTyBjFFho9py5j9cDy1yoSANLkgPVVjYVKLnmxg29kSDV8peaG64sSzXEGuEYPe4nXwUMGgt8cQW9Xg3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rZYaDEydaA2Aj6Yp788gumWiPLfcvX97WyukZt1dvoGshdM1zeaW78jKfTXEMXvXuCuum5H2Z4kM9q3CNnt4oLM",
  "key1": "2DyhXzCL2paxSa3VjjGT3ctqaXYgZJqxfCvc98vLHX2iS714qXBgtNMrXy9dzyy7s8ncFdtGLPHM7mZFcMgH5jEV",
  "key2": "3mUPd3Ephe441R35ggMK25Q1TMAkmvUYkoycP9AhwsUDtKMdiCvNDCUhCPJYFhjUDjwjHyFdV8gb2REfAiEA1E9p",
  "key3": "3xAqFHxZWzyuhQUKj7uJwocPoGMVWgLxS3YWo5Q9YNcRowdVHUVTnYUz6BKBvPPJUtGgsUHAtd1a5vBJUmWHJXCt",
  "key4": "PyAxFa46hwE1zkDtT1Utki5HYaKwL4LiPT1NayHdML1iQ4FDwJffZ12fYgHC5CcxaDGY3vxhD8npmSGJfXg9h2X",
  "key5": "4m744tBezhD4zbH8BzYK9A1fVKX4qYXju2rGdo7bvhUvnZbv1aLcNxW1HcByMP6vV7etwYaFWFSaArUyFWyEUg2A",
  "key6": "3DZkNq67wPcTnTstmnGWGfZ8KtMsUVNye2DGQnFkbZYWL2b2xqGfAyXtG8zN3nrcNQjG6b5AaoUL2YtzT3bjZMHu",
  "key7": "4Mik2CydWvxqE8Wvy3SHDDf95y88JCk3JvQtx19aixWtUNpBwEUkxHU3g2mSrWNh9BrEnQty51pReCJ69GfmJTgd",
  "key8": "SPpNkhSKk5sddWMmaw8xKu4LjPW88MF5e3k8HxHiRG8EHoEmWS2T6CP2LWMTeneFAgtFzr9i4ew7aBBP2NCKntk",
  "key9": "2cKUvfGoP9y5TQsVCtz9hisHskVJEFLZHQEn5DangNdB63zEndm4spvkPv4yNU8rTwibdPi9ZzFsdLCtBbLR8bQk",
  "key10": "64eEpFDYCKtPGvJgD4C3HPSWZbMzuCXQAWMX3npd6fPRcP32SXpBtQtFYTJd6b1h4xjHw7j9e67XqFdshb8Cic7U",
  "key11": "5urYXWK6Hi4f4L1HAhh4owtsXod87WG8b9rFz7idPzX4XMStow58YWUVuFMMRGMSbLJq5ECcDdZb5Wo7fBpeWi7s",
  "key12": "Y943dw7p97ZsGpYoUNPxQJvyhnYLxhEggqwPTXcnFyMJFSWjnJp93T3yshrzCk1XbtdncTi9nN8VLNLhweLFJZP",
  "key13": "5VK5xTZLPPyCtLuQ5sdX9pupT3ujmJfhyG6WSrTdcd77RHk2jtvgZfcbXo7ZP9ZLjLe7jcgy1bU7PHDDwoYuntUb",
  "key14": "4Jw3nywCahR3GMXMB3xXiEweUCaumK3gwxjmMdDU8N8jpmyuFFEgtNGmottZ48bby6sWDfmfeDpDfnqX8GDhMwsf",
  "key15": "5evycptfWHDCBCBWf1hfe6ANVrk2vJQ9SswFS6xaurGQJX7BBi79MYexqycVBPeruEFbY5zcaesT4j13N8bFdhAd",
  "key16": "2e4BUu7LKpv7getZHBJgcQWhue1Mr15FMUm59ohFpoNrewapbFCtV2gx4YtgDpGeAqjF55UTyRoH4Gbk8AfijQJr",
  "key17": "3h59y3FzeHxnQu6LY9hiYcRQDvo5ydVbEAwUxKZLrtEr6RXWB1SA2hEDzMY1Bi9VC41s6MQXVqP6vGekUE5V4sj1",
  "key18": "3T27BRndgutd6zDXNMrxKpUJoAzB4rVFdmbQsydr1zpqHCDKLWTnQnzdSok96cSWyo9B4FWXKizUmNAzYZcCd1Gi",
  "key19": "um27aZPW4maXiRyiM8n9UWsWdAtmYca7U9uWoArx9HJBUfb5AvFNpp4jj33s5WKo1fj3YKua421Xygyg67co4Nh",
  "key20": "cJuHJPkqXYJvXbsTQ4VZ2As3VCnk9WkhsQNFMH6gM4dEAu6xZ1cQHruXSeXd81Pbsiyyjrnv2xoamNw88hCzDco",
  "key21": "2EPkrY9aE5qUQpTAQE6zEBbLgwmdNGJschQUtnTURuU7363swnvUaTutmvhdpvt1dWZJN5BFfDw2qiUNyJj7R7rS",
  "key22": "4AbQJgVgZ8JejnQNGbFBaRZC2C8mxbqRiS9d8F5gJMw4SiDqoPPhKxtUCLTtehRVzCh2wGQ4Sw6EmVLkXastoqXM",
  "key23": "28RNEh8XX8zPju5gQ8593ui1UxoCNzhJ5k8QSUsmFPkoEcXQZAXpdL9hD7HuD9XYgKXTSmBEU58sKNRCNUJX8a4n",
  "key24": "5bNrUhR7f1cDjM4rhwiAPnWWmzd7TCGXkkHz9JEeQMHLk2omorL5UVk2qLdAgPG45soadBf8XNTQ7d9RXZRAbzEK",
  "key25": "3wcsU5nQ5iMNi17aSmff2v5koTcc7mBdFovUZXRHozGJ8rfuiVu6c2F1m3g3WhcTXrPbSGB92Er5W5rFjrkquy5n",
  "key26": "5p9UbLEW9CRjbNZaaqZGTjstDuESnLua1ELS5BnNAwCpPGhb9K2CBLHqDiDQHU4UvHSLBcKqDgoGzFkedSmMbdqi",
  "key27": "5rP7uWWpFCEiFyseDAvVqDS75r68KF4tfyzTZiCXLR19edWAgcwDVv1BYLK7PorSxpCf2DVEkwGBT9CYGrWhCZh",
  "key28": "4283UwDtjDoSTvV2dTM5puX3sULRAeTMTZTaDhd7nwvixTxCWcrfxq83S9erryy5GSCVdGyonMAHDdA3UVSt4pAd",
  "key29": "fNH3aWHCk6awV7X3ubrYSkhnzi8ZM7xxLLFcgKRgYwByf6wN2QwA7dkwxemHqCS3kTFdxzZwwYLsKHTEdkEGcx1",
  "key30": "5CZx5npxKMLVgyJErra63nfgKMCXjYSE8nHkzZTGc4kcCDX5UCocHsUZjA9h4WwhQaitnuGaGtnvHiBRhnYUuAvt",
  "key31": "63iR7w57HvmFK4DEMWVzD4NcvNBWWoz29tc648cuZMJPZnXApH4gAxu8GuNixsHxrhB2vvyUiT5ZzMfCxtt4k9j8",
  "key32": "8dkUJVNiq7f8WND1drPQ1EAetCrWzrMhsRoQZoTZBEya8Qjt5XJ1BC7itHs896ayGZdL2tVcvxoq71stt5Wgsaz",
  "key33": "ZuR9tvcYioj5oCFkaiY8deE47xMYK7bVyATaKWv9wTsMnmC7RUMpmcxXvUTMAAeE6inQV9TxnZFvWpXQQ4pvA2v"
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
