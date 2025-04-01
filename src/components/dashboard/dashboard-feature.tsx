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
    "3LSAHQZfeMoZRMGfShRA51qWEQSBjB539hQCPHMAvFtrWjhWJWhs1NNyCZNkLLmdpsuf3AWVPp7sxCgesbHwUmQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3onKZ93hvnoAtLs8NVZHJAsgQRDLwgjwqYSWCPFmacqJuf9aQVKygiRfkFZYWJojoefsxgnsFqXTGkDZqoDF6jT3",
  "key1": "28Gm8efisnAXrstNL3yZZz8NrZZCT2m3gigcR5KuyxUwRBftCPT2SCQaP8S5uDy13R4PzPsFmYDDhti1GgfJ5HVS",
  "key2": "b7Upvk7DMrtYMwL2cnCrUFAxZWD6vmMFdo8pmqCM39btcUpKaJBTdud2tgH9coksddqRp98xBZDCrmdevEkBKvH",
  "key3": "4Tk5CvMLpi3qJ4D8CZdTSSJEFpmdUF3ato94fuHMrYbYCvcuX5fyzxJjBmABRrgvPjM9c9pHE5EwXpAW4RQMroDs",
  "key4": "4HLEa3JKjuJzJGsfYdThTjpodAydEad1Y9zXzRweeY9JKJB93M1UFKZCyDryh5sTRejqEiqKjHKp7fzNEFt62WkZ",
  "key5": "41aXsWmBrKcwUz6UVpSepi3VYB3fuXmAw66ccpxqsvVfKwLuez9J1SoSazWtRgyXj315f8QYTLRTcQvLTR2WAhSG",
  "key6": "3egGxh4VzX1YP4U71XBWkozfXY1o6sirH7RU5ah8cPxYi3fF1aEX2nfCVHkwZt8nz8rXTFFuyj6z79XZxCEv6CHy",
  "key7": "4CodjVHXkyv7yaZ9WHWmgfSVpvAhyCQryVN93zabfskgdUhG8Z2CTMsZiijYWFgvNLBFJ8nGZV5LGow9foShvZ5j",
  "key8": "366UrbKzQxYmouTmaZT6vQSmTRARWWoLsAzF2VRfHon2wVppwWocLBTiSyT1LZTXd54E5TDxmnSs8LnQ1jqhxpyX",
  "key9": "2igGgiRvYkuCzJBKPMeZWoNKar8bi32draV4uyiccrUWPprTjsKZ1F9PFHGLe8PQRz99jJAMMxZXBUvmDT7WSh7f",
  "key10": "2u1gyYEpCu81LC4L7jB7g93fw9ygFK4bQsxQYWLNzbPSZhV85kw4gp4qUzNUsAZRNoadrxPe3TungwqVhXKTdyi9",
  "key11": "5bzyeRkHGmiyj3k4AbciiNQZjduyqKCyZGgZXU5YRrM1GSFMDasWuRpNsZCyJnXtUk1SCr5iJiGb5vgFbJ9Fssbm",
  "key12": "38CtJRNTfugXBao7mL6v3bkeBPnm4UzvSVRgFdBW4uqrDfFpMyW8rEQB2tKgdWd5XrSLi7r7duJ5EtfDDWxfrSro",
  "key13": "Sm78wcgsGWw1rVAGuqoksXjvoNxpTgLwrNqC62BYCESggttNRgwNJfAiK53CCn5egehwUxLR42WhZB1cp9LzpXH",
  "key14": "KWfbnMHotXUc22S29fut5E3FW1UdnVvc94P4nNXRefkYsEaR2AHceYpUhm5j1ju6DkJsrxpuXhhu8vd5sj7yS1n",
  "key15": "2zM9nRRJ2uNxHe6N8gHdm67mhtWsYWyYgCJo5j9mPjTMHN5nPoKmEnMtjZUU5swZByfJDPQDp77Gg1E9SfAM3Luq",
  "key16": "3FLvCzNZPMjLbafcJAuYYBGr7EWn2z1ZSgS6vAhnsrfB3JbEyMJch8hW5SC3m6aG51kZ8aSELakcmmqaCRuwTuP3",
  "key17": "3RNrHzC83YbtsHW9YbcmBHCtdPoSVvXh3acaZ8xuLDGun9GF3TcaHCLnNaD6pnmDhRun1W5CEJBBzj2WBmVwnq94",
  "key18": "y42xjdmLg4Av26XjzkBsUryanbKLKNEexoum55FiKQhFMuJBfCmFuWCf1gtMDQvwrPrkQjf2fFEEmSasbhPX7iS",
  "key19": "613fjSnnS4qfmrjrMiXwfvxvKQ9L7UzaqFu5BtVvVgd9PMVHZzZRCDM3DpDKGZivd7pz99UAF1XKnrzdYpAxHGVR",
  "key20": "61PrV1tcrG1wWTeaV7mBKxnqEXREspUdTeAhdtJQQjR7ngDSJeSueQiFsUzgm9Xh4Pxn4qGS6v1fKj7gP4HM8C1w",
  "key21": "59G39C8kM6uXW45aex5XmbKXAiLfryZCMoQnE3of5THdCi5GcZa4QRi1DBQUmUsgRQmrMiizswDVdcQEZPF2duBR",
  "key22": "3mWGraSTRgPr7KVTNrg6pToyCFM9u78U4q8htnJ7GBjQefKoBTbjHci6YZM1qXsNQobe2CEFcva8FAMzFfHmjSFE",
  "key23": "wedyqi2pAxk4khkLAvBUABnNeYf4nGqHPGwy6hGkGF9HTKB1E985vx2q16McswuaAXAxwEkq2U3CBVE6PEhjwvW",
  "key24": "2Gr7yvS4tgMjf7hfJAC3xe2bgnqDBWXb3cYKUTDzkrqadXrim2ykfRVL7xDU7AZw5B1RjfAf5VAEV516sahfM8WN",
  "key25": "4YnJ3jP8XUgPs6J7rBEBgYv5o85QWRGZRx5cmN4Qh7F8U5f5jqMaRbH2ytASD61mMvXVejSZ2M2YqR3ApabR4vNH",
  "key26": "53iWMkWd4HPthSAwhhUaDmtnc27UBzoqH6FRuyFYJkZU1y8Zq7x1KAUhPzvmvtnpfKD5LrrZQmsVhRAuhcVsYt4G",
  "key27": "48dMPD9mJP1Yrbz9cT2VXVGDUMhSg7hbxF3m7xboLVViNF3tGZVqM3tV4xyY8EUdgQMUbPuVMpDuHHMnbsbAUrbZ",
  "key28": "42fu6jGX6N5VhS1RidSwLeVpviVErBASLp2gptrVSx5aK7pKnckwXFR2RUkb3JJQp8KgqWMUaCMw8av3YvWBP4Uu",
  "key29": "4A3dV4kePu8YDQ8eWCbxZYVWZgesdkmTez88rtt51LgdPDeYoP1EmRBsSzJXZamCwvEivwgnZHkNmWdqPnEs7v51",
  "key30": "2fRdPD6QckXwb1EeQoyFxyQ12JcDFZ6zRw1jskGr9Zd41dXuojajd1Kjszz1YpYoq6h6fCGcdjFLGitt7Hc7vURX",
  "key31": "5tr3aA8cRyGQvk5krEwt1e9QahRH5RFVxXVXaAmcGj8rts5UYVgzreEvDJfydpZnN9EfUJdhvUsJmDPTqXeveiay",
  "key32": "39o7AVRby6kcRyY6g9pQhEJ241kizProfFpds1RCidSHmYwyNMQmMsQqJqs1trgrSo1ZkRmqwekg4VtUhge4EUcE",
  "key33": "49EXkdntuK5gzY7UUrRooM5i68w8vGFiZWUUihJTSYuihCTegth7JLhdFmAKydKnkHUMFjHg7YrSPMBT5H5aoEmW",
  "key34": "5QMoGw6DgycuSeCMscXbFKmFgZRNopPcf7SberXmKuzwxQCAY6d2xUCzFbeax7Bg9qALwwsnr36927BaHs4MrjBX",
  "key35": "2MQfbEhpUtWQX7asceSrxQxUiYzF6JkWqzkkSXpC27BdxMaA8oDkCDXTyaa7un4ucrMbPKctAJzY4wab8CnVeZfF",
  "key36": "4qfVT8BxLBD1HHtivfFcf1KNqzT44wnT5fmy7wh9Tj4Pxv6r4djcrMzQS8fVdtuS1SUZZxCrXiPQTKqbMob9uCPw",
  "key37": "4xcGNuewTnKeCazKHt9NsB5m4yRYdUqfuJ7BkHVQ6rfvoxd2vroxSE28anJ86WZSpt6wZ9ktCdjcxGw3yu8tzqE5",
  "key38": "3tuRU1j3sLUvtboVvCzPQLozwWBitxZPNqknsxssdETbjYAZpSS3ig32qMQKQoXZLyES2g45NTbUbZhQjGh7PT1d",
  "key39": "5F3xctbHL4wRvsRvVCbG7afD43faajmZJot143PhASVZ8shh7ZYNUcef3fDiF486NAohKzLFPukwA5vDNFkbh6m2",
  "key40": "4h26LDD3jq8qAS813LRDhGpiKPXFvkRaF9F36yJd3oBgAgEiqn2efXdAoMeqceVZqY1xTSM79egNBR1M92YVq4pV",
  "key41": "4DqHssx7uC9WJDq9QZoYzkyJ85eSjdTrRqxMUVLm65iztUQ5MvHn8HtD5LSoebQ4CFDYbwa7NXsUYwNFRqF9ZxUc",
  "key42": "5BmT2XtcjqdDF3VmUeUiabcUdKj9hEMj7gcrUiqxxHDs2QnMaonm35tyR1n8tvv1bUBDFKPNTDpeQNY99QM4YLgX",
  "key43": "4wVfUJn3asuoM6j1tLHrfrQA23fNXVsPAUJqrwah7uyFqb6YGbViEnpFTeg7xTWqUnk7bKvUwZmGeHpdiNHiBqF3"
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
