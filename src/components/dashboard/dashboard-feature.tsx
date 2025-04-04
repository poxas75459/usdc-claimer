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
    "2vJTpwuuFeAWVyesKKWC1NN1AwcDdHyGDe3aq97xVgMTVJQHi3suYfM6bKVyvf68eEMqKSQ414hD4uQBbrSVy4Yu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y6UWYChmPbd6rSNsc56ruu3RU3DB4j7kAY5SPsZosznNYdHNKHiNgU6BPbhkXin3Vcc9f6YfFZXdTgbHtQT6ErL",
  "key1": "3tWqWNN1jewFUgi4EhW2SNXkjgMqZdzzvAH8kaiKNiYdtYnyLT9sKtGs4Jnjp6mtjY5S76f6ywGUz6dCkjSkZ8Vu",
  "key2": "4sKFHcaTWkWzc34fEASUbUAvFztNm3CXupdX8kj7oUcdR2UCXJA4eHy6dk5KJxw986oQs5WWZrnKqqo6ZUihrFwK",
  "key3": "yBmMfijoDAAQKrqE2m8G1BZrQmwGsEH2ZBMJZ9adn1XsgdKybqytoVvCQEkSc6iQ78FYLYbSZhTScYGhG7rzk7T",
  "key4": "5PvMZQFnemro8PEia9ycrng38B4FACQRiKfvmwF8F7KYRMuNuZKPMGpqQFKzk13TDVHg1LBu3uZEqxFMZhwYKdx1",
  "key5": "btFiN9CzUNxc8edXVVGN7xa5AzFnG36WBqSX1p9aV7K8qfZHBsGGzRMFFXx5YwnscpVNvu4fkymhYGTRhrGssgU",
  "key6": "4G7h8qutxc988APR8L4mGvmZDj6oAjQk9CVsSvcF2ppXAphaZF5hVcLpzowVSYCqcr2Hw69n4y2NixZAVp6wEs1N",
  "key7": "AohKMahvMfnchrYZVGNXTVuVgQNPjbpVu8R4tX1gkd2gfGTZ34CtQkZR3bMJUCMtTQhGNKgHswQtgwDAbXvNfAT",
  "key8": "4x2YFFonVAtRuiAYX2dvqn68h6LaT4doiFAycTx9Pqb7AWyPNuGGfHQYniKCTvg3T86STAjBY1SuwwQQbMni8fyU",
  "key9": "3bTjGZMjjfjf17UpLyb3GkcKiNMG1HeJ9GP59iMfELDsmhTkVG5uPUhQpaJswZQCTEWkobREhqVTxbbGDyyYLZL4",
  "key10": "3i8AmcCLfcJer99sWDWNkR52MF2q9KQBKZGUUZ4kSG7kFXzUQcWFLjzMw46TWdmN7YgfLLm4d2N7Q7csqvMeGF6E",
  "key11": "21FCPKieumjcSCkexfZ7qeDB8g64uhyb6QP86ytMF6VQmg2d6gQzfs3U2wRnFCnhsxnvAjeK16v63btmKhT79bFq",
  "key12": "5PqeoL4mNTjhehSECdmrk9JV2U2R4koRTWJXWieAuyqUjYsEWcZ2NTxLoYNJgwez2mu3EczkWzkR5gxhamd94ggv",
  "key13": "sFJScikRrCAPfWVAg9SffBpwTzqHxUsDmqbyyuQ8wSRarYLzL7eWoJNY1nKxRDDgygrgCqHFXEEKFd5132jW6nW",
  "key14": "4RES89NCmKBBYp5Tz7YEVVLPaMBxYb2KPHbWPFcP1s5Yg2khM7MX5muzLWiXjDMHfUbcpd2Sjd8XZW1Ku5QwEQ4T",
  "key15": "66XMPFRoHFHYqcZ1y9HNZYra7JapeT46ExY8vbYPwCcRYC4DwyyBsiLrzQZffuz11PXkma8HKZ5E5TsNnn9uZ2wF",
  "key16": "6i4BSoru8P7YqpWHjNUjJhiTsaEMyxsuyonpY8Rjbj1jiXJR8q5kqgHdtrfYKhbUtLctvAFuBic5mCAX7rjV7uA",
  "key17": "493imZ3sbAi9CFkfsdDMguFrRLJgTw4Esqbbgzw28iX2uvbkkdJ2jH4SUMTpQKm6v4TGDoCK9VK6XGefdNZN9U5T",
  "key18": "4WhqFvDAHyqoRWnMXswJ1jq7iWDAKZghssE4qGwn5wWAWaApJNVXbPHoNYo4vbjCDpmqxot5QmoCUbbf7Ffm4iet",
  "key19": "YTFBPN9m6brhvMfLg4WEd22jiszkZbp5FZGSBnaWsQ7ckvKoisaSS7mouh6vTbvESwq6i9KF3n67sYD8oDKQubS",
  "key20": "52SJgufSxUhGqon6t5u6YU1h26XtTTTQiRpudeM9gbpd8eiQU3BGyaXPft5xsmgb2Td6GuLqJ1VHkyjauH33gsvy",
  "key21": "JtxeD1yCshh6F7REg3KS8mrsaKCLpCeDd5pEaNgWtGeKUEv4EPK8VSQQ7yc9WQ8shW6XxQaatZycNP1kP2Dw9EX",
  "key22": "4pk9jqj7E8Sxegh1dMMjRcr9FxnVaFCiYsr91G5yfwuTziKe76Mx7oQqfU3o5BDmH3pu9bKGaKhcPjMrGnwzF8K5",
  "key23": "2P3uanCRAGMxMCBrUQ9RLShSKsJDihUd6ZZqDq47KTyZ3yZAD2xkSwHVybMbQsGVaorDGKdbX8Uf2FomvPGM86ex",
  "key24": "5QbBvgzPNc1enK495YBA3ewpwX8AK1bAeDKXFumXBZUr19gM9LuYW8Y8SWMf8BXLVwPAymuUJAJRm3N1xZ7sP8Et",
  "key25": "3994hcAyg87mxYEG3t1EcoLjV23NY4qtvWNEhtef531oVg5gVZSQw3Wa5dmpDHXNXoX7Dx1TSydJ61hmWe2oFfaH",
  "key26": "ZXLrxTugRn87TJ1yRmoL7tbcE2ChfeoVy4a54c43tPYxv8SQaMayiWGan2atozwHgzbev2i5fZL6kjNxfYsFLSa",
  "key27": "2iSZ3vqzwqsBebWGbParQNR46rNUEZ6uJvaJ2hKnLmvgbWByYGAxLCCqrPTFZwxQ4dRZ58nNQAZkwoFN43T9FYh6",
  "key28": "4KT8R8oVUsWBHESJZN2tBryvFjrcVXEFnCq1wSGmoMfs87zQPTNz4TtdMRYjVK2FPQ3g6YVEMpmikJCj1QBVPzvZ",
  "key29": "2CjXB4cr7cCrzrvsr3DesgFpR5VwNwA15BCSr9urGde4PdHFTUQA4EJ9dJm8FyZf3vGHHMpTeRmFWa9oJxvJf2wo",
  "key30": "5qQcfUtpsZLPzMoNUxCD1zCKCoi7BU5QPxSPbk4jPPPwjTTCdTmqUWohDLCssnR7spFXWKArkg2oafxhGhvk9s1K",
  "key31": "GnNRB5uCVQxvk8dWhtrVo88mKm2xCBuiFw71cPQ3v9Zy4ZmUdnteAkpKutnYTP7nVECzswv1XdPcqmKjEiFzbpp",
  "key32": "9NfjZTm6YBVtRoBj9mzViS7ojRpXwW3qjiwEJuPPyPoZ1CWpDt9x48jtgwvjfDFiqRwacKMLVK3ZMphBZhXpCyF",
  "key33": "4TzyeCEPbVPcQvgUvesqhMR7Tx917Z4kPzmMcgyQNDyjz31jaiF3P44w8KKGusbxVyfqnvPuMyVHuRLwsBTfAEM8"
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
