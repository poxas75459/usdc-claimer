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
    "5SCUz7DcRSLREaayhvNg7YLqwPCfcy1x2BLrsbwsT24FcWZDr8Gpjw911NkKda1ZhbTUye965CN5Tn5N9YfevWsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FcaT5Txn6dz1cNXKbeVZWCJHrHuhL91NKQsAEekofrVjkoCYGNcdsC2kRsE48wDjm1PyuBXfMaoz9jMuQ9ytwE",
  "key1": "5sV1E18GrzFUVUdh5WVekKayPaGUrYKGghfUJr7AtFEL6JhcwvWvjcBoK2XhVFx7SoufVnPntLMqPwp7bUQ8iP9G",
  "key2": "4rQVLf1i4oZ6Bk6A4wGtEnyuUPZdz2VRafG21G4X2tWwDkSdQRg93s8CbozMd9Z8zr99gbtBa1nNREjXwjP9c4Au",
  "key3": "5UTip5wf5ot59ouxos2Y6j9Nq91RLbhFwjDNcGcQdMCkTXNUziPYVDj8N5xwqVVApLjBnAK34XUi1g4KiBdrvEgn",
  "key4": "2m374RhEVVAs7BAJqFHT4yLjKw8tbQ4yfXXdQLd2LxH12rhQQfuYJyjYzwBZU9BSHaiF4SuSoDoP2MRcqb6YkRyp",
  "key5": "niJbZBs5ZRmkoSQnSgXP1ZyV6UvYjhqV7Kje1TTguipDXXDVBkBc55aL954UZon1rvSZjoyn1Vhq3EyJhSowviT",
  "key6": "51yNUvjjW4KNFHCA7dC8R977JYBLBdK78GmDBf31oSSzf6LMcC1h3BiHeCgKbJ2urhTpy4UneojM4B4nRboqTjzA",
  "key7": "rXc8e3T8EsWjbD16Lm7DovKxvMoon4PAxMp9144vhvdsDvdBH5UG5UnW7bsZDTsFQWUExMKuTcjxNMDPq1jkAyC",
  "key8": "4zfMYheGG1RsR7Zq3iifRMzyREadZmygKzJfnpXnNRfNhKbUTzNCBFPeCS6ShpP96Env6p2UxLiB1dNYNqVydLzu",
  "key9": "v4dKQT4D78f12NtwXV6TKQYekQNqZFBwDeGdR173MWuijmmDQwVYERqxD5qx11gNgTGc6F3BoSk6pV4mk2mSyKu",
  "key10": "5pgjRfzzYbUAvCQZpVwibfstVDg5btQRV2dy1RLe1xLdfcSmZcoU4B2myqzq7dBU4kdoSJFZyQPmcn4bEBqYiTRy",
  "key11": "asG4q6RmFA7L9gCpqbc6diwwrvBAEbj3hMqEYBeQSbpjXNCFwg49Fvfm4jbCahTE88otmHsz1VAcCzt7ZEptzQN",
  "key12": "nC8gq3xT9RaTcQQoH1NTf3tQ7DpGRmMQjaiiyXtMGx2DeyNsR5yGFLW3T5TQW7wEB6uPkunpVGsm6NUTcG3sXn5",
  "key13": "3sKj99WzGGJ3bTEk7kTY3KHfAWnS8EwuDZ1de8c6GokFTb66uZiWZiWCKWpjjhQ3UBJvkhZyXS9KjHVFHheeGKaM",
  "key14": "3zBatZknwQu3WZWYBXiHxmDv8YLbpsCjymhzjWYMg6JZ2RCkpcNAnAt3fZPgwsH3djjdWdbGiKCYLScQwLd4uZpn",
  "key15": "3rm9Z8UW4rrSjTsNPuEDxeDBsAYGGdFbaz6aMdKaKJoFoLLELQjsGVvssdYeohRKzoMY4RzAUSQjkqKzLh4nBYoa",
  "key16": "4wpP5wqPZZPmiC4fjWFBhcc9gUneEiu9qbvSGUTjeKsmjBrM8DtYVuES9brApFrWG7nnMS2gC8g5KEwWaUEX2KmP",
  "key17": "3MbS57bmaKQh6jAtBQmVDV1rmvVqJGPbx98jkraN41kmtLeLn7NU47qFQ9Z5bM1P2DGSnjKXvTYRncx8iVYrW4Ng",
  "key18": "4dbacBpndLFnAD5jJvmddyA5zQq584qodTT2ynbLAmQcnDq335ZseQKMN7b1AT1xMTrwo8ttvPJ4NStYUbX3Hsci",
  "key19": "4ECJpvVBjfqWuVQKn5FCR6WfFPQ3TdL8Qm9uM8mZPHBgNKfD5PAK8cuyojjgJcYJtRx1Jmk2driVFWaL13AioVor",
  "key20": "3bJPwhKHiahosLryQHWjfoMJQv22Gtd3N72maMVLCfAjqx9vUW92oRoJUu5KuNkYFZ3fKJCQaruRqoSY6dcCEbbM",
  "key21": "381Sf8ui54BZXHni3Do7Fmmajoy3tyv9tCrphJaVWSHbScEU8q6dJAtxvfSLxTDziUGpokwExJx6GyMwmxwTN4kK",
  "key22": "3DFX65PdVsMy4Gs3bKJheWhoxFpotVs6SrCga4ZCDVxkNWidnWZrYh9B5tTsAwkdCC41XounMR6bkkawf7An6v4V",
  "key23": "32XFi16DKz1739pxApfkUPgRbah6u6dXeqw1GTf81ycbLDMhSyPhTikqsnNTo9W39Fg4nM7AQhd3uzsj4iEmaCqz",
  "key24": "5BpKYn4HoNYyneWeTYXLWES7PvmQrMjbBGKWYHKzVsNpSukjNVZPNa9QknVQTujLrssPQC5oXZrHSJ1xUTJLpfUC",
  "key25": "4FDGvNQrVMPiFRGi4BxCQ5wKijw47785K1pKMV8RQ2NebXxWibAb8B3GTpQ4As77qnAzdmUj9Rk1UsjcRMwD1Aa9",
  "key26": "5VgZdpf3Fny3d7k5s31ghyiyMMk49bE2GAUu6zAH7ffsAV4iqfrbTczEnwjXwEBP25u7yB2b1naRaLoHTr35x4Kr",
  "key27": "5MeKh1sQ29oy5bHbobLTTKqNeBPSeeqtend3EcBrms6zLz98QfgYLJkRvfEg5GdAA4nA2bSXnopuc3TAwMBCu8B8",
  "key28": "43qxbwdeSxH5jiwg5uGmjuhnppu1HLpKfU8KbnNtAgp9VTUw5cr26CUmWLfTWEVZFGhKX9jiBwHssvE6UVJRKuKz",
  "key29": "4gvJgCu8uaLWNgsrHPDC3kDqoqyejWDM7S9sGzxbWsCRWjEsV1D2PW69jVHC6iq7p3AG8YWej3duHsDezpvuQW7s",
  "key30": "4nV5dp9e2dTwzBiTuynF9Je1wYnCVE3MoguNY2Fo5fC7adCjs6Vxdq3ojSsxmRE6x3Ktj9AVVSscDZnTRtfwpXmh",
  "key31": "57hEkpngWcRQQ2BCkMm8oxvbeYtfbS7TTV8zbBrLWrZong9UuEULByAeJ1fsqXWsmGrsTvZCCkbVT3TN4h8dwQRq",
  "key32": "4Gsh6i2SZy2mmR19kuPWiAvtEh2E3Qy3oFE8azqxmr3vhKs2ZnGUKj6m4r286MzU2x3TEgaRm591FGpoeRCYfCRy",
  "key33": "2FgwWbyReqpFqy4X9YzqbnLrGinDsCjSe8VzevigsfLMvTYjPDaie8JVqnciZH7Btic8Nh88JrkWLRtgvhRhwsNp",
  "key34": "2ncACiidCfu8mZJLWVBTKknvrt1nvi7PfqBFdsywuvX4ntUSdmrzYTLGNKuiRsn299sEBdv2rjZd2DDvEnxYXXsr",
  "key35": "4V86DnHb6feC6DSqH1pR3HfWLfoHmTDbtaj4AMRQxmTWScV1LvT44RNNYX1YKbC3STkWZo2GMaRcnT2TTZLuAKBs"
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
