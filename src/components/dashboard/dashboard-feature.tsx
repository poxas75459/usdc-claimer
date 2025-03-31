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
    "QMwtrhz1vpR67jtS9So1ZyrZRRQGYUGdqF4w9DRdCzfkFz31U4XvcoHQEnaTkgKRkhGj8Y6C2YU6DBUJr5bEwL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SyaG8exC2VF46z25CeTmDMSyf51YzT91HmGSwQqD8URAWn69hcA827R7iwXM29YM2V8n2rbtXgRwUUtx8cMiktf",
  "key1": "3dMCknEMQCHs2fQrr7idApfzCYA4qh5GNw8RPEEMGpv7WSdtZDUWtUHVsWgqm1D8Yc4PVVFLCfSvXH8YXtsRv8Ze",
  "key2": "5GjjveqQACrcEEe7THpcQEo2XUaDhnSNsAgXceaKapvZrkHDJfGbbkca3Ejseotjy76NfpNNSX8gQcM5aYM2YCKR",
  "key3": "2GrrX6HmowjM34SuV9bXv6eXb7Fp7QgtdhKYbrM3Gcc6ZnGvHqTLasBG87cuieke9ehFCmTEr1G87ULQYNhZp2KK",
  "key4": "5V46WUJBFdtC5nhSAkBtqbureCcBr8RAZmFn5aBJEE1RSz1rc56GjLeECSojmUHRB7BY3BTc35hyJHfMm4XRWKSc",
  "key5": "3Y2tJWJpEzGJJGNB8zfm8sFs1wsvC8uvzvcNmqYapCdw3jcTeCbVf7DZiHKc3AZuQhVUjWRMevu94hG5fMVEJ5DJ",
  "key6": "4CaNgN8ZtrgjnnnXqkrkgaPXmcJdxzSueVKv7vVCcj53DQSd4WE5rpJZifsoNfCRHvs8cqzHX5coHyntY8uchtjM",
  "key7": "4Aanxi7iVp4QNHxpJFSk1sStcBqYujAL4SCk7gCC3eDrdwFcFatyf3edmvCsTKMgfQeH8btRZvG13bXdizUjfg7b",
  "key8": "3Whs2Ac3UZm47iS6ChX8AkYRSFCn8KiSvqepMZetEddPwH6qfJK2hH4it1tyHMr613eYfajDG5Uji7Yq3DenoiiF",
  "key9": "5CunutPbBpq9BWk55GySViMjtiS5m5sfuSJwAeZ516d95cQcEtin36RDULpx8eysZHFjfiACRL8wnujPjyNfQeUV",
  "key10": "2ZMq7kvqAiDP95bzJZTP7DMkAhmTB4oJiP2a1zQshDhYAx594JJNAfoeo1aayKBrWyenEKAKBBDPE9q9d2hDExg2",
  "key11": "5FuFoChqKVGnw3bZp3FPhTeDaiYzs93UasYprzAYgFrfVrnQaYaDWVuwmg5LP6ttkKQvQRbtVcZVfQtvoh4KRg9D",
  "key12": "4HnxuGmRadeoANC9LWGs8FSqhpCCxCXoUgoZT6dZP3CTMMmyJhJqvEVz5yyGA9SP3QS1cF5huTiMze5pwuUnn31T",
  "key13": "4Ek376zdJpz2kuwNtXgZYJ755otgPLP4mNntv7GkQArUmDzinjbz4XuHbn4Dxo5zhTSuijoJtFz7KfLD2cRWJ6fc",
  "key14": "3CpjRUBCi8avhAjS8YZBNbBRC92U7jHKpWeg6bCwGtdoF2AqLUMJRLZyt2cbn1pjcTBxDwuD7zACtCXSqY6jvY1t",
  "key15": "5614KCv2moJiJmJa96JjX4AfWvct3xWbc7AJ7pmwQNRdPhR2emPf7pkumpa24bRNk6sPbSPVMvM2GHDC9q5bKrrb",
  "key16": "67doCwbDw7cp3gYbGnXBrdVF5dY9MwHter83889uPYPkXH88aeu98fQ23n2i3N1zHijXZ5nSkACf3fJFT999Fyqs",
  "key17": "x9DMmz4JKYU446vY9ngC9LZVdvuVgWk3SKeNc9ZJDewLeyAxPeeEiMVsqTXsu4N8amCD6tPepA7yN3XN3nhWSGQ",
  "key18": "4KQ4FLyMx1Z8yWhxX3w3JLvEH4VD6W9BiY1wMVMpRHfpEwLrQ9Yx7fCuYrhenZuVSFt8J3cUbXVVHUbfkERDXdnk",
  "key19": "FwWQHHejPVbDQ1Qq1T9LnVc8v5uRdL6vGwcouv6Trp5biwswLsXxAt4b5kqtw8gdniGSbGTz4wy85gqYourftcd",
  "key20": "3WGqnobC6tB1nsTZ2NQ4N79W1YoaPqHUExjytYhJEoHRiKorAZ5WCwDPkSL79L2FbkRagLy2u1BUxZnzNU7uS35i",
  "key21": "5mU6yW23giUzxqmj3SiCVPgvZxnYB2HU7Vnsio5aaCD1Zi6v3ceNjS6NgR2GAwbwFEbWT83MRs7YGf5Xvww2dPzy",
  "key22": "2GXcmKqgv2GzDHigcR96LvmBPao79dhNsF328i4S7VK7zWRKycaVkbTH4JiRnF7SJ47nw9kL17surNGxQJ2G49xq",
  "key23": "5Q6A9uSCifqhBLTH1iFoDx9vXPCmrwJkwGoEUyJMxaa4sHYHBdyzfSHf6r5CXJxX2cf9fLyCd7zEH2Wt1KcG3S7",
  "key24": "2a6PZ6ZeJdhgV4Gysj53XF5J7KdpR9duM7HzMBqJtBan2u9Ez7wiFidw5TwT7WXqmBcGUpDko89wsfJRffJkK6Me",
  "key25": "4u8ofoxzyag8ZTVaMv88QyibkZmPrwWkyRke6yKLkDqY8TJG1hXLwSt7H3F4LXRQcnNy38nBTn2Kb4PkxGfgmftG",
  "key26": "5ybXU77GRa3hjHkhxGqbE4UykEH82Nam4JvzY9PyKcmyZqEZJD4yQz7xDPgd9paVMNh6sMaWE3pTmbun6HUbuoni"
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
