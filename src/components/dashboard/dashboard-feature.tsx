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
    "PZ8wpWNKXqzPS2tzk5sxUpE7rAgXnoEd7VcYHZEiGuoqTMWV3m4GQzRsdWSoy9kwZzG1LPr61XQ2JxxkgBYY9y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "74Am7ifELhYYc4ZZJK9QzLLe7J2ppm1cgQA88vdyGJcAKtcteLamsRp1jfdagFEWyap7L7nB3jv9kbfCM14mcjt",
  "key1": "szUuMQ1X4bAoUTQMDjf2YXZyth3w7mrfUXhrrUenZEQS8vnT7sCvuUiNuhgLWmzuMEEZLRhz6sQmrbaUo7GnuLx",
  "key2": "2ipXsdLqWcKT8gtK5ppbP2wG2oXJ8CNNHt1iUUMdbXMCASrxUTg8F56jeR4LZzhhny57JBHtueY7doXSzt1Ddk2V",
  "key3": "CtRdfGbK41CipuJFZhMAeiHLb9pvcqzxDqXfh1GkJyTV5TXgFGLRWer5WRiWNCHULwaDD8fkd6pTx1marLDTxZz",
  "key4": "36fHYWuabkHa98T83KoqExmfKRda529b5FYKNiDjo5wgDNeA1ErjeCG3keMfF2CYmHJP2Wg7VgXSLUpYsEZ29ah5",
  "key5": "gDU8vx6k3U8LJLMeEtNXNn6GAfD4qwBLSFQmgKXwNC1nASbjpZz8amMhc1Pz1zAFh79vQLuuk2vZGgDPNYP3fAJ",
  "key6": "4Wppob4sTu6pEkBuPy7ZWPapvpfBHBGAASqUkDpoijUxY9BnxA2ZVPQ7dc4NA9JFWgr9wK4B2F7D3SuYbCwtyvWi",
  "key7": "3T8rGWvc4HTCWHAxLJEpG36fNCnEBe9Rzn4hN6BPeLecC57DR8Dnwv14mPG9r2NQigzuqshA4DtszteuJpMRLUNB",
  "key8": "4HymX6jWRFMewdvcF2n4LXn1fWJEAzMdPw8HGsMqahiGoEZigv5EyhMy4GBNaHoaTRjtSCbkUP4UhERAgFRv3Za8",
  "key9": "5arXuEWVPFYFXuim8SvwRLFf2nHCFWSFZBjWQzCFwPQh7cAKUV4ayJLh5MbKyQBRQY3PYGN74HZVre8GAbaXWA57",
  "key10": "PGARz7gJTwsKBhPmn7KVnfmNPGuegHdQ3BtV6P98UHM3xiuqjyKLtPjTf3ocrnr3sA9ZMVKbXZKpieXEsR1Xgfm",
  "key11": "5N1E6S6nfEDfxHs5Tb2UvVTpuggXda2eBb4Xss1FzYzzRyGXfFT5ssz1iMyjkHAxH8Vuz4tE6miEdPq96kFGFso4",
  "key12": "WuqTPSrN9eDbKqDqxRXo7CpLqqRcejhFh1tRnmMdehSjRHtL56HtaeNizEsxwJcFmDKnJM9uZhThvbmp2tvyuTC",
  "key13": "TMZYZEnS77dPu8fBZqvK7CGnJT4sWUtR9HjuT1QibW4F37JULHdT4NoB4bZmV1McQGqytebHETGNZ4uwBTc3BSo",
  "key14": "3GTJfTArPgqrJT56hTMMBUEaYTeSxoDuUCLeSeZDsrrgMmAb7zQRLnAhRGG1zx3wJ5DwB92cW7wDVdfAQGR6irqk",
  "key15": "5CTP24MNRAJJjmsSvzwhgsChXmp5i6RhmHNsn3mysrF9rjyyHtu8rDegwGFwwxsG6mMF2eG5vzCtUcW3eNzoKsEU",
  "key16": "3USLcjZzqjTAbXU6nJg6mbQoDggVGxHMHxu5v7xggCqvzLjJw9CDomS2ZaUYNgsVrLAnYsX3mosuSzMyzEhDHndR",
  "key17": "32RSQoVBKFKwEvDiuoqsTFo1m9kKoDbhvrvtzrSBKBPvYzoZG2mcEjnjpFAfgD9eZCwuwssTb2x5oAfMWPn94jvj",
  "key18": "5XBCg2vrgH8h5QzTkSeYBFWj6xRMnYex55eCUPdstNHQszCUBwqrwncekczUtayWJDv4BseVmD2maFiXX6Wtr9se",
  "key19": "3b63V1vYs3HV4uhpjvu5iU4Bmmx2AvvKiWw1V1YAfGodwQni6opHN1LNssJPeB26umLR2zDGq7igieWV7SkCrz6t",
  "key20": "5KSiUbEfD3uBgtCrKoPSgrp9mi68bELZ6LYpEMajuzpj3C1kEvYFrBGMLJLEakumnv6KuxcHCSuTvuwhfG8CH5a8",
  "key21": "3rn2DVkRcarutWtC8HNcp791XprUX4EWenFuYQ5VdTWQrCizEk8KjTWWfQqvQK6srFVv5D6H3PUgCx2CxfGzSg8W",
  "key22": "2DXNn72DGoVcKZgQiSx6SK8Jx2rk7MZPwLuwhBtRpyER2veu5KZkCpfMWUuA8uFGrGXekzA5RH1jUwWgBeRPmeU2",
  "key23": "HANuhGqf7rQW5JR3DDZf1Dfj7wdMqbFzE3W3UXe338xtFaxiQfQweF3BbejAskkfLDUqHHxeDcZ98fZaWKnCfka",
  "key24": "3dXPs7bvdqyTBjHXT3mgAguUGD7kJ9Uo82D8uEKPQujzQzhzW3T3baX6r49bwsx6fyatRXqhtFswREDVsXiEtY28",
  "key25": "5mhPbzM574327oYdGgBhb3q4HeS8CHSthWu1ev5CLwmFsx2eZVr4gVSoDCQkD6P8p1nAA6ZkqfHyXeV79zSsvRPd",
  "key26": "5NWScJeS1rvjuzGm1f3g8AisoBdVLAvJkSvBSDZqAYsNULAqFDn5PpGJMiRkfKvdVE1bnjDb1iquDLMxW53Wh5R6",
  "key27": "31MnTCNJjL2e8UnNzg9QuSNYUeQBuuTunJpBYhr5Zyx2KcQm89ZGrKQXYemDzRGQn3F1qHXY8hwEhyB8BNiUUAEt",
  "key28": "4if4vpdHkJk8ZJ982qAmoj1Cj3tTTJqdCarBhopCvEqxqJgwUSHpFqwSRgG9M37g8bdX5LQ4EGADeiAdHeS9o2Jr",
  "key29": "4cKM9uXcLN1gxNnavVUzCtfiJ3y1cgNaxdkjcLiVbZCJBb3amkAppfRypb6iXRqg3VtwTYnL2kjutRby2vAsY6yV",
  "key30": "3KbiYEPsbDh4YFdvnqm5bbGLiRJn2y8fnt4tL2xA2P9d68h1CcJUESZPjH8f2z8VFb3LgDKCBzcXNhkEG17AJMz7",
  "key31": "z6jXJzxaH9mVMhcfoJexrEaaPWtvyNqFq6qgJU6ucC4QkRggHe1ib92qiB1p85ctyoBwA91GRzKRLTp8rU4dcWc",
  "key32": "2TN2FKMNpmpDMNUNhFo8x3xRvUc1z1vVTV9BdL6rQy5SNnDoV2ZcpRwfH5xRtBd8UtrGBwKtfnaGEyytkQaFLeM7",
  "key33": "425XSf1KNtbgf2GPYTPHokeitCWEJW1b3WzpkJthRKwdLdTTW4KQuM8M2FGWsadXbYpVx54WuRh9weSruUYf4m3i",
  "key34": "4NTbbJ5frwvTyCKVzxX6irx3DCb3neLaVgVwebFR4NVUUEMoKjwhALVAvJyJdZGGc4yWBnkWCiXTUB7D6w7Leq5n",
  "key35": "5yNWmghXNJJx6f26xPWsjmxUiF4e6dBzFdr8FWtUTaUYquq2GTG7womFGWs6rsm6myH3cR3PSjFsHQSqPt1F9Y5n",
  "key36": "5wnK4D44fG3bPshAVFz6resFBRSGk8PYMS4cP8AcZ5meUkTEBY4XqizK6oE1pZwPzkwffQhzfQMyyq5S8vMSqHVB",
  "key37": "3TsH7r7yV465f78uxvHbSaUKQCVibopaeSSaYoXwMQBkkvjPHQyKsfT3GPML6f9uzr4YsEHiTbvyU7J59Y4WxfSY",
  "key38": "4EQCM12Kk9V8YtfRQcSw3nh5vLjgAjNm79FLu7Er2SxvDXtxSwZ1yeL78ruNBU8oGAWCUjJQcH6Nq9XagTfgPS7V",
  "key39": "2XEfdanT2yFTJNJGEEnsA9nW67TiUPMag3Bma8gkY2fQxrcddft5VVohrTD9UJUdEkqhK1WimnXgkJwJzjcS6hAa",
  "key40": "2eReDsmgb9xJ3jfWyi2xM4FYrs9pj7wVakupRySM2Qvucu159EJL5jXSj4oyT78svxoJTEWEHQcCe7drxQh3Z31V",
  "key41": "2bY7dBdoGmRtwAtMz4CzAZRSUEFZgCHYMSJbpEqi1xAJjyv2HjQx23AtHPxut78LPrbXekibriXDdX9jwVYfuTXd",
  "key42": "5x4yV2RbfhcXnRi74krnzMdCvUNiJ5SCC7Cpfd1c6DGfdiStkENELChmMfmhoNbZp9sHMZKcFBj4SzMCSshmnHpg",
  "key43": "4GN2Nc4Ze6144us3NVu4n9JByCckLVuEVzTQwguVP9EK3erztLchvHvKxamwx35Xa1i5Mj7G2Yy5sLhdSZ898utb",
  "key44": "2nzp1CoD4PF2kjRPmpZHhYyMnN7pWHkzUxha3nzbkjk5qu7TRGag6KkhJHVzQhh6tAecbJJToFuT6HCuWptoodrd",
  "key45": "4teTghjsbi377pf9c5UySwVhAwJUoGBxxL5tg8BQP1Tm9J9sntLvvPVbZtA3PqJhkgfue4sEoGwygqVFe4JMnMap",
  "key46": "JQdbrfTbFHN3Bdt8mLkXLQCqGQyYu1fNSHn9ksE2bqesZjGKUnE79J4uZZxpgBfDiSSHvQUp34PHn8jJU5gcXa7"
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
