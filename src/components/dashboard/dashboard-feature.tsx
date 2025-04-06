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
    "5SLzzfS7wKP73cVHkC1WaAmntWNSsL8HqiAHXtXjipQPZEKKet61h5yAykGAJXcEDTER5PX1brhr89jKnFRnBW7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DeMsVpiGiNp18iJW2nUbWNdCoqSCKVdDnnWzcVJVaJno6eLrd8EZZ8snRtk7woF64AULD45xnBFbLqxz8mefmVc",
  "key1": "57igrjzJRKg8UgaXpmLmx9ThrLopAJRVyy3idzEHeC4qRvx3BxBL6bSy9WFARrqHqn77ERokt59V4Sqk6VAvQX8Z",
  "key2": "3pCgjJZkyFkZKxoMMVJGRCuNiN9xgtzNVBieHp5gDkjHWuZ2DcwkzneWhhNLrwQFe9GpytZ6q8gWGe7gcoU5ymct",
  "key3": "2PQiHpUQLBciNttdB3zswjnTPQ1Wh1xcXv73enm6ApRQv1b2ZMgXT7h6dJBdZ1hXpR8ocusB4ug5SPkS47Mvd46f",
  "key4": "29yArwtnmKXwrDQ2fM4kgX7amkJhHdKJqiY8jFgBWHCZExTngczQ6S2s8ZWRJzRN2kWBVinMjHcmoutYbhryB74M",
  "key5": "TmwkS1WwVhnST42S8vPNPSNU3ReM8ZidDJ6n2rGU6yW3M7Wu8JAtNqC4Xg8h2WRuaR71p9VZe5Qe9iqr6QS6jcW",
  "key6": "arf3qLiHLuhUyzGF2rye9Gk2fyo7qRxCXke32CNb5oFcqGjwV8faKZPKpYuwBFyuYpphiScHCSM5mUanbKtYkJQ",
  "key7": "quAaGfbLZG1efu53qgvJikkXEbPQiPKmGocSWt3HVuBuDEWjr1dLBNLgASi3kYcj6YTarzqSFALFQKy3W6adRgy",
  "key8": "4326KxT65xGfmbde1jjoXR6XCDeXUPqusmuCkPhY4um9DRg1upUnto6SL9D4FB8kkqT9b6EZ8qXaofvyiJ3wARdm",
  "key9": "3XDThYpZD7QVfCkGw4uXGXu1Z7pFJC8QqatKKeKGKu7PqErBCJQhSUhUiWjhTB4CfQyTnfAcKJby7YEq9oDLzYkD",
  "key10": "4Mz43yCcLzcwi39oBDwnbZ9DSBPtKx2D5oYyzrnjCNi1JgpyGwsM1pMY8CJSidLVkmoAvYf2NxEohpn4dihxPdJY",
  "key11": "4QLuCSQiSSKakQAi5NDUkbjvpiUZpB7UsvQgAQPPWx9Dhj5YxobBqjo26m244nrRWp49uv2c7LiDGoH3ZhTVnLPV",
  "key12": "4R2VWUhQt1MoS29Ztv5KRxyGNQFygxDLu23QpKP1J2qByCusB4WoMA1n6zwMPCUBrGwmwXRkYEHgSZzAFJLtSnLZ",
  "key13": "5ckdzxevhCYCTGS9GM8kXPheauyG5uTsJcfdj87epFSTwXvsrV8Pn9LcW86djU91VxDz4MTveCtpnAQpU9fV1CmB",
  "key14": "6ryQj44RYArec1D7VkAkqc59SdDnvmqdMRowiyEWdhDcm1tuvAHRDr7XnMhrNxnLu2Dnr2CyYp2UcdJmjBXeD9f",
  "key15": "2sdDJFaeRee5VhDdWBuFhZ8oAP2kpSqMcEqogSmc99aBMG932dhEvdGqcVDzNq2W7DKaxsmqiiSFhdPZpBAArKW6",
  "key16": "2GJcUv5WXbAY3xiwbijA6fmoAQmQQH2HN1tZobUQ6uwPjyy1daVHXHrLapndjymVTEzKzW5RsFkewj6SLToYKGbi",
  "key17": "TsCck2tpuMcpnRqtLQHL3TPb7yZv7mpLmzkCqLjcPn4MjtKXDSZxRikkwN97sBgNcrYancedVX1jpYBMckGrZuH",
  "key18": "5ZQrjC6yoGuG4LR71eL2AjSAcEbAzkUATChyvnaXhJEtTnDXCh3phMLyWmVAxBK8kFuySpjQPL34J2uAqfWXB3Hg",
  "key19": "2eFEmcEginCxnpW6FZaqkiDswyiewutoSmfhCyPmPhdAyNeErE3TRbygWicDDjJGjg86UkxDxybHKNrrBMu7YzWi",
  "key20": "h4QLqBKSnSnF6vdRDfMGh6mJSTgSpnAnSfELjETT2VRYidy5YfNx7M6rJK8rr8FUBB4m2HgBRQwSPRT8f4GmiH9",
  "key21": "sPtBW7pWPYfHBteWj2dqpikzyejD3jpZsH4F2GkoyHicbBkhnRqZUjXFZXHJBvSJJXSywgKy229kwoUr3i6eBFs",
  "key22": "5uFaRttzptFghpRJgaNp4uL2iuxSYAbz6rKAM4sPKKnYGy6LqGjXfuhps12XuPbkdUkVezkc6eGQ9rgeq3jcNj3Q",
  "key23": "27so9hRoYgp86tGr54aCuTaipitkUxmWbbtc1bP4XNWaKU9CAfrLQQUdAu1oMdYXc4grTpgo94FeUEsorkbUPkyq",
  "key24": "2fLwGBHRz37gGPuDVVJY21MpiQ4YVCR5hHF1W4NwXLRw6GaA37ea1Rkdti9VQGX11z8hkW1PH6gHBGAdrV1bJud6",
  "key25": "5WbeaauVHLRDdf8eC6mUnbCnWL5PJomvXVqAQg9JB6WyJWjX2VpivKfovxNyLdcC5E2EnuMxt91SomFNohmpmdZT",
  "key26": "iPJZptyDh1QV7J2oymBoqYoSFLQJhXdkEDtiEexJ548DcaT5KEBY8B7QsRtd1LRddbTVa5qHRspvVEMkGywJ1pf",
  "key27": "5k7JtQ9Uc1cqWW9CQJT8V8X9E7RbSyrrahZMNvqb7hxLQkT1sdCKQQrvRGz7MU6eb4WwuMLT2ZjQyh71jdQGL8bf",
  "key28": "2gX4TbYrgjXkXkAwVEjMhNXZLomWTyGyyWFFNnXLd6e4rHz4RhwvzgfWYTQEcc49Srn4CoCshJggDiCnQ38FKbFP",
  "key29": "3QYZyXYCacDKtZWRDLeBGYTM4ikeVVZD7jU8fA4wB7BkgmxPYqtzLbEndEmspiQxhkJsVn2Enwvmt3dbXEpasuW2",
  "key30": "2T6uc5t6yoDcPNQxpMfaaAYg9cx2WSKyE3c6146AD8ySmcqEeHawfmPXr3NYn6rfgbxYY4Qz7Cu8DywMETRrZE7a",
  "key31": "4WT56YA332bukjfhXrmt9cHPNxnSFzqzGZG9EqKsTdWooPneKsTeZ1LtyPHSEpCpQWcd9cLJ2BLh1RiMUeH7kFS",
  "key32": "5pKYbiiNkG7AhBxxi1tJnwJc2asY9aP2TEBeyYzBpUyLLEHsQcT4KFfFw9dpBBqvkvLSti8ZkxcZJNPgAzpbjnJn",
  "key33": "AGoG5G39pz5QmC7uaVVEhy2D8fe4AocZkJokQEQeALkTcWyNcChjnMN2GaumaD5nQ5ueqrtt8fyA2WPS7hRpJNq",
  "key34": "5gZhfCNcjsZofU8eFHUREfFb5Y2WQGSyEbBUG57BWgUFGfnKobtz8we2kK12CHTfwTZWDsHdNUhhyxyye5uTzHpz",
  "key35": "52rVfch97kMGSp6eFVUikLHgqEARvnkU6VLGGf5pbXZnJ5J51HQtXDzbtHi2V9gYhEEh9SDCxwd9hAL263wr4WMf",
  "key36": "4YaPFcgj1xfwh3MsN6L6LLZhSttFbNTGspTnc5WfLy47QQ5zwk7ZdTcDQvS9bGbAKPX7rSaJXys14AZKjngycW1c",
  "key37": "iu4WozAHuFDavZPy2oyQZkjTPokyF3VdzZJ5p6YztCYgMoiaCqDdaMDkwvcwGCy8ebD11V5qHEe9m1A7QzdnMi4",
  "key38": "532LcaadoqXB2RMkeCHqjrXjk14UD8F9D8GNpx2v6kZPj3q3BGALmw1qK3rUe1e5WjKmf4FwRM2ag8JwSuHTP49U",
  "key39": "oNiTm1P4KqcccDJcwe4LC1gWyjjmgZHsEHv2Kxk5izxcWVKzPAYAfdQd5FTbjr32MpTemAJobRrfETJEtqdfc5p",
  "key40": "4vzi7jMTP6o4yxLWwyK4T5BLSu2KwaSWvZ1FSZH9j3NQ8yeQAS3BcqWxtWpx6L5vR8QqHdtRPXWF6DcX85aZ86Ah",
  "key41": "3fASo3RTLcmxKWPBW2ADWF3xPXzfqDN5uRwvAPg51SbXSALzyFVMJ4jktpXkST3uVffRa2kcs4ptps7Ni7tTavtV",
  "key42": "Gym6Dgs6he27n7E7SNz2mC64wXi9nVu9ooD9rHJDxzPrMCMKX6kHD2jLqy4nqbCT6JZDU99JJ7v8RbTEHsg9chX",
  "key43": "4H5xCN19pAMj63DULE6Tx4DE7GojBdupaXL89Tbmnd5yGwAuqD8S8rAEqxpLHqSiDJR9oNrKWSZwVXTe3rPSwjRE",
  "key44": "2kh1gVwcBFP7XLpJB3k6bjiD6t3G3rrZuyTkXNzk7skswrH3K9nFkVAbxAemJ5nKVDwPe99qxQ3VV4sbnu5gZ1KV",
  "key45": "2uPAjnhjL76aawFP1CkwzoTFGWGD9rfQJZA3GLWrAmVWyscbFYftv1biehUVFgE3kQtWhzYnnKmmQ8pVygguUuDj",
  "key46": "55TsF7YxE4oDJjb1dky6sskfYpcjweQkSeY1mWhpKMnfKsqzkEGowyt2Q6Z3qodBhrXd1uLkNsUZSp13N96vfYh",
  "key47": "4HWxWnzDaXjiC85jZkwgQYu8rnNDpoifzKMXzj3chfvmUB9QUCQLe97Biz4i9pGHbEuEi1uLbSWEJX8eZc9QKDYc",
  "key48": "2aLBaEXsED5SWecHmc88RvnqQDXxGfFduSQmYBxQtUv7RCrg4bWFUtAYxD5h59scYbbJadKqSREskVhUDzzdLwvz",
  "key49": "4V3Y22wq5WUV8oBroL4ciDVJCkVGr4kw4E479WRR5UHrQcozP1NJn9hDkFafWMkBU3U5CbCB85U9NUEcpRvxNn85"
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
