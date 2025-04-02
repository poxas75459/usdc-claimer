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
    "3kjf3LNmSE7EoVu1uDTuKHAyDFgn1582b1vXL1aSrGQwMqczqxDX4hGc368VSwcZYFYwWv28pZ4M25ENwKjtUHPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46zfPySRQGrmJ15BtiQZ2oadboLymXYJVKieJj6eGE3vTxEVzUqbVCNgf36T1De6eWHBExEipEbewoDCor47XgDQ",
  "key1": "3y6nYcipcj7YjMQoMp5ierMQupFzxjo8wqsnK73ykF7DmXgJKVqXw4PvJiuWGwmNW43GQZZPn3q1LWxMdXhozMXU",
  "key2": "2v411nGMJ9FnziaGZj3z1z1ZwagMjqS5Vt1SaideSYsEDUbgV4r8yk7Ja22Gd5JKGkwiYAsYjWgUxnbN835CDYt8",
  "key3": "4o42AkiAmNAwF8zMDknzEFLPphp7VpbWGfo7FWfjHgM1VabUUE5uDJ9ivewNRea3mMnJ9ZQPtNj7bbcR6xNaVCK",
  "key4": "4BNC1xy2mXCGeaMmyokkquG52At6wHbKtvSNt2knop1mqFGgxkCQxTPc9GVPce8ebx8cHM2hdVYMi6apFT5rV8xA",
  "key5": "61hVpLGcCKzqGFio4kuALtZyvMNG3uMVXQH4U54MH7tAU13fdRrqFswjHALR6xDpAvs67DCp3DsrGAR4MUh2zut2",
  "key6": "2zNsqkKTGjEkzT1ufWML89RMrkBeukqEJWobHHLsDaCyN2fWzzoWAVigHGeyagraQB6kFxr3jAKVpza9W88dSU8E",
  "key7": "3mqqzk7sTfn8mjCV25GhXmmvBi7cV1kwE3NvoBHmUQQksbf1pAGiCSFRPu7m1weuV9vEwBRFyoiJ1JCkbFEhEZx3",
  "key8": "4urjWvnt6PMUEGTZDvYjxoBq85MEPfsG3sZcJbFgcaW1cuc6dHBMtwzq1NkKLJtXXgHiFhubXauiixEGUVqBar9r",
  "key9": "2hS79ZyytqVGCzFY2sZWW4cGmLcfJPk3p1E4VRWBf9nVNgxUJQX3G9sBqFZso47YuH36G8ubeSEwMaHcaAmxYdZG",
  "key10": "JfTfzMCjYVmykzAUkhSixMyXEA1yzDPdEjsLhMEg5mXL4TC8pBajcrhawJNsKYn5gaLxmYDNgLncHUJAvcvwwSt",
  "key11": "2p11NtuFLBG4uvfzP5aSNQe7e8755Pi5UtLtzN6bBmEJmoHRrnokBqiPdSpYeABLD4VkUFTx27iZydFZ9gx3QcGp",
  "key12": "dTnYdhiMZtf4NA4tQFx2P1gGbmgEjLcVzSo5Cy247gZxHVZ6rTGbdnnBjAE7Yscmez3LcB5V4DDjpNtVND8PNjb",
  "key13": "3o44ifDuWFR4p7BzYJaiaoR238QfSMMNq7e4xoGYiSKfTJwYaZFW4VNijtqkdZHH34baMjPwvpUM9nbeakLyeBps",
  "key14": "4Q1WsNQ8g4bxsfe8LVLzReLo3YUQfw8yewP8YuipxhjwkkMzayWBFGm7Q6oYNR1zDTwUDSu6PeTU8i4k3KGPffZT",
  "key15": "2XmzyRPZFGZmnCVprEF2yUN4ssz6tab8QRgm1CMSXm5kPJg24mKKLXWgtpYzL3if8dHzidSrCKbh9xU59imgS25P",
  "key16": "4eTHvsTB8cHnS3YWQkZnqs5Tb3gkCC6YDr4d2qSjWWbwi2zn7oNiSwzBx871NCUU6VMqJVVBjdjoatZmHQ8f4mBr",
  "key17": "5KyNexri2ivBpwmRw3gRzTv8AupP6WhMc8yLcKLhMjtkZArSADJbzUHfHixGMBYvAJxnDdJn7EQQ4yTqHXUX9Lcv",
  "key18": "4JiUrCb1H9deAwtZ7dwDyMQ3Y4QZk5V3RvZQZ3kAcoJLjNoaF9yVxEMTicxx3GRFbdqzhvU2RmG5FPKUw3ugZWC8",
  "key19": "3xno3UroAt7pRCQQQgqisFyNJFyBaSWm3ooMikKYBNe8Bg7e19VMtuTHp7JRBGdf2hS6JsFJbQTB13TtHezSUgr4",
  "key20": "3FKeZ2nK75XuguWmQ1m16iDBsnaUJLZXYacSrgFckiFuXzJJaSgvojTqU5q7Rohm982augfcNNCR9ktc4w2LhGhK",
  "key21": "4kGeQFowuoKjH2M3MpaZieM7ozbijiXZYadeAgDogTpqwCQ5aGuHsVKtK3rwVoT2osPrCChvHrx5EcV19kpewC7Y",
  "key22": "3a21XMq72B1rknKoV8VHs4X6u7LsxZYv5uh9hs3ooZtg4rbdarWiGTzBrZuLCsHmEunvdEQjeJnckBjvfqTHBsNn",
  "key23": "3cqcMgfb28L3foCdfS2CQCunt71yJWkwMP2oknQhqgHJn9phQ64qBBQTB4zmN7zVbT8NPGndKMEMBenZ9SNNoL5P",
  "key24": "2EK18EAYsnTY2tZX3ZoZ7HWqHt4eyuz4LBo1Qq7Kyw58iZg7YgxZuJbCk8rtmCaWPkhk4W4T6rnyKFVqNbjwVyTV",
  "key25": "4bT1pHEuvgx1z7c7yg7LovHdCcnHQHXaRDxZyPWek1jNFcdFbN7HNGTN4yV9zVaLQBZQiABPWW9ToHVGfxU4Bh7x",
  "key26": "38cjEuCkwK51QGYGfvZ69QG8rmNJ7VAnkTe78vK37ZhWcvjyQDJGcKrKvMHmxaGeRZPNJa2ejn9k8CyXFxkmvqzv",
  "key27": "3nzkjYgFVjfwi1QmXA2xECfGf1EQdmfSZntjBLbU5Nb2J5nueQqDsPJu4wVp24vDLbhRysEvj7TL51K4SaiKmZ1Q",
  "key28": "3fQGhVYdStWwxjNxoceBbG78fFe3xHgRoxyHaCcX3gEags2EdC6FCFWKjJZuQpUKdRQKTnDdThfEYShP6NCZj9kx",
  "key29": "4u32G8rNSeTDc3zcZyB5o9rR9vJpoTdei4PDDjiiv8vfrq4C5p9sXoC4StqsqQ5ypndpxQYrSZs57pbCtqXhKDcy",
  "key30": "2CrQWiBYs3epLoxpservySLHKdjFZYHLrcKMLkDtYcfVB9dz7Po1Ne45Q8nw5NJt9wHswyFzKejArhZx1D1KePKf",
  "key31": "4p1YxvT1CMggN3odyEVYEHYiAQ4uhmj32iiCecTSdTUzHXuAtFrhWqTLhTJLrRnuLDZwME2r2hFAbZjrymnd3Z83",
  "key32": "3kM8QbvPJ7pg7HTGrCqqDe44hMdjJghTCa3DZoVMKGpay9GihCFRoN6rxdaHHaqfHBLxv4cgpc5MqLPTvBGg63X1",
  "key33": "q3CdWtyAdJhrgsHNdNuytxQubajA6zvPxzT9wKtbNdBXTpro8XPeXyPjFi8F9PEEHGR35sSrDgdm4PEQTcoKbY7",
  "key34": "3yHKkfRMFVkwVk2gWCTa2QjBCV6WfBio412iVv6Me5w9quVkBrW1JNeXbbA4DBWPRc7kkBuuwFtXx889ZEihiMgB",
  "key35": "2L3Kw9ftpWuw8cXvfdBi7j7TZp9UsCA15Q42qb3f3kn43en8h4TGRBsS3oXa7DQfbcW15duHxyvFBtpxkRinyA3N",
  "key36": "38pxsDnRtaQSR2NQiynfq2mtPdkAeWXBUouxZ3dBVJtrYi2qJpnrmMRVLdatXH41fv8J1TS9Mzw9TLW4EsMzx7im",
  "key37": "46MeFgWZXCXNKhf6cUaETb62FUNJEjVXbyvt8WQS6yiYsimzeDyopgQc7Tm5X1mdu8hHo8CKUuGg9ANHESiQgWPm",
  "key38": "2kzn4K8bM2RaFgnHWZ2sHnFJgzDo3FBnreAsDBTaodbFTobmsjSiVWaN7pcsAHDVALuipu8h1c9Vo89qCXZtJdP8",
  "key39": "4iFkMpo84gXT3bvpyWKXoz2SpgitKvfKF6sh5sp1fKiMSXSdLAquKgv1WjMFsagkNwbdkcVgfXnrUxh1zM6wV77D",
  "key40": "7t8jJw6SVmjhJT4yBpQrMtzsZmJzj3Xe9KJ2oenmNP7ouTXzAcX7NVEKFDfSznD9uEi12nKL4AkzrfbP1w5aT8M",
  "key41": "2o8rC4DQ8YDXTSGwC95aFsC5RND6De64jHm5CY3qGr9d517QaPSVr5tSpJNkmUs2eQ8ziz6cnzXsxyCSgCH1Dnb5",
  "key42": "3xQA8m7jv2ZyAGZsobVUKEMwFvemoCkvYtdGmGs1WsDGy7JqCvupwLti9ejqzwWLboAoKA7iFBsNZTUSLpM2KcjT",
  "key43": "4R8o8u6VAuN83MmViGe6vR6JxRwoob7EHtwCWHcJr2PxrXUVZ6XVaJjYhcBQ8Bk9LBB2My9Nv8gPRqjMptUm6w6u",
  "key44": "4NRLUnXPreXkbEuwiYyKo5y1kDcKH8JHaJSVqFirduffZY5zFjPCAUu8tytS5MfCyP3etwgBH7XfAYeehcdQ5Tif",
  "key45": "47fuYczVaAmNMJj3DQh3rGqXAp8wHTf7tuPwxZem2wZk2NNWw33zVmJN1jVw7Kihk46wZxxFq5nvFapNEPFMWA4N",
  "key46": "5rsBvZ39H4apSXz8UxGjMhXWKbXXA6EeNPVZkKrZsJLBRPTd2YLSrELsr5fCjqEdxSffQK42iuJqoQUEZYPML2aT",
  "key47": "4rXTzutrrKCGWGhyj33nG6bwqFEmdqVBANpWZc7NoJAxBTDZQsTriHooD6LBD6MCdcTqLqNgr8uZbc16wsfJMn8P"
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
