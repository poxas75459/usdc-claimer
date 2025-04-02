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
    "4T3vnPSvCvdvoa92LTjvMHE7afFRmj5cycuCkiSJRvDsvQzCKr3k55HSVYKnJRKqeDGXqmnT4aJueCSsxm4L1kUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6569aNG4trCcc4r2NfoFpi8wEggAgYEjEiKaWRr2t2kX9subRHMC1V3MjRB41ZPcM8PbL1hdBMGuN63nanACiLB1",
  "key1": "5Waw7ZQUcdughgMKxBeYJqVELHynin6p2hb2fa3SiYGecXSAsATAvJqTQqXRz7sx6CVi2cK11npXiBtZSyVp1Q3F",
  "key2": "5MSx6AAWqcdaz7wsbCSSEbcKgwBfz2sjxwUmq2R8hjN2R2NDfPMWJxwH2CuuVHs45qDGScuEYDzScNSLYzf21jkb",
  "key3": "sKcaJWReeE1yk8JVEKTaASRSSczsR7rv6ak2dALDhnmXiYw1cQLHGHVRgtRvMVSNjbuyqpPwdqWTfRX4RoL9Khr",
  "key4": "HZCMQkUkgigfTFA87YpH53myhFToCkhw9moALATR6h2NYM8okDXConYDEEqPA1EdrcS4iSR7sDUBuDFuw5ADnzS",
  "key5": "21nWYS53o4RTpeSxwGGKzgzqDg8SQmmu7dAwgkgoxtDtuAmE9nC1jXU3WCYh2U96jNoPKCJxkmoC9XR3fBKKV9Yt",
  "key6": "2dEyoQnz3Kr5hRsLwijqQNrkXCJNCWhoPv2Whkh4o51KY4t2GrwBWjBfFwsxkfyHhySDAapD82senZwhWAaBzRoB",
  "key7": "4dAC8ZyQF2v2Et35qRGZuHB2o6KKEj1L1HfUeZgugDAky1YwH1QQYvTgPRTCHp1cjamDxcV6LPs9uHEiWmekAHSa",
  "key8": "5yp6haNPK3yQKEVmW1fyTty5v6vZTEdKLy8N5ueyLHgkJR2HwzBXd46Rp1WWaLSD7AjgZHgrxMo6CJEYAZp9sGbV",
  "key9": "2cur5tKwBmXmcEm4pU83Wj6CwqQ3sY3mbbUg9T4wgJ21breCFv57qJKmhVgKLMknLEzyT66sANVWE4zcX8hjzTAv",
  "key10": "243djT9aXP4ZajMUJJxueYrXtHRtf5pxW4mvs8YiDkrEH59seNaqjYRozdr3gvtwF698sjf2JTfXxEXdYqUbNMn9",
  "key11": "3GyfVyQ5cvTCLJBT2EMyy7TXLJUTtStGTcm1Lg5PVrViYEAGXBtPtEyzQXHx1bnDfwCR5epJVSmWzy4YMHFZhJQf",
  "key12": "3TEy1YX4SavuEBfZegKcvLGwMujoxyjeHoKPGyS8DUJoxQ4frbVJpmRzwBh8RUYx54uDs2UN49bysHy2mYv7t45A",
  "key13": "5zYsWY6PsTWqmm62ooNCeuxGvmAj8yE94eeHFkjgSbRwDvNbryfbCAcWxwjH8b16ngNqFD79dboApFJED4ug8FjM",
  "key14": "2Mxp3GcUdDBJiWDN3VhQThuzrDBhVEoqD2SciqUiFyf8AaXfYanDvFiZoaJbxjswPBMWZee2zPu3zd5bRfXVgwyu",
  "key15": "5Yu64243T1PZyTeZDAA89x3APwLoRz67tv5oayeMKNdv649pxb5b25eEMg1ojSCHnPvGRK59Zkdys6eWDiUZEWtA",
  "key16": "3CDp18PAgVLknpPVsUmkvTKUeWawJyrebM9xTi5h4fxGWVW79Ved13qYXWTHdD65cqnkrp44NQTTg18vYv5BjiVQ",
  "key17": "61ZWuB4Cj6dqYUtkXqopyeiptKjwYcNjDVkZiCBQM2WgNgv9ZmYEEovcpwesnXbPeTNpvMcUq4X66eVSsj6P2zSZ",
  "key18": "44k4jsFBTEA7pCSkkCGxTdDnnrmjGybJgZv7CQCxWuGLzJ14LcCEapBWUnLEj1Zj9LkrsSA4sr2JSYL6QZ2VX3vy",
  "key19": "2YWnvuZaeXwA86XhourpC345PUkR2QXUvVA5dRpgha5YmgUJPw1JdjfvewynwRxUNmeiGiuVGBbTYaFdLiaX4L8i",
  "key20": "2uwCWkybcoxitwaXFJr73FmAVbP8dxQETbbKRDwYaQA2NvVqqDEof95KZj17HHLeAa751EEmT8WzLmfbwDxmsXeR",
  "key21": "4qiuJ1tMPtHtsb1N5E3MxdgQqdAEJoSbLWu6U3KoTJUGhKXdFsHh8e4AN6c1XQwXtSPJpS4PVqDbpwMLvj9Mgop3",
  "key22": "29YwmR6UqSyRj6DBPwLHYqND9mmoPtSsKkKEVjEGLCX8AtkKEE8yUGLfszA7gYHTPqDbnaijsVNC9q2SHmo1dEge",
  "key23": "2xqMzeEjkt4ZYn7WF2PsWTPG4K847FbYHdE1HVr1LsekYZfs6YLELNn5A6bTNXU8AqjkUY25V8NZ5sEizGp2GmFC",
  "key24": "5xC1cMLiDRfAq3hTDRAE3i4k558JG9WfFtwPGtWpXEzLQb4jk6uBcEmQkx88JGSbBP6DEYUSZf9Sem6SksuBf6ut",
  "key25": "36Y2bH18aLpZLZuYUiDFYr1xhC2ruTgtzUxSXkZSt11LazRWGT9QrZ4niAkkk5RcnSKhNHsE7YXU7ATnYcexWetu",
  "key26": "5FwqJJaT7HzdZyFAfsygJRRxmRPi8ycYRZr79bTo5oFA7xLZwgNyxJek4nwRZ48YmzgrtHK4n7GTHmd9RA2pbi7s",
  "key27": "3NRRSoMzRiaiZZKcaGxPP9ppn7BDP4VzY769F4yWUKoeA9Kwu8fzxYSTCsuZLCikB7aWuiacEtUurSJzwaT3dYCK",
  "key28": "2FRjVdoLiqHLM1miEMGKDoovAwWWQH8Va4b7pSsiwhfSSbjEPAErfJU917caxyDr65ZpDXw61Ldh1bSsNZcr5yUP",
  "key29": "2DvtgejStWUB51kwMeXEAdPJWC8uYjSHZu6uC2yXRSBjJgWhUU7UtucKDTg39qR93KBS433q8BFgLU7cJfPw4uxM",
  "key30": "4ctdAUjQNamiDq8e1ur2Xd2yZdYJuafQbgqZkmWs1MqLJdxqEo2KC6SEnonS1TBoxr97mc2jnzQZaG9kui2Vexhr",
  "key31": "RtVuZKBRcsWsAgLNDuqW4KuuU5fY7yQD25DFD5Tx5gJmtfrTiP6uSpLxnN4T3Yx5qa62AMAgfKaASPHPBkTWf6R",
  "key32": "3YwY79AgrdnT4o7eKWuun4yWmpjKF9d8UYnaRfms83Myh95hEbZq7TfqvLeBPwhfxbY3hm7AkwaNduMKoB6qcSdG",
  "key33": "5eb9hePmjq4kDJk6xjnF3vAa8ZKCZsNSyf4JAod561mvnTkSwirpF2Jv9xhec97gzVC5dtV4auK6SBtg5nFCkKpY",
  "key34": "xPgGLuUzdk2ACswb7R52Z3wrpeySpbb7iCm4tnuhn7EhYz33rTUappz9Hoth8qU87CuzvKxnyYZNwHa8wvx2pX3",
  "key35": "4LtDd7bjRwHzs5ZwNoWpZNEt8bctGC7amDraV8MCpi93HemLWeWaZVaAQnGa8YQu1yVsekWLr2CoVBzjXUBCm9pe",
  "key36": "4Zhhc5bRuCLzyFcFHPoShcQ4DXWZrYYW7HrRjTm9UPMqxirpH2ya4NAK2y4oi9VVdHtVGxu8cdjerHPBWAoLJ9dK",
  "key37": "2gNVbcgJRmFtKqThRpHWpKfP5V7srE5JumAM55jAhUHXciCPU328wiZW1Rz19TtAqtgRVBmueioazWsxyjR17849",
  "key38": "34mA1fKx4Po2gGoVxRf1PpQ9yH1ScjWPCC9nP7BKV1wq6CVmMjEq6v7DQKBTEJ8hYAAVE56PDkK3mLS6csWGK7gn",
  "key39": "3W3yPKe5DFqKA2mETpJacHqxUSA7dn8srA2LJFEhRW568az8WAwLu4dKxfAk6k1YYttYo4Uiu1Q5t8nEyPaFT4gJ",
  "key40": "KHXNK4Fe9TT5XnQGXxvvRhDptWHfWejVE3ymAouMFkmfTaY5xXasif8CakVu4DRF2mpDNb8aDEyNPQYfuZtDFFc",
  "key41": "4YFbm1PELS9SNHBgpJYJP11CBfMnZLj12no6NEMgvTnVhvy6d7kmbk9MgQ1ejd9gbz92vF75ueXmG9gzH4swUj8M",
  "key42": "4ZYELCLGkJ9Etd54JDSADdxjjNc8VUbkXbWjtRiJcBjn1bZuJLeQN2YASgqurZgBDux8HX5pVMjQPvdu9suBbBbs",
  "key43": "2xsqHZpuEgEUKxjYcFMMdfa2uzivU2zHEuj9Ei8ZsViE1BqUrBnRBjsiK8snK7XsEnmJDXzunSpRbhGUWNSM9zsV",
  "key44": "2EQzjkng1EHKyg2SsFi3aCksmgRsLgJZ5TzSqQo1yt1CLZVJvsQRFATDPYvRcNEKVjYApLy2Ww1JLRG9YFo39DGU",
  "key45": "2Ka3bub1j9hmMVZHNq7swSVs1jdNDKMrhoAau45tKAuoVwyxSvyM7xCi57dvDQa5S4n6hWBsJsY4xNZDy9bLjFpx",
  "key46": "3hhGqvBdbvjEdHaWsu7mEEcYPnQhwgAb9w72Y8ZoN416W3X6aJmt7yvKqaruZsuqqs73moHuRt7cERQrbdCoMsCW",
  "key47": "2HLFHpKp5GciS8VycVF7zkNdg1jZpRnP2mf8hxYvyhcGLzXcgWHmDzge11Z7LWVTQsd7VPr3VN3YyvPbGx8s78mP",
  "key48": "CqAiYikBQ9CQNm9SDDZrpaTXMddDwio4M4wYvXCPzGDFwrw7vQURBeYZJUGtQE8eM9Qd5yUm1phP5oqadmavSay"
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
