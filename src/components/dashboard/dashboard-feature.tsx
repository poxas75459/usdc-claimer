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
    "2CLWUbnFcqSH68VciqAbJAg2kHBtbSwRj686pXjUkNMcmAVofG4R7yZqYA4EKNqSYhQe14gisgJd9k6DJiUYkVar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AJDf8qMzLymB9roZh1DLYCRrJUgm6BZomnmP6iqjnzmxS1jDdWCgNmBmmT9Dqw6ByhuXU8uBdrzazwCFWtCPweu",
  "key1": "5kZCN3LTGN1wR29VQeVbfefFMzoeyajR9SWbuZfosgBqWZjneDpovHuHoQzLaPMn9seZsvbbYiv9tqZfrHfak6k2",
  "key2": "219NWGw2esLY1HPHyygUbZR3eJvXnJPCGu8yWu5tXAwiHXKWREkdvTq3hePSTDqkNe5T8HRMKMbBXRfPDzxHyncw",
  "key3": "2cjMofFvVdShfY5zhXBw9dpnevAe4w9Eg5NsFX3J3cy9JniMjjZVXPpy3f6VzSJd67SBnDta9Tx6zjHEYHXbHgsU",
  "key4": "d7bBgxnobUsjpaMuF8wLYwrNfjujde1JXpiFyxyWLqquFzuLvB4JcCD57qfzqA1jocfaG9xDTt6Rk8S8c2vuSzG",
  "key5": "2ubTLcNKJWTWxcmez8FY3fCFZoBJuSEkWX8r12cq6Cearst2XWqUMta6qZpoJ83ngQwwV66Lv3asoyfRKz6AcmTk",
  "key6": "2a98NxAJUnXN1SUiYuLdd9ANU1hBUWLBjwboH23Jr8UF7cc94JwoEBs5aQrd1r27ujB1FapMw7GHRiqHSRBDpKvu",
  "key7": "UhETLJjFfbkYi8ManoSakPUp8QW6VvHyP4BS5FRncmhFtpFX8Hds6k6aYkfMnRBvohHv19dUL6GEFqWb5a4UrfG",
  "key8": "5H13tvCUodpsEvWyEYanf3cvHRjs1biamQdLvy997i7RiGvFwV5JiY6MjtjWeA3tgg9rFw3MuAtzVi3JG9vaAjvK",
  "key9": "3DPzToD2Y7jsTnXsMDU7XE9vQ129aJuCP5jEyRLjnL4S36hHsBrmoRN36wTTQyveHw8Zg9dmKwXtPdtRpuTKCZvC",
  "key10": "29ej1h6WSPQ8atzmRaaSfz6jkR5cXWifhWLt9u56X8nbQxyQ8LK2qLprL5kaYzz2b9WeZD2H6KawRwUaGHKWUuoF",
  "key11": "5tjgypocVSmRboaUTbMvQi866vBXU9Zhez3HEvaB9wL9kzxSRtnNfpTWN3RRrDqxaohZo3jp9xEyQvKDUohF2xM1",
  "key12": "24evDbewdsLjRgai3nRNUCjyzdD1iVsKjSTZFasz3FN2Y6EN7bq6htA7ez1C7bDDrRvGDKzGAS66oF4PFJ8jivqY",
  "key13": "4m8USgqpmHMwxf18GsAsKkfoZuQQBYH3a2PHC6pBHF5Fyzr38NGaurh2gLNV21aiHHypaBCZrg6MxXNTAfEhhPcN",
  "key14": "56dcFJxTfbhz7r5frvkiJAZ2Wsgr2eTZyfXgs2gkVvNobJWHnjeHTAJopr6gtW5khy93vAER39pLhYYZhhWnuU6a",
  "key15": "26Sn3N3t3Zyo8ibQKUVXwL1z2eKPb4vR7cTVgTsS5LqC5y81DcfwqVn75P1omtAYAzfFqhErYphCXp6zBXuL5dtC",
  "key16": "4w5sr7URTwm6XEZNAKfiyGn8aMC4jhhJgmJtECsFSAfKc5nRLjBJb8HN1FCfaZq9L3eqtG3RRd5eCXMgggwzyfu3",
  "key17": "czsBmNHz8fEc84dcPLKRexevAj3svBoBBYZgLvdy7b4Tmy9tcfG1EPp7RuZE8SVSnHoQFwxmXeTFNcJDnsi3Vm5",
  "key18": "5TpqjFod2QPewspUN6tjwbF2eoSULt6bi5EkaxTR5g8EUvXVNRX2uVZbW67DDGht9i9gZn3392xMSwXMNWV89czu",
  "key19": "a362wec8BA68JgMrqfQ9HzBkUMwk3yE1tdNYrKtX6VjHmJQgjFazoePFodpM5UoMga5cArXP2uD5ZCaF8Ktbc1Z",
  "key20": "3vbB8pfuiKzYxszQh2MbQ5iYukYKY4GthrpEYnBhh1NdBUZVYzJgYHn9Ne4Ftbb97M1VBf3pt8ftrw6qmeXPCiak",
  "key21": "2mDP2CFNavDrEgyFtivvT8gVALgtrZdeQ3FgT8DQCTpWtcGwc5Vfegp7VyukuYxdP3pT8RPtxwRDZxDAdsq6XwBe",
  "key22": "3f1LuiGhpeqcoEAc3r1aLUZwPjDGhXxyrY9U9eHvERQrPuB2kj8FtAkFfHeK3XPK786ysamW8ibmEyW56KQfHhJ9",
  "key23": "5Jf7cV1VvxbFZvQyMDGWQ7myaZHCECdwsZ52jH7AA3xcs8j93T1ZgR367JXxRJh5ASj1ua2LKzPEDFp6ba33GPjW",
  "key24": "4Ly62EJ91GmrUoN2jzNvgw4zpJiVhGGKou6b1LZhavBneAGWUT8zBuK2NTzzKgYnYZqcfp1AzMTgVkVni3BZhZEi",
  "key25": "2F7TtWcGoFkHhA6U97ZJNtwU9U2W77FFJC72oCf7vKv8ggAeVX2MGjt4VjvuFkBQRfXGFp6dz5txdttsstSdd9rj",
  "key26": "39633oCFEUsY8Bp5275nGwQPQeMKjSzfZUhNmKJ8uQNnaob5uoBnHQuynr9jpDS88KqaCnSfr5tpDoMSgbg17iod",
  "key27": "498cnxnouNNpEvAmQy5VhAHkXvkYdm9wckTZUijm8MWeWNv3C8uWXDmrsRrhM784Fn7Tu6rb7mebmjiFZq1SgVTw"
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
