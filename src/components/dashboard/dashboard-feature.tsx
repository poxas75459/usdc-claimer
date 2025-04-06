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
    "3RPVpXpWcj8ASJpkKs3q1ZR8HcbAXEcreeNYyewoRRb2ENhEtk5LqGHcvSY6sYn2TrSmQZTHV6PGzt9Nin71wyAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A65xydwiMFC6UDjLJN6B7AdzQGBKKPSzscL7R4cwP1XQr1LRAdxQR9pEQZTJySVgs46dSjrsiBgRpgqxEhsyZ6d",
  "key1": "23dSE5GeqvVnuH5DTLaQaXokpM1KJGSzEKCG36FR8uSJ1Ag15rE1YbqBY54CkT49jXmDj2nYguYdRZQZ7JQkx2KH",
  "key2": "4BEArNFXE9GDyhyCjERxBLcJDoYR3LJzS4GixV6pZHEXZNLyPK5g5WTTv2Ex8FrXsYdbn875myLpU83fL1BdcYWg",
  "key3": "48dyZPG8pNu7EyJkVnL94dmsB66zTVN7cc2BbZteLAyMS6syjFJc8HXMACzcMuHtPVp8qoPq4kaEcDtfy5cFuYox",
  "key4": "26m2SS7UpnpDAKgjoSL7xTDnVQ6c1y69NWWp5z26m8DasDmfUgY3BX8FPbFSk8jq6Qrn63wkptewBZCc4bGZ1M8W",
  "key5": "4pSPiTZ5rvtT6EYGa3SCawFzNjXCGQVqqNLfAuhhBfpdi8vZqbXDKJ3kq19Y1X4sr3bnYGjgGBmfXbNEAxsbZ7Sp",
  "key6": "2vjAEGsVCVvUi8e9kTWPfMfzVN3hxmyjVh39NQxJQB8NNCMNmN7Lge8UbdUjCqwpQyauNxiNfZUHmWEPA33oVmEZ",
  "key7": "2FxzU93RtgAdQwTjZWXW9g7B98bENTzCRwu1rpJoyU4fA263QgZt9ysyCJPWg4mv9kZYTfs5bBe7AdcJFU6iCiNu",
  "key8": "29e971FbaDyYK5HFwGRzPs7eonKy4CDpuePLSWfub5ZYBviTkAPZfZtU2VeU7CSNJfuuQQMw9jhV85cRjoecJWVy",
  "key9": "3JunWhrYTGPDKNCQXXDH58UFJ6zz1hESjNvwJfjb2uPkQw2arvomkE4LmdrCMULUyFb3YUkBFRG2WHCK2byWLAqw",
  "key10": "uvr8Xvs9NF5AMnxzqrFLjb1rMBXQ4kG8ngxDYcoU1NBrKTFUAsb9EBWPVVXtLmigSaeLjD2tQqGN87YRsrnu96c",
  "key11": "jzkb3srBAwDCnV4A45RXgE8JN6EadLpKr44gD3e17Q5iCrRRiE32KK6JyJTHBtCJqSfHSP8B52MNVS55UzMG2Kd",
  "key12": "2jmw6JCdyg16eXjdQWrf8rb6Kjad7KYg2ujEekTQd7aivVVZUSNDyRH3AvfnqcX5QyFSqPWG6LwpLZAhahJFw3hw",
  "key13": "5QRnModybm2egAsTAPA3H4XCE18jrEv2ZQN1VpuWJFXWt2FeNwkRAfRuTFNrs28rue1kZ2fkanLPsVoMkSN4Umdm",
  "key14": "2HbGM2pwhMXdJCgLUc4KikAuNxTSLXVbD7hxgRdrPzWiXLx4d4eFWxzWxcAfatrT3tkrBWAT9LmAuLTNq2gqVz6E",
  "key15": "4CrqPxeXNfgNwaqdFvN1j9CY9hEycXQCA3DhXBN1vRSFQeGSVFvtApD46RzGXtqUguAhPF8V9LqpXWzVm9vDHmEK",
  "key16": "4njVbpCdziJRvu9trxtuwzikSjxTn7xcnnpvSTRvU35VVp9pJ5j3pynvapNyGap3WDghvHjxdDBLQtVY5THdpJVH",
  "key17": "4QwwW6xDYT3eraXbgFu8bZH6MCts96PLR2vg45bZnS1M63wmZgGSPxyJ2mHNSRGNheybKWLwLXfLCdQ9cUpebLrt",
  "key18": "2HMJ8wKeAmN38eEQ6ert336b8m7zwzHQYLvARuXr8AsZMpDLUHi4ze96QDEaz4Bj2cJ4qtdZhxxQPAABcz6X56iu",
  "key19": "4oFtRHfTgUqfUEvdGPw5TtXR6bWFGtqms2P6cAx9NMWzj7cJWPCm7fMDQqmZ8Vi2TeJFS9y38Cd4auMbeuoCytF8",
  "key20": "3T3gR6gsqHsx4vMjsGbf2Fi8u8bKr11JpJDsLjVkRS4veyqMhmRbTGWuEZK8caNCzUFQfUdE2jKjDwRa3jKnXaEc",
  "key21": "46uGkEXY4ZJkXCtunCMf3yRr3pfH6EnSeac1XsLoMtertgubDJgsCuk9sBPAfCqTQ2mh1AfKxr2CX7shP4ronBsW",
  "key22": "4sZ8R3Ts6CxoV6pbsuor43eCNbxbibXpZpF74n1cwvKRwH3QuaVRnFjGxkhxMredAP1KGBR241X4sRNugXKDK2Mk",
  "key23": "5cYcQqM3aZqPFnqUNBTGkExyokzHPGmAeZoCQpmxjY2je6qH7NUSiYfZi5DkYsunknYLFyq1pQpDJZjGAErHixAm",
  "key24": "4GJVgGrX7oULaNEqyZJPgpeornLpWvqGcHFZXPFndV2HqEdzPDP8iUZwLfxjUHzrtTabwo6PUWTgSGirFvoYZfkJ",
  "key25": "5BUZsFpvagKPvRhrL6KRsvc27JsgKThyk1Er4CnNi5437LXvC73EM16yLj1Bc6wKHuWjP5d6TXQzDuMyCZTz4ZWj",
  "key26": "5G4FmQqnvxtgo3wEikMgcqykeHUy2fBVmaECX1gNsgQjzbD1qrZc6BPY7P1QXEm56C5c2n3SsjHJt9TAbqFVT4eo",
  "key27": "4fGbgcvJbRU2avmiLwjF2twnpfmaAMiZFxjnPbREvGCQSr7F22oEhtS5yEpLrUrV5dwdmLkSUs5KnqGKPRLg1a9C",
  "key28": "36tpX9RqQUP6kh7yCxVg1ZScAAkhJSKKtQgoCYni8gsHJfzDAoePbwTzpuptjoqpyEBeNTxQsThLvdry82KSrzzJ",
  "key29": "4brfe1d3TLDaZRxZAUFD213viKQmWLdPcYdyJan9rCaHF9DqgKvWH48bHHn1a9rBcR2UwraTfDxPbsPuNvXzSbhy",
  "key30": "2LekwibaF4qPu6n4RHBvvx9ipr8aNLJtqH3FcsLQJq66QLrWuoy9M21pdaCB4MDk1g9pEUSUNH5ZmdSxZQUHeVDd",
  "key31": "4WYP9DeMYkez8V35TAXWU2hE2qHY4VX5CURhoaW3o5DKyFEJAnj3p8Hm7Unp9TeFKq3LkFML27yiRJNySh9BtNzs",
  "key32": "5LNfDwNDzvcR8ndWCSsd4RGCTGUCT8QkBLS6oYutPVmLCrR9eG4gYRiETMK2PiLrvWtsZzF964zAmHYpXhJTr2rv",
  "key33": "2q5XNpd7QAAKuaBhLiUacEfpFTpCK8sGoa5mxoAGwz7Gm3uuyjASVi4pEVf7UZrPawHxjd4grKHqVNg9jvRVbQrk",
  "key34": "6foHBCz5JcewWGmr3rKhLk27imzgVWeDqut8rJXZzJFauccSLc8bX1PHuKkmgyUdHkM1SPQgE7omA2tVtk3mPJF",
  "key35": "2AheuBagJH4hF1Q6ePq4NjBLE6K4rw643fEaTCR4KSjqLsx2eHM5QxrdJeMU9KNUec4Spw9DzhRBMGJMYqUt8p1G",
  "key36": "5ftNEyqCGEEWbw8dwM7dhABrNuuKGSwtcEuoAnwbZZok7xWxjUWHLYj7LNG6mLkrjXRBNW8ToAoMyf1pggbL5ryJ",
  "key37": "5uypKo46DZpXG8FUao5ARt6bsxpG8i6CSeBShUX3Ggztxt1bBc26rkVcerJm8EKq3gCc8ykT7ujRZhoUCBrPUn6w",
  "key38": "4BmBGeTwoz7F8KqniR5yBRi5JbjFw4sDWwdovHjBqesp9WPVS1ZkFEWuzeexMRrgKVZwv1WXhFpxA2jjcsSdtWhM",
  "key39": "4hUFnfLKNZpr1aiGJDbA8c5DbazcMs3r5zMDJanLmZSgmFYjXdnL8MvbtU6AJ4CB9bqAr6A7g5TyJ7UjEJVroGgo",
  "key40": "5P7m3TwZ8AGQRmPn9huY8jcK6JBsfrbP1vM9FZHqcfJpozheRAKutgmPPaU12f4PCaFhGuMVcmQtTc5Yiozh5qdS",
  "key41": "2pBD2EqgGiHo19QmGNShyvnhTqtMUjv7diHEYPFLSwf6546ffkFTHmEKxxBiTrfAyoiBejhcSff8cXSkJ8wBgcMD",
  "key42": "Z6HednLdK7sd3r3yjgpGmFNfPzpjWtQNEs1HxXt97iFgvhuXtukQEC88FtMuscczKeiPfzuVLiVQNbPqDfXWk8w"
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
