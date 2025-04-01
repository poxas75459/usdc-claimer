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
    "4m2SsgBaQAPDGuWesVjd62Wy8KEWWJrVPEwmgMUc6jMTXQ5jbvyhDdRLsMRCJm99YeSLyb2cuCHjsWnd4zbGPMfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yPqhUHHd1yWKYpGoNchVqaX7a1MRLFRfU6oqYL9hBrbD6bjSdcSuao1XVKULH7mZyGbTsaLMBbiPkX8mC82U3FG",
  "key1": "MtBpKif8c9jWeqJYUo2UxRFtLVnmbcfTSkUv9uGXzi2PF3VZRSiYTdF5NEFf4gV1kUCLie5NWdD5PNrcrvgD2DM",
  "key2": "2R696cib5XV2CAVQNmC5UGJPrqEyBBadt1u1mJKW6MFnz2KcJJcrxhEjAtqo7q4otyi3S2J69cs23oNDQKcMcy9z",
  "key3": "5h5rveLPv7F6xL5JhHDGiBbi8t5ryMUwp3jiUkyuZYbaYkCMWCexGZyddM3vt429arGn1izGdEdAWnFoPzUsbeRY",
  "key4": "3B16iuU27WgZo3TBGEhrQaBaZR78PTzXt4s2S4pX3JroPYPx4j7oS6aeBUt5hC4b1wPCmtrufoKD5AhfCyy7FaK5",
  "key5": "a1PJ5YpEyrYz7jfYQbC6s5NpkqLGKQuCVkMaW1SZv96QTNYtLLnvzoHVUaw9tVb4SPd1wDsVbwYLrHFL1VzsGHB",
  "key6": "aWVD9HfXRXYdNkZZwoni9AochPQnuedCTWemLcx1B2bHYEq7eBoumfdjDeD3QezsCZsABX3G7tLPBPx3JxU6puw",
  "key7": "5dMmjcFhAbM3zP3dvdRifnPXekeYMFiPHEr6RY9vhmkfdyWNNNUtfJ2aa8RoLgSZ4yynfBrBmb6AgzUiVvMUq2CY",
  "key8": "XMRfb6cuyQ6opokv4DxBVpnP9JmW9n2eT81Sps8VYS6vfDND53XG4ugxEJmWgoGFbd8QyCJHVDmoQNCMZcpSZ7j",
  "key9": "KB4b7VHUNLprVoU6hHfgAcHXX9Cx9gu6HPDRTC6i2qEf4TXjKKPSkYbbKE32BRpUKxYPoiwwgeXD34CujM8zXxz",
  "key10": "5xPe5AgxmEuJaooEY8dD23DwoJW8V7LxxwcYz5hgvRaKQCpsYTKZArKHMAWYizsue9vrv4Jxjuk2ZXDrsiheMF8Y",
  "key11": "3zRaVAt7ochwe2xHTon9AiWubsBM5P5weqp6aHGQpna6KTyKaDW4mrE7ofFQDthgzZdxA9HoGN1VKUiL6YqgCufD",
  "key12": "x8kVMWs9svXabd36GUGTQJoayPuTa2waG513rXgayH8coWYGX3mrsSABV7tbDJA3djSX5AeLTCp6Kiww4LvZRFM",
  "key13": "5oCen4iRwVoZ6vRZSxjswL8nMVBjXr1XpJKwbbmNuLSb4PCGdhKsprg2CPu3j7jLgRkff14a4KTwLwANw4982mvn",
  "key14": "nppVmZ6ucWgnDXxJfJiDQKnmWhpWz94NDkn3uuL8w76rHmiNsn28YYTekRp54DYNZrFzRjXWnucN6g6TapmpckV",
  "key15": "65jb3b3vJGyrt3od4YUb3mu1meJsnyV3qC9HyJhfMV7V1aT1y1azzFFLzHHaK7zr278D28TpqNcNQnGCbnPxcVtJ",
  "key16": "2rrvURW7SoHUxbFGzm1D2NsHofesByWZgXQba1onukmZVYe7K6WbSsVGLw86b2yCD4gwndxzcYCG6mSd8eizLijV",
  "key17": "GwsFfB6yp6Ggj6J5kYiPSXbt7s9gMX95vkuqefpJgb1Y2GZWpjZaQM2mC2aNuc1gtr9vc5m1SAmMuhucJgXFBxH",
  "key18": "2zrqM1qoacKTaVwAqaEMkLxvXDRuRFQWMMPpKNSRgTj2fJJzbpuRZYE62f2zBs778g2v6UQyvGGwHzSxhSSDfivj",
  "key19": "4dNh2BUt2yt62JN7BnupBbcs99fTTE377GpK58ud3fCLbAHh9BgppVp32a3kKRRMiNESqXTLokLcpXujFBaDBv29",
  "key20": "5tH3ngFSd3U7KGkGBG4MLnVbwe8XpmPrkaswG7HNzUsa8NZrZdiGnBKwm5Z3scHVLL5VFgSnjDSUr69xsriecdvH",
  "key21": "4uJ6vKcuTGXGfSQp7SSBPWhfrH5NHhZbUc5MjRntT5e6dqD2HxSNxqhiiDSsTuvwLeQbrcjuxLBmgRUm2jTkQZb5",
  "key22": "6xizd7SqzndNdjDxLziNV2aZxps1WxT6ugaYu5XByr4vYWPz7iU39Me7i5zD68LGWJyUxE8s4FT9stjkceBo795",
  "key23": "QH5vq7j8NWYA3mCWcQFUKHknicPwC742N4CzEMfecnvetrzqJfZnxiiDnzDagxxLRptCRTZn6CdiDFJTKRoehU3",
  "key24": "PfD9XWwbhg85hRR1J3gbvzXLJ86bDi8UHnmoMj2wVKLJujWvsgj8YQXM9YDNUN25GybaWvLnxaWGu48pD6L4a5g",
  "key25": "VKsEG1aZ6nw2gMsCPJaqothQSjcMH3hZUKbPPsWLEe1zTdFdDsHU8fwiQjyjZaE6X9njgiMjSuUhnGRmP1UQvhu",
  "key26": "5UJbjaEEWtcdAFsXmdTaNhrqNTu8HrRqrKmrEwAEBZhvaky7Vi914LbcFEUzdkMZYjYKzkALCEtd3BNXroJ17n1k",
  "key27": "MAGps4zLeHGoV29bnudAAAktpYFYhvTYFfEP3TtnmdguUNKD83ELkz8k97cCiRwFybjWynF1wxgckfNuJ429KML",
  "key28": "4B8oY4BbPbBnk8GFvgp7BsPznbnQBwp3vt6YS2rbYeyaRxv2rUNaz8FoLPNN6isVdt8xKMK52ExxS6ijSws7T3v5",
  "key29": "2QEwJbAaE3TDFneoTGkP1xaNaoE6yLo7PVP2dcKGjBhUr5CTbaPu6gfigM25hhArmjU6MYS4PnQkDbTaWGkCeHx9",
  "key30": "5CEjYDEvDCz1qG7bHAE4ZsYBfkFssQKPLK2atXGHZmo7cnC6Rvu41JvpwAS9T9KbX1ukSJzd4vL5QiVKqQKV1NvV"
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
