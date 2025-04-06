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
    "4EqGHpgT8m3A4eo452NgGyhZXFFzprsRjpqfYfKi6SQCoNQAgGkPsBSC6v2JgxQLiPA3kPBSyB7xiW4Nc7XnadJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PrfDoFWdMPy7KMhTMnuqn7Vct79gX4Yg66dY3JVZ2ezq68pgYKMnp4Xqo5oaid7NzyMVbch1tueF22GpQDaw195",
  "key1": "UHRh2NnBFtapnqdrRg5pqqXopKSC7yM6JAd73fhUnCWC2bFLdRdL7B3kHhVAbFANpJ4G8Tc4Q6BuqruNq44QcW6",
  "key2": "2nnATSNvaMvckyf2EzLuuAWqRc6h12JVVZHWTfUGKaoCiCCZCUAK8QDbyikFF42n8qqtCRfpNBQBaziGyqoRUpER",
  "key3": "2RZiTJinoUDeWWsaTdaB3vwzgTmHyvHz43cAPY79Y9wny5KZoZTukCTiSo39QY3gLcNNiPVnCZqVcdZsLJSKyHSm",
  "key4": "3ahsAvrue4dBToT8Q11nPZ6NY9hxYjRH22idGq6DZJAYtLx7ck7RRom3x58wRKjVpPPVDFivzFYQYjwv2E3E8AX2",
  "key5": "5W38jV2oyydgaDpABP8tGCLBtEEDp7nPjDzagG35jz7rzyBDvkQcVmDPt7PRzFiLVjeCtTCD4tY9T8UaPC2vCGmP",
  "key6": "tgcemau1fjLai3yXC6qeFHqT9W2CktGBsyX4cqzp24XYE7hchPSFAVgfL4wyhVhRX1C4mdu3yU6pfRe8sEW2gWc",
  "key7": "oCwef1umPNMb3SmC55wVhDVFw32CCqWFs7gnZxfjserb8DtDWbySkZTCtuPC26qWECHQhJAyw7HivvkTiJhkiMH",
  "key8": "heZmJn52gtmtecA29zxjtkpmoZEMUphqi3JveWD3ojLJmsphVJ1oBT2AJoRTjGe8dxVJMTiypRLRn4VjSj1fKtx",
  "key9": "64MovgzTxQJXpdeYNcnUeXEQcCMhVKbVaRWRroaNEhhV5ecmvqJa7nHaMd849apT5EUukBghMP1J9aEYCLsCpwny",
  "key10": "2Fj8nwB1A7W9JutxXf8f4o7ez94gVTRYVBgKqMrAbkDuk5uZLSLGCK17QAFBYH9J7E9bawVvGwoMxX3hbw5bSeuH",
  "key11": "KRWHumCkjJRun11NKz8HBH4UxpGkybutQC7mNcQxPmnF4jwh5j2fQCnwmbN19HFtzjNiaJfzS3iWFzkWWBtZGZQ",
  "key12": "3F1PwC2gY5zn6TxeQaCfrR8FDAvksqXsQ5UbhJYNSygWeXuJyto2sGwGJDjaqa1y7EwqEAzLtraq1rWepkQpVbFe",
  "key13": "3UF7H18XgRdRKLwin6jDcoSPh4uxZXM6xpooYAq6fitZw1bcktn3CG1HPB3t6awJV64y6L9APQXdRK27fnjpTX1Y",
  "key14": "57BQwTHx88urnXhXDs1nNMLMcqZ81GMoqMXP7dPgNWeT673ow3dcVg4am5j7qAKwhDW5prvTDDT4zXr219hDw3Tz",
  "key15": "4p1WuX2M935RAvMogmq4MGw5vDvdsLt9cmxDe4gpYtWWp1otx5y9iPzcrbkN9SnimLsA966589oRZRVhaTSDYdcC",
  "key16": "n1GfFdadc4KyLyyUvuM7rUhroS4N2akYuDM9uyVzdD8jiuhGromXC7PiLgUQVysGrMFqTAnKWjNssj3kahJaDhE",
  "key17": "2e5HHi4XcDZ6PbmW4Vyx7mBKS6ZQj78hB5nGQH1LviQr4Z1PyHvYzkgTcSPxT8c93c9RN1fEcUCmaUuVnaukXfdR",
  "key18": "ZB9jw2tT7y61fyfnE1viKZYD2E2ACCkxrvLbYEsKpV9VZiUTyAjuen9tdWuZYRLov4gWdoxaPZfDytq65GX8m6u",
  "key19": "5MbtGydDzRL3bf3fWZvhaE3oRc7sNNm1VZPVAKCWrpPA5zYNGHHRYE2kN2ia3z2vTu7Zhk6aMQEpX6MEbncsakmX",
  "key20": "39G2KUqA5X561vVoMakgewxDb91RkPykFELHaLGhjgQAMe9LXbfdqLrRPp5FRNQj7izSLc3rVNbW3kBTFsy3Jn6c",
  "key21": "4UTrTxUWTUmXKiiUHQN87LeDvitb2kpN7gvcc9sr35hqpxLwxamytzJqewygAaTYW5r2TrvwwSEkjVNj75XDChzT",
  "key22": "3ejcB6fSZN3oEihEdymDnG6QcHA7Ep8G2M9LEfv9CLg8r5XNxKdSgfLY7s9aJn16Xeck3HjdJ9V7A2sggj7tmHss",
  "key23": "42G2eenkGwEQLEKEq2UykJR9T56HZgF2Jc7P9BUE1qgVf58TKomEtsExhDzqZpKNDSReDa7pnqE7ucEp8o2mUgTp",
  "key24": "42wrUr8RubDvXKfog46eG6fGZfZxb2rJ9QhF1RB6ZYiYuhmFbRqHRwQE6UJRhQ4BWfcYFd5v8kqonxPfdnFvR7pH",
  "key25": "4YG4gUyuLYhvZH7hniydcPLUubmgyaa1ebY8NaxLJWnn9rZvEoziwr6nqHS9rY8VmqzA2Xf1bHqxT7c7Zky9SN6H",
  "key26": "3No9kBLWW6q7UWyx5TEHXVr7WbamRyG9AXinW4VZCUhBcDF4PgaSYFgm58uyQNxXLd3QihGTtXhNwnfAvSBo9MYm",
  "key27": "2bdUQWchzhdJVQ5b2i12vwJqB2ShAyWmW7LsMWFT9VeD58jqD5MGW15yu3yxfjDauD12M9XJQA5A5AFJZrefaaK5",
  "key28": "ay9tSvc6nSMSZfbH6GrGQn6Wio4mxQXJ8Ee3E1J5Fbg42PckR24T6tncUJmz1nmkqT1h4cRYVkorg3NbwvjyAhU",
  "key29": "2Rz8Uuwuc6YhaKSGkbSAs6J6KoPsC6xoVGHGDoiJ49ndX3rm15AQkACHqpQmfxmMqv3pJHQ4uFxeZQs7AdZCGB2",
  "key30": "5C7QdtGDhKzNkZXJ4kqNo9N3X3aVu8xgayfqXDKr7dFR25TaQnCrLFoKe3spymyf5p696B1doZVdBcP4oWwKgW15"
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
