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
    "4mdRodd4Q3QUFBGv6ipCmnicQL4UFszYjqaUjFzEBuo2wRRsf2tniSViMa3hbizQw7rJKMpewgmiVQCQpYtds9UY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t4GuWDFX56Z3FdQN9cvgVuNxV3RsetueUopWsuWvsup2H1y1gzTLNXEzdTpR7g3YDJWHt4JHjK7gXvbhoToUzrn",
  "key1": "499y53XNRxwYgn3eA34bbeb6yYEnZf7BTH8YeoYPpfRMLK8mVCYqvkHPg1SeZWJu6Vu5qLftXn1SrAEMz9ovRvvy",
  "key2": "4cFrkE12ttvUnJ2wvZ5Nv6ZwkHTZGgESPLF6aSzVwx45vt3EGQ65nGCmyLTrCtaDTdUtAwDRu34NcnEkK1ye4Z6p",
  "key3": "8QiRdFFm2NbjsfqcQWBo564pAZ5eBxg9tZhU5fVHau92unLd512JNcgWBpoMy2qVo8EzcA2F97xUjaVY62SmKet",
  "key4": "41uSE7oA6Npuvy2XCNREzwiMtQNgAAzqYtQUrKJnYbXFxFSbAwBi7rASyyggKizKYdQaPUEPVWEZzxkrK4syB2tB",
  "key5": "57tFAytnuZpQb9ie5ULeeqMJEWx7VUiRG4ByZMjonp69AhUmdnJhtup5MXe6dj5aFkb2XDz1pFj7QABu6bCpNvyg",
  "key6": "5LhpNJwmnGHg1GPsa1RFMRHH1ZAJ2pHNrBaQFzp3tv3MTXT6aMbDTDjGtgsxcr8LzJxZBJSeuxuyfnaiRjnLdeeN",
  "key7": "5yDsFuJnehVHmhSAGmHxDTLMiCeBvEYgrh3n6taB6zAcR95GEttKiSBHLNwCzDmEwo1YPB9gwLx9nDbZeNFMBURe",
  "key8": "4pW1jDErVoVzfCj6C3QRi38ZTjpUiKZjLwabkCWxHrvz9tS6YWVtqFP7jMDHbdLjq52VZX7YJ8whbLJagLZPfHNj",
  "key9": "YJKGSDh4Ys6TKYQ2QzNJStZNjyGdejahh94Pe1VGFz1UiNZU5kY1vrXgGcaiVjNRQpnhVtpouVTKnxcr6K5EnTm",
  "key10": "kBoidn9GzdxBsZtsExT2CVb9eqNyagKT9HuQVEjvTdqvR9JwFzmzuraKTtDWxRuKKY2KXd3QcATd1SWrwSuGDr2",
  "key11": "4C912U3TNHT8kwVLTZY6QixdBHoqoQY7tugtpCecDbcjvQBMngQ4h8HTuHGmEEUg1WTqdRt2cPLVQxZ32bnKBS1A",
  "key12": "oABksxBgNymqKfCJVb4HfPxp8Y7bksk2maD25HUeRrVUeDDEmwwmpcYhMqLkpByXqvxjRt2WJDHsr1NjBei6nPV",
  "key13": "52cTrkg923A6v4XF2Dp7id4rMNwN7DmK7zfaWvYypkspXBCTAJb8drWjALQvSAyPWBwtsKQcTEcnpZs2YqexPQce",
  "key14": "tkCT6QpofQownVCZKdXRL5WtiR7kzuGAoWan7jJEc5n7fiVeUrY2F8u5sD3jzWZR4JgJuAkMQuXMCkJDmMuvFH4",
  "key15": "w9mYTrN59ke35nb2obfXZvrcPmVozXuTgYMgaGdjM4BRTizf5RYfb9geGPvN8L6fxfZTVuhKPRVQjDd3RJh6ZXJ",
  "key16": "44gFFTV9v9epr6nJsDyyEvWNDLdFSTv9wSrCHTGADLJRVPGeuWK6oc8ANk6NJAgbQapEUr4akPe3RvqMtkySoENU",
  "key17": "LB4jKkKGAwJ4B4jsfiNwGgWWCEYjrg6itdiakPHLWTp9Hq5x4ospiVuvsjnoE4wzDGvPRkXCuwQ124zbFUyZk4W",
  "key18": "JkcAhXjmYbUuofY41AYp8XRnrFbBbuZM5Un5k8KZEm1pNCoYERTSUT7mqKLfPGqh6H1r18Q3vJSvzBHrRmwd7kH",
  "key19": "2zD4k1eGYnNMCCuvGBi6xRwEysZn4GEcq9rjxonb1iyV3MaRzbA1GGiQ9VrnhZ5WkKm1qz5RbjAw2v1yz9QCb8Tf",
  "key20": "2EVp7AmzFqiqjU3Xygju5p4cHt3T2GV7JUE4Mh9jihwvccdUCEGxPSmuitndbsomtxuZKjQWEFb4upYmNfjFKCRH",
  "key21": "3SmBnGMmEn6hv4x427sqTPWNGdn2cefToi7XWc5BSBaWiUAFHm8GRvWfDhkuUNo9aaV8TrAntNA9fCKjiikkqxFt",
  "key22": "XioiDsuq7e7xzmLpg84vqQ94sVmFCgTtZ6hNnvkt9M7nRpajtih1zaQgziu1KUEZMuKPKRK9pD361KNXiBArBTg",
  "key23": "2omeBTEq5jgHQrZMRxgX8zM9FmkT1ceC1CNeA3XjNqMoHRvxjiiLqfsMH3o4aoydLvtTe2WXGghevX2Zrjkg9h5B",
  "key24": "5LYEUFfUTddSxziPeFWCPxoi8x7XUCEdP8XPaMYX19LyfuK6ee8mSRs4A6jrhZVoJQeAm5yseJygeFSU2hdUrEcw",
  "key25": "d5LFGPYXmFhD1fMUcfpTe8tfvaEkYA7X3cfSGKMY5MPE7CHtY899QHRgb6RgXxYatumKBWyfey8FBsRAwZorr3A",
  "key26": "5rW2iCYoQQ7H6jhg2YwPr6Z8YGBxDdVdb9HpoFnr7nU3A9Nw3F3MDS7wgewaW6vpZZ8gPgF9U68K7W2Vh5xd5FWm",
  "key27": "3YzcBreFXSvmvVFMcsd6V5ecPJpZeW9XMp58Keq3Qy1KZwYFU3RcdAH4eaMVVzqsij7bsa3z7pA3dqzDJcCPTftb",
  "key28": "28Ftr2a5Mhaxo795dTFgtShdxbwg86dge1QuWQQTFex3nm7j9ownsijKwoJwsnkNyzp5cPCWNWykkbKGcNUBDCex",
  "key29": "3RZSv1KK2pY7q96ydYYPssaw1y2D39aZbC5DAbQkNFsABGD1doqAXhWxfjg17w1B2Lih7B8uR4qVXhUwoAsNZjbu",
  "key30": "4JsmzsYU17Qwv563m44Ukvim1qH7G51vNMTscZ9UvshvMcPYuTDivFhj87yYEyP3V6yQyTrswwMjk3jLEGX17kPA",
  "key31": "4ttu9GhDQFdA7jzqNshZGZWsLKWSyXEmzEJFonWT4e55VMKYmHFpFEVhQ9tu9bDL1dfYy2DiZRwSMHGgExcqFDvb",
  "key32": "5FM7Hx4k8CWdmpE5NWCpcK3m3AcA5wRA7LuZri2cbukBekMqmPMMgAGKcm1T9T1zj6oRyWhcEbt6uquBMqWzXjjB",
  "key33": "22nwpChD12yU7dvhYvnLKNxyDxvG7aiGzWP9Xb5HKrBS1e2qsVJ5XWvKXprajDaQrP9aE2E2qr665iH2EHDqiAuX",
  "key34": "29gyaZwqnpjaELZ9L63T2ANubfuqumgyXz7kUCgLn78VCVwBSDW8gkKtufb8hRiJA93qeKVXLxAAaJYe15YyVQrb",
  "key35": "2f8WhyokReJ85XKQDnAuHPNoVaZ25UaTCEP9DTLyc6SsSCkcfxvPA1mJ2Qnfir4KeGtCjB8y4pT8KraBNv2CW9Vu",
  "key36": "4vgnTfs1MPS3xz4jhqPFB21TvCgzqaizsTw43yKtEp3L5UnPtwtSmnksMcV8nHVqiATpHaSBPqpUUHRpv5zfjjL4",
  "key37": "3aWRKh4vy1xPLvACYEckLowxrZUCmBmuZFhz8t3QfmbukDQV2dMnXyDwtCshQYa4MjASbJh8P2bEWVYpti3S9zMf",
  "key38": "42kJPGm91YNnVTaRWgcZM7WtPBBXxkJC6U2U93dBavgnpMozqWoKVPCWBcEhTzo68DLnPu5iBihwReALajUaRP3h"
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
