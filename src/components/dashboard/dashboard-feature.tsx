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
    "3mD5jjN7wwHBp1VXHPhiHDSRneSEc3VzHfwTsk9YRvusw5PqocmxPR2S2oxxKiTWykLJN6kveFEEZ6Fr76rYhcLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ERTH3g3TabEr59kMVMybAnWagCTNp4aFD2zQu95ySoGufdpkm4oDhNaDWGQrwGZRyuR3SDNRyuK7z8JLcX5BA63",
  "key1": "wpxfnVM9tMTexNp7ZUUHChEiYFXgsyQEKfYh3H59azwykD9o9htkCFUpjGf64G3idYQrwfMq7wNYVYAKk9yt5S8",
  "key2": "g2Ev6S3ZmgmBBWTmAvu69XyvzpQyVEWkoKWXTcGZ5KDeXN38LZv2n9wpjnps5jyGqEbUcQowEDraTQdV8f9nFJ8",
  "key3": "3JKVXJxEn3NVMFcqjNoG3sFWEbcKzKA8muji2ESdoZgohEtJFVEpnaZo2aNTMLxvDC6YdEfGXwquMq43WihmTUEG",
  "key4": "2QFq8SAX135wJzNTL32Ajph3f4hxsB4UkPzJn9BEqtcj1MvdjHHaPVRDYhxA3jn6smp9VUQQEQ5S2BSMp5HR5Zs7",
  "key5": "2BteTyp1bMjJpVxj8BxYxiCpCEjNmhhStJRkQDSFy5Kr47KzTn9FAMXGXJJFXm46bAoGg91h2GbVcAm4FMmC9QPe",
  "key6": "2BS2PBMZxZRhXhAj9DX1SPVseDbxUDFHHJc4ECzck4SuCsRKVwS68fhvW5kdCAaVnGEmJErLJV49DEcj3KTtM7LX",
  "key7": "2d6HNY2kBkkGR59EL1wX76VbLew6YDy2a81p8pSo7qCsD5yQjFWWtiAiuWiyjCBnZmW7Rzn8xLB4UH4x5yEyWSRw",
  "key8": "53qvKBkzd8Bcj8fv4XR4u78QK3ZXya12WEE3Hnpz1U8jk8XgNaMSXEzyyiGQujf8mcPbgLAzhRJYc3iunzX2k1Xw",
  "key9": "5mdY4cqgnbshsB6fqCCuMWwK2bVv3538mPEdgTxoYJjcWXj1Yi2HEWBcYT2LBzXC7fTgcQjV2GtXJ2zAmQ1cQnaZ",
  "key10": "3D4qrZPKYyDXtc3UGDDNKJUU3JBbYWzrNJtHNYqd9g8sQsykxHd89TJjRdNSyfgdY6GJzRegngZeSikApBQSHLC5",
  "key11": "3UCyxq3JgVMybQprCiGvYHPyhC1bgowMeV4CUDzqAQUDszFjZJgaC2iQL8W3g8VSmyUF6X2nKSHmA3K7Cw4ERA49",
  "key12": "2wC5wXNgAmCRp75MNwpT2yDn6CAFgRKVFrcXToRpb9MU7vPVnNW9ivbXoNv98VACGtsiiDPPDnu8JgkojH9D92NY",
  "key13": "3qAN2nW9QMGmrDeNgYnoXUKWcLzhYftc3Pn1E65NgWgw9deK2KwHDC14qPgSVqQFQEpoHepW7mtEHsUH5aYNb8vZ",
  "key14": "BLMV711PAFqnfwCPL33RRMJVZSRueBwqLofagmrHkzGT1opq6eSyMeBVmxEQ6hHQQJyxrhJPCcGe84i2k8rZp2w",
  "key15": "5p8da1bexeQdD1Bc8KbMQRzpZQJudkRbR99m5NwoXK3Ay1mS9jTB243m97N9gDCV4UxaJBofTbrtZMy47E9u8PXQ",
  "key16": "3HPeyUcS7V8EaRLVLwknFGQVSEfRUagKKFbJ7TYoFwXkCpJMVAyTCXXq1xb5VpGncXuvDZUseC6SNQzeoEvkCGG1",
  "key17": "4ZcDwtVtqYNV87ic5riTkAtvPT4mBeYKW2mFfdeEJwAVpdraMWnh7StwLB7wfoVtUNuoTm1EsL6XWw1RC5HcD3U1",
  "key18": "3UNBuNwuMKZkfdinszaUedR7PKLEv5rFS3WFZYSDabNrZYtHs31WEYgcw5gt2R6Js2THMEG18LXYRavY8ksQZmJ7",
  "key19": "3UH6aWfRQkzk1a5mHSRkEVqv6j8ShrTEYCqLtw9pxKcroGs9FPrdScqkKA6GGL7gE3YkU3JC5xXsMUp6QqvZJ6SW",
  "key20": "3GFCKneqcVhDkZQ8UGUkMqRVixtRxdiE9PzU4tfpwVJ4KtFsxax77g8gyqvYtMyJE3G3BuRAHnPT2yAAhe99VhBy",
  "key21": "CDy7mo7uexAHE9Vxpq45K75eUHXwZPZRpudRXLBzHr5TzJnDE9bDUwHsKvmkYFTFmCk2vvYvVck6613sEtoSquq",
  "key22": "LNQ92jeaEFDdyBfnfF2tWdDkXgdiZyMhysKaxuECfmk2RXYLxuan5LfuiZtP1RXZLHZbkYwkcc3XVYsrPfQ2DFU",
  "key23": "Yq3iScgriCzqNEhiwhs4CNVTVMsTfNCRJeYhekhaNWY7EwhW9CLeB5nnpJxV6FiiWiepxrH2F3qymM4qYW6QbpP",
  "key24": "3B265Nqvyu9MVnDK6PxCtwgQNc9T6AAoBg7cJjmBVviWMPZrNg3JR3dVbojukAtP6Ac3WXR8aono5f18Nv62gQUJ",
  "key25": "5vXPiSWfo7qDMWUrYmCwqQdUurSkqq4mFQg6LfSPNpqfWs6nPFd4eMmUrbzt3im4scC3SeZBATgKmgQBrcyEpEWr",
  "key26": "4N93UkXKKhZMFgbqwHoNhtkoM2UwmrfUvrXYyhhAW2Fyo9EVFY36mZbfdTSXk7kacbMeqB2JtEh4RQSugwmqpwEy",
  "key27": "2uyRA4SgWT1QwoBL5LNqVd9Qi6KLbAUBfWv5VNu5fYUMwYp8ZBFdxqiQNj8rBEpQpVCXq2ku8UWZxBPXDEZmsiix",
  "key28": "21zcudsogC6sE8DvMtyiy4BLbe4a9YUhFsnJsHttqPLuLYQix7nQ8TkFYGJNZe9mPezU4EJH9PyzhaQ4F7c9B9jJ",
  "key29": "rhkypMBrWxNu7yEHMHjTC1Bv3BuAHufwaEym6cWqDZATtGzFeF7i5dhYy2u5ebyqeNHXyuvi7nuzG6hrEoxbvMv",
  "key30": "4VNM2P7xiWBJDNzAFaTUNyEQXBh5hfHqcp67zTgkFVX9AmcpHfdA6nbR3a9Hukh9yxZKrSEPqA6c6ydPqX9gy29z",
  "key31": "3LCxQJmnWFap6xz5G4z5FsCd6FRnSWUd1snNsmofyFAve97i7UR4CeQPxB2gucQKhai6fBMYi7TXdKDafUmSqMQc",
  "key32": "YezgdKgCpgR1PpY62PmqXJcG6ZtqgFYqQcgL1F6JEujarMJFf66dEMLAmQSvS8LfceEvADXKwuXwZoxE648J8ZR",
  "key33": "59DT1URfFjnGjvN77hvZ6512FDGn5zSsnEDC9X7YQ5yPaMQgQV3dJ5RvAjMygLLRApjs5F4vtZmnJNjsr7EvZbzJ",
  "key34": "26LzAovCZPRYpnJ8xVSseeRVYTYoiArgiWJk5g18i4RJA4Z6w7vDr9jedup35Qkmii56AUaA5DBuBpDcXiurHsZg",
  "key35": "57iKVhRkd1cfpBFNWqENabA9Kij7zXZ57uL7sgCs4TqgHjpq1JcieddEJMDxN9eGsddTQ3XL2fBqZrNzJaApWXhZ",
  "key36": "D3A41GKTSfSUWdwrU9BkHGWfzpmwTTtvcEdtqA9EMFGUuzxkwSsSg6mU2FGnofXTxB1zt4bN91MH2yCHqy7T5ga",
  "key37": "34yJrzcffNpB6jgBqg3xHAZhyVKnbMPZ3QR453MRHDYX7UHPorDv7FuKRhNPm8j8KjfVnMfhhdfAEd2NkPUva81E",
  "key38": "2EctsBWLACA4xjUuxu559AKxA5mvFqKUfbewW7dtjRRiS2eHicvGkcT1RjhJ2NpP9eCg6xhrNKHQayybRjoN8Ppp",
  "key39": "2Lm3hgV3HoPqP9Nz8jqWTFQpaecHKoBijJz8nprsWPxQiGjuBGAyek78GhchUXBanWxTVLFtti3mEVeAnjy93MKM",
  "key40": "2ysDrg62wygvygAzVf9SoN5ivejE3aWCmbpzqc86s6KJUuHibyYfW3G7ydojbMHzHgPwjDSdxe4VPmjSiGhCo8G1",
  "key41": "1whjtK5sAVHiAqcxrvnCeL5fPN3gAwh21gbaHmeVCFGyPGL74zbQvUFaM6vP8uuRAXWipwYHdeCa1YPY1qDEsNx",
  "key42": "2EQzgL5HHSQ53WV9Rtu6oca93MVHLqdFWT5TAYZSrTU8hEwa5XnCE6JTmd2STEZgEVrJ3jzbH9fNrooLzUTqSxjH",
  "key43": "4MjAsbDxLnNJMGPTJhN5xgntHASL4j2JmmXLAv2d64MsBBr181GQsfwSPUAsDytPnQAj8HDSodBk9L4UkL4RJfgG",
  "key44": "zo2nXg8afxPfvtEY9p1xrYbkvQurkjxCmD97kJaU5zaL3hvbttPCSBDYYFx5a8veP64u1HKcE5RvKxy7YbYbLNg"
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
