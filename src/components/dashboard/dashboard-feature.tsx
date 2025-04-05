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
    "Fj3zk1qhF3utEy6uJ15U1wmQ6GMpPZsvKw912QNZyExYgJd4qHB3EE7ieMNapgHe6JvrS32kgAbnSHEgEmjFrUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XSymV93uWCW9LvyJCyyeTaDvYYhr5W3Nab4Dfm3cc9e9xc38zELAjpb6pQT7CCbrZL7jh8zZmDk7rNKsZofHZXr",
  "key1": "56bW56XZfnDNuaWVasurjatKc2dkqQRcUYoMbbPRpxpub2Sav3AyM1W3FD1DzpD63rNT76iVqvDztTyko2kZv149",
  "key2": "31ociozowYyztDgk1co9E6FyaXRYJUAK8wFMnmrgqs25i93y9bKciJk77hdkG5N4rxPtssGjySTpzD4XgGAZnavu",
  "key3": "3NF3PXyU9SL4wMkGNHpYrNgp3fVAmncFkwEbaXdiwZEtLed5M6C2ghzLJWvvUdzQowAQc6MrW9KakYhk14XzW1bK",
  "key4": "3QdUnmCudTga3eQGZQj5e6BsonWwqgFYR7cmtq37MQ32vNN5CdMV73dHJwdb59u3nAXYQ512aHtZvmDw2tZLppuF",
  "key5": "5oeBHMASKu6WBdyt4S8iGNNvrnGeCcGnRxL3vELm4YyNE1yNwY2XsLFSX1B5Niho2vWkmvA7WoBrG6bceFxK7RrU",
  "key6": "43QmSkb26q18oowUStRaNXZKUuTLxBevQGZHCZoucnf6Vmoo8v4JSQQE6yyRZkjM8Mr29pScskYuJgSqghCGF6XR",
  "key7": "4nG1XQgmyXoPMuic6ftn99cknFyNmzuAir2rRLwo8zMJXibpy4szNRn63Z6ZCCz9rxD4yQn7sH52mpD7oWpqN6hd",
  "key8": "5YZDRKEohbhe1aRuSe6aTQkgYh8M2pajXMeW6KEeYeYHa6gfrGWFipWS2pXnQFE3zkh6Yd2MwXNaMEJ4njrnyDe3",
  "key9": "Dv1V3ZRDCAzC1yeug7t9iT5zcpoje3tRcM1Pnk6A7xSsm4yZtFZ6j7tjYRpzhdU2hFt7ediAf4P1q1RrkyNHwKY",
  "key10": "9EDF2tdEKAgV5Lv5EsHaAGP2PrRhxcGedaixuUYj1woqhZcxkMxHKwpoPgrDnm5KqQzybaqHy8EfnmtcdmPLuyi",
  "key11": "2AzwhE7f8gwHHDDWpZti9BBTZJvjgLv3unebHVSW2TMQfE17eq8s51TN6dR3bdyU3GX8rfFThUEiYJ7WZtiQqTLP",
  "key12": "bq4W8hbuYztFz7cWNZWqhRa3BfVtZZ7Vt4ttkLtY7vCmhyYzXRu6cDtqgGsn42DEgNoA9Ao64EXfmNbyYmB95TB",
  "key13": "2ukrjGNo8m98tWo46cYvWbkoSyA4vuSW65Lr2xZoaoXXhivUh72mojAJxFXr7e6kzTgTN6RkkCfbexTBG4nznQhW",
  "key14": "2w5XdLarfCTZhWrWgndcPL6mV6z3pPAwLJav3ZubGqP3P9LfiaAsZYxQb5arD87UiFMm9nipksYN5v8j8RBGmmq8",
  "key15": "4UV7PvEujAccic3TDaggWLLoZP48XVwWnT39ANMZd2qDH9dUTWEf23Ag5CqtXK4uRLfPFtuZ7zttg5UWTveX7Nsa",
  "key16": "2rjT4WyS1krCNgZwGBRaMUirFHnh9qwvNiC9VsjfqkGWUFmBjTTkX598BqkTvmtnG8THZ4EKGi4bvz4a2PCtzcoL",
  "key17": "46yExyd2GSE8H48wzAb9GFSbHu5WVatmNd6RUopM6eaLtCxsekBvsLKNUoV4SJkcqnvf5QB3EKZRePfTQxu2HVzx",
  "key18": "oc1J6w5d9j2MyA4hU3gsipAjMR2231J6fGk1qbK1ASUZF3bdzXS81sbw7oRLsDoUJHf5fE4TwEiasWhHQ5YnWTr",
  "key19": "5GcM6nc3Skmw7pahnLSLJXZWv9NVbgxeJWpjHPeLXDaSm9dFjvsLJ1AHyjTnjpEMggvxzFneQd43PaWg492miQbQ",
  "key20": "5j3j5jzZuVaBnmsZRfQ3ikNWThFt1VcdPFhjcDWDyffCarf4JWd4VyBAqWQv16Tw8h7Lm7sWwBigANhN4STaiHQC",
  "key21": "3uZ9HfdZ9QvSVHiyPLHChZrigyoEc5nyrcAFpbX74DvzumQ2xn26R5J6zokELn2QgGqDad9RWsfiZkj4iAzWmhKf",
  "key22": "3vbkmKGnqaLCyhepe4114QGvnm8kJuPC7Ek2S4SaVGRSUaYmiriecBfWymqTokg4mPBqVMX3kmQdMj4bjzpUkFWN",
  "key23": "4KTgr9oDiFuY1BmQ4GerigLSmddHbXFa2um9pwPCmfyHGDFWUXg8wqwz52kh6WAined1DJhXQMRg8dnpLnvuNg9y",
  "key24": "4WTeZqqms4JHeYQvvuSZAxvvRv3DDrLgZzUwUSoiT5eDGkfpau21mSGQqTkg12vrrQXzgsQxJcQWEFezBDbP2nFz",
  "key25": "3WrCbinnDoh4mM31SFUtJ238mHR3Tit6zwfVzstD1CGAHXTqLsrFCizzUnisUsnoAGRboBf734okF6WB86VExUNF",
  "key26": "2WHJkDAETK11dhcN3XiD4kRKDcYFL7KEQhuvJWV4iEjW8TukS2fLRaZN9QNCtK5smXpoDGHrS7XiVtMqLXnSMcGk",
  "key27": "4Q7V5ybDFVcQXiGdoyHawWpQ8EMYFJmdMMTXp7Sqx7PLbhHTXpmTq6XrxJXwqgkMBeAqnBPLpnuBtjteGGd2oQMw",
  "key28": "rhMd8WAFH6rNf91FTaWoEHbb5mwDiSpuALCsgSWy6tnhzFFyWXACFQLFbEBoRYwuTQ1MQy9kZ5dWj5VQGHeN8LH",
  "key29": "a8iqbPvVTPECKTaDGnYko9LbHjps3x1ggQQCdX1t6amGKyeuGxtNpBxymMGTvLVr6DjVGwzQQwr7f616M1cT7Lr",
  "key30": "3LbhqVzvQUs5anjwNCap3Tjg182nXcLuvjgC51f3q7vDtaDShcyxDwfpdvAnRFztcLgKLm7bAQ5mCqpM2aUqV4E6",
  "key31": "3rkfP5oDXA72N2jjZK5ZZisi3zZvt5bNL2zysfpraRq8n7jBZwDV4rzHXBg7XVu9Hk1vdcCyVRHfzfLvJ4UjNkqL",
  "key32": "3WLCwzWpnzPpQv82qLBfnTws1x5qp35YAargmZ5gEq7jhPCnnpRr3EBZQDTjjmte5KVSzGdqs54DyXG2oMWneFaL",
  "key33": "1LAF4fiDzazMV4uDoCftBNNUpaHWQPQmbdFuFLn6oeM5E4hg2Tq5YaHnjWkhh1M2ksi8b7DkQkBfaqDi2vXdy2i",
  "key34": "3ZVcPhWw15c3zfXZMu6hMwV7bB4qqCPbkTYjH7rNbaR25MFPbCWSJvkLwPxGdq97AsQ2BaqUqtw2G7ge6T6vVWKF",
  "key35": "5fz8rjLxyZpV2RtWPbUacAZ2Y3DG8dWTNy3AauhrA11ezxXmzxLScUZbXE9pXSSMAXkmjp1ZV26Z9qeaHkvW9hin",
  "key36": "aez2bwVLxYefoYXyG6gKapiHEvL25f6sYYnFaWW3ypX7iiBGs8oBjxL4Afxf6k4GVL9CTSchrs6AMK4jVPAZTCe",
  "key37": "47ZcMUvMgWRsMBiQ83NmXHV9QWWJYxdASWrPmcViovXxo95dpgdhrAPAEBpKkxyfYrv9WwySY4i8b9P3XwWWZQsF",
  "key38": "Kd3VVdyiiRaECkfRwkat43NpkjoC6o8QTXuJkH9UGH3624cHP5jotvsCUF5mfogQs5kgBwbjjPHswm7rtRsNTSo",
  "key39": "53tXTj4YuBXqmCXuwUoehCbk8YRye7Bsb1a3x4jzdbqjskkUscAWGchms8pdHnMZsZqn8wVMXbDy2oDSKrnvkyPL"
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
