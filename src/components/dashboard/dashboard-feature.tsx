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
    "3RviKMnmD6HUKpErjKHzWQ8KvHRAZTFtSbj4etVYWV6NMdbw6ugQ9PmZqXyppP8i3VDFoRwCBcQiP4kUPeMYynjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q5AwrdWc5jkvmYKTKhwmHrsadikuaWYzsbWV6qCaBhuPVruBYNf6GmkKnNvbuCihFXMRhTUPDQHTLS29EofCVvB",
  "key1": "3A1Mn5i6nhhwu6rnYAs2NUc6bPXV2R54qXh52KQEJBJGndva2Ym9kZRvL7x9Q9pi2ENV9AMm3bTzeett35Bfd5wq",
  "key2": "58t1FeAc6oSVeCvypPhZeRtoY8Q1uRqW1HMQ6gzsmFaVTZh89ZjfuEVtLeQe4egiAgri99sFrHQxd9ic46fi7UAT",
  "key3": "2NEgJg56RxjwrP9T5mNzWUKgSbHfg3GCdQ7RLv1vFT55JxKYa6SHSoL8ARtfGEmC8CTizn2g1zmNjAYfyGF9pD78",
  "key4": "2VbzC9hxGbsiTVbNJktb9Ybu4ta8KnxytGuCTACmhWN6MgaLnubp28MQJouqNCZfwwZJcF8RCamje1jSuW1f9tRZ",
  "key5": "4TjfYsWogXKVgpBVVwmS7iern7qtLEUBtYGHm21TkLfUwaadzvq9rm2KzLQrR7XdTqrwR2UAj62HC7RWotfU3XAA",
  "key6": "2fr4kZiMUH1Wf5v16oaFNHsRVb7eVYuTCuZeJ6X96JgSgWvtNJoC2XCwJdMC7U7tfUGnkDHhDHXAmkyscrmMch6y",
  "key7": "3GjiFs7DX2GyPKurQTos1w6v9GoXeBf6EW3XUpEgdaqCucKCZ28R8rU9n5M1t4qk1wxNPMGiuDwYb8GbYccXZS83",
  "key8": "4uXhp8XfHGzsVzZBV7rRDaGNQkEdNrEHgq2E9jRdUm8w9smGbvs4TMcKwnPp2i5R3u2xSzcqQDKf1jQfJA13nQGP",
  "key9": "4RaxS95tVmcUiCEo3oh35yrRvDGpuEEE2mSaMEU8zq5TzGga32x16NmEkSbviK3V2RLi7iADDD4VpSsAaSrMWnbU",
  "key10": "2oicP3HSwWTsApV6tY5bs72RVPSgfroZDcFowLWsf39cuvz2phtvMAZ2eWTSx575NSTi3uQAmCjWpDiWkp31iWX",
  "key11": "2AEuMhbTKZrUzbhiXXnURWB3Eb558YKQEYWz9x9HcpruBNYtfJiqAA96RZjqGRgX5ovnRjJEXdJrXERpcY8jCGKf",
  "key12": "3kFnUiL6xR2YYPtt6xQoV8T3ZJ1jdVLAY7vP9Y8h8md8HZdLq7uVabnd1j63n1SzdrMWazz77VTyKG4eDsJreUbu",
  "key13": "3jLUGbLoRUZu41FGne1rybxx2FeEXSeh27BEf4DeXW27Zsdkzj3gEpKZKWroHMZAuXhF2jTVQkyfc9XLEkWZB6xM",
  "key14": "5kmNbxqFRWZ4upHUVXSH4dvNAVBhpizJ78GLgFJXAZD2Bt9ffH2dwAnpZf7gBmcFnxUPAmu2BgA4SXJYdsDxJdHm",
  "key15": "2QRPvpD96Eo5j69pCt2Xs1EmbNq2TRXumn3pW7v3LKpZaUdyALnARqBdbNZPvLTXY2CKkk6gV4eSjt3BDy6qWnHm",
  "key16": "2uNh6mx1axXERH9D5xF4RS3rc1ziHsE6W4U1d18Y3FC2k7XiaMWN4mcpH5zhwtrUdGBqSHT4fsAwmj4cYRai5gtM",
  "key17": "528DuUMi16B3M7HgKVzxSEu5EDzuVzGKP4rbDj43a4FquHXsBLJEs8x3YKRTXe6QWsiW3tqLRevNXdm6inUiC6bx",
  "key18": "tbbotnMAHiN6zYxa374c5S2uZpbUHcFFmqp3ti2rUWRfwEKG6hLgrFRXN3ZQmvBqdFMpfr4rdbRqZKukHYYa8Wh",
  "key19": "4vWBQnq9Hm9nWqBETQEAhAeXnPYynLkY714EuBSpfAE56xMehmJaUiv1HKieN8GbuntdHWZyEa3jdtgB4BXTdK6C",
  "key20": "4Q42p6WwTRVBEJW3soLmSrhcw324tLp6KEtes2eixXZ3hYRx1czYfNLYYC2U76nALdGyvsHANaQ7EfYh8kMPqvrD",
  "key21": "28eLYJfPLNwPpGKv2X9u9Gyuz5tzV1vTMAjU8fq49BJFgoXwRe9Puv6UXzJw5J2B9ArL4SSCZzkar2CuSSXxY73f",
  "key22": "5hQfgJp8vmKX7e2UpS2x1FCHssoJudtrJxzenvY1na1tmw1TtwmKQUNcPLCe1m9eGdxfoFoTGaHjHof7oHKxK3tt",
  "key23": "5ZzSWs2apDXPFV41pqsF2LcviucioEf5ndzFw8WUpTYXyePHTadJSBBdF4y1VbBwuimvbFx8MX6V8GGzPPH5LoRi",
  "key24": "qsy6DT2BJsrcoPQR5DfD62FhoNYRVekFCw3coXB41o9fk3Y441nbK2Li9MSjxh76kjSg9m4dhkgDSebxLUeceCw",
  "key25": "3kVqeJGRw9nkjtnym28HZZ3HEGGdCuoAiHbUXnepHGCdrZSSe7yohiy8iPM81RCwLsnFJZfRPBXJ4j1bVbaVXRM",
  "key26": "3DGyNZRUqNMoZ8z1MNCkzHbUY3SP4Yo7pPW71VryqRtmFZFNQatTTLYNPMEGTpYNbvVaxf9rpdoFxCAp1SHoXSD5"
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
