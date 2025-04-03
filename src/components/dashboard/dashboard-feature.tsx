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
    "4wafoDSGjzhH5g7PVH1AtzQXCzYafJLvUQZ6SD2rAML3pU4m6Rn3FGL7JHXdbLjoDhMg6hMmQ4ixt8fewDyQwyCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A3sHvM9jYbEfqLmjJ71nWLtKSvLyzgpKxZ6BwNqGTnFrUgUnSU83EsotkiAEBPtyNYgoEENGBErV2uFanJZuqPu",
  "key1": "3R4uUaF3WeVwPhC1mPpRfAwbsbkXsogQ2tfsD7BgWdxQrE37mV6pgCi7SJsN5nMgtNzupAbTJyEGBJVZCVSBTWFe",
  "key2": "5z7pFSmzr4XWnw5yJskR9BdYdV9n5vxTY7S6f4dvzKWT8yLGD1nAPSKXbyY9iQuko6yJPtxJ25zE42WtZ2qsYkHj",
  "key3": "UWekkjK8uRYNepD39isL9hAqBkXWgrt6UnM5PmM5k4PTKeUWXdrhFocVk5wtTM4UL7PbhLTrvGKMuWBCp9muqD2",
  "key4": "3FvD6164GeXEnujHCfkeZsVsTZAV56CnLhn8MAkW1qJU2p2F6jLX1kHsdsnZBbHsdAb992PWhR9cddPXk1uBcPr6",
  "key5": "qzd8J9pctXUbopmiXkyLELHUdJo99NAkknGJSHCLDQB1djb54F4Q2m8VktaWg4mvoT7PBt5M6U8njQ1nhqmAmov",
  "key6": "3F7nbNqTcEgq9jquwLdqw4jPJyWBqXJrDgixCPgZuRhD6MUrV9LvE667RXA82cxz1ALAqGSV6ANipuP5D4WKfrK5",
  "key7": "3eUSXFiYhUTSNBLXMgV498F8pBsCsxLVWx9XnkzVGrhdThRiBbnwjjA5cqBnVFvFPTQe8Ugr4r2VmPqg5nxeCyMr",
  "key8": "psKnk6kjUPsjCQxgr9RsijAR3cQG9hb4D3dhBYJxWW5x8bKdLxyfSeasDouP86vASbL9RGjquJJiHGTP2Zvhjgv",
  "key9": "4n6yATfpD4wzVWvWXVNb1C3tsgYv8dpCgsr2w8jo5y5ui4gC6chVxkruHUEJJKJaBeezW3XJamTR7ZhNhy4zjzUG",
  "key10": "45hTAgjyUwN11h85Yo2DkKPTkb4SYZTjW1oMi9HAPEmTn3bLC3mTtjUDKyTXWKzKBeeAD6DchMtt8ph2UDm8M5or",
  "key11": "4UTEteQArMED57tvVL6pkepmXjFGcrHmA2zcxPz5qELW7tLRJsxR7y9YtwvDsbkicroHk428MAq5Y8NRqQzEz8Qm",
  "key12": "522SuXNHPFFxWZDGKWhgyd5yVELFvtYxzZZCvkutU4SYbxFyN1eyPidvcZq4UJc1Rc3vEwtUwJ3uiHwyja8xLNzJ",
  "key13": "4p7c9sq5jnyxQQB1H1GJ3f9om2LjBu27CntTsDcE9qpz2hZEoFGQbjcUPdLueEDwvWpyXYbnFxgarVtZdqMphhy4",
  "key14": "4FMa7mwY4iKH4gXWL5mcUg8wRMXTDkUbbajPVU77Kj9QhH5ohg1Nsjfd7cmucDX2qLpKy4LiyHQE8FZ79dtynJfR",
  "key15": "MiYtmLRYxyMPc76WBAcoo1uXHR9eGBJYF3NKiGWsH3SpdQbGovUTsReJgvVuYMPkFpdh5Ln5C75mZNQgBdSfYTz",
  "key16": "4L84PCyLopNSVUUWW2xMuvkG6vg5GSAhN3ctBGHYMBH7Z3RHgZs9PdcJ4q9ohawpbMvcetEYELTgDN1tZEPEJYMM",
  "key17": "5scwgyR5znQnkXyZJ3TGXVcBsRhesdHYVZXrgqX8CQszqmBKKX7hJxPVaEYePCZUWTZ1hTrrtiJscAYRDqfgsNBw",
  "key18": "2qsk3A7vnK1EPfXpSETqKbHxTjQfujQcJXHVeVNSc9wLU9xQ7nE2ycqDty9kd2FK6xDL7gqJh9u86tYA7EahKBoJ",
  "key19": "3taJ5Gjqi9NgyWcYt4X5XLVxwrp4KPv6d6yxhfqekyHEtm8rcDzivqtj3HQJz8MGXQ996GXKmnWvH6xY9urNTaCP",
  "key20": "2xBBHfiEejY39NPYFxzW7jbRt9zC9A2KDDDXRt4d19MZ31Yii5gQmX7vPC7zjqFBjExHCSftfGNGQrjADszSXi6s",
  "key21": "5BPBuZeGEd1UFUnDDXMATy98rSzst3HsoAPqGbbZayFb8aHwMnSb9RcRugeQ5ft8hyS2XUJbtJGe4tM28LDyJLBE",
  "key22": "29uBumHJp2aG4FLYvJbsBtEzrWmXSFK9TwsL4K2cxdnBu4q5u8ShZYTmhUxnyVATzfxj1VfmuL4NnNHFtTzR35aC",
  "key23": "rFacDzzdjYhQTcvS298Hv9famS7bBm9RDkPsE7dgbWZ1dg9LkcEEJiZ5ncuaVcc5AeQHQbXKBKom1yBS2gzfQWL",
  "key24": "4oB5p9NUEcZVfNAMbZgaXUw6JAxLnhXF7bRgy5MCLonYG4e4WxKV4g64EN7B6Wd9iLo8Bfou2d9bhTw3kVzuRahu",
  "key25": "2aXPQXGf5xX2HgnAMSFQNnFW3T8ZbLgm54t21nE6ZzM6ubi5pfaaqV1QcHuPUomzdpUFhqN8fPg47MNvb9f1LmwJ",
  "key26": "2ma4BKFgayZo2B8VyjFkAvXVKvKwrmpC9tZcKn1tjACP33TBSRZiGDWNC1yBcK6tnnYPWFwrvW2sC6uyVZJ8cDuz",
  "key27": "4YoYDYZafszMTtuccwViv9KYa2tgeMwLyZuSSYrgqD3FHoAgvyt4vnteFFoERsjPFUvroZ3TmViAbHUqN2fzk5d3"
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
