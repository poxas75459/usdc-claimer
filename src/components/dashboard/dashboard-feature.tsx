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
    "3bkzwmuTk2DeKwZsJzTW9ZTFhHuKBFzhPUfdPnADK2KBDjxH1PeVBVpKCVY4JLK5s6WnQWpEYmrywiR3ytGjZcy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KpKYCUPBzzY3mKhseVi3Ceu92bUnztwTfHkDpv1pFi3zx9mYvr3TGmNMvDmuJnhJs3jcka52sygkBbgKa1uppWn",
  "key1": "48kZnWu4iSEhn33RBbjUqaRTMrAr6hcpSJ3jAhzcRthz2i81qDdgyQqf999UchDcNpvNY8eAwVKRsW3dU4weNVU3",
  "key2": "5nQZYNcdStGiyDhbxHogjNAEUSTNp8yEgdA4r72krCu2bMgNSMo4FzfqTX3Kv2qoSvLtRhmkEVsXv7S39X2Cq7Qr",
  "key3": "2x4o7ifqfs1bFRK4StHg1BqExakHPJ7rsn58bg6sXeMG8xvorAevgSDB9aENt5KbBmSJHbCZ1LxZ2jyZUhPwdCce",
  "key4": "JKbhBmtTKBXw17qZrpFHY6uWUDvh1iGBZJGytUk6hLtNAdc4CEgcmuKpAhBjs8JMLfonM8YMv4Ji7KQuqfNMAbN",
  "key5": "rNKm2omnyJywmNzLdNwata8GsXMsQHsy3gpiFy8Z3uPnf1c52HzKq7a6YpRD2abnFn9ZbtWnjMuuEtNwhFqmd2v",
  "key6": "54z3aPa9zEe5UP8g1ANYKA8gxcayrWHQ3efaXBgmscb5hzj9MBaHCa8oZ6xS9fvvLAVtSKqDQ1bzVJ82AS5aWHTq",
  "key7": "7Pzv9eePbCDK8UaVym34mY7BK4PvTB67abo3uRHe9TEJ1fL9fAMPCMi3cnZixzWUK8WCLpDCcyE6i1eZt8dvHmN",
  "key8": "2md6XZ7BaaBH6qTKToe46qFVKCYZgeTRf3jUVsV5xV7AEZDa2EodFeqKfUdbGTpcEkyWoycwADddx15gbn59jCmc",
  "key9": "9gW3mDbvu4nCBvR7M2bntGN9MQzCKMo8VNLwGTsew2dYPa2uBhsGcgdMAUHo6AWStTgJaR3drUyo1YovMS65F4c",
  "key10": "XropxbfAGvSFyWRDFpG5mNdUasT7R3ffGXTfsCz35vRNY6TbVC8GvxXZ6Ci8xLg7CBWe75wX5xH3Nw2PdxagnWs",
  "key11": "3FFt5VpYFCjvM9F5KqWfyXkKBcuoFvZtYMGiT7Kzc2UdEjq9NjoATWZe7zFVAWpPYMv9Eaz3f1Y8YnwFi2PBqP9Z",
  "key12": "55d1chdEwMMh2GfqKToKpcD6aCRoxMWiBNHzWyzQYcPx69df8Hquboz9P2ep1vVhfmHbdYasWpa38cXBj1N5u4uP",
  "key13": "jC37jzoQ62g4YzBG6bgZVcLPLLiKhFYBmq9cgB9WNvcuxHPXpCUnwK6QULe5rjWvewEniJqeBuVPuD9iugQtw6C",
  "key14": "ZDaD1iZV51jUbYGkUp4EQiS3HVsXSw93ewW5biQhKxgBay5ibxVtcLuDo6CsCZV95AYccLLwTTGJETqFfdc8Yvq",
  "key15": "VqyGwdPdXC8DXvkUsBAzoJRbFqVnWm1LSmQjZDZVXAE8UmZ4TrrnYgrLmG7fHd6WdxLZRc1qADMBLiYD4CmxkGg",
  "key16": "3UfpkdsVt4zvSraaMYU9RsWerjED8MXdUdyybVFpMpCGdt1Fk4K4kbtCETV2tr3Fy3SWweefZD5p3bXgmwmy3wcA",
  "key17": "5ModTx1A3rXCGpAw4UnnxhGu8DFMddvY9wS87r6vAc2LTnEdwwxVA9piWdxPzwc3op8K7mYA65P7re6K3haRMeGY",
  "key18": "2EshN48yQU4SJ64H2zgscmCvw7CHz4q9QEPfAQqAyDj5hSwQnjNXRDRdw2eUcWbnzAwa8GVxA4gTiRV6BP4k3L5Q",
  "key19": "2QpLL1kqFUqw1gNiyp13uAeAMN7QmYQKbsgxyEecQWtE3ikSbZUwPV3owopD9AUiFURk3b8uvcpq3eF2JtjiGdWY",
  "key20": "37WQkiNL6q5tzexjkyeVamjGCd2yseS9riosJ4xzGV4YDVTjP9gunEYSn9c5fgfMU61zMHHQWEDqAAAuVAyMDRYG",
  "key21": "3Brm4LQfhVqw92T5VznvEbh57JvG9k2Cx6n27a3CQhz3yMh98VBWiSyTxVx4fgPuZKtwH5zRBpdHNKADtJ77xYpj",
  "key22": "4pai7DR6nFAyXXFhPAz3KphyoEjQE2J4Vgo7Nhn8xAyjmmjRkoyW5Xh4DK2uV8SK3VDRE4JHEgmnuXWrxXtaJa24",
  "key23": "4N8VvgiExGb3ddB6BBg64knajigsNxwfR3QEF3Eto1KYCKS3TYprvoDhdgr2KcGU2VNJLVLmL8CLLwh7dS85koXs",
  "key24": "4bo524uM77kueBZbJL7y7N7QSaEzJJkMDr53DTy63c5ZQFUmyJB6934o8g616wUJj9ky35dsA72StkvH9sDhU4xF",
  "key25": "GTE5fZDvS7U1Ff7PXJVwexBaBKGBGX69QsePzjEbYv2BTE9XNpnzEF13hCCgF8SXNoBa4TYgjq5g4q2qRpF8wpA",
  "key26": "Y7P8T5d9kSQD6Suhezj3shSrnVRQut2iDzi4pFQeuDy3B2cJdZAiUWejvadoYGxUaCH6Dp4EbrWaQ7r6Zw2xvwU",
  "key27": "48DTy6oK7yrznLu8QsiGZ9KiARfHoyD76pJ6WZVvMJp9YaxzcTKmyQNR5v7R1Uc6pkDCiVkyrzKywVp4QHZVMVgi",
  "key28": "y6PxwDAmDGAJBdsDY8ak6EEdV6AT4B448Qh27i1r7R2pRA3MGPMuoJyikzspw65NdHYkyd1yR91fMbpm12uPBu5",
  "key29": "5hQorxsNeQUkqMACWWAqVpXRnHHZk8Zd3cMyJFzowxUqc8SqXEVGc8Nntv1gKkB2a6215i9fUJWxfadhTYfP6Ucq",
  "key30": "2m3AmaGc3UwG21rsVmpFB1hYh93TPPEh6uqTZp7uNF4nfuJv66PGv9vBc6o9oJohUWdie48PpSnGpwbR3FTueKMs",
  "key31": "52p6NG59TJgwb6xy6WBVjqbHmFJWF1mnUY1rgDxsb2Yvfn8J8eFqPoPR6r4s744Nv8QpMErkF3a5HSaK5ePD4EH5",
  "key32": "JNE5J7jigvdk4BDyv5Uce5MW9TfRRGQ31UicruXpc2ZtRPreXr9UzdTxzLtLvJoTrKRWGUhXcKSZKVdFsBneDmT",
  "key33": "4a7Wo2eTHcUwEw72tQ5S9YtUwKbaKhwPTRfrjJKoKP6bUXgLoBpppGG1LipVxTbCL2nwtEQv6j24Uf7TQqh9X9Re",
  "key34": "5mywy6V7A28sgZ2YC5ENjHQiDUz2yq1agmpeXxD2EkGgCxrcqfQkHNZoGGgy2L1Cmyc6M3vrsavUfroXJRd6bqWQ",
  "key35": "22fnJR1ez9YFSvZvsog2aCi33B6enBPXgspBEgvhuGhAgVwuiV1oKXGCJWgHJQfDG55RP2DrJtpMdU4UPaAPrpeE",
  "key36": "5PzfS6y9UZYWbrs5YpB6xr7sKHbDhYu8ePpSWw6QhqVYdaHr4ieqcmTdeirJzNEEqqkWamUi7bVT7GErcYrp7RuY",
  "key37": "3RXv4RBH5ThUs7akp4er6MRQeXCZqQo1QiNgR28Lu2Vp5MogfkmjF24tgvPVabGVrcHN1Nj7cKkFsKtFhZh342vK",
  "key38": "htfw1WFJBcmSbf5Ze4VmyyNZZ4x8Wn2s5NuAaANZe4rXqHTN6gFLxaL9Q71F8FTao58kTwFHeSjknscecU4ZUsp",
  "key39": "5Jf1u7HUKFHEznbCw8SCk3ARnFxH7s9Cun2Q4EzJGouztGFhMwC5J8gvNMyNLqYuq3PRJxkc7os1avtf5rpT34GW",
  "key40": "3xeHsDsNLkhNbKoE9BBvCFugDmhQsrVHniadd5HprPhEoWnKRHHK6hXVwc6aSD2LGPYL2USytP7CqexhY5bPxvkX",
  "key41": "5biK5qw4bczE1YMnZfvBJ9ESNLmQyGE5zbJPJyQoQbfvbkP9H6AoYRWbEr9cRHe5zqxBDyw7ouKVAfL64XFFrKEK",
  "key42": "66CjA56Lyg6Pw3NyAQiJzVAAYcA9qyGJGxdsxHad8kDpLinLbA4dgXwaB5KgBXF4wLrzSQpB8NoPYkpeXnN34sxw",
  "key43": "2mx6o6qXgVjKKQHEFPafd6NbTKD8gc6ZiNnrrzExagdvbUgpiFkA5C274t5S7QM27TSCMHbWX2ciiJf8cUHRLuaE",
  "key44": "2ixu1v6LB5J2f4odMrwT5k6icgg6FFfvPo2zk8sW5GJea4FDSfp6hXqGAq2Bj1nJdafM8YkHT2GUKM89vXTzZY6W",
  "key45": "vMqrnQv1udoR9cKU3mh4kA8CXf9q5HsSz15zegwzJSk8S7Jcb9sWmtXwtauzBjWSV4H9xGmXJNLwHYw5wVZXLyK",
  "key46": "3ERnuxsZeX6Aogp7huunMZgaCrgfQtkUxyDtoDyYqos4Vd1FpYuCuzqSZKLjjqhwjHe6mbheCK2PnZT9LqK1xKes"
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
