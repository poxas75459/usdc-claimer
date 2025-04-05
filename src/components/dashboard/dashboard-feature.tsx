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
    "46YBA4mPgPNzDsgVRysaMYPrAQwTouBuhy97SVuEPDzMFRCw7fdcmpyq4mLR5H3cvejMUDPji2B1brT3kA9pS74t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vzFDc4LV3vWb5XJp138DGPsQxqdaLQNSYCDvio7Gm6EFBoJcJfRDotkj5DzQgrVxFYk8Y1e5vwy4i1pRV1iPAMe",
  "key1": "4dmFTXV7byG4TTX438FFonzfpqkoKNYeM9ekXB83FCNXsBuMwLXBeYqj69h1XGq7wTjUmtat9LTyjccLqsjWPptQ",
  "key2": "GfTo12xX8TW6HH3wPg8MMfRMPrHBWue9KdSj8h8PxHL5rhr3K472wyyLo9Juk8QH9YTXhyJ6XA5rYCmKnSo8fHn",
  "key3": "vYhZ9omnTnctStLL1mFJ8hSgdxFJyQS44NPzf1XirsaUH8yJSDVEeJxFFrXmNeJJAEtRGdBpzYQvbEB7UKzxTJT",
  "key4": "2FkkeT1wCMcV5Tdr17rFJwKzeWLTHiDDNtg2GuaDGi72zLSMjAkRr6VREWp5vFHLNnk6YovM2jFr8gW8oe6RpDpM",
  "key5": "LGasUpXrT8yMbjVHJfqdqEbtBDaY65bgYSZ6pwmzUpQrBWjHbWHqvA59ZtT5Ba6NzXi6gvipEALG6fogjfjJVfZ",
  "key6": "5xcL1jutNvHbAu3GFZtP9JiWnutxEUJN95FYQTCRummQxyJ4UT2f44p8u4DMSJxQoWfnsAtqt5wiwZyDePPX3hxP",
  "key7": "83ALEVmFGsqzZkxPtZcLhGFTwvCgusVsydXHuMLSr2C4oMrfyCS4MSEHEzRiETiMFyUvMjPp7Gat476GbFLvrMi",
  "key8": "4S5r35Nib1oduHVERy8UrHWfuPrinoqZExoE71sGLTi4d22Xbt8JVNrtguwWP3QEZA8NhYvkeSxwfS6VSvqKhihp",
  "key9": "2A6RLZ7JpPJ89xb1RD6vD7KXEJZFcBHKePBAz9TMEoj7LFvisXWpj5gbdsWzfEJ5MZnEfMyJ1WiJb9oCQtheJ2mt",
  "key10": "5zhLr9SPcvVgni2C8whkrA6yFf21QQDeMRcqP7ikVQYuUG4ConwuFqJhpSfHFNQxyNpqwPp2L7Xg2dN1tPvAZRN9",
  "key11": "TnF4xrvf3h4DV4i7o8z86sJKP6URPcCdKn8wL1xHqFeetXnwQCRbmkQpodqADv5gRSyys7yfo7SJiNshzuQU4XC",
  "key12": "5HVp7YxttB74vkXrPFLZn1P3S2qwhp4fecq3TaFoqubSp7ZkvGhTf9QdH7GJxZQ1QoRCXA4s8nDhqnc8GgruonU1",
  "key13": "4CtWVuYAcAcAvrqReWdXHQYBJ9F17gb7t4EbUn3wan9KQb43YKWT2idbpMcMiGyA3kT7BLVWZHJXbAYscH4eqEh3",
  "key14": "43QQDL7hFGH2MHGARvsBomqiKWZgttxArgag183irtV32t4WXfjyiiUW9Au41pPo5Lqej8tvY8j61GPd3YWsNM4w",
  "key15": "52j8DteKehDbHb15GyckSV3ADgpg1Lx4xAJDzBWp8XMKr8z59LksjBGMSCeB4YX2QiNTk9GGkE3NztqccroVdWWp",
  "key16": "5RquFcnKqidYVwdvtd6rNh8W9rYTHNG1t89HmAQnMpj2wpMQadNMUYGrJQufNZ6YJ3xUwvktd1hAyKf3mLytJXqz",
  "key17": "3kz9fY57Pkj3r6616CbW12KVzS61ToqqdN6RUSFazAwocjdZ3MhX9KhKXXzhqGMshiqSJi5tRbB4PWeVTHFrLUQD",
  "key18": "4DEEUqt2P8hfXSjnyro316zWxTDGVLDm81STw4kroNwMNjzZTmmK2GqdbUpZhUuK5f83DjYLcP2gDnTtxqPAw5ky",
  "key19": "2kdDtsW66iNSRMRdPx7rv24Ksc5PK9hFCCyzdhhNi5UMKEiDU5vW2qZQtsi3937PGtz9pkLPZc1cN71Sv3ZJniCC",
  "key20": "4v51riXfxV5oz3x8C2RqwcsufccD1CjMV5WXoCQ3MBEfSTxUbGxRNxNdGGKbPs6fDUNJ3gD3Uvv6WcSmBVQCUbzF",
  "key21": "4rTu3Wzdrs7s7LsnqgceQwCyhgP48LBTM9vyB8wbBFsnBvAu5aXK5cL6LDUDqJ1vyhgf9hTji8dcMryFjhWBLiVB",
  "key22": "5CoNpGLDqCXaA4wTTJreiqDm7Z4ScXR8niZE6W3u2ZzBhAq482ZSWoHBqKNrWtaNhz37PcUQ26prLyoZMvZRPEze",
  "key23": "5XHpnVZ5GX8V6VtdTAzsrV2TDYWuF6989ctUKiE6RXi4iXU7iJ2pya8ZJedjPkDXxFcmvBWZ919Ho86ykg26kdgm",
  "key24": "UBGs474QTMqs1cwrkG8FpGDPe3xi7eyUG9dQMtvwhphWgjenrHPsidk2vHeiwGdfzB3uT9HZtR9W9qD15B85U57",
  "key25": "2cYrhevn31nqMJc7qqykLTpjxsy4qDx1eMgGapbxDHRXnDLRJgeCm9P1TJ9yoa9H2G9PidajQpCQxXTN1BVvEq5e",
  "key26": "4u311VkY9MrfpAwnFk3pehvXnjyQWWdTRYvEQNxh4zD9kXMiEykJNUseNwHTd25doJiVunQYCUVdnuLRtsQUsNsk"
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
