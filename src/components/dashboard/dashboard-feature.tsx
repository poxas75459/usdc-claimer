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
    "2aDsQwASVtBWSwXCZahpyRAqtFx5XURDNJWxyEEGRrgBTMaJtwZgXa7gYWGx88F7eMC3TXQg1caq6nifskWaJmHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jChsPCaX7tnH3aDVbVo4D425Eqd3gaZtcmt5N5P7uwUQXa77JZdQV7NgDgWLWRQVubs6SwojukpYiyJzGzRLjqY",
  "key1": "66Q52tgBubtivmenBy6y3m6t3ipZroYGY9yRM6rLr43Xg9eCc8cYdR6utV6JXhJH4PfJgHaYy2Dfus6FwSs3491E",
  "key2": "Ntgg7WtDL75z8rFEQXdqv3umXyN7kQnPDAmjK9LemeB14kvpSVjW7cGuvPCb2VhaxDWY98LWGuWSwPaWvLL8ZsF",
  "key3": "5g7QHSmQWuEJZzDb2qcbsWMpiQDEdEznGy447URJ6cx69L7XUxYynAFVE1MM5fkRTHj1jbWhwGfuHjXU37DKqwXW",
  "key4": "5rZLf2MRfyLD85o9SUwW9q26wXkaSg5PWU5SybZWc1KfW7TKNDDsBK7N2DEEfnhEmoTqZMVRiwt2nZapuAK6Yj6W",
  "key5": "tsJ18zV8qk2iT2DdVQEAtjURhh8pLGC9HF7c49q2791cVASAtAQDmBFjDRGS7ngREjm7HMHmBBcizMseyZzzGLL",
  "key6": "4gLJ9BNNtiRk3CgBAVnMUWMTntmaREaPgA3oWNgru8Pf34W8ghWytvHzdnDsEzwCj5Ndrfv5CptjB8Pm4UVdEAQ",
  "key7": "2HyM38bJ63KkK1kYnypy6bXGC7hJ4gGRUcu1HNfndBz19AtswnbT68MB2xgARZamj77AANbmJR8fUcVKSVJqyM1S",
  "key8": "4qTNNTasd9RT5GBFjNzinoNTMX18DwsNB7sy9Xfw7G5sBs7fR8RFtJYa1nsrSUMXYNYS2mDuxW3ar6F2gQUrEhNi",
  "key9": "5EhcAmAK817v7PQxpn7FiS58Jzqwgcd2b5bbjgQXLnSSEfMDT71Z1baRroBNSPWKyW4XZUVVARDcBya4pPL4dDeu",
  "key10": "5P5YTa5Zk5sdXP1TXDeVxbZqPCSE1RpnYKAPVSFQxLbo9LHdTEzR5HQkMKK5dcmVEGHKUVMiVWRTv6LRy3ZbiL9w",
  "key11": "5BWPRMv6pg1UCrA4zLGpUvpd8wGL1vDj9JCjYhJU6p5nuTToGiLDREacexeG3RvsKHnj9EKpVrCAZqeduvUNb7ct",
  "key12": "w47p1BX9sXBcb57oKdBZBWNTXgv2ap68fzDQUXCsnP6ML2RvTfJwJdBEMuWkt89LwcqtacHVqDT3B6fBSew9xaw",
  "key13": "5yAHFRAkf4eb8xvg9Qwi3G5Cb5FFHv9TaXADgYUyTV3KtprReAEaeRB758FDneiL6KioU6TWjpzncduhZ6L7R57k",
  "key14": "486tnEiBcpEzWwAnMUuU5yXsu2aKhBAut9HKSRStePHGMjqFBU4wDMhMnRLo2iQ2Tbav9q7t1ZWpBBFQ74wBxByN",
  "key15": "zH3CN7dopc2jW8yjBRL6bWMEJ2oXCbYy8VNxshg3oA1VQhYKxWkTPYzZ7fqdB3Hbxksg3qxsWbkwAw527y7DMLU",
  "key16": "4cTMorwV8JiypRQKKV1f2StogLVKEiVaNPvQufvoTn7PJtRsZuuo2dxkZ9zUVxJgsVRmGZ9n4t2LTByT5PLZJnCe",
  "key17": "54t1BkSd8PxsDZe5gCpNX9TPwYQ4kLs2ifCGYT7QksEbXUCTaxXyRfQQCHz1zsSS78rDiXqCzeqFjxMgJvXChRHj",
  "key18": "4kHaQHGMLitMsb9NDPc2MYYLVf8zGXNp3QzRQrjdoYuQrKaAcp3SHyfAcXwmhN4QqjwA8RH7LWaBeV1Ye3JTG716",
  "key19": "3Z29FUX4NqHYHPwqKCBL8gSiLYXVttvk52LMi9ERttwLwCQXv2pC2rpGgemFabTUmgdy7jR2nZj4nrn7pjntxngm",
  "key20": "2YtF8hUoUVrKJPV7SycCBiVyjHyEWFfjSUXQniufyPAW43UCBb6FEdQc3KePUd7vQTizq5Rwg4CXfDdPNRn3N8A7",
  "key21": "4PyVno7f3juW2dNKCkk81LFdraC6JqwCDJGeV5ANnE5gGXw3rKZqgvN2SoENfUJzvk6bvjdqAisiN6Yjt2LebnAR",
  "key22": "bjW8JoRQTjLB3xsJHpDHMTiZEiDUsZuKibw64RJCEr2bvToK366uqh1bc4Xx1ipTDYA47XcS3YXJ7AFscpr4rok",
  "key23": "5W7edMUzgGGQ7DLUJ3VjZKLrv1xeWsSNeV7M4v6o9KKMXFetZ9yhtmrTSXh72ED3dWEf5mXkNHjEN9h4WoK1RiRy",
  "key24": "4xJoRw9Cwp5XGghp5H1v2jeaLfb4mWuRi3ikTULjSDrXsgRG5RgMWARHYXHQeWSbzXeA4f4khUutW3EvVcfHGA5P",
  "key25": "4xo8dYeVp87viyxbhTn7y7NMm5Vc7AhFi9TsM6f3bUBuzkjeUgnPaeFGaUonPJvVbKqpyXkJzFxdbbCXBCv7D1nY",
  "key26": "8BDqcdam1FvCyUFuKPG7i7iuhE7oudYnEZ8zt8tVpv2uRAVhBL2GnfBctojjZSkzo4ndG6C8G3hhYFo1VD1Q8fy",
  "key27": "qSFeX9NqupeuV7Kkmr5wjvW2D3tfBMViSdkDcMaUudXVnV26Vv2qFrVLZ8cG927aUM2ixv91am9tSgyVcGjdd1n",
  "key28": "HibcBoQzqotX6rHnJJXmzx7ujvU7UzNoKq3EfrLDcQ2FiGWFdfwnoUPpWgKxjjBw7r5jHhTG4efHNJq5DZF63KT",
  "key29": "3Szk3paBWnWxhmYDkigieLEu4wFaNWtVg1Vfb6qDsTKZrgjpTyBfxVTViPtAAcw5MLWPgZzDgw4SZ9sBe2YMag7d",
  "key30": "3Y5S8KkWRe1j9BL2WMgfw4zRaGtQCXQuaFh1qgbR6SfHpE1HUyU2WaSXXzvBPhhxceAQa3o8BUJD31avSnciEQAP",
  "key31": "Nwf9utTpjzUri98VnpcQA5jSJ2JMSo3A7gz2TStStC82S6XgsezWnPL3BZ6EvLieWC941GDGcypSFHT3YqgWn56",
  "key32": "5AXnXqqEmQ6FMWrhp3fZM8SveESXUDU9gZK38qZQrrvgN4kEtUvooQse1FunfVfVxJUegRmnPPThohveaKiUDMBQ",
  "key33": "225HexihNNWMwSTWfcXZPWr8B2ghRW1HFtCzEvZDSRj73wWMKsESnWfqoesDQgt3xznweNFoidBFpMei84jRyRbo",
  "key34": "2CW35adBNEhCkWipDjqUSRo69TWZT156E2H7cES2pHbnWiNRMGEwNM9JybNZ9Ap7ao3mv7q1vHzQECGNe5LuTK6z",
  "key35": "51JukjPCsvzYSyq5Fo5HCqtxCcDPpD6FNBTWXAaQCj71GNQAdNARvAe16wMcRBvnLqntZUUKzwG69NAsfXmTVoL1",
  "key36": "5MyXA1BEFoU1airo3WjywAT5HrNaCq77744qqARbTvgHBpCmSK63rkGyk9VsCWyj2bXjNCWCXTcnYcrY8QFWXj7G",
  "key37": "61ssaHU5icch1n6hm15Hr9xPBk5SHTEtrFpQM8c1QqgsunRT8KMnVYAZfd2nG9PnxucDwYyZWsVz5752Qaqj8T45",
  "key38": "2KH855J57UJssRhqiKKADf9f5xKLnTCMRhZRmSRWWVdo3grUyRvuo6zQyLvwWJvQWS5MdTqNsA4GRRSm5KzMYBQc",
  "key39": "5UBoTU8jQ19NEYZKbTrc8etGmMAeWB1HxvoFxAhSrfcDHFweBM143qx5pv9eUmxo8M2UC8hasJHP95SQz1JuRvmE",
  "key40": "bHfZN9VjtSTxryZ2Peiuck29mNtUvwBEH9zCZNeBMrRS1zr1VzSw2eQ4DaTNfuhdi4nCNPD8USrW27L4Tts5R2L",
  "key41": "2LYYX8C9ygsA2tNqon1FRdjDnF9dqBxnJUHyjiVez1JtYQJYHbUxzPibZixDRFjtvQfrKEnREXv8AhKYxtRyZTuf",
  "key42": "2Gt9MVGTKcDSGseeeJLoxPrtxwiCcfhQWnDUvHFinPLsDdrpER5NQtM4mo4GLyubY1SpzCmyJ7S1Su2sDzcf8FqU",
  "key43": "5FhGNBNxzqmxuKyptHjsy8ignF5WK1VQnJfUTBZYSwVBbSuPTicQgEbEWv6ahJ15Y6zeDxk88hPj8qinzEGJtoEA"
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
