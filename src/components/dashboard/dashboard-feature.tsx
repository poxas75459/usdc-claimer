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
    "3zWdR7RNsUoyP7g2vTYkGpzFg6B9cL9bvNvCf7i1m4nnEWqGap3TxBrkTVeaZduTfUGBLH1HGVbyecWhknkfxNzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Rg6yBMFiKnVneeyeRLsHnVnWFecWnrXn7rbTTCnxhgk7wKbagqm9erj32Uwb3yMAJs3n28iZKPjteXAUpjWbE7",
  "key1": "5TG1Crh7UUvtckXyt1Warv2mCaRteqWZLTx9SHJQp8CNUm7rf6RqiU7N7ksg83v6Dr3mELfNvrei9HeFUHKJ3yBw",
  "key2": "3eEzdNS4L8Nwo1GJX8nudat5K1pMKzQigRVskRRsSJ1kdY6r4TcdjxmjhnfjYN3uraGmk319JCkx72Z5g9MNZnCc",
  "key3": "4HrH9HgK3QmawxNAeXCNJthSaUTxaJjQbBqbCFYG8yiNQn5JmQhA8dyeR3qMJBbEJzrBxF9sJtidwXdz3RKeaMYm",
  "key4": "2yPgWFUVuDHWWWMaspoVu2rth1nJv8PzLrEkruTkkwTeshLPsBDu4SLNcjv5aSNatMZytXNHogikHk56kKvTdFZR",
  "key5": "fq8DGTEQihT9wZPq5HPvjoi5xgACMVXGKDWzAkBytYtF5dRYPBo18CfQXmVpxz7R6GRKHrHnkkH4CRefWVCWGFS",
  "key6": "4X1E5fXTrxHqRbupt6f5boV4aifeDyjfGP5LxDCdTZuKzcUA4rkvT5n84kf5MznL59gdtau9UzsXS6pJnWCgjDUZ",
  "key7": "3qRaXQiU5DQviDweJ9PnUZWPhcpNkuNQ6ygtoSSULp4QCnxcVhg1cU71y9KvzrDbFFjAjF3v9u5zUxQBZAWutG3w",
  "key8": "5w1d2jtAwqKJt2V87KVHoriQZiLDj8bCk4i1BVwLS9ZhKARfTXXm9fMRUACMyf374pkuqMUTrepDTDmp2G1ygPR6",
  "key9": "2tDDx1hdHQaMU882GL6mNFKsxX5Uc6eTYFDAL4afSPr6WdWHBp7R79eG6Ag6UcAqca1TeabN8JGrkPfPBcVJWUKM",
  "key10": "2wxumMQiLcx8yDEeTYinhPS46iDhMH6JGeyjy3mQJovyacutHDen47UtWh2UD4s88CBGeApRKQWdUtQcvah79yYS",
  "key11": "5aYBAXEHMXAj8BE8L6SeRsDmFWs85UEiihUXAQia4rswMvqsrDu1zxC6Eu3XdQhkMHUJWjYfSqUkRhwx9C2qryxs",
  "key12": "5zKjRq57RogRaQC2Zi3DzgNxb6QxR56HeqrE8AZhWo1Y8sng1gcG7gkwoUZHFbfMfGiX5ry5JD42LTQJmFe88nrg",
  "key13": "5F49RNvk8RAZHkjJe83AfX6abCrrTNabcLpMmhfYW2eU2Mcr35uKEHtBiCZDmnGn7QwAm89GpWho3ogXA9kxgsxA",
  "key14": "4zgxgwUeBAibWju4a4N3GmdpDuFV4vK9N5PVaokSfdSHpPUhXsiGzbmKsvcXNpyPXEesq7zjzAZrkfvDpj2tao4F",
  "key15": "4Hjw589A7cSd758qPobHbyvmSSeuhyHof27kicbDh4VaJxXxSHXpPSXJhTd3pr6f6baQerx9Wc8nUtA2V6dLNqCF",
  "key16": "4tbEHBDoSfSkHDXmaRD1j7AN5Bm6VojmeSi1xbCdynVYR5PjsdJLrS2Q8cENPiem44iWUWwx3oqDS658sD8SW974",
  "key17": "3qPfBSMTtzyq1G4JpPHerv16SYYVw7RJvBLq1jbDoVEE3FmtsYyEq7PhJiMGiyCAYEPBFKGgRayTAkC6R8ymsKcK",
  "key18": "Q16vgWGsSmmnRcXLstRBPm66EXQa5FJTLroG88TxtVYHREXTvpWqj9wChfJYkKSwMDdn8LTCqUCJAerZg7Q8596",
  "key19": "4y8HKxzPV4gqPdHYxh2uxspLs39ATf38RLe671neL1XVtTiTCzrCnSv9pgLHGwuFjYVGbFUK24UcoQ4QifobxYYG",
  "key20": "558pwcrzuvF61Y2tFLDdSBPiwVKkzmk2dEDevEdcSVeoHjMcEBvUxdSAZQrzemytxWy9aJRKmPBPUrXrzhey5YVL",
  "key21": "2uKQcKCNrTS2YwHFEQvHXRxiQbFa2bbdqVEXJpgRDUvgs7je2vA6ifFwgBruEHCko6Xfs2YuTWdBh8wd1St1R5Ex",
  "key22": "LrR7sACUeyaLZKuGgw8FsxDoTQqcMdLASMMiZQ64PRcaH6FGvVyzsf7XpPtFD69r8MrMirorjLqcr5PAeMYEeeV",
  "key23": "3is9hqt8axKUKD1q2HkzKhwmBcLvXrEZvAGcnCuxeWPmehnJZSvp3CRvZCbyJK7uyZJgAWmoGYTW1ZwBS8q361rR",
  "key24": "2wRU3yHCJihwc9CCmHZ7fQV4nB74cp6mBUVDgoYdcUARwyRpuh5TA4bPi87W5GDuv2ewdozjag1fQ7MhuDJPMTH3",
  "key25": "5YN5ZT5wjHwQ4Y32LrEwR2HxJ99fUzUsRKrBHWZYvt77LE6EEKkxcXb84hozBVvafmeUF6WcgDHnJZvyfdQNYKRT",
  "key26": "3RjsT6CGcbPQ9TFaBgf8TuoKgEu7d3BidQk88dv1kTJAmgxj23Tbn8FUZ6xTL8jjUYmzeGDqBFStmPQDivH5E4Ky",
  "key27": "3cy6PsKS8gxdWRKVv3e81UrjEsGRUkbFzhypVYfx2esGUzbZDDn4Zo8XLLCACCEusVboQ5VskFQrxjfdGr3twji2",
  "key28": "3tBA6eNWSR6AVgaAkJyUi88RWQuMXBkpVnQZHuA9kB3WkBfgbQWpLXWWrLvHAvYRewxSuyYXPz8tdkvKUb5Q69oi",
  "key29": "ZXAieCa5KmHzCJu9jVdvGYZSRthaZSmkugRDXt3rYmr3Tw3Ce5F6HkAVBKJu9XvGcqhgSYDxRj5oQyThe3uq4Yx",
  "key30": "XR4vWWxpdckn3548PhKrrSErDBqg6jUwrLywjXLnTZm7c4QB4YDjmuAgiKUbkqiuM4w8KiitHBCGsdEChM9W6vB",
  "key31": "4NaoFSBTEo9cG4QTLZUNXDP9aQ3cyzzv1tKMh8AoKwjNpDP2fuZ15GuEytNtsV8sq4TiPSczRDKJ5uYVfJJPjE9p",
  "key32": "4xy3zP53QaVFLhzpkEKss152Hznb95hdH9gRQZ6XeoXwTKwpphs5KDZDME4WRS7yRgE3FoUCRYRNmc2TFTaUFmrU",
  "key33": "2KAYnit5WzHM1H1yfnUCeeYtvCFLm68koZfVzU4M5Hf89VaQpcSCmh6uarUTfvCiYwq5QajaUqaDJuEGJebpDyPe",
  "key34": "UgEN9RQyymh9pzaM5KMVnjHUsj92YkbRUiunDZp4RTqTG18rKnWspNSFK1SUFkge5BU61yhNUMLXCRntPQisaTS",
  "key35": "Bh3rtfEwZ1UJ7EDJTUrPcbCDWy7bViLC1Chd1VHr2d8XDzqNeAj55Y9uPF8ExjmHXzvGH9S4HP5BxEaAFvTfZMN",
  "key36": "4gkYHq9KuBDjApCzfENV26JAbdqb4fYexdtMFYEppFYzhNwhmkHqVoL5qo254DQe4ShAXewV1vnVV6BNT1monTAK",
  "key37": "QzAMBQ3LztNaAxRciQNGwZJG78M6Auh6Fb893D9KafhHWQz2fjtA2fUDnywZXv4WnKUmM8Qm5nBpqpfGs5x9jXF",
  "key38": "4K5sFJFWbQpA24pF5hwTcvVD9j73DN26Le3YAhyxpbdMxReCa8WUegfzh4cBDQu8ewfTp7kakmDFSQqaeawsrEd9",
  "key39": "4eufdFkc62k1mRFDEScJhLZDo1wZv6djjCDf3iFwUmpEUeXhZHbD6iPXH2iDykcCPwpQHAMjXHqs2oDdppQyjk5D"
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
