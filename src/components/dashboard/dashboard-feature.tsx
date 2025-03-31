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
    "534q81JXHxQ7rAeeTqy8hSBfa7LfstqUEv97awgUcxzsxPjBK11dMAwwmEAN1hw7n9YhaTQJT3826cx83iHJfHWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s3D36Jz5e6oLcwoD8yEZwU381dc4WEhnfkBq8fKwcbQk8hE5u619LbAVW31151i2hDkL1xpZMm7ozvYt9giHMNL",
  "key1": "2v5mfK6bJLUM8xU8xzqxWrEszrUY6DCS714KMcYb4xoNkRX1zwrtuqPXh29ycDoFno1zLLKWS45pzPAMKSW7WSv",
  "key2": "Hne6KMbQbnTv45QxUCmwBf8C4Vu4yZAjdCjNyrvCXAe9v1jWB7NXApKy56PagSKsz1DVWz95pyB9HD69GuzfXML",
  "key3": "2vagsdWgTtbUbPFCeDwdFcFci2JiXtMTGLngdVuLug6ra5RnNcNBm4sYqwfodGqy7HQvdVZynjM6kxxsFzLkxEA3",
  "key4": "24Nwfrq3fjqth81bmrTsLFynpsZAXPFVgpqApkTtqDaAN3qa6gqqyqpGjTSjnSABGDL56Z4nAHt7w984STj6v97q",
  "key5": "2nm9ff4sFUcoJxs5UXaW1A1o1bSUqsnvx849qnX3pdSV1gHSTGziDnYPZd8CA9xXSujUjD5Whi5ZxwESiKZzGTjh",
  "key6": "gbVuA49swmw6g5s58Zey3cemw3jfXWZAoXNgqXmgcXjTNEVgDAi6YcYFbmtvTG3MZAgdpmVfwQqoUmRLihvF8Z8",
  "key7": "mw42KrPgB6GLhTvSjkyJsjuLgJE5cGtSEmtMjPMd6h36WLsBkzfBrCxfzanHVKjx3odoo9qpMZfm6cwT1Neqki8",
  "key8": "eG9H3XouupHPwK3MKCamKTxLcgenunEi24G5vxAboj4u57p2A6mHhbf3VKu42JZuT5FK52KefYn8vwL9PBgeBvr",
  "key9": "3HyvU7TyQMhJ7b2AgXtftdz6o9rxhZrHxsvU1KBEZJVnQDwam8n92pifePT1MQT5pM3EesggP7VEoprmwa7GiXfu",
  "key10": "37QANzd1Kd9x7nbrKCXWtTAxaf7bzaGN9qm2FMMytC99H77qWaTmZHyLKVXu9a4Bg2FkXNsKjWMzjSrEQ9e1bqAV",
  "key11": "5u7Yo6dJuH87fZKSfnCwLTz69CTF4nv4mFTvAjM4iS8jbYWdCEr1GAfGYucebgqMph2P3JwAEsj1GnF4pB42ceYa",
  "key12": "4VweDkRG2EAq5NABrU8NfQxBURCz1Er9dmwueyoTpiiSgEEE25dyKjdPgo7UwSd9dikiKkq9gwNZwMA8zmqwvPr7",
  "key13": "z7Fo124EVmXZgqLZU1R4yjp8bVAoZ35RRnWqZbN6qRYfdwkNCt5H1HU4zjaXYacP6NQkCk87XH72xRBXKQfzsgb",
  "key14": "3aRo6oHy5qbLAmmK39mW44mBhBYhJCCacs3QdghLAeRohPZm2nwmnj4yyZsE2TqLbUR4mgnD715kwemiRa9mAs2h",
  "key15": "4cGW2EvhNjKQh4Ujpk7tfuaRgnFEXBZeLi5peraHASrwLwGFojMvkenx6bzJUdzbdzGsLxQHAJRE3m5uDRtdBnQc",
  "key16": "5YX4vAvJT7HUkNyLg7q8ZZAPJDmgMx4oTLcFa8KE2pWbHMU5WsMUcbQWrUSDCV8gyY59hEvhD465jHfVPL86WFXs",
  "key17": "1BohoMspy3dLrbhMxyYaU4cgdGpaxnqLGU9K6Ga5RmbefuFSHDkN7FHXgJRwtbvLJqbYrHL5jj5GTtor1YphR8p",
  "key18": "37AjS7YWzdGwBA2bLbyPBLC8yyWujy2jWDBasnNuDALHKtCcWKtRaUeF1Gkxh89AsAb3r4xXxWD4e6wTsB88PkZQ",
  "key19": "3xcHFeW1rj2ZHKbf1vZDz4mcTp77hKXAPpPXhpLywMWBiwfUnj4eHroynVa7vducHtxKEHC5tF6idm5o7hv9mmmT",
  "key20": "4hu897GEqvcLQJ61rSHV4NNciiA7MKm1JTgacdGwMiAFUVrxZj9zbDdchvk2eXrVqkACxGSkYV7tCeF3j87qNmcV",
  "key21": "2PmYbbScuAiHgxrJFSNhTYEbHMq6ULsSgGsKGpg3QSCyxgzvk7HSD73nUWRUydM27ixJHe7YtKpAuPpxRdfPCF1P",
  "key22": "4LMrSNkQA2onfhp4xezbHq6uSi9wihvZHUPveN3mvMp8FoYU4YRdbsBsJiryM5U8b97XBds5eTn643szXoAoU1VP",
  "key23": "3YAA8mSfVskrPi5YZB2jW8oNrk9yuJdJ75kgyrzhbF1gThQ4aG11CEJxHXjo3mMuRuHgS19eQVNuQ5QNu7pYFeCp",
  "key24": "2hNV8iCG1qdfFdRmddSkNSAAU3atArAEMUkEvhTn1m6PV1v4nHWg5Y7rjkkiGrrSMdWJ5gndKnnHSUmv7ChgVbS4",
  "key25": "3BdJMtBfbCFtvdpMDxfapYSjpkBivFRkn8fYfWw11axQBidKqeNWuAtkUeERaC3S6VRdEsWR3Jq8Dwyj9rdSPQo9",
  "key26": "3ZgLnqsxj6WZLCNpytf74HiCnMCycdBpXra1p5nmoSAsoMSx8XDJKEjNuPQYFqDrHgzT2CjvC15mmH3DSB2GaVNT",
  "key27": "48LmG2EXntJTCWSjDeDCe2ub557E41XHpfuwHrFk7KyjqBFaFMBnJiek3sA7APnxStgCdQah8U5wZa8NBiRhww2k",
  "key28": "ZwEmVL2XnKz9Ch4gvtjf54gHmFurLFeGzDUJAiodp79MohY7XD2vJ5fMCJSdLGMUgu3Lq1jR2S8zFq5HnG47dwB",
  "key29": "4WPcVtW9zyY1ZSWPY4QpCyynPasZN983kFeNPVr9Vx86JdkMYedGLugc8s4RbGQZgtZPs9ANBRPrqMiQDNRVWth1",
  "key30": "g2Xf5zrSv1EDNSbS96wi5e8WEoAVSQJtEwYx7NYxGF2J5z964eTy4Dg3cGGcgnZHX5Kk9EjDYEmv3Fi1kCdJ6pv",
  "key31": "1ZFs1rPCHFHxrTMtUgWS5Jgwb3RJp4WZLnfwUyh7fdShejPZ74SSs4Y2UrMPZt5qDXmTxayZWJFb1HXpLuU7tCX",
  "key32": "4i32ouVf68JMfrofmoQnJJr7b1kKq4ECqgNPwhQLSzRyTf9LQjwsDWkk99pi52jZZGueneerrKgmvkHqJ1XUsK36",
  "key33": "4mvWvwTnWK8wHJvjPrWnetPwZVEPPvgDgxMUB4NLvs8AnNYLnuSyLJ7jjn4kmMoTiKUYfT6wVhzC4UBFVEcVPAZi",
  "key34": "51eoGPPoy6n6QAkgXFB6tpsKdY2LMxoCA3DpsTvEc9kWWXDKeE35Ldm7eBjymBKa6zEpJ4vhGeg8BDbUkkbQ7T19",
  "key35": "3vnKyNZj2fUZ9RJRvAPL7Li8arE52CaPFGBEGb6Kh9newgWP639sUi6zYB3q4kaa1pL1ororC82nZF8jBzgWvqdC",
  "key36": "4uAyjAXU2FrpCYjg4frHKm5ipFX5yUkM2rhZqoim7866MLeoNWTY1giXXy53Ku78EtDduTNqoofSzzg5tQnJe4sN",
  "key37": "3qB1vrzFtqe64WvS1fdY6LYhWAcJ7s7KrDdNNTCdnth8XmvSYqLAMWwo95HjF72XsSieqytv1QJ8zvsFwVKj4V8q",
  "key38": "4FpRner7FZJktfoCsR8X2FpEzReShRMTp7gT2z12zMxgFPSccGMqYkk24RV7eRcEqPBrDEa3bVb7TWnM8YCzaEbG",
  "key39": "3o7o1XfeAYdWzoVMznjVM4CbzDM9Kaz67EAs9JoK7VZm6NrZv99NKLfFnLTJEkZTtxUZAwZoYehANnVc7reYmCF2",
  "key40": "3L1gYvam8mr2Qrtur6ehdywEUPDD85EKu35EujGfGkzMvJDhMwaDo5pji3Ji5vn4bdwEmobYH2uRZoKvBHoMM3xN",
  "key41": "4p4yyJhqrY57t6BhFS16hpqVz74TVxZhDVVZ9K6CDS5TvRnYAWubCqEMU2pyzzY4atqBT3JQvczXurHeED7ZuGVs",
  "key42": "X5r1tqao24persqXni1xVNzEMCXHWNiD9uYQ9g4wHwXtT8sW2iu7HPw3sztpqYF3WZAT1aWfndQwrSwuMhUBMp4",
  "key43": "2AjxK6LAW9tAw95RBnYRRJM8LdAApLZoRjm4uAzBi6oSMood1SLVMz6SeyHjHsch8f7nC3PvABQNJEP2RAELvigZ",
  "key44": "2es7UaRinN5LSCh2gwsdwhcGH6MWY4rs4cMhR52k4zx1pZxPrbgQGyZ2c1amzoLNBaVwHp6YErzEwCnqk2My4gMq",
  "key45": "5GAURwHKrAwAns1omJFeEEtbY1nfQ6NUeXr4LhkAdxGDzFShnxHWs8fjhg2gYtFUzRUzE2G9Er1abt4G843ir4jN"
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
