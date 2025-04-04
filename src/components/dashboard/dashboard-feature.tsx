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
    "2h7LdWCwKZfAWf93p1zqXkAoeNNFDSyXfruRFZZtuH4zhuA3pBKXmfzJKnsdiR4itKtzY4o7rbKShtEV5PB99UyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VLQr4KoPjDgCtQdNabBdSbcaM7bJ1cB4hgc51qMKtohvq2wbj7qyNXxNxf2kG3W9Pd8bFwCNyG6tTQaWMfDjdJx",
  "key1": "gvNYSqj2NHGeFES6nAUpd6guujQqo4DmkRMHPLM6fQB4gd66Xw5DExzc9ggPvj6ckoB9REkTFLuGFHDgW5uZhSn",
  "key2": "33HHmcBmncjbx5oVZKVazy7Vr4AgLeXnHPpaBVvX6ZM8RhPoSepgXhVh2iBELVX5M9mTarDznr2vPithKmK8TpR",
  "key3": "54VS8s962jC79YsLJGEzUpvHCQmHaSuwAzfuD43S782Vc9Des3XTU4LwvLjfghwEvWULrcNZV2tZYNwkrcP7FhdF",
  "key4": "47ESf6txRRw7Z8S8mbhL2rFBraoZwVQacEQDVdyAsxWoWAtMHQmcvcerRyVCfsWYodkzyPyUqwGKvsFedbbEMP5U",
  "key5": "Y7ZkQKD4QtXmf9qSowctzHqEx4c9B95m4WGqazsUFWe9dr3f3dzrQNLmEuhDNvBxRDZix9Q4qkMXQehBzhvSnEH",
  "key6": "3EqBgLmfXasgyqsuPaN9gMPUuDWSQZFzbsBwvEwkfTAZ3ZoMDcK8jNuCSe6UGMsB6ZGA3wqf9CzAQj2Zd8sNL4E8",
  "key7": "4KZ1Hf8agcwsGarqt95XzULeaJTwdUB9YK8QHmvE5io6c1xJCbZtxNcZ5LuZtGV5wGxDMaA2zQFV568KSBiMucZu",
  "key8": "5fHmZSTkfthguvH6GVb35RkeL9qP6MC7VSt2ZCNHP7dKJXTssJ6A1KGCsdqB9VrigsySMVn3GDZLWiqg3UcftBSh",
  "key9": "2MfAif6j1BGkN2TNALypeBHeo5uFJ7kSUZdwGPCciSRwWZjuqHP6cuDPgNUnc26XVxiqHQVQnH1amnifJMFvwekc",
  "key10": "51gLmgSj4jgroZDdH12rS6tgxXr3P6XP3KuE8rEYhwRAKjftpVmx5LGB8BM6fB2NtCvnEWEaCb8qaFoZvq5sE9HT",
  "key11": "5EBZm3j5qVQZ4RHoAsEongUCxYMChkDbXj9GaBU5R38JEZ4XPVjg7KisyDWJxDNPzbSo3gdSC368TLRZqt1VDpa5",
  "key12": "5CqUVr1c96uKFgzUhAz5WHiqswxGGGnwmmjUBM3agE2GEp5Tzzj6uEN8KERxY9zoiPfjP4dFTmVZk1Bs2nVhgWqR",
  "key13": "4aHKDgstckTBy9dEV2WabdwBWuLruGwmcuowGH65o351ZXsDpdaicazXwJVGMpRziAa7abf7JW1ijtQm9H13gYLF",
  "key14": "4FhXugntd46tr8GXem2UWXV7tWm649NVXWQXmLbkkEcEWDb4x7FsV6mtWfYh6HDnCfrcFsfnr4USp4ybXe3Jhncj",
  "key15": "2E1rY5UjHSVL5wwBsj63Ekxp1wzFbEA94myGX16hS8pnMVWdDHoYPPd19LUEtwZMarvDyoQ78ScoQtRUUV1x1fGH",
  "key16": "4xnPEHSZavqDM1BnE4ueeDw6SFhFA6Mh6vyE7Q4WYTRCSvMQYkdgTiEhNVDd9WUx1LLXEDfVF3v426KHuNtdgcyQ",
  "key17": "2fdyG7Lkfi9Miffo63cDB1DJAi1FMBkvv1sYUhVFJ4h9cKDSo4gUWNWzHqS3uWUacVRyPh34UYzZVrFFazaC8B9a",
  "key18": "L5hg644XnAbndGyk2VMF1GwTNpfhbVyhBa86vLKWe6Y2ajjrEvh6KzeHDuLFLs5ndadQtjFZ2Vm8k2CYxQScPnk",
  "key19": "5uUYTeHNUYgyAdgYeUMeW5MvsHkVFwQUUVdGbYS3D7YEANR1jHEAxUwjuePLBt6s9YKTpTfLoKfh3ccs31igqemy",
  "key20": "4xmHcLcoRCSBqCi5QBBSMMeXZYQ35q9BQxhZGMcaWsJa7UYARr3HaG5YMro6fiC6n1qcZhrykUz5jkLaLppSFqpm",
  "key21": "3JhNdXezbwgBjNN8ciSPafuPv7HYbmgNyHGzaEDVYZjDYTyuEC5fgEupoQYmT39QYKsqebnFvxqLBSPqRHGXWK6x",
  "key22": "Zizvzm8uRUXn7bKrupPhGBUinyvvbxQvPFNg7j5JVEHY5UVqicKqsEERw6LWBV7sLZzRqo5A3FbrcHMBKCxa1Ct",
  "key23": "2ZayX2G3RdC39qmMV7vh4RQx6NdpKTGEtNhf1gcJwfwsQVLLxVUA8iDcbau11PpbNAQM8v8nfANzaCYNvSk17tZk",
  "key24": "5e5bWN23EWnpTgzWRoKNBAX6ejyc3w5EFPip4QvYoLFoZeULF54nR9BQCeLHRZFfLacpfMCESSBB9U92ECvM91X6",
  "key25": "5xLfYj85nkHHwyr4GhEcPLd1dbdv8zJXzuJmnCPwn6aF7Fw5BVCf15Q4unnXuCxmMrDg6vm7WKoBFeuU4mvEzxEt",
  "key26": "5UPuBFfvvtBeFpm44Z74jZNX6uj8dV6Gsnu8Skdo13ch9orzzjFVGhvpVtgBK8V2gaW9nWWKfi3oVkqaDiWYzz2e",
  "key27": "4GtHNVw5yyhz7X3yA7Ys2ndwUYpxwx8AMcLtDWriVBJBGoaeM2kAa4qVizh8A7pLkzuo1qfawRtu9oSKqJco1y9v"
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
