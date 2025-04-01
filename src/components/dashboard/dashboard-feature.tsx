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
    "2SFtsHdP9DPp5wBCxKPisGCnhPMmXQD6rn15fVkPtVLfeUHvSRUkn3QoRpZCfUc8mTLux7DFxhELygEvL7NBbrQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rvo26cpRcR7qUT25ku7xYAuY1Hgp14evRNoSYLXLD5JME3KKtkGsMwRaf1iamrtFEUBYW4cRNCkedqt1pi9L6F2",
  "key1": "3zNZPWcdy6c13v76iqn29muLyjyn45YxrdQvSgnDb5S3tcuLuWAQnno7veYz9xooARfXPq9YTgoj1YYCXwMZAtct",
  "key2": "2iokSKuJ2JSA162tL7ZtLgtrjh1xSvDDpSkSM8onPNiWxhyqazDueid54LzmFEjqKyBJZT5tP7t6xQ1ChP2MF8Af",
  "key3": "4a34RuuVLwPabCbGso2RFodRtj3e937V2dQwhL2Zuvodi7RSDbBoUDFv5852Gt55i86fSuWic18FZw3ZuPLJm3za",
  "key4": "4ZZTeiwBsDzcz3U6orxTM2Jr6GPTU5cJ8ZShPnc9hMwNeRqgLrbMTR9QWka1V8uSRmvBZ6XWmV8MQKo4ssT9ywxq",
  "key5": "2v1TjapyW4W5siiSap8vKN68YifvdwtJLWLZ7a1q7a58GkbA7sZPLaQJxeCE5dDjNSVqs3aUwes9ZGpXP4NYyaUs",
  "key6": "R3tddjk6vpKMKaZHdvCCVvHCMJcUSfue8dJMAcBLuQK5Z3mt87fmZgDQf9mPpshqoTqgkJRYEdc5JLdAM79GuDB",
  "key7": "4vs8u57nZk6HaEr4CqqDNW59Fu1YR8G6R5cXFc1pgdhriZ68QdH6ffZeGkewdkMePDCxZpgqjd7BxqTSy3f6Z9oJ",
  "key8": "2PHx1z7Co5mUFyHkbkf8yeFRbSYuJpz5jx6yLFTWBASYTZQ3ZJMwdF1MGYgArVsqFe5o7FCWYttBqZaFJWxPqer7",
  "key9": "4Mj9uhRb5ei6JWChXyp3rKy6Pn8VMfwRNJjS9okYSNWbwxmwhijRUyTJUqB9jtHpp6XPHjatwQA2xv2nQX6rSDoQ",
  "key10": "3AA97wC1mjZ8nwh9kim45u3gnUVafqtgvnZMpL9nb3ajPa2UMT5FaPbcui5PGD5TTtH4Urpx1aecHAf8iU8B893G",
  "key11": "3hQSLbREoTdTDvLGMaTFofrzpEdt7FUc9WV9LoPHa848SHeYmQ4RFbr65GYUKigb3am1jCsiwYoXKhQkFfK9p5uj",
  "key12": "jYsDk6egeZSMjcdzmRMm7GCB2KBFhuWsy8VNVFU26hPXrJeGyWs6HLC9JGRQC7u7tZ6Ex4G87WFcYdqbg8fr8p6",
  "key13": "3k7MiUj74gUNvHPpi6m6TaEu8a2EsWGWkZmch7tTA5UfPNNxMSyBLZT9iXt9GAE8347G41EsNAFc723k1Ye2KiTT",
  "key14": "2fSJfXnETEJn5dwEySMZCgLFKLemVYgJ29PERpAUBTH8UjAnfTNwFjVXaTV3KhPXd9hJeVBnbFLGi8nBt9nDn6hS",
  "key15": "5N7Ry1frh6LeBCGiWfGEXZeJwqWw7vNgYLiYRBvZKRe2m8NgvxutLnzVAhZ9uQHN6yNFrJirryNGK3uc4mqEJS8M",
  "key16": "61MTb7geyEmX1zZzgMuXDfMbtpmTNXADbtuKx37FGvbzMyL8sUZitKNXJjD3cDck45qn64qthExSmhubfAWMVPBQ",
  "key17": "4Dhejqur1e24rS2njawNp65AVqhRWnrcCHzQi4nsNKxffLiQBxmVbsWnkkMAmcS6JkwAwYen89jv4XRhnjdqceiq",
  "key18": "5EY3pvAmdqPnrzAapSZ8zG26eB1Q9kd3HfRd9MdPJYP8vpx7TK8i6MHsoow6ZEeHHyPWrRbrgUMkpqviDkuius81",
  "key19": "21yEdzsevMes4sunA9obcKDxBSUrtpc3K6ZKu8uPjLYLU5mvFL3CxMXYiGHzxN9vHWacAHVYJGipH73uLMW1km21",
  "key20": "616jLFs7iM9AKiY3Gd9RKemomu1azC5TvgN5Ebntic1hrZmYhzJBcni5JcW73YCyiWezjWTRhzBTVuFhP6ZA2GyP",
  "key21": "3MtoCFTDDKNbijQ2wS8fite89fyh7EdrSRJFPG6umC4n622YgrX12vYZptSZ4WTqxU7ft1syHNrq4XjZPiUadmhf",
  "key22": "5nv6jFPSpvuRJ8BfnHonqCq3ePihsktSXjxe21kyK3m22AmKjcfKQmSSX7eEbWqa2fXRhi5qNJNtL5gU3uyx3Wcm",
  "key23": "4DB8yHZGo2RVEqEAxSYgd5ZKjwnMxihbQiKRCaLKyXNGbBbamxFHy9SVjeLS3RYjn7Dv9nUYZEgAQijXWxvbyLvk",
  "key24": "3EUhMabhJAbmsDhPdDtffqse4oGhH6ncap1EdAk32Kg7qQ2D7RVzEP5UA3hkgaDycYXido7EjHHtFGparAVhGtAb",
  "key25": "5LXG7YuWAcjKYXWvFsCLE357ohbRsiiQQuJoPDRzCxMcT5rxss3BT8xNwZz3PZakygFyHEt2iuqZh42DA8DHBDQQ",
  "key26": "VdJkT7ze3PhgiEHADbBgi8f1H2vTKdqMh7zxPKdKyvHhsuP2NHvDt1BKoT2bpjy3heM4zvUkxVQW9dc6mfa9XNT",
  "key27": "2vAY8trV47SBL3Xna2pv6JwvekpL8Ur3fkzQtshobGAE8xLYEmDbDF8XqrxEYwt5TJCqTKN1MfiBfJ6G5DZr2N2f",
  "key28": "4JEK1BZFkwDYFnvzGFSoKnFwjmc84viZAjqc81yoqQQptnC9zfZM7oX1ghTSrMNrjWEuNvdu4C78CbpdXjKd34cg",
  "key29": "2mXVPJwmeBhCQ53Shqqj8ZQdtxPSzsemWuXksvRZab3aDnkp3d2U31TcwRq5HWKoGAvJ46w6qzf3s3v7JhHj3LGP",
  "key30": "jfgztvsYmdmSFZLeWE9eyS3BJjXLJZD6izWnTPpSknyb15acGMVHJz7y3J9nV5vHnGpxPa9ZJiSDx8dxNqzmRJr",
  "key31": "2zSsdEERZvZm7bNQ81aQuWSnZ3bmbhMeZg4Jgr9xbreZTvpxPjRS4fnJCgFmSNjZpPEkkCCNXdReETT1XpMGhqKD",
  "key32": "vtYPw2soaPP4AdEgZeacyCEP2tz5z63KaK7Gi6BPAMJQRzDwGEZCKkGcLDuNSpMRPWDvwYbeVwm17kpzXL5kdMa"
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
