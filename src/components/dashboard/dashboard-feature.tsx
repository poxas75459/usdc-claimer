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
    "5THRrh16nWxdavU5nDfsKcWcSD1GUGeChKpHL5b43Gza8wCiV41r8DrgSobDLFtrv6mwFTA33RnudeKSfRpyJXLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rqo2mAyft2XL42jwn6oZiJjfDUjUMGcEb5KKAep8BpT5LBsNH4yudnoBXzsQ1rqas1ByFgc62mmVHrQNr9XvDcU",
  "key1": "4CCcrFVCDK85G2ktQtdBMUzs83Nveu2smQa5c2TD3snaqdB2zAcfBc7JGXs2DVmDqnhwV1DANURXGR5DB5D2FWhr",
  "key2": "o7wvhWoJ6FoS6XoWUN7xu6E1VTTXrFkAktXmGp5XmFeqLeLpWenn2GACEKsxZBWVauUTGi6pTbBDHGoYaXxPvcK",
  "key3": "3YHNqTipD5KRuEvcdH2KjoVntJR2AC7rLEP6keWXYxhBJwhE5GBBihsTmqoW2hXueUophy32JrKuSEYqSHNhjUVf",
  "key4": "23tJSR8NMKNU6d7c9snYQfJRVyZeZfNEbcb4zTL2bVHVqH1XJwde54mvmkRjmMVpnbx8ZbaH8yBxxw11JqR5ApDx",
  "key5": "4TCjDg2JfrMUhz8VgVZC7YMGVsFi5s7tJPzuqviD7nP3QkMdLpo9p7RDgV6jmA2afcnZiEGdzC5bKDyCHXVRkTWB",
  "key6": "44KLHSE9YTPiMyNbmGTEaMRf1joJDywMScqgV3983LmYJoSYVheLtZgeVinwDXQH3LazJRZnLvWynw31V5xJ3bP3",
  "key7": "663MgkNhaUCh9GevwYJ4SLi5SPGftbwfGz5soMvc2oPNGo3KR7xRfk6sTyJY2xQnqEZNaCUBkCFY8Mggyxo5DqAc",
  "key8": "ws7ofUFu5TZtBiA5rW5uGBL8HEBRjDE9AMs9Z6G6nXMru8RSRdHXvgPGRPwLnGCNs8cfj4raYTXnyt8vPrE3nLf",
  "key9": "3oe7h12V3Z2UiWivhiV4nqa9TR9bSCJvoF3FZtwC1RXbBGedJ2wm4FHA6r99ga43o5bsnzfBvYA5hJfFq34DzNj3",
  "key10": "4HLmFY68zoQ5ZLRvoUXDhsYPfBgXA1XkMejDonJSgNApGFZaWAfk7JCSaW5kc7L3E9rgng1Cb2NvtWwe7GS7pgB1",
  "key11": "SgBCxYfmwqKZBKJPeuEWuxtxwWzy1RynUeySGKdVbDbCpjdjqvYHYfP4Gg9bHmiK3oqgopweChGNYE1Rn6jU3zg",
  "key12": "25pfbgJwd1Z7TnMaN1H9j3cjnv8LRFyafJyg2AKdGdVmkrDAphC5yzKgjPE5zGNKwLDwTyF1cSiEy747aEdhkt67",
  "key13": "4C8M4t13ZTKh3jD7NqoGJRY6BUY87eVJ8cVtyLpe1b3Nhgr67CJiUoM5eNfiWAHpPj28Vp7k8R7jpvEjnDDpryPE",
  "key14": "2ChyewcounQCkT7WTpdAYhn6kH8Vf3iWhk9XZjUf8pJgjBYJjLuEPDoZyYaEszbUxmR7AkAoJ9TK7mTCCyg9KGB7",
  "key15": "2hHtLDxB5SNaa8XtykVoVNH3v4GeP7KEMem1Nc2yM9GnnT7x86wN6E5t31KBZ8uo97bGsH4xHLSt6PmtVD2An1rJ",
  "key16": "4gBtRM5XzYUhEynxdARPDNNwKtWRRWpuW5jKh1FgkqHYaaf8REGqKNBqx5MfiXemMYVzkpNRWk9oxgUChCLj89on",
  "key17": "38mnyCnGUPygNyKqDRbLuvXsFXxzpKUjxmyeEQDXUVHCjtT3Mt3D1eLdPUQkqBThREJU8NoDuTuJPRsjT9aRf5NF",
  "key18": "HBtzsoAXRupebvsSz8uNvwbxHXcQFjzFRjQmHQnfpB5DXBDiwJfdSpG71GjnbzeERETMeaaSC3rxGVnTswoJqQu",
  "key19": "2QNB5pKNQi1p9uc6qz3VBC4GqjCP8oJaozBNi6zq4JkPKuG295KZMYQbtxCv6VzkPh2gaCsqDRQPutdXpFAi7HDV",
  "key20": "33PxTmm6D2FkmqvNpAx1HxnmveXwbHnjSbXYhv8UaHXSAJhRm93zXbRhnFMawgYQnQpH6rkvn1aDqBfQ4ofX6fT1",
  "key21": "3xfXVrPHKEq7p5mXdpaQFZCcc4W6dgjvfnCA1mAVKczQhkezh9XDAVRmTjSEHR29SjFR3CnNmvxgQLHYhqw2vNmY",
  "key22": "41EjqxyCn6AMMvvepEyAtByW7yZG9JfDi4Pg64FwuT49nPEFWPiD6USnMMCEvTnrGKTSGPeNSCNiE8vhzxqTDmeC",
  "key23": "MdGtPEQgeDWezQSoBPqeUS3bgr7xn9obora2GwnLehkAmwj9WEfjA5v7C4AC3EiryuXVE4GWJ2ERt1VWMjEkzPF",
  "key24": "2TkHsdY6ufY4PjghPaiCF3A7U5wYziv9MqLY1XHLBjTXkz8GKBc39sQT5fDYetnVv2QAEAozkDcQmZZx6hh6bAnh"
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
