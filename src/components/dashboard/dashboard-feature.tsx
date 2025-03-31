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
    "w1XxVFoowHLFo3LbviQe6dhTArauNsVzJJBD6XVYPoYr2rUUhApyyMjfVo2sWm1DNaHreZzqmum6HkgjJUeJ66n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZgoyHbaCti8kjLPTmq37JR2vkThJD46aGUSmkA93BGHhfVcZLV95MJdF8ZAX4jRrxk3p22AkfPkhD2hNERWYAa",
  "key1": "5nAG1waL3jozC3WSeogac15uYKpPbnBm7pZ9psJT1PQWS48tgMnfzr6DLoKyaV3AQnCxhPFzrqpXPgZnioTc8Xna",
  "key2": "2xyWDwXcY5zS8Xu9v6VHC5ZF3KBDBUYkTqrZyu5QSzhBNKfAw4S62E7obGhGd83p4DfbNieChiZAie5PiZ7dsiqd",
  "key3": "48miQ82p7vMGZtt1VaRiU5Qe9KVXQ4VCddbTCSQt9XrhPeci2sPdW5xUaZryT66efrJ88nS9DYhXZyRoGdPvPS7R",
  "key4": "5W6pDp8tjmnqSmJhA8Qx1AAFYkDV1y3aYqXrqGVEDJijnr9ywaVuaodofn6ucB2dpn8UAuvDUZvcQd5nYcYavhDm",
  "key5": "38DR5a6TS8PwYJ3LwRNKxS6GvUEc4v3vP6QdxEqKSpaDsWh42UMfJKxgpvgfsgxXX1wYWzdub7CXpVkYh9WmMeVt",
  "key6": "5zSc65waJyshJCq4HNU4w7TGLJQ2Tp5EXs5fCEpSCBRkgs7Cumnc4Asug7JyaTFtXkf8eF96vigqUt7wnStRp2nA",
  "key7": "2X2joWLbMQYQGU1rFqvvJU19WDwkThqAaTE92sNfLzLh6U5XSP5jS6Jfa1fpzrgoFozwqniVpTViHJ3J2F7RSSXu",
  "key8": "5AHESrpA1e7zkmiAfTUrebVyKXzY9HxToK4qmnoejxvnJd9iwMgFw3qQXW7ghX8TzGAAKrA6nbmG3vHYND8hqk5i",
  "key9": "2d5PxK5Rbgihh7dJM2NqxUJqere5Ex8CBKduW2sEUWPRFBFvnQsEfpLm9KhEzK4Wek1Xt17odK66EJHeLqF1n3bf",
  "key10": "5bWaxdtH9GLDga4Rw9d5by5r4BsswDK9qnzmXM8XLQPbpE1hmheXkLELsZnwb7z8UiQLLaGbn1n6zuchcgMuCHni",
  "key11": "28LLh4tmB3KfBFqtRwsibXB3aEeZyRLBTypP4Hk5uxwJKW3mdGjcKtGfQUEyPfL2kscQZaokHayrXuUUKCNi9bWS",
  "key12": "wLchawCiJhewd1HJxwSSVbdh9n2w5MNb72AVyAbH9DEag7avdshVZDKDXVpXH9R6a3FVdKUtoxSRzKBKJPfYP2A",
  "key13": "5kRSu4xZjwapZJJ4jXp7AkR1CjxNt4LC7YPopo9MKAosqWuiZDpEFPC1GDJUJgnPsya4QJgw387XUArCkveSixn",
  "key14": "3AFHALyXuXmMFopqSrpVK3ESfysvRFnsRvwsVmeed5b1r8NDcAkzgYHDz3J6bp9MmoYb2DWtst5oMa4vz3ADGgdi",
  "key15": "2zwdFUitqbamkJ32fvxjY8n1aqFqxcQ49GKp7iu1fX2Ahgrcb23BDnHrx8Btvk9Fuwy27q7tFtD8EMNGR71t6cPV",
  "key16": "2MCCZv1mDKgyFUJJrUAp3AnchpHYytZc3cjx4STC14suGzeyUPSycQYFqYAivqcGDNFcfd2RSojEDiuJN9f8Jstf",
  "key17": "2BPtudcjxbdimBX7dJZjSyFzFQNtNVAAoCaoXfbrM22jEDjJ7yzvH9XNFVyxmnw2eU9V21sJ9Xo8hdnXs4vpNzME",
  "key18": "44xGqRk8mxBdJcs7DLpK2i6qMZFz58XWoVRLrCDfZj1VKdGtceUWizzG3GNVCnMptzparzQkkrtQa4eCYb5dJxgb",
  "key19": "51jtxxAcH7D8tCmAefzY8t58g2rFamRbJWofbTtyTSaxjg9SoCT8MaH2MCLKVQ9dBi23hjM2b6Kepf43C6RGYRAu",
  "key20": "frSwKVxS2d2yUneDhkas2SjdFBefpxXsTtdHnnEiMduVnKhgmzoFeZyaFj4hpjaQEX3z84nFRpd5i7ogR1aKtBF",
  "key21": "3Lmf4gMs6gBTQMpJuwVQi8GWToGrKRSX6J7ALzA2uuVmmzdEJP9yznSfoTVV6MTWPZLJbaUPqW9knCsepKAykNA3",
  "key22": "3dLtW44UyAmgRakxwiJmGK28UE8GuAkoYVU6ZvfvPXZ9MY7MfJmfDRtcL9Rjmkf2xkuVjPqBEzsauutXDF2z3JgS",
  "key23": "4k4dU3TK7m9UHdr6GPXdwi71LooiMSKUq3UHXKYUq6CYfbeYGWdprYKAPk4ikTuigKDWAHGuuGFmBimPC7NniPwW",
  "key24": "ufDecNx2RMTmUDm8Wa92FuZwkwzLQcXWaKgp89X8e6ytiXURdKcWd7csVWWM6kriFa85iaMWkt5ZFoQVLQ1ebti",
  "key25": "2N8uYanBz7KAJ9JyLsCQLERoWswjgDR2spZuFWLUykWDNG7DfeyCgLR2M3J3vd9VkgfLwmed3HKkXiVKmVkEWx2j",
  "key26": "yLtvRBFCEMUyWhZupoKSGXRxnyQnm2GWmtUF3YLrk7zhNkTfRb44RTG8ftokmJ3k6RbLUGtKsWYFCf1tDCbfrog",
  "key27": "4U9ZMNieLEjHwteSvMqnLEpJ7MtQp64Z6s5PjLZZvfTie8xNKrD7b4VroqaoqhakDnr6Fk8R9vDLDkSLZwMERyyu",
  "key28": "2vgmm1FuCLWUjY4T2y2m73a6kAkCjMNTuax8F5u4Y6wf3RWecsxJ1n8d7CU6tbggNX59iaNpuwWHCAJegjVE6yxe",
  "key29": "2jSa23yLN4nG3yq4R4bfmZtdf6U6GpL59PBUCXPEvwMhJwF4GxRynNwB7zLfHLJEiXQaikJHpCiBoqMxenSkgnw2",
  "key30": "39ZtzdHXBwUojDxivQqe5a9CBKVzKrBaJ8kk2pVDyBnohVbyuReLN1Q38QFKyeEDqfotFeTCcuAndgJKDcmmtT7B",
  "key31": "5sAqWYKEFDd6XTbrZusexa96d8fw4nkAapZbPd9CLxn6uvxmMTd9BpSCZ3KpojJkgha2EfB8Pc6LMSH9Uwh4LFb1",
  "key32": "284FUNDtszmvKv5fzDQAJ76ZSeuLmWXKCfRM8gxp3kTpvBBJkDE4irDUoN3nLQJG5wD1du5jgKfeUymGjSi5RGsv",
  "key33": "x9PbEwqZ1C4fH6DUE57MhKKJ4pUe4EqMLGvFq94ZqkyHvv5WrPMvvJmvTHqYy9Z8WaShHNSysDeyw8gJaJeraiv",
  "key34": "pq2og73c6cyx4mzJComHDgXw2pDKiaocqxUARNXFDijwD2oeSBHYEgTh9LwBam8GZKD6bqdRENYNTHTUjA69b5S",
  "key35": "336s61cbdAV5cMPHXBaQ9rWxxcVpujaSDJWeKouVfoBQxooQyqXrYHEEZMX72NgvvsorD3yvNvQ5KFGLDtoHVX6t",
  "key36": "2RBCYtqunPnCE2m2dTBWrkRVFYuWSNKhctbgnNvPFCxGmSpYbZWtuWv2UDEPza3ipM5L5ugGDRmzEAiLES6LRoRA",
  "key37": "eGHUSmLEciTCZi16v1JauNzSdpJggSHi13KCiEeDfEpg6Z8qrE2pU4igErdpgbgeN8TGyH9Q6H6ajtUhfvya2Tw",
  "key38": "2bTQtUrwVr6BVcrFrcmBCLtHc3GamYFAdHfm3GQt5oWdiv3cCChV5PCpUKhZ2SM96A89NaWMh97htqx1mrxkC6Vp"
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
