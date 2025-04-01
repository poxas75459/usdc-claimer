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
    "3aq5Fa82LT3sqaqAqgMKN7AmcPuuRzSeVycQPaPG6deazRYm4UQWZrXgHwb7EzXUYe2hz7wgGYCiCfDfSsYwmZLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fc3o78iKtphjFJh7v5xaUbEXWhU6hU7HNAKv3oTkVQQ5aczn9QYADe2tKniLKxqyxVKszeFGCgptmtJvxVUStVy",
  "key1": "4HRi4Jq3vKVYE2nKmDc57e8woGdZSScyJCwJxBLtZHhmN8W96cV1whFysha4B7bWbChUjtQTpWhrT3fKsmBqvf44",
  "key2": "uwNfguUh4mzHUs2MZn4opB6MPz7Gmh8Q81AvdZxgq2sLo33fNQ3sFpGKbPtjkGxWq54T5dRwQbyHTs3CmUnNX7h",
  "key3": "reuggMtUrMv2Fy1TaeR3urRvHbHUn2qunUiYE7yqHLvneXzHqjN6nNvw349HhEg8rrMybC2exA9ye58SSqKfUTo",
  "key4": "2tkzxXxRUiFV6TL666UsfHU61HjYbnsTav5Zbsx3i5AcB9LzJepDGmkiEGubqVyibbvnT9pC7jKKMVfV3H1Yxu7p",
  "key5": "5Jwen5Fr9f319XZfm5MxagrhfZCLVcyHU58ZFWRT4sJDjfApLJ7ezoX3AYf1dRoSfM7YhJKPbetxmcBaVMzu4xxY",
  "key6": "CbveXJkTZm8FsZ7WBSfbrAk8SSbTYBiv9AP8zSsnHf2jrKZaernokTdamuEwHy9g35wqSgY67rdEpFbVYpkN9ig",
  "key7": "443LRsLrz1edpgQM3QWBNR54XZKAEQEUMsurAjzdNbKxMSgwekerczrrpGKC2WW3nk1w2kZTctrdgCYFApFHK5Ts",
  "key8": "CfQGit6grKxprXAQrHX84xnHohjU7zGojvmzvJucx8hbomWXanhh5edjE5zCkhKyo9kw3vrVHxzJAgSBmZ6ywp5",
  "key9": "3zDPKxewxYSghAx6FrTTpguU1vHXZoTBw4JghXMpk1qEiePF9LwgEETBRv1i6ke4u2ndR6wCiyaeUwMcQXGsoSBA",
  "key10": "F6ixMyV3Fg2hfrLibSt6fzsijp81MeAzTn7jJa2i2WriwRrnc2S77NQMRzrG4XKxdb7W4fMx76wzLutkbTbPXsC",
  "key11": "3q9r1md3NfDS87kUQGeRRpmq9JGqYuAvK2awtUYD3PzVqzvW2Q2ZT1rBLAZbdQAWWTTaPd67fMyfQtbL3hPxkFLU",
  "key12": "4iXqzNxvuWciAumHHSbouocpnxRiVtRtuPUK9SkachU7xKe5NyhCj2Wwi9LhxLM7FbWH89go1ovpwmeie3jcmzz4",
  "key13": "57HUKDAGtuMExJasHReTyS1SwU7WnQXBqv8DHYPuTz6UYwNjNjEEkQXi2M9zrnWpadeB75PnEv87FCYU6nFjAjSo",
  "key14": "n9UE3imkdjkap7JzxihckgRyZsMU384UjjzWMLpf8wCRxRr81jPAzNBwNdj7sfFMXwNhcTBaabezKGNzuepwLMe",
  "key15": "WitLTwQzASfzjWU5GVubbzbR2qdNgfJvHQSJco8facbbR3jw9pyDhDoatb8opxGUPVH3MjtxTEve9h5SY8XXHW7",
  "key16": "3NsUdnpbhKAR1np6vrgP2KHDkPP5VfMP7tN5YH9gDMuqjK8aXyFYLawrxW77vBkwRpP77oMA3sJ62qYJq2pGiJqA",
  "key17": "5af5xU3EPTYrGvx8Z58Aw6fNN283XAhqpm1gToKqKAfbXuhs93Y9v5im4yzrdGvxVg9yNkZ5UVMhdPRtCqXWfek7",
  "key18": "4Ppx7H7QtifSw1FtTKVo2gPDm8xTYY5NzTFuZh9KgU83AcvtVaF4SP2kV64MSewyiQt6ofGmshPwgWM9uVwLBh5A",
  "key19": "2o8xBe2m5WNt9BskSV1FsBJsiYcQDj3SCPT2WyTVaSxrx2zULZnGAKpzsC72UTQUtMZHpUgzPs5iKrPhYKinbeZf",
  "key20": "3hHNSyiMbmTkmfXn65e8dEbfFQ7HDwgCBjDSDr2ua3iXpbr27avsPddEejJFB6vUZh1EWzypzUqivPBKjk2bw3M4",
  "key21": "2otrBLZutdeiiTenVZ8DLMyHbk4hYQr4GVC8ooETZYJZCqwEjgndHJJPSMgAeRfBLV5gWbqPCdp9eN9H2ZfWrf2J",
  "key22": "5Hw3WXAYg56kRHnEdctxXUhJ8ZpUipQVXTwr76xBqY7qNTb3DBnus89FiyAH1PP1LULcBWaTmGRKeED7geNvWSnX",
  "key23": "4U7Zf5eXemkpdptHMDufBWLijt1umoMsARwEiWv7L1SCrxa9cmoL1i7zdTkFVk9dJcRWA1vHh45UwHa8YUn6EFbg",
  "key24": "aTWjw4dMDqaSvTkRW5wfzE3ZvG6sPVwCok1mcetYcsTXwdWNJgCPq4iH8EZF28gdJKNQtFc4mobNhvMJRqpo9SV",
  "key25": "4SbwjEZyeh8GjFid1aPHm7caZwKyz44oNL7Be8pFxrDz9CqYZHkrvBwUnqifhZeqmzh6sGURaU6uHQNb7JWjP2TU",
  "key26": "52W3tCbPRnzQs1qvgzTPN5zFtvrYUqidD93RZVSWKdwaAx6EKDg9PkGswp9EFDQs9SztdgCfxSMwpfGj9GYsG7zo",
  "key27": "uofwC659TsFib6w9xtcHEz6eWjUdpixkkvbiRc2HJpsANuNr1J4ykM3g5CJGbMxyMxtZbfrPBKCTNYKeNcF2VJX",
  "key28": "3vFtJRV5y9zeSxdPxY6VUWTboduDUkNq2QdnyJdv4rcEvNSGHjXuK5jp8cLWTwm2338XHyVtgj8AkfNGFQi2VhyT",
  "key29": "3YRGDKsc3F6ojxWo8cu3XMFxNTsdEDd9NeqfsUzPDtMJdSWSwc6GZEPbPLHzGi8JNjG1V6vqSysgUjb6xm4h9De4",
  "key30": "4CmeqKQmPHC8KxnvtePW9nymNWeyUXKFqaPbkoshDbRdVWQWNW4qNVzny16WHUUqCoR7T1LVCEwo7uR1dntHfSwJ",
  "key31": "5Ziezj5qsUTRAaTYWBePq9cS2nQufCc5Rwtdk98zZ8X2Fdnst7sWqfGV8uqL5atDkqPqeMV82NkKG6iiRiGWeWdz"
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
