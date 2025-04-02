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
    "5VgqNT9p3bMh2RvG7hiw5sqd8CNeQJeVAmAtkUL5U5ezBrJPLoXxgwjb4EtRvd97JsSa2aVagZoNCNcJgNbTNvUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fneAB6qZFK9XKKDihS7EwJj23Lwrr3m7ASvcz7GMH4oyfCU4TQCrkYLQWSMs2eySDJw2fA3LKDqzHLA7qFg5YHf",
  "key1": "37fWvz4qmugxdYfQh5vvdNsG2E3MTCJWXoyypxBCDBjAdYoV1QBjqdJNP1DW5kmDpktLQdeWRx4T2zpGtyntgvzX",
  "key2": "26qDuWBSvvsgVvm8ZDtmLme6TzEgjXUeHzhCmFw4B7FW7WgqeJMJcjSYLZyXv7wVLM9oWZWiKnoRAw1tVg8t5guJ",
  "key3": "SVnDxBko65TKKyyyK3HzxYD98KfnDV55oN5V9auTf1ZhpYivowmU7sAwRhjNSkj4h5rQiHwKpSChSmshgMbJwTc",
  "key4": "5LGkBWYVusm9YRRSh3EWqKbN4wmp2G6d76n9UhMu24abeWei7QUoVLYJm7wKtWcVLxqFmzENEvU6Ug3LVGL4EvJC",
  "key5": "34FVWrhWu5m2bxpxn4DRdPNk8pEjq6EdQhHCY2bqUSdGGq4ScWefzbH8F23QeJZXRKp2NLd3r3upc8ox2JiKaHFC",
  "key6": "56qf9wR2DeFjsEpDyucGuhqq9chvifNexMTzcUoMHLPeQysbxEso9JhpjFkSYirgE5BvUpp3ecVRzKRkvYzARTKY",
  "key7": "5JJdxT2pyY68GzoJmzirX9JkbcupjkkwyynMMzCgoLUs7fVikr99sNDv1QvmYAaYDGiDjFBSgy2kAPtfBErrZHEb",
  "key8": "3Prh1DoS7hkBT7b8REJc25pDsaG4Uy4d5GAfHwVfHLniXbqej7PYgRw74fqqPgSFFy984KK2GkPgFhkhvJvvs4e5",
  "key9": "3uKos8KFHRwKCSk1Yg1NcP5Bsgd6vT56r5pzTKszCF7aXWUCTpSC9scqm6pV9qykWEqKkqf65Ho2hdnVorT1J1gn",
  "key10": "5xeYnxvNufWP89Lvyxcaw8qpru5uQCJapYypahPxYL72fX9HBv5mVvZSxdbSXpcLGyHwUedAvvKEBvBtvw597ikd",
  "key11": "p5LgW7EnxstmqNAwMZh5i4wpo1VcfmcQDHadk5ZpbziVHqnigpHKSzUfQeaMutFJNJHcr9A4wHCUEKF5wrLj22p",
  "key12": "M2MLFLm5Pik7sv8Tq4DY44cLLCuxbch27E8bg9EuukiKokxUGedCgdU7tfbPHaPL544PuCYaKnp8Qhsev9h4Jiv",
  "key13": "4iN8bEDQ3LAa2CRy1QCt8Fq8r9czjtP1Uwv5HYv5AynXN1kMcGm9mgrZwm2qSAmu9pVgZZDkbEe6AN1JmgGkvstY",
  "key14": "4oQoGRWbvs8qEbzhPycf7H7otgvTLyH1TLTnpvQjoGYwaFUop1MgNynBtp8RaAbU2VZps2ZdM48mDQiRCU6xEWi8",
  "key15": "5Goxcm3aKLZW6XnezsemNNNLeRkdQSGfbCtxXCxnSat5qDfj1VWYiabKRHFqvMgHQD8Jw4Dt3csP9Rhf9n5MQLoc",
  "key16": "4hrrY6dvE4i9nwaN87odHCHc2h6fWEA2GWkJ3rJBRDRTWaDHY9zQrwvjYgvsGn4LUcPUbHwQy6MMcVEfdGSM9Dmy",
  "key17": "57KaAZaubiqjV5BcizTca8NR3EFF36Uz8RHJGURGhJzVrMH454juq5RztrgozPRpcXNCBCtznEVPe87d7LPM78Yf",
  "key18": "3HBZNbmYs86TfiEDJZKVMr9YPdtBSG8c1NCf7pr4213RYBhqqmZteDTrKHU4FCDHHndoUnxGCtmRLGr2eJ4YtuVg",
  "key19": "3Pb16vBzk3xzDYkRkD1HFdgYb5rNNDGbXJyijarRBM8HtRnsQyTUEizBqM1vEUg9ZA9iRJ84tPku8G6upD5EPPZn",
  "key20": "3fSTzGxtofRAqkMyQdmSotdMjcrJ2wzM8uYxgMJJy7uuwLDHJ4wDEMh83aJS58PKFJm1ypSuT2M6HsaSv9A4tcHb",
  "key21": "5Ea6Y44mYv6zuwUmAH7kjiD7t5oStvfkPwbU2qy4VER1YRy4bjWtzVvxQgV8z1viGpG56dQJSraY1HZMxBdUYBhZ",
  "key22": "4fFS4empzzC4M6AvzM6FJCJ89NdQaLjMf7L9ExAg2HqNSfdDJuN499jyYtNCTt5Wi9iknvYuBfx3CvPmwNgMyu2Y",
  "key23": "rgZA5sAL788YkuDjiaTDDyZzb3rKbkt2NBXfEP7Lrp8pUAGNnMoD2hutLi5TTp2rtU3F4TCGX2YbkweKZ1SjcKw",
  "key24": "3bV3MVkou8768fm8La17GZgYkBLcj51RpubmwgV3TMXdj2sMM2W3Q4BEvk7qDveXANZKWoBYwDpcjvQSSAuwYuvp",
  "key25": "25gmxP9ajLRaZBVXaCpLp5FNfU3TLTUhPMTiTK9WedWowV76pNbMxDr5tED3vfibMod6LHcouzLZZEyfTfNbAK5x",
  "key26": "5wbsFVQ5fgaTDYPB4ZXCob84PWjtJLexWH3s6Zw6TVNG3GnBhZkJjwJ1mt4ydAEgZiLNaqcDVt27Tc1ziCUGh4HX",
  "key27": "N4yaGQuCTwwyBMY6wmhQjiugjGudtHmscQUtFyQDkhAYuxJs8aBTUW7UbYanYqFFEH1FzJiVPk1zh272aYzp9iD",
  "key28": "55in59FnpXbHFQahw4XCPWF3FwF3AixfU3bH1yc8z2vF2AzjrmCBHU3ueBc3sQbbL67BXf61TmyFJd1x5iay82fZ",
  "key29": "2fkMAnoDM4J2RrtBY2LWYLTtRKNTcd5C3L21WB6dfKtkrbz5GzMZx7Sevf1ifzCxCaHK5E8mWtnJSKPjxWFwaMfh",
  "key30": "3D5o3Pw5ZL4p3iY7DAYM8HCz5DtsMAXSWaQT9PTHJCD1iQpxBBvVmoHbjRiUuUdbrGWvoJiWbF3TxnT4LENPmgZE",
  "key31": "2mj1bwVjvEQSUp5kHipPHvLueKFQZ4NAisYtWgfrDZyDhV3ho5Luov7JGtQiSxos9iUhQDT5fHyBRxMS9cw6Gtxb",
  "key32": "g2xk7oScNxPznsainFpU3NsojHHATyTKG1veLoPguXtSybjR6dFR2F2z8SR63anVKqsciJrksszVcQXGmi8KBLF",
  "key33": "5GVU5GwX7SftvDAk2656Bezn9oA969vD7YUs8Y5fCfXXFsA9fSN62EEVxnXak8bzYG6yn235PZqFDssNvNAPmLef",
  "key34": "3C8wV7M6pFbqtwiM9p9kJQnyHNhiTj5t8BEfe5UM4357RkfA6wYjPhn19TRFJ4HoFRuEZvucpAU9NrojYRiRAzCf",
  "key35": "43DhvC263UNMSbKdicNaXUzSGq6YrJaW4WpjMDv6jiuJJ72PH3V3uejwqqvyVFCw7BPjYXjfMPmN7ZMSWGJUPTi2",
  "key36": "2SXdvjzmenA6ZqJ4sfnGcfWmcZSCE193Je14V2VRLKnfSAgnqk4drkThCsMeuE743ANKu3JhNZ1y7y5HLkdv43io",
  "key37": "56bxM3PmpvETog83xKA6kU6YjKAgZc2QKWRuN1a5Pjwh9y41Qb6J41btU5Ym3n7C7EhBB6RqEWsWZJsUa6rZa2MY",
  "key38": "fx25kvJu2uqnTog7ZSth8RYxBpLyzwSaChZLF3ycBbJ9TJiWwWd6LxbqwtRsno9K3xuiGpWzRAJUiJhBtMn3hnv",
  "key39": "hyhKwdGYyLmxmPjt4HSDeL5z5mNymqpVrC4UGUQ1uwrY7bYjRkoW8roxeGJ2GXRnrnhFr4oqZLH34k5rUh2d9Za",
  "key40": "24ZLdRpiVLbZeQmtQ6nspDFiXXEPUexeVKWyNeiTREdLfcPeF9XXZTXuX5DbCY5YU9Zneo3iwsBTDBgwPaRNPhJn",
  "key41": "4skD1mWM8z8fzJDMxLFRyRr6dzTmJdCZ4ibgphDkGuVCESd6bniP1DEUekZXc7LSv8z2aysD3C6TCNapugLeGnbb",
  "key42": "42nsme9KcoFL2kYT1hcqVEvHnSVZcd31ArQ4asfwbfz452DEBUsf6kGiaR2uxuYPCdEVAxiEZXwYiysXsrELzGQ4",
  "key43": "2jjYodEhyh58tZg73KcbjGFP4CGf6W5xXwvbZu3rC149M6N91PDHeuhLBdfpM7T834iYGrGx4wMkgYbjiRbpGHvG",
  "key44": "B7h67AqCSQvs6dJUu4CCy6ZF74UL1y2E2wmBPLi5YkQk19wWGZXkfEScR1LgzYuXLfWLsKHxkFNcp2XYNope95c",
  "key45": "1fj3j9qVM2j6U8GC5Qx7SvVQgtskaUXBio1NFqLBRdvJvjdUwpVQbaRcu8PgqbLmwyaNBxp2Pe9hfLpUmet9Qkh",
  "key46": "JPVpfWaPnsorDfhmidMwETBCZinYeuL8QiFA5bDjFu1477zLWvpM4HAwGxenvtupoSaaj3jPoYBttpYvNgwSb9R",
  "key47": "Q6PhdCr2ZXxaFJ9NwyASVVHzBhToE1oX3HaDQrQYUS1Li6XYJo8KEiaZNghnpsr5WAPETzYd6nA3PxQbWs8p6c8",
  "key48": "25Mw2oVcosnMui2VdEiGmdvFpBAwfKscs1Sa71BkxTH34XYWFgZ1fLogjPgLC7r3xCsE3iK76wzQVWfzdBbtCFa2",
  "key49": "wNTYiqRG7xmGU39qqEoQ1qNdaAscorAVvDFC2mxM4h2YP9F4GM91t2zqtYtXBCyVD7kzhPXaFH6fmaBzTJgzUgY"
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
