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
    "3kRDNGfWg2vgS9Be9u5iwDgqHzgy1fyusKmc2xBBkQKza2jccJSFXbkxMY2nXxCCe71L3XtmhZ84F8i2YPuESp36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TsVMhQLRRWPV8zsfFR7348pqZ2ehf591o4dFMS7pfgxswfg2AbnqWnhCvedfetmx5mWmGrsj1o4M5skomkGojxA",
  "key1": "5fFTjzrCUDLKctXi8S6aoUvDbuBGF6Shx6HxLxcF9NjdtGmPWapcSsMKjfD4fikzqPVNeBg4DZeujsyTNtoqcCqk",
  "key2": "5XHc2GQTmQrmew3ziXu4ryFdVirKmnLmo5JH271m33XLyGi31f28dP2E7ACGDKmqhyfZgHjAvFkdW5WwsmHpoq13",
  "key3": "3YKXghouiGBubymkwkNAaX3kT5nDL81NBrGmGiNGorZ8yEqDBCnyBEffRfWucUuCB6WWWRbSa19CnzXqPM3LvcXb",
  "key4": "3ecHKm1fBUNJTeSex5F9YgfqTF7JL2r1F9DXBMfPXhPZ9LFxZmFHcrtKpWLvjiNN3ygaFdMd12ZrS7APot7T3YUE",
  "key5": "oVJZBQcke4NdzadCHeD3JscUSF6VbDm23Scwxre5MCxZiTLRHsScgosLVGX4as1Ktp8NWwY4Z3LUKRHYSu8jKCu",
  "key6": "5jtd1wRTozgw3UuZgbAkVN6rif1zLzJxh6j8LoVkAbgxSL4jvjQ4A91EC9rB3uEC3Tcb5oJpAXSBpr5BH1A1BmhH",
  "key7": "5FPXQfQ1KtFuDK2pCQ5uSFHHaMJEHtUwZz8gxDap7BEPGYvJWfpL3HApzrQbi3M1CPoL8QjwFoN6G2rRDZVzF8Uc",
  "key8": "2REqatWzUiHuyiuQosFbbeR79Ks5NSSjzyjD3zWoWHbtgJPdVH67sq1P57E8yj255zQz73gLxyWWZ51AkES2Bjfx",
  "key9": "y4L6RQTBEmdbk2A1NovgUFkeHNfb6pAbLZ4cZrcpui1Qpzdq1xyKHeHSHAWxXgXVpUKwx8BsAKQzr416QpewhAr",
  "key10": "5Cd6kXBPcCp1GwHe674y4Q5STvRKy62Nz5TjWyqADpnvHpbUngiUFcRqnTRvwdXBekY5JG5oizQnna5CX5SLvPMK",
  "key11": "BMVUwwinghovjtU3kH5YM9iYGmkwnWFJB6irPDZmLDAjB2zyZEViN9G56zmw9Fbi3uXwid89m6S4fQYUz9xau25",
  "key12": "2Pu8E6hKE2xV8mDho8KUMYVFoHCUdRPVGyDXScGLibRTxrxSkoV1xVM3aEZJoQKNt3fZHs6J9bfcvDStXkUz2oXP",
  "key13": "ZMsg7Jm7B39NF5X92iQqv6jSsksNeNRU2YPwAAWHgTWMXvb6isE53c1qV58i7wikm9gNKyZzcvTrK77x6tCX1MF",
  "key14": "5LYEWd4VB5DawjFxWcYjDp93kMoaBmfXXX8z6hpa3hKYSR6SWXYP7KsbzCfgrS8nXoUazH847uC76bHbAQ6pxR4o",
  "key15": "5i8uiy2eiyjXqK6BPr7jik7fDooY9H2UgTpXtYdCEQxKou93pTnHkuJXcXxFBwXxNzcDpmwtsqryzxuuQVUGHqoz",
  "key16": "2cC2MEwfCXH3Lm8ipiUqin79rC5hFFbXLyLhkh84uhJsDVB2K1oC8xUcE6kX7aTUC91BLZjWBspwx7Rc6jxumyRR",
  "key17": "3WFDWj4gDkZ7y8cB93c7wJhZ2nLDKYwqnhGT5mcna76VKWvvAoXgEgyyJY1xnBr6Dm1UyTtFPNMJUbCa8aWALnwL",
  "key18": "2G5Ys6BiU5z2Gfh57Uvm2JezsFD1zpoxGrZtCgFm8gYFJAQYZ6c6rxK1HpbiYsrWYjvgXRyy4kxdZhgzUW6YPbZE",
  "key19": "2p6B4LNspbxmtkeZNFoBNDXfA7oiXk1MhDn7ehaF5bjMoZEfx4w6jqL1Zr7riazi7cGsysmCa8vLVhd2qjL6HPKR",
  "key20": "5kZGfKwQaQD4sNt9oTFDXYmgNMqmtpEtDX3bx9mSYbTyv6eeB3awaX2KXgoRwaqX2fsgVPdZ1eN7SRKh8FP8J32L",
  "key21": "2PjdjmkJsDK6SXKcmfm7gFvkkfvGCBdReG9UaCenhaVpRLLLA1Vnqk9ww2DWAiUpasdhk5HPptvjmytZJf85EGp6",
  "key22": "3vrFnvxgPGaK1stpdf4j2Hy39pGkGtEcwaDEtEA87vVg6MaUD4Ac9w35D4osSzUeD3fbJ9SDvGtFNtTiBU938DHy",
  "key23": "5ZVTt1abP9eQhiZyakifk3j9RGXkR63ptDXbv3B3ypDNiWMEhkXqstRyP5p6U7ykm6uJVjM3SZd6vo7FHg9eeTTw",
  "key24": "tmawDtG2JQuHFsfqgngypbkQEEz6R2XsLDSbB6LH5UF68EKXAEDAFU8oYhx4p8Y2bZMjgFnVpd4gyASLaWf2b1X",
  "key25": "5jhh8bMCw2AY9iego9RmsJn28TyYa2ZtY3qph5ZbLhaG3AXe4gFJdP63DHQCXVQzYUoyC3XN6VWZjmyUo27nTmeU",
  "key26": "5iZcvBETYvZEpdEwg4Yp1GcNb7RL13WHakpbDYE9wnaosdUxTMAMk1mzXKGKD9dcmpSiWS25LzgHc8p8uYwWnoMT"
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
