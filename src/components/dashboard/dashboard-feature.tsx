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
    "hFzUWDiogAtLgFg8g7ENctihzRdK3dCg18zX2DBinuzN2FP7Yzye74xwyrU1DwF6smCYY2f7ahj3hFkrcrisFSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n1AFQyvY5oKpCCZAH295fFzKre4wTrJ3yt59YN9hzpBkpk9pCJd6d1J9mtVr3YzxnTWGTL5qHgmckBwc2f9Qwzh",
  "key1": "42y8CNDrB1XdUoxtSMTUq1JWqEqMHgMFumb4VGbeU4vPqLDbGFBfUH6L59zVkembStcxDYG2ygmH5Aw8sFeyx7MS",
  "key2": "v86j6DrhM8gG1RVkTCWzk2ztFTiRneXRMaQ1H12GpZcc91PaW8z92kGEcwpukKGavpA2bjZb71BtxbcKMN2oZaS",
  "key3": "4xVtBc9ACA7Wtp89Pf8wAXGnUpgmLi2h9wsKYKdyrRcHecD9RdMUH31c4aQS38M9TkoHnByo26nU4HFMo5kJUViK",
  "key4": "3gKfdtBbcdRY18gMAbuhnmHzcws5DacvsLHDW3uWphTE79TXDM6RLjfQbSSuBs63dbF8aHbKVnJPoMJ1jk6KAFPY",
  "key5": "5ZzhWa3n2A8fdFxXRY1cry5ncMhN5UjFEC8wS11VqxSQ4oegFF7fkjJmEiUCGYmaFSppfH2me9UYvj8FiMJsncZG",
  "key6": "3kardD4uLaZfsMNAg73ZB3ujEote3SXgF2NQFK5VChkzBxBtEq6w7iujUyKsRtEobUeUyPBUFW3pP4wG6UWBkNR7",
  "key7": "cNUBYAthRkjX6qnmY1F3wpRRHZo9KHUqDu8AHuBeKsU6u2UWhcHMFiPwwpMa4kPE9qbK3gB4hGr6zJfbsArBxR3",
  "key8": "5MM4Mx5WMq3U617FaYXtDEMWxVyMyKXnHkuHUCBw7fs3rfLexFMTRYkkT67WYA6YPe18avM8RTn32eFrC5iJpG4i",
  "key9": "33oqPjHTPbshHgJ6obPyDJoYLuDy76a944RKmLt9caXsoF3ae1EaqfXNsHgmnDjENg5PDrZPQZ5czLFnmPGhP1RU",
  "key10": "4esT3bGNHyxwTBMnh6cn5Zx4Ge4xeohZAhC7TutiJ3ahLixbDH2E1mWG1Gw8KarunHUSQG5kuk5c264TPsvuD7Li",
  "key11": "4GU3BxB2NkQovkU7TXKxbyNupCB9H236uFvBeeho4fxQ1GK4F6FqMaKs2yv5fP7sMMzJLks5S4qepFB7cm5hS1ae",
  "key12": "2jQhPmZFzc2RVjSKJAQN6WTEsdvqjPSHhuWRpTsMRFkHqmWZAjnD9ZjL6iWGDMdhUtGARsQFjEcZYCuQJzu3uD1A",
  "key13": "51GXuZ3Yc3LqPLDL3hysRLRJf9h37VaGyfo6YVgxzoN6x4Zhjhx7xyaGUydyHER25j5Rz1h6WLyAmVoWqPBAfHt7",
  "key14": "3Trcd74QnCJy521T8SUWR56E9bJrYbes3tYP4vzTDSkDbourdbJHtVfScQ9FNTEy1ne8Spdp2fGz377tWPaDuzLP",
  "key15": "4odDcdLK9bgKHZi4Jr3tUKs8EGT4iHNKw2q2zTQ5bYbr1ceFWc6Y6eQ68V2CRMcLVGAzFFmrJpVMH7xfzRaEqUWg",
  "key16": "2jzcuuJ31aLEkWKTU3FPrbnLvW9uheBCnnzhJYLyczxmpgD85QbXTjguLynWcHoQDY4Kq3BfTF2QaGTGfDHG1CR6",
  "key17": "3ZtTxiwLmKpaPjG2BPfiBMmFSzbxrMNeX6BQLATZ4xARCbf6CtSGZ4a1PZG8TMtdRtShAKjvwv7CK4UQZg4oJAXW",
  "key18": "368n2wWBrcCEC6qcTK5EKhvgyRaPRHjeDonim3ysoxw5nQaFvuDHsi1XmN1H9qSpPywEhiRKZBbEqUdxzvCyaVgE",
  "key19": "4MPiYystJHZsm5qXZZvZPvtKLosyaVTaThhXKeXRiJzKthrx9Q5FiuG2dMpjNP8n2W3wSfMQggVFsWTtgypPNUyM",
  "key20": "28wgPk3oLHuw7BH6sY9y8nnNi6FUfRZVMtZLRdoMcEmcU8oV2LxTUbi8U2jgRLLmj5gCjrNoBdfkcuVvwYuWTeMc",
  "key21": "XA2bySPcja2NGsU6vGBVtWTjzNc4yeuYzTHa8f6p5KgSrMbqz6hEhHjWjYDL6zMMjGZ1KrafTnfGpYfmJAua2VA",
  "key22": "4eF4i8mperZzSEFUMJwvaKuou7y2KJePnXQGqQjgtV6dnhXCP96mqvYjw5kYbPxggA2Pa24TBWSTMQQvDRhqeiXY",
  "key23": "67UZAPdSWoUckWSBroxnc5jBsVrgE6BwdrnzkNdZ5gqfxZcYebnumrYwcd8B8yTfhg5TBoGLMAGznatnbV2DfM6r",
  "key24": "3RFkqtYxAhb2bds7yST43Xp1J9oGTjB7tMgkSiLEtZGcV1K7GXe1vxWjDuXQCHnMFpLMpn5uoHq3BVF6S9QZbuBV",
  "key25": "oUxFjKCVz7BMwrqzSaD3PwXZyAJTChCs8nVrnknMQx1NCZA9M7mPQn3u6YHSDuGoUTVUmN9EH2t7HNSfvsyCW5h",
  "key26": "2FmXhG1i8MXuajbV6cz4bedG8LAwEbd7W6DSZcVXhqSrXS8MCaN1BVPQAMoDMmioDm8uDVUUwwunaJzq7VQeQ66M",
  "key27": "5WVnupch6u7EXbKbk9QJySidygfZtkssmLeDpbRXEzoDGNjHYCNdkeLwCUsSNgswRHbawoFkj48LLhgQepAd69j3",
  "key28": "66c63CeruFDocTjNAQLxcyKkKFfzuNncHeNpLj8W8o3gxkRTWz4iEe3i6PLcNtBy8Y9FgqSJRsWB9ZfjyLv7gAXR",
  "key29": "4UwvuXbsdVWFFmW2j6Vej5MXckTZFWwQxrZFjFP9YGoCwMUHimFzgfP1KPiNWdRF4Pj6KjEamfP1QFKuhqzjK4qz",
  "key30": "5jAt1sK8eFsCd951HKmnHhtvoiAvLh3XK5tjVSmkzkQGhLNB5oBcCEa6WDetnTM1JvtDdd2KreD9GFq312oCdvCp",
  "key31": "2KEPXsWA8UEVAXyMq2CeW35EvP4nVAjp3VFQoSziYLS1B4U9j6eH6zhY9djGDXw8JM8BfzwuWYA6zXCjWjzH8a4j",
  "key32": "3BeZv3o1SCVpTb123XdXveFc6pTEdQSgkypzA54en3vQ3faU4ZGY6zht69ehYinsPQY6u8hBotw1MYfiKbGnWrDR"
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
