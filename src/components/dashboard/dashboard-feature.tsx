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
    "aUSUsyZM7iVe8xELsefWzGHXtbwQ9D2nKfMmkNX1MtcKweckMy42x8M49cDX4WhvaeSEzEGd5RQjjUD1bCgdQds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Nx1mLqh1JUto6AYL7B1xi9Yh2gBnSJLFkeBCq4hsHCR8dcSZF7JhxccCDMXpntb9x49PLUiGAeSE9UJ3rX78uL",
  "key1": "zX5mYoHxsS1tTasPr7YUnuPb4emhwDCVVUnnmr5eEuUHcsCp26vyf8KiJwsvYXXvDMWBzk1qigxgYAC1mWYzq5D",
  "key2": "3WdTtFZZdCgg23hc3pWny1PuHLLb2uHARSgN9h5SZ2CR5eSRFocgkTP9YMbbnXjBJoQzjZLGqePvnQ24o7EUb85J",
  "key3": "3VWf7XWM2Vz2xQB4RgcwxsEMHfMY261TJUmCKUbdEdZp5afVzbvjDSKWUxqpvraEijBXFEwSaiaE8SY4dsfS9qDY",
  "key4": "cBrLR4rTUfgDzPQEZ1RVJ7aZZUmbZzphGG83XeAQhcYuA7RhaPhXrroRhcYGPVsEGHuYNg3mD7K5ov7yrXfFAT1",
  "key5": "4hXCqMfjfQyHUQhPPhzhLkhJoikzdww8fGCjYwx3KXrChmk1b3g8qwq87WjW4kmne69VKvA87VEXG8yaDgtoL1qh",
  "key6": "XncGBmvq3bwiBXPN97QyBHjHAezvo4tFAzfxQdPYxZm7UZSZBEGA5z1YKj9CjWv62ak7BbcZbkpp5Ds7oXL2inq",
  "key7": "48YEvvHbg3VY4UMxTmdq9GFXx3Vpp5JVwemeiDH4CMSPC3FjmBeHiMRM2jfa2nX7KiS9D2h4XHud5R8LAY9r52Ch",
  "key8": "3NXy1jxXq3m1WGDm1QCGZFebXL33rpAf7d3FnBdLWAY3zRsqUpwJS9NTo8VeuTk8CMTBAFzB2r3DxpNmVH8H7A7z",
  "key9": "3FQW4XiZQyoQEYC5xMP7nUv1aLrv9AcugtHyLAkEYD6VKwMZgxCMhNYfce3hX1BCZdGxHYJLGMqqikpfv1jWGtT5",
  "key10": "3iWVXyKfPzMiAB6qGpiU9rAJgMXSjNEExpqXkGFubesxa3H1FmsKKMqqDoYoQZqGHwDqAokBXw5a15tVgktCf1x6",
  "key11": "5H2VNPfnDDK4PLCF3sgwbEynwHnGWUYimfgSi9iERb22BvB9JxVG8gZC3PitH16uWYxvBNRhG1Z8Rpsy2iEYLHsF",
  "key12": "45JooiFvepj8ypAB46gcp9ZwrWxHhMet3jqd1VmYW7DwP1JJhuDm5auEY7n5ovcnrHraU8kyYoQS6geL7b6uBKhR",
  "key13": "5UXNGEzS9nV718LXMgmyARB61zkohJWMyBd1YaukrxNRaStdfN84XexF9pR6Q1GDqxMBFewr3ny1KjPBRui8ts5r",
  "key14": "5aQnwZGbsQFLt7JThoWiSCSMKoo5oDRVBMU6e1LNqtiKxZKtj6cHAnXcUQt1sW22aWTqooFtMVZo94JJN1PVgiVg",
  "key15": "45Y52Rh3y4Z5XHh6sXivPP9qhqTSztP4SkrKbb28wLDEbBSu11632x5qBEhZD9Qq8JYvvJmRrDbWn4tgzZ6oC2iP",
  "key16": "5yp3ts526YFbmPtZ2hc9Wtjt9aMiEgZvpYX8AatfwaaWyP8oeSjNMXNS65DnSGtRRD7F2GSTawWfvXozRFmEss1L",
  "key17": "64LcyokAjDV9DXQ5mcNqR5YVEQXBBDEsLGzvs51B2yiaFdNowsprVmCeC18e286AqQwBB1jtzfrqyEUSXuBuiqkK",
  "key18": "3oYRRs3Ks9MYZ5XkvRffHVJMgXBh3NNgNX2NPm6NzbkttMWF1k6hj9AcY8A9xQXvUmU8L1p2VpQ2TVuwtLeiuGdA",
  "key19": "5t7TYKYjXYXWgEMZ1noPuodKgqVimTsPJCFrU9JvB5ShzURc8jyNeBaGXifn9d2einr79NKKFt8n3qjNetQXt7kw",
  "key20": "3HXBAQUiF9NfQMTZL7QZsxrCBq6PWksoMvfag5LEEsmrjwimRSaY1io8dWJ3YY6TFXw2D1iSANYrGyRHveuVpJtk",
  "key21": "5GEVK2vbmmNFuizQbFjFsouTsPxYQvAP4snCvzMLXJBEGTdMNvYiRXBakFvJ57HUKZ6WoBv6g767S5UXj1t1AZaA",
  "key22": "uLkyw2aH9Zrd46rReXHzYd8fVXTjMBprAmNxpWBDNquWsQzNNeDoJYM4pmiQhWEGdJvD8PGKEdJaK12pyM8tgcA",
  "key23": "anqoGmFQJoinVXrqPhgsZWy6F8X5patLzrGxf1npDFpHqaMTauZhZZ7p1sprjbJJfPGawbVxQuLdKwQKhrEJE3U",
  "key24": "zeJLgyLg6fZ53Pvjkebqs8aj1Vp8YvuC4mjmQDxeRhEKWeEwa2WvfvU9mtEScza8gSHPBYZ5GETVUqPqJvCWhPE",
  "key25": "4qPUaNR6Yqft99cidyb3gr1sokQFacwTepFVsaL1qrbPNVb3SXhUsUBRATuBHYxrwXg5QX4vGvYyD5tUvbsWyoNS",
  "key26": "2NM4M4WEoLsUoZDFaZD3Nbad4tQ66dhC9bSUBUMGkLcDHYWwSf3LpN164TfSsmsDkNy5tkNbM5bRAfTeVA8hJbeV",
  "key27": "5huuh8iq4NAgwAZbYeBKDyshsZbAc9o9ZUMRwq8bWwsdLs5G5C8umwFCvgnZ4S2NwrHnrrfpzHPtMCmveqyaf1Gs",
  "key28": "xuhc9aSPxSRh71trxV7Hy59kxg7RBBZpM5Qvq4rQCMarYAoeRetYJWydbzdTyAcbvTntbiaL9YWLE2tJeLxpFn2",
  "key29": "3RkSV6W6nDQumfWy3yDnJ4pDbbHWPyZJ9GRdWaAa6VsspnQrEGkKFvYFwyVgnUSL56bS4y9jDjV7AiEeRVWk9d6z",
  "key30": "2jo4j7XWD4ToJAiA2GNWCJHmbqwj7cqLTuqWdHJwQgG9LgFcY4WX4Sy1PNPipedF3GiLPo5z5nUcSUWQ3d2tVgQc",
  "key31": "2rKBzTfx9DNsVcFYqVAK4XLDhG4xi2yd8JmJDzqnwgihtTBz4nL43YiHyiNXMqzuErC3LqXESzkAPiAoHj4S2Kdc",
  "key32": "2JMpQNfFeojXdHmHPtDCQyK1e4FD2DksaA8TKn7QfpzLaXejN7xSPeewVYie5WW5pqi8XLTyh9UDr7yJMMgESYcb",
  "key33": "2PsUu49hd9qAUZKotHkMwfLxYwEkDxuWZFDzeoghXpaUjsKQ9d3AnfFEEBFebgTe7pzka751BYnJDR3us9wBDRGU",
  "key34": "482LsX1Ld8apc4qTAMdVjyidhfEmyJWUdSVH2yMysj1GrK6fx5KtcCscefZumHUefGoDs83cTDNzGykX7FiC1Spx",
  "key35": "4gW73sbgtTQvxRzJjupyn2NWS5Qv2xwWNz8GDUw273C7adny6J9AhFcikXymcDbtPycRVZNZ8Q5u4gMsBqxVdxvp",
  "key36": "2joShJDCnWEDJEJ7h9Fvu2GYcMs7qNJ9NhmcT5JkspSMSkHCCAxqQ43MHPNBuJ7ijH7f5bzscrRZ3gEPtxT2KPZj",
  "key37": "5Ga2pMWZkjtmqenYMZDkGcUtoN67zXSx7A5bWQkhSdQz6cQxXDU9GpNP8kkoiX5UboSC4kLjCQCBupsr8VKpkfcD",
  "key38": "4QQoVe4e61VuqJx9j7HCG2UYyFC1UmBzQx2wRS3Y4yQjh9dok2WrjxeViteQa7KHiRbTD1zPNBZ6AMMAUY8Z6SWs",
  "key39": "3btbrKvNCbT6nyieKCyV2SB5cxWAHRkJXPQiQUEKp73JKMHJ3cT1tsdZYcxrHNCxi1DBkCddezHaACewovmzegQz",
  "key40": "4EoTUwqYakshB7cwr9pnaJCf8jAqPP2VBjuSLB9vrhd6ewHLxFfr5upTy7ADUiX5HjTtf7LYWmSCvwSGbaHPhaDb"
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
