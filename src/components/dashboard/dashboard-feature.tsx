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
    "5qEThPW1TaVg6B5BvcbWMCRnZXW4n5qx976ERQjr9yCh9Z7GnKtnTeBNUm1AoQ6LcK2UCnNJxc6Ao9PRmCWxUwK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48eXz7CgYrvypNB8pxGwWuzuYNhhHG9rWcjFat7QX3FxQ8LzBNgy6XsqPFFH65pkvW1qBcFUgwggZ4CTzP9JKRZC",
  "key1": "HLDVokEpf3DHJaqYJ5FLgHw3HjpeZFdmDVqmASrvygHSzfWh9G1TrAR36DGUzqfshjrgj2CCAb8Qgdt4ptx17RU",
  "key2": "5HC4MwSKi7gVNcXrhdFMV2an9dHpn7UHBupbpsyLY5hoPtsrAqVXS9H24xHrFEnuAvuqJRCQzmF87XMgixJAqnXo",
  "key3": "4URdcRXa8CunH1bRSnDTFLXKcHei3QANNhfvguaLBQ1Jpryz3E7984MqvHV2k2FT5LSkLcPyeSU4jkoR3Z7SPZX4",
  "key4": "48mK1LeFfdD7swH6L62KHnP5ANkcLZ6wxCtHNukQr6gwPddqQyb68YrUenqvLYSwVJhoZ31fME5D3HonAEM2fySa",
  "key5": "5GieLL41m7ZewxTZxArQNtD8ADkv6QYrPsyUe6SDpVcvtKkkwAsV7oEXr4dkB4HX6VQmLxkDPR77u2oNdDneALuh",
  "key6": "3KqGniujPvoYaKKJQZjVi4NsCwFa1zLTokiR7SNodBxTJPFxntdew5GU1ypcpAPtNoWRWmU1wob738K7EJsuQVJj",
  "key7": "4sqR4VjeFdG9nDZNdhTd9nwrVrASb6NwAxCjfNWxh2HxLQKjMkJqRSyjJgDNwYDoJ62F7EzinN26uuQbQKtVujGi",
  "key8": "2y2j4PAfBszQd2MhVGQyTSd94fmuuMrNUKpABY4zqi6Gtdw7x94YdujJxboKCsofhmxyQjzw5xaE367Mt3q2F4vr",
  "key9": "4zEFH6SXFwwETtbfWpT4VgjQQ7cjHGGU762frjE7UFziwZ9S7sdgYGn5SzcAFqE6MeEkDmavgsesZwrCHBTb8zCS",
  "key10": "DAFuBSDQDgVc8CMxEKkNmksKvsXJ2bxc6ZN1f486SgURvFgtbYJp3EiZsSr7RMW3rUQE7nUdPYxmVZaCFmaYRFu",
  "key11": "234UHyax7KoA5AwfLeymcLfNpd2XPECqNG1KkPR2zFZqt8PE7uAyGsQExJsZbPQ1tU1uCsSfboJmyn6yj7VM9Ry9",
  "key12": "jJGijkXyn1C2oGYr9sndBcvzze71bGS6odggBCY4Yn38wwsBrc7rEXgDDwA2CCYN1cpBwvTXAEarYnqUuQ6e3RZ",
  "key13": "3SmjX1Q24TNUJVM9pNRtypCT9SER9FzpjB8Du5YjoJPp3nuMzxMvk91M2mU3T28N7vEfrmTS1H3DGsCstH3Prk9c",
  "key14": "2uLDB3imqNybyt2UG8HUZH4Zb6CkYw8ciM7ovsck4P4xXy6dD4fofGcXTLv5CBpCJNjeQXodS5fn2W3UFg5k3n9o",
  "key15": "3cuhuuP8VYvBjGnPLvcKKWeJaSjrZobSzufG7eMDyK3nt4dtxuzgnk5J4v26seJAd5aKddREETLHb6NWCt1uKVmj",
  "key16": "4vN4XQ6xgpgAqGh6xWJWmjLZj4uLKhQGUttwKMrdcgGaErziPCiXbQwd4c61XNLvyoc1gqA9T6UR12m3KRHE9WpQ",
  "key17": "4kXaR8QA1mrLZJpUQ1ybWuaoGJgpar6JJwFuS6tUNUUdum5pUKrD2skywSYgp5UWS4n4oznfmt4NFmC4s71MTt4J",
  "key18": "2nexSmgw3Kxtj2Din7aZSC9RWocfGn32V2ECw6hRa5L9UpgTsayB14UzQQszEESqViHDWFo8BFkWhg16PHv8xH5N",
  "key19": "3piFzKUAy1RN7nUz8gAm8pEdAkCz8We27Z6orhyiVq67kNcy4WZUvYm1idWdZmBBog7kyn7CLnR5H3GJvqAF7J1w",
  "key20": "4S8iGTb6zWJAtfTDyXJF2tPkBGYu6Mg4FYYr4mAL4UNw9rGxNBFMrCG8wpdz6qPcYM8PaH9EYVAhZkSmUuoNY1Wu",
  "key21": "X8Z93tUTAeHTCvxL8dui6TVUWQLTLhFMaV5r6KKnrnFMuH7Yf791nmqXREMx5HQEbfWY2WYL5nuh9jfgvsJrZo9",
  "key22": "3zjBCiYRMo53cStZZchhiSAdm4PzgZK8FXMpcZLrfCBFEqCe5wVzrri1WqbW5PC85JAz1eKNmMa7MBJhSSD78F7U",
  "key23": "5TDpY3vwrRwaDvbL9oMHPv643rVWiKqB83Z87Py3g9oyqoc4bdRAWXH6cagwrhWMWbVj7idDCGwMsuZf6zfpcigD",
  "key24": "66XUBBymyxTbTLBjn7QNtUJDgRtpiVenGuTSjh8nxNAq2SsoUnqHAUiaeCyUkvAaNYwzYaJGwrkPzYz8WiPcvNiM",
  "key25": "3soihw6tXKyjzFPsdtTyKDgaXAr6W2nJ517MgcA3wyPixLdFkBbVG557iWbnanc8GYgyHS1VUKfs3D37Jr6vYeUL"
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
