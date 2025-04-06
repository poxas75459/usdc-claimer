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
    "63Nn9mEs7n3UZ6DchLiXLPFRQueJZSp46a1cBUgUqRf6FBKKAYJf7msapM3W9qm8c4xH7sSJwTLAMmXM2Thfs7kM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nc21mKEPitergjaHDisu6yiPU32eJpkmwwzuC7YBrkq6ENX3EzF7ZJVDZrUADVPihE7YhNM5HSbkPAZh5g4vnWi",
  "key1": "3SVqLCFqzV9Q6xcr23tMCFTt5yonEXiNzRHBWysQ7988CVLsfmbp7hBSKdNYgY4Si4ke5sdLTZTDpD2snwiYjMi4",
  "key2": "57Kw5mASKX89jaWw1uNgwBxrk5pAwzyCgqain4JPpGg1YuLi3ZBU1GSvheqeoEoABcaENQskjHUcD7Yi4XGN7fLe",
  "key3": "5CRkqzN17XAeAJcwqC2eYCKkTaYrtCRHfCzCu6EM28Xzyp2rQF54uAUnf5D9fHMxU5zjCUns7gDPfWpaPXK3HPtp",
  "key4": "4wFEF486mM4NWAcfG2kgmwkEo9x1qFK3rkWjB7cs5qzX6hBz5G7EF48FjR5H8G6K5fF2Bxj2rSMu18FfeemPdyom",
  "key5": "gxLMdQdz7JEQN9sU9g4FngDQ8mLxFcR9RCnPYFHY9WCdW4nGY89WCVCP33cWasx4pDo23HWrwihFAS7y1pRBkZr",
  "key6": "5HrzAkbdzkgU84733mUyU6cmmgkYcSw8veKW8tHzGT3igcHf3uLqhF5TtsKvAz9YKCZVZvhbVC3txb4T4Sg1YE5y",
  "key7": "21Ah4P2tWXQQ4yUE3viaEm74EA5yuqtf9ptuwRf5f2uEz7yo1LkwrpoPj7Xd5Dzv4rtu4oThrVakqdVT27bves7N",
  "key8": "3pWuwCfepNrJTsw1Z5mM892vt1KL6DxrvGeU9csAEMr9tjGy7v7syYtW6no8pQFM2T7UUxVU11yEvaM7eZyHpRfM",
  "key9": "2PNcFoPoGHbtEXuAHgHcPyWbXMN7arrT1y94CQZ2MPBJ77Jip9Pbc86CJjEatQUNAXinui43XzzzARgBL7KPmDwn",
  "key10": "uPKhXwcuEfiTZ6vDyDdFZqRX2QfNhQCSn4YaqNvSu5JYMF2rpP9GsLGxKcsAcYH2ygJfuJYZ3q8jmfrPCpw91Ck",
  "key11": "361MuBtkkqVNszHLL58Zpt12wJCAnWJ77GQiuKyoC5HDJH37kcnx5JVt4M2PWHxKmPP5DTMYvztPmuWwpZZSkV4q",
  "key12": "4tpv9vXccM9AUiSGFdHVCNpXjzSqu96ponpb2ZY1tpNTc9TuwTQye6os5XS4PJtntnY7TqugRZ5fxoc6rUEziCzn",
  "key13": "4L9vtYJDxEjqQaJ8szDYS4uVzCTDN3qY4w6kGAy7JeNBqsFw2pGTYyM9VvUop8JSm3dGj22j6yt1866NgaBTrau3",
  "key14": "31DCRbFbp2otd6fLh3mrTfTaRLaHA6do3zdQPEtM2hQcBfwU71kQJRMDC9MufMnHZnimQfd8SrFvPouiwPXrA3th",
  "key15": "5iLPUEM72c1GFzFnpwqu2p84APf8jvkhEWKQRqs8dnTxZwpaRFn61WHvSuD1KAck2SQQjsmwonAitPXz44TMXPgY",
  "key16": "3ozuBpqWB8yqCZmJmPGExyQisPVjFV7Zm3D2thiBDvg5983Ssmb4B5JxSfPC3DYdVqKpuvFdrdxBNqoJz9uHM1Ds",
  "key17": "2sDKQ2cR4gt1qTpWjFDWshF6sqfHt6FMJLXcKbeZgKQh3ihoyRCpHfRAJWEJxw57CkPAGEzLL1Ds7FE6sb3rPoem",
  "key18": "32MuSvNFPjHzxLsew4afqdEiiZ5pTnGpgkGryoSCHgUKqLybw4x6ZbFPy7JqZA1m4hYwfbp8En6nxtixUep1QNcP",
  "key19": "5stUieRa4byQMNq9XB54jhQvmTBnFNx9uGaNwSpK3Wrr4jXrJ7QhmV8od8QLuUAxmmFkyhfSHMFZbKtR7ECjT2cx",
  "key20": "3ZR3AoEMVKK9D2gRn6Gdta91RV41ZhbkHTvtBdr1MbDLtENYMR6MVkSPXnawrDPg1XmpJo7QkLUvft3wcA2upkTZ",
  "key21": "45TfqzruK5A1CGYdi2cVUgqyzezK1N9VYvdLdiKpuXC2Z4AE1SHPmAR3nrJULc1D33z4xdeH7yne2ayw4a8hydmA",
  "key22": "3KswprzZ2k7tr9sfwQX9bA7Zuvk9sMUgpRJyMoWXAVStwkubN4fHQ43a6dGG3nciPRkgMfQPKw5kQa8Um9UAHd38",
  "key23": "4ky39zGS46t9ZAnp93qGa4FX34TFRTAoXrZs593BRwXgjV11d7sggo6rXJn932kv8XotY5vwu5ypozSmsKMtNKCb",
  "key24": "3o4xjKkVi8Fib9jrFa5PBKnGd1R4oFEJRfeNfFwutP5ed4n894oeVJcwkAwkPEJmchCn9BPAvgWH9iPxvYMAZT1j",
  "key25": "oktKMdRWBQyT76ZzrGjjDB7fHQEK6z8DTcBJk7ByV24VG7QUkd7jUvgoFYornbcwLDQeDu7bENqAfgvPdqZm5PX",
  "key26": "3dTHcEXZkgnMADLTgnKy3vxkojY7emgiouc4Ljt4q3bK5BcYDbc2eDaSQnKjhNoQ7Yq3Q8HTwFbtcrcKpgC6b5zd",
  "key27": "4nXoicZXRQ9k9b7agbHR2MChKZoiut7sEnyaGtgfPdwSbWiXpAkGGMuEoSVHzEK77scJrhWwcEV8nMXjbL3aGKvp",
  "key28": "ts7KAPfLGhNASeQLseT3cvCfjTDrhwPTswpjkaez8Mqx6k4XhDowf9gMR1fPXxBKrJMLhw6B3G71q9LHQUGcAqh",
  "key29": "3XWceAwVDnWK6ZDVfrTQgwEyo9QSpSH1TtVL6iVCpHuPy7PqMugvk6g3XC6aLV3W89HxgFTz1yX6LHkAEbuDmgUT",
  "key30": "A5sABgRJoPtWvPQAbkUTa29C2kiQY9EECLyDWR8vH9LrkuTJ2Ny6X57RHWLXER41PEiBUgWDHZLhccDhFXNk3Qy",
  "key31": "4HUR1pEfR5zitvAhWp6Laf6vMXtJvvHZGeYAiXupaeprwLuJHP4hxuM88UKTa74wNcYWvUzZgEvK8tdd1Uq4dAZK",
  "key32": "4H7bmqX5io1Yk84veLqMVzVcxC5ra4LcrEdzddBS3TnK2MEEcktcEqNwMuKgS7TtwQ3ovWhMkLorbJUfCLAzKMzF"
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
