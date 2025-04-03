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
    "43PJdRvyTjs7kZZXdHBpirKjYsuxamkyb6wwjmMJ8kB5jZ2TXGJAcnCQNJPLgw21PKabv7tDxjHxj83vikBGEdLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Px1vBsEbEtjBc3k913oeq2wLcrjYpTkpAWnVNSv8YsEFrpxvDXt8rp8JiRMseAgGcxS4qBLvKLrp3oCzD2LPs2",
  "key1": "tgVoKPuXzawrMVxzA7fQJQAvCjADXPW7ANYNhVVAAbKvJajUBAa1wyYeSkvuQ8ygKeCvA5qFougce2MC3FcQUja",
  "key2": "2sv2fGX3TxnoS28eGhrKKSm3ZZ4ssNL8tafUX8gHgdwcxM7AjjapxZ8bo73XxTGFjMvyegSshu51brisbAPs4RhJ",
  "key3": "6HNtSSPZqvqftkBwLbeHfCqf3GXqWwZSDNqJKi3t6zfuUapYuLAtTnSEs1TVvC7HpobZNj4fFaAkXVKQhSxXdVw",
  "key4": "4DTezWcixX6dAPFqwUxDTibHVyypnEBpYMHXTkuB1yeVh6KgBs21DEoQiEvNcwK6ALGKNhwX7TUYWuzU774XYEeL",
  "key5": "4MMvx25juRySHthSqrxxioEPQEYWThijHtefnp4TttvMBa1KwFZA2gQyQ5BWjrvEMdBiKEp52vWfdPY54e6M7xqC",
  "key6": "5uAq6hUD7fReK6AXFPfD7vND2TTEcKp3xGD8JWVkNoNfVfvaiFG8CfeddzDht3QJkqurux8oXCQyhEpbYbkrcd1h",
  "key7": "2u1BQnsHYaa8smutaFyifSyxh3ZDku5o6cHaZ1mF5Jz5ADBK7yNwQJSDSssFzdVwpwdhADAhtUr2AQ5qLWYzitEH",
  "key8": "JZ3e7Esbc9o3QeE7oRg2sbJnQ6sG8ZFwtUpeu6dobuAZj1yKs95f4Zuk3aHpVBx4uKa3YQ3pmk5Td6L8Wiyqhfk",
  "key9": "517fmYjmMUvFUxwQH8ugHixeaovhe2GKXXY5JWyjZJmr8o9VVc4T62q6vNdoMJ93xdtjJRToKMm6sYjCf7BArDcn",
  "key10": "2Bk1cGziyPnwjyUr3MhdpmDSYPWNzK42yE9UpTUQZhUcnrzzDmbkAJY6Bgm1ftcUYxFmAFDqwnvZNqeyVTHCcrPA",
  "key11": "2XRx8QbgatH6t2amUmrcEqMD8tywJeHHsi9GvrXMV1BPX1PVWc8t8bqBEG7ApwE8smTUofs3kRXGJKtK2giVCtMK",
  "key12": "3z5kgcFxVq1RE3kBAwwTYTZR5S5wMu5kraMe5GbQY1FgnUpk2WDA2SK9mVrV6kdyAXRA16hwzWBo434WEdgs1jGu",
  "key13": "hGR5Bah7ACMNqhDaAFkCax3qeeDXvUACv5TTgSREnrqBtphLwHqYSNtMkhque2LMKBKvm4r3nQV3aG7sXGytZod",
  "key14": "2j8c77UNYyhdGXGxx1PEEnFSR6sz24mEXDnbJAf9Rb8tgStbgL11vXu7qQyyULCqwdJ881Rt4GJ19cyJvDpErVqK",
  "key15": "4knGeBmiPHrUbaeWsfU7Ca9TsESb1LGffiq3SFuQqjNZmQc1ksMJanc6KneRx6SLc6VJUfrF1UWuKaTmdx9tmPoE",
  "key16": "pk1T7fBawP8asmoYagenzHpRJK5EedDKUnnD577JujdHeKvNc3uGhjrH4i8iQ3Fo9C9cByqQboR6gZkmeqwAt18",
  "key17": "2xAwHHefkjQ7Hed4oGBedTUvWeGJ7iu2HYE2GTvL8C67SU8rb46XMcZfjhbToZjjWUn2MiLPvqArJqNqimWZjC9y",
  "key18": "3oZf6dZsdY56MizEjCAU9FFpKBXAeiE4eMx1cTVJHbbCUwBQbXbgBdaHzcRkDb9trwV8XAP4R64f7Qfw2zG1G9M4",
  "key19": "3xCa8XNLZjHxWddB2CDNg2MFLJHcuoJeiQYsXoSS2fyLcJAjyrBambRASsfidZmKqFXHEC6gFo3iGSJ9osc9sC4i",
  "key20": "447Xwbrzw4LLwXce2GHoiaub829x65d7NkbjkN8cQ47xjGb1gkhuw8QU9hRxNvrs3Brj42KBLCBCmAcCx8exU4w",
  "key21": "2PmxvcdMKHLwuV61pVWg9KuXVmvyr1kG91HdrLDV8HYXycopNscbVYTsV3D2G4Va4iMkovUrJXEnd4CSsQL6yvWr",
  "key22": "48Bh34npuhN3yNKNQKoWpVx9BkSnyDwFiSPRuqbSvkNfguQPiC6876coSmsSdRfraR6irk5bbTkkpE31NpXnzZyH",
  "key23": "2BUwn1dhmeLnpEQdeCnHyoia4YKPikwKpA7bhUQ4kzk1NmVPVM4JXNCU4PcYwAiwp7vSGQXvymovcZjQS16yFkpQ",
  "key24": "5jqXz4upd3FmobYzP5hHbVQusCFEWmWRnzss4C7XJHfQsZMr1GzNpPKTYBVPokooqwdvFS8M7apKkWPSvoD3idZn",
  "key25": "3iwGcs9uk6UhRDjo1nTTdD9iKeKwWgAcMD6j2akJY6DyHBSZJicj4JU3H47C7hwzf7hhyfnpeiNTvYuXZZjQyVTE"
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
