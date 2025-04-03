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
    "22pokHvPokfprrvdSq9RnWmsevabchVLMeMt31ZW2PBHvVikgNpM9nADa7TkfByAaxqeASHPwrvSWb7APX4xYtJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HqapEWrGididqpceQLL1dQcv3orG4nLJWPu2aQCsfWY3BKixZdYdYQrPr2ENWzZBaScqRbPaaMPkNoYBMpRtrDM",
  "key1": "3BMFjRzPutX3ngHqfBtqsurhDwFixpD5tdGX5DnAky8yat14Cf9wvGntW2yhS9dNzq8Q86d6upG81yEjtZSS3JMU",
  "key2": "441h3XTbp453kRQ8DF4Z3m5Ssc5w7PLDJiXHVHhsfbpzJLCrjDw9aZgkfweyVMqbDx5TmaYt9XJLnuvD1htXgovQ",
  "key3": "8EjCoYgeBVJN7gbYmJDwwfuBBmpkXC2LX8FAcKMqjxTZXqQfFip3Z49xs8y7QRkV13oA7RCJj6heKvBTDfjiT7T",
  "key4": "8TZqLdtmHsyNCK5kJ66PwjyGWqpgmUCWYU4cyvEF1QifyoG7dVZULzXvYQmAYs7R9EBpyLXFrzJQNpLLWo1WH1u",
  "key5": "46KPCWwTvSEe9xHbw9XgZgYHSDPAgApN7NpCNorYPoHgZzFR2QYE5JQ3YHQ5QsQUTpozCxQc2EVUJqUJ4bNDLvVJ",
  "key6": "7BRNVZEKZ92U3BYcbqV2319ngMoccrKfYgGHGwo8ouMxH7DSGiBXKGFfLLNqpUVH4w5szL7b8RpXCJfyfSMbYP5",
  "key7": "772f665jvXLA3mDkJbpqWrJUUPam5AYd1Xzbywx6L9woALmWoDph6Qp9hS8FuDupknQQYNovauKbyu1PiAPPdpm",
  "key8": "5uZzvbu1jYjbohrY2C9JX924v7CAquRHb4hqtqN71z3JyH1Rj1cNk953Bmk8SgaGpoSUYoApmzjmFHVF8vNfVXhy",
  "key9": "61Hh4EUnfSFix8GTnUji1YxBNvMmhuWz8bQDu4yFN6DChEfU7Nt8YU7yPesmnpvLN5NWb3FpmyXHiAa52YFx6doX",
  "key10": "2hCMkZ5LZH8WSEwfGCW6dPuAUsqjY88YXjmhvV9Q92pda592pHazJV7pYCmeXfJSrUocdwyHDsDsa7zxX6mVxq2h",
  "key11": "cdCQHLS1cBnrEgGFgibsshsHkvBJpYUMuvzwZZHnqYmyjgAjXr8gpwfuUB4Q1mS7P5w6Z3Nb87W4pVPYNGZW19z",
  "key12": "3xfqRfR4Bu3KkCemHaZZfN4Gws2BCfBG5HjJbhNWr82nKtXjDHyJR8KzZpzcBzZmdPaq85eEwyq3BXwivZBFUCjF",
  "key13": "22MUGoQTtGzAkzAqQWkiqx18TrdeY72WdT4N4THJjKNoGh6sbmtEkenSiEdA9R7wttUNXrSCSYHXpxMdQZkrQFtW",
  "key14": "4oWgsBDnu9vtNTmr3u4i5TvU87umGj6FYDEv1i1FZmnsMsVg98aPXzbw8FiqD7SAKPdKJnKud9EFjtuH9NBpiSTt",
  "key15": "5hfxc1x3PMgB32c6pcA583qJPQa4bCfEMvRba6Nxy56J9gvKxKmcaaMStNbciETKG4HXDHHFP8Gkn6GV2UHjbExd",
  "key16": "LeESEHWXAVjvDFQPng8S5z19kUNyYuMTjQVdXMMhtFCmHvsoTKJiRVUnfskAmu3MmLaU9wzunrNGSXiSEjBtxyp",
  "key17": "4TaUW2oxdUGdwnxMj7zSBQdoNr5nJcSQieZQnocXRK4sY8k4FuF3MSoDcseHCzWtsEz6Sj4ZdB4M3roX9EFWhZhN",
  "key18": "4GUJyd2KxSyCSK3ZU43D5c9y7NWTU7NHAgCYXUWFpYqLkAvx3en2CXKgcteytXe3minAzJvVX2yveedzgetVkWZR",
  "key19": "3gq6odsZsapc428iwr4wwfW6YPa4kzNBZXPzzHDCVJ3GpqraDuEXbFRf8XfYK1pc51RAFPxCAXNKkkrfeL44Drpr",
  "key20": "5DGCBdEV5uU3uppTiwune7pNr9prnq3L8EzdRBQqPFLj6pKrmsCbfzLfrqaafD61BtKx4c5iLNWoiGoDtRGNJ5HX",
  "key21": "3S8Dj6f8FZQB64keumvsf5Jjh3oXJRDHykbV72awHGtoB9BKjBZsn9eFZHwePzZkDt7VWQ9Dxe7Kfb5bS3hv2J98",
  "key22": "2mVVED1ufPWpHDfJ8ztcpYJivq2WQTft2K9ULuitJFWVQj1TLKDJPCT6P1wru4QiaQUSdwLSkVd6iBRff6DxcceP",
  "key23": "nkExHs9pCyA6u6MQzPP4Bw9q4Xcs2qpujxwPNwW3CeXQe44hGZD5nQeXbPzrxCWhaUVB7x5JrWNTpdsddsLJfSp",
  "key24": "KuGrykPK1whjQMLn3xa1iezgN1TtEQcbFpTkZPaVQasiCym75sgBEgY2ci17g7CwfzyDBAVrsQYPFtFh2uZ6iu4",
  "key25": "3ThviyJhmCEJmSz35vMudA6auzvfq8foUoKDkLVqC9oEgyx4YzvRCpoNM1a3gi6ijv8GjcCRsFhgmV9ijUS6RiM8",
  "key26": "2TzMCZsSEiUL9P4h39e5suWbizqTPiERt9iXqzKeoX6wV2q1wiQqyVowAqRskSHYFVvdujSpW2TcBFXbmLHbyMKW",
  "key27": "4NHoozH5KuQgeCfnzyPzJ2EmX8v7Zd1bkmKbiuTCkVHnGa4RZ7TdWot6U9LPz8oMEYLiefHDdEn57EWCBxCxssKi",
  "key28": "62voXoJY8A2hi7qZFB8naMgQt1d443ion8kbVSRFnz3iWMjdowAoeGj8H9LK3cbFB24h6jdLrLr8c9XzKEujb2PZ",
  "key29": "jLkfg1B2GjrBibq4JCK6mvYy8nUFjipwztK1SunHQphmDLnw1JJgZSDQbsahQc45YF9KgRq1xwNMKrcYAD2pPoJ",
  "key30": "44jTKdLhypDNcnhWyQgExCaCM52QpDkXMCsNU8sjvyrZ6dFQ41mc6xBocvyq23jMmwYCtHrtoaA3aXicZ4VHaSFp",
  "key31": "2Loh6wzWsVUXbpiNmShpo3LpeK1hkNhQEsA53CAeSjuRwpRdHerGBkG2qdRhKAW3PdqrWC5RtTwVcY4ZJWaRzsDm",
  "key32": "3tKjhLqBR5amJK3mkgDb78QqCpJXhyuyKFCk8YPqew2EszH667HGub31DX7npPSjz5YvAywJdzFfjWUwqFs6z1nr",
  "key33": "5xpBV3mFAwTeXJwBySaCbXNn26AuNLebyaoamyqCJ5bTDN2uqjxaqdMf5w1ybk7issTqbZbJ3BRUvA5ZEEtCPhaR",
  "key34": "2U8ifGd9zCeKYJdiw7jmjRieA6Ct9QTfoStJxjJ1XkK12LQyMvJsjX8xrtyFcRi41wb8bsx9mczePLtHyJdFNoUk",
  "key35": "afjrTPJZPMvVRMsDA79vdbKP7mZJFsoH6R3zUmzNgHCqJmBuqn2FL5gUEWojp5hca5qVAvbEZtAbEAabAVCXoF2",
  "key36": "5suLs7zpTADPm62rmijztDo12UBL28ykd36uDQoGXPQydTNCfRahWSmYKdRpFTPfY64BiKmDDKPqR4cu8wdD3m3J",
  "key37": "4Qm1g5XrjrjYABSsUQTXaMFKfhfKPAjxBP2xkFoYsYyNYVyWN1pmHe34LppmKB7KHB5qrXQg8UfJbDPNFFpDdNqs",
  "key38": "3AHcJRoMhtLy7tqdLhMoM9EyChb1pRsQxn2imkzQ2WJeJeRF4pNDPAxjc7J5MuBwQPphFqAqPrDe3DFQHaKggxmc"
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
