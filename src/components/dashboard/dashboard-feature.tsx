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
    "45kjhDQioRfqAAtvcKfD9HhdwTwykyrLEVG4Hz1mY9HXhapaUkdQ3dnx5rp55uyJNFnR9QXqGx6wguKQnvs9EjqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fgcfWTV52yThGHGTACC3dvwJFQXbpNqtAEdfrrfq1cjpafEiCMM6XdMukMD7D7qtuQk1QrFdMyZjbDKym1FHERt",
  "key1": "2iaWSs7pGiSHUw88s8bHfesuueZJeoWavusHf9uTvkArPjSY7HJE59kGMKWyRGLMrY1CSGperLN9QTPiCknPMoh",
  "key2": "3PF98ZYu2ei1Nc1Pm78ABhQtRn5G5WTiBE5C6J3hp2KUtMLRJX9GGSNs6cGKUbY4i1cCjLgWxoxxaVHijA3FeiDk",
  "key3": "4UUmAGfxWaykNgzf2iTi2B5T1Rt71XNXMPMWWz8mbYHza6asrNLT33V35t2oweKVjLygJ8TtdHFtFCQQ7xgJEfoW",
  "key4": "23Ue5uqfixrthLT4VsFDoeVpUNh3DCzD7n7Ea3bKZwKp597ojsY2UEL4RuP2YQdSB1C7Jzt3jajn37HRBbBc5XKF",
  "key5": "4DdwgptHZNpQsNAFFhjPXPF9R61LZ2C5cADHcNucqxKC5neHFUUJRa4goqRkxsZyEAijLSWN1pKdfQFNaH4CoRQ2",
  "key6": "yhgHewT8KD2hQbHPjVnGGL7wbBfVGGGzsg78z8wd2sroU7aKyEKWCQnwYkSALRcJmwn7TUyN3nKf9hiwPvaKGJ6",
  "key7": "GPaLoJHcpf7qC9aQCiVJ9r5isLhsR6YtCJX9LWo2VMNkXQ9TKiZU7qpL9WQwYFYYu12NyyzxyEK26dDrW36fRQf",
  "key8": "48ZArNnQVf8gVyEiKHnJUMeCwJQMo7eckDhCgREf1QUQjsiBevMtnmRn7ejq3xmd6MxRtwGyNKqpCCn8ELNLByUP",
  "key9": "4TbJ5NF5MWbzC6fCjJuR5XBpKNggtutycQ6RBZ1X657bgMoDeVAXhjazKpMqgfAfYmiLUqyNmbWWbMK9wzBPD4od",
  "key10": "4ETxsodFyfzeADD8NEh8qGnUnzrhsyNsgiivcMd7a5zAWF3RsgF8H2HkgXMfW8GnzFghnBEymT2HddLYYNhEAUrK",
  "key11": "2nPRd2NsRjY7NALu9Sn45Ac6kNN6JBjkXHKPShCCAWMyemmMTf82TMjbXh9U5YBHRvNymjeiGDD62bZMKwpJ6hZD",
  "key12": "5jzRnfb3T7WzWfAHXZppv3jvPZTs2ksCWpGtE1NW8n32VHVoTvkFmL5QUFS64mxBKL1fEXHctXYpFwRUDb6DZDdJ",
  "key13": "4Vh6TUUj8HCMD6jzeVWmMDuqSA8DKP4cAyKWNVDEaCT22J9sHomcoqY5Ek31pSAb3RmnVWGKxZM6GbUqtyLWFub8",
  "key14": "2ApMPVyztz1FhoaDpu2mgHQMt4QUpYay6EqS7d4W8WsxPU5KtSUPsQM61XsekURzKEnZNfXU6DQL9CmnaDyJXp1y",
  "key15": "5s43iVwv3AMPZYzEjyTnidzKEp7e3jRTukgvUgvr7yVB5ZEntWooATxeygNnLKQsoDHKJdjCxK2w6UrWbG9paNHg",
  "key16": "4SzGe2MTyy2Z5EqSA1Xx5RRJGmduvUDVD7ve81uefDVJoDkdtphCBsyvHWxtfDTWADh48dctjrS4XNBJ2ZLgMeG2",
  "key17": "XKDaU9kSXwCVqmPpuLED22V4NHMngd66YtKyt1jeFPhkqe8dkoWUxt1RVB1vyDDorPafdtvkX8PyJo2ZfewGjeX",
  "key18": "ntDgjWaHzuFVNYzgb23UkFD7jHc6rL5H3GnnatgEU4XukMfJnWCW8HqPAenLXXfxR4NQ98N48oWsQ6goKVc6Kgw",
  "key19": "47WVt5aRzreSq2wMaFNgwKjAfigBjbA9zXjqh6UVKd1HkGwtdVSD3u6P2pSxbhrjP9xvmFPp2nLJ5ZkN6CxsfSz6",
  "key20": "3zkUYEtSJWWeSMSm6hVkTPdqBRqGzYQLDWEEFHJBXWnsabMKcDk8astmN657A7MtQRYoTaanocTor4HY5uwFwBQx",
  "key21": "NgXzCUeY8ewzMaxgJr5rbpcmy1DViKf19WvDVkceZCFVgEBY5gondLfuKaZi7dJza1GbcA7XPFeJKLMgH4Js3xj",
  "key22": "ByG9HAepRbVotiQS49g4MFHdGDbaUwyYYBmiaGzTyqWsMKLw7PcZwe3LikVZkyjsybzHdQxJ2D6vG3ufsVEfgw1",
  "key23": "3YdT5ebT2Ua3bPubmizPnvpD9evYHHkeDfGfKXbPktPPusHT51MAXjvgYU72qqVtSR1rHE7uuPKgERTaDf7TpNsB",
  "key24": "5m41TuKbTAL3vkCosgbtw32tBJQr1CpFYx4ySVaoHwF9WQggCBmnpjXqgb4t5TKZVnqFe2L6cfv7WUYwoETCsQGm",
  "key25": "5AFrWfvaehwiVozhArFG71AgtiQboUY9SrBJU5UNJo8DiDqDEk6o2ogmNLXsQQj4zYEdDq8mNbRqBvHRKQQP97vb",
  "key26": "4oxC6zLD5TxwyjmopCa4KyYV74g2gDbpn4sAJNpg85F6hcvrfksKvnpz68U7p7AAPVKUmu5W3nhv78MiG3M5m82w",
  "key27": "25nMS33odptAyqs8kajnh3YLKPPBgk8ic2KMdNXVL4dnBwiGbA3i5gC16xFb4ULBhghNuwBreruvrG5mmVjqcJ2B",
  "key28": "2iixdj7ZJBfghs7yJNUK21gA4xeXEUppioGiZBy8nH9yZ8t8KkXXCwFK9AACzGQcinebk23noR99xQNM9FchR7Un",
  "key29": "5sbmnt3sd9MomaXT8fJws917fWRHHuC1PGxjXqKcLKrKgFweQwDGBGuxpL6TCzLSrpXJZWVB72gERM22RvVNWN7T",
  "key30": "UFVD7xfMbA3NFcUr25EEi3XuEtgajRJxWs6VDUTyrYN1rKzLvbrgJ4e5BxoFEpDSxZ4Ap1byAEp5Xfe7kHdbGZ1",
  "key31": "4ZgPMTxN2b9yf1reNypbhqhuKLSMSdXSTiSS24wUtMNwXdYbkLhEsR5wHcTwEu3u9zqCii9vgiA1MLEda6kjxXte",
  "key32": "se8Yn31wSK5ftGC96kQCJeXKvD3MxUriRQv391w3DU89XsNw31TN8z4RUdGjq6jakqbnGHNgG9sodWtQYx6BBsq"
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
