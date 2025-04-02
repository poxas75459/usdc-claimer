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
    "KfRcJEULGsQnbMXPqC7vc5xJpxhvN7YzXWbPfShN7mZmwGGesh3Qj7gYWvs26VV9v39dnB9LnRShMUDAHqQjM5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DmHovvauijuFcQ5GnM2bYrAetVCTruvZgZM6ECenESZacn7HdUqip3K1ryRvesNMBmpB8jFof5eeHYX7P1aX6RR",
  "key1": "3QKVACpG9GBVZwc1UVrd3JRWX5pQRy4gL1XzYgtYKVFqpmmDZ1q3CoY97T1JmJjS9BRo73sMx8jG9JyiiBkz58Zx",
  "key2": "3rhVhEAX2GjFu1u5ihosw8exUztJZVkN4BJciSg4Mhynk7yV9NrNfRNr1E2L9YxyhQz2sT8gj4rfTJgP8m7VAVUs",
  "key3": "55TuLXde3jp57nAMwdssR6m89ar5EtSfjNbRpY2AnpyuQZytayaRrAwsAmDctf9AXXcjbZNQmtbhLMRUdVKJ1fmC",
  "key4": "4MExore4pnH1GmAquM8NkTE8e4BrmsZ2ZhUf5g7CozpjcLzazKJCASqcMpN5dzrvwjsdzeYfnK49FSqakZRPod3j",
  "key5": "2j6XfEWtAqsKRjJwLGhUBwTwH1o3yute8QEwba7AsKiS2uL14uxcYTVNuM9jxNmDfzxZQNtMwtPcbYKNh1AxTVon",
  "key6": "5Nwxe13caqbkQmv3rmjiL9y7uohF6sF1tmnFye7z9MG2mNe8qHcExZwtFKRz4HB6GPpXa9567Sdava4ZXn1eArDf",
  "key7": "4qqunSqgzrDZLmv6xV4obuMPLNLo6p5kaSuLVx4Ek4j5LVh1QXuSaq1W6mZRCCXwoYRBDgjGZgqnTLtgNo3HBzaW",
  "key8": "4sNjJACfYhcuaGYz8xzkV7ijHu9ihdrjTa46CsV4ccehRp5vqTBKny3ym5auDB2QZiT9wHdDp6ZAvpySKtG5sACy",
  "key9": "2hVEg92qZ5mDdosCtL6uWa1DKoBdfwp1ivait3it94rit48JBPcZGHUqAsMB1VdGqHAaRsp8yUe6HdZULSoQHKz7",
  "key10": "3iAQnbd762Rv6hj56f3DV616Uxr71iTuuGrULgNo192wKn7hWRwDXpMpP7ifcEWPKAvXYW2siUdkaWUSR4V6E8F5",
  "key11": "iMfLzyATKXv9DHKLva7qy37gQsrzwsTJotGvTYDPF4HweHwsXpLas7NYtKM4gKNM3wyQza5iH4ptqKPNMFoGjof",
  "key12": "3iB5mTKsFdy3XCCdu7SURXpJm8Xv7NnBP9R3Ey6pafZVzmSGTmbLegPwrZwTHn6fQUXFRLwpeboSfLYjKEBMskd2",
  "key13": "2jy48D1Lxfv5H4ga8J6wKAkSGTzhk1jq98jjnv6Ru9fU3DySBseue8MxgQWQ1tjmmbUgeyHpdN9hQF5RRzAVagf8",
  "key14": "2F7voWzyHQLSUGPaxea8mbgNAUzL5wjCqDnPEiStsZcCEVjrnVBoBoNg5AgHNZdcaXm2hf1ALfH1m6G4K95qgj25",
  "key15": "2Sp5GVRCKVg4tT4fwu5DX6BkYjTyDNwyr6132k41gy3tDhpr1T1KyeXUUuXeERMaTucJMpS4gy6jXdfxhczQC4A",
  "key16": "29nyeTh9Xp74QAgQ3jCXEgEEQUVTrGsWnqq8cEtYwGWXyx4uEkj3ttYrMEpKUaKMcPGNzRQtKAN1y8qYE9ogS25M",
  "key17": "2H4pqAKepX7yZ8jzrVcqvRPzXbTJ3deQtM2J9XQBN2pWY6Hbgeuf9HdWSLqiddWYiKHNhptKcVWp3QysJ3uXS74",
  "key18": "axtt3E9xjRspQHYCD2CK6226CUEGWp2edXeDppxen3NTssrfTbwcYbqT2iVgEEJHUrNnQ1pcqSqs4FZKjVq18Vd",
  "key19": "4rzUXdMz4rvRXDrAMrdyDXZRosst7kbegkEQ13YYzKG8So1hYeT1eVnM2VNhhSWvXDnu3pEivTkjMLDPTD1W5Wav",
  "key20": "61PhxwdonRPuJ7P4BWfLCzuwkvE2d7LDFqZjxMuRNt2XYfFXSb2K5tTdSFSCxvbPFC8m5QWtiYU851K8ZiHVfpET",
  "key21": "5JqjxLZMhwXTWxcsvLGv9eJM4vGZiPS1FwqxJaKxUfYLsyaUsXxzDHmwoYRU9H5mLUp5KV2Wx8cdTa962rucQb66",
  "key22": "3JAZkjhm2nvwqJwiFVZhd5PewdWLZFnqVBnf8rBhFb31z1BG1PEAvq7Xs3PZT8HhELonEA148xAnaZ1AQnALwgMW",
  "key23": "5Tb8DjUwsfvn82tmqncpVjPLkx5j25NxGqk4nNWCQsPvTSCJoxJQd7tjNpeiPkFfs6dSjQSPm3jKeUceBSi5n6x8",
  "key24": "5ieH3STUgYPcVsvE6HxrMcwj4REBRXSGK933AxsdqS6zGLQaeVvpK6GQo8ngD9JFAshit8H4vcu7KsxVXCZm9NxD",
  "key25": "2YjwnzEAVVfxejVFZ8EDrukQtfjUAYVbkKNTiu6e7bhvUKCnENxGCZYmn1igSNXKSC3AnpSybeNv1So8g8NCmNRg",
  "key26": "2pKAyrV98wTVX8m1vXcryctGrbYkaaCLpP7XLf9QafgcZLSa7koNqqTA7ZAWjMCwSjZ4ELTosUUcT5JK6N7obKwE",
  "key27": "5DG1vqzJtKinSgdQRoj8yF7qhhVmGCjbCyKP9uaDNbsqw1RvAY6uzUYJbLCzziXj9jdsmg3tgWRKPUXad5H2qn56",
  "key28": "3MgZjrYoE3KAodKPEYwSdjnvTPxdXtigEFfLz7otg3EJ3do1VxKRnwpdb9jyDBwVsgRpKR2ju5rurJKwrm2aB36a",
  "key29": "3ayiWgmXWpj9qVUMCq8tK1CYU2oy1kWCDfnGbJK4L6YmNjYDoD8nFHvS7jsDmng9kZ2Qf3rbwCHEmK18mJpZh1t3",
  "key30": "5VS3yM2V1UEEZva4bLfGCuANbnoMivJ3gCVtQiwwtZNnNQJte5BxvW4t81iCmKZYTqh8j1K4jtijodvLsoEyzxH2",
  "key31": "4A2sQJWumQ91sNBcumNYJwNcxnr3B371NPSbQ7rqVALWbV6SzrhnJAXhr5y5vqDugwNH2kpcnSvJW4rKBAYKqHVQ",
  "key32": "7m94BGpcpsC3uLz7T5zdY8ApZbSRfpcx35iKwVW3udUrzhYSfKV5DNB8H5HBrtRr8KoJ4jbdYXqP53wvS8Bepfq",
  "key33": "28qX2jmuUVfBaDveomxsoBeqiKhRTemUCJEHa3iQW56QUTuQ4rtg81cYPACm72dDBBZm6r3qHyGiaK6DdBhNNvDP"
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
