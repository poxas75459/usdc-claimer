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
    "2gDwxbiLRrBZn3d6WxAY4Gj8Noyj2nWVebmfcDcoZTPznnYfhJq6HpdsMbKLidTBVxo89jeiA54P9urfbfSxtmKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zKHPKbACK2HNtrFDrFrwYCfvjcY9zNtRzjVRy2QMvz98yUvNNgxanvzwXCvPsLqctLU487dtyhqwgFu8kD4u7hx",
  "key1": "5tAVJVg8an8x7hYT1VnwyqUcSwViHcknBdvfv3h3AyaUmRxW8nqwwT2Nguo26GV7iY1NG4eQTAEffx7y4CzfA1rK",
  "key2": "SJy5rc2SDhVWuhUzBs3UWDV3H17kSpQjWeZwzYkc9nvRkbvtqvgAwxxaiKHFcWYiaEDECeUNP8AsQKU8dyw51jk",
  "key3": "2AdTTWmFDkHpR5skFm248ZjpKcTbAiiHWcfdXT4ho4bgHucTGSbzxdH61HAeCD15w4d4AjCV5vRZPPLkf7inHcBD",
  "key4": "rGBwshjh7eFpAmoqTVhKL9irmpnpTd3AP3kQUef9DHy3s6kfUioGtAYiUJoBoBriaectKHMYP9qbCuozWVAeTgj",
  "key5": "5xjnvpYygfsjRzqxyWfsi8uK6JQWufGbcaq5qzSA9eKacoFqXrRhNJKEcTBAnhsDJ6WQLDwuQCYtLG4PTq4ZHPz",
  "key6": "ijPQMy9FmWTeZaeRjCuh2B4GeqcFRvmc4gPeCgVxp799ExkVKBFWvz82X25Me2rx388UBdvorHUUiuwHudEdTFK",
  "key7": "4GPRbY29Kq6mSGrvyDmWqWSj9msC1wyutcvP643aufD3Jmz2PvHQq9Pf5nWmLQK4WWkFCWH72KpxycEiBcuHExhp",
  "key8": "41E3hmC4D8szeqjyPWbPFgLNZXkGmQ9JhjtyRqKXZ366Vza4Ur7hQpuZJyBqC2RKBhGaLDLzaA18emkc6cZa44p7",
  "key9": "63ADHcpiMBPbq1FGPiGqvRPued7no8jtVzEvGdw2Mj6MAEDJXiefsayx1gEWt4CaRs3VLyjwNSuaZZQpVt4WjPG",
  "key10": "2ZLuKMMYphG2Y9mDCQPNCoq8R2BQS7VR7dEtDFEyoVti7wiwqDmmChCDN8tyR4WzE3MbKiHnWrqawoRxAkWqbhsJ",
  "key11": "65QnTxgrxqzncaCGSaM5SUvpfGbf4MAaiRbgEGWs1jqkGBgwP3sJakMBd7GhrEXDkV4NvvJ9dynsPdhBLu3SEEJv",
  "key12": "3rCvM6mPZUQob6LHVxY32KaqVtPLCwnJxPBZHVR3dB7krpWzBkmNCjX3DcZwVNs7bcvkwyKbGUSWNNzqL19WL3Ud",
  "key13": "5DCGZeK57S87SMUNqMcW2SQRvqXPcsYwwQ1W6msKitAHuLcvR2E9eQpyy59EAJqaQvB8waq9mBUochqhFj118fpC",
  "key14": "3Y9oCPJHzm9ySJMRKKHr5uBLEJqcLfF6uQVy8biQkQ8Zfv6e91R2sdARvxmhBGc7qvVEyvCR5NfUhixzFyUiK9TZ",
  "key15": "5AN7wMMTagPVhXFYeBvzCz2QfdjyRWHEMcwa9Xk61y9v3q8BRjYZNCWjuu5JnSeQPZqby7Hsf3fMXEYuHvcCeAWZ",
  "key16": "bkvP4pEMe1dufp9JaH5enAgGapz7WtqHZNZr2EHyq2Ekw6WFpGj7ZtMYjK3sTAMMtRLpp5pfD2ASj3SMSRPL9Ms",
  "key17": "PM8rDkb4bV76tMN6B7EH9Y4varNZuihCbYUgd77LBaPTXuWPDka3ZzFZSvkS9qcA9iusUBL7fH3giHQ1z9GVmJ2",
  "key18": "2BiVy95hTfMpVFhoxkQY86uBvRoH9pqFQSZL6pXATJaDUXvG1pfbtkmL2VEAfvyxiXWDeVd3dnFDr6MB1D5and5x",
  "key19": "3zwfba1PdHuHcJJQa3WBK8ZTH7aKNdwkCEQdvzuLQvz5rCdPYFBssSimgY1MCpBPNWoeK1k9Zcqm3Xn67UGJQG3e",
  "key20": "2AxwMLUPfALXjZFb4BLNYPPbsEuSDwAWisK17z76yTwfSKCsL961yiS7aVrhef1WmrEvqjKktdHFz66YbPX78HNm",
  "key21": "5NqSeaL4VgK4KNwnBMUkuH5BWABhKbpMbJYQBaquK5mxbkuJyjSZzBQsa47hs6Ydib3dZPrmE4a8Zwkz7FTrboSr",
  "key22": "31XaUqjHTmyS9KSk6DNKXcN9ETHeYrae6AW6zucJ5hi4oLiC2hj6T3BsnSqGReASX69kEPmQhMv6qL8nqgi4SsQ6",
  "key23": "5n9jVmeznhAXRzyKCiMAMaTSWkwm2u7HqAD94b6RggJfi3h2ZKibHJopsqpZ4SBjQr8kBJYqjBnVjSmLexEKm4zf",
  "key24": "BBa9vPpRw2FmCdyGQb3EEhH9RkpaMfDK8SEoPG2gtFzrzWR7qVBLc2yd63DJjrkJLjtgyTJS1JQhrB628pEbee7",
  "key25": "1G4jmgGskHfp3F5p3C9RgiE8WM6rtFk5TGD1JDREvkdmbcFVY3hQvURmBLxWPHNGvFWE91fKczPxWYAP1XoYgP6",
  "key26": "3a23caBC8bepR4X1xiptzwunFnczvbS57a322YZAS6FakmhUWPxcdGqBw3bB3Te9DJt4Nv139R4zuBqqMJW4oeMg",
  "key27": "NuoDDk5boSay8GMYMB6j4BvjxcRAkhuu58Jk9UoSjwyBngECZ3xMUTejYfBLQPzfMicPmnippoTUy3N4XkPrh1F",
  "key28": "go2JwMfYhhLY24hBMcgNYAX6H1x5q72LFy9t6iMWfu5cQzDVYAQovxdXAUTn5Sqp1jcL5weRgKnWDPdzzTcCYCE",
  "key29": "4KN9qaeEQT1Gjdg4q3JsfZfH5Qj4U2LwVc5dfaFvvHdFrvWy2MmehMpWxNCjPDqaKfuDucHaENepLhwgRWxRMUUi",
  "key30": "4FrVqTkva9xRCeHmWSxgsXF2n51AE51qwMXcTXCVmvmnEMvohkP5b6MMwddzyuE8USdaFdjev34iS6PdTh3W62RH",
  "key31": "2k6cf2utDBTLZSyEmsMT7gq7EdzLxQxDHbBrrpAsARGoJDnFDd9W2vM1DSWrNPh3zBedM91VWiMUbeTw3jWvgeWV",
  "key32": "5ZA1L6nLAyX5chZX7jfQKuxopqsd5oX1HLA1M3rA3A5GwBD3N4ak5Y7jrAxQ96DLZdLNivK9yB7ZL2DMohsDXrKf",
  "key33": "31gKVSb3escvZbeaJramSHeq5TJY5GdhLjjTazrcQb7b5iidSR1GeLuCKnteERxjeFU5km8xqFkb6BeDem3CR6JV",
  "key34": "595DYyHKGM4zEu8BA98yK4qTBtApYCGBuuggXgzWu9cF6i3yqzAC5G5nfGQTue9AkqTVYzhw6kJdDsXzxVNtRodB",
  "key35": "2i3TcayGzzC1aruTSzkWwasgdhBRh4tCR2P13g2HxJmchR8Dk6ukekADptb3cfbgLVehmf9912ZesnzBbsffpK6y",
  "key36": "4XeW7dZrTNPFQredoB2nGUR3b41NRGWQRERTXsaU7XLi6T9phVazH8iJcFw1zQY8rahs4NdJXRhQSRKhf4TayqBB",
  "key37": "2uDLqUmB9m1joQ8JNfTuGwnxDnwZmjaPoojBrzsatAqKc3pCzxEMYpy18G8ywZuDa6dSWyCu7zs4aUz2t7up5giH",
  "key38": "LL6ayHypGGqN8dgKSyh59D2cTPJTzS3DSb4Vug4y6k53k22iVWVGkzGduycQUXdpeJww9HykqBxna9msqKVKvES",
  "key39": "U3v6XVRj7WtZ7jPiGXoQRvj8xza3zLgDfkTGKouif3pjauvBDhpvKmrVSEGpjSbp1Eocwpjhv9AgX8gCwa9RRn6",
  "key40": "3gwjZZCUEPPaYmjnoLhaL17UED5ocggrytzC7wgtm1WT1SjAqhrgvQKXZKXrUXSoK3LfaRD5F5PwzDFw46PzzBU1",
  "key41": "2TjZCFesFHacLe7a6BkSHdgCiivYP1bgARuTNpNBZShFNihvFe9sEDmtsFcrnKqm4SZ3bZGVHkzH37q1uA6SbCNX",
  "key42": "3BcYQWwE5pQ1u9tjin8G7jPQkgNvRk7vySY48jLSK6KksEHLws2mcrk9tGdPcXtem9a3DH5pfY7Van25nVqVYMVN"
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
