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
    "CSz5Px7KxPKU2tkgBifeKbrbbseJegoZ6cqvxmTyJoMQfEd7iPCWBscszdmABbUZ6u31DuU12PNPynzyPwPfd9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "swhPvLuYbs9r4SKkadcCtDosFRgXLBLquALfHA3nQnPGAwmGQcVRgAzNkeqPLSn2EEqTQvPz6S6nDkHgXTo375Y",
  "key1": "2osPnKJnnario47emqjsstyDEWt58yMAwwFSeouo86AdHaEKhJATSe9pryWJrEFrE1hAJfvMLfSWHrinNBL6ukc3",
  "key2": "3Mmpvo2jW83BcvydEFjF8EmbGQhwU63qSmRmXR2yhG2cvNHVHJeyePY9JvsYowSzq1TgqELxqa8XW9rA6fpfxTts",
  "key3": "32WVWCMEgBMT28VKxnHAkxKoWgPomLjBLX8e5XqMURkZJgJKTeWYkunyZ24mqeL7UN4vF2tdvHcGSvyyFEHf7wrY",
  "key4": "3runbujWS1d7S8WeZghk2B4678qUvpFw5evUxdj9TEiwNDPgEDyibeHyUKpMyTEw4cdPGFmRwy4AnaBzDhhE2KV",
  "key5": "2qXAnDTKviRoHuHVKp4tLTEuuRD5QGgCZsJwg4sPTJLnHpgLLzRYJxKwuyPY3W3NbXzQdrX2qpX4uDsC4cvFN987",
  "key6": "5trqUXmwpEmZEFq6aCswPTiujW1Rr3i3fbknRysJxixFYnd1NMqjmL3Rx1qjYuqvupRKfuQdddgKDRkjt5iT5cwx",
  "key7": "5difYi6caFgCyJwo7mcX1rTC83BmwLRgU99LxZY2ErQ6FDnteaV8mP9ekVLgJUXuU8yVvzvQFBsaqBQ2tcf2wTv5",
  "key8": "4eQz4MLyd8JgKxP19uBfhmGyeT6gWxgRaKzvBPcF92KLamjhsG9bUgTdZJR9Hdq9LcHW9C8WPt5s5KtBAPNLbzie",
  "key9": "syh39YnoK7ZpT8eBMUmae3oLsV2jKgQpGxJgf8gEWmDVPKwhgcn41M8ybTvQ1fCY6yu5yaPZS89fmywd9aVVTxJ",
  "key10": "RX3mhzceNdjkcefzDukBat3hr7xbAQmfr5Eu7RkynKXDUwTpT58AiA4dKUPjdug592v9mXoaUcwntzyGS4p2vkQ",
  "key11": "pCVm1DHWbCsVfdkR5CZfKiLaeHGVaQijV8KaUV5AyyoTS3Nt49bAgZa6ANF2LBpv5NDaAQKKMR88dVRvxDyK8Fg",
  "key12": "QREraHnnW4GnHEmd1XWGJDrHdd5WeFGgN4pSxAnkFgyV1zniaC7piJWX1s19P6iB3wAkZMj38yVBByWWNrjoG3R",
  "key13": "3hNfBZTG7wQPMSFv98jteYjMPJYNRKZKcFcdLJhdJ8xWWn1FsKcddk7PeRWCRdhjTmMGnAaMxe55m5tgKiNGHi3b",
  "key14": "aox1pY7BkjdXHGSTGjq6HJt7RHjaair6xzbRb8Rt4hPFmmYyYQ3ByJz6LRYuxLSmiP8EkwzQRnuRq2xwxvq1AS2",
  "key15": "58tmTz7sRYF1EGmxhkvLQ42G9BwuRpujUHGnPY3jtmkPjoeK8r6MopJYt5GpNpoMJC3F7xD4w9snfiDZzf2AUDyX",
  "key16": "3LKanjcqZkbC3oekbAUnSpHxuGbABgTi5sjPscFmbSHAKs1qaKLhrsJXaoLkZxMh6BesJwz6zDkcxvrySpMWDcpu",
  "key17": "4Y66gmMTegWBZ8Y7i4dhsauYj97ezW3CTZ3z9HbJaRiwTT4S1K9gSZ5XktGXKeUuRWswefoFya3ZgCQG7Dnspho8",
  "key18": "n7P2FD5LiBmTKo9TCbweDCw7rt4xnWMQZsg6iPYenHTbawXcjvom8z9zKbWahbNyJpoLZEGMsLuEEAwWQ4jhK8p",
  "key19": "7zRxwbwvHh2NCqXm7EVqqcmi7WvPnvkFfodeFmPvKUZFmGhV8xoUuVr9ZfLkVhgMZZNkKyjhssrNYm5rMUJ6sfn",
  "key20": "5eNNdQAhiH8oTrdUPsadfZfwB8prSTqaqaMstJBSMnFZhq9iVtrCveyruNTTMDPNMjyRzHYh8PxgYy8iSPRDRm1F",
  "key21": "5oXsdyY29W51an1sUz8wdqmUJf7kUEhT2aNgtr7y9ZwWKbY3bhEnNUkRUzZkcxhhmtY2uHzsXCoJpWCqh9Mn1NkW",
  "key22": "j7bCkVtZ7r9a5YC8p5Tp77gyGERyFvnnwYC2EeVbSP6VRKMYPiiNHMbydSABsygp4bmUkF43stwMcLuHQBvck2t",
  "key23": "UYGnTUeijeTxSTms92YrvPYFywgLby4VkJHvoUUusvCxbo8kNJSSEsGmcsFFnGRoviV38rBvjt5TeoFt6mAHNVp",
  "key24": "5AuxXfLLmRGKxEZR3EToSbs9i9aHUYaxrVf2TcUsMnFj2AbLK2Z8At1GacvYt2TEKC8Mh4EUSXxq5WD3L7FUMqSQ",
  "key25": "HxtsqwtGSWZL3ohZ1yVtdR14r78jSxXt1aFgVx6jdCxtjoySpCaccN2v9sGd2dGvKbNvSjjqq4QkEko21iMMkXx",
  "key26": "FNQTZ8GCUwhgsnJQrLycAZNQquMqqZGBraHJ7rFui4ZiTnASzi2sNMcSSq8aDRcr3p4aXDeoQFSzXxJKBzzrDWL",
  "key27": "2TjcxDpCQeX65N1dutDfhNHqnWyPuP7U4EQDyGaPZha5t9kZX35pzb2mXSi6TDYddesYMDieywCjAHEk7QVMwV2k",
  "key28": "C54DKTn8Rfed95CWZjd5fdmnGLJ8WQQ9b6D6KFmiWdJXQnUmH3VyoYNMjsJ2a7K5rKZyfGDWrLbEXKWVRWbDLx9",
  "key29": "uidxy8hJEAaXF9we2P3CHYCY32U9XAjYervEzZX5jhUsjVj4PnXQs1zEqcFRxbLkcYv2mMdCd5Nts8wcGuMxQAF",
  "key30": "4usEVSD6zmboXRLFWuN9CBUMjpW5YSMZa4BvdBUXuvU9ES7Gzv7Ro5JZHiGFnAFM4H3tXK5cWaLCQ6z4vKbLsDrU",
  "key31": "3YatYgepckpgGJEpH1jt7eDQRwVgGKr9RDuDcAbm2tPgxw2AXBbES97434L8vGbSxdEmhxUnfpaBoSENdSLoMdNP",
  "key32": "58r5tMPmoGsqmwbPoo8ZhtP7NEmyMgd8gjzXRnAaesDaLwBEMySqXKqWSNUFWChP7A9saU1T88MH3vj1kbdPTNwF",
  "key33": "5PwaWxU5cvgbqxNf2gC8wNBJoLvkuqXYDNSCLoxJk9LtqsfG2n4AXFdkUmuszDLjxLFYmTVnCV9mLRF2fRkCfjAq",
  "key34": "3Wmz3nXyw4hF77N7LKeehnY3mEfyryoqQZmnCgom5S72fnYxu6BPVoHmRno5pqhfazKwXGz64KSBhPYPjX2LwVS1"
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
