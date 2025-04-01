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
    "2DfjgkomYrEnAe2ebrpyXmK3vmyYXhmPQgRWcptRRXj31RX6Vt29jZwurzs5xfddjx6ijkeV5iLGCT14drtcK1XZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "383d9swFmnwxmfbRvJsrhonVrxC7b6kfVsMAuiVuCjbPBWMu68iCqFt33CGkoRW8vVuYMrRdT4ijFsaPZAKW26Wz",
  "key1": "3k3SVy3jQr7FcBYKuuMNsd4ZUhN63wyS1TDZPy7zYr16XbfhdA7M3EZKxfQsQkLrASda2Sowe53WTyo1etUpaMR3",
  "key2": "3GmQbuAfexEixNejyE8pVxHYKjAgmrvAHaLbCZAnUub64D9XJzsY5B5gbCmLpGxMtDDsreKNjdqe9kV2PFfZewXP",
  "key3": "3G1RLQMhrqnA8Dz2QNNrijunsatD5Bx4Y5mNcPYNJ6nTNgDDEXrzwTHUaNyKRht19b4D99ufJnLhXbq2YuUVGhkz",
  "key4": "LtnEKZiMtkHcthFatx5PJU3ER3Lr1uMSPnszC6B4VSs2HY71pFzCLNeVgAu6fprpVSWmGmLcvUYq39wEPXMmEp7",
  "key5": "3XbPcnZSCi6Eo1Hjh1JbQrXptZwCHvfkNABLTbn6ffC431TE7MEXvnjj6VSXFJqChbS5LuD3hwgfXN972MnoYgXr",
  "key6": "hT6FcVAVhwLeyMEh43ZQuVRZ18W2e3tRPEFuiP2P6zkkRZJpGVCBGHWoAoxJjGVdngNRoHp7SWecx6g1QBJisVh",
  "key7": "612qiMVJxXSXvmu9FAvKhj5tuSw5JgeRnTXBv59tjKzKSYB8F87HpU4ojLeT2pYDgbhzBhkvmZrLBSS7hcQ8GWB1",
  "key8": "65rhrcDjPqH8znMxecP29kFCEP7kVQyViaQWGS1Gz7FZA7uNTMmHCkZ4rEiQDnfdHzftMDB1BeopgCY6qWupmKhq",
  "key9": "5L5dUqUpQSJ7PmsXMuynZ6M9YZdQ5fyJkhLZxyd4fAcpWSmaWeGr2gGjPPdL62Dcj45brwpWNPi2EidYZTcvjije",
  "key10": "5VvdbWwbMAPXr7x8ppmoEGmrFJ8m9xbhJTbZneCZYwPjTKyJELWwgPw8LthjZx3625dHAMBpPnoKhAG5J4CJSbTJ",
  "key11": "MnruJRUAdpeT1coguYsgmCfGyzg4RgR189TjJJxoDCCigLDFgz4EcVS4wwrnepPC3BxjdM5hm1AX7EmHCyaDobU",
  "key12": "2Lf2tRz4Y4Hg8UkBKoWoXkWBwJTXxi8uKqkLg7PQEfCAHX3f7iNBd1999FrTop6F5zVX2Nxovj4hkCeVAZ8gFRs5",
  "key13": "2MrrvC1kp4JbJ1h9BoUQw4mo21zxzLLQmmEK4bqJebDPiyESChAVQU9iA5n6ZjA4o5hBMh4MkL5XiZVvpk3q2MqR",
  "key14": "51UjmYcBgrN5feGzM6wuU5VLDz5JZeGCpWTSTwA7yQe1KRqopSE1G8qcRMeoADFA6C61cK82fpZD4hgpymugpRy",
  "key15": "2W9XRmuYDgtqazjD4HbghzAJ7UzsbEvynLL31f8jQNQ3Hx56pU1eWaGDe4dVZWYNs6XN4trxrhs776wkpvqMXJpA",
  "key16": "2pAtTmHxCEKe9obFN2HBoyZFVUN9trX6tQYH3uPo48BM7VUPvgzpkpET96S2zMLuwdxherKpqXHCTnQyMH8uCr4m",
  "key17": "2ZJ6wdsWS6Bm97HdJNeVZUptx92QvqufnDuxyrh5G6bdGysbhTTcnhxUc1pGcSTLoJ392yANs4t5ENis58kk9WuP",
  "key18": "2jNMKYoYufbrBzBdQyo1tX76MVkUD2Wzb151byv3R7wDoTqvQJzQr73FrQ8cKsLZi5n8VHTqqug1SAZQw2gPaHYX",
  "key19": "414rmQM9hq496TgHo6B19ruSik8LKo7pxDTFiY8NEjptwJ2E8AF8Cua8HkRF3uuD5RYyDDAsQYoWJYGBgxLVhyNa",
  "key20": "4hbDm7KVVbmfY1LEWQHsBNmxjpDwTg6BGmGqowDy4tnpMLRg5X32nLW9hKLy7aQNMsvfD3fENWB4GCieUDZLy5tb",
  "key21": "oNTgHhJXcJjEtVvNPztnsMmby14Q5stc4324FWcnW2SSc87w58mLQzNhwmcxCcENK3FdaSbiSxGQk8J4oJHBier",
  "key22": "DWUCZJXtrZCV8319iS7TX1ApkHCnkhj6L3bUCxGzveBe7N1sgKrCbMd6Gn2FKrw87UR27oZzo6foG3uw5f3BsPv",
  "key23": "5m2ExuxYfRvBqcZN9cGHzGPGhujF5j4UeJ9xyCBzepU6kQaSSatfnWNzdzAz4z6x4917X9rpef5kDJcdMRPSN6F4",
  "key24": "4fmVmYQtLaZtVBhjEueQyAXV6A1mDfG24q9829rweEDejtPxJai88izEPEEpJ5Fm83EoaoGyubAVu3RaSZYHyxTq",
  "key25": "3uEVEAHjqcT6bNdswchbZqC4Es6cnDtwhna6mCvU7yXdWppqRMePywPU62g6Uv5FSso4XgFCkx66dwRbvMRbYt5M",
  "key26": "5KVwKKS145hH2YLW2TrWstbMFvz94rtH6n9g3UHg9KNBQFhgyjADkXemFhJUcJkaPxXXXmsYUB94vG2DU6TCLguM",
  "key27": "3jmYvcMRtzzX8xxDEdUpiJKa3ht6WgtoGYdLvvhD1ffiAQSeK1fbWBkQKUoKNDJ3RRqUjzxW15qDFYa1rTWWuxqc",
  "key28": "3GV8CVN5xfF3TpZVe3MshZw3PvFcgHMSFEgtrQFc3Pe8LhqQzktyS2T1XfwEqRKze67QUYSxCJqgVxbRyjicWetz",
  "key29": "4bH3itFsuQEpdU9QH6cmxs2GsbKEZBGT6Eu4Ucm9a8PTCBLrheuNndNLEiPxAGjEUkJvS3vmaVmRWZbiWb5ruTSH",
  "key30": "3SkhpDXpCKs8GWLDRRudiNCX69T5ZsQ1x7hdProEsDQGweeBMDQT4TQcy2Hvd53F1k57uETdN7PWXGCKzYZsrbPH",
  "key31": "ZNdvSixLkuQhHnLmVUzGAyPe2xXy6bBJnr583qUtwTVRWoteqAXvJaGCdtfcHMSssQznndx1fY3P9T3cAecEefJ",
  "key32": "3wA1JzMUSKBaYsre4cUPDrypoqaJpMSFGGmAbQUL1nb4VMWur4NvPJVTSjA1U4ruEvPNkS5tU54pARzLhSMXZY29",
  "key33": "4WTmVuh7XFYWyjSeQhTPodTndb9LJxsP16Bh92dtD3DsY3BCu3gjSFWKyvMSHyPZcy5jEKT42tvA7hmevQ9AirCH",
  "key34": "LUegzFoct7jpzco9zSWYrmDHweAdiKdu1yoZ9DyBS8b1uTU19GrmB6cLbQcg8KhXEqqQyeZQFMkhK2UKUGh7bv1",
  "key35": "32ZsVkucBGFzgfvZmAXwbDnwjaY7YPGfVAM9TyZw6jjUJeT7NPnXm3jh77DWNS8xD572B13WWibgkzQRVqyyfv9w",
  "key36": "3owx9Lg5yugkci1QBFdN3RR3mg4hDoaoj4ZNgqwJThHoJey24w2AZf5Gi97QdFZWCzxubmim8gBG9w4SDXzakemr",
  "key37": "5VpAPKpqt17zXxU8UgMrJvwtCNyT3jZzEEZ7qWWAPnH8Gicp4NnUfVQbd36z8kjrPjCaCRafUKuWE74M73EHAaJr",
  "key38": "4X3uMTk6yZnDfdT52qLg4mLrD5Sp4g4EGuG1qMp9GmMih8BtZkHjwXmQw6634tjBBVoQ3Ffz7CutQPRaAf8dSaP5",
  "key39": "5xwYMKmm6ZofkS2tpELz4LstzvdUgpQNMzaWPt1W1R2GJ6G7rwzvZbGnrpeqCEVfURJU2f4z6MhhMcTxFS7ywudt",
  "key40": "LyVLnguMaf5XwqCyEF8KmuRJHzj97u2YqX2Tzp881A8RVfXbxMXyh8kKrVH5agKo1qYiYCoiSmtmNPWjLqgMaFA",
  "key41": "5FMWFYwmXndiyuJJHf1xgd1JbEWmdsyVgX3xm71AfnFNTUmnxQ14LWCk42MYsEStvEhLb8uxXLfjj9ABQh12vtzK"
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
