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
    "3NHasxc5CAkAPpaGstn6AqcVoUcSLwhHZVroffLhDgUKnyxii5KL842wdZidJMBiTzR6mY9BvJJzhEBS7aT3WwdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2haB8ve7FCXDBSWRH3Eiqtxz1jAzA63FmemqVKfVFeWA6ZTook7JreK5ehbmii8cVznnKfaRXpNTjct24G2mt2mR",
  "key1": "4FUXDMjuLa9v2uNQnDzDNZ18RB4pvpAhBnfo4UeUfZc2mPfvFQHK5aKBCwhMsPgQz16BznKjfKFBvtN3T9ymAMaE",
  "key2": "5gnUUV4jNGbduvAXrLUfQ3jzshaMFeta2erWFSyK5Y1w8y88ZZS2jTZsW7vaVfSwpGBgj7vFgpfe2pc4ZiTKr9oP",
  "key3": "rHLRWaWtqA3rAQBEJ4DPwdF9BGkUfdLw5o75zfJuiKsZFcr4yn5sMVRHU1icy5VQt5r3iw1GDLYBREzTvW3MNeE",
  "key4": "1XipaNQsfbueNyBVNByiAghgRkz9tqdVUmdpGdRoToMasKvNEum2HvWqGkvsazXDfXs453321FgD1AkQk7pnzbT",
  "key5": "3KiP6hNYMWKj5L1KneufYnfhqww399hpWckntzhsaRwKZMgxeN42Vo2WJtwJDDmepKK59K1PSXzVEBHBUAfY8gU",
  "key6": "2AkZcoQHu1HTJ3GL3x9F4bPrAwCxm3D8CR4q9b4i1HTCnYgr4n7qzfVorXhrvSyW7VJc99DTaeGiX62RzE73t7uA",
  "key7": "29nU1syoHp4EktMWfwHdzm5AJgEnCtf7nr8fZNCWpuvL7thtypCVrMg8ycz2dfSeKeEDWXkoW8mbcokKZgtxZDrm",
  "key8": "5JgwPFs55F2eu88v3hPsXrmaakcqZxKcz8b9kQiKJ7GFQCFUcJvYoQwLU1FGp2GBzPmm29ripc8ELGYkhZExYuVM",
  "key9": "iee1CJkMHVr967nekhZJdSE15mbVMZSwbg6uUzgAM2BMCz2VXou1h9oLfQSYUN7ZxTMND5t8KfYFg57xVcDTz6p",
  "key10": "48ZMhnwubygg7EjF1GqZBuiG8ZL83vFWo7HRPyr2QDhfFiRnTyQudSShRCWVvk276qj3DfDo7tNwwaw1rKpPHoJU",
  "key11": "5XfkC8HDRF9PCKNc7eWCny7DajoCyTqKpVEVd7Juq8kc2XRUFzUgzyzYkL9G5zWiZmZWiSkoHRjDh7LhAsyg6wSc",
  "key12": "2oAvYeKfmHt2Kaav5wJqD4zwboyb23s2FDaw2DBzn98HcuN2BFncLCFdcVGjGU81hj8Kbb1U4m3ffLtTxvAHk72z",
  "key13": "4Ph9jSsiLADsFwWtnGvEGPbMCh7XNCqnsKRgGU57Tg9PbF6fkfc6ZCJmekWQZPiSdZCg8ZawKR4vCTpazDZNCRYV",
  "key14": "2q1AYeU3gkNWybrTXBcjbHEBt67uEAiPckeCxQBjq4KG5YLvstxeP7UzZ9v2sb1fwVH46fh8tdvC6L5Gzp2oEqNL",
  "key15": "4ozyrKPXTddBGjNPiEMaiPS6s8yYTmmpHzqTxX8UnGLWRBkBp2cLQMx7Vwk9LBkhmb5VKJgMZ9SDr8FA24anQ2H2",
  "key16": "5AWAodCswzoqpSb8oPtkpzTuDUiRLky4pTis2n93cHVFWw8M3g64WUmqGq2tFBo7SRstA3LXtLBn2cajKPxXgrNj",
  "key17": "129452tJZoGea5mDFDSK58PNyHuSouf5FMaezrK6o5QzhqiF96BQtsSxN4w6Sz1i62VNeSVMwciMK9rPSttwcH4m",
  "key18": "K64qwiWRJWbhkDx2bp6siZhNobuWURJRp1XSBXxF33Uub5QFt5LS2FTvhiHbjeQyhE4LP2jPJm7zESauPbphye7",
  "key19": "4Yp2nDKmFDxU43zG3behWN2DKG3apYshvdUqrWoAW8tvSgpiBBX3E9EbRseX3jEHZ7keLfQMWjGk8okr6UzUYshQ",
  "key20": "2dBNH85NHNVonXJF2QaAfifWDuZS9HXSgFj2KZnzkkU8is7BRBYCLf8v2R9D1i3fFRoLvv4WubsUnXVMicYAJA2Y",
  "key21": "3mYEPNH54NqX1t1crKEpR9H8G5ZBVPRzBBHSyr5rAsf4jY3WuRJiC2z3K1hzqJQiqAZDVqyAhTFjx6bPPr4GR8aF",
  "key22": "5V2vPUf7rvR9t7nj5cmwVejaZ1jxwo2YdK4y2ADtNpFRfSNRD6yEF54J6epxxCAht8fGZmY7Lx81Q87QT9paXUH9",
  "key23": "ome32t1VmReJmJCf1o2gKtAcWoCSed65batGyGafv8WTHKxPydTbUSBMQovdCsDJNt5PPWQfw8jWhSXPdbJfjoS",
  "key24": "3TaqZtstp5JSVDNwfF22SjXG63ngADdwFYHLuK3SVhMQBK5PsF9oXWPXqPtkpgHDvgRYuD6Ghi75UvfooZFnA1R9",
  "key25": "eHA9NiX2wixugE59KQcqrWyipsRXVTmVppsCShue8mWaDf4RhrSzJYY1gnJnxdQr4RNauQKRhLjweE2Utpgs31M",
  "key26": "5nVzpefToHFoj9umUhENgQV1ruX2Nby5AgGhCQkmuSoSmPQ3G5q4k5dZjsCW7Z6GSbg37E3bUJC8hGNY4Ms7ndwy",
  "key27": "2BGVHFnBtKcUTS3V3coadhoWEzB6o6tTBC5M7aLumK1LCiUeAHDKVE73gqd48c8six6RPAjv4mLydYkb7NFvnZr3",
  "key28": "2jipVQSsvKgcHSeaCKy4JJiiGd4fgLPfzRRWk593keARZUicfn2Yp7NqQsYGY2RhTScDqTpEkProk6i37mkxsWRS",
  "key29": "ZBKj5dD3LZ7HHiqRQe5c7pNjU1erwgpRxM55ZUaZ2SBbzsiQY1oaKqGg8nZdayVSqBybkgCefiR4H9m8ndGZymj"
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
