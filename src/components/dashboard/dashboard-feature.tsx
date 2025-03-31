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
    "DNJc8Md7LChyhVYiq4bsYxFqkodevu6dQ1PZfYgS93LED3E7HJSTBKQ6jo8kBpaDaojD4cikvTMWRidw53zF8UA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ueua86YR9hXBzTSyPH7dZwG6JCnTwHPAyHvvKytp7pDWo4XdAhMZ5S3ezrzfNod7PqT5zCPgAMmf1TRvW9tLRkj",
  "key1": "2mACrry1CFc74quE69FoS3Mhtcr4aEQy4PNnvZvXabiLKmSKJbCyCkPgeCLHAUkndYfJU9QZU4BKzXwXhe26FFC9",
  "key2": "5YcERGFqyH493GBg4LsC5RHEdVfXJKjCy2aFsCLE2Fjd2DHGxYzdgZEuKsaVxDVWbqA4KgtRpBHzdWCtGFadAyXd",
  "key3": "3LGFoPQoYKk928NtLSCUCJ2gnMTetEJmiG4fJnkdZnFXExy8Tm6Y7Bmjcb25EizRCtSFgq21t7ZvtTP2nBEAM6de",
  "key4": "4woSiEm2FPPy43knuQLeQ5cX1LCVGoBoNy1fTaKz84ERoNwRrmNTpX6wvNS9D2pa6AGiyrgs89njm9817ycwHnkP",
  "key5": "52vRT3hppLa9fayjFUHYFf5WaAcxu3gFGVmHadRqdJzvPSFtt3HtkR4ocShFgej8BCtCH3DGQnP1nQZ9vumS7K3M",
  "key6": "5t68nof3PBLuhHUM7UUCQwXWDV88bVDPkovfMtu2LVXAD949Q5W2npv4AaDVFGh5f9UwGWrfFRk7iu5RjEJ8ZBJP",
  "key7": "2QyFEod6jmjbbr5WGpqh46K4xsdiGrjQuznBiBMEtNm9LnNPdYbS1WPh9YWteDQWbFAfV4KMBrG93B6YHHx14nAM",
  "key8": "37vNS9JVtj7C2yiAwD1CuzQBiggimMNJT6c9QjHsXNRJKTQrQM6bLxoiTNKgPPKuxD55CD7RsqcgKYZPMFYyqed7",
  "key9": "3yGMqpGrtVPtN6oXeGadAYYuYXzNXQyudLJ3dhecTbq9RqXJPk2yoGxV6Tq2E2sZD2pXMrkaeDCR8PPu2bk1PCfA",
  "key10": "AB6nNhDNKYr8LUu4NqsBaabdC5EjcK5F52ecyeWdnYMop9V4ErnrztdkC4sAWhcYq9qyj4tao5sKdPkhLp1JUJU",
  "key11": "33XaU288toDkvGru2XWWZAncfokPq4VH1HPFHuRV3JiLXyMbrfELxR643kGYCxsykjyn21thTPDmLQix7yBTdBLZ",
  "key12": "4RWGs5cejsuLKirxHxBH383631Ud9j2N6rEdwjCWSRGq6XDZsxTgRdJ2ChHFpxp6749yB76GwnPtDTJZDDbFgHC2",
  "key13": "237YtHFxDqZZCfz1RRKrgPGDf35uKDfE9xcL6rNm7jAhqj5YrL4tg6zNR2XvCmN8P12SsufnNttVTVxLB3dWLww1",
  "key14": "4m594pgHKhCwf7i1TDXuNGXzz1zhjg7f6Q2nZ1q6AM19Gq3zAGuDwAYzvjSpaywrHfQEYDmutCt4B52BoaZ4xKit",
  "key15": "5ZEkGDReY4WKCXTtjEN8FchRmzDX29yrWLfZ2GuxF6UYuiu14KGjrY7LrFi9KNMcfJcTx1iPGeAuqF7UmLV5vSay",
  "key16": "3poAMKVjeh5Tza5TF7yzi1HPRWBHKHoWHPPZ8xZUmMpor7VxxAVutw12gAzKWtkHHqUZRJ1dyArbCxyKytnfds84",
  "key17": "4uJegSrRfrs6qvhB47UBqXs2VoQLqga6khbw2e8HMgXCgakrXeLpXecWf9uvTd3qVTiC4ggnC5Xymw5fqUvTvMgS",
  "key18": "63wXCjNn9MsEKTb8JoMSex5hjzXJU41iHJcG1CqYZSviH1RmEcETwEB2hHD84PiJS7HzzrpTu8ctbpcDzM9cGdhA",
  "key19": "kw5oJ7mspiLnXTYkdztPGSQiAzDYXESPotmrYen241c1bb2GsRzMXZuvf5fMJ4x476bfJ7Jd5rz3svB4SBeXyiu",
  "key20": "SYXbpcn1iDcFMF6KXLWAjqoP8gJokXNzGKumekzAVXDGHHtXDE34rJjw6XHqJtDDXyPx37taoZjF4T9mAwRR4DR",
  "key21": "5fPCuyZMX77EibJgUs6fo4sbFD56D6SirDTt5sWC53pygNEoi9ncExPkicRvGonkF1LiVoNgEV1QqM5dJeEUGT9o",
  "key22": "4dtJfHHFtdx1URSNtYkkr8sZvmWAadFx5gFRfd3gYbXTqpnVfxqfLyPDGy8rngBFqNUdhBrjxMgvrCM52wvivpZC",
  "key23": "2WGRJayWEKTi246hDnxkwwAjdkincwc353gi4gLevwk7wGvQjtXFxr3S1bq4zgmVSyjWr6PkQTf4hVbzZPRsycwP",
  "key24": "5JAVKM5RVzErVUkaFpRdCSYsc4t9oTmkqXNcq21jsWUC2EYj89ek8Zr27eugLBmEMRefxBKLWML7TzRYMpSPSmEP",
  "key25": "5orpi3gdA3uFM9eVPbsDKU9bHGRXayJcAv5exeed5wJQ4FjYKdVek9kuXwmhZfuv1oDWyuFu2p3xbHhuT423LuuR",
  "key26": "51H5YRHCtRbo8MepN2hrsYxx9GRRTN8HVh47UBcj7LN3PKz7KW3sq2mZiRBrkUZy7AYCR4HHi7Lf9zkKpjnAK1oo",
  "key27": "CZwWnYRpSnfZT1LudZDC8hzVs1x3af9mtehWnCQnZXxbMUcgNw5B4sioTiDB1aHHWZVPxY2FGu8Z88We4SL1KJ2",
  "key28": "f52pnpS4oZS3k3qxTtbrnWngZV11Q6jCa1eLdBbbr27dj9daNDSVP8PGumUuupBpgrtNUabRGwEgvJzfxX8HbEh",
  "key29": "3ixqWQaDQpGffzq3wyino5jUTHRqCTbTWEJHFmE8jmnhdpV8HJV3A93d163YDkN3U73gugg9gNYeDM25ARRbthQ4",
  "key30": "23zgCtki1HiRrkHNBdrKZUncyJNsTHXHS2MUkG4EzV7QvqL2mR85oc2HUqj59DesQPP23Mdm9LBupWQNF71H82ZB",
  "key31": "47T84NobVLUb37RPAknnVgBKffXsf4b9WnoXxtKa4mfyTCSfNrhbZhzqnhrpLgpnFmf4YiCSeevQkMVPsmXVhusm",
  "key32": "4V11Tm74Bu988mgxuZmUWgxHsVJdVmDAqRynzeioiyioPtQXnEVU1efhYY2QzJ8sudPVcJyAZtekTCoYDWTuPb16",
  "key33": "4BADVgTwovqgsxw3EEfKU9rF4n9BLTvedrwYmVKhCHNb3B6ovcw5prZbPM5iKyGPWQJCBosM1avr8CGfchdvM4xd",
  "key34": "5KCmoctCy4mPxBjMfRRK5W9shE8NSi6sUrcVBD6dmYGmJGNzyQrgCkK4XmCHq4aec2hhMiaZwXSpReXPwuZNqJEJ",
  "key35": "5qyFcKLhUh9NZZJYhAryq4hLyfGKirAKP1LfvoEGtDdVoaBvgyP3k4sKr3MUfwLsdXhaFmWW1DaPLsaXRuaVT7FR",
  "key36": "313ozc2bLAAABuU9K2goMkex6hABoHKEht3zT7tLqAiiT9zS14pjEyPnH1oDtQPofBz7ba6VmdMM5BuFHzgmhnA",
  "key37": "4cgUnxrBaxFM1w8KSnd3xcECPWD8WZsb1dwwrAg1nSXPdDJQhtxv7JcNSwABLMSg29HnJNHNhJwLQSrQM6iNS2vj",
  "key38": "3LyYRzjR4pxX8bXAXmJZ3hZAkw6nEtFb4K5QSSfWroMyzswqcDF4ivTrXFSvfXPTCtcXjzKQZj14FvE7gypDdpTh",
  "key39": "27THkJaU9aNLYeYuR1p1MvndMzCMfBG7ty6UxrLmDubxDAPRRrHYm8KTaZXFXtnBavs65bRYUG7QLTM3gkuzEoq9",
  "key40": "3L3tdFNoLZaqgDVorj97xvbyzdDgEPF61be7e7Zr6NethCc4hTxcUVVn65fpAtN6uFt2xnKsBuFHhm19hPcSRcse",
  "key41": "2492BTzJzSyXrTebBengwwPMA1UronhVnG87qgzfqPYzuHbK4VcdL9UDmuCbz4qeeZxRbF5rC7crm3wHDQpF99UU",
  "key42": "4yp8nv3GYnqFpNSC4RvRLYL4ag6rT3afT3PjPHif76Hsw9pkWC7jbMU4AX4DxS6WnAfUDJZ5nDANTrdjvdkMknne"
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
