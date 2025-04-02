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
    "3PggFF41VjANY5xw33FzbiwKAfcXjM3PuUWHZGwLvbPZBhHKQBfFYLHXSSUjfFURaPfqy2zZZcbRTHCgZUgwQQio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tqguXbjnd32F1xd4g1QLd4PHVZA9masBng6Gc7EhgHCCkD8PXXiCuPw3XoyMPJSd3tkwsUUR7q4oVHTHZoTuxAH",
  "key1": "5gJhYFhDVM3z1nMhGqsz6coDCGv4wk2Y3qUTKDhEW84LhmruvtvGLYBzfT8oaSgEDrfS4LnrdEzoGupBEW8SzbYW",
  "key2": "3hk7mtstLBdHGcQQ5Va8pvsz6QJDMVbbeCfhxrRRX1FfQnKaFCm2xNwZfEFmh4v6jJUnSJVkE9B5CN49eNk6YLD5",
  "key3": "3K3Ngx9ZFnB7Vp6CfmdhxLDfEhithrJ4xnX4iaJv3tspsD4r8fbLisiF3MULS9Ve3F7vkwRBXbz5hSsJY737urv",
  "key4": "rp7vXCKn8LMH1hCrhnuzGZ6mzZmQBwCMv4ywDGi3koVVXs8kJQXdfJxbvNsRuqZErEKASxfKwWhRM9WsDQSXu7Q",
  "key5": "3WikeE3ch8rF6y5Tq7ugqVCPhmM3axuRDNvr8GMfuJAjAZ8Rk6fctegv53okjppJTtLspje4S9btBM9CntJ2cRkT",
  "key6": "oEXbQkky2iKVWZmbrVbLhmdvGQJoiVtzA9xYu1WT2bvrx4hjq3iisaz1nzXVyGFXH4KDKb5CgRgwyFcJCMKbHUS",
  "key7": "2rQ5psa5t1d1f4QrRUrLeYWZZNEsKCZHM2XftETYC8fVDQJqFF9xJU4uvnr2gPHbK1k6d1QdXfz4Zh2kCR8qfgGF",
  "key8": "2s63EE6YUYUpAND2WPGYi1eiVmiQprCjoqPk3tKoHvv6b4jwxb13o37xyT1u7w9tYXQqLabBfewPDWvkc6MhGzmy",
  "key9": "4ymJXYcNdGx9utN5KR3wJmonzJFuge8cVFVS21KEnAxgE8SAsXeX6Y7aExc2ef9RD56Yez7VVDX1k1YDjJxUTi2J",
  "key10": "2t4t5d7BjF2qx4ozf7NuU19KH8z5VyGcad75p4RZoiUki6i8uMeqDi6fbLfvfMqaCiTk6wZSnrsARWtZg5DBoSJv",
  "key11": "4rEwin5DFwBDfuTyrTftxvrDBq3X2A7E3McpSbZSgZYD4urEka39wosRTfon5Q31FjkCJPKHvpeY2fqFSFGzNxC2",
  "key12": "tQFPVyp6fCiE5YnfMtp9yGZf3oxN7NdM8y9Cd33vMUr74a2s9cXg28JVSyeVdsovnCihreTmPSHLFsUQGuqcqnM",
  "key13": "62n5i7M1AnyKoZDrzR7CLeLgjdu1wEXx45sPGfzdmv6DwWz4DdoTD2sLLWjQX61xGcaimpyTDrmXbQbkrArxuxQc",
  "key14": "461sfe2AuEQQq2Ys3JqBx7RuYAY8GgQ7zNreYC3owgRmHtTraUyDQhpj1vXEF9WkrQWsWHek9k6qjpcWwMjJwoU1",
  "key15": "45T4HJBTHqihtycWSt8gELnSdZQpHtTwvGv4XM2cBiyVyekptB19ocPwsbFFfSyYj1wU8TcUSjyMFbEwApfutmCq",
  "key16": "3ciz6hxdQP8xfN32fgSAiNZs4Yyg7ox7FVYqCHSmoTBVtDLTjRqfSLhBFQ1vFUaKwakArfvZ6vVMW6GigLSaYrf5",
  "key17": "4G6uFkPcs6bvNEP2rTURmZQH1PA8wZocuZi1x8SsZ1kDhWgj3KWYGh7L6H9f8zTCwBizMCTiQgV8XWiwC2DtSt5U",
  "key18": "4qwZTZin6upC8dWGqkzudnHK86FXfinDmh5butaMuFnwLzPGWeRL8GjXPFiKNH86ztiDVxraamvugJWbjTeTQMSQ",
  "key19": "2dBA3f7kmyx3hLMa6mAfz1LsD44QogEgyb8woS4hcskAQ9Zvs6MGX3NQUtJsBNvcWnX9iK55BEKGp12cTFqC9E1f",
  "key20": "59yWXUebUKtPW6qF1651S8ddgFj2aArQprdZPbUFFWazPsCcYAET286FZRTRTqzYZa5qnCqJVarDhe3wgkRs6bHn",
  "key21": "TfCoXouvGQHuEKkpqk9uxQS5EDjLcTavPjAkcnAmFCfN89VhQocq39dRovG5gUJj7LvK4F37uysKb3ag1mZhgHb",
  "key22": "466r3cUxWf15BbmHR6z8P2rixeauqfuadMvAG38uDekE94X7dCjHTBHv56Mt8T5wKHgtswpbBbJV1ncX5TfEPf7w",
  "key23": "3y8jxXoqRnvR41qa2ZLSJnk5CLcSMxuPiAZMBXPNDVrw5XTkM2bWLZK4FfahkEEPZtpKVVm1SS79cwN7FTTT4VTD",
  "key24": "5SEMUZRU4LPtq2KooKqMpe6s3iUV6noXn6yDHgxxJcS5zcZKd7KS6rXWGgnmBX8PLa1yKqigPpfi1o3SVrtdhGdW",
  "key25": "3912owBX3QBn7BMMdmybwr2zcJ62gdehJiexA6DNSiaH5N1q9xJPo9qEFjYuFwdgWG6t6UezwmJqetLpCS1c9wt9",
  "key26": "3Z9j8HzH3XxiuAtnAmyJsgqdjvHeFzPf46TiEr9H65taa4ipQ5zJyNgy6UJtgjTm7mqoiwDKKCG5fhsX4WaxQnMv",
  "key27": "5sspLbMMCKiR3CBPaDjyM724rrxk1tA98Z8D3RcwcQcrH96MG3sgwsD2zL63LMTUe34FBV4bHNG2R1Gd4YBBn2KG",
  "key28": "5D8GKAoQv4P4V9LgAP6ZkJGg1j4qQ2euSHgTnCS5crF7iTP4kVFUYrEbdXRpdkxEkpMErp89bTCXq1RZP4SW4noQ",
  "key29": "5cHWv28D19xJAnzXrnoNjQWAUX2Z128kaujr6e2M7EJtiUYoWVp1avTzGdFWT3QWN4ChT8a86YJdp7ssvKSbUWXU",
  "key30": "2HjdfHpVJDqbtpK7c6MwAnGoFVgJThhMJfE6HAkdoH1WcSkPvFagcKhhAepoovKTywZkuJ37gCLVyVYSwRVXd7hN",
  "key31": "2yF2B1nfhF4q5CuzDhs99LBuGip1tS8QwmDeFPeaMJ36Yondc6bvQCpUUf5HDenQbVoYMdEB4RHp68CRGchVENce",
  "key32": "4mS3Bm1mpb9ZYkoaNcRPcrBaByS4MuvJgwBYQSeAAj4VumjY831DNgbzHpBodX4K9dvWgePDFVrwfqvQjN14Z1gA",
  "key33": "5Db1YPqLHaruNwutkDuuehPDZXBkRwChaRBvFzDNNtGxe8UdvmhockbM3e6JkcXNYNv5yv4SVqi1D8maRTRY7JLf",
  "key34": "2dxn5nEfDM4CRXDdufqhW9Ln54PqAPaCJ1pppRg41szqPRLWwo6rk8TzE7Ykd1DMA44R1i6fvdUUsd2znhVVhvnh",
  "key35": "3ip56Z8aLYViHZaDmChJeJm6odckPs5bY76GRWo5UnYmVKCaNYuXcY59AP9B3EPwrfkMhWMM6qkX1i7h6ZJn63uG",
  "key36": "2Wss7EVoBhNqVMebFK4RX4NH5uFz4WUNDvkwqwzVVrUst6ggSJZ2sMeTJWDQBmvCTyUimdH2bAHHnn1shpKxdnib",
  "key37": "2ZhnvARZVdAfYYsxPiTJjkzZTjqQChrSozfHccWFg5wtKQpyqczxUyNPfsjrtx3QBq7eXtjW5DLoYPstbwfbCA3c",
  "key38": "57pBvLrKGXFdx1mgCjRkWbhmgRUaxMeNf1SuPKg61PXW3g1DQVJhqxvAc1DnvkA1fA13xxrHuNbU5LQkGv7hbMhq",
  "key39": "MWZwAzpJpin3k3SJE3AXQRjgH5qWvcpFbDHfkgJwxrCWiEKQxkQTynK2dycGWkU2KCNMctkxTHpiELoWidFds2w",
  "key40": "2xTfG9MMs1KnuR1CqCVjgEYQsNhVLj8oqztG2719Br5yTBX7viNjd3kiP3bepHTsx3wKZfpbaCKPTp8gLSGj3xKH",
  "key41": "4NSknTeFsrxet8diQKaDq8Qikgpc2s5teVBrS2CS4wpDp9L6MWNrZwmfXvjqU7NyEm14KSpDEawPomeg1WrZs8eG",
  "key42": "2VuJWq1RFJ2jwpfDKPttceJmtPLgmw6oqgEnX7bAbRWkyMFU3chxDfMjhDF9FbcTQxB1MDLAAaAV8a8wNvMDbET4",
  "key43": "3Nhczi8zu2ptXHG31oz6NVCd4TdHBC7Hdored8FUdhoJy9XXGGe7bLWFUgYN8uUBSid36DKUpQG3sKucECGcA49G",
  "key44": "T85BzmsuncXJ9KRwRdopRQamsNyaaRgG41c2HgHAnffBT49EcbnHrLfT7CJpKvVbfULwCcbw9TNawJhGa5urzXb",
  "key45": "22WQvVQTMGnSc1EZ83RtZTq72CZfGxc3aUJLp6CsPoXUetCUjC137aFuX3qi6bM89Cspvh83bckp1T5h61W9LUbD",
  "key46": "nvHbPPhWYqeodKvcMug4TocXcbijRjwGrXhpE5vm2kvL6N5Lq265Wjg4jZWkTUNcWjLU8WZ74xxGybXzThoyBaY",
  "key47": "ft7rmRpUCYsniXcSbUtHbQ6R6edQ33sBZo4Ts9x9y91H2XwqfZ9D1VzEZVAV3We7F7DRJewKGqYeHE2QM8bruzy",
  "key48": "3D1Pc8DnfbAu4hiUrSXVYaUWCZhmiSpUVNsb8ZQH9f9ksh16PLHMrU268Jgyo2RkgdSDLNpnmUR33acVEdcM7Hzw",
  "key49": "5qjyK7pFib7YHxc74234bmweix2GkD9HfZkU5YZxnBuUidMp7kethQT1PWJfuTEkWiKa4sVo9EbP1rN8Zfks1877"
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
