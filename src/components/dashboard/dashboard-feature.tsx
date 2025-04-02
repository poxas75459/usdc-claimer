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
    "3dkqEamWzHfwctqFdtDquKPJMEESGDKBja48NMsDe9X7nY3Sok5qtwRwuUFghQoepZ3xVrmA3vwPNSHpE1GdYRF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zn3ofWYAAgmhGtJzqz7vJZ5fxpoZHQXZz3cfD3wuvGPbDoEGKJu6QXdNCfyMjs3T1G69hn7cTf1z5gCzUVtWKd9",
  "key1": "4ubKzGMQXLdxtbpHzhewWYmUuzDNmVFbnqwEP5EeBN97QX22viZc1xeykSjojBfYbgGCfvVrSY5ewqvAgeMcfv4v",
  "key2": "3w2mwcNkqoYCKWu6xzyDZzWKdhgvqyXJDvJNuTZrHm4s5HK1aonTqXxSX5GYcC2o43L4jR8WiocjKKs972mCBy5d",
  "key3": "1pjxjz2iyeubwB5kn8JSrLCswJuujQer6F9dAEvMj42pEQkFugsN8kLRWJs1JYqTspwHw4wQd8WDKz1nrvjW2QY",
  "key4": "3tk6cqTLfYYd8nToAuu4JAXK62GKkbsGGzckGkasJpswH4EzZXKSsx9pcacSnar2KJyPEFdxMv3HWWbKCD6A8KMs",
  "key5": "NiAZbkfUipJgSrVQAduoofsr7anCGAjg5AJbPxvcQUtdMdz2Jn4AR7vWJ9JSrby9m971QjeQm6aHsyaetVvE4ez",
  "key6": "56j2Cr5kkoSrBV6L82UEuaaSUx4wAQCLc1zPMMzWv1jzWPxCrViWG7uZQwX1EXCKPgUepbvfWUMXTrWgtD3CvQS1",
  "key7": "5VRe9Mtr2Tnrf9dtA1hGeUR9dzf67DXhrky7KQgz39vkTQNcyhWgeqLPDxXuKAzMEJj6FbZJC2qUa73veytJuxLV",
  "key8": "673aEhRqCoQkGTdkzPEVXvHxAYT7uewwGVMmCs9RiXCp85CYZ9MmEsmBD6bzMoo57Zg72uQCsPy7kd4CF9GoRj71",
  "key9": "5gdC9A15wXU58aP9bBpFKkz3iX6NEpib3Ns42RVQ3BfL9E4GQiva3DahnHGvDfS2nnEuhHB9YLM86qKeAAnrYTG3",
  "key10": "2jz5u5WVbrkbMKaxMxcnC67cGhVgV1bbaeuYZE4DUTzUFudUpwjJbPQ8wyTUuZbjh88XAfq1oVNhwiwaBgePWSRS",
  "key11": "5fcNbPm6AHk19mkYtv4GmRi1jxYqWPhJddPXKU1Rk1LGH1dixdktyWUpeoEy8cJ8YnQroodoNoo9sGcwSh3UY3DC",
  "key12": "53AbGWekpT3TZL8KYZaKcFwLE2LQgkrknvhx85Vo3wE9sBNTvkp9dacHTBpFMXgDBADDJU923P2HuoaTJm61SQ38",
  "key13": "3ApfjUoZjsMHetQ6KCEi5iErPFhLN18bw6ALWDYpkBXhPpbbSDGnDZhMTjFLonYMVmSwJpskby5ZR2cMynTonrfu",
  "key14": "2rkwAPkzifddUUMFd4V87zUwWQXpA14dUhyxTu7pcXjE3NSodygaU3Ui45j6GTb6enxMwWPDpn6WkMtauA4nKV6r",
  "key15": "5ksqaGVgPWuCtTh7KcZvdKiG6Ho3kq83oS4YU2XjxxPHQaSVdtG7nWJXeABgFNZKcSPkyQWw8LZ4aexWWeJdDaTT",
  "key16": "5Sh4ycgrvAaEkngNqy1Sgc5aBJ3zTDHq1U6zdBakFhkzQuFUL1r74JTCfLCvG1kG78pSjRZrkJGXSSWxz3fnCMwi",
  "key17": "jHfz58kEWEiXv8MpTPiDzEHoqhoZ5RY16ToSBBdxC4pugNmQ13zNLz4gL8U4NHiaVbqDovs6ouXthAurW2cPyTZ",
  "key18": "vKZtKePXMzfDCukWbPB2SnWkA3zweqiEcNvxtvpkKVETqhf1p5dnnJYsDKFMAGQvJdvazxstayBREWcGvx7Xpk6",
  "key19": "4JHk7rFSKKZGuRvrq54Jd1vY3EQqvxhgbghm25Px3togYLE4Law7TBgTK9P9tUQ8rt8qTdNUCwSRyP73Wwztda65",
  "key20": "4SpWHDSzdEg5o3LWf7FX7d8BaakGAWuE9h6t2oTBbpmqxeEfS1ZJ118HQRLuQSgeCyXtWgJSEWaHDVhHgjPabhKk",
  "key21": "5u8HWbLmWnuv3CUzFW2cFoyMWJTRnA7w7Wjaa3HUkqpPvfYcWbK61Yfeu3b4LVvyPmpzW13q1T3NXTGbngrcsjf5",
  "key22": "3wBHG1mXTRBEVh7yhAy1EK7FFZztdGNrYba2Ldh9LLiheW2dHq1Wx9nfc9SJDdhBob9UiYfH5st2tNPqURW5A6bJ",
  "key23": "64GJPsibJ9t15moKN2wfARuV1r3odPxTsw6JLS1qbfoh5PcUPbAnE1q4N7RW4gDLBo9tvwDHa36Z3zqG6b2AJvJo",
  "key24": "5e7aF1B5VPDoLxN6LFNZeqctPkjFkTSW78SAhcFiaKfEBT5RqaK8UP66XpfEmwMzP6RKdP4NkqWWJ9x6udvJkemU",
  "key25": "2nFKqSoLxDJxNxnepm2rjKbwUk76U8e1TBthA1FNSg6qZbPwTYCwjE1CpK9roKS5EmPdpwGT93kbWsZF4XSFXYct",
  "key26": "NvnT7VP8WCThf2sedXV5XcHsSXKm9W7krZXVzpZDGkyyNejcGyw4N8ka4Q5bAkFFQ7HJ2JqWjr3Lv9Mg3xceT9X",
  "key27": "4wgpWB5MgwEDaoiQFcfX4QFmRUUDWiYE3NozLJ7BqQohzfqMmag62cDac95NWNuyQzQxuVrkDN67thqzBUjoE5Aq",
  "key28": "4YUuHnssyXsE1UyiKfJjnCh9GQT2bmkxzaKFhmywc9LWATZUyNUn7JHfZeE3kCHRrtwvvYLqTdt1q1by98haxsgd",
  "key29": "61B9ssFgwDC6zT9uYuU5X63HpT1n6taE8sJ2xTinfggbji7A1Fg2SkXkXp5K5HWeC1W6ZHmBFXMMPSV1Bpr1vsxv",
  "key30": "4xJKHuw2FM4JTZPaLEuJP37bQ7PXNgoSCW5NE9VZcrkpCaJcLxTHWsuF5eSXotkXHxDegqGbSczqPzXXp5yiW3gm",
  "key31": "5YGpx2o14c2Fw9bvRCJTpYzm9ivzm6fHr9dwujD3MsbmHEjY2KM935Aqg4jqg1Uq1hRsTPxqvezGrK4gbDysmRM4",
  "key32": "FcV8atRTQ7E7x3xh747NG7KsutxkzxG1b5f2uqmmEURHv66Xd8DbHVquZRzbCmxGMDzut7deodjwpZsAwSRU1n5",
  "key33": "51o52nDyfgK99wd6HPrEhYp7tp94tB3sxjwTm1eSJAfaGs1811Z3rXzVj1h3hYE9Mr63Wi3G7MTXMkWijPHNkStZ",
  "key34": "5PX32Ybtsg3CE5iJrUVUnhV5H1h4hQ9oWVLtzLN1zcX94LFg2JG8DHLKtQR1WbfZWAMTjGgsGgi7o9hCHPE2LigY",
  "key35": "3gLQHJ7V8vud5HY5yxKMSYdhYig4Kf6H5xu4gE6sKfejYw1Tu1DuG3rEtHSkLqMT6T4UdKbZiURnsdRAD2XrNBc1",
  "key36": "3mMeemxoSgEKLyccahfVv216xXiPZZr7x6DEhSkoEmPEMMA7U2TjqdAkUDPViGJ3vq9TfjN4k6aRt5gjsuReesiS",
  "key37": "3qCn116F5DAWnHWwnBZH8HHrQZh6Jt4zQZtKCuUNbswZAm5jyzro8GEvu47KVkzT15zFh5Ek8bp8rgY5EJqutfJ5",
  "key38": "39t7tq4nbyPgJ9f73S8EfkVa5GZPwNmN2LMc59G58VKcWt4Z7qEMYJQ95QrM2UBfNK6jM72jfTHDG8Y8AMm6Fu9C",
  "key39": "4fRF1rBfcf1NWfnSb2fU9HoS3xs5djBdRG2BhYuBpYrbUbj7uumYnauBG9VZQSSAGotn4UNFG4gBUp78F4DRCtJp",
  "key40": "4aChXmiHF2w2F3YRSWAofY1fdsFqnqhKdnTtxpGLxa2SJ9mHYfArta8ELSQ8C2VfcJdgYSKvAMTThwVNKUCNX5w3",
  "key41": "5W83CwpFeX1UyHU7hoAeMosK6SeeGBT99gEuedAkxKwF1cJF5ia5PJGtESyyxCvRH9YUxmqeeLtdMu12LhwqbPxR",
  "key42": "65DA4o4QmFfcEuNi5LFip4XMtS14ru5pzmBjPg6CMj2BDy52UCvt3yDrtqkGwYCwaSnYPSdZbtVp6ydzp2rtyEXP",
  "key43": "3Nwy5BGqVj1pZKBvNF8YWb4ue7wFLQa5U2DsZmJkRErJBwVmodE6WBHJEnnvPhaKC19v7APKhgBy89piRiAuxwLb"
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
