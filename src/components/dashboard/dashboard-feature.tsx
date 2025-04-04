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
    "wKWwnVZCnBGibfWQSgpdFDGphkuSFEeK1CgVDTXwHeLv9ATQtd4TguxKwpEa7jrsGoZQb1PM2SnXWSVeG4uGQbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g584Qq52BGpmK9Hf1hFSmGDuLUNqMpAkQH1jPZDttCbPFnSXrt6WvRsB6WggKmWdK5gPhTNgWPFKKeh7CdrthPR",
  "key1": "35iCGKEHijzBwgJWA99yfAwHZY3djNqyaDLMt1T8BYXJkqxv4ga7FyT3mFwUvoyoPEkwENSogdq4PUXmEkQzf5Ch",
  "key2": "2uRgQdtSvxsx9QCBwTXAK3VFr5cxDvFojAygK7nsKaEihLmvjUqfz4GX1hKBbfjgkVFT2aSKg5gNNwAay2Uvx9Zv",
  "key3": "2bEH1PWSGH1QxGYdvk8cZLt2LiC5qLJA6jKoBUTQ133h5an5bUziNzymHed2Z4yfGWWLw8gSpir4nEZFZyq65uhh",
  "key4": "3NyCPfC6cYzQ8JNs1c48TKxGgHvbv8oQQ99QEuymwa6ft26Xco941i4rED2pUJKemiWrKj8XpS5jFpQdwTgqJKj7",
  "key5": "66SGn5gsPf1GDZ9mAgBwankZTwTAuc3vJ8oze87yZHbrUurdkbZKUrHTvWKqRLXPm3BUSdKE94uwKy5sXavZMppE",
  "key6": "5BpzD2bpusfcVe19K8yAvCePRkLAJMfRLZiar7Wg6LVB12jEJKnb6FF7XegVaTagRS2GkYSNCpY4kkw4Lb9Gr6s5",
  "key7": "5WF1QNtEz9xrBy6o4vedRGCjjp9JPJYmQ2qy1TuEwip624t1GTs3uKBoJk8hmTY7Bjc4yXfNGBJ8GaaYvSmobZkw",
  "key8": "xBZRS2JLpNP7XKEkyBipyuPgfHd7RQBssSJSHpUuXa1ArJrneDaGLzarSSaBFMjE9qTppLNYUM5Zb4thytt13Qi",
  "key9": "2CQnDTpQ42JXm8v1dsoShJMCL7VLEDfeVdZqAfibdsRh33CNxx9xwLBE5VGiczu9uVAb4ZkS2DxQmNtj8JqZpzz3",
  "key10": "3uiW3Edx3YZTQSmGi2cmPdoqwhX4kqqi9JjPqT5FnSWLBmKqcfmha6odZwnzRFreN9YrAxAbidWsi9ag248oa676",
  "key11": "7eW7z7ynKEbLk77SHE5x42qMPuEQXgqnZ729pUtK2AR1DDp8AuoXinf9er79VdQZUAvvAM85nYKpxmgdkeELyCv",
  "key12": "3UYaF5UQmStqQZpiEdZUg7ayTaFRdX7zrDJAHU2qchDJ8qmEWHVWJCnqYiDqxX2vuvyJCLr9XbjJSAFSkZyM52w7",
  "key13": "2JCWDyQ7fgh89h6zjoiEHxXy9wZhSHGiafLiagTHW6KBbAcotdAwKW82tnhEWQbJUsLZeGTWuP43tw3kttmbMpA4",
  "key14": "YXY4fLyFmp5C9CJpHrcPwtd9Aqg6SryM4NbqXs1FisJcYAiQjvD9k25fhkWfCpw9aL67TVTdb9ZUPsNr6px1k9J",
  "key15": "54UBKe5SUU97dC6LcFAP93EUEn9WLAMXfdBtiwrQHMLJGoki4Gw6f5YboTH39L2tFpvnQ9XNobPCHDNnh1pZF4e",
  "key16": "4i5CDSahgmxNyUmf3SEBhESBHrcywLsNMnuD34LZvkgHKBtuXUbJPzXbeEmPWY9JTRdJKgmGczsE6tmKoi4yoaZh",
  "key17": "55KscLHbpD5gC8YPbJmnM2WVkLsgYhVonFvbxyqnq2cDuCu13w9VEJj7ok9yqjTeLwr6UVmHtd7PmwZTmEm3m2Uo",
  "key18": "2GBwDVgXGnhmyaf8wVWFJawgiuyp872DNG1vqCHsjAwWeBDtY3z94qcF7YeKkqLJhNZiyfdC19rUp9LdNBHZcx9y",
  "key19": "5YkU8dpXyRoy5Y2fDiXdu4iBkvuDEWv8PXmdQK2oxkHxBLZV5dMSWWF1WYcp8KhZvE1Y6MdFz8pRkyCRbDEhjU8i",
  "key20": "4xVeQvAi1bzQWzJYz1F7SzaiL8JNBRYpesg3tFqQamU9auA7wvU5z2UnZcptETvq69S4Razs5mFCxkAQnoV2oSYX",
  "key21": "AbzUiBq7trJgqTB8eQZ6AiMGGcMkxJzQ1J8NJeXTbZKQLwu4cVLHTzNzyd18Ucao9KYhLpd9afTTecGLFk7m8Sy",
  "key22": "5mJctDJa4eKgtxhpdBQtntJyzqVf9Z9q7sXchis2vEr4GuuNpta3MCLXKfDUqUNWLTTc3Z3TmjJLet8bgqVZiocp",
  "key23": "33EeKRJBfyGofbvq144vwxroTjNJ32w4QCd2BZGWApaoDTeV3t6t8N7WWLzhS8XrmJhJ8PdML7PwarZ4pECREiiX",
  "key24": "4QUVGpp6MjACMMrcFgvRqDvCJM76K55y1Vg44RZaUGYRQM47Fmtp66t54b5sb539od7iqrmodJy9KHUxYMQd9Rqs",
  "key25": "3xwWq8nB8gSMciCaYGLLayYVtyCqWYCDSbnk7mT3wtwC8taJnTFVdGxK3F1x3outZt9oNPa6aEfmgGfDhjLuteiV",
  "key26": "2TBT4cK3jbYcDt7MjedMiy7x92Fmohg8nX4ANvi671fm7dyV7kW6DCWXTqp9Xgdn7Kzbu6QFaj8tTRSpJAKWgu6H",
  "key27": "5A4y42LXhVJGmPmYXi954ThE272aH1MbAFTGYnboWpxs4FGxKReAwGMU6UsqhMLuS2TfMLCYDybVBrdxuvPse1hT",
  "key28": "4ZBTBX95rUJdr4n1gqZihjR1e79gBdC6YF3SiZUzSYus4k88YHaTeXoEfgnjtqzJcAUqFWFFJFc4yp3FyVF6dM99",
  "key29": "5ZZraiP55idgfdCfULRAWNc1pMuiL3chxLq97PAARpKawCx4TfbERD64JH3NRmuNNRzAy3BH2xw27G6CA94Ayzec",
  "key30": "5MtQgL57iWd75jccXXjwzWGXtjQFQybaikH6je5zzEA7pHG5TpdorKZxVKLCiJvQYAfZH8N2KRxX5KvhCbPWv1Rn",
  "key31": "5463k6ugge6SNTQKhFPbc5Yq2MMgJosfcy26Ky7S1a3qK3iigQztytjoWGpupzizA3qvW8v1ypxvT4Ekte9dJo75",
  "key32": "41gxS92Vwc1jQb3ShnuDSGFFBgTrx8KKYS5BtbVMBNnTuYLAakeosegn4S9BZuYB2mqJddw2rPmZaZGqvaEMZuxR",
  "key33": "PMZDyaGekJ97Vo5F1BycvYGQzzoYoN52qqspNtRcNjkGDd4KkyviYL7WSHkteqhvhoDFduJkYG1WKUuFkVPxohA",
  "key34": "4d8aWhK3kBBbnM5t9CYRBCtDALcA8e99hs3mJz5RPeeCkvXjcfueL1LZrB4EKoRiwyMoPj6EhAkDYJvP7mYTCJ2t"
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
