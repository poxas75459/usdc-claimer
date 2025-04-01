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
    "JTvxaSm26FAnK8GNvP3KuN5zJhMcszy6E7cko3xCQCL3tNNNo6E2K5avxga42DYAGb2HHMgyEEKovdytcPmr6Ak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jU4ujPH7EkTLZkLbvUrpvADyn1zMM5ETJ9zzF6R7LCZFUnBzxePHJG12mBsxX6Rqct9qqXpMP7hvPJTnWBU45Bx",
  "key1": "2zCh1QqWtvGSMGXQ7VW1LQfDeqvqdQTwKw7YiphHJ16xPBos97T7HSanq45sJ9YfErRC1bABDvc199w9eUzZqgnx",
  "key2": "4vbEohkoPPjL3fggR2KxuRgQC9W6KUeoegD5C2rymWisPueKL1FGFQx3ZA8QsPJJ6hipPnbuk31vT81zzj2Fgghw",
  "key3": "4VXs9jYQtCuaFFfQcmbE2k89mRansXo1cAP4uwaCzihwXMpPaJMwLdB2xZfZBNy9pbNmTG1Tt9ME5vcovdvZWWH5",
  "key4": "54YbpcuoJPK2LrYTLhsFb4MP8365YpojySxmJgZdTRr1RAXe2qwqqBaGbDygxrMkjNMuTRL3j7MPFBTijzjoWGfC",
  "key5": "5hEr7QiDoUbsdy5rRH7phEBcxmAmwwaxZp7sfZVVxf3U9CEzGU9gLaKS5FdvytsJ8cYKUXTE7h1acp9KygdM1hSy",
  "key6": "az2y25khEn7XW6T81JTwGUpL4WS5WiZEKN8Sjm6kbpJWQdbvgLanquvvwkBChRKbCovKscJAwms5cAFpVkyqvAj",
  "key7": "GdVAxKWRqQc97JVDQJwSyCjRQqe5a22JqAvAfgcpsVhbxjsc2tvYNHamNtWds3kgTE8873AYKdZfUu5bvqkbJK1",
  "key8": "5NAUb2TGBhzMJjTUP732KWEqkTvyuXWwPYE4mEWSkpq5x7yjAYDAAdkZvcZoDqxMZzc1M3fiZ4YfU9ACjEEBtGua",
  "key9": "4KYdrkRJVkHaVa4VtnviKDCmmn8NZVEc3Vq7aGfAsREt5ZwcXBtQNsU9pi7dhsQLp3u5oYZkVLp3ABr1yD39r2x5",
  "key10": "5nfs5SU4qAm72sn15W5YNcbtTesXw7UwxKrUPUMiFBnByrx4CdmfowHL31oAcqAT8jHzAje9vc8JcoKRpqDqjwi",
  "key11": "3YukjhUhV1iQSzsj7VaDiqGfwqat7TM5CQwXVPssuGYpjUZJ6ckBLL5o3eBi4cepWt9nQSmdeswi4Gs937uEuuYD",
  "key12": "232FJ5GRKBoBAFixrbkWkxoov8WTVDdEEsQVmEHyLYFWtCFbJqVrtCayZ3bYqWBbYtvZszwzmiGQLvEm7cVaN9Sy",
  "key13": "3Rz8YRGB9f4Ls58Pxz2SxnJzURp5GXDA5zsLK6QHVKGikPSuocN4ENsgFkLo1ZjebYiwhkgC1i67o4ABoxDxRTU3",
  "key14": "2RNGPjfxkW6BnHvRY9VDUc5BKqKdQZDFFBfiBhsV7syqnyeeK94kYZ7cQNNguK1d5daDxuir5hitzF8BfKapLsa8",
  "key15": "RTBtfmWBRB6SCrx9UbS26RUh1uRvrfjFvtdv7DhYTKjtckJGZfRH5j3gpCAytyYDZxhcuQtD1zoSyjoSH4UQYw5",
  "key16": "UPWhzUv9HEjjdontfVjqd8GYjaF8c73CFNyDFk8QFQi3ec7y82Y6NfPcimN1Hqs2Tr8R8PyiqU7uZZXLD6vmMrq",
  "key17": "3CzpxeEf7eYFxzE3wVYoBkYSJq8gQ6PyEb7p2YniP44bQEhkmPi5kegtmdVJknJQcZHLUwvJr4wHCUczoTE7cJaV",
  "key18": "2hM6QdZaFZxmC6qP3Ux26Fnqeab2wCP1hZY2dxVn9iL6WVUMG2CiZxdD7SguYFX3XGqCYsu4HQWjWH8skYVDPhXW",
  "key19": "5XWrQBUx9fUS8eQexDqwgdfV2fPd5CffLtUYc647dcRUrkTgYYmwVDQF4PQy152AUeNBXr1xqbPbPc2JHFvB5K4v",
  "key20": "2VJmdhD3NUVD5Ro5tP5zt8qRrsgDVoFgwCH9pGCB4eC3ZkCia1h7CG5R9naLcyWsPgcZPno4ztViFhiM79qM323P",
  "key21": "5ygd7dTqTBex371SYScu3sreaGqXJgHFQtcz8s2Tbh5rspbH3SEcYWb2yt435Ez83e35aomwAGE37cCBE1d5HogS",
  "key22": "3FQpNTi1gow8NNz8oBLidz5QWMzhVrUa2SxDx3ph6mFuqXwLmbGApQ93R3A2nD8zAtNG4tiZyJEwSy4oHRsc2QCg",
  "key23": "kTCEa6eJUFUYuw9kV2NMnXE7jUDGm3UMThXXUkaBtSqAT9iguUGUYKPyKRLPDADUTQubVaDA1RdFyk7ho8VdBtm",
  "key24": "3D9gbaSev4QW6RLz1Lnc7KwB6KrweiLnauHaAsdrfeGofSVPnbZadE6NEVKncvVfbQ8XBEvt1ZVcDEdeLCG3QxUo",
  "key25": "2vR52N6YfsDq7bu38aYrG6ZN6pmWGYDGdGueR8fRdfvpVxtUGJfFL4LH6KdVMgk1vmEqbeH6TnSA4ssG8tMYdUti",
  "key26": "5ShfBcexgD5qyd6cZT4qoqMJ1ptfgrCqM2TMPAMfk1N2Mtt5RREKFmVBg73A6p6mg8ppPQq9tbdpzNh8JtS7r7mK",
  "key27": "5dkXsni9oqGi5Ev1APNBgHyuAmPDZx4E3C1QyRZTbEftE6kHkvCCp3V4DgfavypEJ4vKxtfvfGzyiPZu3ahkKfTi"
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
