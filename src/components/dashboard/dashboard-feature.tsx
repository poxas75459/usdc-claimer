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
    "PbaDxmU3bE3sGeSfbtGwgfJfWpxb1AhkWAuEEj71pk39FfnbjmxuRd4uT8hQsRYv27FMVzruWTM5vSYHNqPCTsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Q8EzwmbTUMqdTrjXNsaZuqXALTCnUFaTZNn9sgd5s5rzUhYv2DZzxHsMT2pJgcjvKEyYn2VvEyzf4PrkpYCHuT",
  "key1": "2dsWAnfqGhwCCYhtBEYmVLUaMnZaBLXMgxfK7USP37pj4fsfnjWA8KtbKw8uiyGjoidXVFXajcWHBVPoSjFoe66t",
  "key2": "3FttjcCf8G7G4Emr4ijYqreN2fDd37XSB4w7jiqPTvTBVcNzXsX9ttnQzqN3fyt74uhPTWMPJRZe1VGbfcNUE9Bp",
  "key3": "vzBFFeaAHDXyaMSaTuKpWRNNxJcLCEwHcXeaqVTYj768RbjJvjEjFqh8hzECw8hTn4XguT9jAyrJDgL6YcLE5mK",
  "key4": "42PKpQszz7tUsJsif4vM79BTh4fLdxcaBwwsYHCd5gekSagmFDtahGgMX2nuD1r5JeJ93gLvKnox2rtWASg4tj9J",
  "key5": "2QnQZRQ3G6dsaHT2RPjexPHoQfeaejkwPDSFbChPQETAiqhxxshHsEe6pL4xkjzFZKhBkMNhk3ocBX9nxsvVgZu4",
  "key6": "4wBSoJAVgGNfvxZbTJ6w3pQPEdegUbi3zWeijTqsSzZuXccvQ2B6uus2bPhuGh4mdQULbdQpM1uAD8H283g35HhC",
  "key7": "3Sx4hzQNg8RRckqXmkvTC64L21YNoQLGU2AjgFhpsXV9PewDesafY6GA3TauwuQ1Pmz8zf1FKU6Zr4v3qCKLKiHc",
  "key8": "2ha6CorxC74LbnXRWev1rwZPLZvyh8HaSfC7gwbnwy6iigDm9Q9cfQGzF6J1nJLgBLZDnBgtfatJidUyzrmRrFnY",
  "key9": "3wy5QbKEJPB4Aar7k1WUDf2gbjcygpDzepQB9Y7LFuwsaU5oc5CSwxkxSNwaE6HrULPzdSNkcdUSyjEFJupDzkPe",
  "key10": "4NpBmUEv7UrBU23LDcCSffDH9Awv5UcaMu2qRvFj92bSyPzsqgER3g2upZbADut3LqAEgb2gSjB2K4is6jZSLW5b",
  "key11": "5RxEye81WCFmH35MPHfZSSgnJ7R88xzmmmhrWmAtHAAArVA4sKjHe6z5YZa1ckg5W3dNoC8ZtmequhUm9S5Lp4Mq",
  "key12": "1UnFvVy5hkquvuspwHUcR1WmynFceyDEFy242CytdokJo32bJtjv5trQmD5yfnPKsDAuAbAgh8BB8cigXHE7MxM",
  "key13": "3wdn2SYADrpuqsPckL3bwk6snx7mWboHZjs7nzx7ZVQmmHNESrZw3LKYryRjNCjhU5i4QwQQzGVYqTUSxAwvNZ4R",
  "key14": "2cRETC3pwHMxfZVBrbtnmTN9t5nC5XhTThGNNNA18SN1mrzU5UnoiNKN3hQ7sFqJyJS7dg75SakUuSG2tkivLy9F",
  "key15": "2PvAbK8D3RVHjkTAfnJciAyRXnukhF8Jp37Uu5s7pWHWkf6zMguPRnCSX1s1bDKqG5n7GcCKebePy3Gq75CAJ8F",
  "key16": "3GVWBMwh8uTQyy1hSv9idmpatAZ76RWoKqbmwyDE618vhkJJ4D2oTDXYeDbPp4tuwPT4m1XjS4JLnARACcpCGsBK",
  "key17": "3bmJYeydqqBc27C2C5XV13EhQJp16ovTQTzqewnvbxDJ89GbYE1KighQv61nmwQqwJaMzkRR2dyje73dC3bVSkcu",
  "key18": "5EMo1yCrTFfJRrGYyhCtYj9dAHBm5y5gHnHX5LHiDWVqEFs2YmpWa91xVezo4Ew6CkMTjbdbZUayjkyYYLSXKpgV",
  "key19": "4abLJ7mGn4q6CbimiX4MnqxcBzGqamNzQR4B84ufb98GMgm1uzFzeFqog8yCu8bUmjD3YfDMAEmKoMewAY35PWrw",
  "key20": "2omNR652htey3Wjs8LZeg4hJVgtrkCJVbQ1Ytkz9veht7YeUmChWFzfYL3fTCxBhKX2bt5Jbwe3JwNruXSAVAYct",
  "key21": "2QfKTgM5DQQchV4asRE3yCd3DhAUuwRZxutg96M8S89Wz5GSrpm5PLEDQGDVAqQQqxGzRxjeXKQXiPVUTHDVHiUn",
  "key22": "37Yv3bGjhVKpXZXTHtQSS7gwzLGiESMXPUJ6Tvq8akda6QJ556Lf391QR8fH5A3WQPrdSTRR7iur8GqPHawYo1vT",
  "key23": "5hkoTAYJFVF6dHrxrWrGNHZdXjNctrXv4aPgacPDMN4o4LLScbs4waNxu3fCXE8w1CWFZaSCsjQfy1dpqdgXZrx8",
  "key24": "5Fktdzb5u3Tzwgj8dC3pv1qMoPc3brKup3vrjv8qZPWoq2sbS2JSrkdtGVhbTC65tWatf8TK4js6ZmoK9PWSmMHV",
  "key25": "kcdnNWUnoHuNAuAeS9NiRcCaepjuYy4xm5ebpv8CY3miNAGm31tzxP9hNqkQo12a45VHhxSBnaPBD9xApPkf5Hi",
  "key26": "2xcx3Uj4UpGi7a2pPcMJP7Cvh3CDB8Ph1DNxvBnDKG5cYQt6pBRiSsa1WxstHvBHanmSSTxrgB4uLJ8DP73gZVnQ",
  "key27": "2nLvaXy9W3j4W316neHgx56hCD4MTkXeWLwSqPp3yJjUVj568s1zVeNPczciBC1hDHk6QRPhziV4s5HwR4viJ66z",
  "key28": "4s7yamkVermgUGBu95dPJnx6uE9KS574UppMJmsxsVkyWXMkVZNMGQuoGXQ8ERqXNCadW3eRrMPxKGEb3LkC3Hpf",
  "key29": "51MjtTDNTPAgeRVoqtFgUaBz4Lfbsb77iobUergJwZmLJnn8K6AVC4SciNkUBTyUgPdYU9gJqYp35P6Jgzp6hMNw",
  "key30": "4f9Vwv9Jm7XV1DLFLsTmTg2wRrXZ2zw1CWSUByWyHDEVqojYMrhoTz8NPadRDuV2LHQHdnbHzXKxEH66VaJ9bp89",
  "key31": "5aviVjVwqNrBpmoUndDVFVJDHPdSuqJ962kbS8sGGa2G96iFcyXVx2Mof9er5MCAhZQtNDFrkuzRYL3a8ujnXZVf",
  "key32": "4LvG4uutre6HwEDPHWwPCAouDQnjE5AyCGjD5LaoSYEUgnnJ3CgWFNg1xbCSr6n4342amf4QU7dEt8UA5C3JeG5k",
  "key33": "4fZMt9BDK6XSAyzRroxtUiiMaWhZJNwzPNimekwmvtViLDjMqfNYsgMR6rbetgKtkiN9zuX66PzNACppgwX9TC5t"
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
