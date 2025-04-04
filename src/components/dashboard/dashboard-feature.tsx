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
    "2bYKrFf8N92Nig5aiqFVsjkoQGdEbzAHeyxYYcum6rHfdyfaRKYZM9ZFKRXrMUvzMhdfkKf6nFdQaUkv9GwHVi9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44LeF2veMvWpYBiYbtEQC7Kzmsh4Reo62pAX2u1gYJLDchmQfNkaAng1MiWPyoLvQYR9cSnWW23Ty9swdfn31GBP",
  "key1": "3onpHjyWrNSTdPHGK3FNbZf1CojUN2vvHgtvhNHgsmLG12UzTiMcJihvpfTdr8Wh8TrYTVJZuFRiQxKki9tdZMzr",
  "key2": "3LJsFZ785kM7URBHfcoreushjcFSwHBfpyX1frQMg595mmcNpR41W99DsVYHJzecWAdTMByZbWNhyXk7RjpW5JPW",
  "key3": "4VQAyYYhJGNsdkqPpmxDWCumNSr4ejJNiFDUEHfoV6iGe8aRdFChd8zTTLrofQJ8UjzuVALRagr6yYCSRaA6iiq2",
  "key4": "2oQCjy5b4aH9p4VWcGseit1k3y67o5GZTVAUScgtZHsFWZXm1A3oKpPzt6NvrHpMhuT2iYyrmzPzp2qGX4z3n1z7",
  "key5": "5xbgT2k72nhDSudxG9NFhBu8GDGmEVFUL6FAWZS2xKRKw88NAQnUo5XAYajXG6mW2Z5fTD45iieriFVhdRkDLxZP",
  "key6": "2Stp8PGZCjfZnwdYu5yTJuSGYaUiWP9V53X8KnJcdTs6qVzSp72ZLc5Ss67GEALT25ttJ1YgDLwLZ3DfvYyk12LM",
  "key7": "4SLW8y7S1o6xsaB4to5TNYiYXSrwghVVwKKXQyAUvf1s1FGutUq638JBvQGNiAf16mf7ryti8dyLyjH9SvgvKiap",
  "key8": "3ZwmXeZHsUxMM6gA29EKCCh3AYR67L9KzPf8s3ZH5Jhn9GfFV7freDyc1ZJbE6AAcjY2ymrt2KNhfwzatFe96RWZ",
  "key9": "4BTRbvZegTJ7ZQKQhK5Xz5pjFxpcm5m93PBap6pg2vDFR69DitwowoLvGX6RWH3fostJEVrCToc1cmbLHi3LuR34",
  "key10": "5MFBMbjDi1T6mQmmDjrvoSjsstLeb1BQnxiVWipcoN4ZqjTKFmcW2tZoDrmXaPb1aLW7D7EyuNZQfbWzodE6nQDx",
  "key11": "3gffneAHtZnTq8t8H9uRxxMScMNnY3aKZkSuoiQQm5DTAutZP7pJbnfkZa9KQDL77Sf4mtk4P9QzNiAobY3tgxAB",
  "key12": "3ns1BjrVkTh4WeXkJdAYLDShcVwksJeYLdudDF7uBvY2B99V25PpgQm6QbRM3vGJ2Es8YP1tPCEW1LvD8hTSr9zL",
  "key13": "4jmbP974pwCzW6iQ1LsgEXV1wXH1iqA5paGTJ1DEkbPcDS6Wv2udwT1oKCN1UCqse1dZ6TPzScvRn1VCLPcJqdT9",
  "key14": "4kM4xMdNCqYLgn76zqVjENafUdqYoZcEV8Mupf9ppdSBq29sCdxw3Usj3h3xBYxpuDrWEBDsAbfUtJwyNz1CuLa3",
  "key15": "HsUa2uoztXhYQQzQ9cfyw8WcwszTBNJScTBG1paibb4c952cbJeV2GKoGJ8WxKBUpApf4iwXiSj53UHoZ1FJBtX",
  "key16": "2exBEpj6x3T9FoTXLBHCGWVbr7qiVgtNNA6Jce56s8Z7bwLQFZsYA9KvTju6Qu7HPnLDV1VK1k74j5LgPoJko6SD",
  "key17": "mtXjC8guTmdVXhBUhAStiLHXU5uJGiQ5yLzcGkxpD4B5BxqpDfhJBDPswH5Gr8ABXcRmDDbpQFcFJtMHdUsVCcy",
  "key18": "ZQQ6fZNTPsT6WW3Ze6xLRhyPY55BgFnE895uSTXPhgAVqANBS47aNetpb335zxLqkud4N6RCAyxfRumfqUaFcxQ",
  "key19": "5RJhXQvRtjQmU47e8jnC22QeUZTtW2Bxzi81LoMtQRQiaFZA66ay2tNXF92vBq6bt2SsBdtvwKmEWkySKtKvRt7R",
  "key20": "3XWaEZFgd359qFN7TY86FzynSKBqyJw8E1U3fW6sLwH5kNj8mtFE4jBCTE9gmDt8H1ArzgmSt2JtrrQbbjWdCSk3",
  "key21": "5pcb94WXhe9V1M8a9nb1oy7LAuwH67z62AHYtYFYoZXjMkqcRWJyNrTxfaHHP5d6ScG6wrieWKL7iQN2DVoFaig9",
  "key22": "fANjZ3uKJAfoooDWbC9hic1DZsCMfN6mcrvXiNoPSFZp33QkN8uuBLBRia6udskAQhXr9PzEcdrPo1HddPZU2bF",
  "key23": "4Jgd7RXkNP5TfH7KgjRpyBdFP1ayhrn86AHGFnB7b239szsNfVhfCF6a2fxLV9PZtkQVksFK1eZ5FnuAAdHZr7Wp",
  "key24": "dQHcF4iZ9BwxyJTrWr7e2gEjPiMwaJFSs1geNBCC3NqXcFYj1Cxy3LW1ZcAijCZoL9YAqhyGqmrpMbQuSggJEts",
  "key25": "3DkppMkqW2rfdaJZ4M6fs2FuaiuXFZQ3QBVdTRAkAUZwfboxqdekQ1evtNVh6qtAcsXZomsBwK1HvxbYLRoD8BCj",
  "key26": "27qmzmz2GZvfBP3tJUGuMfabahGcFAMDUF6tiwjAjhnf8TvuWwpZd6Jbx73e8CxCKD5AQQab3zRwXEFFWVdCVz5c",
  "key27": "2ngRkRf6LmwWAzCqoUZEv2bsPfMHCXpNGfiM17cEXxTJiiSpXW3vHpLHXb5ZmNkS4kg2dMGXK3oAdnh5QBkABqC5",
  "key28": "5qvx3NrBPNoW1DFRPFeJJMXtCPkGP2S5wRdCiFdBEH9Y6c3RcHDeN1j9ftcpEBvCdhc7h9vNhmhyAMD7mUATdJfC",
  "key29": "2dsz2it3LaXxh9Lp5q89d7JzL1xk8wt84ggELDAbyvAz5LcSPK4SQpH65J4XXPJUtG8numd7ugC43UKdWWZhWPk1",
  "key30": "5hW8ge3MzUMyFn5CzgHmSm19x6wmTGfrP6rGELEMeGsPCC4hKLqoAk19VtXTaMgfFFsuEXY2zPEiUEUZaHHL8P1z",
  "key31": "3k48uJbLuuuBn94ZwLaMn7rqCgnmWfCnNnqReELRrVw4Yn3dymtW6YmXYQf8ZwyFKkUzjLgXumVgV3CUM3wL3HdL",
  "key32": "4sReXWVZevJWyupfn3vNDRS73piZ9F9evALzYdtv5LWdkLukMJWcvj343P4MKJc3kWsajgFzCYHxkYT33QGBSkZ1",
  "key33": "Nxya48dmdVznbQo8V3h17nu4dkuU4xFinGXA43oJDfptCpk3pg8uxgTzqPHgXUPWEY6qBmJ17cDQnNaVQpaMktD",
  "key34": "2LVzL9q3v1gHpL4AtoiBmWZPaHdWXZdiztcXUtNMUtXPtToVfGVDAzw8nSSRjx5eiN1yTa1nUsPdpQC1xBLu3C5D",
  "key35": "4soEBedGtmgs7Wt9hK2mBQaE3v6KEYAHMwf9kyU671xdch2QGhhtT6uerWQXt9KnzuZiqhPJbNJjGU2yNGXSzC9r",
  "key36": "54jSThcqYFtkVCHU6sir8c6YMdvGPbQY99BbTo1nMZoPv3gpwzfW2NF1pNLXuc1KTP7WE8PHX4MUbQZcnrXXGDHQ",
  "key37": "P94UizWuHH7EMYYf9EyLLvAQEcYUyS4rvGBGkDkSSdThr2RHazRvqwgL7RX5o5jdvUKrSymfLewo739JezueXQ3",
  "key38": "4JgojFXTqQSqgq36Py8WGfFPzvBvdJmrMuXDJbpAbt8Ljfj2LSeCqNVsqtmcrLbWoKcV7dLZQQSBhRM2RNGRF4My",
  "key39": "3ztvZZxqktepgcLEoH4fNUdSBbBfVxGJoDhTVuzJ9RZRRffTzvi6hK7EXz444o5SFQ3XTvpckj7XbTKzUNdM6shy",
  "key40": "kxGnq1deruFRLJyMP3YHT6yNQVJpzZn4CQtG74DasX2uwhZZkAMTZwuCoNVRyW5ShVXfuNaVH4Hw6cvHKJjPSNp"
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
