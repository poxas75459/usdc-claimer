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
    "HTZnXQ7iQ1Bbdb1ak4sEd4r5fnpXD2AHUEYJBe5uuhz8HsnKVpwjK4GZWUkmvbntBmeJZTBSuNg2wu56WqY1nMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51UQQWFduiBCkTXohdF2M2qZyaqdAGuvJSbnozw8DucSXndkzdbNxTVMNu7YDgXboYXdmWPh5NUuHPmZNENfjHt9",
  "key1": "nbtDN2oARuJ17ryXLdWzU4EraRyFuhhosBFfLiwqJcCTYD1jNHCe99Pu6MPLDPg17C2MQgfCjxSJw6NxoTchqDL",
  "key2": "2KSUS9D8L7qJcdLSvpDJuYjjnyUasse1vPacUaXqo4A3GdfbojtjDygLTzrV9TV935c7KQzJ2M1jkgjjUMXQTkAT",
  "key3": "3Hduufe4UprpBA8Ka5tvZiZn6cqtGN7UMvq9bFJhNaZauwAhJ1zDhehMzLfrw4eeyarp7g585VkRHCEoFNB7pHwo",
  "key4": "63s84TokdgDRgWSu3PxqCmrtQ5iCna7gBhoipdkMLjzr2qFRkp1vu2GneaQconQk7vnh6CsFneySDiZQBgBjqAyJ",
  "key5": "493TL8DZ29bkDD9U6Xn4cEufx5Bucti2EnVput1AkayacVp1wVLFfuS9pH4siwc3LUL2fjscmXeQ4GiSY2j8ntWu",
  "key6": "X371ArA8ZTuQEfJALDvP6Nbt7eoNJjEnTtEMLBmxggPHKwdTRSDAGpPxjRnU2d1FkGn2c5voRRrNgdoXLMygwjQ",
  "key7": "5W2TeLV3aXhJqmxZ8bbmc9PLhQKdKKaZoMWbVVDDQFzjSdyr1dHHoZNGxQWRGxN6gJEBQm5a6TWgE9r7zG6X9DL9",
  "key8": "57XFRXCkirSbfxwpzggsXQcEFovxKfwwwRZ6SLuFMH2fHF9Fj53dwDEf1SxXvy3EKcsL4WH9VWfzyYuNCZxu8uSJ",
  "key9": "4sBJtW2bPhDGGHRyeh8jNLBstfoEmuydAcE5Bbs8C3DkiscSu7uy9icofvVjh7SxE5pmqwgrEnwN6xv5Sb9RHkbz",
  "key10": "4bzRUQ64CMYp2ssoca1vj5NhMcEio1LpCr5WcTbDx9ZHhsLjymvGfJTjJVkd6fCtyp8HiCV7f9BdnJmk121JAV8j",
  "key11": "4NVRPgNzTcLX1Am9zdAxx7AnJH4ey2MAn7pqdce48nV883s8uxv7P6a9HRToyh31BWPTkkuuLJinCiUZf53KaRa6",
  "key12": "3BxpZvWgsph9hVVFi9etTmCLbsk96HTXWyk6wr1EpVDJ9QrJbd5TfPgFYZoM3dQQuxjiJ8ZfNiX9yTYeGuyhggFZ",
  "key13": "5NSuxLqYAt6zadCcJp8Qf6runTVKhAGLKgaBebBsUtFXR467JYDHsmsMd673qL1nbbPEx4GZ9AAsPKbBK3eAfm7f",
  "key14": "2QBsTbyy8sMzcAE9pDiTRDtZsWS4zbfKJPw87P2W9xtDAUZpbqoN392vFrioxF3fZ7Y83Rwm8STKTYAQJndT8bEG",
  "key15": "CGVmsAikkrAASNe2M8bbotftRFZRcnu8GJtnPSMAWR82RUFeoVypfEtjvUnqJ25LnTFPgnyYELi37e9MNeX6i7G",
  "key16": "4h8AwTQc7QVavQrg9BU54R1APTiHCEG6dhegKoQTiHWk5u6JfUjQxyDChAbAU2quezxEjz4Y2bUDqavaJ2Vevi6a",
  "key17": "5uDV5A7DgPGBcFJ2pZBtkspvJaRZaWHDqfY5H3XFC4zAujCeyNbidWGJCxqVAcYt8CRGFcq58AqqA5HrZL9NqCSM",
  "key18": "46GTgKmkmrEG676HYP6oKLQPQgpPprJi7tPTZcCJHZj2iSnC7fhtspHMBkoodwQ4iavvv4uAFXmgq7QRfVXAKG11",
  "key19": "UBZRcVRk1umhpomNqt1kYEZxiACqm9rnWsR42vQAPJXFeUKBmPg3g5xTUhNAvmr3vwxj3QhpfktW5sAQFMcF4dF",
  "key20": "5gpW8ZeGtFm8tUdxG8yBvTLfyDJYwZcHAVzaXxkP7FWDDQ55B2wzKa9F9znrWqfDDff7ktMuJsQZzrNpfBxyG6Mi",
  "key21": "3vcuy16ZNeK1MF5x6SW9e6PTcY9aAH59uZQsam6k6Unkw8YbvFUjU7KX4BYBea87uEKvSVgkWV1oh2UxTDzjnu57",
  "key22": "4UdF1CCaEuLvbs9RCdkLbqSr6t1uKKYfvuNtJZi6eFmXaA8M8S17Jr2crr3ZbwVCmZi6PUmVX9vB9zUM86XF3jbr",
  "key23": "2v18H9o4GJymNi2W1rmRSaeuJoLXLjCzk4f7zTgBktrz9R4dVCginwcPsMuUy6PM6Lzq8zm78jFaD8fmgiTqfFbQ",
  "key24": "3tmLg4uMXUwVtA1iTpSbaseUP6uXaffZf6EzBJH9FAfQquSmB5ykdYYFFCu6h59jGVQFPpqLU4Tqtq6YiD1gHWZ7",
  "key25": "3BtnhyUghr3ZpgpHds3ugkrUibBViKMuJNY3bb6DzEGMnxQH2B9fjKLTyAsVipJToa2h7GDmTuUmGkzQ9AJe1PQy",
  "key26": "4PFZUNNhKpNsd58zhDYAAoZv7D9qqa63mHFET7oxu6a1fAtpDYDkz33peYuiftSVjkr1uiXt1EbD42Amnv39URg9",
  "key27": "39G3aPEyDPFbS6DrDdQhkmCL9BpZKqyMNYfirFAHxE1QLYAs5rphjh4exUCNBTga8jeKZgcVDNsZMhje79DDDQVc",
  "key28": "4s6mwC65LqHW5AYRVyhfJpyoUTTH7N6uZjUrTQnM3AZjeuQbuizWBiPfnJtz5ujnsWxqh1vEZBrdKMR1zGyjj1av",
  "key29": "5kqXiwHUMZJ4LckS8M1xcaKXmySac39Wpwm5VWV1227xNhqSUFreMC1j8XpbdaSg7KSq1oMkeWZVUtzALANZnB3p",
  "key30": "2Fczv3fzH5t3pjXZrhf1sbXcj8LnUoWvUEjPiwQgMf8TWrXHeFVnfa9hPjPYnNP7CnN8eeek48sPrdPcDzEkWCNc",
  "key31": "3GWhJpGuq5oR3UdPCWS6f5pHR6avekKLfwAu5GSeQMb8WqAAfNerfx5oTvH8JPwsZ39wiqqrwNQXCbcnNXaFWAVA",
  "key32": "3FzYgEr6aKbjimUNPeQda6ZDLqQq2i5zwyXuRqJKJU5AWBMgNo9HUXhi6DNqmegPGJN2heCgMhQ2CJk7hNnQpsaA",
  "key33": "2fvAop21mhEnakpmc5PSsQE9JjoZ8JxRNQgk9RbtLoRBGzw3dLXs5ZuqaHxRARLb17BqgpNWchNBvsmDGmFWiaJH",
  "key34": "5o8wJziyUi6P5srrwi1MDoSEcQfZto37vVKEHSVhGxEKfu1TF8ETJUNrSXbjFvVo3cnysj9Qr5oiqo6dkjJbKuu2",
  "key35": "4Ff2QKJqLKB46fEAAYqqJib6a8wJRbRhiSLgZcLHBt2onvmbvKfLwcGNcadwFphD277BDGw2LUSfjhmcWSCUXtpi",
  "key36": "49TjGG5XUBEitXvfjda8N6untYH64eirLacGYwUQqNL6dobkWAxV3WLXZfqWV7sTant3VbikY6mVUHgSA2BkTjva"
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
