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
    "FVDAFuy1sDNyb2BEtsLgRRYE3S8YTbdxbGSQQe7qB33VCz3ixSrMarxW2aScXFjsDrtiabFDgtTLon6r4RBNs27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GBhCoeG23jSAeLUAwYa28JkC1tbSytsc98c44fR4PEMjrjcjgunULxxo1z2sQLh5foLtUNQouLen6E5zSyHz1Rx",
  "key1": "2f26we99CRdzmpAgF1VDNdMbTxmwUNdL8pa8KpqcmPE2XbFa65ZnLvvY4PWwvro18cYxeoxrjSC6HAGfcmMpVJ6m",
  "key2": "LSqnjEMyVqKkverFSSTyP6RQ55HcycfrWVetwcDgY9WGv2NT7u6g86QKopUiZBAh8EzRD3qYERP5DX5NzkJhZVr",
  "key3": "37p74UjMU49uonntiCL6rR6YX3WUZwb9G8bhvuiKaHXD6Rq1q5zcrXokq2UrwzvPr47ZApo2ZcDMvqPVbJS233NW",
  "key4": "5sVH773qXNS8q5zRByzUqqaytfk8yBZG2jZW8oN4qFLov74PU1U4Ubou7dsEkYNq5sFuLnneE3YrfrffcT4iepxk",
  "key5": "4T89WqRNTRZJC4i6irMizVV52ZAyjZdR6jXXGNcqanvppyPJwwF1tJoaRBuEAuW3e4nC6DZbjsVpLhZdit8adJyU",
  "key6": "2M57BA3gM9CwaoZPejdPKzigd7BYWsgBqCJTbKLQpktr9tHQiw8HfQrgERmgBmUgdsQXG9sVmpEa6A75rogEae4L",
  "key7": "4LVc37S4iTGH8s42XQitQQsXioUCNjNkWLPhrG5Z1fXeSijC2uZkbBH2Dbtqu7XN5gvymNBRgv8eoFXEPK8FA1vB",
  "key8": "4pn2W6nnpt4CqA9i1se2kxWAHwgC8CT65yJ663PZq9jTQPgQkJrPdWyLaBSHsfy4RdJbY8Tw4bLSDsaXnRWboGBz",
  "key9": "2Hqq27egCQpmUHdZcHAhNDTFPp4gQn4bZzmsyJYKRnww58nL2Egv7P7dja4LG6mW8U5VZ8n2u11WNSKzq5GX2gpV",
  "key10": "5icVdUxzf7KUCDn4sYafuXmYkkdsYQb9jSPGaDVqf3YqqZxnPycE5EsdsmTkqwekHZ7sgrT983TkPvVqS4gn97aY",
  "key11": "24dEvcuoEetzjFyV5XyceAbmL4MePUh7paLbjeiseY3YsJDMi3UTFCsZffGbpuAyYJ48P9fkBin3A6ec5Txtms2Z",
  "key12": "4K3JvakBnPRbcDrJe8jSBtwpfSk4cEuMWTtoYRnMdA6zpBpPNE8nMGnWxNX2Y7T38gNAS25pnC1DNithDefUyKJo",
  "key13": "2A4cJCfn3t1EsSbrgE8Y6yzp2KMEKkmMCkYFH7K6wFZLEVGkAGxCUoaUzn4u1APpUKuz3HruP1Jg959sayhjXy2G",
  "key14": "5G6iYo2LA2E2CYaokcpqdsdRH6LgkkzAAUL3xW3Wvn624BLcWwoVaBHP536q1UMpzTZhB7CBwHxTgW8xRm1ayQPY",
  "key15": "5ibMsNwSj3Rebu6TVVtGgBCpjksJ2KnBbYyp8dSrsXiyUAafwnXw7qzju26WX6Kk9yFLsXRuQoWQ7W8X7EkNZHMP",
  "key16": "3Dr7AtDv74WWEeU8EkDEcz24ZoLvraqDy4JRdyZ2jB3jT4scxVofT1AtGbcPpjjAUiqGwmoEMwt7cjkjHsBzjs2u",
  "key17": "4twKQQqFxGZqKVZ3HuksvYnL4A9uSpyas7zabkCC5SV13ms7TTrijHQZ9Wkbq4adJPJzCyXNqjMp1EqSbxJoSmg7",
  "key18": "2TLLXhTyNyzRjJrV6jq8T9DuMBVxdird96JXF3Vi9mD4fHjPjiEdxRotXWLcagRo5bksM5q3KubVnKZMJzXrnunr",
  "key19": "acCYdxhswKHjEyxkgRMzEBz3gxDhDV6sVNpdZdC3zim4kdVPbbwb3VAXHoGhm7P8ZfoHnKbDm6LWKi78nSxFB8R",
  "key20": "3DEmtthkn5ZAySVPNmPThboUYoM1A76QJPhZL3hnp56Zof2KxHSvBYUGfy58emhLUrXQjE87WwdtooMBb9cvugU6",
  "key21": "4KKVs2DLsyM5BF96Yv2QoF5rofZnn9GdcyJzJ23hqEsP2f2u6YWKVYtRgeEbqqjnxDW1dTEd8AbEexwLB5R7H3tJ",
  "key22": "35jYqn3zuc7GWLgyTzWi5hjps87KwevK1yUFMb1TiApyVcLqRFoNcdzNomnhy89cKZWEHGFhwEYNsQcZmaobWfNj",
  "key23": "9SbA5znUKByB15HZyWMVJM6gLc8QSvpwiMUCdUNnR8r5uqfEtoQo9QmgyJTCFdCUH8qve7H1hnra9YF2iQLMRmG",
  "key24": "5ofm2b7jznK8HuY9QLtdNY5mWSgVvviFy91aFVhm5eFWxwJT13jmx4vcbwKAmXprMk16jiiYwvYYXhwDFdUeGcJq",
  "key25": "67ULVCw6YnewdGvANqNjStjn4qKav5MV9cQPUXaHkLAWuc1AucAX1eZ64VKmydNyyc1H94333QNjv6dfr1MKRAkU",
  "key26": "2RmfNLRxiiZyGkgyUy7CCqbsZdLZUut41FbeaKXcYwCtt1epp2Hbfuv1fsScKkWKx35KK1YtwS2G2rFGM94UAd8S",
  "key27": "3MStW26K1LSRwtfTNP53NzW73ZuPq9yWXyERqiBpw3JqNGaXk3SkPyWckWv38UnNa5sN78cJn8Aer6peULX9dxbK",
  "key28": "coNBBSRFqapryEXMnRJX6o9VMxrb5tGooqVX8zrFMp5VH7VHFAyKsveGrLoGGnJ7kHRxuZkbYYRQzdWM3Kmpx6s",
  "key29": "YuH7ws78oPjrgmh6YyyrZ8J6enf2Dnk3aD7AvsoMdBXNwKY66KTmoopeCpM7jABbiAKYhsVRM516muRHkbtJfKC",
  "key30": "45y3mEkmttKPd8Qa1pjoT9BkYAwVRcAGvuwRfU4ka5j16htxjJ7vKPHferxfQU8rQPoCuzfwB1F19MfCxyaHWLkF",
  "key31": "3UJSJSAPzPP3TR3EQMuv1CvuSMy2c2jZ7cCGPQvxLHckXrbtidujK8PgFZFkNpA5SKK863uVPQra5vNHUjj2L9oU",
  "key32": "3XWVeJp6RHUArXNdAZU815Ak7YT1ErCbLqbY1x6RWFKeb6RP57GmHjiaGayb3DyV8LP5RoXsYZMFcvKBUEN6oHgH"
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
