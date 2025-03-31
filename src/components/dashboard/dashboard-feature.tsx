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
    "41xrShwVspkKNh8HeJYWBvXPrKsbjMfXvFddEBKDVgJP7HAh7ZrVFrkgunnQ6XrC2kUiLV6rc9PgGHNeyjK126Vb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oSLmYLTHeXZx9sW6nEdktT71FkVnfCwDVGQ6MvL12JviSYDb6bH9PPuHfb8Sy9ePwBrBMDaEjyqTrmHvKzMLNKA",
  "key1": "3nddY8onBEnmrJeetG5dd76jpxspvCLwLENNduQKyoqNviu1zHSnjG9fNuF4mTL2QfskqAqgVSrssa8bfz3LckKC",
  "key2": "4Y8hV6aHD2QfLbds2vxFbkvbm1RsWznMCwBATLsNb2PT8rovHvCwWvA5DWPvyPKxytsX5nzi9AxLW3TxPLtgzdRk",
  "key3": "3hKaszprRPKNiExLTptwc1cp38XdNuje8e1vVtDcGNiuFTYCJRraqpFg4g1d7GyKCwbBrup879TbwRiDwMAUDJzt",
  "key4": "SZSUZdtP8RNeA7NS9Fz4c3TUXRpG88wuctz8LpRLtJkgdvj9iBFQTNh7BPxkiAuPdBj4u3GTyyMa9bF6w4gHb1t",
  "key5": "G7y2JbGxSKgSX8qEJpzyFxX8sCy85jgDwFUGTSDFRwTw1t1e7YiPa8heBu136HyC6RMCHudvR9DY8VckyfnMWKE",
  "key6": "5Lwa77zKpQUzL4tp7Ak5qQzVkMzMoym78WgUXUqqqYrjMnta9HGtiytxqGFUoQ9GdgncDpBCBkvHKgogA1dzvVdE",
  "key7": "2Sbme1yzPR46gVZUGBsvxy7oF5caSdkQYy2QRRSnMvJTbsvPzdsXqMMvSz5r3PUenQBNriCFMhZGEuhaSFjppJQm",
  "key8": "5w8B84xpzYNC9Vv8H25q3wEs8cUWjpnfC9rXwT4WqqTAHHLPrAtRRopjQiSrjvFUB2r5xK8ELTvriCPqvaCLt7X5",
  "key9": "4z3iYenChpVStGjUpLZkLux6UCmyTmbcag3Xny9RvKbKhxA8G2PyXUoHW7PbkWy4yhZgtgYFbX2raWb2ofT4TBug",
  "key10": "5Dtn2sSuAswdtsZiLcBqMJKiQDf9zaiHrpaS3Z9DDYu6WsQDUzL4Z3Jen8iwWaWnsFrqWojyHBY3D4Vb4vfu7gB3",
  "key11": "4pnJbecqMSDr3Ug8hQ8iQ8SJgHjKviynuv5QMAvNNFTpFFoB5BriW7zPL4heNAVUQdaayPqzUo4rJ5vKNrBAJNva",
  "key12": "5zdtg9wCYLhoqMC6S678o3rFk8AMqWNqZuS5MRdHaVfpd8VAf7kJC35ckeJr5G7UFRx8n3wbHZhvu4gHC4P7XqUF",
  "key13": "3v9sQLRWeLrDnUrbw9utcjE1iEgUPv1ANJVDrdRShveXLRsh49D74oGGgUpzz48Ludu54Bcg453RhyqP6NWVMrpt",
  "key14": "2Y68kGFss43vCRVQeumVy82a4gpJfrwAvo6MKNmr65g7bNJt54EPv1vZCexctjtEcoK8f8nMHePryGC1keUM6m5K",
  "key15": "jLsyCt9PH7Ritb6VRBKNDH62MDk4WkKAt24UMguqfdTTFe68kQbv2r9kZxWDzgtTLppNcRpEyU8pyhk3BPBju2m",
  "key16": "2XdwpbPJRUjy7ndxSPzq5Lrf7KeE9D23Y7fMCKA7ie6Swb3J2TdgwZegxfcA5oBJmnDHCJHMwWySp7XPrTH4kRCz",
  "key17": "td1AQ6Ypotr89NeVJdMbLeeWhGCRhyn699RoRQxWw45w74UEsHw36PF5eUZS6Ezbaj4NYEGdmYcZrQzVPizuqfS",
  "key18": "24e1x4szJaicTHoTKwRk8xDqzkhCWRQo8Y5G3kdVkFqgiRNPQwar5V4wKmLkFJKP9UDsjujYQHoLbHQcRsAx9nv7",
  "key19": "46Ghz7KCasiuhtfF17DBXiaUbPZQeCfDd2mDq5DuLA5FnaJdqGw1N5xyeKxYUgTL3CvniHUJYJ36Fmhed1FRo1Ao",
  "key20": "65Et2wzn3G36vaH1fYXnstNsUBJxDnX1RrnssYNsT7iEQ1oVP2K8g6SiNVfWyq4RLWzMWUFD3LHCyZHvJ4iJcxuJ",
  "key21": "3gRCituTsU4QSc7fcEDDhwBqa1C22wwnqge36qtHU6M36HugeoFnxbzsjtFxdickeLNjP6xxY57dAr9TnHGqMPCa",
  "key22": "34xPKDtGVw82vcH4acT2KXL9mAjDDuZBr4yKRJEYz172wqheRarKqnoZVA7dkreAh4XocNbrcGfrHoiLj6jNB7q",
  "key23": "yMi4zsWR6eSerpGPTU24cMUivVtYHvjEEjJfHwZVybuBrGVPJJQPzNd43K1gNGBAf9eg7MPq3xLQ5fMoxUjzBrJ",
  "key24": "2aPorE5zzc4d2XHHMatXRbaEj8b4rjjFFG46GKvD7Er9Z5zFKpES1Qkjz8iFDt3TVH8VsKtsPfvHfcEPMaDi9A2h",
  "key25": "63bTUFN6a47oREhoAtix1VgaiLmtVuCs1eXoAiub2PSNCoLYuFcfM59vyNTyHw2CrutFU3LDGw3pi5VT9MJChqCz",
  "key26": "wxaSvvDm8Nsr53K49H7XGn2n3D36JdbEennxn1yUnDTXx4gYX6C8mua3TxwaXQN9pavnbbr85G7NhUNdjCdAzXv",
  "key27": "5SdD1bW81CtdfBpNTaTcMWiCN3wTWuYR1d6gbAKmzTqJtSFdQNFjDeG7U7iAayc88LsLvNwxAkNiADNVTGcN2xsk",
  "key28": "4tGHH6qGS4PBaTNQNLDpcAy7zAHbQHM8wL5hqSwEZU4is86buzpoqzWcysHHF9FWKL2ShRHGmquz3V9XtMtdboAH",
  "key29": "4J7vcupbkTLkZbg4ajy5XTbFjqALfc6NoGiu5tuE4BVFktGCXhRKnZpomkL4zf2X1mjk6kzBq9xVo37H49kAtLRr",
  "key30": "27ZEm2YXEvotawTur6sVyKTqhZ5gGBdsnro9cJixo2qJjqoEA8CWQDkXGcaanVzH6iJw1wuFoHMB24uhuJpoFNn6",
  "key31": "B9PSUJw6jJsxuRerjQBXFDLwkY7YLQ1PR5GMUi26DeEoqy2BFi52Wv3A6kVJhRbxkSNQweYeGP6YvF9uXbKMv9X",
  "key32": "4UrgdfVRcREHMZz88AEvZibYnsmv7i3YVHTAjcWrYfFLMfYHgE2EFGk3Zb1DrZjFoJMknwtfPUMSns6ouDF1ziQR",
  "key33": "4D687qhqzuT236bqhFXu2Zr8nhPM54AaoCWxedsyS6RvyqtS8rtGJ3vFQBV4SiidHmzyC5ozfXLS8Lw7r4PZV6eV",
  "key34": "39ycZDWKW3Ng7Q7TB8agVgvZE4hgVonPXaiLZXK3NkDw3xeEyDga392JJkqn5546JQmV55g2KjzZkZdpc633Xk8w",
  "key35": "5WrJeafq9SkNxfRPkACV3UgjK1QkEc1x4jDfvZWfnY5fr9wZxWEs1ynge3rRvxFv2EPvdg5dPqexjQeNdyCMz6xh",
  "key36": "5VbnhWDCUnJbjAgEtgEPETGQ4qAgQnZEfnWxxhwBoDzaSqMBKwGy2maY7SPxYiNjiMEUNsVKFGYUwS4hvchQPtCV",
  "key37": "3Gq6TfJaYiGh7PwyEXHUXMJRQEZnafgBaid6JVfRnkwD143PJSBdAdSYSx2Ds8DbNyx7KA6Ju2i4zXiRKzrU9jW7",
  "key38": "3wP9zMw7jNYPDdazf5TTo9GkoK8TUfcGmRWkbn2VKkePprj87dqgLxke4F13CAdmEqhgtX6QPKv2FNacyU8Bc7nC",
  "key39": "2VXCH9SNJmRMf4YRAWu84kr1GU7L71PNAxfF8VNBwxG6wauZw3xciwwwrsRf6tuhXCEqJbDxwwK5AgxSY1vNcnfG",
  "key40": "3wETgvxuLmSCwG7kAYHdCaUNfs11FLa57ycLcEgJGnMmrV2H5jcVLBbq3yNDHUtDDZJRUcxu2ckEhAkzpATPaocE",
  "key41": "fi6dQhSQU6hbk1dsD8mJMcti9mKkmGtvWzY1GeHywhv2MMiVRouGwHbphXz7oMQrUTWPP9xyxa6XjpvFRoHMP3v"
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
