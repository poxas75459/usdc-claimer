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
    "4bhZ86XSyT7NRM9QP3j6GnGupUtbPA7uGYFDJZyPFAhUVAyRni56rvjVMPGh5MHzYYDkeaek1kWAowxXwJTMnLdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46SBC3SRhFAJbVhhG69c8LsCCMCFi7zkyHDz3pPvfmDHyL8KTYWF46VRhkirPMu7YN48KzJ8wei6xjG3VhkR5oUn",
  "key1": "3az3xAEDMxQJGmCd5MgPNQnxyBPyYRFa6CTaaXqqUHJFbiAUtZPt6uZ4xmi49KAvZj46L5c2nv5gRMaQV9fgEHW8",
  "key2": "5zKXsYQPWWdrGPrhkecSDx9xqQzdWrz2e6ZHWndrFoXwBSFi7gdDQhWNNFiXCHitMro6xnwXPT1BqZeFepVQrkbG",
  "key3": "4fAJFMN9f1ZzVczKAzp2Uof5CaJBPqez16JfQcyGBELjiuC9hhypqRpVSLLguqzQWKX8TUA2qTTHQpfiNuRqprTm",
  "key4": "4835DCLwZ9ZcGRg4vQWYfWNXmdCC7N5DLz4DRRRhofuTuo3DdNWE17gCQi2pspXhXiF6BGf88pUaEFCPYyqNp7cX",
  "key5": "4AViMEKR6efeo3vfQuohrHAYnUo9fQeJUR9i9Fb1rDMguf2JqxT2qNoLXWFzB7mV9wSdUH2pjpw2VpCVJ2KH3wUX",
  "key6": "38mXDMLtJdGmKgDk42NL9CpsXHJVsHUFrodqdxP9evncgpLC5stoNUvayt37GUNf8XQKcRLkj9ijcxj8z6Qhei3n",
  "key7": "3aHq85YPgQBZhgvZcLzTaXVdGSJLMNpEi8bayqEcMxouGzxHPCswwbxwuEbLjqe1zY9SG3CfJNsXfHMzWeMeEumA",
  "key8": "63zcr1KxtAwVhDgn64SAF7jGhUt6BtPbtNcJ3QqSvB8EEnxDZNex4LWgiA3pKVQcihEsKhaiuCQwEUK7W5HUNnRZ",
  "key9": "4SGGhHd9c7L8749kPucucQFkCuHNtUfiMtabVSpP1bqGwts9x67LkHQt9Hjubbnrqp5ax1yhRznJNDAPamryNTaH",
  "key10": "4zqEMBhwb5rEN7Sgov9Jx61C5qjAPVaHricXmFnNebWiyqxUfi5ovMkV63G3CR6ianHZG7ENKj21bS2hAmHMXczw",
  "key11": "95UEsmcRGVABoQqbgxcqkHS6K73nw4dq3zMsYXVNry5AtUgfynRSUrxDjavAVeh87TTrXeDqPNCGhdc7z1z2HaY",
  "key12": "55hBhLP8ywCTXurjxDMFukbGyL5AjWY9AvpzyjTW2Awg3TwCE1MfA2dNVbMuyzmneN4hSrfWkbiHpZW8UXUNF915",
  "key13": "4h8j6mV3uoCSMSVnx9NvyEwJwW81iUWCEqKEBZUuDADZwPtfad7J9ocuqK2aBQZFyeyMnikVUDYTW8DHw3wiRkk3",
  "key14": "57CvfJz8atzwv6Ff2KU7EnLKA5CcYkaHZK8fTjpTkYT4AFuJ9APJ99PhfBQ6k7c7SXwSGon8zoMX8dwR7RYa5JpD",
  "key15": "4gNbJbcunatufj1uywGwgxVMFM9N1hjT6fTihwDXtdMay2tpud9nJT9jEWnFF6HyTouQFvB4xUT9CA88FCFGm5PM",
  "key16": "2QXduaiHc5rxVPq6kBcW8QGH4iKyesx5Ck7XjtjGwBLvcD3X2sTXft2CVnB9ysiREz3tNo1ZqLrGgdcd2mbFkGKh",
  "key17": "4oC6d4Y22qh6sTf6j2tHTPYZjViu3tZoPpRazUz3RrPVRYnUSa2qvi9K4YXjctCSsJ1KLTTC6MJW1LEwxhru8YT5",
  "key18": "221uzXwxMveymUiR8f7E8MnpDqXLhQWjeAoEYEn3gLG1SjCRv5EyVsFSBT2vqyKB42UGUMmiTKmPsK2kGAZAuiqy",
  "key19": "HM8wAvWy64mtTuzPUnhCe3qTAWuEyBEoDXgsj2KB4kCGtwzixR4gXwiH4dBLhXhjkbKFPfbxydSRxdwWuCh3gyB",
  "key20": "UubUZaBjQvvhc8nNbH5dzzDBJpJh1FUj1wXjrUFNF9LcVXXYMKMU8QmXdPe7421HwQLkkJ24dqrqfxtmgYa4h8Q",
  "key21": "5eEz73mj23nNEYG47jNKcY8VwxMAR7Es11Xqnnkt6KC9fqiZ9dQH51QsGRo5b3QPE3oi65zRkPpTEwrUtkLcaun",
  "key22": "2DRuJvktMsQQ9A4q2qXvYgxw5muH1j15bpiCLEUb2KQTR6U6D84qbEwydswLKsdkMXbGXB9T62soUFxWGXXCzEiL",
  "key23": "5WBayKuCk1bDtAgJGPjFEsskrKuWwawLnXSV5n4qbRtSnKAYkk6dcHYGChQx4Po3oUyvv5dqWwJau8AqX6UTZ1oe",
  "key24": "4kJ9ZsXbqX5YdXjqmCDCf4afwYhZEcZQLmKtWFdkq3rCvpbxnk5HR4LRZ9BhmE87bMmKmDymBiSetnnUbjPw1M6e",
  "key25": "368waQxp69d8sTawzd4eqbUPvXnAe9gW5nrunjzk6NTmJhUqWiSjex6XK4drLCWiyMd2WbJpFfn7AqbaHXoQWNqr",
  "key26": "gbcwfwuB4H2UzB5CthLpWXDbXz9XQpgF3fBq4Mdrp8PiyJk1VvVCQ68hkshKfAM8Z5h98RK6F5VSRgkyW2RWVHo",
  "key27": "5NX8HPYBuHRVvJAYwug5WjxU7Jt85WXwhLbE2MLMhn1VNXdgPpK12uxYiZskapurvbsUMjtKqsTNvYrfs12bQJvA",
  "key28": "3QTs5DtcorbVjtPdGYz6SFmQ7DcfT3fAQqHanQq45iFQ4jSED2akVgeJZVooKQvpwFVf6CKXjsxagbXnEoKHYLwb",
  "key29": "3rjektjGfCCfNCcEgnrfrvQSTGumko4oPyViztXqvi3fY4QGFj4wCndM5GPjqpzSSjgRmPbo4cQMwcfxEaFYCmjo",
  "key30": "3tSCdYDviNWJiZSKTHSqRs4hVpPdYmhhMCDUY8663BP1ZwPTK78oZigxBHsF2ShJGKBH1QmabEAJQaZL9dAyQp1N",
  "key31": "E7SYTm2vatuQ9QSiYK6VYy7DG8DKbZNCc55gc5VFPq6okf8TXMPdHmmFrJL5zUhhFoUhnJgRvRLorqNtucxg1AA",
  "key32": "4hi8Yjmn6uh2Z1uwHHR5rxmP2URdtwMKbm7eNBUEt9tH4gFNRxfXifo3FT3ENz6hFxEuBbBK25RyULJBP19976Bt"
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
