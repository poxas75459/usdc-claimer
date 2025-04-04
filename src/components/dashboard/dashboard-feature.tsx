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
    "4ZjqijW1JSBnrAER6NxHV7LMtnaUfsnsnfG24fzmrWNLW21mS9zqKSktmHVdMPYp1isLPnr6GqNq6wGa28vxxFbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MGB6QhkGbjbKyMAyKjbEJHhWGFekHbhTYDrYVabwijoMW1iTsRFytnREb5K37vt2MXQwZCJRgAJHBp9XyFA4gKb",
  "key1": "pkYRg4EGSFSFWrxvkLLiDs7ucHw4ZL4kaic6giwWcqgv18TWoDvoUcSrCeZcog2BuoReYpmakvCAZ57wbEo2tKq",
  "key2": "5dzYfxX8jirg192YE7NSJUJzHq919huqmvZaTWeF2LJFFEMtiMVbhHjPyB47xE4bv6buyVHi3rpVc5XT4eTjYGBB",
  "key3": "pV2mCh1d8uqMV3JirEoyEmpHaz1yqYKBQGXUmz6VFg4LE8xQM6y9iDqEs4onfhyL5LBXvMnxrBkHnVPFSwAeTtC",
  "key4": "4AeaF4HRDL2VurjujvMUiSYkJhw5rY77Q2dpnaSCBi5DqjjAm6qiGcDsBhTcrq2h7LcDF7LpSo1iQY2B9dGiJYgv",
  "key5": "5LUpQume5zm7XsMMfNz17aXqj6Q3pToexcuJrQyvyahAUcWeFhdXYgonEjjZugPTmPKax8eBfpiNqwnfZvKvzM69",
  "key6": "3FnUG7c58TgNdSY5BnKUj1WbfCxptLcGjUqcHQVNDSh6K11X6Gx822X5PGzwFhFUS5hDGeKa6dHCAFyMkrxRodvp",
  "key7": "3oQrMAL5ci2ZZCDwFsG2dfZ6M8uoqyUBBbgMEFNjKbEf9QwGonJnKQiGUo2rAMgpuGcSnsgnHGJCaXXuk6q8idRz",
  "key8": "4HbVpdSz4eNtcqBa29yJX33sKzx1zQyvq7i7UYjsauRh7Ljzt6AGcxthZc3t21qTVu6mGykJfahmheXvc72ihf6A",
  "key9": "CukUVqqbiNDibooMVdmK1Zbo1zrmPiKZLNBaUrz8fucSbUnx5PudqYPno16zT9B1TCMShC4CT7pPjuRqtMWZ7pX",
  "key10": "3ucjMzuwRHxoEYBnB1PTMSXuKEx4SdEzVtfadYR4vq21LPrEtCDyqXHRS9R2SXA1L96pFhWsuAh7QSmzUG7rRMmw",
  "key11": "5oDhfnztgwyrxRaaPUQ9qGkEMRsVAxnmf41KmqiKCr1VLXRCqK3GZTbGAKvYEf98K5uV6yxKR4KNQbeeA4E39ZxX",
  "key12": "5xxHf6d6cyehE2mNUdgiaGjBdN19t1bQnyGUHhVVHtjRejYkLZwiR7CTDVMyCUXsoJrJsQfyKsVJ7hnEKLpcqLyq",
  "key13": "gitQ6KzZvCAXKhhgzVUtHW9w2i3g4vTkETNHjyyvLinxCqZtqbvPLCYduussQ9a822vShp3Yy3zibNZY49sr5RN",
  "key14": "7zKtwRw7HdGeSxThmVZs6tKx4xBMa1odPSxL12iS8Ur5ndnrip5A1QXTiTzQVsEyLkeZ7QYXrPzomr2ifv9X9cH",
  "key15": "3h9M7oYy48fdqPRjMfb5bwzBXwMSi3W3drtdyt9Jqqa5kfHVDsyNWjsoQpRSgsAM5FmPzAbSxe71wWTE5fz99h1E",
  "key16": "5ZAonDqbV3LzhptzkhBRhwNYffSFu3aAgDMcLXhN9nF7SEs8245FKtLwiWhK8rhkEMCmXZ6BGfRrWbv1i4MqSL71",
  "key17": "3NL8CvBJW3hbXBFcdh1cJsS9om5nP5gEsk2TdR8BXB6wUgZENCVn7TXvtMXGFdmgcMFVegxvDZ1wkVmGKaCvQsoU",
  "key18": "4RBq7DDxEbua8dRMtbr44goA16JBwsjaJoyfYh8vnFBRxm51Ko4oM1Eyqi6umBMFfPmecbzYDv6dLWSYeJd3KLCd",
  "key19": "Nze9SQcBxp971SR3A4YGH9sPXJBVr5jcxoBtNg2Z6vDWmDKRT45esYybvg5FHNemZkoj5ED4UpFiC5Zf3g8tGUU",
  "key20": "jZan7tMyNWXV1zmwUGpZe85jiRo1pQ7z9retimoL5oVtQownKqenmwqRFzizj9KUq2oGNrcv2Ksd95y1dxaniC8",
  "key21": "4CqtxkHBYE9EsuGZ41dmyL7S6eGgyvPnsjp8Ymhi9xjGTvDFrxxPfDtE6ErYWMsL7psxYNYKYto6kXQKkb3iZSPW",
  "key22": "JrxMH2iFXmYx5KNrE4ghLWDAt2J584UbVPQuRHkpb7R8uDpY64d1jmbyBC7sc3RnRoWuJKqmHr4YgxdV86vDg5E",
  "key23": "65cWX4shVtFzPe3DZWfVPvuNbc3ZUCNajqUTwQoKUPQn4RXkSfB8q7W1vC6YiaDp4SLCWiD1W4znhzeoQcYdbzVb",
  "key24": "4T2CNiJHjRY6VvRHZWK2oMERH9vSfgyjPFsUcdty9BsrFbspCeq8ThCijseDP6TZvpp7BcLN7rjsbp7rZtgAtEA6",
  "key25": "5QUKbjz6NWzJaioJrQLRCYkZ4i6HpSDRk1beJFRR9H4aWoRVkevQETvfzyg1pEsw42aVpVX6yeGHABccT4SXxLKR",
  "key26": "46UCyryR2W9EYSCDcT6u2D59sBVfD3bXVpuFsw5hqkZteU2SuwAcQbceWQXVpWgT3qX5N3bsQaBkNYQxFLMUyUg",
  "key27": "42gW5Jj5DyJYtWNt4xACzdP83m1pWeR8P2PDV91RvsPy5nRNwDdCts3omQiimvHRQ5myDsmp1f7XdhY8oR9rqdEf",
  "key28": "5BAcEFswhkXgPGDCS3ivqzj5MasbehTis6dJeMzwN4g3nEZqgZSS5Xc9BBAcogHP1dHyW4NE8zPEYySYu7Eh1SaA",
  "key29": "4ynpRcwKBx1RbmSgA7GQRqBqP5hUkCAnjnboLFqdJA13WWs3ee3wbcfieUyCW4kKesAjkXjFe8jPwsLmuqJp9mfR",
  "key30": "3v7AhXZ2XzB8EBecNoVBAa9jrj6nUbj2R37sdxqHUsG5zG1vsB7M6oUeUhhmdP1jyb9qGqceAvmxhCLdpgwMTCDU",
  "key31": "5yAWbzwdiJMxy6UmHMyFtQAmiawi78g5CTF2VYb8SNhNTdxKJyS6T5zGBzeUavXWrnjNrRx8EJm5EFiq7H7j64yZ"
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
