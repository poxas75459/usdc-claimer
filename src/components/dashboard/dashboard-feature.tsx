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
    "23mKADZEaqMmxyWxDsY4ah6feMcFZ736xGGLhQRf1njPVnfmDyeeHo1oxfoxiwKDSSBAiHFVo4PkVA6ThEMq8UPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vUQ6VnuSCrEyFiMyDNZXyS2d1HgDbFLHNmJuEcEMP1govaudRFGFub8shw48Ch45aRDSSTp4dnL8QifMcku8f4E",
  "key1": "5HbTMw5VmopppzgBt5C9AF4CVwhH6dZwZmKa7hLdFf1GZDm7MyqSo7pU5WGtiDnTm3kp8gw5LRtTvAAiQUkcs5gp",
  "key2": "4WGzWkvQGa6BYkpAdJgmXQ2Qe995UZg1rYhHNudUxi9wjxeMgZ3DBkuYkaUgoiGWGYfLNvHH6gmM2TBjg3HwHyxw",
  "key3": "X2S7FzGxctZ4QAjYXgkAcHK7GbTQpviNbfzGwQ6sC8UrPWTfr1Zsi3jEfCmtGR89kVq46vNzt5utxcEhf7DCKXu",
  "key4": "2jz2QpBBAhQj2Yv2DrqP3HTDAbKdZXHYpWMpT2wmoU9HpQH9xxh6YWDrZGUx49RWjtUbAnvvwfwDfm5Mc5NrCjpT",
  "key5": "2aerp67JhKLxpiwmd9Q2fNMSpTTQvaEXBAD1ytfDUjaWE3vmboiT1gbwC48YA5oUNKqNgBxmDPZPDSCPgUeBB6zH",
  "key6": "2kBdnakE132bywe8TQoR8qbNz5XwtZ64qynt1i2Db65gHXzyfobcFQUL3f7anDWWdYeEcu9JUWRCdoFXpar6kKHF",
  "key7": "67ZuVKiRKhPBXURYX3jvQxgRi6d2Wr1U9KuVhmLmL16btFBwpbvabjkaLg6a9gVEQ9ZTfMyTjEy4UpzfZEjND4Ck",
  "key8": "66V4hVLAtxjyVNgQeCBAJbkAgeCxMWpgj2EcaYgmPrQYgCsPxYCRzUpr6VM7DmRfSJM2Y5H8kUhNJqdySuto4mtY",
  "key9": "2mPGt1F8sGT8k8TqyPX8KYZTGP48CTdwgL8wL12X2g2wKjBnLp3rHUnFFRw1sjbqxKHW78kBBFBp9b883YmzicL1",
  "key10": "56Z25eZzadedsyAmE7GHTnbg4QHnsQKGxAHFeqbXLbBHULcdzatjCB48boqoeMzLzqyP1vfnDopgpHzroPZjNuPS",
  "key11": "38ZvUMC5gZWq2fY8Ws9RamJeiVKmb1HDtjje4BphAXk2u64pQAqTMBgnY768zARUzKydgzfSZuaUmZ1uN1KERKZJ",
  "key12": "5xxuZoLwLFJkdbu6jY95KcHDvLCqsRq6bwrz2aVZmaGTWB2XHrprdBcLKfym9bqwmcskaVe7WbZUxPGtSdfkQJ3h",
  "key13": "2Y58m69j1FwgQ9U2XPh56nVGd1geGZXLdJ5QCyXv8jBWGH33ZFCpGdr6T35X7vbpxVvfx5triBNnB3XrYtvHf8ab",
  "key14": "cwTVDgDz2AeENrgZ3u99Hs1bLdQ3czR4vc4zB8NAMMb9qPYJ4hwCe8RExCtSJ2ZfwrjUemtVe6Nzcw5Da1LEjbS",
  "key15": "46wDFhRR3P2GRXpRmn52FSJUUsXHpMLf9Dohn2UoAa5bBvRxQD54vifkricQxSjk2F8rgS3LN4JuJM9nU2LoAZt4",
  "key16": "3MtuBjYrTkFzW27oD9Hfu6GHizgaK1xNSdhSiSo5zD7L9PJ3BSq5GwCmwvuGpwJoYnDexrQn7HN84sj3J1rkxjAh",
  "key17": "65UgjpLgaG1Pw8ZopNMiemnBVPxCkYJxkpwGGQgT7DTVrFycaHPF5z5bT6KRG4z4ecDCrzx6n9gsguqKxU9YdG3S",
  "key18": "bAKBmQ85YVZBCQmLowhEhsnQC2vmtcNpX3FJkBeNYs1rFUQFd6C4K9UmF97dtXLijbVupxeNUSAJvYnuMXBC32Y",
  "key19": "5vDMH6KZLFzjdqJurPjerqKjzHRb4Li9ZHj6DcXPEXDwT4jUyH7DBCXyBRNm3RmyteWxG17gJ18x9V6y4in3vviA",
  "key20": "4P2tpXTJSFJ1ddwVC7xUtzRvXApRMnJs1vj8XBKD36Up7hWtrJpDeu3KJwJG4NhF7n8fqZUMFeNwaSZP8u6QD65e",
  "key21": "3XiH1NfQZFyUJFjvCEv3yb7CHtu2y9HiCGRmgQPZunQa1qPHkwdBgLjJ2abQpdwvVPogtpdv571hysGCH5mm3P3E",
  "key22": "2tksGCnkRSf173oNEtCTGuVVE69waV1wdt4L4HgE5ktAnRLAWfC8mByxcoDQVgk1iEKUVCMFLD5qd6ZRS1Yfa6Bj",
  "key23": "2sY5nhiPCxePVfnvGXNcSoqqtpYhKqKxE4TW1WGv4448TWHvgjHV2mMoFyNyJ1Mcq93hEibsJqx72DWUaLK9vsKK",
  "key24": "4VCExQ1keC3ZN4EFf9HQ1QUCcwvE4ZdF7atYLnKtyZYNv1jgUGTouRjRpdhdAmGQFyTvde2Q12qUtCXJHm9Un9VG",
  "key25": "2ypSXamvRnpC1WHRuQFDpyNhNkPrj89zUjkCimkpjvjsS6JNMKAc8MyT8angeV7hcWkcMi1zRjBnu6YjbDUwsFGw",
  "key26": "48RTm9gizVAeRjj122gY4hJpPQDgTuxgv86zngsV9YHjCKBEmvuukVsga7D3cohdAPMZcsPsgs7Ep7GgabVDt6cA",
  "key27": "5BpxNCFWG6c9w1fiP9ZTLmzzj1Sd7rrVDFmoSv1RdVBn4STuiNEdWKbQ3ujPW3cjFwKbkiRGg1JujjjUxtP8gL8v",
  "key28": "5onFcD5syqxC8mgVP83Gcj7Lg6qNRtjpvLHapuzQSBuk5TGXcx1HCAwdqKcjCHGciXJt7FoD6DPYQNfHSZDs8LdX",
  "key29": "3Fajmq4VbYCAaF5Pc7eYmwGXv6NdvnXPBvnMdEBitHqtH6cscF2cnfWZVvMUVvcmwgia4cLf1mVNbYkHtnYivmc4",
  "key30": "3a7w5oJVcTG9f1GVNbqQJkY5gkMUMqWaddozMCuJm38mk6gJxQLe2wSYKQFzXgFPoTWTuhtrmf5LzMJxsVNyysy2",
  "key31": "57Z4Tc3mi4GRu9YQL68g3KMgG1ftPj7dFjbGyHQBoQy33BtAjAKagfeA2hgzboXdr5n1iKDXwiyGY67oPfu2H5G",
  "key32": "hpSjJG6GsFBDZo3upjHhFbACV613TMGkjqjpxqr1upJEEdLu1m3y7BTLt77zN7jUJFM5zWe7jXmBcbSZ7r7u4QU",
  "key33": "5h7veRbCbYmAkUetcspGNVPRUX7zoNHhkerdmqa97m7MogqBUc8MTZ39NWevP2T7fhMBcwjHmFfocA7iZbSGDBuz",
  "key34": "2aafR6d6TBeNZWMEZ1KcfYPLZm4CJRYQXmWqAZpnZ1NUNtm1i3vpeJTiksfzSVpGo3WvdXLgq6YVBQUpWPXtbz7H",
  "key35": "3s66aSd46mRtsempY4kk33xT1xvvgduLQxuhcPz28EgP44dLJGVstNLQmMVV8YMe3DhXzkDvodKk1Hj1AeyqGbYu",
  "key36": "2Yz8tkYBDHGXQ26Sco9vb6HvPmjNktGiyRSf2TibpUcb8tUTndPDwkwi4CGpJTiZEMWdFLYdrK7kSXXX8yKs2xkB",
  "key37": "5SQLZEhcQk5AoVckxHSrFEGTJDY8jYGz5qZLNzh2gNMttmNCBsGnioPXoSyPdV2PRKTerhd9UWfTgCEXiK3tbtUC",
  "key38": "vj8gweTNzQyoV43aw4vrV8LgnqnNehQVA4V1dXKVcxxTnXSfiMgmZCb5wdsjwARhkwmnwyctRa3e63Kzo3GLdKc",
  "key39": "KpFNTPvf8z2Gevj5oPELEub7ztuEifTYvJHchrH5CZFMCMd4imYimLNjWyQVRcKP2uFU2emWvAn7aZ6LKmRZNPN",
  "key40": "25SqLqWaFdUAFJAHdtMp4ukTGMxHTb58GLfLFE5Z8LHckXXVcxNBGWrcVuBytFj6nQzFCEy5uUbVd3RyqsiPpaNq",
  "key41": "5BnJMDXWD4R3wK4GvzZpN8GpYpJw5VpGm5r7sZa7TAdZ1YpSh4Wha5cbqLyupt56fAC71cuKkLhhayvfyf4dHzU5",
  "key42": "2nQNnxmgCxyU73Q7ZQHeWEySj3bwPRs1Tt4Z5kKbYDoLyqNzBt8bV7bbRVshx35pmJM4EHjFTDeKc9bTYjafx5U8",
  "key43": "572WogQnSuS5csiEzkmMUkcu4onKrPT9VkRZyQyfTR4rEemsgkASe7pfeRKE55wfs6mQG33bSxnqe3BM9hMHVCjL",
  "key44": "Mkxegsx7pWhvPHv3r4pYRbbc4DDSfpTn3UwJi85Cs18jnt2i5citPtvXmi7ZqkZRTdp3SDVNpmg9GSYzKpYEbzq"
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
