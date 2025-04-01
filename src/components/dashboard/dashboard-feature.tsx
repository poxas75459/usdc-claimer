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
    "U2ooVswGT32F3xJy5YHtREsHcmeM1xsuQABYFV334sDMHT6HMgC2CPcvstcdmpZGDrJ1A9sPyoU86WprjGJwGz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vnwx5pyhgcEm1HFAmHUND5pxuZesfB2y2C9x3AcTcMr4ze5fjziee92LDwGPHXPLHNGfg87VsM7disApVkE3Q4o",
  "key1": "3PKxXWZo41reyTNG6PE4LBC6U4wprgBVceKkZakx22vyBzsY4okgFYJ6EP48MRxENmaJcvhh3N1hKtHJkJEs24PT",
  "key2": "5mmJw5h5j4q8wfH2hK7L4xJyUuamsSYiwpFZfwy1kW6adyLRvszAxDGzkRrbWu86AG2PveoexKTpQQUoCCjhEh9G",
  "key3": "4Kb55M3QgYPywQ1HqoFSrY7J5eop1VTC7r6E3QsdoVtNYz7V5SpHc4DEm7NRhrrZ4gGF8tQKLZ4YTgSxY1M65BcK",
  "key4": "eVjbRjq2J1qyQbMJsceidmXRgj2KxujrRygrWok6F788VnEkorG91TbKX9Z9MiWhRu8smBgtQcqVyKm9JqUx3gx",
  "key5": "FHsUtkcsttbdFATgNsN3KgqvFdV2gQ59nUcQKa26tGQbZuKyDeXdpuHJPoqWjQ4AkGDwr6o7dLwtf9oPTLy3RyB",
  "key6": "5dQ1M314tptStJS6AZs9mSdMsC6WSfcvuFWnQwCk5dNqx6emRvtWUydhz9575nFGGvPYKhFWSQEkti9kDygGyCP",
  "key7": "5RStyePr1Fj2LvYaee3WEUJFEtCqokFQzjq2yUgVTevRR2cmfB2TgVC6jPo5rcwa89juhT23TWLVR9ekLxsdZ1kR",
  "key8": "2aJaCnr7kBhyB65maZzqAqcHaZ9cj6UqDHV4z3ju5VHEWrTQ2tCHYsqLtKwR6ZeqTmx4Wyr3XSLFXby87TV2ZYSA",
  "key9": "2oCqT3Fz7KqEyH7PwkRAcZTS1v1A6ufuW8ViCusfwqbMLtgu6pscGn3AGnJHtAGebirRPZYjKiwrWfkQHGNJt8uk",
  "key10": "3va83oAHpfQKTDf2xJuUoYepMNakKRUp7mEBvjHUg2JvWMKDce1Jf6p4AAhpEmoVnurhh8X5WqpNE4D7dMLqAaYY",
  "key11": "umHcz1cqdNmnDMwuih3StmojXX6uiS39niP3Kwjq275LxdYXpkTDwLWxk3W52qrgj4bBJzaqGXGu9wzBU1T8vKs",
  "key12": "52uGeFoT1e4h7JYnYzC9aURp1W9gnpcTbyJxig6t3bognm5ds3PdRzToWNWx5ULq4QqLCmMGesNKAAZkppk9aoLX",
  "key13": "3CgRxjpn2RCADKnQVt7nvfdcdUSCMkXQLsB7yopaD8xMRuv6ASBYRBoVHYk6G7vDEsk11CaqHj7Jh5HSuXeStCp5",
  "key14": "38rkXvprmPQ8L9ZSBEJa71KdfmQXso3sjh1q8LVidpqkUjvQZ6nPzo427M7KDLLeFpfLSZiyx4ZtmP1QE2NZYiDS",
  "key15": "2zmnTRBtBgUPGtPWknPurLDScnQaiogGyQ8Z3QZFvX17nZpJKUWsWqM4ug3GpCTXJqBmHeAa3vcrHAwXstXoR8hs",
  "key16": "5KnfJsmbKMTLWvgFTH4DXG3TKNPfBW2nT9Yepdge9WqV9ksQvCXqVDrR3dPUuwQxqAaL6qXteTWHuVwxT39gqV5D",
  "key17": "5z3o9kBq9XTDTj6RXjnyvc5UEAJMkjR769qREnWJt4X57kh7kQjdBuHTdLk9yr4a7JsyiNirVJmPqp7wJYan5CbB",
  "key18": "5TnSDpJSxzu1ShsT1h4vDeeH5WU8dQus32T9C5tp8YvFsisXaCLXo3a4tgDCBZnBdW23yCuCckPaRLhtCACED4p3",
  "key19": "2Ew3MrE6rRQrymoJrXiBjTN9jvv4uA5rZDv9sviTT1EfrjWXskMp77yaUfqfbeoT4fVt6npPyvRKn5LX97wGoYX5",
  "key20": "bpk64Ser5FfUach5gKsiBqcxeR58NDjfsN6VjBsjhQrFquXmNAnnBfbXsaGyer8AUH4T7TmV8bnZVbGTLBKcNa1",
  "key21": "2gx3o85ufUk4mUpjSd8EeBs1jedAehizna7FxEZRDow7zukK9SHRgeTPu9QTapearjR91bVQ5Ahe9PURD2LVZq5o",
  "key22": "5DBe1czj8NYrRjF9n23sKKJzZ4h1FTZjgHwZmcGQEuR6wuYrdKERHHuqk7baxNGkr96iJQkkJ3ExS2dHDPWAw1xi",
  "key23": "4GpmdaW36TLkYpE7B3S9ihHNyd2yxNxqsjMoPRXMhzvwSyXZYNkfVi1EBMWTqx2RcqU9DAuRNgx1avEu3tfrCCfx",
  "key24": "5gYRwPH1cGDXdoKQxuVH6qo2ekfQmJ8PWwcbjvP9EoYCUZNg3gWL1xdpUicD7dc4m4ZPtz9jBYZLxeUgajZXPf89",
  "key25": "XDK3Q9ryHVE3d4rCbSQP3ERm2ix3hzfggbfQbnNvBLZcBZg7iwqgsmuVhjNQNjXyYiR8uC8r1MxNWU6CxfxV4UL",
  "key26": "2Zq2DALFemMUN8JYv4JjKds2yddeE9cwWpeGZCvjvFY6Nm51QRP7cJUaGNHbJcWH7MZ4cJ92Q9vvZpPjQmzcEM72",
  "key27": "43AcHmG6kbeqLNaGmBBFUeNpQJ2z4rmXyA3H5qScG49iHVspvCswVsiUGuMxft9Ck6RmRbRyERGE8YGAtz35cKCo",
  "key28": "bCMCF3SG1JLXqhJTTNNNTvYZGXDzfcvtqYVAfqn4w8i8VUe9ZmEbJ4QP4gA1tgpRPcG9WRUs3ob7JGZzLLoW31U",
  "key29": "5e6JFtpp29jZvgciisokmbqTZfTpJaxXHg482597gzQmfvYCEHrANvanvyFL6mqyFELSNrxUeg3JoLRKM23CBP6J",
  "key30": "5QpPMgufU9d2uux1gAJjTUXXEPf9GQ9XpPCTbfR6YjW21suneRr2DAiHm1LVPWKmkzKtjkNaJEboPNAH3FkiX2de",
  "key31": "3zK6brmiwcnqmVB3SnBp1BGwBsrydXhmeqtoGSpkmXy5mCUz9XG14g4kaTN6CshkpWDzgJWCLydUqNG7ekKA5dy",
  "key32": "3WewMRnG96s9HSK3UtmdrcLkpWKUyR8ndwpd7x8p59ePe6X3KJFUCfiTqpyPdUA1bSgDFLS2gbKovAE4agBhvCj6",
  "key33": "2SjztpkHnENapJNvqFTct1h1PRYVS1cG6Hyg8ejWZXzhJKU2QgpSrPyPnrvL8uGYeK345LqsNDmVHpPCw8y1DtbY",
  "key34": "2AoPX1y5aYim6jFAP4PB9eay9Y2PVZ5Bfdgi5M1XcbapLUHWgR968Zn2hPnuJqnHBzBZHsBpAHW1N349tyxfwrAp",
  "key35": "iCJnKzAM7bGoP7nycim7XvT52CQvMtoWrfGZHYPsnYR2ANh9ZgQmrb9k3QjXUS1owPFZHMvbobaMYkQgsXr9ntr",
  "key36": "MzY8pFwBds6XbzfENkTCJJ7QfLiSTMCHwZSybKxn8w2Ei5k7rfuuejJ9PncHoYSAL8tj4q7qfGxhFG6hB7s1T5y",
  "key37": "57zynkDtFssKJAj6RFx7wjnecQkYaskafjepRL1shhKtHJbgnqVyWBzuB1Y4Gxc4gRdiHL2mGNoKDa8QiwXEV67c",
  "key38": "5UE4GWLkQfA7nYyvKUv9ApAXB6pSo9XPumLMtGNoZ7MgwF8xkA8o885oaFHPZszXJiL7LvVn95NKtibQBBb825mJ",
  "key39": "4FM4LwmroPHPP5y85BCHiLkV92xkC2Cs8TYHZkzApTry9eRPxi7Kr1SeFC3r5cmVrvJHXJPGGCizR42DP83S651z",
  "key40": "5zHSfAyZpMyNQhwJLWF5FgaBtcuPkeKduyqbDZhMW73BY5UZecPSPFuEZV3QmVJoVoqWVDdmupK15LY9KGfaYNu5",
  "key41": "4zMQGpqXJGuja4w1mdGXcmectvVhisnhkjo9d9UNKuCqeJUxhSbTz71n5uc7S1fgHXTSVpKfmqDWmhF2LmcRzGew",
  "key42": "3Zupch3U7e95q7jo9qHyiNXC9HMdLi5ZTSGuST2pZvqkz3UaL89pmduDCV6G1xR1hz9kbjpLhkwVU787spJVaCSF",
  "key43": "4oPgoXP2Jvxc76Lz8cs9pSFxE4XgmB1ADQcwMqVM5PrKuzMDH2MLKDiwzXcCkqzW8Lmirrvrx58wmxcvmPfGfem6",
  "key44": "5NCG6FCT2xhcgpD5HU821EUxups99mDz6hADguGA2M6DcJtqmnzCDirvBPxf2ZeHunbKJcX8sdztFQfYwyJUTKhf",
  "key45": "3kNv8gDAcbDsL9rp2tu63zEY85uuAKQN2e6XaBV5DTYt4Ah3dmMyMi1cyenQephYtwVvjReZfS546Q4UbARxHMXQ",
  "key46": "SzwH4Meq6DmXcgFuu9kJKEeXTty2ZLSKq92gnz9Q4iKh3T3f5Ga7mHZ6fTfLzu7KyWUuwWRQF1THSmhfmW4i1hi",
  "key47": "rkW9Pt2kZBdh2JVKauNg2AxuvDTR8Vsf4w2PN7Fr3aZuXpYNpBbxo7Muw62zajixhcrbGBX2kP1s2gTDq2tHTL9"
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
