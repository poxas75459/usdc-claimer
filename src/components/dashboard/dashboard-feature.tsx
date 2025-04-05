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
    "2CxRkP4wmJqdkDkZyuqsMHUzY3cnDopyPtZBXdqm1BTkDMup1UhPvTEAQSiCPjoSLRZJGqm4iKbMqVJHRY7ZDDWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31S1e9CBw4bj7jingoQX5GLHaozu9QWDA3n2tTwu2uhowLkWmezC1myD2ccnvK7woE6TGSpjFfycX1jK8FGpyMTC",
  "key1": "4Mf6m99mpYRwCBczo7jRQSmymuectXEStmfVbEJpR9fZuNjpWXymGSjezMGA6vVhwYrPdSn1YzVE34u8eQ9DH1Tu",
  "key2": "3sZ73efSqPu2JS3jzQkxdz2F45GophQKTFUh5Y36tCPB1Lym3pRVAn7n6RH5wF7ienzfBgNaDdjzqRoiTTjYkWwE",
  "key3": "2ypfLPC8VVULEqVtRbAkudJvqJyFmHDdJc81e1cQ8k8KzKinZYk4jLm1NtooyUMTAYEpAkQHQ88XqSy283vc6fAu",
  "key4": "3wFGWeXNRXE73rYkvs4SmD21pfKZ6HPLBEPQNnLZANBFRjvC9aurH9TRNWdb6rNRv8CTJRNhRtsBEbKTcnj4xtP3",
  "key5": "sS4VtzQdaHaqVJndSwdrWpVWMfuPw6CwmWauFRTqdr57zVYFHjdWYptSgwczJizXtePTEEdjpHLHnftRaGFb8o2",
  "key6": "4FjhCKPgfx8cjfJVchiJANn16MGdFPtiUjLtfzxghsKRxpuKi8dfz9U4Khi2aQ1k2aUgRcXcixZPVmdEMqqqskRc",
  "key7": "2ATQoFuAZz2gWHq2pds4nb2EaRecoziopT5U5RhCAojXMpH4YnsKpzyWFB5Ww4FDtb65dDanPAc7YTbCAtSSpRFs",
  "key8": "2CjisDRWNbYJNjUJPRWYyjdGcWX7aDW94LE1KZC2SnVUwmvDdng3t9QgNtxgDEZbcMXyCMD87PBNemM5v1PcKeyq",
  "key9": "4YGc8kmseSc2RNvqYvEhkwhWjgLMMQXi1Y6s4NJb8nvF2ZxyGp9KWUXvDseDJAXoj3L3PtjNk59NabtEmspKictE",
  "key10": "szpk6YRzmSajdapP81q4KN3zUzqJVoMDDHJGVruVEgdL5K4QwzDdjxuWqtCX3Kx2Qczg7YvW5eAHwVivd8A6Wgu",
  "key11": "4N7i16FU8FiZydKwrMgN2mCPHGvd1YAS3cksC2C3fXSE2231k4RNnrBaAd1pdS2bpchNKMesubWeTd6BAAQuYbkN",
  "key12": "36cZRSeWDhtwJ1ut6EJG2YFXXiVN5A6KpTpNSigTqJscAbipboNRP9YNbr8AQDkqVMNTiL3MXbudt2AR8z4DuYnt",
  "key13": "5ZMdmEp2RT9PGMn5xTrHXeH7bYhNtN4zAXiCC3ah652772rPs7GDJmPnFdyPEAvGMv8xu7ndvAUCrUhLpNjvmBdw",
  "key14": "fwnSGJoKH3arzWECLUfJvSFxMSwX1aAprVnysmu85PwYPKeAQTJtcQtZyNs7KxxJupMLjmEbMpamFwLHE7xnDvY",
  "key15": "F7BZrAEyGDjsscYhbc8Kiwu7jUP48keYXhqCjqfuzFZDhc2dthkPKW5G8VqcjWbeqT75GbSiuCb5Ki7xsE5vMbd",
  "key16": "Y1MHUmUZFWddwGBmHP2dnehjj8g2aEGcTrBu2dL9RwLeyDFH2ouCeMCMGo3hwoLWbNHyFUvY1FB2WNQGt9ZhKz3",
  "key17": "pCeAdAB9mKLxMPLAMCzWJKJto9jNFHoTdHQe9sZvqSK3Wzeu2XkrxHKtpNBFyp71NCfrNqKcTT6FxsVj7N6swRv",
  "key18": "45zEDukULi8aZPu74We1jncLdwPfuz1kdjJRkwB6ZEqBcckLoa9bTz3YpY4EUwUpefJw98t6zgqngS6Gjvk1rbv3",
  "key19": "4ExAr5yziftpTZCQWHibBruj2HgoE1Z1yUuMuDLDz1sh4AEMGcT3EQ2Y8HMq28EXnWrxrnB9g9CpAzcRBACgDmfh",
  "key20": "c6W577rtvkNtQT4Z6LSYQKpaRQa2vVEPKvV4V7EBbKh6yVsXqRb1w4d7pePY1MEsLMn4Ncxbs6VVNuUzkNqPJPD",
  "key21": "uEEj9MgcjJXM5mRhDmNetYCiw7U4ddBmTaf5VhqddfWwCEh4k27v1KcRjh1igDsZNdzh3FvL5gHDPg6Wto5VHFY",
  "key22": "P5NnKK1tBL8DPQTxTARSYJnNhtevRSJ83rvk8Wv1M12HcsuzgmkDsRGWHGFVE3mV6oqmAJwtit1aoLLrNELw8mD",
  "key23": "2Y8Sh2RQfT7LJuGMmz8Dx4mNsw3PtaDUfxqVZP1SWBg4BYebMEWMStEtHNAFBWDidUeJKU6Vtn26PPV61iKPfQqn",
  "key24": "2wrsX2tbdRrzWRiB6LPaMUbpQgAw9GJjigmsKF1GoVUVMK7NqtHceZdgCRAPvhPCnFHZ8LjNWPBK7Z2bcRgGviVe",
  "key25": "2tQPq958kQ4tEmf4Cq3CCFUBqpHdGMFU8DYpogH2rLh51EDyPCzbSL58ZVR5zrS5twvuS6DNcEhLC5zLfdgJqxiD",
  "key26": "3PeZPTyv4YHR4zKoQUXWg26grT22BTBuMvE9ceUmQdbWhJA1ADJ5UqHLSeiywqPKpteB9ZsTEtRNbuXaVmxhvaHH",
  "key27": "MGy82VtXsr6BBbG6MQf4VHqJJ7njfSUMdjCvna5rkL2ZvHKG7QsDWR7vn3rmztxnauikPQ95iLfaqwApoYHEAcu",
  "key28": "2movKBLMz7ivewBmqfbFsHP5vC1mUptVrtkE87mU1poHVaq1VSqcsENoUx12ZuARz3G5sxf4aWarncuDsimsTsGr",
  "key29": "3b7tbsFfWbzaAKpC75c99E7w1qUaiGTcHXZZVRKsgC3yw86deEt9uEfsGLDqExr3jJRGHbMgyrhY5taFoeMHiiYD",
  "key30": "2jzonHPmG9xr4hqR12nWTuz3UqDogN5TNfuQADZaCTso8cAnWYdc2r7if72khWFRdshKUCSxLvSxmX7yeZWbpiQN",
  "key31": "9hwRrTVGpUK8UCeS1LHraKXauKjY4XnuEdZdeFnJaLqR3xzaBSbGzSMTaByuh6UQCG7GpXJ4AvDhWv9sE64Fu9p",
  "key32": "2EhQswQHJBcpzTGXjSv31txUKjK1puExZ3LabAybrzqp4q1EjDTFkKcCaur1zWACX3ftR2nMKH3icnGzKaVL7YsW",
  "key33": "tMWuL8CLm4eQapCFwBhqCeDju8sxPnWqUEj3LrcRXVJ1WRw5h94UiUVxs7hkKVpUyFCbdtcxFGnGg5AGcRBCJXr",
  "key34": "5EhtSJF5c1gHxCV5VW28PsJrcA2744nCTnYE2K5MsgvzJuUVd8VknxnMauAj26Gf2nshEwz6rorQKeWTuruPZ4mn",
  "key35": "6uqV4M7eXaBg3uDE91s4Ejsi1sr2xycjia7S87mM4YNGr7mL4n9CjERyM1bfNnCV3FqWDBZqKEHQvqkdX7QPKfL"
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
