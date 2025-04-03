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
    "4cVtAdKZRZ3XA5CsmQZqLdhs4C6PAEynd77Y2gTdMU7tPLW6Spt2ND1ACktexU465Mp3Gost7NKMevLjum28u6VG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZRgVvfhzpMZCYxVAoP7Ujkbo6PZwfBsyA7fASiQDBRn7FGw3zTpSWSwSstppcJWohaMLeQ8UCCL84C8BiqGsogM",
  "key1": "4gJCAE8x37RhPXbfxLx2qqdymHAqmYpsjkYyK1wP3hyrsDQ4F8dYeYVN9pzAF6a3NpbfkztiwJXoZGYUWXqM6Hts",
  "key2": "39nj326KaWE4NxYxrJ4ufByahg5q2ap5gM63AansQuHL2e5H3UnJTY5GyF4oS7T8biJj8RVw7zT89w5gWVyzzjjX",
  "key3": "3DWcZbqd6zYWTdv3kkkhiEe68UmNBHx8aQvn7f3breW1g25JDdZAnPeS3LQWxWD1gYwx9nB2Vr7cSZsnvoEc7pod",
  "key4": "32Px7HFTypNtLPTRRErfPSfWaDBsRF2VRdR2MGKQUjdSe1cx8yYygCU1MRannmBhapF1EAFHdVsuXmMnFKQmu6gA",
  "key5": "91UBdzSkKaZ28EGUK7mrcm41qtZdyHkLeo8YNWuLedMf51qxqbTjyvzRKXriij8idMxZtJxBkwCSZHUEcexWcC3",
  "key6": "572YzMcm9SKhD1nBcAENrhFHQw8EKMbo2byGXFZEGQC4VDELU3F7gs4VthHCT72qANtoUY1BbQv8mNvvLL9QXhzj",
  "key7": "25fJ1EmZKb86iTdq5zZ6rp86oajSuqVStqKcgPHXhBx5R4KghxGpQLu4KSQEFQVxBdLnmVLDRZgzpB7DxEpQfMZD",
  "key8": "54wYYxtiMgThGt4k5Cnz8SF9iGnkS8yUNEzjpSCtuwdqVZ7J1fB181JDQwDggA5u8MArvbBH5ytbDayrWnMpm7ca",
  "key9": "5e2PPMuQmV432BM9WWRi4wj3yf6L6hk9VDEeHsXpc1budwJN6gFKL6bvk48s7nrT8KTD86yqJDifMDmsb9ZqkUPs",
  "key10": "p9LpVoHBACLdEY7oGy1w8K7LbXJFkbXVnz41hkBoJjKN26R2Cu5QrpN2wqJYXbDpjfwGdkXgpLsNUmj8D2nnYwF",
  "key11": "iL6Hn5wQxn1rXDdmptnVTnT7NpkncjcnNm58FFvQhwnj6WZUcmSmivZi9R9GymsSWVcqcoRjrfVBmrPZrroMKFk",
  "key12": "fXXLxYioPXzRjrHqm4LN968XKgV6WYX2kaA2bfBmQTwPU5zpF75Te7uMXurJv5ams9GRY1z9xkCnP56zd4P5oPW",
  "key13": "2igWCKj6k2zLvHSjXLSLVA1wupfGpHA5XaU4UFs6CcAnNHUcNyQfKLiNfKWksvfuF7PGh7dDVaq8X7QvZyos6NSW",
  "key14": "31YtPRaCEB4DE4bBMVKVs8Rn7JjbZ3QzbHhATHk1vrYTts6DVQPTvgsZFNmxd4qbmHZD3HaM3dvvdDHtgssXSxbj",
  "key15": "sAGrJNsBQqVPZvCEQNmDR2bkhBBm2tsUhvYk8wzZkQZrJVP7XRAPFU7QFXcKEvQZhxoutEGyCV4nPEvYy9UkJag",
  "key16": "2p4j9gJ9b76WJzgVstogy3s97REfVd1f851TwC1TAXZApiwZaAwan4RXte5M3EUX3DEgmefNywH3amuxJ9ngWFDH",
  "key17": "4c7CaEDakCaGtsDzAkfzzweGDHKtijDe7yPsVKtaVcc9AWAFosC4jAkmULescyUYZjKYVFQHnJK4CewXwcD6tyM3",
  "key18": "o6u6jBtTGS2sJJhJijwQ3QJ3PVq9Z3QUrVqsojwNk84vgUfu1BboBX9JEr3Ws9ctgX2QnyN4BK2CStW86c1zf9H",
  "key19": "BMpUbWDBcoT8BqrikGFrFbJHWa5tZC47e4QEEYRLVqXHkWqqBsadEiD3xW1SZvP2hmjgezho55BASixo6J45hav",
  "key20": "2nVK9tNv8ej2moAxH2o5hMpxAo5rm84PThb6rHgeuzDf3PNr26a4ZocozdaktySHv3iGcvjCJ3jFaSzQSyBzKM1u",
  "key21": "5Az581aYCxXgo3dLTxXfHaFoZW3vfCSesE8hKub19BCLh75fXRZvyCBwu6FBnznH5qx5VJs1s4htJtRkWMUdGiRA",
  "key22": "5fxxRUsNPAxDoUtNGKBYJp8TCRy6m8FgehXyFgnoBap8BjUFybgYRj41MpNpEXMsWmXGmPSPNDeQu7E2DfxSHHUo",
  "key23": "3vfe9ZHYBqvBnnHU5v7t8mMjYcbbnqUbKqNGqa1RMie5otNyTbF6yDnAAk9AwBoojVt8G7eH5bazHcvhUypZeUiW",
  "key24": "4vv3wYzAJCTCUzMFKh5Gxqs9QAXhCwfWEfyZVxH7Pmd2qoMmxUwX6tgLr3grXNAERwoSA1oqWYKn1drGr9Jb4Y6b",
  "key25": "3v1xKgWRCUSmJbBXV4zcTPPuN4Vn6FxodCrXrGUWFBfuuRSGkZM3WqEFy7nyrUb8ZomeAdz3QdYaYvvb2HaQt2Rx",
  "key26": "5vSE1EL9oj3GtYe2zqBytTsjjn9uzpk5dhcHdmMYRMAXoK5kcMRHRkwzcRL8Mx92LKbuphZLzcoGhyxeg5261Dvm",
  "key27": "4SC7woJXj29ycLnHY2sk2GLyhWotGZV3q93LutctHfbDijLjkszgdKBhedndW6Kxbxwce7scC5GLqVnTwGeryZaA",
  "key28": "544S2FHCZxN6vGvDembFFS9YZ5MYprf4yft3vmzdzhuzLrEMGQjzUEvBZ7FSQ3G6ZoGy17bNS9DZ9KPzPZVg3o8H",
  "key29": "3hnVrRdByqwSg3kbtuLYsw9fAD4BsoJXdN3MMoaJ6xmWoD5VvE8nbriuGBLPwPc5bXzJ2JUWXZx58vvsHezAw5sp",
  "key30": "5TJqrGoKZ8H6JcoR9ZG8ERNCTWEZawiKnELEq4YXYeXfQWqgCgjav322CC87iHpLNehGVVNueQRP4EkF3kHX8WMM",
  "key31": "66Uj2jdfyE4qEa3uVUkzdnJuQ7hM1mgS9jpJ7vvVT12B6JJRbeP8DT52fAh3kP26TKecyHBVvMYGMTvZ7ua81qk9",
  "key32": "4ashxMALZY6SyCXndFektv6yiZksLvWbyGUNBUtGmSkRhomBwrfv8K6VPUktfKcP81yawWJVtCweFFnYYdnWyuXH",
  "key33": "4SRPkVkeBmYELy59kgoTPApJNk93aeiNUEn5rPpfHsX1Svmhn5Wsdth72dp1KeJ94fd9vnnbwsHY2LGRPpqDNiyn",
  "key34": "48B3TwEpudBB5nazpAwkrRsaUZXDfDvoq7UUXmE3ngPRXWejktTnEahwibJigL9tV3JAbVJGDH7C2UjPKX5ceDq2",
  "key35": "5HGGG3KoQxadjwPTYHjwWZ1SoVShkAdqTxDww4HWQDG2ssVgnXXoEWndFwhsDk7cNNhh6e4fDyku6PmBzU6sZ6Yv",
  "key36": "5ybi81SuXesDK5FT1rDGiXnmSEM1KiUp65LSsrFejAeDuqUM65No8JQDZSpUZkQ3g53yEuzjU9tG2Yr9r3ZsifdP",
  "key37": "3xdkkns5UN1dM4STBNf2YNkV7wJjArxi3hfG9uCh887pP5TTYJjsNgk1QHiT8JMs8DriKbhn7JNrduFU1QTVMcjm",
  "key38": "5EVRkPEtMdLZqVrrocvsujW7y4unF6QXJbVvLmP9r42LmkL6UxMJMDy6wFwm6kMr2QQNeCwhdgZUqeAwMk8BiPM6",
  "key39": "3qZVUc1rmgztLGtagYHMqY1tdtFqdCqKtxv2fRc5WH6V7sCAgWj15RUjCSynSx1tPJDs7PxpbvGSb3W3ReZfdH3q",
  "key40": "3fDq2mu8PLAXYmSBDysQ79S5BMkrLKFYansgMNXWPFqeWGWQsiAVERhf68FF9YiCJq8RqBqeQFXETzm13K6uuYZL",
  "key41": "7DNkUTW2S5SYdNSWMwh78dYsTjV4CpPDvm74bcuowYMsU75MBifvUK7qr7q9ts52FYNxHx1tZ2D75STx7dptPHo",
  "key42": "3WzrR6UiiVUWnoVBbDSSB8LYuvf7dS8uCtMU3JP9QpNvNTUz5mARgtqDxpMYXqUNogb6oPTSeKx7mj1rPBZkEPbm",
  "key43": "3hZpikBam8pNwqMUP98sBBWg6kngEGhNpZRKxpvYvQfD91VkzZUuatUCq21cWUAMMEoaJSsBinC3SakQk8Gvojpm",
  "key44": "5jxhXAdmBk2HB4ybFKgt8CLng3iU3KdpyURpQxpELRVQfTRrqckWuZmCapL9exneNj5XURi6uy6qJmUACRoSUqrQ",
  "key45": "4uc5qJe5TNwS1frJopz3U2A8LvxmZW3Vx65qk2gkEWVnKusSMG3XrQTaPF5J6ACv1Zj3V8wMJpFXPznNvYC6rWkx",
  "key46": "4nQsuGdv5ywmELgY7RVZ3FuRQYLiDZFzsD2pdw96AMJGX76oxT1XeaT8g5GKtFvg5KJv1ndQ9uhRnMN4NKw9zgNw",
  "key47": "3vSq7a738FQKuHmZtdNwUdbvKgPvNvDqapv8dyjYdgb1fPP8aukdXifWLHwDFriuM2eo1FsHGoo2SXFRdG4of5qP",
  "key48": "59bJpyj1AxoEMPcXVFciJ3Z7zyLf9s4oYn4S3tBiaFcmFTUA9y5zVoGLAiS51CUJsCCwqbSyVt7bKrnPr6TWyoKy",
  "key49": "48H7dKWXzezbBE3Foz7mUSb5XnBRZaikXAcVE2LDRTCNPHRieopdZSnRymmha7zsCwWLDBZihv3taFHdjQmn42Py"
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
