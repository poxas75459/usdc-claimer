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
    "5kDoVzo18SLpHvjZkAprib8D94LAs7ktgBcAnXonFDV2f3ZfPVn3hHQk6foifkVRdiREvpNfLjKcAP42QxpW9Fgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ngFHyPnV3Eifc5xUbCtzD44cUELTrTXF9VDQTbqxVVcQytbTwSWr9N3E5SMAAEEhzpDgnBYi5y8kxTuiNLGW8j",
  "key1": "2y2K7LeLuVobpJBs4DCV8aEg4ZfD98QnVUCvktFg6acM7yZUoou6cU7XPybJzA7pEEtHATgRyujsvKgoqqYyootj",
  "key2": "26QXH9SMF1k8tMqcRYUjYjYjkW1LZbREB7B1iBAwH5VzJW2Ztv7aVxKgMHjnK1EwvNiPsTVCZDzzyFopQJq3GAU7",
  "key3": "5CJaF7JWo6kwKynRL9CGG1LEXbiYtMzoChNbgoojqGBmae43kso5TU88AKnpYJ2v2th8pCyE3Le2a7hMCTr1JhDP",
  "key4": "14n4t5UvLdbtUrW37JUGy4gGXPEzj3Rmc8N4DUJY4Q3GgARUm5NTLYofq1NTZ1LKqMdjtnpdUbNG4jkeSJyy3sK",
  "key5": "4Xd6ydFu5SqAzHJYWgcZgeXNmceyULswpekHjxbRewVdc62JNawF38gfjFp5j9SwQ66rZoZGYGxm6mXvhjZJAdZo",
  "key6": "uwE1kUi9bXgPjcu9Tgtx4fQ6QQJH2n2rkN64TaYwQxeHYM8ELhR2quiFjnfgcTBDUG3Mo4wU6jgPR8aLaEbftHW",
  "key7": "2ik2GVLHhggUtaqs13QnjYHki1BiCPTYFn6ULjjRvWBAnNRU5v7BTgodm3AdLgdoThS7EphmCX9BWdTihKWjqjpE",
  "key8": "2cFcBTZuMa4P68VURBiHpxURp8X68QdPuenGu5RYF3viByHFhjKtTUyEn2zhwkXEygwXv3pJu1gk1pJR27G44yxU",
  "key9": "2iyRyMehnuEtptrhpnrsLioXwHrXV4RuPqde5TGJRBcP4UEv9xdAvqdjxZ4boFcKvRBMiWaNqVcusETaz2e6J4KN",
  "key10": "2mMAWqYp2qvwu4F5vnFxCtiWTHDXNpVkqs59S4NPMvTGCHBmNm4qKNZwwDoRfCScfroUEt1eRh8THT1yXupz4WYx",
  "key11": "5FVhykKKDekUpJv4Z7WPv2PMZCQGC4352iNUpAjdAYu2j2YDuUtZosk4P1YuUhdQuc38VTydLH74G9EFLEVaa81i",
  "key12": "T27niaaa4N9MKutHYH8TJEe8cP3iu8o9gAuXi4DUbvBjBzfMmW5WYEJWT9DW47DQHxUqHbX7V5buXRVaQ9dayk2",
  "key13": "Bb6Kaw3CNGaZx3ctmgqMyrTSEQekYrbwHRpE1sN7UfnHRufEpX2p2c43UiGJTbLXnZ84dJShcMDj3ouBZnj8Cea",
  "key14": "4n2Spce9L9vQZmUNgDt5u86VfBU3TiEJJctWfK9NYsPf6tLrDsXinfw7K9QiyaoMkCJs9CoWbyQJtPKnTnoa7JjM",
  "key15": "2fJQCmT2nNtn2qnmrebNT8Gj2MfHejaU3AjdiJzEMwFKAysM6xTmxX24WbGdkvQsTJtMHhrS7Jvr2Rwr9dEWDtxx",
  "key16": "5TinK5uvAVQacKXeKCS7VH6qUEmfY5iECXCdFctmtoTkNocR42pdDY8BTb372Lju1r4k7EdCZi8C8yoEm3dg9ieH",
  "key17": "3VZpMdZR17XYNeips9GX1FmYvvSwXixVku4ajYehzTWWToefK2bpCDg3YUfaWtXdnkWbvugxLU3MmPCa3j4DJ7eF",
  "key18": "4kCbaavKdtbsT5bA51d1EKzxJReKy2xksRGCehxFK6EJy1Lz1HoaJTB7cEEDvw9kiiwzKkYvyjc19sJz5GYd8Sxr",
  "key19": "5eB42YGaQt6hYhk4DoXJdvsitLK5RaGYcQZpg3v92BtBkiSfEMLx1asoznLG5c3khgn8C5YMxWUBMRprGyTSB3L4",
  "key20": "tdFHbHPbnMVXzH61tRqy6XpWje7P4i3UZvdMGMs82o2h3b6dJUhQ9EwSWWmqW9c5ypkhjbBZUDh3ip136bcaEuV",
  "key21": "5KPuy5sXxGZe3K8oJ8PNARSyeEwpKCukEjTwT67KkaJJR4SbKVmLFcfaXwbnR9fJQHACrjmUhH2SwN75QFMqduCq",
  "key22": "3MccgcSqSi3sSuedbSRefHCqt5oCajY7tZuiN53nketpFdMa3vYrDSKyRE9yHUg23DFk8wjDvPCCGX18wSBeSpJJ",
  "key23": "2spbjZRJGt7UbiNnnTjnXqZLDBLw4wCKvxiCLiqKS25MV6LCcfQucQEPTi87ZzHeWfdxRutcmvWHsDgPjbVYKmHR",
  "key24": "2FR3NGmvKLLgng9DFRucMAgpKoL2k11Q1uEpDxyQGyj6jV4cpRB1UBMnpTuf61UMJt5VPTnMahHiFnjskuC8hNLD",
  "key25": "2Y84zLFn6utRP3UuTWvxnnsBLfYEursQ2MdjaiJs44zMB4kRihh5PoKTaSL9MKDUpnfkMYohm1HhCfi5527p9tag",
  "key26": "4MVfsJ4YQ6niTxP3xaFcUx4ncZJdND8QKbExz1nZ7ZQ4VoqbzprabpBjWvcbNkgjbH4mr7jg9vHTBs7kcCrRQToo",
  "key27": "dfk6USkEhYiTYj2EXuwA6pD1jqpnKsh9BsefjdiG6rFC1dkTSFFHSPEAcsWprP4c62j5ZbN7Gzew8sHVSEF7Nvd",
  "key28": "5WDyEfPyWmjArtzaszidjynY8nZPU44CGWe8B5zmgn6NrHnX7fdtrupvGpzP72gTttDtgoQ41RrJLx4MtQGdfbCe",
  "key29": "fFeeXApqpqBjK614S53k1gspKvrdLhEAMxbytRP3XtSrrwVohoWpwXxn68gFtGN5Yfbq7XFQYHAudchMdNybBUG",
  "key30": "2FmVt55zJGH4pUspuc53HFXY5zcfXNzgMsgg4MDKvjWLUe892RAavnxqf4xLezU8cSdXetAcVBbZdXhj42S2XTr3",
  "key31": "3un5UnFbxMJx29Ek5Zh4MewLJKiZ1VWHQ2pAQUW5CfxJsAS8mmXu8rM2QQXiA6YaxZGjaHv3ZP7Ly2iBGzViZfM",
  "key32": "YctyNfrNKtt2MjFfmqApPcXty2LqBY2qgzw7oDWnGTHM7ur39yMH7yH15DTxKTXy7UvgDz8GdAEeFBQRdm63hg8",
  "key33": "3W7yNRR2MrFZZpjiMDYHpKB5Q9L2rQVq8HFBcZHBrQhqiVNYjs69dxmRnvgdLwWKpA4kPaPPDoTZsjw4nspPMRtQ",
  "key34": "3SU36WpFyykUC3kKmjAVVjFgSkoZSU9AMFuF3C1hBqxjt9r6LJG4xC18r33qoz9Anae5YxtCUczMXMqJtK6ejvvw",
  "key35": "JRgrPuL2L3uWEvtV39bzGVZkZYfFcMxLhKiLjnyLBnZegTusy7tpxAP2xeKeBM2VuRDCrA4Vkdq3omSeiLRp4Se",
  "key36": "CohebrBCWvcRZj6U6bEGRsAx7HNqH5t88G7kBT4QaB6TCoYSfRXYqvhEYrYzAYHwPGaTtAgBdoAY2eFbZSYMDL1",
  "key37": "5hRzhFLNAXEeTs8WAyyhSrq3Vh2nVDSJLmZkN6YCBWRg1MC4PJtXQ7JsBcih358xf4BcFTQmMGXMEZ4Zx9j7jA7",
  "key38": "4hpupfWrstKvJ2EGrjog2uN4UjGxtB84tY6k5VjgR3AQ4GyHhDcsGeknrE8GfnGuZitkzjuUN4buzrzJdNtCCAUy",
  "key39": "39rReZ7pgZ1pfAaeVhptt9Pg1xwtXDSeaoztsXtkUCiRapkGqrYJS24wKkPq2vkFoW2P3dGzYmeVA2vE7pdS7oDn",
  "key40": "4prS6Cw4bGmTqozQqGgRXSVmHZREENFzovr3PpmCt92BbQg8VmLzQB8o8ZSn5VebJHhgG8wJm68Rkj57rkaEYz4C",
  "key41": "2sSbaiTKMLE9vUKp9nbeMgZLJSbRMSgkmhprQKiyFa4DTp3Xs9ubU8NA97QMuZb9hjoWfMEqomcRgG2gjCTd3kWN",
  "key42": "37cFkxkNq3PjGDGnUCtZEsTD9WyNJ7NtizfWKdBBN9P8uCEkykxYqNCZiWRWHj25VnCJnhDLmnzbocyXmgauCA6J",
  "key43": "4xJy27NmdfPcZVUDqDK1qoyhUtEM9zNXQpiZbTrJSVLMFhgvcRSgPS1QxdM5yScATHnYzwPFUWeWuYjTx5P1bPBG",
  "key44": "3gLSE9BQrTpKpKJSbkMyf8bttWrH3wM4x5TN45cVef7VRcbpgiiCiQoENya2gUueCDMTyaDumt7R6Uy9BNvbWbgm",
  "key45": "5S9fLjXhmKzCdbxZWi4Vq6qt46eaQDX5z48cPhUekxWccd3hWBFH8UPCi8QLsKoRzM6AhfyqqMo7AYUHxQBhgthC",
  "key46": "2tHwRLZCb1aX9cVLQL2wTddQNEskyB86iYFX86NT4egCywap4RZyNHLFBuV4Xdakg6wcpJkN6QdvUjaLVy7aPW6q",
  "key47": "y9eqqviCndArjvR7ifQBCM4cVoG4bT7FrAB42vxgBesLQBrSyeJ8U7fk2HtjwR5vbbYniiQoHLu4K5mhdA7uFwK",
  "key48": "27FZxwmMe6YLwhhEa4x8PRCk771zh7X1quwKzDQUgM3bAKdrTVYB7tHU9YjxgJbjHjMoxR2L5ek1fd2SMCGwFB3q"
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
