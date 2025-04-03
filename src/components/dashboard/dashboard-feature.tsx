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
    "211zGgrdffmQE75dk8zLj5ktt3tNqMErzw96VDyPN9SM6dyYAQ6f8kszzYgc5opDDLCVCbGKe6vxQ3qdUXzf4Gb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fq8LGtmE4RkZr7AuZxd5irADKwsDqYCCNr2qnQnBwV3pdZcQZ49SjGB2bnvQjrs2D1m84iZJ4ZtFTzKSX4n59Xp",
  "key1": "5ZGHtFz1xNghzqEYuhjNeW2GzzE6DrFW76NzvosEhq7p1EdYF8mtoh1mJhWCuyHaxzcfh5brEKYPGjBxYVfasRyq",
  "key2": "3EBo81pfY6UCXT3Bc9soYwQwdCv9yVuQsELXaT4uLbSa82y4EUNxVfHzZSdDwR8QHZeToAM6xeBvVLxuprgBVhhU",
  "key3": "5MkDe9rvSmB7XYBsKnrSd9QVkV9zBSPtzhUoFLfpewkYYXySPvNzqH3TPvY35v2CRsTb4KoZj8e4V1Ph4GdHsX23",
  "key4": "2MdiDRJZDBNjLnCkfAavoaKghs5JvfqHCDNdKzQutgKf4kAJAgrDQwRhmLV6iekhs94xSLdoVBAuhDW3WRjLmoGU",
  "key5": "2p8Bwp3Jtv7qDDuabbcuGsQVZfyFoa8iNMAtWFTL4HL4GUEi1VgQoVQWjXSi9g9fELs33bbVmCLMSvKPAHDijViT",
  "key6": "2r5UmVBCsh1jkXSU2ZzrNekuRcUT8ToiyyouAB2AqJcrjJAXxXWbinYPi1wbqYHXZPCjDjMA6cn9etGFHVzGyT54",
  "key7": "4TEpR24gat5toKVVbsHWXPCtADvrbGt2LmLE316szTnbbS2jJBvLCMteq5GTRWZi5ciK3E5QYPXMTHKjVeyQaizt",
  "key8": "4yya14osq9VFGvq3sXv8cJ1BJTtjrjBqsADHarHqw1bekJ2McBXsXkyYreK625zrCVmxuC2RCiGvMHQPHGQrZs5W",
  "key9": "pvB5KwRgWLcWVKGGjziuPTJsyZtwXx1FM6BJtG45ueWxw7m2YbF5W1Dm8SPqxjNh4A8LyAE5Bo6sHGwPPADtwGU",
  "key10": "5sHVGRbbucTJdiDjrCKYkZsQBhhXvhG6Qyp72CZRyW1hT4m4RdS8bSzQhLNZCLnVMss8vbvyv4ZJBNawfihCHnCx",
  "key11": "2tF4H6HAq3wiXqJQxcHPWA8aZcLAGqhxZfecxuNdfZfgHCiCk4FcGYxrXYMa3hkVEN9DqJ2LV6ACMJQAwAXpvThr",
  "key12": "3ug8G1stqRkTiJV2bTZT4MRL4LV7Yrmnnzh3QNKbDsSSdCLpM3yZxznaWf74tmasLqcD1ufmCZtB3iL7U8pSRXTf",
  "key13": "3nhC6f6YoVKYw1BTzcbQVtHf2gu7UJxognW7QcQkg57vrvB2NCMSbvuFEjByE3c1po36Ge12mHiNPMNGVv2KvHUT",
  "key14": "5wrFps5hVrFefgzG4roCw3tgRX7rKL5bGKvXTKouBSYaAMz74ma2qkEsfWZLJ3wVt63mQQi8ArE3NmEjWpFeTThR",
  "key15": "57HmkMZqd3RE2cWaMAEqiMsxcKhBvJmUoZNviMHMz5hQRPkPQYV3j7QXxuxYW1hPEaxnVfRKqzpvfUEQRpNe2S4",
  "key16": "2cvHd4KreBboMcBmrp5wgkdKurmrvFSKCVGHyV3ywBUXss4wr8MR9a5wqXa59YzF4MA78y8p9sXauPEEj7U1DM1a",
  "key17": "2NJfJngYUShX4qBb6JxETd4H949bnKKuVpP77kqmbCtaoqi9wC6k5UpibRQ9t6XWJz1VAT6883ypWnZsJyEqWvPy",
  "key18": "211s5vLt2Q7Y96HHGUDF82y7BCvNiJYbsubChRzPvMehdXeSPUuk63HP1puEBdRAGmpdY9M4dR4rg3jUrvtTkoVB",
  "key19": "93wWjR1jJNETMXNFpQRgVopz54Y4F9RidoyzzQdMsK7NK6gEwix7uPAqEgtBF5XfZRo1C13uPeVZPZxqgSDrRPP",
  "key20": "5iwPcRdcEjyh9saqZwURZ5wsJRfzcJzD3TkCi3wUi3WRZYY33xi3k4xe5AcTkAynnSucvUuVMacPujbu13USqcCS",
  "key21": "43mnyavrJitP31x9s3zqaM2L1Dt5iP2cZg4CC9JbguyowjGvPYTRkNFg871jEgVQ5NbEvScpwy5y4ewmJTkLs2HB",
  "key22": "3xqQXEuBnQqsxmaysz2kv92XmQitG4d7VqE4RBat3bWWHTQ333JdgnhmGQmspurZYdAbmCQ45YND1m7sZ31dPSkp",
  "key23": "3y5m9WDYKiYCJnei3UaovPvQUHwwKRCwb87Sb3cUKSZMnWpy3tLkMYjMAUFnQd4qSHo9FMH97yyYku4BBjGHUJHq",
  "key24": "328E1mvBX6Wz7PhnBmJKyAGDkLiasxV2W9CvTYp91FuAdxEi8Kj6Hxji4esqnVQnAcE4Ddj7vGsQpkk6vh7jPryF",
  "key25": "2YvzhNxpXCxqTAGm5mcbwEh9xkyMFi11Tf4xLFLJKVfzFjPqdo4xAMzp1jAxVrLYmj8mTeZCmsqrA9ik46XG7kH9",
  "key26": "4k3yKhetSUT4qhCeXFMQLVPoB4oguyUCemkNn2SZkmWZrMpWKQLdNe3rjtqPXLjBpj3bb34Gk9Rj3RmYDZKGGcVo",
  "key27": "47u8zdaHhDVtZoQxpThaVjr5hFDnSdbJ9mJTv7Lh99EZ3BumaQYQyHPRc3ATAUhENosrYrWmVZEUryk4hdwk5JDH",
  "key28": "5yapFfUyNfDTuHBBtsoz3RKN74EDiuG3mAdyuh7ras7WnQJQPeDqwsieSjddbEu4Vxoth5pEkwQTQz3zRnvAVDUQ",
  "key29": "4zbxWQaBL5Ty6buis95hkyteRTtDwfXuahbRt2Bx9QHXSU3VTBS4sPgajQ6bsNLLC4RAEGZ5CTFtNywgfoKwp5G5",
  "key30": "5XjY7tLa9SSLCzyXqpFzsGddgqQBFdusP3F1SUyWt1Pg4qWBcdVvzBG5CkEZgpznFPyT7Z841tDjdwUSRP3AacHN",
  "key31": "5ywDXvFuawgEH9abEjwncXU6KMVnk12UjBsu3aB5Ebzomyx3DzPo9S1dfqmJsGTqGPkqZB9zAeRnfxVAdrK7shhs",
  "key32": "5E3ZtmRhdjtkP769iPMkdYRNpJK6SoDHpz9RYgJEzscGWXnpQAUmFduBdLYbYTgtKSChC6vPcJzXPJbx9sFR4CMF",
  "key33": "2mBt7ZrdNhH9pZ9ppA8pSbrvwdhUgPr7eZwJh88iNoPYPqHHEp3UhsCXPT4VTe1SePZmpJJWQVHfh1YQZ3DqbmZR",
  "key34": "5jKTujTPVC5i27gCufR8CDUEtiC1Ea8UjiCcBCgYuXcRazxNGHiPDkZwPf4R9W6gKHVaY27nbwfHewzJBkp4qG2E",
  "key35": "3JVkU5bjuTrX5yGvrfh1EuU6u642sGdXAKrQrsiJ1TYrqV6Dmj3YTQyNmXhsxqWnFQaDPsYtJuDG2Nv1TtSoLym3",
  "key36": "64c1LcYPo8ZmJ2PhTQkmDMAnthuQkmvb8ZXkMo2z3vw1tysURbwA7P56kxUg7oXdRcBYwo3R5Ya5w6hptsq8dfLg"
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
