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
    "2rAwUDfRykZU21FKr5cBV34bw9MphhTu68CDLZ4Wk4raxrkWHDoBnwbpbJkMSdFFQhK8pYMy4458HDinbVfQ3MLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PaXZrWyCeL5bpjmcAiskG32Apd87Vknb56DW1h4CC1EnkssAZewRk3bAPSWmbNh2MJk3rh9uMiQGejywwo5nMLV",
  "key1": "3PYL9jSQGnKymFdos7Z4G5Juh7WmwQNuHYnsc4VyxbmuPnhMEmTJpLVBfwD2iwXREJJxkSnFGZmgM9yaQuDVgsz6",
  "key2": "3WLuj2V6Bz2GZHgzTJakYKvrfKVCv5YVEZ3idqrrP3Juhj8xqfoiEEbBt2e9DZcHPcjFwyJjYSoDmZjq6gQWS5Vf",
  "key3": "4K3CU7PSet7ydGuMwKuvWRAty3sz5Cn1eV7vsdxe2rNWpd5EZVByBFWMXQ8mLdwr7bjPfj4Bzzs13DBqX7y73WvY",
  "key4": "3tyMgkzmbXidmRWZuQ9kPNc19i7gUAvoq7XrH83nzCt7QVNCJiC1Bzp791BVjCvRk2miM7pv7kxf6w4f8shkLQE6",
  "key5": "2WrPkXgVJnrNCsNN9XrPuUUkUmrbaFfss9yQq1MVUdjGBFXiusKBNUpReQM8zNEV3kG64zCVYHDFo1AbCodTcJ8x",
  "key6": "t38u7bd4Yt5XAqEjk8rawb82UKUqsSToKgwFQbGqkMysL7swcQpNoHvFWzzhfRxxAyy1TAisupXdGdfrjqV1WTj",
  "key7": "24FrHu7j5JUhY7H1FpYcrMsaMfHT6ysyKaVYveiqxBmiHXDzNnj4YUCbDZLd9CXCGbH1ugtT75SE4R2RQzFzPGtW",
  "key8": "5VPAt6aBuqidmmDr8iTz1GKDm7Nbat1SVhrU7YV7YduZeUcghANVS6resfuFQ3pTuSwfP1Q5magKbmhExicAa5BV",
  "key9": "4Re1WpWSHWaTznnVFuK9XcXxcSCLPVAYYrCDqZzkGSzSDVGY39fZEbhXgsA7Yn7TrpRj7dXnLQs9LXeuKgB91onX",
  "key10": "nGiyYdccjHFuWhTPXNcK2m5K76JjcwDbtufSqnNYf1jjHBhjvm8o33tiurbHbJkQLNTnjk8TqXtLhZRzAaCGnSL",
  "key11": "yqo362YgGau32whoM75t7KXcbLnbFVoST416VmL7kjcariLiCXtNR3ghQav4Xbq7pgQmMugzwm2vG2FnxqkHx6j",
  "key12": "22vRnyeKoHWYuHp1Zo46hpQJ3CVKnaBqMq5qtTMjXyDMBUEbMLiHQYeEs4CfSdCQ58SokcHy5jUzjXkJGKLoTB7h",
  "key13": "c1YsHJvenPzGV4Gq7r9Xf6nfCEwLkmGVgp5R33VuByHaKTFnRKHAVwnXhFNdCFcHQnUeZMrWaaKGpZkdYus9Ujq",
  "key14": "B8NfaLcw2jwaGsymd5YyDtrHEJiqjedikaQdHuTmYATtCwYh4jNmxN6ypfxPu1eqDU2orED8kHz8Dk5Qr1VMcFL",
  "key15": "2thwQeZ5mMoKQ9yW8TPVmokLBHozfgc3PPXyJnmz735DAgFzzsC84JrWu8h9URsMKSwBqLNHCeXC1Si3SzyfiXR3",
  "key16": "5b5Xw6b12q9NxeRP2UzXgAKMC2bMKcSfhZ3PcXmMFFerMrsuyhvFmJZtcD2RBW8Wj6dEEAwpp8ZwiF7T7Mrbb4um",
  "key17": "3cvKWi2ZsaGJNA9NMMagKPAipqjyjXKTsyjcVerpjSoqeFvnsPvBBSoQ7cLBQkWD98sXDjUDfC46HTgSMWoThB3M",
  "key18": "5ny1fu1MLWff4CKPvBoSi7hLPCzmVbSPJD3c4EohATSQ8UGsu3ihUmiLVtDqkCNfBh9TpRJ1PcLzrcv8ZmGu2s9A",
  "key19": "5SBqgybXrXiFeVSg6nVdCXjYcj6cj18rbLBwTbjycjiRf63tpeJezcM8b272CzKDjJWEzm5GJMNZT85XZV4rDazX",
  "key20": "2pPDcT5baxksMMC8BBE19Ja7Men4YH24CK3wwwWXmLJZeFxFdpqr8imuPYCm6dhrZAunW7F511D8PSBTE5YhYzeg",
  "key21": "mvD4ah1UdJKadSYDCFo6X5aGLUqFPtAQTrp2jwcvg4hNhtcu8utZ2odYzArFJtwqZr15G7bFTgeVhnNDgFWdk3q",
  "key22": "H97M46TEHszxwDzfpQh3GGnMyGewdWzZ7XZ8CGohNk9YBppAhW5pB77tJKoLZuy3YpqzgbWAzeJApf4wZG6cVSv",
  "key23": "3nVNJqdfVbePY4g4R28q9hXgDm2usVZprMUU6uKtyAWrL5WDmqAv8HswP61DAaRDjjQbGpPxhuiQWELeQ4hb7MSj",
  "key24": "5AVzHSqWS2thnVE9m6noqh5CAQuZpn1saAgAysGzGJxC2WyS3fQqbqXtE7qFqvnxWGbR72yUnnYNqF6Av2qaUQng",
  "key25": "4XaWfbAvERftG25EJqV1LRxUJr5NRPvBWEzoPewdxAd8ue1mw9ubo8SVWgp7ww8xmYGfYQN65QaXpE6o68Tmp9jD",
  "key26": "3GDBo7aTd48yMKdtFBcRkkqrxsf6RvaqNRb7dJ76acoSAAkTfngPjSmQwtxh6aN4AeuaYffitdentBGZFJzLdcno",
  "key27": "498wMSLDy1uQNJZWHeQPtPCEAsFDtN2T95rvjATZbdRCk2wyHxNKHeE9ZZ6Ta8ZdrwtRtL69A7jkkzu4ZC5Eufry",
  "key28": "48ZXmSEfzb7MdP3uuvFrSmoLvUfmGnBaZ9d6ndjNUqQh7ymjjEus8a6ZAuBBsBHN7Zmv59iLXyXhyGnbzUyzckei"
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
