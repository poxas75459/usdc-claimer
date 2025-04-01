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
    "3rtR4DzNCkNrKfujp1ovoB8hhcuaFAWk2JLbCP2dNGWBaztLDFgrsECsus4JRuT1Yze39A4otVsym5ywKWuCA15C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bUvamEKqEXtz4iD3vZGYWFqFJNX8qpBTYt8d3odDCxAAnfhvzPxRM536bTAArtLRbeaDtnfssfSqXLiZADPDZ2X",
  "key1": "3YEsTpb27spFuzGYWKdkwzkdebV5PYoJ7QkZEFzqbR1KEoS2dsDwoFPUT2SsFdX2VD7pUurEXuu8o6cDiBedjtJo",
  "key2": "VYsTzrvd3c4hDmprbhkGXq1azMLHJvYduy66ZaAphxNdLebiJiPx7bh7Z7j3G5tawbyabaSPi1K78Z59FTkoF1L",
  "key3": "JESnqDweBapsM1KmkFDnyHrEANtnhiyFBaskkKswKaDuVTZVD8AMeKoTPFnxJhUcT3bZhDrZh3hxvEWEZsUwuUm",
  "key4": "65ucZfKVMDexbs4EShyDCdXEDp1gkzcMKwDC15YRCMeWGT31QyuBFHFW3nfTV8fD1Zg55uQaZpedPzGqLRn8cxmA",
  "key5": "2ACVi7vYh8PYPLSR5r1gVzMtsSVrjCipXpQ3gRtA9jgcepjwDSFZH8mtDhh2WH7oHda3AsiiWyYje8a2XF7pntUW",
  "key6": "tWLpSCc3DoiFMjYWPKuKr4raRW1LRPK1abYuDfPvD6d1Qn16eBjqvcmPQyros1EeV56SvYUAEc6Jf1rCTi6KmZx",
  "key7": "3HkgAhxzxb9NnbhcnhZV6yhSZdxEAKYFuUf4Sq8nwbpDKGLfEks4Y8d5swKLGeXNhG9tdCahukuZi2UV7vTod5Mk",
  "key8": "5hTzk85uEpJTkwuCr7v2ah78ZWMmdZMjuX92uBevARjeC3dKM7f3qPBoPE7LqvsNuWk86cV4C9Gdb9zBuPsUp3ui",
  "key9": "2BfFoWHRRD9Qb9AmHA8HWXZp3ZwYGx7sm6i6yp1t1UV43rhh6mwRce1tm1LFBM1THGHPMshSMriS93WS7jhhCMyS",
  "key10": "31zMVBUs5MPm9J9731KT5qXCR7Z9D7vciQtqbFAbYeGWpNzp7rzFr3Z1dz9BCokyaKCK82YunF57iq3uampykGDS",
  "key11": "22Dva668c8fntPiPBQKAVZhUuRVaeGjM1BEY4Gx1kfcoBAPAumrFVEMi4bczy59DeHgx64H299QBP5BFGrin2HMr",
  "key12": "Mk2nUdZZvRogoMzjm2uowQ1VmM7pVW1FGs6wjMhxdEPtqv5TQ79MzhaBwy45YGUhkAuo4vfYdVnKBE4VsjLxXuX",
  "key13": "zbq2BTEEPvqvktk7QjpYPAf5kmM5qjrgrCtSK6uPf1ZAxdVyrYuobZ2FtaEBBcAV1gFbnyhNwDRFNUcLcaVHaQU",
  "key14": "66j5pnGJWeaMpZb26swzbUG2sFBjEJjZ8HurR3pbHMoiSYWaANacoWRRnbyJbcLwcATjtwqFeoVmejBE9Zn4TFcq",
  "key15": "2TXom4dSJ2aoZ48CDDZmoBxszPPkniccKrznKb4KVCdpgrCWMGKP2JSuJ3q6pZFJgvcHStkRESyL9JSLWDFgJKoz",
  "key16": "2FJkTMFPXQL6bGCHgX615xMASfXzsKdo6MCgtdY2LU5VksPUmDYWgmYm5pJXSXe8D4EyGFjzqvUZueVsnNhrg2Ye",
  "key17": "5nVd7a372AU9m4RtBy1HmmgPg5MorCDQDSh7PGRSm4LjAbLZzdqrPsaJpAKAmWg7MdQ78d1kyJqdY665zsydsfBP",
  "key18": "5sSVTTiwxdAeeMvenkrqCo7ggVdNMHCExJCL7ZSJntSPRVBBnnVwBCLYKs7BqR6qpFs4Ufhcg7JirSCkQrjR4RLP",
  "key19": "4X1zqjJxdAR75U1dz754QThNHYYqZXteHkNVM1V7awqFdsXzMfUCZTQVJUwRJmCMzN7qwZ183z3odHDLXfofwf5y",
  "key20": "5eZNgJcwFKrsoh3WrxX8uoEZpasckDFoQy8cKdWQUqF5kSYdwS72w77CPnukZcW1U9KDamm2QtcitDyv43sfsz1Z",
  "key21": "3ygwQUQdM2Yj8YCfYziFhiGd7AJzFJ4BkARSJRMgqUuYuWMyvZVzGrVkwzA11EVTzWwzuQYoPgHjqDDtMsw2rtox",
  "key22": "2t68Dr5mVBLmHyzxd5uV96TxtcL6zEpBosqCgu5KjWYg1nLPdVpcnacsaEKDhCGjNvjG4J1RXtT9uoqDaMGCXygp",
  "key23": "2ereLqs3UMYZ5LMLivyDVwLV34NYQVhjwYDFbXSEQFiftmwUDNKyeaVTSz9JmtYhycX2EHDBgknQ52UmtK1Zperu",
  "key24": "2dbWHcnvSKo8wztekpNHcFwBexJKwNARQr36JN73SZwRgLXsfr9EGckog33APjt6Ps133mNRSpW1DcnYKTu7Uq3F",
  "key25": "3m7sLWSALgBbsr8SRK45r35RjpZjBukqdho3VUcrrAiyAYNEb7X9tV8VENFi3LRyCe8Hd4mes4K56g2TUFxUVuTv",
  "key26": "uENtXyK8j8wgTuXY6sbJU4LrqdbDB5tjpT6GL8s3jyyQBc4C44XPcU7NzaxQMvW3qoa2ojgr7NCCmfHhUPReoE1",
  "key27": "5Tr2z78UFA8KNFKc74PdSHzREgx6yX9LXCbu9GGjx6mn3pRLrKGRhaavjPjRNjxz3iJjELcVU6MgZPZQ78XDrX38"
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
