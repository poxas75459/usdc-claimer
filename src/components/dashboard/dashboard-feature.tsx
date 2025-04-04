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
    "DZciPoCmC8TfdhzQ3CDvjxAnjsMgdPGofYQei7dyAEkhkrwtCwd3cMCQ7AYWTQXWpohSimgKp9h7ozdiFfxTJ2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QsmPAYewQ3AVHF1DJUKTdYfpt1sHqJRbaPsHgy5i8TdyfZNWwqHutVwPLnXxVj6fGMQrTGLsh5YATDv4wNj56M8",
  "key1": "29zByLE5NVsnZ8EbvctrAePAvT9ry4dChZgdA7QbDHBVqbULZJYAnEwxPSMTvtj7ByXNhR7o9Z6qBJmRNKSWcJUG",
  "key2": "5jQzjPaZ8MJfCkkaEWfaxTkzz5Q3vpDyKtc7a51H1Qdt2z2r39HeEfzUJKuvFCPYwm6hWCYsN7xNHFQXzoxXnM1F",
  "key3": "36wnSJDedvWeptYkA9YKX291oM7wh4MGUv2WNX9k4YtH6oXCfqKfMRaicnh4iLS4q6ciS3JDfvUxzUmfNPA5ris8",
  "key4": "46YQmN3ViF1R7xBdrDJ33ddyiNigFbfA6m3R3w13ex5AMSJGtdf97z69z6KHYS1WHsMb6kJuK8t6wW5oVkuM65N",
  "key5": "TemShTALnfF8UxWRhisMM56ygJBHURxgvqd4jC5EkRS2svFXyvM1KTeBZCa5zwRAuankQzP5mkBNZnBJ5FmMcJ4",
  "key6": "3exbXBFGLTyiP3cssdWosiHygXZT29jUHodqXjUXezTUyBf914Qz6QjnC29Ssardor6n8nf121gc4ybC9yseho4K",
  "key7": "3szR7Km21CZVVEau34AimRqTmWp5Qj8A2geAhZ9Z6giXhMNUB9pFeGSa5idQjx2PyDHjpz3dbbQE8fHfEB2yGkFA",
  "key8": "5mZYgGM5Q25GJFgPYQJaM8BxXqkGgTzNFpiKfVAoJGFF8eV7HjyvdbjX6LExDhicZDjGkHVQ12A3ej8jPmonc2pv",
  "key9": "Vz9hm7HSzuhgLJ6awfM4cJjV7tb148EJ6w96oDpuYrxRicFQp3NxgNoS8bktiTSXcPXiUVvSM1xZFCYeEKrepT1",
  "key10": "XTogf8sz6ut1Tc2pQkGkK1yspKcJDaAt2oHng8BGWNB2AiWZ9XEFZAu1Dn5ua5gXjaJ73HXdoaq7vQZ8bfn7oSK",
  "key11": "4G8v69xaboTfAK9PKiCXNuiH72Y1uAFuhobZFp4YyKqcNdKtuVoT54jU22atpqtZegck5NzfP9DhubYNG9kcGEvG",
  "key12": "5m83jBWXGM8ipQ3DA6NfmwEjn5UJHioRP7wnrtx9XNovtjbCF9WLHfy9eradaWrfzeU6hpPXYfPCq5zKWBs32bbV",
  "key13": "4Yh8mK95dy5FNheBM2kGbuxX4XquBS4Ut8RBsQn4nEsWV81AxEW2dq6winZkH4m7PMgngd3qTF69aQm6Cy73X5ou",
  "key14": "65Keop5HpjLb7tke9iFvraje14QjWMQpwPXRcmiNcwhgkgtyLpoJRv7ovwiv8LUzaDrS9kUA2RbJGjkC34tkXipK",
  "key15": "3o5J4m9eXyaDYWh5gD8uNaPhCAoFgPFpA3aW7SnLZG7ULrdjAbioyQ5CYC2QBchJYfG1D3P9WMD8ZRMYZC77sCaC",
  "key16": "25jhJXiMD17yWhmhk88CmsjHu3eucY5DWQmtoKX2zPn26u7C8frvQobeasrbxYrMTuShDTqx74ZXq8FSFme7xmtf",
  "key17": "4ZS9Zh6B1SsBYRLfDzrKQMuajLvhsLEwrPjd89Y6KBABVBE9Ke8igHvyMhTtwkcyg6QJ41ogf25uhgVniMKyYNXp",
  "key18": "3GYjactX6p1KPDoW2RnUtEpwTdDtd7D1N41SRY5Xnia6yyDH8CviiU6fMsKSFGuxT3wxMhHxptweJzjc2nCNzAZE",
  "key19": "2vHYr3QE1rRmgFEnSCuTptZ979ABHBHwcNhtkCLqrSyReVPVPN9TtwcpX2qnBbZusZMPLQQ5rQBfyP6oLSCVGsii",
  "key20": "5W7T1vsTtaziKVyxMENy4WXgb9GqLNMzBZnDKZtjZivP2qboDnnHTiAnesBHUBjyCvaNnQvaibQ9r5TLS44sH1dF",
  "key21": "v7L1Lc3GAFLFqE4cQPKvTzu2XXFZ5fHJxFDRsu6ePZhYenDG5DXe98YMxSFRp11t3cgZ1RzifBWNHkBjKg56sqZ",
  "key22": "3AJP1Q3xWJ4CnZJ6jaGbRDxXxxJoJD7gT89vXWxLJHfBC6q5g1sa2swoi2Yf76Y1gETVL9Q9TefK5GrJzRw5hvLU",
  "key23": "38RNs3xEsL5PyA6P2TxR996e7QZBLA69NfmWEP8Gx6dYywWoiK7zXV3TZae8SXbKHjv7xFdGQTK2msGHY9yfCRrX",
  "key24": "5t911JV6S5QScEUVXtxjfMAXPAvP6QyYTH6Tfx7cSEbpPJd7eKNNFyaPWyCYbyLudoc2aeabthdVa73J2ibYpJhw",
  "key25": "2d7Vfea6N42NGfeorVQUVkNZMjMxLn8VE5sKfuTQr3huM7G2ZabQE2bKiUAV68rmLct9smEELSCH7YseMWjTdXpr",
  "key26": "3vA1c3aXW9JuMwhkDGKbKAobpqkbxwz6rAccsBbfB8sDJLKyGKobBtz17rxDsYWz8VaWYJ57PXtwrfdw4ALGKu75",
  "key27": "3YnyCqahFNztuS7raS6vLFWSn7Fssn587NnZ81bQ629x7XojS4vNqp66byx72L3NPDw6YPkGNefkdHfE6S8HCsTT",
  "key28": "2LPCqHAvDGerZUPW3Jy13FKao41Ze2icMZAHw2mU8F8oVRvPpvnKqEzKokQeCV2bgcuRRWGFkj8u3JpMtdkpS2D6",
  "key29": "4NQprnpwEpeh2d6ZoQjVwMx7ntzMh8KgDtJndUmDRNJBDFKVHYE9wNgnAneCwh6uDe4SHX3oLMUCCfSCD7Sbgws4",
  "key30": "4699EaoGtDsSczq5UQTUDfA1ctv4C1QWW5sQyurdPvnNGfFPhwrd284pJwydTPLYDe8d8giJSBAzug9A48yfRKJB",
  "key31": "4udm2StBpZyBQHXhwgLYrzfNXpUrJNhx7grRMxnUiiNBgr92gwdfBx6DuEgnoi6xwR2HqutcHHZJfefEdPMSjcUH",
  "key32": "4xEh5wgRaLngQWhMfvtRPC8yASysn511FEXzMSE9dmn6zbSRCCrtGYh7DDNrXpX1Ycw7kH3BFTSEQeVNMyRjuVAP",
  "key33": "3PSqkJDPr3LFuBLGAbwTJi44DBxHLfkFhjT9cxgVEF3dokQwKDt8agHVZC2H4yqMtxQ9mAHKzqZrhkuTpQhZZXwL",
  "key34": "5tzjovzNK2LibboJvdxDVEdpmr7HNLQPnX9aGckpUwywh2Pjh54PXnkPzePLocfoTMQPLZEb1L5H2zDw3SK4AC8n",
  "key35": "s1GeKr95zhknmhmC8Tp4uYNAfGze21PTnMR3VxYrmCxiyzdAawYAdJahU5JS3eJkWTHFd6WrHiQxFYfdBiLQNvi",
  "key36": "3DpCRopsVTCNRS1mXcXuCtqSaZh4QWf9xjra6YQTWqtywgX1V3bwd4hiqpJ71XWppGYwanJ95AcWSUZR83NsyEAt",
  "key37": "54tJwm7ohMaMRKcB6aWfgpRDsMwgZSiGegS66sUXP1AzWHZPUDL9ZJ3G1tN1SBbRZKijKxVv8ZuFfh2i1nSQGjda",
  "key38": "5ZvCFP8zy9D1Y6ogL86wgd6WhkvCddTfPUCj7ASZ4mnVo3mUjgGzSsBajEaQ183aZQdjdJG4QkxHJFREV56RqM2b",
  "key39": "5jywYbXQfCLNUanzVU7v1LB8vyvCg2ewSffU27wRt3Y6hUyvjsNkDZXYtwdofjBRwamjJGg46rDSnHevejVQwABD",
  "key40": "4KAiEPzdP8VVXHZgscHCg9nkMKqhyVkT1cEC86ekoboxtbPPtCuWARRKVL42zY5ZxMARPNWZZtue7sxMp25TPtwu",
  "key41": "4h9BwknJBhKGGBzEk8di2dQQQ9iqjQcqAeH1d1fEbnvkk9ateaGF8dCcFsgR8U9xZ2hz3UC1uKrqzaXCxiqNfCiS",
  "key42": "3rE6S6QZ9YnodPAngSK1yaEEaKEtBsc43tVc7x41EpBk8PxhtvecdCh8ac7DfTYqU842L4oWSq2c44CG982H3afR",
  "key43": "31JzQ248qutVQgdKNZGdDHtRQTg4yBRckmDtW2umHfHxtGtLJ6dKPvP3j1nFvKMuufbg3vVP7yBP4sxr9JZ6mRPf",
  "key44": "4iSMEXdwQebWcEZhhoX2bcMQEXLRyNjHwaVZ1RQkaDSYWVsfV5moV2ELYGPxLzHzS6DHYfoUcJxSbBzdkKA4DBe7",
  "key45": "7KV15pr2FyWWys8KLeJxPMNmNEjAHA2mnv8fknFegVCcFSAJimvtoQqKt9zbqTZcxXid9VAooELNfFgJpPUPS2J",
  "key46": "2AnF6kCGLncUCVCpcZNd6Tf84RHZzKnXRmJjNe5ukQr9qiWpa9u4o9TNPuNgkpGWSmTjKhU4uXFHeRxBMtCuru1z",
  "key47": "4EzB1TQTPjDRPN8W94qefgjaYBB74fmt8Jd4pwLHdo1h1LMoo3u1fJd3SZ3c5HU7Xy2mDJKMkdWkcG77k7jh76Q2"
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
