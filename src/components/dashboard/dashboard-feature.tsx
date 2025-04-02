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
    "2zRjnwPC7L9nRWzpJnyzE5hQbxHKPigzTpuhdCeb4Sq9iKVCDoGBKRE3LTyiwPMaSkgTK6c6GGccpnCAqfngK5hX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sEHAuXAVX2pgdz7BRGJDx3PaUprvkXnsAaTZxED151SnLVpPdQr5SJXQ3TtSuP7HzmvuKjtLSznuMnXmQzbqmtG",
  "key1": "pAaXkT58mTJnmmrGYYRXzs5g3Q2PhN5tmoaaP8k9pwPowSxoAQBuSV1UrCKnnEs6BX12spC6iK1EDg8tRm5igju",
  "key2": "2u8NjEdYEfXDTHZVK3TMS2itsHA1uwgGtfm59Qkf5grYHESndeiCUQ4JoHry37chRjFz6dSVrghhqnghfY2F1xdL",
  "key3": "4REK2WqZo5vJ7ibirhE9U5CJevRgz2ZMiCRCkz8NZWfenEGPbEN9a9cGi2C48MYh5RbAkWJ6zF7jS32jcorqTPwy",
  "key4": "YJ1GSDMYoK3Hx9xo6HTZnzzPsWbrETjE3gLGccZWGSqEo7D4vpfxSgEas7MGfgJmTQQVDpxu5MvxRcX9geSwpyT",
  "key5": "4CT4rCLcurJbLA8z4Da3qbug6uJ2pFqD7Wo9ePimJvddPyrqMN1dNReoC2itBoDaf87pDEZqPs7QYPyPXxB6j1Ba",
  "key6": "2N72WR3ajBGezqn6Jvafap1qpvrn5hBaefsy7YXLFMqAWDYcmPiYtguCwUFLwm7qvKKCFFHbzhahfmAvEP9oBXAz",
  "key7": "VsEpCd4uSu3X4Vyi118VJiuHwiQjoSHV4ENakshDnFxjZxMgV41CqTsBgVkbDdt9LoYTSXya56HLWMTna27TRe4",
  "key8": "2sUiws5dqS7he4gAU7xXgAkr8NVdCkii6n4XZ8EdZtD8GM4z4dYwcHrYdUrDwah5zAeeBfxyY3jqdH1RoLkvg81V",
  "key9": "4efSmeb2ceheZfyXzDZAVCQ2txXwo34S641BRgUJvjCZ3SMAAYXPe9bUSKJGtkNTUaZyMz7VBgUNzRvmCUbq3gpD",
  "key10": "AvJXmt8wbMhah1VrCTCfTRw4M5qVqrm76JYkiitJR9afagU3VG9xVUMTkASSFyBfmcapX9MxbCMLbYW1FNCeAjc",
  "key11": "3VPrmcdP4qLCq8N9zZBX7AAPedoSGKeKbb9mHo6q2cRbrHVSjvWZszw2e7dsjCbuQSGy2GSxWizvj4D9ZTZvzduH",
  "key12": "2iqHVqCsQ8hr7pR7LL4gTFVxcvuGyVRe8T4Dr3xkkn4GiJkuXaT9yFGn9ZvqR5Ejb9tZMwHmEVQyT9VjVBvXz6DU",
  "key13": "3CZ6jdtLArWxBqrsjvS3KyCjRLNwuET5WNtY5AkFtBqXVT1WSyG9z9FKRki5Hk6ynU243Y661WmfrMtDiBtLViwX",
  "key14": "49bux83nqkTE96YugTekhGUCytnHtyNH95jBXe9FkmgnDpwaXppwyHCRDBQAKToT1udryP23QpiL2TNvhT6gYzwm",
  "key15": "gcFef2TQHHJ45hHGmP6kZxLG9gR7ZGqMpDr1LRhtH7yDXNXMLzHfZiwpziXriSeMWjCKduYa67C7EvPLQJmyxKZ",
  "key16": "5kdDec67cer8T3nJS58Jf3TYeDcKhfh9x6LJSKWyu88anUwpkqDcVv6iqBQesbYaLJpGVyTrJYTDyBxMAX6E4pFh",
  "key17": "LfAagXz3VLiAY6roVgU1pSPMWwPBjLa2E1pjxngFt7Lwi3p7iL2NY89Yp7h7iioQYkGu5wPv3kwwCkAQMnkWgjy",
  "key18": "5rfYTW5efgvZRK6kbNV4JpDw9huyBWmi88mjy9eRR4MxK26BcEyMZYPYsM2eR3wgEkHWviBFSkX2qpyMhKPrWYNv",
  "key19": "4gR9AP9vhuBJJqj1x7H15kNcuub3VE7myEAcyBgaWAdETz3Gj8oLLB8KqZXu8Z38XC4ynJDjk6qfJ1xemmqWqnmS",
  "key20": "5mvZEA9RsgU1FKL7kZ8bnWxuncZi1MXoH6ka7PeDiAam9sXKzioffWZXcjxY4nfxzGoQJfMdFJC4597jLzGLpv47",
  "key21": "5PSyYXDAwLFJ29oS5wmKZa67hdDqKVieMgdiV85dGNsGEMwJS8KFtTR3YqAbc1FQEHpCKzEjR2SddYtx8pKuksK2",
  "key22": "2mwZMz3mwUp6tcREnk1f1zYoiATUrXCQMYcddwttEHuREKRjau1abmK8SqdvjyH8fAr5ZahTYXH9jsXAt5Qee8Xh",
  "key23": "ZjBHy4qJC6DPNPm8q3HXBoV8f3hvc35u18sJfzUDYFU7BDB27wFVggZpjLC8XEQjvRBsubzQGUW88VaABeanHj6",
  "key24": "7CkzmCEtmd5b9J7yAkKAizutVxsA7rx8vCQwkLHCibyzM71WFeiAmbgKjxhRaam3e9QwmjiCuGe8h9uT5sauHws",
  "key25": "4U2zmDSsLADfdwWXXadUiDEDsKFCAFuuRZnQt87Z4q4w5UcKDBerngXQ9MVAEsTvtkxXHoNrVfKTRGm5rfycLnWq",
  "key26": "5dEqPVuonXpi9yTgWQ2tsRZXzxff5eFyzd1tXRtRwNBG5vmrwnUf21bv8FrsnDx1ST27Z4My4oEDJs11iq4jNJqD",
  "key27": "5pDAN4suRiedfT3aEhYLHZwSRQsYPGLGauD1oe55Ut3TDDkh9C5XCNVkwtu9jeezgvQx96jq7J1hkrNSdh4PrcJv",
  "key28": "4onbMuHyuBYMAgbfC46TgCPeYX4qvw2owUMtBkFtGJFCvGmRu3jFNWhfnptfqzSmwVtA4QV6JcNJh8oiNLJzy8vs",
  "key29": "3MfV4oNZ26X1v5MqPC8uE235ra5t2op5APAHyVaUadPK2KAeRk67ntK4UyLPBMgPq3273vhiccDBDrBBQqMqYK7r",
  "key30": "3VfnNQyLuxuTQZr3yWUnQJLz8PBoHjUMneJgdpPB3QizyRKW2inE8rVSgTdQKJAw1CxyQaKZxEvG9dMKpT5NNEir",
  "key31": "4MjqWVPf2NCkkNdrLBUicSQ8ifW3vHLgQTE4F7zYzyqq7GsynvgdvQFQkUkDBxVk9DFX2EPRXv67oJoS5k3xmJ2V",
  "key32": "5RB9rbV6NgvT5i9dpkxAJsHf9GqJ5UeoMs1hUagiXydDh7cuKNKMYcbLSQnKpTVk7P2RBw2ZH1By9NhX1yEjzh9F"
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
