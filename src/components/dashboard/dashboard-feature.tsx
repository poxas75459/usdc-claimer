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
    "5pyKQWKmYkmSN4gDngzUrpoGoQAzkksKTGa7rDmLk9DRQp24ZBiBTRjRdsyZaSBeRM3Zv2cQE7XPVAEB8BuxZiQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27nyXFfP4t75QhUMpnNUFdgn7ohw3e71RxXgyCW4M4D1wgQctihF18hadnC6kn4Doy5Yg8Um25FCfSEqkVgMVSSd",
  "key1": "5FVuFAc6EJwHN4xt2VPPcjhiEFvGsAUGwDJbmmxfE2jPxYB9m1vx7e3yiFLWJgezhj5ifScseaWRZyYzuUCre1zd",
  "key2": "5kyYLmYvQsUYb4Sd5sNqBjQ9E1k5Yjg72Jhxm7J1D5i15MSv3cvNKDNoJACFBTEkN9H2YABZJxbf7zFghpiPdd7o",
  "key3": "4YZE2XGcZMwKgDR9PvoGeiCR5KwTVoPx5jYiwZk4vvut7ArtYHshs7pm8BBeTBGjVdAHZgd64x8WTUH5ygjHJDba",
  "key4": "4SkUD7LZuihFojR1KUACZP5uN3N55LHiS9aH9XHEXYtbjxCP8FgVTdSvPTL484fpEbWANyibJw36RRhwp2WXJY38",
  "key5": "4CCXEKzmRzn4DRGdjnT2pkh2UP1Y3T9hzEcqmP4mzRyR1NBHkhUomDApGoD4GFMM7L9gMEeTT9SWXLwDkyRA2FSB",
  "key6": "BAdznXEFVyTwFmgKaRhre3zMo4TWq6C9DgTMXn9vmGGfLoHGABLiNPRQuiNUXUjUhBgQonF5xdHxJHxDBVf7xuu",
  "key7": "5M44brUh1CcVb15LbfoGPikdcETofskMWNUrFk71U9wZr6g6oopkwitJprEBMCD24sSPr2D9UK3h6eGhXtp1xpB7",
  "key8": "5NvvVpczDFXWAh2yqA8MpJ4HpQGgU9GGFGUJ3s699ZznozGYDkADaf8HjEyd4Cvj1S6yF6toCnRjkVQerTGsdUnU",
  "key9": "2cJdpZqMSakZrFDFoLW8FJD6idYyJrZGsZY6LXVue9fnKuSZWb6FKV5VQ5JDb9vh7RHsbyGcVXDvykYCPPAT8KMN",
  "key10": "5VDRwRr1RSMZY67EX7NsjMmWNkFCtSyeuUG749a7biouxgoFDy9rE8pKP2M2tNH3MwYBYUGX34HX5kkUsmG9id1V",
  "key11": "63Rjd3Kua7jB3Jc7ZhX6n5BdU2Nerdru4d6gUJs6VUb9VNSTiK5grjzHhjLxhRLVrZZ7en5A8hEXxKenNHvLss9h",
  "key12": "23MgLJw9ANd3MeR5rX14PbDNXefnMLVNAnU7fWkkLkTAk46SDFK3vV6NjcNRNp9G4cPdYwnELCxSUzsp9VoaLQAH",
  "key13": "3ZZHrawkyMPptHY6DLWySwet12UcYJ323bcjUhXsFSskiJq8poEhy27mee5rRxXNhtZWVEYQD8BkCfALWVP7JKS5",
  "key14": "32gpHRnZqrHsDSMXJm1e1NjUfnKU44X9krYMbNYfBVKtC6zUXKsoKzXYUmVYvAQKD3onE6xP7ou9Mu1iJrdBsyMn",
  "key15": "8nzDfgLpeFgkp4QxPSb5qU7JdD91BPtmRLVKv5ee7WpuuuUyYunQpm25VDSMSDgdc8WXFbzRFQBBpA7MpsmoGRh",
  "key16": "4cbCQFyBRVGkkFbsg3kkjw6rMxxQnovq55YKYMcV97beUYr2RfNLmG6DMo3CADfHHxUcnaxSosLPFn49ywqz5UK2",
  "key17": "18nRSUEXTqmKiRVf89y6NZ4LfRqCPHwNo69QC1WJfdaoya2PxBA6NrCyHMN4uqsCzKN8zZv5fL66npcXsv8WEKo",
  "key18": "53cY9a3TDSdnDTcU1z8tn62oViZvDzsqDz62aHgN13KYZvb8h6L6Byj87Vhk9mhh8n2h6PtschQ2GLpMcMixruYt",
  "key19": "3j2BLtEQjoAmL9ZZKiWf6Mcmf4Dh7y1ebv7RBJgBkG4nuNcb97G9SVSqtKacCV2imhXS6HLvKbVJcdd1mN8kyYoR",
  "key20": "2KbJMm64UANvZx1AzGf7k6C1q9KPvRWS2w1pYHJzYSnte9c4G6FAKcucR5wB9mv3KCzhaX1Y49JuJxuPS3XkAJzc",
  "key21": "5Riq2m185SJQcfL6mxUXoaJMdpz8v22DtruhjQkpbdRuDb5wh1sY4RF9HiqoKAmAGhWxURPzwwNKBjNgYDjESSrZ",
  "key22": "LBntVQcWP5qtmCd49h6w9TSNfuGyBh66LFW5tU9pi5SN56owEtCQ5Aq8AqMHYxWfhb3GR5RPPCxghuorXNr1m3M",
  "key23": "4brdz9RLfvReGEUfWhYDirzcT1Qp8GfnMrcS7sMewzzWttzJLBXZV4hQnfNmGue5DzrEeVTupoLcqwaSHT5HYX45",
  "key24": "31YXAnBuRzfBJwvcGjNQHfKN3ZJ9meUaFDQudL1onrVbzzhJ4QtHuYE6JksrNKNbLtPkmubEnQWXxzBbQfDQPWH1",
  "key25": "4XXWW52BpmQh4bvLvjRmAjqudffwveih91gyNBpC9pUbCV6eV6Kht7nJzNVvXzTQJdFdXKKr1itCdiZxP6gJATho",
  "key26": "32euzxKoSYB3JTsLULmDx6hMW6ptNjYpcspYQvhNKQRijHMEKUCBcoyytuHPbn25jsd7TFc2op4zU2ZruF5uxcpT",
  "key27": "4kPxVZxb4sBYDfkVSYDuGdFUuLd9EwoUVfzbbKU4vDH2521NouDFTeAaXhzbTLNRsqHuhJ1PVxR1byXWEsjjHNiJ",
  "key28": "PcAzWMAMUD8PoiVN1Ww5eGddKBr5yhLhdhzSTL5rbFGYa67227anPGCAb9crVSpVbUBf1fMM9QuRnnjTCXgQa8o",
  "key29": "EXWjkHtJn4wewZ2Jf6RF4sfyrV8DqRuGSTbK1AtBDP95pXK63ppbdCYhKuHDtWFhyf9jrL16kGhY8RB5ZzSBkUe",
  "key30": "5voCKbijxZRfTAQoo78BusYVDunVrBd9cpZxcq7ay6UWNaEQxS34rWmyrripajC8wT2UqiMVahxnH7fJ7Y1neRLV",
  "key31": "5vAdEJAq67Akp3ymYMGjLV586CQPDKizwLw3NVrh9SC1oHxrJ7izDoTfAw4JwDGhu4FLhG87Q1Ux6i1h4RqYdDtM",
  "key32": "3e6FGQwUnu3FUSHGnWNSCwy91uNvZ1YQAtRubTS5V6m7rCazu7tjD3DbGrvPSvjzajftHQJ8oakZt8qMMoCB3qEw",
  "key33": "65RmJ18qmsyBthZy171nas8QeucudH83XgLW2ggsArxy3aDHzVssCDjBxv5onedQQt826hqAYgseiKn1zufU55pw",
  "key34": "3g7eyTJ7wWMmT6iG9bcZob2EnRgFop1y7kjhvs6P46wUwcJn2Zj1FPeDK6tTBbR4AwTA4JrY81odFHNwjqVNxfW8",
  "key35": "4awHjAoJypDe5V1WyVDqw2DtSGzQGqmVwKy9akBZJY63HVX4p9PWTWsq7mh3FaG8ZSH8B9xyapT2TvA4Be27H715",
  "key36": "47Kq3aa1tLmizbBN4j6h7SG85pqypcCDrLVrNRwf6FCq4dTa1ph5aQNeWeCQjB34wikhebZYTdTvSiaxsfVDcth8"
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
