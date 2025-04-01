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
    "5kcZZJ2dkeNDsseQX8D7tVCh1Ww7fGkHCzYqncQQcE5fTsXTvuRkcVGFuSETAdBHn6nRN1wHi67oZLzFUyQVA9qC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rc1kjQq3obSXeJ5FsXDyr7bjHG2Zn1PYWzYjSizjpCboSoamhSHfyGoKmddA1FVouR2BkBDtPWA3nEWJs6VFvA",
  "key1": "TjPSc6RNxxjbV5mVytk6CLBAtEsEbh7DfuHH49VUVoKN7jpszNbGQd5n4jGqm5nXNhDRLka8LKs8HXjqfSuofG4",
  "key2": "2JmAuzNPXe9p8NFuRMn442Pwc72SmJsrwW8hc98Mk52vCP7DcwKTZPNVGwMpSLRuDWKzYFCvpgNGwTFRTSSWLAgd",
  "key3": "GtKJuahJzFxA5VgBMoYpLBCuP8sHxt9Fqw4hQSaQNvmS9GUeHKXx7PTsf6YVib8jjo8gi1S5FZ2o7BVgtTEGDCZ",
  "key4": "31zKkVLpjUmPh4gg4aLChuyvtPUptHFhTtWVom7rVXtQSpPLRnXoJn8KMNr1gfsGk7h7PgSJYxKn4ParQFvxyimh",
  "key5": "3GFRDL4UXTHv9jMW6qxrefTbr3JYjgDVrhN5ghSAYi5eE9WPKHiVbHCrX6Wv5nrbEbjCkPxtRDes7DqNBm4hy7Gu",
  "key6": "64N87GGZosNkCQccyBMS29oU5g8NWVA8faLPdWdSBUMDkvQ5SL6AaAdTNNNs4EcCfCoarPNGQFGnJAguMox4C4aQ",
  "key7": "5J85pRf45BhfSN9UK87CsXqVhhTkGRBxHvwBTTREeZfKKoV5vM2RCXQWJdUYwvxqZDMpquVHiofFpb7PzRZnbHSE",
  "key8": "5fVMkn8q8W5SkCh389NRcx8qKT9zjuEEXfnsDs59j7vWy4Y6hNNxmxrXF8cNxe3u93PnU9irY26SgFzKzt2nKFwX",
  "key9": "zdzHfjPe6hzSyQecqTF7gwS3mUwMvFL7HoDRVC6EvgMq833nkTFQdwhP9JGoGe6yMD3Wxipri9uevJNZrU9dpph",
  "key10": "4EFmFuhaA1w7AWoQNVWUkd5LVXjACri5k25rWY8edUR3jh49fbccXBGNpULVn8EW2yWXXa91ZgxFLw1VCtM1Lxw9",
  "key11": "397UTQgRWRAV9qxUggRK6hvvpHpXGf9NydJjKWcR8qUvCWuZiFEr7347pYJShLRsAWwc4JaJDvGuuY3257wfCYTo",
  "key12": "hg8ybx35oKwShqGCKdMBgzmXn4jU2kKS9NQEfMCDV1kGYYNcKq9xzCJHTguF8BGgFCZ7SuGRV94dYSupdRZQ56X",
  "key13": "5WYigKtZoXtkh2Ht13SZ8B9Nz6LX2VfZGN2yP1SeT9ucNxbfAYU3qdMEeoRgzAuP6SynTpXboGDSNkrgusya9m5p",
  "key14": "5BhzL3BKp9pponc7Fh8LBpCBfdzoKTdxFpXEsHt59uyxvQkiLK84xDM9GUhi5mH4YWtoNKRyZcAXkxc68cX3EwV9",
  "key15": "2ap2Pz5rbAKVA8FcDB2juAAcGDVbWo8cH4tnoCcQ9tzzzuh9zT5vdWsFFG65EKc4UudqnuAhC5BBidw9EoEwV92F",
  "key16": "4ahHaB7VJ3UvmFk1XRQi1DkCbUTHL9k48N8qjAwDZdRMt96TVp7G8dcL5DizKpWBNHuYCaV97GUUt4B2UEdeXHYp",
  "key17": "5Uy7cewCDM6GG1PPpgvDw99tyhhkj5gMNNNstqK7ajXFUMdBYMoy4pKLmNoafXTdJuDTQoV46QfHEwN41giZmARc",
  "key18": "39Qkn3MgEhWAda2LGmpJ7hdFZuv41QDbHJUXPfzN7F4L6g4PUjHvTB8HFXfM2k7bkugASy1zP4vtT1ByrHTJBQ7X",
  "key19": "34awt1bcKudxe46R6rm9Jn2b4Qwo1bCwhNyNHMjbks9ZSF2CxJwsXyVWBRAXiTD62Ff54wJzExqEYEouVW6Kh8jW",
  "key20": "m94wJpzKvZAUFCbJAPDW7PpgBpc7jEVeBJXbWHmq4z4vn7xR42Fc63YSVsQHMC65oZB6nriCypzkakUs5gJbLPp",
  "key21": "2ysCCNZoyohDEcXNFfPv9CJMDjZ8DMWJs37oN2qaWG3nowVcK46DviM8n8gonB3BShsYA27CCHF2VG8L3BXf8daP",
  "key22": "4jPMmf5qRwFX7cxCmazw48Aaog9Ltm8wYxTDSfefcVqHS8U8a6m47jv6ts93VNk88HS3EJ8PxxWFNXSC6GsEtxQ5",
  "key23": "3Sy1YFieZHKnHoPaAoKrVZhdzFRBwwbhrnRbFk48YBnjrsBvSvA6vGPbebH7ZQ4MusqdZqBnRDexsNVz9ueHjNM9",
  "key24": "GNtpDksdN3x9CaaJ5anWRVQozf68TLLCXG5acPoVHvKVcGfX63fuaYinxRQ6JB8GL14h8J4VV8MevZyyiHmjxCJ",
  "key25": "Uu8deHhiaZ7sboh9gkkFDRP84XUTNvp55pKdW8mkFhKfCSb7mNkZE3cNgd1xc2b3hN45gduWz15YjmdcwJ7F5pL",
  "key26": "2uoJBRxKXYBMgC14oWVrjZqz3w1Xdt2wSwhyLK2m2YXTHQHQMgTC3wrVNATnqxqV8XCn56uHSyCw6PMxo2LShwZp",
  "key27": "782Q7C73RDgsgtfB59912qxYBwfRAFfmSZ1SycmrmxM1TufYgnUXzGwrzCrdM7qW2oCyDTMRzpmT1N431f2FoTa",
  "key28": "5raA2tQJeUMGkDbVPZmMJ9mF73p13CL8zui4vuZp8WhHMAuZYpgjSoXidDp9zap6ena4NtxJ587s3tAccN4KJnzT",
  "key29": "3RrmwiLspWZ5TRZ1UiLsr4SGqVwcvw368jadYVccP5s3eKuyb1mSEhLF3SDMPy5d43cHAZF3GdycKDM8vCgQbjP",
  "key30": "3p1TY5XJ8bmtxyMGz75qZrboKoivBi9CnAovpUcdHMmFBjV8y3155UvTBr6Hw7mFJuW8njoTfFGDbqhx6y2fJGVZ",
  "key31": "2UGRibZDgfwfxnsWBpTS3ryTbc3ZZ5vhgpUctpMv3ahFTTHfv8kURMcJPWVA1AdWYdCSak4xBxW7twNbgh1jqb9H",
  "key32": "3G4ge9FS98znSHw65A3x1SmGMNg2R64gufPY6Rd3inYDC9q1rFMf6c67pGe44mVfky2BgNiqtTE9X6ZXpsHQUueg",
  "key33": "2ZAYfBjf5MKQnu6EUhW7JhCFSJh14Wb6CFTmpfGk4KpwX4jZjqcWnnGtdjK5kKZEYQjhK6X3foyoz1WMmC4mTBAG",
  "key34": "2a9HfURoWjNMyUUrihBJEtGxkcdcywfVxAVvkHkECZXAyX2tFsd5v6AL1iC2bbUi7o1xBYhzQ2HnVciNinPQQyo2",
  "key35": "3wsBAJbfEcT3yE4ceznXNq37aP6wZ4LXoBhxChCksLbCTJtHeBzLbnQfMF45USSiNxTrQ2ujUEK19JWffLis29zS",
  "key36": "j5KbLf7hAsFEYrYPfEXUhLc7m1Dna8w6FMu149NB2xBjdCgeKfYM3irsuTJ4ocHWn9wZEKVcSbKBytGeryES2KY",
  "key37": "5rWskdM2ewhb3C1rM3StSYgbCrcT67CJbUdwgjNbeRBjjG4PD5C1Y5BC9CXdnyZUSbkLXefN9kwTwD8MoWeGS6mz"
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
