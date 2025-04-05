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
    "Ca8ay3oENsrhZsFgfMBiiR5a29Wtxgh7GkYNWjHF4bqs1p95HTCLAYwxdiKCvBLzRuyZ4gguyaoPwttQ5s8bRhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DFJWetX2aY9nsY2wN1dJT31KcYEfzGxSZufzKJMDbS52qN9TReZXKmkjP63SLYb45bgzTkNrJEGdnWEoytGbXgv",
  "key1": "29vkRCMqbnuTngtPdbAEMYTBZDCVhXHnjX3yA5nq7vGGAUEAsF5usAa2mmDApmep2NkucEgLUJTCJM1wG3biiqTU",
  "key2": "2tYtWiNmQSYBGR4YFycBTvsV3NT7CEuxdAKEBKBrwK2NqhNuTKpAr8iNL64gPFdizPqN3LRikhDSo5odX1VHDAh4",
  "key3": "57g4DKLPkPoorTBFF8WpvsTqpvvb7g4sDJTdoPw9XdNTQsefXD64piGYPL9dPqWWLKNVJBpTmjqVLyFsZAjbmhUY",
  "key4": "4jDJHSC9zrtgdjfW7pXKdjXjPg3Sdj7Juymp5dyQx8L9KBCrhBCa4DXXk5UPZxU1rizZiTjvcEvsjXUSX1Lkq9Xy",
  "key5": "3cCWbT4m2wgPUyKYAKWNw7KvLvTqfWP227hBmBT1LTSgL1wQXBMkFnQN527hLVDM3o3eujH6TsVfWFf1Rx8DAe27",
  "key6": "5tyrdUHFP51qVrjiDMWhCpwrFphFB6LFYgHP4XpLEBvzbA1nzLCpzSmiccfcgKnrCC3tsYbyioiYexh2CC3Z2Vhq",
  "key7": "5u4vTqcwaTfwaJynt2MvRA87W6bwtoS9AqsbavEQaMumfF47mfX18WSRfMPGq8CBkgiuZ67AKYgTszYX35wHW4E5",
  "key8": "5uuy5bRG1iNSwDnojobckx5zybNmoHDzNiZzTNEuYi2SboDQdN3j8DQJ5WkYP1krqaRkJgekiLbGvDae8ajNyLbk",
  "key9": "3AkqHsxBrJfRfUY4KJEkVpxMuMWy2aEVEhaLmuUt9V6afj4r2Psmbu8grS2RHWCA31oUaSphtRoZrbHVZ6nL93db",
  "key10": "4tVveWMsLdxihDRYHKBRDJgm5VgQo1LJMoHui4Drj2huQS9xqLp53kTRcGoCeaeNnMJFzg2yyFdPwx6HCktT5Dez",
  "key11": "47KKZEm864MNQjRN1RxqQ6qn7br3Q7D6c9C8J8VVQRXUUNAAE32HWqss6ewt2AvcybVWPZjRoB3jfpFwbgsFCVdX",
  "key12": "37zGHJCg2siSzi3BZzDUzGAevhJoW3u5G151KirY1CarAoyKRRKKivVxLMafd4aH74wawiiu4Vx9AtYzv2m31GMm",
  "key13": "4ST9cG5UYU25FNVC2WcGtg4cHL98KoYtXK4SkyNmxAKHs4uF5X3wPtSSiGxwWkXohzCDbbTytKpDMthuoGje7DKS",
  "key14": "5nkwq7QNG9qk7zzDQNYs51F7qcGy4Ubxj5f5NK6rysUob2dnrvsC9bxrdzXJWnygBjX2V55w5yfaAVLuT2jNwrNR",
  "key15": "qRWMef88E14xRHZBXhYjRDWYRSH9msKQBaGWh2smJLgVZGbHDJBqq15h7XS5xpwYiomVyrY9JPEgDXeEFzgudCe",
  "key16": "4XD6Xa5sSP2FoEAeVXALG5f7oQGxvV4urzt9wE7eka6kUr8PY2ptsp1mM9o7Qzstj1RTTi5n4M93FCVtScTkZP5H",
  "key17": "4WHzHXDb2fMEHR2iQcerFr3bjy6HGYR366FbtmwHWnpN3sfFoTGh13kgasD3Rvifu8iZg4pNGyxjHBj7BzdMvM8x",
  "key18": "j1sZX5JPuDuLdBFNCTDfgK9bnpGrFZHNtKiCJ84dKLNpXFrUyiJW7by2aoRCGMgo9Z2qYq2Y6yeAmGepACXuu3W",
  "key19": "5a23pFc7PVvWDtuATVKwbi7ZLy3x1xfrPkAQJ4rE3oASxxY9GAXXAayJvumddk99XnL6Wez9jnGF75uuEP8n28Ku",
  "key20": "27xk716iiuzxj4xWYxf3H6NT3K1CmjxqL56tPoB5kizwxYQHUj1NLp37i9eNf8oxD3qBkPRXYZ66q9KDisAT1Gzn",
  "key21": "4YXxTJJm9FttQfP7EWBYr4k5983dqRVNfdSiwUoFwpm1H5QSqzWUpzcFFb4vcx5vvm3WYrpULFNrKkj9Sq93EgCr",
  "key22": "3NGozWdWhNn3UmRVEWxx2ZCRZTHiAGNLeQvmnQvfWoRwqGrWARfFA2RhGr71sugAk6ivZVWKTL8anvn2wGS11SQM",
  "key23": "3V1Yq4UXThp3rQyqqBn8Juv8tdC1uDfPdRaAqTCKxoNGSkFGJCYYHHKKPqutVZWR2NWhTn7CvmfNW4UFQx4HHD5s",
  "key24": "7TwhyzHufdMDtS9vsm16Jvcqjm4eyh8rdcBcikgGeBAx7daXo3DLrLfo6qxSwM6MBgMGQfRSpmdcyry7Gp8Bgic",
  "key25": "3YHHdyAnV64nxYCPRtNGwnu7uYpPavrwirXqkprs6QnJyXZyv4TjdfP4HCJ2eMobguaskqoPzBdi3uZ8vTY9gCev",
  "key26": "642WfrW4ugGxLRP9s57mBQ3Fcaq6FAeijizCg92tdA1J337ADcme4BMxjFSq4oHe1rrqPyyzisexRUoU3vurtvGp",
  "key27": "4N27W7NPboNVTidUp6Dya6Xf95F3BZh4RxGuZVpMVFPumb6SNUSxURvKqMcUEhS1TahFwbv2MyTm3HFWE4JJGAxr",
  "key28": "2FnBAgVVgsuTrL7Uh8MwctyvWSATdfGNJJVHTx78mYYySCVKxTu2RhpTyvnb56mxERhmQDiPwFtdCj2mrF7tNFKv",
  "key29": "3KZ567jNw53LCUZhP69mNbPA2oYRQLDpTmyU4UVYBi1aRP5RU1UhnAyKcjLN8w8qg5sZ3QJGkrV7Waex24nJLtdP",
  "key30": "5Xk2FuwLj3kmbo3TLozkMWZ5SWcbZnKHWmPy8run22p1pHttc7ELuAAxvBoL6XVHpzBpXy2LTevgsvxLn3TDQW8a",
  "key31": "5qD1StsRY4JcxDhxyWeaBipTcunnZJRKXNRwBpogccMaGHALwjQiqtkXc36CbGWhGCEhtSGz3mFty2PU3CSzCjSL",
  "key32": "5iuCTpAUd1xQAkQqSk7Gqg3hmyBgZ7b5zZ8jCRrNN7rFchtG8Nqa5wXTA4RTKb58Bfkkdb52nsH688yWeEmUPzhz",
  "key33": "x3uAKtmZRQ5KqaCz924KaxHxNZXyLe5M5kXSnskyycCsrwktbWyGENf2ZwTRJc3CofeBS5uCTt7aggPubSsP5VY",
  "key34": "4ULgyPBJkk29SqnyUNB417uMgGNqd8iXPz84cbJF7Uen38gNj7hgxb5tVdcjDfvm7XYbMAizoKm1ty1Ly8XW11Hh",
  "key35": "29Xax2mHXwdvMhAFPzB6RQU6SJG6ZsyjkLei6EZVn7ez6QP4bdcTeMunDjszWDgJtgV9xqEt8aAsNxTBFYBBFksD",
  "key36": "2gHP8oEBboQsHsaXDvQhH8eSRm6ZmgyZQAQAA9TdF8ZsTRB4SSzyXJ4qSYvrmEm3H1hk9knaGbcNWxvpc28PXVwL",
  "key37": "5LA9rEKetiu8ycMtbKTdz655cxT9phWZWryTnyCXyKdLtrU4fvU6dbQ9s1hfigRoUpKWrURzJFkX2KK4qxWxiTKV",
  "key38": "3qbZmW6UoXbq9Hff7U7cREUfu3XVZgR9LF4nMwSZoADVfPN327pZ9PczrtmnwUqGbM8yCQnpaVgzygbgKv6aLqrB",
  "key39": "39AjS4VmdB2wGuu6JVdvBrVs7WiPVC8hxYZzAzgEp9Xo5WFDtQSs5rmNdRFZVPQXwwoHhpovBbLkHXC57T5HTdQP",
  "key40": "5pXL7wmQPTRwJHLmByjGKKaQqQTo3yqvPVtLehqp6uLSjYnUGyq1425GCdNDFSaqJBagSK5BZyFwDexURPwV4oa4",
  "key41": "2y7zkuBA8dJc9pjGUQr8jYripUwexoEVeVLnJ5cA5mK8Tnmy8jckaThGGwphCrVGgZyHfoQ86daiPhSzcEY1koC",
  "key42": "2Xd1egcg6Csjc3CRDCLuaqAEWK6qSWdPBsNVhgZjyLDLoRmbz16v3YoFYqiJYfRFUtYKPg1z3iuGrMCDLfXyJovu",
  "key43": "2BemXrRh97DRvChffSF1Sypi1mkh5UvMSHbtHseZXSQDUHqLybsxwnDJ6B6V7p4D9yxR5o7XDEKi9qbK1S3xPTTM"
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
