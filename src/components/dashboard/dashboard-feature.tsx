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
    "5FHctAJi4zxkZ5sCKxrEK4AZDrkVPykaFWwqdp12ZXk2kPqJ2tLfsvspQCjrgimx1PEcze5mMx6FViqbkZa9isw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q3W9LtFvo7rb6YQUzUZvstrUKkDqmWBdEmnNmzqAyMBy6iTnN8vxt2pYYhoexuj9KK6mgDngRjJFE6BKaenrAfY",
  "key1": "5wyLxoaSyRJZjE3tFYZuZbCSnMRVS9qDNQEJpjbr9jswnnZyy74y8cKRxksXqU1iaMPcdyapetziCQQoN7JqDzSS",
  "key2": "3RXwwM7Ai8atevQtJGHe3rDV6w3NEybyyeNvYipGibpumx3G8MVYFwhUrsU5CPNQvSDmSqmFoUQeoQdtX9kwUFHb",
  "key3": "5MyGEZxprP2NNQ95g8XWY1mDN1PmaykE5EXbSZdRZP6WAP4JN5mjNf2gomyVS8fXxuPoZFbF4B5ysrL5LGZvpvqT",
  "key4": "4n1NbmYzfWKG6FPsqYtBXWqM1mWN5uP1Kmi9pGT3zisdFfe8ShYdwsqEXYSgK9czhdboLdd8wcFGUMdeSGKhC17e",
  "key5": "2nJ3RRthEzkFSojipKNLL7RQN1WrPkzNkuiszcbyudKgaDRdLR6WwsKZdoduABW1Ff4AHwCS3sx1HYuCv21p37hf",
  "key6": "4F7LhU4VCNwTHHdpFUGb5xSfQDGyDwbwB1TAzd78PfDWEn6VWG5jSDWDW1dtS4GmiCGSxeJSUHDAsRJgFL3mKSsb",
  "key7": "5ZnhEzNAsktF2EZgCfiba6Ui7KPRztcvjr6CkWTtDzvXqKKU7YNKtBR8JuBXGcz9EHYss4AUv6Z7onE4PBXzhJKu",
  "key8": "9CuC42xc3xDCSu4z42VpskjA91mQUdceA1Bqa4oaWtBt5sgmsfAEvRqxbdzr9aSjoF4iBCfxp3GhTvvtLys6ibX",
  "key9": "4oP3LWhjKMXTq4uMRJPw1UFRq68BvCpzEEAagiAfgiKR6Vh9iVJ8k55JZfPps9LtSeCE1x6RmdrArMe6uA8EANyR",
  "key10": "5cdVmoNZKWef99EtpeHAZYU4QzeDFU8nhoFW49QpqGZjrzuAXsUp6ajdgJuti94TRshDBtLNMzQwck5xFeHNjpNf",
  "key11": "LUtJtnn1T9w8piGteVeXQPgcfeK9Pee7DkBZPo3pL5LQzK2EgwZHv9uKm7LQ6yieMgQK4Xe3mWaMYiekDzYX4AJ",
  "key12": "2U82njKLMkG3nsstg7fnQ4XeSrMWYcjssdic39x8Ko5cbP1y1rhEahKj51VkeGHGTiDf4pD55DRBnrhKWmHWDHt4",
  "key13": "4WAuQ3JDGY1PrSpkNuQ1yirfZWFXHERNczsowFpv4Zhqchk4JMGDxzmXzyuAYi1ZFqA4UrXpe35VimhJTZx3WN7g",
  "key14": "3NJ5eLApy6SGbAWWiyheNqVzxQkKNb1dCogGp3KTNFJs2nBGptpgXzhSmZi4n3w5o48hYVqWrE3kQxWgY8ENKN7d",
  "key15": "3TNuPX2pooJjvqhW7EQzTSSpLNDSZTyagwuWZQzZaV97EQzAcYMV6f1JUuLrHpaN3Z9Ttb1NMzQ6WsDpqiWw71sK",
  "key16": "24jBboXE6HVAFTw2zWmkpEywm3AySZFr18q2F3zmf3gEAMikXo7ZncAMeMRvndr9ujBakGYxCqMH6K15WCPoFVvt",
  "key17": "46u4XZVNdnfV53m6QMvYwpDzt72nukk1nxjmd33EvUSVjc2JENcypjN4Tp83RudohvdawuDbuW99YFvab4DgPMTG",
  "key18": "3nkB2C8cr76ej4JaWJXotD7kfoZr6YBeoA3sf9LgoiKGTP76EVWPsUyLactGwUV6fwxVPDTWDvEPc3h3JhaA7tfy",
  "key19": "kDjV44YqbKQ8oFnrAnMkbzjW6HKx3pAoadMCttZP6YYHFkcCHQPbtqojbHetUjLDjCpQvnW4vMDVseHWXHc9wNL",
  "key20": "3HzANq1Jpv6ugxBicdSHD112ronaEJHcpkJxTJY5LNpLFu5bwbBWmeNQtups4C87NELNJDW7nzj18Wcs3HepGyc9",
  "key21": "2QzkSP6bGBUfNNxhtDkEEtTmyvjNt3vnehhgNcYkhTpohiFP5wLWwft6mYzPxSj38YwzhMS9qdgVeUYKUA9TdRFV",
  "key22": "YuYFmJbsNvuWhp1Ft5dZd2iuUtfhor7FNQ9sB2p2AgpHfzYMdbdXGxtbBNX4sQ74jKMPvNuF1yFkwcoqfhpw18L",
  "key23": "2yCCmANeAgdJtfwYNLSKNN2JkfJ6qwQnxQUChAJkpPQqkCTRTLvBKiipuchsJGFBwyokQjGnxgTDFPjMBKN9S1oq",
  "key24": "4MLsAymisLb9m63zAdiF3CsZ2JhvTxtR1s2qVpRWmQqCryeLXqjgCCU3hDYENPR7zQJKCk8x4HtBELZZFmVwSdGN",
  "key25": "nV9rPTSXPPrMj8ifVxhgvdNQZycY75jsiEf3SebaonXFvbgPosA9LKNTjy9nK2qBExFuT6QCvvowBgK2PgTTxW1",
  "key26": "5tWfGcZgWVGGXHLF5sRaqLouHSuNvCqwg8xMLz6R5m4FXP6FAMZa9CnABw796iQvgY2iin2xC6TUomc4aC28V4A9",
  "key27": "4i8yit1LbkookJMsE4nQiWPvTdeKvmHEMP8vpLzR2dRxUJivBmjuWuqWqqbACucH3Ri9oWyvyhqgTHCMmvy4XVz",
  "key28": "2M9YWR8kgKMV5DcayJnwd1j9gWSBBpaVS9tAgagvALSH1z6R9R4hwcDzcsiTMVgRkH6T74AYMrxbanJ8ttnkgKuj",
  "key29": "4jL8Sd8cczknGvKiCyhiiq1Wccitk4KdLHRXZzrSaBhHGKMzyPRYpAmTGvK4P6mfHrK7JDvBtoDctdAs839fNDHr",
  "key30": "3iM5bET3YCGfBDhoKPbof1KTu3qy8i8pcnRQbKMyDZy46P3hzAKYgwyrhMmMe7uXPE3adrN9qbxggrBKkDNJhAuZ",
  "key31": "4ThcY52m3rWnPFgPqgLsaYyZyg4KqBdRGDC1LXEJdEgGoM3L3KfutmCRJBXNcyitmkgn6ReJPKTv8TAspWKq7Sat",
  "key32": "4Bz3wNDCXcYbD2ZGWY6ZdeyWXEXLNJpdLzWwViMKn3HJPdET8CLuch6QZMFuRGd7fWK2HyrRMeVuH9ciVLA7d7yj",
  "key33": "2eLmeWmkofQXXcZTKNP5C9YUms3hFc8g4XHGBi9WbUaBfpvEWUnXAV16MoEFj5NSVYw3M8hgDdvwUfzEruDUX4hJ",
  "key34": "ofaH8gZW5LbnkJ6gQUDEpidgapt4NFxQivXBdApkYc8kQnYobPjLdTJTy3s8kt3BqfqkMn2UC6uipWi3T8ARvSJ",
  "key35": "62mTuc3egjPK2vGpHUzf54rjUUxMLrabhMmkHxJ8GiwJgYbDoP7Htbazvw839jeqKH4kmAaMMSTskXm3rrmN6JA2",
  "key36": "4qXqHpzFLcNgSuXruSL2HF7Dkw6fLtKCxtwmz4AXFjRvLFWnTPRictx8AYdQwGnLetjqxyHcDH6Vko2aaHzEe6UV",
  "key37": "2uk7cC2pzQvy9aJ1dTbBsEDciyNdapeWAGoCpB5fbRUJ5KqEKTyCDnwswdu3CdL47RHQyVENn79KR6HSgW8D5m3",
  "key38": "4FsM9ePkKQ944dDREzqkWX4phaL9yQp2T6hV6Z5j2BFjkADeyx9xP7X4gpGF6Txh6WYoaHGzKThKM7aPxV43P4F",
  "key39": "59JthjQYSxEVxNSX7nQQo4nTQHyMohg1c5GkV3AnmtfeTfVaB1qVAk9x9H53HFUzhAWaX9MZyrNXbrz9LFGosZNw",
  "key40": "eprvth1ZyngSukkSyTLm61YNw427yjhdnNNJM86m5BexQigjjdmMcEv4iwyZXe4FfJxLgmb8VjccfEzw3rjoVAH"
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
