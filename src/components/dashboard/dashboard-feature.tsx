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
    "2TDPPfpkuL5nBTd6WzWwM8dGjBH2WfoTiAkL3ffb6T31rSego7FgenTQkLC18WganzC42eSWjPJbPurLiJTRYtGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kYnbAq9PgsdaYu9qji2UY79hCNDqA29sZLx85wUQEvA3LLr74imSoA45p1mXo8XpMDbjdkAHPmgcUDuZBqktym1",
  "key1": "2419e6oXDmC3oqzk8k52p92PH7GkRD5cTfdiiLRzTjDnJMJtNUX5CraLX4Xu24oRgAExRj2RikS9Ha5wUQEuwa71",
  "key2": "28atm8CUpoNAEjuFuZvA91eHro5UebdAdZ8k92muvKUryUReZbjiuJUTyBEBG4ni8gtLb46C1vaNQQWTdkxYvKPU",
  "key3": "2QaUyq89m3XE57c5rtx7esswAe1nn8unV6D45p33XQkn6joy3BUkncLHaMd6jaFxXTvZZCGcD7wDQuhaBbAoFi5Z",
  "key4": "21wpP1poDrRrhwy3YsBmtoq6uTUDLnhShQH5u1zUzbXi9mWoBDM2Sd3jhb1HhTEtu9rbejRzLgg24uNieYGHUZXq",
  "key5": "xShiiZHoBLfrCq5kPt3x9pimQtWtooAF5wf1KJ8Ruf3LRT49RUdNw9YRyD5uaC7qzszzsDLf9WJdSNUjEDYFgcn",
  "key6": "3kjMZeEiLCwGUEuXzhoFcSTLKMBxuVztQMG4JsiFaVcxw7ojShseeUiMGnaKMtSfy6FcpBFzaRtVEpXttwQ4ZLbW",
  "key7": "4ZjCHG548ziHxVjQKHtibLePTaAPgg1dXMuykjK44fkb4SDS9qg1F8oYQgsuy3F3fi72q9vxSNWQM7BQwKWPBX6t",
  "key8": "2fyEtus3NUSHU3s6aHHgz4ioXXmDaqrcw1DoKktEwS6CSTVqP4pNTSxsfrMJxjFAsCExmmrsMHyz6v1AwFBvC1sR",
  "key9": "27cxbq7nU9NLhCsEA5ed1PwP1PHYdkJLWZS98XyrfnxTsHWMoudpmiXkPfWa6jrL2ScsiW62UDgjvSM4eAzwvhwk",
  "key10": "3Q1be5TwxHiNYkHT4kgMvmXXNkL3ctc3ri8NSfLo4sdYzKu4Lpa6pCiJirL5HNSYkTxSKuQHK2w7LS9LUzrSCzEu",
  "key11": "44XEieeKugv7WTHwpPVKK2vhMyuwtDB2uGiigJkEeAA9CgE1XRhH3viQn8a8jvB8z8f1Hiu2a7kN2535MGEdCLXa",
  "key12": "5N9rtDCV9wKRd5fvT6jgUGaA1Z26J2RG3pDNFkLLscV7mR5SbGFd7uXqzTxvjM1xUVyfpi1TgwFxGw97bK2MtZDK",
  "key13": "3BjbiESspQxXedZtGvm4eWMreT2uqKhGGw4rJsUpcnmfTcCwAqnq6xENCQrHykyUtR4EaMzaN8pQ4ezyRawPnt6R",
  "key14": "3u81j2VjosFqqiW1CofgBkpAj2ytQmm9YWhcxrGnWCtaQV7PoxNZSU8oixnd1Bo3rNazzhAapLb1nkpyvE7hJV8G",
  "key15": "DJvhEUmaqoT862MxmtWrqizUZhHBiqjqMXAgGuMVBwmcapqG1S6yYxZQtixBWdubQcz5ueSXypg1M3UMLDR1eTp",
  "key16": "34raqQFvA4MAsQKXT5MZ1MJaYtYmkyoEaSeSymXDyHuw8omVkzbwvVigU6mFekGRdGrsYmHRCSb6rn6pm5PJQVNk",
  "key17": "3S7KxuiSTmxMsfMbRziqFCYfCfD1Dm3uJk2Zy1Lts5MNsZdC1g4uySRZ1wPBAqzgQXWz9hq1QmE5TpWmDWQiFTQ5",
  "key18": "41KCqrj3vAvcLD2duNBWhiDP6t47mVBZbt3JRR4q2QAn9opEUZwWGcZZtZ2vBDxhZnzS5RqXAKpsZwQTwp9Uvib7",
  "key19": "5qJcHqSD8VRhBgjSkewkRstyBnVqaoFMNKu96wzvSztAU8tociATkTZv6JdvkcSk1DtiasCxAQuHfHRd8R23NzSo",
  "key20": "2TA8UZQ6RsyPJb35HYc9sLQZieA7Qt2jehtmgZncR3QwtjT1Z1eUt5QS8DJ5GwLLjKk8H8B4Quh9GD9NY2ZS1f7E",
  "key21": "23eLkh1dwuoEirsJNWUNLUkMKZQiyvfCKPtKGu2EjSGT8Fzwbj94nR1BKZvUXhQAu6VvYrCNUq8CZTPgmgk8FgcD",
  "key22": "4WffLjCcxJvH8Fd6KvpH6HbwZkd8gH6nPbqbNqzYLQER1X7mscZ7UHyE8fy9WMyYaKZn6G6bKusncppaPvqY6PVY",
  "key23": "4zyTodSojzRTp1QUrvD27JiWqhL35ifugAvdWepmfyZb3N93hkcZyhfJS7hxjKydUDuuZLYWqQuNtgKZwwrs32RD",
  "key24": "4UFKwGNtY4uTz4EvxyjgYD9Tdjdq4BvPavR8afeFRz93EtCszB2MEcJzeKuMRxWcFaHP9TCURowkJKGDV5cMkfvH",
  "key25": "64CP7WC3kaDuBu9hAiKQ6Jx8Me3mwdhkV7mTkRQ3Dz7nboMrhsuhjjrXP9kigDGEL3V8ct6pUj4vdadftFWb5keQ",
  "key26": "46J1RSgsYWdxwq69aTEXpc5XQDSEhi9XqwDCiW3qoB1pEchgoUB81maqLe16VFXCRRRrNVQLCjxdNhFkWqw1pPoz",
  "key27": "vbyD9M9gckQgZC7r3jbjXgEYngUTcQBJnYXfez7Uv4PHTaMKVXHib3UzGLe5ZXaqE6weCTqxxYTAJHAvy9eQaHY",
  "key28": "2Lj9BqAYMCoRca66wPL11hNCrszdM6yTmncF2XxfmDSunvrStxVk3hvkCmvCBWooxgUqDRoduvRHgdHS951yakPt",
  "key29": "24J4VbefRC4gk6S7aSJLGjM9yASnXcmuqtKHwGLtXhePtHNZL1BeXZXKL3TVB5tpAreE46V8KPvosZXdjY5Vn7Dd",
  "key30": "4pg6CwVPakN2CLyDUHpG4FFuzhsH3oqV3Ghmt8zz7WgCcmREWCfaFdMzV4wad4Mda2JbAw7Loz5oVGHZANXiZ9Tf",
  "key31": "4mD2kzxNZdfS8ho8AUYZvrnR6AtyT3JnfkwNgEjVA2e34F1ddKrjdKLw4aGN5wgtCC83W8ReYump7UrdiQCApknG",
  "key32": "3ZQTxHNF8e2ybtPF9FD3qHGhEjwJwxS44MJqb5kDed2UiSFAVxAM6qnLiJGqqC15x4mStGxxwKGnECCmjtrAsCVz",
  "key33": "2yk1o2gKUMrofVyP2ACoRS9iuMFCAL635JmTzqUCCjcoZkgunQ32JpfRqXvigPGsa8zAf4xyjDWRmbvbCDiKj4te",
  "key34": "2HdX69phtm6iNKVXeHoCrghvoSmX4bzA1FsZeAm1rRnof5HmvLEYK82zEVUyBSBDaX7wqSgZ3HRmQUKLjSENM9tL",
  "key35": "5GGDaqkiprJC4ZPxRVBQ8ZPdXU3umbHivCAQ4uuWkaaRxwbWL2sh9oNfKvthQPrUNDktzMZvRXnqdPFFEUTuZQQe",
  "key36": "5UB5Y18HcuhwFu31ECnxCsvhpd3cgxUMMKbpkoDJZJjtypLEWCB5DFaVJpmNhL5nwTDaDf1RAboA25dTbmyH1D7g",
  "key37": "4cQFPiw9JPRueNWWGMnXD5c9bMeeAxUBuLuuvWNMwTrAyozEw9wyuSLwxzXC8cv3ikLsYN8ADNsv9pTxLkaLSYhC",
  "key38": "66YENnjMc2o3TxAyEhQBMNsdoB2nuSc6eF5eQcQYQ7UQcZUDhQK62woSYBdneRBoZ65zKtgAH4r1Mu2pjrZdYqVP",
  "key39": "32X9YqkcZD4TCXbScujzhrmwG4JBqiFnKFEd1xhAYXQY4wHyqGHcuBMWB29dCa6NYRcGmjYUEiDFELxdZ2Uuvmxk",
  "key40": "5Vmz5N8fBMBxsChAsgwBh24oXXUJLBRvhPbmurqL5mioiHJdLHD8TxebmVtxq8fMFbPonLKZaZJihyd9E58be3TC",
  "key41": "39erb4PdTvQ5r9B2Zmjju5apKMn43EtiAkb5532Z1Ab4yUB3a792gbGC3iXqYi6XJ9ebxWf3syELFkoexyokUvoe",
  "key42": "oskcgeWDMKBELMCHREKfgYxjL1zjj3YwNGJSE4ESzYnMcaJhjZ29E4WnR9nvtQS4Hg8fgEV3wgvQjVpKXy4ncDq",
  "key43": "4tVq4j3widnqmpE2DXekkiETBHL5k1gwtdBFGgzyRBpVpLoWJSs1No3QC42TENLvqfg6gW9qDeJSd8wc7XESuKr2",
  "key44": "41ycG5YXXmTd9ExNVpbbdyVZLPUzWKEAdegHVPCGPY5qfB2ypRSqjDX4LXresKvypMGbBJTregqgujQxXMQz18yz",
  "key45": "5nEkDHyUbFRqHuMjsyFSiX4WhmXizChb9YRJFoUY4P9QdqmaUa4HF1LFm7Vagy8iBYq1L4iztzsnM9eCYRZaEM3F"
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
