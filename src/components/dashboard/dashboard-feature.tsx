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
    "5jkzfVCW9shUzMCFGoL6KRaBeBj9E6xCHj8CrSdmqsX6bmcMVGsqeNFQowLTyTQERp4R9GK9QL8PJG1dNH3o1iqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YPXMC8d8FqbBzMKotrzmwZoMsqfP74mTeMNWDK8T2UmX9KrpvscWSoX9vWatAr8pSZtKyA8jY3BXs8qanE9a2yj",
  "key1": "3p9scpdQyawoVKxr8Gf94FLcgxHTFP3ncGJZdUG7fR5jtJaN73PWhBQ8NhfSHpNA9iwxyMz2bFzmExH66cEQr6yB",
  "key2": "44T7vmo3JxZrk7sG4GiLzntcTkauYM82iGSEHHSwkxAnVyckKmNco5dijEQRL7kdSBE8kRqCgmMK7Y6KtokZ94yR",
  "key3": "38tWe1XZtdP3WCQf9zCvxunZKpvdJWTQEVq6u7p1r9ZE5rDuGD2wG59YnLcmdpmbvBgETWTkNwXweHVsBZaKU4yH",
  "key4": "3tw1e5oXbYaguRwGN9TPp1wz6AnoyX6LUZ1tJUzt1oLrRAgLuv9aTG47X3NPzaHyV4G6Qou9GufiK3DcWYk7hock",
  "key5": "1G27pD6fbFaETaJQFrKk3wGPgQLcEmuVzdSeVE4AR33S4hhsGkqymj6GJ5FkKFseyRcAzTByPbFCwNzGgPA1RjG",
  "key6": "wHMrHD41C31feSsWpENgWfCR92RezRdin6rMiSwj1kbj4PuLNbS7W5dPbnViNWXXFHvvJFuLMYaMnmEsmeV6Xar",
  "key7": "4hZwPvus7uVra593Nkdv6a25TfPCjQdaeH9Ezc1LibdzoxRVfaoSm8FHMyKZj32HHYJN6uTDcdsr46AqyBDQcxqo",
  "key8": "5s444EpYqnqgzqTARdeDcvubC2W82iSjqUVPesauanqs9mWmqdj1FCievdjQ1FGpdELxfbhpgvSEATrKmgYQqR6S",
  "key9": "3vSUZufq5CH9oyDEKeGLYEPPJa1cYPpofS3DBYc3ELL69QDcaXSGtEXPb6AvhWu4u24rx6EifH5Cx3d9bSW5RM5j",
  "key10": "GEHTqi9F7C5NdAfv63qQAiKL13gbjfS7VhFQV2PJHhjvQiZutX5Z9LAPAEmKrQREP8q98Z5qMf6vrGoWLeRAVJK",
  "key11": "4S3kjX8i6XA7DM52iq57qku4iAuQZCtsKFzqk144K8792eVfBYBuCnpAHD8cAbX1o4wNgJ4hdLoL56kUbLbjWMVE",
  "key12": "4tn9vuXij4PnL1K67JX4wnoimGYJPJSjU6XkrexG3LHNk82SNbrkCg8taqXxGnS9MiAbWwC2fDiD4qAnQE3rsf9h",
  "key13": "65e9WARrLNq7V2CkW5JhSYGQCS8u3Dm9jborRzS5kfHDpDHNvajxe2wm9y3PBFgUkZHwddt4orCvH5n8TWTFaGzK",
  "key14": "4p68hCZ6u4oz68ei7Ex6rdqge3JYdwcf249nf2pqbh4EWQFLST41XCkmuw8PDiMi1rtuAWkr14u8BQCEi85x2Xf8",
  "key15": "mm6h6deoFm3DxvS3qVfMVAxvBhLMiAFYeWUbYmCoPFpJAWEvt8EsPeYSaHw5UWh9ionjoLaKXYZmj7WD5PDtcQk",
  "key16": "4i9XPzvtJK6SjZd33vyrqaGpXBe1nKYkt2jVNSzvkuR5uyxgwBbExJ1PiHizAzbbyKuwDRTxeU1o1zzog2M5DPG5",
  "key17": "3uyrFEkFi6HVc4PzpENVkpgm6mpEaeSTEKY8atP8inQi1vqCuHyDBT4RmRYP9U9W5EaHWBuYEphfFRXng7a1mpNN",
  "key18": "4ukBed5fHCv7wrD81rVoABCGshaDJcddG7ErUvg3J7Ui1UhjogbeYXu1uFAVu1XHSsiNhSzPbVampiuCNqAf4Zaz",
  "key19": "5d7MEupePWXcGSnovTKgpQVReRxXiiecrMHSYsiKwXyfc8ntMJgQZDNapVbYJbX579LqZzjmXFkNy8nUkdsLjYN5",
  "key20": "4w8a2aUWeX8QTRKhQfGp91uW98HfvAaMcMsTyckRhE9EnXELDWNDpqV85zC8PLrgpb27uBCBnsyLyz6N5eoLnkJ",
  "key21": "4N3AtQQt19pHNb7zuxeD2YxLBJeLUmU1bo4rp1KECVQCe3xXuce16EVm6ZSZr7p9opAUdup8pStuVveEKeJnVvsK",
  "key22": "62nJpmUFXNBnVdYLgof1QFrNk8wBiX6gYTnCU6sVN3uyKCd44ecdYtWdMapLBoCaZgNRJutS7Zf5qdtC1GA1jhGf",
  "key23": "4tVSHcnw2VeiYJScdYiMdzj4tmqz9PMLd5N38xNMQT6BhU8f56j1EtuyMHywSgVRddoUCup8iSnGVmURajfhFeXt",
  "key24": "291ia51gvqDfWbBbjszR2G3sbYC47XiiU9cYPHjiDkTTJCYor4Tw7biJzDyTCeRRZ6P4YCkVQAMhFeVWQcmw3Fhr",
  "key25": "2UxBTjxPSVEsGu6szmj84y71d11kiLk44NHdYk69CpavLk2ZHsnP5RaV5rjQWnXgiVZA4La85AiLKpoaTZWMzjb5",
  "key26": "58KjgXm9sDszerKUaH6hcR4FYf5nXu7KfX8YHQHV5fPC2LaUriaEghgzMbgre6sVVcEDXmr7duW3QjDUDdds53Gh",
  "key27": "2F9nYwNUsLPDFjGjz4f9qCYwfewikYG7E4ozNE9ZHM3LzXeZTvhRXPsMh8DT2WYX4nkBPfnaqqr9o2oiaX7VKim8",
  "key28": "4s6tt7xj2TFhgxMW4vMfVNHEaTGYfavx6UWxC8xmobDwKopXA4ykV3M22ewqvYTsQqcKiBTc3CBmH9xUBXgbM9cX"
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
