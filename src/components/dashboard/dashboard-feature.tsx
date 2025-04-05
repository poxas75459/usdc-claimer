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
    "4ChHe2ZUHTg5yosQHxgG4hMVgSi5t5Vz7puKbjDvBgoXKC9i9UmCtH3uDNKrLgK9C2cjrUKu6YZgkzdt6zVSBV6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X9KnHS9cqteDB2e2d3LntsSeXuZfQLjB195C9r4QWcT1rZv6igcFsWHo7c4VAXaczq9coZCESG2rbw6hwXJiyfx",
  "key1": "k48NHS2fJsMSZjUQHY4S1aCgLx4GPKxxar59RHxFCfNfKfBikPoJKZKsQCwmBNXTGANEz666zrqc7f4cYgTLehQ",
  "key2": "4wC17oTRoZzdtW6nuQAAvNtSSjXe6MxtUEMyDjCLPqidVr9GXH32FWbXMdwVwHAzjgYxFZ4cdBqRtR8PcV4wGKd1",
  "key3": "5rHVhBYRcEnjDAeRemEsB4jxdZ7AQpm9UCRrLt265B49yk1ibv2uxv8ig2h49aFLpFni5CUNVtkWLixYS5o11sFf",
  "key4": "yWWPseNspAX4b3DWmfJnSUoDJ9jA9NjXrjeXx3cWxE4w4m2DNqf955VdLvmU7KNwiJ1uafXtTybZy1inWBiFATd",
  "key5": "3nvBPNQip1dPHEVrRJ8NHYffXow3sb4CcUgaRjHXhkER8XNbRtKiVJcjUE6EaJaX5xM8s9D5T2pL1PGAQM3FfgB",
  "key6": "24MRgF89Ejna4oC9epSPQvnuj1hMD9DdUAPHtoqmvaym5vy5Nfhn6ceuRx5RdmJR25xJpYPSX8MhsXjwwDmvfgNx",
  "key7": "28mcC4zU1MG52ovC1saKj84LJ1zSNJWnDF5A1x6Q5hrV7he6suK28bcXZo5sKtRJP7sAJGb5ytqQSDr9GGzoUJ81",
  "key8": "5GACEehzz9doHxrJvLcg2iJRm4rSjopN45MPXAyWJPfMJvcMZ3LzCjVJ83ShnyhT95HSuuiJv4MFHZWtKadS2TkN",
  "key9": "22C134vmcpYDVZLMvHzHc4TF5smx3sAYVGFAr3WxiWkAwKZGdqvfkeLHNusVbpggeHAcrAzm4qTHv54dkqztezfR",
  "key10": "2rX33oNdYUX6fphuwumVhz1bWAyppAxMuNVX76A3BEpSFhZaVoQW5C1zMETE2DEPWrgXQj1kUzrXhGwbP7wsEQXh",
  "key11": "45JuJ4vMoH4CvcAPaizWfKCHphkJvtGJ3F1qdhJgmBhVNRGJqFGfCgWe96xoLFb1apeMAc2cB2NZkSutnXjLE2WY",
  "key12": "57BNa3RyNvBrjmN9BtQyV1wLYCLTszzR75t4wGBPAwEtcAEMHmzHGgLZUVE74xuKSnWJzb6X7gBmYZp3kXqV8S6i",
  "key13": "2Ruhmrpg5BTtdym5TLWkiGTVwR6Gw9NPrZkBPcc64Y62hUUcKDaWBniApvaeUDftvTDRJbsjWx1sW3NRyVwhgqSa",
  "key14": "2Jfeq8kdZEUMhVX1KTsi5rSs2wAuweEnLKvdAEDL3tC49N2gJ1Ks32qXAV3VZTP4VBGz2wDvXvk4RYkPByJwwmCn",
  "key15": "5jaGjarEnUPRotywXgot1GwqApQAyNe4B15fSceP3X9E22A88DXP29ci6m5Z44XBjd7Yxvu1WVHBtiAoBZvQZoTt",
  "key16": "Bhjb9AkoHZencDGAmvjHBgkGoFAHvS1jNkdJYsrS8mdQyB1aYGgKsTiKBaNoecHvacCmoU9oXh4hg4kuUvNozJC",
  "key17": "5y3xJg1E2YEdn4xnPwG2cgP5qia89LMzccFcEVQfGAqRpBubp5omXoGEaTN1gb2dt8rswargNQMhxtdTEk4i4KYq",
  "key18": "RyDgTWU7mgBUjFsf46QWF4HCdw1S27ubKeDzSrSCgzor64knv287YNWaJ1aqk1norFwRp8KxuVbiwFr7jWZa9wz",
  "key19": "66cBFCbuph2XJ3v5tgKJftV2Xa41CHkmuNePXZDgRct6jV6bSKRHtJwRePqb7QzkzFvLPPb2cRFMGFkazKWMgwMf",
  "key20": "4mz9vnNU2GjWYNBw2H9rYoTEbzoEJth7w5oBngSr57ifyWJwm5hkPTi33qzm2NaT6pBnaLc3TzZ1uuHpAEiTpvm1",
  "key21": "3SP1UbbpMMM4eLUkbGvicr2kn9Kd23yT3j2GnVjcHeiLBXpWCSYSbVZooEBrF8YTGTZcLToqfUZY87HyunhqxQJg",
  "key22": "4Z3fv9dYeNpGsxDgihJ6x4vnv7ZDTbc8mwjAWsinhpT1wVLW8KvWcjJDZjV4vhKYoobdqYRpbQEG4wMhDZKrMNsu",
  "key23": "2qQZUyLvhA5q67gvvyFvZNmvjTMKL8SucVsLP6uv7VCCDMwGWKHGdFqTbU9rkt4cLraQBqvWqo12JNEckveR2SjE",
  "key24": "51UQDHot5pFnvzQrkyNx2TBwubsN4y84fSV9kw1tBFR4P8Qsk2AA2YxRiy9qeq56hEUZ9TPBp5xB1iqrgS1deoid",
  "key25": "2haHdLmkofAn6dDjCYeszjzxux3w655KVUNC29eod1hX5vdoUZZGZtz1BoiqpSpXh6qhnLnFdCRhHbD56JXyArNk",
  "key26": "3gb6bgw7zQXKDsqqVkdxyhmAvTYRu9oiNnNcBvhcx88pE93EUx9UT6Jz78H8HtobHhg1AA5Y8aVMdJt428C1Mu2X",
  "key27": "5QRzoPLHSzTjMcKwmT4FTdLAte89HZ231j1cVi1gVFPaDHuwZLNjJabmofdtm121o2dc98rQ5coP9ytKFcwuvzh7",
  "key28": "5sHzoNKVu7GKjQGkDqcP4Lsi3BiNxHN2iQgKNut9NkScQaEPENrKkMLzrwMEXJGCLS7PAJNvHsQq9ZwgsivDP4Gr",
  "key29": "cVHBCp4EJqSsDbi7kJgbcSVVB9TVTvXHHpv64MwirS9snJ29UtKbNUxCDFWxked4zF4gPzQv5PBUgiCVAgT9SYY",
  "key30": "23TntRMnTZGHeQdJwFdJXt565HTtK9vCMDuFdxJz6yxP4EW6AkTRZDUaRECez1ksEVaTiH11zF36xrr9HJLhHZUd",
  "key31": "3Zd9beVVjFmEWUdNDb3CqkdDvbpLJ4Ax4Jyy3nzoSRmn35T1hEqTaqiy4U6S2tYhuFVr44BNpmgfg28mHdb6v6DC",
  "key32": "28eSFwiwgLQ1oJLqBrWcTU1LwpcegkMAxXT2fjtAbo2NCpQqq3oYf6vVxMsyKRqNEDwUAh9PkptXvswZMadBCuAr",
  "key33": "55cYnsoFFKfHuJqeDaDDN6kdgZdSPvRrkYHBgTPk8Ef7w8NUTivHSGG3fhgqeRyj6jLtQFBYkS7R1GrM8wwcwYbZ",
  "key34": "3DL3GSZKkrb73uDC36GFDWwiJeQKRYvBN87uoFk2Cw6mdd28GcHjxrQcG4FW88GXZ2zLXJUGopgut6XMoieq6vQz"
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
