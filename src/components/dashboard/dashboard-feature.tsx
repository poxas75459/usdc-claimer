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
    "4XoDN86twCcEoi7cfpAwwH4CYVS7oZSrXSvLhRuKjJ1iYvzs87d9ZT1pFKoEWZ3bWRAwSdyggoHMuSroq9McLgKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26fThoSLaGu7edHtZr8kpQs22rkmofU4t9tJpHRiKS3sk4xNe5ZhwnK3ZR5BBdsrXwYuQu6RhESQVLpDbqF2nLrU",
  "key1": "2DLHiB89tfiyp9mCut4MNNuycQW9sf2vcbPYquQfToVKj7hgAC2i4bHtpwSsV84FnsFp7W8nLqgwM464NWDzuj3u",
  "key2": "KEaNw4pih65qhK7jLQ8xigSExKFyLG6q7NRa3PQyxs13ihhwEt2z9J7Dx9gyxmNxoqoDC76WW6g9vZVh7vEmk2c",
  "key3": "5mn1CWsa3g1poDXLReJTNFsZravaaDidbS1UCC6KUYuTm9Bz37KTXrcQbydSwQmhfypcq9PVsjmorjUHc44iMtDh",
  "key4": "2J7U3TmY2LchucTyXgGGYWWaHr7CDca7e7pexQMYNHKBiZn326M65dBYgP7yPaVzjerJSJai7eN7SzsHuU8Rn3vU",
  "key5": "4oVLMo8SJTPpERH6n8o4JhZjz4TikXYXHraesYAmR1wpqqVm5iFU2hCnJmTVeZuctxrD8ZdzbP8MmWp3Lm5jwRNV",
  "key6": "4mts7uPbLn95hYyYmdyndNsK37hCeY4rP71Zzsf8HHhScvvvuGYywaeUohLqBTYLHdAvydBnL3QUY2S6kXNezgPQ",
  "key7": "4Tj81r48X5Hc2ucyC3uE2aECCqkZ7f5aazHMaFY95J2tFFAJiwkv4ZFMjtQBKD2N7QcokUqLmttPyYmL7gVLufwo",
  "key8": "wPovLYCwbv8hcp3zqh1H8b45L9cDiTXwCdxQop8tQkGh896EH6oiHabkS36V8ess5MwJf2H2U7bcjW5BwfytLqB",
  "key9": "3Smhpi5YpztsMPPXxuXRoNHNtryFwbTYdF8LkJ2XQBGV7Y1pbRjY9RYhPt2zcNetgYJg8iEzfAKJ3L9xZGn2TEBC",
  "key10": "3R3y4xJSEVnFjvZoVGCNpcQWrcjPF99K7V5zrBDNCxWS3Q24pPXsiWLrXAuuafvyoB1Y2Nq2mzbDu26doVckEsGA",
  "key11": "3EoCM98LKdP2WwxqntuMNC346LSwdTGczqV8KTb8CnfFaD6YooowYs2ouA3XkJjdLdZnr8LpKpFi4c3Bqgfhd2my",
  "key12": "2zAeb4QLkgmccHJEXTudWK4GfCHvWBakdFtzGxdv7mE39jJBNC2EGsvjuFRk2UKAcMNaXDK3WwdvXfWfW5UmFLtM",
  "key13": "5upUKJvGrsk9P12cDDmk767ffUoMmGac3zpvkPa63p6kWP4EmE7xm8zfV3Ej4nDcbyeMcdBvmHqdXes2BAUJCqJb",
  "key14": "2Wng21FcPP29vjRPfwv6CZEViyBJxLj7xfiwe5zVxMWyzcgYn6Nsjf4VWy8GBSxjWKAX1MCZCoUUgZzCPSSsjY4p",
  "key15": "2AuuQYePauQjhGp69E5yk2XUwWNiPTni6pfmwTPsontGF4sQwn5K7ZYYwXjYxMWHcrDCnL6fKUNC1Ts9ce6JHMJT",
  "key16": "2ArEMhs7HSPKBVrLbZmE4D1tivbejsJAWh6oAorcLPNdAf7sMSvR1tWAQbe9KwPhMmcd9MWvRWHXr1CaguNjtDNx",
  "key17": "36pyV8TvJuAZ4h3Ywbq2hYz5tnLafYdPzbCYqHUEPjBrEfSEt4R1uUHHHPLHTiAyuD3ETtG51aAyvMBDZPzx9wi7",
  "key18": "BRra9be7RRR3x5AU9KC69WsSp1aXzXxD9QMQA1uDAhEYTMtdF3ASWWjq9Y1KLhQNv8N8tnfzVzMHb1ReWLu3MeK",
  "key19": "dgnCvGB7ZaAbgxRWAFxtmbVX6eGPkJoTAQAX7krYsDQq2H8SRgPvxy555ynUX2PwQKyrV2M3ayzrKWANQoHZRAr",
  "key20": "3XNDn6XJYx2DoevGyLMvDDdXymxhJz9HnxJ43indYu36LsRubJiKmw6aDgW2x48RWxEmtTBvQQhyy89KgGFa51zq",
  "key21": "2cmCGRQ13joXyH5dBnk2Ft1y4yRfDXxoCSGWQBJAUQN9aWSkFjfLzGXqSbSvw9xaNRHrdtSk9rRxSNJ23A3edw5t",
  "key22": "LJV8JbuD6B7q3A6ME8KFHXAa2WszJbVjRzWRTJMv8HEB5TbQuSPo3iHKRfzSMftJn2zkDBeJjnTPGfELz7cXDj1",
  "key23": "4wp2nZUzeou5RwbuvC6KYCWcHC5NwURcijwnX68z1i8QPtU4pMBcNr5MdyUYsrN1dgBKns3WKSSNMfw2NGvYwdrq",
  "key24": "5UkZg1KevAfzh7sKqQxRLLiQWgxhonkd5HmiZeik1Ls5A3uYsB1YEoif4D2dhcJLq8f73kdGSJ8jmbwYJaE5sikn",
  "key25": "3sSu3nXbaTZ6KpoAV3XaSPRS7RQUN3Yt3ENRdk6Kx9iyTD9ZcZdqpp2zqwGCsUuTF3PMACn67kPGbJWt9a8Za4XE",
  "key26": "2d6AmBfiJzvtyGjm3e5ZMtZCgkzGVeGNiiN91nMFM61oNBwB13k4pfWwJoevQGforiNLNLcY22pN8EGcvZe2ytb6",
  "key27": "57SF9PNbWvUUxTVTFKQ4hanFCrRg3gt5nTYMuPrJ6fg8x2GSkTcaoT5USfbAgWUAd7nnQyYQE2mu28X2qHvJqYwL",
  "key28": "5zTxyfgwj6sN6ztVQLoHL6XYyKoE7ehBVH7iWqV6c7bNtQ6MU4NC4vmLSRbuVmLn4qKVadjSa76oo8ur5XWcsRUa",
  "key29": "567zBvFyB7UKdiVviXzd7ZsCEVezf8Zwjxcf53L2bA8a5W5tjJ5Yn873cVhkri7maGsDVsuTgg68RUnhNAoK91yq",
  "key30": "4apj4Qm2UuiP3EdKnuATEkGVLuCWfv6AwVXySg7zJYDvYrRqsgMkpRUyYuUTUv8AEHMfkHoobVqQz29odL1qduEm",
  "key31": "5YHcQqgUEHkvYxAXv3sZXptWG3qEFN6ofpEUWtQ4Qt7YEFjexFcWFyZFa4BBCfGcg46kLLgujQFjwGMYSaNr6mCf",
  "key32": "27bDuk7XdF57VqETHZ8TPzVSjsCC12eDDLdjTGTC2YgAR5ekFfsVBLnvyJL2SaEy7ueeEmnrQt7mYzQFUA1msZ18",
  "key33": "43FQXALBYLTimKgsLAx4Msc9Xzoqv3z8PVkwJRtuuNc3V6gbVVFNRYeyZ9sGVo6vYycndYDaP2fzBLLiVWkDU1fN",
  "key34": "29235FwhzAMq8LH6ekHm5MpBgv4RQHNQG5PMQ4372jVP144FuKgHQ46Hd9Ym9b2uQB3adq82ZvniQHn3xZBZ1b3i",
  "key35": "5UnVBNx8W7uHTpveWkhbNNQ473CmAaZ8hYcUsUBHkn5tHNxsyJmqb1PhjJ6xJLwF2dEAN1od6uo6UpR5af9sPJgc",
  "key36": "3R4jQ7F4ZsNxLu4LuvBTXEMUeDKmDKYggzgk7XS5Wdeo3w9ftZxQsZVHW7XztCwdCqsFj6KiVC9BKVUDzkeV7AB5",
  "key37": "5WTwmG5ghe6QvyJmjMjRYHP5TsniPAv1fnydo1GS4cDkYCfkNNnyuZnsDKAP8URXERQphfWwjgK1jQiBQtWM4Ht8",
  "key38": "4gJG2ZKfFCFpxSUyDycY9tXG7sewztP52UK1WKKdU1PjFLDKAdVJ2h6eHAnteM1Jx4QJ44LNCNVg5pqP9CnYXywz",
  "key39": "2e4T8fFW7ZzeVia9UNrNowxwWiGVVPES9oHBLybM27vjj5ppnhBX9aigwZuScA86YWYP1V6o2zkz8opvfnDevkoQ"
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
