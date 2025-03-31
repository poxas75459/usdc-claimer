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
    "4utkbnFe7uuSokjdRrfraLNegnzPUmM2Zg9pRFos9e4a7YJvrdrbJiKjEHYh2AJrEzKFjY3WBAAUfn58Sv68m8Xn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iraULp6PwGWStStTLcNKF9kCPcmtUVNkZmbRbT28D6rWh4ziLjpvSNdxoXmijJRjoEdPzsAUt6hipRaDSgksJwz",
  "key1": "2YnTXkywfXrUe9Szm7NcPWYE57oHLsGEp9smwRY53ULmRK8aoXvAULmu1q1z6Fkvxh11jn8M7AFQ7N9wNuVEXkL3",
  "key2": "3j4tTnzg2fJiGhoijCH7Hvp9D1vRXXLp8rbH5oHVSr61P39d3dPNqeydVkEW1uY4zCEmJeBb9khod2nNiSWE5ayn",
  "key3": "4WHLmez8LnWWRfv37UXBMkBWNhwPiDzeH9R1Nwq11LtqNZSoZ3KDWx67cN1y1Q4Ku6swhypYRbrPs91GWxunzmsP",
  "key4": "5qEdpVWv4AxDyy6RLAidkmGFp8JDqijAsbGdSgFcrKSUq7j35JPndVg9zhfU5jQqSfH6vUP5hreB51RDDkSgD4sm",
  "key5": "4WhGyuhy7yp1hcCVZsnM8bBVS5yWeYv6Ta9Vu2mWeaJRwFfRn2tt6L6Ucw6oaNTwkv28m36NHE7KyeisnFHSekfW",
  "key6": "5eXxrx3Mu3Lc3qEWZcwLREdnPuaqb2JY4PhAWYgj5HhqFdNn1WVNZvbWYmghncM6yvEo8a9tmoKZZB6BA3h9XKRN",
  "key7": "2879gWDg9UsbHNf5Tgr7coDQQgrmqgU6eo357hyjFFqjr7JsR5jEBAuXx4dn7a7CnizmCTSjPWS8t1dBE1Y96Qyg",
  "key8": "2mXeax11gEhBqYHGspD55VSzs4584jhqbw8SYmSpreoKmMx56kDxfp9nVcDQ985CJhhE8jgEvZomMRv1F7RdUeYL",
  "key9": "45tWPhvFyuPQA7TE52pMrVUyNGohpfb1PspQagZrQHs7UdUYewm1ZQKtqFqb75ZvQJ1XiZA1RYaqdc25PsP6Jv5a",
  "key10": "3ebwrty7PVNeHV4BTjPo8bJuiUt5HpVSDf4SqCR3yfZnR8M9qW4JqaBbQRHFcg1Rfn8eEeLfHdEAhuaZgaFKnNdQ",
  "key11": "WdZajsXx1STu8M1ki9yt6STktFA2ZsvbbYfv1GkE4DdCQCsu8oBeAG4Jc2mnyq9qHNBvTuAMo6db7cHV8g5buvr",
  "key12": "9vWFTgpphXjaPt4ptrxrymeqBC8xpAEhGauW9inDkPi19xWYvcrX1nCM1pbGNPpd6Toe9qtfK1k6D5hEtYL95fN",
  "key13": "2Pwn4XjkcAXTZkU8tL6bUHrRBDcwuFvrHpVk9K3axvrsS9U3r31zoRmyX4ARVbdvgHjPDdfnepknE92Mmxygznno",
  "key14": "27Jca7amKQd1f5xXggv4FJmWRCxP5NJdnQdijyoUpuiQbTKiWjwpbcWbZwfeaD6MfHGWD6KEPitK1eeeEHm8YuCw",
  "key15": "25MrDfAHWaQgJmRmRQhUraZi6pth58eTku4iDEzGZmXYj3TGcADN1MpdzfMLxBJ1zqxqtUgEzn9KgsMcp2erG4tw",
  "key16": "4kiuiyR65RPLMGB6Kin4xq5Xhdj9iawiomADocSqpg1BpxMjDK1w9BuedyJMAjgdazZrZoWn8Fc4SfoziHmtLVAi",
  "key17": "3FZeNpivHGWtorgJbSjV8Ex7TbCkBXi58cQg4fPkjbYs3pjnX1C2hUJ3AFjMwhFoSvYY1YnbcuMd2nEXHderHHJv",
  "key18": "5CQtV3xoYyQK7FzopPUoY8nqksUMXvHk3Nbqq8w7vy2kU5fCXC4usGhG6J6EzkJ1yseMSGuA9khp9bnhijwMbpF",
  "key19": "uSkTubY8bistDhNdwNdQKCbSF9xaRLwzNxRXwpNnxUELr1WDhYcMGUbk8Athpi8u9NM1gGjUCptpuRBoy3H6sZX",
  "key20": "2wrTJKprqemxoA8dp9vv54FtEcVisMYGXEmFN21Z5JyYwNWMMwiJVUrdBLZ4fzBtHJXjNwg3R97z7pD41yxuNYoh",
  "key21": "3QBEZfLchS2uvrZQvdGmQSkMzyCvUHcBLbBJzLZYyAX4qn1mXAkYs8pHVuEFQBmU77hUbH4bnWZdNtPAP3Dxptfc",
  "key22": "3oFEzxSDiJQnsAyNnfqQN1o4fC8Kf2Qsxsg9W6vcmECVWRMDbrYp3euG3pAf78ZnmLUhBgxDHj1JfGaN1U4ansKR",
  "key23": "4qUJ5kHeLMgrHQxNBu3y3S7NdBHWes42RLkggVXoUcSa49CX5iiAtLXc98EQEQJtDtpkXUunSmFGUQquRYf3aAKy",
  "key24": "5bffycURFjZrp6bXqzMoeWTRxB9L38o9verii5Twmwqq6Nmx5pKdBgV1YjkcxsRQ3AA3P8DdQmX7ChronoHGt6cW",
  "key25": "9Z66ckxfyAbtCjxFKvco8JosxMoV4G9ieExn45HXt3jhbA5JFuTtpMFRS6B8gRoHpvCMhT95wE87b4kKE7K1fV4",
  "key26": "3XFcshc3tmifuCJjy27w1jodzPqJiWSrP4jLzatmxEn83L1Py2KCoiBxkLm2uhqZLs3zByaX7MDTNdHJ9pBCAMGZ",
  "key27": "5yrvykgRsoAhY9DzzxkLBSGF9oc87YQqp71LkY7beYSFARd959Ldx1Ckf9brpTF4TsPRMruX89crcAnDnSSMYCxv",
  "key28": "24BbgdfEXt6oKcMDu85eUkuXzXZdH2Lt5MPGpfDAy7kUbzvHbXYQHJQmAJAPTBe3W5TMPc4EAJN7zHrg1rLFzHde",
  "key29": "2dm825Sqrr3Y3ZVnZRNppuM2cQU7W9cvtZatCN8JYwBvdqLuvVcHZSkTPUcdYWYPCgTfzkN43r9fZUEnU6wMDXUX",
  "key30": "rcweKKHLDSzAEHgp25SNeMRF322x9BGPqTyiuwdhVApu73khiDaJuuZsCRSHhtWF3zd6FF7wsm1Apq8a4uA3jMG",
  "key31": "62vY1cDuZHbqtkyvqz4zxM5TDU1XMkLVDVcfwryhmQCdyn42GVnKGBwAzrY84nedGg1ZAxgoLAy9rcHfATsVjHCG",
  "key32": "52vfv2PwPhLee7EQ1fhm84Y85W5vHLxTfXM2zPTyZuMAAyc4ymG5sj6nfEkZwZaw7ihYqk9VNw8EWKyhQL4Nx4tQ",
  "key33": "EX44bPt53EDonUzDkw2P3R32YQdamFBDFt3cVYQpSnCRJ3p67uAi5xdpgMhDMaTbxxghemNce3M8Lu642ZFSXdx",
  "key34": "4XjoSwNjBULkfoT2bSjHDkBbto9d9MDT4Z3qeXWgph5EiGMSifBNM7WQtwjtotjdwC66kRx5onadyCYhYQbnxSwh",
  "key35": "59qUKzZRqL5mPLt4KQhrpcBAo8HUnJpsZVQhu8gU8mKkxfipBKjiZGjYGDAkQ5sQCQKb9An2wBwqvPBcKzkYb9fw",
  "key36": "5y1Kc4s1UvdvHjtpUHy5FDLHiurURoMA64mfN46sFGgJoNcvLFfVpiGVSNENX614VC6LtcYVkETYjxSbA7ohv2Gr",
  "key37": "FkiUgBYW3NLQh24cjNNGjNKe6Tv3MfN3nUH4n7TTQFzaqiAwj7dXx2vvrEtMucAxBNgS68YMGSyJgqPFR1cuCXc",
  "key38": "5qLbi5uqrZPpmDX28FX2aqzUcvnaJNf6UmeT4bjLoTMtyo2GQciZRb8n9yGxk3fYBZUt9vLHv8p9yD15dYr7t99U",
  "key39": "6366nwLwsViriB89mpi1rJ28EcqYyz425TuVFqF9s4Jo4gTCm6fP3SbPBEkTgymXJ6zqe9GLLhjFgy8kWe6cxXdp",
  "key40": "eMmJw2tyQxtxrXuv585KXVA8VbKbFKMJxzEY9shraQ3N1BLkR4tpB3sXtm8H1w5A1gg8GQivQNLxcD6rsNkyQu7",
  "key41": "4pHdhNGZKPGiJ2NdFg6VkgYErRs53Xb9rpNvsA4DUhM3CwkwDR1oN368LY1dTLQJdzV1hmSgpKymPvAZNjv1Kv7K",
  "key42": "RCgwPZgsVD9AfvtVxGYeqbh9YusGGLrSY2y8VN6vhc52NfZmUqpVwrphASzzwhUJrhRJdpkrQWWrRz5abHJUEVG"
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
