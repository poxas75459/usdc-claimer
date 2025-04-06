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
    "3gYh3cxn9maL2hvypx4eK9MwL7ZCXHJBvojZGLhqzv76BGRMr7FsRfSAzf5UgvuF4kSx1WSL9MyfQNnQkKuj33iG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W8vt7D6sPm6gFx5gdgc9sYkZZadoPhWgSFk1poh1gpZwGeNXCqpFBby62qyWCbca2pJPDN6NC4CKDweQF5UEhaY",
  "key1": "yenzoTRkwqqTBhp4boxPSkF54MA3NPVVFnXwZDDjXcxzvXccPa5b2yYJ9ZRhKPegVZKzdLmQBbNcPCotKLyHGdA",
  "key2": "2D1pCk2hpXd5x4ZSxXq93NTNyP6gkf58haf4ZFXvd5BQkU6gApx6mLJnbR2Aoho6mymDyxpWMznLTR1oH8o6c8CD",
  "key3": "2pRbd8pgXSDS21rSSdsShPTSCvepzftyBLYSBNX1mziW7PvJcCAtxTGtyY236cMy3MH2ntkPrxZdeMSwWNjanc4f",
  "key4": "3w6U8xXthfxR6ZxiDUWFxcp5wdzLeoHAxFvoPQvuFkAzstGvKcbApMueZDrX7Q4npjB2txemcqkYrJpN9mxbvEef",
  "key5": "44193uavLsogu9FgFXuahhs9vDXGpYgoPzYMtZaEEmHzSF5LKVGD65WLRSbfoaqdfTDYhnBjWAiaBoviqcTgaitA",
  "key6": "bWyhdy61hNSoWyLgAD7vUkau7sPcNDu7fzxT5mvrnCNXQGmbHC3DNXSKdcLgNWj7evdk7CXAvm5PTia5sDkDA6B",
  "key7": "2kWCubWqBetKatkrVgxiKZVs8KmhE2oKnR5f4scqXmKBC6rGKikbPQgc2uvKyfJVcSKxptGNSWZ3PtDA1sy6nDuY",
  "key8": "2m3eay8h9KgfMseGSQBRZi8Se855gXmeJXDXkctiKztsyXuMHcFQ9qwUMBeFKcXjtVMWefpwMELWqf2KopGPw7MP",
  "key9": "3hqVdvCPwAfsAD4sbq41mzjBP4N7gnuP8Tn2TGMCHT1gnVLtdxWacFtcQfRW9qneZeMMadh4nCMUzJ5AypBoVMEM",
  "key10": "9kHMkko6jJrAfjzmLXJkwRUY9bGCXwMLAMm8Q6UnVcew2ot8mHvgHW9wMwEKfF1aH8skvnsq2LCcV1pYDPMZEoc",
  "key11": "4t84p55YiGuhoxtdfsBRmFCFUiUpSowm4mBhruHdCYaAUso6bNMeNWq4KByfXCpWV6HizS5furd3FCgduPDCg8BX",
  "key12": "3oeXCp36ciz637hd9ZKjKHq44aVsp4vhGi62FNuW3fisL7ixasTntsfL4c5NF71GYEGHmuw4XrUmxN1jQPMEyTQB",
  "key13": "2kvoYHTUHriyq4ULptAU2ZZDoc2LcZHE2TCZbW6e7A6Zk1aKjbU9aGRN53coJfcdkyCNeAh3nniFbHTqZ9ExoF6M",
  "key14": "xo4n7e85rrF9nvC6GEFTzda4js8HQuxTouSwRyHHqWKpz9kPLPkKVQUVVHeohuF8ogA1fddrPScRRpa8LyBTVEH",
  "key15": "377ReuVWNVargDQUKEmTd3YbYmh2T1k8cdsHCTHZQrdutKZWCNthoPqxJgNP9sCcevgxzVhFWDGBf43VhkYmzj3K",
  "key16": "5YXdY25HyAAoGspZ4pxqC1qmNee5WF487c8v4213qvXq8YayQS4vimkJnyKVzJ82LbFvbdBNXF2BMsXdGsoHfe1R",
  "key17": "44MqUjCFqCuv66wj9zg4W2e5Jw8LCNA4c1AA861gyJEbaNdLAxUCgqPgVaDj64p4Cp1BmNEDJqGjRP2JG7MQR1po",
  "key18": "5QuQ8RJXtP7EvDv3ED6xmkWShG8rT9gjR4NMSZZZtojxwnDLyambdRK1Ppa8oKjmUDy7QDs4uLmozFgSM6q6MkRC",
  "key19": "5khqeBf552SCMpKhrXyRUL4wceUEA33zcfXJc5mc3tdiAVo3LHTe4Ycq8rfi1g8xiH8gWXi5MSXeMFx4SRn2j2x6",
  "key20": "54AAGdcEGnPyPNyw5hzcNsg6mNvxt3A8rHvFvXZsvt1ufYxcjzVbuW4dH69pHxX9HUs8btfo79bKhNFqvTdev9LY",
  "key21": "5VHqh3GmA4gRKQzHAYpAZhBU93KNXddurb4gC6qQRA9u7S5rMXqeSyLqDP2RBCzzuGvKKqfKrotFqnKRxM3XJkYT",
  "key22": "3fvMmce5Hhpi9jzSkbVMR6wpSvbXs8c7CXDYCcwo1UhLbTTrtU97urVZ8iL9bc7aknnfgGoYGJxGqbU9imXLLSxf",
  "key23": "2DNvGPFdbNwjeQLKYLa6CSF7DpFq4Zw7MaX7vBT7Sh3ZPFHyxzStPoeEZybZmaaiz3LffYnDA3pPBS4mUyznur15",
  "key24": "5E92zV1V3qESbG1fJUYDcqLegtQTHqERviks98eznQP8es45MShwn8xnDJcHjZHx4ZP5u2zCEB9MHBfZtABSFbAD",
  "key25": "5DLfo5TmT398ak6LX6gm2GmNdmmuSpb5NUXAkamgc4CEcmshk2xooz67e1Y4bQ3opgjaRsJ2ctBjFHwD19WTieBW",
  "key26": "2i8ofraoVukQYamXhqkGQs6Nsj8kZWp3kGLmDeZgu1ciqSRvsV3DH3GBUjumcfzkE7RyFUWoQHH1BetYpRwmcbY6",
  "key27": "2LMsXQBwZaRRLuLn4WPuqrngm3sB7QWxjT5jATkbyeojb8JsNUjEkKgCZHNtVQPtkpiTnryBrt2RUtfMzxgh9pmC",
  "key28": "smBCvanSCHtbNt4oe6SeveF1h6J1zHBS1DNKW32jP6nMF1CiyCY9rbQfcVskYD8o1kQSStzc15mtx1hhg6EAmZN",
  "key29": "5EcwGfm5VUu9rkC4Yzy4PNkwLMFKxpvir1TmD36WtP6ou5baLYdAj3bFpDmHknMvn3ZNqP9tCcMP4z3LyAHUUiFy",
  "key30": "5aCJdBgV9fWa1VxqyciYxbZZGtby7BBqompFQywaLhfvbETzWJ1GFQ3bx5eYuLBFhBCbG4eixyhcTSVGNLDpjuh1",
  "key31": "2reEHTmdyZ6KjLaAUYRsTWWmYa3pWLhnf1cAkK7dshCaBoYJ6Qz6fRv3pLX8k9rg2dPpAJz7EDQUeSuBgVsN2tWQ",
  "key32": "3p3TGEXTNNHxn9p5KZpK9Da1DcAqMu86D3h4B4iQixk1K2wsvCQDNLeuC9uhcYYpgxev5sg3nD4Xi797Tcw9455d",
  "key33": "4zgGmx6qSwLgKLix7uHM8xdbqts2XVZLnhneRYqWYA49wpH9cU9DUMai8YBqSvM2uAE8dHBYHsYpQ8eXFD6GP9ca",
  "key34": "5g7hzyzTQCbmT4X5tW4ejpR5sjJQd81sfv8MKaBnSsEMDVvhypkZvCCDy748vYeSA75p8UEGz2QgMddnpB4UMpSV",
  "key35": "4jJt6nD4zBCAX21wxjRczNhHxEdxo6J7u1ADZTmACUkAPxPoPMWfdDy855jTX8GgRJt4Smv4Sgf916VPWQSf599c",
  "key36": "5ZNuLnCutMNibJ5WyAgdbu1ue24RSZo34pchoovs8SzDQtV25qqPdcEWf3ThxN5w9JHi65xZT2g4xc7AnicWDp91",
  "key37": "58DH6N6RAnQwxfRRVU5ku3Bu3Yh4jkSPEdu638wQmhaLDA4UnX7tu9cVQnUkJqLW8MWcQx5j22eAtqzmD7JBzo2M",
  "key38": "35uf494QhPAHx4o7RYNWVGp8PAo24Xit83h6ESKBkpL4UacdMTNXmkJFqJSfXjNKUHdFJwbQNd6B4vxnTSSNEZ3m",
  "key39": "4Y8fFGBL95AHgrfirRSGMjJNQGQyqKjd9wG12BHjjC94Ed4uxXz73R8HrRbhJzQyZsgkzPcesMo5chiJFcEYAs6V",
  "key40": "2UwPXMCtV7GxhkFxnACSr7U2dYGfP4tawqa6CU6CNxRK5Q87umCisdVyZLJGJ3BbjsJmEVuC6JYiZsV5a3URqbaT",
  "key41": "2X648yLGWVJvGfViVrVqvVhGm5Da5HudLRUmEamZTTrUDYwYrZP7iP8q4Y6cBadpTqLK1CSCFTjWEJtxMgazbEkx"
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
