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
    "5VnZrN5hFzPwTBvbtR6TwDwBzVUq6VDg28rofMTWWK4ZDrmjFzeB3oNjpQYks1MRLMP3WioSg5PY2mfSkmicg4FR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PnRw4DmuZBphEtrJ8TmY5xYNTCPZX64UwH88j7Ya85B769pYecDPPeFJmisHXaQnt7S2H23Kx1NwbfhMUhq9Udg",
  "key1": "5dqcfTYCPDm8fCFGzvxdJt13uMpjNDym3eJffyxS8wFttH658V7NeTsN3shsfZUNxzb2oUsVvAXP6w5adqr8952y",
  "key2": "2jKYjto2XsYkMYZ7JHMnU7wBkVZeGL9QEMZZa7DSEfcB38gbGkZCmmGfANBRJLB3Tpq4hXfB2QPhaNwLEUenRdUE",
  "key3": "4SVmQycQA4yF5bPQYAPmuAGJsM54SpGae9WCrmckx6bQ3qd7h5vZKhQuE3ugkNzVDW1PpzfynK3nLyvrRo4qJsPs",
  "key4": "5cX83U4Q7Cbm9xwUCun64AsXxPcfyRV8zKvgRv7yGoMZeRF2nTkurmCfSS1LwgQxuH6EsYasP91diQ9jJEyvAcVk",
  "key5": "zJABD1MmaswgYgCot7vMxvGpo4b5ovbZHDqh8oi16TKt1CSJSh3Qxfk61SRfUKnR7Z9sH7XbNz5LjFAebtvDL2c",
  "key6": "4Z9j3kfcsQtgwcupMN1QmWM4hhnU4mgNRu1MFTCLKi8TF6WPpAxAv4EgDD6CgnkkVM3UqbLEmqPzfrEJ2FykWQr",
  "key7": "3zfCiLwKdKwT9N5xhZfmD73Mxe9Q4hczhT4bYFPCwLFK3jhmnGcynKq2rHbE9ZYAqH6993wYVLh5PYc1Lqkxng5C",
  "key8": "58i7kRaWkGVBybSS9XxEoJ5g1wzJYV8jDvAFAEDyScUG5qUTvRU3HgoB9mrGWpe9wuy65jPpBPj8sReQSHYSR6st",
  "key9": "3EPaFKHofUkPt7f7Nx5p1xgP1KGndtWxCQfZXTZq5j3ZKYdcF5WBo75d7Hp5LbK9ejBBBS3yLb6jruT8u5qrmpue",
  "key10": "5ZDV9XuFP6d3agCrBu6VCsHQAJrYw2uNK7RoKzA73wfKiNfZ5R5YF1Gr82vp5CMxdMVhvAe9ehLChKbBtEoihgRf",
  "key11": "XwtsKJKT1sozorfRN3S4CzBfg9BmiiCwT6APuSRRB13P13ZYudu9icBtiQYnjNqiSK6DXoyxXB2GXywLmqDT8hZ",
  "key12": "5p2L1N5QZ4oAho2r4xGcn493pqFmYhouKE2sxwVS9S2beF7WPYBeR2Ye7QZFFiQsWun2E4qMSYjoRNHc7Ahri5aZ",
  "key13": "3zwctHYAgGGb8mJigK5zbDhfF9mE7TqEPBSXSdzXwWxXvdj8xgPWm5iCKdXyjgkdmUjmKnzo7Em2cyf3T26YbwRc",
  "key14": "uwYA66qbS4dxrtPPG2eRNDiP4HsWPHMh4X5tuPZbq9KnxZ5puqDNTffu3wBk1Z7rjuxrRGTVc1waP1EtxervK6U",
  "key15": "5rNCQPuHkznmvU4hx9TArKw6ux5FPMxf91BhPUhuVzW93wTyYnWeMe3ARFeBpdoT5PQWtNGJjU3JWBpgTo39hzr6",
  "key16": "4optBFdR1ZPrQGhdZ4DVz4VZZSnVwuffJk4euPc2UyTEPnRRD3YxLBDYfcmo9XyaVua5LqkRsmwcGe8hcQwT8B5C",
  "key17": "2ZCY5EUg4mxLhMWGKWeaMYEmy42YFJCtuzBGDoWPbaY1CYKHauEem4Z1xbZpZXZm5tcaARStxppYGEiUCwUpxgdJ",
  "key18": "5MNWrYwkkvWF4iNKxmoaa16Eb5z7brE8gVENsbeTwNXzA8mvkCXF4YSYpMJ1AgozeBB7knA8bZkCi9ijEtoEzFfW",
  "key19": "5oiBH16pAAYtJjus3XX51hZSSpQUobQGcNpLTujCH8daHaYFEvk8iQPk4W6Em4e3RErMiHLkiJNpSm39eVmGY1GE",
  "key20": "4bR9bB2YSUUXUN5RWeBck4mFSsY6J4JyRyp9c2pjiMLkci7iDfVqNPfdDkEXqua2zz9YE7K8F1XLfi4353We6EGK",
  "key21": "26Xseci2MUzoQPp3s1VCyGqPbQCgqenRnyceh3MamUf1a1Jk7tW8ySHHSs4LwS3U1ZTcro45EQ8YoXmsyuLSZ71L",
  "key22": "5AaHfLr7RjrJ8FUcaLn6szSNBTNCdUstGjgyiLaRHge781UAJ77dZRZAxLQYfb48iWfSGBaFeTfM7xDoZzEEcBB9",
  "key23": "3tJfCLRF8mJjTWyjeuRiMQJT6kMEy3DxKmiLpyRoHMxk9mGCBQ6QC7rC7qpLC9bFCwxWwkWouG7k1nsqqhfi6ZSH",
  "key24": "33xpBG5g3PxowsSMBJgXikQeUdo4xunreYcX5UM9d9ATKHGe5ZAnZqEtAQT1jxYqLPqeqoW2WVwwPjL4o2m4zcmU",
  "key25": "2mFa8ZcrGc8ydNzUsbwoWWw16aSEMF4A4WYFoPJWkZHBUdjq2pfMKB1htXVU5XLyP119VZyP6cqprLcXzc2fQboT",
  "key26": "266jQxToyH3qQ82iCEGJnjr9WgGgfP2Sowd3MzbZxqozU39ydo55MGiJuVB6w28tTHTFSf7MWf97KkY5KXMxzaYW",
  "key27": "5m6qabPsViqzggYYrbgwSeMjXTBxRM8FBFb1rtbrhjUSjzPhCiRYcnru7rPzo6rXRCbCm66sZpm2UqtYK7YDbGs5",
  "key28": "3vxDfQi8oL7Aaqn6e5SHxsUV3UC28aGNQcbhqbCeGBv7MjXPB3R8q4qowRWw2LvNYGu9htxvahWH1NK9ArRSB2NA",
  "key29": "5aSAaAZXKSWS4cEmKgJVJqTz5vVNBsgkfkXQWrarujDHDASKGESkyiyBuHHisFfxL99M5PSbLqZNBq6f2hexBVxz"
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
