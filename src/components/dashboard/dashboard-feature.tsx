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
    "36kNXUBmSADAKSw1x9ZgXZMhWx3NbrddTSWafovSHDJNboDZxUaf5sLJ7YYWjFwfxits8mweKkncXGHSvP2FFHoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XV52H3MqrT9SAkitmaF6HF2tTVGKLoXcuzMqFvWHS5mqV7w1qhMsjgwTEZpjkUvnfrJ14wCpekCpTd1TwWFqdAX",
  "key1": "21vyAXNNyb7j4cZVyGa9iwDaSyMgGrdrJYxmqenKw6RgMdtD2QSAQw5mFyFg419CBQJjkEUYDEHn51xkvP787ffu",
  "key2": "3aS9Y5hZMZZoeY4SjjBKHgarJWw5yiZWTP7rS1VnzW9tnkqJiUHTb855kdBYy4nrrF5wDyXvDT8CsuqWP3y7LAqU",
  "key3": "54ZXsT3AsDUMWr3YRmNPSFckxnVK2yKb5CTrfiA5p1XiYVoYqC9YtVHBQTUXDpdmmm2MszVonafMDa88LoYsVtHq",
  "key4": "3AMKEvSkdcvQ6QMY84mh77tF25xcHGeCeiysAtECjYQBhhu18EuCdnCA6RAJ61xyakibp9DS5vaMN8UALqRSHRGK",
  "key5": "cshfWYJxE1TjfZwfH7ey4TVxCTZmHT2Aw5X576tqPwNp2Xif1BASeNLD5eGL3YPKnmK3EgLNJkBB4hQ85JRnMTc",
  "key6": "4gn5kYhN3sQWNbiSDQTDWce2zqUB3khGoq8Vp76aGT1q8DMgwLqqjw8ZGvkeTRZUgHPEDixZ4Dwvx7S1zah4r1v9",
  "key7": "2uHQB3avXoQnoqjP6ZyEqXet4ATdtFpG22yTmqmfjnFPTmpTYwVVypyRjtjd93vBgwCsHUmgBojzJCFVh4Zi1Vxj",
  "key8": "W81VgNsH6WKgyxCEe8xEXxzhvgfip5QTHaAtsySWsAQTRZPwfGgkC3ZPWhPoQjVwjLRmh2YTDk69VBq9ujbfpvU",
  "key9": "48vsGEfvDbvEJRQVnqmSaBFiCkqgLPCir31n7HgXSTx4AbYA69Y7Z4ZiAVVdAE5MNEZ7Fw1SRoG5cD63RpgWrQDw",
  "key10": "2K1RSJ5McwPtVcsG6iqmGuJu5x3EE1QNwM2PFZiWp5pQDgKvL7ZQ8BXxF2kkowNWYrca7mGq2EgaSoBcKXDRvpH6",
  "key11": "3fuWzXxWkps7rr31nPuEqzzRagFrs2u4YVvf5642DQquZ4hhrj6sZ2uL6Bz4mUrwDUfxUVp359SdqjHqRxxU2WL6",
  "key12": "27ToMVgJrcmHVSiZT11zYE11qXRqvu1nDqh66mNiEXLN5UFwPGKb4NE4KDqchECftL3PxbGVn6XJmyVaCEd9gMMf",
  "key13": "aT7FCe3eGLwrfdMidBCy2f2NrEZA9uHmJyVUym6N8p668FYeGzZVUGwL2QdZ5CNMJGFCEXCgQVHp1i87PQdVpEv",
  "key14": "4ExubxQ1kUQsRTKvajhr81h3dSxisD6QAyY6RojL1vTw7VH39Ruoovdgdo54AU4MmSAT43EDgzk8Jg2ncYPG4Fjt",
  "key15": "2EFp1ShwEHzk5JqLj7HakG7UQUubD91NWRhCnLAbwUznySu94KFyxcouUGy9FRRPgiHaq8Cu8rhgCg5A7rG9BHqd",
  "key16": "3ZgmPWT4SyoWd3ozPB6beFQVmVM4nWRArkx8PSFxogsSE5LG7nPkvSfty2DmbmDE51Ezf79jAyEa8FZ26wXqaWyc",
  "key17": "fgds1ghxyBkuj1nAXKU1r86bv3nqEBFr9VUnSZGSHYV2PCXvkQF8UKydPyjhCdtoZUd36VHeqSp6jzoLoWa2MJk",
  "key18": "4wqjhHwwy5hBGWevSP3fBw8t8bDDf2czmR4mXAxTHvxDMCMBHC19G78BtM935Gufo2DfKJ3Rdiw8Qzuw13XpcvPo",
  "key19": "549KNCyprdEGPJ5Ces9VT5AxRGZoBuqxuBDYEMLtFr6Lqv9y4Xxow3V6wRQRANkb76RxJAHocDPd9EQQVDMap1Yx",
  "key20": "3D8dueu7xjwg52E7jJtyoZHdw3dBAHkgjPHtdFgchMga47rMKHEcVAfjTTFtWwD5fG61nCQKaocUQPAAnadKSgVH",
  "key21": "5QTgUZV1kphczdiXN8YvqmNpEKggPtcE9AjV9CZAPbNR27P3pDDc8EHD6FG6LTpQ7cQKVEc6Y6783wVeouApqg3t",
  "key22": "2P7RDKTqVVwJXVCQgSkzh7EXow8LdjUGrHEP73L4uG86hLKhAQEPM3s6WFcTDTXaWADLpfqNLeDU2DB4bvonC8B4",
  "key23": "3bmmopM56ncM9QaFjoGEiWWXWo22pbRwAENWpPxhhGsy6kD2YR5pjSuv2pdqQoa33yE6Da9jog38jguDAptabnEs",
  "key24": "5zykqZwB7CP7gE4uMGSWhSCA44jjE4RkkERK95q5HeKYSoKdxjEEK8mKDceiP3DWK64MRTq3FHa9Q2yqdDK7MvbY",
  "key25": "2aP7SzQmuRLRyCuvnDdf3sCM3wydFbdUcrBvzTxFiXRNmUWLEP55jELbdpm3M5j2v2q2SrAQaWtjCvPM4nuG8uyZ",
  "key26": "H3oHi7faxRprRY6T6LvuQ2e3JWbknpywPn5LsRbn7XeoeXEJhvbBBRwHFmu9xNpQCTX4bzUXZjhLnNa41cUqrSK",
  "key27": "35KFR2fUJ1toTPxatJDbzQM4RymkKxHQtUQGoKS1dR3H1VYicRsY2f46gXaUkNDVGScRfXYQwmsVvhK15JVUXdbK",
  "key28": "HNoCVwBKZNZaCoC4pynP4gSeHhLiwJEdMPBwXNjXJkMi54aYsPNvz69Q5YNJSbY2yCp6wAKty5NFox88RMuTpkC",
  "key29": "3FF7mUrBEpRR6TZaGChTL5tC5tRNDV3r4qgFG2SnWTNNxBEKN1qepFxC1nLLAS9XMvfVSKKFN3rDMxRaQoVHLjB7",
  "key30": "4MgS1zaTZkgXcckGpJSmSUqEJBFPWMULPd3cMatVN8cEC4xz9eF3vpVVd9kvEnrEmtSSPWMUJ4Mu65qFU9wr35tD",
  "key31": "5Cytuk6E5WQHAJSTXzrdSyfnQpWexNZ3AQowF54EXihSqxBNXmZL5EMRLuYZSP4SPbbG5UfNdFAAyNyUqQVQH1Mj",
  "key32": "59nS9Kmu5x25DgTd84Khs8qZg7zACqxKVqVF4m8NWXc3Lg4oUS9FdPnbMvUTnJij8gvvmF3bNkxwYFjpehcvM9nt",
  "key33": "3GUVcwPvMJPRsfxdAiHaWqAW6Hoyr47n2SQjb1Ez9gR2NNMbFq1tAU1s71mNASNT8BAS4ZfSYGB7jPQn7waF2bH2",
  "key34": "2JR1yRc14YFgDBdXG8mzCkYpLajf1PLWjrEzLZh5vvxwcuo8MEtx75niMnQ28EHtjxKgKet1ZHCC6sZWUVjV3W4K",
  "key35": "4BbZX8eZJn1afaVoUeN3fa43M3bCvot7eARQUGktaYfefbkKMbfVgD4JPqHJz8ao8ufneBhsUhQtB3iAA6txQhQD",
  "key36": "3gnqjHP1hStqapSYhsPkYCQsPSAVC7pZy8UCVME7DYnfQKRYeV9AS9bCHNPSuSKLTPVgpgsGCh8qoDvMLE2kZ8dm",
  "key37": "4h6myuYzxmQrHmJ7rRbqhW6d6vJph5hSMZFRcFftzA9Zdx1c2jPVPwEwsbZcBFuSoiV8DhfR9ya4MhW8KQviD2s4",
  "key38": "5SS1fT1x8Vt5Bq9oCvSc2M5FkWP2wjWvMP8Uifj2aPY6APtWBwYiMG5acNz3gchgZVfGoNmqutGboJSiG1z8dJR2",
  "key39": "2oji6B1KnEQvtUcMzkZBFPhutzrwBh9YhpCfMnQaHCSnFUy1rdLyy8wvHN8wF3WKmHRieuW2dufepavogRfpaabY",
  "key40": "3TH91PKz385NtNRbfa1LMokgHJYYhxUxjz7KD5CTzpDQ5F5geeQJq84c6okGCYCc1R5UmRA8meYS2eSJBdEqLQDn",
  "key41": "2fvBLzmaCznLaGbJsXU3EciXoKiri9vG9W3AhJgubCnPuKdY18YEGhPjQzFRyXtkqPsC7917VghHTkAXVLr7iYaK",
  "key42": "37ZEhYntCp9gurSex7PsnjHBfUGRhF8yUc5Ki8FNkX4ygPA5z7UFSfJfR4EgcMCQ9tYC1ghydrYnt5fvYNyqZCd",
  "key43": "2N9r5eKUDaSA4JS7pEuyjvaKzK9GirtxdTBQAGCF98nN4xUqdBeeVSy4jSWb9EEwMq1YS7kib2mEi15fHts6NeCV",
  "key44": "2SjVmLKZyfBCjmVHcvMa96J57vgka5c9DEqaNDRkeeqRUG76Yez1EYwQxQakoZgNynjGFvWy78az2yfLM9FE7LZB",
  "key45": "2JLpki1wwAU9KYHSZuBz8P91MZ2MjLPYq2J5hZ13i4N29PzyVPbj9VxNfWgM8nwZCA8rv8tQRic4A68igx7iVNc3",
  "key46": "YQ7MSgQFfrnZodGAhcB8hUTCHeVJuSUoCf1y9HUP3HqiQfK674TR8jE1eiBRQrnCAdVsrnAVeCgoqfTLkK2j7zQ",
  "key47": "61az1W979F9VSsm5fV5p8o4iqGzahch8PqMZcPFUcmiowRLUrCW6f1XGvUVNcB2m1Q4SAbHTKLL72JcMtiEaqxqz"
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
