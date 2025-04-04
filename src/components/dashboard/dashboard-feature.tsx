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
    "5FQwWZW1kZzpEXVVewGpA8GdrE6kWRoLZ3D5RHsVPrdbjzzKKmCa2KVSMYkAcnW3EKdKaGb5afahxegVRy6QRkyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KMDrYVucZkvt9zMbsE7JHpLyJwKMbaUhEwHjWw8hGdYjvh9MMUJLRWqjUrQovzhWvDtWVYyDS9rakyk19emq8xJ",
  "key1": "1JbQ3phUe3WD8da56U4geR9wFXba3u6wyQgaPiaWJW5yh9qPxopTd5yqjkHL8v1nTaFwRrZrffiKYoJwdtVsyV4",
  "key2": "4zi8EtSjNCkCuAAbTPZbZHv6qEt8fRRbmKzwwmZ8wd39BmQeuiuqFfqGxTDFW5fV1z1WQUwu8RdmZC5dpgq3tCPx",
  "key3": "4zk2x5qdtYKXABC9wcxyKXNXriQ6qyytmN6kmdacKbSH4zNruxRQejRf2r3gP3sLtw6Ai7gkj5MwyweGyCUxcd2D",
  "key4": "8PdcykL89echgg5nJQrmrata4h32FARpUMs1XXASUrNu14u5qzVpEoPydwV7V1HTekjc2XPNzHFBGRTN7k35SFN",
  "key5": "eng7DscMQXmU7Kk2yYo5EHvacsSa9sTiiWgDovit2zn5V2kzfU9qFSP3a7b1LBMfChMJFAaGjj97rVbMTkEep2K",
  "key6": "DXGiTWfkFYvQFxPZbaRK2uQv8q2PLjm4h4xrmG8nPj9msSzFt4EPTbSLAHSoZkEBPmTxMh2dzoMCCC9N4muCP8C",
  "key7": "sttRFLYcKgqvjo1fnmLdsPUhNifvurZDuWb6Wj8F67FAkFfKgdwPSWu4ihaxjjQtq2eEtDsmayLboVZgqvHh8W4",
  "key8": "eJPZ9fFTWUPhRZjaekDvp64ZS24m8zX7MbZYhgewBs8J65o5Q6M9JRFMFcZcv7rGVJLTjRarS5ot69wKt37q75M",
  "key9": "3gf1SPEetRt8RGs18Nq56347PxJ9DDLihQkUaFFrzWebnKrowjzc8P9XFcGjWJmy6GSjQfKtiwio8BAJyvF4QpRJ",
  "key10": "7w6gtyjNQi7c76PcFiRu8h9AC4qQu2Svb3BWMMmgERDf7MX2iKRu7KTGpJ8Mtdiaw1Ue1612xG7gvBKwMqTQSNs",
  "key11": "MP43y1RehyjWMK5B3DDubkGTii5m1MdfXy3dzgvsoFDmj6niELXdrgaGJgh3RjaLtiLAdidbramZdmYJUNdF2hD",
  "key12": "42dWAsr1821xwPM5gpvHG1D9QcPMYgFonpWXfwmxiynZTpLt8gvS8vZDzqpRnQCSS7uJLiLFUuXbin8QzdbcfXne",
  "key13": "mgha6c9h1Y8gEQNDUJdy3Bmtre8XxgYYsETjC7Brm31jXzki63bE6HMyUUWiBWSNqCnUxH6YWJE2XKzCMEviUoW",
  "key14": "4eFEpy2P85e9tvYL95kQBUr7Qwdd7EThUiWoEatDSYLHxMrV5RVDmXqE2xF8cMg85reVYiwGXE4EijnY19ZPVNk1",
  "key15": "epE7Y1MF7nWe6xCW27Z8CbXz9Zy19qFK71ypqCws14uuoGJCPMhV54vh5WmrquvN9FrPpyNGVFjsMzPjHsrhLQS",
  "key16": "3dRhVahohnSdy8SzmVjUQaaCozCAzbyuk2DNvy1zf8nWDEU6t8P3D3pRNbs4MxWEpXYkML3fCNBwRd5Lzc89vn3C",
  "key17": "3rDDuKdxntpTdn35xgrBG3xzA31FsNWUs4LjM8UB73MYzaMSBx7dJMFdCYoXEE7VgsLJhzxv5SxkmCYGyuyosGjw",
  "key18": "3yNrDHT9N6gmHa27fLmn5Uv7uBmnUhifSeJ7n3Ygcs8UXvy432ur1NKxkNqjmdbNWMuUrkVz7Dor96HXYdNKW1K7",
  "key19": "5mZYVMVKNs4MUrFtgdprM1cDiiDf5bGQUZ8pexbANGqdfyJV1CacVZdPP9hctoSxYF3KUuZWmEHUcV4wsRT7rUqe",
  "key20": "33XXzuMcHrkCsJMRpmrLERUGrq5ZqJXM68Rj2mAWEoPL3rWMvGJ1vb7e4QJ767nv2dqrcFwFqViu1k6JBgoCdpN1",
  "key21": "ppxFZGkpnEWNwcjqJy6bxiHDCdxrZwRKJshwp5xrXhyNgPVtbfZaz1eVC3hgJnHZDEtqdWTd1LbYdtgsqSGgEfd",
  "key22": "324aMsUjKS29YrHA4o4UfhKb2Nji6zbUS2gEkijEsSh3HDcy7oUB3VmfY2ceE4yZmaBJVuE9rL5tU9yG672R5VpS",
  "key23": "7u25McgQNfs8cfzrA2Y6JjXkxb9DmnL4sfxnRoULLvT87JEfxC44kxLao55gSausUu8Ck4Ye9S1yku57XX2HxUg",
  "key24": "3fWuBwvRJBoDJTDnBeNVa84BPPYkgtPr232UXxpVsLTbju5rZN3RNGFAJ2MNTa5NMi8ZzXerXSrWwozaMNxjYJcA",
  "key25": "3E6321VK9TV8sWEBLG6fUXc84Ay9Ae4DewxSC3yDULU7MmUTkvBjzUg7ha44bbmPvtWhTCL1ZufP1ZRNrWDSTj6n",
  "key26": "23EvczJ4C7tGrbTTGy7iysSE5Xxc57ztqKnBuY1EUZsTEKxykxsmWuhuHQ8oKKWco1kACQGjFo8voRDGV2LCThHM",
  "key27": "4ycGhWmEreaNA3KGEwkQ2ua6raS4NP9g4sQPNMVJEPtuJud3WCzmNFeQDNqQoKMRA3tPEMS8VcRr9oLjftNdqQeF",
  "key28": "2yoCkTKnBpikuxDnMRVcfffom5mNVYtjtfuaKgRBwEjz7ftEiTr68qxUwfzw8rcBYpja3uoRsQNE9MmmxNYCbxbT",
  "key29": "5QDatRF6PzjCugrv1uegPvDVk9nbvAeL6NtWcfr3WcTFzjCxpai1ASEt1AjwsFJ1NadAuEhwzHTZNRTHXxRFDJhv",
  "key30": "4ZbzvrWZFDwWgGx81kE2RzgDwyeuQnTxn1ZvQ4xzP9XJwSNSHbbccs6Xoeo5whgRi5nVugaS6D8yS9358KF2o8g6",
  "key31": "TyipJKV7NSZS3te96NUVa7UE2KWHzwGqFxLBr7RpiAnfAaTZFiVN2LMBvSEVVRdHbvNjaPnYUedoEtCw8cv5az7",
  "key32": "hHJU2ZScdKJBgshwgpovRFwv8yWt2HSJLCff9ZZb4Hmdi6iY2edpniSGdrrojqRjNuZXbeFk8VuFALDHHowao6A",
  "key33": "2xAgMsDpp7Lk6B5YHrBsSn9VnGJwH4fkFkXEPf8LFzSbpgV7yGYkqVxdwVQ3pnsqY8YtDJaoayp5dHGm4P6VGCyX",
  "key34": "2e2WSuwMnp1SwS4duNA24piPNd9CQ7Z4yHhFtJbien6NBd5AiqGfoHzFmCYahQSyivXViiCdfvhmVoH4pTTxzEkD",
  "key35": "cf5PoWZYg2xyqrDzvEAh7ugDTYHX2ec573XGNZoBbVeq6rPtm8j5sevudnkkzyPq5tHHbmEPqKQL2tTCwN32eUM",
  "key36": "iKH63Y6bgFawqS4xGPyAScWAUUXT5eCfeZaHXwQpWfRoH7yEp8o5gGZvtvC8SaADKq2RLUuUuUFGW9W7hgmxfZG",
  "key37": "5BeZKqpfqwyaygyzibT1MYQzC2SMbdGbPgygTYKmMR7DfDDwasfaS19r1V1oJnnxzenZdNKBnJFyu8NREDSf3yUJ",
  "key38": "5TMruRbEQDYpx58V1UM2Xuip2ywBacPziMmZyW4NaREhL3TZUzhWtMwQDNsktJ8kN9U4D1UjpFznZQpjqb91qiYM",
  "key39": "3Fi4Pxq93o6GUXXBXYjSfix8Qo4eN4wRfNiKqTR4C2QFfB6gY8siGEX4HatfAkimSuqop7B9DgENySVg9F86CDSW",
  "key40": "3YS3fBHRTRCoDpyJxYajuRhHZ9nfrgo4Wcn1exXft4aUBD7fBBcJ5nbcacHMSbnBXe4aCeDh58G44aHKdtRLhSW",
  "key41": "v3MXpLvAvqDZkF1vJEUSNzM5QsFUfv4HadAxZW1YY8UpTbgy6JvWwLeapwBVB8eE7EPopozwDaXDQJscXcnnfYJ",
  "key42": "4i89rPYVNzjgzwvZn6MiYWC3eaCDgZBV8d6aLSnXpXyNAAxQE4pdDbCgt1JWk6EvAUJr39GQKxTokEg1i3yxrRCw",
  "key43": "4n8fFekgcj6w3pGTFPk8Vyk8DjgPZvD1XUcY6c26YZxetkuDNXmLdCPEGECnmREEF5e8MU8EjUZfLxQafADzW8t2",
  "key44": "2jE7sz6zrj9jzfoNeS4gGXEEyRxHm7ZhPNwEtKZ2vxGAon92trKAZt1hy2ZVFLJbxJ5U449qYxrVmREArnt3vhqv"
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
