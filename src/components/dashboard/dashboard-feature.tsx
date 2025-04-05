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
    "5Xxp6nwY7KErLumyCDp19YMWYoXpFWW5P7Q4ckKe47F7iRpksnYNnE5JzWKQ513KDurD5mneWDEdyE1TDuk3PX84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NmeBX1Mi2iF6mqjnTX8ur2ZivTKhxxqkd6j6vxrHhNCMGUkFWdqfZPr1K22bMuc5v8aCRMyrN2z55yNHQbFrHQi",
  "key1": "2REJcigb6vJsLQzV5jQhP4FgEq347ax5dhVkZCCLsYQyoaBSp6dsyhfZpDnxYhLHEaAU2rwXvdj9xPEkBYHAZnMV",
  "key2": "4e2Bt4vRDAiBhFLZoAUt3WrD6fNrvPMknHkcqQ5qj1PZvvEisP7skDS7gZXfbjtxaMb43ALpfBzZsbFpDjdRjvqD",
  "key3": "5TU1ctqBebGwH7bt7r61aF28HcN9dREYEUvTNDyiWfWA1Rg1ukDXkpDaQEpMukERspU1W8pEq3P4Ju2WS5LDQCEY",
  "key4": "ypzHhCwmM22vHvLLaWY5Zr6P7urUwwPsbCU8MCcifTWfMeLbGTQtm4skZgTLTnj4PPpQ1GdfxxRTicrcu3K7FAL",
  "key5": "AXAdwyWKgdZM7AWtD8FQjuYE6ndAqEiihj5u2K5hnLk4e6NnXcSF5rsotAHk6BEQPVLhfjesSwbnXmrdkYhQiCw",
  "key6": "38AuFHwfBYtLvFT62ZeWS1YpA2X6qRgoCQivPpGSdNiZS98nmocreuhN3DCcsfxPddu2DsKjgeok6RQ7fc5yLsh8",
  "key7": "4jAvzMNqhbNwGCR7ehfX98YYNM8jNL8fLGvK4aKjnqc7HfEaskiWhyqWf6URGHXC9HZMJnitpjMNHHnGQAWQYt5A",
  "key8": "4fKvuzPB8Bs2uFMQAAQGYXaVRz7fNUNmg57bq7EUg54CG1gx54rYbDsiWayEXjpED4oBiZeYdqJTXPvau9TPMqFC",
  "key9": "4UwpMu89cEJp7ESBDiJLdE2in5z6Eh3Pn3rexePspe9Uojf724regXs7PXixrVh1ueSK4GB6hx8GA6AkV27tZ3oU",
  "key10": "5aXZPY2x1TW1P4nXGmZnWVJRwTnzBbXd4yzP2Q7Vb7UQboMYdVWZcW74chdPJgSe5mj5CsUeotJYFUSYWAx6fhaR",
  "key11": "3cejH4bcTowydEgW3zMxPFi3wcrNqCUsPK1m3dAYNsJBbG82S25udU1NhLu78inxadYsYHHS86u7B9bSwgDLNwm9",
  "key12": "66JjuBX2BrPuLmTWxvTUTJ8cUV11H4yUW82T1CUCzUxef8xgxjz6rJZWkzwLPSMJnfR4T6sJqZDWcbT8z7yr988S",
  "key13": "7pqYqhkrQSp6wnwfXSYVV4uRNXK6pK3iCFWxyXdKQfLUsqrJ2Doc7burPk1PZQyK2eqJaaxswU4nUnLkD9NqStx",
  "key14": "eUGCUXqBnrGsXFLSmkC6WvbtMqXAzMeDNMspdHtMEKJMzae5rJvsypougcybGx7Kk31mPe8gffYrNziisS3bDQM",
  "key15": "3duZJrSf29qok4tfDqNX87shP3vPtFQvERhMXRe9rhufCPs1bJpxBoNyVRXkgFGEVa9pSGxSV2zeELUZeJANii2C",
  "key16": "4G63tB6qJMVu74ZLPke5brCyzxyCT7yhgNoEwkkkDjSNSaVbeSVWJ3xHEETjXtq3hP5RcxvoCPdzSn4h9V8ES9PV",
  "key17": "cK6ExFetntJuHJq32wmmeLRmQqo4P5MsVALZP8zYA1gr9a6tyRicisQoaKirqTdTTgXSYddA8QPZdqQey2s7u4k",
  "key18": "3PBSjXeXo6ddER8EnGiBBXaERdhMwfFG5LMP5CHAVbjjJ4usiYxUHdTJu7QSpgLHpYeJgofTGbe27Wjp3ezhvaBq",
  "key19": "5qnE23UXaktE8B33m8kwh2tFYsdPX94hhgj7g9FicQJWFMnvkHMQzUmbTZ8D2VoNDzAm3DGrVPbTcLHLBhNhajs7",
  "key20": "4tZq3R9xgw32Fn2M7XLdi2UjWBCkCHhwoYzm1cokffwkk8sd1SbTKVpPpZdhBJH1NDumce2cQGjWwo1k4LHWopRD",
  "key21": "3skPMUF3cqdnFo3GwwrUVekAessgQtJdktLGmxzjCeeY6dJefANjDpo1WJpPFqoF8xE3NuK6umXbaHRBi69HhtEW",
  "key22": "25Rn6AjkvV82vrzbucK8uYSJ3FEmTcwGf7eZR4CGcBt1WFcjtZVDmxtYpNzXYXB677H2Pkan6pM81hDhLJx6Aij7",
  "key23": "3t64aWkpnrGSUUSgw9sCCXrFKqaxH71s86saBA1knPEjtNuVQeHek5gXMbDSUDhyZRUUhtWWwA6qbAa22mF3Qsgf",
  "key24": "5JEfPymbwUG9MQy7D5xGX2x2EN86cHh4cw1MVt5HnUHED3KxUKxJrpDgk9SykqzF62o1GXdD2e73hNHs9VibCz3s",
  "key25": "3ppb8WuDt2etCaNDyXr4CPVQHnLpbjcSkNy7WDRkQVFFgpdnXZN4cPwH7HbPLMS1d8rWhsoBaMFaXFnYgASo812J",
  "key26": "XomNQYqmSPqC43szaxRRrHZuWqF4NygmwKpX4RcWn8wK4yoH8ghQMRSG4PGJhzNwRX5az7zVK3tdeZyXC3zj6ks",
  "key27": "24LL6Zfee7ZNp4Ww3SEQib6h4iaoxkqtRKhFWjHnDFv8thqXTGKKutMkzquR4PzKnfuTqiBUHTZZ44R7ZCtbVEUY",
  "key28": "5yPXnHK1vQRZDLkBZzwwBUAm7nBdPQJjHH5PyRJWewoFseaP1oXVw4pSbribKe5bGfvA9jihku1fJSGaNNqbhrki",
  "key29": "5oXSPN9cJXVDBh1xbs32BVJpdncudeFJ8zP4zUyx2uCGruadg152sFCLUA64HnESwJ1hokz6Qucz5yCTaGx6p3Cw",
  "key30": "39RcWienX6G21ukupAjB3Sv2sBw3cYpdPtFn9FUd1YDWGYM3XsHLtm38gaqWBQ1DnZe3aZByxxGkrbA5J2dcU5zk",
  "key31": "4yXcHPc7iKfVzLpueYgS4Bih7Yn2VVJEcZLWHh4wUwv46BmymraTgDpDvBy8VtfD8QL4FfDvSEBDcewUP3AE4saE",
  "key32": "4kSUUxjvuw1BwGLEPXQJ1a1UWU7DEZYzsy6cjtuttiQBaamobmB8wtkVxGLVDXyJjCJgSzhiC4fWKdLVGzMyv2xj",
  "key33": "4bBqrgXZcvYk82oJnMyPJmaH6dhgsaa9kHHBg3U2rKJEUAiNyVfMU8Po2dzjuTX9SHQhZ18WBYh5pe7v4E2v2Kak",
  "key34": "5oXEtUemLGr9qz9MMhiNQ6RU4z9cWbYFaoShhJC5f56TbH6GAC7Pr2hedquVJxs2De2s4Ldow1CphU8hZEb7FGY9",
  "key35": "5RPiqQHtp4gZZjgigT5si231SD5PkPZ8reAnNMS3WVEbAPorjf1tpDxMjgrHjZ48h7YQeTi25GQuroGT4RgmjmaL",
  "key36": "2icKbkt81srRLhCJ8UrLrnRoeCSTBQhXRDNTixxGKnwrrohLiX2RmZaXhe4UX2DVyrQTP1gcwA1gXmXbWK9qHffc",
  "key37": "4xCCxK89MNpjfxhQuX1bYz87XVZawHehR58Zp4asgMp5t8sEA8CVyb6TT1tR7GzpnqJQtokfVpddpZo42iGdREBu",
  "key38": "5d1NMp1Jwenzv2sgb2XPrHfMRK6LMriD8JMHPhY2wMpQjJ4kzarf8dyLMPiyPZ18ms9GooXTg3QdgHdxRvqGweUh",
  "key39": "4dWgR2LQKnwgbANFPNKjJzLAGtMcdmAkJQuKNGPUPaBhodFxfDG2ZHUHU9BHHn8r5iqs5r6ECRWcJ9ELTwApJeNp",
  "key40": "5GxjZDxLu12LXDgeTRuxmXJAESjiQh2YcnRhfETzCedYsQjTHmPs6JqC6i6S3t7RRVLA73TEj1poUczKRYGzAr8L",
  "key41": "5sghMqPwCRAcjLoPbMWsxR1mKKkB5akyxZWjAsHQcJme3bGwK83FkN81BpQYgt8ox8FMtGtNrfgpbGtRF7k53aFD",
  "key42": "YvQfYEaw57b9b2HFt7zypSoqmQuD9pqmZjLAXQFnDNW3iFvj9hBBd4wGxX9kWCSPm4M7YEiHr3kquMbjhCACwgm"
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
