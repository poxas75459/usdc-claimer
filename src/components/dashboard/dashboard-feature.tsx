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
    "4FGoCkxqxveiMAAFuBmsU88woLXq9M8EcN2pYKxGTFpk1uD2hmoqP5VmSvp9YTTLzzyKLeigCaMLBotaCpXgo8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c695yENYshoUn6zAvjGN73vRHVYcikNSjgpboZSWWYhsWYQBLAq2pQirRykfQDQoWbbkYib29JqpSUaNQbCZKSb",
  "key1": "5RWKYv4xoWowGevCP8BXZxgTEFu53FbWagkv4zacKaV8eykgHJ2XjcfvWtki6Q1kdp7754Zg3UXvgwyftr7JYy24",
  "key2": "MZTAhwaR1YpKg74DUbNcKQyrcTkr5ZGBkE4c5nvWZjT24ceqEs8AkmMEVget4UED5rjrAB8JPfzxkHaXRg2vZNA",
  "key3": "4c3D9LuMn5XDqLTM2ofQNFRqZ2z6uVnKkegkmGnEHGx1nFAkrJXGwRnKoua8rXv1EGvaJmhTxY2wu22qMcJacfTM",
  "key4": "5ZrfoXFWbWNZ6X48kE33FPZk8TN6UmJTCv8tpdXYk66Saqen5iy5AWxTTTb6bkzhMcxeeMTDwych93yQtJmfvouo",
  "key5": "2VrGZsj68viP2TpfB5dKEkkvk17rdqRmGg9Td9NfddmNd17RTQqLUM5ReZA933h6LkdDNiXzgqozd2U9m6gKaicj",
  "key6": "MefwMGTuKwja1eWK7mdu8vFKnCHbrRNYT7LPzDXSNgHxxmGLkErSYqsyRb4WSUDN57haid85z9QY1jzjPajWb2w",
  "key7": "2QnGR4pQRXJLzAQQYvRsuWLN6Wa9MCdZKH9n1Lm1w79RDzKoQGFHsWovyagvDbEdTs8WBi4TRag7ZR1YafdyFBP3",
  "key8": "51YqZweRidmD5cdfoceUMPycn8Z8xg3KWMKpZffxw8QCYSYde1zuWQwpdLXPiNWap3wsQX5qudYj7iTVkG5zRZtm",
  "key9": "2BJhGttrpdHQtszi9sXcHGcYRaKzrAFp9JMsSCgmstuu6S3E4bYsUac9DgoPGmgC1knwpb8b1ddnj2CfKFQi8YcX",
  "key10": "51QUQGrd36ps4AwqiYJoWhqNhg9k1S5K1TptzVGdMF4QP6cNJxzBPeNCE1HJBQgv4T5rXJ6XYsWuHr1iWbJ2rUK2",
  "key11": "5ihZXPXR7Yc7ictcADE14F7pXVk35NysiNaUvd1m7ZqUCAgnEpgimLH7TB326KDZ2yJtHZGxYFP2PsALxmaQLuyi",
  "key12": "57zaabjVfCGVbfsoFqxxuCBKz5FYCq7WxMqLaHq2xxzMXMKvXWguaSfLG4o8qCvRxmAyK4dEu3eB6qaRpye8hy4N",
  "key13": "2Rnx6RDJ8RwMNci9arVBxT99UkuCXzknNVXhvKkGLZ8BW9eh1v6QQMjjCmVDWVGCeEZWWeGpRdrKgXati9EsbATK",
  "key14": "5XwkgsvggLGtZ673RA2P8AFdWDKQuzP2qXh6wb1GZEVv62kfnVs9ZHzQnhb4A22yCbc9H49r59hMoDDbKccBeXex",
  "key15": "3JgGRLi7WG4oCDBnYH3RT3X8wTaJ6jvBJEaC4VTGRduxyeznJn44CfTNFFZQNhCXPwcaXBzS6CckfYrJp8KQBr44",
  "key16": "2qzXYnwZ8uKZnL6WacbmbcUFrEES1pVac5isKEsw2ndSehXPGhnbQdweaCsm8dJQvz6iB3nL92MDY18eQRPYVw2F",
  "key17": "48zg6Jqf79TG9kqkNkUC16AVfouv55YmyVY4b3WA7Yr9LqS3YJAfCfUAAyYg2dJgDe93SQnCKgta6T4ZDLjaQFqA",
  "key18": "3G7cs1p3fDWzjAZgx45FdHd1vyewEdpy26eVS4MiesjR1SgVxPX6te2XDYyyMiCi7Fx5Fpp43osvLpTWDYF8EQNh",
  "key19": "26LqecMiwbgsZwo2gq5MhT1enL48M1FVBkebRTVHtgTVy5oHaL3pm8ji6WexAquEM68gcZJSepDJk39C4Wjd8y5V",
  "key20": "2PWug4yAVxdAuXxbfCGVvxwinXNb7WRtK4ZDbAsn5Ygq6a5i6kFPFnCBy1VJq6eoEDgDbVuM8weqaeqnhbsiUDwY",
  "key21": "46HYgL8vE3gfRikV7H6fA1zAkgxMCKmqx9YUYHJ6jAmxooW8mYk8cMe9grDjZ7UNXuq4b3kesmKQXMKn311ofxRZ",
  "key22": "5NsgAzZWZdCssKdxCNriHdyyU5Cqik91nRyTKby9H11XWV3uGUvncXHFaZWY7SsvBihh94fSSK8fWMh8oJ85Cytx",
  "key23": "2rYZfMNyuJFJpCNLyeHQqtFWwZrzfDn14K3BzSBRLKVkzsYSqXNeAn7QfaUSNzFgi58KAJECsh7BmpMdnYyceyWt",
  "key24": "33iSaU9wZQwJRVoafErpdX8RWVEFCjx9L49mDUPyMDCZ2kXyfwEb5UNs7Y7PQUo7aCAubZQQdBWNjZnuhe5WqafN",
  "key25": "5YGrJzxLpv2Ldykeik21jiM991W3oUA6yzhT1AMu3mFtBQ5wiUtBJLKZJ3xc1k71NEDZfZK5h2kBuAYjo5kzB8iM",
  "key26": "2TNprjdrQDHAtBDMojFFhmAKdYy3rnGD4Rb7n9RFkwhK1xwFfqcpZKVP5yq6athEnZpb9BJHCYFakLM6cKLK2RSA",
  "key27": "59WK332jgDpHYTjauNQ8ScCrRQ4o4jPYLG3ev8gRxjeTe9vrfWGJiz7uFC6fawCZEwGXLwTjKh7j8TJz2VFohuVA",
  "key28": "TFnYyi3ongYbCupNxVsLJhNEXRwEndcDVCVpSij3uv2n8JsM6aBZsTThMzJW4HNMaarrwqxiAJ5vKvW21BZi34r",
  "key29": "5ZRooqCwt2BYpHxggPGTp1aMkcJNcfRcP6wkwbkT6qBBiHVMVB3Q4RhJ4Agay6h2i3YPWgvqhHzEryGEsTWs5B75",
  "key30": "24KnMyTyBfADdit9Hgmut1TwR9JCHg9xjwrA6UF6nfgGKr7A3iz8Yg9PqBci8uHs48WgDcv4Qj4pi4LSpiCrEQTQ",
  "key31": "Qok3fSudVjJWz7FKbwpfotQ1VCRKo79haPfccBtQo8zvSaxvGFFhggpg9QuExED42NBsP1bDf1Jq4CJu2vN7TV7",
  "key32": "6wjn23ke5YEFnfjBtQGKkEugkg7Vo9mxh7nSQ3k7AgRjtjjE1H36XFeKpz89VYLVMe1npX4JRNRbAx1sPmButp8",
  "key33": "3XoSJmaCs6MWjH5LLv7jGKtWXnjPPDiSa6HrqLm8DsfTTbnyyXWdjAbYsg5gUcWF9f48m38uoFSRpSGPvTo48W8s",
  "key34": "6VfVTquGgd9WFc5sP9GGRwxkrCvwdPjho2zEVp6dnECGzgrXyRPUothRVzf6gEyXbDNajKPNcCfmHAfoFho5h86",
  "key35": "4AEVbPDeN79gVD71UDVGLMnUHN1TrkuvPrCLwcD6NtoVma6Fy7AThWhiHoGfp7ypz6N7KX92PmMZrJGtvbHEPGv9",
  "key36": "AecSomZTKVVz7bxcKrYBoE4aFsDNUdu4nnsYVy55eBkXL22SvEnkcKmymhvxK3aH2XQBq7V46mr7xHcdjb9Ry4o",
  "key37": "3e7ZVKcyHJDNBbJAUZNRRouuKHxjvuTxJi7sk5NvdzpvtnQMxqJEreYkJirAfVu6d2hyNecf31bEhzWuHaePBbox",
  "key38": "t6kZU63b8vA2sy7rdZ8mWkBR5SZtB8mpSSUJo8hdeQ3Ri5JvpndA7zPhZvHmsWnU7Zt7GCRoLRP5JrhrEzSKfhQ",
  "key39": "3tnWnAy2Lx4fs9DVJmbqkef22D3RA8sYUTngkpTTgMqoS96jKq5uqSUihTE5wAKM7bzi8F3Eun2f8Voe3iShmYPE",
  "key40": "4rZTATx971hBCMu63tbNgiGVDqZ1H3jZcoco6kgxvxKMkpYnmpHfWMKSfVayej9HWfgsizyzkh24oo9oX1viqfmR",
  "key41": "5Q9c3Seyfm455ec63C4y36c3UcbUSViYqpvHczeqdjYhmR9ZAtjBCtNe4kciLSMVoY9S8Pq5wzUENG9fSJfpGD2x",
  "key42": "aMFYB9o9HF6hFhKzSYP5ahDLnzY5kWWqp3wwgWoS2vnuydwU8JQADr2NUkvFQ8sxg5TgVxPFfUo62J7BBX8rikG",
  "key43": "YUq1rwsaN1PzbmbgaDBzNCZUdAJJ7aXYSiTLi8DsP7maEctSqbo2NW63pYjepXMZr6ysgcEzVfNwh9b1xctNJ27",
  "key44": "2ACGeFa6gP6iCLdao5BGLJf6YsG2kKTr7fd17nk1f1jJY6gWcioAKu5htLjdSxSko5S8TBumF3RFEABgW3evHyd3",
  "key45": "2iSn25xoQr8GCHE9i5UySRWn3qxje1Awmr37QSEXCDK994ZSGXmQaHaeQUpu73BC3AqMMyDjd4kPogryopzvLYwK"
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
