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
    "6ibJyV38ribwwA7w5zYapL5bXBGfSzGJ1wpjdFUk4CaN3gCi71AguqxVaAGFqWPQtcGbeMtrFdzfZwWAkUwfVaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xwNMHxmb78V6CZpnv3Uxkx6cYnSgCXfwv36649bNX2ibV58GjcHYTn4fPxgsXWxAdXj9WEoB8CjQzL3Kr144qJx",
  "key1": "3jLaeZKGHamobvJiUzZsKU8nM2rKgx27Ju324EdAaU23pAEdLmNKoAns6tiinvdvn7HzhTzKirF2UTjn9wmFTh2M",
  "key2": "2332swQqiDAWt28Wc9AAHCSNug8pvfAC21oEpB5rQnh9gDL7gzbEkc1KbqSk1nzZPygBP3iybZ2MnKndvdNpc7SG",
  "key3": "3hLD2enEPYZpRPp6DUmbGD3ghQ9jsWjVZzYnD4vrq9LzeFkJ6PxqhXGZRVFwgTcuRm8nHCftTQN3QjqwXy52fJFS",
  "key4": "Vh8uYZAvH3uj4ubCFbHUTDNkWezCArjrjfcnhg9kMqYQoZZneQzk8yZ3Njr1YnqMEbeogFyorrvvMmk7hWeHDh7",
  "key5": "4YAj17CmvuuVXp35nEQjE98qph3Fm6fCHhWgmQhuKJUnVufwNW1HaHeMMRkiUnZb1VKkC8PgtVehs5s9Cf8bsgj7",
  "key6": "5VAh85amBLKDW6KjbBf4Q9DjQeKtgZ2rLKmj4ES1Rqdy4YFLzsCjgFHVxd9fTKfavyB9JP1WXp7H1avXTLTYSW7p",
  "key7": "2AG7o3tKSMoWJtiLmLZweGmWRw9ehgQdQfABFdb2maN6sEhM2AJC3exXKJEPTMKPePv4mTLoFAgV6zv8pXbsgcBW",
  "key8": "nib8u793wrFgPCdqsXZkbGEzrKyQTqg8XAqU5pn2TJ9R4ScAGN1XftnsZtNh4MRKBa3tjsmmMTrkNHuGErvejZe",
  "key9": "haVQKbVAThT675jTLm8M92ujwHwUNFNbgP2mPWj7ZtNq4RkNHV5Z33pceTaUt82LSHupzRCHaGNsyQy2q3ptx1U",
  "key10": "55ZrUrR6eR8PPMkb8XcnxKbwG4t9VcAiPEUm1ZpxUFaE7QYH3r3zooyxJXrs9p9k7trcaj3y4xtwusb1Lnr6NC1b",
  "key11": "2pmi8UHgpmCkzpUp2EBxKY3EBMGRHvL3XH1teVtEQkAiP3QNcmECtykGTyo7c4rCpvoxeuidj8iVXYFPFw9V5SKj",
  "key12": "3YWwTfqnYrrbYU9D8bjFXfufVquzbzckopwZg1Hz8rVy2rJhqoBR1EgbTH444fQzLoZWotVYoqzwKaVgrBtRZVPx",
  "key13": "3bcyQ9QiNwMQFaAMWdBFP82pNnAewyheYvN1FURr9WqWuMmqwrBAm3h77fZXhSo1CvJUGARdsD91nzQdjkAraQ8s",
  "key14": "4ThePFwzeick9WXgrxLJBkBkUNwBedznNjsuBfmpQu3icEwMks5WncopZF4kXZvRwBckWFznLjHgTG9p31ZqyFAZ",
  "key15": "5WVHeYFohDwG8kwc9SxmKoAbijn1d3UzMVkXeY7zQqUJ87SJgQCHUYFxsMk66Zi2kbE26tbmTceAnAbFHxaGwvVF",
  "key16": "5q8HMJsMUuA8ecfeSmNNSk3jHEdi8WBH2wBFq1zCcvFu4HraCTLMPF7jxUnv3JacQhJ6sh39oAY9K1MjVmSWthTn",
  "key17": "3cBJ5eNk8K4W8bUVm6q8gdXJFXcuughopxormbJbMAQ4m3o5UUdo68WYo9pkWbTim2c47TSc9wmPUpYFPedoQHS7",
  "key18": "57syzDBg5UExoeo16bbyeNxbRteBAHswXCWzij4GLARarG17hJdgGPgzwUEp2STv3wSpJpjnTu7r8z5fPcpBZbVB",
  "key19": "2ZFfN9ktPN17pR1VU3YAQFVLYiCevo6s1XWoe6RxFy2dVJwAkPnW2cihune7GmkEmwYdsH8nf2giQP2oEbvhvD6T",
  "key20": "3kJdB4e1T1Vf7Bm4JRk1hhdpdcmHop6fenige6oaWjaQLx9r7TTtts9Rd9Y7DGSDF2qLkkkUQvgrCYShf9a1s5KB",
  "key21": "5BnazWJEUqSbbE4ow4V4uKLtA7c36Npxhdoj19pXn2ihbHafSGpLUURUpNiUrWSYEkdGGrMiLQR34wRxvWQavD4E",
  "key22": "4m5kG5tYuabgFBRxzxMTTiCiLatC2Ctw1SoRobefHv2GihGhTZbFuAEaxTQwZqM6no588g9fTNRdAfPiCdXB9ix8",
  "key23": "5NvJsWTGTcMu6DVSnf1y3eZrcXAwdYxFCxYQ7zVwyqLf2ubEmSHShdMPu6VC3EzVV36YiAam2E8abuuUvTBWxTuN",
  "key24": "4YzQs5J88yw9uksxhxVYPSEzaLGq5GrZK669d6pCzTaqFREKxX9Y3U7sCLRxDUALvMt1ZRaV3KLn9q3J4QSbLM76",
  "key25": "2CDg1mpoELDFAQWWd3eZwUTBHbY6sq3JwHv4vLKmYvfniXYNiLDSUMDfx5FJNkxycidbq8fbHagtJtrcSoeoKDBc",
  "key26": "2gML29mFYrZts1ciTE2DLzsJ7wtT6bm41kbvb3stf2Wm3tJQADVivHRjXrAbYCkAo3iZb5L4Fzms2ZqqMwW1YSaQ",
  "key27": "4vEoCncjqHgXWcKHHuJAyXBfTEgkjByypferhSKWzEgUL2sSpwNL7XDrQUUXYGwksVG6w4u7fkoqVewwfXBsyiHB",
  "key28": "4EW3Jk3cdLeus8KujfhAW2DmYRGddPuFA79Vrm4SWCtWqYYSFcF3SeWos4zhzVtYxN6BWyteQ8LphmRArUUFwoE9",
  "key29": "2jKNiZgH1c6LyDULKK3EsMwqbyUrYTEkFeoSemqxVtyBGBbpwkNRTqSkQ9qsrvWmLxDKggRXLwGN32SuUn7aFasW",
  "key30": "22xA1YtSheYcnz3WAa4JFat4DKz7eJjBKpcZoaYZkqwLMgJp2AJLvhZScwv3gpf6TGLXaBkHNpaqWadrjSikhCPG",
  "key31": "wRY1dCnU2YJY818TVDK9HnvZED1k2Bcs1MEEJeYd8MdrQ5CReskGomfhAnfJAFMkU6ajQcjoLvwY9dxCnPWWMQV",
  "key32": "4otWHRkq4bEHy7Rv3sH4Z1Hd2rb5ERkLbMsJ2bpsoGtwNsaFxM3uj5YT2cAPFnapTuc5J4CswQpv7rYcTJX9MEqb",
  "key33": "4ij3KM98A1YyPxHXya83Z5UNLJVbQwJBPwPoyBRS6sFmRiNf6hRp6egzV2WK6DoKtFWb5LMP18Tp5Tn7ZMLjMd2F",
  "key34": "4aycVNBHSeByjToKZvvD1d7DtdSKM23x7d1iKKt1e9vMeSeXesZbfeeg92ysexnkfniiwNix4qe1eGeWE4GZq5HL",
  "key35": "5PnjBQDyutKjQcuxtMDtpTYBVLX21u19JBjaRmU8SX2RaqmPry9RHWRauESKoQKpXoe5XcE1drLoopJRV8Pi9iG3"
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
