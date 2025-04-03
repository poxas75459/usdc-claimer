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
    "n9B215fUBCKjwEFVLSdabhceBXYzLA5GTZxvdc38xsZgX57QgR4A9ABJvPs4DbKiqaLs8orQv3r3Q8x9YqTc9KB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CqV7A2eVocadtkzocnAzh6Ynm5tPobAcvqFV2Paba1Cqbr2VzFosKEx6SuEM3RHaT7am7fPuVmr3ywcn3r4KxZM",
  "key1": "4TQQLVruh2cCFd5ZaGWqu17gaHpd9e9rC9R1g1uzPyeSMBb67NxSkgjQCGnLGDQ7uYAmubu6xKK3a8tT3aj3yvnd",
  "key2": "4rvyvsuaG6UDHWYBZ1sB1NZktQ2SfqDXs6YXQVarTUU2zaGyovNETX6rAyrwsiAp1tLzqfpUeUDuTdyyLVZThtVQ",
  "key3": "66U3WZd11M23wGBYDChLCTTDxX4961gfzP9a1o1dkNutCP1Qp2xxYEvcXHdsjt1YBLRepmCrySp1RueHzZaRYSig",
  "key4": "JyDyPHNvm7uwgBC7nnFPqsgzGAyVT2DqxMyEUUaVB9ytHYC98wnWgnRGBdUZ1RmjqawwtnrPrruHEq81DZFeSJJ",
  "key5": "5DyB6Y2u7AGm8gY9HFbAeHgNJ8bK9ueNvYufdXS5VWoCPfGwXcJ68mRDZhKg8uuXGcAWsegVvbPxq8CCKcnhFcuM",
  "key6": "NaUwupgPGLmbqvkaGbaQEzHszwsrXr1ZMzgNpD1CEo8vUruYGzfo9w1BSKoLUWGRrwsqu8qX7D4zPZBpwgQEKKg",
  "key7": "2CvUChzff87wNrxzPFEX6stf9K7HiVt6Y8QTiXYjG72xME7AFXZeS1okiqhLkHR4VUKfQo7pPQwWANNxW7KhULfs",
  "key8": "2P6VJD6Rj2Ajr3jRcZY1L2FQZnCLEVLSPL3hoQaCVtsFPxn3DaaYi2UYJgMg8R1teDXvNddHimtsyhMus38DtBfq",
  "key9": "4CDM9bRUHJBxAcAgSNFtqKuDBHzPp48P8wVtsvqXxvFLR8DVqZf5sBFyvkNajPkNLvPLH1Vff5yy8tafwNsgzeTA",
  "key10": "2qzDF3fkYinamCgNtfFJgy8ST6wT1QgNJVQKyScvuWbXcKch4eitY3rAm5UFGBruF5HYBZPNxhngkvnJ3vtKYqWs",
  "key11": "2T6rJYKSDa6fVCjZpJm7Uw6TuFEEfabKMX5SZYuSYh4kcjfK73f292mYETJFEB3BuXkoaRbnc18AFpj4zCYSb9bX",
  "key12": "4GosvKPgVFhnRKaVWkqDNpoBTAsqqFHAwvZFG3yTwVn2FJPZrQe4ncXBgKWTRchPR2WvZq2hmnLsdVyjjQCx9ExF",
  "key13": "4aiWdmUyi6NUpubRQawNnmHxffQ5d2QLPZNxG3P46VpAoPfttxdo46SzLQAhqhZxzPRXMxAzLsubhD9NY2yAh7a7",
  "key14": "3uKZfPTZoRCyhQKyeWixyqLcdxsDZo1ysNZq7p3otAB6ERuebCxEjmwSZB1ae9wX6us823QsMMKKTo4738AkZbSF",
  "key15": "26QuxcuggKzoXmmjdmn1BxrVGEScguEdg5LqEn6yvGCqhTU3MfqssD2ai4nv2FVX6gmDA8vEpNHKFGfon2bzfqic",
  "key16": "4wAhkzLWnNhfBmpCek4uQPgWi6tvnVTLfj1YxAaowjpnmZvvCJAzNFcAFXytPEZWBNVPy1h4edjWWfSUsX8NejPD",
  "key17": "5ectQbF5xAnrJmEQqqc9Wnx8Tmmp3fc4RW94ize2rDnhQ7jVZiAsBMwYqYRvxUaQ8yifqohmRmT79hut3gG3JtE9",
  "key18": "3tNdCeuarCWKA1vB3HQnXVHywJauqy2EKyPJDhNcLBHUxqpx2HENMg6MGSpkH866KH5pLPhK1MHPb3prnbzVNuuM",
  "key19": "4mSMRGrQWccwVcD8sgh4UWnh2cYQYV7uiNjtEzES4FW9BwSqBgBZ4QubJLoh1JvxMeJnUAmLzwU51dRn3zjXLJ7m",
  "key20": "rhe2DUpWpAeynnJWa96r8yrSpzG2SMrekZJRgiSV5vzs9uVfy3TeU2zJ14rREmiwBow9EwA6xDoigwUS7BwYR1B",
  "key21": "3YxnWBgQLrXa4LQJDpY7wsTueGGQdcYg5cgo2yZWQon7usG2dAws6NqTPuycHUxBZpfbuDMgaXQvFxem5sLqgJ7D",
  "key22": "7Us5heG7iaRaCEMFb17BZSJiANeVDdbuk5dBfvGWCxDLA6CaYja5bwA2s6eGCRzVyCGEcLGDehNr4xUfrZ4vHhN",
  "key23": "5wY49sXQVGWwVeGMpNyEYmLtTndPzqy2LJjdWgjxDf1Xj2Dkdx8E4vp4shKZSRvpQQ8S5bJ4tcw3i832iN2eEuYk",
  "key24": "2UYG9KtJwAyjuuRNhhHVbpzzDNFH7y7273vPfSKu3vRueKw7weTBZvnfxuhRqvJZWkGhaqy542jcQ6sm7iE8TvnE",
  "key25": "2t1vxGLCETK4mBXrdkpvFx76Acecqeoj4HJQ2TSvQYwnd7Cmmprkp5hug9WesgLxMUAekuraMXufmGZEmS57ycw4",
  "key26": "3vQR5qWJeAkk6cxvih9mg9iQdFH2UWV1J3xAXjnv1wWnau5KUVNs1886fB2RjMJFufT6pnXRMA6xifsT8cY3DAkG",
  "key27": "59gmrND9EvHWWKUGTke4bLa8SvUo9P14aXBuEB2gi2T5wbTZ1LvcZuyvep8RqPjEMLp5VVzRuEagA2W6vbRMtqVx",
  "key28": "56Cv3juRapotpALWcuHUaVah2nZ3wibkQvuPgVHtDomJHsh14eTkvxjcfdcw3QjRaZuRqmiXoraQSd8jdLHVMbnu",
  "key29": "3VmhqzeoQX8BuYJwfFxYL1DWVAbhSJ4rEuvZtJJHdM6J7sKNJWMk8Go7qfdgRHDdXL8Y449BNpaRUbYUkT1PuG5P",
  "key30": "5pdMkAkP8UD4UZPvftj9pS1E6iw1hrUnhtXydGgeSHbsidK6bUjKMZiiYJ9Nm2k24KwFqFAJaahk7DPxc9kWZrsX",
  "key31": "4pTejZAucjuyF7wgpkYbFmva7JAqECu67purRTYgbcrVcMjHSAZWgJGYvNeKck5pqqFJi8reYBL32sUbkJ4Tc6XA",
  "key32": "x2m2b9kuQnvWtLq6FWooaUmemhspuYFs4JB1JFfdJ6KYdWYBSMfvrTQALQuBa1G8t3PG9dsqhDHBThFFvN3sUT6",
  "key33": "3HbqiNwMxi3cDMdJWnLrmC2aksWsWzWUDuJDixMyRBXzfK8m1T4PudgucQ54CJNfRSkBqsNb85LWtaU3b7nNtkmz",
  "key34": "4kqJMLAYrXBukYA447Jnuat8xbkkdgSY4biFkULGfWsuhvTdBhsqms4oiSRxydJViMVJP5wYhjSjVBRHVohLZ3aa",
  "key35": "5MLiZQ35Crb4zNY9sHsJxTPY2RM1U6r6A34hhwiYxoKuiT319WPc5N4kZCC2o6KsmzDR6ncQxgrmt9CiK9W26kXh",
  "key36": "4XCvbf2JaD4FVPX9sRerNDLzyxZyQQsrsrow7ziCBHxubaJT7jvj2jWnqJQUgAvS97TbHr5233zCJb6TDpBCSBEp",
  "key37": "4CJ4jRZYdWR6qKNbJfmYxp4TSznfQ7PQyZhMtwsCM5Hp9LLfHnwEoRxVnDBGMSCjv2zsfFZMpGvugiHcH3GKNocp"
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
