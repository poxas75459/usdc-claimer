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
    "4tm3R2h8uP83m4aegbzXuzQCQbMT7GtFpFz6ZKXTM1SX4NMUJBNCbwd98n55Hk3gytizQsLmb6WAShSE7NxpVWnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sMvhjLDWvCQfiVi8cwDsZYY2yWEM6tCEqS2UEPPzo55ZW3R2zB3BAjdRWXcL5Rwu6TpXpThoFYsmq4SrYJ5pgmt",
  "key1": "53eb1AV1fJ6BoHceMNvv3VwKL9U4zmUrHSf4fZoSnb6TdD2sKSjzwWogGTYmn62ZU5Gar8WfUwJVGZH9b4Zae46L",
  "key2": "2oxfC4KMSzi45t5Z2kZXu54TLJuwuiKvBxnfjeuYfRmN6DQUYMQWHjjL4gUAwBf2aqhoyRAwXye1JBbV9Jp71wEF",
  "key3": "2Staoq4CiSg3dkwLJ9PpZNhDYDdTgZjQWGrBVopcLaL3nJ31KhPw47ZP3Z6c37zsW6e7aUfQR22WuUTn1MXf9d1m",
  "key4": "5uJJPXJEcGhfautfNcktbwdUBUs3NX3Ze6zBsz3cq2yhn2BzgoD9qefBLaATWFhpzw66TMk4JJgxmASF3QFzpxzK",
  "key5": "22Y8v9u94smVAJr2Ht6hTvkSDd8DA7sg3oti9VPFSPqauDJ7ojbQKjcbkmFfvDih7hKAhrfC5CaFGw4NcRZ3pr1r",
  "key6": "478CkwL8jc9pQnYP5Cus19bnkTyV6gDvSaLqrPQyxFtJPoxvYYsUYUtBt7RuuVhmzLSVgynsMiZ7rMnpYDGKWcgL",
  "key7": "4Xnf48zwJf6hArfMfbXXQJ11TsSytW6GNm9iiMS2uy6wrKKET3Eti2RLzJVT4UTH5jZpzsg3BbqBNXNntdbLFPqh",
  "key8": "64YWBoyRJd73BHryvWfkqEzvnDQ64DEmuaCSy6ofAmYrbrK4k8RAt6rSDkcWH1fpkvqfkEnsyDK5v1CYvivJtCSg",
  "key9": "64jawVJ1H5QRRXzEy6k8uTMJSJdHBEP7bVkNB9XEZ3k4Dpoqi84DEDtz4TXFjRRSP3HEVe1irvgfqR5FPvkJRvrB",
  "key10": "3FbUYkvrYXhbBiUjkEFdNaqS7SBPZBN9bb9Asi8r2AXXSby66TfcfpDPMrhuVcsYnQseLimBeEJfmF2DyScgHfJg",
  "key11": "ntdBEYr4BLQKufCAewD8Grc9SvkHnUNsekFmzopdUoAH6JENZHBZg9JWGkuezmGrTbK6Z6MVar5uC5JsDu2HYAD",
  "key12": "4UVMw9JwNfzeaKeHGV86s34AHmtUhWWQmtea8ir7AYQSEnF1WmsXzBV3xS8T18zJxpmNj7XBDtMir97g296URXog",
  "key13": "KFtz6vUcdTV3cCYx8UNu96LRbHgSnF2raGbwJey4C8pKdVJZmrMRcbBHPW2rhn6PX55AJPHwcp653As5eLWtBNK",
  "key14": "5YpCsk15s4MTB2ULGBGs7xT4A7Z4TToJKFc3RPGPhvrv9fuyLqcXTnpiu67pDBqrVPVuWGWdCfyAo2rxaWjWdCqq",
  "key15": "42V7KQgFmZyo4McEiDoyZnWM8kSWyiK4CtYj12Cc3ewqbojTRWRmCP7ABGh4E84akbdBhVQx5Gvu1byVsGGGbfWJ",
  "key16": "4beLwfiHT1EcjZ1pqStxKSEZXxwdvB1mmy8k8t98AYJC8xaSRXQhAUJ58B7upzZEJxCToP9gZP3LR5nACMmPG9Nt",
  "key17": "k6k32geKBSuXWznAHoHFAEvVH5HgKDxbKMUXYbsKxSWSqT1eQ4tHs1Pm2HCTZRTj5eX4fd4NU64q9VtRRmEm7Bu",
  "key18": "4D4GB6bohbaoz8f9z4beoXSYpYL8yCrxbUQDpAHbiEB8JfMFGiTsBZNqZgvPzxUrsDEpUk4xVQuxsVajg2ogT4r9",
  "key19": "28bZqWFGkyDgDtjLU5FKLsFKEZzYKJPc9hb8EF91eF9NRZ6RoBEyvHiKERzbMhuCEPhTp4bjXTUjisRr57SXLa8Q",
  "key20": "5U4FRWAPuFo4Q4SmXWzQ9UXTxBaq9U75pMJzB8jtNCgzr4tbDALqARWwaaCPw5bEW6P92b3RcVVpryEukipRCz8H",
  "key21": "5Kurf3Yb6cKfQzEFaCptXGM9dN2XF7KQERVQhBWAGitjSUtG9n54w9BQDQvjapuwBwWQyhQK4H1rErknUKukKUz3",
  "key22": "5ypTLoPUDm8Z3u8jpcBYA2SMHCwnKGZzska6b5Em7tkbXzYawHEzyT35G73mKaCxtnpKVosuSX9aEZRJtzqSWdUw",
  "key23": "5WJ74PSvhiVWZF93Trd3URwuZvfGDrQ5xKQThSUcDTCvXXMK2FrKUeSmq9bGCatp7k15R9969NugNzWV9Aw5Q2Sd",
  "key24": "u6naw2unFCcUysX5RfxcXSZCFbLE3HvQ9c4vvD17C9LNV26dzUkCCDfC6cLryiQyvJ4NE8Sf9GnW32DFuCdTXvF",
  "key25": "2W48b4MGS2jE4Qh1AjBGAVYEkPZHdWysc95ut9AXjoEYc5hR87roUKesRq1CxewoQxn8sUDMhvg6ChkC6beWsB4p",
  "key26": "5DrjpnEiakixe4iGhn1mygxEZsYUEhuTBFGE526tJ8JLKQvsZ9yEmNyX8kwEUFqGbAX72gPHXcg1wqK9QTx7MfzY",
  "key27": "4wdrhYNDdSJk8qj4XS8xcujNHwzU8GXPiUp2CRxntjVyxPqEZoHV9W8HGWExUAM5ZAkGbmAfQ2LcsyZkEneAbWZy",
  "key28": "5VsFKbrrSBpVWRgR2t42CqzuAUfQ6gXkTZkTsXuPHeQ4cKUbHinia68YKQEgjXkBQqTquyzxXmzB426c2nK8Yuxd",
  "key29": "4JsATEBoqZbYuHFcDoAH18YwWk6tfMuG4dsGDBrnzMEEc5bEoPVzJHTec9uHoEPdP2FJv5SnrPD7iiJbawu9t6kq",
  "key30": "4gth8uSeYAAzNAuXL7SqbhvfvEQVyW3hsTBSaFK8dRpNP4dG39gHWfrk3NUC5XxYQBUKUbzNRrqHi87newtGKMv5",
  "key31": "4Wn6wjoUBqDCZ646FQAeULV2H98eFx29obYAVNkvgxYUxqJg9r6XD7RBaNWLJKoBEkVsNFQidzbHut3ha7GWj2CP",
  "key32": "3ByuVBHjwGWL6k3DawUted3QqWBdnZ89TJd6WNMB2DeT9E5baeiRLpt1zesFnrj55jTPwnuBUaKp2uYeFPCae4B2",
  "key33": "cJkx34ZsAsonXLD9R3Mm7cbiEgoodn6eYD735kYB4mzF97kPeArjbRkeFRnhCQM23mR9PN8Ze6FV46ym15396Le",
  "key34": "4e87wcF3qXi5jhEHD1mzATWzD5fcA4FFbCJgwSPGgJDGJq7i41qUWzQACgMTjdTywHXgmUdRVgZhg5jsrY9CPPrJ",
  "key35": "35xTVAJHf7FzirJEH13EdPcZbMKbQufexbyNqgriYNMrW3eRkiz9SwNdX9CcAbkFFV1fA36pTywxXALv4JaW94Ks"
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
