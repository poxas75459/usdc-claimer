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
    "gUWytVMXBYSAqhmjJsGNHXWk5vfadhoQ8mbf1YSkSCZg1pXYnAs7PZvhb2xqNUbiprXFMwsLrLxRgNkytLMSzdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZfgX2cygNMKLfQnqPGYs3XQP2nnpf45PfX9N6L8Dzb5jc9RjYciq6hs7uwGWPnVymJu3HWq8ZxiWEhGJZDtFEe",
  "key1": "2FR7vM1pZwyL9SMwCpMmGz457Bk8L7Pp9ReF1wHVBLpV8CJG7DpFr5Ph3GcTcH3FVC2TSmdqmV2nze5AKP1rU1mY",
  "key2": "STRRWqLsoAwrfDyhv9qvUxzNy4m1j2CyLFKqrc8eYEabhAwEs5LVu4wGLMnGJYL5m3AqPe7vnfnsJM3wrE1giR9",
  "key3": "5SuoB1ARMD64Vsyavb1nCmnxEZ2SEBoybzPHrrCLWcaJbJFY7pcep1uFGqbyNZaincgTaoZQ6mKDZe5noJKc9zMk",
  "key4": "3P5bsmhoZev2B93hNVYzVEvbe7pgcch4JuUSciCfkfgPC8huEQ89dUDxyKRwmDgtABNFzSV5rNmuJpVEFa23cdAB",
  "key5": "rTc3hVUB82vaonCTVb2JD69S5J37Z1JN1LstCJUjiviPTRkCNQzE79rEaAwH1jw5xpnZw4cqNrrfi1dy7zDyiD8",
  "key6": "4dSKPvWhN4brqtbGN95S1o4cAnQiQhTGiKE8iNWQ31F2uCPQqsGvW5q74RZQCHYXqa3rr7PavUpi71oHba3HnzT6",
  "key7": "5j3W7EYgYu57eXPM23a4FE5EC2gW3zVXHZ4cmANaPHk9sLwQo1PdDKnQqeAYaCxF82htnkNEVRAzbMPnsLVfHWT1",
  "key8": "49GPVcEWDsBy65m9Kk63KS3mc9GGkr8axXyKshsUDmBq7fxmVreHNWK7FDTM4r7GfUakzUSGHP36LoCCK8NJTuqW",
  "key9": "55t7wPQPkBUuLfudccyhNZgQEvjhhG8Ko6gpmkKV8c46RnUvDUGRxFhwDK7y2JF1a2JBuTgDSaG6hAL6rnratT51",
  "key10": "3TbRetB7ioHpWrb9Rfth9RtYcpRGXaG3wp34fyvbLypp8T8No2sk8Hr5MAgX2HinwyBKFcappcNZYw776w33XpAS",
  "key11": "F6t4Pyy5Nt5fVBTRzYMFaAEbgPJbDungmJStTQa61EPBoUPjArGncH4zzDLhZJDbwBTufwjLtVbvkpYamFH2JVS",
  "key12": "2xqREdAwdDkTQg4zSMMPVgU17zdFXSrudV3UivHLzaZpGU1cMK6KvRS59zJXME8wWScsUSPTcXTUoTbgj6j88Epn",
  "key13": "6LdX29uD8MogKARELBPtVnFUeE4jXJwX8LvUQczBhxt2BC3cRbYVi7xeX3GU4SS4xs9sLaxoT1TEGgnFsATTXac",
  "key14": "RAzc5uwT5nEenQyuovk7CCztnRJT7yM1gp7rENhN3G5RgThRs91U2D47QzoN1cH7PxAFzNiHSGNDHYMQXhGJon8",
  "key15": "5xwgxtpLF65gGAWpJfFAdhAQmbRf5RvCE5WV1A9EZkuUmvta99ycyPXeui3oNRHW2jRpfpuiyRFD9dXfjbqzeP1B",
  "key16": "3HJfD9md8AMUGiL3Wx3VLKXZVb5ZMDi9a6vQvPpfxRA8g6TrDwshcVKDqLhCfAF9g26GJECpmjSHezFzvfu2qovB",
  "key17": "yLpX97HXBdZgYTBuakzGnCT1WZDfsreDzNbHJzYTHW2nUK6C7mccjUmX8hK64RUK6FtPjXGjMhVPCuurtHxcMd6",
  "key18": "2tpdqLhK8CHTcnQsWe2SNoH6mzL1gPdAm4i8AW82zzWeTWzPMYfGGQdTUoCaDRuuuhD8xa35sKQD6HUTcvEWvAU1",
  "key19": "2nStmqwnN2RF3tBCGtN5bUebHuNaaT38hHhxb7ryM4P48BCNUhWCygmddwgpnAamMf3YAAhR1Avsdc6C1nqWENsy",
  "key20": "4GC8zwiY5aXmfY53vhPqdgwYNPj95gFHrr4z6LSGztm6TemAvrYN1xJuvLdDKieeQnkPmV81cG1L4f93DNMuFSdw",
  "key21": "3ZtM1SHN299Jdr3neL7bhiAZ3xTFTsbyC8LoVU9Kj1cBrFi5NZS3xC11jDcMvhSmtammzmnVT9ogZy7ZvjFHQcio",
  "key22": "3vNBhHhY61V8MZtwqZRjm1TqubVNbFfUYxPnRfJHTa2sLPdwiDdpcpza7VdT1R7QkTXLT1uiwP7KU2Hxt5hmjT4Z",
  "key23": "L2S1VrHUYLdANWcSsscJ9dZqSK7PQSD4cKhLKc2M1eYsyQAgEwjtcX1ihaD7iguamyLF7bxHvG4EgMT2SEkGXu6",
  "key24": "oA3d5oGLRFe5xyjzAbAVaWADc3K8MbTd7b8NhbyxfMsEqAwEXdSYk14W5tcWGtjEeMS33ebwS9gfEauak6h27LV",
  "key25": "2qZK2Q7UxSEdY7pcaegBc9EyuSj5Wy3AhxMXVthGJWsUUSCze6hPTLxeDecqTNYZySmv7bFYqJTmuZnhzq8zGmXK",
  "key26": "3Dj7q1t5qiqmwNTukRT99wHrMr1P9wm73GP7mnnpPPEhiC8seY3PTFFXXuCz1Gaoi6sqFahXEmHMPmGxzQ8PBdzv",
  "key27": "7LfZRNLqeobYaRHwNkDPjQPQRiWNBirjWLsexa4ckf1PAPLkbaDehEuEFyNBjVBhGqWf9vfrfdc5utev1JWdFg2",
  "key28": "5jLAavCnfeuYUNqYKunqTifapXp2AGpG14k2L3BFeS2AmEHtJ2dPfLdWb4AYv4XhAy8Rovig2JXUSrkzjq2WMN7c",
  "key29": "5zj8xT1gArmVBz2USqTBc4Xa4eKqh9cNqLVzWqrjj3x3bL985dA8uZu1aW7DRav46PDejoNvBdz4ohPJwqwGSw6x",
  "key30": "2yxpy1sjzKbYRi3qYxufrHAVP62Miwc3jnAC3SqHwXZjhggJRpxnxJ5i28ncPmtqmBwjdoNiGHyjQa54jdSdSw7C",
  "key31": "yjvpsU64Qkuo23Bs5nCt24hicUVx6aME3mtbTUH8febVRynF6wRzYQznycCuYAZpLXSnRtNDwgX5GBzKSPvSSnp",
  "key32": "5ugVXnZTeLHwfCvujsY8zb6dBoEy2UZ66GE6yBrrrVHWFzQhW7PDY4DC3NywGgWJpH6ZDJrVvs2KxtxJtWsgfe3S",
  "key33": "3tsF7yhf1NpRyrm3JZ7xYynvB6uryDQAodGyXYZW4UXrgUM1sW4GKPFpwPtsV5tKhpTphc4YTL5zjtFgu9Po6AZB",
  "key34": "4GiorajKJjv4NNhSbSpvQ457dFwPnbpyDk8mirNve2j7UwHp8jk5c7GtFJDb1TBeaGYtpFhDZPwzWCzpqeotBWF4",
  "key35": "pXDQBu6HNC5sfsCYru5mo95f4LZakyGWy6vNUEaLKXL6mi4woPVrqpB8ye467iCAWbAjq2HaMJCTrDmAZdfxNc6",
  "key36": "3CT9P7DtMpV3Mo35hrb162YGni28NjHjy7f7s54eJHVLn3Ei69PKmssyMCZSd7qfW2CLUirKFBQEwMCu5ggwkh4M",
  "key37": "AdX9nxJWQjzAseQeEKWYejsV9BTshCbdZgGVkoMCEDR3o7UaKgx2Mp4tHSTFFBZaFnWQ2jJKY8CPBt6fwz1VvcU",
  "key38": "2xy6exZ2XLVNtkfMFVSa4ZH68f5kunY1MiLTCAbanqEuwHPqQatbFtCaCTorzo1B1L1xwNgftinYPG91pKNWhxpq",
  "key39": "4C6yH3gW7xMAN92iTCJZ5HLuCvnQvK8PhaiPkLW9eNP3S4vjcALp7zhdfEXo1rbgSq6tcupnuR3JDQZdLGWzGMzD",
  "key40": "4HMCSyYd4Z19dLQJfra5tgtLbcYEciW7txRSVnJDLwGidvAwDJ1nDUvPtZq2ZD35Uqv7GcRMbL6tAiLhzjpg3trK",
  "key41": "4vmVHDmz9PL7SPhEGmUDewTYG5KAjrMqqYs7xerimPwJEDVYQ7QwtZwtvroX2h3eE5JBEai4qe2sygdSaptBtdcX",
  "key42": "2bEkdHrW67NTzMerjK32m5rH1gr9B9eHCS8VRoRUT9dD6YAJf3WAAHYNKr6i8eJXuQ4CU3wNKC8fKXAkFm28m3bn",
  "key43": "4LCHCpsPZ5jzi17f7v1ydTgUuujui9zXUStquSiXGunQ3qDydSBgsW3Mt3U6qmrKR3RAbnpP6YchPzdumNsHVPoQ",
  "key44": "2r7Ex1J5gJXtg1kemJKFeHFu6xJCUMWqsEjMP2QK1GoxGU525JTp17TbaZyL9KoHao7gRU5ZRkd8Xfkd91eyY1v1",
  "key45": "4auAN97UGoud5JZfaoBjmDAWi5HTmduSaYEhsSvxSaPzwNCaTYSKTmHFtEQxLYdotdG6yKpzypr56iK17x2X3yUA",
  "key46": "5MDGeg5zZm2PLiMksiJZTj5v33Vc9XoNqr2V6RfhB5DLq4CmK8Pq4PNWxodLnuMtfrcKRdbeVpEG8Uox3RWEnawT",
  "key47": "2qbQe5Q98eT2DKWpfHoTVN8nrhFazpJFDu6ZZC4xddy38bD2EqEqU1aQj6A9TNXSPM7UsgMKR6yttopYUQ1yQcbk",
  "key48": "5iuAf9dBDAuK8wUV12LMwJ4ASmeD9cdjcuU1Y6KfRAqqzWXRE9VERTucrwornPe49Z2x6VqZGhf3ToPXcFwHDt8i",
  "key49": "25yPaDTTqcYuzxiL8Z89q48RoMfgP6zg27ipxKu5t5yqoXk1Fuikw4iJ9GXS8VBsEB41NB7w27NsySD9MwUSWk68"
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
