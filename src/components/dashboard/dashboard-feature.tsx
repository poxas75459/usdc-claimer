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
    "5mSi1GzLwG1zXGAYEmfHg1rq7DgZLRXjsiRHwwPyd8q5b8NziafWZfpYwGSGKjM2z7vYDCUfVxy2pz4xFsrxRVff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oF24PQDYS4DG8TUMvrBLu18YkAf3LNLEF96KmW7Wjv7nPRDTSYZ17zidxv4GqYPAX77RdkyXArK1gPQziucq2xw",
  "key1": "oDTvE7EhVt4KTcvXn8XpL3JUJdCVbf6i65N1xVPDx83ZZEKcnBJg1qAFcCbeqVqWAunYmioeog2sfLHb5txM1Z9",
  "key2": "4s7GFfzueSMZANJn643MEYpnQriaT9qx6k67PsjyoeB8UUiAnSWSEfqPviw7etpqbub4TH2dRZrbbbMFj432UDqQ",
  "key3": "2SsD9pVNnFWoxjfLKyQA5NJe1i77E4rydrnz8ZEjXaJcw6pBMtd1NzBsT3Hd6sugbQvXUoYdUe61wiYhED125nkT",
  "key4": "3X53WzPbwgrm7mHuQaj6zSCqa3vxY66zegAquqcPojk5ijfcrZf4TpYE8B2uTxcptUhvBioABhphwJXPGxpfoeLu",
  "key5": "5YGYhkgMVgkYyqXf76bEZSgARG3gZ4ACSqWFq2ECQQ83VnjVDe8EQyjU878VTegAVbmrzS6MzLGegiW8fjEAmTvo",
  "key6": "5vxUx6UGZZLokUbwKsxtnEhebmg9NrtjUfqwgK4mD16w9xg42uQvq5Ke5HEhWnmXjxBRRQqS9gmjTTPJXkXU2qpP",
  "key7": "5iKdMT2kiXyP3bMu4xf5QqzTyDFDgYsLM4aPVkce9YRhZLVy1AecGS1aUMuLH5xAEnJnJSxYsxUYmjpuP9RBvDLt",
  "key8": "3Jnzjs4wwcTFfnoVGYajnEF53nM3ZofBT7skgk7VNEhw8dig4ehA9yDg2B2wgPTbZWAums12TwRbYRg5buHPGj1a",
  "key9": "2N68C6rEHyFcUA6WuX8opZuE3fbh1wTP99MVPbn8BzVZ7WoP8ahZiLDc599STksNyxEh5mZvN1hJA9kA17jr7T19",
  "key10": "5Jv4qforGyeYvd3tKQJhj2CNS5BUq6dJ9b7ycFoEWwKPF6yuftUooD8vnaCk6K8fqwgLyt1mXapxBqYBJc9zn28Q",
  "key11": "34U8yUsu86GG7xjLBopRHWokXuPaKBHadWG2oQXHZkVp9jJiwBXcumVZkGe3buVCi5yLJqtRdTborrRyihvFZkpE",
  "key12": "4UpQEt4zhBjP3Y3ytMK2EXzXKzW6ui2FLQojR7JpbuYjeh25ANHSBjRwjCJLd4tdFvTd4nM2xiSir8F2qPsRwVh8",
  "key13": "3RMeLMEKMow3VBdMGjiWuB6nhCXL7Hv7n6KDzNH9YayoFy3hMrA47Kv6FpvnTNJJDbzfKgpS7Ri5sxzou7Sbkx9S",
  "key14": "4SaMEboBMX9ThZEUcSbNAn42WqWUWbhJg7V7udJFxMYrRQtS5kWDcBE6ZoXvgJsCi6oFajqSuky3p52XqDwstBdJ",
  "key15": "xNmGdv8PZ6Sn9m2UiLP19qQCKz257amMoqGSZLnt14BeUXWohe8wo4uo8V7QKoD3h6pWTYZ5Wa5GRFh6J1jWJD6",
  "key16": "5mRThgfRwBFdV3FvvPFZJ5eMQJPPgxkdETk6xBeFu68iuRmziepZb9qND7wSx4wmkNhRg92sh3Q7YnP8damAFFu3",
  "key17": "3iEuymuDxabwxTrGiPEudGCffXjiQWNy24YPbs5mGG5b7wX3AbBaCUsWHDp2SPedMyS8fRdoR81DVP6uQSkAtXGn",
  "key18": "2d9TqnMuBc5Q3U2yfzjDNtRbLtr8EsFqLqLSBTpTUGNB11tLVxRbYoVYsw6pME6dqNLLFD8EtQLri8RjPgoxFWht",
  "key19": "2HCvETRZEQpc9kiVPsG9Pt99dB6wU3EHewJjYVrXvhUqhW3HdAAST9cbfBTUALihFuj6wtGcyqN5q5rR1PwpUpQw",
  "key20": "WnvXk5wZuE5QS8nm2Mz5ZmmZ8X6aKSxfBzFytLQ6t2vmoNg7TeeCcBwrB8jRDAMbhAymo3XximcSbZnsDidwcPo",
  "key21": "5YxECaKq5iGyMsXNGZoJX4ZZx3nB6ixTqXxAaoqvC6o1QuEn5KDS3ty4aSrDneYihX2okA655UUbzBZrujUzGCMb",
  "key22": "3KjVbNfeJux6V1Rm81WrW5xFMssJ4ohTAWycvBsrqc4UH7zqujsvA9VFJjXqnHyhwDgQwLfx9Cp6qgWeYQJDi66Q",
  "key23": "Mp85ruSLAahQ98iaVeFqu2kQsqiSsa9a9FtLnMR9srV8M4DispN6QpTMmutgL3d53vT5ipfAktJbPoN2CMsWiiB",
  "key24": "21bzzp4J5vwdd5fwLq9zqPSgT9J65jSHThriRxCimCf6esUa29w836qDHXFQHkopWfp3J1cqpS5J2RCM855YhpRf",
  "key25": "34yrTNBHsErMNq4h8MjbWnqdeGY3pYpLhEEdVPvhqErtZGzW3cHXQ4XXMupdNVoFaQybk2uaQWUuSDcRVmDS1tLP",
  "key26": "3gA95dbn3oob337yF2xTnAb4N6Zg8SbwsxyByb5Xs8S9TE1oMZNYdeRkvdqdm6GENufSFVt3CDGxu5tcRbWC6XgG",
  "key27": "4btFrADoAKvPr4Ac3x8Ns5dwbCwnAvisV6HS8UBgrjerfiL5VsXRXgC4KzNr6sS9gjyWyiEwzncbRyzJrMhwpLQB",
  "key28": "4Zt9YkRyiS56463t3SogKdn9MYV38GndYKgHkXHWK2Tp7YZyAEFKtSRiWUvBqbTHDjHjdbU9U2LvP1jDdsUd41w5",
  "key29": "46KuNuc6oxL5wkiu64gYmEnrRwsEp4qVhL1NWdfcWVwh87QXhQhCpwnbEtRKCYrfkTfJBSvipNind5ZEx1zXX6K5",
  "key30": "JfU2fijrXaZNCVHfvL8kker1omgWtYikSLF7G4FNLvsCdHrux9jrHLNumPSYc6cVouF3G2Fu6heHXFaAcBwVYuM",
  "key31": "3muVKZMGNKxpSnaw1pytzULo2KfQqsMzsXsQfUfzccT1oCWTKA8c7bxctymQ7nqJfvr7bCdX7NvDrnavDVc3B3DV",
  "key32": "55B88EvZ3YdL5cGmk8wvtiG2W8DE2RPbecUg6Dj7Q9hRXrQYRmjpTbv8p4cJncnvh2RkLaNr7kCLHMgstZQ3iLzC",
  "key33": "3VipWxhZapLY4626zVccCQRnvnYrt2SUVGdi3dF2kcYR8iBi1RjYpmiUNHpcPpAq4M6nHHB29gp38YKjNyvLNUMA",
  "key34": "328DxqZQFaB3R9L4ewAwcCi5y7poq9oyTYKPWA2iULWX2rXHfWqBaEKrvxsuxBrgwJaZ2Sks3kKkMWf29FiACgQU",
  "key35": "3ssRA3kUoSciovrCUE2fqMQZoi2uxM3yTyuNbenVrWER89P6g8Soth6P4avxVx3KFEuoqqyPhhviTnojSLX2AT28"
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
