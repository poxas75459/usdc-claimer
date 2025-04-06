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
    "4ZxsMDQyFwcYvBp7Cb4PSaGvevUJQfh692SHcnDcztr96SedTfnjd4bFrvBbszfW1RQKZnDopLg5NKg8fqtq3Ghh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62pvvaYnFdyX3kh8eC5qMYbBhpGCZaTLFpVseMJvThydKmU7e48er6tirUTG2xWr5NZVJWQzHzqtU3YqgKgcyxj8",
  "key1": "2PoovAYYmPzNreU8A788xhVguJ8GGofyon4u2CH2FsBSKPs6pbLmhhmaLUag1PUKuXmDd7b2xdUrSZkBkYpvJELK",
  "key2": "3SgNXoupHk2Ms4hiRWPkhuRDXapTmK1Kdq37jNF6iZfwgnjfjiQWKVk9mdHKyJAAy98JTeLPzpo4DJf25E1dV812",
  "key3": "6B7PVU1JjJ95E4Qo1zzC197sQ7esuPgrETE4Qoh1EVVnj3caYsX7ttLp715FnZohD52oqUSPiqakKBjk4uYXj3r",
  "key4": "qzmg5DWCLCKZAKCYq97aTSRLPWwHkPkFo8od2JuKchbZBvWiAgyQubjSonLdWhmdDQ5aGc9Gee4uBsiYfTyVACs",
  "key5": "46ZNmSsyziEYCDcrXftjTywukxWJ5CDyeYUAXfWjXLoJ5QryvGrRLtqDA5VNCXr5MKKvV9i8fNHchAX28AERGgfZ",
  "key6": "dkwwbA8xDwj1kgDacQM3TzX8AbfCrAVfa3QXwwP7Zu5QqwWVYAPvuSCogokBymX6Q7vnqEsYVviV2MoP4j2xitC",
  "key7": "5b4gbnkJqQctcGgczDKAAVz41qCqwaXeYa7VhGWTzfqDHAjFtrkY6QAHxnUBeLfnkAGb58TpCaTPHGXbG9nD1gsa",
  "key8": "4fMnL9eJ2u1HxFFkN5wxE35rqRpcEzuuMx7nk2i3noPHSE4VdvjBmTvSpYu7w68TaBM7nR7wHUz2V2Grey3AE8nE",
  "key9": "5Qerq3qus2Hi9cSxTtH5ACqhq5hmAM1Bdbu4mMaQZkfnUcjMKdk1My6rY9QgKcQ9mCDBnHDdaAMvDCAuiQvPvQYa",
  "key10": "4amW4cjW4BQFcHNza4UP5JPkjR8FkGtSYDGxUDTzVoJDq8Ldue6WQvTtaiA7QPjUAEto4fZBhzU9zxCTrSMq62yx",
  "key11": "ddPf3TjhW4caVTUqhSffPCTGiomShj5pipYKeqFEENiktwu7iBBHPSW16ztTWPs91AjbAm1kUDB6fxL9m2zLRk2",
  "key12": "4T6Dh76qAzB3H6kxQR6RrFDF2AYP5w7y9DnEzbpLuKyujjqbBV5zvfW1WGr5CqwudmJ1rPDcpwVkefjRM455hETL",
  "key13": "8wwhGa7RWvtzRsWZsUKfUfMqkJKzpVTeZBEbcaQzZKrTKE4XCi1eerQceF1AENNej21ofquiyANmntp1PMk1pc4",
  "key14": "2NfinwJngcKJVLNkqGr1wd5UBuaJub2j7FcYMspRfpriQbjUMsyD4rD7Q3ZjoKH1E4kAnLL7MnqnnhbT3o2FQxBc",
  "key15": "UCx2VYU1tLTE6gqwyqYztQidbLP9Ys99bJU34Nipt5jgbVdv7Ui7665umzgRJyTzfQfMFgCkdpnkkatNS1mtWNB",
  "key16": "2Pe5t8fTwoM2njDbp24DyBuaWjwGeQJL7Mo7ojsqN8iZ56b9kkejkHwZansisb4dWXWeLRS4sAJpctr3yKk3LesN",
  "key17": "2WdZaQWS5Ff2gLod2EzzQUnUGj11mLcnSg9CPwKJqvjGCgNQVSHuP4qy5CpvXBmDbr8v2GRyHPA1EbgB9U3RHB61",
  "key18": "2NfwnAkGBgi8ku9TNDwrJzQPKTsCoAFkf9nwnASvNrDsVtJSPe7Pu5e963BL8oQwzhtEuaJ4yx34qabetjr2Cw9W",
  "key19": "4L5neHtRKC2j8NtZm1EenxYaeESsinXxCSnAzf7Q2jj9F8GCeHsSzmhHEDbsiU9KHUNrUD7dMvCyxRNLETAp4i6e",
  "key20": "13nE2L9g4UPDmQG8axXNWq7uwMEvohhTvgdm9CYvzx1DSaGqLtHGSPvGdKdPUBvHB3W1LjqqVuhD3WeUtq5f4ZP",
  "key21": "2mcypa1nYxg7R5LRih9WMwixy8Rdrk6pMjGzvLrN7e2kaR6BpJqZKsHnhthonZtYTNv3axy1PSLNoeLJuRuitWQa",
  "key22": "5kBHtbfgXCECzyZrUtoCQWzRY4Fnw2eYKCTZfRyEnWYR4hESZRbQpL1UbhJP4t2s2P2RdY4nqD1hrvhmkDorazec",
  "key23": "2enEDsumkUBemtmQ7sqhV8XYWsgdZuLn4oBtPjiKhYX8USQa8Ee6ThmrkYPAGykxq9ixnsxXWupgd3oTkNfpXH6Y",
  "key24": "4V8xRtPMmTTdfkkBrx2Tg2oTnjPDnFZSPo6fYxXVpu8MxQeMAeg1qvBt1AruTNa4743yTAMSHUigQeBpCHT43fKh"
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
