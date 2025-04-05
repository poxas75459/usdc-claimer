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
    "2pYmAquDAR8BJukchETUXwhWtCySuSmjAzWqGDKHEMXrPZsrEtr56DYohQ4VeVBbzx8ARUZPbbZQLUDBpSReBcrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wfsJneRtYxRVmaVvgn7tDNLRWaJMLjpUubDvXyvdErjhw3HXd4dtSEHt8LHwBYxm56eHZssvpHGhszPXDPxsKZT",
  "key1": "mjTpAxtvPg91YxDeeSAv2wu46WBsguqZcX9C3MLttPrQGhkpFr2SyRXSwLKo8Vc4W6BWCm3JVM7rDa3PqKCi6LQ",
  "key2": "21ZDCB3i8DcbL92LMfhP1Mwj4LyPLrfek4ShbUoESM1yFKPXqB9wMdEFbgVBoVfDe2U45D6ebZp7t9y4vLhf18JP",
  "key3": "62t9jWH6cpRxuWhc1myccAchYAoh5anSfzAaf19GWj5bd5Mr7LdEZKnbqrPXay64Y9ASwhQc1tyL1kPcw2MWxLpH",
  "key4": "2N2SEqZ2ADhux8rFmPRXAgD5emrMHHYKfmvHBtdAzxfSiRCtyoAaAgmdhpXWgqaj97HCjfNUzaap4Uo6DEUcuCby",
  "key5": "5VdEcu2Q5onKAJgvLuN3hf3WXdReYknE6ntgbyiEfTiJ1QyM3aqPTnqFEAGGsFsXH5fjEtDRymCGE2f743j3LBHr",
  "key6": "dasiUuiSiNjVo38tDX9Kj7WEV7tEmRLBtAgSjc9zpGiepQ4BXu44Asw8fbKpD1iVxf5voBx1Hn2kczepeVN1Smi",
  "key7": "bceq6NJogWBWMfiC7c9Z7oUGqRKNHyCLx7mrhashEKdAjJbsxh8He6FGvMdwh9PHSLxodjnUDGJQJTDGjWhLP1K",
  "key8": "3XCk1H5isCeg91ndMKvqwMeQeR8ekx3NaqhN6a38ox4PD74WThx2m6zijBpgjCoRXfSdmuWZK5zu6PmAwFRQ5Fd3",
  "key9": "2jjQpfdGMtibXDekmLEmKZ4JabNFGTbaGhmiGGpnXmmw2JdqvQZDW9cQQpjvFt76cdrYcEmpA79ojPeBWjwuC4rT",
  "key10": "WevQHMnAurzTKQRpibTXUwqgyh6X9nFwi2qQiHUs613ZrVuaP95ZvQWN7beP5zxk5PE75ZHKWGmFgf4PcUACxpd",
  "key11": "3VWuwWB4kRa22qLaJt6ARvDZSP55KjupED4yibSN77oZQBiXzxSQj7KfakMDXN9S73snf5e6kxMawujQEGdeKhZV",
  "key12": "47rRqnSbnPwhQtZ2Do5BLCJdhcVDrefUukkvPoXFzb4rzmeF1YByntu2DM9RRHXQjnBoye2FtyQbdsZSfSuTNkh5",
  "key13": "3Xm5rYAtnGfQHHcYnfkggqCVczHPFcATAAEjBKkSF65uBQEMP1GooumdMFC9992Gzn3h4s6tEEuaAbJjdxhVr5Rs",
  "key14": "63KLQ2cvK4MtJRbUzWrySmAHdvSGQTxB7QaLWtpoMv443ey6eVrW93w393LqcqhRP8Nfs1faUsQgbVXPdVqzesg9",
  "key15": "4Hmcjzsr7Fza1tQ6eAhzdezjAQrCvJBjyu448pqZXZXErkxnSB5GhRdBZZth8Kcj5p5GB28MERtDQVEjrXwxoiz5",
  "key16": "3N75QMchAHXqy7XRrP113QRRsAqtN8jeuei2einPHi97U9sBWRQFjDu8vGtF1LvzcRSnpSjh9Rvtomv5gTgsmWuk",
  "key17": "3pYberpFfgb3LEypkCzpVy6qX1zFNt7zNWAfbu7EtfSvR7qmyYFWZ3K9NdgsAbX86uv5nVHcA4kTER8vo8PQ6ZQa",
  "key18": "5p9UEupGNUzuboUQCAnBZvY2a66mju4HnAPvXMeMnPsTPm1EgW2mBqfUvoGwi2ug36rXF7ZiPCjTJHZe7xRsmSRx",
  "key19": "3iWnz1Tr9TXdqvYm1Yk3ugaiXgBgZv1bMthsqQB3iJfBFJZC1ogneviSi867m6FKprBPxTwacBkizbjHhH21xVCz",
  "key20": "MZorDSrsZSogSgCKUHkix5aLU98YjG9TnreVSVLejMGCbCZxPHMp7SHTie9YBd6guFiWeynzDgQPBHDkMTtCeGN",
  "key21": "276e5QzwzJgQfghGmXfKo7jXSPPLPNABu91QYyqFRM97hYrNw5tL85fhZgDzu6MtAet3u2p5BmjjeDyyX1qvWojW",
  "key22": "5cM18wGxxXumfym7Ev5utTNM3e18oYFsqJLktjbBNWZPM6qZVQn6LufhjM48ypwKj1S8J7XbDEUwN2FzxvdvHH3M",
  "key23": "fHmLYa6VhXWqXcUkYCyAjHegaVjJjpysFcZzP1b6stEqxrhTRfuQpf7KXBkoniqx48b9wA4aghJaTXUqWRoDQJr",
  "key24": "2aeRi4PEoc2Yv9R8fSwy15QWChVcXZKDJ4xCPbFF2xA5f6LGoj2RCKvkELtQuUuck5THSuTfQ2x2nF1wvQUyx5ps",
  "key25": "5qRp6b3LixYpmxTkKDx9zUp9PJui42Ua9BnGkZ4BVaWG8N7R8zgLo8xT33dAWHMhzg72ueq8BVJzQFearvdRC3Ey",
  "key26": "65kZhHWLQMH36vEycg8e8cbVVDUfDRGsue4hfNZaRWqc6LYvUYEUhwXVnnUfLty3Zbe8pwrNZ4UUi9fMgDp2XBMH",
  "key27": "3yS7q6c3rAaR5RvzXNLQjXDikjcJ31xYYxibB7xjbsjNTL94wMRA6RqdzcRV46j7i1ZNajPQoZjh49EbCRvMVEWX",
  "key28": "3b3vpXAaEYiUhkDpH4vjSXT1wNsrGFSv1bUvXr2yCM64JZhsaCjJJfmsMNGctxV6MAkcczq3pyUS9p29rPd9Rztx",
  "key29": "3fWuCuYqTV1NR4XrJtKztoCSYrLvgJZoQ7GoKFPKTckXbnF97qdoAi1iXJHmSYMeWxyHv4YZ7qioGzxkN6ciQK5u",
  "key30": "42RE5gAW6Ax5CBbMpu9dpeuvrTHM8B2Uu5BE7963Wv9ptf9dycLZ7e4jAAtR47HKJxYPpepL4RVNDoZcU9TZG8UK",
  "key31": "3dLcckrUEVYmppEHk75v7gY3rHK6RR6ZUkQPwxX6TguLQX5RcLQ2HMbK7BQuySwToLf6iv7YPJyDN9SDuSXZnxe2",
  "key32": "3SM8ZwwsFeQxSCdzaWH1eexds1P3VXcQ7SusR6YuFxW7apA3TVVSXqYPCbqesSyWAjfg3FmaBUvXVsd3sJT2gAMz",
  "key33": "5PURhMjoavJx4G6umuKtBTG99TM2EChTapZzvMUqEX4yF5Koc1BrD7ewaA2UaKEVojWy582ybMirJCtsWMUjDfyn",
  "key34": "5yq5LPDQYZWB4PexFUQrsfPckyFdPrSCedAhwzBUuE8VNZFqQ1wm4VgM1ZDvP6AzmGStYisBbWcP4EwB2G1sCM2J",
  "key35": "3ibt2S4caDF3SLPEZUAA8vGZkqZJyYW926VutKJchX1JHHaiJof7SSWpg3SzEi11awspRYReLsvbjWGW8XZczFm5",
  "key36": "TQARANeuys7MLCFfX16YoEHGhco76TERMbHf1VqtbEQKp8pvKnKMoPZePZzytkyD9Gn1XLujCyrsyzFpKdxtoRR",
  "key37": "5KayY7ikcxtqGMummEunpAiDHBjUpxVmQjhcW8uQrZrL2FnJ5xtbKL4dY8GdEzhvaBdmbXCJYsgFe3BJXrKVjqu5",
  "key38": "5jPhXcSR9xBdZgdQUTMvBzvEE551eu9k1A7iwnGhBNnS55e3E58qphpcHDtPugMPFJgZ5n1vvakHzZXhKHvLWoH8",
  "key39": "3zhhjmiXbB2y6p3owYDxxz7gcSuDuqumJGapyvqFwBNwTjj6hZmPUrsGabjiqQjdCvT6wbUPCJpJqQuDx6jgzNey",
  "key40": "5HkiPJrxteUxqmkNwoh9BKLoVDqTULzzceJj2PzLToDTXSscovmdM11466h6mKrN3A8Hg2hBBhYaiq99LkAs94eE",
  "key41": "2Aa1owsm3xeEp6g2KbsDbaPdpe73LjENNhmbgUede1JxCZTtyBh5h3ojQAy6uN6v3aZY6TcczxwXhMDUGfFfc8mR",
  "key42": "3UE1GEq7Chm4YJ7JUUCXtPTwfUGjYXSJjvYJMrSEieZ1ubrZx2CbpYarALK9WA6HWk1ZDeriknQAvGq5Mjx4EX3y",
  "key43": "3rhH5443Hyg1JuiDVc2FkyU1R5S8hytvp7tj7qXaPKSbZeEJ23kiyuo2NqDFturoLJVmdJBUCu1dY7NnoASASfaC",
  "key44": "4nqdQEE2Vxecs87eQNBktGFoct5vx3T4bqjq7gwvLcCdkjGZqee2bQtWX5vg8kkfFr4CYJ9nLNpY2bPnFhvat2Ax",
  "key45": "2Aj2frXqQDZAT3R5eup1M4v6j5T3iLGutLDFpsr4uND6AmX1XvAoudwvKzYxFz5B4QQ4ZVRPrnNagBmxTusBvK74",
  "key46": "44nSijKxzmZiZh2YQ16M8gM7DE6NdQSLjnZr7P5uorKtDi2dfHTmkmjS7ZtHhuyJdze5fDZ7TbzcUiZ3MBW8KHNH",
  "key47": "2c2aGU5aagcw79CMrCQVQ8oogvM9SJ46MYgUouRwqnTpZBaQBPQQjkQNibpKwd8gvh1QJH6ZSZg32b2RpVvyEcXa",
  "key48": "YNCZ15qnyVfVzMFezGr7ivT3KENVcxAXYQs4JcchqdEea9s3HoTctbptCjefBHzPK8JTZzmk1KdFGLJRzuk9dxi",
  "key49": "4r97api58zybgA46G1tui3NxBnQ4XxjgTqLthUHiSe4ixnHfnGrqkPaoeos97Qcb4dUQ4uccWWStiG76yC2C3tWd"
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
